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
    "1u5XdZwfAEx5ZX6XQgRXwjSfTJXKa2KW5E1PVsXVUtRcLbQAbUhc9TJJfdGZawtugRP18X4rwZcBokVVf11gNHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Q4Xq5LjLF3xiSuxu8LyaSYukFRM936mnKFFVuECBD7MXXR2YnWhKeG1kpwGHrhyLVtTyPK3VNhRrr2vDRAMCZq",
  "key1": "xsK49GC3UGWwTeoGCnZmDFvRtrkosGg5jiz7MJzvLufccyEJ6ezeZBz3RFrKA2mC73pmJCLQjc4xqNnwaPpcv2Z",
  "key2": "2B7L9ugsguor5Jor878keSxvJy8Fzjv5HHVYL6z2NDnJFdeprwX8zPZVF6NfyzbwokM1TRBBFfuHqVcmbcP84URj",
  "key3": "3351AkMqiRDX2mVKQdgmTNrNmmFwm4tdBkLMZityVTzkYKZv9LmwucAsEW8bufCLQNLWD6Cga7tWQy8vcybS9puV",
  "key4": "4Jttp1zKRo2vbmd8ZsaNHcZpta8BF32bjQ4pwW9F8XGtrKrbq8SP7p3Xx3YU8X8S7sgAhYiH5okJqLXWkVUjn9ZN",
  "key5": "bTMgU9gDLRjXHa3HBK61mrA6nCvAr3FMGgYUyYsdVVxibr32T1HnhiUtSrmjyC3u6mUFzPpyNiEouGbSxxWas4f",
  "key6": "39BcmDwJNBSZgcsumHXe7TucH9dHzkRJjEHBtACZ9xxjmthc17dCaEsNjCAE4MySb9XFVPrNpNGjJpbUhcmD2ypC",
  "key7": "3tAXH1X58ZY7eFoWKQmojMUCqSXUhcJTQ9LGjeoeiJKQmTtuHdQE9bSMEz6gs5sUXUJKsbSqmdCUMVKzf2YJgSx3",
  "key8": "4Gfp6VYdnm7wVPbv5EPuSzQzVF29X5CQ39VPriVqKTGhFdHUem8a1JNbUBaqPRxSzv332LUYLHtYCRei7NF1Rn5s",
  "key9": "3xqdAsYyUM6M3bdFX38RJxViWyQrYhkJ9bkC1oMZ197gbTeFUEF92opKcUs4ucQ7kdB44oefPsCUkFP8vjvqKF3R",
  "key10": "4zvNrfoQXxdwEiqUb5SVQrLgyH3ntEBVn3VXZVE5a1pk3ev5Co8Vw8wgjww4QxaU8PocTiGDCdXyVeXgtExJiRF6",
  "key11": "5bdtZoawzXb2VkZrWkTnpxsT1hhiCdF7J4NwcFHJCvQBwde5vLPYGynHxdkQFQmQF9Bo3j8ZkrWAwJyq9ncxPBx2",
  "key12": "52Ze7rb2YHyHkC8DPQtUCZq3i6zWJAS8jBcL82fHsq8ZF2fqNBiHxoe6FfadbQCBPz6TdRG22UfKDFDy2u4Jq4rw",
  "key13": "FsGriikyAXvxMk7kGnPaQ9RXcVvPFWPnoj9bVhKw2jyXSVTrdSoRmzdfudSRbbK3R2ejNNi7zwpBtEwpJPnBcJM",
  "key14": "2FgGzyVaWPwCuzN69paG75bDx7AQiVQodT8N7oaXFRuyNv27MHSWMvD7DLNqErEvthUen6watRKzo6jyDAreQ6j1",
  "key15": "4eRRXaVCoDFzfdp4BMcr2VN2HUehYPEBJFwYSaBZTQYvSP9AirPjuKgjqweMumYCFR3xrCjqtGhLMv46p61hCxwn",
  "key16": "4vLrTRvdPk7mhTfCCqVBNMPZopRSHy9A4ctZpL7Vw8b81chdDMzUfcEvNtpQRivDZD2RDQLWDeF3yKAAGc5b6kHK",
  "key17": "5kQFcm6mKiacgQqDhcu8vXSWUVpaHksjLtfW4rQYYs9KnWBqCbjZqpBpHaSsTkzPL4vJa2DXod3zXhJz923UucPF",
  "key18": "7EtugztnFGhopmeLcU8uho7cHCB8bVdUSTQiUSad7SUj48NeWHABgne7fiLeLpKZgb4N2bqAExjAmNQqfhDfSUx",
  "key19": "2Uy71M7PEFQL9Np1zcgT87iY3ZLxEh7uBrgxARYiEU4guYbBRYfrjfzqQjWDBqYYkbNYN9gF7Bs1HFdQQWJ57eZq",
  "key20": "3mvSRZ7KiwcsKLDm2g9QQbv6yQfjgU3aCUPesWEtZ9F2CYLPBL5CnfEA4mVxy21ZwXZYACkePbQQ4Pfpo63oWj1U",
  "key21": "3DYuLKuoQYmEAGSPND6cpCY1S5sf77wBmeqyh3CQVMER2z9XjuV4Hhqpt36kKBheFVk9opt1i4prnMU7MZy6nSBd",
  "key22": "4nVBMDB2gsG6JkdZDdrA7P1mogqztvyBfqY7dqVTPC1ZLUuXso6V7iXQCgt8DZgLnNhzWQ84zRHmfoxuFk7Wd9ht",
  "key23": "5FJvi6cZtBX8MgurU8wgLjJJDufBcrDwyNESm7xvUSCGiBqgJpfVRnTD91u8kNQqvoW1npfqB1SdjoxZJooGpMD7",
  "key24": "58YZwsajhrNZK3Rkoa9U4naWneDew5oSJeTw9Pgow2batG97PasQmKJPA643tchzLUdzn18Kx6fpencETV8NZ8HH",
  "key25": "DSEahB3EbPa8JyS9Y1yCMNLkmeQwd9BW4eSGrXmrgC2QqkCjeTCUR1EDY3QCzcT8iBCmHNNd4FCu2QwvB7JxXha",
  "key26": "3iYNvUci5B2ocMiFBTitW7TokNUi5sbqtQCgE462QdVWCD8XpoJVBzoBRtmQYoD7bsHrDDUA7MktvHJCDftP5zrC",
  "key27": "4SCPvp4PLfQQz5ym17VEaMG2ypcXiPHMcUXpr13Jk51TmoJ8qJNQceZWVYjoBDvMatYy3hUmadSt3UkMEdgzBRex",
  "key28": "28iD9r1HovRwVWypyxv7iWjJX2qVBp9NNpv66Rz7eBNiDiw8rFNfrZUH2RN1kwZZpZcViLNE6TjWR8Nhux71BPas",
  "key29": "5HbdmckPC179Bx4ENWQ9js1AcPjXqoLcVdtmxTREBSah4qrGBTwdm3mtf6BZkRGzZ9hgNhcvsXfkuB2i3FdAs3K4",
  "key30": "2GdTFThRoFtiwCn8a2QznsKJKYNRmwdnwaH61khNGpsmMMD7oEw6YTCHactY7CSxMa7vC9u7frzQRhi7nnrBvk6u",
  "key31": "44amhmgiPj1dw6oSmzQqByF6epYMBQRXfKkVH3MocmAdBvLud3yjbZnmZmtEEuPzTkutPfYsm5tkjhgJW2Pi5WKX",
  "key32": "4AvSw4iHFFWD78WiKiMr52P4yPhfbkzP8oXCQHecGPJAarcrBu2v9YwZZdecYdZgnngyUi9yL1u3Pg1B8aR4griT",
  "key33": "3tQNzj3rzP8gRLPzgC7MPSKkfReKTFCWbsQiKU4dPesWrE98WjewVttTcTSHvpxbzeYmEzQvYawNYNLdUNqeE9df",
  "key34": "28hLFpCdBfhYDG8yDRkDmAQC3qNkgvaJDtP61624XQsXMaJTqdrmVYp3cm4XY421UR2wESR5mMS9wfbT2xPB4oy2"
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
