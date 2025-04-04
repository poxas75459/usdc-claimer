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
    "3ViD3xp4y5hXQScNK4vU7k8wJrtXcUXXcV6ghwZWsqwy5ByFEcYvzEcaoLgNugpg5SPeHtvE9GmSN8Z2LAW8ibQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNYd7e3duRRqtGnvcGXGyVbGSbzBixe19mAsbAT6izPCwWqVqE71Gk4ANkBHihAPi4Qu6rz9iQUuWwqsQEtpoHN",
  "key1": "25HLyuBjEDX6jDqVrPvWwe3tdP8mvocf4vmhuzv2NAwXv41QM9zzW9287ZPDNAMVzZHU1LR7ZFBZZSGgJJm3Gri3",
  "key2": "3oqNUUWNVgmRc8BZyGp5tpP2sDPaSdWTCn47Gmhs591cvxuoT74FP6veDNXgwxCqjnBqdyDzAypNYGd3Xmcy1d3",
  "key3": "3LfRFMwcpz9ar9Aagmk24baBRyEgP33Uyy3mdn8dW2TfzmKePjdeBsadPfPAFU3b1fAe2Qy7oBD7p4ZrH28oyLVk",
  "key4": "ZYoicGxfUqV53Pd2irXX3wgKoPPezuVyf7QodBPfofcoVWP1VMgDXfd43L3xjvy2fhRCRCUkEmmUhCG9hb6nUvk",
  "key5": "CtsWUjM2eZL8bkjDg4MJU9MCwQwL491UxLExKRGm6CijH5644MzTJkkWEEV4CR5SmtNLbKAjKA1HfgXozxKPc2U",
  "key6": "4KeWeK3xFjwcFHkYHgzqDC3C5sBfgMhpCNFVqv5M6XubK1zimzP8F55U4M3NNm4TA8SkVqV6V4ixLWUXrfi4KxuS",
  "key7": "2G8g4AHmAANPxQj9PBUNnVTL58F6xM3cB6sKGfhddv5keb92ufUGw8iavFsz17nxemq3D8yT7CxmqZfkvq3neZTd",
  "key8": "DvL31adAyThKAyzdXRjDbqAUjsVTwD45f2Ff2GcCqeCrQCSrKvCZZSDDFE5ZhRfF545W5cxS2a4RVEWUe6HuUvZ",
  "key9": "iCKzmLzeXyduhwbwZLndH28zoRsMgSTbf2Yq5ySq2nipGGgwvjuGLCDCtA3Wrn8NPLfPAUYNZqvzf4JhoNrqREr",
  "key10": "u6M8xHAA6P1k1hf9Bvi6CDNGNWresGb7YQBaH6WDGzxYFPHduVW3ezXsJbPH5fA9rKtU9LAqTQijHo33rHat8Dx",
  "key11": "2LmPtDB8XaWPmBuFMDwXrXeqw7nSFWeuuBHrYUEL3cgyJm782okbuu3QjSt8MoPWvUAHseuzDhWRpYsm4gtWBF5w",
  "key12": "4rBGCB6rKZt8X6rwhzkwZpsRdYNYokh8FQvAyfs8EsYJmavKZFSEFdZD56CiQx5KomEkpfNkpHuTai6SPorVdEbf",
  "key13": "3Ev4rMWxmNjfGypszhGqrSzTGmA1c6e9rRA51Je7x9uyhzoh86KZyZiLEjjaa45cwZdid4v3qqRVHrfe6NnH12pU",
  "key14": "4Yp1UC4WKPs3av6WqZHZn6bkVYaVPSXjucDzbn79A4BF79GPccbXueCz7YPUTrEJAEFFk52692e3mYbPVGUXnDvp",
  "key15": "CLXDDk8V8abZvBsA5E1d4pnGN4vkrShyEagLrZLWTqmTHyLPaeJ4YhEhu5GoF9bAH1nZiQSk9VCHhPQAMMo6frG",
  "key16": "2rEMVV3F4A1byfzrGS3eEWZvLNmGUP7G851DketDuCuATQFMvdD4J5kS3P1rHfbaArmZXdVXs8GYp1NciUicF49R",
  "key17": "2kGMWUGGoTwWHyetbgFs3BhnDdbtgm75FGcrZnaqPfQs8xgB3vDoNaCuE4Gdr5qoZFRumiQR7vYMrn1TRF9LT4WP",
  "key18": "5sH6Kce8g1zhJ7Ft7zvTSHRdK3JmbVxqVKDBiDWAJLYsh3ag8g8WixseA6Vr3TgvHKHQkHk8pwHerLcH6dwVPYX6",
  "key19": "D43mjrB6LU71J69dXXvqqdNRDzSte9ZFx44XfY9ArEz8PSsA2oVu5vvS7oNJ1gwtwniDo1G4HtH9BKmJTyx4auS",
  "key20": "2JFG5GXM43vrGrdDkiqFMQN59aj3cgiDEGm139Q5XEumpSfHYzgQeZqBXSW7YNTS1na6KUnYEjPCddgEoZomUfdJ",
  "key21": "3SYiu4tGCdcP7wm9BaJwxezfnKDmZ76gCKPyyZRha93tdcajUYKkYomqWZE9YRJXvJKDBErVERhVVCCjnNmVer9W",
  "key22": "4HFXDtXEbApqeHNBQXuTmCG9ShCDqXHj7oaoS99vQieUT6AB3eiLEqW7zAc6rEa3h3B2JX5fTdNNKHPynAicociV",
  "key23": "3X6E43hYsHKG2SEpPQ8tNzvaHdXACn5rN9rZ2U5VHbbXJGuTm3mPQ96JKsazQxqTmNYXqqSU3GzHdGgvkn5ux9Wm",
  "key24": "5t3zMofJoGYMcwUgVeQiSGYNRgJLacYRn34FWweUK1P1qqxi5rD7nHztrvbaJm4XC35SuLzvbrrC3gu6o354tQr1",
  "key25": "3FNMSHbFUmhLPKKfoNGstYFdQiv4wSVPqzCrbMpMJVigvu5dARqCMgvtYJUgWtnnFn79nYUYoT2x8dQ3kvPfzuq2",
  "key26": "2PSahfL2gR7NnWLWEzA4zSX39tHr9iV7x3f4h3wRuaHXwyE1YFPDLGzjgGcTbXYdp1kcUVD79n3Ab4YRyQ114mmE",
  "key27": "5xjpeVsA4SQhPFM2Weka9u13JxnhykmmfYqh9ULWwoU6qeJhaKJSmKMrSQifRkznossEMEyKAqhuc2S7SKUn4hTe",
  "key28": "wG4ShSimKADbfm3bzrwXw98XRpHtkjSZSRDBczeusGuRAVHN7KCBSVQ3WcNtrSbBkbqrDA4RBQ2Hu4Qa1wZwXue",
  "key29": "4WF6yWZu3qC3dbKR7RbmdXwNQXFAXfeELGoJAg3XyG4aK8Azfp9h3zoaXXS9iEjTFhLHTKBgFLGhk5DnAYipHmR4",
  "key30": "5cJoS7D8pRPzkGrGgPcPZfUU4nUQkVBDhru7Qc8wTjXJgruYVPiGdfe5y1uff21QtamA9fpXMfX4VuSotFbXCwXy",
  "key31": "2JK2BN2NU38LviqKbqGfx5xhvjhaJuFSBGtAMtGk2FJSMb3q5Xg33RSHQpjSVx7PEJKeBWGVyuyrAEuKsxmPCNjY",
  "key32": "jbMxDAJTbeFD5wHKes8vycJYeSqZp8MwaASpnMjx3SWrkocp7Q47DbcfSGrgSDe515ozr2vaxeSPaDiwNJvny6i",
  "key33": "4VvMjs1GhxCha6bpT9rwJVUcUixC2cx7xKBjgADcpGZnKa8q3kvQYAf98dkppjrUfNj4BkQcZyumLV5vYatQK2yS",
  "key34": "3xohvVXbxNKfUmnccSAvjMU6XRJLAboyLdYDK8GAUsxRYvP5BZvDAxPQBobURiuAGQxN7rofeWi3ZozQB9uzCkny",
  "key35": "3YEXem33CpAbMsmfgm6sZq8KSgg6zW3v1oonWAf8oLuixq9FSNwFLCF4tBZriWVk9Y1Dh7ciMNGLPs1VyuTmpCG2",
  "key36": "6xd4fT74NgqmxwkeV5UtwVmA5ELSzH7JMeGNTjXjjCB6AC7PDUjrYYVbKGc2RKiXuwuYcXsT4qhg1eEM5HKubvx",
  "key37": "5QBXkQXQjAzoyQ6JXTbBt1noYRryZPG8XxWFQKtUsVxYEeoTo21pypG92tGnzLShkzMBnYfMxSMe7CDuqatYRZmA",
  "key38": "4Y3KpFCY6VpxyxLcJTBPa5QcJ1xgVQjEQ25KHfNp2a7KrQeN6J9WfpCot6pwijGiX7ZWRdbkacRmVamEapqast2P",
  "key39": "3Dzm3RtmENY7MtMvaVBWKEVbHgJYDhos5PkfnhQhk5PibTHecGPSu1o7gdMJyCCv6JjQNYE4TAK3tpMeUjH15eUw",
  "key40": "2iMefrhUjjpDuLNxwZFhJVakdv7sA3ffvk6RCsZEs7zmtTh7rdQaHS7bsVDRtMerSbjW3L3pwZ4ZdurqpxQv6y93",
  "key41": "5RWeXrccp92edWzzPcCgZcjnKEtuk5itR2S9NdfUm5BHdngQZgQvFSFTTa968gheSyvq88hHLNXLcxuEpswuQMDc",
  "key42": "57KMsvKEsj52uoo8h1zMh46nUMp3WF99YeCnckMco5mY6T96bDJmZFcZoszwnE323dtnsQDbdU9v1To3Eb2bBoPr"
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
