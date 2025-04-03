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
    "2QmfoEbsMY11enK1KpzDPh5Xg6mnCdaYWbTBU3zRi9wATbHPUsr8JebgZTzvVgzwPxtzmQUcifSruj1bcXGdNt1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DpqL9ouvk2uPxShxRCy7N1MChNdubCjTf2n6mwBR36JyRDJMX6AgE2u3qWvHPUqA3i9D8xcd1LDCqUp69unLRQ",
  "key1": "44TWve66HpCtXTcvDsDtm1xvNvhtsUDKUQ1Z79b76481xjwCoKuht8H1andQkg84P8N5mCjE8K8TrVK1s49iWC3W",
  "key2": "53azbdSkNWF8fQV7uMhHkrynZ3UMF9J9tcpfzkS6TWerFaxxNDSWNKxpupbFtb51Q6igNTXPx5WASN9iHV4yHA7g",
  "key3": "3w13jDBidpxWu72vYEwPokTg4P4JyWvoMDetDH9Xk6Dj74oFcGoCLzjBA2T3U1zeS8y4Da6PxeBVkKxcwUFt6Bgr",
  "key4": "5qKtuvXXck2HtQvRt4StvoMsiSb9fvcvemNW77NXYpEXssAi1UTyGPuKof5dq1sXPD44snELK9nS1napTGQ9eWzf",
  "key5": "3y9QietryqEzsdytx1W6TLZRvrZ7yXMMCzcNbMqupFeBX6jaGsiDgGB675kdpgb8YM1GkiLNEx86BFkSnynYz534",
  "key6": "5NPUpMvAnGELvqAg9BZBzKQjMSEgxx9ajeoiUNx5SRfnLVGcq8evdavz5LVbcR3j4MffSe4hw5MSEeVxvJm2HNZN",
  "key7": "3VgBeNy6Zsg2aGzCY2EeqeiSm6JHd7UVty3VxnfJgs1MmAcDMVwbYVBgBRrzzz6gE8BcdHUo9uLLFE5TxVfH2R3E",
  "key8": "2aRQoUFfHesQFvq4S6WMh3M3HptUWDRZB3wKqdWuCufjPB2v6obPZmf6ZbrsDQL8R3Luw6G1v4dBGwRFb7gFgZdb",
  "key9": "673WJNuC38fryLmzvEk2gsKevKgMHXmf6vn351qZDwpZpSFFmJM8tUjaApqRZgJq6MZDwRdqe4ViTiMAVDzurMF2",
  "key10": "32BBEyyFQyv7FNi6dHi94xkvQ5FPrRaLGzF6fzrPuo31Yy6aU9zLi9UUuBVRY28nN8JGCjqeZCdNtF562XNgq2Xe",
  "key11": "51dxo2LeKCbsZuojQWiTyutv3warxtoxue17GvtzaoMy22GAWgcLXareZacvTfr4SENbNpR1ZuKAXsoXSpJFJaAM",
  "key12": "5XGEwHvf36d7ZVrpbFGEj2eeepeCKMRcBmXrbePksTX8FXASAjg6hRM1CfMxUT1MF6tT4o75q8HMwPMQCQsDaa8v",
  "key13": "3UPMx3KSUYoWVrkyqmFD8xycSYt5EUscLQ8ERrTaJLbbT2Lh2C8Vx2k37EXTH2ADt3QDQxfpXYFF13ZpSCmV2kNw",
  "key14": "4ZNHpr4TsecGrR8xHEeU3FJtnwQy5Sf1ubQkyXyXY4jz2i9sRsv6Pb3bDahFdE4iASsBJLF4vHxumX56a9WQaPaH",
  "key15": "4E4XLyJJwmkNi1r7HAFQhXsEFRLMYjmhe3Xcknmr1eq62hPrZBtrwfsRpA8Vk1VYwzRvBvTmCkMSeFYr5XRAs3Y9",
  "key16": "jBMb76sR5u5QxFpm9dKs2Sp7DZkkZvxoyhpVFzNju7mQyh4M6vNog8xNau1LjAZvwy28m3SV1mujYpYB2zcT4tz",
  "key17": "28LeE21R6VYJp7emdpS2SBAPfe9s6psQXXZwdYpzBruEpkyk1zU7Ad2XaFB4AeRF3BB6GHUpju2GqHSSRWfz6zTk",
  "key18": "23Q9zMKkJk8CoNaFsKXSbzA8H5BZJsaKXDHFcfxgb5qUzzSciSxg7R8ejEyLQvtKjrtQnJG8SYV9HibggmfbSMqy",
  "key19": "8YWGgqo6Cpz23UV146sAraRBFaE1mMF2ap715iSVDevNJa9b3dJkQawsygymrmcyKrnmBguULTSb9HoRHz98Laa",
  "key20": "4XhNVwEoAaAoggWDsbzyw3rZKXjV29uRY6ZBRfHrXfEXYcRCo7AMqRwrMpYAwcwBpDoupkinMNU1KJ8nhpE1AtpQ",
  "key21": "5T2hPEbwi9ZXGaog3gRAMN4jxZxXcxT5nzLeGM6gZ1B55by83y2hHGrPfNJ5aeRvrqRdtuYELoHTQnR7roSPCBCJ",
  "key22": "2LdFNEazkvHtr3oH7nc4bx9RY866Wmru1k9LfXHqrqU3mA5UsJZtfz3ucyneFButsg4DwkQgQPKYCoKUY8qRQRnY",
  "key23": "4ZAJkn57piy1jRfKK3ty4JGiZk9DJAjtKBpScUgM7aJARk4FD22XLbxPYkW1HCe9VYJXGGkjxu7KrCwEgR1uEvoH",
  "key24": "41fDNSV7muDEXFTSbW2FSntmcPjBgfDMsf6XVAbibEZ7C249MHXP8PewUzuwuKYteK9iMSknYqjj4pys8XNYLNSo",
  "key25": "NbjB4jQeYywkeXFChNwsGz4eVZBRVkbwpAj3Sryg7NC2CUnDQ6NLxR62HTec1XtqWnJBu3HiZQEF9Jm4CDUrmy5",
  "key26": "28QDMeVJPTzFrqQTHP4UYzpxSjSe8pwn4ZT7MHw43NSb74PFtsYioCDAs9GgAoLL9sxMLjkRAXEpgxCGggi4JE5f",
  "key27": "2eyWbHVb98fyBaebrpyhgNTMxqS4v6J5WBUFfwPwZB9SJTBVpXWKYNaTPN2NRNRsoJ2PMZVfpobkXEnMTJZY3WCu",
  "key28": "GocPA27AYHCWe9MqNwVRBGJVy9785WvmL34dRuZ2ZSomtnQsMmuThM1q2AiDQupjgdReb8oeu5PxPbwhRqrjCuR",
  "key29": "4woJWgN8Pu8FyAFgEnNhPiy7f91v5hSyyNfncaX19rZWB6rpqiUwzYsGZ62uxzKGwxBg4xEERmiLShg9tE4DrEND",
  "key30": "4sBaBTfJnaKgtjKAoShkU7eYP75wBCeWCSmiAAypThb7EhRMQpGf8YkU7piWQn7N8qzo6TUgdPSFTyrRSWc6m9yY",
  "key31": "47rJCy4kCbH5KwetzGVHPyBx4hgdtoY9Vn9AtzL33gnDVZXkorvYCjpB9M7kR7sx8bDCjjHqNX3B2NanN8bMdFnG",
  "key32": "2eZCxKpZvtS6MTPEicfGL1BjDBW5yDNzVKeUA6D7Ae78hMiojDF6P5wr22De7vMtQnSoZHvV6LGaqe2VKEGUqsrb",
  "key33": "2Ruz1t3m8Pgh3NwaH185HGwFoEFSPX8PCs2bqWbkSDTiWZ5AtoE8gfFzMVN7hhTDVEV65f4GttFRr3VjBKWXuWid",
  "key34": "5TZexhjhmHSF8gwxD7NBibTbwV89XbrcNrXaNF2Z4JiGgGnXVXi9Z9k9jKddoLovL5rqFJGLWZqLd5LexGfGs9Rb",
  "key35": "MF4EivEPkH1gZThvWjpNZx2wUeTWkQG5h6XcpoWondaRBiB8riW1jsLNXkQrxb6LCXJrgwYPNyAeauzqVY8935t",
  "key36": "iRm6WunkG9c5em7mvA3gqCj2rYjxUn1h8mREvFthvcgDu9wTKfmHM3Ury8eeZi3UTE62RvJWZjtKArov7CGbNsJ"
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
