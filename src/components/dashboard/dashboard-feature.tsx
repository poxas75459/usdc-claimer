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
    "4a5t4i7mVybn6WJ3N62arp3xCB3UgqemHhBJdiUvPYkUPqJN2vDGTnMvRWSskN3iSuuF6AdhohJir5xCRMePTfHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g424uK4wgC8FWasnKFXhvHwAsum6Ysu5Y4byuP1ZtXysvxpNq2pyzM2JNLQoQQdeXAQajCWjzgVakkYiQKyz5x5",
  "key1": "5VCF8wtMKgsZvVeQiaA1K8HJyyS7tjqFDZAFfiJdm4EFC1F1ym2mANiu2cgVQADXiM5STcdciWsSor4wSw75pEKF",
  "key2": "4Pb61ikuSzLAMq6Mpy7676GRRxpjsVHHZVnys1MQ4U6c6Eq8X1zmoFDU82FL1xaz1b3wo8iUDo4T14rZ6Gx7u2k",
  "key3": "4xFGJgmzsYV87cYHDk6pR9fNn9pXnUJY1Xzuvq2JHoQzSniMyDQMG8xAoEQfQJHop1hD8RQg4SNC9YC4GbQ34SJr",
  "key4": "2asPBgrjd1gZPKmvZAxbSAjNwzRAxd2MvSDY8GcrARxmY8bh5dc7FkBwhVUgAt7bsaMiUmuVi9CM2vZzAVvUyn9",
  "key5": "3zWm2CvAx5Y8HxgkVgVRj3hk3rCc1YtZsF6rVoiDSe4Q6igZbA7hqyZUPKKTHR2pAYTqRNJL9hLN6Kj3bFeXsei7",
  "key6": "3zRX9iCLSrTJhkGFaBDXiF9CThW4D2hbvkqvg51LE6K5davjfqzEV8uP64qytL1Gr3sD3oMkUJxXMQeMd4YinYA",
  "key7": "4H95v5Hr3qCS4bqsQXnpojBYsa76b4CcsT6vno61nbJ5djNJLDP6ALURyXZHiLzACpndqkauKMDUXz65qzhsqJZq",
  "key8": "3zjnp1VSKJuroLNQY8yQtLJeNDs8otJKYCCXjTBPPURrThc4XCDbgcZN2sjiF6tRFmvv5UUq87DawTop8eZ88SQn",
  "key9": "3NHRQ2t8ZrTDbBJzW85KvF7nmNGyoWygntsvNG4GsHuRPMCL9hHk5PN2SvvS1bkH4eoi48QL1NpqVSeUmU9paMeP",
  "key10": "5Tx3SS3KgxjaGj1ats1KzLMkie9mWcRGHYpA7eJnpTEsDUxaaRRhp3f1Mr5TBYzQAqnTcDusQQuMZVJtHGgopw7U",
  "key11": "stFDmDGqM7JwYyPN6KTo1Zs8MTekZkeYQ8DB1GeJpgsrvskaS7HTT7TefjsUKsCaSTRHBv7eehv2YhzMdcs3MQq",
  "key12": "4ekCVJp6zrXLrLFzjA63YgUtUnQY4mcZetviDcMY68QoQv1g1YvYpKPh858vKiWchjWt59QXjgoLsnuU9rPJXCsJ",
  "key13": "5tL4BpLVEDpWh845U6HWpu6cX57rEdZ7RM7nDaNpNrvoZs1MLBJH3LTXBncU8d5ZF2x56P8Spn8iHDGQ1WQXLeSn",
  "key14": "V3CKGBGMHGUTJX1U7JkuahsBgCFRyKpzJH6EsELJqk5uFD349MEo6iawTx6E9PctR62TVbR7r5MUGEeTajUVZ3n",
  "key15": "2Hc1HUnBecmb6s5frgpo1t5TFXma6Wsp9dFUL7iETEPBjKaWjbidaFNEegSbVAkF1HpoFGhGcNWBE75ZrbN3KhGP",
  "key16": "NtxxWvW37nxSAhkqRi4Tme7fq9kNWkPFBfvGw7Pt3xUqhDsLmQDN5QeunAVzfNBq53iuSZa7pvkq5W19a573ejF",
  "key17": "2XPa1Q1aRQkyRnMTUNZGhViV4EUERZvN8nNs4UHoBWEh5hm2pGzPU3xqA3t8J5JGF4khewDxHCXAisdqPmLeHH4J",
  "key18": "23DJn4yEqfCDAVaTxZeY8D1mLxwpQqq39e25mQHZnCfqo55JXRvWgbxvRdkrXB76WFBmerpVLiDPjsyMJTT1YnWp",
  "key19": "2DRWCS7qcjJuxUEAFLCYGbaUs2RQcM81L2tGTqwx1J1UzGAREU1HkwFcuM4SFWtgDH99BrBnwLZzZCFj1urnuTd",
  "key20": "43SEt7xPeNfaPFPh9rBUEeTMoSVFZtNzPyG8UGNJmEsVJc79S9Pyo7VpryXXjuGDKGqSzEfatp5EFkF6TxeWf4xS",
  "key21": "5UuVb9JoMyXLYqNQid9d9UyrkAqWiR85pxHjqqEb6feFg7E23oscEprwhEedzUhLafr3iZdogNmcZnJheZgyVrGU",
  "key22": "4hGS5TcYHMigj5fqHWP9ZKdRwrPt1v1tojy1dDLG3GVwCx5RXWcAcD8iZa3Gym3KiLeXBy2ATf5eUwqQ3K5JDuK4",
  "key23": "3nArUFYcnTArJnjfbaFy5Cck9rsKykpkLHSBoBkHAPmmwGAgijux8JSW3W8TSTKPpitYEELYcVfD86HDDMJeKdb5",
  "key24": "pdnWraNoTXMjfVx2U7xyjmkMSz6q63PcbakJ1vBZnfJX2DVSaX76r1xqZ8XBCZyBA4mFCGELW8McTfLrZL6n7Qm",
  "key25": "62tSCDPh9mun6z18rLJjxR6caegWi2aMp2xVuVzdLz2SmdviAKLRSFCj1qke6KAuCnFC21CUnvaSirc3nrgshyj2",
  "key26": "46ysuKDaqQSz4s7Q5mzPp3TFgHuxmvzewpKFZ93yqyDiJNijDNLz1ZBcvbaoVEnv8dz5qgphPUaTHh46hgWUHr7A",
  "key27": "24Gs6Z8nD7whVP9sy5SdRS5V5GsUXrFZU2heSueebag9FoZK9G6BtbW1KbDHrvtwSF6RtHhCYeQHBr2yAAuSPsYj",
  "key28": "HD9NYaHJ3XPBvArCVDTpJfuBu1Himgkq728YWMW8kqFBk33rs4Nw6Zk1BfJK9cSWG5d3Z1BDRCdk6jEAsQxMcwT",
  "key29": "4nhCWHsrenPyF2GqFypDu5ogVAiPMjR56pf1zCbpvzJ88MHwyHYmMHwGbsiotr1nKE1mC9VHrjH3iGtYMDuQcgM7",
  "key30": "4Gxe2D9pzez2y9axP4ZdXkEHPuWyFCjwfQcaCzo2NLHbRr1STnnypZuBizEdKTL4hLSvscLDrKdEG9NmWMyqACM6",
  "key31": "3gv8EtJeJrgxkhs74Xh4i1GimXWmjDLbLT7ifLnzQFuEioN3xVMs8ZA1WcHNz4XSdhJp28u82Dk2UgzMMZ9dQ1PB",
  "key32": "3wLasjwoKzTXn42KZd7LHXnHK6vLeMtrRJyjuPsxcZxZbEVuiXUFUzJbfcXdAR84DhmwCBZeYDEMMHf159T46jbf",
  "key33": "3GTdVdsPG8kCokCqB1vrxBd8iWcpLcXLKNxxbRmhJW1cBCXuzgpTGC5FcfoLTBrJEcQhCR3DNByTcARuQCqYFbFG",
  "key34": "5R5f6Py6qWgVVnb8BSFM219oVE8zDum4mZWbyZYZqPvvdrpwXisuJEeVqpd4pF1mT46aX3vtXmqozQL2fWwc9pdd",
  "key35": "5SAXC7bxKPd6LDMhzwfkZnQV5ASZPoDPyyKFkdm82ZswA989hwjXNKA4aBK9WEdKTJHfJvCaYAQUTCns6LVrystK",
  "key36": "5cLbqP2RnPkem6Y9LQjW5T4dDaMisTX73T5A147DEdUb7K1WrKD8WZ4cWq88U6JWC3paDSTac5Kt6eL569wBwaiD",
  "key37": "4RynBXUferH3h4jMpeHWdMKmrTbJjfr1Xrba5NXHgYxu8JW5mZ6RBDRFfUnJHRgUTcPNHjR6zTFJdfb3jgLf9Goc",
  "key38": "3wNrTpqghWM8GMyfruCJizncK5wszC6i6Xv8XGbV7iLwXnryEHwDU4n1ft2oAJXcokh3R4uTRfE5dffgFuWgYfKY",
  "key39": "5EcuegCdGQjp1cdGRjyHv9rG2tGnqpbpSxWg8e6j232jcsmDRXq9QKNaz4rhRCgVRqov4RM5FrMyiJHo1fy8vd7Z",
  "key40": "wGfLdAae8a3qrnGTgXksmAxB7B58MwDDG1v1zq58px5a5kJm81KLtXC7iVj2riBn5dkYi3RWmSMSYDZA9gdjvaq",
  "key41": "GawwkPNTK6TU2eqfCxCsBTmwZGw3vvC8NEJmvsFT96SkWSamb1KzezRH3ReVUTK8fmNyrGosjfuHtJJwnozrDyF",
  "key42": "4bLG1q9zsHNw4Wfywv51zNg9e44cXtpUcbUPJSGArs1jpMVNdHNyDLEW59ywrY8XQ1SWAWyAHcMP1c6GmhZSQmna",
  "key43": "37TEepqNstzSUwqTYgDXRsvYjsQDXANVPJFB9dmi8bvCp4Ubkj6T5TJB8JAMFPDx8cFYbEzsTuPgqVYzkRVotJHE",
  "key44": "3RchZkhL8rN74GACrMonNeFoD6fad2Jbf21jRhmvoLUwwqrCVqsYEdVozCgNcF762H2b4abLV1ZmH1qTKDfCWAEM",
  "key45": "3eW9EsFyBeruQjhvzqWqqcbp6yytLWN8qLJ77h1Ew2pMV8UmFhLE4XXXToSNgYiHAVXRpzQVjf26CaESUPKvxouK",
  "key46": "3gCxtn8oYj7y6XSwyFEwAJopNhq1aBVheJsLXs64cmsg1ZWDb3TvbfXbqoy1ryH1KMCKBc4EUoSWwqzD6g2X1Dhe"
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
