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
    "5LpBqEE9KX9s7KaD2U2QT2nNL2XEav2jfuRR6Z3zRdpMZD6Pc5zjcDUnJ1fJBqdRzxfnSfrGZdZ8BSSVex2UiRAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANqQXiwdVM7TafkcBHtstE5CqfbxsCsB71RSNoyuvCRFsj4mjTzXKx3xqFYXkiSxcsXwHx9Pbg2GNJ8FnpRhGLE",
  "key1": "3SHko4eaSJmLdN14U2eSSVUJ2bsMtA2FTXvEqAjesbZN9K1NizqJzpLuA5WYiy98Uc5anP9vtquNT9q9qmr84gUs",
  "key2": "3j9JCtfubsbSqgJkW1nr19QDDR5kFDnjLfEcrz6c27YDmkQh9coCxMXhnjGEVapDiWBNNbpbEHzafN16m3hCmqij",
  "key3": "pyyYkbysMstJYQ66y4haNYYdsz7saEPX1p3pMvbLA6EFVisjwBkmKSMtRTzPzUBK677EmCshg8Te8L5ARo4UbyL",
  "key4": "5VWRSXyYZDXLb8GgiAhXURbWzuwSwx9umqzhiKpQB4MvwXjoM3Pue4BMWK5bwyxk62iCKYCrSoeWVmAmKwVzmVVx",
  "key5": "5juGqjGn6tc5oQjAQrHyHnLxS3ApG5MCwJKGUsG87ZbdCMue1ZdFFehzC6nkPLypYFSLhx6y1PA6mNaHRK8eFRwV",
  "key6": "XyVBjqQhGCMYdZMRNcbpPGXMp5mZzABrRBkG51EvB2yHt8jCZK4LvC6dnhtcqGb1Pkcki4VU52fNT9iq5PZEvQP",
  "key7": "2AsG2F8Kf5M3xy6XMMZ4JqDVvS6xPW8WJEUaUEnsYpUvMFDx4JsXo3TTRJkgoMLMgj5TburE8ZvKh7GN8wRNoHY1",
  "key8": "5hwVCEyL2y9BXfmUffBEA1ZTFAx8mQ6Hrfb1Kv17FCDw7LTLprx7oKXemo2YU68tg8gVjJvWL3Ptvrcx6YvXeqrD",
  "key9": "QrjSEFqKRLMeqR5c4p5hsSxSEE3WUDSrLViQcNbR5U6YSqE7mrUKVpnRtsT56WK7ckmxRM9E68fbXyX41bYYTb8",
  "key10": "2FtWNSTa2U7fS5EPDojWacjmsgLo6B1ZuJMnCBq47PQXTzHbRqGnwNmZJvkdpFeFfjMzkCBy43fLT3AzNDcZi3E9",
  "key11": "2CrzxC9RoNHhEmmsw54Jrm3UzehD4NG2RTdRZXkdXMPD6PPy8yUsfx3noS85NJWzBCcaev8ebYusfNWTg1SXdjwi",
  "key12": "5c7dRWQMsFHaeMxvrj5KUQbd57RpwHv9jhvtHpgNbJrVV9KnVtHb93K21mqGNi5DNj38Skikz6Pd2YsUZkayVP3k",
  "key13": "37PhPKKZctPbMyYbobB95WGFvZoN1XSAnstGAfhMc3xWCcGvbScdtP7Q5KJs8k7EAtDBKJvPLnpGcyFjBh8MX7ZF",
  "key14": "3sfBJhJZpF7SuzHRodzhj67nDKV94vgfgtwG4HCvubXMv69YJziTptuk3Y6LFnuJAsqXV4Xc7QEFGgtc5MbxGAfo",
  "key15": "4dvyiEku3GVymHGGTYnnw3ruUgzyx2eVDe14Pe8HenFMAhUsbRVkUdFTwertbheNqePU43coEFTvPUyiarsr9WCi",
  "key16": "56nczVoArLFne74Y4erH9ZXaJfNQBxdVexnj6RoCiZTCC6mLzJVtZDH2y93pvCQsED3S9AnHaz418usw4M3tEesX",
  "key17": "2ZsgZ8L6jbfEkFzdeXtjgdtW6EqvzjbX9jRTPLDL7Nh7gVjY6GnvowdNMuLbeMQkVSTotAtNnbMkXzHwqAPe2EAL",
  "key18": "22eFuU4BEeF4uvFF38Sinpy9AtLoyDX7kax8iSW731JqPYrT92iYCiLWSQDPECCkxMVuxrwjuUN1XrPLoJBjxK4m",
  "key19": "4EU2THXyow4zVeXf213ENygrv6UzN611zMM2owHMEKE9teDssPmgjWDu7pzNhojy1kubA2PegZgTcEgRWfUNhsDV",
  "key20": "2sp9YgmmMEDvi7Xy3amVdFm1J8qRqiYaC1cVZVSLWjsXvWckUriJRapM9zWSVKghg3hqyt38STeFAMm5wWmgqDX3",
  "key21": "4N9K2HBmc3cDsSKmVytd4VPWD5jR5uTrQkpBntfxk6wiWJNA3Kf1RHTFC3Cne8qRpXhc2jJu9VYcyVMG55xYFKR5",
  "key22": "2GDitLSkkGdDmPu346y6ojFZrhxFwtpTPQYTLpZsssojLG5XFWgef5GWbwhgveWeJEEf5sbQv6tYkY47HpHFotgK",
  "key23": "2FpVGMRybWeZuBLZWB3VPrS9JAi8TGjkypjHujDAnmzrAsnVeizE6SD7HD3F9Vhs6BdKbeCHuyWkShb3Far8qtAS",
  "key24": "5Mvd8LpE7tT13FfEdZqTspj2CV1cdF4WpetbbLSbAhYdWFoPitS5iYUrUSWmpLGGnMWadKB2Qci9QGGb3SMa6kxY",
  "key25": "3jifjPa6gdjPSFHQqKE1f4SEPvBFeT4k4ty6wZYCryep7WeC2TZz16r1x5q48wNixVg8ypegqq3VSDNHzDBbo4Ng",
  "key26": "5UZthFShGZRyRexRD3dJZ5AmRsobrosHbfwUkfuT7C7DaAUknxd6kvqphUJ5SaYzUs3koUyUYxczt41m9tidAkCv",
  "key27": "4YaTr9Vp59VD19JgxJafsUf5U9jQi9Fvy2bYFfhtfN93T351kxZqrW9nE455rT5Rbu8bj3hSbKmwNUSRPTgcMgmi",
  "key28": "gLK9dLSi3VjjAZ5vPGDyCM3ssNEa5mTiGuzp4AS1KvsEPY1AquReGUDaER1pjdDauhWVokRSb2vS17yc2ND9fm5",
  "key29": "X9e9ZzJ518m8jYZ6d9Hzfz7vYxYPkorZFUCRNK758ZxTRHEjbyFcVfWQ5B683V1zHDQ2vAKUFHYGnRBqET4cTRX",
  "key30": "kJBEirsCcH5dRMP418G12JvBhovo5yeWqG1tyfRBMb2L4e3vJR9dQoxVrA91vbXBa5hNR7p62WCqumVax72i7E2",
  "key31": "3uSCcskrBGx89mqJ3D9Rt5auLHjj1wc6XTbWd1sESVe2n69kKBEyi9exN1k4MABEovi1MRjEcUNLEbbLEwFR228o",
  "key32": "5yoVmr3LXN7ubxudvEYKp8nZeyK3u2648vKMA3QCHEDWhW5GQv1hofQzN2faYxSZHZpx3eDqNhZndnwN6K62UUtp",
  "key33": "ZwXvdT9DuNvPj7GCdxWUFV5AHTJ78hPyftYydAnWQ95eZehXBuS5T4YqWHDffQEtFP8JoZ78JBTGcekCYjTxwDo",
  "key34": "4ZrAHxy7rbtMFpqYnNJtmmzWJXCPjfpzjK6yB8ZTAskbtwHZHnSV6CKyL6EZAbLVhcUDKqA8zz7TDJyW2NL99SrX",
  "key35": "2JKPUkD5w7YsqCwg3n7WEkpZrDgymMd7r5bUpM2uEd7g3WFWT3iQYRjTpMq8kiKNnoPt84enPPvecTNGYRjq7Xip",
  "key36": "PF88j7dDsVmKS9RZCXfLYBtfB5MZicnxoQd14uNJSnkEQLgaW8KhhV1NVp7jzXvPz6JH5Ft6wwMrhScmvtAVnpR",
  "key37": "9wLpaQq8Gqd5e7irKhzY2yTTXJyWttLNPpkiPfcR7pBQ3a1dmCT2BNrRJUBwnggchWF137Wy8icqFV9WbEkNeaj",
  "key38": "2PSG48ZD5pU7bQVzWRMtrumrtCQDaPQvQpX4fd3Au3LE4eZ22VjQMPped4UX6xV6HPqcAsb9rvubHW3VLDEde1ah",
  "key39": "22jRGE51kJVQZBugNwkoLqYbjM8egwxSzDVdMFoQ9jvXL1GJnRR2k64KQNHutcCQe4MPbmsLyHUDAFXpPReFtdMt"
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
