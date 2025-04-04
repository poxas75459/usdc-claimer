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
    "3VbM4wvzc7iDUPyries7GMZzMUuTo9yxMqk42cThmnkDmCVp592cnaoxU8ZpTSxCzNBTYq9oXmPaPM8WktF729Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lqxp8ZMx51X7urRFhABcykfGLhEibKY7uQiwk3YWvbm339KpLwfgTePQaqRWaCtyRBcse9UbpnVo9sWc79ASSE",
  "key1": "WmvJ5V3JLWYo3Lw32rfAG6H5BSmRcyBgeuKyFG9H3b5YYGJAv5SBRn8s92mo8unVH49yWwrZ5ouSG2dPwFkQL8o",
  "key2": "3eaMaxqRLGYrjoDB7obsxqhtP4qnfJFnT2M572Jk7BytWKwRnFuY9AMD52wivRuvzDZTUrwaRrTYonRf3CMk99Qn",
  "key3": "2yuLF6dixG75jx4yLgpw4wByPZd9HfkJWc1f99bfHc4j24Z8fpAPser6Tadbhgzo29j9chDbEPCZqoovhLimb9YX",
  "key4": "5axmz83yu6t873kQHJutb4QyUXb3dv7n36ChS9tRZqADzXzuNWbhjmxfLsXpwhL3MCdJcJoLW5u3Pb7Lskc9h4Lr",
  "key5": "5Jv2G97ALA4UMhukFXESDirULFJtRSWnWpzM3cBP1czJmCAZbBcXrQpZjeMP6NW9KShpLmWivuxHZn6E826qL8TU",
  "key6": "3SL2uERd6mJ9QUwTv2rhaoCMVdWaSVyW4RMuhJnx8TZKagKAsKjoSc9xc5kRjxSLWnsVbYTYn5E1VsX3eUKQGXVV",
  "key7": "2zCnVk21ByJTc7StGsdTHVSxy9gvuMJAQMeV1Ao2r6jfcukNTi7qbm1YJzWo5QrU6i6sZMhXmvGspTUE6xPKiMxM",
  "key8": "5zxLdbxZKEAYfQU1BwcWYzwaiTZNkmAtFtBsPn5Cp9qYXtHvd1qcd7PNN6jRsKemdk9JBwy4hoPQDLzazqiWYtcN",
  "key9": "2gxt6yTVoUorT4hCubXaogBtNVwAknbt5LzzwSVMiY7BTfmjkBsio1bSshQ9DXsh5pDYHTgnUXhrSb8PRzVmoNwY",
  "key10": "FHcWnt4xb5uwhUm3Sgh7Mbxy6CzszmR1Dfkex3WJiNTBd9JtNj1aS5LGiE6GkxMFqaY5sQYiiwHnW9zWCGKD7oY",
  "key11": "2AfTU3LSSoK7k2V9B3sYjiQF74VzZUNHP9zzXHoHJHTBhT9Loe6LFKHAAvUN9ddP7gru7aKoRBpMsSSb48NDXwGy",
  "key12": "3BwLKHGu1CzJkJ5iW9gvgsP4u1noTizc5yH3uQ8ptEQgVhLDmKA1zdzJXiJXxtN5LZ3N79PhhY98yCNLGbPUgDPH",
  "key13": "3GWjBpW9aSaAD7eM5kVPRXfRURSs92T3gyvU1y69gKf43TCBwCqTBhefqr6dxXC7fqsw2RMc9SrL2Kq3vKBa7sSn",
  "key14": "nu3rMbiNKnHa3mnCL3bMcHiFHWQcJatwANmHsRTduApywDNa8PWZu15FUWurxcnWCHHdpxYygduPUxMt4jHDLhn",
  "key15": "4mvSb4Xgh12QXfGUorGZFSDastuFkaYp6pYtHYQuaJrKzfpMhKH73WEt1ZhYpxRZf61dFipzQ6Ue1MGUHGxbDvUE",
  "key16": "4ACjc9wxjskPUA26Ln3Yi52kZznZ3tLbmv6KePZZQLrCM5H6jJJKbgZBdC6W757xa4Ysb4URuwwWfrkkYFSPeQ9f",
  "key17": "2V3baWuhpcdLBjRYiB4MUfogcmYQra4DVjgHRNnjdf4cNBZZUwSeRJwwaDGjNgjWCrTWZqxFV2v6rn2xFsyVVfCJ",
  "key18": "4mghWosUqE7qJ2bJJN2n633Lherav68UE9iLGwaeSLrH6uprmcCuy2XNtwmVgxfsj5TGiHZaEUwX4GBcupf4Pi68",
  "key19": "j5jjZtqvNkrqwLHdR31DHiR8qa2AJAf8jA8Ajfa9SWoE4BS1iUrKm8aLgCejSTroVruWQyGCv3fUVjzSSxAJJnJ",
  "key20": "3mMbaxwrv1fkZLxicUrXQynwkWedhnxtuvhVhpPP2jeYsh4B4FTZRXtLtwcypivfe4r2aSytFpHj5fmA2MZcWxWk",
  "key21": "3qep4Ls7GGSTHVwovPM6S35vPaGXwkAc6ZDYws13RGQiDohhTAjmqy5Za8JfZYusuazgPmjAAWtH2QwuYdTJuRWM",
  "key22": "3TFMUSocshsP92yNHUVo9HoSy1aEPBk3d3s8ijYmhFNbjg737x5cdbmJSDPGRgNrVNrRemrs9WEmZNrZsVaKo6Kj",
  "key23": "STPxcPPajLLUEm6fk88fpNo9K6JmJ3Ze6k7K4WxwXXdmQzyhR1CFpj2cuo7nL7P2WXpq47khiFGjbesF4JCLHpQ",
  "key24": "6q5D5Z7kKVv6jeWvsHmSFrvz97y97YFjDoR5bRxFyCcNAk7zL6qyZffNhdKSctaVdu9TgAaZesfc5LWkEcvJjXU",
  "key25": "4ANNEnmgR4x4HPB1Kn9DiL4qmvySuQ7ztdawDhnFa1Wj8nGnoh6LzDjqSnRHdgEaJK9DN1ih8ecFPJrKnghPyUNL",
  "key26": "3E6RVwRu1ucvSR7Pnnspa4DVUuzZLTaHeNSjGoXB3abY9zvoYzcGTu1dAMkwKNx8Uc29QknTCRcZLs7Cd2hcuFkH",
  "key27": "4wvMMng1MTA45jUi3XjYD7eyiEMvyTHE4DajmULibDy3asKi4iPGedyqesakJZ8gFiCqe98td7FjwFfyyJy42Hwg",
  "key28": "5ijDBMih3FeYetQikAqjM7cncKyjr4AB25Cp2xma1dGFHj9Hcqh6qstrB24b6wpaUs7fwnGw4xWJVDxwvb9UQW5V",
  "key29": "3Ka9Ra6vHPY3w6vvuyJgVYucsaYZxeNxm7Azaq3iHcH3mRKT7PkcdpgBmCQpxuNnKJFZcLj14KgbTo31dDaecgMR",
  "key30": "wJ3aQhnXnxfPCMQPyZfQgjVsqE8HtVMPR4uob4pKVKNVM2k8XJ2nzngTg7WcdhvERtHSszasUAcqcg7yBVbMxoL",
  "key31": "32X6mZ4z3stzCsveeJHg4vvNmoKKniTaT8GuVDz9CQpbtH11by1DNy1BBvrYhnKyJJRktVYQUG23JRvCsouqJwQK",
  "key32": "2w2PfTZtNSYPnXroE34TrzUNAPBsWQ99q85sHNbtodiYEtQ2y2zDia8g3odqGFFn5DLua7tgNdfJRtatUhRtfwob",
  "key33": "2my7Q7VwNaxnQN63VQ3cQ3aEVZ3Xyn1PG4XHrUvu9gRAVGpjqjJjiyiSfuj2Fu1LCM9SRZS392HTCx7uQJjvcC8f",
  "key34": "3UiM2fEHyKPNNLfoktknvQkAaq2CQDzHZfJX9oSVoZp4e1eBcFY9w74APpPsfYXbhB8X4rvox7MtsaEF8j2SueLc",
  "key35": "4DGi3t3YVLjznR96t26XniuqLcpG11kM2dQ5f8WzmJd3jbuXLrLR5DPf5QUwSFA8XvEtqDy3SYzdtLgfYkvWyo92",
  "key36": "4E6KNDhVygo1QyozLt1NUuKcWZyVihZqn4JB8o34F769nHWVnG99HGsTrw2VJRuMWhXjWPEzsS7tdnoetoDrBUC1",
  "key37": "wjncWzjTHATZPfbrd7WGARQnoBcKhhjVBHEABzk5XdeqNicyqxUDmFax1srM1R6DFnwKPvMKA2ooDfNnDn4v3Z9",
  "key38": "2udHucXZwVfqk9UudgGJQudt6nWMSLzVF3ourQiWKPwJEZftXbsVYSbwGSzw6yXru8NJLM5G4R5XFQiLMxZfnevu",
  "key39": "2W4sLNTefg4UVWQuzeG7EWH2rxkeXqwHYcgTxsE5GoRw5QLgKvoiVry4t4WHwUdfF8WRrHRQ3D7aotdqwqFzcmDN",
  "key40": "5Pgv5S24hvNNGXk23UJNBedBtacaToFk2pwV2Sci1rU1oRYg4kB1CQT16KFpEA9my9Td7pfceXS9bMX1o9R8cSpG",
  "key41": "27QgxWZo6foTE6A3MXmjFzMV6GMpYvVgy8s97yBpUjiyWPi6afGRgmMS78upXzmQ2FJTLVuwy2oCyxchMEyNdsBC"
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
