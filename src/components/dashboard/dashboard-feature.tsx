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
    "Zi2zZp4KXznNXfiVftVPenwvfe3XZqB25Brup28GBfpGZRPtw1Ljw7PLnok7qEporaKgt4FSGN6XF8F1GJLLqFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ex1geH1WLZJuCK6bA3VmwAVnSnxLQZhgj7hLazUcxiE7wrY6iPu9BC1yV5A63a8ikWUPFYMBEDu4pXXoUcpmSx",
  "key1": "3BS6vJcGM9TihCGkwXXoxxgdxLLT9vkLjfdvBQb24hwxiPaJ2KdV6DoNshKYPaTnCHBkmi5iv6C5iGAryXu52TQF",
  "key2": "4LXS5YXxwzMzCKNmdRhptkaViTXzyWdHaRbJdzKcimXM4rBqfwqFA9zvwZPBkM4QBwzewLav3Wi7Jz3qSNxfKNbj",
  "key3": "5FNuHqHfYe5GsdxgtCLJwEAF21gfdBpzJ8kJDt2W39Dc9BzFU9JcphBaAnL58m52bMFGeskyZxADWSsq8SRCUfSQ",
  "key4": "3W4osjWihiFKcwn3eHmxp2zsKoqNBrjaH2uV7mzzf2oivjX5HxZGfjnXA54VVNB267ZkWusC1wUt7egWKi9mudVi",
  "key5": "4Vc1gLystPigicPxkRR5AzbcJJXJ9UWE6oSm8tGtY21GYEUb9oybGV1NWetnnAmYQ2d2vHWGciVcvwBV5rXXXSiK",
  "key6": "opduF86QJKwr8j7j7uCeo2YuDkz91DFCuPyD3qpXQ4KN3VVoRN7jrhL4oYBewKPmkC2Y3BDgruJ2KUhMEh4ZD6E",
  "key7": "55SJ6KKJSWU3rYv7ewMa3HBpcaKdvR3oHTKFQoKX9Qo4qib8L66TDEiGrt9ivFiK9HzmMcsLVKU2PTh15HEhHu8h",
  "key8": "4BCzmjJKPb7g5gq4p7XAbFjX9nRbobkRFrQMTjDEwXTzbJp1T7nW7u4KXoZtKjQ6eLhoVo2S1Ybd872aXzK7pp5u",
  "key9": "2iw9sufKB56qLgQ6xcmMWYoWYFXtjqbMNtzhMpEe7eveUoeBPaehXyURuF6BSMjzJ2YaPoJH7pZQ4Z4E9jYRBcNQ",
  "key10": "2ZshzEpVfQbjM1z5XsRNwpMjEERdi1rZjLi9D73CS4VvsZ8QYuNaQZJCAEAYpSR6qUds31edEVXrLWNDLT7S6MhJ",
  "key11": "3hrAjPoVCT63wjUw6bjNBYdGZAaaSh4kVYCd6iegu8Ho81Ac7UFF6YUXxgg3pdnGG2Tx24iMEPAaRZZHqaAd5JC5",
  "key12": "5fSeL9pn6eo7rvtJfgN6B4G5qwG39rdMkaj7fsNQkXgZQ3xW1v119vM2Tjqggtb3C9rnFE9fyrRBEVDuP6GcjRZP",
  "key13": "tD1afo8KvNSpJyj5x8mRB5qGCHSoQp6egNWcyTB7McXvGfjPd636JsUxisnDHZvGs2PYx7DWQefKecGvvA6Wqro",
  "key14": "527wToXnX3nkJygxcgpQPfCDq36c2HdUAUzn7vZGoPT9ZpCEHu4hPdmLfMh2uzMd9Qzca41KXQ6eL2Q2bgHnyqjJ",
  "key15": "2hKYZpCwVA3epRDyFuZNYT7cpYV7bUHXsVcTP3o9ZNBEc8bmZMusdtt5DhDfSxAdMrNmsjcW7y6FnBqnKPYZ5vpo",
  "key16": "48ZwDL5CAgkRtNMZt92XjF7gEa5xjcRhYqCALZniSet3G9KZjNqU3ocFhrbTXWBBHKi41NzmNRLYeRKu3VRJgfay",
  "key17": "2P2Cm9FUhzL3dEihXrQPRniqj4Bh2fKUFaagwakr6QT6tu9uyvUmvefzh667pYUMRjVXFtTsMs453ywDtvJWBWqG",
  "key18": "5cFmypXKZe7QTubnrXQuBwkScmX5DiAKRK6ZEErpy5oDwKfJrP9ZTsL3mdE7eE7F9aStybND9SwZT7iKTWMBfvb",
  "key19": "2h3RPWugZ6gG6AHKzK22Vbn7QvyfWFTmuZx4XQJbi3qNdaPF5pjAD6DsVWDPKGJNTvK3wYMNg6rimR7BZzGrBZiz",
  "key20": "5CziFn7H7n5yr2xy6h6H2cFShGqMBfNHBhdCA7Ni7ZgRXgi8GhB9BiUd32b1hbWqFjh5cPKtQAtJ4bJio9ehiqpy",
  "key21": "5EKk1FGZcANM9iZ2e3XugCsH7TCGHLMMrjR5kYxqVywJWhjg9WEfpqbDCWKM74omgDYuJaNu3dxJZzZyTvZVRbKC",
  "key22": "4sGAZbCavD3LWP4NVSF3vjturpeh8TC5qhFPF2Rmssk6PHBx1oFAJkEyBzjD2Hk9beqSVf5pKoUyhppbWZ68xcLi",
  "key23": "Lhoau55QwqcrCNQQ4juJUZQStsmympNgojpDN4GZNo5pQJBjxNL96ifqptL7YzLEJoAoCE2otpszc8tcKxkt1iW",
  "key24": "2pSDNxwydzenQcFdBLP2N7NmtW6JZoQMNzuewNWhi2QMnJP4ZDZKW5nUvyjjBJoJhrjBhHRnbXLAKi9M532APr2m",
  "key25": "51PCCipzWd1RaYkWPN3VJ3PRaophRro6K2T6c8vEWz8fMRA9MxwTDtAedhSaQHthuLxpScmEcmGw9wctpLuyAD6Y",
  "key26": "529iM8eRB6BDTcKjWAn6cssRdygVgQ7zc5VshXBhQDWGgRjpSrSqtHy8KPJcSoKaVfBA8fi6SUdevSpkkVCbeYgP",
  "key27": "2jp4Vc8svzdZq2ocavfh8phYeZ2FUqwcNiTdtzn8goGtvYw8RemCW2iA3piwZ9pq7yNpR9JAZx3ZKj6aXbNJEiJU",
  "key28": "5Gb3eYbSHesFdfVwWAT7oMjb49ob9BhBuKmTtBRRgnZCYGRRoWBbrnjejEsycp9n9EsqgLzGyANzKVhUp6aLDpSf",
  "key29": "FFU9dCp3HsiQGr3HLhuxgoP19WBoyJTAPFYDg4VPkENFeDyWhxEP62JUWTWJ3u3BRR6jZdMUntxFnwWtT5b6Soa",
  "key30": "3YBiHF5LxBiaDhov1LTfR6YUb9HKe4PjotdpQv5ChkUU4hXFAeYwj8Mdxu4FoXpH1hS5WutH5CdxPhXwoz7m2nMN",
  "key31": "4a3MxuCsued1JhU6FzGhiKFKnLveYRYwVo2ZUiYi4Q6xnpaTx1cn5yyYgxotXJyJa5njL7yMsY6skDXrvTm8UMTn"
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
