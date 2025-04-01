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
    "2aeLgLHRuLxQAcjRtdrUGYrfT4SnkP85Si1NpF7gqYSmQJPAhkMcQtKyPVfJj91EGoLLT53ByZBF3QvY9bxv4SJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yEwiSW9YLKaatZJEjxRFKJhgR4hk6mK7417pWfcxBveCejd2NqwNPddk6DB2rCZcM1Hm1UTN4K2GJucRhnt2MmM",
  "key1": "3ZHCxK9fqa6zbS1JfE8xDYDxPZB5p4W1UkivvkQ9S19gSmPKwxcarxx64Rs4jTkWShmBR7auMd6g6q7uxX2ttLYF",
  "key2": "54dMHdxDoNau4fF4yFHzPi3meoRfypKaoJgqfQQdvxboHbFC7VCAqhqhc1hGogdTRt859EVfngGJTgfLjx5zXESb",
  "key3": "37ctfKZBRaFYxdAaYeZE9DhZptJridkVfqi9eN5iRdVvJS4TvMBxD9GKk4Y9C5AEphfPN3hoTYKRnr82wxg2oWpc",
  "key4": "25RQERGaUBBNGSNhFbfygaqAB8eDD7tkb9Vk7CApe4o3mQRCaRKGDStB6ZgC2Wg8idQbcrcXKfQyvy1LEbuVPQH2",
  "key5": "65ir9ZuawA1jU2F94bpZdfWgV4wwRuug1AsVBprmS1dEkRdhsZ5JvYJhTp8MLb68maMXLGNRZ3oCmkcchNZngNtn",
  "key6": "3KRLyUXyKqwkuAKVLipY9WKNdH7L1soNiLvMu4C4m4u83pxkstLBdeMFxrPSmEYPN92ugU9S9iyvyJexrdq3eass",
  "key7": "65WjRzkz9oRnmLj8W5hPWsP4Y7cAKQAQKBzEXU1YGrk5b3Q6iNMCt4EfNrUcPi99TukaXshwn1PEEcYyVBmCkLgA",
  "key8": "3m7SsL9DfKvSBJoqBukTJzhWceBF452DQKYF8xBu6UsibQezu4ppA11qLjUSADJfPvEWtKBa1em3jN46SQqt2RK6",
  "key9": "26SPXkJTyTAy1s48W4waNXhwuRwf1sLYHY4t9c2Lopgq8nj8RYkYbZdb9KuBrKNouWe411UMRbwZ8gSVfWwqjCt4",
  "key10": "2BhQQhxxPvsPaaCKrBRMSjWAaQFvqFsxhqQPNHUZiG2gx4WfmPxsQTpnExD9JU38ZZkaaj84twHv2DZXzKwGpVv8",
  "key11": "4N9WimGeyxbmH2hVP3xLeQD2ZT7hJLjfdQNKm1QcG7VqSycYmaTy6xcY63rxuHPDf6e83rngN4A9e3tJUjd2Z8jd",
  "key12": "3MpTWW1viyC6maKQZMaAXFYxUerARnY8vxWajLbrtTQ3vDGbBXRm4qqNwtpnR5PB6CtTGZS3rH8GwBQWeE9GJsU",
  "key13": "mWXNwyxFeaqqpkJF3CKvCyBmFW84z1EeGK9PjoRN9KDC9fJzWyntcB4AerXZhgyoJkDr21wTbriN3KFFQSeC3Vz",
  "key14": "mbznHTpeMBjCSMYCjr76tfS4PB417uARixqMq15EowznAcTuRg1CJbmca64Nui2VNa95ArWFZkmycGUTyrXJp9j",
  "key15": "4DAY95L68G5AogNAriWv4TbUdtG7LBAM8Pg6bZU22ihsWw8Ys2yj58M5czsxV72Cs6VTup8fCvwKMN4mNu3tCr6d",
  "key16": "3M39HCVAG1U1RmBLQxYrWmqfagjHWoVjBYuD7iKUuxhxDTMJTsPpJMQyCgeiNT3HeSCGG5cFeM4rcGpDX5tALTPA",
  "key17": "28S7pEG7q7xm21RpKU7NpH5qGf6ZpM7ehw5yEwbEuDgueiRSj5hVDuLSAPW6b45u3hUa2TAdaZd15VsPXLrYdTGM",
  "key18": "2r3WdXs1PNxm7hd2qPjMATBUZczY8zs1TtsZ2At8HoQuj8mEiCuj59o5TMTpWovgvXQa725nLYfQy7BN2U8LeNpo",
  "key19": "HCywhM2miFFdam4EQXqeCjJht1rvjFxidpqXX8peUamf5sbKaywb4Zf472yxDhTHmk9QRpe6aLAyQAZPmAzfRcD",
  "key20": "3fCkwVgtp3x35UwJtaPdRonfzpcPago1zZED4hZvjxM1d47YRPTAHityR1FuwsFYeiqLBfwPPQkcY6jvCMJouqkz",
  "key21": "5aCanaqeXk8neBqSxnRWD3RnLt2m5keQgEDv11tCzH2J7pyALtVGm2m4zDV4UguZ9Bun93GjQwcBgQ1CQehihXbu",
  "key22": "2xm7vqJVsR63JGfiR7hKZWcXndP4jmJmZcQW7PFaUoFG9aqgQv3erFPk9V2usRoHxPHFDY9YQ2CXzhtfaoB3WJjj",
  "key23": "nA7kTFPZqztvoGF7qAHswLTS5rzRDaw4Csknamyw1FVsUE6tMLyhq4ao8YREAEmfLqnw6i4QZqt9n2BgywFciGU",
  "key24": "26bS46rsw3SS9CyZJuz5LFh8mcBCzpAPxJhC4cuAK8hqgcnmW8ELjMMgBagA2XDKdhoto8gENhjLQECzrSpPhx7H",
  "key25": "5WhXn5szfCUmvzVVJYRuKvvuypCjnAgezi4iZeiSunqRNRyiTWCqfZp5aPt7v8r6cAh3GtERP7pC5SoDCkCPZJrD",
  "key26": "3Wemy4HXxhuVzXiwvUaRBXuQEACLzDqubcGD4ebdW79xde6hTjW8D5bJm3bDHueFnqqXimCswMxHeyLcSQvtmYfu",
  "key27": "3uqXShoDCYmUM6QxmihvDr6g5Gnbx7JVHTZFH1WNG8GJhrZV42pZ8AnTSjSCf3M5fcGeimRk3ee6JKkCCkkSA7ui",
  "key28": "3kMfyESMVrf8vgZsXSfjvyebpAXAEboFCj2qbzoNjwYCxwPEVBDXrpufiYzrMa8pwCdQJazevA2XwV6dvVMrmdvn",
  "key29": "4r3PzstTPoa5YUur36Tq4vLbWZRV4Bo6Ew5Eb448rReiVAPEReRvkax5HU3nZrw6yuWNGxN6FCVXZwxdoUpQ13ik"
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
