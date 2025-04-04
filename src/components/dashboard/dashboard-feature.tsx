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
    "kuL18Y6tBdgoZWtG2fndMtmQGpt39Yo11B7Yqaj1BCvK29EKhnPvc11Kx7xL1UWbh552ZDmEjftxc2ZMUE5y6b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AU7n2gyWLEi1x4cEQaKv7TqkkoF8Y7Q3DX4G4UtEqQRR4YPgFoVmWv59HVn5kPiw6HRDQmV3ek8th7XMABN65bv",
  "key1": "28b8Sr2xkSrGwtHny3zFtZH65afjymgnKo2UsXuEpBLxaoeuXVwKJ4UYoJWv84XhyC7R6FEjpgeHPDkcoCHzR4wU",
  "key2": "243YkNtVYqJY7EWqwdbXedgRh91aThq1YBktBDdz5aozhaVQtvX5VqhPnu9VeJhuZ7j1drEHy1basFjPefozVoWh",
  "key3": "2T3MEtkKqxTVx7P96GKMyKBSxv4dgrGVw7ab7D4vVHMEgw9ao8NigHUsEBNEthfd4mMyw3qzBbUMbXvZ9Wih2sbT",
  "key4": "2A98CBDkiVvBxBFQx7NE78Kf6FY172wshCA1U5EiPSwxyztSyaJ55Up94SUmvygALWV4uacwF8XDarJd5KFrDcRV",
  "key5": "4BNrSHf5ZL3Uw91pmGatCjaYCHiTsPcawdboXuod9HYcYLhd6n3cYEbtVgLiTMNAs3offqhoFgPsnUa4gBq1oTvv",
  "key6": "48v1syrZnzyMoPe4hW2qntUvVfTQxxDfkRX42fnEjaDygoZ7TjdJpFkCGAAz5YdRc2HRGTCdHpaePDtX3xmJKWtB",
  "key7": "31SALLNHC8tTS8WV2JHQVYJy8AUCp6uHoxfziwEv7oGMtbTMueikVBV2e8oMZSjNuwprgUCAyRAwSvw4Xgrkpygt",
  "key8": "4a5cdbePgxv1Z7qyLd8mhwh6vZnzHiRfyLcNrvcWhmz9UBXDACMUKDhkiBSy17yMii7Fyitg3x5HZqkGNuqzrJVN",
  "key9": "48JKosh6KGvGw55Nfjy2aCdAsqtD7pvHCDWyNDxU3a7J6wEpwzTB2PVVuQ2iaizQzoBiC53EqVCmMuyEbvQWiDGU",
  "key10": "2JqXWn47mebWdEHowzBmtrtP9GArW5jBKsVE958oiE2Kfny2DCxq9syrf6WaGWcUKsyaC7oRNN3t1wPLC6sbNzRz",
  "key11": "5TUBjbvgPDq6JV91nvSEBom45FiXScepftZkc3cRqSVnnrC5VXhdPPYfNyfB3QffTghqU82UThVH5KvAFNS2CvCd",
  "key12": "5BkQ7ELPHNMnELjahWtGhRQ97szkyD59UzUFTCLZnL1Ks9A3aK6WtSH8PDoqTr2iChvEGyjrBvqneWtbZGmuueZc",
  "key13": "4TgFPLcwRQ4UpPESHs8BSzcRKFfheixxiMVWyiNkxS4z4ueJf2q7wfCWTYAUuRvxT8r98YBpRuaAhdMbxMw2yTXe",
  "key14": "KAYVZB9nvQ5zD56xhC3HZqp8XR953w43J3bVgLzPpsMqWY2WpgDEH13tj1iFQXa1mghG752Looiho6c1VJryGvf",
  "key15": "4hsvcnSCKM5phdYV81oFs94AAaeYw1eFBn98nABS6HXg75aoV2bX9xR1c5s7M2p6rZSAH49zD9QXZySoAtvsWGJa",
  "key16": "4kDQdiVmUdVRzQfCis36RQt2sA8a94TwikQFwD7d44F5hQqHNB5GEGHncJ4f53PD6sDpmXSXx6zXYNSPeuiq1Y5R",
  "key17": "3pmc5wLKRmqk7U3udfcovd7Hg8seyuytPuM6W79nQaS9ouxLpBDcePmyepqhratyvYLFUvXEZPe8B6eKSsmBSDKb",
  "key18": "4oEgyLp2DCj5Wu8LusQevGDyu1cfuMksBJS7SB4XRu1nsJherCAXaWiEa42otYXKVWsCtJGgMQJLG9D9vWnBd8NH",
  "key19": "3JBywwZVLJUgnpD8Y2mNqb4rhWuXznaFz5xt5icPZ34WHiZzTPPUuHwvo4jED4bs4ExctvqpuvC9u4e8CuLKaJvp",
  "key20": "v4k2LSWxCa6qQ3frmnuPhr5ZYSkY1TUuSx1jmBVYyMQKmpTsUmZdWvyLLjQBpSyYA1EBWtbikND5U2iSxqr61SY",
  "key21": "VLjjzDBTfWQxtevoAYzGWME2oewrHbrBzFcT7vXza2zCdtcq8U4AduHQsuFcAteSXkvsPsyL82wpJ3tSchzaYGE",
  "key22": "5nh99CQGEpnaZv7m6DYF1vHCNkP98qEdELhtZHvusD9qMWQBiYBtwKziWnZ8ohPX4fscgmskNXKBrjVXAobgpigu",
  "key23": "3yq2ZCVGukoFtJ5EhtNvmjRBtq8kTjrWtyBfSqrDMSuymnFcYY9tUM5ogXcACyQnCo5bVDsVCF7WmsgoSkft9wbX",
  "key24": "2fLdYxQBHm6uhDuKDowHNz51T3XTMqrqEq3XQwCDy8JjRVQBSMhLpoBhbGC9fMYL2RuuPpw4TzVdMoS3RNdhbqcG",
  "key25": "5Fj8UtEyNLUtJMLhsnbNMtruxJBSj8xBfwiFS8gmZbvXGyjrWo3hbqoZZRpsDKiFR7ZyF1yAkgAYgRrgYW6rbM1Y",
  "key26": "3GD9w3CXL1YqzXkfErn6qh6dv4nR4EuVEXTwp3M4YZzgTbCpDJU1FV3tsiirbRGKTKrqaxro8xx9FexEn9VZmTmd",
  "key27": "4QxDjqc635JXpLHnEMEAyaGvDkMBmuoCEYzfkPnXMMe1bBt7pRaF8nmnrpjt1QrHZN32oVbSS5g74HiJrthqq4Zv",
  "key28": "3HcfUeJ7ecji4oRKdSVnbmQE4T9MaNXTuESGkzH2oew9zCD1q29Sei5GUTs4Tvejt1J26Lnu2FmSFRiqD4NhEhhp"
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
