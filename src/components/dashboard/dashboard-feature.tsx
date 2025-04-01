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
    "3VUY51WXe2aVWwoDhw1G6ZP3vFajYfSzLUNohs56E7HXpPZSeFom41CHakMGmXDqtgGzXZm1KiZY13pPSmiWhi3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23TacQRyvKkmC4VpcS3YURzB2pL5cNyi8ubXSHmGQ5e51UQ5kq5nRfYpzphqCNqHqpDqH3yTr5HnDmgJQV25GtLw",
  "key1": "2unBhJEpTWr3fNLbcYVqXP6buYSCfQYFRRRqkaogMJEVs9KrKn9DJ5jTnQid83LMA5dLtZvyTrUXcjmEM5dZW52Y",
  "key2": "4NR3mhQepNVXDnYnsvNosvpHKHseEe46ewKvxAui7z1Rs7nc5GEPEMf1wxdhDt2bEihQBG32augectmenpZUJijR",
  "key3": "5yD2rjky1qKjb7HRcoZ44cv6ksrhhsg5LPspD75WxSynPgev5VyTEd3K7qooRhJCB24jd5EzuqG9w9TuwWK64eKh",
  "key4": "3xwFojzxjZvD9CzftLRSP8hZ7tjxsisBUL25ixhDojkhpHTNwh9wrW1wprUqtuxGmmD1iduFvpvpcAeJoo8ohXAD",
  "key5": "4wWz45m9quEBUFbesigUmt8xqsSLVBMo93LsfZLqK25w41nU8ShVsppeDVQLkWCkZB3ygtePhMqXcQgogVSywsex",
  "key6": "5LuWzHLtdiW8CuzNufyR5ueM9H4r9cLEgYS1Pkw97rLPM1Y5oNEXEZis8stwVeVqpniyknh5FYuBAktxDaJar1p2",
  "key7": "2QUa91mhWmcx832eRJts2gHYUzFhb6gyxoxKUm9mpAaNLfXDqNeZYg6qBEekqGsyGJ8FRyKBiZ7DQbotEYBnukv7",
  "key8": "3Gq3bhV86hq7drE4j5Kx148cm76RgCA4mCgdq1kGFL9Dxc7QRqqnGKwpiVZ8bGV1tY89kY6RdhL1jMGTMArgvkiH",
  "key9": "4QPVyh5FbKpZwQziEkA2ereyN61Czp8DfVLTWBrJHiF6thY5PLhbNMbiPFmxVTsQPtMJzCFN1cDDtPxvVnGHYKyb",
  "key10": "29EWFWcGdgv6eNJj72ZPbtSKv2Jeq5y6qobeoQ6XdnaBj4Fo1CwfJ6iSjAqpbwUSoei3KbESw3R7z6UUeUZB5iy6",
  "key11": "45xtVmsPsLVuL7CY9R3vjDcD3kGaq4seEonaThMhxvzMr8vmXTwCWSVx8jnUw8io4kr8fZeRcKyjM2qJbauchkFw",
  "key12": "2gCXbRooQ7rFFnMcw9sWPbbvscnshRpvKqTXCfF3xEPWdAfAsgwb3Vyx6CLbGF7EBSjtLSugDbpr7wSXevujiNXi",
  "key13": "462odZ8wYquCEs7Zh59yR8Jw4HwGVk8MjZywNgZ98kgqNqinUSunVabCEEwU8ESsapqbJnUEz2KQ2wFQKHq3LGJj",
  "key14": "te1JHbVrqpfVzevPkhamvbyiy7rmQwHYfCmmuHAYrMEWi7AH9W4GizxmMrXCy65fGi1kgZv3Cg2QdJr6bvpbXir",
  "key15": "UFcdnzBJTRznoqxL3Lbt2eyH33dper7tVjuwyRiznzXAF3ZUfcZd68VM5QZ2ea5PP7sYYHcq7aPekij97rQoSvz",
  "key16": "QRZtF9LRCTKeuNX8ofdQNvYQFGZ17YheX4p9898dqAMTZgGDAsahak3JMc4t8F2M3HFmRJgfsdYNYDjKpVdShZ5",
  "key17": "HSzD4V2uDvpMKXZqwgHL6F5Ed3tZ59SzUSa81sGpKHoNuL6pdcKPyGKhPRY9obUVHGWrjT6BS6o66vNP6eTUaUA",
  "key18": "3aRNjC41pef2Sfw3bXpknAT8E5dmiqhukrHxf5hoQYR8MmLAwVSs4GP5HiQB6XiaGy5Ck5t8angm7WtEazsagsrU",
  "key19": "4njopn3dvjVnGDBhe91dCDeeeAUT8Gh5LnK6wbRkcueJ25jdiByFifPHEJSvVtzSxRpuoso1zwCoRUVekc33Dp9X",
  "key20": "4yRXNDRMexwoLq2rkuxZpoVFPXWaMvaEBEZSs2w6wbxMtdws2P6qArg2rBJhuC6PAJqzXNLGQAzo6ZxupNMefc3h",
  "key21": "9H1HH8YZVGo8ogdxgUes7mBmQDDHPmKTHBTfcKeFXKGSf522CGghzejbaRBq4QqQc1Ei4CUAKgMLTt9KbKEvKB4",
  "key22": "4wR4KiDmuLerh8SaQjt6DVzTtbddfXxA6di5vTKQyNmNKUh2d2YwZVvJgKjaL6RjNH1S1xAnBRAdSeqS9tz85L2s",
  "key23": "3Qsj3rzxzTC4tBAHQezkBz3VeJ4Bzb2d7kzET2XWVzGrg6ewJ3PNiM1QUcprSDvZpJourfnVJWYZR21x8L9ozPJX",
  "key24": "3k8rA6iMGKNzUvUvhf4PBzpazfVDeVuHPeUmxKGzjn3b9WioJiZbiw4tyErTaUqfr5AtpqePPVnvzyB8NkxeMWBn",
  "key25": "4xvQZuFmUH59845LQPZsqe8VVkj36inF74b49C1AuQcEGDTAqv2SViL6SpZXqs1zWLAkqYTvJXhiocEkbpmy3H1L",
  "key26": "3StH2CMXkKX9LDTasMQSarESsomoL2mmkZikViyqP7oKPYgV5cwp17azozaKtFWqqYbgVhcT4a3K8cmQCf2bHGLy",
  "key27": "434Xqk6CJFMXxPfsn5BYrJDEY5DjzrfSvzPa19J3STzM7EqUoBfZPPbuNsM7z76KTPrnaTqQc7ZkRAChDZxPNUZM"
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
