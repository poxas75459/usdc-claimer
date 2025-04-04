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
    "4fhVyianAjutyC41xM1JAUJsNFD4QUsXUE6ujZ4LwaGTvd3kwCvYmy39f61LALWEWw89ubA5aZYTcAnvvvvKZoHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PRcs2xi38vDNHewaFJ2wcqoqjzpMGHFaf4cK5ZXf1eegqpmrFxa3WfxWFaP5imGxjpKQAeJjd6wjgRyyNn346Z",
  "key1": "5WD4yyFQUajhiyRN8qB6ejmSKPXzTMoz9LRMhzWFcKpYupStakGyWLWpUGAp7sWKyvmk1kHm2JghjzTqdz86F2X2",
  "key2": "23AtgTPMfHBUBfeN6BrHr6oCm8o6dGJZwi1n1RtL7XzcDaVSqxVCdotbDMPxe11jZRV2QzVmezF19Hao964xb4W2",
  "key3": "4gKQDwcaQkQvddZpUfcpxYHTBernxx8oFXREq2fmVBcG5sZguQBaFVyoNGU8TpMJxzBVsCkh2KLxFMmsPPFVNXkg",
  "key4": "2hcVo3LKTaUfaPaMBGdBgA3HGgdXWxhLDTvGMjNj39zzfsFbZwF1DpWK1KuDP4XvxFnAaPdVPZ9354gkfL9a7S83",
  "key5": "3KkmFj86LfoQKSzUW9K7BAshHvvEx1QPkao1wMqQoNAwPUKBofC5ziy4sGNH4qfxPEMYudrBScmgM2ykt1o3qYet",
  "key6": "5yHZtSBiqjFniaFb3XFiGJRDrMHhrkQhwb6vsrdsLJ1vmk9rEfRB4ytRgcwwDFDSRiDm7Xubi3iZRKZ2KqCvt2T2",
  "key7": "bQ3Xs2LTrvAQC2r1YxjoxtkbVkKHXdzR3RBYNzGd6y6JWL1BuS98g69LPPZkKoq4Y4X2KRZQNb6acvCx5j8FhTw",
  "key8": "5syu5jZ58Vbbn2QRTdXBsnpd2w9PcWVESem1ee7rCMtwFEqCa1nKHWne52HNVKc5JFrEaY4HvZQChMD6aBGwCynG",
  "key9": "rZbDjkC9CBK7LNS69FoY2bbeDWaBQ7rr47jEJW3wCVSub8r7kdJ6YHPq4T1N87T6mzBHgxhNAWmjYhEei5zwYEA",
  "key10": "4Dw6GsBNKJxWG26jZeurvuiaMxaRTJw9B8XwM1kGcs4mXy5Yd8k2urFUk1m8uLr7zgxjdQv1RgzGRpkL6EiH4L8M",
  "key11": "5EfuxC9ULRTAuV3LEpCv7moX29Z62325cYWA6owNzJGbgZAPHK9ZpY1TpcXBLtVK9hYg5U3gSwQ5XKVXxUAEiSFc",
  "key12": "7Lg8FW4kQ1j8Uieo8Gcfv3veG7uRhmUTkwVsg4BrVACAQFBrEDLdpbiNdiDe1xkcXYzVKN6keCB9w9fekVE3cxn",
  "key13": "k4eKW2cvMsgivAbtCqDuy8kNuKzzfqdevq1HfYBfiXdwadQggevc7pKwwrpjsSAZJm9kyk54q6G1qCVAz32dDYc",
  "key14": "4Z7cA82ctd12oGMfoociCPpjTNBcC71Zt5VxR1WrK34EofdQfvpruaLCfdCU6oCfkN3LDPpUC7bSQ8i81s2f9aS5",
  "key15": "2HQ93FZXDT6AqG6EYVLpoUmL5FAxqrqz2RvPSiCNPCDYGaCALgwn2R4YDg9D71fe15KeP68dofb5kG8Bc2bfnDPx",
  "key16": "4tCoxntYc4KxP2Atmzj9nVYNyEK1DzP7JFtPoxKDp675rZABdyxxSisTyXKYUxKG4bBho1HfM1g32kcHPqPvuKYC",
  "key17": "8wtWNq3uaMrLmnJoXrunVvj9nPA3bQPw3xyKSZMBLhuXw8A9oPf2ubtSF9J4MEYUg3C4RHr3yGLNTcQ2n5rySJN",
  "key18": "44tPDsiiJQqUvntQJjQKDQtuZUDAEBL5Jj4ju8NCfbbNp3AfugLXPTttRNHtnioRsU2jgnYT2qbu2obnVpHVKvzy",
  "key19": "BHQeieTVn7vTETnMtHVN7QEfbNL7NRkZgFSeHh7Fq5WHY12JFJaDSePMkVXwGW2fBGBjyoSLAncqggsy66UnZuL",
  "key20": "499C6uh95iaBuXSxKGjKnBTMaQM22Tws6gXuMFLL8qoKcnaNEDgRzvLe1BoLRVvynx5cyxuqasAA2SNv1s4SxA5s",
  "key21": "4ZY8exW4SHfc4VmxYzaYYQWSkPZ3QCLW4pMnthaSJSehbpVCdQJcQRM7P2oS73JojPL549DCa8RW7AWAU3dH9rb7",
  "key22": "5mda43ELkR2oBfBEdWM9MKNfgcP9iPsKDde6BbhazxWGEWxasJufgZZFcBBsVRvhXFbaqP7QX3zDxA7Pdr53FyTZ",
  "key23": "4MVetk5XSsRN5xX3yE1b3ruuz7XrJ6KM1yqM6z4MQehAEaMN4Lrq3yUTadazYEYGnFZjHJRbdaasSbmWX5MfiQpb",
  "key24": "5axNjpQyG9TPcp1Ps1k66Mdd9wvuRp4znVtNqxUGR4XDKM4eF4YVd3hR4CjwEKXM4kpUSMNFDParG6cSdxbWKE4r",
  "key25": "4NoanavNtVS34Fobyuhojc3q5VUw2qAR53mzBGpGvdfsZMN7yXsDWEuj1tzTMvPjWAvmJNRbRUpaa5SSTNYyy7r2",
  "key26": "5MRAZAByf6zJCfafRhAmHUoZyyYzviZXEw4n87fpa3H7wBSP9zzDxvGytWeQTR4vUfeHNvVN3tW1kAbj1eVK5S7e",
  "key27": "2Vg11BRsK5q6SfXxWLfqwxuDv1gARKiRYKGsmMVmWQ2de84r8SzfNFJGXQtNrptG5qxShegSER6ZoKn4LsUNWujE",
  "key28": "oDw33JVPV76WEagSP9sMMR7yhY7aoG26MoBSYkaNrVQ7VnJbDN1mpKjA8bqcQUuryqWnTfbhkkLWQMKqaS5KLaZ",
  "key29": "5Z5qYwLkp7hNKxjXX9Fs1WWbGZDfenu3x5wYd7HA3nHH1iKwDmosmL6a22bjCYLZr7KzduNo2i4jLyEuNmgim99L",
  "key30": "5YY32dewfbXLnz6MPHQoQuV2ySV6TCxMiFbRxJsum4gauh3FL3NA35CcxGc8ue1NssGtDt4W7MgsW6BJYzrZFScx",
  "key31": "6SVnLiSwH32hBJ9scpFMDKqtz14oAa7HeTEQwap9VP1c1FF271pAVrX4LaPzLqbX6rdyVa8ETSMixt5widCgajM",
  "key32": "2bhDZBTiAWsb2kMbtZLZg1Hfhvm7pE9iTqm6A1Gw95yVWyCJgRrEUs4KGTymZ42cmw4s7AAqY3j6LofJoSYJUd1e",
  "key33": "5gSy9dJoAURa2rasX85gEFQyBNpsDeEErP57iXTLyssQEXrYrEAWVTgs7qVpRYMKTi8UoNnrhL3K3R8KHW3KGYDS",
  "key34": "MC1P8rYVF355ptRum8rZyXAESRitQhGpLBufJrPfXs2fJeQPMBhGXeuB8UborFF2Kr4XZnyAt7x51mxvo9nSvbs",
  "key35": "5a3UaFAa347Xns94LD9WdYLihML8Ke98r4Ek4asMXNFnNPGv4vppD1KWVM3mpqSoXkCc6Muc6jjXVVKFBLGBSP6V",
  "key36": "4oVtnzUueSCrhLyX6MKGWSHWHxFpi6ey4xZaXLXM8nzwwfyhFVVgpzK788smmHNUHHHTPu3E4zfwN5XpoWcoKCa2",
  "key37": "2wVZzfMN6BkSTnQw3svaWQpy9zfAX4qTTjc2bUAhTygufoLx97KasEJ3pWE7qKmSfWmbwUnBYKa4x3jLmT163JgC",
  "key38": "VJPqeThXBxBvaHRjWiV2ChQjzfzD7LpCm8mAsB9QkNKuUSGy6FDxvDnNjHbTmowXBZwcEWHj3XKABDBeJeerbuS",
  "key39": "5eoyBDKTiX1Yzt2mZaDBGUhV95QcaKMQZe2mXdQDyZZgoWE85uFwBFQSUxQiNmCi6qpCAAHysyLdxc9cmmM9S5ev",
  "key40": "5tTbRo762K9CHibpGPJUzGBHZYxwp2t42VaoofyP9Qqgcd2N7C26Woy9QKcrkrr17UtvHyTC5q9Z8c9q88LYJyMr"
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
