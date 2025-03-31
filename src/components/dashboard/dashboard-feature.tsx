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
    "5pBJ69dpECFwWSv1VAFufZZF3i5my6oDRkTAAVWXQJWyKeXCyJUXWxaZuKy7ZGuYG7ZcZm28n8Cyb392Z3n3pQFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmR2xnLGFhSFSqsZSMCwLXZHxARxJDXBTAX3rABAGMdUKtQex4K3hterBpTF7uhtWPn3UkwPSUAPzcJ66JxhQqt",
  "key1": "5mhc92ed5azdTmT5E6nToFcbBsrerQau4vKVQZ24f6MjHQAgMr8yHVsqvJptdiz13ngY1Tyc1Q9bjUvFUqPZA6zM",
  "key2": "36YTPzwDsbz9snJsdoUaPKj9abFwjToLiCoLDXH8Fi8NL6gvM4Zqt7ZfaqNbkNRRgBWEtqEyghrVYVBSMwED9LUM",
  "key3": "AcwXQRz4joyEhYnByLobZdP2z2XWzL3CoqzGmz3dbJssL1Nh9ceyB7QBDn1XbDEULAEg9FSVsq4VFQuVjemsp3X",
  "key4": "2oJC6rMk2PoucWLimi3n4KQAkAVnKkDx765PEcJDXbwM9jkSp9Vtqjip48E1XBLC2svwFoEWMiBw7iLparmFzH5E",
  "key5": "5uUjY6DQ5iQN4se1YAKHmn4f2tLUaaHPqRs4yaJq54Ct6Lqv8bTPYMm2VnmMpaw5p4msSa8STRH6ALtmbqJ61Hjw",
  "key6": "5sV46uURZmCwJZJ76k49Y2BVUkAAhC7WxEKQMRdMnsNfQVaqnQ38j8TY3TNw5HCevbJMosQA1hpvQxz24KmHEtJw",
  "key7": "2BsBe2UwC3gcGXRGcnjyqFmvnfYQ3EKk6V5oeaAaUtXZYdJSYTtuGkrAMMsiqGSnPmkfRxHLnU92jybMBMYLiyGF",
  "key8": "e3Xv2TYUp1ft57MGTtWdZWMVCcHoKDXNvTNF3GgsiQhGMjQbmoyasbbTG4ynyPNK6qm9tNKmUkVSyyeMtts2Vib",
  "key9": "2Qn2xtUDaz5vPD3Y8pJABBVfU9cjDLdHygCAQUsoFCH4MQmNRk7dHreCtf9sghobN4fxwPq1WQKMA7RXrBykbTSo",
  "key10": "4BKEGyYwMC9itKoiHyobcx2Qy72cwzukgmKBP5rD6Riu9YKv3qPVaaN3ojddQCH9cM5Pcaei9ZAdMyutw8HPFsva",
  "key11": "5UUHSerjXoUCS7VUwd2yTAvxNP8bgBvbuKFdvAUtcCLexmSW9xBxn2kT46RAHUsfHLRVg136McGN6pyuoZSSVkjB",
  "key12": "2bFQREc9VJHNvMRnc845XnM4w8JpyxBwmXFeiRjwTeZU7L6oPJ6wpZUJS7NGGwcj3JR52JbWt7KFUdwKxs1Z1USP",
  "key13": "qWZUJySNyX8RjXaW12NhxPuxBCGwyCGUNhySpXHPJTpHvnEwszfCYTYBFtke9xJWSUL93oCUTemZ1samP4WAiFR",
  "key14": "o88YW78yteEC6HEhYmsRsAM5WGNGn7Z619oNtYho45pdhiQyXYzWVr6zY6aYe9Hm7LWEK5TAPpGL165BA4GDqdX",
  "key15": "27SEop1pv8x6GwVyB8dWaSJLSfYSYQSJHNbiyar51xEJcegooHC5xdJrgPmLegDHm1sF3jpLvX57mcjgi2TdfTwd",
  "key16": "rs3mUJweW8wN38zwT1bNvHWXMTm2JbgZjjks5m1rrRYhTwqrRDdgyxeQ35TB8rNYtTg8zKjKPw62cNDRz9cPERZ",
  "key17": "2z2FGRUh21ea6Q16Xbiz26gBqeRC11sFtYmARq4oMyEumZBpdXX7d7Fu6Ve4EwHV7CRJaFWAsyaHitAzqyeZavSW",
  "key18": "2U5E9GBXtGVLVMgRyoG2kh8mP8TqirwACTNcb3UXp3UG3fq81L3p4edXVqhx3N9pf8niwZUdRCvpmBYQ3emhLszo",
  "key19": "5HmgCFdmAyXsqVsi1Uya9CBJCLYyqUAP3WGZ2aXEqAdUiJ2KLh5FY3yjhSnmaqToz3uPy3cqjU9n2oTVSKG6GADG",
  "key20": "5dya6UiEu616j9AduifzEfrsVZrKWx5SS6XG41rThjo9RJyW1ebA6GWFkwswvbw7CVD2xNpJM3JuC9VNhQkrhN7p",
  "key21": "3PhMZMMj1FqAtwvtDdtVbvJmH5FC7gMs9gM29DzoaSF2BLkmYaWxh9SBHkaUbSmBFt3vjcAHz9fyVfM8KYndnzU6",
  "key22": "3d8iJDgC6fDC1Jky7ZrGsJDxEAr4E9U4xGL96ed8ArjzijsStZCmkKuhzdJbLTVgaEBh6P9Tur8byAKnf3yuiZou",
  "key23": "5c8hxFUuuDmcjTsUSGFsD6GvHgugWsUVNsqcojjx2A6UhwoeCLPJknmrn9cMYXh8R697uXhdwzcDUFFYLhV38PSX",
  "key24": "5KZ8irTHFNUG2pQeos586r1J53CUoVV3tE3AqF3ZNSgTqELDE7DYPV6UxjXu77Ve2V3z7KjE2VXTjXg6vgKUghp2",
  "key25": "XTishwKwHzY2nHFzmUeY1uuELvq4iCJaLpA2PRVFvxzLhm6PSNDVW2GFNiuoKAqbsWSfAW7QFHLvgJkaZ19wWuQ",
  "key26": "4Rkkm8JQXzW4phjyM5ocCjuFj6iZiUcKavbzkqiNVXVbNZF51F31mxNkNqR5GXagYgQDc7W6EcEED2BQKAuARrc6",
  "key27": "5GZSj4cg8JMDXT7ReNTQT3qpu9hxPZSRreHXeCFHezbXfoeEgdN3bUZmHwvDbMGzUW5EmyA1iSUFNGjEFGSZ64M4",
  "key28": "5LaWWJj2qNNY49sNYW4ez3x1G3eAiN4cVQcdN6pA6sxqyVTNHc3rBLgJzZJ9stCcC53JWFwDKEeqxWcjThZ3QKb3",
  "key29": "2gz9KVpZic7b92387EatXxk4UJuYubUh5WTQMGGchanKHJubxsfU8HQBG4ouhkq1YTY47fxoFdsk3kgAYhfsfdGv",
  "key30": "2g5mPKUhgMPSVHH9BtJUA317Bs4jNV3VgKSbFkGLmfynDjpit9wBReEq3RxnL7pu8nUNKt9CWYGrYcDDdSwweNQp",
  "key31": "4T4h7hrQi9CDUm5GKSW7w8D3WXoswkwcVqMqedKVzmaS6SWVe3ar5YGZAqjM4cp35qKZrpaTiwvByEHkYCtBESjb",
  "key32": "5cvLNnUe1ajWsuwRKp9Tw53AVwg2WoyYGKYGngYhYwF19MAKedXu9gEbFvTwPr1om4GRDgU7pzzhWCUHPUGomSNc",
  "key33": "tNimJQ3wJgQmBuDBnLMHViqdaJ4w8ALt11VnVhAEZuh6hezBcmUPDJfjD9gCkeFQaHWkgWtwsanhs721ULWQySr",
  "key34": "L16FjYknr3CMQ4mQBvpYV5DMUAG6ajLqbNhPWfFtCvBBxMXJg1wkQTqzheKzKoY15e5bK2jc8gKuKPj2XPtQqkX",
  "key35": "65rKpyDnJeC4w2hfMMBmcydngSPnHLB5fBDFiz95udXsx6v2HHEFxLCdfzZznKfwoCXDaQ3BEYMEbEWRkH12rgr3",
  "key36": "b6xRmsYJqKhMCewKSxAa2MkaYKEbjFQhPPRHxdpKkjCgH56bdZMJ7NrtpA3QUmLzGZB6M1hpiShnANd71chTKm2",
  "key37": "4AKzxWdVgWKy2ECmvS5WeAgTG5AWFggZpQAa1Y2WdjrFFhojTEQ5UD4AVMRM5E7cQekDdZdYraXLhbmfzqZUQYKg",
  "key38": "3LkMEYFN5Y78qnpBQyfT4qPUjVqLYaj4STtvviRLmwm2kkthQrosPmcZft7NeH79theaT7eBK8wLfsHegznE9mBh",
  "key39": "4DWtjkf6MsfE7NavJsYYGa2qGGAeLMGNDisS9XkTMzYkGJVgLMnasvYSwZYGVQLwe3b3VxC5w1maWGPKVkPN6hUb",
  "key40": "2nhD56XTqqYv1Po1m7XT7nTM14kWunr15Ai7gCsrz4zbRERKzACLJSMztnY6rfrX3HfNTA1M4otpCdZBqUCAveT8",
  "key41": "3vjjTZgniZHxHU1gJfGS1nW5zfQmNVxpG5wnT4WHCKhJ8mJcoVgviaV8Vvm77UsTQST1FDMGsLBVjEy9X2yDtnxf",
  "key42": "bTYEMbLVZm5RbxcjscqxspRYD4eNwURjyDZtkj4M63zMLacCm9x1fR4jJ7uW5GsByYMMTLGtUVFEYNoz3gQGqBV",
  "key43": "2zkPvBH6vXMxhAY1DKLdphtFRGNwxwg5tGDBiA3PzRxxJnJaZ9i4NioTBywi3CUS4keJeBbR44KbVr6WDJpMgLDd"
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
