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
    "36T7fUVKXW5dhxfgw61TyhcqdtUmWULPcY8KDHTwANAzY8bcoAZDEJKxax42giJajA36vxcb3yB7yzFjoRG7fC2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52C8cJnbLFFChST9CQTfohgVHHYVi92gY8VTnSeex9qPk1Rey9qHgdJAnEoeaDx6Bp3AjgYAz8HvAzKLnPKTJ4Px",
  "key1": "5QaQ6g3J2vFtTugtePD4k11GBJG9KVmqtcemLHRKWReoVDg1KZVCJA4747RktXTRHVYTEe13wZcvm1UWibFgoWzA",
  "key2": "53jvCnnpC58ZMfXj5Cz3C8GcVbGLR38dZmZxwQFYwz6id2jC4V6Gf6P5ZemVDH4XjkYb2koWzfyMtKqTpaCb9szM",
  "key3": "3WPKy7EKGmTJpcYbtrddgQmuQ2S7aGSmRnFhJG1VCQzemaZBnYcUQTeAC9WNmQFz7SvR18K9t2ANLFuszEGrskZE",
  "key4": "L3q2SzrR4SqSGVE4eZpMYGXhECoGHNqRaYJu8BTSsQffcXPRpxX62duG3wfsdHGv2Qs7RkaibcZ6ihLucbQ73dq",
  "key5": "5Z4LnvbrnykXKAdT8i7RncroozdhMQqySvWLpkbBZSKQjFTdt7Lq5GkSnUnfxARZASmPzCWr5A3fjGstPuCrJ8WC",
  "key6": "nuk7pAzm233EM8DFdfpLC5r2tZZQeR35NVf3oziFptAgM272pdKHpvTrrRsNp1r2fZFyzxNHqTKhp8MC9cAc2KQ",
  "key7": "4QKSvcY2nKGJYHzQhZtg2Kb9stYHGcQ4Q35YJWoSwYssuoTiTVG1KmSQvhv49g9tREvdN3dK9R4DuEx7pygG7r2Y",
  "key8": "3xntzPsgk8SRkF1v1fmb6EyoNqpbvp9hP9uBkW9Z7GNpTmKFpaEttGwLCKJEmWUf35M1WDFsz3mHDg1vCJsmbumo",
  "key9": "2iSf8mTziSDGkbPZ121rKH5H7g3vLVNv6aNx7TqWTWBALhw6dLauFJyecXZ3foBFS9QgJcZ2qcuSUKcr7SugWasP",
  "key10": "4Hw2Chp1mpNdGomTmSyaip9AesEBP4KRLHxQTSXrq9oknj24YimzRBnzwZNa71N3Zc9DxeXjpYgaVYatP2owofBR",
  "key11": "5GYJuEPeLZkpoGksDuweYrsxtLGtpMJePx4vTRQSKPNJ3AtUaS7pmsxDDZsJbNBqbuk3iCdGmCt7pqHq13v3bj4G",
  "key12": "4UnjLfs7ccp5dHFaY7Pyat4irNe2G577wJ6DEFBjfL1mqJAS1xUsFSV7LWUXvmjQkoXd2xnDY6JEqE8bDxjgDEc1",
  "key13": "5hdPJBqCeJWUkR9v7nJNucJRjguaaQqSvssGP8QmxWD1jRUcsLBM5okfKN8FXHNzPqSNYsgaKcvJ6Nt1jroYngQX",
  "key14": "3ha9A11wqnjxUDEhvkfgbypXcsK5eoXdTDwCA4HJ8tNiZDPpMty6rbEGddE76jjx8h5utPkdu4cyi7c7zDz7gnfa",
  "key15": "5vcNgMTE86BRNRgMzsrTNJunJ77RPqCNw1yJKgSxppogS32WN6x4MEE1zC86yDnsCLh1o342sjchpRo3k96aycww",
  "key16": "5dChkVbTdbYQZPEt3dE5T3Puhjco6yTrV7pKSm5fhRahZzwX6eDY82rSnyFsNrYCSUoG1krqeUdaDCXT8cpomstk",
  "key17": "3yGwxyjANK7NKyJc1R1U3YwJrSMMXToHEsfUurC1zzCNTkQSsNtnoTkh7oTUuXUN5Rdp2dZQgVmKRX9bbyoCPDoG",
  "key18": "3dgGgEz9Kw6oeb2a7vt2fWWzRmJG7oUSD4UJEP8wfNXnNLNHwJ71FpkizLv33mn87EyPQPw543cGTSeGPVtk6VZf",
  "key19": "5dSHCRNB9FfetpPusC8rn2JxE36sNTmyzEWJ5CAS4ARmWBHCXPMsub47nrNSdVEqX2S2QbR9NaF5AYqW3ch26znf",
  "key20": "R3RKcjYbiFHdvP2QWjFsp8wkPVe7iRtPd2ea7bL7MTUb9LD1qUREcEWSryzqLEjFEH7Q4U6tgsGgQ3KLEPkQHTX",
  "key21": "3LG7tCXmhaFBaoNn2iL32KfmezTD1CHcbjeMZRdYit61HwVvHeHJ7s98YvUSZTRPdkvMG7mx5ZhzjRSu9QZyNRyB",
  "key22": "iMfqeCpfFGAQLNhM3hUhf4vxjhDgWjcsUZdNJBXc7bWtBB9MxSL1eYcaJGUuEehmxsoKYbTfSTBdMFJU8YBWBBd",
  "key23": "4LjX1fC7sBCu2hmvnfmfh426SSenCU41dBvnWZ1qNuxkqTV4yKgTGsybUdUok9vkdtiqTeXUJyHmoervuGhjsWj6",
  "key24": "5uWna7FTNzroRtFRKPsdnruj9VkiB9SphFFQf8sduXxBcy4rL3bz91qWV8LVRbgF7hgsR1NfWinBhfUCFx97QR1Z",
  "key25": "3c5UuvLyfdkUdhRdptUtSHBKqBtix4E6d6NNzW1vhwv4kgiWSKKdJ5m1nY8gMsGJVhgzFPPPvEtQdGnKpjjwo5AX",
  "key26": "2YS11QPfaGZzZ5z8NXryxCQngz1wpcKscYX4tG7FGYHcMQJe5jFFFDuwCJjNUgNEUs1yXBdH6xgHGbaR5QpidYjE",
  "key27": "4r8BbrAMWKMmwj2NV2gWZk562c4EEaXQBypDKm9ad3YkJNY19Ftat7oR6KoRvQ2zJWPdZZKmkU5YRSQMzwnXTLiW",
  "key28": "5LSfMCeCKAFNHtcQJVqQL3eFk6hwL6iGR7MAqCfAYtZTheGKPcTwStenMuuVhfoMovcYGGHqJx8SdQXWWpWthTLy",
  "key29": "3kn7Wb51xxs8sSf8y46UFG4QcBcYDjj3cQFc9aXbiYbN2eyv7TpGBHB2FcXL4iApvkmDbJJSoZBbPbtuHbPc8PTo",
  "key30": "2eAdpELeWEfg4T5DLW64hvxkvuhpG3HpogKfJ2EXJurMXMWcjXKYQQ1adaAKQiEhC44vKozX9kxKmLKJMVZVZPTm",
  "key31": "2Tk55e2SgDP7YvCkvN73cxtpvCFSXcxuEFazJkssYkWvayES8Acu5aLoXnK9RoMgyyCVFRVKHxFvPbzEAepGJX7f",
  "key32": "2SRVc1cQW9TJJS4xotM3xZdSvVFpnTvYkrTo5bWU4P14c57zcCgLPDJqqtmtt25a7GKGMhNQBgQqEW357wjjmDeC",
  "key33": "2YNig2KLf3FgwUx3EfshRj6WRtyjGB4TBohTtEa2Bys5weFoEjQytPJ5PKDeX6hVZgxA6Qmd54s5su1UebH6wSdV",
  "key34": "5SnUioHqWwVHZe9v5ge2ztNN8uHgKrvtmAkYRFM69kEMgQggvHD1kKBfyApHQyuyYraXq2Sp8QKTps9oLAPfwmbV",
  "key35": "4EPzrQ3TJjPRoRJPkj8xRcXghwh6P6hzaRv8yYf7b2VfxLKcbxwrVuFgeXi4mDRJEGNVthQ9phEnMT4rUksVQLrU",
  "key36": "51S7tMEFbDhEMUV1Baodbt9wciytU8YA6tBqsqSoizz273YodcfMkXd2hqhKGEYnrPos9mUoKqZfdSb9fVX3AdGa",
  "key37": "2xvzT5xNRk1HjGtC4r2CXdoRnAdToJeXz8QkGBmPNFWPrJpfbRCAVr2GCwxKqXYPoc9DSfsV2JNvWKX96r4av9eb",
  "key38": "4rKyVRhw6qSoqQQoN156yftoyTEY9SHxW24pDcHc8bEUHDHijG1QgKhgCm38r6NKmArqhbjKj2K9uUEps3tBCYda",
  "key39": "5P4yjWCXov5SgBPcniEkQXGvpfhmtPS7AJfQacehbKQ9SSFLbR3KFD73Uz7SyMUsTmTmWgrHt3XtavnmzLiw3ocV",
  "key40": "3gQENsXaVYa2KKFL9xqwiKCWY6trngMFPAUo3KVG8Pj2EuygLApgtaxhMzBDSbeSuaw6GJYv1FmhghNkEPUyHsYB",
  "key41": "EHWsVndq8RN3NfWCjMSgJ1G7Qcqt8sKt4ZXWzoRUyfYLJHMdEGRDXjUV7J2RginKSdQfEg2UEDoyG9KLTXuXZW2",
  "key42": "4GpSntKFEfDwibNuqijijdxJmSvC1jW2sxrTfKcvV1De3JEyMvCfwbKiQD3n951joPFbP3FeDrz9AP277Nzn298f",
  "key43": "3HzjxWi6oPYEU5iq2Ew9Bt2m7Q4KFrazFDJaMBZRNz5qxeafHXRvqUeaScR4x58Yee2pyZ2dKPmY837kTfYPQs4m",
  "key44": "AFP53c6yomPiK7APqMrYeYV69SP6Ytbouud6hPue2QwL994dBM3BzWrPbHEYmYoc6LBQhfHcFynAqhZJJqkjN8z",
  "key45": "2uJG9fJb2Hctbp7mno1D49KCqbVv5TrJjMZbd58e4D5p76ettHBr6XZManz6SiUbimkJur3vn4s1NezZ4Fppchf9",
  "key46": "4q4iq6JQo3TuV1ukdiJ3d1ytgbSSZhegerXUgG8qzUotdex5qcNMSURb5MyWEvtNWM2U6oZFFWrYH8AsP6ogNhMZ"
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
