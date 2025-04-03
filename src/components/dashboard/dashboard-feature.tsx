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
    "FtLEkLKNkTCG5tGf8Nx59zNyWfLfBj78VjSVLYeHBynvedW3UwTDgk4AoXFffBVC4P88GPEdU8PobbYZay3XpKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HAX47XYyeLzn7kfNZ1Vw4CQs5SLB43tyXTiusLi5moJdZyTDSpA5CHdjaj8xLgqMHWYDGBgv2b4FcvK4TaydyEr",
  "key1": "67C6XZZawymx9FoyWpYw4Luu6KetbTPi8t3DjMUH2VbAFHd6fChuo4o4Fk961DKDFwAQmsKtW5PQwjS8GPsf5K11",
  "key2": "4C4pyAmyd7tmJFMDcpTjqABC9EJzEEPQqVdaxtxmERF1PD5rbJBmtAyhnGvDLtY6FoAGr2aDgbLGTjBKDjbK63H6",
  "key3": "5zRHBzT7tDu89zr9CiRPCMmseyRrfLjj9RyX7XphN8UyvtEceBf6Pq9XkZ18HhVHzhzFq6e3aaNCDTP2L99trrmH",
  "key4": "4F5kvATjc6yJiASYucHRoxUmEu2j3tJYpxLN4TdYNzDgA2troNDtHinM7jvBaRnqatTseyJSex77ys5S6aqz789w",
  "key5": "5sX2ZNAtsoWgttnxryMRsy3YcZ1Md8z4x9Stm7TtwLYaAjPvNBYmqrQv6XXdwLYThLdaw8FsZhUqMrHFGHVm4Wvs",
  "key6": "3q3xcVtfVGEJVDEEZrfby42xHee4yZndWvKBBB1qPxcinWKJ8dG19P3td4hUaHojDqTYxrscfxPzbVeC8gPrae2A",
  "key7": "y8dBXVD5podZFVowWfv3yPiL4pUZeb5NQBeuzTF33yqk1y1y3qEg7kpKB8PBiX9gm8PhxZWKxoZMyeB4XSHnL8g",
  "key8": "5mSqsgn2YGR5Zx8bMFS8rmWByXMQp9Sx2sdpJf5Rg8J1V5dS5bbtrY76Z8Eh7M5ZZPpZ1JK3PkDXibt3pSz5CFtA",
  "key9": "5AWMruCupo9uumkVgHVooTq2sESecBexWyHvrth2PjwG2chjKG7uDzDFBCmzCSrLF1Wo9PBboXSTRmB3fvLVNygc",
  "key10": "2pzWw9MHQ1Vhku9swoWPMGQXh1fYqmWLprB33BF91CAyVkd28XsprULiSMzuQpewBxxdMVEBqCcdyf7ZLpLncS42",
  "key11": "2oMT1MKeRfXHqrCRNUCxwYTNh9DpEByfUxXvbcs3KJKC6yJHuB4kDiwPi2NsvN99Eb2X8TwdpDB2DbZJpjwDeh73",
  "key12": "2hAkbqBGcNmRHT5i8fe8NAHzuchQwv7jwora8ydBLXGhBKa8Q7QyJZN8CFoeCD8D5DPaVdS83EC41psykjjZ9ro8",
  "key13": "2htqqcZPo3kdE3ob1ZmymWxxD1dSArD27p5MdbKnB9R7Vw12sZeN3QziQhNxKJeXTWXd6tATHaS2XmjZE7nK4rkf",
  "key14": "gRN59YLjS8Tp27ezsVAPRhAzb9X5Tw9U5xkh3DddbyJXiSaMRL3PjFzb7zpj1tFUuQcs5ZTxosRW7NFrWRsFh1S",
  "key15": "22NSvoW7DiP8wFQqmoSimSoq9Jsk4mW74Kmrv8gkqQHYGsMAWceYLMcQkFWz1VxrVqJkZG63hyksJB9uCrxx6aeV",
  "key16": "42ag9BE4pdZjrkHK8LPFzZ9Eevip5dBhbqdEXAuzWQzeGBof4k1g5uNfdPmyGWgW6FeGFQ4n2wJUHaDmFhX2aY4p",
  "key17": "5GZzPkfz7XE4papjMehrgtqvxCjUM6xnYsT7DFk6t8G32sZLUx9jMZ5ivnUGAfjmgo85CWNHh4u1E6cM4BsfwCbd",
  "key18": "3Cz888AVHGFmRXyxL51fZ7FThMzM7WGfgYrAntWUEshSEBaxFnwdVp3pMTBdxeg2Jjro7sdZxHuzw8BfmeLuoQMn",
  "key19": "5mDFrpUSr7GqM6SgjeD6t8zez2T7pBJjUBHt8KJ2knhQunJbppwFDonzEWp6svHEoEMS1WsJX5dK1RjpBaHebnfb",
  "key20": "5PhZq8frM7vRCajNiMZ9LbRzZNobc5GF9mP7XPzxesGL24w7oEVzHR8HujTwph81yMH6rkQp4tzqPG8ysKfCpf2h",
  "key21": "3CDZKniVM9BJUZCc2YfoyN5eUn7KMtPJN2iARGuv2rXep3qtWf6kXSamcLMB8vNLC7AqWc33iSBs6aPogBb1RBjU",
  "key22": "CWCXiYgm7cgtgv6FG9zmf5AERdzRgrBQ8MbqccUzhP76CaW8PKc5HiaUz5yixAmRmHM49WJc8WTLLZCjcsPB24B",
  "key23": "2qfDFz25ybs8zWuCeD55tsAbKqYm9ftFGRajdzxznKyYJxd9WicQGpEmo6zqKQ1K3ayhHSykw6r6hV9DN6iW1Z7k",
  "key24": "4azLgWLojRXKCoK3snPWZmiAmoDY2W4pS1TUGF4sTZdvbWZgpWtvMUSAu9vB7dz6AF31KEkb6KbY5SFLNFoAEv58",
  "key25": "2m6ySV53oAxKGAVvZ1p7MSQbKEm5LwgjQpPXNFizyjTK8xKgFxFSB88A5SPFc45aXG5cp73UdJLfeXGMepbTspGA",
  "key26": "4tuQQdFkACCC7FrXG79EeS8qGYh6ppALP2RikQA8R1rXNhp94zh3CMVzcxD1CKMtZ9aPKBMcggoGHsn3AYUvNrUM",
  "key27": "3GPQAiESD5sn3qrf8ddLe6b8etDGnPFSL9Egfdo11urqjDNjXULR81LrZ89dXgVbrCcJa54H3xNaQQPU2svrUYtX",
  "key28": "2oFXQ2vFrCqzzcENx25bjSX8JUjFykWd37dVptKws6r53qSBPBFGDu6cuphaop5igkCm1gcdeiZHeQJ3LDzy4N7v",
  "key29": "4v78SZR3X8QLn7PLY4a48uJvkFwB9YNrLgDmtkzwZPfSQXUEMopfWQGMtPsiQVmWLUN8k4WMzG5seWBQj1gPigop",
  "key30": "pEFuTwDas3p7ctCuoSYzYS2vTNJp3d79ELqHsgecJWQ8x7QzZm8f4Xb6cAydre78PFWEBk4DVypgGifEd27FZwC",
  "key31": "2hfAg4ND7gzoufUY5Cbjka9qHFPXJwVxyKju8jePJaEDNxVE6VtDVN6GEprVnqJAnd6GhUoo6vJNqrE8NmGPp9Pf",
  "key32": "2eUeGYQy9YGxiDvCDr8bVRVz7gZGkVypFQcSW22ZY7qSpb9Ra9MKHhbJqF9TPqs1UiWtkVGn11SmtdCT8JsTmDz6",
  "key33": "34KpAwKd1Spwy7U5HpDL2FnasJ4aH7gWBUeKkhgARMTKkFR45qxAn2pf7BxrYHXBuJ6tVytRfELxuZC6VMFF2157",
  "key34": "4v5ZD3njdKzJXMU5J1Nn3jmSPTadWbwYiJJ2vXNVJ8UQ832uLrE8MZmQv5mVKP51bB5yTrwMtQUTcQEfeP7xsD9r",
  "key35": "2jLymM6DNmSW21xVMm1Fn83wT3Vmerkkdkqxa3UoxWMpZn1kqbLTH6EvYx6ugXfgPcahouc5RSciAPVXJDJ4dv4P",
  "key36": "4eif1hDpwbEAxciY8FTCMcZfq3iXnRN248drmNNc9gZqnsCy3AkzutyfLDow3Pfg2EuJYieT9sqHVXCakqb93buB",
  "key37": "3c1pJ5j8ThUASo66YazVMaNkNyGqmDwvmNXExDpmhjrTmf2cf5dnKDcMiA75Lq8Mpza8X41AbcXF7UwbBsMhu1JX",
  "key38": "2tp2crdbsntD42nKzNY6sNvnRxKApsCiEWjdrh8YVwQRMhjdBeKr2bkKpm8dCQnD9F3AgkT69ydX9CeFYFaKWVyE",
  "key39": "39SfZT6xHU644LPK5PBRR4LytRWEHYJki8Bc4YPXCAUrmrUGzTjaYTEn5L37edgQxJFjfP9bRekBxVVsyiZJ8SwM",
  "key40": "4Xj6qC4v4EXHbd8kkjhAU9iZk5Megi32rbmE1BDv75utWyzGFYg1WWXwB7XHcYYHVUbz1qzcu2WEg3C4PYpDyaRe",
  "key41": "4wWmpbfLRxDVyP42JqC27MTDndrSatFLx4jkknuDGyvadYXgdv8SdNj7SuziS47494fYiYEWcginPM7zaVcqLrMX",
  "key42": "2dJYvrApYtobTQ3re8NJ8gYY5KBCBWoDNfnukHqAXJ4ojiUGzdqdN2DYEtiFXqh59VJoKi6EejdK8W3ir7ssQreH"
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
