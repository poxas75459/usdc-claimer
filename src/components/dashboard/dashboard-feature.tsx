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
    "3Zk3xhQJHSSvUFy24cKDAgzia1rd5bon2WU8aA6JvxkV85XcRJHXzrJyFb7dWdLqneWT1hn2UAqZ4tk7fttDtw92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A31TLKCnW4Kutqhx1XH86qmZX6nJh6zNSgyXYsWGhT6zBWjhQk4TBvSSubaR5YMbnrmLryAJJcLVAkVNkcjDKHy",
  "key1": "tY5qcczVhMR4zoXWEj9G3zzBXhmAL53J19YDKDdxzGqK9aJcrrYe8SAdXzadZR4HXk1AAfHWabqgeRPAn2vCCpf",
  "key2": "ckZfEqfV2HikZurBKifbarruCuoKNwcfQVMgDVZoqRe8mbXZW2XUrFPv1aQkPC7GJ5XLhHExs6NtaawE7fU3tiY",
  "key3": "22dubEpfUQ4tbzWkBdQktWhmrai9cisL3c3zqL3ieP13FaceQMearwZttqX9oQde5XMRtPCxT6y1F6Y2P5iss6q7",
  "key4": "4VBM88AaxthG9TxcifaBfVvqhW6V7kBVDKA3LJWxQsSqhyXBJq7LdRFuLGFc1BdRxogkv7JokP3Qf7pGiMVYhFXL",
  "key5": "4gMWMbne9ZhLBP6xrB9TwZY1CbgWFFoTivRrRX55FebvsQn3XtfnpZgwwvwSWWieQRaSVRseqGnzhY9in4Pw2Lip",
  "key6": "3VhpwLcExBtjbYXDssbcoY1igYBXaZMNQE6zSUdicP2UMHSUuneiCSEJgedGHkhZh6mTH9Mqfbz3DvxitUrW3mAE",
  "key7": "C9SdB5UvxQ5jdsTBYg8fzGeB1GooRrU8FqKofuLTy6MD6AmmmH1c6FzNDAWPak9q3Lp5PQGYDLjvpk5mzvc5pPk",
  "key8": "2iqUk2BxdYyNpwAN4DWrT2t6y2WUghwFpUMhXtgnwMtSvmLKCgB6XTdpVKYdV759HtCMsTqx1C1wYZ9PgdXdGvEF",
  "key9": "3Vyw41JR8FyvEamQ8pD6LXzzaxLa8kStJUvtiqnmvGFHKpuhHrNdFscBJ7Ry6rQBc35vGP3bfcAxEy6dFPkNNHtQ",
  "key10": "46L3TNh9s6kGfotpviSrwqnAfkrZgUoFMypSfgbTFjPoELN4gEYpNuxAR1KQNhfL1DidhZny4U3jCasAMDviykLL",
  "key11": "5rTdYVWjfUr6pqPPG9XD3aiWX9zYuqrAwQbBDLYGav676VSaaNDMzbnzDAz2Nj8WBziJSbsuZZPLhKFjDHZNw6E9",
  "key12": "5vqBjjfB1ddfGQP76Mf1zSz2Zkk3Jhw8NfgFCJYuiV2oD9of8cVEbG7cnPQf4XH7PoqMcAMyJLQRgSpxQ3RPdSex",
  "key13": "2p521o3P7Pc76StZhDZtdKFYjsh4j42nRHbcStuWoai6Eib2cqtFxXsPNZXPPsTjQNhiDhiWEGifEBzmvhnujnPx",
  "key14": "butbSybt33HoqikT2MHM6euP9M4s4BVMenAtCBXSTs1PtaropSjd7dTxWtqJsfsRVEyZpPzbyGi3dhmbHtmqKyc",
  "key15": "5SNeUmj2e9tkeja6wKqexdD17E3eygCqpGPCJK3WVvjXVMznNFsddhJA6uzfJksNENjfn2HRM9mBFyL3vSi47EaF",
  "key16": "3S3a52tizziBsVmPE9psCY46UTxJHKsZ3NZnyMu1SHNwacNudCgebeizxun6yvvcG1pYfRws7JaKVN5tQWQ5uKY2",
  "key17": "4zxtJnWVbp5cRJJYSUAx87XBYhtkKJkHDWPUfRLHmuf7nCir62pXXaSkCVkMZEVi4S4Qu5vByxpxZDUaEsRTiPRU",
  "key18": "5Yd2ZUsYpSHXqPkwtHVviaD8zThqQaPnh4PKr9et5PPScVhPCLvdfvkkawyyPUhmSjL96efh9YWWrdj5Un7svd2Z",
  "key19": "5vqSkue38P4Rdb3dKjnECaHMqCtS8zyGYeQpwPBPYo9MvTm4PLQyNzWMdFp7pVZpaq671GqrLcgDbfPU2vR5MGbN",
  "key20": "5qckk67i8yokg3PNtNrSTaYRnxqDaJ65UF9xXcX5zdtQLQZb2MhPqtwjA7DNtV3QJBhXeppEsHsWmibQGKv9BPpe",
  "key21": "2AuHiF88c6q6r6gpKguDKa5M9gEkRQrFMZVqjsxf1MLVNnJn7bgz7yUS1TnpBafcfDdXU8rh2z71nDew23wdHXYe",
  "key22": "wuJKHupN88ctbeGRmhyJvQwqdL578tJaL7pgsA9uoorfKZU7R5KxvWbWfqDJSXTJRM31HYxChLi4YDb7bfEQNKy",
  "key23": "5rg8RYk2jjbSnf8v6dR4oNtaCBVV3udo1TZX1nhq72GujERWj3yjxXGQBiFN3vopuiGDvjj4cuqnHFZ3LXZ5hQyu",
  "key24": "4nBDUKEbmiN1ZhUPQYYw8d8j1ByLeb9VEnrCU6VG5EHnEGoCqhQtQR45zdhYqJfTqszqF3eXoErC2srPE153hzNL",
  "key25": "5w6AGbY4XUztAEECqAvi2CZ53F7aSw6G9c2372g6e31QP6v62iVc5rR3HS3vEBLGn69v5NYj6eKbwjEZU68uWZkF",
  "key26": "4x1nDR51YKauScDqro92CvMufr7JSSk4zweRsSK8NXA4vCk6WQYyMRjQQWQGst11EwTfSY1ucBHnfNQCyo7asfke",
  "key27": "3s5thx1fafsRckMCg7gFfSWzNoKHDbq9pvtAeRpHJuFbErNixZZxHUZq8kxGesn58B5XYTW1ucK1AMrMaxwi7HBe",
  "key28": "2v5aQgkFifQrHXEvgtvDY6fcSfu3jYMmehjkDvwkJFD6KHBF5WzrXtwG3AiVfjzQfTuQkA3SxdsGtaeUHMHQZBRT",
  "key29": "YdsMnE9zi9Q2sQkXeBwnvD9XRHL1HBSxMMxYB1gRG7dSDg9WjKq2vtHkrve8xhTKvB977YH8VQ6puLezts7PJyD",
  "key30": "4r9Xfq8QtuPaN6JhBo22757K5S98bFCRVEnnaHa6m5YptS3WiULp3NkrHLXyuKMhQevxRqQ6PrSQmJ1Dmd5YF7dU",
  "key31": "3p6qCzymgwkoBmMRBxc8LcqoMbsS4Cd1uu8RJEiV8Wt9wjCDshM9GCi5A96yDKMZ9jE3t763xVCrZiRdX8H4Q42F",
  "key32": "4B2gYjfzj8X2c97xtsBLXiFs8tywu4m3yXQu3f7oKMadgdJFJw2TnFTWDJsueM9Hs4AS1x1WimYqEK89emx3poCD",
  "key33": "22VL1Fsmy3WCE52dTrpvfnR7smQBJ9EsfFSwhKi8K91bP4bstsri5oGThYK7x6h9cKviUiugzCeVqzxvaEeCDncp",
  "key34": "5SH6w91jZsaHLhhtPBVhQvmi79A4gxkh12hCab3ScdtwFerTc8DoHJeSgFL6eTh1wTkZSMkFTmSs5yZNcBNPJ9VH",
  "key35": "Xdn8jJgZG1vBNQcrXoZdLZen5jnPmiqGzH4YdMZLJaj7Hc9m3uXHmwZeNkagT6JebW7DpYaxXABwhCJGMAjY3KH"
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
