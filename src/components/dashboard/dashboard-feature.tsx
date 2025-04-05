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
    "TxWrzgVJy7Cdwrp7TjLr7Ub9VttsbpifqeKk7zo1PsjG78deYFtg1QcASk3hi22ionaaANDiHdUs1XzLdkMy4A1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZEqu279VZPKy6QGydCoENKq8HvgKijr1dsbJRHo6vUpYPnFYy9jiNVoPf2bMdUF1exYWv8WR9DyTTbtpcvftQcE",
  "key1": "3heJ2PBPMEZPtTTwHsBBX5hk8bNFoN7qhtmi1PRMSscaJqUvD6JVnUcURUrNqK8iZqbtfKhWmjUYZXYQcnyLxG1w",
  "key2": "5hRwWmaju7Y4S3YYC16X98q5UKXgoew7JxNYzFTD3f6wABFZqZ7MqfNY3vTZHHnAFwJhAJwk4qFoVfWsp3uxM7nu",
  "key3": "4qFJimcpBDr2NeQDcDFb8JzUXMScrtuaYSFFgcchiBMrYSptEM7MNsJeqTb5vzH5ZLcPgE46Stdd8WG4mW4AYeZP",
  "key4": "241MQMYffcnD8P7ngdad7vJP8rJHp4fCf6jXoNJdcPTJ9A6bA3ndRRjjBfjHAW9ZXkpVSc9WZJJ9H9U69ZnzbL51",
  "key5": "3uqNzcdwJaqiqYExiDYmB4pc6255DdGeASNet6aZMbAXdPa2csdogwbQAgq3oBToxQ4nKGnq4E6THhKLFwDcgecZ",
  "key6": "5UCiD6GUR9uGTBRHNyAkA1cv5HGYDrkyFZnKXwN8icHTqiwnyHqmSPx8LDsJ3PrHK5tyGD9Jk2L5zFtQWoagUwwz",
  "key7": "5UVtbifDKiQMUWaSRkQGdHHVo9fTDckJ2M2QuwMwMFMSrkmZjcqgwHXPFcqccMtFM7rn7YkLGY8LuoDfQAcFCJC1",
  "key8": "2cZfkKdWmXfgHt1rYvM1sNmTHW7EBVzv7Fa4t8ZhC6jEU45sSKRYPXkYAJnkVrk5GhUQvbv71spfCCkauaL69jfW",
  "key9": "nYLD5cUmjF8hhqKyn9VnNiZcwf3CVrLs31GYx3ggM3RG3FpHrVm2XpX2vvn1cFrcSVGcUnvM1Z1nnTFS5Mvd8P8",
  "key10": "4XPmeJPZeKGsMNZN3RXbinAVHtSfznUB3EbQNqK6ekTaASdbuJ7DV6oXH5ecr6QsL1PGjDzX7SND1DDPZbNndpTt",
  "key11": "1EAhgt15DkczLPDuWw9ubsVKhteESmmav3KudQjppwXAsQ3tCPV5muPAs2uvGrFfYu9GmFJcBDti4UbJRuJg36W",
  "key12": "2AYPgsnZG2P2xJBVsRKYWC9LTBXCuBHHKf4RV4Cqg1ZTtgCQb2uroMZ17X51AnCwHpyydiQvZjYQh7ZHBryyqBeV",
  "key13": "2wdoujudrmo62dEVdRuTHSBQHCaNHyJJ2gLUjTzZfUU8eUA6xtbkTJsjRtQ6av85ocoWqRAoanv1W3kDRNEJ4CqJ",
  "key14": "2quMeLRaYAoZdiKZK4Y4ogWxwshtfvmPwoCiVbpnQk99bMGFJg2UGMoDtZm7iV2jGHi8hnCNWKW9sTNmpf79Lyoz",
  "key15": "3iMTnkR4seq73D4HqnTHi7KWZjefwUtPEtMug8hX5fcQyxAUuWKBuGbQfnY1ckdrfUpUMDyAtZhEmaSGuPGK19mw",
  "key16": "4E5VYiyJJZKVT8yr2AgPc5CNNiuoVE4LSW3QGr2fFUeRPybrzYb1dAzwYT4w5obAGoLmMX3hFzP8M8G2yudpnw8G",
  "key17": "3cQYtNXbwuSKgeYW67HzBjpFcArSCUvWTmfNxtzMhtQvr1sxc6Gn9pWUgoR7bd7PhCrSDPUkALSXuGGmjCbBsrqt",
  "key18": "tJkJSLs4okTfyVYQ95BFoStqM5EmUXMDu7JraC4jPprMsyEYDpGSBnqWf5zjK2hJCf9enFS8sXFhdmBfBAPTd3Z",
  "key19": "4nNQhaKQj6gnqrAARwWP5fjFg3dQCCBnv4qQ3TbfpyKquRJBHfRReA7RAb97svexySrpiCDqEBhYbC8oAQyrTvv8",
  "key20": "4Cdne6xdEywddVo2TKZFgQCwDrUZGPbCkH1jffGex3o4naWVeaJtPERbjkQPmZiQLR6pesqr2vRPjTFkNPrAEPL",
  "key21": "3aGV7hbUhfZBu88eYjU1UQT7o5bskG1yfff15oRK3sL2SUVz4UncYV8D87tUUkjtkNha8dAXMWPcZMpCHXs37si",
  "key22": "5yXnEmzMzGCzinWMoSsnPqLYnVCFM11qhVx9KHNrAcsnAFxswqmch5bVsUeY8GdiBAXBPKvjZw764ppzN4CEVYGS",
  "key23": "5sYGMB2Pdp2ktwZTSNwffVZ9ewtryym8UzAuBRggvQZgykKJCkN6sgtQcYKGvaXhTZD3qxkAVgvrtJYb1noeGWD9",
  "key24": "4jrxsGmSbfubSD7cvyJRDc9L2BQisb9PSju4zqYY19JyN7f7fWeeE4kcsW3bRSqpACQcwyAxVB2yZxcL4ujYcu3e",
  "key25": "3JtsSJvMVBM7bsvognJox5GW9S22avwSwTEENVsq2uWyPoghrbfHpP2dfFx78k6PEsk9kEEKNYDUKWU7z32iMYHp",
  "key26": "5Mu5GpwV48pX4yg5F1FTq8Aif5M7Zx4W8wu9XuS6qCqnet8qURmQgveq9JuMV5D2j4cYrQtEMx77sxy2kHhkpKto",
  "key27": "4htaq1rKXW8M7XWXuPkKP1jSKPsNjEHZG1GkZjkypqvSDVUXSzhtFAo9Yx2aMwAoqo1TExz86txQSYCWdrDpE8mH",
  "key28": "4nuPFpTwSee2KBTnAFAMe47Z2ArJQ4ss3t48edHbQQuX43b19xBKex4wWddSRGgSJ5B2ogf5vqwKsAg8g2pUR2uy",
  "key29": "3vMfEGnwSb6LycjzCecZdRiamcQQWgrAYYumStvmcDZ9oawdEBvN3gKsAffopR1bd4wjj5qYtSMSqM4qHm4dmADi",
  "key30": "GNi9exkpwPFTkRm8smjPkT6oQ6ihohGdjYCEpDgydFg3mxj8VRZS1Ae4yjfZq5JHTqojeGBfymanU68Xb1LMfsZ",
  "key31": "3pKFeugU14AsSQeomZePgbVVvGHNmdv5a1NZix8QVmvjNHuE2x2SRH14XdNPYUocadedogLgq3bKbgWXgLKfXFN",
  "key32": "5u9j2aj48bDqv5APRje5Q5AXGDM2nSesBNzYVj8X9TopVEbwUxY3Cs9uBUJo7tWDYaFpTnuZ24udF57zT5okdBwB",
  "key33": "2dsPsdiFxK2xAaWvNAgCtjmy3KS6UqQBs1Wo2SxUm58Eg5C3DG3SCbcDWjwg4YEJBD7c94WhK7Voji4qKN7Qr4aa",
  "key34": "2mniiSFPgfPe4TVpri5sKmRCemKUSNWP1GmbrD6WbjAJPaCJ5d2cKNu1ynZUGyJbEqHTGpV6NXK3R4odQovyLoRr"
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
