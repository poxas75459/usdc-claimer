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
    "3U7pWSMWUH5cwHwwTGLCecHeUuZYesYXLgxWJxCn6G5PHM2GRwD8kWP6fZ5GpZq4mQt8SqDQFxPe3AwHeDipm5mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HXxpsQdFZeqCA1umecSmatwmz4ywmzUqG1jsxEvMJw4e1nGHNSynAH3DuTTpR82aiYuENdYh7Yi2gma34syJyH",
  "key1": "47EgDysumEY8en5GwYA4YfezTCjr9YMV3umKsToGvsgufqUG6Q3TWzdS2z1AHq7FzLdembAE5WjvZaJe5J1WtiTA",
  "key2": "3Mrg8A98ohS9GyqS7m9nVCrYo5WuDfeZVgUs4dovecpunYzATPKdVuiahc7figUjsCCVZpDxWaBhtywikKRoaKW3",
  "key3": "2gZdMad1viTTvVA37NNrKtAHadvcLs4q3G6EQc4vGvEWH7uvKVJfVdpR4nEashuzUfVfR5qRxaC6dfr69KTdrC5c",
  "key4": "8N3MGaRhB8pKnhCbM3r1NjyZa9VctRvAxa3xG68ideX4jwtg62cahZPmh8y287FaRuqknVXfAqoDG6p3rE7YgTB",
  "key5": "5tNbVWMnPfSUuFkqYAbjcoJUpWLeaRuCR99vBzUygyx7cgXPKFPbFHRR9omVwYiqVmA2GTwVTrYoQYhUz9QYPy69",
  "key6": "2WoxVoKbnws5wRf3KvPycyokvBeaoYoYDCFf7uoqJoeazvoBaoNtnv3H2ruQx23TTmbbNbaRexHpZg4xywgp43EN",
  "key7": "4KSbtc3ZzELVBvyGXzuVdaaTShWaBwb6LRAyt4ZXsPV8rcumFs6ZfKAivVYWLqVgaT4yhi1ki41JzhpWVjUHEq5v",
  "key8": "2kFN3NW3yL2veB2d6SDFDZyDCJ95qzheCk2Hbn6EVf86aTunpor6X4zVcvsFYQYk1WdwMPcZtQ3JyRpvnpc3ZVLa",
  "key9": "43VmkhCR62K1KTftybXYNDV24U97Fuh2jGorVktXFyJ5sKHgUjVPCnW6yU4KayvdMhHycmCrJiebb61UEzyXQLbg",
  "key10": "X2Lg4CDX5seq3J6uh2VCK29SGmpJZjGhHHhwUHWfVxbMHqtTizkNrCQdmBFHELL1hYiLLmUgMtzc2HvbDhDNbw4",
  "key11": "5YHr1n7wv76HMvvbX6uWKhBYwtNusWePgJ6NbwQX3n94gWvuXVzzyiTWgJY29ZkGc6sJhx1JmWfF3vqNQLcMeASd",
  "key12": "2X4jDgtySf6KVExBYAPWEyaMPwXSkL7fALv1ohnvR5hscifGRY7eDAaceL9Ckc3WYRoedS5raEtXct7vNBrNa7iM",
  "key13": "RUduua8h1iGF9TsZLfdf12NzgmBJ7eQ9PbXhpyqT3Gj1ZeAz4ikCVmEjbuLuSVdj6Khoh9Vtkkr62d8Vpic9poJ",
  "key14": "5uyaW8QAbAvH7n8xfi43D4Wj3EZdHf2RLFumyYmuy5FNhEmsbHUvhsrZRLgPaWvyuVpujVUAbm5BcXY2BVPY1Xne",
  "key15": "n4ynrhJyrUorT9rLgbsbthmNAtcC3LgAbiaFe4rLNbMhJYPMaG8EBdMu1w7qSNwMufL6zxwYYmZs8YduECNGNGc",
  "key16": "5JuV2HbH2WZG9yDtCNjrkz3DKALhe8AHpQMensR2rJTiaRupnr1doK9BJGa1FNWRbf7zykMZkMvS4r1k7dpZpRvd",
  "key17": "DzaBvT14EChjohjU9pKJ9WZYMZ1VX4WK1RKvLyW6bBSSR9Y4R2zCUZ8DWRQjQyiiqEmzSF8rbEywzbjhAtapGR6",
  "key18": "2nnYh2daTcxyQJbBkMuT57HStHcZSpRbmD92xhJDGTgpwa5C9yWf9WVbcQoRaccCP7UPFrqV1ammGm7HTrCuDs3f",
  "key19": "3sLPeemH1XEsQdpXb1HSXE8apjeqrw74x6byWQxAMH9pyZuzi9bRBwBZQKza8qiHVDz1d6YKH3za89ALCKTKG3cc",
  "key20": "4hNCereRxt6N7pExsZdU7CLbTqzTi59vMteDs7jwZ5XdpPd1h7FiSe8NnhRZuUANiHkdAZD33SHbEZDo582VQvRb",
  "key21": "3ztDbRbvsKPeSBnp4vfzK4VVHccC9Vkjzs5hqNyRJUZRTi75sbpBC6UdX1J2ShAWXk5YVnJrrTFdJKdFBD4Bo8cK",
  "key22": "tW2h42xVXpwUFxEwrWye3SCuVrFtai5Jje6cvwUwznC9E9U2ggPW6iRe5MPXvBfymre4ifD3fKNWUP5tEbXVGXE",
  "key23": "p1uHAQEftWGk1qq6ARMVgEZMBDXtmGdfWideaaid2wHfUEiaAyqFqM2qZqgxNpkM7ZSVkNhLV62pngNKNcgz2iS",
  "key24": "a7gtfAqcik1FRnDHibXmcho3j4Fb8mRoji4aAz1zAwher89dc51j5XUZNSg1injaakm31KdYx7ZmKsx7xjbRqf6",
  "key25": "4pBkVNeyaZfDQngCKR2wn4J4KJe7LEcfi7jFp8je56E9K9pPAvVkVieTDEWtoh3dsLkJvdqDzGQmWE31LaZyW2Sr",
  "key26": "43yxSkcmo6qtCyZQKtRM1PTixe2RQjt1ZPMJ3RNURtzx3nAXKQMjRb9y5xKNJBioPvGQeYV7dBLXJRznqzHkH5W1",
  "key27": "5bxjHVXLDQJYUfk5UYt4GFz9qNJBNYsd5sbUg83wjNWfThYPnjttjBWv2TK1uH7AjJDDxcKytMTRDPKYQJsFvo6H",
  "key28": "58h3Q8snpV5eNoPgAgK9eqUw3Vt22NhpLcckCgaScUPGiUVfVYPTL6wPRcjNByf8uhVCsFgVvYg8aBNBbWFcR67z"
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
