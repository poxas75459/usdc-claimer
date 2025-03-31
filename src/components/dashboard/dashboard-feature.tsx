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
    "3JFxBiSxtPis9WD9EuJzbPHiyp2d6zZKYZDdYs9uYZWYCP5qmymE2tip4Z8b15vfPyy5MX2nzarhWRttA26BkhT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnJhbi5iAjQtWez3mNWNj9JY1odJ8duutZrtZerPjBa4P9Ln1EvjnMoWtBFYqe4eifAFtJ7dLjiXFUB5HxrYaHL",
  "key1": "3JYyNpb3mzpVcKpyGtTmWGQebeiEVTVkad7hCKDGn9E9W4jrL66aYUxjhq1NDMU5Bp12Sqsrx3n9Y3yipQi3SkRT",
  "key2": "2eqXaXNXExNmuJnBxknbAy6iE73aNgZSRaV6ZXrW8zby4CyxrYZdxFLxnahi54Kqz8SYh76mdmdfv8YrWKbbwozC",
  "key3": "5UYZoEvwx7H1fyQ1u1t4oFN81iDNp2hUofCkqn2Ln4f7Eb7H7y2jrPbrPDdivSZCiE8raeeCQzNNQ9aLWw4NM7iQ",
  "key4": "48rFbL7xHmFyVDygfSpc724bwYDcXA6pZdY8kbv7QsHTzunABEJXL4xeTHe95Se3txMYZoAsEiBNec1v9MWNRajN",
  "key5": "3knyJFSi1VfrXduP43XsdoFvRVDymTfTf8FnDzQ2idSeANVrKkhNMtnNJJFczStS9tBYxZMymLiH26C5xyrYnNqi",
  "key6": "311CFY4z5KbNaG6aGy2gQLoJqk2HfEBt2apeSpkY8i4PTK2SPTQ8zf4cb5br5uvZvuJhUzCTpUvg4CbZbj5tbgUs",
  "key7": "5gWhf6PKkkzX1jvoANHSENvZP1686QPAvsUQqKGooYUiGSBNDq8mWQhb1UHwMqXNR8DEiLkn4yn3qWnJ7Uc6HeSf",
  "key8": "oivakdSinKv5CyMdiFP9bVYzR2DUh7CUG1eobLna2aoFr9Nt5Xj7dHz3YD8A5gjjW854eAVxrRGiCEsz8tUu7Vj",
  "key9": "LFwK53ZC2CZvgPstMVhdrx7xBpvTDdSsg1mZbn9k9Tzioq38Kyn7hA3So1vqrYyVrpbKkF8NZkbN2td2aA721p2",
  "key10": "4uxyf2RAUHmDyf1mU4iyYvrr9aXBNsMovRdouPkyQmsUSnpy5dRkG99QUHeNcoYSuzEneJv2UqqJqyP3EpNdG2DG",
  "key11": "dfbF4XMCt3XGcLsB3UAFE7MThNaUZqeoMMwQ2inmm2H1FnRpMXvcGtNwLQFCNo5Ev23oy6E8UM31hF2hHXuXTrK",
  "key12": "HLZmDhiZaLrBWc6bSKqEcq6vnU1HwKtTu9ZGWbk7qagvgeLMauWMvDPh3eoqWZtrbinezhcXkRUbsipAfkQFwsm",
  "key13": "8hZrEcvYeyc9Z24W1rVkuqnhaZrKEJUnfP3WpMog3HzGenLx2EDAAUzfgEBVhsupMwieRjWkm8KagDx7jFovP8d",
  "key14": "2R7YzxiqQ6AHAVGL2LBggXEGM5apiSi1GGEN6uDQwuSygLFALe49ctsykqvSrr9WnfTLwEvXq8Jzz1aQiHAjJDgo",
  "key15": "2qEFzGoq4YLcziMsuZV8Ftpffkt89BTskCmFcaLrToDeKj1payvi6Sxk4nGKBS975dXMEF2KEiEhDRup6NM4fRQE",
  "key16": "5Nfoi6x7UNTysUgKHNqNeCtg1BbRPaY2eaZAweeuD9mnX1Na1TSW8LzbTom8bNdZao5vjYKcPRdoL1tTqiu2vVtE",
  "key17": "5MQRffBxG7QZAw3jDkzHJxw32KYQSBrhU72d7sjizx1EgJAfMiNM6CsoawVarFEFfzMZbLgSvSAnSCyAucsMph3M",
  "key18": "4LEckTrUABZmdxqq33Nbhunc2PYqqLA75behFApUoHmw95MpMg5VrLKpZVCBv223ZkwmZTPe8H6odM311dxDk3Eo",
  "key19": "4TmohyPviRJXfTVnEnzxuMdZozHoiHqfRLHoDkSw2hMWywGEbmtaVsZebeyUysAUKa3xtiBFZptiGDEyKMG4vwA5",
  "key20": "49ARzdpN8ATZtaWnZVG9wS8BJjT2DMtLfiLBiPLNZieJFKFFbPVFrneJrQXZ4x9TsmUSvndsJJyavhQavnhonRvD",
  "key21": "4bDLTAguyTPf9i28vzbsBxkXhVLVdKQEsR8VStYiEEZC2Yd6J4S31i2Tnm6u2wyVhqJCJ8SSuDzfsx4KXSdk1hWr",
  "key22": "1ew7VtVECXs8U9C7KpieKFb2WvubEzuRTLdNNPUEoB8o19LYXMdPyD8oQb2CdfgiKcDhjWm2oJD46jbprpUprja",
  "key23": "62LiJQb8UwTj1bvC3UHYmUH36M6Chok9zxktctGH517oePcJzyyuCh2YF7YDzRy6Rwic7SsUfb5vQ7oA7jSPawt9",
  "key24": "4pFQPkKHuDFPpKQAsZPx7r9KGetm3i76rX3ubBhnaXdaVvb8E2MTgADFtqpFe5SEdohE5M2pCBfZaQCetfXBFkWy"
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
