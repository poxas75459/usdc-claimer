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
    "3x77TNsKfGJ8DEarGKLKnGXzCazBQL7jrDUhUmh7RXC2zqGr6DEDFuscbTwAze5bmwjrcGfrshh6zgrZnJFYp81o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iPf3oNuyfGwGr8VYSTzQc1ATtSuNvkZrJsMyEkKNczdiXiPvf5eTJZ9iwzFPzWyTyYiQbrUMewKGAgoRSZNd64H",
  "key1": "2c3pu9c3Qq8E2tFDUhfRQPk5Q3A3Khkp9roG7PfC6NdsERvmStryej6hHRPhbCmH8VkhPA7Vo3GNqz5bx2WZSUKV",
  "key2": "29a2dPUuFRSmP8NgkGDsLQDjdNSr9hVzEL2YoYZsgLe5PDQ5XwSWpHHmCNLfbKoDR8RCp97jWFifvFkp99ttUiHN",
  "key3": "4ED5V1oNtcBKjEvqteWmFNjXPZQKebKjVzZxd7ujVNu2xc6PiE9X29HYAgxRxsdh9Z9DYFVPyuP8De5ZsfqrXAWv",
  "key4": "4ko5MWoWXhwNPFirUcDSwunTbYQcfnxeUNBYUEu6wn1tEhsN16L8FoFvU3suNV6jnBSNniMAjYwScFUGBpzHLbaA",
  "key5": "ji3YLsabfaMMQtQvwYQWG1ar6f9qRmi1kMTUpLqvq6FQXWdvjzt8hpV1jwDF1aD5ZSPUorKxa2WZomWHKE1tHLV",
  "key6": "2vT2EVWS1F4pBEcbKWiHN4dY3Ji4pLdCTZHizazJHJpEdVNmDdkrb3mifxqN91Sr9NVHBiJqG9dsoNLpT192gzhh",
  "key7": "2M8SojseWnUi68CFftYXsWqQTCZnAddQ7kEZcCHGKodd6hvYXU7N3UuuetkyRNqHZ5ZPmbHP9ukKoj5ryfm9WJTk",
  "key8": "4d8bnGyYNyyBL9W1PxdgC9NVJrsCwRwU8rJvCFLYtAwhsRqWfqWTNYiKWXoEYrdEw1XAP6zWa2P6oNFYQQNhcedw",
  "key9": "UWUVxvBcMMdWmxxb1W77YAc2wmzDPPSbepRfUVEgAp2jy7YZ3i91aBWhbCXM8wBAWa6zZG5RGk8Tzce8yavETAG",
  "key10": "3XrzMfGNZ1KUo3G3CUfhCQ7BrfiwdS7CaZcVZThy8B9uZ37i79z3fVpbq9BL1bKnbVY7Yjr4y6nJzXxq4v1aqjEH",
  "key11": "3vo7qJfxDxK19vwNj7zmaUFpaxUP7gjh7YETFk1C3zPqxmc1k5S2vHJs1QUizaKWHkxqUJ67H6RHGao9RKxMKcA6",
  "key12": "5uiRUSnUuBctL2t4XeKuJ6EAQnaq8SA8gHcFSKLwZYANNjiu3UitfVymcYDR9ir86eNFjxH26Bm4aH7pVry5dGrW",
  "key13": "3zwjKimQhAE2PvRThCxSMgK6bHSGakGTo9pSCHgitFis3Zt8sPCW6dpdYaDv3hTfGmpyvSerE2iAGPnfW5B9CnzZ",
  "key14": "64rdTeChjGcfaFMimYm8vTxtbC3TgWL7SAbRMWLSd77Sp2iapv4zsBznpHi5oa4KQsTwURMawgGfgRej1EbKeubY",
  "key15": "4pofn47YuEYwY8N8KF2QfBRdDSK2ZCEkeAzWwhYT9upe3k1NWoEbDRdxAsLNMXivdhGPSthah8USF82Arp4PTURF",
  "key16": "3qeDu82jhtogNKwU7CfepxNikQAQJdA1rRvDvU12uxAS99nu2gLYbWstzFdRQQ4mFXbwDz5STR7624AMpYxc3bGY",
  "key17": "3kNuov4kpymmCyTS6TJXZjm21fPqusWmnwXigGSLNeaV4qu3wYA4zTbFV8XvnMwuFqiYcBxqaKYsxTJMoYBcRbT9",
  "key18": "23o3nCNWoiZyGjnTFgfS3uZDDzRhf3d9q8TEUpehe6di8KMchQ4MaXESsF62tdiNfp7YnqbNRAJdxkpETsjk3QzC",
  "key19": "4DdY41bMnp8WNsx9s23y6xntfYY2YatSHXSeSQozb1eWbg8yjpn7BRFsXmmRWSk4cgmjDxoqxb2RbE3BGNMSnXAV",
  "key20": "3nKWvcSXoRvQL4AUNzB2psrAoBP7NL8QxRpUomFPAYwpgejRW25s2j4TxpWQ2c2Vu1rHv2W8uje44pCczDvmyRJC",
  "key21": "3V3bjsZw9aKyrESs19LsoPsm2nmHkxjMqHMnC1DqdNHbNsheedvr9iq9Xzo2ZRQgVhmgG9dHn9r2zXDr1GtesWBt",
  "key22": "P3Q6kdhEWN8g6Y5gLBaxR7j3XvBBHWdkCpjVuf4NoWR57Qf1MUs5fy5KFua2TKsCrDZPS2EMff6cNuzUZXP89td",
  "key23": "Y4G7zZh4tRLFH9WfYvAsbhHkShyeQqbPiVEcyQCzme9sPksD7RtjSaBnMesFEmRKrnCwGSYUKgPmXD5UEPcfyiB",
  "key24": "45sdYScWaLnEaFHUzmrNHfWDKAtcJXyYkUG81vrTrhkjW12vhRCT92VWSgTfoShC2xNMDds9kaj3h88b7Dkqp2kM",
  "key25": "357rqayHhL5e5JcpK7VXWW5NQb4YC93PU1hsqw3CZtLGmuqa8zzUnNKsojxKDdS2kimnM8RU3h8jre7GuTnwMVbS",
  "key26": "3D12QGkzHFoDCa9Cf5WL4xz6vdCN9BTijU9dRcRMvecTRBQu5gDsvkpHubwqeYasC2JvD2R6atTh7n9Pe6vHB6UZ",
  "key27": "2MWW1Y7P9Tp4D46VcJMuy7A4TZq8cqTcVWxEP7xmJ6Dxzg8RdfF4hpEi4gJkwHY2nPWXwxZatvfoqv12fHfXVDbg",
  "key28": "3nikrxDFNUWktE7KqXdu6FdP8uosCgH5AK6o4outiicXN1RVvqgvk1x4JwErFYA2wdxspEnx38oRN8uh8T41tkDY",
  "key29": "4ZyZbbNevBNzHRFMDg4kQJRJWjJPhfJjZ79iH1zmTJvXHzhE5dwWHjXnT418esCQ59rLzAfEwePLUhAqXPTN4vyH",
  "key30": "2gSB8uHAjvBkYaW2DD54nbRDZZRCBk9Dyp9BJCpPTMPHeJXGV6YhkcsXA25fc1P3GnQiGDfaAJcCkSce13B3h5A7",
  "key31": "5MGymfprxDeT1SVqCYDwFJVizK8wZMgDWBZVLmM3m4i2ABMSNNZR72P6RNnSjDkwpLPQ5zuBYgWU9v5McqgfoR4t",
  "key32": "5BLaHR3GhM6VPMxzTyAZpjN27bnAS51L6ZZMqNGqRwmYGCvk9b2x36VDApSym8BYEeFLxZc2LGD4MKrqNsBQ3yq3",
  "key33": "Tc3w8p999DRR6FRoKfCsTGXQQ8eLHYkQ6GyHkhw1C1cu5QBYPbaFK6tc85kj8Dn8cQQCfS3rjkF3Jtq7N1k7by1",
  "key34": "5z92bffNuvQUBezXYAAXmnNCbKUCDS7aRkTP7R5kzs1SudVhqhcitpL7JNSc4rZ5WEunTGikVechBAv317tDL7eu",
  "key35": "ceAMi6EaLGk32o4Td2TDwTqpYN316BwbF6AVprBsHotGR5Xyaz4bXtSesJpdVjc81mDGvEPPPuFAENna6C9yCWb",
  "key36": "21X2ndob8G12Z9Ha9JHZJ6PCT6Pcfv4nKAr8q4xM4gsbp7WMZj38hHzeFNiw5JQ9KyrdGLRBrhuRwkpnQ5uVGUoe",
  "key37": "4kQLBCLYezBcndDfyL575eFnqweXE26mReWAh5fDkNriYC8eEXEa8kfUm1gw9XnTwKYZ1uKpUaBy29dQNHQzvv98"
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
