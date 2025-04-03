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
    "Vdy7WGtvAFrrEAoToxTEs5fNY4PeVxT66ktG1SgmNQpte77pwARaYodw3QLTeAK4HCuovtgcDFESszWXUZ7RduQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tR924XiyWfQkPqRKPZh9gvLZz8hLg8aviPnfhXYePVZVdQBdK5Qw3Fp1UsHTtwQFMCDM5FaRqiVB7phW2bfRb6K",
  "key1": "52dGioacMffpBPiioqJhBHgpjNdyAmMK7WDsbbB6Ke3CiYhaB7Q1DMHQorfwukmPu2fNzbJnGGD6j1bidzbL4hzK",
  "key2": "4TFNsJbBk7nu15xpHQkEuy7R1cqaynY12sCeWTDaCp9CiXGoMQACJJ3bT1wPENfrdFx6YvTV1Uw78LCbHCR7dqUs",
  "key3": "2adUNm6GHjgVUZ4ER9F47PU3bt4h5cvFB2PXBZH6dgo2ZzwovDAusZmbyFYjg9Mk5HxD6682W7oJnCYCRcfWkihp",
  "key4": "XDUNyFW6xoNXYEm2oe2p5v7xpSKo7eaP2SV5fkuttZqhSLN54tGzKY5oXumenscjQLcm59NEzXppLzy7LLJP6L4",
  "key5": "5MA6fgfeQALyNT2Jc3PtrRvoTRdF2UkoMcr9eADeWxWjVCfnVG32taKEmsni26P53czYj8JLWeBdSUQoarWmipPx",
  "key6": "3R7px2zuLPCKvogGR3yiUBFZ5M1kXMLJygUD8VzFHgV1UBXDbzpe2BSbeq8wD1om9nARP3Lf857oV15Uks6nddWr",
  "key7": "5GUTgGwHEr72qoXEkfgUjAQMznjE4aUdF3ogx3NCdW65dy71GfPqNpzfux4uW2GgTkoXCfK3bwPHRZ8b5jcT4Pjk",
  "key8": "5HjXxPpv851kYpEC541A9BgmK2oCMukx8U9CsE7EU4k4tiWNnu14u83B9vXNBHUGCC7h3uDeYBm91joSq4gYrHYm",
  "key9": "4b24Uv57d3CeGxYkvfPMCHvi2ReDkbHaYTaWnC7zUBxNjTjDSPmEmvtHgERU4Z2Rp38K1iyyGRg5Wmbo4h8ZFfyS",
  "key10": "38JtnobsNjfYqNtqk8UVB1JXLqCH2PmL3PaDBZbgzKnbr5iARbsyd9bSqDUWUUe4RG4pupUvqVioe7jNS3aoDZHs",
  "key11": "4Ux7sBnJsD7XnMJfDMgQap27JgJeSXL5TzbzxH8n4Bo5Pi4bCigqjfh7uF5Yktm71ouAB4gPKL4zBzLCmEPaPVtf",
  "key12": "5FqjdPgMdMynJGazfQXhdzUGgapYQvppHAvHLXRwzXmJ4rHxVY4g93X41nKxtUVXbFRhAb5MJeekBidkmt9Z4RNi",
  "key13": "2uXWZKYwDoJw2tK5W9jqX514ZBHjY5vrjPw5QSKtuK82BJddSf9oUoVYvVMgEzn2Aw3U4ZUxwjJi1R6z97q5LeUA",
  "key14": "2dfz3a4o6GQzo26NN3qydxtscwxCEnWbzuy7i5hWfTfv4o5k1jYW1rFeid1cLzxHba78FYyKDHTUEBJoRkr59VjS",
  "key15": "3RBQHiest4QdJE7vRyDk6C2smeg71AwfEh4dgcRMngsQqkrFmQGQA1k9tYAfUxDNRZ4X2uRgp6UP2pqzVEpnR4VP",
  "key16": "3SuZ7Evhmg4vM3urpYxAtCPEU55VL8YYh9rZwf3aAqn5r2qrZvC4zmC7DxTAEiMwNbrXpEgEeeXJ1VEXiry1aTbd",
  "key17": "5j8oEn1pbCK9cgr6xnSDLc9JrDuUTinpxvwQzaVt2xE8jQkPa8SYo2dpTiSNqsWwLnYMHS4vuAFeLALbxPaf3i3G",
  "key18": "Z47TN9sudbgqeANYh2cdeCB6v5iRvniwzGqR2CPvTbhLieMUiD6c8PY6MtQ2331GvHzZQwDLJtqHJcWFJKdXd38",
  "key19": "3JH3tkH7n7S76D5SM4Fy3HBpyxGdnAPx2kbej8q3319fK5gdUfyUs9dUdw5AVWG9wSTzf1XyxBEKhyXT7yApCPkL",
  "key20": "66ngYZS69Wgmzp8SFHSvAXjpkoCkM357zTAARPHYRzRMNA3Q9p4JugyzffwHEmKswocvz1GuKHrigoSBcquezLYT",
  "key21": "5VtG3nFTZynTJBY6b9vRLjDHYMFUjwUgKbPMd8D8MG6ZhCN8A9h1p8k4iPMKaytxQpBCnoa9AnmVFJiBC5DbBDbQ",
  "key22": "3dccP1wRydb7d2rAU7v7hdTdEviEvUSoPfAYexsZJExk6msTASKMZD2pnQh75S3yez537Dvx5eeTaQ6JXt5HGzvg",
  "key23": "3AnVH1feDLq2YFFPR7TLYwDqXirBbJrUcVXb32rUX1wCExdC8ELuX2bNzxro8Tp4Y5YxRYVJQSDc9vh2pUPCPyiR",
  "key24": "4nQhToZUirapyuRmubmLMW48s6pXrBCAC7yfMVrazo4Dv29oViqpnXXpXuD2x7SRtgiAYrNa3sezPbcYq6LLtnmZ",
  "key25": "5QVWkEfWySMQ3hkgdPBSN6UtoArX5Ys1BPQoyohcZzF9kyTUZMLb1vkBUZ1qZvEzo5hbTX8WYzRuQZPnB7j8HGMv",
  "key26": "4RMCTgQ2R6s8hHX83u5dthvzgBDU3giEr6rWwnrYq5SEGCYxwTPjiX4EuZAjSTdBkyrRdpLK72xcRg4RTRUq3pud",
  "key27": "3VxRp4s7maiq3cjC4ykmfpeVqqHpP4qQvQKQ2TkQoSGPGpyq58MfsnMn85KakgQwzdLfDesiqPS9FSczGBmLfNP4",
  "key28": "GvpEZBWg4RRanvvaN4dWVgLtbFAK2iUHuphgnsVptw41man9dSJRijc1FbCfxGkazi7Kowgf8rNctrnKSMaiXdG",
  "key29": "3QqT8pVwHBAmEax2j9RKAFDF2UsaCK8phFCB24zZvVFhUq7Pn2d6TVBKPEwDJSAY19L51YEuZmGDAY2LcekUYRCS",
  "key30": "4RRKP8A4g9vqGakUDGwf397NhAxhQ2NdLZRn1Xrj8T9UGf82BpeAmenzDkfbuWGsbMCUAnfHm9PMQDcA2gqG78h8",
  "key31": "4HFo4PNg1CKyhFnYpVhcqmHj74m1fRJ1aS5qq8dAJTNc2E3taZ2Ndj3w6kZ7vfdaksuCbJA4Pq9TrF48KGzshmA5",
  "key32": "5pqfoTMuqoMuz46JXk6B7HF5UvdKkvMyhQitgS2zALfxZHnrAZiuH1i87hqmuctCAtrrQKLfNCndxaf3ewyTtt19",
  "key33": "3d6QZua4BQhnpwRHBA1bbbHKavRFDHUMNK1UuLaJ12faV9MiDiQ11TqtCen3CTPbpmXAJLf9StgdnqTMincHkKsi"
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
