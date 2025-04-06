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
    "2jKRh6CPfVnhnMMiWVyoMzJoaCzyZZdfxuVnr7Q64xGmBvJFxwfXn5aHJdKftmQ6CBTmTrD6K1Ssxu5fGJ5c8KGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61H1ZPCsbZjuTioJbftgaAYfB2nBUEVNtX1k727bqbfQja5MrqNn52N8AZefaf44UYEAbjedQpAc9uNLH88Ejeav",
  "key1": "4ym8MqumJWuZTaH41SRa3EJjba3pLkyB9GS5b3orr4mPzvQUpHb7wK1YCyocCeP9bhg6GP2AAR9ARwCw5GJNLZEV",
  "key2": "5sX7sCtU6oAyhAtmWx3SFiATBhGWpNj7FA34vzj9BitRcTBWVPZ7mTm4bwHHesWkcMv5xiPyVN8uPHZ3bAMDV17D",
  "key3": "5x4PPpEM3wadbtdgYS8JcsduwQuT3p2hjEk8QRgikuScqKpZxtce8kLUD1cZLTe1hBbPmShcLeZAhGCK4TGenHie",
  "key4": "59pejN5DSyQ4UsueSxGGMtqRHqu5a3wK85YZBXt5QfjzaihVRLkBwDert9J6zgwfLPqQatJyNs4magQcg7DbF7zu",
  "key5": "5Cp8fuYkW1jqgSsHvF4Cii1cz4mjv7Eb3azhRoBzbzSMVWt4FxJouFBddQmGcqqKu6LQQSMtGXDjKGLJqnmsRtK4",
  "key6": "3t45LwffE5NcG919DzuXbG4SYen3vhuK1xFMnzHqpPVogAoahNSegfRFNbb7Y7UHzk7abPory14McBFriSEyq9Yg",
  "key7": "5urZKGuN1SDZhugFC72pyWy9NWsqXXQzMQizDkTi2Ypi7ufLyLXmxhJ5NqDdHd1Etgye5vm9hjSXDfJwBea3DuE4",
  "key8": "5AyW7N531D2tA27r96J2qaggq3TpjKmwwkVJ7Uuh7fzXarP6b7dQ9hcXEzNbEug3RKd5nuoSsp9iAqnemgYbFQXP",
  "key9": "4zAJ8r9QSEe7f7sJoKDm51uKxGtXFSsko6TLAUNbM3S4QHrL5P4zas82uyYaufXWRVK8kz9vtXSw9sXew2qBsfkT",
  "key10": "5md95PtF49jFbGXGdZcAwu5LbnGVEGowEadAkCBn38rHtzoJ9n9sZJU4msE9UP7vvmDbMn33pgRY5CiS1Xx2gVzt",
  "key11": "4JU4WeokK45Rk1PrPtFtHhL8os7X4aB5o45TRXdhoQ5KMn2zdk4o3nyko9H5JQjci6BFs8s8US9KHxVeFKVLbYEs",
  "key12": "2uSLHmSJ6CJ9QEw7MsUS32tQrM9rRqXRshWZb835brFGMmmzt9KDCZnDCMmJDWszKKWQo2949udAAZuX4mWyTk3V",
  "key13": "4ZKwTwGbNYqffHWvcQMYYYd1B8gUX9HJMcnnFw1dtgtKJqYv5tJWZ8uAHTNrAWUmhSNdQfUfoghD1AYyodug9V7G",
  "key14": "4iXSuj77AwSQ6jnhAqTojyM481cxvL1fWCQ4u4s7RtadwsiLAS7hjUibebCDCEZfHPzbHVTZoFtQFaQPYxcCU4jt",
  "key15": "5PKeA6GZHw8DvNzGtFS733KE4ZbVm5MFAWCnnkyF7UgVR3xEntTqbBepKRCqHgrcP8PvMRyjbNLMoM9MFKMEACne",
  "key16": "NXMWiwAxhoEPEXhTSnbrbF87mYrPkzs7cALimrwhiQjwT53v7dVhDQFkCXZGfVYKaPDYP7pNLfvPQLLwBqkmD1U",
  "key17": "Uzwey66WxscyWGmPS4dEBy69Fq5td9mJzX534AEtzUaL7NK7nGfHZ6qB1CdDNWyxibU1H3PZWDF3EtxAUgMg5Tc",
  "key18": "5voEoJcvkDfKDw59ZTMs4K3LvN9NgaU7o49UMC9ahdzqAtzoLiyGeyNY1wog7UKnXuT8ZJMZYaWhgaCvEpQQkTwd",
  "key19": "63UveBgdr55fusUJWcV6Er4X7q96dfgkiWN3hCb4yBFmot1oGFRYVvUfqghsiz6JVug9RNDW5arVMRK5c7LUHB3c",
  "key20": "5JPvFWDK1Afo34joFeaHptGBM3UEDCcAVnu88LWqTsz3sgS4JwEusJW1VbF2bdJpWS6jg8fhiHyysYzjZhVa55YV",
  "key21": "4DQVFQ6jjpJa4heDrDSYtXphMWu8XzPtYYoABDJcXBw6Qz73wKYEbGd4nREWaQcLVJ8kuN4FDSuoEwVsPu4oHB9G",
  "key22": "2DAjX13aJkdGpFQviuBmweDCposgiDCKUicN4FBYpnUpQbx9nx1r72irBssAprnEf4AQxSqgurPPhjMbkc8oX1L7",
  "key23": "3KPHMdsseNz1SWbzZ4UMthP7P9e5QYtkk7AjC4zRxJf5SyEP3TK1QysJ8raecpnmDSSZ6s27ZCqqKkwYPWJYfkRD",
  "key24": "59Z9q5GiYC1dtsn1jJEGfRqqoiY1fmWerapApnMo5769JVFZTAksUHKgERM8vsz31Y7tD8WzcRgeLuVNHPG4Y5Ke"
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
