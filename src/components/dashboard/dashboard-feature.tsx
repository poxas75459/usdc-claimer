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
    "3Qe5teTYid4BmQvctkBiE6HdrGqNyZmRpmPkxAwujbuDLdmGcUvRuDdYkf9hRombebxqggb6yGBdkecVinSjfRRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ma4ka3uWkNVx5nWfowqQbk1v7yc56D1Rse17sAvuWphc93MdCzgXSUUnQysuNQGQaqskzoK1mdYthckKc9bobZC",
  "key1": "8Bu2Vbw1HHSC6gRUTxioCmzf2mVKmP6oLpCym53uqYszpWah5ZRoFxD1ymrpeqybzdKSnnN915B5WL9M7yBx5E2",
  "key2": "2XTyYzGkYJnXskZf5uyR47Pnfn2M9TExiPq8yN56C3aakGspCDjP652X7NHw8tY5JEFbAdMmtmfYiV3iNVtL9xxJ",
  "key3": "8vLiHxuR8GNw9EgYm8P8BsMHSe9XpsyBN2CGAuPpTxGARY4eKCwyvqcMfUftNeCQLznCb5HKFzADjuMeSFm3aFr",
  "key4": "2t5X9o7QcakvkNp4vkXnYFpNVtFHt4iYHa5AfiwLe2zrxiXAPLnE47LDW9rkeq9dfLct85HHhnGov1h3pQRrRrto",
  "key5": "4DZupD8UuzTi9ea8zmHhT9F4kbpccHFwKbHCfTX4povJ8Un5oqrPfUufpN1K93XgDAdp2gS9KX8gvrbqzTJjHqQd",
  "key6": "9NMN9NC9NMMEXn1A3Tch18ysGpku1LQyy5zAtZm2huExiTD4TQ4cuAQwYRgTaKkjZmjxJhfQYip7KaeUxH3e46y",
  "key7": "4WmEMnffNE7rx6Gg2pCu9ojCEJnU3KkhU8UgjTerSvaSa2P1DJyKCyqcKmTqVMm4PWqAnJUc3HUcMEaC7ekyENHz",
  "key8": "4CaNq26PgYBv466QCyJtLh4Cn5Zmd82Ha6Zih3SK7qgPw19RCnWYca2dycAAeZ3njih2Tetxh2JTuPHwtbaDUXom",
  "key9": "4tnnrpX7K7bRoqN3j6h4ZA4cAXihGXMivXNsCBdm1CSR7Y3G1mahTDjpXtcsidJEPdkZxpZ6Jg4cfFMNmakZEsVk",
  "key10": "4yg1WwKZV9zvDBHY4FNzHRpD2CdsVkXNXHdz7Tr3pZVfqfupYN75umZnyNxuv4zSoB1W1BEp3m5ATuCHTA52of35",
  "key11": "4cUutWwJ9ESX8L6epG7vJ837MJt14RpjJrecv1hEbFBBm4Xj87FZL6bUAQjCCbqSayeYsS2rigYJ6yFRNcg17hot",
  "key12": "55pwY1rRP9U7yTe9vhcg1BWWCbuEHX67RP9dufEGComKmkGgqDt6yTjz6i2yTukau1C93aCvZbhBUtiXCdpr9CVP",
  "key13": "5ELtSbwTvnH8pJqYASGgNoBFZWVuC6o3q5X8yBrn6EkoTucGzVxGxrPmpgEvzAB7gLQrtHk3UQDfZkfpCR3dTg8t",
  "key14": "5mTsRT5XU1htJpDSydbJNF5CghGBgvPuVkkQCSoUmaed6UarPyM2EBVEAbqNN3favg4Yg94GqUsqiHqLURmdN568",
  "key15": "3Z2ntmK8H5CoN8TeWwHrgSwxENUDYVVMX3FAJJT7kLvgAVwovBJBTMACpVorZZtEWpywPqc5D7JCEq5GLrCWuKGF",
  "key16": "3czZgkZzUXSBcc7xFKjYN7po4z9czRFGjKdc1Mh5RreD3UnyJMjCdDqxroHwtnjrBS5y5RWARXUp3DWwAxKVGDsk",
  "key17": "4Mbc7PJeQWpcEtddjFdNUzNWwG5NLisbErXWGDUjWqQBZsYDyUsyuqNauX7MzZdBM7Hz5WJvo28DHpDbqnd8SDSd",
  "key18": "22iLEMgxBmGkyBpiRKrSHMUiZwkPyV1AnaiRFrQSVbJSi692bv9akUcawMUq69iuznsrHNLnYUYqj3tqSs5NCm5R",
  "key19": "5nZv5cyAHiRzBJ9rDZx749SU4x4j8aw4xvvsbwu5EKgzVLJku8ddFh83vAyULrWjU44mbG82g7dbpWUdjXb1EZTY",
  "key20": "aXqefNFeQGmAeRtCqop8Sp7NhatqGQnhiMo8MkPCtFXSQMo1RgLk2jyPLAmg9f41RmwniRP22dXAJfQBu17Wvtd",
  "key21": "2PXndLUrvPShrtsWcGcwM5unArMyLJg451Ztq1G5gPcFDFJqMNAQ38nyKxuk3H61WKrwtK7PrZrz64bvjzT8X5Xg",
  "key22": "2aKtvsehngTuGWhQMrmBQ7MN52qZgTTC9HTNFREmP11S7gPuHLueMknb2UFbprVyJmpGTdgAFVts6azgkEuWXwNq",
  "key23": "3rav9KYgqNouG7kst69yeZuN2j9rG893Zq45aiqfgh6dR4WdeYByZSzDGDyS1xVNh6zJ2ffMfXTFf4gFc2xwbGCu",
  "key24": "3epCMfEB7kRWhVcjdKZsBSF5yLbx3B2rD33xwKVdzZHcAHkRZhBHHzFj9jfZqGeuzHZhfz4rMQszEee8gQg2zECS",
  "key25": "4BaGZHtfRxUuuQraLFBr4ZHmWta3G8zEA4sbDoq2cMDZWtUjzormmAQPFF851sdnwkS25DVowmYtKVTKPY3REiR1",
  "key26": "5yQ73uc456aBumLyvxA2aica3XFnbdKbaTt2sv5GXPPrRMmc2Fkb8z21r6towRepHmakGGDaujYUYdXQquyRNWbN",
  "key27": "3qqd1wUBabu7J5ukugDapEs1PJNDFEvD359AMJWpPdbsZiJhgLByF3PWv4YGvGPGpgTjUsNxgFa1q5x4nst3jhmY",
  "key28": "4cMyhxHie57bjjZJH18PSmmrAx9L2cpHJzctLsVEjJUtxaG8i6cJMm8uXCmFUqqg9NN8bXRpqkZ7VfqwmzphteYw",
  "key29": "46Yk6juoV72LZT13Paar6pEZ8g76YWoFpixXrubtUeoA2gHWGvRPSHf1w73kuTmZ3HQamD1hvvFVZGPCJ7GhVqHZ",
  "key30": "5jTHW6SmrhFrMNG8wJ3E3XMCkhkVYNH9XpnNX1GpQpPqu7uvibMnVPu7zNmzKtHzKoK6RhntDjsWBqwQSQSJ2w34",
  "key31": "LRN1CWgQRsSmm761ikF3aV7RohphCHbNynE7S2ggUYnZH2Y4Kyaaxz5rfbn7iofvqUw2B4nAzfXcfnr4LxPweL2",
  "key32": "4KT1vzrwonAuZHMkuMsPwYShE1BgtPaW6m3YMdnfAbGSWJeka3GEnR9JJUKC7w6eUnxNZUwkqwp1i4gygZZ18NE5",
  "key33": "qp7Vn7zE4mgYURsyKT7V2JvvnmHkA7Y4MQSSEjaxb2SkwyhJzZMe4Wxm86iRQC45xCP1J8WwPRDss2hW4n95udD",
  "key34": "5PooeZAimPWDidgYPp92e4KEfoDPGYjoRyAY4VUpEHeeCbR33Ls2CqFodJZFa7ywTXB5tswEoBtE398VSjc2VGav",
  "key35": "5SGAfA1awVGGYmVfJyxqeaVKVPrixSc52RSgJAzRQNASa3JFEwW5rUPxcnet1w7etRfqCaBYzAf33euRAh7wH1fz",
  "key36": "21QiZe1hqcaUMqhdXR1vXtmyZsxsPCW8zj8J3v8wA4dkqAMBy6dL1X9ZYCRkw1dnkn8qAnnK36f6B3GR16QsP8KJ"
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
