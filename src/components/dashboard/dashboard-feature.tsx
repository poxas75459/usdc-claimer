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
    "xuRtoA575DzwHo82YHzhmEudv89AT9vPyF74DxmJ3jYCPWDuDDBxLiePst5aChHcToCVyaTVrtaduc2PSVuDzmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYMhn7QwTecg9innQazt2uAnE87jEkrwpFt9y27kfDh7rycPqBcdMJUV5VEYsGTWtxXVXeuHPexYPc8yHAk5Tzj",
  "key1": "5WZg6EAbwzNKyfsLA8KCkyG3BXUK5RzHBByPpNsP1wuJZQtDdXScu6iwBYkZTXcRR7C7maRcy6pyctaC4LEoFLFd",
  "key2": "EGnosgdCHCyk3mzmsqD8vYsfXTUTjyAWi9YZZMzuP48VWcZJFM9RzUYy6vatuVhdTTH2mRQWeine1nvmSstNMf5",
  "key3": "5PwgWGYwufHwbKuTVZCZnZVya9ch1VLRrLhHpcTnsaPQy77d5xMZC2vFGqoKgom276U2gXXUGWuf72h6obeV5pC6",
  "key4": "5GupmJ9HC2McqvGGZuXkPfpoVWDj5PtUDhQ3GxmqbmF4hTGFJX2hTN6TV3ikhUg8erKTWCAMsxjNcQ6yvLytrCsq",
  "key5": "5YphT47VMMPFhkvDTZpJmBX5GvxMoHG5Zz9CGfiZXW8BVrv7Qn6ePtZAYcQhTxLMdMUz3hmP3AvANKFstyW7hQ95",
  "key6": "2pakFbw1uiuXcpqAeFAGKCMRXwPyJrvVJzoVoKfmsWPF7cjYHr5Pe5QL9gG9aBvpcQbdbzxzCvzqbT21pdxM7oh6",
  "key7": "679soc8zYgbT6oCK6RF3b8RjWTV2ZKTxG1vd2t5t9FmmtZhgFNrcymRr4tb523Z1Kut5tmcVU6hKpj1tSqZbDijR",
  "key8": "3ptdbJSurv6meuwC7XguGCuywVpwmxdeuALKgoKuj35iQrcxAm2Df6x93zqLF49qCac1zJ9DsiHDTCiM3iuSTrLb",
  "key9": "26LmrS8pF6ax6ti8rRiK3gXxNRBuXrAnJLJ4687qjo2hopfkuCWBZG6yQcH6UF7mQyKtgDHA71x4EYTP2trCYJx8",
  "key10": "3LRE79QQNf5QUjrBy91A6Qf7yb5bcL88FfzfkxXCXG2EBNLfnBNCXPiBkNeWo2nxGCAtJtQHui8e6pfQLrHcC891",
  "key11": "4v95ZjQnBtCHzd3zwp1jLo5X7dfZ9iAzqWskeCx2Sz1pmyBSziqGE12ZjCauc3ZAhZKABZtw7cVsfnKuehTXfGNp",
  "key12": "45zbUdTW3oYgmA5LHLgMmgmk4RYXYwf6SVMJeAevvhUmkWfHEweugiSm4PF9AhAc1o5M1DNQ7VdQppaeZJ96HsLq",
  "key13": "62kqUjHpYh6WrVraCZHnpPy6C5mX2BaTBoimoMP7HReNVyRfBQjPDR78nW2ehS25vYCoJRsUtjGdzPAuR9az8ST5",
  "key14": "3K78MT78PRG6C86wmiMZBugkXQC5BiHVn7Et4jhbvR7PBuxsKj4ThFgAznxdjVLUnEfTq9NrcYSMbVDubJsZzo5Q",
  "key15": "6UVepxk9xfs742cM1UGCrwKTD3neygGQempyMRZ22qGpLgYH8sKGfJ86bkuE9uVENbpQBEcLwyGnLuqTsdhPpGJ",
  "key16": "RC8nWAN4UdpL7hFhmSQ5p2daFgGEZGiL5Y4ThpRd9pPQzx9WjAdrSw4uLKRo7RY7NXKe1DbSs3npqSPC74WHP5R",
  "key17": "DwmGNxqSg2PpR2YT36nqpEtBwynpJPpaBSWuvz1wgtwPo53RNcHArr58mfR4e6uEX1u7ghqa2RphoqcV2DgBQDt",
  "key18": "4LwnzH6D7Fj93pjtmwtBShczpW4XXDi4PbQTCGt52yRCy1CnDjYySj3C9HpF5yMTcmRgQbdKjykst2kcMuBW3jDy",
  "key19": "5rQdgapDS5BV7iuvMiJE25scXvsYffvfMk9pRWJKPhFMh5nRDGV7LWAB6GeXMvfMeWr8wiEYqyicLq3yHyq3YnZ",
  "key20": "3abia5Js4dPpzJyxBuLqKDXxXzQ2eFSaw6n633GUXuwE2usjcuiJ5tyEjBE2ascvQeFiSfDjPNwihmuHTcx1Edb4",
  "key21": "4CSwshuY5Ew5QUUzn3djiyTp9XvAps1hSmhCnBvNqi6waiZdaSkfYh4K7pXiX3BsDgtxcERVUxCwiZmVJKxHFAhx",
  "key22": "42bRC18aNwJtYuEpAZh1waMAyYgFHFoq5Ue2P7fgRmf15JuRPWCuQcs78LFvr3nfedhE8vyocY8dwKmBocEfEzsV",
  "key23": "BHHrohrTNF5oSzWQabXBrK9QXH3DTcdt2Ci3Kht6UUq8hZfPm5a7GE7bRGQragBYfgB2WsPoyqutPksvSehosJb",
  "key24": "21gYckTwpH7LXxAf2T9hULeLZbiWCj2AoxQppQjCwwTnS5fPwA1i5q94vZCjqc9LsRcF5zvKi317hPnqZheuTZSe"
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
