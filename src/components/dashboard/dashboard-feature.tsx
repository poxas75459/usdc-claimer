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
    "4dkoTYvMQAMLo7eE7rr8JDJPvNpVe7wLqfEA7HwSdxpUxBSYHJCRZQkJ6cineHgWG325QU3n5cUbgxajLznWCvC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dLmTFciQfrfWFQUcHTdJ47vCfXoXZAcfo6DjAG41RqxPMG7NusCAxLcnuuUwBr24cqapg4xjiDqGidonPyJYU5Y",
  "key1": "5ShDPQBNUsCfhTf5Fw87LL6oZAsBwiyMdPmi3Ju4gjs6vZqNYpeDkoVjBtK1Tw6sdsjGxg4fKbRdY3FN2qW3onbx",
  "key2": "2EWSSDHWJ5xSa3HvzbuPyoKB8WCDcxwFHnVB91sUMnBJ9p7aixmSAuyYEKAgQstyTw43yM4MzdhMbMhFhdihr2tU",
  "key3": "N77YWJqUHXYk6WpyXs8cmVkbUgwBJV1w9iKmgUBQC4mUQbr8mAnRRJAc8SG9JXHioNtQR89N6pp15xaxfTAb1xD",
  "key4": "52RjCyCHKB7LSQyYoXPEmFRrF28hidcArqSNCEd1pheEVfYFCmQ7AFCefjsyceL2eyJwvTsUSAzCVqMzMkt4gDsJ",
  "key5": "2ukd445NUbQCs4sixbpDNkjiqELsD1nZ8gXVexGVCBxcRgaqCXVAR9qpZhneMs3biNgmPAk2QBwag7ZZaJai1Die",
  "key6": "9u4Zej3nNhJWitXWSk3EuroYsaRRfJCbTUSvXiUDJYaMmP3MGdzptpXkWxKum6twanD8DF3eu3pxjjMuJtLX5FC",
  "key7": "43ub6DT32GMDcENkcbFm6hDuAGcx28UprtTvyhpHGCSfTpzDfLzxnyWTWGuUysCHghrBUD6d6aTTBZmZMKXgWZja",
  "key8": "42MJ6NJSAX7CtkSPnTupn7WfigcQKJn2uhqGGzgkVJzur3gvo7fp7vgJ35vPcqCteRQ23KAi1x9YLWkbBTatGYK4",
  "key9": "5WRFAEZ6UAxP1yjTK5spypn77TW7RsuV2dpaauin7ifs1FqiHowv5oYq75Bos7ybUguukAgdvagF1SD74zLXKKXx",
  "key10": "61Vbqne2Qk5HrqNp5dvaCn8S9QFTd1CRtAyoEHsWGbk3cecHkctGQ5jJtrHQ625X9L5pFZZYQqNF58qKBF4td1Uj",
  "key11": "432AhSQRoLx1XQfKAQWLF4F5wQSBYYvgTU1KQqqD4mawW4VtACpmfmJr9RrkWD81T4nFR3UEvxZq4u9FvqPLoiR6",
  "key12": "5CTnfYHK3PZf2ikzFpeUkkKHyCQgbHaAnPdVAqJtFF62irzKC8AAQrM4j2GE8FDp3waQ5C5MUHhkBfy9o7o4K4y2",
  "key13": "fqLLSKpgm8XCvDmBLeeBr8Dnxs3yr7Edyd3M2eipDPZDWXC818sviKwmhAkvBJjELgW5KkEG1wDHNiD2zicdG7D",
  "key14": "eXNc78mkt1RJdzpU8D3xhVQBpJH7sPSayDskfTqRkrhce4v9NusdgxgFsSg2aLhuMGXYrAUkGdsB2WKS9bnMSD5",
  "key15": "3xef7ArPWfDjYaiwTZnmtDq6hmfH1Mua1exTn7wu5NZNNaXWkSC3ay8TNj5auk6KxfMNAMbZREYoW2nVqm2LiXgp",
  "key16": "sGYhema6DHCFdJVQ2jzUfHXDxK5uCviXH3b2ANbPNn9Eq4bdiZf4Di5aLiaM9ZeNKfCQjXn6r2qBARfjf9judCb",
  "key17": "33CDTGzQfV74TGyLAESWGjMqo7Db76iKgAVjoQzxstU2q8mUEHaNa95ieujLxUQnGuots4kCMwxoqh1HzhRnQAtj",
  "key18": "wA9nDE3FXTd4cMbMLwcWyjg2Sw8iBtNzABaBPVybtVzQ43cmkmF1ewNn2XGLbX2gAU5L3fBumgHKWA8yaBjBe4P",
  "key19": "1imq14Jcd5jfffFKK8QA1AaPWRqCVcePPzbw8EGeNeD9n3NysgawWJGLFndC6qXKVvTyec9wRqZvJGGRTaWW6go",
  "key20": "4Jw1Sp81Stp6oVEVXHSnwsTPNhbvNR7agne8xtnEav2KTXe6QjXxnzERSKrQdxixXaSbDApm3vPKSR1MJfc8x6gC",
  "key21": "3atvXWtfBuMHGbC2uB93HrjmCrxez8QJBQdtBvFSWX6DhDeJNFdFs8Xc97npzrNyzhKz9C8qkycTc82YC3h9taX5",
  "key22": "9cycUyRAphmRKMErFHJfNH9DJsoULfnZRKKZD2UHCnNy1jc3drfXi6WjuqvALEaDdSYVbwoa6vuk9Dj22zkuMUF",
  "key23": "hF9AufieL9J4zU3bzpCrRyL8Sip7jDdN1MsM1NyNByYY9NqovCrfn6Yn5PZfvSdLgDQW4CJynmkKFgdTufyaXh4",
  "key24": "bfsqm6g6UmbSDrsnNLDNBaFvbdPb32Lz9EAS5u4YzfbdXnhEpcMbe9WePNh868EgqfdqjYuKbKcDJBKoR2eShFp",
  "key25": "29DrkMmooEoKGuDSAxY8gXtFHpQM5MpSVfyW9M3GUPJgjfyiDoVXhyrMidoQLgXXZz7ZBqBywvjJe9S3VYDGycer",
  "key26": "52bhjwbG2ke98379yLjub3C3NJBGmTE163QUyZfPXRsMK2JigR6tJDP5wHtaW3fc5118UaTE6k7D47yudMnBNbaq",
  "key27": "53ipJTTxReLhcDvkjk2X315m4LZ27WCX61DfGbZSzWqxxsLiyjDK41PRYLMJ6iTM2ksPepmmwMZXfXbtRMoixuhq",
  "key28": "2G77W6E4D1dqbZ7krW92UCjAyBikkBZLJzzJrNwESLiCoVSvq8M9TcTDmzeQGqywB2XNG17nZfuQKhmyFkW2J9oh",
  "key29": "4H7Gz4ETdoKLYp7uggjZbGmsxZrQgRLxEA2jgKcjxwBgfG8CyDp7wcNRWfrJeaBwH7rD4aGH5BoWYYE75irFJV7L",
  "key30": "64ZCV8DHNxDcsjNds3Q6nd8KQ8BntFgn47Cb9HQWztbubc8kWtXHHZ2SjERoX4Vs6Wn8GHVHsCYkdCDFzUJipJKf",
  "key31": "6JZtgSYFismEQoydh1TWJNa3VWyuaa8vScS89gGJdfwNtTtGCTtBxCCCzVfx8eQk8Pa2RJATfVuggP4daowTLq8",
  "key32": "5oHCzPzDMrKDcPMrLzwokSHJKFH63XEuZrSPUnEntc5Vg7oqszix8gQ6aGrFb1zeYnBAejLXohf4vSS7crfBotog",
  "key33": "4tpKdwXXB3wAx4FkDk1WD6tXEVGbGkggGbDdufUy92hFHsQCQSjFAE487Vh5riiJkczB96zBZFLwvB3i86ggqgRA",
  "key34": "5Nxj5t8RLSStd1vCeyMZUD3HXZqS4xGmAHD9TP6u2cDKCo8bcVuGgpxU31VkssNRt8myD8Gmdx7Dm5BoUFKRaHWk",
  "key35": "XwV2bTidUSmAgekihKHgasBrxCUhv1wSJkvDk4ZgZKt3THRbaQJFnhbbAqGMtw2gnfuC9znfwjwPNAWosbPQpgY",
  "key36": "3RU6JfvhW4FpJ5dBvnBDdgNR3mPAve5WykcEuAGave2uAxgkKbjgucgQnS5gypTqe7d8p3jjbuZaCVdjV9G7fnab",
  "key37": "5xhViEP42iSf9UXpEK3t9MUbtfLZVpKPP1kUwtHfMwF35LzndzV2XHHFZQ8tUfns4C5Pdc7xjJP39sy17vftc8NR"
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
