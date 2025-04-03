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
    "j9tyC53zqzEzTwCEPGuLiPcsTj5y3jBXHD3u46djK1QgmE4WGZNtG2Rc5t7S17DuJ8f6idvS5trTs5Veucijd18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2trnDKcmrwm2YwUMMhWPABuRYytWxen8sT2qmzYSroHZzHBLrH1XRndjjjVSAApo2oeHixSReqgDnZgBkEMQqs6T",
  "key1": "2oDwHfypoCvciFv1bMYjR5ir6nLuio6Gm739o6bTHBAxcbET5vuMqTdeSBR3yv8FD5tGwYZcNyYTBX69ts4MWUUo",
  "key2": "4xr7tpp9FjFhUjnxkYNHXKr6UL3C9bgA5X3EVmPPEHX8k5ApS14MtVT49JG625jb4HXEEKqsq9f25PJ7WephSqUy",
  "key3": "RdWSJdgXzfAL4fbxxygg6DCp1rwahzvGVS4egnH4h2SNrBF2K4SDHyqBEZGvT6TNhZAarV76F4jhFa8s7njqStH",
  "key4": "2dWhDyXXew9UiKYb6FReh4kiemTAKV2vZG2Fk6mjvypmZdJ4urjcPJPHDeyFnRekADbYw38pcoseHFZmurq5awfg",
  "key5": "BvPBU8hspTx7ubqVAvRpEYsC5Vwucfk7Sxx4iucFqeAWzudseJS1dkqnhKRdXkRMYaQZf4Lk7SDLnohxWy2h5zC",
  "key6": "2X6teAydAYqbCti1XD7iVq7uyh6gWPpseadbpqxfpo9DdKD3bQgK5aqsqD3bL3E3u5jNKbzSTCYXwWoe5kycNHVW",
  "key7": "2enCizNLdhXoVA3HjCwWsdVqaABnGcokjbQKqGhYKgUiVh5t5gojU2BLZK5bAYbsZ6wiXKeR5AwPEnUJ8S1nhyDp",
  "key8": "4rbedtWSjoNDys7V8MxWeWK2cjUB8rMhEK8NVurmwQP7SBuUWyL6Ad9K5YpcZpTQSk2yPwRosPR8hLdkXK2r2RJM",
  "key9": "BroWtPgKvH76k1K3F9QanKjZjJrcKuVjjKvTqtFUm1sbT23s2PJuufX78RnLKeNW7czXSk4WzmJ2vBTJDstTPeY",
  "key10": "5jDoaVnCxaBfpLJrSjj8YbH58G45ictNV62xkU6bmiT8fa9nrLtyowSr4Q94m5wUX17VAp9uPPDtYV2NzXC2d7c6",
  "key11": "5G6fXtTu7B2rSB9ANPFCa7B5H9e5D766PtFYk9V8DehvzRXLuhi5KuYmKLcxDNmdsC1nGnkLLafj7x3hVbDpHaUB",
  "key12": "5KPueDDQPZqBYyHbqpCbsNR3AGJNWgGCEmj7fbGuwmVmsyoZrTyobZTwTcnsDq68GmwsiFxMV64tnQgiu7xVJjKH",
  "key13": "5U7pPBaBd9qq19JdvxP1zgsmn2G1FeLeaq8Ex67i5J1vf29NkYXRok7gFAqt31V8nN3moo5TCmpP324DEDS3psBf",
  "key14": "5E9BCq6ZUcFE4YMNWgngLUCafgGeR9HC3Ur861khaViR8Ec5qtfDwx752uVsJZDQFdVxUGekkiQSrithohWD7dqD",
  "key15": "MjFpmZ8wLrsHiiWozozj9cpk8ds6EtKCJDW6Mh9NtRYQ6zRbEC7q98L69K65JkWTRT4RDXxcHJA1pDods3ojUj8",
  "key16": "nzcnvHr4yuKdGGXAuJBxfGAnDXDoLrf5bgkz27Vc6UfkciYEy177CBJAZineQVvRoTYbeSVCe69q4Hb98zgH2B6",
  "key17": "3WrJG2mq9e1BrzTTNFeroDbwJ2vrmgtcKbLPtkcQ9TW8Mhm2SRAB42u5JAuX1BYREgh3gYJmsQ5TKhjjgCFRypm",
  "key18": "279wvz3VRd4unSc6o5rTpQs15rZVmdqZPAGpSbtvHVaRHmvszUxZhxURqtVhk3CWPtgdCXbcGMQ5ANghRmXXY8Rp",
  "key19": "5yTNwX4vuCbcwnuRHZsYJMFsVQ4QQRLCE2d6wCx6RY467R3pUVkydLMJcsiY2nyKS4bGiCortgrcEtngrD4tzcEe",
  "key20": "2M8Los4e7tSy1kVy6qf2bJzqpuNF1QpdB7BrqQ5jSaWsiaxHe2E7B7DvhaEwTdBA9mVKFUiC87DbaCiLt8JxWwMr",
  "key21": "4EbwnDcDbGvD4oTTXJjX5nqapuUrYBWc1FXPn54XrbemktpTXKdSX7FNAniZBF64UwYidhK895k5RZyHNbMEdFob",
  "key22": "59uC8x43mgzuEEm37RSMAZ7waqTQxxjRfbVzUWD35qxBpurYahTE7XddKoCTZaVzJocf6Fm1zoZHJECSvUZCGgom",
  "key23": "42GpBd3r9fHmPtEQu9vWwQYZ7pXAyrhXBKY3QutMs9hpEhKwoQf3RGVLPL2Mjxuf3dyErpP631xMV2zy1ZNcJAYB",
  "key24": "5WKELWYFwCc2zpnTohxnrKCF2bDbCSd3oMUd1vs2oCCGiMh7jifTzDnk79ZAxPSCXsemi9uzcTz71N16Q9QJV6as",
  "key25": "21yBh2fkUsm4tLCbvbQbbgmhQKs6WekYK1jqmgi5ECpdLCxLGHwaKuHwhdwMQKtP6ghU4TLyG1iZyG3z2kqADLNh",
  "key26": "3xa1mW24yGCK9F4id8fdpex413gb59Ycake4hrdcPP9uXkRFTPP2WmiqxEsJHByCXNt4hQahEG6UjcfoPn5xS67T",
  "key27": "53StKKcTwb7uH6BiMVMDj9FYgWY8FdUbVrtDqvYoJUu7RktwyvAzfdRA6GbGKhbJcMxtJhNDpH8aAJi6grkq7qYY",
  "key28": "3e78dm6DvJ5XAfPqRQHoFC8F7Wd3DVUJH3nrYtNs5vuUQguD2Gsh3SZYbTCaYkf5LcNBX2qqbDRhD9bvLSpd3jKQ",
  "key29": "4QDfnm5MPRVbEsbTaMWvpm1qAqMvPgY88y4fpZ99E41uGMy8kzzpwPSv2e2HYRebUL7esmV5PYovAoSbhpV3hDqS",
  "key30": "63HAu49WSPqk1HZn1E62dr7hpdTcHxsgvW5CRtvmCE9zx9Audr1owsaRLoLMXfV1VJNBwEpxc6MyJUkptsMYAM7g",
  "key31": "3vhGzd3CPzR2PZtAMnds6FzipihHVgezbaXzGkHb1SPEisQm5Jq8ttCoENLjCBxBvUHSSMyVM1DqNH91RKCY37LG",
  "key32": "2oFm91rUKHbcg1xkTzXKVmhqaR7oRpK5qpEzernX9vNeAgszRMZZrfVvkYvQwixC2sW26i2oaPzyA97tWkKBYpJ",
  "key33": "654Dbqq6fMACzoRguzD873D822b1MRGaknnm9UCxh5za1NDTm8ntZaXHBs6GJTrafufFzyxwRZbkLD25d8nArF4b",
  "key34": "34rEobHSezQxUBt2GcNJ2t5rGTGgiJZyvk29WjNw88RvNvepJVdz119S4M5NSZAB7L7yNebCqPP6Sa5kmM7t38Si",
  "key35": "r95p3mbY7JoEbVWdf2mDQbL22pBYdZopWoFyB3WQzXMfWNMpmgjWWgAJDQLj9eP4pcuFupX6JE7ccM4RShuvtPA",
  "key36": "2gawaBZ1vKS31ppmY8bWQTxXQTqH7cNmXB2tvsEgmiMMJvoXCxjKtJsdroi3JwyXogDmtvqcb2GNgxRBSS3WgjU3",
  "key37": "3uapKbGhdHSZ9bY7qvGKm8X9ANxQ7eptHy7sE6kKS3D28eq49rVi3cVxmTL8CJVoRLUEsw2N8cN9Lmw2usHCtq6M",
  "key38": "germYY3HxhbxSyNZKdvGMsnpmsBRbgDEYdQ4BhzEYwnyN7Lt4ewEWyhihyZGfbxzv3UZuftkLbhk347EkUGEXfc",
  "key39": "4hQYkrdnUyXXesumW4CCssYWEz45wiMwWg37ET7edhkfwvp69eMQWQ4i2eoG8TDCRhPMCo9UCfSiQmMYVsjqaXqi",
  "key40": "pD7vbYpKAm6q8hosHn7iZSUCYHtqYxXkYPNfJ7Tz2uuVpRnnf1A9vJ3MG4Q4kAySzSQKhsqtHd8ePoepgTma9QU",
  "key41": "61ExsoYdjaWqPtVbQeDvSbKouEQRVmiuDgaSi9RnVPt26vZ9RnQQZiqx6pkPQqDF9zHhKQirkGDRq2XgvvV9xaoV",
  "key42": "4whnKo97Xdw7dkZL5ZfX5N275vnX2VtFNNrvmvr4WcT8TQaPfKud8je9ZhnWCRLKWCkHCtEp6z735bivr386c1h1",
  "key43": "5wUov1fm2h5hecDDphUZdUuApYxnK4Csknnfa35VTeT8WV6qqswahLdEx5wjhCKFbymEFvYWyLgyNKmpLhnsBjxs",
  "key44": "555XZKPLVuM38XTfBNp6TZyetzUjTTPQiPt4LsmAnuaqA37ekqSPTRb8KX1Ejk3uWCKXVd6498s6oDdqUk8jNKiu",
  "key45": "dgJXobpfHQqhQ4LtQeApA25vRZozyavGniQiVcZXdQZcNU5Bxu5hPR8JzznhQqb8pHSqEYPPXkkH34Ci2hLvU4c",
  "key46": "3wxCLKuTqRTbng3xMRapuKL1piKCEerq82NzaC1T3tNJtjBhQoZ6m2tJnYN75Q6LbA9rTRVr9PdoQS7RHFZLvUjR",
  "key47": "2fkkjqeaCNorZrg4vupbwBud7dGnJrs3ux2TwmU2YPGPcmCY8XmYR8vu8qDXo2ZP4EuhNmuHJf1n1eoPbZt3cn7u",
  "key48": "2YxeyDpChZz39gK589dRS5VnDSctQvgBqd3ppHv9JpGdZb81vCwmve58LaF3fAgT3yk8ZCYAMsXSpEBWy6UD2A1s",
  "key49": "2qJiCmiC2g5xXr62KSYZZvGM1YGwXdCnoxS5jW2SqVUX4KBUDJsuhtRkUQPiiWdqrKNSJftE5NwB5HJu5FhhbJUx"
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
