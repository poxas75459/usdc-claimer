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
    "3RQiH4yw8dAnErcGxVjZgRy8EcuLVBhmBtnSbpVXYtfhyXMmqVxuFCrx39Ew5YGVSkRk9qC2KfpCzbE4u9mqSs6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdK5tq3gK9ioYavM9ACoPD3qChi6jjujdAaNDapc3BchgBaBd7FL2mUX9jwHTcVPJff8jHXZoAeqtzHtGmZRtcz",
  "key1": "55C1qS4EbFj4AvT4RBSHGQLsfSEy1pnkDP5BDKkjyMWGJUUDiMfzNr2WvSTziZhQrv8vRn2zXTcioYBRySbeeRUC",
  "key2": "3wDcLoNrZwNdTCxQEWR2qsbqQJEVCkEgaXL9E1KibKoaVCiXBGxsFzsCUdm8GstTiAU1oRpDyGRsweNpAiASLhc6",
  "key3": "3w847vE1VAatzFEbfCWGNSLKnAEd8khmEmsqUNuwnzzvAb4LxGJRo54puEBcKfwZokrtk7CP7MQxssKLfzAPwfJX",
  "key4": "5RMpSq6xqo2MXuuZQJdKeJ89UBevP1WQCMB1vc3BBJwfmtcGV5in8scShG25dyHGRoDxybT13wuZYYuW5j647iiZ",
  "key5": "5kQpVu4b5x9eMC4mtheBM4arKLcbbvJfPvCzKBWYhZAg9VuyYhQtwAQQoFznHXLWEHN2Z9ZTb8BcTWB3VN8Te38C",
  "key6": "4dsJP3xijoLs3GxuM45MQKFbHaGm7mdVmNiS1SPC5hWkRvTFtjkb6VH96HBi8TSywFbvpeSvzagUTogvkQPyYqkb",
  "key7": "amtcRpQHdoUZ2c3MQYSH4rwaTpAKaDHu1rNTaeRNbcXGdGTy8tkjPuqGjDWe8sqtkoHUGDaVopbSf93zxgMtTqW",
  "key8": "41j3mcoFLpm3KnMwLwFPao7fTbBxfqLiTX4kpK36RpDJSvg9phR8V9ijKucN4mwoPnqGyjyVHGk9JWrcyaF4iizR",
  "key9": "21XHToHVNZdyoG1xZVAUxS7rS1AspHrnEH7PGYTbuaQGQKcZWZXmwDnEJK4VBkBfb4cUUPaUe9yvemxLy5F4kApq",
  "key10": "2HeaeCxz3CaLa8Tnvs8ee9HN2Cr75jYhV5WLiUxZ4mQTBe8WJn5y4hxpnm4dDszKHEe7Y628YBCCKZpXTNUTwunQ",
  "key11": "5ShrfQu8YdjrufyYRngoj6aaiKn9wb7TQ2dje42AajSXbeYxryAzcZFZNiiL6DMmNn1QosvXB6ajUaU7Dgutjiji",
  "key12": "SFCZvoLMci7u4Tj9KKg2tobprrSzJAuwCbt2dayxp2Dv2Y3im3wpKDiZeZgUuLW6vsMn4mvMsXAVbJ8uhdgDhk9",
  "key13": "c7oF8PPAGtSn3ezsjKZuRcmnxgzVnczKneZsoecQvpcSTRn5jedCwSrWLZaGZbvwJRcodqVhzUNjxPp7txmgiYV",
  "key14": "4kr5LrgzGccECX5QGvrpg8MsqoXt3nT9UVj3E7yvWUroXAMJtJ98QnStMH9VHkY9bsGqeRHMwUXc5NhNQEmKY41d",
  "key15": "61eBrXT56cR4A9YtiEPtyhn87aj3yXxrvqr9BrC6C6VH8EdtdsPENLru1VdF8iAVJvMWZevopo54QoBp9FNcrYs6",
  "key16": "46ejv5tkDiDsHuhSB1VR6TYEiD2yxjPbVJhxjaPgfVEWdUhqWy3qFCwcMuEPp5Z1QoRWep64HMymunwSN86dUkvK",
  "key17": "33HS2jEGpYpqyTuPa8m8y1v9k2zHEJm6ogKNx7ponE2skUwwSoi4UVzTSNKR8JFkJizLFTg2Zezvq7WRfPdajZ29",
  "key18": "3uXPcbMgZjBXSa1sTQQLFwW9TKDukdRVFL4te7S4PaJTuRCXTRM7FMjRuNQ2KRFoPoMQZ46EeGZmbf7TeBG2g34y",
  "key19": "4PAsDVSJva6vL7xZGwzYqnbQLcrDsayhePLxjifArgB8jK7atyqCP2ZhqTc1cygcrTD7Nuba88iuNBjLk9Z1GyA3",
  "key20": "4ttkHZto4VA3w1ieyGYYg6xxcr7KuAwNRiGdYPtNHkZrdvD8YnxH5xkjmUih4gvmJgoBfhPDzQQ8whtsM78W7vxC",
  "key21": "4BBtcX3qzK8hPr6tQaa99CYWMYZrZALWiwZQSwAKo8WazrLUQaFUE6w9QKMcFMVybcm7NBTU6pD7UGA1jC3wC1pe",
  "key22": "3YLirQpUudM8WSZKrzmFkKFTfcTSbcrkyoxQwoA2748F8zQK5zb2N4ArxPWMpk3MZ8vQGh4eQCjRMeYDtYGCfBW8",
  "key23": "W5hGSMPmwtdYQnzic2xnMg24d4qb2rYKEh2aKrQcPrpKWXiLd1385njrPvZMAGpTzitunndcV5EMzS2P5pVz1wn",
  "key24": "3xoeCnbZJockqYgGwJccm5DtGSPoxS1zQdWqwsjCt2SBzatzPrGzKsLaFy7BajJ57bu2W2o5we18xxymGHzCFvzz",
  "key25": "28PRQSxodfDNMqujwM7nPsxCreoVymAb5NYYRbS372WLev3SGHsRCDBpNAS97ok18vAF3JpGiB9bcep7dVHPCGNP",
  "key26": "4LjQYVER1BD1Kdfd9cBYCTtbFZWPsBdRaW9qUJ9NhpqvkJkv43M7Zc3TX8FLxUkkmf9qASpT9VG8QCnNnUitKejc",
  "key27": "BTUt2njjXBE6dEafUHUvXmPUe11rfo2zQXxPbnXvhtDNos7xgyUhDqfnov3Gs2sbA7hVM61FfcbXkpizNEQ2nMr"
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
