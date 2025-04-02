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
    "2syQf6WmurQqvjX725RuvcZhQaSHeHxdvTqF1Y9neXuoYeAZCDTmvy3EYTc4vYeuX7fbQLAKq2J46UUAoV9e4Gjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zC4gDsKPyPCWqi4cxgD6MLJ8v7fvMzrSFRPaXHUDzs2PsEcBMKZnbxBLpzCvd3EqoPA7YsuhVe7Jf8ScTREedbo",
  "key1": "3DEPRinAzox4XAYJBvPp1VGch5qDxdu7ncJAao3rUSiMEsnHETFaNK7FyF4M58ZXD2VrjFeJjVFj6uEu1jYGFrMy",
  "key2": "4QYtthJcftbenXUR5hcuR7UzT2rYDMkYaPspoDpt4iP2bXhprrSfVYhXdHcfYLsPSapggtqz5Xxa2s6HPYDz8d1u",
  "key3": "4SAWMKLcPkLPwAQV8p4wALNxDzahKhoycftZshwW7x7PhuRBCpzYkDura2c8FY9qXc4UBACJnrWyaFdpcKktv7f3",
  "key4": "3MmZpYYzRHTspSZHwHDQjudc2FZU6dRNTx7MATRvVwwb4B8KJR5eLBGBEEdwUS9MFr1FDvqrGrc3nBNhJT2QowYv",
  "key5": "Z1h81wKR7MgYktGqVTieauUjZL722GWZ4aU8N77d1ovaftRGVgGSB7MzSQRRDZKF1Ex6x9cxNUgi3dgE3gcgpCE",
  "key6": "S8EmC1kpUzMmMaqJL6GDYq4c1DPw2oJ1XKtVdHQrMgPotf4tp8AjNvun4MsFq2XfjzjCF1oZiwxnC3JdwYxC8Nt",
  "key7": "3smxyWZPEHDkcLjvmCmwdBLBWpxvJpQY3SwHNDB7yy4n4YVfRPVhnmAtW2emHe6sjy5F8mB7h4nedL5NDqw7DG7m",
  "key8": "3c5Z3qSNwqUqLrAVRWJvmTAs18RhMm1bETRYyyMHfGLxEivAjEaHLXXPg3ML8oUzysSu4X6nBFWLFMrRAY9t6cmm",
  "key9": "4fs8mAQVsmyjPR5snE3T4z8BJfoodBihcwKpkSfd69Nt3purrgzHBehVvfN9qydqHrsU6PeMGTKEM1i3akgq3Bd7",
  "key10": "2B7747if7eq5VbRQzboM64U65NCZcF8HLnejXdcefJxFwot6xEkheLnTfF2F6RKZV68jN3HtzsYKtXMX4dbQiNwT",
  "key11": "254TJjQ7Ppjk96zWQ5z5sKy3hZMgbPvMm7AACCDrfpqz7TiD1f7RfptYRn9Gu9byTvJ8Wy1J4rV8dmGkZv2NDmuP",
  "key12": "2XFcEupsJCkDjfCPhr8KFT6dd9GhdX2M4NuWVjdDViy7bW2CLFUhJhR2PFMyjSvrwU8fx21b2UAyemeQjCaDerxB",
  "key13": "4iJKPD2quSXvF2rfZKaqPr9ewDxwdrms7hSuAt55zrDMZSaNq1C5mTB6kw12YKrCRF3yMZ3mGoSEE2ZgzPA4iSjL",
  "key14": "2b1acqUmCsrMyhpfPqzkHmuNXMdW3sVYfPoJUFafGHGMHonZ3GhZTdruDB7KKh7kzYrtsvSoNBCSr4UJgnAuV78h",
  "key15": "4R84ue5oMvYP64wB99mbpd9Tp3PSJyELFQmJs8EqMsUcT7QYzgCBHAEBiFRuEdkZXWX2xAMgnLj8tvkSb4BLZj2c",
  "key16": "dExKib259N8w7htwKNH3CfXyDNU8pFaHci4KwNzkyk25sQ7ce76zUZ2embLRDjDgekUfUNyEN5Uo6157oL4X1Wp",
  "key17": "35MAtgMetfz9j6uuD7QLEqtTDHe8vuunQfbtGBN6a6uFBfkKGCz7tDfZxmLNmmVAvdtDorey2Hde77w2LvPSCa7",
  "key18": "2yf3kiAAnk6UbVvPafw8PBg8ec89qJTznz7gfig5iEQ666KnkSho5styf4ckwYKcdtqdhRa57b41ZsmBa7JE2WFp",
  "key19": "3NrR9KGKwTRv59n4JWNUaM7NS3vfMNCAab65JVhUr9kdXMbHQgjVqDfQUg56MwN7v4iygHEBrtfQgr5iZrYmyS9L",
  "key20": "3w7XHL4oubCLM9reUtPFBzgvYtBqh6gPFkXNGQF2XTtVja6Cn3HqekVgvHEqu3P2YVMU1vFboWv8wRgcoaBQpdqg",
  "key21": "2sNHgENqYNe4iACBs8e72L4wkmgQmq13mod4wxgLMBML9Am72vpYreY1M7ufgkJWoYAkrZEeHhMbDRyc2Wend4tz",
  "key22": "n2zK4vTk2bysiGNNGRhsHJa1Ley6FQAPUGrrnFwT3gvKzRs1s2WY9R5Zm654TXuPw54SGpNmSkk3vtoCguATwTu",
  "key23": "649FhTW3pa6Au83xWcYocyEcAQr3Vj95L2vWvtavGmrs2Hp2aAVoZ9U5ARar128B2tmEEve4sYsDA7g6B5vsrCEL",
  "key24": "34Ynb3MKpbTHQWzKMPCVThH1VFCG96rpZnzPgBnhprttTDiuKqxhJ76FLMCvtRjALqnE5duREDWt39nVBt7dtRvN",
  "key25": "4nhquN3tBm95LA3Hg8TaiYW43CngvcCKGz4frCQ8Vn7JGimK1iAmUg6eAJBF3xYtyHDZPAAonUjdP54jifgJiM66"
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
