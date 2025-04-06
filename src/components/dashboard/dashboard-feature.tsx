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
    "dfLSwBZ9Zj2vgs82vU8YjmKQSuUGX28z1msA89f7YTJFVa4Fh6a5LZpYTnFAVPQK7vqXP4sjGrGeGAq7mHJ7iGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egt8m9THik31VWLKqT8mRSANj9Px3oC1qJrGVkW3s7Gs7YL2B226EMreRiJZUPUC3tggtEiFjFJxebMa4gCBTBn",
  "key1": "konPzUpCJGtmp58YYLy9roAARdFzgL78DinjAozqwu8SenBUNTeimDZP1a1D2E5JGrEuHkLtoikE1VEE79kjg9w",
  "key2": "3j9SNjFdPKRL3w3PYCZMA8YXQWv2hLcLYQx3jFtbm9Af6TCm8KBpeLbRWotVxDCtvoRbdUmfqLBza5nrtYKnKe8f",
  "key3": "p7LRYCtgY79iMpAA7xPse5qjpXCDzxDo4TsGjcisQgtqkRAY1hojVMenaQRHvks3tixBn13hzbHvAj8rrrptGKU",
  "key4": "3gJAdDxZwYrSfcC7jYMewPrjbvc7ZpFXnbsQReghd4gtKvFvUJHPx3qKeLoY7sZ7Kj3oT9kbAh5CeCPj6xEE4MXb",
  "key5": "3DRgFDkxLRSQUa7hn23UNpY9L2k78brZCWLpoD7rc5fNfiu8bPzGJp3PWCCrKWqrQhuJcLKLQfF49pqjfgYPxcRv",
  "key6": "42goEbZkwLFqUCem1ds5rUAYr6foRiG1cu2fHpF7dF2H6fk4C6yKVhNYEhUEDS8xggRLjiTW75wtG8aMcfkzFTrE",
  "key7": "28FXNScExy3Moo9XUkyCi3BAHywS3DcLzQMrhaPtcG1ND3JfVTe45F2MNY3H2UTWwLAAzRdzYdW2XRNHBh2qbHQP",
  "key8": "4yHGPjRuda7GnXdoFSg6Meu16CSL1yDZVrdnsh9yackZa4J25KdD7Vpst5aLHin98v2fR1WXYcAyerm3aNENJdh2",
  "key9": "4PatxdyBG74LqJrvvVCUFuwh94TEKSAUjdhDHa4Tj466At4iU4P9x2Svz7X5WjK1DvX5GtQvRP3hubc36WHJt4ae",
  "key10": "2enpdg5XhSSgygZRQffxbwhGLUWeRnchh1Ezh65GBdVMtbRQ3d1c2GA2CZipWLpCk4aL38RKBDYSrjaGNp4VhnRt",
  "key11": "2bPyE9Q76fYWWwr2mkzgJMmjAkhiAcDNZ9SF9cQPZWZhyDTScqojcYMH8dwCzTUrWCUE2Jbuk8vaTsmYFvjqBR2A",
  "key12": "4X1L3gNPu4TDud89yPkw59mrxMhYktaf2t8psbotMvEUzMuEEdv7UmDs28bptRPCA4eDaqbag8NGaDH5ncZtFW6F",
  "key13": "4QeEapmdCVmhT2tMFio9bHQEdy4opM4hfgAdjVTG17Gj13pjCi3A4XAzMSxPbyWae3qz23PmA7sZtL4Pwcs3dXqh",
  "key14": "48jBxwZhbxpCy5qvAJ5MTHa771ZiyzaQiLi2RNophUrsa7SNRpew1vWkzKHENuZWxWD4HdvbgTB5MfCH7RakQJe1",
  "key15": "hBD2EUzoP11Mt7ecuEXYCwqL6UvZHvNeEQE9NgwtUTHtbHg1bAXa4icwMnGfDGQ5ESkv1oBR1owAXazekvJc9B5",
  "key16": "5VAtYVRDzhs6uXuTFW5rwNwGC86RRjhoDjNadXyf2vCrPVYBhChpnEzEB3Df8VZpjJLB6f1SS4AzL7U58iyLoS6G",
  "key17": "53hDzJRmjzFWBzydDKhamb7ZeUEuDLjp6p8SLo8SJfGqw2BxMYZmXayYJHPnKv6v2mvQiUCYGdLGwFxDMoFPA3BK",
  "key18": "3ccSjnBPsSMEH3L4AHjPGDwhWWoFSpaXtpgHJP4STYytiNua9ucSGPFgKPcZhGNJ28aquv7d1B15DSvJiwSZB4WD",
  "key19": "4164LwV4qv9tsDgRYnCGtahRZUkhzrCmFXyYB9Fs2XN6QKpEXBqDBXbHZxwFooVfLbTPZ2j2vuBTRfo2vziSoJJA",
  "key20": "2bxRwZqnV1uuYnAgwEd2dSsV24LbzpcqaeWcvopTGsywMDncG1XCvVmN6p1ksvhZ2CtET5XGZGU58G9zNHFhYT1b",
  "key21": "3oSQLSXe9mwiLX17BPP5QnPSBF17ed3rY7JL3xyfSBZzdizSVWGKLQTGogbY18F4CEfibzbCNJgMwmesUH1XmBMH",
  "key22": "5d7D6Csqg81t4eb7WD742oYX33BAYA24JX9VUKudiQNzkYs5SFhto8GQRCtDgENh7xquhmTgNgTHCUtJhL7equBU",
  "key23": "5gH86NGqhVwQG7ErQbCwCGT9AvfoqbStWkFsFSPQAhTzSXowy7zvuhL3DPJeLdYjDT1ipVK2zto4E1FrwPEftGgJ",
  "key24": "3txjnYtuY2dnNPkuCbzq6BN311xQ3qkTxAWLYLt5RUhdWCB5j7bRiWUxRYfTjFpafCYpG4HPkkxkHNh5zqeRxSFa",
  "key25": "eUgdiX7UT4NYKLY4pv2jyiw9QW7LVD1CTmUuNbgXRk2KW3siEYtYkSPVGYnp7EoMePX9vngWj3WM19VgcGSEG77",
  "key26": "3WepkKW6JqC1WoKFh8234QZQDX3HN5s7XNrLQhrp8HC6hdiqVYemYTepsG75f3fTKQDJ3XN3QnLJxkQ45NLGhFmq",
  "key27": "453PZXxLKfAWdyzZBXWe5BzQM3PT4LRDQsF64SNcfPqtsxF5T5Mrds96n4HiD8WbDMjFJdYfMCoY9QVbX5cwUaVr",
  "key28": "GiqgUMvZ3i4MNRfVGABBVF7dnnNZscMzVPeK1wa5fqyJosFrxX3QseaYmsaFxRDCZ351FP6tuBBNDDVnxYdTDgY",
  "key29": "428URvxn1dEJnutt4HQiBNMqW6fXAdYuZJaGe6sVwb3eG6rqqXaQD4wUAKogPBWh3iHagqdxU3AviuSiH4zK75LU",
  "key30": "2hyQXYstRHKobJH6fnzfzjBUK3mbGnSkqLdmQqDqnt8pDqturnYxj1XpaBtfLw17X6GdajcNFcTjNWBXjHZQh1Bi",
  "key31": "29ahbZx9uqaLZZHHCkRSL75FDXBj5pQe6T1W1Q6wWiGM3FwXUS9ntDgUbZv7vn7xx2N6ryXaRyu13HvAsreV9Rwv",
  "key32": "5VuWc5ZHexaDAsAEnzK9o65BoR8RkTxcLF2h7Pdnu6KT6kBJtQUMiFyhEADY6WVfxTtUTDqEH2LsZ1TNi25p1qQG",
  "key33": "3SJKQ96Enw6pyvpFTvka99KDYJhiN2bdotpRGgtfZ74mkabj55TFrnPSV31J44AiVkkUNiuiggWJ7w6JLdqFPwLp",
  "key34": "5QJdKezdupYMLiuFjWoed7ZF7hjxg9Enaxw8qBGiek7Z3e7Tn9WkS9ZVS78w3VWQaBPSF9WKezfvFQ3czjsAQBqd",
  "key35": "5hRmLWVvBWr5fjh9xYANXoCS2jZZ4fZCY5vFZYgMmeCNLHQnDuAH7415RDAWSw8HGBi4wZPta5duRh5jcBqwfEUo",
  "key36": "4Zn4Dqh5fCGjgZNE3qKwVdLv5AoV2bxsHCevDMK22MRHwGxv11MX264UGAqScVyLAF1Pi27b2ucxZyCeor92E9Lw",
  "key37": "2e2J5SDp1ADFV6BQFfbjVgMzyu19bzoPzR735Vi6XAxHoPUZj599yAZMJRGpLK52DiE8cVBvCATds6Wm7bBxLhvi",
  "key38": "3xADUehUUUzcceodauP7BptqYMEb261f9kGnrjV5rVfWPiPgoJ2d8VgPHDKtQWF7PerjCUT1JY22J3NuzyyepCN6",
  "key39": "DS2WicSMzzgxr1r4fiGzDrpicH6KTBHPnQugZow262DE93xNrXw9KLPA6SSuVBXJUb6aRibRHYXrt3oC95oHJ8D"
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
