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
    "5Y2DCh8L3t68fJptipA19d9wyc3VoeYTV7qxPqmcXSuASBaJ7qqbNtRAmi7RVSM36wj3SMi5mZ6VQqhLc25FCKK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQcVT9gvVpNPo7VcVMK44D86DZmfDNZywFqrfLkVxzixSUrEks1fR4r1ybi9LpWyjmvq12YonbSagLD9b4T6Rdh",
  "key1": "3bSmb7r4fYDQYFQZrhUXHh3UcJb4hkBFEh5r62Rjwj4MLFWQW2Xf663EXVP4XZ2PwcX8VqJjMhzGjo3LCrQ4GXhF",
  "key2": "5urS9365VVFAbxnvYpEH9dNc8AqWL9yk3nJBUPAVQ3VkMUT7JDbC9qNdLtUWvJiYAm64NWQGamSPzMPDaoCrud6A",
  "key3": "2yh6Vb2yiiMw6oUvZvhexGmEBTx48jU2s1gGM4iBQ2HnM9pZti1L8ciT8zrJJJJnJPh3mp3w3aYbBNEjb5tSrGAY",
  "key4": "3hVtuZGMCD7R65SnPpeHNFp3fLbPCiwB13dZAwSLqFrrGQeiCcAndeiRv81ANrJ8ppJf9pF92u3uf9bykqJvVa7L",
  "key5": "46dswt7G7vL4EsNVXGSzqJwooqka1A4mB5ZQbmcsE8Nnw4tB52Y5vJUsU3aHgY9KaksumhsSnNxSXPJ6n77VzwLo",
  "key6": "3KcPvbnwKC5ELbTWNpsX2kfY1no4ZFPNigbbj2EhazgM5K9NL7UGqdVGJXzbcQW5uGTy3Wp4KbkDUHh8EyuZg2Tn",
  "key7": "5haAfJxFZUhfDZDPENsfiMFmWyLgXYkXsVqegyGKLkUGG2sLVc5m2n4f3F9oLr1E9FWS9vS6GGPVYbmMJXybEsR7",
  "key8": "3TYt7bm8J3BYVizSEnjmaZhrPmNYkBFnXwKDQugQkQ2NZNEXzGUmXwJWyXNspoJsYLGib8qkggfyLNWEXcSiCNVi",
  "key9": "4noMtCRB9v3F797fu9QDsKk3RaRRQhUN3HDS983Lr4tAEQzcnNCdLjrPVhaRRStm9ZohoKF17PuENAaiPjzvJAvY",
  "key10": "4BjLN7TtemeMthFfUCf8DxgQXLUrR3jq1KcVmBG2tPJQhwupo8rqNyh5a26oVqz3JrrskAudrPXCPM72zgpXyX1V",
  "key11": "2eG8td7QzAMAyS9czaeck334RQ7Xo65cbUq1AQPajq73iCAqWNztoC5QepLSryk2WFqnNvvah4tuYRdStXxPFjDo",
  "key12": "rvKTiizKhovgsbTTrihtxev1L9HtvWysGx8MQBBj99xSQ1pk3yGU1VQMBHQTJ9ZwvaCz3YHLDroMJYVT2yfDHjc",
  "key13": "3HCRbvjzMCaQFtk24842uYTe4PTgN9tQSv5r84CtMgYdSWTGqoSxmCA3Vjvid5bXFgMR8KsXK34VGPqGzrZ3DMZw",
  "key14": "4wwoxhHUfomaQBRqWM7sxG2xGY1EYtEqtAjgdGfxH8v9uPP7X375gZcyXvrtztRQW8cqG36vcCaqbrG9Ypd162nn",
  "key15": "2ZmLQ4wqypVSi4so4uRDsyM89vnyvLBuM8xp1bqM6L6C3Reqj3WgNYBSG7emi9VrSY72J6dBeqNZUcLX8NGyPA6a",
  "key16": "YTWD4TjwPJ7ekiCASXquo2YL3MYYq9zahMmVCwr6d1jZ3FUqEnXAxdCSV4iNmq5JtF7Q5GEiMeWRftR1XtuNC86",
  "key17": "2QQ8sFSon3w5JqzQwjk33EzMVzhMRrzXSqzGghm7KNtXyEtdSndPFDqF8GDDi49M2tVhPC1Cr3HoQxLWaBt5JPbp",
  "key18": "fgkTiMqkGDoM2js7TRABH7aNqHcaEienVKCg8M2qBrns1M2pjGpW6f3KxbtqHSwW3uojB8yMYYEWzAoB3yeJzhv",
  "key19": "2uDcyFYJ6TWJSumpTd5pkJg1fiizjZJwVpoiw2GgfJ6Xume4U2D1JC35rdrFhcWmg1bvufgrDtFU6Ess5rxsBFnT",
  "key20": "2FELqmvn2PZnJjd7LcXpsdZFDPiTsBu1oeQ44KqpWhVxAFk1NNARdC5pT4cMdroVrR3hkTM9ZsHBGadz4itgFae1",
  "key21": "2MDZTQK2W48VRb1qYMLqXxdKVErpdrgweURqnmurPF2Y89ohnTaAacjxwYGbzi4twfgQcv1ychEk5c4T73ZJhRzk",
  "key22": "9f6MyMBDwTBrFicyDvBiRcJatSGUH1NYqci6Lxz1A2JNRM3hqk1ucw9nnBMfGGkbVgT5nP7pUYbEFGKHwVgY8E5",
  "key23": "2Xb8GQkThdDaZinTTHLawb8SFpGSdh8zw4cuohBqPnjt5z5UYdSmpShhADLJLcb8Yep3ZGC34CXZ2dQeikA9TSmQ",
  "key24": "329sPGzYhinggAHnFnyZyoPXeKQgcP5aXtrCWjXFNvY2eUY8wKN8p4N5wwYe5vRkQ6wranvcV5VoWyyGDrmkvhg2",
  "key25": "2Rmkoce3PbqQwmjviT2h2Jj58SmLu8dETH3g2yRuLhtUBWxKMGBhuPnMCFNtmt5PfMGuEEDWbc6yaHzY8roRNZGL",
  "key26": "RisdXAZ6A4k8wN322U8GZLi7oCsmzrEJSPYsMpJp1uy3YX2ozyAqXMVTkGJ5RpNWeHuVoqKevatkBxYVDB91Xay",
  "key27": "2sYipCD7EKhmaXasaKjr4SMaSUHz8LTYbYWSbpdZQnz3rcF7miiw7smFAxY4RwwyzZjQwYnJGPvQFaen6mR3YhGb",
  "key28": "5GftfDYLqWFckQKGd3CecVYLmca8J2j4U6qWbqnUTTBHbMEEjG5e6B6N1fRo4oMn5hWX1HAJrWGuBdgxRy59gyWv"
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
