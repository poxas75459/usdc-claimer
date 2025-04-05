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
    "c5i4Lana4GKrZArkSwuBx1e3a4Jc6NSTDmQ4w7UCiokqbhThu9QTn8Dpzto3PRQkbxJWKmxsYQp3UvVHxTY9S6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38kFkLBxda7EFiacdUqsphMioeo67Wvm5u82CYZjzJbAqGUa8YJRjB6qtEtogD3uQ3mLqwFWgJxsq3JK5Cunb2xk",
  "key1": "qpLqVYR8fidH6SfoFP5p8BmiCK7ePzsspvy4xUQ8SvCk8VUeDNArjtBcYKto5DL12nhjKvhicTb9kneZXRHA6r1",
  "key2": "5CruoXQU6QsM3ezzqvpU4U69omS7cYxQSuCwZVDgBZrDyN6Z3hpnCQ7NKk7KQTv9x2tMb7FsNPmTZbsPZgZezndR",
  "key3": "3b4vefmhYoNrAgmnRW5aCBpLS3GkpJzg7q2beU5oE5YX4cL4PHCXJLWRctJw6qyLPyyrWy511Pb9HuAJXvTyxEkQ",
  "key4": "2UqENVYZSqKkt8bbX1qEKkJYe5XV7HEyBnu3w3vHwyKLvYcE9VM6LDN6Db5txRn1o5neacpe4mqV4haFnZJhW2z9",
  "key5": "2P7qXvjcU6wpyueVc6uX3eV5MB1fj4N3zqYyw5veqJbEhq7AELgjSuUJj91jL2MNCbmsXzJhWKs93YeAXmBjxTS1",
  "key6": "3vko9D25otQJqcU636SAudLHSB5XHCnHQQ4BP8pQt7HPBoJSyZzbea64hhHYbN2avp8DQmBV2HBPueNat28VakEL",
  "key7": "4HckeaPuGAC633ZpEnB6oAsALZnitJre4EEXU6jcS7Pqz2vbUT4msMDha6D9DfM38q3UntZaqXEHkkh6aBBDLPfs",
  "key8": "4UXhXVcotti1RnCtjbihiSrZVUaq2is7HJGHfPa5HnyTjingKHJcPbo5V8qj91XPyAdNwXsZSrqBzapm69ncvNVp",
  "key9": "3NoCtuN3jQdKPwxr8SVAkgDbhGyS3auFfoRyRGLcD5M9PGRgKcbDkTDdsZ1TXrGjkT6GYzctkQj4WxB2Z22ASWie",
  "key10": "4U8RnqkUPahDuMVUH5twru56UogPVivEL2zUUfRSCrBj8q7mok9zt1c6y9C3SQyAoR3UxDjkC3C1VK41bjjsW1sk",
  "key11": "xKZgnXYAVgidK92hk6wUVy6AJTbTijWHiXZNucrky1Xdcp2QRboLUcBJZV5QTgTq885X77oaVVo3g9RZ9s2Xmfk",
  "key12": "5NWrrZvznHhb1hBfhFnHRAJyBVVJisovLR5QAWoH85gFgZGQ2Y8qrHgr4nEq3aKkqQmgUugRttPk8gedfxsHwY8b",
  "key13": "65FFyv2y1zTVwwcR8VFfFeaWKZtKZkzMLzuiVLsZLFYRR3Aq3pbhQ2T4uKscNd3FduoJXTLQUBiirbfQjZnzYhbz",
  "key14": "5qGT7ae2JXGvyxWYdgYjBZcqENNVxVXgk5DeE9gAU4QXnBBUXTUjTXed6xiYwffCoTXp5GNG9biSH2SRzEck5oqq",
  "key15": "4pdCTf2oRxz8x5rQYt3ndcLQiwAub4uUQDMSQ2Vg2by2Xe7RDch657Pcgr8B2P6QUCTmvapAcgjqHV3tokZfvmMk",
  "key16": "2VRtuf6bk7TeQ3LpwikAjD8u7hwRqXr9FuVC6JCatTnd33qiuaudnE8t7r7TRex9rz9sCA8A5Zec5VFQ8REfHqie",
  "key17": "V46Eb9xvdpujep4sQYWP1WJKqDGuKVEMRdo6R2MRrMD9N91rmv6Ekw77VGz2woY2wNMSsSpWpaJYaAmkV43mXBP",
  "key18": "3qaz8ejHZ2pQzeiizuJDgo9YERnYinY1CNevBWtmrfgPanQ2WRKFRpWWWxk9tcFcGrQgkpxku3qG33WMzNxkouXN",
  "key19": "43rnFKZbj7mWcwEMcx4U3z84RWEfsjJrgTFUTZ6k2yoiYbfyUZeJn63UpuPndnrjtnYEdiNoK7czSYoWrWmhqtR3",
  "key20": "3G4UV7i6q6wE1rK7bhtgwSHZvNuhVUuJt7RDyqFgiG5iGw4QAhbmAFuyrYf9SfvvE8nZx2417ge9k6axQu3kZt4B",
  "key21": "4kdouVNikjbgyLrj4HEecqr8vHQEY5bCMDB7a9c18xvqxhb4jAB416go2W1y1fCKko88v4T8Kh6ua48dM1YspFFf",
  "key22": "4FMhymPAuGXsVWdAVAxFTF6DG72J7JUyyA5r2VqiV8VTzBoYgvfTcQ1ucrCxMXVWRi5GgKdMybWCoMm2TFQwfgwX",
  "key23": "ptTKr8qBnKqcg8U6vGn7UHFMdwZeQh6zyHnj6Y492421GQ37YfpSMkEMAuN1AijhtETkGo5oe142Yt4RZe9HYoB",
  "key24": "5uJd7Bm8M3yYKsRW7uHrYkzGXxt5HuGgvGF1cgs28XyXbDQY1jKMaZiqcmjPuBnPrmLynG3tLovvr9X52t87wXih",
  "key25": "2smAmsBdLeogyZciMHeb3WyWbHTusXowCBM9JQYg16fVirmsAoWM7JXT1X2ebutDHwGCCjuwsstsjECqkGUsFG3j",
  "key26": "3FQw2UFXNMq2PWqmH8YwgaDu27pVLvVVfqon6FTYMwiRjyrTSrueMc88TnVPcPd5eiZr2m61szcY7r7X2xX2yBDJ",
  "key27": "kZcEiMFxYmDdTvfq1JwEETKJYa8pxA2MVdRKWWeb3fP2Qyb2U4hFCZqGwp7Sfdv3eYztqDtuCRD4c8bbTvL5VAh",
  "key28": "44cXx4kbXhbAXbG3dPWuqCVsMb4ZMAs1Vsa2XMc4M8qgQwubU6sDrt3yEqHayRiKAjEvVaCE7wByKzibiASgRgAA",
  "key29": "5brqUWgcY34QpvewXiTtChqKpi4STJ3tpyz6rYuJtLVsC7LSScm4uZd1i5oYJHpLZc3rUmEXYfpKKqX6weGT8Ayg",
  "key30": "z9L7aQ4e4i8mu3fMJfVCBUdtc39X2mb91iA2e8r89z8wscKG6JgG8hkNN2AcDQ3obuixhqxwCp6aGd4wfdF9ewc",
  "key31": "4579Vc3FH2t1CgeXbqDvvhEzfy68F79uauYt5PwUkbMAQBpVcpaKAC6VTugTEreXsBjstSQa6zkUKSH11j6VzjcB",
  "key32": "QhAA7bbaiBHCVRj9vVRXv1PngK9L3YWjzGeDanFiTwf2uo5rmMJhRdNN8tP31oR4tznRhiWwyqCBt2AjMf6aTyB",
  "key33": "nBYkix1YB9noq8yPeHLKtkbp7eN9XwRxqmzFdCsqQqAN4wHpv45HMzb5ACLK2hwLSp6D1TGaNDMmZJ8cF2hjAtc",
  "key34": "2znozCdnT138TTksv2aw8vAE55PVjyjumvgnJStFBF7WCsR8rhU4ixdUfMj5d761ai4uC7rKx4KzZNHtbfA3rYQ2",
  "key35": "4dCBdZC9cCRqLMHEYPpSY2jvTPbhont5hC8PWtUdf4qgU6ArdF1wxwSPLJdFdN7URjaT43Dr1E2h7ThU54txhBzk",
  "key36": "4CwmnVLDBPMjgJfMMR4TN7r6o3YBAL9qvQa7gEXATyJ74vKjzn8HC3wFeEffpjBSdXB2tPoSXwiwGjHSC63TVnJQ",
  "key37": "5XFk2fJ5a9xC8Co6NZsNBQzdz8qAaGQ3EUGoWY84SaaKsseaixTdikhA36vovH9Y1hc4LapA3AiSRJPKV5yTFFKi",
  "key38": "A4F2UVMRwgUUp4D3YgWJF4jvP9bBZ35jqBnq4JgoHdmhPGaKsh6A5VRgrvRtmzFwFR3hXG7cuZ6gng5e3Kt14LK",
  "key39": "NjHTwvnD7BqN8iAyCMCmtDsGwffeRDMjPqrwgxCtC1ocY9i9mNYvifinnkfmH21QDFjJAJhKDphZGtrsFtreLyR",
  "key40": "4c2jTq8XSdf4uv6YmEvX3uQciTLS5R78GHwnGB7ifYpupPwPoFT2n84imtHSEy9ZHfK4yZK3GU2aGKUJ8s44xAyF",
  "key41": "5fWMQZPoeu1St7FNpNCpKZoc6npNc5jn8YnCM3jFEYDCMUpqWki52yVWR7nWTEGwF78Q3vfvSUzgB7ceqNNyrGbb",
  "key42": "5ivaQNNKNd4jKrU7e7Tqfxwdk5Jut55hNfzGzWoE6cjumg9htWRuwkj7G8EAtpXYQfVhurKw1QRCLxpQ4WWPeyxq",
  "key43": "3JTg5x1SHv2fJD95vbNn6UjruEZ1k9bNAzg85HAJFtVAX6hM8SEcSPgS7U6K1WJm6kxtSBpkSkqwXEr9VcD3T4vt"
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
