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
    "63R4s3FYM1ZKM4f9VGEuAdiSPCyZ2938624V6dpJNBeVARcNvF8VCUgr7y7RmUZ6hvLKeEbKzs5jBvb5ArNkkKye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dJp2ajLJz8emCoMJffdkb65nPhfe5qTzhEJmUoHkxj3K1RastJDhqRgTtpJ6xGttniefw7EVgg61qQsmBcqzERT",
  "key1": "5Qtd5Y2fYbjgVviha3npNNz3mrnbKEHBKB8oSPhwNECSDZdKEKXWWHVJwNXWmHfMD6AVf8Jov9jkgMJ25hiAbzS5",
  "key2": "5iDzbiSxtqXWBroqC6DDJJTq1kWCRUWAGQf5LRG6PSYUDPjNqqBmfxfqJgWFw5hgb1ysmyrPrQG8W5VHvNn7ppgT",
  "key3": "4aKzRG3ZXZnew4gZFaeU66firiEw6B6LhfKZAgG2yFVPXT4vQx9z7f41C5yk8zzDPr5Ntg1ZiKaDLVZdM3ZDJHY4",
  "key4": "2xf5JnTezycaoQTKvgJaxBCMxQsLyjRENUkruFjz9c1MVRKv9VDjznx1phAsad5BXWu9Vz5gj5S56Rj1fsMtRWKp",
  "key5": "5u5HCyfBFyRMpDWoYT4pnia7Y7mq9gSU9j3LXnuSFACQoXN7Rsdv7tZXHXwVtiTDQccxAupkWTQsscnNidk4oFdD",
  "key6": "5PyLZ9gPiJQVAF9RzyCZ6phA5ch38zi92yFxuRHBS8hK6JGEgQFu7p5M2vZcddTzfcXHYV2JtgRG3ZdE2sRxpxsT",
  "key7": "24DwnzmdK9r5pa5rgUKJyfGbjotvZQ9ZvSxCVYMcfQaQWen5hbo1qqMnsNe26CT9P6rQ3Qqhib4571SSS5puV4Uu",
  "key8": "2LaQrTaqi8tGv8Pe7o7hdQ2Cqvb3eUFfqVHuw8BdcHxwrQmUjMpounJckpecDU6PcApihfAUEouX8qTitRPH5mMY",
  "key9": "mcvnuxigU3inHD7GPYa6MKA38Wotgmm3ew5F5TDXSVoeGsuDpkhVJwWexwVgU2TnxRmr39cpU7DXkeYM4kTYGhT",
  "key10": "57br6S9UUqhAwbKv5S8EY7FKKatAZN7nA4Mktm5gEQmsVPN1eLkQM1qUhsUXE2vTiBbCwsJkutcLdpPmGcc5XpjT",
  "key11": "4sj5XchDs1UY8m4bLtXrGKP2QeQmBD5E6y6Qv9AuKae4cuowwxmABcY3V4yqHKkgFsFYLsLUrm7wofWRYGQUQRSq",
  "key12": "4EgbVeAM2U1HJCzsKDyJeHhYBAiaV4hBqaEu41GeTaaeVioer9SduQpuh6Yqp2g64pLCs4rn4tWn53zpEaieLdFi",
  "key13": "2DfuGfsWaLXgRDkWkzpqybLn8DKA4h4pBfXmiBftAkJw7tkzUkF8Fg5FdpiW2ia15aWXyJtGrbgcuWJmAzN6b7Xz",
  "key14": "38PrnkJFsspKdZbRCusRCWqRHP5bNRD9M3WCtKnCfTnMoNPr9DmvUQwk2XzPVnY3rEbeiFRWTN6aq1sa2qk1XeFC",
  "key15": "5T5zUYHjZKiXwfUnc9pVkh2WaA1ZQZufXooU74RaauvXqXBXq9kVNptUGd8kUekazpS2a3JciiZrTQkra9PzxA7b",
  "key16": "BVWDnQP8mSAWsHqM5vrejtT2eNHW8hsU6PBTU2PvQMMjR2Znsv3V62eGXB28RbXG1VCyonCLVpR7sJqX3uDs4vu",
  "key17": "3WHcBuHoQbULDdk8pYkhuJ1nY2ZeP5wYTuyxnMRxjGVqdU6Fimsq45yCt9nVi9AakgE87WoqNDHxDCt31F5hHHj1",
  "key18": "3L44EPmMyrcTACxePMdnoqktry9n8Qgk3D1ih3QmacR4nwpo9KpBjLrSmT1PcXfTVZibm14VBV4iZM296wQQ4ZP8",
  "key19": "5dh9susAsKTSadxsPu8cqH6mqCPMgMBRR3AhSoSUg2JJdz9b4aJ4wwYm6tiqHFfWs7tkZBh8Lu3nAffVG4CVmsxG",
  "key20": "5Fx9uUugVU2NzYqRzym9UangpKLJnsNYKf6c2oug267YYZqWbVaycLHHcDLy9mpkHoQwY5rhd5Z7RuRfBXs2a3Fp",
  "key21": "BArd4LtSwH9YkB1hRcDtWXHDc5raHG5kNGcdSi33kiEDFaN7cpGR6Mdoz4FtVRYufYcg1dCKrEh1Rq4Fd9F8Gvb",
  "key22": "4SEQnNXZyEeaU8wwJzsgcxgPwrUr2sPpebjtHbHLvTCBfxeTPX3kg4rB9hA7vKERLse2nPuyEMrsMn8buNYH6aZ2",
  "key23": "VE7WDYUJsQN8Cnx9tEMnYk7pted8J16MyCfhejKtpDv1AsPfZ48194ukvCFJD1E2X4rCrygmRd5eg563Gzip9BK",
  "key24": "5kSTMhAKXVnE6JrEALcZ9coUWJfr2H2u8pyjwzmfETKPDxn8k9pu9jsJTHqocECDSHr7tekGNVMkG5MaG8uKFzYw",
  "key25": "4EfMGm7zvB4XiRD7hCd23M1UgP13wruanmwdLVq6kwqa1zh6dirtveFLAeLXqQJHsP9WJ3ikRvTJrcYyAo3AHCHu",
  "key26": "3mDzLtHCVUCdUNjp9eWcjB6Ec3Jx1rVykJEotnM91Dp1ZbaGitKSpy8SUb7mVqjw5t5jg1rpArxuiuwfpXjC6R8G",
  "key27": "4QUenG5H2XMyXUjK7MsrKR4ncpe87sbs81tLVPG7Qz6n8TsZXeVZRoh1QPvQosQkAqSj4amBCrXoYrcrU4cN4BTm",
  "key28": "5sxyujMArDHPn5twA9FeCaJoug6JoikwKzDKDrSCNAp8XXb5EKdNscNzJkYsRGQWHqVakqHvHRPts67edFVf3zU1",
  "key29": "2Am28JVPPNunmPkEBpcsx6rh94PywQfrgStraYgA3A5Sm2h32ZqNYzzKXQzsykg3veacFJGHf3EU5xWxs81c5CcW",
  "key30": "2L9dHWR8YU9CNsU1XMWLPSiXi4GrdWHuL9ME7ChQ7yNscJCj46rkLbpzn5QRZpD49ziJTnrCayk38ztrTu8LSfJi",
  "key31": "TsnRkxok3uxyjkhwDoD3gw1FRZgjGzCMUEbnKrvef7pNAJXFByh7gnQr5uLMWdGb9H9kc2kaAY3U4peWtS6vtJf",
  "key32": "5nJ6gDTihhBPf6cSGFiwu4RQRUZgTxniE3T11p2MZHpw2zSyFEPU5BqUFTdjpmAVcqf1gnXu5818mGAKsMRVNgma",
  "key33": "ywGbdg1s598gMWdnstBCozzuVobm9G3kcyPsF78NgJV1PKSVk38DXwf5zPtcB79Tmi4EjKgfvif3sAeKKnpbFvZ",
  "key34": "3o499mNXwbsJiWVU1YbkkzhdovtgAGqoGpBN9LAMDPdJF8Ch5i31juTGUSFBhugj2gzECNDvQzMBZ1MWpSBnARpM",
  "key35": "4UWvumrGSeeocU7bxSWD1n816wubesjSBcSVbAdDeSo2dB6e2LMKfbs1CwyVX5iLY9LH1vTfNuHzWzNGL38tD4fc"
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
