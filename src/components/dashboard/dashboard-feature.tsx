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
    "PNdaATdh4Feup8AdMMhjnyMmJeoHFZczq1yYAtUKSDXibq3UVkUVUQLkyxR3LDugTHhyXtgzqi91rePQpRq448b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z58kwNhVpHR9MCTnPzGDGvyb2Vzvufq3qr6kmnesdtw85NpoyUafpGkt4iq4fqvsREar4XuLnQGZEf9HpwqEmq5",
  "key1": "5d6idkQRMT1GVx6kQ4RnFWtvTn3YestUvFYxpjTEEXayD5W6rgDw21CtyDvLhX85TExSqt97HErEaqfPoCbposEa",
  "key2": "5ibmXU7fGwg5qdcX9PB7kqG5XzuZv96tnEDMYApjpJmWM5e6gxTAibUssypujvMffcVjmPkcAxVsC9eeCvn7X77C",
  "key3": "2TsRU1kGWKEV2ddnqrx2PFgngDGyVXc3ASJv89M5XUWXjHtGDE78e8ANGmvZTtZiKpNgrdMyoofYNcRzCpeehv1i",
  "key4": "mzCj7HUstpaVHrdaYuV9ECtvFm7eSrL9DerSKpTeYbiVg96sQn8aPBbnxbkW5i7vPEpxKN9EaSNCUSYLvK2R8E4",
  "key5": "4Gu33jAMZYVBdX8zdVNgVKyzceVx3kvvFGa7RtaMV4tZAQXhEybbPUGHanMJhdJGQkDvPcoKQoZAdaTDBsGEF6cA",
  "key6": "3425ERTFwqjAw4hnonW1J9sQYGADX4V21cDqqg9Jhps3Rstny5ncmmXepokUrmSA7E9gRAdPDFvzEXcNDxSFifi8",
  "key7": "4yDrsC4KVauaUPDc8WXBMUq7WxZhCVs8wxMe5GFoMYPEproQ2EtTdx2HSgCYLHkaziSKtooJDtx23SXTh7yATPFm",
  "key8": "4V15SWqBTiTVvcduz4YXDjijEEA2rtZK56JqQCtKiAwG7YGBtnmMEdSc6dTSfQwN64hN3emYNLkzfp5EUxEfFQAE",
  "key9": "KDXsJQFqkPBELVL6XrkCKfc6biSecwgBBLSGMnCGbASwxnvVBSkA1X8FSjKfRvWJZ2ivydVPTPV8d2ekwPLMU3E",
  "key10": "4RXzzvsk7Cjr3zYKjTptMtHt6psUiKHCo1aZuVGZds6BpWLXxpWcBeTpy9DvA2yXm4wgFax57CimxQYP5VPz1P5N",
  "key11": "5wYCRqG5hSXGjRERcoL7BLWXNFefF8i45h11bpfMLs8YFiEhPuDF7m8XAwoinRBANCAmSL7AaYkH7S36xqGGPnEo",
  "key12": "5iiAApGtkq9vRQ5TLygiuRBpxYs4V8GRM9wfzv1hDEa8pFYdtxH6XRnf6KHPscWJTti9WCCPhRnmb6B7UN61VRWQ",
  "key13": "34hSYWPJVwbANvR4DaeCnWHASuNVxxyruPruEoqynMDYpGENi89pjBJDWWCGs4bpU35n1rqJpVXLT81zPrvcE66F",
  "key14": "5VXay5odcCXynM9vmK1uhnXGbdS31RT55FFuFRyxus9gAjdfzL8zKtxvv5nf2tJQsx6sofoAwqvG2o3u2Qn9tz7K",
  "key15": "LhZZFkFv9wZLTp3eynwJcnXAE4RZ8D7eLgpfsLjk1BaPajShbT2Epg76R8sTWuJEVebs9LZXPfVRCq9DAZVTPJX",
  "key16": "4xEgPbHYZcoMBzwaLMYhrZQG5WjLSpMfdS4jUg1chhWm49CkHKLNyG1w86wPJrHZXr9fTSiVHnkT7fw6kzDY9s9D",
  "key17": "3VZ6tkQno6oSYFzWeUSUdpSDZGP1K5vh2BECh4Ndh5Yuq4ZBSsCuJx7Mc3h5Cz2nMPZJCxGj6GRgsGt1QExGzWVr",
  "key18": "642QgMEDUTcN3DEK7XYrW5VQ9retfhTEQor2JtQh2F4rNqKBeqSfdpEcAyNhypQ9VMMk3w4hSkE54ugGoQvwh816",
  "key19": "2ZTRgwtQNbunyut1udM4FXxEzKkmrXG7ExtA6TQ55FDsp8htZhuvCAYvJRaZw2WKGzogFJ5znB4ZuPuzSVxLtYDR",
  "key20": "nEvSTiuinxAN4ed9sA6jGoAbCE5qx6PrkBYaeF2xzPF9T1gqckUNFD4RR3g6oeH8bmCUhGu4rj6vgPofTA2hNBG",
  "key21": "4F6rsf1VaSkCchKRAzsUCYUjMegSihz6Np3T6dk6teMa1kTfzHs5aMM5HoVWPiA5i1KRvAEQPixQkYXEXqgu8j7x",
  "key22": "3yT3maZWeTTkdXir8yYCCauuojeG3UDpodAyqpa5ynhDmVo6bowxKzhaLN3edqJGek5opWayFxXCBPZWWSfiW6TL",
  "key23": "56qATk6vaoHtKGZDwaj44nYfunMfwB9VSrCWuGRDY82LxdfiuBxUTKGT1QfyrHihvVu7VDsMqnyDkZDFiNedAct3",
  "key24": "31CC2vwvUxnZn75e7mh5Euo5RkFySkoqyhc2gRyt1k7gDZi4TQqZJM4A5V4av4Q5SBrgePasHAq88y89GKBNUU8b",
  "key25": "YP5UEtwejpu1waQwknvc75XZB2qSPBhAsnibfGbKz5evSydadkqTpdXQa3UTZMYx1qiqgMQ6sRB4fMXNV8exQwo",
  "key26": "2CwKoHsrNKDJPVgYbHBJzXL34qQjAuZoXA1VsqF2Y3tdHu8DYZsMnNsD4hQ6rBBVn9iHxohQrUxiDG7AHM9WRqkk",
  "key27": "4K7cN6qMVxJguxZkEjeQYuA9UhNGE3mPgpwPnWSGKBxUNGcwsQmxP5vBLeyPTZ4aXBaUXd8kXMhCdBuWbdYaVFXH",
  "key28": "y73dqxvat67xZsiUSGYdh6Kg4srpXZVMAtropEzUh9wj1db51SLyqx5bB68DMgg1UBFu8MQQYBS3hRZ8Pp5jrVu",
  "key29": "5tgJ48uyRcWtDEcrbDPTptYT425NuCKYUS74mX9AERemEK2SFf3vQqqdh8jtvSjDgK85py5by7FqMWAbwsXuGcMw",
  "key30": "2xo48gNF28tN11iFXCL5dNypQrBFZqWesVFQ6vikvZvpzJDnvdgf5WRmBevwKdkM1BZvtBXbXiExsLYTSptbBEHf",
  "key31": "4sDouBzSnodeBabmrbXQCSpPG1FRAkUobqFfNSH38sw5hHnLnA3nYEfgrkKAC3LksT2jkqhv9qF7mAYihseTuczK",
  "key32": "2Z1kMFyVcQB4ZzNfpArRpKVV6UFH8JN2gK36trJb3YffFm85oMwdwji3dGuwXPC7sfhVq5UemD3ZMnLUnZSBXJeu",
  "key33": "4Fg5gKBZGGXAw85BtDjToebKy2noi4wbT5BFg83VodLuGoo5PHEq3CVusxWqHVdystzGMBJw2jXyXkvAmr3jUZ3T",
  "key34": "65zy7joWRLA5qGBkKJdRQzAZBFq9DoYHyUgcaoSmMwSgPjMPkzn24oWS5QEsCP7SAwEs6RHq1nEyyBnhUJdQ8jSt",
  "key35": "2GuSbzhx2MdZRpQoosLfQopN2HhYqEoK8Rj8VhCxbf37p5DTgjHPgdcyEsgSPuEE9ExBUruT4YTtavrgwvyEozi1",
  "key36": "4ozFJ4BMx1QQGGE5fYAaD4Ar3mpq73Zzhpu9QfBdaxVAjAPFz8qrB7D9Z6Hfa86LEwS8WZs46Ap6Bcgmb8YPFogK",
  "key37": "5s522sE9dRVCGgsj1k8UHybTa5i3P4mSePTtPnowfppEetZRBVS1vVRcZmqPaRFAcC7eTQ3Fz9xk3uWmc4oQqgLx",
  "key38": "4ALXxxFGA9wwVr8LniS2Y9cpB3nbDfTLsbM41MTNczrTGUnfkdtSEPuwReTk1NfCpTRjEJrws5mJTZdm9pDYLZST",
  "key39": "36HKjZyxeF85UJCC2wkzPYLkL1YYHRFrq5fhYyKfU17YBwEC2A9FUHzmRHwmVfqqfKtecySzn6ARGRRda8P7KF25",
  "key40": "WobHbtUwjuSsifg73WbxEyJhFzHD2jckkwhXGW5AAaRAjgHMUKMpLi2BAmVtqxrrvsKFrMDGK5uEMi35sSzJCzX",
  "key41": "5Hg1zea57Sr2a4jyvWRfLYBD8pwR7XPqJoUA2okCp7idWQ8WXEpvUUkb4Md3iofnX2FArPj2XYxe4JR1vRxwJo6E",
  "key42": "4kE74hR1jYhiKyotbqGczLuUicTXugbhBA1B8smd2mAfyPDuZb5txEbN7DuHnUFEh9ivuMj6hFwS72d46BNw1J79",
  "key43": "31WitovExMCXsMq3WWSKWNJcTveeXGvBnTJbf3hr95iV9JAQA1uTXyrDKhXuFPRFb1PmFERfizrVZ6TFxy24zgZY",
  "key44": "2SYY9tpXQkbC1UNMZxeB9fkiZjJ8DUhXJiZNZZUH5FjbhPFX6R5yga25gGqUDD7Mfds6YTL9heuCLmnNFFeJXVvC"
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
