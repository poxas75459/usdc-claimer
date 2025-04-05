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
    "2LZn5Roq87eivCGVCQwLfgiDRUjcx2WmAZBpR3PVSnMTLpdgXYn8hsefY54z3Lt9zyoU5dQCyVgWX4FV1KguFKdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHmjsxzZNDzdKMhXfmrxpCFXEG2NqJ47WpFfa7PJ79gz5tGkFYEddTCzFZfbi4CuifuVowmqXrYrGTqhWvsPYh9",
  "key1": "vvWFibouAnyXU9F2P7dbfosAffKwreUJZ2WgkeeccnU682EVRQ717WL9zwX9sAhMSZuzaJvJg3BWrRGFgmYftNb",
  "key2": "5qcfjtJ21eMD2kCxvMLk52qRB4JKM7RdaXYRuHmshVFsFDoBvzd4nrjowg7xEQky4iqwExWojuQaL8Wgje74HaTV",
  "key3": "54RmRM812KXzrrTjsTCjefRuKkWa1NTpbBwHm231Rdmbdu6m1AEMGB87pSaZqE5qcZAGopVauMYdxmgv5Z8e7r2L",
  "key4": "YFULhAMC1EvNmERiMYWRsoonBFpUv21yQv3rbFDpedGcf3eYijgrVy7EGcfvuRzcJErsSBSi3naJXJsoax6hhyz",
  "key5": "5HL6NXN2fa21qgqPt9qCHk9aezNEeu4ZpkiNYYexW5eLRVukA4cQDjZDKMe2KydDr6ugzzu58uwJ3wkUcZwhQudN",
  "key6": "47A3GTi9cnYrH58aiPDFpMnnEWrNG4NgsTdfnXFe9g3KrPfQQcnBYNZULhGBesnjpPkvpY3znPPAwsF2aXXynt3H",
  "key7": "5zx5m5meYBFt84CmmanvFDnZkGBQuEoi4pzR27vjuWfpZkQnvRwz295SqmUWKAnJot9NV9oouEh3mxckwihjVauV",
  "key8": "3CMSRdb36TC8JUBzi2ceSuEVABrmsZRLLnC9oPo47uPzDMSsKxiPQEuQxa4J5MRvWMj5PxNWNfcRUL4ZpLZfSyxe",
  "key9": "2YYhEdTaXFjfzKgWVjsuUhAenFPdt8X5CYwAvDtFLhfpb2p7cKfQPrMPBNP8YqrywQ3hWYBESA4PBstLqv9aN7Uh",
  "key10": "kvVsRmT7BY1LW6N6kkAzz98EUSL3Q44TQwLaS3GUeqVB4Y3VzbHRtjFx5FBRXQVmtYMCU55PPisT7gGkoBziLA9",
  "key11": "2iQM83SeVcNFtPM9gxAmThbJikErkeHJUq5ZDahLv13sdLSsrPZeGS1xfHCdV3tRTQjXVBctyPtfG7eKyaKAsuKp",
  "key12": "21mBntgHHgbgwSdjwM2oUfnFWDSd8D5aDvxMJrksrVQP8aPuCbjFAkrYq41iXSsF6D9rQC7kHb6pe5AJqvnab5tj",
  "key13": "5pXmpyp461cXxnsNR28cqJjS6saUPZJGRWWWrxd9Q5TbaoqPDvaianUbtvKPEWVbzVa9nQgpmW5x38zq3feQCKXY",
  "key14": "2ydpcAj1amBPVC3aZ1JjdFuuZDyyofFjJb2jmznHzgQJQQmkHe4rJ7HoLsd1anTtKro2W3gLhfghKYEtzejCJ1Xw",
  "key15": "5N9J9fMQx1GX4qQx21HYyFy6SuNAUHPto27npZw59vuBsdnbo5VZ6an33RiLEt2AeX4a9iR87fkdUi2amoh3wR3d",
  "key16": "28s9uQWtsvEgmhNV27mtyL4uyp3pC4eZGacHZwZNSSxRuupy5v8fex1gE9aQRWG9EsK6kUCLbwDxfKQawWnqmdDf",
  "key17": "67J3arCXSjyxSgxPdfDZfYusz9UsPRFCVabStW3NkWT1ehXTHb4Fz2USN1FQcDrQWmqzhPuEBjj4i8EetxyPX7Bp",
  "key18": "5onauU9UBZZyU8SVPtCKRfk1AiHBNX3pS1SjXRCGEgoUdiArpwVh6hcQhEsVYPLZgW4vWU7kcjUhSpcV6AmpWoWu",
  "key19": "61YwYB6GVGNKqgp6DEk3uTtnMrASmRoN7wVzyEWuXSS6UziTT623teHBpAJ7gAmPPg1zZqjBq2YERTQMt3CFYTXN",
  "key20": "4PbHdatdjnjiKw1q25WzVLjk4AAuqJCShFKuggLcQd4tAqRxQBWgw4MFGT9eZ2wapepwdvj6kbaEcjYePBwvEiLm",
  "key21": "57eBrf1DndG1ZAtRg8qncC9v1DU85ZkhFQRSCatuGePmorVfmR6GvkiXFw9Dwv1aXJHdbGX9ewddpWLKrnikm4pT",
  "key22": "3VYrawVNjeiRn98GRp218V9xXE65CEaw4VKfwaMgBvX5kysZaFMuPvddQjr18WorxeeYCrJK6YDvBDwMgfKPzxBG",
  "key23": "2v9iU3rwK9B632kJHC57b622EHeNbbJPfY8uyEracxQGpywg7xT1L4K71Dzptuza69qsR6iic2qRJKjvQAyaPdNs",
  "key24": "4DkmcYwGX23JoRL6LUySTUjM3jh9zpyZTZzpS7cnENUPrNXBBr3b7QQq4BMuRRHrJndh6HdHt8g9Zs5QUM5UKtdp",
  "key25": "2hGYHAvS3MidiZmvyJpm29fNLcAM9yGzvRiWkai1x5Tm9c4ci345r8VFDFoG1naqKzuDW41fqauiYp4k8LPjDcKb",
  "key26": "anUfKELKVA2gJdPrn2p2eCr6Abru2dLZK7K5XnSDqyNDDhLZUtmGfjvNCfgnkKG9mpkK1k2KrXsiaFHwB5ic4GB",
  "key27": "kh6yn3heRYqqGJvQQbyx6KikYpkKkbiupaeWaiBVm8gvoVopn65wbfzeMDjAqTN4uMnQQ6iPycgoZLPNxoF54zf",
  "key28": "5mM1P1sqt1z5TbtJEdvdevd888Mek2j2WP3yWYtJ7GaaWk7VDZBp6JcjKVybULTLuVPMKdWwVJERfzt8ujYoAH99",
  "key29": "4moDnjfxEk2pw32YqSy6eSQFTDZuq2uM5QFxadfCL8acybAgzeY5nSFgeVo2LwRTizKdgf195UmgATWVsHzvCF9S",
  "key30": "GU3jfguoRaqMvjgCEjqdL6r1AY9LjPuM1E2U13NQSQbKfJFdvxtZ9wn4kx1E2YAnzUtL9n5xxmnJxzruzL8EEc3",
  "key31": "4eiPS1wSNbabQ2BXysyojz3kt1CfuHFGj9GpaDLMVXLWNQLwoShnE57ESHQuewgGrWaGNyis2pN8bMAZ4Ap2wUHY",
  "key32": "2pqHw5sZeoiDVB44Tgb5U2ashmNiVZhjPk69atm1NUNHRywDgkCH5pL66MPK6bvX1gv2RcygA5XvrKKTvdxtTRd6",
  "key33": "3MN39oouTbCwpgomPeygnXNNM2E3CF1m8bLStTSW5dVFNbsJ54Ym2c7hEuKPfviV3LcaENuusHugJ2cuTPcQ5xy7",
  "key34": "2UqvohBea4ZC61atQqQ9rbeGgwxqx41ThkLbTAePEoDaEJj3DNbVC3hZuVS9km4d5gwQc9DjTntPHnNTb7fjUQRF",
  "key35": "3SGXdVW4yrdkxpJLBKzuJjpWTa3oXCeDMpYMBPzmpaP59C34VMzDckDBXv6sFPr5eYprWBZnvcxC79P5AR7Nbwfm",
  "key36": "zwtQ6TS6JQzmh5DT58c7E4LaRiiY5gUKnaHQcYpeFSKnq5WEnQedsb2GKGjo46vmzqP4GPVNLvyPHzjxJeamxak",
  "key37": "3TUccm4RMSvXfCJqvUYhQEoeo2attAohb665wCuPs53hkRvDBZS7Pc6X6xRtvgkxEseoMaNtrXeBp2hry8uaxhNk",
  "key38": "2KVUL8rzModNmVoi9FM7gtwhhkvsVfFXcCf8arcC55oij98ZfuJUuAbJvJN6mgcu6U1RTwW5PSX5QU8HtNWf8D55",
  "key39": "4cmP8FkguMnHrhPgLJd8MxoNYE84DgrAJoJPAx9cGRuFnx6YrPX3tCJJ6vZSpWpAStKkn8RA2mr8LsrncatSi3RH",
  "key40": "55EAYbB7dqs3asK8nuDwfe7JTzcShxrpswtZrYB5eVdqTyDhm7ZbzjjZkQWPvL4nnMCg5scLWG2BMaS2Y9sUbNy3",
  "key41": "37QrJaisRsuoSjth33Rcynwhs74NDjLfSR1tetnCGpC6Hg3hAterkYCRSaiz8U3wsUwmsptBNLipDio7VZwraphG",
  "key42": "6a6Sd9jRR3wjuVZdBnQZccGJopKcjQzHwpdGkbRsKQdxLc94VNaPKnF2p4C7mjozF9ihyoxqSPmHa7KrwFgDCNH"
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
