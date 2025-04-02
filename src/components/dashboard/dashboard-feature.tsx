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
    "23HjiZuKTcc369kBvXwiHBDeAqAFNoH3VR2M1aWegFaCaLqZzU2pQwL8f3uG38bzDUfhpBc8WpesCAgMMAkeq9ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483ySfrpkNQrBGN98Ha4RXvZCxmJFnBBZsKQTED9Qtqw5pgLv5ufEbDjxrxpU5pNp1VwGFGRNSkvbDMrPX854VKw",
  "key1": "3dyRrzdMve9ph7RZR7KwwPMyESZJQkQLwy1mLFrFanfJDcbaXG92pPAGR8CEYvLHVddbTxjT3a424vX51UkJGVDJ",
  "key2": "67odySg2bfZ7PDHNTcjFQhyrKpbJeTppHheNLRmpvpwKnWgx3MigaxXr7AqdzcXSauegGuk1wtLSbBiKMiqhaqaG",
  "key3": "2uC5k4RGD6ZsKtTckMK5E6Rv9bBUwjE7Nvt4XAMWphqTHuq7zJ7hdvvwPXYEHba3xwmU426RM2UfU4iSGwnA8U1C",
  "key4": "5k9JmXR3WL1aaNAew41Di5FFPsmspHSRPRHDHfY8EQ2tqBwBHkSQEv1gjkSAgSE9y7Y3emjTVHnJD7HeuZ3aQMsq",
  "key5": "4WL3EtGYkmrM8gsvRzcGDZvg6HXJeQY5TpkK9u5aijkmrnbYvrwKyvovJzanhh94UMCWg3YYhJLtCJha33nZpPGd",
  "key6": "3kFM4pnQ64ejFuaP6M7k6guu6YvZ93S7LkiLER3eRhU7ubMUp1yLa8U2gtdFnh3eq6vUQNEfjm5SqsSZt9itF3G8",
  "key7": "48FEuDAYAYuSu4E3EhqhhrpdTueaWeCMKvDKamGtiNFG5LS9hf1AxkR6yas2QBXzUB3AozdqhCC6KaXcKzuiem6P",
  "key8": "kiKoTxHu2NDTMZRz3XKfPsqpWLr5Hbk9LFERZEavYPyeSZ5YXPawFXQ7wWaFibeiE2MUASq4MRz2eiskWMv9tUN",
  "key9": "2PGCGaTEyHCtjf2rAxLHZ924pSyANuAWF2WXb8w6NjvGS3KknQf9iXQxifX9inXJuGfMKR7GMGgVCKg7vcfrstH4",
  "key10": "2GGtLp61ijbytD5j59dJTbJ5PygWJJwem12y1yFMPoAiTWaCvTNiLaRcjghPd6KLJgEHuYLwe2zwagruHzB865Gy",
  "key11": "4zR8uSmjw1N1f3byvD21Z5ppfsCLK94k3p7SCwofWAmNh4SfpzWbkPWDCsdVaXGky6pvcLKUhgogQsSkjFjtE32h",
  "key12": "3rzDXwHSSHuzn1UDRH4sCx1pLzBhPPo2rYY9V2tMhk2fzKA9XrSXU9r2QfnYysxgda2B5YZfixGEh2h3BvaG7f2x",
  "key13": "4sGiaQD6sMNbeV747qJmHJrHG1pEjwJiWFyZgqqT4hHJec3R7n6seSFhL5d3XiCDPhYmrGcN2QMGgVVYTjZqS4VL",
  "key14": "65WNvRSVg8QN3q7zYxL8HkAzT5hCYJzHmE21cjWhLbGfxMof2Dsq61zBhMmUNtzRjL6uH24ZgUcDo1HL4yZswws3",
  "key15": "4pmmQ1KzwanKgK5dswE2PBD7eNcrC4Bqo9uL1zEAkveXhrBnEZZGnCN8AeQxakU2MFTK1ZBtGTTUef2HELonrtfj",
  "key16": "5bqGA1MGDNLjTydPVxmf6D9q3BpuRsqeDoryCG5iJhHyfaWSAwV7g8YyaskmCUqVUcWo32itBhdDeBmgcFyuHAQD",
  "key17": "2xWf7bKFfKgjVG62zHMb6QALtki22EhvVuaRY6sHGUb9cxBnPUGhPBukXE21a4QVJNyaCAXfbCJJqN3tWJZjHaE9",
  "key18": "4E1UcorBVQfucQbjt1aDsQTecFyJys1jMupjto9p3d6MLt8r2dR6MHgT3DJR2cMhRrLAVifC7Us94PpYKUNccwYd",
  "key19": "254yP4wsVGb33xWXfNR55T3n3uudD2gKWAaj6zA6Kc1T2RjiRYqdhTS9dmxaLHvVieVxQoZXQ6cwH8mtJcEoPL8H",
  "key20": "3yKE9odznxe4TcctKGk9Qn1XUZDHP5MqiwvM3HFv7aYYsuYL7coJddTApj122qza6t1ytvNJs1jKgGc7nJLLNcqZ",
  "key21": "4s1YY92zz5RypHdLhREAsX2s1XoswAmRTZJQcxaUhi6Q84eJXhuUPv9j9qPcNB7GeoFGy5cXJCsZSByGZYg85AWP",
  "key22": "5d6uWEovq6HNxuvd2UXxZb83deWzDY39DEVmNvVKT1Ef8CHNJTXB3huA4wnxL8CBKYuri8jsp4cwXcLLMC4WrrKe",
  "key23": "4J6cwiqJDsLREPrY87XLkwRgyq1pX312QmEHZNRYR1Y8KZfgLnkHXZv9rm2t99SuxBS7BPr8aV7zACNhuK7BdCnk",
  "key24": "KSy5NBAJ2WLMM2RA2PXyhstMs3ipaWgKHxsH8XFtzUp3N53GswZKDo4VyhafyV4CL2yxVfZJEygWfnQoUwmssq5",
  "key25": "4JanpyzYGp2HtdgMrj7sCjGGBoHo4y2auhBMppHPZfPiCk4HqeuXd4sFqbkrdiVKUbZH7HC1zPNwQ8enV3SbsZbE",
  "key26": "2thefro7pJcxUH6wkD9xF4cg4syCxFs3uCTvXHVqgmnZ8vykFi98XX3NfNoDpJ17HTN1NvmNUQ43thvbhLbdheZv",
  "key27": "4VvFCvbDDNkuG79Mtku3Niv1u2yfD4b8tDamEV2ZXvAFdEG6cnewovMzkAYj6ecCwp5izmvQuMrra3TQtGm7XhNg",
  "key28": "2QsGhtyDZno6SbL1r4Gci5C1KHjKcjz2AbQoz5HfxkYiU6buGk8PphiG5t8cxk7n4p3nrN7qu6QbsQ6JtXQ3gZsN"
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
