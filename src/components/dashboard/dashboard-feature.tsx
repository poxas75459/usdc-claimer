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
    "23Wiq9zhhxTKQ47DRwPuyYQa9tsckPcdxTSJmz5hunDwpjt879eLA4THUFEYras7vgU136rrx4QwyM49pWLUqfy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bATfz84chryZA2BFXmYwQWbt5womGNPsfNumAp8opYuawaKwwt8fcvV9FnqkLxr7MWWXeoEqrs5AyE63pwdfPT",
  "key1": "3cjXVu6nnvBqSVc9952yfgGefXwkedjnEuZhwrM3hsjRcnWvsc2A49Y33rXHqdjdFbhWUaAUoXKGYiEwwUqpZLeH",
  "key2": "5mtJYKcHT5wJhH3uJvETjvX663JZ3sSvCEjCPAUmPBPK1uTLYV3Thcm8mmityUxiCMhQTfP4UyUq7K3jye8FsbqD",
  "key3": "XXQuV6aAni8e2BqiSRrEA5otfMpoDskewjaKYKFwH4fQKVcCcFv8ufFJLdF2rSRaAGRgxmnqstLeAC6snFcXvxp",
  "key4": "f5FjVL5prQvSxfgYSYMp6kuvXykeaz2rTWUFQfx3k5gc2zSBWMFBhebpxNKDAS6nBiej55JRZtYTt54JmySdxDV",
  "key5": "5BvGbMywCGhXADMCNkDHqARt6qcpu2gxSZ34BmYtgvCANCi3EX1QmABbxXc1NVsENEpF7gV1B19ds2uhczC6BSq2",
  "key6": "4NHcUfa6GMfJChmniAoBmuX8Ye9SWAqLZMBfGnhftWtudQhxrUEW6SvNm1DGK8M4WAvDsJ4MegsruvjyzL5ixV3",
  "key7": "5CqaKzASU8FgWGHL6oTLXiQtS9c3fKxUc6FgHetYpKAdQcRtmdUrVQHaKnQB35fdDHGNUNy5LZbEHixJFQrg5c3P",
  "key8": "2ogsyNyvW4xX4XSkEhanUg5xRYT9Wo4jPey7rkLuzSizBVUD1nVYPXNWuJbNhrjWRTgfWJzTrbPgHFxRvSZoZBev",
  "key9": "45araw5fKGEHvTrhqjcUdfrcMpxZNYjW567XLuxWzKPF9fQoefZT6wGdYp43DSLymAYyXe4Sw2fnwibR7vowgTUS",
  "key10": "yKuNsKjMF7HDqohf67vHvVFjF7twtjYULkgHu2s5wVdYAV6FmvADv7ktpmQtgeeGhZEnrRFi2vXfKSb4wfme8sB",
  "key11": "5KU1XJtaeVPjZyJ92iu6FV9Mg2pbQQ6HBdR7HaP3YZKpspC26zQFkjTXcYEVwDHgropWBc5yGGG4NrnqkmPmfeUL",
  "key12": "3Xw4QXsUcejA18h2kpiV5KGtJrgn6TVDmbsdQJDmmkuV4aiXwcRvd6M264dUdeZV4qc6PupPSorCrwuXC1Bd1oVC",
  "key13": "36cJkKuDkch8FuEtgUYCTsfDgq6yTDorvLeuoUJ7AKQS7ak4pjLs5JGWJE6viAVRth9jjeCyHxGnhVvptU43Sxmb",
  "key14": "77bE8yMnL4aBZCpAjUE1eCHNFxxjGsMaDeXe9P1TEThE89vK2K1NjeVvSDangLr8tvcxZY9eMvy5H5DXWrYcpwy",
  "key15": "4TiPAzDMoYXan3SSXgxi5mw6YWSn6BVrjThnB7mcd9DumHQigvD7JunaaJea1MtRFNftvSBm6YUN4ZwkQTMFVcLb",
  "key16": "124wEA2NHFgo2YG2qc3h3F4F8Hnsrq9Uybu9fcFQG5SVPUJoRcyQtBECfw91k3qX5LNyJfvYaJJcDqdXh3SrhxtP",
  "key17": "WrVGXhcUqoQYUdgaPUebQbH4iRiNFEditX6vpowQTUiswLGdDYnUwn3vMxN2uDJvYcKdZ9ZFkDYfX4qVyTbLNfV",
  "key18": "1278VL5L8pSFNvqdhRcz98hbTiXxP9NDPFLbkt5y2hPiGmPHJA9fD42UPjnZ5mkRkDPZaEJfgC3AkLjtiAmpe9My",
  "key19": "5uDXdLs6hpYiovAuabmJ6cwdajTLeezpaZMLSakNvPRCP5ze7n14yhXang2okfByHjRYsYRuBZ1HoQAeGQUtCQvg",
  "key20": "ZabNRui2MUpXdYF5FzFdSyRDJBgbMHQ4Fu3AQBhkVU4vwe5XVXcjeqYUni7vEH1Q27aSuD9KTWhz5f61oGmkbvf",
  "key21": "3L7VMaziKrUqkJaekBykb7CVWsSNXFKW3K4tob8uMNXK1rLChfpE2YVpQAipziiMoamLsXCuTaSW4BMXfMrckBSq",
  "key22": "A9cs4j1XobXbheCNmqpkagC5MhCHV4riW7JzubZCFNmPQGgy6dW6fJYWSYTXGNE3KVGEsd2rEsWPD33yX2DAqrT",
  "key23": "2hWtb38M7bLpjJaQEeN6TDmj5ZsU9QfBu3cn5XCKBT4kwGLiQLwYFboAHhTGsgkAUQSqmoGcq11b2P9vvJ6hsvTq",
  "key24": "5pi4GSURXfB7jAPYWfnVmVgNyUasX1LuKUqmvgRBPPmnNCjL1gmy6jue4t5FzHuzBpSWPrAg8kkwfvzL6cmHrfzn",
  "key25": "FC5vEWz6u3c1MComNDRdGPVF11WCQXkZhFBWAP8bhyrte3A72oaJvQgzZkS1UqQm1jXxjEifmJDomyDBQopWeCQ",
  "key26": "4UgReG4tUtLyi1ngx5eUUzudTpjVnxUNxZDUzGwMKfjFpydhNRJM6pJ6g2YdkVupB8VHjCvH4MBSCgXFwZNJ71HT",
  "key27": "tPRFA8SKpNdt3JPaGgasMXTM6F2QyF5AMxW4ZaDvam91RY38MsctHWk4nBsyK1s82B8PrB3Ny3oNYFWPPXcGuaz",
  "key28": "4fHJs5abk2PRC6ghQEKj4pKtmKCyJtHv21CoevqWn18FqRs3SstqhsXhu98WkT9EqdTbqCNVooEDg55NxsHBjnSK",
  "key29": "35Eemges9NstUdZC4YqDU8dwM6Zq4baMo3poLWXtURyqAPQhT9xbMramv3JTTofDgN8HDpQCgnTJy54PCn59Vwnt",
  "key30": "4hnkkwU2A9SzbeK1cBFxknBH8Kxtz9X9UgpL5JSagKUsGq9uoe2Zy7S26GcfRXBLeg9TXTn7GVzAioydJt8KBfx"
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
