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
    "2DLroVnmxhu9pSJPabHms2TVQ6UPAWupjohB8F5uWi16gvDez26skF6ZRGhM7K27p12Ycscbn79nfWXmJTRq9bwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDqZFUhy4p27hwwiGpeVUnBc2EX5UiVva3426oAxGNEiWD6Hsnu6U5cX4Gtd5axaSH4YMkNdShbDKU9UqhwdHNY",
  "key1": "64MEv3DvpzrpHPfnSfsYTCV41BoNf8qDx5dBuxszrxFqxEp4J5r73Qs9n88L3VKg4ZMt7Yzt3X1PaYzMDFoVFtYS",
  "key2": "3yFkbaG8o8QMsg2YnSbjXMwikGrg4XCLFstm5H76s289oR3E3v2YEKzpnwNYCq234N2PtcDBxmHAfBmabVzCnm8W",
  "key3": "5YwMj7eix2tm8HDVQF9bxd5jzTG7tX5K6hHZ4qK86kkbzPdW4TbuyaAe524vdi7iwEn5S197vNfdGmiLgXpYJgkx",
  "key4": "2SttdBSTLYBhAwapyvZMsqQZSKnt9zUKwyPiKHLYZmDRF1zugjJx3cpNXL8R4r6jXnnfaVPiwzQKnvmQjL42mVYB",
  "key5": "3hHLYy9uyiPpc3KbdkYZ59MCJbgoTmUbBS9yZVkqtLYazuhbAPxJp8w8bTnhC1YkgzfDF6j8kR3sxkeWgUaFoRSv",
  "key6": "4oB4PHBF6QENSUc7T2DStUHNuoZE9DaR9JoAS3QFUeoxfKqnrkWa2tnvbDXKFsQ6xnwXSRbFTnGHD8nUdQgD3cng",
  "key7": "54aZJoS7DR6PCDPjBHCcKa63dAvPJtCQ6QbtC8Ygi8gFd8pUnPQiXZWrT4PGBc2zPnoua4X6bW3R5R3xJ1euFa5c",
  "key8": "31gJHzXSPG7ta7iwCBQV9wQEKvAtxDp6eB142ZXdGWEMt75V3yaMSzaNwzxj2dsxyXDtDa5ZtPPXn5pU4frgh9Ju",
  "key9": "5nPVTf4u4Y7VBWXpTVd7EFY5tQkBVgxksMh9hLdcSXLzznoq67aG719dAAzgctg5pdey2NR95snGTjVGmJFqnDmW",
  "key10": "4kkLpXnd8bJQYewuxo2ZZrr6yFVuWvtHcEy5MTLGNW52rXC3c8vcZdANEiah9VFKNnM5A5Ab4CmDyTatUPVqPpRW",
  "key11": "4eCECc2YWAMLap5CjdkqQdu2UyvJT2dTcvQFQvzfLgMWgwumRRA1jgEzVgL2hhhr8v4dbW1sBVuFGSo29ycLwQpP",
  "key12": "3QXEWVuCDCtdTNkSLe8KGCZNsSuTRsEJUQrePDjCVkHqGX57ExJ9ChS1Gy5jx4MadDXuX2PZuoJ5ipvQsxnCjbmA",
  "key13": "5v41ihMM9Ejvun2X32pv4hC94ExNS9hq3eE6PsmkYheL2ro3p2soMpHhsHL7QkGZ1YK5RTNJTswBMWGADVtx8t1d",
  "key14": "3qZKJaQYhcWKK8bQM15teyHp9LYofxcGSYaR9LS3DhTLhhjt8Bw2bhHX1wBycoyG4uBNyvw4fho2EKRvD1VKp1mg",
  "key15": "4nKXVPEgNd3h53H4ECvDwBSCWt7pGP27ysswz4xmWsizDMHhfekrPB2GSGtKJrqdJ4HUSiQpnkyxEeDM2fSfBzeG",
  "key16": "92NtGiPu4qnRrsjwSJVAdRRoevPSpdfcHwL13tK8tVo5TXDZSvknF2DL7pnPZSEbXjCV3TdcFqyPcDWPjcBkigu",
  "key17": "4NEmpYrMBnUVJo6ZpUN9841qog8EmWVNUSTpZvG25DVvkBq2zQSgnFHLFZgFutMnBSdLWVjgjMfVR6oNGdepe6LX",
  "key18": "4qTL3GWtwpDFLgfse86Eu3xEBvv8R2cW8wL1ySyY81iznFzUdjAT1vu8vY3MW977vKFmfTXpB7i3HATuMHtRnSjJ",
  "key19": "3ADnC92ABRe7MYzkuMJEcN5B2R23HVbjYBsHzjwDrtuxakhSBcNekshVbiPUogJ4FvrYY3j8Nfqp5ueirp2xBJX2",
  "key20": "iqGdJiC1gs8KGxV3Y4LMubGKMbx6NRZAnSghsiqCqzq9CAnVmLHSkQnYujpmxWvUDViRwaQj3PdKUVXxbhYtB6Q",
  "key21": "2uEGKfRudoohq3cKUB68rzfFNYfjtU2q3T7NWDTAQQnYEe3ovwfz5tTd1L3avEchWsST5nrGenifHYvZchgnTvCz",
  "key22": "Pgfh1VPrX8iuxApxCHEumEZRPHD6MtxJG5o1u9J6sQhaYCB1vNybSyu5rMSrfq7AAyDEn4Hi6XthzRvg17WCfb3",
  "key23": "4DgzBqiMyZyrnZpSkSYWghV5TrmgoxKCBts4iMfGGHVV4wvuShNJyqPYuivCxD2KgrtKWr2ukpSgR4VrzBwoswkM",
  "key24": "2KjFwmR6v7BPa1sGf49HQf8MBHDPZhcYxTTtKx6doJEiZAcpjgbqqAePfoiG5cMgVyuXt3do51whTo78TgFhjN5r",
  "key25": "5PpxYrfbRpeS8W6vfGQacAWXNhJsGcEZkEKCtNhRbcaKsaUrni2QZGRaq1YLc8U848tHBXwX1tvPGQA9FJeDx82w",
  "key26": "4qqW1uycwfLLGM4SPq14j6PaQKzBnroHLShhswLPXB58CAJtZYfbtf8wJXnZ8RPkiEBDbN9mge7FVSpWUYraCNjU",
  "key27": "2uLDZjWqExJ5MTfunTqPefyUitrM8YZCxAoGw8U5WWYUJSvhtSQyXb348UsXTt4VpP1Fr4Pxo52MSPPv4i7BhMe7",
  "key28": "4TcEn2DunrdZ2xwNt9zhFdXVhHDeWPMWUVvMWTxBLXMPkL3JHFaDH6eRMWvtW5iNuDUS1F6YjSp11cEphVEtk4oU",
  "key29": "x9sXntJovEt4Zt3V2jmS3veiYQBQEbVDjbG4H774oYTxsnxUT1JZZibvYJtPycuevpQuqLPfqf4oz3xDcKx2YJJ",
  "key30": "4y8Brrs7R3xAPPsVvq79ZrdyRnyWUPPvq5GQdTwDvggJdHY9oK8ijgcGPiuQs9z345wduRPoUsyJoCL1ZUW6U7ar",
  "key31": "1DDohDy1TASex5w8rtg6r3buKUAhJjs2JqWLfxTYkQVtogbnL6AmYmBnmQoyhHoVr1KGr6XsNYNDYWywcr18ubg",
  "key32": "2GzTeKwyXLN1Qzc69YfepsGckSNuyRVF2LkB4j9d2XSJE65ug4ojzfQy7ZJjSgKnYDj2BBgDR4bMweGWd6r69SzC",
  "key33": "2xXzU3CSG7CMgiHfSqsTwaeGSPjNr8zjtCAkEYivDZyCV62b6yGyrsoVBHpko4VukysrdmMgc7K7vpq4qr3Aq89F",
  "key34": "52J28QFynNaewzfWAENQdTBh58Zak6n3bDcBNaNAbFjqp717YoCfgUg4Z69Y41djRUSzQAwmxHQkBRRr1dVRWsy9"
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
