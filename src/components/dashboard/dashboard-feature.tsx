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
    "214D6eyRfm2bDvLvB6kmiL9QadxN4kUmdM62VqBfhHS4QmYnMHGgoCjvaDzVVY1uNaXnrPx2fcZYtFUFakzaka4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asxzBvB5peb3Jwpn9JJeWbyaxLqUCLdrMTkKNMcf2HnVL2Knnpi5LniiGcdeY9tUng1qbr9776aaenyqtHQx7cR",
  "key1": "3sdiK6EQ2uHJHmcv1qkxsXaGU1CcJ9YyuzrzUVHZnHsLZnXDspjzFUqqt95X12J9KdFkwD6AWDzdaHa4dgTWPVY4",
  "key2": "61G2sXu8gGjmP4EyFyADXqgr33WozZehe9KDeXpiC9jxVwgq9GEzVhn8xsKhqUmGqpF4VbURCXvwwfNxLs6y6jSk",
  "key3": "4yCA2pboRqf3ATScCECYcGeiiYwcawYgR3kbsMhcaoi69zxhNPRwd1cGA31NqR7SA5g4Gy2dQR7j58RqBSzaZNh7",
  "key4": "3uoEHaWEkEMZho2SzmrYYBjHAazHTzDXbWccMa57pNghzdabe2YHes3MgeTNsq2S5XkQBj66jK51xzYvHDjAwuFX",
  "key5": "4WJJbvHpyVqEZ4CHhHNEEMR7TpWzsmMQ2iS6Hp7PHKa6bje2P1QSaKw4pNJ9Xeg41Bjnv6apDCExCGYDFUxGNKdm",
  "key6": "42rNK5itLskB3kg8pK6WB6QfEJGZvZAGFQYY4Z8oAKbV427xuRGyL9E4nVbVGipxvEnCXxhSZJAyGp6yc4t6PiJ9",
  "key7": "2EaHaLfFpi1ihpJDokx7MqPdT6JNHhmFC3bKsxp83A5EUWgUdUMpvDs494BTKB5tYscNxWKdUbFaSy1oxm52G4PU",
  "key8": "2t4LuUMfitHVc6JWDUTe9LHN9FPMtSLzH4JnCuPHhSKQvNGN17G4maHEcLfNrGuaASzYnyjzwogqyAU7gj5bVKv8",
  "key9": "5Y6r3Uaz9yqhXdE7mTexUj8gWF8b1bqrZuhns5dnXznfwPh3h4Wy5LaVWyBcWzBc1FwQ5vNjAsnZvwsbLxpvTLVV",
  "key10": "2RAbiWeN29X28Ho72DTn6bqve253ATTU6zY461GPN9fPCS2Ux2FzfMQ1Vn9tojfEWPiuFnJoaSQbvGAiufaqTo4v",
  "key11": "3MHP5rsEupSVj6Vd7W4AM5btxyNr1JocKEb7kwqLR7LMU5B6sX2yaMs24EtD3aMGCZQRzh59BwHTVf98hxuH84qS",
  "key12": "4o7eL9dM5CfMyTVnUBNpCYH4pQtHDtriiJwA8T84qyTXrBoKcPLdSxujrQ76f7oPMQnyjXUeYt8LuxN7k5RfUBbP",
  "key13": "ZsY7z1nYRicvTbiPA9qtGNHJkw1mLBrr6onymkE6gyWW4HEdQCmUZSeLcC5LPxPepq5QN9e9oGAqABwjU4hrAip",
  "key14": "sifmBEhNw1Q8MBsSQ6xH45gfr8AQSPR9MnZ1xnzWxVBa5S7ngcyycFrTHDXq3YqhecJkv4nQZQFP7dWJkFcfgQk",
  "key15": "2fpgEcJK1kX5he8TPEL5gAAzG8kcTXsXG7WguGN3vNeBmEhSnzKxWzNffrPc1WzgVTtsUCK27ZchxFVFViFhVm3x",
  "key16": "28YB4xfYw2UcDz3a5m6xSv8jPgAkSQ3QQEKkxZKzqiLQGAmnDh5qW39bnPe9wVwhgVA2NFkTQK7xH9K8aWeqhA2L",
  "key17": "M5vDXwzujBecEWJdFVkfMZ9jzirAqwiv3DbApvXjwsxy1D2yqhsjEeMC3U8hF2UUsEknHSh49fzk2QeuiWdSUjR",
  "key18": "AEZR54gca6De4c7hE9e5421weMyhJVTDka2rGs2cUJGZy3rbKFdEmHhGf698NzCgQRe4z2eKc2qnmTdZxFveFuY",
  "key19": "2zjW7aTAHX2CoFeAcNoAWb6CCuL7Yc51N4frMe5GhjTCi9ni86MNgKs48D6tJpakV9ruKLEekxy3qFEfvYq9VGQX",
  "key20": "2qWHJsjPCF7hXCWTBxCeEcYNvBFYMkLN6puPGfezMehdVjgrdHiGkMhU6dzcAbiL8KQbCXEKCmV59BeKtJ4C6QoP",
  "key21": "4KG1wizmrh6TxPdyFnhLPhFQ9h4KZNMsG2jKmaEs1LyTvQ88gkH4ntJQpvMLnD5eLHpVgxfsC4XTawqJ6QbheW48",
  "key22": "4YonWKagHoCC2Mg5gR5LjpVUwh2SqwqF9694kk4g2DcSKdkippC3n6ecgCKy9tgxhjphcKS8sKwBDys6PqTZs61S",
  "key23": "3urJSDbLYRVG6Hy2MVqPLKysoGS5hDgYDvU2uqDGVbr6PvUqs3N8cLA4ycH1JEqhgMAMDV1y3sukv4ujV5tDLcrP",
  "key24": "5P8H2sRxBNyrP3BC7cMQznUDzaMN7B5AJs85dUVaF86ZvN5E5epgryZYsqZBZ7Jvsr11DHwg3DtVcHShs9Pfp2QL",
  "key25": "4JbA8rGRLHGejMkss18CZNSTyrFw5scryoiJgJ5i2iMcEG7hsVXTBjgXGGiVqvvpdWpmXy5TAKVPgK9AXX7bCyo3",
  "key26": "4dwTUpRaHPz37hTZ4F8EzjzykZVMjaetKZHhwCGmVLsm9RK7QJnBDhAso5EE8fkq4WAWnv9Nf6et29GJ9viT6pv9",
  "key27": "63FjLFai9Q2Y4XcbkEqGEsgwEwSLkgvWNLy4T52rH2wnPd9EX2u2t2KxqDoaUJrdNM3wGhhGQQGj85sLtSdt1MEc",
  "key28": "4pohNqhxav2mV2vGKNNeS5rA1qN8h5kr7MvKhmpsSwtxBuEdHfGT9cq1vS5yJPGgF9E9NJeEABoV2f1D8YrU9qHh",
  "key29": "d6DvmYKa5R9eTcee8XUAqjegYi1w9JadVbtjaZhu2g2GWfTQeaNqK1woDytuZQY9AhFD6djBVvzryKAj6tYrfAA",
  "key30": "2uU3vDQVnqBeRQ2ZYJCzYks2kk6RkCBpnbqgH2EqufbCsFxdPtS7y71GpGuGZ4xzeAVmpN42DJbRM7ZxGK2ehN4u",
  "key31": "5G6XE98PpY77SXQfU1vPvqy2nsHrfyjvbmytFxo6n6pbqZ9iN6Pgr6MBD9U1cDzDVVr7wV1bXDEPm9KWLUUXADM1",
  "key32": "5FxMChGnJyRs3bdMrKYr885poXVHM8jGpATNSp2xxKcWHcZ4YAUnR5b54PCMwj1MxZHqrLzoP5AfXBWBB5CCZHuE",
  "key33": "3exfaVmo91JdkaqRYz9zYktkYxuUHP91p3i6Hixqd2vv33bbQsQehJpdRyrubJoXYKKTXp45RRNFkZBhTd6ALFYq",
  "key34": "3WdjxwKfSXBWup6j92xFEKNiX7kZuFQBo2NZ68TTdZ1JQ6JEqiNZCCwmFU2Sm7FnbxjKYcNYQJnXdjGSpv4NFBoZ",
  "key35": "9PswWMdvMkM12tkjuzdZZANMGGb5e9V7xwee8AsjWDySfBYBExaCYob1hpjdJ4AGYRUWhmwvDn18EhW7t5jKm9Z",
  "key36": "5beX1E7kJwEuzKS1JfbQp9g2WtG6SDPsEWb9k3DZc8JAbbRZBX1jURDiMBVXG1nwgLetEHSpfSPZpW5ore6VukR7"
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
