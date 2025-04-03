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
    "z5vNJa2Txw69Jht4RPYWpN277pX11rQ3QAChSXG6XXo7p418zPEGETDvXEAfwkk7y6KJzecQ3sjp8dvyKgQT6xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDnVi1CLPs1qQGrv5JzvKF8hQdmDsVPY5kZvELxNZNaaoemSA3tRRbELdm7bBwfb3FVSukMo1CMpxDsq7EomQe8",
  "key1": "kD4Atbzbd3ZSBc3FLpjBMK2AGnuBgJwP7eiYF1EbKmeowQ7fTYQXTnAFi2y2j6Bnxq2PVQSQZSH6UofgGVQYQQb",
  "key2": "3GRhfonANynFsVXtJtEetoa8pxTrnJzW11kAuf8TSLLSTvDxmkrLZsdrZia3pgHM5ruQJs19KqEzorQsJEtw4uuY",
  "key3": "5PyC3aLuvozoJ4FCXgZPt4b5PnKS7yWU4Vap6NTKen5LM7KQHHZYzJvLbf9SLMfn95uk8rGUF9jeEj95sYkRWPH5",
  "key4": "4yqBjCAtnqhJKmS2yk2NoJVXJnvx2dGMcCJDY2pQKuaeanzX9uKPhCc2ZCgUdUtGz1owgxp3VoUgRYYTKPV92Vz5",
  "key5": "3MPRPaixh2x46kB5VKTjfTShaWaQJEGG9ocA1Bz29jXF3KBGVCpyXtUbqxsfrWgMZXbdQhZ737wLbJg5rMK64D5r",
  "key6": "46WZmoBVhH7MFZBHjgrdyRrhHYGxEc2TnGxnWhG5SrmkjrLmKUUoYN2h1GFPbsSZsnP5PsEztstfejMP3f11CjUf",
  "key7": "5V2bkwY9NtPR44asabT9oX42LuDRvn5WzZw1i9RxaCSZ84Xx3H4QW4m2sxHtt24BXRii5MP5YUHFpUKaJUeg4KzC",
  "key8": "2R1gASZCGgyGwBhyFyt49Vyp3dbBWuxA6heuicV6UhqYCY9sHbP9nQPVRAtujQnxk57CoQrKUu3FZ7D4db1F5ecL",
  "key9": "5XPshoLE2QYBs31QbuhSjgSwDEfJW3ZAb7YYW7LHwa4FgJg9JNiNq492CkFUpejScqysp6pGUzJXikmt1QgXLY4G",
  "key10": "5p1C5inhiGcVtR6myEYMYfXzkFmZRKB3XHmTyHVgDEVoAEBokQ4hxC6oLg1PQggoEWpZEAiXTyepPDWJrzUtdfrw",
  "key11": "Fuz8jmBMT21jAVjSaGzBrFNKPzowgQZRzbkAgwr1ny2n36vZ71aQu1wARghJDmP3Uthz9kY6PcTdeP7fcLz44rm",
  "key12": "4AkwnhtBvrdXcH836o5VSuDQFcGwxuYGUqtgtepozwPRJnis1sF16g61zn3CuvwwcKHAWPGhdEkaqkvxyFL4vhh4",
  "key13": "3NQwCVvnddhKiyRX13m8XR5b51Gac5WNu3GL4cvM1SnW545SfVmaTEXVccrJLwWWR731DXYHuPthz4imZgHKFLKB",
  "key14": "3FBddtHn2MeUp7ecoGUsQeHXJWJF5sxkPG6ZRuBqSHerLXfjBRhwbEQUmvHUg6FsFtKtJiBwVVYYxqgYbQx1sNmA",
  "key15": "67kCZgAtf6yJvcB3czQDndMo5CRjYK57149TvxuASzMwXFht9WK7MNrK1jekPc13nhEJdYapeoPKfcbeFZiLkyAj",
  "key16": "NsceDLWPmWvKr4c8Qs5B875UyGYyi8M79a4xh9K8esY4UzdFixK4ava6hDJcugfpfZM7kPfkQHnr38WDGjo1DjQ",
  "key17": "B8Uh9CeohJFBGvuARpLGKYgFPpUh198B9eDTuJ5oHqXSTaDPoYrRn9AqhKL6BLEuvTuHP7qCDTELBaeHovpHsdj",
  "key18": "2zELaEFa9UokijUQXCpRKwFCUS62XaCU26FWGuo4btZGJeNRFP1fPXPGTeMMTiHmeu7R36nrkFXTWzjktrC9363h",
  "key19": "3u6jS5U8Fi2HuDErz5uzbbf8P15x2CUyRWahuPMJW9A8VSZnBXBwQxDsyPKmhthMNu8NEFn5sUDvs81dDhR5wvWV",
  "key20": "dNwo7S8EsZMdNPhStY711ayNws8xVKEseY1R9WXamEJgi1byhsGDnS9u2fyqWYPV2tEbEGmDRRyeyLuVipEqg51",
  "key21": "iCzx17537H8FKN8ZBWvhRapX1T5km8yLQ2EUNtUeLLPpxQziwNAsuT2f7frpkHGgSgK6TVDcGNjHrNoh2xdh9XM",
  "key22": "5pVim6cxyAcVkazRKgkbVRWhP8tLcxxzqsGDXQkgynAdq2ioVAN2Rif8tPPqStPD2zgNEjiH4dvxCZtF6XRCJqoQ",
  "key23": "4jThQ4nD9NVJwYVS4RQM6WeEPm8LfqPM2pcYgEXeeufgZ1PNhWhJaC15yndv7MXuz9qJ8YBane2UR7xyhKuV8jjm",
  "key24": "3o3fCHWS5frzT98izS3XruELYrqTg86zi7sXRfHcHBvxqmCFnWLpQxGsizxgX9eWSMc6SNfKhr8BmXtBrAMfTbBy",
  "key25": "4ee7ZGMGCHxmMRm5syqynE1Vv4Uv4wxfLbx6MysiAEzm38Tg7VZy18L2VBkZoKZUfvU2UdHDGWJRHfEhJpT6JdSN",
  "key26": "26iTdPsUfWvgStHGdNuN6kBdqAv5RJSxPRsuZT7vqX4iRH7qgGBTihnjEmxfbTpSX24ryiQc9CzDeamDx3F5TtJL",
  "key27": "3Sc5DD2CjWyyTR694uxvzAG1QGmN4qshLXQfyPXHp8mDkHLe9aFVJ5LoBbETHKUFBSgLxkmMXja8PdYXGmPRF3hS",
  "key28": "27QMAQMhUVc18DZBb6sX3x7eCCenvQAYZ2xCNfoSz84EonEFqN3w2jVWjFYKR2ZzmeTrrawyqdkHZ3XYLPMbRr88",
  "key29": "39YVPmBGDR38bpvEXSycWm39Emfv7S649RJtqBLag3tKSZneawhC26pdnbJLqQ7S7qg65BXwcmkBEHdXfFF3uDV",
  "key30": "2ZHcmEHKVaW5FNim4y7jyPkMkTAYKdrxDVafcrP669YQYafM9wTQG8JcqL4wph11voxWJYG2qDkvpqXx4zNJaQ6z",
  "key31": "SxomT6brQRKk5oYogGS5MCX6vMsWry3im31LyJ2vaLo1XdK9oJDEHJSxiLXf5jkajdW9iQdPGLCTs46ZBr27Wd6",
  "key32": "4f1B7RW383zrfbX5sfBZgVqi4fHzpbK6WssAHvnW4gz4LAPrXZ1nAuxxCcu88Yhneu5maWXjVsChqDaB6PN1sE9N",
  "key33": "43EXDRqv7opgWTiPj7bkqX8DCVoZr7GWpQ5ECoAybCogb7xSSceHMrA79TFg7eEJNc6ezoUU9tC16UASg9he7Rh3",
  "key34": "2KuKGuhkGTyZ1MvPYs2saeZkd4zHbpSXQdUaiEvX15ivwHRF87MnDwuBWoWY2p7KCbZCvv8mju8z3mBcb4vLNfT5",
  "key35": "2xG2pEUDd2DPeJ1gVMJfyjVwqwkwH5cmAMZCpRxXa2KiELAuP6Qx8vNJfpPUahnctu3X7fz56aAdctVMnfLpDHho",
  "key36": "3HGmFx23B26G2r792XVdX2GcJ9UwM8T8Y68mpfxq6uDuWb6zfmTCyDtUnQQkwBbr7vAgRGK4FxAGVkdQmHpiRLDv",
  "key37": "2jMEDprxoPAyXTFfnE8qaZwk4EsnUG2acRQYPPEgHYF97ErVnH6nkwPLftu98SypZVk7a9m97rBqLGsPbdynZEpY",
  "key38": "3iuSXhYn8DLMNJKMfmGFnesobXn1i1XND8jkfgvokQXEbdmU1TDAZzuUAxhjQRhRptk5VeWAYBsxjsTvvUYe84XT",
  "key39": "5nU76L35pz4AzmvbSFyFnsbYFRR8z3tVpAeFrZVyxhyWPzBnTyv3i1MWp8GcJSvCpCGqvFtPuVGdZJXEmGHceqLG",
  "key40": "3fdfnfNf78ZVo2KX33MoEDR6Wm9NCg2cQLojqn8VXgBSk53M1Q8xKDBwwhXREPjre1GrprGZPnVd8yQ9JDNpUFEA",
  "key41": "CvSgMVXYUcrrFpGnfD4jGXnL78jnafWcHYshGVkuPrE8KsQeagaLmamviMvCSuSa8ieXyEtXJbAiS763HGU4uEX",
  "key42": "5T4T8Wa4iR72Zy9rEPEwkzVtAgVr53wYKDnR7t5PXpPJBNyczko7QKFsPKK81oHzfGQhKXJtVA94oUqGTTXy2zFS",
  "key43": "3uFLk41xPcXcA7JwNCRoBJG5sFoLQZQikRbZAc1KrjnioDFJXngTazyexPM55UACae8VGSZFK7Rxu5AqrVTdQynT",
  "key44": "5NjU6KdzjfGgEwZRUoojUHzsiBbWSnGBykf7m1fcM8zFF195yEL8RWWQRVyN2yuZY5otSx2iN5gL4igTYrcATURp",
  "key45": "5Ya81MZQnRdm8c19U3Xvbg4Rfq5vUQntEXGna8HHExvW1W2kysRV9MuRP4LM7Kw35M3H9VLYJVy1YmrgT9h7v7fG",
  "key46": "5ztDJUosMFHu8FKBSuAdEYyDdKfmqvVVaiuRUsqpEg8K3Yd92mM7qCE5qXJM3LneALPPNQmAtSHkVndJDTmivei1",
  "key47": "5ygsHhuvLeSxFi8WchVK5cDoecCoGA2yYpfTmrWjWsPAkKi4ZR93T6P5TxuS1jSxCMRyPnWJ9c5C1TV5Ejnr6KH7",
  "key48": "4v9grRJBj2AzocqRWUsVbpYSqrhimey3iVAVczTJo8pK5sc8uK8H5w3ycNcvdBouwoyK91CSiuTijKhTRbJDndZj",
  "key49": "U27KBPwVGSAKhBqrPA4VxzE7pcqBM3jdK6XXoLG8GWBkjSEo8Qyo6W1P4G2XjxQbrBKd9RZxhx2VTtXW7v97axS"
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
