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
    "5LCcrPY1jrxHMaYVXY8gxs2LK9Erccw3rBoKDGC77fVdQibmsR4cC1bdgvDEsK9hkBEk1ZogdhV6AL1nW9E23go7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HK5czcq7W4RsYcS9Bu36tiq9H6xZwaykR68Y1g5WM9MSM82tEr15oL5tPeXXKBAqA9S6fJM1xE9L3QrweKsUVxf",
  "key1": "4MUSvN4GsuaD55nuTgP5ApjaGUda5huouYTGLP1651aL1bu81hd9b6oTH9FNwMJ8bcmuYy1ZPxSPt211K7X3BQFU",
  "key2": "2jqqvx1bD2TVt1hs8bD5gf9kap9kYVp6sLV3FukN5uQGeQZesD9Kc1Afy45Qisoa543GtJ1gN3uNn9d2tt9ZMqW9",
  "key3": "RF9cfdFgQiS486zrpvT2T515Gzdbh2wsqXNmjEUZSTwwwAyahefvDGVYHcqqhgETJrcg6E2JBoPN6a1RvwiH5B6",
  "key4": "4VQLQ4m7rBuXYatRDKmc3tqgAdcjqKfsspDAwbdL44ZSNra9zKXR1dSUzx8xMaiWv8LAa22Xo6aMmnHV3MyNuGk3",
  "key5": "5LBPE1FgDRwGAhdN8nJiaFapC8aM9TQ7phVuamWNwKNG22jE3Qr1fSm22hysnFUYDQ3XW1sGMaUQDFWXu11sXzAg",
  "key6": "43c7adDqufQALffPBnmrP5w6GGSHKmY18hVxaXuUqo6qzXk6tpngJ1SKWUudbDJtVBrAhpiqzEiW53Q4apSj1W6u",
  "key7": "5oLb2kWZF8Kc8dTHQWaiH7X564VBfV5jDK5rA1Zqx92sDRthoFdmy2TCk47EDQ6ixM1ShA5ac8RQLjEp68eqH57F",
  "key8": "5fqcqqWsubtSffsmkwgAQCt61dYh5RGcDTVMjLvYFwxtNWyXvuc76dDYzb2Gungp4vzZksaP7MKw9nspUM3XLddc",
  "key9": "xPuF84WA7YaBLJT7L6PpMC2VTWyAN4MwSF5ofy6ypNDwWsxydE2WVsDcfkmMZYH1MiqpHsFvE2sGoxzercyXJCi",
  "key10": "4bEV29b47kCC8YoUJsikggPGP6UdwmUNVpYBStjEspgWXeqPgadzkcS54Ax5M19pHT24txwBh13LDK1x925B9UEN",
  "key11": "5zzq2Emzvu2HUY3co5isNSS8r8ED9UgwzrsopqukmD6XSgihKFim7DfJUmkzTfXjxo4Jk2NhkhsaKAQpVcN5Gu9j",
  "key12": "XoessSQrCXRoQZUJEpbYLHZwo8S2imtvkYZFxoY6vedKmDFoXMaQaLo3ZmphP9acBPp4FuPzM8WDvhQkdvdJaXJ",
  "key13": "pxMRyTpLHzYaGxHHp48szfcnjzLiJiqeJuBUjkKi7rAKJCpSydxK1VCbfi4YAwe9FajTv9DXXsTEhpV3jnq6jqL",
  "key14": "3gUZrrjzqwLyxRvbJQvBg1E9HD7TmdQ8kxyzMYQfZcBJ6H7iNmkTEksBH9tsrpJuzgymQx8XrDSSe4Hg94i5JkeA",
  "key15": "39sSepgaDfa5zHrFfn6wxyN4w1shSQ24e8YJ9H3WADknNeiQhmTvYKrP2yaZYn5BVetU4hqmBrjYCah7pjnjRGvu",
  "key16": "2YbQUGhuu9RLNcM2tknHjP2DHjnmZmrKY2dezGFhnszoHW88MbHFmoYEoiPv9CpALMsMQ3meanjmHwrMM6j3fLDY",
  "key17": "2vcUAz8oeHm3yNeigqeU51sbrJXvpfabfh2u3mroqbLKrLFLipr1LHCVRHDrC5gzMK5NHzeQsVBnfAmozPq8hoLQ",
  "key18": "5u1W67ksP7fprnxUGNKdq1gcCyjJAymK9xrj71ju7KfJM4qLkQCx9koQTyvWh2wzTzatNzVuE1ZXj7u8FQX8G7M3",
  "key19": "5SSgae6NHfPfz8rGBsJJqJ5PiakqsEpYQL5he4siU4ZLuj6RrKPK2BPVCTxk98YVgf3HZcxHyjMmL2Pt7KnJQHiK",
  "key20": "47ytiyApwPGRmEwcaUdutTibXWCqufrbG7AnjMeXGL42Q3Ge6QnAHmWy9rbsSXtKwBVJdshWxHPHiv37ovcc1V69",
  "key21": "iipJx1jQRAj3sipw7i2pcoPy3DV8SB6aDyAoYRbg8rfBWrEczUuVDYsE7yAi8yQXHPdv5rodJpwNejMfXCMGENa",
  "key22": "5C8RxYGxjJuFWREHpYGTNnvZmuEsNisSYwPMbyX78aMZeUujrwdxhZYhM8oow5aAbf4Jqu7PWKpBNQcNxscngQ2y",
  "key23": "4UJQ4drUxiP8ztbmMLAaQAoD5grn5nErF4Frdv2ftkTLWhrDyB2MLf15SnfeNQMuKKtJE4vJy43uZa9mGSvFZvL8",
  "key24": "LeBwv9v5Ru5dM4utrAVRfL98oSoCD6UQHB3Utrem31SdJxU5KiXYqmXYBAAEVRv6K66Wv6DNVrLqAeeMV3Y2rAp",
  "key25": "KVoyvbnt2idRgf2Zh7XR75sGMYxKZqPBUbrHW3HpHFF1K2e8K4CrGLRs7ngK14v4DPB1ai62jgyiyiBqmJi9UdV",
  "key26": "5PrYfz99ZWgjSk52dJf53dogaqr5qZ7bWPHKPaQ6bj63KJjPXDh7yi5T9oBeuTMAtxfSustEhWvY8q5HYWGk5Pnm",
  "key27": "UXs93qxiUw8FMux7ZuiDJx5Y1XxWEjQVR1igGFZwRbizwSsiX38jXN2AxLwCxLFvBoWHbAa3sKu2g99juPMiqcC",
  "key28": "3Qqu1vFLfpKpkUFLCXUbw83wXopEwDRLcBmksoREUzQyRWH2Ls4M465Y9KJZ8VtNALYeAju2HZvpAQCuNVQZTaRy",
  "key29": "54KHEMLGvnVzzHfRRLu37iZDYd54uj3mB2NF1xSMkEP6qhwd8fYa9r37v4FWMCLn2TrXc8rRCzGNC1y59W68j8Kg",
  "key30": "4xY2ZT3AnfyP1NrqkYbicHPipURLX89AjnLkmqTkxWKnq77hoJAvG8owiprXWJtD4xGwMkfSrZqwwsvXqcaHrrfs",
  "key31": "35uwGrA6f4DmKKx7EydbziE8z2xJ1b1MXdq4w4VFqvyajTC6smRD4wUnNy3tdvcFv3utWTtU6Gas1TfwNG9hP4bn",
  "key32": "3HCS4xj2JMaYSvddbY9oQDg43JfYPMaJjhPwpVw8ZYGBXkaRksXjD6GY59HsdcpFSRn8uodSZFNWU23JncwTUKwU",
  "key33": "3JbUtuw7wiF9GcfRtYNArzRqpF73b6E7YefmRtdTWodask8L5FqaxUMuX4SCuj1X1xPJxD5Hb715qHxDe2VesUXs",
  "key34": "5qWnc9eLJ47Wr8n1SLKMXFAbTA4y3K3HBmqctPbF9HkaVDWJuu9ATAJPUtYgpcVkEjkDJDFTFx2DhntSgwpokKGa",
  "key35": "3Au2SaMzchiWRgo8xNb8K7F5B9wRmwGkqLAVeFZiE8rZHxrZ4cHV8Ap7kyqfCFsbnr9yhZBoHARX3kFcs2DhzPS2",
  "key36": "4a85PCWHVPBMz9mAWC3NkL8hJHwsRojk3oiex9i2nG9ygyTkoriNGfCshYVx9nBAQfD48E1MbUHNo359sVv1i8m7",
  "key37": "4By5JpvnsvcZDewa23EXh34QuoK9ctRCywnqTZSAP6Kh5LH5imRjDnUcqCSJsNrQej9m4XEgFcfuvCVsZpHWK2yg",
  "key38": "5S4qqwWX3p5dQNMEg7Nf82ZaDnMmuW7kzHBMtfBJKZf7X8VePMMhmeqQuxwWHDBH2htDFExH2c5VrsBKuNTqLNSk"
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
