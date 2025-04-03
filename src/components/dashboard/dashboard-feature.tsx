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
    "5rMxi8zdiYuoHv3mUZjPhWrWqNJGgi7vTwqruBbeQMUg8jJgmPYBe6AhqXg656zoxWSx18FA4ZfQXqY9HymsKwr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akcmxN9pRAf7tUrHfqpzyjMUSFetGTPZqqNZW3Km8KcAWashrpa5dUJyECbm1gHdgS88zgvGWLCeco4mQYSN6sB",
  "key1": "538Pj4FTJHiBjeDVeyvonRuwZ9mokZnYqakKEUPc9nQuhMBBJBuqey7ApibaVFp83RZt7M2tNRtYeX6ijXNbGYoU",
  "key2": "3XeCieNnLoJ8pgZmH1SRCxjeCWsRCm7Ez5bcWHxNwrRqeqeJ5Kyv7otHmGGr3ZhC6jUNCYVWnNeeNZp2xjF3L6XU",
  "key3": "4XoHETeuAzsPZ4cech6drt2W1WRaLJ9dn1npNtQSDtdsP3xckiNFVFoewxVojSymCCkGQMRCBihygD436pb9kbBR",
  "key4": "3AP2KnPY7j72o2XGGdmT1VmWZkFME2mdJt5wDrbsk47oQZxM4EiF4SrsMBXaojVUkSYButambdnuuu5xQ7Ph7KN2",
  "key5": "ir69QkfbrzcjFRFZKoZn7hccz24E6SmqKJQqR6qhZAGRpJDtTj2uKrD2UUstwAMhaYiW7tuRRCEPwDVwP754gF1",
  "key6": "4JaD9YBFR1CHMkbhRUSz1HDPT3eTctfXL8CuDcnooeysNNK2TjWfN4LzPH1CcxuJ4T7y1DMNgyADNAyAuTB141FX",
  "key7": "2qJY86QYutSj4QnU7KhzAi1aXiTAsaC2R1dHLQ5RrRAKfLhziizaiUYaAQ6VBohigA4o6UCp3wGNsJunpaW83bAA",
  "key8": "4eoZvRuydDeM8hfrV81EjyZahGXVsEGztzvtgA1zCqtRhwR6M933QZZjP8nZj59SmBviH8Doizr5dcxRTUPZKZ4t",
  "key9": "49KYLNaKihhKa3MpM7UzrBMY4gZHNCmWQzY4kUFmcGDUYkJrdQ2yBqN66usLV8ieGVamVG19fFYLusAk6tQBeXAn",
  "key10": "2d1t3s9fZdqGveZzGSTb61946dYVJRdNLmQcsZkghMMQpVjb83Aifcbft6U84LXe63GX7ArivceGkz8FACCrw1ZS",
  "key11": "2LwPx1qT84Jo4PYCRrhxY6tzZQAvFpPKh1nZcQiwdrRXViCf84XswDbYnahfDxcBsd719kGn7gW5yuVTKsQjami9",
  "key12": "4ncYMVAGYDQRZjubx5ahkS8NDmucTRWPPbo2AoBwAcTTW2AKXPYbyasGvE4UBUwhBA46q9QY8CTP8mhZuUmP65Zj",
  "key13": "29Adh5kyiv1nAJZxMAuW1ArxMsodNQFv8Kgr2d95DAN8c6opAekRuBvcuzubzzf5rk5oAnLHkmwQR3BmJV4raFUd",
  "key14": "4bhFQD8TvFfR4dtXW5sAfGAfoZaN5E2br9oEkCot2A7LasMdAve3RJhdHzCeVZNQBTuh9TFiG3MebXXSzkVpCkvW",
  "key15": "5diyRxqAAcR8ceTbf3Hf56hmNZgvEfWaLE2v5WRicTSsfaAkRuo5v46PRviUsPpxwSmWHhNqG7jURmKhSftumAaZ",
  "key16": "AtBpj6y9ZXUQAd35NgQ7ET1vNWU5Rfggs7Lj5Z8RStduAfM7BW4UfHfDqEZnp432A2H4t17Tazy1eeW5g7E2Y1i",
  "key17": "4Bj6rUZTvTvSiwHh1GtMXi43GHtgLBDX8NktRVPfFFZcs3jmjTEiDreZ1VJYZncx8JLHkZ3TBEp5DhhsbcKJEGE6",
  "key18": "5VFEEgQAc1kesgKLzUGTWDWh3ujuRCPpHP8FhNqxWTJzFe6tdSMz4PccH9AAPPEZeRjsZs1ZMfhyYGNnxZuLjHWE",
  "key19": "4mbb3WNibVhUL14yawwCrBGvpJDQ8Vs2Tx8BRRmA4GxAw9tbowiZ8M83YTxdhWJYFocd4ThY74XD5FYBce1euQXt",
  "key20": "4E9NB9swjyAvPwis9Up8pCqcRvScSr9iqeM4aM43EkWrEpxmZDL5TxdRgkiaU5FnnAuzs7dXKdjjgfLXFx1GDjZz",
  "key21": "2ToCe5qXFGFR2Zn3VqAKWFgaFZZAfMzQsDDjqfjf9mbV3cBabSt9X4F5bUYYGs69BEoRzLsjnnzg1XYwMt7weu2x",
  "key22": "5HmpJ91Ce98eWzBZ2dZfCrCDbEBBsz93q16WZnDaTtMWfDtHaLdWXmU19qCCgpVgoPWrmhKXi6badMNEWAzZ4hr1",
  "key23": "5GbqWW9VVo61S3tAUyK1SYvjyZmyRfweKWBRnCVEz1AL1BkiiVAnNYJUu2vXwkh7eGa4zB2qQid6fH6Sut2V4ZU",
  "key24": "3Ey5BFULj9jM4FArpo8PJGyuNAgUkd3UNYvHMgHiZzz95ALKXnY4t3TtynmRBQYW59YVtqmanemBCKoRFFxodgKQ",
  "key25": "2cYibJZYuLghBbXk1ZBm9JzVJYb8BCTzH2etGfvwMkpu79vEWCgyyr7xbGbXA9suoJhZLJYJ4mS34nSYtgxXEB3n"
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
