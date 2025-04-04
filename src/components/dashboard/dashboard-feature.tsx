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
    "4paqgEC4fPtkE3d3ajMWwUYAnGVBrH6yxHe3KWyZacKTN2MVAE7mZcEGtG4AhnuhLVUNjvhLxWVs2JeZXNazSYwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YaYAkGVd3cU8tA3b47tY8E8ozKpfcgBbhumrnr8vA6cMkoYY7TPQkFbPYTCr6DK42zMVUvrSuYbW5XdPhTC9s4",
  "key1": "5oCqkwyLMdxV8PPXK4YLdEhY55TTCqGHSPnHGZBvbL39GQoxSD4gwpcdqGud5QWuGcd9Eb1PrGgwyXo8JjN5hLkL",
  "key2": "4yLcRqqnSiix4GcgtsXRCmWKW9iSGUsEWc63XHTzTrTU7Q6NTQGrcf4PY1fyZozGdUtpDCmdSJcRTvrPWqxEgf1z",
  "key3": "7M6ztfiAasVN2roD8QyR2A4phchMn1XPduNSGoQMh8QfWbarghKde8jWhrp4JMEkbcabHpZ1QCmApUnfhhFv6NY",
  "key4": "imsNsoirDKw9K3FMR8k8ayBL1pR6HZNnTp6KwN1iZkN6meSkm4xzXnvCD7wAuMYmd9a19JxciNLFqqMEbuF2eke",
  "key5": "38pGTxajKBtmtiNjLNETJCPRMPJCuCSu2M4b8parPdFMhkYH8tvHXXEAJ5RUi1Phx8shiEctDmxrqY91iL8gWjC3",
  "key6": "5QHPUcLhdjgF9iDn9ZRQtfzEqVPa5veHQTY8iPRhxQZbkAHSqwfipu1ECEDDW7TvfWTCj2SwCeDjiC6UNRDRhuq4",
  "key7": "37LcBxsoV3UKMpbdxBKPeMbNSAeZEkHuavm1uTfp4hTqb5G8mBnJi51xUKpcEvym9JPBMBuYCjYv3GJca48RfGLL",
  "key8": "F2dvkVzo4SUnTFWjNDwmvFVCW7LUN7WFVCRT1Ltp5z9JrfkNzJV1RxKXcwoAv8nRjCGd5aZisLiKkiB1r2Zow8s",
  "key9": "66hgG584NYsg5QSzvDDvxqEf9hN9EGQ16uCqxFaJAmBD1Bk9uooMB1GaD7VShWvkrPPVGedtZU1pZDLhcTkahgnT",
  "key10": "azFohnEqGsAk92HMLYdoFixLm1oDkKK8uCyFea9s4YNWNuszzL9XMMdCQy4CtsfkYcgtgyzUfPEdvr1YWhz9GNu",
  "key11": "5DGGoB9f6GoKDJ2ba6jYBTX2vVnXQDcuNpNeyfswfHeQ61pTPLnyZEZcsLa9s5N7mjkuVpsoAganqwX3U9ZHD5W3",
  "key12": "3i4rFPznS9WkkWQG1DVhqK8amDBPJdj9kpyeJ2nM3eJswwGE8niJF429hsGWuRKgBrbuMjdoFGUY8XMwxrYMsXCM",
  "key13": "kyCisN875UFZKkaDzdiCozyvwsoHE2CDStpVhUZPRsbgjtJA8faYERKtpCNd7Ai4BrztHAVRv2bP1fLmsTPAtQF",
  "key14": "2y1JhtGqqUfayfWs4H4KtQrFJmKsf1Ar3bfDw8Vb4eWfQLrH9wzvyiGjHtooFg7xdckBJLGeEfcmRtt1y3DPEpun",
  "key15": "5G4JcwhdFeRQzC3sa2xcuUxZ8MibNraBFETjQvx6rZRhwKyD9EAidFPHMMNACQQPJHcvd91qjTiSXdLJnXXqmghH",
  "key16": "37LvJWWixBEGpPHJt8yYPREaPUfMPFNK1JWZ3ySAGiKNqbZxjHHgWHfKsDeCoZXyxUH9kiXiKVtBoe9K3PEfPKqq",
  "key17": "23MfjCnR1YZjXXFdoNiiicMUq1UeigGpem6CpaUUYNapV6meL8fsxzf9g1bVZSaZSFk5gs5Qgu6VLUQ5nHkdV462",
  "key18": "67cbACXNcJPkmTHKUJRWtwrBQKWbB8BzK74XZhdXeMBxMrSrwzocG6dpMbpwDoybPbVhmb89Wb8b6yzhXQZnUZYv",
  "key19": "314xsqwXp4URWiPAmNFH2cNrRcX2oAjfA4fWNpBzcBqJmm3sorS8c4QXMxAdZBe9iPRfUU6QtwXh5T4ge8CM8ebe",
  "key20": "5VmFZZXjwi4s89eQTG98FqgdM2g9aeTeGbL4yFCoyyVb6qQUnR9RjEFXQXfg66DSniHqSqAj5Lcmt5Z51ykGfU6Z",
  "key21": "2HGh8o4Ze66H8xXw2181vorZdhVXeMrwtmTnnCvEUjegfh2N4Ko3QMUn5WwPBUAVWYBhBKfFDQWsQWkddRdxeR9d",
  "key22": "33N3fWQxyNjyzt9Wrb93VVps9gsK4TJWg25ZoLDM7VteRW6HhnHpZ42xRm4noLk2QG6FTVG8iGecrFXB5gUoz6We",
  "key23": "67ULPP4c4GnWEfRhQ4jePMBegkSmPWzRYcXyMsJrm9GSbM39soTigrHkGuf3yYC398uGT7UYfyqn28yiK4ECPPpm",
  "key24": "4QoRa1KmjLCY4Pjud4gMEJTft1m98xswjDHNfVwYs9um2RNEA2ZfPwLJNZrMnEQr4BMnCHUhVbdDjwhxXwZHktC1",
  "key25": "4tvkfsgggUXDLvTzpsciMEUcSbo8Jxw8rjfoiqVtSn56TBFxB3CXT2VoksAR7tTJ4663QsGc9yvDbVUmhheUCQda"
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
