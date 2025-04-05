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
    "49vV5Zp5aNee5mGj6QVDS3voFr56kmPkopJpXcspn4DXc4sUd1kCTzhpCpVQyH9q2hAeVHgPMdZkdb1CZBsC4V3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMGiBY9dRh25KoB5W8uaJzxa4AW4pP57H3mtZgSJmtTAH4QdVdLyTa86Zq5PfH8vg5bBS9WPpQcwj9VdaHeHZxD",
  "key1": "5FphwAUpNRaidrtXEtJJ1fm1QHjvWd2w5FExLUgyn1qyxJYcUePJwqcHXjcqd6iLXwg8SVw72rLdcGGSZkjyESb4",
  "key2": "44zoDTbZAtfmmbWgXKovREuJPuuBRq9pB9YLkA3B7MNGxkv2hEhg5c8AmvCSVXDF9GBAJcSB5Lq8BJZEScDeNPq3",
  "key3": "5EizVbcBij2AWoc794LUcm7NgbDyYesQSMxNr1aPVLCMeRyQHj3wQNApsAgfrLauDyyDysyzh2ypGpAukp59muy3",
  "key4": "28hPr5hiY8DifSLnT4RKR1BKbNjDHyncJBE9R96jp1Tk5HaAiQdSNYeQdWxABnYCZmLmCJbvTMBbNC2h793HxjoS",
  "key5": "2ysa4uDaa6x59vwqNMwJ33Q68mi2VMCjYJrRer6dH9sGdF3CeiqN45uMZMhM6JzjZVGkKjp5JAbMcXiRjsQWDLby",
  "key6": "4P9eymiU3JTK8pNKKbs68HCLjuZ5pTqVRQyDdEYyDQFgVsirpbQFLgyWDkkUpZNHvvXsFmWYYLYT6fbE7rVDs9jv",
  "key7": "tX1B23BkhMojW74GZ7GLtXPFTebx312kSTaQfhGaTFVR8aHZBnDa8i5Cs1EVNGJA6vbCtGDNPSWskiZbeSFzEPz",
  "key8": "3kB7JEXgwzvULDaMHa9yVvhZaCW5n3P9DmRQFaWMAnmaVDPZj6bhjGQyiWC85X8n7UTZfQi2Y9MZ7mVbqCgXw8uz",
  "key9": "5n9aWHgNRpKpvtHRrFFAUYaUD1yHavxq4MnmrjZwjgvWf7cbhM5humGVhxjhgrJWJmPgugCBsqsAE8gfzxxrjiD1",
  "key10": "5uBohqoGDPesAffywhd59yt7BZE2Teg7sLwvEKMfLFiFY9jqa1qsGDwDiMjoq5rEXUxogabPekRj1H3EgGUeGhuK",
  "key11": "rxmtyaBtrgcE4RK3diQr7R6nsDNcV2aQWP12HdZS8bZp26YbZsHXzhRxdkspzNUaLDHcFZ2uUxwj1ZxQ5KFPQnz",
  "key12": "3cKkCQoZbKfi211zDUdmxVuBJZTUShwQVq3x63KGg117jkvUtMTVZxbnURpEDYAd2mM5HpbUX2CqqadVavPtQwsL",
  "key13": "2TJnc1i1ERUUE35ojgjAUjV9i5gqaddY7Rwz9UjzxEwvPtBo6R5uLLtcEd99cizdocZUM2uz2KoMMssvfNkGAfeY",
  "key14": "3m1YW9jPQpcq3crcr4DnvzN5pREFpmhd3ELqwnyGABGGA1zLofmoU6JcwJviuuAqTdr7dcCo5KN7sDYdbUyY73K2",
  "key15": "25EUkXBQDQ2BxbhWW1aP1ryDXtQRqRkxTmAxCvT3H9YEoyzZmHh3ZCizgPuTwXcqjyfZifskLV3LgZj1qke1UTvD",
  "key16": "5Zhmah4EPjufvC4HfFiqWppwH3nCP236hLuiyWiUqKdzYoJZo9Mz35LkZs8ev2o2KVA7o4VP9hsqkiAFE79SNPpJ",
  "key17": "2SiWg1LMZcXhW9pHWbBtqzEkdByaHDDZEKwHX4vK42rh8h237Zn1nzHNQCLSXqcvWLbUFT8YKzFRyzbgDxk29woW",
  "key18": "2UZrKMcp8sD2oLcfzCvEqVsZU6RjbBjkVUT3VzzDpJpQqMV25FLjiJuLsc7iYhr2991rypvf5eq863fAYgdFPvfd",
  "key19": "4U6DHwr8B6jvca9Cz5P5YyGZVxfewwMQoJ7vx2d63jXyApCJ5emq1r94rCLqdQhbo6a3LTbYEMc6b4itMUVEqQCj",
  "key20": "4jgykSq16K27L1taC8xgnj8j9XUmE6JJnjq1kx3R2GnLHxRFpkgPiC56Rc4PTsrhJmqLedbG5Swz16RkxJKybfGr",
  "key21": "459Q5WyzB54VBEeZsXGRKu98jxTzQpQvezCXz1iQytJukgYDWAVdbgGtDbPRzUyQXR7nGcCLHTKELUQYdehRE4H2",
  "key22": "42ENuPDwEs6aWwWv4Q9rt9VGYyus1GEuSjxoKmrKh5ayPLD3y3i339HhFL5YXNqPhTKv6NBs8MUF23smH5q1A6SN",
  "key23": "4G8SFMnzG2a5iZAEBdDBLBVBa6z72nwbbsAwf5ahXm6NDDpMkq8rrx7ki5CqcbXgxt1mUtsgyAjZHCFaf163shoq",
  "key24": "5p5J4camfdkf1jRtsAYQzqm2wK2SMbH4MGXTbQTvhWE4XKetQxUT258qSK3csmg9x33rZZyUeTadEUy8qZvD2g9x",
  "key25": "5U2gjbttzHedtxh9gfa4VdspMHP5w1AhqjUqh8QXgCvtfusrxg1YqX2egVbGwdXDmtmPbrCtoib5HRyZXsgd83xJ",
  "key26": "DMW5QjiXyr4hp8hrgKG5GvjgAySGgBc35vawYsGWByL1rHgp61n8SwKMEN4XRYVSuz8LgqQENP92DNqSLwzjZnK",
  "key27": "2BUPREvHAVSDY7W3E951LTh62C8igt7CUaaDfcZ9FNtrTUd7qpHQkFx6QgS5ZX4nyoY39V45s4QuycGstwDmUqBT",
  "key28": "3ZkJTCwkY4htnTkpyrjEpafYrTfzxZXGNvaD7cVM1Kos8CCviJ7pRUDtqorn2xobJwqCPnJHsn6GXRpBwZMkzAvF",
  "key29": "5CwanrHCC8YUrGEuyfRaFhm9rSHvVnm3fJXwD2tuWboR3ABbLGNGL5iZtEAHDQEhK3DBXATxbDnb4UaQeREfkAtc",
  "key30": "5vQz7xFqHK4ty8t46XgL1Hfau3E2eGkFarzQgQz6Mg1QGJrHs4tx1AjpoXEF3UhDYHgjAz3MG2ZiLBVGzxj97zhV",
  "key31": "65q4iUrgPfY9C9SX5wEs8XSxzf8wpZbsm3TM8jm3rz9gGrMRc9cYsLJaUAYawQAPdT1rCFjTFZb3akzu2bhGt5nb"
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
