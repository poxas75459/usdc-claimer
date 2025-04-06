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
    "2VhWfQmfHVMqJM4tEznXvQhMaA5zpxtYXT3FG8vJMzwvWurM9CxnjcLvcANUKvJh6YUVCh32ShtgF3ZPJXGF1j2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABLTrPgBneZV3oda24UnTPDP25k3gbud3iLkCWgKcVrhy9vgdjkdKUcFc8yaY1GhAMbxuuqRDvcJiYit1vQwBqF",
  "key1": "3u8iQTwrUi4WddJev1YsD6tiU2KxF1kcKEoZ8mGuioi4Q3bMpnj84Qp3aucYHadq3aHrJtmjMEsBvJsyuy4Jdej6",
  "key2": "5CAkgSvFg5q6AgvMhcWoeK8KLdA52invUcXDfFYwE6V99bTmPtDLXWeVqqmeL7ZUfk5k6hkmFg9xctVZA5zcNj2W",
  "key3": "2nEzMxCFrMEyb9x2SDwjd9UKb5uoKB5GZ1nP58UEHhgGxoFpMNpJWWgKxbtB8KUyrnwJHHrUbSRqgYimBNkNE3PC",
  "key4": "5vvrTqW1YXNC8wYVbHfGtSkY6eXAJo9Dmbz8uUyVa5bxMGB6RbuXCRRPWYaC8RHF3VBU8uNQpXTRp2TBs31VYjtb",
  "key5": "zymEbvvDik2nF1RBAhgZ1hFg7B6VkugHA1K2TPMqoeyCYm7kR79S2vjat3tNbsfac81Wk4KRMxTMzZ4Gp6wLE4J",
  "key6": "2cgfCgMh4TesCaUJyRwBPdC4NirhdLASCQuw9aRVBqDSBQxeS73UkfYCT4JQMk2sbJR3RrZhkzPSe34CqvzDzcmL",
  "key7": "2Hpd8BBX3wetmbdtA6S9owQaLWN543m4VzsGWt91AvDjW3Wq1QJS5F8MA34aKvjDhd5x3uSwn4cDU8fsWhe2nGWW",
  "key8": "43yeyhxNC7udZt9kZ9YuxTisKwbskg4fgmrQDAKE5MVSbtzwALtwn926xHTmEbzkxfZ3bMdgB1SNSci49YggTdCG",
  "key9": "rLMMXLtkgdLUT5kUdh3Ynsip9rVrRiC8LP9YMdnWcZv9RDcYUdqNEWRerfoCoFbHA6g4ZojzMzhKR5t12gRT6rg",
  "key10": "595j7YUmwSY9SqZqX5CXw1ep55YUgAtJxR36a53CPHihQUHSiSFH296DjK3dttYPSi4FVmxy5Gz6iW8EpMJKWs3V",
  "key11": "5JT8JC7RM9yYS7uSt9sHywQ74dewN8PkGniAzrSaqXguLtz4CFhdbvSzZZ7gb8hGhHB8KXnvZNns3888k6i5ZGnH",
  "key12": "2HCzAQhBpgHsS5vpEBuwF8ewXe9s7iuuGTpAxZDBMq2WxiuoLEp3iLbsm9wGrW8pgiJN5gZJ6PLNmRuLyuHox7qN",
  "key13": "KsoijWtuWoYVQDQ12yvkP554Tn8VaKoqvQWGhtcRUEG9rhRctAu4SZCX6519tYT4WPGyTt8RKz4suiSCVbUU1nv",
  "key14": "4Gu83SkXcpF8WjzMyoUPJNCm39MR4V84XCc5CsuWnvw4suqA2FPMderzURJhAEDtr48gbCxuDpL13UVZQNKZBDqR",
  "key15": "4WoQ4ac5vom1w33LreHps41GkTDFoPSkE7NyjaxAzeJ4tMZnEvd1D9XmuGaMWzDmzkbcPiftFXca4JRbukNUudUN",
  "key16": "G821uRpeUFC1oe2TLSxeJWwhRXXRTVevLegVE5Q3RMeavrSxEsXqdHYnRXANAgqm1qKBbKaCWeenyKYKCuGPj5X",
  "key17": "3unV7tadjcL46Xe5kbzfs118bpdYTLC5qDzNdtqXSCfsSeMhnkmckADP8Wwyhy71qLJk74uxv34rXyUwm4atk2cz",
  "key18": "5TazyVo9gaWfGeV7bfkY5x1qhDx5D1pZpqto3v4Fx1UfSd7vhnqCDwx4QSiZmkpK6thFiEHEhX44bjeeYAKuvn3t",
  "key19": "2Qds35CGzkXTSrJSUosCYXqYcmkQrJavhyMTLSDvvyEmqbW455qzxRumbWTmGSHFCQbWVjVRvDB9ubvuUuqgbstZ",
  "key20": "5QkFQTukJw6yPLRDdd2u1h6N9Xqhre2saLZRX1svnhE2Q5gWmkRZDrQSVkvbbsTeZ35Ge64f144YgW8Xz4ww3FSt",
  "key21": "2GVteaDtiRA1QW2JhGGY8cZPwVwfhGmbS9uh2HpksWS7PuZCdEhqgwmTfzUerD2Tvv8CwPwyv5pKr6Gyfb8rH5Hu",
  "key22": "Lco4QRHDnxKzSNvsmNQ4YY35Y3eXVzn8SgvfAWL6awF1tKLRGWEcAa9p7DNepPqd3iA6oykgd7c5k6A6Yj3aUvr",
  "key23": "2nCRe33f1jzhzwu5yjvWCAKc3sJ5M5BXM8KDnVPxEMT5zMZtLwb4kjUcSAfDDkB3gm7JrSDMMhvFb6HzbrLJtx3d",
  "key24": "4UtQmAgNNUQG6K94ATGbaoFPdkGJPxowSQVvmDkyBGKShqhUirxv5iUP9g1joaZYYrw9HDNu2nPc7kFhVjaK4kaa",
  "key25": "2usJanXwArwt8x8pmuJm9giZeShMrCknU4UmkZDhaqr6fMuqvpKnTvWkxiA4RcgcCLBp15Eoz7y7SRbx1FkiSoWi",
  "key26": "26dyHockqQywhq2ugaTGxwyqGNy53GKzGcjBiMdA6kgEPa2jRtxgJrDT9fCtnjqjrKJBeNRUT6x2Y27M1wb1MRPR",
  "key27": "5S2dRt3PXqd4XzmNdVnLcu1UJkTwgA9ubpfQjUqtsegM39XMwWABmLVszHmJ58d3D3wy7RN8qAhPXqLY2ekiGvqL",
  "key28": "CswxWekj2P3uvLPwkz6cKp2NQpCbtXJcRZ1TwuvjfduLSi4JU7moqMFfdD2sNG2vpZpXgC4UjDjJYts67QUgQnm",
  "key29": "2H86aBG4zw7b25VhGuSLi3Q17ELkLCat8nFGEjWGKJ7ofbthAvxKY3RkBvCetZ4cJcPy6ZaZbpbbMJ73QQmj3kaa",
  "key30": "5MLsV4f4gbE8hdjhtpqanmuTqqJzN6xsdGaYUuf7cpF9dt3e4aLuGBGy8zjQtyGbjBdH4EMkb2VmCUYrsYGuMTcE",
  "key31": "4drRt9sNBMbNtLyUyAMRVjTwwzpwR4VezMoysDx48zEiMGdQjFyyKZbq5LbPb9oewfuwFQ9v9dNMBFcFrceidW8m",
  "key32": "kDSttnyi8ZBSo9iLVvgQH6HaLMGkVhcPCg7YLPyqJNqjuQqRMohN9muS3QzmuraQbaUQyh78mkwAxAWtkUX4uKC",
  "key33": "2Q7n19tgEW4nvUBETjQqEmvejz5FKRLz7SuAt5gi7oTqqgLuCuwAqgTkBhMWbAzM62R3Ay3gS93R7SLNf6KLgCVS",
  "key34": "5JZ1dCLnXq3v14jGhbGdCTkTzPiTQHR6hBjpwVqRHMkAgD9JNgZ5tWYutnEBWuqP7UVRmdYTVwC3MZtYrfZrkiCV",
  "key35": "42JFLGaMytG7z1oUoayxReSVZxJc4NM47wXmJjwHe21asNAq3obTiWEomrJaQywebESqB1vXL6Fz2eYFSeMuoDRA",
  "key36": "4B2Z66U3EwyiDniRUuJZoZEdD5o3DmuRYLFT5eoZ9dsmi4toeUJv5CKbfWtwHp1uYuK9mQm8ivntT4WZhyG6EzRJ"
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
