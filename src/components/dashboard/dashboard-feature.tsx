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
    "4pQmcK8rKqYXFuENeGNzaQ6Xg1xd4CZfAdvMHj5oBK2XwwTF2TbrBpuZo2MLsWtrw7Q4fUh1Y5zaA2ibjcEbqdhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmRZ8SPp3hofaH5Lprn7yM6E2NCBGCGEcXxNsuk7bPje7duo2esVLP2pzZc4KUBxK1waq2LZFaNN9kZPowXgTTX",
  "key1": "3g63wQEVki7tpvuYgQ8Uj9eC5xMjUApkUpBrkn3JbB1f8Hb76yQkUAfAWqkhMJJrennXA5MTKcpLVK3f7bNsMGfM",
  "key2": "B3eULS3Dx2LHLANC39CB499uxg9dcpduJP4e4MbU84XFe14qxTF1uaXzfNoiJrBX2JWhV6duSJeHx1kfYZqSBuW",
  "key3": "5Z6zUWsJcsRCRhvitQjCZBMkYuwqxKhgCMpkjgeAfkG6AQioZDtFiUP32PaAHnrkUNSKPUpBGRqENQUtcwY1MiEf",
  "key4": "3jCr9r2A81qvgkxufCE2XNvKHyNAMDwBJ1V6kei7iM7LQhztBFmWSfGqdmEGwBr1y4y2PSahH7nbFAPKodWDvC1k",
  "key5": "5swYTbYQ5SyyoH5u4FJgt1xcQRJxpoGWP56YqnKcGUkzAMghMPuK6aGhVHutSx7MFCUkYTFb9QxsuRmQph2vdmqB",
  "key6": "5SeybTttg5L6cnGbDBKhDE5nU96Urgiy6pUrpkFE5WBkYPw4cJ8YEKSXgy7yr6V74HfUsEgeWQ3JHCrnZMQTscM2",
  "key7": "5dW9J4ZukP8P15m66Tan2mcSEiTZbM8cfBuas7AHcrW4cRx4nLHH8xcNLzYdphbRy48QSZscKTW7NHnoevRm1LfU",
  "key8": "5nsRCDdcHB7SCvCXA6VVCY3ue4zYqtVnSoWQYUcnyUJR1qpwrWLuroPyTpx6TSjajweokDV2LXKxgtV5DMakNXTt",
  "key9": "5YnAnqsbMKFapwFYJxjg2BXkm2CXYc9xwC8sWrDaGKzQjrh4RzuafqRPSjJQ3pDu2isoUNr1CsUQK6CqwphJ1xH3",
  "key10": "3WgVfdyJCEZfBmB45H8psijb6BcZGjiGQQrARsymwoaTh3Jbf4UbxUcWmBLiNcrCw7EEX8Awre7sUi15VjQhADrn",
  "key11": "3QwVEvKxSvecet6YQFNdio5MSNhxwwEuppBuynSBLzWRMLUtcjqg8LZuraadfwFWV1aZ83eJDnAMscutMbjj2JRC",
  "key12": "4vWNXcCkFpnG9eMzCjfL4ATggheMc72QVFpqh6oxnUiqixYvScWo2m71THTmrT4TDL34a2XSUkf36hUhRLfTWkuK",
  "key13": "5ij3jPo8nuMe35zGXGXdDrggogYkqVXSshKFpq84SEmPuKTN4xYKsm1xYBwnKf4rhu2cVLF8x3adYBivyaVd8Yey",
  "key14": "2ePUYQCCBizWm2QaK6fW8GptYU3srvDZNGmGFKqss6HXG6c4zhYekA14NAX3WDQqKkLpqvjrCvxXG4hao3t3Cc6U",
  "key15": "65RK9y7Zd1UDQ8BYYwb9SbtvdsUqNvG38FgHyURtDCheUuyxp47RzzpsAdKCbYXR2YjSE2ox2vUsHMrTLh4Pe1fh",
  "key16": "3ef9WmutD6a2pimGubApeRBBTEuveAdmnhMTmoAgPNMLtUdbxd4RVGtQs8bbRbjTSHNFrA1fk2ZdQwAUBMj8aD3r",
  "key17": "5fUYWuJvdcC9MgegiAphEu96mV4HdHdjVvM36s3VjogWZrP9SzywbqdydEVgHZbBSmzRq68x6fqabZEhPSENb66A",
  "key18": "4RjmtuRi3nLXeebzRLdDf86R9eh8my5LxNvnwwh47oueFnwYoRqwVA8KiDzMQfxR95iJ8mWhHDZmgs8jHPtmxmEX",
  "key19": "2uZ2iDrM8ziFdUCjTsVFL1QiVeQDXN8npSh9L7Q53jNegyAzkkYxgBVekhTXJNkeu8PBFtZyuLuLRFsxrCFUvW1p",
  "key20": "2At1m2svBNGrx3NADknd6zWzKLtGSbXRaEhWWgAi3Gr729dDgF8MAFHeMErSkcS9DDSuvsZANJEtNsY2qpT86N5k",
  "key21": "GbQTbT9ymsKXVhHU1CQC4dPDg2PdGYmDoRd92b13hAUZ5VzHYPKpg66xFNmkwg3CtYnfgMAA6nR4co6vEgzS9HC",
  "key22": "3oftRGUvrz4B46GLo9dzfxwTCtmKHPaZX2JDuiDvfHNtJwT2D5ZdUk2mF8wE1UASRefNg16rDkbCaBZZb74Goix1",
  "key23": "5kUjQw9253rsy1ae1ZojtFcbKDtrzuufphC4TdgQdy4WHSd6Rerh3q5cgrFAPBEewkHCHAx5ex9tsRRg6kCbtxsC",
  "key24": "5TX3XowDWE4YCfY9g8YeAP98UFk15t1jJxkak2muPGpYcdjQHzNdqdg3Ce1s1r8B2w2VoxiQzL9ovurcr3CVjFew",
  "key25": "3M7Hp9wdsNFYg4tSLxkjQdAwcmKYdc6goTdTUk6QxyvooCAS2hCQnniLxrGWne57zBHHjmRw73Nh2P5bJtBSjVxz",
  "key26": "2UpbGccWDjZBRMsDk2gQcSJXvzKGmNsp7V2rPeFhK3JCxfBcFMAzLQ6FT3PCHwTELnvsboNnuEHCKkAJLqvarTJ1",
  "key27": "oY7RamBrATntfetSkjP3fPr3e5YFGKEYN4oewPpULFTgYhTH5Zu9vrktWuFSi2CTRx2qS55mPSF6LLhaFqHQmDM",
  "key28": "5XEYrMb4jGMmaGsjnTTaSMh5ejGShthGNJFMHJFJmR1fsR9S3NsK1HkZcSArcpiSk19P6KrE91d4p1XXQj8f8bPN",
  "key29": "3GksqdoA4an2FhQmUoh1Aa1LEZDrGUqraKzaFbZcYdyd6V4Kp8XHyWBKK9oXSbmkf7qcgwpzhdTSH316BbA6LuZu",
  "key30": "3VmAR1hkKDEHsWeBzShCrHyxa6Wbwu9ZM3fms1UHWjsu5JSBEP2UkBiP4Lsc8rmzYBkyhdPanD8jiMB76ASCfw3D",
  "key31": "5vm2GgBRWceXFXXUjTN542yyrwNQvRbN2t7dfMoNWNgguqaCn9vdVioqJadBmz3WMLs2mvEsMDP8NSSVhdGAHn9",
  "key32": "4UGprdnBU6FgFigML4xaH5iaawGKQhk3p9a2hW9Yrotpd9ynDrFsSS8qSzMUjAmiW4J1V6tVwQUg1X4AGJoL5dDx",
  "key33": "38abh6AvWc8A2SXMi32TCnD8etMwKe8qBKPNqt9S77vyQ9NiCtFrj3arDo2oNz7YhaNkmcquCzRvqKLRXNs3wFqZ",
  "key34": "5ESCU8EwbPjxMXLMavFCpxCMmcwJpeSokSMgVgwi3aEbBYkkPofCU6kGCkhGKgRYnGmk1t8fbNsCzvo5iuuGHcrB",
  "key35": "4ueQAjeasR1UUykdRy9739EXfe5dUbHrmSJZdzUTAi3s5rZs1eJcVPAr54mF3ZhNt6HdHJZUfUmznsCxPfXEzCx9",
  "key36": "5uqzMr5esW45bKFFwSebtP67TAGxsSQ6zubGatJtUQ5RuWBUEirz6cq4JnpeasEFqhfzZfRyrUg5479HJjX6uNkk",
  "key37": "2UzZ6vSigdQ3cZJs6rwiDadYNc9ek8Ny97rvrxJPhzfrqa43zZqiC87RXnFpcvt41PsFPajHdLdCKsBDR3mF7WNR"
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
