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
    "3XEWApZYCbmbuoxbwmwuwsVt6TUKWUhxn2pPbzkrppBFKZhYwimSm8fbi4pqbDD3XywukYNqRgHMGnMsQNTrtW4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcWLWnKYbp5zPjR59U9tPDeYGkREsAsmMGXPfNGqjw8ehkFKwZo97nyW1zD1php8j8bU9jdiiawgda8UcJMheHY",
  "key1": "3vGf6ZQJEM4ocRzkJFPeLNPay5jw6DUSwSjwpS2EYJ413EuJrhJiere5T5yGpAw56zhsHtkR8rxHZhuHwqqRL6Qt",
  "key2": "5En8R9djhAvaE3QxgAdN1kTcA2eXFD5JmCwyrWwdCicbd8bbDGNZsRvfBNhuHRH5EKcVuvCdpcn6GUBLccSmFR6C",
  "key3": "2FxdKN99JnBpH858QgYzbczmDTV8Wa6atKF46xXPPLULap2ZtSPMQkNtpmWfEXii2fF6F9eQ9gHXpy1gbXDTZX3z",
  "key4": "2WJVkTfJRwKKbKuefS5a457ASEtWLpYenKkweXiSp1YPFjmsS3FH8TomnStJGekZ9fM1cYp1oYN9NRE7YXfikS9E",
  "key5": "2YDwDUgr6eHkSCymxiVfFwWYkgVcVgNDK7LADx6mXdYgkTKNLxiHDPLrgFT775jHdLpvpAaTNPy2ckqV9YDK27dg",
  "key6": "5iq4gPaaMgTUusvKKaZf26DNBd8BLyf8Wo2YRupot49HHxYPq7m2oBSx1fyQf2o9ZEncCnuh4mev16kS6WKh56wZ",
  "key7": "2HKzPjCeziAK1Tudi1huPnLizrLfPwSX11HMkfksJaGqe3LxBNtUXWUbPY6bxPJM7j1bqo46NwayxW8vbrXUgnpr",
  "key8": "4QbHzaVHZg4DLmbpwfuV6sCLDsjVkApbi2MbRpGMmeNw4JCGbD7RrTY7j4WLh1QWACw7QWoiAJ8i8bHEME18u5xN",
  "key9": "2bzkazpkyZVnGkqkb3BrZewTkujPHr1LV6TV6mH6cyh8UTiGSjAdUAtJnyY5JVkyKUmJDnKM7tTJbE3Qebrzq8st",
  "key10": "5inm8QdEu9A5zj5v1TTY48PsVtrTPThEVb2c8eS2WheCz7yFng7w9DsBwwvSQjtYeXZsTPK5R7G6bN5FcU44pwzc",
  "key11": "2BrxwfJinxPnW73mK1ir1eWdmF5oNusXaxChzxF476Z83M1eJa3b5eoK4HQgtFGz9T8Ao4sXTAS2xDor47DhPxSH",
  "key12": "3nFeohwVPpZegH9nVwJ7E81Mgsjyf13PCQhvZd7NCunPrWCGPtjf9Y6a8RJsdkdrWtxy1R8B7qvCstUjMksyzM3G",
  "key13": "4dZbP8RpAQwEJ3Rgj9B5v8qoHYqfvwqJZ1eqhRsLwsWKxLFun38ZJehmTsLf1YLBAY3q2CHZ1zWRai9tUV3K5JTm",
  "key14": "2bgM9evnhAcAjEE6jikoysy14tnUwnukN8iSRgYhDXy8UWU32TiMi5DjCf6xX1DW5kXDABnR6xzF7YK3fi2CWRxi",
  "key15": "4tXXtzFbcpMTjn8Z1MMHP94h89vywe3MzpXN3RtAiDg7ZbWjLHc2co98SREhcHRtTucmaLbx8AjnbqAsNMD3DPxL",
  "key16": "4Ttb45unZjSorc7NDyt7z85v9VPd1DzHLY59QbJ2wzCmU3M5SHf79Q9vnrgAwPQUw7XHTEfCxH5YMauUDWddCqdy",
  "key17": "4U4poXFvoSKWmi99cZBE6nY6vwm4zXEpMHgJUhSp2zh9kxc4sbU2SnUYu2SynR2Ea6mtus65dimkSijiMn4u2KYq",
  "key18": "5sWVyDUAiN6GK2BKxT28uZMRSB8YAsEgS8Z2w7kxvpe1edWaKYKFUvPkuYe3X5GY5GP7ZTcsuX4y5nyo5URABvq8",
  "key19": "2oiHRucceLY9r8piGXYZc2tD1cdGTRrey29U8aGwFwxRFEAzAT5QpTN82WayVapjk5ZLgyi398xjxGqcJB9iA9wk",
  "key20": "5EjCCxfCMjfWSn4gba1uNUXCGhwra42XQbUzUnY3jtUPYV2EvZyFd82rdU6bo7BfKcwkmkY7eFSmUgHN5NPdBRsB",
  "key21": "NaXof6dqWBaoDtURCyawg1EnDcFRXMT3p3oKoakUUVmQi6T5ehJ5C9SKcvbSzFBgxeBdqt4XUpRU5N2bpUXpJjx",
  "key22": "2Eg4nuJn4UPmojJW1iDDz7QnAKcT6pe9YJhRr3rNKVDwnfit5RVD3whbv7b8XoqgPfdkgc2PrnUuNEEhFxw5yTo",
  "key23": "dJVz9gwfAwdDdw3WksjuCBsM8QMqUpmMV6ZH7xe5xLM4PyxUCAtCSc83ZWVJSEYox34fgn9ec9Zz22TxZBWDrkq",
  "key24": "5p5uXNEaB5iSXTKC7TqAKqLRUuwwkd4d2EoXCxoVtnjWYtsHnLFJZohBCAkjc7Y1ZY6kXAkV8MLDFrY2W1JpbRZM",
  "key25": "UmnctKdCqmxUUqc9B4PK9Kz3i3cENdeJ28Fk7cXrewKRxYuFnW5PWM9Nrg3QYwCHeHdpph6wbcrRGwdVw3KeJRn",
  "key26": "51uqCp5Q1KpiJfTHb4u7oPLGRUJSRR5S5dzBYQrMZsmG4EeTBsVGf2L8cG35tVq2HUcCoZcnS2tvys7xfky5tdhQ",
  "key27": "2ZDiJcKxHCqWyEh5Z6k1Bo3ca8Cjdk4jnovw6nYh7Yg1fGJnTgT4N5uJe1jZxHnK5ja9kV39sAFGcAFffwXSJ5XB",
  "key28": "3DbDK2Pvf5H56WsEvygJAjBEUgST2ozaLdoVLTHcMcbWPC22srzadySF1WQr9o5FWy8SEqMxxV3KZFkbxaCGYR7X",
  "key29": "35wsZsR6Bcmgu6ovrBzQEkRF3f3x1Y3rtkysWfnVFM1Js2QkEjA49PtNGJxKTeuqdBQF1uf4yeCrkPK6NiN4q9hY"
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
