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
    "4CN5DspFJ9wU4LYmMb9DJ58WKYukC2gVULy666Ed5u9Db8gdeddZEpNcbJmvVvE8xwCH1KpMoC5dpYoS214v79S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2huP9pDn932qXpkpHfnSdSWijsHU1e6ZmxmUx2hDyQt5StrTUVqQDLeFZ8F9vY9Pu28KFAkrsTkUL19WZMtwL8A6",
  "key1": "2g2st5FtdATLgNW2HvkSacYFAuBgVfAqFrXAG86z5HctTj1VMs8BTzFQh8Y7UhzTKRtaCauzPPb4W4oYm5qKSrxr",
  "key2": "3KAZPqZcwktEiUA1PanBKpYQWdsasaweoewvcXPiPbQNrerRNk7xma23QjauiN6pJCQ9crkRmfLnTY1SixXmVYvt",
  "key3": "K44TREA2292JTApWQUs96TUSACgkhq2Jwu2mkJP4JCJrZcxYpE3q2ESucRmC5KLw3qgWCiafQKqUCHdt9LisSaK",
  "key4": "3v4JqMaD9XeE6j7XHaSLs2uVgTBTPQfcx2T1FX4xGrQ9KXjBBpSTZWP4E7wap2YRmAgXvqEFcUvVraLYenAhCHxw",
  "key5": "2Myp71yrzWsho1nUHWxagaRviYqYEfd2RGt2aTpAvB7fHEBUR7WfApSkNeXmLUq8kPawjL7f57AnaJ3T9CU4ZHvu",
  "key6": "3YJioPzz3znjxN7qVc15fDNatQLoTrS9ydQxpJbQ39e2Fq1Hghm3hp2EaJnxEjNDdLfimnU9yEQHqmxJsnvzemDk",
  "key7": "GJcnU2trovEiHW3Y3CytyJLtWE1icEs7iRNGxhP3AyuPiMFX63SgzWXXN9opag116VWYdyQhWj5g3si5thd9h53",
  "key8": "5se837zUcuzv4dbn9UoXqQjSNiD9HC2zzpaLvxDzqdSwpZbHhd3BfkALS35LGt6vwfVyvj6yf52CnVMGC3ejsxcn",
  "key9": "2VPNjbQcmtrHhfkYwJgmcQikrd6fq6KE39spRT4mZYWJYR5wjqdi1XqJY2HRaRdo7NytsotgY6tUWBUNJtC6Z7Lm",
  "key10": "5TE53ta7iVpjUzUCKi98uTB6jF5tjj5E3WyDHPKoJnQ811i2Vpt7i1j1inBYkeMHr16jFDL1w6GRpDSSMMV4YS4r",
  "key11": "3XkR62HJJKTggzkTDy5im3WAyrKnsi4KEMrUiMeohcqSkR3qy39QXtPirvoT5fn1MqcdCMMQ2mVAMB8aBCsA8BVy",
  "key12": "3EfBtn4BVfzaFAVuFAyv1VzPrwF2EDHb3yUZXjS8pYkiUuarY4ap1kyg1DvXqaEAiJ3D728YgYVKTZBua7ZX4VQA",
  "key13": "3BBPDzCR5A1saVJY6eXEc7KqUXakovRbsWBYcAjf98R2ZyjqqYSK7BuUGdNMhcMgHUjUrVaAeqzeJrNnYnARkwt",
  "key14": "4DTmNSDoxnT9MFJjDHiTw2RpW3tzP5nTbSczbCWq1KqKAv2C8vHAtfHWo1NhPJp2whpz4qjeZRMr4P2LzCyzU8L9",
  "key15": "1GVF5PQwivJeGxZzKcBVGp2wNEn6sMK9sXonaYcy4wuhP6Y43Ew6RBWr1kuxqfzchEkECPWum6MpaLarYqEoKNP",
  "key16": "4h6GotHkuaeJMAAGcz9peXdJtC3z7i5DMmXyAbzPWCsMYKsYMZg9wWC44ZnyxLXWqwcPDgoc8HiaRRArpzfiuaWp",
  "key17": "4aRH2fLKSAShaLuybRfCmGPscRN1PPZWLY8VofLbhb4FT3oNHwhzg4j2gQCTZkGzf9nK5guRbnU9VraYyyHgJCX5",
  "key18": "31erLMCSWqNhXEcB1R8qGZDkWFDTQt3mNQpJWvdiJtXdwp3z2rdbyXHvHTDqsLZYdagQNzZ8E7PdsCppHSXPCY7a",
  "key19": "4LoN3QmwdCCJwRgrpVACGXdhbBiiGVz1qUrVHNPQVPDjz4BDfwrBzLCX8eNnwbr5o7tiggoCkvZ3E9BH7mHAEYTZ",
  "key20": "3ojPzdzUqWyHVV7daFYJ4PLhuH4bTmbWK8HtsvMbPX58pJYQ9Xb8HgZEJTBxz86otMJvNcCDs4x9amTfgQapNEC5",
  "key21": "5e4A4jzfRgRp6w188T1ayuN9z1Y4mzCEqTo4ybspqTkkum67DcxYKe5xxtjfd9tUY6MKUHEqpZDAZff7rocNAoij",
  "key22": "t2dFHgiQ3nmNC9ZB4gt4tnUZpoxYN3emESDFEEnXku46eWxpeXLS2sAQo7r1wyUJtMwytYBYK95TSvHDwprDCjk",
  "key23": "Ev3xFC3rpbtnT1xiwHNrDgCSiNPA9hdVWXvHY6TbZ6NrfNT65J94vTgfoKzSe17GTHmKPkGTSobW9qatkwuDHL5",
  "key24": "2w7U5TuNBxVt5kQNxFRqxWd4wV3KcPDbB64vR5j7E5XsBPcH6YUMPM9rmrPEAgu6AxkgmxdcRyLz2k6p7eDf6eer",
  "key25": "nmE3z2oCBHb3NUKSzH6jTRbtqbwoAFYbgYsreXoDCoyxTogUJWSrZHHCidsNmf9qFofd1wiVZVQLdkZV2ogA8W2",
  "key26": "2nooU78pvusGQx6zGZVcESQRfhKY5tanYD5JPUdvMZUyALegGf69FC1RqKXskYNpzXY11YySKQomDLqJLBNSDKo5",
  "key27": "2M3Bs8Cftabyis6bJxKk38TU5ZvD9U32H65rWCaWgm7UDkVrkTPkwmm13PviRAFUPdZrsE87hdER1P9n95Ya8548",
  "key28": "Y2yYkrG1ytMWG1fTVRs4RgVGjSgDyzMkoSRK729v6RzrPsGPqATkTxFMeNrEthwDQENuThh3jNUT5BwAujhWrWH",
  "key29": "2UuZJY4wTTRTUXQwFSYWDS2bTRRKGdyXLhrqNRhCxpHZyfAgiLZwwiZdXvTKsM1qNpPoN4fRMh5kzg1HAFbLuKFV",
  "key30": "De6cszJvb1ZRQcvbiEUozVswe8g8gq1nUJL8C5uPZsVwFsRTXhvwqjxZH5EgGomAFytB6LhVCzi3fTyzvgPWipr",
  "key31": "5SpVNorARmcvRzsm6tPzzxNE2f3XA2QEcpbpynbuaBL6coVmmzbCLiv9UxC56CUaeoui7jhEaFGXimDHP6SvX6AP",
  "key32": "4NbqH6i9D6uhLXieKuFqKRFAQspQsXDTYwUFHKYqPikxQcQsEDBGNCwHDzU87R7Q3QDUnrHhRPViPiDbhh5gSNBm",
  "key33": "3Q7mUd1bGGqQLB9KDpt7z5zrwcZ6aTscNxkDECU8Kfa6fkHzMve9n1oi6D4VRtbr1dtq35zbgZnM6tmxRGh6z8p1"
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
