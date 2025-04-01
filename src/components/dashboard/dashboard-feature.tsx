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
    "62oTW57BA5YFaZEBnQtBaioppaa6FGXxsDxc4XU4Dvrg4LTyU56ebguafABXunQKWGVzSoG2FNCkh4YEDBvtJ4Sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57igiLsVCmJ1n7nr3TMgpv7my76o69rjpmYKrQM5295b3GWibDamhu4ALStjcKDFLu8P8T13pQpAf2NF9kaxFubv",
  "key1": "36gWouJwiX716YctL5Nf62HpPqg2CbMzC9anQGSWDz254QvZffMiVYBHHra4ynAvsfK6zZVtfaDj3EWMSYACsBKT",
  "key2": "2vGhJvT4VR6dHw8q6kGVZYwLPMGwhzw1kpnMapdAFF6iUrtnnhDXQ6noMCSPAf72Gc8Q2crGGf6F8W8vWPVsM9XS",
  "key3": "5cvUFh4Z8J6LSS2tBSsaE8foiKPU577JaAPNd4TiyT6pWoM74gdyr5a99ELJxb2buAHiYivyWter84huKL5B2SPv",
  "key4": "5F5fe9T8GVZhFAvVqxa15QExKLQm9gSk63qeUJT2t3V5ybRFZRwQudSswtLZ3yv8GLegDCWXD4p2BJnVrbPRzKSh",
  "key5": "3UQnBzvJqu2nQPg29SnYzWPfWxvaNFZhS79u2TcT98Ctoq3bR572y82n6jbizhitXDmoc4Hr3n2JniDmfsyg6DdX",
  "key6": "42Z96SQKrCEw6a2wAYN9EUoEHXVJct2pvyeB6dJ9x2zveTsvSUJBze8muP8H8HoUPYCSxnZNK5FrhchAPhKCcCDx",
  "key7": "4c87F76ehcuEmcfJxH2PCJKpqXZcjR6mBwZbtoKfPyewRBSjiH1deAmZnPDTP4dWrWHBRfowogH3gyit3bxjKpfs",
  "key8": "uoMWoK2YF27h27vAE9XadwPgZRHcwDKfAk5gocDPbyfhVRGDxBsRSMwts6Fhp4GFrkPudvx8LreMheVLgCwxhe5",
  "key9": "3HVGRfDsZxmvbHEJoh9nD6tKM6YRwCgUHKZCVf14wTB2cBesA93cnqidx2zFDbdhkRiw7Kb32bd4Prbquihw7pht",
  "key10": "5u4giduHdVAJ7Mbr68NHwSQrL4EKF6svjmEQrXy39BtM929Ch7toFxoaU21SX41zf5GHGVcXh7ysdgpwZzxZDPKh",
  "key11": "351yenSa53x5q15iuCTHtzwxLfKNd8Hb3Lf7bUMCLWyv8XLNyt1NwKxbEU8N1s3DNBavg2Yz9aAEmwWFisVes9Vq",
  "key12": "FSzh7W5uccdrZSWDdFm9e6B1usbYmjzQZqwM9kYNEoPXN5qh4spDjoB6P1cb9GG8J9bFJVHZJFCp5kCmmVTkwBY",
  "key13": "MJS1JZwTBzbH1VmAKqoMviXjsTYnuWsXmGi22EopsMD3aohvZwCmqkhfUTqktNpvLa8RN2mAxPS5sPFLUf5C4ZG",
  "key14": "2sBSuN6wUks2Vrh3sra7Fq7HGKwCjbVffUAtwVedd7HZJJyMmWoN43LGmWmu5KfyFujpALt7PKDTxb5bbdWsLJrY",
  "key15": "4vmh4w2Vm4etBHny8eXGcYz4kqZ1gBVeGx5eD4vNNb1nfK6poL2WqKaBC3GAcA4eWFZeoeDFzx6bQpxc5XBDcePB",
  "key16": "3B3up6M7EhwubUJZXgR42b8jZPUjT6gT31eTtRfBsUcdamFReXy359c9J17JPqy1uKQwZMxbzRArvJhL6XrXNMsF",
  "key17": "3io1EXkWp5GhnGHJVL2xjgWGNv7qtAGTpzNehdoWAAGRoDDTg6Br6ybsXom31Wwtu8gUwTT6W8A43zMwHp3dX4tc",
  "key18": "59wk5bnTWrWAxMwDV93dRq6X4CE7AkcdZ4so2WZq4cr4cBACv652NAkgEcGM7py4J4cH5vMEzrgJmNz9r9hpCYp1",
  "key19": "2V4yxmqnua7BAZZqKvacuTFVTWBP3ihfog916DGMTRoysyiUNkTxurbgWztjRmaBH9MyGj8SHrSpMHzAbo9UGv85",
  "key20": "2tJVwEBGiYKmK3iRQ73JhUVyn2mnREQASKALyR8ZzDw34azRHFsmNXgNV4e4skpGC9BVek7ysDhrevVj7BL1G6Ar",
  "key21": "2eTCXUJjbqpPdssAKmYm4zW8NJdSxtHGhEKsjBnM9BSMPHDaFrReaYrkc4QhxwsSNpQx82pdnuAFxYGpPZg6b9YY",
  "key22": "qaHo24tcgNSVTid8Wu7pYYTh9n4w61AaWhgYdKzLn114k8WiPqsDMHJbdVV58i3zrtHZ9r1CE7tu8mvaDzLwmCb",
  "key23": "4JnTBN9t1nXwFJifpTgK1rhWifCm9xFtCB3G15t5mzQgyMiTbxy1VPC2YBWKyoi7wDiJQNq8AAS42aZgZ4hfb7ve",
  "key24": "2atCb91dm3ramRxVhTCCbATxyNx99fYSeM1sAhFi5uFWAMhu4kJ4jmvwkbSs3f8ENWV6fHitDCqGim5K1VCq5S8J",
  "key25": "5XJmizaozaPgpXSFJfhKR1foLjQsMoj8oZUgy2PusFPLgzWMu6neu4AanDeZrjSVTwdc4STtxdThwF38hkNMzJhG",
  "key26": "eCgVYQDwG94Qjgst6AH5Psn4N2MmGWs7bUXEf6tx4SxzkWamEMYsparfWySCxEUJYeju6g5tzyPEVE48kevnR9j",
  "key27": "2JN1sTNzHF6fwKrDMTZTGvEYsLvceLCLxTe614W3jL1BtPrVAAqbsiyadzfVEx6rZDzq7fBDTLDcR2v5dCGnrUyo",
  "key28": "4r7cpvd56izbsfyPT39pfxk4Ae1CP52EjmSGH4WfjeQaM9gHTB8LZ7EDCxqnQxSRo6efCsLmDwtZZe6S2MSge64q",
  "key29": "2n2ZvL9tRY5ht43WoQBcsYjD5dFZiXKGG8SuHEuxou5CVkJ96oxYuos6fjKiERWtUkFXWKzvJh6YbAVLNqT2UtUf",
  "key30": "27r3KmBBCgh61VnQMYTC1VMnsLeh3K6zxMZsdY9J7M6HJGcFVt6egicgkKxm3LLMnpccrXFskXReQXyt1PK74wdQ",
  "key31": "2j6aL2gHdXUu6koCpjSxtQfRkkpwR2TKiNaSYxAuhamBzftsLrnsceWp1CjxyzJXbjeuQ3uiQHeiYkBXd8cPSR4",
  "key32": "ZpvqWkL4hB9jBpmz5Z6oFUEbq78zS4bND6sdW5ypxCmtWLpkxvP5gEb4pAb972znBFbk1XnLXg9QaJbomWGYAKu",
  "key33": "9XXcn3TFqu9G96MvCWsBgGEHzZ3yrEhDd9BEJtUZHVFMeTfXHz4aarBMuyNV2FxJXhsrU7DZi181y2mkXzMqJC6",
  "key34": "2zSCbYJBbyBHcfDDxZQYtdNoYPdTPxAkfwNHf7eKgiczfd3ewuQBicSNKp4AHszapyyZGpczvzDvjVSmYn1je9tY",
  "key35": "5V9XPq8y7cnYbwYEWTwDa66hZFT8s27CR1ZDnFbxzmHUcuY4X3FrnpDPeSmdbfG3mUA9GsLSe7vx2RoBQaw7KDxA",
  "key36": "U1zwwA1kXakF3fTRm1QBE4hVeqdoHfXfBsQJwvojH1J1MA45MjDLjprxsXSXGLr36rzMjAPhy8uLvTXzewr1Cxa",
  "key37": "2QBQupqU1uQz1PEtiPhvo1FqJerUCZ3q167vqALuxkVCWvDsrZED81bAdMPaZhdNPaekBfkiLXmwQxvLUQYs3Q5J",
  "key38": "4SVRGa4T7gyJRb5pUVzHBHyqkTzL1GArzSV5FVsFpHwNyToiNoUvtmD5tJBoG86NhDBAsqN6PFj2bhnyRKPcfVfJ",
  "key39": "3TdB4qtcNsyEnj3iC7s9NPjR5tXUp1C5Ueis6GuKgbHkiBpBZzkMPuWRA8HvMkJXPJMCB47VM4z2ezttTCRpmFcE",
  "key40": "FHkFVoEupmRA4htJYu2HFkXev6SzXi9VqKaZCgaA8imGf3gffEJnwVWup1ySsqnbSXu3qBPky43BiQpbGqjedjg",
  "key41": "4MLSZ7rbmtUeyrkgWX1rNuyfz51xJLRYcebwiLhuaYjhqZP6SngrtLbcfBbEX3dGYgKVXBHrTVg5pN23wF4h9Jun",
  "key42": "AnDRudSZi1y2Rm2c9LsBxmBsKVeNPYaEctb8xQGDrYTUAVbUeNvswGDWwvs5u255nNviVMdnJsjvmzoWxZS9Lyw",
  "key43": "HPPvU13f89AsPJ8fNwumzkueip5pLUwTNgmHp5KcEazYnR1nzaF1Swd1BcuGJoDrkL8w4ASg9MegQFqnjzuW21Q",
  "key44": "d2uCXhVPZNvUXdekwANJG1b8mAQXNfbthZjjNDg87pKKgiRqHFzKYJokwAFQADiExFucEC5McpiuGYaWGNuBPPD",
  "key45": "25qdz9NyadktqJiZPZGkykX1gfCiyjaYzeKsKb6rrViH8VVSx1AjLbKubwHpEpNuMcbgM5hc5foJyf5DnLj5HYCf",
  "key46": "2gvqsLSayWF4xMz29BLKKffmSjDnem38wRXf9b7BNWm8RfTqnndN414xTRKPCddm3MFNdFtf4ussr5r43gyLrZwz",
  "key47": "5zNMewN9dECjgvUVRKvTwx4Jy8Lxa47ZtbdY3zgePzmLv1uFCcSproKHSPxAoMs16cycRWgZRjkic7zdPJ2HZPbW"
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
