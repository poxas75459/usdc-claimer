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
    "2JTCfWSCeNCoiqUNfadLLyqQ2Nt8iioMKmMqLRVTqwEznSgj8wKSJpkeEih14sTrT9jVJS2Mmv2hu3NfJQPBzXZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AAXCUbEY1nSGa6gj8kyWExps6TMEXGWK3jwd6MxxnUVkndsp8wHD7SMLZAaBa4RS1g9fAraqQWJN76S2eBVYD5c",
  "key1": "2VxT6MBerczMEGyX8DJYx8BYLXzMv15Ah4QkTTw3PpzYBnupWZM1J8vJeGjgnwpBFdS3tFHzY2JNRkGssLtrRrdy",
  "key2": "4ScjFtG57hwXXSGyvbWvqr71ysFMUj9KSPerjVA5wbyq7CufsBvPk783fc8rdcUuHR3ZvnFw5KPSJbi8dryQrg1f",
  "key3": "3MXzm7KAwg7155njux4dwKbh14n4Q3vMmqiJ8ST4yJf94nutsyGxQyyt3KyVDjBQJzV4WypJjrx9LbPwgt4aT9NT",
  "key4": "2aaB37rwAVXuiogLpxcV6V3vUFt8zeytGHcTTe9ZWjcErq88Quk4yVz3VGK6ZwanrpZWe1kFB3dmcYYCkkWF5kwk",
  "key5": "63RhGGyHCygmEpN3z5t9KUKkU9tkpTSbGGrE23cpoEpTUcoGiaKtMAouWZD2qaAWasTHF1dK1CRBeE2qsRbfQM5d",
  "key6": "2S8W7ryscW9tEv6Wg4ETatNqWFy5ijwYwgW9Px8RVPwHS7vTirXBKYfn7x2MWWN1b1SfeCBeJvxhQCkyBiw5kyw5",
  "key7": "2AruX3XgUQ3u2JXyfd7nrGHJ4fJUmjU649VLnC1eEB8xzS9HFA7aHM792Ubjn7QDZxT1ua42Ud64vkBweaG7Toht",
  "key8": "5ycnA7eYq2RMXp3GYPV41QHaMxLskopRdAJ5Rb5D1HTCcgfNREakb7gXPXtVUCdcBtGab2Wc9EKXvP5RJND4MMvo",
  "key9": "YDX2G36yoZz22ys9GC9kGKsemFwkqkq5bcd3EPLWR8cjBQ27u7PRvRhCKjmrTqgiQx2m7iV3bnUNrGDRWNELCwT",
  "key10": "2nFV3Ftap9ofGGbNNc4c11wGns5wEasXAAP7gWJZXbiKq48U4WrJXBaQfqezfxQKEb1TgjFHvJ2qEvRG3qXs6oFi",
  "key11": "5aVL2Fxrw1kFZipdXSrBXW9y6Tr7S8NrVwBMdYcKFUDZ7CLmweeZxKbatwzGjrF2H9Df5L5iz63PBDSFWZWPjsw4",
  "key12": "4tP3R2Xn2af2E7MjgGfkZSw9WowryBBKRUBASQ2VDRKNQd2Yvzp7ztQCwNsBup4449j7dgeKdGnn9uqepfSpu1kk",
  "key13": "2ZtZFtTdT2RYBfC7YVrm1L5eNfS3ygazzhab4XmsunKaBttc4AX6heMxGF7EZ4gQ9hqU7dmpA5wWPCxtsUbsD7Xf",
  "key14": "2Z8EdxdpxccCiP6wrU5GWxUYPX1UBTAL6yZ2ZwsujTp4eKKmJu6o83H9aHcwFTZWTjwuhyqCYK6KMGUFRG7yRiv7",
  "key15": "4jrzFQD6LQwde7SzucPZhyWrHMJ5cNjnhVRaw3nGWSZ6w1u6dvvddgf8zd5GqSKxFuL98zrEkMUYEDW6f2VM1hbQ",
  "key16": "3EK9ZuCtFS9KaEAMWJKGRwYc3yeAxAuMmuwdn86uzkxydZuVkMEUi8a2khdSx1ZbxU2kqJSyGRmAmexYmJzfpiiR",
  "key17": "4L3d9Vg4bbh2NQaBnHymAbors2ReweB9grUSZZP34C4HA2QbUrZsFZ5vKE4MLD4cEhCAWcSXYxGimFvw2ZujTxvA",
  "key18": "3qSrRhGSpwXLKHjVhmdPLvmcpcKRymaDGxaiR7nVH9iMGEPUmjXGbpE6Zn57Eksrrhhh4pEKshmoaP64dPsuQ8eF",
  "key19": "2ibo7UW1FUFLpjnNrSXVTS8pJk2i6bhiG6EFWN2NNUXVXE2m48efW585jiohvkyvkMFxN37Z3rjykAkRKTkXfR9f",
  "key20": "4WYhpdpK4LNwra5LD9KBa8wv7wzTfYtWKtBKzUft819WDxy6fs1em2eqFpV6hJaMDEQgPFv2Q5UnF468jArj2sKf",
  "key21": "4gvSmfycdU8WUecAuRFVxQCJ5oNxm5qS5yFBMV2J1fPtosYaNVF2zTx2Sm3JFQg8PtzCi1VZvULGFZywRGazH1ye",
  "key22": "26uBUfCwmhXGKpHDqGNbPrYR8WwR85HvQh9JbEUDwbpemnsqiKwztcmxGKrRqFjNPmRftZetYD6o3K9KVhbNfD5T",
  "key23": "5vCCqdzpE8VmR3YLPhESZjh4mY1svxb8NPQHrFigC43D8EeGiuFDJTzdCdvYcBGMu91Ac4QNEfeAbZkaygSbgwqx",
  "key24": "4V4LLrV8VXxQrtm9kMTnjSiKJa85ocuhvykX1cWuvJVDbzJXPWyqyNnA8Zw6G8w6TpHZAs2UTCjJ6zDgdxaQXbLq",
  "key25": "2i4h4GcTEy8cJ7dekmckCiMkSwMyM6bUaXjMk7xuSApyy7b9GzBbassSKX4MUPkai9MdiB3uBqR1giB9yAKi9i4c",
  "key26": "2144U3b8SEBupZcANAgfJ7SpFXwEcELiEEUMvmkSiYh7d7wNLem71qw29xedQMTnE9rNKMzCkdHkazm6uhG87Sov",
  "key27": "5uB8xrwUSqNDsziBD41qyDxi5MboJvopqQJvc9HR4ghu7PRcSeujMMHC4ZNwv67LqrgnhF31m7hNCqAuVtuQX8ui",
  "key28": "CdbYxV6ZdkN6wx91hQ5eojiZp6uCLJokzTVK4a2qw1Accvnz1eMxbPrZd4agFk9z1XfF3oDofRLf7VhpfjFT7E4"
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
