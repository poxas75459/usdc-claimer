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
    "2xMjfjaNfEGSi6NdwnL3EhvvEex23WJzHuSS4U4xCE7SRD99t4YdTmqMQYdRhQj346RpWMYDCm6NSmZc1si1M161"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DAivxfQBTcDEgt7ZpqvCBdns4FptkF7SWMEn8vEScFaefUWoyeDXfmFHfyjGPuzWyfaBG4AwusHKLXqv8Tkz44",
  "key1": "3oE6LEFcx8xp6zwgqGQWSUySrb2N3eitdy3w1dW1oVni7TGgJbwJCFngypF4WJEuDYJBguhVxVB7mzHhMKqCYg1v",
  "key2": "5oM3mqhtXw5KF2mKvdj77uQucqpSSh4dkgYqYKsuXfyPkHoup5xNk51g1ntv2JtesUQHzrDJjW1bwrUPuL5yYLCu",
  "key3": "3mqAurHSUAE4FcXQ1kWu5Zkwb6S4c7DYzZWKKwic5jDSi6ALTA8oxhxPrujDmRHbFvgyBLuer9WuseWa6jaEBMUP",
  "key4": "4wXTg9wQatMC4kN6rXq696AdXYUzwGHrhpkuKAXWWv97TS1XDj1XDtXgFJmMA1smMyEBmFbHaTzqhSfnUUG5rXTN",
  "key5": "3EJLwe29EwYNtYKxBaSqRfhVTc8hVyyEUWNjXixZDjcv4BBFu37hhun7F9gx4ZWAd4mENgvBZeaW4cmwMV5sV3L2",
  "key6": "2tBZ9N963hcMMUjmM3HdBsdjtgXChdNpgCDKpVb6pGjmEoEcWpiJgZV1nK7mPw9UhLa2iUcmevzJH8vd4yZYm6ZF",
  "key7": "3j6c4ogCHJknTM1k3EqGtpRQM6V7nQScZXi7yfKM3qNambQWXv2B5K2Qtns3y8VXL4rkEwXtkq6ujPDyQrejQdL1",
  "key8": "57gcHeANgnNozWr5VsZKjA8uditzT29ec1z834uyRx1ciW7BPfafkEFBuraKa6wBMKkjwRhhLcfEu27ZS2mpPCK5",
  "key9": "5eo8QWXaQ52wUfmA8AahpnfrZ4cRhr9J183HNUnp6Hs68eq4EWXwNFW8k76Vrfhw3mNLK8hcDTPThVLySPBiUoUn",
  "key10": "MANyWakCeSoFEQrWWJQdN8amsZ6nqykKqpLVa7wa4zESck7yMh74fXgtB1dYvtftZfZyEJT9Ghg8FCET5tHFERU",
  "key11": "Jb6LBL3z1vdsBJLF7kDzohKtbvXHsEQiEsaXVUUjdYodL4pd79beunzzCx3QknnD33cGbg8VP7ZYrQmqH4KAcjz",
  "key12": "4V4QjKxANcKmfzYEL4FstJE21DqJN8pUX7WbP6rcm2TQnRKQiv3QGZELmWSpoWgsxzSgBbGVPFx5mnqTLBnaDEka",
  "key13": "64f9AAmnySN23nwZiMxgeJbVWcnjRdGRHPXZBvgQjd9vZjuDvhCFyn2jpzhqPRvo174mqBPhhyJ3CVBKWJSSA28B",
  "key14": "2Vn8MdMHzr6ziiE4tKn1xEn1HVYrb23WAsFowqBcUfuc4aAMFNcgGnWicic51HQbw9P6sRvpxhE5rvbTCqbEMJgm",
  "key15": "3EMfT7NzypLFmCv5wPBhBHt9XMuR9PGuGGGYo3QNnG4pDWj29Mm1N3yBTmUyEpVdk3n2JbjrBGu8cgh1bN5ACCba",
  "key16": "66aiXDMaKNzvtFaPbBJYydnyepDjmpUrtFDufLAq8Aq9UqfT82pGbVaD5npLzd7Mr6sMpUe2qPND7nLYFBNiCJi8",
  "key17": "3KWCozE7c7GZceZ6i1yaUnBMzoL1mWjCYmACQQuWXJccugy7oNgyoXje11fGbTYJPWHAUgMkPmhg6A1WppQToCQk",
  "key18": "3p9XqcMe6Tx2ukn57Edr9UbuTqQUfC7W2wr3nBhojywKK7h3QsHJ1VU9xYt6RJN4JEzBPpav2ELJji28Lgd6o9cr",
  "key19": "2Y2ZQ5xGbCeHerT5R4NWCRJ441YgcXk8NQoHna1NUp8APVrc8oBLMYPEY1JUK1Z6mgbnRZJzrLuWoAMJJzX5iTW7",
  "key20": "3a1ukNPRoxp5gpKnaVYZd4xLJ5AfZSWt3scEJrK69QUiWirMfDy3dbWc5HAZpxP8XZwGV2B9xsTpxVTE8n41ZST8",
  "key21": "3ddpoSXqQB5hdaXPqtGk6CQsNkAKbecv2gNnLrr4CTwHqB71fKetqWGTtGa78mVLtt8qf1MfVTu7Ftmk9161D3wm",
  "key22": "5dimB7iDYH9Six5DdH8YtYe5JwmcLuvgWCo7S9zASStjv2KVe2i4mLRguk2RAa3NKUpPSoLEaTZjt9c6abgAiyYe",
  "key23": "3K6kvUZXKgBkdT8BPoYtUxBncXtpGbkiARGZMNgoGTko6N2roMoWk53nRpTMpYm9oc3NBbTnHHtMX11BUwPWwdzP",
  "key24": "2cdWoxkGFyqUG3rDKe2g1eNuaK3DRFfXHYEuRMVbkSjieoAbQMZWhoqUJGNxppY6oYjBXf63F5ef2bNy53g38hhh",
  "key25": "cT56XwAamzQQ3yGS5eZTJih4GqXS76Ymc9mB1kw2TtF2TrABsE14nK5TQ8C45Y4BMVoEhNJAR5eDxwRaP13YsZk",
  "key26": "47mKVk7weGSaeH2H5h9VrSkaUq8TfSShbFsnXxa8ytwAtfBspm1FsvLD988rXBosnszDg4kDWKNX9xAsr2dGHcQ1",
  "key27": "5K9iy3Sq7R8YdJs3oyhoRtsaUCCEkGByMcAv9CyPn7xUpXqwBZDpHyBnRyVGsemfBxhbyRMhafNivL5ZbzYWqS6k",
  "key28": "4iYHTM9PnEZfvQ7Nkrq92KpDc6hdiiVeEEBMVeLtgEoY1t92DjwWiiMbdbs2F5oWVPU1D8PB4FHTFtXr8h1Xfj7m",
  "key29": "3Dy5Ma7eG1Sxwzdmn25z1RgrY6dmXgpaZDBom8pXJjciUrZBSuarMgmh4CnYzcH1mB5zMqwK13EU4syGcjbz9zDL",
  "key30": "8jthd288VSnfJVNSfA9sR6tYR9ycqt6qaabA4oDYGs31BZQkESobvzVpDWjYYJKSrrDGdsqwSckcjT4XHzBrXUw"
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
