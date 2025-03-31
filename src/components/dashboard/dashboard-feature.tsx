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
    "34eXoB4uWViFPiSBSLoNr1NLcnw4yyzoqcKrDc2kmmtiuHKqQjeouoPfY3kFds51xnSYodDwoWMYrG9Yyamb8GnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "351xbSHeWWC5gxZEz33ussejAEWYm1sJsMMmxjhnDpdwgsjz5GuhAQrHgebYegt4fM6FHRuTAKKju9T4ZXaWvDq6",
  "key1": "22tNp7rwWkx1YVC5Qd1EBBh988Dke7jaJhMMvU6eS6KTFHyDZrPLL8W1E18HC2datAJdkvpgntQewHBapsi5eTKo",
  "key2": "58dbS45f9B3XTQJWFYUnZNmKLzNf2vkVioGJgdCB2m2C9H5ZFavbjuzACLywc3mRDGce9PS3EFai7dzAnCFjK2Z2",
  "key3": "67Km3f4fYqD5U2Ud36m9H5tJbn4Wtu9J4ZMGQ3KgePCXPAGT3ds2PnuUsdx2KcsarPNejKzR5HDHpJHq9CACJjic",
  "key4": "53efbyuYHy38rurSGxo1Em8W3k9mYVaWusSrgwBeuDY25NovPgZc4Sbfx1hBAjDF5pcPrBT5F5bWZNdToDbRdekQ",
  "key5": "2AWQHHsSdgFjJE6t6vdxkDAsNNPYhjQZURpT9ckbdr2dppLwEwLiWBRQiStUxdJixR8fi5H6ZJVbFC8i7bEhPd8o",
  "key6": "49Zy4MwZNpxnyKKkM8MLFEw9s8RSMsXpPJDp5jWPDGo187c4mMud5FmAR9r3UohEnTh6rFEN9ruiXkA67hLaA13h",
  "key7": "5pEkeMz6J39gxdPKk8fLudM5WaavP5mDMnfkyyWdmZJ93HHbKZaWU7YCF1ZrgsBefuLoJM2KCWQJ3sQZovdhrWpq",
  "key8": "3sNsMv1xfiwkh4HXajK52C2b6QTb1wy4TkbcbDn6qvoPazeka15g9ZoFy8xMvu4tf65JzN6pjbtuVxi34GRv1UpW",
  "key9": "5z8tnw8uzTo3XZKdz9McBX4TQjvDfjJtS9ELUUismjDkrQ3YsYKwFRxq9K9amSxH7du1eggAxkewGH2RrGQ9F3PH",
  "key10": "xoVVnMDXFEjerjDTqYDcnMA9gyjW7VL2qSQjygd7XHRoFU4i6G8vekgdWG7EE3kNx4Cq4XnKPPWxKS9N84PExys",
  "key11": "5dwBXagtMV9PpiU1ZDLSe2e4aNmoC6GTLXphDUcRUCP7YnJz3fPiLR62gYVZjLG3kkAWpLKRyGsGdeYKFwHSMoFT",
  "key12": "3WmjYGTw4PMmmAiafbV6HjyxxgSw7oHRsC1kFx5iuHsmF2RmYetJu6oVDTBhKngPDSM4wrSW1wDwrpsZQpgpdW8b",
  "key13": "53cpm6kmu1y5QGvvEvcZnYoL5ZbhKxVt1j5tGpAifDukJs5iGipGRcnRYpt2eVKhCtDpX2f6F8Ju39JqJtvFSCrR",
  "key14": "4SQGfPrkDgeX1V3S1saFuUokYzvmVVUD2TwNib5bPU2hhKL95Yta34ELrynZjzQYr4yPJ6AVUspzgpP4JuKKcJLh",
  "key15": "4Qtct216wBQGCQXEZqJAdjs7r2gAkbHKeR2Kq61pPeqUCviiGLA5xdAChpbtcqeNRiDCwiuLKWi4Zoc6U2ko9P1U",
  "key16": "29wcbuJeDpW23W1Tdtat4vKEGY4vse5BxEVtUZUEPLFhe2dTcPDBHUR7pMGznm39kiJfTzvNQEm9F39YzBcqfk6o",
  "key17": "DtEkzegZrGkrepcFwHEBycmvESNRA6hN5VphiJsjATzvwS1zd4pqfDKU788TWarwJdYxwMkWAsyBQdUXBPbkgK6",
  "key18": "4MPa2EQouyQcgcLi7dEmjgYBSTXXthZo1CL1dfpgL1a1vgHiuResLstaB72qSmCztZ9gTbLAZwLBnFXAYSJF3uj2",
  "key19": "gguJdGTHaKYqVGcgqPcvPnMs3qFdhochHq5yYPF8YoxTFHSMN5y32vK19AYvkPzfQNYb3TUETtLs7p6nqA658qt",
  "key20": "3uRS3PfF5UKeRGWo2Re1VHbKN78oUoid7FoyKXphSNX8ewEjHJcGVFfM92HCQ3zTzz3kFeaE4qU9UHiLVfPGfgyn",
  "key21": "3BNwB9HR51PpKC7ih3DxQPFMQZzS615onsA1jem9TkbqhSHRw2bDekXbu5azpwwNjErfZgNzvp4dM7CcArqe2HsE",
  "key22": "44muCVgK8MS67gYfiwwfweyHrh8dnMxMauuJ2oNKH9RoHPMP5uDUXn7G6wf1gn241u2AdjqJMQEy6UYT1CyXSsHq",
  "key23": "5XNJ6yCPSWBGfxfEZ9JveFuVqBxqV9WSGRrgmtiZ9dUrFgCUFdVyYR9ddRmAHEjyGBhwt2e4susKKrjMMnM5uHfX",
  "key24": "4hDb4Qd9CLrPEUMGiybAsiUVjofaUMciXBTJ1ByQTuThmLoTvkkkGT5FdWcmpTFRwoLpjM5vsHsrsLyUb1rg32dU",
  "key25": "5Rf9zjGgaY87pUys2Fm8vGGxknZSjXAdFePt1BJE2r3rmKnK7GD8DA1h6GvpWHbzc3fnauomXCun3wDtpMgiDyx9",
  "key26": "4CepxArFaV1W349SLzfhSUw65F829zjYpTRFPM4Jst8c5pVufpxwZYprHSG8P5p8iHGhTGrYMYzdGrHAoPDHxsd2",
  "key27": "2SutHpym7xrMG8287nptaJr7wrpbg8ovZsUeQYfGmWNs4sUb3WSc95fWwgzQevtSpeHAEcJYW88XYLPSPUcLLPrS",
  "key28": "4SAc9tw2x23rXMoU1yQAPMQd3a7YpZGLzAU7a9i5cYCQf6hFYAt3fKS6yvZZcjPtigBACcbdyYMKoSaj6v9JDPxw",
  "key29": "2bmQvaeb4BxWJA9DjcGfFT9ttMrPnfprm9XW8GZKv6BbNp5ScyYbMVAUsgSCiR5Ubng8FcjJB9fX1Fri7nkV7RwL",
  "key30": "Suhz6vaHVY4jHwoQ2mhsCduepZtRCApg565PAYMxFSBS6NKXgA6o8wEmhZTmJL7Fz9Tik18YzBmNRHBwCVeGGFT",
  "key31": "4JzMwVD9fHsYifJqg69vpFYrBg7ZVaww93owPuTfx4wW3Ao9SshYMe7tFe6bZbZr7J28udzTQE4qCE3fzbZK2V4G",
  "key32": "41gz7N9234y1u8kbNDoMWfbRAVDvC3knCrfFWAeVN4yVry5HY3oWWwYGcQxXQAzwuBR6yxqYR9SNtYwmL4XnLYbb",
  "key33": "ZBz6w2jHwHgqbZtP6w3RiEv3U32npoDc2MsxGCQzfc2W71P61GtTLPs9pVfJhY3vxooRjPmzrEZ3kJNho9juBuP",
  "key34": "2tk2BSd9phHL489Ypz9yjdb8uwMsNSr42qvgSg18XiC78qmjXuXEVBe38fGzX3LR9mKAMDf73kSdB553rrSdkcB1",
  "key35": "2bdbGdLofFWmXrqGL266DKTsrsiQjTsMZCvS4rWTWjDYgPoXFKnpfEHvGcYqoFPHYDEDZZZi9SLbAv2xQPFLuip6",
  "key36": "3BoJPycukDri6X3tU1izv6eftdhBbfxaHVZSCrkkyvPM96Nt4WwNYjMMByj2Ync4HcxED5iHXxhC5y2EFifZ5X2F",
  "key37": "q8pq76jXdzSQF2JFaAahxPWamYhNqdqKWUa6GUifXM93MgV2gQyjwWTfbNoAccYxWkViDLY9hcdzGKFxuewk14m"
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
