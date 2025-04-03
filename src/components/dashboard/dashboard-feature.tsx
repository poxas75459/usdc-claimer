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
    "4epxiY681YRJ2PkGWU21i6w847JxkN5YHtNEPP4kiNpB8TfExt9MLepcJ8LuC3hFMfvAVeNtzzgJUFtpHYeKoN4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWPT44v5NHwoEDQaS2Zw5mKAK3TWH7tGuUVSRNG5DDqUYifuGwh5C3ZUWESXmzwFGk4nnvSyeNS4GGKGn2rCCSJ",
  "key1": "4HQjbtTTs3BYpaV7g5tCmsg31Af1WcRX7tNN8BepbvbPAXHXrZ8qHNgJwUyuvyrMTPWeywd97y5hN7Fq2fbQZQwz",
  "key2": "2DVuNednmqtDG6SK7S7iDvmtyXnub8P8DHfeV3LxvUExkTQJvqj9UpDkqEicm9a5TWmqH9nRtNQWycmge4DYdJa2",
  "key3": "3es7sV1j5DkSbfp755ExJZd8nbm5Dc5GNhC9AMRLZEaSY8QmfRebsjN6K9Suo3CCLZPkuGBF3AeFHGNp1YXqgyYV",
  "key4": "4bYDFg9j35Naf2fJgzGpHdLoozjEFdCaEJ56DH8CyxKQLwLaz15fG2gzLqYWRiLvKG87UcEWcCxu2D1b6iPqb5BX",
  "key5": "66W9gJ9ZeYQdReY1CxE85KivGqEnD4SSCWdBHryZgrsCeAk9WHgwEAjxAmGDVana3pwaw7vUmt4QR98P37gMiP8b",
  "key6": "4ZMHb51HHDTJLfPDLbaUjEyAsR3Z1RQzdnydxnzfyBdzPKCtUpUk53ytBd2Xa41JhA2h1zGV6FBeVAzBqLQpdUE1",
  "key7": "yz1u2AmokXZ7p5L2PbkjvdLScWuge9sJDNr1JQ5LGzghh6HBxt555CbcMLmdng6V9cofLTfRKNvmMFqFjDFBB4Q",
  "key8": "5TET88erVDDLo94zBq2AaAboMbvr6SyTmZV2srxA3Cgd7LnAfpYReiTka15SEikwRLf9sxxJV2Rur2rBDqNSYWEX",
  "key9": "5yVxKvmLbSfezhs7Qq9q6aSpVTDqxczgbCdeFGwPuj41ZcUnXznwYdu1NEecC89mRAPHXbtNp7vFu4krRhazoUdy",
  "key10": "4pSNmPBUJYcXZjgjoF3NUFDt8hw29QhMGtA5HgHZv1rUr87EwnnhVC4ugtCkNh34XYjthEUAsNbMnHGRKYvCWSaK",
  "key11": "NZKFrtECnaBSDVecFsPggwBm2QBvmD7szoD34YBJjiBfcbqvCt3e8g9RvNoLgnC6hexNENJq6zBZzeRgiD3CBca",
  "key12": "4G8C3fZQTRTg4iPy8dB3ZzZqDKhndhCfQX6c9EUvHFk3hCau92mo3K5S3J5cdUtUC4iumZSBEZLrDMPU9pv2waqb",
  "key13": "3XNYNgRVZCoY9tgWYrji6AK1oWegNWs7RcbXhZFkZhxRiXRTLgX6fG24hBNWk39poQiU67379EWhwacq84EX27ZX",
  "key14": "4Q8JW7sYRWaH1J18rjkYLAf3reQZhBGRRvz7vyhmXLSDc7mKH1Ej61WZsS7gmxM5kubv3y9i87ZTb8bovWU3wpzc",
  "key15": "5wutuKPVunEAHUyhskRNLkYhk7cSHWhRJW32erzQ9sPznVVb2WnHTuagoG1x6P8Furk1yVakga4biRQN7vcNgwaC",
  "key16": "5UikNwFiT8ZevHH8vJU9hoe3i4SMWS7WicibRupXUBokoSxFjkaBTvn5nQPP5mF7Hk4pbF6k6r2p1u9Xz2Mtr9hf",
  "key17": "fbVtytL6QqFhrn49z55nUT4afEeD6HRycAYEZESW2qNtZWnYQV3C3n4H3VNHHgAQZkdSpfo96vBAQQA9SbWmgBh",
  "key18": "4VdCQKbPgtk5U6kBqxVdRgGNo3QS7c7eP4ngEQwchcxRP8UD9V9xjMd3tJgts89rfEYVPTzYKZM6t1yufiKkLCTH",
  "key19": "3RLNux9UoQiZg4TbhM6476KM5TzCompkbr5rhBpkprqFWRfjt8cn8XthqnSzsZyczCiadMNLBuMFFhtqVLxzpQyq",
  "key20": "3xx76fyxvNE6pdPWBAzmMmQVqpyZeDYKNCBub3PqDkTP7PTcNeLWbvSvvBqaEa62wZyiukgZCVswkBBsEdvG5SPy",
  "key21": "Etx3rKqXjVz3rtvKZR7tGMccS3u9c3y1RVMwsX9MPNpyZbYVNABTnU5e8EPQhGHQP8g7kKoy9C7Yvs8TzcyBZ2p",
  "key22": "pwrnNxekd8sj55x7Bz5vTDC2QQbZfUqjc4W6Lbj9pMLBD95sQJbusTLhSe5DKEkTL3xmmf8umHK46d9VKojsJxw",
  "key23": "2pRU9VXpHvLVpgQaxtozPAkntzwmdRQm5MoYGkUE1hjBCpVa6S7CwdwUZqrDp7Z3VZvDkCbFdrGVBAuzSuArgrXM",
  "key24": "2M8UQxXPpYW7TLN2STxW2j77X4xoDrTj1ZKWttdtjZBx7UST1wEwUiAn5CJbAijrEsZdTXAaoGkm5MqFpPhL9oTE",
  "key25": "26DZKhPyTb8KDLLTvFoyRXfxbtTT3wxHo3hSvfXrYun3YXadLVgg1eysmdx1CNYrUswty8i8n5gXxC1tAjuXZmGs",
  "key26": "63zQAdm14kmqTrRJHhLRnxe7b2BSjmjjygXnJ9UEQd6kPRL9ZZ8wezGGFritederZjU7WB2vbxtRxMyPAp292mka",
  "key27": "28xCEwf5Ra6hDbztQre43NSsqC2x8TBkZL8nyaVzs9oB9JCAEjsa2YPdyVSqpvXVXjS7QMUTARWXE3VbMZZXKwzV",
  "key28": "jnXbRWkZ8pdhFz45HyWkr9A3eHrsrCdLzTUGteXm6XLYXpyyoU2nyqs3pqQzdJtnVLAaPvSeLMzmm2VCQBFABeR",
  "key29": "2qkkRNZ6v2nmJ26eQ5PUyyi6kQyAMoiuyGSkdmZr4qAVdPDpQ6RfhsL1kHYhi3GRLkA1QzvBJQiZ3PP8cTPMGibj",
  "key30": "4ECWek1jkbiDensHxjE9z5VmexwhWCaQvTFfgLZSi6jQZVHBXh5nqz819S5ZC9XLLyAQa38Us7Y8tGzP31TStScQ",
  "key31": "2qHaoUKdjZAZr1TqN1z5dHGDpMhKCr5UskGQVxkzdmZX1CvAZCmMdd12yd2JEbBRWP1DJh9LyzjUCZnzvbb6JDma",
  "key32": "2bG3kVNGnNygsPnxsMFmrBkR79hJ9NSW2GYko73bkZ49QS7tH8qeCrGUXG39wS7KejpHPoR4U5sWRKdpseQZEFWe",
  "key33": "3r5sPTfKkLgqUf6eSCV6zhR8ggYcFAfxpvsqeVE78HURtWN6TsQ6iz7f8UoGVokoQfRjJ4hQfMxRe8yHercitiPS",
  "key34": "4AbCxDavuzdqDav5u1PP7aquYPLw3f5TP4d4MBCMVxUnx3Ry2ebZZeXuqfruffB7vNNjjJyydRf6mzg9p4mNA4jg",
  "key35": "4s8iY5n3WSWF4Sg6sWAHrmjEmHmd4MvCaCXtEFA3FuxP4UEEsAg2K8rtrm9GvqZpTqVPyuEkTcKiDmbiiohXepio"
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
