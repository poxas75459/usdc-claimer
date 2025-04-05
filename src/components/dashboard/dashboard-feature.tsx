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
    "3Nk6GrXZM9UUCoLJBo5LQjGLtfjnNTa3GTAdBhtzkhf4etcZRRhpgpngXik12jt5Cr4SXsbTuTrsUVyzmj7RiV4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1EYpjP3KESB4yDo2frMhnDbSxMrB911WBq6w15usAuNSXBpnScUJUMdiMSwCxjL2KfGg4EqFDwAm5UycSo39zH",
  "key1": "4jX6uBSUWmNuFbeKozhNS2HR1Sh2Njebze5k5T1sH6ym3UYqPkXDwpfpwmwqPqzVrLc54iRLoxaEUFnBrJ7nXdrG",
  "key2": "5wGP7pQpuBhfF2vXXttaUWc7yd9C7SqjLU4vra4gYsVhbqRwPeWwJo1UZAPy4iWtHsxWwGNbPZ2byLAR3tUzXscg",
  "key3": "1n5FWUCgiUfjUPF3RTQYN2xA22iQqvVWLH33xwNr5tDnpgzjMK7qdSLKhrtiNcgpn3VrLNXuUqzHStZy7HXVa93",
  "key4": "4xQTKqAdhWY5HgpMCzet4HHVfR1jvdDYgJV9MKu8jWvepAjfqyj18o1PXLRC8CsaC7bwZ2bks8w4UNe9hECPpz5J",
  "key5": "3xMB2P5edkAQv9WR3n9ssLDXv2bPf7AqvTo6veYsSY6wPqFb2HXUC39hLADCsfkVgNBDihBHzn6tH6vRYf9ahNuu",
  "key6": "TiW9ZEwb5rP8b46FDJ8fbx5TLk82Vy4zrgPcdM22D7nZr95pBcaptBBTi33ygoDCJ8oz4pyJszVWgugviEXvyiR",
  "key7": "3UWR25Vb4Y8Ho87m1Bwjha4cyuZsQvHzZeL3JgMT3qgwLJEjvGGWqhLyyjEUA6AKb5bC4im4MikrxPA7qmMUhjQ",
  "key8": "511vHoD29bg7yyYeyyEjw6hymBZ3DjXhv4oVVKTEbN6LVK3GXmSPj8KnuizjgmmsGpKDh6SnWEDB5A6CAgpm9Mzk",
  "key9": "espBhF7b5ERjGgGfAzoBGt9oEhVpvVP39EpRSwHz8jftjF7tpAsNokvmcGDiPgohN6EJit5QpYsVbQckCnETb15",
  "key10": "261M5UTPUJErXnNurDxeEiLhJQj3nAoc9EMXVs4jj7jtGQg36JHrhDKukKgbK6fbqkaKieYMzvvef4BwiTeTghjF",
  "key11": "3kRPizVkowHDVwTKTxWubXwyS2SDLpTBKHZjabbTFfAcAHHcoWuZQCysTVMT1kc6WWzbZZCHJCH9PuP1SkM4945C",
  "key12": "4RKmcedEgbWtiEKUBjq5e9FadoQCmdSJVRzZtzSVtXY2G5KUTHFnxX7kNzD47HPLXLAAJ5T8dnVPA2xXFCCXC8YP",
  "key13": "2QxXJeEpwQ54D2v35Fb7nKhWsJ7FAwkzAgbLCaG1cjXbDGeLt7TgXi4Cc8SxUzFM2XcnkuZSSt6zoDv2PmJTZzmH",
  "key14": "2Z3kN7vkGHhuCntsXmMt5dpi6VW5SJUGj3ibD58fgJTjxEhScwxyKCvgtTAs1xXgyNa19HVkE3w6GtSwweh3TrJL",
  "key15": "2wt2C5sjza4KdWtEzGHFJ8jWaUUamWa8DM8akunHCuaptvDWta16MJdWmPn9LqkKV83yzy7o5h5HjRrbDMGZPg9M",
  "key16": "5dwYVDTbChBmcd9MvigBCftFD2fjukVeEtYeYPqjeaRBXVmTxYnH2zKaLdTbyqopwbNK1VFipNZNRd6teyTg43bA",
  "key17": "gpn1cUoDaVkt9WSYgxUvFwrnNUdBCBWFmTy878kji6AhPobchU5prE3v4pSoPpL6wAnJ7AizmSiRDqE67DDPPbd",
  "key18": "pFmxahpb48Fe2Djt2qXYsgN1L2iw2f1oiprebT97NxyjfECCaNW1A84MhaqCTKo9N3YbjJ3yNdLSSUfy629SqQ6",
  "key19": "9CbAuPdimQRTtFGVExU9wnsN4SrfDPDDLEiQLqcEfA5fHa3MSh3uEZW86AGnyo6iStFk9pb77kKQVm6Z8wGvMU8",
  "key20": "RjKbihWxJzPgX3mN5hoEGJ4ujwQGnv13TJ2z2SEbF23mDS9ZNiEiLmkUcBgnVRAqVjHi4WcqZu1DotJEMJZ5knb",
  "key21": "2SoMWNTDHdckZ8pkivnu6fSmFzNsrTdqa536533JoZMZPup2D9uFpvQqe8BYv6FXwg6k91X7WChY3FwfP4sJ3JZS",
  "key22": "3QxpPww4ua5MGh5BxNNmc8atyN2rJCKFwLPZX2cZU5aPNXZ4mcKFHTdoYYvZij6yt1fJMnLWhQuDhvhj6iqKn66K",
  "key23": "4KLkrCD2Gg3MXSP76ZhUaruJUP5XELSWADZZpnPdjFvKifwGXfQTuqQ6shnDm5jtFMVTq3yXqxSQE5hb9FW9pJAn",
  "key24": "47kCUmZaT32zgreVqaLMC39zG7gdTEPoQ9tKf5ZhZtBPFXWDeG2jNbW2U4cr82HpvxKU9gA68vjSKARB8Z4AJ831",
  "key25": "2zjpZM5ML8aMqb9T3cTpbtSze4ymosUnk6Srar932rZuJNRKrnr24kSPqLdkWBXAQoFV8T3Gbo2n1NpJZ4TNrBvY",
  "key26": "2AuLB8oaWCttvG9ggcZ9fTU2xDv22JcP6c16CM9qvfVhawJJyNj5dVvRwhEgHbUXwn4oCA7bGSUErNW9hHm4ero8",
  "key27": "4njwz5kYm6G3NxRSXu4rRCnmgW1QRNjKYjaj8zGyUraf3iAakfDSvdkTntJ8LFV5LUzd8otkRXqpnwSTBBM8qzWt",
  "key28": "kTfDgH47rpNa6Bz8UbrWnKmfdNGtF4sF35E8tEk9X2zGNFCDnFbPMNcxtXChA819bYk4T8YYmxudF41mwh96f4A",
  "key29": "5LS5wmSSG7hi4ARstTvAAvUwY5nuVpGf4jSd1gHrWtSaRmzhMprWw9BXsBjWkmp9w41gTGrPdFmdzWFDHhHhTNVx",
  "key30": "25ZGqEYE2YUmz2gT8KKVEFUTkzcJJdhyePcWhxuc6NgCQjG8ZF35Kz4dHgCLi2sr2yfFeCxkj1Qwh7jvXd457zK7",
  "key31": "2Q5xJx2AFiKFqMXuPHzyVwS91zcC5S624sMHgNKh5JR11UooR3qohXfF1P89MiJKN59S5jA4mZrQh3dkwdrRCH4c"
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
