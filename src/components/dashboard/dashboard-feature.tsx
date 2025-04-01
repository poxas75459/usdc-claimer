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
    "27Udzt3W2P8kucAgmcs7RfFpsJFXbMCHAnbS8e4ZWj72roSQ27gpvz1RcoTfZtQbkvgkVMxC1JycoAkcHPnS2XxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7EYaGmoCG51GTqLKPP8VaRPkQTDSHLaX64cUdQHQFoj9dVN1c6XcyS34zqV9GungvPXFBxmZMPwPs2ZvMfGzYy",
  "key1": "4ihW7XnVLS9HPv3iJb9CBn1En7MWjCDXBsDp2ev5ArPiyniDsgU4vFUe9VnhdbLuCJXdRKudvdqFd7hr1p9PLao5",
  "key2": "53LPMbv2TSvN3Rg7zCg9mbtjdCsGAoq9H2VDmmUUQWAYvTDvZrCMTjsDeiqypyCn1ytLNzoSnPvp7AJ5sGnBVeDP",
  "key3": "eoebvWTBciLWxCMrwb5bVXhZFNZyYT9tNajtdJ4ScmTVorQPBDbPzsLXGfp3S1jP2GrgTXDXWKpaMy77YvKhcjE",
  "key4": "4y4msDuAykGPJsQ3hH6mPz2NGJpXWm3m7b8mULSt84hK2BEhZ8rUuKzHYp4FSopvrJ6aTLohzLa8y1nGtAaumT7L",
  "key5": "4SCxPu9L37hFaKp8HCnByq9gKecnnRjjjYGotTs9ZxEmrBqghCDbKcaAUrRvhytWS3q8MgT15L7juEkfBm3ZAy5R",
  "key6": "3EgWNBGFovRTYDdai2MfLGztxKsDmZ1v1UKFLGXtXo6kC6tFdYN51qtqwARzcvemdsrjuocDYV3sZY4eXVrBa8M1",
  "key7": "UhBP7H3DUHAYfaJhWHVKLveUBogsWrVhAMKkYLvpZp5cJxxESfWmogcwcTSeq2zjVDY6YNyDBHXmZdfZA59NYFX",
  "key8": "5K6vqKG3ysFn9Aqm3j1Sv5P92GytRPrwNz7iEHevE2kTWdm7PWDpeyim8gwUP8WHbzXw9gmvJVTVtUFfrB8dzPhn",
  "key9": "dSDBicsq2otta9A49tMgofspodkXgTuqfCR5hCznUZUhAbwc2QbDQwVvaGrYqK4aadCG8WcWAfwNrxVe1cXnghF",
  "key10": "5DhfnBZJpmVX2YfE4M7MxMtDkQPKTP7ntD8audpinKHWRiLznLU1BDUYoA7Hjqf6JRmBmSixddwTidyAEu8otn8Q",
  "key11": "4ve34fP9bifyA53KN5KgsWxP4rVJ1FCddCwUF6sykxUiQ6Ac5wK5RVFN19aQcc4otSAXGpxFmwKEtGoUBfomEhkP",
  "key12": "3bS8LnWPSynJ44GhmMMP6hdFyhbHbKEed5nipgHfAGykKRKAuWM4tu8FD3Yz22spjSFeQKwei9FEpvDvjSmxZjWx",
  "key13": "2iUPUcg6jSMZ5WFGTgbULnDT9KgZtGK25vvJ8jf5bEErzqHdVuusizktXw6Mbd7XUnkb5QxMyqLMbuEtijpWj8mP",
  "key14": "5Mm9WPwfjDQaa1ayTySqFPRVwMBWEzUARSDHSfH2yrbnHG1HpKxRXtGriJ1prQpxwdzZWZL5uXYhJXcx7XoAk9Zz",
  "key15": "62RoWRN2TDGjgtzw8hoyRRtUMRNiSzrhrUyb3GL29QLbhxUFLTuxU5XQd8uuJEQi97ZXQmTCWjNVj8yuKu98SGTd",
  "key16": "W3oFBDvHw5HonEc1LzdKkkXZKnKkx7Zj39VFN9z2e8beGpJB4YtdcgLeyWmFopvobHvh5vmN57cGBAkNUSsZuYd",
  "key17": "41Z13Gt5n3wJaqqJCAm7FvJaY2dgsyFLvw9ofMAmi6xpLWnWgzDhbjKGhFfcvQurBSyDkKejHuNpzQEfdchKEHC6",
  "key18": "3C9SWJNYt6bHhUfwhRMNNGiDMi5HZXdx5RFpwUq6yE92tD9M6NjSQREeX6SxukVNfHLXcLK8tikwQxJeZKFC7LfW",
  "key19": "21p3ZKXnor8znPp2Q2t5woAtFH6tDMupE8Q6HctxjR5wNprWijoV2Wh3cmy9XZ3qW5ftot8LMucCEMgJrruKxFFN",
  "key20": "58jodsGbiokJyP2ixQMob6rzMaNvPpGHoTVoAMRWHphywVuDhufBrfNDGiaHpqJg2GEtjPZFbMizhGzrW9ccfPK9",
  "key21": "4PXwBEs8g4nqokphd7j117surzGdDeCR1VsWaxEBr4gMamWV2zXLgRgwhGPQ321GAkB4Hm9jBFYCBsTUuhpi82AD",
  "key22": "36Cyh27ZG5u2w8fykDFtLhUZBs3FfdMKrMkTtuS8KEcMyS1KVtYVajtrvV5PbW4XFTdw9EDzhhp3kNWJeVa8QvbM",
  "key23": "3XoDZ5r5MUrcwQ3WLBo3VLcTwZiGsitUeQ3BBFVLzg3QfiuYGatxPGZi1Uro8Syhh8uoYcnN2bAM6XbXFL8KwSVQ",
  "key24": "39b33W3BosgAJHSnvLf6FKcSXGrP4ajusmfLpJQphfJv6LwswzAwuTneQjeeiZt8DWRmcCTmhTeYY8cX4DbhEUiw",
  "key25": "3wuWrTRzTDrNUsfVkPsozM8Y3gtBJzwthCXHX3LHvKcFozTvdG2okcLZpZy1qkqfmSFVgUjF7HKhnkzaT5dAnCvm",
  "key26": "2wDFEtowtB8Y2uPM624Pwa39xZkNYCHcXuhUkrGbroKWY16KbSDkVRrrL8iNbQn7ievnsVRb3k4nUt9KG1m2hdSA",
  "key27": "3gXQrFioLorX6LseKcUyMo5CZMfPexFTaMa6aX5RVHo7CvKtqhJRE5YNFqEzixVfXLSjfxiayvE3FAfE9qcmxdjd",
  "key28": "5Ss7pLwju2uu478B2XgWwHPAF2Fkq1wBJSu1dsdUQaDuVrWRTpiupgrstxhM4vu85FNzrVyx16U27BUJ3Ax5PxuW",
  "key29": "5rtTkinbZ9DnPXzyX5Q841siT1azYz2d5NKVcH6GNxLfvAzuaZ45H4J83PF5PEKwNBGTcUKVDvASdL5ptwCBwcaz",
  "key30": "2MsUWBkScCGCPqoHcEYTbyPPT2YavVZQ6aznmYY5Xg6vtuwJ71HsNBupwuZyaEoEiPL2JebAz8YV221JESXQQX8p",
  "key31": "3B2RCvcknWcgaEYoi8hC8zR8FkXVcJBW2EpzhvHEUpDrjNhcYNLFjjYucd2LKVW66fBidxMLFXrPTDtUquB5uKgq",
  "key32": "2wk6ePksGQbmBpzgV6tgvDJNcpkDNAxvzJHPAAGupzB6U5D7RAAKhG6uBeqMvf7LZhqfjxgez6y4eouuf5xyvZaM",
  "key33": "562J59iNM8fMuMx54E9QBri577EFoGe4TzsXrKMJsHxzwJdjwPKwmGy8b5d76Zki6hQ5ZCCe86wa7Nx3rYfmtb35",
  "key34": "4oFsLJ1USSS2dD4rhy4jDJbqDTiftnoWQn3h6NeNhGBdJv18V3N8ad3cJkbzLS7px3Vf1vJTvRJwKJv3CjbXjoNK",
  "key35": "uxK64A46czqHVBrdhDAeowBc6XsSPpFeypTjibgD1zrE29dG3Db6KBX7bQiyBPz5LapqNNnb2Vkz9LrDPHBQ2QV",
  "key36": "3Sg3kaHNpf4u9qaavN5GSWBK8w5vSfU8UzYX3diwoKJLh41uWAjah7fpajennt48h3tE31oXMHxsYUhNzbdhuTFC",
  "key37": "3jW4FUnDeLKcchtuyHnATRkoLkUjCzwxDhETd2VTgRPg5KNDHfcbVTvoQJjetMFnzUUhDm7ZEBtre7FXLcQuWt6n",
  "key38": "2GgrgBXSdR4qtc9NutW1byqYfFFvYnT5XfAEi1htduPkB6A1bJq7kZ4P1z49meb7qmjkSKfB6bdVWGkEfaBxHWSa",
  "key39": "EcTbtqFJZHfjqVjwk8xkBr8UzcaK32eB8vKAHkk4EaJz78W1BbwHkVz2osiiszgtKBHifkygw5nwPNDCPB3JGX2",
  "key40": "2RdJYujCtp8SghT7MuzB1g8QwervLjS5F2v54uDNm3YAVXPG77iPG1mAx1pmvLBZ4g2wQ9rwsvQCxgokG2swRkWf",
  "key41": "2RhW722spWw6Jv7WWhFu8fFc16Jyh5fA48tiZNyY2jdGoPEhKcvzzgVE1ZrLRekb48HBrbLKUcZuPiE2T7GgiFR3",
  "key42": "55ZPTJkkHpZEBHeUmYPUQmWDstDvufaXm5rgPiTxJk23Nxd2PpKALM8vhhgz11N7ocxkNnuAr65nVdPdUkKKrj5U"
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
