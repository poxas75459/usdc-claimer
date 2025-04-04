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
    "2hJuUJYkNGn65DhUkmMgB2gXVZMaRG7gUjeK1FUZCbRFd43KYeYNE6vrTPfa2de6MTb8opcGeUEAmVU638SvrBjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CD3YNhkg7NaqXCRCzRwUrdzyZapNpdqepxZqtPeckZJJWCacV1U3WfVBbSugPgwzsBzy3wH7uFqFE7miqaeACU",
  "key1": "5MkZwwbm6zU9xe3roiZ1MpSJqy7mxgAnoB3UxWdinNpYR5pKPe5sSnKfUgD8WvjSgcuJYg3XZUKzMHNXRWtpb9fH",
  "key2": "SnvtuDF8AChrVBXysVNoFWCfiA1HrGv9ym9n4KGbVJC3ovdSEGao1jovEYvoqVAn9Nhuvbrff2ouGiq278SimVu",
  "key3": "4a4SRD87XKJTNjdCwYMdDHjKAyPNCYYPHnyPQo4TmHzMp4dbndax9HECWsUiYWVgmArCSaKXvSEoZdeVCGQg6r1j",
  "key4": "5CbkdiWWgjWGgS3gNZ7byXEDspop5KsLQkH35sw3PHGJJZM2gAToNm29QuH9M3jnZKEAqdnwwb3PivCCnntj4FND",
  "key5": "5fevnnvo7i57HPgMZQbxdNP3SystFVaufteJBj2o7kieYLcwBRtkJDHMzboULgctNqLzeDn2FvLD7sJaGADDg7pT",
  "key6": "4VNswtK49KtU3EYaMNzaWB7Xdhq2rLfPKcaG9aK1KfFuTVspbYsJ7a68B8FLMQevreEJCQ7V4X3V49QvTmkCmavN",
  "key7": "43kcuDdj6FxKz5XiNXdb6UfKfd7gEcq9TrMjWkBJxaqokPF8efLpwNvtCcag598hhuk2wd2hG6pt51qN5dpHrgfn",
  "key8": "2z13CgjFmDyHqmT6NmrJ325hWSwqk6xzAaDpKsWPgqNvx8Dcaq4MNhZzmwP9zVvaKrVvf5MHnL2THxqzkWTkFqAg",
  "key9": "4MGMr4ygKKugZGzRfxPSkFzHfhEdxtY8LcdDrTHHohWBj9Kk4uiGp4vFGBBKcwLSDTjxgov9SdqEmuUdpMwW5fFt",
  "key10": "23N8iXjYJB85dL54BY3h3cEYT1fJRqwGyEqivXE1zmKRqFjdeq6cceddeDMSAV7Rt4Ba4LeY9q6Vtqfx1tPYa8Yh",
  "key11": "2ybRthh7mVn8vgFoeaYLZVmUonTzVfAVVZbFLnZ62cMvfvvB1aqkrc9FAWbkFVWfkuz8fbzwTzNQoWu4pViNG2Ts",
  "key12": "4uJqYpUDJEgPrb54cQ8TqHWzRBm5XDs51KNqqiq3yh7wfRCyJ8Fh7zN4dK1iSn75LqT3sAoK1UYZM2AvGWkrKkVk",
  "key13": "3iGssqdL384HYuoyTyBdbcn1FoFFKmGhmZzw7RSwTjPmdicnbHqTgFeMtSbmJkTQTrA5DeDV2etTXUXe2dafP8WV",
  "key14": "5YSm4fbw5gT2PQhswq9v6tjAy1Jiu2mYBm9jfb5mTfU5LaPEHTXam8oCH3MDwKCKNb4Rv3e78TNx7eQmzbFZkimH",
  "key15": "3hwLVsgtLtuHbJgTubDxkR4qwLPqreDvfndqxriWJPWMHqU5WgfhTmXM1NwyzfMFw1qrDtNtqwvR8prqG4B7HBeT",
  "key16": "31AMycSWFzhF68cHXKDcwndwHLWuaS46tT53aaz86y1HqCj2rHUyRBfyRuoJTMSJB59ik6rTsvwT8DwAAqLLEFZD",
  "key17": "CiQTUuzhGEE5dEFnVmT2KHAu1xMd72mBJdKmHQEUfk72iHY3DcFcX22JoojnxwcNrrmif9Wd3oG2D6UPTxPni3D",
  "key18": "4pmLFqCUAyPdbkYpoufrWb7BFS3YZWAsEuxwakvVwoYhXPCz1uX1iZ3xXRwtVStQMMEqiwhM5eGyiZA5NJrEVTGE",
  "key19": "4XKk86PnS9FPba9vfoFN7buuEwJyNW3xMNVFC2TWaZb6t92xmJUKkYPxuTGwFcid1fWoBntTeZ2SycgnVK1zouSk",
  "key20": "cBR8ThSyh33uebbzqQhoxRaExiN9LvYxmYmsVR8TP29kRMEXwvXbBcE5tcFmu11YCtVkqYcHv8i2wE4NuVcjkt7",
  "key21": "4skK6519GWUwcnBQfYt3bKbSjzyjLcBDncx4uyrnbGU9W5TZh95hMFgmTuVWV9buDP68xvvUKSMyZSdSydNuxfPk",
  "key22": "iomR2L9o2YuzWPNqiihF3aJTaQfSyjvDgXv2fKxGnXeEWApzwC3VeJMXcc2uy8xssCpGmbXdPycpsaWCrFw3TVH",
  "key23": "BoYAbhbUkYQzDde51khkSBN8NM6rWzeWX8rdNTDjVGaBbHdfnSSDMULiv752gErtxQbit3tLZeoqtg8nc2RUPMd",
  "key24": "RXSXi5qimx1oDDiw7sehSeBAY5sMkvV4fsGSirmYtczeNkX8sUZFdLfG7CXXRLXdTMQiBFzXUKxTb8fGdyzU7pE",
  "key25": "5aTXo4JTt3BdjBunSbwHqkApZn6MBXjysq9RhYdktdJf7YrSHd8w7nwevFfkZ4XU8HEnXEQhZyZM1EZh7wXpTh7Q",
  "key26": "387LrCbWw8MEf2tTw7kb1spZn5Ct3PCwqXRF7kfMuGTzzKQ43JMqFFMggWtxnikQkCV9CxUbMduNxGzB2yZy4qMZ",
  "key27": "3Eo1eWVvHJS7vGKvkxMMWnrEqp5FE5FqRcY66erp8xTLiVmZNmeJ5GS79wcnD3UrJy4eTo2BTKQtusZCQYhyuFRL",
  "key28": "3yYVy1qq53PnnCqHCR6xikHpBnWBfQguCG6pKSJgeTt3t7gZYEHFdkywy7cHQ1eYMX8Y1wHtFTFt5jAg2UWeAoDW",
  "key29": "4VkNevMQNdDoUHrE8zxusANjHN8VSgqHebPdXgURn7yJCtfF1MFk3ny9gCeEWZRoLZ1HsiZJEK4k9udCTm5AcGWX",
  "key30": "3o31Kv68kiBeGduXNEereQjGQhaBC5h1EX1HL2WeiLiT8TK3viNVcULXXmav8S5EkKePNjvngkMfq7qkqo13oUU",
  "key31": "2MQ2PUWyXhbLquBJ1VDRhk18NTYbiD3mfUnxWpakhCwkv7YERnV52GrJnVbfZGr1aXG1GkhQ7ympurtmfX8oYdXn",
  "key32": "3kwtxv6PCY63HjjuLnMhkKeK5hhcvR9vUXbwjALVohgV7fd2koLB1yes77M3CLWHjYskszpveVFNigDHsvM7PPsy",
  "key33": "5tCe8ZEC69mPM1xLVHn4G6TVQsrcuPH9Ljydz1HN3PNRWWnzp3Vcasb1vwZTvoQ7MAEHc5qe8PrnrG8UJqUjrV3X",
  "key34": "4asgT6SjyVeGvyExtjQZ6YTwnXNJDXjjEjD1wpY3SEC3xv5MfZZTVQKt5s2vmqMEo4VBt2mtg6iTWPV4vJ7v7XrX",
  "key35": "5fF6FvoE8QkvB49HHZxwx3KfLyS9tTHhQUSYaVmXLhegRZJsfTHUG445PF1m5M7KyYELaPXqWVKcovDDbDofnDuF",
  "key36": "5TmTUcJK7g8t4qNRd8tZRfCJWALcE7iThvf9LHNu5E1eFw2i5wCyodffnC4EyqAziR5faWVyFLBgRyiw1TvTsQyH",
  "key37": "4tk6xRMD6cfdxwzxPMXnuMovW2upYwHUzQtTyKpdwHpS1VyURDDvnfk2kwc4k1Wtkqk5baU5pfMYTooXtMwxRFNk",
  "key38": "WgD9vvgcxQtTnj1qEzGphGJpfVcWN7ij4uoVX6uFaRhb7kcgPVF6f7cjwCBDrEkgLpbpXt7Je7mtGHkzPMKSZuu",
  "key39": "2rhYKFnw7VkeB4aipBtG24h61AwD96iuuoDmQ7oXCS55mJeEh1Q1bvTmLeL3tQv9AyBv1udFXcCnpnGwsrLCrZYY"
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
