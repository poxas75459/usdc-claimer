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
    "5eYYFpLxAcKUdi8SiZPdCvp1PTarNAEv6SFQFmMSG2PkgRxJbzF2wJvEkbG2xniPsra1HXsV1UTqz5U4Vt4C9jUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aTFSd5UPuUpXSZLS6M16vJoxPoCwRrTs7xhdXDAsirM9mEWcK23sTe7vybgLYDtqgN9iJ42Tao3daGjbJ5tTQ1",
  "key1": "3qR1MegHWJ9iVKCyQEnkaywpsCJUtsXDg4heS5vp8t8ERxuYxAik1hsJVMDbKmzdDNvQqqYeWHNpLh8LCf475PNW",
  "key2": "2sugstRGhU8ukkd9hhwXseEbCfdY2xvBJCcF4diyKczEDeNVN5HkdwSsP4VKoWpn2LX1UAG4zBUmamLYmekFDav8",
  "key3": "65M4tsfim28THt2e1YSiFNrfoe7DDkTotugC51vJB6mRtuKwxbpdbeVGFFhvztwQBKhLkciBbxbYy6yuWDs7WWHW",
  "key4": "66sZx3L3CGDQz2rbP6zfmMYAzypE56FGUcWbLvv1Rz84sQY7gPAxfkxj4X9Meqc6wjy6tYHCeEQ96C1V1jHtUaiG",
  "key5": "4LYnmhfPvTAzcCMWAsLX2pH5Tj8tTUhuuBE1qC6b68K1oMpso8FNtEUTgd3Sxc9f3CMAg8uCbXU4EyfN5jWzg62v",
  "key6": "5tpZxnsrQAmBm29sadeLq4DG44EARthch4E1yV5rTnoBqPChxo91p5PRVAkipwKp8ZwRLjyGdRMBDvNoEF2eaA2P",
  "key7": "2xjvHTbEv85DknWEFoNj4dQimyJDcbwTifoxsTRR4Y9rbYyFzBysfMWkm2Nepthtte7kQTHWm154WarMH3Xaki3J",
  "key8": "4ZmuoSenqj73o3A1Sha9NGYeCjZD75e8jvLqoW2sVCawJuS2Dz1vCQqZPfiij8YfXi33K1TvArHWVFJZeTz8ghUg",
  "key9": "3oSUkve5G39NKhK7hKnWTENAEm7WwXfcJYQhyuzMchMxgFyxJvqcG2y9aPd3yNy9sVyfC9gTFLUmrfkeAkatgQqz",
  "key10": "4RinGqRGM8pEudf4yBrMYKJurK6tnCkad4ifLw1qdzTS6xxB4jX1VY6x5VPf3Xx7x5zVWB98Li8JoRs6xD4MXAhb",
  "key11": "4dbT2w56ozeLb2mtc1ZkxPFW5D5WrRyum2rgnBcUALu3HHUhNXd4KGNmQhnprVSoF3YM4BXAYCZnSis2FnpYqJF8",
  "key12": "5kqCSvn6RS4umJZNKAd3yDTvkuMCwuaShJnmpYaX5s8qvNpGCgLpeFZ76LKmMs1Zd6muKw841tBeWzbbYxN9i8t",
  "key13": "2M4vfVHSxU697dCFFJU59aJERzheAowoPj2ERuc2bAE27VTYhYtPLzVS8khv3a6zJYaa5GHyy4sFezuigaDrk7KH",
  "key14": "5iHUFYiwdpo9azQ1tM3ZoksMg5SR5m4dLu62TYGpeLTtVfs8ybcUJqA44HZs2UqhnGpeGr5ycRt8tYqVDWH7Z9UK",
  "key15": "5s9BU34XrtV1KMj5Q8ZoKUL25pnQUeNYPe9r8xc6DHKLdQjSGoUxkxGeg1iaHt1rEe5mRDfGFpS1mL4hAnZAX5Pr",
  "key16": "2wpX252u7GtgSzDFUWYqr6Qy87e1Qrhj7rQgV48zh5w9LajmKmxrTUeY5W8kpDJfjnTecfNJYRTyDPb3VZ9RijjF",
  "key17": "5JZQEtsQPtrqBEHN7JcsSGdQBRKfLve65jNq7L9ETGgXMM46pyJQxRwZzKUx7h6ws21cXzEy2VorSADvgmfNUWoL",
  "key18": "SmoGSv29WYfGZBc36cHhhxeHe1CrKtvQbSrC19qG1g2dWVkUHCShbYW8ujL4YqFvHgA9WL3ydiPqpsoLXjK1iDm",
  "key19": "2RDpsmGP2PoCWZnQxamuuMtPYjMHZ6FoKkFH7rVF82yKa8cecUQ4CegzBFQ3Z6BqkAXGTvCcRbjLBft2BJxg3vyB",
  "key20": "tTBJd7ErzSt7jZG1vjmk4ryTksxE3h3XrGaECNDAx1oJGna3dKkEtNG8hLcWL9GB1cZFQUK5sYp7i7iqcXTHHnA",
  "key21": "61iD5KuXbkM53CD4Dm2t6ZDpguL4NCyFgZUQWgA5zcQigqmkUgcDYHdeta9sJjZ86op7jPFK55WTfXja29EvhtZW",
  "key22": "2aatZVEkq1FeLJEvL1SB6ubPE4jMhKok94D6q1xGX8JX6oiChfLieMo7QhY5Djow9pdSu5zGmZxRWBY3mabwyG2b",
  "key23": "tvVqLWnotsDbeYoY8QZh1GSisyn9YvvX12CgfJmCigtfUaf72uFgMxSdaqSP5PtDdfqMBvG9BtXZJ9Nc6foaGTL",
  "key24": "4DK2NFyec4MVhX53usMNLNwwmyAhEEgTAABXdrPSuWuLAZv7ugepGt2onSnN6p7CeM44jfFtoaWuomMSw5EkmkNz",
  "key25": "21EKgxBi78AWhbmiveRaVia8NocNepmYnqdhy5V688rxa8hRWPF9HsvHsBTUXDwqN5KdimYrZiDwG8a44oFD4up3",
  "key26": "5HTrxAcAtsu46Vj9dHtGXdBhHr3zFtUxMAfyjBqMvu3isnX5UJJoibahX6oVA89DLtqq5ZD9EQjXC6iCDBdV9UKY",
  "key27": "2N3tpN8mtwX4cPCrey5kKRjT2vPr59J2vrKWj8eQ5ZPHPAXRKpNgLXk7PUoux5P2Nthohc17H1u1KtNLw6wbbb6U",
  "key28": "dbwH1ZXJtomvHMiTQQva92RiZ41k3iste7Qp3PdMbtWdoaygmS6Ag9sGFykFHx6cUw7MJoSA4WHCvJipWRX8JwU",
  "key29": "32H8dpu7QfN4Qph9XLnhaHn5oeR7vpJvdAbKPqq8WagXchEvTTrmuGUyeTb6XN5nxKgmMauG6fJxF9CsS2hBX13F",
  "key30": "c7tXtYAZWzZ3sNesLeVzZf3ut1h2QcvaKu5TbmouLTNJ6bkSoUiSJwuo2ZaUNozvFwqcE9gXv7W5jB2hdUP9ZQX",
  "key31": "235tizdEUPvYUtgA4yYduAs1o1CKkm7zxRyV9hnSSTw8C9ur33ZKaSEML3Jfzr9ADiKvrPsNyi2RA7nLkmWiuR2W",
  "key32": "3WFG5mUivGAzFf5fJUoWYmDNpK16zbBYzyTjU4bFZhEnKzZtpd87knE67DVtjW8fmKTTsck3wSed8erE121Ev3sj",
  "key33": "2sMBuhZxe4eG58K38YAy5iUMwRhKSKbZbPV71KC2HtaGZLUoXMwLKC72NZpVEZhhYukx7kaDLb83w86zTowu1Xy9",
  "key34": "5GVfsp26PgTDM6UMSTbQWvpXZvdT5EoZ7jA9PL8js2F9CKrkvorZs5FothAKuiDJhgkw33aZUgHmqLHRVeqqxmeB",
  "key35": "5sz91sK3USXybr1boc6vSdvhQrydktoQBPM8gNCb94MnKQue3ehMoP55pdfAmstkpEPotVbVnMu6BbRpSvdfWYGH",
  "key36": "29BFYA7X3TcisC259eeqVPvCvszvvJBp42ybkvgHoHpqFkPEpsUAWn594EyghtJoV8WWap33LfctKtF7FDvRKJtx",
  "key37": "5BE8g2rtRQ79vedb3qRLqoWwp1XVzJduE2jDxiiGaUa7WraTZZUaEUMRdCHGN917XygjdHKNhYG5kwsyuaRW5hY2",
  "key38": "3VDk7F5RFyLa4WjyJFCVE2bqQrdHcNJaCrvGbHydC1PbhWQnzBicLR37cUBwQqwfEmgewgTYEPXYbUxFzr2b7Dwn",
  "key39": "P56wZgST1yWEdqCQcLpQX626GsPRr2nNa7PUuPiPF9wbBvXUMBuW6ML5CEQrA2zeGpAwB3ixADHmbUZp4aeM9AD",
  "key40": "28nQ5eqy8EYTXnngDNBCCJ6bYWepwEPcCmnieqBUGYSCqavTePDy4Xy8yVqiSF8dWRauWujgmfdwUMCmPZuzfFLH",
  "key41": "31KkvfmBqLvbK2NVXD75BiPt7bNmEhgYW6mRNCtPcekeQLyKRz8j6ehNZNdqXo2eEcbumTbawLaXKDuk985fVZG5",
  "key42": "5C9iu56Z61rW5Gfmxr7Kb7cNHumPEXqyxwbwyz3uh8MbXEbCK8ZHdPrRdSdcAdjM3TVe7gWyJCTmtLpx2fXTN1bj",
  "key43": "4bjw538MqKRFCnMoz9X1jKJNP28TSe9jEB3Le6StEw52MAWWT5rCCiCk4DU7YXMbWHnRwYpJUJj2zvXJWHN3mgkj",
  "key44": "3SxGnmVu7tM1QJjrBNupVVazbdwMJHqzZwzFh3XkUNPeDuHWFcxD8JU5FCHCz72VPK2x1uSkrCo8SZCCQXdLNNEb"
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
