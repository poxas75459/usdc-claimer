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
    "3f4BzcUQXCvL4b2UnpzD8zKYFt9biuTT5Ug2CiSdSMWA5T5uiYrKofoAAEd4GDhjp5bbRkdNuzJfuF16YwkLzHpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKFQB3xSCcfimeiLFz9widtJhXkxWHPCL5wdaEpkL7L4yFD9CDH3CfPL2vuCcJhTxRSNZrZ5Lj8rgagw2KFSrkA",
  "key1": "3Nom3MFsF8dq5Y2yn4EiienqnqyLDyCpyD3j8FEoN76ZuZ8d8LAmyqeLBWRnYYtn5RQdoGAqB5QWHhZByh4WedZ7",
  "key2": "rsqRK5SKTzZ2GskTXw3EZKaXako84hCzWS6ExW1gBFXFnVxEEeFVJbtaV77KzXDNQKKbrdLyBefh8wxTMc4rKqr",
  "key3": "4qB6wZAHLv1U9tBCdKVBgo7d1Yuiz3h49SMLckuPaVw5HaGsxRgXEX75TrGV3gVAHvJrrW4mqZsdcc725wRHABJq",
  "key4": "3QvFjxe85cz8qpbbcX1rDGLJ9GXkBA7g6VjmHr1QhXpUbWDGXwkDLt5qMDfzBYmE11k5LQxiyWe4RuEHyiy6P7Wd",
  "key5": "2oyGVrU1BdsDKW1yTojPgsbxNt1gNQXoJCCYGGAeKYs7vKMryN2dCq5Hman8tWWJpXHrrRdFJTA5zKFqrmYDPSeQ",
  "key6": "4Dfq2JjJgrKnn9GjRtK1kSASRW9QHNHosnUb5pH7wsooeDWy4h2WGG63zXDgifjEYQkn1gN1hjj6MvW2V6XnG1Hr",
  "key7": "FmEXkqbw3bF9sdEbkLQqWX7pDpNNFz1mGXSSWc9RKJVgfik4CqRwPB5BPBrEoMSJ3RRjLy5fSAFfPA8nSKLSXmy",
  "key8": "A8JTAjWXCuhWvYCQCKbnMihVfpEKs9VMxST42sPeQGk75YqHet2qfUpJJg9KcUDbXiWxN3q3eX37gp5S2Gkrw14",
  "key9": "2bDmfGTsWXX8HRE7w1J4xsyP44CZA8MrsyX2ok8udaXjiyGS1NznWHdVEt92SMBCVQ3RtaRLT75HB5PVZrFvTmvW",
  "key10": "3GhN8DDSp7TxptkB2EiDhrGPRWpgfkhnKQPvzsg16rqCZy13BEiGfRceztnQ3EjiFtrfQnPCBRqXzve6kHer3QeZ",
  "key11": "3FmBXshARi2TFb9DyKFdx2C72Wm2mg2D6oHna6PJ6oWdHxrgWB4UdNoE4WfEyzdAof8DFWXr9pRzYTtkPhkWYFTS",
  "key12": "3oNERLkJdd2eBQbzygycKXDHKGm5VNyC53WJxLywW8GnTdy7RdY7MQUbJG5pCqdxGLdNaP9mSMQX9sbMm9kTjSy7",
  "key13": "2XbZaeQaNFrecSS3pp8JmCy3AyTmNJjcC5nNMk7sw9zXEmCPH7i4dN7eCWuBXwPHYJGD6uKBhQWcpPr25dxgT841",
  "key14": "6pQELTPmN9TixhM1ZFZpaNTSMzrfk8ndx1uxXBZbiqPR7LkC2s57wPk4Ms9m54nT5aUmi64AYCBVTvwt5pRrpCj",
  "key15": "8fBjz1SfnhDtvEx7wG1tbn7d88kRNCTT4PBzFfMMwDJT9nbKqndFsuRY1MPNZaxDA2CP8w5G1djgBogMz7uZWMm",
  "key16": "3hyfJWoqmomaVbh5Q5ZRd1NQQjSG9DLkFkqPfDULoGGC85EgsqMdgfB9jtoD3ATr21JzUghQ9qRBvmLyxC2WkL4j",
  "key17": "38TjK6H4Td1sSQKuNb3tiFzkTVZFmuwHEyyVQyuYA4BgHX4jauADFEPAwtbXK5X3amRqy4YuaLda65wWNNpTmjYc",
  "key18": "n3KYRNctv6kwQHznupabSbr4zzwxrHaMdeNPkY8V2h3xqAPovXinRAv2Nta164XAm8uHqoquZrGMb2qZ5uBQdkC",
  "key19": "439sfDQscQrzirWdrPLQMRz91HMmh6eyGGEMkk7Yu1WJhFF1rGioms73q9eEZUJBcA8UBPkjJUspvEYV6F2hQqhD",
  "key20": "4KZjKgmJtemAPzdVXMDkPEhDQzvubTuggv9CL3RRwBPmW55G7bdfrE8qSJgP58yZpvuriX37fVszaxgh9YrwCfZA",
  "key21": "5bS6oTzbUb6i2CcT2HkwMMqn2VvUuAtFzfysvzN72F9vcZHERazcyGQLLucoC4pN66kcM8YGViFAShrt3W3drgSW",
  "key22": "4foyQvAv6V5cMA9wDjQZQx4vuweYMELSBCy4xsLuHU58qyGMZzDEZiNHJRytZ1sCP8KwudzMRA1FMxwrt1pr5FAV",
  "key23": "4LGizJJBAGV79rmLfL3bWwVjvWDvvsZ1b1nhJVxGHT68bQ5qJnfWKuA1yz4Aohn6daH64PofmJ9njGTr6uzAqZuo",
  "key24": "4syDLVBHLYjWfQLLYB82FDtRUJ9bxVjXHduqTQ6MQ4vKchCByotrF1CgMprwXxyQfv5hEiAtP4GkbtXtEiaALHZo",
  "key25": "4NX6SFzzNr28VjB3dicJR443UCghnuTbFwz2UuuGffETYHAs5VxyxbBTmJ1RZFpA2eKdfwbUGUMEBfSH81k9nLNG",
  "key26": "GYB1GXCuZuDKuoj56kTJCfZERzrhg6DJWbdL4cR8h6mYV69jsiUY7NHvZFk4LsDk9KXn7ZfEz2TMCPNpFh7Un29",
  "key27": "PnW7hzSrDwFzP9VutMyH7ZPEKgEA9o8Wori4QTHRc2ZunsoeKn5Y8FiUUxK14bHPFTJfayAPbvoKuM7HxNpqtcc",
  "key28": "5UMk8XhjZ5GURqiwDs1RRj2MFtJ9zspyWraJwjHogybaQ3Am8G7LQwCyttCSrWCCc2ytmt21W3w69eR4qnYu9k7E",
  "key29": "2pbButVPmgaw1uGhHHojuqVAXZNuxSgSiYceht1Sp99E6nQxfuVS8NLsEmDo17uyQAhQGTxVXWikFYMPWuFg9ypy",
  "key30": "3u5JizZGMkwKgY5A4DZDyX4YSBnX1Jz8TdDkogdxfYdc4eq1NcQ57UHci9W2BRfoGTMCatzQviCu1wxcPDxEc6Qq",
  "key31": "wJydBibG9UuQHEjwTLBGawGkeGB2LVZPzvWqghXeyKfzGmEzaCnAvkLCcMngZMv8fC8QCGq5Hiyy94BKGgiMjsk"
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
