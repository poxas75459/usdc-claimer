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
    "47GKtdfU6L8BvNad2kLt7g4BDaq3isetjjVN5ueMAqsXvcA6CkuayQ3YqnkfGVY1nEgE6iWiKg9cHKdKA7KzzCZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCNyTokhYXuXVPbQjnHm4Vidp5JaFb5xiYZ49zcH1B3Y8rdRZeoxNLK8rXDzmvuDSv7jzwgX7EqNBkAUGo9ywLg",
  "key1": "5hhj4vk5gucw9zsFAP9FU2BLdNyLr1dwAvvfmgwnsQT1e5Sn2buCwHXBaMQVyoGZXT6Bk8wS2gzyxfpXHsgEqYE1",
  "key2": "4LS1nMpVeZurhKG7Y3h7Zwy8j8qM8922QTd66j2E891B8iPMk3S5amXGU6gvjXsBqXX3vVmvoWwQaVsebR1Ehp8x",
  "key3": "2kaLJV1mweGzqCbE1pmoukZLS39teQdkZLstzbHVEbiiYWkromRhRY5YvqmVZvaCCNK5A6ugGzyAyqZ5h8uoZwZc",
  "key4": "3hHF7mEcvRrrYN2ANcvqvXqaQEY9tXx5MViZTGnqJGwrAmRMzomyyNKwseS3attY31fsE7sziruFfrT4AmHLd4Gw",
  "key5": "5dRhz3t8WUMbUQUarBJK2Gucq16Lnvm2dgF1FeJoMbTXJhBsmGX1c4abx9Ebx653QpiggZaqYdr5ZSZry5JLLSYT",
  "key6": "kjpWADWiDxkLmFTjnHuGjojJJvDdt5TEcn9yvMfWPB7QtT3Fo5YfzEcotop8uWB2VQZrBty2R256QdFM2qdygUa",
  "key7": "5pKGqgh3cw2AB4Eibog1QAW4A4xM5A23DBjGiHTnmPcDp8pvK6mN5aSbqubEhKj4DaKd4Pa16vDefD2kxgGrnV4m",
  "key8": "4W2y8RS9cqPHciyoFXn8XmwLpg2bf3DfMvjyYYDb5TGTFcfbxzzxCMA6Jqzwunc7vvuUcEA5LnnphrgVybV9qTEY",
  "key9": "hTcLpHFrZJNuSseoG1ZXLZXMoyswzNjicTZpgxqAMJew7YyFTSgphVhto2wTfqsQ9E6C8ZxKzpcPtvv2EtJ9jrm",
  "key10": "5mNiEWZAA6NRW9wSBePvYoEsy3smZjtKduFntJGiJv2Ev7BAPqMggSrbHyqfGDbPRzfMf6tjLVt6Q1PHw6z6Z7Gn",
  "key11": "5zHds8qQ7rv52G6wZsTrkZKGog4hskQigJL9W25VajwSynjN8gd3Li9CNLA8a2eNRAHRT3Lv1c1HbPgEUXvP8zq9",
  "key12": "2Hur5Ehev4cCSrtzqjr3MwRfBHb51RWXDdXf693WdAdaptfgwzFZ4wQpbV1HLYnyK4Us1pX21Ek2F2edZWUh6Dfn",
  "key13": "3GntfMhe5DCL8UZHmLDf4gvMacSZ9TNzd7nVpYyXf6aBUwFtvUxCXVvA5PzQByyi4baWmfng4j6HRmd7qtYoQ12d",
  "key14": "65aQxzwJRtaoWeseaStj999zzhaM7Y6gViq4Ywdr3KeE19SrDje1Vvkd5a9E47GKxYE3t6nsewJ4ZwpJvCXDgRS6",
  "key15": "2oVChmqWKWEp2HHZASm225kLPkM21EnWwDTX9iT8cpbXApm5mk3f1krbmieeQZzTtgxtnDYMskMPHxUkFXqGUpJr",
  "key16": "4RNv6V2LoecMes6eCAEttV4NFqr7b8AjY5ozdn87RP6ms9mC1KdAjA9xWv6Vzg4rYAHMnVNdk9ckthuqwAv7iJ7C",
  "key17": "2PKX6uRLnrDj6hRSMbsFWzdxdoKz23Q91LLT2JRsQySEkEeAY5KwuP1skMJ3EqETSwEGKqxN2E8Th3UyUTWzuG3T",
  "key18": "2rh1V2S8dzUf8TPAyHXobd29cZ2EJhmm82nZ49VUzBrkpitrikfeQYSdPgKke814Jnme8rL5DnxDTHQsREF1TdtH",
  "key19": "5nYa39zqkj6M377ughs1TB4ezUcyLt5tSYZiNGuBVj1NwuqVHZSyexqURVy7ADr3P4v7HUWYn4jD7Kfyfk37Cw5g",
  "key20": "rprbUMeMhuommoKMNVGvYHSV2LBs1j9eAeL89XhAvySqoEPSorLQ4JeD7Ymts1FYkuHmhLtZXUkzAe6zjBHMfWE",
  "key21": "5GM9khAmeiJhPSJVCFAJRd6H4h9XFJs3kZJLw4guc3SU32NwUfbyAxptvJwBKJeE78AbYpXtFHmH5e5Gf796Ws7y",
  "key22": "5oChkyJfc1XkRf1FqbkQapa3LMn4rkEkFbMBKUZZkzkgSHGzrDRUQhxuGVE2KNVMDFnC6nJTa6PQjcTp9EhqxTwV",
  "key23": "3CiGuTBuYkX1vbP6P9Avm9tWg14D8XrzDUhvMjLVjxFVBdxtxpBds3GjTTd8Vf9RBiVW9FybezSuPG8YKdch3CEM",
  "key24": "41wgCz4cHnLiZ6au8TthJXU6bbhrQQEpyS6oZeE4pWxKA1aXRytU7kU87RmMskpyVG2XcednWGptwVVyRaZikez3",
  "key25": "3KNkxMwozi5Z5TkcHe6KZy7n4QxAzKRHVHJgDkHsChTpnf6GdmFA1CY9ukcz8ALzkHPXwM9h5KZuWzknCVgBcJhX",
  "key26": "37vweeyfGTfFR4uAGgHgLSMdcE6No42pUNpQB4dZLWXRfQjwJHX927BzAba5ALrDiKkxCyJy8qQCY2radSmKwyV3",
  "key27": "2sjjm5QBTucS9fkouYnW7M1y3Ew3enKPfMbUcTPZV64n9YonoB2U5gaYdvmPEMHyxGtjiRCGEiiQ65pZQbRoNuje",
  "key28": "413U9zLPSEZaRx8GzXWi8BEV9mLCxUyeqVsaVWbbrqomZRKdAz5nhVtG8kfSiEgZYWrPCJ3b5uL8bybekKLNWa7e",
  "key29": "4u38KcjPKr1eVDDi8uCjUnXjdwntSB1rvsMfjY3KiF7rsxAVv6Yrz65SBwTFLUYzVbwL93tf97ckc1vmGLCGsv6k",
  "key30": "5L9wGtJ1fHmktW7re8JtQ8KEwtAy5XqywEM3NwNEPUe9DUhaBxnRVA7Cdp7eNqmHMN2V1oAhqGU41u1KPSJmvxwJ",
  "key31": "V6um9jRyrWJVhrVEwCQaBgTGM2CGuiVdF7DTWMTRP7793CksVxG2QCdQ8Fr7gmDapdN7LJnSTvjuYtyagj5yNco",
  "key32": "3M5Zphpg2uyzPZRFV4dEXRgkZXuHpALnz1p6Vi2ZKf33PL6LzGhGr9eNytYuZv7FTcahAdDSM1zEFQX7PtBhEiPR",
  "key33": "5j1EXKsH33sUidrKMemnDK74ERR4KggknJiUzSKsrgur2htg5iYtgJLMiSzYPxEQ6LNPTsDF4uaVZ1qy8ozQHyVJ",
  "key34": "5jbCPytgJZv8jh4H3fW1WpzETauhq2DkiN1sV2jWGSPWF56t4p7ovHyKBQmxuHChszrYXFgiCYy2kMXhtrsvT6uv",
  "key35": "43HLXWEiwKKvEPS5NxuTZBDjDfPwvn8uVbVSuGs8B7fFQYaqVSx7kLeRDmPp3L1FG7qiuMKk8GH4aaAKRsUnqsfd",
  "key36": "CZokhSaDec3VCoxjPKh3wbZoARZ65EQwFk2884E9bNbEdnZYTQWPip6Ky7j6U7izEbiXGTRRgaGnfy3uigpye3U",
  "key37": "2HCRYt7z2EJu3JHnyWLwG6B4wCMjGv2Zjt926iFArDMQcNq3GFashnRsfkZfbBfJ8TKQ4FGVHh2qkdVPXreAzwbC",
  "key38": "3ewCN7HCspMjxy5y5hTFhoKp38jtrt8nCT1WUqgddpE1j9eLmMSyhc282FsR89ch1fdwciW22zCscYEzrNYQPhQy",
  "key39": "SQ7chKedNxskRzAZY9t5JFsUgYGf2haxMMait6FArFJykYjNT8WzUymEX6URJuXCoy5pBANjusXrcT3Bzpw8bUs",
  "key40": "tLrKtNa8geV4Fwp8czVJoGt3PW1XXSU2LqSBBWBWrUnAFNahNkQX3wFYkmpejzUudyG24mWieNftj7TaxStHHuj",
  "key41": "4eYkvJyBG41kDTdZVnpbUptoeEkTFWR4fYspaLBbFZLBAHUPeYuHA6EMpXtjCFgHdCwBQCZAMQ66JYmbu8E9VPez",
  "key42": "5vuYpkbywJ5a6t74Xk3VuxRZ6ghQD91WqLPxTGMiXCEF1wHhDpD4A76yiFrQBfHXRGRG3NozE9Dx1T8WBGoh78LA",
  "key43": "WSuMcLShEj4MdFgzm8qQDhDtUzkLDuNKjubidrZobQst1weMpSe2NBkoqgLKwYi1syscsmeVC4qxmwmea6UwHeW",
  "key44": "5mCqxHAGGAGaDNUZScXV9J7mr462ssymyabfhiBQZBY6tRycqtpc3MRZCUW7orZB7wdPGBXxVjqaMDLkzeaL68sR"
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
