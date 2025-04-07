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
    "2vW4WsJfDwfw9KUdbKrAMVxZ7bWpbEeNKQkntVwpJ3R7BDudonmYwCoVzFn716EeH9fca17DN8eEmNYJgujdTmcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVmas12bUaeo3nm22vp8TMkYAwe3R5rAe3jWHNUitAPrZVizXAKYojz4CVJtJSARAUmg9xRJKhRvxBBZfqbH6WB",
  "key1": "4Cvq3vRXVqGAWjXe4x2XB9EkQgaRbBdFj5NQypN6BB73b8FUHmWtM8nvdmFAGtMgTcsudSTcBtNXnr37ZuHjix39",
  "key2": "3m12q47LXEdrEwACN9A6mFU8UNhrAUVLmmLnNtW2agF2LCbedFMTt7VhKvgrFucQKKLJQ6M4LU63qd87zVa5DCAR",
  "key3": "5uCoARKHFFNrdPL9EAgb1uQiXvmueUdYuLmWgsqDgxLodDZQo6YSrbdYzd6Ahe4Ss7cwYKh7CPw75tSnS8zR7JkZ",
  "key4": "9vffYHev1s7hgiCHEHSYspBwjdxL7J77j2gCWGXXqaEACo1aAuAFXvJU5Z13ZR8m4f93uEf6fDcHpEzzvqXPuPZ",
  "key5": "5DWmumGAtPyD1WzcCryjMxuqRnXhBV5R4qX94XXZm5EA5WsXimzTnLXEP3xQv2rbo9hEapcTvGJkkxcUvcm1qaJd",
  "key6": "4vMbqpENX7mN4eJhnvb7zaAChTwxVMvyawGf4tAMn7rnNvxr3AVspUBvD13cykkB2ZjScv9fFyR1DH2hJcQFf78J",
  "key7": "3Ld8RBxMjYHDtYo9EhNSB33TfttDo3bxWo6N2ViDiMeEyTpzveva49oAG1V6ePhzB4XJj4YbkfdBjVbizvxqdXFB",
  "key8": "2eD3i3W2fb4ncp9b6VRzL349ZLTSoiGDbhyfBQEKsA8zBfUnAbZHUpbx4C3LonEGPoZzsQrfek8Vfjga4LvGFVQn",
  "key9": "3bdrz9M2Co7RawoAGXR2WrrQjEthvEijHnnfB1o6atSnX3H6KgCG8UHEGkiukfkypCTXpzd2cJwj1SgRRp7RcKbU",
  "key10": "5MKEBMitNuf4A4m8qWf2YkBeFEYypxbEy3t24oZnAvArLpXKb63SuRptzNtUYm9n6SV8HqNEjJViau2Ub1FksB8g",
  "key11": "59BPJsWSGujkXAHFK5BtNYuuj7TPXdCWP2MYTpm5tgsnYbiYG5zV6WZBsFWdRNnGhzQkjBAEykzkD4gpBeJAkPiA",
  "key12": "2G8YTcj9Gz3gM9hSXgD3gtEULzotrEtK4YC3YyW8FGGVLAQGxoPvVLs2GLM8teiDcYcnYHj7qNazn9vbm7Po2AMf",
  "key13": "4ADtSSVVa5DeCpuL1k7bz5XKrzdyLtX1RSWAAbnRpbp6WXe6aUkqUvp3f7j43FH5fYNYrBFEgQrFSXR2znt1Kjpf",
  "key14": "29KonisdPSH11MjThioLYBxPqRWdMmDEefovuo77jPMNG53ZkYg3XhvsQefbqLe2yc353gkW4hk5ZN6tmC6JH5Bx",
  "key15": "2xwq4zGUM5thCjCvBD5p6KNfGt9jeU4HVLGBN6mYCjtgBS9JoogYk5qsYMoRTqePHBzTZT2vhHSpJQtQNRiVJEm4",
  "key16": "2T7sdS6CTSAnZxdaiar2YSxmCuNN7fPUNCSXfMTEsMJgupzy2Uom7Wf2ea5yh5jXePCdavWBDvSPwASB5Tk993N2",
  "key17": "2hMStmKMwfQzv5fLhvDRpkmThJToyqR1Gjkq1VmqtHrFNiXVcGtyCZiRAJYhTUKc6nqtGSTznUBGqWi6bSTo5sKx",
  "key18": "5ZetxYCV8piss48o53ScT5aMWEmHF93W1W1hGb5RYi5PPJXH2bdk9GGuG2b6c9BpGEBYDiaPex9sMSpC1tunbUdw",
  "key19": "gBZAnehv3y2rr1okTb9xPi2z1373DLP7dUZUMMwC8jSyX4aiuEvVqpxpdNTtitvuWyE2oSRwpWgvNZJxBBUad9y",
  "key20": "NoQFK2nxDpcddjKkW9SVe2SsoPFf3XhXjTrne2YC8ZgUtjYfPHAWyGbNAWCmXoxSqkj6Qtvw13oDRAAcNCZzkdD",
  "key21": "8GeKtRaXrdq2oqHmcYbbfuAKrhUwkLvtpmDoZYAS1XoM3pMjUb7szpEnAzNAGDS7JuiyVetrGJc8ch6xLhYduxX",
  "key22": "f8HNAj5GZcVMzMxtMMpndk6MhrPWEhfRiZkBfBhwLgLKoHq1sSowyB8XxE64844odndjR6ZChCX8uuLKb9KuFZL",
  "key23": "5qU9wJMjjeFwi9PZLevjTB3ymiMCtaWaZffDJZZkyFWFkHEwvR6Y54PZy5privktKxE3mf1pJGkdznDQGMPLmdNL",
  "key24": "ZJckEvtn6cWqLPvUUc8Cp3x2noTEH2YAwJQTmbTCPP3QxKYyCFjjswnMQGk3uqYCXk6qZ1CU8qYFGURayLQPaN8",
  "key25": "23Vi8xCFNvyAvWUaxCg1uPfkjcP5HYLNu88DR6xhB3Y7paR355qJ7z4J8CAnAKCrZfLzEM8mUtH2unp5rv31wXWP",
  "key26": "5ZJCEHcQPscaf9KXmsw6gwLftpkgxvr3v13ktg7CWzn2drPvHAYmHVHd3kk1YtP5gBLzgKrPP7UUGGwM63DBNVUf",
  "key27": "5dCFUHZU2rRrqP4Vw1kysyV7qJdERJ81rKxNWVCwEsiYcVTm6GC4Fp9Fm36FmRoB44kawLENm6mUnf8NS44vUAyb",
  "key28": "5uhDSgvAg8qEfcuQb2ntRf8jNvL5hmiH7wwzES6ME3xqve1Mxp9vg8HoV8hCQZheQkUcWHnfpXAfLJGaaFKhkksm",
  "key29": "3H6MuopKamty9LBtAzEWomwAcREdVPkVzVjdFkj5Lz6XeqCEys7FSrbQmgwKKCQGYn9ZxEnHQriHNRsdSnSzyvK6",
  "key30": "3GzvWYXQJbhSfko2dyGvVsWEAxS6CtcmSiWHgfiZWZrsVn6oWy45NDUFnzqFFuusfWJdnRuvQAUp8r1EE9ouCFdF",
  "key31": "2UP8gunbnw4NRCXN7ExavYJBG9RKScwBfPn4r8xrRkE2oZZNFA7eMFUHCVQVrZQnVUcNyLHefVAdBCDLr1383pb1",
  "key32": "2SwvsFAQhUBrQJ6nEqVbSk8NskRjg8nBMbBGGcUwCf6xCzB2tivbrYiPPToB6RfmLra5hCB1pNwY9wSM1b6nLdYq",
  "key33": "3bQxCzYbb2ALDQHAnFndbx1b62eorim5AWVLWQf3axiTmXjaTj5e8DAGdsVCe1TpWANkYr9vNqqQmBVSYbMbFqYU",
  "key34": "499doDXRkuE8XBZqMVhaEjqRTfsts7gkMR36V51ZGRF9Pwh11TzAKpCQraqBeyWWZV8QMos8m6CRKUU7DTpbnqBQ",
  "key35": "5tTYEp3iAQerDW7VbeVYA2dutm2qa8XWikURGBuRrQi2AkQJNDKSDKxvrrVbr2eV27YcrFGj6qPvoZd1jaCRcjJK",
  "key36": "3chHp6aFxhaPiSCiKXKFnzR3tDaogQdaAQ61DMrQnbKMqqNkgCamcDAHoT27u8EoZMsBYrrPVHwhVS88fcy9fRhZ",
  "key37": "VkwKPKjeJceioKdZgxK8q5NLkCqzYBxDNFA2CdoNuvWYGrAYsWPnin3eVCC37wqstSvUPFn9ABLm67wqu1A3udz",
  "key38": "2SVpSiiJgbqasHHsKSVRgSP9mUEXk6pLRhxZEpj7GfbHRc3iArD7VCyXaEZoeVSkgUKAM7zdfQ3r9wSgPw1wfrfu",
  "key39": "4GCGZWbQ1LNAKoM6d24sNjbdcLCxjc4bAHVrW5EVkGNAkQYC42nTjKz9677GJFK3m7GfBKXQoksLFofFUF5aMJYp",
  "key40": "4iUGQEj8iFZg5riV17sWxuUNcS65Jw6Hnjr7Sikect8JHmS1NQY7LqqQZUmrDjxEvu3ZcTJ8FZCEncLPP4rvneei",
  "key41": "wr7b5aYAgcfv7zvmEmdqAqur88M7UN1mUJAFgQDqFubCVWjVxfUn5yLncScXvGjJQ43PMxpYvcg8bGiSGPAaJGe",
  "key42": "3oBe7MuEnWBCUceA71JxcTDg3zZKgsUXknDbaF1GqmcyNifzPV7YjQ4YdWeEQtw5q4XhR8de76mqrNqzE49xfCW7",
  "key43": "43mdvbY92Fr7teYE8AnJ3dp64ApGRH5gWVxgnUN3boxwKa1mFMQNHtdBCzdiT1rhPmUWw6jKEiSmMvtkSnvPgsRi",
  "key44": "4wwi2KFBWXhi1tWxc2Kmsd1uv5s4RHCWM5AWDCSBbDQK86wLKaPgemSy3r4mos9QE6cY7eSZDYbYqXvCvyKLez89",
  "key45": "3vN1XCj4kcUDbn1XudF2pmvJMUCfH5eMpFdkfgHFai7cFLK1weww2HBKji9apPnpYpb4R7SnNDKeSDUXi9Dw6mfd",
  "key46": "sZqYzUTYGpxv7vB6dvbqwekZLpCvGqM6bGeBbV81T16b4ienhX3LjuifCk2zfyUNiuW3A8EvHw5D2gicubPddk4"
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
