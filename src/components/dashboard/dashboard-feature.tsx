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
    "5YUeFGbAEpunL8TvGYDPLk8sgFAMVrUF9gsB1WvJxN2iQyyddyFndMTujYMbGexqCjXqWw5rk7GEX6aEMLnRw1Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtL99XHQFBsCg1Rw7mdUgMz6hDbSL1ha6gPqFLaNc8Ras1UwFi666xTS139S9GGCg4dKKd28RRaYYyU1NWZsQii",
  "key1": "4Mi7QegXFRkgEoieYJMaSEz8LM2DmuquRceU2RL3UHugm6NBYULCLU3eXGd8QSVBwXmr3YHAjQD6JvLr15JV7Tvo",
  "key2": "CmBt62TXxwkCm3Dmv5qiwUD2QTiKZxNcGb7pBzaaEnmgda72TGxGU5iAeBf19zX1oUgeCN4TdQsWyvVfbQaRHDg",
  "key3": "664EdD5A51w7xfFPBEJsSa21UZYWGuPyEyJJq6CBwofrrQLew375WAoUNRXwFMdTLZzzWAn2C1sgwQQrdba8AUQq",
  "key4": "3J833Pgjry74GPVcwjmARvTiLesAGVDmR95RWFufwmgKbqggLw29FFwaEKpjkb7qKtsG7kWamnVqKz1nYTS9jzAZ",
  "key5": "2Mmk42Ar3apxdnzJyNS7CmoToMqYQYPU585VT7CByM97DWDpnEubvPByChg2TmJcKjFgr9CTFbQxiwHbFCVqPHci",
  "key6": "3pE3fvM8Q3sgdf5PFS7UfeVS4WiMgZU8iSbuyRvTcJvq2Bk2ryWe2jkoXWAg2m78cK1tTmX3rZrhT8qy1BCafib5",
  "key7": "5FpbaZw9dYWpRPHG4hisWUCNbnQsQpCFYjaRW2m7ekm8j9uwETgVef5TXFkhXJEJDam9ehcpVdSoewfaKTjMSByX",
  "key8": "3kgexv7pbKBLCFU2p7F2b1JaPhbsTKqG1BesRk3XSxbmAiNSt2vXFEJFZEVKEVwQMrmkNx1WGvMP5S6sctLTLpMy",
  "key9": "nsBoThtjmaxQzoDrZ64WBGjhf41XcfXnKNggqr4QLQh27HLrCibKePeehrgXBAptpQvRuo8NcAhS9UAuXEjCvwp",
  "key10": "5QGjjfCAasEf6RPi5YsmHGgfEfXxcnbRRNK164KNGT2bKwnfmKgNnjgEDb8K7ZWEPrP89Mst2BhiH2MeFUiUC9hK",
  "key11": "5tQhVYJPgUPsMpo5CJhoE867jjrFbuy3SpQ2j8sXMVFVJ3GEzVjc6VtXT8BiGREpj9AH4bhntc4p2vKpbEFWq4nJ",
  "key12": "REUE71cQcEc7z1T4h3ZcwS3gySDz9UdCRekbuLQM4Rd7EYgd9vbkHSJCHEvrBKdCfUjwqUmFPM89WE4XqXUTb8s",
  "key13": "sq7gPBSkeDcJWzLA7QA72jx46SyVmWhQRSuDRQCmKeRQDZnzRoj6eWKDcfD8fqi23otLthGJrHwR4bZBM7XQsLK",
  "key14": "3tb8VqSXXbjb2mr5kHKZyhje7PmHbjh3LgaKfCsLArGjwZmgBQNFYSnn97ZPL5xZaCU7HVqPWfUD9JdfTVFoMLai",
  "key15": "4vMQM3mxv7ACAT8ofKQ4qqFFZjXrTaniFQWJWnsLnWJ9UeHe1jP4bWfGmuyXXxTrSsLN63By216bgytCEQmCn4Uz",
  "key16": "4BixFKeG5mZMv5aNk5DxeUfoS2aSD5uW5f356PDqHHsuYWbtq9LQdzzfKsSMN49v3kBgRLaLdY1XbuvcmRtXto1p",
  "key17": "4xMLQiVeP5eRHWgf6v9n2FQPzRJp82GbFBwqo7YoAvDjZZVGjvSh88X8hNUGxSj1XxQ9NLz7NY3sPQaV3crtXXgr",
  "key18": "2bnRhj4Bv2g7Po21C1FzEx4tugDfSuzEyuZspDDNpqzWzcQQoWUjc8SBsXyPaUBEAQ3uKRybcTboJaJYVprqkNmW",
  "key19": "4bwQyoKnttxbnpKi2ZmKGvC1Nf84KRxRgZfMBoRCo8spc1peioMqf9ucmW81uazFmHbccCNWRvWeAbiahgzknGAY",
  "key20": "YYUmnWT4xncFcZAuN6ohCbDWAtefuY35XSdfYPdToRgT2t9d8w5SCjUvTZF3Ef9AAbZfBnyfykkVAS3iPGutEpD",
  "key21": "4topMYK5kL3pS6PF6z5UX1Vuk1eck9aN5A6Q5vD48vXdJV7suniEVD7B3fNBGkLmS4pLGWGoqyqHpMQs9UD9J86o",
  "key22": "61jJGz1sK29bDynnWnshsvAjD6NMer9JpYah1hWoNBin3CkjdvdDS3e2uRe47YEun3UtiVWYQAPr1bpckMp29r77",
  "key23": "bQG2b2dMvZo25kmYFmg7Rs3h22MDUaYWwfkmvSkr9dnD7FN4PfZNGFLXd8a3eGHL37CDh4tKt3NBEEKHdBM2Qop",
  "key24": "4qBpCFhGq29Q9GD7BQBs8Jf2LDZv7HW4bPuVoHy7D2vCcEJP8xRVcCYmN3tKvq91sBdvWGchEXozz4vbUH2DafpZ",
  "key25": "4Bg9QeFcL8TWKDWNmg4zaexojJxJ4DuHcuSu4YkZ7me3TDzVx5CBFQmoYzxWtQe1zxoRSqeTg8dSqSWjyUDv1npA",
  "key26": "5XKK4uf8X8Dac8oCKUt2to3PVbf3u4aFE2igKJBm5VoHp5cGqLFvPL2WnKTzimo6zTQ7wrMnKiS66B8z5wmuGgfX",
  "key27": "5pi9Gp1ho4Ziuzu8zrrnjCtDwjunmu12UsfvQxiGyJCYUecJDAipDyM9nqjAj7UWiQj399oL18f7yJYGsoK8TrEW",
  "key28": "ihTrL4autL6APQQJAGHR8PUdubZsPPTC6Eu1KDR6uRogDMDW9kQnzVMsNSePqMSo2aKdjt81g6hH6hUEVoEXVmi",
  "key29": "oKjcsGKWYHSFRMBuBFgSpNY4KNCXpPkGRZ9Cq8ZGC4PnLmHXZKxCUnjcb72S9aAMcKxSv8UCdPY9qSRLURWpnNW",
  "key30": "37pGLUXVGGN9d9oJy8ytWKKhhS3eJzuU6bc5PwBB7HfLAJEdjvkpL61xNAc54H4mSBpNkJwpYG1r5Xs7HviERK3D",
  "key31": "2FB9pSiPXcvAx2fHRd6V2U94WGYraAzrGZzvJraF4QHvqHHYmWD8CeD5iYf1wVC4T8YpHBeZXSHN4xX8dGrVV4bb",
  "key32": "5xV56T3UKnnZpDAhwb9dSaMNqcXgPAwXmrPUancjkfFpYiEoFcF67cq2yHX1LgLtD9SdWbGqwJ93iKBnGD79q4wr",
  "key33": "4qyNSMrihg1xBGDEBQBbwtvCPvWg1MvzPPqmAV3HwJg5dzGDa114ppTnF6JGHrGGEMF6zCZdLt7FDPwvrW6nC7BC",
  "key34": "5dzuzTTz1Po83gV25BEmeFkC8E62CXXSmtwrut7SPLnH5USU2NFiqYBaNVcTKncYTq5yTmGqz41THbs2K7CxMn6F"
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
