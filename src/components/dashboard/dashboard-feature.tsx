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
    "5BuufkyoYYExJbZhUfPnfa7AiF8Bxsb2PHJVuzjB3as5tYgeYfCiw8EMdHUiKYjaZgZ6yqBecmBEn3rRm9Rb7wqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Mfsu4T93BYsDvmP3vzuc7nf9CtagPWttnpXLPercYBTVYyeNbweGhRSFbvdDfTb18rPGVvTAFYiTo7BVU888Ve",
  "key1": "37L66Hy6bmxce5sd4aAkd9ZCMu5zsYSVWvXswCXS5iTHYvcykbkyHwJXV4ybToYJ7XVNv7e9n8G5aVfgtoi8Cri2",
  "key2": "2iXvbjMhGEJWdbuH33bUQMDKDc1VzfWt6GNeBxgqbYTPMBkkSjQ8CUqCHunGTEwvbnSfNL3JJb2VXY9PGwGMtMqC",
  "key3": "4BewsoAxSoGob7sNTtLL7jWFWuZdPEiDeJokQFoynXcxVqsM6fjNX8Rkt3NYgZVdQJFyuYfsjnUMgzazYKfE3TbF",
  "key4": "5Y4164DivrRx1PBqsssHAmtyityUAsznCmkQfFWnXViAnXw5shNzRCfNjGUVVNuzQoPABK8T4QMdviku4PjApyva",
  "key5": "2zXxaTBaYQQDDrmBvBREHQCgS7hmLEHFRcomqRT9nRcYvMPozBcob9feaDWAZt5HhMNrXnddMDHvNxLMdBB6Bi47",
  "key6": "3Gew6os82gNLSc4yoUijQF8W5zJe4QXiYq33DKaw1TmvecNy8seym1fMhRJr97DWthv9W7W8ADV76xtNso9RfFZn",
  "key7": "BXKVbiZVzCQeGxDd8cob2Jp8MjC5eAdqaPrfmYWa8mSjNMQY6qPqAb9zpMYuWYtez9JvwYh7fuheCQ8HES9sH5d",
  "key8": "4sbB75bj8KPg12PwvsjiD7nKYmC8yEf1KJA7Xr6k46BPBKKxYMFAKc1VN7uK8udZkdpnBA4trSGDKJMQ1RfDLqvf",
  "key9": "2RWDm8V2U5KL2HjxuKdehrHJMLjm2rPMW2nz2msPT4ZLX2gA7qbsBxvVod7V28Ts8uP1xMutk9RSvwwdkmNdQ3Ms",
  "key10": "5nZkMSEqWfquuX4XrgXssX4gjkJY9ErGJ1MX7rdsEfJuBYj22U98xCTN4nvUA8xM4C8uXsCq4DcJGYMrqtrPvQLY",
  "key11": "3oDz6zCiNa1jMTKTciurELWg4vX6uZp5bVKGJjpLxoiwvR9o1gLroLo3ooZ55sQ27wknyrvYSXfWHy98Ubk8JUzr",
  "key12": "CcgBc9FdgRkgN4rZQfiuLf9pAB8tqEDmksD8nveQe2R9QxfK3ZYUhH6pthFo5WhknNtZwPLKVoFmGkzyAKVR1nD",
  "key13": "2iGN5t1VZPAAFckcL1UbFsDW5dyp1gwEAzwczFC2nWjXc4nUKF8qubiSiw2X9XRwqsFRmcbkFRKm4cbeNnu1dQA4",
  "key14": "3PZczYZ7zB8ZZRm9WoJxjMv4DXwcwVkscuEDpR6cKdktC2AhjoVpyghtMT2xDoP97ZKr8dhfZfiHStCrHyQkybei",
  "key15": "4CtKhgUfKmVGT8Tk7UJc643DJQpPg5ep7ktJzfhd97PNSo4uJS9pcqZq6Paoox28TSatLcjAnzntzWKqCuBM6Nbv",
  "key16": "AosGbuAhgfKd7cBuuTGu7PySmFbv2U2BtR3hgXT5XrqHp11uN919PjERtMZ5A3KSUiZHsra4hJpHXAfXJECqF3d",
  "key17": "2RXyXjmSWwt5b6r9PBu6k2Vdb2ar6RzgGQjRB1RUWsB8fPSkrW8jKeFTmEsY3BGniAzj8x9obozJ5TA3AnQejXZa",
  "key18": "28D2PL4MRGm5aFenLt4PcadKfxXHz2YrKrPDcehePTwHrUDe9enST5XAkKZzR74JK1jdAE6dtdd8fLd1DzDfuwv4",
  "key19": "2Wm1WXVFN2VmUoSDs5LZ3fJUtwRd9CpuYXeZakiUa4Ccwmz7yhCefghmZSoHt1ZFiUVVRyoHnxdoHJwP2cJh6S3D",
  "key20": "4VV4TwaeGoKJWUotybUcAYxqgNDcBtmc6Kc43uZweQ66YZpUuqhZJpGhXL8umsbqDYBECiDPnUJSeUt7ed7sGYLp",
  "key21": "4onrXcp6kDxEa13JSfQpmLLiACmm2JokZkSbrZhXd8qepKdC9FdEFr7NSEo29ThobgU3w2aTLnPemsZrNGTiEoGB",
  "key22": "RXeSkp8CnzJDMARq1mYhdxHy6LqqcG7q4VFKShKPswXxjLs37r6bpdniFg7dsoxGsc3DvQ34QUDGmH2SbLGdcK9",
  "key23": "4me6AwKPVmJpjPHquoHFCTwtKeXu27oDXkct7k9GZkVJ27sDKaVzpXsPcGXk989jce19ZR7abkTPnEk5iCSPJqAn",
  "key24": "iTvFpQ3kHKV7kYH1hbq7fDradKv3FdpAFWex821wr3vFP3Ypvsc7ZJ5jS3qdoKANkg9UVHhjXyre6hVVV282hK3",
  "key25": "2PfdbvCvLngbnwfiWkok2REp5hsuJdtKe8gSmq6S1LjmKyHaX76nFiwroZ1KqjCrsbjdLEki7yxL2aTuTUhP1uba",
  "key26": "HMEfp82UT6AG8479oBLSK4STXTquKwctHPtMcNKjwEtHNJM7RDTvBJy32dmc56YBVw6VCrn2RNMK4TxVDUYDgRd",
  "key27": "oWBfx4MX4vHZq2i6zPRcgJyE8rTtBsRrCuKiGXxdvf3oqYKF7rWVM4sTCvEMvf5SnpQ7MH79LagxsrNXf9DLLHK",
  "key28": "5yrSTdAnuZ1PARtq9yQJcCeb7v8Ac94aJBnY8qMSg7KKh4f2KRZrSK1BDdFRFmxh2QgDHF7VJnJhnAEZ2waJx69v",
  "key29": "4wdnJymfyKvrtJbaumYBpsKFRoXSn6BQbDdXAFtxcGwHeUCTfnheLBCFmvsYVC3Tr5eUHPmfmEyXtSjKB1qQFdoT",
  "key30": "4GuMgQWGpbmkCxJm3zRkm4R3KREdsdSssMLcMJPkGcVobu5YmXRASBpyNKnTnu6gjjfVhRRJ8bbUnkfvzVPLL1Wk",
  "key31": "2UfcsyrbJ1PU249HaDi6CUkRwmYy5xbdSFMPQjFpvHNuisK7qAcViz7Yrru39JzdKVNB38qfiMmuSx9h1H6kH8Fe",
  "key32": "3zS45JowexPuBNmThhfkzPm1t3uWYdMbEMPzECNS9iQCvkEPhwMqYWZYwktUp6NcJKgC82xtfRqtu7E5wN86xeko",
  "key33": "2ssMgomYW9xbHTBPfk4EPPgFbVm61NqL8u7SkwugwJ9DdQJ2WRdKVAd18q9G7xYD6FXCf1m8c75GxqHu1DiWgZiT"
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
