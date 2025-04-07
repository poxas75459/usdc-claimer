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
    "5jj3Wkrx2X2SbPYhdKiNbRmTez1frvwSyzwpxU9xNKsNiPri8KHXmn1d2cSdvM8uc2U5b5BMVLxmYWksxYfLyHym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pjMxmGr5LbxUfjXj4PEpkxvcEHRhw4V47GixPE3kVPXipTRztmyeLNp2RoPPyBEuC6U4JsAwx5kG9DDfiMtnRFx",
  "key1": "MjhpDJgNanWLGWzwxo2QaB8tqT7yRtGodeeQeFnLSWf3UXFcLbJL1FrF4kkoG6GCWKArL4wHw4x9YA15RjUuvj7",
  "key2": "4L2PA3GvDi5ocMUdzBqZnJZd8eXDrXsKB5FHb9fYw1dcUmNMEqUrg6QqaG82FTBQUqvkWksXZMcYmiMzLeY6RDwk",
  "key3": "3mo4B3YKoJqHvTXjyj9W5JqEHGrd3P2JCA8PD1SbgaU6kW7aSVeMmdqYpMGmu7GrXg6GDVFacJzvNrtRbCrWUbVy",
  "key4": "5nmePJU5hWg5LraWMBphS6aemB5Qi89cZuwD9aZ7GnKA4qDJQU5TbHkPPqfnFdC9u3zMSiypgpGoFeyAHwvk9M5a",
  "key5": "53a26eokv4XEzjLoaGyh2vsepSks7E1WgvnaWv32UUcp1Lzkm11DnFGZ7gW1aQLCSUnNcdbqFKmUVG7y2khEVFHB",
  "key6": "CSvqKAM4PZEg8eDMhTgR6ygWLEraxo2aNEye2ZwYzA748jUXj2D1Kc6awPUxyjMuBD1GoGGLGuQ24x5sntoLUwG",
  "key7": "2K5ZB6WurLSM4Qf11sQLo5NtTyxWNkBDXQNav8jfugH5i9o61Q2GTcyzKsCk2bKb1eG1U9kJiAS6BHmAKqeKdHMV",
  "key8": "3iCpJrTp8jzq48Naxkc7iswmc54jnvLXMVigjjQH6tgsY5JJA8mLMFqFv8M5vdCJUxnuD6qwRXXJVRbHYNbumtBv",
  "key9": "2tMQAwLdZVeJwBGvTpMU3apVKh1RnybR2KpGNxAc3UudN43dvoWXpf7HKARkWgXNjih8JhqfyUE19v7JHYNRaKSU",
  "key10": "5SkexzoENDWjfVAeFahYPGW2a5M5H8JtKeTzT5eKMtWVKNt1vp2daEmg1w3pJRx68e7UwPbrmMJD3QRd5k8MuMPy",
  "key11": "2zsAP1hxa4tFiiEW6Yba6jyouQctxcvpARmS45sauo1GbXRRMEPmBvX6qNKjwsRz5JLovZeo6xjH1iPqV2FW65Gr",
  "key12": "5fVwNJspQaty9Ehqapx8BcnmLyvbysaH6zcAXi9xTS9tim3WeMiqBGf4yqe6u91C1yXTwKM9Rq6yNzpxVw3nkTy1",
  "key13": "5fvpu3qVfEh9ZDP99NratZof1CSRfuhpVZVMwcCwKhUZqBKZeByQugXpGpu7jSUHJrxDaQgvDhjkMwR6k8BxnycA",
  "key14": "4Y392M9ii7eyAWGTrkqFNEGr5LTiX9eKuvc1vQTZhReGV8qSAE3E6qZAr35E6RENQwAVa7bQ881477aJDaxbaW2P",
  "key15": "3V2tt5HR9ARJsDgU3soAWSKvqwHqybyYzWtBKb3hRYp4n3yS9YiZDqrP5vB99SpAD3DGmABCKxXsHHh5fSWeAxid",
  "key16": "2v61NBPCV2cKXb7jacjVxJviSNi9znDZD21rev1fyM4TsVqzwzZmUrfq1i4qMtEdu2WjESUaF2v4fECEgWkH9jM7",
  "key17": "2ikR5zBX7tnsN5f9pqfsSuS8Qz3YaHcWai9dZ2xD8976VBr5QyMk2qv9JgTgm5J8cEoFbyPYK5D2tNVerdrsXA3L",
  "key18": "2zDo86feDiGcYER8tgdkccfsh6DcEFrZeGDLMjNyZRM6qZh9nXuVidcKT2P9ZtHCwmTrnk59FDt37CKBzCpXVEZ",
  "key19": "9fGDmgjUmbMRxFMXjdw2zKnJCnpLJT6S7dJM1EfTGhbnsZt6ZDRbcfXsF5dcdEEW3zJpTsiyr9rnF1bsgfTafJy",
  "key20": "2ka3b8iWQmhFyKDBoyGReuoJYVyToFfmcG9tpv8zmToxUQewruGwzntZCqV3Tf2EcaFYwcuCiRMghXm233RGDvtf",
  "key21": "4oocW1ktAGmoCSS1L6bGNi4R2rsusvQSMLsAASfjiesC4Q7eXukMW2ikKcugX8k39FBs4NcT2NLwmCYrspfErRss",
  "key22": "2Qggrhgct842btZgVdb8urs9WmPXyTYt9xXby7A6xXzx99u6RQDsVQd66E8BYCL8nTAQHXZAiTvebrAUKT3WVefs",
  "key23": "65f56xptdLq3tCg2kH4E6oPK7BR1mVfLGGa7ZCkwR9jyZoh37BKzyhgLcfWwPFpihajbS5h2gcdhe4VgUhACK176",
  "key24": "3mpE8xqpLSy1zzEX39K2kGvPVCadxpmtttm6KSAc4c9Hbj4ekKYaNYQiq2RfcMdLLJM5T7N6ZgckcfqV8tXom5ax",
  "key25": "4QxpV789Kjg28oHq5em5iTVNdvx7DNvvV2wT5zTWi92C1fZYus5XUGzW5gCwTtE59C2Hwv6kFZtsT4WwoAHo3Dib",
  "key26": "yGW2NAxz3YKpnrd9h4xt1iLaL6U8pnrsH93zBLynKntCTSyGimXJspo3BacQmLTvLwZXJhXu1Dc3E8QTXBFJndh",
  "key27": "5nySbPMU9NRogaCHn7TnRdA6ar9UMv3tXvXJd2ZAGMaykTtX1kPBf4ySWEuD3ivpDNuR4L9MWwxjNFFMcN7RdnR3",
  "key28": "3648b3gViKhBJia4pzW9fRMiRj2tHCqDHT7cTt9ibVrm4g5jne7zhueKh2VKTTRpZSpfh6RmYwLT8AMQaaSLDdsP",
  "key29": "5ebFzBEZiu1CB4S2KfV11WhMQoP5Hn2odHGQRvsutV777RSAjnhmRP97JubWQxLn5s3EjdoKtobq2gkpnyoNvmpu",
  "key30": "sTsTnuCyASoFguQxWtMjJSGZ2KfYJhutkKmgw97vHFW8VsMXPe8ixHp4gKYiAkKCtY2RGhrWWHGmn3PfMgdKkfq",
  "key31": "3VfJuYTJazFtpynK6yeQpFZWpV4ewFwW4SPM7ZrMfcQ3MbH2jmSRxghqMtWggVm8Z8eZP2cm22Z4AMTqtzjuKT4g",
  "key32": "2iLLWRR8g9x5emR4upkdYSb6hXeZebui41nnnqzaWVeQgCCXnyZW2PTBZZRLQ3cLgtfBYxx2ZsDE5aj2bUTKcd8L",
  "key33": "5eub7rX79hy7A7Nhb7AuMxKnDLM6u93iBs6iz9YuoS39xWyEMHPyMYXfoeLV4DRywLkj8UwKaBfDYRD8fbkwXxqe",
  "key34": "2p18thjAJBQ8xknZAJAhC63vBShGKTNDYvfz7ayAiWgHR61XRkYg5axWzKE2EjbRcJfRTwSvgcXFa5YbHtQABKny",
  "key35": "4b2ZB5BhgUArBj9b3LEHg31eC3gqqJeVD2AgKN6C7PCzBb3q3X3Czgb23o8SkLgvDisUXssqtiBiViZp6BFuXLnw",
  "key36": "5hKxer8puWtfSsfQsjRUh3bqvMiWU2DpbJDHFY2Mi1RqSt7B24SYHxvJAwXCxjV2mZR7gdGr3ykYzynePJB1nFjf",
  "key37": "qFQth7vGc2eAfuBhjTL6VEYy69NKL7hHf2w7pD8pnFkuymtCQSHPf5bWptWp1c7nJ5CLccyNeGCnNeQyuJ9bCe3",
  "key38": "4UgSojxU6zazHUL7HdRcY7RotqdbxAQXBc91Zx8NqFG8paoqtr27ragjibEnVdh2E3wFfbvudRa3GeBH6SFdnLDn",
  "key39": "5xJZoLDbSox7KWhdmnMaPhPQUtYybFwtMVjYvcaSLg7tj4zkpJMdJPtEmRdUhzve5ESEm2EJe4uD3uVJsgDYqqDi",
  "key40": "5VTdPsipZgXeRauVGgAhsD59AwxbmP5TDsH4ehh7y27YrxzeriLquPR38bgNyd3oRsAZgEdjs3UfyVX1r9ibaiYw",
  "key41": "9zhoZmA42iwCZmvkNhwpGaZ3bXcmTPpGvHPZVf5KQhQwL39gwNZQLrmKpLZB3gTLdAB3giN3icwSahMyAH7dozM",
  "key42": "4RA4YRc7hYPciPjWYCtLr6a88qHxzxykMUQLuf8cDdm9VDgHYnqF4SLGJpcuG4MvCVYTLf8p2KqJWxkcZxUUwoLm",
  "key43": "42SaM3DAwfo3gWMpFwYanzh3QoC49HntXFcD94WtD77ZJC2z1hHe9K3QmV7faiK6uZUcbRnw45jjAioxrqxs9aSt",
  "key44": "3QsjJ15eBqGiCGDnLWS4kJXbJCKZajQmvBedvtYaAz7MoKmLVffPUsavRnKjaWZPLizk5C7xbxkmrVpkvUnsLior",
  "key45": "23p52D5qEhTXhUtaFktnKWKhQcEj8txp2Aqsu4UpJmG3XVrDR2XmqhVaSWu59KLiDe815prLGkYhXp9BS4Fhtd5T",
  "key46": "XFN6Qx6XjRuvzqMi9AJvXZHYA688wTJvZcxXDmJ3p9hFAQL7rt5ow7aJXRWMpfmLZnNPXcVqcZU7WoV6RosTLtd"
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
