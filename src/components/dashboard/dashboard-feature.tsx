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
    "5Fdh3ggJG7w3mFMRSJ4iP62rh6mSf67vCJNFJqtBsZeCA5vXRdg9FyTRr2orTTMje5AQ8zUv48aU86ab7Kkckonc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QNcjFRE5XVGTwunp4gAYMc2j6eg56s7837RBbw2Z5r5CCjy3pUx7YEX8Rk9QRCB7fzkPqVkXGMDkdTi3k26ABPi",
  "key1": "3EzFzGESFeC1jZCHDa3LhSbT37wkFUrjykA1toDfK3m1NbsyHZctyQQiu7ocJTUHunaFF8qgExPUPT1dfVab9A1a",
  "key2": "55tHbB8dA4e4eAYk42PgCxXJZBAyCccW7MmWxw2ZRT9TAs19qsoEU9Xuq3KF6FWDroPfzAAzjX5YWWV2MxDskAkQ",
  "key3": "XUaCPai3qm1uB7i9fDFyhmho7d9G7btTQBseu85UMNJp6VE3rtMAQKtLMEMUc1zLUcThmEene5UtcZfFhUmMcZa",
  "key4": "3Dd7pkkMvrxLv8GoJyvboJ3UUtVtyuyRy1LBgqMMundueAAxu9xm7JpNigkuzA5Cbui7FNRy5YRwGRPRBXXB2zRF",
  "key5": "d6iDPsfDZ4Us5yAHepd3q1VMnHLUs75ZYRRRrayGAmFBM23mbWoejNjCB1xuRLn1jm6KtWFPT9hLGpwtb1rKkfR",
  "key6": "3Fx4PHmbDyvCfwxcJFhzdZPMoJJ5bDsAHZKuaSPomg8bqBGjB7cgAvpbgx8F7Q4DxUia7cyEC6oxBJCMgBisMu6x",
  "key7": "rLauCunRzCCphXo9EXuyCYCRbNXqC2Pa7vY5GdrKzH34jwnTSccfSD9HnonMY68ztpibrv79idiCPDBxS53Ccm4",
  "key8": "3Ho5WM33o4pw35fdX7bueKekvm4aHDutru2QFt2qytGYJbC61kXAe6P9A87X5srfXxcdpc51YCRicg7XA3sRQDzP",
  "key9": "3TM8KdY62JhmNw9TQdbCXrwMr3MztwGA6EzRtuxYwMRzbxsn2MQj4ZHzPGFq24yf4qHfH8rkX7BoBib5Fav3u6Rj",
  "key10": "41wnZat32MXNbLNA4uSZXAWFDMKEGLZfcyjm7Mhjgy8QeyPkQCPsMTMVd9u6K2k3urYoGFQ5QzvQwVopn2sKJqD9",
  "key11": "5KA3r8Yvs7foamAJeK6b1dADHcunQv9NKzpGy8sMxNHSL9HcUQTszJe898eXoVx8kV8FEem24Ap5u7diZ6C4FZfH",
  "key12": "C3sdVoJuokwhj5q77XgqKCFFiCF751oB96Hn92zvTeCgLy56Ac1tq9tzfnN5mW5C3zM2t8ESYUmQhBxt7mzaurJ",
  "key13": "5KowBE7751QeB7PLGb8g1Urjs5xEmYURs35cUFpE1932XPM61dXNNwxq2KjhRgBqYrjoRxc6nA8Ve2UM1RGftbmK",
  "key14": "5u71TrAFgzakzip5EUMXWo19TaCt9XQ3Liw8QkUiBMHXo3Cq8hS1Yntb8LJWkwZdxVFHCJDeEEYbK3jPiKXNPRMk",
  "key15": "3boAbchsVH2ChTaMQGTjM39tmNsNYaX4yNRURH2gEMJAPitMWG3KpD1aFqPNjQE2Ady82zJcnwjmoRuKJyKqWmum",
  "key16": "2miCQ5hj5XgiP8KHFdQ624uhfmFJS2e112rr9Rfgrd4HZKSXoUWuqQRdjVyJ8apFfuSwDaNJSpq4pzzpsnF11V37",
  "key17": "3aW3Hosu787S75kAcYma8dfezTAF8gMTNHNx6yQfqicG8efgEUpteriCiUqs5AcnWkVRjH1ghrbX3L6siphPVV2m",
  "key18": "5SJMLpMUZfR331Wr4Cjp4UpnbJGKDTfCSQKHrjdZGCLoR8y8GPvRo6wQDF9RMHZZLXM2Pej6VD7S5wMz6EtPSqcu",
  "key19": "5LASSuFYU5ML7tKK55bEMLWPmHeUBhbpR3ryb73pzSD4RWnqtKJkjEZwjoGuQGP2zbMeCVcZsZmyJHeYKfn6Lf3z",
  "key20": "sMvK5NBBeRhFbtbVYNpC36QGoWVx3rK23YfY3C6UfnFXeUYPRsGMSrX6K9JT42o18w9Y5pFmSy9taVshQppv5bM",
  "key21": "65FzGyq2oD6eQfiwLRCM4rgBtrmjHV41WxT5kK3AqW3kgiGdUAhGBZh6D31DHPF9oyDBTK499hLS9BuKhsyBYuct",
  "key22": "4RsdUt5BX3iKAC2AqF9q2TXHggjDxJnaC6qrao7T7iL92sY3D7BNDhZbR2mxUFQEtP86uftJakQvbYqXLHkPL8bf",
  "key23": "Qc9Ahd7AeQokYQoZKK2mVLk8ggpRmipe3Hc1PX8Dpagp3tKt4h8k7aYNYpJgCWPyoxbe4WE42TtCkc2tCocv4CR",
  "key24": "2d4Lj4ShzaDctxC6e6A64Us5jCAFfM7YjnrKoq9mZdC1rfm9eqEdCTA6p5NZ4hSda1CcDNnJCtvPxMDcMrmKdMXE",
  "key25": "31KPVk61NhNewzw2Gi2weQQ5XKcbdviWuMfgxTQtP9ujRyHScCCRmRz6EPrN6KyDjKedKRHfShkCZ2To1mAsbnCd",
  "key26": "24icYqyHPK42GK5sLiQWsD4QkkRwStqNN8h7bq7ZVu188wm41FkvgN989wwmguFgohtax21wSFTsqGEntA2MMhVu",
  "key27": "288vyxfbiMNzGHqnWbzF5JmXL5A8JRX69oXvxXcSoQTHSkbxhF7u573Z8Zt8qt2jV464mhCdfVVmrfqQsAJ7e4ro",
  "key28": "3m6NH3aK9cvQjTnVZ57cGUdQEhq17qYhir5zt5BVnBmTyFTEncj4ZAYWAGwn49ijQxwKbuPQ1t4jiiV6Hqh2CRFX",
  "key29": "41oTMReS5jYK4XkefQ2fneubZFRhcbPgZu3a7SzvaiomguwQ1VdHkxVNUe6BYjhFaxzgBnPNx6yto1YMPRxmNtLC",
  "key30": "5yrfQHRsbVCaQ7uMQx3rcT2tuFBSAYLy4pcLWH7aWJih99RjRb7AMAH161wiBN26EUH5cGwBgfVPtG8EbhmMu8Gk"
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
