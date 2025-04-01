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
    "4C5ZSf1psg5cYyssqC7hJJqvFaM3g8dQ2S1XcZiS8W8GhJGfRuqk3Ae3kwySfeYhczLhrTNbq83obUBAxhMe3vtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1S6Z3vtTPgQQiFePKwMmSXv1UQQwBxcy1asAJDKSGNHv1dqtgTkf3hsjP6y2zcBqiPZ5vjkDqHJKHZyeNSqRRv",
  "key1": "3cRKETCEnB3WjqoT6UKnjRnKnqBAZjyiwj3ex7MGXKbvWue6aeEbecjeedriT29r4KoRbdPxm44dKZGHvWbGQQcX",
  "key2": "5S2yEP42NRTvJjwJwjcT7TVLNypKioDj1bWwgPXBHEnK9RTNRhdrprhhTB8mNanrJb9UfKY8G8vEqxraUYtpmi2e",
  "key3": "24FKPYwbBscjSGvnYHZYBtHnzjMKo6x792yrQv32CtL2FDshsJYBYGwT7QRGJtAerzByMvVZPjYCniHnjQLyo2xf",
  "key4": "3a5BTwUZazou4ivCodKAvhARQQNRg2WJSrsJ8F1QkWn6atAuwaUJkjBgcYZjDgktcSwLtTQUiqjefHkLoujLmszo",
  "key5": "1qThqMoSW2eKmcZjnaaZiiXDFz6wZoqt42uVkA8EtVjN9ygUNEKtF8tcg7qzRhuap56PYgkduY4d36WJ2ozxGX",
  "key6": "3Lc9ZxnJ7rW6NVj1QRF5tgWzRkmz6fUgRLxmWt1cA68BdtAfRgroDYzGsx9k66eiSXRrYt3RcXSMqWaPotrarZfe",
  "key7": "EAtNhKy1fcwcE2tr46v1UaKkujdyVUznu55aR5NGCCh5UkcoRQSuK4DBxgs7iFjfQVFSEtdmPcdLZxK8A6hxvCe",
  "key8": "58KSumQ5tk8gsTP1HugiCBfqxjjKVGnmbKKw7rH1v4e7ewbL1GmXx8ifUXriwpt3f64AEJDoimr7i1QA3zZ2Cx3Y",
  "key9": "57YGthQXpP1M9vJEPMrQ2pscJRpsx5AjEDgKcMikJLkFGYLsYygP22vfD3qx4bKznbxdfudx1PB4jwdt4JPsdnVQ",
  "key10": "SJXSVaLjxyxHQ1Cmu5T2wgXnxg4ZgecY2yBDqfmmW7rQ7TSezRD3gXjCFg3cWTPJxG2WCSPnrgCh3ydRcbnSw1K",
  "key11": "4xKrxVtAQhTHxjfKC44WwH4Po5Bvh2ZgFkdqPd6kZ12usLQ3iiVd6zahucaBKG6MXzcDzR88gx9TKeFcFCTH6W7S",
  "key12": "3HDM44Pi341bcoUxEV3a35ifwbZyvXgLYekjC2Ybbg3iHZfX6Ec8WRxyvFPdcD3DmQT5sJ6bor3tMb28tznz97L5",
  "key13": "RPYZPdQjPg4maFKXN6A9HSwjMSSRXiCWNVCc9jQK9ZuiAzLbbpo9sNKr1E2Zn7hcnfJJ4HSmfH9DEnnk7zgJdPE",
  "key14": "2LsKi1hmNZN7U7QchMt4gqR3NZcnH1iBZWGAMMEPGSeVNqthqJu64JfNb1pomYDQGoFdXjBcoMNNtEcK4e1P1qXY",
  "key15": "3QbXhiJLffn2z6MJRrBhjebxfHQo28wm3xAZmciVw4sgftCJ78zwykZHW51vkNRGxF6M6rSWq31Y8Lk2htYi9s4",
  "key16": "3KV2jNhuNxWduxBHtA7sxtnsCHKJ9dEXUec6LaMeFEmdZ7wDhGxmxAkPJutfrXRc15e9iq1hay2XRop73R9zZ6gv",
  "key17": "2B9vbWb9dCG68zZ2wS8Vcd3pNskDcbj4unZAoyjMAGjM3Zg79QT8dhgYMMz8om9Nbv6HJT6n8fG6XJcRDjnayoXp",
  "key18": "4FgShr1Q6xFufXjtUr8BpTZZqG6ovwJcKtqUJGWbFAFZcH11MngUkYvqL95KPkiqC4AjCpvLYTdDNXCNGkYcXktK",
  "key19": "Yg8qHRgWffSkWUWNrGAZoZbjp9DF9U8vgLGUAu6kdLgoZq8oXFMG9gUeY6LUGjSZ1q1wJYWUBu87mPvN4MdtLhX",
  "key20": "4GQYibMDiEZgEXsiET9d3AXydrkgD4MdWUoWRdNeTZA5jHL4Ai17fgS1d3NDLvVKsfkBxrM87KcChJUhLfSDbJXA",
  "key21": "4W1apt82E4eBKSrSQUkrFj8nYbnQLcXWu7v5WLJ8KSPqQ3wi2XV3U4g4odpRHm8yn7j2S3mU93sc9CWn48gANyLv",
  "key22": "55ouAx2kqRh9wRxH5DyQG6rcjHHHgEm8Dw7tu6dr9GcbBG5VonC8XtrTdu6nuzyHu2Bin7m1zP3ukVit7TJQsKAo",
  "key23": "2pmCF8Ma72qunM8DfEiYqvLCtQDqh5QZzPPEqxnMvDA9s2BchavvM3V9M4xfzdCVdosCakdBGoWM2Q4Ebd3JN3ZC",
  "key24": "4Y7jeepoM95HmMfzzdAr4Uo8ery2c4TD7YJpUvgfB9hSLhEbGbGGEDM27oaq2GkcWJYeXNsGARWEad9UyAwD6kV8",
  "key25": "2XMZFuVvof7qGEp8PR43GqGX9yN5Nb8F4HYxVVXqFn7TeMmuDcYNevvjj37NHSw3xGUApBdTCBpC9YXwF8nQvK1u",
  "key26": "35UB4c1tz3LVpxHV9ojpMbffdZj6yE5tA8ZpxG57jJzwzv6NrieCdDDms4MBu11YE33zB9ESDag4Fk82wSALwTUM",
  "key27": "2SvnZ7XZhpn3yU1fC5QQYtTAHsKi8TpgaS3gXyvpoVqLCoKZpMpUPNNyetRzzmHDowK5qFASZDGmCNJ7hUgfQyuD",
  "key28": "4BvKquGCWmmCNcx4QGgt1sXb92tQbUbbgBdvxu8njZ9E9Rdk6cEiZWnzJbCQHpF93sWGVJNRQceHGL29KXum9GkA",
  "key29": "4jdZf2WimrZzF5yhqP7mDtv3sBvgXenZ6UdgaaceMT9ZpSbjFtcMmSp6So9iB3soMWgPsQkUT9f3z4dPEckqUb2d",
  "key30": "yWfTzeeFABa6MVHgdADSxMqjcLwHT6hQH6LA4FbcfYkG4U85QN2RWGk9NWP2wZSPWMSRRmwEoj5q12oMcLRgpkX",
  "key31": "2YD8eRpUj667c4xi4fPZoQvZFGHAJLSe6aExQkhnV2aREBhXUNE5cvVm1rkTyTuu6RdvGJnvtZTTbJEGBLmXXHxM",
  "key32": "5YLxP5VqCzjsxq2fT6qZE1EFuKFxkRtoFNwxcCq2faLoix4zji5V3HyA5KUB9y9nruhYWW5jSZZTHWfVWPY6wjAZ",
  "key33": "QFF2AmHuj3zqvWXZH4Xt4JQ9myoxDBvphqZzVnUrqGKEZ5RfSXKgtGoQ7xjNib7HEVdR2dR59cCAm6f7Zba6gWY",
  "key34": "3Atia5Y7YitcN2fwVw3z8x38Jph6EU1BJCeg8MkMV6aTHV5REUh65m3aw2ffM5rrfXgy2PiNk5EXNw9DKKvE5XME",
  "key35": "63EFrkg3tEyMDfqzg65srGLTN92fm86wKThMLixt5Bw7hrLQaBUGURcnsqcVhKQoWz7KKqUCDY9C4FEdsLKMPuVa",
  "key36": "J7qnkuXRLCQd2AKnDpeGs7bfmZPcFvZmVCR98NpSy3cN8ok9k3CvCe9rtDRb8RrbCXA5VBsT2hPo3UcAsYSUw5j",
  "key37": "5cdKDNYFEyfQFN6JQz2Vwid6M6PECqVGmb2TjmhUjGvWiBNpBnsSophUfYqQ9iB9ZTniE8o9DRwp4UjZVheRs9cg",
  "key38": "5h6UBiAMXANN19rPr8HY5BesBL3tDTYxDEYbMTXxrKFb4vMhhQuChs93DrkZwbB36AUKX6eRuMA2UzzjxaHjdagw",
  "key39": "3r2DoQ9Cze4KcbLoyyuy6MK2HKqgtymkWPDGrDHRRAJe2hRGFaf2JtQ7JAMgjs1smdSXXbYZB3R2FCcsLDEK4j1n",
  "key40": "3HEGxZsYHpp75vvxXMNfupRg98LTcMs7qUNHYVXcBgYMEADS5F4FC2Nduf9urieozj1AeFSaVR3XzQhcLJkSanAB",
  "key41": "24HpuUapXxyKNjCh3torsgHcjUv5TzNCcNzyAt9KLU3AuGUJX2uXVZTQdE7pjefid7A2LDwEo4JMAsTiG1c8WSbG"
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
