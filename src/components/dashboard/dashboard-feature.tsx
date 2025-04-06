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
    "5uNYYB458qXQc12SBZpx5faNoQuzT124LeFtvSuaW5pE5kw1k1ptko5HExbSh8GNCQJPikGoMGLCbi4htN7j7ibw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8LQbUrKheZWdJDLwEcgUHJgU12Y1GHb4VE8vjmuzMkLgmLZswLzuzXGPLGo68sYDmLiFgnJP7G2MKs7da5roNf",
  "key1": "GoPrRVPwCWYKEqku9EDex3VoYKkr7cZLnUZvWFe7xSxaCByLbFpT7reBTfu4z35ep7TbSsdmZqXMQKhy4Eut7ze",
  "key2": "3b5Ndx77nVKAP9XLv8zzUHyFtAfuhPTp8Exw1Uj8ucLFVtfcdcpo4YqJ7poMCyFh3nByfA9Q5AaYREaAYFTHjRHd",
  "key3": "NdvYddUqXc94haa17ypTocLxQ5jSv3qALUVEzBZ2cEivmoX3W8GEvG74XkyUHzS28kUNiPJk3dNyTfLUDN6p8wq",
  "key4": "rNvrwrJBZ1DtPQh4pcG7dxX2SkBPiyPhVAWaNDNFXnwv4i6qtZiJtUz1RsPjRdUmeNVvdsb6n8FsoU7dyYwCkuv",
  "key5": "3EVyUqjsZcVCoPeHtfV7nRBhYsdr9goMKwZWEZBy3KdtmFKLdiifht5QhmNbtuTdpWNNHdHfx1zzJsYVC1Ec6LW2",
  "key6": "2ceqmS9y7v3J3494QZJ1gGaxoDFhsJThnrjuE95eFB9BoCrru3DZDJnspuRwoH4ZHNdbAgnPLdwhu2MBsmXaKppV",
  "key7": "2U3mK23isyHa3YzHEPPAqWHHwc18J5CqKwtyVNveof6tkXBmDvGFjtKPT8iFAm1L3hQkYur9LTjH8VxScv85okCN",
  "key8": "626PFbMCdRfHea2xjWpj8LxKcS8FgRXU5c39kbQPRrKjyzCTH2UKJPPAZB5k61a9iB13AM2LAj4grPXgCKdqYgKa",
  "key9": "Qui8c98F4hncAHbNXb1f1b3YgosXxrbYAFZBxkSUVe745p12ksxVTp3iY5pMjvFpvw22JTaA4wjZKuDYM6N5hUw",
  "key10": "3vPQ5jKRUWV55roW9umLWHbFzVtJqNiSR3pfDUk8oBAKhyUCGzoorRZiNnCLThD4AnxKecxGSjPfYrz25SmnQKtp",
  "key11": "4d2jKsnW5hVM1FqeQSZ7Jr6QH7u8krGGvCxDePoTdk316VEmuRWwhRzEZ2hTDMxbKarqvCaGwvJMJRSEVCnoFozj",
  "key12": "5LkEXKA6MczsC4Cpnhbypsdm9NgEaNLwvLVgSxWihXEeLDwthEFNTQUTYMLMvEjz63dsDMUtj1SxCU347RPikyG4",
  "key13": "4RA2b8WEAapoMadjfEHGZCgnChkxWYjYJwZbjTwRopDDpm6mTEgp7XLGGkHTfkH7ZkQKGNdPnGfM2QtekGYceSAz",
  "key14": "3PYi8GgGjD4YoF4ZDqGxoZB6eofwn1Egxi4kMdsHn8CCY3gMNUWL7TGEfhA3Cgyn4whmsjbTbPpMbMAEXGCXkwsL",
  "key15": "2tGcLe6zAX28BCHQgW5mh98Fm9zMyBybFrTVD9YwbiACVXpXTM7VoVspMwpYynKtMuR2pxgcGCQqdZy4PzUGcf7q",
  "key16": "3Z7qsPuWCpkCyH75n4YpbiDrQSKYrJCLVwPFRzhsiTuenFk75ZuTUNWv6ovx9TdbPsSxioHUnZZgXFfv37eNnmkj",
  "key17": "xSozgywDeEtj8nUu5DWyEJUPb3Thw7nd8oiGq4LzggnD7Umxpz5KA356DLNmBcQasXRTqAiDPJe1nRSidr4UMLu",
  "key18": "xBT6cJQm62oShtYahrFGLep2uszbK4igH1DMgWquNVTHjKvouFAV95kEGM3UkctL8GdMBppredpUc9LNEqZZeym",
  "key19": "5MrkLVCK2ogzqntaUPLJVvKRBCRSjyfifs6aitR1Z6nkYc9aHiR84Wkr4fEZchKToohs1GAHUa3ycEVcGQSURo93",
  "key20": "16cjjBjhv9oroKgo81gkL2hZ8hqpiVZ1KnVEjcTScAWezTFuH8efnCmofSkcHojWFXr96JnRnD9RsyJYdZG1q2Q",
  "key21": "5XnC4TnAoXgcRjqg3ReqnsQq1SKxrT12kEvLrN8QK6FDq1ycvpFrgD2WUK7ySdjTUd9j9G3qieNjH36hbWAvQdmP",
  "key22": "SAmyFzPRgJxNxDCjyzy4yQeyvUhcNWgYLrcUhz6YYi8RyJJoe7ni657i3iHXaWaz6r8UTzSmcUcQc9B1y79G42D",
  "key23": "5KpaJrFpjTUYkXwtwsXT3igqNrnF1eNZr21fMaTQ8FoN1gZv1gaAdwds4Pm7SiHXSNkPUu9UQSsWvjCPUMXBHA9g",
  "key24": "xWBttVC9DZAahdAop6FmiVxtXwdaeJaeTJGymvsdV7uUSUmrrKdWbfRBrGu8fc9UWN2vgRxhVgLNC2svzHTRk6W",
  "key25": "2DnMg8pYrLKh4xXP8RaYNtWP9wPL34qppaWrsG1o4gYrLFBz8vdV43U7cLiv9ryqr4dDpyWdaCAPeLat7YByZkh9",
  "key26": "5yyEYLvJdWAVvZcEr1W4ZXWV28bgJiLwCKzLCbVvYtLePtKCAZT7PAToeuQLt22f31oBNRgBksxjFzzJWiuoxsDR",
  "key27": "4uTjZQ5cntRAB684dRBCHQocNp1qmn1ec5S6neHX7Bqo1vruWgkjdKuUddJNwjUHb2mgJ6aoiJPYfZUaeh4bmhv1",
  "key28": "xs2JmPT8ASmnn3P84kTMG7oVJaRTwzxGU4HLbkdE6Z1S27ueRe7L4W3y2swtwsi76h8bDqKf7VPnFyzScPTJRBh",
  "key29": "wkx2hp43qWcVs4SnuBc8LAwsoGdQUiGdjBkVkSkTiZ5fSm1tWyaFyDLkD12kDggekWp7cSxtUZumL1bN3J6VtwA",
  "key30": "4DL8V6zHB9RyX5kQofL2sbV2YknWFHaaWqfXX4FmfUaWVJLaaYJQMjfaENYGE5Z1H3FX7QMqPMMasP5QUQorxDKH",
  "key31": "4ipe55NTTtAGMNUL5RZYTXrX9xn5PDKAg6GHUuJSkoS53MxnxGmvW6TwfzMbxmNNu5yuEDUJu76X7HQr1Wahx1Ub",
  "key32": "1Jqyc8sQ2UTWDgndzZu9pkZKq78fzV8MownSo4GJDJMRsuiRyubc6AeK8uifvCXJQ3gZGoKfexqmbF9xJw33t68",
  "key33": "4YPXY8ovxjhuLwzDscycJijMfPBgufzjr7KQcAWo8GLjGKbCPfdo7ybMNxa83QoAZ2CmiSd65JLVzXk4i2JdxXwY",
  "key34": "3gkhCcC1y5NViqHu7nToQehRRAog6WpBoZPc7Q4X4YxgBX5K2TBP4fBJk3ax3eYCFsUUndfkLHrasTMMx3Uh8nJF",
  "key35": "4xYtJQuvumKhR7SqeLhgQB91A3DyeEgbExo3dAkDsFmW5FphTzZLPpoXruQzQEtQYyS5pnUzooQhup9erxuYsKJp",
  "key36": "33gNN1agnvugnYpA1VwFp8fK4WkZgbYHCv6BZw3yUCtWffPkVfH1mcxEQ9ZMWME7xDvq2T6tr6aSBP8NR4igqYdV",
  "key37": "3q6iYfk8bDg1wMxvhUvFdF889q4Pg2srgfcVZyw5GADdBMBrmKeP6dd2eamLNyzyQWzAakrFwGC8thFHqmdwSxS3",
  "key38": "2mE4o8PUQ7LRqmzXefpj1PGjZeDseubaciJAJpdQ3yJSPTChmwDNCqu31iXnGLJcnZ8Zx8iqHMoir4eiMu3h7NM6",
  "key39": "33QZfgtXLomdgTHZn1Dq4cBFgMrCg6dfevtsA66drx39RBnBEhpyXUzNrHwn8vqDx4XYb8hquTJobtPC945thx6h",
  "key40": "5c4VM3rGm3U12QvA9Z9NJ3U9prZNtb11z3Cc1JhfgDUm6i7urqU1bjtPioNcZYvysWfXwqMjEXEAETRhCCrMCsPR",
  "key41": "47ui93nnaHJXedw3mQi8gAxYi1UALCfskybJMSCw224cwciq96ruoymAkc7rqJWqViZbiuQ9DnGsR1MEq5oPG2xB",
  "key42": "4ePmuVXrJGavomL6pAq6wGHWp7epKr6gxF31L4hFTtVF4i5Jgge14VVyZB89SB2T3nz3vL97TM1Z9GZTBWee4fed",
  "key43": "4BaD4dvHyiMJtpxKWkA1DAtnnk7tAYSrtnEiF1M2R3aw2KcNCXTuh3Y7NTMXWVp7VGLu3EHgrnpBgLP9BTz9h4VM",
  "key44": "2MRSRLWRz5xopjhBB9kKLnnUqQdkUbQBbk1nr6567K5HzsmXHGXP1xX3EGHwgVigDgq9RtqFTaEGKkPXAw5qPG43",
  "key45": "vrfz6yhy9u6xKJA2QKTxgwgK8apANeM72UDsTaLoL1REfJ11kfRtLyFvJ4WcezLdZ3A5zcL4UrNQzXxWzq2erGu",
  "key46": "NRKGzBpUiAFnJWX2kUb76pvcgj41G5TyeG84X32huaY5aWrrnUFTtwrVmWgAVvf3KmjocxGZ7ARcE7abtsg3qBz",
  "key47": "5WZrooX32AfP4bKWXvWKgAeZ61o91M2iDjTUH4VJLJASwLAvLQpaaERtYgUwBezB8ox28xWy1p1Cy8PW3muKTAe4",
  "key48": "56MuuSyHGxuZZPJ7pXSthKkaoQjrNaRuqVZ7tCpwwMGMpikNGYvkUA8sUq1S7jua62S5WgLia2GhN6EMqAM2SEFR",
  "key49": "5x4nEXGJ63qqcYEGtvQWCoJmgNz97bU36ZYPTETAAoAcWKMZ4NVpyvCLv2hdKuWwyzgyoDBiB58Rv6ys2iVeiTcJ"
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
