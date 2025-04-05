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
    "3e8AuNU9ye6k9wN2NySL6oTSwZ5FNWPWhHUP7bX51uWd9yxjXjWvYgsHfLL86XaPvcZCwJSs4KZwY9XiH5chQ8N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLSUWWCcTyjJ4TzQqph3MCH31ZtyHpVnT3TPnp89pPTrTpHua3CroVmf7jRVCwbc6kLkNfoEp5CEBrehqjAFHrh",
  "key1": "4mzjxCJRtw2LF4e39xvYfL5WkV1a9LQoxinuJH9mzNRuahgeJz2Fji1AhEBShyJXeGuxAfGFHNkR3A5QBLT9fakN",
  "key2": "WJa3tWn4tidfPWEg6hRuDdnpDpRRzDZZREpeJV7jqC3E5TWKbi9wWZUZjG83kCyApm8gGChbfym7aZSeo76Lu9R",
  "key3": "joH1EpUXABWh5bGyB6XRJYafvRbWwrJKpvU9nwWEf5rgzpVpRf7gqQ365iDpgDXS8ZYeCxp7DjgmguRzX3xJa1f",
  "key4": "65cr8D4XiDCi3paW7JrbzbsifyejNNLxjECgdXJJGHu5UX44vaJtenAuTfsyR1LWDWQ75zRp4CLMYYNEAoF6ZjdX",
  "key5": "HxH2kUdA9oHR7xXxhjBf1Ubiew4R7q3ySwCSpsipyL6XYueP5N5q4WyvgjCDhM9CUgwJNDKswTJgqdzRiMHGZ1z",
  "key6": "2w5oaUz5USDqCvimKhMNAuLDGWGZpESFZZVvimfAK9LceDfRr1FVScwbkPfEuBYrW4mxMY1MQsF8crXHNkWR23zh",
  "key7": "4dynv7GqjHiB9T5Gb8tr2N2PZVWGhVQGLskXyVPvbg5qvz1HXdn18YERvK7HFg1WQ2QmAtQJaiJFsyLgCocb36hY",
  "key8": "4ezUyuL3yBXZ5ntwtXPMvnWYovMbNH1MUpAsaJYrJXkTXehYSmnEKkkfC9q8DnwpHTuFnNKPnNSW1MKPHK8JrcMD",
  "key9": "3KLd2MERTfrUsgGatTR35grPBdkw3YWv28B2yd346LryaWZrnxSxU88YEbxd2eLGZA5RkR9SCguAB8UMEGQn3Gdv",
  "key10": "2hGEwZptcotvghjuXAnV4kaYLfgHiqUYUVMVPrJNjRZMDydKNokJ7aqgsDc3LYZuTHX9ZRdhLiUEnbm6szypXsEh",
  "key11": "1Pr5RiRYjwdo17vc21AXFobK7LyhNkQWpWCCNVABBypuyPX9S83DW1nwBY4U7zKCjPEN5TYjBbDsgt8XDHyDvBg",
  "key12": "3XFvSHHykjrWSzjw7mXhz1snmsuZcsbKqR6k2yyCz5tbAZVyPwNWT8s1zB2bpcuTraStETMJCoVsJGCkbqqfeasM",
  "key13": "22fKJnWYsmYKyZSyEhrQtaDCjo57jV5d5prH2urmJQcj38Kqx1b8QXGG9bjpNzEtBNfgHJcTSy3vu9GPJQtKd91s",
  "key14": "3Ytbbq6y1Ahgbs9wLMnpALBrh8HstrDUeisDqbL7YDkEFisu2gKakNZqQpy8wmmaDFkMagCi2wiVNKnhEtRwzgDP",
  "key15": "2FraJPTq5zDNyCchBsVF5wATjLoahAWsrDhmyfFAjuC2cXsBqWHRhsFtEQZ7BDnQi6w4MN4vWi6qSTvYN2GgS33U",
  "key16": "cURiSxjBNfJtZSZuFaKJyFuYSsxoVLuD177AUY5athMZFHb81n6wCfoERYg9PNytF1VAK8c8C4S7dV9xgPbWV7C",
  "key17": "2gLMtWiioJkJyNyw9sjXrtqGhgfVQyvzjeoPoFgroxfjHjC9qqmujQEYAfoFb96WYF7ZsQRpgrsP2kBDAxRPuRnY",
  "key18": "28MP97A9VqgFE2hRSAZwsW5rCK21Xbn5NFPvRDpLf5m4LMt3yCswV9TPRYun2zqgu22882c7ZEpFx32baQ6TqCeP",
  "key19": "5RHsa6K1hcsD1dLKwLVbbTq9EYYumFHWFoguUnDT26NGBfX43ACQTmgYUVxhzgoBbMy9Mp3HVAReZTihAmAuJHp9",
  "key20": "51A2jjHYKMMx8YK81yiWWEPrWfNBoTSwgU5dFi1NRkiC9bhiss7hJr75iwVrv3mf4paye5hCppQDFRUfEd3oY3hA",
  "key21": "3CSXoVG7dMn3EnHcTsP45HsvVJDKiz9Bnp8DrT84h8W39c6gU8A2wV4mSV4ELE51Mn1drkqEeYTzFvGDCBzQPXyG",
  "key22": "3QiUQrL5bnKjJvvC392ari6JyXaJ2pX6Vnxh7MgLPUCPb87qrHKFrfd1pko3tzG1wXPuiZmcJGSYvP3nBFgixpWD",
  "key23": "4emnhCPFMWi9Kqj74FNuq6tQLua2LHa5qdAJLp3YVeen9EPWNniwGXLq2k55qEz51MqibcL3n9WMfhpDRGHjeGNn",
  "key24": "29S7vyeiBKk6VhDWPTC9XdAxPNv2TGBSAcjVXzL5qZZe8pEXCgkecskdZqNLbgqVeN4Acvsaxj7KmUtYUqVwz1Fp",
  "key25": "5KrvSKeBSv7rmdCu4KCrTeZxgWPvyb5qnjDkW712bmyX5VZrzHthN1cXzX9EXqU1HEoUXJoEL2xBco8VGxCWPqPf"
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
