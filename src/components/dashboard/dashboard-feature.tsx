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
    "3VqdzyHk2KkVH7aNgSyPzkPXh3jhHpfedXBQjRd7f9uiV1ZLHLby2VfPAns46az34LNr7H5XoL2H3WmAKkddBgVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNcyoUrRd7NY4WxERJCM77hVaqLxGgqfnGv7iCf3HUopg7jGuMCYnAHkHnKj8gs356icu5m6L9T2CqxaG7cXoo4",
  "key1": "3WBpfD2T6z8RhSS4PWYAwCx6qcyvccER3YxynqLBNPbfwWF6ojo3R2awidjug8heWZfQM1QvUKwssriitA6Nmnp6",
  "key2": "45RNHvACJEsnyG1fgTYHtDZoGUMeUccZTSHVohuPTATyzHBALKLUM126hCKieh2CxRjkzkYwdxttsLr7TuqAJr4S",
  "key3": "2bfNe8zA4jKry8ZbQZPC5VyNqrYeGNcQXEtKmfiHs3nwAyRdK1vGpgLTGZaXQLERkPinokAtCbQzwqXbZSNvJu2E",
  "key4": "62yA43YKKcJkWYmskbeVdAZGjJsYpzJyJ1bPkZtmRoRP2bbqcK73wpgXbrrMfSkY9Rave1sUUYcwEs8LtecXKo6V",
  "key5": "2L4YFaWdM7Qv3fc9gEeboWcx8s4tAEDTdA9iV6LE4SWmyhDXvcJUMTZALvLR3GQLVLzLuh9vnLSTDhAgTdgBcqHp",
  "key6": "41WDJF5Vb8XXy6TTE1m4NYm5eKygmeAwKEWGtgSGgdgJRmTDLUkSU5ZkkJwTM9LXzeaCEurrkvZeJ7iLrxn1jR5v",
  "key7": "34zxiSzxpYZowCBbD8wfWiZzbfHAXTtmBHo2phxMdWm2YAXHNRpaBAMpcBGXTsDky8ejcxczpP1qAKhS9LhT4bfS",
  "key8": "458CE4YKa1ArrCnZHmeP62xHsV1rs3kbT3qp9GQ1QDKfFdxCCadaBB1msoHDGGzATz1MAqvFB38Q6uaM368s2P99",
  "key9": "5uenACqPL3EZsN41o9Xuh9ors1vc7XrPi8DPAW7CyUmnRyioBjNps3bJiSjs7zYqcHyjsCoJGLRrQh6xPzJZUTUV",
  "key10": "4rPVW25dP5bJXdv7Zv8iVtBTzZGBBGjWUron8eqrPbv1Jxf3iyzUSszWgAzKHs2exSdkgJxzb2ZnuPvgcaQB2Rei",
  "key11": "59XRautJgAQUiGJguZBxFSEMHnnLqn9JVBuoxWPEZo6KT5yvtGDZ2AQonhfL8eYfWYB55jJQiHLeYayJwMdhaMoE",
  "key12": "SzjKrkqo7vv6G891v1LoY7P98Umq7A8wCKUfzerrVT78AMZSkoJg9W6fbeVNLWHPeXRA65wPVa5nXhMTczqDzhe",
  "key13": "4v8uXSPa8dmJJjYkrjNnZYLwmxUPsHh5gv1Nkz7RJgtGsxg3dFacoKnC1YDKnj5v7LkqNTPtiNSrbKeJSbuByaoy",
  "key14": "2VTFyJUQotvB2RS4PSfdVdCFMb2H5Cf5QtRVEkvjxWPqMAuEx98kSgQU7Ki4YxmnP7ATzj7r5BMLaMtxSL3szKvP",
  "key15": "3VZpLbKRcHBiVEVtnA22Y7K5zeZ2TJynWj48UzGe5yoUQK9J6jhxS5dQyqBydkM2j7qFt3vdgheD6BqfCqbiehkA",
  "key16": "24AEwgHAiDoC21unakSbpBn1DRNNW1SDkAn8KHk9hvM4aXzjaLueyXWRPmANPTr5Z2ruGQhkRnSu4Z2ND6nghoDq",
  "key17": "4sUvf12kE7HPH1Z41piwPA9Y6tUz4KatMDXYTK9efmwXdr4eMyE4JTAdfqMTMAtE32gr8pRjTsor4YNTSFpGu26",
  "key18": "5Pbv6gVvcMzrmkNdTpKrYMMEZjTCw8XkQiDfDbYe398QfknK6g1CEoj9Y2L2DMtsQ8GEfyvWsHD3esK2wiofpceS",
  "key19": "4fUmu5YZD9ETLy32RVhAiPgbY9LnQxLHH6J9uUcmDviCDvichBu26VktA3Q9bAdPpNN2c2yWhKWh45BuT6CS49dD",
  "key20": "5DQURBhZYT3RM3Pg2wFHQLiitNCKnbGc7BqGGMGfaBWJDz7Hhm1A44yLFQrBQV4VJubjAxBJtXtLUAi6fjJC412B",
  "key21": "3Kf5Grke916UJ475K5BfLb52wgBjrSbmtcoVVmRkkWsqRexVcQeo6LLv5h51dAvmtXQcNEcakWGG6Jh5NquAixCS",
  "key22": "2K9qjMUUMVMuhrcnX8s6kqtThKkp1g8Ym5y3tJZDPJuqBTdbactZhsXhyV9ViJkKfKE6NZXpd5KEmWa7wKrzWJxj",
  "key23": "52iK73cBsZm1Mrq8XqeVXVRpYWY3FVoShfJ1nd2dmHSis5aFe7VxeFjuXtA8xuVB8ChTn1S29pS55ht1Gzoo6M7o",
  "key24": "4Ghxq2f3j94LqLLA3Q5VNF8aenqsLHoJLHyVQAkdchw55bnxETgPYQN8WsYbB2CXUeWeizKWYvLiaKjXAUHwinGS",
  "key25": "65iuL3j5joP5uLZFpbRjzjGXyScwuREDoGmZwX7q29UBjNAAa2cr321DYRg7TTCt6arWzcSKCibzwjGBeMZXFF1c",
  "key26": "2ErZpADtXc3Hj77yxQGSKEYVirC5Lq2LHPYhb8mStRrSujFF6TKdNAsa4jCGVh13xfvose8mjTocCTc5facXZYfj",
  "key27": "28QbhLxhFnvji2dZSqZit7H5w7rSau8jV2D1n3Y8ziaZmHdmVVFkjbWzb6YtiJM6XNCWGNvrTKL8iu1P7eJPNoUx",
  "key28": "9yRWhXWA3xfK6WTHtaB1ynuM5spEQJ6PX6UBu6XG3WNVs6vwSZVutsqPs2VW3i4dYv4mGZdbNzqx1ZDvchaKNNh",
  "key29": "3oj19JaxKBQDp7XZn5G4ZYLX7cuNQTRgqCzihE2jgYbuU6wYiSrQdNYoHcLZUEe9vAKLpaDkk2qemPqsdku8MiDu"
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
