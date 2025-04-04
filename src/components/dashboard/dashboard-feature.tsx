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
    "5eu9SYQYPRCntJektzZkgukBXwKJc3sXfRpG8BXHS9yRiThoctS2o3dYXhsaqGV9G2hK6YUoUWDvybwJqQn2TGqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WoHESP7mVjY9ZEbxi4qLZdMxRLH4qXvgjewmNYW6j1XmDN3MquYrjci1Y1rUG5mszK7cewNB36kJLDVncqm18Gt",
  "key1": "57JzvvqurnT9F9YqoNmdx7QHoUQM4Wf3EgE1UkDHdPdbVDNNBci7xu1oMsaWxt66JfVKbdPoGqbcL3owwVC2TEnk",
  "key2": "JFZaWgjg8fxKcdZt4KauSN8yp7nVWm6cTJXuc69nGjSpHr6ph2ZGEuSPiBiubTf49B88Z58o8d14HpsJYzTnhQN",
  "key3": "ZAn4uvjVZz7tZGtU42S3fidmaupLGwyr9ymx4VdXUWnmvJNdU4eCEEQHVGp8H2xAvuMNiSYMuJ23FZxYYB8vphD",
  "key4": "aWDLTorGoBFHTRqcgQ6yqAhYNgFHe4hcnYEZGQYbEhyM1m7GtCpvU4WF2G1hCYXiKGijUx7FpTxdmASCCgscYGD",
  "key5": "4kyMBAKVfmiKbZ9RjBJLu1hUEBHPGv79gD4vqv1523q51L3NEcncT8vEKGWyY2HteXBGgJgxQgcgEef9pvU2wUZf",
  "key6": "4ovi3umG7gooEJXt72rHVuRS4Exj3KyymAdbbVsqgaLefacTsxvi7SoSJqZVsLgU3TZ7TL7GH86Gx1m36dvCGmzp",
  "key7": "SKw2eH79Kvr53C6U7cSvnP3z6Xh3cd8CC2v2jbsnghWkBrWRsXYWZawahVoQBDhSpe2P1wMJRh4Nd1xjXYmjtxX",
  "key8": "4LTLCCDvQ63TFiZRjAtLqo5SXVD127enNNSAcPNofVYFXSWkuPnZPx4E3MGmMVVhFmggE31K87zuEnpVKo3uEWLL",
  "key9": "4prLEGmcE9Ty3H4aGDX1Hv7oC6Xagakh6vWpSg8ABksEbbaFzmJkrfZ783axY9eG58zwxDpegvTGQSZ3smpQjd2K",
  "key10": "4rVy8eQ4awr3qJ7728A4WAoUKEgKUbmoV4eZeLQp4XsDyUYBYSjWvX6FcZkxWB8msphgrdx4Ungg6qRY3LnAwxdc",
  "key11": "4xVZ8xLHyw8qYy9sKDG786mTGrY4TgSoxKdWUhRF5ccrso4dbKi7hiNpxYu1jw6XipjWzMtsKdJvSwcH4Yaz2hvN",
  "key12": "372SNirj5rVD2Vvq38maL38uPRcSZ4Zszkjz9Ui3M1hj3At8bHs6bDxhzyxqDARXLCTKVgMyXCoJJK98v1cBrosS",
  "key13": "5ccBkWRtFLWmGKCUurBJMJo4jEiCgtbxhphAMUYxMmFgNWhEWEdx8ZzD5sRPj6w9sMrepgcRhgyvHVUUTkJsTcve",
  "key14": "33MuGovR267Rft6cVAxoS53Tfb8adE3RDEo7btXqhPfiT7AZNwFC7QbqmiKQdfo6NsvYbjHvDemnUGcp5CWTdcpX",
  "key15": "5beHLCDE1FrZy5E6Cw3aL3MqkDtpDKiW73kXdi4xWtRXabdhvgoFTHFiXJwEF57mAqGtE6UEfEw2F5gBCFAiLqJ5",
  "key16": "3SaRyLcMZHSH8TYvLN2GQrs1vXcWLyXLHYNbyYBkUPsNJZ6FTM9eLKnBV4EapwyJP4DZm3ApGhriM7Ga62TmLJCL",
  "key17": "3jSdZyChP5AJ6sK9qxj5SnLeK6hiNppF2B2naZGn754BNLG8vUnuuZho1hWAjpPMEMeNkoKZf9fSTr46TBUDfETa",
  "key18": "2fd5up62p6WSLKeAGWHgHbCFVTNQKjWppA3rpd4rHEqXsBddx5Xg3xWCxtYzD1XeNc17FWG3DHxQw7u3NHu34mFh",
  "key19": "dzfrNqnJajsgGTB2HP8QUz8SM5EtGfUhz76txqwRbQ86F5LPtViveQ1878ynHRf7hXn9hQqiC9jQhcUwq4FhrCN",
  "key20": "3LKon27AyHRU9XxtgWSHybMvYtWVK8ZGxsmq2wgd1L6PXZy3L6tTHtoGD9jn6FKASZ9KPRuXeGShvqkvZZRsbYA6",
  "key21": "4kD1SeP4JriZ4qxJGS5qiQfyN3grGYNVC73GAhXXr69AmtFN1LWNQzrrV4rS6MXd2jKnV1DrYYdkc4jG9pKmm5mW",
  "key22": "5WEH9Bq1WMwiqhoJiRHkaRVwY7VQ7Gb3QnjDTbdruPTwzAdQvNvaY9TjXNr9aFucToDcQHobbFpUr8KnZCE2n4gq",
  "key23": "2YkKRh2swr7WLfQziD4W2ojg3rDXym3vGn9uXnRKxyBx9wDNy1Zyid2VVLFrv8TRLdwmRy4P5ZJbZ2ux7DutzKF6",
  "key24": "33FCaCGWTqo75VVUG7f6SKYq1bojoLmS2s4CWBssPVpe1TVXRF64XtM5NztNdmQQzaP3msKGxbemPJ1q2pnPveaS",
  "key25": "pUic15a19d7rwjRPA65GVdDU2WDME3xr1Tvh7LW9VEU1nFDmELxEQ8weJriiiC5rPzMEgNBr3VmNHxuLy4o6AQQ",
  "key26": "6XNzurfCvGnaEULHCom3wjqZpq7uPuq9cFvBL1umcjAuXEww7F6qvidSVduKhD2Z3e1AXS4am82QjRKJjkJUpgV",
  "key27": "482MytC352D4mu7DeZaNrRZnMX1MReCZ1Z6aMgy5jP8vexF713w5VToabdFRzSm7Yg7BjnB51HRYoMpKa5mEWtnG",
  "key28": "3HkzVFrZvvNoKTWwqprBdddR33nGJTwAMo5nURRhqy9cDD3wmGAT4gNDSwTajM3Z3AdNRN1VU7Eno4cEDh4jVLTd",
  "key29": "4fnNAVQpRHH4vpTZj65gibtxNi44i3NwrHVwWz7WLTgdaCm1yM498QMsC52vEoMuuu6MDCR1iLdE715wF8N4s44d",
  "key30": "4eyxq9SRtQbdTHWKiHyebYTgBW1vnokwLuEyZdMVLifbtVGpjnAHCTpDb8YqngGT5bF553RPSM6REyz5Hzk4UvjZ",
  "key31": "vidarx5kSLD7AANbktK3UBYWakC8M2j2gjkQhuR8x8TZgGyTPewDZNA6JfMTRnYN1td7Hout1UYPNezYr2mv7em",
  "key32": "4XRW8hK3rGC2Jcsy1jUyvjWtj9jumcq8cRyA6UMKWgtXCnDMd6ZXRPGK2H8smTXQNT1CUGVdgkztHHMyzgV26Nui",
  "key33": "3Yt7dh7q7SRozt823iCpewQaBzceTZtqpC6poySwFpzuHdr5369iaW9BR4EUtwN7ksxgfSS3qKGx2f73q2EZ93eF",
  "key34": "5uBLnJoeTh8KfUGaKCuq2FJ8XqQksNR1riTJnRHMZgYHzfPN85ES4WDzU56EVKAPSJx9upVsePwn7LrFBF13pVs2",
  "key35": "3kn3vUXHy34KGAGFQdnpviM8yfajwyYkWC4kbY44rjGvuBDnfdFMBBeKnsEUrnpEhjSKwcVvJPt2JAKKCtgfmsWy",
  "key36": "3HF8ZFJqttwLvCig99P9w5K3SiWrCH645zfJ8mz8mt4Urtws9JUWc1q5cDy6p1FxkwkpoWyo7e4vErMQGwRGPLgj",
  "key37": "5WTztgKoUDSkRbB79Hg1hG4q6fYWitEgE5Zjuch4F1TQAk4hN4kMMBa99hDiHM3ZwLQFTZD9V8GeKw3GaLd9sKGP",
  "key38": "2tq1tauEgWuLSuGn5ZgaDZtvCd76yzirNZa2HR9BmKVUHyh46Hcg2UknYYvV9Z3DL7ADk7QKPF4DYv41QauqCMqo",
  "key39": "Z1BGUYPUexqyfRy9qGPv9Xwm4q1BxwX5Juqf9m3BzpKZstkcf4gc3UBpmDSxDiq4c2RiXzpB73KHZW5bx4QHXrC",
  "key40": "56joPN58yYjv4FsynLhGJJKTHVLLfsLW9wD9qLMioaNfFdn57Kh7X5uhaVEDnKZuB3Pb4SpnsE8NUp9o4oRVroxW",
  "key41": "4HztXtogcgiLcvQUkupcu9QUEg6ftpNAniuSxSrpERgezb6BZhbrgQw4ZA8Q7d1A62KGJp6tz5HWz2zCSydqyk72",
  "key42": "5ao5gqke5TXXj4xjP5GzrAf2MxCZv9uKp5pKcRE3K1Nzgap2Nhr6nNurnyBmt5RUEDRW8uAWH6rxqsSuoj9VGNvb",
  "key43": "41HjiBgMw81X7F3MniQmnECm6YX34QjVKLGZwC2CFmB8CWBGVdUVMW9oW7m3k1QPNwofbvYV4cByNGh3U31quMWA"
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
