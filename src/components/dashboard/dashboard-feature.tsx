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
    "5fT3WYErSEdoPzKzLi2JNJZubc16Y7Vh7aJ6PeBaEgACNQyhmaysT8xk1mfd9ibpVRaXeZj6K89EhSLAkXJYTjZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQcJtUQbumV6eXES6EWg84HWyUYagmK494nzN2f28sHuRTc4tv7Vg5PqL8VnNcXzdSjpBgc7t3mxjoCbCWowkTg",
  "key1": "4BY9iath4ocNQdG1bpctgdbLtS7dgygvRBG6dHatVfmuRGbQGcM6gQHLTPNazMGXegUAL1FQSoCRijsVwD242y2m",
  "key2": "5GoUYimnPpLrLrgLuWXD5oZPv9FBXxx99po4HAcBKfEDvPuHBJHYQgoJiB6q7wsKDv8gbkq6vU6gVFpjMC8vjr9d",
  "key3": "38W7CqZ7BabVhT8BsVB2vH62mF7A4LFw5S29NXZZtocQQ5YMaxwHQ5cyLjSdXU8akruquiJY785XGn7F9SKzNpab",
  "key4": "DKwQDoL7Uq2rWWXixbmSCQSrdW5KhiVb8r4LRPS5bGtqddcVt9huQYDgWAxL4Jvo16rss5eHYqCq1ud52xS4gdD",
  "key5": "5yzzAtNEGqy4QvRRM8NU3x2UKT5tSr9xCbC2FQiFR3XWtNkDC2tvRxQTwedjz5kMrGj3jFVzKSech9kVN4qavsK6",
  "key6": "4792t22FEXx1TmEL2vVZzYjqy7j3CkTZtbX8D7i1HnV5sFr9YvVPX3PubeX6kVuEdMyifznXVxhPBxxddi3AFuj2",
  "key7": "3e2tTkgq3d1V8mxaeriqARcnd4qMVzmnczJF1xAxVi2kEDGd6N8fWEYQVTEBZ4SjrEniTseMVaSzFmAPM4QByjHN",
  "key8": "5e3xj4RJLgPri6CqKyrnaAEyu5FNnPqGC38nYvMsW9GWW17iiMnYYAyLPf1y5DxySicozxmZ3iVd7QUDkkJLAABT",
  "key9": "5aT7vDuXeAmnXSzbNhz5CLW6H9FsLeDjoFw42CXoymwuChEHNqDiecGa6UyMNP6zcjgNu5WRULDpZbXR5UySBFq4",
  "key10": "zj18AeDLZe4CreBBMWyXDkQ9kL7bDKD7CLYAJW1vNEgUS4U3dQSqiRbURArB4hQmAkpA93cYABEUddNW4DS9YDe",
  "key11": "Tb9VMTiWge2TQuYpkhsbqW6K94JTUAKaesDwJLK8T1iydnWiqgaLVPAfs51sM645iFWPL8AGVixMAcxQrGdcZqN",
  "key12": "b2kZ4o64uT4KA9mdnq5qLktqgAxdzrpPboYafTwkmVUJXav7jTxEdCLQANNSTuuaPhWjDEsU4V6D8k6ar1DsKST",
  "key13": "zX1rLtiCrtZ3o44JzkUGRLyvnQ8SqY5yXofsTRdfpjPT8reyiH2YbCded75QeCqAgfJV1D6yo7xi8BpEeMnEznu",
  "key14": "3c3hart1bhyp4GkjqSxcKmj1dJStJj1emwCUzBv4BYYqKma9XacQk1c9fSc1Qf29hrrTWC5JRLojsMY5CbPpVDtM",
  "key15": "2h2ZSnxFXrPcF6oZcm7mT9VTTtPhRHCryYgZEAsBw67QdygJQfBtXiT8GjZ7arZHf3oLdjSgc1ea9SRxUYS5uALQ",
  "key16": "VR3LS2BmSMmd7r3xPKWNwaKomuavQAfDN2ovaxjS11FeXP4E67h3U2cCJz4fauq7CKYAJpZtxRjfHwF1Z2hNMHQ",
  "key17": "5fF4xQxE4N8bwuFExFMdcfcaGMXnbQJAgufqkUf5iLKdGpWvQAX8Ycsh52qw3VzfsBtasm25xFDNNkis4D34m9z7",
  "key18": "3kkwnbS7ZsCV5DrX4oFPd8VminHZbWUBY1HMqGU158SbH7uTbHjh8dRRu8UypxgHMf9tEXZqZuRaL1NGMAdTx21R",
  "key19": "4wAoVo27KUUTfkYqmrvWLYSq5jgVTChvV6NfXwJEszdbcKPXZ6XUSCGVFK1MHDSbJNfZu5M8UxeoVz5NwAx6eAuV",
  "key20": "23gFJAWKzL4HP5fqbLSzrTRnvscwqcR1d8VXMp2D8ZzZPe78ZKHF87BzJjdz7ooWmPNproxtWrKNg4guxGi31pGn",
  "key21": "3dDLmfqx2CE8Ys4i6XEVKkf9xPHsA6MHsH7k3Qp7wFbnGJEy1Lb9T6Cry6V8PgWG4fqQ7HfsExhCnSY1J2RaHNQy",
  "key22": "5ik3pDRhp1JdfE5nHiNVBDwvjwzoAGdpnVAXDxuxQQ9zA4yZjWbe3MHBz5PNfgzJpcJ6mTq9gy8RNEx5sF3bcUxB",
  "key23": "43KnNcpzjRKnFiAV5k6s8ad8nBxcd78Rq2Ke4pa2xmHJf97wLvMuzLcKc856Y3LsRzKh5FPCXoFbfUEY4GPQzDVR",
  "key24": "8WBDdZ38JzmG33Ag9nQ9Qx1VoX3Ub1i8c4aV8EYVXGqRKUVbnRtDHnWsftup2qrrjuYJo8FToZuWwAS7Bcp2RvX",
  "key25": "5JxG2Pbd9SWjtUG4TXp7d9pPjgAHW6XJqSYaQRrzsAPVSfRxvECqVPGUYpN4Ehy5oAz45sncpvvbycmK9oQ6uQbN",
  "key26": "4qQqjqJJh6X71UDwX2th5mVnReBiJoLSbHKPGakSyDVHNer9SYiRNn6qY2nG5mJonmhyZ9hEKQ5Bfdq5WhjWL8AG",
  "key27": "64wPyxWcPfiUi6q5pw5ZC22NkruVWM9Yy9eTYC6h8q6ED3s6pLdjZUxN8WtBJYLaDTEhnAjsfHmpDivkHxiyYx94",
  "key28": "Ryiajci9zPu72Y8VPosyrP9wRfLaYov7Yb77FRMA2YWy8GkV8rZvJFr6Sk3NT6P3mTjcwCPw9CEND9HUuGVyQJp",
  "key29": "3K4pwg5uCwE8BgEedNXXJmo4pmPhjHzExb1zYy7QQK7WEXbKt3X4s3aN3A6dAdufzcLzswETHP3jocrB4u7aJJgw",
  "key30": "2NxLxWBroCujxuFJtC9yzvLqCA5jphXXMcMv6p1eCySKncvaGjaDQWDe6S2ANwirTsJAXuEeSmLZoaxWw7mWr2da",
  "key31": "5pfwaGUmbQYCzhkYRVf6uLJ9jC8MwKcoCpwRbXdbJtSsQMTpWmwgrA8sKSimAngDxPpPcZfmoD26nyJsT6bFKZzp",
  "key32": "4Skac2tibMVxy12RDowTKMSqGmYrDXUkyNywSns5s19MRd6j1FsAVhFj7hiEqk5pFmJH5SbK4QhEWDQJREfajSbg",
  "key33": "4akpjjJLFEoUfkcGwjX7mKMzHLNRdZMPDWXiEPDPMFz8vsuJztQej5uAsYa14kobwtFcz2BqnHjAULYEGBWu1Fvv",
  "key34": "4Ssm6x847QRjyLS8hgCcf9gvGq8VHYLxTp6hJMHQCd7EJ5tyYRzqU7PeuQ6KmJyQinFusiDfjsSDUgLqkjVTmnhi",
  "key35": "2pGx3NxoM2YKUxW1jpvn3FUobeNTZ72Ta7WVrn4uTv29Z6YNjR9exL9V7LsXZJoKoskF9iba3zwrdUViHQRQqVtd",
  "key36": "3NEhGyggKbtmWVKkoWxg5gcN3HeX26eN4UNfZuEi48HGjVBQu4F8DELMX3hUCcaXYRPbsSYfavLfrVqEnUtkj7SW",
  "key37": "3CuHieUXfUT7DCF4FEpxQeRD7bmpAk3t4s8SYSRp19vxEUQF7XJqzmEcSmtHrbYdLRaofjZD318XdBpkKi4qnbJ5",
  "key38": "4ob2PmffG7QDFZVu5ZSUjZKpLDBfYruDNw8ojEgGgx1TcFBYwEGmvbRVYqnEQMnLxbj2caP92fNgmcZEwKZamFLQ"
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
