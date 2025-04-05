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
    "2RLgCEk9GsFLy19Mj8F14ozgG9wBvVSjHdDtgwtMCBzbF1TwLYcjo2KzaDZzjuRsBvs4j48cZhUrETTYC7HFugM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJe3c68WnS7BwHiwkVYtum7LxBNc3ELtcAPhkgVueZxTG88qYoFmoccEDCAKY6W7nxkKBb7yyHeDP5znuDSo1pJ",
  "key1": "2obRP7kWbZUBjXw9ueByTkquZHuSVLktYbQQQncuVpBxYENA3SAWEGU8vrCnmHpVJQo7GM7uwH9kYQ7x9QNxRYva",
  "key2": "5Mhs4Lw9CmLE4iBzFpo6M3xPsAaCgM4ATpvY3VDhgkNeWjPB8ndF62QkLwnV9Lav126Ve2ND8qwhL2fkjxkqgKNy",
  "key3": "4cA4mYnzvmCPBryCaUYLXvTaU9HeSc9MsPm4oCecT14QUXPneKhXzts648vtktBj9A9jzgHqVCgy4Jk3661EeU1t",
  "key4": "458uwXJvyVKRJravqcdVgbPcGFAszMrAM6SZqSvzjogT4U4UT6CPxV4HwfbypeXwxsaabUoWmm48xS8j6dGCfPK3",
  "key5": "5sAPwRPPgfCz8NcHBKyPqzq3oRxTGVXeBcEXb4bvNDJhNyKX3FjLGB72RQusxJpHYRNsSxmr3T3riXLvusHri8nE",
  "key6": "2CttKi7Fw4C1MPm4BpHR6iVmM1q4aM4SU3z2u1XMKGmfJx7bwWZZwxi7ugTNBQDAh3fn9zoEvqrdazsYjJVM3KoW",
  "key7": "64UX2Ci6YAimgjLmiZ5CZjtK2DSTsmkhMjcViUFQXWygTHjjDgi19LJ1AToiUJDUMfRQjyLFADjUMgcuhoMSH8YN",
  "key8": "YpmiUsUKCBE5Ey4rB8xVLLrQzsjRSkRF2y2mVZpAeQAPY5bioEt9Ndjsd5Xs4MxmDNgygbkLHn53XWncP2aae7B",
  "key9": "A2nsVUtUiNgWpPdpboUeybfuJVKpB7z3m2K34dL9F4yzCjfghrcNpJpWiGRwB5eEfpKSQ1EsHNMqzH5jcyrj4SP",
  "key10": "2RyRgBh7CpPt8kfz3FxR8xo1ATUQe6SNawkyUwTvFeLPDFHSAS9xq8dEBPt9RMff5JkVcszkr2zz4BfVjLtMD2Vh",
  "key11": "3q13PM9ct3xQDLnFgSLGUHfi91YAYGvpguU97UGdPD8aEkbcAK8J2fpTVj3S1Dn3fx6VZGMSznEADuYhp2jv8NaX",
  "key12": "5WBBJr5tfrWo86V1DBTEdZSgsYY5gnUkbY3ELG8nnMrzQFjaPiwYyp37NrQHXATXPaedFKukihfezAi3FSUYB82M",
  "key13": "2ADeV4BKmkPJ3VgpmJzM9A8CEGBVzWM7zr2q9EHYmL6aS1unpTWi2dNvg5HEkV1iwrj2Dhft5kTRRAnRqqbsGZQn",
  "key14": "3AyLi8aKqcQP1HnBned5NPtsSh1T5kxXDPr3KpqpYS64todQq4urdtbECsmNMivMG2AAVTXqfQyqffnWLRWs22Vw",
  "key15": "5TFwLXhVz7GXbJN7eDE3Mnhp49MZwXdqB78732rXVF9rTjshLzTrApuMd9xWKPoAgGavQ65ddFHUijHNaHFRbpyQ",
  "key16": "5g86rxdUcDLQQTiruuNbYuTFHcDrCVidJstMrCMNk4Jq2sHDs6hWMJukLGyW4PzYtrc49voudZm2RFaM3gJyaKM1",
  "key17": "2yDSqP41o82yAqi4wH9sMXHJp92zE7pFASH5T6CMtourPCXjgxLxTugKJRipsJLB1oAcncDMq9BaTR7YZfqNqmXU",
  "key18": "2x1fhYDXQuAjNLEzSKJ1MNRrMBCGnDJak4ePW8T7eDF2ss7Dn2RLEZGfRTEhNFmaGqcpyXKJ4AKa8CnsvDxXLDZE",
  "key19": "81wXPFEyQ5HJ9bk6HXQphSHA9LyetfjnXHzmKBDbKwoXUUo7uScuFQkfFnLQi29tT9d3E8M86Wif6oTdvSeBFuQ",
  "key20": "qZ2W3ZGsVPxPJuRVB8QoqduELeGGCfBf4sKkYJedK9T3EifzpHi2rTqiqXLS3BBLWJwsAhp5B1mVqU3gtYXrHbU",
  "key21": "23yvNHRSsGcUKMikQ6h3wC9Twk7XigfDKk5vREvWdbCQvgogFhwkhD2idYfMCUz2TmqF4fn8GbVimGobBwgSo4Y8",
  "key22": "2cDbMbCujrPi3RBW2jRbzCM9pJ7hXDrTuGYQtCeDttCZPiVXUgkMNFesq2BWCuxJGV9hUL1RMQEUwdVJ3xy87mej",
  "key23": "672Rzc8maRe77qV8FkDvVXPASaSnB45eQHzJhG3nH3UHpzELH8PJN26EAgEGFeGoR4SpZM2VTHkBqjkswLPV7SNL",
  "key24": "5EekVRsVyjC6EmaataRTo8FPafFNfeKeyUrKHmcr68cRtX1gzxvD4AMAmPGGX8ED6xuKkBuydmTAydY985Xf9Pkz",
  "key25": "26gpW3bEex75zhjnPZNT5gz9DmAoQGVhbMWVP6N6mrcvQztHmKaZAGuSYPUrptSYBDrwkU2Ta6SD3U52RHxDFeXB",
  "key26": "2qcaMpjrm9RwBVS7g4gqG6a4oXNgGvgRC7468rZciLDYQ69ubBf6neLv4sFYRg9BJ81euJUXSRgBdKHMfSWmt7ts",
  "key27": "2H3yr3DVfxnhgz6bB6tBPpej3jUa5pvkZC93JZLFMhKa8KnHqMtjLsaxE7EUHZqxHc1pyRhjXf8qm4KFoeWsEQWB"
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
