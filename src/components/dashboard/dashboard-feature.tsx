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
    "5puEPLH4d8fqtfdueHQmzZCWpvmRy1PWkBPud3DFRNG7AgacND3zh921fKifcfmxK5mEj7xuQN2eMLj6TN4GZkM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oi3BUP5oELQxBLoGMpgs8rEyMMFeKKCtz6mqai61zK8PygTzRKZH7ov3Y3qasJYsnnmtAytaYa8Yx4wptNhW41c",
  "key1": "4EZdzSuUxGSHaxqW2LyxVAvs25UPiy46s7EnS81yZrd2hG4fGbHxUmR7Xpv4ddN3kSKqTXS68ebZYGmp53MqYE3q",
  "key2": "3bTF9ch9JwMytUZgRNUtmFkVcDe2Kz5Yn7yAVT1HBXLtsj4eqUGx2EBCgqTogFkdaQiPjS9r9hGmrzCfPPQp3jC8",
  "key3": "VrGfdADWLoeVqbqEaTmJfsB1xEWMMusa697yZ17Eyp2tYTPRsQJwguNG8DyL3yADM8QYScTFnv7exDy1oJtTdq8",
  "key4": "TrQpTL91Vhqm6ksEnYFrLRemmTghvqiyAt6CzkE34rcfgxX1rdFx1U87HCf7tzWcEXxzBQ4AwFWorN41zMHZC1J",
  "key5": "5rpPPvKcvQ41KSxfbSFdxW7WnmFqq2GraNF1QubzudFCfiouZrQaUNke5kcSwyi7D1badgJe6tK7xr7A44ZUXgp8",
  "key6": "2f5e1g4rchsbcd3rjDH9eXQ5xcJbiTc4P2QfW8Bytd56FfUzcWH5TG4KPJCr3hcwjGfvCX2NjYoEmGMTqUdT5wVh",
  "key7": "48AhRqHP513Dfrp4Ms4dnZbsxvjirkejrH2ULpjfs48QTj6CsCQLEfjGSZfqTQrZPp96Vxk7yPYSic1xRj7hVDbo",
  "key8": "5jQ4h6d73ScVDixVVSxmoQHqquvzopiUkMDNJQtMx8ktVZTXyw9sV72ts4J1ycR3PyDWs6XG9PEVW8xUWniDvWTH",
  "key9": "AUnCZUNyf1qMFLwxLGn5Rnj2uZFfCmXAPSwyhxxs7m6xnfiBebtxEqCCK1ZjSiBpZ2fmdnd5XSt1PpzABriXz1M",
  "key10": "CSYtEePnXvccoQxPRAABka63NvtDofYzBz398zwnXAFdSkmBicxozGb3Bko8Q9Z8XMut1QDWB5c9WbQsskwQbDn",
  "key11": "29SdHFQvx6vu9rjk3scT8b4LDt4AeZDkQZTZQADHzVRBjGXVAY952BgFXTpFdgxWesKnACSjvowGVNQRF57wNQLG",
  "key12": "4TPbuHxsADVuUFFmYtojen9E6gA85wZrb8qfM7NaHTu1k2UNHHVq1c7VFCEZoGBiUcG4Cgp2GBL5kabHxQpPo1fr",
  "key13": "3h1KepNEYyEzPi8MnkBQR4MnA3DLDAs87fk7AfqXqUnZbKGde9KRgsS2HGpXt3Vhr9EVnftHtM8bKF5VU5xwH3cK",
  "key14": "64bRNsx45ZtiRURLHC4d7fg8aPJxpNkGKJfhbJ98LV2HUJFzZyuuY2oBvwc4wTXkcJA6yY2jLePyKPVnLKzogn2U",
  "key15": "bmo4BjgPWj8XrQZ1iuRrVao1qCTEtnoxeSYtjpNytfCRZdwW9c1kgN1WjJRnUWZbBNc8ru9ff1m2VLkJ9ebU86o",
  "key16": "33H2d2qEzMnEPdMNWm9NcFQRJC4kUAmeqBro7Yazmg8yN1BQit6Brgki3EFhQgw7xZwiqxoAHzXeUDLizMjaT2CW",
  "key17": "4NAPYfFBgZhzQ5qdes7iKBfcNrgpCJi6Kaw4PuW58UKrFfMdrDb4ysp5HWdPxATz6D3zfkQYJtJajPTwwqDu7D3Y",
  "key18": "3faR9nNgSKqjaqwtLSx6Uke8M79bVQbg3CWodo4La1tuTH8YwMiqXHeEPfQiRaRLZ2FTW2p7nEzWymvqvq84x7G5",
  "key19": "4p62gS4a4pzhNfW8WxReYxy1TiCkrYmUWWTNxvzJQoSw4JNhraeZ6uCDbQEDKvUJpPrLJe52uWQfJGN8PPMqFoM7",
  "key20": "2NhnS5sagKg1WXhun4ri8L3N7ujGYbQv55uEzBTQ3ucaRMDgVTQsEKhJ3innVqNQEYrkB13wG7MFENnmYc6vG5X4",
  "key21": "57VHBrUecJgDKeQvCbvHxebkEWuSzeM1ZNJwX4LF3LevLPRjFjakpUiwBW6bNMkUgP2Rob2t9NemgJupTkvSFWbW",
  "key22": "5K4TT3Vov29HqkzukL1pRh4hW9aiyXeT4sqEFRYksDoFQTyt4cJ2GamgUEwwvbeBp7sE8tfK9TUdFyTc4x6bv9se",
  "key23": "5KWqJrmYsoZLMSNm14aG9w2gJEeGz2jnojoSd291CNfieoCMHhzRVnWrc5YbREAfNx6hWq2BYTBjUb6Tj3e5Gexo",
  "key24": "5tnXGrbbXRy3YFRAzWjV8gRTh7Kks7u9MMQQBTETBEqj1eXuxBw6yKib1j5oC5mh5dbBGCc2cJYwWAy971hgjjfg",
  "key25": "3YbSZjZepQoM5VLSLF5CLjQfFNxhmgVLQJBeZg8f85suS8tmcKxxhp8XzdkjzytQjyyx2r7dsiy6pLPHReTE1VmU",
  "key26": "363QTYcHhnE9MqvGLd63CXrA2BQG353fEyiNAQNXYRR9HLiPhaVsbF1ZtKJ3MWQJx4RidYNcitTF63z5MKyh7FqR",
  "key27": "5pYVa83hNA1qJUSNWHRCffBQWWKegd7WDADPcaWBcYrdMmvjKrfRhip7ejGgB91Tk1pQsNnZpTgSPE9pYkPaoh5Q",
  "key28": "5mYRkPccy3FFQnFonQYFJD5QeLQFpL7M4eCehoGTq5BuYeZ1EVrZxr6feXB5kuQQg77w74tfSBWQX4tJZ6Z3AYRd",
  "key29": "2gkrofzLzdgR1grMhR9yJiqjaNHbVEbH1suyioCyQ3rYDXDAcUWDvsYGKucDAacvvg85Dw7drg8mv4LdsZzjz86y"
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
