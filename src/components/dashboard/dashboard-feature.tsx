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
    "2cZqgQAmcMkBiEV8L6RUKZ8UVBT4JCGNwrBQpUNaN65tECFi2A9E2yJk7yuexMV2kMBNTFQR8GiAWfYKcCNp1dAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woyJmP72ixwFVbt2K5sGVsRUprkrZbJ9PWaLNamr4iVUxp9bUt52C9RsoxMpazht9c4k8xHGiV2drQpe4RZjvEf",
  "key1": "54M3JNXJfWu43fuER9eyckmfy37xyoXScMhPE37z9raZchJnDa3UpxJRCj1ZFAJqR4jfz3bSrbAMueRq9Zkv5zME",
  "key2": "eqgp6JgKDeF5SU2xZPo77HWmkcVxU3VLcHuPbEeNmn5R3uRRUQcocqnJb2WJjFUXN394SNYs28Xr7poMy4eKBRP",
  "key3": "32xpBGqH5SV87QuEbyBBGV4ahzfEacaCRa1FVxYS95W9AFXiRY8js5cyEsDsyeGTWXri6k9iBNH3k1BqFXy4xhos",
  "key4": "4ceELvL3C67Rt9kb39CtR7yQ6PbDepRyWfLwr6gwjzVEaw8Q11tEtdMmamoykHz9Kcj2qMPyotpoUKpf1G2wnKPc",
  "key5": "5Nv3zayHoSSe55y89YnDC7H4x1idcwgcK7Z9JeexkB4hnA7CP1X3J7CfdTUxWRVKHNFCrja3QK5ztHk8totJqM9S",
  "key6": "5DoGaW1zN2pzD1hfDsJjYxwNy61mLtUhaZ56WMJ3ALfk53DwEqC63TsJLGg7guSRd2pAB8hrypysnZD3Rz6eobY6",
  "key7": "5BisF1kmdM9dUfVBWK3UdSDstnALW9daz8CKqdWbGBQuJqsyJS1BCLrbZdZnMMfsBU7ks7tzB6schZMCqSSDhw5E",
  "key8": "3gSSVGFCBL7hVPecDEzwycSnBeBbPVQZUbGC4PpUu2B3Ssu4khPJ5Ro73tWARJZCTbG5TUmqmBCdXfHK15Fmsk3z",
  "key9": "39ypMQQeznSwNdFFTUBTvdxexMoVEdthvTbGNcXiJJHQYTXYCeuUKVQgs3Aqpy9pPHeSAXTZ33Qher6hkKXbrjhh",
  "key10": "3eUePVokRkiZJZmHDLTyPKNeVPwH5pkaofixMKuJE98tjoSED6z1KmnLuc6Pm7QEFBSQWJxjTgBfY1EDDPcmSfwU",
  "key11": "4hk8wLiCKuhVu2nFUaSyiK9yEPJdw74b7GiEwusBosqfk2hDPccTNzVLmojeHt93ng87737DMPC2cKR39csXniSa",
  "key12": "5Sx13g34x8nQ5gJH2v2ade737yLGTD7mDtyjgUc42RxJ3kgfn6LAhzE43WJkzZknLpSwEBzbHBMtswEAwbrydeWz",
  "key13": "5WgHqaKq6gronYudLutYLYw3RgjsSPJyjANygUQ488ozKJrZE3CNVewiLhiXuaXguaV2JCsSxUtSEVBCK6pfTMTA",
  "key14": "4GNCX6Z17xRGqhL8C53Vy1x3qKGRMUoUU3QPuh4R8MyH5rdFr9zWv4LsLBB9xKZhe14epQRk4q9SqCCV5Be63j83",
  "key15": "3ywgdM9U9CmoK73zZihfQzPzd5JvmgjCrakufXmtoEGMPbq35vHoGFpvERHpQDYtxQ8Pcw3YmM7ok6D5QpjtXkqS",
  "key16": "3PLHebn8qrDxd4mMSUwsBi6T1LfsKigf3PfFeN9GdjFY9aScsRu6gZ4C8rq3U8NQGxCb2xgpD2hgidFXfAZqPcV5",
  "key17": "55SrQduRqifU7A5dyrQEFGoij34Qg9nzxRmu18TpDEdzCMfXVE1En1qBKdDoAx83awxdyxCyifPwrKUmyV1uHVSY",
  "key18": "5cvYzGQFPaZDSrcBmfWisJSK6PrkDk87sq4edkvu4kQDYrSrvqDgFwgZWVpfFB2BAwdf75ygF1fsRpyCzkQD9MuW",
  "key19": "51vybxXMRbDyabW5h8Hkaf1g5qzSdRrvbawK1xjevpheAsGH3yqgVxL9TqqzB8xr72Ryv1pCkSY2sseqTF1Lc57b",
  "key20": "2S2XTeWacr8UzJcSbmqkFLCiWmDAo9d8RmQou62kJJgDnuu1MBKWRDxP5Wkifkswip4EU3uAGACGcY2ZkpUGEeGN",
  "key21": "3DHtEt1z51iXzAxkskyC39U29E7UDxiSHfxkbV4Q99L3Kfgmpp17NjGf8dMnhNqWVbsJXh1yEwU8YpF4sx98nbHG",
  "key22": "2d6RMfod5bpzUeJiXsZSUvETWxi1EaZeJ3THuNrfxX9nphAeHnHdYpm8AD8LCSjx2AJXkgS2vNxQkej4oS59iHTA",
  "key23": "AUjv5V8Fg9ZohEMxqWvpXbANMxWbuEwMF1oyWY3XC2AASUrqn2FKC5NF8Cg2PoGrqRVMk47yCyNeJGGe5sboxrv",
  "key24": "55yCbbkx4WkeqYfhHPxY8uyfbdWiCfhyhnAMhELffmexraVEG973LLv2mU5qSA9DSAfjz25aGT4D1ZRZkqW6hiT4",
  "key25": "3Cp44umTRzfaYBTunXEothVNX4YzFcyALfqNEoEXS3LQmRVizzqCnMcMcg5YFiNF2UR14eF1GM1gLDb41J7EXcgU"
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
