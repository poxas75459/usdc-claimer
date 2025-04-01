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
    "4kszMk4Dv8fbkySXtoMA7Kxcbe7p8gv9AaTW7LdghhQJk4T1EBDqg9Bf1MfYSMDFV6GZ63bHQsKGo9GkMUhz1osa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5bvVZC7WYR8a39BxFEgt8qwo7vTU3AuhgepUk7x496BMxRr5eNhNECRAS6yPStedCJjm8E4NX8puvXdjbjWyLM",
  "key1": "3FSTprpPQmGUZNjP2api963JMWnBkNns94HCnhQZsYVpUEgr7bYa4apregP7pkmS2puoPyBfKUJtZan8ohfvLCwQ",
  "key2": "2gcpoTx5iA5ZSDnAJVwqBaVuGLtWbqjzGhw4tpbNmBCjKYy8ymShC2gVW4g9MdcVQR1LiFT8HCDU81cEYTFB51Vj",
  "key3": "5U1XzgA2mq5HmG3v7TN4fi37ofWd34UDUNGc9FMjwtwqgaNseGZbw92Benu37VtRKPCPWyzctyBwqhphoQVT9E3Z",
  "key4": "ixv6LgbjV81KSmqqo4ct8JpjNUkxCzFZSD9y5hrBas8ErzenovjNrpM51XzToXYYsK4sSFU5ibRFP1n6ySbkMEc",
  "key5": "29ZUrNpNrG1DbuEQwwipSFqEmUXrV88v9aS3y6422cgYTy5pCHJgJGu2ATrQFBpw934Q1QDqB8A8QDLTJfnYo3tc",
  "key6": "5JTFvcQwbC7bjywGkAKSLumTcjPbkqbrj6GVwW42wYiYeD7kzfHoebkBpqS6RGdQSyGZU3Q9qhtHu7Y8StSS2GZz",
  "key7": "29fxupWVmX9Unw1gJUSjovhQtNie9hwMUSaizbpXGJjQwyyMMk7yr5SpDWvdH468fW4rrSYpxG1RG4LEpydjsxoP",
  "key8": "Hap5DmtiyoAs68BpuS3jTP7TSe7VuvnsSy89gudPprsuCWiikhe3HT94Vey28sjNutawx3bPX7pxYss2k24Marf",
  "key9": "5gFZqyu8dJZLyh4EYk6zVNmfc5Au8u5K2DM3YH3roRSzN1ZFHark6jTrLTxLSXxxQRm4KLqHDzDn35BZCabgvEqo",
  "key10": "5MUNBky4D7NDHsrkSFkNDoTxVBaVhCYJKBVLpA1753rtwxe8QvaagUMDu7M9K3zV4H54ASmhbSpjErg1DRFx6kDE",
  "key11": "3LWBCsqfWPmrDVfqHPAtex3M9s4X4Q3aMkPmYqQSsQVhg651tDCrEG2TRmDkqKqdBfoRDmv85y42WF9byMghYpUB",
  "key12": "4KGTu4kJSppMecY3XcafdwcVCPsE8DXbwQrmsEZUVXPKRoUbg9Mo9y9paYNBZVNxMXcQpBcQocBzgoMeWTycCo2A",
  "key13": "2Lmh7jwu3PcRDvJanNaVsK9Hp4z4d91tbNTJxTNmZx245G8NYX2Kwg2ffhMRmzAHjz4gVF8tjVoZMrgG5QVezR9U",
  "key14": "3eNYLnEd6z43yiR6fGyBMkSMqADTBXGg3bWVjT7utHfzDiQDHgckLbxQG7Hj3KG7N2kUMdeF4fLi1uRam6E3GC3H",
  "key15": "42U5KienYzFjyfor2FEvvTSxw3DvZYV1jFqCou5MTEWrE7jPGMa37s1vP3ZpTDHhGZy41XHSB6qFbr1fF2sbbF6e",
  "key16": "4n7u3AMiyvMvcsTUzynF7rMgtJc7FZrcXaK5zRHuWCW9g2vMJN9apobMz95tJsX86QvxR2cxvAMV2dJ53hy9hGPf",
  "key17": "2iFNKQhKo5kcVTX3MiNjPJyJewVUeH2eDNwjtMHQ2cdZxrkbsnNah15B1yZSitYAP23jN8KzsjvahpvKzWYCF2vK",
  "key18": "EsfM9vwMQrKYii53j3kPv8CPEDbuoukhsbPFaPJ25DiBF7fN1UeXPRtAqw18ijEX1h4fdeGYaVpYtQc6N6oZWMS",
  "key19": "3WJgjS36mLJX3dqdBFqz3Z4MqDGHdbaNAgZt6zEuXUwzAX8yZfG6QTdTwpEh1GAnv4yTruPWTecMKHqB5kGh9JXx",
  "key20": "2gaMKF6AC69ALddPgrnS2hh8mYggRxhUHFL1F5DMaLkEZgycVGtH4TDab8UpiUVVWMKkWSRFr1sdf1FtU3kkwyaB",
  "key21": "4wpUYLyUA3zTJUjV5TnRjYNyP8g6jWLm4xLFnrjTfCAQjceUDyFGBKhm95HxhcMH8sQg9PA3HPz4mgA1cBPFydnx",
  "key22": "4vfMfSwFZ12ftqs2nZcMFNmNr5CPCzrNVjk2QWGhJ8PfJE7x8vgkjbFojT4yu9K6Ys89ZrzNfdRq8YWbS7J7yPSM",
  "key23": "2wgTwaYTo2N5DkLSnecsp7ZndREAmSF8RRi3BxJpx7gRx2ofHtRrY7j29imBnhEaoshoahdFCxpqKH2pBpBL8UHt",
  "key24": "5KJ7Ry6BMLaLCASx6EZGBNH1NjfVkgzbBogVnxSHT1v2PGtTwvz7zpfrG4XTk8RroMMkrCnpsLJM67uE1jyEYbNW",
  "key25": "22AtJMQBxdrYNgwpb1xEp2oKfKhZPkeZRXpCSvC1Fpfp31ytWmvgR98jzUmL7NzBbMZFstwqxzjWMYy2tPtqwxKA",
  "key26": "2A1vJuYeLnZetSbsWRZ2JwXcbNipuXNL3w4uqZaWtRSsucZQpeVGo9wiFJjXw4wdMLWSmUnsW24yzPsoMZecXULh",
  "key27": "2Qkb8QUwv2FUgHycWwAmVqotPMV1zF9c7zi6pJiiVmK8NvtwjUmVQEUKkRahMB2PKaKKknR7bfwRaChCASM3viiA",
  "key28": "4ouCoT4ETTUbdUjm94dkkXkFBXvvLa6MS8HQ4rpYVggPgU7yezQhJuwKR6nXsAi5jDuVbUjggPAu6jMXKiuLX8ie",
  "key29": "3UBHqVxVKpYN4ebJSxYJufb7d4ArGVTHP1X6SRsvWiATpMdS32yG2gmiPEEyh3ys4DCWRU5yYxRcv9ypLTCnCAeR",
  "key30": "4hxh9sUP9CJnMR74muHe84N2LGZA1Anj9oQ7erHo4pBHA86WnstXCRRS5YFAsotcS835AeTcGVwEAvtaGAjwDCzB",
  "key31": "5QZKvLCWD4M7T9aG8oxsmLXhryP9UMseTy2hFs3LrjZdjNYBUe37KPKykuoFyrFrnk84LhbTSEmv3CG5yJwchmqV",
  "key32": "2YXvxMkKZPLZ6VJgsexyMDDLVSUyjVpMREQ2XXBy2KeJXMCR7VhKjJFRMwWX6tomKu9GQxengSq69f9CMErDywUY",
  "key33": "2E8Ed32LRfj1BgSfVXmiA2qLEJDxomteTCAE7oZNCzthPNUW6QQqjAXneS5JYcG6jzWdVn6pss2yUrBfMwLP84iR",
  "key34": "gEMqE4cUnLhcqz1C8qL3J2aV4VRZ79wHjFo95WPLGJNBvJUsFa6ErNAAfgAL1kxNpeBpd32K5yjmQf5k2aQHx7f"
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
