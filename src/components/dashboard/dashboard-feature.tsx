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
    "5FFN3qgY6H2xWAS5qGFr8MRdEynRkHLYXR7E57bQfGV63sgDTcfUgyxffv83ceWoxVjjs3UCFuTmqmS2P558bQ5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRTgWdvcV4gV2GcZsHuGVBo3BMNSzPZG34TAYG5NDZNoyxdofYhpTpfw4ohiu9oWJPhkqxV1bAYxwwQLiooXTww",
  "key1": "3QUf2YSWHevXYaZGyKSUDzo6Kt2FR2Bxp5RnwgDFKzCGfQBQScmQeVsn4NixXxYXNoJRJ3khwiRKzdE4B8Ria34N",
  "key2": "3UiGXSgyJZyAVzLafMHye8hYSs81d6on1CxDRoAm64dEjMmJ926edjZzahUX5VTZPXTc7upQtvdMbF4Wijdtigiq",
  "key3": "EQfxP8bwPuUBfQUbMafpqaAddbQRDwTNWNXBstXFYkQMcdMHskEt3thZbw3YbpkCXtpDjsa3d8LdpTSksUQCUbs",
  "key4": "2Pk7YKqY53QDJ7Pss8Dw5B9vaG8HhoRg7D2U4NQWVAwXVAu5cLNpc6Gp46sEsiNeyWKVmNSpH5TfDgkWPjgc52aB",
  "key5": "2BXFiQHY2gX6pG7q93XxtF91TYN7YCr6hAfEXtQmf48UKzwemeNxiswy1UpkgefnG7JUqrQL7fYp5eWFCWMMLgfB",
  "key6": "g6k1UzjymP9zzoFFsPsK5Hr2Xd5fg9n7ckvnR4Gs5PE6YQzQs3c6cN452JaUQVYeA1JH2KQLEdhNtRUfTJPXwr8",
  "key7": "3zMNiRs8XVSLHk8VsfJspxk94jHegobu2YkF8i3B299Y2mPGpKjZPKvrspAZEpxLKFduSxakDiWmbaodQfxPTSoj",
  "key8": "4kYD97BhRnP4rp6hY3dVQR44PvtgfBQRLDFtZmwzB7cMtimwMxX2LGLAS6hVMBXaairYMLe5E8qebZhEaFjgKVae",
  "key9": "3rMx8NXWyw5Vz1yHygbUagEhRB7ikNKsevLTZ4CPtWHgh5VnysJVGVcaRZnK4633ZP3dK1ohNKwNGzEnLSAwETvj",
  "key10": "5MmoZXKFYmr3ceRGarMKE5CPMh4p6JBryb4QJ5kJgdcVHnjXu7nAxxqzhW6Mr9CC31eoobvy8XPbhthta8JDA2Qv",
  "key11": "4WfjTs6x2pgrFrG7mwrmJhaCcUKfGpHKoNHZ9eY38cN2CaPoXYoNNK5Pt5eLbyr2ABS6j1Aw3Hwun59eyX187cFp",
  "key12": "GqxY3NFhk9ayFrNifHSczvJNVkKSm1u9opQxMmKEY8JpEdb21GDpbKMU8M2g3mcDz9TQ9pJ4NW69f3WPnSf2EjE",
  "key13": "32edixPRWRkDLNDMaEZNsY2LnNeKdkzyt4NimMfgTJ5tNLUwzq4dgAA1vdDrUMExx8ekFArmjnGuHV4dmoo6sT9j",
  "key14": "49N7n54oRZjgGiNQUh4unBcWMkU3tG4TWxtprU5mX8NmeE4ehrqrwyVM8QZoEZdHZS3kS1QaWYVRXjdzkJbMUPyk",
  "key15": "4N3rCZDXAVPGKDR7UFGJYxank6ahcLmRiPDvuQi6jVFGkEv85YgpsiUk8vXNkPHRDTaKxyCBui1EtiawbbypwAJG",
  "key16": "4CQduAT886HdYSgi9QPrDAvGPojnNTXHBpzfcc4GiPn6uFbn4QeHMnhjEsWDkcCu9cjsY7KyQyWc4naTYjZT4Z94",
  "key17": "5h8p8SMow5A7jB5CJmG1pTcLsCmRjr4EHRo57KLqRo75Y9cxZFvwCVpPPLQx1GABTnMcViDAeUvWb9moDpB7RSGc",
  "key18": "4sG7SwHfnqEB9FkJtpf24nJL4EYocK3ZYWfhAhcmowCUR7VPR2f4sj6mZWSktK3nZDsBE3Lp3utEZqyYwZtVwNJ6",
  "key19": "5J4s8HLdn5f8tnZEEdUHM4bwsYndibTnmTzQLUBMRq4Rjx6iJi3ZyacFAdyaE3cba3HA3dGFqWwoYeVxpRnqLyU5",
  "key20": "3DEtREUfSZSMfR7pvBpqHbmHqL24kuZjJ4bLuKDQDcP49JRUz7ayob6qCjCTfa6wJuAhgsgbqcNGYfjSPUTWsbf2",
  "key21": "3p5ehrGFXZnEphtG8TWBWyTFaxCrFrX7zsAQjvcRomYQyUPsL2s1CZkdwSV4znUM1eD4u5u5maNDd9SKoyWd8CZ2",
  "key22": "4p2Jnyac5i4ZQAMFUcG2K8wCFMNH4Y6A1QPxz4DhpLQ3Es8nNzah7f2uvhofExiSa2fkTeuKoy8WA9ERBR6gZdP5",
  "key23": "5nLHx3fyU2TDtZx3ZvzptaMJHKho8nmtmRmRH8kLXMvxXAhzwmSUvdFD6xZWb9CkzHFrp1apaAZ8k66AfpDMJB1G",
  "key24": "3oCytjFFdgppkhTYKfY4eDwR2fbNs9xm4D2Kfrh7PKDwdJVQ3Cz1uxBdkT96CSeDrNQY5TySGQ2eq8fiQD3pu8Ap",
  "key25": "QN2vtLXwvnPWQ9rMqb9yWne9KW24P4HsEMucgqA9bFvfMjhdJH9cyRijs8zAEP5EFKRM8452frZammt2Dk7Rski",
  "key26": "5WkgxGsxm5Hsj2UNZo4sgVTee4sokWCmCmd2Eicyue9T9ajm56Mkd9jvyC3tgknoNdsdJDcWkKM2FVjQHdJTCeco",
  "key27": "5TTSXciDB4Nfdbn62dW12eBjEQEcFtG6Rde5emgRrPbb2NkGnJgxBnnrVWYANMNvVcwGMnJEtFhaKZLrUFBZ9Eui",
  "key28": "34av4yoj1i7XgD3b1Ja5KPwe9Q4DZFCvfFbT4qhsPZz1epcpn3qQwhZr5Tdn7Y6BRpegWtmPDG2HLtZebAZDNBVE",
  "key29": "2C9Pxcov8tUtvjsrJ75CDhneK9P7tbRxxvNinMuno6EwRfaW8ViV6DLs4hxLn6LwdKEv6gxPVCyRQjz2xcYnrSFB",
  "key30": "3jUJctbS3cVQnQgy3D1Z2puWm8qKMGTgS5oEwWLADMGiN9Ltj5Ckt67MUp8M9diiiTs6L244LAPpRh4zeb22CGFo",
  "key31": "3zcdGS6xvWYdbETdRVWZBkHgJJgZKVhTqXGTw6eFLFWBZk7SvdvxwD9GN5hax7XspEZuDXhsUtrsqeHspAZN1K1z"
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
