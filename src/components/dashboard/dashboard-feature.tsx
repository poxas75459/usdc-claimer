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
    "53acbqd4khZuWvzD4r9CmPY1FVFkEW8iD4AnGS9sLiztM6SYoUBmqLPrMa2XvWvGwLJb1dUSnKZ6YL8K2TZ2CP9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ho2V8bKHmW4BsdQDnRenQaxpHKJu1kNdgZKw1CT2c3BUk4ArY1QKVZquUXwbrx1nMHuNo3QqKJYcmcfgoaAXVYv",
  "key1": "4Ac6sT4ifDQLid5kemfe5LubHffP7qQovow3DwGpbtB3uk1LCKZToX7dUzYd81Jx53sxUNDyiJpMGPLZsJwZazDG",
  "key2": "3ZErCfXyKda4bQHzZjRjstagkgPGVczSTKxfBjBfQjrCQKmW5wnySmoWjYCkMUQzfjm57LcUXy93ZVqaRGQrSQQE",
  "key3": "5kkf2mdYNutZpTFQuz5FPgcNwAJ7KRrMFCWrVCdEQ886SiptCTZYKRTzh7LNjWJUpZHz2CawfcApqMgUqWNAKL7A",
  "key4": "sYo75zdCrjH1gchuNfqZBmtPdJKmBLNmdVq6qa72LHYHp71rVGzVgG1byVGAYQmtcr4yVr5MkaaX44YvJ5sJyqZ",
  "key5": "tFPudEAgpvYPtPPcysJLZJh1zEB4W4Kc3hiWmkhjUDtbqXSWgynUJeSvWdB2v4z49hWX69zHynoCFWKT4FFY8dt",
  "key6": "48q6H3iu1y3yeWL3WcVxyUb7hJPw6gdcC1iedvFCPyETaJkXbVrWs6XH2RCKk91K6RzdfXiMdmrznGNG45NRGMyM",
  "key7": "5bktbC1Bv2HKtuhBu8NUBo7Pd9JqhYz6iKH8HmFsJWBMzt8N6kgFy4xs2C3t6xbF9Cj3bVxWbWf3aGUVqeMhu6VQ",
  "key8": "3ThhecHVvFcF68rYcidQTF8GWeC8XcZ8FUirpxnQp8Ys1qkLmjH661XyNAjJgwoGVw9bNEeYqPNc2HW7ChKERd5u",
  "key9": "2RkoCg1RtuhPEi5iGNsuZ6hhcE3kpMco7Rd1Da44iBPD3k1SfkM8htYjbao6HpaqWcjNF2tmfQgnXEdqmX2ufwqB",
  "key10": "1HbQhMkkgs6VcgS1i3EpA4UAriBsrQifsxGPx1gU3BwypagRi8GCgCuDb1KaJJ7ayX3Jub68yfFXhCAC8h2u2Ry",
  "key11": "tzyTJHER88dsmZ188j4ua6EBCgvZGtSBJ6QPLQLuVeJ6kHXQY1SKUZq4BQPhXDvry9MWiYqyaHwugXb5d46ywSW",
  "key12": "AwQfxMZjvufeEWh2T6D4ov4syFeGgHqJFd3oU9bDaXr4tonpUj58mxAjdr3RKHCGcgt192L6Hcswcn1FnzUK48W",
  "key13": "3BXrkzboL8CP2PhKNvSHSSs7v81UWHnpBREGMQook22rPbNm5GBZVidHru28A6eTRNxwtQvz26FDTkrPe7cVT5kP",
  "key14": "5g37Gu8qrgS7GTMdduYBbDgxArhYf543Dett35LdQvv7DrrfQFuB74g5KTy8Y27YGk7P5usK4bPJ9FcYovq45Nt8",
  "key15": "9VkbdwqZHXdyhLRe7BE2eZqyX6sjADH4vLv1Tt3p96qDjaky6mK9oWYMzkbu2FtUBP58TY9Lh21f6Nmw9oonsfg",
  "key16": "2TZSeiuER7YVvZWiQeh1WBMcnLie2ANKZ3Af9x9gtea7LJgVUgD5Y9Q65BnXiQcKSb7KeowP2JAB4w4BQGL9ETqv",
  "key17": "4JEXmKJL4DNQt3X9CzgDd9Pd8ifZ9cqcXdMdLkb4xwaXnM3fQ1PsjEGKxX1wavYB2i8ddRgE2dmWcQHpFygoA52M",
  "key18": "2nqyaTr1SLaMW4yKE6u3Bsa8XX6LqSUn6jV91Sd8Yi1fH5RkhoNgudsVAUz6xX52k7teceQMWBV7ndMSuqJ5VKS4",
  "key19": "4JB9yhAGmaNMuDAwPWh313U56GR7rEqJpTrf66oNm16oq99aHt3sUYYfrsMqsVJFBfYfNSNgSCQNmfWS2VzPKAaV",
  "key20": "5YMLRmavdQjhhgPuy3xfp6kxMXndhaTzkAfwdha2pJsSW72WUb8GRpVwfgSK3XX7JMXNGR82HPUMtTHwTtMNaaYP",
  "key21": "39dpACQ5C673JeXZ63PQM4sMxE6GwHB5hREAbHz42NxkB5FH7ZdKALiL7ySR4UiKtUCDe1HDvacu5qq4GVb9QN2n",
  "key22": "4XoDFSuhx7WyLK4HGxUi7VaAWgsWRrz2FdYNeJZS829kNPNYMaY1AaRoTjpbKNKitsxR6SRa6HGVY4qGRdryyU4V",
  "key23": "Srm9zYMEXrD7fxp4ABMur4NRZu2DdsYotmhx7wjDEh9dbPFejPFBNE5yDnqs3LfW6npzKepjA3eXU6Xk3D73irE",
  "key24": "3V5J8YcfBbdkzbGrUBGX7jRsfXexbx4mRcjYTsGpzvRi2LUqTRQJwXoxELTAgPndobfFHvdW5iH7h4vq2iYMQzAV",
  "key25": "654PE8w87zh9jviin39KDuhbdHkhDjdt7KyXbfviXQZZSQrZbkAX1YsmFBf6a37u58nH52oMvgqyvDrocwtpvx4o",
  "key26": "4qosX6oNrZMSoxS9Kb6FgD5mkzpFrbPV7TfGvCf825kXBVKfdjP42KQV7KMfuiY1vvLy2VVh1W1P27KhzXPatJx4",
  "key27": "5tKHYy39hSNM9YvpmokyCNaJowX1pUHzZYRL7JL5iWjvr9yM7yHHQi77co6BJpTA6SsbHWHj5edyiJw78TL1AyDW",
  "key28": "5xEsRPpXzrxBTLaxirDtPC1T4J4EQ2RcUnkfPfqxxp6t79nn7vwhUbs76PuhWsySQ52TbQefpKGX8MMvoaPzV2yd",
  "key29": "4dAaq4knCMRFZt6s6DwYokXAi7UEAPdaFzTsxCnXeFBhHHcEaAtQP24Q9nQFw8HrzUrEcRbcg9z8bzySHeoHofxZ",
  "key30": "66vZh4TsQ3X4s52X9CVKKm3mcm8yLoL5538ehTK8Eh85JXyb5YHr26drn818iXb6DzdpimMta63G5BCZtg1bsJjP",
  "key31": "4VpQLAAcE3JW4NFAP6RGezX2ihKAEMm5brJ4gQNoiGALRMGjj5VnQ1BJ4XzdqMj5QgHPF9bjH62ioDua3dxecjYh",
  "key32": "2hMDim4mtmGZrLgFhXRssm5ydUcEgguimHdftWd41KEKBkDK4dWt86vx77cmiR64tPUUrtM1kpDk7NGYDqjR6E9U",
  "key33": "5gdqitTqnhbbXkcX6ivWS2Y8KkM5HTgQpSVBBEw5zU5rV5HTwHYyHq5XHa4nL4EmriVuJtqP28rSdDSgCPkvZq52",
  "key34": "5MUAwJjMwosvsYYZK67ayoxcxG2LaUma7MuczC92yTnfyCTkVKEq5SfSkbP9jnKjFkahCMr97ob6hb2gLpF57MbE",
  "key35": "eZtMQDCwtASSyyPZsbEUvWa29ocAbdzTNM7rYmT7ZyBPZeHCABvqK2UCD98SEMGYde5VJ7wqxsMU3DYW7pmXriL",
  "key36": "4nVjmZT1WWRmSNiPhQ2Bxdega4jvn5ZfBw8W1q5CR4cVW6cR9sL4xSwNd3DubhEqKeZ3trztvb4QhyYTn6MSJCyj",
  "key37": "2SKwJ3PTDRWN1Q8XVYLzVQ3e2of93BU9vfGpvvGRviKqTxZM2R9M95WNE7gPErhDfk5YBeSCsJAdcYcDTfbfktHw"
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
