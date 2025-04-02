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
    "Vk11RcgbjfSGgXNn6CG9UQ8iRNDpheGCY5ANGumqc61hQJmuGCEPEa33mzT4D6wULzj1qe7Qo1exyBcBX9aoqSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXtNzGJdtLDqCeRom6fhduTgkbAiuDCjHBvYcztsvAYxR1JDNDxKk4AAXMaxQacQa54A3adkTkXqE3enyqHUoSL",
  "key1": "2Jnm4nhX4Eigz6KESAPGTBpStVgeMcpkPFUnH4wHUTjJTAN4TEaTsJc6VsBVgbd34Cik9hbzkYRiC33Nk3DLAKJA",
  "key2": "2Unrzu8wePwEq8Ys9JZLD3JUXqYraNjbasHFPyo3a68EVeSMEfK4Sj3bcFytgUXqwqenDTsGgLryKY6Pa669dYbr",
  "key3": "etVuZmbfqCpFkMcxUK1PsvyPpheFkxM5G3snq1619DAWtu6JFJT2WFC34bdrU83EtZVazsdMZGaUd5xfazH2NRx",
  "key4": "3ezf8bE9j8RFE98sUWzdVrDFfT7dtfkDam5648winvKWgpvcaM4dHG37HRUqYL5hWbAiXgntCih1vNfsyxdgxtpp",
  "key5": "34RWAwBoJDYZgcGRMVFHK5p5pcKcfY8J37wHwy9rEBEBxToUBXGyZdVyJ1wMK1ArVBJwUFaZ9VnLZJRmssYAWje8",
  "key6": "3sNeDy2Jvhzm7bCz7FsduxGbAPEbNG7TFZe8DsozbKChfGhwVUh6GaGUrU429BZYtdg3qHZHFhvxyzrbxfFqsWaR",
  "key7": "5kNTz2bGeLny1fS1bEVquyXZt5eWJJvWnx5PUuBf4sB2YxDxvvhnD5PYXt6SuynhQNHWXSrFtqynBzW16y5n9uE4",
  "key8": "4z3i8MooLzPJkMCGwNEFSuWNaoFhdzdVuQsdn4Tme6jZM7EChFiyXnEuXTWzD6XgJLsFBLKhEPXANLEbU5vDKAFY",
  "key9": "3sNyhRfEPB1vN4ieBM6BUktj8P7fkTa1nBKj6b36zJHW5qjXVHSkYauM8EbynbmrgEdL87w8GtSckLE8x8gMpPDn",
  "key10": "Xa7NMf9R19DTCRXDMEoN7ZpP4W9yzj3AABHPZFopmxbLbg7aKXTcEFVTA7k67CmLehZBgyi4zvx2okcndkbGrLo",
  "key11": "5xb5BSRKnjY4MM8TonFTgPmi5c2Cbxj1b3P2nVdHFsu8GSWLNP4C5bC9PFLxQvPVM7PHLzmEkHTW11gfijdMihbT",
  "key12": "2eoA61XALzjVj8RkJFWAKAHSGs4A3P1kCmA7EYepCQmK71dWewp2CXvodypJf6F9AxQk55JbosehXKfU2Qxrnobr",
  "key13": "5gMLi66dZHiwAFoqzwDN8VbeasN6VpFNSv3SfdZFotYhTbCLGcvDi1h9jtsh9YxNYmpYRycZ3G3WgbpCdKi4SdMW",
  "key14": "2csdAUE1yhpvZgmG2ayyRTu8ejUGta8mJq6qzXfc2UiF9n742yJHsPM6cn6rNFWgjCYk7RdGHn1mNsiQE6gQsDHR",
  "key15": "xToZJ4mqYqGf82JGpknyRTWA6uPuZoFo8ttMcuqxYki2enbQBL6pGvjbNVgUtDnd4sUtzFv816jczE4CmbSEfSL",
  "key16": "64udzEW5ZuEAjqG9TAiVPPM5EM4oxixcs9xit39VVmA7JS6vBqHqkd16TAUaSAQG4CjzaB7W4iWe9t8pg3h6gzwT",
  "key17": "5veW9ivpd57uhA9mXakdwZ89TmB1k8PimCkuPqjnvhfg27augYk7NShJekAGyieoGpzpWgyFxpJRs1WtD2HDxzVY",
  "key18": "3sqdCrSsecahw6Q7nwnaXwmqYdzo3ouXi2WwnDcrt2k172fZBH6Ppp8wMCwfGpd5yvXfQWKY21qUYvYt6Yevxf7e",
  "key19": "3bVnoeQjncr77Cxk9sd2PDKq9ijYhtGX7MtxxCfoznDQtRTwqWN7qBWPAWSWTEiGN6GHGNSsRWT9AtC8qChad81A",
  "key20": "3GiHDrEb4ALtNuwoDxYLm3mHKxA6KaLKGvjQrobJND1xpq37AzwAzuwvmsaVS6YSbe3xwFmypSaDPd1Brq9n5NRm",
  "key21": "667JenmVu8v8VUcFVMBste8ajFhJX8GaFQhangqw1RoeL9cifrfe4QhCAbYeKzE9KFX264qneidtNowMJARaFwP8",
  "key22": "4xRSd6fb3CokFrZZrW1C8bkYYiSRabPzLcni5PLwxEdLZugdjSezjCRRLPqhT3KrWA6Efjr7zar9e3LxtkVCPcXa",
  "key23": "3uMEEehK6yYx7ARnUsGuzYjv6drogvzB46zD8ard2LSBtL95CaBX1z2htN7gjQfENQG4JhHyHw35RSyLXYehTWiw",
  "key24": "316SLRuavNnaNTeEcSnpQe5JUq7wG4SQMcr8dxsxSkeAKusiJbdpd9Za5yDD23Guvm2coDm3erfcMkk4o9of7Ubm",
  "key25": "2zmXftntvsGwj1AENb6Muvb5vhx1bA4QNk9sy8ZHLNutKqENLGbDNdc8AB58T5Y6gn7zyk763o2XLpJ3nX59PiHj",
  "key26": "2Ej8R7sJ1XJcsMXV17zFPMYQ6d3mVZou1kSgHZG2F5SHL7ZK9fs4W1xCMXv6YjXPJyuEEn9sJromtDpubtUVafTb",
  "key27": "5A2sfokADY87noGEfddHksNMuERfQ7SkYq9Ppqn1j2hKmzPrKR7vHfVLjAkfrJEbANoU99EpeuqXgfcvr5Gw8avT",
  "key28": "3aDyonVQeySYgiw6xffAzy9vmdSh3ZsekGyPXwLePVxb1xwmmZ4Pus4KYzhLxpRbnmhizj6soX1TT7KgtAXbLw4y",
  "key29": "5tAD3Zwiqg1L5RXQfa9zHb9aGb1xhih9hkW93CsFRy5tDjny4u267F99x9QJEGrQ9YNkGHmcFz2C2onsNVqeQTtL",
  "key30": "yq1MQkuYkJFcH8YaLxx8TheM9id6K2Qe5WVHmrwCYhYK3hjcGZDZ7i5Y3NfYxRhqmJPsdseDbGtWVsvFPzRg9Tv",
  "key31": "4jEVTxykfJMf8Rwh5VoUsNau7dHT2JZpQ5gTHvgRpC9gdeoGPvQbGb2WfnkcapMXvQ9cVPzBZG8g7rwz8g3Sz3JA",
  "key32": "3DdzsaP6RbrsjEo6otafBEeF6jkAdsRwTbvHQRYoF1fVPVn6eGLSeHQLvzMhu7N9iTBoN3Wo7YTh7UmUqpbynPDp",
  "key33": "8NU3pJLGseP9BbU1MfVnKrt7cPpfBfkrEg1Zr4yT1cvNTKAk9dMmU9cAD7gwHr5ZpDg7zQvw5STDqurrRDY2ypj",
  "key34": "3rNBdWpGvUK8iuyX3tgcfjoXXqCzHEaiJo4LZuZsiohWiVkXg4ktskokPzNMvaZMJDLbMq9MR3tMygGgpeLKk9iN",
  "key35": "3ExfFz8difmMNHko6jX2pFkwSnVpY5A1rSBLp4EiN2muuB5uZcaFH7meJyjSnqRMpw5TybKHQcXf8bpfqiyBX5hv",
  "key36": "L7kWaXh93xxV2s315Cxr5b45Vf1QMnc3QreaVfnQB18GJzJQAtEauH95ZaRhgMuUYfXWSJZMzcVxsnnkoCW2esB",
  "key37": "3Y2pemyQ56RXWYg8Q6QkxRNMpf7oZfqCQh51hdwwxNGPTvujY21rfora77enSv8hkCCeph5YM5ypL6qWoqox5Lq2",
  "key38": "35xFWt5ZnoekRfY2qPw5jhFEHCXRNH9LsgAMLwJJgUEwDqfCE9BLpuzaEKASgv7aNduGNa5nr7iBTBw531UgfcCF",
  "key39": "xq5UxzHhR2ErrUgppX16C36gN3RPtu9PMcgcVmhM2JhT8wKTScaLpo3Kb2Cad6M3dMYAXfZQkestrD4epQpxbyc",
  "key40": "58TupSs53jmRTrrTgrkWZwwhATWi2VvxMgX1mnys5mfGze5wa5RQVDycBTwiZGPsphKyFpvw2Wkkk9HFBdPMVJSU",
  "key41": "3muPw5LZ2Z23qreS1HqaQcyNPk678EsTn8kuYmiZLP1FcrcRDto6N9Hh6FBU6qT6pLHR9F19ookV8354VRTyNiRx",
  "key42": "5TmqDAyFTt95kGiBEkjrf2P8QhzoVWNUzoMKxcMgNxGocazTJSi2dniKH94jFsS6EHn4tWbQwozUbxqzpWuqL8pf",
  "key43": "2EbTJgwZhU7BNuWe3Njg5GJDr3UdRcxMzDVFXp75PuYs741oh65BvkvuAcJo2e6BBu4DykuYXAS86rKJJ3LMxRZP",
  "key44": "3AoPgSZqeG8G57QMfaTDXzgce2Hf4bahpnb6xBuMfwG3xbu2PxA2HBxQoLeANrXpQ8EiwrNXz8gm25QjhHK1Anm7",
  "key45": "2pGTcZxzSsHgTMAqxxCzudehTJdy8UVtBpqXC885wfjZjxpUUTQCaDpwzXQ5XxsUAGpKjDnCoq4McJnawJeHZHWi",
  "key46": "3FcFBWxsYVSuPq3oUwQKq3gCWXFVvUnjrTcLvdd5zVJ4gq1p91DtBdh71t8d46dBmF87nD15NF1yGMrbawNE1312",
  "key47": "4pKVkpW5yjbFpHxpw3dxDZnJk8oxPunyY1EPGuFtZowAEPJSijdeNXcrmzzd8yeRUtSdbDhi1VxD4nrZQepdtaQm",
  "key48": "39w5ayaiDYYfDMyiZpJZL3tdjhkCPBkRdBaVBSz9GSeGijPBSgEiK59PPSknvvWv3QM67z9oxE8pTJkA3ujD8qem"
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
