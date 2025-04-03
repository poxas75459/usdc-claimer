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
    "4hScMDznNFaph9hnrnvoxZkdPKbxjEEeCDaPGucgmAPjT6xdXn3dYoEbj4xKDgSW7fNYqyBdsZp3usrReeUYsyg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tS3QkWQgFmKT1CRub8JBYKYvHbZgUiozW6JKRW9yi8SirpEHF2J1ZAGcVrSjbVPwjZCVvBZ2wuw7VeyccpzDEGv",
  "key1": "5W97edeYf3KWyK4NuDhq2AGnZtxkzqKabDa4c7J57Nj6jbbcUUiyBw3ogK7rDuYmBaPq481YRDT8y5WUySsdz9xU",
  "key2": "9Po5EvB4tmQk1a9B5v87cHiT6y6C8biKARKy74Qn7AKDQ53umbkKxTUjdF1Y68j6i2dk97X1NwQbFr7GxMNMhzC",
  "key3": "4SUMpmgAGUnANbwBGAScW1qJuaeYNxZCzAikqit2qqtS2SAUmyhqo8vAqEACDmnUWYyCRbxyCzTSpkVHaPJnuxPv",
  "key4": "2pVrJFaJeKF5DFrWGNyW5hux4a3DtdZaNg2Gd9agPVpnHPR7WGApqRGdwg3qxU6us6Rb5L68a2QdQzoUTL2nFbyH",
  "key5": "2N5AjdWbJDANNfbJoMz82WXepuV1eVci7NbYQERsphKCe6AQ7XbVg2pDG2SWJ9wQdPP7q5DFKVhw2AX1iQDVFNof",
  "key6": "2EBrXnSjyagGMR3xbQJrwbCrW997tXrmNCgBe9zSj7qCdL6kovXXHDXCNK2DmJdiY2BK2XYGwrwotJxh3pJ1L83P",
  "key7": "4oUaUuVpmZSTdVrEkJ7uwQfpvXkhnrZqKSuJnR9gFUjFiFZea7ZxUS5Cdr5LMDVkdSyY34FhJjh3eLzmSuDhhcsr",
  "key8": "4cTxHmG2BtjiX3dupDfuigLD8pqPXn67RCQL7HWAkQ4iMccZFGhQiSbtZmpHaym6YYFHf4TXWTBs1Xph8YeD8Te3",
  "key9": "5P4WKchWoGmsVB9uPsbBBZEWEhhTSHFPLZCCjuXFD2JNrU4z2jY4k8rMJGh2xV4hbzeVzpswHrHE3BSRrfy4XtcZ",
  "key10": "4YcSLU66LPFAew22fWX6fmZDXNCmVHUv8m4jj145fw6eLHe6jg5QSitrX8i7CsPn3BTLyGYRWxWs8bftSYVrofRq",
  "key11": "MJuTRwva5L5SyzH2McrdcmVa7UzqKvKT64QdrErYEPV3fMyaseoKPz5o43wPkg6feAmjp2hVYBwYgYQapqLYFjr",
  "key12": "351vhYgcnozDnkbZkLgZms8i6qGFMxMwdUjfWjprJ1GLQM1tgJC5T9Ss1TgKvxpSHH5CtvBuqT6hcvWRRD6rh3th",
  "key13": "3zhsHsnQzuTnAh8MM4osVtWrjhmDH9W2EoJDfwRrPxPZE7WhDGXsTgCt1sAz9LE8tBM75oHLfy5hwqwv3oJjvk58",
  "key14": "DprXBex3J3moAzWRNFZDomJruzjQsPXQ2p1hgrQvPMHsLRwPZiicj8pvi5V2HAKeExG4ef4JsL3FsgMAzsHSG81",
  "key15": "2Ao9VAKDLf41hK4a7jh3wVReT2rL7akvm2HCkNgwenfWyLAyC3fuXXS9zSMMQXGtXG86CbbAMDCvfCoRjWz3ncKd",
  "key16": "2SwGo5ymEkkzijFRkFXz4DN5Nni1dgiuZDgRZam3c4VCffNsBRSq2MZCaKoxwzZf3fm1MRAbKCVWaryki6ttV2rj",
  "key17": "RCW1xSuQy7UZLSrCzNHCMdtYhDb3Y1SiJn8tcuJoRYGd67gLMnjahTTjTqdKjirX3YxVSVEJFqGWRZ7mBGq9Wg5",
  "key18": "3eDTzw2YgsaMSaHM2KaK7qof8AZskgeaiPv1cJcYTxYRXxXsRn3RbJKiXmPe9E2M9YLhTqa4vACTh2hAjHwZpqXJ",
  "key19": "2gva9XuG84jFHabLStgXhTfpKfiefXEG1eF6FXnYDYST5cRedbARMvsVQDiBS2xNydr2zksdoMsexzEsGjUVNCVo",
  "key20": "RvBmb6RWwNUqVHhTtH7mMicBR3Td5KsvxqERMabcctnimenKKjVacWwybCXQUKCP8jNUKoH3YRKYgvmMnmcR1c3",
  "key21": "5UV5FQaLY1fs74ffzNvyyEjAtziWPfFt8QThGAyNinLtdzs41cfgjiH37ramfaRoAxAnzrFtaiA2kVZMVe5tXTED",
  "key22": "5iLz1vvCTPHQnZEf8gWLdwd25HK3W1GQKDSwEqAK5r36RonoduQRYYhkDtYHyRksmhZ3mhgRYevqLYLVm7gSNMh3",
  "key23": "YCEkP7xvDAvsNrpMSoFbVfUCsXkN94B3E1wcEinFA7m87jSiaxURoBB5rXZUUuagxjWBMZedUv1Pmkwh3RbjzqG",
  "key24": "3EsBMAu24XEEgf5vFKBtUifffUCm3ptQh5ibQcSyQQj7jj3ATknFwDx7uugWzk2Qzk3iFw7kXsyVCM8ncAE438Zu",
  "key25": "36R147vfhmXXabXXkbVi6hmBENvoxaFDuBFYxJtzxuzpBUko2BM4Y2Kv1JGj46nQq1Nw1vEJWMcgHUAnNkZWFmyW",
  "key26": "41hZdJZQpnRSebH1QktcwNUXxpUmn7Y3YQ6gU4uLpEEj9bjaBtdLqCfGx5UZHduHHhVZSHXyTU9ZHrS5xo3Q8VPT",
  "key27": "3yaRSSn8YWZtnKETfE9RagNmLKCrDXWxvnBFRFsHxXm9UuhoRwdwqcJQSTVGonm121cmVW4Jq7ci8B5Cbs7mwBpT",
  "key28": "3KCNcSwLZV3bYWanyYaGTApCjCp7A9pFngXJi7e7BcRvQBkx4zbACDoYG4xqNE6LE32unsB8zvxKJ4zHoc4ZgGok",
  "key29": "3TCtsgPJH9Y1MeYPr5SrSS7Hf5X5jMHcM8j5o4Zax5xVih3muxzCV557YfpLR27YvAmAJSPEGv42f7bJ1xzLedFz",
  "key30": "2Gv1YCBsY4tf4ByA3S7khWmDo313HAdadJGw9vgrTQELkAEXG9xPjTvo9gpZzw7bB7bWYoyHW2bcppXcecfw8wJc",
  "key31": "65ztJhKwBNRWLWvtbRJuBQRpScdmrWxGoys2N8D18ckvgZfMn517UWQyc1CsfCqAWYUa2aZ6Z3SNLSPydykziJEC",
  "key32": "5zbfrewnM36YiVp6mrHnQiHmqsVVg2eHtNUpCpNGjLmg6pDykJybX5w4P2AvbMZ4tgzgrdAo2gUDEnMP2Eq9EU8P",
  "key33": "4oLTxztwuFW9TdxeZ5bM3NYA7pFYFUu6whiUJEN7xvBHKhSrVphCHQdJinoV1h6E8EGBPyWj44a6nEjPymmgqPva",
  "key34": "3q4GW3vN14drM1TzeCY9tTBJV2RQhGSnoTEhMv3P5Agc1URmsHrjvBhzfqW76JW45NKcoJooUHVPQ2SKjCfzcAo6"
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
