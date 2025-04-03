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
    "53LpEMJEBLFueywJ99sTeZ7FGvC5pazjey16Wp6QVA6rrn6ebDsn5NpyxJS8WqsCpnP2fsvcwLKNeAG2sC95ha4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BnGR9hgmiM81LGERawFYxxUtEqK2EH6RWFKSkV7otE5oFyZAKPtYz5EHWGenQxACFsRP3Z1KZC647tqVsnx6377",
  "key1": "5akRsStUtEzCTSUhp7cShyppbtSdnW5FYayeVTuHiYmpPXaiRnaEy7tQ8dFPVV8K6sHywRTC49Q933oDdwf4ro76",
  "key2": "4HNrfjCz8baWCff4XmxUDB2PGHSELzc7768imKzXUgvru9rG3yWeTpzRvMdJpydx4YaGKKgGJ8SwQp3EnyW478LC",
  "key3": "3DrEkvyhoA6G7KtxzoWK4xyi767S8nnSCknS4iKF7bVJnX6nEJi8japD6kDGJioyuY7EoNVet55YPeDrAsuE347d",
  "key4": "22TyA62VhBu9TPB8uUx7YA8HyaLJhP2GfggCRJSeYQkL8XtdCZ2xEx6vkzmrm5LP1yaKiCX4mQWGgF4piUptoFtU",
  "key5": "54aCrhke8GnmVQ6moS4QtVRGfK9bWHfQRjntq2uaEcuDfZwh1UwPXjQ19shxMJZ4Qjq3nkh1rwAj7mqDiYqwsMuL",
  "key6": "45HGt6hF1ebTvupvszo9sTJLEFLvZ7Kyu8VguM6s9vpY9FcZeWt4rVGAxZVNpGvysDouyUbVzBu6mCAYkDEcu9w1",
  "key7": "5DbZR51guwkuhg9b4h5q3pX1hSp8YSBUrWJBzfrhoNY5LL8aYpMK1GqqPJ6H4GgibHyktTVXhkiznb7SKZ2H31Cm",
  "key8": "d5Lu63mp1LUM9EXqeaS8s23RnmHs6hsBsAEbCrb9Z9ertqmTZVhJYoX59qQwSbMg9EEghU4smbxuALqL9BBLG1N",
  "key9": "5gM5f3LnFMeJKLxnzToDsETDuB77y41PjgTRMhvrmPcWNV2emwQGg8njwvz8KdS34MnXj6mVJWenMJ1qQyg9xmcE",
  "key10": "27n4Y26VMC7Up2skyLZCDT9aQe4rPyLfH2ZtB7jNNY6q3qKhSgPKHncUSsVKCH4g53aPDrRhURtwJWtQttJBti9z",
  "key11": "5boMijRxFFkPT7619Ldqp9r3ZmNEbYB5Ny61PNsEsx9x5q3s78mgYp6kcoYySkPkdMS9uZNcv7x2j9ydS1hp7kFS",
  "key12": "4x9qQffsZ1Ds71JDKVHQqJXS2XqSZ4dGCETmjEK8v5XsQhf6kq9oPpvsUih3vewnE73ftPzo4kayGbi5StNEwKFd",
  "key13": "4kJhNYZTyoooH5o8zZar2WzveofnphmTGFhggTGgdN7Vj4fEdvTuhpEasNwYFzsA1GXvtCMRM64r2pJ7LiZRip3V",
  "key14": "3T8tXiNj8jHPzC6znjbK92c65QpRh4VR9rvAihguCSH4GaukD8xYKf6EywvzMrHfcAVpbUbSRpbEibBZYmnpDNiB",
  "key15": "2BuCPTkuYpMLgET5nNFBVaoexzgu4oB969m76DPPk4i3hoCAqsyGvtKbBE2kAzshwVhhAUuf5dnbtUNw9rfTPjQ6",
  "key16": "52aL6DqKRaMGVPoFuRCPFCSMS9cJnpH5Q1QAjru4ezuft8n1pY3mLLHBaSFf4E1JjYRcXpNjNA1FFTKcPWfgWPUZ",
  "key17": "51q8CtC4QztLsv7sU4veyPUkWuHLqhy7uC85ZiVw6DpToRzDWUDffNbfBcv3CT8RMGP3UpUDbvujfxwLYNWo7iTo",
  "key18": "4S1scJAq6qseNKMjZshte3FG7XesCiG9uNwwVi31L4TVfYeCrW42Bh2VBSKj2JxJUNDytCG8WoKwC9ccQNLifvyw",
  "key19": "4xypmPoABRGpyqqoqhaGqyQXVb1J6ysH8eydTPFQ8B5LKG8nUxcnfZuELuMnQSFNy1jqgiSG2pJdfynUuQtpTYWK",
  "key20": "5wK9BjaT8A97efjZSSi9o7N4E8g3sKjTkGistA93MNZ3LUkhZCLNqmPtAqKCAiAjGxgrme8zDjsuEKf9XzFCAV9g",
  "key21": "5a3uMRnjW2EzFgRVtZuZR3cdPYKS7dfrt2RUb4FHKwpjUC8xxAmtnmKsXxonG8PJSVBWDP2gNC5up6RwCb7rqB4B",
  "key22": "568y1mtdMeXKAxHFVU5HntKx7g8pHMwjMjdEKNzyN8UF7gPSuzZr722Nk5y45WWCrqNf1s8GqWbkSz9hyRyJo3zJ",
  "key23": "4cRc9ckMLkr99C9iq1z2Vyi5LRJusBEiiJnTinCu3ZCizRiupyVn1cjDnx7bs6LFvXdrrMijzBXqyoLj1Vo4iudS",
  "key24": "3Kxvf8RSP6vMuyBBZqx9PpZCoZ5bXPLwmygxsbg9ycHd9xgLQDLTFwTmg9CsbG3As8AJLT4XJ2SSJcmbBdQ1Rejv",
  "key25": "4f111GEnGgL495n4tWqnTQtY5jeJXizUsYu8mYkivx6RRGYzgHWA6NBW8LiTKgTzkgtkbFzsQ68xVsnqKkFEg6W8",
  "key26": "5dBcVRKrnsrB6vBS2rXV3vmkdku873WX4TchL5YsUY8XYss7aoXhETTWkTj27FNvwRdYHNv1UhfQroREBeEnyBgL",
  "key27": "3Qq8pHzDiCqfsFMR6gpkzr4rZirRoBUrSVNAJLFAdEvx323LcwKDpqRo92spPSSf6eBUGuNxjggc8MUdFwu575NM",
  "key28": "2y5dFMpSNKJtfeVtJkzwsZoGZ3dsdjwSQ1gaRsPRyQwKbgm2Z7aKJRkvaQt4dGy6v3obEERZ3RMA5awBEaFfFSZ8",
  "key29": "4a4B5LYf8azmVbRMnsd84QQpiWVPp5qixfZ4UUftw4VR6UftmFGqQBPVrghyovkgg6VEZatQMuFfbjn7jLnf3R1t",
  "key30": "2KPqzABB8XmTRJHTza6LxTF19zTNaULYKHNeHftkxWG1LyTqdmybUrD87qJDatnyoDWgBPxgZAREXTzLURNuqQSW",
  "key31": "2K2gBQffxbKYfvAffaJ2nX7KfUJWxFk7Mqse5k6oET3Bg6nyZFS5oGZ5EqLL6i7Tx8Bk7TYdwWiKyT57PW67FrMf",
  "key32": "3Zpfm7M6cgP8YsjScMdgyLtALRncUSPt1qU1iV7s1wkg2BTo5An3GVddfnpEq6J3fn5d15N8ajZWenhRZBQhkT1Q",
  "key33": "3g2bVHNBTaMQF8a8bScLhzVrErm6mZZFTAKGSpSuM3CtADaC4gjB9CUDE8VhwV6G9AtAgSZsk5uwV7isyXY6RkXE",
  "key34": "4tohKszCGHtzcNgpvaLkqA9uL11o3NHwywy2frqCKRSq5GMoiPpi3WZ7QWAFeh4UAEncKnixnH25LpE3GqMQjTmY",
  "key35": "2nQJ6GEphn7L4FJk487PVxVCcmpKesSSVkQ1ZpbJWEzEDhrSZADSiCzFxbVZKhe1SkR6mzcdod1yChCHGRh7WZK6"
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
