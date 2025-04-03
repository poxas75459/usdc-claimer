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
    "2wtFrKSmQ2cuexKiEen2bFWPvtZtP7g2oYURhNo51xk1KZqGgEf7s3doKkpYsSnaDDe4XK5HEeaR6gXwoUprpoTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDTeY2XQq8WK71CmcsDxDL9Nciihymo2PcFMdZjEWgxwv8rc2WoxRoGSGCjPQui6ErJmbqMkNDmh6ckYtcuwymM",
  "key1": "56AWdxoxRdBtqz8wSyuHE4iprJQXcJfdtnpUhFn5wMyntkTKRaEjUgCMT4uvTTjVrypoqR9WY7MUbDGgSeCAMDAJ",
  "key2": "4oL5BDKqLTwE8ov9iZq26uZVZnCmgPmWnNzk6ctzVyojgL8ooDje27ke4T1y6HC3awMcmB35nTKUttSEJawpxo68",
  "key3": "5Ws6rwTUat7paRwVD82wHP2BMi2AkTXbGDEcraEU9V5Lm4gZ5bLRo7ejd4PSfMFjL2TsPZ2a3ZTjJ5RrVK1Y3Lkh",
  "key4": "pbm8g9bc2rfiqonP6qboEE7BRDPAJPut4u61HSxFSzTEvv5HCSj2tPsLiJiFDrJK4umUcUb5AJqHHwnGVUpNz1q",
  "key5": "3aJ42SfCJ9hVVR4Qg3yHxor5BHnAQyKQEtaSawDRGxAAeEGzU5dEkdnQcZ2Jk6QNyHYMQy3QSbCTVhist8n6HoT5",
  "key6": "44nXoVvbo4RDfWzCP2iAZbrJhqPcgB7p8D9epvmMwCAsS2VNbcBT3i6DAUG5ab4QQW5PBxzNj58jDAWg7v63eBe8",
  "key7": "3tmc7ymdXN9yt2pjrWEi6VmnRRtRBNu9Y87RCiGfM5hZcT3dESZrbNi11USTTiQ6YFLEqoY3XyQfg7Yhxpw3kQfb",
  "key8": "481kvBh3cgpeWPWH3UwDRc59kJXUDho85WcQbRZ6hyz97ez6jZidP4bnrm3FhEXX5kNvmtBK1LZ3rEo2imoFtFf9",
  "key9": "33TBvQC3izLZkFhy84Kr6jaUgXD4j4eibn3EyvdUqCAWE2qHroMqVN1whv9socy49qZR6wRPurGHCywxpYGGAEGm",
  "key10": "2m8ho8vhL7y8MVKbM7GsCW5cKf44UCqZ4t2Xxk3DPyCnHoJWXy18ue3r9T4XvbHJmuJaiRMKM4kt8cdtPzMkkQvj",
  "key11": "3NJzLZZNvkgJ6xAAqdtHzfvonTgz4r4tctFz8ydPxwCzHZUUs524NHpV6ejb5qzUMaN3bbEWxvziAKCznvpkaeqC",
  "key12": "4EZSNHWhi5vtxskXeC38pHmAFWJQFE1C3upKAiQY5VnSuVD7PJe1Ge8QyGhBiE2xUmLHt3pVpzxmrqvR9TvUBhmT",
  "key13": "59LsRePgkT875rDLZZnGAFh3fCaKkC4cCuz6K44EVVz2CZzXH83aMDpfv15NkqRewsLTgQqdvb2wNkqKxJB768iU",
  "key14": "2wgqiBRoPr2jQ5jteGMaAPTBzqNgX3xan4bE5fmdHubSQ3qJ19MpoRqBB3cAvSr1jaGcWxEqWnmqh6675a6Sr9vb",
  "key15": "4ZDjBYqZuDxBxjvnREMLzD44ohsDg6MzJgVyVDdxBoZ1iAcZbF6gFZ5ni2f4TN1UrEQ3mk7vYE6x27ZPBtk5Bp3Z",
  "key16": "581Dmt3gy99Qg2pm6XhU2nYeH1kTzhzWdPajTfnZJag8fsZ1ugUrBHWNYWkBJUYbxtbnabX5r5QzsvCxxjVCUadP",
  "key17": "4UJEeH1mVT9E3nhzJZiHwAFCwNEFDr2LyxpvJ5iLjMmNBUL93N4PhADSTvRBsKqqtodTzA4ZC3FS3BDtzAJ8H7x9",
  "key18": "5Xe66fLwmkWwQh2SYMzJdc3TpnnpdDWUJ5fP3zSZMeHb7aCefqSu3X2yGbxBCrxytQcPPoX4zVAK1eH5h7Qcfh9K",
  "key19": "2yvTfmjCyk7iRyEpEDtR3oRTFRbkGNZEg6erEXKvp4wGTGMcxZ3eVjUi9QmTgE6CP6WrLtoMbCWhDPGaxXFpztyW",
  "key20": "39NPaJ66QZ16uE6HziQ9pKcTL2iey2dFZJxWNR6whhsU97x3zjiuToi6eHpxP2JXvBmqrSxP7hydb5LCgJdpUQeA",
  "key21": "5untGdTVwMmFzD5DRb2Q5n2geX5e8xgnSMVsNY3UFsVRXunxKpDzJ7zDv1FeDd6Ck14GMhTiXrTBV8ioeBbGPXUz",
  "key22": "CHYNRoEFuKhwPmSyvsfTR2vb9yxLMKv5thNSn1dsXkCzn58VAiW4Uf1hivoxBrBTcpCTQvuwJC6sp5ifbZCCSa5",
  "key23": "2oGo8gLBdotkP79zA8dPzdegu1UuByeJ9ozBoayMDVct7A9ZVbXomtZKFLLcwTthmnX8No5mWKuUz2w1XKgtyVhw",
  "key24": "2zhJefr8QpEjEx4EWTivJgonNRypVymSyMbjy5fY6EwnY1BxXadAJJXwcJDmYZaBm1wa5uwprQk2szT89ehrNFHG",
  "key25": "3cDSbEKaDnSs4To7DRothpLLM9TozpJEkJ5dwbdaNKfP8x7htZ2G5mKFHruuuKoePN7gSjiuxFU3Gv9886zCk6Hg",
  "key26": "4v1GQCjguVdWuFYFxn7HzF1K6swEEX3g6hyu4rX1H1cTtnzzdzzHkHXiVB8C9fCpwTGfRYktfrdCucdHtGyGCX7X",
  "key27": "SnH8NaU6qb1hyG1L1HoNeK46fUf4TQME7g8SyrzAnY3sGTzX6nGFMR3YPbdqm4LBiVKBTocWLeE6kBzYPif1nxJ",
  "key28": "33mVu2yjycG32mLzBE9hB3mkFWtgmNVAo2QEvFmAowt7C8VPnmxrva1JDgs4BFDhuf4EArCaWbEYHkivdxZ8mQmm",
  "key29": "4FzyAU9EAkTi6DgARcfWTwfaLsdUMC97AbiGaWc2U8z3L1Gih72EgnJgjsFHT25p9ct5EGHtRndduvKbSrwsHnro",
  "key30": "2SSb3xCrnEgmyVCd51BRoaBaRRYGMZBDrVMZXh4VQYYPhMDenKn1L47zeNKvEptcCFHYJtvMtp66NHfNwAZLJffQ"
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
