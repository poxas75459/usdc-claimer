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
    "5gFf8Q4eKVgUhZeV26zcxxjNZyNzJWjUghEQVaq7E8DvX7dtx64zeQTSWJVN1hZLta3oFbiKvegia7U1E42umncz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58BVBDGaTA9TESC9wJpS9scdwiaM6vCRpDH9jyonhmsjGvjrD8QaSfVB1uszScDCdExqfz9dEE8fD7YeaUtFRz3Z",
  "key1": "3WfdX2KbDxZztqDCMC4KfgxQejux9RRc4qUrAnRiz85R1h7Kjrq4AbsuDegD118Wm6vcQ6cAX46JCmj6dahgiL23",
  "key2": "KPBKXdGubkWf6nWP1FDrtSP7WjLwPyx5iiDcbUVjZHQLvwgDHpv2dwQsQXy8f4tN6cx7BQwV9brABVipoNgo7wz",
  "key3": "3gXs6iueNZuRUN1isZ96aUHJ1uz2RGqEbpy3aqsS5DdWfkCaE4U3GofhyzvBp2rJN53o7ZjWZMrj6nzgUHdAGd9B",
  "key4": "5cdwn6FEmCgMKzhhWhZihVZfJsr893LZtipSHaJ1yne6dc6uVNH5FyYvEV3G6CpfYgybJiykPwHMfrPBwiejhae2",
  "key5": "3q1Vy1Xhmt45vmdkqs51D9RCV9Vs8Vhr4pzEtMD2hLedvjWAQ4UP9mwNUR6vZi6V6zcVMr3MqqyK5UzCwavvQjB7",
  "key6": "6B3AxWT8pVY9jyc3WwRcfL8F23zWokCpwprK3HBv96hAt7uv1gt85Lm69YqyzV41nRfYxAkft6D5U1Ve2RiLaqm",
  "key7": "5Uw3t5fs7uubGyMuYroKMV94UbE2D6DNdsGL8NnPkYxY11efMHZxNceT6oVUHZKVTXuheCxSpVZXaS3jgdqkAMQT",
  "key8": "2JymrdrGVce1DPeT4MRk4YHxFRfCiLBBhLz6LBuH5aXyZukFaoVi92bex4T1V4SArNVyoCaoof1uoRzPSfhmtnh3",
  "key9": "33aX9KRsGhjxMQqLK3WviaHdf4EhnweNu746Ft95eR3T2KKFaBQRE5perDStpTQzZy7ZSUuT4T961h7NDH7NJ1N8",
  "key10": "3Jsr2Xe3TNArthjuBfvpUrfWi8LcuCpSchWggeBeXhebXgaJPqDS3RfA4MMPtoVarStPqZ9xSYU6wmNMe83JobNR",
  "key11": "hhA7h9pkzwdgMJaNL8MyjZktwK3xuojV7meHTYZA9VWcVgCSLZvqHpsCZ3FqtuVXz36QtjYMTdiiJv51KZowm5n",
  "key12": "54xKYG53WNrBdDbbuAgHHXJtTUuco71oYps27sg5E5xxrb8Gy7s5uJZPqypPTTwUHCBU4Mt1DAnbCnXYPpbd5zgn",
  "key13": "38tdJJ3b8nrVTaDzkXXuPYYfnm3Hs4LqZiikJCeVaYqxaTY21bQGMtF9hnk4fxHmdeDGjtCcWjEtxrhpCaqx79Pz",
  "key14": "2Gm5B5RcU6XTuoBtzJNVqtnXKU4oQgVqpbneErYnEqKXV7rLodm3uqUGGDdcVbo6MUbVcE1bYJqR2Xo4WP45KpFH",
  "key15": "2grE3xw6aqUdYqNR1CFehmpwYarxHyN1S7N1Sj65dTD86BCiPjpFS2RrBsb9XZEu4MLWoUywj9Dgn2m1c3aBzUG7",
  "key16": "3zPnXDFSU8ePw8Fu2cdBKLbwzTL3ksyqEMR6aac3k6HMyL856eCRuvxRpvesFPRaqYkdDki5AkGbPstP5cyezw22",
  "key17": "67ASSPc9zNTtRP6GXTGCay9DpNFUFh66EMe4wcmreZR832godoMx8jsQjuBBL9ufz7SqrxxTAeJpRv8HTBz1LYxx",
  "key18": "3KKSTJDreCc8EYxzq84ub4aPo56MSFkd3E2Xnn6DmcgnuVhpjfjTb2kfJF5sYQ5MV9Ju4PSJ251EwzTNDDoTwrTm",
  "key19": "3ARrNfjH62bEFV5ZdiEBB84ny6GgrFESP1oTQ2eFubx3rphLKJ3tomRofgGkus6FRiNyy8A4VmH8gJUGp2tAwcE6",
  "key20": "2CmUGRbvcJFdUfRRXrwe3U6VufpDo2yNa687vZexNpfxSBKdWzFAsvzj7pXgmBxa8XYCYZaRyA6yBC9RPthVmQVa",
  "key21": "227YEgr4nUgarG5GgcjKfdmKdW7SGPxzLn1L4yBHssR5cJEquPMCi35vLec5B1JDfC7WXY6MMcjkwyXxHf5Af8rE",
  "key22": "5ir3JvTSXKkj9S77bt5z5BDVodCTDsPYQEcUmSEf4by2M6r7mipFk8DRk12WRPDNFd7YT237NgZ8cnMfYt4xZifX",
  "key23": "LumG314qShzpDs9obwxgLqY2q4WckHuz1RP2DtK5Xj6TvZiGoN5vDTQkFdZux7jjQDtNSPqF6NJ198ji4dmy4Yr",
  "key24": "hFZTdRd723zogtooGLDwsyHtJmqFg1sdFSpMedJWpGxkc8hPwiSCf6NVigKKKpYQ2YqchV7TGheFpoZCFj5bCnj",
  "key25": "fFuew2WNDhEyEJe6wopwiP6mZx1SUHwarTeZtJsZJWZMVYqXsC15or8XcjYF7FWNZaVrNUBwq1yjz4avABgQpms",
  "key26": "2UGzBZ7NgqX2frUZciuSsdvvj4owPLLQoZpdrrNUY6ga2CFCLSEkisHspDFMB2gEyFJaGgwb5vq1ePGaSBdcmYdC",
  "key27": "3nDLnQzvnNLvhTDTcCuYjdKFGfN3gcCS53jr8A2k7ZYqzFk59LXP9cWPmL2ufP92vTBoHJnZKJsHLYzVX6rk5EfQ",
  "key28": "25UvVs6otQppiddY3RWVfmwzvKiW4cRcfT9gxNed6vuAZ5x4HoLhy93D5JwVw56BXAZjeU34kKGBCWQhotx8U1c2"
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
