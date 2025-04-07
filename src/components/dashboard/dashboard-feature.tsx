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
    "oZvjmyfy8iQP35FaJbMJtXjkwUxBHFB6qbACBboLvSmqoQaPLiMHfDKVG8ffreVp5zfk4ve48hjVbAVb5A9mT2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPvBFroPYPwYSebZJvwSAmaCt4LtFhzJikfmpVdf4T6K4h9Jnhg7z1pyuEUJ8BrKbpz11WvsjYDJogwE6XeT2ht",
  "key1": "3m6VcUsKdYH9dyViLq2xMBHVDCxJG3u9iNg6MngKF56LZ6Bf2BWFyAFm5aYH6NuepMftG5Qw9yRcUhPwC2mniQGC",
  "key2": "4fvo4HiCh74RCPHayjoRJUK4Q13eAHZLvRcwBFz7kS6D5S44YHdveGDTMfi1yTBvBjhKZe12bQ5QUDh5RWtYqwHc",
  "key3": "5mNXJga4gkWr71ycFSevkrQ5JJnTikac66LqdPutk1ezS5wqH5vSu6o9Us8owhvUG4jnasRr5YuD9BUPeSJroZd9",
  "key4": "BspGVKZ9Dzp2u5vEyAGgTse1mNNY7S76sUyHV2HmdQphpTeGc2Fra9XxztYgoCvgaYkCuRYZqSgaHfak9PS9R85",
  "key5": "AgCnSoqJcJ4f8qm6CjqbM1CZ6C7gqkGwxTLRXa2iuxTMNz8NnKVihGu4EFmYzg2diVbKjtSWfBjjQni4QVoRQFW",
  "key6": "5NLLv7i7ZQMG2d3MtBRrqrXR9MxZJPn3GRNKZkvYFEs4sAjYfhCN7H8dFc8j4dLUb1Nqpzv53cCpKFk6AiZyGqnq",
  "key7": "KpJm4ACcHaCzBtwz3poeGjyPQoU6oNgmbBiLPgmfLoXcbCWS4CZEBnp5SqquTexEjZYhKdxZ5XRhkqddGMUV9Cs",
  "key8": "2YhCAKghDziuokHf1HZJKEZ68rHW6vLDTATiVGrMeQDZJzdS7ZoSHQfXNtziQvzVLs7z1SRAB7PKgTPExL5bm5sW",
  "key9": "4MRHrqgSGQ4ZzWNcGikDJ6oCUZMpXmFkmgyAwjzr112Wp2pZPPy6Z6j7eb47XWEG1ri7jrpnpa53gzU8Puaw4u1r",
  "key10": "3wyuNKETksberCyR4TSgCLw7s2dmbsRqe7qKHTHRn5CPQpjWgWdyJb4PU45Uf5bWjUNwjE7konRBCGZva4iHrgU3",
  "key11": "5t5M6D1U8EoCSXYRRxazMVGXHKxfVXVHqfNx5daqcgrMFPTCZmjehBHv6MRBFa5XEzUC65VHbjbzhxYqrapFBQk",
  "key12": "2zmJUvNx4p3mjAX9uGsiQ6Lxe1ZiwNtkroZRwLNbSVeCj4ge2CepUc2FVkzpCxxhhNRtBK7ChdK9y4EM6xP1AaBr",
  "key13": "3389BYoirRdgHFVVDALaoaFipREHttDpo1PzJVKDBv5VEaKPJWDQBtWPjF1JQj2Kk4HD8nJNWxzx2ifdf7s3s9k2",
  "key14": "5WHFT7j2QYMH3FWZDdViECEwcV38DTTnZk4aN93GDhFmuWgWH2aMiq3Bv7PKbADL9Gbaxq9VirxV6wiGC2sSnPeJ",
  "key15": "516A38CiugCqDGjyKnEugm5qCL26ji9Po2xA8uzTAmCKic1dQns2T9Z5jX3MDhzerTr1aUMW4kTRG1m4XA6mnpAb",
  "key16": "3gQLMBte5uNriFzxyHx2jF6ZScvRP2a4QZLjn93Fnp2badd5D2upbfgsCds5CPyW9yQ46kHS1xxpNM8bNHmCg6ia",
  "key17": "5BGh5cCxj836GUWkxGMbb9BxuAYAyN7y2Yar5uL79zcDrfWWQcCPiNR3PSomnkp1SmyxJpMa46jLRgQHqguigH1K",
  "key18": "47KbQoVnm7fWdKumo7v9xgk1YdW98j2krUj8MWQ31pF5skc6VtsvZwymt2TosNofXEjoFPiLgJoBDNWZR4q8xf3A",
  "key19": "3G4PJJb76aKbY65Hh6WZzDvgt7z4nVfEBYBgi4gtCzRdChwwTZ8RZ1QgYdY73vFPPzBRoiGM8qFfvQET7cggn75j",
  "key20": "ZDYwZe9bf139wksAgZ1EY91nfJgmirApdQbrHkJ7dJQZW7DYgTp6d5wjPX9TTwdgHsTdVEC1Q8RuGM6Q5zvf56h",
  "key21": "3yngaPnot4t1k4hubnHFzSinkS8dtjtuT44JcSKUhGMwNu5Qq9TvTK7vF7oobhqFfFY4Vazd8bHBTU3TfSQEL3pq",
  "key22": "yTvha4RYNiNAGp6ViBvae8xecxaaH1fiYPnv2zSUGT5Dz8Qa4BGqRNJ6GjCpETUrm8LhueFtNZs3v8LL3QkpLe8",
  "key23": "5wtVXEQUinepKKNS1UEW5LoLDpJh3PuZ7RpUqv2veqSGVG6vzukR531MvD7ZueQroo8cA92LndYWojTieFHPe8ov",
  "key24": "PtNkv5XTQRarS15T85rMAGWtmzvjiWPoDYgWjUwmCC6qj5T9F3qmBBSvkvL2ATmJbFJw6cEJwxFriJWrhBzsp9n",
  "key25": "66d7jeVaBcHAUQvk1b1jxBX6HVN18rrzLpdXygkzuqy1zR5nzdgMpPKSzz8KdqwKDAyXPFP6YwtCh9BkTNcU6EmY",
  "key26": "2h6oknmKh9D7gxUgxMVZsiWRhZx3yvTLpg2qZUGi6rfy2njhRH32t7M1bACqJxc4SNKS358aar9Hr4nEXy9rH7Fe",
  "key27": "2Efk8Q2L5AunEWPojwtTYPTDHhsAzq5GihNLHbyjtxJ7LVaawvSiZjoXmWdo57X2dpLq84fwTkbaqyZZoeB88B3K",
  "key28": "4a3BHdiNccVQzzXyph89wk9aKBVPwHbLKqCbjzPSBdGpchLnPCzRnx4ynneRJmoGC5EFnfqs2GLGKDDYFiy9G8HB",
  "key29": "67mQs2hibmExSRZEUf7ZMyTrB77qWpZnhkiiUKeBnkqeiDo3i1Vkc8VH5jN76PYruqTa1X1vMkW9SAwo83MUXFCH",
  "key30": "2FGmQBnxnLg67YkS4tNpsRNsUJfzi86MpSf5UAsXVMLP7Fix7dck9EzdKJ3A2a8gE7gaeFi6kGkaJE5vubUAD8N",
  "key31": "bzkTsnhJ3FRNGNAekfta8obRtTJ72VYUjM7G3CSuja7fd2H1qs5kpDbMDjfWQCX4GhJpuNf9wKdvmVLfyp8GG2H",
  "key32": "37CB1E3dUa76Uk5yJfb8PU2Amzv11Ef4v7N6bCPTaA6Cq6sTu3QKVmnH4p79wxYtjQNTNyq4pLg5B71QYwHM7sX4",
  "key33": "3tc8DJsBSLpEBoE64oe1rYt6SXX9hWJUKbZr2vaBkYSEcSy4UJj6RCoigXhkJG6YJRqYuGrpp5EuBH6gqWeJSBXs",
  "key34": "3CaZnsrP1sH6GK4GYx9ykeeJubXuerYUrs6Mu3m1vXsB7Ce9YTZq6jYuwNM1ctDafa9QHM4pXmP4DumpKTLokbtf",
  "key35": "4A9pvzf55ZzvooCCLDb9Ve8mTquMz4GCz9o8EjCYkMB71pr8cSS2P2XLYX8STvCBd4EMuoSKGA7fR6x6bWUcdK5W",
  "key36": "5a6Sox1MFDn6jSyFxXEifWc3ZG8mJCHQP1rJ5FaPgoanjnMdkEnmQ25sg62gai8HCmCbgf7wTbB2ogNdiJSDVT2B",
  "key37": "5giinUpk3j58EqHg5oen56o1gVC6THRY4v5ArHCtN6poXnBWewv1jFtTjps6umjiaqD6Xsd3vjdq1eAQjia3MYod",
  "key38": "GDj2X1W7BVZne7NtMvgoJUjyoYk5hXte8wGsfcwc3Vc3ZwKSkkTrsLWV121iAJt8emjD38YGyhroMLxGhy8EAXp",
  "key39": "1By3MN82zrkrzuNfqYr8CUXurzZLEtTrRjBGmCW3M64pDVTvDXzG8zMK5FKLicv1hvgNDA8FHHp6YQt1r1pupvD",
  "key40": "umtBadjJaoudoQe3NfybYSgMctp5pi9Pcct1ga6Yz6bVMvKoFPteuR5mNm6JRnBqUdMHY4EXxqkfEJgy2qGHDrt",
  "key41": "4nmqmn65a7MZDZwPgmKjsf37ShUpjTMuAKhpULP3fp1Yy4tVBJnsW8idYVZ9n8qZFDCbdtyXjy55u6N4DiZCJEe4",
  "key42": "nSDfePNTyLagRE98eg18N8biBjfYeYAr56GRunoWLeDa9Ty28rHditiZvrJaTTYLEBE4viwQLUsrpvQBqBaAHS2",
  "key43": "3cbcqZJRuVtuaSmJqhCSik6kVH16oHenttWiaZJmPAgmmBpXM6F2YSLdXV8Ro6oxfhCe3F8npqc3M49645GUphmU",
  "key44": "53YHSoxygjpyu1x2qAE6iity1q3VZiV2u7h4Tqdw2DEPUm18XrmhW4Wgp8aEEmdc8TBFHg5Mt36NMbvSdZDMLhGT",
  "key45": "3sYVu24hiU4PqXy5duzqqz6TG5XVuVHwVDTrZXoLbcHb5QUxarQbAULj4KW2PbzGnkeCvRnVovjk9rfFwLPJyY5i"
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
