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
    "5S6YBYDAYHKExpjwUvMjkTmUMA5pDfn3HeWj562ySqgJiPgRcohocoULxWXTojFhwC1d54XgNEBp9f5Ta6iEoAUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWWMX6Ccqxzr45fAUBwPd2SGLFLpJ1JGfGnbUhcy9TUK3qxAzZcTxWCnT5Vb3abt2YHkA1boMjGnnrwJVVHSuD9",
  "key1": "49nUgTm4k5QYpFxcNMGskFQfWkKvhx3Tcf5pGE9QfHTPjWpg2PxXBHfVENN8Fi8RtxZo3LkuGNh6fDpiapcdsfzw",
  "key2": "3MQRJN2eG5qVE8FpteLWsp21pJBzpRYhTJWc2E7qMmNu1K63U9Lg9j8ku4L5PPZHbi8n8woSXoZPPxRxNA8zyKEC",
  "key3": "2c2TnQ9M41Tm3DHZXsXsSV7o6vTUAKV8T9TW5eicmN5W7W8musR6FaN2pWz2ktDrrr1uJ67fD8sXf18tP5zwcVnK",
  "key4": "3FBXPETjWYyAdXHgZdPfnfBV85vu1KMz24xaX28rwNddvVi4X81nSADg5DbwVY69khRckJYLFR7BHncBFsRaBPAX",
  "key5": "59ATdhYbFNvqt7RD5b5xY9Q9JLmcvfPgnLFrzpQJGNA17kjoznqmpdAcacfbHc43SN2yQtrV6DTjdydpbREx3dLm",
  "key6": "4SVhDx3NWNsHwujeyVEsTEnnyvG3fu8AGoxkR9cWnSxVQgLr86Rmpr5fhmVG3z3wZB62D9cYbM5cPhYgUt9GW8BJ",
  "key7": "3T2d4HghKMzcswCDNhNRjLsmhs9iGEhULBGEgxpmgoCHH9tPGswHWUWbW4czLEH6agm1oHkGWBx2SiyojnYdyopn",
  "key8": "66eJ7jEf9mYJf4dRspz8yGDn8YdbqEuRpwPyCSBAYupaYmAqyqZq9QLMVP6SPGqryRMuJVqp22WZSNCLCN8CfGgq",
  "key9": "2HYvVkskBPjkosXBzNDcycthDuf8VqZcdifjwWcRCJUiysShfn3pJigF3WRJs1WssLW32rQ93k66bQxqL3cx3ZAT",
  "key10": "2S2AwK8GGcq1ddg2WwiwEGM4AJEeDXj8xeZ9fnMgmvmU6AGVLXahnyH1JfJ56e76eBxQmQghNs4fZz6ncFXbnUHD",
  "key11": "51PL425GsspmEkoxHjvUuLCc7HPd7eU5qATBrz9z6imCnUSNeCdxwJoSqYdXCfAxGS4uF8Xop9TqrjehQYXuxSjr",
  "key12": "w8MFbnRze5fjE7MzW9kAs9ANt7xsyHexNaib4QsqS3DNgDvjuhZ98V2R39fTMHoAtb5jNV4f8ZMonWhLerAouUd",
  "key13": "QWGhQwkic6cvaBKU4uDSSS5QATgSX2A75iKtVd7i5kxciLDEjSNxQ5LMpMJTNrg51sQPMWXV2Vj9MpG3GUtdFCL",
  "key14": "595bBmQS1E1FByhXVkggFXwNG5HdvxKMiAQXmq4BWms8rbsC7JxGzazzKnSqYDQK34nsnNME2QVZJHbdtJNZ4prw",
  "key15": "3rK7T2ya7JYYKri4mNj9yYoyB17Rpy4xBUHFt3FF7w8P4jpmEZJ3LQitoPPnz17kyPrP5Uba3eB7KqDc5TCB6TzY",
  "key16": "61RniTmYMLjwfU1HcQhyNZLWCkcfVd4KUnpLZNNKM2AXxgg47aQaCKKTthYNKYyLc6wfTt45ab73vo4ZMZC4KqCK",
  "key17": "2VQ1MsZnrBSP4suGaxbfdHzcHsx6iJKUXJAngGZiqZCMkuGrWJ5Ufi4M52NDwhripJjTwmKKLzVhj7fdVARSrTWF",
  "key18": "4ECGU7T5E9EWpierhiaJ9R9WgM798kTgcgm23qJJQjuAs8siiDJGTvFVY7zbmkLrFXLiynHR79FJ4evZ5Lv6j7dN",
  "key19": "63uGYYp4E8Boz817g6YfYw5b3a5K4WfdsXyYbee7pRsujU8Ek9GQ7iqCCoEKnrWpXAH2raviEut6eCbMMr2PUnKZ",
  "key20": "3DkCAAWNikrmSJy5NW6BFrMCq8sbkZxX7Mh2gw3VvErynS69p6KvYj943MNtcyTMNjNNvW4S9EkMVfWDGWH5eXVZ",
  "key21": "2b6B4nRJu9i6Mnmmd4rrUsGwmqYMHozSNeqJt1D75zUsxjPJ7P2qe9C2Czf6KzpXkn7euq4piQyE9WCT8WeqjE8e",
  "key22": "5F7QMs5mPPk7dCWwDvJN3QFRM1jWHEAFgcE7koh49W4QurYi9hHXgCMvKTLNeUGdFgGSUnkGGVGLg3MWR53p4khd",
  "key23": "2hasEWbRHbNez6Gk95XW9YDUcgNyUP949yT2vJqsY2oSoK8uw4xvnD27qGabxso87VBM8Y9YqGBvbYXcC5epAvDN",
  "key24": "2e6TZoNFs94yM6rVjvLEgNmr9PcN6J2CseLdBDd4xGWWUd2S6dp7yUY8nr3tnGaP2JTrXSauLugJV4GKxKi9b4kv",
  "key25": "2UKmwAq97sjBriAcwrH4enoetYAvZ955NbF5QywAuavdkcmHvpqUfRLRXdFWNq2BorF1yFqQwwgp9QkmN531PjEf",
  "key26": "4SnYC3gNxFpsW85mUwHyrmZRNzaax24oveHQ1mqQHYdCecba3472FhBjUy14FyaZDxnY7QmDUd6LJTJH6ZRgPj94",
  "key27": "3BHRgakkc8t3x1Jrh52GqFRzcAzpdE6dMHMhMZkaiMZJ6d8ohQvrcvPbJEkVMiCLu7FA5zMR1ej77yuw2FHLNGoq",
  "key28": "4sY7spHwnGMRmdSsjuAWtvBzpTw2dQLVS8WPgMh9bf7v46364FTSGU2ssS38VZxMut6Z1WaxTwkf31QPZN34KWis",
  "key29": "2D2b1CKowdbUTQhs2cvMc8eJTtfv6KwoEWDBGTGTvLP3PmADJU9EjkkTysTuVsAastwFJSgr8tXQu1fho7qzifRX",
  "key30": "67VyUhyCdiQejD2CNgCiVbn56P2LxnCnNTEPL7XBVP4mTfnKXiLdT97AWyX31cyuheuBGrAPVuseg54YjMCwR9FZ",
  "key31": "5Y3H8aHcCY7LXK8yjZtxyZyNR5Sg3JnFd4DuqXDNSFLDEwoE8QJN3EyijBohZoAGouhMpxAZhEJPi2rUWRdUEwC1",
  "key32": "44bR3AbR1iR1FmeSr4qKn17PsLckXLAsWuLT6HmTJGRBGe8ieadXPtj5ebLLEgy76pEmdXwbUcZkyLhpKw6kFxqv",
  "key33": "2iynm349ND9N5x1rua4QhUnsXvprrW1664sspVsgfDevyNRuNgTTbWAonYm6ZwiiHeLqAqGqhA4nJ8uadERJdaf9",
  "key34": "3uf46yHXZGKo2AbBV8W1DV8qZXxuZ4TTSxC3RyfQ8oz35iY6Fyp5nUDGs8ErRGAvEpQK14iVkdRinwbB2kLxLbYL",
  "key35": "3Umomc8W17nLsya7sZ9iRbajEzURdbFGL5Z9V4uteu7eUf6XqSXbSxLGdYaYpERU84SGeedyesQHZtkJffEUN9md",
  "key36": "2RMQoNapRGMkWj6mVKJdVdPfsw1UcRwWhBZwgomoQFnae7hADSeKBrA4PASPx2xEWCyzdaFJLWUnRMc2sSGkatzp",
  "key37": "2aB6GWGmiYr8cP1rnYbgX3znGxUmdSPVymtDZTBAkR5uBQQTJMp55zqAiTzBMbfUHRf1pRPPqARzDPwdRivUgSZt",
  "key38": "XPAbCGQ2Hjo9MttikHrbxcF5YwbdzGbb2nw96QzJQ2W7KpzGsEgNkZ9gHkpAUZHJCeFABC2m98imwGBWhx6skBc",
  "key39": "5DgVyFqHT4XuRvbXKB1wYpPzTKWETePfABhCEbaZiy3V1DoTeBp5VLt8DrTrPz4UcFYo8ZdfEk3RTSxARgif6fNR",
  "key40": "5dxKafNk3VHc5qGAHprujYTSSHYGd9Aezd7MCdF4bMDc9RttXVPsDak4B4KYMUZeBX7KeXfTD3TAegQfvqWkeHz",
  "key41": "5PptgKcPgnZgJ3ujTdGaFysLHQjFUPmKP5CVMwQo9ZeXncYfHgUagtNb8hX8CVBspZ5A4n7bofgYYSkLTfeDtqtX",
  "key42": "2gC7xbAY2Uo9ye7uQvrNc2EfGCWq8uUJ7U96RXmyxCV5BsWNrjCn2eSmCMFRTsewD8YHNjoqSkRJV141R6dLhrte",
  "key43": "39H9oWj3kuAAu9iAYq1SgMaZwXqXmWBMuXmHUm7AgELnPoNYX3t9Tryoo6Zoqn2BT3yFnDGydD2Xwi5iJ2ywuPzD",
  "key44": "5m4Njq8ngAAm5cnBhrLSKnU5hCijqJgAwVimNmXGzspp3E1aEjzn7qGnRZYJUBZevmDDJyPH3zNF4dRnGisWpgfF",
  "key45": "49zNmPJX4RC4aEYMFrn3g8U5xWhtCG7ChFYedb5t8CbFMBN4sj4N6U26fJH8ijLJ6ADc9nUv8vY2GAjeAtV259pL",
  "key46": "Vv24XhmNA1B3MzJbT1cprsjWjoLkri6DsEFybbTdmEm1GfWKLhucPkszEF7Kg6WdwYn9TnCsDowEcz7jLsCgPTD"
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
