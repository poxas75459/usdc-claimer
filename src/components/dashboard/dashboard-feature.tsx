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
    "H2TxCa18QPiaoBi5YdQf8rRzDHhD7QkG6CDCDvogNdTdChCba1Jb742PFaXzdeBemeNfTaV3CCbB2HQxFkeYVWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n73C6aWDNGS433hiW7sqffgPmyacQGCGAVpsJMfY8hfges945UTTn79e5LEUetXbRPCR5i7FWQHBe1b4YcZdKk3",
  "key1": "67kzxwYX2m6vLW2JCCuDq54BH1SgF3ZpgpBdPYAenFwasAXBrTKgfrPBYqLmcAoMbeZHhaiKQj1Bg1WJY9RrDkMY",
  "key2": "cwhdbe218MPaByp5B6dUvsyAN87SaFBa1fuyKUJ3GbbgqtNXcNaWTZ4RyZJPfmXqo54zcGrvK3mid6uRP2Ebh4P",
  "key3": "VSY6YdPjmFxyb6CWqtnymChAh6Uw9F3XNNEsvvY9QB14XQPVvymz1kkBiPqrmDs1Ayp4asutHuLvwJmwj66EBb6",
  "key4": "1GRvgN4DSV3zbgyt741D1jvoETDqBzCvn9hfqHC1Tg3KhPe28EsBX5zmXgq8xtDxvgG52uZewjmGmSvp61WuomB",
  "key5": "4vaypfyzUSNnKhSdadkfxXVmVynP8ZVGnCzZ8DFaoeQ1L3keTXtUX9V5SmGYQ58GJvBqHMZkx4FBEX9mZCYqQyWa",
  "key6": "SXGZFsjf11R1nGLgkhc1j1NyMYHdeBJTykEMosfd4EpcDGrXjoi1ijhQGCBZ95yevD6QVvtT61MzJjpM9fUNW62",
  "key7": "2f68mteuNB7JZeZQZYbXQSBpBPLL4FPj8oPfCgE6MYiraA1SJtFYefiRse2jn8jmD2EVrzT7Qp32yMs16KotfP4u",
  "key8": "anT9wMkTqKcsdrfXVuv27R41ZkmFdhQhm1BhruHbA23aZvz4oTnGmEUZF483A5uGxE93k8UsDqPFrXs38yXgeJS",
  "key9": "2zeF47GBHh8FiYn2Sq6wNdXTUeSDfCRdt7E92mpRkbNAztiLfZyWD8CznF9Rwd7GfMqttXBWaziLpu2aPwDk9imB",
  "key10": "3NqoG7qZryxrsHRJhtht4QUmJ4UjgfeMuaypGVsXyR5RzB5J2WKz4bx2z9nW5VvNe87kV7gspGS6q2mrudcM1zxC",
  "key11": "3fwzn2rDrk8hMvK2UyKZoZyV6gVtZ5WsUsgbEFhGTnrqfohyXFb2xMLcZHCtRyxerpPcyGeXt2evz3xPH4ypH4VY",
  "key12": "26wceRjRY3u74EN44zZa4Fo9dZn7NxRkbCcjNbng6YWFWtdVAV4FUsmW29eBTNbqE1KLfWC2Q1NQ4DokThkrCJNY",
  "key13": "Y87EmZbnhA7dnYgSSCwKbBxFEL4U3ZCxtjUU9iHzrQrwMpUbXytxGESQ4vtMzFXKxqkErJjqZpUi75mnoDBnRcd",
  "key14": "63t3g22woqVempYwUGJ2wox3u6cvRE8H4osP6eif9jWvzUsUjvkp1i5pBvsxYqJjzwXexy2f4ww4xGLdoWt6912H",
  "key15": "4VPUWxnEtSvkNULYXWohZbKCFm3s7eicVeY35zSZ19cMtVtnJ5hk2bKeLPya8vuSHkMgE4zPdmW116gfxkAfzyvo",
  "key16": "2ifZ3e8LkW1uSo1mQ6sY7zskByha4nus9Xgutt2ztYJzdPh6K6smaeq74h2pwrBH5T8V6zuK1sFSa4x7rPHEp1ZS",
  "key17": "49TSJeNxPNr1vhoKspkn9rLV37VnxkMEr1wk3buu13uQaPB2nUtMAs8xeXHqye98yrjpoGZhrWjSQJEPcLhn8anu",
  "key18": "FXfeeZUnCuBBgHCvYu2TggkJdEWHY7HBxgvzKNCpDcfEmruUNKjCDmAyAF1D2PBUFfSpuqStqB5YymxpR8eUNHC",
  "key19": "5vcQWCKxV1xCC8o6pCGq3ejNkt4wTYYohjv6BAXSKm7ybrbpsYbVWYoaB1dbXsvDXGaWnuR8r6HX4asDaVYhrAid",
  "key20": "4fPjAznQDPd2npvqCzP56SmAdtrF2Yb95H3ePCLJimrjwzuA77TDV2ygoLxKRCjU7PnKvYvnEENNPsz9y9RyTkQm",
  "key21": "4iUyyTv3342CzGatyufERw6YTFUaAGTm6Sfu2yKrtNK1L6YjdyMRpvL5gNpfeWSZHBhdgm7ATPfww8VB4du4rQuY",
  "key22": "4aaoPKxpLjzzdv1YLb9LynJSAmKiPJXZXF7nxBDZQPWEZ4BUtHReHnRHWyr1A2bMGWtBMKjFkjn3xcx1131ZxtMw",
  "key23": "csjsMf2axrQpXxWsoJKbvaE6Q4H2cxHn9JJhC15kVgjBmmbKc4nArRFxbbU9ymPGjpmz2FtGPHvt7X4HTXjH2st",
  "key24": "4kiqFLHbThKafDDTptSVS1u7hcccmm8j1Fwuy8aGnv3BB45XX2NEEUBuxZCpStcBEFmLQmmmSkKnrWDT1juXCdHF",
  "key25": "EwxyyjHM8G4SiijdzvhmkPKBQ8iz9mVnMFRQEGhxLPmdzVQTsd51AVEyR3cwferZv8u5wMxCRNZpiaDmhKxADaD",
  "key26": "3ZHn3ySArjaGvqHEAuqHR7UBRtAVuFYsE5wCHh853mweph2QbEg9ov8NmTZ8VtKfkUTdwUKkxm4qTpkuD16gsQML",
  "key27": "5iFDu6u329WcVSxKk47bjSt8RwR7z8wq9oz6LnyF9LYTGuur2TJLCT1UZGRgpRSoUicA8CmC9xX2Xupt2wZfb3di",
  "key28": "4AF4sGUhwDo6aA7qBMhe9B1H8dsoCeUzkUQSDEA56DUAXxLybFYi2sg6dFLshTBWqetBsKVgkxAmLAWXoUYKqTrv"
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
