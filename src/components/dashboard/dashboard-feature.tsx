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
    "61p276JtehMVNDwuvVDbpk39ujG2fQtENvWj8BwS8dUk8knLpMiy2emc7TVwFNxRcjHMoH8MxxTELHcGkCkmc3qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkun12FXaS8yMpQaJDyZqJd2e3bz6rAF34YSsWbKpr4fxzpgFB6EC1h2Yws7a3JjvjynbNvhBASQKuPscSrnFh",
  "key1": "4r5sQXavQdKjWTNQMcK6vZBA9wLWEA99zHUhR7Ba4hkrCYYiEWjrpBfoV1rMrrjKJUXzWfKT5Ey1AsAH5JgnSzaq",
  "key2": "BBd3441LQ5BP9LYw1H4EL5qzfpyrjrZYGixW868QXv28ANbCdV5vvPQxvHjMXuVPCsXmDfCajrcg5tdrdrh7Lod",
  "key3": "5tZnGRwZrTS2JyyNDNdxFjCLudTYTjdbmBdMAa6PLjXEGKHZiwYHw5kH3tszMSn5TosuJKk3LmaAc2puYgJ2sC3L",
  "key4": "4fYcPsT7kg1YFwgryNPQzTzrqbameACUB4BarrTerHMZeVkerJL75uYLvtFHDyKUCe6c1uEQum9xmkwg7b9QtsDi",
  "key5": "4v8iJabceryxrikBoCq4coGHH5hVdGXcEu2BRuvDKLme3mCQ7CDJLHx3gUDebYqDUJJh7jiH7SfBj1Ywfoji48VQ",
  "key6": "2VVxjirPMTuVMj7QC1eoYVEFai7wXBLh2LWUt5CmRAeAoVfkXDMvopwcrVTsqJqkG22aJ1uNtvCZYqEbEskFuMs7",
  "key7": "2v3DGrGFVzJmnCZ3FVKghuW8rwsNy13cpX4nTyrwLaT3dmwjd7nFJa4VBFsHiHcqQpj9pzQy3FVJJ9FpMY5pC2Pv",
  "key8": "4RMreTwxBJQoie6yo8YAuHXGqUfvBcRvG9CvrBLz8gtKzJ6JBYTpcKAjwL3sfhHB8566Wb26UmSJgW3e1Zpp1Kcz",
  "key9": "59xi7eHJxnY4kQHyV5ZFXHcYVNux684cQE9FSF7YmkoiAkhXEY6S4VM7X7azk28q7NazUCaNXRdeiCmsBmAGbKWw",
  "key10": "22f6HJzK8C6WZCw5sctDQ8AaMRpZoBEDCtwE7Y71W7KTGXqy16ARDpZqGeBeerPKbTFyYqoBKC4AAjRNDipnwQaB",
  "key11": "2xuY7mwG3kW8bmK7ToB6atQ4T5fqGL8nFK2xVFP9ztkA4Ue5jmQUt3LSfRGJ7o64oTLqaeBt8hSp1SKicbG6ZuUZ",
  "key12": "3DLLEz7vRhtSVmasBhxdw25Nw5LqYk72fvxBySF3ftSduAkmCHBgANgAERx9se3pqwyC5sRR9NZTfgL8dLiAvwva",
  "key13": "5TYJmpMUf4XLLJmPGZuUULqikGa8CLF6a46iXxCXA8cWWqLJhNUpd8FMPjtgZVFyQ1yQqPeQzCziE3AUbsnNVr98",
  "key14": "3L3gagiNzqNxNtR6uHGtQKasBvZKjq79KBt1ZvbzBYZx2QdXZorqWWnxs7DpJArrRuwkJzRSp1JvyyH2rryPCFNi",
  "key15": "2AaQ6hz1XtTentZn44YEUqUGGL4wxzn5f3q6kTmhGg8VgaervUZggb95nNk2XcNUUWFnWKm6dPwa96qkBdJG8gaA",
  "key16": "kjQnmPNPHnjx28iuPKWz2hjtbCB7fiFjUpJo36DFRqnrwmDZajztcYYjbUHfsvMAd1LthomNrBQG95S9ymLHYXj",
  "key17": "3wF9wwXVNpxMfjFL1mfNzt5fqERNUwsv7TeXUdGCJiUHYTPQHpwUj4FpUUQASxJzSZiR41UjKQkuGPPTCXaRAPU1",
  "key18": "5USsSWLJwpmkNXrNrEti4TSTBFs7cwr2tdgyZ9vQULqz4yBfKa7SbEfWM7diwsStZ9jnFSi3HWWDwmoGTKUhHKx2",
  "key19": "4G1zhamH7YP2LVjrjRiNQAexKG2fstD1XzwRY6i3DtHLcHLc2RMDeNYXvuUe7DoDdeN1ajQMywF4R9ZpyAPDdrj7",
  "key20": "35C7X3PiepX3iXZ1zynTJWUpDeYBWtZjqgRN6GFn57cg79Zpt7czryYfziw6gx5tbyJFq81oCzavzftdM4RMfe2m",
  "key21": "ULke3dBdp2rt9wETKy7dyxxcwJvQ69y81Bt46oMbeR8pLRXzxaBnmwwF21WpLLsYcd9RyZ6BRgzTEiosMDsd1y7",
  "key22": "4JdwCVkvdvCi7dYibLDUQpySnXyxBNjdwGbnrriG5mcXDq7Jk1SwXV2pLMNgS2LpcmY62hVh5nYJ9fHoqMQqGjw4",
  "key23": "2FPRfz231nT88BVUKcePmVagJuo9hpjqa7FPnyoEKtRbNwAsTudqtcEsMeKQRFqqpzGSMztHYG7wgdo77V9hzL4x",
  "key24": "2hiVeLc9EqsA2yDG6UyunqXg5UxrpCWrjRxitnDVFizit56F8MzYJTbZrJzHYJQKy8vgCkrtxDDvy4BPYWgCAgcd",
  "key25": "Z1LqNqs3WnodMWhdRiEXteezofzsh2QaGuyxDbp2iiwcybDu52PdWCFCg9B4RBB7j8HK7WSXKhK1zyfzLsTpHPv"
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
