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
    "4EPz9YRrry5ApjmJpzFXAgtZNcyCYNFFGKnrtkyNNCDNT3gTMuYeVkB4HuW9dS3w53TSjg5zNtUWQmRXEDPpftzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284ffAgDWskwSpKt2DzDYCnQvA9MdzQK13oaNhBym57ybVZz35iCxEGnA3CEx9Ub5NxmQ5FU9NFrG8yXmtrbzwHH",
  "key1": "2kQ4V4SV1pvQSUWsgoTGXtu46zSkpcKX9c8MjfmXPnUCE7NLMkLutDpyVck448qqWjNZXfhMP2CcdzBn7BCwFSRQ",
  "key2": "2v2VCvrZRmtC2g2rcE5ohAn4ymtKCvSgxQjf95PvdVW56sWtLBX9eeVbxA48yYCSjweq5NyiMZcKFLn9yB2Nckpr",
  "key3": "3AKkTyc1w4rhxDqw95vDZq9s9SqpmAYQJ5dG7jCwH6DG4a95zKkEM8H2BKRwR5aMpE479F22WjUDECj9jGZEymFz",
  "key4": "21m6zgDLvHr2kW9DJAjwLvWsHYF2d2AZxqCmm4DW6StSFbAfmcwkbQ981mnziJ6baFAo57TRzcpMnnWEc8WhUbxC",
  "key5": "2VSqZzU2YA9VbjVmjQcqqHbB58cHhT3nzQY1FHwwwt97Gr7iRQUoQZ9SsqmYt7UKcJMP5WqwrX3nFRdbpXAFGMBt",
  "key6": "4TU7HeHcfuoPncSbhDzqfg2V2z9KzfdPr9b4RGPbMExwhH8G5NDvmiD1UEQw4gan8CpvkCwgc8WpeWQjCvf27Hdx",
  "key7": "3WGZyjLeobJT6qCZYfBiDkmTzp63Rb2ztQSB232q8TBTtibjqDfhsSEABzKbQRrbicV9UVp58KbL1kgjGti6gDaP",
  "key8": "4835hPpZDUNp5TvqUsEBdBjBcyNfT9NSYn7MTcnA2XVBzWR3kefHzo5PrnHfUd7RQonpXKU5HypGXqSctjPSfqaG",
  "key9": "BFcPiQEZfHga8RFeAgynTxA9U7TGXFWB71T9oy5boA8QPHQ62aV3ee6Lz4WEXh1wEtxE1xhjnXuDLoEPztDmZPY",
  "key10": "oxWawLvEmqmEQFCFpQoo2qt8ZnsT8rvJjn6h2sJ6imVBA5zAWxWopuPnHrg9NU65914n5rLD97rZmTKoRq5xcvF",
  "key11": "5zf8nKVimHW66yw5qu1ScNwpiGbB8qshqR9JsNWAsofrsw9mThXJgJbhawBb1qR8VCSwjNMu4Q9VRM61qiDeeYwZ",
  "key12": "2fLJLUtRCgxqAZqCBWX6dZ26pHqwqnrPjNCXZHqog9wLi7bAvNahBwisMViu7pyDzSs5L7yDyQ9F7WPs7z28m2Br",
  "key13": "ugr2b3d3YbmXja58XuzmEgXwb8w3eo243iFWyAYbMpUATqFhKLCnW22csP7rkWpJUqjd2riZTPzTXxfaSCnbWRQ",
  "key14": "28B9jBXyWY7ZfEdR5bgc7MUpGQQiuqfWA51eUNG8iMgQWVaabYRyMdX8fkMJ4SdXZpCUnpAk1Mg6dXhpDUqCvAT3",
  "key15": "4MTqFg8bzjfXhu7Fk4wjEND28vRUFyM8xNuK6wVn5YgbhuQFezQCuugoqaLHA8NTMTygZZu5aoTBoPt2mCGL1iUS",
  "key16": "2KejFg3kSn4TM5o7YN7EXPMj6DqTrVtW1KSrtNH1i9Y9Sb92bm3jq6TS1KFLTy84sZWRLyL7EJ488Qk6md2eRdDa",
  "key17": "5pPRiAiM1Fh3XAwkftPcWxXjizpbnf7bqntvivuNJtZ7MoBPGhHoUkSixAp4fuBsvnn2DHpcuyrtmTVRgpPLWmMe",
  "key18": "4Ttvm8HMS9ZYky7qHp6NieN2zsqs6NDT3fvNsPeAiYHY9cMvRDGhM7A6CNTFD6fKsi4Uq2Bz3JDX4rTVCF7DVsgY",
  "key19": "5b5SP4AAExZ2vFxaayJfxvoQsm2NBqDhcLoneFFG3ukkWSwhVMBVFE3LL9rSPzsF2MCB79nSzBaCMfimVtu5Pvpc",
  "key20": "5hkHKk5UHsKvPciDKpAYpKkzwsDTCkSQwe3t3TpMLosw5LZ99ms2rZrmx6NoxxwvwEaiRcXYent8eSpqFXxn87qz",
  "key21": "2Rsa6vtkvA6tFgD3hkx8nSnFRsgvnsex6BL6HMhHiF3mZvVtx1iK3vddJq3HiNEZSqWVJ4t1rn5m4oN41NLeAXcq",
  "key22": "3y3f7SMHu1dqNB2NfYa267jsDnwMSwVcMb7ELop6ddwMBYwTo3Bf8TJ4TfHxLrVmiaUGAALADJ9qFcXry7Qyd9T9",
  "key23": "gV227Q4tsKKn5x1HKXUEDfap5LrPvrrkvtcXV2MC5sWK2nYhSm9xdyF3PEMs3eTySGBtpJHMVDhU83JRTMQjYKb",
  "key24": "28KxR85npxUpsrgFN2XXbHk7h325MkpQ9ugtsxxWGhzhk71uieh49TkBrbPxEG415Vi3BifPZk16gRiDjFm9sDK8",
  "key25": "2gHPk1EPKi5DFR3CGs72FMnxpKPDcFMYdFaeF6afVTWwgkSoU8wrdDasZC75h7KWiZdJ5MjuGnfcSFn8Ujp935pn",
  "key26": "R4PfMVmkmjFDHV3D99nsgB9e4WT1TP6MPj99ad2vGGeA2dPxa8dZc5T7yzbu7qDSFyVzq75joVkx1YBTYvkBtEB",
  "key27": "2gQBKu3sJGMCjGnAjPC4WMbmtz7BSzRicwjQ87r3KM8Zm96C7otX1YLepgu8ZSTvb5bsuqy6fqxF6TPMzzfyoAHr",
  "key28": "5mVu4ZstVu2gmf2bofzvd49rdLHdYTCSSQRLjQxc8MWU3KMvftaK2L5T8GgqFFr7f7midajRjEdx1DQtquNmWCBk",
  "key29": "4KH1Dbasy5zD9Nptx74ng8QyM9GMr48F7cXi58rwxE1LYCgkjWYe4jzHUDmfAdU2KHouU927vkHL7Ht4gGp6jYfb",
  "key30": "Tgmuusyhy1pjDdVNDaWjL5vJbrLHLbmnDAmZC5Nxd5yrGNojkTEykFmBAZhzhQtPJfucoYybrRK9RvoAztNYSCD",
  "key31": "3UjKTw3wqTVcKAaZzAmMNNsmExoZW6Up8teZQv8ZuebmN46aUGsiMgf9EKCq131o9k2Dw5oGpTfg5cGFkDnnwqjG",
  "key32": "4bpYaN7dNJwrPnbDcFJme4vqLX4oupJ2eHLmQGBXyBnixPn8vywYGX73ak1TKxzck4vRpvq1J6YLebpFobyz8P9G",
  "key33": "2VGgXBrAg8gBEMBrxHX9QXEDCpbd8JEe4nzNCiDLm3LHYq4EJ4FBPVMCQDuQWB4mGR7sNVV1TNunoDRHurzD2ZdA",
  "key34": "3kwcnCkqATZxUXrzEgicdvUDkpufDszf1jxmMV41D2htaZbG1fAf5HQ9a4p3rH9ejNgs1CvVqXaap7DJrbZiP99K",
  "key35": "2zbBymS8ZpmkNdthC3NKZbBHDmBZj9mvZ1dFSHPhSG8ssfu8EgVwzEzgJgr4gB94f1wCGbz6VAHJxvvP3KJxJSXs",
  "key36": "3dBRt7pVzvfPtpCCW8XVJBUGJHiBruoqzs6t6X42BB3sSEX3WzvWpr7aZcZKRduYNAhxPW745ub87dniMrnxNyx2",
  "key37": "5SbnYH4zeTtrqBkD6u6BJyWje6eB38PxcRE5RRgVqbDonsuKXwXdydoNr92KxW7p29oMYTo7bZEq24NdsZjzcsn6",
  "key38": "LPCMwVMujfBhm8y2PoMSdykNUnPk1qLU91MLYmCLwcatpro3Drt9YN1vSz6jQdTeDuZ1PkFV9CPrZiPEmFQ3N9J",
  "key39": "2TgqZ699PJ1UfBF8xGUUWnsyPvJetd22MgnREzPgfpPvg6KxnSZFyxokk4TGjnNtsFpyLb3kfu78ev6GbcfVuwYs",
  "key40": "2EtSYDEESfzWZebc92t5uyqjKdambGidtgHyAKJumqh58HVR9oKfeFnUh1TVeLzjKsEAj7FdDSBAwsGKDpFyreBY",
  "key41": "48feScsuu7LWTsVUMX8E7enX6d4E1HXS5wxVGYurmdZgwAZxWss3rjZaoryENB6uBNV1H1c5v7Lwiw1Fg8ThPaTa",
  "key42": "3BfwaQ8ws5Szd384JC8VCyj1qaj8kKp1wpE4MKGg1mi1wo5LHjVbNuSNLJJ8d9z6HApyHqQroZrPXHKheGm3kYde",
  "key43": "3vXaigc6WYbCbjC95uymCXG6mLqiRXGEnfsAQNYVc1ey1G2qSbFboNLC9KJ7QtdnQ3N1EmESVB9PBJmJRpYp65uc",
  "key44": "28BswLq4ikXEoUUyytWC1R4uXT4QZLYZ3W4Q3nM4MQiXJdPXoQzoKntXdp4igVbfXVVkEX2RiXJL113veyMccMZa"
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
