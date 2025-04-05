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
    "cEb2rzbxZCkLiaGRrtoJqCQNK1LTrEA29ksKCXTADA8uxq8HC8aNHduwqkoWtmnkpE2mnjT4qQyFkkNvsUL73WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veAKX9uFmLVbtJMiGvepgWXrp6w1sSUaFoK2RxeKWFiapk13zWhseuDgN1hEjXQsGGz5NarBpeE2GAPTv8rq3gA",
  "key1": "3is5fsyrdKh6MtZspTp5mMVLBb1xYmNr6hsfddZNzZNU1Bt5N4wRTbwRqEocdtUJegtm3AQFZfMGkMFw1vp7JU1N",
  "key2": "5DRn5ah4LUFDXMYiZRnNhWJ63kPXGmnzPjta3sHgGSCWZqjGkstn3udDNPRD3qtdBPWBXu7WnyYeXHzab9zsPu8",
  "key3": "Yw5WZSLCcnArJ7vfaDWUGVtJSyLAKo6PDp8L8bg3zbR9CtW5tv19M8HejuHSnW1xvQhb3cFhKuYE1ZzoN6WEwKK",
  "key4": "3FPDAmuQKuySsLNAP2eiZ8ksmts8Z9Fd5YDnyda97ySvUVqeW6waqHrdWNAJJg4BkV2YRWhFwyYFc8AbrrzdrN4S",
  "key5": "3nJECaBJtxVPtkLmcRCnuTcCWDv7uYpvM2V7Y12mJsGSNrwo3ghYe5iu4hTozx4H3FUUs5za89szBdBDh6egxF7g",
  "key6": "4CK3QT6HB3Nqi5ePErHxzVngssgTb1idza1A3Y8xt24K11Jq7UxTM1B1FgUFjZX2P8hwYTGyqTLn51azfyVuNMDw",
  "key7": "35BK9RzMQ6FjyiodGzRWQeiwTEiL82HVJauh2R4r9EgKZmUqYwT1tKmcG7phJkFFzL5j8Q4pPkfstShWMVkE2Yj1",
  "key8": "3q8QVcpwBiTsP2v8S6XWwnBYNu3GFSE5hWFE62MVEUJ8Tm3xn7vQAFGRZG36uAdqrxKUTGvwgVxmiX3HGEN1GmTN",
  "key9": "5Kutxx2ert51axNn5YNEUaB9Szqxy4jAQDagfF9vxSr1RWEDRPpx2LePqXejUXGn1B4pyrRKmMejrK5pMo8gncLM",
  "key10": "5SvuJ6FwTAyX6APx57pZhZxwDQ6v2rPMv2Rf9Hfx1w5a8cBgEQbne1D6DpyMa2PNcXcsZctaPuFn3jHS2e3AhWQu",
  "key11": "4A3LHQioCsUSKKdou2JYP3DgXMD8nftyi2kG2GT9XZ8CwcBbAcTQf7bzpTRSwFqQwR9NVn7LwDaP4VxwUFCiQ9XB",
  "key12": "tv7GG9h8cqQCdr43AVAmQF3ys1qqH3kup7ngu2XTNN6d2BdxrwFFHfWHyC7yEGDDpn5ySkuhCoPTXrTfA8Dk8kt",
  "key13": "5xqS52m1m3A9bGRgVqRCaWn9d7VPHzp3aYAitMdPuUw3GL5jLVKWGFnYYEUnagstwbEywnfWwvb9VUfedhyLxMZ8",
  "key14": "3ULgpK3jJwPVuJEaA78zgiuRJWzNnD6odhQ9iomedj5WkGCE2VgxHgvuVFM4cTPzQKKVjb4v4WoC4ZovxX7HTqm7",
  "key15": "4CL6gKtkYP8iwYp7rtGxh65Lr1RC7FUce2AEdSNDTAqynDNRnjasct2KpYaaec5yAK8hYHauzabs4Hn6hf4dQLYk",
  "key16": "3D1X14Sy5Z99BPWEYVDhjCqdpTwKY3NoJ1VdMxeysuJWL6A12Rxtg2MiFNGoJygDmZsV1vMv7sWtDjw4c2SxzNC6",
  "key17": "2MEr4jj1Pi157HqFWbuD8H63WuFmpE1Qpdm9WgaQ3QvYLTq96tHD7RwHxHV1PVo7DjRYepzbp2qJvPh6uLvAQztB",
  "key18": "5D5EP1K2ZfB92BSNJFniso3iMNmFUwa8nybQmVyj4YStDaonGBqQ832PDmcznTp6p3jfLSTh1umRDeXbV85xAd7e",
  "key19": "FuDamjsjWjtQzPXQXqhENHqkCGi2K28Mv5CgsFzDtsAJQs83hv2Qde2Q1TLbqSqoitwTpAnfv5UZMKt1EYZg1Wb",
  "key20": "5aRqY8mjwq9uBf3P8oEobM9LHSjyyVGmhXuLpdqoMcgnd6WNbsNNmwJHrSMcnS2nw6kLf44j2zFHn7AtwSMwhUEW",
  "key21": "4Xn3qAhpbdhKkvB4ubrdAzawRez3iXp7YAQiDpzSjMUZAYZGjdBLBLHwNNky5AAS1Hm1jzk2rQzVRh2jTKCjJtzc",
  "key22": "29gZ4JJf8qaScPqMjgJxZkSDXPpJdn4UMRvDcc4J5MhPeBMMRgy3bRciTp8VHca1tKQyTWHNy1XYo6iqBKhnn3rb",
  "key23": "rEhbYnMV8Q8bo7KwfrVE5GdpPoJ335sJ9LwpgGzzbSxx7V1y5Zo3Kcy3m6DZMKgx9gxJCPvsuLU2e2ewAc39p68",
  "key24": "5sFhyrdNEsGG1CgGqBh8KRbyis76XkXoa7uyNrQDzcyGcbfPX8nYZHts1z55uECcxTTpmDRjvLduk5jMM7Bntpsq",
  "key25": "2HWJosyntDKxrUBRaqtUcEdceKuNuhensfLauTMjfZwhTKuHn7TmACjD1ALywuG43p85MAbnqfxvPA4k3iREE4EZ",
  "key26": "3wnfMocJQ5AckC8CUEwAkSLnF3bLAuMmHxMR9X6coFLAU7hPWZd79dYCNU5E1Ch4UUtW8Mpn81SC1x4rmYdLz761",
  "key27": "2YjZnNrbvi2u1MP7tN9NxUt5JSRkXrvNrBy8eRrf7dEtp9hWXwAtnmuQoSEe43Y1dBr3HESTfJ48AE35AwY4ijJ3",
  "key28": "2o6jr9Y5eYYbXq7uxSdbBUHBKFUZgTvUV8zzaUBjVzmuu8DU4XQrW8C3VUqFMkGuhNXjVStLDgveTfNPKnHPx6pw",
  "key29": "5Y5gQYJvqi8tMiJSYmwK1E9m8ahCnxEFBf7iQ4Ju241s78oidmeJKVCMWgx3MdTDm1HH9nJdqxpSBaNnCXR6hSXQ",
  "key30": "3tWPEgJ9VXRyZ1vmWLnniSxRjBF9U4V4c2djLDpGmHn3d4kQs7FDfTYDCeL97JkoqDviJFdUShid3bvZ138Xdq3p",
  "key31": "4WsX4UdmkF6De9AeyhUg6Y4WBbVk5s9hkB4KJM6eA3NLzM3bpL1iVW8EwBJbNiKiUYNskhARcKdKA7fm9BYabGRu",
  "key32": "2Xte87YifCaifTJCZWnrj6AFBLnRMRYoP2eUtJ1rDXB1AtEhrX4Kh4PEwaFgvP7LrWrTUe17rGNMmFjGzjmXwvuw",
  "key33": "53wwS5CgnzB9HaW8rhiME2ssNv4RRaBiTmu3H1b6EhqjfWSSdggLVfVkcyso8Egid6VUcS5rwVLqWHcnQTuYq3QD",
  "key34": "525zAiA9tUF7hNLPYbQHpCVnhFNx8mpsspYQ8cujJhECsE73jCRa96rfd559P8WtUH632M2X4EmNyrsP6krFdw35",
  "key35": "25eGkq3aUBkhNzcSK8M9mu3XqA3HHXhiJXZgKnTDdVZHSXaQqGo2oCmMQhPs7rRjoJg1SfquRzAE6eJhpMZRuTW8",
  "key36": "FQPKosJU4rSkxiavxMJis6vcFj65tEZLbdjuFcgxrgwX8MWiCP2wfk7NsDi2LRLebyFqepYC4Q7qXJGpfALmhhH"
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
