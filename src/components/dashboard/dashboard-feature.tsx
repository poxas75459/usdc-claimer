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
    "2vQhzvYxQMnn6NK3a9cwzqM1scqXx2jjFWEnrmWUsmjxKFesj3AjdekNsDhB99NFjeoJbXmfxLhZfZgDFUY9L6PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDQecq9HPDeVd7hngrVENFK4HGVYezNPM1h8CajGsyN2t78HYAVsvPY8HaJpcDuw4SjTKdZSQaWP3s4kQLMgpdY",
  "key1": "23nZbG95DQfHfvbjCfoHL9qgBQSwoKETvVYJq1J6EzFJEAYDERwymA4NAX3xcGUvaM8MJLS2xaMQudvKSLnGMYhS",
  "key2": "5W6ty3L1ZJqQ2dwcqZL3U8ejqcM5xLMi9PJn9sM3FHBuRrq84YSX3bHeb9GvxKwSiokRG2HyLNzoh2BvZ4qZiusB",
  "key3": "5uXmzkaiqeihgEP3teHMcyyTEfcBC3pqExut8ZgaLR4vjazW7zQcBbbVxA1nDLRvKd5M5tCS4B4M37NDUxkXABL2",
  "key4": "5AuHXZ33wVC1xW7HFQRW5sjnD9L4uBeaHRmmX4x18DMWamR5TxNYRwTN1RWJ1L1PdQEiAWcaMe5zKVZJPKn6VND3",
  "key5": "5QLZt5Ccx5SC6EQNPtWEPAAYmgDnGCye845kCHMbGgSHgFbL9eVmyjicfggS6joM9fsKmiPfhxhWGyDJyhFeRd7X",
  "key6": "KBsuKkGWpgNNnYbUdK4AzMKbRrED3ob8mLcnZfjZ94xxdbUyUcYpdrH8ymAADbWXuwdL1REM6M9qRbtPG9BUEoF",
  "key7": "bFnArWa9VJ8RoJqt9DhMwGmqRtxMc9AUvctyAbEe8ZmkmaYV6Fz2yEmgpqqRD6SyFxB1HZwyh9j7bUqjzh9UrmQ",
  "key8": "5tPbjymP76vWwKgQwspN3UjGNfJnkR6J295HrMEFvXBSeKvuZZRG3spx6fdgVL21geX9jMzRgG2kcr4cD8wnkjH6",
  "key9": "3iWgMvYiBsYEm93KfR1mhpenspwoRFtMQvQLUPVGYxqUTs7ChunDHZWGYdzxvgQWSwZBPyDpNw3VAruiHZRDPHFi",
  "key10": "2ZcCtfyLKZheKp1bhWCSAK9nrPgyAPyLecKdk176ia4bAqUzo6kZyd7XBV7qnGPaKuUVCrX7JFd5Sn3DGdxqRH2m",
  "key11": "4su9Gr3zkqoPkmgygBMkj2V5A4yUMSAdyxwvxYRVxXMShwEQd9f9YoEbMc7qeiMNGnJi35rytxsFrrB1mHp9VaHJ",
  "key12": "4cnuoRDHZmvmiBYGmwfewcuCjDC7vZxtSaBs1ZnsLoC2bAv1rsGvGtYWB12DKosx6WFmGqCmkkU7kz3t9avTgCqM",
  "key13": "5mQEqpALGC1VgbWye1Y4BJFcTAHF1dp5YNqAVyv2FwsVbKX2oPv3XEhAjS5E9aPfDBu2yTcuUZbCWQpCMHkiHbPP",
  "key14": "6BrRCY51fM1Xqpiq1ccu6irb8dcXuwZKXhTLvfS9SdjushMNbvqAQjJ36vYq1GSZ7g6XUmV59eKBAagjjw9QQPH",
  "key15": "4KHC9B1VHNQmChVjfpPgGcs2pKMCwYbDUwRGz9FrQnrS3YgDHnZ1UhfwWUziNPut5AjzjT3CKq1MgyLyM9cAks22",
  "key16": "4axfo5LgnUyBjTW8MwcuxRMEy7E1FNHLxnX6g8vxzAZRTH7SVA8gjm2ykjCNVxpFnRnUimm15PvAuwvLhbusyVrM",
  "key17": "4pS2zuNxioazTT3d7aFQzL2uVnepb2rW9mZpDJ3K2VtP9YBLKpGEBarC6Dx6aWxjv4FtsntDmLXtpQaXbcMDPeST",
  "key18": "3jMfNaWX1HH9yu6RboN7sp7ayk6QeUv68qYkYmerUW3DEsSXJ4Dirf3k95bbJLeJ7fmosJZhUEL58B15kGKXu7WU",
  "key19": "5a1Yrqp7Z3nuzPj5WURt2SF1QCdm8EXevhjQg61AaJYZMyYNTJBzP6GoJTaqSon3QBPP2eGH8kvJBocpDRyjisEW",
  "key20": "5HT8fgy54CB1cZrRoxHMDgDXx7Cew6iTfwNV9D1Ubsv3SwU2GEg5USbnJWpnNDXDWDCyf5D83M782NJ9ioP5MZvW",
  "key21": "GgDgvyi14EPrFa9yFesKsVE6k86iebd7u26ZYuXXgfr4E9ReHyN4zi2SQrwM9mfkNADTnEtQG97DVd23shcNuoJ",
  "key22": "4aMyKq3nKa67dhXzprTWERD9C2oCbhEqtSCx6qTLH7EngZa5MBivZ9bFsJiVyhkCXT1VaMCVZiFHRJCccMmMjWa",
  "key23": "MgXkaXeKojXEtoVEb7xJdkPqb5jBhEfkm3381KyWP7t2xex6gFVLaXtJaxCKuwGhJHVPnpNWyjbtS8pcGpqQNDe",
  "key24": "3vDZ9qSgLnhB9mp4nEm7FYCdU82FU9iXvd22FZx2QXqFEpYLhwuqRCJLTLiVMiaUL3nkLY2fCZ8BGD5pxYkU7od",
  "key25": "5ts2VPxmVYGgi15F1TV2XyreatbHWj8Drre5qsXusBYDXWw1Nw1HUWv6b7gk5Etn7Fer9AcLv8CLGL9Dsj7bRD1V",
  "key26": "3XzresfgfPALk1XJkUniwzse2VZ3UxL2HLVmVJ8cz7n7bauPWcEoFGHNpbuXgUwVCWwN4H6dWsGwyLHmAmJMWFrA",
  "key27": "4qXxbcDD2exD9UjNtYyj4DgaR5cjmYdtvDj7oz96PQewKqS5tbEQf82KH4SVtMaEvV1HDuG1NmgYsvGG3hKsx6MD",
  "key28": "3FyUJtDgopjHmyQuVbbkPkYBFwswo9duR4ru8hxZ5K74djhKTzTntKyMhxfmZ1Tr98mQupDXyQp8MvnX1uQ3dvUH",
  "key29": "5PbkzD7dM7yzeELgxt2CK9qPWugzf8oAThMMEi8Ve1WKA5DXmva2bH89N5qkV1dhbmfaKYDS7RbRjQuutVw764cS",
  "key30": "2fqPS1sAZ5b8KQgzFi7evTvdrehdke1avxYfAD3xheYAmvd4QJpjSWYWBiyjTUU498KHtPbJbJykcHTpvsMHTEMp",
  "key31": "417939QYgjGRaUW6knQ1gfEfob2NT6vAxtWVBpN53MafT3jZXVi4rqiVR87t1CJDGcbYnjPh9v9F356Stabeh2UD",
  "key32": "32FVXL8eqidzD9nyHNNNydmE7P2ku96PB9C6qrBn81wokUNkPUrQbgProoraB1MRUHCJDFjEcWEVcSfMh1hmtk3A",
  "key33": "2yBa5GNV7kLzBGjrhtBWgqbXPXhABoEnLL3dftfxtaFFgxD4L7ZLq84CUCXe96AHNdwqEw7mKiMdPMdusDRFpU94"
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
