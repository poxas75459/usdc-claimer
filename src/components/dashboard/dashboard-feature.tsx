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
    "CGUMgnup9Up4mk4aJByrZv5Zv7Uo8gT3RCUVxkjfZvbVjZx73NSAmZM4EoTytgSPwKctPuC6f6KoAajzt6CNiZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHSM6GCAEqqCBQSBNrVTa2932fSbMqFGCdhB6iRnjDUNZKEQPriD17LNjUcTM9WDod9wxfaVJChSTCPWHMxisF5",
  "key1": "2yqgmhfyo4kV1vXYEUrj7dPgnUN5BwXs6PW8jhN5SN5cWHEkBJLPeYBpBxckwiCieK4GNsv92qzgC5MoP1Un9s5h",
  "key2": "3LgcyVGJSyVxwwBs2XTo3me1FntoHM5TvJASKn3jHJeoMe9DRk4KGKXEYQhMPNjSL64XvoCgcvSWGKmfE2ZNR8df",
  "key3": "3r8L3yYUmz1DDw9ghGpH1hhJmphwhHaFB59vDii3dtEWH6Mu3S6ri8VUWz4bKuEJ3HxgMXPjywYGvF6dmtwGATAV",
  "key4": "3DxP4jHVPfCaVih3oRGNfTtY41EHSG6E7RkqSxenPsU8JQLwyPMo33RSqNfEE8yHQNryjib25EtECAfpEVvoPhxp",
  "key5": "5DDqu9xLY1r6Qg38Qi24QcA95ek2pZY4ES4DAPELJCXhhkxWcvnwG8WBsqYeLj2oc6gWXVMqckicbyMv3dADRZC7",
  "key6": "ZKX2n5iqJja5CRj54UTPMjd6sZRuLmEwXAVSPg56CRu3VrmqWRKCeYw565gBaHgqzektVua1qLStuZs94aL2Ur7",
  "key7": "2wKXQ17m2R9UxgDeU9Zv8vEpBbfHrDcXReMoVmDRN2sFPWGxMAe292QmKbWASYrakLSpuWDt5uuLHd7dg8jD56iZ",
  "key8": "fgRb9WNcpCBnoBpjvpGrcsg8DpiXZdSLknNpWD7aJjAXFhf5n2t1qCoaK3g6grb7Hg4tWtWQej38TrQVYhkXovr",
  "key9": "biadfX1WU6kHzqzHckNs2JvYo3NXjoFwhYz71ViYpNBwHQNxnx7kd35fmCcUihBN2rvU6t8jCW7oSXNgCo9TGPT",
  "key10": "LAHpRFwnbQu6qTyxw3aDvWu2AcJdnH7CGJ8E7RgdUiJ8Y463FPoepL7zVXgoLkX8PDERM82EXRh7vciPQGxghS5",
  "key11": "5zUsAAZcxm5Agqwyr2zcAuAWqH2c1eyqttcPUPiaM1PLmaxErYz9ZbcYmaKLkw27RA824CZpoKpUFrYjXgT9dY87",
  "key12": "4cTYJe1jRhoexnkScQoCrVJ8ms3hHcbCMkpoBW4DVCTMM2g44DkVb3mWA7vXENv8qWTimzJHnhq3KU1AD7nSgZj2",
  "key13": "5GWYLrn2JSPu1v1t7HYQfrFdP1pvFBqQkFsDnzYBVULS5mFhL2it5zWRyTsGqrkLowkHFX1XEMScDYmzmfMGGEbW",
  "key14": "65dvZ3yPKHTNzLpasMa974Zw3am5kdexE7GGz3DYF9CehwhzcLmHh6AHTmNbYcArRjH26bnLU48fpD5fyWCxSfJL",
  "key15": "2wWGpy7cxctzecyMsmWBSeY2gpFoMhoJ7CdC7hLRtKQuiZWmrCRYtYr3dn389YAfP2LpedFYo3t8H81rYMuT72km",
  "key16": "4W68h8Gmu1zUizcxriQ4CeokLwtQWppKzgpphnNetaB1p5QQ2dT7JJD6QRc17AvaYDwGjmxuvRsptW4b2rE8SNxf",
  "key17": "3U7wT7bmYkjJrgRQ9TEUjSNtBU6HxAx3rk1ytwDLthDWsnFvX6Fw2TcNdqbkDgX2mxVXiGfCr4nRNAy3qaZ8jrNf",
  "key18": "2xGzJrQ6jnRBn1HVPDVTnn4ua3LfkKqvsfvdZRh7WTZbvhSa97m8CNWq23sSpn5eXjsub3TZUc3UjkSYmZfcjqhX",
  "key19": "1Dy5qbqenpBFsJzNSaUMiWT6XpMGAuy9azCHFKvpWbPLkvQCSXU8a9B826uMjeCFL2815Ciu7Ahh7p8bD3MY3G1",
  "key20": "5sf95JaxqboJqZCsDrnyZcgHFuV6mxLpK23ubuQtoQjckoXJW5CbD8w3Mt1po6vmuxh1XaExiAfqYvhscdibXbn",
  "key21": "5qB5m3QWCKepipSdb5tg87Fd6dUqC9kAwqdjMS3tBE5pud8gJ7NCMzrrnvY55xqR1eyzQQr7CQekrTgH7yjHfnkm",
  "key22": "49oMwjkxxxZSdG7pyuFfxubQTvDuadbKD53BSanpKZi619VBHPeoBnzcNCj176WKD3TDdvRCVer6j7RccMh55cUb",
  "key23": "cn8yTAmHJVAi5bK5QwndjMD78aKrY68Dcc5AYrTcVitbsA9AaMsBcpGz44JgHkABRWHyJakKRGB4k1BWDbEiiLd",
  "key24": "3dTf7S71ejfZtr7gmDcGEHQBCnuzxiXrnarJcbkerKdNrzAMAwsQpGQ8dYkPAreA5kGyktn3JabACpws1sJQKpmW",
  "key25": "Nz6NRhWpPJwT5wpsieXh7gyF45CA98gysFjNEFVitePfyXLJAB3CPQd2WQYihDLy4hVcZxvJ1KhTqvCpsrRmT3T",
  "key26": "23RWVz5mnGHSQRPufEfBWsnPubrpw5qHWNFKkr1RB4CRtBa7zRbrYSQTCc2qigJj3rR8zLWedEpKdRMEEvo1oH4E",
  "key27": "iPYvYDSWSxx2NkBmEwPSwMjmdUeQ5ZBpFLEyZoRWWekYWz2wGDuWtjwVBFJsU7qhwHLzwM9KrFyYaaByRddP2Pu",
  "key28": "3Xb8zwfQHvVaVeLWT4DcE5qoG6qTghHEDpRZD4qkDpi8bQutt5awAkTMoJ4QvmdJGbExdndTJTceamrd31zFCMQQ",
  "key29": "2tokswM6g5fASCAGn8KEJ7dTR93HgiajwrTzz8W7CuVdQLFRN48zABG1zPrwYLYdLebTRa6LT3gzkPBkT1o7NNjz",
  "key30": "2qWJxBZEgkFcNsfZzGqR1NZw2xj7C5wJnH7cuND3fSWhG4UETbr3SxiTT246b7jm8tSZEqwmA45f8CXL9RHF42VG",
  "key31": "387qXMsw3hYd4oYktfnz37FCzFsAx576ERB85pqiXqmnSPSEXwCQZG57Vq6B4TvWyJ2bkT93CfTtxLS8Qfm5mVh",
  "key32": "5t4u9uccn5r9v8tDxEGtxQiUthQB7A6S9z8kX2G1tZ4qVtr4BSFtqampMtxG8c79RGjokxFTjHMMu97MUxiYwryc",
  "key33": "tMpkuUgYQhJQxjhjj88YosZBV4VDaAFdaB88cS3Zf3JEN5Vk2h2KHyovs8ahLU3XYQ1BMYizdKqmufm9iTfjX3Q",
  "key34": "CZ1DFG9MiymMdn8M83M611kwUcKcVfWuhxbm8ZP6LYqYCGUocP2dKn1CBxVzAwQquhgzBvyaZ8AZmL3rDdfrGaR",
  "key35": "5gi4E9jTm5FuKLJ9YSXHhgvbGJmJTy37vVNJvVboYHeb5tj8LAtFUMxmBnmBKu4ZoeL8kyZZiscDUkwAqSyneSMX",
  "key36": "2Htyh9TKaJkYmYtKfdt17NitYWEaJCzJgxvWyD7zfFcFn4ESDTyvhQgt6Bd2iQwZ9HMgDi1CAWwUyrAGdDmRKPDU",
  "key37": "4vAj4SnYeFRJ6d8F5maEzw9SzXSkqojkvbwDhSq6ArJZP6nu2Jz7ephUkAgkziuD3b5eJANeWGjTEnHifv3DVP6w",
  "key38": "2BMR5dQHRUqBeeKy3j5ZbicKA6XHfy89g7dAzKKc9uWUTmovFN5D7mXL9rUfsZ2TSVWXJGJjcVmftJ5gxS8jyEYu",
  "key39": "53hbQ3RExLBhJwEty7u7yBUBn3XF6bpZ6yu1S8mCH1vg84x5X8HLiQhSBL5Ne2zUApmfV5KsRTvykY31PbDHy4uL",
  "key40": "3Pbas4eBm9xxTBwevVxeRooJU7ZCjKq9xpHVFryb5YiDSfUEPnDLgAHFaGMe2Ngpgkxup7bSMVge4WhMDTVQMgVr",
  "key41": "NjCmvkmvoxpthDemXCcAUcxXnnnNgxye1nkJhvKLj5hKLqjyZ2RpsELBmLGEbajhz8sb2t5i4B6X9CTvMKj64tW",
  "key42": "6MCHXba5NJtX1fidMGuCxa1svgGLQsmXVFHaGgQJZXB5khW8Ji8SmRrVLZBr3X49mfG5g2yxZNzL5EDFWJ8816X",
  "key43": "VSKhqmqVBVQrswPrRDoqq6HjaPzAuQPhcRScz8aUndiSKCYZPgVYj6mfcsPJ8MW7yX2QfQPS3DfdfDoKPPKLBwW"
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
