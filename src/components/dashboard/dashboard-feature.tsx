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
    "fHV8FkqJG3XCqbhkHzre4S3LvVBzFb4tbyKSK2pNBDZvUm5uAw77eD6YCqRpG5hhAJYY5jisottFeWTzEY9fSYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEzhBpjAGzm1mkghfoath26C9kTSDVca246QuoMKR1ambVta2h7aehUvTiThsVD7rocjphGub1vfuHGKXCAY9fX",
  "key1": "2WZD49zqbuFoerogysSCXG8TjnM7W2yqLbJLi749f814jQzghcg1KWizeFDN6oc3M9HAQGaqmFDtkrxBTEwTxVFb",
  "key2": "DnriBLjB9PWnqzbrFwdLnMuAa65nffoUmUq4oZkFxnybUjR7P1HeboxjQpP3EDxzgfFArfNz1VtGRZS8cq6mW9a",
  "key3": "3ZykFBACe3jUbcGvrdEYEQKQwv8bvNeZULde7nuAEveXRWivjrteDUTJ6T15ysYLmc9jobucuZjuB26LgAq3sJqi",
  "key4": "4v2NcneTXmwFsFrCBhFTTQgBk4F2yz1QUhojVFAvg7syDRU92P9ChoUR1WN6DDujdX3JBx6gp58twyDm5i2jq2Nt",
  "key5": "vP1v7Y3Yv7hu2L3kxzQSmFax9UQ6sDyb5TG6HQ6Earu4fa99RnEU5c2niTjowoyksdnhFdo9JZVN5HZcmpXnDxi",
  "key6": "QtvxDwrNGBV7HUay6Pyt2tCmekeBfREia2BkKQxJGDZ5sGZHMbLH3HJLm9szLJuK2TRTmikuGWS48LFue1P7RRQ",
  "key7": "2neCfw6VMjtTHk5cbbXEJ2RahdkaL3pb62cnZ6sN5HVS1gzMaQbwq2p8mdDaNqPRDAiTPaR2K2CWEVjwwL8PHdEL",
  "key8": "3VojaDTbt89q1VtFLr7TGJNs2DicvfGu34g1vTBns62YdtxyUJ7LXFnTKFF46UZTvxzz6F2zH4rJYMEDXchp3APM",
  "key9": "3GuAmXVvgq2C6p453dKNt5FKMdhMW7EvNK81J7PmFKhqtLCXaq5yHRMpNH2Bsovo3vz1ttHvYqXVmihzUZyBd4mX",
  "key10": "2FZX3qfpfRAoPoipkTmgphkMHo86EFQsVEBhZzxsffrboWHqe3pFwf3iAn1MqkCozvVkAUR1Ph1mkWNGDogUBJ3s",
  "key11": "2oLrcJvkP4QE2v5m1Ued5Dv8FKC8QnN6pPWNEwRDfDpfhe1XHKm2dwGfSYMqVvgRVXbPC3U76kytQ5dbLWpM7nV6",
  "key12": "3tDPBa9w2MjwNn6xLfW7Ld5jCgs97uazTiCukLEPXEZGouYcdd4XF3sweqnNTeS6G5EGxmZ6HrnSn6BM6N1vgYME",
  "key13": "zCwDZJpKx764fecUA3MF6mwHd1hdx9b2VcWnT9XdRo9kxqYLj7HX1dm6SZwjpxHTYv19TQtLRWNp5KHhh1s1zL2",
  "key14": "4SgQKD8epd2mnmRhdc44842yhxxtL4nodHUNM89zHjHeDo337vn667rNc9Fro5Y9jJQcNDFwdVmsBPD6cHcBUvj9",
  "key15": "YZrgyVtvyHnvEr9MthFQdxEpyisEfWs2gGv8rqHmQHyxSGiXARrCbzQ9antHor7uV4bgqingneQbsQRHrgh3Rr4",
  "key16": "iWKD21X4VTiFiMiaFtCG9k74Zi5StfUFdraDvgGQ8N1RmX95MisTAub9aZc7CcHZCME68D239VHod3D9EBGLHn5",
  "key17": "3K3f5mrX8W882bSUGyRWvYPpCYNBUbQDURRTvXTPgJygWcCJhnuVQH3kawBfzWVgNQRHPTWqMLC6im69ZjofUoGa",
  "key18": "55NtSvNmsgcZizqNAvqPEXnQJYCwUeXNhmKcVxrLCzhoh4B3AJQru1hb89drGWwRcAthMjKiahz9W2oz9FtiLhyf",
  "key19": "37Kw3Z2JC119NPAAWavsCPvhd594dEptH8wUHhRf1jB5WDrgRAAU7bHPqNUxxhzMW68HEkqLj6u2d6mU651MmUQv",
  "key20": "3EPi8zTLdos9G3f4RQ4fFpCmNQvSSZyoE3AkXqXwrRi6AwvqLpes3Ri2MXWcfTXGTYEt1gAUiP6kwTAP1Bstp1ak",
  "key21": "2Es1VxTAmvkfugPjxzVJn9qMMXzpBnmQZNhERXzA3V8CwJrQSXFNgU26tME7Jof1j2BNr2ZFhKuW52oH83r3XVfi",
  "key22": "5uoiRj16vHokBevBcW63293RUKUwTrrt5PRcvvmB9GzSofjE1cD4oJD7NaJymY4z2LTRpwB44ijsiGBG8bfdyWva",
  "key23": "2pCczn1ZsLpkLaRDYP7DVwMjzCfhoCZqjfehquwp8ZEjj1JPSpX7do9FhV3NcDDfeozyYYis6SBgKZduipiSJ1Sv",
  "key24": "3ZQscv54jDdkU2UoDBXbuc83oHwHZzAkv9NFJ3QJPpKh9CfKDfQEwopC9MztJ6EpUafqurKBoyBryQGi4a8ts6gw",
  "key25": "5McQbGEcR3Wbj3XQEpCGhQks4c7c4TGy3hzwek6z3hPNqxueL9eQvkjaRLEXU4ikf8dPVrWYSZVz8J8N4vnh9qCe",
  "key26": "2fyN5xhV45wUphtwXKRcCMjuZdU9qD9oyvYaYbYVv4LBos2X7Cq89QNvSVg8yeANfCqhtdooGwyjLimUCC72hC2d",
  "key27": "5wZwmFUguwoDF1GUMCH3pWSWVXrmestSrAsc9Atp326HAw4A2BN6p7i2YajZSh4oYFi7gSnZQd9ErQukwFqtNNJ9",
  "key28": "4dMkigY5Edyw62MzbhDUmtKs9kjVpsMmFFK7vRSdj5Hu18PcgyB5UTWB7z1xA8cfNRS3ZMtHDppr1QbWjejoJpy3",
  "key29": "6AMqdWFYpMRAojGMi3G6RKTK4wQ3HxCBjgEwuUaREXsowLHeUyv9joJ7uikb7AdgPrjV681NA7ZfYxvh62GUPsQ",
  "key30": "5afqrn4BxN4c5qevkhBcqFddM4TA1LWrowHZ7pkEX7fAQq6io77EeYrbAauSRqxRHwHkMZwoSDhPBXf8d1ud6VG2",
  "key31": "2LrvWCEh2RL4ygEHyPgAZxRkWwDUt1MDWEyXirnuHbKQhxA21SR7XUXFxYdPhkRYuRjD9FvESiQVkAxrWnEqjKYv",
  "key32": "29f1xzc8T36utp3gzmHH4aH9c79WUuo3kgyxdDntSMkBvHF4b3GsatUpMHdRp5d4VrcJ9qxQeFAZH4vdwfzHkP5a",
  "key33": "kfgMQWPPpcFwKCroK4QFp5mfA5PYHutozroMp9wsDrgcSu5Xhc45i3uN7Wu4iJmDq2DKjDDpJVQh5g5HUJ7iRi8"
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
