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
    "48xHAX54jRTqCRSQwq4GPfaiDRdrvsAm2a64MdgqWBhmr7FKW4R9mS92vupCnWa7uEG6h68KHLHj84TvXjeiGZkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tfFrYZytFFix7wMHqaH3CEo2wKhyn8FufS74PgjLJ5G5fewt5Dkae4hhViJwciuXRHw1rydtSaewQNNSdnfwsM",
  "key1": "4eF5UyHurr8WNKwzTAe3FussyxaSEH95kEEFJXjAVsyZxZnMmZLwHcUp6vVYhSxwQcBEe3TRGpT9zVZE5bNyMX8f",
  "key2": "5Ukkj48ySxpWgHT9hWKhYLXPJhRGCnBJy2YfxQruM7j2ZgXdYuuELWKcFYyt5JgEzCQekBYmUH4vqEuq1J52ryYY",
  "key3": "4adRzKz2czbStY58aB16cwTVxCRfsPizjXxgo9Y2mgSy7a2J6J7A7S81BG3xnhYQMmfzR1NvWshkeKpfX6UA2Fjb",
  "key4": "2Sw1MEup7A5LwT8k8SRinPnJgFdpmgGcMdz2ewCyhgDoPXa5ALY5N3UeZCAEoNpqKvjGPL7ZKdX9zecZ45JJsHvX",
  "key5": "isVQ4CxWroptNHSwMLwwYLzLSC5mHLjPcBujiDdszMP57b1EhsanZBqC6ZwbLhgyWw3nsnzG1TNYAMXB193qRrt",
  "key6": "4BrK3uUJfDMtowHWrLtDdnNi5HXtrm7Z27TdJbDLJvzVXE62Fi9dBSyDk7ozmCsRHRsBbPuLnpqwsZQ5eCC6RkjE",
  "key7": "3zVoT8VqxSxkU1id6o4hoevYoLPAqr2o3EsNU9e1GohB5Qph9JH5uT685mcV4EWYnddy7vNjUoNR7UPMDe9CZYya",
  "key8": "2wvpYXf27cuwrXNPXpneUytoDwP1qVgHv59nm9aWm72K7GzNrYVRDZQjSSGzy9hu35fCAnTNNuWAwrhc6yjenAP3",
  "key9": "55bi5csEU8zwnUqqamAUg4uP9aX4tEpoBHYyM1s9TveqS6Ysb7ZS4MokDYc32Egw1YZ9ry3Qa8cFEeUgrSNzF3aG",
  "key10": "UQ5A5UzU1Pt9zs9cybaHRS4K5UkvMECs4miZ8wt6A1veh9NU3vxRY3AWXAnynFMzxsftrcj1exAtY1cAX5GC7Qc",
  "key11": "4CSy2yyF9JTEW3Q7DKDi9xRKWFuKc96pmpocsVpu7djjygseEEF8hnymJt39DKV6afZmEYf7xnZfivR1CpWsLRQy",
  "key12": "3fdZcFC7sii8skM7ues1gXKJQ9wNWJmZzVFtqeK79X8v7KrPjoXvxFKGWu2JMSFmv4bvSQfc21tGneVF7jXsjtL6",
  "key13": "4iPsY1hn5Ve64HhDpQksE1YmVjivkd4CCvE4HJEYnoAUqhjuVdVMHVM5sbLgxherDcLrC16gGFHCSgsjN3apt159",
  "key14": "3Qn6GxwF16CD2eN6aCRCbfiSjW94PGNegxU1FGzLNpHoHXm3kNmV2uWX5yLCtottQHmzxQa1inkzoz4mdujJojHh",
  "key15": "3Huk5aGqTmSYf2aFRKJWBcJifVgkR23Rz19uUq7n4qU3TqbzaiAmJ74oc2CX3hYjqFHG2pVqYFpyAaoKtQGrZfCZ",
  "key16": "5NAyyqYt2ftkucejyk6X9nLx69rub4ueow974atC9Lc95KmythxeokqoKC9ktgDRMJgcVpYV5JQVHruJYTG84kqs",
  "key17": "2KzfBSeowdVXeqEmm8EZ3MkNSG4MNKs67j4e2KZDxUsijooVjcGJrctErE3t67qFU9MtGW4dWNFazZfzJorjhoYP",
  "key18": "4J6xaV7h28RuHb9c46ZLCQYQEphrC44CytkhzEL641CaAUZbGP8LzQpnY6sqrZHkDoJ94K1LxQRQWBNPEHK5UC9h",
  "key19": "3hiqLD6KxvTbajYCzEoaLLcM9Ft1wmoxcHx9G17ENYGWHFxx35jcTLtgLtSni51AwRYqVereepaxDE76iFWVyvS9",
  "key20": "2BWAQjys3oEETqrPhYiY3LqdgLDeoo1xYXR5GZq8xK6QpMhZ4K4heoDL5aooXhqo6HJqJvrQdrc8zinq95CCEEZV",
  "key21": "zgyfR58Rx9K7pW2E76JW7J4eqEfK67U4XV2bqrsf1tEZxcNbJHdvjPECxUFysr4gGNTrYocBbFaGQHCUApP2v6V",
  "key22": "4mpgHJPbn35nPr1Wrj1hLuPXdVyorvLSka7Zzpkrh53VGhQ9GSRqhu4qcGzjtGrNyT4AemEvJao4kL6qcCjuDm6S",
  "key23": "5nkQSDRMo5BnPCbjALVMT4vPo6tv62ad9LLSWoGW1HTKRSyPk173F2BKh3FZKhu7RdJEJqwxaRAYf7E7kfzJm8Gv",
  "key24": "3L1YuDqmENcwBteYpkUaBhd3FYTWM21JuHAi7NPhnqpVsaA9giTEGaMqK8Dw85XXUyPQFg6MZGjJioYHMr9cfBRC",
  "key25": "7Anodd97oWCE1yqnkLMLojntcqTGox2hRUbnQ6nM6F5zbpGE4jKCr1wwx2PZkso59eCfR2Fh9Q2HM42SyiF2juk",
  "key26": "3Q7tBwANs4aWeQowLHX5vH1V8k8Esak2SvQZ5feYE8Tzafp8s5eCyHRdYGaN2npXCkPDL8HyFmG9yvzVZydAPYKC",
  "key27": "3KhTecdumbMKeK7C3Uif7Ac7EyhypdiH3SDezbGxemayaLsycXF7WNBA4BjbWSVufkGMSjdskQ3BQP6db3pveZxe",
  "key28": "2rQGFoHUwKwoaaBdoFn6Q7TdeqM9fnSLmWs5tnRHeaEK7FEaooQBCYLtThQxehkUhtqpHqXqWz1VJNYFzufKSfQ7",
  "key29": "3dFhW9qpbeDBpk6UgPdNUhw6fDX34xfghZFsZTCZTNXmRah2iztkemoGeJttuy1oEPs4VLytfsxS9Hi8ECEWzN2v",
  "key30": "3A6Q31aPmn1oyFQ3tATUdHYEVA21MHXNqkJ2kUFpWLkuoweB7ufnSY6t4XV6BXegukStEvXBLeM7qiJqs1T5LQz1",
  "key31": "2UbZX25fot5PDUMHuMt2GVDgunKhNfN12fZhZJKenxZVQXk2Z3U2uuzjWUtXJ9wbwjp1oM9gNvC57ANQNQM23jwk",
  "key32": "3inqChBHHosv3qETj7U1iiN8KtFWkVdu1hksqCfH2xL7zrGhnZgNPckrZQ3jpK3KSRLnosR9PrVuWgyfFm18VMb7",
  "key33": "3htN2M8VBNywFy9zg27RQfs6YPVmB3L5cmncs7XJBtDtpvVbiemWf7wHgu62zdHj9hsBZqQWh3KHzp9NvV7aegJx",
  "key34": "2ER8MBLgaiKzkKVZC3pXZyLyweZP2ewqRGTha45dDVxb3ny4HsEqL1vHch8QJVBzYNibKWwAR6GXT3DXDgTAd1TF",
  "key35": "4f2RNWAYLtsPvhfzEeowoFdyXXeAxg8Lm4iUBobyNZERCxcEC7BFVDmSB1JtNiNEjTVk2SfNeKUA8xhnms7PNooV",
  "key36": "4jshdw6KgFSBgNF6a9Ez9GAPBRNsrHKPS5ZK8pUTvSj7RLb1CQgVRnyM1mtaYiekc5kSXa3F8io39E7sk9rS2dzX",
  "key37": "4YkcyqNVoeBMSAXRojvJrves5FnYcSg2nvcLKNXGQpTAAcu41zFgSVFLifenGuknmMxF3Ux3VjGkUn2neqgAut6f",
  "key38": "5SetFyAQLWk733mMgFdF5Yba2qEbnNX5AKHcN5cT2jnz1RnqBivxwMgPr3gd1JEWCcwUqdgCNw6h5VCSE5PAL9gX"
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
