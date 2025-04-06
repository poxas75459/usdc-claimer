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
    "XeDrcrTeAghfDu6dtzgYGwzHfWRZonxQFxZ3z5cxmwJSasn2u6RPPgj5mV7p3eGB1v4AnYKmGA6weCk39qHQEB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPNnqoWoEwJPxWdMHucWaCBUha3NRd2BKxnBzJJfqPtW8D4CCu6HDc8zzAicTFRSbdo55X73fvrVBqrbvivAW3h",
  "key1": "2tpFNFG1d3TSakrG76mxbkGJctzUGL1Uj8NcWrsjmgv5mkXBnrWB6akjRRofhoHusH6fuQWHqE53Ve1bfAAPcXvJ",
  "key2": "2BBePDcVXRHstFR4zzrUSDH5mkvnftyr9ALzNQkDCoA6Fx2fn7WeghaXtmsGFyfpwzjE5LPMG23JMi2huheUFcgY",
  "key3": "4JTEz5pcUSPKc5shMuAPhuMTk14Gkvxxbv8is4M5SKvGo7LRLjxj7AJHn6PXLtHiEamPShkqND2fiborev36A6yx",
  "key4": "rtYN1C768CjZ48d6GDdyrmSEkgMFK18nNvt9yNf2sJNmrTRUEXjvFnXyzdaXzTzs9BjK5A3utgfRfPtny4zYGhn",
  "key5": "3iNGxmFTcXyK75AgXK8YAi7R3L2P8xJrNC79q5zd31cfNXKrD6fBN1LU2hzrQYK7yEEbtyhXwHNBjqpxAjiRJ4bw",
  "key6": "dVnRHYn2eF3z6ipQKwANhjDRAR4iWVRTr8NXgSjfYrjwVhkBEsUATVDTkN2bdCiAWBzP42Uq6d8bvMWQ4eCkr4X",
  "key7": "3bDedNqHEYYVdxbkodeLtSeYtYX2EViPhTQWNwZs5RVSGNLDcWfbz2Ui2oUr6teCawxmn6xAztvcaUeHYgNHPmo4",
  "key8": "zTf59HwZwMhitSXoskMqqAYUBpNs6M7JZLmkPUoRZMHmu49gqaMcuMyk55c4vt9PZ181xRHzzKZMc7xKwpg5e9E",
  "key9": "4g9oFCUKuMKAebSpf6BeJLojDcmjGiwqW2Gsp7oeAK8HNueFi839abwbj2wNMiyLm3AGBPjkgYUgwoqjxqJw7jzV",
  "key10": "4rk8sc6qymqzGMaPP8Y4y2qoDWtJEYKbVTu77iuH3LZ6tjRLB8oTMhebgW2gbdKbeoQtMmpwbVjjKKrsxLcd7n8k",
  "key11": "59V7w5J11Af3YtXj9JcxTiPjghtrpPW5YmD3LYTZweZka78bDg59UJhBgBb7gBHqGFx79SGHr7qNQmVkGsHLT5jB",
  "key12": "2vPsgRqv4th292feM6FKEsrw1efGVDSXF18pXLVupFcr2rf413vVSXgG2ere2KJ2TZwhhmNXgcxsv334y1qqY4G4",
  "key13": "3dY5JTRVp6goT4ZZ3dGAfQ7jPBXH9uc37wi6TbGgdotPiJiRdTyPrY8b3hGimNBzMyF5z9qxPZ8ekWPUhFqwDVZa",
  "key14": "XqtC97c1eag2dWeKMRBf8psZ151Htg3CabasZqkEezeqcroa7TuQUNeWRSs1Wg25SNj6d1xWa5j1td9dp2DWZM7",
  "key15": "3r2LitLS9DkdVrCQTTy6BCvqpsuwmHnaDQJRCgj3Niechwu8jCQ9ua5io6pyML2cwrCLRQi6s6MnNFsyrUYue14x",
  "key16": "32MrpZkuYpLSbKQmFNvRQytaC4SGpyqw3BGUSiftRXWguapKsR3H88cDgktV1x7a9XbiD6fxcrkWQ74E7bEoDtpc",
  "key17": "34zqukgm3yV3WMuMQVLUBW4rfhA8kMhoMB51Yy2bSGiDk5pZH5vxcTcbv9dZLygatKm2ibcwJ9pnHLJxYmFKBRcz",
  "key18": "2haVxnAUgebhQf1GpRyyUjYgHpQyZ5PvHUsSumqnNSALMjCi8C1SSoAcyq3RcktHJ8YfmBFSiVACMNUeYk15rU9M",
  "key19": "41Z1jLqRCNHsANPELDvbCBpBi9vJ5iYRGhEJeB5ndhqXSZXodgj9Gtq8va8axBxogeBsTE41vNW2zzin3tUq3wA",
  "key20": "3VsG3ZH45JrCNrq1upW7zRp6yTviXdibcj4LAMxAEBjTr1s7hENitxSnG9eoujeyNappCV76pNUC8kZiyzpz9wfP",
  "key21": "2hnwBGQL8N1TWTdjksAJdQUxwQbrE5iirK9wpa9VfiaMUZwqbxS8UrpQJ1xnP9DRHYKodZdfpTrNerbZeNn9YnM2",
  "key22": "p1shavCas9GzrqKXF6f7spVgqmW113WiyqBt5cUxr4m2drdixJge8ZzKWu59TzxRL71HhdhkDsvtABMrB9wE2iV",
  "key23": "5ze3ar6KdUAM4X48HxyYEnofV43vdaN7MhT7HTqcG2D88PJkzgZWnoJ1GZjzaJ2nF3apNZTA3cATViHcD2zxiHaa",
  "key24": "2rpC9BPVmLj8khHo1dMRisz5pqtCkNti2pExBERZHF8VFwPKkpSZ5tSPHaGSEsNpm28ntbrPmXfFRccXouPfuXFf",
  "key25": "2AAfZ7UZGNAfsAxVnUD6A67KuYBCxWEzwYSJgCe91ffYPAPsARMEdVFfJ4BYnzx38xvf6kJsUHNQD86yvBNVcuSR",
  "key26": "sw1MHq95zcznSJLi41KFH4wuZVdVYScY5f8WggLG43fbCgUvRSxczonAtPxwkWU8BVCbdmtz4twmmKFLZPzBjSG",
  "key27": "YU65iikcDRzNpTWNhYGZqyArfbHp1tcgGa61BjjGuC1Qfk9utJ5Hdn3MbdqRY3BnqvDkN5Cvf93B422Pc3w8fG3",
  "key28": "57zrhGqdzWyiMqf1Loyy5EV4RamWtjAv44pcQtwfi28onDLgXcZbgXHmUpespXHiJEnsh64iJZbpnx4HMb4FpPmp",
  "key29": "2Jm3ei4SfybMHiuwkJw3Pk55xmvAaBA4RvXde4TzT6VaKhtsrAkb3Uacwi9mnNZoEawqs9WiNJaNHE678XfLWhzz",
  "key30": "4yUJ9tFqKsDXDLuFU4s7C4SpTGv16T7Lpddk1VCbDf2H3QgkS3rNYsPTPC3gtjd9AmKZYzwWyXDJDn721b1DLn9F",
  "key31": "2ncutwWp8U7JVBxDP4qMXpbb8ttxRVGBNn3b3wW3a6jE9775144EbCGWXP2GXHfhFAsg1vZFqMK29C1kmH6uERrP",
  "key32": "29Bns1octeYhtuHxGQREL2k78NXMv9X5jNpJXENhiwbxjaWS27WdjzwB9PVakF8698FGEfbeNrMozrbVmBDCvXwm",
  "key33": "5nwHmP2hZRWRLik7yvYcNwWwp666vvwLumEymVdsnhRHsoDnvyRF94LiX48ALAcyydi4VF9bj4UFsWz7bbcbpz8R",
  "key34": "CxJE3fCWs7cZsaH8s86PwF4ZzSMyXU91eBduSsC3Zoe38sp39Hcd8GoTR2NTFHguzYWNxCzZiaJNC7nMDYT7U26",
  "key35": "2k8LbuJ1WAfFP5yAszVMmNagGgoDTAtWPnN6bRALtJ6UAUyHPdeTatRQhSurYZVbWcSkR3akmUn4rsUBhbYNpsaY",
  "key36": "4RxqzmqV7NyGtG7mpnoiBvrNsHXh1oNWcpDpUd85p2CJPJYfGa21KN8dpMk1fM5sL6zVyy7MCSwWy3UL5WSEo9A1",
  "key37": "5CwFqP5mUt4abjgwERqPy1tCkmRgYka2agoYm9VgEUpn1DxfvufCe1XvQb6MyFCMcdgo4etDZAZJnxxJQCYxLiLd",
  "key38": "5CWKufnj7WphDkpvkM62WQ1TeLTvQuY8pYaZs3cUDpZYAFA5E38jMRDE2nY2CZ9jiyQx7xDUVdVCWWpX29XewpqK",
  "key39": "2qRgw39ZzKJnTSZA9RggVZJX2YRhMjk3k21AEWj5tBRZYase3j43H2pHgqARkB464cTxMhmLt6r8Gq9kM1p8sZLB",
  "key40": "2CbQkognwD8zDXxxztxo7YD2zLeqoZG68YxcJZdcSM39CSpgRfQDpVBZKRs7Sz3h2qAkd1yh74A1LKYmWBKkD1BA",
  "key41": "4RxG8GCAm6N6vu99qyBeZDwhgLeby6kwxM56Cm8r3NCgq5K99YubDuvyy4hDCPy9wNmPYXzMZFdgZZs2vzNUtQHq",
  "key42": "51s2zcRyrhwk5CfVtHTs7E7tRpzwG8fNfpvXMK34fgvcq9b64oznSDiCeCU1E2MBtsJP3v1hf1yD5dxcTZ8uuJzS",
  "key43": "2cj5NpGo9HXnEqYd4FgZGdKFjRJqHXhhahz9Er2UthSppj5GaFye4zN69HuWY8F8eGcnXUiQh43dnftmbdU7EB72",
  "key44": "3qtixT855QT74siCczzfPmjymfj7MDU1cy1HPjRRiMpog4vMdquGJPqjfTzsRFyT5BTizfTvXLFLWaqfMbv4Q9No",
  "key45": "3vX1k7zD2MDXkgTrAD5vWXAEFiHKEV7shUWKpC5wmwTvpqaWnhyBPNwpqjkNZEmoCK9x6dwYCriRVpsQNqVq3Z1J",
  "key46": "4U4WAuj2DdstjKwF1vMcmEJ5bPHozv5fr9VjZbmxdQYTFrShsTGVCwc7Z9dEWHZK4cVrhw687FntMdHojGW4vRAB",
  "key47": "5iKor7DqqhCTDQZQGsP2QzC8HTfpbhRMtMQgkVJf5CrKdT4QhKT16XimQw12bUhiKF9jtHTCVLSgp59R5igD49q1"
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
