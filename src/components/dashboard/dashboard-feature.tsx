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
    "4cLbVe62jRYSLwWPJ227nfXh1aEQ8nNZR7Syyro5uZUv9L7czEw1cdkLiKuTXBKcLX1RdxZqivWRFBuYh2k5a9Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwQZTMM3c4zJJoEWPfparEW13gXvYHybeqi27d2MaCXCipoVAFEqcVQANKNNFnJLzfAZmFm2c59UzRE4robBqb4",
  "key1": "Z6VnWBQA3d5A4K5w2smRT9gEonN4ZJE8Y7k9eHCgRHYoc1hkKXdPzu3m9dKcTiEib7o2EZeuMiWVNtaw39h6hZN",
  "key2": "67irP5HGY7rAVpTZym59fEyUBwGDMauD4mmHNFSNdkLfLUTXT5AupEj8bXbZi3bxVn4ck3Xj7CF6J3PDi564cmeD",
  "key3": "5j2gKUGpdSjTYAWayxpjM9hmNS6GEsLhsry3DRdoAU4UhHpyvih9pTyf9Z149WqbTRhm7pK5hYpNP8sm7icksrb8",
  "key4": "2Xi6wYuTTfV6jszbkeGXbTQwLvtM7PECJMDCG5RX4Quxm4rnijDJ3mfBRSCHvjPA76kCCBLot4fEhJjPCghk9paU",
  "key5": "3EoYzH6UccPmdqEwih8T7QJK8wbT53X7fp71rYYoNPfunaHzGDnxoXkvCTrGXT8wKQTtHJ8AxFeaBYkeQfszmXys",
  "key6": "3wVPCbAEvPGKzpCWXpC7xHLrQhKUMJetNEcH8VKw5hKHvWCWCMrA9YGS9B86Lxz1VHHn2kNyaK2VFF5KYQunJBdg",
  "key7": "3ERiyBg9gcSbU4vQuv1NWcNytCyHonityXdrj1xa27mibWPeqz8xBRTWE9jtwj5aJhwHR4rfLKypi6kd6oKMCcv1",
  "key8": "3dgeroZDZXiSgiN26U9rRDdXpQ9n3LYaeyNG33MiawR4ubrnBhyLhFMFJ6kdGSF69soXjSoinEwKPbJRLPM7jZds",
  "key9": "61bgjQq4o76cSYLMUqnApyHxXpKTTuYzY5xpJradMN2ysqBwN42umRKDC3Z54qGtRKSHK7UVWMVTozooHBmZz5s1",
  "key10": "GXdAt1jY4jLekNYmUM6BS7oU7eYMb7Tq8zdCWmw4TUohGjwnBTHaX4iHX98TGaWNc4RsKumZX4KhJx56FWqWenC",
  "key11": "3GwXtfemvoazQkg2AKPXvn8v4fXUwtW66vTbu2kEaz9mRa3LJJD1vWjYp5JCKaYj49tiNFUVjN72cT3JJ7GqqSxR",
  "key12": "UoxGiQTZpupaM94sfm1B6TrMMUUbH5zZioHYyf2WdyZqqAJFU5WTTRLwrFyd45K8pmJRYEUhJN52A2WKsBNmTaD",
  "key13": "26vp9Ec4g54fC9eHKD5R3t5t9GBhqKeT3ekG11yytfMXCMpDPB9tDLK9Lwx6efviaFHeLwD6zmVwuRkoPc1pUBcU",
  "key14": "tpbWEuN5SVMrf9k2fF1W8Q9H9hSQ5DakJ5943wfkb2JL3N28M7rbh3tazy88wLLEviu8mvei2k1bRDYZVe4MJkT",
  "key15": "4uG9TS912dh45j23m89YVEmFXiaQAGRbFezXjSa9b3U3WcoP6ix6eKeeHTSrE4gguXUy3zvCYy7W2TsjL15TMMpL",
  "key16": "3Wgvn36gZ2WW4jSwRdHTaukVnZmiskf4muRDnLR959CtDDLE2Z9Zcr6gZNJFug96SUVThx146qEunnpg13848Hbj",
  "key17": "5VExPosFXa6HRDuTrnTiVcyXM5TbVPfyFHtXd79q9f4pphi4H9cmzVbeCtR3Zb44WLqffQVaJqonhDZRcwvhmKQG",
  "key18": "5NsnbynbieGJ4QtNEAwgYUcNEqjEEJEa4Lza7qeU7f2De11Rqv47SbERjVDDVoynG1MCzNPEGCLYtWfevMLoWmEF",
  "key19": "2LafKUiVHFYg7Ugpo4GGr9g4jevMnWZqGBWBu19jixRtLDrjkU9QHzT3WYTwKsDRkXFjeg1cCgYcfMaXut9wcS8",
  "key20": "3xL7hJsa1jM5fsBr9rAT9yyKe94iDZkqJSLPsEwUEPuFSCdY6CBwfoAqaaifqK3E8gG6MHqkFRJ4uxCwdXCucCum",
  "key21": "VReU4YQb6zZ22kQs5yDGzE29nnB6Do937arqRRTVkkdHfAjpXszrBXXtwzbepDatxeTGtSaXrwp3hyXZ1iotX2J",
  "key22": "31ztokAeCq648Yc8MJ1UGF85ZauFLHT5ahvgRstsuncoLJFMurkyLNN82SDJt8rDss3LyhDSFSLcgFEHeHN36My8",
  "key23": "423dDwHBjCtuja4Z9NTcBwodPZykX22qPuUmSVxJL8CPmQG7gPXNHvVqcJvJUdGnAWtnH7stP1sqgDfNab1dkZc1",
  "key24": "Ktd6HaU71rvjn4r3GQ2kvLiJrufffjSCtpDa1hZvbc51KJ3oARksBdBRNFtczYiAfGkFnxmSVeL7oUwdXYEco12",
  "key25": "2f1qUC3a6f7m3qEhH8tYxixPghdxDhtaRxKSiX5fxnUSgrsAuNb5sn6o6MuAq4kiE68mdGqaQX8vUPJ2NzNGK5gq",
  "key26": "2V89LoQ2dSXmXJatuVr6zt8yjwLk5QnR4Ku2sMn4DrPJvRB74mpcNA9v4GjJCRH4syy7yy5GCkdntqHY2WNtcAA3",
  "key27": "2zMNNbiXYKTb46L2YqAeNCwX7NVrn7cPETC8emRtrBAfjpjq8EcE6wCHb1JNd6fKoutRnuuGxxpcXChWjjqm9X8r",
  "key28": "3yxQB3byGXfMUZRuZvLc2UbRpaJNHbv8AXVbaPU5RAZNp4UiBWF2cqGpv88yTe3iwWCpbeoaDyDMVcszxQ9wBjFE",
  "key29": "4qNQcyMAaxeEsT8ovWH51LYhmpWwiw3r6FcneQNTy7A2JS9YECFAU1j9zQ1oPt9EEHh4NLWCQWFddKebWFDLxj73",
  "key30": "3mdCf5ey9LFq668VTY6cKzsuQna93PpshG2FmMtw6PtogKy3vVv7BaoeDh3UZuBkLAS2uTCdwD8erPsbJPWf8RZK",
  "key31": "3iQfRC7bvAXZyM5kfZ32de5WVUxEyaXkrYBfisyeuokU16ZeX797GVEvnUGmY44fLdDZcUeS5RWYwXEiStRWpUmK",
  "key32": "4go199odwJvZoGkHtCdkZPNfhYKbMdpk6J37mP8X9ST7Fvss7xgkC9EjP29ebsBZb3nJcBT66YVWth2y5pXEfuT3",
  "key33": "4HG67uTdoeohK8485aZhJmNMTPHkdcTnUvkDMogqff7Tb1RD7bYZDPH8hV2ysyUApLjvZ77f2yXRzYhVYKuLfokU",
  "key34": "Sx5Huess24omVsukHxQf9U2ZMX54Nsy955JYTLDj7mGLbm2gxWsvofY7ZdnCpCqF61h4NwCLA4RR4ndMN5RUKjA",
  "key35": "3dwaUJ6Mdp59yzYPjAmTp4kNPzC2N6rXQPQ1qLSjr7c92EsCqpjF5rCWTy9e1vijhsWorPqxTe8TiqNp21rsFVu4",
  "key36": "3eSLNBqv2pEUzHbHw2FyVEsr9pz7oFXk6BWw9PPsMFbbP6epMtPKPj1JphuopJBuErtYG9JQW2qM535N5hFuKaQ3",
  "key37": "3HxpJJ2hXrg2Jx2nGy5rHeE75mF7ULYJbQW2Tdu8h1fsswKS2hzcnTxAhgF8BtvszppsMXVtaLjobtR8aA5tQW6e",
  "key38": "2Z6H9Vu9nCcyaNhQj7RTNNF1WTSq8TF3sw3JH2btq98MvpBY5hi96nAyD1VedZuCpdcVm7zhKvzrDLMzotC7AhkF",
  "key39": "5bAAeTNpXeGFTNstd7xFs3fcEHfin1sHsckxaRMxAJxXRFbuTZW69Yv33yY3qPWjurizH7xBBhtJvtnojXm7vptA",
  "key40": "597Q3ZxTidNzvG4bHEGZgLad7RuTdoSq4eXpTBQMc1rLkosqd7S3mjWJV5tAgbokHKbwRzMMPb5uKpkBiu3a3NCZ",
  "key41": "gr4EQ7UurMtf4SE4GE9msW9zvPH3eMrydoHVwKzBb22S5K3sRCqgpAMemiXLKa8LpNAuTKVsEkpik3YU9rotEgo"
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
