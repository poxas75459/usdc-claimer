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
    "oL6bbxLHaUnf5fzUbuYjKXbK23RnMZYrueXtcE7Z6E85nKxFR1uXEfLVtbon482AxyYPLQjon3oDgWkubBz7R9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61FfjdrFg1enoMgTfKFTCk4vF1yzTF5FczFsh3JsyxWkGQeVGm2LV47hmKVucYqZ8hgJ1BfjtKW46AzDkRJUWr4r",
  "key1": "xjKiWqHqMS13xXRrmDw83j655ak83kcpea5RTAx8qWJpoXCuMiLpK3VFnfWMyA3soDkygnMKwpMd9mf5JmPGqqh",
  "key2": "2beFapSgnSwPKagLrPBDopeoHTeCrHpJzpgQC5wBDGdH6886RyKUUUAFDY4cJeUMa4i3ehcjxei3yAHvA1fLnsXA",
  "key3": "4fihURTLcp4UuUaDJJ1BhCB8DtzbV6pTEeSzqBzuaVA97XNJSu5rXNb5yEbeWCvYtYpHkRr5z3mhBmxSK9J6165e",
  "key4": "2JuuMm1BSFmpWeKkERpTzsXAZSfvYLiyiB6HDjWD3RGsrT8PsWftcDesYbGrterwdcSkvYJXVnqM3y9k63RXS22Q",
  "key5": "yN46d13sfUtvQTTSeX2MGCwgMoDkswjo1DPurn7aGZqoTTHRCz4Eb7y4sZcVtLAfDymXR37be7Ywf9wat3v86e5",
  "key6": "PzAGJtECzUGyzzvtdct9Afy7RKkhf2rvpZwJbVUj1ScA6NC1P8MVaB3RsWeY4pWbxbuHG1R3cSomSPtJanzLqxK",
  "key7": "3qLBKJGzogAqK8dfqaDCk8QpY5rNqtpT8dxoZTq65JUhfHpbu2GuFFggSyTQ6fAonNA64ripwucSqbZAxe7TGdoW",
  "key8": "42GmerQEJUUqvgWyS4Vf24FqtEXwUM8NrMPW9qqZ4yAohoyRtnkLzzbD4qoiLuw8CpcX8kB3aTsLvfCdMWXH71bx",
  "key9": "BD323cByus4w6uPhuqXH1zYWAYKrLfY1n2HzbTBqZxc4uPdnAukinxMBFaa8GUE9n4FKjWjVTaHhffrpxETJGbT",
  "key10": "269eroUDaay7Zvgx55eGRmFrcn6fLLRCcwgmFyGfGCkn7nTq258gsyMeZt9xcXa2JhPWsJKP3WaMLqZc2A4jDUzR",
  "key11": "3CEMTngALbgNuA7aCRjuq6EnobWGChC4mWvHEcjgnEzLZBgjtqpWPNpmgJtqWjXdnvXdyUxwbsr8kZALf2weRwH1",
  "key12": "zXyDT69L4eKH5AreL8f4B3qVnyo6hPVPCDXN6jERwnTHyje1vdvbKKvnvJB5HuVbqMZ1wj4U4ms44pd3PCRwk7W",
  "key13": "hKnBTCouvw7T9HNBEweUw14hu7erXcrXE2irNFqYC8P1LUy9zp4DaTwiPsrb1xABRpYikjvyKGFYPhPrDXwrNKH",
  "key14": "4xTVVDjGpabAd9NEua4yqLu74GGA32Tyzs7L3pVnDH44ikLnkuMLF3oHuNnbGSa5g61bssoVVWL3tY3xFM3cPTm8",
  "key15": "3g7UoBqSRkWqXHDypfoLwKNYnoNZNaKijY8rffDSQhHxzQtcvKyXdj63oCrkbAwfWsGeqpRQ6e58jm2GQLWTkj2v",
  "key16": "34aEZusv24CUtQUXdTMWgmfeMKy2BnBAsX2KE3t25mbNzUHUrhmSPxY3tDSjXrFHJAVwcLTg4i39NTgieEGyfAJY",
  "key17": "3oZb8fL5RiUVhmSGSxhUDCNEdYTXXJYraYWxqQLbESc8q5FUzw9qk7tBfCqcbiBDkNqZgXBVWjJhFr3d7uMZsKD8",
  "key18": "5x62n1uh8mEmE7aNucsAmJVYYLHGr15DQTsbEaxu5ULkjn9XyWWNTTcCKGyafsdy7GdnMbgzxCZ7epLjarM4QCha",
  "key19": "4EcW9wSBsg4vdeCQgDfQFXzc4s5EjpytsufGwgmJxKFNviyf93hwomeBiYtRFPJDBS9HhiivNK877NAUrFEXDqfv",
  "key20": "5KYifvMsi7qapiHNTYQ111QbUgZhWLesbhKbBzM1cHixg7Vhp9ZTTaw5SseweHjpYHqABnKTH75Sm36ZR6jEKH5S",
  "key21": "36ArQGa1Mhn8LUs4UyKsyeANVDCcxfBKGiTAKvCTuuSoV5KhSo1dFed3RAk2hsCiB77evZQosx5jcEMEbsEWm5m3",
  "key22": "5CStQjQvZ3GGGEoNue7KT29WYXj9uKCMksbXxuAsnU9KrfUyMszMhwHooLnpKsAc6Gw5VtEmvsc1VsNpiDx3G9nd",
  "key23": "2a58KEmkY9kaGPLitzLaJnzzHxFkGJYyKVG7G2T6rNJFaG2dg81zhRnESC2K3YhfD4ekjfcJgnQJUYFjkKWUyMPr",
  "key24": "5CUSxFv6pgeQ3QhgQhQQvfMdaQsuhWvyoUvAWzE6SvkWWSUN7cFz7qxKJfpWtXSdjdDzt8ow6rtoACAvaFLWRfb7",
  "key25": "627AzpoYLAgRL6A2tH34Us7cTdKdxeUFttSuMqbq6Y3dSGXvz86VVQKd7hoF7qJHj5USerZKKvbTLDBAb2JZbNSx",
  "key26": "5h95tHFWhZJsJyBJNS2bAokWWtkvJqovBBepaSCDsoBWgV3XSokhrtPPPzwpUWffzWx2GXxYzuXDqG5WGd5WHim2",
  "key27": "58UGMU8ULk8GRpqmVEr1drtL7s1P2XvkJAVXSmMukZ4vafaRgHsJvyTeXWkKppYczWikMKft67af3UhhfB3CNKGk",
  "key28": "5RrUMLEUq61HQxXBYZhQNZa4T8nY6Ls9Mq2txmnefpxZikuzdvJciak1KqV9yy1WzgLg8JQSiTcbfjP6J8crWHCo",
  "key29": "3NTGaMrHYvPHme9htr3uGeDkuTobHQHGq661gWxCAQjijGKhP4iKj3CaFnB8DT5BZY19Q6EeFRxkuJpmuaPnTucR",
  "key30": "4dTLizAvs6vUwdUSckgwHQM9FTpuKTCXLanjEP2mppDTnEysACahNWbauiF86Ff8AbvPMn77TFs7rQ7zj9Cni78p",
  "key31": "39QFgxADQ2Hw6bWzXGWheqYN5MgBXK9RMcnfpN91rBcKLcRuJm8hqohUYwLHmUWMJ2FkBLybwpLBaVUJXfcgr1rM",
  "key32": "4Bb9F5yhuf2aXPvB4NDkzFQS9J4bntkxefTbK3XyLSkQMCiBzz98yTUCgrtUnpH2HsSiTHk9MYRXft38un8ja2Nb"
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
