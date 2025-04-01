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
    "stpgvFFt2vWmc1FahBpVQpy8ZpZaTy1YhiijxD5716fpdnYnKisy8dEkUESJFTBLzXbZsbBTGNWMpF1bPJ3yYrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "koDx4nr9eRx43WJH4j96iwNNT5YAsGGxCc1bR8A8jVJ7ZPureRfSbCEwYZXPA9jksDHSHjXg4D4ogDZUyeSewMs",
  "key1": "3kCC9ioRHQRRQ8TrUtCJv4QL972ekw7EfuqxaN37YKbX8q4hfd53vksySgYBGQ1Ar7otvd6GLq2aG69NXVGAUjHR",
  "key2": "qfmc4ehRkLys8Az2fR5tT6jZ7sk1HdtatLBiL48tAKkLuNCaZNcLd3w2f8xHJdEnzwvGqChjtdPHi4nwTmPGiL5",
  "key3": "tTQQvcdqZFsRYvDoyoi4gTVBbkNmep95nLmeBFqfvxygUdDEyswrK9KuGN82CjgXizcXpcGrywazLY599CPt4ck",
  "key4": "XpMHcXZ3WACtYBZam7UZUN5FjS7etvyQvEHQNzYGgEhzQyq4GQpn7W7uZRC222esR8WvXpgdVRS3gqy1ESpUx8i",
  "key5": "3Wxcux6LxJPYsgbGaeayanRoFPbTmDQ4jnNG9UZduZyC8B4eVXwrLngBdo4gwHiFxoSCZNkytSQT2B5mGjqDDX1N",
  "key6": "4EHBrkPZ8H5AHwsg3n33VsoQM3USnEzRMGEAVRE2RZKEm8v3YeqkWtPPdXg1htApA6TUYyptCdWdVGe9QmpiV5Z4",
  "key7": "3NRdXxqH28JxEXptNVSNMWswjAJJyx2jHiQ4wTb6SU1SFaASLc18e4aztD7ZCY9eRHyq1QZAD9JNko7JxoJZA95C",
  "key8": "FEZRZqSXMhM7v98M1WJiFJcX1WGznfo2hj7kQGcPue2DNcFUuFv4XQDZ4eaqMbUDxfLeH3uRprn8bkVLexeSM9V",
  "key9": "ZwcJ9M3ugkGGrNW34g4L336NZvgfkkt9A3TGRoy3USuMpK95T4CaCMNKgV9F5BWvn9WYjf2Skq1ZuCDehtrZWc6",
  "key10": "4UBpa9xxLSgRsjmtAwu2GBAmt74GahwGeHCh51eKBMqEZARUbHY7wiS7wiBUaeJVCJPwdumATinj1hJcTpz4rhVE",
  "key11": "4NF5ht9Z3KYVAR2u7nUGgC5ZszQLzCqRPDPNWre4qGBPUgGA3uUf9MfC2szckiLWRc1iY2NFRguF5VfD67LG8GUS",
  "key12": "44zq7YuJF5uBgLsYr9XGPboBnpVwnVX92HMCEwSxLRTDzRg2LW8NAgbF9JM55qosYDcxJJxZddyGn2pGxwfHbA9k",
  "key13": "442y6Jh33cYzaeo4EV9crDkvNNzoMnLenNg8c19F9zfQsTjsU3zxgGrv4yS5aR4nhw97Gdn8tk1TroiebP65YZ77",
  "key14": "4rY7RCe95WoCh57frQpjw4GszHmAxUmy7FRNcG2g8b1jJdJpaDUk4V5Ar41eRrf9LuFjBS8jwi8xMLPyyPuaAkgq",
  "key15": "4KAYhSm8JAmRQCd1ZuPeyN81WzNJ6eKBSw7M92Bv8M3JJyZJBjDbcJh1TSCzDCJkxMZzX3MfK9o6Xg6tjh6Y5Uqx",
  "key16": "4orbpa7iwa41dTbythkywPf5AJFBFDf4UCkRxo8aU6VK66Gyq6nDA2BeRfGvTR7CbforoPsvKsu3rEkovnhza5io",
  "key17": "5N89jAsZqmxskv5eDBq2aSAmPRNMeinpuqKAQ3JBu5y7fRW6d6D7ZAwLtjtJDbnp9EgE8k5UVVKFQCZ4LFnwARCh",
  "key18": "4PjFPCEusHMYa1jVqRst6p611iC6vJMsdv3faGufEvnRzMN9hppYHJHWpgj91DmdbHfJFFSizNGtCPPkJVzyYPX",
  "key19": "3YHujwZgDUBLvUMVWof9rz7ipJ9v5JkpqGGSRuqhLCaJyzn9DPn7DXDvPE1aeFhczkv7oxk5DW1xaR2BdFYzWNA9",
  "key20": "5wgU3aHgo1Rkpi4LijQ3cR2teDnGJ1mmGoZnHwARwak9T4UbkumoGzP5RnqBuPXqE65ScS8irSKwGA6tS4DNiiSy",
  "key21": "2ZPzQuCBAhwwQJ7eKJ3g5AWMASc9FxAuWSNrQFi6yCCZ8GnCJA5y3FnjCyoJyShsaKXY8MKiEXLQ4eiJG5tEZfaW",
  "key22": "HiKhg8oYKTwqY6CTsXoB2pyE2i4FDp71kC97FZ3ozjd6wPUS7hrVT2GfxL5CF8zpC4dWo58UxSN1x9AoX64xnW5",
  "key23": "2NuV7scpP1XkPaAmw5HNRjL9fuuCWb5L7LgjaFVbwK9q96tc3EaiTEPwRNpfGJaqkBmG8AZg5datTJJpHQbuUBA1",
  "key24": "ccZ2gDj774Rpw8gmiCqNFJ7zmPXpdaRfNih9R2fgFto9RM132QPUcNa2PVcetswX9frZemXd9R3hihgcDQB5yyb",
  "key25": "2bWr5PqGPEgyXHEstfPZoocrTAurp8T5JccpS61JSUqBhmbxReaCE2Nnk7XpE6Q3C1JhbR5bdm8L3Pg2j3WWeeAC",
  "key26": "2r6HG8GmiB8VxjEYWydoiaKU9TdojYj6EGb6EVpKEnNJK9CRK4K6SGB47piqPESz8p9n5LRTSwbwczjYd5Dsgwgm",
  "key27": "4PMn4CPfp6cgJLWcJ3Dz7LfcDYb4xGu1pi2Ae6WNy2DExVfDYrdg65SYyDBi7CaAcrNjKuGFP2sBHWCyBzp6cz4u",
  "key28": "5LFuqZ3XePFXnph6UKSsh4MqAAxdWUYKwN5d85Nay9a8GsRrvepyksKu7oPwzDriTq9YNtT81cHahrMD4gRaKhYd",
  "key29": "TJ7yCqswfXN7jgf7hymbSdg7urcaEbSJsn8ypiGH9APyU9DttSZx18PqUNj87SyZ8fDyKRDt5bNBoEVxYubQVVu",
  "key30": "335LC6K7za379RNfka4BJjasF8Snv6Ts7w8Q4u7uWe2WApqgT4P1vRQEWUpkWDHkWtcQQentJiZhh9FX7LG1TQuD",
  "key31": "4Bzoc6KCEPCqRwHPYzmhJQNZZS77useSUVp2GTkjwLsQgLmBmtqBWz8BPvWbxBGmjzMEBnE8tqAuasjfr1Fif2oo",
  "key32": "2ELrivvT1d9RHZQZcKbLf5QkdUMvPx8MJoXa4DU1SGYCVJCktfUboZVP69jb44HSFeDaDhGgVhZHcWQhaTMJMhR7",
  "key33": "2Y3m8CmRTyV7fjtbEpnLYtoPruZG1YQCt36UkkXUs9Bq5zJGFUeh8EUWqgWvq4A8uPTy9LG24kWebg9Noa3rfdwV",
  "key34": "3g37Zp4vLRGJ7pzsqCaQYsc5XBCZhCAYkxsTwpLrGvtwHbG6mMvjvG5nvRipb62vbbj8ptscgsftSATHs7MmTS53",
  "key35": "4YZa1EQbBF6v2GH1HWNXPuvQHzqNP8F5LjvZoay8vsdpXuoCuenNu6Dn4sgDf7DCAai6jYoYUk9GmJ2dHzoyermW",
  "key36": "4wkiX4GtCgqCdCTE5cKAtuRgANMAtbpzeEPD4Zd7fr6zeKwvr6CNiFpgEsxPB5dMyJ3Uf8nK9DUd6Wk4fCLsxv6r",
  "key37": "xnrev2NgHhzbcoma7B6B6a3ipXtkbat5JxDp3G1DkaRwqyRXJDPCDBegtPxhZ4otTpY4hw3GqubSxf2VxR9Y14e",
  "key38": "3z5MAJdzpeM3jZeeKrSKB9uh9S5jGZxgLxibpUp3hPgWA1fuysuvqKPZmpXpNdWdGr8WUf4JZg62anuBRcbq6rim",
  "key39": "4Gw7criPjS64cbkmKY5LtaqPXxVVPN1CkcChWBVHeHDqQqKRFsuEux8231QnVEDfUh481fBp4mAyJ9dr6eSpxpEX",
  "key40": "4rGSw6gPSSdYTU7ESaeZxC6o1Av1MZkfkH3LViqin8nwixqfKtDZm95GBhqaPkj1pAmxN7B13A4yeRyXxLwei2Lw",
  "key41": "2qRY7sYmkJogqbD7RPkPSggFsLmkboxPyYLcW2MWwJzxe4RbdBx7X7eksRfBevA1zZ9q4Z5FZDpzVNGgxJELonQH",
  "key42": "4HFrCCaidCuKaVgaSjkrPu7WcWAZDnTodHThSSL2J2jZfngwjbL8wbyEWoVpb7eCuSeA8VWN3egWPwDCgW7EMR9U",
  "key43": "nkHRVQxWimx8NU2tmAEhd4daT9qXLVW3D6D7Dp32viC7YKeiyYgRP5yEPHA2GdzQq7QGwkwxibKhuQf8yL3eGzr",
  "key44": "m6FhiJyjxyA9iF8VE7rXuCRN3ydVcbRN7owwRKwGFAMqgE6c5iDTx7wUKeDikGLac33Mp5F7UpFGnX9TVLs9axe",
  "key45": "5T8PbDJqpiCaainNnuXkszj98TG6oGAjtV4fEQi5T9LzaXvRnfqJ8ta8Cqnerz7BpBNGUGg7J9oqApVRcBGYVvPF",
  "key46": "5STR5G66MnRvQRsQpMRKmzKUCDciPhmtwSqQMNNPnQxUwYHa596X7WXYRZ9qXLnLSG4t4mGkjpvG5dBTzDt5EtP",
  "key47": "G9HjossQwYhm8yeXcKHtYNtsaCQeYTTvbJNCua75bp1UzsT9oWMAey6wGFS963B1PgSwJPK1y4r5Nxs3kTioiMX"
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
