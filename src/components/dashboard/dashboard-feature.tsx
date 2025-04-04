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
    "46JxoSQepMEhidnRUzbQiXBiNL9KHKXRi3LEUWDHmVquipPfC6bebcDxYbRUWGSKKdkusoMBrjwpXgAWN9x7ruMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Az7w1BDkaCSdpNgUhCpGwycLvX2rtXM8naPtpCWRoNCZMhQFK6W1uQk6MppaQK8B9Soe11XuisQLeFVKSYjaRAY",
  "key1": "47CyCJytyKrRe6axY3MaWRXp1WkCGpHcKGtu2HTxf61pbZ17zUCXswniBgpPfuoo9NaTeZ8on4PYpRoWGBT8NM86",
  "key2": "4yUgEAtd2wKPNbjK4w5PMZ4Z4bqbHAoiK9vXX885fz4rUT8D9J4QgjFDiNCepH2wDPbU1xbVYG463Vk5pBZ97t2m",
  "key3": "dNjafqvAj84nJCBcLRwDQQTLRf2w5JuMZo3Th2368Y5irtJ51Ab5kFCXpXR4HgVrE7kqJf7iMSSv9a2W7ixx2Tz",
  "key4": "5sMSqhBMUEi6RdqXtR6vC4zeVxcV82tciRCuNTupdJ28GYBRVJWyPq5xsnkz66MwHkHjTf6L5TDeZqvw7Eq3umvX",
  "key5": "2KYi1KonDXcsPtWDFCk6Nbj3pFXjCyb6HaoLWExbUUeAjNKeiFzbNq8tYqqiwKY6L4tASQ1UjfxGhd9EKU8GThXx",
  "key6": "63pmkp7wyqKLdVN4mF52uht3vyVzvoZ2NZiserYNpm4kpeCNUanChLJRwswkzMYg6WJ8mD2qyuyZ3E2TEBYtaiCX",
  "key7": "2DR2iRUkAorptLqfHMDZiJn2jxRLVsicVgp1D2eHzv5PqMRN1rrVYiq1Wqqcjn9xD7o5KcPTroxYXJBpEpfdEUD2",
  "key8": "5uM1vj15eUTHCdxwjTCP7ty9KckoeimhkoJV8qtDM39t8vkS9gJapW95ffC6QivMnkeW1uTiZweVbnSd4XiLsH24",
  "key9": "2rpQt7rHsyGw1becHhneR2YAzyDXYmS6aLZzjJpsWjHLmoVF5pMpvufyLfZ5q79Tm1jjLaFp6o9C8ZdJUvKpp4Nt",
  "key10": "Ywf7fHnE3mqrMUyY6TRko23uhe9U8gVB85nc9sjQfquNrui17jAaFr1jXWNbbUG9ViBw8gCUEZZkLL67JFtxwG4",
  "key11": "LjdD2Lc8HvCYMnkyQc5K6wvs2ndPTknYNBRTFeFYh2yGWu2jkmLwSmhbf4YtzN1xXVbLCbhstF1ni3b9Ja7mibw",
  "key12": "7XbfB7JEFDYKfXszEtb34mECBSFPdc9Kcj6SFcxYcQsZb4XFSuHZapc2cNYfzJnHE447pZhEo2XfQfqtrjDLEm2",
  "key13": "4y26TSdpbLpX7sf8iucb697ewZHDueg1FqkNTp9gZsSCQmqzmGkfh6FSMJeqaEJoYUqjxM4LBQSCtQQVQ2NHREWX",
  "key14": "5mdVNWhjSJMhNdcoaNTegipc7Y2Lubon9uV6G2NS6ZVC3sUHMyiu5wmJojtrT9A6jV7V71Yr5RgSzQJt9oJTbQp4",
  "key15": "31qFci3B7jbVrfC5m5zvvb3RjMFcxNqNnM1YDDZLvKN3ekE8XRVRAxzkjiHssoTWPF8HsZ9h1riq5RktjGCqJ3HV",
  "key16": "4TGkbUCda8wQ5RKKcPPw23KK4dxwb6PLo3XoW44fDqoRDsxzbLavauN7AvZwvV5EuwNFbzbbFmHJkx3YRvUEwFnL",
  "key17": "4tFigThLXgCbeBe5RQnCocjVtod2o7xoPDanYssMhogAEKS8qsNztQnACiP7a4ybibNeWMt3nyhXtMnRzkp4fnie",
  "key18": "2TYcQsNdt9yHPgAWBxNPyFFZmtaJWtsB2LMZxu7CmqGFqB3FsBwmrggZdbgW42cXavNR1R1CEqtA9LwS8hW7yzzL",
  "key19": "2GKyYq7nnHDoWQAkSBpG7X5KfQ9NQx2hiUYk3BMa9t2tfkc6yorjDiE1DGauQ69mqeLAnbVpMSZ9rWW5eMWSyaY3",
  "key20": "2f9y1jbwr8e6hNYLLYg9hQjp1ZZoWguVgesaELp8j5VdVmTYQz9L1HZDZRwfRR2V3rTZkKymybYryRiATFMNWakR",
  "key21": "2qNCGCnHix4r5hVEHP6WmpmCVgG6retAk3JMgMG74QaktBN4zhiRKogm3iL1ZMH9YhhjUfiqHQ4xYtg6X2YUAf4x",
  "key22": "419wV3ZDGYYXtuxjMGcWAKDWvYYLF7eFqdMpEajPEmpY7jqcfCfX895F78oRmHPia9PQHD2Yip3Sn3z4qDnT5zs7",
  "key23": "u62j8fs4V5QACXwiatgFcodjNujgC2oSArdwTzgbzYUGCt8HgHL4pa3CBAuJ3CnCkTo8M6AowRjYthJyxeAndBu",
  "key24": "4UksR6P6iLNLP2J5BHgbVFFi1j3mZC5idvNtgQUAyX28rmqQRaofbUzEjtaea6P8G9C4Es1jswmtmbSK1TWJephZ",
  "key25": "Jx18HYxg6mvABjUL7RrxKmaLgyTZ6PfsjZ3tCS6juc3HnzBHScT7oXG8MYBR2rEzWr36JBDx223oVQCmoSCBw64",
  "key26": "2V5wCz7HRBPKgnacPRNqj9AHFYHPFLAhddGFnWFzHqT6UV2JbjH58EDLjtVBcYhi35bCbzHNni6E7yjiBRkd1otA",
  "key27": "2jYRPSFSQQRoWbsDDMS11sTUM6vrGG2MMjV1s8id6DjREADThHgwTMA1EKfTneMBNdVVuxoex9TYq15LSUUJcZ5y",
  "key28": "362QgvcYyjq47PegGMf592Rmaz5DuuzwgY8fyqxvDjBUemJfEwMAYp7bsThJqt6bZBMDMBRzF3YAd3mMsTKRBgnd",
  "key29": "3YHHkwZxeLfNZgukc5emKoTXwyepxaajTi6sZiM9qN4H7RQmf6Emwerey6vDeXRWVrnnj7TiA1zQcJQ4qKSxYh5K",
  "key30": "aZTYRUH6jnbKoqWbLd9YB83AFy5tHi8HGHJeSoV8sBsf2FQmrwqVmoidZ9D6ft9z4dppGmVjk6Bmwm5674Js69S",
  "key31": "2P8nNMxZtZ8sHPwGFJSrwdSQsx9P5ZAugne3bQvYkK4xoSuxqrvnnSm1FQUChqrHYVUrFFQnsxBaD8ivFRJeEvQ3",
  "key32": "288bGFsCzZB3azsvrjPsADRHrw3EnVs5LFCLQxZ1FmHdb77esqwjPVchTznEP2AKkMPtEsWPzABco1XhweQoxGVd",
  "key33": "38myWnXZ5VcRekB8ULXo8NXGym4X4ewdwANvGsAzYJawuKVGkGCCCED2RHzhWyK6qvsNNJZTw4MQekTAvc6pgT96",
  "key34": "4MjkbaeVMqijwX9T73C9rWXRas5Mkc35csUzJ7ix8DN6Mw9XBXvFpFw3rheAXFUkdR3NtjzAQACmACQ5jkVVzD8Q"
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
