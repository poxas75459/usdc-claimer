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
    "2vU81YcHncTbWBpcoAy34FZ2omSeHpEwK1sPwyytyZbFU9bLMWPHtq8v37fF6rCWc71pZK8oCY2JL6EAeaYFPk5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgNrr21HvH7rwULG76JPSLnKSis7nGPsXS3LJiXDosGBThoyzK3G4QzrkmvM5strZtHjzrFvT4hD3VAYzmKoa8e",
  "key1": "395mc9H6gHyBVFC2rfzwk5WWWhP35ru4TtsTKohnbEJcdL2cxhgrvpbU7uu9pVNoRbh5kMc6C1rwuFNsX2ZQhmEY",
  "key2": "36ECe6kAUp1qoxjEKz6mkSVBfBNei8dtqU4U9WjNCK6zBufWKxnuPhDKGdAibpKL51QxMGWfkbPcsFjPeyjnorBT",
  "key3": "2vRdrhWag4UBF4t39AamPNBvNXjtXzxL3bYJ8sKa4B6KEE2Kw4Lbbn6aNvuZjL9NPwP7a4Nm5JoZ9nxEsL5BxXBk",
  "key4": "FLwZeLrft3FyDCc4FNpDQfUqq6zZaggNrkzRDqdQgTiCBuoiAMuSSGHX6nXGkMgXCNxKQbyiycYrEecqjCZrs1J",
  "key5": "56STxbW7Y7ta3o5YBTtJ9gfVfG1wMWBXP8i63p9ByBDzau9APBudyytnryNG5TGE4G6gBJEDAQ314yvqGp3tAH2N",
  "key6": "4Zu5NPhWBp3orrMcnh56j67Y3rsoWv6di4xbvu9spsZkedYHg9YCDLjEKpbWkHDaKv5UptsFDuR5KYQFdfYZE7om",
  "key7": "5kH443Gvv4otB9aQZ98w59fi87aesq353wKvrYd6xpKzMvQ3wqcvXkfGAVypAzcjgETf67V5QJTme6q6YRaDXv3Z",
  "key8": "5Ci9UoVNqBCUUUVg54QMxdrqMAtsSsryVYZ4cXfXvuADcTtniTSmbL6vswaegpNCUA1zz54xngtFVt4j4A6Yyd3m",
  "key9": "2vuwEHRfuN4HaC3ge8mhJNv1o3T7QNesVYAqn1o1VgmoRzDZ6nus5ETgxLpNjwKZt8GtPaSVdWyADEBShJ4YLGbZ",
  "key10": "5Z3kEfoef7eJ3VF5WJNCkT1QoWomSEhJTPfi5zMpzixRqiF9ecnv84roMZFARSQeUTS1tG89CrKkc9HLU145uV5D",
  "key11": "3NRcPXfrJ78AYFcfmx5SiG8QY522vGveFtVLifXdY8dPZv8azRzMmDUfix8qQXx4aUpN669KM6GbSFwQReGwPUes",
  "key12": "3wt1CrHkByEqLz5QqFFW8S3yQEtiu4bVrgAuuwPzsH6ChMdxaKVsXb3aGTH2pY1te65yJZAJZRo17B448WXSfFkL",
  "key13": "4oopM8BLoCX3Jm238LxEKi92Aje83bZn3GRwesF6SMqE1j9kZPJewLxmZ4vrUYKFqwsoxJrqmLY3rkVqvszEXEBn",
  "key14": "4SG94XcCRj8nwQUZSMQkCkoCsHa4pV8UDWYUk7nh22VVchm2iDPCLqgY1UmiGsYnFMcymVCy6LpVHzQtXoUMqfuW",
  "key15": "aDceutDzNrETBNaksZWsycEAzNA12g4wDdxeAnXmLZPwp7M13KKaNqo8oTQgP758EsZVAHmJyriSkXZ8mUqmbsd",
  "key16": "ZuaFm9ojpEooFEAxQfLqdQ6bjVEsTFUEjV2SxveosRsXHJ1SvmZWC2E7iwBkbfscuoBJ8av8fN8UgLp6zuiVMJa",
  "key17": "9N968FRwX62hVFz3u1HwHuN3hoLBmtvtG9beWvjhCEngLZycDxCstPYQ48LhAdmZDyVcJci1NCAjPnxaG7RimMZ",
  "key18": "3A4tWpebGQus153scaZYPad6Fbsp5eNLHL3XZyrhtLq8dfaP2GfiCwpGZ3vcyF4JTJzVxGwcBpg7CmWiSBtiJYRT",
  "key19": "2YbuRrvEha1eKZTjszDovoVForLX6TBLw8XC7jMPvhRmHQ4oLm5kAjgANLsNpkdpgYgeb3RHc9DEBRhs65EdRAsP",
  "key20": "4TnziU6grFzFsGnLw646wZL74iXo6DHJtVnngtXSWkodDJTk1ZM4eQ5y4m8MGvr3uPvPoSv1pqLrAFZGkrrFZ5S9",
  "key21": "4RLRyby3TRedhHKKgn4kT9zkztnGAo5b2sZa5Ra7aMQVyhhhm3VG8aG7AZj1eN6sRGH8S4DRfG7mUno67YhPBXRd",
  "key22": "5y1NzKNZEk7ZhvSSSBk6LujFTVqjQvNaGkWkqgsU6vRXoqqDNe6vAJP7689JhkSGWNhvWDcgwsr6fk39AF123xqi",
  "key23": "5cDwDhTesmLpEc7CD1uMi1GVf23tBrNU1CH2AZNesSe1kWrc6rMcncjS74swpTjgyqd9zDFbyRDj6qzLjaeayKcB",
  "key24": "4H1Ypj3QKjeerMEw4RmL92EPL9wVo4P6WLEdQsTJP9UPqA3MtP2WfknxW9YLjcwrxg51q18BhmkdaoR3oCBwF7EV",
  "key25": "y7HoDtXS6VYYZF243HDoc81T9vbTjJEJYJ8vekpUsbVQJZVYiSNgjbVAEr791nmkLk4dtu3HeUWqfzCtEVXD72N"
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
