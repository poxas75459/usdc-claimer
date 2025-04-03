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
    "5RNzc4Ucjo7TgEiYvE2DNMaXAw1meYJKCZmDqQortc3QFtx3xmCYAVJbADm2bg3NAq4zWSqJBiqUr3tT7HJWXbL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CiQMrxSVZdYzoFTjr8Gezg4J6865n9ktZ29VJUCwksGiXYfQHy9SKS4XJrdSwutGE2ng2xTmFyhnAqTUf7ZkZzP",
  "key1": "35pJqLdwRtzExrPxpnFkLheWuiHNpyF1hcS3bSdhaMZdy1SkgiDPFXGquoYPKitfvvdMpf2vSPPgEhMpZYM7Lei2",
  "key2": "61kAj5M5Et6igmbJQEenH1ziSVd1NXKwJC5godFesR5fuZiAHATaLogTcXj73UuspgCB4xqSKjwnKk55JK95sejR",
  "key3": "3Yt7EvF9UT2ox3mZyYE5WcAPgnFjz2q3nKaakLGsW9xcDptpAbRM3ZzyckinZEcriUndAXugB8Mywdya2DSjTZGy",
  "key4": "5FZtKPQ6VCKoMfTVLtZigk3tJVNhF98G6w41brdEeyS3JTDhuqiYLtmt5ihHcwDVbQ3uDxQW5VwKw86iUR3wp5Gw",
  "key5": "3HXyouM7UuuhCrcGWgonoFzga5NBSJaUEmNX1o53EFH125UybHWtZcNMugA284wzDfHxPP3GbRHNBTvqPv9FTifJ",
  "key6": "5yeisiRu55Rptt3cqP2Qd6RoF5exBMUKmUB7VPzer2tm7ejU6pSrk2Y8PWETCKPhyBVSwndM2TaUgonFbXuAFpoX",
  "key7": "5G1EyDemf6sziFo7nWBgskjdvNucDWYiNLLqfYkNdridyo3hXKzJxzs4ongynW8wqjrQeQ4hM6FJqT8dFkyPRLeD",
  "key8": "2G7JZhawK3idY6BmABjSFs8dW1rwXwJ9FxwKYhynAEwRZo1m59rf4GTLrc2PHH7hP1eMRS17eXyZ2cYdgAASk9mr",
  "key9": "4Z7e4dkp3Ynxruo4pfTEvz8GYcBAH7KTjmHu2bhm8eusfH485xLTFEvqv39g56m9hosoqF5Fr8mfhu8f9eTMEidf",
  "key10": "5VCnY92W2Jz2aWLjSAyUFcFaq7LhTzPKhG2kQkZoAid2kRPrAQipRpCYfG87MxgQRwa1kzMLG48SJmQPFHJoiUcW",
  "key11": "3MRBeojaCCbChj9sr6ScX7orpPyW2672mmZdhZc3UwuXz9j8UMtpfvNeict15mW37NxhZH3vwPJWuXoNEubCDNNj",
  "key12": "A5XUbDmqWqJphpfnW7rS8mQwjXAfaCmeiTWaFoK9cG4vyeXmNide9yBrWa3y3NnV8YBaPyKE66niLCnjAH1nk27",
  "key13": "5YjUxEZb1MYahYZPVzQxQf9Uyk97h3VxL2Jh7FwkWScSKjPn6GSiHYrGkCSeRpmMJ8Po7PqwKXrdmeF22CHtXpve",
  "key14": "zd43saTeNAQHeZbaNbmiRMs6uyfX7bxQi9nGfnt2CS5eda9gEdKHLjyXQ4JgnBNX5yXEmnLzUbcUHYGb51JYzGk",
  "key15": "5Uz8EQmVAeMFyZuAy5Rx8FJ6EzXf84N4GPXeZvGYCYrgrBjvt4TN9gJVcHJWdzhuRnuF7zCkjoKHEaqPaqkCDa22",
  "key16": "L1z8c52t9KnJhiuBti44MafvS97HPZRawNF5h9nhYoN7haJBPYiaUrrzqrvCL3xQSRti7sbCkdhD2aR7XKGdMBr",
  "key17": "5h7x45cy21nMo79F8NECEHoXF2kEzwJ1hd95fENCGMtFw7WH9Uf74AicRmJBPbsVY9qzJSiim4X1aXr2YERgH8h5",
  "key18": "4vEs39MBjkTbJafNCY8JbVS9gTVe42pLdA8giRZqqduPZhQqBDq9nHt3WTs1BU53tohGVG7BKPvXaE1y86wqDY1V",
  "key19": "4rwZXRQUSa57V8Z1FCZmyNwx8vftzw8V3GhypYp1VNKKut7bctEXqyfoqFZwtMek67v52HW1iyBNdQdT9DzVE3cn",
  "key20": "X2AVooHHYh8LcZBQbfbkNV2WTsLX5vDYoJd9NTkc2Q1N1pP1HEaoTdgYAQSGDjhfJ9WQnnN13o7zViXzMeQzcsB",
  "key21": "537TXs8zqWuoGJvtqqkbc7FAbSmPZqAEppmVWNiKhB5FrWU5FR7SRKjtPaGtnAVT6W6s896uC4EoTZs69vLfrdPn",
  "key22": "3q7x4e6QdG1gq7HB6cqCCUpNbbeK9ikEeQyv31zTWt7oiVuf2bHXx98huWWwokrTSf694HEr8bGJBcMQX13GbNYZ",
  "key23": "2GiGFNBWLg5RNns4d82A8CFvNYkwjaS2Qr9Mgb1xC6RkZADnZogomf8NKTWoe7EZKnPnycrG71fp1LU3Bowge4oX",
  "key24": "371UJFXuJhqSmvzi6gAaJvdeUs1uhmexrArZguw9aHGGDmoUvLX4qNkkntCG1Z1W8FqkgAsxtBkLXQhx276TDcC1"
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
