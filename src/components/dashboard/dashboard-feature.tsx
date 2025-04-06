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
    "3FzSR4xyK5LBJk8omnDMMPFM6MD8jj9fm5hy4ePjQVtABuVFNTGNSCoD2Dcvp4kKixegg5w7P1xSiLkwmKa4ipfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFdhMtZmcCEYNdakh3yoTW3Bf2PtDMEvMStoCDXCymzeWhaouEUFe9cYCHhvas9oXctYLhjFrXqcETdH37VJJLP",
  "key1": "5RvnroQchoKtqU2MNUQ88bwaKpj2FH2SjijZh9CVzZY7E3bfAXU3SpzTiWiP1JWBXKKoJ4DaYrGJ9Vr2gXhhCinY",
  "key2": "676W6CQXWN47FUnSqQtoLkEcEAyZsZhgBjamMT9FQ918sj1JTvMSQEzzd9owhXfvAnohMrX9ryasd4C2t4Udpcdz",
  "key3": "5FXZfNBLxQgFLd3JkpHUkmSsmsnS96xpXUCfvBsLNhrPzM2Ausha22pBRzKrxPo8m7byUDHBVwz5D9N3FS2q7bum",
  "key4": "4JqthFbt4azFHjL4njw6n1CePGk9KLBawdk2y7kZpWjsFaa36QMStf4FqrcZURAbRyEri48edC9E2FTMCQk2jeLy",
  "key5": "5JafzPP1DnBTFhgRdwxVrCmRygXupXKBQ38TnpxXZ4wQxCFMdgHDXDre98os2TeT9ytMjWTcuRMDbxDPsYwU6vDo",
  "key6": "3Zh7BWa6yAmaHt1Vj1vJKBVjgSCdQsthUzqsCQcSJLQwuEnGu6ey4kSFEcBE6N2WHG7WzjrPahiYGE76L17Saf23",
  "key7": "3HDvaBxk7MhMkLLXfpG7y2xYmdkqGiYiLphCNNu7bTv9nn3sgoJWQccoziB6GEWogskZjCDXMsaHWWHMmKYeDStJ",
  "key8": "oYU9euJgaNCMpD55XfMqeScX3tLNgHAnsXKmYeB1iLTjr8z7CcitcwdtyRCsGm2MthREE2WCSNj24uKy6F4Stsu",
  "key9": "4kKtzSM4a1CzVHrVYxNASRLjBVc28xvKVbCCy4cGmj6Bk9JzkbRiv9s6tVn4XfFzS3DKoBz3V8mr6mnkzzpcxDAJ",
  "key10": "5yBqhnrivBBxcqK4La2hzGHnE7mUyM3UUroZWjb4eYCjryk9KP4RpFbNsvNhDRify1AfTgwZfDFXnZtjpM6oD8Te",
  "key11": "4fU8A91D14U4fvLS6MPhtBrdn91SB6fSpAR427u9ryp9Hd6yYiCyqKeapFdBdrg3wPE9x2ySLSwU1KXn8365WerT",
  "key12": "5CmGVkJaXfzmyecGVviQrgrHdpHXsaYLF3BMHFP6BkQXUyZbQjLfPKppGsKmzBM9dta8fypYBeCZErpPzV91YWRh",
  "key13": "5nAzYhzi1YPkZN18FgbcrBRTNEo1WJcFDkRo8NtYNyioCkmemCYsvzESvdibZyy3oGabr4LWSMu9GBwXvg4LJsSn",
  "key14": "64BxgusB6GwM3YYWR8VztMAxHHLNVHmpeWWd5DNnMSQfn3qZjSZRpPduMbH6AHdKS73YciXStzQqjJgcKiGT4wwV",
  "key15": "5SymJbJK6ECRPNgQWVA8fjNwmSHk2zajjtr4tjhjqvRd9MrfiPYPAs3Bi6nYk4RmzS32g19TG8yVszSoEkQS2Xs1",
  "key16": "3VSuCyhTW6gGyR2BQHH3hzZ63SvGEr4nam7QsioGBH2ro3eXf39ysyNLnCyWhLHFdPnqWUsvUpjNiNXm39Ue9eAN",
  "key17": "2fgmy3JKZjHGoexWL7A9ME9NA5Qngt2YTbWEYrgHETXwRzEFCMxVnSLewUNBS3zF4p8XqaGiTsANMp7hVuSs3iVP",
  "key18": "5jkLZ6avyXnWTvdYzWiAzAfwVqmMiyc6dJ7qZj9ytrA1WabRoGHAoyAR1AFwbSFqGsAQSbVd6pBByBDXDW1aQb76",
  "key19": "tQ6R8XygdTSQBjX8Btj5wwhp6XrFym5gxXacavXTUvokSGuw91hzxRUy6TJ7acTy6f4XQTXhy4bzmAdYaSrWWEa",
  "key20": "YcTbNSH1gwMSsLUBoEi63NG5AKksgXMzSchJjrVjTTgZSDZ6Euj3ERjPigZsKJKWjb6LQ3m9TUryttqxrqpChQi",
  "key21": "2efnthjXDzgPDzndnxEUNspXTmtdDvkJ5zTrknnDjayNygGX5tejNscCdpx1XUYa3gXNwPDYyPTSRh21zDzByGDU",
  "key22": "3TPZ1gaSBeHjhD5U5tM2ueM7s7yhKWTgptD4gTpndMJM9Uec2mYcjtzPSyESLQTawZPL7AZnKTL8RSqGs9zRWija",
  "key23": "4D6ALV5Ctk8ZdRAzFGUtqrkR2B2sstummUFAWFSDEeprSaimTyxGfTFGMmupcnp1WjPwW8fwGRfXrgoFa7rdYKWj",
  "key24": "2VoNYJXafmEEn7zKtxavWgUnDNRfbUoP7ttGDRimkGH7K3HzLHyMGDCwU9W4nfHsEcDPvgkKLEdeeqGxU4Z74pc8",
  "key25": "3krbcqQFnxWjtoWpmMEGVi8GiDKVnXg9tJPor5XH9LZP9NPMP3TsFpa5qYe1tLQxLipt4hXQgYe8PxVvjbHWED5z",
  "key26": "2mTVJiEyB72j1JnJ3YFm4VpB84QwwJH2T33cHTMt6D7Zr8pWZF9fzf26SXNVvy61tgpbv8kREhtUYbKzfZ4RXHVc",
  "key27": "2Y1xRJS17cYBqWraN2x8nDLC8BMryjbjhGFzJPzgV3VCpSmab575g1iXihH6BA9giosenqQveqoD2B3KySeDh85z",
  "key28": "5sDGrztrkasWujA8gzohuEJnQPMnitdLpDgjKrqTyFJ3o58TJhxKd57sWLnvBUDjTBfxed2ScVX8Vi1Z5sjze7cG",
  "key29": "25wJSxhzRjWNsdhrR15kDKtjuJdpLhNHYJXvXmaKuvaWERi84NCjzXK7foh81YZYFcGwS639FFhs7CB951Ksf78t",
  "key30": "5cviLYzK3eqceNi7gPSxtfGGVi5GTHn83GSKiMGJDsXSUHNn6BaofcgvBDLv5c9sUkrVsQmYV8MbGQLsS5iwhwGV",
  "key31": "4uyHiEyB3bVMPTaCo8ePKNhcsmkWNVNWzk6VwkQUZX2TPSJQKa2VXYbvxFPkVaZTmGQaB3b6pf8dSfP87f92KB5R",
  "key32": "2piyrGEhmopgVNGapSkTFCE9x7Tt96PJE1L1pqCrkvPodx7pjJaZP35CR2EayzFYR9TRzb8Urih6JPmrHRMvibe9",
  "key33": "5fQpQASesHuBfdzqnXVP5Puf2GcrfroNLBfcMgWwcodgGdTh2rZdaHGNi6mofQPKvZQ8RtiW7ovyWFMfy7kRWuw9",
  "key34": "2bDprZUP7euNKQbMSV2kYHi2XHsP77vH7dvfCPSw8drEDvtUUFNiUU95RtfthnqK2NCrKbn4KLjHhKGHAn3iCp8z",
  "key35": "2yPe4e5qa4xhnW6zdh1CvV98U5agkZXo3APcjrS1aUBPYytSQHqBbLjLpHAFGeRAG92X4dV4r3Nuh451vxzhnUbb",
  "key36": "2eV5Ja7LWsnXQ77ApzxfQEMskqxZeapJ4PiMQ56t9wrzj4o8gK6nVvx3b5SRNjs8GsYqHgH9kaf5vYFZNWg1moYx",
  "key37": "2iL6ocPVnuA5eMy8Go8iboqwcxSKbhNod3FcLJ4Q4zhxW12xGncty4Arf3AniFS698ha9tTbBjqEkQRpCzzUQcJH",
  "key38": "5kWoYKJsJ6ceXkW7puFtoFTQhbRe57ga3fPkh98TfXKsyhMrjhmEzXrVzEGxXJ4T8S6aDgLctvwSdZfkumjC33te",
  "key39": "uMGnaFBRh2ucgAeQoEkCRn135rkmtwXsW6GNa11RcAQMs7nTyjiWrrv9uUk4zbZVbYxX9GNoxsYGctpeNeBUJay",
  "key40": "4vzNuZyfp99n1wLgSFMQgpoyC2PC7nHTutmJeACeQQfEypH5SNuU6feGFY9JBHqh6VnaHZpVuFDToXMF838bbR2F",
  "key41": "2fST24a5VvbuRysaeDgNX24igpfNvFzE9wbpwWpHeoTSeLT4hjrH8Py5fMeV7YTpsLqNp2D7Pb6EKf25KHSsC9YJ",
  "key42": "27b5EMznXSdAgpDCEWpqh2eJqjnC5R4J3vyDRo13XdgE2eCiP5YURRFuCKbLwyLHBXSdeYoEqs3ks4JB1s3RzYxB"
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
