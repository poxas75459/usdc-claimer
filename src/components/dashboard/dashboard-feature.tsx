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
    "3MoCRCnF2msKFoceaJVbYeBj7Q7UnW4d9ZwFfoMEEq5MxSKhTGKnhzJ4oqfbwc8CVa2Vz9F6CPL1HLZbd9ayRrXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mi3kwz8d2X3MEk7D3dPAuY5Ba4qbhzK5gnzVyR5Zg5anon6b8Lzs1fwfckqmtLnXZaQzXuUteaarYXV2wqUqpSn",
  "key1": "4ribRCg88tyZ7QxgbuYbjKbc7YdpR5ZjmLSnKcFJbFPwVHojx47fpVRFf7JiWyWfhyy5wiFVSzxAGu3sCy1FXnsR",
  "key2": "3HEDW2jo5TUqimvx94EW2WLPgR13jNrVeGeL6aoDduxf9AkWSRPiHNyp4CqQgdsrY8uwvufsZsQU1jgGccRMk41R",
  "key3": "255ifNSzGN8dMGmeYWsio8S5Sj5jdgLLPR8km8FQ7ERie8Rx4Kq5D66VWPGfFfyHveJ5UZBM8Nj2ZZE4M7a7jVpH",
  "key4": "2C14Q3oUXnn6cv7EK1Xxtr2hkgdodwmnGAM8NfvikGr9qdYyy5Ai2CYT5qHPVuwjj6t7iv1S9q9DZnDz3wr5ETmD",
  "key5": "58nUj3jLKJDDnSqi3gE7KZjbdt96j3kasP252cz2J3YRi4Fsbbe3LDwfpVpqooqcxLrUoKvpGWemt1Gum612iq3f",
  "key6": "4FgMBpMfszf5zsyq1WvoTZR3WBeiAuK8qhfj8Lp69gHCmPzu8yGkz6gzRhNeYjj7KCMKKtoNPoxTJqVrpPbUCw7o",
  "key7": "3CGaap4SfVTpcC45PJToMiFgsS6fiLqkxnLVg5VivPixXPRWgq1CULASBDnypUd4Uyk3JzdGQjX8F9DZ6US2gz5G",
  "key8": "5vNXh6csYvKpYUxiaDeN6uAKe6iTV4MfoDM4VBRJWcpAh21gyV344cjCreUD2RyhZsCbuR75AhnkNUjRFQfMVMVg",
  "key9": "568KYEqEpGzetdaniH92dFMfXGCyieUHgv5ySNLrYVdcQGDZ1gW8ZhnTGfhS5ZrUHg385S6ex9UsquWGMbRinWM5",
  "key10": "2HpTmMWThDxm9CRSHiDLuzjxfzVHfbxNrET4od6kMXsfNVaHi4rqPRc8o6EDKeozjujybxbHrNrSikLdeWsoCkaU",
  "key11": "2nwPpBUVFWomLNDCPuGxVdd5zdzSjA1BjCaiiYNiWhGqGagzEpBgtvezyPD3h4BJfijQ7U45gHaW4L1TenAF89yJ",
  "key12": "3DKPJXP6QsyEtcp91FK9fARPkCrR5tjsUQJ13jFmjztbPwsneWZJHAqxv5fAbpFBtk4NefFLCgPEspv1MJrsA4da",
  "key13": "5EvucbsfC91oPRLyHbZqGx2Tbarxfh2U83NgSRZ8AU92dtWtbF9wDz2VqBEMck4eDrYVtuc7YvCsGPZvSAheN81m",
  "key14": "5RZWPPfBwAwuAXBdzWtXQu4kGuEG4VCGZ3SjBW3shuRCXMqsuSvbwWxLB79gq3qkvPZBKWicCFc8oG3JTbwqvCcx",
  "key15": "4eWbmta4gGTtwaCcekXc82UKnrmkYfgVFGBSvdNea3rpRh9jJkEsRdSobUnHvuBFSN4eTaCiQHyqsmZ4NoXtyYe5",
  "key16": "3wRaReBHf7NTVDLvnWhfW8oxRDNoT2eRkBEbY7o2jSJQymw5dqSr8Da9rEbdhg5i8UTrdijfw2t7TJBAWYePVVvi",
  "key17": "4zrXnETWbdDY5Rpgp7d6iTinpCh6nVGYVDKRpwHRJNgdutXQ65hbeZuQBx8wfXHv4KcgHb1miWenS6YryGPjSBAe",
  "key18": "3BUzXLnD9gBacYGyBKsxfeQQPqZAE9GJexWyEWh3UL8ky5oorLGmTsGqb5ZXHJEABnbVNzRXgFyQnof4GDFWMJkP",
  "key19": "4kd8BLU7Zz1jmfbZDqZM7JhMoZ3HppEbAjmvKGphp3aKar9xJmmz3GvCRT5mAxH5dVGYrWCG7pUrxaM8BNeJNi7z",
  "key20": "2KiNFE65BVTDWKgwgC7399EHZf82wLx35yYaS8uySBKJBzMeLJcB7Vmwa6dpwYCM1iPg5Lw1NkQFnFhit8UQyd42",
  "key21": "255LtTVe12K3QLeRgiq8Zuofg6ppxfzNdmHsTVYtU8asPZ6RyBEGkkR76WJ9TJj7ALfVQbA1hqRc6fCQkKoT6uzv",
  "key22": "2mkaqNohvwCkwgJ9RDmmXZNzreegk6zwwc3dfv3K4SbC6ckfFtLfnzgpn6UFJZvYPyuzVR51Kr7i5d9pfvPMwCFf",
  "key23": "4LRRPXFdvS2ZoUX8rpiw72sfhkky9Jt2sRPaBm2E25Jh2f3BAsYjjrjddeEXzcKDzr74rv1abeecZUz6Lna2LrNm",
  "key24": "N97ZDo7vWUQiT8zVgrpohGx2F3VHzjZH7uttZSw25ffdSri1bG9pijZ6skRBA2oxDW5wsXg4bd4quQ9LbDxbUBf",
  "key25": "5SQwCWrkmgTfdtouX6iEwcquG3RenT7RWDTRE2YU1ToajDisz7aago88J5WJRsMxGCwdEsiyCWrhBMPZ5YkGjdUL",
  "key26": "5VCKrEhm9ESs6LdjeJgSYFFgDCsBEFdkXgrC7ExL65yr2uMhbAgte9s6w2uXErwyp26XEYGPyUzSBet2Lhws77e1",
  "key27": "m8HhwUqy3YSQVz39n2H9dkM9YbLvSqVr3MyHVewWa1qSM516bExLhsMxWSZpEJdErbqxmeetu8A5zRmRD9ddB67",
  "key28": "2D5WWeNgdFZjWNyYULgxFR8joagu12BdMNkVHNMdgdkH5feVG6eGjNqhUizkCLwybaoPRepurjEe3KQMr2mXHDcH",
  "key29": "5dsHXRqmLdc8AazGWjgmrBBPo2Lw4JLoMZKpqzqHNm4jBDJG4TMxSfb4yPGTN2pnJEtbdG3wp9LsSNrxQg2AbeUo",
  "key30": "esiBziPZyfuX8Xi1hBdP38oEY82keiNiMPdzRs5vRf1xNP4Kofi3sRKbdp6nBbK9gyRzbcnp3PhaWnMNgVa7gi8",
  "key31": "4i9cujwy6DrmMJbRjAVcaQ4gPtAuFfbG5oJuWUF3fNqpFYdo9Dj6ESqhMYp1TZFBJVfvUUktAWadLhda3JAbb8RE",
  "key32": "2exKtBJTNAsaPASfFADa3KFPyS2ywcpDK6waD1s9Efn5tq6YDbr5kqS2XWdkp1g1nJEAeNaxPXJCzYP7TEeqX4yu",
  "key33": "5YuU2SGy9NApU6HwzMbz1osBHG1Rmo1ZpaP1CByPd9As4JjW29r7q6oxD3MagrXVy8ioxjEXouuer9cPN65WEcPj",
  "key34": "56dvtzEyEXQw8iir6wr7TKAwq38u5RNUNZxnupc8wCoy1qSDV4Yz7c5URNFaVtxnTY33QX7gJJT8im9Q1wjH256P",
  "key35": "ynKoDX9sGz3ynoZCRszt1epVNz8f2jmLjHW1C6QJQ6aUrmwHjXkwPYTavYSZJo6F1Ma4BhL5S9xnLsvKq5z45aD",
  "key36": "khgWiTS7ub8bYmDXmUTgQPQ4bFktaznxBbdGs8vkEAcwFUrkiCTdwMH229Z2WQNazjQCMpKaopXMPxZqCHLZbFM",
  "key37": "5WN5rKjw49qqLm3uHkBjH8QRDqEyuqHHXW184p2Xdzx48ke3pouMqPaG5NMDiBQoQpPq9S5xv8YX1DHsQqZpuPks",
  "key38": "2rMyj6UrkYnny6vVUzHuUhdSacKaBmfzxkUHyr4oWXNCN4fsnjqhnJ9Jdwmn5VkZ3ZLitB7QExUvd8hUxkJeCrbh"
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
