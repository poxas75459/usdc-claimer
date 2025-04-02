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
    "2Y3KiXYigdwHXPRHYpupRvDTDa4Zv4jbSeH4mdRwmpnRwmqAopiVTRH1ELMZJyLg1fwciuWuhxiWH6GsJaBs8s7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ej3JuPwXUUsZQ31GaeuM9QmtAcXS9LNjjxt6UV5iE8FnCRQ95MLovMdyEagqT5LerxXK9C6djXkTNy1DiP468GN",
  "key1": "5hUJKAgWtU7dB2gPPTuGdLXB6abobiFdnrMCNpDh41oWyPc6G2JXnN6BY7mUYi1c8boJVDNCTKNg3shxhmDKHyvR",
  "key2": "4vCTBYmMqs5BrxZ2NHetLBmLHvTbREQqbotjsMXEdq4yrgGDhevFC3SXzRoroi83YazRYuz5pkY6LEtsqv2GQHq4",
  "key3": "4JyrErwC7Rn1ECHXPygg7LADyFw2zojnBfHTMHyz8LtjWo5u9B2PV9DbuG9fL8BrtSpJmitVxTZLNMFH7yNuqyUk",
  "key4": "5HRS4EsJSzNac7EZqdM6x2tuvS6CigGfgpX9fNm14ErkPdPhtZfxyGHYCbudzzYr5bUH5ZsqRQeiZymeFFsr94hp",
  "key5": "4iVpNgQS7QCWexmsj1gET4tYfD9pbydE4yqVQ1JsmuK4quNYNJWk5CwSe17oRmWAJLmeC7WnXXQgBJXupMFsXR4r",
  "key6": "63EsZiXtmc5dWcSvLkvwGpjtXXDZ5TyKCFV9TjmtR18dE4viTmTnKc5R5pPv7zpawLabtYUBn2fRjdTyfm4pnBtF",
  "key7": "3YAgshCaWLQ6A5ViqsBRZkQKKyTSUsakvsDvyuaCqggbQqd5JyWtTjWUU6jk7fa7pqa5LubZZEZwBnvyj6KjAR1Y",
  "key8": "49hv3Ztm6avD6wwhRpMitG2SLtF1prLUrmrYsHmRW2eLu3fZQyVY7byunHK7wiTBLaAi4WRVarm11Cd57L1LdFWi",
  "key9": "2wbiSJYCZSQpJM4jXjU8MKKi4cs7sBwPjwsKaxgENcHCzMKd3FBUwAHNsDzZzDfKsNLTDoYnwyqYoptFivhoyyuf",
  "key10": "2EcP7Hx8bXUx2DqkUzir3LRCkJzFVdicQGjpZ8h3SfDCAeC9U6n8cwmTaJzL1rPKaYgZoo8ccNdMFLH8fpBwT7Ny",
  "key11": "2iNuTRVER3jioRNSqTAd6pmJFMdYN3fhxG8vK973iRh3jkH8NFkv3R9EWedBXNPYyA3ZobLAochG5BLaBrxWo6ry",
  "key12": "27NSFvyjapsYRZSeQ5eibBHGZUVTqPceDPCBDPoFMXhWrzbXyidnkQMeHQoW5bEy9dpQPeXd8KczYAQpExeHsWF5",
  "key13": "DYdeB6PukCJ4UqbCSr7HwH4RJUW2PJvh5HCx4bfbPzc8QpUpusAHkdhCE2WLzugTr8SDfyQz5rxWcjewh6JqvUB",
  "key14": "65BCSu3ys7fQTefLS3vvGr9zZb6cK9gWup55gY6DeEsC4sEELSCLEe1uWavGEyJc8SyteMamzqZkBVie1uqm6uAe",
  "key15": "4gxucSnu57uSHRjwG2pLXqNjRndw7s6NY6B9reZ1cXJKn2fE4c8qRkaTewH3i7GRdW5bHdVNuGEC6p2kkXzr25c8",
  "key16": "2kMFeKKmVTxMpVQRaoiXwCyeHMffhxiLtNm6FRUWDWnoHokyrJ8HytrysmVGTzhVfU72jGQukVRfQvaRhDTo6DEL",
  "key17": "52JNH8ZhudXnEu5wCSE6vwLVd3XPqm2KaQSssyQLgJepjVZKnUY9CKbrf7Cyzb92edjiue1MYR16kU6g3LyWkaLB",
  "key18": "2X8MVc6tgKDo9FnDnw7qxrvXWnuz2Ay1uex1PntZjVPNQLC83MU1LMohoWK4eEbjMDR87XCNYmQCJTgZWSpJBfcF",
  "key19": "f2Yj1BgdgssvTHN4SBaeGBFLWHa6GuHJWZDkdzZ2yk25huD2GMKDA9kyoGAonbC1srjKCRWgZoCcTEwi7Sirqyc",
  "key20": "5eudZQ9QZhHXFUAdpTUGfDM6neTQtpaeYoKwxf5S2hczwFwTJyaLBNu3pjChEvDN8vneUSTM8Rm44mKY9UrbydSd",
  "key21": "5et43VCbQdosC3nxpMajB6asDmP55Cmdm9mmAQgoTo8KKj63hE94bdMqmB5SQ6CD7koM2w9zvHEVmocFgTJAL8vj",
  "key22": "53kNizJj8xWbmJ3twPLMHS3BYUT4HZT45Zs1NpwH7nMWyY4DaDgURQ7xLL1MxrkHFtot52kZfmv95ffEdYu3zHS5",
  "key23": "3fHxezWrDwHCppZHy3qHaHbUSBb21umEfKLo8KRbfBxpRN4ZMq1NUA8yrByA8SqYB3o7Sp3cNwdSEYZJdP4AXpx4",
  "key24": "C4XHnhcYYpcoTXbFSdWDUU2mdkdUPHPDGAcfF7TNusCbzAcsUXLQFqBdKbCGKA4hs7GXPJh3bFU2sxfGx3LgpoP",
  "key25": "4PmTYHH3XZjW5crVuRYhdgVTasffYwaLjftVWknV1FFJc54GoDMQbkFszrLBrLEutHxz6TaMx9jb654LgdCvdfWi",
  "key26": "4T3timndzHbqdvPMTkdtrvZGpLFAJ8E57GWjRA7nhrts9VnjAbHRhnNGq3wgrGZZwvUUGuNAe11N9WPtUy5DbhTJ",
  "key27": "WVrK5kPhY1UgDFTPnkqX25DX7PKHQ7tEEVFsta7cMh64VnDNCgTyvfeHknejSiScUAjMNZWvVGGNTytSvpKqQKr",
  "key28": "4JkL34LFv2kB2DvRZTPhgaX1QTa8CY86LdMBcYGm3s7spvuRm8bBjxDEpG2ZcFrMaz7YyC64jnD1CemyWCsxP8dD",
  "key29": "3sAztSvuCYNAKFpAYpJmDg46XzKSz1yBAW5x6WWRjcTYFXLWQhDVscufwZUTJFr3m2D4tXCU4tVGKbpCmAx7FS4i",
  "key30": "aB1jsGMGryMBdjWKTww6egQhfpAMfZ9Fi13XaPjWZDpxbxHmfLBGqoipBf4AnRAWzcAZYHDnVQJ7WknMeaLPvde",
  "key31": "3LzR8T1hjRAY9ThN78aV3rKupUbcPwcjFKxMbT54hZL1haxvpC3C1krvgNijXoGZ3Z8NqAq4Fv5Nkd8Q6i77q6Dd",
  "key32": "3v2GNTjqha4rgptupeKe5sqQdKXAPbF7ovZJHLgdQ6tJGHeX7z4KP7PN8xHsGKT3aafZ4hM6VtDoyhMC4AHwNYZM",
  "key33": "5bxjbuJDpv7AY6usQFoL1FXNf8eD6N2hTAkEg53kBaKLAjDNnoBCytmMFkQmnz8Tep9nbrDKAAZ3rd3EaHYYH8Eu",
  "key34": "3WX8HqhupAvCx9UXgE6EUEgmU4jTC3C7P18cBFvHMgN2eiG9QxH4LQ3rGZaqGGNwtT2D97TtMzLMpgXivReK3eKw",
  "key35": "4CyKErFPiswBR91vJo8CuUhPGJMUqPHUoYaQ8pCEUfZxJf1nnoWU3eWFM9bV1Rdq1hC3XJJdCBALFNbqV8PV8kNL"
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
