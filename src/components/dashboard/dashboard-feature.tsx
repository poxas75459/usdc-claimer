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
    "4sSif1YJnmfms2FRpdxtxtDHwEmwsV3u5wpiYMPBphLm6SUB163aBR1CCmCDNRVmudpW95LX3w6c8wVhXYm1QFcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qoNPhECLh3bJQ5pH8hy3fKoVvF1QpmWu8nwWfGi2qNSAmuxzsCxc2HbooVgjBQ9NTU6Fz4A6PMeDHDCPLAAutCY",
  "key1": "2cMDJoWxmK1jHEhS872kFc7dbJEgvGMEGXmJodqSfHNCwf4BP2aj8Z7Nm2DuVttwrgEFhYnr9rMN4zMijQ4JF9M2",
  "key2": "4bd64WQkKogbyEMwEs8CuVkyA5JHxejYNvQCrw2gAvZWMBAmufd27Ykn1vTwMNUNm2J5nUFfuM8qbMX2ey56DgUP",
  "key3": "5iAbxLqtBashkXThPHWp8dcRVWkZP6SEeVC2LPKPou3FwpptHn3u5uRFwAyEo2TUhMSvN3TwJkdEFs1TMozCoxak",
  "key4": "4CfpvoJNZVdiCQMTxovWrtozcCWxiChVWiXo5VBdvXp8YEVMKw9Zihjg5Vm1C61XuEnrRR5yrZntuAsdN2RLe75k",
  "key5": "5zPQ4p9qCsRrLennU6wLJGDcN6u4zUsR4R7TivkUfUcuiASNUyNBEP8GisxqdWpnDwQRDNTxzDAjgviQRRPD3cnu",
  "key6": "44GSY2CHVGE6BKaC2bSsoNASvC2wnTruUf43fmv8QGdZP4V2PbVXVxKEict7Zquapn3iSkibNxVX9y82WdKHxV8v",
  "key7": "2e2dwJy6euEUP6kHjeWBXpESHNhbQRPH4VjhGwnFLwiLrRJHEsbgFVB42pK2urJdCGEdmTiehMjCz9tRN4M12mWJ",
  "key8": "3h948Lxevk6sVFm8NKDV8vFSvqBwYPdtSTA1LPyMDz4rzCk24QWqLjKieqbUNw7YotFmmg497srmXagbskBjScTC",
  "key9": "phV78oKHzgXBipTc283g3LnJCuSdaz3jAGjVa7GWs1s4q1hYNer38AwBGjgXy4GzzTqKc82bbsLhAuHokvD1q6f",
  "key10": "5QtvtwCFuG284SzDp63adHTf8tQKGCk9F9LkMFxsJ6DfefAiLzT3HzSRKHkTKgU9JPLSgfVrLHEj3HrgqMyBZ6oP",
  "key11": "PgCb4HeVBEXNcsREbSEzgusuDm2g7nzKzUUiZcNa24ardjbmPZDazygLF8GFd1mXY9Kc4LZe6GGYZTT5PJ44TJW",
  "key12": "4tH3pY2Wk1zpUaox1rMbCueHxJB4Xgq6YsYxKytniH32qaAn7i8xwahX8cBPro35KD2mEwJ2onr5wA9PdubHub4s",
  "key13": "ZgawfbY818h6qrNzoKBh73Q2pxUC8Q6jednEtuDhk8sk7qHpjWszqTJV2DjRogcyNj1f33TK2S6oJJFyrL9RJU1",
  "key14": "2RJcHq5WrWkVUaPRP9xKoACCrghyUvnPw29uqXGneeexVKoj2wQoLAgjwzB7YWakmTedbdEyFxqcGVVt4DCwtCA4",
  "key15": "3oqfAEa4jthvDMrmqXKm9TNPEdsa8wy7naUDNKbVHxqV84TTzrDr668hTopXbgzqTXayrk7GPotk24sDYee9G1ua",
  "key16": "251tFoHWpLAgX4PMQdVV9PfZqz2uEoTi1Qtw936DKXyJHo7GVmNd7CaHBgU7PSEuEqcWHUeLPrQmp29iRZord6Xy",
  "key17": "4um2G3HqHoHTC1yCiPvLhLpP7QnxnLTWttovJGFQ3C5MjuTKNHkv49s4ujG4YuEDTDrYMXXzuUovssgJUAp81wwY",
  "key18": "4ZeaCp8MnnsMfMipy5NQgu6NPsh6KLZMQCj2QvX6NqqmvqF2Si92HdG1KfiDX4BmNv8qfuJNdDsjTTx3dbq4rwWv",
  "key19": "5mcFdQ7seeXcNKfxpv3VXv9JG4rRgqUuKpEumpCpHQ4CBYXhkJcVTsnwQpsupmLH2Ffi9vSLHi98sgBgu1ttBcK",
  "key20": "4hY1n6SCbE2sNrab71qu7NTaAcZ7Yof6ds73jN2Qxa11ECyrMcoT1HoLaixhUayecXkNizEj5SThC9sFemcCAmMN",
  "key21": "4a7n6jkCsNhC5D5AQisALXJEK12XWEUdWuq9AZJ7ijt1iGDLB3S9LYuYFTXTEn9NTttdRohdKdFx9cZqG3KYSJd",
  "key22": "39H7AjHMrmNntqSpNygjTM1z2D2ftjsjJv7aQSdQhhupTDX6YQAevw4xkKBCMickTpA3SZAkxyiVnXAe4fmSKkFE",
  "key23": "2TBRftx7w8Dr8ajnv7whyCPL8vSySvqo3G6CPUDuTJtFQxQZntmSZ6RrPwTdMTmrJtnn27mbBx61AzN9nDkBP624",
  "key24": "4w3KGeexDyTsiYo9RLDw6nYTANrjE4eD6sTDW2iaLYHsYYczpkyfFDVnBSAJ5ZdCovJNFAdJ2qpfELMAUXNrtrh2",
  "key25": "2m2AZ2NvetZZRkpwqSeHLnEeu4yLoY4hMgkndz33FASPibvfgS1WcKzCWoqNk7z5w3t8FpgB7uAKE79YZk4UHtzK",
  "key26": "2A1TCtF1uR2sgqaCWqsbMHdkkuVMpj9rKGtrb6pkiVRhTJgubdNzRymG5sJmmft9NLQ6fBVu4dNZChtQE5dFtehm",
  "key27": "5UXr8hRKBvyKPqYyBtfoVXJ9s6qcWqUHL5UScy8SfCwmSDBhKgczpXEbQSGudGdCaFpbqvTjUuxbKB8wAJPueuTr",
  "key28": "hBPGgyB2M9Fiha1T7MdnVFozQdTkL4tnKP294DjkBvqRMjMu5Ax3GBhYyMsZCQYHPVZy7tFSu1DYqN9kTMnNgDq",
  "key29": "43khXgud5DU34aoMVtbVjtgYT3m72apTR72MTpM78gcZaHyDjtn8Z87k9XH3fkY9mbPhT8fFgJm47SvxxzcDmfB2",
  "key30": "45KGAL2wfE1M5nBeBAhawESvd9HZZbf3SaMxvsB2Ckm1Nyyz6GKuq2AeqHoShgr6Dkhd6ukpRmnfeTumrNoiVMxp",
  "key31": "312cr5L6UiYpcdcs9FFeTf9Q56ZMfqc23eukz68uAUyPDGTxjUJXywwAHq1YNKnc634FUnwcsF491MtpfhydXbMG",
  "key32": "2h28eKweCjfgF6jnGuJ8ZcKBmAqnjnRPnzJZCQWkyAxogbPYCMGZADAv7qaKVBHfifazMXYTFB8uZctQ4Aw8JGw7",
  "key33": "2tqzcRBDgdYcQofFPVE1HEiDGUMHjm7YnvSnPMzXg2NDJHybwPRWAGbVoPtwzoz4DyS1FkVhzTrz1SmmHpvUdtxA"
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
