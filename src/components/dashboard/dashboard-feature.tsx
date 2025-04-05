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
    "3RN6b2iYxf1DChmV3FMFmvDDBqR6La1VjyhYH78revbbdnZriFsw3GiBAuuYfDrrLwxbUXmQ2aTy4fYz9JTRSNW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmQHGrE5ZPSpVDs3aCspd2m5qKsm8zu1c9RxZtQAkqadWPtNPYak8eX4e1rY1ZoHth8RPAmh69CE9EK6Fce9j99",
  "key1": "n3GsnpwaYU4eScfwE8UPES4HfWdJVjPaKMzyHRBfKohtcsw26J9aaUX8rNJX7CsBq6cwcNJkShnV5WmTaqcuQxB",
  "key2": "Kp7GYtdec8QbDDiESPaupmkGPAi8LPuHe67hMymoLV8qWTan9UwiNdT1rnvJWF631JwGdAq89ZLwVu99yrzz1sC",
  "key3": "3Q7yRVEfaT9i9psypJYAWUuVSBRbxgbZ9e3UmyjyYwn9crBYczTr47GsbwPf3oF8nNVucJEP6xDhiDBXoKy8jgTt",
  "key4": "2dx4BsGJtn1YqPMwCvnrv7FuaNpp1sQa3oYwAu8B1Wfi9d89SX8V43kUFUL1CBqCfQE16ZNzC5K52JPsuUGnehKq",
  "key5": "65XdQ75KdoovvSsMhCboa48evwy33SR41j1V5RQFPiVNCFsPmfHPjqg726HnJDc5eQCQGPGLXophP9aBo42znBbX",
  "key6": "5ue7BT9d8xGMELe1Kt55zd5YFfnncxWpRmphGyWBtf8dDhbmSbrfJzJx2uLQdpbJRM8N4kSXqU1mECiY375bKdXs",
  "key7": "4CMcN5r6mhmyunqrXShzcLy2zqhfgNWihpRZ7KhS6TxW4s7y5732RLoCd9pp8ZAjrGfsCKanxZUNuvSJGLgzX6eR",
  "key8": "4HCwVg9Q1jhfLvDJE8JocB9PHayzahXkHxPANLDPfBuBEweUpJ6dPHqFAStff8m8y2ZtYsrTbGeVo7AzvrFEKPat",
  "key9": "5pefF9rkXcdQqxneEBtZQErbCsWxrFWz21WiAdCDtP3uanBjTwB1GLCYQ5MzLPTRWb5tGXvrieDTjtYz7z5AE6pu",
  "key10": "5L5pPQnHWzsJFeAWQ1RxfHgSWgDXWWW5GhjDCk8mH5SExuzuU8e4h9FaaRMKRAzAdMcJUqL9ST7Zy9px4v4U3k7J",
  "key11": "4xtNpqNg8xRfU6niFpNfbf8EqFYWL3mJzXitgw32ZfgFstU7GYhZ9Vq9TqGC2suETaGv83MY1ChLedw8hiiLTLka",
  "key12": "4gzsKoTGA54NPTt52HVfLSoepNpavz8M9fCKyYc9eWjiHevrwap3bca9xKmhNNmakvQob1iGuk6V9CuvqFugSMBt",
  "key13": "5GZ9qzF2UgUm4es8SuB1npGXJYQFuCri6AZtW8aHHQviDmcEXzGCbAXRskGz5mjdhyXRH9SKyWZXV5BnMhm3W3dt",
  "key14": "Z9r7KY49vGX3bEM4r13MMMbnmKwTcLkpUKxAxzUQUw5j3R9yvi73XALKbCKPTnGbMzfLRnSuEv8vzGBqesceVd7",
  "key15": "5HAtPxuJ8RuQ1HU9KibnZpc646bvbENMWLjbGRjB2A2EknHKRodxsgn9KmnrqHZKz2YRpNdouZQg1XJt26YjgQGb",
  "key16": "2qJB7dFG95np8nM1XpP7XyJCHXdzgw9cHUGAnS3HveRcNtrMKvrEtYechzzXydtTTCtsUMN9JrnzSWYUVjKuWSQd",
  "key17": "5ECsN5UJxXq3MVG3FYjv9BAkqF1mZsBcZimTVgBc8TzgZDGPDLTuvSXHgxXaWsC2F9EUdo75tmbfMZfoXxYpf2JC",
  "key18": "rTwk2YSgeu6piGNduL1C1qfKfJeacGVsEcgkb3bxsN12Yok7qn9eAjmADjUpRfL2DqrXLV51JVnZsU3hDgstnPd",
  "key19": "3dsy3eeZRCJikeVtmBQsY5EVsQCcUDBmpayoJiL734fkiP4hiokYkqbB6LbK75JoS29aH2FRYsR8terbvBj8sfjT",
  "key20": "23Txbu2qw1UfjpadfYFb6nouSF1ccGHMyRN3E91eJbxP6xP55vcw5Nrw6qZS6kqbUuXoGC7T6MFgsm88sh4jGV3i",
  "key21": "oiDiNkvbgdKU5GEt1cfEJLcxV4BZq952L3JBcjvHpbcAQXNEMc6SmwqSYGnZWwkadQSCy6nrUEuZT2A3aaEsVmP",
  "key22": "4fdZ9o5yJ2TQH4vMKBVNT1zVKosBQC47GgFiNUHKYpoouugGeZSVhegd1dFoqYxi4Fe6qDPkmQob7XP66163E95u",
  "key23": "22cXVRpxXQwMKUqBKYa9YNgdNU6fzVQRJ3Doum5Kwu511MDmG11omBL8Xak9tzppC1ddczcuHcwZcqpwF16Cj8bC",
  "key24": "5sbYgZ3nWVc4JU7xxhY9R4tTZHvbi84YsjNHbpJJbAR7JbVMfvdUDLf3f1YPXY6pNmWgQzRrT7B91HS7wMT2hRVw",
  "key25": "3yfBu2HMPBhbihjSRH5qnuB2d43NKP53nmxc1DkR1eqnesEz2TQ6NwuCg5GADYmTdgE5bWKDzK5keNm5dvBtVMDX",
  "key26": "4JakqNDBic6VQZ4z96PYsweGZFFR2ZrLWP4jTgKymYxcW7eyDpfWT4fLba5oVASBb5WUfispinMouCsiye982XE1",
  "key27": "5RtpU4BdbQBCMG7n4J7M88ktBac8HmX9yY5DCEZbPkBgryXV2M8PF7AY8LmZc9ijJDgjJVMsxGWMCVLHvqg5C4Dq",
  "key28": "2ojwUp6XffdKjbgmVEnLgtynrSum3njpAM5p55RGSS2EyE3K9oHZiZGvNUCgDpTBXyTrBx9KQvesmuqdVDoEauJT",
  "key29": "55SsGevtC21TymEPhDuN2x8Ut2AdMuCLpsi7U6mH9Hp7RtmmQXChfkmuFnqVWdMtNfC2pJnGCMBBXcmnuQXQyCqj",
  "key30": "Up23S7eq3sCQi3EcTwpwHaY7dAP15JK86zT8NHDHZtWiNBiZaHwAJQT2ma3KXaGQx5UeLdFQJpaU8niDv1JepUs",
  "key31": "2GA2jCk5gQt93zC237g5W6KewBipQvhu1utyUn2Y5a16jD4EioUfvdkgXr6xxkkQMqVWTAhgStTXcS7FNcosaBsq",
  "key32": "5XzEv5FTkumK7CfaeCUyspy9mUR437vr6FcCFx4vhYuhbYLfznq3YgfX93PnPdSQrEo6iSWLEWHZKYwNgbmwHNah",
  "key33": "5UF1rGaeRtebeX62uZFeZVzRzfZKDFmkeLttKRMRT5PLUTpcdjM2PCeC827CfceJLgsrn1VadYAKcKDrPJTBPT7S",
  "key34": "b7j2XxN7DDLBmnfFJMuvFyBdnvWHa4FaZNTdvTEpWXSgEW2KG92yJFWAFc3RzBEqXHadJTGKMtjazge51uzvFGg",
  "key35": "4w3Rz83KDkhTkTtFiWdxyC7bPSUP5xPTPTQQZyGo1kbbuBBuDMoV6wWtBiZKaUHqfoYYoYLnyyw38EzVkvaezrPd",
  "key36": "4sCS8po9gUJtMD9gorupvL4J449WW8aX9GHGwWQGzhxVDxjUEw7f6uMVNAuF9DWitpmpbkFBapvy1C2nDkWDbMGU",
  "key37": "5afWRVcMLwTac1YrFj1uhRCKXR7tUkvAC7Vu5mHCuy4L4vmEfgLfjdw67N1FAPTpRoMdDN8sNAa5YB26AJKdx7JS"
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
