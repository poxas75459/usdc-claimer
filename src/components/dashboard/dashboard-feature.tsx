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
    "4YcFXqvFPcs2BGfZfxFPGyncdRf9KQT7chzTntKjwW4Y43Qp1sKveGy9EwhrqyXTTbfXiWNzaqzQNGxZ576jWyew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BhHhaMo1cGEvkSVET6drAa7PpkqVEZS8yEtY4jAgZzLSpX6RXYhSxM9JE4JCutNdd4fMdwnz2mVjMy9cDJoBe4V",
  "key1": "2S6rsYGRBDCqGZFnvRi9V1sX572KUVNERnmMVqna3HyBThxgMJqgtAEmQ7ofzCvzGEPp6VNwJve4UbTAfMXhDyjz",
  "key2": "55CBToJMUvhdgHEM2E7ozenvRafUH5PEtM86Txj14PL7PiE2kFDf8Hr5uQUwT9fiKDSiJ8h7h9zLPizk9Rgc2hph",
  "key3": "4BtjDuThUD2FMbRRUsTRNrBWjxoXgm5Trtmvqfs4yeh3JiaJsQVD4GtnBz4tZaoU2AeSZoT2sQQKZM5FZHwkcHoy",
  "key4": "4N6iHmFrjieSJAaAZTjstHWrb9DCRMryDtkAgVYMq8guFprfoKDiAhhhZhXxCceA2YE5nTZU7gLJW5rUDoNkqYaX",
  "key5": "4o5ZMjBdaJDBj1zahwgXYjPuRAbomcfCFP18ZQoA9UgxN6tvMbNZKDcJ2K6oMgocneTAsbYaeKdNmzqcL1jFET4F",
  "key6": "5M5Z2UrcZ566Fw2GQgBAmaj2uYASiYZbDoR3sCoSbq2U2oxk4ZSHva8KhBuKsRMwGeYb7cMu5EtxMsDYGMnYi3X4",
  "key7": "5JWD7dpGiBztWa1wYpBXKDPfE3jMMxCGuHrj1PicV34YgxwTXocYnm1ZXeMHQHsJLiFY7nGN5TMtvYjFivWJ52Fy",
  "key8": "3A8a2ibPV6whQogPMjNnYDZYz45pJH5Lxr42ANUhJweZSXWx19HwX9weiyR9ezcPnT2WyXBeUCkWLrqjBqeMS1gH",
  "key9": "3sLMm58nAUt5NECjDSoqqQj9iEgtNmUaCg8Hy4k5bXmq7iZzzGr58arydSkxGeD1Ys8qbTfZEyko67HaMkkAqHRH",
  "key10": "2oQSzvNizxZfuHPTSBwxAEizkABFDLoPrvucLMRhHSCCDQMmnXqY3mxpkvNYVdkuGiNJZW2AW5JNpu4F8tQYvaRR",
  "key11": "3cTUszyLJhDpfE4rvf8LuzC9sZGpbhWrkSKfECN6xfCSPcDygxovTt8nPT6voEuNZWcLNVXTuWh5Q1sdLkejkAdL",
  "key12": "2CYAZEpxHEURU4MU7xEMF7E4WmpAyqVncK8tyHssGDprfk9QjFdUU2f7rz77yZveK7qYKFP8CVvYsxjj95zmB54S",
  "key13": "613rZYJwHxBGmm8Pk58KnpJqAChhC3TXjTsSwdGscNpbDNZGyvxica3L7jg2i7ZTRz71Jo1hXSZPS9LkdDWBM3zH",
  "key14": "2dX1WMA5Rv9HdndZBHxMdSSRYQkyEAmuujqgCkWq9B2Ur7EmVanSrKatwPFRMFdiUb5uchJDR8afxKbqUvZFKHe7",
  "key15": "4FubC7wiXw5CugYNUx3qutqHnKpG1JvGd7LhuGXx7Zg1gyFhwaLFzDGEebBBZtM8R2Z9Gr4iFUCCC7cxymDR66u9",
  "key16": "xUPdg3M6wByjFMe8CZmfvLENbfKtJmQQVUm8p7yCfiSHqAf81p4C8QuykrYUJTn4rcdba25gxuidX3PXz2Ze53y",
  "key17": "3iCb6zGK3CRMgUrwcX5YGcxL7LFtwCKwfkk4tY4sDHdEnsbGiu4g8HdNGAYRJJkCCgxTjQXivBPyEDjXLiKGvXbm",
  "key18": "ZQzmwJQVUV9YGagLk286Hs6jhSryvMpefh5nSQ3BQMS35zwKnAjrGpSruSr1mD96C3bEh6CYKAr6yVoNobfmNdQ",
  "key19": "HZSCakqt7yhX2SA58qMWxBA2fAvebqntYxFsjCNbYqQcDqCQrDKeeYSfFdjjrEmjtd1cRCTqVSjWdwA7Yb1BZn5",
  "key20": "4rD18ceNWcxqXbVSuiR45qz7WRa6ZFwUKdahXX7ffbyjdLg9z4n5bLpmEeU9xPU34fSjTYfPfdoifT3KAnKnjiiT",
  "key21": "5yQYsJsBvoG38SRBHsBmDtyHEJbTWjMojQAY7EaTcvswdGyk8Pnot9CindVx3dHQCgYqLZ5FTq4svjqjpfJpDCQq",
  "key22": "5vsBsXCCK5KXoheuBn3rNcBpsg8BDcjs4SuDAS53DVGYfjYTfXoTtrntAL3bQErdA8yxfKPvhT4xrxHNzaS6Wvma",
  "key23": "3kYEq43GFRVkHPWPq4fGEyEQrFG7igrsbChDoDAci7xgpuh6gZmJjctYG9LJK4ukcx7rBuMTTE6zEfKeQ76wigvD",
  "key24": "4Q7CbQZLh74cssiohgngaQ9X4NaNxFyD3vJZHikT5pQ2YUpxJmwLNsrfwqUBP9e7GjRcFSUZDJqSh6LYvDDsHAHV",
  "key25": "2CLFJsBhBNCwyeVVZH5v6wrruZEjsFmNnmhjNK9c2deW71kjadYkFPSHNaoTh75cVSNnbKHUbLLVEnVq93VaYYdo",
  "key26": "qBL38qhdfgynojaZtY151EmNXNAxYKkeKNLD1eNy5iDfgvB4DVLEbNaHaqui7zq9Hu5rRsBF9HUaWxHPByJeLrP",
  "key27": "i1octG8dLzFduEU6sMnVemFkSjz4U5XABpEaDbPs7DECW8N8EmYVE16agy65FkSVz7GavrYNCGMkaFWY8GTFJ4b",
  "key28": "npX7GwQAUZBu2KQLrECfMNvnLvv2ECVLXQo1njuLyuoD8aXoo29NxnN5aKoBNTDhxQRhx6NGUSuet93yyAAQpQb",
  "key29": "5eobdK3CUpdivKXi3ebEy6z3wcdpX48LbNw6MMKvRQvbJNC6wnQY6Tmnaaoua3Suu6txXBEm6yw3F9wzFLH8ieuq",
  "key30": "4wHwZ3RWBGVE3bGBHXZQKxdLQh3rppYJYj5yuPjU5acgqCuyjeG3QBDm246CbwsvuKEe2ynutzvh475K4qXwMALf",
  "key31": "a5i1WsZz8pMgfzayTBcqAxFRSeLcSLiMLimuiYM6VSePhNwF4CjUtrgYjR1rrkvMHhnZGqHm1QQVt7Kfe5GTAYt",
  "key32": "4qS1LtPWkE6PrhsgbJRnH5Yp5nwjadSJMwwFVTJPB9ULzbmPqAAiZMpEvWKPWiEHqye2Kv8Ndq8vgMaihgdRuZcf",
  "key33": "QdRAQdYBND7x5vzDscuz1rLBRa33D41b9SYEmZpJD6GFajgMMohDjdjGr4aDuRmhXbwht69TYtALQu8z3zaAAPF",
  "key34": "29ZSehH8KscX7Q9UcXg9zGrgo8z5JdUq9shqzTJWqv5uS9QPgmfNApvNNskHYeY1VK3Xg6HLQfykcVe7Q8PnEt9q",
  "key35": "5BFcq3rmFUsdrsbjc6afSr5vrxMzswQYZ7Hfe6L9g6frjCCKarudknZkp49M9ppJiKYch2eY3kHJwtMbqyNWaNzs",
  "key36": "VQSDiEW6hPbaxW9ymp6LQpgeePZpvwavZwL5cGFttFbH2NjGsQrcN9gfpQopLq6f93KPFtNHEZs6uqXtux4xkPX",
  "key37": "22v4jWeoy2nbuxUEhCE3a7UqCNjGHKgCmevgH7o2ih5nY9swAr2PwSnLb6oJ9evFgvqrmqtWjqAKLE7NaayhgDLW",
  "key38": "4dLM2vMD597tTAALGKAzDChUKX4k5AgZXs65BfvTmoowGuEcuGAoWr6TdbJ65eYRAYpususFDre1FQiRDg82ivnX",
  "key39": "tpEYFdN7jRSv4bJ1tEY5pX1HP2vXUZ8G6QrMYGFYhD3t5eb8Ds7kd3eUYHqDKrmEMeNvvS2w6icSmDqHusSw99w",
  "key40": "5Z5N4khpqTCh9dMLn6KApHsVamq3itZbaHoXwgpJ9CwTVrNC1NMBRkzDHUzmjp6jqqaWipoS3CFW5KYreHFahxiK",
  "key41": "3nRgznREzG39wtzwU8MZXkZrWrNDfxoiiBkj1jWsh6X1piXEVbLEvURaqixRcooePMQGMwyxbqf81VkUVGthk2Y9",
  "key42": "5dMW4MoXgsXi4uKj18BxhHqVtMPj9zqwgo4K1yEMqdAUk4eWdVWRykfhdg7aDPkmqa2RPw4WA86yhnG8wv3HY2zj"
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
