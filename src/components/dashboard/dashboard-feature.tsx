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
    "2U7oxueJ4VMJGTEpbwD1dFWj441LMAnUTkV28SpFnY88R7zf3HRJp7rTZ4vGn6CYRqmjDw9BNU7CcqfC8dt2oRyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QAiJu2A6V4KdF3xceGfEyLzdXzvt91GFcmSmwim1fs6jiNxLhUWq9Z2v27chS19eVSVQvjj1B33CUQmCzXt24jN",
  "key1": "3jdQQZKGJXqoHUNSGaUGrZ1MQKgviLmRRtTKjfWEywu4EZMKX6aZg8PVGMTKWwqhc1P5JZD1ELpyttwZRERLTXBD",
  "key2": "4enab9csz5wf5BpzFnn5jxtZzfyBjVFYgRJzkjZETfqmp6qahcs3CLxuJfvhuH5p8Fi3rUoUq9NYrdhcVZyk7641",
  "key3": "2fQTyTr895jZWq4DebVCLbHQy5A4j9HNbQ7BWnQ6JokJmC81gvd6sm6drhD3xNrxtjwwEzikrpHfTFx9H93A46Fg",
  "key4": "5Hzu3Qf79ZpS2Fqmc7u2F1Zm6G8hQLomYQF7ycGnhevnvBWnDoCN5NHs2zaCFUSoFpxN4KmFuRxHDVYnc23LCGaS",
  "key5": "2VBPnRK4bdabq14RmnonzQBxRY9LEH2AmQkKp9oxXnmw5TSZNADy4TDc8wR8ijhwdmbjmjGYAUuvNkH6w6h5kRc4",
  "key6": "5ZPtya2HJzFELnEaWexzte4R9rMgL4kkNBGBNhMJzHr6DnWy1vo5YAtvC1qUjH9ruomjLKWRzMzevQ7J1faxRRwy",
  "key7": "2vYBxYkqyTDLgj9YG3ADBA2hZ4H7eVyAcnNhm8TYfHdc6bQ7338N5ET4Eue6Zns8oDpT28fVbgNe58WfFc6Mcqhz",
  "key8": "26PGUfju5hZ2p8ydGrycay3cuWX13zgUdXYq8PN6UkzhyoHeFKWCnKvRuWSLoqUAytmwAHJ86t9ovBAEkoDyF4xP",
  "key9": "53xLWjGGtZsq7AtKb1tpJvkW2qUjkC8GE6LjDjQ9Gv5xG9d3LPHkvydDgBoDLoKuW1ty7dkvoB4UQmqhnSg4GGeG",
  "key10": "4c4fa2pcSyRx2FooLhwUszZwDkAfaSePQK5d3KzwpggWKMUCzYxkU7isAcgLhHMdg78xEaSwLSLBrKfYs26AgN8Y",
  "key11": "3p3hWSp9xXR3FPTCwyfatiYbysWXGVgc8sMVa4RwwkfQEDi6FUHcZTxfzYYMPMhZKYLchk9htd9gwksKitBztZ7a",
  "key12": "3b4SFFy9xsffxVTGHDNawtQWv5G9J83A7RM56g65qvDzk1vigj8SCoKXT46icme9NtWD9SdYEQfWPuB4TdTrCy4N",
  "key13": "4TMiJSGtVz6okqWVKQz4k3JSGV34cH1ieivGkEq9B5G1S7qULyobDMCpL4w2kuMJXFBCQ5DHALkzCWoU7eND3HCM",
  "key14": "2DwddGLZvRhwt4W2wjWDyyVtcTVCsJt6oQrTu99VSJqF3hZLz3qpWonxp4KqEJMKztfbab2B6PohmjeczuvxFLvi",
  "key15": "2sWd8KMPuMurkDZz2XeZnANRCUvZJXisVysuHXjrhswevKSnYpfTUqPNE4RGGeRsQJQY33fvEMaXfuDtqHjBSh15",
  "key16": "PvVwoPLchUBnjNR65EFjohJjqBVxARhrtf9hcC1WQdUiaRvvMwhFejE5R8Ra2LihrPNNsiDiCSRFPbdiNaZcKa2",
  "key17": "5zwNm4BsZ64t1Mr8koYuvTTuib3C2mMEHNaBQwXkEQVKNgChMYx1F2VtRJbC3uA1Jhuhc37mRWsuwefBXfpXW98u",
  "key18": "3s5reKnBzuDUUZRfzwrxwPijCDrJQiDE8ggtoqHKeJud4XYg8NNJUJvGDpJnHvLnB8iBmchuaPFgsegpponJmJq8",
  "key19": "2JkncpSqiuQKE5Ay3xWSPYw5UdUB7CE85DCFMaB75YLBkd1wReunSwbNW3LPva2T6yiouv681WULvjhooXe83i6B",
  "key20": "4So1G4tDVLAtTeU9cAJ44sDeh1hcNzRQzaLLTiys5AaDoftpDLHbUMjhe4jj2FZvF6nufaa7MBPUjUt69Zi3n8LX",
  "key21": "2rtEwbCL7nbRPu26mcgrzk1XcHnsDgQEtWA329KLqFVi6XQa193W6uMTyavq9USoySk8aAx3JnsM2P36djihMZMp",
  "key22": "2tb7jb91sCAqyp6H8CmTFxPVtgg239AxTDDfcH6hndiC7tkztas8uHx4edLNdt8Ue88qVeVEvNQrw28W3qaH14d8",
  "key23": "5PFCzBdDvzNP4e5YU7gu4s61y78KeA47JHipt4Q4d9cyjuLiABeAT4ZMErgQtWJ9NZ1anexGAo8dAGxcBXUFcnX",
  "key24": "VagdgFLYoqJMTRXcYJc5wyzNUjcNCD5xcP2Rapo1QZAADturuxaVHQXieodA4Sn6wVKd66xNZozLg5izemVV389",
  "key25": "3xCrZk6Fm1AVwZtfjfNv7WpQMbRbpMJA4ga4kFEK9A69Uju2EZzntRZv1HiWL7SEzTTPSzTPPzUd7e17aYZT4bq2",
  "key26": "3MMYSYQZVrFeGs7xktbbiwbaASxGrE9KnadZiiu3XLVy5SY9bMMiqXHKaR9JMFFRxCD6DMQdkgfigQYBX63p2XyN",
  "key27": "4XPoZJCc26bFEDaT74fSj3a3t4GmU1vERMoPyBEUz3HKvurofAXfeqtBwRiWghqFDVVyV726WSeLW7E5YS4nYUr1",
  "key28": "59zseyXS1VRtraSomQ2QT9t8QFqgVx1hQTSBhUraW6KJ5HFyma7BujTm411MDVkrEaYttTWYsFBhtheikgFtdhyM",
  "key29": "21tnKNCzaNUskaUbyeDm16Sq18cG7usLGapEyKugBnQ7zL8oaebPTTLEgzoZUR34byX9JxKqbaybGuApfaBgPWZr"
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
