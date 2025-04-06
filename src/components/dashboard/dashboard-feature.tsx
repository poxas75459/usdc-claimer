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
    "4xkS3TfXYmccNJy84tPLCRFNrSAao6xzySCMxUfdYChBpkK1G8vLW18SUdWJNRX87ythAHARc1JfAQPn2caMBimZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QiQcc6jscpiL58kRBQNPKy3ka266yCf3Y2N1xRsq8jVBiscjaSRWE5WjFDUekwkWnzJ9nTap5xMM5kQXZrR1ap",
  "key1": "3t5Z8nNhet5JeS2MDhFwMcXhYHnd8BsZHSNpoZw9zwaLkWAZxg98Ht7KFWjCZPPjtSfq8kHwC1d7746nDyMb8Wzm",
  "key2": "3B2xZtJuDSA9Dbw6q2m6zXM1hkuPXa5JLRHwcfa25fXn7NGrjw5mEp6R1bM8EwNUgu2sodgp8svtca5qmSA2LkGm",
  "key3": "46LQyiP8T9dCFswZFdjHCq4V9LSsBtdDHhXt9ndt2Dxftzt6iHAjNbSxYgBkUgzLKEfkBNgbf9koXkt25Ru4ryi6",
  "key4": "5TQyUVT5a82wx3eEg2i7tEQXmFodrdDMeBHxH3abW6xaKPkK6NRhtiGYWitVbtH8SnN1sBZc15RaFL2QZNhRaJHL",
  "key5": "K8d77grTWNRk3TPFoRFZAAg8LqUqWTGecSuyZtEdR9XgSqU6MmmRcrpfos7orKjT8ZNkt1Gxm7cmGBsBDnr1rrS",
  "key6": "3rT1HKB128ij8kN8PjDDLDgQAi2sir7LC3N8d2Pe1yinGgyczmiRKHnt8jfeaSMxiySW2pRcV7Z2Ufv5EQadyXNE",
  "key7": "61oAhqpMqTkxL6eBmvyZaZfSiMLJvZ1Tvo3ykX3EeZoYospmrhSXaofKcxNrMfzdqtxby2AYSed5Q4MZXfe62Y1i",
  "key8": "5aDcnX7XqeYixMWV4e9RBzp2GKHNFz9tiacQBUQPJX4RJuacmpkSWHyFGNRuRRDAnyx1TzUcvsntmJeKM63q4sMY",
  "key9": "VrYRERXkfFt9RYZBFP9zEyoySf1wdEBqfD1JAUM6RhoT8UqGwFxBohjXjAqyAcCR8M6cHUPfNjj6DNWF5NyT5HR",
  "key10": "44Ux1ioc9rugQaNg8fzKN8yCp3yPbV5vmqHZBqwVjUcfsgL8CdPTbcuiTqfeXMgCt8LrdJ665FGapigu7C2JJft8",
  "key11": "2XeuYSbAsHXU38tDc7RkBByUbWKNYvgTuBaD3Acmbz7uLoMRLdbR2xaFbkCU5ysDHU37wVwZH2jW9SeV8coXEq3N",
  "key12": "3sF33FuKVHMeTPXZw6iu8xWSDC4B55TnfBgLM5iB7arvWK8HwmY3aJJdHr1Y5WytSjqBBYP5JUwTc6q8JCyk5eka",
  "key13": "48mKC5WKpApwcnYZPeHEBEtKjPhVBrHxcF81bZBU8qDEJhGKSQfSo3Sk8sEUjQCwJRCpGrw33Bu6kSjDSmYwSQp4",
  "key14": "4twPhNz4kNzwp8koQud2jEMFZaqzbdD371GThogwkmYUTh9Gz8tjZFUcbAeDptefbti7tvqqM5T33Sy9bV1HCM4i",
  "key15": "2FP9T8f1mYuMQNx74dtgrtGJpbJsNe7ATaudVoQVnuCLbABop2izenDFECpCL3BKj5xHym1B6U5LgqW2VDMTynwM",
  "key16": "vK8EdKkLA7MDA5wheifE666yQLwAkcGcNHq6sJLfv1yBh8WTPo7d8bVSGCqh3Uf2kaUhzfAsjdWxqesE618QNpF",
  "key17": "1iPpspkk7Yi65qYuETgcVBiEiA9TUXeZoVqAAY8QtHpVfU9hLx3s1cJwT7NAKimwK2giHJMD7j5Hb7az81EgopL",
  "key18": "25L9dGk5oYGhavnBkzqpp4uvtWZicygwVQAXcs2MJHZh1dRA1agvg7mBMCHVJaJAN5RtUH1ctv4hBrZBRHAhKTU9",
  "key19": "2uPJXrpzEMiKg17qYgX7Ryy25sDk6JjciMMAVbmnGC5f2X9pvS5NuLG6Uud8AV7UjJ8cYfnc2tXv4NsSMRooh8mi",
  "key20": "49cnGBRS4kPnRPrWv6fbMR172xWccKHHB3ughSaZ2e7QeRkBAdTXGtDo2pXvNTVKWTMZq1fsaXVBVfbpCgqYZx76",
  "key21": "5QkH26M3TmD7pfQpvjhSUfMuU1GFp6n23KS35R1Zqwn8XRgFsTPTALP5AdFnomzQnSzT8NTRWJnLiC7dSUW1PT5x",
  "key22": "33Cj8KvGbtLHMwDXAqYSPEfAcfg3bgS6q7VtTbHPdysxfBdsiUtQCKZSQFUyRAKBSd7DTvVWyg3pUsuJ7U6cWfAC",
  "key23": "P7TYab9h9gNsEXH77Gs4Gg1WJ3FfX2gsgQ6CRTPye68TMGtnfVd8vGSWHWtdehgPXj2veEe7pnpRGnQwwUsFWBg",
  "key24": "4E8qtriVftLHCARz7ewzoQuso1p7S7r1NKDXTv8Kj5H6zxywySx57GS2xPbaQqjutrQxZ1HbkUaV8Mc1i5iAJ9c1",
  "key25": "4yjtZXswrzXcEmBF2d5Bq6HYnWZMwvWZPosG9RHQft7hNSn3YPvpkevM8KemaYgSByFqufQMJtNyAJjkpmLYtx56",
  "key26": "5mPfJ7qAWTxt4BJNzduJbz1Dhic51awf56FFWPBJuHJPP6c2nQvqtMUk3w2zcEA3vCmchNkKwiLxbSHmYkCNHtsM",
  "key27": "3YEjJqr6rigLGCvFVLsQcdyY89r7uRBTu69c5YqcaRXrZTUG6NQBVFRuSq8CZhupJeppxC8dGpEZWkuudJ8V33DT",
  "key28": "s5UKiYexmLUK7Ec3BtXx3CvrLHvzbUmc5m32gTfGsfK2mmMSHHSSTnzVQY2xoCBKHLxNoUtcNjyYabL4hCGce1t",
  "key29": "5oXpxxjR3kgRWDcKSKmU6B5fs8dZuieQGfGp6DmToHgvZfQcTRsb8WrVNVaCVuLajT2u5BMKKCXjAY96EZTpNT7L",
  "key30": "3MUZFxdT4UnmacJ177gJUHke8vQunCKpsuoxS2WtDGWTSEszM7potSv5hWk2nqyA6t8WSgXU7jgCZe5VAnQGkAkM",
  "key31": "2qLKKg4k1g8RDVZVXvsfT1U62hi1P3w1gyL3YeMQDGdfFys3d1nDsB3Xp4RXPZaqnS8azeZNDEFqS5HUzEqpPGWY",
  "key32": "5VC1FYU2mZ7RN3nuP6hwCyz5Eb1zU8LQrvjervMzgf28tCRnMGnGzzYcWNdRbhNSCEpqrbeojMy4fP6jkCaV4eTk",
  "key33": "bALvAAbG17HubTgY3vXnYTJrfbNAVZikEJAcwHzjLdCFgse964bzoPUfXFqc8nwsCJ7dJGfRhQaN2LwCbWHHUPU",
  "key34": "5EKAbeTD14iXz6bfWouAg5Dk1agp1ZbEZ6P3jTc4jzcSHcRZexDHgxDP4ozhBQf2PdWXcEA5KKH9kyfL3yr5D78q",
  "key35": "5e1pMs5qovdNJGCuiwyVkQe6S1wmDGcvaKhdYCjrbCgp3RqawAkeT4JUhU8PYGspEmqFbeqkZTLbC14wDefLdm5f",
  "key36": "4vFc6ENNxT9HHWtsefGm4AqN7WEt4LbdSqtcC2eEEPVp5d2Ps8cwpTKm51HNLWmqpRACQjzdcEA6BdR6nVeijnPe",
  "key37": "55F8wdEwMNKM63FbJftWnWV4LLrgCMFoC5mrQ483s26YioyUdc4BYKcP6NxfcSBTVm2egs3mPRSrtqFDP38zjsYR",
  "key38": "4KWGrxw7Q5oQaFTMhFA1TWEuFQEC29ZdUXtgu5nDQEGyrjzdsC5JLcL3FnYw56HEDuDvtR6SSkyuxPRx4yciVHYE",
  "key39": "aKNQfbFhCyhjikcMZyXwJKMsGbL8h824YQGDXykoqrpi6tJZq4Xsp95B4mRwWSufZGBgTigBQdb6N6ER7dwC8fG",
  "key40": "24MpxnWQnnfcBTA4NhoD6iiZdUNuoeKzo9JGm3vmrUznieqcZrof37w28hbdoWqKvYdnAnJTnkwrkz5ZMWh2ydfn",
  "key41": "4NXExSChepKNLoTVk2vE3qDqmaBPD8ejb7c4Cpx8UjWMxncDSuq6f5cN9cqxp7wfhDRr7arqJaMy3MVRzqbBzpum",
  "key42": "2hbsszjNQhJfAJYACbvftQSguuManAVudkZ2rjbpuBnrMAok4Ax3wjUgDpt5TZSHBaDU3BcMFZTA9uukWwE8RcdZ",
  "key43": "4HUS5v2BHBm3XvPaeMmUuEQ5nzBHCEvpDSbKDAL5ek9av5QdtMc9Bswq6dfJhZVsxoZaKEZVqtkzW6X12ThnFn6k",
  "key44": "28rccY2TWZcKSMNCaiuuhtwk2t7fHYB5RXpdATaTfcxELPUYcdaa5GXoButbKkbhBni5qYu153DU2WudasS5smFR",
  "key45": "4DxM667q4KB3spjioNRw8deeYtebu4rXnmBtcXyqnKiqK3bo4DTsW5H9zcpX2d6zJzS3xa9iPyq3vp9ert6ThwAo",
  "key46": "4ouHMzTd8HoxpLYFPhXpMe1CUwUPJ34YpCHqBDVoZsSxcQWG9XstU7fcMNNs1vj77PMmgFP6Ke9Nu4q7CxhtkcU6"
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
