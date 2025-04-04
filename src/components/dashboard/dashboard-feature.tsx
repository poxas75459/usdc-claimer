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
    "ZKHy4kUDzkCbdaLAAy2zYhDdyqZ9QgcFGQ43bFp9n2w1egCFAbmnrJSddpPuhqEUpJruzmhgubj4NrBgK2b9u62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXCeYcLr6LFg4AHGxLHAjN34f25hyo1GbyHisxP4ifDBu4W8JcS9niEsQipf4uweaNSjUhGUF8Hr79CUaKCR18W",
  "key1": "34jS8avKdpBbnQDnTNMDpkmCkubQCDufyZZFymWYWF7KbmjAJqewJbSh1Boy2vruegjpyqFDVyEybUMMWE8Nnq2i",
  "key2": "2db7iBh5bpeddYJfK1TfQeRowS4pQ9jx49e5NLy4oBTdCyCZ954qbhWCxT49uWRFVgbTEZDSCZAfrxWiqFNzspyu",
  "key3": "2EEH1mccvsc3qmXE7wtaxvhNH1t4J7qhs1QQ8fMKUGADbN3ESu4CKFKfxgds6exjdiuNiALwswUQBH1SUkqU45vH",
  "key4": "4bafUpNYs5LqErF9MVMNU2aai5XyKCELs3QR66XfD83vrH7BPB6LUcTPSTUttzkmgs1u8Yd4jkXyxfnMKp5NyLas",
  "key5": "boRtzjsPhMih2snQoyYERA4ZUtU9xT5r9iaWuQCr9Vcnxf9MYmH1KYkCFke1uicHdcSSJH17XdLRbRxaw2HLykt",
  "key6": "2FgphDtoeseZmMiVz9kcoHqrXnNYhJaxGdKEdvT2kVu1GQaCi7PybxEb34D9SnDdLgWbAWV2RrX3ybqG4oWuYKbW",
  "key7": "2XCkVYECa5MjtbPowXYhknbLXFxMp8gGDHSc2kQ83CLnaB4jyGVJY3aT5qGDwCyc9EzFwKk6DwWLDVSq81pvpSKJ",
  "key8": "5wfH3vVxwz16LfeDkNmJipzJsYd5n6DNiDiDKWKkcXqvQzdccVVcVZeQMsuDqqCDnq1Tx75vACCQkyooyXML9UCF",
  "key9": "4uPgbVyPkAHRyQ8KhEqyf1nUWAnPJRopLJEvnpWr4PqbdGjZtR5RuG1vjTWp6qn9vALa8ndxYrLRWSdU8cV3D66t",
  "key10": "5eTw6vbvoKvoSYATLjTZt4ACC46yNik2jtAoMzcqdVFJ8sFt3wouyfi5zh9t8WFhRKBDnMZ8chsC71NLbQox92oJ",
  "key11": "31z54dFQHZs3nYk99Ujb8SaaKSJpSqC4wHkiCoxsxVJrrTJTbFAnm84DggPVspEm7JdcTePmrrFUgjJFFG6y3J16",
  "key12": "3BKt4cdEfgU5wsFyRDNWqtdjFLUaYq2AEDeWxSFyXBvrBjjhZGFXcAAJf8AfSJMq57V9Q5LcLJs9cyVpu6mvL4d5",
  "key13": "32tiz3RYpyHAWWAJQdyb62QJDzgFnQexr6uvvz2D2WQ1LDohkJdYR2DLFAe9mTSATj1yvSfU3zNhvpU62DU8EyU5",
  "key14": "3rR1gHBjGQYQooxUvfSNZTYw4zaqbf9HzvtXy8Dx442ivkt1wGkxSm8eiB3cYWxFMmwWqX1oXkLeFfkKbvv3NPPU",
  "key15": "3KYHQLcDVjrAGFFLynE79caUTnVts3AkXYYuGKxGx5rDkTjRMEoF1KAYMi3fMjRc99LSay2vrC3ndDivgke8NxWg",
  "key16": "5hGMW7xeDt925muVYCfrZLNDCLpLC1Ji8cDvxNgdrqrMnBqhWZp1MQzFRmLYuZupkMb3MURChj4Vu5p6qFNrR9qt",
  "key17": "4imZd92s9MPNo3bFtwpsd8XuQZiG9b7PszMqK78h47x87qVbXTc5oAjF9UTPiVP21ZxLsSxTBasUzFPRpKB3ZJPM",
  "key18": "3w5tbgihrnTpgHzbn87m8na6S2YFektRsc3vS5SEnLQP91t4haiTbMhpHVgp6ToUFD2JGFzUuyiQaucsPC2uq5hS",
  "key19": "3KgPsmpjsvbqV4T8MnwKUj6p9ARwv6qoevLNqSpjpxiJWprwg9j1epecE11ti1cwqaWPhZFxGZFmRLc5fyg3xYHJ",
  "key20": "5DfQDiPZQFH1WcvLtnRj7feFJ5D19qn3JzpF7bRiqPExfxuuSBxYJzPqEN8xVaQDXYwhcQmrnNYpKhrUHvp5xuqP",
  "key21": "3Yix3g2Bdnk57go5TB3GcaF5sB5BNwd9GdTtLsa2heHQGSsHsVz9dsVa7aYv9TsMcp7ymY8uDMW3dFbBArmPvVjv",
  "key22": "2nArgph9RVAFXktSK7FyyBNJ79mNQztcPM7JR5nTf2UStrLoxmSEtV9FbSb15Gc6CGkFuTo41cqdDHNiYYnZ9YuB",
  "key23": "5u8ipJbvMU3FewWqg5BCme36JuV7FLywWJ3NhUSbCXWbjfxr3UdXKZzAiWnGrhnSwBAP1rKjEswqxFhFqnsmWGD6",
  "key24": "38ifjGa8yYkvkBVtHx63E5aL1LPdQpZsePyYD2zCU5tMxjbuYfTW3wZwAtbqchSy9RG5qjaN9uK2LrfT9JNGHhwn",
  "key25": "2HxnpPEJxD5A6zQPsvxjKqrMMhp5t22EPdp3jkvteAow3bXNyJPc26bg8PGEmKqxRuGVGhWcRaFdifPowwhWe8iF",
  "key26": "3WXt7fRYuPnWJnHDAkdN9zbF3LPb7NSSseHRPr4BJ6NTDRZUuCwtFBaFmaSaacAKb354qJWckUtHcupCTQf87jU",
  "key27": "62grAupeLSWGQkFHKEDWkXyxeySKwWtp3wxMN3hDfH1UmdQTkRg7f5AyDps4DAzW7jctw7qbLSJ7DyThdgUCf12t",
  "key28": "5jHxMP24HVZDpxgt6adqTYTKi8BLPN4N4542GphpmiAVUKtDN4GP64TPBvE8y7rYWRDgSMhfwBtpHxGQuBe1AoMW",
  "key29": "2QAGF5EKFbtNH6U9jDXR3h4MWMxSQwGEQ65VxH1gR9FWikudprHZz6aXNwmPmJkQLmtFQxV5rkuHBNEMhsJkg44G",
  "key30": "4WHVMeZH6x2TVYj9Gv6JJ7ypEQyKd2RdAmQZqUYm4ohuKgTbijkYatknwMHeyD7uWQVygvGHoHiK7T7P8wNX3Ej1",
  "key31": "52rKJdUBGA15NPTZkBqqUmAtKGSN43Gc7bjTPXwy95W71Wacj7CtLaeurtn8cDTt4WeGH2ZxSS3jxRvFbQLCtZ2G",
  "key32": "3xPCpo4CSUyUqyBLWGvFPPZ1dSvRQPEYCpv47L3hdSPY28aZ42b8QviXwpAasLZDmcxh4E3pxMqMf1JJJ4QWs5ep",
  "key33": "4S7mCvKCPdBPEqgAbj1YdVBRH5Gtf7M23Rm9AkiaPncRTPT6SLs7yh7qgqbNhRPNyW4kTkHbNbVE3fnjPAdoXcNq",
  "key34": "3MhgbMphadrn6Hp9QSLQh1My9MiBKpVECY6hpFohszERwuciDYdmZmgmamsZYfDLPCRgJDcrCjJerYqnpj3MYAmx",
  "key35": "3V8CKGwV1UkpwzGp6dVvLCkmvMFyavhKJTu2JkxnAHmsn2PB2KQPN1m3CHPkYvbFrvnGs8rwXoxaSc5sSi4XpWRQ",
  "key36": "5wLsGGCXTHEUmjEKqN1aRPs7dEWXQvgjsMUUwYNsV2m7Fj2UnkeCkicfoyBfp2G2YfXnfgMg6ugUe8hPZUEzjQQJ",
  "key37": "4eX6nRXxwf27DRLTaWAhzBHyVaSuvKwRzmkXmzhS7wZy6XAB9pon7gvo6VTFDGb11YiNswVUGoM5sSLojARBdnbJ",
  "key38": "3A5ZvVxWcCtoR3nXqgk4mTVqP79Pec2EjRqwhj8JaaoZSB5eHS9onrxLvNActq1BsNc4Unw1pKTpSFFSfJujH8G2",
  "key39": "3o9zr3fU487CoJB4vAUxiYd75cmPwrRW1zLZ689QdvJGfwbk8AC46xLnoZmbrZAqXgHCoS1fV39cqbtEZy9C7kkr",
  "key40": "4MmzbynoSWzWAFJm6BmfacJWoAKsXhs1yvZD9EY3iAEhWvzgkPa3QD3c2voefHP1P7gKt9iXWTr2YeBTKV7JJ6au",
  "key41": "2TDz5TMdBAoC1pTTBVZ3JotZKuxuTKvrA7TRW8seSfy31A6E8QP7ciVB25ouYxuSZf1VLevMzHJ2KvpZY9DvcNvd",
  "key42": "2nTUiju7UD6oL5cJXwVxi4H2cT9EzBzh9anE2tFVSWzuG1e7QVbRPUa7sjrYhZneJe76BT66jde2KW5dey3KJTiP",
  "key43": "mmkBAZefdwgPsfFYG7wpiozjiXbpZPZopKvp1apAR4BABAoJVpAUSLWqP3hXErjZ22MPTfoUByrjqur5czYmRUg",
  "key44": "4H2YPPFyWinZJAVZk3fJKNgn8mDjTWNALMv7eu9sYbyEvi7hunU97uzKYychgHGCZRdx9vxsp2FeH7J65UVKJB7A",
  "key45": "3V8SLMYBF31EjbaCSFG7UMcHk6Jchu4XHXpBBXgSMD9c9gzeFhzgcYmxFRYL3EnbNW6yNJmEhvDjABrUT91PHPhB",
  "key46": "28Qnix8cwZCXsnwL3Nv9Kj9mBhgvFNUx9F8UmJxAsZ4TJ6LpGYTG8iWpRvcH2rkJn6zGq1fczJSR8kFA8CjhmMCV",
  "key47": "2dBqQVqbEQXf3YY13veFERZW8gywRvXWTm8qh1cEjg3WvGHFYoqvTBei2nEdbqYLJKzNS28ntnec3njjzduhKSNJ",
  "key48": "3gVgTu2QS47mPHAYQJcQkVkScN4WyFKMZ5m4xWQVdUnSaRknS9QazwCYiwwtJkDuZchtTGZQaHXhc2YLBUsACwo3"
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
