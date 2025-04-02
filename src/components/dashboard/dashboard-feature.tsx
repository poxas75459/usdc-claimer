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
    "5bdWZ9cVyG8ihhTnFmAvhMRQ6oYS3Pxk3vooW1bB1zmPz2ByhjKsBQyz97mAQc3foVXtRMAds87av33HQBwRKyzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LqWkSr6yPFTzNVzC6tfdYGLKFA9sfwPQxpAYD1Q9jYiy5nN37unxf6TPdXnKS4BBQ4rqbno2GmhDhntH3j5f7oW",
  "key1": "x9rH857R8GrpFsani9AGBYYuut2UxRLY3GySM5MU81yca4adoYdAPeaMDG1GHvTzcDTmehqu86EGTcUwYvsFZAD",
  "key2": "3MSipJ7dWKFtGJK4RthLSkb6FCoetoZ9jFEM88BeR2uUixqa9fQFBicD25Quh9SeNxny7khTpgnZN9d1YVxxEYHm",
  "key3": "5bpLzeisJ4UxSawttHyPAEhqzzvMj8pcpTLVd8smDzrUgQmcHVHRTgTTWVmydyZo9AS2b9NKR4gk4Nv3iPTaMhSG",
  "key4": "56Mejt2K1EqzRZhQ11r6FW6KixbjeeDYnqedFrwJ78yursBzQYRt6Y56ENwbNkn6mDZ6C7JVNnjL513F9G2Ch9E7",
  "key5": "3c1LKfPKoakAnj328cnTHQmZCZ8thy6qHBe5HsPHKPJgjFzNn5rBnjrpG6tZt5yZPePUh8J2DTiLpghtaghMcw8b",
  "key6": "5pbGoYDm1wJWBkkmHoD3JGLKtddc9dmkqhroCDa6ypYhfeyRUEHbech6Q1qxp6QPYjQHyeU8cygmGALwbQRqWJJL",
  "key7": "5KX4fYuvzt6wJtH8sbavECLBCTjkQWu2E9xVkNBr5CMyWj2ajVurwKZjQjVr9A4uhsdPpYiNr6fEdKSxo8pcbzsH",
  "key8": "5RUC2RF6Rs7zBVZTygRiGsiSECdTK58699BjA9gRqf6bp5MVVZ15HC7VC3YK7QGdBqmjaXYExGaMAM5U8rMNgwAc",
  "key9": "nUTzbDCb2wxQniRE38YuosShiXNrHjNM2ZVDX6rG5LEqPAvdE1ptPcS3fumQj7rKgCP13GGWLpgh2wYfTAXLy1z",
  "key10": "4156AfQQqKCVHENmcMGnVgNfj9NMk8K1zHAzx6zmZozx2YABaKdwvEbJuGpvq3ZD1tLAF6KhYVXPYzFFyaV6PxAB",
  "key11": "4zadNjpYkUzv4vhzca4ZeLrFpbq2DfZTFzRbrYxNVSU2YpHsQMx7QhVWiuYFMbpYYh5Ek8PhpJXotpXirVGG898",
  "key12": "4uxwpXnZnKjW7bv26XrUzoWcZEPEPYZia8YDAmCHmrEwYbPLao2XxDwA1au4bGmH14TF6SAs1jD5wQnCoe2PGJjT",
  "key13": "5N8xy9UeeGhmSZSbahJW8HrDKiotoUT3RgjfN8rTdt3wJxeSDzWJes3TWQrhG4TExMboEqH7A9NcZ2og8EcN6y4z",
  "key14": "3Lr2sjiE9qrnCuYgavdStp7e1fcYLtnHNwPfkMdeCNrwTBfnyFobvqxcnhFv6SQxscjuHxXr9GBEWpTpg2RjrQBu",
  "key15": "FWQLupvWYkrmpFzasyZpma2FYV1tgQZzs8E5x62oEgTqCKvQJTCTZ9zSdrE6iMSwp4barMWfybNpCy9CWiRg4EJ",
  "key16": "QQ2H2GZ6jqTTxi8esZy2pEUFgfaWDkeCFqA2vuiqHu38g35x9baDUtLWiQ9YJeXuXmiG7Rm9gLTsQyQuar5VFY9",
  "key17": "2MG7sz6AJCUugBhoFdjW8vgwrEYrwVssPKso16JaqSDAL7ePzHbDSGvPm6ovSripSn9goAhgvztJW9B16c54Aran",
  "key18": "58A72iRdNk8yuPBG3zkLwEFvDFvQFcWdEsq44mVPEtoAHsBSVHrEDDkZRsGWgVAMGz6EYp1zp74ziEtRidR6BLhJ",
  "key19": "5nq9QydX7xSKSJqYjLfPbQcHLf89X3x4wy11VcqguuUyPoXAAiMoXb1697bLhuUBJ6LB7deexRodt3YD4raDEWNR",
  "key20": "45Ltj2vGFNifat9EkHWz9UWMpkRz4zDhNWRjELvFc4NTDguoxALcpgNaEa4DEfxMtCW8EVXDdBZK5pUSrXSjgj4S",
  "key21": "2YTkcoRSmB7iwCFAtERB6kf4uhnVx3WhBgccmhPCfCUN7zbxS7SEc1SZdBrvZoUkhWTT1feBdYfRsGdTYwQQADjM",
  "key22": "2xSufgjB9mcHA3xssmQvLKdpjxzWJn3ewZ2mbgmPJ85bgjUerH2RgAa6gArSRGEnPdDDUaeroU2xMbqAFRxMWbr5",
  "key23": "5dYXnN7nfuubWD9aKpA9HvQYgE4XSADTt4LaVqzfZK8XMVoyqvqw6hj6bswoBdfterPf1LGA8KAWrhQJpmSLQaZ9",
  "key24": "4RQB1gAzLqTBiJJp9CaStAD19gk7dhBfKtuN8GSKBaSj6dTU4Hw7HQPHANVuFqYQFeXxqQLRUQKyWftWuLUzuWD",
  "key25": "3nAWiBYg33nbLiXgrviZLBKdBNfuj7sDis6mk7YkxTs3JpTTs8kYPJaMuYUXWYMV9VF13FiBeQPZuPt1oRzi6zSW",
  "key26": "4UsfMer8rvnvX7gDUyqrsR4XKLfBgRPq1f18VqLAunUUatHGo1GLb9yZrU8rAydk39boFGjSPYrmwqEk48PabMW1",
  "key27": "3zGtzPQgtD2VYXhwx26QNfSTi4XdhopGTSFKNHi8iWtENuS4snzU6A3sSoiB8RmzXQHVX9cBkqMJHHqdMBtHa5pf",
  "key28": "jtBZCeBXo8nGdo9bAsDoU1aE5iKQ9yXqHFEguAa8ZxTKd28QeiiuNed7Zd3uhSNy8d3bKtM1zs91x1F8agyQFtC",
  "key29": "5oMvuG5Cu4jkCv43nLu3mCBB3PtEAMEJG6SKG9ZYaFT9o3QT3XXZEuVdzn7tP1CkHG6HDfRcQxmqnuYXhLkC5KpW",
  "key30": "YLJnezMSzRe2rFLtm4gragmWftyr4SsPYjnU35NwX3wmqjXgjjzKGBZ7GWoULs8LfxUd5Kfc8DiTMgZKxCdV33s",
  "key31": "55jbSgR1DNCYEkXHGLayc6NbYFZn7gQfsbLYvvXsuTveKEkX2NTjAKZ8pjyKgY4WYah4XdJNwQU6tX5WrpBPGsiF",
  "key32": "5HJBcsE9QUtXbEVKQFaWpwzGATLvc1WGsxZ3aGubnwG5g8EX83aQDp8iEb5ivfhD9aPeAiXwdWDPyeZmWGf5vYuk",
  "key33": "4jYzyHrw5pxyNuptqGafWBXFD5qY46U2szaBWEM9uLspRfXeyDAWC4rhDaoAs94j4pLNaDQajRFjf7HPwmqJPHfR",
  "key34": "HVUpkh87graYnxHcp88ns7Nh4e5LVv6cTATWgPsWBzmYrbRbud4CcLjhGpahWMPkqeSgy9KQ14zMt6Kugz2e11S",
  "key35": "4ok6ftZAfFD48dhwecDkRAwLMK6HqSrJ7keCKzphVpNLTindGvxwNwJGW1yqLvhV2bo3TQZdqbkY82nYPn8LaiAA",
  "key36": "yswnmofSvbigGKVRh5HGHYpcSoahkft6D5usy5b5cEekJ5cr6i9XHBazEw4w2cVQhHgi29pp1R3MSPXFU6YPk44",
  "key37": "5nVy9EzQ1SKsb1fkWJj6wF3VmaL2HPoZtVbR5U17n2QDDLgAu2X7cVY6m143svjpRZj2pmK7tsNwkzbsDG8DJQEk",
  "key38": "2wKxt1hsGuzfVsHvM86z42Rsh7qmoj5K2bfg6e1sRzS3qKzAbZwU3P588ZEjytQL76PEBArDPPqFu2nDqqAH93ZG",
  "key39": "23aAhosT1xkWirjHHNpFgsSsLeFbwpruv77owGzQAY9we1E5DLx7Q57WzB1VFtD9koqtMTsp3FdqEuL1NCVgDVb5",
  "key40": "2Yvm8ZynBkS6iMmqV9g4mcRjnoc6W2eocMq39jPF6GNopPMZXGg4auGEZfAAN9meXVqMUVTwVhUz4qWBEVxZjn4M",
  "key41": "nmbyd9vKGzFzw5EtBMybGxtcsx37tnBfps7YvvoPuHG7sbJBRnH2Z5mATtX8urMdRAFvT57aXyJToDGUQsV53Vk",
  "key42": "3MvRkWKbtHxSFo5uLZBfiVtFUZEb9FbdCZB8AYC4h2hbSdYTcH31FQVeush8gT1XmX8PNgo5zenmzTKD6cDwZiuw",
  "key43": "359NHps3fw4ANfgW3515aFvSdd7rrXGW98cGM6ayCxB9zGF78NdD1ipxEnVpqZmxDwvsTwX4PVgicx6fMLRb92ZQ",
  "key44": "3HTfAdm3NHQxzP6Mxd7BCVoMVMMbAUyTv6Hz6zrjN9HDs5AuWhLpg9Z6SvL7GnEK4TXP5fMnUA6dsZVhCzB42n2C",
  "key45": "5arRaLePMJvmwFnnTgagjS4Fts8pdYxBBUY7ieCTf1oGQMoXX7SzbiGVQLqWbaG5X3rpdb86i3xi8AWbeRk5VghG",
  "key46": "4YfgXixHkuqFbT8YuTRu87ifEcKbhoH16modr1LwrVXutCt9J8FAWzPr4x2H5GKuihrqHg3BZrvcN452NwZtfoFz",
  "key47": "WVZWT2qZpZSZBhC6rNKmkZSz3QgFyFDNiDujNCg85y6jjEzt4RGFEykDCBxHt3MmKLA3gwChVwP92Gxu1YDpnbf",
  "key48": "5ooNQWNvdo4RnujdMiuTYKbqPyqry6Uk4BBqGoyPB5fyD49Nv9Vpp4rKFKqnrVS4BNgbZ1aVRXjbtki9TpaQbrUD",
  "key49": "4cGd8qmjGhVYvtauK3SvmTzniFDysxAPhLw6BmpuACs8E5ApVACMgR4DZ4BC6ehU694quoLdoQmCse5up7VwAhwq"
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
