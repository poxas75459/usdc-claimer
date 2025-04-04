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
    "5QtsNRKB14JY3QgacVFYAjRbabt5DG7y4wXhnGY83ynqavskoGNpe3WMENLQhfNaUSsPt6f4ed6B87oqUL17vnx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCg6P9xs1VeRSK55Y4bgDzaRdtqHvmXAfob1cwAuPPsouk7uHnM4wZC6L4ZaM5w8HtBWiWYc7hSdJFmuWkeWpRe",
  "key1": "5RRccj1id6tp7kzuJmYpj1UzWmqH4Low7mMZvqi2LV217fxY7DCY8Ky72T1aTLckgvxuXL6LJGTkii7AchsQxwJs",
  "key2": "2msd2qm3m2QWvQdHp81a7Drdyt3aaEZheFpFraarFDto7BQkKPUdQyeoTXkV9APoSeC5rF6PRPYmYvKietRSbzYv",
  "key3": "4bi2TufQHjomfSvU4SCrnrEiUmXP4sFradgYB71nzoRyixKdcFykYVEEeHVCZMpCMAuyeKU9EaFDAVqpCLsQ2YJz",
  "key4": "4tUK2JuuyofSHbX6JQxhJnUKaAdLXUV6o1XZP1f4pyqtgPnGkRZHoJVQUDpfJK6S4eSt48DD1zWCHqh9PtoSZLEY",
  "key5": "s1k8bneAJLcceSqxHEUeubuwCuvPYWn6ssvqEjtyYNCp3Y1pEjXYswq4BYrfShLQcP8YAN2JEHiMsMRDE1rrm55",
  "key6": "5BqRoFBXfUC1KSHxoKE3bTeXHLpyvwtVkaq8cBi6QeTsQvPKUJJe9EfzJeNaNY3Ku9JtHQ6jP1w5tFwWtBT9Gjf5",
  "key7": "3k3kjMsGBRP3qfh4qDBXAYGCEDPvKQpPDHLvSd5jNJnMsFwAahXnKH8ej5wEcdmT4v8VHCpNKBVp4qHw2rePFJst",
  "key8": "24G51VKWNZ2sardj9NTj4WkFfywY35cPN78afTWuoy8nKxfKxqQBBQXQ28wsdLJrfhipUZDebg14fAVk4vW8gaYb",
  "key9": "5ANUMCKCUuMk5uDzfNDHA8QrTE2BkG3XdRsN4uXu5iKnJ5mNYXTmSLTB6cymrMJHUsdfbp4Cb5Ppfn66aQiBHdY9",
  "key10": "5p28TL2iNTeWkJQMqAYaHuHGEyMS3p1F5ufvXLvtkNdYW1yi21Aw8cxzRjWuNNThvzgMnisHUhc8siBG34yUny25",
  "key11": "3qWs5GWPog8zHFcAXcyNHqsp88Gb1Dy5QD5zTeUB1avxPBQgBC3DenYAQyvN225jDBdhW1F8aNTvnGCUGXvuyJAb",
  "key12": "67AuLFyKNMDPzutsSvW8ev3e8robyxwHTxNezEqCv3HzDZkyRsc4N1ERtkeNdq74FMDobRk8uUeas2ayD5k7Abo4",
  "key13": "5GVmTGEPFepYhhC7WcSpCq5BZUCpmLEQbiczH1J961wj8z3hqwYAUspt7i4Fvy3r4FmasNHNivwb51f5G6hnLnzs",
  "key14": "5JEo2aSGdXDSCBpFsTEDcJkZeGjUsmH3AzYhM3Q4jUi9AatrKMCciaQcePLMkVFQXzqEBnCPBajM4UXqMJPr2Yvs",
  "key15": "gcNcV4p7LA6o9bxPVWWD9z9JgUVRvJVkW6dxn3prkfKJWK93BjW6bamDZY6uRWNXLCqEtVGEAk41Kn4S7DbEmCZ",
  "key16": "4LPAc94o8JF9PAjaGJVNi8iTRj9xA9f3uWWoEf4QJZozRDTraHnbPSty67SR2M8XjMdo6i37nThA4F6QdnBKkP4F",
  "key17": "41ZXgV8W3o66AnddAXi99ByNyye8t4Mzu16AvnWkTnKGVY6XhQDKVsyRPULdLDkaAbezHFiJ5cAwhU8Pjiy3XLP9",
  "key18": "3qFUTy989dvb6Kewq9kET8YemYXy9eg5HAHEtrYBXQGQKFqo8kMz4rtVJdaN9fVMErtDL34qBYXXpPhEdXwvmck2",
  "key19": "4HWw7fuQ2ZG515RqBN23ex8eeiDBC8DahmfmiVxcpiidc4E4XsHBtWQF5zfTg1aC55uNqCu7nuUtXLJ9icy9DTHd",
  "key20": "5X7c8xjVq6SPiQPz5aJ51wWo47QATnFctzHPQdBpRKBLDLA9ouB4Sz6J3bKdpkCLW3J3BZVBRh14dAgdaNNeUuFG",
  "key21": "EiaWo6x1CJrVAA9E22dPGyYq9HULe4rNxkH84Cw2uK3YYCzyhmNkadh6bxB9JizER7DoNpABrutDL7dyPTJi8rt",
  "key22": "2AW2P4HpjCZBWqHKkxQkTw7J5jNqRdDYsdQBHmNHENEtGEPZZB3oQSAPQCpjefkFWPsP82esSiAVULugVbBxo2X1",
  "key23": "2vpMTJ2M2M9m7GSAT3bi3h2jDZidp6bRyXyNCXkqVs5Z4gbaA7tKB9G3QvmEnErqQVFbSpUm7TUe36eA7h21iYdW",
  "key24": "3ZEb23tErPGWwsabaspq4sxXNuirs6q1gX6okLgeJj7TeCVo15tBTs7PiMKeUd62RqnsXZ9iukaHHvjX3M83LY8L",
  "key25": "ckzPiM46J63p99N6uiqNe57eB5ena2QuMGV2MZiouUCdJE78fmgvTgQmCMep2koHkb2d4G8psyppmqM6rzRoMTZ",
  "key26": "3R6a8HS6ZdSYDbRz3sYezEDw1M3vBxanbAZ5WmVJ3QEv7VGGggXeF4kLwxVnihmwifrQyjSW1VVhkhLgGmpw7k28",
  "key27": "3RYow2eAwGDunZiHdLg8VLrhuhAwyNouFtWzC5EfydoacV5EqbrL81HbpBTZGTHesrJyK5fjvBoiQykisTmBBEoU",
  "key28": "vcncQQNTSTvFzu4s9RW6bQuKYGttyfceFurBVUb8cVg4zc9R8xjMMhQ8fLAt56t93nTpzg8LkzTQzBZkt6fHttk",
  "key29": "5t7YnRMXBpxmWSFRdcuvKrAVqM8WrbS4TTmLcuBasi1eV6Mk9uqaJfY5LPP7P7xLG8UmyMEJiK7WNDLdhnEWxTsa",
  "key30": "4GmCZ4yPcLyHmd8QB1RQNNHvYKiXxY94fKq8kViKUfQQrtEcXRn2UQY2JKrnoPrLGkeuEwiR5mb7taTyVfWrK6C6",
  "key31": "5Nz3hDCTzj1xpjSNuv8V6jVf85JoWtUYpYg4nAJpsqesxcNPxwY46gtRAiCGc7Nyboju1qyiNMTHH5jS8LfV32Sr",
  "key32": "5eqaM6Bycr9eZHT4Qnq3SkasUND1xugCsQNAdgY19vBgPxNiSLtJY2v63wgQj5kyCSJo24s2aRG2jGtfReCqGb8r",
  "key33": "5KfRBJpkWBtzcmpNco71uTk1H8TxXYSjrKeKxHxACHJMB8mTWiKd54tjKT2THrr8eYqjP1RXHPGL87q5PzUCzZeV",
  "key34": "3iymnSJprVVgEHEaQrGvmUC2hZijcV1fFPhJcAafwfZJATBpq1142e3PBTfzvW1uPvQNBrFhEe1yLsyPz8chyAcb",
  "key35": "3ZBFSrcwZLXb83NLif1mr43iPCjS7ipHbEbsXL5Q1WtxRJ77jdPnNf6SBEPHpbkdjnZ3QENBDf3NcpZ4f29gLbRa",
  "key36": "ZxToUeQff1CkxmRvEMLFZq4tZyd2cDnbhvwH5FuawTxMAbmEPtgLtqe8cQY32HRnVSku7gd1H61eFaQr2LvGyEZ",
  "key37": "3kUovJLhP25FWRffNBP1iFygRqVmYgePs6FVL5E5Go995B784GXWVhoQMi6zZyBQ25HbGWWdbPokxD7gwvCqTyEJ",
  "key38": "4RMiJ27xjfuE2iaVULrTNE1KruNdMmhgkXBpYaV1d6XjMsi8tENPHS3q8S2HfjK6tihYq9BYMjWknFQTsdVYoRpA",
  "key39": "2H2SQGVH5mXwBLynvgenxuhJkLzs7e448maftpwedPAR1z4EZWBf2BUGPYC3QDkWYFxQr6Tge3G5rSesXWUBBUiA",
  "key40": "3oMCz99ChCSFwKifmVeobDeUVfMXw4YKwpqHRVr1kcbEYtEpnJQePc42swqy84F9n5KVE7S3BXdjJxQ4n35W21sT",
  "key41": "y5TDqecho3p67dbTJRo2N79TPV93qMDXXG8BKuEN6hpxnzX4KfvHZsWGVjM1nFw6Yb2i4afd1uxmncvbK1hCnV7",
  "key42": "4J51WfPaTvy8kGamgvaMLerMUXQBdXfqQ3gQ8WPBUTYB2PGJru73czYEUKqbzgU3BsCT64L8B3dw6v5CmzQNik9F",
  "key43": "4ss47YpUd6e5z9yt6N8ic6RyVpwY4ruJr18b6kv67ZHxrcZodUtbQnNs2etXRmPBph8kjWgt7MzLWqPaD9rzq3Ga",
  "key44": "PdfTXKbNdgTgt2Zbx8vyhJVyCJ1dAwN2qMLJUxeeBTJimreChXtBCVpWXfkT2q57TeYX7cvFnJHmPQQt8e3eBXq",
  "key45": "4vZutcVPYw4bRBvNQDcpZ1wxdYfdkfKHmQxQyAVUadZTUdR454fm4N9b2k8QrNsX3B11cQXMUWmJ2iji1TkKuiAJ",
  "key46": "3bamWi5nu2WrAaBQRkiH2wNhr22v3rgK9qozLFnBuxRmXVjAVgNX3o4mtRH6mBqzjHBiMkksXpCF3T3X1gKqprLD",
  "key47": "5pXVy5xZSKXpMB5er7XKzvTDYPac4pbrEZdjfKF9emX7pdTTdY4AZ6iDzm3cRzwTbUY6yQbsYpRDVVLBxmCJdGBN"
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
