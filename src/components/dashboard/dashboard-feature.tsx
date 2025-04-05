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
    "Gh452ghyrEg9AbJ1B96Ci4us4MRim2hmd7ToSF9ojUF7MtZ89QjBPZrLmk3rp9hD7fxubVCLY5uaT4aGU9yNZ36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fBjz25nhscWnDQ6LzWyUBEdZptarsG6nJtxuye78pNvbzSGvJHhPmGZ15RbhcKbdTeAu3938xzTFovqVK4n2Mi",
  "key1": "HYkVMPudkPed4rnie4L6CsJrmeZt776jUgbD7Ha85PHhSq9uECTBNGy63aruP53frXvRCCEKVi2RUE1Vhufu4Dt",
  "key2": "3yVNC3xZYroKbcYmVYy4bcYKA4kEB1jhq1nXrJ2BEWztvBabWPf9e77VgeUYhuoY5fS3Guab6smLj4XyGPZp2xHc",
  "key3": "3PXqGwQZtcbnuANTqgWJP3G44gqrv97STmTJkCNSRcaLPhBi9WRYSGo7nWYTKxDNrZJrSgitBiY2wLLkPJxy6VjR",
  "key4": "4n84jgwWvMKFCjTvgzuDkpgrufwhzhrpf3Ww16nENwzRULfNsWK1a5Mg5LtxTaT2ypAhbTsNMSDt1raoTEpHLrgR",
  "key5": "5zn4hsSktZzLQJcLE73sGWZsbXuH4pWvtKgjLxpMHHWmkFePDEfMt32n9rfhT4jLoQv2YZHHPxysaTtrwVjmCEfS",
  "key6": "Cw3it3HpZTonmWaJ8DCk8XVbfFmLEh8FAcXAF6i7egiKgHh12ESLcXJRWycFZR7BtZueCB7gDabvQ3yJFLPsBka",
  "key7": "4JpRD4uLNzDSjuGTQgveLrun1TWLrFtKTwmYNZKq3hEdR8QEktisybnGnuTucmY5Yq1eLK6sVFTrSGwVDTkkKYaY",
  "key8": "iYcb6ia6MFYS5ohnxkFQP25RsdKtqPaiYXn6ak3rsa6HK747fsfySdGTeAMgEjb5YscYxaeMfkX8g1w1gpfqRtB",
  "key9": "2pHa2Am916Xqst9Ev3cZ4y3THzQsa8P4WfgHGs1iJTMxYrHoEBkdWZbSVNEmyRtpASJrQC4GJibSXZRU1oGH6eQv",
  "key10": "2YC8Yw7sPxojoMd6L7fBjuws3zyVrRT1q1BBfC65uMH6WUbppJKKxTq7SbbERdkxezQy34gC3vKLePLFd7wQshi3",
  "key11": "2KwrxCKT1vZroRCakECDig9KLWsZN1BtKMJaWSywB8tFKDSPJFjMEmYsAH3wUouPBbPoWR9opW4Rof2VnREM5FDc",
  "key12": "24QhARyaAH2ivYbAEvHEpGbmx2iApnARstELirzEVk25uFH5dpt4W9ttyNgfVSXxN8kHRLCJR37xvBaCJUFmxNw7",
  "key13": "Jto1qk1aTCtHFF4HnVvtH4yXbQujYnjAgRaecprW1qM7CFQjcRpDx8zcRUfRHv5Pr7ZRnxZSf13NtyvEDJCN7xZ",
  "key14": "4Ui5PWNSsAv87CvivnQtDTFL8MNe6YGT7x4ut5PTF82fwNYTFi4hMo21fxdHbrDvEYsqqE2cE3jAJQwTioHScqTa",
  "key15": "4LVKqjUu91fqc4GFUdTJKacUa1Ne7qfpnncSLT46jismet84fB4TFyD2vw9j2Q6vvH1i57Qt6mhPrS73svPLuick",
  "key16": "2KmyZ3sqT3SMQoYkHjqGYdCFsEU6411sC8EVQ18yYd2kLMjG7KPqE2NgkxUQXUvgEgneM31BuoRiPeWdWFKiA6VW",
  "key17": "2DDYmGVCPhGVzUmLhPcGg2st2bWdnwaiZgauPhf2um1zdco98EUwttWgzKtnpm64xMT2kbnXHxevbJBg34QMXT6i",
  "key18": "CzwwiHAuNpz2ffen4yXRrrEuh6QdrkeRWCvFfjQnpVV8pBTx9vzFjsN4kEB3WXbJp4275BtVyApHWT91k2jDekL",
  "key19": "NrKDCxk3XmbYBj8JTbi4M7kWVzPf6PmoqoxxJroc2Fi3aF91kDiaGxdTAdHxzkBoy5wq2CZyFQyTq71HS3s3Jyy",
  "key20": "5vAdrMRLpFk65vVEjEa4QWG5Zy6gzQkfQEZieef2gPbGKWtS7oWkpvNNMVydXCHgseDUxa582gX914SFJtiVaZg1",
  "key21": "5LeY91K15cSRMfVP7cCVQKSmPJPdzJCbRBeGd5QMp7ZocHubjLHMBvP6Uk7jERPGwMk6LMh7YNWRFjcaYTzEXaNp",
  "key22": "TphEhng4xWeYDwLetcRRFrVG6iuuPEUr2Hm9xerXpQN8vPrmJoj12mTPe7udC34xt5NDAqA6T2u3bovdjCRPFQy",
  "key23": "v7nwnT2HuzXpzQVCMiHbaNF3p5pxrAiKRrR6ZPcWZZ1PqaUW6B5E7dUHqpkcopCZuf63JvbXFQFxBUSikgR34yN",
  "key24": "Vp4pxHLCjnu2giHV2Fy2asQN3WYmaxEdr4PLtmznsN2s1FZoxgHEyyoR3fBduFbUHPvw5X4F15vAq5ax736JaDz",
  "key25": "66kpMhhAy57DBGcNbiuFNwhZDdVHxY1194GHbqRgu916VY9VM15kHSJg4Qfi1bjZtaJj7fYDP2TcPn4uJ2n9WFkd",
  "key26": "3hiswxk6WPvWtXAPW3i9dCyDDGWSf87qN6JvGkSednFLynjGjqq1AncaBBSPpwALJedTBWSiyAAhHoZcs3xA6ztm",
  "key27": "4BX4P234q2PQTKRUfNfLLyX836w1wdFCDTffkhgGXqLeYXu22iDDiVUX1mZbMaeaFGMh6GUQyLX4PbohV5uiVXG",
  "key28": "5D45bKc8qJTUudeHkgWKLn4D5Jom1k9vxhdQ3q2fp6H5GbdK8QA3NfhewfDKRLaQB4JFPPhGA8gr2wya9DTKrTJU",
  "key29": "44NXMaKVRNtZE1MvdScRmP9eE8pwCpPojhZDBghUCPaqC6y4hGDXPTtvnuRNzkyiyPWoAmY99SSBF3PoRDtQ5Y3W",
  "key30": "5rt35zniTSieBLkSWjNWNrYHougPi55NMYWc3pKjZgzuySWrFSnYYoZiP69qVVKC2Vrip97BqghduJBRbHevgTcJ",
  "key31": "3wT7aU19UmzQJz2afyJrnKUGTZvxSeZywdLa9P7LJMwX7wR6uJ27Zk4Mv1Vm684er8EqVHY4zF7VnxCA1VhKLcnv",
  "key32": "4wi2EAfRFnYntcs5b7RJQTsr8uah9ach66npZD2FVXFLx2LxDhNijJSzfmpo6VNRhEbpbGsUY3GzXJuqmeWnJVcA",
  "key33": "3TRQ823DpVi96G2Z9cGy1AC5duYwRty7id9Hg7Er2VZ8wvkr2oNheNYQ41PQDKkyF9F3eCSGqpi3Gf6WdYoG6eK",
  "key34": "P1FmrFahXaexvdmLqcm6jKUHVaT722JxLhZTrkSnF5E6pYnLmgMMtTb52y5ub865cuQfZrkPuphMu1KjkT8LU11",
  "key35": "5pKEEHKDtfWaTCcWP26b7ccpogdJiqtSfxYrQWrQE6SHcdojfW1JKC3EafQJo54e3Lbqb4r8SMtzryJzMHgTzGbN",
  "key36": "3x6yWTaUDbs8LWcTaTPur1LQjTK9xmGv4onoBaPGHrhNurBCiF1BbdpxBQ8Hs195bUjkYod4rNoN1ZJzxP9wU8Cs",
  "key37": "31wAipssfz199vDxgwxcZKcXumMW4psefk3dAzf6X2bZ9vSYV6fjEsvsstw4YpHSqJDVaYog5VHf29qgE7SkurLg",
  "key38": "Z7hzPA8KdPnaQ6SyWwHybAcHd9aezZXhqNZAMn6aQcwWGurcFcKN8QvNUv26YV9i1Rwg6Td8XUDXhoZFo8Rgaco",
  "key39": "3rYCinLva5MxwRVWNauF3bBfLqvNmVtTvAtQA9NHSRx37sgCZogT6xbcH2nup3pPgc2UQ4jiEBgYsexPTeVj8YMR",
  "key40": "5Sv77RiLqr9CiS5mC4EKhjb1vZUrRAzJMntVEQnCJQ2QstzEbYFoBi2GChY3C1ejLqyAGLepj8ZPYUvvUX1yF5aJ",
  "key41": "394pdgn1iAbdrE2CPCTVzfeyeFDeDeLY3wUhnYg2K66eTwVtRrrLmEUXYfjXDnNTXnusEJ5SZN43X9tQ7odsQmg3",
  "key42": "4JsiBModKJpG4EnMcmX5ZRxez3TehnVtaV82FQsawHBWgdgb7NXRu5PL9oB4S9LKgvzm9S4qFbEkirLXHMbetxK9",
  "key43": "3UauhMCgGbF53g9cGTMfWnixrKzD9WpVcCPFzEdKYFZWE74WF2VA8HBcxPR3xwbbrSM2zNnYh57cR1gyWRifKBwP",
  "key44": "3psS7RLK2PfSRug3MRwKERQhrTpTAjF1V43cJWaiK6rNNfwqWD7cPEKMWayBUtpf9rHLipVYgL7JWKfsH9Loxhj7",
  "key45": "xPPH9DUeH3hBAECKDYcaJPCr64rEFuno1ZjdYkrYyL4rq8HgbEbsmvNux81JHRBKtZVCNE5P2Bmgyb3mEHpuNWh",
  "key46": "5u8qvmavvGWd28SiJnjWjP5RFy31PfuKyGedvdQSSDSaGdrXtWYv8N2FY7JixYnAmG7KCEftNo9FJsNN1nkD9cjP"
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
