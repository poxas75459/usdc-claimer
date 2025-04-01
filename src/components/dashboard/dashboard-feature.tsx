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
    "36oGUyupyNMcpZsziCi86XoUoyzSZwkAC96zfk38JbJVwSKk5s8KjctDWbPu2LLxoPPp5YdhvfBXNLgvy6m6NYEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MYVLv9epNRMEDY3FgQ33UALpFXBYceXmCNG2yNyG2FF52yLMU1memqQvppa4N66cbjHwBGMnmQ3z1eSMZhUieD",
  "key1": "12V37j5TRyRL5snhvxn8GJdHctC4Xa1TZdGhFr6GVsjHrXJMknFcubkThN77yxZbpMGFG2sAMXdvVTyoDmKQJAF",
  "key2": "4QHynMkpAyoLKa5GbPmtBdyXcu6R7zNCSfdwEoMqmhsQmFM1kbULoBQaBgCTfMHpbnN8WShtwYUzjyJEF7oeWPnk",
  "key3": "27PEVGmZtDbNq18WUw9EbWEoMhxY4sW2MUuKRyuA5yZeu4j8WdcWc1k7iUXqRXGqhaS3URmswvphbbxPTvRn7vWL",
  "key4": "2FXDs53HUKd4EQMU81wzUeMhpqz95JFnJQUFRxfuQxuzV8gtbZYe8YZs3wMUrRnZDrnZ3HtgXdoN57tKvaodbbQ8",
  "key5": "31RCkxp9KLjSPhEjoex4gop2xpBL32UaLkwXhgCCJdWho7t3qEoZxfFSN8CqMyiT3CcSU1TRKe1PD9xV35o5fnko",
  "key6": "38euqpe7pdP7aATAnnPnKgdJd3YRe62iMSSX2vRsihXupAc67zZR2xUFH2K7grGjzPVMnivfACPKid23kphRJEdf",
  "key7": "5un3t79NwbFvkwtQCymsQvoPXqCfwPaj1DDPTNb6z8FgQZKuT9Zmixpzd1fUixErj2J9pJqW2sZTEgDrCCfxt9zx",
  "key8": "48ESTQA6kqtMfPHwaFvSfyEnFTSiaFFmLsfcgeLLRhGBpjMWGBithMW7yHumAbZ1bXTvEwYevpZ3DiaEqrAecA8d",
  "key9": "2kUHHVFTHxLLkfZZNLvSaoFdvy1RuAzVejKB63pJCuKM2d6wuk1md2hy4CnzHb52AkVMm3wujsR5MExgjUgNWwq",
  "key10": "23kcNbLdnQdMGk62wbCEa8eyTYtvYwNPNgWd7197LBTZFP6b5Bp5MXBacbAmUXPGMwB5Fby8xnW6TBVW6h695txF",
  "key11": "wFhZEr3GMnaJGTdt4a453YDFrQa8W8vnpDZ9SN2vNxgViKdnypuRpeAMThGtzy8uDo8F9AVLR5VQre5Mj67PDvN",
  "key12": "2ikYGdsYHgnGJB1TLgJkqvCbgzeVHssjGDQG3LkZoNHN4WMQZXMkBNgWDFnWz5pkZb47rHSvKTKKNZg4eUAQnzvC",
  "key13": "3rUvBpgLkdDD56pRWMthPj5fvdgBHgGfKUtFKjt1sC62iJMLKy95mqfYjaQubPyRZkoS1kDLjxKESjCgMhg92vnm",
  "key14": "5pvbKFMpTc4yKqqzDVCiN68c7bRgMTrcgL2WBpRsvJ3g5tvXBvaXjJ2bEG4FaWuh3RbaExZfTmeyVJa2yHU1y92Y",
  "key15": "2ZmJgtia9jf5jFUv7fP9XeufJyGwBYKjapMVTtpbJRZdJvVnseP6a3VFna6VvxgT3hacosgwLRjGZf9mAzmw4AbT",
  "key16": "5hbvEg7WrzQS5Zo8sdo3bbW6CfRHs6cpVtYMJDDoibh6jXbrVQ4D2NBh2VYBJiiNX7wApHDMpFUhZVtbaq7LXXgQ",
  "key17": "66vYazbB5wNdzWsbhqG63tGs6veA7z2gQYKeWagjyS7TYbpKyDDuqgECQwX37qsa1K9i34SWtHZi8spnZUQHZiUn",
  "key18": "4aXBKdReXkvJNPxQ3EfVfmPY1mVcJRCW9z5QCNnQU1di3KaKSWChqwUppynEh4kSWgH4GESegfuae7f1rYZRZ7zx",
  "key19": "63eve7c359SCxABhdUvs7aj3M76JersqMKxkbQ6GZKy7nngHxS5dp4EycDze4yqeS4zGfsou14CuXHreDoZPRE1o",
  "key20": "566GkvxMhLXAdyKMyKycCGWmukhQYSQh1wrg4NrG9vgXwJQpQdspYm1sGftGytjV9KPCujv6AUg3Zb3PnhUabB6y",
  "key21": "KqrG7K4RRiF1NXwnSWECE8jUAoSbrvCj8taiXUHaVgfgP3HQqHGk2b6tfsaQGz3Jk5fNbt5DDUrBgX6yf8CKZhn",
  "key22": "5QJQtnLDPQs13xPkbWUdByAKvai9R1fSJM2DR5xxY9cQ9inmN95zbJMyorKN2cjD7mC97A1J81oHMHjkyCxmnrXf",
  "key23": "4e92UfYGnPp9sQb9Edv5Zv4cxA5nDsgWXGZHCRzbGorskBWCwuTLLCZFHMrRvBnUiPWDLmzJsb4PkDVLEZeBPLBS",
  "key24": "3BpG2ZMPTm6nvLrPWvhoVKkqVDyGxsDMac8VrTJL6y1oisp4jhfPStLADBnBYwJki4wR9B5oc25P53DR83KhJgB4",
  "key25": "SvmUSPmVR6mzNeT5boHJUdUKXTW3XShvK5x1y4B8BqovDTDtBM7df8jrgj4hsA1kN22EBArhk6kNTGSEpj4eKuM",
  "key26": "5vLjomCuBxfiY2LVCeVoUD9oFtCn33RVARTZqShLH6RaQLcGEuaSx4zKUCyxVjMquywkAynm8P4SWzh3fzDnVpZ2",
  "key27": "23rY81dpsYrXsNCv8ai7Nww8mHfKZbDDrKGoEn3mgYX1ZNoaVECucyXvkAgpSGCKrNfY6PT5drGxgLjdPVs185HR",
  "key28": "2jnKonedNmfVcBACA4iEmnvF6TVHX9RrGWJkjqav4iR8LJy4MPsPGJwonaTsFcXd5sWSqckGbmhaTAKcphUuRyxu",
  "key29": "2HYrcSJwuNxxFeg5YaP28ZNAR9YVCGcuZuRijhpx1kUFTcQpod5RMzDY6tw9fjKoG3WbWCHXVUEoGhUGKH9FyeBF",
  "key30": "5Bvjz7Jws1hsyFqqoCFsdPh9HxsBHxefMKoxA4Mf7mmZhx1pE6JR15hcP6YWn1NmkDUxzDat3nYinSEoYASErihJ",
  "key31": "4VtPfZKqAK2Yy33je6UFA23Uyk4Ft5swepw5Umx8veqFLYWsXNWJmMdR1viT3zJ39zCqydqw6uXd5VMihJ9yTgkg",
  "key32": "2Thoioy7xwJM3mg3jxZ4TxfvXHbQ2X83WGERbCcrzS5QbbvdEwG3ZDmvmZST9NEjLAT6Yf81xP666bhup3dVt8ke",
  "key33": "32wfxV8X3oTLyPcvcshpj8x14LA2p1Pb1n31BJ2TuskkZdBwj1RLYzNgXreBTDTDJcWXde1RFZLnUQ6E9meKWNVS",
  "key34": "2dwoDheVNYkdweLMvUpdB26JAU1jAoTXWZaLwYM9fVPzo2pKNbX2NCCfDJ6sthxYKXpt2YrfnT9hcoA9RzZ8Y8dk",
  "key35": "jFPCiTYffJVzMZzC1KqhQNTzpztaihoL3UsYydpmf3UiZDFW2CatjjAr9h91BzQjhsf4aU1f8TtqNeWVf7xVep5",
  "key36": "3XuWSTgzVX8r9zyYJUPyHsEhRPnAHaVMYLShBu2MZKsHYUaXTj8RbhS9kLAmhQdYpbrWtvvv4fXzrMj2sosDgdEC",
  "key37": "3dGSvLUfGUuHpNfWHYDSy5rmicoFAfqqCK8Z2R39CBoega3XkQHDPdshWVPJBQfSeSbw4xV5QdJWScpcpuFnMeFF"
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
