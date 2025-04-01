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
    "3tpar5R4CfPnNrjtt6dFY7LSthuZ5m8D2QfRhrN52NXJLWt6F94AAHkRyW2wxubcycRdLPYEk6sajTC6AqrnqWkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QdWW9Q5hfArgQmZwfvncE8yNhvSnWTnx8NJNMX5W3HynktuC2wFmsihJ9TWsVQe1JG89y83svmscNBPvFPJS1ns",
  "key1": "2AkMb7gJoPsjne3HNg2o2TjzSMN5n729vTyjnASryKoZ6RLxF3XuJ57hmrEZZaKXGNQTZSA9Dsryq4c8DDuLzaQe",
  "key2": "67CbB5gfDVcgbuRW2vU2teTugudahMZYSXYuzZRqocAorbku92dBBcLVMCQM2o97R9HnwCPPf3GqG1fyCBNGxfd6",
  "key3": "3CYfN51jao2kPYZq1aCqQG4ux3cnxWnarM6eWzrWpSwDwxy9WTvFpfJnQdHHBMAR6wo9JBdxbwWZk6gwArvN8WBT",
  "key4": "3nmNof5PsWFTm5dsFj28Ye2nv8AGP9fbp5pMZbennPWAC9rRWM9AzxWfi7qTGNyRB8crbrVSD2AfvhzLdcLEWFVf",
  "key5": "3AWfvgAzYd99NkNphtFF1vYejCS2beyg34LLU5DZdYUDKcqTAyiYsV1JzSLCNzGABBuzpeR3BNkxJMVjFfapy6oy",
  "key6": "Cnmmwu7xnzqsVMBkFJ7T6AbnPQo2LduVSVTWPuKjr38eWSzqmr6T4hUunj6sn6c7MMM2U6KAKQpouCjAuWbWwnY",
  "key7": "eMA3LRaXa7gqk2cuibBgAyg3HUzUzKwpSicxRJ4dpxaLEqCAA6UP2CJmH19p78yTNAGdsnBCQTHuFP1dN7DriFo",
  "key8": "4QBz9seFNCPqxFwTnHWznkCqUWGZQzUKrkwU95M7YaGvKPJytvAuSqWygUp61BrAHSzT3XBbsYkBPYFDzDxbnCyR",
  "key9": "2UCgPuBuc3mjqxatPMt5pBU3VS1Pnq4CeobEMLJsNBY26U82LiTdsTzcLqUiCVftPZoUR1qGEYNovKvwZi3hU5T7",
  "key10": "4az3HNbgLy92GKXGE6qWi5J44E7omHoEkBmcKGH7WzagM4g8pjrz49YcNtBBKCVhbQPe69eBE1A5T3Vsf5r7cFrj",
  "key11": "3tA1pxva9ZpbMiK2s81RnQeSpLWHPoBdV5mur8bfE4B28yeCuNkAa12UAERKVBzuQYiUi2k2vxiEuGWukzKCPFtm",
  "key12": "2eY4YuG7p9jUeFi5DreWoCtoiNREXzRHLxKTL94hdTzA4jyJZdbroxfWLQ4tZEgqJinurcPv2xptpEtvQ6TaTga4",
  "key13": "SkV9D3RgpUwb8KFAwyKPanGzZ4njKryruSvaQnk8BHeyZTuN25NwDrCaQKS1P3SCkp8r4rGtBkVPnTDieP8ki1R",
  "key14": "3YuoWjHuoABuxf1ZkNTojjoSs2Q1Wz5yDju6krAgMszsKcgZwqtkCotPyXRmBcpZBqTUGoLzKMaUd5tAeGCRaRzN",
  "key15": "2jgo44dSDtyb5eta9N71m2wKwCDhA7MXLXMSr3R5Fpfr5wpkkEWWqGxJgj8yuqWzQrpGjx4Kda8mhCguK8myofiM",
  "key16": "24h11apyxdTrNdWp9nRDLkNDJazpjAAwgJzAo2Hj8fu88pzGYVPLCGaBH2VacLAe6fFGxDAKc3ebeMbU2fxLVY8t",
  "key17": "4DFzVinjt15CZADDD7RQi3FL4673o7isMnSoRYzaJuvWW4PxrJ3y9iW5KK18qoKJGg9eVbGSSyuArp9meAiiRpYV",
  "key18": "278QH6aKxgvJMXxkZvzHKn8XhQk4HWtSA1SrP2NjaiKW6sdz9PGPkBUNRy1iGt45JBduR2xGLBepJSs9Qb2RpEcn",
  "key19": "46YgJRs2sgHX5zSn9eDVPvoVv8ufL3ZSxP32L93F2U1MTbhi1sjKihYBcWSYmURM1psbZ3jE1popsg3k9Zchi7pH",
  "key20": "2qGGTHyykuK5NoRryvexeg147NykupMpZNXzM7sB79Phg5wh5bSAv69MLDnecwKzPgjNXsqUeDYRXVnrEmFBJi5T",
  "key21": "62MoCCsb7MMbVWkxgJx4jArtjPVvPbj1Qvvjb4o2BSvvV6HuB2Bkn1yE5ENQKDru2iCZa2gqWEHTWB6vhQk6oMTU",
  "key22": "46EZB9agFwLkLc6Ys5VN3DDYutvZawKYu37QteBiYNP4kXzF1xSv55yyqVeak6SDfjLDzPpqbakvJmoBxmuezxCB",
  "key23": "2v1Na3A8zfNfEWpwha3jFT5PKAzxeRxg8iNHWyzhjf7ByqGpQjxq9wCGiMM2jLVLtUcp8ms2H97gWnZv9koe9c1B",
  "key24": "3SXDA8U4nPMQMdn4uCqgcWCWsKhG8xxq27YTcMctWRDwoArRBDfo56kLghpmH6jP46sakm6DsT5HyU3v9hY3brUJ",
  "key25": "5Bw7rVb8irEV9Pwzmv7b4CY1BJfeXkPbCKEVKWozRmP12KzYTFeq4R4iNcT9fDMamabUxw23mdsAzQzunVzchd8h",
  "key26": "3iYnmGT1XuD5M7JedDhLSrBTLz2ihpuRJ79kohVTP8BKfCxS7HejvsoiUtB5yUnMyaKdADjb9SjH9GQ1bsQvi7LS",
  "key27": "4ZW87nzDZEP8B6xpB7GzQdogGK61o4B8Pkowux2DHFFQq15RTEfuF4wtvTjbjSfp1zeERYTgfbcnEkBDRREG6NAS"
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
