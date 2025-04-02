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
    "2sQtbxkAFB5y56NmMk8eG6ouJiUgQMtzQNnobMBf5UhidN6bfEu5zVc8oYF82oZyNgRRTGoqbyH5NZLUosueHPiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFC1iM2m6eb9MBCLQAijH3628FGokyrCqveFLMzqpoDNcMs7rKFh2QH3RvcX8W93CEYkHhEYtAtxpQG2cXL8K85",
  "key1": "56wGvKMPWebpn3EkyB4mfwKSRLt3tU2fLMJ2ojU4mGchUdxFCZpHG387TY4RnKJM4kaSfxhDeeRmjMcvHvAoKniR",
  "key2": "25uY89tRbpEoNBx8CgppBmKWgCDARUL7BYgCKHQ1HsW8tY1mtYuHS3KW9P1FRoZbVPYxpaJSvthHpvFUcdBHv8fW",
  "key3": "4XYVaABQXoz3iaB7gFjc9pMX213E5CCRZpjr9qhC9LjsthyPZvbdTYyTBhgya5v4kWfz7S2UBRMaFfiFJzK7TnXF",
  "key4": "41LBtbTnUs8tMqjPHr3PYwSUvyMGihf4LitKQqkeRztZUFx3QsTy1UP7UNe5w6yPoKoWeYqFt1NHHcbJDVmMVrNW",
  "key5": "54iLGTUAiWUh1QGR3SecMGyLnM7jerkmPNwRwupV1RzFdr5EoRvfzKBCgzTGiv4SJNCaXPfcbuBkR82ijndBfR3W",
  "key6": "5GnePUeDZExrd8xNrKhrLapmNiL9MRm2CQHKwazbp66GFi5nhhxMfyXTpRGhyoyk7HBHRP1bmvCBNNkF4qhDL5XU",
  "key7": "4XWFy3ZX1LMnouQ8KdGUu8MW23fGPZFuhLbBEb5SMMaJ3augFaqU7PkfjMLRmGAVnUSm1YxLRpHFThqwv1uLEXMx",
  "key8": "X4CdvctPxGdygmWL4xsiXTaMgjWtzm1X93fpiHUZW7nvLtmb15yjWoAmfc8gv4WRyaoQ8XiJTYXQ3mhA3Egq8tm",
  "key9": "46Vk36o1Ud8JdA8A3hjpPz6p9LV4gu7ZFMEEo2hWmCH8ZjaLKXzTr18fru95A2bQgTi2VzzzfAtY8cbHdCf7UuiF",
  "key10": "e5j1YB37wo82nhJmzBd7Krp1aZnT9ZDgkFC6DihCT2TgkDTsjZujD8EupDJUR3RDp9eHmcFjDCLWttEKzHhMjaE",
  "key11": "fV9K9RCpKsctZt71Yrfh9ATtEbj1FEw5StgyZy538CT94fFUe8nkAT9mD9yEpwqQu8WGJCkCG5DDTjk9txxbeWR",
  "key12": "56Bava9CqbKNRTTfUYAwFtdpe18qgfyaBsR7ygBWJUCCsvuphqk7mdLs3tiHSKBz7jJkNVXrRRXye1c7C3dyf47Z",
  "key13": "3J7UXrhf14sMhHc8p4JeUNTnQJHGTsYeVmUSQhRxMwWf2QNyGsMT4bSccZUAQ8DrbJMh2smAZnFvqczyBypCDpLz",
  "key14": "4mQWfZtW29wJBKW8wwV1sSBN9GUvSQmsKQXQyEkyzM5ZKrVKw11UEt9YeBfmWrmfEDked1r2unrX7XC3seoa3amy",
  "key15": "4pMLURQaMZHB4RsQ8RkNhBSmJj6PeKRafX6yZdUfrU9Hrsen5acWTnWAiHLVL9Q9rzLtra6aBPrNuSD18b9utBe1",
  "key16": "NSWbSZKQvfZd1NE9Tj3b2DEEc1DkKoMTLQvLQEEyQL498wGeAYeAhL1RV4aj1tD3pzrfkXcz4C6bqrogWHPBjKn",
  "key17": "4xmMUykYC1yVTCyaux4acAbQTFj8KTbzL9wH1tTBNXsQW4c6Pj3dS4VRF16tWRaKSDNffxXZoiwYeb3ymwtyRRTy",
  "key18": "2Kks3gswC4yvVHtBJZJocutm5wKkipqFeSj6su6fpRnt7zUVU2vDjXhyfR8QjJardpewMGAjnLhKtWfdB5dTFeSg",
  "key19": "zH2BZQfJwnBajcDeJeYnybZ62heUcbEz2ifLxBf1BA45BGiNnUUJntiqkFk9bNY86wS7wbpZSxJaKcs5tYK97kr",
  "key20": "4YbYVt4X4i2Pq2DbGxP4v8jED7psa6G9R42x7hikn5cyBygR1ZV7yXuhFXWnyHCfHd9Toqtb7EzP78G61p4BTjbT",
  "key21": "pze3UMLWP1MpPzegi5kRJ334YdvFDZ98DRoahDS4rPxYeaEhkwjepyxMGg7TMg2416w5KF5acUue7H4WAJNotJe",
  "key22": "5nvYRuEUvFpyvHzBcfQ35gfrVugS7Ze9bvVuyay5wipoAu1FcjamFchh2rPstwakyGCjuwsQWwWWwvnNboizZPba",
  "key23": "5we5v5ocFks7LsKx2EcKcv3NGiCTHovEVvz4GMxZgonpGhFvwFCjSstLYRmma3ChyXeMvQHEQcfH15NwKhaPY3KJ",
  "key24": "2ixewJhJ8wMqg4a8V7TbryGvywHswytPDnwSauyVWMqLpuWPdthbHpfw7vdQur7LGH4ZrVdgy2SD7CgXrwygKj66"
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
