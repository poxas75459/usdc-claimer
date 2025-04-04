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
    "57U8Vqx1QHX7P5U1w5TN5ZAHNr12gxZgMT87TBYaw4ryUALCmAvbn37NCNBv2YZ8FvetCL9UT2ZM2E6DU3ZSx9uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48C5bsaJAxLmnepLfu4f8KgWur1wrUoztsPH9szDwVoD9Y2mDC2e8m3mojxjVgzSPgYfZaCVJx9Ce7FBCrgLHiDi",
  "key1": "2UJKd5vt6svDYyrMFkca1eQSSKPLyLUuSimrTApQH7Yb647JqDUxFfQU395qtK5akugy2MpFGHzc3EBpfVjXkUN9",
  "key2": "4Fs625i3csh6cMD1pLxLzHCSX2SNm1Mo4mjT3Gw3kEFrardjfjjxkFdSvD4X85bs3kjuLCrsBadyZXXdjuxK6oan",
  "key3": "QzsSkRpmJwfNKdVDgNdwQJqoo6yiUqLHM7oMstuoFWESYLArTdgHKBptSda2Zgg8XfsjQiN4vFw7mQFnpPVizXn",
  "key4": "aQEiBXqovkftpqay4eXrdp22VKHWZ7whNTKvC5y3Wqod9kNLrB76uvsZ7BKTHP6M74RS7rGw15jqBWAshJDMb4j",
  "key5": "35EKvEA3zeoyP4qsWyp2hh6a6HQgAZJs2tMDEN7DHbMECC6qNQ1f9yECAy9Rkj8UTxpgPfMP6NfBKmLhkH6rxXBz",
  "key6": "2QrQz2s9y9sDbdnG9Kdxnwd7MbFCJrwzJ83R6ij4hrXVuknaRuUZQT6ogWWJJUshHC3rFkJu7iARhvMD65fevmAA",
  "key7": "3g7iUWf4fAx15ESo47DbcwRt2nJw5haFvPRjFd5VEzzJQwENrreWRiR98CXnTDbT323pC6MGaxYRaZ89X5LEqPsR",
  "key8": "zZa2v4QziW1NXY7cjBN72DGU86CjyifiFiFqFQVapSNafPyf7X63GNGXnSzFGgv6LUgESYMdUjqgxZW9KkbyjaW",
  "key9": "3zyRpWbkuDHQNtHwDpqkmnvLPkU8BCPaaT8dKA9stwCi8Y6VCzxHo8518p3bj9YHbjrgyCoMbihYdyyUVLaTLiBs",
  "key10": "2McsJztHuXcW7PZUhqU8cbUnvsFozEEVBEMrHHcT1JqvBUEuz8xDxt6TF3EA38Bk35L1gqAgPXe6SCvVK6szVofC",
  "key11": "3cUMwvCZ7LG6MS7m54hf3kmuBj7J8V5HfJikvbCSc1BcsXK4M3hm3Zvch1fDguHBzmRYk5FBEEyFLs88ssnnjH5s",
  "key12": "48vP9hr44NqUHMacvobTPUMC9xH3A7aqgMUrE669aUkH3MrSmVHsUkV8CUTCcXWKHZouGTT7pbFopAGxjowkQzfk",
  "key13": "ye78UUYi5etatJg16iDSRnNQN28qM7VDGRkU9ePswq4Zsrc3TgojdjGSZx4EXEfPzhWkce1CzEQKu6PrtGKDqi8",
  "key14": "5sFq8BoeVrDe2YCSPAe75S6rqrKfkdGygQpnYXRsKeFkdpyKYS24AG18h7TPfff2tyo6DhQR6a5gLkojjVWs7XWA",
  "key15": "48ejkraLmab7a1wv6xC4Uys5Hez82KncgqH1dLqcrYbHc4hXDXMoT5KonK9maPniW47umZ2eZXy6o75ievFAg4V4",
  "key16": "5uDpVKfERvtEunUbWV1zuA9moZFA7a6qzBkTPxvctL6h2J1s9r8kckc2s5fwG2z7rS4R2ftSY1U2zMwECktsGZ1X",
  "key17": "Lpy6jMVys4LiUyhNkLCzKTvHTQU64AvMBjeuZYRCaSpRRhxDsxZEXq2xyhxfaMeTJQZVfZQV8dCGBj1U9bESUH3",
  "key18": "22erMYAZo3F8QSv1bA3YqsemoKiASm7oZSeaEkE8mMcLkymxNNwRT1W3VfXJLAjWvJwyyzFFsLdYUZSCzendD24j",
  "key19": "37M6pkTcq2hvJHLhp1p1Xe7BsfCwgM4DW6QPNZ67rdehaJDAWnnoKJpekNbcMZ83hLUdfkKD41ezqzm3Su1Ai8YS",
  "key20": "3cxRtiqupZhWcrtqCKVQhCtZdvEV7pE9vxbeYzTYGYq9gYTdX1UMwENXEVo9H4mAEwYnTg71PfLiUHWiyaKvzFkc",
  "key21": "62tPund2YPTkzVvdjVfzL7svGDkcAmpQn7uCsrviynrVL8FFAhhbttfAkyELx83wv9HhjeBiXRHcj7qmCG1XANR5",
  "key22": "sKx2oEsWHKq5JCA5dVCCezoYNcKYUSo9TMqeAn9aS23Td5qGgGS5zm37Nx8P7X7CvzbebUvqQa34U6928YaRHJo",
  "key23": "eUajSTAYEzzftfnDVT4h33nFQzSUR4RTcAGZHJBLwGxbEf85qWHQD1B7bFWaiXQr9GFxhCLv8BJKEZNeiRXbs2G",
  "key24": "5MEfduEMHxBfrvve5pmCgSoXMYYvtQ1Ec8nbYVHFhn2EzeeX7FnEbc6Z647je5QZ9RuL4izNfcRMDaXnZR5Gedyw",
  "key25": "2FKzCz7312bdWHuwD4qUbkAin7ZB4yMmvzrJswuBFssogTg4e7qR7xLDt6JLggdf1RpAceQ2mRFtLdigg2uiK6RD",
  "key26": "2TG6T39zB5ZC8jjZaEeSNoQ82DPSwgsTGy2VKuWSo6c3GKvVE9hSToawPHLp3M8RUqf98RusUPPy6efu7E5zNCmX",
  "key27": "xGLCNZ4arFFBA1RsXkC6DuQ1KdxmMkDpsoGQYkD7UpXKRPWij54Bd3h6b1kYU8BcHRxa5i423FpsBmcBpkgfmU8",
  "key28": "4iBzBDegiGVVhqtopK1cBLocpc3PzSZTRZB6qWRxq3rdouUzjDuapy3tpRJAhfJvg4Lskri9SiLgxD8hqwFmnnsk",
  "key29": "2oaLrG2ggv4F44ibxbFgknuDtBSx6PCQGFYE4FQeW7ceHpnvjqQWnV8DBTKmueiu1j2ymePER918psJE86C4QrgG",
  "key30": "iz5GDCDUeKNQdhSFzwE5gvR7oygEwUuEE8yyvtePbSz2yxYXusoeALtKqBxvN8LA4E2sT2tD33Tgk8YBuji9R9g",
  "key31": "47FTFwyrPEbASq8Pn2H2oiFjvgmCtQZKJCKMJYTUYpe4uBx7kBDQ4JebbKUXWpHC4PLefdfR7QjVZDSRtRyxAHaT",
  "key32": "33BuZbaRTYDmbXdq5SeCBMre5mWUz4umSLSVS1b7JbDxwP9nGcT2j5JRNkuFwk2rVN1rPH7dLUW1WbyKQo8MjoYQ",
  "key33": "4MU8AUjzawF9GpuhJuMNZjazdskiXYAzYYkdpnv58ko5s1VFw9wv6XRfD3LG6R5Ryw3oZx6SsmL9TXCCFYTKtbJC",
  "key34": "4ZwBvpyqDGcGzfAsFCmH7SRs3pEt1g8Yud9pju5YaUmkLdvTkuLCSPEouMG6EUuyxKPpDE7izGkp995UEpbP1b4N",
  "key35": "3z6JU97fUATmQE3GuDoQ9opGFMEj4D3CmrDWUskWbQrQbCn6GwKwRk3Tbz1TryUuSGMDWVo6SfTUp4t23uVgk3DV",
  "key36": "5kKPeFRPuv7FsnEE8WqRdV4msFrDqoHPpmMs3ViwNuFL9zGoZE7HzovCJHoVNXLpirzTqDED1pAxSei1PugswQX6",
  "key37": "5MXRixPRTdhqGfQgWAxNYSYoXctcdnpXBsBSFwuodbmKstPhUHd5gRBUSeRAsrL2FS2dDWDzLSb7dWLLBBZPmNUK"
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
