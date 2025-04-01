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
    "5z9JDQ6rGiKz1kRmNkRMiRXabqqPyjMyogDpdq8ohfVDXUZFZ52oM8Khzq6Y5k2kJBEiADzsFp9EheGBnVuutXfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Met16nXUyzHS2CatTG6ZZZw3jab7zsnFMYzC5ZdbvFDLU97X9PBYZgQcDEHhG92jWHqZWCjhdYZ5F1pEouqjRM6",
  "key1": "3NH1VwWyL8wZNTMf9G5ShniDqYWZ5WVoBMYqQjReFbSpyVM9ke8psjyHkjnyPpMaUAwWgtLGxD8ydhiWNQ5yjk72",
  "key2": "2433gknQvH2EFs2drvpUgkvPrTa41qVDQw4U3tr9nrixnMv8BB289LKn2BZihNi1QADgm21HViqocPK3MuvrdKqk",
  "key3": "5LH7DiqDNhxyQTKtKmgCBEpdvV9LoLkyQKY5rZKX1nz6MmaQxx2L1QaJffbCqJ9iCzk9vzXZSzWeUshTjN6gKR2",
  "key4": "Zcq86JodjsNj5wkgNtabXKSYHYsPMKuJ17dZZ2a9atcGUUspU7yPz9chqG4d2bbM6CLqF683zmRy7EBdC3Ad6AU",
  "key5": "3RCiaEbbzYfBuFkA8yg4ZEoAJUv63sWGZKCeWKYV3N75jqDUumUmMyeFZo87ojawngCQsDissVimtBsxdegUkGyK",
  "key6": "3KtTGnFbA9a7U8VxnwJQXYArf8MGxQpm5ZXfsK5UwCTigCZZ2qszfMjW7VSgxV2QwjB2ZZhxwAo6bG7S6KQM2c5g",
  "key7": "2ZHUZiLCnBQ5H6pS57CQQKGRZehzEnofLkvh3VsMr9sAjyLYAPQYLfsSGp5V5FRSeRZ5hnYsbLUk8EASnkWUuBZz",
  "key8": "2KWhWTSju165qgu9VJkQq99MUg4amW7x75CvUdSuNRFALAiLkoQNS8Tmq2qFGFga75LZtaBbCfB5xe9xTWqZJDeD",
  "key9": "5hKLYVzTbwnWoNwZcqwyDGDSKaeXKaRagcMiMSG9CE5Cuzft4puXLXsP8z8UxR9w7cJzpRyXd7ssN3Xai6kpNyoY",
  "key10": "3YZ2rkeghT3dvVuiA4LoSAH7xNBtMvX8foq5sjiBNm2QnTijDfxPYDoY8iXQXFpU2SBjwhrgD6eEjRWQ4yyue4UA",
  "key11": "4A7wZEAsK3ccibvMfRP2jzSNn2L3x5SjEgVFCnj8rKNQ43CwY3JW2mUzBJV9yRfoZ976aYkq4yRUomec8VfYyQLg",
  "key12": "36NVjVozmj3bUCoqgu24K1cj345pMKmfVaT5oiHZyZUzuhKucPxcmt32kWP5RzktYin8NBf98Lm9sa2Rj7Uksx98",
  "key13": "5CC4H6zZ4sAVwSbFYVGpGPMmBPiwWU2DrwCHYHq63HjFMStNopdPbbp4vxPdKvLQQC7CageC5MzqP6c1XCacLPtf",
  "key14": "5v3goRkKkzmRc4cbcsF9GM8rUPnno94dYEuXQm8SWJNpk9ktCCRh7i1T8DsCN6rxCwmT2MrrbkBpTESTmY6Yzxs6",
  "key15": "3SSNiJ3p1WHKQRVeah9B2iYknzJvDS5zoQ1TC1yCtKNRkVZbGeZ3REX8EsFkCDfjjBJ24E13tqqWC5cdcdpwkSHb",
  "key16": "3QGrx5KzB76sXXawGRJD5qiLWsx2qtkBdQpT27y4qumo68zNMZcUHapsFA1pRgDgRnScKNiCxkgKLUpExG4aahye",
  "key17": "EMVz7wrXXbM4XZCZWwAZ1xKkduiCFe3VwBXdXaFJDkXZeyvjDqDFJ87u5wf2frQkrsBDZwRDKHT44D9jAEBKbVq",
  "key18": "5bTj2oVW7PCtsx6AiS8v3PCKENWBVbXKpkdtHMY8GQxN6f1fQ4e1qUgKmkyGn8vWr4eLrBBzFubZkzoaK7cB3NgR",
  "key19": "pexeHx5KEA5UUtNZBjPGcayZXBPmM53tvCZ1KZHWihgdZgH3GhXquFmtAZo8jDruaWa8dp4g6UptQUijEMAg5UM",
  "key20": "JPLDa7ao2dz247eVV5CvHRcwxafpR1Kruzd5tSpeNUCkC9JJyaJNFiWiPiLV2LyMao5Z4XetWKwcsCjFXzghGxx",
  "key21": "3dJpXx7bi3vaHrA95GXkuaozpK6wBkWSwhzbgNq3iqCv93zNSMoxo85nznTmsWfYXYikJHikNbJwaNdxokLeUHmv",
  "key22": "4YuCwQcJeKABQNJ2ory1BmHSnCq4T14S7dpBNKXqhm5RhMCBpauKvUZc4y41KKyEkfVcLe94sZhndjtZMCJw9WFQ",
  "key23": "51QwbHeHwK2m1kUk5kjM5dKXZqRB73SWxNt3kUuJoPXb4BzEwLFjrQ6bkPEPijaKhjCTRBj4RhAadmZgLhfdRTQm",
  "key24": "3R34NnwAFHzabVHu9WrmFvgVvGswpPBpfxYZBSNVGBwyy35saL56jemmAKEG2KmehcJ6X8NJ1wYtM1q4h5MsjZT6",
  "key25": "2zzezEgYRYbb4qjUDix1Mfo8PLQX1oa9mBEuXWnRsnDfF2HvatgHMVny2kJxBKjcygpGv94zGoQCnknqH5MpE5vE",
  "key26": "3w9BqQXwrRpp9ptcHgyu5rMQYzZ2E1ubne8p7yb8LLWRYoEYZvxmWcWZTP3UvSHSnKEVWgPXDQrQEBum9oNBbo31",
  "key27": "4PBEfpCuwacGpVD63VZPKXru1yuxTzUmwzqds4kT2EKhG5LeFDXWKvmJUPgs6HtJheBeL3h3CqBvkEXah2GztJK6",
  "key28": "4Mrooq1k96udBQNT4BrNppmRCGKh1H5sBq3BDcsq3E3zoJpnB2uDgjWjbRLYxdeshsYZ6nyiCn8UbtCFCSQMyZQ7",
  "key29": "4HYSM9gqhp9J1Ta5pt31vFZS8D7s3oSjG7m3Sqeu3KTXubBP7nMhXkcFYe3AeKcJjEjJGNNW91fd6fLPRicSN9Dv",
  "key30": "4kUHMFrqneFWQEdwBBACNCwaXGV6NiEWwB9FBgGH6i6BVRNWT3wpB3UQ3sdUyeu8wrdumu6iHDJugesJnZkx5oqx",
  "key31": "2mDNVcMGx1FDe6Kj48R18mTnkX3XgHxY59rSh8wjJVW9QsmG2vBiTTA6HyD1HkBQc5k4NzGYkvXGETbrPBmgRYLc",
  "key32": "3i1AboCkN4v13ELLDMqxbg2gaxvRQVN9qaixBdQr8g6Jxa66C1iJkYMGo2veQRFARjVW3s76tQDnJPhXcj82NogS",
  "key33": "3WnXeE9P7onme45C25S9p6G7QoziPqAcpPmBXfduWLWt5tjPzXHfFp3wi6nnP9FWPnaYQrsS83uRv5KcnPx4q2m7",
  "key34": "5K3DRx8Fp9yxBioL6XCqSK1ap4avzADAafgftX1Tu584ETiAfGcaqhdoJiN5mKrxZzroQ7eCaKfPpMvmEjLFLTN3",
  "key35": "3MjZmpFsdL9KPVPqCQ8fzhCdCHDQ6t28wYDnwq7nffM94tn3PN2pV73y9WNAPgzUJJvBZRqT9tAEBuhpygo7VkHS",
  "key36": "49E5WsE1teYpy7d1dPjR9Ne4RSBfThDuUjA7nURvtD79397oDVh2uxxhbVSETDVUjjfzdBodcKyLa9dQWDX3auNt"
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
