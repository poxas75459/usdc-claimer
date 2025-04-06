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
    "4Cnduqe1B5u3a4b4NKvphSZrWySJFiNTV1ds3fkYJPx58Xrw727J9Rsm6nj7zNWkzq3mjXhunm2x2XFJooyt2Rn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noRSPNqqcyxs4k2mf5YVSnSkmRYvwxqKbfcpwfJ8EtY9zXagfHgeK12jBcMcFTfJNjzqXDN5QA99wbyy1TKfRD1",
  "key1": "2F2PUN6vyN2X3V3D44NHx9nxdJu3qxUgB9q5YKVJp6ububzY48cUsyCUfKeEEYymKNqUCyvfCF8gMxxJF1fUiWiR",
  "key2": "5756fiYviJysYi8gKfoxVJ7ipx8aMH89QW139YGaspwhoXudm5dwFy8o9WXboaJMhiTJr1yVj8mLjFG1n8rUBaoV",
  "key3": "2XUdh8BUCqrBn43QoaWwooE34CCGJ926dznYc6mssqYRA7MSTCkYN7WhaWC8DgV1oVe8DV7eB2B74m9p6TBAxMTy",
  "key4": "4bix2rsVieUcA6aAekSAhrjtJK7t7C6jHQwj7AmBakZenWJgzwgLXREodT74YqjLZytQL63P8E27JDh21FJaZ7P6",
  "key5": "5JjUUDhxZqWkBw2QhUP7XXWfwnnrTCXZuPRgq2YDaqUS3RW2WLMz5gDQ5p83ZZN2aFCRMWptp3VRqo98vP2SVAFd",
  "key6": "4d5UxuoMVR9jy8fu86s6W5DRMCtxxqti3PxDHYvx4KPVwG649CJfLUPRd9YGx7b1UvBVjNqNpLPRxEXNWpFTg68L",
  "key7": "3uwigkcz8aq13VzrDaMRkReXVkfiVQCqRHUBeaTJ14961rJdTV5oMxXdhcasEhiAv4XKADkmC7wtQYvEGUVE9oKA",
  "key8": "2DwK51ci3YgFhTy6ZV5F8JohDfBgnHjiLDV6WwQKcGCPtCnEZWE1qdoBmSN2gbFgfznAi21de62pXiF4ZNfg9uHe",
  "key9": "2Fbo8kKASCrseNrdLoxQiZS1friNxFwMBe81DZtriqkoa6z5kiGjDzZb67wardnP5jEXvxLaT7ND89jFtb6ZUGQM",
  "key10": "5WiD4rc9di4iAAMoRPjjPurQ55QsKcoAZWoZTxEe1cbmFKRYjnxkRSuxsxdn7HnnBDz8Gp2ir2CvMu8ky8mjPnR1",
  "key11": "31vcRtVpFp7RcXow2r4GV2jHaqP36ymSn94HL1Wt9bRXjPCthGBvFgiXSC3NLqUm8RuDMQc9T8cZhLvKpV3FXcSt",
  "key12": "2GfnoPfMR8Ud2rgaCnLWxHgySy5m1RFva3JXYVyt868xhQDw7Bt4vEJJvajv9e1ZkXvGaT6xQMuJFE6xmwe1Gp7r",
  "key13": "4zZqhkauQmHhVRsmngZ1LKKmwjobymGGLkeLHpFYjR6LTFYkAoJ5cNzWw6eU4fNxeLR7t7ZEHjTYmgBn1Ns2xnVs",
  "key14": "5MustZTHeARiKE4ZYMWGAa4n5Z5bmbtE8qj5YkmBYV5FUK98DzEZ841Z4BhqzNVj7rrWJkVFDdM3vZ2N6a5GDA4M",
  "key15": "i8ZHewanpzRgr2QPF1fse6VZG48ehGDifFbmhrT5Fu5vhrtgjwyaRCeTNFrjqwCaxodCoHRjChNbCFa6gkkaUC6",
  "key16": "49YZimPjerzEudhxhPCb17bGoZGb3HEevUktxA7hCyFfhm2GCnXT4tLC8yBGNTCUwFq4nN7ggHPsTZFQHF9mejXM",
  "key17": "3HeePqGtPEDwjV1xxpjFV99wBo1g1c16vFVebVvGMzHhX4VAAnLgUB1hQPEkRRpMtX7uUv2XtcMqpd8e2Y7N5GVV",
  "key18": "frBnmdTE8CRfP3MH2GHCXLSdWXqoX2zWR2gVYzUmuqBpuLxfoZPZQ66RiL1wc7H4Dd6rZDzg3ZqkpEuNciQgQ2c",
  "key19": "2rNRSmdH4jiEFrCFVyLNDgB93hRkNjHAHoGBmh3SBBRzGufRj4Jgw1RaFHqefgWkYJTSguqA3KuoRdwn7dY54KgZ",
  "key20": "5NxASu9voXGukrmbLHhoRvAKWk23F2q9CiuKCt2VoUbFyEKNeLZM3F7yeqt2HTLeL2hDPwxapJJuNaWLcAhbFo3H",
  "key21": "NJsdF5YbmTGSQ4cn8psxyLPRWuuqd4vGW1PMBU2WyDE9kPoPT7HCnyJYAAGnGFih1Qaeg18PgtXnfa71TvTNaQv",
  "key22": "5mZNx3YvqvKZX5uwt7FsL4C3C58WunQQVompRDHY1JGGdjndRFMPdoTwzsvykc4cNMZyu3CHHR3x3SAtEqxj7gpd",
  "key23": "GiTYL2BJRhqwoEsHLfcWWuP3UXZvVDvSToYT4vJs1irF334AUm6qzUZZRFpTkLGhjaeqETE1Nxsj6fpjcv83fzK",
  "key24": "4PmgtD11nfMg6kjaVxY5fZikfEC4wK2c9rAQm1PopM3S65RdZ3qQuJAEuXekKD5xzc1u1M1pdVa7nHpbmPbXroy"
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
