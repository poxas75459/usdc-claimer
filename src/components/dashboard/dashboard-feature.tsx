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
    "6hEwr37qc7gRTrfjecSJDiYep1WnnFJPbpqxTWCMJwrN6U6w4oYu1nKg374UEH4AtfK7FDjnRRPkRp45i1McHFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gmr295Ut82ev5dQDu7Cu9H79fuySr95H6qHewG3dRp9eGSgUVturSpmugCkSey5hd1Nt43B9Lz82gPYpbNSAEUH",
  "key1": "2vLe4wyU9sA2ctKAjpHpWPw5pZbLAerXe1Q983jW2TmKM81Wbya5yNYKposXr2W7w1T7BcS5rz7vSRfnVouxnU4J",
  "key2": "rHtj8pUpAKkF4G2qaqXoLfDKTh6ZLnRxgvvpx5YXsSg27EdGMKwjCMTvuR51ifZ7NzdAtRyA6FC5fHRZvFS6A44",
  "key3": "5SkKu2XUVfnJZtbdh9zbfP85oKAghsuish4WeND28e5jvQrHEHoyFHoCKXMqpLmE8STdq2gZKvRryJP9AcDf447o",
  "key4": "4i4Xecp5MpsyynXh8K9sGZgRMezsKfMqeZNuEVsv7VDT1S5YUJZs4D544mxCHjGvFVzpvyAJkeDMVgb7KTiRtq6A",
  "key5": "2ECVx7CBZrFJuj95yiSybL5a6TAjNSPq36GQMqLYuavDCW28PVNPVd3TK83XXTRpV7Vt1ZoXUzKDJnQypyMbAeWX",
  "key6": "3azLLyHhC99PoLpM9b6bMn5NxAQbZhCteTJtv3WJy9ytMr5Daq5Ud9iZpmx1oo4hZrtheGa8vPUC5kMZuQ28FspF",
  "key7": "4AXySabbMRD2JNRM8b2VqmDdcuwji36DdyZaVTPWF8BZHC34xss79qvuhqp68DZA54tuXcRiH9FPVX1jNFmQbHxK",
  "key8": "MMT5PCnjV2GQNoKFugZMX1jQjNmM5sDvfKkdo2Xnjc3E2AvfY7bb7XXyg36cnMmWxZSiDyRi3fqKedqCrzaQ96s",
  "key9": "u5fQfbtWMiDwcNauhq7HHxYPCQxx7mi154JDYXK6dMM7B3mMmvEYguLJ4nsbnHNbMJXKumkqyQoAKidgygdKcFZ",
  "key10": "2BL2K39fVJMwaNmq16ALk1xJfjST28hShTme7Yk7qZdMbxA4TDz2pUxEUdej81RRDKwocK4F2xLGiTYCbEHGkT6f",
  "key11": "5CyeDM5aA3ScbtVRQAWpwcqGkifRKmPbcysdNKgVdmJhKLMp42F8CEdSnWBtmjv6SBEWLE7xJD2MNSCv7CXcfqm9",
  "key12": "3g3MMgMtDv8LCx9YoBQ5UGQAK58HUFZQ3RaPXeQWUjhHK5dPNGQQLXSMHv3c7ZXYXCWu2Kt5wLTt1WAsC643FY1x",
  "key13": "4F2fPxZCtUiN4G1nmbDz3ej6bR7azGDwPvMWJzorPVmFY7pzmak2cNGcbtpUStP3KSDHkegQ97veHZyFfau3XeWa",
  "key14": "2VWo7FRy2fFcg4tiWvbJrLJLqyiWJJCVenuY36tgTNtUR9exvxPheWHPjc68Tw51XEAhMvfSjNSmc3FitF7ckPEW",
  "key15": "4VDj2RXrRAHG4NRn12wLzW2967iWjs3Rck9ZcJABJDKmcX8f7HV8ZCsCNBxs241EQzdAjaXjEoPp73X78YqgAu7K",
  "key16": "66oFMWZjKAuWG6aGuEP7yMrByUJSoah1bdmdf2jwCc59HAsZXsTNgr3rSPfAGEPTENjzawdjKkSptT2aJNAJWoWt",
  "key17": "4AD3DhRyd2ztuYFJxFuYj6dS9ARuVjaLprBo1qB3KRw64BQZPs2rFkRyeZhi7KNpFUNtYoFezAq6EWrbZcniYGho",
  "key18": "3WHKWLhU7bQH8EFrJ8awbEVaW3DDyEJC3MyihmbrNcjAAtJSM6FYj64QBj5zxmRzpCfwHHyoQDK41gFHd239Rg6U",
  "key19": "3zpXHnvrFFvZfRd8GQh8LVWpttJ4pDscpNajT9qNuPe2oeFdfqnJ7XZhqq8dqJTEfTxZsBfwt3Y5MBV9U16TcBqf",
  "key20": "44AvAKFxrRLY33WYRHkfWVEd9YFTBD9419sf126V5usDQTLJee6TJBV2xTQ5NfYowQFgAU9w2LW8iRq5bLeJCy9",
  "key21": "hWpTzx2RhfH7yk7AEKY9Geyu8i5P9AArHfjwwhXdDJo7GV3cBGo5Jq7eeS2vK8U952u9z5wcL42RGvPqXKEGsTK",
  "key22": "67GAJmUDaH8DT1gtcLm1NTBMj9QXzHnkrAtPGCzrQaxKXeLR5RPpPZMm22Wr4d85JAFsPzet7YBNmzQuBq37LGPJ",
  "key23": "5aBC6LdePAFYeBAvBkC2DA9ZCg2wh8rhJ3fU6nKwinHSy2nrYHvAimPZs5argXidsAfbWXgjYC9wuiVt5pjqK5p8",
  "key24": "2JgW5wTmVkGnpFpcv5MoP9MjiL2Rs34LDAGWTdZDD2K7UeNqoeEqb7dw8wnfxdNTfZTNpJ5feFNWMaZC75YookYQ",
  "key25": "5FGgACU5WzTY7LtM8YMJjo13UfHoYUUXcsXLPyp7E8w1S5P1PNq7AMDoCNWyx2a1PejtVcWKhjgHdzjbLmV6kuU1",
  "key26": "5eMUfzf3NEoCkPTb3mxTUuX11xrp1oSsfgNay38bJzbH1pUGdYwj8vf2in85iAhuAx1he1zJXXwsa9eARzKUMrZL",
  "key27": "3dWLPDbPDJJgYFtU2V9om82CDWqJnx2kgEnfuGy6BieZwsDG3Xu9NgBQNWMKdBYkn6gvSQtoXJn4GXPxioz6GzmR",
  "key28": "2pAo8FsXRAitvzXozzMn85tRvmuU7AJA313dqjW2enUTXmMC6yHZ2hdBBfuBL9vcGydmCtZX58PTWz8hh2woeRfV"
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
