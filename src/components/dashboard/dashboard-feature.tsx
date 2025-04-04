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
    "4ff4oEgZXpHgkFQGGf7KaCk9h4C3xy3MmfxR8WDzGfuzD5JDNr1fgfZuk1Qn17AgAMCUJXF3Nm9aHrDQNuHve6CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ch2adKV2kE2tcf4yCLkaiyWsXEdWVnNQYMfE51QArxU424bNQH8mvQeDdV5gdhuX3xNxgxtTdFM2bYj2o94gwKw",
  "key1": "4cDFSgNfMfsYSTJv3mQpsNvihKVyMshYFo4AipiL45k6AbFtfEc6q16RsiKTHpjDJ8253h12271KJ71XqV9LiJbk",
  "key2": "3BVNdTscy9v8sGqoYXZsMpcgjDoj9duJuZeMD3yRyWF8GiQm6uhB8UBJSKHBh7KuN9bFGMTDZPRLKvqQA8vJb2QU",
  "key3": "4LbAX3mS7jPCc9tbwqBGKWxohThUiEXMmMgxzaY9ccXgwQysAKxajCWMWihMg5J926spJyGRYjQvnKWtxmh1bH11",
  "key4": "63RpgFfaQjQMREsbYnsgXayjZuepk8SUANB7orMHukayA3RLByvm1bo3fz7abA8caLni8hSHMn2HGhJzC8A7j6Ep",
  "key5": "2rnzp5u1MVCbhGZtopPdCrphhUy7TaK2wuLzagtSSHwLwJPqvzcjHLNMLsfXpkDpW124HUjzr72GDVRDeZr8fRKw",
  "key6": "2Kn7A2VHJmkKtzPgJRJTtyHRMr8aqWpwkkWBb2GrGFKXba9q55H3rRvvBYKpVpBpndjuWgT2RhY3XtieA57UaLKz",
  "key7": "5TDyAsTBYQsyLGF57rC9QgTFZ1tW4yvH4iPmbW5T7QbxTtRgQJZn5vzmdLND6xC1McUXdGw5pNn6R99rcwhGy7D7",
  "key8": "2rLVfZZNsmNCjnz8LV1fa8geZQ1g1vdqZm6oqwVHPTM3jMsPV8UxtxTNmwSeNFeHZN3tHJw42ZFawTqqQ2YcXfQK",
  "key9": "CvvqWq5yDEwFnwMfAJKwgNvEwByEyFp2LeqDMLheWBw8FGPicJv8sgRbsZKpH36Q1W1LRpcY62xrwTqPDACt7a3",
  "key10": "57hd9YHv7TzTXHuoRwfcxnyrPAEBibAyt22aNdZaHhei9VE6nrBz4YXG8azxXosHEeZyoRj6f2LBvgbfoFQ8Sfiy",
  "key11": "5Dffh2zK258pmU2oQZMZmjwru8boqjakGW37MPKcBkNZmH7KzrgpZk2JkV9v4ugt9ECSM8gRhdjeJx5YiznPD2cx",
  "key12": "eYWtHDcRYeidNoiVKmsTYYoMqwEvQ12D51L8bM2DX7DiYB37x4Gp4yukihH23M8upud1TW4vzbARH1Fthq31eGm",
  "key13": "2wNeZc87FPhLxwTdFSL6QgNYYRuVdbtwK7Q4yM9JhLBVuLtQHEmWRif5cvyyE518odmSn3fg29GEnnCyJK4XCd5U",
  "key14": "p5Lor8oU3YPyP453bPygYJj4baxKfyYNkPKXjaD6HNrUwHrXZr9mxYYNrQTLKzHscW3QoFMMXy9WGiA7jyrEoje",
  "key15": "3vUB1aUn18WSANb7jWwoYQA9pguvHBFWg7uDhwmVpzRmR5ytWM6HLZ6Sh8LZ3bhGQHhF9Q3r6VieedZPpfpkp8FE",
  "key16": "fyP5Zf5kthXzBq8LzPLgqVTa9Tp7tpDYZqBNNiffJFxwrBUkNWzLRT5mUoinx4suBAZF4NHpRK5nWUhoGg4xh23",
  "key17": "uh1eu2oz19sk7Wae1LS717fQtCxC3Kfi9aYdo9iyK7anzaybcMtvxKC6ZuLAR1usbRMXreULXLgM6upV4kcfkyQ",
  "key18": "36Di26BDj92au8m2xKAgLtVWbmYPuVZeAvCgisaBowQR1kDCJMSNi9sCqLVEqha1uP6ZqqerS4QpGzmPq5KYgTSN",
  "key19": "3EMr9uoyPekWdCXB1BT45k1AeeKq5jKKXaPC8kfofXUjmpQxhSQmjcL7djCVud1vysdYmbUENWgn7QhoN4xo8sUm",
  "key20": "4LFxZ9ETGdRY6ZePmLx57etzgpwg2UjZNUpbKaEJGB2rbA7tUTGUoNjsoj8kWCrekgKinAEbZWJySj3ZwTh6N7Kc",
  "key21": "ryNW2iyMwjCeF22eLrjU1nzQUx5qfwDwc6wf52baMbQ434Nap5orGtuNFBbsYdm9cbg7DDckzHHyZ67poE8YBw3",
  "key22": "3f2LdC8MjZyjGT57aTJvh9HuPWHxPdFd17TDFcebzoP6iQzbFTZMrcJqRv8PzfrEdMtFCPNu9mLJmZu9GTsAhurF",
  "key23": "56ntbXGHcJA3kzmtevazm63L21jMCKqmz4k71mZJV4zPKd4BTA14XPn7XdjP2ATtxAH2swuum1ZmfaoMFQnbJLAr",
  "key24": "257aPh85P5iBvGDdteZD1tpeFDKwh75Fp3i2zyhuYUvUa8FDycZ7DT847yHYg5T1m98qY1sF6GAYMJf73KbxgrFL",
  "key25": "2hMQ13wRamS1wpd7QVFKZSXsXy55sP27buM1kTuPQKnZysvEZzptdM1iY6ugdyjaJK4MTdppNeLUHTvpeksrj8nf",
  "key26": "5Y4StdYECZXNJrCoHn2xH86JeZ12k91FqWtxDUph9DHuPMLZbWS9oyh6Px4oiNSxbFGQxCUKtP5VSMoqTvpX4nyJ",
  "key27": "Eg9VgkPPAt6Ssr1ep1EK4smi3pqFuDgSQFwVptLwbMJYfG7jbVjUirfjSch1FwNBMgz9hLFAxX1JBa8Xd6yajuW",
  "key28": "1UzdwryrPaWrGD9PR6p7xGkivDHJZpWExjjX9TedYBeNeArfAqYUM2T3udUqeWw4gzYY6vMJEab4LdpZkSw7T4E",
  "key29": "2uJrdhWZ6gKVNeojqhSpthkYN9HbbbgRFyxY4sqCZMNf8hchjP3GXYs9xG94T2NQMwMFhcnkSNmLvXt5SDx17jV9",
  "key30": "4mBSRAM8SJYM3s5ikNv6W3FKF3GAcfsvkY6JbSNxvbzMowC8hnoPhBRhXAigauoNEaLkKdjhKELSuAPBegrohwGK",
  "key31": "3uM4ZKCrgyigor3qTGDEc47TpGStdhbPMoLPa3YjGxzbyYjrEqei3xu9FACANrwV6trm6pyA1NtVKizEZvdbpVi2",
  "key32": "52ng9TSM5EMY6U5od3BRYXEW8bG251n9c1Zdrzhj1zzP1CkYqSmGbiwtkPu9F1kDLKotHq8yvho6LTcsP9MytepU",
  "key33": "25JxUBEvQ2J6DDk1a46aKpQ5KwC6qF9Uk7Mz8w4Ce3PzNgrTTMh7gKMQdCAbyuZpQU8MN4vMNLz2yMnxNcg7jK8w",
  "key34": "R253wXqCbZJPSZFuxvsXiFcE5u7Ms9EihQHdnfeALDfk2otrTFEUQdvH4wnkAdF4ioDS6QmJbPvF8dkqNCMhofQ",
  "key35": "SAuB9Kk8bUYLq2BX5wpWm6AdsqDNfiofffn4mBmTQ8Ux4Y4D2W5f2mp33RWKttwmHKWCFumYFD1ezLM6WXnaWjP",
  "key36": "4NAqZw8hseEU6zL7ooekkcCb2TVZ9FXPhsVVQmU5bgwKVN5Ro33yhNWz2eE62YNaeUGJbq8M6SnxR3B9yKbvBUJy",
  "key37": "2T3kp8hFH5Fu4uV7QkZnFAsNiHhjCXP6Y9Y2ZwXKVFMWAPCrZWvbVqHkm219aCcfxwM9FhK2SAjP2hiFG4HDpfmF",
  "key38": "5FXve5AdVvaznfp6NXMCTV3ujY3ZaYnumPkiEvNyvC2oFaMePsMPaLYn9j5iQahP4T7T6zTSUwVkzoxZmvJcgGuf",
  "key39": "58FrDDeuzskECa2v8vZ5RQLu8BDW7CR2JiiR8Yxp94ucKuxgE7Zp23HugpP1ugB4wiRrexZ6jnKWxQNFtCWFQHqh",
  "key40": "4sRqW4PkLNcCDWruWzcesimYaSvxbF2Nzp4H7Ccux8JcYqT1qHjDVwH4uu4AEkgPWDocygzyyVca5StYmEjgymtj",
  "key41": "3YhRB2ygwGoHVbqFcQEVo8RqM1pAWdV8Znx73AHKXV2wfELVRVMU12HLXQWkEMBAz4EMQZHkGSpnyhGvb9bQjU1x",
  "key42": "2mDtkfc1A2drkVP26azxquSyXsxBvewsbCfmm2uo28sTcUj4K9kwg2rSC8AUtawCK6DSh1dDj3dKFzV9Lwt4oSKK",
  "key43": "4FBgurtaihTtCFkH5nkoPrgYkmMPV21vWBaukMm9ajrDmfmy4zHHi4KaZawmKAi7kbsDHnBy9p69eUQuT4N6say9",
  "key44": "5NpDpHWA67t9mu4WvfA4A4Ts9AJ2JsZjQ41uPQUD6rbFcEh3AAXNdubArKUnTpSfr9GKo43zfZiKSVCZm825MdJi",
  "key45": "2EHXC2RjQxPawriAuHSPgEwWVGFfhZ2GMz3QZwUA4z58jJpKLneWUHQjyLwS5gMwf5sTAyA7Ff22oPnQ8o8fG3ie"
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
