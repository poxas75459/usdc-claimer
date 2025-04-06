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
    "3SFNofVPumohGc1BCDF8aEnfutGjr5CnYu5tNtWjZFWM5NPbb27yG2knpCGbYutH6GMh77dkTV4iuvtn1sayd5X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkBUKfz2A6hUn4swzqzXzXreinr4i1utm6pPnXsiW6DXLjY65BBTWsmdvaXHLNdz8Yg6t3D3ZaBNsCdbrac4Xm2",
  "key1": "4xNeob2Y1feNwNu6Aho2TdtNxJ9pYyJzeKj631Vxemd7LMYHFbSSug9qK2TZhWJLmDjJEcgXfXsBEz5pW68To7y5",
  "key2": "5tRUcUu78BtsS1BJZyf1ZMVxNDmE99cj9c9BViL9HJsv55UBHxSz3Ggj5dvXVd54ghJ8cMdw6dNh1zYjnNwVvBJ5",
  "key3": "4bqFMMvhvvX6xqvJBuvhN89y2gdmQxKa1tZsouW4oyT36nEiVrZinNruyEHrL5WbzERLxcHZxwEdsR1HBDhrfWSR",
  "key4": "53So6URvdev9ddabW96pjn3y8qY8qNY8nJoUEWQiFrfszqRajz1FT6g9DmcEQZwHH3JPNL68bpvfjCnfBLQKsNyV",
  "key5": "3wRYDMTPRW47znU26RpZKpz9QqN8g71JDNA3TBLZTu4zZH7dgirh4S3g83o14E3AHFyx9f5FGcXm8z8UjyhkbcSs",
  "key6": "3CWetvMT5bKRsqryR5fjKYdBdXDgSrjE53K3ctkSa6s9vpStDwfCoCQ84fh6uLhaNxhFFLEcUxFJVLTRkuuRNqqC",
  "key7": "2Ue3CmNr2wK256gnTn32sSujtRWmrjWQPpTYoBdpGn5A3fwMhrB54WiEuhUpq4QfUpaH5GJAFmoQuqGuZ6ovsy7P",
  "key8": "wC4N4TSs1Uu8MukczKAdg7mS7YRNkLD7svny68mMMpfGJT63C2iU8SCsBWkkM9Cop9d2eezLXeNdNWTjm1bWNRM",
  "key9": "3STxvfXCdEbsJHVC2hb9hwGhoED9re74WdnRBwYg2kYg6jojRcrwd1Fic388z1LPYtVHEHyLTyB5JJzTmCJTqxuC",
  "key10": "3xjn8zFk9tME4ieUDWejK4aZ86VYtScxf1FHi3TZWVa3TEz9XsmWgDMCFbJYbYHwrvMD5cfwxTpYYGfBSmPksf9Y",
  "key11": "51Abg3kJAFgbkUUcusuiJMGSjQwRWe8mMhbChBu9g61jtkJjVLboxz2rc4We5eeifEhF3gb5VAXEjrvRJm5d49xf",
  "key12": "4wpRap4J7kZG4vHuuTYQ87dSd1NLjh57qrb3Fei5rmPPip78LwWXzEQ4NW7MFg9gK3oTxoBEtbQuceqMK2ajgujR",
  "key13": "4QpD5WcBy5BLrAi2TwoNifK5pZGyv2w6yzsqdsqSbV9n7NoghXEFoefnRpm7dpK1QcAm4PjrgWTdf7R1m4jDShLN",
  "key14": "FLcZqzpro3sQtTQ9KEm6ZURo1hPwcpCouD6op16E1XX4uwqGd2jKUqwodC8RbDK5oikbV9wsHBC6bCdPiv6USYM",
  "key15": "2QYudx4jZRLR6NzcKurN5EewX3Vie3pqLEjHxn8cPsLoUGQPdivgD25msCGRS3PppdyvEM4XoLU7JJWj3efXLupR",
  "key16": "5nS7MUnoFmSoZud8cw8Rgtp31y4g7nQNVe754Nm7NPyN8aPeBN4w4aSQj5QT4BreF8ovBFTs2z4Xbh39XSYkF6hM",
  "key17": "4dTMD6zVo3BFryQ3CCXsGeLZenYRpAFMy8J8mGX28uyy77aArkwnF53vEDcaX94fT6Jbhv4CEcp5oiJFK4szjRbt",
  "key18": "2uS7acZqVbtT9ANdX2npDTBJA6Ce52osmEMPWUGYpMDpuw8VdK6Z8vwCdFfStEFCjDHbYeYUn5hUzq2Qu5JgmgF1",
  "key19": "5zPPQLfHjFPiJP1Cs4JUvFGDCsa2mCFkL2SjYbFA9yTWLndegxC5tDh7S6M1RW8VW6dcmDHHTVofgnWEQNdj8RxB",
  "key20": "K8pTgMupc46p51v76xsxjkTRRzydKTSmGWgPgV6A8pUZUsB6iAa3crfF9zPtQ6C15cPFgqabHba1DqDhk6p8DQZ",
  "key21": "3jvxaCMxSrZqn3Ca5B5BVeF1hUicHbNfqZAQZHqHmwkKAfiXyZHFusbfxHK6sCbtCAzgXvLeHCZfATRs1Y2N7oVT",
  "key22": "4smyLxhUVFC5J9cxnjFtvGozWNb2Sv3HFaMHnpYYPVuRgnt7FtXciAKHEnnbSw1wGFXNV8h1j4U2ajaZHQJ471V3",
  "key23": "67bU29U85FAkXe42KBh2JK2KrmvpHYCgjbuAepfWVGY972wgq297y5EVMpgYQ4ur6QAijy6KN1U7DXg5WGQRGbqx",
  "key24": "4KfCPRjWisrq2RbiRt7MCLZUQaiatETXTQt4A1jsk1nVS5tRuihQynf4w66om7MALQHcQhnC21XgDnCxrhjE85V8"
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
