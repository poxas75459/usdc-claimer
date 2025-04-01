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
    "54owq98m4isH2wN3Ntt2KKqz5d3RPYPAj3q8EmgZaE5SJinfMsva9SovcUArZrZEhaMbAr3Q5tTSmRSddn4wu2hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TFCRKvz3H1KZ3ZJhCRpD26mHhBnrKUBWkoEPYhabreNGUirgQvaHyfaRhTefxG6Cb3qBnDrTT3QrLumjv8dSydG",
  "key1": "2yv79wA375raqv41zHkCRg1dnuomAeoG3fPcBnKvmirXAvXojz37tcmhwZvrFiTwC5ZGSYuWRs7hV35wRHJumQcG",
  "key2": "5Jkyb8ACVvEuM2ZqU6vbkeTKqVofdubgVTJEGHHG8NiqJHYkK79LXKuujSYZpEhvYC8FDQSHX9KCNYupnZYmwRPh",
  "key3": "4S3GPhegPZau3tskWTs1FmX9W252LgaqRM5VkG3R7ydDfGJtvZoCWPvMASWqBx8i8984MAmmwtrwouRa2x1eXNod",
  "key4": "YRFR4bKpquYpq9gxbnZtoQ91taeJpuowifmLc39a3rB1KNueec117si4oZ46B3538doA8NgqKedBG4AQfqvTRcC",
  "key5": "3FYPkyeouWx7CVEnGHJNP2MgCLT3Da1WeKVSCop6A5cGzjkQHgG7Tf4ZbberDeYtwkuAXJo7jxCjrKUUHVzuWodd",
  "key6": "44s5bM7J6czoHuMjip7YesV3HcXU6bdQaGrgkouBp1knpwiHNLthDwHTk6TsGFxRSJ374XWL5nPuExXsmdnDY32s",
  "key7": "3GQtCqaQ6gZa5qGtuhn97HWjSJiqYCKDSX7LwwZcDrUDVMBUWCQyZhtvocYjhH8x4UF8cFn6qaS45yy5udDAMhnd",
  "key8": "3eHVuiQbFyWvp8HH9GPQm1aMBqPQbjniB4Cp5kah1s4s2wC4RbvGsHRR8Bd5SDyjFTB1UTfWgRTGdkwkEhcmnhp7",
  "key9": "3rRihcsZXeZV3XbysxmtEHN9cMmmynWdTUejE9NfZQx8AgBe2m3nKySBZoUAcaWvkCTNVKLzQGuHtuqHvRHSpfCJ",
  "key10": "51bDuozp2hepWGGG58z6vTy2hUfdhpe2fCSuK85HtogbTih6pfRLFP8en7wvECsEUgQmnCypt6o3eb2e4SF1EvJT",
  "key11": "yspZpNHVN73BB2sictavgXH1T7cswYQG1yAUBf5HPEHCMhw5Pj7YJvBx5oTDvdpaJcuXgCyr4PbkRRG3mAxLzoh",
  "key12": "3MXPqcbVeHc8Rd8fBb5HVJaJEYjb96obovB6AThFTeHvocxQbvZBfWyziiDoYQG1Yc6mauSqcHqjESvpQ5UtQCYY",
  "key13": "4GxAR5ZN4vjzAwptmQhaLgkxno6hJmA3tX7kcqokxakmT48QvbkQGWyXg1PWovuy3bQfx9nCfCLfuHuATnANf3jH",
  "key14": "4MCq5Tm8vBVdQtTdbGZLGJkQhUw6wtFdWSjuKUfgVLfdsD6nEf6FB5A8z3tgMTk9XAak67y2FTudcMZJwiGLLCgc",
  "key15": "4TpQWk9ytZJUn4StgqUxze4yS8AB6xwCeH25SQ13qiaNhsSp6WpbuzdEE6aopVyqbmmmTJXoTGizxxRmAn8Yix2B",
  "key16": "4DzVJsH9qiE2gSPbqHWVshhHHJHX7SY3qkWhSzCzrz4Dvwmx2oL4Eo87knbPmyQwsqzVzFYaGKHwkmyfMe98Kc4f",
  "key17": "4QmUVeiGHpEba9g5gRHQm8R4PdSPqmzjmZYVktH6tFxz2Qcyju6K3tV6cULwgy4AFF6grRMBN4zY69YK7HJqCMZu",
  "key18": "2BMmihYFKcfLcYsqpW1VjNpcv2yK5y85u4x3XmYcm4HYbjcS7RJ5YFDZok67WkWZE1csPsCvL1oNcRC6yvc5qQvv",
  "key19": "3vyULLhXm2C3FWfVHHU3Mw2XYbEUNsTSmxu2nJRZXfJ4RrtiB9vNxLsf6nmh9shU1fhoZGe4MqBzwBMZmZk4bpSC",
  "key20": "5R359xo6rMBNBL16SGNv88ZmCMwxSw1fUM2JiT3PTjettyq7k7ppsRxrXC35BRBq1HmdrYGoU5zKR3fTQxRL3csV",
  "key21": "5hwdAJnysLr3kn3Q82gHk5sYJr3AYuHpsQ6kBGE6uBybwMkGqHGoppnHEourGBKUNVHoqawHXi8VttMY7Mz9ZWKk",
  "key22": "WCFD1YAHi1GY1LwkPDg1KzfbKCygKViXiZHMT7whW5CaYg6RW7cbY9JRNhiCyLETPejjx4DVv9it2McRgkKAmpZ",
  "key23": "5BHPFMYdRuXaYc356MNCibDPHyvL7mRXiFnix85oQGhUKZfxxCrw1HCVXCCR2JMa6aYJ5UotdF13s8LzpvSd1MDD",
  "key24": "3TkFo8NeKGG4xsSq6hE3VdMkJHWGddofBEzX4LLaideCfgD9caBiSfESx83QZknPcfxTksqHDzLdkwf3Rm64j54q",
  "key25": "2KfGHe5qtqWopVH8mirw8PbeTXGdSggNXBuHGxDru6RArurjTczAM69yo1ZQNPJw9RQD7AH8e47s5yr4fFuon3oD",
  "key26": "5He11HFJ52HBS5GgvMEpg1EVg8SvBSKKfZBX1QviU2F7LMnqLfXD7bcJhKGXMD9AKaYKQBpiE8EWZYB9ezsC3YHN",
  "key27": "3uA4UTHNnmfDGGiLB9vbKGogDNbXU8puUG1bh5D8qFxwyTPXxjqdtw4aKvoagzxz6JiDNJKZmHJNnj5YGX1PbMPa",
  "key28": "5Ndkt4nhcjLoBCLfKSK9Ba1XwwPFotCnYzEmQ6d3TdMKvtHZsWUWVx8w23G3VHohCPK6G5yBH1Sw6Ra9xdQ1V6bQ",
  "key29": "vUkxtpRKHLT2KBJm7qLDVM3YmvYZnLja3hsaZy2H7qUD4ETy1uTyXx2pxL9oGU9uciGyLubdZjxMCHtMNy1CNcN"
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
