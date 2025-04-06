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
    "2UAH9RMRPqqVoEgZcgx94fT3x36Sk95ugQUDXMgy7sfbxEEvUmWLfdRiYLo24ccaSzbZNxLz8VqbkVcAbhgLoFcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srDGUbWygXwDCCuZ6P1SfF4nZnLwkQHY7eDoUj9whFYhGfY2FrJHQmbNXMupcnG4nU3tsiuuPTSaok6cucefKvX",
  "key1": "45ebkgPgu4jrdPZV3ChJZMw4Uo5jX1FftSmM7sLagxhSNvgB3uT7nzHLNfNN6i72qvtEqrTDyerPBHij7kqVkpWs",
  "key2": "4LEpa2de9EwzT3wRr867qR5MTiLKCtG9S5DtiHuvS4TZkPsukwCHjeohfFzRFnahAZoZSYythSpzNQ6ckjgbdfXz",
  "key3": "5n1uwLE4nPD8hSj5QwfKA9r355LHbnToL954eypweCw7rTnURP1TneK2rJ3D1ZKEjfW14fZrJTR728BfJ4uoDAEH",
  "key4": "52H5bKeYKwb2YUTnzUiARTFciHi3nKsYgiEEK95WrhMqXLCHGWiwUJigkcphpsgzPtDAgBFEvvdZcJEystZ9edJ",
  "key5": "2KUFCxWfnrqgeajFnZX4pXAWpXeujoWFeiEhpuJDz7fgjqaBhSbhtpxKKTo1zsU6smYNjupzNsP1VcbPmZ4GmvUq",
  "key6": "5W6GLTu3taqDmk1RGZeyjFgjDgNCbUxjfartWA4mzNY2p1pEJ9anRDPFbhjsh2fZtXfUUfPM9iD1jRqnwQqvRM2F",
  "key7": "3crdSLk5keowLvME5LN75XSbT9eLpzVWGq4YG9BSJRyv3whQwDrMUdkgd6DS4gFV4EXTModoAWz1pFGNUpKWeKT",
  "key8": "2dntCossA32aiiuCf259J2jSkRw4gUyvQhQ2JMh7eckWLj7JyCBNAzud73DCrVZoeVy8hC2hKxUfLSF6Kt5fFa4v",
  "key9": "5J9t26vSqLnUZDjd3RgspgWwxD9ADyVp8kmBJqmQSMSUMdou2zJKU3ZJb4cCyBgevxXPEsxFHSnzzSMWB677ysZu",
  "key10": "3PM844KD6AinThBwacrjNMfrzcW8muGvCZ1smX5YXNFSB63fwdhgyVpnry8fKnxYMyrpnhEXhgMaMAisAY4FaMEV",
  "key11": "5jyjg3DJchY9wZbeXh42shCZRQsL7V2jdr83h16UXLgH1EoCHyBAkBtw19mwzDqkhfTPpDeWbGFb3SMEvPsjd3sP",
  "key12": "5LruiqGmuewcXCgTdWj1Ve6KgKsA4gdP8taL3oSAH2dUKKtj8xixie7HCQPUoF1KegBkCsNXYQPCmMD2YsP4SEwC",
  "key13": "5orh4d1PoGkYFEXyKu4JrgyJU4qdP74Z7TEf86yZTQdfNtTdsh6XMcZ1fNgfHjytwaEjbfZM6gWmdREqynKS5SV5",
  "key14": "5WxiarhRP59iejRvwtmfkUiMf8iUhQG3Fxqi68vPA5fYNKjaeNPgzvqnYug5h8V3xPLfs59VGWUJrDGTNHFm15iM",
  "key15": "3u2q3AtKTcLqWxxvDxpPmVXkVuNKUDrtvfnQoVTEeY8vWoHYyE6Ai9Dy8M6s3yHjakLmYzhMaEDSRHpAZLgp6qhB",
  "key16": "4nQarn8T5pByuNY1WHvBpg4Jz5AxbfFq5XAcD7VhKuMKAYJTtW2xYkk9nc2AdaGCWZ5NkJnGm5xUApX9NmvPScRx",
  "key17": "3dkdiHNVnszBQAYMwkDXEZGsbZyyfHdq8mJvJpomk8YHPyRvs98KMwxntZgQUHBrRaUACucpsiB2Kg8sNnbQdS2A",
  "key18": "4TK7ifQ4CLcYE28Yj8ARCwSaJ2gCMmfn2uwbCYgDhciKCZbkSyqY3zgqmN1SmCMvspBAtcTU5y6ebpAgCjUgS1kF",
  "key19": "KDVkHiBXHKLtjdxcBed9foe3UoJbAzZAcMmqTnHy2zbyBZBPiRT83UStoZfB7objzRjA2krMRhLkKnj4kjVGQiU",
  "key20": "4y7HaVpVtSSZjZpjSzEXMM7Sjcqhg8Kw3s8twuy5CBBoghvhTB467RH8eJGTQ5ro3dqqKytcyBnxXewG56edLei5",
  "key21": "3D8VXAtXkxTfRQbeEg1Hcya2gsknt8Rwhqtf9ys4DMQJqa24wQSYGfYYjCWQs8ypPdgvQvJNrqVDBVvfYRZn4rMi",
  "key22": "3P1n3CrvwPjaC8XPnwgdopSPZqLfAzPnTN8Xcbs2EXQh2GXYhtbGQ5DKPwty8hU6V1dxyaSnhzcGmJ2oiDA2MrWS",
  "key23": "5CMunmLXW4HVqMBtmDopX3eFVrM6CdTwCoQHC5EgPHVepxbzPRzaEoXF23z5bc484TgAx2vzisanfMogYVCHJa2e",
  "key24": "aTyxTouHvHi2WTPPyWtGXj3RsKB98uvjob1hhnsMVTuvWnjVSD98RiR2BweEeBeGL4nzV1fCzrjPExfLCzMU7Nj",
  "key25": "oxvynjSDU1oKF2yyQpdbPvojurrzLgenEZgceEP5cyh4LEHa4FeQXmyvkZtBgEiYfWbJdPVjsKt8MLXPX839Zm5",
  "key26": "2vnjmaLwqZtUTsYHfn9CWtg5YJV6ip33A33aSoTzVNDMEbcifkojkPf5ef6L9cFkTR2Pxez1mzCUkx2XwGjSpfDS",
  "key27": "62xL5meQnUR2FzNua5D8eym4o2iQTPr7TPUKUF6vhFyvJEGERLQL9dGiLcyQcBrRGmXan3EeJ4ESUN8nP3SzZo6t"
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
