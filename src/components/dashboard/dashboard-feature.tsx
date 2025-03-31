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
    "4zBvCyybiyxQMV2rc9W9VtVdEUiy7PuxuKyrCxVQGf721qg4yqB5RQ1yMq72Tovm27DnXNuf2wmNwEEXmfCsVzbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYHt5Gfd35PqGKwMMwSqFyrWPw7jocZF35zChci8y6PXiAomM4vzW752ARyXBiL23NGQ6fKyJ5HCHiZLNcn6eib",
  "key1": "5qfydZHMQDKhpfwJao6PjiP9rebt3TuWFB2DwAwa923ghcC2ZyTLkSjJc7w3Ba8phZxcCXBPob6FnRDjh2KKSesU",
  "key2": "225v2ApUxMMCKW6xDv1XY2VhDHrRWCmqSLe2t39gYzs6eRPZpDquH1nfhLMBfjtvKADZeL7GKBtR1TumHXa3w1nu",
  "key3": "35pH7599hu1oLZd3DbJpz5cNRbma3P8bDiaKmcXKnu82NvuCj3Y2VhcJUbQ88PGLkKowMTCF2jKVoAdvRsfR45Sf",
  "key4": "48BPbXmvt1bXoZAuPAjC7SjWDMHoZi6Xxh2ycZGka8BRfMZvkuVKjPLHh3zX7jEA9QJwawdtsqkGFuwrcPPBuy9o",
  "key5": "2Sp34DqMicQb2RyjAbSymKrhcVZPHxXsRQhpSfxt69umrfWN598BqnJsLd7QxzgbTrmgQBL3ZsxAjW62kUeXCRMf",
  "key6": "5oPPznMFd88a2xyLeSvmBjkEPHhVeKGhbcx4Qakh9wn6sWvbHHD5v2CurfhsebYJmLjebxSVqbwJb1uKKddEV78v",
  "key7": "LTAE9KK2uCoJeMiaLuhXAwMbM5JYpuPaCUZmwqZXYAC45v5pFUKNpmMQi6ta8EUvD8yMNbvE28VmNr33s53QS8o",
  "key8": "3xMvheTS3umpXYRMpEtcrDYNFs1NqdgdXRWdEv8fKEbJoE5iAPyKEEDEcEkb34hWCbfSiLem2D7CtUrdNqoiApwE",
  "key9": "5FmNKMHnkxoHC5vVLLkoH5ap4Drc2APCvPL3NvTNRu2N6DQHL6GodcLMEdGhjo2Qryj84yVt6jN36g6aVsoU9rrc",
  "key10": "3vVdWpwiuQsEeUvAftCYn7u7fDUXTUuuEhBeTE5efiL41CtZBS5mR4eGBhuCHQ6yGsiDLBgvhYQFCLgCTMC85czj",
  "key11": "aN3HDNACJ7TtcHXk8DHwfoCTbeuDoWMnCruGz23dedEYeyqRb177QLNmQKyUcrJhrE6Bt9kZVoZGLyNgVPkdnLT",
  "key12": "3mN2Cbh7npaMSgeryVBN951RiKJ74EXeZHasnXuny4ufGWZqV4Tmwb9vLSdzUaKuG3G6HvvUcowHMwHMcJ62C4Lt",
  "key13": "26m3gbuQBFoWRjgJrD5DuajEmpyyNioHE5ujusKWfRShxXPmUkPYwo7pagPHrddqPgUTNm1KSpxgqSpkekXWyJbr",
  "key14": "3FR2siznPPE1ahFgGcouWJpRz5aNicUDNLUNzi3HYS7Foykj4fesUj71Jaf19bQzfTMv9WDQPjkHrYEnJo5ERS1N",
  "key15": "59cgaAoaQYWSEn2ahbCWZJ19dEgr5WbtVbxp57ajdHaARNQVnxYGoVpxkY8audJ4hcqhRqsECfrUeVyPhvzrG3fg",
  "key16": "4FsTEnLiWwfKWw2oKm6ZGa78uAhdELkyppP6UmWRYh86DAhNre1NrvMP56ewE1PwMMFR5XksbKksyPhNsMXNACZf",
  "key17": "2dZDs1Y56EV4S3AZLmuEpTtJHnf66gmQYd5hhB1HnehUaB5AtUEYcZubbcxRx2kksb4iZQTJhn8Ko7Y411ENW8c1",
  "key18": "3veVET4DtGrt6x4zkDFapS1TBkwYRhzmWjDFQpZ6w7zru3adtfJFtJRj9dLvjUWEBPXbDyMSbPP4pVzvtdNopMdp",
  "key19": "3nL8NBHPoPWjq3igShTgaHyvTs2d2BgtCj7fh7taDS6ZzTqgDJUBJLVgYpzdR7V99YP9vUfTShvyhzLXsfHKevVC",
  "key20": "37GHvj9X8VUSqkBL22n2fBiLkVNwHGmgf55D3Wh2AqWmnB8MsSiqn8PGufvojHsGSGQsuX4ADPH5dcjPDg3S85AJ",
  "key21": "3U7z5TPwVQeaHZ5iDV4NTV3rGyTw1Ki2y7yvNGXWhd43bArb8GX7xAwqMgLkJQQ46s9VpHUMe7L82HNaYV8367ny",
  "key22": "5cz87mv6qj6wTJtzDRcW5RwYEZiZfhPTTaPtnSKDY8JZqVas8cMgTFLPfTmJC3XftQxgfn3tvC8hzhodoT9jvU5h",
  "key23": "2itBohajWh1WRkjP7rLYStWuvd9jceNz22CGxrUuN16iJTVXzZL8syLmQp6qK6LkYh9Gaas7NQJvzAseDFqvUCoy",
  "key24": "2KvcEmqY4UFNEnpTnKKj6bMancfYhPNEqDJkoy6pEUeS4szaCpSzQnJJh1pBoWau6NdJq14E8ernVKuCANAhznpN",
  "key25": "3KReg4NNP43xdsUdbsjDLPBLqJxhnyrdtFav7QuukW9Wmg6t9ENmG1jzXr7Ut7rCermJeCQfpuThXec4fBvE55jA",
  "key26": "5JRSoAPE39GkCYMYDgyVDQEDFLGUvUr48nQCMreBgSGgPHzLgKre54mYiq7zbp4oDLKGBTtqYrGcdXU9TwLXyCv6"
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
