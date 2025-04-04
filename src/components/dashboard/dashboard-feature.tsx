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
    "4iejB8jAtv18jgfVNz2stCAs6qNskdVKk8J84dhe5bxp11W1eyMSQv2r9MvNSHhBWeQa5aUvrdBqtzoiLazC4QW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTDzRnSCFKVLeBADAzqmNQwFk9aLwnsin2NUH1zXzvcYUu1c7sLCtbmcRMhUAfabAUBiQwHghQcWRtQtBSoRxH4",
  "key1": "3jKXTdcgZPnixVZTXRpcthDor1wrv1tPLduCHDW1vzgpKgL5gqCDMK9QeJ2gPkJX3zFVUvqwLBLgwXE73T8e8qNg",
  "key2": "456Q6DHV8GAnMhfCxiRQcQChZyedfUoc8ULMjB5cMgMunsdcmfnUtsmyfRUtyw6jxkiDwaiEfnzk2xck4TsP9dqM",
  "key3": "5GcDiFtytGwiFLnSWzFseob4iMNs2VDSXmk9YZhcnAimkFmEFdaEpdfZGjyVQRZcWxyZhe2iGTppnKxc5XByyG9J",
  "key4": "yjsS5pVqHsw5ZH32R76oQtnmtKW9nFnMQgZazJjnwEFBxZFjkLziA2BCb61fCfcftQ3BQm3WNS28kkQv99H3CYg",
  "key5": "5cafxs5n9pQU8E6xkMv3R46krRwAbBTS7J7Vk5AZ7QB3gs8j5hgYpDWZBsLzDy11NPeYtwQ5XQaCRCpcAD3NEbt2",
  "key6": "4WrxHdYe2T5ADgP9HrWkCKF7R4pQ1tuAFSUVmJRWBpG8JUm77SG7kk6EJ37hdWdqFsWXWqAmW4ce4DQzX9Tcg25J",
  "key7": "mVc5L23pHAEZ1Hu5bHmVHimwuwTvR2EG9VGWxCNMR9ppppwJosNavxpk64HDD4WqVzoQKRaEwqN1vimrpbcsx8c",
  "key8": "3Yh3J9gCfqJARYRpWcGrkhabCks6zbMXYRK7p3ASGRwaDCGaMwptmpSHGnz1RVz4RyvWhozsE6LGHtp1rGJMzJZU",
  "key9": "KjhXQYmsDMy7xWB74Ljg8HVTKT7U7H1gwNJ7EWfPat8b2DhuREWyT4YgRw751xtMgg5T5THbmRuti13jTGp6H2C",
  "key10": "3Z7A28rfmd8B6qB1WX2MFFgijuTMqRjEvQwbGw3cYREXh9wcv3t8aj2CEvBNuWck2L1FnnX4fDPxCek2KnzyxTsg",
  "key11": "nRKDFMqmdvAY27oYHeT98QMfCdFyPAfvhd5bny5GnjKwLb6c5SvVHrxxLQodRbLBgqCGN8nxHDiqhSCaJ5ZV3er",
  "key12": "5nki5LsKhKNaAHmwGCRqaTSfxkVC4o9QYksneAyMJczgKzv94EmTuj3fdL871hrFTbiWM9HV6XmZncLx2PQaRYTF",
  "key13": "4wktTYXGFUkGagK4gBrGbD9BbxkfkuGQXcogQR2CR5LkUJJbpJ86GH956bwN8sYzRrr7fgbwq29YFbT6sysiLVcS",
  "key14": "56EzVQctxfmJTGrPUXvxVyBz1953axcxJLwxPgAKTX34JQjp4pMhcrXKmjKFRJMeWc5vDSoBTKTDHAdCXTR34Ca",
  "key15": "2KYJNWYHuYjUUQ9Gx8RHKpa21Qx9pCqizZMRpEj1ABatdE5paXf7rrc7J1NiRhAFEkUMdVxWzZrP9cAdvPrpGtZT",
  "key16": "7LYw9ribmAyHZTcGoXZjoc43zMpkWXsNrsTqMsSX6VHKLeRs8u4gBGCUceLpaTnjMyAFf3CH2unp4ftXgTij7Zf",
  "key17": "491A6C6Ew6djbVKkY5V3bAocg4V566MdDHG8GVgoYV6Pmubcof6rwXzXZMnTjy4qUxDQA3TiCiu9gkg7hAsmSnh3",
  "key18": "3J4hK33MRMuokQ17MBKGopkekJSU7yzQA7ybMEa3yWYzf3TvaZD5wgFmLMNHeyDV2NDjRq7sssUoh8jwED9PYzF9",
  "key19": "2ciRgWVLCzmSTkENtcTsDDV2zECcE1fNKHq15XDh6jiAjt8tdCqFJH1q9GjzoKaxg5Y6zRTjYgy7Qy31Di5X7Pk2",
  "key20": "5c9K3pxmm8jGJRMgf7r9qUnMhJrCG9MFxARAWd8CBeft3FUbkyUkQZS6X2Jd3QX335ceYsYdvh2ri76rnj5ZMUXs",
  "key21": "3Y3Xogu68EdWMStycW3RLJn4Hh5uEFXSGxeEjGsozvV9rKNhZDV4Z2BCV6ytm1Xq3RTreU14HyxFHRUN9fPEecw4",
  "key22": "4hPTXxoVY5Ak7JwRbg4LyHFD29S1rcdszRk9VzG6VmMkjajEHVuZLrVqukJfTdS4EoBHdvvtQvAW6ubR3cA7JcV",
  "key23": "nNfY4vAyohYLPU5hX38ftoki8tSKPhRBmYNtszrVfgg2ujp2MWYiXTjswkBZZnFPfJ2Wpn7fYaSVGWWLFQXtdX5",
  "key24": "tnqE8HcbzvjmBDrmy2tEVfHjMGjZE9m5M1MMefth2gb5bGHut85Xc3ajbe4hpPYVuYsarEGeueY8qNEqNvG2MjL"
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
