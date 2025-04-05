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
    "CYVLireFxdGx9fuXsHgXi3jw9LqAEZiALBwo9zv3Rk9dAGSaXXNv1X7RggBLr7jGn2iM6N9g2RTHdaMLfiP5LUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnEjAYjc7p6EWUet3kFzmjo57bNXtRBK7a3Cm8cAktbyqcYce6Jd995sk8dyjJcAvPc3xvwrVk852kibBYrhQdK",
  "key1": "3VVobgScpcSmtH49r1FL6UBAhS5eiwRKCUHSKqu1uiBsucysjn5sjN8RUGGpbNu2cwnZDAA2YG1gZMMf1oNxNEj7",
  "key2": "3prpjgeCiX7rVpnYv93hMJdL9nQfkUksf2sCCqnv8CZspr8ya2gouWJnz7Lzjh4syYXYPYcDTp65kZ3Nqc3ZdEdd",
  "key3": "5UqBiXSXjppDGRooAzYRYr886PhB2SkuAiAVdYxwkwVLWtQjwG2VexfiSQqnw3PBG9AXy2tno8u4wYyjvkWxtoZo",
  "key4": "2iZYBYninAPMZzS6FN7TBkE5BxWgqBgeY7YvAvDuk7XCksuuKV2tcmPkoWS8G5fzYY8j6u2MG1bTRAdy1iJdGVJz",
  "key5": "5YE34fGc5miSnFDaKhnkqKJYa8bewVCcLgY9vRHxt4LmBcA5dhL8U9zmYBiwRACz2vUwDecgHQPEx8Vk1Fn21hbw",
  "key6": "5EH7ffcDzPnhUrbL5tcFY58rjLCKF197SfwJutXBgMf4toRfaE4aetM2ssqPaY7F5Z2vKKyQ24LQyUGAhLahtKWP",
  "key7": "pwT6BdRRmCdL1VGTDuipB13EkydzPf1Pyy3BKK8Mm1GfEfaAX9GdjZ69yTcxqm2LwpTkQxQdbXu27f1ErWjQWvD",
  "key8": "67UfCYQmPyejiGPtXSbfQTehzcSxBsudySVwWfbLgonzeSKKCJXwBhrZedzJjAUzbJs4UQZiNh9rbviqp75dsctg",
  "key9": "4mbWKWQvJEs2wxL4NNda2f5qfqQhTPMaEYFJWQSVREbZDSUoEA1dmsktLfv6Z3r5biDpEqgLNCbaM2xzUVtTCRZH",
  "key10": "LoiJYPLHpyBRX8qtXkQLw3Sz6cEevkcqT5nYX2t1a3biZsMjdPSusVdM9SveShmiARp77V1jyoXdtuqrxnDsrqn",
  "key11": "3E5fjRXnj3z4rDDa1w6tygCiiN5vG4867cnvRfVR9uuMrjr5D71GWdao7zSFnkQuN5R5aURbAYptEN3dmRqoqKGA",
  "key12": "3rvp9RYJ2FLeLo5NVxDeWqypMVjZxCic2CSnmxF2mqd3GovimwJehjipVde9rHFjuZ9UyGqaPx4Em9JpxwftvVwd",
  "key13": "4VfvrfqHNFyGnZUMUXWeHyLvaoUeHsXkHQxQmytQ2XFjVAdxt63Ewb7YND2aby9R66QbdzYwVPVNw5kQTtyHuCKb",
  "key14": "JHfKR1AdXegpo9FkAU3Bbt13FYeRNNMaAP4GKRmwqGfjzxRfjk3JSf5SqwnkYpt73RpoL7siMwKAtyzNV7p6Gdt",
  "key15": "4hvM3o83HDCMvqvvSGXQvHMPE4LBS7qZgn7E5gaWX8z8Qx1UJtLt7e5yr8TPtXfgWsRs1xJ3qUgzLycnnGLJWhya",
  "key16": "2FqEUMyKhvNSEVT1uoVAkFwT5EBcW4YeN8RnSPPdqbWVfq9AkrJDufK6kmJPqSDi79pFs43Vo6CxWJJdi4KwLvoN",
  "key17": "2Sbb9MCM1XtZA9bDMaSEcDaB9cYNhRXDtYuLzAoUKbQrGiA42jsKrmUf8Hjm5k4zRMuSxCTFMDXD1JBwZ6EE9nTd",
  "key18": "3csAT5w9XGgfRU48jaFPL4tmDesUwMzobYD6G5qmpXjjzboYJaDR2BXQsAbC1TXGEBZEuGbzC5o5cQhB9gaCmxDd",
  "key19": "4NWccdyZmpLrQCLsDAR6zJPyk9mNYCSZMXrYTuxUVg6bCjzfMxMfJoKKqjYYL8N85PiJADwhDhfFwBWz4WoB9GSr",
  "key20": "32HDw35x2oYUeWqTf5ctS6iEga1gM97FurEUGKBXHAP8tf5pHXAv37YnMNsxLssu3dwE59zDgsPZGvSRB1rvFCMF",
  "key21": "52prve97TyJ1jLPcFdQPUZk73ZoLtbABd4QJu9mpcyZ6vTzQkxnyTg3CUPRQtuD3YafwEUdUU2YG213vWVdX2Hs2",
  "key22": "uEyAVKmCU1Pihj8obYBtR71fZdtyZe42HgrP1MGmdQmedShpGpQEdDYVrKDhqxgePvNsCU2cq2NVvSVdfRNAvgw",
  "key23": "5Xj86bUePtTyzhYTco7EM8aHAGYjqwdB8eUuhcudjLqWojhkYxE5Q6TvwkPMbGgU4hBu6nxFBxxNo2mVQwYRBSjo",
  "key24": "2YbxWhLiz6TSQ3xyskmvjYv2cbQCmyGZqny3w9C9GtoWiJM8A3eHKLKFTjLQTuGqHCqcs2LKF63J9gprixeiLej7",
  "key25": "uHcBeu4nGWcBscyB5AmAY9bXEYvK9njHZxkVbe5ssWKePzRrjY499zvrSsJWNY3AUxWY1MjMGTgSUYzPBudkJ8z",
  "key26": "KJckB69Y9ryjZCy9kaN3KeqcgQfupHKzaJLk6S38kvXj4o5L992WXb5HAKdUwrRJEkNPfHg1uBDpzBBHhmtVbDe",
  "key27": "3bzbfEReczySfFFRThkLd34wqARJCnMesyCkzgJBjLe2VzgxVHxMJXzUbEgEhHr93Gfcm6JQRXe5nmQG1dXWMRkL",
  "key28": "2CwG2ifb656PP9zAfbpXez1SCe58UwzhrKHt1EmZ3qNe5FyWr654ryaCx9NfibSs5FUeVBPpoAXLR9CnB13wkaSA",
  "key29": "3cUnNmCzMsWovc9BXjV66mGPcpJGAFa4ouJSNHHVvkg6AQxoGfNzDx7y442WVEp1QECdJxFfLPmFHVwHUeJxyP56",
  "key30": "ucd4FFboRr4GVCAETNZFP2YByUH6oJj3xTDFdL7briQo8HdmVQnJvJVfF3HdK5WKxXKMnHjiDutN3DofUuPRUip",
  "key31": "48o2ckwdNCSnDvT5f1yykSSsEFRJE4mPnoj7rVTWWrVoBNVXZPPd1CkERhwMRorCXi4QrRb68uvmKAMo1aJF6xko",
  "key32": "2ES5jVvs26WFPvP1dRoXwzfvagVZPScvEJS9HJpHY2tctyK5LMHMjAKd2fm6zmd62ApsWvaSQZXjhvNnRmpGTW28",
  "key33": "43ht4NmQU5LJjn8dRt9CDq1ZKWcFHd6QNorR9eJkW46An2PNNywKcpbRaLpcPfGu2svHGKiT8sBrCjWUDSzdigo7",
  "key34": "47wDkg3qDDh9A9je7q7wF2p41bmsfc1AqkSFpgqk6x4hnhVSeggn5b3QEDBrcihunXkt6vqSgrms9WMfvydXVzb2",
  "key35": "5uMLd7ymxPDCVrvnnnEHom4xQDhpkMc6QoWPyvKLeZHG6Sk1t6my6F7vz7koBWdzeiMNYujdXxNTnoyoLANLDEXq",
  "key36": "wAjG3qRGygRo4BgquaTeujXh9p6evHYC1xNScFUzE2yVj2kUvkrS92pV1bztSoMroD3vZRhCMBedJYAJN84LVuf",
  "key37": "4puQqWU3hFT7i8dNEpHsbMmJy31YGbs1THz8UFv8eP97cLt3HojPRynwW3GYUBgGzFPNCc9XVaaW32B3NVMxUTLw",
  "key38": "JsfeXqEYfiXNw6H5g8RVDZF4AboUCNMu4ToAnt2Q5EHmqNqRQoQDqRkADf3zz3Tv2qirPbe9JgLL3SdkPNn7fhp"
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
