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
    "3Wwdjaadp6fPSajtVGAr6Ft2bjpBVV4CMCV1xNwSAR2D6crYN9gmoQkWegcBBiP3wdvNuFPmNbH3BKwy2G1uSDZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEqCUU4Wa41aNgGakwDsfn5b1Yd3aaaVFWBnxv6YLGW5TFzN6cLaUi4xB1jrfNA6HmAL7Poo3DXSicb4s3KbH8K",
  "key1": "qepxHMQFo4nuEVEXhkiUGpjVN7LuaX8Akns1dJcrWrV4QRBvDw373xuBtB32p7uT7m85KugWEVV9GAVgCrR3yR4",
  "key2": "2SeohBXfaccj4y7PSGDD6V1piE2L5JTm9yjSbZ5MRNea3ZxRD1uCn3FnLhWWwDoJ9MyWSgqPoBE7z43FUqNMzf7n",
  "key3": "3Jw5gE2rKx1zD7d1GbYzYHmsomQzBukB53MTbDLfSZdArq3HrtRitvBXbJev96MJhL54t6cVgVQPz2esWF3y61PP",
  "key4": "3BvFnAUMX1wxRcfJTQFYDAgyStrndPTxhM1Wim1f5CMmURPxrjQPUw3mRyeSWuwTYMeEdXvPEKf6GTXtzkk6SPNt",
  "key5": "2NGL8YotJ3nU5SDHSA438xvBhosHt4HiLKSRFfBaZXQWTyH2Cj81QaeHhfwRmioyZsfx2hN8fHsVanwcnoL1icMV",
  "key6": "2qthyH5YVAKKyJyapRLqzF15fvs1ghtQVNyS6pYrscJizrkboPxQMhb9j44pHgDpxMiw7kA6yeFM2scQDX8VUZBx",
  "key7": "4BgcHYuv4H56d3DfNX6Dijcu5BDkSPXN2K6SSm8TviF4c2kTyNVZ9m5naBWFKjyhDWSooj2irkqJTo1go1FRcyCF",
  "key8": "2CpuAqW6cgAHtG6VfkSaZvQbQzjemDyfRvh3TvrSFYjbxCipPnP7rhbxo1QxnFJAb2FijzjxSQQaPuWz1a1sLcLz",
  "key9": "3PTYip6GZx7Yo1PdQMyxgLD95AP1pFJPPR7F4up5ue7FPxWBY1HTYxbextPm5GHKHbDvfr5vMRSeDHyvFSn37isS",
  "key10": "25xeVqfaaZmdYiBREMUW7X7CJzyoykQtH1QDXg8dKLNdBnzascLLi7FNQKFL2jgxM1TjwoCzyeurWWkpZbfMQ4cR",
  "key11": "xMiD7F5vwTsCZ43kKZEQZ2j3KkiJW5zysdovViBHvm71p9LXPLDTxecrV6cZVsz7X82WCZhdUQy976vRs3Ro5rW",
  "key12": "h9ugZM9w4XqbcqvSg7u289J79eerdQEq7HWB6dnF4R978bo6CxbR8YBie2LLt9QEAEHZMpFNCsbKFKD8UhHMYyg",
  "key13": "3iAUdNA2mKtSgeeTvyoxzyR1X4Cq8nmFAb8Xm5Fet6pVSQXJwzWoFBUSvrxhQWyyeXkKjhTadZkwaJWjLapayBBx",
  "key14": "4DyxCkQnKTaHHfSo17dJqaqrHDzNppzWD2zJqJV74SFMYBUMbtrgP8dXoLwEbYHBUi5Pi6aHgAckwXgGTjTP3pR7",
  "key15": "5oRn4mMF5nm7Lz1sZftMJxVe4WzCYCkc7Vu71uNVKThfPNpxx4KN7JSVinnLT4KQXHAQjArG8xX8f5cxyqFt5vBm",
  "key16": "GZndiwCRJ9BeAnT8Q3kzEh9JUaz72UYJ8SnjJKAaSYsannzwwXD5cbDxj5XGcgamPvHsipQ5iAJX7z9EihYfYCw",
  "key17": "LXa21kJw9JWHuALpN7f3MNUDfRi2QmTZCNHzmGMfHpXhuycG6HvQkGiaJU8faotoMXBVQ7h3534y3szRsXksTTu",
  "key18": "e2j8fxuSHqbZiJw1w9X5VgPEs1nMQJqvs9FuXCPbjpYDmeMvHPFbG397i1G9NF4GLFEBHzm2Z6ou7KxxKNjbMpA",
  "key19": "YW9a4gEfnmjZe85NSsFyZSvoQ6c6xNUaayUsmmgiiJPsKaG1B9pvhwXQV5Lg2exkvaCUnhCMZ5xGXw3FCkiV36i",
  "key20": "2F679daga144Vg5cNJtBbDLqpFXgGtF5wQXZvuRk88RCoVcyEC5dzd6gBCT4BvpNQNY9TVyTVPUuC6yD8kr6wC1F",
  "key21": "QbDae7DQk2GsammLYFi9q4ktUuDRFsxJZ4SQgFiwFJttTNoWcNv73ve5RDCqeJefxJCz9yzcy5nhRBGySTysMfy",
  "key22": "3hM1dPiJGbjoeFz9uUfeNBLKbwZEw47R1oAjeAdHSBjqHtQERdPYb8ycHKmy4c26fiogLpbADBth7PYtGN3bZCG1",
  "key23": "dLsEKfNtSoqb2c7px8JGUzG8b5iQDYtKuM9VvUsD8z5UuuUEqLgww1iFEaFxKoaW5pNDzTcbmHckDU9ngvcDYrp",
  "key24": "2x2RQfteWxeW8duhcMQQw9it7aL1fuGAySG9x5yk9XCBcVx3pCvM9xQgkY3jaKemrDD5EtSmJH1VzVXXfBitRuzQ",
  "key25": "CjWk9VmkQAzAUMTzYNeqHr4TcKtcZPz82yWvaXz1r87jAgN47SxUtM9eYsGAu5SK1uhDR4VeN476At74LVHRiT6",
  "key26": "5YW3BK1bn9Nj7EsP3u8H1UoARorkE1DfiRrkwhNZjMP37rZuFT2BpvvDmC4AsvFEQKUbEHR7UHwHFsoVxmYV3fey",
  "key27": "3xPhLX5xhJ2ahXJmmvdcFGydoqFtfsEmmZFFTWsmYr1VMLiWDGqr7Np9X7oDu3Sy6BZZEMxYXoHo11TY8Na4tCrT",
  "key28": "5MDuyWGFSdvSYBQen4R2dU329dKkCgTkhdvDSSfm1qnsjnkFtv3PN8fxw8DCkVMYN1X2s3EtThbmHBfgB9Mtbzjn",
  "key29": "EFcSpVss1hXnpU7s1UuWpQJfopudRoeDtua6b7PQLXrrGVhdMg6kzi5boZvdvEMSMTw4jb7cCdcCYTn5ihzGXTS",
  "key30": "3WY2MR7DBbT1kbncn8By1kKXk4NEcuTTBjrCpkiNHVnSoGTsSZAZgbPAvQYxxVY2MPwRvUEQSVti77ismmL7cYbB",
  "key31": "eAvAqM8aXnvniFbJoDak8SDfTrCwm33iYpmFaFVXNKXuZrzFThizLYweaSd2cT1xXTB2wzXdphR5FntraEbGcrG"
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
