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
    "45BgS2PJCi1xWaqdea91q499FNyik5XDMAQBUQckm2rRCRXAJ4riw5t2EwvYt6dd6qV7zsxfJoazAV4PJ3zjBwQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EJ9xxdJJ4W39Y4vt3MRApnTVtjCPdPV9MnHkNDk1vKEhU8rjzvZ98YabMjmxDyBsEwxCZBPXnnjnau7oVEo32ux",
  "key1": "2fSxP3LFVQEy2fpYoVJCbNEdepkSqjo5yhHRTUxTbJs7MsfjX7npuWNkPvBrmHZRAfGYjWahB348jDBbuRGtVNFz",
  "key2": "3Yj2Nzk9g57o8KBdJ76F7xHwzp6b4vm9S6ydFTGFKuBBHZumdiCCrEQYEpdgPCUJCcYcgqqWDDwdRaneJRiunS8X",
  "key3": "5J9NzEBnggawTmDJ7iXEiBudmCBkugiPTN7xdSnDyMpBcpDEjAdAwB8tbtZF7UiBEFmAdLqJgCUdZLioPWFiFekz",
  "key4": "5osTKQYrBozRYrkfWnHNrz7GYMjKSNzJPsotPRvYkWz6kDFKCWtS6QsMUrQLJJYn6yawgGttRmwDEKVnPZdQi47D",
  "key5": "3bBaXHQ7K8D6kmg4bN6PGWR7Xh8Ag4cTRU9jaJSyBgSc5jEtaCVsHqVDCo6DWEqcNJr3uvUtc5WF36ehrkhBLwNF",
  "key6": "42SiA577yZY4tyg37rMhbgDsVsnbCpJ5TxC8FQo6RhkVhiy5qGias8ZohrJQNgkzxsAq4v6fFHb3iDQwcGhgTMp6",
  "key7": "3Dhye5nRLMm7VBcUibJi6unJC5Eox11TA2UJ3Sjfk7sQA6iFBohr3JGdN4wXYdNTFjkdEVPRaKZf2U2uDhGeqmZy",
  "key8": "5pSpq1HqJRLz39THWZxBZTVg9YwAAZFDXfXFAHUDSNjRV3j8QhGLxgPQVGv1MGCZvn6uJz7mEwcu6yn6QoBHGSax",
  "key9": "44sd8UFi5r4XkyrwAPs8exXnPSdyvcsYJLfxQR3Xn8iWxmNC6wJ5g8aLAF1Gh77HvjMyGNxLCW2Ccs8ShcwvMGG6",
  "key10": "5Eb2FNJXbWwPVmv6oK1iYAkNinmALfzU41RFbp5MPzPXFAZoXXx7ZVyALesTMq68q1gqhM4n9nSZL7d8dm4rxcdo",
  "key11": "5qFCjADiivfdMMvDSPobxxyqRKCmtdPfMdnTYSqayNmzYYp3mVMaCtaYda7SikE3J2euSi4wk9vZsfHzup957gDq",
  "key12": "4TANrZkwDUWi8phUiQfLqA9tdWp9rXZd7PzuYqJkL28UMVammb1kTMjK1Bk3XwuRLpiGgoLEwKCWqem1XQUyhxzD",
  "key13": "4sW3hZaKu5bRnR6zfwyjbfaKx8jr6Z7YMomoSVMdjporPMXseKdBkDeaDd7zoJUnotk55347b5ZUmQKJMAQqWiL6",
  "key14": "3dLidV2cDsj9je9PEKexYUJrLW3zG791PPnBEntEcBuGUwkiNg2yxjVUo6WKfNoXVnjTDP12h28ucbtmmL97qW3D",
  "key15": "4eXSGWDZojhfPd8YJJRcN7GyPQsoesxaVEC6d3myoEsXSBmRxEiq2MMT85c9B2zhgKA3eeh9WYo1J25DQ6UKJavT",
  "key16": "2eU8bJJztN3hZoywSybZn3ZueU3juqURqqg8DRD9Eb2DvHTwqLf7qqTBzCuPW8EBTsAwSGUe3NKvhVVGBRS81o2t",
  "key17": "9ynA4bFE1xwF9XdtguwokowNzyuUixVAF8t2syEEfZM1V5XqVnXe7AEA2NuzoUCabhNL13JJw9m4av7QtXKJtje",
  "key18": "zXu9MzSxt57ZgRTYVXDN2MesB2z2a9eEZhB6YCjZSnuTgLMeDNWfuDcyJnuG2abyh5EQe8tSKtbZj3rFBATTEmX",
  "key19": "5KQ3f4L7nzYTPn5wcbV36RDU7WmkpY7JVA1PAuPLgSCDbWCP5hcmPT4eLGsbbjtJWciAatTe151Q2jyq3vNDkDwf",
  "key20": "MXPm4UggLcYdoCutMYzW8b28PZqG62Ekb3VPdpi1rY5AzEaZDHZ7wCV9wyLmJfU3N8zLfTXbuybmZB6kcgV6hAL",
  "key21": "2cvEeaYFT7upXGAEW37d5t7wyymapKzNieMQwYEYY8qRu36BrRXeUmpFVMBJmD175RXVEfN7Ctq8wDZNRSkBvqWo",
  "key22": "2wapSAYxWnRv3D8aoDKirBHBNYgiP98zRwueAknQ4Gt5hUrXSEWjKZ9XbShUWh8Huk21LohumXoXNKZ1mbXjgz8r",
  "key23": "41CB6w9ypNiX1s5rGTf8VYbxQAA8E2phN9f4VJCPHG4UvS2qpBWBkNGhNbqk8vgfyY7V14ZCiTbrC4quJ8qFtAav",
  "key24": "4VmLNKnWKz1Xs2TE7duknxU1wcZ2V89Yz8CaeqpcsAYRbTHoVtDKGBH4oQhfFbg85WguQYK1nTCZVgcMzgo1jcwD",
  "key25": "2RM1PPNGS8x58pKoGE7Y9SdMChv7TJbbr5zgV6Nac8zQHyJa619Npjx4AX3MdNiaHURV3qySMWdUqdSnN3WfXQCR",
  "key26": "5LQvBbpxF5g6VCbm3VxqjJxSXbL2EAB68A2j7tMo57D4eHPukmTgC2wtAoyWdHzeh7KwJty61iUMLqnhw1V5MB4K",
  "key27": "58NPaemSaDhR2DqKsGhnLxYSAwtc8BcDzSFJRdHAzxNwotLRXSvuwKYd4ptyjrFbeJVmiSJuLMCqhZmA9gkWMSJc",
  "key28": "3mwX3tFxCDtn7SUqNA3vBqsfTEmpMgj2SPMnY73YzsshrBcmBPwhigacBdaah3WcakeobZ7uj91xeY8tzRUKv9z7",
  "key29": "63XnDEt6VtG31eknHFV6nhPbU2eCjwoJzmNEmJi4euWfEF39NBag7Fab4zjTH2mjexj7cQ6gij1b8XRyfmS3F8dP",
  "key30": "3PQAMUvr3R9G13LzpS5xeWaMhgD7MCMmBbCVyrehD9Esx2yQeacAKntQsjwg6yJTcd2nftu68S5J8HVX5jeLpEeA",
  "key31": "43hfebaNgoDpBfV4VEoM5vFmnNDXLsnDi45x4n4nfZGEvAPRi2tT7dkvhMH31Pv6uXJpKEZKAL15BUTiHWmm7hjs",
  "key32": "4a6tcLWceW7vM2N1DeT44DCbM5GQ9aY8bK6ceL9hyVP6udqKoNKQa1gQ7UktwQY8kNZQUUUcwPjAubsYyWthj5nL",
  "key33": "3ekWuuwfByzJGLEfjG9jWNpBq1pYyuRAWqomhk2ABSRnc82HuGU2uUNPvcpiEvqCATY4Hw6KtntjaEAogKPKKo14",
  "key34": "397k3nNj2RGtCrQA3CHRLvLviGcn3deu211ns6tSeDwuNvFq5tRatPQTANXEEyP2akFG55mLHikVJyccsa9p24Qu",
  "key35": "temSYTKkV1R2QvnfQBvofuTg1m8Z3E4M2NhKbAUCrDQweKP8fkFntXvpP4a8UJDDzppR8Jug4XvejUvioJCXbbs",
  "key36": "1o4RK99pvvT2rVzaJTdCkBKjGvd2m96SD1oP9Le7Hb9ehFCsnw9RES2K8zuSjM7WCSiwuubBWvzt9NrsSTpaV9L",
  "key37": "67m3nUaex1yjiZXxhdhjCvW4NErnCtu7w9oaWHTcs3GYWWQhnRHmWsHjeVeXcdr9QY9CGeu4Z8VirPnVd44GfKu4",
  "key38": "KrweEtecJo4cndiHFBBJhegiDZzvnDoMUvQH1HE5Uw5guLTkJXgMHTDLGRdoifzUHMHap1Dt6mSBY7M3czJS8pe",
  "key39": "3EzHFzFTL2Eaj4Eu23fi5qt1G1YBGK8f8zL1VbtBB8giEEeo1vfdWZDxXgVsBrUsJ9EeAqqwpXzD69kYcVfbi5Cw",
  "key40": "3gTn6Axvj8nPUp8W1SxAa2Sj2C2NpvQ41msu1uDRB9E4M2zRXVgPBpopfoS44feCggeJU59pPVZwFrLoKFgcQ7rR",
  "key41": "jtQaxC4S8Y1tasfaPzvMU78daoBu48bLqMytJZyfvNMo727h9yJt22FkXxJPrRAvqVLXSZmi7i8Gaf7es6unZ6U"
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
