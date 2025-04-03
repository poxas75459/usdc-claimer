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
    "3xwJYL8Z3LJekacLYU18onXabBTTxroRFDZEu9Z9PMARodY3Gr6hHtCvZDfgzwXRmQP5MZSuNrARm9vynmAJKJkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AK1zvvywMCzXW58mwZx56RbTcghdKighENfDG7QcN1PDLfXuiAwLhWvfouSthqkD2MKQJCYkyXGVHjnByNMtnsf",
  "key1": "5tYHeMejm7P8Cu8tkxMr7viA6WJBFCBYADV6kzGEWigCCNahHX8fjqHiQrwM9Cc1HSLzbozaxGtxBPpiULNdz5hw",
  "key2": "4exo9ab2mY4VhhiELPjdfPLT3ECt2n3so6kTp37y5iXLP6sarGP4mh57XgDWtVTrgkW7XSMiTstjin7fHZfq8A2S",
  "key3": "5ZKTNJRXDnc5ACzEumWCtz9kSRDSJNzHMxmGmBYnakEmZawhQ1FUJYrPGSGed8vBMU5gBwzhY4JBjtCLr1Ez8w2o",
  "key4": "ZzR9H7ZRfpveTyTLD4ceJce9aDLEP5epBqzYNF6Yqs9RgDs4xpkWHCUzpTzJSANtt6n3jhhQNqYAYjp1HRDHhec",
  "key5": "4xtxtcEFmdwLhwnn5GVQNRnToWduC2FdZVpa5ZqKAWYA8DCRXDQiztf6ib2fviSSmYfp9xX9Kv5xkJYb3Q52PDmA",
  "key6": "2hXpL9VGGx83gyjZRk7Ecg4Bgfa4K4PKHd46jUyPh9LkVjf49vbfH1au3BQnd354PPz3bRDJwCV1okJgoPgeMRdh",
  "key7": "2fCrcvRcH5Qb7nuLAfFuz79WGgpe9pxevjZx6dbPBeKfwBfuwbr8aXLCUhpUu4gJPZNPujSmpDBEMqXg51B4aXD1",
  "key8": "2agsuVM3HowaULzjbpHjVKfkzGrxjvi3xbpmGKNo9sH8fMqgR1jBoERLc2MAikt7s8mZpNQXRr7ZK66T1rYQpxW1",
  "key9": "tUiGj9gFxnZtShbkoYuzn1DEF3va2FjKFRqxqqUtH4hjFsv7fTaJRePUF5YvRL3KCKm1QrLySmgaLvMPaKn7XC9",
  "key10": "5TMxGnz6kDmaGsRrHUsFFb1ewc6hp5Tfq2wTGEhw7Tn71XYVvLuovs9DuVx83G8o4cQNLD23fnkUYNUjM8GbMNis",
  "key11": "3b38naJpkQghakUGJw8R4YXznvhmYVX493RevBKBR7AQnC6cExPatrVaaGdHzZ6oEFcrNrdhgtfUBaeR8a3TJxtd",
  "key12": "4LKWgRLcbAaL6466gbKQ7s7co28yMMbxe12V8pNGJqxuaPSxHRtHU9cuZZYHmgsTe3mvprjaDbdVZixx3Lifpguh",
  "key13": "4khN1FxgdGBF3mhjqVEkANzDrV88wQf3boL8H9rpD5FHcSzqBm8i4NS4Za2nZTfXtkpe1dNsozZzpYRrBSBqw3vB",
  "key14": "2Z1mzL7rmFkcUKDVGQjNQnuCdwQiTkrQ2zd9vXStibsqQEvrUGVEyaYuWWE2Yog59CdCE8cFdL9weykBj1UQSvUF",
  "key15": "3boCFayzuMUvK4YZduq3QxWtL25XMrVHXUYwySGRmKcqcvCZv5WZWxXdaaAMPwVRUZoBcrQsbeKugPPnsaf4Gn4w",
  "key16": "x2MiWgctSJcG3KeaLKJVo1Yv3PZiZss49zdLqhwfac2XMRRW6UBtQqb27JpyNwZh8ESHGuhTN5BQyn5Grz8jeGQ",
  "key17": "2sQ5QuoEQA3qmeUicvvL3QAkWoCHkSWqAJLZiSi71UJSkHWRs6mBGuJMk17VAyoSnGBikS3TFCqERSGjUAwPHSMP",
  "key18": "2Mq3xB7Z2DFsZoGuPdbiMDbSmhvytCsk3Hc77v2Fkyd8tWdKnCVV6D6R9ka2Sj2g3PZrPMaVVYEte86BjEcA7yV6",
  "key19": "5LjjYzw7xa48GFnXMVyLF994FXK5cXWtxXqPHyAwe99MP9v95ZZqBroyRAUGpvAxzokhNzjoMYAoAJTAckYffim7",
  "key20": "dpNqbpsjSd8cK4MKJmXP7m6hRAPr1jZTPdVL7SPS1SNhR1DQRRajTqSVnVW1w85VR9ReUzYX7DbhGUYQrg6RzYq",
  "key21": "5WX6YtPJ2orQz5Arm8hoWj77CLgDFG6wGAWT5z4G4TWoUjW2CTMygmv6EUjxhUPXBUfhqtSDdfFK6tYP9QNXqXTQ",
  "key22": "dRTb8vHiuKLbx6F77jdgoibpK7ijfbGrJGbK521FL144odgVwikZ6ZDrX4yADkBYsfxXdnzyccxiKXqE4Y8WnF9",
  "key23": "3B4W4rj63FGSTCFmjf12v6AYcVuNUGATvgi7vRfCgJkfPe5eZvpEz5iXxrGNHv39Qf7TW9yXb6YDcaxiZW168ga1",
  "key24": "2ZbttaF3FseEJMFxxZtuMJzUHEbBDhN6E4NdoDWEwCDqrgbLJFvJ8YYNCnVKLEXXDvUcLjjWzAHQYpxNEKSyRX6d",
  "key25": "3vMESeWjn95qQ8VbwbopRtVpsFFrsuYo1F83tycxPaA3wjQFaDW6NExabkgoUuPoomxDxSbcMCRJJ5LfB4zGHPam",
  "key26": "2AtHMty3vNXLfqo4te6mtnZXsaJzJk4up2t3dmHWpJWZXMEpy3s5dJN4Zgv6eN3rS7TuDozCgMDhNGH4ecMdErq2",
  "key27": "4bgq63JK8ngcTiS5Ct9QWio9mHhMdkHpaVFjoR9mWXh81Aw9U3aN6dXkd2L48V8s4hcvaiJz29XVBGTyLag2ALzj",
  "key28": "38XuWskrcyob5kHga6h1sB2rThFSo6huS7Kdtu2RJwpvDeUa4tmXnuEUcrmg5oCJSMDCzRqeqktpWUaitzbp9gVH",
  "key29": "5XKfCT3qMxwrbDzXnWRtoBRgsCZyAXF5SJp3L6DXag9b7rs3pRbnzQucLzabBiG1gdP2Cgb6nLfXDbVhMyWqrh1k",
  "key30": "679Mdrd8spj3CAhr9wKDgNNgZfxCmcZVWAhKmcPQmMSU6hbs9Yu2d87rdQaaNcdGA1XUVM3kgSUGihnXsMf6HJS8",
  "key31": "3fy5PMjMedf3qnnymQ1tEhR4yq9Zb7m1XTiLcqiVBeauUizo1fcuN63u2KD7iu2nV9DDfz658LD5nt1QdFeZqgtH",
  "key32": "4w5w5xfy2y4DQaBBbtnBnArwt9XUaTP9AMhxsWtEX6MpsqGhGq9j5txVNhceLD7C9eAuhZnRNkH1eFBaVXPTdLDS",
  "key33": "4LZ1wFjuUzr7UDVDWaobGqwtDxzSWmx1E63jxAZLBfLDDcPN4Hi2nk8zsYRHr3AppVRFFMF2SktaQ4WoQv1SKgfr",
  "key34": "4dwUn6BnGRGqmxa8upvwUafXjFqSCmTq5k5wmgCRzBYDDbkzBmVhrpzeExCW3z7XuRvopZBe2FLUka9pFoQSe3fb",
  "key35": "2ymNTuNCpWwrHQagr5PZWDFxYmVikvyCiyCs3CkUZ17B6Rjhyugdm9LwvFCay4DqKZn98Jpr7HUEkDrWksoScC1N",
  "key36": "J7vSRULJU66gb9XJ8gJbU6Lm2dcwzEB7djspCjixWXiQzhUH6BEetG9QvZWSrv8vQDzV8vtTn2x79XGTpqqqgWB"
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
