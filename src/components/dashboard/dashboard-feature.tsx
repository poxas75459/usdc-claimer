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
    "ttLmM6KJ7j6d5nJkaZgHKmvUEcAJzRSCvRMb8xfx4oJH6PRYGFRSgg9U9RYFDK7v2XEPTVgTf4z92uaaNnje3Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nP9TpQ2Tam2rtEPrrpPq3fdg3bqvPNiGJC3VLBKrGvfALTSwvmjj85kMgtBkRYsBBeJcUmP4dSy9iQWatfBxo8J",
  "key1": "3PtDHzfg4dBQooJiPQ9fy1LzWXzaVt8EdpJwctCMjKtmCoQpukijPx9vBab689JpmaL8toNYkgcnC48qTDRsVViy",
  "key2": "2xpb7f5utmTKjBGu3ShJK17jNkzmrxykQhh4GtcHWApP5MbeZGG8oTWX3hg5cfzEUYmkVCXSBFK7JqrGuNvjP8yr",
  "key3": "mC3DNMzpsQiQhzjNC3wgQjyLXXLDmKA7LipPvxdu1XoqniHMH7GeUDC9Lk5g8FHvnSRjrmtw29ADZPADyMTdKof",
  "key4": "266vgFPRpykfMR1kqGsAQiqoSDzjtUsdsKqk9D2Lgxj1V4Np4CQmRp5JDGC9r1LhoUngebvmKVwaHSNNCKHuokBJ",
  "key5": "3WR8HHLSGbVRquJYyF8CZWmJJvWm7XskTXhKCFbyeSHoMAE6UESVnSzAmAp5tKkDRRg8vSbLqGR4uG1d92MmZcSE",
  "key6": "4NvdzWwWy8aiu2J1DT2dC3CgPX1cCwTUhcnS3f3ne2qceUewDEmTkD6rpGCzgB39wLJSNbcuPBqAyP56NSezwvHG",
  "key7": "Yxj4aG1veKfMnCvfn51AehPm56vMifs6hVC9ZDCx4GSdiNRuiHctecCv11ogkVNZ8hmkbhndPR6xBYmAM2sczWu",
  "key8": "2u3V5hqY2gHt85niSp4mn3Dzo9NfDwXM5sgiYHMTXGQv5dgMC5968KCXbtbQb9Q3LwEGPfQw7wPmCKUjN3Hxwi6J",
  "key9": "3nhj8N7QQQUqvGx4ReHaebmcSDEzeg3Uf3zaUio32dN3i7xJW1WJxNYmuLfKRPGhs8fQoXtuLH7jJA3rezsaZkCY",
  "key10": "3EjY8b8tVhm2q7ToabReJQ966i4QeF1hRAth4v7KEuRLf3BSJap7h9diUVDRZCH2bk9VQv9p8ZPiShakUQGwdS9n",
  "key11": "3BeUFRKewqxeDF2kXi7b21jKuyugKPAkioaGFkf3zCVwv5NfpQ9Rdg1TW4XrH6a4S4N2ZuThmC5zc4EVZetn2qeW",
  "key12": "WGVt4WRkEqnoAwDMJ6C9LrvDtK33pseRqWaxN9XHwdhWe1ikL9gRsTVtBAqqQrSU8UYckbVixWvPrx8S1qooTEi",
  "key13": "5N9HBMmrbQUbcZ8YNAJrEJKzCeTfBvAjQfF8iC2bsHWejXLaupt9EStSs9nyrG7sW34pJXLA7ZPGeSNv9jxjGpAk",
  "key14": "2rhGTX7QTPj2x5Tcus3Yt5eHS3Vf9LtqDZpwGuSyW4NzDVVnB6nC7Pn1ooktUb39rzcxDwJCuUZXpXacesz5b2cp",
  "key15": "rYaaSVVwp1HSzA7wcNdQQ5CNNUVTaPcwTPGM5MXKmmdcMoHNUxzwci4fMb52CDbEwtLvwrKPfYFvyjEFPD9ktFd",
  "key16": "3VNutd9vgeSr6mhEenWchWVG1ZtdC6HAvqRiFkPLrSJSvQjbh5My95s84j46tuncdHjNMtELa1wxCdEPpTpp7K9Y",
  "key17": "4yRDReU9SUJ77UujxxCsk7mwawHRkZus79vwqXvTm3WRq5Jq3iTvUKFH9SZD6gQmhxAk6bQeto6fh3smycdyTumR",
  "key18": "uYHFnteJ2Yi6E4qREkB1uGX2mcbxa8D65aGiwUHe6GYoxzqeMXHzPoh97SUpSv29UFkkujrCXGzJ7yJ7MhgANZj",
  "key19": "4RyvsuSv8LifnhnvegDggzZCLZabLEvPGpm7CP2XfwxQJnvq2vctVBvyGGVoyw6yKHXcBhiz3U3uWAYTD4Nu8bjB",
  "key20": "5fGw3gcE8bcmNjri9qVXvv7tcsN5Vsbu44z97nwyXbVHKMvpNR5dvBgDnm3aWFDEUyHBFobPiKmkNc5w3BfFsVPd",
  "key21": "4xcy4ePrgtbF8HXog68S177sDyy9i5iMaCe1BMDpVWDL5iLZQGjYE5NaFSzLz4BKuyeqpapE9DhTYtUmEhuCbu8G",
  "key22": "5EEE19wrrVpmjqiYpBRXbCDibXfmKieFx6WzWMAHqVSmVUMsRTqbZZKwhSkp4aXN3RZBjkhYNHCC25Y6id7EEmTJ",
  "key23": "3L89bnSpM8ET5uYKZwnJ7BctCE2vgPtM4vx14yvYEfXT2W64iYq4isojZQskuDNkhqupnkXMoQzEuK9JRKU1moQk",
  "key24": "3XQY1wa5xsempWD2chPDqnG6KwjYjP25pAE3xiqgBGrjoKxL7i73p9XpH8gYVVYaAjCHAGa1myrNMZ2hyLBMmEqW",
  "key25": "273voCVe3teojRyGKZV77G1rAdSAwKXBnsQvXrxNvTf3spEsMHyqzuBj1YLkPWyoCwyrhY3sQB6zQkEYyoL9icXv",
  "key26": "64Z4FbdS9Zd4sswwbWz7fXQ1usY4MZxxtqAJJCLGYv2reUvpuquoNQsdJ4VmzknaZb4SJ7jHkbs55iomKa6YX8w4",
  "key27": "4JW5RH8zubfULkMvEjR6pdzyU7jpZ9vKeASfyvjgmMVJK2vEmGmC4bZ1syiUQVXJpb8rqZFrLTQ3iByPy3egsoBq",
  "key28": "2gFN24E6zwPbFdg1JiwL8h5UGbyMBsrnWv5sDRvQiWPVDk5iyWN6q1QpmFxDVBvTHfdUnyrokkaPEiaSteATdHnV",
  "key29": "HzL9j5iUg8i2a7Uo8E63k7uQ64vLXjJRMYVbxcL373gRXYroneDLGXAeEtAD1iLau7awZkjEFaxmrvNgRaaNK3Z",
  "key30": "3GeUzspMfiVYXdZYEjt3auXEgF8q63q7Q8hZZJRCRWBdaeTKGKxt1U5uqaekQqJ5UiaV3NSunjhs3hG6VKDFdken",
  "key31": "62qfaQ6tnEqkd3HTmdjS1fxuVbkxrfZ4BmNSyMTX9G1e5AB5ErNWdci3nq96dtTuGyVRiymxT1LvP3DLnsKUoLDp",
  "key32": "2iLAc77xGemefb9f2uKw3FCJ2Ja8Bpuuskf1Nqjfy6opouBM19xzoxuR1sAB8CWZEhFvYncH7L2RWRnA8Y153yc4",
  "key33": "3q1K6PY666xkdNPbRFbS4Me2auVYEZC4dNxUBVhFCh9fukKbNfRJfPBQe5jEjKHymHVU5P5oNduVxK1TvCqYc7AZ",
  "key34": "5WxaaWKyZb7HGCBrB6WNepFsmLjq7jYySHi24Cqwg6wjwPJGvpAoRoycemTo4gHEPQp3W99nRJi2tdE17SwS4qMg",
  "key35": "2BiEqX5fz7aL4rysN6uCu2tLMeEVb8aY8xqVMex1fbpJGG1VTDg9s4MqgewpPQEDbddTfWVREE1kWQzW1aTXwqsc",
  "key36": "4GMgpjhAWQCAmGsgEg2fcxf3tYAXTTsJXQan5iaEhqBMkEiXtxaWxMQsYEW9CB3DPnRr7UMP39pusssaeeh2cbzZ",
  "key37": "5apmmhhEJGoDA9H6fCXnG4bh47pvcHxSKgERoXfyWSeVBhpn8Han6QitNPXE5nFYqny9xdreTr6xTUzQGPSxACQP",
  "key38": "2WX94RpcKDi3W2oZ2RungxfLiToAa9fkZhSk2sdiNzz1qgxFgPLCq6pQ21i4TznwZw2RSZqZpR8mUipsyGPb1Ac",
  "key39": "3SMGEWtASSJe9ULKndwHAMLKBnrCo2x3Pha1UWQCJQffn3Uumf5mBTzkUWwx4EEKPMVznDQS3Tht2W3s5wqqZxwZ",
  "key40": "2FiW1vnKC7wcPnkGH6v7fwTjNsFg5XFN2SPjizbBj8RQvGgCBKUWd76boytWYHSkwC1tB4RGUbvV8AdB1Exo8mRi",
  "key41": "3NsdK75bzC9DCtRjn65mo3xaiDhVrxTexFByGhTnpitKMhYcNgbKBMZfrm6CGJpw8z78j65gcgsdaRyKHCqdY9dF"
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
