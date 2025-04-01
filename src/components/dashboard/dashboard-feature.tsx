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
    "2GQNF5LoqhMoLbSRjKwJwDPU8fAVSb5ibQaEqUeV7bQe73Dkp5yMC7QXDffnGaR1nvjdXAr5c15fsa61aiqrwMUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfMUiMPE36CmbBpJBbUhS2MwRT1ERqjoHdNiiDYQfy3dgrnPkvwW59pCy7CjTk2u5S64PLwPffV2aqEmZxHnR9g",
  "key1": "61rBso5cgms2rCdWiifgaAU5B31aMQdPVfnaD4Jw54aEGARc6agraqnrRnqdAjXLpiGArpt8DMWRFBRUoUfS1ec9",
  "key2": "dSnv4jjAk1PZX9mYb4Tiu5ZWxBumYCEzQnzSMLNv3RihwPjUhyYyiXNbyhQMcWKpq1oBt6cNHAiswVVLAJXEcuH",
  "key3": "45dBFPQek3v6vHZLDLD3mxQECmoazSPppXGuFuE5grZY893ivBe5SvuM38CiG1AB9bMbzsmtJMHosUrhMBxp5gzL",
  "key4": "3VM1zD568qXEegaDZg5XpnoWkgFiuYAg4zk25px4YgBY4SbmAhLAMrwTJ8aA2ehvmS4JzLsgyuTTP7Hkmqgv38SN",
  "key5": "2sCz1oGdmKmMtKdptVg8b7YHFxRAStBoqnzupiga54b3C39gy3vGgtnsCyU3iPst87xq7WF48MXLbjm5DVEM8m2r",
  "key6": "3ne8X8BwzguAcUNcNSkfmzntBMmr42maFZ7UoEUShSfopNp9QCqTUuKpDZAE84sj7XRRPe6SKVpGPedNrhJ6zZcw",
  "key7": "3AkbxrLeTYC7Sf2XACGB2QgXNQn4eFqZzLCqS6gvrmnyWUwvcuhHGbNK5oZBAPkh4UhHYHAwrceisXE6isjUyDmA",
  "key8": "nuWLjga6ENSTq6uhcFEYAoZZLQSUbYd28PAC38WiZA64Y5EdA3NtmeCLLN74a6RP9wsvjc3Pyqf1J9MLo74VFiw",
  "key9": "4sRuq5wMsCsVKqh8sfT4VhvjEgNCXnLBmaX1TVpeTJLZ3YwoLwMSNBnsNAseif6feh8p5NFdVG7N3yb5aH8AH8hM",
  "key10": "4adbC5PZN4ddWzPLEtgQdZQbsVeHXvuTMUQw1Aegz8FNMCdMLGECqPRG8kFDb7aZuKapihhMZqczzFXNzi6VmvbF",
  "key11": "3afZWWQB8hNGzwCSCdaJC3kba461wnwYMx9xxW47QdSzw9Z11fGKVSbby3XM9UwPzaReyRz4jSaDgJ2HDxm83m4F",
  "key12": "3oK9dnxrS7YwEHz8u8pyjJeG7XZEEoJ5XNnTi89C6ebZrdtdtiDdY3EjHPHBG1sav7MiBCQeZGgupfur4BKmy4Ye",
  "key13": "5aizVpfL2vsR5iXooi9mwyHN2EhyCGsQtnPr1fiASyJbomG9RhYBpFxesDQyhbT9uMdzpK8Pyzpz7we81YdyMTP9",
  "key14": "4w9RGP4MKV4V4ZufKJLS7ymaeMuTn6qDzibsDc4f4jzeYATtHiXDYnvRacGNmv71HDKzTnKCfVGt951GtNZPqJYx",
  "key15": "42UpW7Z8UNRNH5BeNTBdFnC69mBLYcGqojLMM5QMqBtzmFkoj59UifHRQpfU8bd9fA2dzkpu8X1TZUmvksgHqKpW",
  "key16": "2ttWnR8H8fEToz3sfnfnmN52oht1nkH55PZjBY4wBoqqyyg2UdexUY6aireaf3Gkp1iRFuCf1iTccJ27cZNNw17P",
  "key17": "5GL1pYdFeaTz3rxFuF9JL8zfLwV7YW2V7oQU1pLTBQDEKNwVyMeXA1Pk6hUNLmCdJYkXSNjqAoY841GQXL1QV8cY",
  "key18": "5Xy38vFq3DgCfepT28XcNLuztNGXJK4eKyGpYtxj6jg8xSNXKAywmpzGGv34EfLghjLxRXbRiomLsxvsAeEfXXX",
  "key19": "XmvMkPxiJDK9NvwLE4CJLHzNRp9e4pPDFta1fcr7RFwyTfq4MS7vsci6GpmNfoiStxfewT5HLbJLswTZajbNHc8",
  "key20": "4196wVkHicNknQ3wVcdttUSjBuPXNrmE8LydaCU1nZP125rZbD54HW6K83w7YhocMECqpLTc1aMrhuH4eWg3VD4q",
  "key21": "4kRyZRgHRrNTZzvDmr6QtvdQu1ZAhjrHehbkHe4gHVcmpQstRzoDtU1qCwzmvS9WtYjYD1iSeKyAc2RyjjPUAN9Q",
  "key22": "2QSmcotZ6gxB25ep4TQxBnqezrG56UULYXAf5PE2BvVTQbvbwFAHAzaxJexymA7V5Sja3xf6nzRdfhSoGumQK66P",
  "key23": "2Uv1hdBE6qPEt3u8PMZrN3rd6RtEqdQZMHmB93V4WKvSm59GF22wswHh6nWjGzjiy66gCH7Vtx1SHep9nqYGhHuN",
  "key24": "2rEAAVMwLRNLmDmVrnCxVHSaYUjUaoiLBZLSuHzYeaafKw8sYhjXED1XWJp3ZjdtX97TV5UKK4GSsVJeFa7FRZW",
  "key25": "25Nog76FSTRm3QofqjdfwCKycsoct2BJuZwFBr23Fv7HmT7RhLuWLXLaSGmYEMCQKHHf2puhUdNo28DZNDpE4Ayw",
  "key26": "3zKmEd8ugTzgw5eZ3uedrU836g6227kEn7WrxiYuryhhK5L3LPQpfBgnRGm4LWZSvY1nHLYmgX2Ln4f8EACjNt9v",
  "key27": "49DCQ4NSWuQQgzMk4gjNPxSvpx6n4jpYn7E7kCWBm5xbZnaBMBD25qQ3zWbkHmHnfQNQjQrUkhfU6u9VpY7AWk57"
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
