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
    "GTiwSSVGDTic4g89dAD2JMfsPMyiDwUkxcFFak2v5DXP9EeqZbHsRthEELoaXCgRVjRQKMqT63k5LkXv1vJzyW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXT7SdSdju3ZRnNTSALyYfVZgyhrmzf8dBQYM2uVqcistM6gmEKXLmy3wJsDrrrKJoE3dd4yY7wsbqYBAbw5LNP",
  "key1": "55mC9T6RUCkvZELycLfx6whTnUB4DEqFkJDB1Y3tmp4Gi8e6xEMFmV7kvT1ddK8jHGEiB22rV9pXbRSbBXHfo177",
  "key2": "4n9eYCNKVRgYuLrszn7VnuDfW64TFgwBHCYNJSsjgCBXBcsaUg3j2YdqMsa1w4di5PtncsoTYBQF64WET9T2r53Q",
  "key3": "5awCUHLEyc2ZYrFAUeBwiR3GVJhSE9srfwa4KrNWsNWcD3gfHCKFKu1hK6c6A77esuJ5ezZUbAgF5HvgsFDaX4g1",
  "key4": "5qf8mh6eLsNrwsDkY3BFbEEVzUHycz3iCs14u3sNez5ZWFo8cCrAwrdTuN1T2eGBKKeRriqgXGSyXSihkc6fXKLQ",
  "key5": "kt6SJ9ePnj6ZkpJSEMf4JgM9kvn91g6PhHMhrhWCz6BY965eZXLngisRanWWsftDGzqwhZv56qiKwqQsoMr4dVG",
  "key6": "2YcsZTAcKBDn7995G4wvMjgy7nDwSwS8tUsBzCFfSQurFyTw1PByMqqhajqqQEizQCc1EZZTwJyJkJ9XhfFKfGuu",
  "key7": "42qJ65rE1tkZJM2TCBkwYoD81fYEA5XdWLiXmYd7Qedv5vHZ9MzHUjzafQrHKSWN9qTCaxFpN5cFdymjEayQfBKY",
  "key8": "4oY4EALTBvpia369dLGi1vL7ivrLgDPjVw1dQ3V4WXht2u4KiqsktPknWJf6eZVY9eRaucRnxSurWZbWUQCmRb22",
  "key9": "28FUwPWu85uwWN7uzmUsS5XCxw2cLY6dJsRTEACqXX5Lmc91K3Zhmvj8qt1CpY4MjQVQ91UraXguBwddX89QcdzG",
  "key10": "G1Lpp3obLXSwNnBqcPPBQ5GdBbePwKjfkiZzgBjM6rSjdJhBVGj8RkhN6g9CquNyvt41dSFd5zPp7H8UYsW7opL",
  "key11": "JkUvEPGkUDWGx6TE4Wxgdp3TyNSx5oWmXNcM52Yb9ccouRBJ6ZCW2HxiYTdbrD1E2XHriXsioBAsu4tLWJ8bEqF",
  "key12": "Ayar9qqWAHxREwSGzyUrfuTp3ATXWFnvdRWAH52W16pcfVD9nUUGHevNGK4bG3Y9eyxXmiiera7TxohCPKnXFEx",
  "key13": "3qjr3LEx7mgr2dY7v4inZFuwrpVrUy8wwuyWyHGmP4jwkMqsDstMKEb8YnMUnvvCMFeFLQgZjcRpDpzny9E3P3v6",
  "key14": "2yBQHERNH5GD7HhArtjUTnfNEqkFEJSHvZ2WFPVrYDf8zzt1CvTP564ZD3M5mMJxgsPkpCZa9zbQ1uKfxPEftmgL",
  "key15": "2QXhdAxhvPTe2Dg83ifi1bqQ6rRGwM5kqgWMeqE3yxqYxdQD3HZKongTAM8Qj7YgtPKcUPVYCQ3i9a4F9VFEhA61",
  "key16": "3WdyFd1rPYgSzj3Zn91XFSQbR6zRUbYprnk77knem2wUSTY2wruK2vTLSAwRW7tNnULYYMAMA7rWiUr3k63dfyJj",
  "key17": "3q1WRj26dvwHUXwkz2R7c3grAt4LHZ2zbtJtZW1JBn2htZQ697EkAfuK5erAsg2aAJfcSmv8FTBU5sLcj3dF3mCK",
  "key18": "3WieAjaQsyBBTkJcbiSw8hhAtFdwTDSz5WY5LdfFE6j3jKHbbdXRMZiZF44QVgKnuC4JKpGo6rpUEP9Vhxy3e7L2",
  "key19": "2ntUxRcnW3Lso4fQonB6vse47hkHChfQfAs66WsogiudACmjRn6XhvhgyVPnjtGjjcAosjZa8LqyyN26J5dj6URo",
  "key20": "5EeRiiCWMYUB4YccuvxTuGpseEGCRhmg99q3JMySdWv7AD2qdrboGvBha4aNVUST4wyVHXaK3h8eFwzSAAQM6GWJ",
  "key21": "TutezobLgLrc8qGMWQsPHeTZ8Wd74hZ5CxGF5rNj8Tp1GHxoyjaqr6DBVP8hMpmpqtjQUR8GW8UqeVPQwVLVhho",
  "key22": "5C2jaCcFiua652qbCRsN7EyRbmbU6n4YRo4pFCEhLrnxU9oprLvnN4b7EYQyabvDp6GWvgVxFgpXZ6MRMiMHS9sL",
  "key23": "2rUoM1p6BRmrbzYC7CEiG1o4ydUahvwYzvuWU8Xt5d7yCzzJKt3PMDecMXxRDaAxcppo9u553mPg7YrquhgZkSgu",
  "key24": "aYKAMskgokw5MbJ7FndVq6vaApzGhmdvt2UU2AgDvDNiMjAKY45GZZSnvMKt8sm5wjcqHAvTvodzL9vk28cocBw",
  "key25": "2LiUDknaRNW2YtwoxMzdjV6dTLpehyeJFCtSYxZ247w2vZRSKpHUt7KYoiwanEskhVbYvFpoCiF9971Tg6bdgZUf",
  "key26": "4HN2yXdWw815AobnRFnmv6zu36whdfCdtMwoxAymBY2JhqLMSAowajTWEU6L8zGXDJx1pCCivWgHKiZ8XThvJA7W"
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
