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
    "5cD9gtebtzZaFDaZwjdaTWAo8M8vM6TXG3WANcyogQqvMKZVCQXqPofyLBYUfPYFqd3N6ca3UhDoPAFUHzwzhqzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BYx9sTxuSaGSCP43i6qH8KHe3U6scmLG1Ji7Jd7gqvWjqaJ9hz2VmdfDmya7LMGggE1jLb6cch8mKwHppShaeip",
  "key1": "2bNAMaQEGtzjgjWTREp3YckGV9m8tBSaWNTuPKRTHXcrkBNFYzAAob5SKMBvwsCAXh3HE3UjfkLwfTJprWj7pdTV",
  "key2": "2eRQ1oxDK5xqy5AMGPZVHoD95rc9hgAQegFugygByMXJsWr3rBbMJyvDt8oyJxzWHauWdEmVFKd3ZjtSRtZWqXrt",
  "key3": "4gmF89JJU2K7njUau5wMWqTGZiFFCdeKdCzxunB1RTpu7sxFLsRR7BJemEV2RhAcLw7ciEFzEeMxv8v1fwtd8wZw",
  "key4": "ZHiENne4EibvmJV3aJtfD6Sokgw5Af4AV7Rv6Dw3Nv1PoJX7Uosc1zvShQUKrUKxTSRdo2EUMb2uaimcqfkZEct",
  "key5": "5uaYqEMKQrYS1f7VaufGpDLHbERcZ145KdsubqYViYaDFjmVkeg5A9HMb9mTs74CWLZtJuzsk8eXrcPFC54B1SYb",
  "key6": "4YniNquufDkXMK3adD9UE1SXkADMgpefjRRksFRyJV4FD7vddAxjDz9tRChUZnYjPXbvwJ5RHo5ydBz1yJt1pTUZ",
  "key7": "5zWpphPfsUQKqwJ1pGt8ohvpuppChjVvPjRysdXcZG9czExME6H11rwDNnQ487owFjJ2DRBRoq71qzEhaSdA759P",
  "key8": "krTwxcRYjtk5dNiPhGZqqYp1Se5PQQvGztt1dG8ZaH65GbfRgoy5eTZDZueVdXkEK7TtC9HY27pQvLhzskj9Z9A",
  "key9": "5rmp6fF9YpfEcjK97XTmBvfPdFCgDr4Cn54EKbtst7ZBvUsb4mCCXWyzJDqJtdcksD7WTD8udjQfoNHu9miNg2BP",
  "key10": "4pXPSH2jHgSUfRxoc5MgASGkJnYb2sELnN7gmdcihk5s2h4wTXgpDE5AEL5iqwByZu3KJGGfFvWwtw6sieD86bd1",
  "key11": "3yJB1fGGTf13A85inX4Xxd2LQAKQRCEfiLc8yCde4BmqFHzoAoJatvojGNFnMYBawo3sD6rv5hSydNHvYwopQBa8",
  "key12": "2LAroqJ3Bbss1fs9PGJHjMvpJVjdsNN87kvRtA28ZgUSYpQrBskz3JN8dW4F2UAvN6bSDHwBDHXXcryFPE5i8NWn",
  "key13": "KV68jg3DzUNtQXinPpvzaTSMVGpgX3X2FhfjyZqxuTgoVVe2Cypr7WWihurnGQXwghJXMBiGTHnSnHB7eEwNWZr",
  "key14": "7TN9vnP3vMG1dqHrT6pj68Ws16CsNvNX3edkHD4iEnhsjzAoJNkcqRXtQSatied1T2vDPwBVQ3vsRcXZRAhR5kz",
  "key15": "37bhdXrQZ7b9SBxEZFbKNkGx5m5T5tSWM6ovMDGphC1YfwiZ3PJRbEy6qekv8m1JSjUJ2LSuo52JpzSqir34HokH",
  "key16": "3nD2AsJSGgmoBJKGqj8JUPLkwCveecJVRM7he9NnkkFZzYyAkYrnoHywRn1n9uJ9qYfAdKz6tZn5XJPuhoJhek82",
  "key17": "4caYhuPRV1X2CK4SBDNeRLPGrvFb4HCaEbCGzRsyrcs8y6MexBYrhoKuxGTXt5noT1ixqWLgoZkRUGGabCrX6yGu",
  "key18": "5pmJ9AbS5mUzZF5zZLMnUPzVs2TGwi9e4wyqKnJtgXb74jwLH66DUVomrui5z1xwxAdkz4gJ8ZUCBo6aQZhxie1Q",
  "key19": "3kt1nADZzarg3gXrbN1RPxh9WiHNnQuo9ecxDcUui8CxXbUkcH3M74HiLGXPWPnVPdNJGrhyk5Z9g5yU3EFhu6io",
  "key20": "2TuaJfj7f2NPh9186eiPiZVyPx4rsGQbpfoMs2SgDN2qGftdYW2yZdV1oRbojz2RG1PSAJgXGPGPVQ5tNEXyFQrj",
  "key21": "4LVUL8ThcYTUnps5VWDsMXyf4xjsNUs28UArMxM2fMfZ2nNCRNgmNrVW5ZnPLPn4RVJMjb8LT2porhyqrDtycHJC",
  "key22": "2uepvAUrLUDhWq7kLuXSUeRnXpKTUEiYdAbKpvEE6wNzr7muJnmhmxkXs7Rt7U6fgsSSmSYYkEDcd7cqpcfH9DjL",
  "key23": "r1PTYaVDkm17SdytMpCQdo8ML8j3qBEvdQU7myTEocBV1ZPGdPQX3qP9kW4RaAg6Dg69XTb8dXMyDJswnFoeB2e",
  "key24": "32rvtse79DTUoafMycZXZK6g4jiXCkKgLGja1NS2baVvPtLNfCNsM3vZHHM9nAvwNJWGB92GhAkf26deb9z4HyCE",
  "key25": "NLpyhdKsNLZgB9LbjRBdG5Vw9UArRFZPMtbgouM4KpX8GVFqqeh2ieH4KduS8NMapg5csMeRhuTpFczHRUDe33t",
  "key26": "5hTnpbXUC87eenU9dLx9tqbGsoNYb9FK21uaSCpkYckkCZ5VaTekkmxYq7637tJ9NjFffKBFdiScztz7JpkCCfws",
  "key27": "2fDSPo54yTk1edJbEQpFUeN91bWQjC1xtPfX2SjQjLQrfYw7qvh1P4z7RanfzpRkugBKMT9nS84jLrZJaURjPDpg",
  "key28": "5qegdFA1oArrL9schUyPJ9L5gi2gBypFHVZYC3qsXMmeoGiuRM7Lz2xmZGoBsEy9uH6jjQqGcTHyDnMT6kWfKtLU",
  "key29": "5TxMYSgHjUb1U5ppH5aRgXmmkEh4HwN5ePxWfWmkTRsAGaobrUxJCfxFCsC1RbmBcLCUKK2BZScdbnZU7Sj9KTn5",
  "key30": "2EoMFGRMm4nAapW6J37X9cZ5LERGvx1wUNaY8CVkhrLtd3oPQqFAQtDeCBuDPWqFAxNVCaUBvjd36AJYfqeKhcwZ"
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
