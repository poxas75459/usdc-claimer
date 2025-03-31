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
    "GrYKdn7JM2JHYmmZ6cW3xUkR7WC9tSqUMahfQX1j1h9SctP89ZaXyC5anHAcgq1UmMGa9K5bTGDXL7BkBcqUxYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjB1KVL3T26caNhKxFtDG1gZ6qveUSS7gfLk3acDz5HDYaEEdNqHs22L9MZ91W4VbCmPYrRsm5b4tnxgHgjbGn6",
  "key1": "ePRovSYtrZp87PJdyYJ5QMuVhk7qJhNoCJanVgZSht3hVcFuvPjYh2sHrL4xUE3yvybyYyZ3vwCxoFPPLTBpGFo",
  "key2": "kZag27bSiWdUQPtmG3E4MCnP6JZ8dBQxHeGzdPVTq92FEdSZrxX9B7E984tiMA4NzGZhT1FfxpjgmWKwV9zxzgc",
  "key3": "7qT4GiHvLfNg3Kat9TDLrdyNGKEat94nBGFyNe3rv1oWgEvyoedqvwXLdHScDhh4YkH1Kr2GyX1yxLpwLtq9RPq",
  "key4": "3UurGufVmhHMBw3vAbikWQytiUZ49ykKcmQAs8mmZR3r545H2s5u8gTqJ5DYKq7BDbG1kQEMKRerpSFViZqQmPWU",
  "key5": "5wrv95bchV1hQAzHWJkRLGwxWesyghfRhW6DmNvMHEyj69irFmzFUwi1w4wXXhP5Hd6x49w3CNKrhJvrNCFZgCc1",
  "key6": "26HZhLLQrFpEY1xZ4utZ1MRbToSorXWno6VqQTTV674Zx8fG4kqquHYGFYg6k3vTvaoUEwM7smtLedtzRe2H22vW",
  "key7": "2uzQPHhC2PxfTkXdcrP1ZFjEkmJCbm2zdXhHMEg4MqPfmZL46P8yz6UetdzXX2XCgRTgYz1emppRUMQ5ccp22j9y",
  "key8": "4P16Z5oVkNJMAatXkcV1UU7tX2CgC6tMXJEvzVUGbgVWFutkXaNALyWbpry7GDaqhfyUGGj2K4Awo512ynjknPMy",
  "key9": "5UnznPNnBEx1StYHM52gCArEBKbDAQ7ACs1ecDFYydYHwVs1K5b38pfMn81Btn3H2CxQex6bxfee3FkrwzpD2pPe",
  "key10": "2hv1f5EU5UM5f6DWeKtsJFFuqJwAML1b5qEXtkgUzKXnjinzfs5zN4Aqb1XmF64GKwTdQ9GUsah9W5u6n2axmFgk",
  "key11": "5h8jm4kXusQPZtVYnrcQj7nYM6z6Lb4pPAnz8qELcCojvaB7pQjcYRDdviCENjPAkNkj8myQguSXqKev8wWfzWUc",
  "key12": "3ShDg2wKcwJZ3oZ9oKR6eHPPdbUckuXHCd2k9XN3Zacq5JSEcFQQeCF76zNEA3LeiMjZYp3MJ3aKHP288LN7YDBX",
  "key13": "28wU2MPafvGcraL2TdSE5VSHUKzt6LxQ9bnLfUq8tbe6NVAc54Pv19wwKhYZ9E3KizQRmj2DA5btiJ9k3Abq25gP",
  "key14": "5bBX3B6YGPLNZ3s5qHcgyHyzRBm9cvrWquvrL1UTP841UBRB8jHxwbakj5xU5h8fKTL3UwwtujxkFd3NLyWpf5zz",
  "key15": "598pKJiznMuqVMYJEwUxkpb4QiP5FPQqirhL2aAqq1CnL4SP7kRyx3SDAqs1jNj1r7wYWYTEBYy7VwZk52Xo2KQX",
  "key16": "4bbguDsQqoi4TQ8HW2rzSzFx4e94Y1yC4t2SXj2cyLGCE6P56RVdW8yjNZhasb974XB36eCNnJMSnisKPBrkdAXJ",
  "key17": "5H2fnoJjQcjL4qrH4EhGy1DUCRtpLCjRuZrtEuDtAJbyrWNBSYNSdu4uKzPhoHGLAmoeaTHfgNvidfWW7gLUxocV",
  "key18": "5jkcnvs59jVX7RGg1EaWj2bC8dbdNUfP7VcTkjvsncMSHagoofY2E4YmBNR7pckxpmUcGV2Y3QJKgiWgRZBDkz9C",
  "key19": "UDyh33uvrouyv1AyHgrGTYCCmaR5FTXyekHqhx7qxQgz5RUXuTf5jpmruwRpCdZMo4NeXfXkp9Wj6SaUXJae7dW",
  "key20": "47RyA1ebo2GbS4g7ZNiYiQ6AoqYGdzPhCYVCViZa5BjMgd3moYWGsdoTew1nECtAif2EgH2d6NNTHjzJdFboAzeP",
  "key21": "32ejifRifAoTaPTjsrx3bMQfCvyntC2Cq5c4Zqk1g8k7b1QRFK9yoJWLbpM9kCSC1XVEGZfSGR2wy4jhYSsFAT94",
  "key22": "xGTXkC5NNLK6s9A9R7UKNZdcgM2vmfSJYSgpzfFEfy2op7yD69BFdMhV9VeB3C8R8Nfm8xuZadrUMWt5hFkb8FV",
  "key23": "4h5vAus2pXyp9H7iqRX1s8fM2Lh2UibesahuXpcHJKLTG3cc1kTL228EU6xkvQH8RsYZhPopDRfJwmuQHRcmyc1m",
  "key24": "5segSnKqS4Qm6izNYySbufoo5eANrZnPZk2JNVin4ewrgFoSDdweY4D8DVx9gfXHUCWSU3zcsxYpqo7aqY7tQ8Sk",
  "key25": "335hioij7oSgwvGGgZSWoWuEaznuEExkd3MaEzfwvK5dvg1bVGK3WFr4uVTrK4Foxzoipu9ahKVwGinfmP5GjapL"
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
