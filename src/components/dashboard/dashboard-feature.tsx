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
    "41k79WLrUFiqDpFzScemKzBGCAbyZQ5jNno5Gw4ZjTzc6A3AeJVLdwiVMNFuwoeHSoiudkgYuwZuRP1kVixHxQK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UNgZrDNqZWjDVnr9cSY7U5cuVMFM639NyyqYcWtKAeGAjiTzTqVQW1f3AJSSAZFzY1iWcFStptfHMjnysrKwyra",
  "key1": "2eEdQP6x5os7q1zKbkJsxg7wUWvVuYqwtxASjfEwH2UAmvFcvGqpKijRi9ENmtAGMFDMSTHkGCP4ieA4CuoobVSw",
  "key2": "3v1mPY6aStiDUuFgFQp2ououwZ8KQquVrQLiADcurVum3tYjR3YQvW9Raqb3jnMpN2j1BaWgi4MZrVrMQd3prYr5",
  "key3": "51dPxFfwV2P12sezNCpoopv5uABVqDpHgqhzRcB3y12maUaVjNsuS9gjZry4tBAPHpPDhSuAdZurBnATusPCoUB7",
  "key4": "5i6AoV6ZDAGMY8EBwWRJfXpnWvM1Z6grGWmic1PQ2iVkVw3Qbczr5ZRc8yZhU7bMaoADAxwsbg2jQM1BsG5TrDLt",
  "key5": "82t8DRHDen5PXXtu9kEp8DrFskLsmJJNSrpCTY1v1627ot99SQ8fqMbuH6AthoSW5vtM7qGyjTiTeBGGgdQfnSK",
  "key6": "3zgKAizEvcSByDM4hJYx6d69XkWoCgqJxog7MB7WAEyz5X38ieKWNCJY1VadKDzFAVAKRndGWRAZXckYb4MPu3r4",
  "key7": "M3YbqqEANceR2kCeobvy4KqhLRbXfUrBvrDzCQUaJsUVi1Sf5tNUHevCad58jCwTAYuwom8exZDUf3Ffg88xyFr",
  "key8": "3XDcXxa1b7jPetvnfb1od61kVbLnz3HBBSp1cccFEbF5EYLZg2pSxXDmLBjhioix3JwEnzm9C9BjBSba9Lrwqkec",
  "key9": "5AffK6kjJP8CNfB245ENw9zT4EKbXzFL3NJ3vTKF9P6M5BEpWnKGUsAhjj7pk3CgtL426gXg7cTxWDJZTrGPZwSr",
  "key10": "BTiKfFV2uHQo2X2hEkB7F55FadquuGRNmHXggMRUvut5Tua2igR7HX9sxUPZWBaGMriXsc5YAe8DLxjaC2o93Tt",
  "key11": "5ob1ZT2aZsuR8pMx7GRza695N7hZPaqRHPEFYTrUdbaxxTAAzaKwKrXJmWd8Zb8CA1reCz5hDGSgufjse21JcfQy",
  "key12": "2PXLDx1S4YMc2juG4sjd7qhvfiqWzBMFYuhuAH84C3VQj4VeKgCHGBY5TYQM8M6dpWmXtChuGLuMUu9kccMUSiQX",
  "key13": "2QyCToyzVEeeC3DrCkpQZdUqxb4m66KQSGJP7UhJ3jjsxKV65E3j51rGgBypofvrHtBHLnjZjWZe4kLq9bBbyEBj",
  "key14": "5PX1ziSj2LGtT2UzyLh83cMuLCCxnp2bYhV9WbsMXof48n7dPuPe3ppEXa64KoeAaJGdTo73Nxn6BGp7c37DUbq6",
  "key15": "5EEWHM2QRXHQRqGbN2RfSkCTvwj5ERqfYx7tToW5rixvZ1YYLDEzT91KxdzJ6voD2Pp5Wct7cozGM4gPfeidex6C",
  "key16": "5SDHuuDwCE2UJ5PzBWi4BUXcbCrcUemUc3fEnsAamrYxFgdxPKnbMm66vPn3fj8cyg86NKhmbshoSpYsQQ5nG6ZK",
  "key17": "zGQy1gpVLXLh9iYh9qUiT9PcQFDoSw2EeGWxZX3G5KBFCC2WRt1PbGN58stADsbP5HV1jdPHRJaqfKBwyCybMVd",
  "key18": "2GGWK41D913fJ9cxiBHkwjctReer1RWAFB2vQ191uCKwqVCAZGUkDUFxYfRayXf5dzhGEYN12UTu44LWrSBoUR1K",
  "key19": "5a6w4zSWVzFMv3o98iHJG9NV1D6X25RTYkKzVTfNakLEmDnK148zF32jNP66Qm96cGzx1rBvjYmipxy84UpXThiS",
  "key20": "3DRau4sn94FBar7Q55FnSpN8gaGnBYjFhM2ATxdWKTTyJ39NwqMqnQSBYmHyxTmeY7p3EnotB7fEYBtPETc1VrBM",
  "key21": "27pLzJFVimLGHUXdmyxh4G3KJfEJU7NX7CwivyjFL85zBsowoov8N9NXMqvteVbWszLRk3VQjrK6PW4BmYt8BfR4",
  "key22": "3QZNaQ1TDZUUhdWfLDhtavCe6tTxLLjY6mkWGZqjto1WMg9XUikNqvvReR3HidSP8tmS1hd3j9vV1acBgokkzYA2",
  "key23": "PELa7ZwNRhgjcxSrb5q8hjrS2Db1NqLutrwsTkoU9CR2XtfBKZq2hj46rcKxBccuVBYnNpy1MTHS5ukM7L8w77o",
  "key24": "5H9RUjMTxhZoGd5MakkAffKcBn6CppH2N93iFcfAr1gfVPFaHfLWxirdvvfom75PKZVRry1eLHFaYpSCHNAUD2ke",
  "key25": "3Wm5CsJw9sqXLpM7nn39RJSMJNAJSNQX6gKbp9mk2zKd65uxCL1GVzgQ893XGgHivgiMrFcNuyaNQLsjrop7qiq4",
  "key26": "5wfGPw4ob98vhMuAwNaZxmMrRX2HadzT2awJsuGG6NqhuaffFpia8e3pEf1MMoQzAwBE3TFP3aM45Q8tmtBi9G5a",
  "key27": "Y3vpokXeeVCrBj3T5aQBxXGXLRHxTekQovUPfimwp2Tq36iTSWfd1DG4T19wn6MTdGHNdgVPmZFmDmCZ7sfpnsj",
  "key28": "5kTjrfYDa96BvpqZpM2EH6Rbz47wcvLPYch41UvoUpuL7tfXeA56PSHVnidAEwvnMiqGnWQGsVo69DNtJqakeY7Q",
  "key29": "3caJQJAYciWt74CC2csDMijc2XJXCzfvPhBCmu6KBJ3cH5B5LUSuVNbzSvu3yzW6fQ4SB96psCzCceyKDk3nssHH",
  "key30": "3BfDyuHozaSh4rLBnwHHUJoytziVfzVokPCaNCW7sS9ooE1eBH16RRSiH2N9omEtBYNeT3vQx5HatrmJaZgt4NPr",
  "key31": "5AECAUE6mBipfBvz4Xf67cgt26mJZUNHKd2WTzh2nhUbTXzSg1HrM5gMtzWtiqmDiQWLuihkQB7F9xjR5YCrFjiF",
  "key32": "j3jj6Ho63SNnEz2Mtjmqj4LGogmu3xUUKCCWJLCb6uoPeF3g6Jvmwgx8HZK23kCJbQ5yA8LgJLA5qFVYzTYDfy8",
  "key33": "39mUvKY5BVqx6DiEZ4z3WbUKNfSCA6McHDsUqmdP7SyBpSqKKgdDBFSFLTFKmWuMSaHwoV4gXg7g91NnPz2Ub4xV",
  "key34": "MZ915T7jSHeRGN1Nx4FyisjMrW16WEhZDwnXRU8rTwcXQ7ZY4s6VpzV8ZdNj9pUGoTrxDKLus6UZHyJD7Z2R9Rz",
  "key35": "29VYSqmVKyivaeEstVhjPxT2wydwMQdvxWzs5oZq4nM62S9oo2miZjPbvQpke1nFrX7ZUmYRG1QREoYtt221fM1n",
  "key36": "4xg5KqHxSfB2Tf7EkNokP1vWNwUhSLhyoH5jHiujwTmbYxiZ9EfiAscWARqkhueMboxysM3ko7BkJ1sCMKpYtTEU",
  "key37": "52ePYzFfgauij2vNbWGs3gqsJrCyeoRsRWyM98wZiUuwYKby7Lmw4GnyP2FX7gGkDjfup54H2nmimbR4TYVqDPU8",
  "key38": "5UVxrQmQuhzudwaEUkT1Ns2NcHc519ctBjzqbwM6Q6R7xaPdjP6hcqFrYSeZdUkNHowH5hoCBBuZpgb75UUGbzHT",
  "key39": "HP9m7Qj87Si9kGaAaUH6oDUK3MEtMn5krUkASjhPP7BuYybgmuyYXw9JH2n6mrfeAByoFhNczJUYxnW7nKNhj3R",
  "key40": "3RhC3EjtF37CsxEkRbeB4bWaMTqySUWF95Px85zQWPDpyD9fdEH3b3DzjDrtnzDMpuC2QvFgKPuZbxMBd6tJaj1F",
  "key41": "5F3kmKQFekVDiSt7hemozxELv1ghLyN51MzucPwcAM1eybMGhqYc6jdHQGcbYfJnUa1bE3tLLEx5D7UBghyPhvmF",
  "key42": "KdYFnBF4FfxKRWQKn3uZn2fe1Lu6Hy8ya5re5W2EXDgKLv2pMiFA4hLWN3Pa41LERLa3Sa5g7iPw4vJyemCP8m1",
  "key43": "4N5HWmAbUwYYGPyxUcUC8Y12GB8WqVxAqxW6J8CApzVpwj1Lsgm9AFcvW7FRBvVhfQUfasoRvTFFAeYH1BkPYheh",
  "key44": "2F4TcD46AwXUG5rkb39ms8P2WnmoiyA35rpEoKKhyJbsR2azWZyxKYc1Jqh5FndFU2175bJFbvx2WcJorz29YTrz",
  "key45": "4QBKtf9q5FqZrw2DsnnDbzsU5KESR7xWpbtonuin89vA8k2tGibndTjQbgNgmEAQK6n6ZX9BhBREDqP5rMaSRf3m",
  "key46": "yHEBdVtB2LS9DqdejzW1obiTuqqn49Z36MveivZQtCykzvgGVDVed1PKZrG1uLcVPocZkHp4VWgxcGa1fUF6Wk6",
  "key47": "QtQ2bPWg4w1Z2JgQ6GyWcFfJEDfATNhS1uFp8nB5TEkZdat6ff7qvNdoZR2ndgazcccg3jvPvfmVodRZEULwX1H"
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
