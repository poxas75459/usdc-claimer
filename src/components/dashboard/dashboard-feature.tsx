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
    "5vqgmwqBuCDp5MMDP6PGnQzhH61WZwgJKyPNAnCVXk27WjAxdvvwAEgm9LihmJVQWzzddBrbf1VP6ZfWM5oU87AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tbGgFrg7CRUmp6zggk3m2tpwDMMSGm6DxZ7jsuNLSArt4hNQ7bfR639Cg7hFAhbAyWwUm8VUHKWYCYrBye5wLc",
  "key1": "3TBDXEoL2NQsrG8C9mKrQwudsiLCcj9nNcGkQaUV4hwABHet3L1qgC1Lro5e65csdqUZxgAQV4PSPhJwHFCVkNgM",
  "key2": "2v3JdJn9oo9ReU7LSiDhPQCuUcwZHMnF7qtESJBBaYMQAsXsmGFkZ6bpSNstoHPXmn9PyPmZaTn8Lm8kdn1fS2xj",
  "key3": "3Pb5KWMEBS3TBVPfWdD9wRfmEYom7HAdRY8AkxQ3javRjt996ZPjAM737UhoR23pgg3HkjvL3wUNBE1JkEsoEAKR",
  "key4": "2gPCseTQF3r48AXVSb8D93jAr8LdnFNAtCtjeKTGprmF9EB9YJDhdofc97JAzZmphSBrxrqDE6RkHoadMxn9YWs7",
  "key5": "5yKfwz8TZNtgp5pe1Dx98U8veMAcEc9CJvnmspiNeCRzmCapy4JVpA7tHdocosE16Q3hgrBtBLHsfmSFbtMRmUVq",
  "key6": "4ycJQpvMbj4iA57NcL1GXXFjEcWYwzuz6pSk7oRJmdUU534K41U51ZLHCpkYMFqGSmE6RBiFT6NS8wGDbVofvE2w",
  "key7": "5hmYtugBnbo3dJuu9rRGB7P313zuu2s7TeW1DiXezAi47EH64tw64J3eXGsCCdEMjbMu7D339SEDCVdGnAwWrSYU",
  "key8": "3K5i65XNLko5j2uRNgAKhxse3QtrVf4Kjk88vduZ7V5bBY1LgumASUTEPCuB7VHMsRdnUBUy1rDAMFYgbghaMb3w",
  "key9": "nENQqwcQ5hvJHd2RrGZqwa37AW8JkM4ZSPGx7zY3fiYRxbYjef88bsa8WN8WiWmbvSLb1DpMq4jkLyeoYr1dgpg",
  "key10": "YbT29Aj5Pf6EEMY7o8gMURmzQv7pt9wAKzF2GQuXmdsNvdMKKdeMfzEdr7F4nu1uH8fXgTuF9aSTwXHNBDY7f9u",
  "key11": "2RPgCRXX9HUtCbfhFHDeQD1GWe7vmh8WnLsTbCM8mMbZWCa3mKhrk4REx58EcjFeKFBTWfLRCkVm1oU6ci15DKYC",
  "key12": "4duYY41aXSrPQsnM6jjAjfn4UsnENzR7HbpBmdHLf1Rg1M6PsHfkJFYtDyjih6yx3xWpfhWGFZa6s6cvpNwN7RtG",
  "key13": "2UW7A16RqzvDBFnG4a86VMzpyZqMCqUKPAkydPCRC9dxCJHhdYSQc27hdrHjxdkRpKA6sg91pd97hjGmr7dMWBdG",
  "key14": "VxZszPb2JnEPDTx525EmYGSY1DTbAWTDBFuvhfubHURAD5jNm6QYWDYneNBRs7mhjoWPShdR9VJGqCB9oiNuqqU",
  "key15": "5VS86BRwyR3QRys25oV477pinpPjuGxF6Z633bJxC1aLiei6WHin3wVMVRSaimAzkVmtWDdyJo4VwmpFGPUoHXgv",
  "key16": "3RzPjMytGAnSWTEukVaaqyj2fTdU3E6nBYprDmQqiAKNDbYtfRbwCJyGYEy3b6Boqe9Fg6cqTKC6VAbgrdYnZLrT",
  "key17": "284zV2qkRG5FHLhpRBbiH1G2m6tbdAwKmKVsPjCqruyeiqJFPb9Y3dV86j7acPRceP7Q61bABsmGhPjK6YSbR2Ak",
  "key18": "3mzcZ84iaRSzzDhSGLsnhRs78MSL1LbkowNdgNbEMNgQkTFUZg62HRvn9b9JSSCLFGfZu3K3xd2qaJb4uboEoJb9",
  "key19": "4ZwDn4kDc6DUJp7F4M2QtJi254Q9S1zp4gkAQc1BtD7fzDrdHRwvFWDith4Dr7ABThR8f97GhnyaVtNPYNmcWWQp",
  "key20": "3UDHRgyGupdasQ2ttS32X2gSEVy1XEofu3uScd69xy2PBrz8mriLV82rWwcGyvnFtB6s4EonX3CVCsKAG2y4qoDx",
  "key21": "4V1yYHBzRnJXJn94nDbJZ191Z4BaWSPCdsAQp5yam25RVpnytiqZjZ4qS4gwcfT1dpLsdHW4wXycuQmUwaxLP57G",
  "key22": "39iAnP98WDzUXfWyr79ifKbAfjMNbp5htER8G9ugB25C1kdL9HNeTnEPHoZxd8RY3bdRorjs4MAG9dmy2YuVSZmN",
  "key23": "3eBxa8Y7VePbuj2G2sTcb24L8iSz13zRYCq4HXxKsuqVJnPwXFHySD9Xpq4TT1nBDXhizuzCajpNzQMFtBNCVq8V",
  "key24": "rRVqEGbt1Jf5qinkoe11nR8rnXZaQQYZewCnedAbNmzMmTpbKDPHA4Ke4WVkPhnBhx37jZqhA7HPCjp2kYy6tzX",
  "key25": "43HD1Ka5tbpDSj87Z6jv5XqymqVeK6fxewPjiqYNNVQxyCBevmGyoUvw6mzC32EyGVc6M3WqnDesqCd5LHNpiDn2",
  "key26": "3LixFS147pWdCwdyAi2QvRgXpKAj9X3LgMPqcGjBwMBqtZ48RzN5R7FfTR7kJNxtybShFCfvSB2Z1knSx2SHCzyv",
  "key27": "wtr93r7AwB2GMvARt4uniHspznHSNZmq58tURKcBdsHXHz6846mHE5CVAMksjsKTsLerDU4axFPFH1aw6KmA7Go",
  "key28": "2DVZzSmYmwdkzHcF4S1bR12aMqpchsbcmNkFwtyhZWJ5pUBvR2CLQb2kQ55aJh85E9UkTKk3yw7zYpLsWeu8G4PT",
  "key29": "ac77FEk9dBx7LNyab7SydhUi2ogFBvT1AgRWcXM7tYaqS1DZxfKLZ9wpujGAVYnuxeND659dJgnYyNHyQH7HH3T"
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
