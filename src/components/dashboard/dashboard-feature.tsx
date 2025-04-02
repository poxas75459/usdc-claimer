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
    "3VSJ1uNkshzmJDxtsR1YcktqTPpNKYe1zMfTX2nTcuN3jJEBKZnsCkqMLeT7p3SuoX5baWJa7Ki2MrubrATjcKhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y4PCywybW8mFUfc2HdNkYoweY32roLtbZQ8Kdah8MkS6m55CTwD4T7Jf7FybjxqU6HmRW4K3jrqyqzPY7UwBLUm",
  "key1": "5YQGkN9RVZapJpJ5ZYfNqhsekT5KPshUvaBt8kVA6RHcZSDSVdMhjAAAuN6Q6wv4jJUCRiiZBQUDkwLwJ5UZBphT",
  "key2": "3g6yKRKrALuQZJsC9P4rp6QRQ56DsXgnV6s3Se56Gc9iRzy4Y6iQcYF2AUWZ3ZYcD1bWmgB1GmiYABbwczN5AG81",
  "key3": "5dDXzv8fbqE58p3b3VZGntBiRYg2nyE84YZeBUT5kmWsZnFeKaUVbrUrgz2iJ3ToPAaRCtozqKAShBUZKqeD2FwN",
  "key4": "2xfPrxMa9GigvKerRM3aFUZoDJapQVGbjM9idP5p7ddLgsqNxNoParzASZFuBbXPK1DU7JuZJaQ6mdims5V5vcgp",
  "key5": "3mpnqePEBmc91jtkX1BftxwCsJYKDh9tWw2SFWeXPqfsTSKVgSjtFgtGb3WBYPUZZ1RHH7N2zn1pRzaqzA1uRQS2",
  "key6": "596HfbPBi1Jz6a2esJmRPJn2LC27yQxuKnRgi4SnBNaWee84vZTVq7L96MPJTXhZuuCFLSsU6wWTpp49YrcrwCNe",
  "key7": "4E3pxfDi8aMWVq1GSusqzwLxU6ubj2QH1e399if4ZDdwbMaDiNhVUaMVm1J5ozKetLTpxGzMpRbPBgXHBohbJa23",
  "key8": "4m2GRdX8eqvFVvVWGrGGWmBgpE4cL9fjiHTdbTnYt6F7iSo4AucPrsYAFmdcmn73k4xtvhmMW9faixE6AuPv8SPg",
  "key9": "57wAsyfzEk1HKFcasL8MuL3zX3dB6Qhkcz1AujrwEamJKGuooAYMGFeYfAR3hdRBpuaxTzrv63pVxfQ5QDuksH6P",
  "key10": "2WQjh8DL1pidbYFdSJbM64bcouK5T7NLWdUYb8sCsQD3z4DYgEw96BiS4cXiWZ2bgz4Tc4cvSL9YiG4mgjQq17WG",
  "key11": "3eUovwiog1ahEEUusyKdUGA78AEpktZGx3YZrwZrbAd91kDo1UR7F3TgGvX4G8i1mUPm14V3tJuGMYWX9FuhAgZ3",
  "key12": "4uJ75TVRwhtJUSUsLBfdxaJptDLRkJL1GNMbb4Ng3eLsZ7YPNSPtVcemzdd7wxEnSG6SAbzhaGtxRFtAx6J5GLnz",
  "key13": "XJQ2kf7hbxZsSDnFTkDGC9dnQ5Ja9N4EZWBtRJ3BkRjWf9gBVtieAR2iWZ7ub3TZKP65JuXXp3mMEo6h5qXYnvc",
  "key14": "vWtQQeTtqVp3L3xqdSTNnStGJ9HkHwzcDzxVa5Y3jyk4YK1dRNKcwfDestxzxkABaB1KZpMg3QdSiqPXZwYRo3z",
  "key15": "3KPRcUmZnqits8mXZrEsXY6TSmJ1ARfHHqRb3ivEX2cfdjqcAjH48BAzo96TLXY2jzZPGwuywuUXYmx29J7HmPE1",
  "key16": "2jcNmrq2FfYn1ThrbzijkY7avFb3GKcGBFhyHqjEcCeFiyMBRQfmEKRmt3ugAvCS15cC6DDR26oUifJR1yB4hYDC",
  "key17": "2bXr7xHe5q1W86QvuEgL5eTmcYpQ5BqVDgFxCpKzBRSwmuMwDWyA1vF6Huq4YNGcMxZ3vLskci1H87fdj8DXzoyG",
  "key18": "3mFVz5zXMdjNszLphq9Y7CHTnLW7ENaeR2sgQtmELz4YtfYxuXiMcfpoftoY8hd59mS9CBmJc6Pb4aoyWTGcfMqo",
  "key19": "5JE8914F82yG7Emq1P5FfRnGz2vvuGm37dWfggNjnwnNxknVPjmdP2BBEik7xzHxb27XcFCdeSDx1WMMjJZxJEQf",
  "key20": "4fGRjpbEMyWornN6i373RbqHhPs523MW2kbidwFawuD4AfRMnUCw8wk62tsubzHh4EXjV7Rr4NzprVLkuV3dPpua",
  "key21": "CLPpgoY3HPqfUyCBbiEeMCEfKpv6iVtfVB1aZM8nHNoxoYmYMGgWompffoa8DqfRQCR8qYBesCRLPBZaZw41SF9",
  "key22": "2KzqjGUZvq3iAYyzZ1jRkppFUL3wvCXe9LYWoxdFzjjB2aM5Xp55s1biMy5HJBhVrBSmztgARnUkWjxuPeS65nBM",
  "key23": "2R8ASdKu1iWhX9km94bYi3qWRervvJngo95S1pVs1fCjfCS68EhY1qFvSaqDhjWfQMSX1g1kTs6nA9TFbzZ5EUDx",
  "key24": "UwDty9sP4RR8iXizhD4MWqgjUFoSwDLoweEUtve3h8Aj5Zk34PQeu9sbM1YXfqj5D3HTSeXM7n398mFp9T2dPXk",
  "key25": "oKMbjvx9JRwsT9phTZcTMSQbeCmw4hQA8AxqjwtV6CRq4BGkbChaUozpr6KzeV4HPyXrvzz1D2TAJvujE5cScaj",
  "key26": "UomT3zzbxJCSygn5Dgu1L8rvqymwxCfbnbcVq2Z6y1H3F7HtE2g5X754uLujuBzagBFgFmSP3v8dExEmZNL6BdE",
  "key27": "3FPhdBfeAKyimtDkYzAfi1vuBfEDCg4U5DdvL34xoTZpLScAyXD2VSQj9f2nyDhHLcR2gL3LgDfzFYht5uLJLTyA",
  "key28": "56JtespUwLqQPWKrBKh3p4AvhWkkse8uboBYtqnWnByEeZZqKqXv4xy38dTzLSWtm9fk4rxfwBFFQxWxXyo1WHqs",
  "key29": "4dvM97uuqrnHTksnuLwqR958VFzhp4AcTquyK7oGDHzK7tTAyWKGoBqbHUGbW97dpzmXBjt5USUUPboJ2T4pP1Yh",
  "key30": "2F1FJZA4HfwCzxMdQ9BpBttyCze36VD62FoieoMYCv3Zy635PDMyT2JxB2Gekt7Y9SCcXLcDKqjDfnqzW6PNM9Ak",
  "key31": "2CULpimJb4JYpUTMJ7crybXaKUb5mey1QuojrnDnSyKNUER1nJYWKGBHHv33PDgwRT9BmAUtAuC3ahrsqHaXsFj7",
  "key32": "3dJE6Pgm24atiMJUKANjkTqUEWjLjrwrH37ZZuukBzKPYdZsASoNyoeuske9uw6hMhnRbYodbqXSRg3dWokqspJ3",
  "key33": "4mzc5TdpHNZb55NyTgELdnAk9b1R2F9HakJAFKnmCSbMidYwPTd8R1ZDZhvdSpCRKNhdmm19Tsro41Ec5WeU84dk",
  "key34": "34SjcmfWsEXyTcwFYDxWQhHdeA1hkHDE9Gv8UEbqfKr3RsRR2bQKG9vkc865hkvAEQYyfDR4JbAU8DndB3oToN7c",
  "key35": "wRYg6P5Umpqy3AMmoUxzxj2b4GUupGNmkLFTz8qetYyjqmSuiggUNgv2NrQsi8dLhZ1cZ2W66xbEn98yALb3fD6",
  "key36": "59vaPevT2V2nhbbafsACn9S6ZQwJM23CUbJjXa6RQiGjSvPbDHpmNaPutDGWJV7Ch2mko1HTj9LuSUQc95U1gHyj",
  "key37": "4YSHKUCGpWXJdFFuM3BAPuWt9LYnGdo2W7Z7ZrwY5VRTmjxutZ5GEMhPSGqbMQxPBrsUyAAZP9wcrJSZpXTQ2n17",
  "key38": "26TG5hcoC5d3bda21j1rrVDGKmjXeuVi8bUXXG8j5RUUx3LC8nNrM2K4wqK9b2Fgh9EUDGHyfBXfEniTdamtcdwt",
  "key39": "4oy6BmUyzjj27v6sZPQzW58JXXPk7HZxWAFVuSbz9EGrikckDF24JySs4NHiFF15TBuZ8veBuZPK7gKeri4TruMC",
  "key40": "37USbrQTHp36idZZyrKht4r7tLi11mQXSXHBwFawJ61u21BLic5qaMcA4TLqVYEQZFe1M3X29mrzKuuTGK7krnun",
  "key41": "3ZNSLezDYermFNXz9LPKDrXsjdCMNWH58N7Gx2Vxm5rp5tKc5RemkmjMTK478auhCLYKmt8ZNKSNDbf4D5jhz1jR",
  "key42": "UMinQjoFQRr3VMD7ekuCnrf3AyQzZpZ8WQNX9AyuVaV3GJvMAhDGGcMhzkoX7AjGViZLYNMaV3LFuksr6FuPgJf",
  "key43": "3K2GQGaJT16xVrnJcWQVT7kWAshJLhWnWkxZduh9RimfFVSi1p7rfqoYdpNuQuXmetkYrcANhjEJFGeYwQemuHDf",
  "key44": "5Mfz8As296cnsn8thY5nJEh1GVf4UBBxzB2FTkL26D8cdEethvYx2aweXkgTX1iYU6sVFcKHx2nqmLPVTRigMnSa",
  "key45": "2QMqEPcaLSbJ2XRVapX48DNx3x7Vb6KxWZu86PkjwwFoP3kQZ1Wty8TinMzVbcLiemcTNbfYLTuiSY8TMCKhTPNC"
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
