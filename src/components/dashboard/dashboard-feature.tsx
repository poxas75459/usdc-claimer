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
    "4bgPfJT4R6LNoqpDntnvh8YAo28R26TWUFVeGP7kQXqXVadbanJBwdqkUHbrwYMstc22WhJfqWb8CwW7UGiU9bH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HsFaFeSHtUqx56dArgMkRt8KK2sE92oFywfTPGgVSnopT2M7M9x4jBWm2tzBauFDBKMQP97KAuPYhhMNmvYRXDa",
  "key1": "EBArM9j7naTiBDQio4KJLpNEU6bHHAMiR8zo6CbReB4q1gje6xZYFL8QZhNdiNQ34HStS5MSKyCt7HuQ9vi9rKD",
  "key2": "2fPeNxbLujZqM3irzFi5HyQbWZk8cNXzvJdySuubLcwiQUxNxtTf3d1TvZb6XDnmA4E4dvGoiu2uD6BRQYyLpft1",
  "key3": "9tTkFct8n5CGjvJnXRb7iacVzkUfArY4C2cJSfQ8zrX6LeQSUz1Tijx1k5ApaBLzxihMGoD3WixJhzVMEHBQtVd",
  "key4": "gbMH9Jnndu1PGg72HSLb7CrzTuiNLnR9QDqzWWvHYPtLSoqGXafxNMWx6qDUVM4oDSZ6SnCXc5tsu79d8draa4L",
  "key5": "Ha8o1WAYV9vEkxsxWD3FNwn7ccZStrYUvcVTxrmhrCpdrBhAxrUJd4YQptuijxT7xPrwq8rn1Y4T8mL29QXw1bZ",
  "key6": "2M1KUURuJH2Yo3VaDb4xnr8aGZ2FE8476jMeWCQb6Rbnr7eqZp8E35f4AZ79kaKhs5xPWXEm1xngiv5UvZqMM8Y6",
  "key7": "4t1uqV9AU7cZ2qLy8syvHExrYbLzhJTZ7MC3VBzWorhkRkahhWJp8E9i9pBddB8XSmaJohyiKPsWNphNLgE5VqhP",
  "key8": "dHnrKXRxcBaShCdgXXZ9dsSaUnRWHYx7Dk2Yut3AUd8bVWEKB6aHd4rNYaefpxe3eyVCTiKPX2pqs2NHzYWGHAe",
  "key9": "2FuZsV6eZ9fyRCw599KoqLR3XuMZcr2a6XzzLFdSgf2aNuzLjvAKQMbmSd8gqCeyc3tsBq9Y3DSNoGUn9PEA1hza",
  "key10": "2sGpxKKJoxQucTDD1mvvJTZ17DvjbPDkbwzSx6taByzQwzzFHVeYK7Ahzpug5GNcLuYRzdMh6NvpL9svdJrqWWzx",
  "key11": "3Zk3TTd6VAofQdj3hHTP5RysvnpoigPeaWE2feyuqXyea4Vn2jijohzuAthevYXD7TzwwHyV2f1xNrdMzW7hb7C5",
  "key12": "5uqwzau5v8jzLwEUqvs1ydAeKwpwxsXCHj7H9Zb9i75ui5nB41u8MsJnuZpxs5M8FtVSR2LPhJ6EQvk2sBJBDVRz",
  "key13": "6fXy7gffDbHU7BSSTUh9txyrF5CM4CG7nFKoY4xLHf772VXLTxANYZcayMtEBgWAtfxmcMqyZ7EN2r8Rtta9WGQ",
  "key14": "55ABiezQwyZLjQ9giDukomA6cJwuU3yn5quQzHS1hVVyRaRgQywJs37tfWCRkYrcky9ECEd6DQr2Cjo3CEvMBsh1",
  "key15": "52kxUgxQCqWud5VzgPRGoCmzSxi6ssiqia3VE9uvnhoLwcLGUVRsd8EAJkkq7b82k8tGiEHCiK1MBWqTiMRJmUyN",
  "key16": "3w7KDqkxxzW5uxDmyjC7aJujBLc3KDcVv88LfXryLPnS3tnrBoz1BRAFK4Qyky84ofFp9HoqLPiU3TfmvSEvVyZk",
  "key17": "6557qc2zy2wrcH2HgmRSwoiT3TArYTuNYh7ygMpQN2qFJDzaBEtGfCM5Mzp3uMXxA61y3PbBQm4ssnR5kCnTn2Ho",
  "key18": "62K9asLs7bVg26R3pLJ3hh5M54DunwGoL1GDVboR72ViHRjoCHyiFrQGZe6DffNgaHDdYb3CoACndn6L3uaULsuW",
  "key19": "5CC4DNSYuSHCGvcdvU9dtYYUJGGceXGhTX2PLaMnqqCng9qDnNAZMFvSTivi7z2gWtPZXadKJKGk3u2bZ5yuMft1",
  "key20": "5tNMn4BVJRVncRbmtp32JhNTTgDNNK8GW2TFcrxg16VDcpsnsbeitAU7FSvy7LXKqqPNjDQ8XNcdNsV35UyFsYa2",
  "key21": "4J5PhBJ3CJ4vWEfbwd6tnbhUTFV2QdUjaZ1dMM2BMjBmjMVywADffPMa5C955P2gTn4oYzqwiAfFHtSq1QgQy56c",
  "key22": "2i3pWB5dt792wrVGmB41bG2MZUaJdCdkCc16GDKcXtJvutAk8PTyx5TFNyCoD1nRuELrETbs2EeNBMr34RqT5BQT",
  "key23": "56KSnN9NQrTq3nGpRivtmhegCKbryq5avxdNtN2Mw3ZuJHE9ymvGajPcjc8rwxEE6VKgFT46iUnRTLLh6hmjQSHA",
  "key24": "4A7ycj7P6hyxnXuhQ21yCfP9eKarM2Gxh2V38MfrevmQdHdjzHgQ6kCT8ANXTJvDey5Va5cDXud6UvKVjdXJvREb",
  "key25": "2KRkQcU1Q7kLBssmN5vtsDcEjU9nWiHABtyTwppGVsph1SZSxuy39reNAEBfHtRL8P7XcMmBYMcQYTzPo1Qh45PV",
  "key26": "5d38v1nXoKFhgooU438vtdyCnZW2fPVR8yaRnJMtWzMrCuUctqRJPiLd9eUfrLMniyH3iNnvwWHZyBYkjaL1hLsp",
  "key27": "DdRkSnZruJL9i8bZ56FztyfjCTYxTDFe1zqNbxQL4zz2YpAWdZaM6rFqY7yiakLvrAN3qeQ4aUEFwa5g2w9y8gU",
  "key28": "gBsYSrvwffPPYqJXAkL1wyBTyjjRoBmeCeXmgDY53tdSCVF1nx5prgaANvMa9XL8S9c2bgz1jVgzDtx1roFqhpb",
  "key29": "4PZ99WhWrLbx9PVF344LiRgsfrBrh4nKqwLQW3zxahLwe8JzafoqibR8D74RRrxnMyyPaHqLZ9Q4f6MW7emaW3mV",
  "key30": "3WvfN3LrZohyLnPhFNkDRYQDE48SqVRVYWNfsEGFuz1YnPuoQas4p9DvfF1mcXso12q8pWTNG9bNmg8B12GpfVxi",
  "key31": "2WXtP8JE84jv1qZzWXPvV5XdXReozbWD9aM8SWeJRUM1nKEdus6nc2YWDM7c196K6543zsGXKtpWd6AoTKmSXPP1",
  "key32": "2d5iQRJUHD3GP4vZoRTnAxuaCvtSrCigpX9NfaA4qkmdCX2NTXcoyiYt1Hf3TokEjLVh4q8LNTBs81qCG3Eu5sNc",
  "key33": "2KtnLSspdCpXnGPs19aBiWd9coJjE62tq4nzdNLB2ksc7bG1hEsyazWQwgJrGuUxF5SGo3au8Ut7vo3RGWnCxSPf",
  "key34": "JjiQLHLR4oLVRBW7sHbNnWCKDAgRhsXxrj4X69U56ho9DbAMXqhrrixE95e7YPVJpxt13p44Ez6vcJnmFjaLhvK",
  "key35": "3cdFPmAMqucf7hnVjDUjZrXGN9SovBc8KqQBpNC6VUg3XGPo1UUAo8zVK9FDZAYcEzy8B3N3DcAwFCEWEjmesqfw",
  "key36": "2CHNrzPm15PBoiVLyg5yLWFpL1JVokAdwTUJgpyxjhngxHjrNEgSKzjSDJHkW6anRReRPsDwUaqyj7nVj9iDF6WY",
  "key37": "4ENwaMYfuaj3QL3zmfjnhzNeZTYcQFd5dM4QLT5K4qN4UHj1Sjy9Rp7sXszfpcMn354up1HHkKx36HTPNTNnPepv",
  "key38": "U4Hw8hJWXqLtghXuz3oATgrUzWuvJTLTGWUVrrk9tainRN8KcNEjaGL3Xt7iwLQHxPnCmmoQ8cwZwoz4RSzqFGt",
  "key39": "4fGEK44sdi2X4N33RDzHza4fMDepq7wr4v3JWAkAL7Nq8JCPbbQVoHjTDAgvXtKj6J7ZM5mkgSzfhwqGTX9hhtwq",
  "key40": "3Yq2A5nXicXkiBptXTHJ7WrLUeDvD9sDfkh8d9qLQV6n3XX5VbYChj8uJSMKh4pSupzfm3E1C5dHfwk5f1cjRnva",
  "key41": "5ADm3mU9s98wUrDy9biNrXHzNcuBmzNFYXp1u5WR1ddPuZam1F5udzDjiqBjm8bR2j5ryxgSnpmtefrUtLt9c9DF",
  "key42": "5LMrH48skDeanLDiJf4eSQhCy5kwRHJDvZKqC8QYcnM1CMjnSbiYcmGjiwo1vcjXZExcs52baFXnjrJEqGrnpQ8s",
  "key43": "2m2mvMd6qXK6nciwPr8gSFLkxS8NrNvc6EsuquanELK8oYWtQmaQPsVoUDD92zymYYL3tRrpov7jzLvCwKcCTUJG",
  "key44": "4F6GJWsCmKFnpUTmuFxG5spk6ynb3yskvtBfAMULcdWtSTo2AtZZ8wxk3yj5GZPZBQAG8pVKWQ8ZtojnhgsR6PjE"
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
