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
    "2oC52EicQxL1oiZa9tsVVpoHR3LbVMx4Zc5mByc6rh98KRY3oTPcRdMeNSp5Ss26qcLEL1tfBGGVTwGiJ8b2iFc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2peW7G96ZTN6YTDmmzLwru7Kp9fFwB5NPaXTdTX8PFApdMPhgvcgwDzM4cdESYASqKh1XrS7QNxRVFPqSLNtbCHM",
  "key1": "5E8h2Dtb4mQX6fggZv38b5rmi2HaFN5tGJQuPB1mauEXnsobxPTv4bRDWcpBrbgo4bQainV8kvba8G6F35KMNbNS",
  "key2": "3LUPjKPgD8J2u1AESF6Puh2C3sW5G9817kCMPg1nYd5o4ewvSuXySLVRbGp6cHfVN82nxqBCr1ZBxue1A2jAMPwF",
  "key3": "5aQRUWs4wYQbQo12QjEw73FmwdSv9QPGwJNQzGkDUaT6G4tLpCr7q4njt9uoihZMJ6yiFtMMHyNCkHq9fYEvtDYP",
  "key4": "2CQBVDqp9mb4NgrMY7BaGr8kTXBB8ZA8eY7YC3fRozpCwBcTL5rx9x1aUpX6wTdz7MbW6cKPbn2gDgvf23F5sGft",
  "key5": "5YLjJZmyUaU2A1DuGC2aRpxKhLJ3gfZGf2haG8XKsQvfwwBLrMEJ22bbSpy6fMuEYMfTxzsVScVyDzFYkqGb8ufe",
  "key6": "4JbhxX1NZwbZ2Epw8qWqKZpR8M1pe1vNBA41q4DtCVgUsnKMuUTxLQc1TrouWeLH4EzZPJjpi13zqzfxSipWUYdR",
  "key7": "2U1H1SkqjML3eYvPjJBEZiUMmKBMpCQHvtufKkc8yQUUwmsDHLZjwNuHAVXMfBv21mUDaUY8nn1Jcgr5agMQ4evx",
  "key8": "2h36vxTb1WtMTRbLJ41caYR8AsQdMDWdePP3dkrTNtnzwo98XfG6giaoHbJggdYaZAk9XLFfCw6BPCKjqyuWzsNs",
  "key9": "3JRE3moHfiNQFDyyUMNiT4NBcNUZbvaS3VBonyNjAnNGuPvsgxdixqatNJvJg9b7H61XcXrD36Q2JS51a1PqK17V",
  "key10": "2yRFcQsu5HBNSN35MFKW1X7JDV5BB9msn8P8kuExyEhzvmBTBtJEnGihfRHaKLqYWyD7z7nV87UJCnxBYUpuV2Bs",
  "key11": "2VZj7GmzwZcjQTTnLY2V2Mv18VrsDAoAKXMUwWit4P25AUGBD8iAxTc2MPMincnfsbut1WsKuWFXA7V9TLnUoKtc",
  "key12": "3b4PQ5HJS68fkMoS9wKV5gvymAmuEGN69uuYn9r5fWtDtMKq1Li3tcquvG86pQdBMUN33m43bZTFuJoMx1YFGpq5",
  "key13": "FVMXadgdfBzydjHDvijDnptv8Cqw3Xmu7uPJrScB9e7BbSJGc5mg7ANbmvgU4Us5WAyG5hU21DGjuBtT5XL5Csb",
  "key14": "3ZEkFeUC24q8cr8YSizztdhVnw5QAJYR4KpHNngY1bDX7CHtNpNvCsisXzYwaJqMedDq56whQacLes8u5SnCBT1t",
  "key15": "39sHfG4yS64d6nYX5xJaqFvS5ZS5vYuLcFbq6DopcUzpGQXF6EmTuJ1HcxMpZQbfSaEd8fZMWZY2REcWhUAvd2Nb",
  "key16": "5TS3zrdwWuAYcxsY7rK9cJKyxeSK75moVcUHkDppw2R2Jmb1wnKoSEDNcPgJA8HxUEcyNuqp8pUYNjTejgenr6Ge",
  "key17": "2eupGRSvKbXVCtawVoLrbi8eJHEcJz1ADzLdaQFvKyPYgBYnQA445f8tHwh61x2WTCGr1twrdwAVg57MrwRRkd2k",
  "key18": "24bgWaeiUuMw8RmJ1A4AQyQv1fjz31AxBn4sdZQBMngRWhS5nV5pg9beCyyAkSp8TyEE7UZhBv6uSTrkejLsTZP6",
  "key19": "4bU7m72rqhgwWw17VZy1GLfikriTJ8Wo4sxLxLE2oPRLUX886sve8HjzeuhiWJpAfjuhim9jiZxCUZej8nGwF26",
  "key20": "hVXoEcJtBmwDLTi9cRH8ymDhGRFdR39uasu27EgSYsw2YBMhkbn9WpEvXoC7GzfHBRtikHVxLq5QFZKeERvuty1",
  "key21": "2qou6QcZptLgMNJTkacQEZDLpypRmD2qkLagsNnyga3UbEMo3vDE3EcYaCuumcGvDAVd8SFtAWquX2Hca9gL4jx6",
  "key22": "4W8njigoMjPDppvqSVeitB9CdaimtU9uRTfVWksgTchMmSXBGb6B6bzMg8FG6QyoQUGpc5ieX2UxoeRTy3AiW27e",
  "key23": "gb1JuKzDrcSjtEows2jfPMVQkkrjrTTDxYWSQEbeYA5C77hTkSoA4KtUy2xq6XoMZ2ombTYaKrmWjs7SbjXL8Kr",
  "key24": "2WFWugFmNeNMERJeTYHTRr5qaZXbUPuavhRwPYgmkoJsfnXbmLNNX5LJ3CG42qrJ3h8qQXb2FQVcWZQcPkpze3UE",
  "key25": "4TVyN2JHKvzvWBgqXjZitD8ckwC1yEEWpiLg4JGw2irVGi67j8KHLUmspcp8AQGhqb393ScWTctU8sXJ6PvDyKn5",
  "key26": "3r39CKG5RDjtiGg5SXfaPTdESJaVX9pMCVu9oxp1m2ePqUiBViBpF6vDF91DdWnCuR4yiXddcXUCGQ3Gyhv4aYqx",
  "key27": "2GcqVcyufBTPNTZuERc5ZW6pyG5omJ8CP6wom1dwE3aaFpuWbuYke7NGfh5nnHCNcqnkpfKrtVSWHeCp457DbEtn",
  "key28": "3U1sRzmnJbUJchKTzZNC4pQh2U5f5xHQANxtkmQ9bdDqEyfmBg2QD1GovU1S8LPmeXHsrNQGBHKwBozmo2bQJeA9",
  "key29": "5sboXTfeqktheNtk4x8McpqUeGj9qFBwLkUGfzjeKDB6wY76AxdioT7zFPhkCQcvwMfpDTdz6fe5gyMgoaE96EUZ",
  "key30": "49L1eJ1gYn22B5XKX3pSPxBW94KzpcKntGmzqNaciXu5hUwdWdrKLxHJ64mPzHokq4LEzGqaa3E9N8YYLNvcswkY",
  "key31": "3vCvzLL593DgSuy2m7D4YkTsRC3RaXq4RySTcxzRKR5xknArQJsUxWcNpfPeaP77Ts7DUvzCn7U7PEpyGQ4skpcb",
  "key32": "2JfiDj6HosAUCWJH89RGRpWHMQnh1B92gzqRmjNtFsV8yQNBZLMV25sQLzfeYrvJFxWr9DYQaySEQKTczCF3KG5v",
  "key33": "QHBvvjdSqhyRVKhAMzeJXnf4iYrV3cWUC341vWeGEdMQ6w5GEjVCypUBq6TWbdSe71o1zSa6ENM9qE2By5GAfHD",
  "key34": "bstqKvYG7TqATpn4qBrf3qRasTpTkLCZ3dQXze6CdqvC3n1uX3nBB8mWusYRGHnd5QmLSGmTX1wnYDGHtWGCqWq",
  "key35": "CsCxF2oYXGb6JjHsvDFVJ7HHB2nZdNYmqhPeqD6GGVHbFb19YoWYmQ6C6LrCQiTgbh1nW3gugkZkRuVFBobZ6E1",
  "key36": "41Jodpp2dEPovCm4sPxAw2re6onyjCViuU822GXgNPghzkATRJRRkTVC9YRLB9iqUrenQiSo7J4MPutv28mATRN8",
  "key37": "2nAFZUGGon3rhzQpbtL5MUrxTKTPbimJDWkpVBRFYxXHBesDRaJxZP7YLFVbZJtEe6FtHvCL8KmVRb1YFvytVGHV",
  "key38": "2hy79cATPcGQMASd1yagXfMxUJq8jC37J4Z67UEaUijVsocLKeL8ZExh2oihkHt8SpqkBmqFruNTTJtZu9PB6kyn",
  "key39": "uJPJp2hh3GoQKWEPwmENVqEA8hcPJvUki6rC23tdtY6xZR5PafoLXVimBkRhiYaM2Vf1GxYJw8WbHyUYgCMhhNR"
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
