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
    "5ANJkSaXAabepqX1QsMsNihLZZfRRxefFcTofjMGfx2d7cmxBTVLeLDeuMMVQBizYiDuDBX9DHP3Py2Keiba9bAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNLpqL3PdtGbtVXDCPtGnX2obdce4nCpFxjcWvXcLki2GwUYnFDs1ckvHs7M7BQgd3kYfJqcL3oNQyHdTqy4z7d",
  "key1": "3isfRzUko2fyfKwprd1mmy3g7VWCxvHT7xeSuDR1NastpDnwNWDvkASS9RckEcztXnREbZUz4CRwg2W3WMRcVGZV",
  "key2": "2k4ebLT9HBywXkfJZKkewctbFs3dGYXQuiXaikCmZU6DR7iCFVYFZB6EgTcmUvXWRL9gpW8uGvSK12VRzbTshs3Y",
  "key3": "mSgPNAg54cPQAwRA4wPpxrMtaQj7tedrxexv99SKzmmpNPk43GM1VF72iEr6v5bbdDYL8M8vSFqKeRn1DqUQ57d",
  "key4": "5Xc1aefZF5XN6pWf2ygXkw573svWXfgDcE5kJjTAMEFaVUkx9NSzS21CBbaX2PrK1XAhZN4tRMFpbrs4AsjV2Egr",
  "key5": "2AQvZvEmz6PWPfr6zjjsLGBgEwfYyU2StmP8wLQC6p4j5Mf4CETyFyQyNSSgMrV1JT67hbsudXpFTmh1gFjSSWDo",
  "key6": "2T5chXb8E6tcoEnAmdAQP9en5EU1npzh2Y5w6tYcArRgy3onbnToRVJGAgVKLbsLggNXUUGvtyMfeov37Ux3pLHy",
  "key7": "2j2tdXFL4ZfjdiyFtivAGbhqJxjGB4pz252y6ACfQkG6ZVnL6oMCrEhLvVJiRoVbmKTtKGXqmtCkx3wg4RkM9YAD",
  "key8": "2CcyLUxj1nDVaiRdmcFkhJPotoSmDn74D2sVkRp1yrk4dLBUbJKTngtNVjSAZo5cMNBEYNDnYTQ9cLEyADNzmFF9",
  "key9": "2GwquCPM34DVjEi4kaRGk9BrgbLgpbLdGrUKwptVKP1xSY1MRmwCe3KkfyJo5yr97HD81yEnpPUPCKbU6Cub8nH8",
  "key10": "4kmLuMMLnxs1wjHxMcqbVbGaF1n6p5RHQbZRqvo5X7CcM25Anfp3S3VdRAHgkcW8YQZGXC5zTxZKLASFw75qca2e",
  "key11": "3qUsRu2G4GjJ7P2KRkts6C16AjFJcKvYnyJnHc3D242HpEW51wZG8c8iMfgMoMFXEh9V74jNS2QFx48YxYbmN3wV",
  "key12": "2x6GiDLMqYq7h11nJEDrj5iMYSpLK6cSwHjb8k9fyAu3ZnsPQJW1dx4Y6JSec5bBAPXSppBYX1CjwfUsQRdfuRmw",
  "key13": "3HdQ9w6EZtsqHwjubQFGcJLJWJn7nPShGdYgZHFVUFWH3JM5oNyTSkt8V84Tza96r6Kizqz74Mwm14y1r1jgHWjc",
  "key14": "9sTLc7MZSX3hDpMJoA5NQq3XB3rh4Go1i1hSuymp2mjcFZaoXGVMwGqQc83zq4Mqtg48sWDixYLevZZkVydUCgg",
  "key15": "5XbYq1XaHAeJfsG9qK4Ls7NG8R1uuo11WeBCAN7JnDgpUDfYoS2cc87boPFPcUUiP6Jw24SU1SttYegxTrWdeimL",
  "key16": "4QhhYvJH4Mk2ihgkWWPCsTbg7puPhBhLjeSUMVxyw1pZAyGMpLK827s7VTryCtcjz7QmxEwcLd8NpYjGX4G4Y5x2",
  "key17": "3E8hB8TvaW2czTnFrK4AW62f41rhvudNAPbx4ELaQ9owEMAX397bkD5ZyrcVZppzfPn1kZNjfywMV3RNCizY94B7",
  "key18": "3QzMKs8GLALwwzVyJ4URtJUAxd8J3CeD41mSDKDFBikFD2ZCpSfDPS6gngDKDJM2qpixGYiWmN8cwwdoHCuuKbjq",
  "key19": "5bzEbYEAt2ffwKDTnw6XXmoZAwu11Tm1oMCWPuXmMWZKoxqPcStDhTeL6V9RjZ3Mt7uSS22dudPvvLzbJRcEc273",
  "key20": "35iJw2hjnh4g1AXyLs17TKxsZ2pNfbC32Gn4yuTGxUJPPMk2SVb3F4XPdPPwaPPAswBuUpgh43Zih4fVc3dp1Fb4",
  "key21": "2MLgzWQ9cmEzQh4EGTdbj1FpQg3k3ahMwspVrP9UcQZeB2izJTDCekS2YJxcQm9AbSSDHfyddZWNMHmodicaPw37",
  "key22": "3azeqvmrJw4sPfBqfCiJ1y7dF7WBRTqoTbSpYfdpeWxzL6Mpz31UExesGaHXi6SbbTXx7ABMHpXNnc2it87ju6WD",
  "key23": "3qovv9KRv5pgWGc3K7G5UK6opzfJs92XVDtzr3oFAHuyUdUycVZ1XjMoBQDz3APmy54jT63oVLf8U1VfKQLEAsZo",
  "key24": "1EwEyoxdrBdKYeiMH22E11iUR4rXhV4CsAoXLBrggo329khtEwKbidPXtWdQebsJztzy91KaKvNmDJQoHT24pM6",
  "key25": "5rbUhb9fqjVm6BtuCBuhNgwPziyVviLtrihZk8xoCFyg4Mv7WRW6tSyL3kdbecaTrsJ6r9vHsSt3zRAKfmpHNXjw",
  "key26": "5XqgFnc3kYPpGBzvmYMqinRY1Fg5rkVtZJdu8HQcaujapTejmHhH9s4F7zHaCCGZKrP7G28jgropDuZfKE4aaosi",
  "key27": "TkzxGEHVtA6FSaLHWqMZfgwobyNKAdJPXgLaWJdwGXVEjTH5LrGtKqFXqV8n2ZeRFwyEsHYw5JMCCeFZ1thY3pr",
  "key28": "56n6Jer1xB1m5HFjjX4m72JQm8XwSLdcaBZyZ1X1Qo9fvoHAfYNU1ZeeDtxbux7jSKSvp1Zp3fXKC3HHXD2o2ZV7",
  "key29": "3Z3XusGwF6JEpYLX7xzJYStvzEqxmQX62vxpKxc77Udn26Ru7F6ZhC92xaFgL8UrKsiKj2hRBZNNE6cNoUWzdoC",
  "key30": "3dNFxezGQFSAgNeZDZUeHwhiWAWVgbMa5rXvqD8fauQAr5QZLkoBNfDBQhw6vVbivd81bpsX4dQHjn2ujGpqUPHU"
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
