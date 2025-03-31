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
    "h88813LUHKFQzbTGGN5asqjFaGfCKNYFiiX8hJgzpmmdcL4Sf5iQmctF7gXT2iiWwuG3aUJdk6P3mLUpdnxaGnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cs632BV2BwX6pzwMkfjpmNTQdnX8MjNeocz59W26JWWRwsLfS7mcoKqdiyidfAoLKajR9ATPHZ2PBHXn9NSqc6h",
  "key1": "4VSZFBsNqQkZZa65zQB3CtxK9iV4fvjFXE5wqouCvMCZpGLhHCmdtJoaX7r6ubvGqDMMGBKDfnaRKxbZfPKkYd8a",
  "key2": "2QqzoauQakqNGB3it9h6PLusygZXSCL89KZUAcK3XX51qeUtwsZonTC2wVgx2JJVSTFfiQMFaT8yUcjGvaWtwf3u",
  "key3": "4CgKovW594EKse8inbGyUzgoRkxTw7stnTN4bN7YcMSDNdJoSdBi4GfwWdLx9APGYYkwAsNArv7iPtnK46nQoGMy",
  "key4": "26M8y7Fi6Cxf1h5XLEFGJBqE5rrfM218e6AX7CJjhCKVSCSuU3vSLCz4ZFDyXQBJk31ZqYgui78hfooS2tSax1fE",
  "key5": "21WXs8Y8dWX6D3aZjwSZS4ikKXEqtbSDBVRfz1T9u8hdwPK3gDcHz4XG6X6tXHfhJV5cpKcu4paQ3wPwZSZZUNya",
  "key6": "4UsNWkytB2pQy9HAWk4BNNEH1w35EfGuj2abyMXW2oyFFFZbcuhsEJPUU9rZqHeMxYS9uSg1dvsJFQC5NpCLv7e",
  "key7": "5u2r9TUKT7xXaMZFVyk9Q9toAVopkWv4S4qwLU7uGRXGTFx7NwzH2Dh56as76DPMVuitnrmHjvbETGcwhqSftXKb",
  "key8": "4yJSuAABybUvwkWmBes1Fh2xuuFfg6Cfkx3gJCUnn9EmfZztVvPZj88cueXHYcR797KkZiUEYvryGFpkK4YRYtLu",
  "key9": "4mRMuSrk5a12tVwZkhWS1dZ1sWsYLsvCrhCBDrrvrLBYPGJKsfpMaiF5skH6U2vUb5z4EyK9Z6oanRY2YcRabC2",
  "key10": "8ZQEpbe1LhzYh9XGWLHainDN9Nvmy6g9xJ1zgpstMqE1rcTKkTqAmhbxHtrJQ5ZVugmSkqCRqWKgvqeGw9QVUyB",
  "key11": "5e2scwzCTQ28PZuNuTAPUXFFSUHkte7szoRVUB1bCHEPgYq1czyKUcTxgZd7ykd7aXWXfmHVvguynk88cC8EMJGZ",
  "key12": "kxJe8ig151icWYHcA1zGcvHp9Q4FiSZBTX1b7nwFCXHDXkW1VgcNug3f5GNrXw4qHfid2xS4Su6WcACi3fwuCY2",
  "key13": "33ucNEgXdh2UGfMyCEmwdsQnyQfCgVRqSEH2R4xaPsKPw9StkmZMnuvJahuLouyZ1nBWw9DkAHdx9CQMP4feqYNk",
  "key14": "4QvuzD8pMgvXtaY6WAYfkB5WLj5PRBkKFgaYUsVpo4hpLq1WqTvhcDktKZhVijXbKoBQmweMpFgiq2MCTN3zpxHW",
  "key15": "5GAAJEFWEUCAYeC3EsFekBBihJcd2HPUJMkVxF7Yy75rSDz424ugLfbTmviQ4doLuVVbk3sy9jwDWTpD62AKJraK",
  "key16": "3NNGWkiUHLRhnGyh4NNp8Hwbkz4HhxpLZXmdEbUGVjPjqRa4zDN3YTv6gi7h4M8u1ze25nCi1eCZwj11j6niRd74",
  "key17": "wyHxceVeW8MwFZ8rWEkMZUbCu73zyfRoiSUCmzyv9VWY2CvWFoi427ig2eaHFKXW6yGfSvkDFLgxP1Ah1RRWL8r",
  "key18": "5zY5UrRQREsm1dazEHwyj7oABPn4gAYnSrEkrGEvRYCQj1rB2JTtgapeyRu6wLxKk7nS9KGfBeWqiRWTNio17DFw",
  "key19": "4bT366h2qvhrSyLMYJuBj46jc3Vascqxb6SeNd54W6RgpWr3jpNkcZC8E3W8vKLVzsZhwYXkfwDsxXDEEd9u9x2m",
  "key20": "35eB7SUvb5RXVzQKHXkuhgP1aBMDp2DDCpD1b4J9Zy6qfEGkG8qhj3qpDs8csn7KnM1shPGcMBHTfD9xzHGzSD33",
  "key21": "3un5hzEm5d6kJvjGr5NRjZaCPUvieMphX3fX1bmJtofcPiJ7ptJk2PAqkHaoyFc6ZWPEZADtbvxVYFfzDVjLyRo8",
  "key22": "5SBKXB6m5JPy8MsSBDoW3zseHRDqCX9Skrj6Bdbri7iMS4fFxaWUco39gBDRAVReqZuqL4WGJi5exMu7vVRJz89X",
  "key23": "5GnTh2E19faJB1dBxaZ3fAVAG5D5GfoCKUiNWMuPs4AVK9Kyvc5CvdTc65iXZE1utZaTCtgiCJ3Vgm9ddCCNCqP7",
  "key24": "4eABsvw4yqoc6iBN6kVmP7EWEZRyT2vPjZeKa3LsA7rdgERhCGGm4coZ6QGjnwuBJ9zTvg4eVLzkppRsi95f9Ykw",
  "key25": "5njdq9u3WuyfFwwgkC37GoWKNYtf8jTC3ppf8pbDqLYcNM64GPDcTeCckvWNbRFjAHCAK3UhQVhnKhvtoHVesZdN",
  "key26": "3rYrZ7uNqTqqavGF33MGZsLryTDzdLZ2Cst1xyYoRZaPqat2JieWGANHmBm5tcGd5jdKRKj6RkYNRty8S8UQzXVM",
  "key27": "3d7zZE9kvt4W1w7EYSHkLPtjgxWdcGbGx8kUTzQxuM6ysBRxuMb96Cb6S8TeBBXUGDQPoWAUeEY6eEbg6SjsAghm",
  "key28": "3m8JxNxpkQBzaPDmR6VhwWMjRkbqRRpfFExVb9pN232ixowk3YgXRjSruykqJzMFtahNhLPNmXhyP5nsDGvimxQt",
  "key29": "5ukT63Prc5mEgys7gLnd2m4gfpb5fpDooF9VyhvG4X1E3Rh84pxgtnTMgEdQggWnw6TJZFTLqkUVs2ikJP19KBoW",
  "key30": "XjwnZbsM12AsV7bhBtHJvYMa4Q1qAtm4b2v2SkhStYm1dk1qnQjyCtHL1rtKkLXgZcTADx1bQBhWUcchrHRRiQV",
  "key31": "3fEtvaJL5E9QQ3T49ZSAf54FFeciMnnXcUAUGzdCFhwe11tSL6McxiSiMQMMD1ifUkHZco5kjb3CzitJ5xm3FuVq",
  "key32": "5JGmUfVi7vpvNEsqi7D3gNnhvyMpSNDBwNZiPSArwfXFDU3EFuz2gHZqn92gzEjRYizDKdCW2bkF8PmYLrKz6bd6",
  "key33": "3VhW7UggavUi7J7YrSpM2X8z4sggEa6zqC4NwpH84BvghgzNta3pErbBd4jYrJTR3DBZexuQZQsUsm5jubeKshwk",
  "key34": "gaJ7njVuqMw5KaEQuf3Ay1sArwGwhq1aiibuTNu3y9Ej9ALHKNDDFKMLZrAqFxtxDFxexaNQnHDvGRxuuiWHVCE",
  "key35": "3NxoBAQAs7Q9YEnFCAjVEACBBrS1Kp6CERdMqsq6yKoUo3v6qTocun61FCFGtTRQSdNSdfk6eTaHSF9VFMYoF93W"
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
