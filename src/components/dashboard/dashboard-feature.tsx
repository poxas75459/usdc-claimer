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
    "2irfhKrEnnDrgVTFAVncdGUM26b5gZY8rfPDv5w7F7tS58ZrFFM5AbRmC42N919MfaoR8BLdTXgMzb1stQR9KAT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyBFCvAnHXMnDc6JrRq8sJrMP8ciprYnK2hfoZTReRdN53kgsu6SNUDXk1guqyaA3wZH6DmKUAZrkFFpADCqgWy",
  "key1": "3K3JqHJdT6CTiNMTaX2kDrLqqr7DrkQtL8ouMbvkfXnTaoEa2Sv4DBNTPUfMCpmb49aX1SYPFrQRV46DZiLfEQb5",
  "key2": "U4ANG18VPgAd4auU7GWyAeZe3QNB3pP13NtsbyxqCnYBC6wspWGQ8ynZfVxavckw78vZXzPn2ErN3ANb6U9SoJs",
  "key3": "eDT3kzy5mrdZMYLJYM4wct1EiofEcaL89yf4cHLA8yLKNCPpRRsAH6VbnScu3Sh9yuQwcMNNBVgBHE6aMXF8SU7",
  "key4": "4qziMznAvCWCSJS1RvtLb1kew5vFPaUSPNAuWXN4WRruQCVaepMSBnkRkJUA6PLQRcAKZdDLsj8taDq37mW6mL35",
  "key5": "2y4BGk1HfbSFoVFiwEBpUvj6EbGdXu865Yg5uD2mx5XC9yj5mEokCEJd2CtbvNaW63VdsodC5vSEDSRJJw7WyZsa",
  "key6": "2LAVQmnEGuNgdQCafVVdeQgTJhUz2jHaa777ugkp1oh34c9k4jX69vSNCP5tjLqL1Jj2R8tHTBn5LtgHgmAiQ5p4",
  "key7": "5vCKeptQd2uG2ekx3sQsM3e8jZVVSnMuHarzqGAH4nKw986bjKgavdPsXTxU4muwSstXHpHY2k8xJsrns5pFKyGH",
  "key8": "3UbGbaqmy8YWANPNRJPj3J8ZddduTqcYBg7J2WVkvGEuZVXyZpH2bzqMqYNG7YRojmhj5rLiquM3Xjtr97hdQZ78",
  "key9": "bZhE2WrXqQWDWfAetJqeiDusbtsTr8pq7HVGvQwUDNdQFmfXSochgSgNrWBd6UupZ6ucxJx2VRVLBR83rv3Douq",
  "key10": "3RD9NZ8sjDKVdo2gvaFQ1WahKQtw3ryGcSXzrrRU76ZCsbzyNUugTW9UJXpu3vx2jKBdwSZ2gCzKTA48tCapwRFz",
  "key11": "5giRZEcvbysydJf2VbWZjGz74E4dtpnbufSdvCWrwxdJdoZPd8rmie78DX7pN6DhnGcB2TJZpBA5vrjwShiaXqci",
  "key12": "5Xq3o5QHZBremF73YbWMbUAkxjWR73pNC81YYQmiYKPVB3PSTke4k9FF9rreUHZuXnnArL4LGxfxGbS6sfT8VsD4",
  "key13": "5nFytu4baRfnP5sHCxKL1ebvDkEVRxsd9sLgQYnpG2HScnycL1XeT5HS2McvHbksZ88BeKm5gDbQqWYem3g2jLc8",
  "key14": "5Qcq4PppgaNbX5iNkByPLujY6C8DBbSUFU5dkpRGuawDFA6UAKpAQ96dMsUygiSD1S5tUoT6rMBgpuapBi4LRNoo",
  "key15": "4KRL8bi6UPanyzuWjVJrdFdJaEoVs3tbTkxwRtA6G8A4CDzXHf9KM4bH116dTaGibd961eftrBvRzPmdrXFCj2Vp",
  "key16": "3EQBpH4f3Grmu6LzeByfuaZVktmRvffdX2TGCN7H8hGJD8d3Rdq24Lc7EW8bt3dX9VkRqMBk8qeX2bHFswhkUiet",
  "key17": "5caNNv3ba63EgKedCaXERo7k3jCCzDVk2Me5LaeHTmop5AVPv87jZCiz14uH9peMNzv42LaBMJ99iMpcsSPspSjj",
  "key18": "7RqK6mqQF1pd8dVpDS61oaAtXddytPmvzpY8efNdB1F8uQuVKv7LWSRctiSsL3xqaTRHJT4f4DrEhLGBXFeEq47",
  "key19": "5BE9zLAzijecksmvGJ99S33nJ7ULNLV1dpkzHq5AvdvTf7R1Ktkd17DE881S278MVWWayyF7dNh5fqSz9FC3EQRF",
  "key20": "BKg4cPsicnBWwjSppE9uzGKUHyFtcT9iFc4LjccQrugmTGoEUP6242722UaEQCXmSeWgzHccAMotzZq4BAWA3hD",
  "key21": "3ejnhDpYYWwSXajB4x2ANFSVWLymS41jKkz8ZEYckGaYza86pmgkJcG8MX16FC8en825agghSFMtc1CjuDH4QYYA",
  "key22": "3wzfZfuhv95dd8xMiL53zWU32hUkREbW6eUrVjcGQ3CZHA8recL2oLSNuzsgfaaWNowNeobLit3XhLcniPpP1b5x",
  "key23": "33nTFy9voUv6hC4w6w4sRje7WzgjZz3dRd7r6sJPW4TubjEicH7gFAQCQeB66dis498aMjUmDkXeMH2Z4n5scXRM",
  "key24": "2KufAH5dtuKdfqz9hSnG5AzFmRR1tmcXLb7i5Bv5WpYtURujThqwoGCtMjrU3Wi5SL6ERvfUJVPwuMtNMm41v3bk",
  "key25": "3vdbA1kxmvVgtCj6nMrX5VmVZbY3ADH2EDtT2wRtyz1L3pCUHjF4JWXhvadKkKqcrCv98vf6aKXFJ8XePwEbiWuZ",
  "key26": "45v2FqM8MoEeD7kfkPqfkRudxH6aZKzjUgpY9kLgj3Fo2GUM7VhC8HG5XC2HDsb2hxRiHtQhjgZSpJuafo5gAWfN",
  "key27": "4SubobARCkjfsBdE6qnBd8wteAT44wF5M6EExhCXsxGjSWqqtV8fzLK9qN4dKeLS7Dq8sGsov3Cayu4gDpmN5UCg",
  "key28": "3iLcUj69YL9Pu3NE6JdZCaFBsE5bcXJG5Akp8BUkFfoodDx4fwS9v8yxj5iRMUwsX3WK3ER8j4k8MdWzEzawuP7g",
  "key29": "4j4HiiVy3ErWggbFYT6XbN5MUZUMhe9J8M1k6g6kBKrnJWYcKms6kQtcxQrvfhR4FVcYwAfXCKfFBV6pG1XpEN95",
  "key30": "46M5tnTSiJ3bWWjBT7zgZAXXv6yt42asErwyK9Z5bpLFKHcp9aGgMDFBmsorLaZ2EJU2USG8L6PxmvNrFwfNtnfh",
  "key31": "2HiNHnBSeLfXofwCJgZqynuTTpQvKgqMMbun5ddStn2HcaxkKk8a5pqfVWaUCLoYuHcgdr8im6mCpa7WZK7LHzCW",
  "key32": "2uecakzcKkYZSKWkJF3cNQfRbYMsCXVqG13LUBLqNZ3Ur9ugA6Vgcv47hzLTUFpDDcwGejgixgsHrN4DNp3nX7Pz",
  "key33": "2Gwct7WPBfCGXEWtrnQXnaicq487xzS2BYwXLSa8jcKRpDD8tnpFLvCH5hjgtJa2xBAVDaFzSCuo2q55wrZDndys",
  "key34": "5DUS6Z8UhpKGhTkbhev9Ahd5DBgpYmyusxLGM5AmfqBgir2EddfUtifU1Q8SRLSfzHhcF68yGGwxhZk4xEAXdwgN",
  "key35": "4QhQGhVaV4dZKNVSbNZtbxNwDqpcVGmecYMRx52dNTtCkzDdgHvGgjC5DwtZHvZSiVdCGNYLgaZ4oQUiT1mtCvYD",
  "key36": "7gn6Mpcu9do6ruV8Myr9xYLQeshZL3Nm4xVtee5d6osHmkt7bQwN1yg485wBsJAVGxahU9wY2RMyAa4VBcV2ZSf",
  "key37": "3MHNzvVxnin6uUPSE4sqYDykvqTHK9mBauzW6kgZofH6pNoryZutrreAhYU3SzRUYmZoVFdJd36fgQYneSZ4CjdG"
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
