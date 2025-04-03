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
    "5fE3r9eZ7fyeiJxyAYmvGCcunPREJGB9UVk7AVW9HD9JaU6JwQeh7CnqM9UJzwT22HrkuysWNJnCXUhwrRuvgrhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPED5hVC2yWbcdLPXWbkaAzReHaM9Ui6tRRw7pm1zZWxmojHRbKAvWZ82gqHL7yqiAdJeSRu5Scp6DKwcTX6BT8",
  "key1": "W6T37rd5HbhVr7SZ7kNtgye8mUxmuDrC9QXr8VFS32drvyU5Z3zi9NHuRdUa4ndYiyMWfYWPMfX9SAv59uRitQe",
  "key2": "GiwE9Zha3bRYBRxo2GNotXYPrXhWfPE4GJoS21Bnrx1nQFJB89CJKCzesNHwpTA65JqvNj4WqPPRrVJLvxS4oUu",
  "key3": "2pBLWwGb8r33thx2AdauUx1m6hAQcGZ9dKzUEbYkABH1MqdXybbo1n4BPu7HPYsAUsJQ7ymeQbCeXv3kd6H7GEyZ",
  "key4": "4XnZDEwwioDboGjbNdpeXzHdKVJNu4TtfDEWgPjRjWP479YNCQRXW1mSeRdcTyRHgGqhj3PJqPQjExJKZ8cDUeFz",
  "key5": "9rcZsUVP8WkB9jQGbL9qqLnEBKUwJUfPXVQ4fX13JKMujuhmaXpFfpPSjqtHsxnEhEHbZ3gt4W3LNxUkiu2Vpf8",
  "key6": "kL6iLYtsokN3i2fQgCjL98ogDAPFudtiyAw8nwPLwDjU9NYWSZn8iZg9uhyWu5DDxJJTEpThXcCNwKgZAf3igE1",
  "key7": "37mAbeRrYomb7EppodtUF1XWbHNRUpUTqeTifeb5cKaGh4yk2aeFDjHJ71WFwaPFyH9LWPwPR4qF1gKSk11nPzM2",
  "key8": "5apCsjaBwyBsDuc1ehJMbp61ZbW6j4rEN4XxYzhmAJVVBtJBq4u9GUeLskRTeKHyXTuJQTwv5PbASn7wQCiyowf5",
  "key9": "N1EyeBe9wR9Bj46GRMv1zA86WoJBjWSDkjyHsyPZDNQhtHzHMdgebhjSqdiGmwfviPdMNjn15cBkfSYQCC1mucx",
  "key10": "52TZarFrcKSCisCDv4MXsyHX4BMKe96rjZ8ENoqhJHykwucDaJmgaqut9JhiGBufBD8oh8JgmSGXPEWd5SwvTvcX",
  "key11": "3DZ6Ac93EawACGAimi8EFav78ex3kAH3VdcYg8f6L76vQRNcRhdgYtUgkJk2qHKNS6MkUT5KATWKVCYesaTKvCw9",
  "key12": "3xBDnMmjUvJohnrvDNrAEDCnQ25BnYRMJfnScExf22mfhir1oUDsAsCB2Qwfe2GDqHeeQFUgU5fHityzPRNSh7uh",
  "key13": "3gjwLN8fMkdWc6pBvK8Cq5d7uDVz8Ydvvh2EH5MGrDpn3SgiWrgWF2r2hWByfTuZdVbuWoVWgtLkt3Zf3X6n2AbB",
  "key14": "5H6MTK3iQk5D3pX2dstjEzpusSgiw5aj5j6dxdE1z4EQx6awhfropx39LvQC2PDMpQzWhWrYKXUAGzYXLYGnsQe",
  "key15": "2BQFDsBjUbmiPkofY6Me71ryXAxjhtUiJT4tdQ12YBnKoDTBVm7seYndfiCe9ZmNsXoedjVU3RU9BVXLuHLjUfQR",
  "key16": "5Uf1DRCy5p5Sn82NrDAmtJLyf2w41qetLVLKnApvoywHfqT6hSGQKZpxwaVV5e3BbMruX53YUYvtkkQ6UjquwE2m",
  "key17": "54g9Ug8dvMMVT6Lpu8DcLWUNWGmrCd5NQa9ZBLp41zKYMkVEyacRCFaJisxLByq4tjf1zWW3LBxoJ3RtnB9hufcV",
  "key18": "4qJTXTNcbbwBwFa3ukGa6vaQAJ5m1iTMpvRHccSrH8S1A1oHcLbgQjr5oEn8EwR38CLKCN8HnvG9PSbz674knrY1",
  "key19": "4Wpb43hgEYtAVP3K3Dg3xKxbs5c6xSKFq4azGBiMkoGrWqzaPBwGqQEXX5F7bpT29MBtaSKYACvfGEtWs8RnVf8P",
  "key20": "2JZvvyEay9Z5bjpbz3Tp9iKxYNKRtmWWhtF69iwe1MQAvuwGTpyUHJUCJAyopNV5mUJQzCc3bJRGnJbZ82mcjTM3",
  "key21": "2mMJ9XY7vYpH6eHcdzZjXe4SWuWxjGqfJSia4outsyCVdDYwDT3VpRtfmqrn1kp31Tstm5zZj7eG7gppeUdU8Lor",
  "key22": "A9hYokjEaCEvYwicVhXrPHGY6GsjiEc5itjswciJvKu4USTHwrqppCVFyTDoEHtywizkT5cjGaUYZnuw8kh8bio",
  "key23": "3D6UaHjwV2McgzzHCdBuZJdS2cLzZAS82PytV4LETUpzReCsojLNP7DebyFZvNcUZ8W9MZzRSRuCkJdHZ69ntK9Q",
  "key24": "3Hb2zserfxexsAaTdc2NkiHP5UnHcUw9kEb4XqdtPqNXU51k8NY47jV5wCfb2BAA2YJ2Df4hrbQE7pbrm4qAx3eM",
  "key25": "MYWc4wJ83oWRWyauMxzQiHXSHf9SqDBYpFRvPGVZWqLgbY1PSZUQZ2Y8WxVRzaj1JC9ZjKujKYAhDRnk2eohEUY",
  "key26": "3F7xzegEtWC6aFUie7z2zNWwKTRw63M472A7FwvkBwKCvknqt33zzmU5Pd89PNQejKvyGN6Ech75Qh69vWKhTC9g",
  "key27": "2eQB1BsYCpzK6koFX4Vx65BrRaFxeZCnf4BMJmE8AEcp7VkhjrwdHYuGRYN4hHWV2x5mk1zhpo9ZLwWAUcRZbDrp",
  "key28": "5ZKiomk6vQw9e1uFSdQLWCwLtqC5iybu7SUspRaYokbhdonKxXZQcitkVoqT8p7W4sFtSFnz1T5E6iae7yehNYpE",
  "key29": "5xPpppeVGgaWschPRqSL39darrBXiSKA4QFwGMd2t9sFySehdno2fSqKSebax4cNxdHTUDhMZDKM5jnojWFyoGDR",
  "key30": "4F1nNmEJBptj5tsuwJGL2jYB8MvSq7wkeEefutmHrnqjAwEvQNMeh1heG1yQkeFQn5HLoTBDCYrb2Kp5e1fiThY",
  "key31": "64P5uQCzCjTDufmkHyjg2K1dRzxKMui64jZabFwqTpZ8ji8tHponeE5VANYDG5mkJPyZe5e3npfpLEKi1WE8k3P5",
  "key32": "48oiXcTgMKbgZiJQ6FNFv6WWjvJCQLmPTbLfe8TvCtKuLE1314NqLTzArQixXCxMJxSUd2E8ZR1Um6SAdNfgT47V",
  "key33": "5M8qniRiQyaMmgWzBTAEfbZ4oC318TpsirSGkGmZf2DbJmUU9gWNGfynmDBHkujY9WpzrAGY1Gy1UEi4vq6DZ3Bc",
  "key34": "2ExR8gC8VctEYm3K3MDJHjSN6CaMeTujmjPQAJUCqKnwnzE1qxVcBM43fRd2nydxaRViRbhFjNaVqBLbG98UWvvH",
  "key35": "2QFcYNL28HQY7ZupDkHDfJAUrRGh9PDWn8HbdH6tRf6bmWmKJtH5TiCRQCANNMQRz54Pw7T8ZXWU5qcgNL99vMa3",
  "key36": "5ghA2HgAfcHz2hytQZKos4ry7sPgZsw487GzmsdM1fYMVh62sESzVmAtfyVBT4CHJMuTqyhA6iQrLppAqkFM7Jra",
  "key37": "3f69ny7JWQq3EMSTub8PkLSRLzCCpJEaKvheGRaCFdxw5s8WpMsdDFD2Aoi6o4jE3oPnREXgLv2ECmxPoHEvvsCR",
  "key38": "4EDgUTvoXUDa4NFVttg5QCxzrRyEzqEfXTVwq7pKnsTrVZopcF3pqEHw2DJywZjdkHtZNCLqdDXDP8Vfspjg3i9r"
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
