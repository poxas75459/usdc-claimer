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
    "5owEQcNo9dX1gFf1TNdstycS61dgSs62eTJiPRoX5doWFnhrAY7rrcWC8bHMgbQtTVpvWiHUSy5wDHL7KXWie3AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHZKtwntC2FsnUzZjAPdPbJfRto94nCn8s3hmJuxGdUmgrQ5CsPc49bRGu2kHjCQkGDkDnEZC2MiXDk5q6KcuPQ",
  "key1": "3pXeFzUfrZSmtKTZjkqntmFb9rKVLfs6fPf9Vtc5CQUxwGBdVPSRKrh9oXp5JCWbkVCcx2WVjrDxUp8pN4hQATZU",
  "key2": "4aW7geuTfje6yx37ENygNVxFo2Dy9wiPb7qmyQU8iYiVQbRKHwq95cTETKzFi82dUdneJtdwxzwn3uC9V3U9Lg7Z",
  "key3": "4AP9erGRB1LVbeMgt16kNgK6dV2E2QwPAZ7kUGmMV5LtTDBRXnAr4PwWyKRExrpEo2ztUmoo3DRUEcmAbdMUhseo",
  "key4": "4YbuHbyFuK4X37LSghzdixMBQtCG7HnSje8RrwkpkG9B7VtapSL1mM9FGtaxqqc7XP5yDtinymU6mit6NXNzVhMg",
  "key5": "neQSdNtx11jik44g4a89NSrm9R4B2w5ZxApjvXFYEeCudeYgjthA728kLqGCZb5xUGZVUVzJy8SqHFUSCww8pvv",
  "key6": "XDWh16YgmYMATjn9tSVNVsFFNnXoDTXYJyWTenmaFvqboynTQXuarBd2RCMt3PwBvNityNCcXoq5nVRzNcoMMBT",
  "key7": "5ersFVhjyvybL2KZrqpcVn3VYae92NsndKCxSHxieQqP3BeXodfV1vUhdDpoh2jeAgNgFAzjEygjXttCcNiEQBVq",
  "key8": "3CAWQ42x58uLsZ9VJMF57gf6icQGjURxFWKZqMqAsPSE1gL7ga9heuajdPemy9ZLVPortXnVy7DQMtf3m3LGthtf",
  "key9": "252ZAJBYgQPTCd5LQLPQdoLXfoGPCdpfRPBKpxRUfkLqKeRedYun65RULYXmRVwSmUz6gJ1hDggRt61TaNzm3WDh",
  "key10": "3J6LKwrAaGdaQEJs58Kdn1kScRn78UrPb4apbq95gXbhNRigA1eFXYE6pB3ZaarPkz4hCveXcJ5XKEVsXEPAmJqL",
  "key11": "54pt7GwpCZBS5BvrbhmQDEKp5AViy6LCyW2RD3je2LaAzpXRJe1aktFx8zgRovF9ftSLzQVwCfg3eZUSciZYAyCB",
  "key12": "3eR5uRkjsNjaw57GCNACgwbGY8xk4Ni4CTNTZvMFkGr32a3nzzYRGdZSvPAbWVo2PzuuL73QbBcqw7xh7b5x25yD",
  "key13": "4esTVP92naj4X2w572Eqr3PARFJeD3SNvZCsT3roWJxChL68o4VCoRHPkLyfrQzhMjXhjur2bL3UHpouEYt13TFV",
  "key14": "2SMLb3ZB5pV1WnpxtpKiJeg74kS8FhHVBoXDKxrzCrKBhMDwwa4HbEUdcuoXfTrC6PQ5C3m9i4GWBBJi7a3ihuxu",
  "key15": "3WSeGrC6vh76TexLtNqg5aVexAmRYzdBgWFSvd8bpH6JbD22r2HLjru3zFDKDEa5iRVmx5Cc4qHvthZzfw9mnsdh",
  "key16": "5Ph2ff6qRB2skWvqrirHkBgh78fn5bqBMhpycbQiaZrx5CiTFoRoxWyimDtR9TQ4y9vnwQVWB9GdRpzJjG4kr2wQ",
  "key17": "4wnwUVJ9pC9YkCijkeEmD4KajcHSQrjvrE5z14t7hTZwDpH9jMQeGabbvWMNAkfuoexJLRt5toBRuQwyFxKzkwtS",
  "key18": "2QtiZmxKEdC26h5pwMNf8AdBNiP3DX5y6JE7ePUuzJ4EW2VL13pf4xYE3qt6qCNihc5VTM25LgpfdL2gCydguC4X",
  "key19": "5EZWTa5SkLxSAd4imJdUCp194HZfrg9PKFdCVF5Cj9wqXLovyKHjtfmtiH3TrM5v6NhexVnu9ibBPg9sJ7pRco7h",
  "key20": "PftgAF13oeSARsn6wZ1i5f2wjaFznaoe9B76wN8uq3JFu3vef4WWRhbvxSTm6fPviTHPoeS6yJjczXDNW8XAb4X",
  "key21": "45QpC1Gkv73V8HwzQC2AUPKjeWav5Q5sCT8y2MQdBgfMdEsieEBeWJ5DpmYfoo5mb7Yb4hkqP7qXYmn5denD5vqg",
  "key22": "2Wq8KP6LJwrP6xw2KccJYqPvSxv8dhXDTvfSLKgjScpDoT8DBKeCPmHu1SQKKkoYuXRyxCNmcXNM81tFKjkpz6FH",
  "key23": "33iVigV5EAGnV3w8gB7ELMz4k9spG9c2F2mrH6QBerLAZdWij9sycBCCw7EwA839KrPJ6Ndxj3oqgkh2awUiKnVo",
  "key24": "4aKvht9JNi2Zf8r7tDVrBvAPjKmGHSizHoewbwWathmTxpB6W7w589NBijU5SvYrR869rXZydVsYM1uhMt4MtmGX",
  "key25": "2iJwCAKJYTV97QuUAf1t8MfMQQRMf8aBjKYEkYR9Pu4QeJu516rGogP37Yrc3XKPcE2KrcEhFcB9wqPpHHRU35jR",
  "key26": "bU3d4Gqek5pHGx7rH3NJr58dZQ8vNNBVnnEKKPpfjYKewS5fU8hu2Jdwja4qrn4qRtgQQrvn7ejQ4hx6u5RuA58",
  "key27": "2EBLLgeLMTkjTf9NRd8r6w8j4FFPcqqEgaS8MYvYwwJrfsiG6USdJzb5gxWA1hebNYTmakGJk9s41Frb2sqdBT7D",
  "key28": "55m42CqcdowQ3QafiQMqBxZrrueAiiseKmaV7JMCiP9C4iFjb22S6HLa872Xe7zucsYcfDCCnv5cz7LpE3ZwoeR7",
  "key29": "zUeuFn2E1t9zemfnrXMcHAzRjoLkGU9UtPP428E2jPzokdP4EPa1K8uha6L3teAaik8YvUGh2xUZjR7pHXWEWh8",
  "key30": "4BfaUE3EL4k7ZXmkziwEEQ2j31Lya1ppa3t2G3KYFxum1KaLWvagVrjuTF9qjzKn2srmpQs9vzThFBeEu8NNVQqM",
  "key31": "3DJBU5f5UUiYmMb96HawszLHHwZW2gTcavsHp81RhGQWSH4H19tMacEWUjPXXhW5AiDXCZcQB65Do3a5jqWvSQkA",
  "key32": "DPSrtAVsm9ULr2pbxnhVEMcrTeC4CTvcQ9tpr4KhRoQTGM5fRPEJB34VdekJGhpwpwW6ZP6ai39qfNf7sEmzt2J",
  "key33": "21WPb9TcGzWWf52XvQ9shyWbGjwv3GHreVu32KnNK55KGX9ACRV6V7hFBuP2FCGRqQEci54XXEHhVnDu7H2onefw",
  "key34": "dMjLSGQtT7fKKuN7vNSu3f1Xi8NpRhz6xMH5MzVGNvcu71g7bhZCxpNsrbsUwLUkLSJYf4xBPq6dSMtuLGY1AGS",
  "key35": "2a9rWYYuCxJ9vTJQbo4GqxEMJychPim8JgzKDGxwCaJZi5sR2ZesfLePcJjKWZtQr4EaHh83WskRBKeA3ccf5ySv",
  "key36": "rxEswx256MNsyj3rwTYM1j8TzZPRqzWg2GB7f8pJoqjJjb2B2cyVXAnc7tPn36E2zG1XAx4WM9B62yRbFAVhHPB",
  "key37": "4xv2b7SeMw58GuRndWceVbkpt5gMWcjk8c2u9ft7njfNY2iv4QU3bHqh73m8KJ1MCU2EAM41QbNB3Wy2f73h7put",
  "key38": "2YPxzXCoMDjhqP7c9M8svphnaHppBvgzNX8HKU2LV8bpGBjc6SgM89NRLVhz1sJXEN7wVJhBF7rEbUqLAsqD25Kp",
  "key39": "5kS4RB4gU32uRZfsGxCgHo4UW6UCKBMTqtp2qWgyzqfhb67RDEkqh3dXNMbDXm55nRLKjKXdMGnBQuHu2msrxZ2S",
  "key40": "4zcmnRHLeTDJiK2WGrhQYs4hkB46iMEkEC5rK5n1XeaxFGdmCwFYzj4ek2iTNhgAjU1HqRu3rjoyuyR1QBikZVNc",
  "key41": "LTaSY7a8FDHLvqfNCdqcyVxGSPbs1M2Ni6rgyz1R32PcCCMSo8ZLGHvihjkBS2C6Y4JeZrVnZkopaTEvQt3KD3K",
  "key42": "3mEP1Jibtzz35yLMzxQ6btnenUF6ATvcf6FHT72L5Dnyitztv7ooCFQx1A5VxC5miCsb5JzT53ofc5LVyx6uWufY",
  "key43": "4qZGdC8fsLs9sJPQubDZt2C3x57He7zZa4miGj5NVX9F3Qp6RqrdVifM7FKTt1bj3wHEpDDNTmrQ5hxgD7iU4La5",
  "key44": "4pqEN6WTJw1FZNEGaQj1fkjV5WHiPnUEZzytfRRAhoRjtjRsyn9TMsE98BmqSK1NfJqqqKZbSoF7psQ21GfXfWWg",
  "key45": "4n5LVJA7jzsmUEJ4aqqzbb8RAii5VfxXbr1i8dV7fE8x5AT32yKuU1qqQucZQXXoNVuRJgK7f4khiYnWbMoKEqfu"
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
