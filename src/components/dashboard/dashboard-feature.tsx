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
    "4XTqsY4HcrgNtZ9XSREkiWpeSfL9xtUGLTE7o2PNie6Lt7YYS9j7nsJ9c4NwJucsvTQjygpNcGEJ9x6o7Zm3UHE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnsM4Vgmhj9W7RiSWVuycH8aULz4VTQxdoidwiPPDuT1d9StxsMEiUNC7ser7RPvZgkpA85289h7GBbniBz1eJq",
  "key1": "HM6455wJYZVpM4c5BGv4ijaeJRyKn1w3VvgjJqtkNmL4PDCQLR8YfF2WoLyzRcWEfCoht6GFUZ9oa3CoCVUGRf7",
  "key2": "zK6jTCd48JBmENHhVsBqHxtrsCaecNfMtynGn5dfa68SkvBauUe9dwTgoSuDDud5jAvQ2a9Wj5KvWAis2JSRLZi",
  "key3": "L576Ty6kbNHLCHGR91LsdzBh3VBtk2gThUWxh1Xou43XswTkFmt3jk5T1k5ofiBSqwchF2izrVafzmBRJr61DL5",
  "key4": "5M2dYc4EEU4grkJD8RBoSryvKUKJBvCRkFNut2Nz1jTi1Ve8XKYzjJQtgNWGqitPE1SpTLTtAoZXhTp6MbFatGqV",
  "key5": "2S4mMTYH8FjTpXjUeJzssEQk7EfkH3tk66A88dbgGrH59mnDXoMZSX1g5fbQQQWx1DLuae5pGNtVdyDm1K4WJpQ4",
  "key6": "2enXuc1i6CZHxyXPYrKWw9Ub3JqHCjcmaJuKNTW8ZuMXArAWdJGPNZfyWhC4wofM9m7gSZnSPdVcmT2eU5MhZpJK",
  "key7": "vkxiBj1wDKYmGsZHA1QTxmbBtJGUNNBWbTdN85qY8R1mTWwdc6jfufcHuS5CFnC5zKVH4tS9nbXp4tvnoE3xvVj",
  "key8": "utxwH8dehbEGX6dMLkZoM4YSE6DvmB5GpXwUSRwKkAnsu39HQUW3dYPwFYWJEf4pimx6sDXsGkfu5N91Pi8tgV3",
  "key9": "67AQ57oy1ExvmSEJDtY7JTBWgheBdqfdWSZqyVPsz8LNDXFCBkDF2dagfJHVCtLkjYj6mAhvS7knXQLt4WXoM9y1",
  "key10": "5ss2DbnwZ6WejyWEAEbTqa1TcNv3cgPVfBjNPpU8tCyd9DngjXpQm5tUCc2LR6RcSp5QPEei5mayYVT3eT932Fb",
  "key11": "EY1tNqEF1FFgmgvnkC2UGF7EDcyyM3AVz28KcY8hou8ioR1VrmugNq2xpcKE3xPhmPfVkbgCPRbS1YhSojHrg41",
  "key12": "38ez9Xc1PQkNBLZRgnB56mEc9AbCacVX9r1bkgDdtBm3kqcFQayLQ3BDnr61yMn6NNuPRFXuPGygcGkvDAdzXXYk",
  "key13": "Nph46XeDGgKiaMQEim51EvRBqcpqTbrpJcqnGegZhfjRAHg3npNiC2cQFYFKk3KoevjDtKVk5jaHGeXDHQFh5w5",
  "key14": "51N3iBWCXeBTg6pCLAB59Muw7aatFi1dZVxpsDW9k9dpxnkd5eoDz5YKuc57wZffRGuHmDj52k1nYoMewUkcsa59",
  "key15": "5vxRFYNq3pyeZa9Na4VKzohYyEM1oNwampQZL1Y7EKh1gjZXRnFSKyXtjs82FX4dLjesigG7p35cKZAhCugh4rcA",
  "key16": "4pA79WK9y6zBKhqZHLFPAToca7NMcQhLFJtfAPGRXxhArUYckELFYk6mhKY8dUTiCQs9pxczQxb2tdaAT5YUctT8",
  "key17": "5EZKro8UvoaoXF8CHbHcWRwXPf6LiRgkg38eVuJznU9wGhumCM8fgBRns2stRUiH5KC89ugoM8xA7oxRDHr5W7dt",
  "key18": "3SrZ4m22bdZFu3ssVX9EAHS5QxTS5L6hba4ZmD7x53NNsBMgY4pPsygBQFbh8ScGcfSqRLF7u6RjQDmnkoqUr2ZT",
  "key19": "4jfQ8xWnLR9UebBKhuJU6tyyY8ijEWqCGup7UBf8UC8F29sRt5dkSN6JpTyLrJGFzDwMAmmR4rnvaAzkAGTkqFym",
  "key20": "3xvU4uxefv1ZkELMr7aSKSrc21MCu6tRKV9J9KC867GcgmmCmiw1LyxZgrUa9aNdALSWfcKjGs7FexFbrisaAnBF",
  "key21": "5fMNNRrifG6CV2LvT2FSnEb9pBTHLSQF7wRqqCzVhrDTpdczewiFLWArNn5vgoNSx23pT99DCbT9p1jsvNxY7jFj",
  "key22": "2oAzWkUsmdQpyYXkfBQJk5bPyB8it7vwiCLxVUHfYuztenYspbzhBJqRob5YBAnTdTrXKCN9MghygNPRomcodQHm",
  "key23": "4UxEZX5xdXTQJty9KpcgYEBEg7oSvAwWu8YVb6MGHZuADmq7EuRxMSx3yMGJV93AZXTGbpFDSk535phxRQW1YkHC",
  "key24": "3n92k3kvER65DTLchjdJWfAFuguZ8rYMmdP5Bqx2SX5cNpJtTBHU3DW6gfgJReZV9Di1RmiGBRQVfo8QNV9Toph9",
  "key25": "2suY2UNGTCpZrAuiHVzFsqx2dfs57jJUjGDbfViQk8qu1P5HgBaatp2KfADCY4cP48yfS365SG5TS83CZCJYW5N",
  "key26": "5EqZkNVakdy5zfavgVZvQfaRSNQJZYF7NVYVuQeNXehPfqqc3Y3Mh9gjSnrBnMHszcZFh93HChu37oTi5zVL6kKA",
  "key27": "2FNvZskeZxDfUREGct9qgSx9YxzaE2brY6j9etwK8KYVrrvfALwMvn9asibvg9bGJXT8BydNMX9BJDkxHpSoLCFk",
  "key28": "eUsEgqiqgQQXjjJUpSzsJTgG8Q4yAxmCfWdWRVwGqjainEBGDS1ypwcikMCXn527K9LzacTLrgVcUt8A6HfvrNP",
  "key29": "j4F96VfX6uM6s2Vbo8t1uLLnst1KskbUtDic84zeJwEnmF1iDVaDeCLUahg8ChTb11Qbjes5thKx7hfurgCNX8y",
  "key30": "4dr3gn5zfnEh3e7EyD9foxgBHdiFkQyPchjyLQtTFg68cCgZ1bqhBReELcNxN3qDNEqcXvz9zKscdGr5U32AfCuH",
  "key31": "3SYChLTfWJCYkSg92ajta5HR359JjheQXpFrMPgzem7t7iqkNDPBW5M2kRs3xqLDDpXcVNoEwT4KHC5THpXUiKBF",
  "key32": "334GVoKAy7Uy2oBW6LZS67VNUvkSttLiafKt9fbugw5dgnPm2vzdV7oycZo6MVvmh4gaZ6LkhoHVFaFsU8pyDQAZ"
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
