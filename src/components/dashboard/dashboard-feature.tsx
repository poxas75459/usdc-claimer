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
    "21g56J11khosqkjF78PkDkcNwe4qkhPeTZTNehgt1JBNwAqEFd8eJT2vCU2djyiKHz7wBhVGtdkirekHe2i5SXD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8hEr7eZNn8q83XdLwtNThMW9k4SWepVG4nHuk9skPdKoMDhaaSrW3wc4TcTZUam5dYsSf1MdpzzuXeVDhHWjRp",
  "key1": "3TUXHDakuERciSHoV3w3ofRgSLSvuvZSuXBVqj11D7RZVg5a7ZWutdiiU5BJ5CFJBNAdW6HGiZCfXHuepEfLos4B",
  "key2": "21tARBSLKvDS5Y4PmtjMwhRVizF2BNdrt7WwrSLqm3Bwe7ULAokpxfRKv2Sbg7QLaRvecp3jo5NgDoo5GC87NuoK",
  "key3": "4hHQm6wquJP7tx8iyo9YgGvxnMGynPFsNQvUfexsZc5RmxsxEas5SeesGcprLQi1pWQ4QB5vaGsYrpPLFY2N9Lsf",
  "key4": "2NABai9FKwXHMWcS5AnFMj964svJoNVnDJHvYEEdvCXSQugN5T9rxxAm65wEA15VmkBD2vrn6X4UfyrdqhLWRQxj",
  "key5": "3SHd6qydeu4TkLh22uasdbMAjUz4vtTrzbx5mF94DYtVPMyfQ4Gbtg73299eLCzS3oxqhwDQuqAsJSnTevePC2Vq",
  "key6": "sGN93oHyUPssR5RKZR4Se8croTWi55Bxv74ZuwYJ4uKZT8mCjAjE9M9snCqaiLmUoqwwjFgmc2bXo6SVVnwyhSB",
  "key7": "5vs6jKCZsmV9jYFnDK6VKSiUPmWUSoVfkLCTnUEJV5zUbgB35K1Yyvk9dg2orGZuphXjPyr98h4YBE9cxYcDdi5i",
  "key8": "pcrat2D75SvZaUVaUD91dAwbTPBdkvvBkKE9V8SWHvQTW8PWa6vqFSdhiBFr51kr4DNA1gTv53GMqyao2z5mmZA",
  "key9": "4YWKrFTbFJdyPZA16RQEU8HqptjF8XPKA9TpgdgRhoZDiugbgJBkEBZyZdLpC79F5Kasjz8pKaAe7Q1Ffy4vEuhf",
  "key10": "53YV5VpswM4jYB5L3JuGHoTjDBBkyLKXPm8C6qtTJUMKtuU5g2cFbWCerGiHUEzzxcdGxvGcnNc5w5m1itBTkahx",
  "key11": "4gcQ2DV3sTz7uhPbUM33LyyPAgMs3trkuSwkbVVesLHqqUY8zM9TbYciJP7GJMj4fhp8XCD1rWqS3YbxyPWEd7D1",
  "key12": "DrwUSZc3sr84GEjNrbGTPCcAy6cM8gVybyQ5zvx5sgBFdjQLMhezZQLCqQZhzjP2rgMFJcpGNeDbGLWW4J3DHKk",
  "key13": "2GZYWK7TuR6kg5y1RmmkuTmbKBYNZJimEKdbCNXQRJyq1H33FkErExygZfzYqEpETGX6rRY2MsVLXLmWW8DCNps1",
  "key14": "526ERRCJWDq1rF6fb2qqWGP8n3n7BBnG4osEC4Lr6RuYNS8R2XeMRgBESsZCvxXdJqJ6MZBmYzuVh65jabmMHNLc",
  "key15": "5ZoDPFUbZ9zTn8aCeUBUzgZXJ5aqpVZxzbTwchRBD4qTsCUTwUd425RvLe8dRgidwxUZiPv57rDbMfCZpA9tMFsV",
  "key16": "zVfBqpaGMQ4jjmitZCqEmo1QHHfTwWcDpLVeW79CfJArhwKFfwARN74W2d5cXhtBdc2mkX44KBhRGPQfhmFKLNX",
  "key17": "5ZeNczzpZRuuWW8kDhcU412pT9Ri9cLnGarfo24fd3rsgD5mmanUzbDgvXRAqa7zfQBe6EyZZAATFpusgh6PuBpY",
  "key18": "34YsvkjzHmyW92pK9EqzZuZ3LtLJC1vFKDTAtEDYU6pbE4aPsGAAMjfW5bbhgb5V59a9bSyPSh4KfiCZ3Tt56jyj",
  "key19": "oy5LNAtEaAvUv1NQhaqPenZoNcw8uJrNa4dcWBv3GdmWB99JL4wM9zf9YGoaG9RCLAq5huLrrHiJFd6Ydd4Gi7y",
  "key20": "2JBXL2dEPnkgiQntYN9ywWgR9J8iDcSmwQQK55ePY2xehAL3HxzaKJuuxJvRcZYzw9hKEQhNHEb3kpY3SdtTLd5F",
  "key21": "5gGcny3Yw4NheP9CEHPou1siK9kdLHXkcr7aR9j7YYoHgbxcdLAdBGaAftBFMbS2QFueYGaCeRN2kSY8zkj2qHNo",
  "key22": "533mbQ3JKw1DhPnTNUJJTyd7rSm7NC9nU4MpWmchF5dRrcVMAMR6yBBR5CGvkmAc83EDfxiR5ro8y2km6fLzGrz1",
  "key23": "3uZiFk1Gx2BLY5fkDqaBQWSTR6FeFTVq5WtMRu4TDUxwKqatdb6uJDwNToUdUu415WuwU2J4YTXexXhxx824Ztp5",
  "key24": "2CaD6i78Q1MceBDKEe85VFFfrfFYsL1SHpimgYhdRrJDEnY6hr4F3iLbiBGHdQ1CPNAQJwmXHpWjfzmK3u8YRLn7",
  "key25": "3nG2wjz5V5dmZx5Pb4m5K3TyCXPw2hi4p6JfMujr9pCT6aL25WvFz4KNRnPzX1rEmFXrXgsBus5tcxzRgJEmGthP",
  "key26": "2R2YLQiTRsx2rUjebtgPAJTueuo2CfQVky4DiNVzdm4ASszsUcP7uEGgwJWm5zEsGjVxzBAFd6t8wrYg3aXsTDaM",
  "key27": "5coqUAFPyJ6pduALDkNbsySB7vfzehrP8Cfy2AKPhWhcj9wsqtpC1DPo6LdTeBNJs6PhWCy6hGUGqqZQqKNuKJue",
  "key28": "N2K3DT5bAhNYf5BzrcUUnnnAmuNLU2CTMjS34sjaZYmL9nv6oqigjZLn5PiTdPS34n7Mv9sHPdVuJUXV2Wjd72s",
  "key29": "3YK5vXaKFXK4vt85DNvwVmufKNNqwcSWcyRYHAsa7o7qnhFLpyC3rLLeQaJRkxu7dFUBc28sKNTEPLvjJ1iC7Ctu",
  "key30": "3RUoaG276paHhAU4mioSiqaBEa6XG3pqdTDZ3FQYWY6kiVSDGiUU54u3C9L1Q2CB2es4hsxZstPcu7VvoL7NzhVC",
  "key31": "2g2bn7eohstwbSrxEqJmd6S9ifcc3m62sWtezbsrcoxzLp4V5MMdnag7bbD6fRN9RV2yAmxj6qYMqqwFoXXX7wzB",
  "key32": "4spv6GGMQ3mVc2SSCmdUn2YjU1bWrMo3eS7Yy4BqQr4czeikT2CogAqD1n7iB9W12R6mNjePzSg3FMH5jidnSMpg",
  "key33": "3V823DQ8ncUH1oZeFTUxT4T1aCSyYeBb7aB1bBLsTjYgEzoeGcN6D8kK47KM4hVkG5hzx7jhbZVcJPwaWKMMrWHh",
  "key34": "5Aho2GEcBiEWMhsLWRZaVnfjEpKBr2epNZdER6dD6hbrG6FBdPAV2dDyzGKK9bAa4nXipbJDHNWTKfSzGHs7vdoR"
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
