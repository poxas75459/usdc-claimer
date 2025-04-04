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
    "bhXrtEZ8avFv9fZvtn1AjnxTMxqZmgzoyj2J2UbjXWNhZbmFyk84venb6xXVg81Xnm93kFUsziWJQuvS2LErPn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BX62uyV5tyeEWqZJUqUM6xSs2GaQDgXBrxMVLtEBME469Rk5jm5c5udyWprbmor9wgts5uziy48TAgs6zaTiTT",
  "key1": "7vJND4UDyNz7DZH7HyuFYohrwPNZ9qwzmnv5NYjE4Md3E4jscuif7CqhpHfipJ4RqcEXvzYzc4AVmZpfzkhhAqF",
  "key2": "DCUJhKDHrWM2xi4HvDg6Ttb3xzjzyko9jTxsX79bEcTPXmdbQd7CxBeMH8ichiR9tuRSEyBWmDwnsjnKkY3fzJC",
  "key3": "5EQNVWXzmDA2oDx3syu95gmmfcazsmyb5wUPBKjQ7EFfrGmM1sVBb6DF4NohLTHoaqkuZWv6ReBwdsX7UU8sbwaF",
  "key4": "5GAkXKuqyXDxym9ABtAzQkPkkGMC9QCvyoQMWYDMNAZq8Bv6ro9zLa9uTXwqZH5QF8jMr7EqyxwwGjSmQf1mnoc5",
  "key5": "5LbVsN4FFJzu5otToZ9CQX1rHebJYzZCGiwtt25PcDHYJk6FLiMf4r5q9coSPHModtMPpShStvAarjkxtUJNLWdX",
  "key6": "2LgMmq8W2pCA9XacV26nzyKj9jgAYVSiKcY3H553P2vxi7ziUF4SAzrfcsJL7vMadG3V3hidtUswPXZYb8LV6CA1",
  "key7": "4UdUvUHZEBKwiVA7zbeNx2DzqHAhihQfUYxT56x8VP4enqFNmgL43CV9wAm2g2S7qYFHkNT3osdkCtnK7fg16Vep",
  "key8": "56hZ1YnstzRbGfoE5nnAah8FBtccPEE5nJpYsB9hD4zdY2sRF7ievs8rgEimpdw1hGzrYx5riedEugSnWBCGd9Nv",
  "key9": "Lu9aaxyVSDJN3Fjmy6fGUy6QawrKzkAMmw9daX2UhtqvUaHrpMi6K57Pe8moPTxMK3amVV9eGRJjrnhtAJg6rpc",
  "key10": "2zTZm6gthr5mZVSAhusyqW6js8F8UydqTQprMzuJGa5aRuEski1j7qjUPKKmqbLDaaU1heUuWTybuJdTixEb4Dee",
  "key11": "4TYkCVdbXVbCpqRatSHTUjKQyz5VpYMTkPzk2kARCyfuXmsGUxkKJsLx4TpzASSFK7qKpPKoijTmGB3RkNU9N9ca",
  "key12": "78u1qzVhHAwug8Z2pm4fvPi6uCYcYM9Pe2YruHbvyTCH1vqpbRzhG9Ug4dwQaKSZ9ZdJu3BoZu2NqEguCQbgjCz",
  "key13": "28mhdcduFTG9ssCR7vEBaHfQF6FZJYSPYfSEjn1JYSEW41Byh5W76hqQEQuouSXhtBVxPd1hJkG19HPNA8BWYLNP",
  "key14": "5t7FjaZRhU73N1iWbdgPX6qd5z8xX3h7DKbJ3oETFgEdJRTx1ZcUhm9dtmfFzUaK888wWZHWZXpSCmZy4MbzhyTR",
  "key15": "28jthrEX69HddnimfJnQSAxPB3VMvNsgUXQDLqBUVCiE2xc3WsKQaKySRGZY3vBeR9WsZBjp3SUDxpaEuHANZU55",
  "key16": "2xcjUkKbgNjAeS44wUHQDDrPCrenAecx9cUuQ5sxux2Gwm7rjxik3cVCxL8V6aENnueU1LzuRe4Q7ZX4sBdaRahR",
  "key17": "5qFBysQgiggTSKYkWhxSPJwDifWtNJEbXXKTsZ5njnP5A3YaWibBGT49G1XqjwxXWy1d3TbnNXep8mLL1vLFsewP",
  "key18": "5m4b5WyGUVvMXxJuPBZnZ99UKuE7rCTZbyXM24eRg9EWu7AdgZuMfEt5S1PKYsQWK9MCTXkVpyHbfxbRHmMqPqy8",
  "key19": "4QCWWQShmJwxnNnR8kDtaw1d9dfmWxPkDTuZrsp7Nm7R8dqVfRZcUBzYgQingj7XCdckueGq7Uq44CLFRxeGoavJ",
  "key20": "2JWGvhLDHC94zrGvyyWJNmjhrvWVVsU8Q2fGjzGZpJfjvizEas9ApWbX5AZVGAtDLUgQ4qed5QzR3aWzXrmqHGyC",
  "key21": "34WigbxutrArsBqkDrtmYj5DVU3LGZP256oSp1MFGeCwiSThy5TUG1dhko6kN7ALW4v2PzZSxcibHo2KUpr2raM",
  "key22": "4iXBaCT64Dk88SgHe5aQzCt49ZLsHS67885M9gwt5NzqHHGyBNcHEfPckaSCW42TYwcPzCcB5mfdqesi4vxxPEXY",
  "key23": "2TjCh6Qw68u4VVspWUGrCfAvPPShJrjRTSfek7axXutK1rud5NBfgc9A3DRhFfA8hSbDia6SVERoM2tZpu3iqZem",
  "key24": "5SLobckVsU74arWjxnvKzDxvGkdbrdwaoaph7SzmnSjrEmQAR6vXm36faqqSwcM2CDWtnijxttET22UVsUH3G4M8",
  "key25": "4i61JTG1HMLbeMt9QUQcZsW95y61Qpi9ntBiaAJoERMZPq8x9k7Bqs83iPfKsS1ygbsc85rAg6vtstv5s47DNYPt",
  "key26": "3UgwinvVWcShKtzBabdAhoCzRAwWXPUKBNqYUc3Cn8F6ZCugUA6VMcKUkpbSwu9xkxH7o4XsadhvATf7KJUHTzoS",
  "key27": "2fXXifmFrT9L43BqPMp2T5kkSZeXivwYeTdrJWNp2KBMQavGupsEg1f2VzwuNn3hJY7qDF2tD3KiAabA7hECKLUu",
  "key28": "5Sq3nzdWPUQkwjeSbR8sVhAWZDy3gPqTq72U6f1VRrLWkNvaDeHTQPjkxy47xmqcHE2er3FrjraWvXGUZGCtHiNB",
  "key29": "5TMKneZtSTU5FbcUWxWrCHzWQHR1BxZsCT8inX12chvtKVpFTSjr96NSkiZHLu41B1ZnE7rjdRYWhZPLp1CnM5nF",
  "key30": "k1oq5so388GrfrT9Ydea2RHV3zESq8o2ajUjCJEZRdTv5xW8LcL9C7mPDU8aUcPsP9VqK66wShzAy6MZF5omrQF"
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
