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
    "u69hGafXVhB8W62WNdVSBxbw9yEfRndWshn3sNui3Auayyqrc72FSEeKmVzst8bJdKTGKwTuRydWy6LgnNZzLFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMTbWNGS1fwv35MrcYX2jUHArJHx8GV29ESYtT59phmEKZttwEUbqvcprXYoUxksKAXLUJNVDnEbM6RbGQv7XvR",
  "key1": "56RBZYPCSQ8KyZtP88wMRu9vXmt9Zs6hygSekTZiM5TNjbGVMKN1WNWYbbahWjgebHCetvh822NdRtSF5pmty1y9",
  "key2": "3Ns3REgc8xKAcukBAFBnPfqA6nkxFg5aPTjekrD55o3qLMp4WbtQ4fFMn2fTrco9ZihAJCdKt1DD8k9JVe9hhUzA",
  "key3": "5Yg8xcvHEKBpAtZjfjDXXH4oYzuFofvKzV7uUvinsD8ZGqKrL3A7Vj6ioRDPLuzXLNDvYv6i7SNh3DyDnNXYAFzH",
  "key4": "3Aq46TSwVALFVTt2npra85SiUgwbrx2eTVi8EPxL5jMA2vMNkjQoupNtBjj6yGnysAsHzmQeJcr4PpikQwhqpihU",
  "key5": "5xcpbTXWyV4J3zevJUzHU1L6SJtDrgFNMbYbtaAohh5JBphhXqiu44BBuRugoNn96qN1oEhf7xmaxR4ZLTeW6PFK",
  "key6": "3ZVZ5sHxyq881ZWVHuXVakrbiUf6nRZJ4uGyXhm9ukyHCjN9RdcFbWngXukiMcmc45Ehuhb7FUScdc1h4jVmdTVC",
  "key7": "3LXsfjgxfZY69dn3JUgw23ihgd4QeYGBxDxmvquv8yXSwDfJAGu5N5VAzg9M3j8nPnfdraahQyeF8194k5RSsQB6",
  "key8": "3BFiXWwDaTJ6RZXHyQiqUbnJwczcTB7NwvNmLpYkVZZPACpuMeNEmcPCmn8W7mHYBfFzB9baj2uPBVozUwWRToN9",
  "key9": "goKg1XS2biqcHctP7YzUMuwoFzkK5Cx8RTafQPcDRbkbn9WeERb9QK1TjPt8cmrBziiX5dvXsu7vmqZXky25Nsm",
  "key10": "2aK9uniqHxjqhkBcg7XtYozP6QdCQtz4ouy1FfuR3bDa8hqFpGHXK27Ayw7QvQdpKHYYoD1eC5SQrXtbvXJovB7t",
  "key11": "3HQTLx19Xer6e1fNVBC6qAA9VM2Z73r7wQ5x6gB3cgpUf7UCmT1Z4symfTZ4ukbBtFnsjykCTjCJvkj1bUk85D1C",
  "key12": "58XxC4Gc6gX8drEztf4WB1WoraVRvambsu7mbSwr8GHMf69AVpdFxbkJzA4soJ6XSubEKzzer2N7yaNzcC9mdoNB",
  "key13": "3y3FkhDhf6H3tKhp7V1KR3JG77vuYE6aZXym5N7nMqwiyeV43T7KFG8uTPaTBzGP3TYjxGwrciBL3thpLXNG2c5v",
  "key14": "5Mbbxir4eGjGVfb7uC57zpRAEYnPxFuNZypia1NuvfhsWBWC7eEj17aUe2bGqMsEQLipr78sDVvNEW48uhS35DUo",
  "key15": "rSLvBH5hCzJDmUfjCDN7NrAKBQ2o8QCbVd4r7niB5dmSUjnsWpasF28RrdEhbeYgWBx8omqGPCVEiiL2DtbHt3c",
  "key16": "3JARqXmetYbkWqT6sDAEPyLxcR8iw8qS2xc4LJCCxSesrcn1LBWud7CoTNghL2nxujEFh1BWT6bGrVn1gWo8EoH2",
  "key17": "4ZC3gGLnFwBcUp1GqKxw6EWAh7KwRCDGw4gQvLf7PqtVGc2TpmHDWKL6NBjY2GDF2pDmRjs6h63Z6Xnx8toTm2cj",
  "key18": "5e2Cg3pwTUkM3RctH4RKP96fkHchjfWLkiXd9cU6RVQ6X7MK96WQLES98sdKAyk2tKbq6PiRS2fGV9GuCPsboJvG",
  "key19": "4fxpkhwJk7Uho7VgEA6y9aGACTCvq9hckwhteom34Mq2QDEUQNWefXjBHcppWABTTGu59euhuGmaU17mishz3R5q",
  "key20": "4EfujWtUQLggr7QMNcEis8RoEHKZyS8ZYnQhXMrjaCixoHkj2MTKYnBuSQ2Fp81ReKWuCCCCWPFuf9GfFzpp9Hzr",
  "key21": "31rsM5W8R68vb6Gfp5AKgP7YPks4uoSsrDgbqSduSFiNg48AssWQNy73M2YT8CorsLT9R7WEGzDZUgAHgQjX2w3T",
  "key22": "4ESU5zn85TS97PEBEEMGfn1CLRUGz3FQDwfg26pq9i5v7prWxAktqbcKbVq4NARLT8VxxMrDVCUsqMasxQtqTby1",
  "key23": "66f1eX5pkq6P8BDEhpALVs86C69KVkt2f7DbtUQ91F4TS1Ffcr3Jk1pRAN6hCpEmQXxT7b485HHc6ngxDyrnXn7U",
  "key24": "SCT3EyTZov8Luh4yvmM6GNW9L2RBPecoxLffNy2e9e6vvTwCsR88sWTKYJyU6CEH6oCmehNUVmfpgWE3hkvAw8F",
  "key25": "27fPRmTryuGUhMcK7zYart1G9CkjT97ucEx1ZNDzLJPn8WJh7dJS8Eaqk2XsT3LqWBycqXFvADRXjftfYSiE5EWZ",
  "key26": "23bx6pN4bPP9ZMQUQ5PRjebmRFce73yAiEQe8ZTBuJQezNWaM44bYtyy6ZzkoKmTsfFJvwWcNNXJfcsUh783hWAk",
  "key27": "C119VqBVdVaHE5nTjCDkUHLaGgzmMG3DFNPUFSop9vQVhhnDrzkPA6WwwzPGtUfbudETidBj5rGAxJrPb7GgQbb",
  "key28": "5oBMs67YZTZwHzeHM54h9w52j6MMBvyyLhBGG9kVfmicV7QdvKVexPZDWkUn5Tvdz2oYgDErrx6qmd5jM67BC6Hw",
  "key29": "2punHuATrHZXxrPVs3Nqw2rLEdWFr5XJmke6KnXpyKA7phncLtxkiqyuY3DvxJrsGDQsR6RQkg9qrjC3MgUWcGDw",
  "key30": "54ofAyP49kt2YK1mbNVzogVgg6LLSruiBQXmguB37bGfW3FRywpo85o4MDPNvXVVabiH1gcENNVXrSfZQRnR16gG",
  "key31": "4Yhf5wrHEujemjznrdiwvncn4qEBUYi7V4oQED5xCKNHmG7kRN35eMehNahDZSuEGGMQPGKtupPK1pcj4N2m3Pvq",
  "key32": "4sRAUSoxGGyowAUpkjncwm1WYbqYTp4pgWV6yMB3UNWmb3okccWskY4UvVugoGozpH2jpgxhV8AFDDv1kmmyJfDx",
  "key33": "5z99ik8SJbt9e3BYKE3PuYn7XS2zjzM1BG89FniNrBQH2bfkhRDG8WGJweMWiUjPF32cvMhthnRyHJSMzL8NSm9L",
  "key34": "3pyeCxMKrq32vg5N5zncFki3ioz4jXfddZrVjjMsK36rpLpPnZR1qi5MBo3z2EBW1XndXYDdbq3XQBbBF534Wq62",
  "key35": "2uqQzHRFRiq2nuDpF8wjhGKWT3VjzseEE1dEVpd25B4UCgmz8NGUM2LfkakRnuKXzQHwg4o2DgPDyPvQsUHbJ2g2",
  "key36": "42iLGspD5YeGmgc8eW26bEZE8tiCXCAHCqHarJYQWxzQxxLyWHZHUXWsuCnPMD7zW5NfUnBLw69fRJhHBBqE6RAe"
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
