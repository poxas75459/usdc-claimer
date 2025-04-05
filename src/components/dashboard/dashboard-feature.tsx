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
    "3Y8SEHgtGUjF6kujRYWBsop7uecwwYbcfscESJ45tt8HnjcnCp5LbjTBcC9h9FkMy8VH242gVfyMzMzpjCWwN6oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PkAFL6C6QYhPKJ5DzyuG23Sa8fFG3Vetzxs4ux3HRZ8LxmTPP6LWvi29MFyuy5hbmL6UmuA3SGYfaRhweKC8fkR",
  "key1": "5eqaonMzWDSuU1J9RDB7K6VMjLSX252MMy7yFp5CsGWeD4SHPjiiWJuUvmbA7Zi8MRhTeB2ztLdj9rmZ99Z8sPx1",
  "key2": "5pAQyMHDnY4ykjch4mZtHW7N9gbyGaeQuFn7m8KpmH4rXunEsrzyMJPJk96yDyQvGiU2egCmr5uWDv4zXqy5wfNC",
  "key3": "3rejg1qwKDBz4K8T476tAR1iGZ4u2yuDhRcDomm9GrUKomNZQazUDzLM67ki66KEPYa2u2bMz453yrTnrfppN6G2",
  "key4": "46uMGSfLBV2vXJsY3RGXPtwy1H3aZeNQ3woDBjFqi7TkhBe4Ris4gViiRBTiSxH7xbcC78ewG4nZeuya6ACvrEVv",
  "key5": "4yt56DvgZCVKysAS8wDteUK2rYeH8R1nxtri979pb77qDbte2MkmkPX8qBzJHVAiJMzi6FasD6u6V3Gsfej36SX9",
  "key6": "3En2RkrG4htm9Bu8tAQQvVYMyUn19tBj6eNCPkqwkM52fMM9GFFWw689LPK6J4XKeed25qFqYoLkmyWfFanMwANB",
  "key7": "3eqyMFiyvdNuDn3GvqSo77LT6n291NNtYo6NpmBGmbC6SpZD9QTErCqBCzskoHYZPhGuN9vSgbt9HbYWfcNPURkf",
  "key8": "5gr5BBD7CpW9LJjL8an7EZ3CxgdYizfQLjxoKa2HyQUGg8jst4L5CcbAZgyaAMLRZ9pZr3X4LmubCn4xxMtYmfak",
  "key9": "4xmhCYFy8P8G7uQGDhEZyp1hzpx2UgKtJDcht3cFk68ZcdsqmuAEB2ibRf58bqfsapXdQ6rywcCvsxsS2LTMxuHq",
  "key10": "2BAf3jKTBz4Ei3CxZzTfD151U5J4rUqHwbUCqrBsP8GeJovrU4xSERHaDt4ryKQqEPFmtuhht6MFCgAMdc3pVzUA",
  "key11": "5YuKLsWvDqjWPaYkWjt6joakDUrYQUMQu1xk7UqZ8HnThZwb4dSATkvS5j3mYsbXNKriif9mKXUSp1AXfSiuDNZ",
  "key12": "2jkf7LbwXjURSRudDfCZz7eiskpJdTtSNGT6u7sxPewELkbRSZZp29HcMidAsXAovW3UreBMSiUUt9LcVu8j58gg",
  "key13": "3knaYV3SKcUpnjXjzRpFz6iBFdu3E3Xwc89j6ruzaEKH1CcyD93grD2c7NY7t5DvdgxTCJbgQrrdccQSbbNN33N8",
  "key14": "ixsvZszFQUcaekJagCEHiWtqUSUnYspz9qMwT87e53HhaJ49Az1cnKJKjHNWu1sdew3nUvzdEq7icqEiWvZmLp1",
  "key15": "3hJ74ZUn9PxvYB7iUAUp7U8Z6NfBCV1My2fy7FZra6NTtXT3SLGfWsjJkbsN5NJfy6hRMEbJJwsM3hbE91xe3NCZ",
  "key16": "5PZMggUUqSLsSGNHnpMwrqUCAwd3DcTXffnZK3GM5zs5BWRAg81Xj89nAw4dVA86RhV69JXTKw7pLTDPe6FTh6TF",
  "key17": "4k9qDC3DcMtACLUcR67ub91Dk3547ZRokjytx5huEe3idkntmEczroTw2mTujexhyZSKgWjp7bEX74L9Qb77LeWU",
  "key18": "NCZeNKFZsdPNhgcJFTLnSir6Yh6yPox7umorvn1krDkrA6BtUbcRS1PajgEkAEMQerPRvGQZEKZdCmiXo7C8W5J",
  "key19": "45y4u3K8gvWLvBZ9gk4WxePJDhEQVurJnKngJXY6PYuStw95vKyhiyG3eA3bSNnPrPgyxmZepVnwD15GaGzyaF48",
  "key20": "28uM5YCd1jjR5wHWk96ndqUPMoJPnMLZaSGpA697VVeb3fVoQsTrPuj9AN1YpLswx92EWatHQZYEgN3Cg4dSMgNM",
  "key21": "4z6P6h5eRXqxgtQzDWbLNf4crP7iAWuhLsX5pdaVDCKDENuhoZRDo7Gyj6quyeF6366onTE6icVuGPszagNiTaFg",
  "key22": "34Lad9wMJvNDFZTS1Cv1D51dAVxqbXpbasWL3kzR3W7U6cGvn4kpwUdAgwH6fwZ5fJB7tWYwGJAuHWjAyxNv3QKZ",
  "key23": "Rv9z4rroyAwofG2f4vfFwHXqsn9QVqRqrcw8cMz2JE5xonQ7hpTmAcHgS6LRghfjyTabgE6Q8mjiuyExuLhYSaQ",
  "key24": "4MgmuLGsHSNEBPEuQSJ7Ly3YmxCz2UZX1xmyc76JjF8uhhC3iJbhprDtnTSyBphU7YkRwv8pRfDj3EW86nwRX8Uo",
  "key25": "2upP58iVqQffG2SP4fBMUE3oiU98UiznqvaDK9q4kPg63P255uZ4Scwa1hHok8tn2waqttoMBFt6RupgWqEjeaG",
  "key26": "41bZs4U77ujNGSg7GbnTCi3w3KK5aNNZ68fRqsgJvra7HMh6NKsEaDSAuadjxGxGJyKBjdnmbrzJtfLBvJfkQ9Xp"
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
