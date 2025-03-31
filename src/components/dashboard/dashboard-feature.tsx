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
    "4iuig9vTKmbPo8Udks4mRzENrKqnTKDZxNWq9M5vrRkFfxRJfWYPX8t1oDjSqsDJ1XKYHVRpjE9YLoD4e3mezy6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vseAVKkaMLz39B2NgHb9dn6uSoB5aa8fchNPDCfruSzg3E6DTSCzQw4c5pKUkDK7kDPfjw2U5RWQzmdkWyXUSQ",
  "key1": "4S4buW79LbWYfyjEwWw87vPdYXkw6k6XagZv58eRGtcLN7osCQLSrxhmjUk4jSBYdR2cenReKrbaPwZ3j6Lez9uF",
  "key2": "43WrPZWwsWHAGJXqKd9tcDkyPpebLnHT9VmqsqtDMJjmPG2qDhqTmdJoJKVZxjvAMmhFPA8wSGmFGUo2kCwXiywK",
  "key3": "4zjZTSV7kiVru34t7QwuYPNEicgxN5eteWr9BzYS33dA31GoBfABVmA5EpaoNJ8KGg9kdjJqnbp32RcARFAwCrdn",
  "key4": "2Ry5WnYGAH27VaXvs1mHfmEiSRhWXQry528Jft7ssDMzUT5W6rMJmYNNk3awG4aNUnDJQ5zALvExNDR3yejVihfF",
  "key5": "H62vkbbWp5rJ5u9xsPLoZUDH9dcCC96ZKfaqQ9q785MkLqkjmWqFyTZkZce7mpgy2CE9Vh5Cyi8vidPtLo92h82",
  "key6": "27bn3LhjoZ9uvYXC2Agnwuzk7MnrbssFBgzrA96HFW6NMkkoy1oCx1pTSLgFKZeozQ1BESqKLMK97M3yMmjRXD63",
  "key7": "362zNq7rZ4mMceufVKWQwZCeYxE7n8sSg2T3hakRVBy9GGyVZpPphK4HRjRgPYdyzFq7rCN2foY3FCTorrcVAFkK",
  "key8": "34ubg78a1a47RhJkENL19WyQCX8J3aToZHALQYuHRpVLoFVyWHYikxQzJxyqNHo68MUHoUWUTNcbMPLM71ixLygK",
  "key9": "67Xi6YA8Ex3xnLqNF6eXtNUnfFHTpVVKmDxTF7CTktFdf6BD34LP4e6k61L4aWo3B7RdZamaKTCQhBcgURVBw67n",
  "key10": "5S4Tz8sS45nfKgRUbZuEYWrMRqmfFFpVcjkPxdCEUW8B4HHFFTSN7RbAAB1YmvGNuHVWb5MjvjduN9A18Me4NY8x",
  "key11": "2DoMqe6DJ5RjdB7Q7kuY52fxo63kFNx8rXg4CYDAQd3o8BiNNxDETbLmhorskoTKxzNJ2xh4M5tZnCFZoEpB6veD",
  "key12": "4rV8dzzso9hfXHKFPfDwVRtNMUAk9KJ686gdd7cJfkLY5iGTP8TGDLFZ7iDWLFg2gpFpRVEZiYAQePKzeCJFt4km",
  "key13": "5Hb4JJUyBCrdHjfUo4xodqCwtF9eaKFzR5VX6M8DBLBq6Xp1JmDqQMHWpkB5uqePTwrrDHxDttcGk6LhnRL13Q9C",
  "key14": "7KDUyPc398BbLBgvy4S3zzA2GMS2BCfcgHbNt92bSmauHSZQ6jCGDxwm6KfSEQRUVttfTe98eUwgYJKsw8YWGL3",
  "key15": "4timEaHMa1tyEG1cVhWK2VN9mjJEWVMUc8CMaA1ofWFozK9wd4zVmDnx9sSSUnFztd4NtkLR74TDgagiD7yGJHFx",
  "key16": "4HjrRZnsd1S5fMpAoXTeejts33e4C8dt6FyKuAijE6HrPJ8GMKxAm945StboVkty1Qw3HjbVojPmY42exmEPVeQR",
  "key17": "4vxFwRxKWVMjHEWotKJ6waBzSSN1SQ8JDAerxifEBVkkkftbWyXM5Dktn7GMSG8Dn5pv8pu9kjJy1WXnJwQCpMHV",
  "key18": "4vXk9MvY4xFDZEdQ6HAhnPTaS9s8jcMPEPkv4eWdQ6Ns7VjfrfkmKSHoC8egMX2zFocoC4fWqeBQAHW48PasFazJ",
  "key19": "5WY1EdYxx9TekhS1iaVYEijXzBEEBCWKRSyxQM5UrQq48qGcjL5FmedMwRMzpqtvuVFqc88JaKj49YtwGK6JJ1eu",
  "key20": "5cj561Ft6mZiipVgt813MLu9bU7bDickPJxEBqV92D9X6v69nacAG998w2QcysRmbxsuN4gwZr3uKiezYV3WMan9",
  "key21": "CNE8DPEfgGYFUYycf2xqd6syQCuqcZCHmXZMtR2TP7hPPGXTt52wdd13eoK3RhFh8MoadVgD9QLyUVLLnScQb3X",
  "key22": "3Ec6MNjSWAgswwxd43Zk6v31Sq2oWuedPMLRcMYiRHubHtU6N5uq1jDVfe87zG5n8dMwRqgvvZ5nmaHeyqKkeAce",
  "key23": "5tG8W1A4U3utnV8AFkbymNkdiGu4jDkuBh3jEUp7vvZ77gaUK5rEfPB3xsBNvtkoayspqCBgyacgv2ZZN1H6cG1G",
  "key24": "4PMxJtkSjtTMaSJNhigJVMWWXvh7osZWnsSVZLEeQ1u2REacZvziNd8H7xygU5ZLBH276Jx1cBEVeUfGJ9vs4xV1",
  "key25": "4bYyxJ6ptcwDJkqnuWKxMMZb4P4ixi3shyARJmdoYN18Zy2iZdbBCqaJfTu3iazramciPUakeGZFB465DvgLsadq",
  "key26": "2LAp5LT54NVs1BQNqPULfJqcgWzEbBFRYrn4gJjPm5NPToKLDs1CQVPjJZrQAXLhycpKYGktkT8KDYvCFvDof3fx",
  "key27": "66fKnnVVScHhunex1Tk259gqgsK8pZaJMe2b2chiCjTWY9cEe1QDHKS6qesZGpatZHtdro3hmy9WgNbhkBaevqwk",
  "key28": "3BCXt1TMScYF36csfeZiSCs19zNoXgAxtoP3q6KAFjCKwULpMgP5kPndp947kMCJiafVgRTdTTc6PTEusSqxrXSf",
  "key29": "5VFMwm3cpGwtbtabawx2hFLWQxXvatg9TT6KzVTaRtMG2gcSdke2YuHPPcZs9j9HCHj127pYtFwWZBLu9QZY1GVA",
  "key30": "JTjaHG292EMa6p6ZEPyyGjbopjujMP2mWu79EbosugBrtAb1TTwn5zxLEkSG1twfCU8NhN9hcoZ7MyV613TgsuT",
  "key31": "d9NjPMGbiZfgqwGH4F8vfrDd1TayrY52nNhKQat3xHrT6ppbeV11dGJXn8PbxUeR3Y8BGZ6hrHVc1CiaxTxxHvh",
  "key32": "Jix37FVHhMEg74VK4mXd3k5MbHDqXedJ2xftiEEaQPCw9JkYbfNTpAFiRkruga5XuQt72ZUHU2Ad9Bh9QmSN2Az",
  "key33": "2mvrf6rfKKZbTSenbMRFfg5Da5GnKU5bP6VWV8GKPHxmhn6ry5MUpGP6odzMU2UW9a9orh7HgMEfd3zUnqeDYNhq"
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
