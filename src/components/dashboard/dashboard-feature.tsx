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
    "4mk9MYqBLXbx1KnrsA4ULscwi2gyMryD524BxMFJYwgmBUSgwxtvDsc99DNd7r5qhyrEpFBNtAPRd6jfqza28JR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tc1VWxU1MJtzB1zgX7TudmMVRoCCUzAZ6Nsa6WcLDnVzbH4Q22GCrunLS8APgWQPc6wMhsifjxvado6WBUuUYNu",
  "key1": "4QL71hMthJBVoKs5yGrrJaDaS5fEgqa6M71vRjwPLPP7fZJXfxBhRzjpuJpqXnEG9nXBidkJSEsgbX6pqF5kbNFP",
  "key2": "3uHqVZcyba7t6XrfpR2mTY4y86cyiMLJU8LHhALcuirHR4k3UwaUy9YasJX93zRm4oEb1j3Ee1zibSLXhLvAG18n",
  "key3": "4TErfi9BUqrrwBSn5LqBmzswTeiw5b54XoSsW9hXFGT2zWjLKVcLtVJWadW7TdpJzYMfSr66sMuNiacAq97RecBv",
  "key4": "4ZNei7KB48j5SSGJoQnMQF9uQiqBUNNSFcUHEaVH6XBfetoFesnYfxjkRgyQN6RTRdYXXrRBR1TjmiMKmbCgxBYc",
  "key5": "2RAKMXa1MQQMQG5jJLLtjgjrLQ1y9TLdRQgDkzUo9fG2i5maowCBZLSrEr8x2WkcWMdRj5Czbsa78YYyHZUbPKYh",
  "key6": "5Zt1RrXvMGHoeRfMBxwkMP7Lyenj5vqD1uRZF5YRCDyZPU4nXXJG94UVWfnTobrrtN73UG1ajaf3KacJD5Vsh3Qg",
  "key7": "4h4LUYseYScE7qz7NAcQjCXEHLd52mf4VxcgsqSiLWXccqHQSCXQb3nwSX15yhq2d5s35jwPtyK1AGcjqPhXuURJ",
  "key8": "Cg8dqQao1DGcd2CziALLhD7HSuehBoFE4EPuqfiBN4XoHAkGNrDCvF9W6HTZQdDy1X7mRF7FWZDfGWuj15VHMNX",
  "key9": "5RvabzrrVAJfunJx48jgQ3Z2GJniWPiEja9xfaiTqtyVE2cDYhcp9UuhyWGHsdGw9XqEdqr8krkHGLkM2vduY9kq",
  "key10": "4d34TVaeevVFFpMVGeFJFZkQPqWf1m7ZVFRPofngbKuuhu4mymwgiqHXznrwMYWbj6GE83jUmxTMvkfum3Y8ADp6",
  "key11": "4Wy7x8ed5iHaVXtHGZ71voXNPf93hfTVaL2frtbidRyof5SsCpiCoHzFrRUmdMytxG84YWYcmXDEsqfFPyUFeGjV",
  "key12": "5ufwwH3aw5KbMKSf8YUx8SdAqwPSGh9M8y6Ru5gvoWibbsnZfJ88XHT1hWK3KwFH655cM3Vyo4pnPgFMsPyCC287",
  "key13": "3ynnes7mbb4c9G1m5Ljb9z21uv9ryyjfRRXJDkTT7zGTq6JkCeU1NF2eRA2MRN3VEsVphnV8GsT9fGpekZrJRJGp",
  "key14": "5gS8cLeUexdK5kD5pUN7yiFecFrgzgvA1ivWta8DbX4vrSsnQpTXc7ZeprLBiLxdaZtoiysVgeV8DK39Pxex8ovf",
  "key15": "5cCfGjPZsZ7Wn7KPWLg6ijapEUxRoi8JM5CHfnE4FPULQjyv6qkZcL2pEXv7QGxcJRQ1aVFXakkYECTkW85nhj32",
  "key16": "3tKVWSCx3Dogz1Hd2G6hRpWwaPFfngb2endxMMmYFCHiwyHH6Bp6tYzyMsuTzvfPWNEyMrzg6ac3U4Q4ELd7xQKQ",
  "key17": "429PUBAGDz7iUHB1gSTRU9EGgqu4EN43UYvd2kTAvWy4d496FFu9raW4QJs45PEbSTDNtguE8JBq3dZjtMo5D26N",
  "key18": "3uThWcWs9JpNo9Qu6H1CN5AfbGHYxDga6o8p4riHeNWeJX2ad8TjxA3e6imCjiCyz1p4aoYYQWaswPKSvp5u5hpR",
  "key19": "bAaYWJnRNhbhAuvbuELHD6LHQ2rp918bGdoR1nmqxFLsAyQQEu68dYW1ccivW6affY85mFezLkFfRD4oXHHAbaE",
  "key20": "2UN7zT12PSt2f6mmUbiZXPPrneG2bSAMW1wgefKu2KLkCsFMbu9UDy466GLKwXfz7ZbgWHMzTV6aqQthCaof3f89",
  "key21": "4yCddv9PiX14zWJpz2h3AaV7f8tvYsJbdL1LMV7mzsRiSu1e3v2hgQExE4exePZMQUCnf2t9PVkcjCgWwX3oUXhy",
  "key22": "2y7LxBCBUCUjxvT9DqJQYaBh6k7mqbZSY9VKohJxrR4NXTLa5GktDVPwN5d5fRYVzfkwAd4zzEUixXYWPrBC2o25",
  "key23": "UkcLo3Uz5N3hatxeBbcUBxGgYfnHzWzgJQYGijCScBBK9JijSEMP7s4Gtm6xrMA4tNEgRopr7RrWWzeVBBepCek",
  "key24": "4ubrkqfbz1hXzAf6snSmUzvBj4qJHcRodwVw3ypgY1WeTYnF9fKFiKG52abmmfmYgU66MabPExeqGVnNhEQu34P6",
  "key25": "2ZATzNmYALvKVUULjUwrbHmU4vV8ex1ykmM33kXBNh2kkyEj1mq7zxFGUgqRnEqeup4qe882Dg1t8uSmVCv7jvPi",
  "key26": "5BLzshkYrJ5gnWKTcHZ49wTSHFzdviYMLMW9HJL8VnE2DZ8f2piMYuc713mwjiiFzF6sibRpucQZ7cKvRoqe3f9L",
  "key27": "2EzdiybdHkpvyvyHBCrDStwh6YiRUcRDDWuRRDedV5zZMxUPQtaUufESAibjjwDKQs1sPV2HNi6miKDyXXcf8QwU",
  "key28": "jotWnfJG79naynE2Ko2ym9xvNveAfVvZwkZjQUo7QrL6rWiwM6omLjh3yh489Rm4BoPPzcvapYyBvrXNe2U4Fy2",
  "key29": "4fdrZL1LZW66AFpHsVtzFBzHphWr2cK4zwVxikUhbEyntMpqU2Y81vFQz4K8jjC7jr8b4ZJ7d7Mgr9JJCvUdd6kQ",
  "key30": "3BVnGxvziA8hBM8LEKWCvoeWdi1wSW9hUiTgZ6YXjHCk28o8ragyE1SEAkiyJPsJ5az5Cz2Zy5UPmCEBAofZVMJV",
  "key31": "54NwKkMFeKmgdrnAZ4tNL4xe8gQVo5LjxZCvXc25FVyfgQoxZZogS82FCXgy49Pi5XQP3GDH1jz9ReqE69z5TyE",
  "key32": "4ngwzz3kG8MJQSGUqnm7Zz8rDDVW42CzQSDBk8TqxeqaYRGG4wXnh1MCNYVrPWXwyZxtihF2bXSTakcAENjDN4ZN",
  "key33": "4sYgkuY43R4VDnGDbZAmyUmSRXJARX1eQ71YVyUdhVDZEBYGVtEd1xBPRFrLBRtFrVR3vKW1g53TYizPj745hDJZ",
  "key34": "3v7XjqRsSKMketH19Za9yqgwu258remD9eYyQhvoUkExKa3SV3XJjWBJYVCzMTzevyLfsENSPuAWK6sgspgqJE7A",
  "key35": "4EfCdd5ATZ4Qiz1qWvbMCKFME5CDpSE8nJWqFCsjAMZGoHEqqs71mMc1h4AJzBZvjYYWsnHJ31vswtQBrxFjqyzu"
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
