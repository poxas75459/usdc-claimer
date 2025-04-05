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
    "3sUYsW3cdFnYBGDwZjH5QfRw5wSHpVvDcUm3gmhmR1QTG6hJBYcp1uagEhmjm9secYNTjEyuAwam2oCzUYkXREKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LkaenUZerxx4EtDzSeP4jCEeXvkf7YpNnuxWaXWVmkYufHNyouLMMqrqjAxQFa9MQwhW5ocVoHk1xdhtqzpDCTk",
  "key1": "2mnoDn1eow881jzQD81E9KDN5TUq8hP15duuBvoVHGAvw3vkpem4Hxjhnff5csSR1ErfLo73QtLbJesbt3BwXQhc",
  "key2": "4iw8fjt2WvLVmhyHXWSnjdnaGR9hMkjgZj2c85fG4CYd83RHxkbyqgDtTFAGkeMTzJNSX1qhng1kLbqaPkRqS4uP",
  "key3": "2QogFfVMG5SWWZbM8JknAkZ8wfSKR9GWSqXNKFAFA7PdKT5r15e5uYXbCoGNdPhLE8XX7ebjdDAu7Cda5RDDeeow",
  "key4": "4zi2nt6yVwsz8tzj3ZrZ6AP8YwV9SaDMgvCDUtdYdPJEowv7hAzEmiX8FRPQqY81nB6rS8RnN6Cjmyh7zhfug3Dg",
  "key5": "2njFTHhbRjwjBi758BMWDtGZ1zEzTGWfeJFDEuvcv7xHTrZBxBj4MdfSYWXtPkH6t5kZEuMPnF12nDgZRpyqA2gu",
  "key6": "2SvTnNRJfgkK8tYS2K2nMtiYzcqPQ8koJgFF9enAbpGaZRrfQVyx39ntJyfHobKF7vT6jXJxfj4NMnu5YBPuqk4D",
  "key7": "4FBagmFkWggv4CReErTqumxf25ngrGqKzWQYjYMMiHH4DAXuTn9Aw4m8obxMVJYQKgLt6r6aMiiG1vqF5SfutUs2",
  "key8": "3NZwf4YymyhHCjovcAjBmERodEZvRwfvsGAE4AYD8KFtYjtPJr4d9UxCaaymoC2bZMDX2zL7YdFagc3Cofa7eRvJ",
  "key9": "5c77h6tRPLSdWx5yWRuuRbQXrTAvxnqd8n65xavYYwWrhZnswaFvXZoCUW8xviPp31EKP56Y2s5fnQSQgsWDSR5w",
  "key10": "2euwYgiqGFSpRWq7VNBCZZxPgbNYqfj8HnKUja4QGY416jDCuuGnwwxCTJqS456y5BNKmsF2zzPRJaydBTK8cbzv",
  "key11": "4ktYySfk2B1ibWG35Lt2aZrdfDSLWPiB5785Jid7udpASt5JpJC9fhkQeX9294CfoTAdtzqbsAdzFKz92n5T5ZWW",
  "key12": "2ss28Z3pEypsB1P8GooEDxZ7FHCErq2o367Wu88QPoDhcXjdkFKqhh5d45YijqAqV4JcHSdzRtrp7q9dwXcRHS4G",
  "key13": "2ppdduxunSW3SmuSxdZesLFhyYhEitT75296Sxgw9wHuMC51uefpc47WoXhamGQvZgfQsDDpYHuQi7eBkTJ5ipXU",
  "key14": "5GAaHy8nsyMPCtFhhDaFxkEBmNQvNAVPBc1gRviRCVNsahdZgFoK2GGK4rMM25yRGpf5a5PTDe3i14bjiYPTw2j4",
  "key15": "2iZkCUJo5kbWUnLPw1SHbdv1uxT6oLFsW3BxzmEeL5kn5CvfeVSriy922gT5wEXZy35Bebs3Ts6xx3ropDJJMDWq",
  "key16": "21xQYTXtx87aH1jr2txVS8TD3oW2gYwe86xFKz7VgT8zeE5yT9gQboesWC48TfmqbX4awwedmnhTFbXYAf82Cqw4",
  "key17": "4ieupyC9c9mWBrtRrZh3vjTndxBBETkJBz2cqd9KnU9pGkWDMMH8zz3kDcW4wLxF4KjoTQyeh4G87mHuoGX77Vbq",
  "key18": "3eVQcMJtumPpqUGUWDgEsj6aWNnYWMMma7fnmk7KxSyk82uAKQXnHzq3JtmHLm1zULhYALj22gozchNwPxNqqiXq",
  "key19": "39PVyNiWtmBWeSpwnqhGTKDjkqwPfTx5jdDhS7r1o7z83Eo8SE9gyWWKnRMA9ocsoze9WoV6ZagtcTcZbibxkDe4",
  "key20": "5TNgWGWx9RTqUFx8GBKrWgXX1xe1BYVCptnaNNHyLeikKvkHbHU9hxhAYv8RFgfuei1dZWSzrN6UPkiFfQGpgT4Z",
  "key21": "5tB3XjBX7EhP3LVY6tMtwTi2GHdRGWcEFHicVok3D6hYqxn6R6iiyd91uJU86ydjHpVyGsVWYXCvMGzFCHtD5F5u",
  "key22": "3tmig7XsDoizZaVi4GonaVsVLNc6EbnjTHNUt8tkdKcy9f6XhMvv1N5gx4NZ4NfeTjSwcGR5rcxXWmpERh3HgQXJ",
  "key23": "3fNaPY1ePnfCoUMsQ9zZUG41sFGbScM36eiFGWLiP555xyhRFFRskPgskLGv55tPyQaNvpM99gFHvidoJBQUDBby",
  "key24": "2XLWd1ye7RSLwKJq2qBZpvckjvRH1dW9ohBkr55xrZQVpExLYCV5w639WNrMFKAqwjKeYn78vXuuqz15rjLsFaaP",
  "key25": "4j3AoamKi1ezZJ5PEBt9zcWRg2aCAxYmTmVtoRo3hHWXtbmCdmPp5WVX8fqxUAC6vJ3RufpZWa1diekJHnaF2Qr2",
  "key26": "3DZBVcaJk5BeAFCncSNDnBJh7q42EYEfsNMDRBo7vtxrpswDRGVZVaGsTwNPJW4nMPpQsi1GRrif9CrLTBvnhVJL",
  "key27": "58dnVk4TD9A33xasqR4JqyDsK6DULwskw5JwJhgfrrsSuSfSNHmEwWs2bPN8aPc77vFDgGADUz8qysGqmJ9GT92f",
  "key28": "5ohHa9Lb55fAxoo1fxiFeGNAWd9oaiDDr5j6giv8xMhBG8ic8Kn1wTJ4nPyLsdDJTCcLj6aM86e6WvYikRLuq7kh",
  "key29": "3DjaFvawA1hiYbwLgK4LoYTZZ5AK4f4vRn7bXrtuqMjT2RTLGju2H4hMN3NfzHwgsaJTYCwbR2UvRzB92XUCcnws",
  "key30": "4yFktpwjCQQ5h6AJpBaw9boSrKmhDJb2jiRs49c3pNM5EvxLL4363BXvwnVo21ofoEPjQNzfh8WDxWGSVE8L8dqj",
  "key31": "3JwLbpK5KJgHtuabrko1KsX7gdYh3KG7wZKSWhQvZHvfbdtFXMtGxVaqNUZzS3keLbYWuBRtYAQLfRWzKy8oX8vS",
  "key32": "46DucgZa8Lmt9a3bh39D1ez3wCEG9L7bro1wPNoXdwFNmdVuKG7zJqhroNGwhWRUsfGJC7BenzcQBA3wAYaJRM18",
  "key33": "4wUma6D22HKecw89m8EydwJuUYMaPDisxRnPpcQzAma2qZ78ewHKjfJpw2xCZzUTBK9YdFHuNqThkqxmPmfGuYQ5",
  "key34": "2JBwLTsiv1swqorhZWw4WzSPFQGhk2E29WmUko9fFD8mCNAkkihZkSULiKnVzD75gScV6zCsaUc2eghGV8q3gZuY",
  "key35": "5xhDtf15eEY1Qbr2eqexzmWufY8z5d8dFJzvhgsVjGmd2FetT5vZ8mV6wvri7drcPbWBHShweiMMpyHDrWjj8zsT",
  "key36": "easncrLNPuH9FhtZHSf842nK422Cy6NPbFqrmNT8UsuaSnkhFjT5u2ronA11t2M7fTbe6eZvyGdtusiqNMU8cXM",
  "key37": "rMMg98b8Nz2MZpeswH4hfuXT8uVc8QL8qnRsNtVPD8hUtnvjuK5u6ejyjS5ioNBCCHq86PbaZet7oJSeQfxT913",
  "key38": "2pinE16oqBnmcVeu5GF13g7VQiGhpeFkNTKrHtfDvZHjx1FbvmQMkqy23dNHg231KLBQKMfad72RxrZd6XRC7nas",
  "key39": "3FccyzxD87fHg97yAXWTLWnK8QtX5pN9xP3exu4u3L2YpYA78drVvCsEMc6y1iUpGosSPVDXceebRHEeqoBdm9k6",
  "key40": "4LQh3dfhsxfKdD4quZtGRHLytRM2tyiGAceTAzHEVKB8r3b55vcdXsApBe4jTQUon2pLC33V4Wuuz68kHNWSKPtQ",
  "key41": "4HfSf5v1zLdUiJghMqtFGaSGXG7dvZnHPJQvnKXaK96bB5e8dkqD7VCPFw1Wtvnmx61W4G4q2vKKvJYFU9ijTEEN",
  "key42": "VYMypwCVL8Eiu1kQLMXkaGDGAnGFWYvucDzdm3w8GgFSHYSLuVNTH2ukAP7fwDa9tVv3BLQWJa8bNz192zJFmTf",
  "key43": "42PTiWHmNrRWRcQ3mpqDCTacKYM4bsPY95ouWYAK7GEApqgCYcWnNbBBvWB27sDjHeP3v7b1FVzmEBbyeHVd5Tzs",
  "key44": "3pgeuC3hMNDhTX7GXSMDBpPYyxpB2aTg26g71mCK28LRnAJA3HGpN9g1hvWWKJaJrhK1oiuBjwD9J1Vu1QC1kFXo",
  "key45": "3h31ZALv53QhTfHLtNPWWPd716kNkKoCNawjw3eXHFfiLFLKLjF68P58u4rgyoizUS5uHbhtGyPry7Qutnv753ug",
  "key46": "Fbyr6UwiCfiDz3FS4vsgGUc1B4CNb5qNuwrL4b39mnf7QtLH8AWb3hqugGcUVJDPaWz8pWdHFvovDD5NpaK56rF",
  "key47": "Jd1LuzJtc7ekBCPs1gmupESEqVe9LQYEd5yLbrX8Lq1rMnJ2bULzCXM9vvXvivMxGAjmSkmDnj2azY7KN5bYH3w",
  "key48": "5oFvWudbX77GyXZHA3ffosyquywShCUXH5vm2QQNnjH7h7yWBzcFwaTT3RguqBoJP2Am5eygHi3vJW6jkf3FnFTr",
  "key49": "ez1ToAuyGQNUpFKDs6SaNeoU8zbD4X23N2KErN5qvo3ZmQsofcGJaE3ozBiTqq9zfGdwrJQHMCJcV33AjPuLD3q"
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
