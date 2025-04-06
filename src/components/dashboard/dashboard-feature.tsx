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
    "3d7YGZPdmoNH2As9uDJFRdHSNDCjMHYxtbbEV517L6RTx3nidLhXVm8JAkHRDrixYibGS86kVBkWT9fbU6y1H8eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8dVb8F1L8srZtz2hiQ2vdbv8jia4NGAYLxtPviN2Wy8vjbpHVyAQzz11WnL8whQAB9hDqWWg9PjJpAxv4up4Wo",
  "key1": "3J8UxsRHou58VbUK2HJzvYvDVXEtwYHumBm9WFB83cvrupuFm6KH7xiQWRUR6ZucKhKT33ezLwAPTCKrhWWLFWGN",
  "key2": "4kGSDs7Kwb4FU7YdnLy1XuarADQwV51SvHkk9Yt7sPZFyr26CCTjxq8eKbXssLYp519Cf2NN2sV5Zz49sSYhbDET",
  "key3": "3MF28Zvmpxnh8CjWEsyawKT7BWguJ3n3gp5jd8zmbQjiq4E7rnCqhotVd33Fin9ncHKs3pQRaFhGqrEw5QSWLPwj",
  "key4": "4kLesN4EJHwFc5TTiZwKmgLo5aAxriHM4Me5SD6HXxNoZSAvaLHgGgg9Uedm8FiZmKfyNnLrScd8ZzcdCMxAMSNH",
  "key5": "39pUHL37m2xB9S8GyEFQ6iPiQY6H64qFGz2zgB3BuZaSZWFNNW8yqxg3t7PrMvCCcWqWFeWLjF5hnCG1oq793QYX",
  "key6": "63ATcjUruWeqNwfrnrPrqSbEufXQ4s31zaf4YVCa5shi3ZcMrdU4prWJ96eT6JKk1dsw1CCsJ4Uz5Y4iapDFmkQN",
  "key7": "3Nvq8sRc3zhzCtAcQHAzVQk5PZo15RNZ3VT79AKbcxKzefagrMM4biRAYPwJHszRjBRG1Pju4UhQW9Fwuu7Wikvk",
  "key8": "rKh5fMVTrtdZE1uGnwSochxp5QQJQbPMNS6Se2HqS3RPVZGX4Kh69wxSB3PffnJ2Yn48N77gsw5Thpqa7Z7es6G",
  "key9": "4ijQ2qa78adDEwnJaZvPF73H6LZRPmYmS7viUYuFe4YAiyDEQahYhYdUtzv8V1PHahTALkKZKwg7ePo2ACQhmfnw",
  "key10": "9T7vmSsd1ggTWDJD9DSXbt1khqQQwA8aSNhNkCw2WYZZb56WaiLksZwjox7GZCwgRzMoFNTrePJYAuxYFsaXRLX",
  "key11": "2YzWCW2fiF5bwwhxnitgY29VV1yYiBjRoMreukpxAmaZ9edVbtGi3ZFgsogo4Y64amLSpaxGrits2T6ASgz2UYwj",
  "key12": "4oFnXk3GfF49D6SqHf7wjyeDB5Xw4834TQDCpxC6FeSpEnQd9RpQSK7aoQnV2py8ox8U8Gw2ZJ6iQkt1m9myy21p",
  "key13": "2k7iZ7xEUCr2Ajwd11uwrwiekS6iDCqSDJkMS4m6EamkPJ4UtHYue399va29Fj3NHQLNBz1DUj1JGgRcmXZ1JYM8",
  "key14": "ampYREzbdKqs3LSH2AUc9UtdgkUZvwSRmnJpyhG4XQTgEPaBngMTQ56RjNKKpzLXvs7YCUAh7tRXFKZydtNwXtA",
  "key15": "4W5wggUubjMimRWUSVWAPDAJZgmPHPc7JHKpvDRZAaMqvJzL56uKPGkq9WnKMdNW69W4toCzcMALstj4pbSsfygK",
  "key16": "4pv6rnhACKpwVQ7osAVESfzoBLnhJ8HQZzZM7S2ueJt3GQp2Hyr3ev8hVeTXnZWXLRkspPwAujJRjJ4ZGgWN1WHd",
  "key17": "4RvG3NCT8mJoRHR5AnQcrZhdoBDXaCjKDEJRoTh9fLiDgVCDZGHf5SSXRcdKLHe7YX6Cmu1yEoN7a9rsTD8Bnsg3",
  "key18": "4rP8T3TWcT6Uazj63HCZeQVpAFCemmKQwW5gKFR531hf7ZvUfH7o61yQ6ZTjSYdQn9JKTBzL8upjn8Yv3FEB6bfy",
  "key19": "2qNycQPtYYy6BFKYC8WsvApbo3yHMLF8LdLNcWtSJoqUAAMrB9ZCBKT7PkKsJR39jzCwvY7CAorawwhnGsVNWUMN",
  "key20": "2tXkWa7q1DAULS1wgoNsRn3rJvay25E5GbEDPz95PzwvXS6eGKJRzVu2newZdxqbTc6wsHGvY7PNuqXAFZkSbxNj",
  "key21": "YkZUsKw3BTpt8yA1D32cNghpSaBsJDcu5SZ6qn8f6nixTp7mRE5Yiw75MDzHjgPhFeWwRvd99ab96vpDCwyJmxt",
  "key22": "5pW6sK9FP4THh6jCr6xgtXStm6RaVmhSS6ns1rvw8F9kMrqobKW1oTvFAXthgjDNLkaFeyGznfdMozSMpkwRd9tF",
  "key23": "4rjsL7grn6sahB6Km9cq2Tt81SWe42Sar7XRquDthWphNt6HAvA8r5cd8AJnHfKAkh2a2tKJBQg4WCDx9QcgDT4G",
  "key24": "51aq7K6J9n9NagyyuxPCGsWe48QWuxyJUqA82oFTiRR65cbQBjC6i49sq8cUEat3ZYDdbBtBp24zcUhLPes5ZprZ",
  "key25": "4U8GvgfyNXmY9DejvpGixvivcGUdd8GdmJ5gtcGKPKgVx9sg5SCky8Ksrep6NPHuAAEzo6HoxFdKn2C4GkXyT7ip",
  "key26": "1R1uBZiuF3ACshJ2HWtnxGUUxaPh22U6AAkQ9ETZmiMtAg2KE9kaJ3UdDLYSinvvr8tYKPnT4MoXWjKVRuuvFv2"
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
