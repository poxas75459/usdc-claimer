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
    "3peLVBe9ydSSZW3MvKLQCBuYzF5rBaPo8TvAHCnLAPi1PyjCVNf5YXPao43tDRHQEiS8CPMTksfxXMUPC6Lj6p2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCSM2DbHYdJ4PPHkB9egdzuqy2bSykcLJaGcDweYLKMZTia1NMWoiYtJ5YenBUykRGHrYGs3oWiZ33H2eaaXKxw",
  "key1": "5MEfoozBc3NKWLJNnyTReh4D3uftWXTLBA76PrNatQW3wk6grKXw7koVoaWD8KT17kPHoWeBtKzpqsfSXko7Ma2s",
  "key2": "2R3tvXF9yBewYQk7N9wQ4bD9a2JkEpRQo4dQQLmzVxSgTGwE8SJ1A4amuHp9aZt3ho4uvcb4wQqSvw4BusRMX8Ss",
  "key3": "5sLDPemm1AVxMGkuK8MQNMS4ybm3c3GvrKGuRzvtbdE6tMBV3ogR9UTZpAS9F5v8CY6DGJHkHEeY5poof5kb1hMt",
  "key4": "dUbP2ymghYr7xSn96zsD1xMfUk76mWmZofQW84HVEaPnfp8nDPmyqzwXaUZwGc7EHg4pXxponqbUjUVga52R63D",
  "key5": "43ShrZWne4KcmHr3VcVj8U3ptR71cYSBkenhenZ9q6CUWtiH4macZ4hbdk4ey5v6YPhwPYL3ajRjANGcmfbsh1eX",
  "key6": "2VFgsQXtWNQQHVK718TWF5hnkbhSKpFL9CNxiTTe4sUSWeYs5AKh9C2zPqSeoWWMXMQbLg1JhQE9onLiXRSCBo4G",
  "key7": "2F61n97xZy7uoC3kmEKUswjF1i1AzJtU9geGt3GrYfyW2aNMXPkEZYkZttGxZCZReYUSCFUeHkA6GkQVqT8VacmX",
  "key8": "8DmuAopro3qbViek8aVYvajQV3fe6wS4QbUeZ2U8gNWEHjJgPk21CD2Xck2WBXCooHgNqbFfbNT4BN3NfqKp8pm",
  "key9": "3xcisouRh7uH2NjoCA86PnXGsyhnuwpYFGWwPtQJhcwoYP5oFvwDpzTV3hLKapSnrE3oWX2yUF7qV5PuH7XJvRAt",
  "key10": "5SgLrPN5HFL2c65euhYTpw1Z1vvfbh8KEZ3oujwFgsMpQFAVM8odZpweM7J2cQATFE6Hyx5yM6ZdiS1pjjKHHWUf",
  "key11": "C5HFycHcj3Mx1jUqzRYxEnEK86xW42M4uAevnELBhhMJFAw1dLaRZ2ishZSsZqZTYYLK3dngS86qCYeDVt4hLZS",
  "key12": "5CezZWwxGLbQjz66tjcZoAzV1v2Wqk5hj3mjmPcQVmE2cPWgJzN3KkstzYdg4MbaVGuowLyqHr5DHTdqyHZ6fQiS",
  "key13": "wsPoPLVL187DwcuTbAqbsFNn7e1euRj8qAk8Emixyaj528FWzPYLY9iTx21cJv6pzaga5MzBtVCSoAspzvkhJBb",
  "key14": "oLsApYmqKJX82RJj9Ae6Rv2wMQMd8p91daxQvfbAdw9LenAN1pVVRxb1TDKJ7xduMfnDBM2aGzGQ1YRwbUBsyyM",
  "key15": "4ThgnMp1S8rWQRN1p6WFbGd2XdQjSGcJ9pqfy7e72BQfTbuTRxMTihDeKbfzQ96hwGtRSzqZdgpGMfiP7SjajYAS",
  "key16": "32ya1f3m97eTi8PC4iJycMzZiVfTS7DT7LfWoV71bYVxfggG1qbnvnm7bL2ktyCnTahFdTUsWhaL6Z6AcLfLwioh",
  "key17": "39qUASM8pvhUWoYzF8wPtRUqa9xmuYUvhEm7aStnikkB33bY8XMZXVwXRBEfbJh5oRUz7f3sA57P5vVsCSTTkjve",
  "key18": "2JY1UgK5RvvAi6hPgvducAk2T8fYbsAnYaLkfBLD6Yok9kpQcXMcnuDszgCSqhBCyzBkencrMDMBkJGZzLUDM5xP",
  "key19": "4mykdz3h8RsQzzrRh7hCYWM5XZMeioc94ADU7ZtTpqHvL4pcTjmd9VNL47yyMRaa3tc6ccFVeQzaEqF7AQtgtpwy",
  "key20": "38qZCQFDnWngxD5eSAXirbMMzGtrjq3YAh5iBYiJ7fdhZ2U2Q2ZQmRKG29Rmhzqnyp4bjPk9YPzzQDBGMnx7F51n",
  "key21": "3SeCChaHdeefE29URGmbzK3GJDynshhQFxsDoE8iHZEH2vMJKLmWQr2tFHioABfVbiJc2iBky5uAAKvevfEch6tb",
  "key22": "2VauuHnovfy5Li6LkABLBBsPHfVz5SR7Efmsi5pbk5dM1fnAQhf8jiehhztd2GKzPQNSM3NndPfPAP9KdtqxHDgT",
  "key23": "394DsaqnnMDwFHcpEseVxjSCfjVRt4qWtnLJ39Z9Dswbn1M7UaGGBVTKbjJZuoqge2BpNSt58m1P7y2tKqw6DFQY",
  "key24": "2ptZeFjhg2aYmX8c4QC7rxKkfxpUmypNq6yJgRRYtzZGvNfxEntHGSQi8tuGfQGyqyqthK9bGajpCTvSkDHSTfPr",
  "key25": "24cMo44auswtUDYt3svdpubsEA3mp3MdnUHbRL6VDU7igZHK7sukD5VwwXCSQHbmup4re3FSswnLmt322aLCxu3i",
  "key26": "2ybrBQS8V5PYVhm9578BRAUPP6YR4JsnXEeYUStR7UKmdwQDAhNG5UhRt4QoLg3f88jVJCEdib1FKCJfPhiAdCo2",
  "key27": "528ixs6q8EEAN1Wn25d43nH8FR23jLeTQ75JoRF82UPuELbnNfvXsjHRPvXtYvpjmf4LyqmFT6BESNNamyK6RqoF",
  "key28": "4oLtFNTNpiftt1f2J88x9dE5Qgro95RrVsT8TiaAa1d1QGxMBA3EXoLCxr8TMygSfUoZAFhbeKHUtry9V6YWX8bb",
  "key29": "3uGt4A2X85YBs5yjVEj5jqxkqVZZk6TUb44kLjqGsSsrUi6kAt5FZ2dPH3ekTmoEJhNM8d2Xg2QmwFz2VXx3LAwG",
  "key30": "2WnVCERxAQDHBVJbFTKHfC3DLqrux3GUFcYWWMntTzcaY4UujWb7NBt3s4wwBGPcdzQhQ47qvcZ6PkwCo1PL8PG5",
  "key31": "3XPbtRAKnoYwSYMFexjdiQNHuZpnGpoLxsuAX3DcoANTNHfMNs3FjKRtXXjsfi3VfoSYrApeoPY3vVriBr3kKuEP",
  "key32": "2rPF62wKH1WpVkC5Zq7qr7U75V5Ufx3nFV6v3kpbfN9DziAnQ6Kq85pDb5F3A4VicdcTuoa4jc5gkRTrc7SBvX76",
  "key33": "2YKy5fcAhsML88TF6H9BxVGk3bYuxmDe8gHfVnN8sx9YegD6HYdBwpmXUjBb5Bfo9MNV6biYL7k285F4ZinQWyWd",
  "key34": "2Z6U5D1TTNr5JGXNvAzayDkL4jKMjTXdUsv1Vz4TCTDFCrQRix2CdQkNwJKPLCGZJZnPf7aRvgdxcAz8VGF25apw",
  "key35": "Wam4gnPWv4Z9hNgkkJ55z1CB7V7gSUPtkfMZJHq9mGAyforyUiYQCCMyngUW2vgvGdoY3pP9RXsG6xaUvBZQTDR",
  "key36": "27oMTpjJTJsqD3zgRCCpfziTP7CtawWqV1fa45PRnyNKF58QMRJZ6mS13tbedVZWfDu3x6Md6NA4Gzm8nTBvHc3p",
  "key37": "5uDaJDKVsK4TVgFYGgtWsuiJrbJ3kELpKH8XXV9nEiEt32BMqMt4HJDxLHCnbrDvMuJZ12aDCsUc5ym3J7qb8Gjy",
  "key38": "2DY5FMD2Fm9bkUUkou4gRbRFtJ88eegfnYHgoLmNh5PCfAe9x7W42VoVm7r99aaE9RMwvtzo9tFP77osSbatp3qn",
  "key39": "2racZZn2e99k9VEkHazf74d5goUb38dkLhHnuLZJ4rB2AmxvEG8oMrBecoHq2WESHfnUiTikQxuuxTzhEh69iHpH",
  "key40": "xAaou3HYQhEuR56rh2f5cdXgpkS96GbC5oaXL64iwvVtw1oyHaJRh4bjqwpJAULkfvFPYALyRvB3n8Yv6uD8Qri",
  "key41": "5BpjFS5z2b36gFqinyn269Xvww1Cdgw9YBdczyAYuFViprvFAVCDLx6G39AoR5o28otjU7mqWZJHeBrjVFVqWyfC",
  "key42": "3eLZxMEoQT9nSnkTGfRjw6mZtMJE3XUEFrWj4Q5QLVvVrgEx2zqCfja4wHFtui4xehahwkBccPUVyPfZvfMjMvCy",
  "key43": "2VBKspqAUf5wMXRJAcUY5B5nfZ8b5uVGnVstYk9s7pHafGVfkjuz11Jgaqs7fEHpoVBLKaKsgSaoMjQ15uLHbWEJ",
  "key44": "4qPu97mf9JvPBQmypXohaRmBUwLn4XjaEZ8n2vD4ZNwbNJt1cYdafoBybyVNFmcRqnQGi6nkfMbD9hPPVPfKhVF7",
  "key45": "3BkZqEtZtHECyBvqysGBX28S7Xzhasz7uhvgSbDS15mPVBEZumVvmXSMKgpbMDvWs5Y1T15A8idgAGEXG2CTVTf6",
  "key46": "267VvQ7pMZzJoCNzn6mz2JuhSpE9HzWUgVp53owp4kjrHJTGUxc95iZuUtehK6WmZgXCG3UAf7UKy2qk6JU2usaf",
  "key47": "4dLd6p8wT8qJNpbCpCDwuagoARQzuxHWGzSkY2iDQmDKM9o4ddah1jVsR69jnGZLDQybRwUajvrDH2figXc4SJMj",
  "key48": "2nKNA5w76HPondvmoR4W8NvBc8VPvhZU8PetGzeYdqsLmXshdU86UMuevs4RnVrM7DLMnefjoo5X7U1sezgEcudF",
  "key49": "Gpfa7vygm6A58znLNJawYasvars4AmidRj6yJN5cyD7P3GV1yLgsnaaHBQv6HK4ueVaZKr9hccsuHAxfSoWJFkr"
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
