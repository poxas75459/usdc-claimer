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
    "4fE2RJ3SrQcEAdEw7Lq99c78xpwPT8yhvscmo4n6AYa4ZnFxNXiRuAjJVHp4fTjFmXXNx551SCqGXgTr5m8bFrSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKZg7tfGVCw4ZMRS7bSWQeJ4QBPVBmSZPvHnWXHMNXku59x4C6KrhHD8ZE5rF5MzF4HUa6q72NrTYtPAoWWRFiK",
  "key1": "315G9875vm9usfYMqy7tXbL3EkihgGUyQs35YGCUZ5HHZ837RCcdSRdVaYSEWnjLJrm6vYcEpPUfgQDzhayJeCpH",
  "key2": "4FsoEbxLCHcg3S5RmxVUx2QrYvm1L478YEwQ82zry92zD1apCaXuqoZsx63TXXWZ1PcszwDAujtHWu8Bb5o99aGa",
  "key3": "2nrMiw6ekGPbCSU7GZGPBuxT9LXRi9bABas79jWJeDrcs4f8ThKXVRGB3CA36wwRuXvQiCkne6VXz5rABoRBYGHX",
  "key4": "3Hkh49zgingEdk3i6NYcCsuzzmu8KEQvgp7VSoPSgmL2a8C7LmK8hw7cWKM1cfWFL7qkDutvVT3jS3ZDLfyqJgsi",
  "key5": "3sCf2pQXYZ6gXqzQDFisPdDx1bajX2fmf7LNXrCq25chVdhbVRJfWdrWytijoNiWANMVABg691ES9GvJZZ9QQhih",
  "key6": "g16QTCMmgQJPZirGKWtQ3J6n3y2Ddbnx9pspj6d1LPwAv6a418TSbmKain9Ww2Vw3C4xaBtCzT83DqmakdMzwy6",
  "key7": "23nuGwDs2rqt35Coz3apNBgmKNfxKdw33eYg6bsSNdMLg9FiqFgmJhsrPSCrZmncMictFUjDcaFhZseeZYJoUFv5",
  "key8": "21bqXPTRzyNaGEu7zWPkY459hHeDztrsNvWqsk3fGfuq9LDCPYWqo7DqPZji6bDHKYRzekRSMziBD4eSMQCTKTB7",
  "key9": "62uichpagt72XbYrb2q6B4MTJuYx6CvGEEJoZG399wwbTzVryZ2dGA17ErV8Q3emRnVvSq4HiAwnoAmsEwptYNTU",
  "key10": "z3B2ch9z6Fzn9gAz159yjKbwL8et7p6AVwfH7bEwVvs7C1e9qKLHbig317DCMNgKpJFGsfoQGF89e2G1nFtXCNk",
  "key11": "2KKXDCxg6a2iKWjRnQydijdpRNBEpt6Tk1K98chQuxXw6FAYMyzWzEnTEPy8Q8vAMmzzkinUr1PH5azCMevCaP5n",
  "key12": "4EXLeY6KBQ9g222Ei7CrAh7gCbpkdEsn8SgVb6euj1cKpZPKP69B6593joeRzeY3hZTrJPuZHq1rHkgSsV7AFeHg",
  "key13": "2oDEyoWG49hi6TvbGsEH9y4EdstWgkK9RcFevYGoskM2XAgkMi8rn9mtM15n6ho8e6NcQeektr8zN9JmzPALHv5q",
  "key14": "25hHv4r8c7wyYVTzAxdSB1Swckrm2g6mFENg9pUkKPGvzTjvevBtfsyBd8JZjq22Wb6M2LuHA4rjwQ3aCDFJnYdD",
  "key15": "3CpWweyupQyshveAKVvMqvau8Dd7iA9D4sEnsxP9WruUMH4uG1SsAM5YnPFBYe4oQDE42uEh1vNQxPhgd6jr4588",
  "key16": "5YB2FmeKC5JMXM8xHd286PR1nhFbEsxCyfZDFZvCBzM93fLu47Tn6rgfGtAoGPeeKHzmgXNC7jdjhrs5wqngZuzS",
  "key17": "6Xc1TpQXpZXzaYBE34YQBik6WkT1Mpwc2P7ArL12JC8sTgNkMeiZfmtr4MDGat46w5Pe3UkddtYH5qxLjsnT1wY",
  "key18": "zTPvnzXz5PehBs8bDjBQPyCPD2TRz263mf9azw2Kdsk9Uz686YdXYMiSp75sFWG2tUiw6FgMXxrb3gGZaFtDaM9",
  "key19": "3RdhPMg2BuGmNESVu4kupsT4nPaHDP9MKZYwtpjuWr7hPdjQJ4rUPqegMEHNteYDVgtNjwwZZXCGnmh2a4KqDey7",
  "key20": "3CC8WJLXyhaviMPKax6rF1vcYfoVHEuYcEpfF9jd9nSr5Spc3gwdGKQt19fqVJzdgJpDePrhCv8QzcHXkUQQ53NP",
  "key21": "5tUvCqYwuiHoWrEjNoJ1xj7r6GNjqmWc1rQeUaCwzvo3oB296Lm7XoT25Nh74AToqqyswKmYaym7VcVyFCEzGP93",
  "key22": "5SMe7jFNvfLAXtKyMQjLtJ3s1tCP6ypuBG6KspJyASAW8FhtzEXVdifa4owUn7uyRTYTkKyVerwvVMFULJBEYYmf",
  "key23": "2QwH9yKyaSbvyYjMHJxbaMFcftNX9Z1W4TttMs8t3uf9bpPETBbwtjU8Robpu2E6HZ6Uz9SDLR3vMGgQnnUh4JZ2",
  "key24": "3SvWP9UFJXYCiXW2bnDEU3mqWzK7uJ1Huy9T9wLCrMttRbeGMkP51UTTzjDm3CiyBGhz1xFUmXSDgpVzJ6V8wuhX",
  "key25": "yWUzUAeQCisD6KFfSYxvMZkEV4DCFDvTph292zz34EGk9u4PL3XLvAZ7PA6XQ9r3XuxZwDTGDk3MoBmBgACP6eU",
  "key26": "3qqUhPzW1tyyuV5r6hTjF8oYacYhnhFjBEYjHCeKCbJzsbrMwoKJppby7kvxHPDfKK7NXNMkAtjNSkJsyYUQvL6M",
  "key27": "3EoGGRXMxfKNjam978HNqJ93CRNjL7qFDSvY121VTrsqk73UUHGyYanR6sT3xBjgn4hw2Rd8vT3XjKz55nthEs36"
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
