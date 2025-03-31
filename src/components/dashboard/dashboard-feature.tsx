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
    "5NDStqgpmwokAKJFd28DD4Sih2LJgzXZqH9mk3WRP7f8v3ZmkgiyQ4HkvRCRPewhs2FcHSZGGJ4CR2wh9UUzwmj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChMEgBeQAkHoLuQHnRUwrfF6ALSF64EEKSPPmvoEBMJWTdNsRXHfiWxkkrWBzPiPBhRxM5bXduBmVBSSxXaGExL",
  "key1": "52y7AKHFvpwg7LiqEp2vrnndfYPmJHN36w41Btivy3s7fZLRMuJ7gbQKi5YxJdGepxKtj2yofviMRLXTmCZY2oe5",
  "key2": "5ayivZTh58hQxHTU6YZ2qxBKuNhPfkfHzW5fxiewBeyfJ929EtafwsZ4p5GtzCS5f6T8BbHWwQc3EXmaGFGyYfgw",
  "key3": "2LQkLpvVJtyfGS5pPaEENoYAbjqLSFnYY8uhBwFLb8wbG54x3WYPyNcMpWqBPUuEFYU78vHAb4Jz1D5S812vYBjs",
  "key4": "3yBYYReMXjTNgWjBaCddSR5jXaCsXqgZVJjnTUqXdhRatTsZzZ6qtTjr7B6Qtqcb9LkPJuNf7YQKU6ny6EekviUb",
  "key5": "5xExZ7obkryVveB33EXHuEn6QhFSycUAhzeRXKPbGpJwyBERErh5VSW1dxRACDPVKqHUoNNVMp8rW4psiwWK6aQ",
  "key6": "45ymjAj5nw6d38TBAFsabLFyXwcVph5cYeXtKbmr2sijsVXx2fcmnWDDWWCB68B5M1hNnaHvxGRdTJmCGbRmRT6p",
  "key7": "zZN57vkjCVtbh5WcudD4bznzMpnU4RnJ4ev4DsNe5FAaN256cvdbqBzc9zyfn2a34WXqJRtVvtrxAPpJgQdz6Ev",
  "key8": "57UdYsCTPgrqUhwEGMj5djPUbv9EW4WZhhC6LD3AYj3oK9mmK95kY14GuorT4g3Mj2D99Vs1MhY4nyZNVePTGSHa",
  "key9": "2ziky67cYVxSFyDGoW5G6VR8qYEjk9d2HVvxBbrQQJbiHyLuDF9zB7CqsvBc9crmiCsn1hThncTVcPUcE3iWr8EN",
  "key10": "3Gf3Q2A8LNFcDKmXL2ZZMf7BuGBfpgEaR9JUrgm1pAnpYAYgAoJ4MkkZJLMszU7UNmpKAXa3BNa5yoNskmdspP9E",
  "key11": "34carVTnei8QCYqskBwrarYbGPFRJCW9kWEA2YuPBenroZqMbXEZW7KHfDvmvqnxBi9MDR6ydTgYade5S8aaJo8H",
  "key12": "3jqYqasBMe71KFWJQpskU8r5Brpxu7WngqUzXkYgHWGpEoGvGJhTiG3BmB9ZJ4z7nL5xawn1ECnbutsMoV3B9z4S",
  "key13": "4pe5YAKRzpmeZcj67Kupx8WBop54hdtZzCtaNoBoSLizvfJ93NzFBHvgQpvXXz9Mi5abBuxZ8f1VxfYwjkVvg8Cw",
  "key14": "2HwYoARmKywZJoLS32FP8k1KMh2p4eYLVHDBkb71b9yPBuW815sB5C4MJrR18uV8zDZVsCy1wp6knw33sHMvLhnc",
  "key15": "NWhAsxnHRJgdXpF6jYz7atpqZWiMoZhaeN4qDBMdrnwoFyxs6RKYi4kmsQZ8Dd9Gs4T98esTogGyqVLhu7jFoyk",
  "key16": "33YQ2MZac1gyL9dJhi1kANC4BQnyGYDViNhCgGx5g7oRDjmwKrPhdbG1SHUdABgy2qPdt3zxQcsL4bPrJEu2CTeC",
  "key17": "3gyRzF5tyrXWFNcrYbmum18T5jiPfMzWLMXjer7bKJjVVnvGXyzJSkgwxncBbgakVooM5DBMT35WiGR3GiKanR3F",
  "key18": "4yLjpTLBky72dziTeiSP2JF1VvsmgSga9BsxDc5UT8HMoJvqx8pszxEYAsUT5vZfEPzD41vVhZShrPnTbmeUnxdo",
  "key19": "4Yrxk3WdzwQx6AkT868saN3HM3LmZqd9tH4vCVwcawJKAPeQzkPKs1SVPwWqh61FS3fp3sZPwCmAM1ewbbqPT1Vx",
  "key20": "3oX5Lmg2E7AhrMfseTHTp5m8axyBhzxCLTTpsMe1H4QaCKcfdD9Hx3q2SY9smL7b9XQZ1Zw7Hj87hVd4J9zGh68L",
  "key21": "1HQdPkSsf1iJCgSK3mbbZy9G8qbREietetNZwHansa9Qj3sLFBg3EX8cwNvJMbgqoXRBrrtnvUnkB5vyTtmsruS",
  "key22": "2XM8xsgHttLjhAQgbLDKL7gZu9fScvB8JwhZkaQYuZ737P9xGEuheXzEtHn15LMJZHiG6FrHAY4HLT9f7MQADVud",
  "key23": "3HnsCNNeA2WrWQm6Et3E5z2H752BM862vTMDFJxgvd8tnVfZwuvg8Db4uAwJ498WQ6TemainktKpSJnV1Wp2c91X",
  "key24": "3RC8fkGmYXZvFsayRziZNsm53Ktspj4ZeZy5RTJuKEtdJVYFmAC7Tv8LNwGL9REaxzaAUsyBRH93wfe38572TXra",
  "key25": "veKRkKXiYvJSSDfVTwzuC4cq7XJyKKgiRefACJuj8795vXbyAJrXdCKnQSUPRJxury13SziB2RisXUgyAyfpcLY",
  "key26": "3KYnm7nGdQYJcsEakcdBRBUiq5Q1uahpbAKXeYsMmUt668FJgvUw4daji3ieh8Xjztw6V8ioDsm3iaV6PyDxeFV9",
  "key27": "2TwVptxzr7VjyzAktxVtXzv83wYtc2Yur2u9SWw2awfk5fyEAPycB6yfSez2pNJjMQyb51JRzy79XxRAihTqM5aR",
  "key28": "2htfS5e8qHZ2Lfx3pvaE4LN9Q7EUuoQgNpMt2uY3dHEoGN1P5ybEFgkMfsAZsFVVopgrWqEdduP9wd6JaQMvHi97",
  "key29": "E7PijMt7dtiwp1H48s8zhWttDTMn85mYeKhoBQAHEskgbSaHVnWed1byURQgZ7eMrR9Y2LMMWugWsc2ERrKtTsA",
  "key30": "3nojgGASJAXTvNB4qzyHvKbfsBSe3vE22uYMJGx6UnVpUXPLXM4YPifAw9BmUpMT41LqpNgJfcgBtquLNYB2acSg",
  "key31": "3xXa9KYJRasRr2HM52Yb9TwxvWnZ6zZPtyJRfxv4WfndNSKNFto7bQguTbJ4PMdhhGqFjv6d7PxC4Na8mTiu6nYj",
  "key32": "3WMWiSvcwwag6gqF5NWfiNdajrwS87dt3rw7hsNfD4mYpecY6AwFdJMCLkpn2LJmDCnxWNPZB94678SGfdGdTvD8",
  "key33": "2ti8F65pHfrDoypAPeBYrNxtVyQeWPyVr3HD1PxQPmgW2qo1Q9Vp8UfUz4YcrUdkALvvQWJCDkhidn7hVmVXd8vX"
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
