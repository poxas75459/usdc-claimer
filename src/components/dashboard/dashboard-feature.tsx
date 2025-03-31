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
    "d3UGNSKekPXfUS5orwPLpUbeDbatnP9nVB5BgFdwcLY886uCsFsuvKPkFtNPWkxkkKKEwWSXwvLdgNQTbjvA8Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1qZgsn5seeQmhfGrC4iwMVRtL3ZhGnEvhvc6LdQhqH6QmZ75LZ6MJ29kj8yM6E9D8bpfM6YKc7RFEUYNGmFQn3",
  "key1": "5wjzrvrkAbaX7xDQsG7rBm8YEAPJcUavy5uf24sCUF5sGa7DcNAsSuVGV6x4iZCVc8MPBuRxMNgAtXnuVWkQ4isg",
  "key2": "TdgoBiYevJ3C15qWtTQEwWeU1g7Eec5bdofMLodnPRAju6K917xnmJ2HfKmr4VhQpUnygx16nfFbxgAGD7TSsi5",
  "key3": "2NQJHY94g7ELPJv1zoaZF4aWCD9zT5maUrtavt5rL6SXMoEgZW1AqQvuuMgGF7yxhkxt9EXofg4hx68wqumyVo8S",
  "key4": "zndosiYYq9c9aRLNveuVBbxSwCHk2hZyDNkbzGLtGYwNdWQz41BREjpZLoX2eQeVyHLQ1Uqfj2vsyCxeDXzDxzd",
  "key5": "2fp2tJS13NXJ25r7RgZpLxfs1ou1LR9nsVbmKoez1bo3qcDMMod4mBgfhJrnCzQttk5Wu7D7PwsvLTid1w1S8UqY",
  "key6": "Ep5wFJGyqnkgioZCBzQDCDdHAFkQ7p9uESJxDgcPX89KKhHadVYkLsSYWxXoNjKquKxuWqPJGLA2rJ2xP7bviXA",
  "key7": "34FGAxUKNG7x5EcyzK6eyfG8PtX6DXnKyMnq8UjT1Si59UJhvsnjSuvqvb99ZjBLrbLXtshKooN9Q9k3PZYdsygX",
  "key8": "31eejXPu9A3Po1Z1RHJHG9n9GPNZDywXiFp6G716trh3GFE6SXSmvHSKUeijE3XzTPweUa18gJKBhE33iCrKKGkh",
  "key9": "2ejHFZWAgmzD6W2CSZQuj1teLoc9GhS3f4jdfhK8fgNuCb6B6rJkohP3ZPFPZKfY2c4B2p833GtAA8ZvfJqydpT8",
  "key10": "TPjumoHeKnU5jmTGx5CK5p4NG3oPvEL1VGktUqP4n8sVTWrqecu8bq6xEV5hxkAenFaoM5sVjfbaQEESE2hLH8f",
  "key11": "4DEjbppEAg1GEsNnhK5DSoJH4mhW3d4StcuXDWipnxnemAxWhR1jW7rnmrkVu3Wzk4Qto9akY7J2VNC4wvopy5fE",
  "key12": "2MtEurvoHWjQccWZZ2PFuZXmD66fPb5563x7sb4DHFpfoVBXEd78SnDof74J3xcMfq1CG5Zr3Dx5fQiB2iQ3qVb6",
  "key13": "Tob8uSuCRatWpFmdN47qQvmCvkVWpjt2CjXADae4ptDvFNdxJsY19Lye8bCH8DVvkvodcCPb4tA6uivirxHr9Tx",
  "key14": "4dffQArVUbHtEyfJh6XLZbnN3HYCm7NUvqcXtepCtbpxE5vtsYRx9U6QQkYs8mHyn5GknL62Pu5RdSwoz9hH3FQB",
  "key15": "XMNqyWNtmF8yYqFzMfe258NuBtFQggkUDVWU6Vj7kHPSqdNgbPXd6AhiGuEUweg31SHmyRa8wzGjZtKWKizQV2r",
  "key16": "4JcPyUSs1LS2BHpqxJnrssKxLFHYRSjtmTaFHVwjtT3a2s7HeSh4Syh4Q2PxdNaRwsQZeqQKa9pk5X8MpLHfVU4a",
  "key17": "59HwQ6Wa38a3RoZrVpdzTaoak2PvDuXipok1EosiFpQCEYvyLMiLfzivgxVsmt5iH9FSZFUgT4SagxsSoSCRonTt",
  "key18": "3gFQqdYfmDCgTiRCX4gag1FBZkMVDWmJJ9v6Be4rvw62Djb5oV8LjgfVmgAJaHhwH48LRRRu9qE8rwSBn7VcheSn",
  "key19": "4xa7bCaBorugg7KXQrSoCHifwvTcH7R7Ecq4YFqwL6bHaLafmXUWrDJYp5fuV7tZAEcV5tDuorDP7QGHkgaUVjYD",
  "key20": "3mBmLrpJwJojFuJuYT19txW9D9Nwhx8ExLe4eb5HCMjd1Mgz4sHGMUcvY8LMac8NwK2FsyL6UV8W6GqoUPJcQ8cN",
  "key21": "4Nc63Pyv4YAgqbLjNuVmvJePXpu7QhATcitx3eKewXYGfo3vtqL4yZNVmxbXBEMAifdz9MboDAEo3MuWwNPP4Xyp",
  "key22": "5LqTLrtmArEtmQmgj5cCAhjVUJiqYv9E6gh9rHbcAvkA2KNHPVj8CSobF8xrbhzSMhEMCGzbFMt1HMrsLTrSDWGQ",
  "key23": "2PWSzQihZwroLB37Kj982Tui3NCHtkeEoYAmsJup83iapthx8W8UPH4JRze7zGRnxJJRjEm4FUx7BqiHJZVGmUvw",
  "key24": "5yfTQVF4Fkg8mJy5vZ1MQ8TYGGpj2stZ8EeN9XHAWTrnu2aiTtBJtrf17gA56WQABEpJY1cMTd8czJp4NgfmUzYT",
  "key25": "4KdXtNMazejbUzAyuAGu43KKqWi5hPGk2Cep97hz5JyoVaka5aKUXbquWNSZcmBKswCrJkdPWMAuZpF2gbF88r6W",
  "key26": "343dNwd4TczbcjrZ6vWhCTn6ozoX79ZkqmL5bYMwhWLcGmKepBEUshpgmcrAyrANFaMZD4QRh3CjJdnGMrWu6Ynj",
  "key27": "2w8ptScs71tuBeFdZAZpk9Rgz94T9jnFzCYeS1iYBj44p3cNNPuwshPgBpWc8iLB31FpYqPToFZrQd4mgpjKfHCP",
  "key28": "3CstuvTtd4fBABNxhkScqrtg4okpB3icu6MfcKf41tF7NnY3LmMjhAv7Wvh4Aimd2wDbhEPoqWn5qRxxNEbBriEL",
  "key29": "5GM8jKVbFFu2KCYAWaB1R5JFs4nqoRGPNxRNyGi8y12FEQ3fWa9QNA2mpUTRNueXPGC7W7sNxhHGR6sUjnhEzrFv",
  "key30": "5hsubGJYsRP4WgiPWyV5Hz6ettSsX7Szf4ztWgFbv4gD3YzmktynLtW19tu4frGBz8SqRawGz5u46SywygkTKB8K",
  "key31": "3Y9nG9g2hxVxaiwLqT6PAFThWyRQno9ujR6GvG8v64zZjxmrC1DyH2VC5DascYFzX6qTtCiCB3LVvJcZQyE1MGdH",
  "key32": "4zi8NbeAvjNTbB2ucpeHQRpNk8YC6MazQCFKB7nSkapPLGUzUEFHmNZwJHTuohHh1ArGwyHc3P3QWsR5zgRAeRyu",
  "key33": "36FZxEvtuuyUnGf3w9svn112vorzUALFkZpzQohrrBc4oBSdvsP9TptGyBa1XS4xF6iJHBp5VDBHfTxRiM31KhFe",
  "key34": "2Wa6TbThsXAtqB3AVCqJmaGEJeHP5GhhSU2UN5eh61ghm4kogVbmdsA2tYdq4Dqr7jsbjxLoJmypSp9wvqg7KhCj",
  "key35": "5BtUjsS4B2BpsgQUiYKGQaWTuDLAYnL41YfhEBWBnnoFboDt8Tf91951YijorUYqRin28KJn2ZMULGsTC3oNUZYW",
  "key36": "tbBvp7p5rMZu5zYwNm43cNpPht7YtfK7ks5X8U3APdXSt8M3mWhgDDELPpx8Anb6ZHMubvpxESajYxyBNMsDoue",
  "key37": "4PsFtsEhqK8szeyJd2hKDA4srnZLhC5AEfPNQAt72aLzUsAbU312HeZG7NJpRTpmr4zNUm4essqiAZZDwWcgLkFL",
  "key38": "3u6nEF7xMfA2hEtrRtVRr1djHJEMUM95iwveLfAUA97u3jfqcw5dKoZmWtSHJHamgSJ1ZBcgQqmJ1GUjw83iT83m",
  "key39": "AsaHLqrxj2iRtf2Q4DoQ3SBq6kLdyjDUEx1YLdXmpQQgtSr3DKjZuiXUJSGnwg9bNmoDBaKzDAmrCxFcUiuyDtX"
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
