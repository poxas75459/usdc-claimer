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
    "2XJ2UmbadFHxGZYbMKPKfQe4EF2nzE4aoF312uRYmA68mXUyg6N9EbG6JMmFTPDVt4Ton3dnZqHH296c6SJekkpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVqudS3KHu2yXoEZfNXERTcEZdRvN7EGJJuUnmSRnm9e6c42sFNY57u1Ky9DyEBjambiJaCAWvBQprQKmqzhUzF",
  "key1": "2qXkqC2uVto4br1Uhqcc4xd1Qxj5qpZCUxVJtPkk8mnF8u37VLGFXYAdy8fZxgqufs7wyNYUd8mG2jj7Y3qdeX5L",
  "key2": "3AP79wdyMpQj5qHeva1KTKWRGC1WZrobug2w9qzm1nyuuJjukqKt1gAr3h4dyVAM1unK7vApbeaD8PyLWbMhuQwN",
  "key3": "snvmm7xQHszy7v9NcudeetrNTJHYGwLQjDPgWKMPmUaXynWeAAjiiwZtFaJhiagVTxkkwocdPaXF86zeLZARw9f",
  "key4": "kYcpHf9QMzphnqpH4nr6fqsWGijKhB9VPSZpJ2CXQ7WTQAxHSvY2EPtDZiUfVvwz8Vo7Wt58wQ5mZ4S1JBKYSTN",
  "key5": "2aa82MPWa6kk1Kd4NAY4hazpXvRD6x5hGu8S7J3SesjFrNZ13eesipQkzFT95vTdgFsDC1UBdDkqTFGq6x4AQZij",
  "key6": "2j3N7unrZhcFztPDRZW7j94ht2FRT7TKxpxnfrEfS1gLwX2uLfnd6ehN4AkrG8FZBVTmwi8BDMTzBN5zDTuNBhkb",
  "key7": "W6yXfXmvDocbepAHasakvEvMTfiVeELKyf1i2X2weV53CSgjH2C5BuVBaPVNeKxUvx7ihSoSKg4RmaiB86kkMNP",
  "key8": "57ewRwdtoEhh5R19HA3S9QAE5G2oaT4sKPnH6wfVe4156ML8Ko5xSaHiCmsxtTAvmYKdA67taAYjdeScihibCtXQ",
  "key9": "5oMMCnpeqo9bo7m7YkGhunhM8CNDiCZnbsm97bVAdRB2JeHxxtAA9bmdwqqDpHzTNNJPgqv9FhAabHZPRQfDBKf6",
  "key10": "BKhWs4FjQi6dcmyD5a8epH2i1dWY2XdhZfSbFzcTPPyR3qfqerQCdwNaJTxS6VuLwRrjq6JJ1To23XrmxxG6NiW",
  "key11": "ZaMxPX7khmQqhNJGiA11LZntiHtB8oUx7xVv3fUeA5cUU9PMTekJRL25XiuZ3M1t5THVSaT1BaSi4FxvtcB6TYW",
  "key12": "4DTgrC6Czjk8uoER5bdsSnYJWr1mzSgC2utoRA6edUF7JWitKwyfgRAw25c5QQn13KXTchrXnaPJtU8tTmGjH5Ea",
  "key13": "3u4Yzr2ewGzMKPkgyXo3vSrz5jwg6Bf97MKNFJsHL8VgRGDRcA9MCKU7i3BhKtS6EA7Cus66cxjqCS78EU9K6zku",
  "key14": "8QBqAr7VEbHKVb8dm58bB9xFLqjYNeQyYrctz1kB2z71zdR82TaNQhXngTdySsCkoYXmnmY9wahiYTgDbXV2yBR",
  "key15": "55DDahC9JMUe8rivGVrztupBbZciH2cPe2vvWGf39CRUS6iigBsXMfSdnfbyNpQKu5yDqpepV8mTuFF4UFDwPdjP",
  "key16": "dhUTW5M9x3k8BWT3S39ynoFEC5z66MjvgJ2FJ6br761cXUQjBkB81CKf7jbYWdcH5wZcjHGHse4CrSEcJhtKwMy",
  "key17": "65Pe2Ur4ef9nj1A5JzeSAjHN9Ng85Pp8TcDEjUQ1NAGTYYSb8XUN712NAM46Rqxc3CY5ZoCoomXFSRPyaJZ5h345",
  "key18": "2B6oiczkWDNixL2R2nPQTkF8Fqqx8VXrxoK9Rdjmfxrun2jUNLektUucx4UdRbTxYyo1KAwWxQQZstdg4huLYKrE",
  "key19": "41PLfehGkgnxHe5t7zrdxTMCgDyqKcK5pmRtcaZv9LX36ffmCa83b3ucMS7zqpXSYD2Rfo65StuXHHmsvyaivf8p",
  "key20": "3jDL5TFCq2HggC8dyfeceWpVZmYyzKrRq6VtsaEQj31KFppRZe5UnQmVPXKtopLHkPVDjPB1qYZewFA9C7PaHRfn",
  "key21": "5QtPTnhR6RqL31XGCxWB4tWtL5sR7Mx8vJsHKykVvz9Xx13Gcy2yfFFTJkwnhBzDdus5A9y9ryxnLWPgq95i6VJi",
  "key22": "2fWg5idt8SwEfV3t8t9gGv4yDbcXsd7eePGF1LVFmYyss2mrcd7mL4oWPouqizRucPATtFNHUnaeGHrQQXW4fygf",
  "key23": "DEtqXXKbEcovpUbNWm3SVhFbRLnDyzsdSgcB6mf8Bs9DMaMwmbJgV4orXZkrZZnvnQXbEAVe4Za3ctfS7zjJZcz",
  "key24": "56Z2CuUfG3y615sAcAwdhc2fQ65tPDzKpRndNnoFEDjm3d6HkN5iVKkKfa4mKjjf2L1d6BjuRYEqbrN6t38aWwzR",
  "key25": "4jt43DuCcnRZ5qFqcRiQFSKGd1twRU1rDz3K1ofGHSon6ciyfhmA5qYdsSjPdLJHHks6irbN6kfQ7qPsaASFmdRf"
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
