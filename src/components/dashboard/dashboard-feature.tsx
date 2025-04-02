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
    "yRA5NCHPfQrZQzpp8HeFe1ezHBihNzptspjcM56WmWbZzp1HvxfAcoavwdfoi5WdjqDFLJzKefWXbvt2a7obXee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBKnhcKsstQcAw59ZiJjojhHN76aQUmwi6sBL5V7WWVGhExp6ju3RE3zDK6SYWQU1Bq9k2VwgJ3xAEh6FW4KiQi",
  "key1": "4AjqGAihRFkS5RS9HEsyHWkiSfvCn9rwu1xSAEPewtBvjyUSADXvS3aaoQUN4YzTiEYH8nr5a5D5QVGpAJ1hDjdj",
  "key2": "2q6dknPYR9G19LwWjYJmXXGPDR5KLCmmHERkvwnbjA7wFYP8KyFPKfJastmWLvNAh6tpqLCjFGJ4S9bAUSdaAaak",
  "key3": "2eRzdCPQ7SaVcAj9LJ3xuiZruRqrui1rgdFJh7tmk7dphjVRmNj5mYHyu4B71bvgAUeLjD4DmUoChZRQZPC9B8mq",
  "key4": "2zr2tN8C8Ks9HmiyfX4LsiiK8r3jdYMVaqnuh46Vr3bA6FGf2gMiof4vQvGqvDTAnZKXjptidRHSee9QQvFZc2v8",
  "key5": "54wheVJeMHY5yJe71zQJoeuc6YNiMqH8zpHHptienowTAt3pCgSTQBAHLdLEBz8ACGUbkoMJff1g66zy3S1kMUXt",
  "key6": "2oYTB36bKvm2QTHPm35BVyLFmUFELj3H5KZK4KWro6q3SdqMKeKi9BUphqmCwtbNecX6q5PhVZy9Da3zXf7ARC41",
  "key7": "5Yc4ZLLYM9Biv8RKc1RdsPx82oSzppvmosD3xVirkjhaU9DkvCuzxAgrMXYYVjwMXQmJ6FReNU3RZAQ75yXxEAZ6",
  "key8": "4dEH7Tea6vH9txNDbLxi2sMq3fmfDEoobpzkBWMQwG4CEyawczgg6phkhLQbuQwaQCa7AoZqvWriQjeF9YvsfEzP",
  "key9": "rE6U5qeMFJAzFeYsBxS8AoBAvEjzMjUP5YeYBhZMb51S5w2cK3nD3BGM6VmF96cCi8hgw6XoLFH2FCYaiTb3JRX",
  "key10": "EYqaa5GoeQTYBSPpnsS1Aux1T2MyTVZLTkrycQCFAcuDiEoo3yQ3rckhEveEMvoWoHE71CP1Pzdku7tEA41FFdu",
  "key11": "3aJdJLMQy9fXNDzHnPcS2ny5pNjZUSzaGXSnUn6NM5XYqNCJGEtbmG6JE7vkprnnp3EXEPi3awP2ZCyMcYyAamLp",
  "key12": "22BtPfn37wiTCGUeCUsEHLYWE7wJNmpZpEKch3eZiuUkfxq5Jjo4Zo51h956BsxbZP558dsY5fnmagv32MZUx37V",
  "key13": "2ntWrThxqyNibGysxJnmRmvRdoa7D4tnEQb5qGpt4PjgHUck1YfHw1DTaN4VQwmqXvu94GegvZrcWxsYLQpVyQav",
  "key14": "33wDYo23GM5R291NLtbXRGGCqTjQo3UJCbJkt9EBQpdt4D8eH7UsvAbRfpLi9td9em8oKVZkhEcfWJkWg4Gex9XH",
  "key15": "nrAnk9EoBhkEWyyfH2bfsrafXJhfQAwudSXMdwBVdgWo7dRNtdLeRDP8YRXkqfMRZBApXbcC1P7uCitMxKcdrMM",
  "key16": "42THuapSRHjRgzLPWwoDaNbzraNqWRyNZBGEZMvxRiQGj1CmHFkPNmVGgz64CXnWn6ZUw7qWM6zcEGfRRAhjmcQr",
  "key17": "3X7fvcdVimJWW5jTcxwEdgimzJrDX4DdsafTDEcydhGDupLhfeBNqDx5f1divEwh3VCfoQDWVy6Q3ZY6snU67igC",
  "key18": "222jsGWWgMiew7RE1qtEeaXAN5MUS4h6U4Pt3xyBJYtAKdJiX3huGUJ8KoDbYgaV76Yk92DQ64HbPw4WULPRG7w1",
  "key19": "4qqop5fbdSut32TsJMxh9Q4MLepjxi7C2VspnyY1QCZYqGPu5tNTdSBTJ5wxoME2LqPhifgMmSGTtrmedecVo4Qg",
  "key20": "4w8KtV4mcfwb9QR9P29QFGb2vvHWRu64bdn8DMuYLBNpE754qRAXxZ2nBfNXmwiibUUCQxTtfsdFaxPKFztU6ipG",
  "key21": "35C61uwVGEFSsMFy5BSgnn2cBhepTUM7Ap5r3zaVFsPLczfQmXeZPZmdj8aBiq5e26m3tvFVQCMy2miq6MZMKntZ",
  "key22": "4RcatMhwu7CxEZCCc5HDLGNb8DXEs4h1ZfztazGKWRZe25gM4hVvxq3H4Vk98mwWndYUZkmVpFMPxRpktkhJh5ut",
  "key23": "5KLLJ7BYTaU4NbL65i2YgeK369vz6vtEg9VNGGZVVuB9uc3vkqMfiTdoaiCSHmbUb4JzjjgVoBe2Rhsk84Ly1fXN",
  "key24": "5n1AzuneBZ5tkbh74mqpUjXaizoNeExv39NLUT9bJ2JYKWgqA32zz7DovRpRrR1NV7DdJ86G1diQxyL7pJm3CNTf",
  "key25": "5eitEsQ8RkCKvPVvJwQqi7DM9Tkoz25eREaLLfBqo1h7VMg9b3K1DqkSof2pc3KuA26KbvmVD3yrLgXixrT9gbAM",
  "key26": "5fH79amL6yiuU6efr8cnq9Vu9CN8A7XU6ucbdPUjP33vC6mmXZ3VjX11jJsAKnJZGga3qcmAg2r44McgRAKxPSHb",
  "key27": "4J8z6xp58xoAKGN3by22jk3HCsJEXzsFdnqKD8VjKoZWXsqSefWDfWpC2JL1c5XjAPPHhQS5LHi6dN43iwCBRyTx",
  "key28": "GCeKMR5W7fWbxqeCevqDD4GKsmuRn73wnNGFZTpaSd4xQR2bi9nSBLYS5MGERXDmHDkDJnuGiaNn78EXbuQpZDZ",
  "key29": "otrZuupxMXRfmABYnp1YcNnZMvUfbhxYdJC6UJv31kzAh9b2FjKt736sXbf2L9r1P1Q9YzuD8h3bsCdBaTsRE2J",
  "key30": "34vuAgvDBwFfwutht4Gdsiu26mSpTAKDHQKvvdNL9HSiXnthp1qbTSocNJ4BhtMv6UWgRofAma3fpcdTEuAruGnY",
  "key31": "2pSd22Emnbr9gPFihWdxDtp8rkAEmqoGi7CffYmNMJd42LDbCrJ1yJJZxKnRshBauv2cVCLaceGeC6Hvz4hKVfrP",
  "key32": "5bi3mR8CbXLiqQgnLkf7kHzJsZmHDAM6P8b1oBGJb259LAaTyhj2NcgTk18HcvZ2wRLnptpXS8PhLnrrQ9CMuwyY"
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
