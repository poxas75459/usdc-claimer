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
    "ShhwQ9pnUR3SekoRbXD5Xo3RywfHqpd6KxprSkbLfHfekS46wf8YiN46jrQmMrMHVS8GqygRvvXHpNmDrdMssEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQoMeJn7qTihqtwpQxchDGy5FvbXS3vVy4hNbsmxZeHapWj3qCGEtWqFHzadmjZzZU9gNvwiKBdXz1E4ZxSTmzm",
  "key1": "5QEjhTc7ynsdxtZj44PvtjbAHyTHyub13JGKaJVYa9u6AqqdQTmdkxJGMeZdEaUFqfDjxzozRCGzaAbnrJsFrpCA",
  "key2": "A2ASFruWwrCfa3dHKeWX6LH9M9PUMskkpy49uNeaoiK6gzzW29HDRBTFYZjBBTLYLE6AkqNvqxGoWWogpjhoSdD",
  "key3": "5egNtwPWNihteBtmxM7y7TkujpuRUTJHGFt1dbiCbpYKW42pJmRXBFaDVUvDKdCWyGLH4s1shWhBgm3ZxDKM6cmu",
  "key4": "3J5VbyuCwwL5ExBuvyQuaSuwWJop1BDgyp8zsA1au2ed2cenBVZPBTWk5bj2wZYcNKy8xYp5gazWCwhz3NZMFZXs",
  "key5": "4a1wfVcLgs4rGJpixQG1NryiLafuFgYtgejqSsHMdnYiE6GusF7V184vwzEWtbPzAdB8JASKFn3dRVCjfQStmS5a",
  "key6": "56HScw3zPLjp3m4dNhzidtdMrJp4AbKTfQKyX88awhiLApACxKHEmfreDutYdeJG3BaH3G1oiJSRvsyvWqBe9B8r",
  "key7": "2cy9x8xYDSfRbyjWDeq5wFeZZuqK6vHEibBTSp6JnG2NuEkQ98ubyE8bnfBcXTBKQwiAJUsbtMLA6REmHCpCVFZn",
  "key8": "3sbti6nc9rYJKxbFE4NZsCLWWpKP5wH2auBaxGH8ifBnbkB6rmhRgg7NuM45dk3kZJA8Z9yynB34XegMEDNVAmvf",
  "key9": "5hPwe2SXdrERQnd7aGvJ7X51KJnPQnWGzALKoFPCFwQrfPppmGjFkoq4EYnNbL2EJikWh3Q2r3utxQEtS4kMZh6U",
  "key10": "n7MCHtqLNh8fgzVkLnpAxDSijfT1rpNPeo2Hov51tZwhTcsxatQtcgCTnWBh8X9S9cjKK4Qjg7yTbZJeivjEmFC",
  "key11": "4Ju29J91G1neUXFXVQBbGAQ3LDWrSa9UVpPRreVoozUfrmjHbfQhJTBzmfiVegB2W4tXEwZTavkB4invYVGGvsT4",
  "key12": "SqZ2SpYuvSirwdMRQHdLgvBFDWCyFXAKeMWYSfQSrtsno8nbUESJKcKhm4dPNxjM9RaNgeMwRdeQ6GZXQQfpN3m",
  "key13": "4r9VdKyg5eTkepzKSWxBdnt79QZ9utqTGq6RjSLPgyWL51vBbFK475kMNBPvuFfPeB2cK3YnQYjmYSek7MRneDwj",
  "key14": "3p2AcyHojByqqqpu6MeSJL4nswemXQAjPSgAheUtB4gwHUCk9BJDEn64r8m3PVpG7hjEER4w9kEW4rF9riLF86UD",
  "key15": "5RNgX2xV3MnkBxafmJ5ebtQQ2Y1tRtqaLMhmNFCTRoRZGbus56pTSwbp7VLTabUswKomXCMCj8PRZDiFVDCrW6nX",
  "key16": "3m2Ku1c7kFvspXdhHRJ7gp5P4r1Ht6hYV93F1svSVFGHLb3VXgn1syaNiMxQcr8FLTfKg5Vntz3W7LefNkYHiV9y",
  "key17": "3zLmsoG6tLCiQsh2A6kQVaSiD3655SLi7jMWQWZ7DcHgYbAYXxPr3vaW7YUWEvzHtgH4MdVYY4UR3oQhgyy4gYVH",
  "key18": "3CzKXdTRriPfsxit2nmEV7vH6GkPsfgumaeGnGYzEScV15er6Qg32jckKSrc1VseNwHf12eG66swh9sifCEaNrBf",
  "key19": "4nu7XDnAEiXMxtjbt39Nk3N1gw3q4uShqkTjsM2PvnVtfeEtSaSzinchudSQ8xfXANBMt6ErZZbpEdRRrYjY4NF3",
  "key20": "3gjWszsg1VU3UmXo6VRZgSbbNyaqLkTucfq5kzRiPVkYTb2kGmPrLnjJt3yYwYfLVoYSrPMrcLAJZ1tEXdPMNmaA",
  "key21": "3VEqqRUwGrq55kiDvbsgANskNjYxCUsW4a8DgdiwkrcbVN5yCRvEybLpdjGgdm5fFSFd1jhTiNTULyTza9yLvcdq",
  "key22": "2REyvofFmjeLWdrM4Y6g2RxQrrMdfdKhbd8Di8dmsXefss67BgGHDt4131AYMiMU3i8UNghggB5vFCpdt6GMZdMg",
  "key23": "oPD2HxqoEE98kezj7knPV4Ue5TzgkD8af6ZXumsKKBZKJV1iokVaHTn3z3J4fqkM8AaE2oggoBwSeshQGtWNzMe",
  "key24": "2MDgLPP5byU3hieJPqjzfg3nXjHsX1MEqGDmAiuyqunNiEL51yJ9nAExFkUhVbuhUJoEBTkMFjJq3VNvAKeiFVGP",
  "key25": "4XHSs6BnG4EUq9FCeuZoUZ7vBNVraeP1qPrFi6piozPDyb6jTQehPTsdxfdMgHYe9b1awJaXHQgmHEzd3AjUzAU3",
  "key26": "qyomgPaQwoewJRwWNLWR4MEtU5f7GiFiduAa5oNgKwcuoVQFh8vSJTcgvpEPJPkLGFsnbQYVKDcBxp9UW89ayze",
  "key27": "4DBSz8YKSxWdXD1nxW4uRxwvGPsJga477VMSMzvusRKQpaQx9r1qnLXwtoPmFGXjDNK3TjBtutsxr1dpfPaqGnd9"
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
