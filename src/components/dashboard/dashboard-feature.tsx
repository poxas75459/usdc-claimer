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
    "4ggAs1Put3nzRXioJnVenUd8DE5s2h3NeaHsHhUfv742bQLj8zpGhYYDrobEXnY49ZXPWhPv6sm2tBkE8GkpLVfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQSiVNMqJz3L5AG7URbUSB59iNaUujxiN56XZ5bjgXCtERgs3xd7gzVKb24mcn8aQ5vSMHams1RdxuBTMLSXo6W",
  "key1": "S2YTSQzUkeeSVoKbqETL8Sqdv7eeXQLWsdDmkuQCxjwkW2KaqBJ6DwZVgdNcUHVKnmRF1mZnwJzT5UfkniUVr9D",
  "key2": "5n3CNnqaQ3JLpTqNeg5ovMFqaDis5yQVQWpnkgQC16aec4zMx6uVDLtohaSW6fvsxejWXPytyNgLvscGMp25Vcc",
  "key3": "4foDdMj4wwGpCSBrz15URN6vHcV8Jm6GU4hw57zQmfWNn53WpW7Jj26MqoyNYtPpoXzLxaVSpyS67QXf8yNpm8m",
  "key4": "2sYuzuAjKEzkUioA9qZFQyRH7SwuMLmAC8veRhE6hidGGSmpveeHjoW8FeeMNRz3RLrHpaZ5zV42FseiHgKG8Hor",
  "key5": "Vw2nXPiFShpATH52KuUcqpRQjd8XMFq7wmDg3BAdfYtUnBGtQgzKSFSVXV1mJQvT8r2dvr3oaqTpYdJUKJ1goVe",
  "key6": "4jrnaoFrDUWXXcRNnQ99hL5xpiEKDKyK8U3yXrdFLD6LFwEvmSiKUWbKzpvLUkRCwFR8fyeMX5swixECpeCxThEw",
  "key7": "2htVERnEB2YPUFeQkcJQ6VS5Drdxzgocc5judMB17gQe5uHb9JjWY4L8728dmKHUHTdbD7FVLVUqoh5hDHaoiHMa",
  "key8": "P6fQysdbqU4gBebXCTeYorUMxn2hPQyHajrWkBawayeXPmn7RQ1rG36MmEyxTqbrbCKQuu2JeYTdpRwqEEMNhqJ",
  "key9": "4VhuQEABt7W1zHzxqGU9dP5k3LkiCWgE8Q7FWiYEFE4cc2YisawhNumCa2sA3yhnnNbRpNjnoSvf61Tt4CFhUr6A",
  "key10": "4hVkd7tdnhdfPaSsZgzRAPgYBb5xkF4Rihx93RrKUhKsu8cGBCwgjojL1473zGuN3honqE8ky4xXnezRfngJkU3C",
  "key11": "21Wsgsp9PSpZDVn6L2LyRjkdZ7EzWqah7hLDAbUg3BkE8ro2UXTNHJGMA1FEnahkQxWpKBSwPmfBew5eu3NfjAZ9",
  "key12": "3tMeF3E3kRZ8TG21129cXWCxBxbZtMu3iK7W86jf59n18sTyzPUbSeaRXpKbdTUcDV9vLgetFgkdxGtHPkjuxVr2",
  "key13": "5F6n2CtkB2gLNwpyfK6S324ZhA9yoYd5xeNbubM3sqMNB5dm9Bh7aanRzRu866z3qHF8GyeezKLyrUZpQ5bmgHM",
  "key14": "2EGzF9YK5QA7tVub7zBWUvNJ4WPsQAZCXBXzzTgFT8cmL3o7EqcPtVrQuvXaEGZpGqFG9FeYcJKnj6CLxtevfTym",
  "key15": "cYiVxG4PLiLL8FXXiM4ee9KQSxxN8DQQRMc2DctKBv4qhbJi8sc4YRPdPuumaJUD1SuwZv9FdZvtaujRVvy6Xfr",
  "key16": "5HqLVJjwrxn5odr4ThtZGKTDqE7RsH8ob7BdcP9kuPhMiYbcng8CMtxbvihPsxmgxUz2yAugMRrtd3fUc1rhH3RN",
  "key17": "H1oQcTSQ3so73HJsuNHQKwfQEqDLu7atyyYfWtf63zfJz64fcDSKpY27BmLnQpyXR7WPTzJuhjbaLev876X2T5A",
  "key18": "22unJW2UKiMR9G83vmtdejxfycvhUm9ro2PJEMzWHYDgvEaCjyjQQnkJ4QNUMJdE2yjz2exLZVwms6L3JGYb6pQR",
  "key19": "3CxiT38HojJHJAttvuybRWDkKy6avzsm7mWMQVvdid8x5tNLn3Qkccn1saP5WaH3EfcGWzmBCGTHKnxUvDUwT6fA",
  "key20": "2DkuQUVZTt52oH2Wcq7mFVFEH3qUD56QWsQcCHsoCY71XLaETyAC5FSxUmUfRDu1Pf9RxS89aiv74DTFhP7MNKTJ",
  "key21": "3qv2r9aokSemPHqKMn2JAWcABiVWg8gGhUErNBozENdEsM25W6pMv4GFRuN9KCVNQ5V8oow2ZoagMsrbdqECjw11",
  "key22": "24in3vNMLFovb9FNfeiBGgRw34sNnZWNhkxGVp6f8QwRLuxbCnGNDjjvtpjb91XK6KbrhSVQZpJK1yLt3dkLvR97",
  "key23": "39tkqDcntJU79MqbHoq513YN2cxsGD8nP6uxa4WG96NUxy3ZTdqgFFKFgvsGegrDYYLGUgPRn7njDLAdcaYCxajN",
  "key24": "3WoWh161MPCoEZGMx7cPAP1PPtbtEsqzdXuzAwHTUiKBFiXnfPeCEjbhHTJLWh1CGj6EhZWJZ62o7thBxuoywpCJ",
  "key25": "2bRwd6EK2CFoSh1chpeZRHoRYxtbZtZgxLzjzpTyYxxZcFMfsAL8RmThn3EtokuvAKMaEZ8PDcum292RCD5yjrRf",
  "key26": "3mKNbjHVXReqpU9XXN9xBEEAyg3S1mNSH1MZvR5yZnXvjXpLcnY5uovNPj4MALV5ctkJzpiWQVZbKkAix6pTkS3R",
  "key27": "4VGRe4oLDfQfdAvdyVJzThYVUwZbfWDw2RUckjU6pjcTZNuryTi149gxdwUJ7oxiveSfY9nGVJL7zCdLZnhJ4Wvf",
  "key28": "42cMEC2yPqP5tYm2TQbzBf2Ng4Q4dHFJRcjz2eTn2ksnsMEbBQ3vqBBZovhzMSAvK6uY9FB8Smdqihtr7cttB3zw",
  "key29": "4WRoooVhRvsyBsDfkXtjXesr1DREjR5VF18sKQKURWeW3aFUiiShZ5cVfeRza8TtEmKLKhteXfyh7qHsKgSS2Ggm",
  "key30": "TZzDBv3VwH7yVqowLR5WKhHJtq6NEhMKWwPavmebwBBkqBtxhTsAEB5g4mugK6j728DB9agxmQzVd26ZW8AhPYN",
  "key31": "vRpWngsFddKhBrAbWqiGWRqUtDiB3AZQEpGQfddj7MV751vtDmdkxbFvwGeL6SLjSJXqErfR6qvHEEwZ9rStRFn",
  "key32": "5ucsHbnXLLRW5WwKfThv4EPmd8iG7aw48BstrvAcczGZ14qfy71KzTCXQKfcU7EYEzaHaSFN5SGs4bb4rjL9Ee2b",
  "key33": "4R9qHoYfwLaoepneuhvugJKUA1d3QadbNaVi9Ch4mvNoTiqq1YxvNePeB4oS8thaDZLhoo8KPMw7HhnhL8cQ5ijp",
  "key34": "4HXKqyaBaD8doQeqUAxAV8wvLcKhk9hEWYV6UYcNKd3Zw1LAkiWfCkK5wdE7nvQKSJUbzu9u5QU1b46BpeuNsE92",
  "key35": "3s6UvGm57MsusAQ62M8r2uVpJcGGNJTJXDACVzr8s787XxAVp1pH8utct6PUqbH9sX3e4Au1S17QvsfhDnU7e6Hk",
  "key36": "XaKUzVDzhKtxbMBn87FnSmTq7HgPN6oSkDXWFSkPMydDBY7V338yFC99BC2UBfbY9Y924abR7uBUaEF81Qncupb",
  "key37": "2Yy3BG9rt1adqNBjMnJ42NTSzWWHBrcLiP7u3Ygrpxc3uzZkV1y64umb9QwJm9LXMLSEAPV8F6tAFhraze2vEAjy",
  "key38": "5h86TyJnCRn88oyMxkoVmTAUU2ZX3cr6oeZ72zhHa39Y911Ge39LPzpsWMXiYk95bxZxUDyXhF7ne6LDpCoRztyP"
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
