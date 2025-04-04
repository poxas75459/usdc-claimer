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
    "Z9Sbau9aLKQmTj4oSWqF1fQp1VkMNktZ96nJBSvkKpFL7aFNGKg2WJL7ZayfnM9WnMEGbpP4wBX1es65APi2SCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jtrdt19UUvB5HD9AmrB9xY36SJpyfUafs7QaNfR3tHy3CxTgckysjQ68SnvwJEqHCsYuvoLoHwp7ztGqu8GjncS",
  "key1": "m1EEoa8ZM75ZveCVP8KzubYSsH2XSodsBALTEzGd2LrswgCnzjzb2ZdaBCXTVSq5t9b7cz67ME6k57NB1wGNsAM",
  "key2": "2YbGVaiJBC82ncAAcuSDqRct8QNBWAmVPBKTzaSmHaULxEUbDMr9bmsCVEe2QTVxujkV95nNZJ6Hbx3wNHNGN7oz",
  "key3": "4MbGPMWxCP7Ni5BCUVLFff5N41mD7rS8YHsYYTfm7SPRh2MdQRcoVf5dRo8SPnBPXSB3yM5F7DGTtskNgp4TcgGs",
  "key4": "2B24zgKJ3cRNkGShXst7UD2TT5mthWThpY9Aue4arLf6qZZg8ScnCG1GAEYeizpq4atruohhDbTEmXAEvNFanbqt",
  "key5": "39qWn6Ac9iyvQzT5D1DCRm4vZZgkckaPABzbMU14UbgN1hxksBjx2ztpsxTEy6XsemhdN2gfvXTLDmhmrhT4ayWk",
  "key6": "37J3VH3U336nhWVjTM1fKqUn5ThZTmKD7FRLU9XXM9LDy5BJsh1qPRYJ9D8cTrFm6PqUMZK18VAXUTJW3A7qVct2",
  "key7": "428PyUKh8gGiHb1CzgJ3ukgwyyFreEaJ3kCqDtq4TDERjBzeqACjFFJX1AgEnUY8ihxtY9KtQWC3aD8nPcYBTHd3",
  "key8": "4MkHUHvTCK2C6fy9PFcnX967Go94oRiqvWU5uJaPAXXkn7CaErNtjRvr8kFrjoMnGDixjn9vNkxbe6y292XXEv5m",
  "key9": "5aVwrytN9QSgTosZrMQCsJyUxExA1xusyP4shibF8orixZFvi99HD6fnKBiPsTDQomRjy1jpJUMC9rq9Fx1n5Zb6",
  "key10": "5pmEzd1Db3s9QkUzNZA9h89UdKAcxDiC2wcnhto9QpxEYYYTsrnasyCoJHs4SLbCVHfc32Jbh7Yh2vn6vBJXSWgz",
  "key11": "4aCXmHeSX2FFs5ZJUx3LfUvNfeFhTZxEN1nD4g7BtYsy6hHz3wKRCBJra21EiDbLyKRt326NjrSQC6Jm3W7Tgjku",
  "key12": "5yprrxgCTg274hWjGvEoJD7T7seFKySi2BC32nG6LnC4R1Z2JhCZZphrCV2T3nQZkbfczpGoR6omsvRW8tShtjRf",
  "key13": "43fDgLE8GgsSiLYg2MpVsK3LxehaczQXG4tA43HpacjBmsZwamwDeMw2SYZpqYpTavdsaBwERkAzzKB97mfDB8V9",
  "key14": "3rFpHgV6Rees1aUNby73cazCjggNTAycftT7qQoPYhwPN4iqqR85TVGngetZjf9M58qcrDoiUFT4T5n6qiTEibxJ",
  "key15": "2dqJ5Dhkx1RYddR2mqz3xChEmVgFxjQqMX2mPpqwSgaRFPgGFuHP81RZSNYMYNWgPCPK2Ert5oPJ4rePVfvBmuQk",
  "key16": "4hpuAruWauyFrYB8vjbihoPkouoD8RnvyykkJXxyRwjsgMz45X3ujWaALRQMUWrbfjeGv3DgYiqSoDK9XggxWVw7",
  "key17": "3xGwzc5ddgiRZzfo2uiucg2JoBuqZNe79p1gXp8x6HLVUXDSXQuyEVCucWtuTeo1tAAyn9qD94aboNWadSjKEXvD",
  "key18": "56AjHQ9riPUQRcp7wh4Cu7mCPHWwHvFioxDgFZ6cTUai3dhYeUY6YLmFnSKPrPkUdNsNdf3F9iQbv9bYHB1GDiak",
  "key19": "4MLDSEJt8vdfsv4L8vJZtUvE1s2swRryEnyVZ5ZV7KBqWHsdEE1UDckBj2bfxEREnVq5q6mkn88V9TzLg8EyQxCk",
  "key20": "5x18gaH8kATzVHoRjmJQaVxYRxNKDEu33doEesmM83Co6jnuHRiNtnxjfHykdSM52nNsbk6BpcLj51hJ4z8ymrFJ",
  "key21": "4mJyffHoibyXftSsr7LvuD2gibZut2oyWXWGfPVYbLLNA64krCwze2aqM4Wx7FLjQET3ygVtPBN5XJSXoFyubPAk",
  "key22": "17WHVwc2hy1GDXQtDaynwoPZjpnqNR8JuTYNZY4qKtzdZjyadsmip4Dek4duWGTK382ZbKuiyqjtaDDd6zotnN7",
  "key23": "5L2GZTsomaPtsnjaFD43zsb8mfaJZNerYyNoiQAQyyA5LSsYVTEwb7SjV8vhBfw39j3SGGCbjJ21UhznGgMUu2DZ",
  "key24": "3weqwN4LpQ3PG75ZMKafJ9DqTDkgjnSKdC1HgLQyLoT1ow8ZQcg3dDout5koyhCbcBkc56U3HbZNmbtPLcNzEroJ",
  "key25": "5U5vYN1YwAgkj2M3GK7VFWrLXZHLQV152yB6GWZRDCrcsFdbeP6LfVfLSrN5ZnB6pfVDaduGpEBrrXDU4YrUbXkT",
  "key26": "6UiD6WxdW5mcnyYZBTCFkHapaHwSS1v2vRn2bGfCC57oJa56vgsRez1f7nForpfFQmU4cjsDVtfZ2peD1NkfED4"
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
