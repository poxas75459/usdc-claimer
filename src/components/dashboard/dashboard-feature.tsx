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
    "2yWUQBvppanVpGddzMfMgvH9xb5wnx7TdErQqNg2DHNcgARmm4AMAwuJkunDsapMnhyniYyavc9HFYo5x23NZ4SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UF6txKyXt5gyuPjgxrQNw1NmXWauF7it74hPKnsTWKyy5fSKy4KAiyjDWLEtyS16FwKkCo7CM1KofkrRjkQ7WBp",
  "key1": "5gh6jMXtUL4wdpSmdTm1Z6MREcqxNVjq3tCWTyLSDEnRwv4XEJ6jbS8JK2UxouwKCcbGsX66yj3QvwRQA6Xiry4N",
  "key2": "3WVECfNJwxmJwYjcq9UoAF3uZKmp4JLeDLeBMsp6KKQcKsvHM2uUmbqbwZZkAu9ZeTN8iyfTkftnccgm3Ks3nYEq",
  "key3": "2tcBJRX5aaMKTYZHbaFB3T3yw4G2KV1Sd8UUZVE1CWRDgYwcvssEgnbGMDR3tW9rFUX1RQco78wTN3JWx4U9Wdx8",
  "key4": "bnh7Jr6jnMbmKkKwo7bg3eweoeUejisqrfnog8sTEaevNPURDgGprxViytnaBnh8Nt86cob7KNW3YyHYniRakz2",
  "key5": "5xHZagoC2ZdjqAkwEnGE7fEbB5bJHHs18BR8nhykk7VStWReVBLPVoGezQVxGiYpxH8T1y94964HDqK3UAG8DsNh",
  "key6": "q2mA5t4Q2FaDvgHvBV8PPMaMVsz3LQakep1TpguWYGeYxVdaGKbjSDbCeXPnSUzyCMkQTLqe4SYS1EsBB9NFvsa",
  "key7": "3mkTtQLUpfhzMmRw6j3ByCSMkNbsL3V71icemQTQyjJhMcs6SUrwjRcJGjsimNV2S884CZRuj3YjyRk7WQXVi7rp",
  "key8": "35g7qQEjXdSyo715SnuCkNyH4e1RLSMXEYnbR5i2ZWTAznHDuJupjudQro5ZSo9c4Ug1cXkecU1vtm8kyeTK8AAB",
  "key9": "R9iLUzby5ye2TDh8RR9aHxZHALULmv1ax5xbi9fK5WiLdisVDrPNaMpUXd2qRhinvnYLVpFCjUhqeYe7CXPfWpZ",
  "key10": "4qH6ZRxAvHF7SwVFLFPvnMPeSiM61xQ8Kt1fHh5smXuEps8wSFQc6sqtNFYmf5NKLhdxVx9b8aGosWpBP9QssxY1",
  "key11": "4ZGVRmQvxm8nRHjGJ6B617BQZ6FARYvuxVRY4WecKB57qKCKrA9Y8fxgwvuKBRUQPE4q1m6LsEeCNiUohQEqWFpo",
  "key12": "5dERVD96GrfNupuW7Sb4cBBXR7wp2WxN4gzeqVHwBBfnxptcdwzjETx1ZAPD6pKYM7ebwYn2TGn8tNLH6PxUSTn6",
  "key13": "5GmfcS1aUAU9rNo4BjsUyAmYdoG6uqgnXnNKAUTvCL1smVV661Bbcr7PfGD7oMLCeCDx19QmHkrVar6PLMhHE614",
  "key14": "52oZxykHBinkF16LKc2BvhgtNvDryGJGTrnwVo1HUm1Nbav9dzoVbxY7TsLYkeeqJaamqs3oFFahtDiEFBwXd1xN",
  "key15": "wvKF87y3d9QXbM3EZULRjLAysWx9GEXNyrdkUpkomyZzit7GiCxoKtcmW3KtPfaZirV7bcToKW6G1K2WDHMHW8q",
  "key16": "2gJY7gf1bRbMEzxaExfXxWaBHhCTo5wJ2Hjax63hFsmHLs7MVQbDLjtJRyEXetSwy5NQpMTdcotRvr6RySMyN5Np",
  "key17": "4KbKou8fieDbzUUSGaXrZLH2ciEZ4H23MUZtksqsEVakiTmDD3VnC1KyeniUA3893rd4HaAz7GT2HtPGs9KP1qTc",
  "key18": "4eWC3BT4VdWCG8ptM1ZCTPdUAv916Cgr6KcgnaNB1qAGXpMeZzN3vzETqvyP9RBEtoiidP9qVzGgtUgqYiL29rtr",
  "key19": "5kbBFYRCvVoxdN9YKHLKF34nJ7JPGr54Q8HsyEr6XYtQ9cqMWmqyG22MPwXcBKaDWLaRAUSm78XcJvraa7End81S",
  "key20": "YZ7EjrU8mf688rdDFXCHXAG2Zn91k9inGcJjHn84FqM68mzxj27uGWXZyYUyuGYMu8TpgAsVryPfA99CDFWEy5T",
  "key21": "4Jx7Gcmvj18JPtHPMDewUU7iLifg1G3XLECK2rn341XXmTYnSgWmDc61uFwzXS9yXY42X777NEHaqasGMehfvYab",
  "key22": "4N6DHdYorJ3HU49n5Wymmt9VgxRVH9TveWCiJqkSx2rf1uni3HPT4CLsXeohDxk4DJpfhmayzLKjqDP8f2bqDjRj",
  "key23": "AswEud8rdqhzNq2q1Y2idTLifJ8Jobi52VFNS9X4rYADX3e5afYFGuzDpyhZiq3cms1mAQZGitGxir31w1EMmW8",
  "key24": "3JoDG1Wyp77rtuDyWYsgYdAge2VMWwZhpsF1GhD7PeWAjjqZiPczx5aRNyKgTEA6eka4n9A8iJ5RHj2hZ6RSk4RA"
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
