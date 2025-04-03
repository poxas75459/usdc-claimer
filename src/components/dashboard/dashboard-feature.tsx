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
    "2T1wagkEcMjA2JtX6S1uvqcb3nh32MnDL5fVrvn3mfodehSG18zG4BaXmRjNqvZiedpKfVnQ85dEgrB8u2TRetMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ed1dCBzxMy2rUvbjYDFz9GGBhA7WkQ79chbA8bMZRDjsLjXZUXA49zN2TBvrSP75UGMZX3y2pjnPq5zhyoaM1oB",
  "key1": "3VVV82GmQQsWJ1tjrdLqnQ2biDReHxfpsjMohSsZkdnjQXeGcJDycZV7GJbTW6F8imhSLkuRJJUY4Q86p7Dz5n2p",
  "key2": "UQyHJJzUcDtwVwM6BmKRWcwgWC4ysFeWWx1uKrbcy3AvZxKp4AQsZVyZv7qPsrihbZ2HNh6QBRS6xxPNRGjG5xg",
  "key3": "44eLCK7qsHTdKn6chF9FkF5gnW7Gnb6byMq7ei8tT96NATPBppzxF7f2YbqvLgrdEWRCLv4oDTNdjqSu2zxDE2KV",
  "key4": "4JJK6J6NC7mtdHqujjhohUsqDQiZewEwAQxroN4vGjC1FymaBPFkf4PkRANiLcLPa3RtBbsR6LApEwV4hHVmF6sy",
  "key5": "3agumKfGdtr2TeTr86XQeM7LcnkJoLV9nB5htpHpV2uHDkQdZPMFBWeLdti4ydkMF8eLaDeFr1bEGPJcpPq2UDk3",
  "key6": "3ZYMrwAEnoiGS1Mx1i4FG6gy8Tav8P1GeTdLtvY2oGkyvSq3aZ5ijfRhie85yDKt15RduRRrYxdycokYaMqaUfXB",
  "key7": "3gEDL3owFjcEGrkQonm3qYpo6Y8KMaVeL2VAbXp4uroFd2hkjPfZJ8oniNNzL6BG6ck4ptoEs4nad96MQyDhzcLh",
  "key8": "2FvCXZkfRxm4HWPuoKZzrhvBt6XkJ5RNaraLcqQJZzsADmfG6a6xVwm11bxznBZCEQ8DuSf32BaaL9YenZUDuUBX",
  "key9": "3JjxMmJaMw9M5ihDxmKji1PUdUhUspb9F9mWuQyTXj41UWQaTquxwkgiWGQqdniUkD2dhKdFaS4PCB467TY9F3cZ",
  "key10": "4VLfzsxLjT7au56JynKebNEAJfAU1XVFje6L89dzw3k5ZREwQfWiFBJbLkphHTnftqatJ3qaXnbgEVxQVuyWdeom",
  "key11": "23esp6SYaiqJ8DHySvMGDkvZASkgr7HtnrsvwsizgvZtFVhBv2pBCtUGaVaTFQ2RkssxPeRsqyaqwyycDPQvMzxE",
  "key12": "63P69wiqvwUMooScbTjoHCM75LSyvYgD1CFqyTNxFEYBSPh1Cx7VdmbsETMsMg1xQrZG9oJqUpcyfk2S8HFwWFdT",
  "key13": "tiG1JMXpVMicAqQkUZ7P7S25ES8rRT2sXFjPAGyeHoiNf4STbEkobMz5TCiWnyZ8MioBpgcepzHQeDDiyyCwGYd",
  "key14": "5r5FnSXyH7ZJfQn11Wnzkz5dDZVSedQACNwvh73tfuvXJzTuYTm9g1wAek7x9R5A8EQZBYmpsZ3VjXoVungAKLd5",
  "key15": "66QVaUuCvcGXRhdo5oydWxKqsnAq5xo2zGV8YEF9JTRZvPaxy96cjHaNE8abEQqoo4VpAvz8vH21StakY6T4jeM3",
  "key16": "QDvadRi2HKVr1R7DUsNaDokz1dbDfpmggW42ZrVzvDw1md6dfie3MLm5xERX1duQSRaU9cZ4yW4vQfFXjUQuPED",
  "key17": "56fpUQYYqiFjx2iykBhFEmemBdtd1mHWvnmWXR1XQqUHHHnb9Wd3DVUVSTTyANHDhWsddvssJmRMmQm9zwaSgeXP",
  "key18": "5bTzp67hFZaDDC1M4Xw7VH5GwLRxj54HvSD4VXutn6KxK3MMztHBFPtnP3fktJndVNPycT4yUSgu3a4SPZmS5Nm5",
  "key19": "2RZXjmNHWRgRre9GBMzquerhiK2wFARdUF3ut9B2nRLVFVv16DGGKX1bcj3HjF98ncZA3WR55GGSC2Q4oZyvtUAx",
  "key20": "5hczYYFtGKPrvCXobg6mNmXCc1zvNro6U35f86TQhJKfjHYYRawvQTfXBsEn71KgywpTcPiW3hR9EKWjYm7dREhK",
  "key21": "5F3V1XXYeh65GJPTpw5koAGWqU7k3VZy9n3W4CBPMn9GAfgsMKkJDBQEue2CLWzbncJhSZdHpsPDBhX8XFZp8UYz",
  "key22": "4wuLDiV7HM7ReydAuEzPEMX1qcEt3sqSnqQzpkTSyyPK5GGgnpMW6xPkvRJtrJNA2cxHi8XWZ6yZ3jxgRHTLewUg",
  "key23": "3rYkDsEveZXa4Gi9aYf4amtdiGezWQE2k67TJEaShbRFb73pn6ZgHtxZTp5mG85hPkgqQ265NzvrwxX3k3C3qy5w",
  "key24": "4d8d8jncMLHVUvKYjW33R5KbSKvo9nMY2AF9fDxFk7vWJF7B5KQfkpfS4wBgcrpiE7ZbPNk8t1jTpvMAChAPBY8X"
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
