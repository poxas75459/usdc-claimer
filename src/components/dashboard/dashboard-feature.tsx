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
    "5A5pCrBMFtU24eN3qDhFvsSWFojNX2FSD8RabWoL1ykbtgfWbvssXbJfLhmCpbsHfqFUQCvbAguJzDs4MYGGLbsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LfYRBauh6icG1uSebq4NU3iQSupSg3ty5JXmetCmi9jVLetaPzPSgtneUWSDrhzs8sFnAkZvjdhvBQq7unztBi2",
  "key1": "4AKfqhjBzdNYSnqQi1t3tuHbZZ4mQRUtk379HU5UGjfjgpW9p7CNNSb7To2FBvddmJf8rEoFnJ89UuMwxoJCx1HX",
  "key2": "3etUhnAo4Q4qd1fkMHeCxtq9mbhMQbDbJ8ZCSrvyVpCESNawfMLFyrYjze3dbrXELGraj3q8Ppmav58hRkfvFHGN",
  "key3": "L7EpykNMVVGjoUyRGvwG3SXsF2CUgNt6kn9coQ1iAhHpf9x123WNQgjMLBy4pU3833AsGHrFsD2GD5rSXKUwVoA",
  "key4": "3Ys9d9auAxSJQo7RHfCCHx8VwR83CpwGyYfugAwbnXyJDNQzH7wY2gUH7i88Ba2iwvpYs2Y35ebkCfUT6EZD8bnx",
  "key5": "4SSMGdms9GKqPKzdZcycLx6bn2MPSgXT17gMGtK1f5pbSHrb7sBtLGGdYhzs8SJdFJomAiRL7ykPA4HMjvoNq8NY",
  "key6": "5TfnZQdjGD1YTwMd5USfJGPwBzaYpzxsHu1Lgbxufzth8UHJUY3CGwyUJRYxkcgrrtZcVVDpCxnywYsT6eQgc4ot",
  "key7": "2ddXvXib4xSZPkuEdTcJRcFusMowmt5EKT8cL1YaYbqRQ6wr1rhAq6V6aPNwMuZzSAwwfrjikTniJGtRiyPNA3na",
  "key8": "3QmPVfb8BGLXjHZFKKcroSDn3kcaEdpLVPJmJ4VvNXennRc3KbbeBWSr6L7jXZszyfYWGrYapFrVKqfLecyUvN9q",
  "key9": "38bUE1bceapHQeiXq8eo3GyFJAGNs6ndXfSLsrw44uKB62Kq7mP2AxQpNFQ5fZc9Miuj5JU7dvDrM6NY48ogFanD",
  "key10": "5gkStaa74a9RRWopaZ5P3VVrRaNjoeVe5QJHx7i7auhX8cem6ZNDSPyZnLCpV1G5hRDKbEMiEhUbo6Ack6tSzWKG",
  "key11": "2VmXctXtfZzDexFXPKkM9yPRw9Eaawd19pFJZ84SKLvE74jCgRxvdVjACsck58pJc8P8qe2kZXfoWuySCCSVP7jj",
  "key12": "4knTHh2UekSko3Dkn7qCCN9VBRpXmAckV5FxTucmDK8aEVtByEToamBzND2W11dC2mZ3rGrG8xkjVkombetfvxso",
  "key13": "47avsbho2r7ZiNoJTZ95B9Lbxq1xyZgwTcSz1Ni3qq1yLbrJ6fhTNdopoQUsTYzShKace7LZttApJDG9gG2rnVhj",
  "key14": "5XTdkhLw2mQ4X4x65ctfvCtgKZyPsBmE2me7BXwaS6TLuFUqYHm8tCXU65BvG2B8dkmxddeiaz2p8chqEWjqREtd",
  "key15": "4yjaoPumPwV5ZL4cTZptRH5NsCJDuPD3u2FG2WRSxoL2xRDjoKnhvuo8epMYC38RhtA6kkQotrJWSAzVwfeVDU2Y",
  "key16": "24bUVW4xkFxPf2Fe4bUGp3okvYK9LbDdgHbnZ3PKcXVBNhiVX5dSWVw3Bw7CF7suTtoorocSUoNS79LjuruXNz6m",
  "key17": "458xb5HedJz6PaqcwM8crKH6DadSkoodrBkfcpsBSkuB1eAD8wggXuyKJCXNEhhrLTPuDAuwiMeW9Cp5rw7Rzi1s",
  "key18": "2VQLGaXSfH8hwJcegeLRA9yiXccKXfaiwJJHSEHU9QNHxP71jDn66Dbkp5kb36yRCAAtJsTNWj7geX6c94mvfibv",
  "key19": "53mmRYs8t3nBAW9ej8tR6nkvrTZR2zwaMmUSruPGizBosKZCzuaiJwd4FiYKy2RSPYaspaBrPPM1MLR5U6Y2HAXU",
  "key20": "2WTBuQAMAqu1jmF5DyvzT476HvCPusigCxHch1T34S7dzv2hBJvzGgMSjcjHvwLAYJey1ozMABojYdTUznHSyQRE",
  "key21": "45iNCWGAwm5c1tPSGQ38wukTgGcXdosedNYSyGQ2MpGvDy2MJ4ELTGaqKWC7Jh7kbuqkMARJ1Q2f2UVKED5tfCsV",
  "key22": "3bM8drbjCfPZ8Wa54MSQc6ezrx57gSXMqJgDzLVc4fK2gqjEmgbYHFkfiA3w98iMm8aZFZaARMvZzP1LFpJjgHzA",
  "key23": "aw2nVsBUwfHrDTPwcG1j2LDjecsoG5Hm9acgT8G9zTj27ZhsdGtcPMXvipDehC6rkdBbFLxHMkhZecYCYUuNd6y",
  "key24": "5o6j9FCCiHBuX4HiZXNRB9q5hW2pNCH5znbGpskq54WoZPqCmN4NMXCNcfFKqpemWYt2BPire4Zx31vY1aQZoxTh",
  "key25": "29RnCqJhRvjR7jHCa8UhWdwGTmZ6f9GLdqZ3YqKBxnLGRYMhhJBJdMga1VkYgWMpYHr5h3BTZpp8wU6pqxEq3sps",
  "key26": "5aecZaCLdyny8x9YQEC93UuxXZMcaVEjqshDzccKrQ3YxCUm2fU3b6CZ9CoZ7b5abCUPSxoaLt2XsKx9QPpbyEfq",
  "key27": "4MFS9jGMXKNVGTpJLYSaxBA7ArHEJ1CLc3uB12FYkcikP5dXTPGL7o5RP8dG51NiNQ1jjYZRb98eyBSvsBEMCZhB",
  "key28": "EJBiiP6hi6LTukA4smkjWNSp4tCTftaBCgVTsJABvc9PfWnhmHZpYn6733xnMyyPdWtEDcYVQi6zGN6QrLvJasa",
  "key29": "2e3qJG6VnqoBhNDnV8nJcBgXVLg4PFQFtCy9HUYgzDwdwQiviyDmqA8zay9dBS9mFmYhoPvBTDFSjZ7a9L3CF68A",
  "key30": "2aa6KAcFgGcCvzpTp74nGz3qQdPjVQUPq69j8NhaAVzi8PWtcbhgHdLz79R9BtPznNqRdyK5h9KoyHtaC86PE2zD",
  "key31": "4dT4kxavurirqfrTRhgJBKifBdnPdzLZ25SaAsaKGU1nV1mTtLwL8GFssMgBcTJJVrseLrMDWVmmuRGR1squm4ZF"
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
