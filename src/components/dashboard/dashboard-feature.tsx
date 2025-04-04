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
    "2H7nYo7QeNomMC7yXKoMWRtAmHP52LJXhAaCWKyzDhB21PavhPZgPVdo7dis3NYmpvdKrHML577gDziqsDZ7VYAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhFpj2W9ebMwJ5sd12PiZUHQWpmcXyCGg3kQYdCxxphUS7z5ArLfcVNJA6TT5je8HDbJSedrL2ZJZiqianAGLh3",
  "key1": "4ZAnd5VQVxYU6zRFWfhjtEyb8F9ueFheowxnTVSsLDB2w3gXYH9kBDtufRahhvRbQbvyZHvT5QSGroR5LGSqE5dX",
  "key2": "3q2TVdB1KEK5Jn3AW39TG3Za8T8ponuDis2sPpTMK4WpqCtDQ8a483dnobxjw5iJutSC7PqraXufML5iHy7pg5zh",
  "key3": "5mBiv1q6Qnw83L49QRddQbcx6P4PJzYX2LoawqF318jcNqxwG8VvYaxBVrZ1BaANX2G2bTgetnNiWJq58F3bn3uD",
  "key4": "3aEPRgjpikzP4c1Fp6H3xCvRMEyim5jzKBUxroyS7hFRXBwbAZXmBssLvAZCw9uFCXjM2AGbpMfscgPrjNQ6x4fA",
  "key5": "3C2nc1X5hgwKBG798yZ4aCy3wp7pg5pKmw8Gb4JZT4S7gyt1TBGaNFmX25B83pTL1RuS6Hk9RxoSeUGYjpbB6Hoq",
  "key6": "eJ84Pqcx42esLwKbhVBYGo5YKMonsAm4vGPMJEM2P3eNe327AjDVV9DnWqqNTTeh4x1FGMr9uPSSNBwcAdXEejK",
  "key7": "hv6GhtSwEBNWpTvNy1RWRJZrzFuxDHkz2uEsfcGa8TkbMkHscXxTn2QdSjNMgWLTzrNhZZSKXxfZKYejGw1XTAP",
  "key8": "3gxa5sFdvwSWX5w6MUxSdSyf6tLpSS7zruQa8EUt3rKqPZPJsHkm824ykFZUgdyD4RFwKc5jz9q6iwViXokiCn7T",
  "key9": "FbXdwaBwEajHBT1omAhfbKXUSYn7nBLfBN8XNUS99x7duCSW4eZoajocLcLHqFMVLbkrD38rMnWgbcu2hGA2Ge2",
  "key10": "cYMaUeuBATn3NoLRrpZMqycWq4FZEkNFRk3x6FnnpdeWLjAgZBmYBGuwcwEtwCREHfFkqTLTos7exLAC4W68GXQ",
  "key11": "2gvDDn4VMW8D83M38k2c3UX2sY7FKLNu71MqnkPByggh4vc4SpEYxuezvsJwyybWrqBQbrxrbu3N228T5WnCXiEp",
  "key12": "x7RPBbHQVzbhPHQnz5R6KXd7EihFbzSeyDcPvvzUMU1fc6PCCkWMeNGgJzXy4dtLVYHEgvEbKM5WLZpeB97uzcY",
  "key13": "ocWyNukZvv6zT2HwEKQorTyW9e8Q9a4PTz6m1TGDbLMRKoRY73HFM7F77H3yvioQKtrRxMDWVryRV8tixXLo4XQ",
  "key14": "5bBJK6FRxGipRXY5bCeynURguNcRZfdrehJMwzC9EQWUvNaUE16eeUt9h5wtUKEGvKTG3eXaP6j9JGi7mETeqWaU",
  "key15": "2mqPWgWGVhSWZPxyCeKY42EScx2g2BmbUWmtpiEafgoD9jLNyRp5EC4x7woDA4b2v3wfrdQSRTDGj353vRMXsksD",
  "key16": "2fa8gh8iGhrqCJd3jJZSeEfWVAfzbf7E4DR8WzQ9cM5y9yBLy7xq9qXr7UkBPtH99hf94aMAT2qKLZMpYnn5z85C",
  "key17": "SmPGtzgDPpxnKqeLZ2deyDTGXoAAR61MChwiQudrK6xHVyfdNMuABCy9yTGk5hGA23p8f1nrLkubUP6u7BFnyCH",
  "key18": "4gJ296W1YNBSWKupHsEyyuA2WJWRQtVdxnWo4XY9wsYDqTi5XbgW3snhsVSwv17nAxsBaFUpMZskp8hLALwQnPgL",
  "key19": "53V87zJKv767bcfH3fGcP5jd67S5mdmUsGDXWyQgf4ryHJmC8THpcnWerRPtvJuUxac3YCnTA6mnshv46kmLc3Q2",
  "key20": "4qT97gMV6Bh4puyRU8pEG1DZggSFNWscWqkhRWR4rH7KAVtj8ifzjBBNVN7j9M4Z9Vjb75KyKTQ2MxaMbqFAQJQQ",
  "key21": "VHChccGgKQHHwvMjCe6nca5VPPR8MgHVyjgSDRZaB1AJJwbcdbD8C17C8qhFQgAhEri95vayJEfurefELJicj4G",
  "key22": "5EW4TKwnzwpwLQLyuuFuCmd6d6uTbx8xaoppHdBCW7LB4NWNubXR9iD3djgDKzToMkcfCc4nfKRxmPgd7hmc5Agd",
  "key23": "4AN3c6WaBUuLwdkr3Z8Eex6U991aiMcmXPVtLf1uLF1yT9qsrRoCLgZftdzqnAC6vvSKtnRvF2CAaCWAunAzVgUz",
  "key24": "3a2SsEipJqiqJvE5BGYV3PG1vUxrVrpCdZyW3gFZnPUtitLo8iV9g5WhLFv97qBu7UqdxnziyKmwDG5AZC7kyXnZ",
  "key25": "49GDqhZkYp7tJgJSaphtHADuwdjTchGHP2JtRVaAweooBcVh9fHF1wyuKnNE3WYgnnavG93dmGFCs3BdPVkSA2GV",
  "key26": "2sFscxqWT77TXqcnLcmmvrAKXr9jzZHscdHoDuzebjzhJGKGa3BwwrfVhxdSbzQmsZ4D2ah2GqFuUdfgJqSgA6v7",
  "key27": "2cg2gxz2BHEZwM5AfM3VJzMU8C5TiMsG6MxWAphhJk3JPNB4Jgo5CYAptBzysyjm3M6qmLJQ2hQGCL3n4mNTy83e",
  "key28": "2tVLuE4UyRDjsqZWb4FnfpXv5neQ3pnnD3N3hXnKgCcMuNoUJ63JwAnv9TPU7bZCjoxqNJyq5iB8JZDEKJzudFhG",
  "key29": "26wHCRknUFc24kuRyxrQAhaYTUQ4nu4RYCEgQqq68RY5fTmCvUoJ2bPDHC6vJsDsDzFNBb2aEKMtyNTdt6KGEvx6",
  "key30": "4fJexwy5qP43pWD4sBnqVW3fRr4aLYEPT4SPj2HNerdqtTVQQBH4qCFyoqsbYHEGf8D8dC4xU7qqPxNwHiHwkNkh",
  "key31": "3KKrDgg6LkgTwHA9RJCZeqTd24KAGiXrF81mPgWgU7jsSDzzasZVeGYUbcEHqBRwNfkNBJAti3HeevneMc6GXamw",
  "key32": "3bTRcuQQTmE5cZYHCTZUpXXPqtyGbuh3QUbaZm6sasbv2vyNs6NGuKRqx39uSk1ALYNgWXaA6HucTMdDcFYsbfbr",
  "key33": "4oCRBeyZMj54QcyWvnkzogiX9cV3jevgjiY9KzKxSo7shwUp6EgJAeevBzF4xhc7MBhyS72n4k881NfyqS6pMtCM",
  "key34": "MujaB9DLR1MYKRhAWwL7s6usyvrutQ9qP8NRLSfxRbgM7bjA86bx6AEmaEDPupBy8QVmQCmHGa2LCRpEVpM3q6j",
  "key35": "2BExPhtLofxb7CdHVYRnczejhJAfxdHQngpWtZW2ADL6M9gRFrikkJkwKB3eTyxjEuPY5MspeGm9nJAsREGhfaRv",
  "key36": "ReGcPfgWWk3HVYigfnycmr2CDry39DsL7Kwz3RpBf7jhk5uQ5uAdsKZj7nUZ1pVkH8HkoLaEajrLyv63ygaUUhL",
  "key37": "524TQC5pNMP2C5qgJkweLA81qEopwXTYfD2gVvShmaUtxP54BcSCFv4Qdm9DqichUkPgo8YcmJ1kKkUDza3P4KvH",
  "key38": "2LQ9pyjS2mRknXw5Qg5EbgkWoaje8hxhFwPAeishD4x5XCvx1XJsM7UGCpq6dXGib6RKbcQcoaskNGsjFDmvqdY4",
  "key39": "k89K9928Yioug6sdLE5VnkvbFwKU2PG14egqtkWUNe2aEY67Qy2rdD64wYRJPW7aJHoWXodQkrwQberpikUWpN9",
  "key40": "3wkfMBXEcAyxqnkDYdAKhtNLzXCJaCx2i9R4YP6ihsvKqFrczYYFYfFvANVGHGqhsG65n2YEH3jo68Syrn8n6C2N",
  "key41": "3RpZXJP19SWzY3ZaVottQqBS37pcVuxpFH5Jue6XHkvnLY7W2npXfbFkut6FRxrsjDddEL5AHpYBFMVhw63iruNZ",
  "key42": "Pcs3wBLsgWcnpXnhq1PDRQYomcxYYxqZoMaWpezRwkPA2NBg8mdSzCWLnjuWyLSrAKwD91p4TRY4wzeZcV4kAtR",
  "key43": "oAjVxezQ2XpicTpFVTX3QH7bEHDG1X64YjDvzp43jkrjGLseH7RmmLvP6XjReicAmpgjAU6gEm2xrnt2mzHscBr",
  "key44": "3AC2WBtrXYEPPo86j6yCQXquXqZSAS4wP1mRqeSFQBJaVPZfqQ3jjj4ukMpGnvdF4VhowUiRiLLgeuEqGMbPYWZq",
  "key45": "3UWqURVfjCtdK5fRzJyUwG2tdoLVa64KSDM8yyPLTfFf4U91pLcRFHUMLeZVwsB48KUJohZzbnigcdZ2E8E3Aviu",
  "key46": "61sktwpb5bf13cExHTMTVKbT2UPSm9kNKgPNQRsngEhf18T6trK5aMgyKXtV9BSd8om1gySccxEDbqRpYCF7WSXo",
  "key47": "EWCfB1axxyX8JTeuT6x8Bd9TotwhFkHCXaaEKzdvoquGpGpzH42zHAWcfUs5eCWznHY6U57bEGf15eHTKQhh8z1",
  "key48": "W1yZhswsnt9aKT2k5Di1usQzKP19ETQtnLyiy587Cpvn2rD7nnqYEPKTdjgjt9n5Edc6SoWSAqeP9ao3PpLmGT6"
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
