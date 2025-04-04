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
    "Th8Ujdxd8DGRAy8hugRxfC7321rJgmSsstHsVLUfExCbdCoSKS5TbcYfY3pa1vWYcwHu3omPZQBvRqExzPaFywN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMiF9P9957gaeDRM1qjen3vw9bZVugFUZVUYfz2428gwhJMtSEsQY82bqstQKXTaBLaNYsVezpPrVZKL3HUW23i",
  "key1": "2JfmKwBBFbT6TPgo24pYH2v9aaztf663sBUbA3AbbDG4GtzSTvakDQ2PMtb5QueXLjqJvW21BjMgELcVD4Eccs98",
  "key2": "5UWk7EhRbPznQHhXTv8BNHTXj7ESR2RNboa3qc6Y4jdbjCadcRGZhtP8i9g6SCsrcEs6TWAtn8H5YJrftBJqzDYw",
  "key3": "T31dVj7YYmBJNFKSRtBYdhr47cjmMae6MA5giwVybCKjWuoYbEepLxiSjawpAwpVmJqisz2pBLv6gbCuEtK6VoU",
  "key4": "3TjpszDc1jd46kjTvXyF3HHiV6x7ABozfVV9zeYRZtdBja5vzoRtSCn33NHPT9JFyb1AkQ3NsZmMBfzsmFhK2PUM",
  "key5": "GYczNcTHm8NmqRGdboXMfX3VFrST2xzw45uPucbbvaXixuC1gzkACqRW4apYdFjXti9N5AfdyrwJdWeM5CT6QzU",
  "key6": "5uWuoMJweaQnAuLj464c6bvshLccoEKgV5c9tPE2zAh8N6W8AKGgWhDLTeP4b67MnFVcdNSk5LrmqKhn4ovArSxY",
  "key7": "62DojcCukSCCYdFSwNgg8ahqJeiLqrJtAjkPXvEsGrQss1bvTMwyLUpyxqSWkiAjcV4AY4Q8dGKWJVNtLkZYtj6H",
  "key8": "LsoXLkZiiuPqmtoonGQMUkujFEzmErzuLfi8Cmr1o4w7aTVpVTVo7T5zGRktyiTAbiPFu8aYKtk8SVrRV7AMYRN",
  "key9": "65NnP9QyFUbDfbusht6zrAs3aoeZWSBqrqyW1v6gGpnX14KwPTjEWTm2y8QRhUX5g4n1jwF3PvxARS3Nx7NMudGB",
  "key10": "3b4TNQgNavuYKw5n5BTqHym4aXSwbKdGc5FN2fKKmh7TndSDhinaDgqZAEkjRWVseDtkTRhtHYhxSbNjB4N2xUtZ",
  "key11": "3S6gQDNCXk5d9ejEz61B3cfGBXMCpEzGXB8gUng9v88DcdAU7vkGZWNV1CEQF7EhpqTYyFo1UsEudH1q2rT1YS7n",
  "key12": "3Y1VmmocE8RXzEKhECy1Qq76aCd8fsxGRxxPwF5XF5hGzCUktK6tZBCwLB8DhHhH4Xp4vHZySJbM9kAmefRzWuQB",
  "key13": "vwe4cJZEZKpZnLnyXbxkrqjuH9xGS2DzSiHCS7227FTSbBoi5Ug8h2JQL6afVmjT18nvCGvUJtpZjRjnT5DZpbo",
  "key14": "2tFt3oweboHWk2Jp2uDL4ghKp2GEwiBgLmayrPNhPYhoECFfkjTmdKujcGPcC4vg6JfsDH2Pk7HBuuCv5fhFz2Ax",
  "key15": "3UXPzj34Bw2oNq7QGEjjbgRuJuCC3SX1T3JsNSEoKrwFzyFAf4CdR5cVuwkdrziVYM1ShieT2VfV5ZVNwMuZJZsK",
  "key16": "2vvPUquxx2WweGG93ZJoukJwk25jtqpVUT4Dy7kdyYtN9VQwUL76Xyjvgroa6FUm9XW4RiWZFeS9v92VD6w2hrd1",
  "key17": "oB1oK4xzpijTvrb2JhkQVRqbURfAt59U5ULENUUYzuw1VrYS8dWsLWfoRHLLrjykZoHU9GdjHAf2oaoypr2Hy4Q",
  "key18": "4WKkHm2n9FWitf7ixxJ1MRkPmu2YnPhz1USyzapXMfDQoN35AknXCxCFHDa7oEPGSAzfHnbsm4WmZtko9yKEaXYC",
  "key19": "4F98bA5Ku9w3tNWGPrZFvLYuLN1bQcgJaCofbwYXthPmHYkc2MwgCoRBb9ndnZ5j9V7YnqXipzBYEqjFgFWYDJ9z",
  "key20": "47RWum7XdtRK3LzyW9wBTPzrWsFFMMkNdkSkBduHPGoMCWmu7cgzVPxNPwv52W44UxD7zqTtm722TVqGhx7pE4eE",
  "key21": "4PzkdRWTPKsyaBTxuwUzGnrmYcQZD6ZFxTzkbQwhxKyoAMByRC61o4LBhPzcjwsKLjgjuxetpCJeK2LLE2v3BVN5",
  "key22": "4x6EGbT9KXuBSbTVtoZEF6hoiFUQ2ZEbRS1Dze1LK31ezKK8aAfU1b2K83B8p2X7Fdea72BCKmU1P1oJG1TVyGKz",
  "key23": "46tDpmF6pqDsCng9iFyfN3YDrceA1P9ZkMwqZrmgSCU5fhSu9FLKH8JEmvDCFWbT2FSS8FnTSkw9o2tTnUbiNqN1",
  "key24": "3pgUyGJyC53AutmzF65HkqPXRispxFsG9SNeGJ7qBh5raZHWipSArZvDWJLUHLL7apT2NuozrvZuTCjhQur3WW3e",
  "key25": "2EDvcGa4jo6MggZEgWmvQ6bke71NiVs6MUDrLYMvqRrhDufUHB3SVmJpi4NpFumHsib92SyNe463SZRdFgvutQFU",
  "key26": "5tJ4brmD2atzaQ2fJEeVk14sdCPgeqJMvKEfuw9VbCLoXQAs8aR5bDPx6kDuG8vtUHtst3qSvapuLKV8jbWZZ7i8",
  "key27": "B9C1d2VtCgGYieoDQUM1erwn4RWwRe7kAtCLosVQTg8g9q2LzEo6rT13NYdUQikJi8MDDg7hoqhxEtapCHG4PdS",
  "key28": "2ehfWEmH3VUWDuXbgUX8ZUumGfEDoPRJqSgQ3Vyv2nU6xPxFHCtVJYrsv8HPbmfMX9888YqoCwurcMbb25wemZ7y"
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
