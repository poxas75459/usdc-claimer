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
    "5Jcdew9Q6dfuF29bG9yhW6hAnAGHtgb3WprV7z3GU16AkA7wy9csrrJjiiCVSt96MP9TjnbqrK3fhtr7SmTheGcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6Mbgn3yYRKH8XFnrjvEDfZTvHBV8Pbn63FW8ghQWfKJeR134bwZzq3pg1GYcfori4bQs44Gz7KS7W7c6NziJsc",
  "key1": "2Y2J9GRyWWGBTT6acWZSjwkBktm7Zs5rLWLY2aQ6dRgzXpMLaYexcQwuscPB1FDUA6mJwNhCVsvk1wJeoX3zhvXb",
  "key2": "2dV17KPiNUA7zXUkqeuDj2VeTErz9GKPbyQ8QWzzTxftEs63iHndv46seJuobqrBXgndnAZbryjAjc5Y6yGjPR42",
  "key3": "2hQyAwy9zKTUUxCejENRhxvAAot6ARvebnFYi8LnK7JTgRNXRoLMzttAUc1mnkYmpvpb7y1CBoB3t3DQ85uzmhaJ",
  "key4": "rY7v67XbyZrqqjTpEzcGs8FxvrkAvnHfPg67uuKw4SrQmW4axry98Wziy5XLywAg7sfy471x52TYNHvpjfGJPuV",
  "key5": "4sk9cBELmWcGbUSJ6iZSmLNaFQ61TiU3nTsiJdXcdGFgqLtFp9efErbu985iRmWGzF519XrRMbsv2zeyry8aoUXy",
  "key6": "5UR2qPYK481aNi2RfUFT1UDboAVAYBC8C9vVyeWfUTQygzEhfDSgNmhZ6MfJRzsMAvXGYYoEeAVYVpfmvengmtA2",
  "key7": "3M9ChJqPvetww9PrZBiPkvpH3EwgnP524p1szVJsX8ZydctF52i26qfCq8acFwHaEXYzzsNS48THjUy7CnUrg1QW",
  "key8": "3P4HyK3gNENeMLefTcnHqGrRaysgXYggwGz8qcyQhLxvC6YzncysQoFueiTcQaKj2goGj5CPn3Q9anruQdek1Ace",
  "key9": "3pPdgYMEjHFhnSmoxUVA59yGR8xN9Z3oy3gsYraZbLgDSrHkHSt2FWTzADZErwMobfmR68UNj8iEg3tG6R8zGRep",
  "key10": "3qKaKDhBfWFubZjLEoVwJJJZAJpuoHkVqjmwB2rHM9CmpxegU2Mn9LykqWM5UgXqDitZf6K5VX3VfVQEpS65VrjA",
  "key11": "5Nhrh7uGUBwTj7LPGHXLytdpiepzLH9AiNbMJvBCdxyJbCLPLsQyWdfgsJmzUcXYD6eDJf2zaNUspucaVEoXa9wP",
  "key12": "4dFBE4qgf2xpqkaVcNtHCYkZkkpD6xfSHSsKMxz6X4WBgHsRue2DEBxViMN1Ag4V17hPnt8B7YrHYTxcqyo5TrWY",
  "key13": "2pvb7DZCTvuDnm9CNcYQ5mE7r33HUCn66i8RHTmYQs5n32WxFU9grQEEULyk53v3EVydkv4JiKnJTkdPxH2bQ6fn",
  "key14": "4Aeo4rivxPXb2eWMj2CdjicpRvwwpx35BJxwnisW721RSHkVxrNyxSjCCa6AGSKBXNoPEVNhBRLrdpaPLa2nzP4r",
  "key15": "3AGU3QppWkGHmcb4hGumyFUwz5uZZHb8pQroVBQq3Q1BvUCEEKZsGH9AgC3tAhzfxquRKHaUeBUbiu13ztRFSVPT",
  "key16": "3DKGDAzBWKVa12wMM4Rwx7VMyrCzvSA19UGxdF5WcqfYkEHBb8JYC42EMbiPDTRmB3jjgcqjdUT6zqauc3GCu7Lc",
  "key17": "3nrvA72q92aD5Dt9Gqb1kAVg1qxsoCWyrXVJnUFpkfQw2MXmGo5vSghUjN4UwDfrtF6nZHk5ewpLhfVRPUcAhpbY",
  "key18": "Ujn64cUayJPvmKsHJpEg6wp5cJZVz5ZQrEhqiWf2VtACmCt3TJn3yTKR47zmokaZzmbhu9J6xGU3D6qwWJSRD9P",
  "key19": "57LVny5t9fd1VEKGs6MPdTjJS2wwF4XyVpK3KSUc84vUVWAfmkfmYEpWC7NUuZ7uT41w5qgKZz1YyxJRbvgbiysm",
  "key20": "5w7Y9a1XQuAYYGwU39yjFEjhDqz47VYbbETKjmQRuGxECnjUiwfSPKEppT12PCdP7wvMsMEApvNwGpWzsqxk4okW",
  "key21": "2ZKEzjWckbMKnuwpP2rLwxScb7daEctXkCYP4GBZxCiE1z7rGGwiAqMvPeo8k7EoUQ9Q55HA4ZabiHsPN5xUp3ZJ",
  "key22": "5jYw1AJ9LQxFoPSoBA5vugTNKzJ5xGCGw2vGjFqoALYMepkVSqnmWxqJT2YyCEsYHGiy69dYrzZgDG1bLParU1sQ",
  "key23": "2d4uLk43hB6FTLpmo32zFej2PRSSiTwA7KcXzG7GLi1S1Co4PwXctKvE7JztLfFiudhTcexQwR5McHurzLhrxfVx",
  "key24": "5h7uP1MJSHJvHnBaD2NDMZaGBKoMiUVDmhgmYb3sQ2eZwTfG4RcnSztPYX59AU55L5SRue7K1CDcoHRuqfGhphMS",
  "key25": "4Gx7tzyGvKhn1P5dFEmUHEcYSWAqkyJ3WPERod9afwHUnXfacw7iLKuYMZsaBVNJdtba6424EgNDyWC28DvxAhDA",
  "key26": "5GyQX6fjz4cipwjHsRTVKRLCKS5Si99wCmN2quRVJZXKRVVRmMSw7HSkKQiRC2TzQNWT7UA1R2gXzoV3Ehr2yP12",
  "key27": "4j9PF1ovewmWAPMV6eFxDume3qpQzbMxhxLJnjj6whuLN9F6FdwjKozBaK75cArt2Kc8yBw4kHZC5ay4PCx6WceT",
  "key28": "2AjnQCRfXdF5NMr9Vob137kA6ENsErgap5KoY9ZZ83DDiCihGA9Ck2c7HC9JBKmGULygE1Jc4pqBCZ5t2zqU4rK1",
  "key29": "4EqmQigKLoh3hD9pTdut2ky3JEnYDSUbWq5tyszE8RsVBd7zcF3uSjUUbrsPnfmX4H7vmq4u7yQ33qMMGiSPFAuJ",
  "key30": "3cFk67nMFJDVW5N7mp5c7mP3GoAJKrgwQ27iteZZDce3rphJKFHfsDqMUyid7nbjpKtBPU1Uz18aTjv6Gx9SD3sf",
  "key31": "5EPLmqVeVsBkTSWyzTD2wfcvtr66GiaZwe3YPSo8N2w3aFrq54t9M7U6smhQxfqRK7YqZ7yreN68HYd8KoJMnKDq"
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
