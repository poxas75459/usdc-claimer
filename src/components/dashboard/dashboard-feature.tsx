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
    "5SNc85Zi2WxtSwKTEtAzDer4f9V8zLH5AxHnJwPERHodnXBsDKUcrH5CqbUMS7syeGHq5Eyj7J1mhHy3B18cA5VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ysyv9cYd5jyRHofFvDadokXqfJYmqsoYHE4FZiRzddJrQfQN2Gb35CiGJupfJQyfrnF2JghN7uKYQfpkwdbL8H",
  "key1": "4bHZpPbVqWAmkSie5dkZkYJf4YjHmRHbC8JRQ7ihnYV6Hk5QWsFKghBTfkvTPrvWqbNZH2MfcsxEBRZq8AD9qD8E",
  "key2": "4oHGmB1Hx9ifhNU2DzGJR8tqgc6y118ieisC25pFXMNXWZNx7Tqxti1uvx3VkuX6VqbDDbogmp6jTD6z89aWALNu",
  "key3": "2VknY5V9BcZEBBwE6UFRAnTaU5WruYMx4PUzNbVacdFSdUfy95Mz6RveNtjMrTJ2H8DfwjLZwZNLyXQfFmRk2vhx",
  "key4": "WtQAyKbsEtmYmxtR6txtoMNBQEyKJhWsjQCybJKKcHtC3gXn1cMy2WYkGSySdtfRvhYvUgC1d5p7ZmAQz6Afrkq",
  "key5": "4X22JQxYnrnAy5NoAJyR26bQetoWpVJfsXffFPofSR8ukckkLAt2PVzWzHRwtAheqNq6mAocdaxfiEZWM1J7ExyY",
  "key6": "jqLRqeQFkw9WfzkBSAks1JKtfMLxXCTz3UAbhsyqdTHQi7ngcfePgif8EX2hMvDTjbDVmHzFmFSQrxuHCGAbvZj",
  "key7": "64Hy173KUrF3GGUsyBR9cL83sCHFDw2s1R6subBY6df9a24aS5kA4fAswLgWDYm5erhKDoLFZTiRm5G7GBy1tpk9",
  "key8": "3bMTYYSdDc2vX3iA4sKpUXJnjNCJt1D3N3Uja5PvNkNpJsJgLwHPRCmCu596kYXcir5hA8mU22k9fNRAZKJiPJWt",
  "key9": "G7bP6cyPxzri84tQEaS7UrtCSVFjbfZhrJz91TvQhANwzA8iTYmYpAnzrqMdw23xUorAvzD5x6Ws39GsWfcRqb7",
  "key10": "4K97EPsSkyGRDE4KYg2NoiaBYaS5TtPyWZefYwHnmNDrbd2ocCwmWGoexy5stgg5EYY36MxP5b4xUaDiyTSmH6Rz",
  "key11": "3ruAQAGw2cUzCW36xeyQ6Joohvwbh5hk5NpdAUEGb8VmnMfDxmez1XAoCrdEjgdYrydzdY1nfRkUoqYkgmVvm15r",
  "key12": "5HN73S88fAoAyLzPymZtRRkjW4gXQvgv83uCMd3wBFuN4BnAtFEAG6TS3PXNdvt65uDDSwcFy1XWpdoL2EWcoXHG",
  "key13": "32AW45rAWV3BkRgLayhFk5jfdYj8o1QbDCri7n9NSZedLt4wdJwqQAA7RiFKS1kNMMJNzihwoAcEkft1rTcJmKJb",
  "key14": "22t3Fy7gYnhQXy2y3pABkfR6WqfWzTjWDVDTWoDn3zEimbh2LwVos2Q7xCUoAcrg64XuYaREVpa9Xvz6hex2GtUj",
  "key15": "46uyhPPHo6kLoeKGit7AuYU3U968noeTRGC2fnDznw7fvkV5zKyKUZFqXiNEZf5i1ek6PJaLxC5cNcngMkM32qg6",
  "key16": "R4TDgYxVc5oCLJWxxmQWYoY2aUnGsfgrEhuZFfdEYeqKVoRgs8T83egDFhtGppqbfr2J4vDJUcmXgTE88ZoHsfC",
  "key17": "51oN5eKRjXww6VoTLhSQ4G5wiqwiDZVRGEwa3sKn2apq26XoX2smpMLWsG4yFNuQewcfixMDSxUppJVcu6tBbqm7",
  "key18": "27npSFF3AkZBN7bETDyyXyVnAzthBh4Hfey3i5bcF7ohsAukrryin8zeYLc4WfjdkGLqjSQrpA5QqNEQCKuCq5rm",
  "key19": "eeShbBfBuCCYtrJuup7EnVgieHJ1XQdzR17ffkq6w4AT2kAz4cgUEachMak6mNkm1NCCs12sXnMWGUeDErAjkC3",
  "key20": "34p37ZdS43SFz8X4jupBtBsa1BBxJMtQMrsbTegXoRJMgSdd29zpUDUau1hyoJVX7Spwx27Y7d89gS2PaumSHmob",
  "key21": "3SDRebfASUM8EE9FE6XccKDmkPsEk59Pf4yNEgxmNTHwA244UNsLm638hjxwwc8fA9aE1sjmwKNahej9gYBMisGX",
  "key22": "4JHCghmo9xDUtdcRR6JspLBsefX16Gmf46wVPpB8gJ4BPNCCgPm6fz2JXoj2NwqP9StRGuvZ76cmNpYRbGU6A8V2",
  "key23": "3TzMz9JUALsGEyvGztKRxoesSB5dKLsWjuRpTMisaKAKiu1Ur3ZrQw376ZznxYMb8WPWxNAY7Lz2pz7LgLLC2ojr",
  "key24": "5AxibndjdYEkUhe3nGKQUSewL6NuwDWZtVdgSgHTw5T7ANr49ZgqZLM58Q942QpNJANsQm2n7rY34K65Dfw71ZpM",
  "key25": "5FenYwKrU4ToMHZ6CE1BjKw8tkfkBb5JJo3qExn8VBwjEJMEqe6FcViTQtqrurUh5zz7RRjKnaBfrwszpYHHeSC9",
  "key26": "4utDZUGyqLZt5N4m3oDh2tqXDvULFbmo8kjjaB53duRMedKN8YGpyvBEQKADXANaXYubbznuqXQrPDe6ALV8pMj5",
  "key27": "66swXvy6eHttwj7uAvP3yCYyTbNitwNBMsxkMAkrM166LZwYUiamcmv8QbXvf83KNd93c52Bzv838JA8K94sgfYi",
  "key28": "58a9ETktSs3j3WA4LAuKmYG5YMT2rLZ4ewfHj3hTskuQc5vZ8tTJNyz9BPs3i7v4S9SbFMgoD6TfM18ZSQAg8Fbt",
  "key29": "5dj9nj3YdNPApUZQ8vPTSDKn3EpK8p2rdjkKF6bcLefujd2kuEWwyym5SPEBjjicD5JyhPfivHcnA1oKacModBh",
  "key30": "5ww8fkrSo8tRsMngY3evqSsRRzFtWE1UAmTPxErE3jVVTfF6U42os3KxFXqoU1pAFSWSD8ozVAoTUY94de163qZe",
  "key31": "5pGR3DoTGUmHvzL1ADmBQ5Sw8Gvj8WPL86zGFSphMvDJXb8QMrNBsb7aupFSZVdmQVeHyew2XEoK7Pmd6LF8iwya",
  "key32": "61VWH7ouzAfTQN6ZhgAvSKjseFKfb5uGX2LXcNKX4Jo87n3EdaC6aZqMLBL7f8tYJHQcWg1AMZZCXj2MhMitfLrB",
  "key33": "4JXevDgwNWpUo859NUzg4XvzMRZbMA4XtZAyjpMUisY1qVohtSTzXKqbkPvRpHbE34EqcMEC3xhEPWCGEv24hGDZ",
  "key34": "2omhTZM5LLaREuPGxLBmRxNxzA8H3dzbnyGZG3KnETz7V667BNrMgsXd3JCTK8nZPU7TT3NHYPPg1qgnE3U6FUPv",
  "key35": "3TYkeSFi2sVQHxV1WQ25emFtTtX3SSKi22uKDDfk7xXd9gdPFxCQrJwaPQagGVC4175zxDTmJpTM7H9RTQke7pt7",
  "key36": "2Rr51jjJRXoCmgEd3oXmBNmmW9vWa8DohEB5Szjm45twHJeLJCZv8xJJRe7swcWRqSzZpsnRws3QanLyLCPh9f6B",
  "key37": "3getb26G6Jbn3MmgLgaA8YnFWRuwCezt1vwBs4p6kSGxtGfnTJ4bgdLmKMmQezKGXtfyWevhVB3eaZFHmT31duDF",
  "key38": "3cWYR7EVtJ8VruwGzkD9zbvGUtv8KTarKQz3nTr5wSH5rYkzuLgDkoHYdKDZasQLb8UKw1ghqAivcP6TjxYdG7UC",
  "key39": "4PYMToibxLqSBXejKPiqrHMym3S25D6iQuLmKKMSbwJwV85r7ZaZvmBwuRaVNh2Wxipx6y3H2FgPo3JHaLMifEHB",
  "key40": "59hPWKPX5xVcd9hJjrEeyPe49HXDfKweNnF39nf3fGi6CyCAG2ZPmnHuDe23Sx4kjMrjChdEUa1GLjYugb7dPTKm",
  "key41": "31AwvEhnhD9T2xzgamEZKbfzyqD54zYSUJVhMg87LoaiGLu4z5nf9uSYDSUBBnef5eB48eGWFAA6EhE8yEDLUeTT",
  "key42": "4nVSV6hWwyeNsXem9P7C12gjs8DBLbn8qA9Uhr5nUhvehNsacirqfrmbcVhkuCMrXSsHu1tG8rG5c8b1AKHDo1pT",
  "key43": "62XvpdWL4Ww3DTsa5Cpy3SPYzEJb9SRSYpexsxC48Uzi7LC2syRtEDqWwtAptKxiCXhybJxxxemnsk7oLGiVrqjb"
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
