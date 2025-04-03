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
    "idCg3YGV7cuyFJEECzgzDbmtk7HXGQUGjMYxnLgAt4EWNd4bTW7kGtFpAgfa3AvXJnfzKeoHiht4R2oLfKBpCSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAbgjRiDPSZoz7sTqdhfz1LdsqPxZarKpcQSHw1dgtCKRrz9zUDRGia3xc1HuBPUXdmrqPvysK7GgMcxdiQrigx",
  "key1": "5a8NyoQRYZWbEDK6oA1SuSMxhkkadTRrBQfsWezFtoEUrhji17RpeFgcjDn2TkYwxw9sxDv1k8qDVcbnffEf9Qwo",
  "key2": "415vFkH4fdvcdoxtrkAHxtn3rdgL24DMHUqFPmzyCmPoPLVHkqTo3tZyM3ifpCSk5jW7V4AYXcPmunCsoE4RKrZd",
  "key3": "4TVNGivE9mMZKRF8WSmjoeQJHdqGHcx4ZhZCwskvwdehBkpqAhzDDZsP7hucHDNkwVdf6qpSWYXmM7RbT2MTV5PQ",
  "key4": "4bkQbeZSrprQTpf5rTrxBbTtMf52aGojNT6ukrwwyGxDLpER4gQTJdQwkgVcS3fTeDHkjgGbBDniAFFgD1LnUqrX",
  "key5": "2rwgSRuPTGAbjuTrVrB2VnzYdwrikFxCZsXAzzK2pNMLK43crbbF3qofUcctwDPpFG83ArLNE2WF7mR7HFfZYv4p",
  "key6": "2AsHxANxXBd7ne98qizsUECLLuxHj5XEXprNYwfdYfVMvV7GnieNBp6AN1ESkCp3Kiv6VCvzieeyLeRJrPne28t7",
  "key7": "2JtcpJ2MiQ1RnZASNPE74b1hfKqmjZp6gHsHLaMyDQ1xPxv5qjFV181bWU4jnwpp8FqqfhpXDKuBVCdgmCuUeboX",
  "key8": "7zBiiyLzdV7vdaeR4pW3DYD9Bh3VVq3ijsUQ7ub6cbXG4wVsPmXTCjktz2WScfDdPwVhdLtA35fBKMZTGsMYsuY",
  "key9": "g8ELY8t57csshJtDW78J3y8GL7KFEen8YBbybKYuGQQwKE8gWm4ViHMLbbDAUuL7W8q87hjxrAxfki8wKTyYM8Z",
  "key10": "GrwdyCL75EMFXZNMQrngN3rHWFqbXtA7J9tVMFrVxGungrUZ4tHWGpkShAVLmsNVi3RoPmyBDHaP8LJNxgSp96g",
  "key11": "3qMVk5WcX34GwHVFJMyb4sdrpMmPGxZ2BAm2dsowsa7QM27fziCwHkBisPREMR5GLebQGzPFgKbvgNpEmwqfUf3L",
  "key12": "2TpngcjVezauTGRsxkWRSgb3n3AjwoGfA9RtSR28XhCkNAHFj9nhM5KQEQ2uXjDEEFh8TDmp9x1nZqM9JvPu24TE",
  "key13": "5qXqf6BZptymczW7KoWBJormGsQTotLFtTgHwZ6YfbZMnEQ1tvpoZ2jHvxQQj6TULxtGfFYH7DTTPTsg8rhvJ4mf",
  "key14": "3rb5vttfQ2d11Qyf4XK4mhpZwqnatvxyap5zk3bVbdxzQUmrYm397nu86WDttj5SpR9diKkvuNPdn2Gf9t8WGmb1",
  "key15": "21RpCMsjCYjNrYrSf3q9c4SJn58Lmee8dfRDjeKch9quvYbhQYKaQbFYGopGzXcJLmPf8tBwbXTcNTyM6vmrXeem",
  "key16": "4PVFT4uSSjhemE62Skw8njoCJktQK2mFEzGXhhoue3Ycq9As7QQ3AU8nFd4jXViaojZXjqTVML2JA9qQ9SWhXcRC",
  "key17": "5GZEVn99pWoPeWTx9MYqZm3oYeZCcFJVK7DrDQLLvWFueHyduCBRrTGRSZtnciVSsmzqmDVXg6tyD6ExpAJzeaoH",
  "key18": "3Xbu1dhEpJT2xJ3EABCATGHwZG813yKz3dyoCDQo5CkyoKmY2ByDyAYBtJ6tt63sXB3h8GGiUbUWfVWZDFXC85z4",
  "key19": "5C9X1ktEK5vP9brN7CYb4QsBMseKwyuK1ARkM1Fspbvu2pgsZ6oC83KL2UdhDpmRUKNXchMmGAuExrgHJh2ZKeuU",
  "key20": "3aCu2awAGfZkrkJ9P7KK4DHJq44SwVx2bQfaKNFPkTPxuz6TeFpMNoy96YLirkNmDMkFQM54Cs6828yasLxTJbUh",
  "key21": "45zwQ8vKhouYUMp7mMcPkzPmmaZzC5t3PaPsRMKW6Snj6jfF6UrbcmhqUyLgKpJstjxhNqjXYeiRBmMe6prKhzru",
  "key22": "53x9pMoXoySu4imgjcbfEizvnERjgHYLNwfcJkpEZHfQkmE6P5qVngXEoNvdfuQu9hsvvGnuamUMdUCWCp6ci1xF",
  "key23": "ZJ6F9tybeJqYB4qGKDegyJZKvHJoAWPKXZZk78Uz9F6AeYAj5MkHBkzNq82jrXhhiFxK9H13tbSxHsr2GrTNDQG",
  "key24": "4i79Huud5HGr86Z5Zit2xzsw9oFbP1YooMBEncAQ4unsZCZQJSBapkAc1QFLRWhUSSYYyVxDkiCdkzu2daLNcoMM",
  "key25": "2xUfbZsM8pxymerKCqvPE2SMHTzmHc7pjQVYHSfvA8UDhG6WUEwEffZHbWUzAMqb7mdJbhEDhAUGr4bMvCNGXUiA",
  "key26": "2G8mKxf6sz6MKPVicTCc62RCYPhEWkED9AvsRDiRdU1bu5CGZZj9fTMizNXvpdkTuEhEZwXyD2AhyHCxFm3T8J8g",
  "key27": "iEJ2vbbJg88Syzi3fp2karED149pM1jwCbj359vXZzc8pc1Fx3aX2Wpsb7whbthWVsxzTTuWiHd52mP4N3SLtwj",
  "key28": "5zz5ixYu6mY5huHjg4vwk5aUCUXqh9uzuNmGJt8VFP52okSk2FxDhu4vXpwGw7kR5NiTpKXfSzcPYZCwWgfzQWr7",
  "key29": "61hZpKjuUWABKMyriyN5AUumxPFPueJDxf6rWD494uzR6e8sgDrMRpp6A31NzGSoJFBWB8HSpFHkXy5SUvNTVTVv",
  "key30": "2oHjm3AbGo2E9TFL1NyniEiqnZitoCfS4EeJ4BkCpdNybx2zKKAm8hz2fphN4JFYhafoBJqTExVmKsg1qwBvgqT9"
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
