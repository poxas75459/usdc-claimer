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
    "4GUjUTYfxVWvzTG7e9r1AM61uW4wc4u1eDFv3L2t8MpvHPDNm1ECspeiTAfYxzzNESJyfJFuw4PCfTdxyjSS32JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2zm6Jz5wEJN4r45Ce7DmRKAVc4wTVyhz7nehNMaxZPU5BzPK5LU5VYtRhHndEgBy9fY3zgcwpGC9g4Lu3jZtKQ",
  "key1": "5Cm1KmR4jy6NTJitJj8zMb9Ev8qjhDBhKbMVrKqeVWAcEsuupfdkmn1DFDad88xFjx7RDgCdgEJKVJvQwyX54is5",
  "key2": "3ZPHkbNoqjhPGSXxSMtWpcsZJJJHonanrdRBLreRchEpZbAkXKoK89httZ29JzgvMStHqPZzu1TKFBAMrdzn1udh",
  "key3": "4PzfqCCF7yv1DMAyDAzo6Z31JKNnVqkZZJawNQthRsmgGnoA29pe9Av7RtxNZKQmo9mqdbkk7aeRXQM18fpFhjbj",
  "key4": "WmyKcrfTueza6NZi6JMFUh3P6JPC4itwGEatgXAiYfPoHpCUvSfuzXkBBy4FPE9saYiXKyHBFkG3YehdefYsSr6",
  "key5": "5qK2SUbPx8JvvZkXimC479V6VLwgXpCVkypYHM23PP65HshasVGor4izvfUUJgCLnJsiv99y27qYs2dSn7BLBSut",
  "key6": "4L8jzNFEi2ZTLiECqmqdncH2KAGDSfrTpzh3qRcrvcSqjFBCNZh8Yck1FYTZhVEVcyfrBFx9u1gN8G9wbijZR27m",
  "key7": "5woqAVwTqLtiLikXxgmmFWueQyjgXpMcCTaPkC2G4uf6TjQXxzBWMHYexcSmYinoJpVBSjj7h7hC6m1qG8e3vV91",
  "key8": "GhM4Qg9uPqcWywzpQPnmNzYZH8rbcFtvijrKRBJngtHGkBGxnipgAJrrcdFiKGWsurLT7pSAEzgmkWpLbYcLZFz",
  "key9": "ASgto71je3oVNPA7XEeJRJA7mDkMaie2fsnUDxzvAt3x2NNtE4bKFBniLd9MA1rq1UGGKGmG3rCsogxfnbeEGKW",
  "key10": "2gnoHv4hwZkxvf4eKpkgv5vQebtLNkp7ConwrKtpDE2e4LJjC584CjZX2PLse36Q92M4TeKq8YGv9KHzXMZhiN16",
  "key11": "379YY5bPMCRXEeh5vkJ4A8znApiMYUwtvrd9d3y1SRLzM9XJ9ZEebXjz3JVnv35wnkLqLvGeJnUi5FzVUcWYpfLg",
  "key12": "3VopUDzCcQ7W5X3r4nt4hQBjHMzGvYLxwNZp4rVycCU9wZfX2bwadNoKC3Uaiv2PzvpPYzPNQL1N2nuoW9wR1byY",
  "key13": "4ktAgaz2ASG2m8ejwsGXvQL3Mk4jU253s2afEs5VXAyFscDmtoCt5odhXmrQVpba2Fden4EWyPrYt9BMMd69qUEd",
  "key14": "27TCCnrdvfQ2wGTEm2cfeKuZ5v7dKQ9pmNWKukgB72EU1jdNH51cKpxoa2E3xGg81Fu8vRvkxLSAxH153wHvWU8M",
  "key15": "5ofAZMBuAVMo1dH16qrBczHJ4esoNgLabkNC5MeAWopcTsyq76Eb43u3GrS4SVZH7X39hyV42MokxwfRHAVdnnmW",
  "key16": "eE12h4ixR9rd6zagdzoQP22a9Wcpw5wHLG6GMBVQDxUW5JoVrundmqP5kHSQvmLdtmN4U7YyRKYtZCu4ZcQKWM5",
  "key17": "3pLEPWmy7pVdD7tFDq5cVKKdpBiyc7XD92YjDxTqVTnNQdg4n2eeBUazJJj7eNtSCPQCfW9hP5tSt9QV2Y664twJ",
  "key18": "49QMc6k7XbXFjHD2B5oCkLDYPrTww2Vc9JfSAWiQxeFV6JQ89ZRqkinSW3dX9EbeywtUZUCrRyS5ywMjW2Z7TPLg",
  "key19": "5MtbA1J635XBbzBcpQN2EkHP1tBGaWnRf87CqkjAHJN2WMDEuWbw8wuCgkmsSHXCM9fEDZg8uqTG5rbWLp4nMWdZ",
  "key20": "2nQKGECkcr35nHJT8DZXHuLk1yWiSpqZoVKPGeHjYYNggg3C6uoYUMECfb6J97Kx1msv5XRaYYmH1LgYKBLrbcUT",
  "key21": "5mBBi5bdxMK5D7ZQhpmBrrffswVsNTQ7qHfnfHxCY14Rg6rLmrPpQmaJm4um8WJ9tAuskL7gzuAw1CkifRwNj8ud",
  "key22": "5Lxv4r3tf42NQ6tLULK4QdwaBY5UzHcugcUjcCA7bzkT2QMcRbBQnL8ZCysm354D4ojrziwCwA7DYJXDjVqJPFtM",
  "key23": "4ee1eXWkBExvuKN1rLufYRJTnN6p9j6VLKCeBMWST7kVyVuoqc5TDefwcpdyxvyRUs8N8Ui8R5hMt4qeXwRE6HNr",
  "key24": "2UJ2Ug5kP1tjvnxF2RMWnWo9eZ2zjDHT5Pz5q2cPu34UWVSgR8dRJp29pjD7qysPXWXqD6KN4affsDDv113PnnZz",
  "key25": "34oLFEWECi89VL88dgxUfkgRoLjeNXRYp1vvvBnUsiUGawWQkAHS29ZpXvzgkJmKmPTqJfYAmz63oaJQZ5YMLs8g",
  "key26": "3k9B3QMS7SoUUQtkr2HUzhPa1Bf45ShL3ShAm3Cbie3vKrY5FZAiHCwX5WRdQUYB5Nf4zsctEs5ftpwHok6PYd6n",
  "key27": "64ZSN2VUoQAd6yHemBY216P55Q6UWkzHkvuqdnPoQZyMdNtjSjU76T2NdGBFv4DoKutvV8dTjEBGPgdaBki3JzJv",
  "key28": "2LfqkcQ2qLJrqhPdwUG7jHEPhdb6njm88EUhZVCA69z9gHyYrLoCQyvE8Akk75fQjekRqWdjD8D4Fw2ye5vJeVWj",
  "key29": "3XAYXBRTSWoF7VzztNkLumwdN2APAZPgsaWtya774DvSSK7KNhFDnfwm7cntJV7UNmZTaFjwkxX1HCZpKLDwcoqN",
  "key30": "2EnWe8F8d5yQtk35YjD1q2oM16Lbx84uV4ZWBCXTFTPE7Qp8NeUBqhbqfyCgcHK4JUQqZn69hvbe6dF4rekyyxG",
  "key31": "L8fmwWgy3MXATEdcbaneoz3ZagUzKcVK1QVHWthHkRJZo93jsGZCNj8we8Enb5HJED44iP9unJFh7Z26D3tJ1E7",
  "key32": "4K9rk4YovKEL6TrPBz112c1Y3wPApc28th3ThVjM1zNS3ZyQcSTRdxYJ7NkgUaqokXzs3YmDATWwNFP1ZdHJR1aX",
  "key33": "59XFXhtmA1iPkM8Q7qXAnRGYnHSUNHASfrspYwtvqjVwAo1NchKDYQ85EZFhZ8kpjZ1NsVxxxFJX4veJgUCTMvbz",
  "key34": "SHvzbSqrd4kVwNKkmocB46AdN7Qb4iPXwSMxd5rMFvU68gFYzBJ5E43wirRgNBMY6uW7G3ve4FMBMM6PWf9s1qY",
  "key35": "3UmVRD4RxTHHUBLsHtD6sjtREry7VkNesQhNavmFs47tLWg3WBPsyfpCzrRcijn5JWri2XVXRMGRaC4JrfeJAijc",
  "key36": "AxJZz9M1HZ3WNuP9WmTYSg51AxawYuKeLrxrr5BGqc11nQ8t2XAjoSqEDxjffpg3ZzWXrCpKYbiRNKJHh6rEMkt",
  "key37": "4yFQ4Zuk8p6JNUQ7ibkttSC6p9VEakyPYLfjkyp754ZKu2GpHQqbgUsf6W5DkpvontSR8PqFSRjShBEmR5qWSeyo",
  "key38": "32fT6wUBBFBBAFVC3vw3UxyeAnJo9rRX4HKij7zTirYXHZ2mBDbsEVXCeA2uJ8PLPG1hVFfPznVAwsZHQqvRnUdz",
  "key39": "3NadcAgJo7rZc3vhzDhF96vZEXT3WfBv6srLZoZ3DXgnt6X66UdZmWL9gt6D4fUmvsNowUawuCVUA9oDMTcotA8T",
  "key40": "2dcC4wtXdBFcQRAQx1rJHA3yvJmJPENtoqx7F4VyiKQRgv5Spbw2QhgF2e8SnC4ErE4iqoMDtAb5PEToxFBwJH51",
  "key41": "2FpSuryUx7M4Dj8NfM5FU5DTmS2oGrPa2oqJujRLFJQkqirqck9Z1h323Lvnise8LHBR2gMgtqb9SvNcv6R2RFn4",
  "key42": "3G2KTtCWzKVmpF6S9CV9Hfzn2X8s469bHgBMdpp4U75AQBbb3XxqYX6fT95c675aGeYNf6sHt4trSxt5WUzP4gfq",
  "key43": "3SY6oqbgq9L6jTLqXZs86ku53nDq4AcqXjfSYCN5nHyRb6E7p2cTrdJ1p5LVsN7ARqmbc3ZX73JXaDYLKHrdBJdx",
  "key44": "3G3DqdtdozmzuKrEyr9e3ogAjDYJqtdpoMdc1GUAAvRbW52in5NjFwM1Bn9XgbqdJEcxbc42cTDAcREjd4EZWvKw",
  "key45": "5VBixs6YhPrS3cRsJ1hhzdEDDZy6cfJRE3dnDyA6xS66gXtvwujip6vDLW7gGZugPgzKivFXRaSdfDhLgnpCAQgt",
  "key46": "3aHwahCBEkqJrLSCcoSATaBmFFf2fenvXGkcfqkVjSj8JsQo5RK7GZh5nNsj3ySDiKXwpzwHLwmpfFuUcTgFJcCa"
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
