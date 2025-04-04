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
    "35Cgi4KhV1APWMycbfF3o9g9JzAWG1troyK8XKZLmHVif4A613EYHbTwFYo8U34EEXy68bHpnbn4nG9XCMTfBng3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iu8jtbgjR5MGfzGKs8zxFhjjUcPo51WgHUzic41ffLTggwzfjVGfjsw7QUX3v6h79SwFRLBCSQ3GgwUaURj9u54",
  "key1": "2WV7ddFXvkG2CfhDfMMVWi17Qr3eHqnieRMfcEznkPXJkTXe8adcPXRizZkkFHXaz3LinnwD5SP71hmgUbPMVNAw",
  "key2": "2kaUqdpEhLg2BB2BpjUv4G7bxuMJEiP7F6AdgVvRrVmBrhRZxKw23GArqey1dQQDAZG6THoPCsSRqC3nSmTAnoLW",
  "key3": "2wNLaVE72i9Wn5RwL3efVNsqs9RqAXZTdTs3FMaTdnJ1batH1gaeudBBPkAU7p3X51EVUFvEYXmDa9eYzRaN5rf",
  "key4": "4yie41QtLEeABuUpSHMhaKxHoxU6DKqMLtsdpmhipc2H58ar8sH9wJQDq8ENjsbGA4j1satbGbkj8AxaKXiyu5pN",
  "key5": "6FYk83gpg2HGboBdfoAGjLjmbuLgH98PqqVy8fBX2DhWYwfYtMseE7WiKrL8mMrMhCKdNwQop61gq87WoQ9bSe9",
  "key6": "2F2ArEt9H4WXL7oaYq5PUWkUKWbU68FFoR5Ya4HcdePBaBQkCG7ty9g5bUEB4N2BCg4aKQeQSrvSzkWC5RJsmNbU",
  "key7": "2odcqJu39UtsY8XLb6cVhr1Uh3BA4GMq2Boq9GuFznYX8cWn9ZSrYWycZUwEuUQjp6exS8YXrx4oEsd1hUn7tWkF",
  "key8": "4VBVTHJQHY6Yf8AmbL1N9RxrKawSVWrxx5LHoQpCi6RhpzNehGBe7Dej9nfLDsSznHcMrdEsRVXzvU9fnqPbku5p",
  "key9": "5ATChgys2PgkdhBTYn3Ecp2LjbExVJFNHRmCoWMVthDfN6n77J8pLzJnn7Ef1hALduwKQUj3MdYn2x8U62rfLaAE",
  "key10": "vLU8k3pm8anieW84gpJUjghVcsr4QbuGmdTDyKy6qbp456gaV5ZVSTJ8Fx7QMfFanvfiF4yqxSRggYo141DGmGP",
  "key11": "3ApBQm39Yz9DxusTNQYUesrWAJSc9rXLQpZ6jFBNyhQpMxg1iACqEfx2dVWsgi3cqUeYtRHDWAiKuetmzd1j7pca",
  "key12": "YX4PaE7BjZ1XbKwrxEzQeajhuw17kAmbd8KaAq5x5mNot7AFqRApXnaPAWYMKRk3bbzyHgAAk3XAfKkkXQgC4Q7",
  "key13": "K5U8wf6yT6yvVaLmbbNrZbYkqHGmK69gAaHqoVpnZbEA1o3z6hsR1zkgCqZ6rN9qnrW3bAcfbQd3wWWPo1NVDow",
  "key14": "4LGb4imoGGtNu43PbUhu4mSitsVWXrPYBeFoH5xZ4oih1RfEtjyAciEq2nXCYQ6Pdq9qCbNDmSqTsChNbnHAuAaV",
  "key15": "2VNT6xqYvU2npjSNMwkMtFtgKhEdDrsGdtFS7akxTyTmC5hNzvkV5zrd97JHCUe7PWP5zDMtx1xX8c1h2HSyGRYL",
  "key16": "2kgthPNXXHFoFjc1mq5jxwcQCfgaXCVZwg1QQo5pEDXgtmHfJjAP69R99Y62pBv1kKNj3rwH8YW69BBv16KrE6Ut",
  "key17": "3kYrvjyiTCteLsUP5RT7tBTE44WEcN3T3BwXhzwTTMMqKZ9QkR2YiDrqBLi9HAJSxYDF1cLYWqN73RHojy9k68mx",
  "key18": "3jeDTmJQ8CpV1qe29ehtP2ExTzGPaqyEqpgzM9x5roUuU6mRZZsu4T7bpEDnogmWwAqEeATsiVYPPVooBzijmKjd",
  "key19": "3ZgpdK1kQHYQhbFag474rcyfyBVRvH5vBFyGFwgxitAn9TSLjKJmM9qqTrYfXKv9tF5ayhwZTHdHfq96WjrEx3S2",
  "key20": "5iKyt4tgRNmvoH8vF9jN4gTzVCFGtyBdxMGKdq8XHcdJPJmJqvwVz7C4xDz5G4oh6BzaGKtkMAjQA7h8tp6mQS19",
  "key21": "2Yef9EhCHYDU3Yzu6BR9ptGPKaeb16kkXHHVEvLXjJ14p3MhJFxSFMf8wvhRAG2wjZAAKGdMnnyyKncrwWDQusVc",
  "key22": "2vsAXvdSq1wSsMPxybMU8d87e2Ym5YM3U5av8bMrbKeJLLAcYPn3JHpvycZUdr6qZWw7PJrmyNg2Wz6BSzknKBoc",
  "key23": "4UiH83LF51r8vPYDbQ8C59FZJWrvJ8bkXKYjtv2mwwcXanrKSvdPWpLSr4jEa7W2gh65vumq97hDrfnfhiXhcL98",
  "key24": "5WF9jQUdqGzApwd6w6hXWAgHPDwaRd4n7cQtucqANbAhGWgQEjR3P3kRGoUHwG4WgeQvfK2TFioz3B2XFhhu8Ab6",
  "key25": "5mRGfkmT4Nfi1iBEACK3ecM9yYYLUGPjPBnjPgnkWd5NBRroWgS57VBK2pAD1RDoJchbJ3s9vCsEur1LWVYDVH2Y",
  "key26": "VpPihGKXviJxnKNNgmaDK6hkbWJQUakGxjgywiXS7v8oGEHmf8iFDSwLv9WYQfAd1Q9ZEAxDQypiemgd6kYYjgt",
  "key27": "VYM2Zkvrn1QPZiYM5wGqr3F3fg5VVM5DMvfFnaUYde454sP277ac9MznoHY6RqvVLEPm3rRRr8nLuF9sQDamvjS",
  "key28": "2Tpxigb72fGwPTSyfuwVfL1KDAKD44PvDVz8Bregud4seitf8hYzTj3WSSnheqgNCRosoXBjE4SxzayPYoLvx8cF"
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
