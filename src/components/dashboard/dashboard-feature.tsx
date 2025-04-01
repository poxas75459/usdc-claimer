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
    "2SeYjgM3KxCKvgXMnNshScByT3gJXwVEx9gZ2M3nGBRqLFvwz178ivGGKxWf1dK4a3izK4JDKPC13hujSdb4ADky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ih9SUKfeDor7YLPa6ttFKp6pU1Ftg3oxPPnuqek2y4ejx9Nr3kxBWSmBbnmY54E2KiNMsyEpLDPrd4KejdDVDjm",
  "key1": "5m4Zw1EtG8giWgtje5tQCNwHKyaA1wVpc3TAtmZ5mx2LmuXdJ1DggyTM899ZoxjFVEZYMDuQeumnDhEqMsba7bfc",
  "key2": "5JjtFFMS8BFMq6uJVLXN5Uxz6RowWcv6grKNqBGt4cxnGfecrcVJvWyFtxpZhWbytbbvk6R3ngwTzk93C8QWfgJz",
  "key3": "3Z8h1E4NERCcTjpqkQ7XXic7TXjm5KDt8Qd4L4kfdEa1bpsQHtrPoKafqWtUM7tRaURVA1AE1YKEY18McotkSdoD",
  "key4": "3DQx2SFQ1PWRSZKRimy83v38Bv77FDnoUKKnEGceuxj8FLUb1Kpmrz9bcshjzZjYCJuM3DaJEiJGaPfxEZ6Ej6wc",
  "key5": "3pSpPqpeVTcF7xMmUP1Bpgc2UZYrqGaVxDt54CiQTpwhM27zzMg795eJ4VfXe7fcPDrMg7W213J7h8sf57SDy8Va",
  "key6": "2aYWWT98mHYBYSkgZy3LFjST3B8fge5fSN9RVpEWhzXL4dJqYPbpNkWbZ28owFz1ehMkgpmMinLX25EEHmgxMRZ6",
  "key7": "zQ55SrE1GhhjGxhZ9QVjo8rhWjhVcU5g3Zt6dFAjyquSr3mteEazhDuFq7mD8xBiJG3wmyy14MToTqRJ6fKM5QR",
  "key8": "4utx1Z3MpQKZxTUuH8n8Wvh3WD7p5rSV9rnH1KWfRM2Ri6i3KdyatVWxpyz8p3MZbdL7d87EKVFkboW7smmpLJiE",
  "key9": "4kTomUbrCTKm4ZodAxr1TM51BhHwEv8szLV7wQz9Ac1aEchx6kUGszGDvoULfizTxBNxtGsmNa3gyMtcofBYKrjT",
  "key10": "5xaBspbxGSPr44boW38Eiz7eiTC482AimqySFg53dNX8sufGYY1hSrkVLodbiTZasvohgC7fj5gLMai26XPHxV4g",
  "key11": "2cEXDoW2jtbMA5pPkd6f7Vs3ojbn2YEQrFVEh9tx5QdegnQMJAEuUTD9k5rQF7v7f4AHRej7Bz3eqA465CSYAQib",
  "key12": "3iSDsKbyZVpJvEWAWGUvB8ropc8477wYW9sQe6yWXNp6cf3DZg2Qb6kZJvuyAQ7vZEeVjsibSkG22eScpzU2emUF",
  "key13": "4tv6nPwRafyDjpzB67SWKLcFtG3xswAyRU5fDj74tLtY5V5Nw33NYiJCtZFXwm1AGQ6c5PE4Gjkdguq7QN13wy9W",
  "key14": "5jbJiRFTFuKUtB2bn1LDGHCmnqEqGaJuuRaFRCjZNtj1tZap7hye8ebvVDz7q5vetggV7JsBXoR4257exSvU4inj",
  "key15": "SZrp4DXPAwmgxMBGpwYx6dHPq2z1hAzUZBnYZTtyVRnm8eKtgDBwhfPyJaZFsg5Fr2QgmqsZhsfPfWU4iy8dsFj",
  "key16": "52BZcRgeWPvwMaQp9NwQZLHq6wkTAZZxSAJXzFyTvAYrCz4otiKQMHz7YaETWpSnhPpE6vHpdMKhMZR3pQuvR9Er",
  "key17": "327ooMkuLAkVjgad6irL7TaMHPhFiNhaNfbeEjiCWU6K3KM27wWSQSPvVC2mBuFRC3ehAx89ioj6KVQJUa6Jpjxm",
  "key18": "3eKFbcU7rgPSADwqRCR9g7qvWkbzpktPuMCKpqfBwYaJzZbXWbbrymZmyQVLShtEMcGGCYB2FD4ts58Bbj9cmDih",
  "key19": "XiX6fvqsoGjhLKJ1mfJyaAmHxanYkYjAU1smeYG6GyqKsZiesN2jeRLJwAUtXCWTmJ2f6PkHVrsdieitjptRESS",
  "key20": "zAK4MjcKBrkc5dsGTBJMxjrkBQbUS33U3uFN4GQD3irRZjotgkx3VvoKk22bbW4JRr3TQZ2a2mb8MzsCHZL6EvB",
  "key21": "4w9ttG6aGXqjKoPmoSau3jUGTMricLnyRyoLafSg2aoxGUiRtBsvF5jf7Skffv9kbw97Y18fYpPMgWJjkz8AdLf6",
  "key22": "5ivPHEDJGSrGoftNXLT7iXp8sgufAyvUNDvKWzUpNXxn8mbz1LsxdpKdb49LP4cWvcRbRgpg4frEw15gpCA6rC1D",
  "key23": "2NTf8QXmhay78Qdrvi8RXRrnYQ8WxQa3qoKFWrqwCBr3yd7qVgvWYFYcKnPCdWLbdSJyafqMxDh1vwseUMu5vCtk",
  "key24": "ojBWvqxV51x3vZqmkNzFxuzyNFb9TQUYdmwAqTXyVjcziKvgAugtbLAstxLRMKKqbopgpFxNPQNYL3c5mjrKj1V",
  "key25": "5m5iTDMGnztZuqqbyrutTYjFeBcvtAiYrhmeb6WhMYmSbHXs5f78hsTogLzfr3S2w9EYMKT8uCbamUXLNrhrYyB3",
  "key26": "Fg7M5WmWekheptEcUMHbw3HXwfw5x2JzEpxrK4YD9cYiJxq3SjcxQAHra5bcDUtfLgAW9ZrW6QbLEHDgaC51RXJ",
  "key27": "3NWsPFtRaweckpHaifPbDYbmh9UYK7bdaqRXH3ut4iePBxUai4avkJkGXLZDxzen92MJvHALEbmFGhprCztpj51M",
  "key28": "2zZSq252Kcr236n8kdDNvLw6F41HrZN48B5cRRMm5oN4WezpN2TjDZxpoAyoe72dZCpJNqNdDcvNLAqXTWgY1wj6",
  "key29": "eaMS88iLqKvtrFDitsdwZCTpBshq6avieG9ayPJLhY5GJ9oPosdgMZKfpCVzq69haPFxBW59W2zXQMcXqvgjYv9",
  "key30": "NG2CQqPDJTUePzSK3v9HK3d7FQk3nvTBZChdqNpbdh1scbtyhmQT2TPdeUeL4E6syzwm8zmLmRa4TxS6eJX8B51",
  "key31": "4Zxx8Zj1kmDnhj1YjuC6Fn9HkiC3ewChYtDPRUyLcEEXh6c5oGXjrss2VQqfm4EmeNnHg6A1SvSMCeQbEx4y2Kkx",
  "key32": "44DZDtsqhAPM8QUGcotbrDNpxNWWxcC23Dsvek8WK3AP6iDzZ6HXuyh3PiKE6GNayAYDd4RkPsbekSUaexGiBr2b",
  "key33": "563cMYfWX4VKZXXRxVZh3fYS6NNkiRJTPuWgSf1PJ1yQWr1eRST3jeVR2SZJzLEK1RnBmLtGu6LQwY3wZtGixXgR"
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
