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
    "45ViYLd21CDhJr3eHH4C1d1keCBqpSmYQ4476wSjyC4isAwnyL3RZiUJ2humkUkJfHRLmE7V2tdASVzqyRTMaZz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZ1uygtbSqZHajhsR69WD9wLRWaZvJWYv3Wqdw5DYUReKEzwLVuSNPg8sFaqsgb4wsY4yseWz4ZPwXnNBgdffie",
  "key1": "4S8TZHBoLhdu1MBXFgUPnEdkujGEfWki4nGVZYjxTpidaBgaZj92JiarZbz6o2JY9GC8Bmcg713KUzKTEs9ndtz1",
  "key2": "42X7apfjaeefyKMkWxaRcp8BouCbMW2qkhPST2CDvmeWp2TxxuXd7BdV7ibjRKxNu2pFutbAwpa5aLi2NJBWXXyL",
  "key3": "5VhE6oxbsHKYgimkgrWnniXXSRRyHZ2UvjZzo8MCzF8R8E7JbrWDc4mbf2abTsZ3N2obU7bGXd51pDQ5fhkBomf",
  "key4": "2Z18iFMZPEjcskCsppSfPX8paG3PCc6VuKXv2HJMFo2z87KShc5QjEShGsnoZFyEsmzsmfeFT9gvgbHSMuGECEDM",
  "key5": "WwRGMW3tXXyikremLHxMYURoQMfxGubJdN7J79qSMRvDpBtofoFXsQZ6GbAJXnBpdRNjj9JRVZwWhr1dTt1tn8y",
  "key6": "44CC2K5ezEm342bCgWj1MHCvLxPpvYz4fRDVG24TirFzPtbTokTF1cSHwGJaQY6qoHUhmgwRBjU631as5wMP1Zie",
  "key7": "35zaxNXDjmesR5WrzzangSKTehaUR7RdAmEuwaKXmecBQQ5sv7ELZzzaX97RbPgfTu1iBMgjkrv4d4kWz7M2bYZN",
  "key8": "BdddXdmeN7orT57sMLNLjrK97k32F8t5sNuygbwyctkEankGutxVUMuU7RgxkDyEB1zbVJjWy51baBay25HrQYk",
  "key9": "3V68496LSPTxKKGY3D2PJaKNbyPA7XWkwYZJ15azBcQnwD4SaLHidq6AokBnNM2pdujPTwrtbwhhPRo6gRVWdBw5",
  "key10": "5SSTGd4xMxsmkFuvAKgkCafP5QYs2dYZceAwgNM5b6rVq1TeSK2e2twkLdWkxWHh8j6ZpVf9iEUBpMfxa3VCTPAX",
  "key11": "7F65FFgQRMz8Nta8HzGGLL4LJvwZPYRmUpefruZ9AtcPzBaRG9DzYmL8YBjkPU59Us55oa1pZrt7ffKdhGd822G",
  "key12": "5FEiqn2eHM6u6hLxcNs5fedikzxpR14m5CrMyFcNZLJcGGpvvtet6D1B6gUAYM3AVFKXrKNNQY8oWQSyjQQhTRzh",
  "key13": "3uKQUQjS8Ka6TvrsbCAQbTXRT2KMiVJfDhDpY8LZAE2YQpg9XVh2HP3xvN4SP77vTkE9VHwHcLqf1WKxWeu717QA",
  "key14": "2umEkFy6XiuuyszNmgx1Kcz8hFkktGXW9G8C329LxaeBodpsEUCwd5mujQgt9KoGEiqLbUhoqsMyaFavNbReNH43",
  "key15": "LRYsZMGTg81geXkQf2eFyEdegskmqSRKoniEAiEAU3WFhQ4q6xeeKdaUDW1vianhV8YLvvTq1dw4YXXyXexsnHo",
  "key16": "2R4Rs26i7x5Nf4sG7K88sBv5zCVQiFeoKrFtyeJMsXHXQuJyYLEhpLQbHshbTyMmpgkjcF6yBcBdHz91Hv7EDe4q",
  "key17": "57kWzDJKaM2ygnN1SD1fNN3aAnK4pkMy4n1E5rtPms5G6DLzurAZetfPPY2K6QVaDns4rovy92t9FaPNV4fX2YYY",
  "key18": "3NPKS8BamgtRbXCBomNArN8LxeTJJMK1xZcmgSN6onbd1896qkkd39w2fkZ3rijMYoCh27gqo4b6sLfy3dFwQvsM",
  "key19": "27PwEr2oLQUe8UvDJxoY9iPdGW77K5gKeBdXe6mn8f1WVyfYUGANzbQrzBER27xXeDuLU9xtUDdLF7F4NPjFphkx",
  "key20": "fFqb9HU7jMc93hbX9fS3LSSbn9qkR6JTsDMos2cSfsMh7sbuKsGjCQwWCMkRc1eQ4JyKMaTH63g9bV8vHTZ5gdN",
  "key21": "5mJUfS7r6imznAhWxVG3T2UPd8nTvUHUeoMYjXAuqfeifs33cTshs7EvPbrgkQtndgPDNbGU68YE5QdrUzpGCnA6",
  "key22": "YHsjszeFbUfpEs2utWSQ2yVnDh7j5WFNmBzJnp75zmPaTqB9kKX8cJGkTLF1XFTYDH1K2JFyD6w4kNRBUSVZVnJ",
  "key23": "BL8qtW1mF8BBiqmptr8NZUGpP6dMoPK6gKyjERQsqUabChEL1dTPmtpsX1pQtqgxtcFtbBdXR7a1HSjZU1czZsL",
  "key24": "wYttW6UTrCYsAtGk7S1DfvJZCsi6XsE1oUY7BnK3Ctcrpy9sA9ZiiNHGVNixA4QomGAuFpuGxMGp8NHdc29qZff"
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
