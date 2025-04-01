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
    "2sqgRFSoP73ewwwSo9qXMY8QZX7s9G6sT1iJJb42QEyrBYmft2dWnt9j6Ee2pRmJwVdAAdDTyHcVEdxwSY1Z8e13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2caXHCncxdmRsB2nw895L7HQgUGyrffgWyPYf4dgWTMjBDBBorW8k28FPKXkut5nM8E46qvCkyrqyWTpQkrPX66Y",
  "key1": "4VufXhtSqivooBVRgwuh2uTYhRNQ4UcmE2hU6fVFVz62AjJBTuoKyaXLrq9z34jqP8CyGQj4n2AfUpxieTDFcynd",
  "key2": "4GSmpzGo332xAroXmAqTsH48gUmRWamKYBAa9T9ATPm1FbQnnDPt71VXLKrD76ebBKnJQoywXMmR8uxez8qicrAA",
  "key3": "3jijYa3RNC7eogGigd79JnhjVT6PqQvzA5vGiqChnmdWXm9RjwzPdFmt6viiRu4go44rMyGmdmk1TPEPgnWqkuSa",
  "key4": "38kRjkd12spPwXEkTxLUa537pPxLYT6PCccN6mEYZAVTt8eADaVsCGhD1TsTEKtyqJXZYQDizwAwAJXobbBjcmhF",
  "key5": "AmUSgvcVD4rdHnA3LVXfo2CdbxNC2P48HXhh1b3BTmaWHKfiranjpfeLkXf2Adw4a5uDgoQD9dCEmGTFMfCsSky",
  "key6": "3wGU3tq3wDbutVqHxoRtbUpLUjqWyDf5LJ5hTeFHGjyXCBc5TWjknjS5mhvJ7Xv7QhV3GR72a1xuwaZkAmPVisGh",
  "key7": "7hqPHHo82i9pS5D3qc7kWeNQZLC9T79pkWyRBpAc8CXUs2XLvEmX8dL1c2Surx2VaH61VmCKxPSpt3WJm4JLBgk",
  "key8": "3SsXLoQ5hbTgspiRfytpiwCDEej1KmzkDPrrDiDsTdi6DFJ3vnhmSAL9FxBreVkcMLdoHmc8qnxi8E3g8m9RiKKK",
  "key9": "b7C4FX7sn11WYkBck6Xdmn2s5qjc8uvzY7BH8gz83gaoyFHT8wuZehAr4W6hFezgS3aEdDx16SEVVdB5k2PN2pS",
  "key10": "26TVChM159g7wmaVNX6CV9he2r61jjBHeA1MTs7AvLWcVYxdxNFB6rTgD4LU1UdR78SPBsuAupSpm23rF84WdMVN",
  "key11": "2tjQCq1dptYDCXeUHdnQP7YRynTXhYHa7Rgy1PFogvUKN8Uv7tqY84NdRvpo9j7Q4h13GfMvnc4XJtAEwqYH3nP8",
  "key12": "34Gopa4eBjrjmPbE9QQN3AX38tmi3gQQK1mchuAvQWCkPkLaXZy71wJnFQ9iKFghc9ftbQR5YVuePKNPdAsvs4KB",
  "key13": "3ZzFMGCJZGVvnhgcvKkJjRpCshiEWDVkqbFry86ZMkzxvhX1ty1EWWyXu3dnBmNBidskf97cMdn3YFMxSjwc3PA1",
  "key14": "3woHAbGHpeorywgxTzfh2DJgbCSbv1QZShvM4cqomtFpYiu8WzjYas1VWBza7XPCHHVYawKrbeWs3ynzAJNvNGfU",
  "key15": "2FCbN9nmj2YfkEiZE2doHNPoeMd5XHP2D8hfNtkhYapkiznSU2c7p1sXjQbhrQiMkhoW7QpGp3HSDSUcM6aQKt8Z",
  "key16": "2GwBufK7f8te4cbCVwcZK5KupMNVDmHcnhUZ4GqeaE6hYcXcbMD2Aha4cNdMrcRYjchqYMMLJNJDhyL6VtZijCnK",
  "key17": "2iU6Hu7DgkkSJF5r5Y7ruKNSM1DSNcTzZ2A2bCg9YK5L94HcAd3TJyvDjZAuQKcJPaYP6WAPNvfVXHCT4GDgWmz",
  "key18": "5WK9drjpU3ZBNF6nhmU7mycej8Vv73KSNBzMf4enT9Zfp3UFR7wvjRZbbB9A9zh1fS57YbtsDxJcDbWfCiJVxvba",
  "key19": "xzokDC5ZqA9D5vN5HbSHkMSW39ANLYnYnMmPMnQHi5hRHRHehr3M3CEx4bRme4nvXL5JBzedhhjJvAnreBRkxXp",
  "key20": "2CYaGy8p67ajnsWVVG85SemGKDNMafxgLiwyxRyb7GSU9M7gtLjLD1VoD3dfMx2aV4Vm6wQnhY1AittQtmnKdHB",
  "key21": "4J5s9MC1YnodCkdXXjboARXYjJjcucDdAWd3TQoK1UfDKdYHjqbNHUgQiUEkRHJv566qyXLofan1MeSwaHFrWfF",
  "key22": "44VVxuAuCQHD3qCoHdH1iZaBetkS8uV6cGDEx87kZSvzTXVUC7bgPWqnYNcB5FXsex9MnfhHD4ZUqdndArkXvaa2",
  "key23": "2rsB3UKaJebz14FP34g5ZpGy3GYBeYkuTpaMsK2pjLxpq5LdHPmWkPfY1xzghHULDybaznZ2LkhW6BTHcPp6Mmwd",
  "key24": "v98gbdsZr46KHg4EVQjcwSg2YF8YR7PkqfjYHA7jDsY2Zk5icXSmkNxqnA7NpXkqUXxeW3ShTDDm5EaztQtuXcn",
  "key25": "o2AJ3KQV7uiZBWxS3sSQvXGd7WLwdo8UDFDBrqjQeBpXEvKku8sPEs66NsMU1hB26BRQL7CuE4DtsHMZDVmetBL"
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
