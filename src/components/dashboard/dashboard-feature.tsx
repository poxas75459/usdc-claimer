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
    "42QjNGoDvbsEcHeTNBNowern38Nkem4pwXRbu1HB3MQzJgoo5j9heDkKYGXvojNs7GcKSq8s5UPAu9DjJQkr7e7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jB9UHf2hpZECGKmYfk67zXesz7wbTXgB84MhGDjTSZ9vA1j8VrGT5o1kTLXekzXwPYMcLtBfZHGoVFzPeUGkJAW",
  "key1": "26MbfTyXYL6NAS91FPsWYukr2kHgAxyuDBJ2F4CWPBk8eKYNdqHRW3DMecCRU4skveCcxVrggjYoenDhe5iAdnKQ",
  "key2": "2HGkco6NU2RQxqUFQjs44jqxkXKvFjXG8Xi1Tgm7XSTbmsBHguqYwqLdhSCokCna5LA6vc4mkRXfyVUTQvYCuLUu",
  "key3": "3DtrL75W3d3xJJAHjDwgjWjRTa5tJWJyxkYKw5eMgCnkK9rTruRdfPvEz2FFKCkVeYsyyfHvyCRXgPE7QVrXhAB5",
  "key4": "4gAKwawVHqNbXfY1CJ3yt1iFDmgpmZtDd1R68ESJ7mfpZz52SjaEkq7NwQESDRebVq7gnXix9Y3rWQdvgHZycUkq",
  "key5": "5SeuE3Jr8USQJ7V8s8NdY5hs3veiZr9YhS5WVtBurV8QxK1FWKAuJgdRLGcifzcTE67vkaYWQSCK2BUM7X7aLKve",
  "key6": "57tNxxk3kY6xfxjQ9mkrgtkbehwSv6cwtia5xsBrGuC4Ji44RneeUNNGUNKwrbEzT3w6D4qf9fpji6mWu6wXhNaH",
  "key7": "43Gb2MxgYb15Ygzf1SZMrZagDX2hhKZ4DANLtGoxuuskc2vrPgooaVFoaGgE8ALUbW3ZyAEE2h6BxH13VbkZcjkt",
  "key8": "3YMoBXJF3QAoxmuNmWymTyVDbQt9zSxZzQMoG4moGKtQfszneSRTvWpeUo3DXaB9VvLSwj2o9AmtMhTKe7E3HZFV",
  "key9": "5ERqisXJCCkYiBwf3jUGd1uCBpTThJon2F4y6X5ybVWDXqibhp7GYsnoxPNpL1KEtf3cnXUH9jmkRHPHEj5oxQE7",
  "key10": "gMHtNaJ3GSwMXou5MgwkE5AUaTFKVunGk5eGxmtenyKBuJ7uSoeKKHAkjpbTHwjzRTEe9Bd21mHrqr5qkufQDUg",
  "key11": "3ijezV7s6J9pE9m193VnKkE6xZC3P6GFXzrv3xoZ53j2jqvEDE2RqmZPo7r4d12Lk1YVxd5CpYmJmStbq2ZYM6HJ",
  "key12": "jyS49Ra84qz6L2uRtq8NchnndYDcxMiAJcnR988hVysy9bcFX4Kq9Ykd65LGYXrDUw22xEFx3fjfc6DAsoVabSw",
  "key13": "47pt4kuqktrQok3r1UDQQa791xvcVMmRX7QmFsa68SgPAYL464x7vf7YWngwdW776qnuV4fZYAz4kxFY1dcLDiDn",
  "key14": "5Hptc1Ws9RcTqhJ7D2HyKadLePuSUnH35BpjcwsYsL97xFRVg37tFZ3W8Xo278cf6Wc8C6Fv7NTD9Nj9aFhQk835",
  "key15": "Cbw7PeKWxJAkbd8UtjmcCwMuAGs2e4EchnQSdbAPy14T9vAdPAcSv9XNhwYG4gYnFanf41TxKPfAhdMCpj5bSoz",
  "key16": "27dxvsnDJ5eBGbke2CadfgQ8yJufJJduT37UMnvEc82yMyV4poX1iPazSQ2iQMEyfQwMk6hx6i54DmagDHQNyJpJ",
  "key17": "2dhYmxd2ft48gWEgiAAptZSLCQXFSFt4J5mTL1noULSEcTQKHGxuHTzr5zkagcGvBboKxC73uWBEzzofbbsTka3Q",
  "key18": "5eJSZurE7XDWK4LoJjanBJ89Q7fp3RosrMwB6buXdXLmfsg3ZH4adf7YzQTEBTEAjv4fVN544LeajDkZNteB34C7",
  "key19": "4axzx6UoiAweWiQA7Jqgp8v5JJdQWwZ4eLfueziSo8p2HXqgWMdZbtbzkXuAdLdGMzueqQ6iHbT8YHMFQPRqMuX7",
  "key20": "5PFYLcVm7jjwYnMJSXPdBUp2bLsWYTA1C4zJuDSBwKREzTw9FJkxZZVi2w9k3tcPbePuSJwXMfYvagAWYVtbnYW6",
  "key21": "3gcdw5wLLjkN7GoCVGsbJxpiTotAUXYmDWjccBuzciQWbuGNNYqWaXUL3Ek3dc1EnxhkPTV8yHfHnC1onWtobBia",
  "key22": "5jpXco46WZ9sYnGdrJibc8NAe12C3Q5c8g7QiwA7KmtA9C4wcNNEAmTzLyQHaKQW6k5vgYXjtam9Dn6iaM5BBiZM",
  "key23": "2KPik3zYNBJifbfz4g5rn76z5rVHCP4yEpG6ue9c56NjPHhyLHGwNVanqPPj7cvjaWMCHGbjQpEpC9EXxp2pg4U8",
  "key24": "2ZMUeJmg2aaYu1buSNowJi6VUZERaPdSbBarFdCnesapTQdgFTB1jHEjKePPpPAYh31wpUv7eE1LBu3XWAcSgs6z",
  "key25": "oJBpbA93LEr1BCbsx2JYj2w3tXN71TLSU5tgFFn9hNTR3dajyko8Ggt4YbfbZyZANyaFp5Suy3C7a2fXGdSG2av",
  "key26": "2J9KqPoVmqGTWVktrf87pGodGpc4wqrxXfJF7C4vC4Ju7FzMN6foqJewnkAQFx2MBfBXkmYc6HsrpRqrc61VuMrH",
  "key27": "55E4eo45F7wGBSwAztgYRhzq1P5sc5zMDmdFLztBU68DMBJdTggHKhzQ7WqciNmLdrBTeYg8zmPw6B4dQq4sihBn",
  "key28": "3puxdE4VRcTFnaittkg9eMeLRrGC8vfZci8nTnk8hqA3XBGEf9PhYNCFfd1HUpEWfTYATNFhHqU1iyCd4LUS8BoX",
  "key29": "5vgGG3rT4WaWh5zNu6r6Fzj9EN3vvxnSgT28Ev6F7m7NZ75GdUWGKn5ifGwAZo9Hu3LezYBSYMZTnia3oxjzBVKE",
  "key30": "2x1Gd8ooQmDEGQKCdLYGE8ZRu2TrhvkD5rh37thPUNaAR23hTt3W6TSCio7Tcd2vbMSh4JNPgKK6LFJPjotHPqyz"
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
