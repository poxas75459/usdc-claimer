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
    "aCXx1ocVtoS8WzMdBqBJdpe5bSVCJUzyo7ejYi6F2nL73MNiuycPpozGkmxXDHpcjqm2yMB6ftDULQQbPrcGotZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38v2TXZunsUowHkvpk6axXFQQAdqUVM6nfskjCm9QrrayJfXKrh2Vvg8B73QDkwWgoRSmgpXuK5DKrUmE6VCSFP5",
  "key1": "2wSkD6c3fgQPcjHLYut9KhmHp1Z1hXpTNWGHJhtLZXUnKZjGxdUK8ZX9J1YAYAj7GQ6hgRc9itUNLBJbvKruH6JJ",
  "key2": "4tU8ZGYjFo5z6juZxrwspeedXX11nQHikrqt8AQCA5uVPm1RWyRJwJjrJDcbkuuZeaAxHr5cQAUBpg9JU1rY2XEJ",
  "key3": "ndfafYWhMRbq7a6M3tcySx88Xk9P3r6M8R8e7BWwHvziH42R1TAwDC1SBwXoDtRcy65JsX46dbdtQph3ZkwzaEX",
  "key4": "FvHAGPs1UcjPAjUoFauD8GtrtL5fRNvacEgApiYZYbKXStnmTvDWExT7ZNWXhSuivtePXmdc3K2WPjhab4SUBSo",
  "key5": "2tFMCBW5yFXaztPCTfWUJuommNvte14h9nYGYTxq1ANqqvX8mCcpRLkD2zBz9G8PhxuyfPCgWLN2BRqGzEsM1rf",
  "key6": "VRUa1GUe52NbTofHjZ2mVhb5mz9t64kPS2CthAkrog3BuXPRDrdtpjVsCp5skH9ZK5122eLtP6Ap5pvp5XGY6MP",
  "key7": "125QiR5ZFvgMxnnKWYYVF3dbkktaiHf5vzxPNfmKGmxGMWXg6zn1NGRiceGqfcsfUv4uwDiuFoiE4Jidgc45sFjY",
  "key8": "2TdCFHEVEJE3Ni8huv4BEQV6Ntm8gemMMRuSppKoL7gN7MTSmEEmeyZ2Nth9RivNUHCLS52URhHP4WFQspXxAG6P",
  "key9": "4aid3Mk8V4qsMaMzTJjZzszweWJCM2zbkpc2PKWKafdPNiTprPftULNxwkyTxTL4kxSd4f4WqdBn3R3icauotQM4",
  "key10": "4zeyGQF5zNrBv7V7bCJWmEVcvwvTuPBeYkUpCdGLAxxVvHBoNTF7vSGfJ6DL18WTuk7j3NU7e8NGQi5Y6BEJunwE",
  "key11": "5HAQywRmhoc6qiJaiJnNGabnNyP3zpBbuGGBUcneomwaFu8Z88jJqrgRY8SN4WoWCg7xpUdBLhSs15ry1wDDzCuk",
  "key12": "2AbRm674XUXCDh5ikBSArMwr5Lj21CHEJurLfe9du3NJn9MN2QFXCirGkCpbrjTqX9dv1V3pioAR65ZKF37kP6AP",
  "key13": "2z5tfDC1NZouYgeD4r39E6Qm3QxGDHjgCK8EK6Ek8J97rcq8czZakHuxEfjpcEVHDe5StobWKtV2k5RBZNbZc1Qd",
  "key14": "5dDWbU3QbC3C3gP97nworfx3oTuzQvo3q6MWTVBDPXwFdbdFrmqBsK5EsUB8aNHGXNYkL7V4hcrsU3mggaQNDN83",
  "key15": "2zPkYj4XYv9NT48djgT2psCFqGyY97ZdhC9ZkBLQovmpE92dSEZ4KxyS5rWtKjRJMtNPxjz1LrRw4ouKi3k9BsZL",
  "key16": "j4V63ZE8BDGnXTeuXZTEc52ekmhwi3SB8HoWLea15GRJ6YXviwDiHQr7RqYc5YLEeQMUtkYX8tEAvKxTVK8t8Hv",
  "key17": "4nxJzWB2RxcQoEdVKYgVFUtGfPbFmXZSN4SUCdwiby5TvhUVcPXiBv7tRf2tAos9FWVFv74EMzBYxT4MJKnWRkVA",
  "key18": "5hqabMyJPgrDedX9bFnvNMrjwEQvJoASApzEnJUWd9mpHT3aRpKQsAp2f61rEhkfqQw8BXxTakBeiRh3YgrWzCq5",
  "key19": "3Erkyvxh77zgxwqScTv83nsSaJaNPZatwrzoDKAKTusnoUDmt4VxDn2eBEJ6niKGubdB1Q1aar2QgmEXNaVJWsS1",
  "key20": "29asXw8KrhbqWVA9GUz2LzwjcCHRoTexp2wUZDaBGr1naQVMh3487Nv1vZB6hnuuYm7iQGV5EjqaSjedLc4W79pE",
  "key21": "2trjZQYNjZzJLdGNMMdjJmYgFFaXEcCFrJ7DhvJG68SYYC7BRKWugXjZQKkdKtYUpt4kxsvxLZcN7Kr5wTZEqWjW",
  "key22": "4vuWyBVrzWkN7br9aJb1FZuG6TkDF6SyRBygEBmCDvCZFGUG59s1rTKbDDi9KpurySyj5F9XUAZX7qQvnaeeRer8",
  "key23": "4jrRtUvsk2i1pkeKzQ4bDpP6bxft5LZh8jxgakb4W9AGjwkJJsHM5kWDMYBnvfQHWLkbDLs3nGXZRpCP52zhaNju",
  "key24": "5fCtNee4xkwqKUnYan5w7B3vd3YANQL8GBr4USjm9DTVebn7f9qKZUdKVXJCtMxPLt2WJnM94eU9mQdYTh9K3A5b",
  "key25": "5xY9Fvtf8QN4nnVRE1f83ksNFFn1dgTqXZB8Ge13EsdqoqF3D6MgEH2Myr6rwAfrWZRCmbGXYzWAkEC9ayiSfzoT",
  "key26": "5wa85V3hbExjh6YGQii7itjUg5dtGTX7w1Hyms3JhsinjY4C1JDvuw1mjFQVkNdhxn1u54SzuCzdYHDwyRSgsLUp",
  "key27": "5ncU6hYYukWjTWS9kpBwHa8ixahzjaTej7t5XUB18BcpkHJGUvKdmp5jVjkqkaZ3aXVUDL4smEhC8FfL2yC81dTZ",
  "key28": "4wXekgCaupLJsoiWQY79SKuxyoPZ7NGMTsqsLn8gjtxp1RmhwGTnCpndFjACxoc9CpUTWXtDK6HTWRHKMWynqn6P",
  "key29": "37W4ePRD5r4pMmSJxgFmNdKnukKce3kzp2u1JVPuoRVpEqjd2ouQoYiztGP8j7uZwunirwkE2dx6sATr4SM82i1r",
  "key30": "5FPpdSu6mXm3Xkv5BpWLYdhkjQWgoZ4Z54VgGjZsaB1Br3hKBH5gQxPB3C5v9nwFuC2RqKhLFNXvdgHwcgBrV6bt",
  "key31": "3An1CYBXTTiQVaFpAiMJoDBP66rNweU7biXr4r5FiBmKpxEnsHtUJAjCErtxAQ4YkkFtXjwZNtUTv1i2bqvDNise",
  "key32": "Zr86NVDA3tSbrz6RtQHEtwhhf5XbV7ucwdLyqXEDBk7BkUB3xsCgS7WkZWiPdTF9FSDbS1sPRLaDzFkyhQxTLcw",
  "key33": "3uVUhUZB13RYoskCpFkh8oUYkdRWPNXatKpyEnP7UPX93j8e5A4MumDDhNCrFFArMKd3inWxXs7pBA8Kj3qZfhn",
  "key34": "2sLoJBTymDV3ZaUzaVK4EaqUh8ezJt4EhCr2S8MGMC1Z69W3jK35PKd9Y1PKVA4byviuVWc2U2XuyWZ9BgBhY2Nr",
  "key35": "2vqN5NynhQuDsMeEmmmjnrjucea9mhVuPHrFnxvKpDsSZaNxQwWYCWkPfqdrDGE2SMhh38hnYGVaRiUhonj22hxD",
  "key36": "2uifKtMyfPh3X6CsV7oZSG2kP4nVcoyVX4WYm71Xiy758SveddA35vtabFuNYznagPaRdoWdGb6PpWSRQ3styoxG"
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
