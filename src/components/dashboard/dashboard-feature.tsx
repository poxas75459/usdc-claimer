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
    "4WhBVh22PT2Szz6n7ALjLxzRJvNU279L53yy7GS6eXTML1vUYLnktUQ2U31UGumAhwgMV91VZUdTDhx39N4Pj8a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcmQsUeESsiaKmEPAm6n1F164JaZEkx3mpi1FikgrjXetuV4BCdwB9czKb61Y2Cff9sLPjadqX5jEfZbWXRyJrH",
  "key1": "p7GEAfxNCoEDd65ubSLkjPqNVfrJwxG3WY3fiqdZ4ZjALh42vmrUoyVzpGTGhG1d6upFmj74UCPLsUA7bY4uWFQ",
  "key2": "3tFiCu7UP9oxj47LzjrrzB7z6cnv9nKr3hF9u4epimFEG7hQPrMbJ3BkZaCKekK1qrCaDVyibR9AkR2LvRxpQdoC",
  "key3": "2jq4xAhAmavLmMMe2LaB678u4VEXV6hCdbKhZFpcpCaPmuQWWZNgCdci35ALN2Y8ymC6xv5A5YkUBLbYw5hyAq2g",
  "key4": "3gCbcSLnum4FXPA7HbUZHtFFCrK8qM8ZCBMS2T4Q166RokxAR8aVxFGLHMbnBGenkPtLigU9cNAcEdAbdycj8ojs",
  "key5": "5yBvL4xq3HL3SwaxLF4aiJBM4LYHc3fPE4cZouWicfKCcgrrj3pkWYf2CspR8gvZhikpw8cMW8ucTkwbT6958d9u",
  "key6": "F7XsDWUH5aveNrJGoF1D2s67antRJxXjpLcPkTZEXVLaMuX4LA8EhdsdjDJueTcuuNSorqd3Zii14QT1PRZaD5Y",
  "key7": "SGB8z5odkkaKUQSxGFGFwKMTkWDB3i6cTppPHn8EvmKTg5yAv7U8m2Brog28suihYQZRUvKCRkXFJYdmhRvFwL8",
  "key8": "8m8Xp3S8VQkJstWxem9bWGt3YrmgF5EnvdGFLcWBUGp3eScgKFWrWKZUu1e4GZrBXyZPEtjxoZn7VGxkD5kk4pJ",
  "key9": "2B3eE4bK1MxGvQxyt3a1LTfyWBQo5EevLf8odTJ8FSvhgBQtFrRriZkVy7C283Wj9DEhJpWvP7Ah553kYGdZwbCU",
  "key10": "3UHPv8BETLYSY6JXeDDoqaJfxERDcdxw9yjFeDukRxSmzenkSPtcEFNooSxbckB83NcRaNjctEzxAziu2yDnKNoN",
  "key11": "2FiDNwidUa8N6bHbzR9G4zhhZ1Xbz72wCdHr6xskXcpD4hEs2CkKgo1SNTMc6EVuqP8LWbuDKfpovgCzLd1tPs97",
  "key12": "2mE4HkQVHzGMHaQwz4KWjKSwYSywzm2bcJnU5Ek3X6qxvKomxkqbprDvSkRZ92iLA2SEE3ebphPrTQY1rUBtzJGh",
  "key13": "4vNQHFY1wXBy6pw8Ky5yumS6EZiMmMjgPC3usnkHrvbkG5sGQDrqEpTMs1yHJLiVTP8Btp4S1tcrDhb6uQyHHAsq",
  "key14": "5ov7tXyMx8jVc4qi22Ei4dHgvcMGCdAS6DAFrzvxPpbjKsXTWAfY5BBdHNnns9BVFBnYzoo3evkqKyRa7s6BT2yz",
  "key15": "585ghMJabWWy2Th2srKDeEdbji7fzWBjU3o8T5erRwdRti5ckYeKiSrfvpmjz6LtGEZry7fzgeNnfkgCGt6M3NSt",
  "key16": "5jNYdMqV4MvGoYvMfZXchUuGJSSSt6NU6GcBz1hjYBuPrswyYTDvDxngk8AQqmJC3yf6sC1me5SbSXZTtMfqXtLK",
  "key17": "5wvCw32cXgafuaroiEFR9cauMe1qbz6u73EQ7Ftzqp26XfywQ6SE8t6bmkg5yBcPKFf4sQvKfAPiXst39S257T83",
  "key18": "RGPHh2UsVbqbF8H6YZHojZddVi7cr7LozGrqumQjzzBur7r2QwGaiVrxqYaPGc2dRioQC8g6mQGmnki6KysgXBj",
  "key19": "58Z7jFSRWmuMyUEYaEZXbrLyzMVXJp73hia5B43QdzBzgEr6iy3KHYDUbQfPyeKzYismXSQJRSbqb66UPpYyE7by",
  "key20": "2Bg3EiEWBVbW91RALbQafGziuFBiiKTmNqK4cBCFkf6FZT6XsQBui2KeMMcoEvWef28SCavPoR55SutnCdPFxX58",
  "key21": "2XqfQD5j5t3oyofwgdx8HozM6n4XVe2NjWVq2zvJsWZfRE3vD7uMT21Dn2wPLGAs8JryNHeGHLWNgqLUkbRsLQ9n",
  "key22": "5DptFPg7govXydwsHG97zTuT7yGdtjnWkdXvHS1wQDTTrn3cRN3HvDF9x144WjJs2itFv1ev2f22Kj3e4tbH6eQ3",
  "key23": "5jj9ymT9EekdsFaGc3KXw4eSNBqXTLvAUkgSaXUVWnAvrv2PJho5MSfaeg74mvrzL3BjW5LSZamYew5sk7kaqf8G",
  "key24": "494jWJCZnKA9zHbV2aeHy7oxooS7vVMQCsyPvZjixsSJmRZbZgaycgjpeStox7ZetkpGDTybiBsBHRxRCzByqYGz",
  "key25": "XbRfR3XQkas7HZWVNHqidr6W8La9MxkrUbjuQ1yJWa3wZ5ZTBWQofbHr48vMvz4jMVUYZfxpH6JezNBSNjLTsLg",
  "key26": "5GFZvFpNQo5hUGVkEcocMqmLD63g9esexnckBE7WwoKP3iXcxXBLhoNkYmbpzujzHb7QE7ggYJzrogWEDzNZ8SRa",
  "key27": "4j8eeuH3nky44gZBvShca2aSJaZ3urfE9ELGxQjnpbfvY9kGLGgYRQ7vBJ9pocvX6hGq6xfnQjjsiBEXaFLNeEua",
  "key28": "57qQWPnXf9rVTsD4vfkegWJSHSKtXtYvaf7WTj7nA5e1nkocUiGwXrycZLeE8MnhaoH2GYSqAMPopjfsK36N5M6Y",
  "key29": "3PjWRKXcBFs6ys5zp8DmBat7Qyv9NNxA9vwrAXe98zxWFFd24YsMKbneE8n5DVvkEiAvi1CP4VV19pE7SoTNdZUW"
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
