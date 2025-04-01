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
    "4HMTVBx1U4iv2ndJZ4xuRm3Q6JYobJ9q5kFhMRFsKg1C2XetomQosaApVD339RwXU9jWgdggR2LTEwzHTRk1xBmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4PAdNfHbvYFg9VkG13PpBAPHN3rQDifE2uaNVSvNU2icH9pFdvUYWvGxi8iJNAswvfMXKpm2xEe9beRFqbfYSx",
  "key1": "h5zH287Tq1dWNT4xPFWFWUEepDKAKveAhwmtnkmxvLkU5u6hYBExdV3rsEzaPTVEmouzAos6MjAByC38AUUvjEt",
  "key2": "3q3cdU6dAb4pis2BudgGfGzbz6EjV1weiSQ3QBbxFeffE7wptyK1rzuDhGTqArUUUH2e3kLv68ej92oiHWncmGDu",
  "key3": "2w9LRr3eJ6FxcSV2t4XUZTnnycdcZNaReVGA1tAE2LxF2bRDFZgj9iEyry9tz9i7jCoL2LefnG7SFjrkeeg6ocMb",
  "key4": "2rH7CixyPukmwN8R87dHq7nDrpeMTdiwR3LyH8wbBpdMVHdgoFwtSkFZLUCDtD1XU564pBT2tPduawSKW8S1QuXT",
  "key5": "3hCw97cbYct977ioMapoRXuUpZfUjHewf6j3j6SempQA5ZxVd64Ljc1m89fzQAjHBRDoTtvFUPAeNdRXrNrtmWSD",
  "key6": "srpbQiXr6wHtu4Uk21sRSVrcXkyXmbHK6wdCYkjtziPFPGFHqqvNkwMcdYYS2VEFPoexmA44iPWkp5Ev8hhc1fL",
  "key7": "BQykvbWsorrjqEzsD3wcg9U9xxFQar4CuUuZogroAwL7JZT5CRcrnTdzjACusYsSZmCDzYJGsfn5pQ6MfndE1ff",
  "key8": "3ZWnYmrWg2hgNF7jEq3QJ4fyffKRPK4bQTFWAbMm46cgYpH6QS5mhfJkMJGG92rHh4R5h6QGS1SGnUoMBjwBxj9Z",
  "key9": "TNwffKtkwS24pN8V8aZzwr4YKW8CKHJpepPko1wd53hSpzEdmYrBfEApVeonzt5jR3pTJ1MwKTwsQDoXHSsgBKM",
  "key10": "4NXzGiC8n5ot6zBFnnRnxi6DRfKqxK4sHzzwGb7uX1bJjmo8JFtYrMGat641vRi7gNBeaaRnT3gACqADkQ2coxZF",
  "key11": "5zTZeoJBCUWvV4P2n96R3sUjZrjXcFjsotRdMT7DCgcDMYS3vCZM8LzvEDn9kNikaTFYAZ6R8TDFmFapKfDnpoJk",
  "key12": "5giNeSqRgp9duC34wfHXj4EtvCBmmL1PkXf5gJ3i7JbExTBL19vFSRhBXRqcJC634ge3MyLk7u8he2QuYXASrj2r",
  "key13": "AR56R5fhCrbxUVU2Xdzc1iqAcUim698rFkCnFX5JbrpuyhMmBfeh3oUMarABsX1kGdLGpkXkXCiHjWGZvKZwrYk",
  "key14": "3qUeSmUYPJd5Y34WYeY3AxdZteRfPN3jh4tT3jLCbLdk9cRuHWNARwbVbP6tyLybUVT7YcuzS15S6XrMjjPnh1rK",
  "key15": "3TfVtY61jGbuWpG4FJsyfFg2ncyVyWx2EjUCj6qQ2rcwBrEDtAEDD2JYBwagTqo4ipxqPo9MZNLRw3Xy7hVf9km9",
  "key16": "2KBdkW83CM867WwKSJYYe5o6XnwoJcf8NrCiACGDGs1mYV5sKvo1SFxTEaEhhAa7CeBtcr5WnULxbCz3uJbqoheW",
  "key17": "4J56qF2xpoLtuFKvf6poZXDmFo4kDnWqCgmwBYcdzESnfHs5oRQSQPa4cZ8GbZBiwspjzs8iwMjsYJfwRcLng3Zz",
  "key18": "n7U1dbqHYeeqUTrwoqReQVaNN1ksb1rDKAMdDwL73jThWuE9xJY8RsukUuH9DgubQ16asbyQqBvDnoSLW1w9Pqr",
  "key19": "3EDVijR61rw2jxtYEgj9rsAkogrkiQir1rBSdnNo2JY5kZkV6x54S8AkzSNENZcwp7TiZUiqkwLdr9YVfeU4wYcY",
  "key20": "xU8C3QhCxofJ4ED5etkv8GSqeeK7tunEG8afWn3x2Fqt84Ng5jjibB6Ku7KQYo2HTFEd2zcxVT7FBN4ewAaKdpL",
  "key21": "CWUYSSKze4GKYNuvRe7m8eQwFgtVK79Ywam9uSfqn8aZY3bNRNVNHKG4vpaeCQgFQ2bzHaU1w3WDX1NBzBSpeNw",
  "key22": "4ECCt1wHzyfPoFg32dffpANtUdPVecTH2pEGC4J9jgAGhWqHauA9bCRuoCNZaD2Hoi7sK7G5Q8bsm6rJxndTyJit",
  "key23": "5fnUYefh5rA2xVmZtnvm5q8tFCgcu6GrVwddVP5584LhborTxgm7ZS7ZFi9LaymTBhkxjEyBafYKFX7bA1mNvatt",
  "key24": "gF96BGUfVAQo7QdV9gJL2vpfEjvPinSaspPCjX4NGiaG4Ss5g4oU6ph8juDdoWGm4w1Fg6jvCCZXjLfoqK5oqdk",
  "key25": "2iLw7UFYt8xF1ZBGZhSLjhtxac3HDEDvpgrPLDP6zEDmRYziPKXNSqMcQmu4eoFkZNLkZcqzoDMQN1GQLz44cqz",
  "key26": "2UJnL2KDyRYvy8W4NVn7nQe57eX3yHH3druWj2h7n7HcucCAHEWapTuZAcopHpHo9LHoFVYCTVjqAxMoKPL5tSZf",
  "key27": "2L8KtmabQkJDAoCFYqKJJQV3YEEBgbuqtT4aoYZPhKStQHcpnqwm6GBW7b3UJ4GzAr7hYZDfHrbzyfTp2pkYTvW6",
  "key28": "2mesd4B1KwcFqyGMAwQrxmGHJ5qVzVb65ffDoxxtPNa3ZCBFo16rjwwzMG5JLQhgd6uVo7EG6TpNLPmZQ8crcZcz",
  "key29": "66YbSNj1EFY4z2azyHaJWPTu6n79ziYwYsc6Z56PVCQieFpezCKVBDjAJmSe1q6vVgjkGXBnVg8DwyEc9huMAd4r",
  "key30": "2TybuGyxcUKpHg5yU3inEAyDAGYTr8JhjrX18ibQZnSaYkdYPA4aJz2YaFzVsc4sM3tbRUk9NVsV8yT6bKdxsk4w",
  "key31": "2vCDXUkJYpBd1sCdXGdskBCy2S9ruDuZVXH3ji6ZuiwjxpV2fEBRsKgdZgnsE22BANCR2vzVPuVGFhNYUW1LMoL9",
  "key32": "qtZHjv9P9h7rtFosF6PA19699AZ9kg3dTSqsw8VT6DwXzUAM5hzjfn9HfFVxgnbHmyS513Lq4Msfr2RtfkLqJN3",
  "key33": "5QtPotizvAsYKjVhkDK5kseetKQfMrhj8M19NXpg1hKDR2nET6W6oCxZ2FmgsL384u7MDwKphfThRWmStuRaNXpv",
  "key34": "26CsmHJ45z1D4BsvkCMydJox7HaHE8p5oE86JXknFRqXfkho5RhCsuc9JmEaY3JYo4CLHF7iM9woyyTGDSTnQBdg",
  "key35": "5Nq3aqQYRb4o6Yd4hHnzVTHRPVBDvdfpXWpjnVfgS6BJFwvtjPXTW78rcsgg8ULpk9M54NQVZuMfUi7J3TCCvRV1",
  "key36": "5BM7jzYPf2FcGmxcwT88hZEajUwXHWRRUUp84BgDtEs1ehLWhwyGP7Z3RNRzjGWdKBc3tPyQ7yupceEmyQHKCRuR",
  "key37": "38rdP1xYCAYTt7JwMSjyVmxPaZpyU2CidPQP5ss6LFRe7rVivWMdkpX2r7wuwdva9zK9hEM6fpDcFrn255fgCKqY",
  "key38": "5W51cX4ZV4PkRKXF8YKjWS6613oi1fCj8YErhfT5RpW79sgBCRj2a4NQq1qFgB8GvcbK4ZisKAPUg9kYrK4ewyZQ",
  "key39": "51CcNLZR259YpHJEtdtPuSoCdMBoa3T5tVGbFGrdhTzrK57n6A6ZuFChfBeRHkXxP2g5QRQ1iPsd3i6u3J1eWHtq",
  "key40": "63pBgGcCz6AD6d6rY62yZYnQjgBRrmpvfNPQ2JZYdxW9FqBq3bGQYim1LMkne8eCEkPwpKFxcyXJRN98gTcpJJU5",
  "key41": "5RscabVXh1TQGddmn1fiA4WJT8HPu7uxrXDf5yKSArVV6vnCJgkqv2f2BJeAyA6RTN2m6zm3upkB9pC4VTSovw5V",
  "key42": "4bpSSVMzZZemNN3qMY3zEwpPPMwsyqT6o8Zy8eyuuDpFjTmwHDivspAgRqnZoUiMpKzBXyRiejWTPtFd8Ex6utLX",
  "key43": "qQ4dNCiH8XwuwXAR5KQQ6zDLp3zPmb9arP4w6QS45R4TQiqvG1CHzqiUn3Du1pjg7gnfzgFw8T4xNJjoTNQR6qB",
  "key44": "3Wze6s1zPa3imsypryjLNh37sHWcTeRGszKvNY1KTSNhqy1ffkx1Rn31ZVhJrj11sR1R7XdwkqiruG8oaxwidfz6",
  "key45": "4b3h9bFqiJaMbJJZJKduxircNeiugE8ZAEj6fqAUoKfqjF2L4Y5TSZuxSu5RbAcP8r8CWoL2DoXE7z6YzX741ziS",
  "key46": "4vtBuYtvwUmvUcdc5R5XNN1aPmFQ4cpAUc44NhxGR3feRZ6k5BVrKLoBGMVJ81PK24VFvEGa2kYCpMsREpS2uvNx",
  "key47": "2pnNcmhvPSU3H8Nj1JjWUpxNw2oRVz6hRxhW1T7hWuQkdiJB8o2bbYojzxUEG1UJDouM75zs1315cbcP9JDMzUhT",
  "key48": "dVxxYz56ynSV81rT245tCKEGAmgJ7bD9tkrwGNJv2NAANkX3yRyNcXZy45dbsdYDEo5X6JSQw2E2koXmJ6HJwL8",
  "key49": "2M8jQr1PwFT8znYms2mQkBa91k845F9TQUAESLQhkPvw9Pr5WU8VhCJ9EhBqwMsab9QLs3ZKCmMZSLZpC9t2MvMm"
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
