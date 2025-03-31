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
    "4HFnR5EDVKyVRa8y8vhLxdTxJfEbGtKP9ZamRaF3noF596UL2ZRD97WUBMjc3VQJ5ctaimSqpJXiX55998CCy1ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akzCjVuGXq472jnKGQ1sxuiWdCDL6y535q2jf5wsv2owXb1XSajd9YWDhbtupxjcbpE9nz8SP1RMEi9Sbcra2TN",
  "key1": "3crEmmJTvWKpzGRNJNSP38yBXr5cwkDdswfKpUP3KWLSkLzTrk1Tj4tWAFVaRpvABkDWYjZBKZkMx6RR3i6E5kG3",
  "key2": "2hYDSZyZCxaPCiWQo6aRoVsk7dwzhGZY6MCSDq25JJQnUtNmatTBiWVQhZTWhr1h9qur872uoS4Rfy7qCGwPbbgN",
  "key3": "2Su7jBddDd2JSxKNDphjX6jVPRkUUffJCEjfhy472jgZHdVkNpbmWJrLoVM3E53LdcVBT5G2D6VMboCHwqAmeVZP",
  "key4": "5YRJ4Bzz5BP7kCnwfqmgGMLBVWSr9vxfYYNGJyNvPiFU5aS7j3LoFG1pvYhkzctvtVKAWa8m6aDiTKrX3j68cYZn",
  "key5": "5UksB9deZLztnR6exDiXzZSAPCXx7pPjQF335JkqsMMFjLaitd8TUDTMrnHyyzUMKE4wQid78XyBBFAYm9FBT5Qy",
  "key6": "wteVMSs5b73KMnAXoMutqPG4s1DcVskpwSXKN1wTiZhxTDJNy3M5tdpSu3QdfYAFAgdksf48CySCknNywS9zhSU",
  "key7": "5BETFcobv59JTQEUdAJN346Jvd76JTQboqTcs6vHMTzRk8brd85FdgRSLpPuNxhXhM75sP77ToadHgTyVcRMuVSP",
  "key8": "2k52ncGYpsaDrRU72TqZNueGMTUZZNefMpB4mRH4frwAs66WXH1s4T3ZfmtwRNRJ3LzCyiHrGcppqv9k59W3cpDM",
  "key9": "GBbtcRKH6q5hgPH2suKc8KVtkzN9X9v63QGfqYLnAS1AepnyhTXfdKdCzZqeyYenPqLDkYWqL34JyNM3CBGtFoU",
  "key10": "EJfcdkGdq4GZrMDprAMtMJRPuFiBoSxsbavvZ97dsyQooTmQgdAiBPEZoTWvmNH3aZBUdEYxg8B5gcRJ9KaCqH2",
  "key11": "2ptSDmjjwvxZg9DZW7q4KMSgMBVW1yyTxWMHzKFXjif99miKVhhLa2UNHJ1pFKEEGFRitwkZ3whBPGFf5C15vNYB",
  "key12": "4dBKd9rqf3JKpW7RHPWjay3t7MFgZnXWk7VApEfuTm9JBRueA2ZwkT3N6ATk1XwmpNVEGE7AaX3o6RK6mrxEZfwt",
  "key13": "58bVuyddrsPRbwNR1KYxmjooBM17BeAVM5GUwxph3WkAVY2U571z4MD1qmhJwNVgEnvQEALsJYFQXhnFrgXTyE3Y",
  "key14": "4g2prBWaLe2r8Vs8ewXvKasEJiKDq7SsVf2gKbokkBphxGyTSomz8WHfnjmU1dQYULDUE64JR6JdzqMTg6EFt5fy",
  "key15": "25ug7c5WnQZHjHkPR98NKewuDEdBz1wQoDckL86GfhHR1QFciHNZh3wiJV3KX8r5X6FSNfsCw581GGTZSwFKGW5S",
  "key16": "XCudLLzz8kNjAufJk26z4tgPrML94SEMBMEKJAaihyKR1fErXBuXArcS1RsL8ZdHQ13j1Hs1WWTRoqMfYBje11E",
  "key17": "5wrVuF3oWBbeGKLTVeF5PSzqVukPp9qETWYwtRs6AmZBwtqF5FLqoQqDwEymFbvb8juchrsradFrG9tFLiECKJSZ",
  "key18": "zozJp89SMiwAMDuMHDeg9BFMBbnzqpML3CGMHRU7318efQsVENNoHNZqbjVpf5MHyBURi7tr6e8Jn9uTeSSjw9Y",
  "key19": "rNZUhVijqbgPXDvd5YGHggtz9BwNpy7pozq4PC3VjqyeejrbE4Ji74ziu22srpFZv9nMLcnqpTfLMBy6eyLKoYc",
  "key20": "5dVjWTvGW7i86EdUxEwv4ssgka8U98x8HiWAjWN1RKwqRcbGYCZALg1aPmg7Exh1aP3vooshnYt9BK1Y1VNX929i",
  "key21": "3qJdnTYHgFHYy1iJ7F3NGj795YZoDYAFz561gJqn4g3Yfyj2z226faxSxKr1V3NeXTvXU6xsu8eKj3afviAsqRUS",
  "key22": "SgYrQvYhYaQh7ok7VNwgzazMSUv49LMebhjuybhKGtjkMuA615HXDggmPBatnPar5dTFBv3PjbsRf6n6qEcXA88",
  "key23": "4s67ZitEnBpFVMztbmeSquAs5GMgqZ49FEM82oMKWgkpNVv8sz7398SWo86mCZdmMzDfjtunaeBU4eb7L7oxMNjk",
  "key24": "4CLrH466szhxYE3RGV6LQPCjqcumAMP6rEYVngHr5ohxKm1gxnpmBa6UfSGXEZfkjhacnM6aZWb6PYpvPNf1Rn3J",
  "key25": "33do67NyK1wWBVb32kqa9Zyr2fFU3KWFjsYATqP2dDYsRfEMHKkwpx9usuU6583WwV5auVL2qcoqDrF17N8m4rtR",
  "key26": "2T6vQ8hfx6qTUygvxdLmEmsYyVZxgXFfJhkRjxh2deXTtmRi9Pp6gipvj5oNJZxytPQybkxSgzUgAymj77pptsK3",
  "key27": "2RFCrefZuxVNnG85vEP1b9Fv3hpWpu5v3uLSJZvCatX2h8HME6cPk2EyovCRtZpEKDUM5wjv8sFbMp7KyrK8m7d2",
  "key28": "5qGDGgXk8kxsvQ88q2enXWSmSnJncCrPwdqPg9G278X4wycmcaCnZNbCqDXLPwpxhyZJ5LrLTS7PRLqNVUYWYbwN",
  "key29": "TUsAVeQvrySd3dFiTEmsQfCYqD2Wmbhth7LhyhWY6tPN4EvYhn3nkVxa9biXCt9g7KdiqcbWenp8W6VMFNeY69w",
  "key30": "2ZSWLQYTjYLjxepPTvZwMUwPNKRdFB73qDtAebCrgpoYLbGdv7rZRBihTDR8Jiqh94WNnz4hHMUFXktezFe7CJMM",
  "key31": "yZTV3buJaWLnt3fEH2QsyrwsJow9zNvJgFr59UTzg735k7ypeQwSrogA6DTw38FRTfDpGU5hVSGe9heixGG44ks",
  "key32": "4bsezh6RhdDa3W3eF5NfcAvGN3yLfnjTr7QYDtg3NPGyEHkFNkBgeB33bddF2KRJSWoJ3mAkCyAtYMcoekBWFRye",
  "key33": "3KfM8X8WhxE2SUzi2tLBxLTMbTqyr84iwjowi91HW2e6jrgABG61UmSU3vKRonDW475eysZgpnv31SXST8LDKap8",
  "key34": "3SjPuRHd1ayU3dbNiEzqqYE77eWoFToWerwMB6AwYA8WFKPp149DZMNz3WvWK5tqTt7dLyFBhQTvcHPouQWqwDM5",
  "key35": "58KE1rNtzViCC79GWFR6by15wb9wkYSFKnwv4ZwshCKdQeHSFV7TA4XDRFYUEKVnheuMz8HAjLkm8udAup9YhfgQ",
  "key36": "5y4uDegNpn77abqDg7Ge93XLWQSkUWV9SYFbPxMV4gKkFprHLVm3Qnv64a4ADuLef6GPLk5R1hH4Sw3es8ymLX1o"
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
