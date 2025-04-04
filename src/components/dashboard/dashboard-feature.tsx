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
    "4FB6pTGFAp9VJ13BPrt5REnogAGAXCfxDbiGtfCVdxARdmVPw9b1Q397c9PDe4HXrFmDt4CaehvQH6prKoV6ztvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRHEuhLApvyAFWD1zHx21NZZD7K4ZvkM7FbDazAKLki5EgC8r36GcrZpeZj5nLoYa4iELyWgq4yeQfrbX3YxyXF",
  "key1": "678bxMaeTQzQPAsGiptzG2zaysiCR8xgX9C9UdrCB7N2h3mvQJvRif5NQNkb8VJuGd7u2cLt5uYGggXDn1ZS4xj",
  "key2": "3VuTw4wk5Mw18FVGrRppaibpLHHKgYkk3gQKmJ1MJTi2Jz4GWcBop2ADMs1mdTJARRXUCeEWmMWCDsd1fgxq7Aok",
  "key3": "66vAsxetHRDfqndfgViguCki97SUNGKaqhQZbWYveZhWMAY9jViDb4btdK9HAjaAF2JHChrVDQaYvMGsUBHJKE8B",
  "key4": "3rFZiBhcojvXGDueuF1BnMMNSSwfYh8SEGDjgWjDGv17cicUvfQPXfryvw62ZmtsomFNrDJqLbD9B8vQnLizhGnQ",
  "key5": "QyR4BmLB6a612362GrAFfY9qs29M8V9y8MnSuAsWKUMudckxzbHDq7TsgQWMFL8dVkUhgpUKCMQPBtk1N6F7WLW",
  "key6": "3EkzwoZGQ1sqco8iyUEmHtxbGzBCa5AtrEDGV7mkupv6EXw43mLxQauCyTStZPiwv4MJwAdTJYGSxCdBBxkzvp8F",
  "key7": "4oDLkW5GQLrAJaFoq7hAbAurV9uEVMriib2pWbaahjapq9uZe2mUvPe5CCNTuiEwjHAaLUCwqLDs7vkeqTHkX9MS",
  "key8": "34ud4QuZNdomf9AEGcuPqXKPKDQa9PkR4WZW94Pxzro237hcHw3cfsWXcMLz4gNEzeLQxQnhaKn5VVSGaVcPcmv4",
  "key9": "3UmibG1346curf9oGzEbWHmhDoPTEAR6UJsMgMqZFYRKPyBGdZrqr94tFLXkZk5XhrxQMrNpaW9TbgtDebxXptsS",
  "key10": "47jGU5qYQLQmZAoawvEo4BiNkHgJkh72TdwuQzvw6e7T87vut6SCy3qbux9zg3WAKgMC2uVrX8LtoinNpELo9NNH",
  "key11": "2CfRQpH8c1gNFNNucTgkmZcPDbBCr6jNDU7c3jRu5yQKUKa5RZX4CrDZeagLH5bphutW2Rz9Vd2uj5sU7J7Mtp1Q",
  "key12": "4aSXFBuYxdkq8kJz47f7GwJm7CD2PQ3b4xwdKbwsut7nGhvfhhixnrV2CRu14bqqKB7hd5s4LLdefAV25JmXyYTM",
  "key13": "51FwdH5TSCHeAn4y93Cn31fhfP4g8dFfcQxK1k1FCKDeSm8wXFynWWMiEowP3QFcdCZNfFeXoYP6gqefPmcEei1i",
  "key14": "2iS6fBHHmiD9xuL3UJposXuemUwWaBekiitnkszqFGxFptJTronxtH3sm1ci6EiCvPv9Nr84BAFQLdZgBBS7Dah5",
  "key15": "EwrvbHvn9opCjmfgLiuhVmPBcsAeV18ig8a8NUZ1SXWdeCn1ZSzkgu9VxYa8k7b5V4yiXjzNwqgjbAu5dAoCDMQ",
  "key16": "5eMP38ixgTT1n3jRmvfAaAdAm736KFCinErPAPrcoTpF4x2XQJh5CvqqhJcWebHvYcHzkQWnXGyWGhqMasekEBfC",
  "key17": "3mUeLGre1W4XWvZifPTjyc71brz1FCUzauxRFaHQAph8Cknb4Di2reTjEckC7wvQiBC9xEvD4tDenTRepu9N3no8",
  "key18": "53XcSiRAdmCqycN7A9MpQsrFGSrKVCNthbQayx1haGNxkMATgYBDzpWjAxMstyZ5WjHbA1zjZxfxnqfuVhBrxvMs",
  "key19": "Pwd2yXADWBHJV9xxDM6vN1L9t3SnrGC17Jg9dpJyAyicwhmdPPoJtwPEfxWDtn6RQSg5L2n6N1vbpXEoDgR3wvu",
  "key20": "5Z2ixioXfFjReU9ZQ5FGqZUDU7DHSqxep1W3BkG8K27NhmEY3hLYmfu4nGqrwh3g7jofu2fucXVwVQLESooW4eqV",
  "key21": "K2BfMKDnjX1r2gUVBcFRijokqUqmTuzJTrmPBr1aBwTpeh7226hCMkrAEwgkGfLeVfjm9sFhTdcXJ6HN8efXWDQ",
  "key22": "offkcXy73aVRN4QSPHGTfXNAD16m8twRpknarXBhrjtsrECgohKdgpxCzqoLfPxaX3wbMdPB1dkzviZp5ouT9Rp",
  "key23": "2wWu3hMcFTbuiTGienEKuuHCiee6ET9NeV6Em3KD7dhE35CsMTAPUPNCA7i6Z3y3aguBQgiN6ix3waZjoXxTWoVp",
  "key24": "2okmrN3BEYBhWpLySsrWfoWPrLTc9s9wNMsWpYSnrV5xm6wRDF9r3KWzknxvaGBfJry39dWVqg1krFFmo22KsnFS",
  "key25": "2fGx6caSuZF2HgRtcUVY3r3MdqJnHp6majusPfcp9XhP5NSwMqnjdXbx9LVGMP12wVveknWF7qgRzv5NWHMbRtZJ",
  "key26": "4GwTWZCnt88Zdqpomd3SKqpB47XDeUYa1W53aQh8V1NeXvM23MYDyHskxzoyr7cRqczVu2GqaoNQYPY4gEiSJkvG",
  "key27": "5syYbBFFJzB9X1cKw8PgJWQPnuE56skWUfN2cT3ZJ2g7MNjeYig9NDSPTuPKxFU27j2583ftkmsV3xFeLcJZJ1xm"
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
