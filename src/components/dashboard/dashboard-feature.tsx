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
    "5i8bNEc529Rk5QLpRCtUZ2VtZzxaryVQayLzJBQUp8cofPgZh9TuMjLBCSELigoeTqS9fL8pEhrj4QA9L7f5iGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259wyk9JCd6j49BXEtgM3hMLpqgWj7ByKDYtCuwomkoUCgkFtXZEABfyDR7nZGM3cuyCRbC4zALCQ8LbMxvrwmZ3",
  "key1": "4pBsUo4rd4wm6tSnBPkE3uQoML1c2Qz8XGmjqPZanRRp5YU1HbJLjA3ZFcTC3afq8Dwyo1PEguz7hYLig7SnsZCp",
  "key2": "3L2oJhm8kpEnXSUZ1ze86cUbzSENveKZ9dYPUXSvQp5jsECzuAkCB5ktVwyqrbSJPoPhQifKpHsHjtv5HNH3KqoQ",
  "key3": "5VT8o2qDEQcFQTxSBZWcFWiXEgZkMhiGzTRnjm4F65USeNCmc6jU5aCDwYAVeXzk59ywVa4wzeSCKQSwFmzqtthj",
  "key4": "2UXcQrE5Dt4sV2VZdY4J6HTHjEfxascu9HW82QTV67YgCuqXjBp14yRdYNo4tMZqeHFBWkqjEiioMe1TiaSF3ypK",
  "key5": "2fD42oHSaymH4Qt343m58diJeXcv6xpw3GyFu35vbSiSgtS6VaRTGZzNvA4FgDE54d8FKEhjigPhBBT5RW2BgtRG",
  "key6": "Z3cJbW8ZNNxfjBJ2HcENx3qxT9Xn5pyF5htLmvQVFQLqFV4YRtEgJbvwUpSPV2ZyxaaV8pnCXRNYwyyQYyJNQYL",
  "key7": "2j7Y9c5Fz3qD39amzwFdzLga4pNvxeuyMyohS2n6m7Ahigi3vHLERwaZxedFVhrngDU9xRXM6sf5StRFJxAuiCAs",
  "key8": "grYnFmMCDLR91TsZyDvunMGRHuRXwjmukKdZCguwvw8W1E4HjXhx7uhHne2rgMvkM8dgkyaFPVqHHauJxWKFzSN",
  "key9": "3StCJMfzgsssTi2Myc1GejDmUtqAXPmTKxKnaHNWjXuXwoo1W4db2oU2F2nJWQ2h3qvCe79vp1GJyuWhgUW49NQ6",
  "key10": "3MLXkivNUe4FViF3ZvzLd4iAEK16Hz6aPa2bhQVBVpbFrKFBv3Upt9H6426MtnUXB5j9xw7XXyzL8AEvkR27SF96",
  "key11": "5YT5veY2KJQbtfDrsrcPYe2nazbz52EC14L4wFtq1MeALCUFE7MaKTdK2onBinvH8dN4dtvVx9eJWmYawrXowkKs",
  "key12": "5XNQiMkkgwpb34Zq3gpmbwth1rcrnHbZQSFvNkN9hmqUSz1zdNHV5VT1MdQSPPthv23ZCMYhikw7qwUUrC6fFgiG",
  "key13": "DGHytQ3Ewt8Q6mzYzGg8Ddr6GdmUTejaMbgSZzLY1wXn1aW3zf8UfYQVLQ6nxNWup942JRdwrgkpTvBXizSQKL5",
  "key14": "4jbkeMJCs6yeKwfSfS53jFbVJ5Fsq1rtcNqvwxEMfR8ycmCi9922RuMRWXC6gPPvguWd7gruUMi8vDNR38NaGCiE",
  "key15": "5tmCNHJUcjGBNtdH8dJ3Ludcnm3NouhZmrc9ePh1eFjeLA3BnSGV1Ni2RfY2McrDYa9rGwS7iK9xJRkriHm9nt33",
  "key16": "5veQqCLrsgVQuwfXBDpQB2XmzUEgLmk83QprVvhDdzF2DqXfcPPnRvvGLxYbFZnYvcWa7iN7fYZaMsKnfZ8QAc7v",
  "key17": "3pmmte9mR5Wm1zQYqwaBAm4rYPoCZAg8ZvB37Ro45njkjrbMKkBwPJ9qyEg7ARR3mDXMTnozM577Jt2pQ3cXZ2ok",
  "key18": "3HAb5n4MEqDDPZMi8jSRN7KPuqMGK95hDFEPnKGLis7ruJgB3vmuQw4gdCRFh1FCigWTwwuBkm1TAnYMNR5wcMcM",
  "key19": "5ZF9xGiYGBme3Z7sqyLM68mQ3L8hErAHfg3dyCUSevUVLa9SvbTyyqCUoqVv5WK5oqbhdXwFvnr3czeQaNmy8N6D",
  "key20": "2Bxjro3NcMajyuCSk3skNveaUBRXYcMD5bWhtomvdjtG9RB18ktcgPdV9htQhd3PqfUEZfnMz2oGyfNeifMqS8kv",
  "key21": "ikfodMBVgRed6g6yYfCqYnguiPXBS3uvS1cbFLvx9YS8WmJEJKVZQT5FavHETnhjZDAmwTtJTd3umaX9FVmCEK2",
  "key22": "4f126Y7fEEwpaWsgqz4oU83nkaH58pHZeWzh5RDoYoQTHNQTrvYWzfTYncLYrdF3BE5MM7ndoaugX9pZSank17EE",
  "key23": "47SG5UP1Re6YUUzuXL7V6fC866rkPpMYCSgn9cTRFKnF4eyV2rBNVxbkuAEvDBLjRQoQAuua63vqXBqYe9gtXRdx",
  "key24": "2Weja7uGy91ZYNMYhu4tVkKpcMvJTpQSkLFBcEhFtKLhQ1djXwQyRHZSNd7pUuH3URz9PtX9ciyiacjWm526me5B",
  "key25": "4mfMbxGrBHB45VFEzg91x5L3aES5sbn8APHysPwrnzaexqUpz6XLyWhDmZy2kW76WhXjFMvRg4aPs83GPmb4WQT",
  "key26": "9towARwA2HvAHzj9i9dwDy9o44xNKx5ieTdpArEzDg3nb9zwDrcSfDoHFmQi9XjuvX3BmMCBUQsqqz3RujGgMwB"
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
