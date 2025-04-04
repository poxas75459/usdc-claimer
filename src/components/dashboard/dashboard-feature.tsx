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
    "5wkP5ReNjQPL8sV95SpHzXTffgNfd9sp7d1zqM6c1Yo7ZhEV993AFiqVqdPtnvUTQaeJpVit11THoJRQ9tPTjZv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNehn9DJToghp2pNQ9e7MWWwBZQdmHnJfv585V77RSs2GtS7u4K85ED5yqPNYbqy2wMKZBgadUhLiVjSvzsGFxX",
  "key1": "2a2osEpgJAF7BuJCa3MkxavPmBc51PX6HBdTkXZ2EXNnSQmAedsiK3hgsaAXgkBHeSN88mkTCY3Jt7jCBGyt2Q3w",
  "key2": "4qS1CPYJKPMbxm9XR9MbKhhezhMocRPFxreAtNB2tvYemiBNBV7RJDzPL8uWoSasyXefXMeoXXipcBnsH4k7TaXZ",
  "key3": "4u28UACCoMHQzdDWYnSaMgKSqbP6T7vw3gg5cp8cDU2vV5ji5trYuUyFiCgkGHH3kkcBHDpXKKf6tAEbupatmqvb",
  "key4": "616ME8r7WDT5Syn66tcS9nuUfw4kWrL9KuLWSqQ6uToXRkbMUwWjPLXRK3FW24YoSGz1hymaYraaq5aHk9f1B7qs",
  "key5": "62aXXrd5b3JqhxcPs1Hw57wM3cCFABWudS73vH7YExJ7Rt7AbegwFAboUvpSk9YjwBsdHWzqHhmv1fAqD8JVRDaF",
  "key6": "Gwhet3eXgHjszz19pRzgYmUUtTQYJHqjG1rvR3yNtLbzkqg4MnNRC12xDz8Z3o6n2ZvajHHfux9QFPHAwGpJUMQ",
  "key7": "3BJ6u5GGwPKr577hbDUqrvLDUbADCmzARiW54ttMuY4PHr7Nu4ZNs4ArdWUhTB2PY1LPe9scDF4YqD7LYACvJcwA",
  "key8": "4oDqNKXum9ZRXXmUHL1zHcAjuwtuUKNmtepv2smcmvcqxLDUgPxkud5gD1yXTk2ZL6ZXu1G2YbDpmdPoJcJW3LeQ",
  "key9": "4aMGzsDKbM4cHKeNG97irNE2K4Redgq1inQcKrGP6iDomX8UbB7Xczmqm8eHxmJcsELHqs88hnGADVwRcNzVyDtQ",
  "key10": "3RGsKcxXJk3AwdGADpsrRUiftY2fRDQW1Z2ZfM34h6TfWXkgxfE8Pwx2Xf2qEAPMkNZqMY37mr9joTNHeZxCtFVJ",
  "key11": "67T5VpLGNqTkQPAp1qJe8fjPQtVa52PMn5rEYf6R9AYpmJ5Tqw3WmvFR6CPtfhoc5Pixn47dCxb4ui4yviBGuYkf",
  "key12": "5r8ST666JaS1hpQzByvgTa3CpfXrUvUgADyjBtt1G6tHvUYbQmT1SiyaFe4akC4gmLp8RvxWBt4T7ioso5GBrZe2",
  "key13": "4kAJgx4dH99fogkuQ5FrR2ViAAfpQEH6xz2yTCnC5JqfXXjVhhvn44HjNj97AVYEtyzx4yFe4K4moDq1uxkN9hdD",
  "key14": "7HnEPRVZvYUYDuyYGxNcvdfn37to8eKP6qXzv6gnVF7zsjzagfpJ3XRkqCS7WtpFC67QEmREcZXJuMuUJ7FjwFV",
  "key15": "mmr1VjjQ9y24gUffXiZiHM3JWxkG4sXUi9f8HvbvP47aBcfrcqBmgerPUfYbeCtXDn2tgM4LJe1zt9qMtqL89UN",
  "key16": "2B5jXXPirKr3p3UiHWFX5Ck2MK7W2j443ryqvooqE57WTqPz1SrUmCdXknvtp5sdeLok5XXRmCJbxPaqqhecqwCW",
  "key17": "3iE2naNVN8b7x7c6146HjnPugPx81U2FQeSFfWo4TmkETaPf7G9M9qxdNJHP1fCYXAKA97m1mSZf4C2tb9GVnUBX",
  "key18": "4ue1GNcyVZkpwDRW1o3P92239F3w4QGeGq9UiukXrHQhKj1rPQtbaDuuauMDLevmXT6kXQgK8ecr82o9X3Vm6Stc",
  "key19": "gFr7jssbwVBhT1Uc3L9WDGGDF9nLZBdePAT8ahCA2uSUtks1RgWaKigufa8ETAf8rz8QjJeh2v1pSLYvt73N92e",
  "key20": "5XZ8NLLr1grW7kr1yKfoGwF6GLidt6kPxkYSVjjm8SP29FCn4i4Ud39SPJdoJqVVMbPBqrCy7XAmLXTnPSApmNwD",
  "key21": "3k3CszEw6yvDhZT51WZSWDMDEZij5EvVCC9aa6EKhfV8bm2N9xAscc8dCLDRoX6x3VxH7T2Hc7252rAARnDuc5T7",
  "key22": "2hxp1hZFqTSXCqhNMLWfcMz4cmK3HSRifKvayJZrpaTrLuumhS7h1oWqKjzvCi25rcJcYJW38ZWuyG4uqWYW9B9U",
  "key23": "387eHRTGZme1NvMk9BVTCrVZLw9G2YducwzkKV4U9R8zpe88GARrffW7T2cSC2XG3WFKU3tJpP2q9jrwWevmkt49",
  "key24": "3NsJea6VYgUKXLsqS68HSjGAE2HUgkqfXKWTmNb3rinr4t11f51AARB6Af62f4YkGddSCgW8cyb3xVrkEGc3UYkS",
  "key25": "3uJr8AkeswmyuULE9QDywLGmMTZhMxVRuJjAxPtj2RLb66rfwSVtc5znG3r63hcdAmBJk6dDMghx2TU1gDedmYK4",
  "key26": "4bMVewsK9464foaY3VgRthQcpyh49xjRskSBNNBQHRd74yUvZ2gxU2GBeX7jpb1tNRF88CNRNHHfXJpZj9TrzPSu",
  "key27": "3PuUc9prQ1siyPwX3MYj86Z5Dxw3dKP4kdS1j9nMiQkRwuLNk2AtgFEUxZ8G9engS3hDgNpmjZS6ZfUc6G5BfJtk",
  "key28": "tbPt6RrY5ZZj87KZ4Fv3oFRYMWjkfAqgbqJWzY4ZxEeSdq4wgAVEWDzQ5DNfKaS7GBeZu8jgaBYNLigjZ6yZ22G",
  "key29": "3VXJr5ktuzYj7CyDkg5zPbGgDsPs6jF16LD2xEmPFPmFWaVtXgHyqaj4iqdSz6PLC5Y65G4rvQW6EX8fTcbcmULs",
  "key30": "4b5Cqw2AwEmtWPjjwXyMLgku7mLSWtxmENET9KDwtdoAqYzPRpARnu6FKaA4tt3i9ZAKeGyovB4aeRR7kEb9TkFn",
  "key31": "2Wh4Uo4SVjFMwSQPYNuSQPML2KR9NuQJM6fFw7LYTcxkhVF4bzbgxYAFyDQ8N3vANRuz8f2Tf38qWyAgix8aKJsT"
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
