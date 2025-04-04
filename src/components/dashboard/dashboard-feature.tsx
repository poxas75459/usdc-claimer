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
    "5A1pJPjP2uquRPDdcS63LZp6gnt5vYjWcp9CnebDSV6bXerPDdRkzj4diZupK6m58uNrZx74PBTao9k9NEMegoKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxbMuu2EdgoL2897NFBR3bhqpJ1G278mxkj9ZvKEafDZSs79wR39J3ANMbtAPUbs6WzVSe46rXCUhd4zgL7kxkz",
  "key1": "2iMozKRvDiaDESvdjujkQb9Vf96znS2V3uXB2hK7CGCztz5yhnDDSkw1HGwkC5nx3ghtCVsRLy6FtL2XVLdQ68g5",
  "key2": "deHPN5pmrM6d75LEZMDPQtTqqVjDKrDvJPDY6kouPRGMfwLL4fRLUDQ9xpDtmQtxMN2EL77XcuFrsgm9B4L7kCF",
  "key3": "2Tt3nQkEuYcrzB2iAFXeaV6ZsyrsdZtzqjJgoPKR3pcZna7ikoiyDgNu98CG5AHKtuF88hg1tKjZ3E9w9veK6xhP",
  "key4": "511zVvhkPNxryhiwqHXwBV8L9cvDZfcxT8FXn3H6cksr9PVXDisuR72K2AhnVyFe5YbS41PAMiXVkFSC7t5hRPWz",
  "key5": "2Nz8jKRyYw5nook4pHoAbSdV6SDo8aSPifJ19tWyHMASgx2bNTBymykkEYtHYmVJAtAP5ubtKKKsVrkbmJVyVDTr",
  "key6": "swSimduwNx7d6CbiwHYdSeKLb1YJJedLdRX1sNbG9sSSXp5dh7v5feDjSPLfh9u9Qk875hGMFr3Yetf7kQKwcJF",
  "key7": "5UNAUAq1WNmohko9Xek3rfQVT6qD3FroZDJaRZP518mHkeC2zNJwwu19skZ9erLtiDxDiuyvqtM1dNrjRP9LuNDX",
  "key8": "29bi1HbPfNa9oRWcDn5AQnEjvEafRpidt1U3UG8MpvNMRkFAZkQBX3RA8SdanCV7RquPir3pzXMXemLRkoqwXcA1",
  "key9": "3NbsJFkhp6n5xo9PsYxKmmQhBdgqcwMPhwvtVvZAV7Sz2ie2znrt4C93XmTGh2AFRbyLs2EivgCWVkSMf2nAh3vt",
  "key10": "F9V6tjYq66NjV4qtek3Ae7SHD86b3BfEnMW1m7xQDtiy5eU3qxtnzkYyLesYCmSv1TrZ2asYM3iPoibHeHUgKWC",
  "key11": "5hWkLS5eSgBqW65mgFBUhFUrobLz8Zr8TEekxerYDBVhiDcrz7x2xAdkdXgtZifhT2N5rTpJ2nn4QinHRRfEPzL3",
  "key12": "4dLCdm9kZPQG7csdUrko6D7H3VqgzFpjmGWoXDtgWGu3opzVXWJxDDxuKVYimVgkNHzgA4c9Cnpv1yTyGKrZx6x7",
  "key13": "agqHLpgAnUvgVuG12nAuBrMQSKFrkTYe6b3oMf7QoKbc1uzRiFN9t7bsQf9PYDJtHtuC4xXqheJKKx1LHmiwSvx",
  "key14": "58yDSyuDT3sv4W5zqLUnKtm8MrodTkDnYPGGcnRZTibLLBZUk5RHfdA2ATtfXLCUPUGPfiYjwQArkxyG2Aj8EVvR",
  "key15": "biJNxe5FqiUGnXbP1p5ctq8mExs5Jk8a6wMh3kSBzk6oUczcxniPXGFxdS4f9FCGbqhVkqWjPBVLAfBNLpa7fWT",
  "key16": "2YSRv78MfMY3GVfTxC6Hk5pQQ1btUMyez2KZvqk7hVMbhHgjGU6LsDn2S4nHTN26uFuej6PwNkdNYxEg6v2V7eSp",
  "key17": "3yjkED3asEzhagSumjHy3PkPhpNDDvp8YWupBHGvgHvCFAdo5baSik7PeYWisYaeVoSi4NSB2gvEnyMwKBBUhjUB",
  "key18": "5XS2hghHeUGDyEpi6viXZ9GWpgMuVFH6EUE4pgdxSxtQjDpMVh2QDmbZwXYNQdnbVK3XDJcMgTmyvwMPPvzxjgfP",
  "key19": "4fbrZSjejQ7EX6nJjwDTLiZ5YHkp2nXLEKrXxyS4bZ6G4RhtEYrJfvHmFwTcVjU4sdaYTekiGSh5fpt6T5pfckzK",
  "key20": "32ExfUK8hfFSegNyK2fsQ9DnRsWCSfHosityePnPHFg7xQ97yRuAgy4jeCa8aef4jj3xvUMKNQrR7SfHGnbtgyXp",
  "key21": "5EkbpEZCVB9CMZFbC5yLeS4ZiZmtcQ9DPqYM5AecTA7NzMS3DQBrpep2HxwaBTQwd8ACyMhYtzTfrw9PH9Wrrmca",
  "key22": "28Jh9iTbYPCPpvLJ8JG3F8WYCHZQaV37BcGyAxmjbzGYgcy8mA9hJPaRYY7JyvgP1KbinR1r8BH6hyJTdDvDa7b3",
  "key23": "jXgwhsiaBMsgtSZZsf666j6aKjxWDBGKs4PgqiVpWuzLcNxQuG4prka8uDVCNSAzzUUeRAh8GUhoNTc7nG92LJD",
  "key24": "43Pt3jBhrq2adj64fSSsxd8oqSeZHn7YU7FvFDcmfeYvLK6aBeFwYWuL1v1ownC4oC9Um9C6jLbADKPoNf27j7ZV",
  "key25": "5BL2qACTM8EbmwgWh2r85MnxjRt2rQ9ag9m6qNaoDAqKv4C9EW3LC3RZScskVqv6BzKE2iQC6BNs3auL8gS1JUFx"
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
