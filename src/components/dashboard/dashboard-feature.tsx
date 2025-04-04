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
    "214G3nws2NKweh8eUnEKMz28A6WZHSG4V5RQsCrfZfj7nGUD5RuXxkEYRCXduH5rkrbUpkbsvzEPuTc8XjUDHX9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Z3tHxtxmR4GQMcxSNfp4G9SK45MX6zXxJs5NcCFgm3diucVaPTpk2ipH5ZeEn2ebWzjGSnP5t4mYBznXoK9X5R",
  "key1": "2A2vyC2j8L7cTS82DDNgeNMRW163bWSmXKfRWJAuGux9pqWJ5FDKxDESs5xoibzCteGK45NQGQMkSfzVQFGesTdW",
  "key2": "5XWF4JfGAa8jVsTdnfeL668JqQi6o2q4ppUSiY6apxF5e5rdTiAdrQZQGB3tBgiN7TmKk1LtPvR9JaoBziWhHGim",
  "key3": "cLFfRDNincSN2U4VNvGhQB29T8hmVYhc3RLaQKQ1LmoLjvyL6Uzgvtau52Ww8SFG77UQTcMCVKn6uexBKfjsbYZ",
  "key4": "39JDq6vPbH8QGjtpNobn8qQsLw9m4CpbTWuq91psAzBjnbEQT5jtNZDqc1FiHPdQzUE8mY9v7VdspuMHzwAH5x6y",
  "key5": "4e1XRhokk6egtv5FqV6bqivc6NgpDcVVVUjYVXGdeAXHv55SZxJD3C9538zowV2CM662CkG16Qw4Qv8KyTFNBKhQ",
  "key6": "3qT1V2eAGVWxKwQLU4akwb7VssccMjJ9gUEEo2k7sWroJDiSeDhBXEaksZrYMTQP6HLGgq2nWCHFyEQGESjB6oG8",
  "key7": "3mQwTh34AJLVy4Y1qzrjMkoCP2Tbub4u5BKYZE5Yp53FvHLawMNR9rYAZhudpucM9U3Ayj5WwX6jUS5SW2zBmpNk",
  "key8": "dkKkE18HN2WJmL3N3UXLMT8FXaWNAeUYiBxQP2D4pSYA2dVGuuXzrJmFG2NktFnDmjdSsMwqvuP297Agg6nvcXF",
  "key9": "VW7cVkDWDZFXeVh8aNNKXGJNWUCRV3xiqvcaMPmoikbhvLKJ8VZTo7xyPp6oSEs8Ndns3SMsNXe7mhGUsL93ToV",
  "key10": "zpzSutPP4krGmiax9yEaER7T419DcvtUuacgg5HRF3yo5VGMFTCA4e1sdfvB7t7U6jQRZzy66rbryrs8MNRvDW1",
  "key11": "4KeC2SvggQDw1fsWsjnZob6Waq4nSBwDNx1zWrUsDTCxATd9qKcvG1eSpWFrd32zUpvxVjFvFN7BqEiNP6PqqBYo",
  "key12": "5dZ3mCy6YFhhxNaKUWrbKFN3VMqwMjWz6gNiCPYV78LKcsdQ8NjJQaAqCmedmCcuw4a4kYAyGyKgEaNWhSN1XW22",
  "key13": "5DkkBFjaf7hDYabW1jZaS2Ukw7H1wwBK7dJbgnN93BNnXgnWxLq5i7xZJqaaY4cQUjscWbD2TE78y5qReR8mxav7",
  "key14": "53LDmmjjvRNrWvG4PCkzyJndFTpMv5gKy7LrB4GufK5319Xvm9P1rAb3bhAXDu7ygMSa8L3idv4hdH4FuvRtwwf9",
  "key15": "2MrLcZsoo4dbFjfUC42yVZAyXYWY9F1RrQ3qXPvxLE78qDeBEmpPfWwGJiWz4zok8rPhXVYSikiPi7MFsUxUvw1K",
  "key16": "5gXx5qJihPq7NLdKbvkbxpyqYYWcNb395LMHA2cLNyqRyRCArcy62JwFFvhut754b7ydEeC9rebctBrE8dauAoAh",
  "key17": "3UMaZkFotYWZwYZBcMU6prNKGRwCiwgMx8qzpLjk9qmiaVuLV75Y9MPpfmv4sSXRBvjr2KH32jjTPppoHzgHqPCi",
  "key18": "B9HzQuomDLum3LCvB6vyGPs5U259rd7GQQo5fwTAxFn8YDWLfA4cVxvkPi1UqAgq9PR1ZRdM86h1ZyZe5Q5SpV5",
  "key19": "4bXdJSNX44vQH9ZqXqMwLbG81sDyTpXskYEKvPFXj3V6NpDhrbuaWaaRaxPqe9NwdAzYyHXX8qJqgJLZSxabegRY",
  "key20": "HMceewZUNoqRqMMaCpyAiT9XQAHbTQFumjUcm9CtYA4YK8MWMDKsGjifWksEfQaADGoKZLq31aXZdkaSe4nZWN9",
  "key21": "4Bpw7FEHUvuNQ9Z9n33ztS9JffrJQWxpggqqt8dfKb8wdgccCe7nR5w2JYvCAezz2Yz3z2XqgdX2HFAoLSwxSuuu",
  "key22": "37x7MHuJqzzCKo9iAgMNZNGwJ7ja5z3SE13kQtbHheH5qPDE7dsckGAzwwg4orW3fWeZ1ewcMapsTiXR6TrxSXCh",
  "key23": "5BuGb3FhEt2SipBALoyyZ83ph7NWWQrysxN5owG78ckvJhViWTF38UBAEgB4kuiX1EtDEgmhL8HjFNn3CqRJamZY",
  "key24": "51sWUe5Q6YzaHnDpqp9rJwLAo72NANb956o7jd6espDNfBre98GsbexcQ3MpTmdEEBKkv1zu9WtxXvXABTxJmM2w",
  "key25": "3iET8taeotbmWpFMQQuXDoya6z2rLErKDZkSuk9UKYMgkYAVyTLJwfWWMA6Ass8tzo2T72De7xZ8u2NeLKcRxCdx",
  "key26": "3Tjbf8xr5iEnnLzwgEKFnX9KxfjNR62VifjjoyziasUM6Khd3keYWyy26ZpoDeX55gfw5SPxgjyzraoaKFWxppes",
  "key27": "5zz1XkgoVjDFmP3Nebp1H6CVKunxYqV7qKkFqWcX5zKJBiEF1nhffeaLRECLvqj6ZDNJmXYjFBEEnCnLnmvgEC8d",
  "key28": "5SYdfVzebeXPrp7MRxYSmy1KZrY9uVqXJbCrEx9MK8PqL2Uc4RcHJ8yooyTEgAfdvWbw7ia4YtJirSpVuru2AkZQ",
  "key29": "2oR48sZf5yzngnuyKtP7G8FEUEMsXJa7X8DGYfLjpLXtrX1xNBR4eVkQ5Zc7Xrx5YVFrGnv4VNRsJ91XBeiP42if",
  "key30": "2Loozk2VWxFDDPb6TgGqtJ9sPCQYzLvXVAyTxatWpnH3dMZXVahkitxk4Zux7B3BNkK6ZA9A7cPmj1eq3dNRoH8Q",
  "key31": "4Y6JNinyyZ2BgEfeS9caYdQeJo2YuwrBPyytW8mvCHhpbaRW1k82VsgLq3TMHTq3iNgunzkQCUPV3oBd2SDL6Eph",
  "key32": "43YXHiGnB7C6M3hqwpdTjQRDC4w4RcWSwb1BEZy7FvHZonmnfRcAsZ6udXjZGrYt8arPJemitFoYeyTC8jtqVbtC",
  "key33": "FGXvkWBzDxJ5BDChER9wfrdJwgavWw2QdGmWMKzcZ7MrSHfwjhimFUmgectdeeNDdN6hAfhXSwcDwryikpcUg5c",
  "key34": "4KDBCyNpGxr8jbPn3jEgJrqNiMHQcbHGuSCRk1xSR9KFDvYvcSwdQ9pdJfuw9g3mPGXUGndzUd1Z2W8xL5TcFdWA",
  "key35": "2TGxa1TUh63RBiPuyT3z7AFBNngX7XkxqFQbxQrAooyFJkcG7PqAnapKGzCfAevz3GiurqrFBrayUSWHCty4oqWH",
  "key36": "9JMSqWayzZb3SK4DDTqh5c8sQpwimmCESwrxQ2qSEi8oyZVMxhmVj37yN6CJKwFxPcbnKaJn9A3f1LPk5HX6Vrz",
  "key37": "5Dd3L69hkfd4FA8TSXqs5hZzo4nKjLphRBZuqrBtRMQy233C1FkpQMS6DGAQjQyg6XKTVBd6KFUyVFrUZ3dHJXuM",
  "key38": "4q9o9RNjYzQ4aGynsRSVEeehaU5bY57wd3uYF5nGiDWSAofAyGcmHMtUDfxVVvrYNVWcitfRP8aFM2PFCqZdUs7X",
  "key39": "5dLeVKj3c7y4tjFQuAfMUJJHnzH6dA5P3D5bkxKtTevjZzoj4WYSyG3jxQamWmmQeBn75NEdwQ6UWjKTM4UuQt6p",
  "key40": "38cF6ux8PGgo729zSQvJjAMUfBJifkD6jfwJ4rfTjNytXog2FGYCsJJek23GiYxomsukz3S9NnidkCjuQAhJzh5u",
  "key41": "5Y8Sypmoqfv2khuHepTf6TjxSV2pCgp2PCxwVvBJoLhzBSeeBU3hSs1VnUL8Ch5Mb21jG7ASVqEuk6okvg58uYhz",
  "key42": "22MKuxrEQXjVUHo2Twpee8sEN84mkVaxfxhSzariNFNkaydvz8y7GhuicEyngACPZZMsiwaGBEtDUYFxyeuC69wF"
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
