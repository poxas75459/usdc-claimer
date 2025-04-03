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
    "3MrwtZHumfJna8jjaNrDSsyJ42TLFuw3WTeHjsWBRb3YkcBjbrdsRcVkyZ53vSKqrQ3kLpyAAhJ59z6aaFFWrSdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skyccevzXiJK8YrQQrhhfyCe6MqXFeVStvarP1xyvbVJXXJNJH74BxY516CLY1RjcUs7sMyY23HVT4vMm7qmoDb",
  "key1": "3xsZBwoKewaHGh3njdipyEJLMad6AYqvdTTjn92xUrv3mctUnMmpZTMCyMjrGVZgfjPVz63X87HpLo8urf2rTVcq",
  "key2": "3Up1b4fVekQwdUQr3bQkc5EUhd1j3q9qAd1mc59ebnuyjHUMoVgVqNk9eS8ztzt4LpUsm5EcmiPrymVVL1C1tGEw",
  "key3": "3dW6X2TXWnPzTTtmNcAkVf8JCHCUnP3Va7K5bdfaShHpYEEFC36uNnYb5R3WLSGpZgt3dGt4s55GCmXuewS6xpaT",
  "key4": "4B6q6Pf6dv8THXdx7NGVypgxunGuBci2aJpuqZtfrmvxs1WJPFc6WvBZCHjfrTmEZh2BpdpY4muLhMGggfj5hDS5",
  "key5": "3zShMkwRALjnwTA5gocSAtWb4GMAeuPqbY4jR99yegTFTqMKRTiJYWWcY5dGhh3fwrgY4QnSdzMXCjV4re8eLkPC",
  "key6": "5w7fi7V9B8EXCT7JmAcSqwiiUAAN28Qqjp9NAr9NkbrXi3hU7QvvR1qpyHaKU43So2X8Zztrd6BWzs3r2zn8TAxG",
  "key7": "3Y5ec4Wdt97sYyuXqLcCAiL8hD1XVMZDFuEfFopcuRiX91C5LipCLQD2oMG8JkrkbR8b3LVdV5B7hLpHPthwAcez",
  "key8": "4SzGDZZcifZyk8T8GqnWHJQh1vdLyt4yg8cETrgPB8wJYUeL5NY8ZHAGkSvUw3kP7VTgZue8uFGV2pcov4WzKqyA",
  "key9": "35mT4HCLmjYppbK7Rn8AV36LgNwTTmsd97go3WvUmxRSc5dE3nWYpdH3J6ExetP9gcvJ37xEAcLB9ciQcSQBskg8",
  "key10": "4HxGeaHVZC3Rj2d5Rr2b9skSdCuuPufEC9RBLobowcneP6M8zjZhi4pHCNZyjaLWjhqbYTELXKT9L6TdydcBB2Qq",
  "key11": "5WpaWf8zi6Df4JLutxTczxYH48VAVCjhP4vrF5VJmaDPttEzfoQQbjY2ot1igLtNbsx5Z5xidmRHsG7DQfRWeS8z",
  "key12": "24dyVyqL31MXV4A5EamqKt3A7g6vZ3iLpxCSZH8h52L398rP4RfTjv2cEFVtUnRtdrLKxtPjLMhzjvgpD6x6De3k",
  "key13": "4ZLUAbWAw4RkGgo9GQn7MJhg1UdK2Fnjc4ZkHSj7V3EZv7Cr6hMaFc1vbyk5qMR55afgRDkxqqboZhyX5pgYy9Fi",
  "key14": "E5UwpSczwFrPsFs3C8oFzjLUynmbfDZFJQp8u9EeocqvpL7bA2DtNZkfsWZ9j3Wpng8WGtaxX5XCNE4eu1q9Bip",
  "key15": "3v5JysnjdKo6BNn9kr3iB7LBvS9WEvptvStdW2z2qwoS3arFWxjGrAtG836a2mv3zL2pLSMJgJhTeH8auaFisR78",
  "key16": "3QDSZkQbFXiFxRrNc2bZXWgNVXjVtMLwY3StAetPWZ6Bb1RjPQGnkW6rTQj3uFW3W3LzCWWPDU5pXpp71T4DNGJ4",
  "key17": "3Abnm2aKyUR6SwvYSPsTEsMww6ZEpAHg28putPGqPmCoqReQ8Utvg7vEFDWiAUVVYZrJVjeZJTkryYpRJ7iPP3Z7",
  "key18": "2AvE9ajthibQ7Fao5VeYQC3C5RCwwExGufnFCj66iWcpvzSd8WCNSNr1K2oMukv1WWVQ9wEhMhBTo2KGmoj4NxU6",
  "key19": "5veL6H8nxg3ZH5n2KyVRLbS4KNhKb18b4yWzbovSCsQtSoJ3hSbQa24kHDE3aaN7vDbSu8V7fKxR396uRQs4Tvac",
  "key20": "3Z4z2kccjBoPN7aEFdg1XwXnoFcTCtHXpQP1u28HM7HhWGqJzg53aNUpa8Uf5wcMHnR3Pb7yhfcZZiqoqMG53F8L",
  "key21": "5W7AV7aM3U9A9mx6jHzu9ifcy34NYK3fKzht3ZLoqBoMs8BMKYv5fXMBmDSU6GKamyzAPrPwWT4bAoRTUgzqH7z",
  "key22": "4S2Yug38GQm1qDqGyp8fHuA36Wv7DnbgCv4MzP77s3PLeamBj4h7prTKzHzufDutiPvHcTJ6xXSj2wAF22KPW3mW",
  "key23": "3MnVBZaTekZ5rZEpL5pBxvEi7atfxq1AvmrdWPCETGqvKEkYZk2SgowPHqscZ9GTM1wcUqCPqxcVZpZgHAhAYGpr",
  "key24": "5eun5QZx6A287RYChEaoSCCF9p9mX5UnYEwFoAVdkUrePAh4PnHf4hYYViNrhjtEECwtGChA2pqLRc3e1xoiPRi",
  "key25": "2CuYYP4BbYkxeBXLg9oqm7zezTwSyoNHVSLKWPzj133XMooF9BkNzvmiestKaCeFPGUFZNeXS8MBGxgVGdUxxRbu"
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
