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
    "212Xp8LmWDNBJxXyaz1TNn6jpa8veHV9k5GnDcJTCBiU2PMJnBwKcssEyTrwLgU747QfUhFxDeivYD8HJ4bmms2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwrFx9NEbtCcaCLmET936n8wx5cwMUQTx4mLdaRz38pjuz53ECDW5BhBk9BU8x3ssiDXkUs8MQutVCNxQmbA77W",
  "key1": "B2kzHFwiPXJhZyRgrSdHEmYgEDqdajvunQ8WQNYXiND8unSbBNG5Ytsp9e8vJQvyRKA7RneHkeDcHKWUrdfwwyb",
  "key2": "Tgx1r3u3jC6bcH4SimT4TaiSdCFvjCN5kHwc5aqH7pkM6wkPp9kReM1WkaH7X4bx5CHViRmG3kHYe5b1LiLVC8T",
  "key3": "3CgAFqFvJ9cFdzYGiVD5toA6cwKVURRhhRft5zbCN7NZcbdcGKFJZ9mkstY8vbfxZiMD85iDxViZCiKEZ7UWWKEs",
  "key4": "44MY5nuiqNey4mhAiv4SAWvUhioXVVTTpAREk7Vn126N1awxeXjo54Fd6X3ZXMJ27ZhnYya3MnMQqsXmugAA8Uxs",
  "key5": "24fkT9R5Lzo7CDntNRnaCapcDbpVZ5Ejv3wgKdxo1DB7QHyyuZTRboh3idG8etE4zedPcZeZbRy1ZvNV4aetR65b",
  "key6": "2H1nDvWbznNuLbD6p4RmA8dqFLAx5PdDZTDtgdYHPkuVF416NteWvA6PyzEHegqiAkQeZByz86G5eLuhHQdLpTxP",
  "key7": "46fQKsUvLWdZ3hnhaPJXiYNWdJomNTtz3LnNYLgCxKnMik3zaLnutSay88jCRknMqmj5LrUrBV6UwpZoE14nNyoc",
  "key8": "5htx3cfQHKzWNLbTJfw4Bki39pCKYgqegxjcxj2JsuqQz4UZetTovi2anmbfePsVhtpi3qFCKcQveNpLFERXZEJn",
  "key9": "5yXBhzQpP9FtkWk6cQeTsY1R6V7gWV7haiHGBbUXkkDGwLMXyWCpuPEfuGHD2j9AmMsV37rEvJnsnxyx7xyS4MpT",
  "key10": "4HSPbW1TzH1yHz34ZxkkkMMfcAv6PnZU4PuYUpQAFtrokyLCeFGp77xiD4wddmstKY41gxHJHW3XEF79UA5PAxwS",
  "key11": "5ajUtMF7oVmV8TWc2mbRVboppanSGvcUd2nRjXv2gsaPpUs79YNpMf76anjH4LDwDFyphUyJUCbSSz2bcsJNghoM",
  "key12": "5WGdGqTgv2k4yR5UavqvkpCjm9jwMU2afnbtZGXJsFFav6StjTHYiLgWqCm5Tk12XupCU6Q3xoPiKnihvDpnefsc",
  "key13": "5coRN4NwVSWfeaZzHHduXv4m9e17SNZ5ubK1kCDUYdrMSAMp8gfwwkdLD98fts7cB9niYBtCYUF3mYFy61aPZcPq",
  "key14": "3TychA5XBFWmhTJa85Lmt57xZkJX6yYct78U1hk9tY56cPDHkKSYDtG5Ny8ZZDApivosdvQmVPKvaG2M21nxG5Lo",
  "key15": "3dLPfoLzKfoGnbhoCTMeDdCcc5YdrWjHNcGQMrmpP6y6sYRMJzZa8ef191S1HtMzbtLJP375ivUq7DyT9Zqtc4ox",
  "key16": "49uuuFkmxMHmQCiL9Cn4nfU8796tHxqBc3UsEwxSZiWZtCh6NBQexX55MKXkaPzikrwtygcaEea8WyDv65aowB1R",
  "key17": "2dnqkYZBzoqggCCMQoNUBLsz8DNaDdVwuNJHko66GEtbxWfzn5uYTNtTpCy7csPJW2HyoMrSR6GkybYjK7mbfa7e",
  "key18": "AannWib5QkhH2X9nB6gmXo4P6utnWRksBY7imfzDNaZA41bPzKGwSMmVhsqQnsAUxns94BVaXaKq9ZmvsKTYYJ5",
  "key19": "2kYCtLh4EafVNeQSAxeJStwZ5x76PbWsYdhR72HUvSofxFnaADA7fLhn1piFQwKPpoPxSvPYKUkdfGGhQaH6QEn3",
  "key20": "5nMJprQicmwQgrB9sUtV4oWqmvA4fKHoKfcJB2CZzA7vtuTUTrE9zYMssSd3u4oYZK24KKXB3pjaBdb8aLhEoMyr",
  "key21": "3Jc5PrY3ynEhxgTzBtzM22cC1BTCRYY8iZycrPWPUEx8AvrH1EKHts14xG3TG6H4KUFxvdVZaVvRZvXiWn4BevvX",
  "key22": "2koH6bBAa4DucHoPVS7gmWGryNvFVgCvxeTSU8DaQnUYf84TjtTtheDsThhYV15cnYTZkBbCJBtGLav7QMumEnFk",
  "key23": "3UNUdKNZ6YsE8TESM2vWQYKUhug8ZBcAPnrZTzzXvC5rVMHUJUG2RHoWbhfb6B3cyaneicmhWZyv6gufJALMtU42",
  "key24": "3Esn2EjKdXaAgUiHRcZmpzT6q3VoAtemFxDdWnLEutmsWLhdAqNMenuuDcFNz29AwfWmSTgw5kmFcGQArqK8Ncme",
  "key25": "3u5bDWK5M5GEZ3c6mFUVbAAiASJ7YChAw9pTVU6hDgNswntU7ekKaLKoidUu3x5pH816QRy4HvkqFq8769Va4pXe"
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
