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
    "4FpsipT76VantJRKcSMukFQQitWUQPWM6mLh3fyoKLxkUj1FkeThWVRhD12q9TpattyJNtH3eHsRgHyekXVJXkJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TJXzC85yViUwAzppZ68eMLNmiz7EQGJUzySKqYymbphUiLgfHGfs844NY3jcRJQa8jkC9Sj5xqB4qms86moik2j",
  "key1": "3QHCSUzio2pppginqRR7it3KDtS68jdzHBAsAmuNv87jWyNF9irg5usb8WfNoDiUmZyE8Wx6453RkN5UwTpbNEdg",
  "key2": "4qdmWrbcXrL6yXCzXmFExhodcf9oekzYWNcJEgQtpmuNoB6oWmmbAVmuN7FxEr3xN8duU4aWwBTZMzbUzBupfp3A",
  "key3": "67kbmEmUzVJfSsjSKEanZaXSy4yFRvwXri2sYxhPdHfTNTuYjEgSLo9PmHe5tmq622su9FEriFf4PavKaveS8dBT",
  "key4": "4DuGQfVSSLkdkFUDyZTh5Y4SDwJvD4xodiXpqCPhKpmKjxRLFfz1TRjPB5ELJwwyeBYQsDJNsAXDbXtxSzaPCh7Y",
  "key5": "5eDh5E9Ut8k9ULCRm7bc7F4mn1abFY168QMGEJ3sn6b2NFYtvmon4PuLb3dwQMeNmj2FJpyyd7r4LNEMXApmLcDT",
  "key6": "5VAxQ9NkWuEaxvdEqh3kVxJomUsUByfRBMjEuAEmcrGcXsYRYRCcR4SpfbergHBr8MchhZeda8Z5giBvhJXin2wD",
  "key7": "5T1TdmxHfmr5nXgZT2sKkodYxKiQppVxKp643YV44VVbsgqF2s9NUMu4ATP7ueowLBLr4EWYuiZNpdaKZvoMKbrT",
  "key8": "4bUh9RpeJiDzNtDDZygWWFfF8nhXeGJ5MZ7Ts6vSqUTLKjsBPt4bQD4A36x7wtAwMT3SzQrqVzTA1ZJrpXzWP9dk",
  "key9": "99amo6D2YStHVHYz7uUNVHdKe8HWNYZzqqmi6qaE7oYSJy9tBSd6BbNAZbpCsQY3cMRZ7sx8Nc8ymQ3LiBmzT2y",
  "key10": "3ZRBQp3yYncuYEFLQqTFdamDrrW7wD6mTgE6TZZ6pSpZtEToqBJL3S2sKQNvoC8567NAzfLZEDoSxL3eW1XvPPsW",
  "key11": "3gReLcu1VDTSHZ8jpecps5Ehac1HTVG6UM4HydZEuwVPTcK8QucxURogLDcdb5WxHgwzdg4phdn6BoCKtRJp1Ak6",
  "key12": "4KciWDRKmMSCghoE8RHE5nAWeEQQfbMrHsm6bKKKBhW3eTBAFpMzJ4tHTzJxqC1G8csdryje53ji4mF7tbBXvTyw",
  "key13": "4nkGjhsM74qLhs1EXjnLqdSYTrDGWp22rFcdnPVH5rTd8PpAXWZJknhNZ37wTFfDmN98pYxALwSP4L4gTJRTQm2n",
  "key14": "uEZWr3J1igVSefgGNVqkGEumpzSpdTEv3SuaWHVMh33WGToCnpHkJFFAUgAqjWBaYZPJAhKzmsCy21GZbFkvvDr",
  "key15": "5rdS7aem73AJcHLXkv3LRurTzTq8TtvjvmDu9PFvxbtyVXMxmkDov2X9BNybYJ8dfoHvZhZ4D1QaJAQyvwbJysx5",
  "key16": "5aizmQdwaEWSqME4QwnTByxL66mHw1f3E2676hLkHkfR11XBYBK8pPVzgQXRan9E9GdDT9kMV9XrXzTWCynbWh64",
  "key17": "3bGDbPiMx8w2zV423XhyP77knmr2agdYCnZgEbhw3NqLC3pVxqAJjzc4uKJdhonrLPdoabGTGrMjwUS2LwuZ3uZk",
  "key18": "3BYpjUbC815wwZUN24HDk9hegDTCC7baxdzSRok5i5MrjFuxmH8pFZqTqJJwRi2yoTxvDnHwWk7j8FhCtKCixe86",
  "key19": "NwFTMwAcJHiXLAbxKcc4MfrvWsiP3tpuGbUafWw9UUbMKdfxNwWS6ckkFJA1XoTedLCQEz5hy7WRMR9LVS1TWch",
  "key20": "38U8SUDpfW1LBCZ8LDqXHkTAmMVSUuoUvh2mbAcba3RRpfTZKusuXaN8GnXDyshDrSCpPwRtKUAGZMdSFfaFgsRr",
  "key21": "vyGwycSKcDhuHd2CHWBvPNu9G4PtmduTSRfJAS8cxV5D6gf7qeULefpA3ZriBtxhdx2oe7r1nzqZBmCCrn43ru7",
  "key22": "rJXnAaNNC5sfahMZwpWwJTaDGVC5hdZf96U2wwBqi4oDxrwcX8vsGVSe4WChgrLCLpJkWgHGJJHMehdNVfKJVUY",
  "key23": "3gFmujmhdJM6x1oXMuZ3JaB7RzPZ88DMzoy2y9Wc41pqZ5dxSirygu8aCpHT7D2Ga2xjLp2drBBVfvjjmjy7Bw6r",
  "key24": "33Rrxz2deNyxsXpNatYeRCeLCh9UhMsurwqS8yUtgRdMwKuDgPTuoDPQBo3CHbHen8tKpAwGniXSpauJseZ6b5XV",
  "key25": "4aNzDhmxaW94hRWmwDsmun34AxCRvBbUEd96aqFYBzmm6LLeJ9jLrm3cDpHPoU8rbsuXvfbZ5Z9CC6nSWaKdxKAH",
  "key26": "2ZdBWheEA9MLjWoufBK1xNQTxMpKYdbrSd7Mx7952vc1hsP84Ry6zVyTfEo6CZDbKos1ZjJjg9tBGuRkSs7ew3Lu",
  "key27": "khT4gtAFE1WarCk4CggtY4RXTsjaUTV2Cs5TitEExKLSnoNoBNRxCbQ8g1KkQZjrCaRckanqG4ToMHcc4vsiQYA",
  "key28": "3hUxYCgVGG1hSCPx2RstA9bQuCiKzdZz8iZ6YuZw6914g1E3NxG5SKp7s8GoX2FCAR6VyQUpGagojgkZUmoyWcaL",
  "key29": "3FcZXB6QJmRjWZCvBg7nFvqhyijsZd47nE4vDzfvv5RhYsFU4F7S88yUQr9TSUugLxFEFicuxHpRNYCHaDBxLgQJ"
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
