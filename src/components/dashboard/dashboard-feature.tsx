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
    "2SaQ57hzKgpWDxTasH52P8QH9gkrCyQc9rCxeMrycgg7tgXQUrwP2dmgyUFqNimBAt3Je51Fy29LfouqArrs2uYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAGaCNimDMfmcdKMTNjZq1rrXh9LT82LYNsuSBsvZMkBxzzAPTaAMUXs4sQCKNPftNMHSPVeRhrh7fqSjoMZr94",
  "key1": "4pprQn1jyzuLxEXStVKu9onebZBvefLsYZnTv1f5wcDczZcti9um1jGQ67KhrprFnkcC4DTzkYnWSDtqcXeLCMRE",
  "key2": "4kbhTuiizKZ2z1nh723eX2eXA74HYwzLWGDgkC25K7AdZV5SC1k1ZC351Yz8s1AXxsyus8htnMmzFDtTBm3ooZQH",
  "key3": "2TuoLwvgnxva3QCeHCNmNk2usKRNG5W2z7N4jj5SpLazECYFFkoFV6qZCscCVwjLkWDMy6g6ZBjPe83ideftHGm4",
  "key4": "2KUB1CtHaASkYWdLXQ1sqz3rc1TwRUUVHgPZcgYHmqd5XGYprw4H9659j1NhJ8JJYs7uKFU3EccFoKYDj71EoWrf",
  "key5": "Z87njzoVDSDhY2u477zNfn8CFL7xJAxAHvidpj7f81ypJ34bBhKh2pYaerQNnuAoxPDJ4Vi5gjUSKD1AJ8SHuYP",
  "key6": "4TwnX8T4WvgkpY84sWJL7K7oGq1RhyuLPvYusgFD2ddd81hU4BRkZpa18RNwJXSaXRxJGCgVLECkPURTwoqE7BsH",
  "key7": "3QSD27oJ4yg19n7XC6bR4WCHJmbVfDsVRF1mRcsbXKwCGiPCDwRwrNiMvTYfNr9rtFTpmHux7e8JvtmGb2KqsUb2",
  "key8": "3mQjgnQRPiGLPZxRL2ZUey7KtXVzYY6a7KXBctvaU5Rh48HRttJfC7UHUvkWGjyk7abLrBZJF7Z8dVjSRj7XmJiN",
  "key9": "31BuvcvTcRNRz1GAudg25exJxWvC5iEb95xRPHMLzNioW1eWqn9SebKPks7EBN1zfunbfnam8NJucv8wKunfjvN8",
  "key10": "4s7YL95fj7jKbFNTFFMaF3Dxa3podZAM7BTRE1JvAb2VJ9JTkV7GR7kwBEbcVn7DZeFi4G29zwS8qx1B8AnWFF4N",
  "key11": "KewPE15Wn1CzWEjQ4msgoCZ8JHKFSBFvxUtwnUhhyieRvmmZ32QUurkdZzDaZ4JHEKkLc5p2sysqhMeFe9mWFWS",
  "key12": "5PLtKuQw3YW2BuQavLgGeNnG7s1noX426Yf62ynrsuzQPxtqFfPXQ4Nj9f5By8uy374VogC7u5J8Lx3ApUqnfqNm",
  "key13": "2gnx9eQfRDxmLwGskQBKrcdUzGcx18YMUhpRxEHjiE4ozvtbJMC2pNcWzwjtfjg7oJxo3bEy6ZuWuCxx5VXcLYig",
  "key14": "5anSLLM1sVaQhHdXATe8HqGEjwuFuSYEhHPiVS3nhmcNDULcTLJfw6EUwDAHF42yujxSXiwLJR666DKr3ZkiCbwB",
  "key15": "BKeodDMEZguy4oKaHgYxdzE5oHWwkH3gzDsHFDTGFhthX5JxgAYQFpaZdvoKRr2B5gyUjsg4GQPTHHJoEBUpY9C",
  "key16": "2uemwEDcu4iYbWAbug29oahJfdbGJ1k59yUf8EDHg9nfCBskzGXdzHyxpKm4bHea7UyewYF8uuHfWbo681qGkFtL",
  "key17": "2YgXMjcsidTvBFeKkmUjPmbUu9YGx5RVmt1Fj6vgfJMgF4icdeLtvCJ4JjsTrRRUnK6fwur5vPo2q64iCcMiRWSc",
  "key18": "5YndhVjGemQSfLRoT94R24mH82VPE3tFCUMfaKcYUmZsa83UFH5J3TV2xw2hThntV8sSRgiXbgjNdp9pXxhELxjQ",
  "key19": "5FnTEdnxceeDvinr8zDGnDhuPJ2R16ZQA1dSS5JMGnzoQV3EdtwetpsQPM1J9WEse7MENd7AK5YtLKRocfR885Am",
  "key20": "drEK8uuBXJ7Pi4VMp9ZqaamgpDTmeaY2xRwmGauGfaosYUYBwNXDgHRv6Wdo6cm2cbHQyLr8cFNEK9cr3a276w9",
  "key21": "AdRBkmE54UAvVxCZmnmfUcUtQLxoZCBN9V8vXXyPUkC1TsGKCQqLebviwZoFa92PcQnz8fuZ84njtUPrZDGsEeL",
  "key22": "48So7WiByhZ1ehpzHZ3W6HGLktGQApQR6DJuZsAVUKNZi7XDyksuCnBo6Hi7MUqbzUP3JPAA8jYQcMSUszo7QpGr",
  "key23": "47eCKgmit8c6pR2zt63o4uiYHbV28qHEzjiF38eYg1jxUz82qZaCR46G45Xuv8jmWhEExPovHxbtdwwdcotB2Lr6",
  "key24": "64eiUwA9KEbC1VjPwohTVFbqNVBC59XdFJ5BLnPekUxfbbNaGw9t1RbMBAaUqXEuJz2f6i2aLXXcbK6JeR8vVtpX",
  "key25": "3GiWbX48eFq82t9z6JnzhN1evbGhzxTzfJfszgbaEikkLz6vH6p9aUPXGbLz9HLc7rV5ZZGfFECpooqQL5aHYuMV",
  "key26": "3BJfb8QaBLj9LagsLwkik96sWn1637HGB2hiMicHVrVmMhtUmRMGxVPrNiaYmLFAuj7vx4PsYWDF9nupWPp82Net",
  "key27": "3K4a7XciHAQ4AeiZmecf83vRCrY2hRiBH5RSHS7sGJQ6okyt3tqqyX1Y7dx9t1YB6JujpU5PYwqBmmTVkszEhFbn",
  "key28": "vYNE2zrnpQAhWeb85eBYW8UYpCZtKToKGDZiZUmNBLo6s9azpoqC3Rmbp4iMLncG7h6NDwrmW2c2MTkSSpMmUsB",
  "key29": "41xRGeHb6RxtLxct2TLVJBS397wwHMo7ig4yiKpcmgR5TENrQi3LC7UhRTxukGMJnMjYjYWQwduh9NbKogDw2ofD",
  "key30": "7xL2Xt2j7J1qPp3XP91f8oLRMfhA3srgchj9bQhmVAJeZLnrMCsQ8VvvDBJWeDhmoa4gDQUrUDMin84ynK91RAf",
  "key31": "4xdwaF4EFqGbXvRPoo6EmVXJd4NmWGhnQYjozeMsaFj2r5fnx19KmeU4sdWD22FibUMypDPbstuPrWxAJreMXZnv",
  "key32": "9tBt84CnYZYmbdTns3jXAEtCGgByHwi1HhCphhzQUxyWHWv5tWb9xNgzC8qQfzZSUFn1pfop2VnsHcXEJULz74x",
  "key33": "2xy4op5LK9TsHuX1HcTnFssmgnMUXhUFNyNxQNExGiYxrjG32PHnpyDz3Myr5NKof5QAZf24HiL3oQq1ZPJuV8fW",
  "key34": "5tXB7Rdx42AAaZHwrSiaxxy5cRj4k6AJeCoBXJkNsAvUqVdGp3aJAaSa2aTadF2tLVhy4SWFk56f2PWTxJNotknD",
  "key35": "3aXWmYo3eBnmqp4nnMCfSyUVhYJzmR6fWB9eREvv29r83PuhTb3oT3wJGJQPZqxeXQDD34NKF7B8u7gszgJ7opqY",
  "key36": "45Qc4cUQJJJFB3F7kJfyFMoU2YNTurTx4c4r2v6uk2usAj8J6cUkWQW83BFjsRavSH4Bn9g7Diu1gHN6CrfoLGA",
  "key37": "p4S9K4pmr5MLKPSLuvTa1U7YcrfV8HNgSmHwLibPzWnkuJvXvYPoTNGZ4zXgpGNyMPeJZ8B2idK6Cuv4uwzMjmD",
  "key38": "mGDmMGEcPDrossoms2i7z71xD7gtSAJYfskVnVoE8XvTnYQEb5WoKNdDgTXVzGX7oMbTJtWh91QnDZsGMQMrJHK",
  "key39": "3XyxvkLVkcKhgjwZ9NHQPYMWXvx7Xom6ZY51KKvbihjdEaRsg5vpiLE7VwMhFkJhMBQN89b4bwem1Z8meabWmWA7",
  "key40": "3MeTe2zZbDHtavsbBLVZBRLQroSnyTtD1Nj9fdQ6uMLyHCH8r4CeqvbWLSDiCvstbpyDGMy3co5FFiAy49XAb7Lk",
  "key41": "nxVuLJ9DpjjT6J9c5qXX993nTi3JFfvvT2cNy6RxsM6HK6urCoa4LN8E9ZG4JQ5qBJivegRUiDef5d4gadR5caB",
  "key42": "3opVykVPvj7hwXtNf7VZn34PoDf4kWnpz9m84r4xXLMLeBWU5BGRMtG98CUiDHaDihtfFikKzj35YmBLxQAPAGEG",
  "key43": "3seYkNeu7hHnSfYj5nJ6pHoSfvRVX4nBbGKifEKyxwRGMznEGw5NQCSrjnQHSbzVNAx5FinEUvmP2RwrSMpvw56R",
  "key44": "5N3FDd7CPxvSCwB7up2gmksGZkn9Ug3Y5jYSSfpoh1s9n33P8XkDx98zip53x4pNvif6CGtZDrjsyKWKS3CBW8Vf"
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
