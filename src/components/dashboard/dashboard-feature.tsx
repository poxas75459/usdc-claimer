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
    "3NFM1pHvX6z6jP4aneFWXiBpA8C6Js5LS34f2X1j9RUtnD418gWSSiisyzeQJjtYJqxG4UgDuZh7tmhxxPFyi9i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321kQeTjYePG6grSHW13xY2yHa3HskkrcJ3W2DAtkwLruNth7yRE7SQXoVBqQuq6UhBDvPLCijF33dA6VJkvYtXo",
  "key1": "2exEvniDPxDF8LN1i2TP1837safbzfWPXuHU4i4L5qyVJBYRNR2pky6ZteNH1wKd7EhzDjhRCFRdCpF5pgU7xEN6",
  "key2": "2bMGrhJrdHU8x83yL2BxZFwpEUoR7y1oounrtBcqXCWDNb659gvzZ1FiJtLLZn16Q2dvNia75UgFoEpiq3dfSSdj",
  "key3": "2HcJfrKzDdZqW4FqDoH6wK4guNZRU8JDdReFJdUd5chtR6hJP3J92kRYEeW6uPKdD2FR5CiwJbsmvQu9UvE9WeYL",
  "key4": "2KGCwKoGAqbzxC9ffpuZjbrPbZHeagm1dHGiTqEgvTwBU4fYfnYkXrBB81qh2pvhhnRzWUQekweaSypuoG6NzxUk",
  "key5": "3yFSH9qrVNrnksLApofSW3ovrVFLXkoZKk6L6h5MV5g1RyXNTdFDqhStFkoz1vN55ou2W3NMwjKHEkQq1jXyqatm",
  "key6": "2qZZMX14zUQquR5mQ5vz6oUcrarkGKEukcEN4mPxRJ5ox2qSMg4cwkqGE79bRW7a5dFYNu9SpnWYCxmCRXvdHAg",
  "key7": "5S3cRkJQvBuX5HeZVE1B63xqvR5BBCpeYARdFe71E19JbkbMM8XW2RMKc7zspcRNRZF5ryhBisNFfqgk9morCwZs",
  "key8": "oC76ovn48GYdAyrATWaki77RbQ9hkKfdydKLfA3LTCrW76z8FhaW4SdKguxjdUz7TuJ42tXqv75xWGnyCou18kj",
  "key9": "32SJmYbNkuH6Y5CLfwCEhWd6aFBvMNa3Azd4FEfHe1fHwZU7w55jdnPm7mc8SCa5Zj681p85zAjrtHfzF6WMoQyz",
  "key10": "66Yy93pQ6ETtDuZJW6KQhuErtMu41KQLZ2VVCttkJFPf6FpVJ39GVijLRHHpfMC1evgvLE4CXyn8pgy2enYhu3hh",
  "key11": "4pDs2BryfeEtWxJWJY46nuopbCqfXrDdMpTJoooSqwsW5KBzYoWkf2V4Mvf27U4hQNuRU3wU6bbBSSeAXhX3N3Wc",
  "key12": "KNetRKDedTrME3eMJzFw1q96bfKpGoUGWjFKhCJHYPMH68D9i9Ypsrct4pt7rLwvJJUUvya7m1YC9xGNE14jE9k",
  "key13": "5UjbP5CBjrm8o8WJ3jDf2ih9a7UvPbaL8U6GR97bWEUrcaGFmSBfFGvZJiDvWwqenPkDzXjiKs5MytKH9k4duzWF",
  "key14": "3buDkjHSUV97xhx1scQtiUJ5W5GwyT9icCM5dH8gNdhHaRt8o8gozNBd1jyrpkyqqVB6mx55K1Mpsypen58cjYrj",
  "key15": "5cPTghfpHz4eJ9KSZDDsQwhv9GrDWbWyVx6VrpB3NPg97NKQtjJpQsSL3CfTFRZ9p7QkmT6a1kAF64m3geqwfmrW",
  "key16": "zwM1bfEQfudNEhN2w33mqkCeN57XFqUvjMMv5MJXufyH2BahbWxnaqAqm5ox2uPC35jsqnmxueVudyHwtwaU58x",
  "key17": "2vU9Z3MFFBt4W2LmUyAXwoAPpJ9UBPL9fy11Y6Gy9NTSGymwvcaLLyj3NHwUq3iJKJBTCzYCZqCJZSgHa2UYJbnw",
  "key18": "srgKArNGSyktxzUgq7Pq5dLGGsmuTgS8cjp4CeyjKyGBN339L7wYfnBKVMSBbaDQ8aryW52LZMozjttSX9oBdrV",
  "key19": "3FrA9fkjLGEdF6ZHNKTYD25wSTySp9hjGKGPRnop9Anu6UYk5MBwn1amN8YRezp7vjPwkyZvzFm6EiejLiqKg9TB",
  "key20": "48PM1aV6BYrxLbkB8x665kjwbNMYB51Lmk7djhXC2nppbWMBQNJkMPpNzidcf2AP7LkSpJ4YXMMhpyZxiHT9Kbzn",
  "key21": "5gnUmqyNgSUvDiqMGsALHPVfwjkyJFp3uUHXFTV6NogY7nfHS93eKCv3ppdjua4SqoY5xnmcLhPBDAoNmHov6FVq",
  "key22": "5REU5pD55Lbb96CPM2tVgfxBpQDT1oaQzFYN52eUKNaHs1xZm3svn97gE2DTietkDTPiko7HWtgw2t2vAZYjhFid",
  "key23": "4eNzNPEPcJuqH5KCTQjXNf3ygyUVcVf8Y7NxquT32LQMwTXAYRPw4QhPFRvhhKPquUwxoqJYcZMveMUycko9ZGDF",
  "key24": "5rMLzotJCeN54NZEYrU3kxRwpqG5ULo2yGrGgh9E9SJDR81ktneMts58ZXU3KgMNMVDaGSvjP1b6UJvZQw7RvkBT",
  "key25": "4e4LF8uRqR3eVPG19aBP4msRCLugAztWuHG2m9fdtGvmx2pG98R54ZQNzJruphtLF4xZUZNVStGzvRPXiheztWLb",
  "key26": "31Lxz9NCjxCfrkLp4kWVRQdmgaDvseonHuW4MnhPztDDZvVYDKxDuSp6RKCG2cNJw6GHfkNP8TexDHUXtEKpqRWt",
  "key27": "2Qt3eFnT7AERcu4hdvC94EJdnkmqRFZ3oFqocnt8jSjHesa4fSazLUSq2EKUJKebdxGcJy2iCFY5ZvkjN74u5dVb",
  "key28": "3hndgX3tTie7pxnxSXtJpFuJoCTqgxruvWuvgV68MAe2JFMxu3XjoUZadYUJWFX7HyYeQVoVrW8RELbZi6PJnpAu",
  "key29": "2mMTqEQ3gJbDAhy2L6kT87G6SDPzg4drfVD6i3QmvuFpiTra35unC9zP65vDgs2MXdkbR7FERMfV6jDRRuq8JY7W",
  "key30": "VoLZxokVPY8VRrpfeTyNgR8jVovLrHS9p8LWqX9kV5gzrBNBHcytuo99oEN4Yh2nAyfSdH1aJXxrhjLGhXtGiEM",
  "key31": "3cnHk1EdGe2rMdQo3HkUvwMVLBnAwQRoY3ULWuw78f5b9aRwMVH3ajeHrHNoLYwJfbtB1aw8Qvc9wqMWYyaQYp4m"
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
