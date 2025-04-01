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
    "2W98gLcSosmzVcCaGfitcTYC1Xcw4zpHEAKpLSCMyUL8NXtExw7gPU4xDGH1FMd9o5FoBkhAogzcvNvonnBD7cWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxXofCu4AJpSWnjX8QCt61BDi4aQjG4bjuKFq6WgV6HZ56vuuTGo9UFamesTHgLPzMWsGUDunwNWcRKaJBy3oFb",
  "key1": "23Ax2hAnRggoKUmXxQZ7hvumGpJzo3HjV8W3jw95vnaBJgeVddfsztXA664vVRvTmLFaHL7VcNuBANRBoAEDN7TL",
  "key2": "2wweJ693toB96Qy4qsPvjEt76UDWn8jvw4Jn8JPzqYTNARTT445Mvym1cR1dUPkMedodu6LWN5eu1qfp57tLvbCY",
  "key3": "5sELUQaVxBiutgdfwbN9QX8aPF3XjB8AYsv9a63T7Fx9UwbK6bEjq9zvupogRTMw8p3hJKmffNNpsLAky6RxSU5Y",
  "key4": "5ap8zKECyjCseGEGTniWhAK3D4u4Acmu8Az7tMDMrFZmjt5Yof7zT7CAuDSkCnfxSmrnZKuRhv6Mrweq9VnCMmfE",
  "key5": "5D1xgE8qYfJpt9uUZPC6mPHSqYqL8nBRyEYFGSUchErNNFFJRPDvton54xD3iB6UBB6aCs6HpwZzuK8grs1xaHBU",
  "key6": "3TKUqwoyLWZbCWw3DuZubLoHxa65nxtbtvjVDGtPwYesySAdGajrhL3rFQW5CXK46gJQEDzydmYFvcfnZ81YaFRX",
  "key7": "4czZ3ppX4tjSQtmD2afo5p1abjybY3dsBeBZisQi5xHTVNgTEn7vuLALSCKbBbGSQKM1UCS4ibZ62Wpk6tnfqKd4",
  "key8": "2nD51ZMBc7vWJ3biB6afKVEBryNW3PjqbY1LURbe325MqQaYfFjskL2Rf3kk2k3zcXK4i7wJEommhfJarEzQBtfh",
  "key9": "2foSKoY8VcUoH8yUntRXU8oraN2yS28WsfcenViQtWxvGD8qAH1tLT7mgd2aySsaL5sKZZHY2UvFfr4jF36pzYJz",
  "key10": "w8pF7CdW2g91vAKhJDABmdBzfK96aR6actoJED5pJxyJ8orndGJVsp3tkktPTAsEEcUmj3ACmoA21rM55b4fTWb",
  "key11": "2Y4Pywpo3ejcgQzNchDEfKsBQ4jCF7xDJdxq3jNxNPePZiMmZ1AFritjis2xfzWVscqbE87szogVqoQE67UL2zF5",
  "key12": "h9FGTQweyYBEifPyL3uMdACgd4SNWfYauVjpixyFdgbAYkEuuCTbGV3iEA4YBdm47o7Buj7gJ7hcfQ8rSoVWwmn",
  "key13": "2rWP4Ziw2V1xRZjZ5TvnZLx2ZCySaE2s4wMWLtvJCd9rP7aws3Cn1K8zRUEfUwN1baeDLJgjKfSTHxKJoUWZSZbQ",
  "key14": "2J2NCFkCNzK2xjEX3ByFhMyJz3JNZq8m31T4zcoTXE6oiKrNB1dWFWp2yJd86y4KyGLsML4rwK9AvEFaUXSses7S",
  "key15": "4LneBrLhHo792GtfT5eSzyHHQhv9ohLdiKUXEpifq3WBS2GPd25Jzq4NNvgzjuNbyD1bvhf6sg7YxncTzCc1qxHB",
  "key16": "2LnLpaFJP5kefnguethT4yPWTb83rTWxV8x2f663fMEk2oHpPGcjcZ3n3igxRgCtVfpQ4F6bKLxxuCBkDzQjxLMY",
  "key17": "499RKZEQ4nctdqdBUyF4aHrvvLngBweJJ29GFcCBbNtbs1BdAnyzqa7tKnS5vBknWiWjxvEyuckjziXHcDrWzT4R",
  "key18": "YJDe3mycgEXkKhvpMKcsUjcKarAKu4eG1HyWsk33SQ7rdNsfUg97VKjyuRfbo7EAcpW7cmnAsjDANcm3kyy9RBU",
  "key19": "WZzQjonZtJ7fedkmbadDtB1yGNDypai5YFSUVBEGc44E1buHLCJB3QhbVpM6uvAkU8CwG3U2WB6kEAfs5cJpJgf",
  "key20": "5ygtAqSKb2VFASPs6BB4DZr67DkjUnCHK4upZbjvyt6vt9v8NSvGGpEjiUeyXvfVWs9n7Y8pJeMmwwVUN6K2uMuZ",
  "key21": "2tHB5koCbpm3k7Qha9sBsS7ArUbfUH4i5eeuJQtfirdf7DeQxacHESrwpcf1SbaKvXkKp6PXSZsFKUt7tjJcdWJc",
  "key22": "4NG34DNwV9Y1M522rWJ1aj2nvQVDHVjVPxWQAbtD4cPRLwxvkT7hv2mVT6m1cDL1tfzNXLaGNTWrCJC16UaUhATw",
  "key23": "5Wfk1RvRozhfJZaTzviHb9tKC5fEFVooYmKR3HjkV5Si37zU7C1Fzx9yexG94PbJhxPxBFLvvEGQW8PwpL718xM6",
  "key24": "5JD9pwHaxRbeQZE4aa8E64xd1N2AJbZkSrs6Sz4etHzcgTRKrycFdeGdXESRM1kLMyLArm4pvMVP1tBKE2TqpgRy",
  "key25": "5yeDPqshXt9isMVb8pVRQGPCnvuhqy6mQzekefkvqCqscLFxj37WF1UwEtRo2nykHRnAhrAunJcDnFg8zSqchZXh",
  "key26": "5bszq91Av8sBmbK4MUtMdcpsZjZpipRewPm96DShuCbUXwyzTCDEjrJJbNbS3z4U3o61GCoUtzAzJoEmPyVt7zGQ",
  "key27": "AeUK8KYj9RYQxV8p8nfGoGY1E12kRCZTVHhs7u5xBGShHnS8VzK9WqaNQURYDrFnPwrYn5F6sxKtsDdSfyZnace",
  "key28": "5RTpJptvwSocVo5Ue3KpnwVGjhrTGszdmaQcQGRKz7SDgUN7e1xh7HW2EU691XsSZyZaP5VQhNeLAPP53619MBMN",
  "key29": "42bMLxg8TqbiDFJD6iRci3eDLDMSyKgvKvcE4SkBCbZFwQtaCvVRZ99MxTFVkpXpoLxhRs8eEfghSwDqhvYsaK8A",
  "key30": "ybBbqoMB2eqgFDrd6fFNuyEvhv9P8RXyYayX2ho5R85CDEknJbw9tK8e4YEHuuto55sJw5N56Fhw748tCzdwEWM",
  "key31": "5SMvpXoK9uXQj4ZAhU5XHdPUM69umWXNkC7FoJxYhbYCPXg5RNHyAitVGU5fKf17eWTYg2WND3qPNN74jTD919Cq",
  "key32": "3ffYhmr4sLcnmL1F2HDNPp5d1ETxkhLizorb2zCWW2Y9R6qZbYWdkanzbkUpNcPhwAnxqioe7dAY5ntyuzDNs2an",
  "key33": "2SbhqJwf5pqoDLKMd7t91WfT6Rf4dUx5SmbuKQfvrymyEJd6vfJ9rvScndJPfASaAanBQx6gq98w3ZQUGBxA3H4Q",
  "key34": "41Q9H3qzovCiw2q2sPc1VbtdndAuupV9DAn1S28mN34Gxemy96rZdPckDLCYJo5DdUkFZiqvwurni23JwNwZM8qK"
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
