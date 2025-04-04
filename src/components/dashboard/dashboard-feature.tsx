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
    "3BVUCQ26zdJQXyed4DsZVZDSNgaL9GEPNnhs5p5FCY3nW8DkXsiReJh6T2c72JKea9zsVRKcMGSke2neEP3iqMjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdjSkXTCMtXV4ncA98AmnrYh4BfymGDtA6Zg16D2FBXqzposNctoWsAWxg5H7yVpJUTf6DcjrXQo913AGsqSjuu",
  "key1": "3uv6wHmcugPKZBfYF4YdiJ5cSb3R6fUiVbmkR8bkGmFqL9s1enNEaWYaWNJW7HRKABpDjV5yPtrU5YrS1fVfqWHm",
  "key2": "4vgRXSo63bmbhf7DLGm5mCkHu2NTc7NuA6d9Zz5M2EW7P2Lb3twKQrHixyFMvcMPAfrKW8qCNoQy7dHmLQ4So3Ka",
  "key3": "48nA2FbgePNGgb54Ax8fSaoJHATcr7DSTKbiWjAtWm7QeigTPFsiVTreKNL8ig54P2R7sRq9dougkXspXiACimb4",
  "key4": "2WzF2NwNK75EzSRVq12PVfukt9rywrakKK7vo856tEenHH7gZXER1U52s2YSXPYJE5xXY96QUSs1Qjh5L1HCQDau",
  "key5": "Ab8CRSkD9VqJAU1hswKfpojmoVG7MNdrLQBucYYDF3SiFjcrjpTt86HYPbqJAE9i7mUNh4uJ7BjvFjcLD5wJwPK",
  "key6": "4tLV2FGPzwhzgFwCfrAtfwF9A2oqZwZRXsMHE3fuWwxyWKn6j4JRJKRD3T5tjiRVu1GALRdf7BTV9MWAL5Eaj2Us",
  "key7": "NZEwXWokUkWWX11j7JWK2CvE4qeT1Yzu9ewMPTNqxgcL5bd7hsQqm5oP1sagAdPday99opwLGB1r4qHmDrVq8Ty",
  "key8": "wMHKtxRxqNoSWT6qyPUqebSpLPCFUE7wQDNzQYR3bT1Cc9gCKyRinWZQo5C6VtMdSQyha4VTEDXLiyy6u2ECva2",
  "key9": "4pMYgE8ZD5xJFfweUtyoJat1ByXGAMGrxmUSwn5tzGRuFGpprdL7gAS8bgLyqJjRfpUWb6v2ZvgSJqB3zuVTNPNk",
  "key10": "4jEQ3iH1VjMQuTYEm5geK31f6ruuT75P8y2zVcg4NE9jGkZHLmBns6JSzSFtENtTxE5g1z8q93w77RypJm8cocB9",
  "key11": "2gzbaRbQCzU74MBat2xrZY3RZc2FiBVgummeBfcHHtgyPNz6mbywFMcW1oPXL99iDbyJ3HPJZ4XaiMfVisEjVL48",
  "key12": "3wVp56hZybcVrugp6RzU5ukvgd6F3pdvTVbiZzNKLtLNPeomtHGJH7yvXEFzdvy8GqVydTQuZVNDaRnGUWNA96dQ",
  "key13": "bYdsHmJUF5T78hHpbQXrQ8iaxApTHNzW8uk8nABWRDzackX48e4htq6j7krd8QBYZPvHdfkZk51dNwYZa7XZ18g",
  "key14": "122pKKcJm4zNYp5mW5Wx3omfjnxHXPf6XUHEtBTvxQw2M35kkonna3EQoGvbkJpCdUWDwP9pW1yWgnzKLgzDUs5V",
  "key15": "52SGYuVcii91RpMeqiqp1TQpnRubrr7ss4Ke9dMJM1eNxR3V8Z1SJkCkXykPRudeUzdtRDekvKs9QJZvJCzqEuKJ",
  "key16": "2s45rvwRhfuRGQSATw7fMUrvpYJHSF2LTnQaN56T5tVyYa6Devpyo783mooecJ9pPwBtJLqz532F5ZSA75JPGDuP",
  "key17": "3psN2sddo7251U3hZZ7dLzfMCSicQCTALHExD7kADyAoJ4Kmb9A7Td1KQ6Wos6DknWPJ8eJnuZxP4KFaC5Ri1GNi",
  "key18": "5kZ29G5CZPGa7wBC7cPgvg4uHPHDuvg845gRCrqzNQZGwx1NKZFm7BuKXLXJRbw3mjzT9FPyMufhokZofdpDMDfU",
  "key19": "63tk5rDfX6DBjgAFfKb8ocHe9wPVDQNUwky37fga7FWp7g1fiS2MZSVVPqAqkuyvzmvdMrnomuimeQAkZDkwyqaS",
  "key20": "3obSibnTTTpBpAqH4qdWCgKKRgxUTgwnYZBVYiunmPuYywtwa6HVqezePXqjjYPQydUWbu2wftDk1GxBHcRxg1LV",
  "key21": "617sZk3nQbDLHPL4HCFRezWVACJ5mNTjyAPy2LTWSqc33ZeXC56aLsKUEWREVLHvU9CtKCDU5PUW6LakZVREm4wv",
  "key22": "5NNwJ5qmSoDmBDTfGU4me4xPiSkvvTcM5LTmR5zXn1TfXjvkYXcMKQvY4u8VZNzCUEtFuqEBTzZyp3R1QKeM32hs",
  "key23": "4VeUfVQrBNLtXEHEVasrkrbZiAJ6aBKTXJCie3JjbhxSAATrY9EXcn8RRAc4TLBnYWUSQEWrmhVTu9PYotuHScju",
  "key24": "2nT15AUa5yDqBwPQnpbpdLcP5pissbBA94dSWNpYF4HRgvgeis18iHNALGHy1N3pbVroQ8SdzN1uEXu6iJXKrdir",
  "key25": "4trcwBTxmQdeYWiXmWXdUui7nzGymL3gcuizYurkftuGy4dwh6Uf213Z3vLU1FPVFufYBuUyWXn1oXWTWxzWMp43",
  "key26": "56YEu1MujAoAC3Estv8XFEkVzcSyyVXBc4rSRkJC9VjRuTxgpUKQ9T7aThVkBQHi6TBqoKH8aPyW76vFJKYL1Pfc",
  "key27": "3BFSKTW8BbQc48rDapdzoLx1bQE3CcbMFXvU3CwrpmEt88AuV8FhCwpTGvBSUzRVnfNRppedFD5cBSLrWN4XNt9E",
  "key28": "63L5L2zLucLxAt4vr8VQXNibDYcMazPwTXw2XuQ9iRYX5DPFhf7QVzj9ELQrR4nT3L1TLE6UMS7fJ9eSZoMVEQrS",
  "key29": "RkN979qMAHaB6FuJu8ie2HnBbED7w1uGiDpvv42d1Qh8rQJTKybkhNUsp3K2oZZJh81RZHfnZinFspNEw5RN7Xk",
  "key30": "5jYuLWmpvENagyoz41hejZVN64pifLLwymo9iGh2HpK3yp67PUdK4ZyxEnGbrwVgsaq6kWBWqjSH5ESJBYTFA9o5",
  "key31": "5Nq83wM2xrmzcg73tzHosf5Y7rNHZo6Dz1dJVJvxhVAnV2DEwZW9r7Z5cDQXJRudfxwSd1K8K44deWXrHnKkxsr6",
  "key32": "59LLYAEdfX9Zuf2abps45G1Cu7VA7B91ZQuw3M2HdzCmXmCD3uq6Cwd2Jj3TgGYYnh3b8aBTfJ6VVLgYnaFv3arw",
  "key33": "3C8tFE3MkJkLRDoWXF5rXWz754qDAjtNAfvG8eTjRoCgs5PtBsD3BJn5aSuAnSdwfpwhDWkrE7u4Qpp57eegR3b5",
  "key34": "55fySPjfNA6DGkUE3zzwfgAKU7U5FvM55PUVojhgXAapQpFHNxMqWLv9KGHAjgUwVd2mWvc6FmVQFJtKNRFAy8Y9",
  "key35": "5nBCcoqCsQU9hBaMeBaqAKoE7mkBPjcMgTD3iZvfdwcJ4C2fANbDgHLo3VfhyByD95WFdT51ARNF3vj4peBmkLQ2",
  "key36": "49MB8CqKV8FBJj1GmXx4Q7dCkgCDTeyMRBQm3w3jBT8P52686rPHN371rVRXtSLry9pucHYqHFh4EXKUyoEKmSEP"
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
