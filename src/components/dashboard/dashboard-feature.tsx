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
    "3cuR2YvGDnsBzaVmPzzrqpzs4em1fzeusp6ptvfW61Dsy1hDfkxVt3ss9GQRRP9A3xpXaZUdhF1w6CotKJex8MZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1B3KE5VDpK91fZCARFPc4wVkcu5M6N6pH8QyDmbafL3cnFa9vxvPzr9KkdftkW2VjBJhqAM338e2YhpHkqaDFK",
  "key1": "2xpLfmtouyJ9kP79jASs4npWYxk3KXP6P2gkSqKKfB9ZAt9dWLWDLUsz3CQsyHW4n7ywDGCFMx9AFH1gp3AZ9biG",
  "key2": "4Hn26H2ANPetzDnQssoJWVz6Rf2brKofxoPjxP3VzzCq8s4BeDAW4g7tHEgUA1VPFZ1aEnoqa8uyFDBvESd2CruS",
  "key3": "4WEJSvbmtZXRhF6e3FNX3zSNXctwp9XP2r7Wc3dAhXw5qojGKso9bNFCq4eSHXV4FkLhGX39jtMHiqEK8RKDrjfa",
  "key4": "3H7HyqraEbvm9pRaiDS2apSfEDXZNhsuLAiqECnFffVmTzUXzfKLaf3ihsLTzRtuGj8ddzqcZEXwuUwvqJtYYSbd",
  "key5": "4pUuGMCyPFAie2N38x5CrpJ3n1oFP83Hth4scv9W8S4ipcq2YD76ffNhsME3v7P2cCcFDTeJjF5AKeRWpVMcTypT",
  "key6": "nbcw7snPhptRrCMQnK2zv8jGjc5y8RpQDAWSPsosexxwkq5L74beuZFBxH51GCGYE6h2gkQ4C4DCFhZhakvpr9W",
  "key7": "2Eb48a7JF7FuMZD52hZh7qGivee5gfMuAD3wmUe2bSwGtWuekWBN3hxQxy796H7wue7zyidV28VxLyaJ4QXG2bH9",
  "key8": "4ZsGA5BJWe5FaqChabMmcwsBsgFvFqp17S8Kp73uW69Ges8ZL2ik25Htj8Ydqgvk88J2nFD7uq6z1j5ez6EmrMou",
  "key9": "3UKB8DiyRvM3XmqstoUuUD7dg3WiudDXnz3wGEP7QfmKFnEMETGHcXAt95J1f5ZavXnVNKuEWVGRj14oHbrQZuV4",
  "key10": "D2QwV6Do9xynPGRVBEqSiQCwSmCEpgajpij1iDtznRjpk5vR8mdEAQfzFHiPomFrzVZhVPRZLAFMHkVEtD6uYyk",
  "key11": "5wD4HiXmp2FVTQxEtKzaagdDHtiSqYnd4Dmo98iZmE4YaZV1ZAXzxdvzSP6q7eZd9sY9RGe7yVC5f6RMzxZKyPpn",
  "key12": "4awyeHQDTbZ3S9n827RjMaxyztxPqJqDm15La3rboPNtWTd6fLqvNTdpZBMfRiFzwpDL4KTsBMFfD3sXdYmkveQd",
  "key13": "2f8daFCnPmrt4T4PtoMhyqiafNFvB7LDJ7Liycvca5zbmYBgVn86eG1GZYpemnLKsdfVgJ9vXbW18MG7DocXehJn",
  "key14": "43Cmn6PyX3WLb5Zy345Zvmf2yYduTxG7K5TLpG25qQizEFMsxK4GdzJMtLaKYmrM63EcEK6nfaQLNWZuSqqRzPU7",
  "key15": "24dohJ5dMA1JGRMNY2Nq1DtCBUujDsrnwH6a8m2i8SBgnr4gK4jaxwBxucBDLW4Z5s4y2tFPGYU7emsgoDTPAPyR",
  "key16": "42bUpzxxhwreMRHy5t2wPrBAPVhB6KyPD8GT9Xt5nLLJJGwvjDf6sP9PazronRWzeq7e1DaJSm5kUAUxU7t6ya7y",
  "key17": "Gb5iBXBTPHdAZXRdwGM9UjgstRcjDDBiCwz4axMb7YNPb3iZ1NA5Mjx4kV6nG44Zde2Lw51HBUkTn2AEtvn488Z",
  "key18": "26nDW8fpit7frc8LSuZsa2Lyoob2CXncSMFiszTp9jmY6PzcFD2yRy54Bd7s4sGBNgQdi9qt3s7KaFpt11Qr7JLp",
  "key19": "35w5tYvKdpdSQX3Yx4YpewCoU3LkDrLu4K8aBipha6SuyU6gMuhHbaM21TXwaSR5vxK2t4L7DDq3shWcAamon7a",
  "key20": "2uJaf2qqhvuyyXXodKWTbFv5FHb2ZPne2uooanikFrbKL5ABnDazPXNwh5fYd3EBLotSYeKBtmZtq9FEddts5KYY",
  "key21": "2xPrYvqRYatKCANiMC9tWWu2ke6CEg4tvw1kiAPb8yZ6ojZ7xmBsK38R6kmLemDwTt8nxaeJWBjP28ZWHJbUgavk",
  "key22": "4FfcX2tZ88JXAdXDRTEZZkQ4QuwkSFMPMrBXweCaCs6GPPp8rPuLpMLJLq9WRNiWMkvLDQ8ABwVgxcvVckSWL5tq",
  "key23": "4DbhuLVN36FK3rkKGezNEmBcKHHLNvXt3NuVXU6V1jD19KzuP3QkQAqYXdhbFsd6phXRPA21Sr1P9ix5TKCjWdfs",
  "key24": "4pbsrHscrKPFZUj2wWDzko5apq9HTAACv9uradcvfseEG45JsoyvDSnC4DJz6TYe55jvretpa6n9b1Nb6TdjpKH1",
  "key25": "4HfGbzwbLMHQBJyePeV2FdTSV5g7QxUJUJWr3kWmmAxvcJZWaBu7C68KLtN9s1BMrjowsQ2Zay8ZBu73AkUFvKEF",
  "key26": "24FjikN3fPMhuf9XPa7N7YstPXgJTuAXw9ePXJN5fpC5i6JVizgnQ6viGb6GWfY7dp5Np8fqMZeQGNWvZM5BwUJy",
  "key27": "5zCjMe4QEoAY7vJmgurDm4AaUVh1xtBDE4891UBU6By5cghAaaHxYQYRZhMXV4ATABCTQG2JqXP6MphwegsGVAE1",
  "key28": "2Po9NdxuzqddYkccKTjmCLe9wHTnodqCpWN5Sh6eJJPnag4PZxxjNEp3c7aRFJpdmdAnr27LrUR9ejdGFRuShQQB"
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
