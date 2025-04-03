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
    "5GiwtgNAFsAjsc7DmoENq1qMr6V1Gwfg8bmpvhLoqZHbFFfMJCBe5fWsD3xZ2RXGaRyNiZoaHa5wticNKUY2kEBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421hRW7BH2vjwrMFg6PgCLZjR2yvGZtn8xVJKYCqxtmqHbKZhGVV6ik6b1zMiDytkWhTzBisStpMAyVBYDkXqKbB",
  "key1": "2K4TYaK1bXEUnoC3KJFMHLHEkz1pn4YqGwLMGTDUSFR7mVUds5dp6xh3obyfC11CuHBbY6Lwq2FsvvfaKguAJtGX",
  "key2": "QZEWZifFsBuERhvdJ6RBUxC7iXgoHzG2yoMWnCcFHBJZia1wwcgWL5Wnski3cG1F9dgn7kmjSTpfsrqtZAJxCg4",
  "key3": "4A4VNAbpLhjwV9bjsPxTDbLhMonTKNGTpponijR3XWf8b92QuTBKD1gcJNodcV7yHikNjkjnkyTNDT6Gum9UibQa",
  "key4": "3U5BXZD56mrHBYrTLAb8M2ub8u84h1xk4pB35Skfke8RkpSMir7E1tNF9ny1NUpKaN3RCWXqekBRArTQQqBkbsji",
  "key5": "Ks5ffvDUfK2B5WjbthGcipWojXmRAAiLeyZ1Tyroto63UCKXY9vdoa9cvuEkLq53KXaFpjfFaD62Zvuc5Ks14sw",
  "key6": "5AexkRLtrtdjiRc2GgKQr9Y8sxVGpxUt4F6oeWSxL8pnuctm1i2CpJYQmnnhg1H75RpEw9d2GsQqicUfyxyPqUX4",
  "key7": "32reQfCcC1ucQ6UcSfuepUekpGwrDHuYFCNT8AnTwXG7iyzhXpLoBWaxmURKbUF7xShACXBQfdXbUTHNW5Bic8j7",
  "key8": "3m62jHdPHBwqLMV1cdRWXePPwrisLDCvDikAbLchio2WQLxzMudrC8KZz1swiFkUtpzKNosBwxp3opcccSysrvaq",
  "key9": "4qFm7cCqc5WKs2U6EfMDohkeUBUWr1TviuckxuxDVTDFUMUtU6oewJ9iSMSudzH8pPNqRq4iPppCNZkFgBt9ERw7",
  "key10": "piue8NrnagzCd7geAFiKsqvoQqfjki4qoM6FmWPrAGCqzGgx2NTn7Xyw4A3ERhmhoVmDohutKvuxeaR1ABCAtWf",
  "key11": "D873J4VgCZCMC87FkPESGRLY4bgp3Q8cvEHStbkAPNrsG3UP6W8cQuJtwycT5gDpRtcvnZLfKvt4jN4pU5XGF91",
  "key12": "61cjAcGY2Rknni5PdszsDZVGPjjpHw2hDvsLBcqadPrcj3ZgB9bMUMuPVqpooygw6XXhhoZ9zD6mZuPFLR1oLsrn",
  "key13": "37ncVPHSf3Ne72EvF6ZTBgcvtCfoWaUBV1N8NEiJSeNFtEejYCEzteZT3uGcqzPe3TueJJFrmz9fm7bnvv8bmehf",
  "key14": "21abSo3ZEesrQFhTZ8tn3CwPhZkpNrtRvkQxkXHbpendX9phB19f2kizK9GUeU5zLPAvCPxsMidbTvfPRVyEW126",
  "key15": "2eiCcaD4B3tNTZaaGJ2o1DB1EjQn7TAmYooYhjuUKCPcUDWeZ39dEFJ74qTL1k3CdEFMEXti51DN5survVoEKprn",
  "key16": "3kVA4ZUpXBd5ANVwLmg3XKNVQrxyRS3hwUJyqg64KWjhi9sjNzcRdMjSRiwz2uDnwu71hZ3RjyTFuJEMiyi3QpGy",
  "key17": "2vdNtVT5721iVzd2TB959UUC19Mp9vh3n98txXrANEnweYCsYvDhQJbw8M5EYnMGMBcDhSHoMMujAmW98dmdTVri",
  "key18": "sbzEpo9ecBW78yytzUsYYUwNxShbxbb624yVt8DUTWCoJeuAG13dpj63eyw2zjMiXBKHtPbUnPfBaKG4hZ9WRiu",
  "key19": "GUwzFH9yB6PiG564YGFUN71mb4PrNbqeLZDv8V2AZyZEMhwch9AyCea3XCNK61RLkAHWgkj4vr6pPAPKpTjT2KW",
  "key20": "3pYuj8FkaSzdKzKPfahcY1VngBHMmA1HYQqqzSdaoD6C4K4GBS32RwAExieDkUjvRVfbKoTMVd6M8i5a2v9pG8QT",
  "key21": "5Bv51VVVMfxfkSNsxLg9Ys3zyrhK9947BDatCmqX7LW6EKxaXTjf2gErgyrUvjkJzWwpT3H85pALx7eMgWTw4rei",
  "key22": "5iN6a6YVCxRynA4cf7khfi1x8JuLdizo2LsNLdE66rzB3DtSnPAq6X8EcXdQirYqxjocjJFd1NWjHgqxywwceEFL",
  "key23": "2ACuMT8hnXfV7SrmfA1bfS6rRyDRRwpxiEB7jnigqyJrJ9KFkKMfgjr4rCQ8Ww3ntYWe6rk7Zk39d81q83ojYRuo",
  "key24": "2bwiUKEMTsogmmN4fTi1fCk4d8k9pjUVg6ogEXQyPZ9B39q5Ad7VNrTageschss5CpMxxV3xDaQWLegBp9W21mqu",
  "key25": "25emr67k6tFLMVKZCzwSgLFeWsyXG8QENeGK9iWiV6cqaicR4NgQLM8Md2wruzL773dSzvEnWfAJ7AuCX6bvhxA5",
  "key26": "59DDo2k6ELtT8kT8NAhwMaxGXcFL6w8cYTxbupQ6BBfXW5WDSgRMSZu9TFMkACkECtVGdQ4pjLtgmbheg5hdDkPa",
  "key27": "z9HoNoWkWiyidbkZ46qwu1JCmHBk27APdqqe5uQQqRkh7jbSJVZqWw3zX3J3E8bp8QQipins8wsRFLa7x4jmB5a",
  "key28": "J5Sv8xTHcFrNdVfhEyPku3pcifcut5igDS98kiGdiKvfp4SSBWvjpkJeTqHn9MSTtocdeUR3U1wtwcd9X5h9Zej",
  "key29": "5ZwU2mGLc6rEYiiGqXY2gmdbGEy2YPPgV4peoGxTVSnXtaD3pgqu2Qfo84UsQ8Ze3RybKEn4cC4WM7bJkEpc8pa",
  "key30": "cfyCJn7m74yLgy8M4XMETaYPuBVwv84xFHShkyw56ezmfBqG47fyQ1nLSk8twnGUJKFu4ozryJwqvaJNDQcr9Es",
  "key31": "2ySkCE1NFsyMVXqaTRyHbk7cBknphTiPmR53NJpCF8urwuNfMfXY6oBH57FP3V74b3TTwymPXhgdLEzR2q5skGLN",
  "key32": "33e6Johu8TCJm5VXtZ1TCad4yxJvhtkp1zEUi71hzqcx5tJSth2bQ8w5XFk6Z7HYRTnrg242YTN3hkk8aSieQwtY",
  "key33": "2dBu3vgBPmY3UaS6a8FqBJ1AQzKKkEe2LTCTXpt7fMFNU47AotcNf4ta6kbX2UDSC1SqTbuPsaoHH955gJNiaKaH",
  "key34": "35vRtfoCFhnhMuerVN3tNueiPY6W9mbAX2Fief9Qd45b5TrKREWezHw8aG1xLohjy14ZXW73u77xqN7epwyfbDps",
  "key35": "2A7QAHoe1TR73ZMWkvMAYq6W57bfSGD8FjBNXvgsHADo92AeDcA44H4aKth4QXWs3mUzqTHt2Txph2iVrAjkVnoZ",
  "key36": "3R9WWx25fXy29GbHfpCNt18KJCswuRrfKU9qSFLcxT71HkVCnb8D8P4wQS1NBFCU1kiDzDa6DRCQ7WZrkxzxVYc7",
  "key37": "62zeaFjzSgFEkCQM7qFWJUy7Mrfi9XkVA44Yknf3cUieh59CsxpLB7iSXdeWJwbTsJgfZuEvoUaATGknd1Qmhad4",
  "key38": "5HMgXgmhHCwBZMRQM2u2GvaDrBL9xtaEnaA9VGj75gjVminw7TS5a7JC9KucXAqJMFWVprwQWiMpadnoNrTmbS5C",
  "key39": "39BCvXB8onEXvWq8nDyKx5nSBz1ZnLHfmnuBaNjPH23YEoRTEKAc6sb7PqH2A8nnSbV2C8jWn4pJ34YHBehJvSM6",
  "key40": "KBjHpZtiU7pisa5GfR5mL3XbUM3hxYQrZ6mLUdcV2T6g2eyPJ2Mr5q56aze5xj9nHaFSmBDwQXdC89SnN3Kx1JY",
  "key41": "3eKLBdaR24XMfzZRFPBCsvRDReuNWZD3Mw2Lv18kpPxVASgQBbBFAVEwZ3bX816Go99S5XiLPqVjKqcgNGVWapbk",
  "key42": "4jGEBKNkPjiANLr2sQyQCUwM3oABk2a3rB11RKyuj7Cw3aW7hNus8Fhtfys9jdsvF6pmjbzdaK31HvrDyYts2ctF",
  "key43": "5PHfJht7WqSyV4WVvgZip1S9Yr468E76ACg6VMcAA3GSuzYfQb9bDHZuQEyLZG8oEk9xLfbXD2XRSksuVikfNXhL",
  "key44": "5wbfPjhqUu7iPujNj7hCZdK5ARUZK2RkCXQ4qCHbXUMHk6Jvav7C93Hdx9btVL2yJJ1GbcC4pWE3R921KpAUNoAF",
  "key45": "3vs6CDjEJx34DBJTx5kpQYbgkEmgUhfv8ygexdNGrFQXeHYCQqQZRQkKfzjYS28sq8LLzdGPoW94BhMzF6msvgRU",
  "key46": "4hstZE4aLGPDveURgT2rBvFfvsx38VvKYVvjFvHrsuwgeM5UsuzXp5Kbskrd91ufdeKJLgAww9eM3oWkbZKpHBrq"
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
