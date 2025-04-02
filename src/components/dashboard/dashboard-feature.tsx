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
    "3qkK3FDNNCf6QPJ3DQgqBGrRHE8kjVqocEVT9suif3ZwAv2aBzSBzHY3zXWvzhQyjPndskntYSaeZQENkspzpZer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFuDPVnRnrv7PRV55xncfptJbvRKsbcz8Vaw5ftdGRcej8biUi8JaKKKfrZxCfJUnckB1wevD7vJaaeou49EQnY",
  "key1": "5TGiVboynyVbJFDbeff8hHx8P2tdbGegtAvM2DayqPo29rd2fYj4oqCnpvouN2WE5xnQQJATZa89ppnH7v986Sqd",
  "key2": "5erzGKu8bEDPKxXwCMip5Tb1THNJo6gb2JRak8SjsCp2TQZi7ho1S8gDDTnkMmN3qRGret2r66LXZx3pj5rw36fN",
  "key3": "3dapnxnwJ8Z4SjwWP9twFjA1Fuuh9TdSFeJBgUd6wtVVwuYp7A67sJ5jV5g1XynX4Ub4bwpRvyqaz9bbT6n7H765",
  "key4": "3V5vQLj42bXWEBWzdq1XVA5gwTryMqqaLyL44SSNSK5wH6DRfyUAEn1zCH7m1aMKXP3GmGFaPPboXyNbg3WBuMEn",
  "key5": "5QUA5CUo4yhiZMcE3Sz7ooEorTn6q2iw9gWcYUbZQf84SGiHMNYd33TSfmof95WTo7R24iWFeoaSFxZGHcoVUBCB",
  "key6": "31LpNTcUWbZi458gB4up6j5o9vzPgRH69FXjkYkM2uawPFWcqWScY4oACjWjzcsGsSk2JCHbe6RhsmH7sKLUwq8C",
  "key7": "LX5YwFxFszoFq4RTyBp8MjN3Cxw4Gk27uUUM15LzRU3Domg988zN93SGxrJDAkGDCx7kNhryXc8bmJ1mVRcUKEZ",
  "key8": "2u9nEjhZagg6QjTrmirQEjD8zPQGfTmANb3oZhNJoNXZhXHdBJuWVJqSsMtVxSL715MXiWona4UjrsPJrv65Snd5",
  "key9": "2UFh9goppEpLDR7MhdMkr412WKQAMXAasF9QXvGHtM7NsZzfF5qMBA9SPwPssU2mwkXS4b1UxaTx51Ek5eR8YQmj",
  "key10": "DHA8JqdmELka1qova2yvAh7v74ZquCiYd94ycJaadKQFwHy9eYxcir9BLjLGrd6x1HmTXQkS6N82HW4cmYErcKM",
  "key11": "4PRZqTKVkKiqbApiVTgotLjTpjEgexRdtyTxZHct52cRQQkC6NbRBzsLSfPVH3B6wxMSCjCMW5Ed6Qm73Nw2rhA6",
  "key12": "57hgbvVWC7EEEw7ZV7CbYXQvHvLfVFgquDfhsBqguCmoUTBuPD55DtADGa9GixtnmuYD82ffaMBxCGKzsLCXLiDL",
  "key13": "3XoE67tpGijrcoKPpv6jhqCtzXTUJ7nJy934Czf5F96ALbr3MajqgFmPZYQhAoEPckihjj9htppweZX8KKRvSfEe",
  "key14": "4U9Dm3oQgvAhiVRrKcU9h3bppwpyNUrne1TgLqwNsnQUVG19jQVi3aZUCpBw7eRAbgKX9jFR7tJ1Q3UNDckhoQEq",
  "key15": "3voxnBVsW2BKSHsfrkpZBwQs8NqMJbGAvsbxYbHmeCLjF8BGTKyZsATJRazkyo5qvAJ7VKDPanqWGnAej3nuRcDV",
  "key16": "2TSzJCm3jsJQjrdEWoiSuZvXqbqAVD9E1GrkpaCh2S4eDdjWG4EDzHoDgX7YxXtYaLo846X1GPrVfrSYfQKQ1tnb",
  "key17": "LUgrWb89zAs9PEHhf85juXknNYHYE3RQD5jMhaAK4XAWK8XpKaZmktBjP7deyBBWWcRvhVHXNGotQiJ4dE28BKD",
  "key18": "3JsYoUPaJYEQhvku3QY81BQEiF8wKqb9458eHx56wS6PC4sVGp4n88LwudUxdvCx2EwNq6Anvnr3WRDTPfh9YLfa",
  "key19": "4Xk3zj2cGroiNtpbQUhXSgxZDSQtuTf5JvHq8pnoM8iFrfq6nQySVZYgsmbwCYBiXG3xCBrpSfnJCApBvwcMXaT5",
  "key20": "5MyhKmF6UMAPANygpJyH9TAyTWyDmMQQUtaS5NWEZCZQr7V2EZxBnFTHoDpvD45H6rkfpmHKxajcaqPHPLMEYFAa",
  "key21": "4QEZHTQgi3sa78AaSGQrNKoE8NrDWYC6vk4yrteaHw8fJUqrEE6uz4PWeSDYvvfoNX1ZuyTrgrg1QRK75Ztobfo4",
  "key22": "2FzDsx9FuzTwaxqSEZdMcXMvgVUMGBghS9UsdmEs13zZbHgaATmUpb6voogRxkt3FLGuMnRTForAcwTarQtezXDX",
  "key23": "qTstR79YgF3s1U8JrFyFQAmGmEamWWe8aAXHbNfQfSmYrh9GZL4pyARLg923VwNs62y7sTQposunpUeJaNuYho9",
  "key24": "9Whd9mvVBHD8HXsssvMrg6TdiatPMknawrNtAsHxT8AmxiLJeeJVi3wwNy3dtJUVh6vr6wmVnhKogHEjtWLY58H",
  "key25": "57XXfLDxyywepWvKkqEW2qvDnmxeDDUYvqkLNkS8RUSpFxwcjvNHkdmg7KFzfuWuVWJ3r2XWMm6T63cqbLoEXh7k",
  "key26": "cPswQnPxQo6ypPzJ1oTxFg1x3BJgMcZQj1AJNoxHPtwKGzRmAWNDZZYEQLP58hq6LnuCoxMTXnU69pSAyQuNu89",
  "key27": "2CN3jznBrRahUguHVB2MRedtzMpsvb4emdug9EYw5qGAx87iH5S1nCLEjMZdjBhZ4ghhq4v2KD62aYNGRut84TQs",
  "key28": "57xmerkp9YtBmyxcpAgcDvDAZmx1VXZqUFyoZR7HLewz4rJLRyuGy72uiXdcsAL9PUZyaH64gRUDA7DZ2FLonjGo",
  "key29": "pJ1VdCLa7tcQKECmLUMC4XNa4yBSx6FDE8zWpEquooza6XCwPwFEWiPAcwMRJbamHL3jRuWWiqL81s8J47oQzgG",
  "key30": "4LEoWWcpy6qTBHJaAzm9Q7yB4hCHH9Bbc42dM1rUjYoYGK3fCobsH87W4gyjqkMyVpHVonoSN8xiHXHJCP9j48MP",
  "key31": "35geBywNMDsqCsT6Wqd7ZAE9TqHR3pDUYLS82F6fFjqnzsGWiJY8mKHkoLNBg4uQ2mKZmmV3gG5KXjqy1d23pV57",
  "key32": "4fx8DZNRjps6eQxo3rqzJYAjwieHHaNDXXsJ7v49RBWPgtBreQ58xcx1jc8vWhkrZC9T59frfMw6gTECwbc3DpPx",
  "key33": "2NMWLnjw2Apyw5uYC2ibS7DPv5s7FNykgk55eeyQNM6P4puxDESGSjzNCZYtSZb1hK5kKo1EX76wr53ervfDjaWY",
  "key34": "2T8en8pbZ4ZcrdecG3F5LsC2jF6AsAqkFjxvmyL9rckzGEi8ytNATEyuzUpAv5pGWSXRL6c3wbawJEYsgPdzfUPm",
  "key35": "3HtCdApnynf7STitNibVhJ3DtaADYr8wo7DZPKd28CDS3yryQhKi7LkaQsN3moACZG8v3humWMbhDC1Yj7bYxHgJ",
  "key36": "42xNT7VmSezwEipxYsEcUkfAE994BJ7qVJZDjRdyoE3c4Z8QCHUNmB6T6xcWRMZcKudDqz2c39dzCf1bVo5RC6y2",
  "key37": "5if6M2iSfTHqj9zRNTvvsU7HbLkSpBL6cdM8kxbxSZzkderB2BigFbTi1FT8tRUjxpgs3odfdFeqFyVUWvBis8DU"
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
