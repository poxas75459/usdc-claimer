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
    "2FSuAUvDiraUnswqz7GRcpBMPv2TVA22znmT61cLMMzuNzfu7RbzDtSHfXJy1QByimVbPw7BCoHzjntr1MUxaiTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLnLohVpT8bd5yXZmF3qMWZ8T4kZRQGF6hdo8SmJpTALePTHJ7YxKM135MMkAZQMZFyeQWRGiXm9qcSu3KA5pku",
  "key1": "3M6tQhfL3ETRuhaGQj9tTkET39zPpkNBsns7w8oZpmfDphAHMwg9RUCrvj7NTa93gXk7jTeMq88uH8QmZDYv4cxx",
  "key2": "2E44aKBkZ8WeGNmGWjsncqA6HsAMK4fBWXXeA994kigsWaGm6iVbygscwZtqiZiM6iq8P54kGKYrQnJZydbmTLwH",
  "key3": "2QNooJNJEg47rUqaRNarVVShevKtsW4hAbGcDjGfLPurNPwWFdAf7SbQ7S9k8vDAH3EeDxrcu2udhYBnhQ4zZgSx",
  "key4": "57f6Gkd9CuQqnGUUVTiJmiDuijhr8RDHsraFMv23MPAAUQN95WmemamHLJRVtBmvFebEfcmjFrPMrzNpm2TNLAex",
  "key5": "3zj5ua629ceVGD7VHxbyJeNCJd8L37bs8GWzuZVzVBc1kHoDjeMt1GwnjQ1yqnqdNMXLPbsAZLy21FYWuSejq8J1",
  "key6": "5Sox5HuB1o7kgaHYwbXaPVyrvMC6E6tTXpngDAMixQCjax47yKG6D6p5yWLQn212SoigYTsXCDepURtbR5PKBfha",
  "key7": "5kDV3JZbDwYPhu1K8rkL161wX3KyZJDB3ybNTAH8J37YYzCE1UTt7rKskcKzxdkB1XxGhgMgvNLB19nyGyr4uDXR",
  "key8": "1P8G1CovjubRbD25yA7ubGfc1vSZr2HPTEm56zDq749UsKUa2Zr6YGmiqLX5Jvz4X7NzBwHmXWzUvRU61QvnRcZ",
  "key9": "oMuqNEpVQgKTq9Vu8evoWf9bFDSBvn3tckZtUgBg4vLngzuH1epy8AUUBiubHMgoa4Wmjt4NBLrR3BJsoXn2wqJ",
  "key10": "4j2XCmPZtG31xjL5X2ZrNGBGVzCv75Nf15TVwYpKdy6T3MpqJsmLEvgzfRTSz9UyD6WhbZ4Lz1LTYzBWiApyGeee",
  "key11": "36jDjYocuhEwRi9FVYAR38ETm1bw6xikKsUG1cmgFjUbAGSNcG1wtMZsuFq1ceahyFvrSP3jXgkUvnQcXJcWAckW",
  "key12": "4Psb7RbKeDipe21XV9vBhtMe9hjxJko2s2afUS3NyfkNUyyaotWixiVzwrbgxELzbppXuNCEkMDkZyGSbqMSNcCS",
  "key13": "4Ja6EzVz58Up36PuE2gB6FJMcz2koReBZU8hUDK58TRSVNTFYGDzGQD4vd7rQKPoed9cy8tJZn63LhLnDVuJmiDx",
  "key14": "KFL3UdQ2pQHxyaKMvWDyheVmmXc5gB6c8wJydmLAmuJiinxZaJXdcDbEqUcC9SgPFaPiRfo7ZUC858uLkPvZnUh",
  "key15": "28PcnaoJLUEipcFWPZHqE4x2y6SYNSd5ePTKSRUGsaYG4zDswLTeKBwBjgCQyvbNc82Z3y73qiDD7ZDgz4JG5sa2",
  "key16": "5RhqMnUG9nk7HL4CvKjfWyPiNSvYDCZNuTfgznVh1ogX8CzX3WPAwYhk2ABcQdgeAz37pPmhmBMKMXCchFsh6Mg1",
  "key17": "4auShy23oExNE7NnWQ4uaaZ51mz8ebb7R4ZksdeqZhACKJsDERaWuhWBKojyMiyBFocqeLAWqR3gQXgGafJuiKhY",
  "key18": "uysKoRuid1V6vNxnwLamPfR8vEJkkUBPN5YsSrHiakY6tC9nwbyQqohVwMAEi9WByVvaR4uApZEtoVJ5VctC427",
  "key19": "ZxoQF8CUoaWGYcaS3R2X3gtNyMhUTrTSfiHQ2SLAddb6pqcBfQ3znSgUYR9CoWtQm7KwUoeMzkSmLgenLJaLRCT",
  "key20": "4ZMcQ8r2x1bRavUPpAU4Zpn25AV3Mar7wiJ4cqPXJgufw8jZFC8vkCTxAheLN6RUpXRdbcqciMi6gBo6BadxJg4P",
  "key21": "4JQobSLYnaXhodCgKiBwaaDZWb33Fqt3YmPj61o8rZkjWvzVtVygQmn27NQj3RmvxFeTuVvXWrn2p9AdqFM7NR2a",
  "key22": "5tPjLSrDQGCsQDrny1ZxaNxnmCvwcAqbWHjKbkbM8vV16mp8mCbpUXy7xr8tx93mphGAgeT3L223RjMrD5em7Nb9",
  "key23": "5hLHCdDks5RCQJXF9MBb3esMHEZkoM2iFVBE1L9STNSt23ZSgavSgcttTZ2C62F5e77kzXKUeRuANVo97XGdado4",
  "key24": "4dsPqrx2cYCJ7p64drYWuBHF6zyfhp2yNNYfrQ93zDRVeJnurke8k8gje5QHgBPVFjFLaRK6XsyZbsRtxgSYT5if",
  "key25": "2Ni2urtyTkcQoxT327FdyTdj4tVNv4WrhTNRLCTpe1pT85SxFh5o6pvuWj7zXCB9346BGJmxtg1VhVBMWCiicf7g",
  "key26": "8wRxMZ9Zcub3UDvpR9qae5hnXSdQxyoDUmvzmEibn3W5zX25iD5L5y9Jwqt5KJRRnaaDCGPozTLqsKwfySJhSUX",
  "key27": "4DF11SyGRpA1WUPdEdmG7QAzehXKS6cbFsdbSi4XTsYqxnjr1ZDMyeqSiErriVno6nDAycdDgKoWMjooyqJn7ZsZ",
  "key28": "666EGa8QYZvEK8wgT7ZK6sCM9uo3uMHLgXNdS9pf1eGia3vCju2sLwV3eAUNpUZGGtasVehgg9vNYD6xMcSUg8pn",
  "key29": "Svf2Y96eGxun1FWTF62d6q9x99mQ9xvSAB3jbjxq4T4MRyg6LCN8yMgaQZbEqMLiBwkqRJpr6VhM5c2BXRFfTX4",
  "key30": "4jWDnChLzHq6LxGsc9axVJUnMgyTX4r8yVSrTYfY7sYBxRTqZcNACPnVmCwmkjFxq7D6R32ZyVnnSHsGJi92k9Eg",
  "key31": "5jKRFU7hLfnmZKW16bT2JDeAetPERPtg2iAaK4wAd2hwjwjDAHa7NWr6Y1d1RYR14cqyopyQVxYGRZ4CWih2BPZ4",
  "key32": "5W51fscADELSj597ugRwqvYXY9GnGz67smF933J3Z5vqokrjyFfbMijQdzhwcJMx5CJqtrafUKNAjsDeaqkjevdH",
  "key33": "5HT83AaSo7sdfv3sK6ZrPbFN6y3kGiyKBWZgbijDsNvUqFyr4fYzQmErtziUyVUzwhKP1Ckb1ysJMEoygDqjoPou",
  "key34": "2HvqtXZnoPtmKbqyj82dnNWKo96Vj8T5bnzdA3H6GwFY1qwwrc92axfXQyeETy7TyjXvZpmFsK6gwv7W5c9P8SXt",
  "key35": "4J9hrsFfoguH399N3FpM81x6kvyRo9dAZogmYofzsKBUhx492WRiFGJKrsnshZtZc7GdDDofuNo76oUYJzqd5NZp",
  "key36": "kVvXkuoMWPY9LfCr9PqDoYeZXzErGVd4G2k7Bgg2u1FMtc7kaAAACZkPdEoRCixBYjdQ1PFc2Gi7M7yC69aoyTd",
  "key37": "3QeuXeUmVqF7AwrbtZiPBd2JqW5hTr5PkEBHKJbFUKWYuAH7Q51AfN6jiZAmMrZEPwSNhnfVR5uYKBUFTcDmv86V",
  "key38": "4Z8MAZCRQjjVUvRc11j3rFyXYRtS93rrc78PML7XsuFRDrt56fFkJVtXFijxRY8qE1vDYKkb1odARuKUPQ7kWFQj",
  "key39": "3599fvmizEzNqTznyF32TRLk2ebEE9ou17CME17qSLhe7CQHJetKSMqZjf1je7NfjqgZ5iFC4iSwLZruEdRguEu",
  "key40": "2z1FmzJWVMPaT3pjq1VMAknn6LPhGc7wQJHhBcapXkjdG6sHkkGNTx7d5zRz9KmQXkMCBYADFTabghNPd4J2HzBA",
  "key41": "S1hX4FyiFrovx6pbb9GrFHvQH9LehnHrvHso2yci2p4gH8GtMiXePRxfDq9VtQ1JRiFsKVQbNjDSbhvKKhhe4da"
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
