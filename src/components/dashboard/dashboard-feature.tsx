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
    "2FUVGY2LUwxo5voBUwfL9VfmWzjKouRE1WsbN5tQqFpUBA64PVjStj7ArNNuu8HU6QR2YqjiwMLwirdA3Meprj1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upXVRdfaojXKFB35k2CdvK9TnoDifSHxpB1q3Xrocgv4R59CbpvqyUSQkxpLRUg8dvkx7dBsnrZVQ77Sdx89sQb",
  "key1": "41MKp5CBxM3DGYSSzVkmS9dcSwhZuhMyX8JAjhDqNrtiwWnyZDr5RWDjhTtJx9i9KCq4yGt2SEHdYHq6YvN5pN3G",
  "key2": "5hRV9k2eWr1G6VQHZe3uYXPqPf9fDEhiNZbCogHiA3UbrmQqWobxF85pNJkpMMgoFAFT3q1Xc1RwizaVBKARfQji",
  "key3": "55ggXZiFbTBH1jyExYez5iNqKXxXwEQEfszvxtJcsXK2ohLRZ6AAkutLapiJSDUAbC16poP39uT76g3yTjZMDAva",
  "key4": "27FLo56mVzWepwZCCdzQ7qBRKCHYdqgLfub1nAUCLVxMkJUdTCnLUxSqLE1b11qvdvnrXt4Cy3RsRQXXsPhViuwL",
  "key5": "YHMttEa9LdCScvsUEqhu7N4BkKDaNZyvPMPL7Arw5DZt3n4P2VEJE6mtfE2U2SsGdem4PnbZAkpC8yibcvm8WEX",
  "key6": "5wEeAjstm2vBD6J5hEjWic9d1X7bANAbjHZ9qNcCPrAfez6HrdZg9XhLRW5vUnFSdT8uuvtCuwt8LigWQTbu9mip",
  "key7": "2NPYzZuVyJNvYUU3uqsyM2VwBkXGGfx5LbtiyvpaSqptL95gW8fohJ83B1mKPB5rh1HE9fgEbTNAA5iTc3528FDh",
  "key8": "5jswY2WJ8roLS2rpPVySVBGoQbFnKtuxMs6ggcSWhNrgCcSMLHY2wy9ZH5a1Db1bkTpXoHSGydwrF2qfbTnWmV1v",
  "key9": "eiuMPc94TW6ffjD5A7f2BGYQn2kDjPiVSNFwrwFtSJgR7nXGitBZTgmH81YH5KvJGzQK4mhpBFxHGDvpQNGB6RR",
  "key10": "3n2NeBBKJj6aRchRruNUxAofWVTVjsHami1a6qCFxbs6bXB5zR58PmcXzzs7m7GJ2NZzgPtbw6Xx22sgBMhjreJL",
  "key11": "36H5TRsC5PhpYKqS1EVHE22tzLw8hBArLu63gts7JSrEwzuqqQUY4PymeKUVB6Ddgh6bb3CrYs69dFTDAHbXnUmC",
  "key12": "8MdV72EsHtRAVK2whPwhRq3xQs4H9VgoD7nvu7UCADrK1iUj6NgLvAN6mFfDmGzhh2ToHcAzbRcpz8cq7WmGh53",
  "key13": "32ksv3Gf5kRABwWy7rWPMPq1EtfcECtZgEGKj1L61dmLEMCQa9K7vqVtBBJyLkMbJcyDYnwRvC1oXvLf9k3YTNPk",
  "key14": "46U6T9Mga46EzYKWKnVZwhArkSyL2USrXLait1244ydGTEbayvn6HtNRsTyyaiwKVbWtjm1fKkYRqe2M1qFXi2xL",
  "key15": "9pAHTe78TuWWBhFQ6HiyBLGAcApiXSmDcUTuHrLm3zNa363SEvEmLKEvjBozkaQXy1CHonDwQx7iUqW8JosaHnp",
  "key16": "3JQyPayK38jipzZZ2WRRiBHdc5wVxJe5C75vQR3MpTcNkDUf2h6sE2DpdY9oUv1Nd4dRP43yrNi2z69sEhnLNVx1",
  "key17": "46JxtANXcqzUQmvKJW8d73zhaybCg2idPfRcytW3qUWyQ4VQa9CPdNEevFYPMBsbvxjzwNNMP7MoLcujJdU7wwMb",
  "key18": "TcXrPmeJv8xqwRDTorRKqvFpoHpKszdyPE3FyWYeBU2cCsDF3PvsjcNgqMN5u2MG784KETtKbJERAY1ryUKMLBF",
  "key19": "46CXRuxtrgwjhXzbsMpmbCJtjbyUhT46442wvCAPWnvwYSnJSgkg8H52DhmBumXdRNczsTqfSXVdX1tfmSRD2mfV",
  "key20": "2XgcRLKWyfSWGEjnhjbDR1D6cDetxbFMUK6pLBus7W2tA9EyWSqJNtRvBShqSCC8cqA5H5YmyZTV2Sz4jpyo6BFD",
  "key21": "5A5k7nb3ZEBDtNuXxCZSwU5EzkSXeKV6EzseieEFXQwzFuQZpwHATD1XXbzF1drkChLPoFZBaJ3ho8pvATbUqgCe",
  "key22": "3X1usxpcG1R8Yuxq3KB1rLn8dFBbdMNbfeor4Aqh98mBrTDFQ9DvrtwL2kwNFtDZ2rkJe2H1BBPvPFmgTqxAeXJt",
  "key23": "G7F8dwCMLH3XgKpom63A1naESN3Wk71FGdbN5gg4rhZy9UiSakFELS7KVpDGYujHEEiZEuYNNxuRkKPxh4tYMoF",
  "key24": "2VbFGaVEect5C5ZFL6MQkGgm7zUcjQ1obnsQ19JofNkwJzufGnnYxmPwYAGUUAtvYqLqcZC5RGwMV8EPsLVNhiNw",
  "key25": "3Uyt414dL7fPx1hAhHojgMqFZzTrKBvzTjRAtEWH1XmZdtkaKJAMZUFEQaeJD4wYJkT8YukHqM29BPikoeFQqzda"
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
