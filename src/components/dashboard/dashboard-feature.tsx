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
    "2Ed9JpHvvyBsRjvriV5Y5BWw9B3C29gN2yy1Zw4SZdY2ydG687HCETVxZAwUSBki14wsyURqod8ypXnwrC8eRAwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eQzRX4hdik9m7zwbPxHqNdZUJ1bx4nr1bXQTcQmxivaZNxRv6bwV1qAHiQBiE17H6KtHnjFFEi53GPiy2LtT2Pf",
  "key1": "2BjYs9PULRum37xFwEZXe2wLSm6zfKfp8H2HpcMVQNqA8ycLLd8qucUkx4o6obzyA4riWGtrKgtoQSQbCwCYjNE8",
  "key2": "4eb1XvMNJqJzT5MPsXFCBhmqMzJGjG4M2SkqsXzTqdq7mB9y4VwCBX7MpY5Fw1E1hEru18wTSf5cgdJXHB2TYDLd",
  "key3": "4Z2pSdUdqarosyfsd1FtK5a32Dxk23AjQZ1RayzFrkCMKLn9m686p3BhCKYGQpnRf5VDNeGcKRTZBhxht4rT74R5",
  "key4": "5vJfEACF2KwYTSaPcHbNdk6A86bZ3Pi1U7qM9CG27YfNLYSogLFesUE27uDbBVVbJeuLWKC2SY5tb6PaZ2L1eNBB",
  "key5": "4Ro2Ho4xUGdAT1eZ9twj8FvJqohDyUYAYR6naeKHqC9C3qJMDd6CEEdE5db8SvMUUGfW4jnBjuQrgoZgjXUQ2yek",
  "key6": "5G1dwGLifd7Jiw45Svw86UunWwmX2ydyPaoKTf8C1xsATA6ggfUmvVhohzugKa8X8p1qjotDpZ2Eh3eU7tK4NFVJ",
  "key7": "3xHkxCWFonsebmHNUVbNdW73DDC45o81NpYA84PQbpghNTvrgG2kmo9iD23KhUKE2D5iSNdQCMsbMwmsxPtB6t7Z",
  "key8": "4udTpiAzNkc8vJoZFF6kJ5ck8cMQyv85qb5CALVcLBtPfFfrAcy8dB8Szo5spZCyJSKiUuin8wyGQGgGXERXfZhr",
  "key9": "4PqKS4xrs1nBc1pwvwkr4Wo5Hvbdobe2yM5aMUy8JoK5zCEt1jxk33JcbsUNyt71AR7mpNzpmihhcDffz5hf61GV",
  "key10": "5RWNB18eR97z91yCD5kFyBasnut9tQvzJwg4122CwBaQDWP2ypkDsiX1w74ToVTzBKmGpkTcK4eQiMER4VcCBtFn",
  "key11": "3JY2Jx7mnEXncyXVW732DQ2s2H8YideQ4j86tG6gXaMeEvercwkmDJ6rmPbN9yhYWkThTuJRvaNZJzKWc6Amwmy6",
  "key12": "2oc7witPQ5MwYhZX73eGi7mcuQueCfzMpmArpZ766ifszd8kXZ9qCR6QdCfi7DJiCf5vHWdY3f78sM2NP69ReSNR",
  "key13": "2mPQJnumFyRuPw9bwZaSTXgoyLADKXzUdL2WjaC9jm9zwNJntFWWD3dbAsE7sCBXH5Ut6P2PG31P1Zvxh4zaMzvE",
  "key14": "4Np1urH7u5yXso2t7m7zma4wyQxo5owYE2g1kFMrYYKewcwC44ECoUoxpW7EyZLKQWby2zNuKAwPMhATDUi3qX5B",
  "key15": "2rF97QHVZvz57jDxrs2TAze7vx6TgBUEofF9m5sFwptQgMAuUrQNd7aRHzMqKn4NWxV2mzKpbDcD642KKwyV7nj4",
  "key16": "2u3zUau9LxCR39ExermnvNpfPX7d9kdJ8HJ5d8bYSqeJdADSzEBpMy1zyZqixUMkCDC7hsDhBxt7qcH7x4iDetqj",
  "key17": "NRyiWmNA9oT6VAnP8TnymUEmcfPhtJHnuCfRgUnfCvkbnFCQPSEs24ETKVCqR7VJRzXoN5uyrkWsQgSx8Nt5gEd",
  "key18": "Ye8Xsz1BezmGHMpcFugpZT8iGbZt6tdxiHA4tgTNzJ3Dh4ZBWzwQEWwmSF2F54iWM9UDj1sDFSv8qBVA1VTqb9N",
  "key19": "5jUALQWMWU5YhAZhcVaP81YDpJeswTWuLZ528av5TWokobCnbAqUhjD5PnhNjuufFdTH1ExeXBthgnjo3r3YA4LX",
  "key20": "5Jc7jpHHWAQ7BR5mQMPzMSqN9MGg5PmCtKWzgK7wvFbzw4SvvcUqyB6QLzfmjwG1FJSpf8avutu5RH54VtFJWMRF",
  "key21": "4abdLrQMhihHA62APsnmsK5QREkd6Jt3jSktVfbqoQbbXyZ2NshQkYuxzw183Htfgf3C7WCRmQvYZLgwDgJGH9cf",
  "key22": "4eRmKsDGZnRftCgqeivXprF5omKqGyps1Jw2skdotZcVN2EhjAgAzx2AT1F2sbSFNjGRz91yY9D7wzwDp7jt6eEG",
  "key23": "5ocHXpxizCX6GBBfsxczmW5febW4cxEwhAmo2ZUeBsPpRdSrvPFmfJwP4mnDDeHuyJLzuD1fm9fEQ6Kj2SAkhhhB",
  "key24": "2dAkfurjPsKz4QehAS3GYGKj9EutAHFbr7EFJTrWiizxDhgud8bKJwXMG35pY8qD4DUK3iG59fN1ftDeRHBBUCC1",
  "key25": "3NYR9KXFD8KiDawmkeka8hGn47J4fdBhrZ8cMXZoPABoyo5NiRK4TjXLcUE31QsHmnkQ6BKAW8j9sUF9gV12m5uv",
  "key26": "2Gfc1J1LBXpFDJSzxom5GxPkxCz6dyry4Th3g9EKA8QdYMk7sCaSgNpm2hT8rjJ61hregAoFu31LvP2foDEufKST",
  "key27": "5KdS6LNTYoLQFXVwiTnpRxjum98d24m6ytog69LT8iPJUCTKvA4vqB5dHhm8n7g8yR7EifNaTMvqZTgMkUiQiMau",
  "key28": "2atcafNRGSbeFGNmiz13RtfGDyHd8URadKp6USWwj15zK7cZQ4FAkjXARFcyQntCvj2tX1hXRopaTNaVCv79ysTc"
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
