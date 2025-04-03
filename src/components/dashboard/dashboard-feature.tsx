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
    "4rs8Za1cEu4wekJDrS7WKerVT9SurUMMk4crc9xMC3kRYWYLJ4L4NAHUSG9pxft4pRjReD74YL4nmNEvj7raTAdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wfz4QB9BkpFfF4DGLT84Ksjar38yuLEbXAMLW7ZCmBN2jCCNH3CSsXWFmdqqUBS2Mcgo8prp9HVsVZH4UhaqFWc",
  "key1": "3WHtUgp5JCgJw8ELgmHZczmEeNhsGDfuUTBhfa1MF5VhaR9fJ3sfPzo2VAmjxFsTpUQtX7psoTWoX1uy5SaZ6pym",
  "key2": "gUfamrWrW4DLqP2dDKdBNL6yWDcCokbVrwRSLcDoC7EQRDqDjkHEfgTEETnDYMvSwZcQFgQobWnrmAYXNGeQa29",
  "key3": "3amHoGkqqvRYinYMtz6GZBGVNNZysKb8EhAhts4u8tDWwaa8cJ9v1F2XzBLHfaH8bdJBtnUVatUgN14GNZekC1J9",
  "key4": "5j7ZHQn9SDWHJbJPcreipASmM5gR1JJGSBQRvGKZUzVZbfKwWAM42v3uiigWmXirexs7rhmSn83nMuRbkCZZJvjE",
  "key5": "5AMWgXcuZRezKCoJS5Qjpg59KfNzYTnHWsiLdSYBSTJmMyZcGVXaLv5ut6u3XYpTXn19zrXoVkW4EH6z5R7i6tkW",
  "key6": "2XGs93ozSqNdonbQgf6mUsmj7HwasDQ6T68kAJo2oU7Gs3VGdcRQy6VrH1mSmefuUDXzGJ8L5SCbgGQMn9ADfPbp",
  "key7": "46vKzLq1UzwyuxrxMxfnpntqUBvkM6KxxHzwP63WyoP2R34do5a1LSPYRLgpDJRZ1JXpi6w527WGJEnnn8LHgaTX",
  "key8": "4TJRmCkQ1Gu56R7SBwAWEZpLbKQzKddwVweqvvMGCRUoyVaVw4B9UAoaVjQWen9sdHFzah8fkJ3k7e7W4hb5uaN5",
  "key9": "4qEwgZBiAn97eYhRzcMy2JREKyy22WuGshR4XoLMQcvDbsTdkm6EScTqBCvtw24o6CPEfTVgaHkorJGfTAm6sk4D",
  "key10": "1if9zYZA9HiphtqvVuGGgTEWyoYCa3Qy4RxuwdoByzBbMidNgUrwX4BRuawbVMnJ55GMseLTigEmoL9MYyh2HLC",
  "key11": "4pcUYczx3WFGdxH9WNP11K3SVS2qdM4bKxeCk74JozzW2xXFJHWxyA1757F2Qpbmv7GCmrYk868TAeBifCH3BQLz",
  "key12": "4rVxudQ2NwgKiqmq3j4nDJnqeKZZTv9Eww8EJ3uf1WnV7XuAvxuWYT6NqXim2U1WEYp11g6L62zRRMSoNMssdPCF",
  "key13": "5TT29GEiHRUF9Xf46mF3aQtwuXCJXmHGj1k5PuxMLqwpaPjDADHmQJXZtoihvuCskKToyain49mhGV1AmG6shYud",
  "key14": "gRedQs73QJmuwPhjv5pCS8xjsiXHoNah5fMEhezDQeUYWShHzC3omw7LQZpfSdY7iTrjKYEtaf4m3GPpEimsQnc",
  "key15": "3RT9g791rspuZKkNEEsVEy4rHNyEx7iMKquGwTyG4VRMDfwk4fUSGqSx3P8rkU1QcskPhXYdLzRYyF3c7W2E6Tgw",
  "key16": "21JWkj82VoNAACpRHcT1qpESb8XTuKDetArDFC63hA6DSi2CqDfruuHZconrMmZPGhyMcaVCJwp4eLm1nR3Tjrxe",
  "key17": "43AWTkVM2XMPmfRqT7R95Gi4h3N5RCZ37b9g4RR7VbPcyoenKb9e3DXD9ZywWDLYJcHD2934dsqXuN4CwkJHkwxx",
  "key18": "4gDjBMwRV2gha5wHJgVx7PUjGFrwoq1eYpy2gAt4cw3jddbSdF4YrBManbpQYVGhy5z6d4nSeRaRE3vUjf4zwqFJ",
  "key19": "4Dr9pH7veDZrcu78oNahhPiFjwwN5Tc8ednhaMUjM9QikdrK6E6ynA3BVAC2c2YprCJ4cZJSV4HkQ67z4ZcbkiLc",
  "key20": "6RzXx17mrp1b2xs8pE9TWEkWEr23Esz2gLZRwwxkrvD7VEqJRLrgAUHJMEU2wtV3orNJ6TwqFoMgbwwN2ofYa9u",
  "key21": "GAe23tfXTYfkqR58PmRNBeKFd7kCTsvku2rX5v8Qo3obeM259kh1kVb5n1wKyK2dKpf98PeHppv9PHK6kU3VX6V",
  "key22": "2MMj2uFVHywuW2ZS7xhfzZsnNbwFbnCbmjMvtbmL9vnXzbjGUv9LuujycsEc8fmJiAcVh7KkTvmUdA5ZL6555iDG",
  "key23": "3MvUbN4QHngpPDzCXprN8owPiTonDsUzj1G8sxcSsvfoVQG9XkFAvLd1GnoWJm2xQXGNZKD8mQ5rL8v8Bz1bXaay",
  "key24": "3SRoXyjNP3HSTn4vLqKa4BrPYF5BXqxm5DUgHUmTRT8QhvC36oYfXkyiasHTTLKNDMTAtmfTNjWAMbNg4ofy8kat",
  "key25": "3Qcy9cFCdX8DrFhDwjDU5YLfvcLV837bGiYrBdjtvEEpLWrrFks3oFCBU55y2qA58QVw6u3GYU3WWrTE8sjZcpCf",
  "key26": "8d1ARVHjEe2NenVmBaiXg7TtxUSYPdi4F3BaPVNTgCbJL6kjjvKsAeJLCkfrivzbBZV4tvjdnH3ayuW9SvwYFaN",
  "key27": "XtTSS2Agz29bSvjExzamSHvNyvKW36jZtaiLauQaw67cXJeT4EeuH7oCPC2y4tX5kUNx9atQqLyPqaXvLwMY6wy"
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
