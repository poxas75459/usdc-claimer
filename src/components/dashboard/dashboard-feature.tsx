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
    "B3YJwJBa3937wSTRpYqRtYZoTdzL3smGwNFYVBzbzyBtbXionkgtvfzViaCeNqm9aDfbSNBnXpVmq299iCxHpTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vBxNdM74QBTEQ13JDffS79MHd4SPvbsrsp5EzbXjZR1JSsjMrL7UQq2cjJ2i7D2yDFZiw8U6xbdr88UxmLcdt9",
  "key1": "5kLGxVryXNchaoMoZuCc1ZRKLeJGit1eQ6pxNEmSAGLEPD1sXukQ6BVnDzgTocg1xso4JkGUiyBHoBgm1mE844zd",
  "key2": "523o5bE5fnaKJ7QJYjmiS9DiEZx3RkZtfA2uA4pXYDzUrhSAyYkiJaf6Q2AgzzMqE7nG1AUNUxjzJLafXh7jb6TC",
  "key3": "tKoqCwLzycXki4Yhy3MTrcBkTpL3ixrzXmFf1QBX8xpXyVCsjgTjjFfpvnZPqRt8CuV4h3NtWUbNGhP2pw3smk8",
  "key4": "2XqefhS38BAAf4HkQB5BGBTUpuAZV2zXafoHBHufUp8izh3hXzSGAVs687EJBmAyKvc71tpKkj83gn9WaYrD4HUz",
  "key5": "2baS7YEYykx2Dmc62WTAHgnNV6cFgM2nuyYDUTz7e6WQWCpZL4yf5rMUCQ9gb6uV54mKUiujJG3H323ZqDJVCWUc",
  "key6": "SpuV6DzkibAvDgAY1BWp5okqqZ9EwDMdCaarH1eGphg2Loj2bX1M8v29fsN53hGcM9ERkByxxt1Kgxx2NN6k4Vu",
  "key7": "3zpsgp9XshCK6dCdN7GFzj4kgSKHZPzE1baYnR5UZjusrvYPS7nCBeDks5jd7Q1ubK7ivsmxtr7PUnvteRVtmgEt",
  "key8": "2uE1LQ3WDmC59SvSBhDt5BXmvfHz4dtJoqE64QL4pc62w11XEouhSrv6iVK75UguQswFB7zN7zkWNtKE1Ly8hR9h",
  "key9": "3Sq7hoT4WKJV4HYD7sASDEuKcPEPagPMsDwTcHyUUywZ79bzxRqezXVjuShSu8jQFzZYyr5Fp5irxXSp3FaJQ5ym",
  "key10": "3jmPueJYB13FBSSuxgH11P2XsHBXLHLo5SeTtRPShgZ1YjPtVnDo1AxAYa6cWJaD3qEb8hFohT2YG5izr1j5iALv",
  "key11": "3FvdXr62YCALsqwMCGV6nce8iAD7pNvKVyyVQi6RfT62ZC1gTS3dcnk519AMQ3JwfMMRFBCGVWPnzjrWmV5FdG1s",
  "key12": "5iLD6WHk3Utsxs6SWcoh7YT6hgckg99BUtF9W84THzNiWUSheWitoSKvjgxqvPL6zmmoMKU8xpj3cR3RkRAfiuwd",
  "key13": "4tvVXQ5dq8LfB6oNgBKdZ81zw4yksA23ghFGe6zR96HwYjTuCpNwPFAYzkCHDaFULKo5ftaEKCJrfG6vvYNBP89N",
  "key14": "4SMyLD5ow9QTEZ2o3DjtVJ4styPGGVPiCTgN8sKrFZcQadbJkKVXU4u2KJKm7A7xiWnWktGSkewNCRBZwdqCZBPc",
  "key15": "2oRrD8Gm2jKyEVm355xWd48HzLWWjNMHAN8vpzYzNXAWKWKCSfP9KGN5bTJeXVGSCWrGdvWqVtrCQXF7BPhzvsnw",
  "key16": "2NDWft9RGfu9H5MJ4q3CBEW2Ac6bZhNwqVEz4v8KTcNNz7R3DUE1QLvUxVFXADnLRdzhrV98cFGeC5CWCNAqzsXw",
  "key17": "4JZv4RqMAojxgPR95jAuAo9TtwVeUX1ymmvyEHpBHMNG7L8pVf89ibLq98KXj35pMPJig14sJjTuH83w8mswhU8Z",
  "key18": "4befTkrFgSbyGfK5Co5Up5XbztyDEm3p2GnWS6tJnJnixQ2nxpgNamxgC6dC78xB4Zqz7o8S1q8v91PbDpKKWrQg",
  "key19": "5s3oQHdvWpW65Emgn47wSYxgQJcNutCJiKoQqagtof4byux3v1S6qcGWePVXqBVMWqHEYivc3udzpeu138DDYk5c",
  "key20": "5ASUV8NkGep234B1DHhaYBCyd6t8qktdxjimi3dfHSypiwDMbh3z3pRkts4bEWKyt5dtN5qCYdZfG5itxD2sDw1X",
  "key21": "3JBppQ9PnLBxBg5a5VFeGqZwCv3qqScGvvJBYJkrU3A9jnr2orqgXsqmVKPAJHCBGSRgP65WqSeiPKQ2AuDkHRFr",
  "key22": "2HVgotb9nB2VVaDpMMadKKCRhf1ffcDe1rRjBxcgsTDkBJrHn2nTg1FFdY4yV6ExjzNuhNjkkfQTnNTpRFAYyA4p",
  "key23": "58B98cdPYTqikZDgqJJAaBRiryq8RVFYiED3G9nTvZt2HUtC5R9XTaUteYRXPLarDhsNeFeM6bj1ecwyLMJWC5kz",
  "key24": "vZPDd6A4c3aBoHvYGnHW5PGyA8kDTUnP3aoeLjqbgknaz5TnVh28wuy6MMLALa7KXohT3ybmiuXKiJr9Zf2JLmD",
  "key25": "4xLCxpamC1T8tSNZAuw4Cn6vF78ePCAQeX1a4mfgnHS7HEfGyaiw1qHkXNgQe4WM22TxDFVbTTsCZC47nHbfVhAR",
  "key26": "4s2hZfU74JyPypNSvXSJRQUrXS7vhEJgSwifMF4GZnxxmpnKnbweLXtdzBH2HdSaUwMv4S2KV9rp3fvcRnApATQQ",
  "key27": "66AGkYb7odFRCNbaNd5ASGW8VkcE3HHoSs7wmnhdYXFHCx4KXM64fLsiiacEjPct5Eyznp7vkktKrwk3Yxjf1CHG"
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
