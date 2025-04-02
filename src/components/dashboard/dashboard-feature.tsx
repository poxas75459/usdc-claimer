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
    "anES4njgJUtNgo6msHxQcvrfiGciLeDfGQaxMzCc9174FZExgXEf99o7gxj97u2zcNE4iXqeiLDzQ9HuND81UXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWrPvbNEzPs2mgN4dhQpVLy1R2mec4jbd7TBUbj72WV2uw1tmq2X15FKyiRseoWMyt1hwQjgqb7VHZwducNpsxY",
  "key1": "5aCnxvpWwDRT5xqtxuVqkVVQBkDNch1zujsbTPHH6rCuXq4joaErp2covD4Eu5wQkMP2RhCczGRxy1KNz6UHiDJq",
  "key2": "5grAXvMj3a79P6g74bCXk1LUd3E2sPWuoaa6gc7y4BS2gscqGdLQUZxrhkzzzZpBeP7WXujPMBKx4EFZiK1JUA8f",
  "key3": "4c5ms35kFLNSu1iDfNzi4dWq3UQ6eoUj45MN1jbk68QRhuCVm7Uj6Z18YCRJugNjPq5pnho1mA8411QCUGxNKrDz",
  "key4": "4W6PFPN862145BtFm4xoa6ZGEsMf2UhgfDP35jY2LqD8PWaJgTKr61MSHtBEJX52mGbJyX4ZZvX6GmZpERVRtrgD",
  "key5": "5kycdj5TWGdFDbqYfUE84x7JSq5tJ5AtvRPqVHHHgEyKanWeEZcqrZQejL5obsekwZT5PX7qo5xntuyegCU852BG",
  "key6": "5njvvE4KrSXiBaqHN2GKbtSSBRyh9zrG5jM765oRoKNWBtmUciLFpXeHrZzKxmJe2HmsQsh4M4NFCm5qegw1KrfJ",
  "key7": "4L36j2D5arDkrHDaLEYm4Gvjz1rQxVZxk1spCqvbyALeiK23gCdvipR99CaxSduKkh2negnWkFDfXGJqAf3RKnhn",
  "key8": "29vtavDyNZTuM1Sqm17Vc4rZ3mY3MCir9AqJQ6QcQUzjuVduPDKgkEyvirw6ZKkzDpQHLK5uBj3MBKeJKqGimK1s",
  "key9": "45Zy7YLHmiFrqu475iXwU34WTQrhNsKTXe3DZVFZaLw69T8phHTNSY8ZHTRSyqE6xRPKpxdwssj7gsy7dn77Zk4C",
  "key10": "2zpzTn6rbLbGmXxCQXTBhXB5HaqZSiMykU2z4nj3KnsU73FH9MLWD3MDqssXFUTpQNs5pL6NsZDpEiXfdWGk5bL8",
  "key11": "3bi5tAQoTJdLGsEhQCMUEBZaC3aMhofT4yULcDf4PvGzAV2o1Rm3w3cnaWZSRpdQrWjv54uTzd3AMmZqBpNCvx8e",
  "key12": "3L16TPt3q3npqAhn453zU1eTShGLs8AswCvpXGYt3xuiDdhA2QyUxLuNF8Qa9gHBu7Byo4A1wd2mR8FtyvKXyx8J",
  "key13": "5aSMeXED81ENs8ZenZEnKe8BWCVkseAprWzDNnYDRzVCMqNtuBidigpqBXFcGRnXbTa5TAwsKYifAEFNCQMrq27o",
  "key14": "5unCUe21rGTzZBr9darDL1CSPFsS55PKBB9YzH9kJfCEFtdDxPKZE2v19p7vRLMyZqRYVWmYpoQAJUvDuh2oWgzv",
  "key15": "2joLw8S2ZtT6yzAwQETxATRfFWEJEGodcL7wiQdKaTfKTzu6uRnpiuLbkndHNiTZTxgGgJacUJWJEqKJ44nLD17h",
  "key16": "29VVqcpBWo34f29rsuR4yXkkD8oynJLvaEZXvV6dqz7zsfB7Aktb5dsrT7uJF2JqrYqsZ61yKWcNrfo3hLmEuo1T",
  "key17": "2t2j7xZpiV5wEL6W4z4GnCnSn9ZrbTtyLkwHTQKNggGFasMR4Ue3iodM5K55hiLm43F8FkmXqZdHPPyrwXSCaDCj",
  "key18": "2uBxQx9cVtVGqyNyjxttvicdGwS7kt9bLetQT6jJ2TT4d8BtxC27vRLHW1iAMMT4fCXMnTU5tU1gQWFuAs5PAnXG",
  "key19": "GG8PFYcCnS2W2DgHCrrLRpmeNZMMN6AYD2FCQHBNqHpViBS1mxwkukXV5zCGMv4StxWFmSDdSrWPPqY8xFx5i69",
  "key20": "5debWvTtvWXyaRHg2Y6oiWH96rK6R9a6hJue9uUaPrNfhDxahk2kqA3kgTCk3UHWanNaMcuxZ388bRqUpQoGcAJs",
  "key21": "5wZwygVFR3j6g8tyzeiccAZFGi16rfHnYWhUuCFRFUL4W1a7QGXU8129ztS7WNQ3g1j4USTmgQB7gAk9iUppnrgV",
  "key22": "36a8kTLF9XV827H4sdHL4t4DUJVnaF9fNgo62iJsBxUUEZTjzEwpbPyrChqTxfie4wwpQiFndBR6cnzF6agrQc6a",
  "key23": "48epaABoYsk7u7m7Tm3Ng5aDQqueKHwiD6vEyhPe7wshtPDkSecCD4NnsQqwn5bJEWcq875D9ocktz95vg52A4VG",
  "key24": "3NGJ1e7295mSLVKxyPuoyuQwo3e3fdSS7tNLoB4SHnZkVr7oRVzvcTNrCarpNuNptXGhMessgzDe2kTWQgNxUKDV",
  "key25": "2zkCigrGj27aQVApZsgexiS9ZiV3mo3pFb38ZWy4papZ4cx4wgLMDmPNRNuwxWgsWKUoKZztYz9P2tRDHKTWqS51",
  "key26": "1GfFpLERMQMMvWhLt5Q8cQVxcWNh24WaYDZ1AVyD9Uo1xZZmrvJy1TaiyYnWvQq4szgyLwWsrGtJJuPe6Vfwx51",
  "key27": "YdvPoX7fMcchyjb9HwNqJ3EHwKwRPydDvpv6z7nuqRwrqMUXzZ54njEkqm176qcdQCtb4cgPRjtLFDS6AixWup6",
  "key28": "3fhJvEEwWKRUnqZMrTVkBEa4FGitquyePfsDd3jVtbbGdywCAnWvYb7nGNQsYz5XbRWT2H2pCd2HKz9YkCy6w2pf",
  "key29": "4iNCyVB3GMgW3AMifh4A7JgcS18dSTpEkQtHbwCqidpd5SD7uzJ4SyoQuDNQwmQ7NLW2EdQpyNojHDHDdajCvTkb",
  "key30": "3CEvcAwjgPwaq8ezxFyo5xwfwKnqUSWrncqrugp582Rh13Drvf1faVrBo6u1uCSdJaRcF8DtQZUALamT2XD1BYmp",
  "key31": "5PTpgeRYSy8ptPAcQqHdzswQ1mLKCYP2iMdMW4g3wnX8MF8xQReBHcSLKzY2eBFc6HhmkrG5fRHamgFbFZ3UsvYt",
  "key32": "4eo9RtzNbjDXBqf5u4eWCDoAZEskJVehXnA2muJyxeiDKuq9H6Spm4kV2SKZH4Ryd9dsaPL9GVocbzb2JkJb4H1G",
  "key33": "nzeKRgMMefVGiEcgP129x1RGc1QfQDKkNw3bCZ3sxcmQRGYdK2PbonRa6iSR9qMnK1iSs6Yid742G5FUPaELhXS",
  "key34": "38rfZpRwEc83SjcN18Uuzy6QbHir4A9s8dF5bqFv8GCYKwVnrthN5rvptzqjmRAvBrD4ER97m5JmDGVQEeBcQVuN",
  "key35": "4xUgGnwVvTHyGq8X78G8RvPodquQxjh6mBwwGtASsKQAvPWnCnrLw4491cgNWZj9F6mUrpAbogFJehTP6iV126TZ",
  "key36": "44TvAyAiiT3YjBZYFLPnsT2pSXinMeyGYAmn1W59qNjkqLTKTLP4dRM1VrwXFGcBrNn9gXD5hb2cBuetirCTQTKp",
  "key37": "2pYt7hwGpr4DATLGpAQiH1fTEYksBXP9meuWznRuKa5QV95a6niEbFruScKefgkCxwCkJAqySnqiWotoDBCsTsXx",
  "key38": "RyCAZtk2jYQrkG83qpkaexp6XYDZxGia1wnTUaLnLCrnZXQthvHiCgtrYCk3NVw8fF2kp69NaZ5oSffno1Unqj1",
  "key39": "2gjdvkLqmMK9ZJkXCpGJsSd2RnwjZ2v9zmoCo6h9KqgS1eNaKFGmct2fEkK3FnBBs9okMwdYRs7PcfEhw1GQ6VBv",
  "key40": "7Wwj6i962Tq6fNM5PkWFQAN3wsA2TpwgFVsGPq7WJokNktqQRFxboT3kUnpEcAEZixXZYxHc3d8mRamy2Zp3qbb",
  "key41": "5P8KgoVDTDfJPL2eFaFvPHdBfkvwQLxXH5khBwBAJeByTGabsu5A8gFJnUXjpt1pUAz1pG2p7yqqGwqnY6wUMQRB",
  "key42": "5P4kGn9wgqfAamu7s5yGSaEroMcWmfWRtKRvPjuoMQRJjMRRTdfXk2rg14kEtDdDzWzoLmBiEpzeQ7szrLRv26Xn",
  "key43": "3kgdVN5y3zW5qAmwV2YShDH3yEcfbubA4HxrQQTFEwKKNynVRx9NxYDFiG8bKMVMCj2vwW5qEEB3HLrLoEah4GXo",
  "key44": "5D8GXCheWW5Lp3YThevu98wrzpCk1CaLSBf2jUk3nouxLYYr8SoeJ4Z9pVvxYBf7jQhBSzEnYdPEaF3pWerxXSBd",
  "key45": "3RWDhE81AgPh1X5b67HSoAc5yruUGkQUfPgZz5BxMuJCBbxgFLWdwH3fr72wR8gm2WrBqJ4nfdqTgBCxDo3DqD6v",
  "key46": "3Uwh1VxKGvujvKZorbVGhBPurknDUYB42roZwUM5e2sExCux4RivHM6UhXCJEKRZof9QdrtWxvGo2hZmYZ2n5HSP",
  "key47": "3hUeHb3pWNptL4vK8L6qAXAgLHgKNwffHWBSk18EFX3jWoPKUP1zm4CW8YhAU2kS7cMiNPqJ3jrK2cshmxGVu9iP"
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
