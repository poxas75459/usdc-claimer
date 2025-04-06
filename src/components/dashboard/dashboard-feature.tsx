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
    "3rH6aX6F4Dbyk7EV7RG9TUBXqLmr79kCgMNrPWzreFV2cjPSnMk88zqUwQybHczqXi17H89Uc9w8nT76NbaNcquG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcNQw5AnrkQAXhW4a1s2Z91fKVusJGFBEyBgyu21aaQMWkEFNyRK32DwxfevwZrEdRPFB3Yzwg3ffC3XAvZB1J9",
  "key1": "3nBybccyoyCgcESUzS3afUz9NwMvZ92tayb3Hw3VfZWq2Y62p5ND78so3kXtAPDAreT5cPpBsHWr3tCv3GK18CKE",
  "key2": "3smqK1sARGVgi2DYLrc6QN5oRNQ8tbbLz6MX8cnfpkYsi5dAV9NzxyuNZLxMGiaEsAXVHZ8k9AwAMRYju15am3Cq",
  "key3": "312KBeGvMnc6rDoCrCZHPd2PtryEv5GZAHUP9mX1arW2p9i1gXa2CoMBEi5ghYdt7RxPsTQZyqBJyLEtcFjDwcFJ",
  "key4": "3U8FVh6TbRzF6wxPXReDBxcgH87f7wp6YgLZdo44BFdKfwGZCvUA4gm1eWuburCxJ3bRMgUuG23kbnw7U8iVmWLh",
  "key5": "3CD1dCW6LRJDkjtJAz4Q1FTGMNif9VHpmJUBmaMzfDb8fCNFAcp48ePEq1dvePVg3KmDFpsFYrB1w4LhgRJHxoeR",
  "key6": "46oahkz27rhz7kZoXtqDyXTvdFhMk91sFtmcwH3uX5EVuDy7kJDBQqspaKiqWa3ZYFjt1dbZMMygUX2S4XQ4o2mb",
  "key7": "4wXY5KjgM1Gyqqvnnrrb15tJFDJLEDJ3NXhfA4ViuPZH2shZXc3Nb38jn92Cupde4fR3nFu4K5NQREezcVQYeDXv",
  "key8": "hoJ5dsK5scW6eJu7nudHWATBgqkhmTnLydGKJFSbBYBFqeKcA2dx8MccifCQT4zeLLTwontxYp8ipN2Z1awfpjL",
  "key9": "22dGNFyVLALWPh6Z5L8iLVUutJxGtyFPyDDkG4u5iGMwWraBX37ULkt7eZBMDpBMuPkw2Ur4LV7jrt4v3NDpcg4k",
  "key10": "4FcF5pBeeF6C5kFuQaRs8CsYXBf32FT25Y4odNSuqVpxgj8sGoWzbuo6zFXvPdNMQLkb1iPjMfARLgBLPCQzQC1j",
  "key11": "2UAv8nhQ6ECSWHxv1qnMeCWdcByrC2zwCvHe9phrPico7VGji9rsAppxo4MViGQLa4gpGFLU6PxpX2HXtkApDGRB",
  "key12": "3tYDENxYUbEGTz796o9T9ifhgkWwXJdmuodKhRgx2QknAYV6GVUZEzDmcfr6icq47i1CLbzxiJaA6UL35B8yV9Us",
  "key13": "4m5ZDXAx3uihTWbPn3XKysrWRmaTfFHKGJjbMDSUvG9hAKc7UV1R2VZvkrBxAW3j6v61fw37xmvHtnQPmL3QovAs",
  "key14": "2dPmC453GTFGVZbVFcpK6hqMFfHir9aUNRaNrGdnp1Ua3Ng8BxT7EpVCufWHxokxSFhw1FfbJbxSVyGUjLdWozsk",
  "key15": "3sGaPZxq8FuGu7ArR7qqbE1fKJdmf9u7xMMt2TePrMrbycamZMAGLupVAaWGjwiCKfNwQ5Bihz97HDoua6FHKre2",
  "key16": "5dsrW7LwVferaRttLSZz99F3sA4V68XoJRgCVBWRmFjD7qmAPKowcU49S9p6b7qJtoHCwv3wFZkhCdWJiQyNEm5X",
  "key17": "2Qk9heNFKeF5rkMJ7q1DQdxmS3wmn8FJh6vqc5juDBRjAtcYUH9xPpMbLPxWzN4vAxtz5UfgFYn8QTbkkEeRstK1",
  "key18": "4kWArfa99URTNpvFhcntqC41ucYWBTViPX2UYUMYEMHeS4iW1xftA43yDsJkAHLUcNtP3ZSXZCmvQyR1z59FwHtr",
  "key19": "2AZFdmLbdH2o4or9MBffB3Ta1JYDcm1arWE48ZMLPMJXQ93Yfxtx84hrHmZJ5UAEmbsiSbZ4EfsYYT8D1tnYYeYn",
  "key20": "46zgSR4LVp26BoGJFXeGjTzLspY5GyyWMDsetVbVypcH51qCaqtbZxxga88kd9ZLZBrMsWcJgwQm9UWNMpX9h69g",
  "key21": "53jAoDARNhLc3gsEqt2hoiNko9t6A9VgFAaizmse1daxqh9CoJtj2AtCb5k3NKt9NzMDMRC31PaSVqLpMRzsNqXn",
  "key22": "2RBX41o7Ec3dUcKzmDPkg2KzNzwd619CEhjnf7J8d2s1ynAUZ9W7gLvts3qd9ZG7q4bYUu1TW4Mo4vwAzNqmksa7",
  "key23": "5ds3p4Ay8wXzTzq5RbxicgfLTCVNVSq9rwe6tzWas8eKNAT8Z3KCZXZBPxMDJMA43NYLPNjN4VuDNMotCpMZmpAW",
  "key24": "5SSMJgCzz9vq7oBpZXgyszfEVjVPbatpgyw29mtH6rTMtCjaNMMBRSuKFx4yToR3UPGWSKiWoEJnGYFSVjFmHc7N",
  "key25": "PUog4bEr4pcxK4WWFr8vugCAjQWUAaDphVg2uCr1CNFvFYex7r9YgEdsUpLHdjbPB8sZ6tVtqhEAhZfdb2K5Wic",
  "key26": "5rb5p2KT24YvoikmkiSzp6UGkdwnp7RgayAMYiPLaE3kXd4wHJqUqyaCJ3TMjQrj5dT9GxAZkPSwDovAyrWwJSLa",
  "key27": "HutEzXcQkdD2L4X3s1v7mejPVLBVYEfjdE53yDZSzpTSHLTVwYkGhkcdsHdfHxRuyCYQgrqRQroL9zaiBfqVycC",
  "key28": "4qd9BpTawXCJnFyKxiH3TQBZqpSV5DwZs3FCo58HngJ5a5ZoU4LCFe9QYpAQVpefp3w4ZpmxvQVwiRxfiLFLoinW",
  "key29": "tDN4mDAca4aHULZJYktGpW676qZVeCFqxwtdmjahcbbmLpCwqdGW41y39cGNkeMVdm5vXVhEuh4s3a7SoSentg4",
  "key30": "4Fb1cpebAi6e3QTSVQWhpVmJdakiRQs573m7GDjGyYfMYrrpdP2qY6JvHWtm5EPzmbcGPC8FiAwucMNzyenK2VMf",
  "key31": "SoW93VZCUdAJPzU9Jp1kq7x46YHn7xeGmHHuPjkCShzmkcXBDbSiBJTrZZ6HZinKhZwYRZ6exfKbzzABSzeZvDp",
  "key32": "HY7M8pR8v1dBh2GSU8tsAwLYiF5qbbEu3TyVLVwLxGkAW9xqx78zCrTkXACLCsCbc4xbpiqewLACxZAxbRMENgt",
  "key33": "4YanCFmKeyu5dqmDpFNfFtdd2ZbLAGFjhvSwowC2Fm2vFBgKW544TWLG9c5xjetA6jeKtygz1zQdww9jaZSwuc5o"
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
