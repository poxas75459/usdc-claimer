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
    "567narNNRgiRmkDQt7xEguRdgZkJkKNvrAryz5QPExuuM29aagmxzx6VgztJ1tz8W48EoD6XE9WEepuGPTdyNji7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMXXoep2wQY4mHnzcKhn1gJgkh3SCZ7VapVBBxwC3mjPWh9RZUK1ab2qQeVC8pcD1wL1WupqBktRuQZcLyitQxm",
  "key1": "4ssk5w8Rx66TXdYHx5htyES1F8KEyzzUFXT3uv974vcsg8L8rdMpEiFn8S2jUxHFeBWrunKQxMtmRCy4jaRC1vSW",
  "key2": "5DkGMgrbzTij5km7caRTMzCs9E3iGomPrGRahKNvN5taAYJzDceukTFDD8ZXyJjkMwA2Gwk6Cy2aiH3TpK86V8fG",
  "key3": "3Ac5cjwvvdPd4Qv91o8mvH7Znh8heukyLCruwbKq9fX3erGFYosSR7NChxDTcYEYjHzhDnLpNzs2b4Uu9kaNRP83",
  "key4": "5KpfC2n66fb6c8Y6e8PiDBRjsERwcvcdJp6YR5AbpkWp8k1nEJEkk9PJc8dZ8GcDWAX4mQp8qUboQyvSju1eDfUu",
  "key5": "1veh7DwNknv8VvNEmjjv4fpzenu1mu8H4ZBZ1NXkjFa5qfdbA86A5xw5VPac6SCtQRhRtELVQ5EVkteFEh7LXbL",
  "key6": "EnoUXTJvVnnfkPZx9nzKgKHioKyPYRz9FmyDNsyJZxiCMbcubaEeBRFnq25H32Xig9yt3EzxMaVkLgWmGszTu7a",
  "key7": "3gng5Y5XY5vSiJ5FTgrKejgZTJYWkL2oS5ckiJphRSi45ttmevNLtwVd6Poeay1qqfRyVoCHAHAXcugAJnNah2cv",
  "key8": "3q45BeD2PYCANPsN3PFA2YcKrWp2Xf97GFtcJ8Ga8PGGVRFUz2rLeAbbB2T7VhB4hUmDU1y2Fuut48UXmzMVVYbd",
  "key9": "4hQqAhWHTZKmbsQZ2EKFbRMproWChvnsEethtAaq9AsbM39ran9WwYajLnpb6u2snbK7VhTxbFBhfCkrq2sak8NK",
  "key10": "5LCb8z6QRar9RbuUsf1sCPxATCVL9DA8NqtSs5CikkM7UDKPnMP1u8axW3STozdnX28eVWqp5Qq5w61LwrsXBkpx",
  "key11": "2wtiFwdxohiEMwr3WemPXyMVmitLWSnbxi2J8TM7RQa2qfEtBnNuhcei1Wudm1ECEqyEKoSbGZ4Lbys6kETy5MG6",
  "key12": "2K1mxbM9ebcbpvmJLLFK3zVHsSUcgtrjkNpd9pKhm3mNyNXS4E57qhhvVsEuKdn92u4dAyTe6WL8bQpkj1drbF5b",
  "key13": "3hiAivZWL9pUniYFXjkPpe5e9E9Dod9bU9hkW5NeuEBsWNpYoGQL5nAtUqK2Drbb3TqG645cQnrVLjzf1nm8KoXp",
  "key14": "5XW5CPLyuGTC62h1d8jyuCYB45si83TpLUMifeLAgikMe7Zjs6H7tGuHm81Hwk3vkcQabSePJfCw8wruKMgFce5S",
  "key15": "4EdT1gGts8YvgU3dvButRCKvmUBgtYfcKNUjYNCUf1yN31fa7xza1YrBBFMjZJNsMwyRFaFjuFm5dgmReJm3hu47",
  "key16": "2da2PAiAzSYqUqFyRJL6StRd9SP1FpRHfG5cJBfqjnK9wzMx3yL8axDfurvdURf2RBw8GKhm1UmRoZgyhwsDV5gD",
  "key17": "66MjHwSg6UNPcbu2FxTJdu5JosVYVR4L4Y7EoHpDNjFjabt5tPsUbojGYjVdJgehciybniikSBvLdp5MxBtuphPr",
  "key18": "2U3DBTzzsK4jr8rW2vesUqNUPpJZ41EfmZMtDCn1WNPgtNNzuSbg2eiZan57YDHbJyATEgvaRG9t3MTWmZTqjVA9",
  "key19": "5brjtwiduRsEESTahUwS2wkgKaSh85KM8dTaXkCxBLEfGXvo4ZkzxSjDvzYtPncT9Gn542ZszCakzhdpcG97Zkp1",
  "key20": "61CsuzcNiETcvpJLKxYioRmzS62g3gXMEFr8mEhvnPfJcYYyf13AaGv59JQbNFYjgozkTPjStRhT3qbDtvWdbHoF",
  "key21": "cq3KXPowJ6ae8DNv85e5JncmgmAVrdGKHVRgvC3SoBYpn4eKjwHxmHuNzCVziSGVuquNnS2g2SJiL4vm8U4jWku",
  "key22": "3SnruacqDo6BSZ9hy5eEet2aTnBbZejyiNisMBfwUxPrssHemGjfXLqKuv3X3qjZG12BMxcKtfAxKy1pzNc1k8an",
  "key23": "4Scc1sKzf3pA88LsTsUTDpWW83cjdST6awjo7EdmsgYKxSERsrjCULxRxe4K6ASZmnorbopBnRFfXJL4UGGR52tQ",
  "key24": "RBP8rRcYqNFU6P4LXXr2AoxmFbypwgVqdMR3tXErkheuRU8mggdBRZ7yS7uJggQRvzdKHY7jCZyaUyVsvDDpJx1",
  "key25": "2UPSq1piSqVP7onYv2kgNLDg9jEBMMFkMQBgJBxeacrYQFpQcrLeT6eijzry6dKGhiPNhHkYF9Mb13xiMfgowe1g",
  "key26": "3GfVrvovPTBJR2pSkhmzb2W5uaiqt4pLPNokk9qYHeBGBds1i49wE5mrsTgQP2587JhLoXsNaamfwwXjCGqZvjuc",
  "key27": "2rUTCRe39CoJ49weNSXrYMg3xshwS3CAoBCXuDQHuhADAEAReLvWagCWceAbLiH8NFLk8U8BUgJwMNSyBePFAJLQ",
  "key28": "4qvwnVf5GAiUQz2nhcSCB521uUxSgqk4iTNsKJDaL2mW4wohnS5bTBPRgq1ghYcrtHJB3vzcHyv4qBw8LN55Urxn",
  "key29": "5oPKyKBDd1pqqoHfDfknnwapKKbsTzX1yZ2Naq5gnXSHg5Q6LdoTFD81ZvwqaodJKJJ5tqFuUHPpgQ5rdXeJpLPA",
  "key30": "fSnZhkvpatxeMrLXx5SKcwmyDgX56S9tHvG1S2LDguFcCdZS2FS84L7txJduGTrKkhpXVgXfnSmqvtQZv978pGy",
  "key31": "3xM7sM7XfAxzPbWeb129XB1SJ6LpmHFEug6YFd4yhErzmqWCt13zR4KEh71WwBVADhvbqKXERUdUD3VwxPDdHfVs"
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
