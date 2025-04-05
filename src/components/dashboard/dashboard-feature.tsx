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
    "2wNqp4aLuzeJXYuZqmUmoWqyMu3gS8jeDHxmeX4LarvFnHvmp2N2qFSCtbHx6NckMd6TbkXAQzYiFpEPPkE7vtUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmLY5gryjDK4v4yW2RLosrEX4h5h7pc5s5PxAtb6sJxf4ZtGKVqtNTNynfTqRp8nWKTztWpyv4onSNjpd5pfTSq",
  "key1": "KvPyZTKhJj8xDxfGevSR6WHtCZDWZcSnxokScpEFuAEQGgHrLiPWeW44gCdCbEp8BNXrSdy5Pgj5Sn3YPCP2mJT",
  "key2": "4WYVhqmsteFgJrdaE5rgRcyXCB2b1Ucd7unkSU8n7QHYZSZNif4wDmpbpY4bWCEMKWG76Z2Y5E9yGuEFe78xWnKo",
  "key3": "3xUsZatZj3iNtMgsUQFv6udgkPHhwzwyP6AqXFWK1nKz7aRho3rL8NyP76DsJu5p9iVgjTNQM2e4Z62Dg4oS24k",
  "key4": "4jMLeKSkLWSJG7nrUMkmsbSFTGcZtiQkrt3RWpPFYiJ38NMz15p2BV8N1HmKodh67tN4NXbmo972zzdVZUyKA3P6",
  "key5": "2Yw9UTiQj6XsmRwpCrDCbDy1A1qseqbvuaPTe6T4AEY7zmxvagoLBDjysS7e9bTTtXWrFLpZizMPB9Y9ZB2G837e",
  "key6": "CrhmMNWi3SdH4JJ1UL4hgF23obGmrTbr8QZyk6xQKVu1Ky83UnuZ111nf62rpa1818vXGHRp5xYpcs3RtWd1njA",
  "key7": "53gkAp4KSchDJgGzsW3cCR36sYbBq2vQrNKoitHXz5YFnsNQVdKsbDLfFVzM6NtFzMCAR2nEyfL93FWbd1zZeZPP",
  "key8": "4dqknHJK4CYTLYnhsuEkUDdkdTYiKhfQoXMQ9D8j9eziY5txQV4tUMtRda6JChqNaaseAyDwvVNkrvrE1dnPjfv5",
  "key9": "4jdTbYSjwfqDYXxpU1drnxFKfhR22XyLP9ejJjxnJW9vft4fbVq8mjrqwFuoTaLya9AsfwsADbnmYypckbop45H9",
  "key10": "5ZxF2ERUuyXFH7XmGv5t6axRzR2Ls3xgrk9KHqdENBwsPCqxhFHdHEw8q8Q9TiSfmDmhDFn8Lzw3A57MKouc5Skj",
  "key11": "4auwiCc99fyd3auFaPYdbZJ4rGV7bCDukysGRPpJV2jbJSbq5VVxdHr6V5StZ68kRPjQa7cH9H9teyB7AYAqrZuq",
  "key12": "41Hqvz3WMSbkc8KvJtCuD6uAjtcQStbpmYGJSgjAhPMZtmyNXWfcqfEEKrcHZcKBCMwvjpThh7wAxKgGSnJorP4c",
  "key13": "FHJdLJKsrjLAdFSaszyk2V6q3FJ5y5YtJtwnC8b8UhNQYMSYinMc3rXEcLUtEuDdAe4CEKkVX9EZYCEmnFEHYfW",
  "key14": "4asGLB85ERCFisbyqZkagzktGAao29YaiCgZKhPK2gTR4p2bJ7W6Uv8NfxHKWUntRSRHr724PunpUpZjGWHjbj4g",
  "key15": "2CHT3Y8kNHmZxTBATb4c1kG3s8mv8o93ZTSxmU1wYbqdJtrnwXubkXwecgiqT3JXTtHyfC2zYnYFgfjs3fuzDv4R",
  "key16": "5TzxrkgY5sbCtTwsheFQ3iKNJyPamV3PZWivoygNrpmCAWKoAgsgkkiBTQUEh3wZY9YTqYQkxthbW8iMkaHih62j",
  "key17": "3Srf1pRNfihPuRqpArZQkzweiqG8kFxs66SyX7DoHrSJNStdKjjACC4ojVuUZSJknNN8p2B5sBZU9wtTYhwZoUoJ",
  "key18": "ZeEg78VtnUrVipUEht5q91fMhnaxtNAu7TdbU2zHGpGkG1wEGEdHcZeZeq6LbwLZyQQUj6vdivdJs158B9B5b4b",
  "key19": "3BweK692uDfBaUCoaSe3G9J6cD8TwNoViuX2b54ekAV5M4QdiERZu8pN2VZHwXnaFrE6a7vWWbby4bdLC6cT4wAD",
  "key20": "2ciUacwgimgxhuUZBrMrxPsMgXR1sFFEJWWsizxpNvRcViLuTj69VxPF2XS4KdywY1pYzXi6MqDhW6HxqsdQH68y",
  "key21": "5v1pAbymLgF3HZmstfTSUFQKwhKWLtfiw2QCHJxwMnpTTAszSBBNgAGcJj52bE2aGJXYbnVzdpT1ASpqszcRWyQR",
  "key22": "5deKE1ef5G4rjEKMZQiesaontepd9XiBckepNLiDqRiquwWqHXZu5xfViswuoKpusnJyCoUXSCjAvrwCEctuxtWU",
  "key23": "5kZZE2fQsNuETkwwpCC3Rqwuc2NAHtuAruF7Gow6YrLb54wkZ89XUWsc5TTu2iXG4mnZk9uoyuYEKwDW2rsyibuv",
  "key24": "64LQpeBkoy7YQZcnrGdi5ftPcVSn4xLhCmqcLkK7DnzEBsd2DWPuPQiqLK7Jv7m3oqi38dpyqAJU311pcrrLyNNm",
  "key25": "4HHshzeQJ6XM6661fUfu1fCYsFL9kTvVpUBeKYCgmwHj9vzQDUrt2sQBTRuQvUFcCgrKDdPpocP1crxnEGezRNy9",
  "key26": "23hiM2RmxKujuTcGhoiuTuZqsBSbzg9YobbK7GGKiQ1hjqDwLZyLtvC8qViz29D5U7Lsnyx4YBS1P4EDiinRE169",
  "key27": "5vNpHD9peBhdgpduZcMe4mw1u9Ez7QvtRAdfUVAu7D5HPbDuTKRSgRKqHt3kJCJuMuyoZ2rNJDnezAFuqeDXhwDB",
  "key28": "2Hg6zHuAesmWAT3LWjZmVNv4sjdBqLewzUZ3VxjURPV7scQkoEjqKHqxJMGrwgiTeEUuZ3ZbYxCgNyPB3paqPgfq",
  "key29": "4fvWm9NPWhZqgnBF5mVmSu3Ygrs2pbubjGsNrWj8tXrqfX3guiEK5XLvFKyaCaczgn74QdCYakDfkgLf3rZZxngq",
  "key30": "4JfgZQqVjrfZAyqbEnB8CBMZSjBo69qaB6v243LDdRjyeUAjhk4xAkAd4of1ZWNCv9cA1Y1ZQyaGfxtBPJWyLFTe",
  "key31": "49dUMDX3x86uAC7qJq4oWUBAZ2bj9vgiXaRedTXy17zKuv1Qoxput4m2EZBCe1RrX9STpFwHPHrPa6CH3SazRwfL",
  "key32": "5NTdY5y9C3yWNY5FmMThF8ewJawk6PWeKoFmTiVrf9TT7G7C5kzyCqgCz5sujPRb2VkKEd2E4e5Ud92dLJNPzh5B",
  "key33": "5EDBuuWuJLjKjxPZPp733GUrT1VAyVt34njrWqQHRcJk8Kjr55xqM6kyU7vd6aB23DQbhGGfd4cvpHekaRsDatfo",
  "key34": "sER4Wwdc3eQW5bZoSJEotLFe75ZeieG3GQJM9DTisA2MoEZeb3QdtnR9d41eqGrtZRishJ7fwFhq7UPSqQgAEvj",
  "key35": "5EvouSLo792qeMsvPxmA3YQN2T16PqFCSdg1yd7738N8xHLc22p8wWjwv7KayWZA8xV8y4xfej2DQBVR8ZqqS3L5",
  "key36": "4W34tDEqspkw5tyXUmav93Ph6xjsLvGnG5HiqTC1x3Yjb4zDhTNXaKV9mzxyAMCf9SPpWpGoZVsG3qLtXVdDG6AM"
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
