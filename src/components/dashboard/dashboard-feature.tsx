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
    "3RMZmRPjsc3yxDECmfVxJPKRkqL1FvUQ3j5ULnGa1TfuztKaATGqMuoRkeNc4oFNBrqJMTr7ujKyTKezSG6Yugdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQwoeGUPUfDKfL7RrgfSzVbdoMgwbip3ZdC49eGELug88mDj4g29nwQj4nqcbffwc8vYL2xA9th62wvkhURiAry",
  "key1": "5nFJPCBy8MPfj587LgfHCvd8GKgmzPWJGvf2Zn2eLbohkdGy7HuGxdRz4v1rfAvtjc9whSMvjLYkGPYn2pGFauwF",
  "key2": "5xwLxPfFmjzX7i5fgrhFrQyDkVHCtYw6z6hPGBfXHidYEzNu6JL4sLgsMJBKimjfNes27pvDqkUoDLDBPAkhUyoy",
  "key3": "qLGQMSDbqSj8EyecK3hUaXjSbf2ZoCcnZ2ynRSpm6tHEJj1vZAFcjQBPBdYQ7oGuuhyMpjN4e9NtpdQFG6NGDGr",
  "key4": "2o15D7JLEZWvDra4hJb5HGxFZCxrnbNtsgUjwNqgFS2kbzLCfB1DPC764huBAwkKQDuHum4KZBx82A5f1guPinBA",
  "key5": "21R9AkN1AQr1AtA6wKEvj5PeRw521gjsaCP84bk6wTeH651jkP79cTYPwEyCkYGZbEp81FPc7SGkYbhzw3wBe2XH",
  "key6": "4i1bvUsed3dZvsXyDLGPWKStdRbGsHc95FczdbrRnFPHUypzDPwKR4TyEGD5X6we6SsKnxSZNLsAhznxptyahWMB",
  "key7": "61NUq8yfCQ5PDHfUWEnTBZvNYuYAcqTspqDYrE9yEhmA8JJS5SsKNuixnokwrCgfGyKFJGGmakSGcGCtT3pnqJL2",
  "key8": "3XfN9HqXdCdbDgsWdWcAq2Pdp9tm7TSxwLwCHJLc21aJZVBk2CGBrGRn7k2xq8JCwAfrtfEZeudKXpKQDDyQANdx",
  "key9": "5Ri99P5wCn7xSJRg7Gnfz7JDwAB6WceRUUyraDShxp7E56t76NsMvEtRQGnLVoyLtWAtgSbFnC4z6E74tbk4aAiH",
  "key10": "5FMgfkijKZAv7mwm7NzkSfE8DBpBrap9Az79PMzu789boPoaZzs862euf2PJCFzJ1X6bczJCESwgDs2d4wmcnC4g",
  "key11": "5wXNgKh4ucBkzeYMUPGmcwHvFKzK1wXT1g7jJFBAhnhfajfJBy3WLDAT4kTDUP2827Mf8MLZo5fREdSFmAASD7GS",
  "key12": "3KxAk5o25yBwoRJwa4Riht1z9bUSgabQuo3TNf3Ls9BA9ZYCrtqMhiUxn9nDQHMc9kVSxiyBaUELbK8ih2dNGzzb",
  "key13": "4w7gUCZYC6v2eLn8VEsc96WK8thM47DCgnQw9hScAisSwz5T89Z24SyigD4X5FpgvVEPTh1MgVmm9Kr8UHWKfgoe",
  "key14": "2A3umb34Jj6KLekcPFd7ERdmLPwZ7C8tcNdaBC8nrSZpAgMwB27xW5AbVmcsW6UewWh6EX3s1fL3T8eroJgshTtx",
  "key15": "2j4CF2phfiHzH3QRF8uR8hoMzkYsUE6Gcn8Sf2UwwcqTHYr99EfKP3qzspDR4gMx6biqeMKeiSey2RjyRyNn3PPe",
  "key16": "4RaCVhK5PLFriZSy4BMbVRHznAwaErcnes52bSwCrk33LuDHr6r7e2B1GQtUdnKNjyGALEaKKDtdvXMsCbzRcoNd",
  "key17": "5LvCENs3oAenXxjoQQYGWrMT2H9sBwYTmbtvcEMULhtdujAJsojEcrN6A44GWXFJ6ZkmeexT1EXZgFNoTHsVZFN",
  "key18": "54mr7ANdZL3bkCDPcvGdMTyKKxxFurmkMikmMAyRT4wQyskM78qMimHfyGVU3BLqzaLbULaqCv8wybv2VBYPmmxL",
  "key19": "5KjmFKPmfYd8PuxqkmvFNhqsmsiHNhvR8mzrj8qK1tZMW6vd7mgh2iyn9ZA1aVASrDKS2x1sn2a4a4osnWRTUXm4",
  "key20": "2Wm3ojdNmrQoCD3K1hiBBGSNt3pMMBJzWpDvGmSKMyq4zF6Bjctbx4aiKRUuUE7SdBSDYj7u7kMTnWM2XkA7mNRa",
  "key21": "4BhcU8y2tC1GDeVpzovqEw7GeXa2Pd8NvyEFLnDySLA6WiR5b3VDF7pbRZYxFDuD5n3A361LLbT9nCQZM6tRTEG2",
  "key22": "34bysrXEDWCNGnmQr8A9N5Q7c4LX5eYAQkUdZL57cY9eKWLEaEP5q3EJc3ZYq1EXXUdXuzBVEzbfwDhaSUygdUoK",
  "key23": "5XQ1rJYy6PKr7BpThqxkYd9wtHmn4HHyJaejWU7LGNM115Z8sU2brwsebmzFmCNhwELa9jsvYbEch3wz8ixdHjNE",
  "key24": "3sgU4hifXWXsuoQAbbX5qFrcK3zKcKzxHnpQHmvtvRBUPPGxbFJiRKPZ9yJe6M6iaCUEVQAJqGzvKxgGSN3hraqN",
  "key25": "2CmunnLL4McChE3qZdQ8XGLn8395MLEQboXi9rydqEj5qQrwo9ZXNTgFQ9yXoWU4kP3pXLFCUsnUA8NcBjjsyJWY",
  "key26": "5ja3HcaUXL6jmHqnVcmgH49JVZsKm8v5mVgLAzXoLRW53URV6ZLDcQTV28nFhpJcHPLhMkJ5niHV5iZQZd8TKnmr",
  "key27": "KKzM319v7gQrHEW8zTpijQxGkXXwfxSTtJGYthE14N5RBPDTCG8UiEKJzVGfe7qZBAThrL24nac23me33zYZqGQ",
  "key28": "4hM8tiGJGS4D4fNU2n1AGzJfVCGc18CkmuwjboY1roAQXpfZDDPbykbTX3G3A9ggp2PRHNcL5Q2KTSFHty4S5YrE",
  "key29": "3gHDthogaVjySu4jba3qrtYBe9dVBjEMBKj7YBtcnPpohnHLjDwD7YBvdfuCu5mbvbtrNVbjPSAcrqN4UkkMBW5E",
  "key30": "sosEp2zYodEktM9PvAaT13919LsLMBVSpFooPSNvWyRR2Mf6fS4MkMHqfo8DLYkRTRSHWvHucSLHrmNAQDdx8KT",
  "key31": "4c9qZSXBxuix7KoC3ZMh6wqE6wib86m2AoJYEay9Q7U1cVHepJ72vAeC6cDWrTPshRYuCGzgQAeM2Z8dcBPXvk16",
  "key32": "5NCjrEvtswJEpE4m7CWAKFDdg3L4yR8TcH76sychp43CG8r7bhZ8fydj4jM4ADkW4JjCXMi2NHHym3cwxnWYFTfD",
  "key33": "2ArndqqqWtT9AKfJXuYJRTvhwdze3oJfE6mzWtLZLfyJNr8aUw7atmTtqakdYYHrbC2dFKdz9s1xLMdy3RycWKhs",
  "key34": "XtRjcHCE6mmK1zEfwdpWxyFGaFLvamse1pVExeHidEsPtMESSdjgmrWKKhnDpijGnLthpVoQzfnZNirCoPA4Q1e",
  "key35": "2aAt4ZHyniLFGCPsParvhGU2Hcb32S1wVd1xPUFnmgNmxHXe9g3WgTuvjkqUWhtoYA64DUkaaYfod8noztZ69Ex",
  "key36": "q9JcH2Wt9TkBE2MWWYVTMzwFYGV2BJjmS4Z8CcxH3NnesWmEv54Wo6HcgyLhi5iYSNU7nHSuahFKuDzn3X1QDpT",
  "key37": "5dwKhj2QPGoMLt932Yvv67Ja8gZXKoyN2WSQSo6BG61hF5rrKRZ5tkGh5PY1g6H1hHiXizFNFCXbxWjyWZWa2Wa4",
  "key38": "2xAFbBXP4FkjvTwggJwoYRx8J3G4CQNrZbGaVmvFHdDsyW5XBbFMKoetb8Vhx5UExWd78Aw6yViEcajjf2RjbJYB"
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
