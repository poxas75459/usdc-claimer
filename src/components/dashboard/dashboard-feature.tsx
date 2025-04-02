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
    "5MPNyWLUUGBNqXYVTBre7uhGtPdpn77Vmc8z76jQqK97kWZUw513kf4sqt5u93fTGX3fY8Fxc94ZU9FwRrBKPR87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTrPkZWv9gk32zQwZFuH7ozaTn9vLM8i55httftxQeoV8gTStYddPQND7awrnDCZvqcao4b74jsJfERFhivkSj9",
  "key1": "JqsqwcpRehFih24FJWh8HJsNKJH8S9fN4cBaXrr38r9nx5hZ9XsrzhgJXVoAggkEmFyrXzpeFA86MmmECnUFBu4",
  "key2": "3tCPbLjFyuwf3xdapKxfJBsJEsStXo9ezfVBEwgqXFq3isLXH5qXnwE5KG1wFfRj1PQR4huVsSiH65wfVArx79Jj",
  "key3": "4ttS6v4rsEjJgcgDMCAqzUcZyuUkmBaMWWDMhD7sFvxCQiB79EtxmU9qtvfr9j7ybqLnmdk3mxhB9pEbm38LnBqw",
  "key4": "58Wx1yzThetHirhmAqJ8WcRrxpchg45vqGnbSXymQJJZ8KbrXPxuhM8PrZYYtoM9i5wNmin28utTun6wFFb842Fm",
  "key5": "2eVULfJVaGMfbXinusDtYHjJZhxrT6m8eBop12T4uSjuMFzAiEFBXjsepGhjcbXS6XFRYSHZTfiy91skseAgWvy8",
  "key6": "5dd7UBuvrskgq4GFmZZb5m8PSMJM4JGevVxMGmKitVg7GdqoBiXdcAtAimtomSLiMZPrC7JGNGitdLD7C4XYuGBP",
  "key7": "3jHkMsBU4F2wdhtMKtaFyE4ieFHLH9fcicynRRqGEEY5DD51VTtFSEzK2mcdfhQ3Hx4JHRC6kthU26feGDxU5KU9",
  "key8": "3QntNLf2m6uAhZRnKiTTzUcZRcgRh97ZxTQGkRBz3PzGQvnfx4fhSqbLpYoUKhwvscBj7ALNTgUQF38C4UdudwUX",
  "key9": "PxgnKx8ju1ticzVRAkFMPJMCutm9bmgkfYtcgmHkPp2dvcNMXSRY7kvZXpSuLgDuomWAb1UJmswux9CSQrS2rmu",
  "key10": "5c7y6WYTLi6WWGDpQqXQHDLCtmu9vAPun6EmzhJ8y5UWERjpU1CtTbGkbiRwfhg9H4kfFCfJwAKYMM2QLXC67oo7",
  "key11": "3zhjqAELNYQwRg8orY6cLWkpz1i3W5vrfePkrzKMmjVADZme7WmLsRfdgeXEP31o9iXgedKpFfQ1RgmfSXhpF1Mo",
  "key12": "28HupiGFdFsXSNW5ppZzEamkMsK4nMco4Q7p9p8NJQP5749rJnNgLtVFUevYKSZBT92NZjNnz7P815meF8bFvTsv",
  "key13": "2oaAj8dc4X9uKBVGPN7PydkQuaDgWhFSNAzfQdkJMoX2jVT63No7R9riG1MERFH65bAVCVFnBi9WqgyXUB9G7Tx6",
  "key14": "5vKwvQjmDMX4GxVK2e1a2LEjtuhrbszTA9W2RvcPK2K9tvRqkAhJJRTDTSNQ472WuVJaN787NJadCH4UhHqGZRBW",
  "key15": "5JqrtoSk2j4ohXMBqtEEURwQSS1xMA96KRGDWRxWn7k9N6CK3fs8jYTjVit6hh8kBpeU4Cm83i6iMG4NwCcwUyZK",
  "key16": "5JkNJPUaK4eJqvJESW7MqWpDJD9CLms667KMtZ4nqS4Tfqn9amfD1uM7UXhQxi9Laoh7iCMnb6tryon3YhoMiAZa",
  "key17": "3EGPqL5aYe6LTLU5tSJiyEMTmHHXCfeoFQ2Ean1tqwpLHzhr2YAEQJhgJxnq5v8Mim7r5J8NjtU6cZxNb4KU28Vp",
  "key18": "3qcrgkeryMHkeTXEJrWXau9L61necXSDwu1186kqHqZWU6yJTkPn9d8oG4ekkH8zsSpkEbWSxgkDnT7KDjQSMSPm",
  "key19": "3r4frd1ZTkqHNPqdrAuMT7j1XfZUG8PwYfCtQ3tdzN18jM4uBEBdiQ8z5SS8XCt77hgXDWFS53X4AJVyUKtpu5KY",
  "key20": "wxFH8Ph94s2rdbb1ZZgBEzajos7NuXDu8bj95ngjqK1MWBWZfKtuMAtQwun8RKEVviRyUMeypKghuMx72GPVrMi",
  "key21": "STjm4sCXSLWjYPu1hRNkkjUxbicpxuD7HTrHBd7K86PxWvt5jkcE3vuPyZ9i8BWr3pfNNibJL3Bw9ccayHZZN3U",
  "key22": "3pYhv6e3anj7J9hpmMUTQ1moKBJVKbWsU2BG5YbDPhwMz9yQnQy3faX5papyZBrg4p5YRX4U8tUQoYwd9LDUoqzs",
  "key23": "4BoEAvFaEUUVJTjYWK3fFLHUCEi8PnzsbzBwnbiPduqkw2N9xqSP8k58iK8BHWgtRto5W4ZP9B5Qu4YfNUk56KjN",
  "key24": "4ruM36X6nKNVbUwrvMbxGcSfwSa5m7q1JYDnMXopG5tkygBBpdywhQJNZZJG6UDHy37cPbPXdjRsvNGTakzCkHZV",
  "key25": "d94DPEAujN9fZvvHJvXoihTzfH3XDuTkc3gWhhmhYDuCUjaCovEoYqvjvnGekZQuDPCb3pr8rp3yi3LV2Z3QTEN",
  "key26": "49uqwouKf4n7SEjnQuNmVBT7nZyr2i28LShJx3bXxiBfMRuhyHYk1qMmYe2zveXioF3Zgxf29gDmHrKhCq8PH8Zn",
  "key27": "3ua5H6E56PPgWyrMtbMy9NLuGdcYQMy8Qh9ribkvTCdJHNqAUzQxNiRZa9Hfsb4GkFGTX8pPY2R2oGFSKLdNJkME",
  "key28": "3Y3feeqnLT8m6EtXeDFF3Xh3Q5HZz2a8zmdJuqL1pq12tvRXTmbxFhrn8J6dFaTyxeuwtMpjyoLDf68nqyM5fEcb",
  "key29": "4xrSne3V54ZUe5uy2KKkH4S4Wxoi3cvpnhWo9i5H6vdFc1FR9TAS1ZiYtUmqwLBmkBtWB228LM7S1pc5quw8fqL5",
  "key30": "596UGxJdQG2TLCUZTbH2uCDPrdjmXH5rsBq6bSD9Wx716cpp3nxfnBmP46KYeHey7xVS9FZy6nJcfKRfB3N16vo5",
  "key31": "39y9qe1ZdxUL4Jy9zmAbnhYUDtsCRcQqYZdowftqJKacLcDMZbyB8B1CVoJc59FmUsDCMkMR6yvSLTcj4eDiD8Fz",
  "key32": "4s2RwA5CzhBbaSH2Nyw7uju7hABabeqLahyQ2r4gsVZ1FcmFXkcYucW1X4ebr4iYbJFSpcWwmK9WXykVvCQAALc7"
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
