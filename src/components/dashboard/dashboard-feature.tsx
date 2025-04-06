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
    "5qyaoyQv9wEFoB8PLFNfmED1UCd51FS2nVqQ7XNoi1EbLoRN2d8c9iTzBoz1XLNpjB1CuVD5bpjGmZpncTHpLhH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DboMNet61kxq37vr26ZqmbTWgvqA3Deq7pFWKnJhtRsGaYbjvzhGztA8LjsewHpcqGh2FE7XQMWLWXceAxG7cfA",
  "key1": "3hDP491uQtAehvshvjR59ugZzusTosD29dF18xBvCJXJiNdmCyTRnX8PqX5nm3en9mSezQzWq1eTBcnazgr3WPXh",
  "key2": "3axcFRZgDFtK54rP7uA8zK9jmEnv8mSJBktKYDdd2wkeuyj6GzzVnYtHoPkKk4uA74FeXGN7ZtvU2RE8P6aMfM7w",
  "key3": "4NiZmZ4ViHajxTB3S5jk4g9MsCAyPvarP3zLRbMcmc16WP9Kr2zkHN9Gkz4ay8KAMxsN1dSjrXEVXrR8To7QM19t",
  "key4": "2sL2Xj8UgrTqwiBNfe5LRwFmtWUtR61Wbd4ptcKF1nCkdJgknYuBgKSezUwmvS6FfsbyPhiCHZg6r6842X9V8RhF",
  "key5": "4KrmA896x15skvNaLSzaCbxnej4EwpMzRPkfkd5g13VhVQKy1uwB9yLbwPrdFBin8VyjzJJBg9CvZM1Mf1bxzrhx",
  "key6": "5R9rq5rhLej6CPvfGLvbSA1YaQG1LS3PLQRu6eR4ws13KvY4P4F2mDhwCF3fYgbSaZA22MFcA3R5HheefaxGc7Fj",
  "key7": "42jPe8Sj2P7jLjgMPRGMkCrCPGdSXhcTSkbSG64CPNdqktvdW7AuoggSxDN15BHFDwo7ZkJ6ACeuqXXAn5Qwpf27",
  "key8": "4PEiSxaoQ2o3FmoG3xsrjX59yKpPizZ1koA81r6m7ZAq3T1yGgu8HgZzSUnPzSd24RGejQZbAGP1GNVM9nozV96C",
  "key9": "3R18TW3EUgUGRRVYL52CAwrPBf6a9kaCojdwUvj4AECnB26TEbrt8UotW21msoFxLPJp3eZQVTHCbiGmi1wR88Lo",
  "key10": "44tx1c1HSsMMcixR8Nf9EiNyffNAC665kgbi9rwPufSZCRiZkyTBJ3E884Gam6Gs16WFJdwD1zRwPdnkqXLDvvRP",
  "key11": "NTMGuDoK3VrxhRhcKndbLBt8PDBgAbqdvxvVxfbgVjoXHRbrmVnyZppwv7SXsw2tZuMXx3SUaHHbhnirsAds5e6",
  "key12": "5RCWLFu6yFs91adSrWWz7X3ki449ouqtvVJbRWDqA2Kw26fMcqtSCiU9frnXBYmiCH64y7H6Skj9svXUe4cj2QZd",
  "key13": "3eGcGnJL1JkjmCbHh3XGZ48S7DJvbCT2UjwjNgQ6Hr9Va9BuWCFSg2gj4hhspL7kiTbx5y78YpWueNxMLSUAdGkw",
  "key14": "4aQLj6pPeZdJbRczqVntYvAL4ZdujSXPVPBZfKqhbHMU8YsMU1rfNkR3knBkDqULR6S6z2SVEtCAHiGGBgMkAqFS",
  "key15": "5RtX5LwxksdLGgsEgW2edLs94nNwtojDSFYjFvfYc8GAKRiGzUCMwbYL1Ta1idVAPwUeMFYTf6vxDxXVBhu4SYs5",
  "key16": "3jsqQ5Q2gdESbZoy1dAhy84Bbpks54vUzNj4ze8jWgDrsda1Kqhh2zoEHqXTeK8sNk9Jtpu2DAwJdAxe5a1A5U7F",
  "key17": "3iyMgkHJx9xjHMBb2ACYzGpWp5wajgDfes7s7CVubmo9xG2ULJJAcFGFyJLfRsiihvq1rAM4PvizgndmzbxWabGX",
  "key18": "4y43bEBz9aQzrECkdX397RqMoCaFkFKQbfwtUeadKhcMjUTW2JNursgsadiqwF6U5Rxh73AKBrM5Nm5JQDxzZiVA",
  "key19": "5KhJRZkQDi7erQVBGKZWCDRtPgK8W2Y9Rp6Rxevm62er8rLYN3S8vxWjoEKTkK4CFq3AEcBskTDXLRrAyTMTZYNL",
  "key20": "2PvgvLnq87ADZhLCYFFFZu9zhSH9pEuNhn6Lho4aq3zQuoK4Xtk9j5cgcMa9rVN2T5EgzqPtZBt9FfQifZKCFQn4",
  "key21": "4PjLkDVQkQfEwCyZMAi5SN4NJTQ7HLLTxTi1ZhBTW43tiSR5zyzw6Wodq7UYTnoXCy4Nvyo2MNWHQtmvoLX7jLo8",
  "key22": "AfVb8M1bMcKF14U22UtdZKzhDLvEL2aZhZMGi9UNvRevj3sBmAY7g6tyCuNEpsbPtMoCvew4HzqAeGUgWr7qvbj",
  "key23": "42YJ4pYfNzL8J1B6HuKyPtFSZyyX5XMSXNC7NUgHZobLEpvUPT8Cupdc2mkCwZcLNR4vfumLdFs6LWTCbrcaR65U",
  "key24": "2efLwxp1SdfKaMTTZE1rXvLeZjCx6qd8vrqZgGrQ6HtmBuWrgNZb3rvGUzyf1H7cFP7giv4nMAqRaGRCR2nXx7Wb",
  "key25": "uYk7r4PmQWmwoKq99QCBSkKRyb39M5kc4Kq5nvk6KQom5oJDyxXqve89qB2Kb8yZoBMm971t2qSwa5254ztLLez",
  "key26": "5PWEMRYxFXhKEbnN9VQiA3RSPmy9fNmFXQKdTAgaQWJB4FiyD5t6B8ukSvvqNa17GtZxBJmpvPEDVi6ovaMDXRNr"
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
