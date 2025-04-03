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
    "csddQdUuh7eFJiNcQTPPrq32ToxZQNjNnD9fvgotwwz8NhtYF1kVCRBKYmGe5cqpQoZ4AApedefcn4BBGZcH6Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E2VJy5juhJVuqGviipdX3GfSbnGBEciU9WvpaupbLC7cNPsPA9rgoCPLS2bawHtGMX3D3h6ALyazFEBEkTupcJz",
  "key1": "2vrh2bczBJaHikmGdhipJQ5vMk9ivW17Ycw5o5zTb2rXmWM6je1f7t6to2sXnQNSPraypRX9Moy3gfPfGDRoY9ZU",
  "key2": "56dCjAqKtqMzGceRQhspiALsqoNQLBz58MVxdHe6RG4fU3oyWhxaM1BX15v6eANHDcba43NbwxmTDEsK9KSb3995",
  "key3": "3BGcUHJHsA6TZsgnhvtxDzSyVG4ppaYzVqsS8zua77SNbnSzRDq8QrNq79jcRDoMRC5HcsB4rxYWAmeCTDY27DgP",
  "key4": "2HULcJpaGFw6sC32Qr61mKgsgAg3eFfKMvPFZaG4Bvqv6G2GeCcUwCifgBk8GAPYKRVCsMgxctLnN5cnjDCQjz82",
  "key5": "5jS6DQPMGmEkAoEiHkyp4deENrCxggLAf5kC9nogH1brLVV3uufwTwt6hWHPtPFrKtPkiojCwXRhxib9eUR4Qkez",
  "key6": "4s3AuF6is5sVYMRerqPnNhXt66WK6kL2y52qJW8usz7L5j2Zy2CjCFnohid8Xo9JazvU9eSmnr61qm6WcZ11ied7",
  "key7": "3mJfX5x8PLXUKzZhvRtMp4DtRHWZ6DtdyytPBaLMXyw15eizK6SD9yykYWBcfhxe11yGvaYP78FU1oLyZAve1mLX",
  "key8": "65dSBa7ziFi35iGUt31Dmjb7MKdfmYs2zme7P2sj965MaZgJgJApQJb6TvRZ8uNsfZExCk2XWQ5qeZ66AnjVzCDP",
  "key9": "2wXoK2b4TjY9CHeFDCFmhVC6p6AGe4WeV9cs6qrw6wWsdccBy5Czzd9GRqLbVYMyMdFWBHRJWxZ6nRV6s4YV3W5B",
  "key10": "35PCv7vmGJJYdRaahsCQRwwqkqK7kr25auaYsK3QsV2hLD8tJkJK9MnZeV2BGrpytucEswzkf5eCbXsguaCvhBQa",
  "key11": "44TgoMaGCGm4b1gQBVSGYMUCkbzeXZiprZ2atqT2TMTadj2SrgSji5R4499LzEDuP6H3iTajhVyJFNDc6PnY6ZrC",
  "key12": "648SwAo8yzj3VL8LkM2JPAPHQY3X3c8Uiqygii9SM5oFG75A62h6gGjaLb9owVEiLYUZbyDcD2yy9tqGBoUsJYQm",
  "key13": "5kcygCRRxvurMP3QacR8XGB3yQDeN63zo8h8isHq5DZ2GQnJr2gZQzFEGdpmKEqZpaQoPBv2b7uf3qJEMwZ6CUs2",
  "key14": "4z5vmEu5pBJEy5M6NKgdY2KodSUoV5PqvydMQiQK17NxzQoYYVugZU6bneDXXJ4f9Haj4vdikK9W2jB7HwMFoSL7",
  "key15": "RTrgxJCoJDMVCUwojEUiFEFZzADoSbkMawput5fyBXrdAoY6wheNtu1dkATy93c5nYGjdUsKoqyr4H58LJxuEa2",
  "key16": "2J75UAaPaGFYmr6GRvvvb7UwaPZJhReDfDZwaMt2FcYoXyogLpSB7UFqPBpYJnAQ3Nn3jx6BQtu16XL6uagR6acS",
  "key17": "5z54gpjHfMLxgk61iGuocX3nn6TDvQqZjKG8sYYT4WRfGtF7jigUAVbFhdVCT9662UmxDPvFhJFfYGPnCqycEZEG",
  "key18": "3uL9X3JKU3X84GSJBQRuGKkGB2RKbosBjM86xcbn9sRLPG87gcR34vEBSPfssJKuEFRrGLA5aSagnLRBug5ufb1e",
  "key19": "5oBST5n5h8H5oKZeqveaFTkywKo3245TCLFqiq9wF5MX6T859UMfDLvx2g9n1NbGxrTTJjsbcVT8dAqLzsJvL29P",
  "key20": "22RyEVZ2VpRtzzqZrjYbqFuJCAsszyZ2pkrZHge7JzdG4NjLFjoFgkSYJKkJs2UofmVHafNQ6ietM4nZzytKzshK",
  "key21": "5bfchoaBqZvwBuT2gQzaFeMsvKUsFACZJvEMLKevC5yd3wW8XjyDFyRsGHKJXtwTh1QbdxqSqwDug36st6wZL7xx",
  "key22": "3VVVpoM4Nse82BZioerjQiwigjx4mWwmihxWEPAVHkP8m3ZnKJbFSLFt9LoCTeT4THJyTYS2KQvBy4DaJkYuvATH",
  "key23": "5KoGbm9HNmhvfSLv58fZTwSUVi94pvB6MdxMQqMLP6kPaQrnAHj4cuNRDc7CwpficnAo6oRoFkBH4mkdWEkofJEX",
  "key24": "3QDQuXesw29hRtGvjQfJYuvqSZ3Q6x6SB9mYACWMe5dDxwASVagBYpjJZftWicGqXB37SJ6SDqKYrvWxqKenX9YZ",
  "key25": "57gXN1y7Qk4VNPFEMZf7zFo2V6zbBWoLgSy6DAWkevmrjKqEfj79VX92ahvcBeAZtQMe5uErrnKzRNq7Ek9R9QQt",
  "key26": "NLyCEwAYzbpPdVu1NEVo5sCKiFLrzqQekYdB6GVAzaiVrK1kcGZxsQUp8sEZYgJ1KW9bH5qAhMt2Rmc7py78Hy3",
  "key27": "5cHxnqb941nZhv5zYPoJnJ3daemTS8RmyrLVpWHknkj7aEf95yTxezSqZdfPGs4N9GX2VFmf21rB8p5XLKu4snx",
  "key28": "4AMkwUXtiBZ32JLnDU4GW1bmYFvqJ1HiDbD3g2nsxjrDczKKvjjApycf5AmEhJSjjYsQ4bLywjE2XJwHcvVPXiRj",
  "key29": "SFcgLnSqPEuUzPNHt5LBTHeYtKWZ8vcxKAzRSBkeJuZ92PcrpWs5pugJBmkWz3r8gX9MF6yYTpBLJxEtrtY63rN",
  "key30": "3ENnJ34vdjZ4XzFFdHnrqnPx3c4WbWPKhZjFHQUwJoP5hVDhfZMWsoFXWNvDBgZwFqSn5X2tJWpVDw7DZYovuMtb"
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
