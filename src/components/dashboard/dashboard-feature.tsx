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
    "rZszqFdTavG7JQ3pKccw63F7t2LxH9EHqN82wpG1r6mESyDG4zteAYc1JJoMdnZmaqmMCoSMKmR35fokkGEnR9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6XWSX5MGukFqiQt1J4kr1bpnMLFHdjZBQGT32iHhMjcSKBWa1JJQpNjtaWHPpJMEJsjU3Ms2sAPGjCrDazifDS",
  "key1": "3bHJ7zw9D4rCFwfZY8Wt9VpZpDBUsKbURR5fejxi7sHq4mNX6zjwgct4DwxcByHXxQ7gFvV4yRviLBmGnhKuWxvZ",
  "key2": "4FAMKyJxMnbQvgVgdt9LwViuVFf9oCaWDUFAokxPuZ5CzTXdZrDvGypuB1vFrjRscBSnM1XoDziBXTUaPxYmUCgp",
  "key3": "3BxaK5XeoRNdhjGKaxpRLE6zvCquRrGSAMXprFUPdeGQv34c94JMZUTExq2dw3ToRTycCMSANm8ZTwtwNvUhRLgQ",
  "key4": "3erPvumNtueEvex6Y7FprfWNi65zBsdR57ops5egiSeJiR1qhR8WrhyojGEaCXwMP7Pj56XZ18zLTSAjXxf62EaD",
  "key5": "WDJ8xbiKZrtazuJcQphAakgqFqoCQ5sG53RSXXgD7XxQSrgjXjZSR1C2UajikYE7NtmGxggAZqkA3EUqsa1Jkxj",
  "key6": "3KrvMHKyc49RkFYVuTUJFQDRrXBp2zpzik81JLwoF3tS42zC7Mno5taZEGH6LjJbmWgYMvdKZRECEexJUDFYWfHT",
  "key7": "5yCat9Q2vBRf3oiWgtpTdSMYpD5Hfm4inrimcqT26rfx3YibqBGG8RrvLUZgomerJTdjbS6t6BzHFtRS15CiG5Hw",
  "key8": "417ok62PGQegg895hvLHB3ayvhZvpNjKqYNud9NPtGnQ8wwUAgAtfSbRcNBSZ9ZcmDPzRFn7vqLVs6BX7Betk7PF",
  "key9": "HUUNBuDrUD89Cbgwh9fsLy92dUDHzXkEUs9dkwtkgJ4nAW4Hb5Q7PpanPqtJGnEqKUD53CVXSmwuXv5UuRNakDb",
  "key10": "KGPDxfRUertJK1BKC1UKVvFTstwZEJZ23vEAks1F2GBVLDCio8ugq2cgn9a5k9fZZX13Y3ez3yTLZh2DeWZguhL",
  "key11": "24ymsr5jSrtBBhmaE5jNQyKC1iHnc6dF5MNuKDjphPT9ViP4X8RXby3LJDgD8puwLRPowY6ddnfCoZWd7EpNV2AB",
  "key12": "4moWa8AW2V9DitERiJ9yKYFwRbaqDRQuRvBXQiP6LhgZPwhLd8KQtqAbrYCfzAJq6sfou4SQKfsLfbQxgKw9k2zf",
  "key13": "3vsowFR5gJVUp7Fv8Gf4fMoXBskawrj9orWLwFmVDwr1y4pvNdd4eekNA4HkiLPD1ngAerfVAwv7iRs1QRKNH2Mb",
  "key14": "5WGitqMtcf7VCWBSMfAmF51qarnpMAQJCdSqHVQvQUY32DDmobLB558UtqgnirstPZXb3H3dQzn7XDL3D9aktyzr",
  "key15": "5VT5FQkTDZNggUijWtDn3TWf3J1JmLtgCNbchsSJT8nTs4NDQmFHFJUVohvMG3uh7sr7odsCPXwJTBBhcYseLBQr",
  "key16": "3hvBRCrnusrCvnpPvjCY9o4TGh8HVUjFXD4VTTWM6Bt2V4wezJfG7BnMN5recJD4gmNbaZxHhRevtCq5pSdAbSZe",
  "key17": "49bKHZ794r2HwL1SfegctsyKrijT7yeAca1dLk15LDVRrxBvyhBgGdiVnNnAoTssG1o4mL34HK2ouG9T2u9oevz3",
  "key18": "2ThARPWqWCpSFPFVz3fCc36rQrsmLnMvhuuh4g2ssoCYWU7iuQs7CxVE8X6ssU6kZcb8txUxkprP3UYU4Tjw18Ca",
  "key19": "5FZyZVUuwDPyCrUoVKi1MDQKGijW3T2vrh79nc1mFbVZYinFBqXEjJWBpcmgoUAHUFQBD5ogL6s3pQg5xye2WJAJ",
  "key20": "5JEtUsFpmrbDKYqG1j9UE3BRmznt3gEYhdo5Dniy5ks8udys7KajnnPzMAnydUuzspTjzSPna7L4aQTGvzsoV1xk",
  "key21": "UHhx7UsfSLZo1v4w8hji3uvv6xAnFA199XgvE7z8CoThyysBGyohjR5XuuwGA16nD5tweZ68z8wioRb3Sb4ceSp",
  "key22": "5XTUdxCTe2incRBc78YcdvmYs2adJA2woKUw3Soj3Y2EgaGxtejqsEiLEAoDCmU7yHxsBXqxVy1vGtqwyyW6Ef75",
  "key23": "WYMGx7k6Sr2PTbr9kHN6KdV1MPHuF6VnS5FhLWib4bH59fhyJgvbKzFi7WudbE4C2SuszZKZUcwiGHF7Q4VWAPn",
  "key24": "65to9u5tH4j8eTZDv3VXSJedp9DpjETAgRsDqZVco9Dg8rL9W94PEK7pYYkmAGhwPsZnsfvAYBcDogAp4g7D2kkq",
  "key25": "2NZ1qQBZC8LBAnmVKuVoowAr9EYZMRQ4R1juLBFVuvNzmgTUCDd6EQ6cUEYJZ51EU2WpHmr2o5XKgei2PYCz4ij4",
  "key26": "5GgP8yB6wU8izKZPcoFBUjYVGT3wfKUzknXEryYTGGD1mpX8gvz4LagMWyXQ6XGZtYqxCa2zZr82whuPsfcRoVt4",
  "key27": "5TuUVgcZMZyrZ1Mi1UsqouxxKdK39Qx2ekBmWf65QFFsX7n6VrSQHAS2iD8RBrvNR8C6zvezZjSBamDT8zbWpchY",
  "key28": "2BiWtKsg7MYX9ojNTC16sY6TXnfHHsWxHAMuhvHJakp6gMZUYAs2WoHJ3w6kDQgq4zeJJbnLehMz5Pz841BHeizo",
  "key29": "3K3Wpq3EiiRWKd4biSdW1599i7FCFu9hKonJG1bqBeZE2zks2Hc64p1JoQxQrwLwiNYY1XxsefmoUEiMxRED5yrF",
  "key30": "3rHSNq6hE6S6E4g5rgVLnv3fGzWiUbTDd91UEHzAq9uJjsPg85krMPTMmvPKzb65aAjhYC8UbqvD4sedTnJKKjBC"
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
