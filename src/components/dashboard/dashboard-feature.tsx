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
    "4B3E6YuqaDWJqJRNp63Y1T8L4HHicXxgy2QJh8J8k88nMwG4ejujanyC6b4KMNcSg8tznEoVX34kd7LD9bd7pgtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVCytQncdxCuQuMGb57ZSEDnMHkHjet3UfoakLCJ4EJ8GamGwAJsu9RRyDuqSNQ1vhfTTze4uWvG5qKagH1KHSp",
  "key1": "5qwx7ZhnaFBE9QFzTx3pc4d7tWetcHxh4SPLkJzccoRh4mzw6yPaKPY9yHRx3F5oRXUATS83aLiUZQD74Gn8r97j",
  "key2": "5AoSk7a7W9TmBpfASQgR6dgUgrRs1WC24GYXY2U75GFecR9dXF4jQ1hbLe35b78L2Laq4jssmUoZ8uBW4zDNxGZY",
  "key3": "MJvEVGNKALSAJnDrFBKQvu1jyRk7w2fKxL3k7VHLZqRGgddK7dp81PVBTWjQYk4yNEL5RfVBxLnYnHW1KQUAehq",
  "key4": "4aPsy5y3dERiMvMU34RPzaRYNGJ7GY3YGF4CH37XPLuaEnDEbzKdxbkNoMoAMwP3L7JNoGhFFqLpTE5Fi4vgnsuN",
  "key5": "4X4ofbx7TLpGAkN9brbcQGMX3Hb2GKpRQ1VCoMuEKhqyvr3cfgvSr9J9yKxbX4XD21WrexJVJ3eF7oEfqJewHZ8N",
  "key6": "3ArBszn25UiTQk3pNN34XV3grbSzAmsSwWJXNoRLU8uRWKo3nStLGaHEmJVQKoJTQAJVdQUtCkuhVh1MBC3w9Vzn",
  "key7": "42qZYg8PYYMX4GtLM7XxjeRaiBA5NmdBaFvn5giJKZCGAvRXkXCRVEHTjvNUyqM4iPr5JRuXupyxaA81m1Umaxdk",
  "key8": "2D1LT3ugYwyhR9xap3esS4Bmxx88U68YSCraZx2Ndo6w778vz52kxfzsUvTgE7dddJUzDn3DucG5k6ZYVtfWUeRP",
  "key9": "3vPsn9apQq493i2AUoGvg8Jq8AcaXCENUSiFfQZG7SoX4S5HYU5y2vdouJgTYHxppNwvtWEhgYRhgS6PNpUs55L7",
  "key10": "5bmofvzch9GTeqoWrvwsFKW8g9sMf44Q6TzfeqGmagqhuomTkNH2WdQ7k5oxnFSmUyk6ZpPyzqt3rmNAgat2Um6y",
  "key11": "2UjzN8PZ32zkuXCYphUyQpudxfPNj3GpQPXxyYJtxBs9nn32oshrAjSH3XkmTMpSragyxXWnMcDSjdbXVR6k1jiY",
  "key12": "C4GDC9fm9npnL5udeR9T5UhNdkisopbdXNftXwxTiKuTSUQbXmrAgD2tggFaRXwvAofnfXL27ufW85vuPmvSp6r",
  "key13": "e2Xov1UnbJchxnz4QDmDbdGug2SqeT5WCrW39Kxg2CM7wawuko6ycMjumWPsSehzmdJ5utB5HFH9pNyHG3WPEsy",
  "key14": "63zuNVvcSAUC27wZyNKZfcQWJwBvxS9VjuJe3E4jNxxXXQhicBmcQrP1ZkRHr7BZEywDbUGNh3mfG2ktKgksLzhe",
  "key15": "36PD1wxTtM9ChrTZFDHnWZZN6E6dsECYxwQy3GGr88G12LyH3yadZKyfNcr5m3fmyBqsCytfKCwNfAtprUNcUJof",
  "key16": "5cvV7BYu9BM36R2fDTWjU9uPwqxAWuGt7VXqbMJRnN8LTK7awvnEE9FGVjbnRUjNSm2hcVJW2E42bzVawe5vmn7f",
  "key17": "4RSqjpE1UNZyoHnRV38TkiCEVzb2RvLTgD6MwHnNw6zix7t47z7dsK9cJFzJhKDLec81md6GSdU1ZNzQcS4FHgeM",
  "key18": "7R7omhycpMDcxbEdUdzMZmk5XXe4BRSYCb1rLYtuMuvZMwYseLX417hM5TDnMKEFnCeUfMEGqfvG2q2fUEZzwLT",
  "key19": "25WRvhLv3TZca2R5u4NiTcsXrrvSNmbidEDrNER5jf2N2nDaD9Ve9vu8PMCGxpuq488o3EFCSy6izzJpfzyXV6X7",
  "key20": "39nR96h2s7TbQT97zoo9XRYpBv169iz18pKrDMZrU9Z4FhK8Argnd7V8EFyaESLFWLhb3XU5jXdtRearCAV9JoF4",
  "key21": "4NdM2oSAoH5uM2Jc1kvstYPwDJD8pAaJRm1w6kWmnU5ay1ve48kyghn5rhRMdkzMeFkLpfpU6GQ3BjbmACFUdbEY",
  "key22": "ME7Rf5YVKPpBAraWSot7e1ymjuRFHfEegftRAesKE3omXrnCjJJAKmuBHyU8J8pSnyG2e8BKdf2QigHuxT3UBUB",
  "key23": "5CNcLywbaXgtjUGfEjLA3WgkLnQoG9dgDCMKuPVsGKkh4dSXnqM85p1rPLgZ7FhiJtmTZNCcq6Uu3uHwfc2PFqSG",
  "key24": "fT8HRT4ZH2NyfpZWtX7xRbSpGU2mAaauw2Yvx3bH3NeCZzrfex4F1tzG58veQW2p1Mnbpvbzb8bZLE2snXhY4td",
  "key25": "2AkvhtJYkG6VLzYR2GcmmPGgoPnpLChjYe6YvZ2pYt86NKakiD98VwWkMAfVCPyS4D4CJQxFkp4GpnEf27xW496a",
  "key26": "3TzLdrA5tZ9d85pUZidqrJFbkKMQfnTAoK2AZBcqQCjYdSj6PSuuHLQnRyEkGCDP68UckCu1ZkaZBCrVmaniQXvH",
  "key27": "5x3vSMswpWhzBcQ3xK9pQHDiSLCrLmp7nMpo6dMmBHN4FkgrpTM8ciNWqTiMqruzmwtysmXVWTueiC7tpanCanVL",
  "key28": "5t5oAFP7RUuV6XKFhFH5VhvmFqEkDF1egp3Xj5oM2AeCzokniY1qbGwDVpviXR8YoqVqM483GmZVVt73CK9eDoes",
  "key29": "3yo5LTEgY16GJwpRuLK5G588UUBQx5cGeSa1kqL3B4h2Hf18TiL4vBaYsEpvH6TCHgm3uVqnGZZvsuEiSrzh2gVP",
  "key30": "4iHmnjUHb24uMatCGfeAbn1eDgpmYq6JJJmimBwViojFWVPBqwWEmcp3cA4em6iHggonA3pohsfb6PTQDRJv94Ys",
  "key31": "25MFqUeUNasQzu5HzLejYnsEZKYiZ4MbeWMCs9Gv522pfxmEXEZ9qB7GSZt1pxTLa311hHkgoZTmf41yo2efqJ95",
  "key32": "5FXGpdSP8xgs6gVyFAeqqz632F3cbSukUhNWAfUFDJbRubMzLMbjBGGzCxGteeW4YDjyhcfcJ6easHs7G2xVbdXk",
  "key33": "2rUjue4wr6HeVuBExSyoKrFbDc2U9sWaEWu24th3KgXKpAubgXMv8c92bkz18hsNzms5K9RwhJayE7U5VDv1ne6B",
  "key34": "nHkVCr73jR3DRwX3ThFZiCvbc6YSsEoW2WQmNdxRNAQLkuDehMCX3MtztUty6ZE99qcMDQ7EerqdsRTgQkTLkJA",
  "key35": "5VNbUAiVEXY79yymBGgxywk2AESfYsH9tPfQPRryomscvBE7i1iw38zTqZ1Yfh3EiVom9d7YrM7oVPPBSvQ4FZ4g",
  "key36": "2RWbrVTCBMjQKpPHxmMGuUGiv3utZBVg1SZbbkH56zwazhdgzgD8X2F3RCnrpvFwn7f9n8EmbCubafe8HLTqGWry",
  "key37": "2ctvW9RrBvVA5TAS26xL8RrWKXS5Mg3ToFfxdEtMdGwmuBis7ii6Cjb3madGubb4zBaV9F9ZDwz1gVTq94etbkHK",
  "key38": "57Q3K4obShLk24kimAyW3WqZPu5jmoZtyGBiEnKBEQCQp3d1rZrdAZazLPQfn1szEZLpfJjzpWeS7kbZJLbYb7pQ",
  "key39": "3iKShkRCymen16SpdmM1vukDMxuA8CFedj8SMneRRdC4pbuquBq5atNNZPMvJ3bqfuGvXhbJJR11VDXgedvBvy5f",
  "key40": "CvK39yNd47VBRR89eJjQNg35AhHTJEQ42ALQVUvT3zm92jTPtShQ2A2ua7y61mxaKDBHgHQK6jv6ms6SF9xYqaD",
  "key41": "4QHaHV7nKBvTm422eB8jh3daTBZXGEhA2qmdnYa4FntXnfKwo9ggTMLpmvPUqbxhFfaRZ7fFAQAx6ZrHLdPPvAkb",
  "key42": "4sqb12hydg9aVt3AcHsCToewrfzi86e6M98pPbJripsZ32pUga9yYHJgeK5haL6shAGEJaZJBjvN2FFi6KFpTzEL",
  "key43": "4timKDHh1hqMTkkD2csKtUzU54GfRBb2VHpgbK9928VTPNfekwbpxUE3GF3p3RELGtkh22DxaNZzGD7tF8cG9uz8"
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
