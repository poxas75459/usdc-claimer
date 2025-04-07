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
    "2i3W23dMjZjVkb3ZEsAY4HRiSKcB9V31TDkb8pw6mJRHeswcB7TZL1f6jAmdA4B1VxCHX5YPJc2VdEfEkgNPxBgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuZJStUdLFWobGQmzTqTbqf8vU1G4hgDXzqEVmyuWYnaWa1tyR7Y2u7QnX4qbo4wNqbFrAnSyK1YCFjyq5JciJG",
  "key1": "3a217RNWuAYws4919JpZYPRe5GNc3rHqACz6tddCXpyT1M3HCMuWVkR5KWxzPz2yWMM6Ni71WrwN1NpEyViUPMNP",
  "key2": "GFcm7TAT4ttYJZHmcam4aweZtqwpk79nsetkdxpPZCHCh3xFf8NYE8cvBwQ62oAZ15BbtczvYkbJdS3NEKBa3iC",
  "key3": "5oQB3hq6PbaDvWqD4o7jEeDkDbjjmpShW1hnNfCbY69KRUSjU5uB2AEhkbPkS6T7z2d55EkFUh9YQ9wkHPCXn8NX",
  "key4": "XvbvBo8xiDafyqETU36L1KcYL87apCWRsQdPwFjjh3hkvG3CdG8FJW3CJDJZHPAcP27q6sz4uq1B7HPQNPC1fMu",
  "key5": "48qCdJLMff19YBKe5nRnhUDeMF8Wvci6GLwi5wrLCJjosHiHjbnSTaGX7xFAdJLcZbF3WexNThMmFZ5zG3La4fAf",
  "key6": "2yJKwdwyNg8VfnrMHWWpBbdGKp3Ma5vZyFMSvEVB6umh1JG74r8zWg7WHfdPUjS8vqsoWeHNiB4cNq3tbfzBJLdT",
  "key7": "5ortTBveivWXXQCqzzADAci96zkFDuq3Hw6JRxhEPUAXevHezW2kXrfdMeqaqSvDKZH5YDYrUZ9GiAGY6PSGntku",
  "key8": "4hywgngRi2Ym1UY1cJUHkAg2tBV4kiR1f57QdQFEK8inXMJe9p723LS58pwJ3CbhkCbdKazhK7GyaaTM2tDzaHSG",
  "key9": "q14poQWjZVsjiuJRzAcKv8dty6SNWb1MFgCyGuGf7695dHUEhXTijfxUn5edxEGHsUNKuhPsvZjfajvnpjQG6Nq",
  "key10": "5KTHTeb8qoaYhnfH31KtjpyvnRUfVbbVUBeSk3zEECLwRoZC1KWsDkaNW4HrBymLqvWPqjdxWdtWosoKu6KFfgmH",
  "key11": "Axx5L3Z3S9Yk7RtPwHxeLRd5B4RLJ8KdCfgjWpW8TAFc1DKSJNy98hWcTf9zV3im4RubByoaiZH6rpycwEBu5jp",
  "key12": "3zSGUtXJbNkx67bSt7Fg6U7pnRoC5w1N1uZySpM1iSDdV4dcqgv76GUnnT41xc3TXLTefACvaAC3ANtJH82S5sH9",
  "key13": "3TocN2JcqTUSo3JR8ZYSmqWiFCbbNFdbY7ACvSrm2fcorkMnzenNLoFwwWgZ38LhwWoLh6a9p2twwCYw9VUEYw2Q",
  "key14": "4QHVv8VbLLy3C44puHesejvX3EQzMySETXegNyVCbjwS27v8RZp6oLFmmSBU2Y1AAS3B2QezWStZKtWL27NjbNUE",
  "key15": "UsKXHwcRna3zZUh1nhDDRPXmurByL2HXiVbeBCQXGA9Lz1ADmnxUky9E3kz6EXH3JCcBd64eQcS1RF8KJ6pdBC1",
  "key16": "2cva3gVjCsFHr5pjJX2wzqBoXAUmEFsyFzsr4uNzQKQyWR5YFz7D8Pn97WCgdyu8jEgGn1S8KiNwqn2LcPED3bxr",
  "key17": "28TSCLxteiv1sbGBt5Y8o64RUixvz5LwJWjJdH5RA4ifSvMiMmjezvmY7hhthMyCLaac7MavtEFuY7VSrwQME97S",
  "key18": "5Zi4gbeT7HVE7QiuNrjtWMLY3VDmYx6PSeqFk6WCCgikVrT1zu5L459Wkh3yDgwbSEmtFzVdX9L4zcLw5nP1ebYY",
  "key19": "2pykesHsg3oc4NDNdRcvQsibJTWH6QPWYA2zAcn7QiY3JwPcrs4qQPtE7N2L3Ndaoy6hdDnVHHx6ZaLF12AeUdFN",
  "key20": "4NarGgjQKtwBVz4z5uEB9oGnVCvAbikSk1sQk3GhaWmHAZvnkCnJnsVSNfmpWLDZvrsLTvT4dBXCtGrTdr4gxNdR",
  "key21": "66PnwBg2fZfJzNUyPvYXRxMHEv2QkYH2ReGxraX6ikLWb6exuSyKwkWLoGEDVw4mmeAugvEbPFtw9dueVzPiVkGY",
  "key22": "37onahN1XLDFHnrGqe2i6rTCNwqbsy8A7Arq1rqRUyUAmEP3ZqrTyyAuMfMZd8wsezt792GuYpWfVZ4TiKYhsoZV",
  "key23": "2Zz2eRFMJkAjqS1sdZeNqD86Sxdkcdeswnk8JT28wJWL8rerwSsLXwm2yZ7hrchNrXDeRc6P2hsbffh3ERbDfHEh",
  "key24": "4PYagP8j5dUM71CSsKkjPpPKzaGTkkeMWUSb5Q7yA8A4M7DiAyroeFHJyuAe547r9xkAG64TN4GkfMHTtVQNDXmh",
  "key25": "4SEY6VtD3tbNjpdQHfGVnnp1D264gdCDThntY5rZaKwKrqRLnUkTjHLT2cshLLTbkfCiN6pU46C3y1LnG7WxtkoB",
  "key26": "2AFnSU47X3MoAyeCmQN884fgzxYEL9tK5NGbB1ShAj1BMeqyQSRLkWwY4KHAkonef5SnUomUAndt4eGAp7Ldb2Rx",
  "key27": "4f33zij8Gra88Ych37kBhTpwYzuiAeE5wPqGksiDJKX4HQJ7SS9x4kNYnh2B2SoZAaUhb47YM8cNtkdax2XkzCmz",
  "key28": "8vKg4gYhQq6XF2e8gX11ZMLgAzdzwMMoiQzCsN6wVqFXhxgT5mA7eptGNqwX8DWh8rmrSi1qa4jgrmqJ1rsTCmt",
  "key29": "3ah4eDjDN3qWDNM6ywybooymPuMy1TudASWM15X8AvUsPhqL9TGXML5UHVE1TjmiTSNfPFNXS5UixkqwVLGEMu43",
  "key30": "43sb8ya1Nj2FCJbMddLHCqXgAcx7y1KgVJFacGDbF8cvw5c3BXpsEb52cfuRwGcXQ8MTBkDsTp82mbkH17iF3vbH",
  "key31": "4JN3ZJC4uS3CaXDtv7hbwvLktUkCg16NoDpBrkBdKGE4zRVa7UYGo8F9SZDAjisYSh54UyguaiynuFycBtGqgMcF",
  "key32": "62f3ZTNKXAr9i1aLv2fsvHNUahXnN9co3znxnKfWJwGj9fwKDdJ9YqBgre83UCvtvA6GkKJwcTANF7ViRadLEWL6",
  "key33": "5RxPHJTvyFevsp4TF4PZ8oNVs1HGkgF7na7uUK4KkJgXQvGfXzT3GHdptvcT4V1WUvyW3aeb36AHtXPwPTo47Ck4",
  "key34": "Ns3bne7caxFtZgJetzUaMpDTUMLAQ3HXYkyh7enzNq1tS7uHGCf9YcFxjpe9amg5JhDjrqjPCjXrbbwErSA6Dmy",
  "key35": "31Fx6NDXPXUmyimy5QuNuiK9swYbNewwG741ZX6E3PK575nwWXoEjC18sGPZrcM8zX3TnpmF6A2HYNeMZ7vwJL5f",
  "key36": "2UbN1W1chGwioxmcWYdQbzB9D8aKMScriszKPGhRCtZukJ8Lo2VbiiwYhW9RJYmFzqDuhfKLQ8uYWo9744xpSEYr",
  "key37": "1dT3BPDNqRYPNamUYLgmqBEgazyoDTELdCYDg1brzvrsG8tGuimEymGG8zAfXo18m21mZ8LBxzYmEixemmPGkrg",
  "key38": "4hQ8hHR8WaGJXfghYuPyxBuXN2SzAAU6bnnxsJBthd3XdAvW2JLSe1mSmiDBSWYm78eNZGiJF4gv3mGhEr48wa1j",
  "key39": "3n1H1mt4drfGKjEsaUqjvjkwyC5reiixPW4iw9hqibcjXobPakNAxsBSwrvYnfiFHfA7j6Ro5k6XgMgTo4Xt1phV",
  "key40": "4Ddzx2oHcvcaYyENH1Th8zs2LvZBKmT5K1xYaHamcnxnGh7zQSZEnZUjL7ZXMH7YrVNbRtKq59ZoDMAaxXDWqjV6",
  "key41": "3kYk9YKoJ5vBWBJjfajV1U142qjDXQo8FafRFQiwQ7wRwPcZ4jENJmjMz2rWup1BY35RXGTQ8TGy3rriBGXCCdKs",
  "key42": "5QMeJMwHYQZTrHU4f9d2pQsjcb33AmHsEsWL5mDiKSTzo5rNiEtZUSNvAePX31Bchva3FSAVhzVSjWdCg6JZbRi4",
  "key43": "QzrH6t1u7w97yL4DWVmagZPWzCSQeC9hY7FzWgrEiiMmvXo66bMzvexySoV3drcbZitGPxDUHDmR3zgqmPEpvv1",
  "key44": "rwgoLtxPqy95vrWZ2ePP4m7uHmCqkuDyMUTzqc8xCBwYwAtBDmJ2ZZRr7nfmkC1HDUCCQXNSfiwbqxXCr2KaLBC",
  "key45": "39BYMkzSXDJ2eZ1NT7nzZY5FsEXu9bPcpxDZQCA68gPwDSxFT7wD1CUVi6co94ev3J8u45wk7WqTjLQy7zcEQ2AG",
  "key46": "5h4TQU1ANPL8ojEpLcdQqe6DJPq82W5jgEnFaz5zjmVBxAcQ9C3ZPT3CvrwxX3Uiv1aE63wwXkLuAyvy5LERNnnK"
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
