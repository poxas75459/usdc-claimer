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
    "aQgWgoGu2ih2JbygDsqaRZvmszeALqXqmZAKzjWYm6CZqqjzBeHHozKPxHB1GJieVaQX2uroAg6DDTXij8jejQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBA3ejBxt3Cnt6GpopD34aTocrAQGHU3PMx8nB9YGT18UvdQ7iCotiuPSMAWv5TSztAkkNHLowGPXXj74zxSE7A",
  "key1": "4fFTPEWZLsaPmgH5fAjdimMLZrcxVeJoWFMf2LyfUDtoEagksr3jqTdxDQZ8RBaRrsLAMwrEzerB2isxTpfG6sum",
  "key2": "iENLJkA15qgx3We1iBvKPNxjCGaqByUDGBgkmM9TR6oryqk4fkVxtu5rxrM2PWf9MRbrssauVRQCmDKByEFsg5y",
  "key3": "CZqSyRPrc4xPbefCEgWVpqZvmkgi5z5X8F3zsvpTvLbDmZrbRtvmjvq5Ky6cy2g6rXYxBLpiiZ88QQmQ2hXmVpZ",
  "key4": "39KDAQhzakRke8qvRF4EaHJnGYHHUkTCgYFuwtH95rKDD61bMdKoTfpcu57Bk7h86qRWCP5sYrfbXSHrhtJPypfH",
  "key5": "4tyFT7o6HfsC8VpwQ8r5QW8HmjzLXw5kVkFdcWpTXufAaMq6rqaDW2Je6NoyijtkVqL9PzLShp1g33SLBwUyDQyV",
  "key6": "xLmD4gtdzqM3G529CrNgxRkfsThbVmBFhoFZxoLyjZsLqHWQCELsqUNfBsB392sxpQJH4iujAXdM6gQ8s9NK8g5",
  "key7": "5U91mkmf1cUYShn2DQyv3MQ7UFNvMa8nLKj6sBm36ftBKFW8eY3mfsLrE4GxCKxNBziuCNEPn7ZhyXbA5kc1X4jv",
  "key8": "2h6BgN8mFk6etJaifbquGVtc6UR2mcZBbHg2uBf2ZqBEyGvDHyK7czeK72t9oLPDqUvxzyGsFyagMyJczQADmcJ6",
  "key9": "2vRH5FNCfWaRLtiBP2QETLnMnpKQe9NZeoEG4jovf62KZFTNxZLCQwBS4r6kEa6CYjJKjtSa5XBe8iHvhtQ4Ezow",
  "key10": "4vqpA7jkh3G26s2DMoaQt5BQnGJWJi8ZqtQu4RydjZuEwQLZqTrbwNB1V7BQuCymYmiCNjG2dZ7wVkqgQvD2mc3g",
  "key11": "2ywnk6jwbhPBge65QuUjhe6yx4kSwKN2mAvviGK2rQn3xoz4cd9MTzvcemgB39JZJNa9beaJD97MicsmGGcDojLp",
  "key12": "4UDAU2cTjZGbJuZuTqx78DEi1twEAgZruSeXavT3tBfMS7odTWAtCTzfxqNQhGHyZk5DBNnzD6Nm8nemsuMchARB",
  "key13": "HKAgT4KwkBaKhvJVxP3MswgGJwAtPDkfUqxb5nu54fQ5AYM3AzMGSKx4d8X65gCdB4Euhb6sW5vHgC8LfqhaBrr",
  "key14": "5iX13ueQFR2TsJejKG2PFuECXfJwEZj651fFDPbPR85tRvqM7EQJqkdKWgGSRdN9detvt6Q3KBWP7FfikiYLD66j",
  "key15": "61Cvjydhn8LRvqmEvTuQWCzUMADGzvZDXQFjc9pzGgif8bHM8Y7ruyeybWc6eWNHfpvNwJPmPLaz3aCarf48PpoY",
  "key16": "5cU4fcbBRCX5cxvDSyssvLnSa8eMzNZMGERTaoJoCky8q1pHbr4UzTaXRxbysbZ89WobKWMAtiar4KqUrwbcnDMf",
  "key17": "2TUU13VKyQUTFB2hVtfnhGpdsaV9PEg8UUGfYRNDjUtpEvzpFjbk3ZLDAUUjqeknJ4MvuqejuH82Sakf1g6t7SsX",
  "key18": "2v4kuud4HQjQHzmh6V7T7bg9nzai6H2a7HSNp6MUfrWawqUYexb5racLvyVqmh5TWDCa8FcVr3Lr7eHKPzjs1chU",
  "key19": "4LLhUqUTMTdWTqYLgPB94TeWA1yW9zVBRBmUSRhc4GRgjDNC2ABKinbnBLUcEY1oU9t17BuRxpHPUyP7QT7QGf8V",
  "key20": "2KxGm5sYhMaUr8UgtPrYjQnUsBn6JUYjAf6N7FZeVWEMmqnHyiSW9WPwxNQyVzJXJHQ9wNsN8yD92vCrP6AN96br",
  "key21": "XSACz8naakY4mdevdEi4qdLsbxF677VdryABssxx3peK2DyuKzKxVyms6s4oXTrhebSjszFpGnY2jDqNd6KNXmE",
  "key22": "2nDaEmrtHwgi7H9WW3Q1u5cycxY33LXxUv135yvZpgvVD63DXqKPVatMbx1BqgEsD1FT6jXK3LvfTYxortnuGwcF",
  "key23": "YFmCgz1xY2jRWZwCrpChhtF4AQ3DmKY6ySUbpbTRVnM929B1TZwzbWWuduU9eaPm2kLiYcFvaup4MgWYWaYjJzJ",
  "key24": "4Lxrg35g1vtvsmKsmdrxxKbY3czbLtpCWSeBAs9YCdjeH8VkN4kvjXtUfKNrBhduG6UJ1uVXU4N9zaoU7YCiEriS",
  "key25": "4UMumGY2mmtihyPnJqztR2rc2x85baddhkxUJyqiNrDkwH65zqFmEgQvQgwn1GPa5uB9jPXXwQMWVtGCxs1L77xv",
  "key26": "22UTjLt6jK2r7KM5PjX6ibzRst91x1Yc7iDuvBRzPKwv6BhpjfHQDs2JrtizYeAZ2YgYDoJiNdTV4m5o6YRyHF9F",
  "key27": "3vgGpX3mcC54iEU1nCk6MutB5tHHxV61jrZFJC9ALGq4UQ5Unj7MHnvd8FNprDMrRaRmrmWkP9afPf3Cfr6PA9mg",
  "key28": "4ZM3MYdzJCm4pZjF5r1GD2Xv9ANRovjbsq2dGzCRjfXREhNZSg2wgbj2iNKBcHeFxKZfgh8XqtAjejSAKrz33p5y",
  "key29": "R6t961Q5HFHsNebvDP5yBgv5nKxFqzQ4H3L1tvBWCU2ToRyhjf4NjnEahKcnhwVtR1ygkJNsnYtEiKfPxpfajoR",
  "key30": "2oKC8EEXu1XJX94LeL5Sw8Bj9yaSUEgnq7tfaLLiPDa4oY4ivtFJ8ucS51T7mRJWHetkg5qKyHNbnADnFJR3jtom",
  "key31": "5tGkwoPXB4VWHUwNCq42UFdwC9VMnk4gVaE6qjViBuAsGMTGRXxmtGGnkMn6vURP3jzaxunNxegRCwtzRsWcKa9s",
  "key32": "2ixhM4nuaCDauUL3dm56SL2FuQV3FYDvBZrvDGxcW5MmUtnwVc51ijD79Ngax4hBwNdiQ91cW383t2UGzEZpC183",
  "key33": "5Z4HJ9Fjssb7b5JsPemkS54ex8REMDmhUuH2zZgve83XUETx9ZYVxtgy24Ttfoc8SKreU1f9oR8nRJESV9mddBDV",
  "key34": "2fks6RMiTDHTbkjJCehDHy1mBsYXGmZyQg8NqASDs64awVUFC7NkzsKXP1dctwfwqjLScAbWdfC4Jq4KYd9FMD1J",
  "key35": "2o511Jj1MoB9LXnAduNycXPLtVeb2nE8bELA5VjbNtsJD7V2z1MxSdqbkSAEq5Xoctaadvt7GwC5UuciX42PXack",
  "key36": "zf5ZTXZENHJtsWiVxKr4kzpJEV7VatK2ntC7Hq4VKHDX5PqfhxfDS7inCAmkr6SUSMfET6Eq9zo2FoYU1PC5uiV",
  "key37": "2jV6HXcidQqqfVUMhEjbt7S95pTfw5vaAdAHK4cR7jvp1GdQ6L2A6hB5JaaciJ8Z5t94Fd2haTzsjA5Vw87D3559"
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
