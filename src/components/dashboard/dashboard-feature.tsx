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
    "eywN87RZ1hv1uHu9cVerhN8EF6zzjPMvP6vQvLtSmHtCEZTcCMHST7gAa2EhtmVSrEm1QawBMu8z7BEsRDAJYvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1viPpzapzP7ksgBDTN3S1GrfimsSziV942jevmvD83QLfZFnAQJVtPMvBWbpcQKHwiqw9AmEKqYcy84i7hQfWv",
  "key1": "eabw86z95oMjyRyddhRVHGDvpqEYqkiQzg2LDu8RPVYFuzu8Ci2Ue2oUmsqByoj85UHrsGpgVp84VTkCUTvEtUx",
  "key2": "3oE3KjoMJcYLtu51pf84QSp8ucKXtBoYuLRYnBknUy2yGXTDGnRFrtQD5FwLFsNwMWjM3o7SaKuHe82DLK4WtDzy",
  "key3": "65XEkkLfVsKSEFEAsYzc2JcsLi5NRYCku98oJSeswQ1dX2UgaTXjkUANdWXwXWaP4HH1XfvxHd2yaXuR7jME4Q9C",
  "key4": "2hAJzAWChyJrGmKzJVR8QVMPYgUka3TTvKfgj91jv6g7Af95qbrCiECCkwZyDULuTYZZHS8CvbucHFcqAr968jSb",
  "key5": "5h47Zb7Nu6hr9S4pWBiAFLX6YsYLAfE5Kyszn83yR6kPPwM8LPa22pDRVHH5TeL1HJYGQjF2bHr64aBYiYet12W1",
  "key6": "3Q9q988yzxiSewKaLqVxru75tSB4T769YNp7tUQRoW1doDxnFifgSnUvjYzn6cfxitKv1HWUx6msCjWpvvoqjwhu",
  "key7": "4sNyQGk6WuK5hUgrmfgiFx3e456Hx3eTj1DHys5FyVR4cUj34NXGGCvmRHUtuskVfXgF18TojP6HwKEFPYFBMXpU",
  "key8": "JWkWNXxEhNkVUBUtnB2ao8aBLQvy5K7E9cJ8tK494KQWB3dniGYjsqYbNkhRWvZ4qGFdE99TKn12nfZfeEYK7mC",
  "key9": "5uxCqVzWGXM6JarcavrPqg1aiPKcNcV69C7M7Tgnn8AbbmQu8ZhYcFLsuscuoxg4X3aGdebAzXNbh51zxPsYmFSv",
  "key10": "5DLEQdPp67V6zGFWvNS7bUwamaBwpDovXBxbzNxAFij2RkT2KUcRzPLi4LwceVJpoznCvnL5fR7yEDbyK7fv9Zeq",
  "key11": "3Gx4iK7CpF8pP2QC1PUHffwsJpyz9GoEnG3WP2E8NQiX94kRnSjjTDWFoheKAYByAaVxx9H3p6gFbUTEARqKPkr",
  "key12": "5CfinVpHSmea8VYEoKeLSRYveP4XSoqhwj6GzGXvv96JmbsVf98zAftoFqNLXrmSd5KSZPavFZeKmiKFHNfPmPA2",
  "key13": "5ZSQgj914Ma5PNvohMBFuumnNV3HoQn8WQJ5dxtaen3VXBfik7EyoYwwi3UGYosLtMgXAThwR1RooZKcfHwSotvy",
  "key14": "2Zx5LQ97MX1Ei9C6oBsdqe8HK7ra91PpeRjdYKTJjz5WSsjqHbSxMxFRviZDAp7VHfjwLbdeUJD6vKeC755H9WzV",
  "key15": "2LHbcur49AWKmh1fU2mHZxCEa7UKmxMRBTnwVCqthNNov5vZfFmGBjWB6eXU1Xm8j37YrhizNh9NYZNEkHntMFfi",
  "key16": "5EBbsBT17F2wtkzJoghHNWvu5LjWrA6tyRg6d6VV5jXWRNfbKBkDbw1VvoRio5bYqZonWkBeMv3kdiUSabRorh1W",
  "key17": "35YhB1UCtsWCVHP6fQxRNXSYkfNMDeRtSrR7nw5eegCK6Hr5hz2vYFW36YpZ6rMVUxD1MwCgaiGckRDZTa2FvyPH",
  "key18": "Ba87jWY2NGr1MdZk2EMb9QcSjqhrVfZ3xWQYS4zaiaseE5iN6jhLE3ahzZt4cVVvPpoxmRdihGXqNYsaNu5DAkv",
  "key19": "3XCt6qU3XRphqBHUXtW8NxWPvYQj1pVNPTRqtVGtfNUzExy3p2ehEyZKkCtVUHQFLmzD8tpDEpEzNaqEjhjW7fgo",
  "key20": "SoCPGuyqeQCpBk3g34YGjjijKv95SRyPmAWVApXftX6aUaXVXUtUNjYApZ46HJeTJDCEzo8iJoHrD28P6LsHH4A",
  "key21": "4hDC3UjNgKZFyFCWSRGV9DpCwapiuPve7v8sASRKomLX3pkBn5kcQ5ea2ZkYut8awhKUYP6WVsMkMaaaN7qpEMhQ",
  "key22": "25WhYYxtFeyZc8BJ4RftKgeb189Csp8WKbujkWRGhuAgQ5qBMwFm76GwgbYqwGQxumxUnw3JBy5D7xpDitVEgvE9",
  "key23": "4Etg6aBf5v2r3nbZJ3SGfdSKAJVeXjSPfwWsNUCaoMABaNNaPY3ahvNRjA63Nm6SxEdptfsVTUsEainxH5na3Mnr",
  "key24": "232Rvv9twBZMvmH39TVGTEWuSusBJwPXkXArYj9SxtMGqH2yN4AoA6GeHhVjLeLYHsR5hDjv9pgx12aP3BryLubf",
  "key25": "3JPqAj9WD2YMoSQSR2WADTUN784xXtn3uRygXbChKqBRuJhSyJASL9waV12sjwZz86s1axaCV7NQMKiKv1YsprUK",
  "key26": "oUaGXzXpo9hTEzMQ4mMRh99GtWBzaQm8bNh7vVZDaLB8dzWESuundBGExAoh2snabvPycjveksTPy5SnQwX5uoB",
  "key27": "RYTaMDsvfVg5SoHxFJ6fgCKWJUEiHbpjotuzU2RZbogTeXKs2F6uBxufZ3sHMFY5JekcRGXrQ6gyD1351ULJRUv",
  "key28": "2W4wPjU5YPrpPC9T3tQ9BPKn8LirDDmhvKDWYvvgEssQpfDx3nKvSzptwQhBdCnGYoLPqcaxyN7jTZEvSrTHJAWG"
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
