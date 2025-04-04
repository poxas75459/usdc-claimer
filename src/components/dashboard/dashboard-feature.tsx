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
    "2kk41T1tGi2swLmbpWfydwqBLYpSHRwsCkXvwEQYAnGBHPXxE13EsnKKDqLZZ2eWaaW7C5f4Y9mwWHFLRjdrFnrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmtcseyxXqpsAdVoAAWwPnDw77DW9piwEisQx2nqKVNpVZvFt9Ga9NVCRVYzMpPsar9bLpdtyD9WxNPfCp7tfL",
  "key1": "Tvzg2UBrG3ZPVS9aA6kcqoK9wLh7rDp7qKDxU3unU2gre1tHM8GAsBJwka9VTzckjKTBhh16RYGjKoC2pBzZ938",
  "key2": "M6Sk6No19YT477tGUTKAucztmwfBo8x4bjHGwB91jANki2jqgpG7u8vCbNfGeDyRzjjUCEpkGZUSnYLNMdePu3R",
  "key3": "5BUvEE5HXMXGzrpWy1FpyPtUsFJwtnhX7a2ra3eM96DQ8jsqReDBhN2g9eraqx4oPMweEJiSK5femhXztG1pYP1y",
  "key4": "4SrCvdxb7GRroZS92QyckiYv4Bxu2WNs1exoCnP2tDvD8UmkdeHjeVsMaFqLgDffEmaABA5kg8bpBPM4XL2XFvkc",
  "key5": "4xWNZnueH7TnGoHudtT1htg5z9KYpcDMvwixCExvtwrQzVZ9vihe9GBsjwkQdinaoXEJuczk2wyvWU4NbQjn1kKT",
  "key6": "4gXM7fG5GkkwDd23wqFxh4weee7orxuWq2uheptHNcYAwoCCDPijMmEwLnX2A7ntKfGiPHiW4Ldd2oeaqBAfKwck",
  "key7": "5b4MFFLjs8FLdmiSEsa6KvobNajdY1Se8rdVez3wS3xrYNGuPbdiMZjcd8D458tcervEvKkuKcAUxbdDnZDhkE5g",
  "key8": "8NUEBV2c2iUFMU2LjVYTK97U8PoUGgiasEAWRXm2GR4x2ummi8ZiU74xyKaPx4AeUKkT2va8otkK87Wvxn12r4S",
  "key9": "4gL1ypDFnGxK5h8PntmR4pCDNcxiCsQieKS17Eu4gYHAwL6pXYCg4LkY4eq19BPfCBQ32Vw4GuYjREUayFv9Uta2",
  "key10": "AkcDkxRvPjXLhLedsYVy96fqQYhnbcEtMTQaUqZteVcVid7QzcTmnZE7pmbc1VdvdZopkyb6JL5W1xGoFp4yjAX",
  "key11": "3JupNsNSHkU1dPc5epoHtbYKBHnWqVdSVA5XFhAGrhVQvnH1KJ7wDJVNjuBbkPey57GTrNH3aeX2miGX8f8PBYjR",
  "key12": "21kxjkeACcDFde61zcT1zZNYE9F8odEKivdmVK7DwiZCxQtRL4f2UgMLFR8Nc5asFwCsUuTWtrH8RWj4B1tK8K4n",
  "key13": "3TGbRM4xLip57fVTiKxnd96G4LgAquJr1ZQ9kEhNQuAJqX4gDBNCwuGGjXX6y6rUuJELnMHv2A7jvfB92X3PXHhh",
  "key14": "x5LBfCrR6DV5xUUgES2RqxbLX15DMjzYCayHX1QFnaAPMta7AR7UTB4tsV7PjmVB8MFjiRvnhhyNTQCks7bcNmK",
  "key15": "389f9919HcMyX9TeXHsL4b4VXwsDs5anzvRUfHQ1TUC71cYGH6KTh3p8B3JCvTrQTcyAFbKox1Jz2MJn2TVP5Zvy",
  "key16": "LdGdP6nh9mPET97qZhdJMyevcjr69NcfSHHzFeX2P2ck6CU1ifa66LhgdZRuukwm7HwKupQFbqQvJiGucU3oA3Y",
  "key17": "BJbpECoxXfyNh6zGXW9z8fkDLrzswNLgPskcoJd2dKa4TNJpyCSs5eSgPXcUYo6V9NYHLoBdbfjsTmRw36Qd9GB",
  "key18": "9M3mbEshgQ8WfBL2LUgY6d9SfsSfN6WnoygyjDJTB5fX4FptxrsH6BGTz54W1fbsamwSj1ymjmXFP7TTK2LvHG9",
  "key19": "3aFCPbEgZspypPyFSyCtWGKHoakCZfEVMtehBuoqLsUUMLDc2YcbMdf89VFPJYzQUndQY1723qtUK85mZJdczCmu",
  "key20": "CPRJLyQTfZaiyj31Vwujfq5db26JVKQq3KpZXu8H6RyJf1F7QPREqsyVF1WzoR3Qd38AjxFsA8eGZhfM2RYM4tQ",
  "key21": "5ghL8g2uF7GD9RmoG1Gq7k7E9ipQzESgpTfWFNFitN6FLUZEVWSKKfSFTRnBaChT4DviinHHnbiAAxT5Q3PDQauz",
  "key22": "2AV6pHAtNVNmVjCKKZ2qogahyepZrXZQ5eRPsGh3MuY8hR7qqK1iZAKQsyWQ49j9aQxFZPAEkt9MbcNRCkxXU9Y9",
  "key23": "4zkdZRcPCKTCXkhUsXEiBA6r4ut65S5iXdKKMyxFA5xeCPfNPJLZgjxSTrAmqmwY46nME9mmTQBPFEB75UhT3W8h",
  "key24": "2EpN9mzqAmJBBqoXDmS6YUznd5xWisDh8Dvh3PAnAteNDuR9wvBGqpu9GubQ476ViupJHdgBDkh3q9WFM4kWfZe2",
  "key25": "vt7FHzEn3RGda768tqHJjopnwZoj51pnUniUgPffavePjSZH3fohmCHgbVsTYB3G876uor6GaVPsaMpZgNUUeva",
  "key26": "2yGbY5Aqc2MqaBaJNy1Eh57V9SuASTuYmtF2YW3AmDEKaunpXqtAyW2fvidPd3MmBrhs6V34M7zE3bRrn77fNhMB",
  "key27": "UrzVkxqE9D6oGnHAsDBZPgx4vZwjYUS1EkTmWfLQHhWjTA7Rcw7RCivxDSLsT3MV9bACfiT3TWyCqMbzMNeV7KR",
  "key28": "UfCNxPj1xE79LUw3pA1VjnUZ8ZiNvy6qemYTxh5gporKDpBkj29mXHWmwdgUjtALCF7AVTSvQc974896j7LEQWb",
  "key29": "5NUhRcgTWAQYbPut7darx2aGAqWq7aRkYXECpMXMKKQ18P9DdKSdPd3hWbY8geXgDd5HxaKb8jGtw8tn2QkSmccd",
  "key30": "3ur5X9h8TcRmEbu3CZdmjJkxLUg7k5sukG3HTS3JShN9U6DnP5tF7euCXZypy87VQgx1eCtUHas9WDaAU6QcUpuA",
  "key31": "3ybZSb8NgRmCTme4DusJtsf7SFptS3fGwVxovmjYez2RMUYnJK4BXQNmspQQUpKyMF1Eg6Wst7ob4s266g52VEPC",
  "key32": "3y2prChdWNABgZZCRLm75A7CN71tevrTy8uqx9cf9xfbJYLKRfkjzW8HzPTmcU8xTZx7WLUBcUnW6WpCgdDUzYNi",
  "key33": "66jF9BYerv1buztH3nQSBZcbmx3eUuUJsHHfHFV9SM6aPfbvkn2ZP5ZPAckjVwVvZnv952ZkCJtmuWojrSvtzu3P",
  "key34": "55PzaSumgnYxW3yV8795PWfVd4PsX5n9PAZUHGSHMsf5uDytLNCKCBCkkrBP4tT5FfVgucoLjQXoCcc1YXqVQzcp",
  "key35": "2k2kfasLkFTkiMyC1CfZ7CCNYekXCqk6YVrhoZ5EotT9dVSSPSgepY8JQHZGpce2zeYGDf11SKhftLGUMLCquWhh",
  "key36": "Di6xGYEvkyChx4DzxWwNESAcwbkcLGEXDc1avKJDiNs9VYEhZmCTQhfwXEc1iYzCuLZTon9aJpCQDPutyZvRuJ5",
  "key37": "5rhx8CAQpuWim3Lzb4PzHmDHSntoFnnYSiKt9EFpgSriPBiKiVZ3FTHKp46DmzzHo68Y5Mh5ofLMQZC1Mp6YYQ6F",
  "key38": "43zPgsYjByQ1z1NuVJWxULUkmxQnyTwxaHFdbqznkrRPpA4EqRwcCiya7Xr7J1N8apXiiGDbxELoEF68nK6DynMt",
  "key39": "wAAoi7iVBpx5bsGRio57NVX3ksdUW5V6w9qSCnSGYmmS5nBM9w53WaPxeJgbTEcFb5MuwSMiYxV6YmdwzdeEi7U",
  "key40": "2ZnfvkC1Ng7jekVXt2YD3ujs3TjpCoYBrG1PMhU4sUQE9TVKj4dhbX9khxgxLE9UvAY8UPk8YjKyJK5WvB8Bw4cz",
  "key41": "26mVffkfoNoopfnvo4WKbiTtCT56uRj2y83LgxCKZx5xWct8P4mFW1xS4sRR3jjCosVYcZgBbG3S8QjQrjvYZFMX",
  "key42": "4zdn9zCNnbWLFRbdLGWjSTj9z854MJqSkLWC4QASt23AF7w3Zkg9oX5vXMChKPeUKvAkArEt5BhXKnYkVgiRDFk3",
  "key43": "3fRn8fCYoCv3JsabtP3hFbM6WSgfXPzkfHZX6iu44qqpESqBKtCWxPyhig3gRndvJmS4EjjpqUGmueCqtSXgeyH5",
  "key44": "3CSmR6qEN1kERrsKZbiiKEtgEtw4ht6i1BS4PTnthYGc7e3os3yjWzuJimJtQdkvUL3rTRkCx2AYfspMXVteshkb",
  "key45": "56UohaiM667uwme2pmiUWw5gAXfV7jsckDgqa8NkNrBgyqDmYera6ShUPpFLTK12ASiZiP8hoTwRG9yctZLK4sic",
  "key46": "5Tj2x2q1mDpFtaeT1jgikxEMaiwpq1EYRNxWa2Gt4Zwqmojdbrp1DSCCeG8f4vDfTRzYJK3UsREhWCfiHX4Nbmqf"
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
