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
    "8uQ9oG7TrB92J7ERDKLTELXBE8y9efGk2fKDbiT494mmcn27ZPtNDAP6g1KZabn2Nt6GB8UtDV5krTW8BPNQgGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niZ8pU8Q6ETKZumooNefPAN9HFPRQdCAN7Zb4mjygTQ1PyKWd5igxuezQ5C7gjuNJQfge3UsNNkRU2TUwkjounB",
  "key1": "3JUPxUZqspZToTsgXPCcsr5PuKVHNNNQYHBnFQgqsTCYRqCGGw1N5mv1tTF6GLhisNXH1MNW9FPecpTaJbr1GtW7",
  "key2": "33VqK1XeudqqNxtXfFCokZBRSJNMpqHMRUM8qJQRnXAvAqkhXUSRzVf7cEKiJWtxSztyGsQYHAJh5H22AsAvASzJ",
  "key3": "XzX24Vofdru2bAjj6DXACQg7cbqpvA3GrCP3Dxx8j22YLsJ6t59FoybXAvJjsokrPYEUxKpSTMe8YnJ1jLQY1XY",
  "key4": "2R3cygrcKE3mKdZJaEgk3RoKeBtKfFGWJr6fpxbM2PRoZAr4BLYNoiPYMPreMS8VPPap3KH6anKHjYQX678N6Sae",
  "key5": "5wTi3uUoT2xa7aGC14a6jYkvLoY2cds5wFiqXY5cg6EfWcEi4KZCYy1irjsmSjwLqaE9f1QZrK34KM1wTtsGnQ5x",
  "key6": "idoUyBjW1CGuosoEDgQqnW7oFmzkD1zYutAgwAUtyczhjAX2mEr8qdk16DE9UWkkrC4KaDh6GSGgoQ5p6YqqkAZ",
  "key7": "5QiW5iHKpuDo2Vi4acdePwnMBmDEBqcn3NX7Fic8K6oBxQtuaKoVt3hosvUyu2ts2P9gzDEax9QCafzYHHk1iFKV",
  "key8": "4GqobHuHwUnBt2H1p2dsoJn34f6dfHcFRW3JxEpkwEGrrkM3DUaXZnd1rF1PJanvUCKoxq1X87q7k5FZP6tkvU26",
  "key9": "5BUsaZdGWqxYX7MD7xJLVtcv8ostApmkxJEtZJKWL7mqySh74zQCqRqVSQjiRtN1hDsLF46kYYdaNysvjVATtjNC",
  "key10": "44fynddgfHWHvu1huWSxumiTzmCAmBExd3VYJs2C6CmkbRmwUTeaDKUGsNPg3a2CALKFKVR4Uf8iJNZKU5ZnWAL5",
  "key11": "4K9VcYZCqHBGBnMfvDid9xxBrpKJ1vpa6qWBVtqh91YNcpckuJG7qtcifaQ2enQYVAccxQf8qnxLfC4TeYiMRgdu",
  "key12": "5StxFu7jYMdHYt8FZF4FFM57N1pu9U512upzteaf8KSiTTSrix31mD7pkarnbNTSjCH1SSyaiETxE7eEqtHGPfnk",
  "key13": "EYsZ73fwAKivUpBaVcqVg7R6oLaE7THWmHu1orT2RRFSF7bWjiWYZTHZMFnmqP8Ku1VspoYLgtB3aUUUP5y6vFT",
  "key14": "62H5yjpTbT5LPQPsg1oebJPrj4DFANZAMkxm3PDJSMmnuTg5uHN6DziTWQF1c7j8vhHZFecV8duxoro5PYY39ACL",
  "key15": "64KZw1bCGFCFHPvfXazq2J887E5qggqR17D6wrMonxjaMT89WvqR2vSdbFywsFZ67xncMCXd84anUEgNreQk7UX1",
  "key16": "2nmzCKD9abxVAwje1MWfAExbZ3RQQrephG18Hhg1iNPK2DniL9yVtQ3L3QxdZTmgGtr1zit9vLTw4ZfB1p9vUruK",
  "key17": "4xTeGWvLgbp844L8A6iEp5fgPvYNffF1YMLeM5u7qG5koj72xxria9sspij1Z3okwuCq1u47b5ozphdfPm3NLsab",
  "key18": "2jqquPhanXEBLhk6aG3Lpy9umYGoe1WgE5vz5eCLAefPTnJfvoqGsfqMHj9UCaE1GQhPdAtLmJJFXsPW2j7Avn6P",
  "key19": "5EyhAQXo6CeQT2bgXChz4jewBnqxSeUjrE73THF4bh1mQmtkofLvdjchTD4iY6Cchbu5ww6DtW1sgddNMZcEHjbD",
  "key20": "MmWXKghP95ZZVRSpQpyeezp3XSkzGet31DqUVhRQAREKiFrG8FrUQf7hgksx4YvCSESgKdp1V83iF4iHGev5R94",
  "key21": "2uezA1LqJkdnVv5pksrdQx44hzCDjEHapJGHJxvccFoyuaQe1z41gWz81NPUEvLn4C9hhFMddjktHscPU6xs8C2f",
  "key22": "2rA1udzd1wDVVWQtqdEjLnfzx2HLFT7t3Xz5E3jN9Z5oiJJ4z6zbMGzP8DP68Xbepnc4rkgawGY4Q3Y2H1mdvvG2",
  "key23": "7kJyGzRMCafWSCncV9V3KZPoVJToYkgeU5iDr96TBR5hSL5uixoHPFgHQsUdjKmfda9o3ce56WsY1wgydnRGWH8",
  "key24": "2wxFyzfH71QWqGQtii4o2RUDzLZQgZfgv92hG7wYzGbuF1LP5GS1d8WhH3iEkApaB59QFJLt2AgQZgpQDBhXQDri",
  "key25": "32dTRRSMdgzCG91pcCatwkJ3hr14ij3sDLDoLVQjQS2W7CiP33At87kypU3F4JbKZw1XHYqrkFZNbTxtowBjBsgy",
  "key26": "3Etf4tqde2qyUwZVsaj6atVMGzV7w313YUjBCyFFwphSS1mSH8ke1HrcLenHmyxbKCJGEVx4w4N2QYwyHG7oSRrQ",
  "key27": "4YDWDZmqL57588TFAUVCG1QKoeKzK1W4mjKkr6vAbfk7uqeUWawSFB314Cz93HpiBS58pDrSXPuYwQiJFTwtu5MW",
  "key28": "hHxbV56zyWzbRwdVfD27wAAfKbiVQY2C2fRfeKqNi6of9mPRGTSSrx7Xe7Er52rf47XNnrXVAqHPg5Kds83ooeY",
  "key29": "2J6gk4hsp9UxzHqFfWkbxDBgpy4WDFkK9iqvAWZ2QdZL8fxup3wXEEg3AoybyikPp8M3fVQVJWHuQsWxRubqQqcg",
  "key30": "5QTEBAqznq4kxA8reqZ7SEcj4fi2m2awqZTFyf1293tpuB91BDtG9q7o7QHWfgPsZKDaii7iKBKhRHn7MpmrPz6C",
  "key31": "4G1A16WRfirnbjqVqP66qMSgFWbGmCRnK9aouEC6qtYLfxi9fStWTLEUHstGfAR9TkDq9nmdgUSHWSNwzD2mzBX8",
  "key32": "4KD5nVrEHbh41ewpCbVE1gL3EPBbteRECDE2zjdwfsrK7SKcuhv1LsW8B4B8X2UetLwSDXEyPf1cgzHWYEhJKn31",
  "key33": "eMrqmLMrtziZ1ibDAEvugMQyf1TeqEwtRfwaoMd2tvwmAHqdjFzvXHFT7iWeFooknhZFxMbtEEJKZm4u8WgznxY"
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
