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
    "5hfWnV88cAonSYA56BvBGPKCfT7wHoTGs8RBYVyBDrD7vsKT2h3jjh6gbJQU8Bxk3srLpx8dWFbGTj8KxozFAAAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqWV4bFf4qx7HwGn5CQDazJLQkVTw18zf3p9y4BZWG2mKBgRThEQ8FVfCtaabezxnoQ32AFvqjbQHjdgfWFe72a",
  "key1": "5doGgViLVihnBDEfYL5cWtT2z53ycCLRaGLDKsoMzrixemaoTvDUsh9nFWNRmrnCjzXAbcRt5ESPAfdqCP129eP6",
  "key2": "5rzApMNbPAdCoU1JBkf8gym1ghFE9etgVxoL5xaoStwJonWfgttzyCvmW95LSaWgbTGS6Wref1X4B8gQH5hGmM9S",
  "key3": "3JEwszpWHB7dkHwf446UtYFXHvbCzHmbrpysQtYJb6GQNp1HqZrtKNp3A58ouGK7thQAdqrQugpHy7xmfxDQtsnf",
  "key4": "2YtmBNRQtXiPvuLjkMSbxj49Q4JimHuB1BQRJb4Wdb9RvraMqjFTWb4fnKPApLBxhNHLGhu6Yu4bP8c9qMWFKqhB",
  "key5": "5Tr6LryHNxv9LVw9qWUfX1DktaDhvnEjwMPuu1agFk3kRcwwRnBzuFKGzFESbjNLDiQfvnLAcGXBSYi6ZgxvPJr1",
  "key6": "4hhxVBQKg28aCX4xEDTebCkd98zLzFNersByQA5NRFzYPxyvE9jfETNKeA6HZSwVHnTvDjWn64pr8zKzskwqEZL7",
  "key7": "5iEUQJDToqYK7cM95PeVJorUXu4VaKDfkfCA9hXHWoLb2K7izvwdJvqjVKGF3M4S5jDcw8ZaF3DPr3TuuMnqxcvh",
  "key8": "2kr6BWf7nXPuC822Fe7hBifpwr7qZN318LjUGXe7j66c6rPkdzC32UrKVQ9RLCJ1LdcsQpdxo9H9bEtXzc4gMexz",
  "key9": "vcc51N7BdwwjrWsUWn2HGrRMAm87jkTFwnH5LvdqCW1nokJMPox1Q4KiXLm8ARqoWmsqBs4o7h6Rb1oWNNjEymW",
  "key10": "2t3jya9xGWvToTyWrv8y2tC6bQMG58VmFcib8BQN5QbzvUAU6kvj54kajVMfaJLaDmGMWNQRDNcyhHnov6u7rjV8",
  "key11": "2rcsGRCgzPrwtqMBW58i625cQW6aXjAKPerp9jN6PF9hAEdXYhrUzXuGsy8JTk23VEPyYDf28v3aqa5hu12ajdw7",
  "key12": "31JCiYB5zWdx7LNjxPjHCKGNRdPELYX4W58RNMzLFXV6eFEVX8cQUasA2eWP14Aa1nfwdBzVeiDCmZRDFootfHYb",
  "key13": "4rBABXys5ezsPGw5KwBAEPBJtYMfjYJxhnPTTxCfWdeMtCRHvaejFtUpZwzLYGXzKYiN316irpsdeZ6pDurhaYnY",
  "key14": "2m9199nYwXYfCMC4tPw6pgH6ZsrmuVjqGjKCFmQQURJpdtCN84UBjPRk2H42UEck3neiTcWDsvUBYkHJ2g9AAkeX",
  "key15": "5UQr6CfeFFXy8Pcjh4riJbEKN4J2dz4ZdS3D9QFvgnboAhfKWmPQ3bVGjqAmkYautNY911aKL2yrZQHQk4tosQLJ",
  "key16": "sgmBhozKBCFUUEbq4koJTtGTF17XSxYTjyw31Zmj1E4WZ3wxUK9jy92ubUxitaedichbisqCQZFLAUpKpWkcY5x",
  "key17": "3B7vgYX1J7gTW5CiYpwq6iRCTvbYcyjC3RMVvEEgQLJXav2FSD4GhnyD8swn3g2UAJwhgeDzAxL4Sg2ASX787YR5",
  "key18": "3oRkgdbgaYBbTJ6en2RvTvDS3779m5LFN66p1K81Z5YTaiYVugvtx7HdtduL3eNknqp4VjEFwkNLMM1TtKYMaWgs",
  "key19": "He2of4DcAAjd34KszpXTPZF36RkxuxjvMRumyh95wu9DBMdSE7CkgEUvhmusR5Y6qM3CEjyGpM5FVynUH1dYZE4",
  "key20": "5B2MB986sJBbPBRj8oeojUK4WYr2A2JSvFZBoK2Arjj1oWsNFuUNBv51AVkfJvKaTHHP5FvwAYg22duwUG49nU6Q",
  "key21": "5GtUtXL5ezVdWdpqFZzDfhb8YdbvSUHZfmkwWM2afbkrC1LyaLLZX7oL8cJmcATxho6xSUXqt6WFZGfFagPz2uNg",
  "key22": "2w6ooBqwkuFTjgt1btM5Ec7hgwEcVtvmR6xz4hGHkxS63BwBcmfbE1afaoSTW2Md9MLPjksmLr6MfvmSeWEpxxez",
  "key23": "64Vyyh5hMKH9bV9F7R5PFLT6Rruha4LqVGd5rjoHvNKPS4q3pMkwvq1Y8imrd15jrNy4yztqGTjQZs7ohwGNMzyf",
  "key24": "2roMjr1RW53b15dwUJtsnjt8FUmaaoeZ4G3D6VNCPxocoeX7Fsa78Y9U8PhC8WKXsRtH7EtmAmCZABi6MAwPtzB1",
  "key25": "4Q6DFwhW3G6v3MSjDpSLKwLxTBcp9BYpdq1CPvrsSP4DwwYP3ccQPqqhasJ7QqdTSZaqTQyiR4Vwxq7g18YmZwcB",
  "key26": "5mu5FkNerWETQWHzqpn1cL56Ud6X7juqaNRxr78JEJDzPnhEDxuScSMBLFt1nmtySRmkJUKokdPKzDHoVsfjXm9q",
  "key27": "2WdM5nhNp4bW4HQRDkBvbs9KBuU1GqfYBxqifmiUpRYfwxugahUbLRdXPdMupTtubUaqA75xFkKqyfCa4PRDyrUz",
  "key28": "35EGy3rjNphfUNcHZ1GaRV59fMUCPKNUFADM9k1xyyvQwut5df8AU6dS9DCHm8MofjJ2jyVFxmy117nY8twGmgPw",
  "key29": "igLLPvT36RJoAykzJvW8m1HTTfQxHkRVRiNXtHxgwaKnr4t9JZF3oUGQbHCvW3Sitm8mg9V3uXag3AcHbQDjcBa",
  "key30": "3sMXU2NLtWoPTenUbNgpHbndNcw3nyqKkPyKFycg55teyYiFmuPEv23DNCbQikWVxFzrxEw9bLSguv5qh5TkzMSD",
  "key31": "2RCddHXm7neFnja9WiBjXE9UiEW3r5Ce6Qu4ebe3Ax2DEc7sE7knMwT8cpAfkNd6KA6B1KKJihYQZq1SihBMJtDK",
  "key32": "2GdFMBdmhNj1h56Asumg68W48eDHR4B9UarRhNoDLAVfTQmXmMpBAZEjv2fo5woAaM9s2cKpyRC4zqvQE7aSW4GY",
  "key33": "2ZKJheqUPAFyeQwD1ErNG7cdhh4G25727wD3TtBSQxH7Jk1KuvGtPTAh7ZWgqoEk9iKvc4Ja4s4bghNkKhs6hZMw"
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
