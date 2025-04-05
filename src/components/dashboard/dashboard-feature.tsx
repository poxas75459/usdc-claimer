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
    "53eameKUmuN1Kd3f7St6ZAuv4gbcQiWHXHXWk5HY61keTangWSRAi4k1dZAmvBH9dWAqANC3br2Xrpt7TH5WmNdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZY1N4X9oVABqBBL97Zkg4jzWte7fNzKiJEnyKsLjYBx6WCAZHYA3CkPsUV1Y1avVZYL9vPDjQ8F4HDaXG8Pivd",
  "key1": "26smkfv9CZDULD9GGgsr6EYBWBkNPs9GWAFhpuxH3dgEki9EVa2H9EttVxzp58MV31LxnztV9XM1kKEC8WPXB6UE",
  "key2": "3pQ3TnQ2EabhB8pFSJbxC1PSZ9aCRZrHV6mjVe84FB6qmoJiGgffMMWizEqjaAppdprXNQRaimYvkrKVfqcp35Vx",
  "key3": "i5U7H6qC3E9JjXcTt5AX7ote2NPA959WPwJb3dgTVsUYAFuhBggA44ZKv3MB3ZppkT3vHFwFUNcYgRyytqawSof",
  "key4": "5vqLpY4kWLzDTpSdoWPWxV5PKZUDrcpbqF2ZUGvodG1QnZyZaRG3BpQrKe1VGyjYsX91Sxq5QjqEYSTZ7zapPpFx",
  "key5": "42zLW33EQCC2cFXtwhxcEKQZWRxnCYiTyb6rE8uto4j6Z4Tsoo2x4vMZEPcrDzNvGLUv2YuSpq2fXWJEJH7aG3cg",
  "key6": "t92yMMUih4Kr3Z2h4ViCxJ6tYDSAX1MntZMap3j6Hvv6CqrefyX7iTBW5S3YzSKA6SFhyizgoJjak13j82g27qp",
  "key7": "48XCedTHFfPFFfAPuBwAXWbAAae3UXuZQin7Z2AusUHBtQBWuY9jrTfFVSuWFXicTxxCAYiagx5cfX5JvEiQqJ6N",
  "key8": "4NgDNzTdnGA16shUcrnNKpDSSvpWPhoBkBA4NFPYF5S4egg8Afm3CfSvoGDQNrqaCAxxJhRGDR5paTnmjiHMW8UY",
  "key9": "3dGP4m9JyLCiLUDjk58BSs45AAKs7jp5ufpFVWXWrj1FumUALPvrQaMjwroGNxVxkiBfCBofwBbTYtQQ57KkTeWg",
  "key10": "64CT3txHzzJaimVtDpknxqiVsoaGDdRyrHQ3JoDHzC8KT2EpAmy7udMwmWwBWK7TkupT6YvTrtdXsar4KjAWkWYu",
  "key11": "3GoGjqpL359fC2maoPAfn7K3izrobqgTZQ7gczvoSZhypCAt5eto5PUqb594bvV8b5gtk8sdQMbZacf9z7Gu3W1D",
  "key12": "fpW2VGWrnprAJFJxciR6asNMYaHWsraErvXvU3QP5bi3iYH2nBx95iLY79EYjAERifXkAYgit3B5H7idj9DpUVW",
  "key13": "3xkZzDwpyRvwNGucwAjGbED9evwt8AnLWAxg4DoQNo9RdfpfJqkf2uLkneTxgymDADZNEg3YCS9wQrpJmoxgbKEn",
  "key14": "3jiQapS4JFMdWTApCsaEk3i2Wb8xew52DKK3iPGcMMbosd17eA4UDKpuJLQFDn7YH8enR7ynMQ7hoNWLzJFCsEyq",
  "key15": "YPNmVifYPEESkZYMagRDEYmzhk4oRuSUQTpQfkf6Jk7M7SCgZhRA2hfkiB5hGuZyP9UC2NqgNt3wgQ1qrZKAnKg",
  "key16": "4JYUdQoRmM6dM8Kh6ixG8LdCp9eq4NW3FmsWP8PQ7CTjxmVPSPenroPLtPAd9bz5MeuTkii7JxKPp2qKUPegXxjZ",
  "key17": "2k1PSdpMUNSQxk1NBSXNFnG6qGyZKeesp1NYcTrFL46rvSMmBnF9BAao2MJREe55Q4oxSdVD8mYTk8mdaoz8jj4T",
  "key18": "3Ux9D4p1YwwfLNVk8sGKEWm6ewHZEexon4u3BpfYszDh8R68QHWfB7uaYTeS94qxTRbuSbPWTLGfjhnYZQFL5hnN",
  "key19": "3xFeSuVcwq4Cvm5jT56UgKzqn98tUqR5AAYRiiivnB28mTZfa7pVp9tJGFHCmPeVDgrjYp5Awe6cPWP6EjaBvjm5",
  "key20": "Mv67BxCdUuqyzabcnKFLTtTCeiMaARmEaFzCjRk6n5jyLpVRe18PbukPpMm5ju2Tk7g5APPDeYA58h77QkFZihd",
  "key21": "5uqW2bKP16vEMcmdUj9wfDwsARzrvAz9JyfLCJDjEdEokyByUxFtNNm9SghNiF6wqwYnGsWKjWLBLTDmrGSNTeQa",
  "key22": "2pkHUXfBC82oQZrDYnfUwibcPMacepaAnrkGhZpBUEMv93esaNNW8NmWE2xMB3ZRPReZ5ufTjSn3zf5eqTRwfyZX",
  "key23": "5G9zQeCK4pHkk5ANkjtunVP9QWP3R9sQuWE8hKNSpZUtGxjDWXdvE4sJAHzvDQugD3Y9nmaoVX1RfBnXwJMzAxLh",
  "key24": "2TBFo5MtZMJYTgVnuJokVq9xqhqJCHwgkpv7RSNQ831SXvwSKrcDgY52RG6QJBVVoaVMKK7LvAdiZUAVhLX9K6uJ",
  "key25": "jqzeLktcXuD4BTposz6fp85EpyzoQt6MFYww5D6EJwN9cFBjm2tAYGU8rsa5VLFvtocb9FjF4Yuh3TkPATAG6hX",
  "key26": "5pmYrJ5TiC3BFZbW9okTVCLM9vNidWZAGvy8BqNVdaR8j25LRF6ZChxxcGX6ZduxYagtVfXzHAtBkeu7MTaZeJ9W",
  "key27": "48nvaTP1aZuZSsgC5mKbqQNQrcytBb52V8SftSLHdD2qL8M96EbjpJjBPisqnbxbfN1gbMbYi8PUXhYBmZzcwfha",
  "key28": "4XVGvobu6D9Upa984zP2pxJgB1voUEPc3HQfPWvMBfzkmAaqvqBJCirYQoGfF8wXeGgakXWKFveAqPF2crMeBkUC",
  "key29": "7MAWA93tCL5RWvv4RANXM76KDkyxYqk6WeQbpg8RxESyDVbjYeSmc2ujGGnRC2ADVABA4NKtb3Us4J667dWkyMZ",
  "key30": "3wpQhU2HcSf9CyTX6XJH9CmSBFC6LrbZu59mtLA2nFfXrJJMxMhqDHgK7N6LKVG9Mb1RGuEFJG7SmC5CmYNJ9giy",
  "key31": "5PcLw5pRxBub7ZrMfeUJSzMNMwdWDsD8QuKRJDqo6kyBViE1spPU4yZBa4HgGaWprwiv9MfNJCH2hYWXvFgo3Q2w",
  "key32": "4Twm75qS6so9RJgbHmpB32AqjXpAfg619VAZ7opo93a37SMqBUWuXkH1skdLfA4dEpEnQgQLsHAu671svAV1rNY5",
  "key33": "3vSKL554RH6ejnC9Qe8pKsgd6ByLduTKuAAYsbPmV1LbhQdkMWD99SHrYxMap4kvYm2mLPSR1m4y2XgfFHXtZsE8",
  "key34": "4VUTv7aRw4hsUL4oZHSghjcCdQNuKqXBm87W9EouSznubdfEcCWL11wothFoUMimR4EYv3MLfQoxmVhf7p8c54Cj",
  "key35": "P97iQhx7XSywkFtVrM4fbo747RZhop9oeAedFJGVkHa6QCHWdzLwK9sEcdPpzUvaHmPCfkmK9Ha28pGJ3rsiy5f",
  "key36": "9Hsj7C6DfPMDm8p6eZc8w7DSgGMJrXcAjfffNPpwpLCmXPADzLpsQ5eye3YCSwUMV7oXK2ckJiSuRx5EnRkS1A5",
  "key37": "5Si2ck5aZ99Lh2XYHTmycziHfYEQh1CvFWiZwm9hiu4KxbmoqCgwFtNYACAxprW6TjP8yFe3BBhtMLfHxeMGWgGZ",
  "key38": "5dAPBbddRoZbLEjKmR7tkxNrZE78dGwHXcMRoKW6AJjkrjf5LRvpeBT573haiaCv6CmUoGeffRyAmAHy3bM5WRk",
  "key39": "9dCAXSihW4djr6BqbJxhQWeExaQAoYS53h4xTGsz5aCJXZUs51EWLMrxCqSTwKZizKe6Fu5HCHMdubQUedzwv2f",
  "key40": "2dKwUu7aUgENcufJhfMmAVA3nKjnZXYxocpydYAEtSynznRn6JkpYZNNCwtMDJ7ZytU2Aqx17c6RTJAefWJqfvzc",
  "key41": "4vYRSssQ62mrBsM9DrRifWu4ykWhA4yvNUJmDVUjkWoqCqpLGEbDLo9DDWYYQ4DCtRsgrbsaaSkL12DTnV7pgeH8",
  "key42": "2G3CKuTA1sBjXPPpnkh768oN8bt6k7zeVcBskuPf5zcDH9L6MRyxaBH7NnqnqhXsy9T66j6vS26XbHg4Y7QiiZKp",
  "key43": "3NtSaTdc95uVgL7DHRJtihv72TFpG2gsZUPAMMgve2Y3nqDSqUpQSQoBLF4L3NvSmPrWPW1BBwQpWAGNKv6xxx83",
  "key44": "YwjRxMB56myCbsANmk6W1F3MDby7pin39pETnjhxddVsSYvaYog1h5ES1USgYB9nR182he4yWqvLyU7ngBBoGCx",
  "key45": "ushqg4cmAZe9NgDa76LTLM83RCiGdJjR6RvEySHdFyajqSxaMSanv4uCFdc61hAFqNRFGrH7CmLqqfGZgpmr53k",
  "key46": "5vp32871UvkUnJEGwWftP5r2aUadFrAcoJbdV1J88TK72bbhY82Ehse3VY3YkkKcUHyjDU3EmpNP3jUqdsDRhSpm",
  "key47": "5rxkddVMAnuXmb8nSWTiVi9shkLZskWTJKQNDMcxjw3XbJFkEgWyF2Pc1CbJuodxKkiQvZLipDUePVfoumbYiGAA"
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
