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
    "4CAxFjwpoUW93iofen8Tn8sGyJnhxbLvHeK1dbXx5YfTF4nCdwikcDkiD5gtndQzNjLYgxdn8jMeDjVqU3DmAPbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wf6QrSd247qErb8Z1GxzuZXyfKq7Xsq5HxYUHdQP64uTT5rn8q3YhHX4EypLhEzrksntpEcaT1xkYLp48E9k4YC",
  "key1": "4Rp66PhieCXeaWFtV9c217AG5fJEh2mtQW915XADP94ZbYV7j4iJTg6GTsVUzxeT9HnKjWv7sJ1QjXh3ughYHEB6",
  "key2": "2UQzej4wzCQ51cDpqzz3snmYKfrs7dvF6oW9Go1yde3XUBxDJ67cSyd2oPYJhBW3CGf2UqC161qNGCRd6JYD4zfp",
  "key3": "2PCjeZYFRncjhkyS53VN4wJ9nxdwYQk32n7gu9VPsbJ3DnfrfwG7LvLkLpQZxYmCCcDEYeU6xH7w9hmLbxjt4Go",
  "key4": "TMVKgfc9VySdj3XSBVZjoXvG7CQgc9n8d1eKSs1HQ6Jm5qWmpaF9pU8QoNiycRr38JwmLAgWTmqgvDitCiWWVwP",
  "key5": "5n7mHnrE4tabDdfDv8e6Hh6fvWQpkse8AY266Angasqc62sJXDn6baGWkFndXBY7Xrc6Xzf7DMNjD3D5GZgheYFL",
  "key6": "peS8Sj3TiTq2PhiLyKeH3Vs58gnPtwP53qyyLSNJiM41RETVwDBFbvrzmjKpycQ3RUsBU4x1H3vb3b1ijjercX9",
  "key7": "5CxNQCuFFR1vroavN9nrH32thQZ3VJWh2rRfiZY2ycX9gEZxfnBKDKjJDTVwAJEdRNEx1dXQEUywG3DEN1stgdiK",
  "key8": "EExq3o7iShWKWZWDKXxzXe8JZJGoReZTXtDVAaCPgAcSWxMEmqasT6bBQouYE7qCA5EKCsVMxftUFJTNfayLr8d",
  "key9": "3aEuEb2Xx491pHcz2KYVuJ1F89TkwRKj3oS76FTHuP7rKVtHsZn11rjbe9HL8VUUXJqV5QFMbG1b5RUwmLkSGRyb",
  "key10": "2C99pbxwYqzN2yRfwFNeGS7dwCap1WWuL88GEjeXuo9nwNcnoEZDoaQyHgU5jizCbcK5jNRL5ByRfQE3zwsG8ZWR",
  "key11": "3kA5GXdVChNsKdiVjNvHMY5ttW58o6VFzzCirRdNLUZZa3famxbXJx4DoLXZCbZ5Qur2tKMjAwkLXbFh8SRbCgj5",
  "key12": "nFiaJvEvxmkFMfuFoLJW9Y6t8heBs6RnPK9Bt6ARanjtouSCeGtfY9ycycTTf3yQrYZcFb9gqg99oD9mQmsHqbQ",
  "key13": "9BVnRZTpZ26dJ15yULibF9oqbv87e6rQpjubSV9GLjQi9gMJ2YAXXraRBJ1dK6PvpREU6pTu8cEy7i9Dhcvx4Cf",
  "key14": "5EdxGXtVrw7nC3SRxdfaxCHTD7xRpHgCpo2ZDsk7DTJnMArWb4g9BmHFVSWzpVpLdCYywQWGuZ7EfPX89gB9xug9",
  "key15": "48ntspaB17sxMP75dN5B5STNYxveXsBUhVs1diGa8FKNW6hGT4KeKhJycQdnyWLWhBizWPDyjbhJ5gXcLCs8vzHP",
  "key16": "24BC7LwLoYC3U2VGet6qB2wwXbhhTGUW1xmrU8B5TSk2nEiYi4uPTGJzhqBLQwXxiLyd7E4uihF3yFWkHyQJzNZt",
  "key17": "2Us5sRTCSWQiMrGakDDBGUDPYxAsDGe8DvUJTkxyLb8UGcn5ok8CzzdakGqHPoe46F7k7x5ssobfXXxowFgHyZxL",
  "key18": "2sEfbtaCwLpVGGEDDsp6EgxigLjtcUjrdjwVsbxPGFzqCwYDGzNthNEKee9jASEMyH6JY5gFxPyEbhNmMxgdCf2x",
  "key19": "5ECu5RGQoJtGP5daEK3BMppw4BZtvCH4FtrLddh3ANKoGaGi4LgzxN76wbszo2Ttmfaq4HaENXegMbzPs2fzGroG",
  "key20": "tt4YvayZvT6GiMJzz6Pz4Ghc28DfpHsrtSUt8JnmAVvQ8KcE2SV53SaxduY3u8qgwi3kUrpziaMkBZ9nj2bpX5D",
  "key21": "3xQh2Vkr2goAKw2FwfWSwMXahXJsntUeEHKsBkC6uJV9Te7XfU5VBpRXsTm2Gjb6GGjeaGRrRKNp7f4Z7VGdp568",
  "key22": "46yhq3wP4GVhiWksSdGaXHykHvkZqurjhbNneeSxDsJ5TEKVMh1EUksnekacEM925i62tWEM8Y5Xaj4H9tkkKYQg",
  "key23": "5csRExpBEdMEbknBbEdPWa22QAgMGDrqE2o6oCSzhzPkSTdHQ9qGHeS3R9Y1xsaxHZDaBd6SGH3nYrFPs7YV74vF",
  "key24": "5Zq6CDaPdpAMZUqN1yuebD1qf659iXWNcxqcNsy41hk2PEKB555oT3fYSfad2c7kkGi8GSYuDY5JnLZqYj6DzG1u",
  "key25": "67BAxb6fdaC5a7d1DD1kqJLteG4ntdTX5PDxcgapXRnscRbj1LMxSsgTooeXdYLtu8RikMjrJvfbkQT1giXTkaKP",
  "key26": "5j3Yf2yXqpn8yDHPQ9bM6KHSuNZXrZr2QvSGg8p2f5fHZKts8oDfz8CiRANaEoxPD77BrjawWHFxWsjJy8ooCC9s",
  "key27": "3iM6jo8a7SU5tjaxffx5XX5EFVicMziCrfHrYHWg7pavD5i3bcgQGEJjXYJ9HReNd3CEfxoDZs2z65w9B218ux6z",
  "key28": "25rj4eWiGgW5GzJT978KSjK2fcV1YdtArhvYHNBsv5RBB2cSvVppZiYAL3WZ8F6G1JhVnojgaePMb1B4mEtENmS1"
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
