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
    "4epZNEh5vKjrPTCvMrANkxSQxJKouTbDckaYYshf5DWpNVdnf66RhdrJvL4wVeEd6YwNs3UaFxDuB48X4JoUwHL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xoha4roLd8n72BtzDeqcZpxMfXv9fTveGxaChS9KyqenMeh5qzTYE2ZGXCsK41hvbwmgP2ovwmDLvL6Wq5Mdbq6",
  "key1": "5NbP8kN1z4ai8RrfJ9Tmy82C1PWUTaLVBYkGmZqxqWsGkfqCSVMsbkN4nGsSAuEM1A6ym9pHQtsZ9MTcA6TZvsHV",
  "key2": "31NrBGTczGfmHPdHp4siMENRvaQgvBziUiYPL6hbHoeLMNnGnNbNvX3vf4owssHEXzyM81M9f4ZgfXTJ2tCGokrB",
  "key3": "31L8WUH3GLWjY1fuzF9uub4ooza4tyjkHAmkzNN99eqPK4mxmpT1LEaPpg838GUVXBRfkGhmM3jdfQfHu8ddm4UB",
  "key4": "5EjZqBrPtNS6V6GEpYrTRVbzLkR1jQpKoRUqg1BPzbLDAgAAQx8hhvUY45zvyZaPozwGgaG1zsPH9s1bJUvwUJ4E",
  "key5": "NaWX8eevxEnKU72rxiMLZg6HCc9FyMPy1rPL8KRAWPA2ZxyeE1oum9XPmqKQ1kLV473bi6mDnfuLjZvbXxJZ9v8",
  "key6": "4MNftsXGqQHeqMx8zjVBXGHpwfquq4qXQovkYUvuMvgLYqQvanNAhybjcFpirBQr5LgZSLT186Tg1wzbJvWbToAA",
  "key7": "2Fb3X6E3a4QptR3Xr5qkcy7vQr6TdNxDsJTcHJUgEVoCCPKdtq7uxKrFMc23jqyTEQnTa2nJQEuKFikUkTLUgH3C",
  "key8": "2PdjJS8BKxh56Cuzp59EoCCggm7uetLnWDxJcQiw74xwBNmTRShKH9hxB5ht9JFs8Jm6G8Sy7NUJihezYoPmcc2r",
  "key9": "4pxoGYv2yDfMvAFB7CGsJmscHUK27EfTjqPb23sWSuFpFPQ7jLavrxcfrWcggWkdsSEHHpgbAxwmskCkKApwo88e",
  "key10": "5caPFzPx6rapRzbojP2AcpYwHG7We3butL3jhi4LEKMH7qpWDeEJXASsm4DFYo3NTg9PBnNw4VeJfWBfqRcz3F31",
  "key11": "4jq68peygPffo4ok8EGqGscyn33tzAqGeqvzteP37fKE1xVARUytv8UrDdsuqSq88pnCyfCxgoTSETT4RBQM2rNv",
  "key12": "2xkUjDYbS3ua13zV7efotYLdHNPRQP8YvN4CpwcmQSqt5zkgmMr79C1hsGUq7BaRVs5edctQFyMZ7j1LGFPArbqB",
  "key13": "42UX15Tm4gq4RXCxsMDSKRFowvLfrCo5sCd9UCKPqUgnD3DTC4BBHhVSKBBqhT4KBzZbJ9VofyWqUTuV3QdyuSsP",
  "key14": "3R8Hw3iAXW2kUApYQTwcX5sNMv1ooxdywAx2ochdP6AiVJHLKdR1WGbnUWyfFrN9hMVYZgkfx5bADsbPhPqFYPhy",
  "key15": "5QKZoPw2xT91eHdD4cjq7FJwtCiNMepoUTuSxzDDE9unMy1Ro5Moj54fDEj9jdTYeprquVkKMXxoeib5BQmP9UA8",
  "key16": "36SBQPUvmgHrhE2bFqpktPzqSc6UCjvbbsU4QLWEHBNZ4cFSPxDftYKYGPz9JVVjyCZMHoPtZE2zy1Bgv54h82BL",
  "key17": "3swiTunEx3gpkkALm4ahegy4aRGYrAeTgJU2o3y5NCLqYdPibdKangQoE3EeuYaitQFygPyvLRuUZJS4XGJABg9E",
  "key18": "3qLkQA6KbVw18BuCYeZW49r8CfXVv3Q7QpiZ5k4XGyEGb7wYJpL7jkB7T8nqNU8Dt1582tuNfoiRAiMXfNXMyBpH",
  "key19": "3cBsexgJSDYqf6cZH96VbsJRvaz6AmRgiVnBh91iMie5fsoUCxyXjr66WF9yDofaUSKiZNCA4eEVARA4cx4UHH2M",
  "key20": "5hRb1pdJVsthSkxiTYkT5YD1uFcHbraS9PwsP3LZpqHfVVM6UDoXuAg21Rmc5ALEkr8iSXrXrKDDxPxX2ju3CNmV",
  "key21": "3bj2WL8m4CFEWe8sG2zdJdh4A11GUsLFgnZw4hxCcgCiEAJVddJ4c2vZ8adBp3ZTAj9vV49P95WBR3i4FzFLRBLm",
  "key22": "5CNHkzk2DeLi8uFAvMrQB8iySXLmHFCoge5amLaoGMvR2Zc69WeAR4RhEthustTMXY6BpejrnbG3M4WzWxpCm2hp",
  "key23": "41NS15nHDfwyGxudDyvCbPqrwWZYSbpk2YgcbXCJ6iVTFuEu7DibMJAMxAbnXwvFVmBneE9aXkeswkC86DUAACaN",
  "key24": "4VXcbzxrGoDnWoKj8Jrp4dAupQdxnSt6Yc7P7WBvH8rvj52i4VzfyfpxbcZs9Qhnv1CX7Ct4cuwX3bY4XYKCKsZq",
  "key25": "5DdkQXaUiFn4R6KxXz1n8JjYAcsJLKCAd6YhJfvpsUwwg62pUS4GoHvyXd7b4UJkGbphitPgUeEQh12pMLJB8Lpt",
  "key26": "mrrmockFYJR2fo271SJZdpWTuyjuk4hMuR3NTTuK6oSd1YxaHfFmDnYXiRPCC88Gz7YzKdXbdUucSM3fUQf8aK7",
  "key27": "5R8XvZSpmnMrGvjiF4HJVHapkTkk8pCigGeAmeGbSipC8v7pkBbti6d1t9aFfooiEa29ppkQkgV9hLNZcoZa4SKo",
  "key28": "ereDrbfTtjz82J1rBMrVoveiNyzCuJTSfJgKn4ohHZv9Yrc5m1PvrbjrpG8AGoCcXqR2c7zuLQv7aWCxWEQ8sVB",
  "key29": "5nbSLTAqbtizuc8rvDPwNVZ4k8hLtzeo5ev2izi1xcn4SS22DbUrs2E6UP4XcrzZgRQxJcFfck9vNAMUeyD2pG4M",
  "key30": "5yK2Rjv629gzW7JxdJA92iCfhbLXmSGB8UudmfTsiMJdwbZ1nnXTbu6dTeAqvPL5Q6YzCdynsVB4vqfSKRM9Eez1",
  "key31": "EyPagsmZ31e6frVEHwkHbsVa2PaueGQTSdKBkYr3VC5VfTmwL1UYcALjCEthwxezxiyFWiJwFXViQ9eotRrKTio",
  "key32": "38Pq7f18kyxaKKaRJmW3HZig5hQpUGEBsJWryaZV3xpg9kYk9P9vcDgUQZRNaFvKPkHD4DJZNpDhswXK2EspJzLH",
  "key33": "2JjbXmgf2GoPJ3gx9tDVdknRDCksbrsU38w5PE8aGTLhnqRTHYziX4aHLQVWB8N7ZQPeKxD6fLFrs4kwLWWbpSz2",
  "key34": "2yV3cRBx3UT3bJxxAsPRZPiMLF78MEPBtj3LHs8kkUppKHShCMseKwJsuSn1H17RC7Nx2wYShzDTCFvWCjKxtkib",
  "key35": "2AsraQSkpMwApM6VCpumCb7ZJVudwDoVrWvJNjjQrpkDK3neBkNNG1vsy9GPr9idGu7zQkq4fz3kimM2d67ReDQM",
  "key36": "5Xq5uL4dYKtNfib7XFBL3zCvfmSrYMcPeuEPDcZJARkMDswQZFoB3PfhbwH8has2HXvcoMUSvGqXNetGS4EaoUd9",
  "key37": "2XSUPuAPHjk3c7Y2RU2Y1MFvawkSUBfWhFUA99oaxmnzC7Tpc8UoKMqWDjSnTBQhrVay3By11qx8hBPUZBeVs9vg",
  "key38": "2LZsmcpyHASmRxzvJFwtoRoLb2UCc9npbmXNCB4HsL1MiiiYqSKmiJUKr8QV26rjgQvhA6iteLUfmjLBs2tuLrh",
  "key39": "4MQnbELniArZMhjCwGr8cJmL1fzCfMXjHoZfgRZ9pZmA6Eaw4RH5ks4e9igqtun5mPb7Np9G9iZKPGwFS5mrcZnv",
  "key40": "vbRoBiPCuSw1p7Qgf6SWawYb18NevG7Pj4jHorM7AYaGg8CkXxSu48zbH1ek9cefsAo315BHLBaa6yW3aSUe5Ei",
  "key41": "4LHAvrGWyZnedMS7spgkzSFepcq7aHAr3aFvqRFDUTcbdhGfvD5wRzgkjwR5749bTNtfZwoWAk2b8HucJ2mwb6tG",
  "key42": "mDktRSQhZETPMVaMHrfzvvCLQDyu73jEXhfY6HRMDKVcW6eFG2tWQ4ock9CtZqPvcfb8fBgNDk5GwRd8kpq3QXx"
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
