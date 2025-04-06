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
    "4HkcinbrYwPan719GFvrgdwmZAuRMuLCrvqtdbHF8vStEH5FHpdd5GrMQiV9mT4ko87miDmuSnWooKPVSYk5vWpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbK2qb2bDgL7g9oMDvync9C553k8PrLHEK1PTqFgcLtLArjgVxRVwPgVSw6baTMwGNgnC9MYCxQtxdSAv785cM7",
  "key1": "4AvtpkUUMcNiY3qBdptamAiCKG3VP7jDmVuuV9TJTVKs8hYsdZaguFtaNoh9csKzbhGiiCYFhsSgxWoiouZb842i",
  "key2": "AvNK5DrHaWrYw7skSjfCSiwiXnxpCqEWf374sbzYgXTXnGtFySHhi8ypnNhP7YgQ9N7Jt4kaAKSUv5pJ1PJvmgL",
  "key3": "3MXcEhdtSGFLGb6NbnbdoAroJ7ak5G9euQs5aMPfft8HWzuUpsbeLqefBmAPMQ1ibytpaY5nZuiTpnWxG86ghjGP",
  "key4": "imvAaZVVQRk1ZBiEzDg56Mhs8dyvEDrLcnrdjyeShVaU6sR6azoNt5p7H3BQpncBfEBMm2K3HCu1A4Z6wWdytsn",
  "key5": "4PDqVspHTL4xty2Cj7ArinVwxk72pZL58gegpUJjVvYdCGEh3BKGHHYVVr9tGRRqiNAnJdn3cGaWRiiayMLJ47m3",
  "key6": "5kucLRTWv1FfKMhADRDkQPc5Twr31xpK4BNg1Zo8r4AxAcBgdiTjcWJ9u2wEUBxABxZhFSwgEJQ6dLyg323Q8er2",
  "key7": "4BUTiLfGuV2bTZg9FiUGYKGnhbULzWCeDn6qEyFsP4LT4zXMeaMbdVfKpBdBbJzG4qDicyUQ2VCHJh6HWfUPM2xb",
  "key8": "5jYaNJvhdBLm2BsXeL7RFye6dPMpSfmND1t8qoFo3F8B2b9MTQj9MJS7f2V5P985hj93WFFEBYWJMasytxF83L6j",
  "key9": "4PMq5UYcVrihRM32RyGAFiz3xvyQAkGAmh7LuDXsFmsi9htQwNPipK1v36jueiRoGsKyKnBZBss5hNKdswVtXvEX",
  "key10": "648cGKEseR6rn1EQEfToCrC7eJ72vZKQtNi3B3RsSZvQ7jUzuF3ZnwRt6i2zHpn2q36QFhm1ss3fEW3iGeUJ9WTQ",
  "key11": "5CCQDBQG6BkMvmsFw2uBE4174i39gMzvpj1pm4sHiwCEXsF2TRHEdN8mj5MjpU5n5gfkBmkMtY7j76XTtPDi5ff4",
  "key12": "4m2fzSgMAZ3FtT89YD4iPGLoF8M9ozFwogN7MJBXZuLJM2VxfhT8hTLkin3Qdej59djR3wSGTorx73QHkfR2nEHZ",
  "key13": "2BKTvenJ5rmE9uRYYSEJpbF7GM2CnY4c4LckLi5uCvTo2xacAyuumh7ej1nD5kPhpYTYxryYxQJK1SS95DcZ7yF9",
  "key14": "3opBuCJxLYtB3nsLDvmGbBPxZnDfJzHLWUV17PaNEBWdDkF7E7sAqYnWcNsYp9ARYNXJRtKXscc4h6oLSCDrgJTC",
  "key15": "4pWmXGUptmBnPXVH3TrUWiDrU9obWWeLhLbbfnpMcpmepEdNidecNbuT97PFZpAnYkMcBAxufk2SnP2Witg9Q35Q",
  "key16": "5WKEcrBMxHy9NowRiwaSK3iQeHfS7Kfbf5qK8zrwpLGPwbndkJyXniiZupseudexQua4MComhYbewQK3DyWxgq86",
  "key17": "2m8uPX9MdwEDmb2UThfP12HG5JWYegLdSqXEh1KgrsA16qaPwBLZQXMKwSEwyxewZjKrHAtXLDNUvhNEa7e3vwoq",
  "key18": "63aEGNt1CkoK1qYtj6aTykQWdvVfTReE8QnQs7gY8DbQFMTNfBmsVWZrHzY3Cq2v9ULrQfts94Da1zx8YTe6VKKi",
  "key19": "5tB2XngxE98FJwHRW454LNQ3H2cPDMuuAuvQW6TFAbqGhz7USXPCPWmtjwoiDzdT7Mtjdy2k2ngPDJCBz6r3YvZv",
  "key20": "32GYJmXMkeZo2MRmsayYrP2N2pmiPeCeqcVdMbFAqrGdkQWMk6kbJV6dPZtAJqnEXswi4C7NFHVLWMa4XFquYdY1",
  "key21": "YvKbodGWsbQywfcMxbRnkbWM72Lmo92Hns5XhswkurJD7yxYHRvErXz5gzLu5bsGmrmHTdcy2UBmdwn8SWqh6V6",
  "key22": "2rygfDm19YJT7cj9g8oQJnPDMuo68Y7GB182H2EDBb15fyChYrz7JveRQJvAU6bZnxqqkShBcx8BDf2YwhBFvHEw",
  "key23": "4anHnUALq9u4q1a9xo7vtQuAWFxmEUwJANBVno31zcSviAzQ7Gu56STt2wmJdd5yGRJvoyj8Eqt1GiHvtUT9tbeW",
  "key24": "4Wisg8PcFGGYXers3Tut9TV4LEX3Vyt8Ar7wKLxPgDPGGr8MCiDTNqGLa16ma9gcUxtTr2eVFjRm425nexxqkRoh",
  "key25": "2KcEk9cnVn7HEH4kR6k2zJ7DTsrSRBgBB3BWEZ31ziRxamdhVx5p7zZ67hAoGXzFHj88Qfv1LK6ijNkKFoF59D8B",
  "key26": "WLPaGzbYjjNAkJ3peiSjxcrUoBMmAbcifEzYERf89q7g4Pz7dayBaWnGK3PQ5NiG6fQw5g4UmtPG6qGjZUZhSdQ",
  "key27": "YejJY866ETycREnqU549P74nZ9PFsg4z6vxMUNSXjNspPB33y6L3pLkEFvzL7cSFW9zu9kHBJZUtzw6q2QQGGni",
  "key28": "5J7TfVxqVKMEBQDPwwnM1V6Kh8L7VoNKvoFZ218Ku6Cc6tb6oCoRSfBPdS4p4vhwxyXiV4kvFKWjaN2xCyxtkPe7",
  "key29": "5BFC84zE3CgihmB2SqbX4QEjPUVKEAbgPHDub8RRyjbBD1424A8ameNmDcdiCgw7hNC4xEeKz4EtoQ6vm28o61Zo",
  "key30": "2CYp3EjrLFPWn93sAqWRKkCB6vKuWiwxZsQbrT3jDGSbmoW6DDMiJ3DLoLcgTZ21uQfM3puhRisiLkA4cbcd5PZp",
  "key31": "2y8hT4Bc14A9GfcyHcG6kvpeMLQ9JCDN6MobHAfXQVCtMg7TTwdWSxeazE4A2TUvwcsMbqjgS57jpTBycnZfofM4",
  "key32": "5MZUQ97qeicyR2p7d96TnQVJUAc2HY8qDoyn5xGWEZkNKm49Ms93rnnsncVbuifvfPbCWjADXFkrTwwyoX9UEf6s",
  "key33": "3BTAE5BMN9dy9k8gB48tkYHiugEX8br7bFSwpsRDRdqk2tGCvsm6WkGnwMhneYzdFj2EydSA2qqnCi2jpsUhVbW9",
  "key34": "2Zx2B9z9m4sSBXwbF2FrtrwYiBsBHDZmAc1P6EtepkWuWnfsoWYnfNUxnK1vEXWDAHyZTXfeCXJhpMu1hTegz5wd",
  "key35": "2R8ChFDcKguwsTZWt8Jw41uvPLS7s2n1KNoW4qhRWVvLT4ppdkM8Qxj96A8C2xKyM1i4wZCQ2oj3gBuFUUHiw6Tv",
  "key36": "57HNhVokNnWh7GuF19Q2uyrKsJFkJTo4ppDoAtK3egaUQz99qRJyrj4epTykJmn7TCvSxDfv8YFXBvAJdrm5wpZV",
  "key37": "4r6AHgJFygm5ih5UiBN5vV7zWUKd3pSqvoJNmSW7iP8TdJWVY8cQGufEfoHtwJgoVQaX5VtLR6hPJz1n2ah3YRnC",
  "key38": "2KzCQbozHGy5BApYnTYPvo8Pc6L5GLZDngk2dtyPwR1NL271jBi5K7iVG2FGdVAq8FRyk84PFmP7adFVoBpr8Gra",
  "key39": "5Ln9zTck5erSnXqz5VEw2CtBRNmYmM8D4VSYw3WJCWC9Tb6ttw5qnSrYkt8bTr7KdGnVTMWZ6S1bSWeij5EHCDUu",
  "key40": "5LrYDVq9QNejneipGuiquPmRBXUyXFAxpezEkTzApqV6KJf3XV64KxPbSupBNx4ox3gTQ4i4fhX8FzFiXHmds8er"
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
