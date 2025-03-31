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
    "cAj3gNpmwfySAEbdNUPn5QcVEriSxvG6NWMcthVjmx2wp22nD7sb9rbxbC2VzpS8VXdAYmmirAVmXsAyKBK8bb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUrLtfZX2182ui5QGu9iqUHNUzY2DF9QK6cU7axaPjdK1aRaRiEModzfyR7w4WtxTBMyorXFJp5g8HU5vjBJ97o",
  "key1": "4yi6honxXDWWdTy6PpJSJ69oZm6s5i3z1FeuzQjAkQwMHrUoqBVMxHL71emu2S74z9vof6U34LMNGcanPFA9yxz2",
  "key2": "35e2UUT3rCcA1JztRkGuJA5pNDDwsfUxekujM4uLc1B8R4enZ4srpvvSmccF9wYvBRvujSjVgN1S7iuaUQ8HEnxj",
  "key3": "4JBL8iDmvgQ9dvjuZigyXGjrbRBwgVqM6B5VbKpFbcV6Zb4E85UdKfv1DGZU2WWDHcSSRhSP5ZpMH1btxFnbpa1d",
  "key4": "7oKSPVuaFtkCvRrgHQpSQdV2CW4sgzHom38UzWZijXVthq6TNEqaJMh7uTBTqXjZiez77KA1YHcAYQhe3tv1MuR",
  "key5": "4kwAk4UJjCMgcaNvdBHuFiJEryEMN4K6uLWj4ASyYZ9jqipVkr3Y4VKw4vc9yzdbtcLTNq2n3Qt7y6SLg7r1dtQP",
  "key6": "5JEHUkAj66vTeRcmQQRp9HCUMQ1jd3EGLZ3AZkdkrjFtZV3DCbhXEyxGngZqcR6QaaSuuB94ByJuJHqqAVtzEKuE",
  "key7": "4F2AGjayLKLWNCh6xaFsVQVUhEuRk3Mow7vgKyyy87rJHjt8yZ8UPAtNcvhThPZtHVCemihSXJpCbuzdmrbrxddY",
  "key8": "3rmswroNnq4DCQZ5VVuim7f76QfV8gd6g5rDeFy9qDnshxPUKkzyyr3q4yWMHfsNt9cfrec9wyQ9rNvzM7cNtGFr",
  "key9": "5gy8yY4k1mnShUzuqBRCgExTcL7vf4nEZiDtuUfqEcDeNmopCPCaS9n8oJ3osaCas6xKmM2PDzNCFJaPbxgY3mkE",
  "key10": "YMFJFWx4Prfpanv91zPSe2TfjRCLnAPwgTkfkWMzP7VYwhxd2udAWxFcECXsVaguFts2oXXJXtmNJGT3f3mjVj4",
  "key11": "67qaGFW8SaTAjGCY8VHQBCxC3FpsVny8hVjHejuhB4oyETdc4VS8eAdDyQWTV6euFg6cZWA4MQWueUb82yAD5uom",
  "key12": "HK5H7YoW4tamy8pNGLu7KWGdYaLHkiuL8zABNXb4fMwTepZnci3UZEXEoao5AHiBdwjPviwCVz1Ts6m4nQ6Sh92",
  "key13": "64VK37bxwGJQGxeBaz2oYUuNcfMsMJn2hs513TY52ELSj11MZNbDLpgBDVgUekt3ZmvtDd2eTWGpehpCK7pVpVcw",
  "key14": "Y5qEL9JBXxTi9TZVKYbhn72daiuC3h9gRv9uXH9uTpmF55yEVgvsTC1NvyJdPbvDBwx3f35R64j8pFZRFa6dW3J",
  "key15": "4VWudBnrZShr6vaeBMMtrpPvqxmGP7CrNp5A1AuaED6ELiC67kpSgQBBMsLCtLBtPtAq1VuamyF9bDtvLtoxMf7x",
  "key16": "sWgrePkTGrXV8vKoTC4urZbe4mNcjLFdWH3tUJX2pPVD9YGfCUzLUS2ygSGcW8unKbniTgxZ7KCpzKFSvg3ytgW",
  "key17": "SVsi63VwJEGHDgSAzDRUFJHwhT9e8T8e1idDDKt2zx7RTRRxmypEgig9XdGjmDJRYR4itHsvWGELF7BkQfvZnsP",
  "key18": "4jH5VTYp1ZSx8vwHrULEFaRktoqdEFgSWggwEZFWZQAT1yoFXsfQsv9WCTwcPeHvg2VykvQbP2tSD5L5cijY6aNh",
  "key19": "66PwYPp4beG5UMNfw8EGQMpXYGAsgckdoAfW8t3wVBG9WFXKu8hBERf92hkejmL8qJwZsCZt7jbFK79n23MEoffv",
  "key20": "4BZYX1fFwuxncUvnTgW7au3LXJbNVUCSWnGBCqksEZrrZZ4YvFt8oVzdLmzGN56UtaggeT6UsHFGdfBNqK5XTW8y",
  "key21": "62L3tnmyb7BWageC8pHudgfRZ9Pxkn2dmUjjq1XW6oPCLNBAHLqbJsPVS3Q54RbRiG9HHwF4swrp92WdqvB1VPXC",
  "key22": "534YTwNg3CDhyHtaGFZLvsBoBq1HjeTSGRKnnRju8M8z4YiCw1GKPsHoQgpCV4eZEus2VKUT9b2GNpA8DSq1F1qX",
  "key23": "2BZwZVTRQ95JcnFhWQ5orRnQaxQQ7WKJcTdaipEozUvSBPdMWkDaBpifFk5MoDkE38rCSFzYewf77CrKs14KSNjK",
  "key24": "RNqKkQ72pU3Jg4wJczdokqQ93yhUNmHsJaztNs47bB2CYA7jX2xxM49Xjv5JZNJqfEEhyRRwTWyCnFWr5D3cbxy",
  "key25": "4CQyM1EgvgeLqbdgUbcFEuf4YsTjTWcPVD8vYPr72ZRbDj3koYha6AbiVuhFDNaztCMRdw7YHy83bmcMgqHe8DUm",
  "key26": "3xVP1YpCt2MA9S9DM5MC5xeWfe6v9SCKmoVyukCb5PpS9sxoGfZxproiPqZxQrCs44DL31f7wbgMwPTsVeAJJJCu",
  "key27": "2TU1hBdxTbHry3VJu8BMszqSp8mRkiTjCwfrSACDfCYEaMxoewYAwG7Fa5DsyAf9pgfgDrFJrdUCaaWZga9tZ6JK",
  "key28": "5T6fYuzoooyKXhurcQZtv3vCGYjkGWywywQiBYPGAzeRvNfv1yxNWUd8ZmzaVBijsCymEZWe1uTFhY8U4TQf4q5r",
  "key29": "5YuipopWKACQuy588xHK4zwaAyD6tUSN7BFDxnEvYpKizxcT3RAPkBU5syeWBSiyZhGVoVwCvPfaB47vPcxw8dGC",
  "key30": "5UJXQfDkkVRwZ7utet84HLdF7Yx4nJD8sXGNGy5ipmpkcRN6gmR3VUUVHoBqFYqPPjFar9SXTMQPSCkYYG6ucMqj",
  "key31": "5c1QoUQWhTREeVyzhJgB1U5xsRy4TNeBBCysUKkFS6YFuuRcCFZhyG3wKKuTPBDy1yLR8yV9awYxz1Ug77YnMTkB"
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
