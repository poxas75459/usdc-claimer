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
    "258gEP5FDDMqD9WT3g4WZFSSevMHC3vfSaUywZsNcihcZrKjQNsh8k42arWX5jJGuAF392FzRfFZVA39Rv4hZsAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxQvJutYQX1jyv9GpVzUaVZ5f3Gkn8njDfSniQEHdZHMMevweXZ1zcjzayf4QDhxQNw6bBdmc1LMTVLD6ZUDVsc",
  "key1": "5FkeknB5mRHWim6QKLxouS6PFdTrNMbkLHk7GFnd6mfm1KDfHPwujr6cxLH5wcQF1t7anvUCjFtKv2v5ZLKSNZib",
  "key2": "3E1427iU3HhvbTdVGyfv4gobWipe8NqCsmUxrDnSv6Cq2mk2h3BaxKWJ86Gwb1uxDATBy96zbpanCFcjdZ3tfcdp",
  "key3": "3drQ6Fh5x8kZQ5BvJzstwB3odXBU26VFdWE4WgX2fGTtnRJxUFUzEFyj4hNicWd9mY69GBKrQeAASnxFphrWXWWr",
  "key4": "4KQpYavYpp2LP6CujywttFdaygveD2Emg6byfJZy7d9M6qdXGabkxdqtZFNqyX51PMK5pewNwNMXGWXWk1YJ2BCh",
  "key5": "St8msZvoYWNF1NRamCtuwCxj1FJqq7jxXHQ9KDUucy1f4UXrFB1CHQyTEiiWmfW784NDgLki2AEcwdWdESoWiy7",
  "key6": "3NDBKFJLtZANh9J4Lv2itefUYKvSckitqZSdFAmwVWfoPskTgompnBMajnpmxoxLkG8S2z9b4d5BNsrNBwJjHmmH",
  "key7": "5sMwkpVS5AdgA9GeqWJHa51RZVaZ1D9zZMSz7NKY61oJUXyWPc5dbC15vvGeeLt3Ddm1x5e2qjCmjqG4CSxjz7nN",
  "key8": "54YxACZ59D53hfWy2q2mQ8YAReHFrZwWwuHxesMitzuNsi69XLZkFUMfCF2fse8Z1wtdPjnx8JkZdbM3ntEsxFh5",
  "key9": "5HSGPEc6i8EAmfmUPWffGTCGah81MGLzmMZDbp7Wiw8TpGDQD9x3yRpXacetKbGJpo11rLWSCksAXhEkmMHtF1QN",
  "key10": "3nLdmpdJvGBbJhYxXAsMC6fCxDVo8tqmQsjRmaCi1GyTFau8AjiK48MQonXFyFFvpo9LD6dzUhvMRPY4JiJggGYY",
  "key11": "3bQQBX41AWfmHKXsj2mKREZ8Z5XEbogpFonr1RPuUuPQWZ4uBuviD1j7gwkvsduM7p7w5xTcoHxjfTGEFkUUWumr",
  "key12": "3hCetyvNDfjpc9CpxnCKhPsEyjoSbt8WvxqWPPkW5QhkCQkGHy3byLSfA3FiPPRhHndajh7A2pU1yZEJQB4WjFuv",
  "key13": "5FgDY95JH3UrLMAmMP8oYp4nnWAF455oDf9nkG1zfhNEQAA3dgysp1azXB6Y29uBCoJGMj2apu76SDWzMmDVpjiq",
  "key14": "4c1M6HV7wHmTCHSoaqxEkTQdKgqqnC3E5sMCY7Z6HKiubQ86PgAvZhjbZZmJxmPUrkRddN5trTRjDucbZf8yn4ws",
  "key15": "2HQywvq9By9QCnE6EQe4tQ77cV3z5NWHvHiCrvWV66dUwfcP7ZMkW5Uf2cqAKFUbhMg24a8HL3ZouHQfQP7pg5b1",
  "key16": "EEY5gaaHXyB8q6P8prksS582kdoUeu9feNWBMEBftwZX1tHCQsAwt8jvSSsxqCsp5KW2AytkqPLPLJPmkecD976",
  "key17": "5YMk1cDepD6hjt3uakAk5pny1aSTkNdxhdG7E2c87DVXrmEFKTpNNDJqk4pGCZt1bPGjTsCwh7XtyzFsXv2rXJ3x",
  "key18": "3LZkNVpx9qFPv74udq2P5gwKnVZm5FfhCxLFfbvu3mVb5osoYCTiNH2aTD2W3cG636Cdmo1vvTYj1sJ2X7PfTE4H",
  "key19": "2uvrVDRfoB2YMJJNVpqervXxi8Nrxou4t92Ni23Sacg68hZpA6B5c1jY8AfdHWdEAR8iCyYDLLeGE8Lib2VtFxfZ",
  "key20": "5qJ1fRaJEksyjv5B4Bj3HvxfCwiHvPkvzFkDhaJudLM9NeCz5XwPABwGbPTr6nvufzYbQHnZtUBj9tQfBBWdzcYw",
  "key21": "uawYvgutG9DT1VvNuvEHAwbEJpeLcKj9oUYfHCmDRvKtfLK9fQJqMs1ixatjpDcphccwtbJ8UtMwNRUxfN6kAVq",
  "key22": "5eyjR8KaBTcMiFcPSToZx3fT3v5BKB4DbV9Mx89r8SwqS4CGfyzqcGJUfQqMPVzvGGpPJkpsWLPRPzDqbRmRaW8q",
  "key23": "3yssxJh95udYomU4MZXaeJVaq7yshw3GuU3W71bKBWp2PZ4A55p27RCZzPMaffZLuXxr9ypFC3q7S4FvuUeXcD2H",
  "key24": "4BVobqibc7UL65L2JHibLHCooX1a8v1HmHxu8tkDkZkFxkA5XstduTopTDHke32SdaFfUiNK7CJgYybk5rUjt7FM",
  "key25": "66y6rMsQA4iYUoRnbkbfgNGmXMjjL3MGZez9jXaB5iKDZXfhHiqdsxe1zN5ctMEoLqDxiZFQcjDoauLWmrPKkgWo",
  "key26": "3UwyKEigyCWmJuv53TbRceMizYDsK49VVe5No3KkbJdSb5TVUQmT7K53bTLMMyhXmCSsXk1Tnqxrt6SfyBmgunXv",
  "key27": "3U5sVCYbnRFh6HpxneMnZiwJe3BWKB1LPnP5qmbWS58BBGQGToNdhUCtMTGYDQXPDBAt9APqxg6AWRYQZiGV2XT7"
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
