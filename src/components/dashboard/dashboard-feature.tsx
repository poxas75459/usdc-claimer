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
    "2yGJsLvDerExFmgwKoNbZV6NwqwpT2WEvS5WkGGTFsRbvsgN9BKFpiaad6rKFVqhW4PEn751UeVBxr3ZVCq8DhDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tf5vCBuYFypVdRymzC6C6yC8Jygsqs2vqkFBETsPWGYmFbRJ7PJtCqfHcqsKtfBcpM82EbfFqu2vHPghWteeQy3",
  "key1": "5ZPHF9EZu6WSmxjf5qRDYN4S8bhUgzqJSvaaUF2p4S2416LYWTuogajhtF2mYtyUb8Hr9yMBmYweDGdZCySFgaiV",
  "key2": "49Dhn9zwdHiHhezWCoYSbm8Ym59mkKLGE6dbCg9Hug9fkJ8NxeUgnDCceSoqqkP88FfPpcQoy9LzbzXWyRkpYNka",
  "key3": "4KeihJGg23yHKhEb6Nma7y2p7JXRffNwojN4htZx8JJoiRHhraVsom2gDkJiHySUjgzqcQUy6S7coJYxAGQQjK4N",
  "key4": "4oiuivuoQ4EjDKyMDe5PrN4fNtjEvSnbZLd39JnGZmZaGZmmGGR7YfvMwVhJ6ef5UGR2JJSAjBBoBEJ2AoVjkyQP",
  "key5": "4QRKecPCoh245WbuLRVfFtZViehGaW2cNi7gG4cGuKqwk3X9qUc27CtdxoGWZZjFZfViBD4o2u7CrgEPk8YnQeo1",
  "key6": "5Aduri3NEjfgxoWTA6iNX5h7tDxcueCWE1H3g7tuxCDAHJgMd1WVwfRmkhzqrrudA7CSCvp5jVishTydhL5L2cxX",
  "key7": "62DGgaTpNhrfXrRcE78mwdBNu19PR91t6AuiuGcLMHJUzH2hjxKQWMi9ePiyM4PjM4yEpCwaoh5AWw3gvt2RhzV4",
  "key8": "4fP7ULxyG1r9jnFnCECi6xxNEfm2ZB1kAGoKB7bsxftoarYZAMZ1zHmSbQG3W9K7bQZbk1ALC1vRde7f2mQkEMiQ",
  "key9": "2zgSprmtbwbVUe5vosmzqJPaRufBfRVWgx9LwDyMcqbfva5GxSEHUncUUukAdkPQjcEEqYeSazbb4FAu1xT8eu8v",
  "key10": "QaFx1W5m1vmUjvzZ7WYdJusKDKYDVjDSbiTdChrFd7GUSKf7WCxMMQge8fQ5CRgfGX7GSLSamUTNnDwKPmHdaWn",
  "key11": "iYj6K5iU1xxcb1hCztotYWzsvgu3UQPRfmB6YHCByQ1qwx5j1ucJK4cJy7zqcbHrFgQoafoAkUNCNcd8xaYfhXV",
  "key12": "2uubEPj7HfPRqoF5os2s2Yr9hvzzETeEN5X9R2SxpUFkBVnBb8tQXcxBe98iva8gmt9eFXxqeaVy8aqFYQ3mKUaT",
  "key13": "2Cmjiu59e3ZCscdwKw9L3XXAZ98jzqQJjLxiP5Tasp7UzpiV6i2iJi2MackMWqtDZX79UFVT1TRNZCTg58UpWGFe",
  "key14": "4evRP6c2GG1sLzABHWJV9tb37fGXu4KzkT4fe2EYZzmj9br2ve5UTJyK1v9Rih4wE44vPPN6aJD9gCmhsACLPg3c",
  "key15": "48NsM7EaFzBtGJY2s6m7jBVpEExXP5MxUswN7Dho2dv2ZiHaq3KxXdVYK5gJK9GjNz13tWUrDdYjaKhtXYMHMM3E",
  "key16": "u2xkqdcenPssALo6UqTMvR1v5XiyL1rvRBc4VRnxxYnKq4rwhFj6uGHkNo1BzgSDByKTedHRdPrusPxWyK3eZvt",
  "key17": "3CMxEpSfVsrMG2UrW3m6o7uiKzgpHMnBB66Mww38eYYYK3xbasjfCWMaFsoh64Xu72FLsnJaToPi1QgfRmLEwY77",
  "key18": "2o9TUNhbPN2iYc6FyZTAcs26mshauefPW21R2pGrq2qawdubz52Podkzdry5thvDKpQkqxzF9b1sKnnmP1U5L2Yr",
  "key19": "5yY5hXtYk8HrbQXofHiepQhA6H2qg37Fi8t5xU4Q5sdoasPrH3D9gf4ADzU87kxPwHAPvg6sZPWNMTtRhrWRxYZR",
  "key20": "5tGjUxJ2eifp9WWjShKH3rhuPDwE8vkaK9KC2BbrYvjKREeXBfsBbje5V1UMayenuu6y6jbvvcZbZWzU1t3SYHkA",
  "key21": "qze5DqH8eUKpo8QphhF17uPTbFPzsdrSBjA6w2Lm12mQo7tmVtYpuT12mRvngSq4TZWUwuuhQyTB31pKph61TvR",
  "key22": "4DzSLNPqzXQHnBsu5uTR6LXtJ31V1Y1MnkyiWVsyNi21Km8ZQvB8aZcr8pYSAUWBHNvtHCuuqESTJzHpkJQ37Yqx",
  "key23": "JPJvMa1eNWPxyQ2KzSE3QsJbptjjshoC4wkijy7iiY6SPpN86dKs6viePNG78t8ePZFWn6iTtD7jUETBcVsdwUf",
  "key24": "3X2VYph6xCxPb7z2eH7QK7WhNarsEBN7c9fZUjzRpm7NMeQjmw3gqyZpMxhydbLLFgAt7qnrz7xWUy9uu4n9ywaU",
  "key25": "4oQcjE5zvfMVD9WTZkjaYTsg389FZSnWsv3oRjFxG5HESvFXmEdjSJQDobe2XaSnCqd86QCBiLqv4p3Dr2xjFYYV",
  "key26": "5XMEmXKzKdMWjAo5pxQtiRmZcHNGG9t3MvyPJixVCu3QYgG2xWUvTXyXN2t2hmDAPsQhUpWAxFuthd9Yki7ALriF",
  "key27": "3XbW4TnkoqLgNG1K97sF49HvMBwgvftrW6dA9wTieGg63X4ZnbmYJq62XzxmCpjaze8XxdFwtoMv38FuDn2qU9Xo",
  "key28": "3UAwho2gbg6nKbMPsfFWedFLW5DWourY2mNNvuHMzKY2D2PrioZVLrMmPSfnWBKNuqAQHcFZECgfo4ymocYmafEe",
  "key29": "cHnurvAy9EZJGUyEyzAYKPCN6jfu2cZauYUQimBXud9MVEuFKk5YvqmnK429pjoq3YSENzHmdb4SY7DPUixMZru"
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
