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
    "4Z89xQsfXTfrMedJNxi22dbuP1H3sFSiM76SgVvTBoiPnXYEjZJd8PmmQ5KnxqPJ3oz3Y9bruAuXKYKHzatgx38n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nm64zr8xpJRD2jyhrxavAfqEB1uacTWDmAamExWDapBSQVEVtLWvv92wW14eW4NcjiXaSSobkci3rer1cCLukcz",
  "key1": "3nCAiWzkgwqyUKeP4BW1cuaXF53c2VwD61ck1deiwvs5PNE8KG1CiNXpDmowGaBYpbAML9CAR9pbxo19VHhmy81d",
  "key2": "3fCW4qLM54YYKZ67ytQvNtbUiUkekVT31YK6egttTB4fLVHdvYyFJ6HjYveFEDamLrXnF7SjnvV52ytKNYer9Nao",
  "key3": "3E5Gep3Q5UmPu8LKKEawGk7cMA3nHpc3gQweGkk3e7nFz2DWZ4GkdMcNPGd4K7ymaUNzcwbHG9z5CoGtpm1BtTp5",
  "key4": "5PZwoP9LxosV6pKTjvvxQeVa8cFhenseW87ELTtNq3sNL8Ze7DnivCo385Nv3BKKHTiW1HNqBTAFhWpDYajxo9pt",
  "key5": "2RQAiGnDfuoMrqpW3GArinfD2HUJzGVUAc5Y6hcTwXRCvXwqtvVowPxuaNP9rTsKzVZvVEieBtEAGnib9PQzvCgz",
  "key6": "PaA1azhdXRqhpPfUgjvMjMEFSmBsEo22SQZ3SAQ2b14rvGCvcv2BM5zYuEg5avQWECpJcLExUEuyp6bDc9hfiAR",
  "key7": "mgM8v7G6hwMae4qzqcfFZiXgL3sC6ovfhYXJMLEg51p9397pLwAtsTpQg6n8bBZW6hGxBq4yfXcjUhFQz2ak2oY",
  "key8": "2esp9KNZ86pjvGZq63NNFhvKihrWBtE1iJ15yWYBnZxnqvEJCRQhtKhQecxc5GnTsKABmpg7K1mWfSW26Po8Z2RQ",
  "key9": "SiuGJU5xGiEdWKRcm4WDpNca6HPbYu83prEeZoHiXAk32wYEWZbzbSZUuzUGTL1vsD58JWpYgcC6GiQdRUJGd4u",
  "key10": "3nnxJmrg5PxoJ1P2oNawgg7d7JVXD6yc2Pr3vzv8mABtMisUDD2MgymctXN4DRYhQrSPMKtcX1r7RkxfQikoRfT2",
  "key11": "3F2NM1VC8cYsdeRK1uu6pKxYp5hJVxRC3ch5LxJKb2TNR6GTkSN5E9vnp3y3qpA8UU38hPHvwASqVHnwrQqkyrWf",
  "key12": "M5XDhnRacPwWZSumXZ8PQd9j1RtSb7BweeWhm9mBeC8k2LkB6piTagTqXx8kDtDtVrChWExDKPoZxKfUF8xuKrc",
  "key13": "3Abt2ASELjNGwqMR5xMXzWsZr8D1Do8qNoz8GmnhvkaAuNfQHkRn28npFU8LDejfsdxgXgsCuNL3iQo9uLngTpB",
  "key14": "4NtoUxnGCUkhSMZsjdGJMMrw5qRGqZxHPa1Qku24wHf7GUwktTE5CkK4VdjDxZ9upSXRxfJCcnPjDBT8veaF4R6n",
  "key15": "1284Ew3tW68i9Z4rLgCSaLnCTAuBaatqtxKGxtfQK7VkFuNCZA616dx9AcMsqzVjRQssesEvwqG2GxCe8v1j8Rma",
  "key16": "4QyyxuYjkibncUkDgEwkJgeGrUv79uoFcBXnxh4Ptd643fZ7844bRugjN35hBaBttWSTUFreJxsxTD9abrbnERi9",
  "key17": "5mSENo56jUe1np7s7oKj22tVwC8vy6xDgFjveoX4xYJXEEnC84eZ5ZYCzdbJgS1Sx2RdD3d5VFifqPmXyJuoc5AA",
  "key18": "zR1uZAYhBPpbdkeX28X1bd6c5BRSo3XzZV9eSiNTpybDBgr7uA8iuJyt2GbxnV92gcSVuxfXPPzAewDwSjurVUf",
  "key19": "46N2LhpXTaWBViMCurMrhq5pB9ouCiGEpCKGzYNyPG9FhpaDDotnP3fc8YLs1nMLswssFg81QaRRxvk4grBiAiSE",
  "key20": "2abfmnL9eQrCcBWevkevYENnyM5F4yB9UTVbEh8Suu7pWUPnNCVznCjkJRpm7n46Vkbj6fHDX5DnqdZB23Pb3c4",
  "key21": "2HKVrrZfyLLPkXMFtAb3QqvZ4jEBb8EJDwhDNjqEAX19KQQEcBcD2QTfvt4KqTL9zoSmdPT9KHVWeAtoWqw9uqux",
  "key22": "5ricx8q3BmZQNPFAzEfE84SDoSYJvDjEuFHgCoh8Aa69NGhM8EyettdCruBQANxaJEqSykbCyKF9L9cYWjYyRZiu",
  "key23": "5JRmVrVrBZweYejt1KrPXzGekBacFiZWwWqV8SaNKmXh2aEJiQQFD4s1j4mKRNcRtJRBgHcGC9p8aF6tmqtooPuP",
  "key24": "3FGE4f77eqG1JXdVPARsTdW8C8DBM2ZrhjjCW2nzyKj4vUwwwHN6mSPKoyi58yMJT8nbfxPjFhiu7DZPxDv8ifnM",
  "key25": "4o8cs4r7faPYDgmnGGsm5teBmm8UqoaaTYrDx52WputASXTcmdtZM8gML8f5rnZdP1eJDadrxfaL47Q8dRX7Xym",
  "key26": "4ZJLGbWfkEU1L7xBkDp8jfsCZrdVRvb985APyzMny68N2omJDGTVJSjKacwTBy1QACac6ZCxijYULJkJryHZ7feL",
  "key27": "4RFLn9CKnyoNkEWmAYYSKiv5rx7LrEjjPv3jPGFiknB8rhhXU2fszFJ4doGgaTAoSbynYYm9T3ig9uoTgypLTfc",
  "key28": "5HbGSy1DEPWF9dvGmsaQv6hsuFQ9pgcV28RPDsm8KJi3ZVjaougtGrdgMufB6viPW4g6AcFJggHR3rgwGqQU3zGG",
  "key29": "3B3T6hijNvWMie4UpXws8S5ycAh85nyX1PbdLWBaQKUaV2VZEWFVxqhZb8u4hTZdbxtvjfZqRz3Zy4o9GFk4WZ4k",
  "key30": "25wKCBbELVKNuFnBRMcd9c7egWegZrYPG4HRmyxWVkQ3R4H6tWqmE92Aws6Er5z1AELWbcWvCm9RBpwiS9mDsWT9",
  "key31": "4r4KrJhp2vye1LhXbk4vZ6mLMtDpKkAKDj6sv7hUJFdZzSAYFVdQ5QkcaTDFyBZPoVpipuZ4Y8LKK5hYokoeyXbe",
  "key32": "3yNYCnDrSNVbjZ5LcQL6QeK45oKVChN5VNHLGZFjbAztv7PNrHZb76FUbDGhgX82QfgXCvezUMN7wG1Z2v7QLGub",
  "key33": "5VSeDtLMFvNAf1MkMXCuie1T6B28nQxXT6KaVRoRa5aaW8KseUhER9muHpA58UA91KUwdjSdXnXERWXzd5A6n8fF",
  "key34": "3UX9iMZAaNLUZvBXuQVefHXTzAgYL2J7wBoe9zNhx6CpoU8z8NmPbmFnaK2hMnaqvtxT26VGhbTBdLFHKaeL6HpS",
  "key35": "2go8ztL3zyD45mqdKfMPjpNP48BDynqmcmFZXQCEewgeUCms6jJr2kf7M4TcF9YesSSj3nubrLaXYqkJmtk781pn",
  "key36": "3ivPUhtJUFRdvEnBcKYz3J6sCsLpfD4kM5gTLF8nPwAno53t1dg6SVLioj1b17syJQDkmnt1YePqoJTLeF6mFHDg",
  "key37": "2H7APq9ymZWUmsgqHCWsnPYr7u3zAP4UyrsmD8cUvZrxp2UcxTPWNpRALuuG3cLWZG9Je45e8BaAoYaP1HtqBX7C",
  "key38": "3ydgzvr2tYxaQHo6ZJ24wgocbvGaqcs5CtxEjANbzcTUShq7ipoTVy4AXBPhXwqdcyyEJSTBzQEPFgxMyqEVX4Zq",
  "key39": "668txM3KpQ2esPMRZv9tix2ijrPHnT2CENmYq4sCNMPyj6Wm4kpNtqFu3iFNqbDuAXAsTUcsHC9iyr9nuUiAxsoC",
  "key40": "3F5KFRn98kp6bcSLh8aMnG761SSihCgKqHPsaroVwJRqZevQPHhFFNvNWXuQ24VaEtYYaV8hF4nySZrULUgDMEm1",
  "key41": "5FkmrM7k7zA3h7ortYbJ8oiH1Sv8wihTcXAJ2MrWfArHNLNGugxAA3xosU3bSyZWqgSQatfEdJGphS3gjRGWQL33",
  "key42": "23zqy7kZno3k71Z4xU8LA3xf3ZMoMK2mpM8fm4FnHBuvKzozvn5wG9oVtsoCGAZVYyzasYmiXTTyyHoVBnR6jG6G"
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
