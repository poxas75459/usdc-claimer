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
    "3bHYRQs3dPzWh6vSn5H7tvStfsPrYFJWsDf7eXoADmK4btVgFpqHuU3u7yoaqXZSHqbpJQPXUFWH6MHYa49ytZ8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nr9nj8xNWVfh4TyzdKGeywfhDxXuwvcF8emmwtgAY4m7eQ9CmSceim9d5dKafb6NkAtHS1rWZ4GgwifbCHrPsK1",
  "key1": "qQDPeu9e5wBmT98kgebCRUpASeHhvbFTKTZmvb1ixKZo8MvRWFvP1c3ZC6QNmuz9BhnpLZeuCvon1g6Q1WYY4Cb",
  "key2": "3MJbnNEMzrwPdWfBUeqaw4y2BNe3dpqWs75cDKEx39wcWZkRzCLj95ZQe3f6BYYTqLkR4YWnQ3tHx2mMLdAzL2em",
  "key3": "27D1zFAr1kz7zPefRdbGtuooJYRFqdcrFxnUiZruFfgRXx31YNXRsR1c93Z1Ypmp6ixyQqAG6wyTh6DNAy6S1MoT",
  "key4": "Sy4Q2RoR29iJz4J1hcw76qxt2W4PrjRDa5JKUodXtH1Evd8zjcwFVfwVycS6vBDWM1kLXYKti8yrZb6gWDZXszL",
  "key5": "4DzJtbVzB968Bz2vZVKCcTkLhuqqiPABXtELYBRQxdVsUdoajvY6uriPcMD4xWSBVJkCMptZqkHp4rh7qq9eK7Xx",
  "key6": "3XGvgTyRZPDMKiu4nVJqWchgkL9JEyxt5hydhAsncB6vshszc4uZJqsSS547fUAZsoaVnW9k1B9xNHFMMFgdMN8b",
  "key7": "5qvcpZMi6ow93McgiM2uJEz6AePvZG5Q7tSWMPzZ8ZP8CqLikKwrWNYgPQY9tnvxQs2VANPjhcfZEJnCWC13VefV",
  "key8": "61dyRwLe2DjSomqm3inL4PFR2CNPYiqzP39ssWYZPSe83vaCFSi5v9UMjebaBjRipxCqdw73umfYYEnShcMs27gY",
  "key9": "3cxhs3qgABCppEWmYvnUdSzQMNvH7mxPcWMFWJH2dk5zeJcsXwd33jqXyZbzBGsm9yhicxsc3Ge56Aj3CjLFTRsr",
  "key10": "4BJ4PJrTr39FXWKvemc9eiBYvP7JhsbJb3BTjbUYq8z6t88qTLLvru1CaD8vmptEZp8h4QmcoScts6bfcHt83kNR",
  "key11": "sdz5xd1azgiGUwfswAKXThvS3t1bZiJYiByrW4NqxMPFsKbyvzGbVJrkGW7tDUjxfbXovgcZ2TswFjQ1uqoaaac",
  "key12": "5LVwkkr1Uqb7NCcKCa61MWzXg4rvU7pE3QNSLv29YZfF49wZpfuEi282Sj2p7VWATDb6XEu963RoqueGiQz4LFi9",
  "key13": "5juivJsWWRT459tvz1BNJLfRNRy7Mz5oBd5TcwXpTB4nv3ubUYm2HazaQFxB8d52eJRvgEStNYgJKZUJttRKm5zp",
  "key14": "3WZzkC2KZFTFWEAu9ZdUH1Woau8xYzmGqTXQ8AUJHUd6fgFB5TnFysTWK8HQ4N7Zw8DdcxvKmLJ2WLmQsEDJmxTi",
  "key15": "5KXs5DHFYpG5kuQfyQAdDHGBHEbHP1RCBEZHaAErxLY9WPhwNVb97NyCJGjA9hEnpFCamRuUm7xvnuM52n2jVZGJ",
  "key16": "4Gr699ieLwzBLT5Q2aKeRoYg58J6cQPuPNj8AiKmw2avQmW5MNiAdCeQF9S4DFgKHJHLcQMPTfGhdSN1FnYrA7ug",
  "key17": "25AKreVjpxfPDkstZHqAZdfk9wcaocXYtp2jLLfcKLnf44osgF1xEmRpnuEQc7xpHVVUQvhiVNYJeJ3RR6rDCgP5",
  "key18": "PSyNYPiirjSk9bzhBAxtBr9EcTqfKEVqR5DrqPZJhoc1YJvL5zjQQtZrtb92dnhfzBF4RwSmyjtVW2yugyC4Nj9",
  "key19": "Ecz6dNUWUnhAXiQkfzSMtkS26GWbhthUCDqQiiECr9rCYAbdXv64HPpEqeHr6F8EULSRyo448PwnNBji5FddJiM",
  "key20": "4NmsabBkiCvv2pK5Z6EcmnP2t2YqTsAaYTaZ8mCXgJMix2jQAi4rJzBJgF1CeUbfguEXXfNMjrVxveCDExKahmyP",
  "key21": "4rUDme6QJnci6pmMyzDve56VReeoLoaRnmV5SbhZZiCNm7ujfWFDfnTvdK2SVYYnbZ5AtUegdGSbV1nftVvowxRg",
  "key22": "FuyVX8hsUtay5qkEDfq6UWWLd2S1iMQaTTUao3ZQmot1AC4TbdSzrsbQciVW1aKf27q4EMhh5v6qq1axTVKirC4",
  "key23": "5Eb81VTn9uT9CZjDn9DKTd6aVJynrRnG9X8U2ibdLBcNwKGaT1iodv8jnMig8eqAy6w1xEGwzXDQtKB9mt9ANoNh",
  "key24": "5HrVuupQZv2J3pxeuVVT1fipTGR6DSwpPpFL32KQA5p6TCb9S2vNxa3UjRq9LNctZPHj12Zt7JWiGBmHEmU37d35",
  "key25": "5RcCxi4XysqBQDxfyPWk9vRiXf9tTyj7ANF6toSvrNaopVEcwi5QopMnrri8wRvvpp4pjYwKnfZ23KWR3Ju6hGh",
  "key26": "4RFa3NtkvBwtXVQihJPMoxbjW6yujjLfLksagsAPF6knMU7ww6hD4VCygf9j68mMUtooLh3xidRr9qpQ7cDxasnX",
  "key27": "2bnp7dMhMLAovMDxbXiDzw7HZzJ7umJtMxTHQjAdzVoaaKFezhaNSLBwTHc89QTaaRdis7dTaVBG84yyuYFBSVSV",
  "key28": "613zKmZzn5bgsbNRVwdUPJeVRBaCjNG8edn7M3dw8yRqQXt3VEVCG5zV9w45LwGvkuKdX7vvt91da1X8en8gNBK3",
  "key29": "3pVN58d8Zf96e9dGAXZT4VEts9GtjpCfgbHa9DjQHjmsejtpticZbv6tZS7M2vyKQFVopTDHZwtZXroVX4PCz2Qc",
  "key30": "zeoXzpa5qMU5EHJoG6z5RTfRaUYd8HD41CMZ5LhEDTULyrFuFaZU6Ru7AAC9RN7BvcBJYTqKRNr3t8RARZupanr",
  "key31": "4Tp2jVb2Tz1LJyFMbJdgEbQmGFvd9gb8bFJt4Pp4v46oUiiNSCyaTxs2RToT2wfNeg42rCyanScUzjxZqehTC4ge",
  "key32": "5Uiqf9gk2MvChLXjmg4ipDRXC9npAUHvpRwWj5B7s438TPzdCbVQi8DX81xXeF2PjzM4UY2kXpMnSePA8bvWyUqv",
  "key33": "3XMXBXWMU6zz7RvHn1eCWmYDiswuakXwKNzpMZtCNv246KgsKJ85YMLFiDnUqzVwyUwBC5XiDfBy3fR3DvUN6L4u",
  "key34": "21vduSKbXWH78vUruYdXnw2LYnuaTAVsdWDFkJC2C797wDDJ8Tjg8zkaxnobRA3jWFx1CXmweFZjND5y8J3egek5",
  "key35": "3e6affDz8AwoeyKSinRYBkux4eBRzKhhTgGuddmuPo1teU2uRTx6icMB5xowPNda6MgsmtWtVHQuN2CHNqA7sqK1",
  "key36": "3JG7nxFUXmdwe9bPTUU1YYpiw5iWkRFk4h8umrqeAwqxYTViKD82zCxFyEV92sGktseQoYVLkLGQeVGSPGgLNNhN",
  "key37": "wFba5MKigrQvPdkDt8e2JB3xh6Q1AMrmLDD9sJ52EcdwGuSMS6Lr2ea1voe9KBJ3gSzQZfK3Y51ZWFFuAZiu2q6",
  "key38": "tnxdmsb2nVAn32YVYTtNEsaMn7yUGxDURhQFCZNSsXzKvFRZCqoYSKAUuUv7Mqz1KPkMcfibHxAmvGhQjmNw3iQ",
  "key39": "3JVKHAK7EFTqjGXS1MbhG13k2LNKGWLtxoZ2L4RMLncgJvrWyhJDRSGpb5j37MNsGSU2EUhPP8nN2qJNyLHLmYKG",
  "key40": "5oR5L3ZZngzaRSonv2APUH9mi9qS6RAWSRdmRBKZbatPKU9PB9UMcioUoZZuS7YpsmWbiP9gYdTdn4JDVUfceVZx",
  "key41": "2gNzbFgD2wGtMLEWQxcajMwHENHTEYUxfDhnMoaHpkhRgqVyBwWdhLr88sJp6PCYkDETBNfMqDwn2DpGCtJ1bmTC",
  "key42": "5JsNgmsSCGfKQpDbk2vd4QEvCVXVx67DqZ9YoJSYq1oNYKZyjzWNaX2DP9g6yg14oXa19v4xyEF37jtvD8gBDxtQ",
  "key43": "4GwcvtpCon86cLp4jozncpkxjPxFy1TShrtPrM28Kr35iQL9mdJZWtPPj3zaLCkJ5bBwSQp9AALvBWwr82K3KMLd",
  "key44": "2XBrwh7bDaQkchWe9R6xeSeu36sZp722RxwtJVpNNAGJCXfxeLV8BWQ8a1ujoUBnvXjsrQRBXhKHkwbYxbWLqeam"
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
