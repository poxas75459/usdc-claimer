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
    "2wcF3s8n187MsGXqpmduU7vFzkPzv5AkzTNxag88ahpEf2Ps3wMnrTFUDYdRv4XHoku7p4rcBQZDjgAd5gA7rYf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrcTsE5JLDr826S1BjcbSFvs9UGXKTkTGjqGpNBp7fG6HQbz5isv2C9Yfv62BaSHqGbL62WC2p1cde2HccjFtEA",
  "key1": "5gZ8CDVksiuyWYFeiEM362HvBBRPSfmLiUBDWjEkHaCGLDAsg1QhHhnm6oR9Pw6qCwTWhZQws47s9CHJvyi4YgC5",
  "key2": "495ifDyHHvb3mfJXkzC1qgCBkc47eJ3vZb631Dq82r9GWjXuN4DX1jTmgCSexovQwwoPKtrDc6k7wLD65QdP9dxF",
  "key3": "4TB2QcYuLcee129aCNHs4QQoikRjNPczrA3oHymZv86VSnvkHqDhHqEfrnj98nXBPgpFshkzsW9jxPXdC2uE5qsf",
  "key4": "2VuwrXSkDp2xfG7A9z7LUDVhuVrvG1UPwkcv624a9AuYjGEwxLd1Jq24qZZfpUMLU3pY9mdoQqPW3pg6LtERpdfT",
  "key5": "4qCKBJHpNWFBGAMZSnzHeGKioU1QSHCzgsiTQfwH8L6GYhydzPYsKXUqY62TbWzUrUUH5TdaW8PDJnzHxzs5EhGY",
  "key6": "4Ff39ukqyzS2J6GBda4KY4Yq6553cJiASUfuRqK6Ukwqs3kjdbS8DShBFAY3yE7FGofRStzeBwUUZ82iLAfHpNRW",
  "key7": "3HNdL3iPVRPj11RuNsUKXZgyq3puvhRDGHMWP57mSpvBdK4LAhVxCdvyCT911UB2K7L8zfYkrdsupj6vkPTJ4CLf",
  "key8": "aPWFWidQvjo8xGJ8oPWVoQaDDgTdbeNEwiYwFgbK8f5Fvj37DT31WZAxpbbyyketextTvz7wN3FuVWr9gTMykJb",
  "key9": "3ysMe1VhLzxqbxdnGztZxsxtKkrrBKzUJ1w1r78QHdCy5TVwQ9eE4dfFupVp8HbbTExnzVLTAjmBzJHTTHXH2t41",
  "key10": "227xn8tiCkPsPUpq7WLLGWpSEnmonhYc4UXyTaWYdV1bFc7JtSYF6BvXWURkbuHi5QBR2nB2qb5FSTxMbHPdU4ZH",
  "key11": "21KSzdzBL3SRfRzpLVnAGDh1wCctT9fqhpkKfBtGbd2eC2CCYWCGug1qBBrVQHJ3vKsuWKN3uWjZuKa4A8qvn1Hv",
  "key12": "U5FYTKLho88k73RwzTznoLkY4GJmcEbD39wa2EcaE9fANrZ8SsUzq4p6VA5wSErtUKkaxn6vqL4dAtryr565JaV",
  "key13": "6ohMi9rk2fmVhd6j5TN3VbuK2xxDR7Rzf363XAMisPRoGw7d45kRKj7uqamZJyPYWE1jbGhuaKcL6izGuz2cBkh",
  "key14": "4CBhTVFreSzk2cPqSuLAXQEZHhvGNeuzGC6SJj4BczkgNqWjx5zDukT7nC7E8U5Sovpm5iAFA2upGzTZnszoNxJE",
  "key15": "44JC1Ufq9Pc8j679sxE93TdxTxE2bxzFi9THny6rhorVyBxf8kAGZjCenazDxjfQJdNQncUn6vmJri2FVLWsRTQC",
  "key16": "44GVKBhLFQqpgAUBmG7zGHtQc8GMv9G5sAa3P96P5GqqH8kzopWFQBTQFhT4yhFPiSQXu5kMM7cwm8mKSNo5yWcT",
  "key17": "5TtpbgSg1AFgBSVBddJ21jJTMZzfqKP4KXHyqdArWQDhfeWEgnYFJ5MNmLgBi3UHz7yBdirE5JfBfifejKGPH1Uo",
  "key18": "5C6fSUgSvTidypKcy8S2kSzHLmtxx225ebXFQjwog6L8MwTdTGjwVLbzseW3oXCcBBgKmBTbyJUMSTD5cvA7X2Uf",
  "key19": "4UhKwaNq4VfYrR8PTNUWtPxKxXJeVDKt6foReXgHUvxasiNZdjkHQvSCEPgh74NWQZWLVsZQH5B35jaVvCxEdEeo",
  "key20": "5QX7vJuCc8ZUoKs1dBhY9vfxqrdArTmojAM7J76hThfgn18ZkgAKpWAJp7TDNAwFYGe3YpCreDssh9nKTFGS4fB2",
  "key21": "2ErozECaUk4PYcnXUsdedstH7KnBLs5V3NYgnkL2F1eeE4yxb7QNgngzRbdyroeDkdxmPFsuhMtnubfPsUJzEetq",
  "key22": "7r4DQd9AF64LgqoXXEQrupgZzyzoT2Z992wJhWeTYTBB5xruU1q3vE74yHdURxiT8pTaFCbyYY9M64TBsetgWaD",
  "key23": "59kwCwKt5mA4Wxw65MRiX4CyECnLVLmpUgUpxij9BKsHQfMxGF4JVoKKYgpqZpbD2gAMUHre6j21waAtn2mFJoLS",
  "key24": "2L1KcVBME6tYmAMkRBteKSArvjTy42vCMp7GSLa4WGavJQeyKrgRaJrN1oAHR4ZEyWNNUBUfrCtYEbTpLZ98t3yb",
  "key25": "5nT35ivgYb8HmB5wczj5EPz9qvqQ85e64BsnixN4yW1qxBa5FgExuUQvPEzpSnVGHq5anxxfVvRXJb5KJycq7t6z",
  "key26": "C64K92UKrary9rYHcyemYoe5AAzjWsjakoFWcaPkcw8aepLWrcDDj7ALPoHw8uJ7rgHM7ZcY3LmiXhYvk3Ja4hk",
  "key27": "2XwcCRQTih2cJCH6KyFDuMhZo3TzSwYZDNjbEUUDfrQ5FcJ2MHA6uVBTxYhr1XsWWidd7fMCeLzYUeKtaNSyP7XR",
  "key28": "3QHGBVGY8H87uhYjPC4r87NBp8xvtNb73QEgYgNkM2C5kXcHX25cUvg92eWFzQLj13idbEP3tyx8m5UDpGecWYeh",
  "key29": "51tPU94an4UFMpvbiRk8FTfZWmJzPmNXyrDkuNAa4hBhCnnbNTrPrM2DhFFF73bQgWk2wFtFSd4xg4r6vAhAJLki",
  "key30": "3uUhh6uhmGymMBdDiuZEa5pj6uKi7HQwvt4PMdHaWk3L3hVo8z3iK1rvMpY1w2s57dUDdJDt8DkSQ6VtK7ym5j8D",
  "key31": "3fa6aSzxYtqRnnhcoHaRjNTbojkY37ne6HU54Cwcxu432wp9e3kkd4xuznXMb5BoSSmtCb3NAugzmLpkG9YZ1oGU",
  "key32": "5ry5qAM4poE1WKXW7dJRS1np71TeJQj9z2Yk4uR7RgUH93aTrp1dKTcGERUGmrYi4NWhu8gNnpuVEStzLVQFGys9",
  "key33": "37YxciRvfEsnr8VDpvrYA4TT5XS5HJabZTbbgcW94ZTDLoqRxwwf12qD2ywaBvhC2J7h4TG3QR1iLj2Fgo1xye72",
  "key34": "pEyYDhTe6P86LaYgjb4WasMCk97WWufFHgCimwoTJFVVXQXiBHRrTkgrY3YtFkQEtRPNerj5beXtPAqABdXpKt2",
  "key35": "msqR1X6169hBVLQYPJe49fRkFFbPLjmQLtta2JXdoWdyEMmpZZkGorPdwx5K3FS54v3BVGDnCVQwuNeV9RVgiU5",
  "key36": "sePnYRfPbLVMuJr1VyF14H4VvQLTsP6qjAx9w2LX8zAqt5jU59CCpcDJKRbjSjAU7Jk3hedDxS2zM3peNehvZ3z",
  "key37": "aggB53cnZ7HWV2fNEdvixb1yqMXcRWAoicWhLpSZ91V77TQqQh6FqvZmrH962t9QsTRpoDDncUCSZyBiiwWZXND",
  "key38": "4NBPTJZjy1FRubuwZJvzoHELtwS2w1QVm95L8VHCoh5kdJWHBn7knzremSKBCBYYfQvXD9MopbzX7To6Y9CXbCKw",
  "key39": "4GvqXxxfLvXYqQjKusq6gxzHDzxQraU4Y9r76mpN5sSKxCXcmGhGWDH5jgHAC5wi9TWmXNYcMHuHJLuaVSYL2PWN",
  "key40": "2RdU2xRALQqXm6Qe7PEH77hiB3xxo7YDHAB43brqtf51c85e7hYkRFTVQ6NTu6JNNoavzh6kshCskK5SgXaiELMG",
  "key41": "4eU69ww8b5cJds17pBZPruUgATKuAvRwcvoX2965CF7ZR53w7CxLdAxJAH32xzthMSVM3dk8dAh48WFtstsBToMr",
  "key42": "3evbLgZe9vRkFBSu4S1MQj4Cc9cGdAqT47eiEevdNiBnNEYBpUF9y7TKdLHKPAGM3dt2LUu8g2NbFvV4CozcrjW"
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
