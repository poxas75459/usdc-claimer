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
    "4Rcj6AsLhv1LDhnc8QnpFaYxssiKNDS6Xt9CYsFREwYiWArwuDvYhAmkZWskQ11U7st4sdGL3HPCqQJfo6ZN89Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665SJMHT5mFm8KaD2iuoF1gYH7bMRpGttw1T9s7SW5PJA4RUhiLhfCuHiNYgukhRwjpfxLafXKTjTzCSoDUJkUoH",
  "key1": "5ZuipJ1CCnMeCywHDCZKcLJqQ5vTmM6W61uUHbSTcZSubzv1cDRQCRrvvkqrdYNhyZgRc6cJr7dkK1u5VdbSF79f",
  "key2": "pYd1A18pC8dbUoRrnsjgX7GekRXvMk5QNLRFiGshNJvCEERAA46hziYtS6bnsXBdreWM9XDzWh5hcKLgsJmm6w5",
  "key3": "5HegZJ8fKcEBS2VbCN1tkdCXsM58vgvv8jcNZfL9pPq1fkPziCsGGSrTRginY7cqDtJBV6FuxLgnAK7wwYhBERy",
  "key4": "44UCXJ6Y2gKo5iu2SJ4oNL3GzkFKnKmPyL1FzA2XAxU5d4fd6eEUhTFCbd9qUKd2zT8QJrhVKqu8LNuPzC8L7joT",
  "key5": "2mnXc6Hik8ajqDahWgKumF9Av9Y2azWqYKfNLwarLVCh4tK232ruWHF1SUACf6F2exF5SwMHUfJ3KmE3HPZCbUBm",
  "key6": "jki9vUKsAttN7UBu6uv3J9hH2KRa7XcqKTkDSaZqfYKAYteEvmaoxoT1Fh6Sa82rPMcnyegSj9iNqw51mv9aCpo",
  "key7": "gtgWdbPqGJNepuZi1CC4kNzF6BpwUq18SKXvnzti26HepxGqeXJKAXVcm6CCoNbeTkw19Bx48vu3DYc2CK4P2fR",
  "key8": "2Sy3Rgn9gZ9zJHjLuHcwcaUJWi2KshzPUx2AZzbBTLSmQDKJ9dFqbYjDjujQmsgJGyERGdrttuuVsMeGPbPAs4r",
  "key9": "1w8bDbuCP4d1LUYBiX91vZoTWcSMtg4jbePn56e6vFwfZkCYAK2sM7dKg5AdEG9ri6SkYEHK4dYQ6qwYEnYFUYg",
  "key10": "DGG4aXwifYQYCLSeDBrL5GS89bvqoz16jQU3xWkBPSjLpKiu4Ays1SuTtXv8WLGAkmH4PczRu6opvn2muwmLLyA",
  "key11": "5FquR2PjTBxxbQr9kCs6B76HcQmjLgze5GRsvmKpgrD1RDxEZzAfmTKun1eW3Zfa7283GqySW1ZWxB7DGNysPcwN",
  "key12": "NwiEEMDv4nJ87KYPaQmi8DZMe5QC3B5qqTVnWNT4a8XaT99yM9ZjBcL9XmVTUPmzqsbgyjGprv2m491tjAs62Wb",
  "key13": "5VjC3rWfiQZno9pXMddxwCnd8pWWegh6MfHaBrJqk1zn6kNfnfmRXsuQPZ5V1tBRnqDwS3pCUUTVLBfX7sNnHMKK",
  "key14": "5eRUDsanjmfLDH57uZHdTxp2JCrYZkF8zQ5Z3WHX71H2RXRyTbQR5RnHkASRhSSqA2HgSwJrJha1hvW5ZQzhWjNy",
  "key15": "43vMsvE4gP3WePBYpRpv8mFE6qQcfQirFSEZA1mM8tFQqjxL3qgpJr1YbNGHVy4RN6c9Mk18cdM6VXNA8CnoaJGq",
  "key16": "5BvX2wcbtuuhWoWA7LDZr2ueg9WHRpFX299LDbEocxY3rUyiLYgsFrDcAYQRTpyk4DSRMSr8cTPFiQBxy6K3AKWV",
  "key17": "3iqBtDe1rEr2BbqG7mLfVJS3gKVdRaQZPNpQvESXNYJN3Tg3nNZscAdSRL2JdfDVitoRr9h7gejtpR4kPzR9R3XE",
  "key18": "5g2jcnf88Hz22RDKdJp5Qkd6KvQHbAvGcTpQ34G1tSxLy6oqRNicG638UeBbqjtdN2UjfY95645cSRwdPqGfVuvw",
  "key19": "4dYFzFqAVF6fSNpJ9M7vKVzzbagCBpsqGu5CiQK5usGRd9YHWRUeibTRH38eu847LYCTJQBNMJZndMm7Xd89kEoa",
  "key20": "5DQcou5j9XR4xQx62Hs2DsucbtXDhtPrCJYab4KtstpfbWUTqAFtm19pH5UE2A9QNVdWy27mTZDxSRjw5Kyh9j4h",
  "key21": "3wywHVZrZrMTVwmQYqfCeWjorYDrYUCxeRyJ3SY5bGASC7UQApcyvxKW2JvHWdN8xUW2XHJnWXP2dTG7b7fASANV",
  "key22": "5YrFh9o6vgWJuiqVTeSFWpptjg4DdcGrm1PB9n8vLcC3B5tiQpio3cRQPFx8AhQxJvn43sU8kKUaNJogE9ZNp4XA",
  "key23": "3yZ8RM15e9iiaia1PUgUyEKdsmug27JCb6H8sru3AXL2KNpPfMuEsRsyUzGA5qhdpTR1htuVSBx1st46mAx6cSA8",
  "key24": "2JwHA98ersuDLgwFs4pwo5rQypfcCwdjCKtqbPN1gm9aepoH6qA3WT216CuEWdQNNA7KqYMWcRohJNB8SSRCgBYW",
  "key25": "4sGRhK2skym6h4jCKA5DNCfs5AnoK7aqD2AAkdHY54nDRNxGsVv7yGui2EPhiZNKvZKMXJ29rEYKMQd3sDvx1X9v",
  "key26": "22GiD7FNahLKFoeAbpmetXrVWyY39FpxbTYW9BeZ82cRTsXdoEStd5mwNsrm3aGf6cLhFZpCYJGoukfeuHj9PtyD"
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
