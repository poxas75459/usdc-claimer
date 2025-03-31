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
    "SwqHafgzNKFGsmxVtf9V7bPXmxSxDHQi6ZVqvLgkQhUPmbZ1CyNsr7ZyH84QBtM61oUUtsBMPKoyyhv4KaeJiii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4fYqSv2Pbr9wff6X7JP6Qe1YvH6753gv2aYYpuk72NanJk7qVTLGDUXgU4G19HGJX56YFh6A2uCApod2Rn2StT",
  "key1": "3hCUXErZEi27FrEXD3bYWu7DMb1tJZCCbhe89DmqAHKoMEq2rjs1y8LTe696E4gLNuqh6YTcxWuaKHopAS3VWBkH",
  "key2": "9jycA3qF8pMTdptKn6MEXYanQC3WW3NJu7y3ghQzfzvxXofAUDdjj8ByaiUruKGGygQsZ2MUppaGX5148YTYdi9",
  "key3": "4C2s418Av43ah2apftNsRRne5YuYA9P3tHnUg1mudVF3C6tSNVjrcSwrWA2VPFgT9YFpXBy5tqVdDTLqLuqWczBb",
  "key4": "3Cv26dV9YYLNczbgS94H5aoeUsWhu2EG5cb72tNYgnfCApHdTJkNk2iMRshyL2oUxD2x8ruvTGLXNVxZPZQyTwD8",
  "key5": "3rUy99k6e79vt6kdMqkhN49qy5sXmkEJ42mbK1p5hnQSjRbEb55TSj5P1ugrwNFv1Yw1AE3EXRThnpXv1y9hAm89",
  "key6": "4hcy2yJAFMv1SLZ8KiWrE8XtKuyHo9qhosCY2yTbhhmMEYJMZgpfGkKaUenoZYrp7QwS5Eptx1W1p86r9HpfYZt7",
  "key7": "3bqes5Kd3XpvAHTRvCx9JLKSaacmwcw549KJbPFXxGVJsdadmaVF3NCv2fMWF97EiXcD3Hko4hwBLjYABFQVp6Fo",
  "key8": "4Nn5fcka39nRi863uaNadC8eZyCRjobnhN93bWWyWD9UYCKTuP8MkZghvA4uEzJmQb23HoAh7sp3U6e12utVnTmB",
  "key9": "5jXSAPibscwUKwFEKgkrQMY2h8fhuLroPX4YPJKaxPfJW1JRdWaNiBozHNi637DxP9whG4QfknAYxYUGrRCgsTvV",
  "key10": "2qPL7qJpy8wk5VQ2LRUtv4B3ga14wHAHGMrGQchm7FQF165WVvNSuM5ByBuMvqQCvFXVc5ZNZpgouX39NbRxdZJY",
  "key11": "2dEW3oNZAgh4AAfB1NnjfSph8bQvuwQ7egs8DjHptcWGs6vwUwndTLdWP8dFb9EFxA88SC85VRyi7FrbpUiFBurZ",
  "key12": "5F4SatndeurEZG4WpT8huURbuSDNsqqSyCYCtr1qzTAa6QGkK51gBqV6yX3VHb7o5wsf3PWC3Gc1PWkwECXyHX6v",
  "key13": "ko4Qw2xdg9J7H54pipoPnvRGokzLapmsTcPn6mQxo1QB5V68TGN16698KAghpMLbhboAAYDmP3RRspaQFejGGVj",
  "key14": "5ZYMMbn3EJtLf9XGueFp7UTRUhW1AJt7trxjqDVrZvUdfRwxuWQRrf3yMtWrrCcFkaFAdh5A29vJVNFUDzdEjHwb",
  "key15": "2o1KJ5pGdY9ei2XhzLaKVRDvmFe8oy2DBTBpcM5eju2qDnx2qZmhoh7tP52pH3KLf42yASh6AQPCpYeXQVLocU4Y",
  "key16": "24iSdYNqRW4wA84ZJB4sLgCvVjtng6BXNY5S5oVNWWXP58D36HnzRK3tHKBTqpMkbhHPXDx9QaEdfSma9EcEiKGa",
  "key17": "66PLaFzBEebUcCbHU2NJk3RSveRCfh2rfo8sqxx5bRKV9LFHtscbrQoJKkAKeAojngPRovtXoSSXn7QDjPfEvZXK",
  "key18": "4hFjYzGrrzzMrKZbyrzrdCaABor267TetveiozZpFX1FQoeR7jNgNoy5r4B9sSkVJGfEUeGUrFxs7psxACJPw9PK",
  "key19": "5xh1HoxuuXGycdNhpgWwngU2idRmziZWWzKkdkv9n3CFn3XgDgxAEzwmrWrhkLZSTS4L5qKgwEvNgYP18TpAkzJa",
  "key20": "2JnrqbchfmpVrB8nNmf8rAbbrcU4aAqNTX1grit2Yv71zW6fCrf42VpwzcrMRYMZzCet3cYFTetpQ9dfSfxEC5kF",
  "key21": "rzLugnRCY3PjqN3z8KSmEHHLX11AjMK34LMVqv7JAW6VyJHCkE7MQotiTDyj87yoMsCcDT2di3DcYDnGbrFvAHM",
  "key22": "P9a4udBjKtrPrJb3ESFenuuQXP3A6CEXi5LugYrziE41CyEZJyrSMf4xzwoNPiC3rBYvuEqd7b9nYDggcS7uyQ8",
  "key23": "328nYNfDfqafo5f5vVdoTgkwThzucixxhTdfpzdxdGw8XfxRrWE2ZAe87UHz79CgZCqudCidAA1iFCxi6yHk6d62",
  "key24": "XjZjPsSS8u1ReYLyNZoNWqfKqFYzpAa5awfFV9WUHQb87GJpqQhxrDDygCLtu9hm8FUuLZD2ABtSKytLoNJTCpZ",
  "key25": "2ZBAbzpYCJ4rkadVgncZFTR9iV3qtSRReTtARGw6vKC8uGDAhjubsA7nopgrkDgvRP6vdxLRXsioY65t5kASqNvC",
  "key26": "2o6xTSe2SD4pXxgzGEs2Chmy7AnHmvqCNRvRD4oySCXV2HKNFbhmpRxD55L1e9WShv6RcauewdCtBz3T99kmdrYR",
  "key27": "4z5SvBpKrtNWsMoVfPbbKyfsQWPsoqgYssr2kM4vFmi27sMsrH95QZaZUXC1bLZX6zpXJnnYTYPFQ6z2ZN2cuwfA",
  "key28": "4xCmXHGugy6mAi3dvEtXNHmLfv1vYzLCRr3EP3DmSVFexGqoVUCKLHZDg3kkLkRTKvwqYtbek9DVLwnZYyNKPFT5",
  "key29": "4HVe5poKJyU4UZZtZYNG4xmiN96Vi3bK6wFD7zDVoodjMxFqgZzAPfn6Ng4rWeScGGhUq4xgeHCdWFTMyrc2meb4",
  "key30": "2fUs2FdMTRrnJPRF38Ti9WqauLjCY2QPvCnMHAmVX9Hb6sxQV6rEsKLN97QR3dhHccqATvccUZgSpNmTKNgfCkBC",
  "key31": "62teffXmBKsJx5GU5DvKx4zkvrfcxvDBjhr3UpRAeJ3Dz1HAqzMhftjqrj34KwmrzQkxs9kUgeXkCMuc6NHLcwiv"
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
