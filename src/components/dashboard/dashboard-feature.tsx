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
    "NqkGBNNevyxDMZPVp5B8y1mqNZtANPUvJ9Ts8gNo7cNmTDyzEdLYxmeRacbVDCFqoEyukKgSWnDjFAU5LkYjF9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4sC54bTwPLwbvxFdWQ2SP41EoMdiyFLG663cLeBzsSjXEFN8164VLwRtAk5ht287JDuQXRU1y8VZALNPWZxMnj",
  "key1": "63XZK6T8gxwa3PSBAnrKLn9gPLG72kDLve2UoJF2wYHaaPFeWkc2Xp1cS3JBZwoYCLMv4WYfemJ51PGmiMzjYkbF",
  "key2": "4a2YBGCj9NPT2ofvBwTFXdXpfiDjTohiMJ9upuvQc2ZYVVUaZAgdKQeXwXZd27xENTHSm42PmK23Ze4chpNAuVjp",
  "key3": "3ka6JkMztFmXLTLTjpB7kE9JR8KYMkRwCLEqyFoRqSjapQ3rHnkwcLsBxATvLJVNxATvNVY9QdX1NSQEGJTwDM7U",
  "key4": "4bK5y4zXZmKVKL4DTgWBzJ177hXHTkk3EkmM6buBv5HQjguF5GDu2gQUao1KbWaU9KXNP7H21Ly1Ay46NikeFAfS",
  "key5": "27iEmrxRrRANQgWC4YEhYR8ncXAVevgbqtoqW1nT19DXRaARZW1Bi36XvpxdDqbxNppRj3fcULx9ssVgVjZrNFrz",
  "key6": "3voPBiDKpMyi8iHoV5bb6FcNkqDFEGBv3YMrQFrmvvoxRr3PcYnbkTtsJXM9uVzPm3tSAi6VibN3gSwgDMQiyrv8",
  "key7": "27Xow8HyzEvqM1sQu3fwWz1wGsnysbHurZss5Am1YUQjLdGqwFhPuxgN8soSmTTA1Hdq19r6QSinjNbxQsHo3XQk",
  "key8": "DP1DAYAc7iojzx6jEEuhfYABzhKaAe9N6fMKpXaPGtv4Tk9MVkNj29GLqMSdzqysmvTzovjqFiEcUjBhiHBydMX",
  "key9": "5Zj9RTqboMTY89KR3mrgmmJ8Rg3fSdrGnCGqX4FcPhkzDoCJbAKTQXjK4bKCxvBhT1SQKWyi6Afg82iCzBmmjrSh",
  "key10": "5ys25D8enG4CJCVqqoJ2yyTu47rajDkmoKHSndrJ5iC2F7gevVXFRES7eEk8BnuvuxpwDebqFLpnhnfY8S3Hs1KK",
  "key11": "f2XgTbFwvyCaVcGu8axkLZECnmHJDKSEpJPBwVpKd4fbJpcAdLfnv3gJc9vST2ijTRtNTaQbFh6Tb27EpX8Y27J",
  "key12": "5mRaPgcec4CyC9yH73eRw3tafapyE26BQStraUWLdTbVEZhJhDFW7hbW4V5zpjs2ZwUxT2w4gmZLg17SaSErjfHw",
  "key13": "gDnZf4e2V18gNZrv5FQ8GhScTK1P1cMM43XazyZbXSTz4oTjmYsXgiRAux4NGVYutCzLWpcKR3749HuWLZKfHm5",
  "key14": "j9uFqYkdF3FQ74yEa35jgG6wc8ocwCgwFbgUjaD5sMP6ZxSdAoySMv9PRFzPbJTTm3ATAYMsxn2xL9wQ8AkB8uc",
  "key15": "QN9kAE7QLSkbbPa59aGT8GbjKNKuYULg8tLDg3eXn5hpkCUrg6wJjZtF2W9GKngLnivMVZKiP3MGkw2isvFfLsM",
  "key16": "5tcizTLocKDzwRimpeMRZwmnAuMhZBvJvkmwatCBpxK5CxFoAfAcuyKYBcRbRKoW1cwV6roREG91vjx6P4NLLSZ4",
  "key17": "5twRLQ5HiC4gbmDYj4LoT4kMDaEt1hg6CodZvExfUL4CT9dbENxsWT9hHumitUjYjDGnvuBRf5Jge4966ubQgZqp",
  "key18": "3J221gW6KcMUJfPrBNojESW4mEUdJgB4NHXUe2nKV7JKC6jX2TfR8pxZHQWajxWimPRtb47PeRcXoQLCK63S8FeQ",
  "key19": "4x42xUaWvTjYKck7EHz8oJkcmaPRyovFRUw3PixoFxsydJMHUcensvL2SZGcFcBTi518jrXgRMDQ3v9ddnL6Pnm5",
  "key20": "4cPucpS14uu2fanPDv7tmV36KRx7oWihy5qa3aR8GKsVYRE257jJnyPak9QtdEvEdrbZ3HqqLzxbG85uvFL1m1Jg",
  "key21": "5kYadLVX38GRrgwmKAzde9kYFzNggRL2D4b1uzHPTrbU33o6EGSVJ7wDhnSuXRiigtY58eD784a6bNdxCKAVDqjk",
  "key22": "21PBX6riEBzw9nLrGgMZjQdMubjYdRZUgEqCcJ6fX5XjcgK9wfHmGMPVeGQNMvVYWFUWcnkmpnTHnBR4XqZc922q",
  "key23": "3Mu7GssTEEuqC6ondL43nCJSp5mCWnVKQhZ6Jk2CFHBeCAjfYCAgFbU4PgfiKk1iY5HD5NC4PZVbrJGQD9j9XyRk",
  "key24": "So9NTF3BRoFdsLc4XEpGfTgHvvbuvQbAN5XuWfUdqXfHAJdFcFX66oXsiQUJvpgdEx2p2BYr1duKhue2pp3NqZa"
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
