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
    "3q1QWc1qxVzGfeBLTMz8NMMYLR7McbLtQHwJNYfso7cuApa43cJQoY42RPgKYWncQsFurHe3AAxYcar6vP6qD667"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVki6MFu3TJNmQDwVLQYK1CWqcdgkGwnpg4sYPqzFQ4gsRwtfdDD2cwwmUkWD7BntLrwkaFvRhDmpHac6AhiKBh",
  "key1": "3BtoVG3fs19RsxU7AiPavLp9tUWuNmhkoqRXx4ct94LDoraXVW5LXetHEWBtmy8KiDbEpv4dWhRJNDUC73o51s6z",
  "key2": "2aFSyMEXPVjuBegekSwhjvfeY8H26EpyC9CfC6edDzSEXztamD9WaRR3RC1RhzHvkiKzEeZ73wShcpNzumER3xRD",
  "key3": "5c9eKgeMEH25h52cPdvsxvJWcc7MVRZXUqvsmWxBaf1mUZzGwgSzYb4u4JTGSkeJd5mTzauj9vknLSr5bgaNSdxZ",
  "key4": "XsHTb6Fwo9SZC2B47BgqqkeopQNpgV2TAPTK5zm2zRLHH25H98ZyAJ9CYQLfV3m9xCCwK9cWVyP24sQsS6HxTg1",
  "key5": "3JtwFK1aJihsS31b7ioNxzwHzsWAD46AujEzSZK9z1J88hoi4UzZM13LcekSsgugg2RDAXDUVKYRZFQ34seA8F2H",
  "key6": "3zVYXQXcFu81WJNc2XLYfh6G3RPQYNChsmpoh4arveRgViSrA8VREYVcKyKpdysSTF1fkuSGwv64Ck4ssskykGZV",
  "key7": "5f9P8vHea1eabin2DA9w2dWcrzF9Fujgkzu1r1EyCcrPZQ4FniyMaPzsMMSHWgRQiTvFYTK1e21YJb6e1Qw2Qm2i",
  "key8": "3w1yK8G5qcB5hxcUpcqmUoA25WFq4hrmpcBz986v92HCTsQZLXa4u5ateJokbEXiXu17y1UtnnLAz3NXZjVCtTnp",
  "key9": "5ghuccJVhXQm55tD6zgtHZhhLLXtiVQvgShUJqwNctZeX1MaP3gLhhSo5TRe8LzK9NGZKdQqqNPkPxP52xue5tZy",
  "key10": "4jW5Bb4DziymKLCxx5EESGHdH2ghZrCB9XfZd95adVJJu5NQHsFBnaM2nn2F68eQyryTu89UKWD48qdYzLCSxZQX",
  "key11": "2zLEUyukjH351YkLMMeaYZPYP9ncx2z32XfQ45kKzQzsJhWv7KpKjdSsKw9L4mMBrqLUCjWbsWUiQ2L8XhC2pZwQ",
  "key12": "5pUCGhpnGJKAJcoUbC1koqbLAv6FnWLTvCHRhq5j229MphAxz8HzZNhh7xTWWpg2Px6H1Mn6rWBinrFoYM3Tdyfy",
  "key13": "bSZtG687n8uYwyeCHQ4m36PnYM76h74s6xRAkPRpZxVhWDqpGJLr3i7N4K7qUC26LVv9rmibTWdjoxZnRdvCuSZ",
  "key14": "6228mFBxp8ZEwYVT7mmzK3hQKqEFNUoUHUHnmdPiZDwsfZQmRiXTFassiEz4gKFhuCHK1NKNDU9cGx3ymYYm8XCM",
  "key15": "34aZ9qsMmvACJ95z5r5n43JXFvvLepbxEfHvcfEHdwMdRofpjJqvViBtsngzfMBqiMG9uorYiDTAJpxB95MtKH7",
  "key16": "57TNZc1PBTMv1dWynoJ6mWaYcJC7JtwJ5QLb7QR42TtXDewvadMshzMb7aViygofXgwy6r7nogV4wbFABTidrVr9",
  "key17": "5uP48VJntKfGEzvKvKi2XQnKzL6b9zqVMEZDN6TFsAJSYx5JoTU62XjzdTEQSboty7TFpmyGhVPjDu8dMxeoHnQ",
  "key18": "2MKMWkaRxFFHhY62QioyF5ADSLnWkPQtHbryMHLscMy5qNtUgakrKPxzfbQJJ3kCFfLGC4ytnidYnYyr6oRk3yUL",
  "key19": "4QZivGNBJijjEj8ZsWnp79gBps1KBd4WNQez9GanVP5unjDNFRJCgd7GDnvxPtK9LvbDdRFoBZWQTrjmh5H71feZ",
  "key20": "2Cp8ooufefHyAjc8wWKTNn1kL4aGZf2XtXnN21FiNjx2xLnm3XEY5mari35xHqTjWSwJ9vsVFRR5fdcSuHXEAyGR",
  "key21": "3bRBzCfpqEBqrfSqT3GULu65iKA9gKey18ks7jzYNja2bQekVGC8yX74RTjgxnM2pV4KSc8rFtfA8udWSXQg8vMS",
  "key22": "4EBnMhEGGmrEGWR6phD3eyZC9HaNmcyyQGLQ7HQWmy9kwrpAirQmtPooYkhqi7q8y36srE5FHFh9ZdhXYs3ph5P6",
  "key23": "4qsm7ivjb5L4DFizqkpiUkg6be5Vo8riLviACFvMZ3o4y9ZbcXhRvcMMo4MzTkCA9B7pLvkp79hKbjyT97qqCPqo",
  "key24": "3iaLPg57QgiLAQyo73g9FbGG8DzKYLRckZTCDbpvnufHfBA4H2nfw12hwj3SWfzCQkhM1DD1mAuvQQ1bDxHKkUoR"
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
