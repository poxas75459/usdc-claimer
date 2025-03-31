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
    "p4whMs8gfakEa32fpkTF6EHWNfe8g1293ZZ9dekXRPApXArckXHBCRbFQzAmD27NwZcNA2zW3gaVv9bxpp1esqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmUQm5o1kT5UkGRpy9M4vFnqWKDtrRr1StfDVrxTHYvNQFaveP2gyQdauxwaNtBYKc6A5AKrcwyLY8yMvFQfzYH",
  "key1": "5rusoTDabWJwJRyVp9grGXbL2Qrbca1khuq3yBoKQBirkT9KiJZibEjFThMEhzjm3LTmgjgrmL2cJqe22Kqzqa4h",
  "key2": "4SQQRkjZYMBJeEwAMFeRHJbWvKiHeuKUoa6aMjZASTB3zjoUJVj374RqqDr3WeodjzdKmCrHp4FuGBhszQzYiX4J",
  "key3": "4UyEn1kDTu5GhhqnCujesLsfb5ESggoEanLLKGgVbNRKxZSeEtH8qBKf1tjDeA4pQ5Ue7R81ZuDq6CpJPZDwnXbW",
  "key4": "4NUmhK91Da23bpT2Fd1uqo2Egk8MoqqQfKDnn8zH8cvqC9kFpyCSeieNMaEhz8nBFvwvks4KWe5fZsgcx8TL14sU",
  "key5": "3PeLj1wtD6ZA3xNYP9yjq3gWw1iQFa6kuEsLJss6ynHjzsvB5BArqRz9iGzCDjY8jouRmigs3k2fYunM4jNpRXqp",
  "key6": "J74xG6ht56JCntH1vRLLjnMcDtb9XavS5E2SQbRXCM7e49YsPw5FNqVK31DeussN9j3oLvk1jbrz2CtxvmMnBnV",
  "key7": "5AiijKK2MwiUXMtV68zTisytSWueKNzdZyfrZmFaECugfYPK1GNf5HMNBQnqXhL5TwTHAgZG5pSGstdQ95cmfgcM",
  "key8": "62sHNLYQYx4e7bSFaTTMy17oX6ovtgkjDyoLEWcSfibq65qJAxLY931tKc99NeAyFJoSbBrSsQmwhMS5RNc9j7BX",
  "key9": "2rxjiyVNp7HCcxpmjmPnh5hHAbUB4nWAuEqgBiq7BRkAuiWkzt4A4hMhrNv5ZJjUapBxi25D8n7vGLFjEMZh6Rx6",
  "key10": "39tRHdtjDZ36DYqJeFqAUAgB7vSHv9tee43Uw47aAbbLeQnpdvJ7xtESPAptxbVyugBAjSrwg49ujvtf99Dq6MCM",
  "key11": "45kaKr2w91Dw464sdKVmzuuuvXXFsDkNVNo8LGevqJS5podyFpWXFPuQi4aDGcDW9LnzKq7QQxnSYuEF1vfoFq3r",
  "key12": "4qjhbqziau17T3GRfRQCmRXzm59cJQ7VkKbNyysVGXWoVeYZyMUsary4XKm93ec6uEueV6TfRi2i7V7RBAELHov9",
  "key13": "1rSTgZ3XxUui6GrkUg7b1ASz8VqtkaBsrtGT35XxTp17h2HGyBi9STVbqGzh5qVLSXVzuHvxPFVKZCs9yRq2iSS",
  "key14": "672mDNKrAAamRkkN2MKhFigKUKBSE7Vt8yBbghVBwB3YqpqhnddVxfgTLs319Dx8r4aC32qbjLCo5HxSVWnArdjZ",
  "key15": "63bFEMC1W8BAo4GqNRXSU8jdrYAQLFHjK8ofq7rwwAd2pB1eEyEmVyDKLkEb3R258qZ4zfTxBzG6a2ho82Z65nrG",
  "key16": "3BbXgzoMTLnnw4WjytqyEsUvst6NincUDNygeU4mQi3PMiDnXBPF6XuLL3qhXPCK27uujF6B1XzknysYCTs6EXCr",
  "key17": "xhXWHDgyikUKoLFRSPeFhqKsrEsFaMPhqegwRJ58ysoW2iEuVTntSCqQwGh7C5yfMx7kub2os5rViKnFeBg9b2C",
  "key18": "2eZ4CGSgLpfnfsZ6QqGM9sB5mCxGcpxXYbNX7RM8JjBEAjgKWBQxBQhAheqEQMYLg2jBpSUHuSK5rAQX3hZAbDxV",
  "key19": "2zshdkAZT8P9cnwMxK59AD88pnngmSeQCsrHBYzoRZXTCHgbm3uBGEwgAfEq6uSKKQduC39wyGnrHdsXbiysYFFu",
  "key20": "4tvTGUHQs1LmPzrVTutLyqrdLkYJZMePvEnHJc6tixkNkukfRctVuqmYYj8xda7CTrc5DjtsbrGn5gwdqdaC6Gag",
  "key21": "57DF4ZTJ5mnyYrY9jMRmqFYdReG3iR9DW5yHeWnXRnTvhXAECs372xHE4oSUWFf2mpYLaDH8KEB7CsHMJS4DdBBk",
  "key22": "5DbHetur4hrMdzC5yZAWiwzG264eHmr7JrBsHKevcck9UGoUy7X5r1wMu36m85nbRCtU26CybSc3YtSFAyejmdmk",
  "key23": "4JTDRRHmDRtuEqzYgXzQyneQLHaUH5EWaFMZsvzBmSw8H2mYNNLRYLwr12RwUJrQQgJztpEQZKyk3ehQMc7PjiQ5",
  "key24": "5Qf7KrqVUJRCE7Jsq4PtxyGAudxydGwL9PXRSFm6GLhvm3M3ud4nD243oFHBa9PGvTkH6peHAf4oDHEdngC5ZVnV",
  "key25": "4AAiyDdPGtG65LabQUHhbrNUcnfxnMWcjjwqcT8AyD75pNgXiD28iRkaoET5shAqq7gR5yE89Wsc6ehBw7VEhP86",
  "key26": "39Hpx3rYJKLTpTfCC6risd4VXQZ5V3jaD9ScRbP4cQh8axZy7SGBpF2tW86221m7amguhZqVvrhgtqCsDB6SwdLU",
  "key27": "5YpgRBQFykBVzPWPDQ26c2XhWRahTdMVzWFSgWZQdp1rwQNt9V1z7ZrkgivniiJhmaECjbQhk8fkVHQkSY9h9evY",
  "key28": "3wqgdBSeSUbrGD1R3wJ3jHyM5b8FL5yJA7QdU4c2jr9B1tiyvG7cLWD2JUnDiDFAQmrjidG6iZfgt8HQKeygBH86",
  "key29": "iQD4huvPpte9qCqEHV1Pqecz6bvEDi5Z1x4XPh67i8xfLzixtokWkk8oZ1pCDXueBtbLxHM7u3eijj2SU2Uybq5",
  "key30": "5eYG7AAvoyiWpSyJ6Rfk4srKDi6cH3G4cTbcEEwccVkYK2Z7m3usGo7v7hcvjp23qoadUSE47aZGcpbbPY3ZaRaE",
  "key31": "5cgTFjEkwKHfo59CSHtaeT87qa6kHJVj2Vde45jkLpGpF5iB35r6wjMJj8HRLg1U8Ypkm7XHb1PJfzXf17QF1VEZ",
  "key32": "3iFqWZoAN8zoMqSVPRydGis3Mk31hWozqxf1GdgiiVF9gkC91TufvQDg28tcas3Q4KgCyQZLuum3d8Z5uCy9fgfb",
  "key33": "31qzzgwVPLWfnP9bAntJ6JYpDxwEiMxBQZ97BajsMTY7BpaaK5iTeymAhNekszYCUtqpEQ5SNgnxJe5yZci9R8rq",
  "key34": "2KdNRtyDLsraz42oJp5iTuVSemyvQRhJzDwSe9VUwR5DZo4fPdGCFA3Q7GCGabNTuPDj5Mpn5SCbjaSkC5bh6vhF",
  "key35": "nYoKMNeo8wRWge82yZSwsUPAsMpVhzmy3VuTM1Ac3SDkRyeyW2eraZnsEVageeToMZ9uuuVKxkFMHy9tbhoAneQ",
  "key36": "2Vpr8pnchDAmAT15pzVDP7DxHFNJVCwYCV8hCXnkhMtNB9BjP22yoqf7Eys97sXxRMwGG44j9E4FU9PJMvcbccrJ",
  "key37": "4FKmqPhRzwqsFFe8WwfCQE4cQyEKBvDcT4NLkD2Hw5LaUMegXNvsYePm8qfXaw1utENY5sasifFJz75pYNL8u3FB",
  "key38": "5GrvxHeCLf4yaEb6dPcb7FAbeSDiLkNguG3FMsMP9NpPo6KCRRHu4YeL9vpYMMVZZ4HNgiPayPLgFHwcj64B3apa",
  "key39": "5bBXT1UVAcutscdpfq48pu3ELJRdAs5UUbVU1SBfhPZWPvL59wBVZnxiXxbKKWV9QLyUbwS9AdLo64K4braU7cUm",
  "key40": "2ZdyNEws8hY7y82TXVHfA4ca1prAsJdMeR8ZvsuTxq6BWZMRPaYcQB1zMH1vKjUWzWJoREv3pPEqtFhzMBkLyE6j",
  "key41": "3hfSjnfHe5H3JawbPpgabjJy7Def3xY3zHZRzNb1AG3i3cFRyupsg8nuf4EoyXULixHQfWF9UiHCmhtEAkuKTewS",
  "key42": "59MAV3EQyEPzTkbMBjNNH5Ye5vqwT9GnuRH7YLhrsw6BenYDtqYRBYvyBKo2xT4z9DxNexu9o3MvUVaboZjySCQV",
  "key43": "J9Bev6ksPeiAv4XihH42Wvk6f9FWggKB81yiArr1Tt1V8S59eWRsCStLRR9QRJxDoy3JQq58s1Qsg8qHaGvVJb4",
  "key44": "5jPDgRu1JRUDYWu9RGui8SLnK5WoqNo9oAtBoUV7ZhuNKejmgvybc6CfdfzX7NFCAbNJU1eN8FhDiWUvfpDThM8z"
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
