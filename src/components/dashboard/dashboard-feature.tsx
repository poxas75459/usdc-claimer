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
    "5N8TqmXgmY8iB4G6BHZfdL1t1FYoFmfVV5U1xDUoEdSwfMQDPsH9FcT7gqkfzWauMscrnaKsHUkL2LUCYKspkqQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49aZNDthCgTVdKBcWBvjAUYUEWWVZ8ZdyCYBr1ojqpBmiYazaec7aQKVVpqowEnV4uXGt1bUqGWgPm2eZHua7r3A",
  "key1": "EE5ySmRTDu81XQSm1eujYk3sFvoLZGbo2G7LPs3JBxSRpMvjJDENReZ2Tx9U8i5PFef949vuXXvwAC2ytdbPALr",
  "key2": "b2qg1PxoyWZm1YF4RoEvaW4LMNaeRgZYrmw8vkzxhwKSH3s1cCMfaM623FeAU2sEWUmGWoL16sJWYmpYce8TVeW",
  "key3": "46hFDdWsG9nxw1ay9VpbuJyA1YCoLtQYk69KejmaZzrxiCuez1j55yJHZ4G859L35RcXCrp5eGv9RdfP3v7fanq1",
  "key4": "42qjpFd7bmUQnSH5frGqM2NopL3EtVAc97yQXrANmSVF6RA4hvt6djiroBMkiktHfGBMTeEg9KSSuhq2LynHQMT7",
  "key5": "2wpsbh27fjXHQy2PTE4fvj6NRrWM9E7Jr3Hzdy6fLwr4iYcyhmHwHMgwhzzKSN2paSSsBELaPDzzqXuF8UjXkoz1",
  "key6": "3KpSQjyn2g98scJhDMQfCTpt2hjdenpzkEBws4TYQQRxXPsyauhicgDWgzA9T7zKP9BYfeeUcuvaG9wFL7zx3r4K",
  "key7": "4hYbxSHesRH5mjN9EwmEpUK2ks6ygVNgCCCHnccc2p614Fi5qcaix2YHXMHmzosmR8mnEA8Puv6L8yUPFckki1XR",
  "key8": "4NcfJCQd7Ay25V2aciZjq9Df75aV97Fc1xLWFYHxHapzfZpiJ8TJ3HaxNrDnUAGYMzsEVBzuzFXTmVFksobYtFJj",
  "key9": "35sx93GpMq45FbUSR5HioEiD912pmwNqJeWBhKdD2V66HSmJHYWuBoEMsCN8Ks6ngVaD1sjrnmreohVwcXJJU9rU",
  "key10": "4kzc2zEGaEv6BYCbH5hW77jmzG3Y5ZoKMsDwngfQxcY4kVBE1E2pVQnBJYa773DQ8No7TbJJdX9iJqeFND7YzGHK",
  "key11": "2pCdhCyVRsHmDzEJAtKDe775YnukHrMtVKG6MR6FVtnbMnBw3CZSD5nSXLp9FXkaypFPB31CchKo4E1H48Yns4ay",
  "key12": "3p8cTr1CrtCwQPtQsPYTV3yV56BLsGRC78EfB3DJ1W4GzrfsoBPUBmLwBNLPA9nd8udozAiAWM216wPWTF9kYjyt",
  "key13": "2z7mV1jibvaf7bphnsPiQ9EQMDn267L7ePgtjwmb2QNmnqH94TrR84FjRqVhE63qVsePxDaf7ZgHra7tAyqPYmoa",
  "key14": "2hEiMYaRe7TVXPBGBZXD5Pq3Dx2FK91kF1DA5XgzvVGpucdqhiK3wEobYjxFShZZLVcz6vts71SZcqJe6bRg1x3t",
  "key15": "YHVRUsuKi4ctpMjVfjC9qDiAyTivVQuHYryrVqkwJhe2ETNdwLdTGKXkqXMUncV5h4vugWREup995AQZB5YXPrQ",
  "key16": "2y4k73WeZf7UV2FR5zNyYevHVi5PtAdbJawNmm6qGxXHmXoUh43wir65sKTrAhTrrcKtiJ1dUmrHgyrnEicJZmJc",
  "key17": "PuDFpHqaenQ914Rm4YDSS4G3Wr5WmpDuBwZmtXBqN1bMaJNGawYXVdWR2MnB2qSRGjTp5zZqwjUFGwuhgco6ez8",
  "key18": "f2pWuM8NUghk2G5pNfggVtb9BEbkoMSNu7m38rP1ifXyfw7uKEBTrNj5dVZhiVsP526AWJVAiW7BJJVpCa4B1iM",
  "key19": "3EMmCjs9iPvuv1imoskmchTSDFoXAcTiRPtB8BPRZLF8BQRqZaG29CypR5o4oV9thjq9UCkQpjR5edUsbECadv4m",
  "key20": "tpyaHi1XK7ak5EmTiCqr8NaVsME3cy1PejgGMDsjrGCUXGxs91vE7kPeUTUA21YkpbrtKFtB1Sn1pubyEtR5nRc",
  "key21": "2gHka7J3GfG2YF1kbDv6TGT4JFXgUhcYC4yTtN646JcA1VapBsYaL5gWsA4FvMk3i8HkEKCQDSVfmJbDSAJA4raG",
  "key22": "2cdWb2VRVXyPxwJNEpf9oZPfrBz3LzfSXqkjywA2Y1r4wqAvEdSnVFZbiwjdTYoGaMCSu4b2V8CMpBr3AdgGgeDs",
  "key23": "23Pd3jdKtZzFVmY1j9F5hGRLineGRxC2p3VENqDyGcsrjvSkdxT6axhvdhLEuNRWM5iLVkF4ksKTvdEJApAjbKRs",
  "key24": "5xey9ghEBb3mX8gjhiHaestmxbJLzGhDW4kPRo1jKPUYHv1EiVLWwrJQ52uhwe2uM9Rr46DRh1Z4XLTTmnBGq3TY",
  "key25": "5pGSvZtMgtKi6ghoaX5jvTeuMTeWFJA24LZwUmXAwD2yRVsXMz1LegAnhzwH9dJv7D7tSG3kpei3BN6bMvBAjRZ1",
  "key26": "3AXeKgDTzGHYAoHaTJWgxFXNpFjmJTsxBHqFgHtFweWs5mGCMh1kuESBeNrH6MFm9ecUZuYgNMQ6ZNQ2xzTEBmyR",
  "key27": "5NDHWbmaHwsKtmbJugprNfNzqmSXXQmuumeCZPjywVRe7SUsn4yRVAZS8PcSHHpkCKgwaV81mrJMHjjrAmZtBRau",
  "key28": "5rZkQPBh8GdqQsWnmELvQp9kLFcmcgb4DbvupVC38Qv94D1o6Fo5QS59biHZxtJZCDsyowqBMokaejt2o33WvQxf",
  "key29": "22WooFyUzb6VLETwfMaDwCWZmDUzc7riUgDVYo6uuM2ut136SPm18maxPEi6XKKoRMmsQmm5FTQ5FDKD5RWCczbB",
  "key30": "4HkLHpEipSnCQP1ZxCgcqNhtxzK6RFFkoDveaucYd4QJVwVYAiFAw3sbsGZzmyxNGTT5hDs44LwLEr2fWeTiXNS6",
  "key31": "9ic7fSE2Bgr4mFnNejtAbZgHRt3cipnRNYQDSJGZ8hFgMRwmhdN6fEQ3eZdCUdztgg1R5omjiZzkx69w6EftXNY",
  "key32": "2VfbdHbNkmCeWH6i1tDD5w2gpG9Y4UvfphgYKdNeyLp2xY8kXWnmbBdpGAEjENX1QGNhQTBnpuobNEZwGFqATZSB",
  "key33": "5cZvpZnN74ZDhNknPtmzhDngyAmiPRFxDKpRMuTE8kTCmvojMAp6QkLU7eau15MPbzm5WyczFUgobSkt8vRcwLEy",
  "key34": "5jUt89o3MhnKwad3BSDDuaMXEAj6Qke1KpMykHowV6aTJXLrPMEQ49S4Tu1FvUyx2VVX6pxWqWa4JihYhCDUt6LJ",
  "key35": "3tsc4BJHuLffAYCg1azrWgH64wkUFZEqbGMTiosx6QWqypyewaUAyXwpY8nFopHshTeoSch2ABwsV6DrPXEJ7HMS",
  "key36": "27Z5Uk5Z7RJzuTGG8U8UGRXak44jE93gTjEitVfuR94RSD4bkNW56hqqLBLWMJPVriqGvNWeugF7ZB23iLoJFewh"
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
