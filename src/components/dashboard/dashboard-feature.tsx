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
    "5CtnV4npk7ifyZB61eraQjc2Ew46yTBoC5ysJZ9HsexePGKqq5Hiyr9zWprsk85ukpk8Kt7QK3KV4kVRA4RHzsyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHc9fYB1MnVmHQfrtw41UfGNpDJBExQDNUY6RX5QtDKQB616bQ3QzHrP4G2kr75gyLvhiJ7x2NA4uqgLKqKt3t7",
  "key1": "5ryTFXEWrGj7BLeQF2PJS3X2CWGhwVvPqmPXoRF31D3nNVJh97njLabqmbupmD6ajiXFHWbF484N2EJM9uWDywzg",
  "key2": "4pfwV1sw6EZeZLfvKAs3k1eAeuNYyMntbHm7cw27kNDYcknwEhARNgtPwPpnkKoYuhYao1R8qvnNr6pMr94hDPYH",
  "key3": "65ruKyRdSJbqUGSoyCyNjbR2Cmnphv7RY7Jv9yrerMQfZNER5vVFPpuskyRY4phpqhENw4VYW1kCrbfCqoDFuo4R",
  "key4": "2ocXBVLNSdCAMHpRNDG7dufuHZDev9zsyxbVwzA16vd8SifQUd4Sw7KtxGcNmKgW5S4qRKr87p4nMdFXy1JGJJN1",
  "key5": "vnFAFmqAeeasbRgqSCbHfdcjq63TFx1H6cfXAGDcCQhvHLAKR7V6nyBJfaMiMxDebRWnZJAYwcH582cTB6g1vT7",
  "key6": "2UWU1Qe3yDpHuL1XMoADTnPJL94CWNwgQo1p7nXtByZEkgNZS24ufxxeCZnW6MLfysfr3y5MpSWuJpwn5C6icmKV",
  "key7": "34143CLboUWEnoNuYKdysHxBi6ivwSHNMKkNVL8YLQQHEM1eWHZcsUwEcmUEgGwLUV36RnjHtvKx7MuFcZKmAuQr",
  "key8": "i1HNseeER51BsD413jvD1npvh8imUNsmTkNo9xdutPxEokbqNqfkadAwe77N6LAq3v4nrRfs8ufAC5nk81RFx6R",
  "key9": "qywivWiik2C11L2uEhXSkgtCNSGsxrutQcnPJJx8hzBTqyVymkMsTqrGizxJ3bAp9twJof6josPF1JHYJ6jrJDx",
  "key10": "3zifbrG4ar7vizcrg1J2qqkxu4hka2chLVxKV57JjfozeSpZCF3bZmgVxGvS3s31kJD5pdWLT2hjcVFBLzjJJ7tm",
  "key11": "uWrFwxs1g1FksFGoPD7HMY8RCqowHVM8nHmnNGAbqTpvqgyZmxaFtn9JzmtvaeTS9Dw6BnC8YkFyMadhpQAtYwh",
  "key12": "2okkkTuSKguRZE6G8HHkmzVNTFUuAdPfjQ81D5tpQqyuAxFBTxwFLUXV2iQsXZAK9ApY7umPWaf4xidJiUf6Bs6L",
  "key13": "Nfc62ZsccwgLoyDJ3sTAYEMBpEpQpibQ6LMAeFTZvtutaxiutS2ku6u6AsDvyux1xTgtq9VmCQfVTFS5uTJbisr",
  "key14": "275mv5SXEHstRyHo6YpsfsJQyKd6S4fLX9m4sUN9SFd2sxZQrgjQUe1saQJtm5nKBhH8iTPFHrLpaMkvM8K6aAai",
  "key15": "4hNY33qXmcnv4YeSX3CpnBBBMSSWXzvTM4zLitGmwRryRRZEADGvkSjUxzZ8686utN5x5G4Ekm2yNrbmMr1W8p9v",
  "key16": "rtWmoyHrt1F7dukz9XbXETfrEmUpSykwfMaTtxmvMHgDNuwTnpBkbAKoPSs6pJeAG6Ws2kKgiTwVoVK4m78R69N",
  "key17": "2LSMZSqDZTihfFUGGTyToLAtPVcPGS9irGjkSrfcd9M7btcPsWVGL8M6s8ipBVipDVD1SNYUhGiq7pZ2npLPejQ4",
  "key18": "3xR9ZQ8189rDwak49Us4NvqhNb74SRocp1gxkcYAydfAWakix5JxAD6SbKbnasjJ7PRgCDFaZEK82GFsxJzCcNxf",
  "key19": "3k7FcVGdLsaFRNuak1vBcZYhVWiTf9sZrrs63nbQ7x6DPt6rFNSZPty7xiWvaTgufaCKLvF4GzvpVrAcqGhGDEvo",
  "key20": "4z5M1AH5DYUYGfFi674PGnZCX7Cy7ZRU8RmycmeJNDVA9wKVeq1z8oGPHRdK1nSKLaJJ7h6VZ6vv97hgrYcKcz77",
  "key21": "4831XmDFZvMXbzcR3grS7EkiAYisyhVz7Y6jayK6Az7z3FRe5pbEmsJ6mEBtFz1WVhYGbMohDhroMf4EMrohv9YM",
  "key22": "5CKKvh3CTu3Z4ZgBDVNX3ntkvTCjJTF2jGcKFPoeZHJG4nH52tFUhaDoCSd1cJpZMbt2e5bqdbJDiwKG6AdPkQY1",
  "key23": "2hfayehGMXnpmZBwMCka16TNAmm3oztU8Q7kJDi35HSGq7qBRWJ7khVXQiUmAtX13w1n3kpq8xYY4XWff4NjBVw",
  "key24": "5q6CNkNvXRPurbWrQ5UA5Ti6RmNMg4Cbva5UzEGDQQy1vjDfeSGQtgGLSDHz55rZ134jgfHpmSR4tNcbUmdGnraj",
  "key25": "2aA5ecrJr5nj1cWiCcrEtLbhyJfpuHkA2E2LmChHoGpcEZSqr7D8Rpo3Hz2ApbshAbJSftaa9UesbdT5XSs6uauw",
  "key26": "59e9giVSxx4nTr3pPjNCFMukJjD5p5p2RWgvnGiscG87Nf4H4TqGYfbuZSy58uGEvRH6Kn2kvxW4jUzqSngnECqv",
  "key27": "3rGnajgW3ZbZfRpdr4Jaz5YcFVs79Y9EEzZDAjrRAbkCv1jiXmC3rjE1S1GFvxggrveArA6uJ3aTsvv8AiudscAK",
  "key28": "3159M3JX1mZ3ioxRTjEcP29Wv2nrrFsF52XwDQ6SZcp7uEZUhXMsuf2d1EPNnXvJpEKJdCTYvUPLbb2Z3Fsvkaa6",
  "key29": "298FSfFQeALhwwAQpErs4qcqPfa1SmgnMaUGredMnkxPdxCa3Db57sQqYUJLBw6hX4FC3MTttwuD2jxWh1ebcQfT",
  "key30": "5LjSibXPt7YQSTn3D2zmLozEFqDMjCzNf6i259e1eFc2PtC7ejfdonsieciM8zaKDs3CrkH9R77aVcJhiqcy2cAw",
  "key31": "62NSKbVazjWaChMPrCctuoLxm6X1joqnWFbjCah8fYEpo4aS4xG7up27F4L1tuhRUaKW6rSPeNbJ1M16NFHiftxJ",
  "key32": "a7B99ZnFNSfjheAeNJj1vkdmkqqrrm4AbHwRAerANq1ZJC7dzjzZtShxoggsvGL4Wf4VzLzY5Km6CQuVvzHMevx",
  "key33": "3PHUL6LbhdDQg1qAHsJwZwTjmoC21tPoAAj6TbyCckjarqwzRDfENfpwguXMRHAtECWCEgsSmb2zt2D4WTFmD8rP"
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
