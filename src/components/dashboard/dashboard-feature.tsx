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
    "4yq4nkK3ePHRQq7UDjr3BYr3FgeHd72MgzZmD9Xd36BXeCMb3rdh8WxhkTSGyX24Bv5k5fC8dbxQ2tQrfcMhpzni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGX6yBQcajsUZwocURWy1Hgtvp396xhZEmwgnPCn7YjeUF2sdjBtTdrdpPY5vzdzsAZDbRLgcxj9baUjTc5BAGE",
  "key1": "dydapyDYrroW4di94dKUEp4eRnDRCqPJ9Gqqn9ZstbgNPVUssogtgTYrkiE665a47XbZDRPxvQPMem26PzrVBq4",
  "key2": "4w6ohLxdX9VEvGSLjegKpsNrVP9Jf7biSdHTYR9Dwg8bsiGpQagd2zizGsmxaHcacN1yhvJ3oWho7gSqAXR9HwFy",
  "key3": "ChzzzdFTZf8LRuDWmEq4wmuBrcwbVrw6obyVPPmg7S6aBs4RXNmFjmNR2x8FscrF3QNBLdSeacmRu1rdry4xiRn",
  "key4": "44jCcVaYpYXcjbyS61eetWdVyBkevSGfVnw1TBQ4vjyn2EkFEqs6PKZfruTQz14r8cYXR3JGgt7BRewsmgT3ueqU",
  "key5": "2bHAQh7RiiWb49cijHQsQ3CzGYULN8KG9xfbN7CBRQCEGYYa66cDBCDz9ZR1YsG3ftwTmSYi11AY7mmHj4qp4YCa",
  "key6": "5kyYaxWjLdMnvzwVpKLffFprvJmjeMuAtRqyttAb3gU5up3CXyegnGa9S32ggmJ3aWn9B96Fjw9eJfa2p8zYMBfp",
  "key7": "5rNx7xhDy4xfg3tQfRWWAajuvpr2qWHrzYH9k6p6rmJh4Aa5t2MpGYqyr1u5vjEjeaf3jQmt9NHLfu85URtbexa4",
  "key8": "3SU82XoZKWFCpPVKVDn35LCEjV9R87kfLXiu2oHWCGmBRJQk1uiRgkioLHrjq7J3tAQVaMcKhzVBwABKXGvg1Z18",
  "key9": "3UQ7uTGWXyp8bshv2mZnzzwXjzusPp1Mmco5dPNiU77QF9JYRSJyTrMyQrDn3g63hTwhoiiioPrMbmv9v6t8hWD8",
  "key10": "25W17Tf4AF6wY6Nduzu3VhoW9rENU9gamG1vLt6jNnCyVL9rzBJEFgQb5YyVV1cUmKBEXveAHckkuSgm9w4Zjw9k",
  "key11": "2E7s5FCM2qZcHtKdGFpkY1oFHR587q2CcJQPLLch1cJCW6q7m7GU3ox4ruDgMeTXXNXUQXFtgMFbaeoCQFcsasWF",
  "key12": "4RLRxAqxKDeY8UpLuoxhSJFw3Guj976dD3NiEPgp7n9FrhTsrC1wkVdGXEvxCADHKSWj9Uftd7RwyCC1yPueaDJJ",
  "key13": "maGti1MdcE8wasf8vMd9YS4ub9i1bob2tyHS2Z47LZfbtj4tKFJNmLNTTCmq2ybXXHGnxYiqD7GeRtJxhh429B8",
  "key14": "61x2GLtpGmXJXo8QSQSauBusNtjrzt8brsAdfHgZnTkTwCHpUmxozg8eU487PcWKhCmu7L629p7Up68jY9x7ivB5",
  "key15": "3Hof4LWhcvAzbs7CS8mMKA5vfVporo2WyDA3D1AYuSmp7ymGDqEpi8T2ofLoi5LkV17kTDvCp671TLn3DjeYPHv",
  "key16": "5LRdiCUsFnBfBQu4ZKaiXcjzTYPmH6KKVQhdYzUmF5Lr4EpKtxwHH3D8GBthDT1uVPaCoE6ZqSK9dXpaR2T3zPDm",
  "key17": "2TvPkEhDrqvW6ALqNCraQwDQBrcvePrS2WJRAUFfdykANUV8rVgRYim9oJMma2bPDhh8Dcs2ohxjvD7qVP8Ho4gi",
  "key18": "5oDFoYN27pMe7g1v4N5VByFKSKo85e6acyowjHixDPfZp3gJJJnTT8QHj9snsTBM68RozfQsM9CP5LBRD4MBwBto",
  "key19": "j7CWfWHV9AKgooaZne9fRT4Z3RaDWSZwxeJDQvA6zgHN94EjmQPMJg1ZfjvmCFVe9UaCfpbx8BjmSbkcSPQMEzc",
  "key20": "3i1qbDH9ia22Hfb8C8J3iNzXuYkYE6mu9NXadqtiEfPyTALgAdFbtYjepbTXVkFod9nPf5v4DkkvNvEn74e6cUwy",
  "key21": "5WLHNCEm9nwSXbNnVmUcAzfA66CfTrHd4rUddXHtrumHa4ZrgKMARBGWzpEUo5vcMdKQvPrKGfxZU7cBc749R9x6",
  "key22": "qh4yeTJorANSpMgGEzEMaaSd7FPWaXh6Xv83P8XRUdSiz2pzudirpg5omxqSWDJKeVFLL4UdaMbce6ZyznC4CMX",
  "key23": "2U5py9wbo4HjLz1G3UgCje3HEqrVnv4phsReWZZM2rqgST6i6PYXhUNxss5V7bhntEzAN8az7UUvxZjUdipK1g6q",
  "key24": "3sUbo31iLF1bCELWScCzssAnLkzXHSFaAms7qmeWsRPmeHd67EyrsEZevPr3Ke7V16c5qtYNtv6WFTcX7nJ8qxLX"
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
