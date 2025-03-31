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
    "ehFijdtzsDdnZzg5c76tv79SVv2GvaGKSbGYVgtkBBLbbGxDDtBfpNCumauHCqL2Mrvr6QNvvdCoQqXMLaE22sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWpMcvcFGJUVR1DUpEF3n7omsQVyDwzLxSmog6ubrfDz4AXtx5Mnb6JeQ66DZE5mi5sFu9uvy962gN8wgfAPENL",
  "key1": "5We6KbZHaPgWZKw1B7SMCTEoZqpsTSat1nckSgd6CMT3RNPbZPtkEywV5ks9ixzMUA1e2LzTiKdvy3LQhQb9fFbd",
  "key2": "5ymczj76RczMPK227MggB6tPETedzXcgx4eTmcu6kbCtg5Y5w8yK6b6ipEzHP2GjvV2FbtjMTahLyvLNhTHV9Vps",
  "key3": "42twWCtYkVCSTAk7e1gjneK58X2hfA1YZhEUYqTxEZqWuRbz3bQBuTErNKA5PA6KvcQiKZh2dUe68UQqQ9gwvv1N",
  "key4": "5DR1jacKewxHUB694TnHXu6ZQ6ZHgg4pQcwF9JVaqYrNHktXoMW9zD2ZSFajuEP1hYY5nto8yeTQ7WU5hLmeRMeS",
  "key5": "38gD6wQU4JQZ4mh8nLpMufHY7SQvKirc7G3h5WRYQLhDxaV7UgMmFimEVJMs2eMiRov7592c1wwWwV4QQETpHSp2",
  "key6": "5983sxWdijXaLDDwrcQrENFXBExwmQv8Jb2JkHKkeQiqYYg5U4KGSxvKP9dTLjCjLhdcsodjoA8j6FaoxQtVEpAS",
  "key7": "28kYjSPCnQGLcgc2sWFxR12H7FncXH5JJCTewyerdmMR4pNdX2M6HYyY8GhRE6LGrkEYtnEwPEMSehXEzuM71X2E",
  "key8": "37Ei7ApAiwjxbyMqHwnJcq1z2kzP9gNYSjETDvKuK7ZbwEjiAWxZ1x9fQoMWgwnKctBRj6WdrM7gkeqPkLpuan2g",
  "key9": "5m6mvGkcDyxBCNpSvyUPKRNGLHqZmt5AiPgnMijLxYtHLESgJ3yNmxmDuiEysnGsFeeB3Vy4QXyvApHzz9iY97NX",
  "key10": "4Ub7PcAS21L9oeui18V9ei87r1gh5UEJfCvrF13tUR8a1WDB5ifK5FvSAMEVnV3Z73DQGntNdtvo9v7k2rLrdoxo",
  "key11": "mnndnDvUzSscXk1bt3gDWFAc27oVH28rtEjk46KWGP7QgccvhGRUSddV5aA3vD5YeFDoCkd3oPEc75wPmxvH3xM",
  "key12": "3LEsBtaPzNPQr7T2u3C6NZnfyjojna4iVg47WJK1s9ChjPhHAXy7PKbTFcS7eLoKLhxS3isAWhfh9LHnnNAJPnWq",
  "key13": "3EA4fnfmuky8q4bnY8bSrAuUvjmPycKGScUiTM2WhXa8bD5AC9YsxVrKQfeEbNU1wNmi22qiStdJPLgitvnYRxfx",
  "key14": "5zaEbatRK7XkjcpRk48k4Mm2cUtVVDNvFePVsLdcHHGA87h3hadRdVGexgp2a2iDNYAzs3uKnkzinHUyXc275Vp2",
  "key15": "2zAsru7VtqNhSV1sBmxn1ZhqQQxHbEVWC2EtDpJTv3aEPVy5fY48GHMz7ud6S2L1RJAdaLPEic6R1vUQcVsXbXY4",
  "key16": "7EWoKL2RS1ihCrmYCNdT5xtKXay9cFNc2SFxJ9ZfuYPdeR6dsDE3KMtWxbi3BoFCMKnHhgq2FbErLDMSitVDGch",
  "key17": "4F7BCwQLYJyf1mZ69FaTAEDnvswNKNWJXh6rHBKmq4Efbo7L267V3xqtfZBCftTxFABNFJcwfpi2NYhzebdBr9sa",
  "key18": "4anCRPGVULHUWs7mPrGTpv9KZ5DU8stBsUr69qCzfEku8uymHaJ4z2aor8rSrc9RGk1zKsU1DHFankFKB5PprkKg",
  "key19": "6gTb7YbfmwHKThmKmkzornKoAGjLzECiPz7RfraRaiYTsXmFXqgELTtLpo3AtKawLyxuA6vkbuQizZkaQdU1NVM",
  "key20": "5V4ezBfX86ZsycpgYrkb31XmfFGxSWHPTgrnSZhp6rZgN6gQz9yMAjyRofBNh9Us22LUwQejKJjpLm6EGyqCeKAC",
  "key21": "2mg8PwQYKMK74WkbTuEeGxXVGLAWtyDVnwSjdyNTiXwUbjYYdwcHndEpEi4kzEJRwZyD2V75KyKhJ4tmgJpBMeJ9",
  "key22": "4j1cc5mm72iF2tB3vHn8tJaLXWiDsns2T19exaDLxHD4vyk3tAeR98id1qe8sab2c1CRXmF4BHrHSwBjFnFihmX4",
  "key23": "dY1dsAm3hnqBDyHCxoNQZGgPvWbpe5q9Xj1tDBCaF1PHXJ9gDikBr5DUSHHiKjVKVFfkV4TaQHyPJQBxVuyfxKb",
  "key24": "3W2uSPVgQeQfebt9PjUKZ2yGUPBK7RTHa6pYGMEErj4NbuNyPDWYyVrmAjwHm4FVK7VmczwVnFthxvJG9SFTWzZg",
  "key25": "4QKrq5XfxSeifevQKmWtRTUpo8WomjUP3g5PL8PPM7CYPc1kx3E5zcSgL7tafUfDpnkf8tt6FRCHjQCNk8nc9hvg",
  "key26": "5WRqvGzRqmQW8gxLk8jQprThHeSqt5QzZhMiSYZXZ9Hrj4qCWeZN4pfu8Da6iG4WK61sBKfawdRhE4aawcRu6Wsy",
  "key27": "5MfurzG46vmCwXkuSSy2rK8RYJbyeT9qL5TwnHuFbM4Uy8NdjcoW3vQuY2M3NYfEtoVT4Q26oyKQiTgUYi75mkYG"
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
