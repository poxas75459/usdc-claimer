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
    "3SwfwECEvgiw8ED29Wpikzt8sBpm2qbED6FYhGpUYcnEEng6DZrwEMaWR7VpE7tpURzNwVgxapVCUk8MBngQK8Ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NzrUSqWq3sCwtPpCieAVQvHhMyVsNYxzpyDtkJW4xwG6AvG5eFHBy5yDkd8sdh7v9kto6iNkSoFdjTmbssUDGsw",
  "key1": "2WQsn19dY4ZiNhfEFpGAEfdRpkUEj6CbYwATtV1bLE5XXhPS1yTH4tJuaHPrXWkaTKHWbkoWeUbG9wrAEMYoGHB",
  "key2": "4A37ps77PUcjeLBsLv4yjdiprm6JpoWvbjBxqpcooYH8JTYDUb4GQiaaXLjHBSjBh1c7fNUWvgNM5QXViJ465Wzs",
  "key3": "36Pe9GYBhGeKrXZRSDSS9kfksTSNusZHMsnmQW7YHJpzk3SRA78fzqsqQw2HYJgctbjiLTH6e9sEvxngnqMBofea",
  "key4": "3JRqgwhokFyybuGCoK1t3sPLcmCxjtV53uwXr6etESWN3TJr6x6275Ai9x654V18e77bzbesJAzNh7hsLFTYhbDU",
  "key5": "3b5fJkUYjrrR2bDj5GWuGdvreTehnJ5AEHkN8AeuHEpqFEMEJQ47Ughe4NBFr9tfFFFetbjanSHs6YzYsPm9BKet",
  "key6": "3JbZGGu1rokB8JzdyJ2DZk7EvDZPeAgyMoZSX5qR6QSGyUH5Y4AYhHaC2vqL6rziY8oMLfEraCBuwoRDDpcuAJk7",
  "key7": "4s8SpryozhtxwNptwbPdmJuUQ7fyvDV2ADduExRbT8VcBfDwgiJrAvULhZr6XQFVcTUQXNzgWT2SmAL9dbQWx2nv",
  "key8": "5nC4n746WdThA3T7yqt9o1LN1z9uNrVMg3ef3TjZhBpKkYooAG8TkopZMLeH97ueJjj8JXZGATeVVMiRBGcKPGv6",
  "key9": "5zBv15srz3bYSbxp7U1494E6EgNshxP8ypzDhHEy9emERajRzTCJHAhWBJS4vUky6EQTaiaH4XBtEeE3inGS2e2B",
  "key10": "2zkEHNmtBrwGz8HnBzLsysyCEKHrWuoVGD9VNofgWRyaJzfHbCfn6ByJn1acvAVGwqP3KMEWG4Wx2QZLZu8mc8Ye",
  "key11": "2Y1zEZ26pZu81dNJxYyw21NX9Pbei2bkLbenRdegXKCATT1DMvzr73tWyQXaDigHen15mktZ1vb7uCBqNS5ZJQfH",
  "key12": "SFyVKku9rDLf6y5K2o9eLKmF7hiWTnWhF5c8wYpC4pWXV4jVhvPDUHkT12tQranUgDmWdWGXo3MfFSjwmkM29mK",
  "key13": "xtAEvb9EVr9AYN2KWiBJTFuW9roU3akZRLJEutXdkH2Wj9jhixf6UMpzrdztvZn6tguwH8fgKNP6JixzBTutBWh",
  "key14": "2WJbmPSUaXMnbyENSAwXdT8fWPXoqbSpFoBogE4g6PMFpKV1fpBQ9fVCKeALd9p1ZxDdwitvRqfF7TNB8V69fH7T",
  "key15": "594fQu4KGQaprQSrjwqqqoj5K6MiNyLXeYyyPLcUbMNgYBZeFfevpqDtzCCt2PytWYbmrVdimkA3ttccyVHtFDmH",
  "key16": "4VyWEeWsDzG9Bxi5rEfAXTiE7K6y2c4KURpHnSkchefot3bA46RW2R8wCMdggbYMKvn2DkCQxp5sCnYmYoXdSXpt",
  "key17": "31TnQpCnBbF7C4DkAqJZ4xsEioGFJcY2XSsDGc2mWiKheYktkj3uSGCv3B3sqLhHdQitbLgk8UqjiW8fjNeCw6dX",
  "key18": "aiBMGAWoEuXRHcxAhWFjKejC1rBVoaoecHYhUWq97JTBtunzgBgjawwjMri3i6pWh2hw3KUB59mUw1Y4v68kbQ5",
  "key19": "fPCYXWSgBeTxYFkyLrLmB4trisCpGs7ygnu33FfLw1bvKviANBi9MpSmZC1CePgAWwndAjTyhNkRedqunrZ692X",
  "key20": "2ApUubgTdkTcnerFfgmbPaZz6edbDqPQUECbDT8aYsxTtA4g4NvgjeYc4xmzLYaSd5uetXXPV8aZHY7oCj74AXy6",
  "key21": "2c5xH8eif5n66UdMxWvgnRJjKtKAraraqPY1cVngs6CuGgswCFXt8pjKRthN9eh2WShTbkK6zpDf85HNH4Nk3LTZ",
  "key22": "eQD4PmnRjr5fsZ6SGuaysEyMq3KNwcV7i9w8gPAdqD919Lcz4ifxeJvUgQgt1C6AxTiFVYqqRtMx5cFhKhy6Fxd",
  "key23": "4WNhnpr9AhBJ4hxKXcYAb6aRCAMaFyRMwBPcu5dwPnGZkFZEfTNcRnNVtDoK2caRjKUR43nNXsHFTtEuSF6eALAY",
  "key24": "61HrTRGW2yxZWR1LUHR9wBaE6qVnA7Feehtmfut5aTDcUsiMoaBZNNnPrfAhMWCSTX9FcAkMJgtmUJn6oLXGhzEP",
  "key25": "r1ucwYuCp5dTbcmUcEoeKmFiSoHLAPZCXYFo8wWuWD2A3ksaJnBeL4C1fQQtxm9vd4pPXaFYS8n4TCaZfT8pmy2",
  "key26": "56Ru5Z4uRSXcWH4j8zorsb7kk6N5W3yhD45b6tmJcnEQT2xX18uHa5U5bikz2BA3D7zK4vRra98tFe6mRe3rd8dv",
  "key27": "5p2cNt5keuxz6shCdcUfzYZwcwMNAAdZBHBYjVtLqrYEPRyEKhFanEbMjFwXVzPi9DTZxtBKHwoouwYDvYatKYX9",
  "key28": "xBECEurj66rMkVQ14KJ6W3Y4bTRZzKobYDNbfgw4m9NzHriEoUnJc6vgsZG8bU6kojAkoxGEjFHU4fYjLGFYyMZ",
  "key29": "4Y29oKbh6XH74inXjZ1Wcy87tD3oAZsoYV9cc2stAwnk3eaEcnpAkZAHH2oCskLQN1vAJ8r6WT7LLm2FZq7MCvsE",
  "key30": "4KQshsqBeeW5qF152GmTF25vYRSPBqsXNcoeBcokpv19qK5mJWau8ERcoFWjWtRHEmXuyiE9ZoXGCcT9KaNzApPA",
  "key31": "37wPKqgbGbjAfostH2rjiHnHWgid2Tb7mDu1U8rTVUwHL7YdfwwDSDcoQ9vafWaaK7hJBCRkXU1hqByZMziXPnYt",
  "key32": "2RLYEmnLTNuUjyZprQMmPqUeWLK2LfJhmaFdQsTNx2XUXzhkhoV3Dad8AZQJvj7uEefvYsZSsga8GXB6bDX6hbiM",
  "key33": "5oRdHbVGJK7MmVqrBD7nxUJiSLit7DQPddJ7B62qCZWQWtiGjjMCjYKkzsDL9HL5jDUYwbvyhkKREm7HszDzWjW2",
  "key34": "JPXe6V4eXSemQqQ3UonbUzSxyAJtbSNLu9PZeRBB93RJtE1E7eK8V8j11VB7MJRA8axqtWc8NiN4s6EQnsDVkvj",
  "key35": "45Uy4Dmr8mUemeZavczdsCypPmAMN8tSCHaTbsActwGkru8UAQTeMMce1pANVTp9nUwuhEs8H5PRyuYUwi5a1wiN",
  "key36": "4eZbmFDzTBzAPCfuSpzeSxqzzwqmDBH9EVmLpnDrezFrfYG9af2Q7ET2vDvjPxgR4qPgKTgnQXwpca82Pzi56v6g",
  "key37": "zsX3DzET8URNYyKWYm56pcG1cxGKTrmijipuJX2NcCdrfp6YekiPepCgAvi2tPdNQoui3C9kuWBQzXmCjP2BgSP",
  "key38": "2aCytoHyxetviHzMyCnzbujtZ91PbWDTbs4eFyhyTcPmkA832aroBD3Lz9VQaL562mXk3Jhh5SC7dXaP3pxm7LJW",
  "key39": "3ka9w7kQrKCaramqRGHVWi7t9FXfXcvzY7zxMKKHnGsnffrkw8jqPVZSjJnCM7rLr6KYbkxh5WyPRdmxHGDV64m7",
  "key40": "N5dsE5kLsi5nsizzKGCpdFD6kgpEShVQBUtDySWAYKJ1o4fiphAVJBYijYnZZ8hWoNnUvSF7xSjkANcATgbuAsN",
  "key41": "5hagR7EZ86GZPdHdzUxwVkX1dADhLjHswj931pgjPh4nAEfjycJPs5Hgm3QB32pbenkXQZq2Shc6PmRGNzJgqDww",
  "key42": "2YvvQ2R8rdzPPKG483pcE7ee11M9uk1iRMpBAsN8cBNVUaoMBiZiusesiaPBjHD6VWQqppDg4tiJ5nhii8Q9TJPk",
  "key43": "33rs2KnmY7PZWiEB6uYQgR8xw1px5vR5EL5JnEFecQ7bPtqVCsMZQC5LSeusLTjdppH1NsVecJRyss4fay5Vn1m7",
  "key44": "2i8YdTpvpggY4pai7Vp5dQSCCxcuGBECebt3WUAWWFcos4mV4fVWNgAACjen8fMp3PnrBgQ2TPzMtGCGjxrbrauN"
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
