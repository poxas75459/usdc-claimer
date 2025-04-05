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
    "4U8XMeFhERYATMVYbgtWQkFndyW7XwrQEcPLT1V1VdwRP62wHNJSWDxR75w88V5M72W3ECXTyEhr1anp5CYkNABJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SieXF1QKnMc2DUZMKcPzF9Azcp986VdJdr8GMsGhmiimpSZyGpwCV8N484s7oj6dPxqbQ12ynwQoXcnzfpKBFA6",
  "key1": "y7Rp1t4HTuvLBf6dDHZNi9FjMC3dvtVNYQLptRcg3peKhKhX93caVN9zhmQfzFTAbQcwWY4zQ58p5m76McqTPBW",
  "key2": "3FfnLeZocFjot63Y8os9HCpmLuTuyMHxTCKPtmfCR6CS9T8NLfA6BiajAEdfA2r7ig2Q3j3hksCf5PmQJVaiDYE5",
  "key3": "2CPUhYH514J5juN76QQkF15MJd9UAt7SPvP6cstf16aMcbLfPPo9L2ogXoxkKSGqfpubXSkR8JGVVYmxoy89ri46",
  "key4": "44eozosScs7GjGJsnRcGfVBbjPad39RRAi16XRhFtxXNPbY9bNXgN8JPuZD7Cx4Wiz2Nr3vuPWuscFsThppKZ3jk",
  "key5": "2mDKWs2AqZ21nbg6sfwst3ti2QEhk32fZXpcc9RUGwZVGb2qGzu7uhtFaZcZAbWBvZsD64Kap6PhPgSoXrA1mJ4k",
  "key6": "2EuZzunpoEqEWsMNnemUDJqKiUtPmVg3KQRtbaHAvC2wG533NpTe7RLXcEYgzk26tdZtskT31xHnEzdUxaypqEWA",
  "key7": "3HRBjhTctX3HykyGAnFpwEFiwqwd3FMcZymeQBvGdvzmGrnGafGbf7A6aXqVcsFpSdC1QuBcpBPSWZK2r3vhp9kd",
  "key8": "k7YHVrqrCPtx2eNKR6amDN3hbLnpaZEKjwfeKxc6RicqAgk8pXmHxrX76wsbd9n5EPrfbjjYifmmHLcsXt9aDyK",
  "key9": "26cuTGhNmziMqf8qjRkr9tdub8iwBamH7YmiKB6Wwp9mzaL9mPBEfvF2vJrE9JNoN5ey7h4VSypNsAduB8DNzM2F",
  "key10": "3AckEwQa6X5heSEZQZvkQvHnpfyUuQ5WRYy1eFtxztD47HX7NF7K9PSrws3obKYbZqAioVodXCCdJnsKKNmfUMsn",
  "key11": "4EF2a7m7ePKsEGQi8865Tc1hH3GGNDVLt3S7xyqY9VaoLPiYzGDug4CGZU7XXn5kMR2fVvudNTNNfz6Qt57cn4XX",
  "key12": "438PWVXVo31KCxRdMJZBy4S9zwpoNrEHBCCsEBFQb6FgzVzCj5wnKMbQTqcfEZ6PWgFWRwqBFFxB9c11uT1m7NxL",
  "key13": "4ZtPbKVtKMYgbwtfhg2cz4qnec5csraryNYboKZ4ywL79y3pJRCKYVt1Xm3cfqUrXEg68vWS13RHN7tJcAvQnFuN",
  "key14": "63AAwbyBfg8Drofswu4N8mL2qwcpppeEHn9Kc9q9ghjWd6MxzWdcwNNHtF3Z5zWhD7cDVxATwt2YmcZYCXhiDTk6",
  "key15": "5Dz6E5BMJmrDdYF8Sbfj8QEYQPJmRFmP3Umnbksw6MroKcHGJDBzMvrMiUb1C3sXAhDkvLfyAmJWeqSJq7GFMBDF",
  "key16": "yfVNHfVr6QmscF96dq1a9kxQxGkctq2uMts6TpowXLLj4g1zjbSuiZUspMdUqzCVcVnNCe1aXaxGpXzVp16HC7q",
  "key17": "5LujP9cUFZ4X8V2E9v5mq3Dd8idcsrWE4Xi6Xk6Ao4AAHsWTFubhoniZe7Wr8sf4NxKh13B3LZdNJN7waHREo25E",
  "key18": "2Vbf96iiQFBkws8VXQJAcsrvLEtx53vQkB7uVNNLtnchusHdFVNkywpqULLpyzgK5U4WL4HR3z88WkWN4w7sc5oH",
  "key19": "3HszYVWszTHtVByLyp5jLADgYgUihHE8p4f7XGnoK6nNUgjJyAuDYaFBt29EMFmnKv4auKuFgGdD3rsSDjR4hoEg",
  "key20": "4nxyopzRFt9KYJfrxMdhiL4bbRCRf2uhH9hMVGTV9oCrSMAHi1A7urMKY365u4PkQ6CUMU6fQ3Lq9vGNru6JmVzo",
  "key21": "4o4nBryb16nTwMwVsD8bGuaMkfJ1ki8EKR2drnhCviEbFxyKj6Y7dgWBqWZLHCDnx61AJxVyn4UQDcKCWxZahpPK",
  "key22": "3VnD9546VCYs4FQqeSkSo53CN1ht4iQhGZ91ndLJ2hnG3xTJLr69NazA57bzPxvRWy6Yavd44ny9uqaHi73NvDSj",
  "key23": "5qgv6KNAjEMvg1HWjN7Xve6iEB9WFv1ijL7mCCetmXcwBeCEgwBmm2iVkN5fNmARGUkXG7SLL18nQLJpYY2AQouA",
  "key24": "4bxmzXEAbfA1qyZY6Lvri9hzsgdtqCDiADowza8NUdVut9ey3DbPabj69gomnEdy7cH79ZrXTn5MTHn3Nmo6vQex",
  "key25": "3AvHGhRT7spXH5BYKDczowd1X9NQay7ztQKK2CfDZ64joPWMwuF4iQabWCKTnJezufLPtZpsTkVZtEgREo3AoBfn",
  "key26": "2vuRT1rzK8cGZUjAw9nKmx9tMHS8kUiPMs9V5iWgrY9iQi3rNFrB2CgejqjGSYQrdFet8cfXRCfWrboyrGqCy7vV",
  "key27": "8MRkUoDzbwG3SvXNdVuM4CzQ4LFeKaHn7nEev3atjSir1BpCkmLFhQrNave34GJ8KZ1YHfr9MDcU5AtQCkKWh1i",
  "key28": "4EKfV4jyqgWCdAfpqLAmyrK5DUtVoq8nMbySmsNnpq7K8w32rFPYTRkMaosLT46128XqzhQhNhPLqhvnypVF3WYj"
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
