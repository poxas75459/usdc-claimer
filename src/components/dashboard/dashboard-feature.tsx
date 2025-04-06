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
    "xyARsrRm31oWZMu1XeAXKJmSioVEaeRRafJydGnaMN71e17bEiiSJ6EmvZBhfVCgp4W9jFijvSEio9B2PhPsmYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pumoopuM5CExDepUWxiNdFC6tkpnnBnZAcVWSndrt59EYdrbnvWpdD2PrjWhM9f1Aevvr5y9hjLjBaRA72B2KH7",
  "key1": "TQhBiboAFudP7VbkPNkg1XyaJ72Y5KR7gorGZHak3BhtkrwA8xbpHa4gTscPxjjoeDgdvtSJv2A6fAnsZXHtWWP",
  "key2": "3jf6gSX33oCVcxPU2nmC6VSda9uqnGzwi8aFfyzFHVAY5LaJVnRfrihjeKwB116jfhJ7gFGzc246cu6DrErPbrH2",
  "key3": "5oJVcLUCGn23xyHEkYtsdqGZkBSBEh4QpbN8BayUrkQWb6DzdSgrkiViLbzf5SYGUSp1UuDh2Bv4rEAa2cL945R4",
  "key4": "3dsSLJED2axFrJCA1TupBMWr9ueUhsTHbucbicJnD7DPH9Mo2rDF8EhV8f37KhyQBDRhmgACkWKU8vySajrhs6yV",
  "key5": "32BBVZ48eh4zqynw8GfATCqD7r4ANnZke7Vo3ZQfrSwGAtjYkdTFofoG3yEQhyDnN2L1Z2mpzZxemGC4AYVjvgF5",
  "key6": "3k2vEydwgbedR4SV7n9AADaNwhCWLHXkw9NBZtWC29M8W7tuKf1KrkH1Rahqa274tzg2k2Xnrwd9bwgZHHXtv6yh",
  "key7": "5rx9FGn6a3D6LD1xcpLz9ynYF8jAG3Vb1wryBUBmpVZMyB3pP4gadmFhkEo3vWtswSEEaPFqKubCiHphe4Vpwpv3",
  "key8": "gCNjc2KPgguVaGjatTDQwcNzrj35AoEGBD1Eu2i3og1BxiLEMff1nJmDkfyUaDRf9DU6QEA1JbhZdajnmvp3yUk",
  "key9": "386WXB5XD4shJcnYr2REhsypHaRP9THDQLtraWFzzm9jYX568dUmBAkejQyooMvfBXhTTBVQVexTTK9V8JcJURKJ",
  "key10": "2fysF2JGTuLcLZaVhHqiViJr5N1yjXgpEYqAV9opi8wvJQspc8yLwuWJ1zud9uRrzF4usLXGxJATgY5PoRwRFJAr",
  "key11": "3uKX8t9KGp57VoSdqgTTUfaL4vRXzBRvoL6AiAEzf6t5yrnTJQHYHe6qEkqmc9dMJdCWdN4ghjjMoAGTJKinoWTc",
  "key12": "5MbSuAqey5uV9VzbVnJXnrDrQARa8u1SwN5N239qykiWULE2Bv1hqPEjxiSrv54QMJNUMw7qEBhLRM1QdtAYeGb5",
  "key13": "BLWmhpnuRJyZRxiC181rdX9QsLYGPMi3xPM2mDfGWhCrVR3kbLnFtm2ZpdeSP3z7kJtPs8R3mLPy5CR91qQptAy",
  "key14": "236ywjkRycdQPwFvsVdLQN2QverDk9g9xGsbBnsra5dLW1T8jdQhPyuV63HmUcxVbQx72kQmY6GtjLjPGfqLR61J",
  "key15": "3PQZKUyK3eSc8YY6vR2VeAp2kSbNhyFb7Hm2oW8fg11iYPHHoVW7NyK6puvqc1wSS3jtZukajBeXL6kAqSXkC9rb",
  "key16": "4hsnwmQu7ae7YhboriwEFC4RWqUytxL2HHpvRaECfqReWwa3wY28HRXZuYjn5qL5pVWdE3xk3rLd6XYMW94YPg8g",
  "key17": "4HDqfXmLj5KJPzQn8VSPVWzuVkKGA7QtRVLjatWdEcLy14NX5aEm45XPYxtLDvZdDwjRgsiNDq6B9dvpXTs4k961",
  "key18": "24jDUFb98bpMR6X24TdudS186NdHz9FKuE8sWrrTE6aVwtF74cyAWhAKwKSfd1FTv68ttnHfGokhkJdw8nZDhnTk",
  "key19": "bmxi5fsspk4a2P1SS2KgvGPSwunRGzSrHDXGsCKDBoU2cNZF7ZqGSp36iFEXJ6sYvZNCwCECfB7soRhdkHwgMRt",
  "key20": "2FL7WhPrQwRTiR9UnRvHFnRfGcuTU2KJWy2exLby5kXHRJEFLSa5bnJq8HkhuoB9DZdyCvVJchmGUUDL3X6qbtEX",
  "key21": "ujHikvLxUbHaBwdbxsVbvY5QGteCApvW2tN7be4RFEPXCbVTZgydskvkAbgKjQbjNkDNnDmKDBoyTSpDtQH6fKr",
  "key22": "2MesyC6NpN6u1eBEexKff4HmsuxkM2JyLZGaCFNVP1qGZkNu9r6XrrDqGSxwuzL52sAoBzfSubqxvG8L5bFnTjGt",
  "key23": "3935MqA2Gi6867sRosWjBgdCfheyLtUzbAZ3WeDv7r4voA3GYvKCzDz6STBB4btJDzzkZkjGxyhLrCVvbxKXTv64",
  "key24": "2xvWzL7s2gzQiCcqNS1nybaVvrEmyU3fMFUangFCVwVML5AZDc9XvzkLiDFbvWwyyQ23ZjMH13ZRXGnk8c9dto7o",
  "key25": "3V8T7XJ2kkvBQ8MTiT8JH7t9fjFrWsst6EA2szG8ieNZFCUzyuFikKfsmgbyLs9bcDkgwQretqLxCVgPu3Z4nqTk",
  "key26": "474CxEQi36nKNorA4zBiHoh2xzLZ91MoQT8zuBKyB2KepmtcUteGXEWmqXkyUe2RxPDhtNYX4FKYX9xZ5aTsLhwY",
  "key27": "3T5u2GRrL95iXCoeUykqvnFKRFVqCJGvyy9Jh7w7P86kuMDGK4DQ1C16ZYF9ooxwTmQhu7EDehMmrfnbWzrnF4ZP",
  "key28": "22aQ4LLdkECcvZxN1VFmmYS4fW9t9Ejps4o1Uaj3LPFHNtneSX2dxrGfaiqXZ8N8JXJRSNSukHtpvPxd7V8rZJPf",
  "key29": "3crypghakV1MLDiuRqTAmkJaN29k5n5PMqPF541VGbm12a7v7cWVXoJjYomB2u6de61YtsM6ZEu6nCYhuEjCb4rF",
  "key30": "5xA7vCD7aMk92cUNSqcwJFHjrg67D17puZ7mQu8A5ybG2jZmsHW4daBerXzfB3caiHnWa3TqRX6QqSKkrdrTn3Fm",
  "key31": "2BrrPYC7FB8PQEnTgn4GzSnW5xuNtQ5H8voPTWUuQB92FxnPkiwgKRDDfuozkJNi5AapzHW9SAezwFbYGeNbqg2X",
  "key32": "2BRFPz8D9xExA1JcATRp2YvvVJrner1Q3XQUaX5Bq3Xpyzu7ZikcX7cBEWEXbRWW456Gf22FscsMiNtv1yTodSTJ",
  "key33": "4W3ez21ZSYaQn2GnBtCHEVLmom8TcKgmxRjFySqeDm9rHzVMhBYRhH3FaA1sfeVcZjgapAoPoUevswpDtYVdxEKV",
  "key34": "3zhBho7wBdTJZYJeLsYS2v4wzK1LfbrCjjEGF5LMmvRSE98jRmSwHXZzCqZjwXHnDhcsrCahr4KpbMSVGgTLehph",
  "key35": "FYnTb94szWN41veaC8paCZ3kZhfbqJutWuvsv2zRfEf8om2UpP11P7HyYvyQSFXrmuUkZsEUsBzK8jofewS7wZ7",
  "key36": "2ZsbFDuvuywftEWuWBzSfpsaS16YdtHxefJM56wtgXXxnTJEdiQUMCJxBM1soBm2fsuozQog9zzEdaPNdXZjui9M",
  "key37": "4FF5qLpw2YYG323Dj1nKJnqjsoPbd38vvZRy7HXJoCBRFasWJYus7A8V3EXmHfceHGRjdvomFDmz7A3x2cib6CSN",
  "key38": "5dYDpAbF3u9jGVcP4vaHpaj1orPz6yRXLAsBRFis5XBFyaJdBEebqnnHDLsJdV1v9kKLRJpVJDar5PPD5TZm6Ndt"
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
