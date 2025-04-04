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
    "dgcAeN8P1aSYkdYyeTLSDVR7CUMZ2cqYrLdWZzEzDniqFgGqrRN7R3GhXuYgRm8SMhVNXcLip9jaUATMZgQG2PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCLSwvyxm1j3zAaEMXTQDwrtEqFfGhXpFGAZbCpHfM76mKV1CbFkmXs6NhhWMaT6KVH6DsUWC9VL9JYKtdF4qh4",
  "key1": "4imwX1mSHqhEm1t9BnFuSS5ZfuVS4WBg9vVSJ1Kb3gVgVbLtU3sox32hq3VFX8gMY2fvQTX9CncdFQCdcwvEHwqf",
  "key2": "2zBdPDDHVpTXnXkP8AjjAee7TvusfsSUvnHYrnSoPVDxSPKFrYU8RCrnw99sE2asdaWKw6btVdnjYq4LA9K2AUFb",
  "key3": "4yAMJd8etbKodWfFELyyyFqwPiNaMoQ3hHvWwvsxcRYpmkG7L75P9eMKVn3y65gsQBjYdNEABScRkyNZu77EutUa",
  "key4": "zsceBpcDVtPhnkmDfiu1vKn5qVUqb39u6GLR3GRg96nC2fsxT9cKW9ufNGGQDBFwzgD5Eh1eMEJ2ao3xRrhEVJw",
  "key5": "3TN6Bf63C9FRWtVWtPkkZZFsEQ1b4913KiKo6qaWavS4hqmbz2g3Dgma5RqWT4vHkVcgcwoRuouyre7UAixGcnhe",
  "key6": "5wEEuBXLczdi1A4Cjh6CKPV1XdFtXB86R8VsQ9KgAAPFZEZwhDHU7CrdFQ7JL7aPVjtZEXUAmbkBQu6o3L4BaBxz",
  "key7": "rTLt534eKSVUXpQTmaxWvwNBWS98FLLbui6MSyLNWb1gLHg4BYPTvKNXrJt9cEMuDBFERPuULnB7E8te5tLMHrA",
  "key8": "5kUfJXJWRDcK2nAYiQTBxuknCBM9eB5VrpKH6DWuDVHiUUeqTPZcKig7jFmRAXdgzqUP31gcUbdntEDZrC2wx5Mk",
  "key9": "4UtvSMxQ61vwT3nrXLubErjkgY3gMw1CqQpzsUw7hq9pmK7nmMehBRaTuM4rkmGwt1MPthy6UByNAedkWUn9M6sF",
  "key10": "5W2LNNa8aUjdXuDEHpBvw95iCLVQCw6VwwHaVqTAcJmQ4StTaisak9Nob1H69vVyDBqNdkUMyLDYdA5G6zb5bQrw",
  "key11": "3kPLK5bBLFYKvzLZ2suHN614y4PigTR86KVrHi5Qs4vSKfs6xxrtQVpDPrwhYbuj3nMdnj5FyHetGZmkG9euRRHv",
  "key12": "3cBJjGWWS97xwq4rU2dAXVhWqA4Xu88Q3NNBoUXkKCVGsLVUMPR7vyzNc5fmNnyDbJFXiwVCSKfNV6Xui3p3bpru",
  "key13": "57bmNRChBveLYhXz2s93RCYDX8mRRnZttq62eTcVq4uzMDLkmwZjckj8Diw5pW3HNkWWEht5X98eQ1h4nFASUZc6",
  "key14": "9jinHaX6pFnbFeCGz8Dk8Zz4cddk8gPvwVuybTMX9x2mdYFS3Zfrm2YBNBvMhzCC4wyhzdA2Y49gfNv71pPZSwT",
  "key15": "4kDtoWDiq7vNGVdEwVHrey71ttdqyyXre5VU3dLJYMu6sFCTJCHYBBXCxeuwFuDPjEbKmvXpkyYw4Hz7w8w729ST",
  "key16": "4Zd6YE9F6JLvhbtEshtoFH12oAxezobdAB6dps8gtAnhJmL8Aw8wPpYYdG8Fp2YSjzhHaBregxxymjtfwxFqt2f4",
  "key17": "55jF7evbMTiU5BoumBzAjgaqT2i4LETZPYd6v9c8GmTMMTnvnaXnm6vbYGdV2J4iYoHvCthZxeUtYrEAgj6FxCNb",
  "key18": "26bDSzYJDik56hhoM7D2N5PQHzFjyf7dwUKkMpDCNTUKwa15ZTK5hT62aNxLmAqncrefHP8h7o71PznNuN2KwsF4",
  "key19": "4sbi1LKUAjkK2gjqikxTXUnEZjaVD6STSajNYfEqjNopKfiJhKPUKwXyPHC46uEYwMzRqUQCvisiczxzrfcbjEQV",
  "key20": "4PhDNM1nBpBhsQPa4bPTgJgszLdzif97LjoaBmCEiCH69N4bYMnCCLHKYFC5y8VV5H7BELi6GZhrxSKrmtjeU9nF",
  "key21": "47sGQccVeho94pQEis4A5njwKEsuynSyfZuaXw54apRT8mHpEmsgocVsmwdpwEUGmHRTVZp66x4oWJ73xwvqGqUG",
  "key22": "3JX4yxjeMV3mNcZyK7TQvFk7HsjJvAKi1edUqCs82i8SrS63MyPSjvTD2rsDTaqxHkYvm3etXtDJrcUu67qG6dfj",
  "key23": "2uTGcFERjxwP7Z6pJ3XXV87Lm2NKut7b7zA2L4wLSJrX37Yds4acApQLBHB3PUVDVUYduHCkvhY47MHmnub6XUCv",
  "key24": "4Ze6bjvRsVV3py6vhsYRmsHTiUJ5QV44fmvCxV11jJHNVuwg7AY9fdMF2dNstq43v12ukxNSo9SpAGqNaNhnwp5y",
  "key25": "2YNY42c6gbYYAULySRxfEuTdhhQ1mhbiNWXAQvKvh9Rs2zXn9ETCfkD9JcQr2gZzAxHbkVhbvU8RHT5y3tpPegrx",
  "key26": "uTxSaQEXuVXZmDUdmgakS7PfQrvy4qAjv7zg8asjXDdVLA4bYrkH5oanXo2VUvWWc69HaEH7MUZyPPKzwmYG1ii",
  "key27": "3vnWb3XbxHsj7wyM3jurT3NcrpBJm1yjTRhdFx1sfCPYRd7iwg2V1bC1iKrnEUuNHZTBTFwEiPzAoXVc3BFGKBeU",
  "key28": "3ipPHhoxZBTcRTKac4XpBQdHjNa6zn6LRtcfneLpm8rxCw7heMWtwaoiURJiuhLMkqG3oBUSeTJ1MwzZr5hyQtkp",
  "key29": "3eqsmiyHHi2HmxYJHzC8B1StNJU4TEibPp9hVZAXYYCVqpRxZtkHgNLDv7jxUttkY9agL6kBPehY6sfyh9HNXwGu",
  "key30": "3ukWBEHbKSroDg3thUEgbZBcjAweSB4eq8dVjoFRJDYVqtNYEuubZdHLToTmRsZhYXEKxQ39VxqztRnBBsbNusC6"
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
