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
    "5WVYgxXjN869nR93Yr2mBCySh5yiUfMS8MBnZ2beenXRdZcqTn3que9ZVk8sCSmn2ZWSGueRUCoWKStBKZLGKtGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqqAUgZ4QXxqVftZfEf2DawRqrtFc7Ync8hb6xzng5F2rwa7D42XximefzqjvCbh7G3Fw1DUUND91fFHCLP4CLZ",
  "key1": "4kd8qgBxjh3yZ4jLzTEV14Z5VsyeRC3jq2ny7mi5Tn6e3GRNoDxkPjLY5hfRYxxFxFrxUnFPg38SnmpmzGGccaW2",
  "key2": "4t4DY2fwdRZsHu4o3Jjj7VnrbmRvDRBuh6o71WHyC7rLgc8RdCwWEpb1t5fnVnc633krw65aK3WPWXZxvVunoZTX",
  "key3": "5kCd8MAbLGJjqDHqexhAh1jXaNDZVD7zbgXjFigWiERcSqwrKRqmxFrnETXW1jcZXetKow18oCUtrjdCxKPAgPYk",
  "key4": "4Z8NY9EYugHwQi4h3ASsdUrdWh4uk8uexrHSnCNamyLYadSth77DuG8iRUWWTQjM9aG4C65TJphuqqKtefTunGfm",
  "key5": "KhWrzt7mptGaTJYaiciKJTQBZipUZbmwhmxQJLQLAy5Kjpm9z3aVUFKpqFDjYJCvJ2LmSWzLZfGm6WbQEmDyHCA",
  "key6": "4DKJG5fJcnHmzv3DAVDQKMR52WSeavk5rHAFtXvDYVmzDAce8e1FyJqYNrXfyu32GeYt4yPKavLAuaJgiR3obnht",
  "key7": "3BPeCh3DwYoZY6EXFexaDd3Kd1V8ijor7QgNbUXv8xYvK3gwADWGhAR3Wtas3aeUUFARqJVT5LrPo18BoAWVfKFY",
  "key8": "3nf1ADsP28zLv4JRhnPJoCZSFugQxoc7RMHtx96Cvk518HrTxGgyhn8nG6rCCyHEKHeAnSM5aXncgHKbs9BPZE5f",
  "key9": "37g6d2c1iBmBqxBxw5ebyAZkgSMmdTe1P9SjLA2EmGnHbqEmCfYkP88ZY4sJ8mRFvrte24uTzYSfSMLeqJYQ9yD4",
  "key10": "5K2wGfD8EcESg5xfhsVmEjN4A8Xr9wKGENkkmQJhxoAaAC4MRDiKC6W1uHPekqwhP3P9m7hkMHUk8yFHwMR4e1EX",
  "key11": "4Yb1ftoseZL12nD7ypfZykdMH2SYU8XRW848ykbGqECP5nDfMzsPc7iwn1MwYX4JUj7VbMyhormMWs3JX8qvam6y",
  "key12": "52DzoeihfW29EabwJQWmBTdDrW7gKsxTL2RoLM7KE5TBU5CxWSKJciz1JPyLU483ewnHTrBN4mjYL9eKCWHDXSx3",
  "key13": "675rNTbQJBKfuMfwhoXtPe2RjLAzVY8SY5ikN3cdsp2wk5CjxCaG8Wy73GWi9eFmQb8AqWcjfvJMseoD9ErFJssJ",
  "key14": "5JCQrqBS9zDhw7L4y2s7TDUGwKx8iAm8Effec3oTFXZsGCXGC56dtdRc7zp5PBN6kVD8c5vfKUXzGQcmxADE4mPu",
  "key15": "2B9mdtoKq15wNWR7LVR6pdQwzKjhwNxjXzsZRFqoHzMWBkKujgtVcbw6FNXCFv64a9Wcbr6Txd275ETYB8Pe3d8T",
  "key16": "5DQFxTD6ZXj85FxPV3A5YmWBMgTYkWwDZdKCH1QDjSGp2B4DA7EnKxFdLQ5MWCk425V9V1AmMgNKMkMyVStHWg5n",
  "key17": "kG1WQBqhy3cdTuzLrAiN4EbLwEtgGyizsdAibaBETApCgX9y54e1sy8sLCpkgDmxxTC6fi13RCYhhx6YdsHYi3C",
  "key18": "5HjXPxQ1yD2v1GkuSbkaXraTknELyn8NbkYF4SpdyrbKu2WNa6QPSWz1qBrcJ6T1LR6EMzJjDxponypfk5cyA1jU",
  "key19": "26xE4VRvcwrHXJJiQxmpgTVqdq4xj4gWJhzUrSren3HB3veWpqc3auE1yAAHNtfCkyUcP1vffSvc2FsR4Koc6zoJ",
  "key20": "6aTj3P3J2HiKpz8fBgWMgsWvKb24AXeGq3ovmbDa7wpUVbboma9mqbzGJkTXtoQ2U4oTpczapkyKuVotoVqgTtV",
  "key21": "3KpewseNksSXcKjeCRw3HcDtio6kKU1MY9JgszHP6fWhr352UFP7UvaNKzQdJK9J8tw86aPntEh8xaJWtjqJXrWa",
  "key22": "5BN8zhTWXvPBPAPcuPqxvSYnoX7Wycdh2Xe465LgJGNBsESvCA7Ghzhmz2udwGan29B24ivQYaTKRiu1tdBP6zet",
  "key23": "5noFbNUUEmuW1ca4BLLM5uCpcosrLfDt8fBNupYxQhnSnZijP4dx3XD7xPdseSqDX34bN6AmQvtfGH8fKFho76Zj",
  "key24": "2qC9NAbTgPY7rNc2oMYBSZi6jw3UZa1eLez5b6cgSE22cnWZirhT4Dvfj7iwet4RUAopFBT4pbHPRA13j37fppww",
  "key25": "5XfdCL5FVYGvNWudbtaQCw42hMj11uoafeDyaRBQvf23sN1BPt6s5p1yMcCkPhmJ76qus4WwWsdB88u1AT5Av9Fn",
  "key26": "2RHxkMK3dKbZYDXzKoc6qBfuja9ULAtb6pywhndb68mrrVKfX3DbixcKPps3dzbF5y4uYiutNvssWyNUwtQF4LPJ",
  "key27": "47mbEtUUGomtEX7Kg9CrMcsLPuiiTndDLf4Ccck58j2jpUU2eZid9GybcUkCWbvtLeiZi6MpehhiCz6TgG9AbKrc",
  "key28": "2zVaVdDaN1MCEWM291yTg9fXE7D3GKcmPgkBAzi9qAFppBZa4CPNXYgnejHWDazyUWxoPj5dDinkFavgcDYrL885",
  "key29": "4v5RNpkN3QepzHXgm3S8QnWT5V6tVfm5d8m7EwvSYHZju97z5oPGCsbEjTHjHeoL6uFeJHPgwhRX9xuzfkdvB43o",
  "key30": "3jpvMpT2TvjgwBTnDDfkBNVu6Dffy4q7NY19ZnzUM3FyZiA7YJHhRkY8TJWu6to8AX9sosL2ZGTjen2AWVxrBGh6",
  "key31": "2xuk18DZYvkrLUAEwPT8RSsecci1zPDH8wYq84EbV7e6Z7j3duAzqqPU8qz87h6ttFETwXtr9zaAPjQayjp2WRch"
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
