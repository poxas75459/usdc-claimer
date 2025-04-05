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
    "53jzM2M66ow8vWuCkkQBxSaiLpz3QB6qTwBTe3hC46ATmCmFzo8W54GwVEWS5cmEsNLsMXh4MG1dQRQgcQcMbPnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVp1XQrdjEiTE6Ak37vGUmS4jduf4KwrW8APnXEmb7WCW2ymhzqs8GV7xmy8inGoftv2JVsbuE6prLYWc47ech7",
  "key1": "3jMStKNdtBF47HJUJXdKfQyyffakEGKzwUzcVcQwpZAdhm6hpjt6HqqBTHkSFv3Ukp5A8sxemHDrzT8GvfY83mLc",
  "key2": "4WZACUsKEBY8HK8jSMSXjmvKrWBHd9utCe7bWvdYDbuAsCTYeqqKe5PZ45vEr7MMtbPJehkbWLPhnexLxfoHjmAk",
  "key3": "5ECVAeVCe2JpFkLvAiY8oNfbm5V5gJvxCNm6fSkWycwUCgsJVXLhqRDJhnonBuC2p2hExWyu7puSQ5yY2xG7KitV",
  "key4": "2snKujverN1RX2oozyKGtCc4gWdiDT8jmvoQgBpdVrmXyRma8M2cnAAiBCJMShWQiHYXdvLjBCXuovY1DTfPT6FN",
  "key5": "3xeHof4itxAC4ym9E1T2xypJeqkw1DvGcppR7FEK7LJLC6aWnmKHD9Q5VcWLoYZp3NiLYJGrF6H6tmnKjP54tDSw",
  "key6": "36fk7WVuEgQ4wduU3X1RfSxyhRByundLDV5wKgbvAAuvUNR3GUKsZq76PMQnMPPKSZKP6xaBFXx6CSo56yDEC1Ge",
  "key7": "3sAhmEgGVfyN413HL21aUCP5A1qkeZ2qeikfTgoRghpxUMixnUeN6KqkzRFPwSRnDpBFuQnHzh4BnH9a7DqX3FTp",
  "key8": "4SwbMzi6zqz3HvfF5DrvLXEVgpy2aASxMAYfwtxJXcTnBYZ9BnQJB6DpdW319Ps7WijERXzYVRRDJeyfB9Zuvr5g",
  "key9": "4y3VnvJbfH6AUhPGv4eCE4cHyEcdE3sn7CKcymNXVM2HLG8w3yBGRmmeNNVzVpFLEnDJT34kKk224neVuXRzmJyx",
  "key10": "5NCpDdzMYbWmNpfALPqPea5GzmnP7uUyrWkkpj45PK5LDREZkPgHb9a6k43ZPNmY4d8zzbQNU6G4YiFBi1DkbtEz",
  "key11": "vaQN8wgaAy6MzA8sGKhKuVUyRW55rmdCUnW5X4tnrqDKnmAhfeFV7PFfi7oMra67fFcvseV5wARwAZM8BTe61h4",
  "key12": "3gXDMA3nKCX4x1yhMwsfuPncivq1untiUb84siJ1TrgHZbrWHRiD5HCEYGetECDrb8VCDW9AJNqJFhoVAarN4VAJ",
  "key13": "YoS4j9TfmaUumF6g33JGor5A93tF4EcY93sarZuAhUbZCTeU6oAXamffr8QwZwMPnJyrvUsRSuU8q67aJfxm8r7",
  "key14": "3tEfcXVoTjXyvztxVF3uPJW1MAKMMkC4ArMoND3P2b2dAqLDcZQHTR51k9mRF8R6rHC74U45uJEoZiqpzG5WeaZB",
  "key15": "45VqVY4u1ZDeEB9Ea5oTeVfkGuoibwjGtNnvXgDtAprEkeqB4FsEkH7DJjKr9cQvEJk6ztq2UY525YNhXTxz3gm7",
  "key16": "3wfQEB4LcZqEBoSiJqqEX7SZ1dJCrepFkPAYu73hyXPW7hfJECPiBPaMFvBKCfp7Js84GXmj5nCd9RL8Z3PSkjhn",
  "key17": "2JDaf728L3PCPGDbFT6morLkf2LnBxY3VLbMRFVt7AptsDvrvk2ZkUi8obcKFQo3b4FLUhDE7L7mLb89N5sg9cV7",
  "key18": "4b8tZjdJbmrtBe27FRtjg4vtvg4gMdSyc3xnfKgprh8f7MDG3MUqavHojXLb8nppHxAXDhwwMGNcB3skLakks64T",
  "key19": "2eL9mqALHnMX131Euu2MVD94doLzwfF3ChTKNSjjApteZPMaheM7X5WYYov4D7R1wCXtfR5PhxakfxMcapjAGBK6",
  "key20": "ZaDfERS7x9QapXxT4PA8vRiHDdmGkgcavsdyHWzW9qHE2RiUJeb2XVF2zSvbY7mNVSLtRS7YyMAuuGhhzKacpfL",
  "key21": "2qWGt3zrXd6zW7PoAUNmxb3aiv9cogrQBZxupN2QX4e72XgRtrHmAxWep65TpKpCbesajdBZCY7DWiCczpfu7BD7",
  "key22": "2ekAQ7ds8J452HVd1kD84tg129UNVNQss8VRDZWLdTZ1BsCHpcBRrCxvE3WohMY8t84Nv8ZBiRnMLVMZAYGWU2Rp",
  "key23": "51sfKeYSGCuK1LDaVX8TSmVLGjMMRPwEARpeA1P9N6q2HmEYCwg5zSbbZfE88jGbBX8RLsTaL2K44m9AERxBjLxA",
  "key24": "5oPx82i9hDwyiLrW9n4pm5KoPySngXFaJvq66xWSqJuJEwwZSsaMcyZoZGpvCVJEoGFZjvq7ZTbLw3nBMjevBSfK",
  "key25": "4TDZJPTJ7nFBSBJE9fVtnabN5HpMErvFh5nPrPRxTaMNrgg3mXxYLZ24bPLsdT3Hu7qGMVMrf7Trk1qDKjLS3qfE",
  "key26": "3zuzPiQ6nRJVsLoDz8Ye5N6SiB7fy53AupN6AAb5FyQHBJrBAgwphaHJkXgGPqiJxzQuHzEY5UF45eVyzT8m8ZYM",
  "key27": "3BUXDccVK6cBF9seuCgjxdis796WxdbLmFpkMez7BoRasyNafT5cRQsqz5QDbPDxwnbTWhULnKU9jxqXy8Ka5oX8",
  "key28": "5GQi2qaGGxhwc7aMSV3yQzzd6DsMzZ31h2VTDCqKX8ZxTBT2QF77yzEwTsed6WijjqLKwr8tsTmbvcPDnHSu6tfv",
  "key29": "3XsaE2c5xdCMNFfqDVfXac8FzcsAosg3fyk8VfLoZPhriPpqA9zP4QcnqmwxBM3L2akSReMEVha3aE3jbFNLRaSb",
  "key30": "3hmRDneDEnKgSCP3yLVCdXsmBXNVzj9kh4PKsLrhrg6RfiiRW9vhNJo6YF6sa762j7xqxco9UsTn2AZpakEajJYY",
  "key31": "4GQysu6fHeyCm6EkTKMDuu9VYSxNg9J5iEix9gwJPTbrfD2A9C9GVLxUi1ys7KzxxJQf6B1BB9msY4o7hrxS7o2u",
  "key32": "42c4oeWsAiniSMLvEikbNcfeaoMF4x39DdvJ9Gz7jPvMJzSq8TCAixrGuZ82oKktHYiqerBLmH9bCoFfyc8SKqV7",
  "key33": "DRT9Zi7z3TWbPVKTJH4grLSEiWuqj8o5YpJ34EuiNBbpFjc5o6RouiHLuhKTWGBjr6EHhyUdCGFHxN1YJCgJBUq",
  "key34": "4brZUUP5gfXVRwdjiNaqDkph5ZiYoHvj4vtV2Lke1oWhkqoHB323msiJHNMgbBH3dHQTvFtVrWvPDM1ViFoxsjdr",
  "key35": "42NDhmXMpGa6skdEnXkuegWiTwuE11yqN2udfoKCLuSAcL9Ro9Uc3gr4mJn37WPYhLQhk71Y2qM3Pum1ohgvSX2q",
  "key36": "5rXQeNMqxvPpP4Jqrz4gAF9DqRAaBDGyr3M9kucsMdKUXku9ZaJFgfBpLhgza7rZLzh4NovstG9grFxU6iUpqDdp",
  "key37": "2sjwH8ve3uac2Q3MGkeBiWBNXecPwGXgu65bQ55enEkpdSDHEkNrbNvp6Sz96YGC1fR7bquw8nKGnh3seLsKKjpx",
  "key38": "2hM66VAGmL34NkKPAMaPeJyv4ZRmoAABTsQJqxWWMJewSdu6pKyycynHpCvMSJqvwCPTshibvTc8CqjWi8rSELY5",
  "key39": "eP9Zwq4R88qSrXc5R9KouoYHY9ZFtjt1pp4hP23apjQVSZUJR1pfD4QAbSTZp7mh2QAnd5UksJxFvkTonu4Nnhm",
  "key40": "CddeawKVq7QpJdUrEmn6JqpPE61ZqVzmXBmeKqTnegYztPCggZbYHVWPVnvEpDNCeybGeiWsAhUDZcvHADHkV24"
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
