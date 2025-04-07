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
    "3UbmiwCSU2V3pw4inPJSkAchXr4BzSp9UUGMWFfCBwAL112z1TXi8dzUS4bPsL3wEAu4v8vZWaSficb6AC7gn9PT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thVy8GLDkC3XQPEWp9XgnAgnCWft2ov1FFXxthyPEaMGjNLpjnSoE5SWeHnxANuDEfvWUuTQvHiZZf842n1stji",
  "key1": "rzBuzaMrtF1rVohRe8LZmjvyVt8rDn2xEfo5AvUxrH25f2XfrvzksSX6cjCJtBrBZbX5pTkdEeq4KnWTTueiXcz",
  "key2": "4nzoc1EVUnG6o8UK2xrr4Nr9qtM3qA2dNVaVSDxVVMitHuEihkdftQCRj5wqC5uV5P4R8pLX5245H2gejhT8gN64",
  "key3": "5Kk2ns4Xjfu6LvWMV6mpPcdrHeAqcAZWJr1mBTRfFiHotSSgRuCwYcL3D31Ak16Ct8jFUqig8xHYtyGMqPQQYZJk",
  "key4": "5wpFyd2ATYjeU6vys4RtmhWFj4vraaUZJD1xsp9VrautrTAbHWLuebvpehEwArePfowGHZ5NRZFnTi91mqU9BJzC",
  "key5": "3NKita7LmjsK2EU6Y6XpjdCk1s32YcbS7QR2xgrbhG8xFUTWHDhg5X8f5vNb9ctUcR81iFUgWuhUTbdwXidFhJie",
  "key6": "39FB2ChMZvbCi2uXgY7SqAGa5XUGvyLYmRnja8CzUQkZKR14doiToMdC5TJ5AQTKG18KVueWrjFNaxQA8JMko3bZ",
  "key7": "5yyuYNTu9K1CUifQ3V8EcXoGoVvhyfLMPWxk58UYa63MVpq922aiXwzqUTTqGctDDFTEJX5GaJZoHTnLR66B5mpT",
  "key8": "24kFfZdkfTLf9yY9t2gHLjdKWZdsKVzr9mLkDH7zd7h3ALQe2TPBHvD612YxjvMmjPvShZs75hrKRdSicCKoNkga",
  "key9": "HRFCh4VdsMENdC9hD5D1JVEofXmKn9xbjjzJw8Cezsr6L89bN31MyGGSk5oUPw9W8GHqVDfrVW2k18QnvYt8ycQ",
  "key10": "3HJSjPD32G3y5dAjWPybu9nnALL3TD5FPofuiWAugbohNSK3Grv27EJuuUnWeZNWYy681VxVjsceigyfapSouoQv",
  "key11": "3U1pMrpA6QYQTrQj5onBDWNoRgBcZhVXU2vebVmADvfo7H69emMffd8GYY7nLsdS7XXJpR5sEpFtUrGm9KJA8kRd",
  "key12": "axqFQHPcZ9fPRNCkEEob2qnNzW55qTjg98ct46T2bdNuMnyvDXqGiRqx1YVo31tVVTqaGsdDkWteRjibqUN2PQn",
  "key13": "MQBPPTXDTJk7DSNm57WPnuJ4aMzt6AFn9PebYkL2x8o2D7Ds3KMoEdwWGNSYuvPhUPMWWTfGRs1JQiofZBrrEMp",
  "key14": "AXuawJQd6a7SLurx4JfbG6iS72vHnPQFQ2BcnKLUzpKrX8jYVbTxqHW4kNYvSFFzfaCPPDJKBCsasVk26AMVqZF",
  "key15": "5Brg3Ce65AzotvACASDm5S9SafuEEwmhUVgeUfG2K4KLyNbRHnMCaaGxnbZT9uCxVE9f1WmH7WhfXiL1UivKviTH",
  "key16": "5iN8RHuUjbY2zRJtedo3ujE664DtU4ZA57nqiUHknoBeXMmQqKv9Eo3AbQ1BzLggFSHniZrB31JvynZX4Xf92WER",
  "key17": "5GHEkcD9vtN5gFWdka5Cdc71eN7RaaLJZaAZ6gqjHsc11SnsCHPNVNWXPRaVY5Dx5kdtf9ecUpw9h7ZHCBe3u968",
  "key18": "5LsG36tD6UQp472Up6iNxKedwHNxKuD6exezLq35h1isiWwaBqvuYzF8zvBocyLApSbmoBZfFEAunGGg9TuemdKg",
  "key19": "56fw9ueEAxjxn8RkGgj6J9CUGRHuV1L7oBfoDz3CfuXRLYgTmuTnLbXvirDSM5CLmQLg6W5rD1wfWEtZqDTHkp3M",
  "key20": "TDeLNVgwxQ3BfybKptxnncMeh9UhoUbFsKtRMGFiX55zeiFM2VegjjNXRwgw9gTnLoHjg5fFqkRQdv96Zjb2igc",
  "key21": "2eEy5nR14AYEdVBnaMC2vCT2xQoonUetVj4T6rYnYb57CLpbjNtUDhDyP9CqUShLZzi2FEtge516Jiahx3k2Ttts",
  "key22": "tyLWSqXwGPUjmtzPGnznJBr1u5AJrz8Fo1UsqLLPXPhCzEywh9NfsHppSgbLqNayJkCvqdJdSsdidyvTufVKVvz",
  "key23": "A4Yp6UNLHbnZGzTqZp8MRujRn95esaCX86pbwpPswq18mz58W3xrLCK2p2sR6eqrSZagRyTuqiBNbu38ff4AZdE",
  "key24": "2Sd7FmrtxZU8dKkVqihYzedq22byndB7HPgNzxfrEdtFHRQ49vdv2tCTmHY88TdWdsdVX7ZTjHxKefWMrRwCU4K7",
  "key25": "4JuRKWkHcxEbd2PK2bs5UPXveno3v7XLCEkmZBR7ScBPFhE7LBokSByKQ4Yt5N7Gk4LviXu8GKgvkTAnK7DEMEEC",
  "key26": "26tLxqYLneoU2aKDe76yKKFV97g11AeefDGjoYMPX6h2naM4dH7jqs6LABY8RvfDTG2KVAbCXdmsXTwWpyFjJch8",
  "key27": "57r8doP9FrVj76ArrSG6eGfHa4HnRtSmWaxBQiqkiyUQK6qWoFcHq5keRLRVZ1sMTsp9Gtiqdy3j5Roni3geDPyg",
  "key28": "5suCTUsWiXKWWR4LQtyfYTRMjiQ1gGc2NSoHNAqTH7bsT59MPUiKoDN3XjGHQv9TSmPTUtDPtFAcEYR43mu2JaMh",
  "key29": "3Hb5p4gb7qqQTpZKeEML5WPkUBgwbp52NQ6sC5WxDZ3mLKhBbhuEJYd9pLSqQtGWKGtZjKTxiec7nPcLKty25WdM",
  "key30": "4At4b6YwuWgRAJiUS3DeRub8nScuKr2phdFrNsZWd4VCk9qjQongk2EZCoprybDYxbwwHiV3tfWD7fJSwFqbyw2L",
  "key31": "2CYj5ypENMkzURFuKVBNa6TKzKzrP4AfedmYs1m5BGmXtfb6ebLjMkpSHzK9ssSKvC9LsQL3RAz4xsYjP1U5C8tm",
  "key32": "2ZLaqhz3naZX5JnoETMsmGKsdhrcdypdxzmMKid5MaAf3UuCbSdLgzjXi8yTDwsfiEq93J74y8Npwq6kRf18bL4B"
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
