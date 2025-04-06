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
    "t1PJJnsfDLjyoTq92hArez5WBnehWD7L6zQpNnscQSbkCdsXYQi1DvZFVaFhKioYYcxypWabCw3BsyXp7uxJkEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yf9RzBD1ZnSDx9Vzb76sDtjEop1sgnxCk7LbLiwqD4YV35YXKegsK9Cpf7m1AECuPX699vUAX7XCd2E9a3QSrUS",
  "key1": "53PBkP2wYriP8uCRna2n5UjVkX5VzDk6Zz7GyBVmJUciTHcojYr4VKMe9X5ttpoC2pAoe27uEsH9XiEctCzbJZL9",
  "key2": "2UjetdjPMpJCzvRENcYzdxxNXXBXt7tZfuXdud1ndeAnzAez4hcEGschCmfsfNzDsM2sf1yGvENBcj1KJWnyCfek",
  "key3": "5GB8pFzfq79fwEYcsiJMsT9rxjqXQkwboXnqKLhirUbSLhg8Y53sMeDbJpcr1bAXp3oD1di8UDHA5kwJnLqEBSbx",
  "key4": "3CuWFXgeJ9JTcbCNyDJJPFTuMtCkGSuCZnm97ZgYn2aQ5mHPD1BuscuhGm8qP1E5p6DdqQWW6aHrr7jbGSWffH1R",
  "key5": "66s1xTGtUbBW53Fb8LYh5Z1bGDuGnrm2SaouyhaWqd99wjqT3MRUfzMh8V1kWetYZRTunCjLXVcBiYWiq527JVF1",
  "key6": "2En68GxkSoAQnogUuhkJJqTG4viUqemZszPPQFPQCxcbgAmyLy9ZZzweebJg7htE1Bed8JhUG9MgEjNikjsQwqYX",
  "key7": "2G4CvZggN8qXhv1k1MVmNVfvoJ6AQtBS8e8LZcoN3Kmo9YbnHEufq5GAbd2z2gvrGyc3JJYtdEXvHH5Pka5jQfGi",
  "key8": "2T3BpPQjq6bEeCGdrBbvHqbEnzJNokHhg1Bi6g9vC4pnYVPvyDDNj6QUaLnif6Q2EjVQdSBVVuxSuw5qTT247JAr",
  "key9": "39R1yCEAKTqbsDMTRzHfGG6bmcGcyrcj1BnfANiRDGV3h5N6oVEy4nRqBNGv8wMzKAMrPJz1rwjft8XwLcf29AMG",
  "key10": "4WY3vcaovy2grJZCq9kGsDg13MsYEh2Wik21RmuTrLxxUw62f9XAaLimDx86DMuP3tkKb94iN3AD9ZHFR9YtBgEi",
  "key11": "4CNgJyqJGnDM6Xi18V6FczGc4j3N8Reh4nd82dxax7HMGjjUsweW1GiFT3CsrhDWox5oCP8TWg6qpGHfijgNGgGs",
  "key12": "wYy3h1tRHfowXraSMrv94FSZWSsokRMz53FV8Q9A84dpHnySQj7eLXCQNQCMhkR8AXmhW9orSQ64XRFTBETGzh6",
  "key13": "23FaX8t3bDZGj77ScxaP37LG4t2UpimKChANeyrRa5gujwyX7dTqLtcZXWBchiJ5E5GjqVqpZDPuhuua8EUgXWEn",
  "key14": "5pZShjRq5eyhbGpn2PrzTU5PgqESHjSQZcg6ApYYZvgFFHHarHwNoUZfBrXnXQTohxhgnUsGUkavgwX6TfRE41sU",
  "key15": "3SUjiRQjt75qaCnndnedRCEjmXAumb7UwYPyEQppsD2GwfyakrxsXZQ1nxRZKhmFCUxBqZafmg3Dm4JTsNCnr9bF",
  "key16": "4d6nHsrFV89RKXTRMTtJjmUzUgxm6unuf6436zoHLM3F9Lc8Z9vg4G1UsyAQNBPfC8xoS89SFifSzd48Py9hBsTB",
  "key17": "ZLk7ML1r5HDjQT1baVo8DY9gNeNrcQyQwvpkFrAQNLeDPgWd3eAerGpdDAK4mLMVCuLoveDvatPqRMgktxMhRqb",
  "key18": "4h3pwjRXKK4GbVz8idPqtnSNWnZuoSKwtA5Zcqq3exfiy6DEPHA58SFdZaoBUqyW5LvyXiqVWP2AcBX2Y5hG8Hc2",
  "key19": "4CgRmjA3Hkfm9kJDhVZPnTxjk89vDtsiYF1fpNhVrpBm2cJiWyL1Rj3VoK2k7M4JvjgGK5awVoMA2UErW5iTjuAQ",
  "key20": "4sPf4Hn8H7mndt5LvX57vs7ptB8X6GXaZGAYt9eMQaxiWcWxxRUanVHoZmg9oRdMmrNBnPepHCDsD5eS9dvYM5ga",
  "key21": "2tSNddKaEzy2KGSdMbLvXv58HWPcF6GzpmF2G6a1e2wdoVEaNq9HEVxNZaSMV61vACVxuNmzVSFZyUZkDVp5QcdL",
  "key22": "3gJ8otAwUkUN9vqmpqYiNmo6aAYDpHjcwFFUn6CVnGCmjEWTKeDNoEcYaXC7VRtqTugkvViuGqMtzhQXVCtgD1R8",
  "key23": "3qnv6N9gSBdGKRGzNqTPEiycXocdvdVHPQnPBnvXFdzo6nnp6qdEHXGdfXSc8TSB8HFBjUivNNJcxDF9z5CbmSiH",
  "key24": "41bycMBvEf3BtidgUyeTYJbCoka5mzCCi7UWfnYV1hxVt9oK7BAoVrjMDqL4YJprof3APitNS673aSavn1dv5sUc",
  "key25": "3TVGc1KvUAjmJWTEadGc2nmPrzaeotNFsMi7eqAT83KitBETqzSgN5oaHvPAmj7yDQwZjnRMvdsUQTDwNBduEQom",
  "key26": "YR54m4QEnUHaib1sLTSMVVZNfpDFb2FLSKVtTtPgLUo2Dv7uMpeaPJS8tj5DAUW4U55jkVLaj8Vyp5w81mvj9hc",
  "key27": "4jji48fUCPA6grGjYK3MMkDqgbSfseUKGBXkMkKkkFrcVBhB28Gd5B1hAeQqzDXto37FkbmagxnmRkShoHDnZDXU",
  "key28": "5QzpX9tJAjTenx5BpJnRATTx3Vy1Szr7xD1HFT5qq6r8Qg1v9k9VB3zr7YiJwvCoDJYHgTgQmEbxztTPF2XqNK8n",
  "key29": "3i16CJbZefXCgL2wjEQd3Gn8kt6zzq3kGsU4kp6VCjGzrXNn6WPAniQDMD7WFvkXGdGqssvVJY1fzMW3eE8ArRha",
  "key30": "5qo3YSRhuHnaNDkEzwR3VFaQwr523yeuL5V8YUkAfTuJyEoyVqC9dCxY9PtRXrUpxp7Ef46bpZy5qGi4FsiZZqQx",
  "key31": "4Rwjns7owE1G2KhXBiNVZ6W4tmzqSfSwf4yn8dWhbacRgotSXJkah4EpmYQWUo1xGhH7nUcEPkakXDgSxBhL3fWA",
  "key32": "33dGaC6BeLv259bTffa41nhkeGajEdBRRceew5hXaSasSkutgbHK4UtiAbHHweXiTbtEPhA5bzJbshywmC91QBto",
  "key33": "4aTWDoNZgBCctdAgGLBfgJGs3nQn8FXhxCU7aiXnLXDPwqzhDVS4op8geMkXop13MEhFnKb1ZSsS1h1WtSqhrhKQ",
  "key34": "4m3fx4rzwqiVLCDLDgcaJpaefdRE28TZd9rVS3X9ybfhoVmRftpa27CfZu5Lue1EvZbznYWXxSayddV8XQ1wbD6B",
  "key35": "4QcKb8JCfuGRdUA6U1cn3dZHZAVyWz9qprALfbRT5LKKVF9WmvEPc4jer1zygYZHPYSqV5jigxN59KhjKWciEu5k",
  "key36": "4RYM2Kti5hUw5NQrN7RvgMT9L9pDzvd9RggspVxcwqmJmv6iYH6bR9k41Cj45BKbrjZLb1ohH8vbHkkMJaEPRjpG",
  "key37": "4CQvBKQFRTZ5rM4umrgbBu8YGfk7XgXCCDWc2kDheffh31aPVkNdY8r2rnANoPYoTCteApGnCkPixAbYjBccZHgL",
  "key38": "gueoA5MHqjtRunatAD3txXRvM4LSBE61GrBVnKXQEWWN47eMETMYg27c31afRcdAV8Qrt6CfV7sKq5DoD74Gwtj",
  "key39": "4BKZQcTmwBEhaaiztj39XN6o9uUkE1wMi8TGYnH3zpNB4V4cGFvWC3cRsmKWAZXjqajWKuiDi12Jf6onZDJGKFg1",
  "key40": "2hQKWHrkqaEGoKYx92KbjbEJdqgpcC3hfSdziK6uykpsicVgTakDCcEZzti3vdrShWpt2cmkoUuNhhHUfLPWCDDn",
  "key41": "3JTo5LcMJm8opEJTUuXeZBJ3kL2Cb18bpBeEYEnhpmdcdcgwH7qY8EjPkBMCWjaxNAupzg2jnnp4pR8yMKmgGhGy",
  "key42": "4WTMRxHaPbMbVheoFxMeCX1bVBqLPAko5z2Prw1rHQFGLMWKu1GvaHTBsXPp2CQn8VqqAsp5ydwMsCayHPbbubdi",
  "key43": "55Ncfox4sdhdMCeDzhfACb7ufSJUZikUQSj328S5WN2Py3tyq8aM1SsRfbYYtu4vzSjtze7gbYdwSy8qajc5AEhg",
  "key44": "42WRT2QYaTMK3nCyFevYgHndR9dcwRJYn39CoaMK2KM95gGWGoDgg8Rua76bCPGcVhMVU1kDcMh5MY72ZPEpiHns",
  "key45": "2npq5v36LLzMt49HhzwfKEFY7uKHvh2WnarAjnvXgDQNyQZsJCRoAwj9nVHim1SXWF4xWJxtYdk6WyPBme19zm6M"
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
