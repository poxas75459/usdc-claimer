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
    "4gXV7Li8DtvT17pFLyseRxtjgzBZvU4s8dX37X5QrXGea39MVvvnCduq8QB4ynL4rZBGWSxZchMysvU9pav4bwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3Zt1kyLsK9VLN4mX2vcU6aK5Ra3GDZtu3EA1pjqgNV37hYjbmA5KzZiU1Qi4A12VgY7gGJ69y5mBCTAS92u8dg",
  "key1": "5iesYqYPViyW3FEkjbskG16ej51GpArqfCoEhzhHV2wDvo1Tc2ewoYJ94iFGExwE7L5Jeh6vBki4GCoUPKMZcPA8",
  "key2": "39BS9YaCSd9wFkHmn7y7V9s2QhRvM8DA6CxTBXeWo4u4iK8NNRAx5B5HbM7fXZEDnv7H2saqHWupqzxD4uvmwVuL",
  "key3": "RY4zxd5JE2csZ9u4WRMY7QTfXqrs2QuQth2uq8Y8qj9e99DNw6zWvQ9RNy94aPjAXbzGU5ZRqkprJaFCPQGbjmm",
  "key4": "5TsthxHZKRbDrU85HbD2L6PEFvzZULKTC8rUxa2rGV6aFDQgsGkS2Nqj4tWKHv4w9tXuvpKpRx774KikTXKRot39",
  "key5": "52BJ4B1A6HkEYsLwXD3P9zWnWWHxe4zQBMH1UjcpvPp2dyPY7iHbzj6vJRJ2doMpoZEUNRPBk4SPZE5yCRaVsFHX",
  "key6": "4VPRVUUUovfhca8ApF4XLz5x7AKq8iZFshb96WsxdQ3CXcFE3DT4QMnJSRQgxTYT6sGLt1dJ6XNiVdwhwSbfRNUA",
  "key7": "3gBkiSyik4N64nHrpHdUzuXWXe3KtmJGsUN5rPyKiqHXq9yMaJbQjeQs7VPrmT5fEQALsdyemdruJP4Bymvf9j1Y",
  "key8": "2YB43Cc9djKYFUmpKXRSEK3zJH1676VLoZwKDDMk4TuXizxuex5TxSh77Uo11GtpgtWbsSHHWJYZxmXpAHpoSXXd",
  "key9": "4DZ6pgwDrrQf7MKzEQjJCmtjsUDW7AXQjo2uFSULEFvkrde7UgXhVykXXnJ3Xvik3n6icnY8sNNHBaqSHS6XF7DV",
  "key10": "3C7zvef7GB7s7amqmtUGYmSoyfC7xSCEx7W9KVqtESZVwczFrUnVZKMx6xzUXBgpa7eNz18xCWbRzQYWarhkHC4J",
  "key11": "54LBgQdYJw1h5DecFxL2BVXkih2NgpRnX7VB46Uz81Lj2kGWhMSnv3ru4F7JzJLcvndVjHx9Vjdhx2j3aEZHdvfT",
  "key12": "5ze8mhwPf94GD9vx82hbXBpkiAQ7HiwH1sYkjjDvPrZjCpMJtxL9wP5CDstQK3XJKEyLiqntLMeZMFrBCE3b61vP",
  "key13": "2kjXCeXXxFWDktq4NuP7KQEwNJPqTNKaErniacY8LiTzdzSKu5DmWEDgJ7s4x5k6sSytFiiiy17oy53cdr67LnZe",
  "key14": "47tp1dGKhdiMErBjPV8enXGnSGqWF1qaREb2T3ZLVS1vaKpd6LxA992Hacs4HgmfoBytYLB7zvSWUUHnvgqGDmuf",
  "key15": "3FddTYaxsAK6n2LfTY6gGxD7wZm31p4Jt1xdFRroRXHBZw6xUY78qb7QmJqDxt2uGFSXEPA4WogZCrkoWnwgVnms",
  "key16": "4SEes6T2RDXnS6sPGsVtiPVjfBfmcUGok59m7PGzSfajDScLgmuAGBPG3JDvCWfr5tA34w65TYbYnkeA2JRBojmg",
  "key17": "4A1G6RDfxYS4VRmev1kbcfuCjv1NFhXY5x24oPtH278uMw58UiZzYyq7uwMu18VGB6S6Zw4ikLo6puemJyMqywhT",
  "key18": "25L1YwmdrFDp6kHt8UjJyXoocmNepYSgyMpWaLJ5Hb13no18GW7pJqB2ymivAhPQ57dAExNcQhaokFggfxw3xHgw",
  "key19": "2uQw3txMoaaAsyntyrKFabemPwM9KyL64CrpKpebKmto1mr7b7DiYEmSnpL6mqw19WxYXtNdQVHzKBSWfAopnBTC",
  "key20": "q4TrdgJvdwTDFyf6D3ePzKoqUUfEhFP6sXQKabgZEb3oeSbzZ1XE7K2Zdpa4PyfWqHjNeGTUGdtK4ghcai8SVZ8",
  "key21": "3Z4rM9cB7uksxuifGwyuQx1FGaawFZa6FkqpqSJWbM7XMur49bLN3BEU7Rxo1FsvYpdrXk2eiQbkyADrgQPWnzUi",
  "key22": "3rprdhfVsfwXA73vq7YF8x9vCKKGPUSokTb8SkfgRQT1heVpZHJN37jELtV2jYEFA6Gnfcq4riXUsNCFR328LqzH",
  "key23": "5Me3UT42jV5rWT9yZ86NZ6QAVXNruJwvbmRsxWeSDy9vUZ7DTTD7pjuJoe7RGaM6jtcP28d8HZJME3nDMrN6bt7w",
  "key24": "3hGdeyuarStGqyUQQrgtXEe1RAGf8iGkJjCQYKzzs2PfgZtKU4NdC9SbS1SFhKc4VYmFRbndfJp418QJ3TqxEYk8",
  "key25": "5GNNYAe6EM7kNcgvv7vCtGvhBer7Q6w9M16w6f921iCskFa3FtXZ8AVpSFfkEJEt1128pPVRCjiq378WZgdi7sto",
  "key26": "4zD6nK4V5iDqdAUtX9UkxyL7DRu1abcFbv8Lq33exaJKBCuxQzRby5ZxsAtzYBRnwqZqJmcDWZPXpQb1ZE62Fciz",
  "key27": "arC8Jqk5WGpctRd4rufLLRo5CjuPSm4jJtr8uZfdzaQizfuYXnQBE4cd52TwvSmmv6FnSAdjMZYt9McGDtCH5Vo",
  "key28": "5BK21Yfk7KXkGhPuiVz3Nj9F3ALr48e9pxYgQpY9ZvGyynrFnq4mFGYBLWAyMwjDPBU5BTNKaMisw5bKzW2uq6gL",
  "key29": "5yf3GQLEJ4U61Ft2xG2iP3qyBHmukBHDe6WyRkhdty8TzZM2ijtELTierqyXY1YRU4GheQgn6cPzPNAR27H8vrSK",
  "key30": "3SRRC28AHEcVGJtRm8h8QFW8YkKHjyHmb3cUeSPsVEJ9UdnfjTUjdFLKSHH21st3PQK1uksWCqtsFWzEUJNjx3Jq",
  "key31": "2ZBYKTA4KSM5c2waCyPeZaYprQNDcZ91VH1y7YhLod6rqhqTNVEmsDbT4pkanxmHar1SwhoJ1wRa7a1kVpbUtvTA",
  "key32": "2UcZ98c5XrJPx14dAK5sCUUPzgDH2Z2YUE7QiLzzANNAQjpFQW517K5LFUhySRu3jrREEJh52XPqPZmo2NwbVDok",
  "key33": "4EN3Lo7repEXv6KNL1dbMcgrbmBF64LFPZc9xvE4hbdE9NvfFDDvJMHXbYkNuBjw8FYXYwbKid3Ee8SYfsxNetom",
  "key34": "5op3TrZS4Mqq6GR91oU1dxVnDHXyd74yRGQJ6e3jhcmvDWTbqD4TrFLDg7RuExhQ5C3oxKUdG1qZwgKHKFPBaPv2",
  "key35": "2CJ2BqZgWAzAkxfmYjHRp7dfH7HsmgGDss5X4wBF6sPcSGcooRSad241bSEH7Zoc8rs6Z4NMrtyaREi7L3UHBNie",
  "key36": "3pkwF11APPCzvKWL7eXZCErgbotub8civVUw7sTke4hXLBr9LBLGNspPVXFYq8u8XzMd6BwU17CEEfgPZRHKYYKU"
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
