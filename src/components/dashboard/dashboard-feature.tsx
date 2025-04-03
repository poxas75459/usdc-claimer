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
    "596FBT3yiAG7YXGBaJV6ZrJ5zxF3Zx9orFreG8wKPu6Lbg2xU8u3nbdN9EwKXeTsQudUg5euFHAhDvFnmcFU1zAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63foxACnHmPKTrKadSeh5NBrrf661zPXiuW16opKzCnrdQvbbPxePxhSgPUhUpJZ4PJ6Zq2RfBz6gdTeJ2PukG4P",
  "key1": "3tTLDrktP8Qizy11WdguQ2TAGucczxB3LRPKCEJMKBJ7jgjUayT2JGF5wdiyDVtgcb7TBk86pdUtrcHP7cmSupxy",
  "key2": "3ewhwJmgMxyMypF5vXKrA7u3aKJ9bLyjC5bvWVwy3nFDUeadet2ptLiYeVEY3SrAGnfzGoe2XPXGs379dZHLnC5S",
  "key3": "38DFiD9EXMTGixgGJjqEzekHi85vKBRJuW4WvHTi8htmi4pH6F51W3Sj24e4bn1teDRgyaBBVCmfmgk2pm1oPMty",
  "key4": "57Tve4BX1uLZeLTW8ZuunjcyPGbpDETTTDy42ETmkiLk9ZfispCmKczJaKazytCRXGRtJsWAxaF6r6sQDk9677Rk",
  "key5": "3RwehuTU32w7mLWsaKUxozFZnTKZ9i1zQ2MV2mVnvo5UBEjwWCQs9pgB7wsEznJ85zErvFz29wyWu2kjn7za3dJS",
  "key6": "42UhwDMFX1xxCtJhPyZDR5y9te5jpGQtiaPguziYrJPEdqmLYXjRFpHhUnQDfnxoZnazzphifv75Jg4pN18UaWZC",
  "key7": "3NzPpwyYjEtgg7vmHEifMfC3RySFdJPJHhKx8rt3soYXcmxX2aRFZkL7W2nPq3xfeYpQ5Z6BwG2Vu44My5NQD41C",
  "key8": "5wMZPzjdLQ7iNVo2aruJPGoHX7da2aJhnWRuZ9bZaYBfnPT8hqLei523PwNudHBXa3M43BABuCBss7XESyJUYPy9",
  "key9": "5FHt6vNbBbSLR6sQHXym6R4gYAUJLNuS38B7SoZ8HbcjEegcwfmD43aptMbnwXmwWSfadTcKFV2J94bEWGLLRL1z",
  "key10": "UCKB1hctqeKDrph7b7QDZZ9MnKmmWiFMpJWRTQBrQJg2s8dpgAR5HCf21uB4HgrEMbBJdM2kPaGfEq4nw16HnRe",
  "key11": "34xTJj3mAysJqscZ7TNCvUTXPVFUPkmEJzGoMKWLKngBGZvfp7aCaRvtEzSjdmbZg2vrrTtVUqARHd3u1G7pFEHQ",
  "key12": "jZba77GtBA4dbWUKuti8K7WDvLJpbAnUxWogVsK4ir62K2xi1PPcpQ3FaF688i8d6cwEeDYPAmc62RfqY8jdu5r",
  "key13": "4ncXLCZkNx2qny135CEC8kxgyZ1XrndFAWdvs9miNVaTrYdpUzTcT5uV72uWT2BoGzmGd9dpvjEFp5zwgFbZ4x7u",
  "key14": "5G9rhAziZVB73XySocCVBt9oi1bSBrRJtUo4TjbawFXTVQPyRtCa6hGMjhrwjyq3ULx5NTnECw4nc23ojpeUS267",
  "key15": "2YYDCXX5tfVEojQeHqQpQWKwdPLULXWXRzpCtNp3trALNzteYnF5aR2by4adgRqCQtzxc6LtDiJ7qPZ2R8QDj6Jq",
  "key16": "5GZhefmwRi7k7rPRpWzHR8AzhkHVDztXs4bTzDjv4bJ8vDnGbLQAmSdBX3pDTWkXs18PxX7h17vcGy5HfJp3LCPm",
  "key17": "ie47BvMxByh42tZ6H2xe5iLvvFnKgL2xCma7sVcVShVHjs4oJtW7vPVSMVwrP7sgtYErTjS9bV2xjnbjbNw6w1r",
  "key18": "2MwQtsAKbZ6UmuR4mpzr1qBcHBDioR5dbpw11uZZaQ2hxkNSu1Mm2gQuZjghZFb7vXybzcgTn8KmxnhDWyiJ383S",
  "key19": "3Lxmv8dH6a5arxDEovhj2RRv9L7h4b721eJb3nh2TsZVKVkTEn3bCgV1U5b4iqvdoWbMeie82tGJTT3rfLvguU4C",
  "key20": "k6T5Jn23sqt39EDB12ji7qUK2hPZKGVWme4bdiXDNANYq3mmqDt3DUNvnZm42zyewJWYFSjot4BBncKCSVdh1nr",
  "key21": "5gmTn8S3gRpaTZSKSrXzdXshikLUP43sCk7JHpU7tGkACAnz2caKLie6KGPqLLPepP3QLf4V1UdhxUdpxwdF36Jx",
  "key22": "3UQfw2vVZEySQW9LhHGUM9FwRDsQstP18EEXHyUCvd7WaCTTHDUAnsbcYZATgyJkEL2ebuqaGLRpo85QNpxqyd3M",
  "key23": "WdUG7mDGWQXk3QJ36x7HquZbTbweWbm4Dgwg4ff8aHTSNTJsXTfYS2P3ryyUGpofGDZJtcLNuN8o2iUbn7uhi67",
  "key24": "2aL1Xa4nyCGy2G1QA5xPGGNoXq3QHXziXa1fc5vH2tCpgUQXCEQbcZSDRfVTNKZVKnmL9vTgLxJAkXKusCQe4kfo",
  "key25": "ByFqTDPyUZg9wRSrMeq6XDMcedZYvsVP2Sf8fjwhbFks4R6v3iXSfdo52Lyb6FqMB4b7dydoridurpSxWx1baQy",
  "key26": "2ZmbDepfc35fMZYuDtHZoi3CCKLHuQKn2d7yT7Cn5RVLRMRZ1UBTnnsE55WjQD5qunjDAdRqy5fpii4YfepA3ip1",
  "key27": "3QhqUetjx4MhS9yvd2XdGXvNqsa778kRDfhcAZawsMtwojLBvxRPjcrrTkxfYRWN7p2AgpCLfG3BZsFndoovEDcj",
  "key28": "4VoL1yKPmZf1tV2FuGEZ7RJKgHUKPKgdCfTaQCPArK38seqQTg6WnKefsXfh2hTAXeD13rFg1x36c9p2n7VWH2gi",
  "key29": "5jkeqNSF7rQqNYQR8Sn35NESyLzxoXZK671yNcBpEs4QqWyuQ2BtDmfCmctBgVSP2yX73JcHQaW8CmLDz4ora1Hm",
  "key30": "PV7ViuKWqPJULrELgV85rEf6LP7TBbfWT8fGPvKYzA83qJiR14JwJukjyQrpSuTyzF4u3dAivofnsQGVRQfypqx",
  "key31": "Y83rHuWdjmRj1j5smoYu2nLTbvw6fu6Gn7eJKdRqZH8MoxNXCxVzNF9yovqzGgkhhGaWwZ3cvgWX4Pbdq9pCRvQ",
  "key32": "4oN7outdfwLmPpsVHaqCRBPVWLCa2bFe7TN3oXq8a1ey9KCv5goMbtcnE5sucnouJUGZgxDVQWyKKUDx6zQdfNCW",
  "key33": "4oD6CNyN6r7ssLCWiBfq8DQbeXmf5jg176F9cWNZEKZAoPJA7yUCqFLXc9SezopQj7qFdUxYTWWoLJF9LqH4ecbk"
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
