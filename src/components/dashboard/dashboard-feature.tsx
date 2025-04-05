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
    "5rbBg4YMGuDQ8FmL5i6FZhN9WQjpgE76XamMPvCEdMd3NQ9AbVCEtdW6Cdy8ZLN1nsy8kgw5vWBTbDhEBje2yy6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mNvSBAFkbqF5Yn4TfjmskCuvFxfb18KP15RqfxFRdKJ3hexD55dXVNrEkCYeEBypgnEQCuman34JCRWRAYUFxD",
  "key1": "6344Mt7GB2nRZMDZ8UM7aZ9iiztbbRDxiSW6uyBT7SMptDAUbNR66pEfwq2J7WDz3N3zwpt7hCAvTsx86cyyj2xn",
  "key2": "4AzqhuZc9oPeDmYTSmwwor2SEnh7JrnXkq83sy58Z3DaJV2L1Me3KxN9yEU9DjACDMBg7HHmzk6bkzaqgTmet8s5",
  "key3": "5wzRJxsPscrFba5eu6pM4KPcBGw8YQTuBNfkYD9RDxhEL6SgayafLjjAzxLLdkNvf8QgyAh2kYtjM1ik7xiV8yKZ",
  "key4": "4vwApXfhw7sbLg3RHxGk1SH36kSvNC7QGLPbqmc8CATntakhK7VY4Z1u9XQRQfh27L6h1wZVuATVGjdpkXVbgTtD",
  "key5": "5Rzj8mXD19JqGC2wFJnmZpP8QtthAEgG2mpF87S7Lt67oD2KQ17LQ3BWVt63LCybgkxJPVgPg88hBEuBP63wUTdi",
  "key6": "5CQu1724pJMxfXZJu6AJyQuu33799v4k5yZraksx6yvLUKJx3heiCA8r8JPb8t1VdfembMovUuAUgoDq8rGykggF",
  "key7": "4N6S9v6sVkDERGCwai7fGy7BUVjVyBxQboB1yAmivdWMYR2Mhj6DDrmGrkoewVX9pe7piRAx82XTziHqt5gktHVD",
  "key8": "2xhfSnP1DwS6fhhhKEqmyTdrrTPxEmdKMuwUjd8ADdAtBJAx1VbHLQe59nK2a9NDfeufb658MvCaSwbK4eUNhkZ",
  "key9": "64eXEQPd4K5UfnzmNJ4Gc39L5vyfV6yNt82viuN9kYFvKbdTFevwk8fRHgzro6oNPDLGV7ikDTgu9PNGL1i9kMyV",
  "key10": "5HWrcmCwcEgBYCDewewkzLHGqyRZWodMP1CaHCudNGzCtExTKyEphg34jHZ7THz4HD42dPxp15rFLoowHkcnrBzt",
  "key11": "3KsruLSnZz1reennsPNz2dcMZE4z2byvYAaDAwsVNkjkwud31Af5i9sbdAN5WgACjC7v9BQQhb2zW8qbeiwsnXWw",
  "key12": "5SUMgtkR4yEV74Symq76Xs9iNvHsDrEY2jVjsnAinFHvWC92BAyFLEtBiRB7ELuhpwb4skFTHTHPPuyFBHVLUAjL",
  "key13": "4LrxBnqDwxuAtwH3rPGrcwJmxGWzvUVdVxFWmkp7hWN6sLVAypxEZtv6DcoE8j4xEjMZ1AGgeSq6XDBi6Jy2E1zc",
  "key14": "4aipzQcc4iWDHrrsCvHXQ7uCNZcrij2UCvDuG1esZtXT69vkcgtfjYYKy41DNzmBtoRWuoUae39VmSjbiUCPYwCk",
  "key15": "3GiJrgdVPA4HK6A56Li2ctnMhwhwrBbSny3L4LdpyNS3tcvJD32bCjwhZ2CKQDyFLQ9rKRFGwW9Af6DM54QmtmXz",
  "key16": "5i3BFaWsnLDpukqBQsoRSjcbHMGtc3dzwnYR1UimEpbMoJ7VWkCDHn7FgSsWcEmtzFR58KJ4w4yQ18x2BgEtsJqz",
  "key17": "5LLDA6iGejMCo11JH4JfTesEDMLSwPCAHmBX1NxtNfdg1qZ5CnGc221StCqxdMA97po9z3cJyKEn5ACKgZ6Hpvvf",
  "key18": "2q4inuqkL493TuSg4N2qSjFFwAc73TNyEW9m9xnRvL1mK7s8ux3u4W7fXwoSPx9diS6G8DgFuxh2odCEXYU1BTFS",
  "key19": "vTso5FvcixhTXAmDPqX1zUNDtyhUkzZagFXrwpBtnPdeuUJASX6f5CyVEuZL3LD11XtSmA6JJ9xnpzzyDnF9TCu",
  "key20": "2FCdShwHWRG5SDhxySSQQ993WT3ysTpMaB7ecBm9ocNgmZ8xfRaum5ouDshoJypafkacT77RJj14qJaeMGt2mWkQ",
  "key21": "38fh5aPzL1Ke9BzGRuc35GpG688MmnWyaZFEavLQcWQTf14pjpGooFeo4tT6jJbchewaB3Ffs66ChGHFDhQcqU9d",
  "key22": "KaSArUFZpXxC4CM2xq3ycpgpUtTT2xED8UinHoyqM3Hqq8oh4e18qRWqFvAJqjF7KK3x9Cf2KnTNC5bA8PRgyJu",
  "key23": "7zQfFkbHyJ9tmS8RNssCR9QZ9xJkyjMawQLSatpwpVDqxTuTvRneEsxHhigm71BJykmxSXHdYfCiHd3dBdCSfkw",
  "key24": "LuxWhg4REFhNuRHVcm8joS6TUm7azbkKuBRB9YHDRwmpD8bTeRoetCPX36yP5wXU7UpBKqq9eqREQzco32GxVRL",
  "key25": "4GMd8gRpvGqCJFUpxtsSat7XZpUf7x1TRciPyLXAVeoyXJV9LtkQX3W5omry1LQinpgqAy9RRDdmTHvpojhXg73m",
  "key26": "3eyUufKFWPfQbNbqz4mfXTV12XGp8512vuWpQz2V373NMTU9xarV3gN2UYUBKt7X7L7zRgAWjuR5ekcmvvofuBny",
  "key27": "54ZQY9xUUmHMViWkp5sM556NcrH1VKwsUbywZrrPLbipF9tTSQof5i3Sanx77Xdn1Wi6s3VtmdjxU6VdYMr7FSro",
  "key28": "58EDXETok48dTtn9J7RMMsdiM5iPRZkgZENGDXDJSVBpRE1iMiLFgWBESTrgyW5GfbggmKj3xcoRY75aQu8Sia5F",
  "key29": "5KNyYop9c2eGkYAMBBRTnQPM7q2UPGgEjSUdgsETepKtYak8m3n6BFvsLEEK4RVqur8aDq7byqrTCi8im9iJzBt7",
  "key30": "2RDC7Y85GtzHTF6xjgMhh6vzKXL76QUGsDkwCn6FN7rSxdNCJTPzjooYuDJ7eLBMj1xzwAEn9Zn1yWKapdCeFCcP",
  "key31": "2df5V6serkyXq1Qr5h8BjDe9eWs1KwsjkCkGVWnWHXGStiXE9E7pjoT6jkghoVec4AnbRC9GM6oxLPECS6rmL9zT",
  "key32": "4vHdDXavV8XebhjjCjM3R7CPa8KcMwNdBTQabBTaw9qPQt5Vw1bZiehk9cwjW56DjYgENyARJ892V7hTL2Lbx778",
  "key33": "4FZXp1ZHXR97gThpxbAFZWj4SePFpKMGGkUboLwnxWQfJvKqfx8KXnCgw6u9q3TCaRCo762oXCzPBMXgBkrT2TXg",
  "key34": "3YKop3kXCk14v24GKU7aMjfqtAj5XoXqZZPtUczQJra5gU1kTyYuHbhhnjHUYwwJDG4B9dDoHweUHCMBtSbQJx1n",
  "key35": "2bhRqP4EdyL4FJUxbrvVez6CABiSV3FfEzaVmbsMS8F3pG43Vsaa7iX78rNXTjuoKxqAKpzJqqugXjeH6gW92aKt",
  "key36": "4TmEB6hvjjWw8A9nT1dKN12ZB6NNxrmPhNMioWLrNHvC1oJf6nw18YNtPqf4PYJQC45vMncyUWpbrfeokBZeMccg",
  "key37": "2pNmU75DQaEEzF6KMK2riZgBKpnsuVSy32jHGt7yyyXYVRwC6Fiu6z3337R3pSEZngqXJiPF3PWwwve8ALokdV9a",
  "key38": "3ZmEFjsfQm1BtdkzdEZhkwMHDvjkB8FQEX1tpefBvcCu3Fvwr6LQg6KbwpPDuwUcYFJi3d1Xi4KFvEKENvXCBTji",
  "key39": "3ruDj4Yfw7jrf6Z2C8JgemJ9cb2ZEBGS96GdRB2FnDysN4osgTzAkEeuP2nv3x1U7tCxGyvNxigifVxqxZL4XDpD",
  "key40": "5iDphf6PBoVnWMArWBe4YEcuBSvLAnd6qR5bv4RprMYnJfnfsczS9wY12LxBDSWwL72wS9sZhXWDgyGZ2YyJXpvG",
  "key41": "3QbQc2nDiVNaNEkkvVdcR8L7PQhLdNQxe67j8QxSBNSjVPpAbb7G3d5YvKJ6qsNgoSYBG4akxn2XyVErE53g3Zxt",
  "key42": "bMVKAuxYwXnePGYXRG6xKZ4q7YCifEn61fWWn5ZCD9taG4JW8bZddR5KhLRLQ1kEGAsgDM289od6tTFpdwgCZPN",
  "key43": "sJgnXyrkg1RKjr7EMd4G2BoM3RchTDrEqXJQBFRre2b4yeUN3saM6bTY5E9NfViGhpmunLdMt3KQoTcMgGVkvZg",
  "key44": "3P7Q6RtsVfzSypkDSNgNTX7Uii4PDWeut7DhE3dCtYdz8mKG5xE5CwtJhwfk86RVzMJbhwtpc5DnroFBWXXzqxp1",
  "key45": "5jsrEtJmZbpmupGVNvj9t6oqvhQFU32XugSE1uGurrGmNvoyx7dHSmWb7ZmSqb1aGsgTjRwHd1CpWrubnTxvZ6Q5",
  "key46": "2SL3NGUcU4MS9KKXQrKQStJthsjVbErqP2ccTZgWDkESenDxKEZ7p3cQ7Ry4ki1XaHzEmnw1o6Jq8RBgnTsNA7N7",
  "key47": "3CFXbNqRjpUMMj8UHFnBLNxMgbdYSU9kEjbcxKViwJJWLdLwamFWyiuCm1bZm5k4HNn1wTSy1dn8zuJbbHXarB5G"
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
