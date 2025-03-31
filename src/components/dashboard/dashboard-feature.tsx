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
    "4Eb7bkBhpDyiJbdaegHeNdjca1dzBYFttATbS6WCUPtcNjmb5TL1mWBXxHr4VsDtNahaBPV3L8rjy4vkr3MHAQvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d8V8XTokSSxQnUZyrzZgw4DVjyr4BZa8GZjsDdXBTPiRLUBcfX3yJKoG26eCh1V9jjXEzr1RxBvKzPBWrkUJ4P9",
  "key1": "oi6y1GTLuhUkH9hEe4qxENUTWgG8kdvZiggDvKXUkcZFAyAtYZctgcJKFwbqjM4Uh6V3bM2ywD64GZgVZr4g8eM",
  "key2": "AGnStvvQJWAZpBg8PZBayTm5qYdBH5nW7yEmyqJHgT8aVERWg2eYVpDrebPugKsmZaBTVWHR3JgQydzvKr3VQNe",
  "key3": "4BvEEqt11zTadxzjZTUcrnNcKXcbmrePKTVCoXMTNhwKG6JCGZiRDMJjNeEgVddMNgp7DDjsEn8BAh432P17LMjW",
  "key4": "5jjGgZzNuqze8GkpGVLMLC25TFsEDvMkQ5So3xffBEpQSpeysGTMXaAR1txf3AazSMzGQTCwYcdon7SoCzV2KeFc",
  "key5": "56z6qTfjJFQ3n1CzB11owpD8YsqorbgTELtqsLySYcqYgtUgDm7gtn2ngVLqoffF3rpjRc6dWeDk11zjfbr3a36p",
  "key6": "5mCFpMW2bHkviwdnJVBNpXTsVFi5ckjd4pFFQJjivg5fBfHeb4xG1qzcbDTLaGzFHFsvzAFWJ4dsjS23cQZqF8b",
  "key7": "3MUPoPFT7tvgjfUJHYabgZ2HRi19JheimTYePYshi5N2gWmBXm83H71xm1FNTrdLaxoMhvt6qWZCNXA1MmWRWunD",
  "key8": "3MyYz7LfeJhPnJmezR7RgARu7uvSsxUuMsQCF339EYxMA3kVtpVGX219cUyicGDM6bYt27xYpsmf7HKXnVCqywP3",
  "key9": "5k9AsbYJQcieZhJd9AGhKpoantPbAbDX4ZwryMKbKLJJt3ATE3S5DDqFN3PCU62VB53g9E9AMzzaGWkh4jyTgvVb",
  "key10": "kU3XdkAvPcpb1E83EtgTR6pg9ViCVekSLDH1EGJQfWDK8ihSAKYWxGwMmCyKDWacNjwjFkREwECCBJQAKgwYEPq",
  "key11": "2ejQwMYWCdiBxHTCGMQqLff2pCuUic78jhhQwUuyjDjdx9R9ybxExWcDuEaMujZSiJsMrs66tZ2dLJkSZ3SRmdzg",
  "key12": "juMuqK8517Z4f9SqxYC3XWzLUHLhdcRBYPh6j7G6wJNWC1WBJcCW9xgb5GJw5rchikB8fZtwBYFp44UGBwrhchE",
  "key13": "25WEJjmaCKy7nWNM3w5bN3CfFudQSWNgpewrRKMt6RwT5t4nthAPM5qXC811f2PqXZPYHnUqmsVZAuczzTkEHXYX",
  "key14": "5DP4Vi6RALeEx2FX7X3g1Uoay7j5r4qvtJNi5ifSg5CkqFwcfsKzWhPeuKe97Z9PN3ncC5LFGSa76zjpUkRjCGp4",
  "key15": "4jutmDt6JzMy3G1f8v7dDbuNwa8wr8PGJ8vMeXwjyPsCWkGYAt4Em3P7ujGhGuaWBrmo1yZ4wmG5jEoyn3EkRGWg",
  "key16": "2PRAxvzDphUgLx1nvZT2wWgHHi6GPLjqeeftDXxtGH8ShqJj5kgiof1icGN1tDYdizSdtuNwByDpW9yC98earMMR",
  "key17": "2cEKMKXLAPRsA4jzjWCnLwiiq4TmQa4QcqyysKBhc8W8vfUAnHRHxeH4YL94bxfqKgmkGGpuU86xCEu4tcqnK8nE",
  "key18": "2XEUNSFpia84a8xWFCUYMUcWQTvctQLCVA1Twgt54JzHk2XDUAdKftsLoGrnaUg7hz3yCv8hHXkP75fwa7QyBXBb",
  "key19": "417qHen64znKKgt6ropwcCVijSRRbzn2ie1tT6sFhjFwJPSHLmuBYu216Vu9MgCJwRKhooSsW8T3WtjzymWVZV3d",
  "key20": "y7knH3au1LPR6frj8wsu8V9Z9urVkgUWGTmhyEshgDBPwzwxELXLLkC6LiT13u29bMt1FLspN4vAThcyE7cT8w3",
  "key21": "3aFXNZcxZpeWF3XNktWzNCHSZgb5G21qkKpaAxC3Sa5VGPcyTR3uAh6DfDn4TRYrNU81niZ64oSsBU7Y3shZPKNg",
  "key22": "5bL5aAUXTzbT3LMAdR9HxTkqjHzLaChauZS3TWfzUZPebgYBGeQaicWjp8LxUuy2escj6Wpe1HGmWJ131XFVsgjr",
  "key23": "3v3tvR2Bbd5UStMpECKmGQLQ19b9zmmovPNqg85easnnS8u8AZdV7eUVqkiQe9KePiHF1y2BoJtNPwwgamDhu6oC",
  "key24": "4DE3tV7uGmX2y41nkBs338m59suCWg3HAQD8eh36sEiwGUkMoBzJZFRHyHXDauqvPA2PEjedrcbdBRswFABnVsNg",
  "key25": "24omxkHbuKexKouTe5VqNuXihjoxzkrhchdfSijuSzL4DXNW9fVX7tFb5fNNekrdyqM3BjXssK67g8gESuezumWJ",
  "key26": "3jZtabgniCkxZmpmfPtHD3nzUz7hPky3zUUZtb2eVcSyE2YEghVMvRaHij63Vz6VMdmByYCb3BCVSyR5wPvK9iMq",
  "key27": "534hBNkQFUiWsK6Rvk8wreGb53pdtFhDm6RoQpU6FdT3namytJKrn2HxmicfsDCfNUkM1xCWG3GovUpgC1p7BYr1",
  "key28": "3HcHDSm9R4ETSfhFPvketDT7CbrXGG5BeATrhyuC65f2ZiQLhmMP4fL2a7MsgrxQbDHETbS7nztzjdUAh4aJLfuj"
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
