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
    "5Y4NK3eXHxgzKi2d2K2gaq8yio2XtPt1XcCapdJAvtW6x7s8naXmJg3mSrZVz28WD5r6rUqntJJGmP4AgXQtBDCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jTzU3dNo9bisx2UMSg3pJzmacg6gvkA1u9agEeQgkxT3fShqPJtPTdgvKGuXKpyCWUQyAnywDVSdzvgHMPQ9E8W",
  "key1": "3CDnV6PSs9ToabaVUpVC9sgQQWrTMci9X1G2uG8UywWa4wdZ61wkEJwNQ3T4KuDjjnVLxHMNJTYAUF9oijDg2kff",
  "key2": "bRxXdYRYewbJdV1k9CQEeLG15SPDA2JoFF7YSnTZKm884wA5bGDbNuokX779TQT2yHubyNj2LrDnZMPLNkKm6Nb",
  "key3": "3rJkpQtD4VMemCvsm1ebZ2wnU6qTfWyLV8bjw9xuZnes6uR6vtHY2sAg3Qa6x22kLjg8DoPGUu6Ws3FvBAgR5Uhp",
  "key4": "2BiF77kQ6ALdNwNzaHD8BjxzDTkVZNDWc5aKj8dewd1W5Da6XcQSQ26htLhDbP1VUY7Ljus2GPi43HK14mqyG6Gk",
  "key5": "3ga2xh5JFZaGc6VitfVFvu7qi8Htj8M2SuFBs5rr8qMWqpA1Xt4jw3D1WkJ7xJyeUiVhxtPPs4zyQDsybVA2GWbB",
  "key6": "3zXPVDBq1W8APmDSt4URLhXpiQzjwPtmjfVBNc2yvPJ9RjAyvCHwwSWnkDHMr6ywUvc6ejgNjJuA6xahTGrCoWxw",
  "key7": "4uchnG6L39bxdNfWFaQtGtEjGgckX5aPcdkaYu9w318eyw47rEVx9QaQjSjsRro6iYYZK5PTwVRnf4rrhvk7BNMw",
  "key8": "5ZzjMaFt7wegB6zzrB5svdVhqvqyUJpKFatv3jnbuLHv71H3kf9GgpTXkrxrQ76eV9BdWGtfp3xGfdhVbATwr19g",
  "key9": "2pwe5KdasC1NPGoHLnHgdMwRDzoZ9VbcDx61RF4yWK5RxsK6QmmqVjb56ATFUB9AC97f2zfXcYf1JqSZ58yLXgjy",
  "key10": "3m8DNYKjUsyTYm5NcVRGE6cj4QwKZz13LW99hjxXcy8rJMv3Q8RNwUj85e2CFeyt5PoU1TjhPJ5bWYvP89R4Fds9",
  "key11": "3tuKX3t9oMipMWVY4rWHsiyWivxY9RozE2cCqYfKTxLA2m4fuvaz8vY7V7VDvEFAztP9Zuzk8Jj55682JDgsAyNz",
  "key12": "4HFC7w1FBXRQuphJkvAz1HgeNPySxETSoifDfTg7ZnxW1UNqD1snPNk6rDCdVJf9tRQeqg5HuGZHSVUzzXrTijeW",
  "key13": "41gTm8vxs3Wz9xoUa9yhwwrpvpZZL71KG4wM57Wv4DWQtPc4CRtWwXT8JKmsaMwgfiBcxruAmgbpvvD6fhoxR8LY",
  "key14": "2ZGwz6CzS8bMgxAcwbRchJQengcq64uUjb67r5YbRuMbhh9z1FmvT7XmuYiEQmzSCCE5E2jn8AVfj1LH7ergtqXm",
  "key15": "x8D1iF6CCc5YLtYQeaBhkTUdEfenTNM1M48vbq8M6oG5b58rj34HD87zWBQZvgi1ZZkVXWEe6wfB7RMvYZNidhZ",
  "key16": "3qMMBtQj7N5rG2b4hz79x3psEAaJLtoUaWccfj2npeHVdo4PXW7ED6MfoCq7NQ1dANLULDJYW3aYpRdpWPapBr5M",
  "key17": "1X9GttzFYJMkpoBVktJFEg6oj9bZQsW2JwKvERqAef3b1FSfunah2yDPMx294GjP9mq7LNUf2NDYdGLkz5sDGN3",
  "key18": "3DNv4TcGfBn5FSVzABZX6rHmPzvUrvTTSgpd74mHiSiiMqdcHnotNbY9bDXhaJzdekhVLFQTsFJcKGqjnLQuoDmQ",
  "key19": "62yPLF5S9hT1VtKxQhyVZ4koKcRpA4zB9fven821MCVhL5q45FMhqPiUsNbDUiSi8mpeFDGAmvT8X7QnPj13xRvC",
  "key20": "2taogTBCByeKJekn41myHtpCsNjtndCH4MoFWetiTRhpr6fTJwPQEJxcPvM3Ar3eqBA5PVcyw48esgvtM9nPH7G6",
  "key21": "4nG2annUL1ba7cBJwEgrJnsqJ38g58eCbCMCgHwaP5nbEoc31oDmLZK2puXnEnv14p4VkyqTSp9pdc8Rf3NkUtys",
  "key22": "2wJtv1HehQyEbsfGyCQUd9oc84J8r5zQWFRXHwv7J5KUWMakxXPCWEr3Nb9p5pC5HZKczDnDL9nxJ3WDLq8jUMeH",
  "key23": "2GxkRe1VcPDUnw1rCTxjMsb6sEe16hcqiHjV9ow1uKP4pNVYebJxJpet2yW1UcNN2A5UCeqaJXqK2k4g7ozKLBYD",
  "key24": "3UBTAH6esuqD57YDkKcUCewQTMwVBwiE5g6zDMGVwreY2QgURXD1Y3SbdGXkwt9yXVkm6sNRdn6PX56QPWSUetpJ",
  "key25": "4yhBT71mTyaaYtsM5LKipoSmjxgJQnaMAL2vJdm5aTCiMpFBexoXEMKT4pLJSjiB9GfbcVL5vb15swQdn9qkKfUq",
  "key26": "4guZ15LJtjiXgHKv7igyPp4pyGh7ksVrgpJDLsQgmedvdmugwJj2PPUpepULXiveSKgEWJ5VxQXKXoG1Yov3Hjkm",
  "key27": "56LvV4buB3x7ATgeNXvfvdiQBxyiV34xpb5dV4VJBSPw8fv98c7zka1qoceoGAe8zPRLTajLjV7AU92M1trBmk4j",
  "key28": "3C7CJHQBwQQ3Xd3rs1mZwR8tPQnLqFUzk2hKBQJAtjw3ttUhS34fiKjNZ7cCEkBrCWFyUP9QdZPweHNiAt9Z7mJ",
  "key29": "SZ9JH88G43gpCNeMNgGY8LTVdT5tRX13yzH6iK21RBLDaM2h7mGmKR5XK2t2ZkSpGxBpgsyNJ1cG1SywEDS8jkg",
  "key30": "3bh7b9dDuDhnfT7iNekbicBiDnKq4895VE1B93ucCekh3krGM4XgBCcJFEDeX7CqWA93AQ4sBSQXCAP1fWNkyLK4",
  "key31": "3BiTUWCyoHD7eDRRVLRZ825jfaVSAwyH9NiLYeXNgjFVuuNvx6EpWCtVZ3Zt7gsbmj85wp853bVoX9i4fQ5ovD8A"
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
