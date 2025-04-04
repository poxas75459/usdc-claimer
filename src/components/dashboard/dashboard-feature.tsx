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
    "NGyRaGBt3QMu6aD2ZU5fNkKVrra5rrXySzun9oaTqhEHH8gbraoGmtcJmPDw4hWSu3uARWQJ4APgPykarpGpSr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52fbPKmDViZ1X5KpU9ZRGTVRxQxT7RxX694La4tNWKGL1ZZmtS6ipbDAJtMmg4fYw1asVNT3qN7zLxGVYcir6XJm",
  "key1": "3bVE1NTbaTnC3EZtr7cPjLw1frg9Rfu9zYAEpqdk4W3tY5iPTfdZk2RygKTJqDyjnDk1656Dx8r4SYC11cgJB45e",
  "key2": "3GcNMSUiFipaTPpZ2BBfFciTD3ovUBQRoYpEhFdzqChhoyqXi9NwpYFPz178bLQSNCuXX2nYbvQGtbcB4fUR4QtH",
  "key3": "LfusDDAphCV5ysULAc9MiEao3ZUR7p6MdaHtdx6jMAdrdbhBNaX11kVvG3yPfdqE1xuUFTVbz9RBjPTT7Scok4p",
  "key4": "2ttLssUMM6cbEtq1wpbpt9MsRxGCGKoAEaS9nHJhWR7QQeJ33zvMNtHpxa6vPhmUye68N7nik5a9RRUPDcwCSWUC",
  "key5": "2MeDvUPH4xmCCpNykieVAQLdFZB5sSJsZzyryQivYjAcRyR26TTPSGXGj423j5W1jjqRsMNjNamGS8vKWYRVAhGZ",
  "key6": "5Bjv8R8h7v9xvWCzbBUzZKjCiV6YhnpgmyV9oFP7G3FVrrGaxZyn1joNHc4eXT8Joiob4VUZNiSz1NUgDuXi3ryL",
  "key7": "5NvbAiPPtpZwnrTXQXYCQHaMcJ16a47wboPvohP7PYE5paQVA4fnpvP9MTi8maCS9LHP8DEzcYGfW4XxB5juMTka",
  "key8": "5jjDbkupwnnaioKA5XVinUTsHNXkGpv6rV5vbWsQ5RKEkbbNVgoZ1FVrWCkS1TXr3PH6hiQEJE9ikui2xzmAZFxM",
  "key9": "5jzMdUDfYM8EKxvf25pfk1cdHGmQi5TyWjh9KEem1n69J6kFixAy6qLdv8VqsuP1phXy8SrNf7ohr4STb2PsE2m3",
  "key10": "nxvgbkgXnf8SRX5W5V2JWSF8jkhXc3CwYrksKEiZAcF7DczKyhgyYkbGSYGS5Mkmcdors3JcNoKdZG2qE5VsHrC",
  "key11": "dea4zVcAuRcNdmuPrtZX2mmsHzkPaUvQbjmkiSuqA4cw2AVa7RbMjqkTaWPe5MzkJcVQUabE5Ts62Tc61tFYZsH",
  "key12": "4TvG4mhpogJnsmrvYnrjDgwXLngUgpAK2HPVJRd9boc6qDmjXrdBhMufZwLiwyBi3Kpwwrr8f1Me7q4ePADWndrs",
  "key13": "61CSKLV3G92B7oE1zRMNYGkDCB7VmAzxDq3fy1BQWf5HXJkHqTu7xrga3Cr7L8iLjkkts9igigBpyPJH75sn91wY",
  "key14": "5Rp5yCqzcBj55qKNKz1dbpd6MzRdVWjkRbVor7UreKo9FcJH1PkGXJztwUnZGPRvzTtYcWsDktv99ZWWwMddS4vu",
  "key15": "5FFwaSbJqhcVDJnsdE56qpTrJuUweHcYo3Gs1f4k2iVjffd7eSXddmDEDbCo3NWsAoCThBSpJyx4Mr5XEriQeD5F",
  "key16": "4nb3nNz7k2LUDk2BtdvZyx526198mhTGHEUCd9ikb4dK6981uZy42b1sYTPxPLfwi1toHddBATDACMjsa28Evwwe",
  "key17": "2jVAz6Lc3ydBeDM4M5CJ8qQntwcSqEqg41Gg4EG94ZT3pAk6J6f322YFkGyHF51dgnkoJhbhQXDKr8YLkDfTxNBp",
  "key18": "4wkekdkfWdcXJohtoCRRfA2dwy3YB6xhxqFkeqoVBRy4CP3sMGsc1iqxgRgPLzgFjh81ME41YV2SC6S5UpauCPcz",
  "key19": "3ptoYaTvinW15vszzXoEUuhfuwVGyNqxAanjZqwZuucWaHXZfXihgTRquko4jXnPaQkHmzczuyChjzGi7BgyuNRf",
  "key20": "36y68MP8N6rcTCy9aYe6chzbp7BoCbyRCmSVhMjgE17BYkmNAQyWGBV6RSgtKRsGigQFPXawD22brEu3RgYcNtq4",
  "key21": "2uqEX68BDrV6YersQAcJH6j1kmHPjujP9yY3u3MY5ZeHGJi6kiZCau641YBDo4az72E5TpjDC67BFg5yci4GJ3zK",
  "key22": "42HEajrvCBCzrbknXTw12NwDtyQCQjWctmq3Gm5nLfhSt9DzqrdMg2sD4RdwphRjTrx3s6emVtXYUVwV9XYC7eZA",
  "key23": "62sAdHa8ALfonEK4PSaLxPk4NS5o7fNtB8TFbUp5AnacJfXX16G7wCGr8X8NSdGjLtxkB2f1xq3o9MiidDeUSh9J",
  "key24": "5eNxwRuFbmQynuAUaQc2F8ApkCaPFinA2BsVDS1XWrd8VueCqoauJka3rjGRA4SNYP4EP4Lo4gUUbTg4uCxhpXUD",
  "key25": "2AuN6ra48ykX1ohCsHhTbJAocT35jLTbfTn1gjKbVWAdvgpgFVEU7zVA1TqA6jCGucGFHqnCexn1WQPKk6BEaChU",
  "key26": "4xroJiEEFTpsqy9gRcyyk8qdiTSD3t4vu8gVpAta13h6ymyak7xoVMe8Wb4r2gdSL2EnwzzMcR3c3Jrw6aktXTn3",
  "key27": "4ZqcZNTwchQyzoSaGdQx8ZfEDrvTtBh4tEKcoD1vViTNN4svqMRHcVW1QH7EUHcWMvjhk2cjq7ezF1xbTMTmKo3E"
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
