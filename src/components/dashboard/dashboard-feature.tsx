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
    "5bNBfbWrSy7DeA3Yi1B73VsPuHqp4vzc96ySXtzeZLZwocFeNJ6MNxZbN9yu6P6UqeQscAD26YDrE35W1Wk5mp4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjzfhQKy3gS3d33DTzntNBDUDNFYMbbrvi2P6PAm2bVPg7zgz7x8T99JoGcSs6DRixZf6ndpg1XdWwXBqM7ezAW",
  "key1": "5HXAqCd8i7tQJt7e6WCwm2hJEGoqFD6qCLTYeYwZxaq6wBrvAmcsT7z4aZpgPU7UQsQWHxbohenqzeRN1prJ3wm",
  "key2": "5tFkrfyq22vXgQ5SMCSrd7hRTjdBiuiVZxwAXWhg3wNkoZSMXScooxWXyuy53xfGSnucCew5LLLdhyi9GvLY4BNT",
  "key3": "4xin4Aaw6fBGQrYckLju4tuDdDb38obWa2f1bVMwfjQfs52J4CVCWsveNg3BjqoCoKRmmGpzCidwxDrRXPvg3mqc",
  "key4": "2fy3gwym5hK2VB73T286XNXBgdCx9GcAHz8zPcFBu7vQFAa7gLVu2CrK37bvGUDKG5Enw73iHpc6nSAZF3NVinAg",
  "key5": "5e9T6RxPxyr4mkBpf8aYtiTk7NTGJAy4ZQpa6CEYSZJdtW1o13rQwbCSDVcsiB3AvBM3xheaMf5f9RzCK4TDEi36",
  "key6": "4QXTAdJFgm4nbn3VatfdLytWxCaXmBnAXjCcYJqQJbLo1s1GJnRDy1dSpaVUNCFsCQLxLLGH6qtNQ5SRUk74DTwf",
  "key7": "S2XqKQPN3Y5mryuz1RCejBtyzvbWXL8YfEnAMZcfUyjGFFwFiUxYNdpYfjHUQRwRR5pAFuRfeNKfph6WeSQsdzJ",
  "key8": "3uVeYuqMtar5bRq4FBFJG2ddzBSa6dkxUXmyRtEaYe9UxSnjnztNx4zXKKzh3aC3JAhPh82b1gAKiiRpCoDb5yS1",
  "key9": "3BUmTb1xsFQk5x3wnWS3aRxRDu5VLYSpsPoHcGfCNgnhCKgVV9JMQsu4M4Wk8TPArSAbfrzSbKNYCuUxMUEaPo7Q",
  "key10": "3qrhXamkMDA8nBEZaaBbK2EXnA6qA2QWHuQLj7Wg8BUAdo11hVt36NNYT9AkfjcRoBZHu7xDPMAHAzpGD72MNHcF",
  "key11": "2F3eaDgj4Vno5HcZFDvTGkEW1Bfacsa5yoncqR9a5duMaSXAtsXpU52HraymLsMRBCpZfh6CaQFESHzeWU5yMwaz",
  "key12": "2X5nTsVh3HeafWKwcYPsSwb9M9EFTzaCHeAPhnNvhASVe3NT8LCkvNhpTp4rF8RWDwcy1r8QM8T9T6Xku36vBdLg",
  "key13": "2YGgsezdD3gjuqdVbkr5cv7maKjS9mjSDmd5HVZuCEFQXyH8MDaGVc1XGYavqnGebfz5Z9D5AHDTbLzKrpif2S7P",
  "key14": "4tZW9xpMBPMniBwRamdSZkpemcaGH1eHDjd167k6HNVJNnCWLw7gjPgqfwi7KxcLgbY2Y5kSdtC9t4r9iQWYJG22",
  "key15": "4C9b7PVUw51MXGhFJB2d6fYWY9KNriJo47U89Agn9EtLJ9AtzobrgGcKS7EstKVtyyfpsw7Nm45gNXJd8tBZWKK3",
  "key16": "4U9FaWFEU3AiMfqeAPaGL6JsHzzfYYPy2N2yy8aHHD541aUBPvD284utPTHmoU47ZzqAwfUYAzH15SyFb4A56fwb",
  "key17": "58iUHqAM9YdjMsyTc4sKkTBRWWLmZ7KcuAhZVdLT7QhTA2roBSwCoGavLBNfoqL199iWiBw9oR9VNArEa7wcUFdY",
  "key18": "48EajE17cZJscngssP5vY91wV15FTFwgmTW8vuGvrjSY4HFfTTRkNkwRAALXbqjFFsNM86vdms4ENxaH5AteBeFU",
  "key19": "4AEncHGvJ4C1SjMznchco7AvJBPU5LvC7LbYJg4fSFw96aK48Mw3tBVbN1r7675w36wCQtDkCTBc3G2LnnqYuWJa",
  "key20": "4XLniXm3YFcEWP1dgDYctC1muDvKTZnVEssChM55Bj3jj6LadKDHChTYPkKFsss4v2AedCJ42Qcwb5KXSe9dFEWZ",
  "key21": "429rdwJo23Ej3ECXpbuV9UXaee7NKep5ERNcYQZjG3SUdY6xG46rwtj3Xobmy13PxMrr4kCSfBhkwmYeBJhyjSFe",
  "key22": "4ybmRBbzAKzKM3AtYKHVDKtZF9A9RfDZREi2sV9NK3UYMjXAc8Bk1bFJiCSkqZ8fywLfez2EbTa6wD7cDe63mfdP",
  "key23": "LbWUALj9aSvPD95fE49eR7sVgjH4BTNPWuZKZZL7S6pQMqfXq2E9QLBpcTwX1MbzGxmhjQBiZf58qNwBqsy8ZYB",
  "key24": "35Wkqk1MSPedBRJSSuhBdeY1zmKCRADeZfiKfPAveCxR79QsSHAeaQo6dujLitNDbmo7imaSdnRGn5vH4w3H6QwM",
  "key25": "4Wd9BLf4HcCtUjAvAq13eMEU5sQXs4ucKifX2Lcyp7qkBQ6ysQu867uqFo6fJHSYaQHHeQpGjTu53yNfwMyqGY1V",
  "key26": "3HS8bb1AHXVW1JSCi6MoMwxeb12wacRgebv9mdbiCNyyMKEesqMVmDJ1EB4qyQaaCZTL9dSNb2eGNBcPeGzpAdo8",
  "key27": "5zwgBMvvsxQzFw79Js5YFFbBhp7uE9Fxdm89trnqoSBA5bHK8JHsgsrXHG9YKhkEuWoKpazMEdkp8vT4Up91crVW"
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
