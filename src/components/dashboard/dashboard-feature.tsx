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
    "4BZYRZm3Kxr2RZAUPw5EfFixLuGLLKdvdNi26WBZjxQnLwWNmQrxda4P4MaDN4FsGPrkXNCkQHLbHcm3BLDsUgGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bB8nZHWhYiGpMsv9okBa4KZkDPNko5F64NuKJ8zaJfMVBjgCr4LyLw921Z1sfUhSfUjVsSfVVMG74DgnN2FvvUy",
  "key1": "4LngatrTeXPHjzBw4FiZMdfqFGvsduFmpaoookCS2vu3gu7mxmNoGEHPpCTtuhmTjz1LH1rvpuydy8ymDjh86Xtj",
  "key2": "PzhFKJg55J1DR6HFtzQv5gmbZ1aT5hj3J5XRJ48Zt3r1NwFcFXGGpW4NEaZNvevSywYjneEji3zQkodwvRJA1uW",
  "key3": "57ZqHDdP9tTwEfehJYcSSQpEHMgNBcoxCzxbEPVHc9ALrnKu2u78W3YEtAFxokXU6vApafZR2Hd9yEuxsVQEu71p",
  "key4": "4EZ4AvzcL9c4ZQr9A1VDciepzSzUXbwxefet7TAEM6TZ7TRPF9G6VPkSAp8HAJWf5aUQqhH9kJgoK7GVzKeDT1zU",
  "key5": "2W3fvt7e96wwLyCwsfQtG7E7Vv89obDBR7FyzS8Bc6Sxv9VkRBrFdHCnuagyTqWLhoNhmnubVZu1DJyKxdC7CYPU",
  "key6": "5vhgox95SG4Now2au6yBxHGbcgs3vCsTGhHC8fwMHc6FrmWwP5FytaeCAsEtEZrLt6KD25GEGLBJLmxVSE33RU6A",
  "key7": "twamCLchUYwnDbWjhx3hiizf3CTft63j8LBXVbx3cc7KKMvn7NsPofx32HK1ReAy9ArMFyfd4unQ9o5Ki1c7b7y",
  "key8": "4KNuG7fMpjBoREt3n5bzAGoAu4yubWPabR4o7xci7Vwm7MnLivi4Uh1GisbsZv6HETQq6H4bvwhagJbsi9UNKSb",
  "key9": "3Q78PqZRmfq2Rh4ad3MKnGEuoBGsFT7gofssNTQGtnCVWBBhP7nAELQYfK4zSgkLE5poRKVubgLkk5XjMt2bdbT5",
  "key10": "RzJHwxtrV4xPfqRUrpkCZWUc8j5f8yEEyPgRRfPmpvcACAVTkUkNDYLVTXsgfF4Jumrn75DwGEoSqr8W548F4N5",
  "key11": "35jH4CTieCWpPNyiLMMVW1V5x1wr4BuZyy4VfeKCjPRL8r9PBhVmJrkKk9NJ6xEAyjMhEBnB7hwwuXKnwp7pC7Wj",
  "key12": "5dHHHv3UokyuFACsJzqrx4MJMqTX1Re6r5oKLx2z1h81SYcASEKVCac6Ztt1jKHsJpvRBc8cfj4vjv1fuDexQVFG",
  "key13": "4Yyb7DFe1Crrik7bB8bD9ayrkHv33s5MSu2nPpACK1Xxdiqtoe5iCePGKQYPRmtQUDHkYdhgUPFH1ognanEeyDHu",
  "key14": "4DdMjfp4DikWr51ta7hNxmHtV8r49kaawzkQ42du8EodCcx8YjUsxSq8v2JMRJ4isoSKDRZKWYcLkT1G8XwVnEGj",
  "key15": "5W7v73v4pzkWoVDRkLo4tYQmdLAzoXjcuGm3iKLy1B9Bos1fGqgqY88L5NS6SfEm1rdfzeWFi7MLp8mB4Bq3ZdMv",
  "key16": "3dUSq1Qz8wFxcVpkGzCkeHQiVZcQ3FsVkar28egeY6ytZ9B1FaTxeRv4LYZeGLXHzTzjk3pZq7yL3NkzzEYPELKE",
  "key17": "xHcdnE5FR6JRmDmLejgDnMx29AxafJzRdc7CFpaSwxkfoRf4Tkfzk2WB3prDEVrWPzFJ7dHqKoegvzneN1CvnXf",
  "key18": "5hA58ZnuWH9H3EACN8vHaQ6Vnh3NJMbkRLGNSTaSJBjZeSVjBzpYP96GjJwvSMUsYXLhmwEQQdqNy3Vd63D3JSBk",
  "key19": "4mUPVgH9eeajBwEcLjumDJVHHzBXsaMCDcow4UApfWdrK1WrUmRwbz89zzcQ8GdmZmVxodWXXi8Fu23w1K359VnR",
  "key20": "2nB3nZbN4fTTTnYg4gDH4rax9KvvGrctKcdHsNpwXa77hwracvCQGftjdGAkYLuNnEmg3cSnBmGq7tWpHEp2mdjP",
  "key21": "3bBxQwZtF5B51T4C9M26qpv8rUmeuNsLz6oDpq8L8ycqaLZGYYUUb5Y2UDg7J2jRPtt8mov2aMuUwCjGop4fn1Dw",
  "key22": "4xQeQwfrpHkuhsrVfx2Evf8y2HcheFcSN61HmqiE9tfUvjbzMCKgYMTQsHmQ42rK3zyCmD5jhYpJ9fBL6hFrdgM6",
  "key23": "z9fg5vgtfnr9XBjCpHwztxFKEtyWw9tNgpN4qXWcCocRWC72vwe2VConCi2HGfKtU4gNJYBjeJ2v9tgCAbuNFo2",
  "key24": "5KHXy1TSd6U1GwdnZTDYYaazcoCujbv1Gdvir3kQSiqkbU7MpSX8LmF3WMpV77kqn93EYSYc5CXAN465Y4UWUBuB",
  "key25": "QUKV58XUFLWTNEetN8foVjBsTKMAU9mYa2tZssYDxpki5m4au7fpWHF2gM4CTT2FY8hCVDfaCq4ZjexccQwgchA",
  "key26": "4tNqgLLdvnyXasgdb2qR53ERidGsibcdQakE4RoCiGjsf1YMLehZif1Uex6aEBsy1V6vv6bT8q1KHFkrtEQ8RUUX",
  "key27": "2enQWK1TFovGahX3YgQmtBGUPQLey1R9BzSHseXiKP5kgbHS9mGRJc122DmFuPEBQmac9xJEKQ2icf1ZdTB34SWa",
  "key28": "2L6918WVeUDJqFq3q7P8bMMzfvjaG9Dz3DbzQwEHcKfRPZ4CmuNH2PpKKXHVQRHnL2HFX77NVWS9NdSMefs7Ffei",
  "key29": "3srSu7P369BxZo5yVmo8JZGa2Q3pwS4q73cFt582EKdddTvToMt8t1b67QXqdR3Ntvrqb8ZLDqP29boCV3A2ToCH",
  "key30": "2zZU4aNoaMJMMs9wt8G4D8GRSjvPy3C8i12DtRY7swwFFWbAo5EmgcAhvEXP3CkGwaMXJVQHQAc5REZ3c7gaPEps",
  "key31": "5PzupY7mf9EBBDGAQkpM4xMhqMCaEfs5e4rdJ35iJwtqivyxJfpG7HdnTFEyFysDfG9JRibbQEwgcHxLwJ719Z4z",
  "key32": "4KVg8WgWxcir2nDdodEuN4jwBQVCWf1TCRcVUuyvbhRfgDKyQWdzayYmUu31MCw38Xi2dKbEDSYqqNr3MYEWe276",
  "key33": "za27mVv9bt1sgUq2F7wc1uUMrgBFxvNqCctKxTTHocodv6LeZPK4tmBMShTG9KCZZtJjpkVoJ4ys5Qr1wj2Vt7a",
  "key34": "5qkA5qiPsFgGs2TZBNiasi7NFZiQGEGBVGhC84wQLdDgsKiQqvVWTdqgpykMG4jCzoUvKk4esZcg2zLhDEbEaCGR",
  "key35": "uYQXtJA37zTVRafUo6YrsASgbbARRfYVFj1YMtxQFpn1WDUDgMQPbuRApSrERnTwHT5CP5Lrj2EgzpoT8rwzFPR",
  "key36": "3L9EaTNPGChq7DgBV8gTZhtHeCQsZXT6dkvZAVqi8AbFQdZXzgSzcN3TyicnzvqfWaS7KoKUfDkj2EsKsVnjiCxJ",
  "key37": "32Ee7tzR3t3EkTyjLyhCTp4USF6SbfTFhr2vnm1gKVgyQ7aFa6ANuBnrfKXt4RBYUiSbaArMQHVQr9vbXWeAx4Y1",
  "key38": "49EM56vBj4wuztGDRuV7Q5WUcdStRCFoWKSMtKCYtuwR71oVr8jYWLVGGhHh1zvwzWzZKUV9m8gVgSyEHaUUn2Qs",
  "key39": "267q6rRuzQ35jvehY9DnevJYf1RBgJEE8gHKYrb66Y9dgQt5Uh5gy481rSpvMGjENz2cmis3883cW1SJRvjuPBRJ",
  "key40": "2z3LxX47PmzG83tUApQ21dLEpgbCYgXDqJpMhLPqh7M4CWTQqdHRgnEmh8XbVZuJaVgaHPZDHmoVJJEauGAbCQEe",
  "key41": "2fiUtYfByVCBJBSz3iC4cLJ2vxS5NpCaoH9sjfTi8yfE4UNN1XZUZ9PsrW6otcP6SzsSC9R17Vugf64qh7hW6xAv",
  "key42": "ecBGPLAbEuNdVEN8zpeQRixZiogHPsq7LpBk4FjK2Bfrp893mRgUVgZR92oLPQPPZS4kYJtNPtAh1gGucpnybYp",
  "key43": "3GGihHkZPQhZ8Z7oVjozikHY81JPBv47U42aLLYS5Y8R8i6CQCgpMdDsBZfwgZA4np1GvJvsyxfLFaZwXsct7wg6"
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
