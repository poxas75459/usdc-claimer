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
    "3sDqGcJttqViJT4W3cPGrkTpxoqe7CkhgcMPKiC6TCzWA5c5JQFbzEL1xNY4PwJq6qRYDhemGZoyJPHaL3xW7pdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhdCWa9DF2TraL3fftEUsUcmqoKLHY7MHpu7RfvtusVBy6iSUWMk2qTexQCAs7szhK8MfhRWXbL6CCHFyzMRWpw",
  "key1": "5XDsHXwekea85q5jyXBK8xpXu5zqoTARC63mvg7nZQh614qnbJdeYw2C9RMdi9AimbePi1UekULo4z1v1Pq6KXL5",
  "key2": "3jTWkeQqGie5QGFoENmGiQ7Hk99vzG74Q8R3YVZKPX5UGVGciceHf918YxJxevHwGiHPfecWU6GCm8wtkqnAWEAX",
  "key3": "5yUmsGyme8EaCRMezxJNCNJ2faqJHGMmcFNsqhfxYdixdrQv5hzZJH8veMxgjxe4MZQ44TC2R6SG9oMFDeAsk2Yv",
  "key4": "3X2WMHLcaWkjWKzLEgn1B1nXFJZQJqKMXwZnc8r6aKSK3y29kQ7Yr39Ts9PFQpmc4SuqqaJoVqLdguWJcnGcrg5E",
  "key5": "5PRQkEJuCsEW6VwqCGnLizymMLMDtFYbyVeNyMLwdLVvkFK985UrbEB9ZrBVpxebyzd2QeS3ASCSwd3KLoCYbF7e",
  "key6": "5PA859FTEWK6qNYC2ziSmKvuyVqYKK9x2smCQC2cwVFEcHneuCRY9hYGwpB21h5N3BQt3Xb6GBckCJKCsrBDSBtb",
  "key7": "6689ChQG2BE1rcFMa4YgD38TZAr23xotA3F6vtmaaPcaiimbMUDzfWa5ynLVDKtHYLDLPBbW53STNDYBkCTNtd97",
  "key8": "2nLZ5KsoCyLSii5JJHMfzZzZ3XK7TC62xtTPoHqxq7ck6ZA3teCXQWkp9QUvwkChzoqaT6hUFyvAMPHxHvbiiFVQ",
  "key9": "2JAdBgXKZmYDBrwWueXKkupswSiUqFvFJuwypYdTBYkCku6WUXqqUrReakBbWhhBrKpQC7YRgVKFGCYDXp5G2xCA",
  "key10": "5RZ89fVxBCuq4y64RxZs555ayq5MCmmjaKN4zxqPzzYXvMYFb3py4FzXLR6Q3qPA257iAFFkZXFhtg2cpuRZL5ew",
  "key11": "5wG99sq2TR5zXLgJzs5MdqqC8pMwtqqwUempTrXsDJmLVLLoHhZshF9VKXU5bmjFccZv27xQngBhua1zT3j1jrFD",
  "key12": "3b5BFfsToX8J1jNNbWwz2WNWn5kyup8n7RPS2JXVX8RwThRYUTPSTyoGGsuMD6kVeV4PpWM8XqD5BYvwoFgq6hBy",
  "key13": "2Ng4Q7wFqhepvkVuNLzAdWrSwo4rEDEGmoCCnWnbcbffbPniY2eU2YDYecHSZ7aRi4PHy1EVmaMhg1n8vnT1J8Tx",
  "key14": "3xztVGiJJC1nLtVRWh33WNQxixzo95TrGbV4BJwanUVc5n2TQEhLUtYGJdZojiaJsDLHo5HA297De1SoBjwKtrH2",
  "key15": "5jhNgQZfJiNABsbKymPmhLcThsjjDSirNQGb2WRrpatn2rx4twe8uPvW6Y1s48yc2mQ6fZQoBBd883ZEQEYEGTub",
  "key16": "3J5zq6LzyXia83jmg8a2hvW8pYT6P7MQx8NBMGf8yMiBFjWwhCacULAv12vY45HSr1e9Fog3TNyma887cYANdmDR",
  "key17": "5QVhckMaHSACXLYmftN3scrG5xv8zMd4nvkxsxjDKeUEuLZDsvDPVp84TR72UzYJoKcLzSLehipogkLeHyGBsEc4",
  "key18": "2dmZy2LX5roSFDNtmyyfpcijNBo6VJ5XD8rLTEYQ63WFNhiG1MLGH9n295Jughj48v17ac9T1dAWiR6neRHBrEu4",
  "key19": "5bwzyJhk5v9wv18rA5YMCScQCogCSQhcR4D56g9GNgZkGai35UEdDg7vhYmVLRFksA1ZUyqCiXWrqZ896eop9mEV",
  "key20": "3DTeunv6RBwy8XNyRw58BpGSpNmNGhGRd2616Jg7TrAA9DXpnF9tfeRyrWNbw2U9fQe39YifPLocqQirsXymu3gy",
  "key21": "WmpAbK6WnKykJZewg3w1LQ1o7LdtbiuQCUnMABiuVwwUuDM5YnK9doLhrkHDHK1mb3gQng4ZRruphbb1SkSHCio",
  "key22": "62BYptE6299RcAp9D1z1LqkkUEBiDzhAGrNnXe24pLnCoGAFadWHWoWQSmxhXimuk8j1qALZCwCbu25MGQBtFXhA",
  "key23": "3ubMrRZm1y2tDMsxJZ44YZXs7i7W9K91Eq54sqUx3ar7aK6BEonFohySJAB2u4db6SYmiZMfjpiXshdc5emdPNj9",
  "key24": "5HUPY75hm8BES8K5ZjHCbZ5D5RAHojf7KbTiK8262EFUZefPtdttPfnNAGmjTgtmzGQE3NAfYYucGfwDT7Hg2cCZ",
  "key25": "4JePNXmfJ6T2oHduNNwdoK4xSP5Jr5TfToXGmmRvZA8ZBEHR56xghFsLgRZnGX6cNUFnA27tkEAcCgdaa3rxZkJ9",
  "key26": "4XqSqH3dvUMp3xMTViRQTgR7vxmsgHpP1pXZH6CuAF5uALdswqsmLq8Tib2sRoLmPbdv7jPBP4uuxVBSK2tnca92",
  "key27": "526awZnvGhG5w2awaSZnWgikUng5ztDbixCYUaNcdiQ9tATAtKnB7pkxoKueYMDDT2NjpdC7GBo2JcGn9TruHk1Z",
  "key28": "2eUS3n6q2tV3he27hpTY8oEbVGn18m3MJUGoLfFdfSzLbpGWiYT8NY1XDkuB8mETgsHVD78Do6KmQ1XNt583y9Q3",
  "key29": "TQ8ctqjE9KUrKY6hsJKwZX2hJuST9U7qY4WwdcasFmAc3ePrWb95rBzQyGhpppL6NueHWy6JeV61FLkwYELNBy2",
  "key30": "iPXUMTHDYKtq1frkCsEimErKMZ82MsiMvoGQwC2qQBMbLVAxM5PsPp8ksfdS3qvU17uASsV3RDmgmDYLqDfzrpH",
  "key31": "3cQroK8Z5rbN8naxtiEpb141TjJqNXS94qmcogSqVMEyMNwvuuzJ8AE1fVnyWAaMvwJyjrE79YxAFHubEiB1rGcR",
  "key32": "38Y6jrEuGQKBok6mETnbua68SCt6bie3WAfXhfnKHgMHuqPTJPVX14CxSBtNKojNzwmQu8zJuUqDQWZArChGsGbp",
  "key33": "3K8SRDmRw4LPm8j52n7n4ufL1eGywh9sPvjkuq22GHk7cA2Z6Z9iqfNS7F5HcKRu9CMvPMSBcusx9oEChQiBRYDn",
  "key34": "4AVUYEAQ6pDhciixK6A6nfucfNcLwgSAx8b6Z8XPzSKozLR7d7oLdW9hsb1amRHGAQHpVBq5WUzAykZAfx4jA4va",
  "key35": "4MXeAJBrRcKrwj1CkqDkBpb14un5MLsrMsNYpYLn53XWLGGtkTN7ZZzAPntRSfLdEmQvtTunz1phtDEzKCtVQJvj",
  "key36": "4ZFhvUvAzKQpxai64yW2KU8yS7SGo8WKyv52n2zUABvh3QLLSLJNtSjiE2nkBP9fhHtvoqo7UD35LgD9J3y7a8S4",
  "key37": "4v71b71xVmb8vwSmBqE8pKB5t2R8Kwvm1zaT84m9aG8CQsoz3QUVfD7yYTVYEdGmXxpLV4F9nAqPoNRg6vhbAWRu",
  "key38": "42mHzrashghKaiMs9vMjUFfCByqM1rVd98ghbnbP8W137W442VPGBjBcECHGjZ59DKUorQgLMZvwm1pGq88pgcNd",
  "key39": "1UYpPHBs6xZMY1W14WTpkygVxxUUtmoB7FFi6gQKVnAMtiSFGfuz6k3o8VSLBt41nsyVdejWzh7nj8hhWWrzJ7s",
  "key40": "3XUcjKWuKsAYBf14fcE8TFfos7cax4XRyuuMV25pWGvF4f4zDYexBeTBaTRkVUHBhtt33gcobt8L2cdCD2TxRysD",
  "key41": "B7cVFHHWFmpw8fPK1zVKru2GLFQ5s4WNxNUhyTj8L2CzKSDe3Sfq5Gx4ZLnnMyHxt9Qn5e4UwoajERQv6RKcTa8",
  "key42": "FqbxvMboNBUERa6mK7XwWtCtX6nsq6vajFTsovs7GosUVYy8Rrq5QxefFyop5rFzYLUm9hsETNCcGG1VMhxGoL3",
  "key43": "5Ztk7wQJerqrvTWbLpkcR9GriYb3ZBSF7LqLFiqQ7PhKsfqoT7sFQfErepcqbVpqoYi8riixQqH7A1TCrjWgEp5A",
  "key44": "5zxq94Pann7pg21y8KsmdJYSuxYeZJnFirERdPTmhrxDc2jj3zyYemKcGYzSHQXeDRbFjE1ahvHXGJSU1ZtY11wP",
  "key45": "47NCEUa6xXEaVfRTQesuesGwq4MhXhitWPAEsH3byfH9kdtFwoQjiLpGxstdynX2AYA81pmqoDEBycQ7jCTqTUid",
  "key46": "5GtnAwu4B8QJQZ6FX2XUmm2A9HVP7PDxsN1fCvP85Ckwp4zjDULyvn92mxDWGvNc8C9exRRy3P3TdtXuRxpUb1sc",
  "key47": "4KF3pjqDeNdesBSK1FKBAqcbNJpAvRvykaNaMPdibavZnsAE2RuXjRrth3u5EsCoyQajkdJWXff4ADi7E9U1YQD6",
  "key48": "464wfrH42u6MYQgHvct7UcxC3LXC8RoeExeB3pPp8Z8VD7TpyvtBotZNBbQJw65DMXbyJ9ESzcry1DCFJ4GtRKdh",
  "key49": "2sDPUMaGXqWExv6v5BEv5tBK8bs5X5ArboRpp2X4izkcoKaLHKcbkaRf7yj8TNC71VWv9YQ7rrdxw3ckBfrzBGy7"
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
