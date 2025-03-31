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
    "aWw8fDR3461diTAkSkg5XJcevETsP2vKSkLd6CuqMTh8hYBVdXhNibig8up4rEaLzxyUVJc7raNyEG7GyVW76q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScBFDfTXJTHSWJvtsiARgiTNbNjaxbUgP8B46vx4LuTYTZ7zmn5Mcu4oQzcq6LtRV1omdVB6TVHiB3SY8TgHEM6",
  "key1": "5kDetVm7hJtk9vnmvRSH1okVX5RX4XwZQJ9wxKkwP1zW7JU7QMobZjUKqKiftcS41HPitMYkSCV5LijPdEpSHVio",
  "key2": "4wZ9M4Nr6bvuHsejdjngL3AhvLpp7WDwoA5fYrRsfCnsVDQRLZbP6z5D5WVMfmVgaJggnCD1om6KdE2avJBF7kgE",
  "key3": "TNL7VcFQP8AkKaCeqjdFtjFWLT3xsLbchag59mhzthjRXW7d2hJkff6hdxCjxNCMNHx2f7zzPc4F35XSbFmqM3G",
  "key4": "2P47Jgfizy2uMnUz1SeXzbZncF6oRcG37H4e4FSYHDsp49n2NU6ax9aBotNkBbM7Vr9Dh47275ynLgKpip78CAC8",
  "key5": "4uN6V16xNsLTbFjuBrZAa6ohVCvK9qD26pxgfd2fL2A16ArUMEbxGGPhoC9KD9dUyFGAQ99P86zfCjidTJKCYte3",
  "key6": "3UeL4hfBUSAwjXzr1ufmuYwM8wUfjSh3U7CbR1VQVSsosAFui3c9iQ3wUD1Lw3JrZ4FBvYSyfc7Gio2StbUK2aX2",
  "key7": "5KDsBc5S5F1ygLxxBr4kWQsEXFZeiZPkuJKBR3hZyQPWqVtFr3d9wrHH5GbpwAFnxz7pgajtjHDQv5oxuAh2LUVo",
  "key8": "61CDdz7CTqcT2qXAaCyFzia3tAsjMqXNgqNCiApSYo8rr4L66jxxM7kTRaW7nkcvzzX4fZt5pVxoRihyd7AYA51g",
  "key9": "2KRjcKNBWZ14omE1RM34kst5g378o8SdB4gM3FbLEXVeJcUdsdPuWV5vyVXwscGMBe5M2NWfnLTqWSmNeuzDUwAj",
  "key10": "LhqCuGuAPg1Eid2FDJ97X78anroTgmzn8YN4WtYDxahAgmWowWNBTVZqzMYsyQdqsvpZTtqZHcZHTUnveUxXyqX",
  "key11": "4HJrChAXPH7sTnsQDHFwfJwFWGSmhcJKLvBEQXPuMeeHbwrDgCKLRBdvgQ9HoZdgdhfcyCzTqRomc52Tz3myFvL7",
  "key12": "3MnkTBbVM1NMyKAT8mXmjRUhNias4bLHoZWjNvUYt7SNRaprmaNwa9dBQ2EXJd1h5NHfdrAcP8TBcRGXFEehPtd6",
  "key13": "5g8gAvhP4LBR6TBi62secmza7ueCFCtLFWFzAbs7bE872a3s7RhRkUqQVREL9iWCnehPTmqPtUVJNUZ1vDmXqJWb",
  "key14": "5gmCPyURJFaSd4NVHY4B5n7CxiFSXsqPqY2NL7C2GPFZtDhEVCEx7otwVocS6hvGmcNRHYaCo614DAn7djTSr7WS",
  "key15": "521GViLzzQv2iuApu3ADQomka9H3BPTFKUx1ELd2844WMhPRRHeRSPGoza5RDShkNbBH6k5NjE7mk4dgThw5NTdp",
  "key16": "TWKMwLiCTvKJin5L7sJc2gnaPN9SXz5vhUWeFH4BATrngJRg7uU9wUe8h2N2axfAP775ubmSFxoChYB94grgy4S",
  "key17": "5ps6xSdRjUYaLHs9CaiUyYRDTHxXHEvbXJ2gEAZukdsDqtqGADQnnYxuvSPkFvjY6QPvpxLyRMCejmX3z3iXS8Fg",
  "key18": "HGStwi3HM94XGn7yzre6Q6AfwizzPDm66evqSwCymfnms46Y6VptwPEz4SLobkvmBUvaTXW2vze8RW6kVhTWPyY",
  "key19": "3Dhc5hFRPf1zggmwmriGoUyco1eHCTJYnPVLt2fQ5PvrKqpkq7oyy3WExdBpT67ZxzxrHoJaGC4sw5V8iZztFPAh",
  "key20": "35kkvGybCsYgWeAMo4tW8CEBQjz99AUFvw12e6qWTnQpGrfjhXtq7iBLJVWjtbtW9d33Npnea2cv5H9hxhjkfWGH",
  "key21": "3hAVrpmq5KAuPwhNV8P4QtYbVEfazMfmnBSJRti1iNQ8RpYZXR9iRWhmVpQcQyg3jzVxUHXpq4w6MueXqa4eRYk",
  "key22": "2q4T4BKjQ5ybAVdkpeA7mcRHsaQgCRMNDgdad2gHCBh6EirXGTVJURtj3g8fBUFyCazazDvtZ29SoKn18MPthyZY",
  "key23": "nyVeGhQN9NNtk1DRzR38JejNTa4KVCQrf7USAGV8B28V1CM5HV3GwXmWLLYfXA1uJxfpxw7avAVqARwfxewFDD6",
  "key24": "4ioVP77AaoRb1T67bGfzwLX17YhXcZvwqXDxbEZdZXjyZQoaXoCCouVAahBxEoAJTgqwStqDHGNroSZTX9TDrbyK",
  "key25": "38TCDMSkps1d6WKdt66AukyJERCoj3TMJDRz2kWTBrsvDkufZPHAK8H54FEpAKvTuD2knTj9x5LWxh2LZWJzvCzj",
  "key26": "3t2eqL2U9HwTt9NH4gZA53Txya8Qjchg2Xb8Ur4cqKuoRsCXHMpKQxrjMVSsdiVwawgZ2fW2QnLn13NifTWmVrua",
  "key27": "4Km3q9x34kNGqrhyggztBuB48ykMfrd1xKxqG28LuD97mNYBoxCWuFgrwZ9PDVvL5ammASuhqHaKUVuvNRZtKUrF",
  "key28": "3AXKYyE8LC5mxXwo9m3yLkomSbgvekYBMhQSMrcffn4xGm9Kn47R6iWyzcsNmrq85DDXLLGCGnKy6esMyrEwkaU9",
  "key29": "AiuYhthvTU2RHiHa88hoWw2TdqN3ujUy7npKHrJ5Gt2MmC8GRoQRFpcgQvAoJZ6YauKWGLj8btVRZM1ZAyFBABu",
  "key30": "2uD5CC5xGemDi5tAaBBbgEJdcotpBSTTjNBrMBHhJ4kphDJFFsgaAwWp4Tfaxwa7VsCXAFZaqb7wbQboKt39bGZ5",
  "key31": "2WT2mFkr75Gn8G9PMZQtV6eZb7iqVdJrWCrLkEegsFJp98zb2TWau7REeFBPeEceanxkXGa7VnDAuUyHDtBoAEPV",
  "key32": "3J2N9UWszdt4NuMkzz8CAeNRPf6xryCB39U7n3haP2ag5tLMLQhKdwrJVhrRT4nMAZi24d7wgetCMwtB354uv2bN",
  "key33": "2QniS3qRFjA1zsjvxQC1qyLCGCaFrhvZPDBVUoFFufs3qUVroU2tqhcVLvYjRRDptBw5dFo4XM6pxdXmzhziaH8c",
  "key34": "2zHPya41s6GytSSzumf3w8dCqE8hKugC1r7sq3SfztrS6noLA8dpTge7GcwpCRLTQJ16KZre1cBAiEHPR8LxGTZ5",
  "key35": "gXMCyetmhfvo77y18ksPRXv1bE54azakxKfyYgHCaB3PE1NckvoaBjNb6hsPMPhHC1GQuYrBXYVK235Lx22frRV",
  "key36": "5rvCSLM8P1GV5JsmB8yPU7vsD5u6Jehx4euYWsQd5eZrekZFpm8yGzWLXhiLxGbKUcN9GW5EJHe6VwFQexnr31YD",
  "key37": "3mdbCVusqx6r9yYwnPZm4SGpcbdYFbt8NsbkU1LHcpmEsKBQeU8wVn1LJpVGH1rGomhDv9yc3zxAEoiCTgJBwgBC",
  "key38": "5PagYeqnbvvcmtDziK6suEGs7ugng9PycAZND999CquQ6J5EstiySSa79ak6wvTfGoUApLCcEUPctWJJJM1whZwF",
  "key39": "3fvmka4E2jtFfK8hyY9sFhXH2vwcMZtbyhFLu1UKxFKTR1Dg7LDvJhRkZ7Dyjq45FpyptcHYQKeSEWhVRFq4swqr",
  "key40": "5kdsWbL3oyZfgjWDsVaWuTUBEFwYrUBXoCpdrfwnJTxSXA5UbcZJgiBfT4JzQzRsZa13g5ssGoswBaNoUnxA5L4H",
  "key41": "3cMxq1HJUEnYNmJXY4uTbixY7QfxU9HND3L8zYTy2MrcpB1ZNrLvpMEQCJfUpBU2aLVVgUGv31in1QbcaVqUvFPX",
  "key42": "5E7VLqAyzHxn1Luui2c5M34qR7mFqKTY7ZwLNyxVTzBPeJPBbhoiv11ucnnrF1WpPEG4u9mB81h1RFNfCX8UUuas",
  "key43": "2KBoHEoWscgxNFmPdbgSKefXBH53Hj1DAbPZiX7ZF2vEA4EHr4TAMdtMM9Apwf1heC8znhqN7gvnD3547TzqTy2W"
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
