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
    "3MBMfTPt8NyAvgtohzNeyT61um6bAKGrHp5ijcTR6dPZAAhL1XfsTedU8haRhUNFDLL6QYZvqnp6zVwiVd53Pa2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KqET1YqUoSyJuRT3sVSscMkQrD4eZqeCTQ93GwNfvwMmZBvkeqzheD1w2rDPGPkrufHRbeEwFsHdUZ4RkKxCHZY",
  "key1": "5jT2jB8kBpB26mMXFFQnPv77FejC22ZHhpvjFQYnpng5ukasjEKtvtH4PsRNhN9JkwN8bYpQVDhgC5HgWKLKtchx",
  "key2": "3pnmgdXQxZ7G19NizjWwE4wkDjimUEutRdVvqLaNZiJhDSmEXENSG9iFAT7B16ekSfgWJwVFzFL91a7tgW1xq6Wb",
  "key3": "ucNn5jgqVeinVKNjawe67knYacrcdBBj3W5CDpENjqWvbA5oVQopzeHhAH5i1pzP9Tn25EAzyBUHZUwVzPoRdBK",
  "key4": "63u7dnJzDSymTjHM3yDHFQhdytqxmkCtJKZX6RppEQcG1nskUdvNWyzLj8uNyvhSzvAfw61n5JZhv6VENZns2CHA",
  "key5": "Xq1Gz8UnaV3aKddg7muzkVLHTU1LJoY2Zadpir6ZvDD1BfssGDC3MCGAZmJp4n3g3XbjeeY3zUTuecU1mnJYwif",
  "key6": "553HnSKrJeN1d4fABSA1jEoDoD1D4ypFSowX7P2vh82GvsARJWJi714aYb3M3WmLciFxYYzxd1wzgTSbFQ4BMguc",
  "key7": "4ukZD5pAAFRPRfJAyxysYvPRDnzTLG3zxtaTsB9wAHjdT59QHBgbYK5EYG1uhEDgzzkHakzwUsyYNK9G1PPNr7an",
  "key8": "3NyRJm2bJB5zn9iCfCJFPWrk4yWpLB4gfDKpnKCeVS1uE6oVPJF1qYAbMZryxEb7PFZJ1ZeiGnBnWv5oGc4A24u9",
  "key9": "5P9s1LdQXrVKXVjAFieSSAeH52J5zTTpa5vU79roeHLbWTw6qw8SETWsypP48HuxYEGckLEiVWsys9G3ZpekS5Ss",
  "key10": "xUH11oZCwYVnWe62CxohCkktiR6c11piZe5LRi5XuNGKGGbfkKV5vqAuHzZGSHYiN96ANafMZfusSJ4CxcQZofj",
  "key11": "Grp4VydYRZcgyY8nhfT4fsLvDseF2gvZ1CsXPz9w8N9YWLN3fdfiSZ53qghTD52UVGdpssGatecVMbA81HUEMjV",
  "key12": "46LP86EW3svf4ABec25Fnm3QwaVjKgwiSaLRYumUx9aMtbJifH2shTpW17CamWSeHJiFi3ZUHCHuk8c5dC3VCf9x",
  "key13": "525jz7tRaKDk76a3ZTDXTomtiSetGnrQKnAdMk9m8adw8PGojfmsDQm6cmb4oa3RAa4i4GR2XS3VH3wX5fK9RNET",
  "key14": "27G3X9GhXjga8r6sszc1udGu5QMcucfzqfYFaCk1f5Rm6JDB1DRdQeEArm7XVCrdFsbnBg7tJtW9NJUQpoGrbvia",
  "key15": "5LNNAk1deHpF8GfEkrynH7YB9qLfYRqwXyro6NdNLgC9HaMaLR5yw7DspzzuJCYSfKR9znoQ1rPSr2GfBYQhtdYh",
  "key16": "4Z5TmSpnHYbtDveFvffUc7T1N8WhRMc9Z1UtoCrniM8XNhQxVG7tUr9kKBHycGZSQJmaviCMSntQTd8H5gNrowTs",
  "key17": "4aRJDqioD1HYLxRbFNTExRob1voKkV8a6JKQqcNRaGsLr9HNg1fiXPbuiZEGvCXSkC5JQuUK8PhYuqNWnaawy94y",
  "key18": "y1r9cyahPiZk4zGGeTyATfkbXMpGfoofHMbzw3PDGsfMa8fmbJwxom9Vc3Cj9vU4fdTbigoBizvAkcjwkirewfD",
  "key19": "66oBrXn4BAYa7s7YBrxnS8kzsRENtMEm2qe19PQ2ywiqMs9DWDYwkfRmP8xPS7uUt17frTpXX2QmemDQqAZEMY4c",
  "key20": "5LHaUKT25W6hZqKqQsuUpuwr5tsRvg8wEdqc1ZNR9PnGw7xok4yyDZ8g4pwUbCr2FwefbkBW2B4wFcuoLkagBYCa",
  "key21": "4zMmTJWoEcNfuoKyURJ9ZCv7JdyKCoTcn65AzZ3mCQuyjqsWLnZXQnFd71FiERf7w5UNHsTcejZHAMX7rTCeA6HJ",
  "key22": "2TRmRh7yEV79sZboTFdB78WfngDHKL527iK94B6YGcCMWh282L37Q9cLFcQiFAxyrQH6ukSJFmYmT4vSMkH1eBn2",
  "key23": "4Ng4nuNqsatkgYhfqk7hdsP1q81B5aZ7cSnQrB1Eg7uM6iUPhKoMpZQnDe1E1arkkzUfjYqf1CqDYF5BAW19whrT",
  "key24": "4mfEYGgnhTX6x3L4ifaF373VJXZRtbJJ1VRemEUg19Pv4fdgGL3F928CRo6EctPoB67jVDfn18HYKCL45DmRWfg6",
  "key25": "3vUoprqGAaLS4sbrzTNFZMReFUnZJszzNZN1viuVH2Ty3SLmZP9WwMDeWmSA1E4DPjczwhiyhAaECqAmUjSWCwuL",
  "key26": "eR1EfCYWXFqf6DjMT21Lvk5SbABAtd1NKG6LVbt28XSJACyH4z9fU4RNEsSKipYS1S6XDHdLToYvNZHSXbaxtm5",
  "key27": "2QsHp5D9KVDRqJ9J7bRQ2J4azevWKoGQUJGp7aKwga8oPNPCBSBDeB4oJTugHskAFpVjhX5teGyaqX7K8uTd6tPB",
  "key28": "D65ufEVbrMkVYTmbZUmtDDcdjwNCR6RRNvTZ4HGxUVy4hPTGqiYNiCXh4aB5xpkCLUPrUY9JAcqG6SPTLEV9Zhp",
  "key29": "21JRCszDJMVPPS2hFkrN6yeCLamdjw8iBbfvNoksSkVg8s9AdRgsjSfGrK6swC446UtZE9SxYBNyvKjmj1bQRCQc",
  "key30": "4mVH5yMkoJwpATG35iDXymkiY2LMC8zc3xxLrHD4F8DNfBMuTD6ukgoH4PzBbXo8HtWUbVr71wTswJn3uCXDUZQH",
  "key31": "2m7VLdb2v66dJsAhnBVGvzhZFexZkCzNNL13RMsrLCTFzR3KcHzNKPn5BPdkQx1DnVEz4yE7WxSacdkfrjSxJfaX",
  "key32": "g5YCojX2C4Pww2kK88Lcaph3ZgtiPW5zJycdByQVVe6YJTVapZGkvRbNksMDwgWmCYzGaZNRQzsMf5erWjiCC2T",
  "key33": "3LwSG5bTk8wRmQqWoNLpTQnwkEg4SBYhDqDx7HsW5dBv9xRb2t1mTaCu5yfBVd3XofZEPEL9NJCxX5r12G2k28EL",
  "key34": "33yhy94wkknhsF59J66BBVLUPW2XZi1PFmWUDTFWBiNVMiFmfa6ytgUVNHtEUmL3rk2rEtSDxHpXLDRxLuBuP1t4",
  "key35": "LbGQosYwJLQ43FhEo3EvFuSC9pyoeQjVgRXcfKnSAPTcV199xQPPJVG6wEF33peEsiQcykNBXUnqwjjMw41QvkH"
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
