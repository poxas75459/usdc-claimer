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
    "q1bkSsoQvBn4B4VyWnfoieJSMb9MaCdCHvy3L1F179dCNkL87M1eW6dtEdBnvb8aGpEtibMZWHnUw9L9J42WUCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2WXycPH7Ynii6fDT5g2uVLq3dYkYf9uF6Mndhu7T3cfGkC33eNvMMm3bsPc9JVvrmKso3wVGNqeqpWErS2tQeh",
  "key1": "2Ud3xF4mtyPAawz6a77St7aWsi87yoGjyUdx6ZHJW2L3F8vfJi1Muzmn6Wo85Ye6hQSaTpwqXG9RZrzCS9GgZ5Lk",
  "key2": "2LUpT7eBMumbqgdL29JyFUYC9eRerRRcqEBD7ucgfLFvd6W4gqatCFteTDYwrJ8VJPcST1YFboQz6EUfXESkQ7e5",
  "key3": "4nphSL3wGav9yyHYVV3XyCNHVHoKTFT9XwYAcDudEs5nTwCxoD1TYjTRtWG7X7icUuwhV2KbUQoRZvPwUdYMJRPD",
  "key4": "4xgRLZ6jGLNDVgYQ58VCtWzLeLPGYUXBKqnYboQZ4wkgCGLSHQmakwtsGxBnvAyopbCuFzK9pAv4PJZsBfw5KayU",
  "key5": "4xhyXHiu9gpMUgZEcpAML2kaiiFexxbBou6FBTYxBopht2SgdBQgpYqKDU5hP8fSzKhHJmsoDyUG2GruTvzDm8MU",
  "key6": "nrNVs7UP2B1z7Qcmw9kddFRwp6NrGprAz3bAKeF1VGGn9U66hu7Bp7csdHGd4owvbTEgmq6K5m3uWSfmJ7PpKdG",
  "key7": "2g5FtF88viA41LQS2mzSVrX57SxiJocgCg2da6g7KqgDeXLLbNHE3HPTZL2S4Ab3bynDmVMmdvSg5qPVSFS9PXjV",
  "key8": "63p6WDvPWV4RoMPQmS6xLxmtbB94rkfSuxvWgEMkj39dcFF5Vh2bVAK9iJWG4VyfrFMvAjLHmk7v1EBZvTz4j1XG",
  "key9": "3H46kffnMinmchcvaQJLacqSiijrNLDZEYciW2Aj8bWee8Sr6JWoWm4GSyrAqZVLbWbZb3fYGjAfgpq1pgU6GS6n",
  "key10": "4mxmJDSRFdHd7Aq4aWmL7rZZ2rZM48ysoPTtpigMFiTFXrGoHcyjJbxqnohjnonH8UtvNJnPV6k5APUfxq9BUfcm",
  "key11": "wdYwAfiBmYAgibNYZWjQb7T3wW6493gQx4asd7CR17KYsMXoHAc8sMU2Tpj2GA9YXep8jh5LtADzHSACTHY2Axd",
  "key12": "3gZ1SCzH7i2skUBp9o6gASxftn5WDzqojNFmjAY4rMQXux6LTCZJX6cp9jPyB2bcDAg1gbSm5jVtjTk64AQdGbRs",
  "key13": "Dx6s4bhbyHtGipJYuqa5fTGHD1soRHrczLFGdHB4vC7iRqdRPezizJaGvnnUG6x7m3PrscdRpgUjMobVRedzuJu",
  "key14": "2Rfn6vysMB5r6y1teiowFA6tTzMGJ1actMjHJERWonFtFJrHRjmDfV4pz7fJK3SU6628LyssDfbeckdp3wSiFUjQ",
  "key15": "4gB3Fbm3duypzCJBzNHEcxExcM6SMJnGx5Gw1KnzN87WsKMPZVb5ogvGtBZacETy3nBn6DkoptaG5zqNRcWByj1y",
  "key16": "fCxXJEtFUEkv4UqRyFdmzRsa1RQxxAjeWAiKkBpy54tXCUXqgBeu5QdH6gddhRjbTGDGqiJuRjQcTCiAj8is7rZ",
  "key17": "2CXdtYJULCtKLbZv1MKUpH695Gdgd2WBQpQVLNqFvDpBz5crqxsJCfhBs53Kj4b6vXySsvxoSJxzZYucRg6K3N1B",
  "key18": "5vYfvfLDKqdZQ7zWoLuyXBBdpXkUQ83dhTk9VCzCiSsWmFyxSJKVToSkYrMmkJr99hFytK4sfbWoPvDN2aCuDT98",
  "key19": "2rMiyXH3c5L8KBfQdM4ZG1pJ6stLjxgcXnNfs9CbJfpPY6D7kur8AuKXYWj3zZZ9fbEQQhYrYmBEYEHDRCh8FNHa",
  "key20": "3FzbRfiSzNFHmR97VEGnYD5X4PBsnETztRSMSjENxpwRaKcciJST9bUKaJsnasAo4j4VmqQ5XuZACdqpesDZ1vWg",
  "key21": "L1QCtRv6wsEec2K19kpSzVPdqLjXCLehGpa8Qx23W9Z9uQVuVKUoNh3ZyQmMTyZ6fKePprSfTWfmo2uYqgP4cCH",
  "key22": "LGApok5CDnWAF6VpVSENRrUDXwetHBkSki9b3iQLWRST49qhUEzdiVcUVF6wVVk4JqAFydowqrnTyehXPFtdytJ",
  "key23": "4Z4PcN9QQ45jDrrr29bQqXz9Mps6TTyCsafT8q4H5uhnQD1NETc5tjBX32WA9ouDm51xKcedRZKWUMxnk5DKgmyg",
  "key24": "4SEnktd8SXc3zSC6uniCgge1ZLgkm28vAou3Zk9ZLVtzNe2JAKGCmir27ZQLvoMagcveBwdQncjpXi4w1KFat3aX",
  "key25": "5yxYirViRAKBbvuUKSupQrYMbh3Z1DxC8JuLvKiLVRyX7JiE56srbZjRJLWX86W8B2bqdZAiQfuyYkiCTnLApGKu",
  "key26": "5ACrktYLALDZcf1PFRXbr6NvqQygC2dPA3nyFHe7NcR3XrqxXkojUxMequZMmx2KzvhXoJaXkqJrVrGKhny22w4s",
  "key27": "3n4H7h5boodoipRswj36fCMjqWc4F1dHPkt4NuLa8CvMutms3iFVeMccKG7pMSwVJ8Kas4nxa1DojdN29oFi6mST",
  "key28": "21YXSTRtJgEJvBBZMYc7ei8Wmj1AEFP5bR2HSHmnATABm3MkQu8kqeWNwaWJoCFvAV4Mg1D38Q4yE5Dk9vXEND1t",
  "key29": "4wfiQD2UMLoYgjFPUJocVECSkUiTxmqNWnNkCog73mtNgeMp8ABzQ6a18q78DxMzF4wPChF3hbMm8um5myJ86bqN",
  "key30": "VMiBEa1xUxcTxkzGWC4zKqvi2N1zCxaQHqtBjwzAMX58Xkun1JA4681VCPAr9YQ2YS7n4Qkrd5a3NzcnYryk4zo",
  "key31": "cU1JQS2yNhHoRMST5WGjXj6JGHsuPVTqVE3LYTyFki8SxFsJTQGCV5u6FhQgzFE4mV6nzAPj3J3v6TQheEjAc6J",
  "key32": "2cFbJsBV9NAcVDr7JY3dDbH9RnvepPqAScAaNTtnAaBVchmhESxLxDqLCYrSUnAg32YwJS1HFGLan7N9rfEZCSyn",
  "key33": "2Xnzs5sXzCEgFKmsg8vg65yxVdoa1jj7dtNW4v53YSzxhP7Qc9wUSYqsv9TQfj5HFPYEjGpm5uWw18gNuDj21sTH",
  "key34": "4MYbPC3zf666j8MYVgKZXjuw7dGE5CCv87PpdgfDhwvohXPdStY6jreSW2f2vprzHM8M8SQLgxYd2WauepZrcLB7",
  "key35": "2HsK1hc1uwrVC74214vUNpwHM85rhWXrq2ZX62rqdoRqod72QxLvbbkHAAQAp9TDi1XTjJaYFbkrLVRbQ66YyQog",
  "key36": "2kdPVPhWSYTc7VASBBRVSUSZMvYMwJyXk7SRjFv2TTpGeT1iUBWkf8JfqwYQmdBsATuwrFY923f1VSrn5ZtDE1vQ",
  "key37": "4Z5ewmEtosnWwRsSoEsD2YpZT78yvra5sKf5uBjWBepDQi6GRx4NkkpgYvXWF4jTxBjjKhpdNPfX3XdnDzwugCCp",
  "key38": "2nNkHKPoqewYBRc8euj5Ux8JVuFSW9PCDmdiS1nbd624833HyK6D9Gd2ryCpe8gyUQy2yJuBt48WMSx6ZADZoPwc",
  "key39": "2ueoNRhLCVJjaqviMA4pvQNHaGcLCNeq5NbiF3ab22bZaKBbofZwfAuXXEUcygmJit3166fcMznUdGez7Ki1Rrk",
  "key40": "qCRHLJn9fwHjUEqQJmej3vM4K1T5emQzPfCq1iUuZ7EBbLBCvbZEp9KXEmK7sJCq8HGYBworeBBtS5EEL6mzd6N",
  "key41": "f53Gbn5wzvfNAFA5B4PNmZHcTYWYBU4ejfbUcMsKWxkF5sPqA64BgqLjGeoqp4KjCrugPKagwonAXkDCY4rK3xL"
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
