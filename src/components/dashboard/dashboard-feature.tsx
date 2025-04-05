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
    "5DeP3wEitPdB9hsz1sVdrQrcaTbjg17SiYuPTobopNXCFjZLmNcwDktQ7824BRd3Sg6xFCYEPTtYQ7ePJ8e8NN41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6w6gEsUYtf3KjU6RDvKRufYkdoi6d8kZQbUNL342XkSqLW3gqGgFA5e6szPN2mSNrxA5gYAZJofer5dWopyRPk",
  "key1": "pCCcm5aJLYR2BFo6mQNv7WvR9oJeifB8QjroZofXL3Mqato6wYstfSaBrVBYCFUeuMjewMhFPx392QkvHZqn1hm",
  "key2": "4sLh36eDhFmwasPSraeqF6Y55sh8tQi2ksg4YF4HrNbzNtdR3N3Wwh9FujMpCoFy1YgGNv1qxK8X1EkwdEToyNht",
  "key3": "ZULU4BqxYnNMpyLYXKQoyCMAKthL8EfrhAiBATiVNtzGjZDkXaccbtuQBrse1WQHecDNKJrnHLo1pe2xk3tEz9K",
  "key4": "49GbBQWvKY4bHbpK27eAvPoFwwahqngVHkLDwWsSs2AGBDo3Geo3dvNJjokXT6KsUt4s49M54tD1YkSbhjgZUzUw",
  "key5": "xuZeQTxNkZcMesQCgGtju2NRJ2AktN5M4d7TDMNsgdKUUMcqgaH8SyvaeZTdUb3VyB3G8K7D51uPvwWP7qR7NBY",
  "key6": "3BUNdBKDYPbvkSo17kg62iPMqfEHHfNkR6MDWWT2F6R6bQ53cWrqNh5zupdG4N2hpzsXbPQ47wj4JJxoviiTgtsT",
  "key7": "3G74csVShJecKjQ3Xg7CZJa9ekwdvJKgGdEXC6rgRbykaXLq4xzGdxeJYyGGpQVULL2N4Q7uxrpYDnJpt9vyiyKQ",
  "key8": "3bMgXYrXXcnVSMzAWnn6iaiuWXDBpntguJARfYc71HUUs84CJ2jiGdUpJh36TPG8QXX8eJHy6TMAP6HjYmeD7WaN",
  "key9": "sCBMYaAcPfjLCptbY3uyPK3DfYH89XS4QtdmFS8VR6fvwUKE5Aweu7iRL2mUJh9qwuA1sQp4yuzYqCEfgZL42PW",
  "key10": "5kVJiEJFi5jnJWTmRUAFLb3Bga7E1QXKXTriekM8bzskc8hFP1T3zRFSw29RT6UD6RnEiyg7RiWjgsDqRF9QaG6N",
  "key11": "AAZnPSLZ2HegkTK2dk81SYETcNj5LWUnYws8jtcPjtBbaNR6phXddVTnSr1CQenoxfEW9kJUdo6jYaoMd6EcgF9",
  "key12": "4PDf5HTCXaoZ3Z5pyC4x6uxrGPtvAhhkrdJkk8esctZBfpRBwk6EX32CPLvgcv2YxFMDvjba2zSeEzup1pEBwTjK",
  "key13": "ycqwr5Se679i8YxcApk4bnzfkG9j4w5SaLUoGB7tVi7ppZYUHsYjGJKfMQFkWxe63FwXtbeELNK1gBzM9TeWfaQ",
  "key14": "4zWgQeeJcjEWqJoE8RNaKmXB5ViqZJqfUL913Fq1BqRDdACyDxGfgPv87WEV8G87q2K8G4jjEpEsEScCb8wC7AYS",
  "key15": "4gv2FvoPKb4f87UGctE7hFZaFqGsJyQKyvdRUzPAfscZBLtu4SdaAuhn7A8AF9ALCDCxNTuLrfYCsM9WEwzYbDmR",
  "key16": "3HgawmHyMCmDPDMA2qEtYPEukqYe2uotTCptiPAMegs4S2JzgdMhavGvmSdhJbZfQAekvJLTo456zak3yGZtCfip",
  "key17": "8q5R62E2TuXc7b1nytL4hop6nuYuBtWNDS86msC3EtdstGzA5pSsZUe55BXyNzZjr8b3pHvQD5oveGmonGeo8Mg",
  "key18": "4hcACNg2AawVsX8AP4EgN51EZZDJ5rWAPPJkWmp99Y55xXKfnG8eZcWWBWePwkhVjiVCJTRXS3YaVWosUGU1ZyF5",
  "key19": "4BRpbDMkcLWvwWKnc29ZZxriwfeqV62y73R7D5T6BuvXU1sxxXMXDhLfCZ5eSJ23kKDkNTtcDrX2Rg8Mi5kFWXy2",
  "key20": "26nka5EwCXaPEcCFkcFjRA6NWJQ4oo3YQ1pJtd8z7bTj7V3kdLjGTGgRbGRmNsSEjW8H4Xbq7Q7woPL4D7G7toox",
  "key21": "2t18fwQgX7hqeXSwqpSNt1BeeZMpXJxyFJqwVUE98JPMdDLJyh7Lt7tuoggpo9uDXCG9aunzqCTviFdvXXQYw5Bz",
  "key22": "V5saqyjczJ4P4oVwz38QZ9MkJLh61GW6AG61PgKZxy3WmTfadMYDMnAqdm6EC71xwDJpMwYPsSAPG4WeHZWvmZ7",
  "key23": "59k2YVY6oDsPiago9rGf8bmbnEmo2eRpeswDn28FWrQXYX4zU7UhhZNtoj6e1wxyMVhER6zSznV2BMfi42VCCh3D",
  "key24": "kt5U8VQjhshFzn54t3qEQ3aiHCtjgc8cJJGocXv5JK7dEt81kJCk9fLpK3i9iZnnBKs8cAfrDry5zGczUxriCBT",
  "key25": "z2PSYYd1ZS7MtQqowtdsW7DfjriKeUUHJA8fwJ6TDS8hpsjNefKaYhVAJSCm9izCu8be9qxpc7Q1YPps4qpgGtH",
  "key26": "57mMJau9xgVcz37NkRRsL1FgaRuTCTrxE4cC2M6heU8TSf5ydyhx1nZfwPJ8D67AeGDBZct6RjaT8bHAgkH9gYRR",
  "key27": "3MVtRCxodpJ1t2Tb95pQDYatoz7TTgLbu3WJd8UkQA4ZzRKMejN2Aw1HkLYx4LuLCz4CBs8fbfEpab6mkkYQh8HT",
  "key28": "5L43aM6jYUZ9mcYpk72XsefALMbpSePQxa7ifvL3cpj7CWRtdVZdaNMLxDFQmjk5cdmM2TbPQ97JnteHxHcxPS34",
  "key29": "n27FXLnf3YHBjBoAEn8Bb6kP3EVYdJC8j69tY5wTivLFmExkfQM6GF55XkGwNTqhD1439gAshyD94frn7bSfX4c",
  "key30": "yTvqRvkJtQ9ZV13MqRZcd3h1d5SWyVqEKqusW5UAdNPhjH1CZh2mV1eff7CXQRYBAWvyq8Sry3rpAR5mzprwk1A",
  "key31": "64uNUmi3ZhW917wgeix93nBiW1agwD2cRaMGtASx4JPj5wH2YQHW26GeJLydMZGa78am1i8Vdp4pVK7v4KLCpXcT",
  "key32": "Mt7MULSYRDPhbLYkk4Zs6uj2FAEj4T8T4VF6vB2kKjwdSkWJnK4PJbGHzftn91qMTX4TAZbbjHD964vgLPF2w7D",
  "key33": "4gCMNXSE2kbunwYvi7BsE3ZEMKUojKYGPbjm5rQBgT1bi65wxU4PasS1wwHtD6npfEkfiTYCL9fDXQSvjujt23HC",
  "key34": "vcYrBVDXUEU4LXYR1EqVRpjJj6L6G2Zs5jxhrgZGjtddd7qKGiRVctkdLZnsxnoEQn2vxitrwJxvBLhhM4kXi64",
  "key35": "2h9ZxuAKrxZJvji7EyJ3CFihLrnmq8EZJLTnWQ51puEvHYzZEGeZ1NKacHjBydqu37UGaYqzUf236oT5bermUrd"
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
