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
    "51tC8F1szcaWrgWrShpZhZcMyLQTXPohYi6jqLrduRQXtdxkenLjA2hwpAfjuUihsgGFBwdjtSEW7xnm9FQndfR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BL4U57YaWbPEFh7DahUddC9iZC3CKoru7pdz3WYN34iw3bkEimwwQhRst2S5u19nGYc46kvmTk16cVFjAauKkCg",
  "key1": "5ShxWa4XjAbJYV5rxNJaSRfenF3SikX5D8hLEoMzFUH6JoJs8h2yx3hzZoaz2hCS1wAW6ALEu37fpDhXzmCm9jJA",
  "key2": "4jjoNCJRYThnjCGaW8YEn74wUVo3gQmPv4NWxPMdVwBUym33TMQDNaDkW6iudbKNF2YWmmiCaKFmkMS1eRTbb2wQ",
  "key3": "4ME9wmGbYvQUH4SM2rUcuZSLYRfJRKtbbDSwAdad8v5x8EjrgJC4Zkv9GDcFZMggCSfootEmbAs4n2c2bSYyJ3oA",
  "key4": "3q5nVtFPpmfTo1bLiP5Kj4GjLT8mck7M57pctVCWu5AkPuJMhoFtQzBPY234LKsz7gpCDCTAGAKzYL8PzudHXShx",
  "key5": "3xWTeQf8HK4QT7p4wH85sQdP7h6TiEf7VoBq1WpgjnTW5LPdSsVzq27DCdvdsWRmGfLhFi3Lf7KK4RZ6ZXrSnypE",
  "key6": "3F9NudfC4f2zHfDHpet5npCQ7kC1YUH6Ukmpd7Htdf7cPH1uPqBtdRSfGUtoP4JxY4S8wFodqaeqS3G7uyiwRGk6",
  "key7": "3bygmmRZcJ3aHDkbqqg4sagk9AhfbFWCLmo5J5TjnZoDxVSeSL5LGqxEYjfRF3b28hdgaVUPsefP3YDa4dAqAmYZ",
  "key8": "5F1crbGCHvn19fDfBEiC5NPmEDtiFpPiXhzYCh6UCVDdMiuyePSPwfxqWuKzPcG2sJx5Khe2jWiUGTCcJRJMWoyd",
  "key9": "3HauM1pYps474B3tiEwAaG6mZbkiXd7PTPd65xKWov1i4a2B7HheKo7Mg9N99hKpmkVYtwyuDELqBhsDKEJ6gfQw",
  "key10": "4EDqrxsfNWq22i6EfHpZEbkRXviC6b8vvmRGaGMPsnY7ouZCuLX322fTi6HXi8RaR2pCjj4itMd9GEw2m6g1b3AV",
  "key11": "5TdZHn4KixiSu6Feoo6zk6TX2SdW1irrFxrFb51Td47SybYpL1ZrfJUcmYf9KD7Mimet5zwe1FqLbsShiWyd28Tv",
  "key12": "31EBXuafYA9wiH2gYXbxw9CuKAbm5FGkMfjod1Rq3PatLhho3U6KuRk23rKjvY1AiH8CBpDFoeTcBmLmq99GGZEX",
  "key13": "2dKFpp7vPukjMoBpQCtLhnPN6k49hsjSxuRXksvUZ5kn8iXcKXXhiWDAbtoYnqCxAtkve9KGsEdZVmEfryudnpfS",
  "key14": "z8fVqXAPsVxp5GYdvu8rQiZ5nFXFaRPCAQ54TX9hwnv4s95MGtwV4mNs85X3iaNiCyZmuG5oGhGvbJGPTQhV8An",
  "key15": "3fY7G1Xd8wAEK4xduYXinMWuxb39VcAyGzZSQNF2Hgg2Cmy5K67WBGNbeSfTb1QioyVR1XsPp9KVfyDcSHAnVDqh",
  "key16": "ka5oRcc5xrBb6MRrqFFLHb7Z27NZo4kw4paayeE6RMAbkqER8ZqAE2WvMUVyHvB8KGAeQzZVaeoR2kc5fAi7h3i",
  "key17": "29mYa2kqtiJHYzZjYY8Hxay2gb3NmVKjRyYiHn4BngK4Ffc5RdYjb3GSgkeZUHcBrAUP7QCuR35AYAszRhswPPE6",
  "key18": "2VvM5RndmqNVVBg5jin26QxLqArrK1Hb2GCkWS3fW7HdDxKB4cmHazj3kAYsTS2KZ1vQKJrEAAPpGqjojA7Rkhtq",
  "key19": "3NsXTQ8WyP3rkineqSVZCkXQ2PgabzE2KsYw8YzAYFMiQNb98Ft2F72utciCiR4JSFXC2UPrDDaYPDUrLDJHHEAD",
  "key20": "58sUc9w9B6rB7275pwXCQGQ2qwtV7bh6irnXwGRTEsmJupzZmWcLcMuUzeuvJPURF8hBjskEqoYURFp7KGN6Nq65",
  "key21": "3fXXFdizSgj3uobrqAFUQkGZ7jUE7zQwpvNYiABG9rXNVv5iSiYUR71aC1rHfu4JsNDYh2rtW1tAUAMgn4hHFhmQ",
  "key22": "1FGeetT51j2J8A1gyUDgaQmdS5ErotLTS15tNyYg2xubdYWTj8iDPcjspY9Rw5k2aj6SfushWAPfsTYubni2ubD",
  "key23": "2zuA1K7Eou3iftfw9hy8SFHCS6sDgvdAugWBUgwMsjsTvUYDxwp7rfM1CvZ5p9LrJwQCPR3oF7KbzRh8CN8GAzrA",
  "key24": "3buKBmCKQPY3VgzT51UBwQRskEWqY5Fy5AGBucGNMYyb7Lpu1FSJwf1rKgT8vb8WtfjGYYaW4V9bZ245swDwPgV1",
  "key25": "5BgAhyrM3peViuGXUgHybFb73zTLAscRvMNr45yPnBK9g5RmSM8ccBc28KcXripZPBcGDWVSNjTtoUBiQ5xHLLvS",
  "key26": "3Aaqz1R5WiaRVYMcK94DSVUXZqxEsJcwN7PuoxmrQa3RAiMNvwyHyuHMgA3LhFswRUaBBjeeqBXTEj5SYkz928LF",
  "key27": "33TfGkEfvJpDXisFzv2DWYn4ycPDsJTmcVwnxLWgRSxBuUKS5dgsqZW6aQBQLYTJWCrRYQ5Kcm5VrrHiD9vwdHgn",
  "key28": "cwx9p7kZtP1j9UJ7Mu1Efae8WVm5oKsxBhT5QEybbXgFP4S1PWfd76x71aBDrWNyq1ggs9MRHGe2CTNnHpEKVH4",
  "key29": "5EErdVxxgFejgE3mphsRpikqGcjPoocqNz4CFFU86YmdnCTUgujWyLVTm57HkwTSQQ5YABk5SiBpfbMbveLhR2GT",
  "key30": "3gS2ZxMw6JWcwXLU1R7LPyKFbtFn7fggE3BDPUjVMPSXdecMSNR6Av2SY6JvkuqzQYat5ggDoty5sxjuWFr59xMs",
  "key31": "8GyFyBZrXjDojtLUCgeFXizMAeiKVpGLCQeypa32GXAjxd3Lpkm8o1vA55AetZKooUx92qSnfuxzNMp1QjV4sEb",
  "key32": "5nYuQ5q51yDthxjpRfPS2CTc5hU3LRZC1krQ18tqWRPp2qNtehmXac31Rs9nStoVY6HZkgCJKFQa7UooQchvrZSV",
  "key33": "3QfVDVPkpbzHnCTnGEhqs2D2XzwY3zWsgGbyZEEydwPZ7A9jkkxJEUHgxZonVDuMHEYjP3dR888yTiwAQZk319m2",
  "key34": "62TpJMHmmUJ9dSwB1zJKDFGBWuzWt2uXJqYwqNfyVThAwcPrYc7yogtcrp5MvCAHyzjyovxpSSUpoZhwaK3SrN1J",
  "key35": "51Wts19MGvPSWx8MTrKFtwxA58RCKx4ztTVt7Uf6fS58sc1UjmEznQswQWjK6qQqT4epponDsJAXV3qYyLekMrXh",
  "key36": "3aNXgYbiH2FB6y4FmRcHXVcdbWDN9xEN8J97LaoDe8rRzGiW6GdMdbi1B8pjJkcf21BoYWYqughAXyAQxfiDxpxX",
  "key37": "4ok6pSVRe2C1xX81H3o4rk96J6Qq6Hq7cS3nMLZG6GT43KZDDxF11sbY4WTnq8e2tvwDJ6iztZzNzTiEFqSXY43j",
  "key38": "5SkvXGrdFu6WZd2wwAJo5zq6FuQN12d5z1yF6cWrd4WVBkcW28gEEiTS611oDMN4U5pTTRN3Ys3aqtQ4N1kNZzDn",
  "key39": "2vu3hcpj36DWbEFXXLFTYCZvoxbTRUu8KGZusdaEt8dSgpsjrn91S1PeBPmEsXDXkwMWZYtfmUWztKvcoxApSfxC"
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
