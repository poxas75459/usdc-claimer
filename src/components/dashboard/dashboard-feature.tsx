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
    "5Cdnsy5SX9bFKUk1PLYfLjmZZZRWEdZwe9XAP85zEGFED51YWrq8QyeVj7RW4BxBwNrAo8aUfqwZCpSioBRdYEBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QW6YvcViFvJSJaBTGwj2x8eifGY2sdNg6oVLGZ9VAnFcUKe3iVqYWxsmiY9J5WCiHF74NWT3eqxyEMNfkS5k4o2",
  "key1": "3QbqQrm1hwiUjnRKB6FMe6ZDxrivuqnTmoNWMNA56PQbM9w5FWSQrEPo2mC79dCtfWb3bJdpWaL2vmQ6aiePgbUz",
  "key2": "3Jk1g7YPUUdMjseAf5u4K4KS1qjpM2N5XoCAf6XUz4vgg5hs4b2mfyZJemdJMmMZJHJZwLZAR45HcowkuWH5BK9F",
  "key3": "5rX1vGDfaawNpToJi7RQyuTYjmZMW9vSkyTAXRctdhpPYisW1p4ezr2Vd9h4KxTZSdVP5gkJywqC2BmS8AGDRZXT",
  "key4": "4KMyE43gPfc7oJEdDSntYMfdH8yomrWQgMwDL3c8g3q4WBWKTdVBG9tPdQmTsJibghbxGoehadGgvrAL9JEpFePG",
  "key5": "4gfYM6dWwoAD6G1Dt7gYm8rfSjiLo63FDhCzHssE34KG4guLdR1ceHrCBNFt284WmgrN2cfaHh6qbdPTBNDnHX3c",
  "key6": "sgkss7AWyfsUNQAWJAfig1nLJPffDZDXeCCf9wFFk64rbzrUGKQufCGC5GjTWwKcabKGQuLspj1fkRnKa4wETs6",
  "key7": "zNVoQ3xm1xsvmse7pk6PHDRQvBTMkdVsVSnowgWFyvhYZk8Qq9PrEv19aMWub7vBSbjiY1YbFLv1MYhZn5zyunt",
  "key8": "4rCnwtXzjnNwzccQWVkoydnTsZotiVu5uuW7cYKhk3smYdRYoLCxK1U7VV3NDPoxNSiHQhUvEUiC7C9vQCdw2PW1",
  "key9": "4kD6dx7ooq6ePE8LdwDUEdb3TDyvs7Kwxvzzhi8QTS3DzMCMEoWqYQqBz1F4WsoG6WTuHUCQyjYu6PZEr32DioJm",
  "key10": "5TknBaPqEtFCmHLw8WhkMwPmUiPn3PM3VjPijCjdMWvmRW2ufyKjE73hu1vmZkzwcPaZcgzxemRvRfzr9Hcv4ng2",
  "key11": "5NUwtRxwKBDiURgVcBHcZFs3Ru2xFgHvvJEDB9u9Fa5t5MQ9z43gmX6mHJwQFXKEmVBDZj1tm7m1CUxKVXViunan",
  "key12": "5Rqq9vodaGhMAJDNhisANMx3wFHsTmjckRkXVVTz64PbosVsk65KuqDT9Aa7qJAZ3pBSdtBAj6NSJ2vV8WVPqVyn",
  "key13": "2NSDr4FxkFffUbpUH3hGY5SNHLTUU63juS5TsrVY7kSudA6kVcECBfUnr1Vimvt6YZPJ3PoMgpwK6NAo7NU2hzba",
  "key14": "UbWvLwHh5KbcDWuDZt63NHAFjv1Znsfgq4WHu8xN4x8sVTMVBPJnFJgMzLmM2LJWGNYBYejaK2J5hu6HLpP5hMc",
  "key15": "4MMviGzxytXbqXs5bfLoxF4WfLXW3SFfDVsFQokWZCyBkHMs98GTsUt8zMjhA9uT35dV1oJgfZGvmp9aBRckgcGT",
  "key16": "3Ekvfr4AoM25P4Gucd69MquW82BHzNFNAD9vsFzUUKSs1zpYxYAYAmixEhFQqLufwc7KW6fceckjrdXeURBTgK7b",
  "key17": "VuzKpHMigRabcVUUa2bDUkrdmyHaMfAn37QY8ixnLo2oYA5FJCqsB9BKBPNqT9hiSZ3MJfuEuuFG32YAgcJ3PnF",
  "key18": "4wpXhBevUpmXgLBNc1BnzUA7LMJeS9Bwty6Fik1EkSgi7Vj46hQ32Ar9C96y9fGcuwUizkU3QPwL96TF5fZ5VJJL",
  "key19": "3mUG89rFikEbiyx2m5X458WPjaUuTXdGNRbbsbCfiutsPFZ5aunBT5YqAeJ3N4Wr6WvpgBqUjqjTzJ3hdPuNZH7o",
  "key20": "25gtTKqupPUmfUn9y4SrCZPksZPSWakHNwCu9yQ3mP5ArytAx45rveBRFKTh2QxoxdPKXKknZzu41ozwB9hqjhew",
  "key21": "7DhALjGGCj34AjPbSXffkQxvj3qrfuPzCPcYLdsuJLa3c7NTqMXRAyyP6YbPMktnMDweeeN6eXSDAnRYUGbnfDE",
  "key22": "5922cCwwxXFisWbnwXSxKai5nekFJUMT8NSor5swggBPmB84D5YYXz7NsAFfE7Da684vS46z9XTaHRPhAQHNbYFn",
  "key23": "U4QSSfVW26Kfp6SLHaMxGRUGYBPqthVaiQYu3oHvNdzq3tHKfSavhWCjZbXtyTg4rtdq8pRxNLqkbubddrp2eWX",
  "key24": "4AAukDkenAPDgY6fuHfU8M3jfXFhB9M35MwFxMKkHxWfp8G7vuCCnX36PopHyfSTcXTTvYLAzz9ZWVCGs3QgfGyk",
  "key25": "3aJX2xQBJHXKEcMQMA9PavppbtUigFS5wi1Ux1k21VidzLRtDj15a52d8NAeK41MTSTiv8tR4ewhy1zEMcWinY9c",
  "key26": "ZWB5ZrAqfMdLkF2W7z118MH1Eikk3TVcX2emwP3s4Ww2nVYqsqZVTJQcPEUE9pTw1PstjWcNJkb1sF7ZNsRPmwr",
  "key27": "5ycCNmwmPPJSPyvwAfgk2Rwdg1bKMJ2Z5Zks8F37yScBWdGCcusRE9nbWSYtetcJtnjpTDMEjhbZuEKC4vfj7i2D",
  "key28": "34zEn6W9LCQajAdEgTG46BzvKJ1waS9nV3xTzK225ATWpxNQkezj2mUwTKTw3oZDTkkmcYMN1iNFgPath6bw2Eqq",
  "key29": "2KBurvyctihC5hfARx8uWGQPcw9FTWsRb79zbgDWbsx2pSbqpbr6u6pKQjWT1qdZ1NvuRNwJjQxA6rkTyYgQ7e16",
  "key30": "2et9kad5qV1mTz5E4Xnk16mp3hiPk8zVaJ1c79371ftEEJbcHvN7t6E8rJKj9Mh63s4yad3ij1wHs5B19YtwWLdc",
  "key31": "i5iVNKSviE6qx8WNnNwJAkfmQZ1Yu6vK88s2fGeWfeEpiL8ZHe7AcTt4jBSUggNmzNwYNjXhzQGJ2FoYD4NJGY8",
  "key32": "5opc1WyEbo128zDdbUbQPDW5MytSiRcQ7tJBy9fTfUGisPzQcMWu88Y3sUvBWazG94r1LRiZx2ReB3n2TDv3PJ1T",
  "key33": "FJ3JYrSct1WCidYhkaThu9sByRkQZg4bkWJdPUJphJN7Y99nuqYsBpASQUsnCSeiW3RFxNaVNvvM8MmBokm7xJk",
  "key34": "4wqKBrV6eQKG4RUbXx1RsnHLvfpmaLG4vJfr8B69vdDbaBqVuuxhpaC7cmMpZHdvdRjJ6YMbCqhz4tnMNUGT1rix",
  "key35": "23MipYs5Rq5W4c1jTCQp8MjSEVMutzYo9NK7Q6kG1kVJqeD8uQtBWoUzthLkA4RoZjqvR6YQZVSdGP6TeT9stKGV",
  "key36": "4ejeApgiX9QT2HBxtky6WnN6AjUPSixXt1pW3z6N2dwF3RCEpbK81uovMV1ULfcVbjn2AxMhXvVbMc9bjZgEJWYk",
  "key37": "56kHC9Qghq7ZRPpUuKpmvhseMP5ymy8h6C9yobRVTroSqGiiGpzm9C53QUXzLmZewtsKsS9wRBGMGSKuErJ5PkgN",
  "key38": "vszXQ9dqUGeBcHWZzgSdXxMjhxuk881edtTiiy9pzfoMCEoojD88xUR27qN5dUH1k8MHeNd2W18tuWnycdUS1br",
  "key39": "3aPkeniFHoR32M4VwxfSGczaZcJ722e45MEfoD7GecAWiEDphrL49yz2DE3pzkjtHbwRdyWQRujg3yixtLq7X3Q7",
  "key40": "3JnNzfMB45tN1hudwivbcRZshpZ72dJi19k1QoeDmXtjHoAm5PrtRjuKDLt7B3jLYoN3E8hPxiSSYzgjtuxhNs2M",
  "key41": "67UzidUdVST3BunN3q5MggYugpsrws41o8zhDMbNEDyc5R3fXauNxwQCPzQYoafGNQhGUm4fFj3EUgfNw5BK7Tsw",
  "key42": "3e2SZysBkeKk6JVMaCeczpasyCJRqkboh3b6b2WeNZXtYGss7o62EwxMUX5atKaLRmr5wxZCi9sKW5Dk1JUkDYAC",
  "key43": "5wkevXt3ZKHz8PGV1oR7h2DULN3awxdGQTdvsvxr54sFPuyj6dBoxtMRvcGpwibT3ApTaRzYvyEQPKHn4NDxjhtz",
  "key44": "dYKtSQLNupyUsCPtaRj6A13oquaUs5xMbUHcu8oZKaR2JHbBhojjDVwm39WigTAy1U4Dr4JBYEDxA1postF29cu",
  "key45": "VPatj56k7JwniheJXmtMZcdKDYpZ4UcFK7XdoVLLXdLiJNiMmWcAGB4eKTvpKycgAHW66zWDkSUNRNGjHXSy2xa",
  "key46": "3YiEii9boS34qxHMjNdehi4bMEYrwGfgdZx5JKbnKff1us45eciD8YB8yJ5hbpV9RjnCRL612cV9t2Ch6zkr1q12",
  "key47": "3aTXHSfcRNQ1qisRzyNpj4sMxC3pYkPAkkoJEGPWmpuum7vUWqWCrsUfMm1MVjPQZbyeGqAa4Nk4avETX6inqHbD"
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
