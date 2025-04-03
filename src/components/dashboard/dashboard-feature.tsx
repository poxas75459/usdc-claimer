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
    "28dFxX9b4y8o9f2RVLGqSv4uEjJJNrxByL7j58sZdTxBgPRUohaPkufx9K8XH6Uj5ajx8HeM7Jo2hihSaZN2ch1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDyscLsvbrFjzBxo4sAvuTMTGs2adtXAypD6hLosfbQN314MqT4DfyCs5viGrSHqmz42TJRR1AckgYa1G5EWcd4",
  "key1": "55pcuzkyiy8Upp6Rp3g8FYyc7kCtVhM4jDgJzohomQZzGaqrm53hBZaKPhiyf2wzKruhUfi4DfQtJm4yzub9Nwjo",
  "key2": "5VcPEoFx6tUEjf7cmr92HBw9sZdj8VW3Ym8hdCqAvKgLX2ChPa87ELpkQWmCBF8NHD62JmXgHW6VMbEZyYUTdA1Y",
  "key3": "5SV1uQBnCFHqSQcTxcGrBwEcGEBVyUGZqSDrzXwupTyHZcwUsuCCRtHHS2ZNb9zGUHdWE1EvhkSmRpndDywZW1Tn",
  "key4": "4bcTeWmPZSdECV6Mf78cJWvbRDi48z1i1ESuknVvGpaYaCaCgrCfif8dARULHiiTNRHDxhmD6YUaZP1jyicvi8ny",
  "key5": "5RTqYeZJg58pAMn8xaucxm6VnXPiJkJrufQzp6m3Sq6uwD7LazfiuquqezekA1HaHJW7T9vSFyuLMXo3nGF23znY",
  "key6": "ZZ69pb3EEQDwbpXJKZLDHES8GwLVkbk8btQL74b8JymftrQzWTaqqS3RBQXfy7ApLofmKaVb1ZQqjo1hSZjGCh2",
  "key7": "3sMriujFEgCuTSuHgA9cgcree2qsaJDn5g1dbp1ufVs73wFzfRqFU7RBSey5mn5FRHFexffgHZpi71j5GFLDMJvv",
  "key8": "KVbP9mVBJtk8DFP9ofyGsSTznNXeZZD5NaGjrKyxAMWMFV48yVZVphMorDbzsjHpGSmzcPP5kHjcx6NXMLx8oxR",
  "key9": "3sZKsHLady6Nxwr39dswUJc63uKifyuCHHdCkWq71Sn6usk3GP53cczvamftZbz3mBC2f6wzjc672Y1cJC8VKuNr",
  "key10": "2UWB2bELvTB8qTeudF5f1wiVACVyHfuhypdCADRBJTGRPzPRndju2XEWHZjSh7hLiACUEDdinvSJAp9bvsDvjgQq",
  "key11": "5cKady9dZCddn4cBx3MX9yededY6FRxB3C3Qo5rGvgwvBsWdpv1VUsbJmHa1pV2D3ks84hUpvrNppBm5juD8ij4A",
  "key12": "2zSDA8Tuj6YbfX8ymEeR626VH4pf2zrm2BtEeqtfUrpJR1tjA6Ng4ppcmX15Y4dn5USJpQPBJ2GDB9GEusWZo5cy",
  "key13": "2yGgDa8QwFUeynRgDHjfZNqUWqJoCadH5UFdZLygN3PHPsHZtVnHhDkwwjhkACKBhcPFqsWhD4Z8MRfvKEpMNQH",
  "key14": "4BMGtbbCBRwiuPwRZfi5bDgSafbQyZFrwTN6oyaeAHF9D8w7dJSvbDL3J2P3Q46S3G7CjGo8VEULyiq2dAEiiqUX",
  "key15": "2dmJN6r9DExqkWywULUS6b8xzWM2mXhB9XEEQ1uR8ERDWTVSnX7Ps5x8g65gxToz9SRMdR9YRmpWH4xwti1ogTGX",
  "key16": "57doWVByP9DppqUz8ZXhwQFuat2puuZiECKxX7jfy2pABta3kGBCuktCCEti4yr1kEfEMdRJJvwnE2zDPJn8Da2B",
  "key17": "4Pcg8moMASPi7VT9JWG1j64WQJXNLafD6rtkpan3UKvqXoZmhSy2SFDdDTR3cVbAQvKSUoQHuf3UMGaHi5L7CfHa",
  "key18": "34VFZqsLb2vi8SNTwbcAg9LH3qssMxtXBUKYcWgQVYzW2szScom2a68iUnXmcAVc3X4yc2ERdXc1sfU3KJzwfAME",
  "key19": "2k4hpZctBm11S5wWJJK5E9ARzwF7r4qkv5F5d2RDPH39aJ1vMUXyPx6nC2mqrWP774Z9RTASakB9MEo7X9zu6YYi",
  "key20": "5QsSkpLFPL7oELRgR4NrufcEDt22gJSfDxC35a9swpnpL8PsVTxQbQYy8srZFpnJSv5JNwQ56kRKFg2bwGXPTM77",
  "key21": "5HkXsJDkrUKnfsNK2zcZrXJK4HC2nRqL6RWQx2fbuiSziFE6rg2XcnU3kVQdao8srcKxcqeiiSr9xpfCe4PENZGd",
  "key22": "4NEuDLn3hdJSPDwLTffsYUS1nXG8sFmjYfUCkKan5NoGnbFJSPdDiAXf3VivD99AJgjboTLXWQndDXQSesKjCjvy",
  "key23": "7RuF6crAbrVdwksX4tZxiiBTo4hXGWooMEVoPKLX3mJw2VtpXhP5sR72LDXHKvwuV6HBbcMVVmQTaHaQietaVAy",
  "key24": "5Rch9dtVW3AafAZrxifhHRVaEeEJmvG2C7L4dgQPMzrsTD3FuQi7JWc3EXceGcATBqVDf97ozWRUKAe8cpk2F8qF"
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
