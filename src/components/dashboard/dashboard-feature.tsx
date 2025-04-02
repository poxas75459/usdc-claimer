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
    "4P7j9ZyiRNgGDJGAnTSSp1Q8u4anvb9Hvo4HRhd75iNgKuikKpDgZgYbgx269K2tbhCcBtHoNFGiV1Fx6ZdUW5mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGojbUhHUtcs9tvsLFeAPbxJ6eFWKWyqdrgtswLQVpAF1KrhYERk5LNq79utgjf98xJFe5mCrABCGkjd14in3G7",
  "key1": "4MefFbDgRXrktceGGqybxKRrWXJrenxCTMP7HxN16DPQyb6cdzSXDDXx1aQyn4PXP15fptUT3CBAFfwU9N2WE2zG",
  "key2": "61wWeQ6NEMapCB4H7FYTTx68hnxXnUPnHxawZQzriJiZF2Vvm2WofaoF3DtrK8JU6EX1iLqq48DEpcdL9vCscZ99",
  "key3": "5zCEh72kGSChPaJk6mroqEEGs2LaCo9FavTVePRyuz1QWrtThG2Fz82JPxHP44XUZVFGJLEb61NyxrV5wXETm23o",
  "key4": "4oMQymPUw77wjp1K8HYvdTB5arYZq9ejFXn5PoksfFcPJ27StWLEQeHkSpAgAzwcKjzfS6BNodvJn6EfoAXHQHKN",
  "key5": "4AE94anfcS7kQdVqmhbgr35LfLtzpPFZuYqrPcfwZatLhF5VfemQibnbeULoGyJTf9zxfawBsYL1RjTckn1eVPFc",
  "key6": "4rtqp5WKYetr1d1zdX79hFxEmYPvBjpdoxPRw2YJuc5NnkqE1aHFxCP5zEidq9AozYRtw7coVqTkhLPrTjNPLf97",
  "key7": "4dS4b6pWX1x6T3iyPV7krkgSCWFcfpn2fNePLgQ81vojEbShvkjVYLMCRVq6QdpTzjpBPpftv5yt3DQ8fdKnn2pX",
  "key8": "L5K2Q7beg9kmk8YJ9zLb8G8Zb1uByoRztbUjeXNwCmEsoLUoEPQW8R1D5WS5oN23YoJqm58aYwBcNcaSkfk2LrA",
  "key9": "5WW9eVAvEBzYdBzSU5RQzLYPbJ8CYk3x5soW13FztNpaTc62oKEwLb2yEJZuN5iMUspwEmXtS1G2G3hb3j8TUbS",
  "key10": "4cxoLUctwvvXUQSRWWAv1qceZiGkEP5E8LHSQMdqXHpHRVVwhBEdY3Bt3CMkHs7yRLPbReRZXuExWEPN1EAYNY89",
  "key11": "3FcnNr2jESisxpfzRE3aeLEemvwyrgSuaEbVaEAdruxKJ6fprD34bNcaSbJtFo3y6ac75CqFCz1ayewUUCtCovHo",
  "key12": "pX3F9jkjDFFb6UYHu5DQXWCrTBuK3cMBJgkhrjEv9AK8dRZgVjiabLm5SUhBDB3kDBzfoUF9E7QBR98ctpbTFFK",
  "key13": "3djBUD1hYQqqBGRymV2eVYhvF6kzjt9NHEfQFYir8ZH9LZhUNEpSkcrEkxNWrTUqn2vYo9AoeVZjzEskbX1hcPaQ",
  "key14": "5hhTyVGX9my4kDwLeALRXwTi2kYsQErTJa3rTLk7tUVG1VPfswG3RuMKMkNvzaxszXpTVzqwV67KMkzMwcz4f7UZ",
  "key15": "3hCgempHpAVVCsyb6L92hHGztunnG92aopEPvEp7vJGPxuSePP4gUY3jFUktCjK6zW6fmWBaMyGKoae6BWngtibY",
  "key16": "3P5zuPEKhRgQ7LjU1XwmqkL499WDjf1676fQ7zYxvduSUq57Wyo9MYjxW7iXzADDy4muFgP5MktysNw97ZXtpsMh",
  "key17": "gptHi4qLbUHnX9ANsbDTseVgRxJe5spV2Mff3MR6bzJ2N5D4pncAuX8GuKyZeupwWVou2yEB2oKFhn9g97EA1eE",
  "key18": "4MfSZgKpKiNNMedqqFpaANWbtgZuZM68q4yfb5NzCRXQKHir3AuPo9UZV8CbBErEk3hQ21yKiTscRoxJG2jMDuA9",
  "key19": "26UTCmd2hqBpJkSLe1fzfwUSGkeLDsFp7AAWV372wc4WCXM9HFqFXXRJFCaAHmCiQMpmLLGVGpUovga3tGgy6j15",
  "key20": "N9D6EkYxB1S7Ux2g6WX1rgbQppq896tYi2fC3jxKvg2QeYBTvgxEJbRMs9Zs1ditp1irqe9ejkdWzx2wcma3WzM",
  "key21": "zgRenNQppxkGohRgJtPDC51WAwJUyvHiydYf6fLemoMs4FC5mgVH44WH2DkdabCvhsANtQAifU2XELcu4BVoDGw",
  "key22": "2bsdp59jKjGLT5TiY2fLZAmLAE89k2RAmHmCPZE1b4XPm3ViXDAoRDAUk557QXT8AHYFgiz5Am3mewYpUeKHJ7T9",
  "key23": "4ELGWe7fC7BdZfGvJCD2rFLKW8ogDtcekAS7FpnhTAJM8Wdy3kH9mgvJvdRGcqAWQE5EmY9mpLU56JKhuMohf4wh",
  "key24": "jngr71WetwXy8yBMGTA2u8dLzYwGYSVYXNatRgFW186C8jtrksGaPkLChfdq669A7TMBhTsBka2NbhEobehhidx",
  "key25": "3LMjrCuMZuKeVXfU9HG9fEYTqvQ3L4abfaaA13qRsBadzGRiMjNB641q8LaQ5aWejERwAhvryvx9uDRwAZ23dokB",
  "key26": "4h9D3TFgM1dyFw38WE6e6ACDUUXFaHWjx5pFeB5wTrXS5BwDvVa1Y95HkigLkM36fHBBpT2Db32jLPZDpQ3Yzi2P",
  "key27": "fg352wsr8XGzhBwhrwg4Zx852E8w1TK7wZ9MBo7X8gstwWJLbDqbF1yqe8FueCcKj7FTNhoAyimwHrvMBAR822m",
  "key28": "58nXQdKrcv1MFtV9MuMyQV8nHWd89decN2KcrNFfdmQsXyfx484zd9T3VXEBDD25Tx3J4q2kSx8Y37MdU1PtjZc6",
  "key29": "2ux5aAn4pxYoSfEFCX2Z9d3swUUtRouqfBLax4kfRw6pnFHxBetq2xDSub7YwsdTL9wteB3GxwhkvX5mKQHMeVs",
  "key30": "4ohe1w11hiw424jMawW611sH27CedDrYDk3YYiJXxNYgQ58gAP9HZwMHCUB8uqzqLhpSbSLBT9CTKyLcPbj1Tvvb",
  "key31": "5p8LUqS4Aqg8sdgegQbNtTmnRpciiTwJdXfSD4niJtFUSKLaGtTskZLeCgmrDea27wCDuj3kPruagD6Gc3w4Ne6o",
  "key32": "4fuGnqtfLg1h7oE8ygnBkkc2WNxNiGfebGTVZeKZEmxaUseNF1VLcUVjASYMsFGZKte1jKNG9k8b9Lpof9vpYFLH",
  "key33": "GE8Jw6PGyUyH953ChkApuEeYtRfNY26jqQdEafvMW2eefxS8XFGWQsWXG85ddQK4JeYT8jtQdGcvZUP71GSqeXH",
  "key34": "5NXQCJZpxjVSzecJTF6YSzc1APtnf8YTAZ1gMgGxWoJodJ81J4FjPcV6TKiogJMhHxSzNwT7TfKBN1L2R542B75M",
  "key35": "3fHzD26egDz3h5CNGJXPfp4UqzauaFB8SuVTFwSxkRbxEW5bWWZxTu53eNmoWR3aJdmrDoDbDkNxZwDQor1jUdTM",
  "key36": "5Kd4Umdv4789xKLyVVhGRquxDrzWHrDLBLrtnJ15QWdMhWtMQiC4KjGXw4wvc8J9r1DtRhh8n6i3posydzmQRqYF",
  "key37": "3xkTxNumKpea25CsFCRZkP6X2C8KrAHJP8ZQUFtuiri4Npgw2F7mvfz5o7oYTYpRao8SaYbLdCu8MKrVKUhXmBYA",
  "key38": "4sEMws1dPTx5dm9yCT2Gr2QgeAssnfPmi9RazHw4mJ5GiKE1VGMzhoX92otPnqN9xFAVCgLYUJnG616Yd34dK7tp",
  "key39": "2mLqVmCEHkNRrcX47kuLfQin4SSsiEAg9165pSpvRp2DXDxvK9vHn1PwJ2b3mgnoAsZqSgCDCf8CJPMLBsh91egW",
  "key40": "4m6zxfrKwdq2nzQxzA1j2r7HafJjPBp6ac9uE5yCLdVmpSk4p68eZCq4dsoQdhGJWPzxD7pKFeUz32JHCMWXZBQ6",
  "key41": "27ez18L94jnxoutRbB8sSWzajfwKyqf7maJ8SabndqQjhR9zV6hNnyTvx5h81Mb99PAh5pPb1LGmw9qA9LfL4ze9",
  "key42": "5SoGcqZruuf9ejZn2kTLAu6ZsSsesfXg9hw1DPC2iyzJjbJ5wcgGQ8QhdzUqzQcogYCQAYMwgtLdkKco8zTVfwUa",
  "key43": "4CFnGdPEjhskXyTCnLuyqh9uay3Cdxn9CpoGtTAKcP587MPBJcP1tUis2S3rnugBe7C2xpCCwrCcf5cZwUc839dm"
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
