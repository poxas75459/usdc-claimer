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
    "5ncjHWwHxiG1oGxgTQ2nWp1dJdu77CvsUyCRSLe884jngQCVJDufSVahzdfRxgfvmVb4m29XJpFwvioVrJ8DahgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGvBTpffHekRHqbq4PdGUQ2LA6YyTznVNuu5jVAaNhGrDFjypSQxwHQbSCjf3tFfLDtGLMhVRg1SJtHpPBcdvuA",
  "key1": "4J2Ypymmdhm2PkB4KPeAyd3TEQjAMxbqkZq9Xs2evGgxUbMVg5hDY2XzNdwPszawTNXH3KkYTDyCc2i9v3r6r79g",
  "key2": "2NboTNMEVDKqg6yxHAYitfSDPHGWRAxiMVNBsbNUiD2peRXxGKgJkyfRejUwBrX6FTBotvgodT6tMuTfhcJeHkMr",
  "key3": "4GMF3rwTguvynsUVbmyWhtUxdpXhUHzRuCDMdSr2Jt8XctyppkSGRLbRqeCAguNoNTYv8vCF82G2bQb7Bz8ge7Yn",
  "key4": "4hn8c2PRKun2M3oUWkTN4NugZc69CihNmEHXUjvoRez88ZYr8bGmcKvBeEu2Ngy7CF72WDmGSx1uzvMV4SKuTMoC",
  "key5": "W3zX1ZGi9XzqzXQaLHZiDj1k4Yi23pQnEWVdd9KLC9xyGpAmW21vSyQvqUE1BKvJDsSYCp3qbqyHBDBQu8JEe7s",
  "key6": "4pPMp15P5T7MZN4WFjCUrMYQ6BFdNiRfR6hbnDgjCB2fyr3ig1B5k8pFxQgWVw65MjzyF85Jb7yiiyziKKeZad5n",
  "key7": "YZKm2ErfgV2GZJugwQx95kA878BLLD4n4jtXou1z7tEQ8Kv2w6as6FBuquiUL7GBnLG3pdNte9K2HcsArc1d49i",
  "key8": "gp76PkcJhYJXatQwdWMsb2Po5Ph3wTozoJ7kNHiZANha2LPXbQQ8Ze66U35MKmbi4GbtoqBf65S3T4e3w3fiEnF",
  "key9": "fMMMETtKwFz6fucFCf2NrBjjWyfMmxagiB8B3cbA8bENdVAjA6NJ3CzzztSAwRm8jR9k31V3rmv1uzWT3uBPprc",
  "key10": "3haD7TetDn974gYkoWgXXxGD6yzZtZMY2ZpQy5Etgaim5RaW9pxfaxRooTzVS86Uef1HujA76wfksHc3LcqfFm8y",
  "key11": "4pVbcv13Zv2eY2cPkqfgptdRvEGchETSf1WiSTd3JdjPQ1RFtrF9R9hffHGwRfuzAJvRmpQdMHdxuZ7jeAFhwpyy",
  "key12": "4RT1rKmEkQDYYZrwnD2VMVDoW6kzjFEf1LgH8TXHj7bxH3hVaYHikLrUroQcj1Mu9aVWQAxu4gmTA2Rv1HqDCsSU",
  "key13": "3NMD8n4mnneKM3uW2hWbBoFRkrTfCC6AeaKnBg1wEGpeRQvFecHDz9HYsQcQC1W4VFhAhS1v1sNCsQhkPF9B6zav",
  "key14": "5wYqbsmATUHvJRCkfYgnKSeqJ6tML635SsgCnfjFaThQsTXXXKbdzTkpaQQVEMF5nREqcsZUWZhqK28Hj2mBa49X",
  "key15": "xbLntTG3YheDDUG5QWTc3WAavvSXES8ovqw5DixoWYYMzwKKRAJwWh4XxPfa2SapB1QRVDjDBVEvphqh4u7eSPj",
  "key16": "49uYnx2rB8GYPyNYdVVT7Q263fYJFzxane3s3iP1k1DtknDoqQQhE13HxePPjjSvHjPbHsYLWjYxFirxefADAXKw",
  "key17": "2tZNJTQcSPPvUN2aV1doFFAz89491MsBeRfTNCJaWord3aA7zAoC6rpPvFUMbteBuZV1C6kSRs6cfoaLYLFmrR4T",
  "key18": "51jp1SLKMm7xMEXxC8EMcFwsKdoJyFECjZmWB8qLo47dMCMhnnyjgmihkYnqZqtdn12pBq5WUQP8WBEjoabraVN6",
  "key19": "3Qd3haptePG1E7HxDBfWwC9wPzm2oGxpR2wduzr8sfNm71tKgyLvrTM5zp1nXjCwMcFisgYcppjzqo3oTVEL1oqD",
  "key20": "5JanYBUo6jtqwpG9H5R52fjpjFa2QdQooMPfcMtTnSDpLnsN1PcdxRz6ztiGQaRtwima8BEq4EUUKyBvhbuFs9hG",
  "key21": "2KkeKwv6VFQuhd1SE1s5TNgJ6wWSU5hVEQuB1ABfCZj5KhdmA1B5Rehk5D9G4LF26AXMAJZVvUD64SPAfSaLR83C",
  "key22": "4hcWm5bTj7XNs3hQHGao5WeKJ1fbyZmwYr1pW56H5pP4W2aqtDLHwmPLHKUXgUzzvCKN3aqWMtfUvJ4cYagf2ReE",
  "key23": "2aXSyC1PeuP7nQ3zCHmc7cFsxj3u93CmkLNEVQwogUkJxaGSAyo2SoHb87AesqnDmvJ68DnYXoE7HgHUfGAQ1iMo",
  "key24": "yeK7GBkHPSWdTR7T2eeg5krerhsdUJmNckareyki3SHPBt5gX4dspRWbi1fTLzXDr2KjohWCn2nnDqfhvKAnoGD",
  "key25": "65Z7eCZ93EMWXhdDNjRRefsTLTidk8tpDgzhiw3MTU6zeNDmA2Zod7b8o3u6Q1efxhiLkwpMMsrQ3HaJZd12gco9",
  "key26": "3x3MLoBYd2YFFDwjwbeLSo4FdVvNfcc5b7DZUN5Gc4ddUsS95AW24SfKWUJWnoR5cJsRY5KDG49CEc1B4HzuzbLY",
  "key27": "5VgS3ofLQJ4bFuNUydFkqwgbN9tc4vVsTZvUBhR2QAQiswuq2bN31kA55e7ioivaBWoHjs1it6BVNYueYRS4Cfkt",
  "key28": "65pvc2BxpSaTLoHTNVLvyabKZskSakAi6Gq5UNWeY1qBPgXRnCEWUm9Ytas6PQ7xmbQuXarQ6G8dqPBGaHPZaZT6",
  "key29": "5pXgSA7Q42u41e2vQuUX16GT1d8FkAVKVbXS3zh2mrmDvwq2CTmDqewMeM9sh5iiQ9gxpKDqFCkBL5NhM9Y7XrFG",
  "key30": "5bqUr3gCBc6U6KXhKxXZdssqj6CGixBWCrqD3kQSrKDEud9MqTsXaBaARehZapdEtqEH4w7WoxVsmQ8WuAVKBia6",
  "key31": "3Gee99dq2dkp2TcRwXjZ6myDsrBfXomFVkXdJfonRiRkDSWNNZ1ZRfaKLGAwK3P8VCQVnMmkEnL1BR7o37U6Zazu",
  "key32": "wGDrTdGbyp8dnv9V295ahn4c2uGWjuqyJ8rkkigZUbVrvtceakzjzajy5pWCvvacL9B4v8d7dbBSQuEUxGf3dR2",
  "key33": "3Qs4z6Xr6cyd5QXSCByhSC6ThRSpVU9KYt1mSv7PcSMJxsjYszfEigzAVaC6732cxdBekTdMLRddXHAxt8WwifA3",
  "key34": "5LbB1oAmuu3KRcXAUV751jjVftJgkNKy8vZzudTjRLzUnQT82kPVjHaR5dXD2W5WUHFSLsPD4MJNvvt1388iC6Lz",
  "key35": "8UiKnvEk26aZU2w35rXwBkujZtrzmtndnMyu9cTMDsivZQaqngs7rWqjqK8KYDtqsbKvFN9eehwi2sUNo7kPPRy",
  "key36": "2j8ef4Przx2HoEobGAjRpiSxhRa7yENFNeyzq13ktUB2RZKx44EZEsKDB1UNJ15gF7Q8nCarWNyJ95a3xniC8y96",
  "key37": "3LEQaZ2E6VXwAGxR7zFEgDxz7Hp4FFFmJoCPcw16N5PUx5Q6kUtLUCKFfZCDFyVEbu5Rp48E1axQwMQzs3oZGNhn",
  "key38": "B9MRKhEgzxaQ7S6DPPeQs8gPPRPPWYaY9i9d7F9NspX32x2a6wJpYNAA3PB5BMzNXQLHtEQDLtF8vGkZSTJhWE2",
  "key39": "2xGeLthCnSsypmkpAt3LPL7GoHxz7zYro6uTGtTFK7My2zw5MBPsjRz6H6oRk9ZRnyJZ7NupL1dCFg7c52GoWyHf",
  "key40": "2sDUCu8LLgziyyPMQjrvc7jtg9Uo2BmEBHY5dnSR1LaVMPo9C9svYyCsv8vvSKZnqzjUjy5QYXXB6Gmd7Qi8NF6q",
  "key41": "3hTfi8Y5Nuihbv6yK7huoEmqMErhC5a67vptHs2mPismAvpGNdj1E1n2bwtLFyKUDYxcCntcYawko9UfZ3cwoh72"
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
