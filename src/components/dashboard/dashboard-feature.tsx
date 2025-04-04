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
    "3YEV4wNvWeLg8AoMYtjsx26zud5BGH5PF4kzz8ng9fkMJwooFgyRnC9eYZFQEAGvBEC39F8Z9Vgbee18CZMeAEdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ufqg1hXwgEZ8HAcNePHjB5uDwDnnkHWZzcY9TzH1LYkn83g4Jn1513ARQGDNAMVtz5t6coUqUHzAB7ZexFA8TH2",
  "key1": "2ekMdowTmFw6bra5BjsA5em6EyzwHtsR5wjP9AoNJTjcmLDSdBp5oJi7nuc2z94Bw4K9mUzyE1fHAmroqFtxPKs4",
  "key2": "UAfR5s6vLNEB8Dze3hPVLsGe4ujuKgdpmwJ4EDLhcmLsXhsKesuBi4kegxn3Z54rX94st9VzbnSWpVSBQY6fuvB",
  "key3": "LrxQReKMZfzhNyYtwBMDcLgZN1yqQmAZZ5JBFnptPSnrUxu1wLq5fLyxnQnk7es9Fgx2J5Ldt8SYADaEN6bdatw",
  "key4": "3sfvnqa7dNPcda5MAajrLHGXPTi9bmA12bCXqgnPTsGjTEZ7XS7SEpBj6MPauVczU9kuqWp4vFGu3tZ9oWKXdcTS",
  "key5": "2aZh7iMFAMgvgHHubBmcVjGUErB2t4ERqzyfAWDMrymi9EdmmPci35QoLRQaNpmcFr6VhGnrWQQeXSRQHQ3Q2tW6",
  "key6": "2AHNMiLFD6hr4GUZXKTmJJNnsyN2tPnod5b13rEDgHH6ErWgq7KMYx1reqYL4V89cypwQLZFAHPVzaNELatXGoGt",
  "key7": "bttZsKHkVf2ECLy39zD4qNWcRitHPJjhMDijpgKM6X3j46H8ykZYPB6pFDXARYMUNnqvFDaEPeEso8tFqeAqQvg",
  "key8": "54yDVEQNvtLPXXq5hnGaWpU7sP5e568EwnfrUHZBd1QHJ324zAk5ewnjatQY4g12xyuQk5u9MgasBtkg79w1KSj3",
  "key9": "49a69vxfg1jQkPeyND73YCrG2Z4mdbU7jCp3HQ7ZvmyYdDbeDrxKfSzivBPMwFdccVBTDXcrhbKd8NzKW688rL9Q",
  "key10": "3Xd7wrGrzPDaPus17fBfZRtcdtyyJHmDdWvEb1tKpfrKNdZ6iL5Bt6rFairvDvrV4z5zgDYS6QZ66mga6KRN3puV",
  "key11": "2jaCHBkxVLUubUAKJDKKffx93jvF6xjp9x3PgNPpedqmN6pWijNaVcCZSeWYMQDSeWfHY5VnMCfzEdnE1tRUtLih",
  "key12": "2P1epZMGSfmFb9Yf9E3npvZ3rXxVMfkhqx7JSyiaf4Xr1AArwyfYqDqST9kKSqHyFkZEPa7WibCCsEoiLzdPviwv",
  "key13": "61hp9R8CtVeL2ZndkFseTFQJVqnvuH5ZC1sHuqpWRDeWyYeLsy26kg4GbjbQdgC6QbbzEvTzF2TRCihKM39iw8Zu",
  "key14": "2qiCPRgJ7WbxTB1ZAvumoUu6Fr2AeQGjG2enVqgafA59JKxFo2HpuUjW2Zw2G8kpvBEdz7wWZ52tePh7jm2VrV15",
  "key15": "3P4QCTp6e6dxWqkfiFvXsh5VSgX1BpBuW5sd9tu7CuNonWsnaG94YjnLQJgwgyntUJ2TkuUNzttSxH9tDMjkeUwF",
  "key16": "4pM8Zukzx9nkr1vdKArskJBCzbkWEHiJwNubQANBAHbGuMVR6WePvhABMVoDYh1KjGmavxPidadSjVqRstP4GoK6",
  "key17": "29fMsbACqKoFUkJ9CyarMFi1FWxS5a8Yuo1VS7HtkMZcGms6kmaRAQ1T3at45yHQCKYMTV81bPDWD68NaqXR561Q",
  "key18": "fxDpes22Fh4ybfVNrstRu21jDDwB9cp9z9MWbBNdGcxyypDTWPPrMj8KMur7Q2N96tXb5HryLoZgCpjp75GLo5o",
  "key19": "4bTZ5xyayYLwhuZa1mqPTCuLusX4fkhh88hBoF8oCjASLcsTmRjXVWCFifoWuMJp6Q8f5LTKSBYPSiWyeXBk47a6",
  "key20": "2PrThbF3mKN3S8eSsdfw3kQknxHtXWG8QDa553YNkkedEDiNtf6LGB7Qac2Jek6iiehqjaKzQkS4dycRUt12RZsg",
  "key21": "ZivpbbQMUYrp9XMo9JXK4c4THLm9AnMyUns9Q8fAu1dHbECVi1oqRNPLsat5pEYLKuaJc6wvqGbHtuY2H6sPsYV",
  "key22": "5vDM1Hk62tGc4oAKjNY5THGmAECRReLdaQH1bRMk2ssLu6tE1Q2vnDFc4SdcPoQ58fdqrz55aKcVLrFwU3dyRyGA",
  "key23": "4L9Tz3PBB8emX4Q5CBg5rNGCDAnJsTa3J8eseUDJKymvGHaRskhq9YakLgcAmzUWU8rCNygvrW8yt936qRo78pbB",
  "key24": "62XfnAT8bva8SJ1dcQKBXLgf8YFnjBJKVbW7dcMVDAZSzwPSnZVrbJ9qwnEDC9cDYeoN4SZLgqvxUxvkaLgUU7Af",
  "key25": "4Yj7ybetxY6wTQgK1za9qjUptCsNnyzyKDkhYTAA16fBVQy5EgWGBYc3qqamMsvYhED4hc7YFM5Gx1Ggqo3szzmG",
  "key26": "xr4Qwws4r9Nt3cycmtovsDXyT29eoG1TxBkWCTw1s16k1ZPL4iLFoj2ZGQadvhVMMUbmmS4nTUsEQDmSKu6qA6t",
  "key27": "3awt4wFc5aV97TgM4gGx7HzwcmviNsTRJFUnUCBnF7ej9wqYPqqoa2Lp7rwq8sHQNCNdwNsJ2db33DNsv3Ri483f",
  "key28": "5w4ttQMMcLM35YMWsn7EU3hvvfdcMzw5DodobWsybR2CQEsGoCzcYs7K62oyCLqFMe5B4iTx1TKXaCJFc2jRnFTJ",
  "key29": "3ZHLvNZAC2RctcvcgViZhJCbEjDAf4YsEWFexcNVgiVRebyNsQSYEpR7fR19CdYFs24ABRxQMfQQPEtBZDDAzHiq",
  "key30": "46E8AxZHiuri5FaLb68E5JiJBDgyrrV7RGvuDmmy7TqkTHWxkgxVGteAxVynSF5SqGasxPs5SWhVzpPJwtt2gtRC"
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
