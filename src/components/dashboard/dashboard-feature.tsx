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
    "5qNSTtSk8SuLk5KDxogSGUGyEiFTCruxVBRP6p89Pm3AooJ5h63pDQf1YTNiagJZCvXZCXNXekjPyMVUdtjrihY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGau8ZCe88Dq5QL4sW3DEZq9ybJu9MKTFFYzYzh967trYMoQuVmHbvnQz8qrcHTTG8K48CppoiM2e56TUDecVF5",
  "key1": "4GiP3MECCpAAtrSycmMN4r6Sr84cfDgrEjepHie5dNSxQAXGc1CuH2T3YxyFB5i7pKzCFCC48No8zrijyiFLg2kb",
  "key2": "65DE5kdyL585rMBKd9KA5iK9CzERYhQcCgnxR8DiA7WuaXwxWbmhXcTvTModcaXpFdRq1jo6RtC5PGHrETqZgzyz",
  "key3": "5moLQoBM3bVkioxwMzruG9bmSwhhizQWvSn17HXAZUS21vbX2iNtqCyKE38RMTkA73KJz6AoLMVvvZRjvQfYc4UH",
  "key4": "672aAnHw2e7cyiFUFSy2qNkCFHQHEEe2RtXy8y9RDg36TwFDox8UdtJwN3xfD2eL89Hw7Heei1YyQ4ufX4ScNMHE",
  "key5": "54wYPGWM3mvgLaEDN9QSujE3w6qM93jv7j8AkMcbBJP5w4fYn5QHbpGLMxTwxuRCHCTKXakU1RrE2SaSuBG4YJZG",
  "key6": "3RmPNtzJFZuqtuQSnAoQ9PBLiu3dMAvZM7VPhaNYYvETXXvDzjmdYBzyU8we1Aqpy2XmXqJNr7J6DM3222owbWWN",
  "key7": "3DZeWjdTxSSbxgT6QCdKkRueWg7GGzf7wyGcDRzEuD9vhdC7YsbwwmcJdUdYTxgF7pehZ76HivhtRUfmL5bP9BJn",
  "key8": "5bP9JDtfLQmZXNErbPuaZ4Bou9Y4cikXLjYMVZKReBGdZG2L7eeHiv5U3BX7V57T8oyHTvebMcqHfN92Fvac5ENG",
  "key9": "3cpuxsC9JuuqFe5sWCY2wowLmgzoYM7uD7HZjYrEbHcCkqQ1pYV6mggUD7LcjKdw7FysefmUEDDgQQYVhPvcATPr",
  "key10": "jYBaF6tFWJVFe9cRycSrM1P6yBtE7ZjSoa2ftYmEcvs7LWjjrqzo4tp4Bc5vvSmykEuetxCKd1yQkBXxfiqLGdL",
  "key11": "X4F5CtkRjuCSfXX4nG44p5BLta3fAJSx8zSnftV5pSxeLgshi9PR6cyhzYZS3dEEfjw9G3VBvweErDeaC26trrU",
  "key12": "5a5BRwnGZzjHo1K8tTAGLu8a3WsFeYg1qs2WvtPXJTZbNqRBY3RBnSGFvRi6GmHcLpG56dWgU1ExqVRDhWq9m2KM",
  "key13": "2K9kKTGGmwzFob4YgbvX39buefJw2WWUDh9UrQjhEo24Bt51W3RGVezoMEKjopVds1CUaNFEjnvQ3p6SVbg8uKyY",
  "key14": "5EMWroUrJXJHUX46kkm1EEZFeActihHBmPcMTV2HGUji8FgiUfSndeqjdi4JBYktcADJSVqKHkV4iHY8sW2LnAt5",
  "key15": "5wkVkggsr7kjnTUFF15cjYHGQ23xHJWH9Dqtwm6SneZMdB9mAFHjwjjAuNp3aMYvkLTrENBoceJkdsp5gPEk5bcy",
  "key16": "5JFF6u3suQ9ddLpGSs4fyjZDHBHAHpf5TNyRuTWpSZHPm3y3Jkxhf6vobeNHp2wgLwj2NvPwjpyX1yGNAwuHnVBJ",
  "key17": "4gZuCef4hexyEsbqW6oWZokrnCHug45MuxWEwNMSxvcSARpgEhJvm1eSuFs2BkcMduEvknUpUCqeeEo1uUGSYZtL",
  "key18": "4kokqWAGuZsouTjn7PKijqjEmNGnwMDP5KGVnYqBZ1153ezfhRt4e1MpssWLVyHZbEaZ7VqS2ri1BMHduPR5btno",
  "key19": "2F5hYUVttAX3sY5gUEb541C7ojtdo8w2Cgn8SfX2C1sbzNsRs7WXLi3328v6MYzbmMdBnq6tzaDDWuz9GT2D2zr7",
  "key20": "3ZgPVzsA12C2sG9x1waR7DotfhUvk2mXfzK4oi28qM6xeFjh2BTaUQGAC5VCFAKFuQEjibAarmDgKE6Uq1HUHw2w",
  "key21": "USDw8Ze1sg86ghgQANRCoDEYFTbbFuzy5c2oeSC4j1A1xHgmFd4smbAa8pUxXyDpFi4KyGiy2CWcWW9UjYPXawQ",
  "key22": "9TEtVg4x1pNDmhRfGwSzJEDXvS87Hs1YNT9tpeDR4Qxyc69WetKn1r1LJVbj7gqa6or4q47oPVecRbpke7UScmV",
  "key23": "67QaKB2G5hmrrHry5uA4zQFMjxiJ48FCturgV34YUApaonxVVY5SkKirMhEJURGRhZWefEYJNshDjSqPhPcvckjU",
  "key24": "25puRVmaC4CfpwhxgdLjCRBAh2NpVB5GedjEnf4ngVrAFcZoHBoAL5MXikqFiy7xesVH6hLJT3jQyGwdatMCzZvz",
  "key25": "4j6VszgC8iFeXSsdKhGDbRtN7rSnh8bEuHwGD1Ke9RmwnhicG8Kc3gRVay5KYryox9C4fECynTDh6UvpSXhUWRT",
  "key26": "66ky2j4KZk2EWYVWwPQy6pSvUM5R66524BaJXS6j13w2iygtobt6tqYqsEq1YP2SQB56TwcbHKGgqPzZ8oLUjbJa",
  "key27": "4QPfsmH9awXKYxvFYqKdkPXtSxi3jc7Hc3yruvHogC5Sz6f8hsmQdN8HpuWF2WnAzfsR2XFBsoejRHd4KLfc9AQW",
  "key28": "2AmNor2VwMWogKzgb6ohCoSWZ1eVrPhz6X9dLDLtoMrz2YSQZHuK49QWP1ptUqZxiq4CjdwPPKdGTyLuGhRnQzyM",
  "key29": "55vqtiZpyzSzQ2RvSSHRxXuoz3DDJKEcgNBS861AAiJYFgVdFYGgwd2SjjmCRRUkXPm1s9mmTex1hT983L71WAo1",
  "key30": "2ETe21VLXpZ6f7eM386WMTAJcurY8cnY82znYfocgckmWPMN6zdpCuFFENQxe9rWmxoJZD8Pn8WvZww5y6GGxFHv",
  "key31": "4MK5EhGiURk2eeyDdt7xmmVFJ7M54Zt2D5RdcxqAVeisKPR3tcuTGKJEqDEHv15WFndQrYydeiKNUsPvDVbrvsBS",
  "key32": "4Gcit4ptnFgv2gWikkv9QmZbnRrbP59NYWaqC5SwjM8CMb5xmZ6XC99axD3BjE5wSMUvcvry15ynMs8Lu6GNwSWU",
  "key33": "5rJymaLguKxBGCswZq7kwrzxuyFnziVNGWjK3E4GRxPVTESk5v4bAWyawL372ggJdvmk7vvwZySvyadAi8nnrPnA",
  "key34": "3bzSLhyoYWEZwFMVKSk3qEGM9yxpMWr2rrPyp1NEAznoo8JwvXVUi3Lg6Zr2s7T16UKS1kkNFsbJPtwwAsQKskQU",
  "key35": "4jkriPhsrU9p4XuRd4pwAxZi3XZKviaVS6D2n4HMCnX7gzWwqZqfDTdJgGJGbZkiBYqpVo5AXM75HkqaUt5hWBPH",
  "key36": "2ByPDUMgPYmo3QmeW4Hfd6T7fi9aFUBMVQpm6vvtf5heQcib5SNp8a2uqZsUs6V3Rm9d6HsF3hUQFnj2K8aSbjpM",
  "key37": "5JW2hEZpkS1q2rZKhCVPxhdhf8yjShsBPjpftyjBULpj4JqV5rYZJDcMNe4zNy5LcC33qRuw22Pmk6HzwG1EgEhq",
  "key38": "44FrERcS4v7DmVQ1h3b94Gh8YdxRrgoSLhUXfoSLUtXcXDnuvW7XtK2yT1oLdbLwWf2hifu6AuQJR2xgt4v28TaQ",
  "key39": "5sNcn8xyAy7zq6aPQjPNDR3yp3VdyNQhHb6KKEifY7nEhWXGjm5VbtDwHkYXN8hrMNiP4CpX87sSSb3EDQSVLmde",
  "key40": "vqvuBck6TturqUQ5R8ejFHBMgXzLwaj36fdWpXXND5AF95xY2kAUwGcDivZoZakyS2qBJFDgGtSqnH5r1SyWaF5",
  "key41": "4a1PznR4fQEfyrmQGYAxN3Nq7JcXjZkivxzcqAvA4fvd3hrcBcNHZXnCuKuukywPjQCQsvPkxmZgwWW684wNt688",
  "key42": "2uHFbwr8urQ1o65RaTVh9Z7VA1tuNHfWd9MnBTcgutSAqLkbu3pBVR82pzxtfaCtj5YPd5AJ6nuWjCvrpYtn5rja",
  "key43": "29RphexZtPcHKGfNFJneCkvecygKKhpFFQdn7VAHvs8h89qDrcBAejEh6UKFzpb2iu6n6ga5YPiF8EjYFEU7q3Yu"
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
