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
    "59jWqpT6UaUx4v2L96YotNJKtcHux79tXhuWAjnJVLcMPE4L7GuLoR2mVg6eTSNqLUj7ViJRytFmxpnxaZqfJPKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phe42WGuvRjHJijL4G4hHgCLjQRX3h2Wsno9LMN9CsbWGor2wPQF6tNwU7d3XY7dJsqWJo35BqqB7GydV9irDww",
  "key1": "3kCq83Hb7rs7ApajXXKeLvHUCLNWp4n4xLkVx9ZSCBGsHCph2QxgeJow2jsxKBjQSPtoc8ys3gm32CEyU6SuZ5on",
  "key2": "25nq3KKPcVPiyXC4M2ES9quAoP257zaWj6vEwpGg1YLKroR7jU7TfNcddmYs8XEkCbmk91qpjGDtiZpw1ukcvNKn",
  "key3": "xv3GzE8ezgnwpnow5mi7xaZbHiTWDyEktcNBkXeJp33X4J1ZzecWAEK8qSHK58VcT9TJMFaXKjK7KBpMQWYn91g",
  "key4": "4zmf4NK3sSBdmqYC3X9aDAJbYLwJ3KH8CDinR88SqM7EK4ew4ViYfEh7u2QBzefBJtQ3AvRANqAcnk6rGx9bJkf7",
  "key5": "4kbtkuc9K8XoFYs9jn6pmVPjMCjgD3kRrBwfiaiJNRZn4ZsL4H1JLMghrQ6SBbCfxrCAMKWRAgbSP1SFHMq7CdED",
  "key6": "413Ww1GomZ1tEwbyxvE1EhF4RR8Mu3Zm5oJSknkjUFbPMC5Ttv6gzcYDfqSnYEVVE3gmHbP6xo7m7PjaWmCVpgM",
  "key7": "2Kcje4V7j9ALzBRtLTFW6741LsbnNzA8Lyc3g7MFgUPFsMxVKSWnbjYmtk6EV3nSyRwGpuvoSiZq7n4bahDujM8S",
  "key8": "4WQH1eJQ4f8ahfLoZkrKr1jffi92v7meu782H1XsLA68vkKyRM7LZ8Nbpc1KbXj41x9J3HehVp3fqdtamph6dQev",
  "key9": "29yaoUwVNZaitik8DU52bvTGqDyGNe28hdx9nRhJAyviqYG1Du1APrJVR2q5RPxbiLRd9mNQUcTookstJyw6ec5E",
  "key10": "Y4tFB4ST5DChdsRb7SR8wLvDyPrzqh17uZa6Sj7M1sSZxg3M6FnzCbrPKFPLnDa3bPsDTaoLBjcjYtZciQ6kjm5",
  "key11": "4gXxBtnnH6t4nH3ZPqf98HDBLiHu58CbvHLMYma8MjEqPJbVv6uGBuhoA1UX6qJyTpUUeQ7bcE6KS7xPYAMRG33h",
  "key12": "31ikGpPxeBRBxQxNnM1q7KgfAxqGNG9xhqesiUpudWv62ANz5x4V8u61m58FSsz7YDTSruu1jS51H4vVb8MraQX5",
  "key13": "4tXER8nXvEG8aD2UKraGMbLXgHb1H4EFHemcZ2NEn2RRYUMZhV6Sx92KAz8nDJk7wK4ozDu57q64QzbrBedYWNa8",
  "key14": "rj8Zt1UzRfS8phxHSsi2KHrAfTDVLQt7XxRWomQKTTsrM3TxMi4Rcc6EXdd1E29uMGqc1CYu3CFazrpyTNMzkLz",
  "key15": "3P5Hirt16hNqS9HPgNLG4Ur7pVNsmkdf3MWLhVb6G72nchrAkrpDu3jz8f2fKgsSBy75bTCvt3GpBvxveN7NKLLp",
  "key16": "5zsSf4tDDm2biBBSLY7ALNHx9yDJLupBqLW6QF9vmDyFLe35sMc24qixpG8LQQrWoi9HwxgE8Vq7fPyLewe2jq5J",
  "key17": "633KUP9XBG8H86WrkoYARHwnbJM4DRfWMStWx22jYTQNoU9Zyhs5fbz9dr89noaevfJTfPxCRKnRPnbtuYJ7sm1x",
  "key18": "3mC5ZXgS2f8EDCwjpGHRx162BihVXYNY3rKQZvC4TdWSp4hiXa4juKUBg91TF7b6LV2C6wZ7uMtfXvsFPT7NsW1P",
  "key19": "3XdLvxq7Za8zwLVK6icjUYEiSNTKaHMU1SDSUGDBBGZ3BDbu1tBbrMoPWxHX7UpVmFKmWMgwwXgs7DouMdRPKPX1",
  "key20": "BZj6XaEAiMi6Dk2BDCTRWgXuc9w2paTm81KheXiWHRjjWU3gQhq4V2xEyJkNHKbYDiA9sWNWEnCkLQDtpWhaz1F",
  "key21": "4yeNcnAxuZeHEQWENGndBgwmXh4gf4FKGpLZCNYh8rTbX2u1SnfXZp7UG3b6YGuN1bR5uJJciaMob7MH2noJETGA",
  "key22": "4mQjDc6EsN2dbAYGJEkQTC2Hn5ZwRhhqw4C8C7YbriyHj6YYCATh1tNow1KdtvuQDwxYqVPqebs5Ho6nUqGdYBX8",
  "key23": "5dYyiUjqahgoN3mcP6BYJomSRe4JzDG71UTBNnBYqf3Znfo1fAvjrhfD4TRTFJZdKoTZQkMQzXpZdu2Qx2FiYWGc",
  "key24": "4wMb7mgt6wBirZjBun3ouoSDJbxd2aQVwQF1a8NEL3JTDGpdHRFBaGPZyr6krW7VQ5cLq4beTLxef1nFK2ii4vUT",
  "key25": "471EYfAm1WfgUGdWgKLXyb4cBqFTvKLBLfc8jzkkjvPjeuLpPfsvgiT112vso1Pmn38dhcoZHkQWYmDRpMsnRiho",
  "key26": "3UevYrxciePZ7dSgTPoqmxgT5u8pfywPsZK2ujuv7oJ42N3U6nA67a8GTfCUHVDkARW7XY55LcBu3zj6X2jAEVXB",
  "key27": "5C237eZ7RqsPc64DkLtUDjffsU3pzAZaKzYMBC6QYELQ8PPBEsx3vhUVLe5XCJqs6K2PqDHPkFGGBeN1hvavmFjA",
  "key28": "NWN5CFEwnp8CMeezrho6wWpLxLSMvTvsdTr6B1e5FrL1wbFSsbHUsEkX4H4BbsfL4P6G6R5H2NfEcE8taaPThBa",
  "key29": "43q4rd6SSdDqXjoHcUwRQw18Cdt4bLDHA4qoXsrxH5KSxeDfepU2MjBUgVjn8mJVMAvjQUAruUR7eogYbPZg53VL",
  "key30": "5FEg9J6awo6JGH4iNU9QQHE33RefrG24iz59DtvCHL7jAgk8JqgwipnxCpZr6gCmSgr7JodnZhGoGuQXZCrr658h",
  "key31": "2oCzPtRR2asBVjfs93SsDn5pDwzubTJJYaxikUomZ5zpBuyi6cDktJN1rt7NmuFdiMbKCL4HH77RF32jqoyFFEsP",
  "key32": "4RD2Vtaz4aQVAfEUSijo1UDuj9ArBNbsCUq4DapnHqS4qwfYFxDtwP33egXx5Fgt6D5HeHWVDrZp89qHFF3vdP9D",
  "key33": "j6kUciQH9W3J2Zk6496WNt4ppGaLRjYxvS8u5CGE13JG8yMtNPuiysAHHbzb21GM5TdTpAjWYi4gcAX3TMaC2V6",
  "key34": "5aYz896dkfjzMRiGdJNxbwEkq71c9y5jn4YXczASREHo6hyNhitjwHXtsNauTW8VukxFQcdkZNKVRmzVdy4NHH2P",
  "key35": "5chuXJ3mLCK6QP3LGLgoKMPkBvpdJkYrhGSVkkxWibX4PrYdp25Hu3mkEnkWEJC9euS5wAvHTzgJkDJtvSbKYw7Z",
  "key36": "BuzvAcjx6k7ya8qNXfEzfztjG4yq1qtsnksvW7JtzXTYRHL4P1JTwptaaR93mKYuqzL4uM3Qr6bt63ZJm7BkgL3",
  "key37": "4bDE7vrkRMJuxBhb23FBC8fho1W3G65msrdyx5kbYBxxmB5nQoNhXjBN9NAXerYqPa88vvpHe7a3Wb2dQbr76inp",
  "key38": "39pDV3ZGEtAjPPxP3tpTTYsg3QFd4Ri5nfMr975AaNbsaCpuSpSgqbarRfoSDMXGyactkNRQKUVhVoZmSY2x2Ysd",
  "key39": "5SewSpfKS4N6DXudWEwD8M3N6EykAvdUc3hA22WtyCXyrETM9ty11JeBoyC1GAy4xWwe68fFsAGVevfGeJ3UedSr",
  "key40": "NN5AQw5BLPDuUxsJ9mE4aYHPJo6DQ7QooNmmBZGu9K2guhJQQZHKGkA9kF5V9dXSGgKyyGMfe2KvpBMjJmZ83ow"
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
