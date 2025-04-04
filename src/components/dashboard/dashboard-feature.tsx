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
    "5sQSMHpatZejZErJNzXWYuNkQa3ASEVrWV2VpENDzWyZs3DwM42hHUwq9hBp9uKGwetmerJwEqsCQnQnpLCTtpHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qzSs6oMBm6JJMHVnDmjpQDjVtJkcrwfCTgi3AnabSBk46FR8N5nmJQKKFLV2yu8Jkbn9TUKg85gVjWMjy3xtKEe",
  "key1": "3G9THst1PFGHWBYJwPRr72hN9CMvUEYB86DNFXbsaEYm27D9iuKN7EEH5MGnfherbScnsYvNTuFtFcY1j2AazM2p",
  "key2": "Z32CVTXWYkYLDST573e3hvy2xgFrWDuUow4e7GMvkeRXM2idABa6JioJkyccegjE1K9ggsUp3pFBg2HmoprKZVP",
  "key3": "44Xrz6ADq6Fhz87zUmkK1Yr6sJ8uw7xLx2HYenyWfYxjGPNRHsQH73fytHGAtZcn21f7354LbA64GoiQpiFY3Tf1",
  "key4": "3WPEfNAgFTLxxN5oh6cE7vXLDfhKnKCg9qepmQqTVjXqDvuBVoGYNc8mezXDekxFsBromncFgzesGQJ5jjq9xewr",
  "key5": "4kxipJSBC2zKbmGTccHKMRDbSYaWsWkp2fQV5nUZbWPU4Jhcz2p6DqLXhYKKxCwujzEgLrn8VY9ECiia3PqTRhA6",
  "key6": "3ds3vVyExSgyiiy87jYKbGjhXJxeRXNXJrKgfcG6uP79YRQbsyvXSvUqC2hRHJ2j2K3wbmsPYWDNzDJhkVTcFruC",
  "key7": "3Xxg6b5KAFvpsAeKmE9riTLoPg1Vm3g3pqSMEPGdHiCiB2DCfdKbTAC4qvayFqYoi3Q1pacAzEHQGGjDLkbhckdF",
  "key8": "4P6yDeet5SFBektc8erKPAs6sTXM2X7N9mdejP5FgdXMEjdw53g8Z33Vz9SX6CHHseYrN9u8P391S5UKxGsy49bZ",
  "key9": "5AGmEcnjs1T6YCoyDVc4CZZENKkFnuJmtUsF9XDSQ2QiV1W9nJoUBkqM9mDeYVw7B84qNxyQnk5rrhEU6oMKggzg",
  "key10": "5Xqxg5F6anaCHidaTvnHWGvDN6ARTHLauisUV1CgsEB5TuxrsXhqKxCJKN7LcT4w6BB2zUxrvFixwc3ma8pGiVRS",
  "key11": "2zfWvLbo3oaB4T5mpZqv5tXWDL6egvsWUQhcfE9ccpyzSxdx5TYwk869d8xbZdXYd4hgT8yqeT9HdPmvzCLWKRqn",
  "key12": "4YSTrWRaXQ2wzbXk1NBdYCrcU39YHK1kijgwdeQN6PVntpiBtzhknj3vcCUw9NSP9p7LvqcFLqmi8Tf7mY4cpHsV",
  "key13": "3iatXDbvSR22rqDBhu8KtPkkuxkUuaxybw55EnpGZJisvcettqzsbMtXc95rKQARird8tbH7RJGwTVXXiAkgka7y",
  "key14": "2uow9pUBezirq69WB4wQv5wJHACAtv2gQdfjYyTG8KCm8He88LGZQsziqSX3aLqEPdWHZD6hpGXZfsAzzjhiSeCc",
  "key15": "5ozc5nTT4WRiPP4qk3Npukt6LceZQLAQPCa3wcKg6BkZTSdSCP4JeP13Dj2ehEnenWRr1zJUDw6V88pCjpdYqfUv",
  "key16": "29VNbBTckinM64rV8E2oxA64yi9eiyUkRyJ7NMmBGRmdWVz4CY79wviGrSeY1oCERsaxWgG53rL4assAzisZCBSP",
  "key17": "3h3Jx4Ce8czZicKugotLt4xbFtWYfP5Eb2cNFSDJVPE3VaCVFjqYHrASbmxdsLDSQsrV4odsqR6SDdVC2fAK2yEh",
  "key18": "4aQRpBxQvx1pbvE76XuefP1tTFzAzQpUyvZGtGACBgVw4MyDhG5VvSg34v1u44LiaXSeLVAzNj2xaqkDdeiFvHky",
  "key19": "2a1fQWwx81Fmfi6mkSK5noHfy47mXxK8szmBp6SU4S9R9okSHBXNHGVT5CkKQtqkmXfyJLAZBnm5mnBHzuoQSE4o",
  "key20": "3jXrRWGCwUUfrZhPbqN1u52eEnuPNeJf9VJ3bo1kP9LMThEQuNjDpAQecuG5pQPxusKtFzEGCXByaryxyywvCjZY",
  "key21": "2j4zN7tZaCXfhY7njb4kBRWcxcwHfc7vv2axCrTmj7iR7uX9ysJZdSpUyvXtzAWFCWY2dbR6otG6em1fYtHPvjbc",
  "key22": "666vfVxGkLBbc28nssPazAhMvFGALrYy9PaKAN9rihpPQdCvpg9PJ3jvgSpLB3LLipaqYW88ZachxVnckKxRBr8Y",
  "key23": "23j9xX7rUzERnqZchCz6NUvJtx3Z5oXoRHy2jVn7QUAKeJYkYoNEp8ad2BmVBh4pLBnRnLxTThZt2GSL4toW3Bh2",
  "key24": "8FU8mjHtpmEe1sV2cu1urZbL4KadweCfk14uf5SnF5WdKAgAUWuVYepXdGMfjnZTzbSxKRVJdgB6vCTPvpoWCtF",
  "key25": "52KZNUgPmX2m4zTwa7Bx8pVqVCzDPr29SE2xPP8dGp2BdMxfLUxkWrw2ES7jq9B6fu5HoP95JJmyfvujHsBGGK5W",
  "key26": "2E7HAw8PgturoPPM2TmMeHQCCpKqQ5n9hiNYgwJn7VZMdLarV37G8M7DsQkovSMhBxidXp6RxNhxx7TbKtuSGFjM",
  "key27": "3KRCZSnkJy53i3s7iyXN8KF3kgXhYzceqXx1gc7H8LWpumcjbfhZ44fviduLEPQVHsAu8ScF7Ay6PyWZhUC8WPac",
  "key28": "4wHh2LUDAVD1rnLFxLXkgGBLq5K2FWrCrqyqfjRiFGwv5T1Ctz4sVyPGr2RZBTPfLeDRay5sZ5L9CgR6WcuGGZNN",
  "key29": "2wr3Q73z3PqkFuUx7ZUEAZSYb9bt88qmaY3fgbq4NVawNwkrdX4g9fTnCf6ZLK2Ztm6VGhjtKN6E5BYrwGRRa72g",
  "key30": "T6XY9GfviHxMEp95pAZtRjviHEkHTHpkbrpaFKDTNZRvG1Ytr6LwRN541PXjZ49UibLschv1FnVku5quontcAUy",
  "key31": "2PhQWAmquvWbS3zDb6bQYLLRhk6TsXYbWbeR53b1acjrf3LDL2v2jYF2ESr7hSrwkRr98nkHvQGovgwyT7ggd2MG",
  "key32": "54phy7wWivweAN3vHRLroamFgYPEusTr7MdVJwxNtLDzUUnwKBDF6wEFAF5yG9gEL3HQmro5RF1ReMhy2oviGD3i",
  "key33": "4nBsF8icDoRCQzA7q2T6huR8gHwc2ZBzSfEqGDRQDZtRaTb572KSQK4fRMT5zFVDYxe8ujyJeRg1XB7BiFDJA6Cp",
  "key34": "4WggrSojY6XBmkKY9QGBtTrfku4z1V1sKyrv83ed5VDUGgQ1dKXgXoKbDRw9ftYV29faxcamHTvdrXFGf3VVJP4g",
  "key35": "5dMeCCs1JjVqeEVMGdqL8WQhdHjQoAywj9JakyctByRtuSVS2seTjhSNJ3wxTNs87yYrCFgEdYGiKeadCC7Rnn6M",
  "key36": "19uHCYC2hNcyVy44PKSiNhCxWEJBQ9pRCoUNHNEY1k8ge9eS8jDw5ASWvFfeVyNWoU43zNgwdyFp945gaV81k8h",
  "key37": "2prFLZxtpq2FvWUb9ieynHbMvVakocTeNB4d4wcZJXprv6n6LCt9EK7iid4S2qGzNagFwaiRLGACw241vXfrnj9R",
  "key38": "BcGUe3KpTyb4csEdKh1CJtqd6nZnmKrRtrWnAce95spUzYPDfUgxgvrKrFxAKJqoExmyujMHZucodpnQ6rhAqM9",
  "key39": "3m4BnmvYnd8ztB99P1jJMPBREVFN98ovG9xjWiFeBv69p6bryUguhvwNmPoFyMTPErtnboLF7sF1SpLs5hvgdrn3",
  "key40": "4GpbRVufrqpPDgUd4iUayg31tznGiBGGSaB4iQxiYYHF8HCiJa6PjRVfp572hEJp48Ss82mc2fxT4RTqAnz1EP88",
  "key41": "3vfdimrmDGxjEKghgCeJyfUtsVn9nQuWp2fe8ieVAygMWYk8R9T5kvstE8CtA5HvfaK4sqAeqLyLxUZeBWdZkEQH",
  "key42": "4iBeLULFkPgTtM8VbUHSdDL9c5f6EPByuEgGKjbPsHj4Kt47DP5vjoZrsqBg9Nn49Y7uZ32cfuJqyXZmgH2xdb4v",
  "key43": "4R9EEqGqegZ3Sbu6jBJjffi5W6RxLU4x2S54PPpwWWN1qQha4k3VfDVqxnocswmJsi7wqVvxKvwNfQbS2RzMiAbJ",
  "key44": "23D8JgvDLChqT8znmwHoJzhbbDdFjqTyFvEZT9ffwrgxMrYrF8smBUMwQGK2iLMDGuoWHgFRHPhzXihsqhYZBsb3"
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
