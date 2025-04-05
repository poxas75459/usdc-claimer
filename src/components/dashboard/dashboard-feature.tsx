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
    "4F7db8rdEmA4mK7HZ3Hm495p11Co5QznXKRGeeUkYiuoqQQTKeAoXuN7w5KBbfGKLN3WLXvqdkZ3JEtHobw7aPjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4snM8suEWQ4pwH9jLqofRBSKnWuf4PKVStQTUra9ZNp5AYTxky66k65UFDzvaj2buDenyiczzKR58feDgzRVdq",
  "key1": "3Pv5Mm4Z7Zputdyz45EFhXKKu7omaYkyyWJMwY2dr1AMdSpcrG3JYLvaiBkxK9Avpp7iExxRPx56vzVX5VzprD59",
  "key2": "4BFgWABmhRfT6gVdysKNVxwDDmcLZ8RiUWcXWimbtdmjejcoaKBjYXMiXWhXmZhZsjEHUh96eWaatMENtMGvXpkP",
  "key3": "2tVhSTESbZbRUKJAkxbmWWsdoqXBK48oK5GU9KxMYJRDybpEK2yzomQqPfu7fnMf3jYQujpVnDitwsntrvwtDE2C",
  "key4": "441EsjqmpU5LbxQbHr9ngSkLs45a57bDj6qbjdsSVKdjeWmxSmSSAUBUFVVp6RkMG2jS5XZDXzhccHsTH75LunjZ",
  "key5": "46GQn295pxhQLiv9aQdLX3BAcmVbXdDo16RESv4MV3P98xVSJjyp4bb4t2454MzcMpv2N6G7w9GtQRPQbs9prpGn",
  "key6": "35x5hnzMYFfjLZdFQEUgzokYR2Nb4D5Rv7JLqPAeiSQVP6cAriXLWoRS6kU792jPvGEvKdRXbGhN45MocPraMdb8",
  "key7": "3MDLeDWu9mxoADGLRqwC2Q1x2eCHTryPYNy5T6E12WnhBFjATx6DtABsHEDTvAKG9FT734RYmRtWnXHnsPk86jAi",
  "key8": "2sMPSDhTngFmFJzff9Z94wpzkjY5CTvnjjUfNG6NxgpYYkr3qMBswJz8sBwMPqCvB4rn74BEUnoJoEJyCogsfLyd",
  "key9": "5uupvE94U26QtzxbE4dKggYwQipFZ2mg1j9B7qpwb469Znmc8kP8CAhx5pDeMr77ugYKohaTvTJB9ZUTM12QPUa2",
  "key10": "2LioTeMDkTsP8NmXkU6GP6xnuZZVUFM1UBZJGoesQ1qe5Vu2XuoFmXqqZ4NgB8QPPiw8WyTshZiCRpeJ2gHEubyT",
  "key11": "26Z4KkKa3cEWyF4kmhLwyVYmSPyEBeUjj3sNSeDnCXxKqDsarK9JhsFA6NArA61ie4QBMEb4eGFUVEqACzBni3WA",
  "key12": "5LYBhFsBxyh1d186aoKfu9BbKL8b8Mzqb2bybEZNvDTm7cxKiVJfdiRziUaBEZuxXGUBuiApGFcUaVA3uvkg3Cqs",
  "key13": "33xdAe6nGXepinQss2PhX1B7b9omzLUdNXHe9DvJw2LuaraNk6dyd38CZXg68xVYunLsXkwuiNBL1FxEpHZ4ZqyL",
  "key14": "DkQTqyC36ixRF2r5B5acQSMbEQjePBN1BqkULFkKCmJs7vC7Qn5sUJkUH8LyGDLkA4RkNfJzY5AmC2Wf6JeAUvA",
  "key15": "5NwNpDdFFgSme7yU8QuswSCBoNQPtNkCkfsnvRACVBqwRvW92cGm3VGDjBHvrhFy79B3AWXz5iUw3nrmQKcpifhT",
  "key16": "4QsetfLjGq1uswRuceY2igJ3HVcLAGHcneYdkZkoEXFwYv4RyVP9sVNejrsDMAQPvymuFmHh5B4dvnUbDHqEsiHR",
  "key17": "4FvWMS4LgVmz3a55Tmv7KRtVFzwgU8QAKHpTkhboH7Bkuksh8GhxtrxPaTFQRyhLGEurocRin4FaznZmmtm72vCv",
  "key18": "uZg9qQQREoSJxqRKVwxwCUQwh6scT8CH6AMV4RQdQcwKPpE1YAViZsvUdAVLLbDdsvptSUU3iBE1bgPEGcJkjpK",
  "key19": "4UyfMdKEuzj4bUPvS4xBL3YJZAqaFq8BPe11bpHthDpDRnxkzCvGFDbaaiu9FJavPtKCDVcUppuzCWzuK1nMj6qT",
  "key20": "3RMU6E4JPuKJfLmev1jQSWnc8EEa7sjCyQ2BwWjpGoD2eDRuyXvWHVQF6NH1zEbST3MWFAyanbCNxzjyz1yQoVtG",
  "key21": "VZPZwMUjt9xAFx9pFkAqttuxxWu4vky2zrPWfVxk64bZPkvLhPoZ9B4WneTJL7v3W3mmjtFnRjkfb2xQ99zHK3c",
  "key22": "5FLXYR77xGykNbNzSwiCqLbAcB4cutPdg2RdF2irMrkfy3pggbN3FoniWhP72pCt54yKur6gNQf131hEdaCUwtp3",
  "key23": "4G5Fz5NxJ6XhQU9GvBpLQVEGUq7VH9JDEFvtphaWmCPM8oRt7z3pn6MQNrGj6L1a4YDhr34zk9BMoR2UZAWY8So2",
  "key24": "2e2PFVJqWYKKkRhU1rQo1vfLkSTxPfgemjsExpjCgucDbEBqwDDm34ZYUP4tjrQueCDkfVArhx6Xv1WEd3kybN2U",
  "key25": "5mK7jMD53WEhFZDdPXRuL9VJBDmAmdRgWnjnyxycUs4DZwgGsnEL5EiT8A8tCnz4hJzxqBRputoQ7ghHND9LtRAN",
  "key26": "47sXFXY4dfRzkHn15hLeXnFVttaY9uqSrg9dFWkvSJvKvM9ZSkQCEWRCAvoU1t8xzdbZSGXGChtNjFnBrhQcQEsZ",
  "key27": "26FTH8icgF7Nc94E3t8XhJ9vpowFX1EPvjKya8BoBZRAVGB8JQSKtaau7cTnoReGspktFFjsBT97eQYoQE9fpFYM",
  "key28": "4UCAHFq2PuL7MgSRCXC1NL8GTtoF92B7PmX5BMavaawBFbUEDYYs4xq7RZYzr4gKm888zxsaJBNpJsT59ggk4hPo",
  "key29": "28unbPeL2divBbM4Szbj3Zbm8dQ78pNejzQUkYSGih9oD8mdxfoTnXGcwgpWMvTSokULfuJPoh5i5CPwEsfPPB54",
  "key30": "3i1AtxFhx7pVyYPcx2QEqwA74izB1s1tApxDEv4Sy3ZYx3FiS9rZ2eaadqTH3sUqw7wDESq7qUetcgg7KA8mYXBu",
  "key31": "2nabzyqV63HQJHagiW8fhCtSk5iKnKafDSDPUhdNau3BRyZ3HCh4XcC1sctgdwdC2rkYCZLxoAXkSB4N8dqEUthW",
  "key32": "3SWg7Gg5AWM3Lik1hav4YubgF9mrdg9qeWnsSM8fqQ5BtL47mMBpWc2Khyjva4658mWAZE458kwvF3G61rDG8W2j",
  "key33": "P4jAgDCLMz11oVjDPfYDHTus9741hLAkqVxoc4YPR1RZZDrBo1iuWDM7wE12o6UrhKLLktkrU5gNwz1TrrtEa6C",
  "key34": "gPYPyfWBqkxyDGwqLT9qnyiYe2yjkB8Nie5uedbm9niWt2Lfypupv5G5R9Le7EvdWEYi9nLwg3guiqZnM77Beg6",
  "key35": "4aR3qGVQruqEzR2LYW9SipTyNapw6UCriDM1Ubwr1H95UnpzCEHS6vP9NgHQNkD4s9UYBJP4p1S63MLKziqNHLh7",
  "key36": "25LudvxNCJJZ2k6CnqVYRKMbCjh3ncFvyot1YBTahqzjcozG2qm1whMeRwQtxRcNsuaZFaiH3FC25KdZjyTfJGxm",
  "key37": "2xcymkY2fHWpqvBz97tY1X7TH7eAQzpfbvowjeCg4Wn38asXystfQg5W2y9osCyBgFTD5Q72zLCuTwp4yQz4zN7B",
  "key38": "5xR5mWAQbV1VB8VnKd88WCmQfC7ZEugwJyVt6HTnSPHz7Ha6gHMhu7jpCUhY2ESwJKAnCRi5teukF2nNj7wc9tCK"
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
