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
    "23GaEN9x9Hi3VgJxNmKTdqunU4rkyvGSbK8EKJqAMJXb31KN4ro6bhZxwhNi5W5zze6ADmDbMj666hBKaByk99Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5meN4erjwrJSF5P3zmwMjCv2eoZsyKK1rJBbFXaBeSBKDaPNFduB2T7rQVx9JCZnsNg4urCzgQkk4PocAhoR6xiv",
  "key1": "uGqppLABajCA4HPkFcN6h9qNzdX6WqAyuaqqKtR8h5iDBssfrudMk2M82dDnyQaoeDtbWPWUBRrV6q7njHAp1EF",
  "key2": "4WazJwVNsU4urmm9T95gkmLFP4Z2fdZDF3eCySVHZmYv9q8qJwskn6n64KqHrp6xmUS5xe8bmfwJj445PJRY2dBZ",
  "key3": "5Btcj94s6nsQ73T24ZVgbkyeVuW17QjVFfuaTsNUcYMrbmiGR6Dxqth4uN12RuX24WfLxn56ECoMdmpt5AziWtFx",
  "key4": "4xokkJ6Rm59oSx36o3JmxHZHhwbDik5JAviZ1Br3t77YFHETmYcPGeXb1JiNpxR5JEM25MWPoUdXsEt6BocvjFRL",
  "key5": "61D2YTFEHyW7Fo9R9GTWfdrz6KL8ZjFC8JfWNXaAt35ohqKorkvgxWKJYYZEjtVtaNwi1npxd6oVgetb16nFSDf4",
  "key6": "3t8SL1vDq7krSCNRs1ZHpopu9fMSuTsX1zEWbqGxLWfCu5wf1aLu4C6VrXC9pg3Zsr4LEi6tsX3PqJp6d1ZeYfwM",
  "key7": "5bwcJD9VFwpwDsFAWY2dBFRAgZPdQxob57AwAmnXXyTF1QoHdkoNdmcwJDcpYWCKfLCMRdduu9bHZxgMwdsoMCX8",
  "key8": "26YDyhnZ8NfkRxUqoukyxxDy4o3yyQmwmZvdaBMCQusTxYuktszNrncdSgxHDQVVHctNbfHwD7MvAuviwam9d1w4",
  "key9": "8DW1deeptZrsMqRgyMaFVqiMfGxua8d4Gc5Tp4uA6G4jAH92T6AmW8EhJPdboPSj7aReCS2bZpokEUmz3pAq4sQ",
  "key10": "3CvsQZLuCx2qS9yF4cy1mvBZjY5uDKK2NsPWKb7xJC453APxd1Uh7iHXLqd1FwB3BDu4pSoLcdi821xRGtwxapbc",
  "key11": "DnwhH2FrC5LmXgBcqZURoFcPEmAtCeS5mg3cJ7DpBZoAzXpG8xMvTmFeFeo7dZnCUcG8b93D1yLDbK3Gt3xxJGo",
  "key12": "4JQVGLWN6DViMavFg1zMfDtdXbiHd17Jkor3wnhkUvCEjB3GzPgNnNr5SG4hkZKaKqx35kUuBg3DTDnmsNVhbCMZ",
  "key13": "2BKc5Bq2QEdkPihsH3ZXSpUMA6YzYRAWz5VGnvei2W5HefqUaUrKHAYah3GG5Ngyuykvs9Sg3eStJ56ZwnVkYAvM",
  "key14": "5Aj7WHFyAdSPav3237ez189iRyWGLymZSNLSjLA4wrrbPiXWyqK51vyQVfiaH4PHhBPgf2wykvhGSmH3ByDE4c9q",
  "key15": "4yPyHJmbLsE8BsjNKo4AtrAqsCicot1vqT9qVbwEL5K3EFkG7YqChGSRRyCQbtiGzSCB9uq8AsnbshGWjj6S5vJH",
  "key16": "4nUY5VNqS9Uk7iaZL9nKcnyr9VDRSUBa93cUt6GKjkviNH9Zd4z2TcsVGJvM6hESk1R2A7E266qJBWk363dbKhY6",
  "key17": "3jNUGMc6nnwt8tU6kV2wWfBYZRsBNUdxk7dUE8TTe3UHgyVZRy2UX4xL46ttbqoGMbnpxdN3aWY9zK5GB4jPFUgL",
  "key18": "4c5XDfke7VgeRXZQQL29ce8n7zxfkxrMfGjYsUREnEjDRZX3KmXee7JwBE1Y1R9WEvGCdwxc8jkHiAf66GP8MRuw",
  "key19": "5ReWumQBj5WaJkEcZjyg7cceuNcWdGQ2jsHPQnHNh41mjx6Gpvi9zsZWtsX4YNBodFRjCY8EVk54g8qoQnZs51pJ",
  "key20": "jHSzNnwZZdL9tqAh3kjvme6X2EvX5gAAApX2SWaNaGWUVqNTr2Y9LbfyjFnypGcEKPdkmUa7e2B78JxK7Wvjht2",
  "key21": "4D246ZoZqW7phWrYVknB9ugLBjYz4BNmSJYRgiBpSK7HibgNtSnuCqVN7jCYwvXd4QN4LtfSrzF2MvfAPZ1Mf48S",
  "key22": "34G3SAjAsbdmWQMXKkw7E2FjfxjSxJAHQRHAHKWywn8anVoM1ooXX4guGcY7ve6mStpNbhcQdrd229WpNWZw3k1n",
  "key23": "CrnrL8teLRcCXGqwSrEDg8iYfnPap2bgCSrbhqTie1o5hfQyNThqFLSqccAT5VXuitbX2NUsGqPEj2ZKB1BmxhB",
  "key24": "4Wsmhjf64M8WC8yito48fgoUd1Cj3Ur5vHyai6r4CzctrUEo4m62LPtUe6WGXyAY2k2G5PQAFsJ25Bsu3TNBLq8u",
  "key25": "4HRWe7RRzkzyokDULqGjcz39UGxs49Htw5BhD7DdXMGwbeXA2x5zSZonZ475JkUTNginRrXTTY6P4mgM1AjSCU9d",
  "key26": "5ibVx4oWVM3VKhmPXtaH5fvbZQHhwPSpz55E82BRBDBEuxHfxHmXoGukXh3irswL38nLAwHZBXWk4M46yzqRZySu",
  "key27": "2WLvTAgJ4Hbao9GFqXKkC9NT8JV5AzDmVAZii6nnjNU6d5nnp4wLftpnzNpafiJMEatvz8jnAXocdKohPs9Lt2ZB",
  "key28": "27UkgKcjvf2SLrKg33YJuJSwGoZHDSNS9icAH41m1iDRMVaLsqbkEhYZ2qogEf3RX2HftBdykAdqSywTtd77n2hC",
  "key29": "4RuoTSURLFxNsad9oUFjf8P9dukbbGREwyRdGe1xQQTeKj9STj9w6yzjsQahgnft7zWRACMPEtQt9Lk3m8qyhqR7",
  "key30": "2fDxw7UkcckURiX7EvW68VAudwfrYdD4Eq6dG7vm84sBPWMSb2hpJWyW9rwpSj8vC597FhboLwyQfqRUJs4T9ujz",
  "key31": "5rpXZzmbjY1e6d8aq6P7ffirRnnA9JtF1Cg7DEKQvU9JJYiNBjPgitmybfVFxBRvvCW2xiTS4bHCx2djNedWSmuB",
  "key32": "4gWRDPWkc4Z3G9YJmgVPznUo1sBtr5RsG7Kq3PVk7iL2TWwxEYuhFyhxjn657SghtKnwDiFXgbmf3G5G7KruKnS8",
  "key33": "4LDZBkUkxWugghGvhgHvcauMz5AknE8ctWPMLsKWVZPVGcBPop9s8PtxyYNnqn1pdU7fdcPEJjZeK6N2NTsdtcT6",
  "key34": "4JAM8sVLMrcBg66E3dux9eY9KzTb3TBmvCybYK3fLfx4L4c73cZLu6vWqKrZnEfqnPHRiF7it4Dbm8hDNGFYRW6f",
  "key35": "36KYvfzUYxYuRugHRF41HZn21vy7Dj5RBshFwSmCTtNvuzUe3Q5PMWHbhtyorJkVntL5TyctNY7GR1DZVaDyNcp",
  "key36": "3wcYdSFtpQr689jos2nmc8DWP8bPheEqLrxGGZsxCahUVCGyGEhV6ruwAhwfz1rvXuebt1exTgxrVz1U4JyXd1zU",
  "key37": "2kfkCYQ28BLsQAskgQizwkvtquPs8cpDxaMwgt9xGVktmxkcuVW52eDbhjmmbJ6kg9XoogZutxLdK9PmxNFmKT3q",
  "key38": "2yEGCdPFvbhttNS1VyUrXjbMRbHFWfwXr4y5FoxmjPbzZfmatfJQZprxdtqKFV8YGBBZy8Vsx5Kb6o8uVeufmaaX",
  "key39": "3KsVbyeSnQJGdzSPvenMS8PegRNMSc8KU12vFMouXiuFCFe8KmwC2LePRsM2uYyqj5gmxMUnTuKqxVPDs9YVPbVH",
  "key40": "4Yy298wq4vpZCmDuAoKc5PW2Z1BYdAQmPV9j43N9vghH9Tuu2zuqmqqd7TyMcQDdXojTPh7W9ezmYjLpGEDMTpUE",
  "key41": "d6TKdenTpJMxzCRKJzvpWJD6478nhkN9EpVnTMM22tZqKRZ76p7eVaZr49oxPxcryPHKHqsMXdZ6F4L1mxAhPQY",
  "key42": "5oSsBbXPzJtgcMyvCxeVpRUomU2iTsQ6xE3do6ojWPUKtsRFYF22wLgNYDcKGJ5NCZTp1uuxdA5dtv1qnLfoSnSf",
  "key43": "4QefmyrV2n6cgLB426JRCEzSmuwtoqq33RH4a6KwAPuaXyDEwxN45nme6sjAPP2WWyyJFWkmzdLFkexMZxtdzf2E",
  "key44": "4WvV6oQcEnKe7aTrPFrjYNazugWQjHC1MjPRZGmgHBfZmwBu53bWCkmqPYnPJLwFXszGPukvhpPLxiR29zN8Sy3V",
  "key45": "2F6suicB3gnYTu4hfN69oWfXd85ujSkvqFmyF7NvbM9t6Af6nRuzR7oFpFrfomMWNnFhFP8Pju24db3ZkPU2SLfF",
  "key46": "34de7uCeyscwc9ovy2ZurnmLKmWsM1PmvJHYBRdNgrqjQtMdTjYt3zbk9e94PCNuKXFEhkhWmj8nhraZo3yLtjrM",
  "key47": "3EMfmPMMfegC5B1KgKHvagXKkmMy3Kcwj7h52HMrWCcyzcy7o66BYiKkPTv6CbpKkz1Xj2VZwwJrpRCoxvwgrrwf",
  "key48": "5djCnCaSBHAmXirhDHtuPZMQhYx6ZEDkpG8R47pGLdy2gyjfrhhS2zdNdj8wGcRz5dCXayZcmPpV2npLcbr1Z5C",
  "key49": "3L3xCANrqnSCX3TtjySQJaGYkj1raFn3SiQyoyUVkET1i5ARqbbzEBrdMXAmQsXJ58FMMNNhfZaCRw8aaatFXFzC"
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
