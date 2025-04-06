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
    "5xB6nWCy2v74Bg4dBCcGBSd489oZy9CbfVRko57Sjtxzu169m72nBR525L3uyeKy1C4nAESydKwGZiyFgKnoi6KT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqmczgEsZDMQZrzznzJofwbTPBbUGgeKqT84reCCw2jtnEM2nsQmdiLKB7EAJYdVasQXYT4Q1BnPdfQyAwYhahu",
  "key1": "2fdYbASebK8SGjzZCxFAHY4jxfdCe8p81JYBfA6QBXmB4DXtkikD34MATwxTnnVE56vv1eiDRB8V4UtWY7mGMGp4",
  "key2": "3vRznZeuJAUFnU7sKNM5BDHsnixJQ226seffoXCcFCsPVSYcseCQ1NdvpauPi3uNEmZLH4LXKDk7te4Q1duetKaN",
  "key3": "5kPGZGCbBffi1WGjNg7SrbzqkGNVY9rFy67g1DaEgKeCqonXxMyJdQxMy9F5frddzoTTf5KbxGHYP4CV9LvcPPNC",
  "key4": "EVoCHpMiC62VvZPNqFHWyXxJoZHC5q4JwgQu8WDWAJvJuJxqqdNe2HJ8ZSptb9MKrjK3iDq6D5p4sPv9NhDNU5W",
  "key5": "3fqaJUdf34covNwMWGaG6QNsC5mBBEqa9i3eGHUfKS5jX68uVPLyVmAt9pGN6o3LmTpiXrmsAxFEZFHTt4W4hJRB",
  "key6": "551MCCDuYFJiq1afXNsaTgc7es7UgEohSkag1LqV9Fhmw2DWZ7XXBr9eypeMHqaAgtW9aty2W7ApzSVt2QZ8ZhNk",
  "key7": "3Q62WYcFVv9CQSKK4ZYt3TrfNSvdQjF5PVCLiaXPkxsBEUyY6TKzKY3MjPGwsPdmMrqvakbuxXaBWgqhiVK8gUHN",
  "key8": "5THj4YsJ6CJ72hdPk1wTxYYLufrwBNGDu5ULNzfyYuVXSiz1Y35wK4jVdqPRdVtbGK5SioDBy9kwtapG2aT1x7Vi",
  "key9": "jsDv48EjEeUfxSkPMxhuFS9a7Q1YxUMjhy2cHuRYo3itk9VD3TPUHgX7sMLFSWj7qH1rsRGD4rmzMvpiZ7Pn8Xv",
  "key10": "4tZQKCnLdhVwA7iAFsZWC2BqTsS2eQFNUuZh4NTmf8ToYZKT26CCq1a7pzkHAz4xXneZqPqNU7eZ7WrjnZuz9FP7",
  "key11": "5evWvb8JHC1dRzvchsAQe7F3ZmzST9LqcXsCFL9vhg7svqGRwhoZu16kUGTDdYxJG1wp5HbLk1Dzx5URNB3uPDwt",
  "key12": "Vc8aL99ssrvxoCNBnDWD7PtMmTTA2y1K6me3VBr2FeEHw5wJftLjVQhfQ4dzALU1YsYuT9age8mLXWdh1zFdQuH",
  "key13": "4aByeajpDKAfHqSryCyTUk5WiqXmDF48uPqfvovKEa5MFNPfvsJHCRopwsxo2TGzdjij6N3DTAihtTCDp4YrBqQL",
  "key14": "4rvDi7xp1VqtcsCvLW9qaSHZzJpV6xsYuWBTFwsqGoBRS8i4vz1Jzp7sbWuCERyybXMPQnYisQ8yy8P2qTJa5fpa",
  "key15": "3AUoDXesyNdG89P7ikXBGS8P2iEYnDgxZqgx4uq6rxBTMMjKB66yEgMkUCayPuMbrHMkppAfBXpsjDywxvir4adX",
  "key16": "2LGDGmCVN6u5t6utP7t7fQWaBAMBr9cuQEAmobHKH8pdRmLACyRTxwzquTpX9iEui3K58mFCzTYP4nEp4s1boMMa",
  "key17": "517jXeNwUEPyox1Psz3yuPvzq7h4UigUphxW222Znb8pEKjquzVpqFkK6pCrdLUKyUW8Rx3ypQ1YoKoVidLWRmEy",
  "key18": "3ReN24EDPatGHUBFKqjfP9DZADhiZUNJsB1tQFRSPuP4AYmkfjB7hDFZ71qfsRvcSGKjSD2MX8Rtq9gCT3DfYwdv",
  "key19": "4fbYmKsyP3Anji9jNW68DYr8PFSRniUHckTB2gmQU89iGH6YHMrrq9uPaWiaiQwXDbVWCe4ZqZV9scV6MMdp99pw",
  "key20": "3XwVz41MXgnpbD8mBVSYRXNAVCoGuZzGm4bbkWWr7FPekpAzgRRhVGYf1n4gxprcwz6K1oiPrTND66tKmdfTiiPj",
  "key21": "Kmkv4hhKhDZJqFpGWw3h2G91WXued7XeTeXXXHUai7CRpJEFxjMeij27KcoBzjPRfhJUaQSXGUkydg1FVfkwS77",
  "key22": "24fwenwQCA5X4gctNmgExepBMzxMrSgvAcL1rzcNf6KT4LHBEyq8rUs3VcQbBGK2nd5wJqFuhCt4FPVSoLraaTbc",
  "key23": "3he8C6BYvzT5MosP5XxLNxdVzdPJHJT8ybknWVBJf4P6JLi4rpCvbUk1YbXfkWHe3AmKDES5VpPBfhLGN2jfCCz2",
  "key24": "3QB18mLs3fAeXeiEJjnjo4Q9i9bfXfw6uvuMHvDQBVeKM1Y4bj9eLBUoc6jXa49iKXioBFHGsMAdXZhPSDqKVVi4",
  "key25": "5hfb4bJX8zneae7RdFuqhQtU69upf1rRPtw4uaV3S6QVTcVY4s8CRNBR4ako9RYzXaqUTMyjDEupSTRbwyGi6q2",
  "key26": "XQtUAP22F4oPcE82q6kuKvuK6jJGYKYf8FU4dPKo3JfGPRBHYVRt1Zb2g6siyGh6JDkjPBFUeiwU8itAngbtGnf",
  "key27": "3BwVDxpgc3TokMa3KueNBHdiNGsMDxeYuEuMGHL5B8GwpCNDfFn6Sy4DPVk7sg11RoiFsTVJccvCocXdww7o9N6b",
  "key28": "3BuSJksnhzxcC5twb8x3QuTu2USDenx1n6fwagZ1KxphT4kCMao3QEHCz7rBYd3ap2AZH63VgXJQfpReHoEjv9Zb",
  "key29": "5sGpxMqXWWxUq89QCq8cAscr7Q7e15aRPFd63F5KuL12pm689XzudCqfPfGWFqAv9VvxYh7tBxbZNyYYBtFX5Wc9"
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
