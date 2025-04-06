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
    "41QEUVXwMSYj3USUf5yfp2tYLHDjWU1bskU1mAtsbHVwzPiN2uGRK4CH5rd9CzUnKMcbTnXHRQvJtMVfk1UBdxKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkmuJ6yfYM3ZCFt7o2MG7zCqx8BkFKQJQK8e91QYrrpj58TGicUXzVZBHSuXLgbM97dmBPJSa7ZXYRSCyBouZyu",
  "key1": "3kv2bYyhcFkaGe5kvX6W2V1ufcoNQq1wn2aSehhV3ZVJNLLGhaW1DoDp5yQowotM9o6ttRHdTnYaStK8wefgEK5R",
  "key2": "2EYT9hdbqiAGUkafiZQ6JSE6QboXY1ioNE33ogY1m6SXaL7DQf9UV2XMBGTzeopRc4P7FEiyH9D69dzVYm4p9arh",
  "key3": "KudhPCn3JjpBJEaJHzV8vwsU8qSVPiUrCCQuEmuYJ8wdwTEgcW3gKymsUcwgSEoZkbG8TY8QxgQM9aWDbXTmczJ",
  "key4": "NTBcpB4PZjV47mQ9rnixH1aMiP66hUuUNrA7Nv6Ud2eQCn2kRsiYDCJ4vYttufwEbTrd2dpoadp9FjbDRKZaBh4",
  "key5": "md7AmNs8Sh9U9NUSjPaVqBp52eyQDMNNdTjSMrGnPXLMzzjju4HdCDB4yEgZqYoziQHGEEGMjSGQ8HTtajidFUy",
  "key6": "2jUtypkZPHGgdFf31kSjScDsigQL6SZxNerpbJdFz8mESxzmtCVyWwKiSzaPjHDtfj72tYHyFVWXLye13fi5AHFQ",
  "key7": "4LD4uu2exBDhVRcipUJC48A3xTLp7zvmMsm6VKHuNrNPix4J7LsTD4d3rpYjvZ2HDnFJQUf7amqiwpqmzpSpzwxW",
  "key8": "59JZYaWhBVYou7ZG1TaS5K9s14i5JXzuqhKKhAtBrxeED8HecBtxhgGdxRSubsDvYBsBGZFSLifN6hpQvPcdTdhd",
  "key9": "2JQSwV3riQWtXwjWdPjEyaW6NyoyHgJtqaBtWbvp4LGX3YZZ7UwowJ63ES5833bBTa9tcLWiUNooXDtCQcitzJdw",
  "key10": "4tqnExVNF4AKcNHNY4YUddp9W6gZGhoSnLZvvUna3ZiQN9o7jj5yYxcNXpnc4nS6Xu8N4uddQd8hwRmmbqsEo8vg",
  "key11": "2uRCxZdvET4Y9DrJmgoXpm2URHGHbWyGf9fQDKhkTyUQMumU4kZp8YEHa1DmPKmqvv861wqCqFmDAf4GtQFZL6Xn",
  "key12": "4rcT1gDQ41u6BG3vnKv9FA9h6Vr5uKKSmoA52iNhH3RNRkwKkNSpPZNbDgdVuyxPUC5s9ZXKLvi7u4TZHTX8SHHs",
  "key13": "baykt5cekBdrQEtLieUy8hMTMp9vRupfxikXxJKXKvoJkguLxgRW4CX1FvjYxcTHKbfRedwJJ4WhQypzXJvgUJm",
  "key14": "2JjnBfPNtNBLjiMJxx3scMW1y1XJd9PP1kRZSfXvh6V7PHxS4DH8d628ShPbShouck6CdpL3mLAujYchW11E3PJD",
  "key15": "3DQ7CEPtNeuQzsMtjgEmZBPt23sbCwE49HJYeyCWGHfNeZ4J38Npq7UQ9284NGfb2oLZJqFQxaoxJioMSJAQizJm",
  "key16": "5DGFmD7ZjmSNYuSCMYt2PMdWkdyePvdVUrfGdh6GJeacs7jaQy2Bm8K1cALYn2X9VYhe9ZU9JxPhpMpF4J9bn5Nu",
  "key17": "3KdFv38WY1ey5gNUcnWYXifdHhERb27Jt7de2krJcRuL88a95nQK1LvyTfogjXJRrG2f5FukU4HXCpHPtQSg1zDc",
  "key18": "3YgzDYEbTKjEEXMx5JNQGNK5tBoLK6ggmSAxeb4j2G3SfKwNSt17DNQ9L6D68MoCwEf63T1ye4B7LrhyfLUdHUdA",
  "key19": "UpxbAz5TpVpV48J28Ct29bZ1WrqCRXD89oH11PrHJTj7B8A9BedupUpfGo6uY3FLnc9drnMkAispqa2NPYv2DVF",
  "key20": "5venEJSvBokHxtNaxntt58JC5egZhbTvpZG1SCJfWXLeDr3GzMcSZYZoxbNiS5bepMD8tRVthT8LG5A4yMRJMtDk",
  "key21": "3YJPaL75Who3M5FpxvnrbUm53JXyua4K7JCLKmGdKfDe4Jk1jtQgoswVc6LCnRiBbm1Pyf4AqTQ7HTWMuzdaL7yy",
  "key22": "BdwxVfjRa4p7d98dYcQvVXCyuqLqdgGPmFpjhJfqzDVEuecCwzHxFyfTKz5rDf2BuD8YvshM2peEYoYGFFugC1C",
  "key23": "2vcNQ5ZJT961UwFcd3txKvPiWuu23MsTYQFKCSFSZ5kbTbq8NrtnE1BJUWQtnH5gqFRhR5uS69fMuNzMscdhKSrj",
  "key24": "664vciKqaboN67m8mTHdAVed9EsxUU5279sGtVVvLUeQZQkA4iErdDuzGz6oDF9aCSGm5aJHC8a8pyRxaVsi3WgV",
  "key25": "5ZymF5ZbWHyoH1akFR4ochzwj9rYnu6bXhkrCXaRoiZxqS2sonzpxmuKcxwiSfU4SpXbXepFYGfnoq9hfxbucwsX",
  "key26": "rkr3BjsV1RxjWW1homahXToA4DvSHKSqpGHhMLKNxgdyp7VmqjyZsKwtCc8H3rx47eY2YzmuudW25kvsNyZWV8z",
  "key27": "2E7QkySa4RMdU9rfVYhewMXsKWrUVLgP9qG9Mp67gQhAKbXocqewB7Gkt42xHufXibCerU53FtYu9AwdqB2vkAE9",
  "key28": "4SApPBkLTLwcqrmW48HbrEjUmY9WHryeBrqJdq93M2WPTq9p9b8hHwLZcMbmnJisc1iqcmiXGk98VV7uLxoSxvuq",
  "key29": "ZTzRxn44TKYchiVPQjoUtkgzJjMtBB5R694QspvNDfXuRfqdoorvjnovecnaWRd66TCK3QUzFM7rWEeKhQVbVFT",
  "key30": "4khQQ1KbaqSLZYeNgBJVHstodf9B2dQtrb1mcRAZuXuLobqMwzFsFTkg8NTxSHAcYMusd9xQKFbgjSS68CH7AcDw",
  "key31": "3Xt318MPXwRGKwpovhG37qun5wUpL5ZwZBrpReunDnCCN3PpYrgPNoiVu6BiAYhZWHoaNumayKVN7jzpe6SrTKzk",
  "key32": "3FHZncxoLh6MeRHZd9TyKnA1wGo1Soofqx7n1wY1HyDd6bAAMY25uLD14mjeL8ShwSPwTRS4rhd7tREUZ1KmMvDP",
  "key33": "27ZV3yNvzVc2iMaEcZ4enn81tL8tte6aDw3oN95B4XKrYTfh2w11z5b3mFnbgvhce7fgKxkW3uJa1ufNBoFmS9d9",
  "key34": "Uxzcr9PpAN97XmAPkTrmSoHHci7mHA9yMsYyFicRiK9ZiPLYM7NgkY9Ya2MRcNdCyrrMNps3hnNJkHrxeJeSGNP",
  "key35": "4BjXMt2gj2PCgEyVqfo4kDAmudA22k5ePY5JAbWkb4Psq9bN44CLd7sSPR6cB1Ec9BhQZ3rxLLqJnzrR4j1yoCJP",
  "key36": "4bVjWFiu2HqhsY9iefnwc1HSAAiWqP6eYrN1anpR4yPHQ4vDL2emaoag2zNH9KY7gsPx675KxQiX5eakQYH4MD64",
  "key37": "31MVQ5sfjeGHCs4E9oaVNJPsiZym1KGfAHZrk4Gfm6ihJi3qPmRgsNY5d2JGJGsmdUD8yMBUf8ywZia1KhFEMSKo",
  "key38": "3yCpHjPzZHHhZ1SfQrLG8XmYnw5eMmc9YLsbGKdaWATYNGPwhcso4zK2hoWDdrmgaxuHVFQVpLxNiVVLBqMv7gnj",
  "key39": "5WtJrkWtvSpFDdDgYap3t7Yo7nWU21R2RjEevy8qChS9RjLfPE5gEdNbXa4NDBWFhXzvUfisEd9k7PY97uMVbWbM",
  "key40": "yqGnuyrpEYjjRdFa1HhRzkF6riQctddaLcR8V7sLQaXfQZCruCefGhfkUHctqCwuvgVGoUMDm78Fw54Dxth1wa9",
  "key41": "3YbGWKhb68SqY628YN41qiRMgarWVi3jDvjpTCZoTYeJsKxYF84tQgq32spmDUxvcpv9tHbyDHsJYDQL66Tprq2r",
  "key42": "51ohaBhMPC1s8uSXLzXBZUxWvbYJb1ud7yET3jJfQgQb72vwrb14Wu3gYXHMQYYacbfsWZNdgYCzWHCrtmn4KUQf",
  "key43": "4rcMeAoJitqjiVeQy1qwyyVbNeYSjmfQz1WowgfDmnU9sYiXNtnp57i8TcnAF4uqNbUAUgFN5wmznZcMzVZaayDb"
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
