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
    "3gkEMivKEYV8afFr79rKY8B8Q98VdPanGHXPrmeENwLpvunsfFA4DWVfrtEBDHkee9hwR2tEAqr7s5EmfbM9KebC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WM9G4NHC5akwGDrteyJwhjXcuk48HUYWRu664yQ5zSkzdtKaNVSoYFp7dZdvqBWb5niUbErivkukGGah8fe9Tj",
  "key1": "q85q3T6kaZ45oVm7jrYiYRLvMX4C8UiF55GT5VSwdPh7a3DyHg5PerWhjrCVBsK2S89ZhS9wzLMDq8wRVuSK1Hz",
  "key2": "5TTbF2ex3uP5tKmNX45ataBLUBNraj1B27mr5qxFSKhWj1MqmpSZXUzaXiLzLqT6odyP7TmT1jH3VAYbXoWm5PYV",
  "key3": "4txCNQ2b8yaSRWbGDdpr7GaDmFoAgCVoBG459vL1tjdbm2aR7ihDhYya134YXk1pCXoyoYSaQwJej4bhBeAsVno8",
  "key4": "2q2J4VECDvJY3X1BpENFHa9ZTyKcF6VJrSwGi7MLUzTdaQUwqn5V8GDPFEcyUXifJFGhfbkoh2Bo2Ap9acgkbvaG",
  "key5": "4JiyLLqMvsD4hJ2aLZcFsyjABqbCkJBikZReKgFJfpzdZNNsbvk666JqA9cg4kvNwuvkYw9gzV48WszAkzNuXkoX",
  "key6": "332RJMfkhXaZy3QnLa8rkFhicpxrUcvusbQ3FHEM9tNPPiTCt4ZN7o6NCuszYWKbqka97pDb7auEvG8LA4QXps4f",
  "key7": "3AY5ak1gDcd5prGkuUnPUZ89kQcATmyV5zhHcbiMKmZUuQSiKJY5h2G3gvJkPUHEaSqwMMaPPJ7XiuJ7R4AisFf1",
  "key8": "3pp3ZxNBoC6LAB4QaD8nHcUvTXu3vTV758TNAz3EKaFNFDX1ewrKkHSCFp5Wa96GvDFGmpwCoDtrrK2RVD4gJ2hR",
  "key9": "5yf5HMJ3qvrjRQjEtZHtTDe6xwxybnGD95F99LcJkeHKoxrYKPvGGiCQkDHs7SPu4TRwpnzjU1azxcEA1fD65rMV",
  "key10": "VfjbE6BvtPvycegWCLiqbiAcB8a4H3LDEQrZkbFCLjXNAQh7aSouZ6xoKZ6534qN1fUWpjq8L7zSBrQZqJbB3SF",
  "key11": "3Mm8oCP2X85ffS8uzPz6SBAQh7JutPTmFsPJrgJAUNpxCzPrqSPNDv58HJCW1nRGEC7mrZhCEgugmSG2UeF7mmUF",
  "key12": "3xNveTuqgk9S6QGjceocfnNNbTFUhWEQDKYRT5WsMZZBjjtpNkxsDiRjxBG8wbaN95JdYmuj9uPxpxQYVUFDqio6",
  "key13": "5gvTfsfRiTsTyngWH7erngFReXvgnSKru1UREZJoHxFxPsTHEAXACZkdPtK1KVp5rvtnoX3DLJ22EfDhui3SkBMh",
  "key14": "XD2szmi98Q7qiJvX12tyJq1cGdweb8ec5FiQKHYouw5m6wpZvpPpb1ALGwiY7UdYktypGmQbi7CjsTdFxhfEPWi",
  "key15": "54PXbva6Gtm26iKUhL9Kam5b8rXMEHqVX4uFa8oKtr4eChzV1xutdnAtt1hd7L9DzdN2HXo4kNz85iRy2QSegLpg",
  "key16": "51ntDPNoDSYu5G5hTpVhLMg3jRu1Vmi4PphonyM9htDZCwuAKQKPnZ9L65NABBmg5xQWzFStn6BrTgso858i2pwd",
  "key17": "3bNQe6X46gWgkcSEWEqHrMPpfjzD2idk9VKK2j4A4YnByNmgiCeP2zb4QS2j54xQf1fzYrBVguJBgNstPsW5AaGD",
  "key18": "2HasMfCBy8t9KdBBPuAEUtrJfszKxgCEagmT4jgMU3mtapG2e5HrJ6umdZ1geFrSip3Ywpk8skNhXVKnxEkrd7JL",
  "key19": "22aZbnBgxjw96c8aYjKDJXfkTcn98VqWguBdmCybGUrfGHdcz64bp8RgnU5k8bEDvMKtY2NwMJeyhq5DHpQLeeey",
  "key20": "2NuxNDxW6JvjW4S1bazZghaDyJaE4sDiJhNiQx7QW97QrLUvzS8ap2CW2UgfSjDu2ZUXC5kH3og9Y9zZHPspFjko",
  "key21": "3udo1tCR4N3DEb9oqFMrCrUgW3m7ZNos3sgXm7AcME7Q4FxDisKQnofscUVm9NtA446T6kAcSN3AauMCohdUzPAM",
  "key22": "2gb3m8aGzw5bUB5m9dQ3wvTgQBbYNJMJkDWv4NGRoe2bBbNh9BBDzYvSkEwAemNjUoSYrKmzWLw1JRJjGPav2Rzp",
  "key23": "5MJEGAP9o1XMW4W9kYQSFAMb32JUQ5Dc3FYzWNTDHPMkoWsB7rDQBUfdxuXciUqdK3KU8kvBDLBok4TujSzj46R7",
  "key24": "4NZD3bpxorKpXveYdtpq9x6V1utykPv9LcB81Qk5xCocGiaQkoy5wkdLatfYLdiP1Kk7VCRbqcw6iMKVe9G4a9jz",
  "key25": "4ERVpDk5f5zD7jFy1WVhhPpF8jayLEHNRWg9KwjpjnQpPtvGV5McD547Ja1FRrFAFuar3FT948P5JCHL5uRW9E4p",
  "key26": "X2jkCS41xPKoARxmBre3VKKN2fgjhLje5eoAvVni7sTPJU8yvRnogmPGAGAmKBiMdFHLE1JKaDuvCwVurpfj1PH",
  "key27": "5SwLNQvb41Ai1YQUi9x9ZsRpS7agyZuM4ZNSABGBqyPaxh4Miqg9zW9JDaxy399FT2s5dzimi2qd4hTaNVA3zCVC",
  "key28": "41EajwdKYVjg695whHmM3Yz7tvxD1RKneEaMg6ZeqHTuU1wJFg8vLhKMSPhpbQyNrkG8J3169Mgbqk6ByJgq7MaT",
  "key29": "2htZNnHGY4EtUWBhAGTEGU4zHLSRpKb36KLPDw1aUTJUMtFDENyW5Qy48SFiaBeP6oSHns2BJUwzEZPenHPPJcsr",
  "key30": "1V5EAqhCnjW7CZyjrSVEAjxLUGvpwTLHugoctV7M4iAoojUbH1zLT9ZYRc1fcbmwMPRv8oJEmD2GCDmpmabxz5K",
  "key31": "2qjUmhKHM9CFuqhmYcQ6LWQGDf3McruovPadzVy2ojFKCM9rqgSffis9zhGd5bs61S4b3stA6KCCDTx9nW9QN2yB",
  "key32": "141ruZzcCacH7xCtQqhnZz2pDw2xwdzThtEcso597XDTjjccNYcCe4WvSTmnxJuafCH5wRXYRUvZbt64JpZTcco",
  "key33": "2j2muSQkhJXzn4M43TwFhSdD8A4FTKtfSEvjTVWAAkRtvwPzNkWura9u94Rm6ygoaHvwoGAukCRSoQYscxu2CXQK",
  "key34": "3sFtPsnenWwGJAsQJmjQGJrkbHPXie9DWcCjbZZXGi7RhF5k2NzqCtn6P1cgnYKSVMjFQxFRrCRRGH1wycEsQ4hS",
  "key35": "5gcWz41i6Z5hLejpt13XNQC4ZYKVh4aEsT8dmALQCWuSCzAkHr1JRg27JCNKSn8H9F12gdBaP5A9owPgQnipUYf2",
  "key36": "3cQSmvTbZynzZvCCtPiCNyfHP1BXUgCy4iJzpV5sbZXajAq87dLkQi61Hw3r9hp4sMmSZPVi9WAgd2D1BGJwqEhA",
  "key37": "4NPHBMFebegKup1paq5nq2BwmwuoBAcBXJgHtoSsmdL38P2cFekw8nntyG3jji4Cq9AnJ16SMdAfxzjCiRx6W6e8",
  "key38": "5Cwh3Q5QQS8gcqy42eaFoF2Xj1wTjvQKCpy5FUgmfyHiZpEp6QSMheUwTSs68r2yzGsAM4kfVC4yz6FT2vB8YYVq",
  "key39": "5zJM8T1aomaHjSnc9fK8akEsr6bsxf8aoqMnCv8Xenrig9vtZsgLqjfNHrmw5BbgAoijLRCGJ417vodLGGX7uS8",
  "key40": "3bVmZDiXKFUPBwkcbcwj5e1ZmqTd2iucvEymeCMb2j83EP6um1N2FhVZtNaf8d7kLANnieqCJ68uW2aH95tf1nnu",
  "key41": "4V6BCg8D75dU68iK2S7jumqh61Ex9rcudqyrBFDxWnEK46xwiTpXSWN31RPz31JjzLbJHQ6JbAgfeBnigC7uGDUx",
  "key42": "4yCTqi7cmrZobHRL9veSVCYrBvVf53Hd9d7rgE5X1HLGrBp5imEQJEKUpe6SXT5ZgKdi9fe2wfDwZj1QYXJm1ZMr",
  "key43": "3pdgLYMZN2Lky1RtvBnF8Zd5URrJsxtPDETasWFaRHj8aoCPs2tjWhK6A29ef7j6Kbi3fWjLR5VBg8FFWTFtL7xs",
  "key44": "BbLhdbGn6bXKQV5zuUpYmCdmsoTYt4jRs1kg4GxTzEvEnbW6Nc1Fb5KGnHTxrmZHwWRyEDnkwvvSU3AU2WXpVxd"
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
