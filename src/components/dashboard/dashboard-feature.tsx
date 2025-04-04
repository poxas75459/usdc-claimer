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
    "46rWcrHQj7Txqx28XNpMrRbL471bogZcmQftrazcVqYMLgWTqsUyYktbFyAmdUcaze7UvLPLr67ZwfVcr2Fco673"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DTAKxXpgnLdDH9ps7uzzfdpjhco4ghJdJDnY1nJBURd1tTM2dK9X3vgW5eeDwSdZkRUz7Lud4wJHWSezsgavXdQ",
  "key1": "3J7Xi8D6FNyfw3JFL7mhP122vb83Bmkz6NJHGEY76PbXnpRx13wvWJdzKi7gmshBUK1sDpDNExxD9hR6geKAogMS",
  "key2": "5mVmovz2ngai63udxxaqCWEA2XuVj4YpW8m9dD7bUZRa6KHEtTfoZaZnuLxnbNhzRtp1otHNyf7z9zZRe7ZobRbH",
  "key3": "2oyUFjbfzaLFDB32kERQzMzNT9wg2THrbzVJeJraMoCngLBKXGeqjKJSwcEiGVhabEhrhFMtMDyTCqhD6euNk8uh",
  "key4": "4xBhDcc7ycJYqm5gb4ar7vGQHgTY9kAAeXrJsF5mWCxV594FUm35tMege8s9f6zESZP9BCyNwARACiWW2BJjdSvJ",
  "key5": "5chLjWTBoUBwhjQsXhMr5VWg7h9AQZT7U6shF93ERikM3QfMA5X3Qa9xXmFqDQweygY4g6EiBFu4CLZYnM9nudQS",
  "key6": "4g3ezve1X1WtMUg1RjwWEgsgqkDh2qM1wmhmpoKniXe3RdwM7ewZxfov3WAdVpLyLywk8AjDSF6J2oC7QrMJJnau",
  "key7": "3mu4oDpD4gunnmchZs97L872AiJdgKtLFDrwuUWAoYjYhDcPEqC82q5ogjvuhzcn5gtytc58sFzc5WW4MNUEkiB2",
  "key8": "2SzM7Ez8LsZBXvsN65WdBWRDWCEZWJJT89SzsB3vxeVyPQvtfahvGoDaSagCnNUY4gsygcgcKGjfDd4Wy2pWxnvB",
  "key9": "67nVkgvy2SGeDXqnCYKNjf1ebuHaKtm33HXwx4quzdi2FduXdWzPNTBeQXAQ9XfCqtrmZZziQSJ1MmzJ3arkk4Qz",
  "key10": "5CRaJW95nD7E27wTTf95jKp3cFTY7D2zR32y79beAczYZE7FmKPUrpPNyLw6Ng9be1ysF9sSEQJ5UXWmX8o5qvSn",
  "key11": "41tMdw55864KKb1FpfuewZG5E5NarwiAAdcuA8zPrB2ZRVypGkzjj2Etdd3wCmV5bsBMeiLewTEHVCZMyCQ4upBe",
  "key12": "oWJBTSWR4vJ4JgFkYQnaK3kdm2Vm3es3Q5gnjn2h44Pt3nv1bh4f691VRDQEXw4YdBEPaH6de3CNjoEXD4zf8vr",
  "key13": "5PYHri5kuZz9KtoE96AJ3psMUhMc6L4yxKexrkuZHuiyk3YJmT7Q5nfXASX4KqxsL3gPXne45YptUGogaqzF5q4a",
  "key14": "5sBkkWSZszWiA1H7dWRHEjt26T1nycnbC6hymnKdUQFSxS4jNx95rTiu5KyMPqkFqtodmYqv2r111cC3ZsjuPgNy",
  "key15": "4eGG578UD8z2BXYh9sBFY9LPvUu9J8owEZhtjwufBgHT9jLf9tpjruGNs3ibmzcoBeqXUvxJA8gpF96DXr5wTn71",
  "key16": "21aKF68K1biRZ3Gfgh3X3ZKsvbT4VadecPraTFTXu8dzr89SSo3RrPoRMfRbCAZisBKxSvFvpVQiBbYXDzVMg7fL",
  "key17": "48LyWb634D8isoMSaDUj3DSraznA6FNmVhKTZS6Mw8n9kM8aEuLSBSTx3hQhshvEP7UVMEqoupyBCv3ntbogeibq",
  "key18": "26jiCJPfEr28k2fnTf4EeR3hEzVSbehpjuPapdAjbUjCK4goxpshqWiHX7x1VTDQfPFUQZeC4sbebCUshmWsemup",
  "key19": "4bPsHBRBoXTBet8kCkeFmCHmbQghJJpjzeFfEqGHVBbejLsFEQLo6h3oe6foXrHXvZ62BTULkWsp3BvWzdEmwSab",
  "key20": "2v1sjAA8Yjaj94ZXg8nbNXsgDFy4cMoFpNoNAXvtBfnVqSDaE4tAbCkyFVcnsKVm6ZjmJpEkmAS1f4MA6ot3tqcR",
  "key21": "5ovMbtB5Cvqu4Pmvyj2XoEhfjvmRDZnhYKRd1W11KYRq4En2KQoEHEEJ5CtYEG3pfUBoz3K33n4qjHACzvPJTL8K",
  "key22": "3D6YFQXoyKoapu47ZhZBAFm2xCs82DYzNqyhA4NqrZXJ5dffQpjGKt4zJpGSDn1PWWin1kBzrajHDVsBGu1He4sK",
  "key23": "sCDoHKhCHWMbVfNGxSrz1AcZ7A5zWL54Byu4n8pmov9SEhUjeJcnEf59FBzoY77MSvt8PTFKT3Tefsj8LnMp8kC",
  "key24": "2R3zvxssyChhrEP1DAFoh1H5LjptftwYAYAxscacUFXYp9hp8wMFecjrpiqKktuhErxBMSTUzu91AgQdzpTb4siG",
  "key25": "5BWy4xLmmNv3sd1XCXwtkW8vKAAEfYV8LhvWxtgnDZqxcwnC3bmqJtF6Mbat1W17KbM1Rz39PnUE8RRAkEBJ9s1i",
  "key26": "218f7mtuyLBQo5n3XTUpt9gmG3cZ4vzTdhvLe3WwQbP8WovdFKS81WGUCZaCdsmRdtuZM55BWUdN91YRNGcfsdEj",
  "key27": "Ldk6Yj8itS7VGnpJZAzB1NvWMyaDXfCzxWP9rxAEBWLpmJWwnmhd9P3iPXWcgKRsBXMMFi7nYYqH2Z9QtQAa8B7",
  "key28": "5SUTeUboUxMAvSKHvEntS9ZcgYtmwZZoYsUW8pA9k6nG6XujpMnPX7W1sfwmuGuy3aDi3BjSvGWNH9tMdokUrob5",
  "key29": "3wQp2Wj2aFTYbseQhJ6EuLRfdSFXTqhYdboNibi1ZKqySSKkpEVm5JfuJHuGKz44othT1s2NP8QwRhA9GWaSDNHD",
  "key30": "4rMJ7rBeDeyZVfyRoJhiBnwfR9hgoAAQLBRqxeAsHUDc6E2YNBAbXQsRMAXahQ8jBR9dBfhr864xRQgDp5t4q7d3"
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
