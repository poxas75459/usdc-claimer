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
    "6447XMFwgqRJHpqoXP8gDW8YNsGyBS8GrFs4j5ExDfPphLqoXHB938dL66tzg5kfGbpemqJRWAKW2ruUcZ8Wzmks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBy9rFnDPbhy4Zxc49tzHRPYFHDifqqCsnNdjxGuBvFX1oWLqGtmM7os8jD5R4s8jKsthcRAyBdEa1NeuKYByq8",
  "key1": "xC9wK1ib7hQFtM673uYBLC4Hv5gM13TWQ7g7YY1QjczBmiFWcyCDRfYph4SqSC8t1jHREznUXhqwoVXTDad6neF",
  "key2": "1hFonfhwehujzjYTahmtroDm2asTtFryfewK1SufzcouKDhAbB7ZPsKs18Z1uzjJqvVDwqsdVeX7U5PYR8PjAoq",
  "key3": "4goub5v1f4pzPnWwC2oFYcDuAWuMC8T7kKhcrxdHUFUMqJDu4xTskxJbe1JZbvkEswigZztQ1HAUqHo7poE8hMhk",
  "key4": "5h8u3FFrUiDF93vg1vMpSSaGZG2ee6XFfYaXsSNo3FzhTwYP5yCj32d6MfsrZdJG42piLzHMp1X2ryRAxVLd1fKv",
  "key5": "2M77prypAvYHeM38robSRVVRYLfRBxJ9bwYoYSte8tgybZxJyT4W2JgjYaQjASX7Up9HqzgFegyso9sVwgsYEiw7",
  "key6": "459cY9Ghft8ExzEBsRssP7htKVCrYaw1o3ivHSFX1LvPaWLCgSw2Yf2hUeVSLhW9opfdLQunjmJFsYaWg7anT5JK",
  "key7": "67UTZZ1N3jFafpW73nREvbNKCucXcRzrpU5bhGHsj8r6BiiqRyggEPSKSGJoxAGZnEgKqr8ttRFycwoFEe33FB32",
  "key8": "4idE8PT5RGjym8trqrE9sbtfq4KPrZFhxpKrgvxXcmgzojtaZLUazY1jBFExuZGXYdwjQASDhdz47ZWNuSMvQe83",
  "key9": "p1wU3p7Z4oopyRdtG4sDDcjTgiAMxpoweHN6wwnkCY3SrrRjodqp2u9W57KbdPXneWDJKm8wNqJaJKNutD8w6EW",
  "key10": "35tFpxirfFR5zTP6fz3hfZMbD7GLnT7w1MPen1Tz1vpchwg5ocTNnVBSVMsRQcaymZYE9iteVRe7ZqzfDLg8jgH2",
  "key11": "4FzeRMK5sXcGjsKj9T8TMNXKBBKY6YUMwd2Z6N45z4qXj99DT7ZaBAEEBhe47daUo76LZtbAoKbUhby9qqn1A8wf",
  "key12": "5pFuABmXCir5GMUrzmzbfJkJysf2RwNhN5U2bdrV89Ltur7nZkCYQHjD9dWPWFRSDJvXA3CiJnLS2Ws9WK7YhskQ",
  "key13": "5qHX3BNZ2USViBpr4Fe5AarUBBs2LNHsKXt8ewuGpWsRoVu7TFNgjK3P5LmngRdPwsxN4cYPsvxQ46Rnxt6vfs4C",
  "key14": "4azPP5fvnxirQ2MTU2fVqjuXeqkAjD39q6Dyg31d4hgHM7pzHyywwyS1iHvCd59fHBH8xtngVhfQtm2CsEuaNcow",
  "key15": "4y7Xz9oJJUjftiumkbG1refw3QzowGRkYvANzwrjMpn4TUCfpJg81ZC1h9kDdVTn5eujX1NW2BdZfFtUd58PXfKc",
  "key16": "srTwJ7RCA5cJchnm2tw89o8Z7iG1tTYhJoqArAngWyH4BXzBzztkmau1yiRVLABaryNLYdrUcNYavZG4tDg2aBj",
  "key17": "4w1QopnNiTEaviQtdtpdpEHvvjX7nADReFLu63sYPsTyuebMe5vJ9c7LiPLmepHjiLvRxV3Eqa37F1HdCrUuktV3",
  "key18": "BXsQ4TYUxWRKUnL8jSvW5ohYbBc6WiwHPjZcUDTvYhaHGQcSDWvKC8jR68sEZH1258QNrSvyCqyVquxkaQbPEvo",
  "key19": "2zBFoEww2tJvU6iFoedXxkQiRSmdHNXJuFf3i4ZnmBqhtR9Vb3ED9AY3DXZ3PCWQwXLy9e1cTcg65CWN2r6WiMXR",
  "key20": "43ShtVDodEBmsNp5NWC8umd4dWaG3eYm8XaZGNa8EjwDcBGFHiugKrNNscmqY6AJqX7UnKsA1U3ADRkTNCbBbC8X",
  "key21": "2uUdxcF8sqXT4K1J5uCTfr2vTYEeZeHnSTiQvfzRwVEKCb6aFixzyY2dR3Lbb8fGPUnmrVrDP4ULESdhrJ1R2RwZ",
  "key22": "2ozSzzdjbejreP4jssKYQ54KAEMrfJ6c7MSfikfEQcqqhxRFaQMsuNzXHjU6LpKpgHUDe4r2tDFDJFNMNbUZ1M27",
  "key23": "n8syeDZSHuq8wxM2KFvfdZHJHHBSBLjTu82B78oSy6NgmiuYvKYnW4CTSUsTyCFAiNd3nLmhCxyBn3MXxukA74d",
  "key24": "35Tk5cLoUDWLHfKQwspS4tGSZKW6TKAndwNRjv2MNj94oajMG9oMnVPRNkBvybmnYESgNkE5xmtJKyrCKWJySYp8",
  "key25": "28MhkFVup4HvbH6Xmbx4oegxTgYJ9A1eeNkAZU3Vj3YSt1cCKaNZ3zyM7Sa9QEx3ofsD33J4HAmtwDN73GGmU2qj",
  "key26": "jehshpCb5fdC8XEAhzXyoYR9arzgGFE2UKrhQz8w4ivzvyBMRVLp4Xqkae2QQoGumpuqGpHkKqZaBPQq7VEhkZo",
  "key27": "LcjeJHzSJwJR6dSy3qE5p8JXMKdnHqpFFe4HSzFvYwbdHCG8SYNcBWvjWwprT2nMPKDpBUihkY8jBhHB35UvvzT",
  "key28": "362F5J9z6eZw2VHyPiEr2PfnJswzUL44icnEDKtfuRZ7xz6K1NifmNtAXkpaqsWgBm5RVB9mRpQr3DKTTSrizszf",
  "key29": "5sFuoW2gtrtbEUPMPsyGbshtLYYoj6yFBTGARsm4CPKoriL7SCjum79p5kbTQF7pji4jMVSJKvqpE2mUQhKQM1Fj",
  "key30": "5WXm8KnCBpsgUS3qzFxchUdkd6HbJeRa4qy4sYvW5CihLuxteQ1qf1UsDHNZamPFLWN3w4CQZ4bwq74qgBPJGNMm",
  "key31": "2zphGbFXoNZzeEiVPJjJW3cN1HKEvvFV9RyKLghM3Pb4wXbJDNhZgH5cjHXVVTjgU5kyD4RGpMBuvnKSTGLw62hg",
  "key32": "5D8byvSiemqvp2Esr4JejW9ggbnsPXpS3MEWGJGmuPKK7ZnYohzAtJgxV2H2ceGpzhkorbY7D8eZkLjjQxijhYSc",
  "key33": "5v9wbrGpZsFWZPmv9WnboWQHaB47MNmu6Wcs1XKd8EqtKTR3rRqofPv5tVP94DR1C7kkti2A7KbAwhS9s2AqbX9q",
  "key34": "z6d1uJktKwp9w3szdsnYx9FtiVgsQaJrScCkF9jzfz3ixErryoJE88VbLy3FE5DD5rvkcYhdeWxuYsHnEtwVTzF",
  "key35": "26ie1BUAm7widrWqvoMGHQspgwDkembjjoCQGw3sRWFzW8a3dYCsm7kQZwYkVtvuBYMBsHBdKZMNL3fMzAvBsz8e"
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
