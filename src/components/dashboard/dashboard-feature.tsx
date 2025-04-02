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
    "3dqsu5uAhfUg5YKpYu25fy7HGh9kj8ZY8Lqo8x6AQ1pZixrNPs5qnY8VzVtJjzWstx3A5npajmLaGyhUW9SQndr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7pt6NJz2nzNu6YSWdNVQWXJ5BwJWf7ZPdSyxwoB76ndrFARJTAGAjh2gPrBK7T16rqPD8fm5Jb5NJGXzc6nKp5",
  "key1": "XHCoWRVqXQGKxoVnf6jrKdGtNr8wikryfJLcyDPDH7nWWDR4EDZayZKhcGV8iiW7VkMmWfsB4v7S7TT3b4eWr6h",
  "key2": "4w44uvXRJ5kMo2wvoY9AtRKuqqySM8S98LjA7JdGjuSzUuNKxYXWJ4Uzgy16BbKKhcCfSfgmMYJJbN1YJ8cuuU9S",
  "key3": "5CNMPRR98R13RxsBTEvLeA1gBLgq54P1CtCfU5SGKYS9bMezeNVKRUHi83dted8iooCDYwuJF5kLHUzq15Qjz9dj",
  "key4": "5mqKYugVWKsKurAgFGnkm1JPJJsVwN3xcBETCDzxfAq63nABckEJCLX8L3EBuQ38X6cQRbDeXua3HvjJzWctPWfJ",
  "key5": "4SYzhsB78p3tzQMCtAdzSJWiDph9swSNJHgU3v2xawscNzzX1HJcjmUX8HWCeZyaQyjEuTCqsUQqHThUsCaauwrS",
  "key6": "5bfNdEWMshqQk6JpgvTeV3uCqMb5i7BYQSbxPXjNvv95pUEv2cg17aSx7U7A4EBzrFy8EdGJUkjVb5eHMVVMfoSt",
  "key7": "41thq19LT84NySvEtjZJzWAQdLVrxQxkD7Yk5jzxgz4ZUuTA7sbQB1eqMN1XJKw6funCaLLcx3ZgPdbb4AGAsFCe",
  "key8": "5x8EcuujiHyGs9N4uUNBRLa7XqHaZHXFMfYF8AW3BhWAssrvmmiueddfF9FVJYXzSZxzbACTsC5jgULE5dbdiGHq",
  "key9": "LWu4p2gEAM2h3JFai155pqc2q1xqGogCUGHDNSff3dWD9qj5R9k4W56Yo43re7i9EKydfCoekAVpSUN7dXvXjGx",
  "key10": "3AGS2bQ1inifzExB51dyBamAEWDyembrjHjZCSHvmmZtaEvcJL7a8G6chpwcjJyxzbRYu4vUJc7fMtGuEpkLcfgo",
  "key11": "36nxLg74iyxJy3wjrYYtHj6ZmbXNsxfzQq6MqhZ2cspVNRCxWMbGpNoD6fNYcJW1Hr5ZiBeH78ziAAcnn6CRgQnN",
  "key12": "yQJ95QC2U6iM6YakHVQkRcF2EqwttLRUapKQheXmBy8Z6K2sBDfRJZaJMXQCbfWMyHkTMWj73buXqxGnpivuVqc",
  "key13": "4b9WLEGNrwhh7yZChibLEYDw15yusCA2x8hWz37484s9nTLHDa62jYS1KLgezyzZBgvkEcKh2LaLeG9BkmzthNxo",
  "key14": "5bFNwau13mcqrdDry7ChqXZ2yAV93gTyev3jMWKb4wyg1QE7f7cPMpodwQd2SpPg8aMtX38bNZuxefydhSUU6MHB",
  "key15": "4ovYNUHNwQ8QKzeAqdsGy6nyZkmuM5pTeCP5T9VfeF3RDi3apK51Mrrt4urkTXtj7bNefbk6LXafJvsjRrTaqCNU",
  "key16": "4Q9CpiG3y7LNWdcGEt2tQNzsLxUkzqNLUKmxNEVQY2T5oY3biAhUfXF2kQX4aKBqZ2Fu3d2eikYqt89aghTJ115k",
  "key17": "4dnupofyGsxWDeLVxYqHHYpDKN2mRqpVPjh1m5UWSmwaQHXbSGZG1Q9U84kR31VxEbDktCrKDFmitdNo3rGNQ3dD",
  "key18": "48BEWuEb67Ti3JbBumzxnL1fBsP1pr2CdoDjK9GpCszTD9HLqzC73GybtsJ5kyRQc2MQKcuQJubacDgpm79wk8do",
  "key19": "5d79xoCmBZvHPJEzpjWJKKsuuSZjP5Z8ZXVyLFVk6Cj7iLuLRLVaZ464adn3PjXFKqWVXD5575DRgdA5g4mGBkwV",
  "key20": "zvj8ghEch3XjGcwroqo3xktmvn6FMycg9MriTAU9vrvHA3RdmbPVMwWGqMjqyazF1azAfuHgfGhjVsjuDG8EotS",
  "key21": "LWvFrE5FnuYcvdL8Qc9QbMZvCm84UeUbp95HmKVxY32WxiM9RRBtynxX8tNWNt3VsM9bDhkGF8XgN2SHs5JbuK2",
  "key22": "54oiXsf6Q2ARTBwwpisfkvwCKqtWCUUGwcJu7nrkYZyPBW9TmrBGBAuKTcME11BPWkucDMSAMYX8HomrfXee86wo",
  "key23": "3Z3y3VmdVnGYkK2knLuWZgziY5VWosL7styMi6SmL5ZiyN52VNUpKE4exsEeqqMShAFRZ3h6Ec5h2hryguTSeH4s",
  "key24": "1bNErcGyhRkCvjCvTzuWT6iVyj7MXiT4U8xrzq1ksAWuEULo7h7wW3eKK89bQs17qfwbimrT3n7SWkH2Yi8gYuT",
  "key25": "49UuxZweQw53pByDReZmuGq2NygurWCoDuxmxYX3zUxPNVkhaM3c7x3GMFbnZMt2zFyugU8oxKhsKeQpAoNuSYEX",
  "key26": "45tw9g97wKSHZeHdNWnk1FzvZAMb5VSrJXCJnf2Qwi5Xg5YyvgELCCZkPskW6Y1dGajbi5gfx7eCFmVwt5TsZugh",
  "key27": "TT7vHAM3VL47Z6bHQNvjB4np7azF9CXN4sHthYv68RRUEoWZTDwzPU9AGZFsvr4P7y1nJKpfz7jP1QY9hXwuQz7",
  "key28": "nGjreFUJEVXudnm2qVPF4Ux1YQtNcYFQXL3gL2xjoX5EqpzTSe99voDmsNMgEtBKADmhAoY2necpKKuTXXtdwfe",
  "key29": "2Fg7a8eMt7BFAuN7Zupw7yciTnKTzeD1W8uDPfgqyKZ2uP9qbG94vBrzre2EXWUsE6X5dd1xXiHAUgPp34tp7xgv",
  "key30": "4JwV7FYWHeYM98c1HTs2PXKHTNA1FfrKXNrDZWDhXFw1aJ3y2HgFrQZh3RYapjwzvFxNFn2XALBcaAPNWZtGzh6n",
  "key31": "3CiXY8ERxtct9Xa949sR9VVcEkkCv73jo4DsXTsfV9gsiWr47HJxGKj2qzSXqmW4nT8Btn8gdN9XaHp7kLkYj8mx",
  "key32": "41U4PLfpCajPkwknQA7nnMgXx9hkKX2nPshg78WmnGxfdvewZc45gNafAzZkLhgXfnpt3od7wocYUFib9kHMerP7",
  "key33": "ybGTS5Z4evjqHGtn4jgumSmjcVSS3KqKiRjaRu9PMGq5BwMWKCVwHCVtvVfiRaTktnwXQEpGuvqsG5YJzQU2VFi",
  "key34": "m2qpQ94Kp2dTpNf8gob97qk6L1wB8cecuhWaxB6CfgpzrAkq5Ze5v8vwNWbtdMBxxcofA1utyqhZfiBf1JMubi7",
  "key35": "3mrUM3JHzkFX8X3nzSSMjxDxzvrFXGqqeKsGu8aVRXAPLyrNzf8SuHG6F2EWdCDPZeVQhTAoYpNRRW3UfpfLKpuL",
  "key36": "4AYx91ckam3FsLZ4KdvB6NjxQmJrmxQMuyHu7xpnPzUnRhS59UhCZqsSnpMxur4UMpedqQVNM6xqjiKxmSJN1U8d",
  "key37": "UiQerGGHqVEaemJUQG7A4zp974Buecq8BRkt4tGBQnNUPVE3uRQ5TQMg6Tmb9fVkLZACovTQYTmunCdHqzAy5S6",
  "key38": "2K68GYZLpxryDgRGe7uVdzMFo9wZc6ZYgjANoy77EBv9Ps6HLrLj8MWFDTgZgUwSyVuYi14T2VduHQDJsXXjNXXw",
  "key39": "5SWdqY9wSZMkGe2dwT7ChYiX8Ek5vuUwSyTGw3ScZVPiULvi6tCg3NVb4C14RYFEdpx7ygsTxkoMfuvj7fh6EMkr"
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
