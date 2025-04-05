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
    "4cE1VJhLMtpmCS5WLjvknY3QxpCNmLnzLMF9EHw5Tmu8ZHqBTorPtbHcuebxaWtsnTor5XbKw7WdXDwxNcjb7cJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a6y1ChBJjyrFhcWGHo72xYDPtqUuiqae9NY68XDeduwRYZagXVErWaDQE7apKqDigyxYKfxSVMjKwPmsrnoWXM4",
  "key1": "3rMRHEhRRF8Pi75MmdS61n58NT7dCv7V3PoRj6BL75VYv9Q5aWZbdD1xSozpAMX5mMihBeLt3Ptfwb5hpcmebwgK",
  "key2": "SQyfGy5jCRw62bDc8WnM11QyGpkbDfPsdDZqPBUL2yXuBgYzzxHvQ7UeZYg8zkZqGNp9L3trgUNds9cdAtvTvPL",
  "key3": "2aDNW7v4uEZ397GwTaW5rZTkWUFmH1kco4QxFnLVftjT27kWi7Po8o4pPiSxH2BCXNpFW8shjdgREhrZHp79PhaB",
  "key4": "4gPckwLeZrWQerrxWbRLDozFzKa4JjugcGNdj4gSUqZnmYnRYiDyuZyxUkyojSzVLh1UmSfBv2uTn5Erxb5QMvWq",
  "key5": "4K81p9kxs7AjWCpR9pLreV2XRzX4nZ1AiReZps4RR8sdudUEXShJgRtTjQSai37PWZyeZ1a5YPr5yxghEMv8NYaF",
  "key6": "5zBhkQmNbt3L9jmfjx6ZpUgQHCEcVE1CoBQbsawV9tpxRkJA8GF2oSdeZF6uoqzrvonDKpnX9uUjWJtPMk3hMk3y",
  "key7": "xTQWa4eLEMX89TfFAG35XC9w2BQXyV5SWvmKa3XvWtvt95fNeJHAs9c2h39atQLV28jPZWMmMFrEEpqTwvyfZrN",
  "key8": "5obouWMmaXXarKWa7zeAviYcD7qnHVstepz6ZJp2y8KkbLzYjokYC7jx4afXwDNqAxad5SZSNvGKejqG8fRAQEfD",
  "key9": "2QAaniAo5sk1a4dPkHtgGhC7x19HFNySnpgsf4BTfB9MJZ6h4tpGHLTBzBapc8vLvh9KmjeqRbdAXWomSBnW2gMh",
  "key10": "3JQn4fbybNK1VfNCKMkUnDZzpvBWkPo6prmeyumPawYXk8EDmSVWtMB1Gs8XQFFv7iwbz9nDHhocfEgJN11BfgEu",
  "key11": "45Mm2Zx8P6YFo1EzzRidhpgrKhkuunaCXRsiYqP54e3Ej4eYpuFngAkZgUU8LkXmi335UAyhVW2fQiJ7RNsnNF8C",
  "key12": "36LxApuWYRUbjdkN9EREZmjBhJqBWm43yqLH8E2JpNMFtCC6G5T8wBc5gj51XbuDTfsyF4hjRFGSVoMa6Cv3HqKM",
  "key13": "4iLkBTKZBZfYZuQ3MBnBHJFJdfHaPQBp5kxLpu4CZEj4ahb5uR5DiSgDTzoX2Zvk49bjUVsuLyjG5UkeJGVhBpug",
  "key14": "3HJqzXr1XmGuqZwoRJccs3Cqv15PWxhRo3fedPU1quKTyQoPCyvqRAoDhu93UMyPNp4qJmjrKWV3TDuYZ7WeuoMw",
  "key15": "4Sox3GkyXiHKoSUWj9mZSMWwc5nzpNcJYrDDdTsTomCRp6GBzWzmce6THfQXFE35WgxefVwTPptUk9WDeqBxWQLJ",
  "key16": "3mHcfMB5p5NLpWqG2NFQVmFgz7TFdZe3SySxCmHTW8VsiekPFoJ1o3rStZQRaVYnTaPMARYdyM6GEYDS38huaLQF",
  "key17": "oZyLwtwNzMsTDm858TrGetoPf6iWZNH8ffz3gb2VmwCZ5MZgSxVogFNXDfPMjuwR3f8yhyMHvaK5VRXLmPL74hW",
  "key18": "3DNhiBDmGBWQunvRYe4jKivnAFY3NZY42vGaLANAmPjX8xdmyejbJWS57t6UwbayLgaBhg9dixm1yKzqcopwyUxT",
  "key19": "5dfAWYCfwExj4fVmntHYwKVhTKkRwrBMFAQyowAXudV3pfNSgTA2dN8pfsbvPsAg85nku3LY56HDi8uar86BTW2o",
  "key20": "ykwn9aQXXetJbVpSLgkzQMCAeC46YBqckKNNCdTFFwB2k91Ek9Cvgs3dywbXAfmC3LJJ2F6QVKtWT9dpuLiCgHo",
  "key21": "4Atp3fUvRDLtzvxBbd5VasmHrse4a5Hy2Tb4CifHXDzjNEVCrB3hNHGBY2LhFQ4UXMSC39Sj431iu8Lz7ZqTg23A",
  "key22": "4XZCARM56vAHkta4j9M6PzyxWBJRp53t7ZnxGUq4BLsMJwEXwWJjxARYmPoTmwa2FQ2kZnSBnf5MHRs7j5qnCNY5",
  "key23": "2VWszLgY1hRPJcRn2szYqwPKy7grQ8Bx3mLHkMRkLgCtXpHPaLDeFSTvSFoQf2w5oYntWgTQ6RMXYd5ySyy62GLu",
  "key24": "2i5kt9D6ZUtUVnoEn7PocgFHA4Asc4su52ca5eEeudSCjNBkAZEWZo9rqPw5VFyRaEuorhw2ePNxa4uvmF4jXhid",
  "key25": "31gTKPx4h1xaS8BLjVuiXvZjd8vz4C8gr2Jx6KTZGyXUiXC5LmA4oe6XhhrqdPnFVSNSPqFihjpuikthtdNdUoiR",
  "key26": "5o8CPyPSbGaFBgjFHP8PPtVuft74VA8agKj5Pas5LVinmYWkEfGroJJmoTxiHHVnqBvUShF98zyHWFgw6sXKwxDP",
  "key27": "3qqnZqAtDfvVpoPGTBZ4j9jD2p4R2YfLMiRSCQGZDoQgmEbxhp4BzeTJR51LzXetCNcWTeviT5PtWpC1GuBqihBJ",
  "key28": "5vxPvbJiguFSzwAJ22kRCjyfBAxPqoaMSsD8H1KLJoHpYemGr76X2hZaZNEMgctDamdiqDNkLc6jGEesGekN9PZg",
  "key29": "5MHZkvSDfKwp8fMyK47i6j76vw7Rs42Cm7sWXmBz3xKMU6PsjdzyPKZsi854aHkrfkThAscPzC7mGydR8n4yqtfd",
  "key30": "W27TLoemwHuyBbwh6aQXBXUg8fdF4P9sYSuuWwDSsStN37NBHZf64nGBHnSyBLkKQ28HshcMdvTgUQECzqGZ9p4",
  "key31": "5yZwaw8NgEsgNeALWZfs9W3RTGxhi9ZaCjGt6Vb3mQY9uxGYmpexRPujWugkwPP9DzbHmybM1Zhz1We36FABZ4qA",
  "key32": "5VBAWR5YqiSv4CFMeB29ZmjWeEWzoRxwpsNrvKXVM8Lr6zfZiVNnD2HDgbtrrnhQRKspNfN3FuLSFQUKrrKzkMTb",
  "key33": "5shECUQGjQAN9WwEb2jWGmkirXKe8fFyBcKiTK4GodGWitAkF61CywLbhzycPF552ZLKvEnTQ9pN8merWzNvLqmr",
  "key34": "q4yy6wu5NnD4q2i9jynJPGbe1PBypjQkvGUJgHVAv6B2a91FBWHXBQsx4HsQmHCAckxhKXb9fQy8PgkrCtuUZTb",
  "key35": "29yTLPD3p7hptjqzKqx86u4xcGbQwXSP9JLFL5MCpfRuuDaqRw5uwT23vc9NW3uhxBV1GFYust9FvE7NZjWRNiee",
  "key36": "4Po8sFtH3uRmDHE6x5YgiNHyq3KppTzYZC6oW4XbXuLHncwkbfkba6YEr2ommZ7WLRZBcUUWbneDiNCbDTeXkEij",
  "key37": "FPAcHirhXZMuuXvaiPyNw9d7x1QuHg6gCWQiMTaTuvCtMPwhNF5jcGch3VQWsVGJZxjJ5E93T4MnNThDYqnxxPY",
  "key38": "5stBZAiDYc6bjnxZhE9ufQsWwda4fNngH5bdySdhN3WrSVroWECicDbtL3C6om7Fa8KY7BBinPyyp8YGFfRppQNM",
  "key39": "3W5SG3D3awTTwtEEfqzqEtH4boT7rXASFbv9g84kTYF2K79jwt3o1Xo9sdv8qutibP12TheAeRWvdWEbqNDJ5QTo",
  "key40": "2bzZQDNp2eGgnGpJDqzLjtce7Xkzj6LGVf6dhU3DZtQ9UiedcKfAL5hd95jF4AaCuLv5MeFU5WT9QU8ppj4FFFPw"
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
