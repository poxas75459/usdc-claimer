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
    "3KfDQFnkpDt1MEAKFKURVUKcY2dV3etWBTbRbPyHNUuXueirPyRDVKNwXvRYj9jQYNgtEXBy4FSt6HVMSZsoeGb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1QEy7yABwCGAdyrzRSRXYDh1WHpjnizDechgT9iP1zQuRqAJWHuFdTuyWLwcFt2UWeYHmM1qQ7d5UikMCSNHJF",
  "key1": "54HFUkwjQYjJUYnLYQRT4w8Axu2dEkm1poyspCEaVu8QjfomWzpDy6ccC71UzaQWduKYK2VcF2zEW4ZibqHqoR3r",
  "key2": "ekNTUNrdjsFP34nDC6gHKZbr5zm5Th9vzrRN8vhpYCtS77uQWV1EeFVYDb2xvbthSpt9hkJeFoSvNkrxDF7rNiA",
  "key3": "4GftYpkdwxqqoxod9M19RPUCd5A3pPjAjSJGC1bceRdLkrLKvFSyHsWEcKeFGNH7BpY3zNkgMGzzod5WriRCL4tB",
  "key4": "3JhSqRiA3d7KtYTEB3cR9z8SB7rCWrGf2q3gYmXwK6u92WSS7RfyzV5vaFS9KdiocD8E1mGJCyVLc7HGziCnYHKW",
  "key5": "5ids9RNsvNVEsraXrMBUP8Rq4ha4KN3TCCgLcT5YbQVboqZP9jobadDrYoeP7pJixJ4RWVJkTKM84hstV8TnW4Ej",
  "key6": "2sfpje8mswzXhgtUqaL65evXZdcuAuYxi9AhkN8a3Aiz69g43kYDHH33Yzu7aPubUq9BUHAD82CSnMT1okMJT9jM",
  "key7": "5YjXqWd2khLAJ9s39VJTWEEJ7vtGNuU3NbMShKXEf8sj5jv54SwUEssKU3CJad6WDJFzgh7eKfoBCmY9g4HoRd5o",
  "key8": "2U7tZ7uRb5JqCnEAwvs82hdMSLmCyQtWbp14vQe9nhi9iMurWQwKzFBMzguLAgsoe7DXsSAZQQexrKN48vpTL3ua",
  "key9": "4QHQaNiceiaxYDbUzzR5s8jUkdjF45M7dJMrESywMmTbB6XN37hJfaom9r4Pz4kuVBmja4E6fb5uSMJffsijLshU",
  "key10": "6aDcQDU6WRGGUSPabATJZ58X8PGqAzeEX1eJhRMx6NSQRj1dPTVUBnCNHd2yxGFAHJde3zRWiM15JxiMMMgZ8Y3",
  "key11": "5WKqE5wuXxBm2XyLdMCwuXppbb7pkq6mC6MA2iHAr2S3B2Z7TtXHn5tRF1ifvKUFHVvDPT8j7ZirevTix9mmAtb5",
  "key12": "5pQC2NyResSiuW55BxaoM7d7zDobAkuUzpX3FPUSrvwrg44FEwdFhNoMS65STkYSRXvrdAtzhGyDeWpinfPd1Dvp",
  "key13": "2g7DQ1nEGSoL3NQAkLdLbG6MCGwHaqr6Z27jCds5AS2aNBCPFH1R5MxCn2ejQhMHRjhbE2219ZAuMgT2QSFEWfhZ",
  "key14": "44kjE9bShe2nmiNCaeUKHBgi1MZGjVjYAobZnp7iktBCuqmZBipEavFMwRbPWhdJAuKajR4YVgTbD4PAJa1TvXDN",
  "key15": "4jRc1FsGmQtMq6Hs8yXnBwSEjn9NFvdofpaksqYQsAcX9ACr49m83gjWKfK5Gir8A2s9eye1FWzMoaB7FMVbi6zX",
  "key16": "3bctKvjh2CwRzwZSFep3xSEcoMeiKZn5JQE3MAC9xLb72LQCpB2GEWrEcdtLVn349CHyiSuBycP2JCbEKgmCDcHL",
  "key17": "Mj7D4SbaF356wkQML2F1qqnAh4mGPoPCLoVUPgpqRFrPRvKgoW8r1Tgsi5oKo9t1UuY9fKLJHnkdCgjd9ZGBASW",
  "key18": "5K8Ga7upngFhuev4rX9XqjjsLuN3NRMWmBXZwfstTJY4hJsoR8sZV5zwqN3PmsZ8H44JkLxii1cWyiYsiYSUoz5C",
  "key19": "26BPGycAbCrte3ZyWikd3vxPXyp4G77n8wr4rz5appoS62WG9S1CK8fvtsQRWwHZz3iG2XjYfjr5FDEMADMQQn8f",
  "key20": "4iWREZxLHkGX2qsPfLriPhVGXMqZ6jva4wuyALDJNjm1vtMnuLidiKx6SGtknhBQSZdBKkYGmN4p1c8VoeSKrGr1",
  "key21": "5TZkDHcBjMqBUxbrit5YCyFK389FixbxJ4JvwWmemJ5SsAjGrc4sEz348XaTeNtdYh8qsze5Uw8pE1hdcbfkAmDS",
  "key22": "2hDtxxECkURyHKbBk82w6epYFjAKuSoLiTUU3bgD831TaxwS8FhxveWptpbqcKBiD3fA9yCXfsaycaReo6UkSrRG",
  "key23": "3vHDa6UFF55smkWBr6JFgq3wQNkYZa8o3LQjxU642tLSnYcDM7wAV8NgqbVicpUPvvnNbkorVjEvUtm87Qvu4Cbm",
  "key24": "mcHM1ufELjq1t3KZBHGrrQm4jeHc4KoUdYLgEd9QFkWXtwCu742zGdfhH4qcwrZAPCk9RYGYoUGmFj7QHeXP2dh",
  "key25": "5gYHTGgL8PTAygfJUrUYvuFqY4mUE6oCi653z8tvcoETRWLcfF9fsAw2bkk2SynWKmY1rqHm8S5UHBku4pNAURTy",
  "key26": "5uVADjiBCy2hzEfTqwrY6onXxSSxSgkWf727tZVfTQj2Q37fTtNJThA5mHxv2CkxZGc59heJWJkks9uZkcsv6mxu",
  "key27": "pEw3YeHEZcvuoaxVHbejBrZBFc277gWMXAZT6gaukD1iYUfV2CCRAqgaGyWsATDBG6Su5Rzb8LnMZgMnxeqgsHH",
  "key28": "5stmuzdxgvC83RenMHJKbZs7ZoNe5dhxgpJ9ohZVHorRm58tPssKWxqsZLxocpxg5k7orD7DroMNrMyuBurTKCUU",
  "key29": "5bQr8xzrkE5G8KQUcsBdUmk8mXmvdsGJhKiVyPSR4LAVaUGPsjzzPvg5ZvNdcdkSB4p4VNq3y1Fw1RQRfCyFFLSu",
  "key30": "bBMsdPMjfYtUKGt7AHZyePPdJ6UnjYUagxNcousDX6UUHceiZ7TUeDSRxZZyHmuE81VNN1GyXE3yAGsqCiRLRNt",
  "key31": "54mQxGB1o8EiSnJejpqtau5ygnuvpfNxMcBvPFXg7TQEmWYCMS8Ti5UhdAiP8LzRZUYzNDgWrK2M515SJQ45E1gw"
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
