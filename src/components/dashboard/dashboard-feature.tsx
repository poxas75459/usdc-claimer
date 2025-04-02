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
    "5NJqionfxPD2GfKDtS6RTcwAebSTn3Uy68tbMyf32RHL4C1iLpCq2rhj8G2seLEB8W3GiBCcNjG41swWK6FdkuaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213grUtZvXSupVXbDYYGEcoUAPVwL4io47DquZtzt4MBf8iTnNufNV19mKnK3r5qJPUjnBNnkayJeW9faCeebKKU",
  "key1": "2JncaDhZJBtV9CP52QbDr1gnVq66Uuwvm2DRXsZfQaZxfHRMRVGP9pyRoJZXy21TZsKB8fDHAjVzW86cUsJtWC6h",
  "key2": "4iocMFF3NR4gejTGimRDApDybKSsuygR6U1zBAMjb5Pf3Yz1SeoK8F8qBDKnbQpEfrB5GLsnE7h6nskk4Bz1LGRC",
  "key3": "NY4TphqCxPxwBUZaPXVQiN9Fy1Y77nhAMhmL3GawtPgv2oyNt1LiqmjbzCUXqXPYPs3nGqh9xTYRttT7CfvsmgP",
  "key4": "3HiEdGd8ieWPdVSSy86SK27fnGCqhKF3zZTnn4ycYNrAkY3gDPPMYZ3gvJd4NMn9fNLBs5kroD2P3apS1H5MXygq",
  "key5": "2QpqqJZ2Hc35jfq66o5GCAMZtPodCyoN9StcsS9rywtT8xt9XN4ayTBtW93sMuJGweP3iSWtrXEbSEdNnLS6zhDU",
  "key6": "2y7GGHiCZ2Q7szjKZX9ixf3hxsu8HVVwBmvjfQF3EjRcDWUzBjCp66vMFXHL5Pz2MeoSJaPSPWp6mXcsqTe13rjC",
  "key7": "5Z2b3769KookginMtwXcaBunSoUJ4mDfaE92TL3jKMQw6dNzXZ3yAZTJL2N5XKwrLv2cfhhxs3rKYTDgeqU8Huk3",
  "key8": "4L5sh7ijVcD63oSDrVbTRVYFNvcRxXnQLDHMQ8zuSdSqHxme4wn3VL8t5ZWD4uaBAXW6WhBtbvLBg6kWwnbydKWn",
  "key9": "44Cwb5J5YPv5Ed1FikRaiDSo73fRRbq3ptDs9xH2CHUT2aMSnSmzv41BAmZ39fUsun5cxZY564v8Nk8SWc8WhNNz",
  "key10": "NCCwjVUjv8DG1tgXLdKihY7hKZUH7gvWfaNSBmkVpvEFzciSDNs5evBxDNYGQ11L6MfryfZcHvULRoVcK4nWovq",
  "key11": "3bFAtDHqCxF93stf6e3ffB44ym49aJhpYNjAEU3394pnF5BuJLEtgpK8VuH5C4pNp5PsFXQqUdFiyFyPuFbRw1s6",
  "key12": "3kcS5xHvZACPKCFszo3v7EkvsyGFRBk3ycSq3FQhe5ajQjWktrXppGMfRhivnZ8UYD6Cc29gexCd2j79xBy2gRNu",
  "key13": "weXHfEQxV6TV7vArKf8bTjUvJqdPTLMzY3nQcbWnvP9s9YdHtJU6GX6PHM9gS9wG95CszpAJJZbhYtuRUBxJPbF",
  "key14": "57PVjpP8a5BZorPyvC3QAsMJBjAaBWzLarxyuj5vWrhYa4AgMGP3MN95XKd3jMuiKpNjxgzdJpaWgzq9X9VymMbk",
  "key15": "Y7xVGLo1Ui2ddDTVUc4DsvP5AMgmSiLeJrrDGjkvaybxAocNjzSYsHdz3onGyv7GsUELEQb6WinoWC54qko6uC2",
  "key16": "63zHvGZgJnk1q43e8gDuAHN1Padu1DRWA3aHA5T4HrjmN4LWnjZto54vHJ5uQNPoW42KTdNUUpJMEhUsEX9irqB8",
  "key17": "3DJ68SjCFsddcYkgpNM89uqUVcZNkSzdHas2K7DY4fEbXoX2sEXvMsnNSxNFuxPUnsD1y7HdSPFbVTk9RqFeiUB6",
  "key18": "662AYs1A3tv35PacQF1rea6gDP176EqTc6S37P8WSLLNNfPt38c3UrHUnsxzU8imAWL6E3A7GENyYHHxeecJURwk",
  "key19": "38uJunRuwaiMvpbNwFmtKPxnxNDAu5LhBMk9mhWH9skq6RRxdzdTZZpwH6JPZntaBZY7mqNoUFDENcZrBC79WESB",
  "key20": "5fkiYJKK55S8Kgoij1Mw8cqgW6GGFsbbdtnAux6NnMugL6pKgLyu6gWrPoyvL9jRyWfE9jXF5n7ahJqwHaEERDF",
  "key21": "3bpu1uhUFSW9QHV4NxPZMGmmVMvirQUL8BQk5ACWScKfvYrqYoZoBC4JqmjvV1XJs3e6MpAcQJhWT3UqXvidfHHX",
  "key22": "5CmWrk9zn9p1j5Y2U2TLhEEme6uDVTYCtBFocGRzTNhR8xiP9RUiZazvckykcsU3biT8JUVmmePaF3hFssGyieJ7",
  "key23": "3Ei9gZqBzBTwWHjPRYkQPAQcgLiHPUFQttEpa7cm39rchPAwKKFFRU22pK5MzXZrdN5LdDTA8aBGr2HznCpg9kLa",
  "key24": "677UowgfxevCpAwwnSxbkHkLA5yzzBQoXLdAXS6Qk1wPLtrHP1rsGTwvZBxsyHztMBymyjUNKLZtjuKpdTbgyhzd",
  "key25": "2e7su4yYMVAm4z1GZewWdz6XPNn9i7q2YcwwpH34FJ3wEexMpWv28VPJtjSsCwQnMUiGbYXS3dJsNJmx8dXfT8h",
  "key26": "3VUgJVUMDeNmnK7EaDFeJPD8fLSNLS8dk7TFn7voG9TfrP6XH8vqPvrFWZLorzkCR2HeH2GKpib9D3d22tuiXike",
  "key27": "5oTssBnrRosF3bTmBYHmR76GxQWeWev3R2K3rJV25em6L5ZMufyMLHp3mDjfn6ppVjHM1kZUn3qK9FE46LEAqdzo",
  "key28": "4R7Chi1ecwZXLyf6E7jdifNz444AxfbcxtFPJRuwsAyweekD7fHBDQEo9DtScBhVWnoLePnj3vA24PiQYeAhvUNg",
  "key29": "3AnvobhGV7udLaPfEz87Menk2prqkkhMMyVSdfCAoQL8s5sZuFZFmHJgegfEEShm1gPNGdcCKPcRajeL3B2Km3S6",
  "key30": "4irkrLMGSeg8J3GscwkdvUDHoPP4Utc478k6N9dVKMvoKwLtP5DfViR35vGyrzyGJjJNVqW4yt8A597x4Wa7u6a3",
  "key31": "5Q6qfMhdnuuDRtEVzTnbdfundw7wJvU3zG2uxA4XbMVXZ9L1sEUuzzWHZxLc7ZutcL3J2GVs2ikXCaDs6ZTA6vHs",
  "key32": "DTxf46vJoKaVuF332caMXrBsWmBusQAQDiUtih9P7MqQGokSDCKtjRcKrtk1ySS1kzb1aaarDH59YnsTqooB8gp",
  "key33": "5zzByxbpHWfgGvADexN5MufFLUe7zvcj7GP9hBnwhGHPs8qqZBR6KXvda9isBcJEB59GJFmLTrf53xTkNkNhHduz",
  "key34": "4M8rXpQqh9NYif7dbGgUW3x9SSCqRNpuiUzJHhUb7KBz8FcsKtDdVVmqpfFWpZXN54pABMBfj6ytma8BVWUPM5Qm",
  "key35": "4hQAFNVdB2oahhwPsdk7UZmrqQeWwqkB9HhFPMnELmYc5GRAemp92xzndQMjJ7hmjwiHy2zaska45CmJLg7FawzT",
  "key36": "42qKQ5LciyLxCdf6Hs7jshmmomeLtArhee7yNTevpmbY8mpAT2yHPoa4S1SrqxjfcdN96bvx4qAMiE1aNrsMNx7p",
  "key37": "57iSGnNE2XuQ4sDv6pviQiHc3vXGm7uA4761zkHtds9ZXWq39VReT8EgKaTMmEvB4TJXLxK5edG5KpKvyLfY91uG",
  "key38": "3ij8FdYdk1DqmHnUeMKqEpvKfQMC296NWJtPAac5w5fcaBjxNidZPY2SNBz5RtPprLpZZNW7x2pqTtdmnyiVk8sE",
  "key39": "5G9C4MybWCjgdh88vet884YkA8E8WVC7WweTNCDBC8y6PKM62u5NvJEB9JNv6Gft2CBLAJ1LCGgCJkWTTSgN3Z2P",
  "key40": "5gxtUJkpP8thnBDnXa5U7yRDoCQhwLTBjKjKEcYyoQSBqvnZ1ZpW6UxTVgPiAN7QojotCmquWkSA45uboMvLd8Ru"
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
