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
    "3uykWXbsvSVBfAJHMvJPXgCCWkqNtxbk7MbqSUZcwwEEnZnLFseZPXY2q7j8VWztBfdyFLtYvqqnJVwr5YVDecU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s4P24ZrtA1M88wpSw4JYsJPZmvNoYgjLEm2JKpDSgWSHM4TfgiWM15AkdqGPwYX29duDaFfqjeVDyR7PAeiuqCU",
  "key1": "463faot1uyisCB7irVewUQf3brb1RHimwo4WTBNCVtq599tGn9uX76aGLhnB5TkxEQfVPH1zvr7EvZGzGLSPkr8u",
  "key2": "2y9ct9u6XeeRpgqigZ8MHebHp3iZJkWAnj8ERfWgUfYbqEWUE5Ka555WWYiH3bkLoigtREWhhWTRrbiH4ts4S4YE",
  "key3": "5CNdVnjiy2VzxFLgFjZ41jwMAJ8UZHmojQjuUPTEwZvTxNbx4hSxNMA76ywx6g9FN11RV7hVkezrBiQ5bkxC6cVb",
  "key4": "2diZP4b4dG2gpMhSMDBZgfGzfoSn7eDNkJ8xbaHXRfu34FQZn4NkSVwhMrs6BRBhKmH2RGKbThEu5BAYMZACkA7T",
  "key5": "4Nyn7mipg9Y11eF3TxWU9gjvtRhSkZZTdtn9VjjznkmToHi6maTxabzBCNurWfmZtebeKb12ZRqyFcL3tEzB1nED",
  "key6": "5TWq41q4ANGwMXTaKf9dwvaZzDnjbbHUYDLAauf2YX7pSDFDvSbSEk6VqcKXEep2tYBdqm6qgb7oSUP4qMN5vQbE",
  "key7": "K63u68Xny1u1eZGotSeSTrzBRfQTFBHCCkaZwsfi9UQ6RD8U8Uv6SrvBKRw2gKmDdRvAkVcPc36uPbtTPDh6YXr",
  "key8": "j8mdc9rAsLL9TJav4ZM5jxU3rJM6tf5BBSrkQDZT1aqX2Ezmhfs46o4JNUk4yB2shhVvwwAZStnB99D45ME38Y5",
  "key9": "4ZccRz8GjFMF1Uu5RVToyEKAEpDqLk7fcLtu7AwYrR2SrZ6VpDQS4nfaZYT5DPWJcz5nEskDz4i9t1pfHPCspMDi",
  "key10": "2jJGfNk6hEhH2KaUtda17HMXufmmJqptRYLdQzgtjoiiGu4RnvpTwKRJgb8odssXrRLC4NKm6YkK6Yvw5L52TFHM",
  "key11": "5Pn3C1ty3rgtrBNNXLttapAhHy14qVVPJf4ZKeewPiFYy9UofHP8eq9VpKo39i4kK8NNrFvct4Uab5KBmxDHsBF7",
  "key12": "3ropJAnRd4KjDpYWt1boEUJ6ksEvNM67wufDTaHrvVVjc1gw9J6opnthk2c56VA9KvLNYYsVEcESXkMusJVExaX3",
  "key13": "5z4ZgfqQZKESwvUbT5N4cCErDMbUAcREc7R16BpyETK7Voyy8iUauGP1pHzFLwXybEK3krMS3iApsjMutyH2wNpp",
  "key14": "5RKAcfHnagpvn8HxANKksr4KTnvuw8vSsfmkb8G63BsywxAwWfnR4vDPTQw4BER1X7ejRCy9tWkUNtxhBsasV6jt",
  "key15": "2bFfMUNDos5Tst3CeG8Fk86mZ3bSguxAATvSoXCge8JuMU2VwtrZQVDzjRsV5xpHPqPsDQkYR6FXhLFmCDe2Szq2",
  "key16": "2NfXBWm3UapaQ6xvKRZtsvmt9owUupvWikPqi9h7dbgKxGAjYp7mVyCZhaxpR5NSyoHTbmSzfR1zgN4RborYTyjG",
  "key17": "2ggqosqYBbQ6Vte2bxrbVvj1Ynd9kEt97taKKCHG5jUzP9dmmFGdQKBSanNPsZzNU3XF4aKebKYY7AH3GmQvqekP",
  "key18": "41N3zt4U4ZP6yxUA54qnZ2Kw3HZPsvfbcewEk5pW4XhpKdaXe3WKPLrX1HQ2k1K8P7oLnkrw3rnhRvmZ8XH3LK8K",
  "key19": "HcNW5nxHZwdZ5YbSrVJWdAzb3rnFTwnEYvjmSmGSTFKoJt3mmPXMZ7YaofoDeFCs45Smqdvrof45TV3mZbVtdt8",
  "key20": "2GBHyNnkxzYc6LrjFaqUgDWiJ6NqhN8mYH971YSpk8z2ZtaDRYB4yCna877AY61dXPcaWhwqYQxpYjYJuAn4A5yy",
  "key21": "24niZrVmToL9uhj6aC13sJjwDQG35T4wE2hKK6yXws455mf3eMfBvvEcEbDrohoG9Qj8RQanbYDvwSSdD2FRpu7d",
  "key22": "49tRQ72hFoPkfuCeV9j26hqRXtH537WjrdAawPa49xfCyBQi7EjRoVfCUW5jz2i3tbgeFwvyyDeCYJnG1ZTASNVC",
  "key23": "nt1EodBhPBCXacRibMvA7CkrFiq5fcFGbg7MNRqA7Qdn94U71sTpSaRsG1pMJzbdPfzEfm4rPAupYqawqhydXED",
  "key24": "EWRaWuiVczYNa4HsKkL1WMWz5eZU94xPo2CDLvwwK2RyUD1qk2sZhaSA2dDRmDGVYHRHuCrj6W6LdPHpRB5h4fB",
  "key25": "58y7BjfeHbNEPjdZb33AMoNpzSchJWq3uE1MUizHVt3TT33K2TmhDeQr8pBKF97tPrqqCjW7cL1q13d3ZdjydyqW",
  "key26": "5wWTxYtcQBZWjPiixYA6eknJeRPwEuSX1QAmrZDHJMsEcnv1B7qFV8zCALKMVHy4zHJxjNVbDEYNhnTdDga8uw9F",
  "key27": "2xP8cQy4kBqvBiBxau9nR5eAab94A42kPx3M7hM5zmSgXVhrGitthJ59kFikYgnssVtEVsGB2MHXDK3GLoa3A2qw",
  "key28": "5jwQLCiSy81jAasJRKNYiMvSKGfT17Cz7Z5vfaQuQ3o1zf1JBbE4aLb7NWQLVv2iVwD6HHYphoFhg6obw1yuc5hE",
  "key29": "54L1W46JYLHWQ9dTurQgwfhRGCBfhGoLmVVZNA33AmqLoGtYKGPtpRznt41FZCvx4cTZoqb2NuikXfTHCsatNmWP",
  "key30": "2gu58HB7iLZst4M9pbQAFozjFKrdJskFsxSguShm8MZ26FZiHTfMg9uMTdpZwdynxyftaiak5ULmT9ZY4PDCRmup",
  "key31": "2Zr3Hrc9L2iRNgFC9d8LC71UmDXYG44ndmciyf6dgaQXCpcKbpGAA4toUFTzjvPucKuJ24TEHkfzMVt32EjQxwn6",
  "key32": "3fxifoaMN2MbapEPfosHo1uSYDkey4mMQ5HYrW741KuMGZqhvpVqxwqdR4WH6rK6Wh4VEuYFTxDZiM5YBF2H3ymZ",
  "key33": "4coiaqzCkJJPnp7JQbj87kEY3nnqDSuMZj9c1dVoLfAq1wtDQzMzzPVYhd44rbpDwwse6KdzUcGfXazxUMguQvxR",
  "key34": "5Gky6Zo5XPTTYUvaNeo3kUB2FucxRxbBbCvCVU4Awz7oNKrJk4AFRayUPXzXGwscqv5SED3sTvpXWe2cRqfhuAvx",
  "key35": "5oyjoQjMGsS6TmWzgApjs6WhGcTtDBKBojW5o3jgkx8icD7DZcdzyi7RcHxGJWqdhTzfuAKSn5FUgBrpLfG3kFjQ",
  "key36": "4TJJt9DmEHALXzkVgRC13HGTjU5fdGdWo4zS413iGuELG7NTUNgw8rhSuUJDyxyutpbo7Cuwm72m8c1NoFiJbR13"
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
