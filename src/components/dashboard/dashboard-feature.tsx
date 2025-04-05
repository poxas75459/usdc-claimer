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
    "54Mf3B34h5zMGiQjncxToB5KsnrA9g8yAk7aoMwkFor843y1WmtYdQ2NwWKS38irhgteVHyQQ9a1ayk7yWmpwJ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUZDrjM2A5x8HG2fWckSsogfv5Mc9wod1BEHt6HaF58sxhUFTRMzqjctHBUYMj1MMokM3tpHg8738wjuBxzePHy",
  "key1": "2VUTbngJHva4eSpufxYUwXYJErPq2WyvsB9WQXRf9qUQozm5yHSzDXmvAeUi8xaZ5tWjEZa39fyBmvcrUV2QE5bh",
  "key2": "2UusKvXe8Gmr3tur98b9g51HAWL6hnaxFVGQPrvSNLvB1v2UXuTUjLHj9tpwU5VuHyJQ59NKHCvFKVvRHX4QTJis",
  "key3": "592bHSeiH4DW3aMXy1tFCFZgtvkWXrjo8NRTbjY7RXuiMYw8hmi2QAK7L3w1gfLXvv5TVCEkvK8FJSodNXQy2NK1",
  "key4": "3mAUXmfcdmFekukhXAAA8eNjyS1TFrR86cT2Mt5YV3pfiVyGp8RFNpokXQjMcRey9gXSaL2XpitCwDgDKG2GVvkP",
  "key5": "5RYQkN3pwgVRcMgpYk9sBihKJat3BKnPGHXar6U1v6U2d3RKKA9FvzpJX4DqLShDtuk8FsLs8vxqjzqCJYRP3MeW",
  "key6": "4kw7w9U2nBuh7Ru299MEaCXLQeoKJ8bZj4rTBffJCd78mhDjwRLV4wizLqZzEaNMhAtEVv5D3FBTbU4DtG8gy3XT",
  "key7": "5VWPhDN5Ho89KcJCESXSYFSwpD9ES8vEpnTsVccf6SHC9hEPzRGK2CAvExrNZCRoxBh7dNCfLHJ5Cg8BkSwvzupL",
  "key8": "3ANjvZmCrWYgmfpYujMGu3Tf2qix38zdxX5ffc1XhpxwG7TPfKeiSSz99HJWetGtxMBpvZSKm6WDqq9aqC8sovgN",
  "key9": "4ywUxrMSuVTZcNk7mqu4EwQvtsALM7tVe6LKnGzUcDoybzLaKyxFpo3UaJHLxxr1MaajHQqtHp5h4UATTTb53PDF",
  "key10": "49CkVSXk4RPBxtvEDwa1fkwekc1EVj4QaqG3rjx4JaRfKCMjQrFwJpX7zpFWjq7F5yefcnNdYbmqfc3h8xdVuWFt",
  "key11": "Gc4PBKzD2CTwPUPv8F8kfL6an6Mq77bR7szfZ7E9hcm4AvCJLj6dxBiKaTjZagnvsR2KAEhe7tZPWym5im5ue13",
  "key12": "2xohW9Vfw2c5f3uUkJ8G3F4pAAz1TSC3uHBrUWxwiT8ybpoS18UFiPy8atSrA7JfPHSkyTLiYpaYKT41uB9hFgFk",
  "key13": "CFPmedRTwUjc3KfRt4H2ZsXdtYUgWXTVWqHAbGvcDA32GprazPugn8odo3fx8Su42Z7zGTvb5Mo1t1aK9rUT2pr",
  "key14": "gvueogE6kTq2TVN2NFT6XC3S6kNTq7KB5PrvxYGnDguZscuEAmRkgyN1pUf6posahMjvrtDKbhwzm4LJsKhUkNZ",
  "key15": "3yhRQRYf38MzTmEdmJ8YXsytcoUJg69QeFgvAhhgj1WPKni4NRTDGjtoHXW2vapEYBShg6DXcoE3tMJRg1YeZiX2",
  "key16": "rbLzdmaqMT8En4Hi9xxAWZBffgUqa3eLqUoNhhSP2BoNU7uNusc9KzwGvLbLFTrYBXKRT3tWemsAJvUr1RV2rSr",
  "key17": "2zqUMVjUu6WNoZRyhN55LKSehWRDJSQuX6CbXkzasnHqX185WxpsCkwQ1zmAvPye1NuPzR5ujD1cmkVQC9HmNu19",
  "key18": "4HhPu8uxH8xh6mZKMes4786h3petoPfgaAvyKQUFn17QsNyb8A1jMhA334Uguc5T5Qrh44qp4v8fo8VAewT3s17G",
  "key19": "4rX9PNfQuPFWPjK9EaqcS3go1jZCFNJhLvajnNFznBimdQgSeUwyPopzadKJKysqstX9JaESbC3D88K2ieXoA3Sk",
  "key20": "2kdyDRnM4Z8wx5rZNJjgoU2e4ATi6yKopeiTdxW2o2mtHGmFSQDDwb1Sgt748gZXCkarbmKD8fXeumVv8NC6Jcq5",
  "key21": "39bz3kEtqoNatP3kDyFGLGGi7sfcGXqp4ho1P1uqC3N3MemNCezR3TEhz1L8pauEpsPm5ZwhZGUXyGXfk4ckHio6",
  "key22": "3FJAaRoG7gQsJo4RutYYrXY3W1RcD766mVf68SBWTWDbVaZdKXsAjZMxYEirdThfNRt49hXKpAfy12XtzJrUZK3e",
  "key23": "4TneGL83HduY2rLcmi6HXdRUPdkaFg4MmRBUvdUwJMdpFTUVhbF1eYfqaTL1Yxq4cJbxVWMGWwLe8rh7xK3Jt6Yu",
  "key24": "ZYUrx2kQHsgeF3sgZzJZ5XVdjNF3zbqZdx2zRPpAMhPRPwtX8bN7qSv5giJfwK6ArxoXApnRjdSEUc81f7m9FxZ",
  "key25": "5cHQqcgEG3jn7ffinFMuM2EQDNtRtoxPRkLyTVaZLJyDkuzbfSDMTNm57JcGcfBUvgChAb1tFTT1xJDrA117Jjhf",
  "key26": "55X1jZt5mzLfzkt58qk4mQrGGf8i9GddakvQ2uQhLQhAjfoKrgenYKZS3PjkbkiQxq6kQxu3cBXJqSAAdiqSTsvF"
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
