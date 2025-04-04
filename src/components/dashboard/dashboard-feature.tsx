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
    "3u7zoAeksbyQ6n3wqAFoxiBhAp7PBC9Cfm6AWpnLFZvUJvjtuYoU87y8HAQRUfeieMvLN2KqJW6tRcpUuDNsZzRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPsN6G25UpZFCURzHfuesL4ht2tdan111s9NPc7yUuqMfKskGPAbTX1vVLiwPYt6BGdNceuiDX2FxXUi7mauu1y",
  "key1": "2rHEumHA71sJvRimHBhbNBw2KHfN2Fp9V1dmcdgeka7YREXvhQW2CGwRhuqdzcy85HwJNA9UTb89pmijnKBFf7oJ",
  "key2": "5d8PATn5foEeVJjDsD8CFwSbMNkmCTxTzt9YdkXhjWdv47nrcS4YKTP8BE2dqhEbb7BhqFbFY47mfK4AqmZ2h7Yk",
  "key3": "3n98kVWDPT8fMoPAn6WCxk3KajRimTypbrMMUJePUdNkUDaGo5ixr3chJMRkR6PxyfWL8p95Efk6RCUvYy2Dg86X",
  "key4": "2oJ7hmZ4uGewuj8DonGM2sjHFiQynpoeh7Ry4uqcNjBv3n7mr5mNoqf16WycKV4fqnEjj9CQuZsQUvHyFthHFZaS",
  "key5": "5juadRr5qdcHRRy3KXoRYKUyxRpdR8xEnEMU1mdyB53x1jhUXdKfGdTVBuPav7ocrcLSDK9firhQFcrqhcf4mron",
  "key6": "5MzH3cdXDQCodMcA7pN362BZ99G76cHm8Ks439dfkw3YBaMeT5ix7Jo6o5Z7GeUenzRJbhJwy5Pf3Zc9RWF1gPo7",
  "key7": "2LD8GgRbwEN6hhXgCCkHF7iyWDjCHPBRPhDZZGg8HtHqstjrbYsQBTgiqHeUNkM51vKG5T4MgWjkextVZVr7VXys",
  "key8": "WdTjsYAyKQ6MhzjCBLqvwHFjV3zP2YnwFEHQq3wxs6sH1uqvFP48oa6SbfCQwcm5oFszENR68fY6GFW8TQNeahP",
  "key9": "4f3m1uHLDhfFRzruFkyhkfxqCr1KuNDJ5ptw7enhmGr8vLDMx45ZXDhDNb7xeKvruCh4Yg1NsJopsn8Rbd2cAeKM",
  "key10": "5XNyXpw3sH2RYU3Sqxyh63S5EEv7SvpxnEUYnoJicjdtLCnWo5FjXHapapogJKKeZz1vAWp4mzkhhxzngJT8pioM",
  "key11": "3Cty5apgxEGHt7tZd4X8KTxMUnKSSwBh9Av7Wt7qJ3iiMtZFdnj2WZeGzvD2sFSsXjxz6fps4ftPzDNwsnHmucSD",
  "key12": "3PCuSeF4dRUC32BgTkeFLRyM534U8KkLRThM296agEM1jSwUsrMbNymkpmccEZt6xcFdghzkkoYzxRQEiWpLGyNA",
  "key13": "2nVjyPB3n9wuNbvj4K3arE5hs9pgemCfmE8eo8RRD2eGqVxZu1rVxWrdQNGbwkr7wVhQgv5dgEgTvarruSxGfw5Y",
  "key14": "3o826S3nFKkan6hx27pfyyrkvy2jsKgE9ZddHqfQzC8Ud6geciVtARoeueuFwrCXojw9me4JfLGAHmJTHazqYvfg",
  "key15": "4gaKLyjREQPTup5AjyKp4PCFgdVHbYeYGfcWEVgJ7AigJ9ENTyJAMFPwmjYwkTjjy2aLu8NsqtSMT19ukbw66VJv",
  "key16": "3J6V9RimJi75ggNezbnz9yyFZxzy8V4d1XXXKwzjqoNo1SBypL4Ah7L5jUmhs14LMJrTvBRm4n8m164RYvqJgyau",
  "key17": "rpAq3MzyZDcUiKPBXB1YMPQAvNKvDhJuYFoxhAtzSsNbREtSbonCvaQ8eTYRHeaNvG8NoVZdBDpLuVHJMb5c2TT",
  "key18": "5cQwQoKrf7eRDsRU6MUDFYJqwGDYRQGsYVpPQoN7kLypLA9ptXvqMDXMu2jEDKyL44nmR1TTue8cQD6oiwRQJSrS",
  "key19": "4hUxe4LBdxPJhGG3SL75nCTPgxiR82gAkMHYHabHqXjWDAom61PMTxhYdxamAGEY7pnw798FJ6RVFbW2bHbdHepb",
  "key20": "2YznJTUW6Zncx5Hi6bY1zPV58tMdfJJ6s2Q3zFQsMkxTQvo5LDc1Xc1pjZBmrxXPvLYTJUSCuBYD1yXFwX97uT3",
  "key21": "2HUCKTk8zUCDpgXiBUJniy75w8pZW2tVwihGGEXnwM9o73GgUJuozEbZ4BHJxQrTq2mBYqnuuXBY1zLzHSwpminz",
  "key22": "4duefCTjw2pLWPGKTygnKCBxg7WUBRfhTGb1do1Vkxe7VdpNRrbEaS9mp2yu1QbmZpJrwTFtFFxNdGWCdiVgaGQ8",
  "key23": "28ynm6ZE4kLeHUWwEHVqdPb76wtCEwZc62SVGjMwc2zEhi49tVUGk9Lajx3ncLKo3LdgkMKK4sFnH5Z21en6uy3y",
  "key24": "4KnSkG4fEy3itWp1sgEpQHdvaPf8G8P1mUfskqCFGvvnD7ZUnfn39bY1UHTi4ZjDCcWxt1R2CHVTt285rBeSLkFE",
  "key25": "2METG24RDiCxtejd2GsRdmgoAsGdVhqqL8scpdcVsjbVNVC3ySwQ5sg5v2uMUXvvz29ToLvcWgGMjPJi6N1vq4hB",
  "key26": "2FwiWPbpEhudR2pkd5iNWvUM4M7znoqVMqPC1y961A5HnQpgxGeQRJ9XxV2kaTM7ZrRwebJqbPtbdkf75tSyYgVW",
  "key27": "SDNG1oYm8jcCVw6rZY4M5wAeNz7Kp1j7QnpwjTBvtMuLYTN3QENDHxxZeVAggpXS4owoscjGRsbEcB96C76R3er",
  "key28": "5wJo1u5sFs7VhyyUFk5ggtwNPCnzeZSK1a9QVyn3jZX6ZGBWDrTPRPoeN7HM3kgxFTHhLMWZmccny7h1KZBHGxNi",
  "key29": "5VWonj9w6FAUrZQKffK6BiNM4SfxreV3HxaX8dY1Z6vz8gxJaZKWmBu55xHjrSMeRAfJJuYXdnunuEW5QRMNiKeZ",
  "key30": "4SmRV8RksYUCW9uDHahQR5dSBxN2KaZ66LPz2fi8VySij6DfLyQ6eVQt8KpmYMbD1FyBPN8T7NTm5AZwm21BVggC",
  "key31": "4QRaXQMrypiXwEUiKZRKUXNZLfnYohdEWffi6Zd3yiBJgdpmBQQkn2U5QtjPxKDDxacUsP5m9k4BSBCAE1FyFJ3f",
  "key32": "57pCgKiDn1pVVVfWKRruoPdun6qgjgg546rZC2f5eAVJdBrhn9d9miTJBwBmvbixaX9kfbde8AxadfW9Whs3Hb15",
  "key33": "jV4nYWtcahmAoKzhseevUc7BPvX3RFdkv2uSJuh4ZXjXdxBrEqpm2SfY1BYmrYWbHB2rxR4XthhEG1Cum3zmTDG",
  "key34": "aMrtpSAPuEYiXJMxAyQoEnRq9cx2s6V7Njbog3AGzMjarJYGumRHVzB32Bv36wwy3uQ6G6vAbsXMqpcA9RHEcqc",
  "key35": "3FYT87DpXPBtZcCH5qGdd9sTgn2uhk9LZo3aqzMTSn8NLCJ1AHLxma4Ey9nhGCfwPdZCsxm6BBM1MDaphTgUwFsy"
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
