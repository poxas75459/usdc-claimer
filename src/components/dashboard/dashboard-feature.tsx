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
    "2VZiXM6J7G4JmDRYCXZLX2RS7RHhjxrhJi79315m9JfJ1AAcqQuS3rz5worfYEbL3ota3odBn5YMPebdZdH9Y7qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuBHZrPhF3FYp11XUnA2DEK1PYdpFBa4JwyZQxcVQbYFL44fnFEVGEP9k9SRZfFi4bnHZqwc59pTbfbiky3gSqN",
  "key1": "63qy1DNFcfv7GxsE1cbSokjL7fy6n55PK55DxLiS5VoB5vj1BsbvARPTFRx7dcPheRuUwNMi1zRyehc9T4Z9Nd3n",
  "key2": "zoshgSowgQxsv1zCGKAmbhFh24iPi6QAgE5yJYYpmmSdV3mK1tCcXYmvfZoUppGC1ifyrtdJ5vXqRekALdwLikq",
  "key3": "3N2sKpXnoMzzyWgDy9hUHoyYGRiLbdLNYNGtnbJbyWEKXrroj9XPvPo7XSRGLuiMMLy5e3rfiU8cqrvAu9uTSXjS",
  "key4": "4T1cMXL3NuPPGrBwBz4i6KvbetSpaNDXfdthS26DvTFw3H2aCkNSoMibKXJ9j7og114MFbPziPawrwdXXrAxDsPU",
  "key5": "mbBLrSP3nRDPhrSmzpaNESr7kPd74t8LoS68uMTEDhUZUFL1pfsUNC8XFwK2nswL4dginRksBQH1VLpiKsLxJwF",
  "key6": "2hjKY3pteAHfL3n8DeKBGGZevs73sggd3uMk79Kqq3BdCd1HFKV2kkNHmWXVUmxqox1g8z9ftxgsp3V6iSBs4UR9",
  "key7": "226XZ7j9kfqUgN76XikMaKj7GMN1iy5PbMMaBR4oNNt3nPfVX4f6RkAYfkBj7NTjH5RZfnzfjh4kinwX2AX8FWbN",
  "key8": "5TGBbqBMbpyewKEUeAza9LB3wuU6AYtvxuqTH5BZ4rfxbFtEGVLw5MEEVruietAX6hYQbbNgznpAs9KkuW7soKQX",
  "key9": "XB2qEoHj2nttNxxUPWDaLdnpDvZ8BdgJFmtWo4T2cVywrZ8oXxy1bWJTXUDpwZPiRhWNbk1z9j8FgUpPjtvDQNx",
  "key10": "fHWKgrPQ6zCDW1Q4f48HSVqDLjNKt8hKiP7QYjSd3A6wkTbFNVRqkxoEQRheguaCeiMZuZxDip2Qsd9NXw5ahqb",
  "key11": "5pVuHmzynXUGzpQqae6VpehmUcAeK3RV7rpnR4KHtwZ7wpPCbVZqDRsmWF34ZGcRAhDSB1ogQht334agnBmWCq7g",
  "key12": "2J35uS9P8xRXaZH9rNobfYJyPDDByndWVi36Yc7LJN4Y1vvYHusip9P6rrnWPFQewiV2vySD8muxZBz6qvjpPp4K",
  "key13": "5DhdM1dX4NjfBcq2m8PcBRp6j73muuAGrmPanfQjbM8BLBqzg5eqEDe8EAVAp2fAVTkVckormQX7sftiNedW6wob",
  "key14": "51Gnz8M71Nc2JzSHGczkueht6djnjHmkK2AHdgHjHuDEi9ZV7bn7gCXXM2UFE6oPGHDZ3UL6F9JFRUArjHPPJCTz",
  "key15": "2ufsHXDN67gGVDjxmKeCDJwjj8MNdiez65Yv148wcLmLRbRNxMPeZ1C6oBvyRKh27k1EzrFTTSkHVKHrTLF311rz",
  "key16": "izvffYCcThe4AxKBSzzJqdNpQumd9RdFpdvk4WbHdZ3fxJvMSjywQ7KddhZyHwFq8f43bWw9fYLeYBrpYVW5xA5",
  "key17": "4GARX5Kz6sYTpCirFTcg7Pqpd6P2iqUSN1NNu3MroMUeReUkJs2s35dorATWK8aaf24MVMy1DuS7pNDMjan3NeXa",
  "key18": "4epkwskE6L7N2Hh3eXHCkvh7jiR3yycwD41TAjYU7fLP2BaxM37hCJQuuQS3L2mHeML5nS1hqK9E5yidiE7ox4V6",
  "key19": "3jaKdVVnbUuF3S83ndXteTrcMephFCbrMZcBM6qMZaKwkinWBHdT4YWUDRUQ1rnm5nygnAsvC4o9eJKtK2nYLYS6",
  "key20": "35exXZYPZbFUGChynojDtdRAVHCQcTW4jrFSFy2SZfUJBZvsvQX6hBFnqM5JyQwaGB15wRUH6fbUXzEFgo3Vara1",
  "key21": "2m2pzLPje3wnj5fJYHFbRgjuSHhpUQkZ6yDWGvZKB4ZBw1EaYto1vm9Zm6mtyBc7kXjbdaVrESwt6xcNjhtVJUu9",
  "key22": "2BX8odVe83MAwxe4GoYk6dV4ZzUhcfGUage3hyqtKUr1gCuEG4gTiJckfAFJAZgf2v3kuAjBvVRuvx15fheBEU6M",
  "key23": "KLTBFjCUEMJ6HFWJ9EKpg2hBpiwtVKodAcHdB4gVfRPwmYf5yqWgAw5PE4LW44RbeHoJaMUCXaB7xCrHK2AAeC3",
  "key24": "5ARHTyX3Q5qcKVQsJ3eueXEKdgBSLmFht6pLo68YGBWtx8W47KXkTYb9DWmUbGNjMsPRtHs5YdiTBENwwBJjSjq2",
  "key25": "4UpjUfYyxpj3KKkWktUozPXbRkc7LcyuT5x5sfrqHRsGC8c1qgd5o1XM3RMuVgHE22SYWzpWrWYpzXYw2Fq4J5Zu",
  "key26": "5kpE8LQjMBgTTu9cjMe79crKx8RZXrzZyY2gwohGUvt93TBiuFGoBbGSN8Vs32WxdZ2u1mY7nRsKV2qGWQk9wvku",
  "key27": "JcAXekKg8w7UFcwxdxkBT4ptiT3nBQMyqfsDfybzGDJMuuuYopPQcmwCA839QjUaaMpga5vbT2TG5TSp8CHuBw7",
  "key28": "28NFAKakDkHmX8ekdVLPSKMRRwJb6RaAfZ2cK9XR453u3ueuxkck1rVxkTC4gEpTLtqgQvdLgQZ24uzjZ77JikwQ",
  "key29": "21dZAtnw9ppvM9ZGraetJCpY4MeZb9UUTimHCq9EVSduc7E9ArrzGubo9UmQChPwYmPUcHxVudVbTk4XBQDWbb5N",
  "key30": "2YXcDKLU1NgoKUfmJ8837mSj4Tmxz3mH3zVbcbNVfj7VXqhpHPJXUGCYoJ1YwxaddhT7qsTYQMsan7BXNJHwbd6C",
  "key31": "3WBBAf9ukJHgevDE7rp7cPPSbR82kLvTn5gyPuiVrJAxFyK3fJhRxEFunS7nr2exXPdhrBcVJberzVWvKREi5qu6",
  "key32": "4Tayxb4gVH5Yfbn2v7VNJ42pNhUNdUv5fpTWPAWrMZ6dYCG27kmn6p33ayK74PbuBhpxGs9LX4wkvfJqA45dXQ3t",
  "key33": "4PQGuHMZaoA9QMyJmbJ8nUxCLugFhQqfXT6wpumPrTk7Efj3EdHDaURcTLHTro9iKUgMzTfacAgACwciEWgHBnRe"
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
