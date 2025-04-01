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
    "3zVEtm7zbfXsgk8v1gCPnkggcm3gL1CZKCKiBJ6zf9kkHqkTDFAyJ5xFosMiswESZKsq56d4JXjeX4nUcodYAnLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHrNRjwDaxfareKh4YdsNRKed9ErN9izXXfdbyJBVistwNRGFwBooupbM7krHP2tfwQ6J7ayqvWWNxbbMEt3wgb",
  "key1": "2kPCqyw4tmAA6Zczrgoo8DHiMqHUJfHgofz1Ya9WXgdSUsy45GJhRdemJpavYeyQHTuWdyoyHvsmtEbN364VKMFi",
  "key2": "4jzmYNqLZcJrYf3DckfstyRAxjZQ7F8B4xgZSdpWEYuEuHz4s3JMvAtpdY2FY3xtmhyUUAoxQTjAAwzAkh7yVVMw",
  "key3": "uQQHUMonWWaGMr7oiKFhdopneAsWdXZFiCoudt72YFER1xraTkbkyrYRBXZP7VZdgzYftt77iMiCaFpUud8wQZb",
  "key4": "3iSwffCQ95BFH5VTBhA7tFVE2TVSQdbWVxWyLbKMahzNnZUeCZQk2jgKFmsZP5Sgb5F4yG9hXevVZ9TKN8BGvrEP",
  "key5": "Xj8oxthuKEqEMk9zFMH2Jo2b714exZK8T1oSUTrWUquaE6EsA9LZq98Pv4yqTvvJUfpB2vhMKpUnezGMVm9ARUo",
  "key6": "4iznuZiTFDU1fviQHJEPZHpwJu6ksfea2UAidrU73RDyHDzjCh872F7gSBkGbvv1YE9ZvdWutYDZhEfq5x7piqUA",
  "key7": "3BcPGssSF9smXoRYXJN1e5YmrQmRRoShqr6RqWLsmgib6x3T8wFU8BEjY4HRQZHWyCDf8zcWEA78ZJSx6tZoMWx7",
  "key8": "2FoYmnNoNHF8tAsggTXRtNeAE4w9DcxfXiGMg6WRgXqGLkitCz5P3JRMemxScaFXFU34FDyXRuRZoh8ysF2HtBba",
  "key9": "58zP4eJPorWzvjarQgpZmq1VzyFhmQ2DmvSGf7TZ6ZmPqZ5v4S3HEaxL4cwbYeDMMhJ4Gw9DyURFjG7U9xE3b71a",
  "key10": "WyrBwhQ1DeJj18ihGN8GKeiL5ai1aArD8d26bw6jGpEXZpNhVLtuhED1HrvTzpQD6m3kYFTuDittYuhkVpjFZdJ",
  "key11": "23AvSb3ddxCmc2UYQE7C4GNSSwP9GULx3WtY3Fb85b69NjfX569pkdpg28KgEW8ZdUaBbCqyBCzv8uTa5m4ivAAP",
  "key12": "2BRd6gFUC6V55kT9cNvBoCkvn576YHsmcWX4HZkasaJQwQffbcaMPFZ5ErHcBFkBqoArw9jMwzEnWBuxrZAGNj5g",
  "key13": "29o3ZkYbLWb1yVoS3yQiiSf1BUQ7UsBn8jkXLByXFoFEvEo1SaErCD5TQiJverLngHjLnsgprKsHkY5wNTRvJJPY",
  "key14": "3KCChPVXDQviRnGCrKg2A6U4VG2evuqFKimowdFwXV4P7N6m6TzBoyZriNHNcChxA93NaQVnkCWFEVbumxaWSojb",
  "key15": "4DxqnCk1e2dbPdPdYzrnN58PUFGbcQhhoBCmcr8yXg6fmBp3ixD5Ev1x93ZEh3e3WNBeevsRGnP6QYcM52c6sBXi",
  "key16": "2n9TofPsF4cwsjVNxKyUJ1wt3b1CWPCmgx1BZcSsR1u1YNPSSVvsty2BybZRigc37s3vsoBQ3B9Be1Xdkaz3bDLn",
  "key17": "398iVVG8f3S3warFng7A17rxmAREEkWoiyaahZmyHnekte1QoJNxfhs5TYPcc6oG1Kt89DBKZbK4zAEjTd9GQRjg",
  "key18": "2CfAGzPQhm2hsUAYp8ZmmATCWmQmngn3AjWZjwdQJVnZYAY6cdShadVphDZaJjsstV7M1cSEx6GAsgpG7xe7dLe1",
  "key19": "3oBAe3nD3MRiUYZQMM6RxdRT7eL3dqVLAUefKhxQzBp3PscsGLE1tesv7kFx6ocB51YoZQVo73fVL88kexnsBHxV",
  "key20": "gUCftnj99Zi5XMPNTiv4wfD9hdsXsNQbaJsTQc91PrrkJUBf5ZVkuNaLbUFaY3Yw97GDDukrLEAaePPfyPdStro",
  "key21": "4gg1RNBxnurcmBgzrpjdG3zR8jjUftKavfAuoQ2Vn54y6gCafLZSNzCV9yuxTRnvtGdM267sN2hvUAjkNeacaDyf",
  "key22": "5PhbxKEfmF6asuu7QRjK21f3Wsvs4Rx8PNX4PCYptxKNH2E2Ps56weTCE5UqzaptXD4bSHJXBsxjDfZhh3qa6qpR",
  "key23": "xxhUE6veV6HTPYLeiR54BSBAjbQoDh4iodhcpzR72iEWH3ftTPwVaajHHrK7LA2DwLkfYTMhasFtNoRUkwDrkrw",
  "key24": "5i3rPdULwmazDxEzopbi6qkmk2dSys2dCH4NraAurYpdVNR84R6FbdSRCDiRqjhi7z61cofLnYXVP8CT6SSFkeeX",
  "key25": "2BMt5fQqfHFsyUGDU9WxjL4n7svtiEPQkepa9DDN11eSYxAVCRjmQdTY8nqmWn8ADV4cuJur7f8aDpxTMY8w1jUD",
  "key26": "2NGqtcsTaLtHbhX9QpqaHh6SYby28U5vyxEPf9pPJZmfoZgYMv4nqLXUcXzPpaQ9R6GQQPL4EMWhhPnEgikdw2UR",
  "key27": "4FHPwbavppgM7oyNFLvYwXSo2BvmPZ8JKN4BEezXK4ygCpHZTS84GQ4TUSu2AsXAMiL2Y3t9dNGiB8Fr6XnKXNeh"
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
