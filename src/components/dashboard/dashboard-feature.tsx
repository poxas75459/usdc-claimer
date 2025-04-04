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
    "rDqJEKNfHE49cnSYF51YTr8fTDxkEmT6Ho9WhmLiEgN7pKAiUg88PiV27DwB2RqZCBvkhWQ2CaXw9rWbni4pMEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5tKE1f7qBNmBwpC2qeXQEa8HSAmpuf2zE3ZnJ2DvhVAtTQA3uy5TAsxZmHX58ob67AsK3D5m3M5EMuvZoNKsye",
  "key1": "41dtrZQfddXqXBkYvp2FxAamMDNsQhR9LnAtVJSQWyvhnrgjtA9GtQzBwTtJ9y1F78U1txZy46wXzd5zUxTycQQ5",
  "key2": "2bX2YMZMmfae2z8h8gjzkptV61UjuQVcQPW1FW8qT78h88knsrrE2S72irnAFu1CK1gMWMJtwYyvTTDUUnwunRDT",
  "key3": "21snLnnbs13EDmrbGrU6eD2bw4SPVs31EjFAPWcqakBzeJiZqJLKakpJdCZsLNvvAhUHjzg4z9hhTq8qwetQZdR7",
  "key4": "4SeypCujpa5MHKAvd5KH4D9bMHQTmKiq4r82SGdbNf5tANgCWayHgbKWiLgVy78GKeeUtZ1PsdgEtQ3sjB4X95Zh",
  "key5": "5vZzc9Th1txBwCGtujsu6RLKWXhkiTZfdW5ty5MnXa5TmqgJWVgC9FVEv4QoLHsRd4AWTaLGLh2H1Do8EufEHSPy",
  "key6": "VYZ8GxFJZA4PvG3uFuUX6NFcSFYe8zGHZxXh1hmmh85SJDUn3u3AiXrzwRCQUu8SqvcGaKtM82VgwngMNg4fhM3",
  "key7": "4dnN4PTDPKp8qZw9vRnhsS7Nf6z4QsEKgknL8PCeutvb63DbRDaFZCvfkbFyr5QdBFdyK2B4EuFySbytZPxC37Cy",
  "key8": "48uGemzLWvumTx7QvNsDJzuHjBwVgRf7FaYpbCJysgQvJVqM2q9AX77FH3xufdWCHA5ZY2YCGELcHymRy53fN7c1",
  "key9": "38Gr13ywxWwnt7csWcUyCypiacR5jDuAjcKW1D8gK3zH5MBezAyd1bZigpKwPNCGSeb77jBixbGjG4tstwEyKoSK",
  "key10": "ZFyNcctHHJMnRnrqdjrpamdDt2UtSLhL8sWZ82kdbMWv59EgphMec8aDAB3ZGaTrQsw6Y7pD57QYEeJpM5sScp5",
  "key11": "2jvFZRafq4ab6R33bhfymhwkreTAVFtqiJpMZNFoMzzU8WP5CVTchm5BRaV1qoVeHbvHqrFRCqFrp9zvgQWnQtjW",
  "key12": "25uDuogpriqjALfPdPUShRcQSjaqCdgqopKXJTfoebs4fYe5Hc6fusJQFuqRun7whCVrMXUezG2G6PuvBkKdmj69",
  "key13": "JtseWRNdkCW2fSpehBnfYa1janc8E1qsTsHihwGM39ir8eHJp9p8bCYBKZvWjX8dmSEf3eKedJTr8asTdj36o83",
  "key14": "3MEygHv822nVBoh3s93TuDDPVbbtaVoQwiK5zoKann8RMwbPMcowjYhtTr1hxZ3LZ8xTZZ4fQKmk8TGiZEUwPbWT",
  "key15": "39q58NZapwBYWnyrDvxAVLWzd6NMdS1axgoc1yC1eg3r2v79K82ZEEnffY2L1SbR4os1fXsa43pEcab5wqu8qcw6",
  "key16": "2Xs95vejsGPsxPs9NY4PfUNRJfMsSVspwjFoyLBry23hve47oyWMx1TWUYMYTMvvNaUmeoAqGgVHnbS7s3efu6PS",
  "key17": "62LEyip2YLPrfoge3rA5huZQGU9JW9jJLKcVbx5YFpdhDesrnZaXGJbUqtEHusRu7ZcyuqkaVKBXwj4jRu3ascv4",
  "key18": "4wXnzQNCDRvEa4FzjFDstRZPuczcSVgExBLDroAeiD2gYiNePAZucGwEUzJbshqmAknFv1y4AKXBHh5ovkwqRUnS",
  "key19": "31P9bZyVxTcTvaGgbDr3Ys1hYErNhTzEW4vxNExLChbyfAQNTxKUY2jsvpNRLqe7XPxBCe9Mahb7nvFENdyuMxvm",
  "key20": "2K2sKZPhQTZr5GSNfBwcwGAwNe64GPBFBKaKy2XsVXEGgXiWH96nr3Hnz532ftsCk2nxxYnecbRiX9DMwGkTcazi",
  "key21": "QK5e2i29CgboxioFoXiZrHx52TMNTUYAAG69ok4X22NHq9maWLeqiCRJeu5XRtQXnkpZuL7r21pRmYtFeiyEZTn",
  "key22": "4V91RSxZkLVrEM4coyrRLonogdvuDDQhNu5zeFNQoSqMqq1ZnRWAKSkui7zEb4PKrBv5BYUq2jjZ8DkfnXDGf5c5",
  "key23": "3aYDfZCLD6JeKMKEbGVjbuJzYY4FNnFyLdk22fH7PyoLucjqKFdckUCCYNFsvYJhBd4xguLMiuii7Khy1w7pJ7gK",
  "key24": "3SvXD44JBJ38Qqoy6TK2eMy94vTHXB48KQkx2VhcQXojf2c6x36zvoctq1oj1iBofzYNs4D94P7no18UY6eWAWMX",
  "key25": "232RNq5RBEjiumSTXNUSW63BEtJXUV8oYMPWk68vqesw8jX3XhToaCwzWZ3MzhMPVGktsWy5zJ4MvUMkYNvJYXER",
  "key26": "5J1ucxX7ifiqoLMriPsKeARcVoteeHgruVYZqXJRLvcniEUTJnXj523fDR7RaNueXV7zyY5jg42jjzo8UjFiqtxR",
  "key27": "fbExkeG6MgtxUgbpwz7F9qUmV5g1eygTsVFRAgf6oUW14NBFA5x7CEMZ1jYFg3TkNk8MeZSCsXU1UQ7pS9XCrzY",
  "key28": "5KKhRDbUvEc8V24uSBjE9bxYYwwxehzJCGVvJ4EUKrNRuQrUWCNGAunW3x3i5zDe9V5QMNVHK3t7TcsVjKGyRzwH",
  "key29": "4ggR1hLex6X9rJRxBV4DfandzQFZJcfUvyKX4RFp24jBshtPqyFfKDVtNRiCrqxbLC4aTT8K8hQdzSkDijZmFcgv",
  "key30": "4owoupt9nt2HMD2GdDUbToQWSLHYJUQp21VF7RCyEpVc1UZBV7ZKxN6GM7JBzCYhDrUKqLv4bvzMd9JmSu1mK9Dk",
  "key31": "5YAUccVQEkuJnNedAA2AEJYV9NsTMFbphS6dLDuKDfqD1XK8gaEokG1k6PH3tbV3gpXjZExbpnXqPhJte9yWUJZX",
  "key32": "coV2yu4scA8rGdwSZBthYaMqYYYpwLjoGjR53ZZiMjuA1heQu3vGRhYXhxwi3veo1YvSuyjwJsoaYN7dc1LxRZE",
  "key33": "37cMRKPASKZtZ5Fp2SJFr3KhkbzLPjVRjTpfTPDRaU7fS77Y6gCydR1oGWYm7r84LygeQ2U3rRLtgq19AJU1MT4h",
  "key34": "uhDwTAG6bBSGgDTWEBeySB2B9nRHBhxGkqjmBw7tJ1BdaPTGQP8XkHvMYbh4fV616VpHyCoKxnQ3pH9TTwzqG83",
  "key35": "4DXKyzKf3HkSkvN1Rjy3d1BncjFGNnAkPN9sJDiju1G6v9YhJQqmVKZkkuQY3RmgAGvKtSKfkTnaruRtpPcFph4w",
  "key36": "2XPP46RfVcsbbiTfmvEN6XUr87n9iAFDeV6U7fC3PtBwntaYQM6NdRTWPGgwymLBZmCuQuyjdi5qeNaRbzunyyeu",
  "key37": "3pXn3vzrhYNsBLLDnBTtiwyyWYke5LCUNMT1VdfMUYHEZp8Ubto92XZdcXxAEpCCT94ARiV8vt5v9dKmuZxZ6ZjM",
  "key38": "5a3kC1MR5qFDuLRZhsjkRzEhsawmeXZUyaVVEpfTXgAvsGQCwiPXXkbDo3oCeEMXsktU5r1dsXEHDoW7SFCNG5P4",
  "key39": "4bW7maoo6DoCkW1zjWe2ZnGDf5tMUNbvkVgEGCFiA1XgJKVTbYNsPCWcdJyh6cmYoHWuxBT8kxLchCuLPhZF7LAg",
  "key40": "2p3u58dXkQnecDjYVzZ8zA8JBBYEATx1Ui7R4DRYdMvv5CUPZdN9CXpNamiyVJKgbNk1LrwQcTQNoFF3Fhg5sXbc",
  "key41": "RSFxof7VbuyrnvhcSenFZnksFTYVqCf5aRua3RA3CAnG14xyBiXKfvQxQ3dKCW8gHBR1tbnbDm5TNgaQt3aZLHb",
  "key42": "4etyCArQWuToja7tnuruGTmCASLFzBJrVSbWZCePKrcgsPtJxz1GpK6K1z7vEa9m1ru8foqzpyz7LgiXGkh3yBnJ",
  "key43": "4aZAjYjxPnhdX83tCkpCu1HsfxtW23XdYNJ22sxsEZvwTqgawuea4j7oBwaJJ4ikwjfi4MQmtxXQLjSGKms4WiXc",
  "key44": "2239VscD1JWvQrCC41t3RTFqmSCDNAy67VE6YBjAXsGZafSpSeWrtK9p3rRgm6fwH6MAm6c1uKy49M3Qyx4kNqpd",
  "key45": "4YB1HkduoJvgf5LiZ41bUyumxYc9FVhZKaBaWM5tyoKafQqDKGNV1zD62nj6HSqBA7SaMh7VNSwtc5zYYxe4B48Y",
  "key46": "4YqpSuZKsGjC8KV2Qooa4HL7zf5iJRkSJ6ciBEDNb13KjqLZKTjps3hu6HL7pHqE28EtZZCATjGEr3zHCUVCvyUm",
  "key47": "4zdXoijRxrDj3GJyNKdUSLxA9godfnXrBcDm55jXtaLbjcSm5K8dWTroRsJryjCfpFeVuWmk1AXk12cg6JGBEBwd",
  "key48": "5qjR14yoaxuM3bqgE4JMF1noEKwbUvK2VYiqUXqvuf953H5gU37pisHF8n5dqxp5avrMYgUHGLCYZVBvoMPqN3r3",
  "key49": "3kzDfHb8MBiGHjD3HmAUJ3YTfdW6BmtUuU39gLTe949XiQsCJNg9zBiNd9GFkK8PHmXs7SyrsjdC5D8Ev6RGaJy4"
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
