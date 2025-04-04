/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "25jQcSVZxCCSRmU1i9Lk3fFwqErN6aC4dpNL2opyeN4vjJ1ibhdHAmKsnemkeY1BhRGdCBWtwDHdq5EvXp8JEapE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mM6jQMuugwMAFxRMG5w9hYMspSMZXxwpMyeeakqFLbQgAvvWe33Sk8L3jPt1QfpaohiXqmJN7T8Fg5a3TAZ7JhE",
  "key1": "5tF6is48gGDBP624H2gTqqxMk6EDySeVPQTUubZ2NvNhY3UWsckB56Qm4ZajfvaCi3c9hc3gL6NUPJ2a8W8szjAN",
  "key2": "3LqCRD9FdpLDqi5rB3vZ3kVHr62RnG7ScPx81TU8G825qgbcv4Rhy4EhEQk3Q3vhuyhd619Y98YLKuxWiXU1C5Da",
  "key3": "5Het7ZZggNRR1HQvSFZFXg2rgvfRQme8PbgopwQLn2wy6vMVaZw7VpBHYD5WZuR8v97BomaEidv2zYduhwxkoQjT",
  "key4": "5bVTYdJ3oGSQ5BwKa9Ek8778K8ZT3Y8fTCDhNaeZUx7955J59QpUMn7rEuCGMeETy7df461juhLW7gCsz8BSV2kD",
  "key5": "66jTW5QbwN62oootnhSLmcybVrVvyfiKnKVzEHN2mNVLZvqfy89umfFGdBJEsd8i7G87PzeLgAMn4U1Z9Szkh4nt",
  "key6": "3o6T3Tkovuk9qpGBRAk1eN4Y4YdWMqjP7p2uxoPEUXFsHvsn7Ks6zVfqpyKKhLnHpJqhtowkd1EiBxxJ6F74JzuB",
  "key7": "2rTGxFE2aMm32QdR5ryBXKFrArvoRkYCxVHWi8R7vwo1p6uu3C6RKAPqSFFkn7MqG3ssooTpn7E6JVkx48UX2GYH",
  "key8": "62ar9jdhQbihgwvyUEMri3YtT1bLzbX1Li4CFVctXdGgPE323y8Mn4MzaVxLKVUsjBnjwaKCVmbayg22sWbKx73J",
  "key9": "3py3yArjiKkPzATG5uLV9KY1movndzf7DkMSKBDZoMAt4yGASK9hVYrqQACRuXb7B7iyXSgu1Duf5Z2nh2G1vwM9",
  "key10": "4XRedKUHQLxiHUNYEGiF37tbmzrsBqQ1hM5WbtCUR18MzYGydXXVSyameyLTCUGNbCZp3REEVuSjwKK59U9XfXJA",
  "key11": "ZgM9vw7iLqCfFQYJEb9Xun6PVLwAZZyK7RU85sJ9sVrrYJrTQMxTFEx3CtxRBWv4xFmsMmTCuKK7PxdeM8PbnxQ",
  "key12": "2GqJowcWvssKKFKSY4Vf2kxeGa6EA5KVq7F6nb59xma3mirT2mKwEf69MfLRHEA2UADRLnVhX2dFhsXk6hLYfByB",
  "key13": "4d9KcavRxb4tsqCHkGsmBzTWSQgNeJPDqpnBWE2d6LmX4VrX2ZkctydDCSHqCVrLkz8pVwGqYAPo9Enk7bx6SKd4",
  "key14": "dezpxFNgQkiTSToZZL4pSPoxpCs4sJpfUV9ipvxmPVqhZDzg7WXa4s9tVHBQwKJABUeYdtYKbDdPnVNqWNiKWZV",
  "key15": "4cWVCdPEPfWW66V8paNXpS87UExFfE14khL4XCU1hMVR6Jz3fL2riZz6xAVYwP4KTLTMjtrTbqDfEW8WA5KFjd2F",
  "key16": "3T7cePqaTwsAVJEfZt6XhWWPK1SPqdgmLxpXyjAQ3npsUn1br5Hx86Txw2RfWgRiQs4sRF5iFTP6xA1uakrq7HkY",
  "key17": "3AhGFjMnZNoDtnXAZv4dwNyW5fqPXrqmsfSL57ygXURjsFSswRMVmWuP5jRPF548zHsmg6HDiBhujUycCKaP4678",
  "key18": "3zF17vrD2zGeY7AjEhsbu7eDGuzKyerUeNbSafPhQeYu4utnNvw4dgJL8xtT8HY8zrdrkBvg4M8nqCw2fLrVFzj7",
  "key19": "476S8McaPWegDNqwx27rwu1eZDiSuc8znk6eHSrvVj6NDEjfd6mSTcKFBVnEm2vGH7uqmRKpgcaZMWcxyhTESps2",
  "key20": "5owPjucSFx8CokGssRcfk3TixUXSx4xLzMjhx27mvoXfUX5TWnL19gGEo4Wtg1YrSp3roJ6wftLhkgSCNQ1L9JQt",
  "key21": "2oPYGrSzzYA2KSQG8h9rEntPxRBsesTYJdw4LBrcC8csvcWb5uwv7zRmAuisgEe6Uni2Rvc58Ck5jN54YLbhrMe3",
  "key22": "3JcQHCrBm39bfCKnKNAPMTq9gAotKr3WNFfhRKy7mzjt4H7GxKjYsrngvWnweZu17bbeufYiqXLeYdYaLz9F9A6u",
  "key23": "4ezhgiaPmLUiG2bRXAExV9nzJGo9m6z94NQuF6La3T9MBoc9sMxhezjFqMBD94zDhcUmP6HxCYfYFpgKtjLqXozG",
  "key24": "5d4pg3JeiqACzA7U2YDjiwoMiQxNP1yoTGhkFFdY4GrzQWtrL4t41eLTgZ1PjTGcRXNeCyrnkrjsiw5tL1Nw51od",
  "key25": "2PuoTa8y6c4w9GajhqcvvGi44eG496wKsL8dCrMZ7hDfNeHd7Cb6TNY9uLB84L1yEoj7NXUTLxddrPrFH4qRYLyt"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
