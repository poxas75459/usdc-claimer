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
    "5vtot7qeuUUSqKHkDG7UQexptbU2Hr79SEyGSmLWZnibKCZgJtMDpvabPVK8cF6gSYm8nkPhjMaBnso3jXf8u4SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhAvueRAUcFymo3dprFKgGmaL8PKvfkmWX6R65bSrwjHabXgzwiF5ejGoxjSGqEaXi7upkPqoChF2S25B1iiSe9",
  "key1": "4qeL4L8RT813EFcSpAsMhj52eFnCWuF2smJzWbhth8S8HgBex3StR6VwhcK8MbjfPcWjKjHDXajuUojsQzjm7ppz",
  "key2": "mFAFuxKXkfAUWSporSu27SvArS1WBuqaUPwxkwCujnTj6hbpEJoKm8pSYZmG8RK5s5GjbC9g4wwAeq6QLGvvVgH",
  "key3": "2LqGNDDpax1droyfYh32JdJBhkaP6F2b7Zj5N57VEXE8i8rq4WrdiEYhNg84CgSTLKpMD9PjtQD3cqMpBUWSjri3",
  "key4": "33EkDjg4CXUJpqmH5GxT5cdqALzmHaDeMNdABA9671mMkqiLxXeLtzsk1DUhVSSWo8rLKLv46Gsb2vegQP2BBGzr",
  "key5": "YVU4C4wHpESms9zcQTcty8mgjfk5SzgECbZ46mNoRkdax5PEcnHRGZf6H99XP9JjKvCsXjwU7pT1uMqvXuiaBud",
  "key6": "3ovfECR4xepTrjk43CTeptBVUWweaoDSuQ3m9ZMGF7EzGbWzgDqFcpAVrixFH4WQsp4HLKbEgLPgP8AtkPv49hHN",
  "key7": "3TqCWGMuC7BSJAVmUwg5XXMt2keomMCttAcXdm3bJLytAp3nKH1jA7AoQyz8EQq9LA398KpZrfTs5hLXsEuC9zwe",
  "key8": "552Nr9o5brEvQsJ4D3D8arSCBDmELht8m7mnyWVnqQciFiHSeUkRkDF2CEhCoqJPAhcMc1t7p4npz275oLkxZRFe",
  "key9": "2xoKpdUd7MZShEuw7P3brgxvQEwe2ofizU3hncEYhkaeN8dVhRGhV7LPGyrCKUm2y5HbY2eVzTLEy3GkdQEts8Y9",
  "key10": "3LVFdMU1YbQCFdHDGaGQAK5LpD43x2824B8XMo3XZYcfvu6bwKA4eFQdfQBKWTuqrGn96fUF6AWdsQwid1Uz9ziC",
  "key11": "2b5PraJotEP6uunuDBXMeb1tzbHsZyBu6WuEa7X732xAaPSzoTwrJpQTUJ1jRHhdt8SUz7CJ7RN94Fm5NsgFYV7h",
  "key12": "5cYpg2nzt9WF2gSUjFBq8CLQdc7NbGJkkdKw8FDs3NpasAJZehQvqC6TRPVVvgkRc7x4drmcaHAFeRMjgU7qJwTL",
  "key13": "28mhTwuUgLn7avrmvaZypAbu8G2XQyLXkwBcL7TDkUcckQW2i7XMDrVWKJW1L7wBgqHaGJkVBDQjrmBfb8vkXcti",
  "key14": "4rEKLZCrJh8BLSdcHmM7LNVNXckSZwSDFsGp5KsSbBYaVkV3VSRWS3iZTpQ4EBJqbz1HCHPrNHMUo1U2zpWABuAv",
  "key15": "4BV6NQLpNqQ3NxGtvLV3gVheqXbzqLk5U8N7HuFgdzTp9CTUJp5RVjTPmcwEvDkDc9S86YKTn9wuZE6BTuxDcQUQ",
  "key16": "23i9uhiV6f1Q4nA71eFCRq9q367x53PnfCGASz4ELMG1KtX6Not3YLnb6ss722oKF3DRexzH2KwDSspAPDzz2rys",
  "key17": "5qKbDk1eDoiv2bzKvGuaCP65ab7siYBnJsFCSv6TAMUTuPLmigpJcFdeDR8dMou6sCJShkLezEStU9rjasGL6Jmu",
  "key18": "2bw5oMma9eB5cyUFMbiG2qkPzmGphaJRUzx8xdrKR1BPWBfMqYt7ArhLTwftMf1rxyeuqhpairYZT8AEUhgnfM44",
  "key19": "4DusBaU63oxeAnPKxhGo9zLE62x4F836SQFaqXm9un3f8yWEt1FBD919fK5GmfbqMpQpCq7o56kMjhfMhDR2vhy5",
  "key20": "FFhQXiaweNnA2N2R49xG5BNzDZXnecSeHwJdBDpQSUECf8JWTVrH2v25gYGAnPWNSCNqrZAueQMm9Wc9RgDLUiJ",
  "key21": "4e98iHeUoiAeafcoEbeUSsnUgCoHMnRQDbf6c3macTtkUrysceGR3APbKGxTKv6sqz6BvcVFmyrVAn8wkJS3uaqN",
  "key22": "5YomjsmQW3rRMjGTHPdWEbpRPm5y83XxczwEhbp8hJnfvDuQEGpQYhoFqd5i4wJfv5ab4G1MWgYyA4AEnjFpZnoL",
  "key23": "K6Re6XbXnYV2erVVL1QFvEEfRLXN3MDQUjRcvoh9BxkyPw3yfYs9y1R8KcE42QojeQjzDumSX56VEmCWU2yUxdc",
  "key24": "2pa4mzApsSEVQHMjU39ngNZh9tCwrcLF44ZNYMdA4wto2S32tuh1d6gVWfCh7S5ur9bVabxgZdKFQDQqnWmegH9b",
  "key25": "3t4ACtQhfps2fqQoxb48vzwAeQicBm54YC7CpaVPVt5zbUz6AWMVM49rdbhzRB44mvvGhWdgZGxvYYQrbtsN26T4",
  "key26": "5Wtno7SaTFj91cDgesonrmfLB343YoM1CCbJTfhwX7fMYkbZwdDH5wrzBfzAguzoBRrFDTsuMYvr5HVA1NmS21Bk",
  "key27": "4GvQwqx9WYdF9errt2Fj1xNyYDcP22QfbcDYarxACv3H4rhA6HNKcxoJmyyQTfD2WqQGCXfWUvHTAVkzkrJuFod6",
  "key28": "5GP1Ye1RcHG66bLKMnUtiMusMoMwtTMD9SJJmo2vY71eVYdB3iULPHh2q8FPrzuwZ372MoJirdGktLxrZqFQ47kc",
  "key29": "3ytJHXnwXV2aMBJXGopqyydx7qAHANKhkfbYPNaTWv1koamWG9EXX2pxGmoGket33TKuDwYFDNfWVMcXL1MPZsMM",
  "key30": "47KYD7rHho2YQgJ2ywnyUVEa48SGRgTczWCXEK7uDgn8Rfmo2n2TwjVh7sWA7KJqKMFF2uKe2i1MXq1DVieCcSMa"
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
