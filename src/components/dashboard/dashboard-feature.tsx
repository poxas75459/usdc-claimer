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
    "23M35fuLBbhynj7TeDatJVCdkj2JiEHvYGkbUxaz1zEWwQP8pjihAgRK3TxJcXsLQ8ToUpTVnmEN93M9kRSnxXZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmhu5xnKdGc2z6sLoegtAjidjhnympmnBdDxn2NsBbKidfJ6xTPNKcr3rmtR9uMtBiHnH7QRbMPiEt2QUo4Na1C",
  "key1": "5sVAHJihA3uiN7TyWvr3q1im1kUnK9WZtAExxytsNhbgWccPrKGhfbDeJ9fjVSEp3fdbnhGP56UiZ8WQSGg2yJr3",
  "key2": "2rJgcjwdt938cP3dW9BEvMfD39RGdfjouCAKvDsxLHqAkAwCmWDmSTEn8C3SS8ZRwYUwa1rCSSNJ2x5YFcGzCjHP",
  "key3": "PFYb7VLXjd5wJHxZ5GJvPMmGsW2PPzyE5dAgZpBjH7m5njjXzJ8vtZMzTqegCupZ2LvQ4vsgFsVTG1SXUkh5Eox",
  "key4": "3qVgwb9RBDztVqbTdS6hET2mLtsWM49ebra5TVCXGxKKL8RqK3mpukarKw9m3HRH4ktQftbwA1A5JoGjMym4rgbm",
  "key5": "gtNnLezdch8FTzQi2v7sxFR7PSEjJ9WG2efxac8V6mfa4wyD9pAWnaN8MZrSfEthNqthCjHcnSqg1YoFyRA2Tp6",
  "key6": "5bzpw8iAUQNzsXE8B8geeRmqqu4zHCRDTA1tQJKKtrs7yiJ9tnNXhfQYAVSVh9usjEHQ5oFv4BuHZ5gCF3Xg5cRo",
  "key7": "49pTDzYvLTqeTSChe8jiMwMUuZozQUC6qEuiX1NwZ4HbkRUj9THJHvkLEVbUsqcZ9WwZa2KCTMckhvYAJCX56QZP",
  "key8": "59LFwxP9oYiz7U97XUymTM97FEgyPsWeAsrgUiUDQchfPMyrzLB5owweGoVKoxPZ9zciGwSXpu9U9jjPr3Lm344z",
  "key9": "49bvVAW6M8XLoeTKbvWhL5Q2oZ1aeTr7e6F97CnBSb9LuEAUTqTXKMMGeVZq3SUeC2s1XyVsEcXcSWsR7undqkSa",
  "key10": "65DR3LX8LXnXCjPJp1vSkDNJW9SV4YSFXCCSKozH6ap7cPeePRBsFV5yb9LEnKJkrZP16kRhVPCBVLSbxV1edMeH",
  "key11": "oYD5LuA5TwY1Q7BfYstN6U7QW4dXg2LfjaSsLjbNNUmpLnZZC3545L1kHq4e7GKPmZqNY5CZropsnhPJTwuVWzb",
  "key12": "4hJPyHDDzxohk6npujNGL3smgQU9JJJrKUje2JbX9tU51jZe2aBfC3MXq5DQmxNFQ5FbV37NgbJpqo3NVW1SUt7z",
  "key13": "3mWJwnxrfLyZQfwcfcpsLm2isJBfvfye2GiJukUaHa4R9KMnUw69Y9t8qUxFDnqqEBAxxDPRDBSHW4VJqVdhEh91",
  "key14": "3oGszrSLPdFcEg6frGMjjCqa2RneCGk4PCH84M7BEcSboW4ucugthvHh5rNjqphrkUQt7Dk9hNnrX42rH1X18iCh",
  "key15": "5rmfdEYF1zNfDZoTMAG3WMuohjhQKvYfZPcn3tdfcew5TsA9US9yNuhgMUCgzX3bUxUVYgU4nSHCvnv9bUEzMANJ",
  "key16": "2kNtK2Nj8bCSLdpRFmR9c5oYFcpZg1vBxSA8hwfzLwcMPFFwcxPchA5xpLAZxrKn54TjXAJhM1kAvZPigqV8xHwA",
  "key17": "5RqbHrbz41WTnSy8Ay6CDzMd83ez186TLioYhYe2btRDRfjCiftiRvzmGpuTXTsjLptwzStHcmgKwwqhJbsPUCfB",
  "key18": "bqTHKUqjN9eUwKE8sggs6DZ1b94JVfCJAcTpExNvbWHejy325CKq4UcH9xV5ubzGqRtVXHaBrfVbnnwntyKffw3",
  "key19": "2QuYLQ9g2aaB36cDKNUYPVniWZ8hWSYbfsbPedmscPzkauohogvgi8zZiHWFUpNCzf6jea2XS2MF9zYjuuN1pK8X",
  "key20": "5u6q934NMYppUYwBPjcbAoSBBeaADHp2yUUe6CsAUaGScN3QRPzsvMZbEYnEg15iapUNa5sKKWXRzMq7Lkxb97Dc",
  "key21": "5bAiZX4P1vpj6HnKQgXSEnoBt5uG7SCAbm9G9er4DpPhbHqY4NLKHdSFgWaiE1VL7KxmdPH5tYWbaX9WhJR3xAFc",
  "key22": "3n4ZznpYSo1xhEQAtrUE4pZ4YVeWs2vhLPNWrmfwtRz21ryDTxxWmq6JCmMc4Zwgmxoaw3gHhqCDmcJd8zH6seFh",
  "key23": "3qyW9PZfanrZtdsSv9hgQGUxtAKLfE9GoFUmhrFoZSQrxosdBwrXSWwGakQEcNBn6VkeVe1ijFpULukvpJCMDk6v",
  "key24": "BptYzJh2rxCgyFxprJd6njYfYJPTue4NbxBDbCKZvUcYgfccVJ4XnYeqoXxyfNpXZoPNrB5FQsf9fs6zte4Z2kb",
  "key25": "5mxxQzFHFmSLetK9RtuCyiUARPZQgeTMScAnGEGY5WU2qgEKReheJcnpwezXEJFxvaVSshdXoPurFvJGVX76mRQB",
  "key26": "5FtBm26KhvnNGF4RP7MVeZMXi7j37uWfYq4eHG5RZiXYNThx21ztTBdEWJGyYAYMDmJxgDTRstt95dg29b5NMjor",
  "key27": "3A1QkPX26KYymwBiVC1fLR9XrjVDGN7sNTttGHiydXaoHwenza5RmNydBYnAHqHTt8r1MaY4WEpv74cN9f28a7u4",
  "key28": "4PV1rcaT5WG37cQRiLFsUqrQSQ6EPe9qpS3jqJg7nGG2Zhi3BqJQp4yi46w32HpSUEu7UYqtEWn295Mk1VQbTY5b",
  "key29": "4H29PVrEgbVFqWvinWAc6dRTDWkm9YoFVau3my7VEr3eHeSBf14eQyNZYDSQh2hCrwiCR9V9zMFFzoUz4LvVtdrD",
  "key30": "2qQtctZk4sKRWKuJtd2wnW3ZRgMcnTm6YwHeVyPy5LPuiq5LGVdZFRrRi4bWbriEY1K8dLVSzqAey8uq6oPx2fBq",
  "key31": "5zKSeBEMBL9deX1be2iBCPuUvguNm75t2JHBLPNYsVdSi7ng3C4ASnMeAXqTd4fk3qHf5Tmv36Yas2imsSvTd9n1",
  "key32": "21KvYSuj6zUz4pZhNwP9DzeKK9reZFBf1YUKbG6GNtfrQp7wLBGg7YJ17UZL2fbK5SbuZT97uN9naPAiUBvmum5N"
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
