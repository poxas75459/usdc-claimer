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
    "4qd1UobjpUG8PW5hvyJ5KD3VtSiof9ycbT6H3btqcSMHjZwV5sacN7LVTv53b2J8vkfd6pD8qWy3D3dDgxzxSnpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5cQokhKdtQWJZ3WnHA2eLrEnnRmGkJ6BwnMd7YYMMrUCyeBfX9D8WFD39gainGMCowyaCiDvgbvPdGJLUaQajt",
  "key1": "5v7ouWi9jtnbxDkZeHdo5UZGwTh6v9qgA7FMMHubCWJyzRzFm2veRixDAgLd6ZPypdxXkZpH7xhZaSctpPqQPppU",
  "key2": "4TkdkJrAhSiRAZK51uXos6GLnQL1dp86ZrqpGGE2ypny37KNrR5D5gBsRekYgxTmXhbYF6WNjrsR6RbyHgM29Pwt",
  "key3": "4W4ZmQWRVNbep95gqD1pxaUTatNbYhaAtRU47Cim6UF3AWCEUNB1z62Xrwu7BycHS4zgWh2mKSQjbBJT8nzB1U3e",
  "key4": "3ZC34Fn4qaLh61o4mU8Ekgui9SyRDyxkTRgoTrga33RSaNxm6fFxvq6KSb41AWJ4V3jMEo12uigyCGoeQyRw3nie",
  "key5": "gy8RM7gAH2ksTfdEWJzW1oaDEZnD2fdCyDw3HFsQcjFbXbPDV6TwH9scyekzz8Y1cRdKRc5gr3CwdZVBpy7Fo8p",
  "key6": "3xgnqbbniAwAzYie2SCprfPDjtJqbGdajbyfFxCHeKsRsJnNicQiKpscyHCCjRL1ZTCtHJAQygoCsHV7q24Yx5rA",
  "key7": "4PbSFSLznDsJd7mxzCSeQpguSXN1wfTTr6aowbbaStjMm4X9FmG9fxfUTq3G91bs7eoEDotcYTSugyXTmNdq5yjY",
  "key8": "3rHD6HKGF9cZcvucpYrXycecah9PggxWHcqZwxEZtU1MiTJqimXfnH79pSkVTzdeg9nrbc7JEwnJnWpbcBVPfieY",
  "key9": "2WHqeVPkRCaqFLddSqQ2sScX4AL5RVk2ZzufmdBn1W5KnFqGEe5Knk7LPxTRBsVPMMgGdzqRdJrNWBR6viUggnVE",
  "key10": "4aH2r7kDPQPViYwWvujMCPLSc34xK8VwiJPZSLSLMw3pKxExsz25Sj1UEqh9p4BLKQV2L8UNDQtpNYrTGXpBJDtd",
  "key11": "5H21iLhiARapYhfQjaMLjdpbcQc1AvvotXYayFcyPGjVxEG1z3qYzUJVqYQ6XqDDKmF6x3x1yY3XRvqPVDFGC52k",
  "key12": "24BnTK8B5BTK6PByKUmuY1XDJdXb9CRMvAdXQgpotCa5wNJtqZAM3q9aLC9YLik2ppt9KYYNZaVTNZoV9zPqUM8J",
  "key13": "5ESz3pAE1Ds7S4S3mk8nnBa5S3gcjMR43zPi5TVAq2Lu8k1h7XYMPPCrwXA2PjmBSMi8aVjaa1wGZmpz51WYdsMz",
  "key14": "3jcicCBtYwASyeXFtD8T7BE44qXXRi8TasVtzH2XoHsBAFycanYqKMp6qXUPYcRrzaxZRrEvq63Redm9ToMi8AgS",
  "key15": "5uATvXMLsPdNCn34Cf7AGrAJcvGaBSXRNZ9fq8yHurEaUCrMy7JfQ3C92fDWnP85cw4GWWTtZezaQr3rHCfbrMsL",
  "key16": "2TdATWmtqLth3w9GsrgzmfH58DfDdUV3ejDTtDbzQMdZR3r2rrEaSsBaZ1NZZsh92cTd8KEneecWoV2o2HGAtgQr",
  "key17": "5qasXKcXhceBEFZPGnb9ggbtZM9xg65JiPoajwkZbDRgACpjQhWxEBsz98cN7BxQ7ytjRRzSdMFChrPWnPhThcqS",
  "key18": "53ytQr8brkX7UitgSZKWmaJxEbwRMht8rppsiexAXR5u3RCrUbGBnHRdSh284bjE4uapHVb3p41PyZduBp2ixG6",
  "key19": "3oqzPB7Nfdp786NeKH5gG6iF3gfW6rmG4oeGAmErhETK6SBsRkPgwsPq3jM8CxYtREq4qMobWinFGThYyFZp4EqW",
  "key20": "rx1NpNKGh7LHQooLTyq2na7ZEx53PyZMLQUENMbNy9jPrHVPVtYKuaKfpAVpsq9AzRXasbECG1PMWc2sZo7ePBB",
  "key21": "4shmrAVkKZo1u1X7oDaobyQVG1V8ECyX4AA5nuTFTbakRQoU8v7trnqgkorGPC8HSsMcMwFF1qLksKxtzAx6MGX9",
  "key22": "3hWBzC8YEhqeHGiNc5pAsQMTyX6F7WBHu21ob8nBapHo5wLwjZdMcexhMV2GHMfYdt2E2MBHjUGV4qtiJr94wiYz",
  "key23": "2fgCGLX9iMQo2P5EcDrBzfLFjddBEh7ACnzpXUMtKSbSegxqFsULtQQG7gmm9jSQtE2o8iLL5NQdHUgfNeuVaNUw",
  "key24": "4aPRJwLWBWBw9Tc6wJ2SrJJbEPsaYDfDBWDwFCTtDXu38cTVXsJzLxZSyHm5Zovbv3ZktrDGRiNBi3cg3VxeHgsk",
  "key25": "3mJ3kUXxp7ueKzyYfCQChPR7SJaAD6r5NFcXnq6KU9BUfBiWvcRhPdbk76BDei4ZibQ5R1AUDzkbhE8XujEeVkYv",
  "key26": "4iZk7FdKPVekw86JYft7g8ipHx1CDVtsSUtTPX57MuYtRDEtxqwYykv2tHwGC9tntsTeqXddYhC9y38He2wPwLHm",
  "key27": "5epB1XbReQpHNvPwDPmLFRRBNccHjmnDosbDFC6XdC1T79a8bbMsNKtBTJhNihAFdDgkd2NnQSpHVgbjmcvFcLyA",
  "key28": "3TD8xHTBggvNtVZYYU5ePpponNUp4mm7aFwKRrvNCKVmCh5qoAc8Pnb4SPBHbQ8KifMJ61aLfxHChqWfZi3wyeC4",
  "key29": "4QEa1k3MtAan3HfE15Uc15iHfE94GyZoVpDmYekdTv3VmMeKfB1YSC3cbvkURbKyqbqJyZpoYzB5RdM2MeQpqQEx",
  "key30": "ETTCCdkekFPPWmEmiygEsTNUEj4yprjB23yYiyC8teQ5FkgZaVbZbCKDdiDWeSr8KMTt7X8mAsGEjxswuKohfEd"
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
