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
    "2HXVgRA2obD6WddnZQ5TwWC5vZbfG6gBrSzbVhupugkJ2tgcgfp3N1TBZHEvaP6LUQRh9UzHxWVzpCSvLG7H1TGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUBk4A9ogb8ku6Tukqjppvh1JKmymZqE7miBxnXdoyGEZVoZrFnHQBuxEzHutWBYmUnrXQQgZTzmGM8FHTm7Rg6",
  "key1": "3N3mnfLFXDqoWWrRzHi5Qgk6m5cxq98ZN9eo728hEp6HMVpJt9m8BRvhJ9MnvXwLLA23s5LnQEB1S7KpFZgbfDWS",
  "key2": "65nmB9x89s7AoHfBnRAURGoiGRzFSjfYFA8pC2vcavwxuEjfaPRaMhzcrXSdY4ZBH5pMs4hZhCks7mo8mZEzdw31",
  "key3": "4okKJZABmHA1HkzppxfUQ46TzePNPqRFk3pp7xKAmViEzx5bKuEBcM767BWWTzB6EqjcmPWG8cNorSjsZgJTSBg9",
  "key4": "5A6yYZPqpLxtfndkqtdjHFtmFun9buBm6AQqP2EAWuy1iybGDYa62wFqvZcLtc4S7NhViSPWPBzKTfymrcLTEhKc",
  "key5": "2L2d34idQHLuhTnioXXBtk86LNxHWNLtfQgWTqRGhQVSzTNtRrgJWFnJ5MMa6ry6oR42SSKGgWX54x1HiMiYNxh7",
  "key6": "3ckmppRdaKSJ2BmwXCAWRBm8GxTKxut8BDo35iZEH6fMJYJitMAgcgqpYdcJQXTCw8GCVgmd61yCBD1zSkef5uL",
  "key7": "5LfwPy5LkfuvYEVdairsK7cTz8x5vWa4C1L8rU5FZKuyRD7jQM4EuCZNmFUqJs7WLXxbt4SRSQT3U6GrCzWuwcc5",
  "key8": "2nj68Ntyqc7WMyu94422cfCrEBMUUXLcgqydhtdcfC2Rb3iVXSZ2bi7DXL4u5XemJnHyWRoipdUppJPUB3oiRi4X",
  "key9": "2Zpa9Uss3g6byXtcHBt19qGh6SKnRv5gpTv4J1Ge4zsdMWETi3p8AYqdzugS5voQjuoJJ8nVELYKsDA4WfZ8zNwc",
  "key10": "5pyxDMFF7mdpJgxwGtqnm2DTcYhWXX1aAwemjkSdLUQNxn98DrcgidZy5aboifdQVG8RcYj1zQ8jTQdNPNQSeKtg",
  "key11": "3E8Xefmp3SX9aJ5rkcMb3Y1vLwXQ5GgCCfWUatNqpyAXsJqXaUVxqms2k8v3qiBND6fXenEKVBiKP3rSq8Q77pWg",
  "key12": "3ZhQdfRKUyhVPL9o5VghA4GAegeGEbMb6P2bL1s8kvyZowyvBFRxpMRSWrPbvqEHGsjzeJSGb6pnZKg6NKd3MNa3",
  "key13": "2A7zoFz9zmWqUJRfaERZbEZ43Vrtz5E53JRZ3i3zrEJfmeorzQerGdxpUXacP3b6xD6Ck7TrpbytbHBxg25xdnuX",
  "key14": "UbFXmexFMpzsd9ioeXtEqpFsnj1egHeXsSAKiXENREiZ12WX7FFhPtFFqgyghNKvYecEvyQ6r8xrwT2WQguUNkM",
  "key15": "wSntSXb3fdyf5zyQzskiivEi5xzYhwfWVTwfApX7161titsLStoAAH5C23CsYr3RLAnos6rmxoddJGYLXvcEZTi",
  "key16": "3deDw1mWePBhxAufXMCFYns3tmEc56tXxE7bKFUNLmHNM1LQnuKtua3L3R8qf6xzGgpE2sVSvgRffAzBmeiu91As",
  "key17": "XbscKCmELpjFGkN2pxbMXz7tARM3T4EUeTNTeUeovFh7bJGUYqEp9Gt7YBPKavcw236NHjDvk5j23AjjSh3esyB",
  "key18": "29N9JzFPZ1UirvHRA4SjgaJinKwr9Ao84hJpxRHYTRWNPAiAXmeQzQ8TWr4oCk9KwbGJ8GmbJLZWTdSTGSyTc9zD",
  "key19": "4evMfxBiVi5s1avhezkAMKMxQiZoMAug6rCLdREvPtgyYgavPayeo4EBr2hUJKznh5T3ksewkpc9icrN64LCZY3M",
  "key20": "DwnXFNCQGqRSKWZB8KsDyG36sekY8jHpQvEh4q4a4pmgtCC3pgB7qyCRRLT5NSe762Sw2Mo3aMkKLtBrtW4RC55",
  "key21": "4b9XSXwfMus8vEL7VjXHixUsNCd6oUeqABLHbaPtps6TLDPZZiAVzJACzSbWf5yDe7H9ogiqPUEX4wZTbD7J9YFL",
  "key22": "5WbaYC1CCoZEcXdHszjsmf9NPuN1GgYszyfGADPxvbxWh4CcDnnEbmUTK8cKWKVdX1bR71XjyeZDzZyUnZAoDwMZ",
  "key23": "4zskEikyHmp3F9r6bbXAMb7MnQsHhJXUDsLVWMnr82D87QEKxm9kwV3Bj11De9WVzaTSf5218optd6e59MXrtd9E",
  "key24": "2vHzLqnq19GZJrCtadBXSqtu9Jt9RNkUsS7B7iNUF7WSp55hKprCdEZ2aVK1G3zshH1TkhCq6AEzofGwEB5GuisL",
  "key25": "3k7Em9PbZcBF5SbJzWmN6UB6iqkWYC4tKypUmsoxzM1Zw9gWwQetcTb1LLa2kkSmPqXcq95MdP9HDyuAMgTHbtGt",
  "key26": "3JX7Stu3s4CgkdDmNTRJqPWBqk7ANx2tE9hhmu4WN8iq2ezz3yiZHaCRrYASo9M14RKuCWPoFuphYsFBc5KGsMj1",
  "key27": "2A1DFoEcxoNfQCSqR83qAWMZjkZfJnKyGrr8RtJKmVnmPqJm6YQEyBxRd1gspSvLoAGpbizu1txwXFmvB5aUcwxa",
  "key28": "5zdAQpr7qhigcNfsZ9ZpfKD2cGDxPY3gFqAdpDgjaXAmXzhv7AycJ9PuZdrSdpJnsGmMDzmYYg86pfCtQtiujW2r",
  "key29": "5zoqwkfXB9fiGVzEyjD6eodKQ1yvRDCgMMeParr91sroGpvTWSPericz9WjdhcwnVNXJNbKRSmB9x7Ey1BmKUjxQ",
  "key30": "2riU53VcjFqKBfHXXRRUPhjYt9vLpbUQtqQ5Vx8jakCPAXHcuA3Yu6d4Ji6Uj4cvB51w1XxsN691tWvvbXDfzxzx",
  "key31": "73ys4PWtfREsMKu4qbFkR1Sig7A86oFEu8rJdTxfXQ4NHHJRi5KH5vapPSaadWbrDCjmYpPhj57fia8PG21p8wY",
  "key32": "4MejkysXK7V3bJfZ7Qc1mCRfVvx1AHK7w4ihZoJLcbf3TdqrHGckyxPrJwrGEUgQRGZHHa4shKNzJkRy5tyW1qM7",
  "key33": "Z5trMDATqLVNj5pUJoNLi83LB217JMm5RcX3wH7dRWJnmViY3RKnWCf7cfQrswfsVyvEym8VnWi2JJuxZJcP56r",
  "key34": "1LFnVsBuCzDmJgpm6v3Z5GLetekbCRr6aEHSn6anU3YpQziBWQ8k2vYtY4mErrnawXB2m1gN2rutj9Sq2mZZp17",
  "key35": "2dJKL9uKvJYsdLqtuVVDVUQ1pnKHgV6JZYhoJnZQ8kY3wicNP6xRcCu994xK3VstAYmtj9XqPNorMeHMXLT53WMD",
  "key36": "5hJKTijkZYY4kAT7VxaKYk6PKWiexE8ssNbXGeM3wNcjPWhheixKa2sByW3StXhWsNCwCLsC77nQLMbZQVsxvsjG",
  "key37": "3jguL9wBgLXW3fUW6tScXDrbVKj3T2JuRmcW4obpwemkXV5vCUXv6o6ZV9nMCsK1Xno9CgSNePNNnyUBT3FKpjdB",
  "key38": "38MJddLVujTXAbFR4esfupMV9gJa4AQw1QZy3oYeJbLH48w8BupoEQjDXx3hDFYQV4Ey1xkvcLx37wy5sF4wFfH1",
  "key39": "3unQ2ZmCgY7ik5FTDYbGLuw6p8Pv73P2KDhtW3Jsd6wHujewxqKZ7EA6NzxG6LAEjaBaKTRix2W673QMpSvPJq2y",
  "key40": "37ty9cuVz2utPXYz4m3G4Nt395jeMcRKZ6SmCq3D3ovCQqNoJpLzqD9rgGEKqNvXE3vXS3yXo1QhigSpCCoMRXK6",
  "key41": "hLPwaxkvjgZW6in1Y4AJrrG5D8PMBo4KUWtSVuNxDLWKcwStuLwjmusM9DeFNMjAw2e2kRPWwHXxCGUdKoqQ59r",
  "key42": "4vXckFaqoVaMVYwjBqP3dCmCDLMWYZuAiFZ56cTSRmGgwZz2otoxhrAWQtcYFmLvGfaJgbdryDBa3k66CDBMFVBU",
  "key43": "22paeoKhdjHh9HHhGH3DUqAVwV8B4XXvzJpcTApbE5RWxHmmKvCKvpYnbme9Aa7CAHpPhGiLp9Z21hpy8KpaW5YU",
  "key44": "zDiiRAgQPexQx87fz9YJxTRERWEwCww36sK1cyUtEgry1zR1jWQinNBRFVuLzEuWyEWScNeDSmLP3rhJc8p4f9m",
  "key45": "3kJHm1a8kPW1dMEEJmqCwP1qt3NmAA4T3LvTKgLXKJhYRVGRCfn3c4zeg27v8dETRLapoHskKrzB1AeeH5H8ydHV",
  "key46": "4AKziGFGkjJSN81Cs3pauG4vhn36xF2eG3JRwY8Sj4Dmk4SK8pKC8XpZbEhvhLbLLnCFUhexnwKTxEUyfLRCTbtx"
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
