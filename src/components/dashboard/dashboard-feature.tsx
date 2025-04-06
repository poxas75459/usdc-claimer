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
    "3YfbkAsCBGRdhKmR5unnLRa9n2LX7cAkK8GjM6ZiBA7r845zKgRw8j5giNKNitau3VNzTqF67fV8zpE9wUSxREpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tvt5SarvMN3KV12gRu2z6sgCfavJ4DYEsbe7KPFsncL9K5794S5icLUXDBgDenbquJrhXeeDQZJy5x99mrrd1Qo",
  "key1": "4TDtJsrMtAdJA8aCiEzswAnZSzsP9LFQ7vHgttGVa7sm4WnuGFVcrbRp4iNmXiyBDXQgXsLWxRiFToWh5ZpvFFDR",
  "key2": "5Rds39PDkmQxwrJJXCgrPS1C9iNAV8EyoxGy7vA6o8ThC8AARgb2PVmEWYYinY3DcXGPrD8WRgGXjfrD2WCdKfAU",
  "key3": "2XUgRnd8LhiSh2vyKS5Sh9nSeaBb9kJMCHbAwjVEApsN96YdbbijC76ayQun1DTVudLqwsGcpE55FpaPu5pXHKNF",
  "key4": "2NhtWVLZaJGhrCAjmctUnGYJR5HT6Pw9KRgqeCSBgvqnHSXV6qpyEVWzhxv1mx2Xp3L2cAonrxdFCCk7Gur3uYjB",
  "key5": "3s6T7jANDyzbqtK3o83tQNnRizic2ACL88ePckUabYW9DGzwNVQD9cNa4nb3WTWDrMMNRw5zRMttdxKGGN9tfBrm",
  "key6": "wniRvDwxB3a63rv6RrvjcPLtSCpVEqMGpNgXMKeCmxxJ8cJy86t57Hp63r3LQCU6W9o6X4URhJazc4CJGahHq9P",
  "key7": "2sA1M4SMxRz9DmKekH4ouYiWXpyprSctByCNrkVaZv4PzjLKLCyHdeu1hoapV6zAuywDD173YGZ3j2sVJebgomqD",
  "key8": "3Gz4LA7YHLwNZCPPsGi7MSiqDaBJp88DuVy7ZdH6F8JJ9jBor4xKXjV3hFW6bFybugCuuG2YHW92ZvyCxHCVYT7X",
  "key9": "3R828QjGD7oYeC2w82aqpwkTpRHjspkadrzRfdRgMqUpxQzXQFtg4SxC5y96XFdrjRg7XnGEmzVepyaP4g3eCVm6",
  "key10": "5MALW4dR3zftWDVYcchba4CwdHVHCA4DQvehKGoeokgYJq2BCmfSXjyABTmHj4zMgoujmLFxnJowuH4NKzHns2Hm",
  "key11": "4AduPAyCauuKmP2wDTU9bqLKzRKiw7wwcUyiwRjhuF6f5tmhX4r4prSXV4aA7iUy3Wu4TDkjCFiY9mRMShQiT4kB",
  "key12": "41t9WWhJGijMPzsnKtW34Y4V1GDrnpqHpyvK7987YVqT9QkhZekzu8PB1iaGaSUKaQyP9wScvqxoHvZTZ8uDgFZR",
  "key13": "4cpDum2Q7Nf61xrUQQAQyfcRrHA3pwXMYGYCTzeNhp5X3FQWNwzEXrXcXBvBLai4oUJRvdVrb1MandwYJ2iBrswB",
  "key14": "ySp5zwRxmesWs9Zipf1VzpCAo68hCoQpcg1EDg2648y3LtBz59C4RR2P4hZgfyyLmEn2N9RERDsFEcxkyYNNKs6",
  "key15": "2ztdyK7NycQbHeZXDcbcieZoDDBZzC2ANdEdh7ii5mPHXiRfbdrsVXjqkRRsNzaojgv2xC2T34tNYoTSzdZLaHZA",
  "key16": "4PxkkqGV771b9w3fL3teqDkUBtEzsxEvTK2jcfYH5UghjMG4RsfM7tndv4UDH2VrYT9Je3SUtoQ4PNrLAytpW3h7",
  "key17": "3Lz9LsXMiaF28AMbhbXVZw2otsayC88qqefBGKu22rTLoc3KeJweQaNHZxxU4CVtbUH3CWAvyHWwKLV2R9FfnmHu",
  "key18": "3dd5EX2zYAddjrRiVRBMvxwrzizCiR3BDLe3o4ZUhEPWc7T7YZCRh92sRBnGjdgkkoBzUW1vCzQjuBRdzKFw4N3S",
  "key19": "67JaMeZumKsuzwM4K6suocaxJTBKmmmbcBvA7JSx7be4EXRBr58tr5U4bJLZi5UApU4XzXSQetX1u7QsmFsAcMCL",
  "key20": "38SCAjGm9NEaWuj8JLx3VJg7PmHjynA3ALM8FhwA45eNaP2qVE4ZhVPJBpU2gtWxwewNyNkm3WyLBKQpSx6GuQsi",
  "key21": "2WUsCj4tcpddaHMry9vR8VS8LRY9WC5tMYnr4DZYy8wbV2WLwoyRBgF3L9h7hFEZvL8Mdugz7QQEDThe9ATAkLJv",
  "key22": "2xLAXpn8qUeaKU8VxvdAxT6FRgX2U1xnZ9pyA5LQJ44kb91eZskATHAFdVCtRjwz2ZptM1zmhB37EUc2K4wBjFKJ",
  "key23": "56VdKXk9wjGLENkVmGtW5CsMRoA7FQszHKsHokC3qRJcSqRqm4KbLmJFpZGkoUULacQhDUxiNfNQbeUYjBkC6mMj",
  "key24": "4ueUrSd3Rwd2EuPeVoCy7SEeU6NCz59xtygdgiggDUFwCUHftgmfp3L2b6hHrzYHMabUeR1EQR9oXVc9rnKBCADa",
  "key25": "gyqv1MpskqJ8sjJnwqVvjEUx4k5LG6HgJgyVAfEWnf1ZhzsmPG4zuk7ZZaLXWyGaQLScyrCJicfY6hT1NkyKUEz",
  "key26": "5K6QAPq9Hh2qw4vAASCrqaXY4ws3xpj8cKUAy5SUkC1KQ9DrKsoGPsr5GMDjD94TWZPLhYmN7nyFRwEfZAxs8sW1",
  "key27": "4gfkJu9hF2QR7eFXRndLmAwhX85Gem5wwwLWqdzhzj9jWeReeFT3YnPQ6AUQaFauqiVWDUfV9KfTJjhW5nSWuAjG",
  "key28": "eJ2tCw2d4KFGQhoZwqU9hx5q72fzELRFBf9Wvd3zpHbaRD4eDMEuR7Eehvuo3c2xRoY5tFit3vAgVD17gGMX6vA",
  "key29": "616zANaF5AU7AasBDPe1bPcCt4if35we18kEQksEm9SYaAZTpyM22AnUY6vR8HwAnM9HjTMDgaLhxjYfJv3N11dq"
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
