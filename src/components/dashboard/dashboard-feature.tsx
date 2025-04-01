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
    "493cKEpiPcJtjgCToRBPZNUSMb7oQN8SJJBCeyyPDb8YjSF1VGVho1ytxBbcmZ1LtTTFNYdrZ4ZTrZSjxHDWZCP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LXGeuFzuU4iHQsZowugbirdNbxMBUYNrE9s8b2GsRpWgwq98JS9LTk6j33BHPdYq48z3uPBrBv9Tgyamj85hmR9",
  "key1": "286eef4fXmbwyfQmbhrv4BZhx3BCFztTMi6wq7Eed9Hrz9uEXAGZZweEo4RMCjzFQuczk81GDPBbfssfHCfUzai8",
  "key2": "awi5XqnPzRQvWf1779Uou6Mt316w3MPPA2hAezdsW3Nu8x9Mw1pZxyRcrpg95PnJ27B5RWZVW4Jjm86otZpwALs",
  "key3": "2tYCt4huHdnSFs2EG9adkTwEVfGUzRrgL8zwS1jqFZU7JmKge42vC8ZR2prkzXQ259HDYqBj2FzJsmC93pJ7eDhq",
  "key4": "4TMannNcbvF2QP7bZErt6VBq5fRgDNwSj2AKtSwd5Ax9mTwEwL3BbDTC6fUATtfHvQWT1Sqm8YjoHMjxfMbsoy29",
  "key5": "5rtZ6wbthsXFb6FJZGcgDwcXXvt7TmHymm3HkNqKvZBVfHgqeucSKeZR2SJYWLn6MVt284yaPs58j82VF1xfgq95",
  "key6": "GQse6krPg8XQZQuzgT6eKNRsDddN9mr9M4xLqqsWYib1n5JdZnVAsjit8uLZZGuZ2UFSqqGn7WhuPiNzCg97L1N",
  "key7": "5Mh176nZosBR3i4ZGkWVuL9VygDaMPFg6DNPNVojh1cZv4JSttUxfvYhAiyzDXaMRpJjQZBG2EjuDjebmdanw1sE",
  "key8": "4jEFhpLTGKgHm6zq5JRsDPhSMtomeDYUuCtoLv6JUQuiuotEFgWfB5N3i4tMNfEzVruAg39oKhYSUgTzpjFL1Tgq",
  "key9": "2F8p2axvKGKMmWq71QpRYM2SSMUCPDYWPP9uSJQeusM6zdyNLEbfBfbkBFCfcf6HUWixB79GmfqVBgGubfDC61Ua",
  "key10": "ZPkUuV7Advs3hRFx9p5dwrq614FaPMgxtGtuayJBJ2hds9V6iij6f7wAyY6Bk66efMPneWNLGzRc1NbPbiFsaZ8",
  "key11": "4uFh28eLDYLSAQLVbzWT4nkd8UxhBxsD4ADEyKDV4998rjt7ZCAyd3UojJhuBN6ubAvSZSUgQhMFc6qcZ39H7kCw",
  "key12": "4gjGffksjGAsW4ESp89s4uw6WLQd9FbGwSHmvjaWLStehpXuBnnZvrj4DWxhajFxE9sVa4H14oHZbMrsqixewzkU",
  "key13": "VjgwFVcoPb8WidpeQk688XJdgZEUwqYZ1idjo8D7S4ikLLNakV7YTdsy4iNSsfnsKxAZLAgG6KMJ7kWf3gRQFLt",
  "key14": "66Vt44Sft9UReryPVfbgkDADU3DUPnqCSRVjSJtdwPYW9XMMkD5xshcpUmA7CW8QNeBUSxNbQHoPXRe8st6XksZ5",
  "key15": "5cgLSJA92dzV7Ja2A27jKS5cL2tNdUAxKBFbos6CHQQNN8nF8DuRowtKHND2tdYZZECuUVJEMD3gC3TePCno821a",
  "key16": "45BqqP3bcY5RSBHMfLP7ZZBiffVSWRUBYetErnX9rccid9pCJA6bs9fbdYHYHBoLWKaLH18yysqHxpMU6B8KDYBi",
  "key17": "3cWJBBqgac1icPmMjrufoyRR4nZkBVoSXtLeyyb5EUjQaMCxojjHkKA9hMwZq1USA2RBWduJHC51uGU2H5xAda3B",
  "key18": "5xt7BeLHktEDfsaKFDf63UidoDyBsJVzvQk9FfAm9qRrHNFQVK79NwGfNyhGqGqJmrZTnEFVf7Ng3n8BdNxsC4qE",
  "key19": "rfqf1eStBiGNbgnokhz8oCoGkxvDRniMSta28FGpwVis5BYuY9ooCNjLt5ex9zkYLzJyEWYuwzV88pPRQW5DyKU",
  "key20": "Xo25dUm8q3poNvZQorQbd5Pzr4jrZoZ9Qh2ab3Xdj1q8svDVP1HG8yyTXXFWdopGSV16thk3KpSwdvaqBALA478",
  "key21": "28sfQ3R68o35za5n9toUb6M6vebL8oLku2qDppGm9DmCs83kJxkBgwE1GbUUb76N9YqDNB96twdJNEDAZRNU6gKa",
  "key22": "3yCAiuRt5wTpwsDjCNKP3eH3Uq8tzuH2Y4DYj2h2Qv2GiA8ZSyyN78rwXcbymBMpkevkcvxuDDNyRgti2kTgPu5q",
  "key23": "5rFdSfyVoN6hSuEZk2iWhWri4bNVf5tPZ9ULGwkUv3M2N6A4dX96XDYMvD4UDjtihN5HCC6jnemYk4Ji2ktgNdo1",
  "key24": "554f5xfULn3ac1mvV6quoRemigf7ZVyvUEKHdZJrFUb6kQRvmqRHwsNXEvqVsh8nwTkk4CU6kWmadPgvWtm2V5Wy",
  "key25": "3qgJSmKtrfqp15k3M8ajSBuuM6eMpgSdvFmoSVuft5Z1fKfoc4RBmpnX4RDeTRzZZjpzs3tyRHKTeXYS5ZNenxpb",
  "key26": "3DWJ8dczN19ugKoTbF55nb5aDzVir5P2U8Cgqbr2r18XjxXpk9w3pCeRbkdNEzGd7wm6gM4LfXyTQAur9EMRiDtw",
  "key27": "uejbBPe9nosVuEhUCgPEX3B7UB3Kz7dHo3Gq2XnYuV1p3s2Jx27cynAN4w4ovLFXEG1YVk8sAsDQLSveqvD2z4X",
  "key28": "5isZfKvySsv4U5xTn177mwaUN5D1vFAMc9DEEtvezgHurEYv73fQhkkqGnZr8kaW9CmCmk7Ac7s2xqZ7QkugSaWz",
  "key29": "3LXHqWXKY2LnFD4CiTU7HuSbr9AmUskK7tjsuoSSZBSeZp8p29CuW92Q7TgHs3oCUeuGNaBJpiAi3Ce2fszjMohR",
  "key30": "4HmD71yVKW1FtnAmPGp9VJjHKsdwYMS7keHB4KZc4TuLpjcwof8rj4EocRo5a8vRHe6eoKgavPti5JXsZsvJFvJ7",
  "key31": "3ccm5VEWJJMCVyyqMRs28RXyBeNebRVeCnh3hGz3iA8Vr9JwNrjuhAmXqNhXgnn8cDYhhEjiPvHBfTSTrgyakpd7",
  "key32": "5EbFQSQM3r6fixAJByLwT36u7PgsJZjNZ5n69mZUSUy62ibss2jB1o4YtTx1VhuKYCmoom4yGGvzaP7c7XFQs2Yp",
  "key33": "4QPA4CB7vYa9FmeU9BETMadGScpntFFgWjbVVbPLDRRbFidLYfAWcvngDeKZ8LKM5wJAwMopSVSgbDbfJmSJVxie",
  "key34": "54AasKTZbeGBvh4v4JGgH5ycJbsxd1EisJE9g1vV7nVfKFU3NRYykv4Uy9xTofQf2JgaXK92ta81L9se8QuZufci",
  "key35": "5HAPzULTwy3Eo8X63U6DoaB6qrGP4eHBrpNSNasGvmccDtJQ8MJFSVaxKdf4p9HhKcKd8Hai9iY6QkS1MFjq7Mtg",
  "key36": "ryawFpSoHm29jpvFoAeyCsAzJdtaicsgmuAjqtSX1irzTWjy139HTwhVSAKc8yfceRvConP1HB8b5d35ybo5Piu",
  "key37": "4W1DyQfEPA5enAV4QJgNt4SJy6TTLUoDof6AERHXCFc71xrNZ7aPvct4ww2y8SLUgVeioTtBYhoVKRPrEHbaZFyy",
  "key38": "65x1TqY73DnndM1Hgtej6EdfJM57Kep9DERoxd3bbECYnQcKnwrw4Egh7dEQkzmnNHaPAZkxNM5z7XHjDYcPPafU",
  "key39": "3D16QwthhuHB6e7fAMGHfaGxEthPCYWnPvL2D1dnXQAQowKGLxbfd7TT8fnkk4JZA1pCXh6iy9myEaJnUmufmtyz",
  "key40": "3toynEk7Gd1foCwJ2PnJTgRBBguW19TTXAFUn1q7mSMExa5C9P75q8eR45rLCwz38ibVeVJiFDejMfnu6hWe2E8Q",
  "key41": "zkQsSquFUM2umLGQTzsQ98648LkGvN7tHRpYF7WZ9s95yXNpYgGjLCWqJvMnvA8ybeHrphFLUTGpCUf12Qb2TbS"
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
