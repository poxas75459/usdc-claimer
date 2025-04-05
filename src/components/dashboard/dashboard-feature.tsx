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
    "2s9UQBRDm1zAeyHzqpdJyRAjj7cQrZQ3G3E5wvSKehTQPHraR59bWbJ5JmDaVjopEfXFSTBVt4ZL3UUjrEUnZ88v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfjBArhYbtXEg64Dv95cCYJ9oujr3qFyx68g67nz1b9DuXg3nR9N9PHcG1mvHQ9yfE1TEA7rfdTZR4j3w9D7UxE",
  "key1": "NHNAeZ6HPanJtbAfiKLPG9k7Gk7UUUh1MMrHBuLYK58dJFNnkEt7697nMEGRKCrL3hEh5UQ9gjZxrmUCYuSwBTg",
  "key2": "5brtDvPqKPV7byzBL9rT3h4yF61tpJxHepCEDFpW9GZ6TVxezZsofWnRxMeK5AWSCJekVhFxKuQHf87Zg3tRohEc",
  "key3": "4S4yJwjiE24VpuxHg3A9SSunadxYrV3ghvHpPosd4KvGpfwo7M7UcLAmxR7PQGqAoe6GGBRJ3WMw2WohXc4CkzVn",
  "key4": "4PKXfTnD3Ap6TNsB9WWH7QY6e7SKJ56e8szKwm6RzsYM5dMNCuPdC7kvDKpNUR9r7hTGqXhdLJLHU2w2z7oTXknu",
  "key5": "5TV25kisDBeKQU1heuStwNb4XU4NjnALANxu7qYhZyPtu1MFFYxorKvo15sHHjEPoyYbvGKtjpvJS6WStkZtfVyf",
  "key6": "5JqToTnJeRoXtWKv22bumiBRZ4PRr7FZEE1Q4Ck76BXWgD4BSCNmUroMnXifxraRhfPmMbL12Mq8Erqktmq5FGDN",
  "key7": "5hB58z1hURJknYvo7cGioUEbm1HbeGzjepjkoow6c5jFACaAhmcd8RTVajAeoXMVEeSbvmtARTs5WwTG7stcHYXE",
  "key8": "hYPPmq9QeEKXJdaorEbtE2YwYufagpnaZevHBvntzSuGED5XKPvWzakivvwRoMp2THnUEwVeWQ5CS3MhiodG4yw",
  "key9": "2ynne16TPYrpZhEVUSG7CQ9osDC5LxHsDRGH9aY6sAX7x331WHCWP8HaJtH8S3W4rAWK4WL7XRnYbTuMDRsAvYUz",
  "key10": "3tcnV8N1sMRDuLjTHVq3vKvYxhHUW2sKgsuoKnCS9iGCeZyaVPX63Kd5Zi4x6wWTE5CttLxD179fiR95mheaH7Qg",
  "key11": "5aXeJQ2NkeimjZkQUR2U4QHc4XmPSmi4VcJcEj3NxteWSmu1nU25Es581p6fzaqB37ovbxfsG4GARvveB4JBtcyQ",
  "key12": "4h5NvP4S6yV36oaAF5jJVn1EKizhHAFRxzppvNiruEL6TTVpVnTpgZebJSyfv2gPuqUrKdvurqKvhfdmZ75syqVH",
  "key13": "dfMhRuVCiq6p7bmR2FiRAQZ6RSkY4Bofd3wQgHBXJrtyZ1wiwbvQBzq5FwyfRvUTkMpLEpj37ePYsvsUNFpeub3",
  "key14": "aS7F3zDTSDzk5H2J1UB7wrH6HQtT2HpcEYAZqmQou3yvBzeuuwafBNSuHXyigSp1Pa8QBSQ7oJnhdWSBt3yWEZx",
  "key15": "x6eGdtutmULyrejythqEu5KuSw9yH9XCuzL1Q2LymqgipUN2i26ceeL4f1NmRRd2AYYxkZgAQUJrgrvP4XsDd5p",
  "key16": "2zt6mARxKg4ifWWAUAdjRAQxh4ti7Sfu3hmcYinNDyMKEjB8F2tSYtrauDKZUrUKwgVUrf6MRG96UjPLQbX2Xvnc",
  "key17": "2cWU56S8S1PLQG7Hzcnw8Ac9SbATpxgoJX3byf68iJZ2mPrf9HSqMsMmHmtkCps5xa8pZxUBvNug8PELLKnYoxwU",
  "key18": "3S4iPEKmuBx6EGZxW3wsjEws3arEjFPmYgD2RkkqdfKc6uRVVoMvgLgABvhCAGccEEZ2USDtBLH1EuJDFzyX3xX3",
  "key19": "5PewvEtDwSrCyAdWpMxtFG46vaRdLWLix1XERbuSAf3hwgn5zRwq7Jv9XUMeFQunvdjFFq87Qa2gXYaMyF5EfKHe",
  "key20": "2cvQ63vC3TQf7Nxobna4RmqTHEpAJMV9jPUUXt3Kf1TxGJZBT1EUmLZPJsWjSoNmoVMw19qvj3vudoSDipudbvsM",
  "key21": "DujAKZPc6rgQhqwRxibFUY5QMSBysjLgCCd6Q9MYLX7UNPfpx9sPpUYx2DZYCFsvfzTm4SSKEGaZMkWVpqwaYyq",
  "key22": "3KxNGigPzgFfjut4ii77jkm5WF6vkqTd7CKbY9cCCHugjtBi8cJgVXpbaH1QJnTMoGyzh6LkagPV5F4xMfGTB1hq",
  "key23": "5JCHQADzn6HTiAVZ29ksUnZcSjX6uSnpiDp32NnXikWnDX7CbM6DYSMQb4vEKT2uQ1Xs8HfmgNix22mJjEiYDhSa",
  "key24": "5UpgGPhxwnDBtERmpmdNFYkcEDGnYzQAZ4jw9KjEfCUskh9q3vLCJMMKws37HAEoBiFaRPzgAzSaEi9iACSYx24z",
  "key25": "kEhtV1A9axAKyBaGnXPPVibX3wvYcBXLXwm92TXBzdZW4Qw1JoXYPRSqpcsXMNTLacnoD18mXbrWpajsF45xr4w"
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
