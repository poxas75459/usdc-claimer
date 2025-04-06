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
    "4smCr3sAMpGq966ATtbX7mJ1CWs3Z5uFpJaEi6VVAAtaswx77xmmLwMXvC26zN9cd9utgGQcWJsCr2BfwLBgJ7vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djTQZaKSgJJ3EUepsvZ9CtsUGgHXS1hGZywYmhtQWST4PEBeYaTQUqcDABsWm5GpyWkRTBdvnuUoCmtUJ3U4GMW",
  "key1": "2xw4uKxP6a9uFq6WFzoNZB2CMWqfTMNgRkAmwazQzoncFHVAEdM7N8JZgNi2rsL8665mXfmf3VerHTWiG1iaV9Yu",
  "key2": "3VZ62ULPQRtWnB62AcXPV3f4CyLtnL1D5MY4uRnkb58BTdENaw8dXjDfywdscxqinuJVeuPzzDT9T4yCFD17mfrG",
  "key3": "ufA1AzWFTZCgFM3X2KtC6LSFUJKidKvPPnE9oGTRJwihfS8ycTTBzGveZnZ6spYZWuDjMFERdQ1iLEXU13xCgoW",
  "key4": "5kJrqHTDrfvLwqxjvAYp5kFaZBT3JADmDLXXEwRCKnVcze8CHiYQekVNEGaxqppw8tFcmdQx3T6tDNL6oAAes3J8",
  "key5": "FhdQoWdfTCmVSwW8ALhyqy8LhZCJtXfG7YRZ2KXNFBXiNCjC4KnFgEuaogGnwXmmuNymPQGXCYAwYm9n9fMt8G8",
  "key6": "Zpxv6NEfhaSVYCJfoeyLcCLfQCKYGJFJ17iH83nVnBAou2JSFKJwM1yHjysQ6TkSuxM1uHPnbdBFe5GE8PrGSrP",
  "key7": "4FEpytfR255D5f3gKgi7R9PG8MC8Yi6GqgMMd3gBgPsfwzkSfHqXP27H1iginuaKnaGr1yqJzoEkF1uZ5mQvfwLe",
  "key8": "3VoHvmdGZ8VGcwRVV9TkgEEcggeZXBAQZcKd4Ym5mF1MzgXwaQWDfm66w5etdaarybkHK7YqHV5k5ae7nxooTc8R",
  "key9": "5Q3SHkuwF5xHqkcXyPgsB8pqjwm6of2YQC5vWTdNff91ZWsr8AXdkV6KU6ooAzuN4gCuuQaBBhfxCrVSV1PVJQbZ",
  "key10": "2iUvxqUcxrT3f7buny2F2Emo5fjy5PSJdzbrUZb2uAJ34xdQn6spmDTm7x3tFvqC95ctphvNn6iaMVvXnFX52vdK",
  "key11": "3BitZqfnRyMeqdsB3DoFFdgVKLEu93SjbhmLQTeJAvD7y83EuV93VqLSvg53UjHn9ZoobFXRGBdqEtbsApAWJfRx",
  "key12": "5Bpfbs7bvxWMDELt8ULptfPQX8vebQWd7mHJWfj2RvJGQ3fypR5eSscAGz3iEHXUqQWyFt9ycsMTjYwRTxb9UHDR",
  "key13": "3TtheapLETgA54aFxGJuxxoPXhYsmGXDicTPXNkct9TqzzFQjuT4zmHDc7nVuGD6PqGnmApPsrp66doQpoHneJBV",
  "key14": "2sL2QfnfMH9edNnuon6ohcavJERPBY5pNbxByzyaqNMwNUwvehhu2HE21m7vV5CPQjr9qGgtsNoo7j9Aq2gcAdeV",
  "key15": "ZpmzV9Mwgh67SSNjhPkoesJJ6Cv5CQBcCzi8e9QVdUHAF2h8evjSTuSCGsPv3wcbqSoxU5keeDJmYSdZYHj7v9Y",
  "key16": "63eKSSxewRVB41uFXivu9gWijLyNtko8LTuxDFqnjFR81KvDHqNh9dEuTWQ95utYKdzWCgrzPKU825sHy3ULNwmQ",
  "key17": "64C16C8vf84XEp35Qjdkf82ecSUDf4SHoMK59YkLPYE2YaeueB8WABQk25qVdNTn1LCgNiH5jrvVLbrc7FdJKQW7",
  "key18": "3P5sd3NWoRCugxwoPYThUVQBGPFrDA3eKyVuTriJUB5WVL1atg94rDPmhJrjqxLPZzWJBLj1jNeG2v6Q3hkJHnNt",
  "key19": "52yaGQTpzPBfv64hKfTLeo5LFwvmeGhhKRaFq5CzNspW85QPzeG171XwTyq48JXRz8X7VUExxxGUVk2sHRRSGtGc",
  "key20": "33Du7mCeFZeSzsxJF5GD3RUVzeuHUttSVwVvRGZ8gKBeignSz51mUZPqe7s6EGJgsDR73WoX6WNrYGvEiAmcQ79g",
  "key21": "37W41MpnAx7pa5mrtwuyAZi8a15CkaTw1hUHyPHnk841JdLhzHhU6RYxpvLDYqTFTkfxEuFGxJdN3oL3cWTMPuKW",
  "key22": "2UmHatSDZbzDUjiVmjpAJmnP6QzWELoZcRYam4cxu9e2mPJdrxShp2zEJxYtJ8G6kXsbj2TRHM21tAbGoFrSS64b",
  "key23": "32q52BoAZEFHc4FpgLPER7198yTK752cuMN6HbDccomMpUtjp9HeUJi1RZeL5yhbqj48idsajA4rnnrQXeGy3FH4",
  "key24": "3DGWAmseKX4fxnBZTDWSqthVmrvP1vYzLgzGAhdBRCiRn1AK13FC5b6u5jPrKR37pkDkggqQk4st1mQ6y3JDQC4E",
  "key25": "45Nu2rQGyxTxnpcGsB9gYvYmF2seGqmuYaX91HaB9TnyzbYWdcpEge7R3qSJB682iR1XMBJ8FH4Siw3WhBCfvton",
  "key26": "5RuVxz61qe64xY8BKyYXQqeUvNoe8Z39oF8UQdMdh8Hz3XYN6LtRAuBGfX49R63Jiu8mJZ1SACmtKWMWha7AH8kN",
  "key27": "3gc5vFk7k66mgREmNF3X1YYa2bYP64caMSWYwCkCgyBuAaioGgrhtbyeDkJbxvj97xBfoz8DpwbLjReDiWAR1uzc",
  "key28": "728PRmo8vDibwqbaBRTmTN2xnPbjniFB8zQ1fkdjTr9Nc2McEa4i9uTs8CXtn27zcVDXFmF4bTB6mgxTkoYw2NV",
  "key29": "46wAwdB2RevJxny529ey3FaLp3qtmpoDtDSrtuAmmoVnag52pusGZTKtDULXosWLq3tCGRvEq2PfSSqmVPZFNN7Y",
  "key30": "78BBH2k7tYXoR9CCz2CqyJLzj2WRMaihGdV7oeH4Qc4gSbcYge7DgmwL9mk78NYyx2G99p63nZ9TAt4sMgigA6y",
  "key31": "2LLPpzZjSoY2LNAJzMpEgkEpVWuP811LiBB8CfpKvbcyDRKe86QWPqi7TKo8qp4wqeZr8nSicEuorTcZRsnbyr7X",
  "key32": "3MGza8vWWeervVVe8cqiRgGfQK9gDEiwHQAELzbipzTNW1GYXEjmeSZD5HQRrKQjruudfR6yd58wDxtbNsd84v2X",
  "key33": "5veLQZDFtrD9HNkQ9EHmGp7wvDimFGVw6quA38a1SvC1wipfn7GspG763axeb1v2dKJSgxceGMMUVk4wjFJf7t5f",
  "key34": "2RvqptUYGagXudCA2rv6vUcghEiX2WGT7VSWQxUdtRcCvjdzSgzwePwACgsS8rttrcrng64U7tfWQFZWxE6nwrSr",
  "key35": "R7YWocRPPg5G13ZFHVWYMPqDfuxnFDXcDfwBRE9n3kwogafi16NbCyXf5agmfApAk3vm7xZH6ju7yrJzrk2gCSf",
  "key36": "3fjt6jEX78eMXdRRJLjXkpx7hBgZXntAH1yrDGs7Uh5p5qAP7eMVaQhFjmrn2HgWpgoaEAU77ZXbKKbnGEc442y7",
  "key37": "T6joCUrDFm1YJhWwEALPQtsBNvkHtsTPpe3ei7ZoKAZfkY9serWScuj2L4Ao7igR7QwEkLBfZeUapoUSoP6o8HL",
  "key38": "oq3EpRJtHVtW8a2fkqnuTsj6hm6xaQ2xHmLSraGMk9wEVG9q4Lh284EfGQKr2FqWS7ZcgYoTefkCPCCC8JXsJKX",
  "key39": "DJzRfLosi5ps73RmNmhMRJa8L2sACn4rf8XfCVSskkUMJcLoBZvyQ9q98a9oJRmXhdK9My8SmPPzqxBxTuZ4F3m",
  "key40": "6okVrZU9GzsknUrGpE8aiGFXTQeTmLKsvS98tUvyH6HW4HGYhn3NWs548gWK3Dn7CqukVnEL3btiCeKrWsqtMra",
  "key41": "3DzdXhELLDKRNzK49WemRuDHKD1vyrH5JjZHUd1z9eyBYnwexASJbNHLUVn6bbdNzZmyWtCtVL1temLW3qcHuguR",
  "key42": "5UnFMP2zqBssmRJma7MRLDoBLEmtsnHS1e7Wu1yeJpher3RwFKy3W5dxGWQse7CN2tqZbez7dc76d4fLyksy64Sn",
  "key43": "65yT4JonBXrPhkz1PSwdRUU6b7zhXZKa6e7dZGPZcg1wq147HkzsAz7Hth1cYR6BCbvwyrVDEof98EM1WVj25bHr",
  "key44": "49rUxjJZc7vLqZ8Tt2bmJTKkKao4mgjmLAXciBHXsRP6VJAh1t1ShwCehtg9fRCriRopj6gU2hNzBTw41DLQg8Ag",
  "key45": "2zZyVMPLhTmhDsR2vQZ6AF5QBZ3g2eSQ1iNBrSbYW7Krh21Nka2n8V54CM3Sy8Kie2S1LhP98L1uAhQ9wn9KxnU6",
  "key46": "5Xxa4RmQYsnimP54s1ZrgPhnE5DHk5hRgwyvBxicrvW2tfTTDfYCt1nSntRY5xXKQg4iREdLvy9WZJJPQqF2fLWL",
  "key47": "4bA2VsdN1wPjJMREVf8DSARVn73RyX9FADB2hxrnj1DCoN3Ahc7dpiNnjj8R7mTguzkqeT2gUhJBpnsTXnWaGQMH",
  "key48": "61pf4PMiWoBgzqPgxS5Sz9mrYoNmHaF9cipSAE8Q68MGZEpoiDbJXuBzK5v3gUk5M6ZELXGD8yeWceEPgnhj8seB",
  "key49": "2577qZVN95QZPSYN9umFvy7s7zu8DvBwtJQRKcoSByNNMHho8CQu9f6CchGguKxpooSfBoE67wguFGrzz6WuyU2v"
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
