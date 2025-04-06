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
    "5wVEPJuxBvH8sVssM7xJWXnvAArC62HVe395n9MJz9snkiMCFZdPvc2xnNUpLrWS1xtjmtf7zUinLMCSLBS2CGtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqMpj77GiZD2bQvHiEdD23vg39QFbiGJ5cyReU33hNUy5DtjWmNfYcvsqc5HCi6Ls6NnA3GRGaYRqMug5WEWFRG",
  "key1": "4KjCAcBMXHSfJKj8gZf2eCgFkjFW4u4xxzr1DGDJUt9anU8V4mWxQJRc1cw6xBGWMESJKcmSNz6mPkCLKLLBbwe",
  "key2": "2XqBxN2VdcGSrRn28ojpzFrdPbMRfQgFLW71ZroC7hjDRJQG7izjvMuaweLChrwRkoHVqJ7sAUTdJowbJ8TsTX8h",
  "key3": "4TPJ4MHLb5jo4KwSdZgWQPwpuLWfoThRA3jPtrDdG73VrEaHY5kpvuKv3AU5jkZztfDT2AwsVWiE5CkFN5ESijcv",
  "key4": "47bJFCQwBbYSBRuuJ6rPKmSiVCVAUWx7FKK46FGQQnL9cxNYdrH8VxCmyZzTsRxFMWKxxUjyg7gUXrpAhHRBUrTu",
  "key5": "64ezwN5G2C8SrhHSnYU18wVTTg4cJDm7SsQSLSqq9VDa8xoAayJKFEiYpmqGnJBBrmuMFGL9PXiqbF3eDNQX3Lc1",
  "key6": "45hHi2uaUPNJUZsUKRzkQcnFfHKmbrxM3TgFcFMJuzbs13sg6Mda6kJ8ZtH6WZkfJT8ZLKWkpfyFRmLYym1j361J",
  "key7": "3dQKaTMZEDT5gArfezoorMzpuVfmw7LDcmcN2DUJAptnQ3tNicFrJtycUXx9Ks6PLJ9zLuYfturQjSG8Jwpm4xe4",
  "key8": "2ogwvNXAmPGp487AnLFs68eXwUVDDdhKPGbAq5GsxQDA3v9tL22kbicFqWRawSJd6vrBCf5QUo93YtMBmDo5iwXL",
  "key9": "ch66XV7gUPtPnQvmFPFzN4vgxXKtaTRajAD4nYBSssa3dBX34BnExBcNhophDDvyXdTdBZW1n3hkNZsLFgJRqhj",
  "key10": "5FWXqFdAmmjedQcFXvU7MCom8fuo9VefSqpSV7Cr6jDicZoQVbjgi7CPG9A8rNZAFJL7sA9QEfAkdZdm6JHhNiit",
  "key11": "5oNryPya46kdVCEJvcMPtAtQTXGbpBJPe9AD8bMYuHa3WHBrd6ioimacsw9GbiaEtpBW3h2Ug2yBUBeVYCZu5mDf",
  "key12": "hbBn76ZynB97hkVWBo1W2JqwKDCNVddiDGVeagKk6NWZL6qYhTRo3EgVC4HmdjenpojbxoHDuY3Da2JfA6YWscs",
  "key13": "4Q2JxWtE7Ax7moXEms711XhY4c9kV2qWxnrL4erdMPhwqajHLZUnBHTk2JjS7KEFa7tTjw7kVZsFDjbncbe3W4jk",
  "key14": "323WzZqVkjyui4DiEVNxo3juCZWzhjAKcgjevvnB6trnCbZmSSgFSe2aLiUi4vbZsXq6qK4s4kEbHVnsNJRVnmy1",
  "key15": "64z2xF2oSexMAhKSRDeAtT45uzqLQbB5EUKfMvXH2yvoYysZUVqHiLtYcpUkhR4rKReYduSnDDKaS3ATDSjb9xu5",
  "key16": "mMWfMTPdPFNQ6C8pjWNX53vF58Mrhvq2SMjvpqprfBMqae8aq5Qs5kXNwJStgv6t5mJ98tV87kZvihyaAE6WaB1",
  "key17": "59Fd5sFAGSEBQx7RSBvgm8NWGadcdSscceCeRpauwpXUu3YotZ64pcM697uFmCbaRyCazXPwGdYarWdMPkq1moZC",
  "key18": "2QZXo4ys9snyb1fFzeLus7ZtdNge3h5aHfPJpVdPJHLeyxPvQ8ZKxTZG4gPuwM1v1B26DGULK7ZjF1WJaiNgM3fZ",
  "key19": "5QeNfwB5DVi5sLHAneRoQcn6iz3vNMhWbh9ohLms281dUYKdv7RN79U1aeWfxrpTEEGp9mRNJXoZrKmerSRfkGyZ",
  "key20": "29iU7uwRzKYScCeNs1RKaHKWcehJ1u6qqa9t2xyR6HcqvbWFwuTXqCBAy2xdtuzor3yUQ9y9ckfiQrLSsveNMgNP",
  "key21": "3nrYKMVd11Xst1nuEqnycGsshR21eACWbb4SxnuMuVmMfGnQrLYF2KyRxST5d17ywVu6Ws4nvX1Arbups1n1DWnX",
  "key22": "FS5GggcrS43oSNLoQgVi3oqqpaXXGtwvAUiee1yWzuUjH3gfST9bL4rPb5YTerj6cBZJcfMMwbqTffXwYAZ3Nvk",
  "key23": "3MF7aE4RheWaMxyD7xQgHWFAXyW8HZjvhUgGAQjJFAneNY6aDJrDT9AU7mYjmVNBRQRv81KZxeSa6VrM2nafuNuv",
  "key24": "3wmwSzXdhKFBRddwURBJex7fPsDsEM7HQcbUVPJPpwyiwYFanrbeQMAjByXharxidHnVLe1NnZ44bRQjmJwbpzzK",
  "key25": "4Dbie9pFgtKCG2FvFQVw2p1JAGuXNrbMRduhkLBe9mafHMkJ9SShcXYmaDtfzoEch4ZSBA4nzG9Xn9tJ9LSzsnzs",
  "key26": "YmEdjvbJ9Lg8fvCmENBicAWt98iHPGs4ofwycSrtNXBA26Ee63Pas3uzHhGFXpweGAmyh8PswCEv5FK1B7w7ee5",
  "key27": "2QXiPmGfvpusZhGWjv7c5yybVAn4YsuXzeX27QzYHrakLbM4LApuTQqJbvR4jjW2NDRdAwy5tKer4amF8nUeqLDq",
  "key28": "s2khRoPsy5x7GGdqNNjicyQQAfHp1a4t5g38zqMX6qPzowWznTiAFmUueXKZiJDGvrhKzKxR8zWXvcB641iqbWR",
  "key29": "2p4hupNqL3BZTfjZunfbDTNTmaS4RLmESkzpmv66WuHGbBTa9AAWhgGTNcXdfEtsVhqNimVkQBbnhtif6uQ3QPcR",
  "key30": "uoABCMZn3ee3WW9zW7xEZywC2prk4gkvuSW1cSdvR4N2NrqL84tMDKieqk8hH2LjXSATTmSUqZZiFmvT65HY4BE",
  "key31": "4czuE7T2Vz66KwmMB9n12gTF75HNocSMEWaywaXXFKABHDmKztvKWz3AfkVhorUT6ca24KZa8ZyecRfCsHqqL5Vi",
  "key32": "4HKjmdXzZoALsNBKcMJ8MrausZZ47vH67kZpYxPthb8TVa8BqxZPPfmbTHqs4P4YYrUaxcnXvFrL6WhUkvsxfDYu",
  "key33": "55spb8sRf7okR9cPagjLprnHk8tA1NrMYe73ZjuQrZQEDY4Bo76oZTSWRnwP4EzXauDkpuDCjziXE9VKTHmV8Hop",
  "key34": "3tr8HnZaZoHNv3nESaP6TbNgkXZ66NrMXQYQQha5cgB2KmQoByknEfAX3g4jV1Y1xVGwSQ9WcugoxpX4NUDkZWxq",
  "key35": "3Zh4kX29LcR26bV9PDTUHbe5E7zRseQaJvrGbpPUuhzDDMiLKN7N7ERwUvmNb9kb98MAjKdHUSLumJMH6PFFhdrr",
  "key36": "2ZzWcqyDqm9EV3tEpvcz927VbmkfW7C4ApTvYMxf18yA4hG17TJiT1WFT4tG56oq4Z6A8WuB6zNLPwZozo6VQbh7",
  "key37": "2M86KfqGNvWqxWtr2GiDQmMWb6LhsSkCiASUMd1aZTYbvRDtCHEaaYWVTSd5T2a9FdaS8RBxPDKWmP4oYAecC9p7",
  "key38": "bmwht8F3JKFkFXXMXtEbEn5sG78mTKDnJzi9925UsYUfBc2vv2gz1bLgAAkkGfZ5PBBwWLokUKaSenwAmVukoQc",
  "key39": "3PUec1SRhZhtXziv6JDeiaMfQFsYhRzuZUeYy7EHHeGsws145qQHqD2XyH9Rkbk9PDnLmC6kcG7GvyHpcvjNYMyJ",
  "key40": "LwkNvGgjgY7rLEzUmNL6uyX9BoBoULpfLpVDs4by8VycsfuF5afP87ANcxpcmQPig2sFNRLbRGK3e4egycmUd4S",
  "key41": "4zMph8UBVveZE9C6aKQPhPSAP6M4vuDGrZTSAuzakw4QTBLG7NXFhbrPGtqUH1X1XdRbEQn52rUZKKGTPDR8zdKC",
  "key42": "3hdv136CmB2PdB7Z6HkgFREmxK9fpRVrZ3AmaToZ9MjJ743KVouVG6eHK3PM15fgSq7Yn5kLbTCLx3dLyg76DSpY"
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
