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
    "5hDnY8KuR7LBaYs445Zr2SKgrAGPkfe2H7H5Ls4Lbrv2pRsMrVnDPR97NumA4GMfCt9JVQAmR2HqZz4u6CaHGZxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdQyqRMrSseJRkBTwuccDJSL92HnvwBrNf2fVtekpJKB2ssN5L5jtFVXRJBmZfjZn6T1gayzJKqooRshecZ6Ufk",
  "key1": "4SkhqrHNs7LWJ6jFUmmAaQLAdA32PqiW1VbrAm8BksvxhVXApxTsxSBtMWCfSZZpe4bd7ckP7o9PgmiWCzeNdmY7",
  "key2": "5eHdQE3qAkQUnbvrk3QnMg3mg44QdzhpiVsZnKrfsodWhFtDS2aYojZdSjdBdigJbKEoUDouFGroBr2aJ9ubXxwE",
  "key3": "5bKczkAHNj8fhq9MkD26wr2w7MZmY6Ms4iwoDb2Keseh49NLZa1hdBNzVNQj1YfTjStv5UmUbvcNqRgXjsyNwwKa",
  "key4": "gQnh49cJCiX7iH7gaQqC4sUq5a4YC97Su5eFHNGsrbhynb7Ta3PeBeLXg1aiiz3tJfwCtMhayttMgiE2HC49XRi",
  "key5": "5X17qCpTwWjp8AKVhEiReJPowQZeiC8PpB8pvEa8oFczai5j4a6yNdR7zPoJw4bCEcmcXwqBNrkLuPVZwfAuZi97",
  "key6": "4AEwCjgGqeucpat7Fmm519k6p7cThBenuCcBTapvtAdFEsdjtKhaRbqW3aarAGubZQuAkFFKDP49VLagZMynbqeB",
  "key7": "38ziF6j3GWwMEvMHHDEvVoN7Pd8ERw7X7HYA58bWa546b9EZnyrQt1SCwDhcp9wUuCLjEzvWMU7sit7mM5XKCDsi",
  "key8": "4LUifhCM74L6cpp7QSbynSuBGc2LHvAu3gRjTFeLQEUsEPCdsu2u4NKcZRBXLedot7wn6gkAEsciZ46nqEUasKrg",
  "key9": "2qCe9kfP4uzdEEWi9rZ4dup68E35iYbsbTtwBL2B6YHSjKQhCTk9v2Jq7Kcy5w9U22r9aDzSjjeEyrM87E3JQ7pF",
  "key10": "41PK3mu5fxctaQFVskReVrbmnMMVcyJBiyv9cgUTqbD5PrEQaxcUMZxCTumdt92eucWUDTDqg8chUWT3ZGRdRU7F",
  "key11": "5PJZG2aZTFWnPtHkvp3sYkekhdMqMNQXF6ojNPFgW247f6Fa6kwKNvfQS6nP4HdWQoi8f6EFEH2xdJDX8CfTNvo9",
  "key12": "2et8M6VXSFcaLu112wr4xqS5cyCSzYRzx4KA2RNT8ozGMupVRhBzQThLtDwfGvDNUxqSZBZ7khyQDwC2oquKacHX",
  "key13": "4aiaeEKHgr4tpFLnY85vJF3fTxv7oUBvDtLhr1y7DjLzNeH8yzC3GB6TUxSy9ShQHidHuU6KvVFUcNDr9neSk1Hr",
  "key14": "4VmQK9ttyJk76Y5CcLQdqwhrMuVo7C3kUuXhYrgQt8Dsgos1qUhwzQokHSVBXpjcVkHMMPy88i21Sjouv3ahupWD",
  "key15": "2f8XfSfs4AEjCTm9Z9QvTdi3giCYJ3Tcy2Sat1yhievzHD77G2QmTb8s7Y29En935hrE5GyYtPhhiDYj7BenayEp",
  "key16": "2Y41kneXyiiavcWAQuouaSUxEYPde5a4kK1nCkE4kb5L9DMenCycaP1SUtZAFrDLSXpyVLAkhR1tMio4fi5kekzs",
  "key17": "5wpHzPQShEGHBnxTkAY2nycQ8GANEXPh7PWq5F756eiHDjLzaUTKfeQFWVG9cbC5dxB35uhUiNYkxZjAudEyUakR",
  "key18": "5jKTdgCN1exdg7nnFK6kahRzppbrCtUVqpGYhoWiX2QpCW6FBC2HvdWwa6X446njjpL1CXDX2D1EXAUdK4JBJibZ",
  "key19": "5Xu9p32fY4R864TyXPhCkySYTwSDgycos3YNANNygk2QVkGCGWUFNKAki8pLNWJv8kp69jKpBXTJfAVHckQdV3mk",
  "key20": "24buczKzR5MMfP4xt3qMDYh3xawwFtAeuX1d5XmmB2VU6PEv249qbzU6MzGg6XHDfLnNsStwiJVUv9yj1o8FdnWN",
  "key21": "571qbSEop9ydsrAEUhwDLmSEkCBzJtT61CNNiKVnwPnN3PmBfNN3FFCocgGpiSuBgJnHHNgmBHBnCi95Arm9xSFZ",
  "key22": "3HxuncSNAzY7BWcb6QSCokLqVHbDQkMtZe3g5pbc1nZrCDAn6pBzV1hzDYR66Tvozio9mp4P4yAtazxFzC4kH9V1",
  "key23": "4FLuzvNNucAY1RE1thsyDWQJyBEAzP7PevttcXqCU86pBBQ1UTVC2JAeUtTGGFiRSCH5UDRhpx4EpkT2Nwr8F6gS",
  "key24": "3ZAR6fxVLpbRF3AQyx2hvpWuWndKCoV8cPHPwBGRERT5yLXuf6TKSGREV59wmdLJTtX3Nk2nyrfyTb9QHUMUeVMU",
  "key25": "626ZL21FLnedzbWb8qzUoAPQ5PubMMjWp6ty57SwBSpfPVbZzNa4p2yXHQRFjijnLZjM8YN3H7tYfCVoqKcnD7C8",
  "key26": "57ck368dWrqXshzDhqTVABPMBYHQhfSm63d2dQoV9zfEyMjFpqMTYMtv66DtZGC3Dx61CBdcigDdQC9ypd2JxeDq",
  "key27": "5J7ZizjrRNgmcUga4hfFPa15x6oT7WqFHHMKvSmVnWU845k7VRLreoSkFoSskgEfzyLKFJN1QifUYXdvRbWnGwn2",
  "key28": "29NfQtnNmb7TnKKifkXLnMvdZyiJqUs4QQGK6g4K4fwxAwjkvCx6bVx6ewqNycuvkxkx199TmkhjLUcr8ZUsw5Qo",
  "key29": "2oKL5jxEjVX9UEde4bPgmcyrG7PhRLqigdkDexFCd9scg8RzYymxRYk9TJXyJxeXi4Jyzqe4bNEgVCtFGvPhujy2",
  "key30": "6mDW5gYvNDuRDtiyvpZsH4V9tGqZ7A8vs1c5qjUVrRX5W9csNpL3fJYf1YqE7dgQr3qez2izRvpJPYHj47Shb4A",
  "key31": "RbJM6nioveuK1RAB68d2pN8DoArCFLMjSwe11xdp4fpRFhzAQFfQgYZEsE3WmJChby7inwfG3eTNeFCiBWAtPS5",
  "key32": "sWnm1nYF9G8EUq3nLTxyewUdvqHB25bVpjgDwUvM3oRtFbUrXKeCXfo4Kyq54WYwM2LaHtzHqrRGFo8D8iU7k5R",
  "key33": "a1773HwfXW8mU4yxf78wYwotz6zscp7akjabHixBSyq5r3EH7EzS1gjRYfNXdZeBR8BUdCf8ymsbEZGmDzQEbBg",
  "key34": "56BUrz5TQJ6Ny1eMNU2xCmHsoBY3ob4v1b6dhytAc14Q5JVfthUk2nyMW6ARqbRoZJVRonxZiLsu2DraxifxK5jT",
  "key35": "21GyYhechkzzVvK8qq8e45Ejk9xcdM2isPHsHQZEgYUisZAXjkDRkSGfreUbc5a1L3CSeRYgz57bLma1PeGKxDUh",
  "key36": "3zvbuddMX81TDtj7Cbvow3NGjPdohdpDfwPfqFutD7gjB2NRM4wrBqWSRD5QjRcHsoG9ZB93FwxXRrGvmV1PmjBQ",
  "key37": "5C94MMYvcS18iycQMSoVWQV5gUKztLnB5bcceNZw7tAspnC8paEX1icSFSxG4p9RfuZqAUagEkGMRLMe8QdQr2gi",
  "key38": "5PJ6zwSR7s5Tn1ds2hSmibTW78H7MZZ64D23axjSUR8xaX2BmvTQ2wXi9V1n34nu9ZEcydx2dZvxP829WwwTGycb",
  "key39": "2tALMDTobXfYixxdx36gLJUPa5AkwQwmskPm5JztHVUGQT7N8doJzkXsbW33eNVtgp7KLU2tQp63mLpMcznyZH55",
  "key40": "juyasccZE869H6YBSATCk8VvCnsGQLXTawYtuoFMSUVzC4eJVvyzFvuYgRYJn683xcLDa23Xs5WRW6yH3k7mYzF",
  "key41": "2ouiua2SfZGkP784ZVMyu1HH4APVJc9q5EqATWu8e7kWdgw1w5WyuABzR4JhjiwFxijaGm6mrjtYH2bSM7Su5n28",
  "key42": "5kVuHLFGQ9jMkVFQubrZawgm8zp2vGh5jDbRk4uUDcVtXdoCbEEQ99rjHsEV9XTy36Rfvu3ZL8eXvSQiLPCLpJp1",
  "key43": "2Z7TUQ6C69Smvns55XCzZFQJ1tqBLsg6sk82abwG1PVdekYXh4FpK2QZxqWtAjFtMzU6YvWvnHA4f7fHqFSFP4Bu",
  "key44": "2jdx4CYXwQ3hgjCdLbKVaALK7gSiBeakecsZwqafzEDFSLzVA8f1h7Y42E7M5FpQUuRiouaEe2BpPnqCsn5PfbZR",
  "key45": "5DcMXHgHVELCNnBPToVFEvuKVK9UycdiTkSQ36HvrpkqkuzniWPC4AtgcsAJkqXGAj93eWX6Hr5ux4idFzJTR8Bc",
  "key46": "2gixhTvirozSqmtH1wicYy5HhDB1swYNxo9VZzPGHYzTysCFGd6ViEN3uaiZtVuNwWQHNV9PZq8K71qdR7vgQ3FW",
  "key47": "vrBUdkyjpjJpVUMccRneuf5VS7V7M6sM9kmPziyiYDbeKBfMXx9JWywFLeXLb6SYJByVFQSmWE6g871EC64NkqA"
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
