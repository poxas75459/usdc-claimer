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
    "4T4dQXVHgxiTvCCQsCNFTTrpmFv68Miw11Pw1CPc57YtcNpwY64YjpgeEdhPdnMuSU6t8wu4Kq9TKdZaf9CLAJ1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zAqAMweriki5iY89F6728ckr2UcbDz5JmtwQdom5xK5BkyFVMwNLVvCA2hwMCaW5Hathdqdtq1hLPeeXRMYxCW",
  "key1": "3eagRjXHueyy6XRiT6mC8SaFQYTzi6PUPFZ4J6vDLAwCrSRU9xeZMbccQTvPL8enx3KAFzprxCTR5Ai662CDUVuF",
  "key2": "oRqbwqtSBnN689tkE5qegGx7Ag1LRcz4iqXXif1cR1qpA2JTaeiE41PfquRd9WTQiTcGXqx1oyp8ANUc7a9kCuk",
  "key3": "iCQyVQGuEti4XzcRMmY6QYd1AgbEHmiCHWiXAgRoSaFHhHuECuncqEJusUyjaA6QsiqcrejMrrfTKi4Dh2ZaZmV",
  "key4": "5KmQD4SQWWWufrHBJ5ijjGWnt2UCrZZhSoF4a6GcLJRJoJqhpGKDH9ZrnCthoyCeBNJvFVebt4eaBtmSd1W59ZFD",
  "key5": "2KYX5bFrvVEiaRGeWyz7jz7SF33qF6ZNoni6eUuKCbc3sW7D8hpeJxEurV2Uf99p8abqhFVcjosxsWeuZuzZk7Qa",
  "key6": "2EaxZRApHkpnby5bfGyEe3rCGFzNCqEaH7LXDM33fyjdDvR4QZwyjwT2Wd5mGe1PV4zJ3t7QAzozGW37MMaq9HZ5",
  "key7": "3iuP5RPntnJybf6chZDGFnR4JdsJcch2kcHZYEYrYxTsHUiJ7SNbC4QQ4aDaRkYkcSADYq2YodkH6Wfun3yDiXz4",
  "key8": "2UcriderfNaXj6wKxnvbF9749js824gSeXusRXHmgX5LpdZbD81bgXmw2D2h2hJn2whVdQ3LV3gNCgkJnXxrpEcM",
  "key9": "JWvEF2AHoPv7MbSjnBPoHpk8d1ZZwob8fnYpARsKoYvm5m3sohnqi7UM3DLczwYpVch6CWTbcRznDHszGCeB4Nk",
  "key10": "4HevZ41AFcTNY7v4N2M7JFMduPeDKMjrvmHcmQsS9W8nVhipATe1Q9mtBxvv77vRWxT9z7tXd8vNevrhnevWbsDV",
  "key11": "3yWJZrXD4co2tsi6eTEutXaZQdaKmmhcDncc8pDLV6sRVyurecKk5eXcErStc9ZDNBtYb5pxgDaM2jXd3ELEGiae",
  "key12": "2qhoaoUL5XB8fVRgqRE3d8ckgXVVRvRunDq5h5TtkgC4YyPSpaX5WMrFGWocVJUoJvzVWQ1z6sbcGzVYzTtYBUzS",
  "key13": "4ZTMHXACTNcw5ZTGKpjScLS8RKjKWYVZ6B1myeTe6hwViydqAQfYBFTgNHTEE1FxYyr1nNGUU7qSWwH9DqKr4fvw",
  "key14": "2xHdPNFJbcSDvKcNsEYsaCNnDsT5dXPppXDRU5mY1uUNjhuTuoxmGNdrFbHCH1gT2SdEUjmN4T7X775VEcdasKCZ",
  "key15": "24R32AcoKFjaGCzcEiKRwg6XVkBm9Pq9beus8ZFDpp4HBt1tXY6gUudzf4D9ANYssL4GDRCr7py6NEHqEsi2PbA9",
  "key16": "MFuzsHPyyTGA7t4LsGUE65xGcxcVzYZyejHm2MzSW6U2D64fPfjfKbBGP5CKSZqDH93SLHj17gQCqmkQyTbE6b7",
  "key17": "4Q5aBHX9fXmnLVAyi1Khrd1YVg6ZtWHGrpX47JK9fjpKyKy8oKtieMTix32W6PpjB5mJxLXAD1DBngZmccqpvU8X",
  "key18": "4bgEYQzHyZqewfzhu9QdrXj1VPbHkJRwRjdNoXohC44RFsxgKaCHRZJgC4dt9LvfoLgbsoCg2VeXsbwaDd8n5KRc",
  "key19": "4XETTMnv4ZGbpPTPucPT2uqJc8rRXaqqXe1zsZghyGQUqaq2EVS2YYA3NeA31ppoCy1kz7bMxHnZnU2R1V18Bb2C",
  "key20": "4z1HkCsMRVGugPaUNh9RHY31YPm8Ln71zk7QksAUGojt6YtVbkNuzJ92S4ZYmiCYq8qpiuQeQKkbCxQxgwRifg7K",
  "key21": "37vrRpzzj7N4Ujy7PWhPYDFqkMyGDZgWkXAfs4JQLwiREyoBdFmuX3znVKFtdBjaVJMUgy9McUwrDQv75c7yyRbd",
  "key22": "2CpEwZ6y4evqCTg9twxGDTBJztWyZWJuohJHWMs4R8fPAcUMrowJnhTXhss4xLD5Y81E9KaybxvzVYwTxVpMK5AW",
  "key23": "5YSTMd2rVqXzRP7KEuSGXHoAKhetwjazVcGbd4DmBZdeHU84xjyLpNf6ysks6koukbzmL52fkGGRxFKK3KFrp4xf",
  "key24": "4F6ZZyC2etmrcLnaQobd4ZxvbHziLMvoQbtxnMrwHWSwFLqHvaFaepDVbhQLZGsCqnYSnQzHJxG3RJDzk1pPavNR",
  "key25": "VPY6cBpM6Mc3FAmKqD7zxWkr1boStxQjbQkKmVbW7yaUivf3HZvANv1XwXC93pFFXmXj7ArmUKcb8tHsMKZSjBU",
  "key26": "2WLGp4uRKVUSXZ4GDLdjjSV21C8o6WDENQcF1BLUJWdwJhaE5a1xufrHmm3Wi6o5y1Ea2Z2Gt1rnhH3GvrVzxzrn",
  "key27": "5bhmCq81UTu6vhpAJXmZrbi2WWXS3sVAkm1Jjx928z3tNcZMYsPujWy3TsLJkTRzHvFkQke6GZCDQD2NRgYL4VR1",
  "key28": "bCzQTeeAK14Kq4UoKhaA9GVhBvjyLxA3CpQUPiEDmz1MTg86cmAhcBFhykgsT1VgMvdfeTKZ7vshxVDyibpNPKL",
  "key29": "3RFuFCcpQwU2pbUU1KrwZyar79gey8ef4KdEgFDJq4pTEixDnHEvmLrJ9tBtKU5y9AcptmWC1tUFSKmHNsXmR9Hm",
  "key30": "2zxcnr4QqqLZP9zFzthm5rFFxHukUtLKbnSS8zTUhqtgyJRdGZJ545ruXnu3dYthRxBDiU7pUGxLAjcdZuNBwHog",
  "key31": "5hgTBizXMg9YbtD45TfJamniiDe5X3P7U41U89q5AzzSu6dGbpevKgVZVmUA7crrAgXueVwrjKxQDdxn9A8LWzG6",
  "key32": "3QHFhmhTe5HavyeaVuhu9pTmeduLcK3VaKe8mTWyyTMEHyPtfHHk9CNQchWwM6R9pvDf2uoYx51Gh1eddPUDkwcb",
  "key33": "4LA5f3V5zkNwrpNBwcoarUW5eDMnVowvSscozN8uRVMUm2aXc14iURaBS8BQmSPT3KuRBJfrMAE4CXGcXZETFW4e",
  "key34": "5EGSQJ712dB5fdxFL7Ws7vSQNk4TshKSnNtJ2MMDyMFYRvXJdxdLmnwSBrCCH8hZF6HsmawchPLsRM58tae3EKQW"
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
