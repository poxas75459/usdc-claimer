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
    "4jGJZrGsW1Xe3dug9kf8D5JuYe5UN3p9bV8buuL5hrVPEaQ9Vpf6JXm8ovo1z8zkcqDEd83chbHhJajw9MyR8Km5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4trGkHPnNcrbfjNyVvpv6qaTui2UqMtgVNpqUTQfdXYqAUceSjARZtwk4jmcKq1vU696Mhp92B35CKRT5eMjSAHH",
  "key1": "TotWXGdUXQiztNjbdziTD9QaAx7KJtnpUQxT99evQwDBZQuehAGyVjXsqma9RkxbsLJGNUWVUXAAXNY3JrWG6Bj",
  "key2": "nY9JgU34nGhxypdikwVcRnzjvW4iYc86rhamc8Nxeka5eaCyaszFTfRfKvHYJs8RCqEuohcXwScc2eg18bS2yWe",
  "key3": "2qw4dZ6k7s3QaN7PkhLX7cVAFtzmf5EiaRvAFX159G9gW3PrzTL3BsEp3SeR5cNgGoJmHVFS4wCCJEaDNmerRHm3",
  "key4": "5J9tKPSTACmpYJSExNQ9Z1wj6CyXB6N3V17rnoZnHCeC6KWDgwAhHvwCChvKeeJ6pEhNZFpX5N5ZYoCVfZQjWmpG",
  "key5": "5P2n1UH2ee8BkHskKEXbKsKLnNVkjoHFzHUWJSy7BqzPTpWFdtFGZH5NT5H4UCAVL2AVjofYqgpemkkb6jpAomUy",
  "key6": "cbCwQivPeYLq8kpmfhv3tZg6dTK9n7SNzLePUzDjpr7i97kgBHFjhoy2SRLtr248sh4isMZPfmgFfDUcGkshzXA",
  "key7": "26xi2f4yzkz1T89438kxLAZ39SXcdFhjBPsiLmPbHQvQNm1Q8ddgqGrJ8Zz7DtwJEtPoupbR4RWX9RDy8nKSXs9f",
  "key8": "3Tm81tFgsjURs75e51pBiQSshL7NBGVcyf2SFxvaC5LqDfgHWV3vdJE8XKpiSsgHW8rbvvsz6djQtGR8b4n9fyBX",
  "key9": "4ZKZ3TDTvipuA7wAi1J6APkYd6WHCcntD7t8nG3gPycjUgGe4RdZcX3G4KLTxSzS3147yQiviqgFrGQvFwUN956N",
  "key10": "5e4C55URBHtPYEnR3sg8JJmmTgZWaVqEQRbMsdmqKfRvKV3TNHUCM8AkYjeJRaV5KLhRSGVS4Joxhy2P6HikzGFD",
  "key11": "5Bn9R2vrTiNzNfShsnt3fiZWWgrh1vezT4aXDLqBNkyEUBarPxrP6VvPEvmchYqTw4afjrrwd5hRTZjkm4gye46V",
  "key12": "37Q2JcfoAxSU65CBjinBw4LqWTVUTgxwm4MZo34t4aS6FaGeLFNMY4n9pxeXv3MDzo4cBmvTdHv2ai3kFbQKeVsA",
  "key13": "5WMqdYxwG7tmoqSLkyDCR9jzxRdBSFzHoWqL6myPqHEkafAzNCbQrh391tWBf43HZWTEr52hpnpeyvAuMvMc1Qaf",
  "key14": "S62EFreNQDDupxg6MMxBHKPHHXhrAK8fBEb4KaDKEmVmpNd9nuNdsqm9wxHLVFcXCXsxdmJvmwKy3s2FwjpatQ5",
  "key15": "5ZR7qUc8uJg1t1zdFCrAj5aBE97GUemjLb3EHJ1SziUaWS6TG6gACzwJPm9wiZ8AeZA4fKAqzGuLmXt5vWVFuVLR",
  "key16": "4yYZ1Dq2pdRDkWdzMYLtVVHWRoWzbDcHiFcvNYTRvCdznxuvvDHtivzLxgqpBFj6oA8VUnFBA3KNaBCCqsPgDUa7",
  "key17": "CgNBUPacYt7sJZt9Jz1FBZyMGnuLrKA4eS4oF4CijfquNuwLmkvt7TvzGnDRsyEbudtvjk3YSTgqV2KFqtkQTRL",
  "key18": "5dbFKL8TzpYqsR6S6LCG8NPVPr3U4S92qj1SRtnnPZsYmVPpSF7evDaFTre92qUeyQxNVYnwXZyPcPouyqVhYyUW",
  "key19": "4pdyrrmFGXBJgvnNSyQdWEhHHXwDBDAoqAwGY1mLTxv7MmLKZpBtNhkwWPwuQt2Royx4LkThvNQXQRLXoSsTuePs",
  "key20": "3yYYxEBuNzTQPjThXc6FMg2HPz3WaT5XiyBdBX9U8JjgnSe7pPHBuj1wJF9ZRC6WFzRnMrZYf3hjEnQV1eYf78eZ",
  "key21": "56oaak4pZyFgTW4F4DMH9Vky1oC5CbERXv8NQye4RGyBEt3aFgov1MGZYkRdP6DdXtKKcjYDPHJQZojSBHd1faXm",
  "key22": "2xBf1S5ZvxkpXeTvy9xPofEsNjJEok6YzT2G68zapJ46tt6BezHweCEgnBRieHZTr5eu7pCPtBxpFhwN3S2tV5cA",
  "key23": "5ZJP9rQM3NB6L2UtA7GHpcVqJ5KJNw4sYXpy1nKYGJSJVLhA7FxHUkHqCBdkaLoQSLNWh1fQVViF1kD7ZKogNF51",
  "key24": "5aUXB8b7Uv3ZnJicov8YPdpo4epwLCXus5mvUjWZoirWoHD7uUSbiZe7rcFLGWmGqFWGrz5wxK7wWMg2K85N1cza",
  "key25": "5RhEQWdR6938VMRSiX4she7bp8Z2YR4nKeeWdZg1tofHTCTVYxrPh4o1yNeyf7SkcxD2brYrSYoaufwKYpJRH3TT",
  "key26": "24nexjeZFtxEsKv8LntcAy7dBUwggps8ecwWPya93Nf8KeEashpESRPf3uWQexUakrX8KSXbpj3JL9iMJLNRVMCt",
  "key27": "56M3dUSgFUMLSCoBqEEcD92xjShUuQ1E8XmRUfDYqz6Tvx7NyMXabiJHyfjr2PjAp7obpSoR1Am1dmKSsC7Nhokj",
  "key28": "2f6xj2YRjjqmNbgivQVTyDwufkygfZqNHhUjhgK6yDrXZoLe6kzBR2UZMBBK27CFjvxmmsqKMD8ChC1JevqYwm98",
  "key29": "62wbajh6AU1Ma7Zu2kKnHxoHybNRyQeCbZ1XKeSj29AYGjJtGDZYcF4jjjP4V16qh6Pwzregu5L2pBBoRbEHR9Z",
  "key30": "3weXpiYiQZZbtCieCo44HoasyxJXdptSKPMDSQ5H8WVdT1J6cDPP4CzvBBfv3Y52JX6tLBYQvizH2snBZhaUVxHu",
  "key31": "37aGsasT3eaGEz1cZYiZyrgqtq91RHoLjqmxT62c3qwXykKGXh9nE1R9kaRXRFefUPgChsZpivH6XUkK9bK2bDaE",
  "key32": "4hiPGHYPhyHdgXRQu4Wo4NMiJD4zA6VYcscArX6ub6ENvr6WXwPaQNB2AfVv5W8F7FwZLoHPXG242TnW2gje6nMK",
  "key33": "42QFgVfRg8xfpC2CYxLqPzu3THf3vHzhVuDX19DgQascbshnYNJT6Je7XXMo9EK1tDufYta7jw5pqQjAKtVgnatK",
  "key34": "5PUZaUET2cKHm4ZkH1oGCuhLWm87LNez13EsoxAsiUsZBAe67qtyVejtJrxe2Jya5nXXgsq1J7jQYfJgeAUtsTpW",
  "key35": "554TSvKKM3u5dKFoHCbtwi724MyzzdsfSYZkR7Y8QwbNq3gkNymbPTHuiqVaqJfi4CsrFz1QZbpompsrhCKQFQsn",
  "key36": "571JbWgFcAy3vvi7KsZ3d3t2fRrggamG5owjL1V5ddfXbnTUWLM2DhGdUrD36UqFmvvHF9FiqCmkkLAYTEqpABPk",
  "key37": "EMyUCX6dCCz5UdsWNbXHRZKPMNYmr198xTvkNzHo16EbDfZewMZh1aphx2xP2gyYgQ1vSDwzkV9hAvVVgHP9fnv",
  "key38": "3TPAihpd47531sD6D9v23cFiLZt2CRgSyURMcTS1yTgKMkjVsznymGuhFzbtTfQhyPhkYdsbueHJv3Rh9r3NZK5J",
  "key39": "4CKUbHXwjDDuoewZ1dgeMqKGhPzdNmq5SzdmvfuwaLkLyFECyJS9xGiqrHjNhjo8WeP65c5Nvqu8ZhsMEw3BaHiG",
  "key40": "465wc8rzYo3mqeH7cpnnnukpedU54a3BN4x683pVWg5DgLyoiwRoHEHLBDJtTWACZpMSMgRfwj2z24GbAhMQm8A4"
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
