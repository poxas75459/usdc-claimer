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
    "3hELvBDhR8Qsy4uAR4y8kwg46xGVr93g3aYdUqCH3xBr6uq5SUrbev5GiQuHKASybuh5nDsqpFSvA5Z8yUd3jyGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7Qwf3AfBr12Kr7kPQqqxKYUSLGcjH9rHYsCEwvBPU23Z65TctwMd8QfgThpEq4krxJz4bJPkxwAC1qz4jGeHwp",
  "key1": "5fduFqag8ENsBDsKuum9SPYLE71nBt4jzGrcUJdLumgpxMsfPSQy4HSg2FDUpiTKNPbY3g7jsqDvuyRLBJDVWEnv",
  "key2": "45PhJaaRSMs3aavAr1jysEJJkKFLLcdXGfV64rCNW1vHx35Dn8tBdYj2pjxdfaTXJXHynDPbvSgtT4BkTvkZe2fW",
  "key3": "4fJdU1XxNXpbsPxU3bhvUybe2EBw6qeZHTNFv53DwjuZjpt2UaZXegPh85PAmKGG4L2kRQfzzeQHPrAuYdedaXSN",
  "key4": "2eEHtwNzqv8NqqRztcxK8YDw8khFsUuLAp23ZHrc415NDxGKnjnFAsVGwLeHc78PGrBfJRsj1ZWcx3umVjkWtgYE",
  "key5": "5cJ2GzzHhUT9ELacteEts6fPAmiERYsX5rtZW29A4CXy4XtFRd1sokJnzR1GAoWk2Kxc8vbCVY4LqoxfEsfBw2QS",
  "key6": "hUa23zUP9EEErxb5oQ6aWStGnTi7eWi1H2bwyZAQL1rDbchwTwFSWoJJgqNTTQymjoDBvAJuyL8LYxuTaQ7L7Jm",
  "key7": "TgKRVFZERXLC8mSfFuuzisfZLZMuZPFdZ8wwJBaYmmQJz4j6Xxns8iFHa5TsQJFcRKh2DbpPzKMXu8naERQAN9R",
  "key8": "2Uuu7SRJ9VkqGp4NwjtqnfPLVo1xUtSpbfgKYtY2Bg6iXyBoT4RKzDFu4y5qCtNCwMbNjaotUpiUV8bPFbc23ZeM",
  "key9": "2vJFm6Hq1cQZFh7f4g8UAwAwAEFxdeVt2LZHh2ENNW8DaQLiULP45L4Q19BwssK5Jpknju1C5enoq7ioGCXwbT92",
  "key10": "3UhZPSB6DJvrjodtcheShy75yKWuxDY1h5xtG9HYk1Yu6V94QxvXy28FUmbfrupbueYTaVGxn5gU6v1HYuQBTjbx",
  "key11": "s6q7jAuHpWzu8d6JsZY6exHeRmLnJK6rLGjU8Ef8o7rYCQxvcfrWNjmdhjXNshrdDAdG5vwnufgMmdgY8q3eWfw",
  "key12": "3kDoktdwXfTEGfZHxZ5g9sE4XjX3EyCa8WqbpSRYasEp4KiajwLwhvBphxSLN4RwULNY2NJys6bYHYpxvbkhN6RF",
  "key13": "4BjnsFYqUSRKDJDkYVczEQkMDMAD4f3jxsb7d41tS1rLGpzHTBK1bdhcsnQGjXZGBGUiqjST55DwWPVspRzw4aMw",
  "key14": "5R2g4bQJcHarixPKuQ7mymfXj5PPdZTnWjZSEuf9zUUZxhGyVZQBh1SC6vyNxb9T7Ux7Jtk4ZHjMVw5dGP8GtGgY",
  "key15": "3r26E1fvjsKdDF4neRxy2MPV8FnyccKamnn3SBCpgiPqWrRyUdeYKZt6BKJx1BxHxo28FCj23XNMX4Qgfw3Fme7Q",
  "key16": "4KxikCPFYk6uSnqnsYojxP7AVG3Fy7Hka518veuwGCzKiQXoYDpbZy94DS4wAzRP22qpj1zEmSYEohWe77jq9eow",
  "key17": "3SvY1WqMhu1iFyZq5K25A77riq8rsofpiYtiQqyCrjC5uh2FskWyAbtxjhe6UYRnCCTHjQeUWMTEeP2t2UEekCCQ",
  "key18": "9FVERHTzVogp8zQkCo46WDHR9v15D2JrtotWGFrCQYFGasXziE5j5KrH1yw5TUNXj8wGuHXYGbytwE9hj3ZQ8Pw",
  "key19": "2XMZpjcczYF7Jd7Z8LjsB74GT5PMKeR3865MMXsGWNGBGoS8wep92tKu8Gf4Rha632j57PeKW5gwuN785Y7BmtN6",
  "key20": "3Wv9WxLbdHPQP1zgp7zKpt2stExDdarRccdEqkDqGFB6KJkHXobWfvh7zQBjrP2qJARNsuNH28r8YYpGL1wwXe42",
  "key21": "2nVU4AJ8C6tkRGChL3GVndgvkddA4WK5eYcHshV3PQLLGEw2J8jvKHGgXuq64Q3CZ6eCDvsghYFP1JN9j9PAnWJE",
  "key22": "2odBZduj2vCHoUUk5K4t5wnTtvCEwp5J31SUZRR4NzAHa26WJGAN3F1Hv4R2kv2E6hmDPEKnRWtczGeY28GWJ4Wr",
  "key23": "5KZpWMLgcM8SZSJKJt93xcqzYdEacGGpqKATgXGq3pLge6ieXhdKYDJx9AqmLPiuywnJj6beGWoVWuXSMVYx9n2z",
  "key24": "Cou6i9HpYhRmjWk57NGokpfyuwDN57mhEcsoKUrQkjXwL2YQtEixoMX5HJvumJSCHeHQSKpfFszDR99sbQZJANg",
  "key25": "EDqaEjdvhXbLhFzzDivZ6yfnLHEhGGzWJQSyCoLdngeVQz9PsZ5ZPxA12Uj1ng481VhgpD2aZ6trJGd4APHPRad",
  "key26": "D8SoRHQ8GY1DiFewxqg16axV9FqZdYfUcEaMBkhq6FLbfHmyjJ1qHhy83Z1otfzPNXCHoxdhyYbmiYHbLLBAUvB",
  "key27": "4s3BQq2wr4dKN35efC2YVhiGXgMZVyh4YKnSLbeqoAeQ8CuZovZTfQCHrG5rKEkziZeh4f91st3ry3ZwV28xhqUM",
  "key28": "2RSKsj2Jf1frvt6tnnWe8PL2ygiBDthd54wQyzhL4tp6gKbd9op9VDJ2ShRBYepfitQqrxormkkigQa81qBYi3ue",
  "key29": "Hw5UCEKbHGXw1CHkGsMqVuqPieR9QCStR5mg4M2tcdKqWjbJHVx4f7j5oHHgdayirkJ9rbr1Rb1XRokmjUweTbo"
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
