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
    "3Wjno8V5hHSvm9oa2X9xH2EzQ2Lo8t6LqvJk2seaB2w7TZGSdbABZN4a9ujXZRxswDRHuxMd8iHAS1T2GEJKLSQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZy6tRZMhKVJsaygnLuadvN5DESrV6nFEKqBKbw2yTNdKpTZyHTP4h3dCepCKtdH1ssdvUJCyEb2NSxiBJJ6CVn",
  "key1": "4G2iXo4NuHw6roeidSYZGgesK48EUfE9UqTuDD2ww3NWb6JvGb6vHGJdWySXRMJzEAYTd5NB9pvGhJsb8bE5qFpC",
  "key2": "3h63TVWEEEdAsrWodPZCAG9Vg6UBviFPbd4HuzaeT8rAVTXgBLDZ8GHcFKCeZdR1E43FXqZAtKXojQyvPnoVcyxi",
  "key3": "58CyD3iX4UnG73RZTqrCo65PPuFtDVvVyRFKSDY8THBdjYzXxxKtcpuM6q2QwrkmTj2BW4dqrAJi4kRwRD3PUS8q",
  "key4": "4XgDta5SA34L9KM7mWMXhHXgzXC4wZRc4bfhxzkbPFLxdDicXUCGJJvkACpHnAxzQ6vVA5xDaA3U33sXVAuTvhPm",
  "key5": "3Xpq2P4YTNLEuvXgxnZR3TsivtPof54YtKAfw7z4zcBvsw4STnPqp5uqXBg2jy7zurPt6A3HurGYhZ8m2DUNqULz",
  "key6": "4issHKtpnwMVQTCyV9V3rNFkW8d85ZZxLpN6BGuk8k4B97zZkH5HUV78psMZCGS8EM43Md82q7okbZKdPgjTZTUb",
  "key7": "23TbdvvXHWGpSSh4kJXDRbQq4JZy7y11PeHPjUNY2uZwnWBUALJZHzc9V6HrjG8BYydTgu7znT38rCMkWgNwdmbX",
  "key8": "3oHFzYAgTjCjMx5BT7epyZKhQeURixLByYwGy91c41cYHjn3mP7xE5VDSi5bnZJsHNnCM8yxRhBSCYAavbshnis5",
  "key9": "FUaZv2rLawEC5BhmQyQCvhpyD4mNAyZcHkkdkiZeCdWvkwKmurdvgsMKsXDDp9DtPF2j7KGhjdMMQ2imwsTwE5F",
  "key10": "4tPUErBYMVPHo8W19f9uTLAdxipo5oCi91hxpAZoEm7DxuHth27tmBYzNotcyPwBxfaaptbh27Y7dbMroBYXe7RJ",
  "key11": "53QeRuKoR6zGyBhx5vjpDgT9oN8WcScFhkvbHZ7zRNDYQ5fh7phm1Raot1RhZVbY9RnBFhwCzDEHnStSDpWt8xVg",
  "key12": "4zoDE6y9s3DjKq44494dr8FjHPqh9W16pJBce76wLirtMxF6bZQgne9MqMqjaA4WYJFwM4zVh26kkLq8HjJCE2ir",
  "key13": "5MHkdfhAcQwLkzpRZvDk7B8MbKFLdduaavoU3e6sSCXnyyvP3kKZTdbbfaTGiz4NBAsu71HqZKypfVL2kFdGf8tJ",
  "key14": "5Embqc6KZDg8rkEWcr16pmM1LSxWc5tfWCf2GjEbet5E1DpLKheWxY8pUhByKGi39P4au8DQHoXe1tY7ghVxLoRP",
  "key15": "4RfvsuPLRHHqSqA3wFQycRXB6KDd6FMXTjTtz3x5tWsnCdPixkctccdEC7XAU4QM4fnAHmFXnvdzZsesqRYsjj5V",
  "key16": "56v54DnvXTwZyP2jT9ZUgCf984jFGsyeZfUEGKDfJgRbxB3nZoXVnJQf3ynDEhHtfwg1PkVmC7SYarg8jASoZQe9",
  "key17": "3T8aSxAoEeTNkLQmowVfhpGLz7iCLFNnfKx9mSu24n94KCm25vocexM3RMJCsQNbBB4tKSjHehHt8zbjBEviVuqh",
  "key18": "5zJg1CNzpm97FMAKbw8NaSyYLYNZAsEe5ZDoT4MTPQNfzUDJAjYUbQzKHz8rtsExx6G1EY9HPYRfGGSbLN84xrCu",
  "key19": "4ucPNTYWTkd5PhTR6UaWk1ezMAC9zw1CRJ9a76bHxfMM6pwkNu6y9yn8CBx7r5ginRSfAbCJUmJHLA2JBK3bH2uo",
  "key20": "3kYSDsfBGnjkgnYRdhE66ZRezZ5Y3dy3SPLXGWKjn1898fMARPXNpK9VrudsKLMBfUwQ2Cp864MMA2G8258Ap237",
  "key21": "2zjHhL3zNJtuV8ZQATifH72Vb23euXEsdSVPMtSan29o3ZTH8sEFRyctVVRgcxLPYjxpn2bmbD8BHzcoP3CGg9BE",
  "key22": "445xKCATUhf6uDkR5MpLRsxcGDmngM1ikTgpW1gU3H2zXw1Q6XXt5yC3nb3bZGxYUScnQsqesuzem3sR6dk1yVM",
  "key23": "5yt8Gq4i1wYHHMv5Z3ZsKJGbyNZtmvLtgCYGDY8RPZfkRND9GeFUsAgRaguPcAeqeTVjFqCdhar7TiZWWNW3h2Eg",
  "key24": "2Dm65c1Qwsk1mE6D5LS21aKHome4Lv5h1ZAK1i9nhkNkPcU3ZMFK7CrU9e2Jf7C4dgr6X2qnYWwboETgRn1utKBD",
  "key25": "2A7cd6pH4P5SUbSxDuumjSDRF9T5JtEZdhFVZ3ZC1WqJjfzitQJ8Sm5sJMz9SUGCCfNkBfRb32HgJKbfJ3UmJiiY",
  "key26": "5bLeV21mfcERgaKg9ndNgUHwAizoWtLHtpiAGSxbn2HXfm911LK6SUgXQBE7H6mmueSw6LwnT6rvahoeeJteqHKX",
  "key27": "5VxtBWcp55NXYMG4Dafcn8DptAmB57DTBLSXuB5CP1KpHCzTxZKuwDPHWgC21o1qPH3rhprbqNTnKS1Gi48BJdub",
  "key28": "4e4j2PdtwH2kuuJfvHAw31ifuyFqBsGtmSaTgRrererwjFFBFbtJfzDr5WQEupnj51zKzRwfpM9zr5sNEUNBbwFC",
  "key29": "hegWC3SmABJYRZss8rUJ7EmACjmFZiUrfxzj4t53Gbq4HohHu281QXtAAhLHo5SdkCHQM1aUbM4pcoqwmpCBvoi",
  "key30": "ETSpgBoDyTYmVPZ5MCPV2poHgGTLCUEsCN3Zwih13qfY24822Ns6m7zayzhC3prYREobTe1yPbMdacrFW3gNop4",
  "key31": "y9VqCx3K7doHWNNNXV4fWMmJTPuAp75FyBKmHXFwdSadWSCLtqENyn5eweL81sir23uf89QRZA2BjjEU52UZLTS",
  "key32": "tBaxLYuwJ9yYbtBC5SAuAByWFG2mTw2eqitG3Zs14cKa1QFN7DtLz3eArsjtmQEsDisMJKrZFypdykinfqbpUKr",
  "key33": "59kRLaPsCAAbcCe2xY7LeytMhyNRSd7cXWAmvCHdGdde9EPwujLUeH3x1UmUHmnxhnCWjtfB1vEPt5j6tt4MxxBT",
  "key34": "3G7kTuP9iXfnoJQFmXLRqvDHwC6JBDorCGeXxfiBPMpwxFvr3GFZvX8YBP3j39YfYJmvzNgKhYJLxAGGu9xzpXNn",
  "key35": "5AX1UH6ko5JK1J2dQ9VMh1Dj988SX1p7PR2a3QZsf35nSbEFZLtFiAVmS93r1MbPFneAoLgntP9Xmuih2QD8FgWk",
  "key36": "2BMBL1ukBcdCsSsFdPBy7u8VppQmZCKj2T7js5TrVu1FhsXNBXeU5qFgTPiAGgpn57nALtsCuYLbdqWAKdDDarzi",
  "key37": "ZyAghq5hkaL9napAYHKezcaW3Q26EkysFPweyLEVByv4cesXYH1ZT2F6q9gZRE29xLQi9FANxgGFPdqNisGDtUA",
  "key38": "4tKsFYt9gfBBuSkCgwMEHcLRAcBas7hjwGm5bPP3JJipaFLATY95HVBAzEuKg1MM41Zb27rpaf2VfvMe4fwZKndX",
  "key39": "5A33QYhqZANg2ivBGeDfEGHZRUxa3NEF5wR4gKcSVCskv8hF86rwqVgbHwAAWWysQXrM35XfQRrutk9nnQFnoAH4"
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
