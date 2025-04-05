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
    "28Kubb2eS8it96a2wrzKQUXgW3rihPr4YhnWyJi2cqttdqmQdoETYuYF4hyUYB8SGfXrpyEoSK5eEMfntirnvvNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Jy8tBG8P1xFvHvDst4GPrZaqERKKnwcYfpRfkPuxeRmpgCraqQJP6fYiep7BBc1w8b9LLfQA1UBRgKUNSH5jo2",
  "key1": "5Sc1hodCGaW9UvF38oxPC1ggBsLSBMbno6y54yHZAuNLfmB35PNzFN33eou8Kc2Sd1XDc3ybKNpTPZGMkefQ7y2q",
  "key2": "2KQEkDVSBYcUrGVvkH5GE7JcsFLGhuwhF2pUEs6eqEBDJw2hMDoFTxAbKrExkATFmr6Q4sf5JCejEaWxDtiVbzpE",
  "key3": "35W6NoYdy2CzxqdmPAMtqnvXudwrHgXGPpX6TZVrm5jnmNZghvuFPMdP8bh5NNkTmSnGHBU2dCnjqVLqUk8SXN1R",
  "key4": "47FwCLR3D1xNYGNusxXraEQFzkGLqNEvBUw7vaCMr2cTWPuPT7m2dQCef4916d165AkJ8Z1yEfwPrpTKo5YJu85w",
  "key5": "2QUdvytNUa54SDUKMKUM8zaJu9RyKdWiK4JqTBFjTk3Fur28DYYG8RpgLApvPa9q4wW9s32JcNAbqK9HLAs3UTcP",
  "key6": "5KZpSGEesK6AUzYQnZLjayLZxAnk9D5pM8PHY9yqSmJpyWz73DgmBfGwjLFg92DCaB8Ta4aYhnpReFusZRNNCfRh",
  "key7": "5CSrnv7DCPKw2odRwxVMrN9RMJbQ1ozyyryVtK2CVmpdB61z1k3YAr4LpugdVkidy3DcvhkyW3AfC73frLqPMEom",
  "key8": "3toDjCSyUiJtFrYEiUw2TUAG12iCnbfLUpVQHmkzvd213znkZC1AYeRFmey1LckxxPgjrd2hLEAdp9Zq31H37tU7",
  "key9": "47WW1wsiJz4WjvCDKBUQooJiYkw8Pc8DNTXS97WqVmfUr3atvwMDUnd5eekjQvrriUmK5cz1Hu5br1Jo7HGgWW8A",
  "key10": "5nyh1iiyU3AD7Drhr9biJfPZ7neXwbAg8rGENEfHD2gncn3G6s2oquMRF9tFwfdEgpCXztc8p8M6qWvttuBBRySs",
  "key11": "2qiKJNo8Q2JQe2YFRPEZ5MRtFLevXeAP8RLkWMz1Wqre7PiEb5ZkrTjJLe1sdsHpANi5w7LKeiHmL8JLBpxgJHpp",
  "key12": "59KLHo1bPmPdGCHdcrSco8Vr9uDWHDBkFs4ABZq3ocZEia6iEa2fkNwJFAi7ze1urESKwR7oVcXExwSzspqYvYfu",
  "key13": "4L9VJsZnhw7ASJcAqJ1cRTREyqiWwV1k4P6VNthjbZStfJqty9ALsboEez9eodnJGBiBUuqT8P5XUKdAmrDLGrhL",
  "key14": "5CGqSEaoT2bsf468eYTMWrGpSAitvsPGCpTPwjtZpWa8Kx4xZNGSQoFhVWiftPzjR2jEFCmJZCq4H92ZRuJ1ufS9",
  "key15": "5G1dzBfbM9a8UTT2P8ZMdT3v7tVhvQpFoWCoiudXVpptWQkfjbuPv9yPnwhMDRmciUt2KtYk822VjiPfLriLKirU",
  "key16": "sRFVbAFLR6BEqSSoLJLfKKdcXhNsRe7AMqjVyjRxabZJxMTYzu6hQNKdLqnmTPWeK3VDvBHQpFr2M5CWUGrebBX",
  "key17": "2zuBy3StpXqjA86Cne3nWC7xXZLQVvDrXdC2ybD31egbeoiozWjkGq3j1m8aRiCGrgDFTtsF9hhecaYxyHGkJTxt",
  "key18": "5gX1HUqfGXjN3w3YJUJwmJQr6pVNXPmCiwPMZdCJAPxGTfUPggoq6ZtDULjMYQ5x1FjP3kcVHqRjbpG2tNk9rdHC",
  "key19": "2dekFVAvBCHKRjHqkgjrEQ4MfMxwsn1JiRtfPDxXMhHPaeq6YEqQwQZSGK7eae92jgwNN9tBS3PxdTH26QTcDRSz",
  "key20": "2tBRksngpHzRH1MEktrTvp5AfhAUpwsE5266NDVyyMLSuym1Rkft9cwB3c9eXyCdV2F3FxSAcPxz4pWNFxXxaGKd",
  "key21": "fKJ3ffA2Ur6Zpv22ZhvwB5NhafXmCbj12idz1W2MBWjVxDCoP5WB7aEKZ1i4Kwp21edAMjxBVCPqUuewoCNPbhi",
  "key22": "5Zy3CywoTgNVamubsGGhvMMmc8qpWAd7KLz9CTicbLpoHbyr8nomLGKPQJ4Q3mcxfjNtfoMo5Xmqfqukep6eojXu",
  "key23": "62mnGjGMyURAMnYR595429aW4HfR5whaU3iYw9DDkCBAcRcmgwNMn2Rj1ABeAqzecvJaocaxdbiQQyJwzW7nM9Ai",
  "key24": "32n5rHqzAQLD3fnufnY1H1Euh7cRNaxgggddTdRsmLNo14JxJi9NcHpRG898BM3ooumZHFnuTUcN3cnFRt1DEzPp",
  "key25": "5oxdZGPNK3V8qKinK7hhiu3kTTk1ER8j1u2nhKm1CfKn5nnHX9xTyixgwT8RRhRLM6ZeHBvenbzgsBor3utbZCYW",
  "key26": "5sNkq2b6nLvNLUTHbBzANMT6RX8sDSVYdBgV17DtFjPs1pQBWjJ6bvV18P3uaEWK2J5ijUxmP4VBbGFth9WeTEMi",
  "key27": "DCAG8vEMtCzHc4F9xnENdeUB8RmQ6nxZpzByUv2UHjz3qkEoS4sDsDzNSmXP8Ve8uaHqURHpxUvZ444bNDXrF6n",
  "key28": "57HN5QMSfxDXMv2Ggwz7Tisd1hGzFAPW76D2sfg8yaaAzbGTMKyafUK6BiEkJ453HWrYg3ajd3UnCRjmG49uVqzG"
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
