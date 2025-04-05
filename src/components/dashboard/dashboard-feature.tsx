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
    "2Qc2xK4Bz4c1EQtThcvMGQKAdsUjLXSJL6xF55g5VTSGRCzh384w3tUXnwSaTXNeKbcBtZ4oE1YkE1eyuSNLiFvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9JFfMAwgGAQ5YbFPFJG26WvMuSxwBtEV5eNwXYeq834CUdoywX3LhDoqywyLs14xZJHMmd48yUVYBQpA3x9TTA",
  "key1": "4VKRWNaH9ub378FLEcTPEkjFZHmMW8br22JoamAQ9uk5kwkHvEMDknQ9Sq6WrHGM1zxvYo6o2jpP37KcD3thj5EG",
  "key2": "2WCrdSQF26E3DQoNSfbCJ2YFtQSk6o5avUsnvs7biLfTBrhvcXt36fjkbXCDursvM1HPBC8ZNts2Syyeo1LwsHJy",
  "key3": "4ir55oHSr4kkmk1zDJtysrGiiwL5rJAFPMsYF5aKS8oveZxf4L7VZH7exLG5EtzDwEvi1EKBQ89uH5w2tB9ULarc",
  "key4": "crV9ivLFW8kb8HBYnNAeiQTsBdS6C7mBTEajha3hTXyCEjeEuEL75LhJmKWExL4o7W443JUBhXebceucT5tqXue",
  "key5": "2XJxjaGA3RmQRDCj9urkgEh9CyDxsErNbXj5PaB4yihtkujeXk9DfH3quhbDNsEgZKMqnAruFq7obfo73iyRZtLN",
  "key6": "2TbCXHtBtSQFr2aPSeJ8sFTXWneuBJPWJWnwj2TdB2iHRNGdT7EqCRLRse9ZzFSXYDxAR5wy5KjW7WRy3Y6ty3Xa",
  "key7": "5jg3qwRuMhGhK6ZkQLhBxeRp6ZkRAUaGsGvWsNFABH72rk9VFTABo6p8EsScCLLNrRdoQRzCnQwJmXMYfoiEz3RZ",
  "key8": "58RdDXoiCcotsWg9mTCtMkQUBAxqcNYzB56KXBNgFXbZaZ8sVYN4E4WtYtScYiih5ZzruvXAoafrxuR8sPwwqfia",
  "key9": "5kJfWjH9uFYd832yMFseF1SsZmjS6rsJ7VRsKtriZ8EqhbuevnZBP9na67Gs5ppvKBEokYFjPcUuK3auCdeHbsW4",
  "key10": "35psQqekeB7FHSaFC7qs1L9K2iw18D3XKHNPXDQsMQjsTg6H4TbfnjpHD5nnKZ6k3L9DCAAo2bWV1qfLwUD4tzh3",
  "key11": "3XKAE6hoATUSeW9XP3SbBrpRhXfjTo1ddhS9QrwfhjehJYEkCfobZdPkn31xjQoWpiZDisuG8J7fUqYGz7oySABa",
  "key12": "2MskhuPU9F8TMvC5h6UYFo6XQg8RKMVnu8R25kwzYpEdWmM9ypu8kBRLksgTP4o8BModgBSs7pxvh2qfW3oM3VvS",
  "key13": "4LYghoHrqFGJJtd84PqsZvoa6GKUMpXHVt9HwxgYzWi3t5wqdkWirk7SLtT1rQHL6wU72tMaWuutPUY4f2McPB8p",
  "key14": "4JShXjuacbtvH5BWQrm1gTuRuJ78bynjDpsuPSNRmT69oUzS8jALZTSDFWee4ESdB8BoMBwDWw355tj9Uqed4dDq",
  "key15": "3gwFDXwuQP1AFWCQaRc8jjAK8qBXzGCELD7JGkaAjecx4PdmBcdpRuY5sDJepimaxaZs8ebVCpCsUFBQc8Tb8c2z",
  "key16": "VrzYG3iptd8a9zD2ZCFWLtPMQqZ1CUonwsMfS3eZmj79AFzpiZPNRUsVzQnvSuARTDov3jCSucMKkPLzX1uuCx2",
  "key17": "3iAMnuJ6WD5iR63r5ugkgYr6wnLzPgPVWHhSPzL7ehCd5oZ98egHsXXnLxe88wQh5qQhDayeGPQkJ3k8mREjQDSy",
  "key18": "9jCP2TW4vZfMs1oRkmn3AX3dLgNu6QmmHf5X5KKjiVWghBkevXa2Z9HcCcnUiLYG3SA63kA5du5EiYKhXyBFaM6",
  "key19": "2Gc4mtFRtfQB3RrJsc4eMTwH6MQte8PgCn3dyqVAuM2J9YiKDbgHG1XDd3TGUCEdj4vqeK9uhwf95z7CMEmrPG9d",
  "key20": "LxAfez2Y4YVT38HLF91s5fprEK1EJvwLTKWysPP9f8NHqDYSrg7fGqR6SyyEPQy4peSuM7CRyvxvxEYkdYzgzxt",
  "key21": "4xSfcyZTGFr6zk8HJtwk26TxoAAwSuQFVreWs2T4KnY3MvKQvc3JNpzGwdxoujuw5N2GSx4t8qmZwwVY7DQ97Po",
  "key22": "2yEdXMyHCq8LrSZyGrZ9xbi9TNNFWFFU3wWewUbkFKykj3BqCh2emEfuTXusoEX9TbzVMcJ52HsBqsqq2EE8HW6V",
  "key23": "5Ax7M91h5V21gwStGbVwcgGUM3Z9cEx3ZkcjMCSSA43UDEeh1q8Yn6N97wjq26qXoB8RGA4vMwSG51mJiY1hUsKV",
  "key24": "a3XRQRYdtP1QNGnbCz6WzL6Eyoq8jj3KjoCEBAVpPEabPtfa3j4MaDBGziBt2KiTyHGb4q61zsYZKK7cBfmSAFP",
  "key25": "EcgYpAUvvAwRHucrb2N9zbWB9d871XAf6Q5KnpQUQFxGBsevQAQbo1T6fRYrZssdpjzCaV7SDfz1MKkkekpS58p",
  "key26": "27fGHr6dUMjJkLdMc6V9MrHoPRCHvLWt3zv2dXiE4X9SqqVo7FfDcJdx8WMVza5GkA6nUdtSRS6zqvkVkXBSe5Fd",
  "key27": "f8dmKUmT8kajDyJ4qBnQatsStio3md6S4yAAGkj9UdHWfj3CRYrJ1kPvmQ5y2Thwr4cmtzUK8yMdCmZ9CmmNCHX",
  "key28": "2GgXrL4K1xMe3egpZhwwaQnydcSob8hXarWWhhjHw62vUCMaPASmgvd9wQGNWKQFBpa352tbMTbNSktRLjqSxoso",
  "key29": "n4W68P3RUxnTpb9GfFmfmVY19HnbpmK8QtDm4nkW1fZiY1ndxUMJzH1N4K4XVCXY5pE6d2CGysjXa3GNBTXJ1MT",
  "key30": "2Sh1kraQGNewKepjEmB8gr5gzy1nCTvsQGWNCrSRYXcR1X84jZNoStBghDmrc12ep8BFY7FaZ2eU8iEwmWmzGmqT"
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
