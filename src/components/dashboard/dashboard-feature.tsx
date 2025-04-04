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
    "2quKRF8b8M83XYbkAwryVJJjiGU65BtRz6PXeaTbZotFS2vop7uTzxGhoSifdXFTJbNDUW7tuuqoAjvEWkeo82av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zBmHBtpAdLFM9fyS34zqAbZdfKfd4poimxPgCyccqgFEmNnLfeyCeWsRFk9xN865jiUdkwbTdoQPU1YLR3jTBY",
  "key1": "33PVvt9VRSCx65mHkAxNGJFPfHDAi5Q25Ng6NyQHNKzj5NES1qxeNg3YVN64JGvZ4GW1DjgBCpNv6v7LVLAtJEQH",
  "key2": "5byPxzwCWvSNFvzMPoYbgGCyVJq9qFZU7yYuKCksRmG9xi4UC873WyhkfbkqStXY3hRdUxviT9fcxnjQy8tkvAzB",
  "key3": "43m12LE9WVFnvT65DGGAxf63dbTVCzEYe7hoakNG8L6WCEbaLKhJRWVnMYCv5VasmoyNifqbjALgPCzDWzC4hzx5",
  "key4": "Uw6yWkEFW7UnEZAU2L9SSiB7WbvPf8D3rQWguj3HDj9okeEGcySJQKHjfucrjHJD1gBnRkMo2kx7Kpgvnk4wuNu",
  "key5": "JEz1k1hMujjChfggN97G2yX5dQ5RjntF3CPeC13RvLsY1MxgKZMArvfJrA2npdrfrUcYf5mjP9yZgq6c2nNW3h6",
  "key6": "Ghp26nkk3QiYVPyyySg4vanu5a2rkEHL51yTeWaL6G5g7TdVXKDremvTNcqmotvvZE43w2PHEZWXd9qc644vMJp",
  "key7": "PexjBAh9EYnr5Pxk18YE5UTxjSBSLCrEXF2gGNHx9MLXNmhynebztbFL5DXSFs1fjnnQt7WVA73U7NAzVffHCtY",
  "key8": "4dpsv67Ve62tYG9m1KdyiaZvFdzN7XXg5oUSnTSdhsgqiPnsiLzvKt3jAJckTn1qaMPGj9fMg4zAayWqMaE5UHeV",
  "key9": "4o7jgccSp8UFZYXgW6P2rWn1xEzrdGG8GDR51obTtTWBQN2eNDVYfxcRTS4kZgEzQ8fxqPzDSFyUYm34AviRnCSt",
  "key10": "3Btdv5ZjNeeMUk5Djxq38BpFP1m7w9iHar7UrNqXbTowPS2aqmd3qEcfvWRqkQNUUR6TA1anB8chxNV8emytM2fL",
  "key11": "6r5MgqfmfBnLxaAMHPJRoUWSVfV1xS1mmNSByLTyLp5B4QsQDwz7CbvVis648C4inq1TSS17ViKMraxFibjYXt4",
  "key12": "3j6zP8BnXWQ4jeqdqUAEqvBndsEyJN1NpVpqhuMwwoAYYAWBTwtXD1soQTvRNCRFzT8gWscDNKvwMFnenATtFe4",
  "key13": "4pftczKh2adQ98T4DwSm6C7EdUfVCZNpd4NEUGc4Mu1sRdRf63HE3fbTrnbyG26eLFM5wpDWzpbSdXY8nWNWHnPY",
  "key14": "nT2nBiH64EA8zkppi6L9MbuiXwPZx9xHTTn7kaSfdEXQt9VroUX6Jyi5tWHPg1pFvMDtnNP4CWB9oVQtjRJbomM",
  "key15": "5jmsi5xn5vBE4iXe6MLQ6ykZ7vFw7F4PsvnjLBbrYxbP8TE2zAQzxXXfBVDrJ6WXQGkRpKX4pnJPJqEENHK6ZVi1",
  "key16": "4i1wncxwA4tsrjEZwR8k5CuEUUJKSaL2AcchSaEsNNSLVK4q7EMNNyiZWL7WC8wyXcS3xtPVoH28YiHao66Ewm18",
  "key17": "5KXfaM6boyiz5yTwd34DiJVASPtGCYdMBXxqja2k7cmK6Ch39uJsdwjXY4JNys5XesiATa13Wh3dgCYAsEn9DqJn",
  "key18": "4neVLoXxfxVWMwLQhChvUTRfsX1XoKihfeTfF3EfKju2WZ9yFLbijnWJ7d4A7RwMfUaB6WQnsTaFWb1apRBeX3Uf",
  "key19": "2Lmpvy7oQLeP1FQmjCmL4TiX2x3ni5U4xaLXS1DEX8T63nu3kWJZoPHSLHYGcM5v8TWZsWQhyKvoEjy4Ur1EM7fs",
  "key20": "3jjgzEhQp6jrsP8VhD5YLMqngdXfWCDWLCjJv7Vvf2gom8qcWQt92ULRgeoEzU9mjE8iBu35CSgAzwcCCdcAQWft",
  "key21": "3Yc2yJUCh9byXwm33szWiv8LPYKQzN6eYvUGB61Cajx1U49qLZg4xu7RbWK4gCNS3GWGKGQj4myM6zkrjPcVKqBe",
  "key22": "3EjUhkRAayMSQ23zsjHnMovnfh9VyaiFVCsVrkJEUHYKBESWXXJ5bgyRqdsntpswNdqxF2FEiLkzA4BDayieyKhs",
  "key23": "4rjiiEBJqegpHRHujBnEiTuFE8iBFxb9njkV9naKwaqbg2mZVHZmw1p5LtR43FsYsW6TLHBAx3Fq389sMSNNCNsh",
  "key24": "3EsWDpVoDYavD7MasSSexDjdfHfD5zWKgUs5N4UrKTvZf8JGuUHps6b33yRsRjdp2WxyjvPhVYwa4jS69A2RmxFA",
  "key25": "2VYYYWjasBrf3bXi31GnKi9xhRUKLw4vG3J5okSK7YWQKGUhhiLKhGsFRTJS79p6PqNaJSs7qQ6eLHhS2mynLfy3",
  "key26": "2U8xcv5FhCGLzxLngjC2HU8EmRDMrxFogSAJXYnuuNbPM2zFv4R28YYGREDCRbuR8Us2KuKErLSy7en5MJSGc88G",
  "key27": "2QcNyxJ68HSV991CZpsE3sADpUR98W7v6yEN7GCu5seVjTrQjLfp3tcP2L9uc6bDznv1mWQ5dbwrPpb1xy1SHpMh",
  "key28": "xYN5X5ni23mzxjjMNb4rMkANGbMUC4VpiXsooDCXoJPasLMPabKAvtEWF5Lxz5mBAgaL67wUDDJy6NTsHpe5KCB",
  "key29": "gdZwzJaUj1W5UU7Ksisysg9MJYNWBmAnKip8HfrVNfbUm2s3KB76Z5rYYUvyLCkjo6sNdxWvGx2oAQuosf5eKRj",
  "key30": "2EgCCDANoKUxqABjXfHmBwZnPw4845rfN6iZNkPewSvZy5gHyeTGM18LpGVSznnqk72ZU6T8gmfwcekSKnRJPD33",
  "key31": "3tgbBnE8JKt7SLyMhHYcSMmApJU2261JcjPLxcpJ8T2VN9r1jACVP2izXjhLHGL1hUphx79tgKSeCNgnHWZsDCY3",
  "key32": "2TrXr4ST3peR537CbkFJfTazUXaFGfokcTTFFTPARsmvmPV8eLRrriXezfgCeGhNMowGbBvtM9WZVUmfR8GzMfkF",
  "key33": "65WDkvYGEjtVd7CMNipRvqCjBnBvjmBSg1i1F6QMYWEKv1EJggZfFJS1HoeSHA9EgTzoNDzxQHLc9rQyUsju4eUr"
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
