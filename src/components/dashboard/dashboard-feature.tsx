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
    "5AaBj5Y3ihVbnqx5xLKg3MZhyumm4xumS9AChf4UC1Vnoc1UmToVvK8fisM6DqFdhcRmzFmz2EfWKmC41zwW45kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pU5Asna8wkmHcdHJ9o9s8iVdZVBEahgGCny6EiNky59qfeMLWGosRDsd1Djc5LHLvt6gDTiAB7mXpSV52VQkGtj",
  "key1": "5SQQXrbetvD8raHB6wPjL42pMNk8T72t5ygM8sxSMmUuRF2D7tzwq2KycT44KRG5ZtqSUriaVXVtMSw73PHQgJSW",
  "key2": "4xJ1uxue9ZwxkyFELe8RFyMSnGqcFUYAjbAEWKG85ruZH5dMyFenPiCXLss52pznpK4gJDvrV2McxAiQXUM61qzm",
  "key3": "t9S5hFpixvPr9w7ji87bN4x2RMai8mnH18UUtdUo9vKZgWqxh2Qm1KLdEeT1g7He3Wc8T1qE9L3pt616D5Nd6EN",
  "key4": "4o9QfDez7hcZP4tZNgT6x1o95QFbj8DuAqs1wMJBDjBaRvYdRuGtutwKQGsPDU5V6F1qKzJ9gEx33ue58c5ovjdA",
  "key5": "4cvUsA7aQi4z6PDRzidaqEjWCL22eA21KMGGDeMBsr8mUpcyAbNJCX2nwJMWnqAMsVq8Vka92vrrT1HP91nsR4X1",
  "key6": "2G1W9pJranojMyJBWS8eKBANdUrfBvUuNPtKTqZjRPYiiEEnTVzMukELpB1J56vtbcPMYWzmKpoGg1drWink2Pxa",
  "key7": "2Ynf23xbKPCso8ZFBd1sdDhtGBJnNiuJAq5b5yWf6o35JrGuAnxynLrU9ezbkPwiohxRw5j6QrRhxpL933XaJ8m3",
  "key8": "3MZxyieiNyctfbsNKqApbHsz8AA784jBhShT3Gk3mesGzn67PRy3vuunHYGkVuKWNhUcbv9BnjVvM4LoHHX9f7f6",
  "key9": "5s2PyMy4mP7KP1NiJ4qcFdpGFbNviVSTZZuGSvimWGuwoPnDWJoQhZwBhT37QgH8y9rQ37Mx1QKcFnyVh9NjPUAQ",
  "key10": "xUAGfUvhJxbpNJ8UzvshHq6MoYftmeRGJ9k75iUDui4QP4AfukqpAwDGZTrdbqCTaN3VXpqLSDu1ZmkhWuR1wXQ",
  "key11": "296bLH55RNaVdaWFE1dVv4dD35QgZmo8xyP9nmuN3b5g7YnUVdgBA6iBCbgG5tF9DUmW8syn5osmGiBbFuNiJC9n",
  "key12": "4ASHw5Y9Nhs1ChD8iJEMA7VGAivUiHW8Puqhgge8cwspPC2M7K1TaBCqxxo9PyBHvm2Yzixei7d4heHrC6ooniM8",
  "key13": "4A7UbG8tmLGU6XvTq18aCDaz4P9bCjPLaXFH1LHphjQ2f7FwsZW7skeuF8beDt7w6t2Yx94wbhnVAFrGWdbLZQY6",
  "key14": "4WDgKW4TkKEN6MGkMD5cZJZ2WbrjzbfUhSaP2om6A9omYXxk2W4Uxa9zKWUDesSZckDMGd39RXPi9UeKsm5Nrq5g",
  "key15": "5mCxvv8BvfB7dckiMPNUXVWp4Wko2V6TcRGGcRWdrHezXqCWmezkMZernEz9rvmHVU1ETizUA3FPh4Q1JpzZR8wt",
  "key16": "3vhTYK9pCHk2m6xcPST757oDrCqw735ZJhA8LucZ5ywXAo4f8MxoHbamr9F5k5ryJixwhKGDzq55uXuYKGdSfM3A",
  "key17": "2jeEsxF9q9XHzXiyRRifs4m72rX7uXK3Y4jmspsTxyukQJuz5231J1aWeBvcmo7EmK9p9DxKqtpNJns9TfpAfm2K",
  "key18": "5bj33k3FcvWWe8Pg4R2uxKCqnR97e1mapnhGG1o4hSakLyfdNjkr3u5JRw2v16YwJVF4ioy3XrXLKwNNf1CtXXek",
  "key19": "3zuL9v3LNFiispvM4fajebn94H1pbsxzeppJVEcHF9jciTxTinqKVnLknJDSkths4YULvfJDke9T1UwJPthJVZ95",
  "key20": "2fFKC3r2pprHEZKndga4gCrjP3quxUzy3JPnMN483Bkb68F2ynwkD5G3ioxvEtodHnXVgwFazqJ2vjHk88W2nc6n",
  "key21": "2quxReyr8Yu4FtQUzDa1ruknQySdbmQkhJYvzF7zu436C8PodUjM68c9h84bViPRMa3VkKBEreFKhqgGvBbeFawu",
  "key22": "4UCD6EZgRfLQMmzK8GQxznY9n3H4xNmuzRtwAmQGUx8vYLyqmWf1o4NcbsEZcEQKeCzh3eaK6uGZBLHEcjhcdcT4",
  "key23": "LKvp5Qv2TcF8we4nsGRe3rL78UHHK7Cz9UzDxqT78QZG7CtuqjvF8EThboDNKjQ2axtpPkntXfH8jjhq7QKB3J4",
  "key24": "4dyNMC9VtyMg6bZpG97cctV5cbao68EL4mwG5WnLUAVmCA8ncGh9WCtiNW6fxeJ4QbDnBjcJdo1P5g2mteEx6Y5n",
  "key25": "2nd1ej2CEFNMrKXUs2iMShZEC5xPpyKvDMGa13HhvwCsYCGCFCaY9yETkD5eGvPBftn3TV3XVpUL4pURqN1W8vjD",
  "key26": "3A32gk46GHqcF7YQstWj1TojDFtGFhUeAPADcfvuC8LM2b7jMLbM2XLVNPX7pcAG6JFC5uE3JQPbJZxCWs833myP",
  "key27": "3WjLAAaUdHd3z5Y7iZRDxyzg8bgy8VYJA71f5Wwj6o1APhaASVwtgr8DiYt1BtMnQyiJFvHHq2dKmLKoWuMjFTRs",
  "key28": "5aZJmwQGnSP4ADsapAHigXX4xNywkBiQ3KKGN43SCZLXzsvVeGTw5LZ6n2sZAfi4gm8q7Su9SG4CBLg84pGsuwTq",
  "key29": "3sgLByiEuzsfdcgqfvd6925oz54Ai2GdALHkmUNiKzELguoHVjJa9cKTJVJL7pmX8LzH3mzFuc33XnLCWu4MC2Vb",
  "key30": "4fZh4eeFuQ8JBfo6S2GhFCXxQJDsv946xsQ4cYgsUZ1r8jcQXJYUPqEswTjKdqHDBtUtXBhsDS2RX2zQ62zbahL4",
  "key31": "4c7qad42SNeckA9nrbjfxZXydUTH6v6X2G8hHEw7kYyoFDEcpX8zQDA4wHzY3K4wHxkfAGXfJ1j7mxi2jTcdtuiD",
  "key32": "2Zq45ykvADkGG76yFVs8U5wYTH5xNkfvx14FAQdYUrs3TZauePSSY7WSSce5V682TLMr3gfdXrsfG1fXcfnmtod4",
  "key33": "29Fwsp7pPS6AAGs9rRxp2NDHAJGVCR6Luacnp8BxuQ9fzFr7vBJNbG6LgZFr8n67gucM3SkvV6JBTtLomoZsNLxn",
  "key34": "4dBoHGBmdwnBfRFV4otUdgZeUPZ6seUHWeAZsqis7ECnqz83MvTg1soxc8JFGnSgvHTriEWVE8rhtCuHGBBS88qx",
  "key35": "2o1XY2H7cjHau919MAH3UsNsq9Qsgy4wEQ5z7oUkLZAwwdMP3gq1pvhXBFgW6wMULj5Qedz44zs6jwHxjJKsB3HY",
  "key36": "4AAguEcB17xVfB9yvk5uxxKfF72PEP8b93Gm6T2WGPo3eKwXf7p7pQbFkE5PMeqXHC7FK5JTFURi4s6KhT2nQ8JR",
  "key37": "4aTPV9XCaPrpz8zhfhGWj2ssG81geL1FAK76mzQ6ZfyJnbTKd4oJXJWD5xsXB8NSCK2BB7NnVntPv3eTAxTUMxpe",
  "key38": "5FQCMTeVbLbnzMDMWn2jc5M8vBYe3g8R2v82pCW8eZEHn9oCD7A2LSwCcVgKQGsTVgiDHXcWDQS5uSo65ee6WKJg",
  "key39": "2HWUWFPmcBJscBDWCYV8QCrY9G9BPfFwtMZ9hDnDDdLD5eprBAaiqRwhygELhC9DfSyUiYotJuPm6DQs4gANXGHq",
  "key40": "26QPw5hW5UrkHP1uPKBKA1jvD7vni9CueTgkBzu3DzxXew5QP96geRZvT4J1qBjigeKEDSH6HDeHgirj2auH19wf",
  "key41": "5SyMBUf1qJhUxsHfmAWcXwRFN9TeLpvAprCsDDo81pXKWtfexRQyt11WzcWwkfidxDAWYJEWaSD2GZ1EK1VpuaJq",
  "key42": "5uPzGQWtY239gr22c1t5YJA8jKRk6wWMiC8VGkHy5EL8LT9xQtkhPzmxZske5iJWKjdoDMwMMMncMV9UBYzgnqiH",
  "key43": "58QVnodsibmPzt6ZD6ps8ZtL6i1TC1ZM5kTkTeFHGmkg96cBofMYDdCxtBcKzv73mjSrbtLenpfMuu4wxGt2mVpx",
  "key44": "52wRTFrDkWW6QJAuZMw1Yo9kBUVj1cjhEZ86fixLCBKhgF2XKodtkANpxskg8qHLkMd9CZyiqKMMaBVe3L36MHRF"
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
