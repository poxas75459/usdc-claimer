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
    "2ak7w97HtuCd22D7TMGQuUArFivAwFn4NADZ1BMd2LZXNBKmudQ8DCCMZVGYJshgXYoNv6FmPLQhAmmcYsxaX1N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qoqop6KK4gKJJEJZHzZrLfM6gszQzd3XFE7rcJ3RbZVKHRGB2VjeGAF5vPbWv5VRZKnx9ycvZEr81djhKrHeCtY",
  "key1": "5KwTr5PZpR2gH56RVFqDjC7rpjn5bPNHKp9zGeHZPedgyeLLqNmHHGWC6hsq9xNzpvHoZ6D8m717DDoBxzMZCiz5",
  "key2": "2sQMnDbqDnCXD4qmTcuEivM7Jy8dKwCrFJizvsR1NmEah351CqW1U9MXHZicz78x1Z285yKJkvukrGETkPVNcKQ4",
  "key3": "4gT4MphTYNbzkq4TeM8KXPcP7HT6J32GH1nAKv4do6ARKUbfaK7hQarmzqMzbAG2hCt8H6cCRKmt66HPYgR6otS7",
  "key4": "2uNhLKuwPQb8UWNEYV8SGEmUNu4CJyhAHdEkXZ25r9MZJ1Jou1RoEAip4J9RmQ55VPZtbbMVNJd6nNxrvJgLixN5",
  "key5": "3MgD8Cxxoh9eVsKWVZ67jQM8qE7mjTe3W9jsx3nNDsdWdJPBQyjSSshijqV5WjLefsHYTKYnkEoKmRFeNvxoBHah",
  "key6": "45opNZSkwudfoB9BdvCisvLAE689Js7YyJnsznkCosE7b3RdaLDa3skopJLT1P42eZdBJHSvkGY3fXpoLUK8R3wM",
  "key7": "4k1vWFVv3X4A3ocwFSRYwG5KbN6TQijNWMjFvgVAaCfXPXaMeeDWU7jhKB1BnfMaY4QEXXX1ov8PAiUC2ds4adSB",
  "key8": "5RfXeoHPNoLMMxmv3LQfL5CeKFjpiN1kYvvyjCCAMc2UMHDPMtKjSJV1GfbzN2Yw1sQNsEAibyYQku2YsHXpj4iG",
  "key9": "5ao6C1FXiJdCYDFjeHaEY5m2TAU3QGcVn5Ufd21nkGrLMKX1X7KYhRfixyxqBEmY4TZQe68unkNVzUNnAExmSMzx",
  "key10": "65b9HQVULBYXtiYy1vjjPbtEgrKw4zvF5uscZh2Cb1oenyvMDQS5PEUfMYHUzXF33JdHACJukRt3cCF2fNToWRu",
  "key11": "5y84AtAG37URxC14ZLxXqvnsr9mwCwi7voCX7f1ioBnr9ogcvWASRKgWA8jBu3wqnkmJCdwzWULuRsPUUvSh8erN",
  "key12": "3BMSRB6P5NHMJb5HM8rqKExhx8V41yui9kG7xRtAQu26aTdnyqrV9nq69cEEeNURe1nQbjcMcCZgMCrcojNPtVyo",
  "key13": "3XYNBJ4VyfsG6sBNjTKDRmtPhf2nRrm95BVu2zHcMVRu8CjpmBT7Xeyqz4pG27nYrrQKxCYjN5t5kuCMdMCPAFfo",
  "key14": "3kJybudTWot1iEcBccTDxV1N97w1h2TyGFrjFNYGPhfsnbfvXYeFyVWfvmKhnsroDdgJEK8bt88KYKRsZGUgdW7B",
  "key15": "5dhKtjWPW2PbB1E4i9kLR1k77ZvjoWPqQMLjKwkXZ84R2xnnTfddrf8iXEp5UCL2WHZ75RM992iW3WFfErVJCkHa",
  "key16": "5sNmdf3AhpSsrUvwRpc7FYVcjGmo9xPmiP7zpjqQSchBwvfisFBDFtqJ7EMtGLxzqyLhX5isGxxYiFeiFjeR8FmF",
  "key17": "3YK3Ti7o1r1JJ5LPoWAg4nrKoLcMJdsYfCJiv8Gs5Cwy4FYReGSPuTmDUFD9SyJEndFwvLHefSatSWxL7uBxYSro",
  "key18": "2g1tWBev7mjSkgLbJtMXx29LxVCnKtBdnppVP5XYbGShZ8bg9SdrYnXLEnv5JTz6MjhTM2GcYUVhDaXBuM6xdvUU",
  "key19": "4VHLGuHgXe4cit8stwzuK3aWuY1qu3YPbbNK3w4kDRozqiCnq6AXH2WoBpisdkCp2jQt58U9pDaPLrxHYuxgL2kL",
  "key20": "3wqM8e6TPwFop7XUm7tDt7u5vn9JAVTgS64rGfs5RUuk7nH7MGeL6uxzLhebfH1KqsKK8gyS76QPsBgNHpnaEdNx",
  "key21": "2Vav9HNPwTCNmSDyuGWJUa1SVT8mQ6mCzzvAubpBcSs7iiMB8qgtbr4AbGLGuaDCC2B2qSoJE6sJhCZyuK6eDYUA",
  "key22": "239yKQqazLm2DMauyrjhG6NaThbY6dsVgn12koggHSY4b7cRsf7YgQ1zFx2p4ozg9A8a61SunFZL5Zr7KevBKzzr",
  "key23": "jpuqxmcTheiYyuaErvHGvSb7cJKbHhJdeHGZ58Lh8AW2aJEuzs7adaxPEGzSC6rdqtGBzuVQJunoz9svkFFBXe2",
  "key24": "B5yZRAqkoTU9kEMJsm2ssVqutqQfcEN6UuL75DWuQBsCDQzTn85BY9NYUWA4jPTHYbvrPrSeQXZbAaKY7dQNRfj",
  "key25": "pmt9dHXg2TKRk34TDfAm1jGHyf38jDp6fx9GBpEEhVjgGagtbgVxpQZ1CaJR4cPmsdjaHTydsUmG2ZWq9TSjDE7",
  "key26": "2pXNSgRBw2PwHQwnAWwSUnXy4axXZ3NUAJT8JqiPZNF6SERiTN8vDEL1EUUto9JqxGv58ZNGGJfMjRus1E7q29bV",
  "key27": "2LxgJBHzaoubC6tcJp8FDGvsKq3AzqsDJgP44L1engEH1wYPGXQu2Gp6P4gY7naTFLnnG4GdXXsjqRQQRrVDdrpP",
  "key28": "5mHx8H3YvG9m48vSSVbDaLHy1opreQnc9RCvUUeETfxg1AuWpNNK2WN77GpQRtZDu78os31qkjTFKpRuxUL9pJVb",
  "key29": "2YhUjCuQWUjzE1cyZesGSX3LL5E88cpCiePPRo4zpKjnv7MVjCFiQbrJuzzZt94BN28nzzD9395vZUfVbXPwyLW6",
  "key30": "4hNGP7iiPui7MZcSKWhobtm8wbwaLFKRj75NDEpu8XTwB5UN6i2snQAADmirxbZpUhZLnpxVogQerJTpnZP25HAw",
  "key31": "2d9FMCHFNSDhjUxek1MB9jQ95KSdGWr5ytEfCWBE7RxtPEaSLxjpf8CCu3vuhVtZhV98RQtj41SZbhFEtMCpYLRm",
  "key32": "HdFieWEJ44hXtzXnGaRgarxaggpdFeGFUjXxBtvSfN4gzcJtz3bkkZYR39CKeGkyqYG9GL2ZLsooRcxKT48xDng",
  "key33": "3ZFVgKPRndCkc5SAebyxxWt1W7TKUgmHqdJwpGfVyoPdGEAg39d4ReJSN698yTZzgoXWRVL5kLHEYpaeufwxvWqZ",
  "key34": "3beEwaNw9xYTMbEGH3gNuYJWecrpeHZS6gp4fPTq4MxNq6kbGEF9VYsT6CXnRq5cKD29hSckiSMNocyZVwjZUU6Y",
  "key35": "4uzQfkzRJuD3DNFX5nS7rJ8GeSF62t3YTK6b4664QaNULvi6SfkXQPm3veuvWjt1jYct7dQn5qayeWQNBz5YBtGi",
  "key36": "2aSa68dPo2XzvjrS9wWDYfekbEsnGmZhKi53fPwguDGv1pXu7UHKaf8pwaiv2hMPxACzzQMwTmXNGq3iSiQT4e1U",
  "key37": "3xjuNVZX9WBavwe7qGi22Wc3ZZQcEZFLB39mHJHAVgnJREfzZWxo3cBdy9VGMxwtC5EuzEzA63ZQ9N6vLs7WG1vS",
  "key38": "3i9ypbKRYYjBmGVngvKRpqEcWbCYpJkLbEWyNkhA4gWfj1k6EGmXNg14yjau7ZEctXizN6eenubEudVLkXs4NiN1",
  "key39": "3YbgyEd7YMct5GNa2gFMqQ3Tr48PJvug7bbCrfHqTWyp3cMZus5WoS1fXPeeQdzyQ2TTm6KQsiHivUu3RLUiq6NM",
  "key40": "5CWri72DeUhQFQoPFoqtpX1Z2DZ1A94Zn4QPqABoFZaSnU7CJXCNaAjkCp3p8xJxNzuyiq7Hep6v4VZVuxmX8vvZ",
  "key41": "21rPtpW5iYS38ypoZ5XMTGjFwuGUNCFEUMbb3zoRo5ycgzzt69Fx7GSMcRYR1aF46Z5TqKxX4BpCgZdFjvKCisRR",
  "key42": "5DNoD3GAR1DpjcrvwnNXz2zDrRnUUNwefHumzzTQZeGL3QnzJpWQ4FFuV2sGX5vx9r9GHvBZyFDsvrPFhCbao9Xs",
  "key43": "fTBA6zMyVgfcetLp3VkNtTZF2GSCv6WJujcH2BaszRFMKJX6Le6rxeTH4BzczTjJrVNjX4a54cUGjCTK6c3rntK",
  "key44": "4yEJayeMVmDCAu9dAyEGQrNbaqQxz8bmenoKnDr8GD6TsVBEZCXtaSghsUVuEEvGv77qfWi5XfU2rt2HBaEkLYHB",
  "key45": "54GvK5ZvVr7eUf6SLHyNuN1xkhuJxih7RfM2wmx8Z8VYhFXsbVZeaxXpgqYUAxJyFXYijPH2JXwEXdmNQFGJALo9"
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
