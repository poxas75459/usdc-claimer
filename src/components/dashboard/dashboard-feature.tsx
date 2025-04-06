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
    "3FuErXiuqMP13gjsqPz5G5Uo27ohs4PumN6W6VJe1gtDkA2rF1vRNdSX3XYtZP8gSSjry2fsBtkVsA2y55SNQX7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBbvSF8NLkmGn3DC2PcRK3oVmdL4YR7Ha7hkfM2q5EFRBia2A1srmJw2phATY3U6MRZxTZMf3vEcdFsisqNrdT9",
  "key1": "41CLzfgpE9hepssjS1D1k44PjJoBC1afNswK9vuez8YPgj6Kb9S73UVEWp9RYratGoMgzrmK9B7eebNzCrdwBS6U",
  "key2": "2F1UqiDTGrTT7Pzy1RsjDAgGHKnjsxcgqG9EYZWpP97ET6A6u9KpVcyP7EKbSLUeTzhhVhL9Lo2GRi5jBeyJrihP",
  "key3": "27bLCrGNFb9CXRwBMYWCzgRkRFqFMFZyYFq5Q2sxE4WDxetnBXUbrg7ie3FwNNbM4kHgd7Yoqkaf9mZeaPxiQe6v",
  "key4": "5VgEtMBKiwyvgStKopvAcHWDNuR7a8mTzUTYstwr4ueHkM1AwTkki8gRnhpWwkDBN3EtBq84oueA64TXtxXfFi7p",
  "key5": "3H8YDpJKKXjgh5DMwfFbh1Gny4PCz1zpVm6REX6fgiQD3djmcBw2YvDzuWtu8WoY9xPBTRiTu8bQYkh37R3J1gXe",
  "key6": "3RPSBpfMg1kVEYAAW2g4kvTnjPF6f9frKAsHCwH3wzgx4HzgiPDg7wnT9AZBbQLr31f1EaB7cLc7k9TFT5KEST4S",
  "key7": "5JQXF2ViM4xZ31Sf4ZyqhnXnxdxZTUVhQHf8qodHE7s9KfeAiQtDtjLuiDX9pNDA7svw9v2SFaPr8tFhWAmsfGLh",
  "key8": "5mhkg6WJFP1rMeBSfjvNiaeHLefTRtPLobp18wTWNAVsr6hYx37fdZ5FB2rwy4iup1b8HjkimmmVVYEs5gv5E6ru",
  "key9": "561uLb5pRyZdNB2eH2XqH7Nkj1J8C98jzCuMF48NdJGLHM4cQY4wHchnKnKgKv3y9tXjSZCMfmds5irUjQrQSPga",
  "key10": "PzH5AGQpR1Q2Gh6zEEogMfYtramXDR6FDotkctfy153HGTGXhgKgHuzSRTW5rXPT5fmSsg1G7c1cyfcTfAnKc36",
  "key11": "2FHJ99AZiknyeoF9UGAb9xeYPBpydDqs7pngegxojpnVMfTKD7sj4V75uAh95gKenyZhXRaG6YTMEmPgoEXHYCLE",
  "key12": "5boULcsQJ4yqhFiidATTCrzr56Qp3i6gARJZ1L4fZjEhXgSq4ZuN5SW6WcnHnWV85pdWjSmpaQy5Es2TxG1Z4QZE",
  "key13": "3MYeBQ3BW9thXLozj5LaeSQ7ZgES6CuiLAPc2EXiJqNmJnLkqja3RaGaycT1LFdTq24nLahrLAiM1tFTnnwk5CiN",
  "key14": "5SCUQhZSK37W7zFNAp9swwobkcU1KHEJQiK1X6xvnNNQjnGg4GxJYdEsoyLFpWymd5Eh8iJf8XGmcs6F4zNBB4j",
  "key15": "4LvHs6JPBfVV6zbWRChENjeafESScGcxMK7x4kcPCFQtfaRZ7mY4JE2TDmDAgfyfzuBScgVoMbcEgxrWKHKKSodR",
  "key16": "5YibzriQF4oA62WpTR2xbP3jt1GhAVQmWYYKw4PrTZqjyQtGdQDtQRrGgJU53wWJA7AekiFWXUiL2viXw3Wxy8tP",
  "key17": "5JvWDMnZn9ysfMLGCyQT1f7sLot8NG2vxxgjmPYTGRv9pX5jh4ryqN7WHg8ceTRCSWMu1sKDBTHA2AvVY1XqnnAN",
  "key18": "oaB6NLTdpCCMLeEcfTmGSAcK4vFKbUEigeq3YGpXoEdVUqkYgQMUwGGAvPAwZj8AWoBa3Fz7qS5ZgT9VA2oUcFj",
  "key19": "322eWfjYvtYQdGExmX6xvETDHqgm6gSsfZcyDNtYSZWZriaJMWqekgmzYYR8QX6Fgj4DrJLp3NgqnmKu5ZnbSSBK",
  "key20": "4Jn4RqDxTg1nbHvBR3DEBFRNPy8KGQGAA7srJXHfLRgKofqCzTW9hMVZDkrY7LLRhuEn4RAix7zrp3wZWQuHE6Ud",
  "key21": "2v5yiVJgBGjNTXujANCEj2ijKrr1f1D9PPzmNbsAguU6YrgoKAzqNsfGRBiWgL55C9KuuVV2KUrSXi13WB8Y5nZF",
  "key22": "4Y6JPgjywx2rDfxD8QD1etbukge8BD7atFgAhbEkAmH1Ye3LXQ7MjR1v4LeabXx6JBp3JDZEZ8FagYgtsXVx2sJ3",
  "key23": "3ifjPcJTRvAv5KjaftasS27f3TyuBLGZz5V72RqZ17tVbMKF8DtsqoymESHbL4yyYKstNd2MHU9YLewAwo2baDfy",
  "key24": "1T49aHRJasqjvzY8E4B7Bc8hJntzi5f813FpMcokfeYgh9yYeV5N98kdbR8WEr5NHA5seD8pDWJ93yynvNUYw3N",
  "key25": "QE5DR93Hen9SWF5m252sYsECq1uGo9XagskFdHaD4u1UUv7CE3236WTvDLyD8fRa2DTNKRSrVhjxnT3G9YoDwWA",
  "key26": "5ydFVve2b9vXGMN3kat6qUCNznT9p3jVhcHtUmPPcxnRp3ve4hKpxcH8KMS4HBcpZabWxAS1rZZrhv9EzNRPjsDC",
  "key27": "5irwUfNXWAsDPB2qMGZYHFqDa2s8fpb3b7HpkHPZgLgAqfrg3VJGYuQkw7qcae8B4yxc3iz9FuswR8cbrRVjvQga",
  "key28": "2TEZRsmeCiasjQssLrAegJUR5tpF1WdFy9MPW3nrw2ouZkskTSdvor4ZFZfSoZPUmBVk5EGTUD6WM5Azuka9ea4b",
  "key29": "22RX99g624oXwDbAWNtM1RuwGQE8Nm6UbweeJJymUEP6jkVRcG8iE3NMCz6pemMCktA29zo1FkYv2Gd6g5TpbgSq",
  "key30": "25VZTGc5mGj3hYwHbR4m6py51bJq1UntGD4p3n6XH12VEDQPUshXFLBREFfy6uSHQ5APJc363E8T5oKaGndXwx26",
  "key31": "2uu1XxAqfaaHGCEzDbdF7AUXUrKuri9nmWGWFcHqESXtJK1PFzHHRY8LWmdQJjtrHJHTJhJjHN9wn1iG2wvALrXa",
  "key32": "2AcGsE4SWLSqxbNfNpd7BH7yegQDU1PHwmr5tgxRkizAHgL1yq3TVkNZPTEUTLJBrsAvKQtxbMHmXtrhs5JQwJ9c",
  "key33": "5EXSGW1DCZX8NtVocwsxSusrzmkW8VdxKbtb1FDEU9WsuYi8EangswwkBP8DWknzRbyGPJq4DBANKxCC1yWDzHSL",
  "key34": "2AtuXRtuEmSZEzhgD8eczz9wARBNPWfKtMRFxncxKu9ytXPCbqL1CjYNaKk4YxhGRYKd1eLaHKC3wbDtsuG5imLg",
  "key35": "2Ew3fCrHktVjcZG2idX8p2Q4txZ7NpLM2yxzSBuTni4kFqPq1jBgseTxAxBjbptu4JTxe1UE7HowwGYyddYQhLdt",
  "key36": "4hFU7TWt7MjU8gL3nDsbqW9qRkXjvU5cjjKfyEd76ycsQqeyA9n57EDVE8PnhoHoTd6FYgJDawvgZogk9X1R1SvU",
  "key37": "53Sen4BNG9TbT8LiqpzYGBTu9mfS5euMe6jPyhVG3A5C4ZXxtXkE9gAqkQWbbPfENsY7rnH67yCEbRrfDyYmQeom",
  "key38": "5WdL3NMA3NCd1AGEfzwRPBUT9DmkoXC1srzVJPBrhdU2EmiiZ491ZGWukeC3UqLiN9pJQgzf53rkGKzLvkoAhLZm",
  "key39": "5rAmgT6y84HhNKzQmWPk7X7HH9FCzTX1GmYm82hFYZ14aJ5eKGme1fXxN2jGXRMjNWj9VJ7u3jVHTCX54A6XJDLZ",
  "key40": "2CyHzCamM7PfZEeqZPifxg4q7C8HYtTexFSARYqm8N2YsVaYAwtxSd4yJPFzibFhMkk5FMcRVUQXuex9sqYt8DZN",
  "key41": "2j26nWEYeZ9cKmmJYnpzXNvNa3YQZ9SB5enC74Xf2F3v5iqw3e19TPUy47qvt6YVeBbjk4NDnfpVa8xgSeKxMeor",
  "key42": "5mkseRn7nP9wEWwAv8wX9mGcN64fZtGEv9o8vMN97gTYCWymYqpU79pbykj787ghu3wwYubk1ucD49gMoA7Jvvzt",
  "key43": "36fbBqm2s7YNA57xn56HuftyL631nmixGcAQb82MxHU1ZbZZQZHGCpJYwKEcRgoVPbZTdprghh8SfB9L9YA4J4iU",
  "key44": "sF4APhovw8o4ECsgsERZSbzs9PKJTxrapcYFi3CpT3RAGagaJcEi3ogWXAuw51G3GbpXV1pokdZHzAgkvgwuWPA",
  "key45": "5fRa433Fmr9beqpuwqMAJ3k8MMjbUWktKqwsycPhUtqFR4n2Eo2HomUcYrG65MgUiYKyAkna8anif5GVJ87sqdEH",
  "key46": "2AzykTGYGxAcBfNkaGGVTq4BXQoDmGit9u5whq5KK47Bvbxzn5zMrUBYWmvKPQvjM3GPvP97WzjtAuvN4BpqvqMH",
  "key47": "5PTLdHBs7AcJSVyEFuuCawzn6EojYq862sPzJc8Akx3ur86MnxCcUsBmu3t5Acs3ary7AS3rNuWmxq8fTvcNg5kA"
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
