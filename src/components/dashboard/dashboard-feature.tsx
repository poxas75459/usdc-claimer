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
    "4oCmx6VxFTr99ViBedyZSy2Hnc4xBUojPfgj4rscMbGm4i2TuxbHwp6Zw6wGKYRRyxyP2jWuEzBKjZ9NS3DP6q7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCwRgamqv4wHzYQHASLM7v8A3SK6qeH61qxqm73rpv5kP65WKM3QP5XMNtcjSkUuLA7XHBdoxcZynLrL88MrJyB",
  "key1": "5EWFRsj5HwKzXQD8eGanqJ971eGNXwb5G7gHhneyt39paxwrHtkuzM5huVnSAyxHSxXwx14Gyb8pVtG97Fvev9Nb",
  "key2": "4kCkCGxdkPbQh5715yMUQTdc3Ni9bFTRKr5BzSkkQAfXgmwxQQ9Zajr6UVBVfxpy2dXnNqtmY598Ky9n4tCLcLqw",
  "key3": "4r3XycV34iUCVGjdzAPaMg5frRqVkkiqsmaMwWYktNn6BE8MYh6zzTW7ySQ6Hzx9jwf6uRyWkKbzxmsLobPUV792",
  "key4": "4QdJ5ki4TGdUULwksJqQvW62tEqhLbdQPvrHgQtAdDM3WqsjCsJm3h34nbbhrugkwS8iitkJFL7ca8FtLVxRYo3a",
  "key5": "2kMmCRoZSgwPQu3SpQtKRyEJjP6rQRB9AbejXwxpACsKhf5Psdj5qaHMJvZvqZ43gkNFqRY9iQLaLeDCrQoCnwJw",
  "key6": "2HjuTQZPQxDf82QyQL4ukHEEhvpDc3QP2wN3eoAUSvuM9MHC2YbAc5pg1qXH5HwoPciAVFkPADLdTsG176TAiLY3",
  "key7": "2vgb2MaMFtuYaqjFTCKpSsdY1jVqFdKZ8Rpu8LcmqfadqnwvTxqmHr1iJN7e12MvjvBtxFSA88DYgDK6mfMGJGjf",
  "key8": "3JbuLykh4E51DiLaHVi1EGBsfiTx8rMdXf4YBxzmhMCYvxZjKh4q1cWXEEYTi7q7JPtWY5JuDvermqP818Q9FqAf",
  "key9": "4jiCdoENWT42FgXJPR76Cv8jXaoeJ5ZKYagYqbF6agGTjFJ8mqwkzZT4s5pBu1pYCZxCsBz5iS8itD6w2VFnhzt2",
  "key10": "3qz7x91Ac8e6uMLB4k2xAhvDghb8S9qXcjhkphz39tWJhr2GbacuhQmStdeyS22vswwp6X7G1CyLBujS5Au77Zkj",
  "key11": "5PffNTAxfa6nUPPZ6P1znT35qzZNkcdc2hTq8YMdXoRqpyXGzuMidzpZT51pwt7sYFEKrQjKjs2nPHqHd4We38um",
  "key12": "ZNrfsM8uV1zFNTXsUwKZBJbvHf9RBoSoAi6a7jTJBY8anwi5ynT8zk2iiKRF7zfQ9oVtB7whiPcNQ2gxxYbwcLB",
  "key13": "4s6oACfj13XXzWFyEcN4qGk8xXyw7pcXtgxad5Jc7iCUcu2RHQpQ9MVpLYwRMCJFwoGpsL88NBfjNRp72Es1HkNz",
  "key14": "AJHCTFFh6QuSGEQxtD85nGo8x8MCtnYDeHBkwTJD9YxxLR5RLaDvxu9duVgg2hkf3Unhaj7QDftHVAEQRDUpyYD",
  "key15": "3ZxmMwPi9Gw3QKym8rHkyhKNWLao51gpUsJxEYwXjBwiEWDChyrdNqokv6cnYHRHyQsL41YekGBWKMkw4k9ZjF1o",
  "key16": "4YcHhWRiTCTkbDehGwP5MXW1LXJCq9hVNTFuf5UafdUF3A7DAAtuSn346sHFcDPD85BqEoMS4iWvokEfUywRyyVX",
  "key17": "5nQsikb9azNoMNFtGwEbzKdQAkjK9GEmKShyczE6pNxC3ZykLFZ6nNEEeemGbK8iBhT6e4pRQPmsHcXVYm6MS6Rk",
  "key18": "2cFec5jfjBftaeyiScRea1PFpxwwdLMXdQHPo9ZGksA6ZZRXgwD6Kg3PJf28fDuMJ6ZX3UNnfMQibdrXtSNSC6rJ",
  "key19": "3gMBhdA5D8dy9URi4BqjWQjAVnGp5GwoPRSrzp71nh47WinoVuHktm6PXL1dpbAAvPE7Q67rerpTzUD9R9EXbeon",
  "key20": "4EjN26ZpCSpNkWhPwQgVF3uJNzYfRHEoVverF5rfmMQUQGGA7h3JUWMWMeGSKY5MeN3PBT4AvTkLZKVRVnBNt58Y",
  "key21": "33h84ixHAZdQDU7HPjdGKegTxPrKPDeHyjsqSfMhoywkaQL85ZUZ43acdyNsbsTdygdtQFsgSsir2jEWezY2CaJw",
  "key22": "2HKepwoAK2AQy6GKLy7FxknhhKFzye6DBE7B1ANw8BxYKAkg5PaQMJbkC26wBGq4R4Y2szwYgBKoXBDXFVEhwzJL",
  "key23": "5aKskahosyRw51jVzFPKfPN6Lhf7JC8bxKdNjGEjvdvFcxjzaV5r1b4gNgTxiTpKSfcUrLKB2WaRXYDG32tbR1jW",
  "key24": "2PgXSEszNdkQGHkYm6C1H6H2DidkXjrsh1YACxZmCviobvRPbMMhh9tc5ewvXJHE1SK5WDCTwb76o7W6CGj8uNmT",
  "key25": "5LUjAdLgmCjfqx7SRrfawawkmP5ho3eWQEeWJqusfTUDpmueFDkmzzCxa7xsxEgetFfhcLrN8mJL39T6k6Qqux5Z",
  "key26": "2WEKWwruwtwNnVMdkbbDGX4d7VbJs7B54buESWN89H8fSSzePGEiscZPfUWsdpNb16hdWvmmMoFpkkYbZQpjaYFu",
  "key27": "2DqDzDsnR7wNcu2qEKpfoiz94DJQH982LdzbPthNS9FWoQ7nqWjpb4pu1jBdC7Zy2bscv1M8Wpans2s3qtcMUfcN",
  "key28": "4QUQ52snKBdc2sMfChZkjHSzb4n3S9oigyXddyK81NE2ZxfRXk2bcnGefBhBVBgYtX3tTVDSqRQ7QFZgRtJkncDj",
  "key29": "4trVuHc1tkhD6p2dHmmcenZLXAHZ7dL7FjHg2iJqKL47t3B3r9aMpoc7tgXWYgjre6ZNyPkrR7Xnz9F2bnLKYPeP",
  "key30": "2YnmvW7QrooxvcZm9RdEAZscqM2XmsaheRjyLde2TUnV3VmV4Dv13J3VRqj7DnUoUc7z9azfLroW2HwqwrHgNMc2",
  "key31": "3SDT8hVDJtKZR1qJWB7gvJmFu6xWRPwudvi6FJYc6gryqSDnrE9zjnCjA2XwfggVjKWPcrmKNyzWtX2fKsXxH2jW",
  "key32": "5oh6NVKEnFba7tVsQ5J4huj4z1jf5hCFR9H42F2EVSbEDGwsvEfsKHw8Kpg4rvrSEr3YLggBTCRh3a2acLfJjQay",
  "key33": "632DvtpHf7vCNzbpoutt6D5UtkXWTsmSKQVt1UhVeWJzJvWjR7watPGNdQjV8y73BUuxKVTyYsehBcdcHgorHXb7",
  "key34": "4WSnEwwfGjBf52UhFyRYDU3cHLyogPkEKseyk6RpeRLfYahxBtWYYZbFdfGhZEwC8TZ9oTDpPUqhw5Noh2eDPYGw",
  "key35": "5fLUbhKN6QoiEM2hHb4JCoThYMAV2QjAMM51ddud2cFjrpwuhz3QHuSd2ATykNkifEiMNvZiX1Qf61vdqbK9itjx",
  "key36": "3WwtQtMFVXzbiMNnoVNvLJTV47pBXDLB9TK2JhDRtFrgVRiCt3mm7GpyDx8hwawVkwGPdWgYu5JSZeh5cCaut1Na",
  "key37": "2w3veDioeG7SAxLeL1WSoK76b2Z4WEqX7YLvVhkKacYzr2CSW4xxm8xbpBaCru3g5RGcvZow9tuxXaPoitqEdjJ2",
  "key38": "pbDmnUwCxMNMWXLMdL4NTkakhYf6i45Xn8CFubzFCow3wrtbHMgxEdRGZfCCCY7SRFS1TgaF9fz1pLnD1a3C3Wz",
  "key39": "5v3ghQ2A9ZS666MHFVD5NbFyzLktJeaP2TLJmoAmAbMCQbhMUM1JFRjhS1ZYGsk3XQfXmcztyos1kUvohGqH5J7Y",
  "key40": "4Wb5gjtesFdBfkryPkSSeWB6KahQFHgzzAuDgpvg42est3y8bF1vw1wzQ5vkFm8gUkzy9qJcurABodgHQh6nVPTK",
  "key41": "5gQrBe2os9am1GBPo4EFF61K6KF5yJP7m5sEB3SZzFz1WZzs3YijUjEnoUsC47JBvzw4qGhSehJ2hboKYCpXYiXS",
  "key42": "jRgxaT6RD95jrxpLGaUZqjUqysXptWH5XhWvzL8LDviLrqENgX13WGbmtbduoK1SbrGf9okbBmAJEYCpBBewg8h",
  "key43": "67Z3vtHVbfQ3kogY5vASN4AWCaxseqLprdKXzmsqspJdnNXqmELcRW5AsuVYkUY7RsWrAWaRkKts4WGMk19LcNuL",
  "key44": "4hBYGyR4rm9zrmrbJ5N74pUjeQS6APcmzPms6Q8z1c7fqxd38dQh1KZPRFP8A4onv5kcdS4BaYWnkdwqgkD1Q8u7",
  "key45": "4iW8n8b4eij6kEKAzSk5vUWaS45ku8hK4tCeYrD6XEAvMqogsJZMaAuhakeDQ1RPHXbsuFdgBKtLhvWx8ohH5jdB"
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
