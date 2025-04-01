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
    "5FT1SpnmjjcrEE8uKSPeHtmDtBE41jvjzfzvJu146KLYbWo8cDQ2mucH3hAqZBfNrAXkzeeRvnonoBDF42zdAyQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qD8PPkBsw2aceVSNCYauxyNd6t2j7nUdhDeJJcVU5eHMfqfJk1ohkv6puj8xe1L99dMSG9WrBjR5j1EZrxxCG6B",
  "key1": "3xLwg5DpUpJhzQKaXddp11Co9XXnS35XuarX77KYFqLyrTLADdXHibAytiYmJNKgZEmTt5UzapTt8z231PsPWHxK",
  "key2": "XhrjuRJeKjoqL1bBo1DKvBcHA6ePr18JPDrvMwJoRmdiQBR585NtX4HHpG8bRxDZFVEQJUXK2qj3Yujv8F6agTt",
  "key3": "44Pje5Md8i9YGorbpTZTgSNdvxtS4k4KnmAZKNbSnFBaQKaXHjgHd7b2sANpBR4x25fJyuyi7ghozR9PH1Bn8YKx",
  "key4": "4jzyaVrtVzxJUreKQA8WZmUV4r5yr91F3Q6cM8guPfXVxrztTbegVjNNmtb788ei1VFFESVyRZAQvK7hXf4ZCsAF",
  "key5": "5EE75YFe8hkQAQtSZhX8UaDEPgf3eNz1JVWTERPhg4buMcapvMYRm6cdb3ZndJdShAF2RtuBgT9ec3MZ4D59w8ka",
  "key6": "2uCjFfpUPMfEu6ovjozzgcnrbi18MJGkKjh3TkJA95oo8QbXcMDJb6MnPeAzccxnjUQgw6G2qc3triJK3hnAgs2G",
  "key7": "TiETZHtpfXPu5A4f6K8SMwBnNwH65qWEqXvsuhrRYyHbegtmXXGmn91rhUm4RZ575Pkvo7fmQpZcNYAvJvV5pJG",
  "key8": "2RGP6dcaehtezfu3681r9Sn27judgYDEs6Rk2mXbHknL8w5ZZUiwDRHaG3Tta5mfUgoL4P1eWGoMNdGfk4BnCrpL",
  "key9": "3iH8RU2T1hUSvooEDgnPE9x6cEjEkNfMkp4c2gNBtAo7PLv5qoafu5NciSVQyjeGuECa58DUXAma4JcXdxo4Vcnz",
  "key10": "H4unQYnqWkVUTy6hHeN6SSmbQyK82ah7YwjsanK83MBkzWUosVGWtx4VnwPSaS7xBWn4WWFPoKe76Q7N9sFmgFF",
  "key11": "2NaDBnoYY68pW4cAtBgMBuCWKQsJna46K9CtA5fJyVFFopdYQCFTeGr6LocqNR7fBsVikoTrDd14HxSeAVsBaRb3",
  "key12": "zixuTWjrsyVwKRANrWqYzAygUdN5qv5LpBA9EQ1CV2NpFTF9rX5tyBPL5qCEnLgKuD3VCXsQC51749f5q1EnM84",
  "key13": "4PN3J7Vi2qjhqAW1Jb1C4oi83UNeaz2k2BetKmtFg3bUGvAUfwqHc9oAzp81Dbs7G6TA8Jy11U8gKY6S3BtfFUmw",
  "key14": "3yxnP9MwxWWK4iZ7dWwXPHkFj82XpnebniHaKExdAqh1YbRfVVDuQTZkhVN3Mvnd642DpaXMNyr1zrpaPG8Tg7bw",
  "key15": "sCy9JxK8LYMEEhTo7HekDB8MnZREEjFcuC6ipk8XWzqt4sE4V2xsK8fiybUh9XcoUnG1DsE2G1EbVgb6bvPbHNw",
  "key16": "3RsW2WFX2SjpnXmCotLN62UbquNwfGBZDUrcAvVARxXiVdctK3Eqp8HXc88SeG1FEAKohGABXJKPedBf6EE78jtf",
  "key17": "2xQKwyJqzzPf9eB8qENt62NVitHFHpvE8PditE1Tki9eDuP511g6FyuiFNbwWMg6c7nUWW2ymt67gUpBCgyYbvTz",
  "key18": "2frgNZpBQMqAEzEAM1uSNP75Kupd6A4igWyAkWFKfKswaSjYWNho8tB5EKXsEA9DoQ8mn7mN87Vf4x3SbGPKrBjB",
  "key19": "SaLW818dJGdRRsigH8J4LkwfLvF4dVwYhWquawkhh6DpCFSvoPNYf1su2XtnEkijSvfUt9kp1mPSYxaH7CopsHw",
  "key20": "3N12654hJxuTBxhQsiJrWymsDtizgDw441S61QZTZ4Nndt3J6m76aXpyymZ1yhte49Yb34tMkSU7fxYmiuQkZ6AP",
  "key21": "5ngSBhXB7b7mB6tudU89tGc9JkPXT3MqVnLh84388guvpjhmv89uBaNUcHgadvKLb8ENkFhiw1exRdwas9Eadt5H",
  "key22": "2p2ZCTCvfSVzUjaCNcyK4CDKHmbgY99831ZoUgvqjfCX16ZJq2SpYyuQ9DwZb7p7qttTUKHvxfHnKbqS7TbWJiWJ",
  "key23": "2FBXnKhDAZNG3fUoLmsbEh4LhUcF5QYYph5sr1fcQf18UZaEbC6syyGVZAMWjdqru5rNvCXWJYREuciaoMYft2KT",
  "key24": "2y1mrqwwAdATjKfLt52pqTe47nt2HqK2HqZboenv3g81qawjDXBZfbA6Lht7dhLEL5NeshApegJZB5Ju9wrzA33k",
  "key25": "2wna9fBs9nKgKoTA9RkkMgot6ck1rHSLH15WuYgAZdD2qNT1afFccTzxAdyHyMnDYVMA2UndXqQcXPR7yR7Ah1Vd",
  "key26": "3NbQk4e5x6LECDx4FvfSsGLUVt2iHAxvwa6GUWR9CBDvMaGT5MzPnuZjPxK7BrWLkzdz6AxKnNKMR6X9CDPHgk76",
  "key27": "4R9P6C12jYxFWRkZj2Vi8Zq51cwGhHzktfSZnHNJ9V3kvXB3WkdqJDRLQSoE7jhHiGMMDjUwmk5iFv63cczCAsa9",
  "key28": "5sbGBz5WRQvmQBbp2z192CvMJgXQqt6R66U3K7VioBNCxjfKpquZubiGWYSgoL4NRyPaWXEKfZPL2BkHqK2r4EJX",
  "key29": "4wqTageHmmdMBfzjFJaZirzkYruJtVoWXxWZ59mJ8pLrJNFmuQ4rR7nVAfcQK12kvUFSp6iBqviTauTBUvb1y2QY",
  "key30": "4gM6M4NbEpwYKzwe61QfbE3kaKUusuPb4yrjaJVbvpQr6dV2j91xB9b8VjmWgiRhnB2ZTh3jYXkyXWp4uk99N1hz",
  "key31": "3AM1sxNznyHbZiFTMNQGdzjKhki8jAM7BfrnLDHxugCPVLuG3VVhovxocQyKMmTPkBPizAoPxiimkf6YiS6jEsv2",
  "key32": "2RXCqUv9crzVycFMW37wbnPFFjeZy3cgM35ZW8PrAjQZ27KRiWxfb2JmapUjZcSPhXkguygHvG2pZeiqBjs7FSn3",
  "key33": "NJsYB8u9egFCQ6CBJNbvGbUK2hrJgfQ4qQ49MYNTtdrvZLc5y7QzVSbj8VFBUHD9DDQRp7RiuxcYBHRhUXNdHFZ",
  "key34": "RS58dpeB7efK4vYouZWBbMF2ooi11G4irzLdtxZpNSGLgre4Ak5Z15opXEKShuStJQaAonoZAryPBdWBAzBvYg2",
  "key35": "WT3VzzkDWKcAJnCMomzTWwQqvDHQdTti1W4VaNzXoQ2xVE91mYy89pv5TgMx1Si9E6Gh15tuWrTKMQVdjh4UbmE",
  "key36": "3tN2RGFqwZmkJpo1C5HC5bXK7EmUMZM6V4GhtsnFevatt5ZRRLXU1XhfsBa5KPBpATHvssuwgqzfxzE8Va5SnkHF"
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
