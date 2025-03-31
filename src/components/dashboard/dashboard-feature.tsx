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
    "5oqwVum2YYA6wPjRAYW8cTrnruehKeMGf6KEH9YUcemJMVACguFmz8yeLNiJN6cvC3debAfzZEMha5SNYRz9HNtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PMEhkRmEf4ZuE3kKHzuPGbxigpoo15yeRc9BfWTF8qNzYbRED7PRuUzecjsSNPGCp8rMLPMSHcNFUL2C2PKqtZE",
  "key1": "5ckfW3ZZ3GjommjKBmcyLpd7yRsMKYjgLR3VHTYbadL6NhJSHtAdrKBPUJM3e8ZWgbYuDydoUw9A9QmuNeAjm47h",
  "key2": "46vZW9aXfRPHhUGGQQwpewBoV628XJuUfnxxdZD6cLi3Dab1sSQ1i4G8vaf7q5KAszQKZfuaUTVXYszBs2wQDjTJ",
  "key3": "3xWHhSqwdLJvJoTrVR9SfR1qWJHsDvdFivo77qiGJbjdLyNDhabz8BLBW3FNNk2L4yTLjTpaeYTP3mzmNbdRCM3D",
  "key4": "1eDthQwNvbfqTwkD1n6aWiJ5phVPc2N7d4PAhvg4iQJqXgVHwv1CmH31PkxSJV6P112v4JosKS85haUAVvZR519",
  "key5": "2vTMSgEbPK8MSSovYQ9uhPGraMRtEuEhUJGjg462fkCEq5kAmLRfLgy9bRqksYJLRmai2BBiSYnJ3xRaDEga7xp1",
  "key6": "5FiGAdFFw2p8Cp3M51j5f3QcLcHRMwAS4JiSELRGE4AQeUoxPtUSiowkqbaz3h1Vxt5NoZBuQmTuzgUxk2f2hVYR",
  "key7": "2VCzTZGUztZxFYUwyU41STQyaDotxfjackfnXesLAp1hhqFM2nmPUfs5JAhbRPVhMtd73mSEjhF3sLNB1V22dF7m",
  "key8": "2WZPdHrsYfhBEZpGJHYSjg42q1JaftwuQH7ZjcozcqBokfyLp5oPcXsdhfwB7jtQMA6DNyiLZ2VDcNbuwcpAsCMf",
  "key9": "5gQ4VC4hCgxYD95zNZccJbTu3QJAZRihaWFnqcbQkXjMLwbcoyvFx3cFr8kymHkss6im22n7Xfsb1HLuFon6toKk",
  "key10": "jf2aGR4dePW9cAkgmzpHuzfDhP117uGvKvvG2WJZ7VSgqeCP7yAPTbLupHN9gmkdtbKj6eaMzPC9bVzLVHgJTYu",
  "key11": "NV1zN5Ewp5Z2uH3asFoXRE3JzkfGc4732e17PQZdNTi3enokaaUAXoq8tduAGn3PopwNThmitcodptHuDBasDFP",
  "key12": "4nsFxDv1fGryc7nmDWrcvNM7FX2m15Jmb194xL6XVKDAzV6NVjyZ5a2LUS1C3jHkH3mu1eVn5jaw7ExBMVGH1zjK",
  "key13": "3Eb9TvSMRdnNKWGRVBtDJ5tMPMoCURqAfLv4eZUEXp5WtheCcVwTnvicwDt72WPzMGMfWJRZSM3aj9Kr8d8e6nkq",
  "key14": "5NBS1WmCorGRpVL34J4vSfN1zPqKVPZvujV1jd3TsnSFusqstsQupFP8eqKLxhobApajkXp3RJGszczAU2xV5s43",
  "key15": "2nvnrMy3M1VAHWR7BjsVhSfMPiqsn9UJJfw1cfhgYDvYePXtJumznz1XCFouMjfg1VHy85AqQqUNHsKQ3kqgvRFV",
  "key16": "4CtMRNrXJWvPzmAWgkdTJBUDtf28krWeAKefDrpYGLLgaNxHRcbLbtnFUezmChidkFtUYPJU8hX8cgw5VA1SfcbG",
  "key17": "2ec3HCRbHqioKBxhY5Qio21eiU1MsWRJXAozKFCERUj6DtSSWgmqjjrpTQ8HFsheT6VJkTxikjertM54NGkWjYpw",
  "key18": "2Z7aA4UwpKw8g7pqq3nD5Y31GnJ6X2Ngcj3f7VYwPnV8vbFDm6Kc9rv26a1D6SRWGEv8mu9MCUWEN6MrvdYxrq1f",
  "key19": "5yyKxg9mQRdbNqUqwKJnSm5dMxBkZsDiSTf7K54iLXmDNKPHdnk6jAAC46xwbLoktfrH8JJMNa8MYzjnU7VkriYq",
  "key20": "QpsiMUk1KyjwvdKrTQcXhWKE2fNsbA3d56XETdXCayB5WrcH2HHLPUxCjM3p9x1cp1wcxz3gYKW1h4hGU79jaoS",
  "key21": "3Y15zwj9CE2Eay4CHWuPTp12xbCvkkG5CuSmjc6dmc4rJ1tEQsMx8Ed7Jio8Jr38GqUuTdd9RjpHUscdUuR6y84X",
  "key22": "5gqJFL22x8SzQ83aXu1ju3XtMTwnwM4e6Yfb1c7jNFt3AbCnsMtQyfzEgkxdhco9v8xdjaiSpaQa8uFUYqk149ai",
  "key23": "48bBkrZmePqkQ4nkCfpQZSaiRrGW4AwS3owWqFDLK1Phz3GGMaAWBF1A8BFqCEuaWgZkgkmawJF1uFPCf3mmAisC",
  "key24": "55Tk8GSHYse6GnKVmyQ3YHeojNVKeMc3HcFrgVxY4GcVbDwf2hZ1FUcXkQRNhJo5v8pT9rKz4xb1w4Mv37fniUyv",
  "key25": "5ApYDJbm5sxgwJiwTrQQua1wSsXds4gRG3V3Fuff2fp17jUDNxDoMYLJ4gXBehVeFCWHiYxGSwXqjyydqGL4uWDJ",
  "key26": "5pwzoL5BMes2yof9WQNLUtDCL9NuMEiEhtAKwMwyo2phxho9uX8rdLX2y96eCDo82yR4z8dhgaQSKsW2NekWu3jy",
  "key27": "5f56osirK42etaRTSBxRYZQdCPXpVgdJp4DrHduXtZJBEwgSyUYm4vFrCMKBMR2HgWBTkvfkKtDbCUDgEGp6mrf9",
  "key28": "382jDUducwmkH2LzyKe87h5nXa8B4UKYtizmC9RVBmakGDYjz4YLbL1kCAf5P8Uixmkd8EvwCKfD5KzHHZrs9AWB",
  "key29": "5kbSVTyBYACVMyGX27sMaK8qJV5x2MjUWt9aMDrqcoPKMVyPvhY8V9vMmtapquuotN39sLcZRenXcJTzBf8zwoNc",
  "key30": "3wafbkJFpivFSR7pZMTRZ7gmkbm8RyFV3PoQVu18NoX4K8N3Mp3BQeCFcNkntpz3QfaDodoJawkNyeKJ96eayLVv",
  "key31": "3GjHEGACkRcWwUa4onizSwgStdFNaJNSGd2iEA1ZAhHtRxnHopwdFk69dwPwyc74LRn1VC5rAJh73shEjW6wYzAe",
  "key32": "4PKQbFaWzW2BQAk79LQAPm3z84Qz2W3sSFuDWLCczheamDrQhv4C3SJoG9FqBkhic82JVARFFrnsmoZXsdfMQ25c",
  "key33": "2wUWBa6aKKvU4vg4RWWg9LvBHGs27h8DiWoZzw52kH6p9ewDQcgopTZhKkAStmgS2ZT5nR6zGwTEbroySaV6agFo",
  "key34": "57GRWQvYkvy4GF2M2VAy9kSagvwxLqLoDqTGNTvB2EttgLzFZoE1USN3RnzGMa4GcpdvKfGa3vyAtysht6YKq4ek"
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
