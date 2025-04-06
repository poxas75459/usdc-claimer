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
    "3NJCvmxaJmW7hb23Zthn4M4wskUopgMyaDt1BhWGQFZWZKA2V3EMtLc2mhcCTattWhESgPej9ymEaSCHhYBeiRnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RWwmPX5cKwtwwukcD6bycrjHJ2noG75R3MSxsb74fmzJyqvMrG4qYPzXymCLaSa9F5GqSGhv4Dggkfqzx5Tybp",
  "key1": "5dGkKRetwUgvDcxWobZbbm58PaLZppUzF2PQivcKwe6nUBXd5KnroDEcdJRG3A3J6bAUxCP4iNFcctyHusVnqLHf",
  "key2": "3HJXPRZzRiwWyZXxG5DQ3vBVXcuNddZvbprqwcrw8ZWvAejixXhqGCabEPtWiYPhJMQWLk9VKh4FTnu45qhUe8AH",
  "key3": "2KHZRYimB1ns9z5KzuHgX1nTfLDdr2gCRob9fd88ZFSCmzd3sz9FyGC56YXQyxFZMdnECowhUrGgJXKWPQuGhPb9",
  "key4": "3oMaWykNotVBzjB134jNSnY353hnxx4c1NZL7r6VY6Y9acG9KgfPND2stdXh6a247QG2sQpHT2kWsk9cpvRLM3Ur",
  "key5": "5mYvsjtb52VmpKqCbhSvFSmCrkJYGtJubY2t1SxxsX1CbKdmCjy2hDykJew3NsYwxVsfqW7vjqH7G8bFivjGgQ8X",
  "key6": "2wYSC2sFEe42guzSFgVDmPPnTscV5DW3gXU9dGp2ksnMyyFQVCeHLqAA1QGDbxiDJrCfEh8C2aCQtXwJG1H8WBsf",
  "key7": "MS11QepL99RTZ9g2mPrHo1jMEAmbHqLuWS5gbjmdoUc9hKVjRnuM9kiWiHyTC9PMoyo7o5nwcPtnLhJcHSnQqTK",
  "key8": "2MBCkzGTxYkaYTmhdJRYKSBVM1tFUCHJVLH6i3yEkdLzrhyyCTYwQFjN13FogeFTC9GwFThKwx7kf4dmHcHhqdRy",
  "key9": "4kU4UJ3xRPwXj6Vh1WhJpAxcedEqEC6Hkj7fkjxeRACwVicMsquuxR4JFFJLuDpdCuwH4TFpYGuT7fQJkP8zMfgR",
  "key10": "3FSip8iTQMxDqWbegVCqJezvR6HvsbMuEHqQsLS1538eKNBhiMUxkYY7f72U31iAuww6Y4APxqSXdHSPS6Zh7Z8U",
  "key11": "nwHSawA2UrPEE6dRUtKQmKBMpzNchiXEFPNgeDNTw1J4WaHmEGZqSAm7vZBCpb11srtWuKksQtjB2HvadoAPoa2",
  "key12": "3QuL4WWUiHf2KqyuNjbYpVkrzixVuqhB5gwH8cCc2XPShRy58pJ3CBXU4hHjXBCcf8CB8CmmG2tAjjFPgjBWosjm",
  "key13": "5jPZ5VATxg5UGqZ1AbZfwo5qNRhq2KwQDiqbPuPVhrMNkScoZwvGHPia7Lpb84eY9sB9L5FW1ywt7vqR7QstdTvZ",
  "key14": "4p4EhPBHxTAArJwaD4c4ALH8L6AnLV2VaVJ6xdbJ8hHdtQqSq4GBiTBZssFgCsBLvn2Mddz5eKbqpq9sjDkHSENc",
  "key15": "53QKJBku938o1QaK12o2YL4R61UkcWN8Z8bokyopoDL6Hs6JgPX6WwYocEmH2A2zAxGroHjh9Ri1GpCm4UDpr8so",
  "key16": "5NVQzEnEK6aHQBddRCeijbTjTPF47rhFnM3SF7QhBfnjknfi4pgHgThhcw6xv6b54cALoNpaB6QWZci6tWCZFxkY",
  "key17": "4sANWEEWb8uy5LmCFop78AFPumzu6jLahfgwDEbQSbYM3grDVhASD6tXwMWRQH6nmcz1kvw5Ss3ExhxpWSGt5LPW",
  "key18": "3dp78Ha9nBiAqpTBtQWfoLRRSLJFDqAoL2TBQpFEbRWFZBWcTnbnS2pjwkt5SUhrzNj7U7btjx98XfvWmogBT4Vf",
  "key19": "4Vf5K1JBf49gvhk7oaVy4byztuWXbdZbQVbpb6uEZVVMVaBc4SoXDRFHqPg6kQk2rgc8uHyjPJE1CieE4MQK6Tvn",
  "key20": "sDmVchnVQzk9XgRjYQsJA5wxFN3xLz5gS87VenX6N5k14VYrqKae3sgTxjooqWoUPagf3xefipSjvurUTYdNxYk",
  "key21": "5ZhLGPQP1ZEcdAHW2QG3qvmF2dyTP9BqfNXojrJxuXgCALxMPiWpSmT4733ZAfNzRJukUpuLdN36wi3o6KEJKveX",
  "key22": "5LkAFBbTi146rEqwFc5wyrKMQ2WCRuXcNxNfpzyRAfT5WzGsKqU6986Dmdi2rAHtss5hWahnE17pzb6XMShGoipG",
  "key23": "64B2hvYqtv7hKSqX29dFSP8FzvYBB3rBF31EFDNAV9qdA7twjomH463t7oXWHqkBLGu56kX9QLSD5ZHVBX4zjtJt",
  "key24": "5iiDiGQiUyxXuVVQu8K8cMDE41Wg8aoKfnStQA2pRq4D6UCUg1tTkoXGrjvc8eJxwaWu3uMwuiwuhmrmDnx5LSGX",
  "key25": "4fWn9LUDxXxJAWTSBg8j7K5WD7yfscxrkhZKYGD4vohfE98VFy7pfBvyx5Es99Zi1nWupAXdRE2ApQftVPqio1qL",
  "key26": "hwRehi77ReECoyQmLssXSUMGQtnaaaq2WKesEaRy2noQrmAWw2jf69dvk6cPE3D9uvwTDXw2JDP723fnCWCg5GJ",
  "key27": "y6R4fvWkch6yhGdiXC3MHL82ASUToD41st2W2AHB7beYR6bLL6s3XAk7jKi9VU4eCR2vHgNdYQ1SXyQWwyPL6Ru",
  "key28": "2uNPGShUxv1yCL2MSoqTVLu7vRPBr38rndXHcMWnCUs4UPfAhTkDjQb47VsJLyMaWD1RZ6EiRREQVp6wCuFaKkyv"
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
