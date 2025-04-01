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
    "Q3sWFjDNiFyKjH9SPqQvohudBwyZLJjtWPS3RUb8iAxddRkWpiBU4cLKWZ4zshirkAmtJ8aK5vf2j4MnUZ7FqHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVK5E8bFDjZz3wBHaWKL4W6Eniemd89CZoS8zDPYJKyGxLANTHdq7P1KGj5V2YKUSnToWxRcNEs4YAEwLQtn5iK",
  "key1": "5KN1HA3c4YTDXnxWP785FYLotb1gvfStmarwhoUCYXWEFUFZKguJmzdUdqPwvrEFF1nPAY4aBXvRuLVpjy62T6wL",
  "key2": "34PLKiwXdGNtvPzSae8vxSAKJ3nnufG2BNEyVy8FNzcx55uR7DNfZsQAQUyYHX1YfGcSWQrYTKjVyAnKZCapgEXE",
  "key3": "3qp8d6PUZA7k37TL1fSmhkvnwSGE55BgWmiWMQfAe4ym9KyffYUgUaxcRrMSyM2FrwQqmu9kmCrQ9SpYjtuUtYQu",
  "key4": "3Jhz9SrFFNhLfoREagYj1nqB58UWjoUFBZcViEabQKLushM28TGxZuaiMveHToqkCVcTV4jL3r4ixLzNCw7b53uZ",
  "key5": "4hqj4F1cwtUWpP3H1xo258zFCepvDYyKHCw3xKSJUMPnq3DM2tFZAwKmpNi4b1YT6tURRn6J9HVPQ6oRmKhqN9dD",
  "key6": "33PqVH7aYBj7fXKp34jKFheZoXZhCyiwHKjoNXBbAr8RJKiLqBcFnQENRw9fVmxJQk78Pj98sqW4V9zb3kjT8W5A",
  "key7": "5bc3hekg8PAeevSJgvfpkQfhq6LgHfwEJ5j46TQvLVoPgKrtndZVPhmwioGxxeNa4QGMikY8AtPZC4XGCeB7fmvP",
  "key8": "24Gft1dYhc8uaMFhDvSiurkd7pnr8EofaqGWyjxY9ED8ZSSWi9H7Nd4bwfXL9afTBGR9UgPstk5TMGDhC3km8SgV",
  "key9": "5xtY5epe6Z4aqBpVNTWeGXt1EK9n9SaSCKrh3TfrSzfejaFnNYQMj7VWoAjQ9X9xbuoFf9e3pz5RiC9NP3chHzEp",
  "key10": "5dyAsNL9uGcRxR1LG6dfZn9jVRbkifVgAK8mEU3ojmdMm8hqkSNCk2QbvMcjCUzYJjCF9H8wwy1MHGy12syU8bmY",
  "key11": "5v2ARzKn77UgaU3cyW8FkCEMJe3cd4Y2ZMwk74p1YQLo8oUocwdXHmfT8QYuMgDK6iQCb1ncgbs4EaV4eWXQLZM3",
  "key12": "44DqBUCfDUD2v9B7Sx8bCYCPxvirjmb78jsjsMrVMmeMyFeHEnjeJaQaUKu4B3FRj7zCd1fwbeKWXgggbFmQSTxo",
  "key13": "5y2S7MYL4GxjDsq5VSe9p8eq6GFmMbRmdMmWRP1s3pDTTAk8rur56TXXJfrNBBQvoXHYm8vBsJcUetPcdn2ybAPS",
  "key14": "3D34zjJgxVVVobcu2iKxgCW4G3F79eZwBuVLPpydgmPXKnigbv5eHNHcYLSb3XhPPenHUvv6fJxEHBAybrvUVMbZ",
  "key15": "64j5TLE38PXwAb3i7h1eUHuWyuq2WibpvoqX4UdmPs3tMmD3TbMiSpTaczcxBdshXbTqeGt2FgMWbNfvQoVC6PyG",
  "key16": "3YiGEaQZgUDeMMshNFPKDHAm8dV9K6bhUrLmpZnygaNFRZ8PdzR3dT66ciGBwzH49TLQaePqg2kA7niYc3VhAsTt",
  "key17": "5acr4k3GXafkupvNrxsaZwXbcuzJT1GhGCBq8e13ppbtetHCQf1JHRrtLKC9e3qYvw4yT4dzgamJsmGbCNginXrH",
  "key18": "59Kq1ikX5jtxPYHxygwx9Ty96hhRevaCUzHZFJz7nbpY8BZzuNF6Shhpn7J88ZvGhVfp6n3yqmZv3EtnBaMPERzs",
  "key19": "3Aqx9eEQAJgo3GHaCrj8guYhLNbib66EuGuuRSJCKkkHHRJA9pzK6Tmzweo5AH1cSPXxZJ1c4D4epyJvGKpzrD2n",
  "key20": "uSHj8xqJ2s58MHwJ2w74EBVGhTvyiL1d6UQu8iu2b6eTQvePst7YhsjFqhRvuBzkssDsJxhxjnysN2L8DS1oerM",
  "key21": "3nmEGNnDEbx9FeJczjuCKmn8EZgFHF97hDhY24VL4aqfdgVmcfNMxb5w9JvJGz82VdzGA1ZqZ6N3QiUcTg4652W3",
  "key22": "9KmYKbvgCikW75mTUY1Bm5WVT9RkdJ6juZA6GRmds6uWffPm9WSUnf1NbBEFPcWkA52J1588gEKiAF1GDpZ16Ep",
  "key23": "MNaP87jwLvnnKE8fPEv9CziNsNMS83LGJvWDVwJFC1DYpQMRXRhEk9iEm67bTCvkFRjGgtiWTQGCeB9sX5HEEuc",
  "key24": "2dZDg5ebNEnhFVAFnMqHnDfJV3yitv1wHD7VUur9XdUHNUddsdzL7Y8N62GKAYFppbb1icsoMyNga9wzDKzs7riT",
  "key25": "3a5tRJX11ngrDr1vGX7fdXDh8D5pjzoFuRpGyeAp37vdjX6nx3h8MmqN8eQhirs3ZoXvk7h1dBd7GYQad1V9xB6K",
  "key26": "2y9EieegXUqFHwQSDNf8Cians1qu9b8d6ZgaY7VrZRHhQJ2Z94CvoqHu8f6XbA2SC2fKvsNNGt3x8W2nHEQurbph",
  "key27": "3wHBXicFv3AdPCVFKc6A5n2AV19do1UkFhDdn1qAhbs35Yz57bScR1uBANdFqvAkhTasg43Jb96M38Wxuqmn3Et8",
  "key28": "bwwnzSY7TaeHuG1xNes2rNqa5m5V3kzHZZDagZyD6vcFAoEfF7J7ektVAwUbnw3PAr84Yagpwh3NYHszJF4SzDm",
  "key29": "3k9YecgE6iWzYw5EUDtApLuxAG4JK18A67MhbR9jL3vf5fkDgpe4fqZ91Bj3W1iBS2y6R4ay2EKMo9TLQLdj3tSW",
  "key30": "5uisDNByxj9AqVcbpRsCzX8wHoydVs49xzokr89gzdEtxjHkkfUX1omHM5MyqBtJKWvMf48RAkmQmHBEXFxiNyDT",
  "key31": "NBSZHCB4zyhXH9WqPchZnwbdd2sVbpCqdwsfneyJNbwjNzsXpfixkz3acnoJv8jZJJrU7dxRuD5xHpTMKHPS2er",
  "key32": "3RN1FmLE7SsuK7EYJmspWC7YcSw2iB8NcraTjA4gV6sKXomAQf3zh8azzfZQPR7kStNHEcyGD4kuHSsNHD4MYaTm",
  "key33": "2Zw6PZG6WgsUeMaAe35347RNgyKHiavUtRhaZVksf8uJ84hzUYWhjNAb7eDWJQKJW95pcjrzCSwFi691SveeNYBj",
  "key34": "3TxJ3GFw44tzR3KgzPkgN6zK4zgofcTj9pWeSMeN3uUAC8MB2XnCCainVyDVowDfFL1oLGkN6gp7FVoBySVAUiAV",
  "key35": "2ji73WAbG31WHDqVQoWKKj2FivWmJoSvFhv1KKSWvGtphD53rof7kYGHmLrDckV5n5sVM99AtXnxkRPq7vZYcyep",
  "key36": "4wJi2uX4pYj5xvvPJJ6CAg8nnHAfEMHmDAcy9FJvj8zngtRELB1ycKb7JPZjhvkMBwptWD9a5C9HtXhxKSCxdejZ",
  "key37": "5toDERNbRpXah1yyrjdNjvnJbFUh3E1iLZxpK9pjTa7NfJfeAtbcfdgVveFmnYPj1Z1ju4FE2p3JEbgSt6b5Y4GX",
  "key38": "3CFnor9nkd5ijbwxWoNRSsPLVU3fwaQ21yrRm5oRzo37L3ea2XBMLvarrMwsPW4gAvXUduHW6Jy7XctRLqcbNzLC",
  "key39": "4zUjJ46CqgmTdfgDbDFfP8aFdT1PXHEzXgPVSEGDiS8Shpoxg2Bo1zYAW8SZy55m5XPtYj4XuKi5RxJfxM2tFEGu",
  "key40": "4nqPXRMPoXuxQ5Sh7324eLToXdXPXZdB3FqkB2PFTENefYsbvAAhFCB7USdK2z6YfDowMdvCdf6KHgVKPivXW6Vn",
  "key41": "3GzXPge9U1rS3eszbrVG1en7Q5cqLkohFfPQEezgC2aBwHdrWg2uY7MsckdpqdzVbFX68Qk3pcHu7LurkPBaJq3V",
  "key42": "3Tm9LYze1wa2y3wcSA8aVs1jroYeXzpT3DNAqPx4TEMt4Awp3kqQjfz4P67uHVj2dM4KMWhKdBKpmWsdj4XfPVcm",
  "key43": "4HALb5upUCnCR1MrN7P4e3t5SLJEQ7UKT1Rn9jiS52akg5YoPzVwRTKAkytZ1uHNQyhJkNatRTvQvRDJ9bns49hP",
  "key44": "3oEdtDVqgaRTjUtcFY5N5sugYkyhsggVSLpv8YQysuqm4iRm66Kvc1phEqaJjLCfDLfNHZQRSktbnG4NihVXFhud",
  "key45": "BHvA6g5wJ4T27zndSLpfTtj2XoKpsjtSLAbE9zxEyJnCE9yLZ1eV2ss5pcnPkLLyJBTH41xV1yJUK6f5YbjnitA",
  "key46": "4LdqtwAFkqMpW3PXfJKr9zJA45xkVPXYvG2NQCKLSWYhYKxKQ5aW7aavf5pdrwnyCdx1cyHGhBes69JRpvGs8DHV",
  "key47": "5yhv7gZVVm1eoQWAZRvnU6AP7aHqtERSpPWdzGaiTRzGkcWZDJ6W7RHSC12exoe6iaveqKh61VYUrA3PBgXCt2yu",
  "key48": "2rj6uY546YQZxyujDQ98RZPyUiStdjpiUsf1fEX4nvjrZbdypP5mtoraywGxNha9B2VoRkBrywVZHReP9j1fjGxE"
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
