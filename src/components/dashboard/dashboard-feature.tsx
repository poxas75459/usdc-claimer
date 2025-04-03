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
    "3ypQzZDrGHmb8e4xvnG41kG1YRjgwj164MzF6P7jxgA6vfc1joE6vLuN9Lvxio3LPpdPKfGURPC28Ao2wS6GWedH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVgTJjD8zNyF5FFUqxvm8yphiTARQ2QJft9D1ebRtYFHuG6dupAeCmteHB1fCMW23bhLixo6YNCXEWgctMA3idB",
  "key1": "4zBCN76VDSuR5PxSLzPZrDYLk2JjtcSMvyPMr5eRoiZdCE6ADvK5JPJPimxt7haPyjwdtemCTJgU6WD6fsUteEPe",
  "key2": "22VEz6TCB6amLF5eUH6rVnafHk4nNh3Zc9NJRmBEFFF9sXLvSRfyXN8pSd83tUEHRMmqDhZ1BoizLz4RXiiBG7bi",
  "key3": "4JSFxvGKbQqpnERt8sM2VyLmNWyzbXoZXW5WFpBkZv1cpKQKXEpDWaDYf2aja24LMdijHYJXoWxFMUB3Huui8AGo",
  "key4": "5CJCRSbxH85EcE1ad4uKcg638JAVLBcDdhaSq6LE6Wec8gpNupQ2hkEYBhCu83auQZ5XjJ1T6mjK5a2ZHzizbqec",
  "key5": "Q7RNUUfujPDz5qghLYt54WwAocKUgUXSCS5thiifSMRUmGyTL2qzpqZBP8msjRMSRV7DjZTamKy2qkLrfViUd1Q",
  "key6": "4nUoEqa4Kg8br238yAoL9nd1XuKShx9M6xqqydoEkca39cxRuX2NfdaZWDvM1osUe1cGa3zmM8GB8wSD5urZZTfc",
  "key7": "4zVpX121BBzvDd6tcqzeBF8VQrktbj1EU4Nt9ty2SF1mzufEivCk83w8d3BMwZdQUk82T1KsyEpz2ApupEHYyc6B",
  "key8": "3GwBYHQdazu3q8mFAiNNjLuvfU8aJFm339QHz6CYQyG3UJfAH5Mz2ECJEGXTUJmP7F2gR1BZzXvsPFaCjk5ogG6e",
  "key9": "61t7ywcw8KeQz5sso9WDNrHik4WVxFbVYnxHECkiSzvEGQpuh8yQfMgR1x4JX3k2XRKpfCX7UQKvq5fQmZFEMLUY",
  "key10": "PZwpBEpvLu6qcTfipxXjHAkXNh4S5QiXScq9dPqJb1vHsGwru1NdynXeK69fHXQwFGYAK34cuaQdE2kNLRu24dM",
  "key11": "5oK8GEox5v7nMS1uHisUQY46ksQTACrx9WBS4fNcAKvuCYu2LrMWHt2TtQiKcwG6ziSDqTwEx2XT2VSH1xhLLTwq",
  "key12": "5P3pKpV3urkZ7h1Cqj2n4BpZ3bFJUrPGhupwwqaovFmQA89u6Y1cGQXX1nrqDhKWm6D7AgdMDxJkCqNLMkci3HQn",
  "key13": "4x33bSYsZ6tWBxj7JeMMLp6TtELPf6HEZaULKPUT8JVpGZytGEBe99dBHjuLnUr7e15KptxijhpW6F8tsqtYoUUx",
  "key14": "5y4Swpx1EeCizhi1oUkpAWkX3HgWkfXRJzPm2LGixnTT3MtFNFZ6ygSqK52QgxV87hfnzChtFToSb2JLnKpJNkAE",
  "key15": "2kEbVR8ntN8b5bm6H3WVTHhTPUuVZBRs88zjL1LeVRxGGtmTkE2CPMfNJnV1enb53iGfkfpLsSLcuLdyLuGgnfSS",
  "key16": "57aidvwW9Dk34fBT85R73LFL4i6858D2eoY1XENbUJofjL9EgiYDCjFJkPx86UCwtVJiREyTKcdTPdW2XwK1Xxud",
  "key17": "2zR7grFaxKNvGpacutkcwEQXX6QHkYGD4jfapDfg6TrY3H1SUDbnDrh5PFbqLe7UwWB1QCPFyv1Jzdr21Y1jepo",
  "key18": "61vMqsmgWGBrghXUrJmvKw1fkc2GjtUtzVhh2kWAREDoryWmoGU5p5AaXxuxjUoWSnrHCXzdtJFXTZRfh38LMqDD",
  "key19": "24QQqKPhBkwSmdfxW5pxapAhxiYReFpr5sPetEjo4i7VjjiRowjrLqZ9m7pYfzS4z5Jk8KVr7GpANnstWzG6MbcT",
  "key20": "23HRdYwJ9vbaUJ7wRJfo6iQMFt1nFNV6inzMC1CYfCjud4FbGZWNQt2FWmpnXTibJgGp2B9gyhqXLYjd25k9nfy2",
  "key21": "Xx8ESQvVqtB4Po6W6m7MHGZ43Y8XqT7W4PSBKJxi2aYLkAR2ioABNgtxDvipn56o3u6Uk82ocmpaFLtEE4eMAK9",
  "key22": "2cVkJhXZ9q8eiwiRetsZEJXsTFDkWL8ogEnNt4qjjkB7EiCnDSAsvD1mc5HNfEUHykSRNviiS4JxtGUBExcxBygW",
  "key23": "4HiZmQqrXx3UeBnSimFyF4xfBDR4nCBHeYf4CZuH4uGKzY9pwjKxrERkbvMos4JgmhmwhHsrTTxQsvYX6yWqGPmP",
  "key24": "3fXA3R666z7L1VDVDAwfhrDzusuWFuLHmbBQUiGJq9AmZ4uSJ6r1dkZBUnoN1zDg8BQPbBTUBHxTdhmUbzWwzHTP",
  "key25": "5rx2NGWQTyqBcTG5EHjUwVGXuWyojiXi3LehsdiwHuWY3MQar4jm9JYdtb6QnJyNp9wNkGuH6pSNEHgAoXLKWVXB",
  "key26": "UzeURMaEJpHieR2DEsYiDRc3cP2Fe53RAHwtd7gk4bGgVqrafYKGa3WGQaq67CuXstC688xLTaWz3jPe8YVtT4Z",
  "key27": "WVfAorDHAzPeDCKzDavvQaR7EtMQWoBzYzkzCx6qWESgSp2PxYdmEc2SWusenjTug5SBYuztLENE4f5VLUq9JY5",
  "key28": "3d9Hi7c6LoqNWtQQF922iXhjrb7uzpFGiE4Rb8RY3mdRrS9LJW8EN2cWWKGzK5QT4etttUbrzJweZyoQgtxkB6Um",
  "key29": "2GFsZgYupw4XftnJx9Sq4995Vh7NMSZSHEE74Y9JF3P6hn7MRJdTGH3AXmDAPDXZof27a73WWUFHvanSNZP1ieLs",
  "key30": "247mrdBhQNbboMrWV4BH6PmgrdQrNibfZt1ceyvXTwa3MdGbh2F3VehEP3M44w1fD4DKwwAZt5QrwQpZ3PGx9hAF",
  "key31": "4Mqyhb14Vky5a1BXpBRPpo3mNWGTe43Gz5uM5sUzCgeQMkRkktcVUhb6zKE52x157P3bfnpT961zgWhanKPQDgdi",
  "key32": "MdeGRY1NmaPakuR38rWdHoqomf4imAgsquDxymDquvB2BxzJ2qVzGSm9rDZ8SSQytfcUAxDivJqbYpc8NVtNuc9",
  "key33": "652MEWwpxaDiwQAaXpV3cW5LHNr9vG9j85SKaDwoRrH8mnQCBGe1bqWMf84Uxm4pcxCNRA38aiqJBm2fuRxU127E",
  "key34": "43pH5FkXQPiiavMir7rQumSpPaK6ruyRBVSFpPNgpsEM62SvVu8Sf7BDVo1Jryz4ksPExhcGfUzi4fzMiv14tvgi",
  "key35": "znapB9DUWMQ1LARRkgE54ScxqQvdC7tcrYhqxgBLqfQNrfKNZSLb1UFGJCwircVCU1v2Ezh1rc9BjVVECWVjKSm",
  "key36": "4uc5RbJQHAVZ6tTkwoM82fioGif95M8LsJTgz2fA6PehB1XLGMHrnQfBRBsRfWfzBwrsjF3R5QbfCmejPoAW4hZn",
  "key37": "2BhQT3uvFoxMaByaiCrXKzCs9rKmxtYQgRyZGkFRRj9jsDu6cmnTn6yd9PW4aWRCj2G32DqpgBTsHPLSAYhBHqSJ",
  "key38": "2oncpG4F7M6e6hewddLpJmc4yMAgBBZ2CfSNVY2KgZkHLpwZTYY3s5xRtVtJwLRKiP7VCZcyREAQ2rNYHrBygjFJ",
  "key39": "3V3oNWCNxVKkuDD3ZK9fWxmR9uExtc6ARExCLc4XqGaaTWq11PQhvUfQdDpZp5dDmFZ9Q1goRGcXvALvCMXu7Mgn",
  "key40": "5VBLGH38rzJ7uFunfWgK3bPR28TwbyGvpNSGEs81zbGEfs7a68B9wXv1erfRjBaQhxT1CDsZt3KkMm85Ui6Z4iEw",
  "key41": "5xtp8xbTAQub2r8NekPmNLTNPZU8RB8nuRRs2ZXXGEDc2J56yMta9Dr8xjFXH7G4KTKbcwgJsxBQppEWxt1ooMaX",
  "key42": "5AEXibKeqQ6jb5cEPupX2LMfjJFy559wczEMLt4fPTihLxBbF2yMSZfpfNcK3AHGc3zZadzgq2i76gyWnQ32bPho",
  "key43": "2rrtcRK14wwwY9PBdUaeCvF7ZHKBjwBTBYwQFdcpMfXnCWckyYwEQsiewL8nnBPh9ujZQtsm81i31Tuft8NG9NoN",
  "key44": "9hKfd8u2Mg4w69c4Soud1q4wSqtFrV4zTLHSQxZ648NDQU6RZuCasMC2moG2yt5k6KbvNHUwkP2dV8igCAMnizQ",
  "key45": "2ZJNGjLd4mSdjXi7fmptYVhhvFHKn8CJsbhwJrfdoR1ouxpWfzFmfkUbpYEEjMctvEdbpd4gBckBdsgvG2SqgHvd",
  "key46": "1XcYxqiYWB5LKYF81aA8EbUS7jaKhzpmMuU6w1HaQtx3zhAahKEPSHyD116peJjXwZ2VS4hy7RcqdagSfuRE9a",
  "key47": "2xHyQFjgXmiuZkLmEvm5Z17Vm3BhmV8Z8cGWuhUpwRKFdNaMqvbVDWympUkqscu4vxdo18CN7NL1WTgCn3KT1sDd",
  "key48": "22y2VnuqZX1HmAnGsGCb1D6jbDDv2afdysF1hhuPhpS2trE5cnBirZsKSb5pnwRgZzcmSjj3EXWRfn439ez5QMdX",
  "key49": "p9qTnig9LXWpWago3MzLVXtYpXbq2pTJ9Vcq7Mpp8YHeiHESTX423gPPSbuvBBZRsMEyaGuZpap2LgRxzUnhW8C"
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
