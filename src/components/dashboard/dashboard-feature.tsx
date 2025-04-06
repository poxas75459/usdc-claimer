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
    "3XrMEXWonyCyrgP6XQe3MTACHSx2M3Ugwn1hf1vJcwX6Cd5xQU9xYAm4us48uACmfmEb9vbSQp8MwHwUUSzmmLm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ksh7CEAerP3AVXS1d7QRefqGAHvTURZ2hp2EJk3CNa4sRaTRvRqVD7VRm54q7yGDAJHTJCFotWvoBfyKi3YAkAh",
  "key1": "3seKcEhpCn57U7mHEgqgfiDMJnTfjDJq1RjEjuu4x3foh4VojDYHWoGtTKhNozS57FHBkkjMbbjNPw8Y4Kojijzp",
  "key2": "R7VVK3vLFjat1NEuywN8j2qvg7qBe1AzKak5p8tk9sHGwB2gmfejtAJDHcsCNrMjzceQipD1q3q8R2eCnb81wuR",
  "key3": "3C5A88DD8aRspSkQs6jXZoJWip4jGDzqmdJwWGfx2GgU5xMDVMqAFpkLqE8y9c2QypQLwvRH117vRsifdH5h3ksm",
  "key4": "5m7Ky9gUkCmWu6o7J8BAMztwX9csZi7KZ5ErDSVwPcsWmtya6nexUn3j5NQTMp1hqcugM1QAQpkcGzJVAghQdh4x",
  "key5": "xFn2TeYhihNo31khAKK4nLNTBjucN5TLmtcVaFE5367MW97BTzYTZCHRwEsCUBTC6vWPR3if5P1EakuzVs7PR3G",
  "key6": "2599UZ88hYLUidaqzV8cq5pSTbWSGV5hBA4khV8ogHeqcTeTnKrNePUPRKYoYmLdZ912vZg8JPZpx6yhGqxBMqsQ",
  "key7": "3Dt2boSEc81Fww5UnAz6SRzUdvjJGwmuAXgREqhFM13zZYVPAyC94xDNRDm9ZiTtNu7vEkfS1xhnHWtbGgfELAkc",
  "key8": "4KJkmPb1j4YHNQa2XGw7hMgdHanPPxAGyZ88wb4v3Lau6cneuV1HrCPNM8JynLueGtCibaCgpsdMZ4MdBhNfRMEy",
  "key9": "4vfqaFDup7wUixCE4vftzyfUNEj4xo5RsR61FukwtWA3uxHyuNzxJGqWVbDysZGCUA3GjBGijaoKAvpuyMC616h7",
  "key10": "5PBTF2dfSWtMKiyU3yLHNSYqghLvAPXGjAso3SbkQQDETWeXXZYH3ivpfXqR2hH53gbBaM2VNhhq49QDRmJni24",
  "key11": "3ycYm1hRakfhHweH5Jx5GsTN58Xxe9JBjbuR99oTw2NpqjtJzZ14SqkyuuqtTTuYK1GHbaEaWsqGY4J4Kn29uwVb",
  "key12": "62dRi2TKTWfKvLiTW2fipfA8SUy43SLaVZV1JX3bfdGuZndBYVQsXJR1Jb9KSrD2KhmzEwXBjn1bkJKcaWBQYUSz",
  "key13": "73ehADSfvnikcXRLhzNU5rek6rqztCQLqM19zrEKFy4gegQqYaBno42bn7z8Bc4cP6dCYqHigyt1JKmUgqAF7Lx",
  "key14": "yqTQ2VHLWKpCuckNAYALYAGXpdNNrFeSNtCRFdr17uiWWydawfQdHUazWuvCmFqVndRb7fYErdn7MYAHTzHpv2S",
  "key15": "33mP2jMc9bkL6YbcbuGPt3ke6WrB8B1qDYJdtqe97dPJogA5sZ68fFY1i7UiqexHjZJtKnHvhCgXXZtU6oTNhHRL",
  "key16": "5MhyLFyYn1LrAxBhSJV5R15y9jKnpGE2LZmaEXmsr8XhUppGzbDCeDGqkkjDFhxGsM9c4pQENvBYgBDZQqQFhGKH",
  "key17": "2jTREGJgbXDkKsQyWQ7Lkn2Y8Kia19juA5XgmWfuqKKQdvW9ieV1FYRJmvNaWbD6rMSc3Q1qJC5LJH5RSnsTN2K",
  "key18": "uTxwfuRcYsLepP3ivVxr8ivvL8EwosJQ8oAiRuciSrSWhHTFZpJvioVJ8uiS74QoW9kHFk1hkBd6Q1EX4bucsZe",
  "key19": "2co8z5fVjcopNhacZePdMrcJ2bEPoi2XMLUk17ntpwWuTJ56aHsiJiyYdLm7MQCEUDbWeSJtHesLwitircQMHChR",
  "key20": "4U72nkHVH5rXPRcVS1KVBCrZ7HWxyqLW3WX5s8bpMRtk7rzjawSp5nkUiuZcrw1Q9r7qSGZxdrsagJg9xTdSULp8",
  "key21": "25U5eSDqRVUmbnRsLvVub2utPQssZDMdj5knhKQz8PoMUkq1vrGfrgGw2m78z9WbzVgtYzKQGqRHewxTCdPCGuxL",
  "key22": "3DSJugg5bdfCtKY4ZjgtUrRH5Xo2NJXreD7CYa5sWzv9CB1WS8RboyV2KUWkbtfEDEhBnSmCvw1ejdnRYJKH9dYm",
  "key23": "4ov3ssg84DS6HwFGS5rszpUfSjUSXWhaP8FUceyW6mkJ5Lvmqpeq8FcbtyBfQmPzmuw6VPTqTVZU3LGBoUNmxgy8",
  "key24": "2nbCMCfwSgJpHhNWcaffqgAHVf9345zii9EEJHT2mtjYEb6qM7u3CAKJMhU89wFuewko6jGHYATP68szEHEVfkbZ",
  "key25": "3tNe3uG3oRgFrniyhfojFDaPS5veBEcHLRgyPxVED8pGtWpDwkpo5SHoqqbrdg7qRiYBFiHu3qkN6LSpyFuVpyqU",
  "key26": "3mXTbwD9ncSFPGbvZDjknD4FALMt6p8mdtbcoGxMUnybHhRsS6hAWGgvJcVKtjKCdpvAR4VxjWztzsGUFVFixb5S",
  "key27": "3mMwgCMPVWCTfFW83byfiLj28bFJSKGU4UaBqfQfW6qt1bAfEEor3EE7VX19FHV3AfEz8eatN6GLXdvgNW74KL63",
  "key28": "6EMFFTAdrh78BwAf2JoKXzEmMiNzuiC6KU2UUEH1F7z7oEws2fx3uFGguTXJ8gKaxWhyyBeWgaAybCg4RWHUHhw",
  "key29": "5VHWVfKgq1RtkkbDCN5PbKhnCQVHN29ciq3Dv1u8986VmKu3LjkeuvLTRhutUtmLGRGNJGybGkwKSE5xgA756xm5"
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
