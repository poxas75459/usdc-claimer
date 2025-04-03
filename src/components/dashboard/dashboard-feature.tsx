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
    "3cHyqZQoDArgSKZNVNmY6AjnJu8NWiiNy3jQCX1pFSo6aMR2fC51V3Dzw2hAuKLwfgab75uNs9CagwDjsA4KE5Sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MKu6Wx8STmDL9UzCY5DLt4M9bXDZEQqdAykF64HUh7THRr9ivLZnLF11hpsJSJfCZ2B2r7XfhR4WLTVGoT4zuKh",
  "key1": "4pv24LZiYv6UiCMMBKCkGr5zBk2g5F5HYpb756GASW4EoETYTsMJEHuiwvbX2sTpt8wjmncKHJoQLFeqSozQTpwp",
  "key2": "LXvXjyaD7zuLi5qwU5UjP2S4zRvj6H5HFWhxTDQzWq6YL7EDrQBBDW9FPZpk8TpH5WVGPcLdxUaorAb3njeeyCp",
  "key3": "6yRGc5Zcu5H6JZ3qx2T8513LfBaVN5wXxVeATr34vHS5jzKFtoj8LRH6tRyyJnBX6o2CRFC5Y5w862375qi2nSj",
  "key4": "3HxmCiVDhUb2y7mCFiN8PqeCLPiy8cmMP5owh7H4kAScVFhXi1q6GfaQXRE5hdbJXoGCRA1PFw39PRCKJogVrYJM",
  "key5": "4gH7UjybJbMRxBd7zUxCBsgTkEt9LS77v4PjAguCB2ZopV1KwHd1SUYJNW91YRRKff2XzJd3ec21himH8322FDk4",
  "key6": "3sFYtz8rXvEMQXJK8jGF4gujzEFcjRH5JfMJ49kj92PEthARS8HPZKz6XtsuNzpc4iKze5D4bdp8BbjZsnazDV5F",
  "key7": "2tvqihgrLX2puXemByRiCCGxMKyxYFDN1sq5ipqos3ZPUGXaLv6TPVbyeTBgPnTEpbMk5p6oh134w2k5yFEsauJD",
  "key8": "4mPLKWC4bD6ZbxiyfJt3fx1PKerYmW7f4omfNCvnGEZgr8BQRoQeR9RmVtaebsqYVgwcatz7WAtRc1q3RyCULu8r",
  "key9": "43BzuP7EotSrXwpyqLhC5JU9t3yGsmsEoLxxXMnuXE4jatJaZZCmEWL4SkejvGApwYX5D4zcU2S2kDAJ8BqkQXwG",
  "key10": "2safZhb4hR5T3PzqGmu4VbDsTRPqAQe92TKEWg8o3ascjQhgKqGojVKHrToB6c7foBmeb6ZioQSKAvZHR1RL43Ak",
  "key11": "4VnyeaBbsrZun7L3ZUkYUsiSi3z5XSZUJBZ7xjChCseLPyb4M74ohnkQmdRtVr57RQ5JpHPyUroVpN62ztpKJfBm",
  "key12": "5MCfeeiR4jUnxNP3eNHjqxZJAX6VCanmNmSLNw6wz65kHU82VREAFGUCPkqyvgCrxym4tgtt1AogSd5Wx4JRQ4Wj",
  "key13": "4NdTvNrit7RM8UUxMMTgQVYe2gAT86idxF1RRAUQnrXVWpZfCznH2oY4LGRxAJdFTpbTxeNtr6XS75JKgW36Viya",
  "key14": "2yUm7HtYpk36eWvuLGUpEoeiH1GnVoqErYVTjnqMStZg5nR1u2NG97eMd7rV7H7UsbvohbFPrwe9NYfxMnfFGCJ9",
  "key15": "3zWFzKVKm9nLHxcEFcqQVJwz5jNDoScXtpQF2SHJkf14FC5NDLBBapRo8A686McBuroskBjBQYAcbHj3bfHztqvA",
  "key16": "5ekfgA21yaNBdqs5x42vyX4hgK7vptDmby6j5yFAy5FgLnVrEuhoLc21UTTzf3JEA7vNWGj9fDCYuCVuUuWGKdoV",
  "key17": "4U2ZWn5yhdwkSV9xYjaNEDgWe32CpTfm9GuXj1UBS3UMab6yRNgeEZCf9zmBM5df8HNsGSkc9396aHTP27xnLKSZ",
  "key18": "3Jh2AKrTUybpBFRdoVKfDf9nHRpJ4HwVMBXagqSXhvsSYeb77oCrHveQZE2sU65kqH9bqp6mWmZ3g8g4jSbZ6dVc",
  "key19": "34ZbwHKCujULjiKGvMvNyf8iqSRfPTQ4LNtcbLu2TDxgnNMtBXisv6HH8oxTULYxohzuVKAdAwHXCstmZKwU49MU",
  "key20": "31o3PMziGdQ5V2tPGQFitQJqBGAcnLZ9i7Nj4DVQViDTZ2YnCCTkdGRxs6mCKBektM5qsYzGQoty4uw1PLNDUou4",
  "key21": "3PKVCiimDWeNFNGxJQDdQ7LDt8cgeuVVLPFtLpTaiymFV9erwPZ8yFmpzsxHS6thdA5g1jbsMHLQcQRmyEZDJ8EF",
  "key22": "sigU6pb9e4kADjGGk9DcbKG2fUmKaapQ3vJggHsZeNcYaZKrH4E7M8uPyfgZr6RrvSxBCTK37bEVHkxvUsaVBsH",
  "key23": "2KfxQXthtW47pqHD3x6j5mquy46QjJWTkHip7V9DpM2zBtBJcL5myEmU3NBH1MBBEdCqkd9Q1yj47ijqJGmcCMjs",
  "key24": "22cyhuc9sRyJkk2kMeFuEd1NQe5x4hSUGBthAuTko3QEDYqsE7FoEqxCdMHvTy6di7p1TMRjQF4eFWmiDq9rhvw3",
  "key25": "41JiiB2NFyAYP1uB1K6hfiD4UJhL7jGxnVco6YtjgkLcTxBzJX5m7MU7Zzx8nib3pdMZhEKNVWByaSPHunVSUav",
  "key26": "58mt87oXKSWprZbMuGiDxNxMybE7tQgvUhpnHyFHyc6aoMuvN3Jt44pvxFETcRGXLKT9N85CKC6RWMb3jnNvGQ9H",
  "key27": "DQo7gaoF41yP9sm6AErYMfWT1ijYnUFe2z5HnV6iav9AqKFjiRSFheiL68NhiVEyWUiPaX2EAA5WcvmZjBBvfsZ",
  "key28": "4Zr46wAKCsag1FUAkFyVRT2mC9xZ6U1qR9WpiBhKNA7MPnJoemprJ3Are9WbaoQmDPks4BCk2PhWKFxANeaVogc1",
  "key29": "5ZQPwwh2NNdoHbon3i2XoLfxoG7iQT45P7kErNuNrjD4m67zUBMnXauFmXBNu9oz5eQyirBgKSSVWCSftRmXaVWg",
  "key30": "4nfUQoRPD3x5VutjYWtKbdW2okpcbzSuxgSKh972j4dLnQC5DvwmSRuZKBf8u5pUWkZgM6Rw2wb6T6N3nPfhHTUM",
  "key31": "3j6FJez314o1FdAd6r6YEYRaroTGFUyryxXepkzn6TgoWGfStD8ZB6jhVLd8M29yk9gmttrixMQ4dsHVizqMMjec",
  "key32": "3o2LpvGMdUWhchNBzZ6Sef7tsFsdbLxaHEcmRgL4UP8v6BEgP3mqzyQ5cHbDcVKLrCbut3TWT2veRffkoMjG4ntk",
  "key33": "3qGDgQpiGmGdZwUzQamRDvPJcd3coE1nZ8Qm6o7m76KU9swmHMNWDKDVJpGoKNFvJcWBiEurDMUzx425wMioBPC9",
  "key34": "jERFRX4MkeC8QeRjnVEZLsRQvEP4VPps2o29kmyG3DBSpisSwkRxtm3KtDcaivy7cRPEMSUEBmZ9B8bFXB6muSN",
  "key35": "4koZDzbKqSqzYnLavjPE3KcSsxrf8dkYH3nZZwmaST2BCYzmDoHdrT5AsmhGvYtP1wgbACfCdaUPdy5mtVFh2aHv",
  "key36": "gc9TPah96Zsdd2CNi2n2JokUTBcqtcA767y4Ey7bk6eaUbyBL4JWpmfQffGTVP7FwcVbTdj4qA47XKF5rrnvQTK",
  "key37": "f6PeyJ3ScXXC23ZzPfJ2t3bY1ePZqDyRwhmTUkWP6jr7KeT686W5tQiQwSQ1wLYfHk16aTFurDFhBVX76xE8x4y"
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
