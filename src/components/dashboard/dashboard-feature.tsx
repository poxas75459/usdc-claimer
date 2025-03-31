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
    "3DcuSiVn5EYzWzEwbCgvTZwHCsBkCFLmbGGUxJPfUKvgeqREPdCxgR3GENgyWsnu7vYW8MEMvNzpYYfe5R3FMB9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRTiEAGgqme6zGzZbYShSggNJiq3sgUMorBVK7BYjBj6SCsruE27wnnpWNqysiCfrvMPjGqEowyK5UnMF2Pu2Am",
  "key1": "a18VyoBum4G2NQ3qfx5ixtsPLC5R31yanAKxxb8GvzwBfmz9o7CHwRGXjt7gvaBAZVwDajymvcBQQiqpDMcPfhT",
  "key2": "2iZmqEuy32ymNfgqGerajDjQdBGoHamX5uLbGVDLAUzeCh1ctKZt6bkVWp3LnpEbgTYRDkBGrotpMTwrr1F5vCqi",
  "key3": "55mgUrEunyiq5h2soWchCXw1fFSAaYH8UPWVY1Apgzp2bk5cnNv5twyLkGv7eQDNCygEUufkpqnHa7dUiRvdkEyL",
  "key4": "545zrL9nRykLKENePLqrWrRNhSHwMXRaopsXEkiG7LpTA3RJaYtEb8BbKzAb22anLcaqSxxd7YvURGLSar5CjGuy",
  "key5": "PvYz3BKtyGNak1TmT9icpu8KWFDZBF7TNqXA5wYreV8GSbys36zAH7XNUEqbfCVkd3AgWgaieVyEKpdYsMX6gCZ",
  "key6": "4bAmvLfwB6NUEK96gxiDuU2zo8iBHFDxcRmFyfDwSXP2zJtjrphJU7tAM8r6JuVmavnM942xBcRLN5gkwUvv9NEM",
  "key7": "4UMuG96i6Gchiq1ReJQQuSdSPhBFUCsXkwY6JHXeF1zRGtikPyVTjty3iLmwNoha95fgZ5ET5vafTZRNCgKhSDV9",
  "key8": "yeMpEz2A6kcyQKGnjiBrW4fHtkegr9S3eCPWLr3cWSFSEhe4KtLrR1aKf7UwwPKRtFP9cgJdPN76mQaLcZZU4iT",
  "key9": "47z2G7gPgE4nFH4a9sRbQ9QpJKGJFLxxaFA3CceRi3mQzxk1sH6CE75Un9JbMxyJiLw9MQx9t96d5du6nPj64E3R",
  "key10": "65f8AcjWA7M1Tv9QGmExbysgjhbAfs4mH2AC65NXJQ7Tdq59TfXi8w6Ru9LJmqauoaHbKssnrZVEREApbPjXDZFn",
  "key11": "5CqFRBYgDXi2Zp6UEpsNAXHfKTHGReHcXSpYywRVcVgsYhZUx1TqyAWNaR6u3pZbH3oQCbFY5aQVatWVJJ4ead3r",
  "key12": "5fgp3ySCqMdiT8zWNG6sxvkPZr1dH5Rbb3anxhXdKF9427aWeupHfEverENrvGAinBUJnvG2BJaQkcwV84EjFD84",
  "key13": "hDgRshx662Gqms1ztYszVd3NxsAqrFRTMWsA7aeqrxispZvy6VNXmFJCAKDkDZnscqaXux2kkchZa5LbuH8Trt6",
  "key14": "2c71RNw4PJJNqLvqStYPD9jKjQAPcKVodMbdUsEXtFJ4D9y5kWXAdaLP3NbzgbxZyS1QcdMaY235YhgrK9yRqBCq",
  "key15": "31XnjhYU2yvqR73rcapY8C5f4puJ4oiWwiJAaMe77omDc7LDWBxnebdcZYEA961yc8L7F883CUF9u3SCGVmw8TYG",
  "key16": "2psidnGjJuMxpAbK1Q37G9xmWRywAkYa8j5QbXEe36JdTNqwWKPYuJpqcMZrF6GtUQoPu6Y3k2di8rjqBGEq1kgh",
  "key17": "4zaepxDeJgqv44m74oRc696FanSKiC3yS2LogZNDB7Ry6CqwJuw8aBJjVQtLAcNmeEoa5JSgYv7kdch6tC6K8HG8",
  "key18": "uDvBCVEP9T8p3oAK7oNgc2Nyw5LNkyTFwnodo2ESrnjMWtZkCdVij6osAZPfNqbkWimwULY6QmCdJKgLm6vk9ax",
  "key19": "5W5gDWYqoFZ3XodkaHtYhN2SHdmet9J6WKCTvo4Py3JNChkFriyJFsV4koVD7ydKRpzrZtSzSjWYWRRnsZmGKvEa",
  "key20": "25wvjGu89huS7nQSKipE9SvyGr9WtztGutLQ3DQ5n2pferUy2qkobACkQx4Y7QFtpiyyb17hRkNv5X35FzaupUBj",
  "key21": "5YzZBFD9fG6zJSaENtb2MwjBgaqCMmtrVX6q426uR1ckqbUc96ywDvr3GzM9PyGiWcqrDAXSCbn8CxCN5UeDWx2i",
  "key22": "4y6NVGfNof8pScRwtW66YJ5gsaXYBUhn9qoZxZmFMXyzDA4YfiysrdryLkibcjFufPLCgKjMRKypRENhKK4yVSNe",
  "key23": "4Rx6wz3iLVNg5JdbGKv7MbV7nmbMvj2X9itCy69G3MFZGofjxEE1cX88Rm5hPJNAP7nTNudWHMx9VtfcByJiD6cM",
  "key24": "4jkcBTLzZqwExnaytHe2HVfEUg7J5FoFDMBAakSVREKMyTPjZmU1M7VNjx4Xtwaft15LeGVUgNT4fcmejBjseBVk",
  "key25": "4kbNMEuFssZsyVsWA2cHBPFaca1WDqGQrDDNJgJPBHBp7QW4nKLszxutcRbxQzKzSwFYRfRiW77djehZxNft9w2N",
  "key26": "2GBNgTNaKfL91HV1YDhuQqF8gAhXduShGJkzQfu7CgqyfnNiTi2xyxfFKwZx7JEfSPxZi5iTrVqD7gDmQ16SVWDW",
  "key27": "4xBK3jKCwhKCdKJFU1Y6qWA6A7UUD2jASEcJr8MpbSnVJ72Gg4Ui9UpnDDSyE6z28yu56FXCfGggiJhMrMd93cg7",
  "key28": "55fPPjoKcfM3EJdfZkDZnogJqyhsXTbd9GS8KPxrGiyZBrpUUE3x6pKT5W824Bd4BCKW2bs8Dv9uavCxENAZcigw",
  "key29": "2oijK1qzArMecPL9GHEpvT8y59wV8EDnV7L21ViDdGEbEFF4anub6kNyyMMgB6etHhsfCuALqBnstbBsUy1pRAp8",
  "key30": "32hjGB2LsEiS2HhtQmEKPanQzqL2KrW2CjgoTKnSykTd2XNmv9voVRDhfQss8ff8n7WwJ4yxGfxmR4dTmeGoikfp",
  "key31": "24yktxqhnXQKnFVys5JFoixW6NRvPnzTGfBZ79L4gkiHBkAANhW5TBAKJuNrHJbw8BFFtzoJZR2E6fmRkZhCSfEZ"
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
