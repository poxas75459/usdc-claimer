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
    "2FaLvBxJkJWRvNPtsiUedJQBUgFkpAkQCqSPtjZaK4vwcDa2FWsX5QyhjBmRph4NJMoVQ6wPsMyMKMJyn9ThuVjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahTSMKbDD3hSUUckdUUxKjQwzGxaHjbbXvTkvi97h1x9jwdMagX983SXFe3JhQZMUPdguKJELbL3xNvpGgqRLJJ",
  "key1": "2MWpL7KcL5WAuEPjd9uFp3nJtYuL1weGNA55KEzzJeUaWovQjVTFnioGBTm3pz9CD8LR9FyfpBVE2tCJyzduqLhK",
  "key2": "ji415htWePsTEvp4RV5Xap2BuAwzwSCQatWXbbUBNhbEgs9quTbxMdaHvxJHbCSuUzwQ9Hi7ZJUo7MJYCKnstQX",
  "key3": "txqLcfF8RgL3zq3Yd3Cn1MSoBdZQ9UHwWCupdJjPDjxWAVQgh9kkykfgAf2Phcg2v6R3fvKVU6LBfpnWBmVGLVR",
  "key4": "gURMDzzKafZU2VkP3nXNQisyR7f1gGjsNVoYLiMPVpUcQLXjF1gu3W6PtJrZBiqDoQt7vY3eFHoMwzwQTumytEU",
  "key5": "3Fnmmjs5cVCVLvgKaeDRy5G9Q4ozi5SUuYHdr6Apnw5bURGRWf8syqhHQbfPyCj6bkDnXmyLpEGYDUWwsgp7wo6T",
  "key6": "5wH5qxJPPb8mB7wBSVVs6noTktcPqNayGUZ7LNpz9iZ1wx7ogs9mR5kjYn4Szw3UF3xA7tH4GrctUYSkqQq3t1H6",
  "key7": "56M95vogDBEvPef1oXaPMoFYvhNoa9aVh9awDn2psCZ3UBMvZCQz2cwAPaLUrSfGzwTETQhbRRjhChuVMYV9TjVx",
  "key8": "2oprysiwiKgjuEfnEKTbj1AxEpBjFmuSpFBh8DkE5MmmTWfKpuiV7KC2f5Ckx9p2TSaaKjHQErcA8TFD82AfPhxd",
  "key9": "2LwtrrcewhZbpnB42yc7EtansKz9A8HZVSFTPYayU96c2UyWmhp9xu72ESDoDsiffEFoBk7xtpGDKDRMgoptxa5z",
  "key10": "5JvantZfdLTXpE9gm3AgpsLuLRibj7WLYZyexJ9v1pP2jwdEyf93KdSvDWGaQhWUoicMkukwu1LWg6PApsVdwUq8",
  "key11": "2eThbB7sTmagiPaoc7tddSYfVJbwxzrZHtUq2zCVdQCYbvEVwrfJikCUdZYn8d44DvRbDAtYmUhAjJWEFdEAQv8w",
  "key12": "4qoZUseLbX4xBfwSRUMBev5bve2EyHDva6Vn2vKNJzbT7GXtX21a9pDJwvdti5Y3kSkuF2scwQore2j3DogEwjky",
  "key13": "3mR2KMCbo5WJczqvPUUcCvebY61naTGu1k9EC3m2EEzpyKpuXoHSQPAVyQAwpXLZ1PgUVc1C9Er5681fUcx1zqZx",
  "key14": "4Cem1kzC3VaU2BeWJPdX7kZwK4J4Zd5pnyKQZPsABb9dASq6pCUMESMw6k5hWh8qUdbXbFBr4tXMP73Dz4f1NCGz",
  "key15": "5Npwr7ctgRL51Gpj2M4xd8S1kwqitYD3xGfbmtMgLz6n6Mc4TGh1XwKQ8TwDfDLaddUh3HTA3rJfGri48hWhAXcw",
  "key16": "3QDJtZpFwgz7GYrUuUidBqYBmLLTeRiEUzwopMheMftewTqhSt3KbBM2ZEM4AwSsLYtAtt7dV5Lon8qKyRATEAzh",
  "key17": "4MDVpjy3hDC19HgtMPpjLiq5Rb8GcVg9xRRDjcoUwAXW65VYh34kxe4iBHVapSZ4o1WWAqgfSnKNNU6bmbXWiUWg",
  "key18": "3D1befLqzuySJv1ZVsTH4ADhSmiYmQemDVwdiB88Q8zpFwxZiVDmqDG8gz9VNf5oe662woLhQKzMpebaq3hudytq",
  "key19": "35AtUMw1E98wvSNESbYTn5GFgpMwYYvtpwmfeS1LLN2nQSjGFcqtHRM6pwYQLEopfUqi3HcjjkrtFcnUERiPZQKH",
  "key20": "3aWGN2noeQExaWfzsufgszbGZM1LDGMuYBQyTR1G5dpoaUR1VM4L4K5A45FNv1pGwr4qeZjCHDz6FMYNoz7AH9Er",
  "key21": "2kYuaSCwVVHJrKUzrFFZod1HEYGaRK1kWc8vSdev4Y3D6CkjSBMT4wXp2CctdZncHnFCkqiYUvZN1n9ZUMCiWHJ2",
  "key22": "2r6FQuouur1eDuHGEuzituYc8EiWrcazNcHBPyUQ8L45BU1XiPCAFir6bH4Jdc5NPorRXqNnUKiLxzjXJcmp5d2A",
  "key23": "2Zc1GozgxB6E2Nfa9EnEM1doffsHspiVdq8AdEQLWDagqxbhLC4TgqrPcqAu9trtWY2JSXuRhuD9hFzHfCRCXcpC",
  "key24": "46PC5vbbwhYi3m1y5wZoyhsh7VhhpWweLRUasfYJ4LQC3xjBj1yMcv7dwCWNWg8icU2pdeA5wnxvuXyDPPMqXNsv",
  "key25": "ApPCNq2PqQyJadXQQ45kjZVaN481ByeQJtF8UShaUmw4MK91V6hoRHZrAXceWU54XcEVqdWMrSDDVEa8r1kpdJj",
  "key26": "2CNLidYqfTMhvVpvTFZhjfwtbQkKhCMrzhR9Q1vSqKEk9icJU96atnb74M571UqVkMSJ8fWzYYfVk6sP2hQRadLk",
  "key27": "4RhWBkC4hsdfwvc3iEZnwtPwLSWN4RKCjtLGB1vQw5hRyuzY4D7FBmBJXJstZkoWwyGk1384R7EUZfUA2GHUSV6W",
  "key28": "2JpmHS2ftjEqGCd8ZtcKDDNcC1zGhkaxmW4omgVGuE7Ta4fiCuVcawc6wgLSY2SAZfxr89hh5EvcEJTXq9etEvaq",
  "key29": "2LLoKDqrRcA1yK4r3ypBd8GXdXmKhAgZbVAaMufvHLKySy1goTux9QRwT7FxZ9evrZiRu4D5WfogXjTiSCuEopw9",
  "key30": "62bX1wdGBW7Zrj2sJh8TJ2kp1UGeMYm73dyfRcxb6shJNZAbtY5RC9BDPyuHATgeun9rUuFpnBcZgBsnzP6QgckM",
  "key31": "62Unrw6Pey36k6V5MjVvjV8u3pM2TXSbrBoYjgNihsJh8S9mpgC8M3LSJeeeLxasmCcHwpSySb7pMxy53ic6qbpR",
  "key32": "5P9LNs3Dd4tTVx7VesBdv3sX2eEHH6uhBFnLxWb2MKZCk28aRhqthmnx3RA6PHPfBR7LDmtpDttzY7NGNeSvXQnp",
  "key33": "3dzsVCiC2vr3x5zkkuAhWu6nT9qaKiE7DqS1beKR3PaZL3vZ9qAWoBAScbRBqPyDpSZ394jHBNYJys4r3feH9o16",
  "key34": "7zhuy8tpyxYxFvS2q7tJ9okPT35Dimr4Lr6nPr9eBiSbs18473zH4Qjsg8L9QgsToZ8jDaYw9njN7cMAqsk6w8o",
  "key35": "2ty7DvyiuH6aKjdD6jxphYXeLG8E4Ta9eZCR42TCh9D2oH39VRDHayxsct7oNg1EuuE6Vf1hAj7QVSUKRFYSNEAG",
  "key36": "zWqsE9DBTqJPrwf4JVNfzts3q3LE4MQQfMiHhr6ZmP2Kb1LgCWFeKw42i4JpEtn7T1cvk2xmdZGypwxJsZopWFo",
  "key37": "2zJdnywSDEST3mfmZdYVBxETnJ7pVMP1WYr9pU6eLV2arLW162bPaoq7FSoxm71mrS6qpysfdzPsEHzgJ4u9F4TV",
  "key38": "Dr2891p7zrcgrmpXkF6Fdw1J2oQbR1jugtxY6fA9gzkcbEaUk55hkiXXsv9X9JgNM1w2YvdPxU76ya6LudpL2FE"
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
