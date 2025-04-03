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
    "38f4KGXxSfFDWTcNc55sEBZ3FcXsV7f7SYhaxXvvNooNJFdZs4KedL41datb93tTJnA7HJ6GT1CNRMNxae1jgYf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujKJNvbfwpVYk8Ep4BfAgrXJuu7sniYtS366HAzyC6teFNDFQgnTg5EpaoGyzauxZBQNznseNpeZknEcAv4Dn3H",
  "key1": "3ibXbgvXVyP12VjiQggGe5USmzS2w1aBjYxntLwKZF6Wy3DDvFVTV1GmdSNuyjqyBGHuTV8z4oNrR64tMh4wrgc4",
  "key2": "3G2QeqzP3S7CJwLv11372ADgi3khHvRikVp4LMu5eKp1nj7RhHsrJSqK6yqzYTbyEErijoSkqkQYMuVttXVa9yoA",
  "key3": "48PVHSac3MgBLpUNcbdbKpMtJSip17wmH5vvqPBzAqMJayWpTJqYUoKJQ7bdc35yaMi5sJ4yryxfgCM6SU6DiGvg",
  "key4": "2ZL1EKay2TZ98GUsjqcsUGrYr1hHGPEEmVMqvX8dkY8WVKV8vhqTMMfmzfnZiYhZ1ebiTAB2Y7RB6QDz3GwKFudE",
  "key5": "58pFGxPwPJXJ2H6sJoNB3kbbgv5FmgjqGacLSM7J8QoVMG1EdiVETbmBK4EgDSZiMJbCFqsBNMeFLRmvL8BBtW3f",
  "key6": "4hzvUn3Dkni4VmPCbz5JtHwREGZc4kwZ4QZh7iGjYY1caKsnUyVowZc3u5YNugSqZtnpCzQXcR8b2eCgyaP3LFjf",
  "key7": "3QE7L4bVVVtidAjpT5NBtkheK5h22sZSzCZvTVuM8mhe1VkQEj3xMW42ZM29DBPgiYBhKtxfDH7A7GCWWxM6kcK3",
  "key8": "29hmszpLPuDy2GjjfPVC1FjZLpJZniDpmhhgspy6GeD8CvmYi897BPg27wtx6MbnMoK6bCdJJ9iVRvwzij9SXSAB",
  "key9": "3evigiL3vw6fb9AbC99L3sy7F2omgVUzqbxQe2PJCg5Ho5mZhbY1Mt6JkCiNUfiwxebWkKfVerqDvox3snt5FTpJ",
  "key10": "2byxZujhRTadWSqCazZVvjEMbL8aQ7AuxxaYiKcAZCPN14FqG8yFvqxYYm1BAngGJPq1YvaMzeVMQFksJcgTNMsW",
  "key11": "P3ko1H9CJPurQwt7P3wsLisSRvG8p2cDcLM4ahehCHAriywSY5mN8cPgpptDDa477s9pPX95SMeCVmLMFc5gLfb",
  "key12": "3NNC1Kzp6B4A3vywwjsaqFeqWmV7sQTLjvZZPYJmrpXVoBqeqWtjx6NTRb8R4RPQx3jqwc7tJdnxRvqL6ptePM6K",
  "key13": "62eAzjrUKu1r7X6oerZPW6b5xAvuduB4deWG1v49qsLNWq6NT2LoV7AzRqMdrG67dTuLCD44MJSguugYATdQi72B",
  "key14": "ip4ZNPnCRRLebvDKNjfMAWcssNxyhqYHEhQWHYgfK9UqnwACUp11YrRB5SxxwHT7JHcA1qhwq9Vm7rwyuaPoLQL",
  "key15": "5kCbWHB4Qw6uY96k1WF3FfnDmttYaNkNhxpgt6nKHtbfTWDKL6rzZ4oqC4nUrXkc8hnvAGYk7jRVofB5P7KQvLfN",
  "key16": "53cWwNzUAo6tNQeWd1cnW8PmBRMjuzvrGJGy1ccKxeyLry8cqXnPeb9ALzTZeRokd9miJ4RmhwtV9SpoADg1YGYX",
  "key17": "jeuP2G8133XZyT3goFaR2MiF6enWDfw3fVghMELoEbK4kw3ZxBxPHVoewfmMfFuX24i7RE9JUcr4BYtye9rTvsW",
  "key18": "nn8pjn6TRZHvt3WGMSGDKyJXik4J8Nz4nqfNiup6s5GevSULxrRFdjGJiHCH1Z7MPi4CCwWEJwkXXfoEhK6hqYe",
  "key19": "KAxT41kkWjwXfkPL553hAg4szK9y5T4QPv6LuL9Y7LxVYfpTHm1E3az7BrBic3f9bBKVCkpoxvJSmKhx5oCrixL",
  "key20": "2dwkHAXm1Fqx3pAGpuum1bUTELCDacjLULyQRtUPQCrjVbRoo1bomNGuvdKVCDxSrBTa1LC4fdHmd2Z63ktgg257",
  "key21": "4Uyt64K4M8uwCUDwf8uXuTTCGhGdGKpByaZbxxcnQ6zqxs7Jx1HWvmkzTAfbAeEmNcnprjJd6mTQxbGiuW7tb21o",
  "key22": "2KG6FAF1FriNKkC3iYAQ5MnjVbCWSqg1CnG3CLHBHNQN8Gxvyb87eP51bbbiCNL8xWiGa6n26q5PaC2wncHTMYcG",
  "key23": "2wyAkKcbpz4FRorMFfRGJs22zBWXLPdGxiMEB7KM3JnupnLaQ18minBv6gMDrtiPW9Con7zNsLoJ4Nb3DtfnZDLB",
  "key24": "3BdjB2hbzRDXNApWq75fhEzT7GobSxGgjjaoStNSB25bGQaxhpRoL4p8BWQv1688ibw9GTAYaEhvz74nKtdg4s7b",
  "key25": "3dBccRdzByhPbGM7tYQnmLmL16LioheH4FmoA6sMYHQRLQw5AG1izVBCZjdxE2faUBcLdwU2ezLPiJGmVfpMjqYU",
  "key26": "4ADbub73WDEZ46YMYwPH9YqwxsgDnezwHLkaWtXR82WcZLJsGKA5ksrZ2qNogM7u19Tz1Axjma7BoJQjXAvFWk4R",
  "key27": "3GZfZf1poxwAE6EsNvcQRFc2SiGUmC98WUnKiJiUFa8SkwwUVYtGbTT6L2qV2QWcYcRchho38mnnt5hAk46tPjgQ",
  "key28": "5wp21a5439shB493dCQ91dvmGDPvXkhkkaRF2EnNHJ8drU4DRseHSysqzUpQuUbTEfSoKCST5dtepMW3ajiWD9Nf",
  "key29": "3rme5iSLNh6eyCHfGjJAeUM8PFBwbq7Quv3BU4KdpnTpx9tvcs3rML2T5uaqRQw6yQCJ477t7QKHF11LzPVncyMS",
  "key30": "PpG84ysnHJ3AqLPLYcVTQMnJ4TtEpdyTKL2EK7Ruyhbx5hvVj7kHgjo6Zqpvck2SvVoKrkwYCqTGieeArXPwQ73",
  "key31": "5VvrVuPNCVF2cXnZ3mmarWVr92dej4AST76dNc6GCQZT9cUNXTAWuDzFoCS8bw9CrkDsQa6sfxRNEmzwqVr93CAR",
  "key32": "5sr781H2Ski6vU83UsHKqp9Ao6Q4bs2fsVfQoL9dfQN5BjhpxTGyFLWbjdD2iSvDWBEqRA3AKtMk7ahBXtJu71S",
  "key33": "ceULhLbVLXdS2Y92FA13Sz9F7oFseweT1CqnsnJ6jWUYq5Lz1QDLCFFqebPid72fjuvJMgLXer44E9Qj7LruJuh",
  "key34": "2xVUfmY8EwRGkASXLM3i5QxUEHza4JzvzzrPiPJ5v3PvMTdBy9XTPbrkZb3eRAiCpUJYS57LDrSzw3BTqZizFoaT",
  "key35": "3LAPKrDTvyH3VcbMMZ94j7DKzTNJwzCYoeunxmFE4uTrFDMnZmohFoiuFRCBe92BYjQjmUvXRiznRFzPfa6xgURL",
  "key36": "5XjLuLeK823cS464HSiZ1obN64duXM6kHAhC5er1rDQzAfXR1KvQQRuj4iL8M3ZLfHCyjxdDQb1W8GZdrpxrjh3M",
  "key37": "4vcHUcY5XAc81MUcqyLW3wZrkjXY3dACa7KdSXPQCqSAgSkuhXUDVZkAwyD3EZrZgBj8cFMfxpn1JjQfh98RTE6r",
  "key38": "3Kac9T4Su3Bz7RFH6bAjbHRaJ1MzsJqeKHdZVoU6cubd1tsC6AgCQjdHxSjVEoFz98ws4sWyKJNMLxm54snAq95C",
  "key39": "4LfWQhPkfYjJkejoSnDJAcxmrGrdZ5ajck5Q978RaBHYgRaAKS8qq9qdoq89BE1tzTJfuFUrudo3zBwqUySQQGWd",
  "key40": "3ibpNyope3FgEUBwfEfnnFKgazVScLwbVA12DMiCm9mUe7L9ryDDn8qgaZb4bBkWTKhNuqFZE1CwP3xmntnVWBuA",
  "key41": "3tkYGD37i1thSmEmrqK5ayNSUa6AGPPBP8Y94YbGLnygiQc4N9xq8Gvy2hCQj7ggwCBfHcEkqVkN4pFe3EvFPv6d",
  "key42": "2KxoBp4BooyqAWf3YSyaVTVZp7bnanYU4i2E2UCVemgybZyMvpsnzRv7ZHZY9h5rYjupKhQKMkHbRt4KHYjL2UAz"
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
