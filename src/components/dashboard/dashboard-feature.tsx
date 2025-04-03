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
    "581WRoMzQTviLjrf1BH3CTX3AfpwSmxf4wCyfetTM6V5ZeRbNasnxS8fkqvTz59WWQatEWG1UVmaq2tJpqBRDRZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6bbTfEN9K9S6C4vCfsd39wPUVujUsXrt4D8b6nDXpMeACcKFDjArjkPUZjexFU5uvm3gspzowJawAnM8fvN2LC",
  "key1": "2UVZAE8ctQHiXtsz6AHv2dk3KE79oSh1zzvRMcc2EsKrCrnTQHT39YmS82vufQvCyynqBL84wAg5JeGL1Rym5zvj",
  "key2": "3cz17LTPD6As18bYQMhVWMVhNHAoc54VDs4s5cT8fPNVNXNqegHumozjDqBXYUGxn25DvsRkH6xXAqTfBDJLCUR",
  "key3": "L6WpN9HKpKavoqjja1iKBzfo9cb7Pehx3S9frYBgmMdkvbLs8LC4LtWtmLZ6i7WGb38Y6P1CbdiUE27BEYwbzKY",
  "key4": "4VNG7AkbKsZqhmbSWj5qYFrLRwpN5gVD5VdHmxcu6WGAH6ymVmwyKLgUpDbx61tJtUxuBc24iYKctKfNDHGtGhTN",
  "key5": "4r4EaaEGsj24gUmTqzn7v4Gw6oxXBVVbqfNmPxDzTacM714T28UuUALRXPkzoHnMCkmkDmezu1zM4CNAsWK2H5gR",
  "key6": "2Qt74vHGL6KxTbCRnf2tQSFQdXGD7SgJfLf1AZUzJJPnWQtbchtNZ1t9JXhY1JZz146BSKC59sB5yTpVNM8n8VmC",
  "key7": "vMUXB8HcARykC8CYx7z3y7YzhAhcCxNRxAyGJK6AEBYrZFGks6gSJmnsewU6NRWb5fvQwGgKzCmnMcpEQ4eY4Rp",
  "key8": "2y1mtUQFNJ99KzVbgUREMbYUEXVNihvUwk3ba8UtBk1o6GQKveMnTY2AwcBBnwabEs6D3fN8Rm9vTKATPBtjayUy",
  "key9": "4NhtLH5nmL5XkkpYnt99zwDawydbs6eRhgntwgukaDcVRCugdUBoKvVLSKvthbwE3wmxJe3UcJd7QGRCMY5jVbpK",
  "key10": "63neLQX15Bcj31Pf7d71huMR8xtT69PNJB7szT6Z1yuHiEJMJn7AebFrYVD4S2eR3xwKFKm6PLx4gCdBzaydvcf2",
  "key11": "4PBQaqEnT2XKb2fHJyKELzKe2zxTP8AbogAu9QDzyRcXmExfy6KvvJvXGWtgR2DF3bTFzrT1unvic5NBzqDk32M3",
  "key12": "45uVmqd1TVWpwMGBnxpKDyMXmBPuBFgMDzbPLo8YP4AcPP734Zae6cLmFhnp6wsRWSao1qwE2WzuKL6mXFGbiDE7",
  "key13": "pmP974cd696p8J5zYUNWkQo9FFC24TUkiEfkut2Txa4ANcfzh3DA7WocToNR98BJ5RzhokXQtxKKMjd9J4hZSz5",
  "key14": "3BcYataQA9YTzZE4bTPBbRuyCeagztef6wrWiLSrc5U7Uj436cTbwNsa45f7Yfvduhv64p7f5odFPNG9vEeCjU8p",
  "key15": "33oqhPYaiC7us7MXYf6bXrLoFQAfG1hAJJDRS2LN8rzzkisibWepSkbjadqYHvLdX2b8vjjdEodwwTc5SFJxdeQx",
  "key16": "3pcVTv9rSE33mTEAGV94syzSZimdv9D7wTVHnpHgcKNywyeBkpXnTowu2k8S7t4SHnQNoMVnLcW8YuLgU4sAxbTQ",
  "key17": "iQ5gddyYsipETjPhDqHHjczo8ZmeS72tHC2jyTTV682cjjTA6mGVahc9mwt7HqCGYahU9nNHDVqkoWWiJMn1P3z",
  "key18": "rRKZp6Jg79PKxjStDaiJgfgDqXU1r9BSqy1iY7zuyGUUZPArHpW1TkD8z1yyN3xE4x7zALhQEMCEm5KBxqavAFE",
  "key19": "4n6rL7JFSW8nRtJGTdCdQuy4RwATebmudrrqb7mCjMbqcFcJF9MBqQg8ZdvosuQyVThQF47LSjmjmqBQnwtF3DGZ",
  "key20": "xQ5D1BrTNSp5XavobdZKuLPjmRm9MxrEhwWKnrSwURKGDVzNtzFWS5uPdLYzq23xpeNqSE7XFgRcGW6rTgmaAia",
  "key21": "sSg3Nvq8LD89BTaFkMjfi4qNbD2G7e1mVYLnP2q9H9eeryTGm2Z5btvQXTFCLfjZJ1iPzi7UhXPiGC8eYeD1k8k",
  "key22": "5Pj1GVGtiEYTx7UdugqRJVa1N1eRveGtvPxWeWNnsWDk7KVQn8v1HUGgugHk2cYDBvnYpJJQnF2GQkiKTeZrSnn8",
  "key23": "4fN8hiGieCfT2CrGYg7jEMpUxbTpCoUzcAKh5rMugrLogxXtQofwAskYgTfJBr3MJoi6gpeGPx3QgA6iJaFgRMi",
  "key24": "3Zq5YVtVHChqTjLQuvmkDCGyCxPnCfC4LxfFukDRFh6ZTG4LwaTSc6onWR3AXuS1vPXGreqKeAdNp5NQa59fMpha",
  "key25": "5eLit9sLvNKsggYUoruWrqtQ93SY18J4QPhGJBj5ZzXuZKuN7KgaZGs7oKp2j81CYd8Wr4Es5e7oEAJjRzaptqhN",
  "key26": "2LcuMLRXMUrricFK4xHgNEiZXEmpvnbWY9UMRrYFji86XUsLfbfy2A6t4gjG37w39geLrvGAMkcK2gvErBeMqhSo",
  "key27": "5S57CCx32wsXrC9mim9GHsEHJ73PeTN8epQKq4tN2SQSVxiNS1GfCGfuXM1PfLcyoAdv3BnDwqQkakwDTgebCXra",
  "key28": "4NAabcARjX2NyKKJvrGHhK71eXxxWVJtvJwuNjd8YRNVmG32yiTsQfYGSnFDFPbp534YMtn23MWhjqTEdWr9ni69",
  "key29": "5C7LazZJsFyVAB5QDazPYn1cGmPDhzqkzknAaCABLFWAFeHmMQzhSuosJCseejWtfyKtjr35MGSeHaQvqt8xbU8H",
  "key30": "39H8XDhC5tnEFe1RemuDvhm1t5TMmPZA3dodhz1wqH1VznpFCoKzgj6HEfFvCCk74pWDC5x2ovf5EgmcwsAuwPZA",
  "key31": "23yCtFFgMieQ62teVEHgVvYGGGCKrYRrd3zKDHzJXSfxoXpbtuyLcsuxHR4HATPgQLA9JBqZBoxh3UTzT528EB3k",
  "key32": "4y2tPXP2xHTyCU1o9BxxdxWMpio9UmN9H2zK3AFjyoYqg77eeqmXmchjg6FqkshkBG8fMzZdxVriPR4yxLDhbAvR",
  "key33": "4yyVNBq7tLVunjwfsZ8U5VgANXCMt2jhSeVhnUWmnLSgaH9BeKV8HRMVkYCLu5mJhpvimVgtGKMWvd5rKUhQBLFT",
  "key34": "4qgWkYzJtLKgNmk7gFVjPBGAP9KUBuW8F7EFvAANUTf6Kc4rKfw9Naq5Ju3bvUsxCmWD1AqQaKJJcMMiYsQb6HC2",
  "key35": "Zm3RsbYsBXNS82cGzK2kdKs1ZDcmrAuGET53R9svF73e2j9FuhB6VmHYAu99znaRFnptq7tifK4Zcnf1TUNkijK"
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
