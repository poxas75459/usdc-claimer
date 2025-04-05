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
    "3C6SLMqekrVPMFSHUPUbbTDH2XUvciJrpR7P3399gQFHS6cNZkHHgMyXMi6BmkkT7jfFYGZjd9WpSjMwDc43onLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58xq1X3dv1QpQXQRT9cXLtUVnEqAcNTsCSQyPeLEx6ArUf49LMm5H8JzxTjMEweQu6yWFy6J43XEH7uW9zFAk1Qi",
  "key1": "2m1yqxgV9XmEiFxvmtPUGnFtGLL8AzhyN94p941CtykK92nvcQwQ3DiTn4K7jsGi3Xbf6BWGGYzpsHQYLrGM3DpG",
  "key2": "3XnXkQsYSmR2MzvPsXVDygigGnHGH4MJtKHwFxgFSUZdsAjFri3J9JgEtm1iZrzryRhFXZyrG9E9PCw3PFzyZ9bw",
  "key3": "4bXVpoe2ecCfSLScUL8CNEgNwppaBLF63bzc51BUMtpTFhQDYLRGLqaRZmuzCqDNvap3PJFp7kSPeNWXBmmTBpPR",
  "key4": "5yjGVoyDmCZ6Y393BuT21nmuhybq8eo97sxBuKWcwFxknMjt3H59j9p77jR2Pz7RSQ3wCQEbX3zpRvRN3RYuy38h",
  "key5": "2yNZBe8VvvWSzVvzY2Lj2QDP3jHxGVw2R9SPr69NRWZuwKtmiL1txdRKSahng1Ge7AcpnWzodK4pdGGZkD8w24xD",
  "key6": "4fvqi4rmnFiSgTZ9fS15kyiMQByVs5w2uNaV4ongB38FKvkfEj5nBGS4LVGnk9TUiXfXc483cxSCf4cNHFrRCVER",
  "key7": "5vZhNM4PEsZwijQZsuBANiYEVGrTT7EJrbtqpJwrPetvyhFBzvwkg7F1o2646sffWpBVaV5j4yvVCP88Uk3zoM78",
  "key8": "RoAkK2BZQ2kZCkcT2FiScGhQkrrbdiemZWE2YibCTL32u9YNWgDp6GwSsnFGJn5fEHtzAydZLzygCVXyQqqYKCx",
  "key9": "65rzhZhcLaEe1XAhxfwcSpnZ58EK3ckhee2zNpB2dnvNvCeqV6QGyr8jdyNXUZE94AAPe9j3Nq7qqDQD45EdLVVg",
  "key10": "2QiLXWw2mXGAVFUscpQj4BtcwV8AtQGTMJVk7RGBercF1LuvkVPgZ1f9xXmbv8y8FVZ9YovBxhE7tqgj4VCm2GeA",
  "key11": "2SpBsvfV9R1NEvHGDbLc8NDbWGZ5oEawMCjTW4N5yGNfJwkX98Bd2FRNn4HeZvDxdfdpsukEMwdsaHDJY23xA3rL",
  "key12": "kHh7cE1yC2cRhv4NJdBZtHcuHeas8zVpNuaKQ67pFJ1MXdsjiK85RagdiFQKerHKRqEKXpGDR9ztbMy1TrcfGZX",
  "key13": "4R3ZneytjuLd7oioKQxGovyszwzknCjsm89VXhBUhAhwQ5QhhCpGyuspqioqVsbAzP5CPDu4N5TyzaXfrHEDr4bj",
  "key14": "3CU4zgGZgBkeCDBTQDjq9pGyggW6XDQVfiMmUdfbdvkgsfHE6aN9H9Txch1rgR9YvGGfsnoCiCdnLUcvpjTHycVi",
  "key15": "57XEypUeJC3C9wAAUgDS1hkiABLkuHaDYB8jL4HQ8THB5mkMTDKWqRiZUsZgoWM3ExWiNAPonxhR6bj4sY9scxzV",
  "key16": "jeWx1SQ7z7qndPSwTnF3nbuowdrYVrvjaXRnpNTToQTFeQ7mkjiix93qEbo1FST1hv9M9gUCJXH9ut2hMpqqYyq",
  "key17": "fkWGmFRL2Q3GdUyNRxFK3BUM34x3Lru4ua592KqyAtav2x5Kn1m2SfX7TojCtvGTZb2BvHanoiMBerSD9uw66eT",
  "key18": "3PotwVskUwYTnQ2TmxLAaNfuDeZDmxVJ21HotZ8hdQNm4ryGJojtBS2cT322DzPoVLLUghG5X34XQcBCdDEX6Dfh",
  "key19": "aDeQYgsEWJL444aoLiW3hWoPWEjiqNu5R3WEHeoPHrN8xrXLykx7D7V5X6n2EZDRG7hLoK84TF7Qdc8eJb9P16u",
  "key20": "2MkjHhCBPXkXKNtY8gKtia7QrxLnyGcdzQU2bxz2kArc4RHfdELeHaRHMdkyjvyg3cBZ1vifKN1P86Basdttr9cw",
  "key21": "63E2q9X7oiC2j9peMwpfiQrfAdkFvFxR9drRLnBMEGKyugV2NJrUHtqRKPzLj9Ex79yMJWD3n1KF1LfU8ddEnbYJ",
  "key22": "2mJ3GgC4955Wcj5HbFq7HN41c9mj1fet7Yckkyzy8WJ5b5CWDU7BGfUt8YkCtkLFKNaYrHdSJTcxSVttdW4Naf62",
  "key23": "4pA7rwShGEihgo4emnrmovk85yZmMLcJvx9wv9sm3J3iwA4nJMC3cNV8QiePUHTikXyfqJAbMv7DoWNNunuxcQ43",
  "key24": "3jkiCXDHvQC9GK12CT5Cidyzwxn8BdS32hapbULefJxxXGJEXWkfvwQX5H4SXdcDsY5yYWwJybnCvnZtFteGJcUj",
  "key25": "51extugxaubpKK7WgaeBcqCwp8MASp51TtTs4EofBsb7e7qcrjj9uuBpLxyVxgiTy6h4yoJyfF7Fm748XFBMci1q",
  "key26": "2YfahS12e2KdGYTtwnrEVL92G8Zh3JUTLnjMJAsgYei5UDPuLMwnPQL248XZkfciuh44Fr5XwYq54iPn1qWRocYA",
  "key27": "3m7rijzc7n3vs9QY88ZXTByrE1RgTjZsTidQ88fckcgLS34tRz7oxE7qhuGQkgfTNqfDVSach82hEYBfUY1XGNNz",
  "key28": "32hPFL1Gk2y4ZTrh3sKztr16gNtyxXoxmgZFQb1HkGnc29BWcggNKwQG2rXqvS3EAtfN9ombLuPUYRbBB4N8SnC3",
  "key29": "66oaAaK8YNY2zq5Jsf5vfmHHKbp4qfG1bCbnaHDGWqnQCgCThiMqEY4PFwkfTpwEKqQt8nFbvFpp4EgLVzp8soo6",
  "key30": "3HwCaewLnLjqTUhujym4eENqmxncwwsZTT896LXExZ5KjYfBNNCSQmNyxFVwYfWRCcCzciQZMVzKNYCASJswidio",
  "key31": "21MJzvdMCAYsK8sFYmHYGSCfUvqne43TXtMdUGDb3Srko2gZ9djPkMw7jL4h7ZWevm7p1kyLWXhkaLFQ2GAdFWkC",
  "key32": "3bNZhKDkmRzGjrCYqUb6bgm65o5PGPE6Zpz717dHZYPBki2XfHnu9PC8CobxnM2n7atZz5sbBvsk1ZF7V7LRMmd1",
  "key33": "K6WKoQxb8C33yo9nFjedtPSV7DasB9qJrw2atFMvS3xXaFQ6C2tCThdLfv9MLVggq5tXciVsuo4DR42NuamTXUc",
  "key34": "49souwKooQRy9YqxgoSVpMSkPwzHcmcDdFQByDgxqaHZTm3wo3cH2SEH5V9JwzjWoavSLVKC5iwCD2rFzqUnRhfY",
  "key35": "3S7fDjgz6YJDL2zSzrgWnd2K6pA5ExffV6vR8TmgkmnLT7qt1kQMoL9DmXr2J5oGc7kBMS6jNwyZoRUDfsgvbKze",
  "key36": "wiHPi6cZF6Hc8DDxqabBavjC2dHB17R8shf1W5yNv7HGjygiyX5LbHX9p5FKrZ7rv4HLL6shmwYgmBEWNS7seQN",
  "key37": "jhRNrdPmDke883Chq1EUFbdgwYyrEcenoPpdfo8VdBtdyHk92JUs5bHRZ5LfEWLFFhKdL6D8qua8QiaFb4sYS9h",
  "key38": "5he67THYu1iNdUSWnZT6qcZEzJrmqQwCjx19RhXWt28XdwiTHungDzwZqXMZEFbgPFKnXF674gbN25rEirHmpcwd",
  "key39": "3H3vPEU8jsQDtqkzCdKPYqbkmnEwaFEzF6TftT6WnosVVXBCb8rP3tDqXnSJ6aWyzfW2iu93aPcj8MizpESYC6s6",
  "key40": "55MjWAEDRipTSuBX9VEosLGyw3UccWwz2scNEP9BmQ4xj7U1bcEcfS6bWVkR6gAeXHDfGtFvnm9A5cz2ki6adh6X",
  "key41": "5XKeXmJAdfj65ZGVpdsbhk7vn3v2RcpkCEUh1fonL6CzruqvYoGoS9T8ixxRg7zLjrSBbYeTPqe38xoAohFVC5k7",
  "key42": "3cuLJPBU1QeMqv5vUNtvwm9CqDT3R4VDdTn96F5CBRdhBcq5boQBJ6wjXdYcdzgnE6xG65SLYfP583ZAd9ZWW4yV",
  "key43": "2J32oURtD3yFksYhzt9SHDMbU1S2kKKQLfzWtL8a7U6joUq66j1kvPCjduToKKPyo9R5gx8sgywg43WHT8MN1CSd",
  "key44": "3yrFwC6Wq7BpwVDojguH6JZMrHQi63Ryb1nemA5M2WFwjGucE9y9ZSN4t1c3sX8KPmavpgKHGFs1NmbktD369cDG",
  "key45": "4fZYcd9Fv1eaHCMkqAxNUZFp9xTkvmCUEH1x3qxazUfpU1LwUY3rX1XKQDmFgsAfcnqzHEWucu5uPikALybLtkH4",
  "key46": "r4xQM5ZGzbPCGXZrCDmckGBE9hxVpeze9gkWaAZdeGMKK5YTYi7uk9RHPUk12N1CTjMz5D5eTrSqyeyPTdWjPQ9",
  "key47": "2L84pH8ALCfqjhBkZvXZm1tTvEHmFnRoeaGoiqTWwvp2SFca9Ejs4YDg2SRMGmFGwcvrpYdkWxMZdqU75YYj4AHD",
  "key48": "tK9xK5QZGxNbvPZGveVWbpn3bYsnxofdw1pgmW9o4Cj7zetmLXLXQ6DJA21YweRErKuXdYWksKZDyygWoscBz2X"
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
