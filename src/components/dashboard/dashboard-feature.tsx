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
    "24B8WajC3x11xuRACJjshhJVWrkPgYAmcuEEr28YfFK4qNGfN7mYeJmFNr9M1UGjxXGuSZNo3YirM5MgAWt86v6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LffQoj8VTG1dEXwBiP1cLx1ZwLZsusoaGWvMCcj3TFuTzUDnDfv4YP1QLoLbN8i4GXCoRdyvSZVuKT9GG9QpYrt",
  "key1": "4dMnH9GbvgFkgEnv4doDa5mdWyUQnuvmCaQENoDvYStH17bNevXXAHVcmCam3bY7mAnY3jsbeJMuJvCgQFZC8yWG",
  "key2": "hiPqy9jwHMuDtgrqb2s9WYoVHU8yzd8qHNFsLehfevqDQXp77F2KC7Xuq3KMySfHf2nBTnjXx8Hf1SqzfwTZ95Q",
  "key3": "3ETxCrbr8Pw5pGoWyrBnEopS3E7jzgkUUvxzeuYBvM7Lv3qjxRBPg4vznXD1a1ExuzkX34LP1BKsxewTHidt6BWw",
  "key4": "3Xh112Utg3RCeBy2biMRWBEmeRYoPn7zWT4nw1P5rjTFaBpz1As2VLQJ8sdHmX8RFFnttGf5q7aGVFKB3fBGKpP6",
  "key5": "5EjtSdy1phnnyypEdX6kg1kt6djKeCNMBQRRTY7uzKkzH1fTR4YV14joRThxNMByLw22NGxMdu43o9X8j4jzNj8Q",
  "key6": "4xeFZ3KF2sp4D1kTg234LnqGAGKDy596GdpPPSxNWDGbE246RUSvsVEwXWAQFEN9QWcW3UEskTcxsrxY36B8oDAg",
  "key7": "dLa8dAZYPsPBJzCZVKQgeDvA9wLDHV1ymSaZPSpnjHoe6fwrPexRrtCTd2wLzQK231xoavqkDxemeRxacF7x12Q",
  "key8": "55Jeq7orbC9btUw1nCzgantNiModhrW9r8uAfvDd39CTJC9kHZwnsBSpCF5Hu2HWkLbN7c3xq3wkSCNV9SSQVidd",
  "key9": "4peqkfHUpgYaGpJNin77Rgsw1Mv7b2beNXH7nTd2mt7udAM41sp41q8EYVFL374m4qdGGPg5FGpMBj5oej6cxk7p",
  "key10": "2Z9w8Nd4cY1aEkG8NtZ3dEuwCHLWJDeZ6G1rQPWb2zNbz29ZV8no6DQ5BCUFRGqLm9isZ93Pw8CcTNxd7fDj6uDf",
  "key11": "2DzsXiMrD6PojN2U3T9QeuWCe4yjtWFnvDmUb72BVZ4sRuFLh4sRhZJ7UkEpSFXUf4XRjaEwS5nsQ2FvtajU7cJi",
  "key12": "rhnigBgjcgztTyrJP29MjR3eC2uTUVw7S8Mt8UHQCX7uEqTEEw5TjQEpRJrdLYgUoZoykEwehe5VPvRJtHygV5q",
  "key13": "3QGSCKPq4q7ZRcs6vVyEq5WauaXH4RVLa7ncoojH8VENGnyzk2dcbM8V9Dt869Ecihpkk7A1PAjA5QNjDYgojkg8",
  "key14": "H58F9XmDigUkEp5yBbAZX4PJuC3YN7cyjE2jLx5VuKkp1bjd3FeXVr8JBSsWY4pETz9UFuLGbCwQvzNn6A926MD",
  "key15": "2juwfsyv3PGFxLD1Tr9SCjgZM629txCEd4cJWbGa4FrX9a5vLTGYDUdwhHRgmNVRasdRMn22CGxHcZUUJRRg1HP9",
  "key16": "4gksoSfR27GrAFVQUsGMG9x3rtTxpntoFv9sti5Xyf4Aq1S8av8DMUStiyh2geUSnKw1YDFkxqrTAjyUvqmDrWTu",
  "key17": "4zeMrgdNi3tRv3Sv5wqchqRa1YhEBTeatGNoS7LeSNBE7CBwB8ha2x3X8Up9X7uHHS1XPvn8NRxktcjMWfeJXS5d",
  "key18": "z9vCBzNpY4HtQK21a76hbAJuhQwJhqqYaEXiceFKgbe7RckUrpnSiJnVGjnv8cgT7csJjwweNCqVfuYVTLnxyKe",
  "key19": "2aWdFexvmvmyxY6KGC76RjrPqsAMUdvFkzpLetpvQUYqFa2jE3BKsaKBsPfesvmpkKinHknsqVHbBeRwiXEgxxa3",
  "key20": "2xNsgP1hf9meR36FZpB1VAKN9BmdPvY77ZDpr8FGm7YzwSUT6iRC7cfcx4Cp98kfgMYNiRft1vi5arYk5h1BNtzE",
  "key21": "3uzSHnjaHT1UCAbMxdKpqBGYvqQbup8aJQN42BFDYfofdRo56JmWj69cGYWEd2eHwhC1fHj9T6X2f38RqQySV6Pp",
  "key22": "3qCvXgwYSdAAVpNdniqVXmacrJJAuDL13QiwV7n9sjQbzDCWr9fr3vjdv7DMopD2CYDWiLhKLjKTJwBM1jWBfpk3",
  "key23": "4WW9UpFs62oLfrUkKqAGQPcg2z5v8ZUWLnmjRUewPHTNZ6zHitRSTZMczf7qHnZ4UbDCyCEGdWUj5cdyhrbWXK1T",
  "key24": "LwqcTfJX5nFe6M6ARoYqeYgiHpF949qJ4vTygNxXTPh8z6Lh4EmExoUkvSEgN1T64i5bb8hXGr9TQMaH6jMir5j",
  "key25": "2dGh95c8FhNi1hpMMnuVJQN7UJEUqqW3NFZcE8bpAURAsWJho94Ti2PffpbyURZa6qKe7weCCFbNrphFbEMB543c",
  "key26": "2M86FZNXFia2qxLHvbhgSb6HB1qqTw5fTU7G3ReojDfxix6Xd342x8HEK8UKwAULJdX4E6RdEJC6jiYrKZrE18CK",
  "key27": "2v6KHVyCEthFR57EuH5ZTYdYEQJaAGakEmg9nEWeriv5bKCXgFbeXfNjhipSotTa9jnko17KbRCRSeAXs8b4Jw5A",
  "key28": "4uMY8PH71uJdiKTqC4iiS79efnyivdsGo4aC4YF6sM7ZUWmWSZ63KSWhrToKCjpQo3JRDZNcaWkfgpZxh5LxHuFq",
  "key29": "3kQL7QU15nKPnxi56Fku8M4BUM678qsbiKrWrYiSsm3Kxz8zLjUfJnAKRSF372Gowh4AqTSpwqkjQpfVem65dXb4",
  "key30": "pqyCyE73FRR28srURP2XKmP2y2vF1S6egS9zvgZeipwfPuFKXUmPxhmpXuauRvJYaQetKHA3iWhk7U4XRpWBoqP",
  "key31": "5ATUYdum8CQGfhWLQmuGz6HUHei8er1g816wSCmrXQk5arkJK4idSH9rP6Qc1gYZCTF7KMXjKJHyP2ssRpBapMCH",
  "key32": "ohu9NenUPDRKpaa7TT7Py9emP8EiSEiVCiRMrZyRLf7Xf2co9WFGHbFx46uBkbRkZ4owAAkBbY14fPEWDhNRsHq",
  "key33": "63srKWRqsgFc7SSRxM9r1skH3c8ugumutf8wsZZWLibadfXh69JoiUk1KLrr8HZmQF3rRCPbvuTUT4vBm92ydwJQ",
  "key34": "FBPXhbre7qWXXr9KjCvNLaPb1ZKbmJ7S9fT7iRtZ7UAtASWwXqb4jpGxuUEifLgJBiqaF4jviMt1rno2HwbUCef",
  "key35": "3LNuDjaD6GqbeGfpbk4rzzoZVwMrsKYUJjrv2uo8Ada7dhYCguoVmuGhVoe22RyNB58rWVZGntk8bmNyU8GMLw6y",
  "key36": "3AQDfWd9cdidEwXzcmRdzKqi6Ke5qm9rSfKkEHxR5fGFfdhWzpoivZQYvM4Y9AriEFpoXFu1JKRG7r6mZP9vgBQ",
  "key37": "5prkRLM23nGMrwabVk23Zf5Pw26UAS5WPFkMiF47cbk7zFSodNEF2Rbk9N8m2vmJzZNmz6Kue8Bh5dekvpMexuW3",
  "key38": "4jQYHQpaf9MJP9zM7V4yXi5VqWUYnsZiNrJSePpkRR1Wjss78JAnKnuNFqXuEYD14H9jH1A2pu9iF8tGhHEgo7cy",
  "key39": "jUSNWeAhyvuCrd7s8FKPvU1R8ZaHi3WaNugEnxhTzXgLmfAWwvhwfJgJnBH8NcsEEPiXYhxP3cXLzAeYcYbuyeB",
  "key40": "3zHgFUSE6VydqHi7V4VYquNP4D7GfzCMgfdqg8LV7cnyfqxzJiZmRf5pXsJbWufyU2giAbvHWv7E91bGfdT4TUyy",
  "key41": "4Fj5Smny315437ML65oRCVpBD6jMqFuzs4jPgzFeBaNKQPTi4GXFj9wFqjcEtMJdKaV3FsMtnZZ8uL7nWouY1a7c",
  "key42": "29uBApxL4tT4JY2sHhggRhgKDnGSHAdbH113WumkgE1cavCgcQhnkCnMHVhPuTfzDomtdZGkxaSUgkTPCejd7g6Y",
  "key43": "235w23kM1SHvc8Zs5mUQLtexVo3oVT87qLVnQJP4Zisx8sxFx87vytAYL8jLVwNYinCLGJprY53heAZhyhC97s9s",
  "key44": "2FcYtjPwZXFE69ZVipao3dkZihhdGe1C1uiNYGztYP89VpxogUqhrHjfum2MDnuMrYZM84tYxeusxdWpm8n6KTbq",
  "key45": "4VnKo26kt6mRbigZvGyWmmcd2ou7kaUPw4zR3SNss8nNFbau9EwruapMGidvrCLXrBiWc5AkVL1gfYKzvs5ZKQ43",
  "key46": "2Aksg1TginWfQt78wMTSWkLeLk1mGcvhCHBD4An9JDKNdReifHANFDLqhX5DtjgECuBJXFshsew1c3vghUFPKZ1G"
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
