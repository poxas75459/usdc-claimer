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
    "32u6EXJvWAAe2qywTCfhN4drun6vsGrEcQHx1E1Mne9cB1wBF5wRHBAjwCxGshAyqDP9mz7woi9CoRtoBQkdXi1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48KLKY1kDEawFN1kY7brjbaEQxSRS11eFHF4Uh5VsFFh78cTJo3mVCw5x53zrp388MkRzNb7tvpzbDnMzUKpLoEm",
  "key1": "3BDDM215W7CrvdT71TQ8ykji4UF5kbjyGzV5fkWbL4hfhUD12etwHXj9aDVKCPvBQn1o1tMoriwVrVXdcqqToMM9",
  "key2": "2La5KRDn92PSHsv6aftBYFj9ycnozD7kc4zaHJdFeiM6xgrgXCCKzwn4Rjw5H3j5aizxQ2ZzvdYTcBAByfh9osGs",
  "key3": "2uXjMfkFQTfXxAJgo4U7B52j7rKSvJsrQtWFVk9Cj7EQBiayrqSRKj8VVVoUnMyPMucudBYmU5SaKoZy2djwyKup",
  "key4": "54qeUVve7eCGHDpkt4bADx4jEo26nY3bttMCznBh4a4fiAHUt1CJ4Q1P8QBZyh6uv9myAkPxjoPcPbXBvr7NpPSu",
  "key5": "TBAFzGf7qPDVbChQb4xXjQULCpFGrv3i9MoGRDtjdGpkDjNMiQLCvbDckorp4XC1yAayFRgJ2YgFJ7JH6zxUC1a",
  "key6": "3kqM1YDWTN2XuDphe3P92TDCaXeM188Ac31hGQNDjJ2Ht9MKzK2CZsNEMvs5iHixBs1bpixYNYuyUci6fEP2TwUo",
  "key7": "5J5vFo9YwthGEq1KmRn1dp8fETo8esoiadWgaQNJKgct4SGc4UjiTCE8R9yyeyNt1euiBra9vsNH1dQ5QY4cDBxE",
  "key8": "55amWSAqNYZgw1fNiPQKhGphvaBNEpuceBFaYG6rowdvEg5GEanZEWv3qckzFFXSAs4Q5GC35GFTYnFRW6rG3vFQ",
  "key9": "3iQab7Gnh2jyWZQKRYG5Cdai2yh8ro8bUxXhvVoirWeyLevQnj4xuQ4jNREPZwvks6Z5UtMVYnB6aRiU17XmTmaY",
  "key10": "4EtUqWvRpBwzkENz4nhePweMMyNvFgFk8GbZ5uDs4qa4CHrCJZowZWCrc615a78CxyX82NAn4qgM9Dtzjpof9Rb3",
  "key11": "5GDZrf2SQ7MR9EHpb4HTppfYbLarZeVPxuACV89j2hUracs3S8Moz72rpby9G9dJbRpPByKu8YSMjC1StepdcksQ",
  "key12": "2PfCPk1F6cpDTQD4Y3zVmxyRobt3XCRsHRWBy85J3Zdk3EroTnw3khYw8vdHX3ghaMaBmanPSmW49pp82Vzs3SKj",
  "key13": "4S22KgSoLrB56dMmj5eEHNQHx9njhpTwZhcrMqSJGkVLemMQzzm8qEj5VdRBGhxYHtXQAjZBytDsxeYrFjxRJP1X",
  "key14": "2k5TYo4TW2qpENygt6LZbawLC9YYAuN4R6yst17WrYft1JhHjYhrmXhcFia4yqfNac13ys4NKwyoz1rmm5qDmjxm",
  "key15": "WgCMF2mA6DVarS1DWPnBFQDWumWZ2cNtpyf2ifUUMxnijcRb76MLquJQ7Aky4CFWZP31YaBwqWyDk8zFRm25rx2",
  "key16": "cVN5tdTqnYF3TwHe1GTmhHoUmRrzgbiz8uqV2y84btFva71H7FU9KJGsDsas12YvB5QuRKmLw5SGWq7DM9MobP1",
  "key17": "N7jasdkaoPNP4NV9hxeMKwPw3K7E9qAgUicbaW7kPQfi1uzj7AgRrroX9obT8ALzdDSckwqFc7APqKZGLtmdz8J",
  "key18": "63NP9bPP7HFpLN9oRYmmhQEq88ZajDstdx5vX15aUNyB7xUc1PF4n3VUphAyJ4EGYWKQYyRAAzZGwDxRMsefj6up",
  "key19": "Ghmmg5drK3ATfW53EYDJTArWoEeGzu8wbphLWYVsmWxNsnAxtacF51oPx4XvCRS1hFDyMmK5g1nAwSPSEkjBhb8",
  "key20": "5az87UySJrb4htv7UCCvQActVa38kvGFWcuZcJnE9uSTzdEcDGYdcv9kK9ZCULtaaUAC1YRpYKL3zfp5LHVG7JHk",
  "key21": "4sz4XZb4KxxnxYH6EkvREvJQNEXvaNtW9i4KmaiCyYqSjsEhUd3Bhr8KNxEdKkc38jpwj9Xcfy9tCJUmV6txgJDT",
  "key22": "31T1dVysCqpTbZDqMSwG4c8w9VyFHBs1PmrQYeEErKb12wHc1GCw2DaTvaTsaDs84PQ6erosNntDS8ZT8iySuqJa",
  "key23": "4auzRQ2zFHE4SV2AGNsVSk1yoTE8MPoDR5onzySei3hEX3ybGtXTcjMq6uZ1scmkp2GcKzo6u6E7WVVpvV1tXWC5",
  "key24": "2sat3D7JKLtUZfyM6UNbeSBZyUZ34hwREgPyie5GvDrZjYvFN6fbo9kxiM7dgN5cpQTGy2ATW5dkbuaWxWxwGGMN",
  "key25": "2HkNgE2hUGnmsB5KxRh7UeKnRSjrBbygewzkvwUFmZEvYHJSprEWik9ocvfmVPnS7y9GTByuKhVgHQ9CuqJQxznz",
  "key26": "g1gXVbLL4F4bQRf8sUSD2Ry8NCQ1rJ7yyGpFnAmXxGXs2JeHiQFmjV4Q6KZbGtvTmedRAZZc4fRTEqUCpcCGeBi",
  "key27": "5DsiAVAqQgiqS4amn9eP3vAPbDdkq2inA6CRh3jV9UhEZnBG7EYAq5fo7mCxq3SAGCcu46JL2URrg9XhdF42VA3S",
  "key28": "2jCTXiyrRopma46chnnhbLBSUf8KzvEvDL7iDmo5ui3wPcB5bqpuPit1tkLcKTHqonRrUaJHqYmE4PecUT5MjGwF",
  "key29": "3Vaz7E4hrwUDVGicKQEkuwZoAkUiH8yXzwBB4amqsTwJk8Gmgv7vVR7DmJAewhiSRnKKL4oeWWDcLDw3Mf137taK",
  "key30": "4c5gz1XfFtdBmcT1XPMaA8EmSuKrDmr4GNVhHVXrkh4w6VTmJhcHmz6BYLnoWacvLQgSDgwKAHG9HbzLWY1jUbox",
  "key31": "62ERE244KsYcPs5BQCMJd83VZAVqpkEpgHsyC7eXDxy3EwPZuVttXXoDwCEj6B59EP5oVXZbZY18LpPjetfULjwu",
  "key32": "3RkfAsQdi1JTMQ34wSkUpWhtRVrLebMQ4Waw42heGSM9Dw3am9onvmSy8n2b6ovAee1qqByKuo4uqqY3mM82z1dx",
  "key33": "3bcuhbn9uXvwYNnYRA91Dna9ch6X44AtpkjpYHBtpKtc8w3yiud5TgTfCd1nPsD5HH2VoQ9YNBws8LWyMNfgEYmu",
  "key34": "2kdeCDGrYcuKH7jvapQqsSiPHCwjip4qjqSKeNJv61wzf71dv8sNTWWzjB3j6fLzJZj9Z7QgNgKuLa5P64wUZUAs",
  "key35": "4fhkyeRdwWFSJH7DQS1yuZy89JNBt7bZwyAND9VAFgQbDZ1S26VRZdSwr55E5vnqgVqZpi8Wtwe4izWqhR7pkaJm",
  "key36": "3SQkQ39hm7v4Rz7qxCHBd6BgjRVW9eUfruPXEELQqwnBJbja2qmRjPUb64f73RGzTofYy94uEDEvFRxKn2zo4mAy",
  "key37": "5JnMMW17PiQeTTUoWUEHtfcj2ELbVrcYehogmSfZouuCDYr5mJwi8xhhF5uzagHSEUXvv5SL6ghZ82yw7mPcBpCj",
  "key38": "5rqpgZJejJcJF5p6yAuf49sGytxGTsKZevfDZoYphNfsw169q2KpEvtYJboXTKjLSMvK9zBx2Yj1mvNLTiEv3CLU",
  "key39": "4JuyAPEmvuMcbAdW2DkFdGG9k6y6a6Vmiy3H7CQKgpwKgvF2nV48hShx6wzT6ht9o23uY4RLBtCcuVYeJ545J6sN"
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
