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
    "5SGWQ3BNT2CGjmpvHVBFRvtKow3YZYtiLTynt1gNLqdVJj88gHhnba7GaY4mLcBdEQEzP8P7ojKag8fHh91VEuvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMHqX3uGUkP2wDF4h2d2vU12scNFXZCy162QBLSs7nzbSCxaDQ39mZofhSe34iFewCyeTajkEpaKHnCP6Y9trcw",
  "key1": "4qJ5BbgqW3fQJucGjYA9Y1kVS4HNhtjNZLX42F7Fh8fKb5m53mLrAmT2eeDjyp3h8wubVepgGGRLX99UidX2Ha9G",
  "key2": "cNXLxANkLm5NFgecbNHNk2Z5YE7EfzWkNDLGxpt6zpjWV9cjtHUXNzBknqsNSBARcVcDBV7W52faQkSXqkyCzom",
  "key3": "3AsPjJ9T3BPKAA61CB8FY5k8UK9cUNdKuBM49HrJeuUVDFHYxonWya6i6P7wWVkqS5AmGeG857wEqNDvtb7gND24",
  "key4": "3wHsCpt9uoTYY4ebNHe9FagSTBqBxz1y4HJy5T2KYAyWrYtgW1eCu8yUMEhfwDm37rToWNuNrs82Tc2t1LYZHQXx",
  "key5": "2FhQJ2dY8cowbyGarVDcmpC71K6zhsKsDJjx2Aq4tdq5Aw2vuX2GpRxSvJ6ZRUbSLQsHaTrLhpp6QCE7unwGg8GZ",
  "key6": "3683X8y5fzdZfXDLD1m1R9B3JYCVrvTUqhjwHdWzTiJi3fFLt5fZqXRjcEfPTrBHhPtRiXKek9UwbfHTbviZgRQA",
  "key7": "3UFrHEQB2fSNTsmgcBsoHjitR7gNrEF4bF3LbYUGkHaYNiWJEzyq8NxdFfpNKSncGS59x1XU7mVgns7JDtGLvhDK",
  "key8": "3REUD12bwqF4ZwFWN34u4nuZvszV5Ug4pgUX4zHU1huFGmudLoL48xAjeS7NER4QcFB4xtGK6ELiyGPSSA5n4CsZ",
  "key9": "3qsmYmhXwnycjpjgN146E3QramheHGjdNYiVaKRc4UDazXXV4da6MXdqb8GP7JVpjzYYyhz9DgFKmBP1PhpR5sf5",
  "key10": "4n8QPUoTXcyWhSMpCazKtHz7KVeWQiqfRDNyEHdsaZhuZv6jDYzNnezW5zsLTbwsDezLx91YwkXvo5qD3jiD1WTD",
  "key11": "35idcwaC3WdmBS4AYdCKiHUtAnRjSMpiEBMSRdCrKeJLTNTKdsmJFmS1mF4sWxFpraMRHZLnDPxXKSJbyuw4ZbHK",
  "key12": "36MLr6WKfBzJEAyt9Hd4FqdJVRhkkivKuCj8gsizLyF3FyK7PjGCvCTT4B8p2EhRSWh35tRwmUBvm5LUPNwv639v",
  "key13": "3JqeEVfmbY8FL2ysZRZFNCRBhxMDuUtHfvdCt7hKK6zDpd1kaRzgCsy3QnNxcj3xrtfbiXLC4mErWcdGGzybQRbV",
  "key14": "5KpYZs8b8FA9ViBFTzvN85oQyokYq6kT5qmGrd2ZwwENCXQQkHxfwGU5WM3X3i6HtTCzPwViZBZXxUqFNrQvFseE",
  "key15": "5Y7dgRfh7gNRkZyTSnDSgQogaici5JZWX6iVzRxT71peLjUJLyX5rJECizsCW9tGJeYaPddPCDWfF2dkmfRc5n2n",
  "key16": "4kugt7kiBrjT2uRKavPVzm6mmnXRKPfeNiBsFNxVWUZEH94kJE3E1VUZvUsw63KvE8rrrR1VgYhYAWGt6CYvEGY3",
  "key17": "3CmfBrPW1K64vz9Pk8BFTVPUqDqGDNjBQrAR4BMtS2KCSYrCDMCAkZdemxVYYutXdHgtia7cGbU7PBaSfoJKU9rf",
  "key18": "64TEDwrVpg1u9e74vepmjLg4HkCc3iB6QpAHXFfveHXYbfaeYrdyNAjrzuXgDMPdZy6hRHatDb5oVYLjWPoKRi9a",
  "key19": "5LVNYLdieWgCsg5z64bR95t9QbVdoRRf2di9iSZ3Q6PKvZg9NSCM3F1bDDva1CyAwfRpxgksU1taN8CVzrxKVwWV",
  "key20": "h7DJYYbXHFH2L9wJuHPXt5v6Rk4XR6mKGCVGqtBgwJgaH6mPgM5TnPtGkuA7KzuJd3pbw6msppmctM4tgWXbjLo",
  "key21": "9YnZJEUDhv7PgDj3YjEaxa2W11iQBm3g67oL8hBnMi1UQRXpno1by4XzkqmGpKhrfdYh5VnFrkDrgM8WPS74fDv",
  "key22": "61e6WX7Dj7sdM8U1EWZUdPCT4oGJDTVdQD2bAHfL3VD8UoZZQTBu5wJju64sn4dTzBNGQwc3iKSW4kr7x3pw5MSt",
  "key23": "hFRFM3tHgPBHYSBMts3Hw2fJLQXJ6ZDSV6A49AHVNkmuCrchbQCLS8sq2JQcQdrcdmvL57MgJByDKh4L4peopZb",
  "key24": "fyh9Z4zmmu3YxGJBNkwwiCNNJpHqWA5Vf15wpQr3Q2hivNKn2pWsFaahEfiabmXtDSdkr9DgzAZ4FLuYbndjhdP",
  "key25": "4eQV1AedPayrmPAAgiCuBJzy1ETGR7nhvJQX4MPpLUgHodvycCtdtcN4Fh6WVgkozQt1mmts1pYEHyagsck4kqMy",
  "key26": "2x9aJDqM5dqXsNTSArzivdPyJNigtqsj1SnbGdAHgetSDj45HNagk71YSJbCUg8kyqpRHSb6Ur9pmWFFjTHLZCyB",
  "key27": "2fbd7Q2hupwwvEcsd1j7oXzUutnanyRekBABFYkr6mxUBt6M9WAqfwB5JczPU9ATiVugWayZupAhAPQCy547r29g",
  "key28": "3SPNcNh5qJ69EKFEt8siND3ECEb3vfUj48fZj5EbjAniXokxmCz4w59ExXGkQVMJFUGoRYRCJeBjm66zYRDiPZ2r",
  "key29": "2Sj4s2kooaxTMPGGbg9tAFc36s5fgo8BWG7y2dgAWP2LU1teFZ9Rh6YNBhMKoCLE94dL49GwFvQyC6uAoLUw5Vz1",
  "key30": "3dwACexRHqGKRkzizdCpn8uqHWb1TahePhqjwSJB9b3hYxpq9jsa4BPwtHwoyNiCwJR3QhBPbLonZFsqL2AJjUPr",
  "key31": "5ymng4yYuSQEcgvgZT1bDr8dMuVRYhB2BA7xX5MQ9NJ5wrc2wTnRJqu7jpGEomufRuQnCNNyuQnAFjUuJVCgMX2J",
  "key32": "qTQpsDBPsWTNQeduBJJQX6qoDEVXfmFUPDu1GZvKNkzdRKfhyfgYadATcnVLCERiY9J8aBhFmfieAvhQQQKN6AN",
  "key33": "2R27fz4HsgCTjk1aT8cw3A9EpcsP9UeaLN6xgcMvTWNgcsJenJSppVgMjwTRfV5L3UUCFjDbmd6p7GLHYna9hdfo",
  "key34": "3JDNdRk5fsRWHfPprmwbEBqTm92yS13x2FgQvkJNLat2S4dB66GBjVskCssqyVsbNU3Ucu6SfW9qP46uUdYKXdUG",
  "key35": "67CDgfAv9DKLsDVKRmgh8XmnCoDUNUkGP1FBtq3KTMK2qQkjPXhsK82ZDj6Dh9qRufkTYQrmLyYQbkE1VJDpUKyg",
  "key36": "4HRoTsKHy6QaFAC5xwsjKYmCXYyUFKwbZU8HSEUJ1vJoeSc6it43yTuRBgvmUKeSD4UNKwJ5jKR9abpx9pgGUaoC",
  "key37": "2n1GfnxtWDQdtFHsLbxriYamu92x5PysytupzAQyVRdKs7YZVXzTDYJhG1CNbhicyn1RajDZbo7i4tmTNT87UwGR",
  "key38": "39pKTDPN5k1upNtQETpHiofPztH6tcgnmt99EZ7mKNzPZA4xWagfvaLrvwBKD9Tiw4ZhLGVQ1uYcVtEQTiPQy3uG",
  "key39": "RKNnhu4s8w9nRMFh23ho4jD6uUoWPe6Vbtkz2drMVuTEWHjFiYQRi7zfZMDeo3hivYBjwNKS2gcbKikWhKqXXpJ",
  "key40": "4oAEws6zqJiLU3avKudgwEMxbNahyyxuwLt18btgXcTLj3oNWfkH9AJDgK1282LLNGMfQHkHy7zqQuorn2b7BwTX",
  "key41": "4raVxFXzyqcXardj7oxTAeox5UM8pWSzPnyU96pNgVqn8EFxXTic4dXgp5E2sgbfKNQLuuZRUninPMdqNv4QCCDc",
  "key42": "5xkchoMs4XU4U7xEjQMjEpfqHRVSXxjkpnnA9bPdW8sNfyQjABKD292TmNnGMegKXsTwfMh4hPCduFsVKxV4s3EW",
  "key43": "43zY22BYGffy56YPzNgN5NGDLVZQn1YppfYajDmtLHMm6FFstRev42412Ba5NTkTgN1k1sdF8j6Tyi24YqxEfKFG",
  "key44": "4yNLQhzWd4XvT8MB5vT4zH6Z6Zku8Ni73v5nF1W94dApNRG2zgtE3EE3jiciksARYMtvMJjkXdBC9bYqoeD6Muqy",
  "key45": "5667Z1MfTZ49WSpskSFzupi1FDQ8tYkoJeRuTBFH8mwzYRRJYyZEpDrWavTapwNSnptGBJR6uyA5CQBGDNyZjwCY",
  "key46": "PKqxzR8pg7VXxoHGmw2nFGFmj7Kk7GZcHjiGWu47fTMNX5FGtQ1L6cRdwmYNxcfcnccpnYRW8k9pJamUXXR6Kmb",
  "key47": "4SRKzfikdMeoRqQGUkvZNj9V5T7jDPafuZnASXGHSesHwZBHSBifzRBUmH7ts14pRHkjB5d91fQfhEa9BaHfy6cp",
  "key48": "3Xxxmzcy91eURQLi7uWiMX7TqkKsLuy3JCXXT5AbFr9ywTJEsa54WhMRRALAUYWr9dE6EAwQMhPY1A2aDckkcyHR",
  "key49": "38yDc8JFcpQWjbbLuJhhMgdX1yd6ysAz289nh6ALvL4w1ZErR416DEbP3jrYWTbNKzeBPQ1X68Sdo8k8tBSVSgsU"
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
