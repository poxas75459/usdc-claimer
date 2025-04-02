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
    "k177LfAF6iYWxtbKUadn72EdFQk4H9vQRxP3tztdpA1K7gP27voZHFbdY31PuDcumnNBEGHa5aoErNWVJMhBS11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggHrvZvcdJtqD1a1DSgHRqEaKNYiej5nKH2wT5rDUvq9qzoBpzD6x1uTFvHnae8Eo9fKXXpF6p2psWwBHbUrhJD",
  "key1": "46zArfUAWRYcDheVho1eGSavR9AYpEdM5LiApa8KS28J1gMLPqXN8UjV9ji8TsZEy4fCtKbkzaMoqppbTmdCKvpy",
  "key2": "5XKrjrnNmXe5UzYzQfuFzXeZwUNiSYTEmvi6K6sWqzvtHLZodsCuLQFv1Uo6LUhP1uRFLJQfrLYuGm1cbwVVEDar",
  "key3": "cP9N6Xp6R6KMhxLnpEzUQXhaa6ApUTdYo4TmuBPBRn5Htey5bUdNR2Rr2Zm5SHeTx2Rtm8NhDfrN3hLLSNPscZF",
  "key4": "5awd1aLtqXVGE9iReY6ErGyynqneQsH66SmzyJ89bWnmmoWxh5N3kQLgJkEL59t7YEgD8qvVokRysXKdZ2jrhCym",
  "key5": "VQncYTs4dvPWZpYSu3MdvHBLmDs6A9La4GGRaSzP424M5KUTGb7VQzuLNYdrqF5QcMjaxaHBjDkxtNvSDifzMXY",
  "key6": "q2PzF9JmG61wetu5AqmRWn8zTVdQTpSmotJVsajhhMTbZTqn8VBYeSitB5GvZbMBLsYicSMeVRMgDQUbCMCbwvA",
  "key7": "2DyAZsokyd6huaPDT2SuJx19Jj8qSnr4hf6Sx9Vbr51t5MkESdDLtCJtHTvxD87LEustqoYTS5T7WvDLhczgWrF6",
  "key8": "4jFCM6B2pBqK6PZvpR1Fa55Ri89kJmRrjqRSkWyw6vuTz5ucsCvSurycmUtXWt54eNCkUeubxvcizjTyYcXC1RYx",
  "key9": "5khYT5KMG9jHETb3aPFRuYfNY1F16N5eBLZmos4vHTTB7rkLFsuNaZHkVr65w7EfjPXdwmnrVZV4WXMyWVASSbRS",
  "key10": "5GBGXyStk198BzprnkFHRii1P9pnnRo4Rc8Xvo7LxJuseoDKP6mkZR8QHPMYKJYEonUBLtEVAgUSxBownGsRcKD1",
  "key11": "2BH3qCSgutCns9ynCsoryRYNnFsMqxoHdTWEKSoYo2ALc9SCU9x8gnsQJnZj9jgAAcMsFyGVkHA2C5kXx7rDYcQB",
  "key12": "3ja7eurDBRV9Dq8VuE2BW59UuEDXYC6dC8qjeFPpc7s4NJAb1ocCyqpfEm94ZV5W6B2M2pdWHLEvXzY89Eby3JqN",
  "key13": "5HW69mfStHYTY3ePB4PX7VsDcN8ucDWt6Feuv1oxL3UyyUiGUVC5YNwo8NTAyTV9my9JVrz5sy7ZtJp5ojFrmoeE",
  "key14": "4cu5i2fYeoMvxFeSmoZtFSUoEeXnamHBftwqDGFbkyYVa1qnx3bhCF34WtsWPTuvwcHDZXGcvw9ntGikAjXqQ9Ee",
  "key15": "qzcozyNuSctwqnNzj1Z7SahDVQ1DwJGdAPjeCzhvBCcH7fS29b2cUHTwQwk5cn1dH4Tq6zcjtDcsAXmis4b1GhZ",
  "key16": "eL4j84vgr7mZDJmp6x5RmJNVwnEf9e8uBmtqxq1AKWfb7e1qPM7zN7Y9ywyDvWfcNpyXjTimW1uLwFVByApThQu",
  "key17": "2MSpMWWTZs3dbqqrhvdDCrfy1WCEK52ka5UUFsAK91idbWf78pAAD7hziza4xLk3wdo1hWsHD4HxfLa5cVyUNHsj",
  "key18": "3N9K864EdMfJhGTPvJuSCAtN1MSU88NBqNeFPtV6e6fvUwDMuD3p1oF9PCuVbevoNFkWkc94K2pA5kpGFS2K5Mb2",
  "key19": "3NEgXsU3ucVjpCLwaUae8vraR8DJ8e7SWFJYG7xJdHvr74uvg5PQpgCRZbT4aitDUkR4Q9WafcsykKPcnG3R45HJ",
  "key20": "2xXxNU998EVdAoRaGoHNh6h3XsLMDax88rUGtLvnbQsfEsdSRragEi4kE6uJ8XAcLUZ8b5yqikf5xUKUNUfYEYr1",
  "key21": "2GWJMEiXx1xx3y6d6HHvt8SrR4YiPnjQC5toqPn7837Cw9bMkfRzannLjWz567PsnwWAnuAAyu1gp4o9TPtNfUjL",
  "key22": "3ecjJ7CQnfKj77XHBeuBrfXjj5phfbw4vG1VtgTnycr3Dx9Zf9g1bNniXfDWa2AQkpAMzXCn93k3SWcynZwxBUmt",
  "key23": "KwDn7mMoDP1jhmCU6ykiYB97XXHNoajptP6ZtqtDLGuYJqhkpt8N5r2jXWX9JmCgZigDacDcrGJ7T7dJiFHXguJ",
  "key24": "5yQNtvcGiPTgFVUri1xStCFbGMdzAKXquCZJJDS3yDeZkn8jBvK92z9yjBAnra4eq2YZtMAd7sJeaXnH2mNvJMHe",
  "key25": "qNXYcrnQfHW6WAq6K2Ab4jTMhiaYfzAGU61Loo5X85JNCFTqrvVvinESKcdZ3drjE227HjQNgssPMk9px3dmuCe"
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
