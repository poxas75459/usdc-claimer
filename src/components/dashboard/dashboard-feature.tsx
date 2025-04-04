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
    "3RVFwi5DE9FkUt6foN8PmB6h6tpZhBLS69XUdEmRXwMft8YbXc1kYBdSyeftztu8tEeMLBY6cV3tGRKpJK4WxBE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3N4adW3aej4jVJxF9PDq3AdJgmacsbRWHgB3et79a3D6B9rFF9yNzcCrB2WqXzFn5tbDnUG9j58iTK8rbWveAU",
  "key1": "3MA72hwLbohb14TSWRRzbe3pKs4zFQmKZpRGfJj2srKmDytrznPfR8vQbopvGnsSUexn6T3biV9hgwg5sN4uaR5k",
  "key2": "3BGRYWkY2VbKyT9fGnCzfTkmnpz37bbYA4S1VpcBNBVhgtt2RQsD3pjgB43eev1uJYgHjd8Xcr8q4T4E9iZ2br4t",
  "key3": "38jZjtezHEszmLM5rtXD22aqbBTLf8u3kwCKv66bCP5LhQvtyos3wvMNExq35JxEqxJCEKvUWoDSAdxW7pSA3peW",
  "key4": "4pThEr4BSR9dSGNvGwXKGcxKHuMfbABwbkisQdDykg4aiXc3pF6K3nv2ymjU9QyfcspQfLtBkbXjxoNLx98ESFze",
  "key5": "311zB5Da84EUwBMw16R1ACvyi1qNvqwKrqsUdMFjr5eAA6EHVyZHrnWc2DgP9zKc4XYHxKxTPyHDxT1Yk2i3j8zy",
  "key6": "65C42ZkeYLPWfMjBxdazLGkEpgPt9MGFxQLqKEhUpHitVYW4EXH7ykB25u34cEeRLXWWfetFo96p53CKXPLXFXg2",
  "key7": "53HuXWhaUx8svHoz2AQmZ9wa9GmNS9BC6s5P46oVTypyak5zB3G1d8PsCWGY63VL2TbfUcP1fGoHnCiMj3mjHqkp",
  "key8": "4MmHZTFegX1nhcqo2nQvPvWS16d7Ky3QhZ52dbCkorgbPhnZ86duEupa1Vn3hWg1ADy4yTjgemXu9pLQqRmBDNoY",
  "key9": "2pfXRTw5d4pa1x7gZcLruwN7oVQWTMqFqgZQ5aSDgdynL6ebW7VRqmugkCUBfTyYHtkYfstRj2SM71tX1WB72Cwh",
  "key10": "5e2PAeizZVfms6BEyVPpkheo8Um6CGdfjLMU7uns5phsnVqtcE8T54Am93Q2hrGrhNcrppBXWkfWpt2PXakcDe4m",
  "key11": "4pS2z6VhvasokkV9jqYie5pQxSer6g5rXRLjuKndwAEEdqCNnSbMwZMaQZ33miNmmMoy7f3neGAHX68L6W7VDWKt",
  "key12": "Woci4rJfHt5xhJtinx2GCLxGusb82KpHT1zYZNZ1GS3gp4cHMStFqkoKVz3AtsZcCZFPgb7x5Pdtc4vZ3Q9vuMR",
  "key13": "qGrvMJX9aHzPhEJZghx32juTGHkg2ooS11CcS7kFgcgpBrCoU2GCYqiNfHSqX3FzT3jgqom3DtssScnRDwhoE8E",
  "key14": "5CQFkpCdZfyU1A4AoCjtdALSj2CqdMVDnHuMrqzNkzcucGug3ypDx2s6KsL2SBhm7NpyaLyGNhFTXgt7uJioM1kN",
  "key15": "8SBVhud2R91oxNJJCe9qgARMgFCYjWN5XoJ3Bj6fRV8WkXL9KnaMy1nKAKHx1FxbX4ehDPEPdkqTeE9J2G2tMhP",
  "key16": "4617LfVqkySnP8KZa6ujcPndqESgVRZ9oFYHxer7UTCUtokpHnmzwZMt3AsxhaJJ7jWvSM4KfuA6jBuw2WkdY2tL",
  "key17": "3zwd2HS6GAND45dG3QBWhE9YZGaYafcmWWn9vdvR4PADu1X2Qby5EHDcNrFg9uNKhGt9HwdNPuazTAKvo3T6ZmXC",
  "key18": "3Jkb1v3VHy2xYtdCTnJKzwGpehX2W2Q6RmVim4v1ZJjQgi8T2GcJ97qzXHJ8rHyRFy6Smgznkng2wwBDhMH15k8w",
  "key19": "4uEYwAWHyz1HiRbMGw1V5wRxAftMtD6vy2ERM5jdSPskiCQ5mH5guhEYBZnzUPdHK2j993SsQgvQ9vAbVNdPDApa",
  "key20": "4RQ1FMEqxrjtJ8U4DYdoeojsS7DbPfMpnLhZ9WwbAZNBXau9PN4aaYYhdDFC3QqYb5Tv9usvBDUji7vHWRCKytM3",
  "key21": "3bMNMdweHs3LxKTcwT1TMucRtAsmPVZX1LWR4kvJdHghV4ouLZhEKB79NGbASb4HrNk1GYpY3KSvtx7E16iRNSW2",
  "key22": "48WAw6PAhydnXrvyQLP9CXrDr5M7qGK69u6hzH42SfFMAqpH2y5f8qMUk4kkqirN4LU5W5mBgMyZ78ggjsiH8TNq",
  "key23": "GBxd9WwrZhhnabAHHrwANwLubb421RxGVkqd4Uk7oKWzBmx2raUyNmYJ2ALhQCPbpuxuGArz7fYX6XCn9zhoWCV",
  "key24": "gyYEdV7Uujca382Q28baLweEgc8nYr49UWR61oJwtd3SvK5Ng1NuvaSHQ2ar4XeUJe7VYA2aqvUrX6xsDB9gF2V",
  "key25": "NfFiFXER84FxXqkMmypXQcWoooXqT52y8nVCDvDXsazWUMXeizM9qfK5gmi5xDtEikrMzDoAeJYpVSHERVK3E7o",
  "key26": "GZes3YXCYAZ1U23N4qCHnEdeq2E39E5n5gcm2os2RPDTyRf7JQHKHnbtbBTMmQfMybSaCJKv9eRGMC4TUo4Jwi1",
  "key27": "2Ag2ZyycbjTwSYqL1ZMzCpdoqGod8oSZEFzvt4PbYEXZZvHc6rUay3ACroMvcaLATxCWaTFN6M6L7HaFfKFMFXd1",
  "key28": "xdNPGYnc45JMvsf6JeuJVnr5VRhhsU8avTd9VZwpAyufKkZ3hFtyK7JRkYo6CycKFPyNBxLsdHALVE5ckDXrjdt",
  "key29": "BN4v75DtcUusb8ehamxJapwU6k4uYszA41TRX9bCz7iV1bD8NnViaT3JvcZc8xt4Srs1LLaABX7pdrCiA6Sw5Zk",
  "key30": "2aWorbkPTZhaERuCPabWG31fZ9XmnkvoX1cEAr63suRnPWYgYA3tVyaFpQMX3MfxdcU4icQ5vxzSDTLaNxUechL3",
  "key31": "5AHoQ847X7qFRwvZUmtq2jkbLFmDArt2ptb5fmE2EK6qLQ8SPtxfUxaYa4zoBCedDdxsRzfr3geYErYXPCq2j7Yy",
  "key32": "4ccmj4dLYTfcX1MzhgYGnYQ7vPSEPJ6k6RCqn5TX2wBoKK7S2i1uLXPDFsgGo3dfsrrY7XxNsLfapQtiDgTcEqda",
  "key33": "PSPjHGmxYNx2tXTk3sctuXK2gBztzmuNfcm8yuUPXrY7zcBSKQ8Y73x7NHhKPkYgPWrggJG45jkNPKqZki24KRi",
  "key34": "rTDWH9XCycSRNoS5YpRxy6CacDRmPoEWdbusctxUWmWs46jrse2nEgQVUJ9qMVNvnbmXdMibYEPmZpv2yaFQtFM",
  "key35": "3TudoGKH2UGoBYNxqFDv4FGvG4B3ioNcwd91LqxQqdK4RhiRJqeVu2fuVFuiYQjQxd18htF8vJmxriLj1jTCw3oW",
  "key36": "3q9jsH4NwdrihFkVLoRMYntygU5tJzBWg2SEsGfPFXWZXp3bRyrEmbndic5tw7ihSs4CmbPDHGgYC9EzsQ2GzyjK",
  "key37": "49x9fHcku27eof5hxHv2QwvDoBQibyHbSG3QY3GyroXmpJCyWFU3XHxBE1rRToc8GGZ2rL2qqqt8nXZtxtkW5UXy",
  "key38": "4PcuhokgARPHPojchJ1ui7wog9uFu8RmNRmUZAfPZQBQfG73XZLTWDFkTM5o4xeQQ3RwuTu1CbqLgEjZ43FGN7i4",
  "key39": "3FR5bfdvXCE8iAPAbi7aCnDJhLkB7nADR5CKQ54mdBJVr6Uc7LUo9rvpYVbzGJ2dx21RydhANfzpnbrebis8rK5i",
  "key40": "56X8f66c3UFtjB4gdSEZwL2cfAE21maWjBvBJb2F1S6tSuv88DHB1uzBVJ1wobohrRxWHhL5jHxnJ5HJUbK6fmRF",
  "key41": "4KDN9SXGeq2nD8YBprVcFpLAzawTMwHzLpLYq63UmSgU2jsMu8jbTUrphcdKRvkdPKMuhHhKAfwjwQP35XBZ3Xcd",
  "key42": "2hpRPdy7QBuAdxS6zNGgJbbQ1z8UYHLnfREbpaWNPmov2DDfS2LDPd18foM2Zyb2cbjE7v3tzaL4MHz1uJJBukg9"
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
