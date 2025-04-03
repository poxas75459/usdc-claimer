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
    "3e5Y3DgX3CbhzF3mhHVHc4CDwV5YEv7Mn1bwSonaT5QX19xVJmwFUhjorHSxvXHjBqNRybQGUjPtRUC9EEEHWwBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53FGyKM81BPmBhhg3penw9iLipS3CK7iP92AMc2RvwH1TLVcJDDznW7VS1vsC3rH2bGYL5eqVs1PkevdNXNttYmg",
  "key1": "mYFpyg2dRkiqpCv9MMEd3Xb5i42fyQMaWWzwLYftbr2gbZ1Zr5j1bkXhiWYm8ASHnkoP7YQjcNn5gqDHSQgWifZ",
  "key2": "Nkiv6HvuRsntgQp75DwvtZ3ZyFcoepBmbHptrWtFLdxTSbL4NTQJezvNWwJ3F5zzz3WqspmnZQboRXaJdQsSAm2",
  "key3": "3FF8r2VzPiZam6DuvwqKVW3VDTdhywCBDnNRV34WVQFDB3DeSaYsf1KAf3NQyYWEza35dQVX9i3bxJcTX9c2rQP8",
  "key4": "2GJUsfXtnVxiCBrT5BEG7WEuVk7XJmFoE3nHj8ZyyDVw9PZm4C3xkMEMsGBWXNY7XUUmQne4TAVWmChTa7ufHeiy",
  "key5": "29BKqjUJocpP9FCCZGBefA2a8R2RcwuJFf9U46nXKY5bqE1GqmroyhMjx1t7UybWxURRgUHgkKhvXuKDnTh26z9D",
  "key6": "4AdinjW9UekeCqz1RP5osFT7cfAtiLq5uVMFCkwWsUTrt8WyqMQMnrXtY37mmLiRjvXAzKj7JsoVhevPEvGDxWrn",
  "key7": "4hLJPtY9P47DEnuPX2E9ZU9c39Arj7CGM6qvpvtsnEy7wM3GWjGdkTvKHJ3Ds1rSdJRtZMGUxXAgCGDJ3KiKR2yF",
  "key8": "557WyGSVdzYEEpTDrM82F16ViRbQh96YQMfJw1oq4BmAYonDmSLVKEyNoHiULGgED2ciCPSg8pg37VvEnZr8CQho",
  "key9": "c4psave7CSXwkS2rfxTLG3c4cgvVmyLbAk3fkBG2Zvz9TwAJrikWNR6NiYrtQsuDed89s8X4N7nwQtWgops3fEm",
  "key10": "7WuSEpiD5JTevogDZqZTu86MkostsgsSSJftfMzwUDUpBYfBDaq8v6EBLMJSbYeGqBen9KbzGiQ9nF5qxE3dsNm",
  "key11": "23WuX2UoFexDPanECCQdMKJBgdPdKbT9o4ukn3sMNY3AnYuM6Xr1SvEtBEJ7n2a6ZxvXQv2By6cyBD1GURHoQWub",
  "key12": "5anUA5VGhv3tUK1Rfg7o2ZW37UBUBEC56NsYcDQzGMsE8ykXKzsctvYLK7go6W3mD6soYWMF1fycXn4BZ8UbvVdY",
  "key13": "4TJVE8hj3m2C7jVwJgHLeMgGeuq2QEC5jJ8KWRjR2ezBw3n86Aa9W8mKVHgZDCbryLhbBb36cVXHCanRMuKctZXG",
  "key14": "Yzu8BMtv7XTr3Lxnpq2NWu9zPdXjkDPzRSwDkmbrTwNHV8ubCvbq8vXKnSGVZ3uovzvKipp646mdrmHC8g8yW5U",
  "key15": "5muVeurDh726nfiE5tfNzRKZ7bLb5KzhaAJG4S3kPBFsur51RLqZhPKu3cvcaaQuQVNy3vKRm9yi39N9FdrLJdSj",
  "key16": "3T6vcMTmGjpvZA6Rfae5TBLHmhtVtK3nqR9yak1QVivbU3V9Z1iof9tt76KjXKFTUpcwPmhZEBL3EYJhhAYAzfLU",
  "key17": "SQBXzwsDrQcy33v5DRfP1V6mgmducagANqfJHcg7FuwahB11fV9xC3yKxFZWVWFJem3qZp3YTexv2uZcsDGQdT2",
  "key18": "26dsqSiSQmKCFKyriTzcKk2bcN13TShHV6EEU9ihTmoabZMfEw3ayoVfpgBcaipED5yCkjw1GFmHJNjUewfuZRJw",
  "key19": "4RbFvoW58fvyGaHeyio7eV8dpCdyydN1CF71LkxxRwwajQbt138sPzkQv2ANurtGVHDfwLjUmUKRfyZiCYToh3Ee",
  "key20": "CuJXN95pEAGNgTxvmUQi8KJsfuNnL3bWCLXsmhNER9JZ5RkzT7QE8ohv6JuAUiZ3Tn4zovUQxtb5KLSMjXsiggx",
  "key21": "5ugjMRTZFiRosS49AhacbnPiY423fMgA1tTZikTcVSPzqzynHzP84gbginT63xHxyQyE1ZCFwoWtCH8VpDFXAXQo",
  "key22": "3UB2aPHBb9uxPn9v8H5mQ7iayvpexQDQWeircX3iLm1QJWVXufVZXRcK2PYtvakJtW6RchmyZ7fU18658VcaMGEM",
  "key23": "4VoD2MJYHjDiVD2R1U1bsnqK7paio1uVBDGHU3g76YionRoFcMJtvciPfZ4dF2G57aSd8Qq1z1B3mbsGLgwHqQwS",
  "key24": "44Wsm7FXgg72gDmx1mUNwvUE4jq36HdR7QPyNaJA6Em3gxe6fKvKeYbAoqbmgM2miWxXE2u4HRbeP5Bcehf4AhVt"
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
