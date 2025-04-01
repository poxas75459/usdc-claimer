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
    "5FMN3S9Y29sEA6XePhoceEoTShg9geckh7LYh995FWQNiNRdAG462J3da3aUCYy9JrAMp7CpaJdLphF11kU9U1yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QB9MuosE9AZB9YE5KvE8jQEe1bEbMPcDuLt4Ve1NGWNKwQf3DKQhq3AhwoFUdBSubftvWd3zFpYg4zVp7NzWPAY",
  "key1": "wLXF4mrZrTKoZAQs8SBjfzJYdGgYiA9LpDUQLdTo7vy7gCURmmw2b8TZiQretSixFrdr3PKCjc12YJMAXr2wvXd",
  "key2": "591C8m5LEBLez8u4nU1CuRYqfwpB9EYikZhuvmvoULEbDKdqbzqQVuUM8cgLdowtBpW6hLhE7GKfTZY9LG5fAFDy",
  "key3": "2SB8GAbrmgJ28H56RizjxXNMNbiyNzGghKhd82YmttMtg2GGTqgDN6R8zgZfKyt8fGbqpedfzEEH4uuSf2iR8PDj",
  "key4": "44va1Gb1bCvbJBfmCA6BGBKfUvY5yF8khcjk84F1wRg7g7uCnhcUKVudUK4PC7cbFyj4nz1nVuDzgRMVULgVq8Qk",
  "key5": "e9pd3V7Z2rM2LZVeYZvUstnenEyNccJWP6MECrviuscPZjeRLWdZ76EUqHLgN2n4t9Jd8ybnMGDfV1nSNEa1xXM",
  "key6": "3pdLgtSMxjpRLGQEi6FWGxUpFZJpCkPFwB6zjSi9y8gvmJdrUWDzzzq9ypQSHcGRjDCy9utp2hvQ1qJ9QijYbJ4L",
  "key7": "29C2DiiVBYNBXsXuZRD2rYQSca2f9bbVkEB23Bs46ostrwmhSTDSWc1BRWHfyUeYsnyFwkASZyHYnb5bm4kYM7jg",
  "key8": "S2e2dhKWJXToC8B3A3jphYiZXbhDkQYgxZL3JecKjNQAWQLrvj3sdo2Bn6mtJnG9jX4HEmqJYBxUPTccBzTyj7n",
  "key9": "2JdWEGJx6TLuBYoLd7i3qJrF5dz5nwmt1cYt35vtMhEj4ubt2A9hGNmKJeSaGGmCfxwb35nJsET1F4r2iqh66Vkv",
  "key10": "5jUrsCd3wuTRwU72JewuZxNgvDjyPGJ4WHtzLMAbCkruo4hCiYvrJK4CtJRb92C5bp63WQMxM45ajcW2eArbv5hk",
  "key11": "43AZs6bn9Y9PhPpFP9JJ5bc5fbXeTDjJstXP9mdzxetP3P5WwTLgDeHCh8wkHHCdC4vim6rgGjdX4hzZGjrPPeDn",
  "key12": "5XCLQezeakG4D9QqPPmKuZ5DGaRL1WAk1M2ncFRFkLCfJiERNFu9fZuCtxUE1aBC5nFq83w8Uhc5M2uUy6sCWrZA",
  "key13": "46vkH3vWw4Ezvrjw9RqGLrzSWqHQyvgBHf4AhhfSysqaezhXVrtDx6ZGCVYmQxE997Hx4J7pj7hpq9gZcfEPj1LA",
  "key14": "523NzFRrZZejnoDzFtHaXeeUVaFDbbpQvKGiLLbjynoDqbxVb5mPcSz2P4CAjk2p6V2bTZpdnwJYx6xgw4UwQUnV",
  "key15": "299a6BmC6su3nZUqVwXLujUVHSXcDxjbToTYa69QYCTKPJjHxpchF1LsDjgCi1qyVc8xesXmqBnLrDjKLUVKHL24",
  "key16": "2K3YeaPJBqFrVTfnDKgWaYqNG6k8ZgAsVQCcYkUoWp8gGCojjZkJ7wyrMN5HmsboLNL6j4vLKzMJPbmTB6bt19iE",
  "key17": "48cWL8S63WSTxqPXYrrBAuEP623jwSikZhWfNP9JMhFSdwfx1UKwssXXJWCqgeYUcmaFbTqmmeL2Wpue44drj5iA",
  "key18": "xN1C7sayoELTrwgknwp2eSHuA1VoHiBQPnmCRe1NdcAdeuSrMC1HCmhMTfsmWdwQh5ips1uN27kBDP1oHX8A43J",
  "key19": "2ThZkC3vv1MYXNAQLsyqsX9ewarg8tEhJHbKRn4XgV6NMkk6uuncQS6xTPEy3U2A64oyDm7k8qpnwj97Av4oeNpB",
  "key20": "5VMUqkgUvYyu6rV6uA2GHtrbSAz8kPiWKyUFv8mRjp56ZCTBiYZmMVQA4aug3kQwkvatLcRBiGETQtKPAUnsyPXJ",
  "key21": "4fLen3RriGCzmzeN3kiP2DbAcBZEXv8KsfcnNPWJXmhYffedYoKkBQx94hDbBQ1WYuupbaz9aerWbmhoBDYXWT1",
  "key22": "21tDumNaoyb1J94sZ1qhCLnv8L86pxrRjfHKaAhSB8rsXEjWHwdLoNuZTDJXLHJmmFJXAVycfpkfPzjdoFuKbCKW",
  "key23": "4ve1yWHY8W87mmiygMoFui57ixzAZzEjjexgsBGewuktsqoWfjpyJJQff1wFcrUtV7bMi79B76eUnwTnhkEey9gs",
  "key24": "K2r4enKZTfyUDY3W9VJLHBnufRPaaWTHQNiwft2TLC3FsUN2X9g8X7nN2Nv458zSqUMosLW2qeZkPszNM1pXM4i",
  "key25": "43tPVZsmfr9a3cn4vb7UHjyVVANTezwaikNPmwhcvmFgaq4jWw2Qspk2rGfCuU5u4pUukrHSJogCvg6PZ4H78eAq"
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
