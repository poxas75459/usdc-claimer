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
    "2fs7zbBXqLTyevyfXXX3VjnbRKVHFFKmWyiFY1i2bXzKvGkvY8jJkDaVVSTug5c6LcLZFquapyhSqQCChsh42YLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JfhHUmKf8tVQ6LibaNVAWC2EUG2TPZ8wWs7oCnsT3tA9SHmYNATmBfuhXafTYHAzVeZAq1T8Gbq8y3syXExneQJ",
  "key1": "5ZDKd4dJdF9h88mB7dZYXNggk2SD3BhLPyFeNAZE5TrhJrX8F7qNieqFFRG6JiPAAnjUXEUsLj9q1SiJeFfCpBri",
  "key2": "5F2Txnqyiyrn9xTxJb8a4XHQBZK8see5B5tkk9yVCbz71FKkBvrKH5tfrChBWeWR1bDqvPgCGxVXeLrXNs1EBCZn",
  "key3": "5at8NPTpiPd2smUcDWex1n5uTdSsWLFWpF53Y2N4DdTTSijGGWsCFg6cNWbeBBLJNfEVA8D8oW3ybH922m3avNRe",
  "key4": "3gboVoxyGyQq1Qx4AHLX5hW1539XZxnoZLxYSbB3z4XZrnZaUqBL9g6pkszEFGq7XBiniczw5CSkZPuiHmwmXSPk",
  "key5": "sSi3mjqP2EKmwJsfH7DxUakoXRAidvfef57yPJ1dAWk5hgpn7uG24KaWGkAF5Vp3JFe2XkeymYpCMcakE1SipMn",
  "key6": "2SQvAhiiwCveLVNsxfpiJzZD6GYTtXNSn2Yrpr96oYhpS2dB1fBkvHwkYfsQ79BftoB1khhZLouC5Edg5EK5QyaK",
  "key7": "5dbhwVvrCD9PtHE3ihY7EJjJzVNJZiYw13bjkA2u4D5Si8uhFbjRMhWuEGdJuGnW1P8MtASkrobZircEgsGNuFWZ",
  "key8": "3UUm4DmfpPEiDnJqFTofRUN8i5GrTw3Riw1MX6yY8DNrUDpdxywK2ia1SzNfXMuBd5Jg5me3WabaR3uFi36fwqMg",
  "key9": "5xaQJV488NaCUJX6ZzQgniCkMCHMKZG8yWCbnyfoqQVNXM5VTgAm4MsL48q9SUwUhCBKQWBQUrPbd2mENzX3bihE",
  "key10": "44oREMr4SQQwgjH3SsrF4MkPmAtUoVc3pbC1jXyfUnQMYy7Uifcc5BTLZfo3yvKeJugo4jvAGHvKFKurqvY71e6Y",
  "key11": "oRLWRNWF9VbX1hhfydimzRai6F2WRGF93QhQPg1JYEcuEbT8ywFYxvBZKquepTqtuk2Nbpfv8HyzCUgbfYkqjps",
  "key12": "4FDQNWBGTX9eHAfBQvPZVJT1uK8iJxT2ruH2SJWdUmKsJ3Jf4aUovEihj6q2vrnTVrPWuM2TSBSXWfDDHaCafNex",
  "key13": "5bdPeqcSUtpdn8UfKUYbKkzDWcpV41zAeHtwSKzsHmC1kLXoDTAGcapJDBY38jjeGEgf2Q8sQ1WAqfRg5gka5e5D",
  "key14": "3QX5q14ctT28sTyCURZqtRfL2cJ5bS7a9pTdGwpFyKTfpzPXRCFvJXc9uM59suBXS8yHSN1FEzEaQiDKmZiP4Fte",
  "key15": "3L4Ljgn6xi8GRnX62XM7tuuRR9HcceKDCAvLayYBu3GiFknRCNXkpcjyxKxyqaPva4wfFTb3TJbZHeCecX3H2yPF",
  "key16": "2uXVXJ3JYHvbpafWmxNXeSYuZbozU9uVTsJTTGR2dPYGV7rja9B47JvXJKoXS97YUT8nXJgHFPM4rza5ikpJuUGH",
  "key17": "3VJZXbyU1YA54qLjZTDKSycTP9kWpVMyCqT4Z8qZtQwHY8a9iJDoMxguDdMAeRd7U64BVJnF3V4DxW5LPMrTPmea",
  "key18": "5V1v3WQYM4pQbVtvXpSs3sWupBpwJLcncFnmZxsXuTLxhefXhoKM4Xm49YWFsiJ7yBhwEnQrUu3G5Y8K2kWMfmsv",
  "key19": "4Exekram8BSVooYBP19cQE2JaPVdvDBM1VERumgQUNTys5EyYFZGR3rAMm4EDXrucKgUe1unjRJwkkLchZX6bP25",
  "key20": "NnmkAPtaWTWxhkGjQY944j68wa3JCiyKgpnTDSvTxco2GwXecH6UyuvRu7e662Apq5aGthqoGQeQuuBq5JGHmpD",
  "key21": "3G6m3PNTt7Au2d2QkBeERow8g5Engg7wgVS2TxNeQwg8Q5kPvmTHnMaaN6w422rBhjNJVuokmy7ZFDbD7bkEgoxu",
  "key22": "5ieJghfXjqaAkicQMiBCrNHoEco3gbugXGgAhKdRS4weqn8Kj9dyJpYVSNBtxfWEvEp8D3gtEPdRLkX5AuKFvuH3",
  "key23": "44KnYU8ameYTmXsKrCGFB27TA5BDvWjYq65avR49BBBQY1dD2UtmtRbpikq9RjrqWLcbPmAFo6eYzhb8ZvSJ7vKr",
  "key24": "5eVvFfC8ogeTNo85wf9zgDj1WXASDVwkc55z3kx9dYGXSQmG183tV3byoJoN6gM5wZkEZp83EguvwR6uHkhMcJby",
  "key25": "61JrvBUqv8CsKHmupchSeWbjaa9QmQk8YJST1CNLuRKEh7VB8yPxsg1SrHahRj9tRxRYLrreoWjQJ4d2b51Mbb4R",
  "key26": "364XHrMCrfCWVwKrPPZTyWUXD6VMbVpFJTrcLej8dRa4RfYAnqwjrheXfKzjUE4XvvRLr27mb1nKquKZQ5ZfVZPw",
  "key27": "FKiBG2GvTfcH2gst6S9c3KFJybtJ9np5C2HrnEdLDAv4A6D2imcmt5MHLmgUstU27Yg8LEzgaYBB4YomZfzwvYa",
  "key28": "4AEYjHPetgPSuHcWyoK1t8ANcd7JMSeDnA9TURzhh5wjfaF4AoLiDM2t6EADn63dyFzy7CrbrdgNwaMZCAFHj792",
  "key29": "2WA5Nkavr1xrw9HekvkadjvaSxBjJpegHF29VAZUDTjKc6k28mdSX4FqcR8yGS1M13ui8WrkziSrhPbMkM2hBec8",
  "key30": "5BMh6hPuE3CmYTBGT5XzTw2yjVRZq4zBxxFhwk3FFLESCdLW7hXVV5zdNy2L3pcTDAyZtfGbcz26w2spzdtbdreL",
  "key31": "3LhxP2VYAHowYAoKPgY7kggowMU72oJ2PXnhcQBD9U2WrWL2LD8uXT4vHdec2cR9KMZawqzYYfN8Xsa6XFuKzPBP",
  "key32": "2nWLvduDykgQegLHd2NjwpQEnAN7Z8oGtLSPfcAENdyi3AG8c2sRbozszZtHUcbW1HFiqDURjSog7gUcTjfXoM2B",
  "key33": "5Y6yQBzLyzgdrwiqZdkwGsdkHe2xQk7BzQcTMRFjyLY8gTnj2zxeTbop1vWDHiZDc7K6Vtj398vdA2zUJrpvnttx",
  "key34": "3dko6wnaHGARvv1tbqvQ82i1N4dCdt9hbQSomhyX4v5SpBJV385UMziCs6cf89TmwRpPUGGsSE9dJQN1GDGGFJCY",
  "key35": "2ZBFkR2wA32JyM9RTZrQ2YyZeWA9fpWSebaeag2BUm4XRFxioFBv7kNyvpNTNd6YphpPwG81JCZKduszfakKn7TV",
  "key36": "4vsFEWwxGaAYk4wC9EBtrURo5zqPvnj2MxqnHAzK2Gh7L3gXVzrE8V1NsQ5GoEDuBswuBHLBtHx2BayX4saFStV5",
  "key37": "4A3corijeWUeMP78u1G9xEB8MBSrUsYHWxsMMgNQhFjgXKGqpKj1R1SNehnbFM8Mo45uBGkGFB7s3KU2XFDfkZcY",
  "key38": "2aByQQcBkDzyUyv9pjXwGg1jRrzEiBNpFLBKkXMAXmTW8uD19XNc3nGM5U6FH78NS9NmCVehZeKoX68riNeMpSd",
  "key39": "4R97D3rKYYWfFidj5E8TAJFsDWVZeTZqJDkQympBn3wuss1WpcKnWJbN4DuJ5o1fqLQomEmB6mwBNrRJPnYhrG7P",
  "key40": "5N1Nr5gDJh88p2NxkMEgHNdVmAiUd5nxYUsZqCMrFHLg6DHYwdjM5V59gUVSKWhaQHjxt5uTz2ptgMkfTv4t1HbL",
  "key41": "5Gude1rXtmARgaPH8KqFSQMvuMrgW1ZUkt5cFmVKv9S9esQH9k37Bp5DnB9Em8wHN6zGXLVkcCMqe9rhtJoHfBsz",
  "key42": "2kCMQriiRzEZUEQfHhW6JbSgmMzpeSjrSgKSiAPspWV8ZwntTbLwfwsva9CyAU27nYuGsxb8SydEXh2iyADLA1zS"
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
