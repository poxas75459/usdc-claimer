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
    "wjXtgLjiqNQpdxkJqnpyi2BKtKYhCKN3JXxZBFfmfSX4Qn3kdgcSTF5CqK9qZ79c28pHrNm5T38kZiobG3uV286"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWcrqb5dNtaPRuxZNvAr58nGZgZNUSYZYaLQubSoVhkTo986yQ6ZAgBxn3F1KWUD3mgVys8A58PdJHVcn4fiHTW",
  "key1": "BKM2n9gNAZbtj4qPkpieMAw8cprUEp66ycgmbSEHxy7hMNcjPCHuAXTpA38BJdyLunHR1L7F1KBCAseJyVgJo76",
  "key2": "3vAaSpT528jfHUWYfzreMutDcwfJjYUxgdSTrbRjgEcsbJ4H5T9tDQHjxokFZVgvGDmuvx5sQYnPqFXjhHpSor94",
  "key3": "2B5eMQKwTJjq51f3MQBMtcWfDSLnhcn2rcfVXtwuWLw1ES9bcZgzXWKARo5XSyBfuTTTWGipHxRfJUL6TUH3EjMw",
  "key4": "Au6jCLoDhen1oBxcJoWJGx7wtSs41tWQan83QqQbTWBGUXLY4GUvhV8MBf3XpRqepzjL2cdy1f4C7kidrvxGqrv",
  "key5": "3azpaBeWKwiWCwPKKoFB6D7gfGaXQADaxYStvdn6qyTmUAvnnJvZ4iPXaTUBWnB3PvxtwBb5AmweCfTRRgA57W6U",
  "key6": "5GyV86NyCzKtNQbzFVdNLYgjfyPGoJaUFxU4bb5NGUV3qxiuDmPDr3PaCZqBr2FraP6yJVKei8zmkzUMddP9aw5M",
  "key7": "4r31iDV87M5WNXe8uiM9kNt35i5pBXYYR4ArtApciv6Hjywp3Jx94CGcRLrsKNaJhABNXW214cyXFd7ngPs71yoB",
  "key8": "THbH2tGVAYfwXt4FMXRqTBAAoZQNbohrTcQiytrJMTKDkL1trEUuT5VHPjRbz5Kff9WPsmhD4jbTBURYPrVtxaM",
  "key9": "E7Upv1J3xvKfQEppdoFU9gGCBAUDgEn7EECSRd8SEsSvFiydzP9MGiAwAKRxBhEGJtbaTLVpJtkFAKGUf22AtUR",
  "key10": "Cp39tWLgaqCDJesJKcKAH1GB8N39qu4mQtGEDXxkt73kas9YQmdS1zNL7quTZae1g2MAcwBGR1Jd3Z2wbXJyE9N",
  "key11": "4DGQXZpafneBp55PCA8pcGvBoADTcsPhew6SQJc3jKGPe6pQ9xuEJkud9hbRCmfUXDU5b8Us9UG6evPUsTMZD1q",
  "key12": "5Bserhg6vpJCHVC1MvfoXtuTEsrLT5NeX6k8MV8cBmEhU5gDBMJ3WYZnwW4N7wHrQvmb4DmHqWLToddirXhrtVZW",
  "key13": "39Zbtv1UMrtNjYDqbqQUv4dyu6SSE6xbqMt6WPwMg6niN8xZyHf2Mn4wEHv3GvSP7Py16eH7KNVSib2TLisbTEUB",
  "key14": "2MMarSLnH1UwpcqwdGyUBftnNCGvMWsoWzRvDuMu7a4Dd76B7X4s4yhFyChmAu85gC1ZfAJHMSyAWH7vuAzP7d2j",
  "key15": "3F5dBnAvXWbaBgrfuQsDftuCVdGNLXyzxyG13UJmZgr6fiSaeSCKBzMfJqsHhdK8xhC4JNkWLSiJPHkQv2jJXNgu",
  "key16": "2G1X9iVMRGs71BFmH84r4AwnX6kuU8H1UboJ38bQyvyth48eKCv1btomcxfhPG4dqrgWcyLRDw29N9LG7CWBRF3v",
  "key17": "2HGfDbQYMpAetVaQqvMVa2TbPcADZ5KAG8hZfUd6WwNUWw1xDEY1uzPyaVEfKbFgfF9hwYXaTa3kcXhZRg9WTiEQ",
  "key18": "4DY5sq45mpngQU56jkKThyF2akpGf9DG7bpjsveMfSAfSQAGGybpBgw2qGpYGQh5yREsyfzrrMRR7P7rXdMSDK5g",
  "key19": "5Svsz26wQswEGdJQv91heAWMGzryvKp2Cg2c3H45DibSNyzKtU44DtrgpX8gnCMhnx6H9NU73Fi9NMehTzGaRraM",
  "key20": "2FdGSntBm1ztaQ4qvvfdjKNSDcdJSzYgcWi86ePsyS4fHq8GKQktD6DZCP2M8btP8cMksrR5Bj7N7XPGKNEnSkxy",
  "key21": "3UqZQ1yTVuQSiLBNu1uMYzsAs5SC3ZcnZ7z41zJCDfN1zu3FT5rDCX7eUuHG6RMfyYLWL5HHDfVMqPi5zoJRfwgb",
  "key22": "2HJm52d2m499aJiUmz3nKFXTGSEzhk3WLkMG5ZTChgYGZGXiXKaCJ3gZ2QHRFg2Q7Uxrh2HBH1oBJLzUCnNiwgRh",
  "key23": "2d6x29Ee2YXvViL3kvNGwfAVxATW9h9K5nh462fS5YZ4GsW6LsYExznH3eK7DkRZYscM4biyzQR2gR6sUeuFuKCN",
  "key24": "4zr3mUYUq78yLD5R6wLwj7D9GSo7ce1ztwNKBSrmya4rPKfycQWVpGNmCTwzxtSRvMgZ2tFyecZ8pqw6VpexoX3y",
  "key25": "3ygyrcBFr6odQ4fT9fMFQksv135qzthMM7TvgzBWbXeqxBSvLbJjVe7HB7dkCPenn19FHGbG4pueZFfo5AxRXUrB",
  "key26": "3dbu66tpeD2iw9dUh9kABcrSZ76FNQ14U1H3gwEBSJhEBqXvUq2oevsEkNHfuG9d6dtLuTetLFv3Djbn6xy3p5Ys",
  "key27": "3qjrdchMxVgQcv3RaXMoaByZ58BsXhft5FwDg4L7hdHUGH9S4XUgoos44mP42kUQdihStbFLmn717jdZ2KhvAAXN",
  "key28": "rKvhZfgxCoDRqe1HvVpLvPJGo8uvXknx9JuiB4eahTP1BnVRWTpWEkYo2gKCrzA61B8iKG8LGpMEnHDohooXfTH",
  "key29": "aR2ZuyBQCNkkfDtzUZtvqJPnf2pUqRp5syJPWtFh1zTRVT8BVCxE7WyBbxJB3oUaqX238sdyrBcXfnrFx5FA6hC",
  "key30": "aLwYqxNUwxjuRE4XySrgyak32WhViaq7nFiM24xg4U2JgHNviazin8pgfWYqUZXkJeuC2UVGQug9BbwyiB2959g",
  "key31": "41t7iZFWbktDMxu9w5vosMArwAUzJXnaJBkQph3A1kH7LWKTZqRupbeR6cs6SfRTTAUzHmZTZJpzpW9KF1D5rzCk",
  "key32": "4T9kBRVJYRE2cCyJ8KPwhL3ozEJ3CAx86pXYqmYJyDSvi3vHUynoZPE5hjZywGPZH5prBSrmBw6XPgVpkG89pWfA",
  "key33": "5BEwpSx9dz5AEe6ruBa7GPPLPiUZm2qvUKkwZ5UppuKogTRQTL7KtAq8hcMN4oAR1ZxqV9GAMgP5VCEBwUj6rco9",
  "key34": "4WAdvQ4DyWRmr2UGcbw9RexRwRWVGKhm1gqpK765wck4RRJ1Bvc15BnKHpwb6VbVDA2zLYHywT7AvjwCQRvbHZqP",
  "key35": "QuUMEaxexr9SfRb5rQR8eSX8mfmR8y9PQfDa92Cmzh4jH1tk5Ne5BnDhPjCpQ5exPiiMyR4ArEVjjtHMttzaN2U",
  "key36": "4kcNNUH5g9dBRetVEbzim4GMD4FV2z7eE9pC458rkkTAc2DhZQxgSS4FoDQbHQWmahb3UWzWsZ8rGxyJuiM2kTna",
  "key37": "5fRKuNU2uYDbRbq3nfUTHbohxMYZFthKm7wZVxFVW5E2rnVPbe4X1ka7ia1VC4KRpPkoeBP4gUd2sogmfN9Fsurq"
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
