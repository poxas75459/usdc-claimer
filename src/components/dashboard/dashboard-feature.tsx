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
    "5Kzrj9RbD1U2gePFssFDoD4Tgn3z6CjBAkEqLPZsMqjHf2saNgaTpbMsffmb8FtmwzVQyHcPifrrQ3rs5jnBPGaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QuzdU786acnsUnjvGVxKqsiN66EH4wGbmyMTMfGViLh4FsrV3xXpLAhSnDTEvg1MKX7ZFRrw2LW5AwyMTGxjgki",
  "key1": "2gVYYGSBid14VNR3yuQEXveVHmQCVricgAcz4823FDeK9kBEpboy5XynSr6pkh6hcJSa8smaNYFi8xXmxRQLo4QP",
  "key2": "M2GHyFuhw9N5459o71mWPSYsKeANorwKmgGsMExPBxkifrNQuEzctJ1XiNMB9wVefaVPvwx4zcZ2bP8uSrA17h9",
  "key3": "5PLkbPV6RKa8fUQwUJfKGwaVPyqePEhJEbeaJp8syPMwQ5J1TnSop3Kn917DaA2ATEbfAR3MKuKF615uP1azLK6e",
  "key4": "37Ze9Vn3trqnvKbQ9rVvPMG1X18qPfjW6wPBYydPkWXSWtr89G7yGcWFVcAfkXAc6wyeEzwEJxGXkRhotnT74inT",
  "key5": "35VLxCHviZjryCcmUwDZTyaezhWWsVyUATsNsVXFDeQZ4HioT8JdYDuigXTk99noPddiASQe9NcRBTiLXfsDHD96",
  "key6": "2Kriu9MqRMrMnsyyYC7h4FUnHP1GEQruqTYc5s3T8WhMdjmsbXnxkP3Hew6xTj8oKxYZL6UXxwEx1xExf65aykeE",
  "key7": "3RsoK9ghXUfeVeg17DsAZ7CtkHKcAjULLQf3Zvkc6SW3PpoDET7w2L2ZHp35sEc4KXPFiAWKr9bkkaTaPcavmUtQ",
  "key8": "3kPNK6ss7E6qtfngWdZCgEadXV6nrqZ2ZxxU69Ki4h2LTNscYq8SmaUWy8EXg5hUw5Zet47PfSfom4KCQAKxJnA",
  "key9": "nsNvLuS93Rn6d2vmGiXpRaCD1L3wdK8ZRVMburPfJqaHr8JiGAjqMC5b2tMZa68gEPDpnyNqwyuWTDaVRqvit8b",
  "key10": "5mFeC2H8BbFBWYKphssBSKz3wCNGE8M3os7nWn6NBAikqf91t45vD6wkDKnXwXJ2GKGCCTup3Jz2gCPsiHhtzbCY",
  "key11": "4funXf8qYD4bFwYpYLFsWJHdmq4TKeW5u8TiDhnjhm5RpRLhBHbQxuxHxAm6L79P3ds3ktqSxCgJfVRkCQH6MyA7",
  "key12": "2c3djvhUPBv6R7BHGGawmmEZ1zMNDJWJ3ySy6aZptWe1bq8yieGeFh3e7rPdR8QovtcmWnicPHQ4XGFkpQUJakVk",
  "key13": "3osHnXHtzyr3dxkCdndCF1soaYV4tnmuuxeWuJJ15WgqpG5bBJALHZUioXXXp4awfa4UxZmMe8FBmGK9M2f8Dm6B",
  "key14": "uKnxN8b768Wt3DBQVF723x44E3x2TzcnXwwbWuNwq6LSDwSnfEsiDJGTmD4k3gAQwr9mHqoMJXrK4cn4MsvyaH9",
  "key15": "5ZVCdyrmXunqfSYQ3F6LXWUYg54f8SxEv5pyerjN2CpjgyaaGyTWrKEYbwy4cQ2wXxaeMR3Rdv9BHadZ4wzkgWJs",
  "key16": "5fEqQ6os4vCCKAfB1EA5dAPS15NVjs9W2xK7upqi3HzrVq5E7x3cqo6e3bouZpHYxNQvAWSX4a7RTgcRJPesr9zG",
  "key17": "4q48qtghem3vGNbno2oYnhVKqZy9hNEwfcWWm43A36UG7gVHn4vb59jND7MmA8bTgXkcGs7HQ3qTdoUWkDYZBbor",
  "key18": "4GpnFA7hxSfq3P2c2Scdw2MvisaE2sftbc6CBajx1wfDC9BhNiCRVToB2cBdnwqh3abwDbkxcb79TSFuBB2org9b",
  "key19": "3UDXHj8hgniwBELc4Q3aVw7WTB99tznQHnymh1wGdGYTJ6nhuuqgdE2zxzCxkjqYSKuYBghfYYfpHkkhKRf2ZvhS",
  "key20": "4XnansQUoJybeJF6FHnVWstNdNcLL8uEsjse6f9mYsCzdENauzz9VRHiCvGCmFJxTLoXPkNA8UrRcyQpVWE9HetD",
  "key21": "27wwuc3KwXfmTvKRmZhTuSn8vcEyWh3HZV2jiaJkHKJCXC357Tamdsbf1gaZMqfVZSThd1DdCvdnx6cu88z8dAqb",
  "key22": "2frLtSieuEqjcDUFAqogjeDusxTwPz1L5iaYaK5w6EZs1oGoPFiBLGHmrDa7H84hELhqQtcswH9Qxegk3ZyhsTBF",
  "key23": "5LcasaBq3GF5ZS68eq5kAWomzwZQbaFf1mjSNGciagK28nr9FsG6GFPoQGMFTFai7kN8XYLVguZV6k3q7JcUCTSF",
  "key24": "D5VRfWGQB4r9F7uX3EwaWeFMDRiewHbTxNnZbKTbFxDo7PybeCEajCXm3dN3MiTP8eKE5sCKBqPjszF2fGzyZFH",
  "key25": "3rRhEMVhqSwrFch5Sx4MGy3yt1bPaRKHhv3LUn6x3qMsobFirHUqPYRaYfDyEUvZo51es8L4Yvbsf5eVWr1tTt8R",
  "key26": "5gRdzZhQxjC88x7s9JUj24YT6RRcVWor1WcKyqLR8HNdvep7cbzAWsmErsYsvqbTTLAMhqTn5FrksmdSTbGgFxs4",
  "key27": "rojpgafvw4UerieqCYL7kLrZ8kbmYT7htpo9E6Ggxc93sfLRaUspgcrL8rSjVrEnQKAwtdDfHhMMv4Ek3WjPJJx",
  "key28": "51kpZ1iZzzgudDhJYQ12eo9QtqpDHwpgafWKz51NdZ4yRxFzTUgGvu8PvFxsojwcayuA1Mwdg5Ugx59AFgXhwuQF",
  "key29": "2SwozTHZN6nfZuQrfEHV8tM21a3irXrGJ3DfNMu4qsWXLYje8bZsXXe499K2VmQvLctPKRWTsFjxESTznhaeq8tG",
  "key30": "g5syMBJAQqPeC56VVJ8rFS3PCJ7Ddu6KKxsxSk7nU874FtWR4TX38UJeiaHXA72xR9FXXkUcqgTLnc8Y2xdEazL",
  "key31": "5CZp8hajNFXF1VJZCXnQp335ukEH19S99Fk9ee6MXCFde1yRfaccpFYtHsKwM2Zhic7KaeX3UyS7ukgVZjGvDmmq",
  "key32": "5HsNzcWnGcbFGivgDh6FH9K7UF46pBMzhwHJbPcNmu61MUAg8YjNyvCfZbjYLY4mYmFCNy7gbyFLJj8dXNzPVkpm",
  "key33": "627mtm4aAUuLGr4VWvt1wPFuWfEzARGrYS3YHf14n6CU6KvPiwrgmDXLvCjdHrtwGK1Wv2yRF6GoGU1X4nhhaGgv",
  "key34": "2k9mNWw9SjUbZ4BVMqYqxXBHvv2SeUJQYkmbgGPUYkfChMxDPiA7gpLojCLcSxbUnNGKB6HXUZbq9mjmjfkL9UnZ"
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
