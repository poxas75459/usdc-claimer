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
    "2gGyjNNtG7UTskwZwqt4cZ8WyYZjmCyvTmYw6xM6xHdoTbuUCGSvJSS6VAHxXFAmBf6BTjwHXrb2xNuK3ATWXL6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggNXP98fCHrRMGowrtkZbjU4JBUjjU2X5KfWgYi2xbNrTLgJiUCT6aHLvLjaCRuqC75gvUSoohqwTZwXwr6xZ2A",
  "key1": "5jK672F24p2kWHq5p68xLnuoAsShmctipLWjdDgMpNM7W3fyWmDBK1zXsKsACzwD2A7SzmtyFZ8DZtuBu2XVQCQj",
  "key2": "5LUWjuT6Ce8ckLGuEM99sgkvwsoKk2UNSABda5MMzu2Azn6DwxAAwyHLoC5YJsBJz7Ux5ckF6eFDUvurcmFb34Td",
  "key3": "w4gP6wK3KsbaW6irw47J1egWzuExFPrkhr41PriRXPyFs81Hw9SDqKft6RsFukKGA62pf8Tqx8gx51fpp2Pc6kb",
  "key4": "4Hkqar3pS7jfZbyWw8pGqAp5eyTmdxoUqPgAeQi6LXgzBYKcKGfSjTDnuYJXJTPjm8UX69xg9NfoSyGZfqGXms5o",
  "key5": "jjUdw56MtVYQYyp3UWq6Xr6t9HgzNqt48qvirtshptsAU8RYx5ExGD7mrAjnLnKo7Q5YhAfYS9pdhzppijTkG42",
  "key6": "4QLfjsQCMopDdGx3WkTK1UK6w9DX7PY6G7Yz8Pt9g3W9ETKhbKmoR3VMbbPDwqXwR3djRCWRaCvCPJ9pBPdH8PSt",
  "key7": "3c4AuK7soQJCEXvGbTzytVV6EZzybPVu9LCrx9KCqg7atKXb27PzXpH5kVzvjZdTSJjmgw6J4vihDY385AUkgKWM",
  "key8": "tdT5USk2v4QhN53NYfVRAZPfU37xP3VBX8EG5HnDFKfuRw9gtb6HN4a8qYwqUNvTgsdNqacqfh5wp9cgFCoDu13",
  "key9": "5Hcf6FVctVtGnyjXxY9LSxyLb7YjixvoEJFnRSNrQPukoKqTiq2ijn8UugzLJpRDaFr4F1xifUcT8yQyZzDCibdc",
  "key10": "5Kq9wfjvwH4vLT197twrBwy9YLyxNBxqJN6RwLBoSWKvgugsRSDbsNyJL1x6daAnRkAJEu8WZXtk47s8ZLuccD7x",
  "key11": "5GJ5wbK7U3MK4LTDkQ3A4aRJqngTsg6JfZb3TzKPbAtHuQ5WXmuCSZqMSMe66xGJwJsrQTnQUp1euvYdC2Ywi4aN",
  "key12": "xCRaVvPsDWTkZ9jY8pRsEGd4QbPLTrWUzmQjkf5oPfu2w6x5Hu51SBEizP2Lswf3EFtpJuDhpdQE16t9CeJgczp",
  "key13": "3TNVFthN4JR6FmmCXNS2GnxnvFftr3vNDPbCsm4eqW95ag1fTPr5G115oj5HqNtnLfWkzBYdaUziTmPPB7c1avZY",
  "key14": "38DZDGmo3DKfd1cyEbaZu4G341S3tT1VwoVsv15oog81crPhrA8RnB7jt8UXw1GnRriEHXvzLcs3upsHZLLEVpgp",
  "key15": "7NuH3pUCASYXrDqDFWH2THgupxkCfwC49qUFrYqjxyuVvVedNxuSnZF1u5M38psVUqj5YaPJuKYak4CLJHULjhb",
  "key16": "vTSXcfsLh4QroWS7iLfRK7XUT6u96txT8hbyywhAirde5qzQKL4JV2t5w8voHTV4XaMQP44fe2Ty1P4MjDm39sZ",
  "key17": "2p2HDe86xEWCxcvQ9fp5p3pfG7f3mRPrv21E1pQ58astxbVKWVaFARCiHCRyMALaYTPAa1hyrkV4xa17jqYbq8H",
  "key18": "4etr4WgRGDP8DVqtStcNBPS3sDevkMvi8Rm3QUQsmgTHfSLpYSN8j4SJHqHigGDFotJR3vA2oWv962abRqU4NyZx",
  "key19": "F5pMPDDgS1t16qutbaM5MR3EEZHdEDE2Mw68tmkVFaU1VkShUKiLQztLwpmDWk5eQAq2zgpEVqUgYd1HpAcEKHD",
  "key20": "3GYEmWmeXC8hGPAoNmknLFdkwVJt6pq5gc9f93aeV1RQj7ciLEk3nZ6qHyZrz6kHnZeQDpH3yoeoDxA4CpfAZc6v",
  "key21": "677eyHWKtNSoQScjquGzakBkPFPcuP5m9X6KLMQGMWCDB2jYTjaSKw1pdPegFBN9vu9vF4NFdfTmwKf9fhSn89Zy",
  "key22": "D7zc4W5J92MpHoXnKYSeMGsYPNsqwbY8z8yxJZCFnJjCTPxLzKTJh3YkhAkdYcmiYzST2cwzVRiGfLkZ44hGhRV",
  "key23": "4N9koxaPXvL9kKqdAQzffzvCvki6oard12faNfPxKykcrE4zEmTMAFdLbfZpUB9KdxNTbJJznCyz463M9QXsfGqs",
  "key24": "5dS3TaN69r26qZQpbsHeTSfavDTwuh4US9YvymBrbhA8yGESk1WLCHsmnJCGjCJndiTx8hGUEqaBR58hwb4L1Puj",
  "key25": "51YKoZThRL2S1QW2LSFLUNYJ1hWyJEGjsJniWWzjMdVSMK4dVEDutyq5y4a9RQMCqYsgk6kCn4xUEDu2yCfNaVw9",
  "key26": "3YB5vqNjXhSUvnK9djyhwdaaYAzHya6BzXqHjXHTt1eHozfN6UYBduhk5iDhDLDQT5uCUxUMyQzGAkRMUapDCCk",
  "key27": "3KpuRW9pdEsqjH2cqYKSinjTNFTBVFGwtKDvvKW8n91peM2yqUgE32pNfwNFTrQW7hL2PW3cVfMoLoCxbrFqTJYK",
  "key28": "fEX5GVLHTsn3x8h2WpPcpbfcukNAdssN1c4TcTss4pvng6mhqousEEjwepC165hLEw3W89kpac2KqCdS4nw56Qk",
  "key29": "JHa7BXXNuCy8M5XDeqaYb23pAfq4vet768hzwEtQxYpAASnXvxTvmUQfhh88XkjuiKVtfDDpcZstpKrDdYi4pz8"
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
