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
    "d236Pqsk4USJ4uKi6ePusWkmZPjM24qGEzrzkYtEJtBTZerFPscatRRfk9C2Q437dVE3HCe3rgs6jnu9UdXN3Ly"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcwAbSYZuN2BiE5WaJFiqWiTgrCbyvcgfXLB6F7hi2QRbopzxtgV1UNksXMswVEvmfkC1p14JUATsKSkXWWSPAF",
  "key1": "35FQFeUMLdqY6nccqNSgenHsGhG1adGg2oDsMEi5wBHPuSnFdJfcDzXDEG7c9NoE5CpDFenW9qZrZ8SQEdx4CREm",
  "key2": "3g3XVXcCCYKN7qVqQKXy55Xm1sCsYLtZYmPrCjVY9VFvqhFszG8pex4DQMRNzeRUAx9xeETAMqJyCYG2u3M5APVp",
  "key3": "2e8BHivLaTtkRddKm495QN1zYQXcq4GrY25UFCbkeK2a3toQaQAYe2Bc9KzY755RuTRR5RwvCfd9RiiA1zm61Pta",
  "key4": "2WL7msr5bioVD8G2ztP5TKx58iRoP72cMuZ4bv1NAtiCm1QSvQNk5jeXRxHhCReNsf6bVPMWDkP56aKp25Q4RxqS",
  "key5": "41Vu6Af27w615HK2NLNTsHMnX3VGeZsLdcLfcevizwb3yjgAmKcVKzABfiGRS3bgDDDCpqFHTZ6vEigpsjSSzHkw",
  "key6": "5D4RRQuncYFfHm7KySj97cCF8QjYTkEAj3ALTKBs2AMBaXj9CNdmxQNN68azXf9eFvWx1otgeX66FdNWoSxyTC4T",
  "key7": "5b1QLyoTdA1odpMTyvxDS9psVQahUSgAqKY7FK8TbDZAMJcDypJ2txTBV43GBaombmUfUZEYjmnqFzo7y3f3c11f",
  "key8": "jkLgvsKEZCfZiR7zuCxFooCTCkuc7FnxTzRHY76YeEjs3Ktmzwa7MWZ9n3ncuKBxLTK2PJh5oBsHTUJZecAnCxy",
  "key9": "2oMxJ1jipaKX2QqG8q2PHpPTWiyoH7QsPusRo3xQ6M8n5zM62EubPwvMwwouNr3S4Qs2wX18CS1M8nnkgPP66Ej2",
  "key10": "33iAN4FrtGmeig7A2J2YvVCrtQtsLZDsFX749uh5beR7NaSiYkiJaGrT7z6TryhV5FgQHJmRVZXmbtjD8W76xrau",
  "key11": "4kM1QtoW6EUwNGYUqisrpBaTcgn9ydtbjCoZz2TRYCe6T7n1sfaL43ZvM7wbv8gQCvBD1MXnQq4335MB6m2md3dN",
  "key12": "3ubE1KVbCrMqFZQMp6UfRgHN1cgwB2m6k7oVSKXHLWfWpPQCCqvers5XdicdYNJpSSKRRiLmy1y4jZP7muMveCL8",
  "key13": "4FdetuAFirLiSfCe9SnCQ4fHy3bURCeTbGu762qNBm6n5xvytMnA6VgnjqLX6U6HYJ7GHL7RrHn2A4A6fxZ1Nn7C",
  "key14": "4EUdBCKYdQjPZevz3L4hCSojBFCBmH1jtZXSudr6ABWFDAGCuHR7D3VDTGsQmxNn8uaaMsZjLFnnxMBmZVp3nsHj",
  "key15": "LqRo4KhNhi8cx6rqa6KbyTikSiTFmXezjGr59M4PwLEwgNy9JN5hpmedghrEgcBPJ68dsS3agTfjxLTWeD8DyTr",
  "key16": "47TdBzPrqbzuUaFfHVbiA6t3W6HKi7pRymU18MM2jGqg5iTxQeyUSR1ANZnVqLDgNixbzDJdojzKQhUQGnhp2ft",
  "key17": "2CjFQED4qVKu4YVPoxjnaotvWu9bnbbgeJqVXyKZcUQHfFLFKCY1zbbbRSmJ7HFNyCbdzcWH2fZbtuBSoDDHGEvU",
  "key18": "5WGK3zn4Wc1YErBTEYb7nhLJawzLT3R78GDYQx6y7nsm5dn1egB5HNzK1DFtdZZn7VuJLGZuPHWUF2rHugCf3GCk",
  "key19": "64MF26bDQxSgtog2NFFaiZbTTGGF7PdVtyD1GEWcfWNZmW1Nbw4nsfwWL25hiWrRFMg1ehfgVTtdaooBjqasw1b2",
  "key20": "25cFeNP9FTW2sxFwUfiyEhTbiV3xMQkzHbe441TLeQD2jfLmirzbczEv65HjAB3LzGzgHj8wLgqnJFB68fdUZ2Aw",
  "key21": "9jZYa3sS8D1DQ4U7MUePuAxrcTXQJrEWoPtPkoAxHAnzBht6gcwUai5kTHGcS5p8h68FnkRF6RUd7sDDFmMhvWN",
  "key22": "2TbUoRc7t1k1fTR7CbbKpZVUAss4m1nEQafveDMJiM87HsiRwmVNjxAsrfQLTofphQGoEX6TX8GtYtLaeh5tV1dQ",
  "key23": "4go8Eoqu2tMWWFqA8G7gLEnA96pr5evPaXzYNV5CbndXR1Qc9cKrhdYTib4qZQiccrG3Tfm7Xw8nyd4E2zBaoj69",
  "key24": "4T2SMyRxQqbi17K3PZ6WUdK2UsmMBXJxCyG51YMiM4ctBt8eZ4zP6NG2sC7GVSsCsnCKwdkd5bhpTEUwuEi1tfTR",
  "key25": "3aYSQsXrgNLic1RfJxSoixWiHQFQdWjvdxHwP5ZGoGvXCutwFs2a5oqesZFyBe4KQCeUQ7QYnHBrhUG8mBx3nYJF",
  "key26": "5VN5T6HaG7qxMKTEbnQ2tfgvSehpyGbWWaQHg76cb32MN48WwvaRQFt5tgZvCj58zgzSdmZxMtn6j7cWLtMVefW4",
  "key27": "3HkmmRuXivZ4DCYkC6Whbbd44C7BCCRVkNdiyr9NEL2hQnjXLfhpcM6hFot6gwa8qxnETLWyguXozwosmhgiXq6y",
  "key28": "2rXovBwPN8vQEidqfz6VegLFh3zoMJtBHwnfPfKUmEmznrK64MUmoYkBzrS65ZCtK1XFwYgDozWMioCmbomHboAp",
  "key29": "V1DDBkcfewRNLdZoMrEWA7avSQYGaumLfp7xhKYETyacfsujgEdemUjxnaZorYU4DQFkc7B9hwEafEkHtzRW7b2",
  "key30": "3C9odi78d6HEQv7eDLo4ftubmYN2VEa2f69WMAxPcShP3aESfgZSvXJ9D1Bz4PygmtkgwkGo78xnwR4rshqNrLxK"
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
