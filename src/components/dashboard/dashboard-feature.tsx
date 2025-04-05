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
    "5jPEjr34VvkieJFxxcW7mNvyabDy7qWT9Aogb4zzLcDCwNtWkqN8778foi4XaKXWgDJrkKmxU6FpWj69uZVJKV6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5fFqnNotzk6y4r8EmwFwibX3xSSUMYqi155TLNYzPcfh3otsMiL6sbA9HN96HPcTpxvzzHm7XBKSnm6kFBqNqH",
  "key1": "5kP9Ga9xghndWJ69Rmbi2rPiJCa75SoqGAQ6mPVEGu1Ez6vfPZosX4NX1S34aZJDb9U6nDwACHD9GDPMbu7GAtpq",
  "key2": "3wXFcTYLqfhz9jcjEKPS7Pdg3a9KnU9aRoQhMyvYuavtBWDZYwRDLBWqCwFnXDyvWSCUCGwLAQG7ncwAKkASb79Z",
  "key3": "aL1s3z6zuRNF2mftkqjkWseB5NwmpEgWEX55FXurKGbpYyYkFzamyuQ3ftVpPEVs363v1oCyiZiE2ATf7xyPFyD",
  "key4": "638zCwSYZFjetJAb2Wr13z8EShUEuoi8LjzeQ1XoP4LzG5ai3oEsyYkHVopDGhDFTwZaDTF8c58onbP3a3kCQ7JS",
  "key5": "4mHvN1h55Txa3XRtoMoeX42zub3iwMNJbePUYqKWoqsg39tF2JmV5kSKKFG879Yg1RY6ZcYYxZ2tBnJrzQ3T3E4r",
  "key6": "3YBWay83DGbvcDAdQPuh8jEZigRpwzDyz5W3GrLEkTBQkBNh5zvDkk2qChQMvGrNMcfFzgA1CzMdqchJizrWNzyQ",
  "key7": "3MsJVgYVx93UdmBm9nxsBAgmMXbma7M1ph5AnoQkWL6LXr2sMqGnTWcsuJkmHhw1Q7TZP8GXwdjWSEad1a8TtUav",
  "key8": "MXmQ8aw42RSCvYCuSyU6vnXHM4MFb7zBfLNDrbKrfHfUUr8iKbaVJQ78B2trthk2Wf7yLm3rqgccGCDSzLLQv1w",
  "key9": "eA9S8aUsZbMcfuq97r6mKd7Fri3BGjTFFomTjZcGdsx2yLyxsVPYnMxvLDA8JFt4jsNLvKngh8tNWxcttiHL78d",
  "key10": "5nJjeDxQwdxShddjtPhty6NR9iLszvnAzrYqwyrHcXxzxRcQFc77TAiM8t9oSK428QjgpWM6qvZxihAbkj6nc3YN",
  "key11": "3TeMV6bokvUAf7RSX12h8GjvyyVhy5A9EAKRAR8hwUGPgJLwDhtVmUDHBZ196rJJ9ipsqSt78bVckCbZ9ZkhF62J",
  "key12": "3pdqmU2N3fDJRCegxJcPxjubUdrKcteZ4Zpt5fthxspE7mdvK6qG1g32yMUvWN3YYY95kUUYwkH2nXnAFsioFUor",
  "key13": "5WbqcKfNtmPi77gaLoAGGv7gyek6fsdjDmUJnrQPrkbh6tjfXHpif3ekQz2thGDEiLM1ZxwNNXS3mi4psyV7PAUk",
  "key14": "cgt3dxfJ9U3qeTDp3ri8waeGPoFxbA467sxEUdKEkkomUSPetc9XRGrEUxrFmn9FKJZpoTMGLvEFSx5hbkR93Z3",
  "key15": "5zfFpPpDqKLFKthHZU6B8KpKimn77EPqqWtSrrUDwYwqCybpxJnq6TXyTNr31LEwRe82kKSSbcA79tbx9NepEKp2",
  "key16": "3HQTEMoxANGT5i17isgwQysMJixwuYCwMmGinuviH8ppVWt3eeo9GYhPmtbtzPQNVhxztKreQwE398cMhPZhdNCB",
  "key17": "Qiuu4SVBeMWXzMQmiiCqCFCdjCvqyZBt5yqb3d2zCnA4Ehs185otfZfyYRfM3bK1KwqqirLSz4GFetGxcRVeRpZ",
  "key18": "2339nG4A5pxGsLAwWS2Py34pt1DjgNWWGH9eCrU4KWLsnd1xoeZjLtUP6MRgHGmzBP3RwFJEzQBcFtwN4RLnhvH9",
  "key19": "ZG5XRMGMUi9XTdLCrumezjmTwPptQTdfAZyQU2x9NJVZnocaA3qcFSoNEJmuYegSskW34nz2JSWvYsDKCUKWcsE",
  "key20": "3SweFeYRRT2GEzWXvMQvnwsbZWnXtVgAUXfJd5rPhgjcnEKMYVRwE8jeeNv95XhuPPEi6L3ohXnhu7Uif3MrkPr1",
  "key21": "4TychdmqSeKHLnNvvBCkqsxpns52Dcfj83VZPsw5R4drwXHKmfA8ZKEa1rQNxoZQgqS3i6aCNaLzMAKeRaCwfEsc",
  "key22": "3kczRthcDN2hHBPNHG8FA2du4WBkKCSanFkZUErSpykccDrLa6usscyd7PXdRbkzWTS4C12mh6h1S2tNMPxdjXrm",
  "key23": "5y5ooMjgmU6sj5NPK9KkqvHDpKMU3LiLESVKzQNRvV33qEZRYXCpaa1heruLGb9BQxxKKMaMJ8y3aPAjKjMuXQKQ",
  "key24": "4hhHfVZFwjdNf7XDZnBJ9nTyGMznkVjQGtt4buPT5gxJkn3uXctkukoPeJ3RR4XAg38JJrsveLKQL2yefTWg3YCg",
  "key25": "4qgFFDjm1HtHBGzmwkUPiBwFUPRwVG9Sy4hnNpPvZ7J492otmVyGFxstGrnC5DztiCbPCKWEzmhashp5QincHNxD"
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
