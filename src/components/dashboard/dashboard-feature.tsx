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
    "5Yq1wC43Hr8NoTxQjrgCPXg6CfxAw8rQiUjpWUh7Chzs6abQr7f5dCy674QCzVaD4v461k3wFgck38sxcFzBipGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UGiyrUCfiZqsWRfy8TCXCeN9XUa8Yzv6Z53aBtTGun2T4zHZGBswAMaou8NvRExPe5bMARUAPhechVBnsaVeKna",
  "key1": "5brs5Z4mRnB9nnPM6JHeqxGPUMSoU2f2FXdW97p8QoCMh66XsEHpYZEmnG84A9dJfR1vr4bYRTWQCJHy4v9hwa3Y",
  "key2": "QAVkwKeqXAjhe2o2JyQAi4JCrfcdKEzMewowJjkGXQd9dBRUBoAh2ncuxPhqWBX2jCLkEF21DCxmgp5ugX6FZk4",
  "key3": "3TeebwhfSrQpFfRGtrgVpfak9PwmPqxj8LXEy8kEnpykuEMwSw4ftZbYEhp1yeNnNwBfQokZHuQgwwtyVuJwx4y3",
  "key4": "kvqRN8Xr6aC8SM9quqX9cwK8dkmSveiqCFuBf9tcDhyaFSNhQujWL1MgvD9UquMqRS5ZK5eKaJRzfqT6ftyczkt",
  "key5": "3e1oskTJr7UJdnMPUVaajA4Zw6QDx1vm4aTNMAYpi3zsT7RJ7kCrg9ZZBnRtPz81bFA9UFMCvjypECQ24JgRPVvh",
  "key6": "24LAoZDG8u3GsR8KorXrCrBj2KoobnSofpb4Z8kFt5tZ9Xj2RvWqFrE5zREGkKp73pQb5ZD5mSFbAbsd7jwDU5yv",
  "key7": "4Lsigmxqm73QjEoRVPrupbrvmyDpHmtjpWfao9f7vVHr2L3A4qZ3W4wWsMG72DAjf2SKkJRnzTsdQiTNjgGqzctr",
  "key8": "2xWEMrg7SZ8Q9a9PLdSK9ctU9YBU6UtBaR6ehVhFSGvf1Fnb666SCfmgVtytRf7JREk6vcXpRWVGSrnyZHfeHYWJ",
  "key9": "3Fry6WvZ3hsCdgro1An3XfrAqdSHkGYd8REstwTQa4Qx3GPhtJjbo6n8gvXH8AU5RBhQZQwf2UGGtxBeciGQz3oy",
  "key10": "rr8UUTqNbQPFtnimVrEFEhynLGJ4h4qui2L9xBEfFEjkU34Zjjs7JDaMj1L6P87CRoyReK6waydTAtUmj7KskpU",
  "key11": "4pj4ueACjRMww3BThyLLLYqArtT45n3FRoVaYeN711pt6mY5sunpL7QoB7e9qcgmHcDCJDCWRSiDJzAKqiqPCFVE",
  "key12": "4JW46k1KUA3iooH4iDHXbzo3kPPGBKHSnrPU4FnTfB62ENn8MSHLN17UhhV6ayUW9VYBEEMYnRcnm7jurJJnQtY6",
  "key13": "5zr25moEvPV1yJHJZSL1D7P8MhPx4SdSfXvB3yzbKVjmAaXbJcrYNXVN7o5vgGscYPK8SpcmTYCVg4JXSy6HifYf",
  "key14": "2yFgwoZNpodTwsBddFocwq97oSq5Rzdyxf8GZGiVbfoPaPGAWH4EjCUdAmEcBUtVCXy98k9163Un3DgebPMvb3gZ",
  "key15": "r2PL8v6QBbfHiJjWCjUcayBegqtDp8H3HCFsqycfZsja5mFDYXHohE4XkuUX82VtzzENVif6wu7JR9szsQrcnUp",
  "key16": "2kbLMbtKa3v9wRi6vnaXTtmcjfQeftnLLmLChQxQveknezqje9U8dXSAp1Ja3JXHL4GLZuaxfWaAYfU5EeswDzew",
  "key17": "64BWhxaBaZia5igJoozAs86y4mZWMtjBEG6BF5pumjuvu6qYKSxToW6grth8wysMPFpg3hc7rM4gu4uoXCqmH9Qx",
  "key18": "3SwiTD2euRs1KZTRs9JeGEV4r7J9VbBiD1UKoGupfvjRHBXCE72NUo5TfB3Jcso7hG8JDgzMw991jk17Y468nSYf",
  "key19": "669W7p7V3vvLgmDU4xz9TnSZmzfyY1BZuL8yDx9NnTq7HnPp5a61YFsFrLim4pX1FyJhFw3e9JaRbjuxBDxHERSp",
  "key20": "otrE7JCYZSZmkxuRGEjPyyGqsKRrxzAm4muMcdBjXK4YJ2rPYs1hVhzJWvtGJpuNpcggbJAcFafidXHCZLqyPSk",
  "key21": "3JnYE9oHANvmjwacTT7uTnzco69DEtzijwbqWhM11GxPZrA5nE8AnNS6xUNA91A2VW1k4n8uGBESm4Y6uCNTgkxs",
  "key22": "4bfLG4iSHwhUZ9PmXJR7Vy4PVuv7eijCJucEHJ9JzdSXqBLnYWDoxvrbBTrvepz1mFNxnay79udV5dcahDWG7zrr",
  "key23": "4hwvzw6dnV8vwhKiVbdtnatEcQitLjigVXSJC9oCyowXCjSYXhJwQfvvFkvSFD5DuHQfPtwutjfLv89WWs4xfayp",
  "key24": "4GYjXCoR2KSBZKTpvrEgPBQ52pbjWKM8tqr5qr215qvhPa2XAUrrtN3YVLL9msoaqBjzpX2L4u7tnUmkp1BUifnP",
  "key25": "mSK1H4eKQ7QJFzZMuKo6RUy6cCisMw8ZacdvArmmsz9AY6hJZ3aPUUHZ327gGxhgzypDo1N4sHm9LNBKPFFgKf2",
  "key26": "5DyZUch1vjUJpJaKypae3HfjfnqVmyqjdKpovw5HZRwk6hpJj87aVW11qrbjQu6K7TsXHuhBEPr1UF3rKwJywRHd"
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
