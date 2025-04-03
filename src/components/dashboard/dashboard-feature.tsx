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
    "4MUY1uJ4SARCfBLzpnziG2SP4MjDH3ksoD1Wu7R9uZvKdsCMUM6AtZH1bc9zvSmDQ2GGbTeZSMhNnGCgVGNace2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61vvzSZoFtA4nRPKFimxhAnSK7cHyWD1daRPPESadr1SkktgKmQJaLSUkRpmjf1jSBHBYbAmLWhjyukD57QiMu2T",
  "key1": "DFFMZEMUnAf6kXsYqgz1k2Nq7HrZu55z8Nd8JFusgAaQjGXZ7bhSGKv8W7W8kFCu5Z8g3N4WNQiEGCqi6VHJxL1",
  "key2": "5qnjb6rHuYWWzzNXTEpm7VaDS6q2KccKEjfahmfk8Y2WYmoFNtqnPG5ym4LUdseJAWKxAQzwj9NP69qCNLEaBN3x",
  "key3": "5XP1ykYHdMS5ij8iUnqAqAnzNyC8cQziPim6HnactV62GjHHBen4CQaBBKU4pQLKJ5uMYsY19WjsJTbQP6miQ28B",
  "key4": "5pBsZ732gJ2jtNYchUJhvmK11mgHfd7kUwckDCSMn1xkSvQT1UnZ2JLUVmNujjAH9xTscQ5g6yT5R36AfdHgqU3c",
  "key5": "2dQXdvfVJsiBuGBpRW93fpKUzuahYBkNX76MuRuphon3oVtQLhY3dJEuBcskKXWnuyb5wv8rC69RtvTNY1AWJtji",
  "key6": "qXcefQQr2vqpLb7h7kjSacS8DnvkwQNnhMpiVmya8dTRrFGCzE2nroVZigBKxwfQduXMaVNLwzjMWiUHhkJswGj",
  "key7": "3oXJUexYQbEWCKGARM4KidCoeLLoszkkdXhAdS26Fu983knoxKtL2rCdk4BabeRpUgVeZif7ZxCu7mH1DL4DUy2u",
  "key8": "3TmaA1r31DrjNStGtb7rFXEqP76m7vm9TEhqCPBFMKEMaH6ahqHTEigSsPVknUk38dKFjJrFJe9vhwhVAk9MraLS",
  "key9": "5FcTvZR5J1iGkN7qwd6cwut1WjGZs1GDbFNqPAn8nmpHUo8SgAQc584bufVf7oPXZ151SdndM6TbwyjJ9MPgWPrk",
  "key10": "5REkNHPnhYPeefk1KaARSPARgsuLr4J3Tt4DUJrAQgoHmGw78XgvXF9Hrv589SYV9ZT3Un437CznCzw7Po5xJNBJ",
  "key11": "3JxHf77ujHC725H3KvnYCLfWXYMCBRtKUwyoNjTidBLSD2kBcyDwzrhCfiUtrjFnDZG7TxSjarSdwgCty49bKBfL",
  "key12": "cc5PaobbWwJ2LZAZ785cv7igajG1hUL2YFND8hZQNQKoPuc7tCAwAbPEgT8KHTJafCYv2WzSJRT98f1WuATmrkz",
  "key13": "3NFpijHuG5tS4nEVEfz5oPCjYX6HPBbBU3XeiRY9qT1bo7PU3fPxDgjvJ1SmU667daAW3b8du9yL1ap2Nj3T38sD",
  "key14": "63XZh3cyarqCauQTQGCe5zNUD2gUvr42bR8CnwdrVXW9dPJWxVF7sRgs8z4LUn1NY9153b4tQbqwx2Grttpgbn1y",
  "key15": "4PoiMPYQ8Z9G9fNDoqsuh5GCKh8MXLMz51dmUc674W3m51jy4C17BFKumdW8Vjht2usxG2z9d6roEoGjv7t8kWfQ",
  "key16": "5yP9h3mgDsqDKC6jZNEnGP5kVrYhrLDBPBvZouu887ea4L8BHJxEdLVPkCtfv3Epynj9n6JFn5kP4d2GKeCFuvUV",
  "key17": "3CH4xBk2SerZtnStWGPSjY3SbmJGVsNeRf7ofNhuVPmmDE9AT4W7qzSfbVpcfwDoqcUzXy7VHagTgB1Y13K24tDZ",
  "key18": "3aEqeNbD7yLUv7drwccHAADrzkJbGavzr13ngMx94jG6QrnkMFFiZ74QUBhPSVDuJYL7ubp4BJU8ysYE4GRhnnYA",
  "key19": "24qUN9CJTgquAniq9Lmai5eS53RbBZhWaVgeqaomZoAq5z3na3We85ub2RUg8kTpPoZwknDiqwKLJbmmbXBYajcC",
  "key20": "TD67eYKjqJcf1cxF8rYnWughR1Kh98YwNj9etApy51due1qU2kdQrjdpEs8V7kzAeMZookeN1RxvAvdB6rHJaxS",
  "key21": "5A6ZgughmctS7rYYeTTDbRhTfveQJwqYYKRBTy3rR3Jo7tqb4A6DJffvWTquS1ewzyGNAstK3ugcrrUinJH6Fa6N",
  "key22": "3m89nyt58dD7NcQap6e7w1iA3iQcvtnvFHFg6VEnz3teRd9s3KS5DBroB8Yfm7id11BaaNLdDA5BoknxjiVBsoHd",
  "key23": "578NvmNzqmBfEWgJSXrAN9kMMnKNWLsFzoNeqeTw3Uff24MLx1cUNVicVoCpJpaLTMHFDk53cKG2nDaWbhsWAYpk",
  "key24": "46GpmCgppxn66av9oBr7ccAqTJQ1EQ25KVtaxWJCFK2yeUQLK66nYSUFZueM5gdMS9361ymVizr4jwkMCCk5N5pH",
  "key25": "5CBrMLQYJ3CFkJqZdveczHrsaKXGrGvr8cQD2WcPfbk3p2j9228E93oTrTf2LqQxMT6YEmVSH5yoMURyf8yZGCAe",
  "key26": "jTzRCUNKZCh8v7uH2B7tSpvWxUnnPVq89H9C6G9guAxydULWsq6zrvVVtaa4qaJi8ubmyzr6nuuQaAURw6rSdLe",
  "key27": "29Dhhx5RbYsn1vZMoAEuVwkzysCtHAmMPFzL4WCNjWWfb5qBzVhgZNZGQtrrGrqqHRPcJdeq4TKek6o2HiaVf7WJ",
  "key28": "3tWBPRZqFAJfNumbazTZR8njM5szorFbzoAeMd3aPuztxq6ARDBUX4BAiR8SRLTLuPX1BLrjzw1tzy7EZaz53BHL",
  "key29": "3EnLgF7Rs3ug7MoFTSfEEPi9PRnTW69yTZnTTd2YUhUq4uNr14myHfowMNwCE42MxA2DLHfHSLd1kqVPnarnvhpe"
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
