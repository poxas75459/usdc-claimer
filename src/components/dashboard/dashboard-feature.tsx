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
    "4TWn6PLCbG3eHFYpPN2Vpw249aoZAV9HmCyVpBhCC1ytqmtzcCSaPr7EKLFrKCAzLi2vwiqciMJF4dHkpHEi6ca1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrAZx1JrBCUDXNFQZKEE9NnQw8uqY2J7tMRuzmqQQfEALwFsxSzPSivucmgt7THxKKqM2EQdibffUwB6fuSTGB7",
  "key1": "4mrYtUqDCHQxepV2z1k86PPLVQTMoXZHKFMyki5vfwffjYTVDXBBnWPLge1wVzRDe8agWwvCmvSWXvQhmNqFk5uw",
  "key2": "APCGmD7sDDvjb1YVfbgmGzSYsQkeqjwh5UDXUH6U4RdtCfzQ5E5K8Tm6sqLpLV9RoBogo7wWwaqvfVVnjUigXBs",
  "key3": "3oFNK2ofWHsWNPtkdn9vKktqJwrjQ9FPHKp6THiHFbikhD1tJaqi8fiuK9UYCbnWFF2yZcFGBhbTQYxiqMQmqCp5",
  "key4": "2tEKrmVRZRSoALNwq2MP2vZwuu49s5rK6nV7C8a73a6TFwYdDeMmz2ikNT6omczqUnMFWn6UsHJ7tVdnQ7bXmEeU",
  "key5": "4u8rmQeyyXxsCeW7FP4NzHUZTZM5cg7Q1ZMxhAp2jSv3PMRa9jVN8pPggdP1T6KQSo9sC9f7DojTTcCrQHv7isxy",
  "key6": "4PC931AiH13DLJ1QD5rUFUpiWqhc73dUqjBjkkCAfFeN5JsuiMjSjLrrcQTM3cCx4CqKGHhxU8BB2sCUGx3V5grM",
  "key7": "2NzrGZML9LidrPnyDQrtz751VVh2KgQXZwo4wYKLRe6CLJZaCdRFTPdaQL49VafSXAXPUpqM3UPqmfyquHNp636w",
  "key8": "4WqF1k6Evc71AUykAkJQTe6XR2yfpbDPg2nnBXVepPvHLkSLphYUkarHngPAxF1T6XG4ymqRCFkgN29KbGAG39Qt",
  "key9": "5FfQoRpVbXzgHELHusaCXTSxh5ZusuwLXWC5Cf6JbVau7pnXU2VvyxKmeuXXkb4ZrFjQHCsR4AWgxaYK5TBf1d1x",
  "key10": "4TBgw32J5cVGjvXkM9rpgBqePn4qGaoNznNBycvFTBWaPEpHdbqNBGoBzYkjZxD13kU8UVFktD5NNsjrC3shnoZ6",
  "key11": "5fjjE2AuWEASLxrQd83MqsqWQ7KPVV5Xdo1DybUJkrX3UPEBVwK8vh3WMeeBLF5hmCL6fnHuHTqHqudrdTwfVZmo",
  "key12": "5UfZH8Be4N34UbNXcgMwVrL341KqvxYJahJ67qiA8MjpyXvZXmU5Yye4z9ua8dpaxBnA1YmR6d6dWHsFRgSMLbuF",
  "key13": "5ANMR7MKA9FUznKiYH22yLMgaw13ZgkEP5rRo8oergF6ahGnWtgUhPn2DK12mRuFjnPifTBRyy118WRXRk3zSnGu",
  "key14": "4aGQb4PSXsmptkFKM35DQWmLmu3hZ9gMcf4DjxDNXqjhaqpbZ1ey2d7JiGeM4Htxk8bvy8e3tF5jafetibbS2moR",
  "key15": "4FrrbpjngyEfkqwqCQoqQKmNaABUUiw5eZs2wNjaUVfo5BE2ddtEtVcgytzv8WVxWht1qUxALoixG7kPkhbQfWMp",
  "key16": "5h5obC38weXPodRD26E5GfB5ULTVur3WFrE51RBqzhg4hTYecZMUtseVvffFbcSWAYZd2ZFqdczgFZUDW14vMEHf",
  "key17": "3mMoWj2SrvP7v38G1Zm5kWHpcZC6ugm8Ju6c7zVWRL149AikGdVuMGuAZaAWLC7yqKEVCVB3eGPPxmVEphDCHJEt",
  "key18": "4j8ogcczipJwCT2iDUaa78FUNBy28WJjs5dBfaN5JTrJH3FXfigSV99gUY3rmAGVTkPVXMqnyJotruGNdMWpbtzZ",
  "key19": "41z5fEWiDDRzZU9qD7Mi45hg5TNAcPxqfYDsZywYin3sRzW8UQMUw9RTXJcwb4Pq7LRrUD3UK2AkbeLtGKtZgKBn",
  "key20": "32ui3D6FpcXxcp4DHxfmToQAhsFyjm23Q4mjBwcNAYRu42u8vR3o2cUa3wMKDuFiNZj15a6on3KKGHeWF8JcH6S8",
  "key21": "3P3u71coJZMyPd8WaeF9xPrBirAkWjuEitrZmiYG3Ppo1SM2pb7MdWi7jL4YW7mL5qttGkfaDQjLdrzvcR6quJg9",
  "key22": "283Nia1Wa9bPhzftEbgNSy85QUYH1wyv7Tua7BQ7wrGnyKTkWLnrrU2qs2Hwy9Lnxrhhhbw5RYMvC13fRqycidSe",
  "key23": "5t8AnvzUmEKVYxkkeQXYvUJpZTJD8isdf1wZbABWE3xA36KoMSqmTuFDMPyBD6MdbNEkanCjfiyY563JLJqYydxM",
  "key24": "ZxFvD8zxXAbzcHiSar7uiuJTEuDVTRZ3u5FmyA6FVsoxo4XhQHrufoKpoW1coiEwoyEkR6VaKMoE97YPxWsNjnT",
  "key25": "w8ZvdfLxGFo8iEC3yo4TrSwDac5QEQJ2LjfQTCB9XotJmcaEUjKtWVafb7Vr55Vr6jQzQsq6sACPfQ1n32vCzNn",
  "key26": "4VAoMWiCag7noMXRm5xrURP3mB6Wco2B55H81UDxUAFPSvZMDQ1281Ww6ZNWkb1Z417qeGTWoNwP1Gx8kVuvH1EV",
  "key27": "61Ji8aDkAHUbB3EvhNJyMLqqTg6xoivxvjWGgtvH8pMb6RWSsue5U35fCPqSfjQNR7opS4n6yLPYtr75B5E2raYw",
  "key28": "2rBY48C5z5XzfKMRt77oNKFVHQTQXZvHV2ku2twtrXiRw7QPmmveCZ4P7u9wtQ56h14EATRsd6547zA1rXyHFBz1",
  "key29": "2gZ7D1s4Vhjh6NriqDtSMBUuagsGdf564rpqFvQaneNPnV4W1SmP2N6s6mpCpTXztHJziA3kLxD9pGHkMsk65idY",
  "key30": "3hynTbUmPCJUDWCWNfe9Vr9Ldv6eHSyH2sT2Y36pV7zwXR8LaVZfdR8iYpLPvcvv5JA8wmDmLBah2HHWvYVKDKM8"
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
