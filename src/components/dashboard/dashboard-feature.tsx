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
    "4mtYt2QVhXYytnzdiJpgzFq1xQ31DgApK66X4FmMfUhKDAnemeTGwAMbbmBiczFLDLBfjEc5D9UoRXEWbxH3wQ1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwwkbb7fV1Lo9bQJbJT5xwgc2BRX7yZUmDtLgBiMnVC65223vUESSRYD8kqfKRBv75SoBfpywBWXzAACoqV1kT6",
  "key1": "2L6nYHXt5EnLCvLw7xaioc6szLKkqbC1UGpCXa2Xx3D3jMoq4bp2Y2c4wYqbbwQ8Uotghv2Vr2RBsjLUxvkd6WPX",
  "key2": "33pVknCMwBfoajQx9HHQaFcmw2hDnETntY8wEiZmdpnEXSRkUCYqjhm84aHm3A9heerf4BWqWw6c1vk1hh7hvcgt",
  "key3": "4eob4v26s7FBhemBgaoxRKvQ9t5gdrZYQfV3rMzRjCHTzENMLgFUrzioLMn4cMwBGiQdq75CNJ8NyzSYQgd3ibrx",
  "key4": "3NNNH4k29RAwe7Bc4RzBqMHeehCVTGrnp7TR4bYAfwqwGQdmt5Wzyp4GSNLSxHLwircQzhM1kqLi4iECuRNVjof7",
  "key5": "bow7Dhq6VuK8joFXTmfUdcYUTrwBhkcVpWV4g22XurGDwKASipi8f2k4qMKhKudSzj7zmFcCjDFHV7LXYHQp818",
  "key6": "2yg3A9DxE8Nr8VkPjcDquivnzGGBM6xjDo2u5KQn5fTe7AxAPDHzSSFP5gUJQb2rqEMVcTBCY9VGyJKf7wPRtJhN",
  "key7": "2ExsW5TtxyJjMwYR6PHgFrkvT8aVUQi7oAi2ReCfi3nbpTzBShsbgnh62BYnxAURfN7VqLzZ9xbTAohRhZCSZQse",
  "key8": "4wtEYtb5bb9i4Y5cUvzTTLiQj6CWGb7E2THTPygADeknxzS4jpiPm7FUTWNoRgo6zdK2yS9DqJ8A2HAoS7nik2fG",
  "key9": "2XXwZimTJW98nEndcDqudawqFkhBU5315v2vXEkmd1RipVzvinrthxtyLAas8kjq2yo8T8pyXybJw4iEqxy9GJz",
  "key10": "3WyuNnySsSPaMYm4hhDbHv2SCGciuyz543ys8mEscSt6FjNokzBHnzQrGcZSnWhyTAn9m4sUJiabk9trSMgwsijb",
  "key11": "ZtL7VXRQqaEEbiPadYxdyMCW63N1RsqDycC7QGaod4dYYscLLdUVpCNxkFxY38FaieTfiayoDVUKq3WYfUfsPH2",
  "key12": "2GMStVfEZvT86bQFB8v9E75P3dMhXPvoX5jxMLENfP5TgVLxNr84vXvhn8eTaYK96wPpGJHqbSPTccxDZ4zabBtz",
  "key13": "w8PKQVcJHRiXmtGkiUqk6xJ1GAntfugD57tFeCkWnbwXo5cYPahwFF1BXinMZ5uXBknZvAksEuf9yUBfqAD8RL3",
  "key14": "5K5Q254iSH83b4US9rrqeCGPm39MTWJ7mkmiXhHzHJhW5XPRJNSFx2L3BAjMjxnUtD7ihb4rntmB3ZNKBXhCQPUa",
  "key15": "2BcxPpvNvcyn9NrudFzmV8SmkPD7bvUhFRU76T44BMqHzqrTu6aEekARNtuLzwuRzDyk1hdoc8mBGYv9Y6oqfoVi",
  "key16": "bbuNerctEJMkETG3XDNuiw1zguKqf3Cn4kLn8vQTTrPJVUgCENSvSxBJ19DJNkymEgjvFQzCdCq2GvMLQm7iBZD",
  "key17": "2LPpijLz8LWb9fwpjLfE3ue4wqX92pRfN5L1Bod4fXyeXK5MxnKATf5Hw1z32Wr5FdNmL4URLsYYwbSGB3cXXrri",
  "key18": "43sS1LdCtZh7RHL4S9q8oxcc7kFCArG8NNhH2z7mmxvRw3SAp4aGFJ2VwD7Pv146SFKs4vDk6LZxURccdvSwLSjA",
  "key19": "3iVe8KfyAyAKPq56Fsrbi3Q8cqxVGJYtuw96FRP67AY3U7pPSAiWzrzFjCsxVBiGTSuvkLgCcdh2Zh4ogAXHbK7X",
  "key20": "2nwxeMTXk1bpebKVZhfuB23tvYgqxPdwTnTuKWXyby55zjcYkQsCJo6M8DjbD4fDhdRfwvRWoRV2mc43xte4d1Kz",
  "key21": "YsDKWJm7ZTRHsR722BWX77RjwpwECy6Gn5ab5WYUvayueez35jSoQ9S2VsEAnV6aDtvdNxjUoEFhysfZz5jmUCt",
  "key22": "5Wtc9L7RKyU2ZeoikSTDb8R43UWs7unLXmb2AG63jNk37r8V5t4Bt2eNPDaMi6AvKyoKQ2BzQ1bERkiuzw7CnyLE",
  "key23": "Fw7f8hGjvwr9HxGwu1evBUYCBBWZHVQcBBs3fsYTVGzuAU1WA6MWWDosGPMzhkfQQwwPF124s8vyqAB7FmcX9tX",
  "key24": "3CnwnzguHxqSUSpdVLubr2xzzpCnkxfb1ZmwvsrD7WNxAeqbDMo3sAyzgbTjPxSzUZrfBp3cPdiH38MZW5ouuWZu",
  "key25": "pE7WRcK7YoQ69ZpxuhhtuRVKtTNAus4v7DyhTXCwFPXbqVVRPEJYhvk7mGXzJQKVcsQQxFdaX6t9oTZ63ciQzKj",
  "key26": "5rLmkcbtSLyAfkHjqiu2J22sy7VUcZnyCd1k9PcScH2N2pGFE3Cj3nmuEash8YRHo2VqKfLJFTAgvgeqqzzACMeC",
  "key27": "AjGntdmE4V79nVDXezRhUjUqM1BKtqyqxL84XMcs3KZcfbe8zShMN94B3Vy6S1EQSDk4ywm1Lnca54G3qcNTioZ"
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
