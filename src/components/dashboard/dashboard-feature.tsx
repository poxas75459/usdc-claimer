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
    "21Ugr2wSMppsuJCXSWQFsf6aPhgSSwBHKtZkw1ToX2Bggdoj5fg71WzJLESovwMppyyywRa1upyknwDNP1GsWBKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xPecr8nnKFZzyVQ73VdbLqw47ecYQuSeXLE9rRsDUL5DbWLPkrAFK8tqhcMqHgEnfdJmqsbChsYcnHE59bPEmf",
  "key1": "2ewnU4xAHXfYPJQy6vH8meHn3iT5y1umobp5UjPk6SKRnYeVPvKigcjq7cP372XfQGTVbrDmhuoTrsmjk59GA48L",
  "key2": "5pi3XJLS7WAk2ny8mPoV6Sh778q3A8sSURt7RHkxtDzrQ5RJDjxE3zfV5FGgaQsFvxQFiT5n3tLJHB8aFcMhuea2",
  "key3": "53chb6GVXCRUD4ZvjpxQJQ62xCCx2BUPKW15nUXguxSqhnSW4D3XpBJEkdUwcWG384i7eEHfNzNKqegYdi1bGgGP",
  "key4": "4XXHQXoxvoPtZrv63GeQQ6fF3YBJK42Gu3AcSCoxQ23b6nzwVw9WsZiNxAp4szw1iNBni8wVpPezQBmegBGAmH7p",
  "key5": "5Gxpid6JwkqEMMPz1o7SNumh4zYhLQu1MCazmdtQnsnBVwpLWyiBb9j4hMkguPkzswPMU7ymHTcLuj8H6FMiRHAm",
  "key6": "4fSkkPAPocCpaM5mcuZfyCAJj39LYnMFQnyqiE3XpBS5QMbot3epuLCsFRyfcJFhc4eaFgLsJMWqntAfTprzshrB",
  "key7": "3whBDPGMYYkiVwA9E9z7mFRyEqrZDfXJRqd7AXFNbb2EnpSHbtz2QgsuA3V7QjF53chjiarx311qeQLc3L9uMiiD",
  "key8": "4UykAHp91ivNjrNxkvtooFoG2aPAjdX5n8VUjsfQccSW324wM1dzS9jYZ78XjMUwf5xKuKZY2oDbwdwXxgZfJkwm",
  "key9": "3oEsEJdkFN2vJxv5ZTqMNEqfoJ827P8AqAsSbkGcei1aSrSpuBR4aGgjFnGSYSjndVkJxE6J1LmPAuLomrF1CAWb",
  "key10": "4ysMcNGAEkYntXdMGJ86b4y4XWNRjaXWMfcz3fwWDojqXxg13AsFXynbDNcvbPesAAdqJguSkv3GQ44FV3ywW4qZ",
  "key11": "2utfVBsEuScTuneNHRmtPT23Wzr8t8f87s6hWaxo7fPD5494Dy72PQuyKZJMLtoLfq64BM4yjqRrYxEi1CuFLVmu",
  "key12": "HTvxcoHwKKMNTJVAKZzhTVS1oTsj74rfGwKtrmZpkpLV1AZLaza7WkvyfUyWwtJfDND1inKWj5g5vECBKLHFKxt",
  "key13": "2ubZMPgvtb1Eef9cgVdGMRKGptgM7hpVtobzG9VwCnfkLtw9eHK23mpVpYwRq7o1tgeojpnnvoarUogVgrtwXsSs",
  "key14": "ADgpw83RjYWwwyXLfeyCUpoUkYKkx57PN2e4HCPjJQTZcGmxopnsG3LxbgrgyJGHtaPeZahbuPi86VGTPPRYJSX",
  "key15": "4ikhjUG9CqxBzx6WjUjtFBLxbEiwCqyZm45t5PU1kz7J4cYwNC5G4hVrm6n5gGAJmSUkYBScvgc1hmKT72qZHub2",
  "key16": "5e2wf3VsVJrJK3qFEWer43X77Vn9tr9b4kkEwUrwVDH7XbaR6zayY3cCFpdTFAHdGMUiUXVhcAv1RNL9ivqXDMYn",
  "key17": "3aMvsYwqZDVfR1ZwNuFQ4JAGuV5pzTbzddR4uzGEWgcYs5veZwyok49A3iK264PWUi1kMRAKH84NxvXCskqMJ3oV",
  "key18": "4XMsJwrP2gLmfNq4fa4VND7ujfUc5oQayyK5tPGNnptQkBchFXCvTqYNVHQusKxmjLwsdMeZkdUXxoppGYAkefcz",
  "key19": "33VZYSt6bTtVyna2gn7Gp7CxUw4CTtLyYDhRjcnfnwbqgqrcyY6U4QDB182EkqHXw7aHWBi1UjGDDK9SHDVh9akM",
  "key20": "47w2bjxBr2CZwYu7Cvm6HmfiHDhdcQV2hLKNaHcANFqwYFAqExr2WRkmMuFzELW4rNjhZfowW6Z3USWQkukFxHF8",
  "key21": "3LCVPJeWPq27nfe7NPYb7a3WLDdznKZwxErLNA1UYDHVDN8AKZpB5q4x2mwnQ7o8smUWgXx8cBE13E14DNCxF9vc",
  "key22": "PWW1yDLTHy6LCYL4aU8LkqzdkzouMoqWTofj5XQuhSF7YZKxkxiXk1nuXrWsLTDtrfBcM9uQBxt9puvhUitDhGF",
  "key23": "5qkumU3wwaFsEBydJfNsZX2HgCxSJhSS51ZTAJNbXsUToUyQjP2Q6XvRkFfUNGyqJhS1XveRJFLSzY55eqERfdhP",
  "key24": "3x2tQ9mdipi66riqgVs7ar8619kktNiRAoJ6ywCLKK3bHQLW5qPP5Bi7PMkf8f9YrkMdSkqwQLPzUsTiZrcwdRPk",
  "key25": "2qVn8GZs1t1WAxZamUNFuxnVCRLHLpGou4D75QDFJFsmLiha8XaHJM3xdpTthiFV8NfuyCfnD1r7Ja7vtiqUi94G",
  "key26": "4P5ykVkPcpTNMrzaotfSgkF5U89Fy3RBcTdV5VxBbu9LFXDhqRJfYRjFByEcGD9rnoAktHVrxUyMHSyh3ipHigv2",
  "key27": "3kXBr5wQC3MvMrEpWUsDdbGF58mLsJTm6DBeGvkRYzU6Uywtd7KmECYUjfJPVtCP6fsYgcEhr9GsfSZxgyQsqYAQ",
  "key28": "2RYaMnyvSMRFB9GguT3vRRwv6qdaD8UEFgjTCocr4ntJQrqqBAyrJqnfpyqRbyGqshYPa26MAmhVEEWmRFVVzYfX",
  "key29": "L5jBF3q5M1UR7E39Yjyc11fzjMUSLQ3n9dJtcyXURjn5txw5m7vRmE92wtP4JfgbyMPv4boR1gi17Pznk2spBeg",
  "key30": "3v4Zh2rGZkkbpW8W2K6ryuikwetbSpDjUEkbQT5kbZ9uinPAZScU4LqRdRDy9hjxeiYapnqcv7aYk2vkSBrd2zPR",
  "key31": "4rao4NM9dwsTzdFUagJ8GUGQuDZ7EMw1P3wqCzzfwgKUTsb6qbV6Bcb1RPr7kT92xi6yJbJjgaRNENbxA6oRYiRL"
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
