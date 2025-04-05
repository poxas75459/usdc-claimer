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
    "24G6QVbfVpinHSMV1oWQQ7TemP4xkZ1DtL1GorSDddVrkgu5SJfx5v5LMsrgMnwYFHweCamtWxDuzyA53W3xg3ir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4376WBzgrptdnXaA5VyupwdaNX6SV2wdMtT965WFoyW23ZoDSuGBBBQpnVv2GkRZ7u5LYnHUvWuopUQLHGv9S4YP",
  "key1": "AMAmNTSMNT97EZHu7dfpt1NXq5GneHdTZ1qYrGNA1xzS6hFMG35MYSMExwSNJeBsVwyF3tHHHxPexN5dSnfuCU4",
  "key2": "3Eb6pfb8KNtHLXBnqrh9yWW2z1qsfXud8KxkA6TGtgn1vyGdp8vtXhyPVvN3P7hr3egv18M8FVvefc288AYk91ar",
  "key3": "ZAZmgLkpqK2m7Q5FJFtcvBEU3D1vgq2EKaHMhvwuPqoVyMy9LLZJTyJWwmc3TpyvejhS72LFrgqCxBT4i6HNUt8",
  "key4": "5KnUE7FyDcUqB2ELMhYxcFe5xixyumhFWzC7GTZewSihcC1Sbi3u96ZK7nev7J5WVs5PvKDa8Fy1ExY2xXotT8YY",
  "key5": "24NgJ5Ab2v37zc23iEqVLGLzyJgUgKkz6uq2Y6e2VhAPGnHKhetsA5jj8mh5LHYruLcvumBGgDSkVHTtz8EZDEwE",
  "key6": "2CwTn7oBcL8yJrvGXQrpmUyXjAkfmrgMokdQHJbg1kQyfJgEMyhBEBt8JPnRno7Aa8uD817C34NHy3P9MfRQ8b4F",
  "key7": "4UrPhGTAWRUgcnprtXCiZydJupDWGjvJD1khdKProaa54bZE8374N7KReJWebedBdZ6ZG391fZbJcwuV6qZtV5pE",
  "key8": "54HFjGuiaDPYr8Dmo4XqiJREsPvnJ1d5hCPF8otsaSXBsrfooZEG3aDtLY7tdxDvdcJFTgwWDe6T5UMBxtoC3xbs",
  "key9": "HKKaCY3HUU9GkaT4j1DQ2dekDboATBxjXdXMQ5PkNxbHL44oJDJEu5dYmWxNQDAVp5BNmeJ9wH16jowakX6TocQ",
  "key10": "4wmbnNMiyqmikjSbgnThd9heQWmMXnkUuQ8xTNn3JA6GjcFubWPEv5hE91DfGw78oQfFbVNXesHhWQamxLwLGhmt",
  "key11": "33pMCYAtJwWAmF3ySoCWKYD7tP8ibWiGBFXdtQDrTcxR8pnvKXfX828h7YVFaXFw3JhFYXkctYG9DMP2647pPorr",
  "key12": "wDuBhRKPYWxqo4R35ZZEvJ5Wqv5nRDx447xr4LP3he4rm7kDDw2heqyWqhcRJTwqpJRUew7PfXYvLktRQcd4tvx",
  "key13": "3rFXwMQDWmQ3NB9nWy7raRqWMskrdDz742jaffkvHkd33cWUK5kgNBazreYRhaC5stMgRh2MsUXr3TkWuDxiTmBQ",
  "key14": "4UVnN8b6aMkeQLhxDZErvLBctjEniC6bWb2Nfr5P7ZrBMz7dsSXzqKmZ2vz6HUTrpgBNKZHxpTUQH4sKMxXLaFkp",
  "key15": "3RrtUWgnwCToob5cwkGxdhggj1aX5wq3H8QhADBFmEhE5Fk8iH3HQjH6g2tWZzYX2XMohPRNq8er2uUxQKoiMzQX",
  "key16": "4DFefJC8Dp4U7yDvwRqztAo9hSALVSbB1CdgGMbEt5Dh5jyhHDPSZ6gPAvMiiTPxEaS1gfUNA8meRnyn57DMwXLh",
  "key17": "5HUSicgrH4eSHrgYsQfYsiZiUTuQw2wJC3rc14iZGz313HYHtoSjmBJ3UH2yTwiyJWcD1hJ8RayFvfW1F4i9279Q",
  "key18": "3Ba2RCxWqYqiuQB12PsEXiQTyxVTcHzmJmD4vAVtV3NJhfQdw5VqVMtpKE1XyJqu3bkBaMtbSzB1qv9egpHgjMVf",
  "key19": "5gpNRDKVVF8y8MNxM9taKA2Kace2jtP2HwbNwWFzcSU5jfi5LtB6bw4FAshYTH2WezquztHwJyR4hgXdT7nr3KhU",
  "key20": "3xpeMZ8cypQNkL7nu9egV2Pmz9GdZRx4ugwj52DcT9gr2En1rGzBqzRnJ9zitLmtJbDM3pevge1U8iR9tx4N6UHv",
  "key21": "5Sjj1VqR2DgrroCyqBepYLAjnvGVdtdh8xheYaxjK5b6fSgRUvYaFL6VCLvKLgKDWt2wxB2Zj4yB1FHBjnpdCJL2",
  "key22": "5FWfwVyg5WEQrr1biY986ASMYtdHXR2aMPwW9xKgu2nBdb5axPBSzb8tPVXgd3wWJNA6KpSZYP5ZRsuvNCQwQG3K",
  "key23": "67HFXMTnDPXaKuVsQuNDM656BSr2tbtFBZbSSwKuPcmHQzhuvKud9Lx7xZ2CAxPn3L44kDpefNEkrumSbZX3ESPZ",
  "key24": "2JtJzeR2Bp21gev3VHj5EdERAg135tMbD97G5etZVxaGoU9xnyB44fYVQYoNvHMtomKjoSzBvPK7ha2mG7nx9V9Z"
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
