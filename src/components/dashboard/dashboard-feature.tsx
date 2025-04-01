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
    "5kSiqWjRky4kLpCX6nRxMiS4vFKUBeppQkgFpC815FLbhwRAUzwFf9MuB2KnEMbeZka2xuTBsDcpHU8sG18NPpS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdzjSzNUg5SBVxgrVdjbfHeWjH57fYGxWeEmvbR7uuvdMHSDJ7tNuhvehyrEkFM7xaSL3YFWrkpS3Scco2Qigs6",
  "key1": "66juTUMGwdmFJ5QYWsiPTo5jfkvA4nFGrKUc9JHqNGwAqbHjFgQQ31Eu3s923drvwDSX33UxVcfgRaTCeJWdQAMs",
  "key2": "AK9eCkPFMByYmW3957NPXHCUtPsKwZrjKpp5s1A2Eb9AoqAEnW7bXBj6md2jhRCu5DpYxSTxt5rQPXXg8jKvina",
  "key3": "4EFXLyoRo771unbaFzGTcJVdegGuXPTwfhzY4Ap4V8yaxAHPD8NcjdqDBkcGiU9qTxXDrhDJsqFmLsjbmNfyxTLZ",
  "key4": "t2YZBqATutkxGqtQ3brVJoEPeZ1v78t8ZxJ4hCFDqV6LGs5skYYQq5v6tfdk526aUpdvKUEH8tpVSDyYKY5aZZQ",
  "key5": "5nVLXDL2ZZeTVzAGAKCSdVBcFVmX33TFZtEENnrjwnAoLABZpzFYEcXeKfHNNJxLNzZJwtBdCHK47b7Rf8pnndUs",
  "key6": "mh5JhSJHxvRJsp3DhbDmq5s55NpPtYn5f8G7sn59cE46mBVADGVvow3ugX9oFHdV2assrLANt3YzCEhTSAuWKT5",
  "key7": "3ZqdJsNhgREWuvnS9ySuv2ZTDPAJCH7ruXymtURYBqr3tyz6RHTKwXqvJq2etv1JkD7fhgwXFN8ceYNzQsayffpD",
  "key8": "3L8aoNSspsWzXksMRpz2fUQP5MD6TvXjSKjEbF4fGfZ1mTLdf6vwiVSEApsZ5ZUYwDUJp1bAQWbBybH8umHZD9ac",
  "key9": "2WyJZvmP2BUWw2xGp3pdK2QQsUgaGubqoFfunWepGTV88buBv5Km1ZJDh2PFV9USUobkTZLRYzaRgYTTmiXSoao2",
  "key10": "3Qu7Lv3Vy8nK7omkVWpwhmJ4RvaYbS4p2j3xHDwwfL8qcy2td5UfuW38EHkrcmF4m2SMvaePKhQg8j5sQ7H4TgUk",
  "key11": "56PLz5cKvkSi1bKijkyfBpiduncjbXdG9UJnWqaG8cUkhSAjwsZAaE3bYomBSb8BYHfPMciif8bnGrP1Qf7Mk6zo",
  "key12": "ytgPwBnvac35HXzG5TbzBhV52tq2kCa7mimSm9zjMwRZX7HEPGsxVhvMM35W8GJq9CzFVNMfwuee8t9czqrgMFe",
  "key13": "2KoHYEoukHw72CsP8UT8xXUfMwWtRm986VqGiABdMMm1C9Qsj4zAMNnQJrjw6uGNNMcFH9TBGjRxiDGMaN6SVfCj",
  "key14": "4Scgtby42e6z1pVh4qVFXT17s8Mb4bSpzt6sTCCBEDD3Qm8Q1QK6TWyAcftNDTGn1M8FNdUoU7a8MoHA21NePqdL",
  "key15": "4yeekHkK751y32AnnyiqCdKheSzanKM9ssgjiz7DWs6xwnz9w5W68DCJVbvJsjq6PUVSF5owcpw34WBy7PzwUCKU",
  "key16": "5k9RwmeK7ef5yGzkJgvqcZXyKRpPE1bbD9dSLVH63KSU4TbXNS5iauaKd2iqbX7HMQtDyLfaBWABcn31ZQxfiJ2b",
  "key17": "3dJKimxLvifaoq2MxNgFk1NGSzK4BTZVLUFpyqmRs6L2NmTw8bd1QF85D3V9ezWapvrzfTff6f8Qfsir6ESYNPhf",
  "key18": "5vXnvT1uppmJxyGaPaeTKHU9PXGryXPYyKc8NWUk3gQDoprGhUX88ykTYPpA1fbUqCHj4RfnKzDiUxsT4EoEkg3N",
  "key19": "5daSCA4UnXoq1CVwfzLYmqsyVbVCSdgfQKFnnYgkeYFRP1oS3reE5NVWPgfXue8eCqtjqMpEyhVbiAin1fPPJxvM",
  "key20": "2iVj9hEkZegCv2JagbxvqsHLbu9D64rKdxfw2WkZrSrgypZnviayn6ju7kXoPAXFtDDGQb3etHtpafNFTTbWpNzb",
  "key21": "dSqYqGsW9drR2MAi7Xq3Kqmm1TvAktJuTus43gfNBTk9UbjQSXd4rmFjeD1cR67paS8XoLwttQXdNwFsnvyQXUK",
  "key22": "4k24BbFdFTENXi5CgjAEFabgA9p7cgGLG34RMNa6YfShEw4DaHr7teKEB2NjZPTqh3XGVbeJD9FM4vYK6LF4SXCz",
  "key23": "58wqpLbTxq9275Bh2aqnbZVFqNMxKXabgUkacRAKWYCG7LeDBYqppB6jeCz3i38js3j9EdzCHmoaFvBk7qZvi9hU",
  "key24": "2PC12NaaaaCYaN8DHomQZWAMFEjBBsoy4Rm3MCU3jFK9LaHEYMQARx2tmoRBN3Bgbr7oSGWBHYASGGXJTbZjKCG1",
  "key25": "yH5hUokzx4gtk24AzABnirEE8onskcBiZFpBfM8oYuC389evggkk4xD4wW4UUb3nQoJrc7tCjWFMFWsSF8dZyCz",
  "key26": "oyEJSmfxPMwSv1tCihXKxH4YUr3piE9v3YMJjge35YGuyufQMS2Fyc3kqiqwZspyu2zHqH8DLeqHKENA44NLx72",
  "key27": "AmgW4nSXuKqrpXdnswWJQYQ7ErZsP9VxDryjtEJxm46RLDuXzAbLevjzSpCrLkyCU7rYp2SXq44SKH5HgiBwf9V",
  "key28": "5kK9R9KYsvcNvUpeeBMnABAm15o3hqGvsFY5eYop3hjo2kj5jyC4FUTkMrEESFPt3q1CrCjKYEYvEB3W2ah2Jsed",
  "key29": "44vMBGXJ9AmZW1oXLjkz4DELw3sW7QnqkykENSWRyofaoue5d6pw9GvoPFXFXkDWa6PCZSZd5EkqopPiBsoaSgt",
  "key30": "3tz7STwAC7NktNHjMpb5n5aaKp3MhTZcoFiWdRTxhipyDHxF5nX7XUbdPq3JPmdzvAyjDuTpkU7M7mesFgYNp91k",
  "key31": "6FkHUt6oNd2xQ7xjkhomonkDo2Wvs31ioa4zNqzyrvocThyAkdx2ziAXJHjTG1Zv3g8VFjm5XEmgiWVdaGbDB4n",
  "key32": "4sxHXN5vHn55dbRhXS4rN5xMQSsz6Ar62oQyXdWdQJh8MHP9WTGZDa5ZzCFxapxmHeg9ZgUGtbLVDmjjxMcb5tZc",
  "key33": "67eZsPog6rLfhkAXMB5Rouxa2sWvzFkxMPT8cfzjMPsFRbp8PdiE1Kn9ZjsT4YzAvGpT8tJyTrrNPJoGGHkpqsUn",
  "key34": "3zoxSZts34sCy6Zg125SeriVQJStEghGeFJ2AWvG7bEmpLomje3bLh8KxSK8aNMo11SQbQveapFDPJnF67KmuWfu",
  "key35": "5awBHFd4dVuPmZf4SUewnRNQNQZa2WgDukfMcA6BUhRsWu4u1Y5ZudF4dr69kYxeuxznvWeTU18hYktvCQNcETHS",
  "key36": "3X7bGN2egy7JH63wSJkEu5cKYYqkoiYTgf4J9ra7vWT5X1aQWgWmCgr3fqyAStMHTdeMiV7CEd2pg1JuHoNcgDmr",
  "key37": "2A5E5hG3g3hPWFgqd11jSEKEbTKXRLqyyMEfTSbLG8hbRq8yDvws5BndE7LjDnDLSP2f5PXkTwkXJidc3ccZAR7S",
  "key38": "2TYyyCKd3nTXz93TuufRD4AVf5FEceRwhRS1agFrFvUWueEsmzNytsTeTScg1UfDpfwAHSvFzs5ckjjknR6V6TVA",
  "key39": "3PxuuG4Jk5EUX2kvXAeLv4rB3ndavc74uoFkLoPdpivHnH9RZ4qR9fNnsoH5DJymh7ahVfHr4HecjD8ipAEWwguF",
  "key40": "5EPiqiK6ar2qrsuVnxtB42ouNbaMTXbTKv4vHToagKZUsh1u8uJZgVRwjFZhXuGDk3zzuTD1c6K98yqw23JF6EU5",
  "key41": "2fDprggSi3Yymt1wakq1ghL39He4DhHd1WL1mqB8DvRG5FtgW7h5sw3odPQu3wsGN2L18PGUdQHVfUSaB2ALkJXZ",
  "key42": "3XP4RHApthzQyok2Vxj5adNNKUazfNYoJF31bFxHvZXpspQ25NefgCjtsVDFf6uqaGESngc9m5tUFnsmiB1wSvWw",
  "key43": "2R1dSMJnejoby6b4VCvpWsRhHr92CYGwPyyeVRMggU9oWHtbLLQkCFeBKfZ2LjJpPENRzhuNxDfE9wwXWRpDn7vr",
  "key44": "4iLKrTEBB1vx1BATEHYSW5g1nPioavLuLYZuLwW2vGRpQvrgxKzcJySiaUxBaodcAGGwoU37eN91WaE61Q1yvM3W",
  "key45": "3S3RqLCHeyJXM5FLYwHecZeB2hqANa74xGD56Fj7xKUjnFgHVmCWkC1Vi6Gd5yPjpeEBYoGnoAKCKdLMHk9w94Mz",
  "key46": "3wCeQHEyNZhm8SSxraFF79soae8rhKHGpGEvkyMYBJqMzyZyPvNUuTasSEWD1dXghxzZRfb4cFaMg5tG54f6ELGg",
  "key47": "4aHxpJG9H5vHyMmjm8LvXvqAy92MXND3RRjbKn7aXqAqf5NGHT3xejuLKnQhMzfHtNHTneu9b6fxYdHkeHCxMiuX",
  "key48": "2yie9MfmASK3CrUYAtDRvPnN98fSMVbj32vgddat25bnFq6MmpPbe72hCCDNWutcaL7eRe9kttxwVw6dF8UuXtz3",
  "key49": "42xPGbp1aLG22arY4oxZKXGTsfbppxLewVVANKWREaBVgQLt9NknAs8dQ5x9xwU2dyX8Rkc9t3jCPwT6ayi9L6uK"
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
