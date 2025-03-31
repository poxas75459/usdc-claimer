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
    "4u7TAcP8rxcxpb2t4oQaYRApRXYThYyxyiKYVGSVgGxGV8R6Eo8GuRrGeELA8cYw6KFiqMwvEK8kFqdK9FDdSED1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDZWnoR4xE3U5dqtqRzsuTpwCddDYAQxSCceTJaZDaRC2CUVxJ6XosoLCKPs96UgS2fa1PNAehkzm6Zmhx8MADt",
  "key1": "52x49LdTvQVU3ubakdawYEBSqKGLAqyvKP6e5CQvER3mJJ7d8GbCaWzaojSQA4Rjpb99Em99nvDFtjcfpeLYtYm",
  "key2": "4CkkMk2PNPyLT98JVc94UZKoRjMw7rTzwyq1QwYdH95hEFri6zonQDN2VSkho8vgYBtAyGPrDvaDaUSbrX4LReoK",
  "key3": "4oeEXTuUhRc4A6NnmGdnLPNUMJjBZMdDudo7bqzGsDEZseB4vsvE3oftftcViN4bRC4uNjyXQvg7yFz46RMYJxco",
  "key4": "31pA6GrmKzn2qmD83xq1wDatHUN2yXeMjqWW6TVxffezHi6QhQCSWUEXeeyfhxG6JrLzVr2aNtKntkWRvspbBahM",
  "key5": "49mfAHFZPg9nV5CLyGzjin4viRQW1bwC6TPQAdTSN6wcTr8hTj87nTsrf3jNGRja2u3vTmL7J6GtpXERyek6Ubp4",
  "key6": "59ymsy5NoXEShfDwqZxMKr9ycwccPLCUjbGNBgmNrapUSvb87TeTjZwpRbihNMbZV9Ppdmku9qqZyh4pgVaR9dbw",
  "key7": "4b7pCvh57EMHVhFWU6kUZemhJb7WJoHV1rbJP1M3tJ4sQAsuVPH4NqAH3uZWhC1NvksCR3HwHVs656N7ep2MkwUN",
  "key8": "5kFtVxQNzVKr6Gs4dZFFiquKjvzCbze5sZiKa1je61UoJYe5cYakmjZVsHpNAPs1nsL9wN9jDhb23AR2RuGm8fGe",
  "key9": "3jxg6yyLrvNSkfoMmxfR11nLHTVE9WAUTLAGP2jVz4Pb43wTR9MgN6LPWFt4opqhz466ByF4LFX66kJ3eth1a2Jo",
  "key10": "2rWEtDiNGrUWzox2ZZa6zhDh2fvXaQsqPCqgfTnKKLMRYqcrnur2gcNrurvGixvhUzwa9mdW1Z8ik4CsmZFH9TCG",
  "key11": "5WFYqpmq4yzykkHqc4QdQkdETN9M4cGgPRnmsbHw9Hvvmymxduzk1HuRfA9X4kJUgFQWMfHDXxp51WA2u2xZx5Xr",
  "key12": "5LUJpDRkxXeRu3VmKZnUFK4hC1xvVn7f8TTzphx5mhpNQj4PqbU5J9xu1LHstt6UCo3n9rBL8RLMPKUj1dB8vWYg",
  "key13": "5iEnLkET2gQc1EsL9q85nGkVNTEGLhxecoU5TegDTJ2mpBS7ejckZoqJWGrJM97fLUnW71tT9XGiYHziPPCDnAaN",
  "key14": "W6YFmUEsnCP6NPdMf9fMaiDYHyyWckSM5gfWrYREuvGGS2XnwmypPaGLru1bXf86Rg5ThRWzXBW4ibhNkzUwKZ3",
  "key15": "2HHdeVF9fJmNjBjC8EPwKfX2R7tQYAuEVgE4cUTGGCZ8rzgxBPDaWQXgpopcTGprc9RDF1pNhHRkefn18ynf6pVC",
  "key16": "3yBaBa1ZKvgjXtWQ3xEdSqHDD4iVLFD7EkcfCdcJUeFVkX32CBTCMq5FabAVCJLK6dtyEmje7qtWZwmNDpVrNkQt",
  "key17": "2W6HFhpo3hYBsFP3W3qgZDJH94A94fkTSYAm8BNKWxXsSaat1RpqBYW4m8a3Z2VLzDqVwKPFQ5F5U68o1wDtAxUW",
  "key18": "ZUsKLsx2z8f5GxGgNhTHsyQJdNzbhXCyAC15ZjFjPnu6QQ9fDqLdkNYABypTK9jjxsb4LhUKRWPBZmqJ26LSYzQ",
  "key19": "23Xjdka3f4UZtUuaikqCqdXyiQhiC9oC3a61n9bTkfyXEP81XSeAVtWFDqtDKLpmNgmuCci8XLwCVoboFJMJ1PZg",
  "key20": "3X6TwwzVFCTUucBupF5TkMkERRgKinBnEU1BnWVunMoHTMFqRBhfzeAyurRbVJBy4HWo2qQ6TkURZJjfJSsRkXxC",
  "key21": "yi77WKNQKZ5uza8xsycr7iDm7EW56vv7obNnXkpqWNfVUvbn9fpq7LfJzcQJoKWdZeJF8dusQbiFdCjBTaK2FPu",
  "key22": "5cQwnmEzzacJrPiU2jPMAHmPNyDS1EbrjrHSaMcGnV8H7UMPBY6fzbGjmeWL8EhnTPYfG7u5HGdjUCTTnc6vdU1g",
  "key23": "4Spucfx9mQzUe82G8YNWP9FdBaAWVjcgcAerCeLuXu1Ew6EJgWEovfm9zTwan6akGv1YE1bvX4trWfB5XPGgk7V9",
  "key24": "2ciynAkUS1tsdQ3Nt55ofmzxD395sUsSWYA48rzdnv3V7w2rMcJMg6w3Mt4nHQWpTUzScHKABDKwSWCMeDu5NLxT",
  "key25": "4LuYbyDAiEyAEureQu51mJ2wePCDfR3EacyNkQ1FLHSNnAkYnK21Z8KRv5AruYwYQYxde4io1UvtMMTsyZiiUYDc",
  "key26": "2H6zc5ubiwa4t1FYTeGRbJaUUDsnwMRbfaxLFMceMCiU92wuhvkxTgHZzgTMZ4j3rYFsWCC2uZgB5m8Y6hKd9r4i",
  "key27": "5yJGsswJF5HMnhgDoEm4pJdRs3Pgc482z6Aq6tAZWqaUSkhyAxcRh1e9NGbZkPFZ7P7gPB4ypsisM3rtnircQkw1",
  "key28": "2qgHZwVtRzQLW7TitUTdx6RcZCns5WT6oRZcZaESDjgbjNCe3et8TCapUepsbUdXXmrYqKiQL4Hqdrktxywo7NR2",
  "key29": "3vip1eeTcFSAjUuSsSUppNAguHFsvFfSWFojX2sduU7J8AxpCYgp54hDa8SU2DnWXyLAbvAPvA2bPrPotbRVstjr",
  "key30": "2RQCgvfZj2PSJUZV9yHd1DmsXWSNyTBkgt3XqC78ipQDx25RTHoP3QrhmSoctW6r762kSMPTQkgsJJRVQJhqtYnS",
  "key31": "kgtoWEV2Hs7aFsKKcwkEpdTEU23MZYSD61JpdNthQnQsVRtMDAWVerppXf4dLCNjAtAdj2fd8XMeCs9g3Pp4TUK",
  "key32": "4jPTCn28G2fxpT979XNDkSm5uj8Kr9zypjJq6MJQSeLbfMYQhikrLi4UNwkgJSaGsuQBJJq5MJjcmcLCN4wfHVHQ",
  "key33": "5XFfWSCBiqi6xmHAQjqeFqvSLsZdHReNa6t85fDCcxLHcvXLNGVHCxHMKY2JGnVxqsCNeCCZCUqmKgQAwyNeXxFR",
  "key34": "Jif8qhyCAjANE8H3SCCJHG2XNmyfpvhWd5fLVHPiDmZTuCCMpANV5CTjW5tkK7yPxMzUGnHG887AzCmKSnand5D",
  "key35": "3SztqYU53YUNCaTspLANzspbNBrpqnowv2tGLmio6m2mgTDHMfzjmfgAKtyoLL6toTwjSUsBhWeZuDJJ23pdm2Lj",
  "key36": "5Lpaozmh2yieQvmN9zBkcbTxgNwANaz4oAmhpv9UMWAWvMxz5qWqFsLhu8D7cczUepwbToayx1PgL35HfC7TgmM3"
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
