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
    "2HsDfJsX7CP2Rh8XdvhfDU22kZUYnfxnNrgLXqLGaS7J3wXsUSaFMvBhyAg7s5UMUXkBwLfyJvT8VLUizuc4bmPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12A5KaEcm6Wicz1XW1tbtPhBM4bjJFRHePsJgYjXbdddC9XdEps7WsSkvsu2RApaZ7aaPS9fJJfKXrzRmfjo9NYo",
  "key1": "2xi5fxum3HB4kvhHEJyuqf8dD6c7tkAkD7a6TQbznUC4TEg9YNJifCmD1cdgQa5YsFDhXzHPBPm3vE278rwt3hzH",
  "key2": "2oqE6ZCb595Sq3sKgvcELhX2Y7gDQg8BzCyP1H1VQCFKyyE1RnJS7AonnQSaG4dZJPmt6P8bm2T4USvuK4xrzxXc",
  "key3": "25Nj4ty5dwNQGFUgHhCe1VjRvgE4YMBw6yuZ2SxeNEnGQoREnoCjqiUtuePs3SjTiJ8d16TgwcySQFeJTJ1FWB77",
  "key4": "4FEso5WYTzawTnj7SZQi3mJZMkwqqr4bZcZvkYucqxuJGurPkAbq5Wa1PcWn2by9AqKCkMFekQL3mWnRMU2hV2ub",
  "key5": "J63utNua3wXu3JAYmuSHLNymf7mXiCEMS6eUxLchSA1X9T26hrzvirDmUdWbbNdt9KUHEcVS4Qj5ncvgcrAFouo",
  "key6": "5pkQMm8Qb6ujoq96uxFdwDkcZkfjbpNM1x3wL3SPLTDaquzTTmBSkAm8Ct6u5JeRDFHiKbLHvVajif6tRjgJBcL7",
  "key7": "67r9XMb5K6GjntiKkQ9Q2e273NiSGziHJ67obUm1rx1P2dkz6WPJcDZ9927wKbFCMPRdu6uneDceUxGWTBKxQFEy",
  "key8": "4eHY3a2wpJrTqomCpHso8DWvo5eGSSzf2svFbu2opiLZXgrEA6HborqGPgb8nobroyL4Jcx6ts5py175r9KWNM5v",
  "key9": "4Wg8EZiHGDuQTHtrvGknFkTK6TiMwGdDKP4LpvNJc1P6P6J1JoUrQgNJkBM8CigFjER4PDF99KGip4TS1y3BFMWW",
  "key10": "SaXWWTqRSWYeJeL1izHeuqtu2v4Lpm5Cr7YTUvYW7bm5Kghm5psrmjBZLjpz2sK3Qd5dTp6VDzwLcoaWcGA7TTd",
  "key11": "4AA3gSsexzSX4RXJXqeERh189kwd8dwbKZoWB8NJGUhnthQzsHZ4svSH9ApR442GrXJcSggtCoGtLUs5UTqMvzqp",
  "key12": "DZZi7XZjPT4S1NLcmiUMd3k3BLykFc79XT9uvo4FzHpgBLpmYh8dvH4RNEYHPR65QkDzMxvYi4NaGCNSkss54S3",
  "key13": "4ZYA6AUM1mMtLQAJckBHCttGe9PhXKM1FRAxuRNft4pFLRCNcauDN91q22SyPmQuxKRymP8K1uByJDWUoZQcxy4X",
  "key14": "2E2YVjfWtkMpcY22TxL1fkGzfrF3AmhRnVvucWDJX167wpHWSpGGHq66Fzn5kNx3GJXpUJm2WaSDe9MTi7TGeeAH",
  "key15": "5sQj3aE6qabD9rXsZ2b1FKTUcHBPFprerGvnZBAYTohaszrhc2D38s8tE7MeGVcX6VHeCwx434QLD2rieWzTN5VZ",
  "key16": "5MpAtgVX2YXXgVtvuMeSB5zSTGpQd6hdgKxgeF1BNPYWp2T2hxkFGptUryHCuuJyuTTqCen7ybyoMjpm6De3qBM9",
  "key17": "2Y7HVV94Ef5ex84MsQ3Xwjp9JX4JQ23K1bLFVHEmy1SXr6ncsUqgdeFJeRWJsnFskW1KyBS85hyBxG3ciy3JhaHq",
  "key18": "38VR8vzGkDhtjjD9B6JEwydUE37cGute74p82w3rSxXYVv6j5HV4jQACsNbEJDPnVmVbk3tTz9JWYSXh49ZTzN7n",
  "key19": "4wWYMDLjf4EUiStNEafeghfhs2wdLeTXa3ugXL8vfeVvuSXgCE17oBYiC67vCHbWUo9pFbvS5R2D5K5Lf8UVdhiV",
  "key20": "TnWfEFq13DpKzZx8KxgVGkpWsthADzwB4jwmuNL87jZCCbnNFgwBS4JX9kH3TkybWGZZq7E4bai4tcm2HMez6tb",
  "key21": "4xvTGtb7ZXE3iPQMYZ3SaXgZHBp91QkcMif2ucUtmg2ay6o8HkJM4jyKXty8xYX59nyZy2edAdq354FZrsRotY1R",
  "key22": "5nufp3f7693DVBWR6YGTFsvTWgMQAhBgnaNBrroTkMnbRzgrdcc479Fh31rMzzuiHZTUZyPDMZLEcDnnAdAxCG27",
  "key23": "kDBo7dHUcNAnCc86o4a1aNd6AUoWitWCkycGYeAyt31iK7uD1aeya3N1pAfao1Qs7NZNJ57RHsyCc1vg6PTdywB",
  "key24": "5smiuh6AB2EkxF7NH63CpFUMY6VvgfGYyTuec1D3Q2fzrpkoEWLGV9CokYgFgEB7frQ4eX9JsGio6MefRpqqf9fs",
  "key25": "GW8UZsZLiKL4bHH1CKvf5Ymvrs99bpKstUqEALJxgDvmiVCgSKc5o8Nt27Y6mXhv955nKk5LdWU2q7wMpzRkYri",
  "key26": "4P6hGbkNZhhvM4mKDq1Eratk2ofmmGB85pyQxLS2UF4jvfEFE1KapuKxX7V3yrx7zoAAUC2PNt5M8iZZwXpN2bRc",
  "key27": "5NLcjRBdchb8nPzp5YDLJQaTNFnk53FwZHHeD1wP3hVp8adaV8gU8fN7G1cAkhnv6up9ucxJGUFW6NrYi7Qoi5cR",
  "key28": "4kyU2nQ4gC7DPiidR54KFE5H7C5rKNuVFSKKNgN1oqDtqn5VDqMpRuYteNkmjaDRjfUFWW4SsRTfcfqp6Tm2ACfs",
  "key29": "5JsyHhwrHt1hag51sw3CtmFUVKzBhQBANq96rTEE5wq39JkQwi8Uoxr38hZdoMe4ZK5zQMbKf8soKUoihMqrDEX4",
  "key30": "3dCbuPWm6npGcXxvxVQ5KmpUDDAJVjigfb17HrKrTC4BmwRrSXm3vAbRDrvfrcmCqis62Uz98gm7e9CkNtLzABcu",
  "key31": "4ZwMvvBDrwDcNwT8aLGfR69rsQu4LapGNwu3BFPZZHVFYUuk4no5nvaSBRyjk5oNTQvFmnWcuDjynuk543Cp88dV",
  "key32": "3yPhnNvVBov1eJfiBra4swi8Q1KSARHhhNnvNaRPHL7byB2cWRNUTUdBqGnFNzC9JeoY2oNszW4X5Mzpax8cR2or",
  "key33": "2hZcHFAjyW4ZCLbYN8zr7raBZKJD77ixmCLD6AWnpGzTc22SfmCyyHue1nBfZiz1kXuoBudixm65cvqAkFbY8nda",
  "key34": "4Bd49iS5nrV9NohQjrP5Fv3FyhD5zbuoGdr2eg1s3QS5npsewamC2VkcoRoMLXdtwmzJ3jnfmYNWQydFTwSBNuCj",
  "key35": "4fWL82HpZGbRSnuPTjWh5J6JscPNkJtUgWLPBrDThFagxHXi9rrDepQWrWJb71jMFkVFizuMaXFWb1UnYtMduQ4L",
  "key36": "2q64cw4e8H1fGYtvSPzhgJNPHGgfMwvZBDmhNvk52g3c8VBZTf9U5QdSSFUxUJytDYaWo6bTYtXUcgdjdRHrmJoV",
  "key37": "3c5Qx9Z5Qsu6uVecyXZv3ae8KhMig9Hb4Luk8QcCEqUoGprz1jRQDeqzsiQgq2e4FeqNhWRep25rVFnkAa1bQ2ck",
  "key38": "5UvJEU4dKMRjdAZx5HKrF4QkdcJTo1UEFnCiwFPftXEmFuwCzs77LXfQkRRaBYqNcGdjo8f4R7LcM3fhX4c1uTcP",
  "key39": "2oVZuWon2TCmPgTRj9NYwF81NicsSACsZdvzK9rAJLFYUuB7FeeQD5CUMzC2mBdQJBjhB8JKxvfTmtweco7ZhYsb",
  "key40": "5Ub8g1e2CqXdn8t4xVKBZRuwk8fkHdq5A2hLx2m5ZEfwe7BH8CMWRgCRoKCWN1jr1Vw89FeHfcJvf9Q9NGQaxzAP",
  "key41": "4mRVQ8Z7S2aMuvjuAYsJ4nL2wFuEKzGBTGnjgtcPzruzme2Zt2rxZz24Y86ttSdLxr1qxThfDftrbA315agSTHx2",
  "key42": "2q9wsTpoaBQvjC5Eavw6U92MWhR7ktUPSK4Hzw6BDyKCYAfECdnbtqosD4RDCyN1cJXoUb22jUq8beHYUkNHA7Kd",
  "key43": "54kpLKY6BDfsJ68vpovAUMCpBwSLRMm8rRxfdsFGLMVxbBtUtcECxew4LNHkA3fwe3WjGAksZgoLPNykcEkG9WBi",
  "key44": "2S9LnyUS1ysBWnmxb7CoKLhftx6J4Mw5tt3KSrgq2jxfmDHNmYsEFMtufHob6XdTwrtMbBUR59odrUpqMW2Jh4SR",
  "key45": "3tzsPyEzw7TacC7cpTx1mkg9e2p5ndCYvo3uGgcwcVFZMcHD8BASUm6NQxJ3JHxRdngFn4RbX8ynfCiCuPmQWRgB",
  "key46": "5Z63SSxpWShzWiTjrfTenAErQjNBpMBtVGBbSPGXhR4nzgHLcnaCDJsyJmLLHt7LZ7EoiREsY3wCP7qSC2vQpmmg",
  "key47": "4ya1i3Qmi8R19k6JddWjuyA2Y3JpAhpMpR3XkDazysyr6dWZ5ewrmQxLZ4XUKnY1jwLZz9J9gyKdfJuPQ9WhqvEm",
  "key48": "5TCvGirVd9rVvwc4GFySCCk8g9ZqhkQWBGVEPgqqYjhKjXMzbme7DaCUaGK2aR9ErR5D2ZwZ5AWRyLyjoCApvSFk",
  "key49": "62dABpkxrkwn3zvfQxoXVhFm5vfL5cecbvWrTUkr4TnxQz2s18KA9xfYuq7vkR6m6gfBcb2oFsFG5qG11XtS6zUN"
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
