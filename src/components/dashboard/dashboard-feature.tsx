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
    "3di9r8CUtBqhyebRQcKrGNtoXwE5ojMBZZrCcpQtthaLLqSSn1uGTEckYNLkPeQJUXENzcjFFbWMNegtb1jj1kdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4LbpPypTrtfHWJaYhTVJgDvqZNL43u6ZPwhDpzucUXsCtKeP4j9S8p7hdaevCGPgBABR54e3PNsqdT4EV6XEys",
  "key1": "5amFE1DcLXn1jMv6HV6nZZwtEdNR1o7YcUbq8VUvfoz4rfwPXtmNw9Qe63d5mSJWxYkZks1oDkoP3zkYLAtZBQqD",
  "key2": "2uPW2xb9AxJc9H4MC2LMuZMNE2r3vrh34EVox1Ga6bAH7ohRjAE7VGzhfWuCDjVY3o4TfKhQF3uvobA5tL4KZjBt",
  "key3": "3Sv8TXd4rNBXxFrCNevJQHjmcMaXJqZ3uyjWbqQAZqSrMWkVEhKReJ8c9UdoqgVYoqWwFKZzP6haWVHtmVGqRNpv",
  "key4": "5u2Q7EttReitWFJpaM1G3VpX3AeLPysX3ehJdbnToEcJHFPS9EYTm1dRRqG1f8ieXNqJHqmCcxTEv4QQc81jvj6P",
  "key5": "2PsaSfticNypohmh4RbGGd9fsm7Jw9xJdMJv2YXHYA1tvzoYQ8WiF6zJfV7nJasuq3N8n75WAkF6q1UbkN1YoyZs",
  "key6": "4so9HXy5spKG57DVAjmQbp3k6VdGT9xBg6eceZaUhGUdaquBVLFiedGwqs4m1oJFeTpA2uBViSrvEBC9PMicKEuf",
  "key7": "3JN1UG7etkrc5GjFpBoWjVYiGmXy4WrhYZZUs6HW1rnoMaB7tfB8asPu1vwnzAZK5Y4bsMGYKy8TwreKhopcCudu",
  "key8": "5h7KsiFcfHc41kPV693mC2wBxfB7ax2DYrnXgQA4bZsXgEr7xDJkQBiFdZqc3YUeU3a8sqgGHSaJU1sw6vYJRmSv",
  "key9": "23vTwuctKpKwbnFuYLCbAapC6ej7Lrye7FXpovSNDL8PWtdiyjvE4Mhp8on9aYNZHdaCAAGfEEFfktjUxqywpUck",
  "key10": "3iP3zKbdGohGK27fdP4c4huC2qJL8kfezWVBJ9mAgvSAZ9kRR5QMcsjBYg9uoJuAvGdrTFuWjYLUTkbNsEbvJEQW",
  "key11": "3dmCAVv7PaH7SuE3sAWVimwJzZsLgUNZpn7YMQSTWYrAFGNYsn5YBNvvZmNqLQAnr26rYdPoHY2yyU2kKwEWU2by",
  "key12": "3BP1RwQ3DWMUrD9LEC9dToeeSoygDABSRRgov5EH33ch9cZxr63iRtMirm9fsAHh37CaCn69i6JpWR4fwVRKcW8B",
  "key13": "4674Y7vLvwZY31f8nn2kXLZ8rJzScs3dmuQTVpMNzt2cGaGi5rQ56d7aZtVszLeJH6vsrAsekQGrC2Buzwbk3wAX",
  "key14": "2o2gfzv4PYVZA6DdSP8Ct9ASnnRNACjCwTaCHxLMMisG2mcyxX4yzTAzW1L5AdfMQrZXVeRJGWzYBabWhSBDc1Dr",
  "key15": "5pm4mPTJypasuuH5kSBFNATVFapwNHgXGHQZG2PSTJQAU4W7kSwRg7zxrWyjXQyz5GnfBoGNHCRzDGwb5wcTWjZL",
  "key16": "4Cr6tSw4KqjdgrDyMW4kuLDspjMMxBAApUWGq8DEjP2qVb2fbKgrDwdb8oT8fiSdEcCx6ocC86HWE5kqnXFQPUif",
  "key17": "5mownYP9Du6dLmx3nH682DWQbfByZpNJdJxWrWAuKh9XupYXbcfA8d1tar9D24mwBSZwSdZT41BTmCUEkPHNX6bu",
  "key18": "5JzeMA5eUsCg7KHEzkVd4ji79MP3LfiMeVrYrzoyt83eswrjUWbijVaCLtxxCazBhUnPx3xkams7uBDbPsN6ZVqh",
  "key19": "26Buuz1kgoNcgGiMnS5SqkEnxX7rXkEqF7SrT3v5Vfski7wwQoEWHak8ravaF9QCGmuHgfhSwHS3gfFpeT27Bifu",
  "key20": "pdxGgptkwb9mSdJGaKCDpjieQyCX85BVvGkKv2mipZ8ZNiYuAZXv28Xw2eA24WnecfowshhU4hZoSaq3ApBQ8HR",
  "key21": "2QnciodGZ3rnHrttsuJBeLfQWDjDwJiEH12WKD2oTqCksdHYnbvzyf257A9dthKusner1yu3Y42Y1DRy72vJEtL7",
  "key22": "4S6oZYfp99qtLrToHjMMyNr4Ru3uQZeqj6emsdHtXneKfUTrWRMMWjukU8YXAeHPugBba6JKASkuBGuKWTjVcQRW",
  "key23": "29WtJZyCN4iy42GqUknGoTruswoeUfBTbnjA2YVznjCJjhpeRWPyXgVCKWfnLLhg9kKKGrU139bBZ3Hew4gJReGq",
  "key24": "4mWcaHCLJKE1nWGF42eiP4fpq8DSBp9jKEN6Ged5PmQX43D7rRUiizJcbdYRLsPGMkvJWQLYksAm4ykLUkHVuESg",
  "key25": "5kTQYcaPfzSw4LZLdbSk1ydEJQvGzLLdrsULRXN1iFvUanVgeRX8uQ1GG75jzqu33qhtjpeYgvGVwFcUELKqyvmB",
  "key26": "X7ERGK4KVs3fDia4vngJ5rvE96QwPDWHsv9L5Y9PRLLZHm7gRCzWk2khEb9f9MmqD25ULr3KPTYo9G8cNNYW4NE",
  "key27": "5hCsZkNN5EBUq534fp1JT1q7Ur1ytM9AaKG5kXEgqfm6xd1r6SYLZTNhkKeqxDbNoF46qx9epvxA8aYeT4YHn8wK",
  "key28": "48egwe2xGVnorpWovM3cBzJxuyNHT2haMvF74jTJJQMvL5PkaNwwPcZiVYyajadNskoKJFRBUridACKnHqsaRK8y"
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
