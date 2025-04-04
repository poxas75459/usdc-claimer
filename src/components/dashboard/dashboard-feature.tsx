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
    "4tt19qZwiPYPUKUHZni883rssaJjBVpDyJz3Ez9zTMJgcGiPkgtZgWWyryGUgoBAUuxJJBrtLAPJTPtP6qLikcfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xh6eRaUPD9bsTPLLK5R9Kdia5zwjfqgA2s7BBXwvZhE8Ym6XqaHpn5v1R2hFCADDczJaHed1ye4hKwtXyi91d1J",
  "key1": "3i1RZb7P6vBceKHCrGw2HJc42MZCHbMj8CG97V6R2b6sTcVT3wTxRePZQdSx4NsXpX6PrcJ8Fp3ucbtsNNsEdhdR",
  "key2": "4rdb1S1wywSMPQEvtaAuce6Qgoxz8iCt2M2XTzi3qFt21S6wXi2svz5p4ALk1TEvN7ao4SaNVCE5H6NtZyaaJRSs",
  "key3": "3iNVH7e8MWsAJa1V7rzFfUBqZb8DgzsnNyZxVv1BXjEWqEGQpB3ipLLXvGmog3NfkjeFbw2GD5H2FzeodPkPXkph",
  "key4": "4m2Z3g4MU2kP8RhWUH1evrcEMMWzAxqZ6Ln4r2xBZT9dYX1iUp8o9LtAMSK889vRFfGEskt6cNgaTSY2T6iVTXn1",
  "key5": "3BhkF9Cp6oGbwAzHEVUpfMVXji8QY94VHZ7x6bgP3qqBhCFDMGDoL5gvguhxwaABzTybofsmvG1doDgpz1dKozwg",
  "key6": "2BsobVrESjxjArPJn8bgZ1XgpE4uzsfkVcLCez8z5WNyvwWKubHeAVsbpwTFiJGyiVrbpPxKftparffQy7tJAdqq",
  "key7": "MKUe97D3aU7Dmd3itjrjmjyNo4P9QfsUkmu4u6EnHVFCFmzwZYMtgFD8spfPGrCx5uMQMRAfPQ1L2YMASckFmDU",
  "key8": "5erJ6uihM8D2G6gsUnAMP2B5EUrGSe5Rdn124JjK8GyrhJ6Cz7iA7Ykv8hLxXEweTLoYMPMKzKxD6jSR5Lxde4ws",
  "key9": "5Kq7Lm1iY1jKM4XhCV7BptNg7WNbe4G9rVLGNHRrj5AzDJ9oUpDbpK3GbyHaiah4Xvqt1Xr1iBQXsVxC1Gz27ZUZ",
  "key10": "4fjTYFDzPsxCr2hq2uFu2zmFTQQvyPmXHZG8gGVRtbNwmWRpuoqFQTTm1PwN2rn59n7LLxj7D895nb8p5pbo2uci",
  "key11": "Bgzm9k5ppSKcvcqAWBeac1jfz2YsCG4PoF4aicVYGYfdPzJox5XAHpto14pYDnye3DJc1Q99tEsW9r5HjRg9SvS",
  "key12": "3cJjqVBiEGE31x6Q8DYAYcu1VYFQeEySYUANKDdyfD8iEgaaYo5hP696JJMb7CtEN32Ary7qicmZHsH8bdTVHhVK",
  "key13": "6bi4ZEijptXWcqpNHe1yc8SjLow5XnyU67yY1CSQp8aEq6y4c9Hg98ADVS2fBD5wCqDorfR1TywCRtnnuiLtV5u",
  "key14": "4dyRSGQuWNyyHZuJz8zagr5MPahDedzfNEhLam6Ue7LGmJqz432Gy3D3ZHvvaR1Sm4s4qnePP8N565jZYF34Xw5A",
  "key15": "XBNvhMBq8FHs4jqB6anNQzB7Gson3M5JvM99Zuh5vd9UQd1xLNR1U2GoFXr58h8zoguM8D6N62jdYrHehTsrxLm",
  "key16": "3BHhCDvDJdGAgLu4ofTrC92FjknG8UcDvHciCZCpDCF9Bd48Tc7RcFhaYiTVdTJR3iVrLmT5URmzaYPfPVSf8mmD",
  "key17": "3NdB8aM2MMm34N4vYxHL6DVeJVC95cuSfEZDtwML2DEr8eYtYUc7hi8es8GkLc1YpbyQgAc4TzzJrffk4GbXUvnr",
  "key18": "5ZeUyfKL57fsateTanhty3kqkAn36jSR2mhKxb5dypTGx5wW8wYK2piXFrxwSZPasXAHFHUzj1Az2yrqXD26KP8d",
  "key19": "a9z3eTc1s2wDN2NMczcsWKg3NtgUpEGCT52NTampJ5krsj7hmb7R1SVNWDz22upSDL3PHoQrQ7iQXovUnieJ6gh",
  "key20": "3bqew25yaRWHEFY8eHvEsi7p8zQMRuwdPTTYZv6Vvxe3SToZrbLsNjBtjbhm4ZhWJvPgbAQVAvvYMss7BeCEBz7Y",
  "key21": "xtCcnf2Cyeh7WwuPKKtCZJx8qWYpB7QkekWDAyhfdLoMf5NLasdnuYpfGhAH7aMDroF7KW6bYwC2hyEbNLGZxF5",
  "key22": "3ajkebPmYMry7ktLr7PXQc1iAg6hPaAjDnfobqkXJrZxyuhMK71cj5dpigyLxPeNUC5JscAz3sNTpDCbqswRjDWo",
  "key23": "27BLSqj13i9eEw6LpfSXUVtscStj3veLSPzFV9qfdD7LnjVcykEZUwYeSTUyWXNuDWmCY4jLsx5dYU55WVKHTmZM",
  "key24": "2ro8tHM9qyvyHcg6gj4F9D476YwZRXoUW1rmNgY5fbJdvLUhpeu4qMXxXhPedHR78EMjGYWe454BNLQstPiXAmD",
  "key25": "3yuQdKSgUdZj1k8WS7FHVe8hCD2fe6MmBPKbM2X2oiD5KorLbUodjJwFwddyLSvbbanA5Qj24GTshyMUo16q5DpN",
  "key26": "41F7UuSCc78ZTZNBSZvK5CHPrR5TnQyvjDq3cHaemgeoSoizATMTEsj5KHrTBBV9wsgd68Msntdm9EDUEbP62TXf",
  "key27": "qCHu6pQR6dgJ1yQyZ8bj8fVVd5t4GYSM8p1eLon3MR4EmdJbPZhfUXUPLaPTtVCDBJWeh8rxQLuKhTTEekfewKD",
  "key28": "4HUfS3fUtNumZLwHeZqgLtWudtdrJDNAvYLYU3sAJ1GA6A2Y5zf5GZdTmVsar1qGGche9j9M3heAGeVjK7d7UAxp"
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
