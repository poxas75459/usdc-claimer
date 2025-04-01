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
    "1sViMkh5i8MCBffwSHXqnGa8GuGNw6w4YmMkfe1tsn5Tq44bqBahUzrybhpRA7p6Ui1dTndyVC9s7WSzGx1sLwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3gjkNMruUni4ZDP7VbZgntTT3XvWKegku95Neus5BN34nvxZ8xs51V5swHtgVDnpfCjMgker9LMH5atKhuC5xj",
  "key1": "25WAD6AU4BUW2UzReuhDnBwEvEj7JFv4fP4GMjyCAsfR49TFwwqKvEdZWfLKj8W2knytzvtVd1S6VXEAQiQMQvav",
  "key2": "54fFRWxhagD2KZKKP69eKeEzLziVJQJKuVucG77K8hEPfkjWgekd2dg7k5NmMkunrXy29Dpz1wrM22nkAqXYwSau",
  "key3": "UCbDPoi15KCpBQjtwqBLoKWnEoKGTCg2nFAQQiy88cULfN2Bi8vB1V26u5K7iCtuheJcLXtHUnkkxQXbGVW7MaR",
  "key4": "4zN8V1dWAX9ntcMfkhBimwRLjEFGwwyjqZ3Gphy812yeRMFw71uujjP2dfEVALgFiHzmZoVvkQac7CSeBdyTwz9s",
  "key5": "xwqDycnAbKseVfMSw6X6iPb2XV1RPC6mgK4at81D4pucGfywSZHDWSVs36JYG4jGj7JzLU2WPW87H4yR4zR3bgc",
  "key6": "3Kn8P3j7AfPeoFi6zBnWTtGci8QmRGp6MFjdyiSWobKL5YxkmWi2cRN3E2ZHAjQaRXbZZQAKmVFE7YWfy82cKjgq",
  "key7": "5FPHdKWcgNXMMCmhfhBr7QbEvt2an9X3SdvfxEcLW2VnFD4MEZHqGWYZgS6fF9a5Ah55p9j779RHBMKuXrArPv8P",
  "key8": "65Ea91x4S3XVyb3cNqCihA7N2MWpdigZEQv3JbEsV5ie6VFQdL8SMvzzQ5iVqc2XsmYmy2kcYXeGPnRSbWu1gNSg",
  "key9": "4DpdoN2Q9EYtQxAVgk4Ymu1mbKjad8y72u1CjJuP1x9ySiysCBspb6bDnLyxL5xANcQ91SeyBHiCMf8HmYCnysGF",
  "key10": "5dr91V4PMj5c5RvgFqu9YQUkPdhYJ3saATT5x4ppfpckEiUoTEqeZj2HHQb4oXbBPe7mxqWRphm6wSKDjDmC2n9U",
  "key11": "3Sj27vLKo3ooE5CQWN4czjDXT4wJq4RaAjDmNDEjXvQwML4Ww9qcP1PaC8H5YZTe6ZNL2zS5d2P7y5sMSEct572L",
  "key12": "mKANta3HXUBbBrtYcuCaGYRKzX5jTXqJS2mGF4fKrfUxS2zPEuDfRNBhsi2TR1F1zk8FPmoqVpUonXoqDEnZZdh",
  "key13": "RDEHTQW2hQFDpWyCGTfmN3eq9nK6ru9xGtwnzhkmLSsRBMeJoHnoCfJ95159BnaReAgt1sj1F9ignVzFkawcoUn",
  "key14": "4HTxAAzU8D7ax8nAXC8wWdSrW5tCxyBao3hWERZUB26A76aAPhu3eS3ExkR2cTQZkWk4aPbxBbb3c34xaQajLtws",
  "key15": "3mys5edqB2XWCSdiMXVs5YT2NYJDnF5QPajgqbf29JXr8dFiobeEdmkFnXix4TAiR7AjQSCMddSMq31BAe717U8B",
  "key16": "9SA1fa78NpLVGvuWTTy532CYC7V3WEkyGzqaNQuMqRGiyxYBNjuNYzrHUcdpuJ42mMDQ8LBtZ2tpmNaoRj31r2j",
  "key17": "5HnSEbn57HTfgrD6GxrakxVZ86ptENp6ysezhYnTyKZ23zKevvXKVfsRjZqzSAmHgYe8NqsTLyTZmE2HAe866PVb",
  "key18": "36jPhBsCDikB1ZEroD2Bwyv3oq6ihiCUhbg8MHRuAZpLHggLJypaFT6iHo1yuF7dVYqZ8SbKGKXNDd5BqvW7EnAd",
  "key19": "4RPzFjXW6Ptpn9Rybo5md7hMp3fvrEfbAAd8bXV9yGvRBBW3YUWHqmEpeoeEWZwFQhsf9zruCk3vEinxH6SiWdAD",
  "key20": "2Ns3YG9gSxRTDUkqvwV9gsMBqHArjM5aeSpvuQjRyzbbZe3oGciFjNG4msJUFq7wQp6hMUF1Q76n8qPt7RakgH2C",
  "key21": "55yXbDcbxtCpncLb5BRmVgBkqyTE73M5MQAbA1jpjcC3EJ25ZoE4ngvSedvmzEB7CgozdATUbio4932JBDXp7uBS",
  "key22": "2aoeGVc4qLgRTmvqEpAZptkdmQohiBKKSVwqAGQrCT5PXn4rwSsf6LYdEXchBXDnvoLJihmsSvGRvXpGHwMMCuCn",
  "key23": "3Pz1tRtTTEv892utuRLQbYJWpX9Jzp2debPTwHbPAKZfmb3coUDaaxdtMtYQt46djqqr1NsgL7iu4SGGMhPQSWLr",
  "key24": "3VpJQiwJnTWv6t1psVDL1daN3i8yWSDLaL594PnYozpMiaQkEfaC7CGRA3UjeQxxye1LnAtPQ8vZV9HYDTjYARqi",
  "key25": "67XAYoWpfwbVHXDBJUVmfsRfCecwT9dRoboG6xPWMyRbYbWNmSeMphqyoRHEJeo7wK3os8D6rogMZsR6TUmBEWo4"
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
