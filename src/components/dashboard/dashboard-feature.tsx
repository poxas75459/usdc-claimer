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
    "48xyfAxPhrvZiz7Dcwd6kxXVcau2Vcmnx9LfqRaU9Jq7V7C4Ke2rjCwqUeUxgMhrVLWSdLbNrE1BvsSbHVYrKo1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGWqdXsdV3RezNFz6bQvi7FwnhLeQCQL3JZiG9mYZ6uRdnNpmo2Sopz17kccHbKjvP9iryBNvL9EFSHnVw8QK5E",
  "key1": "25JjMaRpbJ3GfndNkSmSFF8hPtA1bj8sTzBcKzEBC3MxwercAtqQBBfTP8bh7bYZrT9FnQ4WdvM46Gv6UoG7hPrx",
  "key2": "33RsNpVDiN8r1rgDTR1ii7JCUTsuC4ghELCwnrpSyQM9wfRKgn3hon2QjyirPTtDi3z7gdjDN4Jw2i4NWgAVrX4z",
  "key3": "47kWNoibT7MKwXxUD2J7u4HTw874j5KUxEe9ny9bDUGWuCtxHKE1MfPLaWaPABWauD5tCdXpaRhcVpASNKE8KwCP",
  "key4": "44vRcoeUuEvsmqP74jjfofjrDY4gnqDBpkajTEX6NuQrboGNw2dibRdedmoMN1nh8kZTHMhWeJAnqoMgtzRPmz2P",
  "key5": "AenhMNWqZT3baLnnjD9aC8TtKr8nX1tE3VEcwPAZS52RfdsaujtfHqk1mCrQLNyNCVKu67nu9JHSrWSihTS135D",
  "key6": "jDw7Wuj3F53A44uWiSD4YK2nSjtniMut85MnJN7CSRcEcQbC7Ka6wzFmeJUTo6HRPqAfgPYZtSeaaLLT9CHp8Yx",
  "key7": "431TCJNSeV94qxkJmZfrtPm24yi62qwchzFCvfLtLhJzKVghC9RiCA48BFcAufVqNX4o2UAm4e94taNbkZaKUQab",
  "key8": "AXzgBcPzMZAja1pdKaUaMXrgdQQfovbd7W8cudg9JZwX18hpnn6zoB7AEbCjYJfHMujNPgkbGS3A2zXrPJSBpNA",
  "key9": "223h8PVHE1emB8ifZSBV3qKPEiGyGxMHyAdv1TZeAQC9qnuSeRUduUZdCJmNwi37hpRKhnS3zSHMvPV6Dqqa5Qpr",
  "key10": "3NTGAZWsNQAUdJjjFckRyKX5BnVDyphdUtjPA9JmombhkiMzdMcsP8hNUqbYSJGEezTfbF5kz4hc3FQW4Q7FTqr4",
  "key11": "3KRcGVQmCLKgjksG1eN1FkXqPgPAyDjByDpnGMUf1fKzxCv82DPMSknm7kJxWHuxuMWu73DjbQLirWt1AM3pm79A",
  "key12": "2Fg42cYqv6STnB57b4Nr9h1D65R5RwT37MtgtRynZYbJmyjntPqXdcHFsMubDYqP2TQqHPXLWQeHGozPXLSQaN6A",
  "key13": "5iAPS2Rx3EZqtWV6krbTtTuPo1soETr6gV2BoPh9pCaMSiY9Lydj2kBR999YPUdjDcUMiN3qJZAdAmHqUBbCGcAx",
  "key14": "3EXZZihdZvpsJovrhGURbXxp6qus7JCGFHHzj6DMvAC4rWucXEVt9JxqSsxUnyV1dQZL2HUeSToc2yCmcqwmzF56",
  "key15": "3PQYDgMPiEQGAg8JcUNFgVhD1p1x5zEnGgEovBzEA32WDNDqguefvSJQDRPzAUfN3ZxnuCV87HFxjSyhwdSZVGa",
  "key16": "KSjDTnURkbpcykgQZJ4qjP4rUR2e12HrwBjXiXFw5bntNzpmmJugZ6ihpugRqMetXXabvgpbtCjb1Y15fjkDdjG",
  "key17": "BsHpNzmLiJAF8ej8bTuUzpQhALsUHe8gF49eCfEXjnFku69dFrqW44hRpzZYBrQtCZzYeqYw2tCjQKk53uLk2mU",
  "key18": "3saVLrMRXYDKRVGCJgJosCiqKmAmh56Hh2ApQ172tE8xYjKgmHhC9obiUsR5mBqg75pxy53nRUTNPT3zKjG5E8eL",
  "key19": "2n7QN99nxWYBEZfuYWReZFKaoTKPiKSgNzbrGNphQBhL2wamFo9FC3dxo7psdzaEwy7kMVHdFwzf484sjjuTdH8Z",
  "key20": "4hkjLEfmqyfnJioidiTSJHDLv7H7zPSB7DXXoJ7SV1T7H8cyw5JLgMHvCvNWamsvHXWp6f4MTxaknUQ45V8t9Fd3",
  "key21": "2XB76Gx4XgHY8U8TnRu6FYgLa9XUVmjGfCt3T9V1bC6LgAy778XMEhfBSJvyAda1Xh3oYgLFqhCAkxEtvLPuggnz",
  "key22": "mYDUCvcD3hihtoMoe9Smf9J3HFdM2T3bqdPW7ZQjpYgiVHVGDduvm2WVaBmukvFfC6NEtfidfJRYV2roCcEzyEr",
  "key23": "5uXqia5KtQt5vexDqJ8SvL5umKYhLcZxvXUctfdvxFjNUk3HhuVwJUtamYJcsnaCGpd2YDn2s6zYQVEWUyH42LSM",
  "key24": "67LjK9LnqQosnDaaCn6YVfkBRnoe2DQN72SrzmmPpBGRXjmqmp6otWbMb7DULrMfPUf4Vq4tvWGjY3f4cRdQRBEM",
  "key25": "Z2QK3rNx5PVWiaQ6oRhuDWp9GKMrgmgEZUyWwrxYVjLcXSJcV2vFCpcZ97a5KDc3V375XiEdmdvy5XywBHQVRWW",
  "key26": "5LA2t1FjCbxvS8drLcoxZCkvjc6MhmjvkJ7WPE8rs1uNkcaoXuB8CmfKGUDjyxoMFSzhZBeCuhiCZmE2uu5RNN5d",
  "key27": "2qB83b7mg7Q4S64k3n1Xko2ie1yVroa5rs5CXF5ztCGgF7CdFA6UKPHcas6opaiQiajnAymc1wL5iFCo8p3Hu1qQ",
  "key28": "8sutk689JnRaVkSbmXhv6hfremSfhf7d79VTuNkNNYMygGki1TwsCyNvUyboZsYLWznnYQk2ozHfb9FU9XqiZa6",
  "key29": "LY5NXH4E4SSnq583JsfAgw2qi6uSSYBNGrhkBbr6FbgKF6yKErhZaHTMLzMXDRGTK5PRCPAu5mqVK1tcyMMaixU",
  "key30": "3hjAs2MUDHm1FtxWAHQ7NyKjF6dYFPX9G4BWcEn9XAQYVZQmZ5FkGCpPXKwVpSyZMdRWgp1oevAB8BLg3RguC97p",
  "key31": "474ocC63e2kthgWCXUq42RXamfGy6jC6SkxvfBzDzfmsDDVZPKcuipzsPr5N5rj1tJ3irr8DenCpmAMLzEzB5fxh",
  "key32": "3ojq5iddHNLiUhuRvwD2NGMnifZi28odLnjribD57gjTuP94UDoGQckMn2DnqJtTjgko5r14pjWA6wawRH2xfmAV",
  "key33": "SoukCmHYWc7fBDXrcQyteptsAQRovEAr6g4nWL2RytP7qbr985csEuAZoEqM4XhM3Xq5SD5Gf8ACJXN4epAj64i",
  "key34": "5DyLQiwwAAGQtg7t6vS4zfQP1vppwRGY1JdP5iGeDws768fUMMM7PKyZxkxjd62jNubC3VgzoEAU1QhpDPcXxW4A",
  "key35": "FZk9yYdhAePpjAVqAsH3Cjx9TNNhLZgDPDvRUsmpMMDdCCqfkBe51sr2ommS65HojYR6NXxb1RnuGNn6SD8Ma3F",
  "key36": "4Bq4RLMN7xAMu7Bah1P6d4fgasYbueheayPpZgU3T134tjikj3xBBJtymQoHzfPo3JSJrsewnBiWumSAmqVFXPzk",
  "key37": "2WYZczkA1sX9fNPa3XWnKAMmVEXn8o2cnHk3Y8Gu2T29c3XZ3Zje8wnjJbUuU4LuDFQtobRnTJ8rW1V54iD3L6SL",
  "key38": "51fAYWB3t9rDgLr1REgxE8epWnwGvM49Up7GWwkaAAomWZ1rQU2jWaq1Xpuph2146LgjMa7dn76tGEKb2fZsWHmb",
  "key39": "3XKFbGwdhEVqdAWZAjT2oxvzqEtuyhQ3WepZ2MpDfkHUx74vZCvmLsJrSk8S2EJPqAgDfQDLTFFJ63DUdyRKDPmw",
  "key40": "67N2nZLsTkcAjccKSpNNimRecqDc59c8CMv4PCgYrBDAfNZgMBmTTDxFi7inuhnJYh3qxhvDCRjNDMnVPHiCSRk6",
  "key41": "3onXB5gfew5UNcR4UBbeUGJUAGLxuRMjfiNe3ALEbD6TxYdM5qJQi2x2WLewY7vKbxLBRA3WrYZeQ3FBKjhHJ1Fy"
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
