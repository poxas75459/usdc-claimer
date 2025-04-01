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
    "4DKzVYea9H2vEYEWnc4TPoAhkFF8dxjzfhjCEmNEKHy1Zb9khpb9gfJcSvBfRvnwfH6awfw5RtURu9ECtKX2Xk2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vTuQkcHwnSZMnyogwZGfmjQfJZaJiqCVem29LxH91NQHA5v5XTZbQbr6pnwn5vfxkowkkAdzWq6X447GJsfr3q9",
  "key1": "RYviQnM1WTNnK2t5YQEzL5n9Fttr6vx3X12xrhkyf5wbmxD24EzWyUufZuc5FRb5c1dwgQ3oKN8n9H7em1FPJ7P",
  "key2": "rfcbj5R8ri7ucckFoF7n9i9GNLM2CGELxucWFJKToW4jkmpecm1pJhg7gLLAh6tpekrM9WzMpaaZ7ytPf5ijDAF",
  "key3": "3qbudVh76fFkARzm7nHpWFsJMDTdnkcj92gNKynXBzonWR7DBLGQhC7WEaS8BU8gunPkhjnAUTTgdpUy7WmXRhpg",
  "key4": "2fGR1h5LQrLfc4ehgwcAsbEcVEBksDguzQDubAYNZGZP5dyxggjak4ymC9hm7qmdDVG7CfK3NhaeKDQQCKu4TP8",
  "key5": "3T83ui9FBEvcoYVQspDhwx5AKVhaUxLTyrdUcd7eb1uPAaN5zQFw3qvzQco63Ea5MLzFfbiRbcm2SNvEcyYUQZ33",
  "key6": "4gaWeVjJhdnmmrViGugueYLuAnDShRtVgT6mnxeniAcqwqtb3Q1ch8haWDUp4Uruevo8wMjZetiJ3KyHicLn6wfP",
  "key7": "5qirXzamtZpdZsabj4PjCoWnhcyrFucqatUo7FYqyLNvdW3JqnzZj5NgG3ibMsPqVutXsVTijr7dVqnxwGF1cW9u",
  "key8": "2ThsH5grUeCknj2cDcBsXonB3aMGfhLaf9dt15dzm3f1zHo6oK2HK8QvnzTDmCQ8famgH23rmgu2vbXfYmPpL7K1",
  "key9": "66hBStdyrm2eG9nGGvMpejk31ssnCwsKtrzkLbV7wHr2HwQjR6jNJ9WQSQ7FFKi5SeaGWSBjXQqEbifE34pD81Rk",
  "key10": "3LS9BUchqSYfwqKqCxzM1zZn2rSPnAneRnda7rYra6MtWuH5an8Q8bMh7bLhmU6uvxeUeJg14etm5btiiJCybBAr",
  "key11": "4uQaji6VNaYPWj6CoHLSLa8resxq1XkjCQvv7LCARB8aQBKyywWe5kD7Ax7hTLLQbxeuficzenkkG5wAgdRm8d1U",
  "key12": "5N6xFBSRJG6LP9sTX6yPj3xzBxFouJjLrECcgFnbFNodcVgHEv9VFBUvBxTvGCqMF3RmB88wJgbbrndxzUgEx7f",
  "key13": "53rqPMSc2e8GTwes5f2qRv5rSag6LPiFsD9vVqeV5Rm4gS5JKeUfCgfhWSLJWu2KEum6bYmAGvj64wfLNLbvhxhM",
  "key14": "3CPE2sT1FeQmnALk43eSAui3JEMAY9QWuoFqpxZAty1FWTvwLsXzSRdLLMr2kDo1jZDVnVKGFcdV6Mqg8RAVbVTA",
  "key15": "2PY2krDdgmjSiybLRRzkRueiy7qsbV5ksdoLA94gi26B5X5BcsJSJDiNdDJD5s6gqn14rHVvDNBS9kAeGPbTAbpd",
  "key16": "5WhPD2fasUJpZLMtmN1wrZmrLx5xdD63Ewk5nFq7aLikASrwxiYjDr2iwm4c2ws445KfYLeLwmP5gaTr9orJ2qwm",
  "key17": "5LVJDnZNErLLg1nNzopedV1yuSMaN3ysHoKrsuHoXSMzggpYXE2nzwcBrvZDkpH462pTwnV1bH3woWfyN3FmUtfd",
  "key18": "2pTpSxC8cQcjS5s2NTUrHhC8yXzrrvap1PNYvHDZxmgEFD47wvHBxvfdtKadQubTWWbJ4Rs4wV97AKnApcGDQTaf",
  "key19": "2mZ9J7ss3ty2gTa4md1MQWWAqrmTY7PQB9F1uR3mhCukVjJM9Z8FC2zc1Ud3Ahx9hp4paohMW5j9RaxYcij2rDZw",
  "key20": "5HGi1PpYPuNjAbSpPhtY1YTZP4UbD9fRsq6kkRg8kmDwftUmkENj38xeiXGMzeLiTZVNfSkgYhbRGzVVg9uHsmmV",
  "key21": "HRK3DLhpL12WMHdgtbmSEdP91Qw8HFF4NQYZ8omefC6btM2uT7HxMof3BibJuEo393QN3iPuV9sBxrMVfLnoZ6k",
  "key22": "3C5Qdq7p8SBt8HGpWJrGFbrpBrxGKdPEGgeoxE9QopiZ5B2TGugngVnw8up19wWXs71qSmnubZ8LHnTk3WL3bXkm",
  "key23": "4KhMouBJvdUhXviFw2t1zFJeAcDHBs23SM3Scpdd9jjkKfusX8ykHNGqqb8c5hSo7V4nSacrak3LCDvnEF48UEBi",
  "key24": "3ucUAUmpx3hjjaAjizc5G9D2Aoxf6EzLLUDnQm5SLXP6G2bBn93a8gnmBy8DGiaxbnAb5iSp3aFWzvQauN1GAY9L",
  "key25": "oWhSj4fSy91mFjDhb3XRk82CpfpwhCRtVXgndLXP3VsQGRrtHWpAq6L5dGh1iLMRASn1dX91WdnUYztPBjPhMeT",
  "key26": "3h5QPKdWAP2pGanmRLkzgPTdcLq4zbHFvAh6QAQBbDLcqhobBSfCFvbssZJrDyCWv6QZyHVZtwqjZzuzCkLKPGkd",
  "key27": "4r2V6wZ7L9RweBcsfvmZqnBnmkhh2KeBYsmbMJheniEVdDgY1WLcKEnh9dbe1Nq16sRScQLkzMtGGi3xqvfrSmeo",
  "key28": "3cJf8NF2tQ7w83s7oHCdbPxw9c8WrpLdUMMqXNydEqoGRGPPZ5Q5mabA342SWZ6jHFWkeYdGBze62jx2qaKUT1Kw",
  "key29": "4cpe2yK39Tfg51QKPsHByMXyQizYj6NpbfTgWUiKnmZHgBJxcQNdA7Ka7YYx9rYNJW7P29ehz1zcJtzCTkhLo6pr",
  "key30": "4Qd6UsBG9xF5fP3gaYTGN63sgJyGHnfxvMxqzaS1iWrecyFU4CEKNCAEBYowU94s6frSBBxc13iXcUAFoPAwnhYL",
  "key31": "2itg5MURx2zzPL2jFMJfckDdjjb2zhRRH1i8Jni9Fa8CDvLiTPSVerX6Lm8DovF5gBqFK6RzxnCPZ3F6nS94w2AW",
  "key32": "21hKPTSx4JY5eJ3WUYiQb6za4YaN9xb274NULvFgBcZ17ZY2yzUZ6sPpcKCo7jSiVdXRU4PTVqwhtqeNrtRDgSNu",
  "key33": "59N8CjP5tPFV3x6VcE2tcBG7BsAZKPs4jMFcu9NvnSg4QxbQsw5UAfptFR4EhPNopR2d5rV2B6wYbAaJuXvEj9Pv",
  "key34": "YUbhM17VSKjWDfV1nGfYJCBXXf9fDsbJs315P7dnb2ZLLE9xHPzefhsx7aavuvB9TAWV6VsgX2CVyku4xteVewc",
  "key35": "3YzB5GaGLHbYkRv4B2rUDkdEzFkH7sdtm4kSFHpc7JDmcJf5p4hZYZYZe5EPbniEB389zjf8gzAZRWEKeLjzt8iE",
  "key36": "21G4aCXAzQgzgnD5w1tevoijgk9zvRzheTKThjCk5TWGg4AZR5inpK91satBSEVZEgUR3rJvLJeScdkCPC2DY8TA",
  "key37": "2qVjZsRKN9poVLAHnkrs1GAV4GSrwAprCw9VRAb58Q5nJvPzUwVJnAPZPaSyDwPBZfe3FhYu6dJ7w3yaNedHGsnh",
  "key38": "3fj6QgmUwaG4hdZjr1yXg2ec5vh16VPoemCnPpUnWp86NahHn1aztwxyUH4KFxzmDHSFzM9T1CT2ki1CDW85sxCc",
  "key39": "2R3cTDPBH3rXckhLndZwQqD2E3zn2yDADHzdPeNw1xKYYuBTsR1upNmYiYdtuwZ3hAW7HraVFv66kXUhtSZLPAgh",
  "key40": "4XPzf2jtpoWj2R2vZiyzVmv3omDyCDtnnezsXC97yQftDYHQfv2nWvSw9yByUiQGEANQEKktiS2y2fDysvUhac52",
  "key41": "2bwSvNfzChxSs1FmMeFuPgY3xojf7zwoscVU1iuAerNjGCYUfdhaF4Sr6udTKnhWw4KKSTq8thiKWydS6X6mrQdN",
  "key42": "3dynHyExWE55sbSq64U3CePDooAnB1WDLBU97Tpes7RjZjKSkwKYveKzS3GyMWS2SpR23P4n2cNyVGv7phGULr3Q",
  "key43": "4hQYjiahFMdQvrnJaJVDKdCRR3ndaTS6s3resXW9k2cre7DAqs6KigXiVQurBcM35BgsAD9XqoewSzkNwLDN1MtL",
  "key44": "5brNR2Li9Q2wMPJHBsNvy1aMq26dsuc63UfXkKQsraS8NaKTMx6vN3hRfuw3vLHEMvsvbSK8jWLkp5PkT1qixC8A",
  "key45": "48mKEriS1TjfLFT6NVmxwmPBAUGEBQsqQXWsN8CVRPhRNJWkmpgXNEY69C66DyHVza1BByvPiyQiw1hTLC3qYpAo"
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
