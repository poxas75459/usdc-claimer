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
    "5xmYYBFU6PWfEpjcULRoGEM6xRAGjRL9RVdfiknFSRFYsfyK371cJXCE6F2KJLMWofs22o2JKGpPVM4NEwKLA3xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMkfCs7sxJfUiamjU5htRdJh9zL7uDbytkCPbVEhAoxXHPdBjDJzkEmG243cLRCKJXrWM91hxRebvxkPJ54LCm",
  "key1": "5mKWu7VfDpQGWxDStmG6VKzDUzWdu7B36hM8Ur3QLs33rTJEWSahekQdexVe6nSpEw99YxdQzBM39Y6hFMoPHjy9",
  "key2": "4HvMdmPeVfQ7twnpKyUXoZTmELtpY8ELWJ57Lc2hBeoQu4Y1hBDiEPYCxsBQ83FdkCfNETjam2cBBdJ2dnbaRtqQ",
  "key3": "4ayDqcLLddbG8SL2tMgfzPSUHEFw5R8P2cHAX4QnGDnF3qacyGtUmudtSGAEKH9egRt5ySuMraFTn9Q5CkCwLnzK",
  "key4": "eGGfgKH5uQ5yhHKk2971T2XYY6XTXctAyBYgzXCuV9JjYqVfDkGHGJWc2eLB5Uha1SPEvgXmb2h6bfWu6A3LqUF",
  "key5": "3939m3fhaPxzbsYwTZbwsaUeWGUSghayVSXfGycZCYC52KU9LF1Xcxv2METjgHfwojP5FZ4qmoiBwvdiQWo15MTt",
  "key6": "1nTGV2kYPyeVct3vbgDfK7vdLZP5iUk7F5KywoDh1qz9s7JHjAKgZjaBzhZDZVGRoL4amHRC4WpMfyrenyaDnpc",
  "key7": "3Fwhthpw1r18hnLWmjcThXqq3w1P1zchMmC1sADokFuVPnZVALgFvrnG883VM3WyLJgzMt16iUn8NewXz2AWJmSF",
  "key8": "XaQfXLf3kG6jQtyBzqxwHq8YSrYGreWqYEjZgnmCKvxA1cDsjwgujfFSN1Ays3foTTp5eWMNqDjGwsbobMoLMjY",
  "key9": "2iTFRC6hsZ8yLGa9j2eahc9LxUqiBdvkYXymeCxvkcayf9YQVBFf37mDiRB4zdygzTyXKFuL767G2YMHWpjHZ3w7",
  "key10": "2JtjDZWyBiWQP47jSDFyZjPwF5SongRenVkZ58VyFdq6acTiTLrFnDQY1Y6zC1Fm1825cjWu4M5jird6ZYGVnvrT",
  "key11": "8n4jx4UcxoAKiKpdu2TD81vJLcRjfS92VRyQG9PH6wz6AzZ8B3FMkq5CerB1SBjup3mVVSmqyVf1HqY4Kp8dLN7",
  "key12": "cFvtuufBeyi4jXG8NAF2eBabqzRAy2XhKANzxpNUUEwgJrU4o3H9iVsYa9hBazCjxgFUonSapubNmPBkYWbnsc4",
  "key13": "5oPEXytX1f55LrDMhveMQzzetSVSjW9z2WgLMxTBreXmtaJCwmkc4xiTcN1QoGzMYQxJXf54uCCTKnHhvox8zo8Y",
  "key14": "JW52XLdm8i6vfRLpJiAnhBCYi7DDrtpzfPBqAeDXaSgxVb6PHahzwGxgfKAYPAktm6JtJwgdawLj4L7LZZ66MgJ",
  "key15": "DaNQpbmcRUv6p9tRHqwoMEJR43XVSCYs2Q9gNDB6aGMCAAnTv9KFJHSmdV9HLVZXLQdVVVVW8uDyuwsjQEXVY8Z",
  "key16": "4q1NupXTn264axsySQjX88TRPQjYNxtXzbvVjj7FeGoaY1iiGWCCECrB1Rap7GLrkqzwzmavLC3KUqAcTaoEEhQb",
  "key17": "4SWQSVjbTFFGE5LdJZjhnVmfZ7ZVpmp5HnNHphFCsmVX1vjemCDXqJcieomSuyLHahTDTQTWsPhmurVM3U8RkCX5",
  "key18": "4uThb9ALF55pvakyTAy8yADK51jpeYBXrzxkdJd4oyzsDMvJNrP7CseatVmFMXu4ntkkVogFsoBdDvyWXvCt1Wyd",
  "key19": "3RsYZ8f6G8kFWx4Rt77T468bBqcamLDuB2makm8Cbz9rwjF8HDk7p3fMwb6oWHQcxo7oqYQYvCrBMNbHE1xL4SFH",
  "key20": "3rUNDEQMWtDKHEsENDVvyUsJXRQmR5LbqiGU5MXoyKzZNvmrBQZwitog7oNA6E1zNbAxhHBRptsqBksQaCeuNxfn",
  "key21": "DBHbGacfTeojJ75ARbRwbXxHoU4vQbBUvvE8UR1QLt34LrHzJEAhnmdHTReWTTDtVhVMsUfTzAyoBv2bwJcyPVm",
  "key22": "5GeGm2AQv8HidUouNtyRd3XL2BZcUWzRuah4FsEM5sT6mgiBJCDmSeZ77BQEVFdr4cPu9LBswrQuwTm9KXR2BNfx",
  "key23": "5Ay7wgsev9Wv9cE6Mq4R9ASyToZhs7q4L3W5LFaLKCwLtLiS9o326PashfEzU97RvPGYXuFaL3VFvtpfJCEFXCFN",
  "key24": "NT5e3XTAxp2nhKxArENbHFnTuy3RfuVVX6z77k1UDVYv5YsrMydRzNogRrkhY9UNP2wbrgEr5mfxfCw8pEgC5s3",
  "key25": "5HRnSGNHYy5kSHeSZLD6EmUZ9ewmqQkjK6mnxVe5BjthKo1TL2AuNdJDJtgst3iwykt1V3wTxuKyVz8ZQqH5sC3V",
  "key26": "2aWoE8qXNwkUS5awBw22Z6bjm4wqBra9KPV7PJKzYE1PJNSNjskTj2hayUh2ju26cPfcnkby31AGfCyY2xFohP8N",
  "key27": "38Qao3SssK1cyScx5fsq4iqh2fbT4sg7mtrtMM5CxAH4Fms6dDENfDys1HekUVT17hABEP6BGSDGAYarAXFT5njo",
  "key28": "2xJHYwDKYgBPc5e4feXBHbefhL95zBpkjWNJ2r78vZpT6xmJPUJhK4PBmbtjdYshPF4Xap6Th3TQZfVeg5WHsTPz"
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
