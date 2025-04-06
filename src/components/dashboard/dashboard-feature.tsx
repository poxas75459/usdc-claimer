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
    "tMVW5ULcAneZv6FBDyoRhVKfFHVPw1CVaoPfyLAHzRfseg4rEtorqW3JuUJr4XvXofVNfPFyBVUwzBjySA8yWjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JvmUsC1d8KJEBn735kxPLVAbMEaMhbR4EM82SmCM7aRLMrupwPr6D63kBfpF1R3W5L22aLxeedmsJLr5RPUx58h",
  "key1": "ZD7WzbCRPDCa83Ar8mw6t1SHU9WTZzUbafw18NfJi4ECC9LZCu4iuTqa44mERrX1QhmTrJqyG4hNMDHGofnH4H8",
  "key2": "3raEBVfyQ8syxC56E94BgQy5xxJTtn6LiNaboDv26RhhEKUt32oMw9PFK3Tq4j2ti1e95kW8wGCz48PZGs9H9SKH",
  "key3": "21Rt6LKpgyFe3b9stgCbWVommDdAJa6qikUJznncaE7xW7cNnG4ksZa5Qn4o7fKTo3QGgyjoYT19UgN3Lp3CvKoe",
  "key4": "5Wk2FJTSKzydqrA1xTxsNtx2U4kSB3ve5ada2TkVSCPjRU43tkHDyzpMqxutwzhTaGdRCR4thVtfkmquLhZqhjcm",
  "key5": "5pKAQ1HmXBaNwv1paboS2rSRMRQ8bwK4jhpsttdgU41Lu3hNx9FNr43vVHzZEhubAMq9dAgsPEjrgsN3VugyR9ed",
  "key6": "38JX3qdMUSc9YSgxykBRyXz8Qyt5Q5zUBLfCdcxqwigbWibxtYTQuM7MGGX5stKz4KVAAkmycow8YqQBHq3q6kWc",
  "key7": "3B2jrzyhM2G3u4Dq25jMZheP5s9Nd1ZVaKZoFcFm1FgvgYhyVkavQAcwoeZ54DPprXmk5DgEo4EB1q24DRzYQvNy",
  "key8": "5p8qQVE8sbd19omrTSQxT13uKmTf5qhH6VTEka6zZxZm8TaY1cayEhFsjd3AHud9wtvew51iH7hHZHgT9jvxvKu9",
  "key9": "29YsBsBxXunYe7kHjUiEBKXawyExcMDhwaxvnMt8S5PfRiM6Pzh5UJA2Sw6XJAXQ5ToY4547W4Rt32AzH26JKoC3",
  "key10": "2WLUJYLWRNbTGM1AT8ck939YGkTgdU4XsjCEGGWmAj9M1kPGh46M3H4wg2mibaPGS5HCXTSgduzeXKGo2ENMP34p",
  "key11": "3VAzvM7A1HnfJJDV6oPS6P5dnsHaeDPxT8UDkjaS7syohtkwXGJbDmFjDpbo6qjveQ7mjmRVxgLkUDDwpga1kD7j",
  "key12": "TeH6yFhhrFeCp1dVTFB5WHhmokpLPZxR2dPehf8aHU9oCH8VpRbVFE3NUQktrqKnarawin4bBRUfDwCgpcPjmHq",
  "key13": "3CBCkx98PPnFC9bXqfWrdsi6725i4RfcVPrgbwMsn8wHs6FKz6crmXPK5b9bDX2Ca1GnzVxvpojtwXVueZH9GUvT",
  "key14": "5eLnmygvJdcSw76cXPmmwVptc28giKozoK9qCj5YQ5xG81gGsGxmn7j4QZf8VBbyPYvf77wuYNeFLqpyDTHDtfnU",
  "key15": "3Anc3sokhxZfuConNaZ1S5kHEf57fZ17NbXWRC1tituuWJ1x3EyCdvxES226nKQh59rSTN6XnCSdRYcqiK2G6oah",
  "key16": "3qTmbWQGzWQNDbKg4BYHEopbomuqkJTqVrmFFkvAcNKJKkFwiN847mGcT5yK1SGGpz9ST3FyQKKYWzyLpUhXnZuW",
  "key17": "46yvkpA4mMmuVLhGzGSU1YFb1UjC6y9RAgGZquQv4MUB61NcQFVGPKFgABYXepT16ijkSeZsNMi3cq2KKUpYczDc",
  "key18": "39NdydGfegTyw3Ug1FBXZyv69khqySpTgzgFcwE2wAJMnqJhUijZ15m6G5dtYaVVXErgtEXLeFjT9N8dW9riQFcp",
  "key19": "e7kN142qGpLmu9MnHGxWryu5BhLavVURcMJ4NhS1Y7dmAJn7BnyUjnz66nbAv5rG1LHo5GWS4NSQEohvaHTLrVj",
  "key20": "48g7CLjiVmMEV7zYcjtwJQphB9DkHqTX3MjQAJvmoV7sw6ZirfQMJopswJfvAz2jx7RzWGWCDzAMcjLZ2muRM9Nb",
  "key21": "51hFtccF9zLbu54RfBe2Gno6Kif6yKmJSUmUDeqpZ4xkbieuLxbC7kAY4aapnCz1EMUrBwfBARaPrrDDWqEnLLQW",
  "key22": "4zhsdTo11DARkDhbJEwagM53TzZ3Qszsk9Nxaj7BPY2N9h2ugqUZ7Z4MZygtGvrRLqJTjz2vrC3PCdXhq9VckW7d",
  "key23": "5o5KTqovF12h7GZUCRUExmt9n7MDzbD2f8XCbPF9ewV1MyKVpypGV83NDryPsNwYZxKyRFshiUpDLjG6UHRF34Nk",
  "key24": "2oMjUmrMrWs4gcMAx3mUAHWHh2xSgZfxZUPWm6LWLpE61eKcH34mJT2kqmh92okppAZqoAkJnpidKt1S9qSQbSdJ",
  "key25": "4KpiPUG61hHSpPDxGAMFWVVzRxbeqkhGWvDLGR64JWpyWPDmdW34g8MmQbDKvc4ggEJStTnHVBS2HLXwgouC4fDT",
  "key26": "2dEFby2ZG82BJYkXSyzCpSgyC8KWhnpw5iNcGjrNddSdKLVTpCQGaJkNbajsgCMo5wqc6z73HD7hBdZF6uZ3JHn3",
  "key27": "2TYv2UCq9xsWdKHJm7esGgjGC6XUPYigfMEjdjwUcSYRtzCCZLGJNWsXoynU4gJbumrwLVipCv96GRnmpL9CCPz5",
  "key28": "2RbxYLw851ffQ4w2JkT4UtZnzdRzAREMddmgAYq8GMJcpgAABhrUXmsTG6ELZRnmLYVa5uiSvuj7qLa8RtkyttYB",
  "key29": "DwCFgosYf4ba3JAvDMQkxdd8joKD9bYy7zmavFnk4GRQsA41yw84ju8urEGgNvQUVs1ySYeQRL5sD8PNcvbXo9g",
  "key30": "462GXMVsArTcQSiijet8tKK5ZjXscHUaRHWyVYKVFhSdXBMFVzqXAE5bG3Pba83ng5s9cwFUnrYRTkLCV9E4MBjw",
  "key31": "4pBFiGkihbkWapRokfXYDxxj56qsXSEwZ8sw4firReskwCamTXMYdJpdHnKavswGuzq2snQgcY4V3QpoXAHb3Tw8",
  "key32": "26eAoxScwbfi2gPdQjTSPnpy4Tjs8RcpPru6UAZVXTAAymJxhQWGkThxo37CAjpFrKPbwNr8knMyMKp7TXzWKw19",
  "key33": "5SjK8sj9FCAHW9MSRarzE4SrJp3keaMneVy9aXhMc45CHWqhdAxinGbre9dBf9hrMectRhi9JHzY96NLS9E4CRSX",
  "key34": "5nKSjFEwAJ7AJLTWi3Fv8dqtn6KyS1QzwEqKpzSHEdhtDCDLxb27bRRwyyzLYuxUwgKUnPcxBHrLKXS8R56AgLVP",
  "key35": "1GWLdnuXkgxCnJwiqZzkxQ69tJfkU2VZdgGHuFwCEyorcc9ivniqDGzc4S6ZZXebgqBZHX6MaN7JdRpsR69pTJf",
  "key36": "3EZrExq8ub5PxW4aw13oiQdtGcEYhgjRGdjZodNUhjo6DGB3Za2CE5UN2TBmN7wn6HX3u7GY37N8jysVAxowDnKN",
  "key37": "3mGpS7LRzGswcax1JHB3gPzBoT3UyVqQV2VHhN3MyGQdSuPrFGPgLegA91gwH2DhaZT8MXM1gJrXTxJFrpj64Rcj",
  "key38": "ASeVFbNN3AjuqUK89uTeGKXbivi7q96yBu74mU41EWKHf6s411f53UBP5FqzDWNYf9nU5KPJT9DRydtqfFySK5W",
  "key39": "3DJwbeH6gbZGiTV3KVhxEd3eZSMaDrG5CDzwAPmtaHkFSTjCsoAmL1Z15U24ZXZZnFB6JcGwPkRwZp1ruYyTyxUh"
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
