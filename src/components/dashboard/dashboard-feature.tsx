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
    "56SU7Gcuv5AKKzgu3JKDiuPeWKgtAKphvjmB8SQvyi1RCDogryqFrdTkQWFZEPd3dii2jmG9yMh8guND7gRUBs7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24eXgftV9NG2wq8beEGGFngSftbZhM4yMoCQcHrydPQARqFUBgk9sdbV7yMJMtiSetwqftvghB1tze7yy7JH4irz",
  "key1": "9va7nEih9W3k9edDo9GaDrPFXgoWrxDDbvHnXTPC51D4KCXePXNBBEid3dNeDU9FJMd5mFz2M5XSViL4rtFmcMy",
  "key2": "3i8SvRScoHzvJuZ2s4brN9R8XKZDpvZh2neZMYspxiN2gQsXQS5ExWX8abdheWtHXzg9MRL2yzkJ6obxCVJgiwSH",
  "key3": "3JgwzWLBRXthnBgGWrsEwV3dWafrrYKtzDyfoD3RmcdStYWjSyoCfkYofj5mRByo14qva6eqNFmvoSmfLkxWiMCR",
  "key4": "4S8TSRaCnnwDR2BXz3c2eFDbSNsVgYFFVr7Y6Z1RxciAf13eoCaDdksyx3R6ugFYiMoPkVD2WBszBzQUEwhTHx2z",
  "key5": "4V2xRecXesXrQZdk7BzzCQDrhuzYuKFjMGnE4LrYVuCXz8AojfZpWywss9miKF5BzmgsmkddeoWwDwQsFfFRM3Th",
  "key6": "4BntQh42xrTjxA3gHr4SjZdgcQbpMHAxVcoSGPmAXm81tyZJjPPnFC9GrJzdCc1XKHE5EiAz2BqSkwgyFYE3J9j9",
  "key7": "2T1vuji74Gk29WGRfrL6au95GqcHTtGJeYoRTPgo7pDgB2Vq7V4VFhQw18JGgnhEzPpof1mTwBQosNmDBaHQvFVo",
  "key8": "4bCDsZvXWXez5Ev1PTjG3x9ARuRmNxACAnW35m3jqbSQHUkz5CBcsSFMv7YL9W5mc42hW7qT9G3Hs64A1B9VB3d4",
  "key9": "4uX19pUNb2ADEQgwLavFCiHKnhp68xcfn6mXnpqbrdhbqRybnuCfqjF3TqY5qozqA97feZvDe8oBnrdpS1KAcAe5",
  "key10": "5KXXByLcVCJ2et6NzdASDaETiGqYZ6DFaVADQamybNX2f6iw4Emtpzo4NdhEQZGp5dXS1XLuJStBgbFkt74WiExt",
  "key11": "5Tx2vkVexwrEo1Fw6eGHCfinhYJWCzeBgC9EjqZVNi6wC4QnWaZfjZnHXCeK5g4aidATZuCoQCUETw5N8bGd4oQ7",
  "key12": "3HcHU2cogmpCEBJQXexeeDH82fRXwzDaewUnK2EbfARsVnZgHjJjYd8Wk8tYX3RSTnuChKaYtbwa2jgYArbga8De",
  "key13": "5Si6rPPxs11J9SF78xgESTcVW9t65efu2RWM686uBtgWDvSNb24iTxz41P8jsfF7UEXQpe1BFnGLfP6pjAgK5ZwR",
  "key14": "4GbyqUPeUbyJaoczyho74hadALcox3pxERXC8xS7vjJNndCxCviH2PFBVLmYZUR8UzUuJqoAhse3v39mgytCV4pL",
  "key15": "3v8WjgNMMsvbaptmthfzaJ4YidC87yisnLE2fsoeC69zJeMe4e8ea4GRzW7G9FzKUPvEpRwQweriEyMEZ3TMPFCG",
  "key16": "3eNGFgGUBs9pXkEQYztc71AnJQq2wkw5sEjjnTG3gNkf9Abef6kT7B25qqbADzTfmBK5qRHTnaXZaawMv271rHGZ",
  "key17": "cvzBM9ydGHmSEAw5ipZr85SWZdTjoZV8jFoLoeeefQduKwPTGcmnCUCt7Bvc5JM4dG9WxRrLdR1XtdxHWRPz1xP",
  "key18": "3F42DYKaaK5auS4XDb5qRHV1qVdexBjoe8UAAg9WNmiEyaLyWaVUqu5XWV66BCcgsEXMMKBVreCHHNJ1D6d4rHbc",
  "key19": "61vJsjTX71r982ZR8Hh9xuDPTg2YrbxZuytwXv4bwDD6ZeAjNQdxauyGku34nqCExpCP8Z5bEPmuJHKbwBW4ynEP",
  "key20": "5f6VTgweFv6q4G1nVJGaAuYZdJ7pw7nqdb4D3rFhU59AAGV5Tao1ziT3xLhCEjbBE4sYpjXXbzb1DAbLiUfQGWwr",
  "key21": "VqFGMVyaQYdLgfFMJ6zK3ymJJiwcLeY7EkJyXhvWWmk88yC3TZMRYHeQxpDeNWvyngjye5XBQ2tHPZrPN6g9CSh",
  "key22": "2BZFW9BB6bT7SBYbHEpguXpFY8jUY3T8mttN3GsW6sYTy26CA6dvgZ1sWyEce4mUBvEnuRP6hTT2hSDy3EQaSz62",
  "key23": "56N7m5JfgF2usNskQ2RpoEXQEXi8sMpQ4QUVawmYzMmyUTYHg6v36wYogUqQ48CUAjLhz4KWbRmuxxMSHUgGywQ9",
  "key24": "3peMXSnV9j1uLmjQsvs6x9RA1HjLA5TrejYLZyU9hiQPFi8CnM9xX9CwLjKZ8EpN5dfgiKYgBH7rsv9mC1qQjnXA",
  "key25": "2gTt85h1pKmfHkVaQRPPdcpiyosJu3T9wwF89az4zjDUxkytMe5TyqWZiHLdhFWHTRdEqNGMr8R5ksqnqjDhXHmL",
  "key26": "2M5yWi9NUixwQMQrDz7ELyn8NdNSPWATZczCohGrqzxq9tQ1wttxkMmDGLf3QVPiq3hicC3AW1ySYY1ShnE4ySir",
  "key27": "4gis86sGj6MxwG1JY3smVghjw9uPFjxTZJ98EGwgLNn1yEXuHd24hB1cVyEpGUn4sNsACYak68LhcdLhBFncasrY",
  "key28": "6Frvh3fnEVK868zifMGteVUPMuXV9UJprbcdkLgTfK3MYVtrk4qNLdAK3DhTTRhmRst6q3B9sHVGCb4xhdW6Yoc",
  "key29": "3j4jBP6D5MZa13Njiu8BwjsnMTzM4794M9CrtRXccmKC9CU2gy5tvELF5SZX8DKGkaQB1ezGKYBtMUKNmX3KX5Zq",
  "key30": "2ELa7ujhoV3XEKSZopM1u2gR19aTrQbs36Y7JtJ5BX2WR2THUbyHmaerhF6v5pvxDmBC61pFbRQdVhQzU46jb4v7",
  "key31": "2pWn2aTHqQNwoRK4ejeUuxPHBKtWqioddCoaMUcjzMH4en4gpjG2pc22L6A9ba6tQXd1znEZ68NWi7h9zSPBQFHd",
  "key32": "5Htyw284mX3f8tQK3FGjSmB9QEjBijeA39wMpL8Yuc1UG8DHS4Pooj8YTJsRcdYypQn8G8GiBJ9TUcsKd7TVFRu7",
  "key33": "245u9AgG273vZFQyfCdYtnwVHrWvka4AxgSaz5DyxxSMWm9WpdwevpiZLfBujpivo5sMw4FVtBk3mx1Z3eEEwzsH",
  "key34": "28dnkrfeaz69rY9M2EMNYd7gU18VLRjdkZycSbgDwcTM4z3jghjhQ5DFKagSxnjyPNLUhESXFAMGiUP7b9ry7TL3",
  "key35": "42rZ7Smd4Yh264wesHP9wyxjrzQ7xNtBa9gMfoUAokQaMfXEwV5xXDQPbcgRL63int1Z6D7FDEN9xHLcnmgLAvqE",
  "key36": "36NFyVknCMxsxZ1zTEAgXzusq6Hx67ESyk8jym7YWVWpQPoEr7UU5XmnwWHEZinc75tLopPtcuDxFbM4XhDseBZ1",
  "key37": "5YufHQsM1HtkQ8sUza1TQRksR3KUnYNgtjk1PmeAPZrZadrdbVGXsP7LVmEvkYXPZUervMA3JttND7Su9zVYP5LQ",
  "key38": "41Fc8xZte5aTxaokL21hJgwqov8x26hRCsA7cny9GXghJfKVsWGxgMS7WdVCD62wzMcvPBSoffXSw8SzTESSiemg",
  "key39": "3wZ1nitLE3my6Y5WHCMtfTu9sXJ3afbhr1rgP9atAskw3rnMG1sq7DwKJxRy2Zh71wT2gJogJwJ42Rro17JDMqiK",
  "key40": "5t3RVSFuLQBf1QkgqK7J1L2E74HFhWPeeLEvKDQH8XwnBRHUozsYxAHUkoS7XxcP5phEESWSZ3zrrr9PGWxQLdRX",
  "key41": "4WACQNFphjpysKpAHjrbiTSr18iDbLMYuhNTZLf5Nrrt3aV3iUmcLLhpKsQsHVAJn5rUXYMdiLx53uGjDV7iTpJX"
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
