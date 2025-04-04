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
    "2mTKNQJAXiSkewgAvwoizbaZafnGQfCck6RpV1hgEaQS3RePmDw7JPR1Ymsk4Ujndj1rr8YfF5sZZU98wzQvvGdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zacjyFiDtrune1rZHzGGdjtpyUzLxRWo5oDBrSrY9mXFRcER3zXN2pBTDYNzuF8rdk8bbddDM7ezpBZiVTJUP3f",
  "key1": "2UNYfNsb7TmqiZa385o9oH5C1Q5CLK6JyLsRauyxyuKoDJawKBNXwCvSGpmTRgV8xssVcGF7rbkMpAmFwcCU7Rei",
  "key2": "5H1CUSmVawt5UUKBFtnNkvqMcujwkuMs9dxmN8Uuqyhmmbgd2Q1GtUE6A7pNzZFAe1YnxnER6MBAjJD7CAzqXXyg",
  "key3": "4ufZvSz9wDr589wJEXnZror2kzKTmbVakW3zX3iXjnuHYK2NcciQZX7vU3MUi2W71gYa2CQayHwuDfsafL74envC",
  "key4": "5Q9BqdCWiN6tLiYbDzHsTxHaGFUjeXPjmUwaU9ErEx2QVGjs3R3QxfohGJhZYuMN8Xs2jDnUikFPaZJuTUdzWgZ6",
  "key5": "4LK4NCgFQCqEzcEXDtB5JRFv12fBx4BjmP6rztec19GvF2C8TAezXKCQnNETMujMPQZFny51A7YBD5qBbhf28ejD",
  "key6": "2imyZgp4YPtXkEwxhobbRXS4ajAxiQug3Qxyd4tVqeFdCFqXDsrYbFHRMqQhCw7LScrg9EbWUwc9EGKc5WZa8Ahz",
  "key7": "5ccCe1SCjXVn2V2Z3JS58QmfYCgNzMdQDK6KhP9Uh8HLC7TPWYjFK445FtrmK5KqsgeR3xZAa91wpzWBS8devwF7",
  "key8": "5us6wvx6HojyTUmheUqpdcCTo2MqAJHHuWLH8xd8HATGNKcugo9iWZ7ozGCyyAYTDdUxoYDza4qzECpBsHZjxqDi",
  "key9": "5aGn8Hwc2bSwWezCdPHXR2fA3cRvEezrMkofodMxuh8Hpz3gZP89mzxUUn5EQyFhKKgBAQJaYk4ZMkAN2gnhvutz",
  "key10": "5JrRqFuZoVYdQV318fPv9hrGbgZ7PquNpdE5NK9ihcz8w9AHfqNazfsgBkT2X4EbRM55bEvRZrJKxaf47FGPuYGc",
  "key11": "4hUJJva84iuJoGRbGtf8AWvp7r4aae3qqYGLSWpdP7RQN2UDKLThndsFd8HkaqzycFiVYdDMBBRD6eSC31jF25gn",
  "key12": "bMwgeY3r3ZpEpUFPmgzmLoHcAVH9QV2rFyUPXnVoSUjZi7yEknhXxniDfoLLGbFSjjxpHuwy5o1rMWHocdNrwxC",
  "key13": "S28rXC731Ei8cyp6SSYBuK46cAZL8GcmHG9bnMCgrPWMNyaeUtvonmso5qBqyFcrd3Wiv4LHo1HckdZ4EiPzx6Z",
  "key14": "47GE1pkH7BpfjDJDX9ion1oEgdTC78injor6ujQJjuCuxp2nZG1EkbAVrHit7SugVkPd2DahSJ2Dp4Aompk7jHEB",
  "key15": "36o5b1NVhgtCMo2HTV2LuqisnoGnFVMHbbi37Uv6MiYtYU16m6pydJak1nAFXsiGHaHsXL85ycsuQkbXhWBiwV7d",
  "key16": "3n7yoC2jE6Qw34R9YwTTwmsXgoqQyFNE5Rd5puaKxcHze82B3XTeEg1Cr4JMN7hXPJMXDxaVBmhodeQ9pd1JfQ6",
  "key17": "2fP14bwNkqcQVJUdZqLqhTAx3SwouwcGUWaAL9CryL6H6UggcTBxNHJKXj7gv1RAzQCibXidqoFZjRAm8P5eakTn",
  "key18": "5j94vEkQ2yWFfewEuEExwxYCyKWLiLnDmkipSt7xEEyNUX6KL8JrS6p9TYytwMWasEd2mswM61NmDDVRwtYJe5Pw",
  "key19": "2cNFTNrQtgNitPcvyMVN3HG82dBVA7Uei9HZmghg5UQb3ffMHtseA3FENbkvvEFtLsRDP7xrXDi889JBcXE3LKxS",
  "key20": "5DP8bYxyz8RvdS74x2nStRaq6K7CCjNLYskuoR77uDk9vnjvPrtYPwBaeuJN6s3YkModuAexS9fiEiGEXM6na6pp",
  "key21": "4isdy5RP7zWhR8EKbXaN5rY4Yn5KxHzQqxRyG2Fpot6zcbTEk4TNZzaP5Sse4BUEPyLkV9SwbSodpFNamvd8yxzs",
  "key22": "5uG6KhUJNQHDnoHVwd3xbGZL2meuhhP9WeMbCemUrhEbYP7v7irZH8BfX7VrxQ2z4eSaAC5jGu1AinsAZpAhDe6i",
  "key23": "3QgXhGDQMx7ieKFPhpLLP187VPoHYexnFzNq267aCuSmNtcJ8iyqjVMvZ8rYDHfFwwB9dxDmSAFng5cNDTwnvHmZ",
  "key24": "5w3FRccnJ1P5TLmKiVibtpBcXRVtQHX6xVmzsTVW4Qmsgr81MKF9JgrqiTxoAHDSduJgfUgHXJJib9ZivTPjifsM",
  "key25": "F3vaoMCzboR3fJssy7JejPNasuKWFDRBojEzA5EUEZ49ZoeFQMMLwxE8Q8MDmYwJAyZwG7qeFuMPq1C5zDeFCmq",
  "key26": "38qiJz3HFBLJSV29xZSJvcAhoEJxwpG6wJ2SFJSU9VgsVYgEqP3PWgwFuxyY6t8SKCSBv7HjudjRzq6o2SgHJW9b",
  "key27": "55WvsKczvGsDybJefo5ey8tKTwCEau4EnbAFeTp3QJMsakjEfVtJJJvQt8vZ6AzT3PytEm2jGixfz2s9YERscmqC",
  "key28": "2zaaHeyYhLBGtEFdz2VMFhnRK5wg75xtRjxjbz97siHtD8EtkqnFftpZS1uoxs13mhSJLC8b9UU4GA1EHYaSJ9HZ",
  "key29": "3kRDLVdVjruPwY2FmK6dxEcY7fYjQBPRktozGdd91srybd5g3ewfoKh9SBRfLswUTVmxwPCx1frp4RNbBk16oPrL",
  "key30": "5h3wEkYYmNfLHAcqczHs2zpgrgoQrRdTy6AkSYf3GPKMTLa1gtsxERYFAcVzJnQvKhzF6p6tqbYBgGx1VYMAZVu5",
  "key31": "4hsHbAJJ1DnvhkuBpUcQwZAvYk1YWWbDXpF7M3eCmAzWvDMA5rQjo6AjVUvnMGbGBLQ4VnApL14dKVHZL3p15B6c",
  "key32": "3DEtLmLXv5zziaH2xsPHSrSU518SJ7q7cuYz3T3gnnYaLyWSSrAEDMmcUf3f5qZbUPKhLdK43Yc5J1d7jZGE5Y6a",
  "key33": "3gjA6sRZmi9EqjK7npNp1jr2zPc844Jw8m469GXfs8WindZqH6Jyj92MBkrenxCLKx8CbQpwyCnX9r4xibuvdBbq",
  "key34": "3xUFYjwBF7AM4Q6f4ra9G5CySoLNPDcSpyu3NDwbD54QDeicynnaEhxdqhXeoEZugufCGdoydb6i8T7HepGw7g17",
  "key35": "237ti9K7E6FR3HBZ5Sw1PCgFjMKfcfMGNvvcBSHSGQ1HdzeNPBLUR1aEktKWxUNzZA56b3fgKLzR9DHHYfC8j1tU",
  "key36": "2ze7Uv2ZyxfVaSQzy8G2ept4UHyStjkXQngjteaNSYoaqJcazhpPHZg31vXGmjCMTKrFrjDnXeE67q8Dwiyhv3mj",
  "key37": "3LxgU95RTceixHyvKMf1RTLYJchAizxnCYtiH9kDg82qsW4FYAgqpPh1Y1kkM9A2G4GoY3TzUBC58gP58EXREYdR",
  "key38": "nm4GEP4WGW5zUxfkPvo19jMju1qMFRxW86toc7786FsHN96CrKUPYJ4YkTLH5jMGTBRdW7bTB3APsg7rBe2VTah",
  "key39": "2aRYyQ3PXhER4796MmrAn6iWBYYkGjCwj4SqS5jgEmD7McwWqz1LbX9DWphQGtHC6wAnXnXL14CAM3exEu1PZpBs",
  "key40": "26GUqFqj2u2Vmo3YJsMbe2sjT8wKWXEU2biN2eHHH16k9bZgFFQdewHcqfQjoeDiQtYTwQJgjkMQ9VF3MF9A43vj",
  "key41": "3BnK3r6DEzwBWAtAHagAxPjNfPPaAbW2RRyG2zTrDcwck7cCNjZRZsuku4uYMm9tBiMvtbRaFsbFNmnBCzvbDuxh",
  "key42": "26HRBLNvUp5BoyaxTtN8b4zjenJUKutK7ys2TXTZdzLbEeJrz29YS7xXQncBvdPNmMvyRNZHBk7DqNiKymKDBFCq",
  "key43": "Wam2JGwUaZeeoQ1Nzc4pjfbqReTGgusg8QheB6eZL2VUDuWd65HVBVwa1N3Xyqb3pfPsXkaNgYAN2AHHamcjdUG",
  "key44": "2WAeobkwbpBXsnReKxn7Po17fsSXMqLJyHhMJB2j7mSc4hJapFkP4YUPVd9iyK3yRkwaaXQNYF4qMMHYwK4dp94z"
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
