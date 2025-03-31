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
    "5smwyfPwnt3Nx8KRLMCzKTMYr6Q1EyZs4TBKuM6WkXjSXW4zcUy9FZBqn4m4QrfktRXJo62gDLYosVhqRCDWtmcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehmrkSPiwQN2sAQT5PjK6jgRHMz2zcbFbnaQUT5R9ATYov46ZgtoPwiMxDRyvcHhD1SDquJZNjT4En3SBiUqGGq",
  "key1": "3WpfRKbMTRBixxw367gsyZGCkZzNuyJcoNjQ1kG3PDG6rsUtxVzMVq3DpgBWdhcao6Xu7fGnBfGEHE6wkEEfmaPv",
  "key2": "K81oNTeZ7cTKuFakSczd3rTXvnPMSWYw1jAgZeHEUgUi4TMiCC4mUuijuHs96KaZmAMFCJW5hsotGCGkXAB3vR3",
  "key3": "2yfpvgCNcgVAvwZmWCiqQwJjHPKJ7bFiZJbGiinHFKgwajVHmt4EpUggAE2C2Tvy5JfFk5bNKbNedhdeuULsziz8",
  "key4": "5JhMvtoKhu44F2f31UmpbEcD18efc9iiD7WrdtgFGAmVvu8jKX5uP6N7EKbEs2gjGHsUP38CnmMoHtQiUHnZVgnv",
  "key5": "4NHarDQunWwmQXM9VruRqDcYC3WZ85dRfxVerM7dRzeDdhCsJYLhb2hhZZmQmaZb29V7SFYPotJARiFwhKsdRMcb",
  "key6": "2U4dkgzDnDN9DzkVL5Vcb8wEAdpaVDHXX2KcwNXaAsAdxvYeXa8DYTR9euewEGVnVBKJnn5bGE94w3P3Mx2zmhAr",
  "key7": "CUpaLvB42789dXYrt42CyqrnLiijAiTbgVNMFp2r6HH5g9e2gCRs7W5TGcSzrAE6TXNAtKTNtY8dqT9j5wsAUjc",
  "key8": "3N5vGoE1RpbGjcy5rc5ZaSNuxpvtnHDL8qe6EgUUSxhMUNeDUCE495ZZoFCrn5NXkmn9wp2GNYW9r45HUuzYMk8w",
  "key9": "3eZ2UtaWcx2MniFsjZYCZGL61EFeBN9cwPWB8XT74pQQTcmGiv5w6nS5TLirSfizDb88LCcZQdNg7HKEBdHJV1Et",
  "key10": "5YdbQcUZNPRRshmYeZMsFbvpPqBpNN7kupR81qk7AyKGeJ5kLnpLCu9y2fXKMFqnP5i6uabMsasjoomshzsGQx2Z",
  "key11": "4RZMgBobpEYAN3CVWRChHwM1PgrjzZtgfh3J6s1G1Vaf43t89b7J9PS6GSQW8pC3CvzoLef8dBZQ39uQJcmUvb4L",
  "key12": "3SHFxqsHymHYHACDgZUy145TxpE3sefuYBVHra6svJuBYDucn1rsK9QeVYnVghjiQzEhZrLYr94rEhzuAFgiGQig",
  "key13": "2gUX54k68zJmsawYieXgbtDVftVZKhyGwBknLcqMV6D3YfhQHNyNKbWysDyDdj1ruMpmAqN9i72w8zHJPjNkf3Jr",
  "key14": "3jfmNPoaojcSQuFKJHWJgBSYrBacktJYNS8qkiirqKpNAxNvGRbWRdSHjiw6H7zAMNmEW1cgkWsyfNahabSwT96X",
  "key15": "3ZBimLG5ZUrojAzqVbpCSTfTBquiWqUSjPAxrmYoEtPTwBYimSduW2XhfgnrCkgFYAVbAX5GW66UbiNbbxx5XfTQ",
  "key16": "5bnEPoDLZcJKemERYRfHG6Y9VweeVJqSx5L3Ze2kwgNqASNJKkju7xTWr9FSwXqqLJrssVN2N6WCDote5g4DJ8qh",
  "key17": "4XaFD47X9ViS6Ry3ZMBLYUxzM3FZEzZs5nnDYfMbXcsGcpeUcusrYwaz2hs82SVEWcxgW3BCENYqrVK9bwGnPpz1",
  "key18": "4B18WPGrCR38Y2xohrSJTgZ5ktPcUGyrJKTG1j9gVDbLGUQUvfwrXrhwiqHFqbT3JbjNB4hfG7tbmZKJ71tuFer1",
  "key19": "38pZgS4LCiYoX2z189z33wb15CJZfUpBK1qPaoLn6xzFmMnYkF1h3XeerJy56EioDx81AaLD3EMd9cuapCAugr56",
  "key20": "4XkVGUEJaQnfHTfumLK1x8rsWKfv1n9r8zqUo6Q4uixz89kHNmFcUcPZgqSfEfgKE74f6MsVUtgtHwiMvuMRQyfR",
  "key21": "3pGLpD1oKJRpVhvGheKfvgHXvKr1shGC6EJBqoFqeZfTmX6jcN6XEYx9iYmE3hBVYCdPvSr17ZfdK7HMB5mhcQ6k",
  "key22": "5yJcxPykrKMrsyiqr8A8gvztEhoTU6xgFxoZsPjWDFXVCtH6N2S6HK9CygYfWP5FXb99w7SdBK1qoWLghNMYNy8B",
  "key23": "5qfGZcuwKSuiuCGdzTHY9PwuHovpMyj4KjwPxXmwMMzvZYwXMQ8ALVYzXKw3rPrAtznTpwiaRziLSQFaZ4pEj8kW",
  "key24": "251AtFtM7Kd2hpGF5rsz25WDBEhPt2Paxs9T4BJjv2bhzwHwPcppFtBzZrY75aNd3nNGSy9s7bAv1jeNjSHXTbEC",
  "key25": "4duJ6EeyRgGUWcLoSn2STpK8soH11NTNzZeoFxpT9Usnw3LxfrFyjKLaB346kKJXGaTAQT33wgtSq835BSmm4mX5",
  "key26": "1gA6kGKCr3y7bzA9s7PqtmdPXCe9E8MH9eMqPf2LZbbWwS7r8fDgkqDdzHxfxpu2XwdHqhr9HGpaXx9waod5vWe",
  "key27": "4Rmbzx2LQDFJePxpnVDBjm5GVrSHUjbyWPcdpQdpskzbhCFFXuqDFARUQ7RCfnz5YziCYqRnZ6Zmpo2YAXtDhFgx",
  "key28": "3nwduCohq23fGzeFEBwfWzMimMD2azdxKU6uB4pCjYhzp5eYQas9FcTXVwiX43f7X3nFaioqpHsye2ya5re3h2Xe",
  "key29": "3n7mcsarqJAJbZys7cmXpKdcXBDXgc7cS1j7VVcjPz5L9EwWVZSnk4ZFqQocRg4dTRZVdnMCvvLyPBYcMCECNK9W",
  "key30": "fFgax3NBtYySbDDeCboVfoRdqgimdJi2p7h5anJms3E2yq4JpwzN9YDr24ooaAYPLSP3iLoPrPHpYJRFvkcHCBu",
  "key31": "5nP2SzVzyHgtk7bpezxaicy7adh9QYp69RvUBwiux24QSpgEnUUs5YFiQAGR4nhDX4VPMz1ba8vnTW6X9sWegFFf",
  "key32": "4DpwQbd9DEXDfMDkSo6HEEgXTNze2u44Hgna1fp8qj8yFuaQRP9S7gw9VvGUabB7ET4oviZaV2DZ4xBFQK9MjPms",
  "key33": "2pksq2HqK6HXeFwC5p64YgNxmokT7s3EfMxQMiLdsMKwnY6eTG7quVdSBFJHBRtpm9T9fdFTHfUKcZFQBR98V9Lo",
  "key34": "4gyGUauuNvfsv2dFsgBYWgYokHGcX3XaEwfeQ7JPJcREvkito7zRBCRxLHByGGsJm3VZ1pjbSLoywtB4ywytDPUz",
  "key35": "2ENLUoePSaBwqeLjhmXmC5ojbWD5AzYx98E7kDZ6Ge7YTohooBE9xrA6mRXzb1ibmtVbT2zmzNbWjzvUzQXrFfqQ",
  "key36": "5hscMX6DkVNdnLY4zar3USZwH2joxBBNTEiQSDp1JrfvgMGqiZQAE6n6jqoo446t6WRSU4Goa8wKaRVzCHMJ6fHb",
  "key37": "gewt8dit7U9DQc2DkUHVcC1kU4v8S92zeNjZsnwRvtGHZc5UFvVzV632pQu5NaQXb8GMMwAfURpUG4DchmzKymS",
  "key38": "pyCkDVnnAp1g99z6wWCQQA6RqGe2B5HB7pL62PfbG7nfbyDHs2kZ9cQFwon5GHEfPGLzxJDwT63dKUcDu7XoCJQ",
  "key39": "2tEL1hnykhJ17jtADyfk573L2EdgM9Bxu4wce4LuinurBkeUbksUgu1WGqzDUegrsSVqQihKZqk1LLfZKRDA8T1H",
  "key40": "RYiZ1aaHmuifatWTACL5ZqWx2NRt5HeQBqynWnSh8WVdGqLxp8ciH8bg1Y5GpUEcA9TS2AUsubEAUWaxAwDy3QM",
  "key41": "4FAqJwxzmDQpuwfKuJuTa114DpJanCMMwpAoqmeKeVTF7Ybg3x8rGjuPdxp7BUCmzWVBUg5x8gBXoSsNVWoGb8bp",
  "key42": "3mNYco8nHQXsA8tLCBGm15kQpU4BJVvSAVPNMTvu8Zt3wrZgJ8WgjvFSfioTtZrkAwqXQV7WzhU2k53aL7uYZnQe",
  "key43": "4NhZrfvgEMBE1h3sTnZ61roNbtwfq1LBbrvGTtJP2VzA8qLgY8P9xshytrHNfvUBWbHn7fkZG5y14DJGgSbFF87G",
  "key44": "41KqucU7WetfWH7s6iZmJvKw5DqqNEvw73RzWjUjwNbEFgSvFBT1imx4iPfHJvoPevpsN7CaTAz5cDE7Kaf6YzCn"
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
