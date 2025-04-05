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
    "3mT2b2seATwwnfHTD79nuhexsXGzR4jJ2BHk3WuMMkg8HKHQhrMs38N9p3GSFtTgUtBEXkgz9peRDUbdQDqwvrZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbFDnSW7RsLAnfDJQZptJZizyyKyURDu8QfXh7EAkAKMir6otbyBXHJvuitq3YAQGEKu3EdddunNedEFj7qY9py",
  "key1": "54D2y9CCRMibdNQ3jr319zABbx8mzw3Kdj9mnTnMuGS4wdFuuU3zT11zpgxvLqASQ5uijGTAhS1nDzukCqYZKfRH",
  "key2": "2G3xp1y41QqsJ5ATKVABBP15ViUdHvQfXrK7Ef1MARKxT3QTTpMZBXgcLpEHdV5LgsT8jZrVzkQsZJ8GtDwre1XN",
  "key3": "2TVBw6WB2C7xHdo8oRYP3okzsfjRG3BDDGuvKiAXMvv2BvSeZ7jS6S3R3xvkpceo7r4qXq9qsH7i9A2upp1qngrR",
  "key4": "CWMdr4bot3sB6R4RgTY46Q9iY1twWTnEjJeoYN76rgX5hdxddMEesSKMBrQ55tydfBZbfEgmM3Tn2ih4TMJRH8Q",
  "key5": "4kmH1V2W7MAEKsu1DFcSCaRj8nRRN5i3yhF1PWpvqkPF4bjEfvS4SGec7oniS2cLRL9gFr5ED8QCxyn2S4b7dyzJ",
  "key6": "3LBL2XoCUdXerEwKwpHhtbHW65gUNFgoPhRpCaSTN5sxDYuJQTRXFMc2E76oGLt2HWDGEhhVKePwa5q6R8qTaBdp",
  "key7": "2Z6sngf5uKuWGkqkbHprckb7gsQNhJs85FQ2riP2ZTUHgR6SYUoGYSmubAWfEV2H7mdC2NT1TW1bnAWR9n6ktpuC",
  "key8": "34dWAnJxCKCGuiGLLicJZ9vGwYTgUsDHMt7ZQGQmxNvVQTJJpT4amAfDcvSe8XfaS7EJUtGZ3A8bvTVUkzPS8qDu",
  "key9": "53RMFd6xExzDXfiB5k7V4PLAcCmhPUGEkdvHUCmcYjoes2cn8EPJioWEhFuhVHgotAG8emoojxTfCH7CLoBTabz7",
  "key10": "5uTQkwGAizGfwR5Hqvc53AdLfmrpGLQB9N7aCTS98HVCxkoapQYV4MYe8iGyqXyabece3Dij9XnEXeCNXdRTK5Tb",
  "key11": "46i387V5hpor4VKTWxmTsuKWSh1rvrhy7LSk2Hx1oiyPwJuqBh2bwRH1NWT2vQLJTaSX4dV7L4TUVm7EwogVwa4L",
  "key12": "2Dz9aLKnE6exYP42FdTDsf423XF5aQRV62G581QK4aU7hmjbajDfCtZbVdHeeRtKVaj4J3KvWUyLxnHAkQaBR6sP",
  "key13": "3fq5NaLYfBJmQosHRFqxvEPrBHFXfGQitHhQ9BLL3qqMr7xgupw8CPavEAFrwsHxvhDiqNzdtsUQjcSiqpUs6f65",
  "key14": "5Ttz86ag7tjPwgFkpwKrpT4hrAU7k93E58RM19DK25VTpUKpkC51Breb3j92Fhd1eWgtCx59m18t311VbWm3rP4M",
  "key15": "263A9jsqqethmpNk6g3Hkwrnqk45BYXQDSi8LY7joMSLoLSZNoHbY8Ug5ryVbD1UZEyfmjVEKeP3qbmNa5kCu5D6",
  "key16": "Xp5LphL1qm78LZgK3eupj9om1JzxQwCcJcL5XTCxYPqLDrXuGx2ViQ7cfstXY7tyqfu2Y3eJYv4fuaWHoSQD1WZ",
  "key17": "23ywkGtRNFXsJMm4a3yxWnjBHqNNFAqU19Dkvd4QStpvfW5WDJwrBuwtqQSxqo8XPirYyQ3QdFqapDiGRpa2B6Zi",
  "key18": "2ppikVTfAtwMPD39jkKxHYaVeuU74w3xA5nDNVD7mCmcNPd7bpwcD2KuozUX5mLP6NWUFKFPY5ST1A2ZyXLcQDqL",
  "key19": "66YTXSvya5CwewVa9RtAsfhigzPxawgRogWX9vA8Nff6ZiTUJ6acSWYEdwP4YaLtJPZzhx4da2wQbSeBwMT6dBzz",
  "key20": "4njkq1r883NbJKgSh78WBdZEVYHoLtgqXNK4saLmFREWH877pJp3fsr7TMKE4vTHRJeuw8A2hcaTaC12YZ83brz3",
  "key21": "3fWZuLgdf8KTQ4XNjjMzMksGW97qJMsDj69VXebg7brDMXQYRKJzSydy5qBhGr11zvx63Jk1DDKw59XgtgKZeBu1",
  "key22": "4rd7W4QdHsDhn556Zawjf6joqP9wP7PQcpTEG9J1tw8FoK1Ni86CJT2yV17ejDWBEAqw7w3b2TmcWxpKA6r9JLPH",
  "key23": "5oDJQyoaVaXRJPdQpxvbsFFRyzrbURtNivEzAA3e6c17c1ENyfKL6PqnxzXaQG2GN81WedZHcA6q2b7kUEcE6A6g",
  "key24": "VTgqFgfn44fUcpM2Aw9jw31ipSumhoytXwvJnuBRcvkjaFCUtEoEuC41i1fkZNFpqaJ6aMcnUMDw4eA6RqEPTKH",
  "key25": "2Cm1dXbS5uHkTSGiYghhNWVKaRAx35j1JzPPrD8uv5QdHr7w47oXLU8s4gZ1cNho7oMkAJNDuM8EzF8dc4nSeodA",
  "key26": "5Jq1ZWxo1RSXfPZM9iiXtZxBe1dXQ5nYuwmbgQCYXUxsXErjG9xyQG54DzYZZzBScqsJpo9cPK595VoQY1sjvW2a",
  "key27": "4fS9Mc2VK7g1SQYB4ufpWHtd618mTETojxd3JuesiiN8j6sTRw5QX1gYbZFwFZ8FTXEQwaHBwsFpYhfDeXrytEcU",
  "key28": "MBN73xAbeAyA8uz4PGjXueiBerpr3wou7iqxaVLXieGh6stzAFBZD8ju4bTCqq4NmJw7nqo4kusYvrY2M1Fy87z",
  "key29": "3yhsM1wwEJwHKbz2By6HbpGQQDDomqNXPdYTfUNDY3Ds59ce8JAsTrBAMtU7M78t63edNHiaBhgipKidUEC1GsEj",
  "key30": "5HQCTo7wVnw5EXnKpjc19WeJXMtGp58UzznizaowZMDjqoWdH1DwvxigjD2cSzTnfnP466kdcZy57RCD6J7W6oCc",
  "key31": "5vLRAVU79o46gz97jqCpr6MMkSkGnUkJuDLTeGNuqvHdwG8PT5EVcR2ZpkbtMTy2bk5B1n8iznYEBnq3Kbz86ehQ",
  "key32": "HXUc5gm1DQtTyD61N8nePj5YWdymBzK8Edw9E9XfHbWzwT3NnKDjSagRN7HfijrXvCFV3ebobAJ5BNDZgBXZxrs",
  "key33": "32g4BgVT4sTpBHpT57XEaTc2fw2dciXsn8ZM7usgE1JLHFY479T38vKTY5Roe9swCx7ZPu1vhoX4cHHyFXHZQ5dV",
  "key34": "2x7bQskkttS2qH3ihybJzEK9u4Tjq91TsnNJuqPLe2hf1iMnX9pj9Cj7j84umMpGVVjj9RrS3cikpWCK5TiNU4w",
  "key35": "262bv2PUHYX1e2wxBUaCizh8VyB4kBXxg8sPdBEfzZNzz6PDjaLKhinri44zp1MQVXRVedWFhrBbnxReZMzGiVuJ",
  "key36": "3RTFkMeC56112rsYmifAAuCCfFBxgkBgj87KNp1LXDWYvVwReXCe2wxngzfpNgFY22ELVKtay71b77qvVgmM15C6",
  "key37": "5Z9JdAxqmqJToiLHASja9MuYg9S2nRWkxsJzjvaB3rHoKshiEGFHKUC76KURHrkqbdhXGUkBexrXhRCfmHamFr6o",
  "key38": "QhFNeW3RNz8tzKsg2LpBh2H9J1ovtHi7288iKMctaoBS6GLP9Jv1kWVd5ZWRULTrHVTC96eF8hfPT25VSrJsvFL",
  "key39": "4WK3Y4Mn3eEF3PFrp9KW9VVrn7gj2pUKqpWidsAzJTBqS33pyo4S1jq7FtXyEEVxPt8W1eumsikgYHz9RkKfYWT8",
  "key40": "53cBqM3TXd5FZSpvbTcQSVyd7zzRyv9rfJtD87RnGmCuiDHLrmDF8vduDKLXM4AEkMWoH3DZshrsozcQaz3uCQVa",
  "key41": "43LM68fD9EMWAQ3khMR8ewjxFNgYgMomS4VSEKr2eoPzDYeXYKo9uxrMKh1NSqC3yiCHCejZuf4mffZLLzubXQjj",
  "key42": "EpmmuNAhdHL8vodES8fRhsVtdavFe7Y2s9Bw86z2KqwyL7fmCMHmAjDPzAaxTgkE9im1nzzcHHvuYye14ekXd4b"
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
