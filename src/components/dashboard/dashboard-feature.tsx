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
    "4uALhSKHgcyh2e4uf5GKbsf3Ftz8BGvQ6qQgHB3oPuXqiVwZt7EMbfaha4ycEg3cdxKV9t32tYBFRWWJQcUgxK8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5ENo5kJwrB4Z4FFaZz9bp7ie2JnSYH6ESUuk7Rj5SAv4Ne7A4HGpM4NxYwF3W7oH7cTkfTDLbQWpPaTbRghoYm",
  "key1": "4WPYtGWaEweeG4MywXTgo2ZteyhrmLwLWEVPUC55kE68AGYQecuxTdhAazaJNgkJVc3dRcSPhDJALdayNWgadFt4",
  "key2": "3jewz3vFKmKsiRFmymCBM7qoFTUpqFHSHZpqBcZJ7WnuVuSrDgMonjj7iGrsaWHCkN22r2AZDY67MbVp58We52H1",
  "key3": "qrDphaioYnT1gho1NfdRf179m2sZuRqcUgSCPFwT3fHDRG9A8Au6LAkGwZCdCDTWPnfggGoL7wZsvbsmJjM257s",
  "key4": "KqrQA9AeAzRA5t6T5sPqvYSCMfVn8QFJBHEGqCJ86N1oKC5rWwByRCSBJc33L3FLdTyUe1PKwkUVScHGmKvft7D",
  "key5": "5o3VuJe8qN6hm9ScUZV1Qci7a1wo3jkVWGcDGVSsiN1iC3UwmJSdx89SX4LAH5xAzWd2CybXgiqwrW6TGTAvMcvf",
  "key6": "2LS2RhjrM4hxs9LN8Vn6LfrSTeEZ3hshEFiZwzYznNgG6oyHddZTiM3T57vnczFBZdV4AhKBaQN39JLZ3TmKsEna",
  "key7": "2P5K6oXsrvwA6KQxZYZueLkvoEjacvRJwaqkrteFoL6gApdGorZbASRTXogWoTM5G4zHmuhgrJiHzbC2qXhxRWt8",
  "key8": "1yXHfeWS2sntteHr49dsQAcRXEkrdYYe6zn8vw8VXAyTxYKtriqKnxmydjp56rdQESgsGBiwvyxswvEu7Z6kjoC",
  "key9": "Hhk7oGZPkWbxT679CvM3RCwrA2mYr2y2ztPUCEngJYVW6CpudXxwfGrxTBjUwXfSDjZQpNHrnAYcvnnfuFUa8dC",
  "key10": "3kMfbD3gUNiWbjQPADZdkUw4K8uaYvvPkMQ7PcTeFkYz8Wo28nVk576tPvhAxZqJQn8MEkqgy72Km5dgcCbBvKje",
  "key11": "56Rh4nAd1cGQkpPFSijR2iDjBT9Jyg231i4szrYib2eSpijYqa59nVbd5XhY7HYYKEEzi9RnnBzzmvP16vzHVZgX",
  "key12": "5Mapfsni5dkwyv9RGLP158bDvmZnieCGYvfJEpAfsTZghYM6oZPGAqQveg5StcoXpiHWW1U2U9YkY4sQhhiRXc9B",
  "key13": "5BGd5VtEtW5UbkvgwzRDxPnbCorTefhcJDNegBivzRGqojmejzK1YjHe6Urzmv26En9L9bQJsm4njJGeNhNR7wQP",
  "key14": "ckE1KH2xYkR3t2p2woVgu3CRVC3dDjp2BUgeYVTubeiSnLatZJJKx6yMasS7Z6bir2whQ2dxz2i4HUeSuweeJq9",
  "key15": "4xHVus31YhgWA5SParWGL5q878YmC63RsQW5g6beQACLCEbSdNmGggjCx2xq9CtMy6V8LohkrCLXtxDMQFwci3F5",
  "key16": "5sJfsGMTdbNWmRfPLVLVQ7PhoR1UPCRhxPK7YAfiiV64hErGbrYqfgRHkbzSv7DLJJaGquiyFDBbXMhJss6C2pL4",
  "key17": "2toywKSXmpXQBzGskcvGHKP6f5FoakecYTBxhD8ziJUT32Dn7JUJsKxj1uhpQMG9kJqLUmiZm8Y5ZUeyKxfxEhVS",
  "key18": "3tvmkKF74itXMdRuKk7xiQqSTSSqt3DWR5z2qBiwDhJRjM7yFRteAFYaHTBLPAEZHEkFy3xaFVcqJJv2oTiTu2Ft",
  "key19": "26ezFedJJoMFUdM4NSEZBD1EpzeqaZZxLaWfuj8F9j8itM6HZQJmK7CmTkaBjbkLb7cUmSyiACFHMz1g13WV4FwA",
  "key20": "nniJiazkhfzYVniohLPrBpcFyKaNdzGJcZY8HeQ6Lz5Nb3UWKjKigpwb1sEheRvkTbsCRXqra49yS6uKiP1bG9z",
  "key21": "9f53ZRKNuXgDNc3KQ9ELANJCM3dTkWzuVLAH5XhTHRMB4moi9hMAFF1GTt7HbsuPBh7uGQVDQUQKdKPo8VkkQkh",
  "key22": "fEcakDm4up5yCoyhVK9gmFXks5wDDmwETiR7f5Y9oVPfKvTM8bo2FQ43FBJNE8huzEbppLcaE25YWHjA5VkE8mj",
  "key23": "2L9LK4wGTqwWGLfqwtx4HPsmLcezxkAZUondqdsACjujs1xVdwFCvTbySUC5iupDxBpzcqRQrroya4BQrjbhjS4D",
  "key24": "C2NY2XcShndmAAXEVGfGZveAPaSvQTFdWsBW8CxX2FkJPrHwK76k71gLe1kuFV8tNjvqUhYbqJW9PxJALFGo95L",
  "key25": "51appAqADS9ytpyjJE4uVgHWYEzJWSRQZbwPemn6UbhtsEYkVn2U88SbdNG3XqzbxXELZezeyso3DrcpG5NbGU1P",
  "key26": "44hJUafYCxYsdiCyUDLb9LwwL53iUBmYjZuwMJGiQVkWr9wEE7v1Lx9ephW6yi6PAmGpcHhqQ6VCbTLdvT1hcQaB",
  "key27": "2cvSkU1HPY54x5UVi3kxr8QCzcQ2tyNBFAtetC9DihE9dzZWDLKzHN3jDPx8WYbbP188ZwtRhnoiEZrkwszCAkJS",
  "key28": "SSDZV5MSHaTfDxjCGaYwcWZsfiW696N9nRbanWtJ7zQk2zggaEEd88nxz2ZspVxXj1oJH5GKENmscuVP2fsJfpe",
  "key29": "5TFr41j1Feu5gNQxd3KAG2idUJVRVcRugYszrAm4uoHZANxKNhHUHrMmPENb7eY35JPqw8LvwcNzvVdo21h3XPv4",
  "key30": "5ZC42DJpRXaVW9vUuDdQhp1e48ctgYVeQ892ioNBEWWBMQCWeCgLtpCPvqX4fC56dtGwZ2i7UH6M4FFvZkpcXQg3",
  "key31": "4rU43gGC4GVMB64LMT1jXhJiZqqpPBztbfusZaFmztxrwWLCTz9m26z5nbou8kgxbYhr8zM7f6XTPpHNMjmXBYyD",
  "key32": "2SJVzGevCvY2frNHXt4agW17TRdKTjaFZJtqxkzf181VUy6EGpCyU54TZRkoQJ4yxhSonRDZDzcpYvWTYwEVNoqq",
  "key33": "4Jfwh6TgDWHStjTSBsWJgMH1F2t8eWCyyss14EirehpLMTx185DzzoaXE1wxCfgw1WbBnRQC55p3iUHkCoCG1ZMA",
  "key34": "5oX1EkLHex9FG5dEiVgfyfCi7SYNvygFVoCEZChQ5nCTJemTtEqiJJK7jDYdqDQjBeAuQaaA3hcJ7VX9PMrk71vx",
  "key35": "4xSdxGbRBszyJZSxzfDAs1zvEDaUzM7LAX8ve2NmnJ85UW22z3WB5uTzYgWR2FZFjntCHLx73NdXDwGyVYfUX9qs",
  "key36": "48vucC5RjK68r5KeJe1B5ugjHMfoKKuCATPNSckjSHcfD9ZoLH1m1Hww8RyFzt6rnR6G2x7dtRVzEFu9q3RyDg9z",
  "key37": "3XuRHWWaREki9bb64SLFgvHivfeADdUH6ey9fxRpNoUTyP9Kj3QXTG4U58LBYgKuJtfx453T7TMXvjivcWGqxMe9"
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
