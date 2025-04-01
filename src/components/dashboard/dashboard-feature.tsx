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
    "GTdQKvVvJhgHn6h7zjdkeSePPEhuSZ56LP1TT3Kjb8MGKBcdVEr1LeMVCFubv8ejvK1XV5jn2j8mes3vaGbhAAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39U2KbjWB7Ciyr4XtBWSkngi6BaMDW7YmsnZ2sRo7D6riWPF7TWPskfjFqEZUoLVpaTEc9AQUWogsYdsCMYS6wmd",
  "key1": "4FrSvneciAHxdBPhB6TsKfazahYK7m19Dm8yXGERp2ufAZRgc7wY6GeaWU3c5uQHvTUvyskNevF8xPjXnzLDGxGh",
  "key2": "KuXdTk1PUpcCH8e9nFCWrVThXaX14LB2rJXiqpnV8fhTq2o1z9s22YVHubTF4WBNkDeBxLz6vZfDAxUZeGj9s8E",
  "key3": "538cp6fiU3xdTyNeqZnGfgdynWc1885dfpNErLqqiCBxKkBpnQvLxYeBtXxtETWvATFGrxT4kHXBAm1YYJiAhUYN",
  "key4": "5V3j8mWZDx2g1wkjJtbJ6PdPPyynXJncWrk7z229ew5Qcus42Lo51ucy2dpduXBUsE1xCX9grswiBjoBHawNNkTs",
  "key5": "ZhCQxbh3anxFBcyj9QM4RazhJdui3hNR9kmEj9xWB5vanfniYtefh2BNcoN4Rfk6F6tzLzqLewX2CiAYLZBMPu3",
  "key6": "5BuZbXWUmptphaH9T6VTDtHwd2xCcQL41k9VE4BAADdWnUFi8cJwCZZ432wyibJGF9Aaea2CvaW89jUwYdYcYX7c",
  "key7": "2cmNT9RDmoSeXCyzrr6q4THakgKRhAMMAqRh5qvpog67x33YqmoS7FuV23f9fUiUCKy8gcbVaKWDBG3jtTVNU1qp",
  "key8": "nD2bijN2ZUqSUZrdMPoyUA3mjZgFSDKnS22tTTTPxWVxW4akbUhhLHqn4UPNVNEmdJNy7a5aRXxhSy86VfdJKCD",
  "key9": "3vX4U4z5wNKx72Yb4X4rGqZCi1wG64pGFUq6uy42Qm8Fdk7XxDRhtYy5ViAmg6aTe1qTYimzfUrWasp5YKbSjVWx",
  "key10": "2Qd7H3PqxDfn6VTEujoiJnWS5JoyFnssetabCxVmhfUXFpWvTdMqD14c4uJcmj5z1u9XsfvhZdpjqC8uxa6TbQcW",
  "key11": "5rzQp81ZjuLT1cbxFCqV3piw2hoUgY9tbYgE6rfBZaM4Kkich3DEpkiHNN78pj1RKjuVwzsgaUAyXsaTxQUDZrhk",
  "key12": "4QACNEiHiVneQpZ5vY3dYRP1uCwbMR2WcbVhL52jMVDVPXVrdJLuJFrh8HoCVCnYy452VpQuCTSkS7iYPVBEzAmU",
  "key13": "FSDzdqU3HddLnKNwf3eLydwjTPGafCt9PvEQ9zx3K1YSmPvL797ztc967sx5js98FQcMBEZCPrrmnenopRT8UN7",
  "key14": "Azhd2u2LVn9aHiZGt21HPDK9cqJQgjGNfxERNdf9Q2yfBaBzey2b3UvsLH3ahhdmZNJYHzXx8H6bh4oZA7c7SwV",
  "key15": "4ij82quNR6BKphTbbwic6YUSq61XDLXJS4NB9947QnJvxDtX295NjKgxakGxrjjNKcVUpJcvvNQAsyqZaSmgohuC",
  "key16": "2jg9BQBxLiAcQ6fDqby4eku3eckBw4pHYfQ3MqSsuJPFzRYow5TeuQyr2YQZ4hFNn1c2DeZqtW6Lai7yz5xNNdtQ",
  "key17": "3xYuA3FusLDpijoman76vrqJ8MSzqY52pNJkfNUJ9yQsBXtrGXKYv8gWGFxM8rsCpTqE4vY53JSETSvxuAuyttye",
  "key18": "3aUP8roSSWyEy218R7BJcX2AuCVYJQTSZ724Qkyu2txDyPPEUEeHLvzP4j61NpWsNm7SLH3kMdGLeYnpnv9z7KPG",
  "key19": "4Dy38aFUXfUXRky1esCjWjhNeB8dbkKYvMDSdnpytX2cALPsCGDWJoZMsCtvPAFiLqwwfSai2L3GWXRTXeAsoQND",
  "key20": "47sP3vnmJLnGFq5GZX7dNx9wCvWuk8CbCUsgzVWpfWcmrX1JZCEneG2TuBaUFksejp2kk71UqDavrPyWcDg9NCtN",
  "key21": "4MbMw7aMTTHBAPQ8nt7ji1URDjHVxBRn6y6Mq4hw2v1Le1BAcxiXp1sNm4g4hYu2FwTzk2YyFAX1pqGjWSNuwmaf",
  "key22": "5tqrEtuRorueki1gTtwMfe3CQZFd5qA3qQrWp4wcnp7YJC5xYEPEDrsJFaRSzoko3wC1Yq8VHPEn2QEby2posmYD",
  "key23": "8rj2bLr3YBD3zAuoGiTdsfyEzrnWeqGubBWBvqWNF8RuS8WpaSfZMQwKYtgbzZ8Mn6hZTScZb9NNsvMJxcPobTq",
  "key24": "3eM8tt1cwmKbud7GGM5faucastFbQrPL5c661991yLUWBgjsr9szVWji9brYxrFpTQdJhMa4tYzxjYpD67eD8GH",
  "key25": "59kcXZ1VAPs2n5EKrUmTsSy9rdzyUmR1zbRvurDR5zzsQDN4gJ1swvBNHn2skL7bRSJA6e8gBVy78yQzUkC61tiT",
  "key26": "5nC7DE4Uco3knCikF5JKiw6eKBchSvxDSoF9YVhktRMFtagzzysVHP8Ey9pNQ2EZZi3wuGcWKiCcs3DQmrrDA4UY",
  "key27": "fSasnBUxy2Mxa4dMFzwpQ6AqYJtXib1fn3s3QZvCnXii2ANMfZpLkBUZZx1eEUkYssSttRzhrfR9QaXBQXo9cot",
  "key28": "5pqcSmCHECkrPzznX3P1GHPvfJrpKzNkvCBymu3GWBajFCby5K55ya5JriCcnM2f9d5ZFWPk3xxq628KsZ7C9Yxy",
  "key29": "5kS73hcBvKmtaEW7CtZBaRXEWNRgUzxxcUDpemrLXHx7yqLje2JnHXxuiLe36UafSYhWTeFLPngW9zdmuXhSKyRB",
  "key30": "5iBhNdaGAnJoC6c7cnJryMxFHbz2LaydcjqfcUJ4sYqK3g1p8g7CaFeZ9WPRhLZwWrJjCnREsYBgCYuZb8Ygsf1p",
  "key31": "31Lynx4chMvDKWd1tEYHWYoGPXFJN1wRD35diD4K44dECWgxeVWJiyc4UAVdf46p46xtBohtM4RnWAfqBrYxuC9R"
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
