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
    "4i9BpmQ5Tefy2dKQ9mGNsWXct5naGLy4JaNCQ9rEdREwyvgVDeBbEc9Dinf5uG47Sn27Fx4PCTeYyFdSKHirAhVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAvWuWWe98dxyTpawa7bC4WX1j8X9NPerJ5esVfnQCa8QAQcbyPxD1RPLWeHGo923CDXkDdt2L81UBjKjva5vvZ",
  "key1": "4dF41NY3kkEJ6eMPokWc9W7uf9LjVa14rKbXxzUUqPSSQtCDy7k7xreZHT1A4vcWffjpjRy3bbDg7PncUPL8dFzR",
  "key2": "2iMaLy6dAAQPyhof14Zx6hsMXPF8QcKQHEr2YzxYFitiumhrowpRPSZiyqG18QEb9eGYCwEsoVvtvNaHvsRUUYXk",
  "key3": "2eKXidMjhJ5Bu5fvfbYv5JSNbUiJQbrs5x7wBMkbnUC5afwy4APAg6yLQcUqmyjoKFCqugMYVrAVZV3U2bDrsGxV",
  "key4": "3mkYvUeurvxwAJ8rVzPiQVx2cZdibyFV4Vu9VLkSZJCDnRZ9fUrDskKAsdDX6jbno7yRfeHxzfwSFgjNBkLosSuB",
  "key5": "q7thU1sUmAU28uJJLRYFoM34Wu3MqP2YbV7FEmHPQMVGvkjRWE62G51b63YB6Gf8cuRRTHGvvNB7x81e3rRXrR1",
  "key6": "3GS15CKxkY5v9zEaWiDTsmENHgQUgzyL6KKyzzC7beUiaUBBH8DLNgohqpZGBxcMtbWwQxhTntij4N9TVAjogmAp",
  "key7": "4JTeHeBdwCHb26B6MgQhwJkLnet4pQkaTKFb3agC2LZV8te2snE8p2b84R6wMS2tPh19z58Q8HYPtM29pQV9CTuQ",
  "key8": "gurhpJkKWgVNmkfBjmK41q2kgEw3XHd6UUhS8NxPTkUeCxB8bZuf2unHe5uP7L9o61unoSyPf4BHob476RvhLTn",
  "key9": "3m14dmqjBwn4ZdxYnbhMt7FwytVgkoKipUmVaHydSiGXKheeSYfx62KgTyEFtRoXGYbhQdvM4cZyffJXGc5pHysd",
  "key10": "49WMxsRevyKN3oG2DpQnn8484mAKMGgj4cFAz366EW1f1AWRsDdf286NyoeRSHHXz27Ph8ooZ71EpEWLckArawVr",
  "key11": "2BAwX7kpkdBWn6oAryGD4Jstniihbwz3hQhix2B4LRah6hvU1efnZYFC6FTPWyiTr44YD3xNUtBnr3oz8x4FEUbQ",
  "key12": "2fKwqm3vMxZ7dPsEVJeXzvdqjMkSBKbD5TmBtYKHPoSuHd9NrvhRRTHgtkxGdapEwB2Nkt8kXu6HCmcdVEv9jGn",
  "key13": "57LcE1gfVe48DWhoeBuKbFzNNPffBsAX5pTFqtg6XBYqBSf6qH4re3gSMRsa2gDeqXijJLiZP3VRY9YKCEoR3EbL",
  "key14": "2D4Toyd561UoxGUrhfxVU1ZfJgApqE8DRcpC76huYtWjgFJkXpaaaM3niRWFyQmNoUfAGHNWxAsrK6eB9TT4gKKi",
  "key15": "3GD9aGq96Qz1kAxKLQQJiFD3xuYVr1JMxWhSUsaA73PReihUedVcNxWoZjQqiYDMxpR28Dc3EV1RfPu4xwoXu1u6",
  "key16": "jyCN4Wmo8XgFVu5G3ZYTQdhnvZGW8V6GwuzATYgUKZ6sMGLi1a48q8pLsqGwS9BvpU7k71rKNuqc64WqimhHsbr",
  "key17": "3KLcgv48PmUBExAMN58kCkMR5ztDeh3jg6dXV4LkkAD8PhmNdA2Z4jY19BLcxWrysDSErThZwqoP5nM1KPtb3MHL",
  "key18": "48jUJ8hWDRRQmZ3v1Ukdmg5DDPpcxxHYgzUKFQRReE5nuJtwVeBsWZiUTda8ffKskVbvaTeSSo1AiAS6VxUFAZ2K",
  "key19": "568zEpFnasn8mW3t5HCJebRa8yjMLQM7Ej9S18tU5TwjwhrWTHYPCYosmRUX7hrcBGVBZ2SvYFe82Pe7aYgcKaDq",
  "key20": "3393bqwDqtF4CrirQHfpz6Bgtj5zwW8PwiYz1ti5NPhdBsUbATn9DUeyTPJuYKChmzQUqsht11i9YL6bVyueNPEB",
  "key21": "5ptjV96dhKviWy4zPF28e6yKMgrpRpKmVjrxfWPScHQwJPtfjuZQX7616QiZW4Bzm5iiDHiXM9xP5dLmFEwFvp1L",
  "key22": "sYawvfvR9mXQGmWQvvqjRRGFGiwap5VqYEEVkKn9tBzqGR7AvuZ4QsmBfBzq4EmbfgVQWb4JcmoiyVH3JKzoM74",
  "key23": "3Np8cjG9xWH4tfkAHgGnQ4qssPS1JwDGhQbY5xPyFpRcAXpqtTuGUVpgYAiyLFbrMzmxkXWrmSA2EvCLRLDZyEPz",
  "key24": "2i4WCDwDHymemRMoWe2G43MtgYgMGmudgXynnLk85tmp5rMpm9EMtjKw9AbvMsx4E36hqXjkgurFrNeakGHr9uyo",
  "key25": "4L1fFV8qRaRvPSRuEj9krsFEUANpFgCdoa3QmEuZqWzhX8bY2cqTgqnQSD3t4VYxtWPi5VVDhQiXtzTDcDRsMfW2"
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
