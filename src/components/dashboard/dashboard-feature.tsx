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
    "5f1fCdgm4Wg2Zzvf5PaQdsTc8h94CT6MtHi8TNxohSZ9pNxA9Arn1MpPGGgndkYbTQ5GEq7yb8VGfqfy77oP7z6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yeFuUKp1vVyShfUGWh7FyVF1AxZSw9YvyiTzznX4mZpmkgxZBedRqtEwxSGW21bEnEE4t8Dy9undUH8pKonCdDn",
  "key1": "qJDMB3FUqfmH25DaDgm2Q8NcZ6t2AeHBD4FV3Q8xDdckL9zJMW65qpjAw24umbQbj3XmV38yvZ1Znbtim6syoZA",
  "key2": "58TZAiaf3MRatvj8nN1tKTYwED91hor3f7HtRLBJEqyqu96JNTw2vfSKXt8EsSK8rj4ajk38FZ5T9aZDQmH5ABQ",
  "key3": "4QBnrPZQBkGrDXxW4Bgp2wsp4k2WUXDFf6Pf1UKhtUp9qi7KDYR1yu8map8RZCmR9sxGxUtMpXKZgj7eBzh8xwxV",
  "key4": "37W2VX6rGbseb5KSty9yKxhJNpnKhAT3isCNKYKCevndZ6LE4AKDC6R1xosP42mfs8Nva6nmZaxccgNMrh7sMneh",
  "key5": "4oFZ3sMhQFfDqNRRbwnhVuDxybeTk9qgt5CbDr3QVygL8fDwxL5wAPycSKFBrjtvDoaWRjoBWyqWKbk23jxrFwqi",
  "key6": "4YTLrMBDzWujs5SHK9jBmpztreZZtV68zr8ZjGeKt3Fwi4rwG12WkZRTHJSWqtbstbzE8UvPFHeVSZHHQ1eKTGcg",
  "key7": "pt3AMaBQZyJH4XKcUZtVEPRmTp5NMdebCtNQxpZDfkJj4f9UqWFoYgct3m9435PnsxcF4VxQPhf5Rk9Qn4jqzvN",
  "key8": "5amfmD1Tp8pUcmtkmFgbEZAxPsmDMNXUNPpXUEeCeFBaxS33QeQxS2ryfQxVqbocpNm6sPfEhfeq5LA97CFszabL",
  "key9": "3Nihgrrcb4q55M91MYHHjYJXdqHE6tmmsV8rWsA7mLkm6rDXGQVAyNZ4kbuMfrNSGAioA27M4qikxSASPa1U6KK7",
  "key10": "Zp5mRaDEspTVkbq4f4vX4yhavC1JaYv2X9BfURsbTrB1KLUQmPsnGpXa4SLjuYxUDwSZxrAiyptCzgjzevtZsMy",
  "key11": "67DqdJvsXwZHrUMRwRwCHhgy6kFDahLHTKKjmeQqPdqXr6dCy2RX7H3XqndWcWw2zgaAgdNVVyQbH3ECmrkhnzvi",
  "key12": "zixvtmE27s1BJQ6TAgVi1sdkGiHhtdQc229kv3B4xJLP88Xaq7Ce78Ra5H7fswBVfLvfwrhJ4u47qRUjSm3dECC",
  "key13": "x8zjMAtxrUyNkDtvTA2R2RViXBJRzBeqr9QLru1a1e2nsCMjTaWo7FWsfWWxuyeHmFWHXGnTUNhR2T6EwZf4rSv",
  "key14": "qtLbBFaRgX8ko1Pp5oFBXzdpVvzD3Fnp5n5wrjZt2K9GF26F9o9TBocbaDUxfn1DYuy4DfUqUn6WuvPaFyhXP3F",
  "key15": "EtN3NudFSCs6UbPMGqHp8hLe8pcXRhNQdCur65VyY5AmVjyDbdfdXgQorBQcwMXmTic8gAHHGiWyRGJctsbLrhL",
  "key16": "uqA3qAjHeQtXBq5owBiSEZ9vFnEL6uwkff4mJVeH5PMm2fzE24RmWDQuonZYNzQnxKpCyTGEiTugekVWWhiYDYd",
  "key17": "2JnUuCXn8ChCmyMPDboQ9kZzZdoT3EEgFHHqNzMpBtLcwU16xYedyzMPCGGtkhr7A5ijFsUPpQhsu8Y682AttbtW",
  "key18": "4kMGG7395eg5Edof5W4E9QFo4oHhHucjwNcJ36nCByvjR1rWnbC1DMsJYh93a4dvzPSeF2DYRodTwVzQxcQf34j7",
  "key19": "ukpVSZtHmt3zWerM5NK9xEM1Tke4NrNkc2cqnNQwz71ekb8hv2D4EEqkLMAcon3PSphxr7fP1M5RXvfJYPTEFD5",
  "key20": "428HF1a3WiQJyu9x9hockFpNKvLKToSnP5VNhG587JSzttRuiaqxZKQa8bkbiFosHfiK32Gv1U7TQe6ytvxvdBLU",
  "key21": "3hQ7J7Mvd3qjVjJro51mH1b8vURCajQe7bL8giAHxfhmf44wMH5W3UxqmP2snXHX5omFSP7BEwv86qSYuzrG5Fm6",
  "key22": "zAZvZyNdELjfBzdvjVqjQtFBxkrkunCcAijzHm7ps2SLBHYr2oj1HTJ4ZFAGGUJmf5ncuV5re287gHeZxyhh4wi",
  "key23": "5ZNeSapLrUqfPRCfYkmYUq3eAAd7mr8kY9YHJBzejtAQTvBv3Mq7cghJcwuFVFMKcZrX2LPk7dm7e7qvoqD4N3mi",
  "key24": "2sgVZeo3zrM42pPA7HkDQJmhrNy8GgHTfLa5mQYfVAEDbNr5DnigGW1JGT9N5fUv8ph3ESfEGUT9SJ99WCvw3TS8",
  "key25": "hpK2QWTKv9CSVWMH4XSsPRfERjUtGdGvSybg72JXAAURk1dxgsbdJ9emG86Yya4djrqSCeYdj33G58ACN8mv5MD",
  "key26": "5N4njfs6zkNKymJyF3Jke9zpucE5BLyao8NqWX7EUVFPCA5mv9eDKPb4D8TtRSCUb62K1JLq6uNEzbzdsnzRvCTs",
  "key27": "217uEigP3G8kXWJFzqdqwwLVNiufeLfCAk1jFzu8pDi6fLxRh1aGMG2hrfcgA2Rs6qfZdaVYit7QEgVBriyWtn5i",
  "key28": "2GmF1BjiJQeg1y6RCrpoW6DdVSieH4WQExVsstDXpxE1SL1WMKXy2pFb4or1FfiRM4pinmSK44oxmX3xRVQ5qLn4"
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
