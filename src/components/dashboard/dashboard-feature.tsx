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
    "5mhcQxWy66VGH9BCxy9NHn8Dx24QKdoooa3yB2FwksGVJgso7DGsN5GvWH6HXSxcTYBFqKa5sSqebvwUEgMqDMY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARFB17j9ntquZ6ojyqy4avTVW1S6XNx6XudC8z76GvuwPqYX7PApkutKRPuupaTXFgojRf8faXZdWiWwbcaivKH",
  "key1": "3wCohFyioNBaYJA9qqmC3fpmNhR53U6MJqQ9wmNYwN4K9f665FeeNpusBjDkX9KQALgbebi843w7WX9H1KqRAZMt",
  "key2": "2CoR32fXXDYSzBXdpF8pQtGVHimRmvDPCK8tVwxYeR9ZjTYs2gnz3zK7FQWvkxSYUQ7DasYJsQmTWFFgG6YbtGqf",
  "key3": "2rbfabhWbubdUe9CtHYkytka1eGis8T5bK92STeHThGp11MXVFoDwQ12N9dyPgY33AU5u6xMgGps78AqZ8RpK3zr",
  "key4": "3v9Ppbt1HygpFjg1hBWKDDugdhUN8t57u8YLH9VBww56hFXXdBr34YqugjqDUrPy4G3a3yifvgmgFemkQbzgztQX",
  "key5": "5TCYQH16SCFMXzbJmFtm7ufg35WXPEXp8CFnbdTh4PGyrTENEBMEJBz3GcbCViodkdEahvX3bZkXaxaBW775MdFX",
  "key6": "44wK6SfiBdW171c5cGf4ziCGeHcYwt5purJYccYUbqXzm9wdg5B86JakjPNgDjmRbEqvdy8zFGCAmZiMFNs2Gx4E",
  "key7": "3MguTFTfiGShZfV4Fnan13Mau9vFgU6PGS2EArBtXXVGs6GDjfApu9XWThEDrtWDpqMmzyo7cwu5JZP2fFnbaFX3",
  "key8": "3q19rwXFmg4m2e5cdZhaHLCqzGRAndvkByzH7DjCZ5CcVrBoaJwT4929o5K7kL1BcaiDZcbeHRL3M964KhA8uffy",
  "key9": "4GCVsXhhi2Z4LmQTo79T6aiQexGNzXAsqjPjZGBMz9eruQkReA4TS4bgfSoKZ7hUhuzPf1WtaYPesfT5sJQ3bPJu",
  "key10": "4P3FnaV1zCseQ7KDnupWsNwSxwv7rjsekDMg1Suw8q64v9YATrYJZgNh3CpP3LcUhD4thmcWnfs9VTVJu12omDY",
  "key11": "4fQ7zP7nDQLDwrZ2BVdkrgEqRArb81PtFQdTQg1kvz7cHEJGZwj5W1iQg7jab7qnWpCzzNLGmVifbJWJUq5WxxE7",
  "key12": "227NKgiHKcpgHb7qf4kXGX6XrPZ3Amq1NB9eaRhR8AeVTF1mP1RtgYK6hi4b2V4j13g6gBTjGpze3CQAVE1bEUdc",
  "key13": "5EbJ6DrYJnVZQ2kNZJwvtEov47YUgbysUKECq4LXugRW7uMoTjdsyxRQqvYwyzKSrA8x5xbpa65s26MVAnvBYS4U",
  "key14": "HxUgKxpT2wRQ4hZtkaHXURVXLUF1bytaxRkfYi4fznHJexA282N8yjk9gfH4XFVFKXu13Gb5HETS7wxrY7g5rDW",
  "key15": "67Rk3J54uJ7cTJZPUp23ymRFW61oL8mmYPF9skAaSn2PpoTNVefrSXUHo7uYxpp7oRCTiNiWZgpVuVogXWiNWfah",
  "key16": "4NR2VVCmb2doCV6XS6ryCwY6LRDMFMnvqcsdRbscR5gnLNW2d7YJEzKyUKvkyBokzArULWr7LHvgeCLHGKYmFb2b",
  "key17": "RvbtgSD2sSLnYsodjxezS712bGLmMZio51Mou9np114vYtaD8Y4HWaVuY3q18FXyTXbA4Aqz8E5ccv5q6xHsfae",
  "key18": "2RKRWZyPt37feJPfdpGNdpbqvBrJLMomyGF4vvvuqhSs2JLdMtpceLjnx9xPsUpz7mN5T3JfX77YeXZYgaYSEysY",
  "key19": "2r59ToUiNrJMJzYHXHxwr3HGMR97vkn9n2EMLgaQ7mEZwZA7p3H2gDsZa9JWZpyy9DoDC44bpWbrs6axi6hx2i3H",
  "key20": "KB3UwW1knYfdW7jYpgskLnAWecW96429pimVmjr2CBDCtWQRMWRyQHz8kxzY4z6dzqGdPSAJtmBA5ShwjFLvw59",
  "key21": "4Uce5R1mAgRF8Yyxqj7K57UL3TgyuefTBdYbZzvs7mcsh32cEPugH7LpWut6oxfRbW3ncP2gB9R3FAzZT2T7m5mN",
  "key22": "5BxXqiGwxk5j1NNXvKDBwUvkYSN2rzEaWX7HCJvUbcpZ7kRW2bn273isP7dtSAdrA2RtbetnogpjsEMmoohwahTv",
  "key23": "SuhXga7LVPh4RZEkPFfDgzzCnqJajtseuGJC1rviKHubCw2PL7DccCAJZpQqHnjUwTNy1UUkTamEupAKuvZR57S",
  "key24": "3jMqmuBuZA71mbzVPj8zzB1ABB1j2NPePrVNmEpr2whG5vRwtmZXqF7efZbQsN6Kjuz17CQ8dZozBf7Ke8v2fBuJ"
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
