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
    "4adRf4LvCetUN1wghjCN6Timqf8ioPYJTBCWJ9zxWACZtnxt2MyLp2i9rqjxphwai2ZtKKjL8QuSML9Nq8vYBWCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVUMf2PsPrtA5mw9wXXY9k4zgKxHaDvbY5mexU2a1MJ68RqiU1unVx1YEzHeoogSQCPxJE6vdCjLvBN8YW3RQje",
  "key1": "5fei6fVqdvzzGnibRu9YXYAumZZXTrVkjL5xWWdNbd2zn9nVgZqS24ZyxDQCcbTP8u34bsQn8GNK7gDkc5qgAXJH",
  "key2": "5nnEquunoKsndgVfS1qEbVadvyc7g6bUGpQu5v7HsBKF16UJUnerC7wANq7mRdyXqt8YWuzWrnZAY4rKjNmdN4aB",
  "key3": "YsybibZzbmxvm5v9C11hui9epoVwAsRcKXpWKkunmb3W6wCJNowU5EFmrU8ff6jJcq3Q2LgHtdwE1LXVgmAoTLx",
  "key4": "3oywFFjrHtmKKJKFaLu9YBcdhqSRDKX1couEEUkbmhjwZn6isD7LQxHBRPJ9cfN3H8GDnWALdb7TicSkdKhBVrGu",
  "key5": "3jGUfvFRiYEfmLBG3rghjR3hTn5rMMSz63dwTMVnbrn9saK7Rr3PQMTC1pJ1hRKwSk9GEaRVgKmzXr9WQoxgmRiu",
  "key6": "3Bato2wWk1vPiPbfofASB59v6VaybenngqS4Myzr2CpZqws6H12cTHieAiyD1KFfpRRngqhecQ74pez3ztDW4mda",
  "key7": "5dz9GdovhZQW4avDC7cX2xuDg8AxT9kqcTXT6XZoeYrgWLy6TgbXB5uJ9xJ6NwpkxsMpYquj2P2VF2NqFEZRBC7W",
  "key8": "3foa2j9kCt3EYmv8zLrWmJ1ftQaZqzfDZUmeiMk1PLwGctYWHaRkwNkapo5hf3bBeLXUXy7S9QZnJ3Cb58CDZ3Am",
  "key9": "3mRSoQgYjgHs6BD2iA1vESy1VUViySGDwDJKkzEvk4QDzhRDCdqMFdBxg7odrDEAgXSkCiGqPB5mvCDPo2eERQJy",
  "key10": "3Ff7DU2SS9pdBciHfqnHtCaR9Wt2WWnwQ8n41Y2UkpBzBqqXMquLtCgBGdyEzuLSF1XoSpv7WBkGPN1VcnVKnvnE",
  "key11": "54vAxS2M9KCK5E6tVyKKi6sWTkHHJQtY5uXGWJUkTDsfUTXy1VpsvxDDrdCtorM3wCmo7ayu1sj7hUfco2wRA8gB",
  "key12": "Kd6B9NeBjGRcYEncE5mjyVP1hzM85B8DDNP9JbmjuwQKUUL12fHVL4i5qevFeMBdjAuw1G7S8tkPinbzMVCnF2S",
  "key13": "3yUZrzibgDUedGdSrNTKDn6uwAnjhKopBuRSQbBwWKjnhSp6MmuaRoTRzfxu1QjNKNYToHC5TFuAn9AaY3vsrDRc",
  "key14": "JpLTATqwsMvvPpoG3ufexqcW4a6rF1jYJP5b9H6itSYQzrRHKSDTGWettdkq5UaSF5h6PiQHZY6fXibRvVg5kcN",
  "key15": "2EyUC6vL4jDhbhmztVabS4QH3LBTrpRKxYoBnB7Cip53Rrhh94zxfvSAtswvfQYX55Q3o48seQ9Ukd7UTSFbctN7",
  "key16": "PuBT3y9uuKpXt2TidhJKrGynoH66Yrkus5DWWhbyZGb2Q1rzKb7WRnTUtfENZTVpgEieZSaqwhnxfFeEiJHyHpY",
  "key17": "2Y8xTDeJKrDmE5JbEnnHCh43XTNppDh8bPMGszgwFsBgDt4ZT186g3BZHZRCmvqc3zQFDo8w3xT6qRjnZCBKffXz",
  "key18": "d6mujdZKkQiNhEAZCwWP8o15TjyEJ7otJji7agRcvF32iNEHosaWr57GVEPWSn4GAKXrnjBpzJ6KP4XU9JdtBFr",
  "key19": "5dkWuCfUwfmUJktriTErwLXpLedKPijkxJNETMzHZL9u7CLrbfWT1njBgx1HkAnGSFa931VbVyJKujynDTo5FUri",
  "key20": "4mPDR7k1bUpreyKuRcKzEHZQDqbS3Dw6HDMUpoYqdCotKyAufEPUgtmkKw4UBQVqanomXUqePJwjJb977A4fMgtn",
  "key21": "28yUESvwHqeAYtQnqnWotKSugC6xoo7gd9szJkurQgtw6ByUD6d8qqC1CzHHCfFveLX7QP2rG4RzU5eoMDuZg8nh",
  "key22": "3Hd9FtBGqQDuCfymrCoS8G9JAsgafMJ7qKvpb6P8e8KyZdZ48hgQsux5AR8xHPq2T8ZwKb9f2VS4gwnPrjdyjgFm",
  "key23": "33kARtjrZKhPYT3cXSzkoc7xvc5AA7Mnn5vc7HAAYP1a9fDiTtWfhNvaK31BvrJ6ohrj2igNEJVxniexKk5cTCQ",
  "key24": "5jD8NPFMj1HHEmQBHMEo4ddc4GviXAtAw27bGLg3xCn7DcpntGMSKVJcZqyjdgKbsw2Pmdj1o1UJUBvkDpkQdW2b",
  "key25": "4yZYo19KcghPtPHsAA5VzBSuzuBLsDfC2QhZg2F6Sibva56aLtAt1pKc2ypUmsbGg1aymmExxcZ4PpfZ7xiamZVv",
  "key26": "2QFuW2c11WaiahteSUBEe6n6LHHpmao9UFTFUBPeZJ3vULUQFijSjZAVDkxQ72EMEZ7oWhs2oz2uoAyYFPkXc3kx",
  "key27": "4Byw4DjKBEoMmEsSBZSbmmhPSvVnuE8rS586ZmBcDd4JQ5i9e8xV2vHEaZxYCVP7GeRmW21X93jdryPVCfY9JXDp",
  "key28": "5MeXFdExcuVgw1QFQf2Dgv88vs6AWohx5852acMoWqTRMTP7b9i7F4boghfvr2nNrRxjxyYoBiAgWNGGBmn2Tk1c",
  "key29": "5nCKtysUCrueptzK6ww4Zxy8G1HQQruQZcBF4GwuFJGK8G7yzYkmhSYA9knw73jAt9YiPhXYPuF83UXpyEyPXr2d",
  "key30": "2LJ4Tz4mvU3p9iB5emvKLo4fK9xPSDqXrBiFjwTU9CrR4CvF8Fg544dEZUL9eUWZYsfeNDbscmPugwR7DwUP4Mk7",
  "key31": "5rPy99xbZkCZUXpuk4jgrmXnWmuAuhuHrSr2UgJtEus4kPhW7ti1HZMFEGSvZ62PEpTTkCnFX6XdtY6CNdZCMjn",
  "key32": "5cnHmhFvuLyJC1MWXvjzgNZWif9GvCgtkUDXjasDNBsLqzqzmrXZsmnf4Cv4gMtDqgRKFWbb8xvtYs3ZVpyHK1ws"
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
