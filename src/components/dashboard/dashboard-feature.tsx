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
    "22u4PUJ9mS5KBKHdh9BAzFa8AMSEWFxtM1pXyA1Jrqa5LqdQazHvCN5Zh6bZV9TEip53LVxBkA5MGsNzoovzpcGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aj1XBpwJpXmvJayPUezSy3XbTfCWtsLQjcPETZ7RgasJMqbAbpGPbWyd39kf4kw1gGUzoCkEjuN5jpukN2z1Q7n",
  "key1": "4CCkWiVqxq8ko5ZbqkzZnbt7hAresQ3MDY5Evc7YypkDdDqpBqsUGnZffsLVMoyBpari2kJPAenoHSMEvpQx7mSD",
  "key2": "2tXVhnXzm4Xzmd83EMLvsi5aVdcqmHnkkeYhU6qSVZ4SFvtjWyDHVrdKDyzMmo4pGxJGubrat2XYhu8z2op9AEWx",
  "key3": "538pkoVHbZFwCSKZChJaxRPnygK4grBwJC262HaMK8E3QEtwSDbxZKSAyBGnK2QRxqT1zYj1m3s7YEKHcMmuab2N",
  "key4": "48m1g5u7G76t1qEqdSUZ15NEFrKJ3nCs7nXneytngoqvHjeH9iG7N52nFXLp4Ad6kZ1mGDUx6zUGdF4ojAVi1jft",
  "key5": "4pGphXfZ6yLjTHMiP1omSEzDnALH52ToeTWtfnMw458TJiMCxem8tKU7Ksh4RDbQB1cDi64aGPQx8ZQwrAchJJka",
  "key6": "4H9hHnvaLLa6wCLdMii57tJ7gFsmnFcV5UeXR5J5XwahTstDAT8UbJGTU3GoCEVBLg7qmmUwJpohmJAZtve7RhGT",
  "key7": "645S5xZqkMifUW2x5DZXTk4qFih216Hxt4JApcJSenEMLhQsgPyZrpSz3XqivHrpAbc88uBX4SkRYuTmUENLcoFQ",
  "key8": "4faKTPprZyRVFjBeGR2FCvmg1k2LnwF18vJosBsJutnZHwArBx2TdHczBTvyThWjA8ZrJWxcACHGdoWo8TLNcV8Q",
  "key9": "3emwsviGHr2W4fZzccMfDmjEJPAscPj7zTZVXbWoqKHxQmK7N2DN5hofpGoPkMu7dJWXA3EjH6UKDaP73h7aVGcN",
  "key10": "49DQGf1LSuRZQBF2T3yyYoEjJgUVA1Pwzy2W2xSp2PdGyU9WMJkCzXfjZPuaaH9zx4MyFmTV4DXouXLY8uAtmeBU",
  "key11": "3TuXYXeQU1McM7kLvNBWpbBa3v8PfpZvQjQuYS5pfdQ6JJPhTtin7F3Xb9937DWsiMcNMegGdTRrp2QikP11Apw4",
  "key12": "3oG6Y4e6e1wmRxRQErBV4NZsYv3Jp9StWHnMukBcUcdH3ZR1NRHfZT9taSmxNcAwaNz5eWpLoUU6hkSNQitQQTgL",
  "key13": "2AYBUv1wg3VyrqLv9XdyHAKda4hFFcxeownmxSZP1GtnYcyHmjLoPNQPEpyQXZPEPqLFnCkHcK8YgtYgndmT8Qtv",
  "key14": "4jZg3nTHqypW3PVJeeeHq2ZXxpibuuU129xPqjBjbhFJrP8Q2XS772yG1G8v3UQyZMnpnqrcoN1ER6p8GYRn6yP6",
  "key15": "3QNMDoZdDmQ8Fj324dmN6Qs5PtygkMRrM3YADk83p6yJa8ta1eZEBwz5g6t6uRH5DpfyzKUzKn9Fz9tkqSnqR3Mv",
  "key16": "3TuzHr8N6gCPM3AFAvvpvUcj7bA4D4TUBQua7BieP3AGUpXGXvigMZeZpJQdUnUWvDoCA3dtcS27ZG5epteNtkms",
  "key17": "5YRRrFsjqj3F48MxJKsroLnHm7w9v2yxYcWzgvd7Kr5ESFfoGhmGHkFm7gAG8ejzrytyuNsRbNxCo667BnmrrKxW",
  "key18": "4BQJtWkYrn33tQ89oQovmeEqWDc4uR5D1Gwh67BoNwrrAmaLThcUDD2dBtQdu8snP7cJUoCmHNQj16jnzMG3kn1Q",
  "key19": "4Mr592mEKGSiddQYfdbMhpHcpnF7GMpmsnEcq1qs1x2EtCkZmDKtzTwfor6JGr3a6dc6ajimSy2Cfj8iBiiRBHi6",
  "key20": "JxeMdSRHyGQvSDEvmtcHgrbBipWDw3ytYpMxFbGufe3FiKeyKtKy3EWyXFUWSowPwfUVooaYwwPHRtiNnM2juit",
  "key21": "34PseRw3vg3ygEKaHPvhu8oeQdzFPh4cNkdqryJUWSGr2ZE9Db5VkJeVutPxgP21aEj1m2hfH7Zkyp23jZm9FD3r",
  "key22": "4RfM58qs1WReXtRTqxeuKCGoeuSFW2R8tQJWWkH1QFuY2vqGxmDX6Hqnd1ajF9rfv5p3TamMNWaMouerwfzfwqTy",
  "key23": "vR4ciyxD8FNRMr8FZsNasRniiXNwfwDWMwxPzFMzTubgG8fEopvPcVf1p5dP52VnfeqWH9hWmw43jsE3PtmkQT5",
  "key24": "56Vgs331xDLwQZGeSEkXwevYHs2uCEAtmJxt1vtxufCZFk26hyM8MG8qJKB5uBZ1zNmaNWRf9o93KtV6r61kRsh8"
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
