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
    "3oEDCVSnBMFat55cetDNphkPdX4qw5byiyG833mqDHRkNH9DrGQJghoDSB7FWi5tVn6UpLXq5qxmKoB5tBacTr94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67H24ftHL2GYaQo5spx5rL3GyuaFbt8odHTs9uVY2qUBmgru6BcHAF8Q6RvLwSPJRYGvtdA6usPLbJFCuXnZjEXa",
  "key1": "aXkVkqpQ4u4CHAfFyYs7BroSU74g8zN3YsfPq712vNdoyvppHJjCyWkisyqKLgbZbACb6WraUKgJdNWYw21F5gG",
  "key2": "nNmNiCaCp8Bc4Bby3xT3F4FJZDZ9hhhuERr6GuhTYi4qwZuJyopN61s83yZswtJZMbePw6ZQR7rsjJPfotNC7wa",
  "key3": "4EZAUNsgWgqDBcwjaq361FATG9b4X9XB5TSTMdpVorgNchEZm7DfAnv3Znbiuar87jmXRBNvKYPosAFZC2By3enB",
  "key4": "5Fn5TJMJduzuLFjDFu96Qtrf7gVt8Y1sU4MnPyfVMBa5CHamn8LMjZgNFHKkH5xWeHLDzjSG7rCu6eGVp1FRSk94",
  "key5": "2xhvbAcfLREjK6a1oF3X1fg6Snb16SgcfBLHw8kFxdS7ZM8tfvk3fpoTjGMdquehVzeNmB3qAHYDesLZdKyz83qU",
  "key6": "3sWrsqqk79c7H5NZHvWRg8jfk5FYktbSU7iyNStEeqZyBTygMKoegNzAMpic1aEvvudee9ML1mM4r7B4u1rdP5n5",
  "key7": "2m6pBdS4UJSRweA5VH8uSh6QiuXPpTTEZgH1gJs4857hniVhsy2gMjFKBwLwUqTyk3ek8utfpQaTSB9yph5u6Etf",
  "key8": "2hPAhcuHJv6sbohbzaNu5TrJZx6U4TdJtSnP9KsajrvTY8KT8mMxmJ8Qswm1TvGVjYLtygiECiJPTPrzcSUKNY6",
  "key9": "SQvJyhYLsfvdWsgnGbrkhXFav7WRPiZv2ZojUSxAqvcaSn55jQdLoCPonnqyouQ38xc5c2ZEKqei6VStGGHvj2n",
  "key10": "3x5kCVeBoryH1WkoPnDyjNGY6bt4XR6xV62uJ59hKDhVCyiTsbRmcH5FHs662XEfioWiuXgAW1Qgif8kVVki1Kaj",
  "key11": "4BxgXCx6MWksVAzCGbNcGFHrQ4nGK93B35HyaqFEy1WBQsxRjwtyJGqm7C41xV18HRhHY8Pir1FmigbwQn1UVN3j",
  "key12": "5sfdwU2zvtzaEjjoxBmkV2LKXM3N2NyAHZVd9M4825ZyDZoCeFsfKoHjpnfNq5xpfot528ER9PsWS7WjDk8ydwM7",
  "key13": "5hPNjLDbELTyGrtFwrD2u92fjDeMDdJKXrVMRgTMEqybUE989hHMFqsxaynHCvRCGL4VFHrJZTd7JCZ3c6kBmmym",
  "key14": "FNRnC8Mmp6PmQ8aaaDHfSNm3t7wwdGEYJjij6CvtPGHFgiNUi3Zp4FnrsV5fePu6gx96guBgXgXJATNXxEsWSNy",
  "key15": "2xnwGRnoGchqxFRddKP7Sgw89c6xVLMXz6ycgV9roK9hAGids36ZLNUB1YEd1mpHiB1A4oozx8X8riKG6ng2fE8n",
  "key16": "5UDMsideCMUfvJ4NUR8umBR4KEXsY9Njy54f9ouWKuTJN2hBzsT3PYb17xiAvgLtXFKwWoai1G74QM67RMuddAho",
  "key17": "4kFN6AGKNB6aQTpztNg2XY6X7FstQyxpFx24NXzmRrUPPRK5VWcMdUMZoE1zJrxKKW2Fk9dpzyLSDG1saSoSaNmF",
  "key18": "3NwykTE56zbpAnRQsBUiJXxNmGPLduZaasfaK2hYtKMtBbrL4nEce9oYMLDWfPHweTiAgCRonnGRuaKgBsx6orwC",
  "key19": "2Yr3nMHfCCz63yc2paQBSUZBZP7BPcTjYFw6ARDjzbhkpr1933stXXK9B2er9FXH4WNAownZHCBQj2S49jNw5uvX",
  "key20": "2JFst4evaV3TK369gFPkqCQfc2e2PaBY8yx3nENLrZh3uqvLd9x6d57eSRHdknuMuasZnaEm1cgMXJ91HeiYXRTZ",
  "key21": "3qsdgQiNvYSgQK55iKDjusLvESmvUUkeyj9oCMz6iJXRXsKS4DBmCoAe23itHqkhbCPwUSvT2LqiSK26brtVuVxR",
  "key22": "4BAK4eyTQz5mvdG3ZGVd3WzrDncwWFWQcwo1MrS6TRxbVk6S4MqUbxABbPYqhPGX2PS4ZHRGzfTeQdHxJRto2LjG",
  "key23": "5FHKAzrvEGsX1fWRwDQgHYmcR85SR7AXpfJpThpc1X8BjdLLsVamngVhF3xrMaNF7WXBnjNFHJGsWZmzQfxMM5k6",
  "key24": "5uSs7VMkMBVH6WcTsnL9WGyBWWektcz6VCogU8R5zdiUWRqK8DGAQqC6n48JXZzKWGPGJC6RBXDfvYhy1tA1HRb2",
  "key25": "5BuZEAXuAZ94MAHMmZj8vBWhrsge7XYPJLsDoVN9RC7aUcEr3peZ6Pfv3aH5sFT82yXqpi2ud1fv8JLpg5syWqhS",
  "key26": "LSbd5UKcTE22oUbauPSN29fakMn1Qeryciq8Ro7dqQX3C4zPEMZ6ZUeTYtWGnodss6JUcHHJMxyCaNEBd78MbGv",
  "key27": "5VPxSDQtrUrfAzZbRKHes2KobsnGTfEY8VCz7rqkQgL5Eji3Qmfqvfdwxyd3LneLAod7rNEkyvu3GaMDdQfQC8Qv",
  "key28": "5MyKjy1DxYFX6RjZvmhWXZEswgNf11sUg4ghsNVhenfUPHV6CvqzE8Np7TRrwQSLpSLEeE53dvGwSx1iGF3GYF2g",
  "key29": "33D7vzCz5VBomb9D8QyrgXcd6KWqm59xrVjwUYQsC4mYKoPZkLKGeAEMsN5oMdnTJmfvuk7DgrnKKRWXvJK2o6st",
  "key30": "5utpBFtqpwAGcDhbecJiuyLpc2NJkS38b7zskjgG9fdZYupHmagBxqrZwq4MSUjNEa5wUwRawz1v1nMCiP1ZSfUM",
  "key31": "2ZwLyKszdfcKLSuKJG6nmWUZRpZKtKXL37pU9PiJNxVGXUC2sQkJ79sEtWkhS6wSTNCVyngWtsoDbJMKVKNGiH35",
  "key32": "2WkFmwieP14xrcg9reqEKtHdSHrpzw7cqrZHstBcdnbZ8QonxUtuudyJSzsZD47MDNfYYjWRGqB9J2x8XPWdr8fR",
  "key33": "5DuzYu1pWgwonggp9dggF4qbbGE1XrTGt5xDDdcFK52Ly1iwvdSqwuUWGTau8cpF7FoAJzGvaW2fchm2LsJ7oVnA",
  "key34": "64xqrQ9Qy7FEqyKBbFC6LGVX5pLUga4ZwdgsAatEkiL9paTy4GqFSbJzESeF5eTbHBfEU4Z4f9FhfsMi8mZUxAgq",
  "key35": "5NLNRkNGFwkekeepwDBdh9Naj1GwyBVhXNzwG4wRpo8qSfUXGcByWh6EztTsGUAhZQQnsV8pNhqFqFYSra6NAySB"
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
