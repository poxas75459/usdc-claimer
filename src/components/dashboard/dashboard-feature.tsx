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
    "3yxHKnzdTmENXJ1QQxcrXNod2t8Qb4M8ZugCHf1SrDCSV4CSudBpPWgHdrdeapcaLkruquvsZXEy6xb1rdY5pzCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f5svMysNXQhY4a7m3kuC47hguwXWBsyk2HUwD3qc3CKP9tFnauwea2fgTzaXZf4ka9k58eSqgzSqHbncevqNPJG",
  "key1": "4MaeFPFrnBHzgBLQnvz3tJ1kHsinoXdQQXF2Kmgcr1TXn7cyvy1VzeBuu5MvUPskximzhwWFP34TR8e3KNxWrpNq",
  "key2": "2dLKXmLav3FyDKRNr72ERwWaB2rkVSS93wKSPqPW5ui3DVYhahMz3KnUxVB2DNYM3Ui7KHCBSzDBUf17cXqTGfew",
  "key3": "62pdEqhMvaaba1esvnJ3j7iyQCU2oFbGxWDAzokgQsFHjQ7YSuCmeaGzbSjcRUq1nuiyo2vKAwSoTDJ8c8eqtQFp",
  "key4": "5tDzix7UEp4pyF1HiXgWjJTfMaSr45juDcLyx4G8ky7pYDHo9xbhMSdP7Zsv716UEKnLSYDVhFEAw4Mm1skNf1wy",
  "key5": "5RKKp7AKjpQHJePVkSkmaUruAHN3KduoADkUkW4UyGaJze6wt9AZSCY6UxSDS9px1cgFSukPbEexRv3axGBhhqjE",
  "key6": "P49Fz5FFbCkCtLQjgoDQbZLUEDPQEoUc2m5my5jZfFrDqUmBtbt8SRGveRxgNdQZMa2UCZmF13JgqDwoAurUc7B",
  "key7": "21JP1kmaafN5EsKzJ5FuefeBzxWVU1akSN7PykPE1kfkD8MKAsqudtaW9Psx1H7gGLfWunapH4eBFau2Q7d2KxUk",
  "key8": "TmtgpLd8iZjF65hTVLMbFUFu9zdmRhTjfL2AiMH3Fp7Y2XnA2UxhMxUDHowDsBT1vkusyUi8BQDmmaW8xuG8wLK",
  "key9": "3dhwqd149GGunaB8L2TWobcLEcZvMpwJtAwi2pPNygL7ohYgxqnLLf8kGuupASwWb4jA3s9vVCLGk3witGyG6h2q",
  "key10": "469xEwannhM6yDKqWZw72vV33b1c8frx6HxEd1ENvoomwny18bQ5QiqbzvG74zJMgCWub8fRyUHKZGVAADQV4HXn",
  "key11": "3fZWwgwbegJgvDsxwzEdXcT6Rk8foN3j4PLGkhbJALmSW7xAGHwBMUdu2m4u1pbYN76w1Hh9oxKQ4NCWDpx1XEsC",
  "key12": "2V7pggG4W5CrC5zDovzRPj9p5JhsqEcfKxrBRNff8F7Wi5Juq3GZhuSihf2Bwpijth57gT6DBReg7LS5NjcucWgZ",
  "key13": "624pRJ5wjh2PcXbNVaahCwpNyGxm2kxDGZiaSKLjYnhS4sgsibW1gJpwRDjxV5penhPi5jvcxpCnRAqPeVuuM6K5",
  "key14": "3xQjsxMd8LrQTm4F3jZ6RhVPdzgx5bSLegFb7qo1hs56zR4MFPGGgu1mf2v64joBLDsCo5kT5YN95LW4hapKB93q",
  "key15": "4darbh4yf7Sg2Ujn6X1eeervDDuZjmpVewrw2VNiPfbKz12D5GtvpZCEzZGosSWjE37saf6QT9SqoebpHuNuj5je",
  "key16": "7CTndCu5PtCD9LKDnFfq1St7VTMeRWaxTKb1pkj67T99F8YvYbbQqisjpXeZY1aAGV8TPv41h7NhCySkfj8bwbP",
  "key17": "63VwmT836KivFNBxF8GiFaEe8eQYbrqNhvkHJdvcUbyonGJLdE9tiYb3A3JKJ3NWmhdvFiPn3dgFw2SAWJ1D6ctQ",
  "key18": "2CyA9RQegyyN7gfFRDRPC1XW43j3fBq7R7gVa7SSGPW9AHq8C1dBKchUzaHfyXyrmBRpTxFr6x5mnMYR47nyJfYG",
  "key19": "4wD4e7KFEu34BFLk53uh2J71KAJYwctn5p53FE83uj7qjU2rZzkcFDk6Naa2j42ssfUWiDg4TjvLhiadGFLEYNDQ",
  "key20": "bUHMajcM7E1PBvw3oV4hWYKZz8qLq8JVWBhm1FFxCL8rys3ADgvaTZedPh5a9SG4AeJPVTDZSSFDCSgiqsKcu3Z",
  "key21": "45YTX4enRkxjcyEQEGu2R6vK3bF6tSk3UwbeQGwUxiUv89WUtqKUzHTkHSe2gzittcGNfFLy1PVQAfA3jQ5E87FP",
  "key22": "5nwpnMmGdiw7EDjxanwLYL7ohtGxU7ZZK2BN97oLUjuNCm6mKXqTDfHrBUjupkjNh3omDb6rj73b1sZR7JL1RYeG",
  "key23": "dqfSXW4M2UC1Z8bK6odxG51XDsAcwJPLZtuRGHtDpKTCwJVThhRn1wAYtmyQjFtegcCj3KHF19Vih4fC8R9tvJZ",
  "key24": "2gBuwB6NWfSCwbHxpTcriWRg6jA4eYvuutTQnic73d4M7PytaYmsPeBhUnSp1qcix51yZTME6MHrwPDErbLNYmwp",
  "key25": "wqZVvryBBLMgyuAzTVp1twZhbTvX6WseiSebMaqERgDb8aT9WEVcRaBc75n2qcwVHv7sqYgFPMzKxe42mnDfrST",
  "key26": "5y1FPtUMvka85f9CufFbvZbV7dV2KaKkajJ3CxEWxBAgnhW38cnyFtS9MVy8w3uacqVFvnf19CtE7emZ29S6o2Te",
  "key27": "21qd61xRwS9qZCCWxqmRLUNo4yW2GN8x5MDFodB9Eampkdy5JdjPFLweFBGjkx6Kss6uHPDKVXpepuCUZB81awUi",
  "key28": "3W5zKJgSFtfcD4cnHZABaibW8o8hstzpyq8TpiZiVQhDFc7Jd6FqsPHjEwsRUGHc3kXWRT8HojYJysuJpv2noAxX",
  "key29": "3HyTdjWF9hbD4akaiSUeNPyh4Xh4xVpmGB778DzSokmbuHrNgwMzL5SdX1yjXEWW2y29uDFKthuGdTTSGcCFGNKt",
  "key30": "4272sfoD5uC4r2FxpEXyWGNYazh57zr497LaFr9aHvEbtfq1K1cTPsSdfFUGxb8ysvvFeFX1J2Sp4wWavBPR4jSk",
  "key31": "5CtjNTQVdSTjkcCnqTU7y6qd2fycaZjYH5qmeKKBm4dxMW3k3i1ZMQk5m7vjXMBzrAFW8mYidj1GwZDDjpLtCFEz",
  "key32": "4HDbFbHhrm5keCABXz5jHj66L54C97dPzbmVu4uuUNMxeev8fyXVbnPMPtE9Eecy2qWXvuekCBuDHvFzWhT5WL4g",
  "key33": "5Rn3n81cAmAfRsooGajbDqqpx63WzQERufL7eLhkZADjXMC3CBi9Cdp7o7bouBrJrNi11sCYWo5JzBa3ASec5pHD",
  "key34": "21SMQt55pXt6QRcwqHPijviohDCda7owZMZVHSvXgU7q4cMCMCShYGcpGVAGhSEHrqkJuoGzrs1BAGWA4jQxNoFN",
  "key35": "vAzemYBa54qjNaX2C8m3wi3gyWZ2UYrQnMPUZRmhnZ9iXtu8C8hSXcGieXfrUSCLkQxSKSy6uxndamjRKNRLWaB",
  "key36": "2FodTq6jx5V66M27K6xJRT175gz5H5rbhZwSwBomUA4Bi9zVR2bzEV8ZbdMWdm2pbRwYG5NLj9PgyQ83DP7XRxCU",
  "key37": "4pcjWRCjDymSjxtJ41rLuuV68A8cT6dJUtbomCZ8tyFfNSmnA3P6J16Ar2trUY5GjwScuhv5bsQrkgUDzvZs8tTd",
  "key38": "5XQfBFamc1bSfbryP4qrtZnow5pTimLXd7i5LpYFYyDS4VXHmDurNHoZjvW5yp1EVPzRmYrxvh4odca1UYkbpxbQ"
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
