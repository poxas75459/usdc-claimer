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
    "3jCxBcQTn2NHg3cBTLpKKwonse3SpNARgTUm9tJWyKdC6wZR9fbXipjsXQBUUx4G1Gf9uV7p5oq1STFi2aFoR5az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6DJpXcxbpJQSJshwEUgihVY6ymkURQRtnPMBmcNiAc9oGVB1fEwosNdjTR5mxRW8g2rfupK1P3gEqSXsqc7EPb",
  "key1": "5SU7ePV1LZvjWrZhEVKu3qkJaZtRBoE619yHL49oSYcTfqksZvVwV7ojh43z8N58tE263FtbytPWNhia1P48SdJG",
  "key2": "3u6SPzUyvWLqxtdrmGn8PrjM3XHrZvqbMqeBuDRGmtab6cwwju1Xsene6xv8dSVoGLnTY6RrGEKmexNB95Um6gDc",
  "key3": "2A7vddxo9vPTGhGRqgjt7NXJixRaNjCSkgyekzg29bjQo8P5odbwvWHaBXnXPmx1iYFwBpw81LYv39tsaovA4A67",
  "key4": "wVME91t8VuVutVQygSVWBPCkrbBUB7gx6GGakJ66PQ5g3Y76uB5jQHzNNA6dVttw4PVNeqDVEUuGRqDCriCkAoS",
  "key5": "4vk58FH2jS6ZXEiAUM1f8biytz2wmxJv8zeJXXy7DweaKJVGDKfUwbivBtffm1JE8PbCfiNtZaYc1ddkwVPEHuZQ",
  "key6": "4BMFx377udM9153jc4Bers4sePMQEVx5TJjwmt7NnUyVJAzeSaNj3nZGZTeAxRns7ZZSjw9hT7YqeNKyyqJp8Rtb",
  "key7": "48UmhR3Lm8wkzGKRVvDRSZZpfQShoV6EanUVxxGJX3Fak1u67tZQXK8XndAubTzQKWATXW4dQ12UF9dDwYcHFrrw",
  "key8": "5NAV5tULpmKdiedfrL29jxPDC54ZDRL2zfRLezmUwBbhQfRArKsxo9gZe3AKwTfcJMauoKcaBHk3mHRxRms4vKz2",
  "key9": "2uzWEmB1NbioCXiJA2xmwMmmSqN2yU8ArMt7RjsnF3QA7VUL7udxmXkn58bjWEiRC6uLyNCeJhK4HsT9oirf9wz2",
  "key10": "24QWJuzsStWxQqPgeQUJ6f9LDgX4BGGffDvmLRPHU6GLuCvASowXACeqcSLErxAy6SP1oyoFY1Jw97eJSKLVgumr",
  "key11": "3AtTf4Xe7Av7QqwVk8aLbjUENbdpqXJZMue2JAbdMHRPW4YwuLsyWgRsFAwRXkKGoFbN2fNYdLuaTLY5MmVXvsjq",
  "key12": "4at9FcXgXg7cq7RKrH7w2CWKcyMGcxFZuFQ4s5bToSAMmgwhZ99Vu8i5qTBwaBzZVZfZeStEW2AktHebAiC9BdFn",
  "key13": "2BsnTXhbT8pK7FaG4PBkAnJ1oECwZsqFbhgsqGNMF6PGZg777sfuTCJ8gpizppqKCs94mYwWZWoXe7XLRcFJgwD2",
  "key14": "2jwGRpKfLUxfrewmnBchkSz9qtnJWzqY9V7ya35sTJj1hfEmhe4uAU6bFTEMJw8Y7VWhpEtjP4t1Q25LT9UbsPym",
  "key15": "2euZKJBnWMPboeRw2bYLuUVK3A2EVyZg1D647jc1GyxWBfUshXv6Pk3FRCUVSVPTxTpigyECvgXpK3uWTFeotY3V",
  "key16": "5SJekMCAN8iwd1inQnH2Cqi3AwwQZuJJJ9SUts7cBUMjxaV9cAEWZYQFrxpS9SfJEYGHeCiWZAwtW29cFHko5U1H",
  "key17": "2bjx2hjuYULJAMWWwKNAAtusWi81FSQCMV7q8huZXzWivfwLKTwGNyX8cdsR8vjKYjToKPuBmLrUF1jLbrFqYdNZ",
  "key18": "4uMbgsCGEPUhenhD7YkBM9bXZXoRhqdhXheWhgrAR9EG3mfM3ahyYVkuhkasjFFBWM5uXycyh5fPm61wGFBDwoa1",
  "key19": "227UbhpsVBLZcd8eqDW7WwbJXPvotdBAScuevaJ4n4JRL8xyMnySVCmQQkewjqruyZMhS8vnYotngasLyD7Y2G6t",
  "key20": "39mgk1Wf2BEbzHaYmXgFxuUDRGvPNUxiY7rFmGnZXPR9rofYuCay2GPzDzjsrk1EEDsQrt5zXDvVLNT6C19iuMs5",
  "key21": "4DFEKJnceYcgtNdxkoZ9637KNNarAa5RzAGr1keL87JZ3pYJDUdceKCsuN3E9xDhQixLyHXzSZYVCVT5Q3h6NvsU",
  "key22": "4AKziQYXew5MayTX7MYfJZfUouLZFjLRXbddzr4d6pzqq7gDZCwrGKabWNhbNzb3sjdcSBfQwhkvBUQego6TQgc5",
  "key23": "4F68YDWGWcSUwaGRTyk4EVmHSR99k7BFUZBh9tBcSJoMEVSaWeV1M63JxfyaJkWHnqv78p6wfwERe5Q2c1rFG8EC",
  "key24": "4Erdzjm5ZWrrpKXXQccdVchgw65TKXLQwgdaXmSNt4w1Z8sEBnhqhuvXr8TtCGoQuHMy49pXPMjAcxudsiAQyhC2",
  "key25": "54qEfZbaANUrrNhD5VV5VN98camjyJ4GKGEfKHdX12qFYLJcMJTksUohEY4CEXVzkZpFJwxFi2zZ9CPFLLzXkMa",
  "key26": "2kcKZabhwHKfEuD8byk94gXECNXyJM9CsSp5zs4fehWxfLHn3bThL4QqQowjhuZgB9ces42SR6MoQ534y27CEnh8",
  "key27": "3MnV8PbhMRQMvhQP8iiZNXwgFHqyGQryu9FXHaTb3nD9GX4EdosXWP9ipeoL3Ngd7tnN9QxZN72rWWFuqBYTQ4Mq",
  "key28": "JzrhcZHRS9J2ZHLH82u7uF8A8BNsRPrGfREmy48CxULRpo5B4y247UqYBhwXXWbzwmDCEXxaa4YMCFJbgErmtxf",
  "key29": "59umQB5ue95DVdHi1PQb6n26EHHQTDPBhNozkmUVKHMChqtfC18pmGhrpNsHPbH5ZScTM2UntbKSdn1m5n4YQvPe",
  "key30": "5hooswwfb3RfDurM85UXgGEsjU2nr1q3V7gmfPQVsZsd9MAZFuuzYVnW8LP6QZoHAPfN7a1nTwaes5w5VbSu1fcX",
  "key31": "2VpUxWMxSR4giCrrwciofm5dWY8ZmT14DWaFZvxiH3NBGnUHwXxCHpT5V2VNkNkksW6eUKfc5YBfeEUm1vKmPoEL"
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
