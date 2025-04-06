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
    "3E2gQbenYZtwrpR219TruHcBoeRtcihuovTbeYQ2r2yX1tYvUDovvQoMu3swp7aBVgDELG8U29BUGR8icDP96smp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44FfS4QyxTYFN6ke3FS3LHYerU9DzZEfagLFTmpCjMcMgRjeGGzUiNMhEC33aNCDE4pEH79yF8tUZJkMxZNtWYVz",
  "key1": "3aSSUvjxuEWB8HfAjFL2oT8Kz49mZG6kSzS6ZAPbPT27463y11XEjEpkX5YrMENvhjicTG1dNyUfn7srzwJY9bLb",
  "key2": "2Z3Mz6eCXBVkRFQ8psMkx12eGyPqiU7hf1d8xroG9cCy7aUPXm2KcNxv6Fv7WQcjijr6XUVGGXFaLc6dpbqZfkEX",
  "key3": "63xXNAZLRqjGrGDBQCWZrzozZV2UuKjdA3adZi4kcoEuyQ7P8v6TLw9SEWyxJ84hpCkgYoMagySSmzry3cuMUv5G",
  "key4": "3qifrpUr9QaoNqD1JLErxK9dXzaAiCWxgwGfUhxvS21cqKyDztNMBV7qgQmevmn8QaCjbU5vhYfJpcseyW9sLUCU",
  "key5": "5ZXdsykye3sTL5fwtESvFPuvqnxMLfUuN2Y92Viiq5E6WWa7RA2GJMVZhVthnAXsVJzoQVLbBECyKeKjCL8oUH8F",
  "key6": "4xGxcUCb4swW4GEFZ6GFyz83J3qY66YAJu8BQ1AFGP1fJ7eU7pBs6H373dsQhFaREg3iYGsEeKARiETHnUY18by",
  "key7": "44ztUngsxkaqvyBHX4BTB2RwTHvgLn84DHBo7E1seR9CRBq3RFrPkR9cNKwgUcFqwnKTMUj4RtuSwktP4mAyYUi8",
  "key8": "2kfbBHyRU8dcTBksGKqXNLN6L82Mvd8DFs95rCbbCdYKmTP2Nm7CKaEqsMJ5ZAPgckf2n5hh9gxYu2SHqArP1WhY",
  "key9": "3ADMtAjZe59w3tFpmB3MRwZHn6ExreG6a27yatVNomCvJfroQ5cq9WQwzPYuvTLZLt4gEdqXiahRnxUdXTzZwNxQ",
  "key10": "hdwQZUgMdCDUKsnywUS4UmhwugACz7UkqX9Z7MpAjuzuMEmpF8UcX2tFMYoEqquDVUEu6Kway9uWBXTL7ZUKVuA",
  "key11": "3fi9aDtDaHz9FDXghBqXabPRBJGhi1K58sYxtybYnNSytMpcC8SdLekNkXg7NZRuzuD6JwzRAL62pKpHUih76anN",
  "key12": "3MLJ1STZrJKb4oqsuZYQnAemTSGRqj2kx8A11EuJskDwkPt5YxSoD4Vg6pTz85nisWsdeoBK1Yie6nUjMXVyfxvS",
  "key13": "3TDDLkmXub1mUzXwj5AJKHhYG32M77QtZZJcQMgWbDEymTumdAaQQch5ZWheWw38eDDUDVyriHBqfGquL5EThQT8",
  "key14": "2BJ4Cy9B1nxBArBYrhz6HL8nRmzpzqeNgqZDSXyFW61wFZoyzsU57XBVRN5ACFwiLf8VCuBjBRumUjtT1Rpq44bu",
  "key15": "2mGhBVMFWp2onAtKG9TUAwtrwHwpZwFSuc2JSHQmTXvQs8hTzba6UP5KxJTGnYfRU6Q3AqNZPwXB4urmBeGvdFEB",
  "key16": "5pcmQK86pM3Aom9sj3B4qu23Yeo1WLNaAsTzerTkQogFxyEkZbxxQQGRYw544bD4jQkvuCWpN3pVCyUBFzmWACWH",
  "key17": "hTRzCYWzU4yz9S3gaQjFMR1ajqvsskDPXf67kFD916G1wVUFXRxuqnZ4RiwJZZXNvRt8cyH9ta8SC8sw2NeL8qJ",
  "key18": "2Sp7LdDhGWTj55u3pBY2j44hGG9euwdM1qYGbsk5uRvdzk2pT2RHRFJYedeQWAhrqGUnH7UnyrbqMWBn2k2QnvC3",
  "key19": "3HKMyCvmocJCtMuAZFRsjP84URxVHBmJspSxuoXvoSdSMSiQdYEb7Vh49w9dkN3gtDgdFH2LS4Fa7mMAEn8nMDZ7",
  "key20": "2jqzzwQicvHvK8aNLc4wMa1NZNKoA31V1EZaUisRuZ4qNYubjmZD9tg3UphLt26QrXCJkn5WWHC9Fq85WCvvomoR",
  "key21": "5rvPDV9J2tYCHE5861xtCyxuMdyn4yfGMzqtg2HwGucEJbdSP9dM6JVQNnZYmBbZKMzuv7iCuNLo6KZQfPr2EsG9",
  "key22": "5T1movMDgxhrbYK3zsdnmooEF5qnQj7PytqaW3kEeZ4r1XTMnnjptz28Eyj3duQ8LUqGccfXJEk2gRTHiYUE1b3W",
  "key23": "5aiHeq4BcfCBBC3Yyy1nN7uvFnpnjeHxNH2LUzEuiv9PXzZH7CHp1xABZDPa7MnWFNBv2yH3xCXWiEDjWqxGpPrN",
  "key24": "3psU8vVYnBJoyXBwbZxp3ww7hGHk8uo9gScPascUnSABYQwLmMJv394PDcf2bKS2H4Bx4bEfWuhkfEp7dpYoehEm",
  "key25": "5u8NR18nsuxfQawc9MrGeTchQT19uAovXqbUyenzy81LMjnmksA8eQ4eWuNs9gCVuGEKW7JZojZFX9g1U4BPQEAv",
  "key26": "5tsFUk4jngvBUeSffKpauDA4cg6EYTtuVMfW17VCD1sKJhNrUPA9ovrBp5LqGwgjb7AuH4tnMk1njRPAEQgbed6P",
  "key27": "3X15VmVv11hAXtFwY1VuZ4huGpBfkRHQW5tivDCEU343EHSqqkAQtuSZDpwGA4ryAu9ERZMHbETyB9Gd69kzUYem",
  "key28": "2g124drumpFRwtCR6EBmUQcV8ebcZJc3wkCqTiYgUXSi1gvi2iagQRcDFEDK7PAfafC8HkuKwbTk7oj4gCrm2NQ9",
  "key29": "2vc5AEdVcQiJVcdEJ7hPb9ZKLFAjcQ6BTP6hmuGDQNeb69pLiqXEYAniWwi8GW5HTDRZumzm9Gy5hzNLuSMKJWwA",
  "key30": "2BDNJMpijWRBvUj8wNU6rQV6WkSMp5xciiF1oqEzRhzwPuooxgwVgN9xs1sfFD4QBsS24CDZd7MGrby5QkE7aquJ",
  "key31": "2meKHv1w3Uq7HKMJ3xn3StT3CSohfPru8kKgQy3RryF1hZLTP8wYgF5T6ZvnXz7h4u3oR5DceABtPybugCxSN4Zu",
  "key32": "528Fiphkv3zeMR37N1iAwAqty3VRzFYVLCRPP26Ndjq3KnSDhtzJLRbcR4Fo3RD56nKfZyRgyJgUiLgRz6FzfyiY",
  "key33": "53iSK8ogHN8KsaLCQbkpZK9QMQNRYHws8AGTsFhRzHkCHNgkrM9q5XtCg45vLBAu6yYVqumSnDYQy2gaABmCvh9i"
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
