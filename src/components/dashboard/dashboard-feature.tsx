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
    "3j6pvYTR32L28RqFTiNhwgJbsVkTDQ9DYLy48hDosB36rLV3hrdtzNnBxUg2tPMXefADuf8zmUqeqHjJfwKoMj2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVzGkBkvhWw5wrmKQENQCZF7PtzjwPgFXrFjcXBLFXWZaWkLpMfGvGPK3tU6fnnhRvB6e1RHtAiNWy3BbWohx1",
  "key1": "j6qNDJsiR4AgUysceNry8hSuqkkh7skttxjMgBqoe3QNRhVFXur7wZLh9D7ERXLemWaqfvsdhWqjghFfMEoqm5q",
  "key2": "xC8TxHFqegEbjrDwR3HzaRiF6eLnxgtaid1VoRaYVovmeG6Skap9F55UGTyB8evuvDYqQstRC1R8EZ1PC6RfQdt",
  "key3": "479xHQ4teLEHpjJoqaCukBwBwvwgYJZiPCeAa4qXrucNsL1qzGYHLngRv1FxSonfpyB2A3XANPyrFZRHyELyMvWe",
  "key4": "21jtSQHn93bWn2HWSwFmgkXhbH2gLsn6rhkybuUSaNbBy9yb58THgDqUdDHgYkLDtLECTfeJHBe1oxqxxTUUNe1E",
  "key5": "4rTMAcWEshSxWK3VWjeHtgSkx36LYAhXjht1GRjJdqA3hEJzDwqgZR8tATdyG6Co9uCjkgKKo8ie9J2TTA5tSn3h",
  "key6": "guopfyAcM2bFqCGnhVWD6pVEChFoKrsGEKMURVAiJx34yMCUv6JQ6Bk67nMUyCCXo33mSyAUQQ44tsEeexPEKh4",
  "key7": "2P7HeiNKYsHokE3Mz98m9HXiXQ6j79dwQSnboaS5yUtw8xtGFKB1N5hEKFft3vcwjgndhcn4v98fzSTCcBk8yc2T",
  "key8": "4UHeTL5csxqSCXo5rcdo5meKEaB7oRVfhmj13fBqpi7mSSivmxQgohfw65U39fetpnF8GBUHtvA5nSuudr4mxfqt",
  "key9": "59RRoL1C9781FcEG4oFg3C8MsF3wbgTVetdy1v3Lgk3i3acEM3t4rRND1MMKWW4w7mKc1vGxNnKjCUvpeaVy3YXP",
  "key10": "4XzhkQyTxFr3YCwwrdFYYrGzsoYfiB7n5fhGhsxQRkEV9xKXfbUdhBfj8cShM9EiAW4YYTERbvCV1hXbQ1ZKXAvj",
  "key11": "2dJE3MsXgZPpPKCrbanCj3mjZLT7Gh2KCASuX2G7LhWVpPtXJfmKprpEPNUhng8rx9e5vcMUrCF1T8xmjpxhJWbm",
  "key12": "5P38pk4us73UrzMZTj4hugpeGVAiFZsD3czgypRoDurF3V4kXtsJa2bWnU1JDgDWBE276K7RixyoFPL2twFbv6BN",
  "key13": "3VYbMmkL9PzoVbhL4FrU37Jgqj9N3KiXAKh3xjLnRuVCzFBCZc3X7KPuNtr63xYDJS33ZdWahzmsrAdU6Hsvp6SS",
  "key14": "67Hr3Z5iKCRRDRGxYytqNds6LCgpLqkZaS8Zsxn88izvaRiQGWH2xy4dbeL7JVaQW2SpdcW3HN51mJKDAerfwTKf",
  "key15": "4bqKVTYgwUEtTGJqPhvBprYuU63CJoc1MzsP6UsrEM8vbZxrNusZhsQWUiWwbB8ucyVVr7cvXQb2CXLNPmmNDAma",
  "key16": "p3ZKpjtjV9Uv1nVatgSM5CMkpjeGGQ61P4ofHyGf49NcELUUKPoZRmkZvQjrjiAAPzT7VLqpxyzDieU2rA9NYex",
  "key17": "kG6FkXiNqbJPMibh6mZB2c2CuTcPBrZe9euvarAzE6fnNNxQFzr7n6pzTJ6nG2pasn781GvrhKiwnX6cJmGAT6f",
  "key18": "54BvFWY9rRMhaQPs4un4972hmonFhJQGuBhtVoKdBLmg7qrURpcp9qt5Vi9wm5UxxMcxMBV5qemdX4Lt8tGgRJZm",
  "key19": "Mgmp71tmkePNYigpJTxMPQFX2xc1kQRpevpdH5P216yW7q4nzRPmJfNY255KVVCMZJPfKGk8vLXt9c5S62pvaKR",
  "key20": "32qYm23ZDbLCW3z6YrVpGF1cS9Pd8ADK6WBBkAXPCq1DZCrySrjnSTVYzHuRSLY7TrWFLpZA4mTg8WQReK6KEA3M",
  "key21": "iMU8rTnChJPPi1mn8dK3aHmrsdaCo3KwY7eRKU5DHZBCWtnRuPJvK9zxTrUaoAidMmibYQCvmQGqfgPjrKjVbRC",
  "key22": "59m1ySFpdMrpVjDcnyJriHEGg55H1po77GYMbJNw3ndiKa22hwRnYAApYdAyLnrYJUszQ7uqip3QXmLQVtHHEbCH",
  "key23": "59HMZAaoFCud5Gg4qTB5y4PvhaczBnqnWtm5Lp7B6N9uT9ZbhyGGXEMu1s8GMR3egFhVgdZZRmzhw4zmkncYgFri",
  "key24": "U1FxVU7Dp7BfaBqdbfGVvxpbA12wN38omqGKxvzZzoRXybSonfkDDPrQzk2z5G86HsHK7p6wwqSmFJTAn5D3Zj5",
  "key25": "Utr7F4YawBDVCWSBS9tqJaAhtuj2cXbmC6THoKSQWbGeKBhLshqZA4dLLs93XYgixwveiDYkRE23oo9GPvTsiTy",
  "key26": "3qEJ9bnZ3YegwF7GGifTvLzbahVnocBP2x4kp4SMVgvAPSoVWfmyva8r6g1WJVHkR8akmQ5wnyGmfudDGuXJZNkZ",
  "key27": "33TepiEceJmNq3MthZTeUtsJzSTj9uCfeW8ZJptH8KTkvqCXbTGkxtyrzUFfCCqaWD19YKwzrfixuiDu4eEkxeGA",
  "key28": "2VCJfWZ3o5sJrnLpT1KSsWqojLGxc3AoNE3cnLFPkMJkFsJw2ACsdGTnNhjx5tifQjSUjk9KxEhjaCdgMCpq8pvT"
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
