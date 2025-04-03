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
    "btVa2uD6SYCJ5esC4rY7V9mfxx1RTuezV7EUMAz2tTZpcpNVSxpXDFTvewnDAWdbogUXXmV9bdAsNf4FrdALggv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZiCruGavFZUSAYojg42gjwCTiTHCndcbfCDriPoeF4EebjTkmwtERygSYSJnkbtzEA92iK7rteVjAwH4U4vFRM",
  "key1": "5ajSSi3LL3DiUQRYghT4ihy5bCw8WZTghTdA6QQWZ8cd9EL1hke9jtNfzdFbW7r17xnVD1ThfQTviH7ZGv93pmXS",
  "key2": "9FJWjCtCSw6Ce2rev5d5rYN6uGF2HdohJycWdFpjMyW2JrzAG5P7NgKe8KXqargjW99Mr5Kd7gDKSWbVco6QgTG",
  "key3": "5nNhnZtFJkSusCj4i6cqbNtuBksDE86tkfMAWawpVQTRh1pbBHA239YjucXq6G33rDLb12B55qJRWc84E3FxbZjS",
  "key4": "4UnBLjzzSqKAmcT4jTcfeMDTQtdoNqU31Y81Rc9bA2i4FB5sSgjzMWwKW1FrnG4B5x2shHLRi1pJRN6s5Ydo75tg",
  "key5": "4Ew3QshMSSC7pBTkMwFjW1xE6L7gYg4eTcPRQCRgg1YHcPFp1Z6xCE7x6ao3jV8AfyyWyVgY7wpV8qkhpp5LmQNY",
  "key6": "2yWe8ZLrdQoH6P3ZV4V5HpzYTL2aAabwwPGwQNqiAqkJtegZto5LLVJJyvxm2KYBfBVmPmgYEhuydTddXD1EyLtX",
  "key7": "22oUqajoaWPVKLB8E9XQsHU1PCEhRsQfgzBe7jkvfEwzAVSNyLDnJP576L5kAazTk6J5YJs3aDbwUmBzEZqRw2vD",
  "key8": "2bTqTC9WE1EZZ77A1n8jmeTyxyf4kreAPxapL28inwcjEwmC3RvqfooTmZ12F2yiE7ruTQQewa1WgSK7m8T7N5mt",
  "key9": "FoYZMrFNpyosDVNsXSL3SwaHjXXCYJn4w59YzH628tud49GnUqrySAcvMhfuiGWJ3m1chXrRrPDwwHXrruXq7DJ",
  "key10": "3jDwUddE3bYRMTaGGE89caD9qkCNDkvxoSVEcV5dbSrbWVxv4CgJWUUwUJxdksPtjj2dsnTVfNbSXJqRhfyU2b4y",
  "key11": "3SRjqvQ3kjTqaSLy9F8goKEag4rnDWdzmd2ScAGzoZSj9LAziSj4SdgCovnux5sGYCKnUoPmS5Jvytak16JL51aG",
  "key12": "pCVVYjSSXMD9ZGG7jA42xLwqRBFVU5H3zYrRFmLNEP78cWmqcG6K5gotGro1kvc6SN2Yo8UhH5g8rR1GBohaZX6",
  "key13": "56FyXTvtSiREBmHBE82k7zT4CtGSom3jv7LNrLB14P8CrENSdhwVepqvax1RJ4SDLKbw1JZS1VXHtHd1dQhqT3Bg",
  "key14": "J4trRaxwnWCJgUNnSbLWzPKikBXWTWAbdaVLPvEvst8278rpezURpe7Yf6NP1yTn21GQQBWe6xt88UZD4W6JEeb",
  "key15": "53mRb1Rgmaw7AchMuRCqYqsg2Ub7phKW8Z3fkPBdUEVhTZXpN8YmGP212BSxfRjeD6PbRG2tnBw3hxnim9uaxAcK",
  "key16": "5RMvLWFkBWEdjTN2Pmsi8NGiahEuF6J4SaV17woMG6tkniXHvCAcdjTn1DUvgDsDN5TndsWVG1cNHnoDVSiRpdLj",
  "key17": "49uUD23UhiMq7nR5cFpPEuzcq6GAxZSknCw881ocn1PrQueRf4BiNP4aic4ffTsYQaX1ooaS6z9i5ZpNn7P4sdym",
  "key18": "APoCzJZ6zzhVWE3QhpRAoii9RD7M7hWJMXEpgRxYWRnTE5zLE5EaYyTVtm9a3uuxASANGJEAZ62rEqfuRXU5i7i",
  "key19": "5enDAyvQZQrTTtCRYDBvzXYNArzqaVzuqBWpbPfmKPYAsLVJeab9Xpwfv1LPTvnmPUdsGkvS4dZa5fNtfbj3ga2A",
  "key20": "2Up1vTMVUoNVGHBcU1EtjUFEYKYJAZF8K4MqswykAik2iQ87uo8aHoDeFhf56b7mugwQbTxDGwuxmjWZ4J6WgTUo",
  "key21": "23DnJrKVsiMcWUxpGTrb3AyUbUSvxCx8BoVFsDkVShkVXMvcQFEZ9pYAs7rzBthxt1zjnp5RBX9B5E2LJHBGd25M",
  "key22": "2a6zrxGCAxV7atjWTQPQZPUvVfix3GANvxrzEg4KiERgj4PVEFLSdccLvBdLZP8YmaWgAeP6YyEP7c2VZWCcW3Wg",
  "key23": "4C3dhFN7gy4bGKPqrFy5nuGDFSYpUPEsTvcJ1Nw26YHojD8PUAACFudoMpxECzYsY9pC5cieVnvu6ATkh1dQwhAW",
  "key24": "fbf6mxmQ5Ej95sgWJf6dHJi3bmdC5goWnrfYatnRJLhAoFvsZCiq4wQaKYdyfNBMx9Andx7UBX7oLPSgk7WhKbS",
  "key25": "527Hrjie3KcTFN6NRhGnwXTW5oz75rbDtraKsFYvJVmz3mMZFPeAWTb2hHpgw6jTjjG3xrPdAiyfdqhsUW4BmNpR",
  "key26": "5YyU4VgoFNUEZ1es6pATiBuwLQxxjW5Qgzwt19UaPzGBgZ6tnj6357ShpAkLV9Ppx59eFddqjvKGC7rDNrYNg6bJ",
  "key27": "2imXGmycSm8za6ApPsvfnRcj7enHmTZ4v9xeN3nFqc1LPxWJqCtDxkmm2jcn997qpeuax1wJMgSWqaUdp5ivZzQx",
  "key28": "51o5iWW6M5Mf5wL3dAbS8PSg64PVVZEsC53FUi9Jmww9feU1n185yWUYSqX7dYaGZNJ96uagLCQg7tDt7x6DJgEt",
  "key29": "3JA7FRbnZo8HqUU3qPXN2CeT6Qks3YBASF31uwYgSv7ao5CGR92iBTeDLFLFZX3Geq8nRsHBLnM42wqHdc9F4dWB",
  "key30": "2nMHa9JU7oKgzMrUX7nbYW5r4T7jwDmB9qb1XheyyGbLnKcrpVFexJWLXwrbkuxfqvBKz3ko8rwSVBU22mkDDiqo",
  "key31": "2EXEhvvb2K9vFTZmvhJPATarQjM9fDxHnem9ix668gUoS9KdiNmqw9x8QfXHPHy4agpzeFihg7FMdzQAJSM9AHUM",
  "key32": "678aM9Carp81wrZkJ5aiFW8LXqBGMkN35vEDc9Zz21QRLeeHhYpNQNnZSJWYSd6dzNKu3hoq2chnZoxBFYhWm8tK",
  "key33": "33K2USQTteg73rFgMvLCsiYaXGyPxfZDo34SUgDxtFb9UJo2FgnT6MdjahssN3VNkF3VYvNxB5D3XiEnjauxVBDX",
  "key34": "2SBENre2XEHwkGAJfajP3TLw4cdLhSQkg6f5xBGWuL3ee2ThTDeB6y4nPBB1cv8mvLRK67KVEfrCcj6g7VXug1pa",
  "key35": "2TpozGghuaJe5xfhZXU3rT43z7trz2h1kFg54rNjZ2TFPRoQPxDXfcjopV2EexSDL1RcXM2abquWYX5AYaidzfU1",
  "key36": "4YThAWg1STNcxETLSaydFbSMAkvRfwYQRre9TqDsVXKRkrQzuP93ZMyB6FY1SGwe9iwUxbcXA6o67g7gogCg36X9",
  "key37": "JWdrY7Fr4FTkig45WwPzvCAWWkYHbY7F3pfv2bf6oizdRkPgWEXuje5BmALCF1cixHf643No7m8rHyRGfSLvmHo",
  "key38": "3oBFZdPskkaJMxWBxdk86n6zB9EKNPzWF2K2kmwDjVesCi9UUujHmdVuZdPdsC8ydugkvvdewKrN6udtozzR9nGB",
  "key39": "5jWuS6Q2Hc6n2rMHtNtfjPasZfTDhmrE5DYJ679H73wZPXT2xam3yU17vVSg1XE2SSbP2zYYi984Zv5xyGaS2JV8",
  "key40": "2ocNBT61aq9QbyzYBScbpUvgnVG63iL5CUFsNLD4gpCgLzDfkFge3QHfniM3ejtQm8LrTsF8Ky8fYAjyfxsUgFfi",
  "key41": "4QaWrTy3dtpcCtSxAW9QBbVCLY5gWoh1ZnZZDUWwefVeMywsGj6yXRMfWesHinggVFeNmZgiHKmbJ7LKy34NPdkh",
  "key42": "5yPGMFXEosPif4vwg2TZfaU31qKtkh89DtHhxCbpJihahU64Zxn36ApefcSXM2xPmvfybjsZXHjpRAwvJbfmLrCy",
  "key43": "9o6p4TMjtm4NHbm1nBWtacyFhPXQmxUS5BwbFhPevQ3b9GdmmgwG9GyfuCYpgrSHNXj3ZYxP7tdkpS2JgA68QX5",
  "key44": "43qoKcGJJ1LTucbVGLCZwArYW8wo7q33FWb2CjY3KDwkb78B6xQSAR8wCeLJA6ovG5MEMyXXGc4F22aneCw2kWEn",
  "key45": "5S3Rx5o9sWLAgydFPY27T8sowj245hBxQ4hTXkTmuFWEbgCcGR7FadLnv71JEeXktmRbFMy3cwES347Bza94qjAp",
  "key46": "5zb3eoyYn1gVgwcS9s1vbxA8BVE2Y32iLE49dDdUEDj5Qux3Fuucv1bKJUdKb3dGNkr1qhpQeUYGiUGAJxwXxXXm"
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
