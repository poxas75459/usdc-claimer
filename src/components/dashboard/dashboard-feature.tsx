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
    "3WTfvbyQX2Z4B2bvzfKhJ2YrZnq7CyduwjSCUYmRucfmApNWMCDVZeyrGbFM9d2ZAWxMEYS4ommHEvCcyWc9zCRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592WPZBDb3uNW4cpCY15BrM6zoks5H29HctrWumXZgug4znTB4pE5VUHusARryTGNL9ADev8MrjJAiN5BTcs5tgv",
  "key1": "NFthrPxfnccHMe7DKWFq1rBd27MyzTfhg9sXCKmkjNG2MbbuPNhocKU1jXQDhuhnPhFNQPpNQ2BoqHZc2uttDGT",
  "key2": "2ofDDDd2717mS166H7ksofi5uMPoT6KeMSQYXi2yJmhH4vauCbr5TbrLTq54AhZsMqecbcdt7oxoGpi6KsEVPbX5",
  "key3": "4F5Azy64A4Uih5RwXfuPsmu6LrCaQMu4KML4hAU3rutw3rTAALkVFVtzNNSUkWjtq5uScQd6Dj8bmtrVYvL3RmXE",
  "key4": "2LYMyuwdQ1YXDYAJndJgNM5XSZe6AysxjeWn4AZRREuSXk3ExrK3cvriLbhiFC9Um77FCcTvTvYeE7ZUwSXocL7E",
  "key5": "33J3MK8zusXRDPg7JSBQ3Cbkij3reSbFfwRM9MaY49CMLuXL4QtrEkjCX2WgVnz3uQjScbVYoMs3GZJQyeQUp1Lk",
  "key6": "3CqMgJf9CZaLZX6WUYnkJ4cxVXf7FD1EbWsx2B2UxBm1MmRqgKydGjkkY4MuR6gCiQwgRPmtU76Qiqut3KqAre4p",
  "key7": "5GuCkU6jojouMDVTM9aaa5fftttyf4yycWktJ5QLB7QK6ajBYixHJFBDQu274Q23qL4xorTcGBYAtJKPMT1huoGs",
  "key8": "FwKUpjYx9kvpC5J7qBG8diR33DQeeeakfoovoDPDzzSkcSQx2oDArtmQAR7cfrX1f4NZuCd8XGUH8TroC9Q916U",
  "key9": "5n1kn4Ts58nJHSqT4fWJaAjxFXKLNbB7cLSJcgxyUvnUWHwtUfoLjK1tEKF4nheDxT35hNPfr2hLNxvz5etc6iK6",
  "key10": "53G3ZKgcPDMskcc6ZuLqpNd8XtugV4RVyKh3eYtCNzAhdF6voUE9bZweba5asGwVpy9o9pNy6vbVkTi4RfUNHfFZ",
  "key11": "36wv2tcnVYHVAJmRmp7hSVMSXsNyfXW6JCAraqnttpU81wAasKqCLyfXgV97W3ZS24kxLoqhcnjoWyP7d8U5ZT4J",
  "key12": "52kXkUBRkg9Z1zAYHQSGfEukGD7qmP1wcJHehvKstuNLRr3qsiiBmm6QXHYiERgT7Csu3VS2CKinP1sGPXRFEYz",
  "key13": "3BTA6r9RbyasWpoFatCgcdQPXr8xYdHQLRAhp3sqe8o1BgdGtSHxAmaV5vw5LDEyJoPSh2cF1e4uwJtLh2nwGJAe",
  "key14": "58CqmQbvQqzcNB85dbrskH3yypfxaKrrBmm17k5Rt5VGE1u21z1HA2qVfsoTuEn6t8yfxt9Ky8V1NaMKGdRjsFdj",
  "key15": "3n4BnxH9ZW2KapdL2k3NRPBe5ga9czKePn4QbW9HuBp2AofVyd85vk1rc5CsBwUBSM7joQvyyRo2J89rCfjxJxuz",
  "key16": "3oBw9MYR16QhjWQi9KMuj5jgLVsbfnmAbTFrqd3rUK6KC8ZhVghusnHbjMKkKrhHMi7QjyG4J4QvE3FHfZbHvVbw",
  "key17": "3EtBviFcP2Lw6hVdaoMiy1YBB5Hxme142GnKNAeVaYsUfuukD9C4GfiMFWRXnBmQCG9G3bMqU8R4ueT27oMKENBd",
  "key18": "3aMbn8y7tM4h177jteS5kfpE9Z6VAX73o6SstCWEhwyE2DAFxSCaLiJCoDRC86QyNLz1oykcRC1J21FujnndML4s",
  "key19": "2Xpsq8eooi5ph5F9ePJbsyBWrECYbaTv2m98w1oirTfMbovRgHCLJPwsSKWtG3qaAY6wNLEaNztodmApTTetLpam",
  "key20": "4d4QiFCkXXYjE1pbx554dCwTi2nbgANuyxkRhVBNPsprHeQKq8GcehkkU1peQVQUshCQ5S7Fbm8PcvU21phyoqaG",
  "key21": "2EzPjGa8gvpCZvnFY8cCvMYSEfpY9w4NprH8rH4ceDKjDLUbLMu2WegBWjgHxHUsw7MDx6igK6vj61gNk2UE4iCj",
  "key22": "5Xn7HPpLC5S8xTMvxxhb2sxzTMCbcT6wVR8sQNP8s1shoUcsh5zrM19amCtRzbSp9mHajEWBo4qQNQZC4UKtmNgC",
  "key23": "3mSPxW3MMr6QrxdUUXr16CjYcxjcYF2981f9NaDteh7MhJWoTS7aKD1QEwhrJDoYu1ZzQNoC8cRd5QbgoWhSADKa",
  "key24": "4RHisaUebpy2MGwAUC6QUSgKPfHkBBqAWmJAtLdzCCNEeNSr95aRHy8v5AynsTNtuznyRjhJ3RJzBaD2bjiSH91T",
  "key25": "2KSJCVr5QS1FsdLsQf6MWaucmfFwHjX96LSL8rg4R9MKHDRMnQN9mesfhPNqNFTcuQunnVGDJzhecA1iGmwRGoEC",
  "key26": "4hw3n5CqrV1WPLP1xXWFEnsUkp3tvRZSJbjh25fiE3bUpVtRKpPPV3Ny7qZDXUbZo4TT591DwCgXGCjzCfj5FdD5",
  "key27": "4YUtrWr9qgKGe6emcn2ayzGyP59chEDCJX51kYpbMD25iHRRGzj78cURrEcokTUHEZW52U8c2HWXFhdQDeyfn4j7",
  "key28": "PAWZuCPfVuY93cJQbdWGYZauFg3d2UeXM6uZMMGxvN1StEBCYfEERsX3CYXzpUGyBawW5wNBKi9FQoySNzKppQE",
  "key29": "4DU2adBdj8aoU4MZbFPxG9APSfKwXjS2L2UQ9b4oqd6MF2DqZE5tuYHoauj3uWk38MLMp17Kw6WrLQTaTEeJLcXQ",
  "key30": "qhoREeUmWEw2MjooPLAYf8eaUrA7P9H6JXWd9JWjysrNMPJBV6orwygHcnrdpQxTaYqeukZ4eKS5sP1XjmWFB53",
  "key31": "2J1gkev6NRquysMwqiVhdKue1s7AmUxHRRZZfX3LZkiZELnkdjMzagfBk8tWSP7EmBuHivh5s1GtFVUYuFkusV7p",
  "key32": "5y3HgzYtjXUBBTeJHC4EwBGV1dR8cQFNawkFZisFD1yR9MRVg5Gq1RohPyqz6UuZXCYcV88JxwDFa8NgQRckMGaz"
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
