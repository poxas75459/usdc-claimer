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
    "4h4TRqsweWgZkKKwYcUva3A9KDhp3JDpS7HN3N2PvhadtVDdDH1GtH5ZwM98wWPL2aiVrjig3mg2dmf8gZ6GuYd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ku9YeKASvqyjDSLSPiJe9aYHGxdpRjpoJUTATfrtzHLGjtULG6c8BxRvRc1QxpSpBCoNx2je3J9rgkPJNqZqnud",
  "key1": "cj6vzRuEtwdCchg13SdBWbk74Q5q5ML1aDMre1z1b1iKcGkMrNgcGXhoDgzyErPtwPQsS1VAqKro9XN4EcFSMLY",
  "key2": "3aCtKuUpd5QkTiTGX5qwyXJimqpVs7zuL2NGemTg2bUNauvmxK2S3XN4fzCz9G6Dp5YsPMvTVRJWSLA2AiADtitD",
  "key3": "29fTW4A2eGbYV7PdEHWQa5PrgmdyiguzoMHY8WE7dU7EVdLASdpyJQWx8272UH3aAkVNHfYfeqxCEyEx2aNLgfEs",
  "key4": "37zmHCzrB2LpJP7FQoQjQdrw3VGwK5Sg2GVwKcJaqkLLx1Pwf1AppxVU6yCeVVocLsyFxzPo6oT9MBKC26fMp4zB",
  "key5": "5MLujUb4DpS4zbuCXAweGk4xAJcVosNcrUEoAtNF7h2oLQ1vhYF4F2f3p3RfuBNSgH9diigfnvETZWRcAopnJzQM",
  "key6": "5p8jaF1gLTgRWxnp4eFJGw2AqZF152Z4zLnVGom9V7foRRn1hRTwk341QxRU68KfWh1UvdXrKmTKiNkeUdtxeg4K",
  "key7": "2PJCf86y3MpsrYW9HmZfXbymiJpQBCKHTySsJk1f3Tz1Jpg4YY1YxoTazZQfrkGe7Ln3x3nJwLNSb5D6yr21e6E2",
  "key8": "35AuPdjcsPwnJxYPDnxEcNwouRF1GGkbs3jGAFi67EWyos4bTremfjGcmv4M56ZhaByiY53mTaGumAgbEwb85SkY",
  "key9": "5cKEgG73jRWjFPCpnh5juDWz4e8GS9pXE9XdgAK1NUk8EWZrNJ2uUJ9j722v4eGFaAe46oxMNL6QpGbDNtwhnpXf",
  "key10": "G3eLNFYf4tSbkHbPtij28DgZva4R7G9MCpMaFKAVFoY4B6uZq3hTKLynqok2xbAWaxzmUy7b3dppMougqTA399k",
  "key11": "4HoZMxXzrB7yMjErYxgxsRRgdPdQgUmk7ehjWpaL6SEjfZonrymrUfDcQ983tqaTfGx3ADkwhopEBQBtWppGd764",
  "key12": "4owvFocmsj2uBcBFLF2uUSqadrduZgeaciya7wNbKde4XmoatSV6qp5D4HFzbXQVddLgFMaviaX6iecF3P6hUeRn",
  "key13": "3hTXswust3QeJCVa1XNRW19rxHCLYLTH1VLz3xUR6PZZUnKHpE6hxXXrWLFJFJbyzf2DKPJaB6M1WZiYE6tjVRuL",
  "key14": "5wHZzcwjnXpxrwjMnh3JKR6PNiGXu2JuhK2kzZiTtyZCQXHgJv8JAd7NkUiEPtUsAGNTAJUCFk61BhsiAcYg8ZTm",
  "key15": "4JrNsxHv4Tv6JqHJznpSf9KYPrUYzEhTPF3qrCx23HQftfRKB1F3aiKEbdjLuquEEu2rPat3oTjjeb1kFXx1ovf6",
  "key16": "3aN961x5gGkUeujLcB5dyzhQETGNsBZ7RbkssmnGxJrNEuNqKTg1sZzqfVZSDiqfkmes19VtGLqtr8CTcCVepSFL",
  "key17": "4grvc2BDRaeCxavL6MRWYLenTjoziTCmsq1n5pVraq7YEEJ59gBMFQ7YsYn9GJbxGrGpAdfFMe1TywyUYBYCF2cy",
  "key18": "4zyFyFPEv2hAFjzGRHkk25T6zzbAq4frie6viNgEnUv1d5WHr8qdrXV4pS1K2r5TwQLmH6k9A38fdd9qcUFEP38S",
  "key19": "2d4wFFRoUAELsHtNjP5h1jsxeGL35gt6Z8oNy6PNk9avh3VQsqS5J9xhLXcmVqTVo1WQQbCVpCMghaJd9AN7m3Ra",
  "key20": "23SDXzoFPMbzo58jyiFkRhKtnfVSb1zfhH6BqeTNejMzpSBV8D5swhAe3rRwawNWAfSNqxenAh6ZoAGeqb2CLzF8",
  "key21": "2EuTQBsayxqTSmjsheR1DmBhaQgLqKbGysZcPeuWf2UoHfaTL2jmkXF24WAJGSV5ZDGCFq99evsVwtHgLuBk43ia",
  "key22": "TQ3L7xEQUm5yFnsD5FPcJepfMk6UktpS5nY7FFrBXp2pCVsySmjoWHvxkBYNvEGatrkEb5NzkacqdKmbsBsLZKJ",
  "key23": "4VxdVLdtuQ7E2x2VBwJJSoHRCscMohYisXkihF5S53MWmmDwuz27H56gd6MRGfuNFgUq16sbsjHmjVxdYMY1onL9",
  "key24": "3kLfFEVrJqrzEP7VYPkonb8rUt3ZTpwdY2N89APGJQTmYJxEbWDjPu5fEfRRpBhKztQEnRD61fMCZUkugcn1hZXF",
  "key25": "56eyUiFgXaVYdsNH2U4r57mxeXPcJcg6TkXfXjjwdfYCyVCmMSPq8jPEAjXbySc8XbLTXZEiSc6YFVHNdnTMLSro",
  "key26": "B2CkKLARJ9B5XG8tofvLAJ95K7YMkEzNF3EDKkQdmBw5wWAFpX5GcBEuWs6pQf6dnMTA5xqLeFdpTsvGSdC5vNT",
  "key27": "2mZRRSwTcv7pm261nEELBMD6GTvM9Fiddkf26GuTeDnaCw9HjpER9dCs7mA4qVhVKJsr5W43TSornphjgbLxE4KZ",
  "key28": "4ksLChQJhLC6azd64qJCYR6w84vz7jB3e2dhHMQdswWuU49B8M76B8Trsq9oVDVhhw36edSiPSQ71W9o8eKMv2uk",
  "key29": "3ZCLZgtb5b1JhjCoxK2BTHQJxQJyP3koJF52PcxJg2Mn9kqAaFcMdVm8pXa9SeHQ7up52w5YdtAyw45wHmPqcb25",
  "key30": "5YYgxCpCvefTeikzR7UjzdS6L3orn2MerTU4MAQNVatA7qjvTxw5fkKBYnWXEiLx1Q62aBC9nm9m91Ex75pKsKx6",
  "key31": "d5EjNbPVZGv4M62xbjSDoHsjyKH1Uk1EZLdm8KxwnGy6pxsYW3dvJydJvjfqvouVeXrZbeibALVvTiYV56Qs743",
  "key32": "2sJFRPnTPjs9DtTpwsKZVZRLVyiHTQNcs9gLBFsYmUrrQH14GdHy26Nfq7XpSLdA7cTHxvEc79TV3r5yDMa3zHVw"
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
