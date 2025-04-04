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
    "2W9v4pvE32stggPfpqBwgxACdRdksHnpLjiYuZPKGyc7SD3P2Ew4Xs1cfaNveJo4gP1ukEkV7SxReM8LwM6QDXpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGTdWqVWenP4KvKLXmcj3Jzx7Ycc4URKqLX51QEdP6p1D87CSUCGXD77Ra3bXgfpU7ViCwMQtmADsmhA3gWadXQ",
  "key1": "3AsNEsxs3bvWgVzsPWTsRnDgiZ3g5SEJGuSofMuHsdL3QAHja5TgZiLrtPMyUTW7ZyG1TpGmuNzEiVm6x1cruzK3",
  "key2": "4HrexyXfTrsbSk98rheKL7JEmLbVB3DgddMkBd5ZFznudece2BBASPyVAzqZv9xYifJKHXT4qHf2Pn8qkEokG4oy",
  "key3": "2bsvPJphTpKVwtZVEkU7H3YNkUphYLL9GxwaQKz4L7xGYh7M4iJDbEmmTMx7Q13bUkmj2N9Qs2RiteJsJfCDmEtp",
  "key4": "55FJKG1Vw11vpgABYhddMfETCoxnvZaahFeSREwoQ2C6oSv5Rh1wUnziXSatMxzbqdNTrKmDmCN2SqXgMaYhkLCn",
  "key5": "2tLaeidK7JMDNCYeQJiWYb5TnQjyegytpEFetpA6ncMLAaQ9jMBayp31RunCUu9he6m11g9zFDz2Vcxv9XxcLcic",
  "key6": "3Yjf3rU2gEVgM4nuem3v8C5zgFL34SEzr4ZWNYLq4s8RRLmEUghKfg4ZMrFPFNvEkxQRWeGNrcSjd1DawkA4UQ7R",
  "key7": "53qaE4eHDc1o3TWLmzsaTLstU4DgXcuytCNonuLUWFTkGXBdL2h7mDutmmiGecmnQazDi33zEeeqwQdhp3NkL7FQ",
  "key8": "5GuMMZVBcohbeYwK6TR7R6TQkYHnfZRQpLyL8sTu7FnK8zoWPxZ1qjrYFYw9mq2JRaW7KkWUX2aZLUZXPT9UF2Le",
  "key9": "esnc1qD2nDEgAnxBw24cG3keLwzmwpLGp5Nx22138UBGjfv2qGGMc9C16rhc3wXiBPNkTWkoHTenwHSfqbeuBWa",
  "key10": "5mMeq1zpyiyKyBGcKyawUksH3wAVrvwNPJjz9ZtRiausRuxVyzmq5fT5XsRPd5PM6eQc9xcQzxW9ppqUgk1tV8Jy",
  "key11": "51WMeJMmPJb41GAr1jpoivYjCBsVfFe3REpZJJxFsLbsWDXKn3WqPq2xeMdA5vcrRHwfF8XKuLh7TMiTPKXv7dth",
  "key12": "5XJvfrtFnGCvUz4RCm2ArNUma8QTG4dCwbcbidSng6FNrwqSYyUCCvbEbkjkZsXoCukzDdxGnLvN6Qrb5hLQydvW",
  "key13": "65b1QHrpuVN2oZy6kFWbRARngUUPtWoB6LFY88XxVvmoZG5ph8vQoAiv8RkGyhVCvsvcUNKBooq28BSnst3rsRXT",
  "key14": "rggP4gyPMfZpqu9KS1GWL9e7JM6A5BvVMX2Qg4z1wH7jiZ4fmHkcEeGgzFQPzBGvV6ioFg2cGJdy94ih6mTfgEX",
  "key15": "rUjquJaoZSZKWXjFKJJxpNrdMXVcrRrfgcb2D2jLAXDEq9GrQMzYT1iMD4mLDqAVMWqEYrdpdsUMmUCUFwSPjom",
  "key16": "jpdtHmkESfvtjneQ9a6pw2G8oUKRS7s59MjSfYCCmErSQrJmFv7wM181cnG2vUuaYsXm7xHKtXtXpiTuwrFTFRs",
  "key17": "4az84pkLx9zXYC6MoqhPBGKd4rERyAgArU3bMrwuoKBz2LVD38VBhuaiMdhbt9Fpoj1jD7R2v5R5TD1mxg3SKhGT",
  "key18": "5JpuD5wi2juo7114UgpqXoLZChV3djunywUS6HarMcxLKPZ1i3xUpzYUu6k8PAfE3aH8txQ2mNg2Xy4pNuzhHcbU",
  "key19": "q9w8r7eyLb8GD6Qqr44mYzysfinDNqrPYVe6yGMfyFAm3x4Jnps4Z7bLYv1Nx4vTK9dtdz9BosVQaBAr65EeZYJ",
  "key20": "51C1Syw1Do9tD62FdKDh3czf9GMhyZHwY1XpJ5sET7ZBSTfb5x1jNfS8cWE65wTcRxoQc1qRA4zSxHUhCzoQEkRi",
  "key21": "2kmfuVfNFxkCQXkhykNLWZZeorcLuRie41JgMfsLEvZ3TNPq8aJ3BzaHPjdQXKZxeuQnX5PvRC7T8HpUMmtJWtA",
  "key22": "2nVgL6vukU3u5HqdXUGm3ZgxQbWKstfKcbDALPmQmEienXJtna1RHkweSxLvPQHoQiy2ge6bMAriiU4dfYBAg6Aj",
  "key23": "4iuvW8r81CoRGbwDAYSX13BbqCrpnPPxVZFZr8Hyk5K6uio3bd3XrnAvadbcEFf2phZPkmVVZdt492DqDHCwVnbN",
  "key24": "2qAMmrtPu3cPPMojeDVW18rh1XLx1ui1ohkjZu8HN5P4qQxWN7sFrvTY7Nh7Wy7LuYPk5MQbtizTLyxrV8Vhk1J9",
  "key25": "544iCFcV8nXWNUv76zJs68uWaPN3N5Zmu8rYs2bwbGBjtc8rbxPPFSyqgGEHb6eVfQZ31aFGAUXiCmxNKvR59QfE",
  "key26": "2AtkRUJp2g3FuAo5sGypsjmSEjCfzcyi3bphw73dGeBKdvwaTgLczGBHExY2QBZ9WA25DHds4CEV7898h4sFjrbv",
  "key27": "3Wnh18PRx8p2dyfJuSZ5naEJESue8ncbK5iHryhXctWoe1cEv41WgW6fAyoT6UazvEjZr99w4UnhF4bGLX9i4ovr",
  "key28": "5sbsfUGzYAwPxPFRtUHuXbw6Ff5ps3gZTMML3jYZtKKuZSogDK2oP5iXGmz1X1rgVr9zh62v7qCGnCx9bNPcj6K6"
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
