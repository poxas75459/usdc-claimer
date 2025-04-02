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
    "5TJBg88cvm2ErB41ps1fH9Gn6w1PVeQDbw3m2MKYvMdzC76TmaiJ82hrg7imzk3QscF5YZhfowuT9RsT9TJ3erTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SZswFktn7ox2w5N5X8A6bFaPiEqUmH99SqVFL5guJ1bwtS8uNdSHqw6vg7k7N8pDQPDQCL8TYVUpNCBKKvcqzyf",
  "key1": "62TyE5tnciqn2qut9AhbYQkVHyVsJfo9AE8tpSaou3W3Me9XDUDw35yHLYspnu4ecv395wrqLcz63KL4kfwhMsQK",
  "key2": "5LeDEC5hg2A5VTap4WJv4kcj78p3Lcm1VqEKWuJ4jHzWPpVexznSmjvPYVRMZMDD2pAiWizNxmT3xwkZiq8ca5RZ",
  "key3": "4uoJpJiBQ3xfbj6AZjPM9DGvH4Wptvs11ztPUvKUJsPPFKUTSqdWLXUduv3mYQPwxY9muTV1ucqaBwPphZJrf2ie",
  "key4": "42Nv5Z9FosNdXEsJXXyiHzVrXynoQ43US31ePfq2xCoRoQcQcPNBb6aAVnNs6GgztpNHfzTkjjzpoJxGvM5sWhbF",
  "key5": "qVcm1tqSAPn33EQAs5R6TEQkUcm7H1WAZJ4nv9MCqPvi3JVFUmMZWdqUcvPrthoNz6pRaTA6tsQA1pxjxauwvhv",
  "key6": "4NrgSH5TrXn2JRHmsdvfBjn5jpDGCXNmnXkMB8nESZPFQgrwUez3oKV4wcWDzBbrgqYU4pHErXPFbDf4k9PBvGu5",
  "key7": "2BtL1qE33Cg2rKuG84snmfhZW2HghsB7vkjgtw1CUrq5sv5DDmMDuCMkdgT73B9fCBWhZ6ZfH36Mox371eMAAi6K",
  "key8": "5ABdCkit26jeauYqmzH5A2A23bmrtYK2yWvkgnbckxZFgTYeDzDiMmD2mxA2f9KqVTBFjpsjpmLadUQfdDPkhw5f",
  "key9": "46KxmvhU2sKv83kkh1ZhVzYnR8ZTDupy9awYRsS8yihRW4Luz3wKQ2urFTfvbqJYU7MSs2yzS4FLVJDgDYmUeADU",
  "key10": "LRn3jqo3bGasNFRMhoasysLMpUKdNbSx26G5UCq3BEUGZqjY4J4v2dmzZSc1tbASRyMU5uUDnGbYaK7jnpqCecq",
  "key11": "5sgxukgbUS4LokeTpYD1xccKUSQPp6iAhcBBmQNqw6J5pkvNtFUUhBHQioTiHtqMD3BttAP43Seo73fdi7BvRGuW",
  "key12": "5Aqe1sPEMUn6CjxuYShCLgJiLhB8RXhaUs4ay5KaYoSH7i14WM4H2SRJHJzvef2RfMgupzijUtRMMMcMC8xTgrJT",
  "key13": "2XeELfaD6YZCTMgMZiN1YBf5qEZZqwjZ5Ph1skGi3fdHuBUTu4CnPYZua3CB81dZDaZ6Hq528fEuoENxT83RMnkj",
  "key14": "3fY4e1TmyqH2BDdj6psJY62t7Py5NALkULYdA3JUipesc6yRTZqKd9Z4WcpVKUgwKEEqsu5j93vjBr4eBqiR49om",
  "key15": "2MEuyCwtktgF9yCcJ2g6wVJFWHNQhx6JJnafuNThajaL4J9UC2eLbVzyrC3YqMLzGE2ZTZ8P8y3mVLKwE5pz7m5E",
  "key16": "4555ZN5cUBLkfMuruKB12L4gjzkkNHDgF2nkxqAf4NFbxHxBKjcbBhSP3U4QFST8Nu6pxPkExU7iJeKWXtoyxHmM",
  "key17": "3wZa5PMKg7mFZZq47u8towZqxzRug3H6RZaqPcKAmUHcgAj2sivJJoNQMQZEqM4b9cBJhsRBmZAH8MbH75SgXCzb",
  "key18": "4vF7v2WrPm4FAN2homPZPZCWyin9V8UZFJZY3YKHhuVojRsBXM6edPCgpG1fPYXA72b7DrLVZtGUA5mdPL4BtVPm",
  "key19": "2SqdwmnuC5QE6sd978Gjy9Eij5c4CDmPfZ9G1MhCLmt5M92L5gBJT8LdXZvgkuw5n2uea971fp4qbeEacWHpC8W5",
  "key20": "5fEF3VCf5QBk9wpKUBPd8aPhzMaWdauDL98h2MGCaw26GesybS8bskZNbwDKfczjUDAnK82ihYSfayWVquuijiyd",
  "key21": "2b1yYfEDFq8rVPgoaz88zsKEpqJf6QergaYWssXkj7c8RZf8PfbN44v1dAHdfNBwZ1syi65w5BQvvE2DzDKsY6yw",
  "key22": "ouHxbiJcVaugGMbvDmXcLBy1jYhKjc3F8Jg3kWuPHtSpga4dvEajX2qSronMDfGccbW9xwUKqEvFdoFRbLbgFHS",
  "key23": "3H1xStnE6DmrUFuZMqBEbSF4ZfADrNyiNcR8rUC4jJvwe8qFEwWT3Rpsk2J16bdghDFnnzGxKFt1DPhDHkyUj5h",
  "key24": "2D7Uoj5muvho1JhspcjMg5VemJgXGjdQLFU1AW9xHzARi8hDfcabBWPsx9e3wcxbbYNirttD97p6HBr3PivgHFzT",
  "key25": "4NThQp9mNDB5uysVWdh4eVZtsPpdFtAdRp1rHmvTpcuQvKwzs3p5QyXKYsQu5PaWwN9Etkfq3TBjUAac5BFttc3Q"
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
