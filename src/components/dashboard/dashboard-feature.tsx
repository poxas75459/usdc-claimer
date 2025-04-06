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
    "5hVCVXqLkzsovVheWmYaSZcUdTh1ZUebx17DZhXUrm1PB3tNF1KzLEkev9mKWP9SjpBm1L8ZQ6fe2SjzjAdGUTh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVtoCyv6ASWoxpnTb7nor3KDcbBZVK8rJuvB17XhuJy2SUxXvv7Zd7NdWSewWjtVDZfrU9CxTMP7dsnAzZW7GX",
  "key1": "kgChZ6UJ9Nz17j8SbB3FAieTB3Weot4acTYRNJVBTdF8CeH1J8UKJcRwtFLAqDQqS2X2KbNVr6AB44W71JiW6Sx",
  "key2": "4hM3nh194oMo74pyfkgweCnZ2B4Wm4pnAkgGvxERxjXocG9T119bSpdjoa4xymQUpufheDfTAi1sG4ogPHz15bGB",
  "key3": "2VPf3T1VzxWRmtJJJKrqb6NHzuR137oBejuqK297xTpr4XoPsmGAeC7grwEeEcxPbDsiQnemE3ymqQKCtghJ16b2",
  "key4": "2JhdDXTfRKM2hXeWzJUTv6UUxSaYsTpg9DUsF3fdRnGsrbofFsjVBJ4hQsopQHisQkbXG7oiPiwpvAXP6TNw3vCu",
  "key5": "5923cipmukFzKJrxADXsA8ydiRm5croPXYyvvus1Rj6CAUnN9kB7uRcgbxexgjMbsbjjjwppC15omdLRL6mCwoVV",
  "key6": "5B2vFZVVhg42oz6hUpu58NwAfh5gqZ6P3wpBrKTED3vZFJKXnTnR1Bs48ZFuVn7XMhTyFEkCJHwEriknd7xeHa4y",
  "key7": "5CG8DoLPrmLtsD51U3GnXSY86Sr3XY9iVpmJD1y7zTJYHMkeZ8GodqutRC3oWK9BRw8CcAcnYpi3DiSEDmoQb68L",
  "key8": "2LtpniAkGrTtE5RAcqxsooQ63ybKUPvP4GvbVirrVRLTMAiRSHxzFS9UHfSDLfAWxRRpva6qhAYp9qTHT9YwVnBq",
  "key9": "3FCLB2FkfuCsRWqFbA5zeq457JuRvDJkYJGQBTEZJoTNgbBHLE54ao5VrRAYaF8d5iwgMnfGZnEP1s34yZxFv4eD",
  "key10": "ktkitWkveHHz9nahEJgvtCFFegGJwwaLZmMmMFQi3VhPwNV2wyAgxGoFwkHxwtZqQotWD2Tz2AqoEYwQ7uJwJ7T",
  "key11": "3VWda74bNkKrnXJd6QAQ6Zxbp7q9gZrQJDpaQ5YVhPrLHFu1VMR2VBYCqrgJqat4bhEuLUBXEGhA8wrfoV4usJWo",
  "key12": "5rgphfwqzZmN99SRnkXTktD2KzwdLZ7VusU7movzBN1m5zDnAxbyJpF4X69opZkz5ujsNhhjn4xJdBkMm9eUjyaN",
  "key13": "VgnUYqnUEPUjrDshAuD5WrnDhmvSoKXv4nvw7bbwTu3prthBiHNaRrev7GT3s3NGCq9jRU2qqjijpwQFpJc3Qpd",
  "key14": "3YnxQ9zwN8LEASoULd5kzfUcw9FftSyTCaKcH64kRBv7j83cffLBnR2T1XL6b3PshUhZNEoW17YjiZU38UoqWRBS",
  "key15": "upfC9ATCfcRdUJYcX97wxgKyPbQJnYccSCKerW9G3BVjrxpudyuN7KGKKB16eK35rYKtMWSLNjt1zhTQXUmtgYU",
  "key16": "2Sk8Voc11HCCdPgP3UfeiU85FDcPXghk2LYAouZxTSMGkv6K9i2G8xpfrYRHJJLWUgk3s3chUYFP5zGq7emFa4KE",
  "key17": "4B1WRAoRPZ45w2YFZjqSKpCcAKN6NQ8qrR9JAU5ApRupTm12qEF2gU6LSxWKGUidHgg48w34sDbSvNPEiVoqv9Bw",
  "key18": "FfVTG2xNRHQUznMREP8aUeBH6Etfbcn6UL43uQXjVCV36LD1cQ1kBuCFq84gFmFeHLaZSydhxsyeHJsL1tCMfp7",
  "key19": "3tDrCVE1w2FUjGqCgxtfzmnWhDaX3HGKPSPKCZwhPKNtXNu8atKH6srGkiSYfTmkmeKL5Adu55GegD9UJyeSrbEp",
  "key20": "3N3172xDNDRzJ6LsK3k1XmuCYvfzB39NHC1e924TErJp7jVV7ypZjXvkUQNQpjWnKbGDHd1r534JHwyyztHr9sHY",
  "key21": "3jKCyZo37gm2Fnh33895PVGiTgnc3MqnQH3X87fRK4DteVZp57zUfZuZEDEq4dUJRoU4WfuKmBCn1dcTVMRXcGDH",
  "key22": "47Khv4MLDxMd7VWueCAth7SSZHGAZ71qcPfq5YiWLyCBFzXGiE7owXyCRWaCpmoBFM8UUCtfa7gm1zgZfbgBbvXN",
  "key23": "3AKoaHQKA76wPPmPnDBxQZS7SBForGc9iXuF1cffk1Ss4u8gni5JSJNdWzyJk9DVeHGFT9pM6XUasbXdeizDt1T5",
  "key24": "28hHiopmpJ2nKHsbSdA9yxuEPZAgcVHYLdF3S3kruRj7xPLBwHGRnaVK5C8tx2kTRz9QmYNSaobAdjrpGRfBT5Vq",
  "key25": "2k811F6MC82G3eiiHzttj1vK8yJP6jZk5FMbf6yFvcKkNwsJUjq9pXq99uZBgMykdFzkxYtug5xEB8rL8Xenjye8",
  "key26": "3QYtiydPBCHrwDBmTo8DEXDNstZNLbjjvpzQh9NhqsdL2qALRUjRDaoCBYzCTZRGyRuzz8b7kvox1oPGqumrvi8n",
  "key27": "37zjUaB7aHuHkHrSx7x2GVTRRCU6Epa4An9NVwEPaRKVb8bJUhscUGsnrCc9HbhoC9u8X6hscjQtB7aShBnEdaBD",
  "key28": "3iAsewNDhPfHuA4uPHE9wVBHgsJCd9LTp1CMkeBneUA5b2qCH3YjSsNyxzqsNoLj7bcGBfa6R8Cp37HviAY5hZY4",
  "key29": "5M1ANYCXLqD1xMhR95r3qYs5pYcH9KcnXxpatXxj4iRpqnhPQFQ7G2QYYR9bt41jGySde56xr93RSP5AP4B68k3F",
  "key30": "2XVV8QFfSdciRtMSYfEcNN7BqQnrDVvUKhNKvsJuVN2ibCkEoy5PqypBH2mfo1wgXReCNsG3vLj6K8iGVpLUo7RF",
  "key31": "NTfGUVd9Lu1uzrx9JwAvx475b2NVnf7zJeEzCJkojbB4y9kTkoP15ccbkdpzzdHKbLtjHJvcKpL9Fah2qAj6kk5",
  "key32": "5sFkfDNv2RDBGME8sHYP1q1P6LFzkQ4ThpL5ML5ZUkBRThVQMn9pkxX49MegQqBrZdAvCuAdbUBQM6oYgGNdv3B8",
  "key33": "5tSH1jNNmSGfFFkzbPed4RHbuW4yqLrhFtFCLDZSqVNERGBY7dyLhoEPtmVdBBjJtVgBYfNBPXAUGwBH9jahN7LB",
  "key34": "5QUUBWr2Xt6KPqU4pQheeHbPKQGs8rEX3xSmupji2EqFZ9M4fAHhnV84ZZVWF5beJargNsRpES6MZqvAnvWcUaKE",
  "key35": "2T4QkJzDX1YYzCaXe3haTqHXh55amTDYGAdB7RD751c3LgZEZrTwNmuaKU3k7DDg9zBUFGBvcrKeau9m4BW6zAZo",
  "key36": "55jUVGBz33MNRgmdfzARXJ2CWnbvWnjHijFGfMA7TgVWXqD42NQdHELx9H3m4NmuhczRqiQHnEGnb9X5ubLp9KhE",
  "key37": "5GpU8ffVnaHibDXEQCkRGUsfzqddEv8f5dCsvkiZoNZo6J3Pq1evkEpBCuqvjMkTCqc9rjAfoyC8v8rTrn7Qinyw",
  "key38": "Zx7bLoffUifttgCcCaQ2frgq73G2wG79ecpiXU6C1ZgLMjy7qbM595axht1zzW6vjKrgRiqgWxUBXYberfEXs75",
  "key39": "33HrMnrAU5tpbaS4Rdkq78wAxDaMSCCdoS4njWHfcq5zX5DENcgRBDNaJ4KBZ1LPpoRGGT5aUejDCbu9a3Fxj3yc",
  "key40": "255n6f5F9akLzA3PE3fKTtR2S7UK8CofP6bJnujzpvWSv1pS1mFRjPmnGMR9WS8dmsPw8HNAVXzU9MXAsd9QsFqG",
  "key41": "4sGbYi2rDBpchwpvBKvkdDuB8YQ4jqVJXs4BrwY7sSwXkYJ8XHE9HserKz4xyMXLAVJrgLFUSTBmLpV4rHFJ5xT9",
  "key42": "3ESLV2Gtjgr6DfT1KcrFjT89YHvYHi2bTHM18a1DpjWgBr8bpj2Eksz19agZnvLCfvLhcGgE66pS4n7HUfqiRDHe",
  "key43": "3Fn4nZn7XQCEmvxuU64f5EeMTVDVjJqEXbQD3AyBTmLSMmzGLYvdJTKxG9ZCsoZnSwcFuHwjGFguTQaNwTS4kBR5",
  "key44": "2f1fvrfBcAXmNuA27tgFpaRLk4dNEzHan1nb33qPdCrCHofSWc4ymVMNMBmXAaDK8MT6DCMVNFED9VdftoaLunNp",
  "key45": "3VnxdjoLXYPiS1EkWEHLSz1auMWVHFTm6XZ1S1fke4LZLZ4QaUycWNJpBnY6Ahm6EgNCFtQTyrfLSko4fwviAYir"
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
