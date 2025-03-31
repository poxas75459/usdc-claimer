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
    "3eSkNFoQHbb6xPHpgZUt1xuS7S68xeWi4ZNnQhXzDDTVc9RVRzLRRKmGpvUtUPuCwyWoifgqCifG2dTJHbfAVMb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7D3Sg25qNUgjFpc3Yx6eBDJojSskg27UHnseZ6vL61Rm4MpS36ZQUsNQXgeXQLHzPQz9pwQ24zmtQwuAe6q1EP",
  "key1": "4DX4uKV2rFyBqzdTiPeuhSkAzafpQk1dK4wBPibhppPgdnH1gdRirdXb1v28qCsFLcR97MCpJNXPEozcnWorPuzk",
  "key2": "3qhWEAGP6MTpYP1gw2pQdxmhRpeYnpjB5gNJUqdkytTpzM3t9wJY9igcZdTeXhkVteoBrcHNFLXfNRmrLmTLcPBo",
  "key3": "5vvGDrqva82BPpVZcuH8WhACRQFfK17pfWQhFnR2hEmbQzEgEvQ2NKT6qT2Qy6y8m5fX92ForNKQggkyqKBvAQN1",
  "key4": "572EzWadrbhvR312m7Wo4QEvXhcYECH4yVrcntu6FXACuAZKi6gpcrR2UBmAwQpFTyGZupuCTe4yYf5prsxYYaw4",
  "key5": "4ZWxxcYvDkv5R7V3tF24kh5gGc6BJaf5vLWeJcoBGLCmmqUPA5p1qmwmfQwzgHCqba1Fgv8z7RouXZUWse78zFD",
  "key6": "gP5VC5xFdE7FFbT371UQC5zDxitWsvSPuM47kVjmrvW8hJeskSfzCqCKW4okMo3V1NXm3Aa9EcYX5WiyxTxVqN5",
  "key7": "3C1dq3bVsXKfRaZdcUZpDd4hrj4nCaGkumv9wdc9VEow85tV35PzEsTUevoBTK4UmXkPNJ1t9VNBWL4dwtzW6NTX",
  "key8": "3mfEBq6FXHingcn7CRKJfu1BtjjNzZRc1n2UxQqUitF12jvDhuL9AsN2vVrKsvZm49qFrye8Jwz2KebKQoZDL2Ep",
  "key9": "43yMC9qoAQN4kuami1tjv7GwB1TNvKoCa1idU1DcfKGChMj295SThrPSHq1yrDmjQ1F3cmvTsF7F6bnkd65APK5g",
  "key10": "39gL4waEAGohytRzD3VzR6QmMrNhYnEyiyCQ8xbiH2JdGFyYMY3K7QQ2Jc4yhbHzeSFTBsiBAAuv6sfGB6XDxn7D",
  "key11": "2kRqNRhrjcGXzQNTH9oX55KF3sL4zWA2tseDp2VpqU42LwTz8EYXbKequ6mbob6qf7BQonE4gfmdwneuHGvdHqtN",
  "key12": "5W33oATjW5W3iVB8JxdzyohMTe5AFwCc5vCqoQpcyhQc38DiCGXkJLHTsEqDEf8w2jdAvgaZV8MJxZN92UeCqgwH",
  "key13": "3HAjpPwCuHp3ffK2Vfxf6mqj87XsVxJ3ywu8HhfTGoGwWziLBMrPrcYyNuC9VAZDLcknpvZJQxHFkRUGgkYrRWAY",
  "key14": "4sVb4kS4BCwKMYF4XpcNZT3abdDNizR7dXjbpDSqtta6EofbeKaEGNVRSMgi9pHXrtfA9eWfFsfagWZ3P4FMiQfL",
  "key15": "jiDanFRRBVjhzGnUYtDgrYHtJ1dAB6MSVmnTedU9wq1LA4aAPYjGhJuoVjyap4LByz9Nqe4ca2rcB2SAHZUh1tW",
  "key16": "3t3CwbEnwXbnvyCAdLeqB9DPXaXgv1MfZzpa7CZ83Tmrsks6zJT3i9wEwN8YzTdvBVvLNVo73fYrFSfLzF39t4n2",
  "key17": "5QhRPByAQN4DuhPdLZq4CijtmbAsLCExKLLrUEsUzy6DBSJ1YfUYnBusSc2X2p3A5vsz6fCkY7xASbpffuw9naeE",
  "key18": "2JAZSJpYHhKqa2C8vsMJKCD9hN7649LWUjbCsP8S8pbhuFaDQJHCzKt2tvXuG1ex128MZBqZD6wsD4jKCrzhasRd",
  "key19": "4PCezAfN7kibQRFUfRkQfH6EdzFrUFCQSh6nkr5xXS9d8b43MH7Tx4o6ENM5ZdK1UaHBRC8MqUKCwdcbhZ2s1UNi",
  "key20": "22kDzdDeY59aoQgAr84rZPqKBLoNisjB8XpB29QUQLUS39Nm1EBbuWNMYgbrd8ySdU5Lu1aBynhHyL8grY19BrfM",
  "key21": "2Y3HRsBmovCsWvYQGBDAZL8y1ow7zfSzdSB58ee1AV1vhUNWtj5pDdYj8e4LLKunvur1FpCyNaLhsFpdC8yHXdwj",
  "key22": "3sFDcVnStXXngPwvFZLj6sUhvMVjhgKm8q4ChDnQTipNeiS1AP8ocY6shuUtHquhc3z4Z4Xg33cKtVcGAQC6Sg9e",
  "key23": "s1m5fMY3K9bNhvUrhdcScn9oLCt6BKccN1yJoFzucJhULh6xwvKKMRAFae94tvFQAKmt94PTuVUJkmgt3rRCHRH",
  "key24": "1uyRu83obqdm24sSLhXBjvmysiwVn4gRkP3sr79Hr2K1pbRgiac96S8m4KjWyHZfshrz3GgTopvTQqMSMs7Mkz8",
  "key25": "xvPsezofMxf6LuAYnZEKjaYo1bPLckAstjw2nNiU8ECgpsoCcDvYdFP21m17famnwXfRz6PfpEqPFBhZ9eK3CQj",
  "key26": "5RJySm8358YkZ36X3rMVDr3V3LtHQzPVeie7DbuuVaL1EFfn8SbwGc3QCEsQcgf6VLpZsifEsUac69w6UDSAcshP",
  "key27": "2Lq8gfS1k5sm4YMSq9hzUf8riBiUmY4Hhg9XMyrxuivYLc8t9M8S7kdrTTiN7fHWKA5cJEVHWDdYKQ4aKxtA4MHH",
  "key28": "3yruEXG9wwvus1pzVkx4KbeXcf1T2VFiSjrJpFmSProcoa6QPWAXLuUbD7o7scMhpptwWyGbVDcPhTq8tccGEKhx",
  "key29": "3XXGSfhdRwAum2jW9wKzGzGBcToP7xit6iktBKCmXGuUEyUhGFEZQPnvBRCrtkVzUXiusNReAmAJ4wobZgbnhps6",
  "key30": "2btzyo5b7KmDWZg6QMCW8ra5AMVuyjLJ6f1WjTh6g2xJ5xnJ6bQAQuXaLqXuckqAbttEF6SL8aXXQz5YXAWWuvFF",
  "key31": "JtWxwZPfXRdbTmcDskxRXaUd3dkoLL7TCJFFxQB7gwq6AZfn3rREM8cz36Af2JkqSB59LYZaP62q8P73H9Ya64D",
  "key32": "4DM2t8RNuonSfcfbnbJFVzVRVTfYCEG3WWrJ7oEBrzfcW2Kt83DJaXfweWNj83aJE4ynzrASusALGSJDvq1BE1tY",
  "key33": "3MNi1eQLhTRdqJvMAbrXHqrWEuXGafdAnfRWxBTxRQ1S97dfDnfAVfX9Ap6azYELBiW3H6WVPtCPfXCK2LwZTdAn",
  "key34": "fozNn3NLWM2AaUHsAEuvRSzAwUHurdfQSXKPzCi8iekJUK7FGZy3RTEsgg2wFrF5ebN1jwf5GiMaeGPscCcYLwM",
  "key35": "AjF2BHoaTzUm4qUoTTvg2mmt22jxWk9Y1FJ9zLJycrH9J8xw7MVHMkaQMrjifgXqR2Tm65z1fqCQr2S7dgELaud"
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
