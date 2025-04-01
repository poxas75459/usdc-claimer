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
    "48itNRxui7NjwZPVzBXniEsKUX7v9wvntnhWzJwMUhvVXvggThsnQyhBiY7csCHg8PKGHLizq5viokwbYN5JzM7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxAVDfVp9d91FoNCgLepKTTZKe3fRoaxSomnuvBSpBKwyKspSQNyXVnweS5aQbrdjz9JicAs8oQNBtvhkzxaZtK",
  "key1": "3yP42WWpDRTnLTxcPc1fVJRbGimJ8eHcr4CCCqURrb1UsNhGw1YqfvVscApzdcg84CKhkzKsS4mieeaGeDiFdA2Y",
  "key2": "5wUSLCACuANSCrR5ottNxbLUbcqRtNgwR7FhoFwd8qhsnbXN7p29NWaiLc5w5N7WZkEugjMC1jHDvwvamsPYf24t",
  "key3": "HqebUNh7cHfisckJekKjcfDDW8aniSozFSerw7rLXUG3CkJ4diyemGYgGpCPDUnnKMKMwejAoqFzUGhVFGQW5zH",
  "key4": "2JP5M1HKUZFHrYUwwWCYBY737b2GptzMYXvpsKDivvikvvqhgkKhUiy5DAh8tGa4g3fPTH8yifBV6TEAD6sUcthp",
  "key5": "65votWWCoZDQfkrZ2Jg8qn7nQYU6Ta5vL1vLdd5XtGSGJWkz8Sd1tjA36UTF1fA29GNtcgLoH7tKdJpt7ovnNhnA",
  "key6": "3vJ73CY6fnKxZGQL6BdhNatfQ3YXWswwWoRupEKdKE1aCf27Y6Hkm7NnbnoF1PhX7vULFGpakHn4vcqqn1UkGW65",
  "key7": "4RiZGoYrvu2BvCf2ENmjtYXqHWo8g9jLyGpaAGP4e5qDW4Q5h6LPCwLNYUtffU45cym1LYU2qxjFowUzRZajhMuv",
  "key8": "55wMg7t1vSFLWB7Pp8gScCMJtSWfz5zjetjy1GiVTRMKbJjyiTA6ckLCAtyfx6XR35x8Kj5qF6nSbMnnQoW7PXuL",
  "key9": "5KzsRD7Xba1RNMZYMfsY8XPDce6DTeuVsXfVHb8Xxe4qo2vuL3RcdMdEZHtZgUWhhTekiz8V9m1eiEthRfhfJWQM",
  "key10": "4vhh8uCoRHWWVef7A7HDzH5FUGVTYw2iNisM1KM6Dzm1fSabBLitHoZXPd1c7ZLwniPEGXs3rHYnXAQsyirdHaJG",
  "key11": "CezEW1dh6DieFtQrxo7jzpC7aVWmns3XmNbzrNJqVCEUG2fks5y8oPDduH8QxWou2j98pQM63aMCC42GcH7Zu8X",
  "key12": "2mKTZit5cxavCdTj7aLCdQ4MwQhAYC3he3Pmw6msHqRWccvWDm33zdPB6EFjNM2ebuCHiGUckP68YnmnSJ6GcoQx",
  "key13": "2ks7xsadUz9PRcD1e7H8MdLNE3wrZjuCZ5zegizzJSwfYpd3Q2Q8cbw1ZE25XMPRmB65FcJSFyhB9ShGo17esb74",
  "key14": "YDAC522jfM1fYNqCxjRwMf5RwzmBzevthoqz2wSzWCun4FnDfPmLKnLEnA8kCPxmRuLphrEziQtJZQMps9SLWir",
  "key15": "5dzVph8DM3QKvPiJKYBdWQa8KrnTCA8BeQxvp7hLi6F4A4CoNnE56KP8nGkGM84bwoHxV68BSEtguupb7khpMJVR",
  "key16": "3uKRuqpTgXi9xXCgcpnEuqtu3WHoYY6oCzUbpWUnUXtmB64JpgkUAHcsCGoA54p7simMrdn58kMmqvrQKPdwbAz8",
  "key17": "49Hv7oD69P2jDZhVaTUgs9DtcXqWQm2dFG96HgGubiMPEnSBkVrxY68cc2fqNzQULgsxVwH4JwyV9P84XUXEuaZQ",
  "key18": "5e8fBkr8zVFugoQJQ8MQ42gGFEanFpRRu6T62bNA2thBKBccVfEPJwDTXBGUFFXXyd2pU2Pxfrm8H7A7PrCkRCP",
  "key19": "3bKj39V4ff4aKXyF8DEHVmLPN47LkG1ShFQZU8HnAW1caUXvJd2obyhgNyjPJKLoUUHpGDh5GXFpcEuoc2unB5Wq",
  "key20": "5BkZ6dvceVV2FPtqRh3pRew7DqTi6ZA26G8PC3DgKzhdqknoJ2q9aDxwhLSN4wqPye6zE3MoXfeJ4r5T26VYGaR9",
  "key21": "UoEPeRtUGXxxYjneTy9UYLm5MoobYuj2xszBgbTvubJgsgufzHvET5Gtb6n3QMgFqtR7ufDN4c5rrgunm9QyVXf",
  "key22": "3zPFujbHXNJLwx4ptQvm5T9CZ8TUgnGQEqxSWsEjunvF4ERbztZPyGHfVqgFzZLyNWz5BvYFK4aEabSzKQ68WHio",
  "key23": "3YCGxXKR22wcU3gcYszxMxDCgg6PyxSvUBAJpDzKM6aeE9WRi9eBQimGQjBRJ2buYeYnGUcG8JhHBiHQKPzDtAt8",
  "key24": "3V4wYvZ9YqtCKLSzKYu2TW63cFd8Tq6YZj1QXWymrUhWpNXQfzj5jxSutCWXCMyD1tWHvMsfjBPVLhSB24rWckEX",
  "key25": "3HnGeFNr2iHjGWwN2jcPWQJk7Ux3kT2c9bhqDtxRYbaejh1YZNJooSNPfYS1qm8JChZBRRBprHqDzx1vkiCij1TF",
  "key26": "2Js6CRHzMojuKnSYhQBiv7UiZP3a3wg6sZ6D1wZqEks9T2RvRYCnE5yE1ERoT1Wy4re4oKc9o6BPN3nj4E899Ecp",
  "key27": "sr3R6PTiBabQRBGqxmigKwX8mAEChSyrA4hsdn6VGsuVAtcn4smWDrn8WPyYYyD7jp8Dkv3JY2eiSzcifQsUD8f",
  "key28": "5jYudARyABtcu3jEToNzRkd5MLWAsCVaY6NFgVWQTKKQgqcWjeQTyP1eJi7kpNKwthVPubM6a2ENsXWd7KddgP57",
  "key29": "4oNpfpmnRGxaKc7dMuu3SKA6FwanRSE5GucojSdF51MN5MHt5EScXXqSdBh6Giyw6fohUBJ7QivhrXArTMs9nu5s",
  "key30": "516hb5PzfP3TLxRWZrNcZSw9Gh6kmSwYB4ZXTfa57MNoxa7bm5RfL5dACTZn7KyJ7x5Wp9BDSVe9TyGsUQ5sWYaQ",
  "key31": "4SMPK4yvP98nmbCFEwiHGPUwygtduAt8H2WD3VTAGygbAQXEhmUWPsVa9shUn4M6uxSZTV5i8ioNdGZbyPcf4oJ7",
  "key32": "2vPZByx9bqg7XdgKAzVywUu7po6otvcnYrX3JESNpH985uDM52pypTeoiSt7QnjUXGfsJiyvqh4JKQ5SBjmZA7XG",
  "key33": "24NDNyzxiyH6zLpic7MvFXoLdor28ZCt7De3Ujt9ML9WzDQHczFhqLRRfLqRistMZpgYYAtGZyC36KL2hqg8Lc9S",
  "key34": "3dbRsGJ4oWLH53DusGopSXo9t38nYVEED1vMnPQ7Mn4TDzGUFG3XDBGCzkmTPw37tuDukk5PdwUx62aVZzS2xMee",
  "key35": "2xPrvEjESQKqWrqZCLTbG6eZ5X5ESBSDptUSK1uxoL7X4RLDN37ph23JAzf1qgNdiLj2HUoNmJbvjbthaNf6rq8b",
  "key36": "4GhvGhTNvsLrkazghS4JKzrUqmQ18oPfUdoSNDhihGjov8f4jo88y3TJBY2pwWvdYPPQYA6Mjrs7QrJdxmUSDfZm",
  "key37": "3HEM1U4VWZuJNCHq7ctzYthEPtpaeKw4cF3rqgALi4VbryAPqCR7DoVZBwXzybATjqhJf91bb94WMcvJTvxeDskj",
  "key38": "4KBgrn2qjVq45kEobN1kkADqz1etP2dbrUggGEe1CDP5D63udRf5x83ozNbb8jFjMsv9Pnp3ej6vNFKPwQQGJ3bn",
  "key39": "2hjRhqrBp597WY6KHuhHc3bayS35AZkKpU5HXxCRcxZcJ92sw1KGZh7MUJvKBB4WHcQKio29ngs8fcKASP8QefnG",
  "key40": "5vzG9M82UzqndEcdNkisFbBdnaLd2d4sovyEGAxLdGTui2ciHNGLbQE3duJ2FWfTL7hU3A47d8Zt3MP5JZW2Vbcn"
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
