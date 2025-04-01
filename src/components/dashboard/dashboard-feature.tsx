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
    "3JaKZqnoZFhSbMc9cc5N5Vb7ByiqBEwU6heDgKSJYhncCVDSdHNngEZAp5tdnwnnsCWwFQjNCL8i7hQYyxjdh3GG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9j51mDLhZ9ax2Pd1uuMttpNjtptYevCS2Na5X6E7YPy15rqUVt44mktZGXYqgjVFtR9TYwD9kWyEVbnKuZ7cpV",
  "key1": "2hpDdziQ6EDgYmSWAAbfAMdVqcCrKbGjksbu5WQnELANjSnXeHmsRJEYJS5YjHnECwY61stwLxd1rFLzVDZyJ8m",
  "key2": "3oPSTSL7764cNnyKzceaayMXRYooVM9dtXoEMJoLNuRNXJ9GUwejR1FjCyWEvhDMQEbVfCxRZUehCCutTgXtx1oT",
  "key3": "5weWmBQ5gF4FkDvF26Zx6aBdxRemZ57pXEg6orunFiyVBCnAJ18XSeutmNyaV5mWcbHtXT9rFpBWRMpJsZ4SzpVm",
  "key4": "4ShqcyrL58F62UBEracELLVkmhZbdbrZYzj8CDWGu2udE9KVsVcnvEGJTyedApKBfN3mzu4bajkc5S1g6kqrGbLj",
  "key5": "5S5agxRXa8gGL3QofUS9ZYyDMZvrbXp1VWbmDzQHdPQbLq7duKoUMtpKiZcTncT3VdfqAg26XEmYGin5p1974CcK",
  "key6": "3eFmx7u7KxzU3d6MKB5wECJMG7nPGNngKunGaHNWnQg1ZNciguGCccaqsDaKVEMKtSUpfoYAw9DZN8LK3T2ux96G",
  "key7": "5eDUAiF13SBCJ7naPiQbBoEvXBYP3mhvKETMAEpw7dzQWiLcZ5vnp6ee3u3RYngMi5Z9zYotHzcTioET7FfVaZxE",
  "key8": "2MFX89Gud2kDaJAB6KNqTLGq4W365GZVwA3DzvLs6LQDbj7jrpAbkDZAm3estucTqyyc3VcA5aQBetMJDUjRpc1s",
  "key9": "WwFjNLzGmdKPVi1qBhTV5g4KQJ6kuMKFsADc9VKToDfGJWFGCB7Xz4oZgEnWWPje4FPDSXMPsgereP1RKS8avWb",
  "key10": "3j9i5Z35Rh22tUxcWGYXAnRcm8PJkUoBzoRS5MpnStyomTYF9Sm7aNAsrJS1YwJUaWaGCKo7FP74KG2kpiEBUms5",
  "key11": "4VXKZpgoWDTraoejoLhizdGuWBdGEetEfwhyRrBdFM8ZFuGp72VsebqoVaTEiqwTLEEVHrXEdoRPSz6DB1qbkPcm",
  "key12": "4UQok8Nqde2FDfKr6C9NW691JJ4ev6oV91W7f5fLvLhLzzEeYX7YaPvtzZsTC3gpxZdKs9AuPNyqrp4nWATjmCak",
  "key13": "37B2eyG5xHA5nCdBBsf3PVAseAXL2decKZrXN1vaDxWQGwLuRfo49fLYN2z2XFLR3VaLeFKEaSDL3Tu8tWQ7i69c",
  "key14": "3jvaXTfaJApJSg6V2gcnDm9RHzgp8iaqNjAPBu8cTVqqzMJDF16BdjcgSgBNFBCNjtZWEPPHAot7WmXx7CXhwyaK",
  "key15": "4gEoMXFuxahQh9bTkRn68zKcWZB5kBzFJ65jRcuQ7pKZ45MsUmVcqKYWpnmGEhutYs94nVnpWihB6EM3TjhgMnL9",
  "key16": "wYhBtFBCogyvF4YuyaCdVj9pkxSkSLY6Gdf2RMpoRoXm7UjHM9N9DqzRjjFMF4DDgsmkYDaPVFd4wA3FVgCVAjo",
  "key17": "C2xcJiowMzDEFZa4rJoFzCBho2e4kcG1m4kR1hja3FnEJVWoCeZHfNbjXZzSwiuPut2VWsfM9Hme5RuWBtRHdya",
  "key18": "5c5sox7fhYytzF2vbqJw7wdSsPmEpcFcia9MJH13wHsr22nhbCLqP5Z8j384SibV7w1wdCe89T8ZUkDyLgkEq12M",
  "key19": "BDhhyXRmiYwZsJHsJzpkS2tM1c9j642QeYtevZrVR2unTussZyvVA7g8CzV7a4gpd4KMJTCndHjWYZSYQJx5wCt",
  "key20": "GpYMGSzYAQEV1eVCyvFTWPXxQJncJtQut3M7djEjErMjVu8B1BkcXkDPDJQ29ihYoMs4zg6vZm84Eef9cdMGyZr",
  "key21": "4fNJAdAMe2CAfNQKhxDQugC3TUH587FojkRz6TJtWc1JtWQpxLZjoVjHDxrZ2LSv7q1K46VEovTHpxfP8EfYE6sx",
  "key22": "4X3AupvawztJSuqLxKo6zidM6BW1T8nVK58auPHm6n4Y2quHacQYgVBPnSXTtcrhAoxCk37gYshZocjBcsEwU4hd",
  "key23": "4KbTaj9aVRozA6JG51G7ArjgYC4B1HomDdpxcmvnz1uk9th4RJzyVbP8CfNwdT9MmJjkHfsvFKptFqWYrhgMpMVp",
  "key24": "gyvE9EJGwABCt5gT5sS7RneQVwJjf2cKrDRBngwNkcHSwEEPsJ9UpyTmZvmP7vX7PUEgMJswGeBqos2KXpyKPkX",
  "key25": "54uMj4iRWre3tumTZPeyiCSvXYzChRpTahpaRwpUSLixafADucRDhbktuqqbbdsu3KmLbivJVz2uUxbnH14GK2u8",
  "key26": "2Au9iMsYGxzFvLyN6eevs4uF2P5DtzR44vLqTkjyGiSNxcXaxvpQNyvPYYZPYYL9HxCGBw6N7ofDoXznbwn6ZTyL",
  "key27": "4XSRFKf2Ariq2HBdZJGVcbHtXWhPisENyfcs1bMbeQojZkZBPXLPVK2VU8bibxxmGGcWMSJopW9J2gmrJLKpDUfa",
  "key28": "r2fRfDLwbn6VmQ6wwdcdpfNuCF7fsbd5D6QNYbx1kC1PBeREyMJ5zRiP6NZAEPgJdBKTjHoBLgfNmcPfJjDp6cY",
  "key29": "5uC5T6BRfxiM5DNGLzQ8t1m8LnmT5ZSyP8nDewzPkysrMZ4XRcGqeBs2cFkHtEe5DhW986rC9kGCTQXhD3joABbp",
  "key30": "2vierzqxjpa2RLQCViiCNJ7J94T462zgxgx7EmCPQ7dLAfWZqZPzNH4vshGK49v1mrDsQ9EZZLpK6rUsQM2YsfZP",
  "key31": "t9HVotAy88mey18vTnF635szJvHkheNekht1S16C62Q6mtBzsusUnAJNjY43Udk5mPa2Gv6JQAouEzKgAU2bSBw",
  "key32": "4cFZ2qFpmapDqSUbrix1BdzTVXftFuLG99T3LaMdkZazguX3AcU8f7nayoVGMRGZWaTp7spZ4GzsCHNjsP1Rfw3x",
  "key33": "23a7QctndXHT6XxujWUbY4veYkgJrwtV46phTakp4hUQZN7Z5qTBqti2wUSC4h8faY2AaxfJ1pgsGzC7utZMpUiX",
  "key34": "hq1EuCHAoxuYsTDaJtCBqGNUbTpxUdxTBYcc5uroS2AugykP9ep7MozbLpvV6pou87YAeovmmubjgcQ9B1MASqa",
  "key35": "3RQXKChNn1VArK4Kef3Cb4dKEbitGsumEANAnonjw3jSfRZTbipWixQoUtskMimqtAuAxq72bNPbbp9cKF9ZnjCA",
  "key36": "mUZhc7UQBJNUZVu7gwBe1z6AeSy4LhZAgyLs8gDT3jytHQHXFUjw8Ne5hn4Zk31pxjnnJi1AbBsYUZLB3tfB7Kq",
  "key37": "5uRFn7QPwh91bgHjtRURiwmmn46HeJCyaoc9CJTFPiNSkeNRei41RcSHj76cZUicknKK5vjbi9kDsJgBLEo45T9W",
  "key38": "3fK1Dpp9fce18r7jq7TpWohi4jQzmMWRJHkKPoEZEzoRZveamGhF9qsWpi7j4Yc6ggHU6mWAFZdwLP3RE3dsutsV",
  "key39": "67FajESFoJXW1kjsURJcGVydutEzTjQNTqygEB7csdUrHMWhTMen3MypTuGbbztESz671bABcyzw5W5KYpJVzdMC",
  "key40": "2s2UFUkmstnfXwH9sa5raRDbhNe4jhWHHjkaW3vE15qa7guvVpWQEBcrKsRSngw1BcLoutjpQyc8vgFVcvgBZrNo",
  "key41": "5cAJGeQFefA3Tas1CQi5RWPvWYAHaTSxRk1rzzP5iS5s4EMYjjfpQSYpKNQQxZSNZVPsCQe3nKBveg7eFgP8cqDn",
  "key42": "31yVCu7zSfcyUt3dRatuC9XSKdnKdp3cizMzjKqH4c9zfGHEa9E8BVaCJcbSqqD3RA8XrimYpmMkBK4zom8oLCJV",
  "key43": "3spHD1h3Q8hobgiqqX18PkMu6U39mJsyqqcYpXqSR5xS6cuhb9h2oR35nVcjce1yP3VeorNFBxfimXVRGLQzdC12",
  "key44": "3fxyGVDxWGFZVigH2YfB9AoKkUdvbRHHNuB7nt9kahEndobz6okatMZaixUz5U9uJeqhCYCkVihaZW6gBcvCRiGo",
  "key45": "3gqMEjL7jnyqjZ49V2bVZkF7JMDmDuHhXSZU9oAdzMu1itiKvN1jWTexR51noeLcVV9Le3FiR3TG4msRapikgfEk",
  "key46": "4St3RQRMBPgLJVE8nUiGTCg1RWDKFWHtGyix1cFWCc9y4vuuheqv4AKo7ffHxFi5cCsmTZ8kkXHQwEyt8PvPhm5B"
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
