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
    "gZywi2nR8uQy31L5GLMMkDu3dorCaqqu6Sjc3uA62FoG4EH52S7FgcG2V95DHABbeJiaGkcff79P7p98ma8NDwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnWnoHWvzEY3KYmFkCTNyfTm9H4JUipVCc7WKoSm5TBNg5v4NALpXiXhPA4mRm6YAHvPEuB5zAGgXvRDhntPy9C",
  "key1": "4zhSaeaA5iu5YtUh2Dd9ErvmTESyZLxuJuUGws2DNDfRg7WYYrMasBWpHkqQMYtMaN2QUTqwLFNQEeVc4veF8pG5",
  "key2": "28LDYzCt9D19yA8BbhYMk2rfabmD3WzvszNgaHpP6XzJkus3BREcP5RAy5L9jXzwMEHFmBpSM6Qb8zQ22kH6G3B5",
  "key3": "1tiDajXfsejGXK52NkYpLZRZbQR97Eob7HXWR2yuGdcGuKjcfzT33ALEUL8sHsCB5SaM1rrXfv646kx7DsujFpk",
  "key4": "3hGbnveF25tBPkA2Wg1cMxycnpesBrhx5dYHDDZNLGamjGtXSBcyPUbQoqGpTrDnjPHnyyZWD9GmgmXmS7LuAxo4",
  "key5": "B981FnjJmoh2U2FTQbRbAiBtdBKLNEPZ86w7LdkxKuGLSmmVwgoWUcBNtKMKQRfBeSN91BEU6HFeTnZoEasQqki",
  "key6": "2kAqYCpJ3xToghYokrxvz2tFrtVFqE4bwwg6inBr69ehFHdhf5qqk7DRcRb7VTdXMg8y5PQq9WVUxxfaXvujzgMU",
  "key7": "5eUP6ZbKcYWwGLPJbLS5wPsjnBFJTAtuwd8GafRhf3ssXVdrxptHHXmCtSs8JGRCmaSNZ8iQ7CtMze6BhTzj65um",
  "key8": "5ygCLxitKr8aWLNmsLwtLfxwucNGBCRtSjhSyDuvEjdRyV53LfwVAZUunB5MQU1LhiT3836h5ie7371gL5hKbgok",
  "key9": "2tAyxVRXz2iiZkAh1ga2DypJTEPQzVCfWh5g5n7f5MPCVWLqah7bFsMsD8QFXfvUo4X5MqhDVyknWW2d6UgmiXt3",
  "key10": "4QfLkbaCeZyhDBxLQiQz8B2KsgezdU351bRNPKZL33nxo2w7Fdxf8BZMvcXRzTC4XFu952AhLoRaG3eQCxGAG1c2",
  "key11": "3Fgoj2zgCUdu6cLjouSGHPhcxtQumuiqwJJsFF9LiSM8BkMjPGrHsDr2gegRsQ8NVDjUnDo3nrZ3jAnDXoNx3hmk",
  "key12": "5XMJwQn7z2y7uf3WKJvykXAqZwvsVSVtLxBE19H8iJsJnhJK8iyHXARJgNDELJfcnVE8vhovdoEE5ThSaiRyrvi7",
  "key13": "2Ygs7v3berHG8Pjf9MbGCZ6tHnU92qxgcxrSnouuETkU6oDMQpfSA7YguL6YqYKtfr2R1EtNqQaswYrdBNcuBHd5",
  "key14": "32thZmikXXUHijuTDAKjSfLexWJyggwSRB1VL8eGPbWz6CbVfGF789QQrmHLmYWLxzuf64Vo62mmkEfStyXvoVrc",
  "key15": "eBwJm5bu7UD3GHVTsJNGtYRxeb2K7GLRFRCLYXmkApCYnui57hYYdUzkuTFJ6D3HEQ5Pu6ybGWMQCvm9Yj3pgkp",
  "key16": "2FnnryG1eQ7hYDfpkdx7fSBGCpZQtcgRi4pAb9eSrBcHthJbmApDHPhuc2CZ3xDgxVTHCbyC7h2T9U4oXWw46EXM",
  "key17": "2erpKi8kKXkayrHiVgpSf6sZauBk7rbVwAzVnxBWexSoyoc1Kg9JXjXnWsD4qaRZyUx4XeFrq4VS9ZYcd7bCmmVY",
  "key18": "3wyhHS88gKcXPRdErryBADs5sA3yJHWe2e9VBjdh8MEh2QBTnAwB8czP4UoYWm9ugQ6ndPW9WUdC1aB2o1VPdvFE",
  "key19": "3XWUHFK5i1gaemGiyLEjeEzS3JADBDBt87C3FWbAh5iaFYxtKArEQqykhtkk8hUJfZdpQY4oqjJS8kH6NajnED3A",
  "key20": "UaTNfeWZAzG5jSFrQWmrugfSuxR36Jm4Mfwm5tP2VewJ5GarFQEiK2PNgKYaUArvbCgpnKn1LrroAtjjv1bgmfW",
  "key21": "Z8GomiHmJ7dtfptQxmGJyHFuhjG6CFs7W6hHLUXB52KmaGe3FtqJyrSdWqK3Vvf88dpEVQhEJayeHc8BFRjm83E",
  "key22": "2KG9aEPJJjRAQ9bGVaA4pLeuQxYi1VhPBZsTqivgpSvCiUS16d4khqr1PMFwVtb9qgx4b9igQsvh6buuJ6TdGKZC",
  "key23": "95JTZ5BwHy4c2FUAP9NTWj2CcCjGppf72nn3yiz5NzdwNMtPxiy91WRQr2cYCfJMVqjNJK1VcyBa8cxaRy2xVVe",
  "key24": "4xRKh9Gv2cfUA6vWsvmSfo4qGFiffGcj2jzmuJeq5pQzQDhaprdRyzwpGVXqWJysgM2Jd2WTJ4Atc4m9yrdiy13i",
  "key25": "4ET9rECoZZEMPumboVyTZGgmNX1TGFuq6WDxty6R2cippiazjRf9aKM64fLbZcR3vUXCRJbF9GdMgUiBhDUjLPPC",
  "key26": "dh4UJ3XbyecG7tG15B3aTpyXWfyjPnwQ7JDihN4bZckYNtRk4JZMCvymGmXfmVQstGwiBbEgX9fT9yqM1Ws6pxL",
  "key27": "3Q5cpUJ153yLi9AMxGXJmQvbg1x4JY1dajExqCesRF5YBnb7boTnbV66NS5LHaLw4PWLsJemKiXEXxVzPQmL1YLc",
  "key28": "JSj4hmXWo9CmCA4qBKGpu9ZRqGavwiA6kLbJcCBfh1KPz6AtWbkc4Txh42BX8Vgm3dBe8GgQ9xueEYow3DSaowG",
  "key29": "3T43aJJQXwm9qxw5WEsof1Qgtpp2WszSkmBVY8G6YdqBb4dNw3umUcBLgG2yTQ8Sp8wDjHaBGYqAMFSagBgfqZ8s",
  "key30": "gPzLdMtkNTcdfE7swaF2QCmYGuMfXpBBtKNANTS82dVXyHU16hqQo5akDCPgqpRE4sxfM5XWokdSXb93GNjjZdc",
  "key31": "2gVZExRhh2eeF8DY6jd7dw3UAf2f5Ls7mA1auHW7PUnApsZPFswbxWecD1stHyW7s3L6nDcD4vdrAGHezqH4GcXC",
  "key32": "3nwXKBNicd1uMQqB3KiJNP8d7XphefCSLG9UV5X7qbWb35o5Th2yitPQddAVKHPmm1EKtxZkafuSjzKJFHdzhijA",
  "key33": "4LjZoahAkDSJYDc1gNEfSJVqfFScFqh5hXHfGj85gPvbFoY8GGms33UgWyobCcsY1k1opXP8rhcVUHwC5xgFuqDp",
  "key34": "2RjGRy2QSSxhwaSeswQy1ZwqsPTmxaKiMDsudQaFKdrfXsmT4Fp6rkq2XFV2TKRCCShLUg5tyPwQf64wAJt4TS5e",
  "key35": "4KbfexLMiostV9T2T5zdjuTG7MRXYAowfEDg9YBNRPJrKLWW7wRM4vd3Bc9GtA8HWvB8MHEsjZg1QSvuVHKCY2ew",
  "key36": "35n3P76yhqHrndWKMiSZAKQsA6sm2NAJqXcvtB1uqpjBSUeewk4PpuPnYTnSugjRyRDDP5PfuC5t69uqVxebfrB",
  "key37": "4UuZ3oqRCjfu8DpwZEd5jwM76bfghyPLu4Ee1r8jmCof6TsihNQFcnTc5NAu1YxH7vwt3i7XJdNdwUZLVjANap9Z",
  "key38": "3rr2ufy77qnZACJmbRZUbSPFKqpmEcDyc8jwHWFFghasyNcFtursm1UPGFR78y4iH4hevpar755LEytjdyVwngoW",
  "key39": "yFrR1aXALvqnyDDq7gjiXeqrLEJGWhVvA1GW5PtDnRc8fUQDY1kKBPK9EnNyARFBtY8rWqJ5dpKpvu2zycPUceP",
  "key40": "2FbYAjVSRDLYFJYcBWYnqDADP7XrLRMuskoQWZr4QYLSXi68JFkv2E1amZAhRKrX4ziPQha5stobXC55hgAdzKw1",
  "key41": "5akDCwrnw8ggE5FLEjm9t5HfvZD6cXnrXzwVSHhK5x7XaUG5d95UkmkwZBjtnVcTn3KoQgp3Uau23vXcwwQmD5Nw"
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
