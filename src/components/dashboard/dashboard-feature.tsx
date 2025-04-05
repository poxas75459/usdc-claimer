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
    "26ftYnwDvDfxHwfGcwsHRJ8m8RVbjy2qkv52LafEr6aX9rcY7aYG48cw57Ki2BTnBjiGFx5HCfdGLabywFEy6wNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s6tGx83gy8VcR17VdrETFeZkuqZ2whCRRhRHaB9rrKfNSJcF568gk6pPHw1C5eettfPPfA3CgS61fpQtcvH1UvL",
  "key1": "5zMxGYTYenncRF9nvtHqj1Juder7Kdst4qURb8e3AcoWXQGprB4CAJ1ULB6MrzweE216xSnM2uHVJDbKYNXD3vwa",
  "key2": "ja85R9TMxoXnho5RsbETLJBa637eNLZz9j2aHxwALNr8fhUSe11V41Lq4fggowHsuHkZ1TBicCZaeoVyrDPuZKq",
  "key3": "3xqsisxXS7VBUJzjG9sX8pNgXfp6BdLwCSNQHNh46tEUpZ14VKTjRgGWq6kP4vDQqPLj1QDGoB93FRjFwW4U63vb",
  "key4": "614exJmCJ6vBpZC1cS4CaA9k226EsrXAkJjHScEM9pDcqTycv5ocF4BPqgmEMvRG4rakLLS2UgGmbBiyfUNiL2kK",
  "key5": "yNRW79uVRWnxsMoLNdnPYyDigvbfYhKzZM1EhGTh5xqTh98R6ke17RVp75g9fVFmvVtWknoEtPb2XHNK9RzxFk8",
  "key6": "4JWXnNv83qDPSt3tX4xbPWSmVQ1egA1UiMzRumj1yfML7ExWmzA3vf6RLnfcL9Gc9kZt6yFgH7Pa1vUVzv1aXTtT",
  "key7": "5VtwxFtQxB2CU98RUCUDyqf5ZkHTXFonfMZPLo5eGUyNhshq2L4mWQ56hWPg54YjmeRrSRHby6jiLTSDS8TfccBB",
  "key8": "miQCx3d6PMwVLvjLMWsregtZrmNSviYqh9B3557S129CKe8wWqyobV3s8BCkE4d4ckTX6eSuBauLZhL6H2m8NBb",
  "key9": "9Nvqzy3EefU17u2nKkNr2jRVzJVvNmV9eJx5fPkyENKqxnCJCmuwqC5RRkhubmws2aVcppQnEy5VHJB1U12tJ4a",
  "key10": "3NSBtsFoide6NHG9iZt5ruUrcvhkMPnvfpCRXRbduDJ6WJSWWSwPKYcHYUk2AX5iS6WHawk4xEfULWQBFSeE5Zt2",
  "key11": "3oT8wTX1RotdvQT5qJJ7qJzcDgADMSr65ytvgdjvUtakgfYCDBSMhggmjHsCwh5whhMQAJo9CmCHUxbJ1HUkUeED",
  "key12": "w79kyKiyjLtrP85cwhP85xj7uT43rixJ66Peg4QBFJA4S1bj26CEhMxe8DcF8CMCWgXsPkzrH6tqVvcf9bVqgWE",
  "key13": "29UpovQhGQfaSFmrate5gdarkWKYhWbSuFRNFuDHFgbfVSUH2TZsxm3Kgjdtsf2j1DkuKGZ2mg77NzBr9QuwgD4R",
  "key14": "5vikEw4P8dMSqamYjUwkvTgfyzUgG5hSHhWj8RfxUzrxL5RBKb3WjKLPnhMYGd9MWKwz83gWD7XGcrX4jG6Rm55W",
  "key15": "bfJfiw6NMpouCC8uysUFMUxYcbSLMTWdtCcod5KezwGz9xfW63cY5B7sGHsshYtuR14Xjq5t183DKZoF6VNPo7x",
  "key16": "2xUntEeJ676aucKXzdsuz9DBemUtzY58h8jUJ8CJPmVcwKwTisps3D5nTPVipdsvFTFcyPPAkoV1Cre2yJh9htD2",
  "key17": "5PcJs8JfSAS9PvvJPDGLchyjgbKY9WUgnxpT9T4d7jm371whVSBFVM51Fx5edyhXciAoyTHyGzVvYevh6TCossbn",
  "key18": "3xwK3uJYaV2RtqUrPdkkgMHjQJRcJ1aH7T47dkiDCvsMdrXd9gQB5CCj1MgLUUDktiB9moWEMTkwbBFe9nu5czyh",
  "key19": "38EkYZLoxUqQ1awCW4jKUH7wHxGvm9nwSyQsufnWMaEChUG6v4A26TnRPsgYU3VxGMDBWst85kLjLoSdp3PHSR8",
  "key20": "wvnhJGKxbVk4AD23uaSKiRN7eNo9phD9g7Vytbj5cdnuootCt6QaRRK3abLVMBA9hHVi87293RqpE81rju694iQ",
  "key21": "5m6LwfTKFt1GtmF4xVxE9HTmqruQ5ETEXQw3PWS2Ah8HgLEPPTB8DgyXxWStjwLH1vwkD4yGLZyZ7vzQPeDsNTVJ",
  "key22": "48WiKD6kWZdWycJfDSuveTFQ3f6McgzXTYec2Az8qR6VKugN2BDXMMvf6hpxWB8NZwxGWWx9ES4mEGxTgsfegVyf",
  "key23": "5DAB6CcecjBB3dxvs2tbuJZXFjJNcpK378Td59Nt3ouFZDo5mLVVqhJDvjcQcGi6HwjJ3R3xmqSWppEJgML8hcor",
  "key24": "3oD8Tz72groCfTDNFnCHEDpfuPQDrmoGDcUPrm6xPhgQSx1bJrucLGXyFcHSCN6FMcadgNEeso7gJC2BW4cJ6wkh",
  "key25": "LKrNkRhYoW1ZLZBuM6ieiQqb74q6CXZ1any8MDPFYT9uC1NGSztNZNCzsVuBU96vb8MdKA4iG2xuP6xPJvRJmCY",
  "key26": "36orjv4PmKqs99pfuwkabcxiB7SzECGmrUfTwGSNLSEKaNfRcewpVzj3XJPbJJRnSqWqgTo31KDWkz9tsKEEFJf7",
  "key27": "2vKF6mT1T2vMg8KSpXUsL33VkCSuZAjBFd75iNVmwZTMfABzX6prFrxEGSUN51GrNK9axsoDKLeAooxvZ2Ja2fuv",
  "key28": "2giqXwPd8qfmiGzzeNnxtKAMBWeG8BCJRP3kUe9quatpC4RUSNSqirYruqWvziMKAFFrFWhqoYY3tS9BJsTecF63",
  "key29": "3CK8dK7vrRsy46dG87wgohFrDnHfeqQivoP8hpSFdQ7WJb7kfHQrbLLuNM7TXx2L7zrg8nD68x82bF8BtMjYqBc9",
  "key30": "3D2UE7eShKzKVFVtHN1w9Pex4SAPX42RhEyRcuAknHxg4wisd53jaMVz5ksfXNr3MeC1kfEfvLNGzguXnc59tWky",
  "key31": "2CALn89nHsDisjWYDPP4ycciNSzMbweJaWdHqctX8LbywU14mJpeCzyyLYPQ8CaeVT58sac936jQ8YhFv7hqQDyN"
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
