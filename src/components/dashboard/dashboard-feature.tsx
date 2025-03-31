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
    "67qgdtJqcFq8qT5RFSCWRHLe5D9DfbNwjEQ4NRswskuH1Jg8NzG6uFMdpZ9bnn6P6S5HTsH1EeSAG5o7ZTYrbmDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCjU9D58e5oQFJkQfET9rxUy6pgJXFYgW3x2WgPVMZ2mGKxoZh1GSMCQ8mjXu2eYaDdVwv3KCWVygP9BkJ4i12d",
  "key1": "2RSzoqMb5Ns2WoS3NDZngEoa2UEmuLfSsNiGWwxj77jGtDwTLsm77fok7zS6BDKrSds9dFcaNHWptBD449pyYZnG",
  "key2": "4Zn8HkDd1vtS4vUtQ9yrfS8hpgjWg1fWkavwq1tgRG74ZiGQPFyPtzTfcJGz8ykyYGkz4DytBaThYQ48UjhXdTpU",
  "key3": "5qRnq31NAbH9z3rzvsvRtGjRCPqMZTGbPe6PYyyEsU1qwvoM1PbcyyC9ARiRMVvSdLZsNXNCr5GVYRj6BparnyQj",
  "key4": "rheq57Np8EzsNWy1eyzDSQevRArvZD2qBQiBPJamxxW9yPr5f789TQRQWoyB9zDc2yGyrDsPkNGEt1FxX62yvYp",
  "key5": "4YeNzDn85HV4dgLrPBFhjcHuqhbt3nhgKuzd2k2kisjayznQdGGzkEhJF6vbNandBAaajsmEYCwicCdU4jXipaM7",
  "key6": "2SZT7g4xs77rbgVYpERyAzC8h6vHQgU6uMH1up3BBntdyLADMM6Gw7BvFSPFn5k7rdQrgzGL2FUPa5HoUvuK98SP",
  "key7": "3aWMn547o6S9df2axTgVXX6to1K2GChF7EHDaLL9KvryoEHaQGsjbS9qW6uAkisn9BK2LW7Lt5tzC2RmaJ7xyH2s",
  "key8": "5gko26hJZfhSfyaH4VypoBGWxKHsZ3CGpucMEEJDnooe8wGU6gNJrZhw4psNFjQdb7Znevgmj3vqumjLg9gjJME",
  "key9": "3JyaUR4NDoZWR9Eu7w8LXaUKjxgkL2hKywvuFWrBWBNoBdK8MCj3CWYoNnnP3HARQxW4hT6N6Pbx8sa6yq4q2jfC",
  "key10": "3hyPXmTyeEJzRFVDj7RwqZRekMSiqbcUV4ZqwtpPF7M7cWURy52yfwQyHG9Vy8aJBw9SN5z1ZrZvg6TiVfJLoBRN",
  "key11": "3kmPD2PYaiZXc5Wt3f7ri9yJNvDNetAy5uvsBf2zoEYHPyVdtKbsUTAC2Vxfdrb1qqC82R3UBtkwhAAYjsBG6h77",
  "key12": "4FfCYx5Kuz6Ccrfw4Lcd9A7ts88FgDGM6MkxXh2eUQgyPpC6fs93RcDHdL3AhsmjagiQgd2Yt54iDxzrEbvu9DPM",
  "key13": "2WX9BqvxEYMnGpS32FuJ94MiYgLiu7WTogKsw7xyqMFs5cLcnYGYnpDZwWDaiTUR5F3jtwE6QB18ZZFPWNHyo7nA",
  "key14": "23LkNqUPsyBCEXjyesNc7jvFHuAC83XrkF35sSsKaapXNrZ4ikbfe4xvHHgVmDMo6e6ENC6oKzozv4vUZzweP4xX",
  "key15": "3tQahCKa6WmzaHBQi3CCYmutNxBMUdBieUGHZ8YSFt67Lb4c11SydQencdXB2EZ7hj9C3RDsfpZ1Nz86Bf2HTAx6",
  "key16": "43Xbiuh3BrpgNprtSuQAfUxchkyP7WjZLZnnL13zdtZcaEpdWoVx1kG1irtWJg2tCiMqfJGgH9rCTML8JPoN2WH",
  "key17": "3tozckwCVAm4P4RRt6yjNeDS6XZx32jWrKyz3TCaCj4jN1koWgW7bfiJUKVQnhZRHpvZdSMLbrxmQtBhMUFo1R8a",
  "key18": "5hQibaUozDPQEPckLb7aur2WYEL5xov4vtXbzAZjZD9kqjHhMueNmU17w2ZYh7yBYXmuw7iBgaJgA7UW2xsCQM57",
  "key19": "5PtbQNXCJiPgjmXiSNa3HfgMdX4jCHrHPFZcFWPj7CCM6stdVwwDLaSPfzMMAxV4SAkYd8fz5SKMHopd5zx67fh",
  "key20": "2qcw2ed2ee7fqdXdwJ8HX14irMW33qnRDeupzqbBxZ1sZhhn95kVBWsLCwG7aQCEJWtain6PBXp1Aronn8d2ZM5n",
  "key21": "5SBSREsd8gDg5sKiRStYiGx2HdqD2FSkEPHdiNsZVdPdRCiQ37NSFxhHcayqPsRadG7Hebidmw7VB2p67cB8CCUr",
  "key22": "2vGYnYKk2AiDpy373jyC3yqvqDdgS3ATUvoPn5fW4sfp7nx83SdJycm83JBDonW1ZRHexD1zK4JFZRH5iv4wEqco",
  "key23": "4gwvXqcKBKLBegr8xhdQ6Ryq7B17XyD13AwcsxP22JeCVhoPkGEcY6nehxFZ7uJWLfMqkNQ7JnPecCWdS4TBUwy4",
  "key24": "3HPiGsw4SMZLij2uqcww8dyQ7oxMdu8k37iypg8nwjfe7gRECqg7EFD72sfW1D3PYdpdeav1UjfS1BUAsM1EEHsQ",
  "key25": "4bFvBRTRhCvCE9EgiKbm72v3c4AtWqnJKGrDw9a7j1bERLR3ywin8jrPDPCU1j6Ed4TSbyYPLJ3BuU2g2ToxWJWN",
  "key26": "3MDwkJL25WYG3WiVspcogPLroAVeWXPs7KnwwrsVWrrW6953xMaz4FUYGeNkvdtAqWoftWP6xCdjsQPUuFjqcwqC",
  "key27": "5RRBGEMjqGkrWZrtAw2P7qgKDdMPwVFMStrSHs9C6Mi1hoPewgNVgvZckeZcPAqpPqo5GQpqDKersy9CjoRkdMgc",
  "key28": "vcYFvYdFUxupTnCEVkSyFhG2bSPYsjxNbGkHDgVjLUPzLcnwowJoBDKdpPPJ9AxYojaDF5ekT6bkxCLaJei2gyE",
  "key29": "3a2rYaZbGsWKgpUbR9CdMYseYFhs2EQgsDtmAxFPZ4sm3JaurDLNN4GDy9kE5QRUE6ispf1511ajwAU8ktxqEPKa",
  "key30": "5R7F5G9Fykn3EaxqGQybF3fiFdwsWjbyxYbirtp6L6YMaVMNZL7s1LPYPQM8FZirQRhVN3xmBa2wWkLXeAT4CPb4"
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
