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
    "oDQy7Uom9nc7Q9EUd5yayhC7ppDp8My1CKGYn7TSRA9SyH2RudHWfPSkXaHZf5G2tcznCzhgqPcqD6zBoGFkiWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zkTELDj8SWsuWDhrmTsnznaYZMXzmujE3Nxtnt98Z3DgjRGpFJd1aXE8EkdoAWRhFUJsMTEYwzk1rDFDL36xUSy",
  "key1": "CXTZ7MVB5gvxKs2GTgd2cKaZKtywffN7bocErj792Rx1PvfoJE69Rv2mBvfavJmsJGkhrJ5obJSZfsaUyEMiLsZ",
  "key2": "2USwBLDGXCVYA8eRW72QAi8fC3WTXgZfaWcsbmc2QreySwy2gXkkSmbybyCPyCu9TsB4NZRgFr4uWnsQhQcznQyt",
  "key3": "AHo6jkbBpbYFkadfhB9Fau5sCoaPwV2f5k29dfuTJCmESxHsDgiFmx16Xo1BUbH8BDKE3Fs2RNmwirXSHqSGSa2",
  "key4": "24tyHRCGNFTFRq9Nvp4hpxCm921gkkSaxzVVM5E9mRbaLMbFRSDi6uoj6Xk9J3rtfzfQRPmR4QtyDFsbTcPdPkks",
  "key5": "2jAzSiRt2j8kcgNE3YuGq4EYiSFdNQk2UWjbrkrzufBhaAr1ifuGveuVYCVz3hVMTABGnr4fcYn8im8zyU5r1Y1r",
  "key6": "SsP4vvC19mSQoU17G9iSWezn4dQ4LyKbtc6H86w7oDxJEqGvb38QPMMsF7A1nPoHFbja5gcDZ8wguyfxkptc33K",
  "key7": "3vz825BdYFN8wZhgEYdvi9LDwUjHD6qNLmjwrjkKuBumWg1Yb9wUX8HDzxvpfPrU7Ga5VnYwuT3sk1yP9kSC8AUq",
  "key8": "4LFH99QQEeuhsnC2qfqwFFievdffETExBuSMBiVCGGrgVYBtbh1Zfi8aVYqDbUu9TVdE91ciAxfEPYKHWJvJyXi3",
  "key9": "4c6Pe4zWuPKLi2Z86iUKtYnp3qfAQyXNHXoYvk3gPdwVGLTsyqFsmo5S5mHzQE5uuCuUNLbGZP1j47XghtP87UFr",
  "key10": "2gBXW3C6gHF58dmFSHL3eZiDrQN8awAMNk2hzsjY1r4MuDcMq735Mc5DsUUHkgSggN8Co5Dxicu5BzaQUJCCcgfh",
  "key11": "3zwuimkXJvD49GNG9mjSNZEroXTWW7d5JhPGA7t6yu4aNndVgKEf2V7X6RiqAHCoaN3crUTkvBwdewviTDwy6Jae",
  "key12": "aDaByTb9TkvkRGXyhfD52M9vL2TdKuEPcW3i1GtiG946GM6ygXHhY52JxUk1pikrirafFE9jCf2Ynnfc9dTHCWZ",
  "key13": "5i887sGV2GaPH48ZJonkbwzyGfUkTJf3RYEofQ8BySdzzRGRQbNR2MLAh6GYD7o5R9G9U8D2zBVSW4UMCyZPd4an",
  "key14": "3RGA3Be7Liwx3kGfWfSdA4AHLR17L3YGrHxrEHJz6VawWzDx3YjYurFbusDC8dqGZyrYfiA58e7FRCBhspDibyZN",
  "key15": "MhextodTNP6TcGPLU6pMAuxNtgmriX1jqUmMLnNbQrdY1si8pgLG3d6EoGsEigFkEWT4X3shYxRqHC4zXZA9fUs",
  "key16": "5uHR1eKFQFT3D27zPivDNNCDjHXstYdi7BKCwNEteNg2URAR7yA8PEJekaLPrcZN5K79kAj3dsTfujmZ1Ue8jdnk",
  "key17": "5fVLeLkMdUofM95baJHUVVDwBwfxGZNXNXqbLqZS2433WYworHABzfWoX3bvfpDBwo7Qz8Sw17SgHnRJFeXT1qgv",
  "key18": "3ZVodMWjydesNj79Q9bbKns1UWyMZaacWetczGeoHmByiNybJxmofVP9eQDcaC82wte1xpW8Bx6v1Hbzj38YHias",
  "key19": "eJ7gVYnjRz9w6i7MptoafwTbN5yWFyxKhw1LoHTy98gv2rRe4S9njj57voRW9xd2hybJAjkJrwUg5yz1pUWkG11",
  "key20": "Eg7wzotsdUa9tQmkXHmjqL8zx8URYS8PT8Ju1JoJVWMisQzghVNYVkmXDVxyxbWu6GtVzHD9BtQLyadoDkzprB3",
  "key21": "4rMLbmRQgpddbWxLBrMoN9hM9D4YoJM4QfMJm69BxYiwKxQ9juQweuhKTaf311VZZVRqAhDPp2B1tRQrgurQV3Aj",
  "key22": "3aKR2VsryrMabnX8CwDURA7usuzWt39aiqj9cyBppsmQYYPSEyenirGkHbUp23pSEYRiky6AEj5LdT18eYUtjf7e",
  "key23": "3pwampwj17q4UhDZav2Je68yGiGTYM7e9ojBDxiBk1sQPbm8bP6ukHxcD8cCa5BiqfXAviQkzW9tN1M1gEVeik4R",
  "key24": "4nQand2XCAhpK5kURcdtD3NTNn41xZ4Fwvvb6dmdRmjB3bVrxmAB3FDZ9Trdv7jA85o1mexR1BwwHf2mKSfzUBmc",
  "key25": "xNRDvSqpAY1CrWEsDxbrZmiuzpaMLbgvw81MMXyvXnmo8ix6Smc7WzFABywSQ8LDSdkB36aGhZ36WEt5AXffZSs",
  "key26": "4yLpsUUwymHN7Uuibzq7xFghA4oPNxXKWovaZguPT6WhaM9USFT8rJgHtMoy95gok3Ps3PzkqkkhFCpAxbLnnHF5",
  "key27": "3ALRStfTMQaSVLt8txKdbxgC7dVkQvepNbdvWwsZrKRieuAx9ZuWLUXLWYvaoTQg8jKpTdRRwGfCy8LuvwDQUy29",
  "key28": "66jgjKc2yVq97xnxkEXCeP52GSDAEp5AspJRbCyPSEfvnjzM7qdHUHzXHdRTcAunLe6i4Z2o8ndW6fCLxkXeHXMM",
  "key29": "2EekK4MSHmeb9teDFe2H122YekzFrEEwatSU9GukHxqGv1eGvzr2MUZxvsq1TuuWFDuZ8mrtVZRT6Z2nHAtB7tFo",
  "key30": "4NSm99GiZCuXyAgugnLqb5e5hLLpvVYLXEwaLbnjMZdLKYzok8qTmUuYg7QuT4EkeguCgu9zoSMvFer5cjAJDTV7",
  "key31": "s6ViBmqXF4pBd9Zds7j7hgAHELcBvSnmdE73aHjFNbKjDQPDNU984wobExw1Xd4PFhJdwMKrBqKQxWaS9rnopf1",
  "key32": "4BC3vubazYobYka4F5H34CpdsqowHWMMfdzzVQTKjjdk2SFDdCt9QAvRyeJfAzMHSWcDQaAp5kCEctKS1GvqqwQr",
  "key33": "3E4bEbkpZtdnEVvACkqNatRtP4BsT4Q3SonC3HtR2L49E1fYzgxsrUHhcYrv8GiZZ2RSHpreWkvRKrgGbQ5UZPWL",
  "key34": "2DJtBEou2bDSsbSRsCWs8GWzxc9VbnZMUtRsgqw8MtUW9npSU9dcbsDk5LgGUjCECzrcZJS25YvqkTAsVwQNZu8w",
  "key35": "2hzzv38WriLo2zCHmzD6uqrBNeEvbSGtRYSyHkE3Jg8X6TFBrG6uPz5TZZmPqkw7o7L8FHrR9sHPncEAQP5EkAWn"
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
