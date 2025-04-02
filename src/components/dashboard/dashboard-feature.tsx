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
    "YMGHW8jrhtycKnHfHPgunvbqMZ8dGY9XxpMR3AWHiA6RMg3GeBhZXXVURHYsouTUi7T35oDG3PRKHNFGxvy7GsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmzb5gMq7yUTU3YF8aiN1fGsu1HrV48211e414nfMP77J67UgVBB5xCqdNAeVbEKvhUqsFshVwFVDHPyekHde3",
  "key1": "3fbdCTLmPT7T4ho4aUbC69vEFUSVmyh1yrXoD3pjzFMUR2cyrpYPc8UmbHZMw3FvhNwWH4D6wr7TEof2c31rrB7V",
  "key2": "3iMJxSwXbzUfrT3xAMotBgwA29XwwPz1gAQThM1BZwy3kQVJvkTbF3po5eDpo8vZzKj7nAKwirTKpvkQEZjThwc7",
  "key3": "8b7yPznkquEjW1dcJrt33mnkxSJP5bHKAMmG4Vje6DNoeJCZnr7MadYJNntviE3KzXxZxkkSrVEEUK5oVw2mzuf",
  "key4": "3oDNwpbwCEQeF2ar3g4Ftm8G4Tak5nwovxHAWDgR3c2HnhxxvTuEzFaTxMXbacRYjr1QmxuxBRr86vHTtmdZduuh",
  "key5": "4Db6w4u7ALVcTtfTpp1oFmeviGvQW9GNgxvAJ2cd41DgKbaa31qCTkUG29ND8pHCMHYEc7n6T5nSvjRu2n9Zkx3Z",
  "key6": "422qoy7Jx8aqD6smqH9duWTJKPfYGE4wYVv4vNjWSCw4y84Pgz3VPC3hFSgucsc2zdpdk7FwQGjBrm4xQ1pxLsS7",
  "key7": "2iatmiJz3ZV6z76s9YWwZctLf2qA7wBgPuyDkcaAf2C79AKZDeb65Jst3n1pjA4r66dTMkz7Ynycu7e16xUQ941V",
  "key8": "hnR4gcZCBgDWa4KJMbfGCnkoRERF4TkQKqYhvhisV4oz2NQMAV4bpaupMMfEPK9vagUptcSxZdUwNhHoTHAmqy3",
  "key9": "2D37JXBP1nec9grUnazrcJ8SGFD5yhE8CcXtUfGPe2SKEe1H4xEtdwZVCyt5gs1KifzTFjxN2yppdzBjNiUPYUSE",
  "key10": "XmFymbt4XzcMoNk3wfT9NvShRwTMNHZUcPtgMzBtwnkpv4V5RHKthbUw7xY8yzjFPiomabS6Faq1d6a7egnCUuP",
  "key11": "3EkmNDLKTZdVcbUhkZhcU1SewRUTtRBB55AVz1R4SkXWKoN7t3nNto3boSsi2qUwHPz5wo8W3nEWSZiCcqqr8sns",
  "key12": "8YmF5CoHJh6FFaJbisamR7e6ZP9X1x91LQUiDy5NpLpUwhNW7zBMeytf5h8ePEbNuqnmVdrG5ZxfqK51moMaKfu",
  "key13": "Z4i4fshvWrUJKGVKhrhjAYZUmpqqqxHtKZZeHezS7BEq8hBN1WWNB9v2FNZh8s12KQgWm8xXacTYa2pG1YZ6BM3",
  "key14": "5sCYdqU4XL7f3NCHxEshoH5Ytt2zKtc93tzEgB1PenXf9HRAkVrzHoDkVMUVVx5fU78HLEX8giU1Bct6Ymy3AqaG",
  "key15": "4m9VpdhH6vWMh51kwqxykw5Bsnq8KdtxRscSMfuWk3GgyV5CZBUFWLHYTVsAF64SpHk1Ke1iJhrm4tdDkVHTmmp4",
  "key16": "2gYBEbcZw6rB2ayLdF2uss2qWsj3Snp3nETGdtTgNZS75Xen9EavfDDX68Sa7Zh2gby9YCU9pxsDybiM2n5k1rhQ",
  "key17": "48SjhH69wxLXjPoCA1BSNjLzv7k6BhWXwh5kiWhQTkYcLdXsDmk46EgWZNwGzf6CfMiuytJk7srLMduJz7iPn7ZD",
  "key18": "5nHzkz1hHoCCZYvqaB37v4X8xVceZgecFewzxu35yXKvGw8t6CrVK1wcz5PXwip57mjL9FkxLxS9vWrcBLe7bVLT",
  "key19": "k5aJ35yQgDnVUypa5rnjiGbwDgA65wEEeXjz9KpxHaLa4vE3m13E8uwJ9aCT3PPJrFdDr4tqc4Pmm94Du5u87rH",
  "key20": "5gRiMZbevqpZKruoCB4Q32jBrCKDWjcSvWp85Kpsmn2ShNebHJftPoUCcsdPPqxj7Gt2Jx3sJ414xpiXaAhVw3Fd",
  "key21": "4zU55symVkv6dTxwHVeASjnG4yC38ESHMEozfRbupRfHRAqMAw62y4GNBKfVZ1gDAAkPt1ipunm6qeUQMNxX8J14",
  "key22": "2HTSw26squ526wk7zFGWZPH35PA7nCqfG9gkorpXZmHtVFYyePeJVpyz4pQ3qjaDT47hbRGgtgDrQtysQFmGnRVH",
  "key23": "4PEk7AeZFfsBgVnUN2dBMrb8VXcLdibn3gLTTJ7wj5NXGaoofJBFy3xXHmoKVhmo2DdMgEogtgyen2vZBWTdQxP",
  "key24": "4Rw12rdV7bSnSPjcxWevSkKM9EDrMLyoAWv8szigzPcgWdDyTviUvfaXw73fFU7Xz5hPzm174dUNJ356GqJBfAaQ",
  "key25": "2FwUx7bRmwTdecF8aC3nNUigAS5JaLi6NUyMXKpx1m8URgxKXs1FHn3ueZkeWpv9VASfpb4q9iQc5H4c1Bht4P9"
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
