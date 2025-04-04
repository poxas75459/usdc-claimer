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
    "41JLJE74o58ktuepi26eV65AeK696sKLBiCccX9SvpMZrhMu4LEwGcYSnWJRhKvugVaxNT7Lspt5PxYbqHWViRHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPK6WfETVtqKSHsiAEn6nXmoJ9rKJ6iDjMnHwxkFosSsbM9pzLsDYfAMGNBenPboG482TwkEcYSzSXm5fXYJbSb",
  "key1": "4Ccy76HD7y6MafottStHr9sRySKuzBHCrDBcke3UdQ6k9kCdQQS2UXBKqjPRJrYvBoYChtF9dTUbu8vhzWZn8qBY",
  "key2": "4T6LDGxJTZv7yybpjYBfDearQrpSpi1mjaU8tp2jLeqibafm1ZSYZuECKoCkuQXwg1zWxS15ZCV6jcpqRUcnNY73",
  "key3": "mEk1crX3hGZbfdamMawaq2t6MG2RAcpXMGwYuG77QNZYKKFf64ckif5KKZzhfGCa4fQLYGzcwX846ojpTmQ7YK3",
  "key4": "3W7MAXexz4wCw8oUhKKazBPMLLVk42PuiVQUnzSTpZ6DjThGGPn2DD5XW36aypYSLBjwsB28FfMds35BiarfCVnZ",
  "key5": "38X5EU638fSNQoWVK2pXzLRB2M1f9XNaPNByjRpRTN97CmGPCXtehKW7CVH7AVuL8MMD8wHsAvjx4LfWhFRrKps9",
  "key6": "3wXL8kXbGRgZG8ihBGb5qwboQnXDCma3KFExxysb9sVfPnqKtBqyZNebZXbdN1YEog7rFNJPv9Pkidbz6UxxjLzz",
  "key7": "56a1bfiSfrhWSus6xoWwiAV2CAx2qj8g9XnZTssbJ2F4694JcgcmeYLw1dpezitLvGR5umAHXe9QJjFMAuhVun6W",
  "key8": "3j9PHaDtjLKqZfcDQNkDT7Y8PnNXjjf5qpNzYCgi9me3UsdFjAEPJtky2vyc7ec1YdGVzjYd17Dt7Anj66U2RX4f",
  "key9": "5h94CETQyhAhVREMn2oHrYQ2phRxnZnETYdXx4dhfnH5kMG6KpqSY8bBBuiujB9kBkQoCHXfXuSk71DSbPjWrDsb",
  "key10": "371Nqn9gNM4EnwSBghDwHYWrA6djzUjZNrtf8VtHnfJUeMCHTaDT1BLEdBm52rYzKFPoR1c2HsrR2WtytqbfrP9b",
  "key11": "53az8FEPbrMcMn6q1nWQuKyz3nqgJbgJPpTjQb2wqsMHAnVb1mC3Nse5xCeaX6DNQ7CGXUCuXgnb82qKUjRzypxZ",
  "key12": "CB1AiNsdhyrEKbHu9zaS5szNtRCg9ArDJXW2ZS5HnoqwyANDSp48E8XUNPyoCwREzhcCvUevxia9haLLrTWc14Q",
  "key13": "3Ybek6RVJu282cKTxfVwnTfo2yAWyVRkjLKe82mjHZtpDcjqZfVxnNADF4VeBK2xp3FSP4fwckrQZMFqKeVMEu6r",
  "key14": "3sJANwhiZN4Fmt9QkX9bj3VMKZaKMUjWXza8QFasnWTAzhRDhAjJZvYsncDXdPhuGN3g53eE2J47DqcoirGBdZJf",
  "key15": "5HLAMbs3hwo6mqKJsReLDUsJwA3vcACdLqgzB6eg1iosLpbf8D6fvQse4s3ENg76Z1qXuSWttsdLHDorG16fxQEH",
  "key16": "2d9KipeSB2AmJSUfCqhThavY5xXjSh19Kw1gCVVLkvdMZ8Yh4ogve6oqhFBQRJbWfxruVk2uZu3Mnun4VWeG6d1A",
  "key17": "uPGWsyHE7mh73Gde9t7QFv7PTQgSdqYasMnatZSQbYcaktAeRc14rn11cWJ2dFWdUmPTLjiUQJSrkT6DcRfizaR",
  "key18": "4w5g47dV2Py1CkQHLifmysHaU2K3Ukr59ikgn15nKpd9GC1QDpYg1wZpBhGou4CtbWeang6trPFSdyPtZ5eA5HNv",
  "key19": "2mMFyUUXg3mZx7qrdGU5JrYqxJpx6XKHZ4HtKWKYC56ScXJqUsmBV74gPCtdPpZu6c6o9qdr9E3tfqrXzQmX1U9Q",
  "key20": "2rrCXvXYJPfUYA1F9xZ5QX35DkhwLVXUuseisfC3c3dBpHkJUTqzBhGe7bK5TV4crNaQNQ1esdPsG3AkvBtf7dr1",
  "key21": "3kdPogUf8dmmk5LNW6yfyjoU2nqp216unYXGmuJtBQturSW9AEf2anViSLuMQ2kTsHLNsX16mmuBaAGG37rmjE81",
  "key22": "UhxSXS7KeJTmhz4poSVddL2AFbEK2NUApfxKFgPUAiE65zvuNSNaxoTLygvELymQPBZAn8TNVXZYQYes9hydaga",
  "key23": "2a6XB151ZKhDsYTzoHA9hUZ4A6voXH8LQvEaH6wV6nETeHWFhBh2Vrtd5ncXznaRd9V5156Ro77HB4MSQWuun7uz",
  "key24": "Uac9Cij9RAKYsQvNmTeg6WtWkhMbwDKWxCCxd28tfuySr3Xb2yMHqSrfubtVn57NgaCyhGquouhbHV3nBg6GjGW",
  "key25": "3sLnJ3p24sb1EFfTJqjbEregzVS3KURi92R4femn6mLvGdJdT9ZzFexp7dEX2yGTJPatcJeKhn7aqGChC9qhSPT5",
  "key26": "57mAhXG6Ww2yLP8vUUr4p6vhTxBByaVfmqWYZdifLjA5gwR1sj9XY7VPNY1hyVMMqNvMdLbZnY8wEvKa2NSRyYPZ",
  "key27": "2LTqpvRjJRGxJm1hxpqpeMDe3Jeqj5ZQXpL5EajEU1hFGmTaK7CMiSLZ9JFFCUiHjKErWJ1wBFequsmL1p6sKFmh",
  "key28": "6AMPn8HuLhoUqcBiCkhx7yxE6iDAx4gYYAihU7Y7ELpb7DXphTnrWww31YvHQgqKejpWy8xAKQ3Y7ACakm7c5Wc",
  "key29": "5gXJ7cQPJSrmYyXdSTJ5phSkCvigeZW1Ujt5wQcTfnyzcaH1QEnWkMCGhXYKJTUN4ZXb4gRpQ1Bwqp8C9esUYSH4",
  "key30": "4tYaq8JguGnvVyLSjZHNTLRmeUErGAzZDYN7KakjMPMwQLyry9ecjMELwvhVuiauMZv1zifpbVELqsUQzJrTtLhf",
  "key31": "BNMwk5uiJqbLoRtGyYpBuFrXkng2QND9ynMDSE2DhjEdEjz5HpUjHLsxW1SbBwnqszkeAs3rNXb5xZjMJ7AX7q3",
  "key32": "4hmgCx8tdiY1foL6H8uWzEkC6hV3LS8WxY9WEaq4nEMhre52LiBEdsHfGFpv5ZWUJa9YLkBwWABAjPd4dsNM4BmH",
  "key33": "2faeTCdJnrQL1AYMiNu3zDb2L3YTiKirV7ELPcCHHVinpxeJADLCGenU3KFTaCbuiAhmgK3aNS4KCEzJeGi3Nnim",
  "key34": "5ZgShQ1AEgiNwW8jjtqyt4E2iRAWNqUxCuhEpbaNzP9Bdh9YDLBmR11efHuV5EGDvjThuJSpn4yZaXjsWFXUsuPS",
  "key35": "3aHHC66NMu2AKcnPD2z79XQgPGpqRacpvUF249tQEK9Sqb7ck24BogNQpazAQ55xGF5gj4ZjeB3sx3uBAsC7UVy8",
  "key36": "4m9LcEYMLcv731tzXCDovgwiZCBPsHtWzx6WFxUiJ5ughY9Cf7WoNFXa59pznNrxSojHDSUGsqu96WqMXEMCx5y4",
  "key37": "3R2uwE6pdGN95VDr4X4BKf8nqyajfx5rCLMm2FTVvhUHRz4Av3Rri6Wg7Z31MQADqavuyGiyAML9xTGJ2GLF9MJG",
  "key38": "5KYUmZDPzrNUTyPJ2EcRJsdLRTfnH6dst66Zt5rc62fFR6gBvaQJNB1rnGJKSw8XAWwkNZy66vDbM49NFzT2yYZV",
  "key39": "5WgVcpPo6JPdtMwEQrA8JxeksY5Sm7RNrtDmu3sTqikB9c2Nf8MZ4UN9Gq8Mh7L6TbpwKm3LyryQe2Tvg9Q2KjoQ",
  "key40": "45TtmNjwwxzhvSiy1WGWacitdgXpijREpDNdzqjupBtZ2ovEDom42NrP6r8MFrodizsthWUwYJuvUvxdFqLMmsmS",
  "key41": "29ecirGSK2D3dr84iJzCJSqkSZC8zFAJN5xXzN5zvpn5zxB9o93xT2yRXYxizzq7o1WaW596du6ttZm2QjzJeNvc",
  "key42": "4eKdxhKYjWdhvmTSVEHMHjVFMYetm6WdKddZrtWBwveFHGiGFMfZdAeUqgRqnuokc9FjnvCYf6WWfTaeairzhxQy",
  "key43": "34oaynkTpUuccnptESwKLG1mBqHvCZA14QfEp9z3dxjPCK7GnGSqA13hwmF2AnzaY2HUwtcbG1gqHQGyKioHSJbU",
  "key44": "4wTnq4Fz2d3YpVCH4TaSPHCaR4zacAoq8C1YvGUMKzBk9bWpp29PM4j2fpkM5e3FM6yUMV5LRKwF5moUc86mduu3"
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
