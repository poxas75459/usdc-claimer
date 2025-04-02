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
    "Jw1VDmtDFU9rG7dgqspgLz3BTsrEv6toXihXE4p2oyrSwvF4yaLCzovDFGm5nqku5cFAzhpbuM9e2J7tzmyeqxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgYf4btkFSFhGfi5EX4KqZjKZ7NMacdsoUV1s2QVxpK6zCHJXP4dc1pMMgrwvKzwKX7GmU9qdrUzokLrwjYNTLF",
  "key1": "2VJzCYixxtJD5k9Ska3AggYkRmKTEdsFAMJ3FHrs1dVri3gsrnZE6FQmRwVkHUXMSWKeVpg7sBDGXyXpa8M9How3",
  "key2": "67TCwagR1f8ZLRKjToRZa3GAdpp8iQDbUVT4gj8V2EVNpgkCoFZyBZKR5WNe5wtKK8NvvJ5jRHKgKzEPUx74G4Z8",
  "key3": "2dsxUjeuYcqB5z95G48HMrTBMo1Kd92evq2X9tYmuz1Whn4P8zpk5PUXBirPAhkjtoupYBbkmGwQ2WeFX4UqgYai",
  "key4": "2RThEC47E4s8q6j1MmWJ3w8EMbU8EUi6iKzFGbjsJS2UzhzVTcKvPx4Gby2zuLpA6NEHBH8SC2krxsopauqJ26uJ",
  "key5": "48omTs3m8T8Q9MbuRrNQXbA82NjBz99dAZTa2uee8xV1FB83e1geMerpe6P28sKVcgNABJcXSRBSMnci4XSo7q6w",
  "key6": "MiFVZzTTHrFASMtkBtwo45uQFicS3vLxBiKM2MbTMi7kCEwPoD8Gq735TCvFXG2zDHFJZHbocaNfRNF6moLKzT8",
  "key7": "4829ziZEH5rjnD7VSCx1aoLxLBnb2tLxG5ru2Ytq2N7f3vAkYr7WF3VHLRajrhuytXt9ZR25s2ojBmCJGaqo2wUG",
  "key8": "5afELjGi7bdYfzii4AWeVWyHD9yXX2b68FbBW7ME33fzS5CEo81bUv1kyAqfMA613Wr4gqUYwnk8KTbkkcx3bQ8V",
  "key9": "5QwTThtu1LdDtQkny6QNSWovmAVDUntJ8PgRs763RjhSen7kr96cZjRqvg71Z5PgcVnmYXiwgkguqpFwV9W5sDaX",
  "key10": "4Z83Kg7p68F7M2Emx1VbzUFCtF1gfXwLnWYzSYnzm89KDVDCzDhGW9CVZeaXeRfto2SvNTrmf2ZfY17mq17ffpmY",
  "key11": "46HfKxCZEciJGeqJ1z8GmEDuDzU8i7pc28wZKoWrsAa4eHjZPS2hrQCTeVYxBUjqn4m7ycWXMH6PqRFivk7pyVXf",
  "key12": "53SFPBDDqRWKZkqhMErMtgMA3E26Zinv7QntL7jE6fXWbu7eRo1M1gejv2xyF9nPWoY25aXSEgCgF3CcC2NeCjUN",
  "key13": "iZUpQ2PeAvSXrx5dS3exep9HWDjj83XAaz4GhDnRYHzjjPLs6bkDkfLNbprvvab3NMjg5bQBJwKGLnVqH449vwn",
  "key14": "4ZENVCWS3VfFpMGYPykQLgtQj61KaREuQNT5AC2fyeQUR6wZ3UiZGL13tbkuKyQH7DuZsiwJuwP4TAYpFkUEvhki",
  "key15": "UAoMUqZWvsuRWGmZnFfbZo7xL9CR9pdDQVtMntNBm2zrc4KheCPgx1Uk2xfavYLatsY2XCbdLKpdqoCg43rgZJh",
  "key16": "3LGfFsPvJok3mBCj3hvcDrz9yVp1Gh56cv5YdLqmQ6BA8MVsM8UPCmXaj4QS6KRfvhTw35meGQBggJaBbApv24ue",
  "key17": "5mSE6NbYy5zWRYaTXE8XpdfodUezEgX8aGvKpudE2Tfsca836BVWvJac8hrQNgAdv6B25mNyMC4ta1Db8uxvLmg4",
  "key18": "5wZpadRQ595Lw6Viuc9zXcFcXwEaQmq72kiUw6Lni3GATSDZnpSryzuHf9fpEsDvoVWRzvhwn4e5iJn3arv1TuwU",
  "key19": "5V7nAL9dAQetf29tadDGs7VF3RdByXLxTn67ECZvBfudRp5vkPQLTrj2uLYfpoxohH8ep7mBHRQLoabQrp7K67uK",
  "key20": "3HtdCDrStezQUN1QPzoitsQqmAa1XT8WirLu74hFramUF8HTVAJCAiHsG8rpRUeSGqzc8MVW1YGqwpZPNjKiLTai",
  "key21": "3vAV8xzwagH1mpW1a8ni4vBsKTbgNJwYST7gj6bWvjYPb3BbYbUiVVXm3i6juKNWtLiuygfRAKMxTg5DYzmKLWPU",
  "key22": "4G3t71VPec9agyuqU8DXbY5ziuDimBMhNwSae52mWwbgUdWjS8fbfo4kvNxu6hbWgTsgz5mvx5R1nPjN1xP1rH2L",
  "key23": "2gW4SH4DTPZAGqYudVY145mpUVXZSezuaV5X7apJVrG91qeXJgEHpGSDyHm1WcAuBEzNU7Z56nj15W58N4QfYDsB",
  "key24": "64aCW9g4foKUhDHp4Y1FVgJewPaW8J6kzHX6q4oUkpsXGWzBoRYBUCym4jbLk3viGBh197zrWiju4bs7jboGAcQB",
  "key25": "3SKPmistF4UhBQNjmrPZ817Eez9txqo2ArA7j2vXQsw1PPBeBkKhqon1XBM8jvPUJaKkb9LHPZaPQQKdRAFrZj2k",
  "key26": "4NcHaWhAkWd1dvfHQNfasPDTcDT5vVoMMCTV7MbXbfA8Nv3668eYqaJTRf816xiTDEvqg9u5xVVn6k7QdQvpzJN3",
  "key27": "2sELf6BkitaLBT5gTXB8RGq9TT99153fKtTaJ1cYeDrET5tjzT934mtdeVF9HLbtZfGVHcLtZhCEmnHte2B8snWG",
  "key28": "4JLk1rBsjYjgzPR2PmvpjzfZXm4hWTVKHmszvuqqohTJ11zdGGpoNwzu1YT3gztYp8L1GiCvrq5kNBqGZfPiRusm",
  "key29": "2uus8uKB76Ethm9pCzK86bYVqFszZU3KN9ZF49ppcxYboHAHWXfQk8KNfWVmSt88CfrzH7FpQDJysBYGqhNStQrA"
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
