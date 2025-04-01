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
    "kyHx848rwUY4fav6TwUzhX9RsRf5UwkW7F5d47F16tmJz4WLYtJnTrfkCKpf11yNbHYvYEUoLyWpNKrSijQERAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYm7bVF4yDZof3zdu9cDEhtumRq6ZXyuC52XdsKEgnKanajmXU7XoP9pRf4LqRU6aW1ss6NUfomMUhJRKE3Q4yt",
  "key1": "5d8X1mdWrUEzhC9HNbb9b956DPrrzHAsh6bT9FnVqzBRahBtcpndu78H2qdRZcw9xXhdQh4VVfu6n3TsRVJ5qxxc",
  "key2": "bnKR9msKLQ5reiM3tHADCkxAJQ6UNuiixh6hzTmXfivDxwGaQ1vAdAXMSvQYdcWhe2LBhPDL3mnV88EDAsRSe7n",
  "key3": "5NGcPav6oQmTfqmj8L9J1bewwbEN9yHWkqoeMcEGv1LUvgXsXYmW4t9zxc8UgQ2zz46j6NvTtxy37xs8QFZZ5pzD",
  "key4": "hWqwZw4oVzNvZmBwHPm51xCGzVWA3ZZdsKLVGyQcFJAh7QkSyBVVYKp9hkCJhWnJg9t74XKozjcNjg6G13o9cGB",
  "key5": "4HMcPmeiRMLnABGFVSfVPoFEPXw5gUP5u552PVcBxWik4BcqVedCccVnHaTtKAZT9n9mhaVCd76tA8WojEETFHhe",
  "key6": "2grTBukoS676dEdMCtJLT6EnW8n1vr8AZoTkTuVWLD4yeygEsMkyKejY55R9MGzHhNR8dP2hLkrykLXd1TtpMBNj",
  "key7": "3aajG7EKnLZKEs2ujT7RQBcuxCfQHkCuh4XtuqCzUQZ1iMmj2p4fDRj7PcqZ1BDd5N7ijJFi4MFBa5o78vFxWh4u",
  "key8": "5zNVcBASkvajMDcbfj4qXckHcvxFP2pqVKNsg6c5gEk73ertouQcpveCU4dm5iUvWc9LgdiG3rUYiWwv3rbsH5Qu",
  "key9": "qxghMwzaeeDHXBzCqjqPgcMCqnD8N7rwAtMTu4nJxiZ9DSGEAjdhxQ3oKhjy2vVUqthZjmEApRgxMajrXGTY9GH",
  "key10": "3wU4nMfSB1F3x4B2TokmtLDE4QAEH2ajCUsX12HDbZ8hQJCsCk9GAYGwkpqAa5hasn19mQQcrxwChGJanX6hztCy",
  "key11": "3Z6sDBRqTZKUJR4foxF5kcVct7Udjns5ypc9P9Ueyfv5FFiHG2WGaojFUbHGcHZqSQ99mx3z1QJ1u1WR6hsbqEav",
  "key12": "2PdLhoxuPg1PbQuQuAXS7a4ZXBqrUS3vJVrXSRhVTmKaEP2A5VjqZieSQq9BfvosHLyoKkMrFxbeD3hjccYZYEe6",
  "key13": "2MsXpq8MTpoMvwdeMJVzwZdTFWvGeH4PL7BZ5w2ryKy6LiafG3GqoRCUz6jMYLVckNmtjCLr9UgdFfgjunAGFeGq",
  "key14": "5pLMCQKQfYg3dz2T2QoqGeyGL8A4k3dvaZG4cZirFsUCPAWgijun2m71uaHg4Rd8SQ3jvEhE5AG7qmx2jDb8A5kX",
  "key15": "jkdj9AAQi6owTpoxbUNsvJvd6cqj8PcUEbviAdouvJvQSTN7bkEngqKFuK4omDiRuBStMCW3cc5VoNHsafvApgV",
  "key16": "32qLz3MYgACXFULf3WYi8z5QQDeKELhh4UzWrMi1NzzeTecZBxXVD8dbhoEp6ic8ZGG2WCJd56iQ9LYMmz4VazNY",
  "key17": "3RrZruNBZmGS1tWL1yVPnWGU3oqrWxAbwcYqCm7pjuApjHaZnYX88qt6y4pWUQLnHUW5gTZwRo6zVdHTLPdMmrEH",
  "key18": "5FSJg67aPcG78LtHA8QJE33vkXiQrbaE2CHnLZBj53TaGuu61jiHBT5oDyFBx4EkhAdEhEuAjMa8azyyBwngMgbC",
  "key19": "3ZAqo6uYouhvNt2bEQQqyY9zGNAsPzvShKrEiaBXEjZRphU6kcd5eSJrVaahj5GEd1vE5gWFzgaGYFZJPwj86voR",
  "key20": "5kyoQ5GDLCvasBRiKzQmqYMspECvv24788p83RBztM4p3EFtwFDsaG1Rai6k6AaMuAmXkNFJSLpTZiReDyyuVWPY",
  "key21": "3FeQET5qUUi45DNakejaockoAMk3jFwNn5ecpLJTWEvS6Kux1NzYHCxGDPjiKZ3iH4MTSHCmkPss9FzLj49nk6Ba",
  "key22": "5K5536f8gfcfiDKtyiMFCyY5gVyo7FcEExwBiXJT2TnpSUvfCpCXBxh7iCDFnvbsiuLb7rK99sLv5Hnvdu1yjeQW",
  "key23": "2R79vg9GsJCYA5yRdLC2FGf9h514HjMLTBvSMokB5KT7FZJ3HWx1Ez1jsoj81bdWJsn5tqLh1jHioqix8htMg1Nw",
  "key24": "486BotHWtG5pUQcWrxcT1zqfmautuMucP1HVvWveaSs9Eei8gKiatVzWdqYhgKfQvFCDuHck46RPaUDLHrAhfY3S",
  "key25": "24nL5fEP1qTvZfwRDFENpH1HFLbuxy8Y6Dm2EammprXEoJpVtc1aHdD3snKPQsGM81dhi92uc5HKm4LFdUf18tB2",
  "key26": "3NUytJU83BPZLYUFvZAXCgFsX3NMUdPMpZSqgbZwLi5teAUDMm2oKz14SSkVu9w7EVPdX5xq5YFa92vVvJcRC9H7",
  "key27": "Q7kFfx18HtiW6FwwfWrvH4eTYooLaRSh9L2DXvKVHagCSxNRraBMH9hbds6fpHAMg3c4wQSnsa5iop7wRd5j86o",
  "key28": "4Mv7J1WcTezWeXVMoEneBwS1FXavbJmaH4r781YGBSmXusZrPkh4QPHDgaPXAhHSMSwDwtDaGmvAjTCRQYSSpvgh",
  "key29": "1dDB6dM7w7fax3gGhnauSGVttUPHvdFSVmiKEyQgJTT1wSAmg2JxUDH4oB4aXMGXZ6781WgDR7PZKwDVr6avvHP",
  "key30": "3z4UcM1dbDHkRf2mVSV22kxruwpgiEvT48yjoERNwZbQdumwRasQnRYGr4MTrUgwz2QQiUwS7hcqfBSYbjpizuVp",
  "key31": "3quP5pyaJGLLXfAFovfBPFwKPfpYh3zKL8hxA81D74S467VKFiNrMGMLzYiFPJ2xLgiUb9g6BhFqADA2g25iVx4R",
  "key32": "3Y5XELEQWtV259hTtDsYgYFnrUQfp9yzFmt68JXAaNYoJQJPMmGdBUFLNAJR6G3Rbab7LnpbsdFn2Pf7bbX1nfmY",
  "key33": "4WVqa1X29mFdWvQBrg81wMT3hBGeChzkpLSmxF9MnbTR11eG76jUdj8BQvDjiCP8VkzLNmhsU5g13eMHfD3ACTpk",
  "key34": "4wJyqwFjfHKgE5jMs9bskFZtNuvXCq7yjxMu8cEQFZQQFRspNEsd2B2DojUv83NfmFv9i7ZeBT32xPkULiWTme2o"
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
