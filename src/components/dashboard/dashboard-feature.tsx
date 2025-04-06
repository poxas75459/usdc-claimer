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
    "3G3EsASZv3cwf7z1BuTyDAar2ZvFXxTSWgdmwMtvpoTAMzPFiNoJzpDF49N3TiY9QQZ6DPxkLw1fJmfPkyoc7ayC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpvLdyFcobdNhJ72noDF3LRRNXnk2a8fQvivmQeSW4fZCThXvunEBuTjTtXAzU7mJ3aMMjkMBpHJGfe4siEKJV3",
  "key1": "7xVv2ZEXLY6R67FzgevoqRauCMBPj7EXwpeKF24e4fy3Uc76AMPjbfhPY5KFs9UGZdHVBH84M7hRNVzniSVsATh",
  "key2": "4HYANhv2rEgrtYGfJ5RgBtN9RkcLg4p7d7Tjd53mPZ79MZvmtbKmaJC3eHSyRcVH71KaHnkgyPB2G5mHVMFwhFyj",
  "key3": "2ofDEPx4jqayBQuQKeyQ9ThPLudQSpCyXy8NmDSeoAMfkNfszxAR4JYhMz3SJ9wHFos9KRSHDrGfBq8y2XAeoFjc",
  "key4": "27mu4j6ePPMXqirwbNuWG2ADhh6t4yJW5Zq2rkVJX9wYgmGbEbSvEkGkHa35vgbCq4CnfpBrN3Q6ePRR8RZXUkLa",
  "key5": "4zML5YjFFZi2sek2HWNL5r3B5dQK5PpLskW8ALnjcSJv3adJ6MRniLgokxwBncTh8Uz9RAQVQTaRRPPgq6A11w5M",
  "key6": "5dsgHjsL5Mh6rdoWH8E9Gj9edoW6k2pYbQmSnAzvkTrigGusHc6j9Wc1Jmw4ZRhd5i1YKK6GZ3U9QMSmRhgtyzHE",
  "key7": "2RMbiz6t9qRGYXwC9rfeEu4FXcyBU3jb1wbJmXxEXMtm31C3QkqeFC2KthDtMQUXbdXRz3gDm2b7MNUHjvsQmwKE",
  "key8": "2YZnjpbcZJNkoiD96nbSNu3raoDhtzSoURfAEhE6AiqCfkvUxi7TrZoJWnVHehyAeY6VPQB3YN9WFRQ9Hcx1Qp4q",
  "key9": "63cArxBmaBfnXC9GQTsQsCopsLZesKck9NNEfdTiNzCM7hrZbcvoyetgJ6zC2J9x4aGVyicFMjbcQqJbL24twHSJ",
  "key10": "FyUzyqgc38fEYdeGN5kGhbGJYXhk7TNpTVNuaapTU7ZhzQLa2FqfSKZW633bNWo8kv2fq9w6U1DCma76etvNDDw",
  "key11": "2rfxc3Bk9YFcqsezDxqZUeEtiPEko2G4GT8G3SQFdym8eppLQBvyBKRja5kq2NxYbh8KQ6mLPZWD9idexprAQHwC",
  "key12": "LtW3vpmmGdDhYHSF8XzvftqBu6TB3vhcFyyUgT2BaGbyLYX9bat9zWm81VSxYqfz4iux7XrrfoWzMg47tAtXX6f",
  "key13": "3N1rJX3Pv7kGqDT4UuuYmB214Jx7AShHpHBaunNB2Ps2mhBB5zBB6CkARppxENoQ2irnZw4vb1TzyJuztdPykoDe",
  "key14": "52fbVetrDmA8jpn1BNEQDpUPoeHEKQRREakvYJWErviw6WhUDRgKwNpY7nsooXJb8N3WgVbtGKPFra3Su1KbE5HR",
  "key15": "5obXD9bMbD75Zih5KaKfd72RBxakdDurJhPKdr3eAjom3mJDoqZfYu43pvXSkcAC2VYH8PZYdwXhBQHtkdAjC4qw",
  "key16": "55zT91qiJ57Fzyy6Pu13XNKWq5oPuRUSg5LHxzRgfoeRoYL8VHwLRpdXHfhhSoJWqEUCLbcdmaTj37zQRuNPfG7v",
  "key17": "58B5nxFWGvf8617kq5d52tTCkkjjbnQhRDe6gR8fhaaMK15N1G1JM7KjhzoAGgebSQxgvs54RT2QV2QAtksSwejb",
  "key18": "2kYQgDHr38N5Qwe27k1HWP7n7KzEkeH1RxqqrupnEhY1KCs835pqPb1DegGvHyVX9CRs9wobjFhUQnJbYwm4NSjq",
  "key19": "5xYWgCT3frKCTZRwm2awP2xj5jMUR7Zw2KPCYEPbf7cH12VdbLAhitNy5p4VAdEcMKw7GKXVzPsBeQ3ZzsDRARJ",
  "key20": "EvGKSkopQyU5nUUwLrjQuF2t2fseNGZGADqB8LNTnYpUQDcpVaWMHZW8noNLNmAPhMgw9f3gmZiJH6zXDQsd8zU",
  "key21": "57MobMmjFkNDEVy9UdEn4D2KVajaCS9vJUyK2uUmk3ojL4Zpq5ZwDnc66KtpPELnhR7wLibvBpC9jYTg6Y3XoMci",
  "key22": "LHSrNVUysDpjYUDSKEjR6rpycpfaqjK9zgQ8KEwLsxzXd4Eu8ggyRLJgY6TZouBegJFPqLCkjp4U1aMxXU2bqoj",
  "key23": "5e1d8zW4wHi8dcpk12VuJybb8shSSVaCkH9znwMR3SwwKAVdYhPyqcRi8iPesiqNXspKGZYF481QxcjqDjNDRTt3",
  "key24": "55uwE41cguMTYGUjpJeEHRtaRCE5wLhhLa5jw9b7Zps9ffDm52sb43Ud8exvRj2Z9Q84nQhwpWbLVQ2QrUiVjsbq",
  "key25": "48E8zB6TYMA1pnULutBpabBk3STDVA4VEwDUAZxCX6CzWL3AdKZNQpGetSfW4TKfmEe7LBgQWSrJjnnpEyk8dyiU",
  "key26": "5FKoSz5169ZbJc4oq7Yqk2QosaehR2qAKBFb7YwvpFSmbumeVRfBus2dsQwFKqMQgbSjm21cHgxYMr57en8LzS7V",
  "key27": "4Mo1CnnNcJLKQh8iuWSBmcRdDuBvKNmTwJG5LcfRH3Boj5ZP1EPrSCwsfFNiNpwgLRWeeAfpeM1dY9qG5ihkEFLh",
  "key28": "5KHkhRzwgVyRnyXberQ6S3t642SFMxShVtb3Q9xguE5GPsGGEMtCo84zowRtRUY5BinuUtJ2FbRZNe7SbKUMQQiF",
  "key29": "5feoHzGvU1a4Anvq8gSWG5cWXdMCeBxXkqGzmAjLBvcKuest795zoqYJdfSqYbHjPHJvrkn7qcez3XJ2FkUkDNA9",
  "key30": "3Tg1qpXhjCo6fwnujtcRn8BSegSj3p7tT5BLvbwM9hB8NQrU2CQPtxo3Gxzg6Wk8Qm6dPQCgRTPRjxxw2mgi9bM1",
  "key31": "3dizrNLtQRMbTjQxSh49pv6qeyxwPPBrX5w9QzXQLL3DsWx6F9XBwkyVr72y1k48RsVV8sh6HbPHdfHvdZr4vsuH",
  "key32": "2YJnM1RGq1PpqmtPAzT7aDzAGdsjF64Y7vxmfVyRjch2C3ZpKHUedbTWeTi3oq71ufSZhXn64VMHLmpf8NXY7ESY",
  "key33": "4b6NSw7RRmwqgMmnCeF1UPeryRiPq5paF7DQg5kDZt8NNx9JevvyndLZRbWb8s4tNPUWg78JjcHUXUfxeV1B4rPo",
  "key34": "3vBwstHz4bZudSAQNWk46sTqSUhPBSkF55vYyGjThnp6DAY9m2ibMatNdZCchWUJbk96BpE8VmLP2UXhDK8pMFoh",
  "key35": "5kpaHVYHXYFNenw1DL2TEkoYdL5NVeTWx1ZhjkKAWamyPE4VtSVBhPGEgV2Y9xS8eijwiAJMPDF9op6NnD55wMEh"
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
