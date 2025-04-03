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
    "3pFh8i3kj4MesrSkFnraH6KR9PUi5Sd6gYnBe9x2qyegsK1n1YYmo6TGtzGkuBJeU9cFdhdwrTqTAGDcMRgVLyzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FShgLJ3fa9cg2oBcL3GYn8ifSbUZihwsor4hJcQiemJtZ26xGgzYSntfHwUkji9B5eEqxusgFmCyvB2A68d5fNW",
  "key1": "4o5EBVkr96wYRqe6LRzb5MwXcmnEzdoMPYqAdX3mjLWrQjxdAEtkv4PbRE4mygCJusJ6HZ4W1KtRhkaqXQzWSeBd",
  "key2": "4iPjJhWexB4aua87p5YDZR3V1Y5XK1WFYgt2PyT5FWGjMdtp8Lyu4cLzrAyMU6wmbKVx9WYpG7c3UEA8sTHNee5b",
  "key3": "5UfcX9VKSRfhKTgMRq5gMYEvurHbMU6cEvxSPrPiCgYfuGBms1fUczNrTW6sJedfe7BSvVQkg8NtnjvFTX4UV7wB",
  "key4": "4fiBFZr8vHJNsAKeGFTe5LQVswv792C9gZd7tacU6s35Fpmpg85kkKMtRxEGwZFbmqi4ZWrnxPsQVktZABYi5jCb",
  "key5": "4EL9kDCuuTSSPgnB7TyytqhED9KBA5XNfK49RJ3TprKadB1MDsLSEpcTXwMTZR8M2f8vcNjqSehawDHkp2CuCWPc",
  "key6": "2rDNJYshry9uk8jGv5ruh37MScqUAVBDUMDvJqCCsFAjjGdXdckjeBDEwhAPEop9qVCuuDiccWXeXV9nNFVkUzFX",
  "key7": "2vYBxirSN8QxAgm5gULnHEFziVkqPjjtLCKnp2puEwaWQCTQhiRMxk1yomCVd368mFeLCzq1CBZfjesK4uNsyRsY",
  "key8": "36eAKrDNkWWK5q7zPdh3EPPCUsUiWs4YoGXjoU99nufoxnhALk5By6PjK1aS8CGjZ46FFsd2pxCNS9zXoJCZH6uP",
  "key9": "McdLKnnhnZ2JeKDvR5xUgayRMUz6yeG1qjfcLxti3aU5jqFdu7aN3UNG7oCS9PjMXTPuzNrHngYPyKXhe1EpneY",
  "key10": "439ywXMQPoZQUjB3nQUuKKpMgt1bvepaysXYCJS69mtrzv9Gjb2eTeD8MXCyEJ1QvEQ7UJDS5BLsGc2oF31qbQJZ",
  "key11": "4GXZw3TJTWh4UDR9LQ9WzzDgLTcCeX3yxhdYdRWbvJ5S8fnTSDwuMwTyT6RsX4dwvbHHeLKPd627XwnjRggzzqWX",
  "key12": "4vJF5WkjsdPbFiBbZVigzjqmupF39uksT3JSj92PcTMGxDoqJikkuwWo7YBfyow3UNtPcybeALV3bsEWGRaoyB5g",
  "key13": "32uEzEtbQGT6r8vo3FiwKAQHCdKccTBhDhDUsBV6Y2vewLSEw2HLHFdemQfR4E2Ap855dC9e5N7NeyqfcEFwLP1r",
  "key14": "5JiNtudW9VMDTgcXarkHWJRVyTZhgmENyuqZEobSTtqJQbzkkpsg3b469pWD2qJTQK3KCWi16H9F8Bs2G9aX5EgL",
  "key15": "3xfzTJL3L4icDPmUbMJ3yknEfCaPX2Eh5Xj7wkb7Z1qAAahe4EVgz3oZiLQUQVeimcUYV68tmXUUXYUNFb7Ly4dR",
  "key16": "4TRcwQuz8vW89rPre6N9ZxGoGFSvbXi7eyZXJf4nX6bQNoAPbn2mHDH19Hr8c95LFPQpFQdDERJEAua4F26L5sTj",
  "key17": "4xnsecV3CzPHVi6VrBP7aQ1c2brQGHffekyYvaPTUoni6nfSUiPCye1WtokCziAyAP9hQoBRtbtQkX9DWbqbS717",
  "key18": "59EmmoQW8Bw7tCsFW4VHWbAtcmJvcUqdTPcnjC5DWpGEwrAQQeKodvuAoLVHwuUCRRA2A41gNC9UTrTWB67Zjvom",
  "key19": "3Cj9qi8NdKdbkAXGUPsSBWjdrgLvyRw7Jmd5jfxnv5bmTCeKdNdZWqA54HXNVgjPL46VuGrgKN6UH3qvS1kvHUrb",
  "key20": "4iBQkwEGbE3GebJ2Wz49CmG9geByWF2HykRb7SmwrorPB7fDKDZxPGFBr339Cy3wvdNrMWkLXZXPoQ8L4twG37eu",
  "key21": "2AK66GUDZmxwUASLXBWHptCKfH6N1pgG9pwD5EpCAMNnfrXFSDEPx1RKCZ6ZDGWHK64g6A7EErmANPEzWdGnRmkM",
  "key22": "GvWnrP4UuFaY5dT5J8t7Lvxfb9GFszcJcCDr8Lkxy6jRBb1GNbBmYfykDooMtoKVaDU9eF9ZzUaFhey7QgTqTAf",
  "key23": "7Zo89UpY6Xu1J8qYyrfiJrMccCaArK14w4nYq4vX7oMQ3nUKuXwyEaz7efN1fuZ3ew2BaiJr63Gw8QCF3hu4fbp",
  "key24": "4tjaPzdN9XfxL32STf6RTLeUiinx54k9ey4zof2BMrKSstQJDN4X7J39iqD7v5CVXfJQKAoTzssLKRkk295BMbkJ",
  "key25": "xmALyNEo4PYkHmQ66tfk6ueVXDzSVHooiiSkAZ88LySR2pdzJ5qQd9HUVAzV3cGLry3dUaTJyM782WkA83ghPbE",
  "key26": "35Lu8xGtCrTkoKgXEp4AsBixC6N8GxDcFvEmeFLcNH3RyvnuDfSLG24HuoNJ8yJJ3uNvay9cgCmRwiPAmxVLYisq",
  "key27": "33HGUrfefTJSoYqWm3E64QdZtL82WbGuDugkTh9XjVsoMpcHuujw1Hd6fM15cxz9SpPXPkaptDft19wm8VacdqTH",
  "key28": "3uWDhKwGgEWydWk85Rwa81H1xYa3AP1L7ZVw12pBozca5F8FikEu8rkCdig4tm28cJD98baRgKXE78UMqfQHMsiB",
  "key29": "4W2uVGuiABrpP5fM8AVEXXXh1P4uTuS5egLdRpPHqNamGuZ4WTKcuGxvhuhsGUDEsKbTwobWVnhoVpvD3AGnpAT5",
  "key30": "3YXk2VdZfWShNH5iTAToFGR3m4fZDDqVdUwwzY9vvKtjskLHpcviNqZ4hVrfUsuGCBvQr5EjXBMLKgU8ACGo1Uh3"
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
