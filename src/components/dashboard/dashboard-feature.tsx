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
    "hjoKgsRfXJgQJNV3WjmYXj6Et1EmdsU31hC9ziGM1mmBLq7NGPykJK96qH78qubhZU9cUQRTTwk1tWS2cbmqSbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1CbzNPgjZdX9MSfnrKAMHV3H2ZdYeQ4fsjJarPraDrmu5LbQAqr8wMN4fzXXFj5ieYTschL2XTzwN5t97dEPSb",
  "key1": "4J8LEo5J82gSk4oRBXHFDVR4f653iHsAaHbVGk5R5SxkfULzvPMoQVktasBTCftoaAMKVYyvbm8nNnSsuTcSyxK3",
  "key2": "2XR4ZZSmn7zcDygdpKas1DEUSf92FNohZXLFdgPLVrgohaeXR6i7xrUkwZPnTsK99GLQFMZMcTBbecBrvC5srPNc",
  "key3": "5hWLSmxyheh4Rp1mYGxyZSMq2AS7sc2arZmgt5RtnZYbcgaQoJMoYaWHN1VhLNmCoyxXm6Xu1nDrrec2X2YHvx8v",
  "key4": "31tk4T4iWLyZtsaV4W4sHWwum4cHbz4uLnxWa98dGAw352U2JmRs4hWJtB25gAWUH6WazfDftR1FhLe5MLs7FNvt",
  "key5": "3nBWHF9PqwjvwUieVnwwfuNoio7ka6X2cHiMcg5tHSygQuJTJgDNcSZv3wFZqHSjSHHNZRbRxmHEsmSRguHREgVq",
  "key6": "63ztheXzV9hKzxHGYRH58ADhZptzqqt9c7LxNyi5wMw8G6QKN7vnv2VFnQ9rVVtEjFhiMF2wqTCR4PGXzYwhtHbT",
  "key7": "4EddUwMPT8Xjvmzu2REiKfcD8BDvcTYASsyJ2yNxtQgPKwE4svn4cLB8mpYd8rYiYQbxe2nqvmiTsVzVSydipu2g",
  "key8": "3evgjan8CxMYr7VGpKNUc67n44q87Ne3mfWW2yxLzoDPdQgCwhe3FLdMqbcFGBycKC2YzLpKLDxTBcifxVgqTLHh",
  "key9": "3BESnEbT5ViakuFcGNKWm2rAAX5kdR8fJYy9ExarJvCGZLjEAW4bWXE2MaRHki9eLRa5jn1wwEBUPLrMJEwVxTPz",
  "key10": "bRx2YpXddh45nubg84JcjjhCFrVG1wg7ZP8qDktjTGxLTdUrttEa6NXteTNJ83kC3xSpnTrgzpeV7mf2T7tRnyz",
  "key11": "4W4FQNfXUCZTJS6ae33bq26Kxz3Ww8kyGuWhXsLq2zUPnDYn2fPw6nioCJ2aWxAcuyUvkGCU71UfMAynUgeu3Hsd",
  "key12": "5ZUmSopTWLFNoYdbUYLbice2PtRyb97iYBfcuBCVSLpysV8QtNssKahFkWYnz4xK3tEWfdySjgt8SbMabNNYRDiL",
  "key13": "5N9n8zhF27fiJ5KgvPMRxbvJZAD2LwRkyDUP7NXt7V1tujymLMVbjL2zPViwKoUCkzZRwJ1ZYQe4mbwHMUVLsmst",
  "key14": "4N8rbQifcFN2kwK3ayZMr9iBbdk2HzYG33z6peTi8hQngvPwCXP6SKPi2AkhmyLC8QqPA1MDk8J1ES4CokSbNKkM",
  "key15": "59oYE3AugTQb1u8AUqJeGdU5brj4MiXbWxyMhJtbqng2wYYPJdmvcS2a2XKg4cd1zY1Lpdtx3gsSJ3FkFHMd9rGh",
  "key16": "bMbsVhpFim7DUpDFaLN87PNy1933tNGev7c8qX1GNhMnZKUhZM9ubCQXSAWex8ivSTrbacATV6Pm82bDybWfb2X",
  "key17": "4Ztrh5dNQf69zVrFXKE8YqjpKYMytPfrEgzxjPBspY95T5rVQ7HmsDm5B1JbyokUWtV9DKtEumeErxYwhzTbVSqY",
  "key18": "5tKYkxyvq84ZnRa3pywGX9mccZGg12UF7xZedzpz6Dtr93M95NRMs3Jrj7se8Km2oGJg4PMfCL9P3v8NsTDuRszH",
  "key19": "5xXXa3i44zXV46EZ2W272UoYDQqMvS8v7pjJctkyTArkw1CLb5uVVW3GT8vNGi7nnHPcVR9CNR8YhtByLS4GvpmY",
  "key20": "rpfdXqvQSvt48Ct9JhRT9bnLUWkX7rUtHGXAqvXaTSrPyNyKMfRj9bpQ8GuffVHdx6ZwMBCaVJsS8yANcR9u5uZ",
  "key21": "546g1SUULwUAC7vVDYyLko8fX6pbNvine1yEqVmoS15b3tW7Vz3QS7KFULFoPoDXM5RZri5wTGsZzDEnurxvHBsd",
  "key22": "vJ5mRnGV1YL35HoRgaRf9FkJ81TEH9GeNYbEnkaq7ZTC4K8jJSsRFSmgi1vBgeFWmpfs61t3cL46pYRfzbugjfE",
  "key23": "5xeLnjbtSpmTsJYY1oDxViJewByQLwLdWeRt6idyewPaQDCq1mkBMYHoApqazpCJNPc3vPjUdJyTVnSBnfKTNwcN",
  "key24": "4QNGc3qA6gJJhJ61PmexYwVh2ARWAtnv6AiuKV63SehW2SJRwVtJkgrYqWCzDeUL9hkLBcBMr8sXRAMQQnJkk8PM",
  "key25": "3deBP5FFZw94ambBYPGKzAhTDqfmKk7Y84sWwZ8vDKkwZnhSyKYWm56h6oEQQZqW47Fo6JpbfDvh97HPB6djRgYU",
  "key26": "49sDzwWGPQSx57uzajHEDXER7DQy1hqMdkxcf9Fyfo2actZfpg3n8iSBVSYaRM6eAF8uTvP67AhygaZeUQsE4uag",
  "key27": "5gQiUfXACTaziiMXSzU7Vwwzum5zrMtzDF49cgC1Pgqk7vRGmWqoB1pVhFJwAZne6MTSutRvPZMLgLwMXwVSJoJc",
  "key28": "4VhMCdDLCnkjZJzu5iuR5fJmjKwFvQnqEj2BpoRmEhanxZZEYh777CXx6aNUB8s11YqzpGLqV5TdfNvVFzKH6AiV",
  "key29": "3evoEpkZ5UmbtgXYRMsYuueoG6ZVNJcTwECVjnsfMkXuS3qcvgrLSu9XYt3qjRJznJBf8Bdf2YryNJsva4X7PTiJ",
  "key30": "2NyRPFrWyCKr887M4hLgUJ877F6MLmcHCaG6yiCCuDva1NEPzoUkTJVvpLCdttP8QpahXCwuFHZjiSKEkAk3SdXc",
  "key31": "iWLxBxCjwQZEYEMzCUvvLTCHFnbzApSebXAFcvnTonf6myqwypJffVP6sadzbyZ238ZuJYSwqG28CMkxzmpoQDy",
  "key32": "2Hfcuf6u9kPKsaYAyYDvJeRDEFU3kn9cVFcXke6LeRnt7EVZk45A9BrEKLUQykk82DyBMAvxybQovq9jtHX62Zxq",
  "key33": "5dp24tJaoWng7wceS7J8cWXCQDQpGoyxsbfF1GyiKrRy2eWNAmseC5VSPEDmMsfJm3NPB6wyBvz3JGyuQWSydnEC",
  "key34": "2zdGeBUKfo4iqj7Dpftu8a9kGFGTHLrBV4jsbK1977449czHJXkfBMpacpGEFdCzXmbAQNz3xd1WkAUgVSDwRvdp"
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
