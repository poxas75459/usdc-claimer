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
    "4GSLjksNmgMWira9NjjLNqoio7eTSTTRZJkcQyhn9KnGwy8WmSs5kgqZfARg63zPR8g5hXYA1bv6Lceo9SKMdkAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTEWfG44nGTiRKCepc3zgTfHig9jJTSMxDbHKdMEh78gE7qkBw4nBeLxrSdLLStnsJ8PWAotJiW9xN5nSD5gJ5A",
  "key1": "2v55MxBBSnq2WNH9CiAtNHJBFwAYYSoNwKmhrrjLTLfmNMnk8d294qX9g7PMgxqGWLuUxCd9sPGXDKjhPXaKxhiw",
  "key2": "3iLHvnTTdutso7HjGFJqTkjGpxCC8C32Yv3TiKJTF8c2LcdkDbuEq3MJoJ5eg9efrFHTHaVHcANZfSEWzrrJhnsy",
  "key3": "sV5dFpUr38jsJSwC4FaTiy4QmHxSEcbW6ZhsuGjXxGMMHW3maKg4wyctm5c3teqU7kymW42XK15tiUQoLkBZp2s",
  "key4": "5t9WdXrrj1WSJN7QZhQysJBTiMwtjHMkszBooxQDCwohHrzcN1oijg1zrTYZgEPe11YgYYFEF325yhaKnG3HoFTk",
  "key5": "4bZoPxsBcbcQxeh587XrNWj3BVKZW1vfKEVc2Au6LNuuzrFwcta3Uf4brMfiYxwVWewFV8jsWk1EtGuFMxKrtzuv",
  "key6": "5QVe1QUCX3LdEFWxdcG3x1uf7FmT3C6CrJVS4WwAxvTpQ9T5MwgKiTrRpF87JSXQoiwNpFYLfkZVMo2EcJZxg1WR",
  "key7": "5JhDtoGFvxwMngSAHtURB11aY5C5RwWeMZkD56QiSmzAFwuWYN2MKrk9GtmjYmw148AiLy6EMLuLKx7NiBbt6AyA",
  "key8": "4HSh32UnLLnekS7MLmmqn4jWSAtU4xpcBKUZv1fGzwWmo57WYJuj31NJnJGdgS6Tq9V45BvmMyqqL29ibFACtsx5",
  "key9": "3mbbnhGhnx3krKkUxE41os35CLrh95zigAxwzscHhrShQDeYvb6GxcCqBJhsxk2eJiWxF99oyAEYrNsy5LeVT2vT",
  "key10": "57RVyprGEMjU4M62Hq6RFj1NXD8Vvvk2o8xPZEsr2FGbmU8PYThSvXpsnvuD4SLXC5ik3ZDPCKgKfUcShw57sBU5",
  "key11": "41UVqNqHgQDNAG8ezigX3ZCdgq3mx8VYt7HwZZyqGy57VfwPgVL4yCLB6BRCeJXqh3DVat7b5zTsaTfgiTuC87Wx",
  "key12": "2iESHEGGhgLmxMzugrKjCV6SKf5uLtE2FebmwfpvxxAZyQwMypaTHu3HN8FnMheJtw5HCK1ZD6VDpgkVBxuWpFZo",
  "key13": "5hnZd4E2EF1iErJbNcLoDtQS92YnghUk9h66EToE3BcVSXz3k6HguByBSRRBAAorBq2G939iscYzc8yENWWB6BLK",
  "key14": "2J3m2yrfnvyiPrDi3dKBuJK4qNUc4LhaPfdJQV7zaWz4yqmSEBsFKFzatQfjeNXdibCke7mEEv7Xuj78A6kbWk69",
  "key15": "SqCModquDATayKQiaRkpWaB7qp9DE6yXEYbeqUm4QdTm9LU8YAfzJW2fqzjdC79TspAoUbrUgPdQ435SZgJzAYX",
  "key16": "5seQ8TRfLBdKp6S4njqf5LSBbfs9oQrdmqAZZNtLU47pRx3pP2nJwNNdypq2gECtjNUDF37pXYo4q3Ebi12oQXFS",
  "key17": "5a3d6PKDJa8FjSvMx6rJHtkctMccNycZhNwmVf8wVTYCYqRcSQTXh3EGmDkh6my647maoWWiVB6JhK1nGKmV1nv5",
  "key18": "5RuSV26t2J85wQcxLM9K9nEv9WrJW8zPgTaMDQEJTTgV4TBbWv9uKKzBKU8exFEDsYQJJcoSRekhdJ2WXBGbdjzg",
  "key19": "34USmUicTFmkgssKJ5YeoAMMqMPiAwiTMsLg7Bm5bYTF3ydN4zn9Ar69UCUB1p7PG4Zjcu3v6hKTtVVC3bLWiuoi",
  "key20": "3uRVLNQypM3aUGVCLU1XSy1oXZ1JcBpUREZM8UBpRQ95WBy7uxLVN7HC1wEXhSWafk5vVyPn2JvgSkERuNkVtRys",
  "key21": "3fzKcBSSUkSi8TFXcFMGrJuAbhqBZJqQekXRJxhtMpmQ9KrAaeueyHJryt3qLtLCjWsR9Nhh9CmzRPtwbLyXR4ug",
  "key22": "aXphF2m4wthNNLvcxKjx81DdnG3VUiBRBD38cevtZSP8RFMCzkKSgkLWNMYT8GHckL7NFAvPjzSocVe7vCkvsy4",
  "key23": "374c3p2jYevdYEbLVm6akyBzMtFSVJ7tGEJcHSM87p8qNgnSNB94zM3ZsWm6tboauuP1CuV1MXw27p31357JQjW9",
  "key24": "2mGb2rDtc6skrCAJ1hkChuETVGLUJysHPG5GeCUaS1Szk5k94PECqWFQE7oseYLAtpxWftQfPWGU2uUXujdDaAzi",
  "key25": "2Yhr1RxW1bRjEhE8VaRFrQsnnJ1AvL5fueZo3Xkenc2aeNfDPWpoDrBy4T1pA5RsEFLJwCX9pvW3FjELozocwahf",
  "key26": "5iRhKTtau3wwNTFyY2q5KNn2APNK6M4kwNu4378DWXiVqz8TNPR9Wjsm7REfRpw2WRWBc4FcJez1mPH8g3k1xTpg",
  "key27": "66kn9dLorSpLQv7DKqxc7d3mC7oHcBS2icmDuXvdAzsT1axqLAMhpFPkaqPRMt9ysWD3vgCHpxgazyrBTCn2bhoS",
  "key28": "5t5hNc6cGxd61yjUem7cR9RvFWFKxSb8tYvErGKwCKHusFbXnVZHR2YdoMJuXoAF1n2WinTjGeGRQ299nzeCGsHd",
  "key29": "2wCj6vgCCy1duE4mmPpDjWatnFu57gEextJrudZX3Mv6aKTzUxPMZGD5CcuNZwRF8hD98F5etLnBHJy6GFqMS9zE",
  "key30": "4pkPHGmemBmQjPGgptwRfDRpkrw3dkZLFjuPDkWm8aVMG7vqVKrqCNyULW78LzZNCPHvXKmAe5w3UAu9USgSGZUB",
  "key31": "5mSDmUoDYm7apEXeVY5brkRMNLZmK1dSpJgqdEyaZikdKELLLQWnr5RuWDUGHnin453EUNeY12KEaTG6MY5ZjY3m",
  "key32": "4E9Dw36iqw2poB7Z5Noj6uMhJf24CwM7RyAe7tYsfFvJg7gf2nWtDUzLrc58dVbWHdFvkeJMEa5zbDDmr6pXj9we"
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
