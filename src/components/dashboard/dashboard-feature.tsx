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
    "wQqgr2rtZrYSF7ha47xBSwpPrxcTeQb4EDe3QBkR9C7tHSiEQmjvqrvACNfdQekXJQwhkAwGobRW3JXtPkXWCvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4voZZf87UmbTXQDhEQxsFKX4bA2g2tu4sepocmUMzGtJDghoCjjxQGRQa1R1xF1LSrB5mm7sGdG1TysrYAPxKo28",
  "key1": "62fdtHbvbNbR21uAYXayCHSF1iUfL3DzacwWn65Kt7Y2gY27m5C5VsFTe6izWbXTMfMdPajTzJST39TMULC2fhrs",
  "key2": "29rNASMWAioWzcR45KGcsA4A82S4EsJQ5UrD7r6AEnLKsZsfShvJTzGmhqgccSqwxhbf3nQwSPngBmcBpyUKMogN",
  "key3": "kCEhUhrvtd9Wakqq9JzxzXSMRKaKqjTENoP3QtdsLsH7cHk1hWjvSJjMVDDsAQyopMknYdcJcJ3Pa2sAia8xUUv",
  "key4": "2oa3cqwHyHBZdoV2AmZFGWL9vr5goxGsWCsjuTyxYbEpTh36JEBUUzHVsjK1tomkvNT1it1fTghp2a9B9Ua6YNjp",
  "key5": "2FdaTTEMPuwoMpop4pRykaXdoaHhUcAcHSy6xBh5uu2A1qJmADpYTm8pw4wRtNSotNG1jixhKoLsx26qcVknTuK3",
  "key6": "2iBFVMoi7vPD7UUysUkbgDfMkfj9QoAhq6AV3qtppMxFpTtJ6VRBqqFmPZsK5QUX6WUbknxCyGhuMPF9HQe8nB7a",
  "key7": "2VFgWjiK7qBMebPtyuRWHxrQVFsrJvyNBXszr5FKm17f5SkExAZBwzXrfhvTYSodoDvTTC3DR2aK2kADuYmrQgNa",
  "key8": "5RdiYPrdnvqLoxSM7fB159Q48mvq6LvPCRfgaEDKPrWV3vBysGxHCoheptJwPzkvvkNd7u9qvvPiF43sr4QXtUiM",
  "key9": "63ufAT9rWmQQUsCcxHSDDq3mrxAjsU8oXPvQ2guauTx2UvPAkrFpEr63h3rjQiSxckZESv4CVsUT7tV24o6geFWe",
  "key10": "3cbBzoSnruJem6dx43cYE9Xf6c24hm6VjUN9Mk74ZHFVji2oF6yF6761XgY4B5bmbEqZ6E2DKFr9qjG2btkytSB8",
  "key11": "4MNVhrtESueerZ2KYbGtLNZxPGptQphuVkWVNQ4yQzn8bCsTqnsRnoWtRsADGevHQsCv3bcsFMovjQ2br2DTtXGk",
  "key12": "YJegng24vAhZMWZUXUmdhZoT6qrjqfS6wR4KEuaEfqwair3YMp2aoYuEBw6hKCSBcP4GLnJBkfep8DRueoasDqt",
  "key13": "59vCBmbLS1AFxVTYiKkWZZopjCYusTHrgQaGY7VUUedfPv33n3So6hikA6Tkw9VaNaGvarVyvcbY48xPGump5qzG",
  "key14": "4ngXfjcLBGENQtFyYeyprFK3hTyMdzxet6J3Rv5JHNXtiDvu2e7pH7KyVE82GnTksb7ThuTGsQc4G1Y4egR8pBwt",
  "key15": "67ZFNmoUDDVcHzTorW1mLPMWHwdTjFQutTxhAZuti2TTmjLSak2cPTSehHAp9yKELBDFmS3dWFH75MGVRB8Y9ApC",
  "key16": "55Rv9g51iAytA1FE8DpGEMjufZDneAg4qrjfHFFAXFYvFrFBoeHFcA26m6s7mvPHvDxnY6oSP1pEvxRrCiBf7qMi",
  "key17": "5u6EtKYPhBRrhmb5koWSNcZ3mtkhPDFJS3QVnWErShGSZd5A2jZXVXb9Fpr73d34SV4FMPfp1NQCDD7xgbNjeiwn",
  "key18": "pNQ4LoF7gyqJxmiAEWbbyL5LVGGwasNWmdhx1A7ccf5DyMQ8HGcSbeYY9b7T61XSMHSC1fMrgLBh2QLrCoCKERi",
  "key19": "21RUsmp8PKXc5ToxGBNfxSBeGuctjDuXyCo6VqdWx3xn2KwHdBCTmCqSbme2ZoPppESang3m8cuTH6sgtk6RExBM",
  "key20": "3vMkFvKAdtqBNxWsXVk9xbZjvNQMTzmtZNiR273xYfa1r3FQkeDaUUzwMnUe31abgXwbUEYa9MYrUL1xzhCW1xQ2",
  "key21": "2HJtThGBeUZFUYdW2iFmriwxuFZQC3SJgKZ1o5KKCYjoLYwQQheHDYisT1ui1aQxVxWhM5eqJWoCMkjRwCfM2pg1",
  "key22": "37GJXLnsHuuf9dhq3ogYJQRJ2WekTVmuuazcyYCqJfMBVZhzXWrD6fMwQ9W4YMuagJZ23MY1LAhWLFfmLgxuRPPD",
  "key23": "5pW81QmCqxBS4zRnNoJnowCXXVW2kEn2q6BFnk2VU9GFWzGDiJ2PJ6VwfueifhBeTSGiwceKCDeqx2RZU3dyAQ1",
  "key24": "3CEZ47KBZP7p1Kag37Tkn1saMTrZUEQzEW9aUp7ACjPbmFiCK2Sh77DYfnpZRb6fseKFLoN92PVQYkvqXjG3oFJE",
  "key25": "56iz5giNQtC5aiksNHGFjJPT46RE2iU1UpjE71zA8Sud6MoApRVsQYPGyFMV8wL8NFWX4J1Ctoy6sFsSKwDUpTrA",
  "key26": "2aYzBiRzvNSVC2JQwJfaF8hTKgdd3xRv7JBp5cXiowPqzatz6ffCkLxir874r8ekN4cbHNn8BjBYLff2YGMATAUa",
  "key27": "4WK8mr9zg2g8GSywi8Bna2ZtmcueLjnx8o49AXxKjXSD9ydPgYNhwAD8bbLrHHnvcMFuh7JzJjChvgX634rnUhCG",
  "key28": "4SPa4a6fGyonvhQH2bPjaihmvo5SjjJ8R4mHnQ3xqQrYPZnNLdBozUNuJEjQjEaMys5d2Yaa48koVmDzEVcKGXGB",
  "key29": "DamyqxHXMP52366RZUZhP4SJ1wWzLAxH5omkQrHijtLoAYNNDRsnCHTnDftbGGtYoFTtJBpwNzpPLPYhnRtXkER",
  "key30": "5aSUoEhwBHMK5LxNDzWdnQT5GN16F5Fv6epCzy39MJagh3EawrCiZCNxTWqdvNeHmjA1vWUpu9bvbSSed3WE2tmv",
  "key31": "3WkRsSbznV66QvdKYzDSK3xxL939AogV2tweuTmyGLgdWQaVDqgsPFHtebM5M534Hoi31H2JAoKpCYSJ6b643aVH",
  "key32": "48isWJwwzT3JsjADJrZ5aP3Md1FTyw9AHzaqdNBbq6Zn49GSwNRpVMPMpThHoB4eAaAhaSja4q86wyhtS3oPkkDB",
  "key33": "4pam5gadXQaRmeYqijrYdiKpyw2cf3d39cmRYmJBarxRBSaJHRPmoN8rRrQAyKe55d3VM2AgoE8UbnnaZwAKA3DN",
  "key34": "5QgWq8mbTiUupk6mRjABFhGwQhAR4FngtLBvprWQJ9izaW54jZHES2pfar9YuWvXaNL9E2TU4pCdLqoqDQoJBnsc",
  "key35": "5FfZfft1tFcWj3sfntuKnjUfGR7CMao7uoXdoLTJ3B9mWiqdUzRhJRLSQiadZpUKPGs5Cs72BernADvuFhmV3zWq",
  "key36": "4V3RMZxnNftmikMSMfpkGjyC4HTbE53asBftwS4TWKazcVwwhfD5FJtqSwPyYSshBQzKCEQnG1HJt7MP2Q1v6eER",
  "key37": "363WVVv2GCdEykYfVe844ddKYSqUW77npFUeJZvXBwLa8ttGtiHPvCKCuLS55NT2KwGM9wuLpHRaa1WLYZrmshWc",
  "key38": "yFnfn9MFZ78wrZ3eVovJ6PQ1UKVpp5K7Sp4CcNAJyt5Qyae2h23CTf4GBNc8tSpYjxoUcTtpbwup4mAh3Rxw93J",
  "key39": "4pawwdAysBp5n3ug6NTXFT8cXvbekU8VYcWpFbYBRHHihmVSUx4LkTr2NKaDqwCu6Bkhrxna38zEqvV2WEv3PMDH",
  "key40": "5rfVzAPFxVMn7aLP2VAeyggxSf9svs1ujLSJcG6mbJBYkVV2ZtLmTyH9eHRcjpJKWx2BmqnJgZ6iCBbU8QJXyW2w",
  "key41": "2kkECnZqmWcxRdrsXw978L6mUhGmqk9SraWc7ivbrb3RLXoop8m8SXBnc3PeV3N8wGCg879DQLk9naC66mXvG3Bd",
  "key42": "5xL2TuLbbwJqjPBgmPqS1vdu4iDtjPXWtdfx6cQKbPWNWys5hxHzPvbmA5Byi3VV4jh4ATbfgUdowborA6jmbxgT",
  "key43": "HLLxAghz5qynjnh1h6tCyTM4eMn8jtmGLDzXngQF3vtGJKXQtVvdHqXsFEHbuMPfKNdhEvAygeWxidtFKZ1VCZM",
  "key44": "3HwteBsWmYW7WeRVBPmrV6GeSTQRgGp3NXx5NBptMZEhtKTuVaF9h1vWrDSDxGnN3t37tUDhLWk6KqUWWNTVWAGL",
  "key45": "5ZJsuTo7NTuSxFWk8B1VX4qqG5GsbvPokULuX77yPj9Gpvoeys1zsKFKAiYUpXPbXUwWJUZb2xC3uU7oF3aSaRxd",
  "key46": "gPCExLu6RgvfjVAocEjEP1mCz8mCifRna3So7DN8nReg9tRQpowtnRUN6NXBeGQjcEK7jfGCqtz72bHVXzKWcjR"
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
