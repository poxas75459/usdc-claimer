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
    "64tq69wsHpzt41o1SMQEB266FbLsHAsVjshiatUvsw12ekBd9Q24YqWmkWTpaP6dVFLg6EbWE8MVk4TcEDA71kk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwXUyobs8WTj3NoY5yYEMTSnSHLHvEhXnn3uvz6u5e77GPgjCucvJfke51Q24UhwCTZAgGsmY4oE1RAVxNPs6dy",
  "key1": "4myYbS3paxds2e2GnfnZxrSgYUgN6rTxNaAe8wpUxoPHUVZvBzzzksKVmuBAY6kiEShRCvDyE57dLZqXxoiZBzGk",
  "key2": "3AHVGqYb3jEKMYXsNuXYp4eiTEwypRCY3DFZqxSoLdjoxE75L3RS8BzRnPAee28wFbpoKXxYx79DCZrQXT3puzKZ",
  "key3": "3NSeSBmp7VNeQeGQec3UUBxJWYTCkzu8CpeoQpjotKpSzJUEfkVVHt861VF1wSuwsu16LLdUpzh7vQD7nBqxU6Jt",
  "key4": "3zmAjuusyjmCrAzL4CTd79WRtS8VvWak6aqnA1NDycy4S1BYJ2dNY7bkwnKVW1mZq7fZzAVA7P82GVYkWvrPUPr5",
  "key5": "hTVNDMEGRyRK8wArBs482KmM6aLwAM9YbWKqLHEdeVC8pvuECwpW4j2gcvpvPruvJHKvpnuobka9PZPHL7tutr5",
  "key6": "5G5Wu3EMz7oTvxXX6qDzsLkErrJbQwUZGxhHCnTJZzDQcC4u8iL6CfAtX4itJEPjXdn8X2J2EacW3rSZjDgJqFSc",
  "key7": "Bsi1m6eVmLPkh5vR51882jxn2JYm57Kt6jCAXgjM7Bvv2XbomwCLyfVnrsWznrJVVS4MpXteeVi3ZyjiGLzYb33",
  "key8": "3cacpXa8WkYS5CUAawTtRh1L1cLFuZeYhHK6oaDFgKKrLZa7UAwoR5xsU18fMcTezR6M6pDnx31aVBSAgNJpjwrD",
  "key9": "BrfCB3tLYVTdsXNuEZgYyyQq4QvsCqSWapti32vg64zAbLpZ8sCBc5HxjXEx9HDEnNbprkdbwUuxmo1qKayJYnS",
  "key10": "4ix34WzikUQoGNxjcQUXEPQVFjhC4osdMW1PxJqpU7bKW1tHX69qiQ6MQBYpSThYf8ewRq6QGkUZ2R3M5huwipay",
  "key11": "3U8bX7HGR1xXBe7YeSDB4HTTpeJAkLkWn8eptx85mJvDZvGvPt2La3WaCtGJMBu2ZshQPAbHA46zp2xu7ZTdsQ3j",
  "key12": "4T4eSrsRtyFNPJbHTBz968qrsxSJdSzKKXKC2ZmG4ekxC3wQnSkN8t3ihw1wuT7KV63Hm7xJajihNutiiuknN75y",
  "key13": "gf3FakgUBnww53rnpJdUFYEwwYZicQdz18Ei9DLsywUXAWESE17DA3QS9GW9tiLsa5Vye3atFS9QJdjeXch59Bn",
  "key14": "2jx9NjLRKwhotApw4YQ5uVEeHoPThAFVSPdMmLYC85R22qsjVBZdB3tNBnZuNYpANbu4xcJ8bYvRCj4GXVNYNaa4",
  "key15": "Aa7VLxw1U13C8aCxBis4jjtuQtAPZ6e6DpMEWfZ2sNmefhiYyU6TmWPkEUW3mX9HzPMW9w5QkBQ7oAchqHCy79k",
  "key16": "2MmuuQvUQboVCnKVJ7rrR3HEhhYaLgw4nSgRHFSuMht45MiJfqjp6MPg4Js69zcPCBvE2C8Etoo5eKemgcdac3Aw",
  "key17": "JVoDFLnG8B5rGsCY5KeAXBJrQmX99WiNSQcuDPjC56TjGpp3rRuWsejseUtdB39f7xdLR2dW8LgXJ1LD23MdXGi",
  "key18": "2vCV71uLHmRWiCjDafL8KBL6gn2S1iFV7QN4MeZ3tPYKJCEBTQJ3NEnua8QHm8qs2khq4EFSu1MfEYSrivVVGgQd",
  "key19": "2JB6CQTgBoQALNG8N3YwB5ajwLQrazfSsLREPEqoyuDWwxEuwLXmKpSKNV5mkePJ5hYQ4expgXLRkUcgMbEczm9K",
  "key20": "2WYX9U4Px2Z2pcWvNmX1uGRxEKz4MLA4FuY44HD5vCoEAzvYhBxp8Amo5Pa27CgHo6EF6QtFGKMUkuAJPVm1UkuF",
  "key21": "3ZcUHavSTMpUwvqmk7LdaBqKb9Vm8JU7WiJtiw83xJeeCrbQGAUjgpPb3endSiZMAi1A71qatCvpMuxM2WQmeTDc",
  "key22": "iq48XD64biegz7wCWhpE6DPxFiJ5nocvG3ajj6TXJ6XKKyV4Rw7L4btAwWaCcNDSaFLx8jF1nGqUxR7nMbcid2u",
  "key23": "4WifTyYGzMh9wtTtM99RLxZ2iCmKxyb6gSNJ5QhkKmH1CeQwRAiVG9XUnEbZwpNpYQrgV5EVkeCchFv8VBVbB9BF",
  "key24": "3Ber1Sc8g6J94mpWWnEr8ejVBBDyuumTK2CekG7Na8Ziod6PCdkGqh3XRCuALLGtwf87pXoiyCMond2CYDbg8HC4",
  "key25": "4Jr4EP2LoUddXLn35B3P4kgVqb84prkjSpwuSunNHd9PPFDUqSLxCs2UymQyQQFVXcch2SV4HLPFteSecUPqvohc",
  "key26": "5UYZ2daE8YHy649quEwDmkWP5fNtpavUSrEpcebHdTjVhjzFyADV2Trg84spAJeb7bSp1mzufDncaC7LrHHeynCJ",
  "key27": "53d7dzTUjPdoMXZdSWMkFsXYWVa4CC7DVJbJyJnXkJKAbAFH1NsLffwaWTuvm1572BcY7LZBw6QVNWRdbKqFBtLT",
  "key28": "4MExYb7vXnwCKD3zFqrCfAA9kDaGsxw2mKrZPyzxQ5dCcSqQ3NU2NQsGWM3vERC1k9j9yG3YXbvmrVaMuVq6SgVw",
  "key29": "SBVPZd4sCvFsmWL57TuDyW4sv1GEGtFbkPgs5stKjRkJTEG6VcNXRv2XReQASgNL6xYARwvp6a6gkMedUGVTvLg",
  "key30": "5cKsU6LD1KktvLNdHZQ4GN2zft9qkDUxBa6z1THCWkKM47ehcAmAvtGwJMAfXd4Yias3Z8EozxngXNu3zioYBa1h",
  "key31": "2MA1VEysNoTWgcjxnfp5oXABfFREa4AvLJMr55xFcbCDFWEPBhqVpa6dsfPjD7iMXqEBxi4ca3mUM1dvnqDppxoe",
  "key32": "3tFaAfJiYbxUs1nJfDEisBw1CoXusn3DJg2q2Wh6hNt8HaYUAJsBcZ4QNYAqpbNfociSxvezhAjnpsMLQwgspEK3",
  "key33": "cuVUyF26Cty6cR7hVLcvQXmDXTMgY2ijq1THtD8SfYToVoQ3AaKTjF2svEpTSiqpchWJp5pjVec5jdHCtXwDtcL",
  "key34": "TnbfSPiqh4EL4eLx2h76tD8XBscjcLakADVodxBxBVBcwHhnS3jVgVPaBVUam8Mg23rB8mgEyyQeahu8PjMvLdU",
  "key35": "34m6ooZSR7bfRSzz7jBQYbguqdnm97mkmpro9sPFK5kxuLqbSsqniVAnoALu9QeUAwkEVaZT2fEfQu5Fbc6M6xao",
  "key36": "5yYUzZPcLfoka3UCLZ6k5dPdsZNX8Q2GQ7cqzcfn7nArVX2XfCjRPVDCvGP1oKcdTuxWY5mGzjJsRuLDCjGoxeoa",
  "key37": "4rmbcym9AAKtvPA1c3My27xMajyrpbgYyheqvdZFEE6rTQxeV2DeGJbDX5YiiAuW97XQKKKUYoauBKyg3RAXV8eG"
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
