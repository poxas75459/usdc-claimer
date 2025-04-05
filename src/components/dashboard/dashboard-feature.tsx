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
    "3ehhMQp92Z54hHJ4Mr7sJLKKzxQYfiDUbPBxqXf1F4GM3cRSuaaLohh5exh3jbn3bKGAXrRfVZxxrA2LGywab7wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcfziABHknGTqPMCK79JnBs4shFDQKkzCi5ZPfreJ8UuwDhkei41yqqHwfS453Kn87KMvv1Q2tgVa4Bu2eJo72v",
  "key1": "nLJJrwfmQwGyUEMTMUFj5eKQBZ7XYioTKdERZigq8zEoUQwDVN1G4BGWSZ8QtsyJYbdsmqEj4uCzeeaixQcDutb",
  "key2": "4m8DAvJUaY2qyzapz2dqmcbn1yDamRg8kjvfL9QNnUAUzYuB7icdU14vCbdiNuB7VxPtaxWv9D2mgfcF9j9NomAS",
  "key3": "2ecwpgeSEgqSsofVwf5Zat4veRVh4q6T9N61Yh6uBraZCgUU6MyiSy54vLpQFnjF9Di96qDh26gQHhTYRWnRwE9G",
  "key4": "4PTn3q2QMZjxxQyy6wjXZJ7CcrJYBTHcH4ae86KHF5ch1EE1nR5Vr97TMR2YG6JZQZnSGcTjeyZ7b1mrFSqAF2Ey",
  "key5": "GH2TZ5kw8vvAMPaMyTTjbPJKHwHbcWnFDesvCsXcihmMBHrNxhyAwcAbV46NrVLp3MJsscQ9gLzarFqKmwrVDGd",
  "key6": "7LjmRs9z4GYd4kd28t9HVV1uV9bciRPoqEdJ9maPRwgmX8AbGoeCDihdKuxnhSRELFxe326ana4EXHh7G2EdatH",
  "key7": "4XMJieBo4T46neQzMfa7kxUrECHuHopuRJymgMRxxcPDB7JaBKHnEEjy7VzMuk7a2MNKxdjrkKQPgs8xSvZcyPFm",
  "key8": "5n1ip7bccqCcpREQirUoojzCtsoZjtDvyjkSdcm5eMKphyd9TEcWnj4DcZzKAtGN5SFbxGXGvcR8yiM5WT5r3xdW",
  "key9": "3T8q2mSJWDbdU4x3LGoxYLxcYUVxHBshPe69WAFm6qfuF2GbF1CFPMqpcPBEBnp1zwcbf5twwscKznNzLV5YbWHe",
  "key10": "53vCxKWXFLphEt65hDpZRNywgdWvU4zBW3Duzqv4C2QmLRREQwqK4yNLcXACXHZrhwjJwnWyyTfUUeC7mqGzdFw7",
  "key11": "3fYtB51Vf9qL44x2KFpNUtk47U9S988BeTzwPP8EQe5gNVTLSfN53xJe2GDppSVwS5hCHLn1DoXSKAMbYBt9viAx",
  "key12": "5GDKbr1PzPwZ4E6RacE6pUgdxgKKK89EHpEnxTGRvh3Ut6xhfqmYVfpAfDWozUZNdLCiRA8K5CQS6ntkduXCVcek",
  "key13": "2oNPqpRGdL9PryCjwXKhHZGauzz1Gv3p4FDJZi56xHiAGGkboTV1YTUw6zcPBDntxot4qCsVcPdjDMa3ML8vRYAz",
  "key14": "42Bx9sBpx1sbxx9Ww3BfRcPEi7TgeFF4VSDCo3mcxePw8hXGdwiYkU1ByRDMe7YmMMQhHa8HkqxVfxMWcEUi8YjT",
  "key15": "XMmuydXf8z91iHv2b7GaFgAhyZr2m1mZ4hcPBsMEFXBuitDbALuqkkhYLiHfN8C7EGkUt7D3oJnsieqksZpAcxD",
  "key16": "3S2zXn5Nt5Lyengk2FQszMvqV798zbFG3mXwRESGiKwdZUXYy9ZfVLsPit8drPWz2zHPyRv7uodwJ6sp7EkwTLV7",
  "key17": "45e5Nvi9H7QU7MjdsRxQTYCvuarr7ixegJLha4oUEbMgUUZpM9aVPnPrBfzhiwNWeKNxtA1stDXGdwu6YMcsetNc",
  "key18": "4BWrGY2tzVgga3fCkKjgmeDjzguTwWnHWuRtjW5pVoXWw8U8nibEQRF3MEdZ4L6dWH6QfudQhJ83cYMnxXaGG724",
  "key19": "3ooaH4WtJiYDsbug6uZLJy8PUVcCwxZXY97ajPszU3CxN31kfqmutbet5WD9hqGw62frNcxDSLe2n2j6XgkKaQtT",
  "key20": "5KBWk3rDUZyHyRenmfnQa8kSHfQc5ryMci4dsgTxjT6CWQZ2XVrQSh58kSbEnFuttUK49vr9x9wHoPTBQc5zCzT3",
  "key21": "5trGkB3qGSK9y13Yps9UqqkdYnPsDn48UaBECKk17x61P3fW6pQRUy7PziS1JmDbN89obGHDFyVpKWbGo6hR3MhQ",
  "key22": "35H1VHVc1TZuD8yuJ2bK3cxoDBXzTd2LkTeDZVjif6syMoQgXoMQpbPQCfW3PRvFwBdxFqmVTSdWNibMFJRoTE2Q",
  "key23": "345mHrhRd1bTiGfBxePvrQQBbf6xS4UPzeJC95nB4YqAqU5YraGoBVezbCBf4M4eii4GyQ5NAgJz5Wpkx2zgqM6w",
  "key24": "3Aqn8QYhxX24aHarUseK3U95ffPtCenDiF8rgwg1ZE6HRFSc5EM4Jcmq9hrGp7cBDaMMdXMXPa1U2ocZtVeUCD9f",
  "key25": "55i5YCYP9gEkzprJYRCTy91chPegvSZXEWyJe6GUdXqmFRb5jw9XTJ5eC4RaNnCTQCr94tdGyKCWzsJekCMfDxuk",
  "key26": "3ria3UUty1xx1Pre8QAwmH44uPCr1HnfhxFDwYZVobnSXguFvLJAcMG77BGfvSvtjuHjUWiTCUts8bpnwSfEV5QU",
  "key27": "5D1RAAMp1pRsya7MG8zFMLT5ZT8ovBd4WpanFfK5TsPayUWcsctuQM9dwyx1LxLQjovLP3K7nVjrXwcTJRxiWeB9",
  "key28": "4pJnH2LxLEzEz2iV4F6gvaiPZgUfVqKmgRnhD3i1RknuNgwK4pZGSuoreUvvvVQutnzm12kVme9zuV2UKMwkytCr",
  "key29": "4BMdv3mz5DCVyR8BcXk77wrJNsLkGAmrJHrAoaGbuxzzBoMtmeVJvLJJCoi9GxHFvv7UxySak2n92DkgDD9L6VFA",
  "key30": "3Q7DADeHAcqSK3PKuoLNU8xuX5AJLrZ7LNtDHrUsEa8yRqDrr8mA6iPPVV7NZtb8Yxs5SBbBg2PYKSYk4UfLGpBx",
  "key31": "5ELaN9Bth2k6TRFjdrSYNK2hp73Cf7PzRkfusxL1PC94VDocPaCy9VdS9AKtCoNNrdXYYSomHrQ9oNVDNvb4u25"
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
