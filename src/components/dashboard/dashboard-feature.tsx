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
    "3KwSbD7vqhcMjn5qcDc1hb9V4eVZPVtnJqPUeoEN8tqCcAHqWGK5m8rNSfojT8ko3fVhUkEfaxK2Ljb3A6LV8CAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4uVPMdeKEhveAsLeiU7wzPDTPsRZWP1urdFJjLs75wHkYicG4xRfg6avhvbKNjou84PZC3agZ7TqXysgExZWDJ",
  "key1": "618SP2y4oEHUJpL8nEzXWGjF5S3CvDHnDfV57Z5XYUgPFYNG2tm3HeqmU2BY4CuA78h2JbUu9pFPLvASenyNpXzP",
  "key2": "wPS9VtFi5AY5oYGZtKueRhcHCgswZzgEC7Lr2qESJq2QaZKJ1g7e9JqbsAK4yjxdhKAt9GUnuXvKhmcLawFD8k7",
  "key3": "3KWrHp75WrJvYLxeQf3TZ1TPTH5w8TgvrPKhWQkThq2rc48wd6BwzhJ8DsTTv4DNornqN5fUz3bitA91a8rjDaTa",
  "key4": "9arLCaJSpVBSDDk4NdNJZPnv8aukM2r4b8S3HBvf9xxYxkVN48dhUsZqNCavdXYzMgbde84qoesTApgQ56edKLU",
  "key5": "3xd3Zsf7aw76m5eXJa3RuQyf7n8yJGGX8Y1gtsNqZF3HxUKzTb3MRW1DhSWZxXeVM4R3THC5CMm1Y1fJTNKt2uhc",
  "key6": "55igXnY64UH9wEJmyRfEfXCnR9vhTv9Xqpy3ZauwBNzfPFchjYVJLEEAPMLXLr1wMFFxL9vTVd5VUW6v85Ha2SBb",
  "key7": "3JVH2qDuT9Ac6FWv6JQEA6MrkzL6mJDz39qYtEXB7CHH99eRXWJn9Y1ES23vhR6iFBDt9bL4ksFh94KHwKeoWbm3",
  "key8": "22PYZtvubepMJRKdgg3cEsHpzGkMmHnbG1CNui4he1gkyvK727wxFyjz523DcPcYMJjWb6vgxpuLfekBoQJJxcGj",
  "key9": "3wrMXuJvbr5qZorGMNB5BkFFgjEWiMcWSsWDJLTH49WsyfEiynN89TKnoVM8KyP2CmuTgZp2HgbD7wXp2q49ThX4",
  "key10": "28MqYaVpepSHQ5mxsXc6Frc6tEmAwyrd2UZX4bwJF41YtD6qnUFvQE5gq6eyUpuGjH4oP21L2tmjEHmiXGLgNAZj",
  "key11": "5q9jA9pTbRNswC2hJZYaYP12iD1j2DN4x9gj8qGuSNuHkPBiLbLqRq5vdCCpQQb3va3jwKo9nEpw4baH1PA1mNn7",
  "key12": "txGWp2rfws9A8Dv7pMtjmWQb16HfTE7MZRbMW5FEWq7JtG8gcyCD6A9xa4Ko3Tfqz1GayzxHguJCFMbCV6KEXSA",
  "key13": "3rzPDM7DJJTkND3zuFMWAbtNbUpDT3Gr57GRKLsbGGF6hGPn2H3R6Nc4EPWynVp3y7rDSjtUZT3W2bkPb1Jkabmu",
  "key14": "2e9aJU5tQd6TjrZR3QRooSSu67PkAh6RbzP2pAPmVAS5rF4VC3TfNJEYhYx7TKLi2btKCSiAcBUsW8RERedWTLVD",
  "key15": "2ndQveKbcTCXhP64iNV2DcrWwZmwAzdvqJUpsd1h63CDh3boXXDADNaxi4vb3uuNFsRLpMRHPPMatW2kVnANRjQC",
  "key16": "2vvm7QtpYNwhXHoVg8dYHpjaeGBZidFxvwyqPZ38Yxi9kB5hWBwobUWL3peSWtPvcwhn3oLRxx249UdnT51krr31",
  "key17": "556YkyzBuB1RzudS9UHuA1q27bd9KGfK1mzUtNtBhhUuFckSZ4G3DuvqaZtJ9sk4eK262b48v5UzuqCJFEshbrqw",
  "key18": "3PscXW63kBdLZsrp69wChKn8GKwPWMQn6FPKePiTr1AN8bjWq3N6iNB7mS6sWKuK7R5n5NeCTWwJAfLhe5ogTcdV",
  "key19": "U63BQsfxtKd7gq8FefHVm2sCrninNYRnakbnxGezEZ74TJW8mrmidXEsnCX7hqxNwV345KS7FbaCWyhuLXpyb8V",
  "key20": "38hjABiVvKzUnGuZL5Tw3xpyECnRR3efbwoMzyQ8FoiRfp4sD3QDTtfqeDtsrDbq5sDVAjohryc2xiKjFdq9hFVc",
  "key21": "66hAymxPFWiPJzbPDohSc6wTPY42rb9Pppzc5SYFvpCMBQkxtmo3rRm6YjEzEYKZpYT2sv3rVMgK85mgbNhJBsAU",
  "key22": "2RFc5RFP5ioNq1DpMKM8pcXB6qpqXW2hpYVvD5EVhmpUS31aGWeU9GU5QAcfdfCDRJpWY34Qeh59n3HLvsnEvvrz",
  "key23": "gwFE2Chge27mbUMQ3ZFQqwt7BG3MEaQXnAvEjFafKQuB3Hxzn6EQNB8kqUVWvzRmRsRUfmdqNZKjT5LHoKJMch6",
  "key24": "43Hd33yPy2E91roBPhHGNA2PhLQBj8ZVXNod5n3etd49W2bmhL5fd3Q2NgYXqYSXN6fcLjmFedhKdFCkYACcAVEt",
  "key25": "2JtVjeJ5u5xiKMkMvYjMScA2BwtR2iNxt9Kni71PiSSvgkKuU9t9td92LdZfiNgrwob7KZjBFebFWniM9324bQqz",
  "key26": "27QNVAJuS8vzm7Umqg3qe8qAdawQ3bxk4UmYAuKfgpbkvrKTvKvF6b5rrfd1gyTVsjTm5Ma9d2qvYBZPtZvuG5WB",
  "key27": "4MSLmgXwBw8caZp3m3Hfd9FupfueyV8nDdgNn34iHPsyjoJR7nzf2FL9jZaS7Cnct3CScXabbfYYtZpJVL3EoPcT"
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
