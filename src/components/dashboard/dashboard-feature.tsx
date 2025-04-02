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
    "5vtmcKR9ZE2pvgukchj2BAkfZPdBYBKVkunNUFKBMUnWpfuxSeqgWKXgcN5ZPKe1JMeM9z2Z8bu3ujCs25bqJkZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpYNGjRdUy28HcPrReN2S6LRBrLyYHqrtcY69uRtHCHtSdgG8RoXPkaVxxk9EqGsjcWKYjP8tcgqfXas3TFpJmG",
  "key1": "4x9ZYXw4R2ZEc1bUmbv5fTAmWdCx6hVHA2KYctNLF13FC5ZrH7WyB2PqBkHV636X7778Xq1jsffSt7ipewstHAuQ",
  "key2": "48qbdjVdxgZN2pGBfr9MvPrt1N5ZmvaNdftNWSgR8tqvb6M3J61wEzZDex5zdCimoFXzMdp4jKsGg6zvh5q45TWb",
  "key3": "3QvjQdcV8hX973u5LnbJ4mD9MmjfVj4LyjyLaTvM1VArSUdmtfSinsaM91Po6s91gipGHjHQsRpTSBYBMu9qkJxN",
  "key4": "4ramkd2qn2nSDMuVmLWeaYFNqvYCH5tQ9PcbJkKXrGQN6gwwj4pn4343so8m874uEtQjWEo3RM2r9kxSNjZbotDx",
  "key5": "5GQ6JSdJr67hrc2gcPqZsEKkjKky3NrxNFQPLZB3NiqddgD5C4BsLAdSVsh1nDBj7fLMPqUXquDfn2KFnNyFDq9c",
  "key6": "4LK7Qptw7bPnw2ueSjeupgWAS7KBgQYVPVzdLbNCmGERjsSggSzchqcw69sKd2ocL37WQufQrnFV3jMnHXCqfHP7",
  "key7": "tctZRJNkxVw2U8F82HZpwiRpFNEtvfJCjFkUnvA7UBkMR7ArUGAWtNqBjjiSFvsqtL5GFGUuRDm2EELd7H4PWAA",
  "key8": "3sTUsF7wRS9VAbaV3ome55TF6JthLYin7qStpW2Vrfzjxsx5f914i2vtJyJexHqBEfqKqy3PEBTzUNjDLjzsyXi6",
  "key9": "2CrymMNAsBYhzSbaGx1axS54UnpBFhbpiZvh7HAGpNaT7V3imKdghJZSaA8HJYfyM6TvoEU2LCSz7kMUELdyPQH3",
  "key10": "5rhYFgrZA7JwdePPzhq7DHvf6csDpaZUZfbZ9Ron25TsQmAM6ecL2hyckeuM3mUN3qkHra6CEFjjCLjg3YbmsGwc",
  "key11": "49K42Ho2mH3cCvAiDxY4cNm9hoZhKvUX2v36ovfT2Bk431abQeopFC9Nv7kXYxAnbUX4xafkx5oPbmz7QTF4MZ44",
  "key12": "66katbAQqwUDxGoXTuAMXd9XXegQPwp5cN2tq7w7jrgK88MGGRKM65AfhEgXd44zWjYoRxmhiQ7Z9KqDbhiuMPk8",
  "key13": "5VoUstN6FcopUrZdD8daXsAncTg3Y3Euw6JwSyukGpFoZnD8Y1PMGz5CZ3SEJnCnH1kjZfnihW6oocHUrxif7QMr",
  "key14": "4KTLh8gszWsKcdM6qP2VqZxXGMWJpgp6bNdmX338PKrgYDSExvEJFDeLqeddSpVewxSVQVCjoAxETXHAKpKg7dML",
  "key15": "373NZTRr4YMyR9q2p4TSJFqju5WRDomWP3DTrrESJtJWHFBqAZkggkDatx85Jyduv8e7xXjEhEtUQDuwsAGo4go6",
  "key16": "4WcjGtjtXAxkaczxK8CA37NBfKz4PRkj5noP9QeXBAF63dzWhHohCaBNgAoD9M65Ef9CSYSa3u6GkeCW9jVBYWCb",
  "key17": "39cDoxWH6RuSxy2u3QhGKAtSsdm4PfVGukqbV61aQnFZyyFycjeKmYE7berw2V3mGt3jkPMMMn73jZxMMkna9urp",
  "key18": "2fDVeWvrco5BFCKNPb2ZvwnwCacAx22c3e7UcMAjsei7GnTHXzU67Z2VLceJNfD8F6E6CgbbmEBuQGJtvtJtEGXM",
  "key19": "2R9Spvy3LrjGJPx5ereYAWFFLqGWdHAPXMgZaxk3TRdeLpTpe3ZgLwxqKj9Hgqp2a6Ds9F1xv7c88APjXQ5YtXok",
  "key20": "oC7rYvb7BPuvWnpG5iaTk3sC2UqrXQi8qjkASB5eS3AMTWETRsaWKmSCeSWnj3cPVRpcSRWt8zzMRYFxPLdhuKw",
  "key21": "fNgrtQ1Y9shULqUqSo6JGHnxWynr8HtEKdvkBscGNMzkg4kFbfoMhcbobWfJVXQtbwXSm99SLdbRCrQFFvZLtU5",
  "key22": "2RfmmtCUEywocyfXDv36yXmYJHbgjkZMQxqvuco2YDNyfhRSz48ZHJ5kiEwcmFdtuQoyZoSacwpdwJXtjZamhdcY",
  "key23": "R6tX6GVi2PV3iLRZ1qpmnsMDNicnqK9oZabFgXPSTqC7VdSUGwRuByCmMB7SY8Z1VqjbFsgUGYvJEs2iMeoXASM",
  "key24": "5FfQPeZS4NmNSaCPmCx2b927u4VApPDuCZ4nCNirvTezLZRsWxpkoEGXQk31bQVQ9z5NKdAhxsrgpcUGtjX95Y72",
  "key25": "4L3LZUujMfuBcnWKUMrA5191V59gUPUvrvWf17FKR81LA3oSFWEx6Ve5RocNr7xmRBo3DJvjNzRQNr25cwr9Nbi2",
  "key26": "4RpMmpZ1UNLbKy1QRRpWoxNPRbDFHy6pMC4UuFtTsYBooKx3tsPxK8r8MJv21pTMxgE3qy4QxtYC7hv4DsutwAZz",
  "key27": "4RTQgGir6Xuq6RqEqE7uRLk5wg53ztc4cd4hsjb9YrYaHeVPTnjcHod6bMEYWDrv6NRsZmDTMAbpwLrUoFFBAHRQ",
  "key28": "2LxGGUgDvX2C5j34SJ6wLQngLLXrvbf8zaGxY5AbaXf4rgcTMXcoeb1STy2hj3eoAoTjPi5tAG5ZN3pKv4GMr52N",
  "key29": "TZnk9JdjbtHaJunCVEKh5XWuteq87VSRinQrZYmgSUAHgzVc9f6GdgofLaWwtuACh4VewXSME6ZXonXHiUdLbW1",
  "key30": "5hneW4fKK3F7zh3D648byM5nxGwSMYhJ4TXfXCXf4JRoivzRkBMVmNAXiyqQpkWfebyMMkPTcySQSEh2qdaQKdX8",
  "key31": "3GbiN4F19znkLs8kjagu93Lwbu57dnfKWBgSLtUedxtsoGFV9io1BHtbRD2FXo99ojcouPpXUfYBMLXhpW1iJyyP"
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
