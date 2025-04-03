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
    "21f1NhPxsUWNEkz1KQV4JCzAy7hxYywt29Gjm3P1mAFBRhy2N7JKTpLGGFdz6oyuEjBxSBWXqK6KeYZysjrphKch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBBQjmBiFtjBtBJuG3erMLQ8ivVwXKEz6BohyBrsTJvWPVGZZHUZYDkLUz7NuuJYnwthtrU8CwwaHutwyds3MDi",
  "key1": "2dLuokk5eHBiSdVGyLKVncXL3UiPmrMp5As4wyYH6eqVSzkW38KMU9YxqiZ9Q8Bxn1n2dzwFArgytyrjfVCpqiMd",
  "key2": "4q6b9ngGLeUSYkYt3Gn84R8XHGZbADnA4SPM7YSkyHQDxDJ9BrzAB5cEcGyBwnhzs6a6gDZpDi9m2YXaxQndfNzC",
  "key3": "4aEQjEctSBcEiUm8uy2kAr2UqUoec5PC1f3dMXCnNYDQJYT4CpcPqFkqxEGKg7ZajhuAeXvJb3vucvgQiPYDrXay",
  "key4": "4MxQM1brJqmDYMu5g1EDHJYa4SueMLCkb5DNhkH9LgEqUe9XnckkJkUHJAiJDyWPzoCEhC9ZdrXPheUrCik4c8wo",
  "key5": "AoNNSVriWPdPm8o6igN4StazcsL8SkDqkjbkEG1ytPXvQGr4kA8SfyEWvjgK4MSXjEeFttVhw56pxcuT8JsSQzu",
  "key6": "4tCT3m3ne2yehcw7uXFGFN1rQxvd3A2xZQYB5NPsVMhoL1zKerhjA32ativQwGxPdP1c1JSqJqGP1xPaYWodBsT6",
  "key7": "445vBK2ii7YmbgCC5zF4q11dPGbijGJ7AYihLq3jxg3K9p46CEHCGPWRekg6ZhAj5abDEmL4HPXkaf9NGndSSYs8",
  "key8": "3Q6BhRFZzj7i3A4FwaAB5Qetm7jZVEQ1GBoAmmBhfnC57eNF5zfsXxch3ScRNZxEgPWo9cx1vsRhLE2RY4QKRzdq",
  "key9": "vz2UFSwTN5oMW5nvMwoUhqFeeD18F8659FEPTr1zef78QMt7YyZF5YDgTnGKzEz4Z3ssGBgEoUaNWd6Dqxn6Vtz",
  "key10": "3rrRYvMaumZ15xUgioZUyZZ4P8T5a1ZuhSaWSkyUu5PEjM1XEYyqfotiCWn7ycKfJAXVEvSLqMokkbxhK9cgjsDt",
  "key11": "2mUcCWx3nMn2skTstHHdKNanE7PYcipepQmBavNT4FzpBjHf9SWSmWcs4sxmZaUDYqaoTywhNBqqSRuo6mvfs3vb",
  "key12": "2NL9gW6BTvALkPKNiE5R29V9BZKTGfRbqQkaCtmpW4xhrhtoPPooqhoJpecFL6oJga2GSVeJvrGghshtGXDUyJ4B",
  "key13": "41oYM2pF7dnkEePkjg6RAGwh99USFdn7MM6ieyUne99Y3KRYVCU29tx6iBUi7muYW8ijCbep8hoJ8qHrs5J7nq9y",
  "key14": "4bp3qkis71fAferL4YMhTVWSoceSfb9WEM4BebFMuP8tHD2hMpHJoBWpZ1rEgXz4hWoNQgLPajpEk2gwowig4FQM",
  "key15": "5dzRoGXA3KcvHQdkFboFjMh26fck8jGm7tk3PfXuggK1s8JkMvAH5hL3ynTgG5iJ85TNGmAnkbogDB52beTyy64t",
  "key16": "3F5hLLf7d98LjfXCbsAhnaotStFYFYenWkBr2D8nqxoeXmPwNKbi3b86qFMXaqiKxx2APB34kXGzrGhf4BPKQCjc",
  "key17": "4Gqoa13dHt4HAskTMxbdGtJSxYiXLvfSvnjDip21rjPSxvneNykae5j23kZtbAk7mzp9PQDFz1tECKBiVmj1TvAc",
  "key18": "71WJjhHEDxuJLsL621Sfkx6BSziu3Y16p3gJVNteMTNB75fub6fRcwhCZi9AHwNWVL49WxiMg71dtkT1hTS4a6t",
  "key19": "2rDpYspJjZ3QemCkmx2MJ5tcEJGS4Z6Rn3hE1HUSQnVsY2Q1VT4px7g8HLfbNHE29sUxCBJ2LgvzqVB28jGhwAq6",
  "key20": "4k9buhVYkykUY7XE19ZjSyCDGc163TvMRkbza8uP1u8QyQFfUWzk9VgErUhExy5kEqyX3nKMJ1SPkDdvqyG9rhnX",
  "key21": "5NRvftXPS423HEP2VcyKyLt2sDTsUiQm236McBJhrc6EHKYSEzQPdKjyzntK3GU9bvyJVPEDRJVAyLGWJ6Q9ULMC",
  "key22": "2K4Tfx7aNud2mYb2JtMPesmgzNtTS5MBXPqE7yqRzs9Zr7oMcSMQx5QX7BzjpUAHXQ8pt7QzixJBmSfYH8FEJXuA",
  "key23": "aNMiPhCPyJxFBvbXaQTw6d8j3BPnmnhzC1PiwA4TWc5Y3eC93LWVMWjeAsVVh86Hbm2mW5fUwZkBuQU9eDLG3Sq",
  "key24": "34q24wfhJgPa7xXN83fATjbXywsMXZz1DCgMvieMEmAwZUpHi6TAHaMvvSEN6BHvrvWLBMFT7CRyQBYmwJrkJJM9",
  "key25": "3AEE4dYDU12LjMmxBGsVG95GHDQJxDEp68hBS3c9yXzerEdKbAZLWUEfFXqP9aMDHvxaEaP12FdQZT77mqZDt7EV",
  "key26": "4cxgDYfzzrK6M2uYPMdVtkNnrXjeGgiFWg6AQUXmk7aNdgpjh9fURKQ9FxGHKhJAB5qnARweaMSqAZ429qTpJdar",
  "key27": "62ziWxij6tBSfDFisJ9fo43Fo6dfgCaacQKtn1hVFqkQfwsJsiejenRjBj73WL27a91Ri59yfD8EjMjiXNHc3sET",
  "key28": "582LgdFgdcVoBT8LXsYPcNjMCetyNceNGSjutdMMNKmYS5GH71kwJLY3FY1F8vS4X6y5R2p3j1q3UtgfAjdKeEgB",
  "key29": "4hRbNfAprk4jvddFJwY5QmjsXJvVAnfnoaxGcZknxjHbDcyzzrkpuG4zra3iTtr5w2QJJXdm36sdyRgKWJrbdQ9z",
  "key30": "2n4vam7p5VkjSuqEwuXr3xF6RjJ15EhASXYHh9v7bvSV95dHz3opDaKKgu2e2Knc9hVHepPGGCrEBeRdpj3ehDAz",
  "key31": "5UTD4ohqDHB9kJf2nhAXZ2dexoH16jxHP2dB6MQdDy4tx6pVtxFUBrHAof34FwfCLEH6J6cZRXvQqVTPxLDPn6Cj",
  "key32": "2gqsWR5gqVEZHTVw5PJA99Rtdyc1haLtwJfzHRiVKvkt1sEXy4fygzVHFMjz6FhsbAo56Qa9hi5kadxuSqdaNwzX",
  "key33": "4Z6KvHF4JPXaJ7xJa4dFCrJdNaPWzEkxgvcTYtXui8txDAgx71faVa5G32bbMRUsvGsgEbXWqoKvn1NGbpnzhtt",
  "key34": "5Z9LG3bWKaXcBvxW4yJf8fKmkbnde7YWCo3NMyFgHRAY6GAYhjpLkuEBrnTs3Ti5CLRkJefDWuFxvQ9qf3qMvnXP",
  "key35": "3nFgEwMhymVo4db7YGoLPaPQ64qKkSanErpstkyiMm7H73Pn2nRcCfMbTvASmRdUocUhHkeEU3GyxrxdTJZt6jWp",
  "key36": "2X7BKzQAmBVVAcfBcKUFC1qNjdNyiZdroumhRnrNS4SYQVpqo7bHHT4ZGbrBEkJfGCtFfsZKjQYUuPSJ59rDXupX",
  "key37": "4DMCem5KwKarWBnpPQh8AYhpj1xQJSJ9kN9tfQjBzNkcF13wvDLu7UJJpaZ4iFpAhCgr8nRWE8boB5cTiu1YW8rK",
  "key38": "3EAd8ha8V2kfR5CxjCDesMCZFBTzEUH7NzEvzn1gEikCcjzK4SEfKfeNkGaKmE3m7XqqgNnck7j14fczs3uWqoqY",
  "key39": "5PyBuc4hKcEZ959wRC6CvtVACMi4STYavwddneN9twsyJQVbR8XeJqgfi9pkEfGDryyqKG6YdZcLxkWyaF3bzLRq",
  "key40": "2kbB7gyikmetG7CmNwwFAJdMf1gM2RZLBR4ejHoRNniKorBAp76jHE2SrjinLCK1ZCDPbYW5uzFMsuD4K5qJ9ZnE",
  "key41": "Z7RGhMzegtKiEPJk7xyFkhDsSpF9kCnrov5M2JTR6Jmg9tPCsPTbNeQDrnWy7LSNDvrSmDrtuR8BP3Nu37eRpJ2",
  "key42": "4zmcXCEbuwEDX63oU8eguqg2wSp7bVDMMjXToW4xj1mmACPY91VFi4oH4R4ws3Adak4EJM2GjkNknSahgwYhyAfL",
  "key43": "H3mLd9wEzWyK3132RyFa2rB3cTsgnJPjv3Tm279UrwsXy2sHruaiGwh8JGJhEG1YnWcHey7FzEtDcvfwmKkBo46",
  "key44": "ZwjnqH6BZUAcZ1NhE1TRhtHBnqb6zv2gPU86iKHT6wC97skjnJpvyfLyApBx3ydnbGgMpiBU53shsg2vn1JdTr7",
  "key45": "5WFhtm5H4m5d6MEYiPBcvyj3rErsdKHFXBMMPm1NHXFL43DgEdNkUv8MGCQuKQKks4DaJ63VSBrrgEchFhq6zrHE",
  "key46": "3FTCip5zxyGDsUSLLLr3dfZxqddJYfYvpHnUuLJRHCfYUz5cLUvR5rY2pNybiJcWRKncWXVCtjrCkYYM7NS2oiFd",
  "key47": "4Y7gAQobeC7RmiFZTJWpo9vj6sgfeKe61kqgs5SKR53Gyt2w118DfaEntLhKkASQBXou4xHTppzx7SQr6EMsoBwd",
  "key48": "cUrH4btEJqmL21Vj7izbpDGt7efUjkJJQBvyy5tSxZN3pGLiMKL51xsuggNtqrYQ4ERKJ21u2txeGEwTJbsQzyk"
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
