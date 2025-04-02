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
    "45BzzDX3wvqYGN7AmVi71DQfXcfP1x1uMswNqr4uHwmEgpFCUAmYpzMPgqBDcKWfpFbhVFM1ao9YVaHL3yvcxy8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyRUcXapZ2UeNShn6d94wr7W9vtcgBiHqGExvZMnjgAnGhkg647C1wGvQBzfipE16FGt1cF9R15sC572WjLBNtJ",
  "key1": "2PRoCSS879h1eyE4dJAyQUJFTmG19kwHBxv53YP67JmZ5LnYYYMKmhnXRo7nfEW4JiYeZyNXsS2CCAczwFv7khxf",
  "key2": "5tzBgMo4TFr7awHNvpy9HivGqvrXWcJm5ruDNKwY49YjvefgLCsGYk8kciGugvEF67gr6NXAwt8qMyswjfGcmwwE",
  "key3": "3SkCVtG7NrNaNnUUzEsHYPsSefVfYfJyuNVaVoJ1GPDh22myiS9CYfbZai6iYNpCK3RCLr43gkPavSAY4EYdnVWL",
  "key4": "4V1JPWbQYdEQnMrRUcLqXiPUanJ1kxfnT8zYoRMMr3Vgn7xrMByGzy3ecbCZF9nxy4tnqhXd65ahqYLArbu5p3J7",
  "key5": "5Yb8Nx7aYYnB3rc3PanJ7E97BDW3Zvabm9w7BD4CRGskup1SjipJnpKaqQacYE7TcBMgkaKEKUupbqDdsenYJUvB",
  "key6": "33DJrsXCrm2b2awUChTxE6VeBjRkWHe1DAuaE1fZStNy4WQzh1V2eQxfog6kWjSHaXft6fXwihRCk34x5oqNf598",
  "key7": "21tiSTZ3uhmZd3vYhUoN66N7nXCF1KpYsSKtSeHc735yd3H39tiz4fvwsPNM5WYQbeNjaaaBPqgtAyx5zAESR84z",
  "key8": "3yNRFfmkKzb3DZgouHCAmpmMuLpmwUkDXY2idesTWwBSMqYSzPw75zACso2UogWgQxA2DtG9VdgMAKA2uRYzESMT",
  "key9": "61thGW5Uxrv4o9GsWiuUHkcSJtGDJGVGBFMuDtkVNfnEnd5u6vAXqtCnsR1mtBFCNk7F3d64voUNUoryXgEssjkF",
  "key10": "21bNrCgwdxiCjpx19FbYWCHB6qoBzpKcMQ6QgYyAGNXTSgimNG17UyhcR7TXBP3U6FYzCo3SFvez4Byyw8FBQoEr",
  "key11": "2z3Sxk2RaQ3bMTgRs31zUL1U62D2iEUDqoVwzaMMAtUfiEnPFeWzYnCBgrNcEFcusUWNrmow1Sk5nUSETwwgtxJB",
  "key12": "2ERwr8SiSvrUFJUWrMRCX8GAmv8rDeDofBbDZnyM419yCqMmizv9GbFqKhcFcojhzRGAuEgo3PHeY5dbGF1MFxqf",
  "key13": "2h9QXk6gtenD2Qn9umPKaw8NMztdb9vxYhPWJgQgxauHnXVsLb4fEP2nDmoM1amisZmMJcUKQtcYZtVakLGWRa5v",
  "key14": "3UsffU16zRUJkUyLoD7LCLUVesvJvSKCXJkgU98siX1W6PoDTeLJTXjxMMqWHAUtTyjqo99EUYcG6ZaaHt1wgs9L",
  "key15": "4S6Bw3gAVhLrUgHDuUXTM6r1hTH2rUkqizgEenjWf4y8UNx5Ux3RUT29RAeEJihi5Usc5PCnY2R2csQhYzm4zXHF",
  "key16": "4oY4hwmayGppFmbrDFD9twCE2sM8jzXRBHdn5zmr2wGpT87LBafd3KemphCVY5bLUG8noM4Fd4rXsEDmzV49smLV",
  "key17": "BEZcVQMjMX58v6W9j8Xy3qUX7sjxyKQDnV8gH3C6EL8PWGqfzqYKawnj9Fh5k5Bcy3e9ByCMwxv6ojtcLMXTpcP",
  "key18": "3JMdzo1ELnnGqyjLFasbV14JFr74rXtCPCrpjrBSYyF7sizvzR4DRkGd5j4ttmBsBeSyVfskgd6LMoJysxeZobFF",
  "key19": "3BjD4b7gfEezskRJYVqTwX3ULShjXwrcSHRPAS1qpP1XgMY5NZtiYjgxaKSKsscaRGJyycbQuqUMAmA4f9VhEC9c",
  "key20": "5mujLXTWpqeBh8Yg2yAxkiDwX6wCCuNpPpF7RmBTjrRkuzzRv4Fyz5NwYNgHiMgxDuKXGYJBRyD6yJoFJFkt8QH7",
  "key21": "63xKJNAwJMxJs1q9BcTPbFGEH4S7YrKKBYuoYZHLGUrfQZVfqtyKxfR1ezDucY5QtARrhAo6CKJwYemzhzz47AqM",
  "key22": "3FzNg6CcA5FkACMxjdBag9Qx3PjjBKr6KhbF53Ahuz8sSoZ8SLrg45c2MLC4xxVyYyoNxzcVBzdPZwDqAB7RFzGQ",
  "key23": "3epL8jLbsv5BAQGMYTrGjfHkY8DsvMdHybqsgaBa2DeYUV3joa6e1YL9yuThUVLUpA7FFZrZpgyWH39vzXgyTLZk",
  "key24": "2JmrRoSBXFC4vgk8Ba1owFDECFxL33F73Lg1qkfdmQLMkvwg7FdEWq8oQjVeVQsr2xEXzzVtDmzYXBk1d3GtMUec",
  "key25": "4szRxX5AwFKG8KstHkzRq43QUgF4duB1fEN1sSFTEjWVKk4Y96tK31ZRWK5SoDZ7mhZnaUYSZg9P3iXrs5MFFZ5Q",
  "key26": "4ZKUhKe2mUxkpCdNTpnPktdiYwwdfoBctwkm3v7ivvfDSbLrrkeaEJv9qPc3pezB21BMzELteLPZZckirhda843s"
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
