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
    "q2mTbXzkhE3zGQCFQkmGC3L6t3wBJe9UHHKGZtZmuMmtjqYjVR9hQdNCBHDqfSmKfSW8vufUYcTAAmvPMxU2nFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3HiihGxei16z7hxPFwiadvjXGaUuU3G1CDsxuqzxbwgXWXnSmmxbX5hK4mWfn1d5RbZ69qmMgbPyQUExuq2gNn",
  "key1": "5CnJ7HEV5gK25Eu59q4zRKRT8m4TopHTq3pfA2AFJexUQcgWdYkzBQzwJWdQCmGLnsSq2Mc4WfsGEzZpix7o3ChV",
  "key2": "2tDL2rq6qCY2zF5pXUhPaE8yiRYHXk9xrmLA5G1Tc4UC4Td2o6oNsZoaBNVXfg51V25SufTSmSyxkovwnjvCct29",
  "key3": "5vT4e7omEz6kGkeHfFVUTcBAWKGKsVddUvooTaVjZNbcxBooMT6sMwoFkCZf2R2n3Due7Fqojja1bmRHtznpcTRx",
  "key4": "3mm9pNmeKeTovP3vBoEDLXXRsEynsGUkwpKKLi8du5JK8x6isGHTpuUYqWSQzentS1dp1z4nJAfMaECLVXga6vsB",
  "key5": "46RdqppetuFc2N2iMY9EWfMtHQrBnGnULQQ3tD3kPmisAtL3zsVEXULpq4rneunsrA33kJLntd1AT3BsA2uVxRaA",
  "key6": "3MQSSpMdYAhdWxYuVokv7E1Yoz22H34hFRq8DdRYsDW26n3P1VY8nzZUoYBKpGwzZFwk4hqaKxYc9dyDw6JXTWVp",
  "key7": "45PwSk1CMKFaLPSYtuQzUVMkFHLadX1g11goZTutkdUWpUFhkcZ8abRgLZWozE4cCyjaJsBhZ5EnC8dMcFzBEbJ9",
  "key8": "2RNqZfqYruSsN9M1b53jCmRvkvGxN1k7j4ssxfGShsX3ofEiXZjPrGZQPEh5KSFEcwyPsrqDmRWLwTZyCGG9Dtug",
  "key9": "3PCX3gyhowBQYv9BivFawVmGGKaAzFZbAUtWUwtPHUjCvaSZpNCbRDB7N7sLrhdNnoV6f92npbaexU3Rb1p7q4Gs",
  "key10": "vGn5hHGTdDmZMGstcwxdffom9aDw78RcyYiH1P89iDn4nzK3raD4zSjQqV1Hs5rWEwatpNu3RDAHtnRNkTBDAQG",
  "key11": "453h8o2xXAj5WPEYxuYYantnNyUHgm3kgNLPAYpc2QcXwkKXGKdwFJB4YVKegFRmAzLgDnXGSt6gRnpQqZmDJVqi",
  "key12": "2oDviHtbCQaL6e2N9RQ5W4fMACRpfkztEmzPb4wMkbN3CTzUTispJkbM7jmVYfQeCqedUeMiA88YdZiYb1hQGoxV",
  "key13": "5fDNqNUksFYJ8Pq4HsjvraZSaKbbVZy1Mq8CNRfkinugCiHUx6DLX9cM1s3CPdb6gUm2GwggHcz9xwUGweVSGP9H",
  "key14": "64CosR59Y3LvLDKLxcLyarGjELVXhTAoitGrrQ4MDxy9DK1dua6BgLKoKD69QJ6Dr4ghmFRdvYPSVHAuPqWQi9re",
  "key15": "38oSB2atLB4BaJ62aF27UCFANApedKD182f84ftG96iTkfCZjheVPyaqwSkHbFSUdiJyJkFS92GHeWB26ykgLPqD",
  "key16": "547SjtKY2DSa8E7cb1eQ9ZCmRsxQGXgxkX2WM6tDx9mipmN6nKCvQqUa2JuN2xJazKHCKbFPXqcJChhtmTxBAm9p",
  "key17": "5Yii2qEFpvH3oWzgTSRQqdHRVkodNSh3up1KK99PuhEmrxiRjaUG1Tp2xLNVn57dfBNzcT3HyMfyAGL5FN3Xhup2",
  "key18": "3fTx5rRbT5z8YH9393zEU25QhYm3SUetNKNBAyiYdhiKBTPav7tpXtn7qRSvme1bs1v3LLXPz3r8HEyd1Z5fbffj",
  "key19": "28Z2WKxrQDndph8kMd4ZGfRpte4q31SugRG26eeEP1kUruvGmoodct26vAGYH3vg3SLSrvFgC5RbntpiKEj6YBEC",
  "key20": "2bh2YyewnqSLvEX7hz8uKD8qwWgkTaVuVkjg3avshHLoCUj2emgwTXihuXzFz7FjN5PfGTUfFnafDXWh8tSH6zep",
  "key21": "JPFSvAPtaR9EphZm2cP6STdi4JSgrX8sghz8UtdCKyKvpknYbx1QZwCwcweMLxcEmdejBGS4moshzFPw31f79gs",
  "key22": "x9Q5a3GKFq7Vjc62bXqCwKYD1tB3QkXFFpRyhZEqSaXHSoVLkfyeyC7yDSbrvwbqrG6mzPNhD2QYtsbXVoHJYWY",
  "key23": "3K4rg7bZbBncnybEVhjHnyJmh2nRPf9W4d1RPwKReDY2m2fJQU8JhmE4ob4yxR9ahHXYy7s6yQc48sMox6FkLMAZ",
  "key24": "2ayveRb7vEpVaxuUkdsJVLZknboLAzzSVYRyN3kSZ9dP7MkqbDNiemBMFVyeb6fPdgimrjQ9VEgFqqQagVm66sUX",
  "key25": "MAJKJz6Ei4ifdkj6E1J5YkMbYk4DPEAP5VW8BdQMYmqbrPtR86HonJ7DM9B9kyxpYqRtH4sSibmaBpYRukhpS8d",
  "key26": "NfPaCx5CPxEW5XzGSMZzYiyEnf34FV7ae6jSAR4E15GpjKFKwM6U2etuQes427Dxubzq3rbbCHmCwS4kkvYfEh2",
  "key27": "5Nwx9BNzcTg9u35AkCvXU1TMu9Jv1jQMq5V3rX6q84tKFh1oh6hANKYRHLNi5YhzRNcDb9ZUDdZRmsa83geNiD1m",
  "key28": "4RL9WkiUp3PKvC1uppPHdssasgxSShGQRvyqeC8PXDyr4AbgnGB5pQPce15SyS5Kygxv3r8frwVfTatpkhnWZcyc",
  "key29": "4s7tJwjVVm6RH1jwC6KTbFtymCga571Pu22CubfbyCXVZuUyWeu6bZDkNNmBoNRXiEYfEcKKxXgqBfRYysz5o16w",
  "key30": "3faYq6NQV9QTj8FoEZbhHQBJBo8KLJfWFNbEktudPeQ2gMH24fFQJwBbghcz97SnFFxiNmZ5XYj6rekaLJDehZHG",
  "key31": "4vxRse7RPnDh3rDM4ngzyZLVNEN2YXgDz5Q7bbVYsQukao2eT1mRWbQadgRJmUc7FiM8c8smzT1ebtxRVnU8QXsV",
  "key32": "36zNMT8YGNrFT1k2eDvNFUau6TAwg8yDh5CVBjREvipXNhEBDNEMZFK9aSNUNtnYom1cWjts5LxpZPZt7DKepedR",
  "key33": "2jTnXDS7yRDMZT5Pg5E5ZKJLdTmB2uAdfezUchSj4zDYXhsaZ6cGFMK1cRS2kKmry7YbF67Zgb6iKpV17EeHAW3H",
  "key34": "4btWofvBLQpDoDPSMGK1AYBHqRT6mkRXAxAJ9SB3xJitn9iGpFeENgr5Fy9vBUJ3h4tQZQ25TK52iefi688MJx3",
  "key35": "5FKouDEnydRov4PGk1c1QR6NsWUwfb5viMPeVgP9QuGJ2Th9YA66zkJX9qekDC1EfrBYMQrFMJ8gxLWrK5YpLAhX",
  "key36": "3uU4A9sLdHhKJ7kBEEa2TQH8dDYzNpHHKNToGHwJuSV2Lrwre5wsHd6fXAKWK77pJTjbyAeML5CxDwu9GzZKejyT",
  "key37": "42UMEiUyCgiE61YjyjJNq48CiN4xMXZ2sxQj3VQQkS13hjb6squLdqfXUBTdLZA6xk48KEtomdB7tjVgTHtZkDpe",
  "key38": "23ZzgJdeERds3TB7hEjKQ13kmn3gaBVxHnKbKWmvXwe5QEKyG4jmdpcBawiVLwYsYpkMhjs7VB1BPXdwQDfkVnhr",
  "key39": "5vrxuk2atetMfCqF8D1WBubRXhUuAPepKCYA28rZ4RZvfBnvMX1RKxaLvQ88KHumH51QFtmPD6DKV2kaafDhZd7r",
  "key40": "58CZtZ7fTiLGRErTdDCZu9PkCBh6UcFAnvwgnQrWn1EmGSsuoYnxK6yqpAAz7d3wqsfvKKXYnVs714ttSkVZj2Mv",
  "key41": "2nieKcJdcT94ENsKQPhVujG1R3jpmqQHKnJ9uhVhZJzQJ5GLbP2ywvztxxKUjG8hAM7Knw6yoAemhH5rQmGG1Tr9",
  "key42": "3ETiFhkTND85TjKXNgJBY9fi1csoSKWUgRbXk4k3N1EVMX77WVg48aXePgqyhW1ACAoDwcu1wkSbWJRBYLUwBQmA",
  "key43": "Ka6motCwThENckcgfabqm4QYHtZ36MJj3wTZ8PJ5783PFVmpB3aCB7STLAHq5MVEnwkRSUvvEk62ZPNpQ8LPhAw",
  "key44": "3U2AFQFyPvKAdHtgx7J3eUdbNSBYKbdmXRycYLugNUzk3Pg2Hp4EQndi9MFEx1fH79gdNeLzDYGGDph3pEhUen9P"
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
