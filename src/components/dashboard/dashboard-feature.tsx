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
    "4DnuKnSQxuKM51zgbSjuYCuM3vRSfvUybh2H872zrkGeeFjnBbF6JAUHTiWC2vgPthFDqTqQYJMckGjDWGuMyHKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tD7B1rRbUhK6u2oJwFRGtNytKM2QKtF4g764PRFGST5YqQfzXAKYieE2DtRuSfmKKeCB6dDVbL5MRixHAV2gyw1",
  "key1": "41ZoaB5b4CQepXEmDqCSeRSy1rZnvULT451QGGVTkUJnBu2CtYQkhxeti9FdvaeCVvxrBWCzf2XApLn2fHKc3Y7W",
  "key2": "65Hgnqverj4Kqdt7qhpmkDKwC5YVEapRXQ3nbS9om6PBfSqCPaHocDyDrLgqcTsJRkyUbggTTvGUtNzt5Qg8Btsf",
  "key3": "2qGhN7XivfDLHqgKGwYjfrytwiCZLYu4KDQbCc3vQR6HLFs1Cpa5uEWUzsCQydJziZ73otbEpZFAvabD1Xg6d8Dp",
  "key4": "2P19ZnUDFjfNJuTmdNsrH6EsayKD8AuoxHergcRWxaWMYYzAVZm63ekLt2tyhM6SRWdPQWV5RyXEZEGyBPuumEWx",
  "key5": "2tVvFLwepJ5tdwS4pqmbX9MCXFauAAe5LK42XqHm4UKywmUFXTc7dXgCn9GmWSwrw33qhvzJEc7F6oV775pNKVfv",
  "key6": "4zdwU17Z4KVfEisZBEg9GvEw5r6N5RrjSpYzMZjEXbf7JEV8Epy8aDp7Sm8Mv8bXxxcGSAZ1Bzer3KhkPix1b1U3",
  "key7": "5uAVAVvFBHkAq6nFaXyjDq91MsAswk52oN5kkFuFWmpoZVYaeCFujeRQ8YAh3RjG8BE5qBCBHwF3emLYj2an6N9y",
  "key8": "4B4Eo7GZNfob4hb1FFg6uRHgmFvTnhEKJJJppe3dwS2Qz4DrvwgyCZkf5kkj3edRCL9Doy6UgxxpDMYqkem7kytg",
  "key9": "2VD2QkdPvfvZYDekTAFfQMLt5WJvnbQ6AJt5TpuJuxzyaSnxXa1isK8sSaQY84SjVVZnMYeenF1AA3VALkR9yY9S",
  "key10": "3x11csiWQNYbv7JQLRr8PTrWB5DzWCADiaLw7a9pd8o6EonMbvyQDfjwJCptfEJpkKxrw6copW4bnsECqK9supCu",
  "key11": "zG2CYNTenzx1GPUhQeid9xJqp2qtiXLtpfa7UVhdoCbNyDdR7QEhwztiSokQxZ4vxXkbWoDqtPATUrTbwNsGwMq",
  "key12": "4pYanPuC618TZnWZvKx9vQgQHJsf4Exb9SGeCHtPBCfU91DmzKu9aXWPmk79dTpTtoVkZ3KzFFisuKtn4cbqusbf",
  "key13": "4NkXTSoPXak5jRY8aWZ5ybhiuBUG1FViG6CMDpWweHvtqcMR5PBxLLieWMb69hNZDB4Z637uq5jsj8ac3tThYLmZ",
  "key14": "3YBg2YUaZPUpYzdcbGFEXV6skJ8fEXDJimeypKYe4q9cboE8u8dz35H7NwJ9JvEyRNmsofPqjYvvYyMVrmfzDKgd",
  "key15": "5LopQjVo3UFoKysLQFJ2TaKjj8D9Jm2JS53QP4CpunZws6tJPCbz4FKv8HP7WPrGYCrYpPhgtpmkW2o2hxg6Zd7m",
  "key16": "2xDfA9q8oWoEWjq84jQniCRxAp92kuEVUfCKomNuePeBeGmNNHgS2TG7pPbpbPTVZobsM5QfXrLzGaYzNg3V1ESF",
  "key17": "4UuscVCoYhTwbxLRGxoHE9UoS2Tp5nZofpfKnTpGMc8SMPb18p2vQH7LLCJ3VuvT3TRx2vrw2VU3g5zxh8K83HFd",
  "key18": "5mPfe8uAUAyy1R2sDL3XCPxg5PcbPu8mRnnYLdZDNdfsi1eTjeCmJ8girc9MWt7N5J5JKQqSRbtNeC17K6nCD57U",
  "key19": "3yLaiX9sYbiMuuqL4MnJVMUmDF77MkoMR1pWpdgAGqfsLjgEnBu2vgL7RswQPAwyBDSVFEB5FgegLrY9oq6GdRBC",
  "key20": "EJLcScivCEPT3LsozcoCNUKHVziRbpBLSAtHKbfsNi2nTfbw1WYo3h5BqiLr62cxYYHmhxG8SyPmRDLVwuLfNyB",
  "key21": "1tLAASa9TCEWYbKzDTY6Sewi4ktFWJGrFBm4CKphKGGSXKr8egjr5v6uVsr4DfKjRE7RzZ6S93eXtbwty6g1eou",
  "key22": "2R1zCgjfifNT377KQ6UHsZWtSSFjBbzgTwibJmAjLEAogJaxaNSfuGZGDzdou77G8hgoTNvjp1nkKBV4NSDhLgxN",
  "key23": "26FDLM92MsBYnQf8LL475c2ef2NNpLL5EQziXeHptrr9upMCNSV4KLdxfV4wUqeeHUPTZuWMabkAVMJ2FxvAVf7D",
  "key24": "38ZNx5znZsr4AY2XnyYFtu2GgFfnAncNj8zK2irQfJFM258TcmdSUmwc1PLcSHHfm6CZH5MoosusEA2KFGZVvTZS",
  "key25": "2fxD6DgUW1Dc3XR4BLoexe8a6JvnRANPAtiQXJS6tdpYPWMoaB5Rsgesim8uM6REAe9tBV7Ph7UWh17s2sH7VW7v",
  "key26": "32CPPuqaMEt9qZTfXwRgKQtdCVazj778dAQNPohtFjqrANxjCm8jV6raXWMbpMxDRkKgwgeD2eUp6woJKA986TNq"
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
