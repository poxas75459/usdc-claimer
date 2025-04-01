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
    "3SvvcRoFxq3fWEQ7RopgJEdP4mNcXH18vLhNir3jR9F5HHZY58afCq8wQDPk9bwsrXEcMh2S2LWJzxozY1xqiL8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34eZgKbQVCVDpJnxqtizZc97hwMNAEnw6zz1tuGywqK8JjSc6nqURG4GXaiEiW3stFXXueSfJu8xJU2vdcsYR2HR",
  "key1": "2yV532oWWE8ap6QZ2gpDZ725e7QswjjPvbwxa5MnZSzoJgkRoJTfyiqt8vbB4w8FMF7gFPQnKPaPYsebTeKW5GPC",
  "key2": "5ZZRaDhhYhuifUQ3xDka9qDKTmTmSrWacKStapQS2Rjj8S2saYLbKttL6WK3ENqECQpdJJbyrBA5G6YKBZV7XjpT",
  "key3": "3ncuNecoHeDNdTYLK5pEgqXFinJvF8DxkaVVgaqduhhQT8d2tbgJwtThXXPkR7Kk4edECPNuW6c4Q1qv4zfrD9As",
  "key4": "3JG6yVmzuiKAWvTqBDVkpS6j1VS7FNprH3qSsvXMQ8AZTcaHWsWmsAL3UXAvYNtm1ffzkpV9hxYFUvQffcdQ2PAR",
  "key5": "cdXmzSmx5qgxZubrJRbUXqS62sMqqgo1n4qaTdhpMViNMEhyifuUy1nYPHTF4BsuHmFqFeMzfYjr3sxPVRWMLXt",
  "key6": "4KJtmp4cTsAfD7boWsR8qHJDEyNa4JLFw3vnzPVun6RCVBcYMKcPHQX1A8FLUeCvcMpJrjGjnaEonnSKdDZFDPjh",
  "key7": "puAAFRsoAT9bkrgR4fFkTwYw7N6mjZdCrMjSLM5gxwxVEHgVJaryiZTHTrjPMNwjv7rhTDLhB6XczcCsdEtqs6Z",
  "key8": "5ghoMtgaSV4Au3dWzXF6tZkg6RBL5ymojgzNniFkUzk6bGqqhw8voyWdnf5J1N4NgAnBpiPWz8bM1Knrjub1E3Q3",
  "key9": "42oybYdS8KziaS7PzhWWwn8EjyPExuHweZvrHXz956D3R96EPNAP9631GpxXDXWqbTvSfuGVNHr8oiVv1Uxd1n66",
  "key10": "2bwbQtBoGCUj9sRzF3W3Dz2jgDMukNWJYa23hjZRLVcCd1AymL9qmXsHMW1r8xrDmgbnXCmK4B8btNoW5SS6VeQ1",
  "key11": "4p7oqdzGgXkiax5i2vrPGiCCNoUgML16nLpYb8bxik9ycFXPm6onjfSL9bKQ9SBAoUfk7PHZJGG6cytuYoMcuahp",
  "key12": "26pyiZGRVy4Pzv8dxqAip7iqjbRh23vLD7BzpVg4LFpjFhsCCwYhjj2tcoX6q9qJ212yxudFWCYSPSpE7PFTXNfG",
  "key13": "4UUPMjJDMmeQPL9q3ZofWitwpgkmT8Qm8b3XEGjtQ1AYHYDyahco4mTagUjCTBgZWPotzN5ybd4FsfQZWxxg2Dvs",
  "key14": "3kvVRrmkBoCLJQCkvuutBSGTo54UANupSNhGkdC1p9frqBL3XjUuqGT1ibBjX1K8gQdezWgqf6wQzHRnH7yxWsXk",
  "key15": "5bkksZ1U1pqCmi5VK4j4yyz9YBVZaCuFPhqibend1Qf3mDKkY2GFnfLvD9mDx4uQwYrz4bCenmG7kTP6pn6t81TR",
  "key16": "3NLEDaTg5qRS7rW2HvSU6wETnFcHP42d6tUSFo11hDJ8ZAHqUhdE55LZbsP49NnTrns5bkN2VzSsML2TFYUguoDP",
  "key17": "2G2UwFCeqvsmHDb4JYMpfTB9L9HDEFfmVDaVmn1aXUjRmGBeHvQYUaLFhNZ3e1yNf3DfuEtaD5G6CAiAh234z9sg",
  "key18": "544HJn2bq9c7j4YjZFqjuGMVkBqFGDpo2j6VnHz8qZxAn4H4oXD5LiAqJhLi74737XoQPQNpqmBuGeTr1pysF3kj",
  "key19": "29ajDNE2ECaTxZBwpvE68gwK4XMSdZQdkpsaCAS1heTpV3XkAekXzp4vQ6qdzb256E9bMd3nmYuyVZQqKusrbNhS",
  "key20": "9xtKi35FgzzyxGkRytGASX41vGRmhKncdZyJ47ksaPR62PBJkL9N6royytQHVQeTgEWjuGXPqkCXTqtcNaDQcxH",
  "key21": "nS82HCGdBQEENTkokV1KGMKA7Hc9dbbYerqPBVHS295RVwBKKzzguEaVbLYXF4crxcc79y7yeN6fwWtAjwbYSto",
  "key22": "4kAfu5xXHNzCBxXwj3M24E2iMbirUToRQM9zJXigL5VsSW2muKRrBuxJCrmBNEaTnZrTu8czDz37xoVurqpxLJUA",
  "key23": "3RPMiEwxd8DDA6Ad9vNvQYXNMDQQmkNkxcDTyNqEAzdp1zDm9tjPwjuCEHfQuEkuWkagP4K3cZ1CxHhfwREoMv9b",
  "key24": "4Hc53ug2TYnPBF9HcEV3i2edrL9visLHuzM4HpmWG9CL52iUT3Vn7uHyfPNPVDXm9CzvfxVnYwBJ8cq43XQPLv8",
  "key25": "3YyNCiKiZ97fnKT1atJvjMffiWngFWR9R88EFB1xrHXsnxENDqTcuLVS5KDevr5MFzxy6fJgEn4A7ekMvnLLbTn9",
  "key26": "3iQq4pLaGTnSvf4Ns6qWXHds8eSUHwunx3PD6peAeR3wvCJRWEPVNLHYscY5hdo5WDyZkwszvLbB7iQD4H52WqQc",
  "key27": "5jfW8ZajpX9j7411LJBSd5jALB5jnB1Q2evYfr9BKtj6KhwoZhhzmLkTk2R1NSxyM4CTkbN3xRmhQaWSPotfDZwk",
  "key28": "2zTxje13Eziu7DN123k7hFSGjq3E2SoRz5CsxrjmpQDsHHv4V5jTFFpoT2aGSXDS6GgQ6cLsnd2kxV3p2bdPU33W",
  "key29": "4oWG5HkidkSZcPRmYhDZWqWocqD7p5TRkG4ACUvC8xCMQ7Cz8FFxMfeB9b5L4qgBHSLVyMR92PZSitvScDs9jaGU",
  "key30": "4SYhsByE1R5bHUFDK9qYAvRHnJjsj3jcUQzvcm6dELGj1vjGWHT8MHdTcUSZR2EcXvYdUE8Yy6ZAinUpQrjL2JCX",
  "key31": "4dfRQa6XUxBRnWh4cR7VjrR4m8EHQAaixzazU18qeS5WXwsMJkgKjQDx91zmrZge5sngfx3wzWHnTfCGWFMypQct",
  "key32": "3nyHa1hhH79AoSZqYekp8WG1XV5ydX7B8M5cANQ6kxxMYEjC1y2avACdiqVjecziQYQdSpZVcxn6rUaCqYceWumM",
  "key33": "4TdGPPejH9SaWdfPA5gdDRBG9yo91NLHRDANEFwsKjbWtg825cQK2K8mSPakTmEjCniYGQVGNrKx88YHGbrorzyY",
  "key34": "2MPFWxbaicG8TwCvqYh1qK9UtrLeeu9NmRMexPYzkMt9VFfs2KhGtujAdGD8UBSKWZERATv8LdMSBYDoKs3XXqSf",
  "key35": "p9vHwwCcdgkbLqQcR4HGbxPVeT7fnU9qsBZX5aDHVus59R1AEjbVeK96nX1xLhR6Pp7uyBFRFcBd5vZFMnUCCie",
  "key36": "44WX1bvQihEK9ume7k4ykjcRd5rPsJzwngVXF96pTEhHHBAacnugu6Th8L54XFisNBZUCD6pbU5F399gSA6wqCH5",
  "key37": "3zzosx1dJkfmafSsxQKNXqnGyvpwMmgtFggDVkjHD4yMn5oLDJbwewvJpq474fc9tcFbKFweA3PXRNsFuS5aRhWH",
  "key38": "2S8rgA7WjLA1rqiJCkVGpQNH1WemKJUYRZopESDYqSuqrt5Zvf15RZxLF4nSm4jePQkpNJTddGt5jmFUkcQNfJ4R",
  "key39": "5vzGE3ghpMyqfNADM3Rignejk4jubKSH4jR8HbnPrHYKnYvovMRT5EsDPUByZJmirAaFtPEXGWSQZJ2jm3TaWsSt",
  "key40": "2hCB4Z9R8pcD1jAyatBizcUaVQWpVvmcq2GBjd9mTi86Rq2kppzFpwr1vHzjABKpCjTqwDM3eLiRmn51xSf6b4vD",
  "key41": "5UoDrqGu84K5N1NbuvAxsgjAgKmC93wMWXrjhnm1YYBcGUoNixNUTKAkNVbc4VdH9KoFtLy9fSPT2aWAxKLkHcAr",
  "key42": "5JXu3b6VeunCmu11jUJ28GyiaiXn6M8vqHg7XyMLXUWc5KxtLXdvg97bZHuSmHrrEjPEbr4dmeCwQ3SXupeVaKRe",
  "key43": "532PT9Ydg2vSA9o9j43DUJnPNFv3RZDkbAWd6EAeamLfTF2M7ftzJF3WRUqv6nHnCVjbaGociCE1MxTDqS4Y158g"
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
