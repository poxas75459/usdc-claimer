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
    "CiS3hXo6y9QJ2j6YiTTXcZybkzQKhwZaujCi6XHCvfdJyRMtYTcs1j8gd1dztxMudfmGQmKTcDZkaBRPyKGQrxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGZmcEHdShQ1Bj3pC8nWM7rBpGhNsosvBuP39sBJ2EhNqghFnXiSnhWCcnDxrhtRHhToGmWL7pvU5V8zkRYKq5h",
  "key1": "3KsjjVNS3iGMBt2AfGXd2vQDH6CB8K36fhL2ua6ihQpmJTTRZY5VQdKyVavAEsEJgYNppsEjH11YWe6hiBZz2pxF",
  "key2": "2wcBwtv68SSfDB73kbXqEb8grrHbngUvhPEPTVKADvNLZo6ZDqy48L2BLf74LPey5XqhgEkdZQUF6QqBdWdGAMjD",
  "key3": "2XFDiWZUs69GcRaNMSVcdi7rvmXsxmgfvKpTJE9BWwD9wWHmLUiGE91DPEcB5WjXBEdehZUn2qFWiLcZunZLKWVq",
  "key4": "55w1zhMHGEj3nrrUh74SvYm3EuqGWZPPpRXbrYKHqf8AvCz9mGYJTw2B6fQwkvuv6xRHJkXh1eLPEhmUBFuov39d",
  "key5": "o4B4uduWWsURXQFJC8cpzqkh7T4apr6n6rwbWiUsGurgAS8X5ejvPMn9dLDriLmpTRYp3iPWUeSkTiF6MwNusex",
  "key6": "5W1ksxVd7MKAMRn5MYn8UuaCJHi7YNGbb8xe98Fkqy3dvMvsyeN9jneatA7fcmh4BhGnHYJbzJDsZwLtXi6i5Nqg",
  "key7": "23gAUMCmLsFvnVZnuXwmruSCkp5moon88WkwaRVT12zqmAUupKe48AerCNUeV66QhoJeRMxxqo5pZy6FrWmq83fg",
  "key8": "2Y33JGUCpWjmFYsjEuGtP6162k7rsNpexWgqCuuv1iBU7kJTcWRjZgtqSut9y7iEWPcX8u2AEtdvGoBFSUdVcCpD",
  "key9": "Ee7pbaTz3dnDMavXNVvGR4YJoev1Dbu3RNorJYPTjYE1HU6CZPrLvZHjWzqGs1UoPA2P4ZbYnxVuhRcmVm352iu",
  "key10": "2KsGC3JjfMz2FwgJKeGghhQVaaj9ZvhjKfxEU21N9arAiPeUc8urizFdFvT9c1FumPRyFqrbx8BTgtoeFRqNtjdu",
  "key11": "3RcY5SrjJbnZbse8w9u63wTHcJXMmR1EE9n5t6ognGmtSBfzTDMa2Fkg1oTPZJejPwXpGhepY5DGcSo6cxwNwwc8",
  "key12": "46N6P9RsJbbX8rU6WtRWzmz4YPhbStCMKZxMdXQnLsFEUwCKkBxug5DM6Z7LjjL4JStuxPh5SDLepDviBpy3XDfF",
  "key13": "22AZRf69W4eUM8YjaoGY1XAS84fGx8vhUxPapkGcQ2pbFWuqoWHfzCrDJtH9ud6z7svEFbGjn5cWgCrd6dGocoC8",
  "key14": "5ip8yy2Tm88DJAUoaPkqXfyfcn8DHgwLKEYCvyXUWQC2FN51EUhck42ZAgNV1AqZqcZ7BMDEJ2z6x4V9HYUfC1Ni",
  "key15": "2Sf8X4it8smMrosj5QFi2RA3LckckN3CwwBHMcWkV3uCPcSPwquRPVvbj2Bv8RQzXRBfcL1qqGBBgUmXxt1wiiYH",
  "key16": "2YbP81nPnUEobH9ZNoJmKMizyXYJFrdNqLUY9CrHCaFRLEqbZpMmmGJLzGwVXZu1x1L9UoobUcwS5rJ7CrajmRpL",
  "key17": "4ZnSbm24m5uF8NSd2iXeHaAzvWqLZayjpD8RhuRqdE6kag3KuqTWpbCXixCrZNo17uGUU3bzoBYQUmvQHad2gvRh",
  "key18": "3KJYHo5gJsjeNP4qB1iCTn3jYT1xQPsPCCD9kyTwsH9EsnbGZyJ6224j2nN4rcGuxJMy3eLB3vmitncM88QBryrm",
  "key19": "3FHanyxKMXWajGPBxF76PwMwza3NDWjnuqJG86dg9r5V743oZLHPiSz5tzcZrzexcAxEQDmN3SUPQy68X1PCpRQC",
  "key20": "4ynsjig6QfKBbi2BLSLHBPTffYxNubVHp4LQq5TudS8dbaWEYmYxwKp7nYQDDCY3TexY2heemcn6BrcfTembiSnE",
  "key21": "2KWuCdqcWAQhuDJLzQCax3aWdJF7wMh7RNqLDKW3WBNKtMS4aRJV5VsPKJaExw919TBSFqygV658v6RikenyAhdB",
  "key22": "3KW7Uu5tckoUR8YHafVEbYipGmLNJnB9VUqKinziLcAFzViN12erRDrASxFk9ZPPZbfshp1z2jvVQaticNXBj1xi",
  "key23": "2TrAcpz9xwmJ3zivfxqaXXRVWAdjB39HViKDvaPmhq7j9dJ6PysrWaiSSmCGNwQe864HtFfnA8cPKTk8SQdfyUW8",
  "key24": "4wFmk9SwJ4TJYYLZKeUWeHbcPiAacLHATvciyXYtWTNea8Cp3YAyLXhgNfMD24bb9A6n2AGSCagUDt6DGMGnikPH",
  "key25": "3HZCFVNJ8BJGZyPibRiwkMobj5RBQvXQAbcAxMGwSEX5RZhtpt3jVnmrhi5NLkfuuDEq936LCbPH6uufCKGtBPpz",
  "key26": "41sGUJBiyTPw73jjeNE1QYmNjhQSJMnQA7bbErVB3T15YPpyoVGU6kNhrpQpBGkzuuwXQjQSiapW5gBTHe6Ra4uC",
  "key27": "5N8MzAPnMsobx4dBj2g6vRrRTLTEraVUdoeEvcoY9DP9HArQA5RTK6ffoCs8v47q2gF7GvxvogztzDf12ARkvf1F",
  "key28": "zjYxJw26rmZ8M8kPeajGRTgAGhNFXhxuhG8HFPSGG6DBHw9yWaocxhjZywPLTqYSyBxFc3RsyQsDWqjDG31d1i4",
  "key29": "5zvSTG5NreR3KZrdnaajPBUp9bVH48W1W3YYPrBwuKCTEbjjoY4NWPK4EyG78GUQeGbNYG1AGD1LBXzKd4cnxqx3",
  "key30": "3nYWoAJSFLam8LMVBrzAekCfpp8uWq15sRQTVZf77VRDTxKsLKH5mi6utQvxrXLeYSYqSXuWEfbL3yTLZN7ZzgE",
  "key31": "4MU9DU9zRHqkFjNfuSgUnzVSENwqQG7phEWBxMVWHVaud92a2SQ1hk3SGCdar1Yh1RjowZvpdhvTZqW533xSNexJ",
  "key32": "5pXRTE7Z3yNtqVCqQmzQ9xy3QtKg8czd26bE6Wzn5qBucg7tNnaJ2usLuATVHcXaAX2cKYvZ4aHmUmLSE9KdUbdv",
  "key33": "2qbVj8oGU5nS8KaiMXm9FZ5zDAHXz3B7bjQHL83UAV3Wc4UvbMyVXehcTNHT3CiSSduHcMwU9gAF1M73yoQy36HW"
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
