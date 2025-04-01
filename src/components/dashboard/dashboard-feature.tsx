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
    "2zZPNn6AFFeXMPfGeiw214nWsSRYxpKgDJZLfHhwxZSSCH98aTUZsqrVp8Nj5BS19joMMWvAU9miZKKB6wD7m8uQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6kYc8C4myXA9NcGCE2mdBSoKKEhMwQtXKwAjvHfBbTUg3zDAyjtSMhgevYB6X8NjoP1ZAi7XT1EJNaxMxMgJpL",
  "key1": "65ecSz4TVviR1aYS8s3QXoz7upNV5p9V7ufxz6FFiMRL8cuFANSZmaddxH2SwSVoCVhBkcfNYZjJ1GvvoEAgRWti",
  "key2": "G73bpSXNSHmvXVyuUwsmUdhgw8EhgDbr6FymEHvAi8hrZupuVgdV5aAEd58TNyYmbk7DSdaNixqkEwS2RPrucyM",
  "key3": "5snWYwtuaKGxd31zhr283n7nVDdWjbHJYn6aBUXxPj4AUWuPZ6d1g2HCZeouZ4Jk1s7iW5gqvP1QbqGm4UVKYJ5g",
  "key4": "3M8DbYRW47HuW96tKs1PHhLAXQ7itENYdHsBDqqSUKLL2Eb4eUy4SfVz7GHuPWAxBzTtFa2QCU4X5xtFryLKjU7f",
  "key5": "SLmyjdwnrqx8BqoEwhJDatzW8xzkxwEmxH5b8voLh1fD4MqA5dbWCkh8GyQZn2QFEPb5qe6zPTS2xzvnrKXZGGo",
  "key6": "2geXLiUuZubiXzCF1E534Qj4kg3wn9nuE4N23fFCYgPjdUv7833ufT5AiMPgEhVJDjb4nTzf54VYfmDNY43ekPFN",
  "key7": "21JdXKKkBSNg4ytckCyfXBvKe1LXs9ANAqz3214MEt5sjpbzwLDUCH4Wkn7YDJNbSsTpdNr1Y11APxMWVqfJVwh6",
  "key8": "77ePA18f5sKVTWtHSsmnEkyfkEHN9Ce9qbD1RFrJQZs7fttXEq3BszEfBoF5GFZTEk2m9XxZxq1GT5L25R9Tzvs",
  "key9": "4yKB12GVqiR7eLaHEKJzjhhbC8CfNcqeFbWJdpaAT5UsLZWzoRtq3dZHBicAGZoLh638Jpj4rSMJS6D63UUKFA1j",
  "key10": "4qiFADimtQhoNM7ghAdcKhXy8RL1nK3Qx7D5YX1WaQbXrqh32P6StKdrsUZEShW88d51D38jUsXQTvWu3L3uvd4S",
  "key11": "59wVi4ZrbvyGm4cx7SMKkyM47THgDhFhJAuT9o1vZDyUtpgWTP1gFpftwE7Uu8euETZrLEDd3dVcYABxF6EXgFBd",
  "key12": "4zPkRvHcxVzeJFHbjzm5Vv65uoVFXrRbiNwtBMdfkgu1iwxftipzewvrGXbNy65kESNeEx9ThtqijmVDGYSLGBcf",
  "key13": "LZjTwdphisgADyNb2E6ALQXk5hqzSpgJUYbHzMTHcqS2uBZB89rs317YPDYTAYqxNhshVJNn1cHYWsZnmgY5jn2",
  "key14": "3EMc1HVA8ZupyzWkvRimSUpAjgGKwLLjtUDq2mftreRGgYk1nNkmDoBfNejJVYfGgRj626d1gkKRBS7rhrkuYSu8",
  "key15": "3C9SXp3BPvkodCZgSzaznBuDfc3jiNt4i98SFTd8mowkTAPemDRkSqbSUc1PJFspMaqjspFtQYVni8ekuFpGM8wg",
  "key16": "4RSjLPFznnTvGBsiuV9YpQtsoyToQYNq5NsVjmbEZKuXbxHiei3uVo2vUpiDdaSNNk6VjrecMsPmyhp22NPeqJxE",
  "key17": "3nQHY29Ucej8AqkzCCnCXdu6sBGFwaRog9n2PRnbvw1WWgDs3ZMKTDhCwdAcs6vkeCJNhMLYWeX8uHQ2mcEzEV7y",
  "key18": "2LJqxz57qMuE1W5Lsp4zapLvFip4eLR575zCKaCxnoRRSTvKzMCB9JoRpKmvNLTbSnbVzBbfg3YHvcYrZJaphsqz",
  "key19": "4b1KeZp6o6T2PzFeM26TABDGrtGHePw7a9duVuHcUa44tB2hf952VzkhazuHB1UhRXWpUU7bNtTDMgW8E1BvfdBd",
  "key20": "25vbL8ybvK7PCw4nxsJ3cGW94Q8G9WoxFRQH3wUmsnNQFqe7UjZxxrPh78fU6mMULJ7KmMUeHwfS4rwVUuVMonpv",
  "key21": "5DKHxg8PM8eFLpR2oHzYdYBq41wPAFvUo2krhaZEbSzum86L8DKnDjpcvdeYP62HNvroRThFvobesjtRtMccpoeU",
  "key22": "62YteakR4v2KrqqoNno5JHz5Y8VE16kxPsQpQ97VPZKHXyYsac8kpfeHDJi5VpaLzjjoYijS9gnXaE7bh36SERoS",
  "key23": "5cB1MkKa7MNR2fF8qLEmdE3d4TUvHjyrCM4qikfwywF3EBfjpzJeDKP2dfy9noJnt44F8X6s5sdSQAWvPzBsdiKG",
  "key24": "2QPifKsSwHZgA3kp9yCcruwE4FNT4mun2JH91tZ39rxjfC29B3eqoTYNwwZ6NCq5WjmHMCh7S7p8Wmb3pTZaov8f",
  "key25": "46HS2SosNCXBM3GR1ZKVjgorG2coMwg43RegVQVDzqPpwVb2nBoTCjmSmk86cVD3u91WaU7hq3sCupAMUqt3VKfY",
  "key26": "5L733h7M5rH2awEGCZg5DhY6Y8obMgxXRjPJYyPacPvgzf3LxVq1AVagE36uxQTu7tExavGRmbf7DPoHj21FSvTo",
  "key27": "sHMLB8eTPfmgZXanLQPGSnjAK4fEyNh845hTCvQ3oC3pCPXjZv7VDFRNdcKnGPVvpsySo4KBNCkxywBs4Aa13YN",
  "key28": "64aAd1CgiW6gjaQuv1zRFy3mnhtaRHxA9D56ikWDAR35iVnxbTTFD7vdU3xgGSM2buXzsgVCoHU4TQT7NwzNe5PW",
  "key29": "5MLv9GyxreECxdgYqsenu1m1xAgQee7jT1orKsk7F3u7i6vNXiX7NhRCBKbagWXkrdQK3swy9QAdn1G9UCJfUFSh",
  "key30": "5458hjT2mpfFFNrchEjyareH8PXAQEQDaADCUFiC45GeNoiXAZVURXmmDKc7HfxdjdYi55PLxZXAb8dtPPoxUBYy",
  "key31": "2gyYn18z2uWxvCCRhb23L3DLqWgbC3mJyZjfGhAcP3DKrpoK92NZ6PB27swBpXsrsxU9DZiawKLVBppmFuByQvyn",
  "key32": "DGs9DrFypKBvu6BoTSx6QvhD1psQpYcph5vpr6xz2rDR7K53ZM1GBcx91pnj6JXhHiDGS7KPAcBKQ7V4rnYKp3e",
  "key33": "4pqzeCQEt8ksZhKj2Cfe5x55DS3bhD4Sz8NYqjctA4wWTLqy6SAiWaCrk8RmckYoGi9jcMVnNxvZUpyWJZWioXrj",
  "key34": "4ZBKEg3caoYBr4JGYsuUcTeVFqe5uvJJogosqjrsWstUVUGu8PFDyCw3x9ba9cgabaUzkKhYJRzmbj82Z6wBBZJV",
  "key35": "3qgeGSnfktDMgxhQgb8hNhSpm6pHMT7KYNFXrabQsAAiPdDdET5zkrzyp6sFBk6VUAkyUFSYfHi8413sNg6XRdpN",
  "key36": "2jNQR9F5VQJfk2ajPot8gFNvBFpkicAN84uFiEcwpjraiENh94s9P85RQpcpCPquKRPfr6mUM9M7VMZ16B3W2J1P",
  "key37": "5fRxgnp4oJaE1sgSmPFqicSXrbaDRBH1bVR4KqdxJiQWAwzd3txwhnBajqKKZJwdWWTjx6PnJK59hFnfs9gTZ5LB",
  "key38": "4xLtPn2pbAaGLHXyvPV82oFL7nHaCbknWj6oaKHNCP46EWCn23dczXDa4QnrxbVSoESrLZywPqctKSS7aqGoz8Lj",
  "key39": "5EmrBPE3ShyYYrKTzArcqRdyYcEKzvhcmgZq1ijRZb8YJ4qrN6a9NFrSDhnf1eZjsFQyCn18rd24yrebfQRm5443",
  "key40": "kXBFVA5YJMPfFSu9kgFnSuWAUbfoehX6J7Dho5ZV4fjqYGTXA8WVmq1wfpDKQFTs42GSaggacFwFk4wwW1GJtHF",
  "key41": "3pHjfj1TRhsWVB5wjbqtdf64kQViHJhynzUHphLoNiAQf9dPrxkwepikHsWag2cHfsL426KoRsXQy9YUUYbZdMMg",
  "key42": "5JmhWY6YM4XweP34Fw2ZKVX66p1BpxSWyUm76yfFc1WaV5Ta1P3CCQk1KfzEG9CEiK37VCfNFSexQTobNk4ndXVZ",
  "key43": "4c1QZ7nNNZMFHt7seAW96Z1fKx7zLXQqYYy9DDJifFsvqWbqafSR3PUpTAaA4kfBzoCLoVQWa174zRuDzPkYi7ph",
  "key44": "5qXGrhncdepAyyhrff3Mpho7cSy3E8wep7E3XdUe6skC66E6KnJ1SUS3wiYMbvqfxRfhb2DDyjViCjt35d8XSnqv",
  "key45": "4iJLFGnX6AbVjf5VFWbHR1WES2gXbSRexXCXCEdJxLCoHBfgRcdaY6kdYfV2y9pGbxQGVAvrE5KttHHGo6S2xSzR",
  "key46": "44UX9s31KoAF9zydNQE8Hxu1hbCRsKQn17TF8bV5XykZ83yf99KFWw6QExdjPC3emYA4e1qryGaeXqG2xms15HTT"
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
