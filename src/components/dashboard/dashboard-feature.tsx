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
    "3g9r24uqxhN8N2WSCM6ZEan6ezL9ssmm5zstLHQDLThXiXasmCR9UyhEJLubY4gMGfDwe8RaxoqVEeuPYKZfAEa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JoJEH8XGSrErQ71HsQiiS4Sa7fLCKNrYanFdqZ6zwftXLTrb5KrmYeuZoaZAo2MRnSpA4kqCMmrFxcz4qPkMbBj",
  "key1": "5RnZvtgqXErDaxs99aRdZHHfSPXsV7acQo9S5CJaJcMwJNhd6AhZhfHBpgxmWyYoW4qmUMHuU3eh44ihAwuy7TKE",
  "key2": "5VJgZe12pRJcwb4oZFnzGJk7dPYu9r4hDAqq61xXKAkvNKZugVB6CDsjHht8RY85XARXdbVyVqXmKPgxTsyGq9Hq",
  "key3": "4CcDNSCLkHofv6em6GkPTDvvZZrTrEkaF2F5rzvR6b56EDMfKwY8z1SadTXbot6vnddwR6xT1RxBvr4hnVBRX5jM",
  "key4": "hfWHr8m3MnWLy992j4CScpqrRBBf1S8Yd4pGExZsbxy3CnnCMm2XNYoA4XjWHWuEYcPPXtvx1CghccbB9btuzSx",
  "key5": "39cKejwDDKboqiGUu3FbXmQ66NomCLCiuReEPMqJVAmxSjaiQBrEgvXdyae4i9PEKK2fb4mSJL2mHCXpNJxfPPju",
  "key6": "5BYjrCXLFUwgVWLdDSbGH6HbPpj7i4hZfWMQJTKcs7cBHjb6JZw5ZuWfun93M9uDh5tVtCgoDKukYKHqK8LGawTQ",
  "key7": "33T7eCNxdmvXrvixXo7jE3NZ5myQaBnqwnGqJwzH726eNQ4ENNZ4moagNkBzVeWkMnqYsUnpDSy2A7ugZdB9Zre8",
  "key8": "2vQMYBR9uxbjsXgu1jHCsQseCjVTuMHXJ4KqU27eyAxXAEysKbH4Wtce9vWgcqLi6TNyeC1Dghdyezk1bvvadTen",
  "key9": "5wwCZ8GWqF8m33r1XiXtARhN8hMdVHCw2SzhxpAxacmXbKekiqVrPgyjG4odx9dHiKmceMrif6WK6C3JZjRDGzRV",
  "key10": "2F2jUA2sdLfHcHKvBRzSUzSoG7fnjMLkxN7RwsimMae5z1f8rU8NnULAxZott8M5ePdnsobK2ct95PFL4EPf4zWC",
  "key11": "Rge3WczSSwjApYrrPxGjGr867rB91VZHTqodc2GCjLfABD45PhYKJkKCEwEokT3qoCHbR8ocxw3G2Yaxa9nn3RP",
  "key12": "5RM3QYnvgb2bfHoGHKGphm8dWJZi7eNYDaCu9toHYwrrRnsLMa8S16ipye3xuVm1GGLxhDN11dQPt57EM4PpuaHF",
  "key13": "4CWGdQKGSak5gXVKwDKQC7H8fUrKTKnSF2wiKb2raz6JUtwygGQHE2qNmSVsmWRQ8tB7TqLs2WEV77AJNqUJ1FxS",
  "key14": "4fhrPZAe4HBeJNZ3xSC1NhyfP1jGZZFudQxweKWhbSydmkPUPiBVTim75LvcKfSj81da2p5EX7VGU8hxkw4rX5cv",
  "key15": "49MayPKT7YGwFrezFgwqkanouXWtrEV2ne5tJhjQVujRuTdSFWzQvREgm46Z8Zs2eGWrqtdv5dAJN6wyVHyDFwXx",
  "key16": "2PpYd1iq45JyjykvN9cRBzgZG2AzndErya1M3FDrNYURmsqXKozJ9fzkrW2pd95hoybpqjYoKa4Y6cTNkVR7gA3G",
  "key17": "65QgfgkutPYxaeTQjT9hYy2E1J4y1t4tLRq8uFbUbUfq5jPLdRuYd5ocHpyeWkxXQ9Vo6wPBjseDecVLUz92DBYu",
  "key18": "2g2SYNUVHzzJFC9BvnZLTft35jPjWfsS7epbR2AiBfD7PQwGC7NQzhCKpgxvEDwGh7Tpvby8agNqbq2nd54RkH8C",
  "key19": "5VpvLnjCu5RqpcArBgWYaGb6JYsA8M2TFfD98ERBwdRVPnH1g6bXvi5RiMTjxdJzBkxBeCHS3QhN1VNPWjph8C2q",
  "key20": "4G1JVwf3EFBdTFhyoifx8wevvWFoQYBRRP49j5DYDbt1QeFUpRN2BGhNamEVeMGXuwjR9HScwebwYESuH6CNQTWL",
  "key21": "5vrwjgVCZnzXaFT8gVQuBbdyMopbZKqUbDC1SPzdNYBuL8HwZYD3WnGBsagHykPzpwW2AVfPJfcbgUjJNp4i1ogN",
  "key22": "kw7P1ptAq8Na3ac86RZDRy41mqBiu7d2c1UER2dkzvWNkSLGsUfSGCxSExs3o8zcGVaaQdDCy44UcJ1zqW1poPu",
  "key23": "9d6W7KmpNBh64S73GY7kF9Jaj6jZpXCRxcrtsb5bpWHk5Pk626zFDTL5XCfQ25w3djGTTTWLc7K9RsDtcNYp9pg",
  "key24": "2zyvT17Xhg6m6JoBK5uxY5HpUYE76GYjihfnSZxL7h3LbsZa9C1sitHjYKG5mhFs3W87FG3hFsqq5jtX1GHPWqce"
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
