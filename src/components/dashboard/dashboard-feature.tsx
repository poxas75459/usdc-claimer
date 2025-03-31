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
    "3EhVoB9xAcAA1fPpspH7R9nK986e4cXWEWWMQWgMQRTxzUe36mzQUCLo9vxA8KQvdtdgmkmTy7k2cbkjgWNFrugA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t72AJgd2R32u7CjqKZmHDyAonyE3oJp5pdq38upJQbPp5mgRWU7px7UwJkhnk9FgsrXC1tfKRzYdAUVrCBq1xdU",
  "key1": "3casNbAYRk2bmaCzoSFKZm55rEbz32YBsWbgKbv89ciQ7NsnnxLGfFTDRdWuecGdngXXgGWZZp3DmtpgMRaAhxLp",
  "key2": "5aGQmJQhgGc9bj8K6XJk16gadefAqoGnHao2ZUK6JtbH4BEhc3zzTZpHJLn6DaEJ5idkK3wJAnjUPV2cUxB3fqxk",
  "key3": "5sg8XxaGbst3kP57waYd6fpW4o4NBpYG16zgHH2hsFBBmFsNg6rkBYV9jmZRDrY8FAceuX7fEMhc3hqEBRYK5BMD",
  "key4": "4fhFbW1pL11rfGddCoDynsgrMGXVXEntfEK5pvBs6oQAJZCruERH8Q3oTEnBmXFMX4fdbDKZUW4oRor4c1DpBD3M",
  "key5": "wEBz9LuR2KSsyvGtYuAzfrTf2wZqC7fuh6Kfw3thsgSdRwsxB8BoEBp5yx5t4Boq6aD5EUY1rjsShHx3giHWmZN",
  "key6": "4M3yHDaoEj1AnPkjgWfWYEmykbRcFko2CCJiqBGPyRXDwTcp2HvCqCNi1FkyTeQfbUxJ5wfWTsvuNq2FAy7k2R8G",
  "key7": "4bUzz5S9u7jhqS6YaK5rPMYZZTGb4NeqzYWioKBFepqKn745sSZbgpC2EhN4nURqDfu8H5q5BeiqEFK9SvFxGJMo",
  "key8": "D4TsiTX13qtq4qPaT2yKxpRuLJuqLNfhwKPF8H2D2r6gh6JoTUyqCYfxY8KuWCegWkHYfB7JvFik2tdnihV1uQH",
  "key9": "5Ba7p9f1NyiB8t7QEPSKijK7iSGsJ9D35E1LV6Dp9tjq7XdEzLxETtDVhWW4Nphov1xYmWkUkb9pBXqAHCMWBTT1",
  "key10": "3kFZA7hHo8TocfQZzY1ta1U1Et9N56Byn8gk8mkgiSRb3GxyfpeinwEhAxUYJFCd7WHkuyvJEtHV4eNQwCgzcSCY",
  "key11": "4a4cem1JhC6G5kqoM7ySPDZYzPyuJRkYfLiR8c1dB5oTJhZrnGgJjMHYmUXmyEhrZmLkNihbN9GVcRGSd4aBtSdr",
  "key12": "2whW5bb2i41YvBg5YuXSRTK4dkihFyd7a8si1wJPJhGa5WpagdKZtFA7P1FQaf5q8SF1KZDz61ftAunrYw79z5qX",
  "key13": "5FNjjgTQ5oo9uEdsfzNCkDHb6ThAAqmcS9ihrQXL4eDWFnD51rCdPiEGBq87ajTG8VqfiUorSAnxxeKAxeMFz8mr",
  "key14": "4GwSENrhWrknxZYoFcotxYTvTtNQ3cZ6c9iW5TAaGS6SDLHdRjZYfEP7VqqHC2bht2sLZosCJxh9f1VZmNyJs4Mf",
  "key15": "5NEn4cRFo7faEteBboJLRWawNZvBm3NMjFUq86nVRCnfEkz1TgCtAyNNz9nhP23yAGchfQqgeQVAuip7Q6yYE3B8",
  "key16": "52L1bLen9zbGNtdc9n37WSdS2eagXyEkj3ArGMdkx1TwdixeYA9TFpsLinwhdwKepEcu6bijTdVde4cVSajaNp7J",
  "key17": "3hZxFAHHLbrH8Fwx3z3gsHTFqYmUWjX9s5c9LFuiufmrUWcSJTgNnfovPiM7Dmp7HtQF5L8Cuv4trviWbWfKrvzX",
  "key18": "WoTVsismXAgSjjrUKZ96aAFrebEkgFBatFvc7KzzFUE8hwWobyfABfm6Te7XSWqhQTPndFoLsK3Qo4TLBfv3Cqv",
  "key19": "2St6Uo7C9EMjec2VAup9ay6V9WyNMBbw3bfTxZqSNhHYNfvqXR9C66Axv1b34prm2PMnLaFFMK2PHxueNyTF7ujm",
  "key20": "4Epniqmw1SChF7e29RCjzVRHJmtTXEMZF1Cx5XUdyrYGEGEhLudZ9G6bL3VdQgNfTcVEtkwsPH17HMfnHdRQV1N8",
  "key21": "3BfRj2qqWTtNwYc7k9gX6FRdbcZCk4gCQuWMXWaQrHqKwXxUP537FyUGCuK9QMNQEZ9ugAPKHvox7Ww6EU5gT2sa",
  "key22": "2JwXuE43jVnzpGEZhvAC3RZMXjv2B2bHpHHRhupQh3LVGxJ6hQzCeKNV74dVxi7CfwsnzuxzsKib6PCALFnwFjJJ",
  "key23": "4Q2gamqNo8bKAZ55tBq3ohUTwpMF3JaQTXyco52RMgVBAMFehw3mmn3jME6bGdgCdCmUPiEchiNow5nAu6jJBKHC",
  "key24": "2Mnd2Fdz9k1vZ7XYgCJtPgtfV3kZ1eyYJcmLWQUcit4bhuvCLnFNPF3SdsdEj2xxCwzWt4BBEa8Pdhw7znyj5jiJ",
  "key25": "4HJ8dip41vSmBsFkspppUJnU8aqH94cksBnaBRrssmFzFCt3SC9zC2rqrVAE646zF7iaB83XUQgFymFMBsXjA185",
  "key26": "3N61DiDeJjms5fHNpNTf5Tba1B2RhKRRrm9Gd4dCoAkHL5kMf3KTqtSAjYy8BJv4PyEZTdTqw6VzoHVa7SdjJtKu",
  "key27": "5JB6SoN6DZbJ7Y2Vj67TEaJg3CfK3wUD3Bp56ypJg8KBtBM8zrMGKAGYoXjqLLWEVj1G5vZ26EmFq3RKkEk3TujJ",
  "key28": "4jXrdworgdHyy35PqeXnL4gMrEg4KKb3a8NnFZiV4sQTAnCeNpUZZr6QhQSrZDojGfuZ1J3gy3VVVDXDEReACPvL",
  "key29": "2gfaq59tCyFsJjYWepyvQmdZcdnhNjPXtTrYucita7mgjKRGCMzac6iPq9VT6ABZbywgv9RxfDWpqdQsTqbYARnd",
  "key30": "52q1ymparyyWQof3ynhMxmod5vwkJRRiCkyeUvUJS47EvhPSrGn3amNdVZSyMyxES4hpQ6G5hy3nPBtWMUxG1965",
  "key31": "3f5zF1gK1VXp2x6YfPT9MLmYXc1FNfAbx3LqNrEwAX8bkAC61R87xhxF4X3C4eHJqaP3TUXqpt3j4xi5Z73FuTsy",
  "key32": "2G7qMJJqn7uasYJBSERqvx3q3UtgwsqrJ8WDvbbAwjqS32Q8r7a1Gqb1VmtMAyrzPykS8CwXTixac9gX8UkWkaVq",
  "key33": "oYr3wnK6XHU7J6caf4xUzvs3eSkMYr5MbhPZQ6ftqMwum6xFLGc9ue8RWjq5Bt1TsbuKQVaWevK1PhNt8K4Sct7",
  "key34": "3JZLZxCDBZMYWhe4XeXaQqyePz8ZmKTJa9H6TqQmLWDhNtH2QymacvN8xQhWhrvjepy4FeTLhqh8iXbx18nFWLUn",
  "key35": "n8mrcPP436GYFq3pbyQAuEZA6S2ktCkD8YXbNeMQzfnttyQLQnwttvZ4NnYo8kJGBhi2WnxmvcJBjAUHrARoUed",
  "key36": "3wB2LYNQ9qLgVKQEqWSzmUCmh7SR6bgdRe2fdTB2PZsXQJRBaRo7x7o84pRTTETZJKdQQaNDaJTxSJuRFqd5K4xH",
  "key37": "46qzkiVSGunX8j1CmPYjgqAyzjtjGeynHqQwMWRYVxt5Jm9Uh3ZjhPoemioXWii7pPoyofEFMw7AWRm4kCbX6xFd",
  "key38": "4mowbq6iQ4kHWBjMkYjNvLpR3b5Z3T58rBaSATkbSh3b8AB8aFZmrNpnPw18p8LC28oZ9254wCFQXezGmK7iVWDv",
  "key39": "3vRf9MCbE656JYapo1gdLp2Rn1Yzx6N6YiC8BsrzV7yaFMEq6XtzmPLVWXoQupoeoSesfhvApkXQ3xSuyRRfMQi8",
  "key40": "27CcyUFXkNYL5BhSL1QS3Wu98L4mMzoccEnXPFk4rXf2vVnBbRFXBqeCg8vvKPRuLSX8JaLTpiEVFX1ZPFTdT8uw"
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
