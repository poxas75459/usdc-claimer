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
    "4hSQKFT6e4rWfvjtihrdxSzdeNZGLwN6t79tzheFYbuH2hwgTMsPLsyWs4VtN8HsuN6xbV8ryP5LjGweMrppZC5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYL3vTMps3QUbStoVS2RnZ7ggspfzCW6RgRvxuUq6tER4jPS4GXUw6tHbvAgTyCTMHPP4TZTRww5JbTvaP5FE1K",
  "key1": "5gzUfV3UpHVneGEEJ7VFCVmxgDED7vE5WGqTSMGL1ENXAo6tnVtok8kHiPpUWXycBaWWtjV9TaP78F3MxP74ht5v",
  "key2": "2NBoC4gTECmHEGFDpNp5rSMiCKEenwYsSGAMbFTytj592NiXUsmGsZa78aT54tUzWF3MKZVwxPB5JYoAzzXnKWxW",
  "key3": "2XW9T1p8LJVrqqshzdHoR9ph2SuKGZxEoJ6z4ybUJPenWUBov7CBUqiKRYVkZr6oNDDogo4S7HsfCeDq1HFD8cnb",
  "key4": "3fSrCJZ78nGvKDMQMiUvHtX2DwdYxftAgTeHCERBtX9Sh6u58TLGtEyBrtW3Ez8UjHafGMXBDa9H9x5v5gvHtyNR",
  "key5": "64zvbTdLooKjuJmdb9xncKpG3bvxaXPzpTSSfXE1fbuw8qQkn9uxz8XGpr972siVxETS83tcrs697gv9c2ypDnY1",
  "key6": "3zGxteHB9KTvnNUMBdfMB6Nsd6mL2j85DjRiLVu4LaXrgqbd4ZxhsWgDj8UaZxzpaNczdpbyLzhVqautjmtXCzxn",
  "key7": "53bVBGaPtKdvXeSpWRf4vNGo2iKJEqRphL8ra41a3CuS7hFL17iXktzUe6GTZzicK9xXb3NT2Ur1HLGukCvUMhZC",
  "key8": "4SmM63FmumNputJ3czZGHuhRqbvF23A2UVoeWs49fNaa18yAFaEDZUnSJKZU9BRfJNSzHhCXip9ViZMqgtXDT8jN",
  "key9": "24MFTvayfZ4LfvJJkGiPTZ9X3KxH6X4NN71bkcuycax3ENgHcyZKqZhDbbRkXzhZDZQeVbNoibZEECzy1C399HeF",
  "key10": "WZrutw3q7FehmRU1cnHbDsGfjPiH21BYXJECXJ4PGAUQEhzVW9H8vNkHufJbbrFie5QXmHLyqkuazVvfK659UMg",
  "key11": "5Wmm6p2dd3nHB4tcecPYSjutt4MT7tt26ffynyAeS6MMXFCQMhgWi9yhYoY4DTG9ADfKfq9GJD9cvU1T8ZdZyvWZ",
  "key12": "3FLiXT3hBS1xMdMLZyoRgiPC6eUDYCjUdHmAtGh3pQYjpRVZBkRUv7pkwmuZiT7pz2wJ7PuwdAzseMQVn6y285gk",
  "key13": "2LSUSMniAbn2Ta6yvYyj2HegYWdYnRb3dmpMuwxhCB17UjsPGjPfid1T3MgDo1xkq6eKixoTgDrPugRPrHLqwAaJ",
  "key14": "3T4Uxkdm5yLQs2VR9w7qeLNpKD6WEw6hJRibxBXVVLMVTzVMP6u3NYaecgvNJKh2HTdSFTsQvpwEso4QGN6Di3jG",
  "key15": "5zL2ghLobJhqkQR6WLq79w656V6Tx4EnhjjJemQMUrp4ZDUajvhsRTuJffQGDDoAuqwcer6uHxVnRji6fRXUaDxs",
  "key16": "5Q7JdSr3vsuvDkjGZhQZv5ktiJNrMbAR7obxwRveSF3pm8xKjXBuHoM2cFfhqJdompVGmcHXjr9LxDLBd4p4Ver7",
  "key17": "23jG7BdPYBJntD8u1uLmHwTjYHc1UZzTb8VjtGWRXQMCT7V4uSE8bASAonxbdiSBZQedDThyMqjPZm9dwzeekJ6G",
  "key18": "5K2fPnwTeTGivPkxdP9ZUPKDSp9Kh6LjQEaD4hQmxMdfYSJaekGaR1UrQc9nmV2tw132ZdGFuU2TowG8eMqLKJmF",
  "key19": "4niJUoLpojQmrr5tSvZUJw8E6SKyAMGADbh6qg8ZcajMCNjDCmoygQk6YE2Bob2Cidnnry7fSjtjkMVWeDUEHvB5",
  "key20": "DbmeRAkqPVKFp5dTFQi6bSamQYBNzAgMno7neSGexJbqLewSFEtkw5bJREZjwSvgYQ81RzYQ4tqTbrcUGb9NSRP",
  "key21": "39Ea4Gf4vkcXJWwBvJJrXpdTmijEpCFyZAyf8DCU8ipahnhAh4XBkDqzLtnkczsxSF1UyMWp3JCrsG3qq1bofLUt",
  "key22": "2Btim4hdL6nHzaxjep4t42t41fvSRsqGErVbBA7zk2LtWHwxs7rdDxAnrSHt1tZksQiasawv7YKTF5hUrNUnfS1w",
  "key23": "DPF7rU6pG5mwkGbtrdanXoeiqucfPq5rb7F126xvr7KoJM9RapjaffUUxKc5qWpYBTH7izvmL47pjAMbtEGwiPw",
  "key24": "2tshNhnrbZTZWG6mvKnP9CUAS1VcvXw6AqJRqWWn9g4EPw5qZkG5FUJM9zmE2JoZRze3cSN6w94jbjxjpWQpSan5",
  "key25": "5u7N99R6r2qMygpxhf3GuwHtvhUKVWoJ3nPwnMm7VNNVCRUXbr2rRMJaGnjx7VeX8pri6FvCJgQepkEWvK5q3ip7",
  "key26": "44nuMfh5a9qU5rWpu3iJeGAebHF9dQXLd3T8MrffSHjDV3o3w8YwkGW9mn4ixC5WUVaNBUqquwLnV1XMtgi7CMtk",
  "key27": "2r1G8wsHZsUfjNwBEyJC883wHZsxiPMbbVxotdpk8nhH7u9Upq2uRXXuikGwKR2vJLRsMNhiDxDPE2Amc2HVT2Dh",
  "key28": "38a3AtLngJz8epzfWdt7VhKS1MBEnoxebcwKz2afbKFijyHnt4QCToDnQo32Bfhd7QfSWXEd92dEGFhCo3T2t8ru",
  "key29": "2zMRei5Eg1kKFRDUxieu5Qx5mK4aPHNUYhXVvKjoA7eW7zRGBRVmvy6Cqt21prEcDYCH8yLaMt9ZH77o8hq4mk37",
  "key30": "44ZAtD9phG32sYmUAedF9Tv6mqW7bXJpyMThYthBmCpMsSA73PAG38f6khmsSm17jrLpBgsVpMGwY4JtVHi6GXcN",
  "key31": "AaQXATDxurPLQQr6WS9zPBKtKLdG7bSEi65ZcahofDzZThJM2f7RTG33NRrMiax1TXGF91rhJfygchNk3m3uc7M",
  "key32": "27kedhip8qQHHv41JnyRFxMqPXpByHX2oGhFdu2pHAem2Duc1nCsoaeWQsAYkzV6gCSLYLXAnqNgUkuRPu1pTeHs",
  "key33": "4mmWsbmdkXcK4gCt4XhrBbh719hW3wKyU6amkPmamdgPowi3dman7qbaGCDTfW7vDhAUnWfvwqD5uL7BER6v7A9c",
  "key34": "4WiERDmW1gwd3DSJuoaCpKedsD9KdE8wwRen6MBVkxZ2CeHFNUF9HDy8ZWyRxaqzQoQu72F6LemdA8VkRnrTcGxD",
  "key35": "2fPUWD4heajKhr7sjQgdDtpGi3oPQ5oUQryLm3K3W8anQ1NF3EF8EMCc8DUeJ319JASDTZvwSoopCmS2rNkZWUVS",
  "key36": "2ALhHrnpo66aVHUJkazKFFdNdgjxDSWduK1TWRfkwnUhydHNsvbjx2kjM9sBufgbP99AX3nMJyefhkKNBhwKy929",
  "key37": "3s4YVjmxfb4FVEBfaTtPvxBYKfczMxPfaHSr8EN3zddKBy8RXv3s4EkDAYrsKuQtBkn96FxGXoFHnJW3PNP1Mh4d"
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
