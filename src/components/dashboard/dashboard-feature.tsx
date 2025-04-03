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
    "3ZzmnAAP6BGTqXTNcPgTu9PjvPh7jezbPbmndGXqujd7eKyqbSdpRhRvm5pkgJdfxD3FB2dRTrjdbmbCUX539wmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNgmpY4JjyNr7zE4YY8bcpcq2Y12xtJiBnTqwKYX5cppYhNJnrmsKWpzo1JpZTqmYoyefgC78gEeniNXyRhNbnG",
  "key1": "3mXoNtFuFnWknx4djLFGWbCqJ4LtZB4ZKH7FPdgGrtJoS7ogKjVX3xb9fFEhKTiDJtQSSrJfVa1T3k2WwV4sJGiA",
  "key2": "3Bc78eLixtdMKrG9cZgq2qtc6WMVb8PixZ3SGFqqUTTGJijMvGKaeRZxHVgiMZspXo6dKBk2C9gNCyU4CWuM5eoG",
  "key3": "2CpNuJbW2njKQX7G6dkyP2oKVPxpfSKH68Tc2Q2n7j5snS6UjwhgrcDrCYJnUst2h6PSiZzo5R6nQJAyRPYhkLpN",
  "key4": "5VRGHsaf6bHWFth8Y4UhByVFyjTGTntWVcTWXJpKQt4cGhqU2hMWPehgH1KKTZ3epxU8prMZceScdLvJxG1fZf2S",
  "key5": "66e522nwKuttQyPPf2A9BsgWfbmSoSpwy7D7sv9N9n8JLUHaGgdzAqH91X4epkZD7p4ZaMffxDMwji3ddLFnm6mc",
  "key6": "5m2XbyH7UugbyeE7qTvQQsL297EbHyG1gxdVbQT7KjzW8eJfLJG5nWM5j7vZRibQTpZdSELZcSApNDvaBWixYcaT",
  "key7": "2SgddHixhJmidfNtDxEL3gbS7WzmQ7X64fy7dVMMMmKDcrKFUqckYkCxu4LCdtx5CSaE7Y2PVmAjkCuLXqx41jXT",
  "key8": "5k3PUMWRVKFnrxXBVe5sDWaSqQ78aL64NrgqphqAPy1oaV48bFJCv6jhmG7nDUSTpTj7xAZdHinircEGPdZK8sSd",
  "key9": "4AzBxq7hT3YUFrKz8FFLNkmecxxDu4mQKqLyTGSXVA3BnTnu23S27dK6sgR3QN5dXVwmdGUYYQg13U22QGQWnj1J",
  "key10": "3LnDHc7eUpi9LMnFHE77zqhqv5vPVaSxCHvmyw5EURUaoR2CW2aEcD4nhdwuC4ACLe6jTTYpciwoxFU5FvJrosbt",
  "key11": "3S1qr6XGuuyUqUTKHDvH8saJcEgmkfP68ZvkPHEcorNkEQCKs73fgPNSCowgxZKu8LnsLViBzMiAvvDQLKxFSYs7",
  "key12": "am6wGHsgpL8Cy3Voh7yFBu7ZWXW6Co4Nm6xhQpkV6QaN9hhdNwub5L13uiCm1H8AYX4u2vsgsmfqJ1QfxVTTZh4",
  "key13": "27Mv3n49C8WBPZdiXhW1dNhtzxUev9XKJur41946gHxaQsj9FX1DcxeuYN4rie2jgggbcQsBtaEve2vg5MCdrfs7",
  "key14": "3be7BCAzYwzPDTn1iXSUPbqrm8hM9mcBHKcHbpw223RkBL4vnH5CVktbBwLn43gVbEMb492zwcKvDgJLBKXYrTyD",
  "key15": "2BNW6XUMDrkUo1TpUEhdEYS2k3rJyGzQWcTVMfkwHV4qRLciaPhKyiVLMyx3onB3DLTxtmg5ru2xvAnc9e4i8Ggo",
  "key16": "urKxXsp9SBv2qhfcBiKkdJoenE691wt84oqGu3FiM1EvSYNQcsWZd25XimKX1EcHSzVCmudPEibX6eZui9nbi2y",
  "key17": "5JSrcfQQfG3Z2Nfe7rBWQaFftfDGDwQ3iCef9PxjdDYn7YVdgQuEb6QUDH8CSZbwARNwH5wXmBenZrUyfAicVW63",
  "key18": "4fjzrftLG7myDZnjXfqf2U569g2jt4KaT8UMMGnzgPxgKhAfE9BoDE9XfgEjHpbY8tkCWDzyMkvrZ892L8VSoFiz",
  "key19": "4TtdMEBmfoN7nf6e6ezvmK4zJMiDVLhZx9kBSL8JvU5z4Yg6JLA5qa9z1tQNkTEFKeaKNHsbQXZz7Tb7fLpVx5cY",
  "key20": "5Fa5JwZjWwwTmqbHpCGaEPe3vx2xWmfim1EodqfW6GpD19E3kfZjWwAfoErspFKagSxhpWH5FRfnw9NcnoPuvSiC",
  "key21": "5QVHx2PLKqxRCMHcC9v6mGG75nMr7EAFgdZ7kR4GQNKb3DskaecvaGYsWGK2rUHfY3Gvzd9hJYPrzQhhKiT3UpKv",
  "key22": "3CnUTuXNUHJeUhmP7Dwf5iPxpfMPK7ytkRcmFjfqRdg5AggUmHN4rw92uL66c6XKkSc7nTB6AshYEsJrrr6cPzW9",
  "key23": "3fsBE4Nuvv5YZvpUVyafNbkNDBLqhyZSDeRU2MegFAW88T27z6sHmZHnGyHpBrEYtwCWGn1AEWruisYtirpctAup",
  "key24": "5GGW7EB2yCQR8pKZDvPkN5hzfYrjtfHxXR7xpe1WioLmNAXD8uVVbNhUBXLw2RNrfbHJgobUR2CPJMxfkHPFtSJm",
  "key25": "3nezdxW1fchhW5Ubsd4diYCS4eurTQdsLbMXJ3k4HUFyGFGExxyZPbHfdkgZPMBLtiQbjvPeZQqGTDHaV6tSbJuc",
  "key26": "41zMpzFuxQY34qkAfJ9tWfz25pELrikDF5hFuBoBkc21pvKcK52M68UVAyMwLTWzo26pf9j7MgAZJ3XKxnqHG1tt",
  "key27": "576ijZPBeYgHdQ78Ffp5jyVjTd7CxWzhp9oV1DVBmonpm4yi3QLETwSWRDifwPLs7bpm3dh6qBd4rjxdmmWE8yoJ",
  "key28": "3V6KRvM3Wwv1x7FRQsbFwCBxHAzDC8CMXBg1CQo3GG4vYqizrfHAAvutHBhmQUiTBTm2MDbxCyqqxzjXEA7DaN81",
  "key29": "4Bt7vcfi42SgLG6Tt1xoKuxoYbFLC1wjZdeit1x9m9pf5cQrTVLf6LDqwoUTA5mcvA2pNtH3WvZSm7pcbB8hkDDz",
  "key30": "5fmEvPNdL7hWpUWfEGQYSFdJLazte6kTUpYCUA3Gxgq5FBmNySJAvK3KR4ymwFf5neybuVFaVUsSQqob7oZuWyTz",
  "key31": "3AxRdumSZAAhrX5KBsbLf2PSwHx3fCYT9BqaV2svb9AwpDgQsjuyxoPTL4qM2AN2wKcfCMBrxfbdyjLMb2QZTdQw",
  "key32": "5Trw3Ww7WXuMw9kX7MKMsaiC1nUWZoS1ewgsK2iA4iSxr69GcDNqbRx7MkmEKAP3qa9436mwrdrHUekvmUPyZnWH",
  "key33": "QxgCZa3URUax787exiSkKUa7Yesb8Z5aqo33E9sP8NRwUfqvVW1gHC8qmUKYeXyvRnJAit22syRAteUBeoDoh7Z",
  "key34": "5JFhqYudgs9ayLSE2WkPWunLWkJMMtc9vR25QusVcGQnxfqgUC55aaX4jF53xzkCMmqdVegdBiQHoNVE7JES3xvZ",
  "key35": "5LPgJ9WJNfEMR2Fy5B9YKayDsZMLtwfvHK2iALJ5knHxenzUzDByhs3UJKJYHkqjcokj95HAuejrEeRyS1Pr1CLW",
  "key36": "2t8Rx7nGTVg2hQLxPRFTCLEnCNTVQdQaHYYUH1LkbK8Bb31rYE81Zm2s8T7rrznkmYhD73KMvBH3jJDtxW96mHLq",
  "key37": "4P3fAgu3h5qtM8qZ2xwmV83mG5QZgY1iMpT8RiAYFC44SS3dS4rrj6D5P9iTmszR1LVjHWLNM6bCCFa5jYgiFfPM",
  "key38": "25UXzGdpprspLZc9QCJMmGSJgLzPXzH6mCE97K9q2XnAeQpANGFGkPGJcCBAUfuS5ZTkcKoRNNYkLxNt58h4nmKu",
  "key39": "2XuWNicjcTdEBSmvYZFzDWhaHSsEZVWswAJocGGbpRhHoomrAsBNNupUbvccnVWv9BFoXPbuBfzccqekXtLRPxdK",
  "key40": "4WxEaB6uqiAo5bZJnQcK8c5Psysd3ne7FMetNDJWy9AXG6XqFcQahbTD5zBbp1Py9ktKfk4TU6eQLaB3kDkoufKw",
  "key41": "3GSF2QbohwfbFfin15aw2kxuvd6rBrGKs7vB3uMh7q2zXno4hV4RLxevoP8kZvZYud7cHnM5bN2VzHHKqdoADAng",
  "key42": "22tXxGEdGYHMKBJiFRkcJboitChPYJb59iMPjrt7sLJr7Sp48EPwBuTsqiQ2yFVEBcNb1qToRFYkXqR53JCof6JT",
  "key43": "5Rv4vyKdfiyGYCBDtngrvpn1KPQQoSptRxuf2BLbBN4P59CjA684A3i4rUQQHXzSuaVtKNPZbERmTYSCCoaG8NNS",
  "key44": "4cSkEMokSx9PMRxDoF23DgxD2XCVc2hzs4YBDRMmdw3FDwBoNpZ2TJdGf61jSBKr6qYKuNTfZYbYaxJTRDtQPcoZ",
  "key45": "2RA7K4V4Q4zNT5qwtFjU24YQJLznCid5eggnDiB1StLNAH4NCaCju3vMX9gw1ELGTuWEi9t7L2Rg8LYtbw33VU9Q",
  "key46": "34mHFkw7vvc1rURyTbEKyT66NoVaj9EwGa1nRKJ37i5ZehXSq4Fu4NGGx1Zr71qST4hc8svx4aX999KEHFJVy6tq",
  "key47": "3nkGakF8rXt8sDX4yB2mW3zMwuqPLxZ6DBs9bdDYhnDPToVVaVxR2JMDcq2pqLoEVJayampikuTvnyF3MuGy9zjy",
  "key48": "5EedTtF7VunNRjkWezArTeQbjPSMFk2mF12ZcCRRVMeUj3a6Zys3KYvnbsYbQFoof1g2Tu8aLg6ozsfTayUEQi6E"
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
