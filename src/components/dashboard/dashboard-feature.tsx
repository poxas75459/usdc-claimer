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
    "4oHnvqzdxKvzA8ps71mdM1FsoVNQfBriSBp96wSSNd8X7hQPuvCWTGnAoCYG7pNQcCGhm79Me7Lkqs1CU6gJbBXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqNp4VCPn25emFgXB8VumUD4tkYHL96pJ62ztFDAEPUkg54GLHPi1qC4gaj3VHk1PhPjyemHANgzvhoNojTcQdJ",
  "key1": "2rqGzJZVhcBB7Gazv1SN2f3wvMphuRehSTVbznLZzykWUHyLgqkAEeSmZYjKm8r4t12nUMjGKx68kYVrqc1CJ9Pi",
  "key2": "qVDHWjFHQY7eXs38Az7waoHjWjqhG5gcGyPB92VzhgWakFMvx6QZuhPxvQQqfG8eDeBfxFcsAER55UBnXiJGeS7",
  "key3": "2pTENf9NL9pS696NVoSZVbC38fLS4BcVsbbyyf455pddxdyu5EpmUtdsMHWFW38HspJaWZdJQdgw3YKQKKAYKwC5",
  "key4": "3t8tVUU8dbA7VNHnFSsMyRNCQ6WEZqFGKHbmrPSxSgCMANyZXL2tNZA1apTigTFTXRdrPsyqJsbDY3XtDC43NRTs",
  "key5": "4Qfjn7y3A2TbRW9sbVBbvErFrPgZxM6VrB4ZF3JeVW575n2jXVz4dNztYeNtBiA87CZi3Ct3Co8vpDGHePYGjg9K",
  "key6": "4nnMoDcVmmWNuKidDpCQBUrgRNRKsU8YqSHkxRPEj2fLLfxiMtLCJXPf7L75rsR2RSfrsGYKiRgRRa9Visk7tr4k",
  "key7": "3PRxDKRS6zeJs1eAXXPZtcCAnW9jGBGE7jsyNrZcZE1hHbHKfGnH7ZcDDRjMyqmhmubeYo9zENz7i3Vg1zTqG2qB",
  "key8": "2btJsYZU3LquV3NK4do9oHsmms8XXLv3t46RZS5LKmSdnS3CeHXyfnrtoq6vqMUpGfkYz1KkscgvK1sm1FjiuER3",
  "key9": "3LGqtfx1ASLLtY8jhsjiHrVxD8o4vUXdSQFKSp4k6jjfbdnVX7U9YJ9dXWL5MK57VJcATDcBfJSLLFteu5bGmc9J",
  "key10": "3Fqe2khsQa5HX5oLfcfRVSHi7aCa6dnaZyAPdkoDviRW3vbeJyHMGmbo63ewUHhPDuYaa7gj5mzHhoY8tMPZtLj7",
  "key11": "4BF47FU1NCVVntUqmQXgsAJDPMDun8hGsdBiR6dppLg6UF5fEL6ZULhncXrnCm9AsiSSePYJHNeUMjcRjTAfy2yN",
  "key12": "svtsYbjaXCVa3XWGcc9mfG1dydjuTjk53MjEPAwC1ouH5vUn3MJCdpEj1fVYdUMBnGt8yPCS43K4irFVoMC34ER",
  "key13": "5Kdmbu2hBdAUfEcMArp4sAQMHAVEz2XSZSqtBTRr7YZ6EQ1nmUk63VYnzsR9WGvNBRo2B7uQXruMcCom6LZ7ZFH8",
  "key14": "2E3dzQQ1LDVsz6NSSMMUG3ANhQQFG31u2AAXDUnGjgFU4TB9UiPNs1VjdYCBxePpzxMKvML1K5QXiY5scvpTBoCy",
  "key15": "mDeF9LnknQ9j72Z6dCjQ1uPJ3FBUFoxxx3ijLDBmu3FZGGcGwHVm41U96VEBbLuKNZa6BzyE1cEqCXXZrDbQH3v",
  "key16": "3kzXHW7TZoUvoPUgW4542RZuCzxkejoUGpgMSFr8WNMNQ17LUgotuL1ohuGdRx6XcwAGPtUqsHbRkWt3Ci9BP7tV",
  "key17": "5FajbQyY2x6xzYVpK2VexVs1qtRAGhBxeVyn9eonaDgmBxxd7zsivrYLmmWacSpdD8NPyEMvNK8nkYoZCbEcTfou",
  "key18": "4wKhyBBgKkKTF9MCq8vRmb2D8GhdFu7xJMEPNaftDLiHe87RfnDXnRpBgmnwH6FfPdRnubah5k3A5yTewHfQ7YAB",
  "key19": "3aZupXuNAZTYmS4SLhAMty2Je8fif89r9hGchKaHpj34hKpk42fa5XNfPCkMGU5G3To2CBxiZT5FFRPpUKd1WcRa",
  "key20": "4XhD5LoBoS6hC76yd6S1GCX4dtbfrHCKfdUmk2wPGP1CXpTpEZqTPWyd5DL2CBrRFDm5YSBrSDrs48AkVbKLkAwy",
  "key21": "3yg6NF7iTMN1yM5AVaF2K4mKYmmz85d9jksAqqhNrhhi4JxPCRhs8Ws9uVinCaAPEFdNvqFyoETgQUD8PaxQ4UKk",
  "key22": "3jWXdEqLZuqd5dca9w5GWjk3eKsvyT8vw1a4XuXfXfSsNdNpR2M5Fw5NqukUx8qsUmmPKjPZDDuXckiEuyUwD8k3",
  "key23": "3pZJRYUqLiem8WvsRh5ipduYNREAjLhd5SeDso1uSFPUCE1DGdxBwfd27qYiJfwWL1HQjN46rFXDyanNZBvSq234",
  "key24": "5KHwg74Nd6yVHNdjyN3E33qzcpUtHfBaWybUhWzvGSVRBVHMxyepA8juaSHyzh68ypT9aPPChF7rF6mLNxU6Ubmi",
  "key25": "3tfv7QdXB6vuCEK14D4BfNwz4CGRiZFrN3Um5LgkWUb52QoLzK4LiGQVHqxTRKsDXYiJk8hc6fpqNVYADavetEAc",
  "key26": "4P9jtWnPCJa5oZNUKQrC6DpiVypeTZMDv9ZijMTqSSMA54nTQeCqna1uNXsFSW4HrzQdJf6Jrk8wmo9EsvYu3Vqt",
  "key27": "3Pnj24LC8wsRZ6nL4BUpVNTJfaWf6J5u2kGpGZQ2XM3Z2XEjec6AAM9ScjNKtwEeFFjxZjW8baSVnPVkaWvmD2dz"
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
