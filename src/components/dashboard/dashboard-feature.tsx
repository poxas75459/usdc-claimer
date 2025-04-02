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
    "DcsDRSFpBBqnH1eUJ1uEZwSAXkThsuSAjQqqa6vayKGWvztPbCVxBzQhc8ySDar747gsnWfcpuwUk3ftMXTPN7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D51GA8FMptMgYZ9GLzU7pUEBesMoTFxRF8vY35yFQjFJfg1Et9KxJVS2pRnHiKJnL5fs2ySf78WA96LyN35XFk3",
  "key1": "rTMkPs3N6H2ypN68U7SfVzEdzUK4UHjSLQan3Y78sxiNsCY5R9TeLPcGADYcUJKMkCjkmBS6DmqBcGCwgqRKrDH",
  "key2": "dtSJHWSZijcsVhwKkfr7bdR1G18eHWVCBLybLdf2uDEkSsUUCNzwA4JaCWkFuwvgXPNL39AmN7yvDKQxE8KYFES",
  "key3": "5HSFQGc8RovX5ZBRMhW5RgDm2nve7Zq83QSqPCAsqb74LmtVB6AZdgsNVLqscWeWkZ9Mshv5k1s1crTxpYBKL18C",
  "key4": "4jpQjgaYy7Hc5AYAY2dWACJBbqivKDCbUc3vkJZZp5m1FYxUf9wQPrY8Zzw1Cx6xD4ecJ72jmJSMfxX5pK6CDFmo",
  "key5": "43NfN5Ckt5nVnmH3ten8LAzDZzMTHsjxbu91y8odMMi4WMgQL7spEyHA3F7R7SBgSkEGNaoKDNtixxoFt4FtFsmr",
  "key6": "4FmLxXy9tLLub3o7pjza9AD9VP4XCUrVEYTgRwa8WXYwzsU3Zzw41qa3EoFRuxEhE8p4KDnggrvqCAyxBYD7oCxP",
  "key7": "3mahUJ4vzXjYG6SnWXcjTFArLuBdzsjogYvGH9ioFj3ZfegKxCxS88QQzjxMr536vhJFzKn7BYjDhkwRbs2W9qD4",
  "key8": "4f4vDb5ZpKjefeomyFeSMhDKT4dDCVz9VTDhyqksET27QE74YUhRnDKB9m4zr8qRJVKbrK7gz1iXKbTgZoBaae3G",
  "key9": "5GyMdEUb71kiq5hytQeVLRygsWHVe3J8iTfHPxSKorc3J1X8g5ArD7HB4wmuVuDtKLJxE4xSzGkbjiLJJ7AsgZcP",
  "key10": "5PnzmArLstYaswvKhWDPma7MZGWAgrDGLgMscSb14v1D1B8uj5LR8xSpengJHB53qZEGh1JyJKVbYo9H7vaJYmqM",
  "key11": "5c5SsmeBm5HgQfPxaKLs42WZTBbKXR156pfLcwgjDKBZU3YS8sD397rDCNCmm9gTuJZv7yfYUgx7zu8SHTe88Ah9",
  "key12": "5HGriLTJYusUS6ghyVT8YGHnYW4fJEJWXZXRTzm3LeX83ZUX7JBvmrhe9TTNHeTqqsohVz1KDup2prVnA5hDhSdN",
  "key13": "4mCHa9TWkp8hmSRMkBwVzeaFyng7grSx2hYMZpXpX1ft9LKTV6P8nd6NNQnLHja8H6oEHUXhTkPkBRYmD3tXcBrR",
  "key14": "3rn8qo9zrXwThpfeHM5iVxo4vR8BQDcMgrNbq5R37iEvrBatxhBgZEDFLX8YGQNE3m1h2Br6rxY7i5YhaKq3Devu",
  "key15": "3yMBV1tv9nyxxbap5tSJYGy14zu6vGdqnmFp2gqn3vqJP6sSdLN6neaihv1x7MJ1sMN3XrkTL3oL2EL9n3y8KQDH",
  "key16": "2vLsLta8pEodmA3WMV8QA1vqptXSG6JL4YPQLQKtxjCtYd7seKEyZxJiWcnYWcSeth1pHLHYJcgag7qiwTb1qFVu",
  "key17": "5vFPjb26djdtAjxXjNY3cKU65YrszR6CjqEnBgzhU1Rn1KegygQKRLecLRrEFvfTqtjFXit6h3FNh2sB2KiNLu9W",
  "key18": "35av9AWM1WzNP87GGbcsnjUQCAUXrRTumYaqrVJ5WQTpCw2EAHpBWWPkzJFoEaC3AF4y1f4j65efE7oFwpSA8oex",
  "key19": "3Xufx6vTfqvMG9HMK8T55nTzz8feqjbmePQfsATpwfVZGvR7NK1vVYGcGLDii4Njbtf4CB5qFdA4wSTbpn7Phutm",
  "key20": "4T5GK8K9qVEsiceHcQUGALRfiCsKG3BmVQVhgKzh1U2B1nb8TdjHnCdvtF6Xc97pKGDsNPGAigri6UxLmoaC2z33",
  "key21": "FLD9rwJUbLRV6x7ovwgDSUGudNBH11jAnB1Znb9uxHhCSXKNP1mmMSJV9bsTzoFGLEE4cNeBMyCy4zQ11QZzEJT",
  "key22": "5ssVFsAEAUb8jeVL69s638BxN6pyF3DaGNi2FANusHMwQGpFpvb8MxVvTGsx9mjHoYQaBf8Ti8Vq6VViGP6BvnJ9",
  "key23": "5H7MqDz2FLLocQfBchtK9AXfciSmZdvjAa2gutvNCQvXSp2w1rrLJiuXmyL9Rys6P5djUy5x5Je2madRX3JjV9Ld",
  "key24": "9bARmxcQAfFbQitgZt8GnT78ZEp7McBMuBR6GnHmbBbwzj9iBB8bRw5Mnnqf3HyHVzVSMBbWyLNyHRhmyqskqD5",
  "key25": "HE4nkoQh5pamG8JRRVjhs8pC6rTUx53Vkzpwp9ixD8gSMjZTG5d7ECDEZgiiQAkut8XUpm6jpjEjkeQhffpovK4",
  "key26": "4okkGXYr7oAu1zLwZvb3iyhfHUDBwwrwEadKiByGx4HrAo9FEmrpQeGWuNaZoNgzqmsYNmJ6vGNqS1g8qpSPBbjw",
  "key27": "2ZhLtWFPs9xTAMEw7FASfb46h4Csk2s7iCrpp5SGTLCz6f6qYZnf2EvvG5dRtgFAdwAeAf5LZMigmqHyf7fxRw7j",
  "key28": "HxDYyZq5Bat6RyzdPw8u5PajRWzhMEHrVkVWmN46NTDrUoM22JTb4akMugkxFPYzZMa6wEr8E9yuZxNUXua5RJX",
  "key29": "2AshTJeaouHPxwMCiwpx68S9V7fVWYqiGJbH86cw5va9nXmNxuzD1VeASkRFKW3ZoTtESXMkhtqHS21SVA4sELD3",
  "key30": "2q3xp4PjQ5hPXbRC6ev5KC5wkTC2YjQGuD7LMKYaVFburjckcQN11X4rkrEVC1tQiGMpudhAME465B8MqdFM298K",
  "key31": "4BxCZe4zBqovn4uXAzGWMUEHQGTFqfgmzUyzXr9md6F35gKEjRF5jyN9xUhFagLk4argRDVraXLJsvZ3fZuUtrK9"
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
