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
    "4hyecQH3fpBss8f9eBzdrTCwHSTJ1vycUpPEpMNr7GLhX3UfaNYvzeyKFxRPSNBXEsNwgy7Ly1uTjJif6iysP5sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smEtQKitN9neALJC69Zxp9oRowvYNKSRCC4BFb3HYC6sPHKF1vdRFbCn2rSpdqBL5DNWcUgQawzQ4DsNSVMiBgd",
  "key1": "38G21B8tyM4nrQpCy9NGtX7GpmFJSSSJmjvfCQFYgXuhFWSrCZoKvyqadrzvqrbXuvo6zac2aKb3f2aRdYE7TKN1",
  "key2": "6WmgPLqYUZZitm6ZQZJpgmTKNZ97cP5mkxzEcNCs48pKeVWsZysY53wFRhKp7LX7ZNFvsMbAAj26beKAN2cXwVT",
  "key3": "42TNZ6HRF5oT9qKMuXFHtobKretfMURTUE1zzfrXpsFgS6jApGsBXfH4pus9ZpBsbu7cwRoB9FMoqEP4XZ92A8ii",
  "key4": "NvwNfT56zQNVZdr8rBcT2VRvMDUove6GGyZQFeeLohxJF6rzBWrd44iZNj2vSSpKVuhBJba3GDraq2oULQ8Qc9N",
  "key5": "5HfG4EWS5gacXv4EKWs8yLSj57VNBR5mxPwazmh1pk8Co5MXDZZ6kt6Njp5ib4Y9DzFEVxyRb49krcJmVQe5mgNk",
  "key6": "3Z4xLzpozMAdcxmrQvGpTdGrYqZ652ytoGuB5NFvh9SHaQAZxaojLKZZwqTbtfWN6Y7K37fgEHjRGDQm5F68QCr4",
  "key7": "5u9JhktdDv37ZsdrUME9YGZPSva1Vgqc1P3XYi9NEzdBjMoo64QtVUrwuQFHEUZmc7u4iqQDvwQNdpgUKsLt6sy5",
  "key8": "5Zq2huWNWYcjC5enUzPTDG29igzY47wZ3qdjoSGyHS8ey5zNbJUgM2JEBigZ3vvVqrFqd2Hh3KTtpG3nm6R6FZTR",
  "key9": "4SDQcpfPjoW6iMjsu7tJtSkEdyzCZimUEtahRajNgimkRFhdUUFcfKT5HTARa1zjdE7SJnJXzLVVa3A4i3ozNzcH",
  "key10": "4QTDM4y5NeKuPDoiBmYfoSbTaeTXrdwwfzajeeuRvbcA58FnoG9a59GNLAGiVbvwMfrY7z8RxuiiLDE5rgmmQiXk",
  "key11": "4HusuToZPUxGUZ1yu6sQLKXe62on6SWsVp6hR6dmpLB1TmyAvhUNvMA6YUTFP3e2yececpvWhXd7bZDz9VnJ6Mnd",
  "key12": "2HnFi4gXdpMZvmAr4EVEX1XL62kivvijf3Rn4ZwnqY1GhpJjQfXN7981fS8UPAGnTVon81e1nBYpeSSFhvVjpPiv",
  "key13": "qpHQQ9NRMiDoyTtbsJmgpDKK6CNniuuXrBnwqyHwwiDAwmNx7jFPBYxsi6uPA4wy5phgRyCt61KJVKJitRHjuo5",
  "key14": "5KrjvqYiBgFhqfWMbr3iuopQxBAs9SoPJwd59QwkK8MWmKLLbPnuKDZJCrTmCbWnJdcUPaGFbR2SwmVnSaowsJuP",
  "key15": "4Kj54uadKkc6pmBQnBGpyTLrCdgLfb2933TKZhLW2fQ2tyKBtwqD7wFVA4PCBD68HDWAkWcn2sH92f6Cha5smzC5",
  "key16": "53FsdhDPSaFbaJn4bgusLhNCNRbEoSTrUtgAPW5zgSsM1tAqAhRscEninobKTKQPAApzbkE28UCNnnBoB9XAt25y",
  "key17": "2dFuFVtgnKRqrrqN83v8cwjVSuTHVQpc73RCP1ucB6k1Nd9bRAsx9NynhJmnKnD7CUHSZXsP7PdBPEnCBnMTLjuy",
  "key18": "2veir2Q2bpfmqgYEKfAaveYRpCUXCivWt6VYwLEyz7nRpFvbt1FExVoDGpy7wyCzTA98gygAo4aZkmrSBXNUzDkK",
  "key19": "5HHE9YNMkqxvfsruXebD1Gmmqig1T8eDEYgDxzJt1kY7JuU9Egbf3AyRp3mQqahjPtWQ2W5GwWPUfop5pwoL4Fpr",
  "key20": "5694KeK7azLy166ESq6RbSuA4w6XtakuLziNVmim1xoNyZ2iwMeaGVRKaGwE1J5T141xMQizjdKiR3NEs1e1nbif",
  "key21": "vHFoMxv58FH8gS4EqKMiLJ82jVQc6Rx7qSxqXxSeLdTzakSjjcqHnid2QkNha9iMuF6wDWQ7Laogmr7ThXSCV5R",
  "key22": "9ouNy6VZ9B9gejdudFXzD9hb4Sq6WD5MHPvB5MgVAgwkN7wq6HjMHcKXmCeF8i45d9DwwewxEh4VzDFTh77ZLqF",
  "key23": "665JUxrsXf2sL5CZPWL17rKp57or9xT2rVKNTtUcyPeMdjYiL8TCvJ4GRyHJMt4YACuHKF1kyUo5Ag6Yz1vfubYE",
  "key24": "NCCAwCJC6uH944yxVK5F4HcHvGLFXR3tTe31HybvvYhsf4Re4nww5dnYBBDeNTV2d3qpeMkoxCNJfF19wAzNwCY",
  "key25": "4ZMdAhz2HuWgjJtjbTYHAt7z3reSV5noMWPf5rYpHgTsxG2nzhoWMUETKNL2JW7eXvv9SsD3CMW75xQ31hsbjhzF",
  "key26": "3ZKvmYEF1PKTYeNjai6YQBDDggZ4U9WjfjoDW82CLaKCyJfWYyFa43gVYmuckbKNZjCRfwjJLxm1PR36p8FE2gFc",
  "key27": "3ifkkg1EcGTcEo6amtghEZzEFT6KNJNvB4sRmJLjZxtfjnVC9RBoyyyUuRD3CyongN6wATBDJ1NBjvMSrR6Yyxka",
  "key28": "49JcHTdagZ5pRqnYh78W7KoW9uPTz6SRHD2UVetLo74oUA6zqve7d2xoPjM5ybVHGeBqVpTCthZhvgmyRKC6qPx7",
  "key29": "2Qtd3S1Uw96SzwEJSd1TagqE3PKV629ipTo1thsemmcJmJ9QQKw72Kuvit8jGMVkCt6KTVdpihzWBYdJDNd3WgMa",
  "key30": "2CwhnVUhg1HgP1UhVtCYbWzi65kWmYRVUngeeNk6ETvRLYmTL7v5mp51JF4pSCW5cqC6YjJQvXKrLhapcqmuqyhr",
  "key31": "5VMaXNh4VhjKg29QmiX4BQkguYfW9qbWjtSkJB87mrY8RAdtHYLYW9FbJY2xTmnnPK3RRVnz1fpzZ8wR6LDAvgjY",
  "key32": "4rcC9cgFsSBctkmjKkX2iEXakGFE4pNvPkVuax9G42ajiJ7teAvAAQ3AqMqLn2TcMJmMmFBkoG3p3viuhWWcQQ57",
  "key33": "yq5jGYroY5qB19Hth9yywoKatXxrMzxqinX2oBBRu3VKShgNDi53hkBgNgyBiqFCpimSsx6G6CxMZWtkkcJSGov",
  "key34": "2VwUNjc229EhyxqWxUPyYX3BMjvoCY37KWudK8aZeoG1P4D2kX4a9wketA7NXy5RcnNCFhV7kwdeDd9vMDuchiR4",
  "key35": "3Gxf8RrPDcfqw6tCrqa6Df5m4Mf9CYcpXv9pgqm5tgyJsFF1CqQfDEmwy3393ZRFSPsJNnpxA521j4KYQFcPKvxC",
  "key36": "kvJnKNCNnQYtQHvRYmVbfZQHTnnupsTe1DfoY7HbVVvfVUg5T6wvTkmtrSMqSwjKsyCAucTKjA27UbRuGpc588R"
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
