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
    "5fMPk62yqhbbWWiejqdW5D9xGb6DfqqqEipu7A7Y5d5MCkqUtSC1kQyHcLywG6mEgveVeoTMrnCP98Lp8eeaEyaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459wGUWJMUxfGkYnqG6KBB9EECNpLF72zqu1Qo7AjxFsQc4G1e3EEQ49ngGBW6iTKV9uzv6PEoyYqqawVVLrqJEJ",
  "key1": "2hg2YpSSoKLvCTRcFG8eC4h4adPoBDuMThvSpqXWCXTQwct1xueQ4pNsSpxvRe6FHEmU5SZ83HS5aCT8wdn699qM",
  "key2": "5D8d3y4QSDiVfBjhWvThaa2RNvDx7oRFa4LNnmupykgcaHUncQdpXwVsFf9Aqs93TrU3ckBnMTdjz2mYVLyMxP9R",
  "key3": "5ar3dzHnYCRenwRUBLGsqtFd5GGzBSuMMh3vWXryC8k11u9zPkCD4fdxUA48XgVakmdAvavVFH9Fvwns1zvZSHs6",
  "key4": "5Y5hGyQw9FsWtR54jXxpSboG2Srd48h795j4VxWkUiA6YMBGEpdVuoudc37DELn2ib3Uyuwecuw8gg4aSzVejvY9",
  "key5": "5tWXPRrbUy8EVhUVQEPTWzqYqCznGWFncZvxxTFu45fdCwg5QincvfGztuiUodaCouKa1gBveWoxyUGX4seH5iMa",
  "key6": "478tZxBzfg6USSe1JjZmRFg58nAm5anRtv6yVbKdBYKZSgbhkEhTirrPAEbg8Ad7SEzd8B7Xwupt11QxAoGZVigz",
  "key7": "2DJQ3YGtgFLcmYAnPhzuRV2reETZAWwUadX7XsC8eAdDt9YnqL8RRgGiMYqXQFK9rjDHtv9L7rM8QGJmSJxcffnt",
  "key8": "4LXzLZ96aGuCD8MQdaxKtXfZKoTyqFLx4XFUZDx79yyUmUtb9fmDAVatkJ8hEDzYKJQwYLfbp67dcE8KD9BiVPjy",
  "key9": "5gpegnsgp9stVP3cf4P2C1xHxXYsvvHdpgySb4cSmmXzthw7PwpLmsipn7UuVPoboE4F9LHcGyShGJnA5dFRhx4i",
  "key10": "45eL767mgxnt6DaFnUemTMh8BK3aFZKHcvr7xHCFX2ftabJct1wRX3dK7rpaQmVCXgEzPbrJUN4Yx2TR2YL4U3CG",
  "key11": "5uzYMy3hWMiv2rJmwo1LgsjUr2FhBEj4uL9Qhda3MzAUn6sEZ9jwnTi2QczMJcexnQp7dtXknYbHZ6iFuNVwB2PC",
  "key12": "4QWXoWE1G7ySydgT8qnCXFuqyP9qNQvTS2aL1aEsjPqRDuvNJBgMC1NtJb711SQVkmgsnVEPLap5ho6P9eJSwYP2",
  "key13": "3ncjwybkhirBSrQwe1MVuws8SP9SiBez2ec652zCbJRHEr4oFnakn73DPQRjufQcuE6gQLrcbtcF5M9EfcmqaDZm",
  "key14": "x19WBnFmGUJdvFBjS9K418Unovqbm5xK32ud2Wz7js3rRJAcECKUHmArrHSUyVGETqxzjPLCgQtz9UHFUxM95WZ",
  "key15": "5jhoXCD2oZZCqq61YAc4Q3pi6HhRZ2g9Ga7w3Dc4ZC21tMNdyRe2tZM5RnPY9EJ1jsVXvca6guSgwu7DARTxSDzt",
  "key16": "5cfPSx9DuSQJdbFVPwVA1qKLFoePsWPkpyPPDv93y1ECsHCb7SG1wYRKamXc7WSuD4RNfxUAn2MYsZ2ZMm53cVqk",
  "key17": "59qwTWQ3EDZCgN5yjsQDoitTtkKdnNUevQWDcHng43qSp5qkEGoELVCL19LLiPKhzdoP6dQwrgWSgfBv19oxhWjV",
  "key18": "3jvqkDMmY8wcgAD9djfeVYHgD6AHzsCtzSiWzhUAYsr5HE3AVmtYGv1Vp3ByrjHCZFcA4UCnnWb4UwQn4nyryCWS",
  "key19": "4PVBACLQ6adRk2dZYT63WdXAsqBwa8dmpDiZnkLqxPWAgAws9DZon16MHqoxYhnDdUdXqYbDy3jTbQ9AjSzPAEhD",
  "key20": "4LeDFGAwgiw79j7df9KGsmBPdTzb2ZvmAjD2NfSrEuUCXaizYyU8TS2KXMTpcdxJwNrKXytpPpNSare3K1ErBhC7",
  "key21": "2PAeYvz4mj54SwyMpjHcZRFsZFYGeghw9qWT7okNXXxkHuCYA9zZ98e3Um9NnQcitG26rh1FzqE18wSmFYbThiva",
  "key22": "31ypHqoTx1z6YAA1psGDyY8JRAuCbCt9KsCoQGMhDojNaGe1VJyZuHXtL3TaS5oP4xcNr6ozMcjhLWumtXZJ5Zgq",
  "key23": "ANbhWVVsAnVwFXft5n7yct2sLR1u1i13bCAkTBX4uuDCmay7oHtHXafHJbn6Z5v3oyZ4YjmBg4NC1iiwxsuziwA",
  "key24": "QPRvERGEq3MdwmqHrgmeL19qMnzXKZT458k9xRmLRH2jns6NnKqRTLeb36i1W7kyaw8wYfSrHGT1xSpQbv542Ff",
  "key25": "F1BSXytN3dYXhRHSMcwhReup2y3523kjU9Swwm7g5HPo5V8WBz16GrWtkUoEEJVrBZEFtCdqKNrGdCFUTfWozad",
  "key26": "5pLkGc9UMjXNU6zL9t3i712vfgkfXmVB67onRxvdyzbXVMZuCxJBweTxZpodWbeiYDxESA94tFSodcDUFgAFCNKm",
  "key27": "5aeyfLz5y3YJYh1GX34i2abQTz7GbRnyjeFdaS7NXjdm2Qo8BsUxHjRT9t4tSPJdVjqStidskR9fwomYPRj9UHSa",
  "key28": "D7S28UEM1Z6iyXn3aoJXiRTBdJsCEDgLEoUTJXtD3SCvHkjbpoHNYaBcHTZzVxDYEA3BtrHfDCMQ85NhqqcKRJB",
  "key29": "iy6jy1hBQke5A4bn5aarcP6aYJbKCpDMHH48KBcMqN8onJpAEDMXMXFLPuRsFBZdyqk8y1JnxzKuokbn2tpSPXD",
  "key30": "42w3WnZbBbMtuU3T2HsXgacTWXwH1ZnEhi4GEGyAjh5wgwCRormRB8rUxthvpKSufVLDr4VGxcFRcrrnVzgF7qXc",
  "key31": "sy2eMvQGc4tTm6zuKhVS4EYktPsEG88AFu5SVuSa4bKqTPFSQMwo39YJVTzoEPnmVR1dM8D9qxgB69gMiQw4RJX",
  "key32": "4qP5iTnAt1b6WxezL5ggFbhBGxzUSTjTKnFWPU4cCKBeGGXTDUw6bJBU1kXQJPuC1FH5e87CbqhHXehqLR6YFCPU",
  "key33": "64km84sHfpkJQWFSe92ucF8s8HDmUrn1pZLKroYiqg5E5H3XmQGgjJBeNhRdAika5A7nvu1w16gc5WcM4hPr7kr4",
  "key34": "5CHLnZ23DxD2CTxFs6p7F8Nt4cQ4sfRWN7UC32RiZwES2AkvzHam2rsJB6X2EWKHAGqVC53qGDgikHWvw9246Na9",
  "key35": "3ZgtBCtVpryQ7jSYVj8o1GHH2xkTxBy2oSSwSXP8onMuJ4tmYv3K8qj2fDks593mCb4pZD5zK3gFdCTkyV3edq38",
  "key36": "2wWAECUT6ZUVYcvV4yBD1ib1VwqHnYi5zirTWoYjPrBNuAQ49NiywHDNEjeRypxroToaFGotRND9uaRKY4J9t97h",
  "key37": "5NexsTXxyY23nJgSDiLB7j3vZ2ANMCfNrMFrtRaw5cCRSNCxifMJ6QNwakBDJtECt4CNsDd6yNCwfZZ1JHKSYDVZ",
  "key38": "5uL6mwmyqouJxTwMvm1yYuYLiS8sgaR3xPAU1SmeVVFEF31ewRyLgbWeecQSbiDU81Etwn35gvCronPPkbPNqUz1",
  "key39": "2X61WKkvg71yMgMytoVjKftjPjffHjwt7akTpezHSxPAvUaUs27CvwZD9vYCeocGBQxizho67hNbLQTrCD745ZtV",
  "key40": "38Cn9nz3v3vWrTF2kSbfY8mnbVcsG7wiQb2PoTcd4yJFD5rsHsxUrwYRGB1otpe2yhUEGfB1ahNEGgNJ3kJ6CG4n",
  "key41": "5abznnJsZVNscEwfkxy1BbWmaNNaV87cN4J4UUjnVJFaa9UXh4iyTJWzrrBGS5YFDsgeGu5YmKBBRBQ8NQ73zhGT",
  "key42": "2G8JDeJRT1WXDM2MWmK8sxw7NTpdhhmbEGrNfREJCZK71Ni2kLUUBcCmFteXaD51tRT4ohudkXXT55y7eJd9JHQF",
  "key43": "iLyYnFVk7PRJ2K4Mt3LbZ5eughEwv5s1pQh3aaVCAiqHGMNtH9i3dFi8yTzoQwXfizCLu6zL7EarKqyK3XSbG7G",
  "key44": "56dpHFgi4UbbEzteK8q7mu2hrdaNw3LNGep6SbrZ2eqwfQ6A67LE7EtzhDnvZLzzGfaa2Qqcu34z7bZtmDY8ekBr",
  "key45": "2svm4ziRBnEN7YwvvfGJAHgGkZt5EocLhEd7LXeU5HNqtpyKALjkpMJyqG7DGqbvtiVJkRcnfkJ8ro4t2RavvjqY",
  "key46": "2wFZwDXPSoaC4jtL697xJcndgbXyjrcUXUUaNegGYbqFbw1sANijoNwbtHEJeSWbbYPbA9nvLT2WcU3D1HQATVKw",
  "key47": "2kAhRpCfX1V4tMdKscjEC6zVWGopvqyQ5YG71BnNneSjp23kkAyWpf6NV7PLbZa44VSc2DFHL3hoLQtBP7AjEDV1",
  "key48": "5RgNwqW3mKRYwS9okni69jWmTFfbPChLoj1GyUjoUJj5CmsQUppcrN1kr3rQCbDMjnPf4cpbQDBcwLjWZntJr98T",
  "key49": "4zHY9K2aUzBywpWusoW3MJqLxcrSU8xpTi328A3g7qBPD2AxDxNNTsWzWjEiJztWa6cntKawczjMJzdhQduuA27d"
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
