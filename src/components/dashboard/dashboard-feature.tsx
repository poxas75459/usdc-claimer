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
    "67iVnPdE1g5rpDsanoJwG3yoNJQP3LiVj8zZ6LAh165xsVJnBPmyGQdt2yqGwVZS8CePihTv3B8qrnpA2wmQwCvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A9zv29oDP9EbsdMP3LYYrDCpv6meUUpw96FnJmtn9g2mbFha14vCvp6trfkkxXoi5EbntM3X1y9H2fmayqTqnVz",
  "key1": "3M1xhqh2GvbweDxotEkUJFTxgFPr1DSngZRibacgzaHfSL1EitDAdsdZadLrHfAYm7RgyVESByRaUFAjtYvBH6pd",
  "key2": "2BNZSXWdsutaXgSZP8iFdbhRvfywSr9NvYojqqoCiTiJsJhViL4gbcHdji2XrWtT8Q6JdgkurzQbwy8KvLKV9ai4",
  "key3": "5LGxU36Bp7yAvp9WpCEZcRXJNy9nsyEmnSnDVuhWryYBpBr7dLqLXD69XtvZeADDobp4Qc1D6vdM5kTmNG8mqCZ5",
  "key4": "HrEJuwRyWLHrbpR5XSwZPnbZEVkMy9m5ucB8DMPomjYotHvawZ9uztJUui5zrBjMS8xm3fdjKqRQg42tZUXiJNW",
  "key5": "23JpL5hsx5MijcocbithCwuttbbDWZp1ErTQhxuBkc7ZMG27fkyjs9B9R6vkX5Ws7p4r9v7PPHSjimTzT6sR5kk3",
  "key6": "4DQF39HwFHJVekJ3WP6nwApTq36mqV1UZgMhwpfoV6eFSRAVLW3vobYRGHCTvkn4QPPuCgveZRidGEobmGhwu8SQ",
  "key7": "4vCctqC1hsR448x4g72sYuyLp5PfsGCjWFmpi1EzSFxKXEqV2zweNXy8o6kNVkj7NPa9tL1UCYt5drYwoYETkpqt",
  "key8": "4wKwnEJACNxKeDak3KLgZtsnGXQvndDH6hz87fvLswGGgPDkAzFpoVBcvrs9jDkNxZ3icRzNnAwHvffDb98hBVat",
  "key9": "2tEHuKLtxnL4Ga6JejLwE5Hzw952jJEq7fDvyKAHXMxrAn5EriKFKoN3ATWakicdGHumg4Y1NfpQ3JBCse6u6KGz",
  "key10": "2nuNjwwQKw2CkvteCQtAaS4WvGQnZpZpGWt8YBsKp8XsMsgh8aUZLzngB4sNHcgiQHMstrXhJ5Shqy9pfyM75i6v",
  "key11": "4hahywhjNbb3k7N8LTNsTbyTzfnwuZnyfjWUU27nxpFjnxQ9muenLdZAqA34NWYXRVtYek2UZC1Jk8qdVjUAJ8M",
  "key12": "3feisxbzV65ZSD7x2nnCGbqbzFuc6v66qyqJsGS5FawmhVXSPwGvmUa5NGDGAnKCXT3cpgtUQCjKCAGBDwcCcyvH",
  "key13": "DKTRxcByvnM2gzuEXWZDomGPQ8oLsGmehrpkAk4Avah6quRFQYhS19H2egh3qPTFqwF7G6PKtNMLoJcqFLziKkz",
  "key14": "3MZG7B5VXgZX595z35yHJ8z67SKRkmz99xmTqJdzxXPLGGHomkjRLWVwqEQGprBf5YHy5rnf6uNCdudXeu2rgVCP",
  "key15": "3pPnQKo8hhAi13HMHM1hz2rUbwpyiLrFppLKizoGTgWdo4gdZkynN1oFyoWzPsvyTm7MVNBnhQ3DLC9MindrSt29",
  "key16": "44KHDXQbM6UpGoqmByUVPcGTeo8bF8AAueywJTMq6EeVNwfCkjFEJYX3r8wFm6HEe32hwnrCiLjcx8LYvJnmcJc2",
  "key17": "4qcfSWoCsbR33gfu3oHH9wSbp8QfqcU5C3JwEbVWyEfMrwZBn6Sa8k8xKt6U82czAd6ikb97h8puJx6SiDGPVK1D",
  "key18": "4j5d6vqxYBQSQcuu7Hz3pmhm4up7WZ221fbSztcQkQoRiRix7t136Q43dMRbagmT1uFz469w9xdHMowF2DAYuH8a",
  "key19": "3etrBhVHMivN19dLgzBX8jMaL3isqJ9pzgmZmfqs7r6kpwNG2mdhCf6ywMKLpPgnEhrY7YjKKx57kCb1JoyUyMRS",
  "key20": "g1rpytbQTnBijVXjK42GWFFYJfxjHJHbLwd72s3BS8q6rv3UoJTGSWuwPkjnqSGKk3Wc9eaTVmNth44u6UGjNkv",
  "key21": "34XMF8ZzTvfLRVJD48b6SCX78WJ8DWnWk514LgDzdbtEdHiHxMH83yh2hmTXTP4ziGPr3F2Y3i9QnotNBAdUiUcd",
  "key22": "3q757erWsMu3DapigEcTXLFskjQLiL3SfszS1xRmpTfcD15QZCqBwSAvw9BuFftMtkXrvs5ieytzFArhX4C9gAAJ",
  "key23": "3WmDtmYk54vQoKoP2X7WVU9GK7Sm2KcvXedF3bqyL5dKpKg1hrNnwMbTA3Jwz73fAcd28F44a13twMWuFXUh3DM6",
  "key24": "Zv87siGXnywXKhULn85dhNPEygRKbgs8wTUB7MYh8m2w6MzZNHx3cUZSaAadPVGD9LRjsarGQHTvS7bjf3KqeLR",
  "key25": "CrXxisK1m7XuRt3yVsbbA6P3a46QNCbXuQjQSM9gkWtcnJbaaHxS4r1CmSPqHsBqWgwv4NKLwJPjhPUqde3iFc7",
  "key26": "4z5zAFEpfJfvyKQ9HJvSLbU1mH8wvNYbYvuSVBsoZxQjMAoMufe4xtp7esv82obShzDuk3v9mqA3bN6jQQjcFM7f",
  "key27": "2i7EzSMMDCVQrAGBnr5ABcvBFyQroEz6yqjQvDgVr5JzV3YpHAWgWgwoyabeJU2M3w9SFW7fpUU48YRcD8UmRs8z",
  "key28": "ZuyFZ99ZShkgo778S9JMy8bs7r2ZosyJhSyzCrAp1YCJ4RPZvzrxZhPuXvA1BB92xej2GKorKgnA1GXCz3ZuAhA",
  "key29": "4Bij3bacyaVR6D3YkLofDvdNFWfmiK69H1k3gNdyEaDfQh52A9rUCjtEiwdWKWpVLHAXzgfxve8M2E1UpwG86xGE",
  "key30": "34zZgtZWoFmpNQc171iro7GwcSjvkschZpVEJ8XR6sceveEcJYxhB2xSDDrbcfawA6ghEpoHRmrRXrkTjJbzn1SK",
  "key31": "34kuU6Duvx8e4Q9R2ynhN2sTXUPYWHGMWEcTusjLRKv5Xfkkuaqx2PUj27XTZstCXKe91WxeXv31GfVYXW5VVB5F",
  "key32": "YJXet6S2LEAzFKXkPgfPEwB6gEXabXuEQxhS5HsaShEiGnz492SkjQEHJA3GcJmLZeE9chtvuUtb6reQGJgqZNu",
  "key33": "1fzGPY8P8sADLyPAaP733jfW6YhmvoBdHHFEfJSCctoxe4bNB6SgJTh3xcj2AM2MBwjM3T39SKt64RVHAaDvT6K",
  "key34": "bFC9aEkK2cGnd2ULmCxCYsvDDqx3zUzjxkG8BciuEiWLe3zifVYYNbL6c1irHRNRk1Ye3oEfjcopGTSQNe2HrgZ",
  "key35": "4tWfkeoK5bVwvds3HP6xLZVv8uFMA1NgpB6LrrfARJwF58CRtBRV3EfhHuvdNQbJHxPg89kBqToDUN8Q9dPXbwqS",
  "key36": "55h2Hkeok949ThSHMi1Vsx643msu7FwJ7vYeiiH1wkHWC6g6dSexsSMoTZq5AyXoBsaphyfsR7LggKsV19qT8NV1",
  "key37": "4Wgo2a7DoPf3XCKCzuwMb82YvX8J2ooj9LFJB92yQztyBELWhUHarQQctCLyoEGhb3U9DirZ2zMecP2wyBu636j9",
  "key38": "2QA9aVndbyx3PKa53LheChibsUpSJMKSMPkHLnvJhYfaswhfrZFpYwNEssDa6ien9g7T6kbnoDazT3NEGDHw7WGq",
  "key39": "5q386jtTkekgRBvxpAUsnpc9X86oPaqLt5e6izgQw5S3SSjdfKiZ5ConthYhsAcYsDxLsNzZFBKKnxKW5M8nMEg2",
  "key40": "4xLMZy5tyTP51sKxB7c8jLNHiYh6fsh86muGsJDQcvAic2jVpS3iJoqeMed6MEZ1uBkEwFrkajmdP8cTwpDvoLKe",
  "key41": "W7A1vZLWfyjf8EUpVdrMYz7HZHvtCMYt4Gx2NE9KqCAvPUSF6QgE7k8Gdv9Bu6fBEXmRU5Vq5MoHvWQAS59wFrB",
  "key42": "23DvhDFkRWP1z8vX1BDF5HsxDpJzuuw6fqwCdZrNLbiyMLtT65ToTwmuHSmJJttNJ2SKY4335yNz1XVghz2faZKn",
  "key43": "yFRGxhNFrhXSuwWDkXQXFNv1vDisFc1MturiNJEyTAn7atsTzz5VQLVtX2oTvGQvxkihZNF1A32kQcjyzrxstLN",
  "key44": "45es7XGSur36B1YhkVDZfCSEt8FLeUWsM8skiHZHRx4qZLPjMyBQFEPM5aGeudrHwTgw9GBbdx9FhA9YqBYg5MEW",
  "key45": "XZRPRcMDmVAtfdh3dgYstDf4qzZnmmNAsexnCW8Bv2kfwNgY7zL9n7vVWz7g4r3FbXyBNKZ8WSgFCLRrvaS2yPq",
  "key46": "2yn5sYAazkqkHpsWoyfDgJ1XaxvH4yidUQosfrtnST74KQwZD4K3qkBwMRoRb2gpVTWqQoCeZ2wegCyEYho8fpC"
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
