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
    "RWhdBP3QkpvA6P6vsFMz4pZZPbo4f8AFSPdVKNh4JMuyAC8moZFoDgp58XeEcFg6G9fvcpgKXMtB78A48evMk2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mAC1NjuFhxANzQDZ9XM2dWjWQea1NoXXUSDkUnQeLFWxoMMP2EDztEh1XDLzeB2bzQqFjRtKQRTHsE92RfvYp8Y",
  "key1": "5TYSKx4Xbk2aRfttfj69vgjHsvAQyRaCTPVnMx56hAYZY3VRcFAgDbVfMDzJbHC2MXF9eSqbGPsqu7hdCURf5Kxm",
  "key2": "5kJ4ei9FMx4MfqFnUhBckcvgX3GCCuA8v2ujuH7BCu5xgDTjKx8K2HwKeumW2KoH2NP4kDdxs6y2S7XsoNrbc3kd",
  "key3": "9vn4ZerthAKPb24VAENGmHEQ332KUGwRhd6X13ugmVaMEmKcQpq46b13nugWnbdPAZaWbRGJarQqNyL6gKCSKGq",
  "key4": "2Vcb1sCtiqZvcyPGSECfNZ5pouiCeJjLGRpRKhAHdjZpNUkRWmVZeHrQk5wTLSoq32nBTrp9Q3JhnqWHiQBDCSif",
  "key5": "qB3sJPnfYYVCA6WmSzHZawrTaq8N8WUQDHJuu398aMe9Nq2HGYJQxWXE5tmsd2pvGiAP3CRkfaH51A76DSPXL7s",
  "key6": "5nBvYAdASoN9PxhJQRbXzkNbHtBgd6m7byzz11hcx766K2JX7he1zqpdZif98fD2WrztPc2rvhmKNR5kfG2y8qGC",
  "key7": "4HKFTHqgheShENSYLpiMFNb7uVHidNkxUqMuSMpmAwThTVqWFCRRQd3FgetpnZ7GnwVzJXhLzjJHpfiJeU4fnxUe",
  "key8": "Ykpg6BM3W8r6Ht9Dnzi519d39jWNYoLbWp6QQrg3ZAkcDAGVYsd7jdX95nJZuggyn3tkb1Mt96zABPt3rLENyD7",
  "key9": "3ATgVqj5gC2ASUcmymgrPMxECbQ6xRUVSbciLU8jPDmH79JbSoAn3KJQrTv3TqhTEaFTsVwVo2ag2APVqPAHuh1W",
  "key10": "5QjofDgjdbe7FZc7D8xcBuiqMQi9jwxmts5AytN6TvgwkfGBrzb9obPwJH8qZAe5y4YYHWa61i9uKJhYx78ar1Qk",
  "key11": "3rqh91XXuiEjGcsUmxQYcqwcxYWjT66rtTJaP6ZHqDBVQLDrphSmEGtJDSwH4sDkrJP78bwdMjutygEPadCJuhwK",
  "key12": "5fKahcLqqor3s37nG7bibKFsFfQ8uDdXHC6QHSUiphcse9cAAieQh2MjAQVxEA4HyZzksqd6PtdPwAxLsVqeDVyW",
  "key13": "4pcdntUBzz2m1ym6Pp2dgnFfqsuqgT9ffwMdJUkxH45apY6AoW9x9CihYUaRXfi7uEP7KdHNPBB4BenM5HJ1Pvp8",
  "key14": "47skxQt74TjV8H36xtG2WsSKM281Q6gZwrtaphdJdrgvGufMB1oo1xHGuYYWnKfM3nmukSHLMbEe5YtDkkuEDb96",
  "key15": "5vYFGoGYPrV9JiEvwDmaFSPDPS8sugHUwAsLueF1RRPptgdLxSrFQPgw1b7Hka9j15yZgqmU7pPiJSkm7CxFfjvo",
  "key16": "3HAmYrHUugwPktu1Q7JvPYwsrLe52Us9iqYVB9eF9nWLpwg1z3qVxP8KHABg2HKexAnV9u1NpBqQuYXMCmVLDBbf",
  "key17": "3NthUyPouYS5LpYR31QEWGh9RBW3sBDMMhSshPcCGWAVUhXiDzKF8yXa6u4bnVjbLwYmvftaNy7t9VKrE2aNQHbd",
  "key18": "56u8gKAgZqr8Pck8YwY6UDTgDoUbDuFungRE7UTE2NU4H6o9WYRAhaxLPnYUtKRTMMV6N7wm95fggyYRAGzBfnbb",
  "key19": "8wRHzidcTkWSyz7yBVWSEPE6MzUsfTLNNYhJt6TCmH8Vj4U6bWDYaapwx4MdTDi398kbNGNLSRCBRqRngxT8Ug2",
  "key20": "2jN4MEZWSeHPwPHWpEn4vrSyu8YxiDxYdp9XKq6fgCtEb6YDchCd9boSbmGjQkE9theNF9kUgWk3eh6A9Rfm58MB",
  "key21": "3PoEzZB2FkGrZ4HtHXUjEpeFZ6FxbQ2HYExfj67HFDMsBGUNDLydYxyNtfdcoRZFzyrdB7BvXAZnLsNTtZCdUaRZ",
  "key22": "5KHC4vKE4sqTPKzxWktK4MBKHciXYBLGbpx494CjDGSyGVtg38LzG9cMK2PF6Nh2ZXj174uDt9ruLBRP8fgZU5x8",
  "key23": "4nKdBWnirzYgSMiUc4EtwFXdDDJQkyjHoGMy6AavyrCecWnn2euEJXcdpYhheq81TX72auTp1b41CRCtkhEVMkmv",
  "key24": "5uggnoiUm1HxkgZ9Ey5ShQD6XTJ8BzSrDbenpP7WBrbUwW5LDAVnjJWqD24vCeXjSyLrnwVbjgZ3iAuEWw1YYEoo",
  "key25": "Gx6WPsW2SbTEYkVYCzeamDi8u3FJwQHpePUZQ7zD9AbKJS5fLq519cwjFDgLzKe8or2Am98JpaUdzqvABqNHSER",
  "key26": "joEFrzN6mgX8EEVo9tKsjDDnMiDbd58depW4GGT6RfCuWi8a3xywUNSPqrMZTBBPMkNm8dUxGJgQhUXGdxrXkJY",
  "key27": "5h3zWmJxfeVyinN8vc3XK2MSjYbYckfQ92BdDKfRtyDFY1sDV5x3rFbmU5cqbnQf9omtEhCKrif2bjyNcSWJCsUA",
  "key28": "5fT9VzbGrLKnPjKEaAZRR3gsQdicRftiewWcm1dA5UEhJMge2Z9ryP2UiuC6C981ALJAQzCxYd6AEWj6iKV4D2gX",
  "key29": "kEpS6CR3vf5w87koJtKth3vY9rNohCfZXqbQZP3H7o3Hw3LTHk9YzjDATAW7PLfenvgvYzAJD8KcBW5xiMV4MTk",
  "key30": "5UHY3DyrXYdWs258Q695Bj6gUGmdCU16oDBhUWumduEbRt4v11LaKAy1YBPcZJznmQVgCUmyMa5jGqt7wzuacV8M",
  "key31": "3YpYnCAYa4pE1UDZ8SJFV3r16BSSWeonNiaK8FFMY9hA8ZQk9hP2oxWMZ52h9L2EeqatgeLAQ27tc4aDZkaowWSk",
  "key32": "4FUGSViqz5EdeuDvUqpeigD6KxuWsBwyEMoteunihXxfXg2Kh4H5o9w1s2LczfmAQ28n2Q1Zt66BCFV7SADBg7xY",
  "key33": "5P7SFZK4Bk2r5C9C8R1yZPrFLepbhckT5yqguYiLf86wtYnJGLC4FjP4rV3VrEdVwyGDtuoaD4x73ESSZrdEj8Pz",
  "key34": "3dUGQjVSQyGgxNwSZicPbSqREdKnaFzcr5qHbPxPYidVXdEYkWSkkcBeryithrfDYQX8mSeX2k1ZLvbzRbP7r6GP",
  "key35": "V5eNE9oMCdxrN7cmM3Ztfmk8Exzebp5KevpSZ5xZqCRXkVX8PmczjhvxU7SDDNe9JSVV5SE34kVrJkVaSGYsfK6",
  "key36": "UFWp7tzgZPByXAHLMJoNP226npcWrhRhJHr6ceAM62kijBfAnnthyVb2pfCSVUi7RQDbp9hb8WhmffBaS3GMTgt",
  "key37": "2xxcZFc2bF91WLzZX8eL8NZVZrQisNgoAMC98SCcwGcbsKMY2hwg1G3k5x3YVS4gTrDgsAaaoroy4GPcKTvUJCe3",
  "key38": "xtVntbh6V9WqKiXVmxJW5vNHZBieUZvBmGCAK6VBuemhpTRns6e8SwgL2p227TehDvwacegCWZGgEMjEP7u582U",
  "key39": "BCMuqMjtRGZdcPTeTrH666FNXPVRU5ncjje6rBthFvB5bh5zXD9Yinc5qesGh7iKNoxfJcdGZo1oZffFr7umAV8",
  "key40": "4zYYNMupXeuSCuVzxzWkY2HgewXcSCqkXW8S7aGXUuLVJ6XJKm3oAyiLJo5e8KyeyPyASHcMkr1ph585L6huzFF3",
  "key41": "4DELYgfPbqahYUcxEuK3a4jDF7rCW7WzujN2JGys5CTaM1w6sEDFvA21oyfZGhvoE1rWTgtd7bmLBvnKeYiKdeys",
  "key42": "5pSiMMs7fTJZn5Zh9WLVBcnMiFYrxXqbdJiqMy3wZsF5HonoRD2tcJWvekfUQmSfZakEsshrPNR1rBSsCZYTvVkK",
  "key43": "4Quw335guqZUdpi7dCo9hBEvDF4VYkUH1ntnbvSuQDbyY8mWv329WFuxorV1KCQD8TY3Aqz6rX3piWvKuUXnLacK"
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
