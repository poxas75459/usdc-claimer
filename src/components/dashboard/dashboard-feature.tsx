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
    "2JzauZ6ueYH7taypxNR8LB7FXMKdoGKxWVFKoqs3J737a6yAT7abWqAKcGX8BSGRqH5ppGayGdg5SvXkpRmJp99x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nEgCV5un4qX9HJ2SdinorW8CyLo5HPoXzfQ74a1o3iFKLpjR86K5XWYLc8oYNK21x9gCvZUaHa4mSKfFzpeEN8",
  "key1": "27EvpRRELdgb2gZsDfws7Txf8W6f9bhCGDgm2F58aqjTfA8m4Lq2XHs68JRRZfH4KvRB4n99qfF5FTH2b5pKHHgE",
  "key2": "2fLc3jeALCmBASaG8PG7Lpk9ipiRvhxpdgWKyZnYNEsJqJvRmzCPaekFNMfp5t5mEZaKfW4Gdn11TKmq8BMviZ8R",
  "key3": "DmKXUZkwN3kkgsyF7UL4f9YGVJdMn8TE6PSuppXVvQnbU97HvkfUCxPVL7PfJzQaD8TQTUz1epiVeikRoduzb3P",
  "key4": "5fZWymp9Y3MtVrMCLY3sFewPEnw5wbPqHccu534esskTgHR1LZZvG3XwYmHuYx31w9xRkUzWrMwZjXv2HQp4US1h",
  "key5": "4KLbNnkWZQfuXPMLQ32ee5c2nnCDGqU9LTiQwJkpaB8jPMYPYfq9uAvX9gAshu5NdNnuvsjRnxpYoeRWSyRuntXu",
  "key6": "2m7iB8vXjq9wiQ7bJJKLC45zYHkEkwp5wHxncoR8zJaRZ3EhphhWJ7icG8Fk7uzXMQT74aVhG85SFPFRhTPRd9uf",
  "key7": "3GspugcDPJAGzoL2VMpFh3XZEcdbGZ5dhFPyjyG7JA4MyieFK1vAGQADpMegPo8MjhRwz1dQEaoGAEhHYq1jq3AT",
  "key8": "4HASADN6SpALuB4aFyiNBJ62RNqDmJp3aWik4K51JwhduBudhxZ3mpQdxLskDxVb1WRgkqQLJLbjnHc6QJPKFmgq",
  "key9": "xJahAWXKCvxQaJLADmWJhAAC5UcU98KkdtNasFkcf42z14GNNBuYLkQT1SH5485NF1cWHb6HEaD1GkAoCgcyH1G",
  "key10": "NLNByoZPpj8HxmzogbWXCiBTHEM1LRd3HZhtZJ2gaomEsztQ25sCScnpSAQXGahY2coaoTeFkN59VgfQRfc65aw",
  "key11": "5Dr46tQ9xNEHYNdf4Xwiz5CMe7wzdzmAijLArcXzzCZdisGwLAjHFzBfh5uMS5iPkGLSGGabVdVipGt8Q7mH9Ejv",
  "key12": "3DwGaRpHxDAJ1dTcfckqQUaqecj9SJpnwWr8MF9nMGdhV69xYmqgPxjbYvQCXWfGUmgCyUDxLVRfA4xpHYRLPfjW",
  "key13": "281YQLXnZkvXgsUQU1iCBqk5eUCBaDVQ2vxpNvyjCY7X78G5yRATSct4hLTM9kSqWFaPQfRvVyPncpC1uEH4nsZR",
  "key14": "gLWAhsNgv9k4FarxwyHKuhsSM92fWFGzC2PHFkbQeKrJ4Wm3GbxR5qJV9pvqkhmGsmh7qSyHXb2e5uyqabnLWbg",
  "key15": "2MhH7NxciYFEF3vMTE3NMt7A1BZJvTJxiud4UmqBCZv1AHtdKLNHXmKQ9K3vAgLgE3TcKsa2fpao195tyusTgr84",
  "key16": "3uqtD5jMwqGrMXhZm57DtW5dA3mbudtWA2iW5VDuhCnibutQuUwuhp25E4fJsh6WnXB1Lx9S2T7ckEnaRvgvRY22",
  "key17": "2mqt5ARCSFpsEdWobRPQVtt1jWLBwC2Jjhw1jeMVZWF46WtU5YhwjF3WLpmiY4RddtVF4c5HUHce88J9NDGjUEqh",
  "key18": "46wZC6Uday196Meh64tLbSbtDcn8vnKjw35AyJ9vm377xA3YZek9MTrqzwyyy7eCiKyRXohGEpunceaMWBtESa1N",
  "key19": "Hthma4vRZ1S3HQq9naJwLmwMWYqqs9wmEY7CPifZvg74VceWeN9bEaxKz7zuZ55u6ahG77F3J2iJK5ueHBZsLc3",
  "key20": "3cX2eTVZKvUah4DDM4tFmxigkxyBHfMfi8tyCmu5d3Yorpn8PmyCdX7mWaafPsYN4H6NeahPECaTr5H5tV4LdqMn",
  "key21": "3c3ZYz2nWdUXo3fLX4jwAhZNtdgtnzs9q6YhvuRUb8SxWpzbjW58osEKL1Gsc7pxpyNFLy2DBpfbx8QeGJHo3RtF",
  "key22": "Y8myiefpCgygGUpBZ89oUZaJ2fBjQG9ayHVQNNG6jxeaYsDYGdseXb8uTqfyEpBwuuLTHW2WYpGvpNwkJjQez25",
  "key23": "2Xv9xAk3RYR14zjKu7PBGB1NTUuWbTScbPr54K6SJaTyzsnT26WQLCYiDjyjkmoXzugwGeGK3ywzeGQpitCgLgGd",
  "key24": "bkYp77xFJSnHJy2rhzJPw4n5P68LCwUUDQay5jCZrFqbF73aazChN4rmaLaJdHEr6t8kjuCpHctEJVsXYjsEPL6",
  "key25": "4hXtXguNt1URsMvcaJ97fVXLrUBSpDuFd8scWwtFNmBu2MbMyJW3FvjJhdjizs8LV4KLbi6bh3tZzejL2pdLrRL8",
  "key26": "rN8pWmm7628ynAhb5qZonyUNe3SZeKNBLKEZqa7DUXSfy85gL5a6b85pPqiq1MQJwEiwzXubuoP3yKx1jZfTFQs",
  "key27": "5xfTQz4v22NoLHuSMziPk6WvdSSyVqtMwQf27xtQVriNoQhzDMx3rPhHj179nfh18GZF8eND6W964Dno9hpNbZMp",
  "key28": "4V7pLxsv7KVxTcjjFXiR4bN9pZbm8R6BxvTczDko2hyimL5wof43W6h7BDYtUZaE6mfJeJnq2vy8oAeHCc27mgJ8",
  "key29": "2HRDMnqziZtbQ2ep2zuEWXPQE6F1FzNiiyK32VapPbVMknnsZHFnwWPou86YVcZbMEjzAE3tWpp4AupyV8y141ns",
  "key30": "spB77nrUwFY92KwFvfv33J6pMPpEWB8t2Pjxq32LahpXSPLbC3psDMMmiYrc81hnppxj2TiDFoft7w5FZavCoVe",
  "key31": "42i8wFeEXbdmTBEUhtGp3KHpHfJfgBjPY4GoSLxegg8MYPjPGWgZG9hgUTcqsPHDXf8zU43T6rM88ctJ4ZjARrdu",
  "key32": "4eTPVXq7w6MHTvCi5YBmMguT2c8jDP7doKwMfudohNwKKXoYknF8a7rcKPy4shZZkEjdyPt3bbV8LEA9a5aG7LNV"
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
