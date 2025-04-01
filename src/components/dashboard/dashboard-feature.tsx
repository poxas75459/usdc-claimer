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
    "5ZA55Hfb2x4qvfcVKDr9B3BPJ1YrJ1ESxs9MNyeAvUzNLfsWqTCUrXpDpBGpE51J5t9DexGo9MsKsFsTgZA1VTvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47p1yoZwMgvBftbMGYrXkuR7mEnndSg1dLoZzRbYYkmDd8bJn1RZTAsSQ4VzgjWdd6YD15rYdR5u2KLSjZhskB4P",
  "key1": "48YDxZD44r7WGd2AcHYWP1vNPp7NSpbHndycRpQzjCKCcEAPuDAyVf1bCGGDTU9fV3463Ar9Bp6DyrfFrWh8eW3u",
  "key2": "5zKiF8am9eZSRestCSk5j51qNyrX7yvCbqBfmWiKd6RDMTdfFUXffHdaUfpUhBnkApcahnaftwS1P2Xn8h5K98kX",
  "key3": "3tXSvfZN3ZAPHx8V1cpYXGM7v1YMRjfiY3uCSMdB5TexhWcAqwEGDhTJgwrEji6ub7iFMmhc4mLmrAw4sp8a2b1r",
  "key4": "5PuBqe2ZsdfnSKAzs3BRaxWffUa7oogPWC9DPExaDb7pq6hsBTwBTBifoxjo5T7kbqUFMPL19n4cHqYtQXqdhF2T",
  "key5": "5GYSPzhnfeA4xfBX4iiX2AzP7QdJyY84gUpAXeBZS6bqmWbmnp7EecbCfURkwXdDNQFx8nRyuFPdVQW8EXeZTb3K",
  "key6": "4AMN3DUkZp81FDfoSDcvDxcFPqfDZwtLH5RGx18bBHXJRswJN4a8F49bcgypFc4KYdBTNAyQxAtAs3tz35PSKegH",
  "key7": "5ReBrNZjMaJ9WLeY7QWbCBSAZHUvUbjUCp43FtEHh2u4vTwSshPVRC5KoN7GiFWohyzWYNBQT3wpzzAoBBesN9Fx",
  "key8": "4tAFkdSmzs7px6tk78Mhx2jjWbkirXUQRk5aBk7at2WrA4nRZQSRvcRuVvGNxKqEpPfTzyHbgRHKoWBjatY56Q2F",
  "key9": "2ihacmj7NrM2nFSRJ3HqMDTG23t7kfd7cs8JacuFUVNFTru4fEQLQME6yEk9cHX7c5Ue65n5nXoBtq47g3PFQATb",
  "key10": "4E1JS16s1KQ7ACQeiwDKQ4xLHD8kpaUGcWwpzGo8PuYbbCTpNJujEba47KZF4Jpe2Z6tQJqYYS7UTqz2Sud6SdWQ",
  "key11": "3KRQ85dVppqX5qQiMhd2EiidPR1a95pHjjxduQz3McLrhfHi7z2Chin8EP29Ziu8w25kZP2bryhic1Xf2D9LQvSY",
  "key12": "3Tk29mxP46rPfGsprfzJyLb5g9Bzg1CzVWV4SaFPuWuKPkskqXDAHEYcdMoeb6njSeJnugePABhjYwwoR2tsYNMj",
  "key13": "5C8MQnuiR98W8uox5Exp6eEYqdKWNkXKJTZdNBX6douMqJT2efsnhCQwkLBowRP19MaF7tLRCxU8rCfe9mUYeLKb",
  "key14": "tiebxrUURLaoAcewwHe6dwjmfosjnjCYADW8tRad8M2PZ3bCU8akG8YZ87aQ2YEWVTEJsyZQXpht5WnAJnxeTrA",
  "key15": "67bo686kr2SSWDZbeR646b8ZfS5nDD58VMDG1JpGrnk8fQmp7pj48rGypX4NDTQJD3RLtNf2BTggutQBzHwhvCA3",
  "key16": "2ca6H78m5Wchg1jZTmvLYNbqRV6mqCK5v2NJWnGU3CDJDTVBKWRFfsoCnBwx4WzWogpJAoRDvNfpkzUt6K6sNAQ3",
  "key17": "5kGDUSjspA994EZqGrT2wznFg4aTH4DGFgLh1ZvKtUDoVP4RjpV6HYkeizzpgy5LnKbcA5FMADFFgqDbPjTSqe7T",
  "key18": "5N2VZfMKBTn8iW9fVTR7p2WtDtEpwMyErQRY6TAd3GzEJm9rTzzNk9zhKoPJqBGqysjqYBqtF1UfqpL9BPdTjZo4",
  "key19": "4zW9BuTVg3USVDZuUm2FAKQVMfjsNDK6LLKku5Y9t6L7UC9Tgg1NrNnxgh2cudviAJt6HPzYKoydzcKYjvCLXVY9",
  "key20": "3N474LgpKqBcK8xkQc2ddZdNT6SLtAxPuTXEQbrWJFynYZKyd4ZYKmp8VSZ4BcBgWkiz4G8AYs2K6reB1Y944h3E",
  "key21": "Y1dk9Rtw8Rubh66PmK35F1oRYwiwvAJ7nQN7YJ8L7de9sHYmqQTbAuNKVUp1nhEQwfrQNy3Z5x7S2ZB7jzvVHqk",
  "key22": "ZqYvdXojFMthATQkmGhCaCHZjthwsgjviBJogYDgF7VoSKdAabywePUZo3omeBY635H7hdPVzJuXduX5861ny5m",
  "key23": "2z36k3FA9YQg6nmS8PgNkjLc35rW835HePH3TejiUsyFBdwUC4S3JY3XYJAbBMSs2PL1AbvUr8i8gDm7X92xfwED",
  "key24": "3unNxqRLp1tqER1Q5b4jqDBbVjbxBJCw1X2FLuVZ5T68iVCkCsMem5Cy2GcQamATmznL7EjtiQQwzpd7SdUhajjo",
  "key25": "3hVaZoNPqRF6S6krGc9NjBpmeM3S5bCnCCmsqyaFftdE5o6g6deXrXqL2zErnJWSHpy1517kVgSiBfedk3tzQSGk",
  "key26": "BjZ86UEy6Q2xU5bVL767rXq6G5o7DyqDmCV93RwWuoW1j5L5Q9N7SJ827PZh8vveTedVuf3NAwiXRh7h72VuV8Q"
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
