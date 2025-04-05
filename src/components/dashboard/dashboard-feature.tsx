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
    "4AF2FkbryJDsFoHrzCWLvVR58wvr8s18eqDDXPg196xiWv2MvAi2yUHtWjc2W1VtUy6Z2vuxP7YcnuiGj3ZcVywJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPLFKYYaLSUBD6bjpkTrYTB4B3v5AiJe2f6KSJQ4w3YoVE2WKckZmthpjD64maDukaFciBDHUz9ViWhUQyaYerY",
  "key1": "2nEMqLTKYQXM8Rzn4rRpZeg8zSdAc6DvXJWea8nwcNkJfDmqfxbsKdPSXfav5R4tV8fBssNLMvmQQ649GKoVyRxT",
  "key2": "5mPLeYnb9kz5V2FN7QPdNaz3kfxP3D6DA3WhRu3kmDPnerW8vADypnAhTXNpJShvUkseuEZcfBVC8jXbwd8xqm47",
  "key3": "5MatXdi58CMq1qn9i3oYQPnbLcuQrDpKbPhM7iKaxCQ1JFDdzkZKh2FDjQi3AczKry9Xyjuu4kRQLoghcEzxXSH6",
  "key4": "55JrUBnFHAwmPt17Y28yyfFKVpgUjE6HWtF6F3YeDhMrxQVrPqqRvTReqKEyoBRD34gimuBuzeUWb86pqC6WioLD",
  "key5": "2AbwBa9abuovyCLNfktoota9Jj9Go7zkNfq74qzhTEmdQGxNcX1MA2tCjkmkoUr4QdERVEBfapL6CocznjS1B9Bv",
  "key6": "2Bwn9o8sPzKgwuWnT57mZTFtRft1YZjYavR8VRPAJ1KFngrV35AhWuMFhKywjk3YP7SvPUZRTNtWEamhMSKPyTvB",
  "key7": "2g1HjxyUVQB2bhBBv59vZM7Ly2QrYu1ggHtCYB1TL1vfT8RiHBH4GQaTuV3RP5b6XL5mUmpspUFRzuGXKdaTXCgu",
  "key8": "2VDdtMuEhFeZ4rx3VvTsqBFczoWJfZhACv7tjaXRyHrxzBq2AjQHs65w9LWjYNEz8CZjQUE5Lo8s1cRTA5m2wYEN",
  "key9": "3wiBrNHKCSMAwTNPzWuZbJ73LyE5pQMDUJm2r1fwaoorkBNCPwqo7jWmZH84TWCKRRX5key3Y93AwDcktzei5brF",
  "key10": "Cae3dzogRToG11LcAG72zWjjtaUNduDncrTgHaFEqByz171mCFKfVVcTkSa3TdfxztYnu5mK4ckEb5asatpDJsF",
  "key11": "31yWwtHnSJYEVQCrba7HzoPDRq7Y4ZJepbyzG1m9jwi9Zb5tKHjkb5yEfRpXuhs2byYL7b2EgZJQU5zSt8LoGyTi",
  "key12": "25opj8SxsaJ26i3EFdEbNXVouZVYMzd5YzRTsmeM82KsY1tjVu4r9q4ngx7QbYnTeuU4bZ9Z3oGbvcXeLEfZ6Nnv",
  "key13": "2ELFHwmVf9VU1qc2MVRRTAtGzi9Fzms4BHjWQzL7LPrmGGAKRwkwWVMkKTcg6bTuDeKY9wjKkCgrMMrnz2NcwA12",
  "key14": "4mcTncKsue4Hq8ci6aKe74LE48uWYzwsN5W7hBANentfmjz7WxDbFCe5KdqCzrHMf9PrfCFk2MRaR5tkj4bnGsFV",
  "key15": "33ZJbpu4rQwbKt73dX4pzvLwZtgdsWKtVAzpMXwk1Fi9FUjCMvC6KBZPvgwwg88tCjons8gLb1EkWiU3ySvUAicg",
  "key16": "fiHDxRRetuK24KStLwUDEfKcn5oWtKaboyqy1UtiUGQhpFSGozffGQKh8MSaCevWddR3ouju6UnjR83ayJfQd8Q",
  "key17": "4meRXet89K9jDWddvQqx6amh5DbydfgzcnGybzGWbuFnBSt3281VZNmJi9pZ1MGY2hjs3PMSZcQBZy8YrDi7ypdC",
  "key18": "4137LNib79hg9o5nD6Y5DMiVPkd8qHerrnpCMHVMddbSXuQNmGBkCGnoDUvjUUsFzL9Qka9Btb5GQV7mzhaGbbb1",
  "key19": "2B5YmyS19nRoH1MoEbSAdUYnKTsGakK6MCvQsCEPEBNBkGUXw1Vx2rSYhnaUYW6Xe7MjL6wMcHL71JAwZN8CXrCY",
  "key20": "3MZZkSG4rEr3ZnAzgjatsaTNFr3EsRWtwRGFPa34u9McMYwvE3MEMmqbx8ZkcmoXrQikd3ZDr8VToTFCmq3YWZtE",
  "key21": "5MycZEW2jTzDHQhQQsij3vYyjHjgCvzezfowKz2QNU6xmL19z1H27HwGEhRqauTJDJcaq7CD1Aca1AN9a1gEXfPw",
  "key22": "4NdTiwSXRtxAY8VLkXpADS1aqtVxPuZoBgCRoJUUJUbGJvrB5GrTZWRN9N6crev8jqbBjK4srbSdfvRR3r2NBZDS",
  "key23": "51Pjz3NQHxaepEgTV16XDJCGTcRhAsmzDGV1XyzzMSgiXsZQyBhMnaG5FYgmxLp158EtTvVAKBXQpqjfqsRU9ixm",
  "key24": "2gGocLAGvdr6M6n1Vvhi5VjuzH7u8VcJ4pJU4kZ5To8AejsbkvWDwMnyQo3DQhmcidr6tNVQVTvThaXfkB1awbj5",
  "key25": "ZGVjjc3JEM9V5hezuyRqDVh26sLmMKSnwEK75yrGiiunkUTy55finRWhipGAKXjxqU8KW4QxuDgm9YGFzDy7rFA",
  "key26": "4SdvEFpehzoA9WGQYuAbvSCToQdcFfjYbk1AdVHyHUvTcyFUR6U1kfd2Ye3dTKYkAhnYwd7uYjVrJbYNXGA6CLnM",
  "key27": "RAuMqkSKZdtk7Fm375RYbjc4S6E1eymxxffL2TSSmKjA4mmbTx1n3NSDFgQthwAbd4xqLUKgoy6m61q4fjvfcRJ",
  "key28": "4JADzdYoAm2Dzo2myhum5gihYu72viac1zrrPcZkVb6fvcMtRg9pXYrEzvxJ5zbTrMMA5KCPbatvkKRRziy1q5u4",
  "key29": "49adAKVxZn5Aopj7rWdLsBpbu7DPBR7BCQ5Mm6GzRDvPg1uDarESiKyr53gCQDY93LCgFrKkwnB8W1PiEepuSQNA",
  "key30": "3MZhZk48psLrnV1X5M4DmaZevNp7V4Q7vG3zoJtvzPUtX7gzq17YVaBcNebsDZqabGjJMEQecFKzwA3TVcTCCq1s"
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
