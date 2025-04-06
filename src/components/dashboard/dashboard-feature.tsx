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
    "XJxjyemVBapMVPc6CJLYwZ2LUyXG75zKtG6rnMB4uaK2yfknYnGfX2ZJUFs8xYCrxpm35whqRWJQnPgSwWKFkxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzercpc9Tcm3YUhpom7hTMjN75QeR7K657a6R3iKmqw3xmGUQK87dpBoaYpjZTrokbsq7GpAgxaQxNpXzvkkUWj",
  "key1": "5tqjdq7YqNZ93vo8A5aLZ1T92H7Aofnu3K42Ttf5bmVigKTpTqeDesbQM7VA1tz1XZgLgDo676dPbCaVGQF2Wpu6",
  "key2": "46EEoPEoQQQa17QNDcXAjJxzH3iVTB8zAvN8PxnzWqjPFYC3CUoym1SWNCKy9iXQNumQmF4Rmadw1J7TF9mNTLJu",
  "key3": "2RKDmUH6RSRePEohG53tsruRpo58qqaePs7XA9R8rQufdLfW3YruxeykexVBMvtrjYaSkivusDBbNRsMiG94TXBQ",
  "key4": "KXUiszi1VmpATMsMZsmGEdaAJs29Ttypvx36Hy2TBW3KQXAywNJuct2YBXzioixAM7mTe2dMfktNptRYsKEtp9x",
  "key5": "4Xh8KrfzHvTZ7FKiTAsbc2JZAEBBqRN1B9uAxvj35y8As7gq1wHe3XK55MoUtdAP4HEbEM27Z5xi32CMNXgosyff",
  "key6": "4axXVUdvjt8N6hwmXpJEsVDBPRAtwDA6TDkmHrLV1Yi4xzQzQbEa1vaNMGsgoXdtW4K3fLX1d65LU183z748XMKq",
  "key7": "3eTRCxFbo4jcfpn1kUNsQgAvpCJDW85jeZ6RtPgqWNw2WgzYZW9apgTeooLMthwmU18ANNAVGbkvpHSEWKaQwvZz",
  "key8": "2tbap9mFx9Ys5JnLRo8XqyuArijG1wdndYHhz8tbGs7NW9gjvqXuFy2a9YXN5cBkXHfQ8CM2HPJTu5uEnvNiJJF2",
  "key9": "4WJgvPj1y5PZoFxYbW7uVqYLpw4bu8zo6MzP3fi9ESA8SrfhWCzRLPo1Q5AEdhTTbb2v5yJUopqwuukurwhbtSyZ",
  "key10": "3BBfbKwRAzYWcdzsCMTUTV6jw3fEte8Hy73ewMn5bfdY8JYAsTWi6VV6JtrLZHFPYXD2TxpdiuZvuXJvwXdZyDVF",
  "key11": "3Q5iAQVUk4eqzf3Z3cqKW6JzhC6D7iEH7Y8ZkUA6aU81LL73aaDQjzybcWr4hCriJkCDpT3LRNF4tJ2NKYNfe7So",
  "key12": "3YR1nDtn1NFaPsjD8ReFwvDDXmmiqvaFGzGsTfJxp4tT6g3SjWdo3V9zGfmFvoHYA6PEPM6Jnsh1ggDoM5N6E22T",
  "key13": "5nWUraLfitCuZACcoE8XPUS3NazwQnLXjCNr2qKbc5bUCFzQPDaV9Q1an66p2QRrA64nHbdaVqnDyeG8q8iVM9uf",
  "key14": "326cNvRVHfjQPuGBun1mfFA6t9QVkUbTdibjAAJH6y9eyNDUKn2j5n3ohgVFq7qxox36PwUvik5P94CZe6cGGPpC",
  "key15": "21ZS3Jhm1pyLeWrs9FR8erthn2XUt4PC5p2gh6SWrrp3WprUfJxggYPF8nWGsA2YatwJiSY3suzB35jko2oQLDif",
  "key16": "2Shd4jyRhTyAduH5bRcfxQVbtcFTBpg8r95Asz4xBBmjPTaNntLdoD9xXBo9TA3wdvMpXfCsh6bfn3s9rqcCjvgN",
  "key17": "5C7ivHE3PCbLtkngiqb4subDq7bMHnViJt2p4FhWqpo6zHNDUDbmBxCrFgWPVvsr47YbxyeS5NwtcvwkYUUDrmb3",
  "key18": "3G59Cv7Ey1dRTaeuLuTZHffcDiu6k5EJ6xfoTtgMmQmgpoLVx9Bba7xTAqGFVgLYXgtmtczpb2L1MxLsqZweRyKc",
  "key19": "5ogkrrwDAwD1Xov3a2MjUEy9a5xsy5H4y12V8BvV3jTSHGkX5b6ferEq1p14rw8i2k5VC5tuk4sSrMfXEsfGHYgm",
  "key20": "5qytmUSzpjYUb3QkDa9JiKckDSRVEPaHkXPFUvSS2yw2QuMVostfvtD5rc3Nb1vyem3Qc6qL9Aq9JAExHqkxPc8r",
  "key21": "4A6h7FG2n9M775doHDVvx2roaQAzfoGUrbaoY8x9SJxe6Abf3pjo8QrDvmpVL9zp5dfMecMUCyetQgUWqcjURZ34",
  "key22": "4nReyLE5VxyDjWqS8DxFnSu1X8mW2HJ1tv1PqB8Ned4PGpSNnbfPdZyXv4p2a19SWsVP2xT8NBzRrNS3DpfmPYE1",
  "key23": "4WceA81FtNefsn61JCAs4wrUJdemCANrUw68Sni2v11uUcQcYVc2kBNReLbxoy3xtZ7tNoskp89sFqZgoPFrCgS6",
  "key24": "MxJ4DwgJKctcp1sqc4UnreKuJa4omaNGemALLux1YWffWuXqzMx8TE2RHmuTRSsDFJ5U5R9RUq4Mou4kWcVoVbe",
  "key25": "4op3452q6D5BRJCWtc5kPqken3AJiPWP4j3TDFGkXUGN3LE2Xg9jxzjKmArvWLjCixDt1UH18M6PWGsoXyhMMtVp",
  "key26": "4pzndJ3zLMZP6ro5YUPU2fdzrYjN7LCug6cpyz3NK4R4fM97vTDsUFrCArtEuJ6FMyC5Rw1P33nKSsnVnbPzcuAw",
  "key27": "4s26nHC2CL3r92r718sQjQ35mwTqwcSxih1VNMve4SPg5VkMGji534MtCJMEqKw2BHsgx8g4zrTm5oQdzbuQE8Fj",
  "key28": "3Wj6GsaeytqtgZSRViQXkWHMcpzLxzsKZeavjdhXpuqcVQBAAzA1HKzoR4Q6VynfXbhCaiK7vARCsDTjAfq4GoHV",
  "key29": "3ZZcXFbTeUiNBn2nvHvFdcCfuaW1kn8EPN9uWYaSEpD3C1qgkfwCnSKkiXZsK6MbkBuqsGqFM4h9K1MixBD9m12g",
  "key30": "45Sgo84hKAVJNKGoeVAne6s9cJFFYhuxT1671jVZCTGMxzXsQDrKWCFTGwiMyUe2PTukf7EnwihoYpRzAQdGM48p",
  "key31": "2fSP4SJQof43VmhFnDsrQTotcchUidUzfnfLAjxr17jwCzPcaimGEjAGzcCEyYCYFChLtBAHpiR5Lj7QuF8dE3CW",
  "key32": "5ubkCGzKRDwBY6We3j528VSmfBu3AYiFyfbNovDdpZEWKCHSQk9MWeJNkVmK47BESjnVaE1A9f1dLarW5W8ugrzp",
  "key33": "45MwQ5VoGvMupuLBEeDhLhjkDRPJPzmMZzYN3dUrvANdb4or3gZwSouzAahtVY73nPXaCNAR3iSYVGPkANFujHNU",
  "key34": "MnTgeSejprNtEiiLvcxpoVM7rDM9MNETXppCE19whpGQWSxaFpG21vNjGdUgmnkQydEJgm7ihbddLvFYiBmNRNs",
  "key35": "4qUvQz6BLihErj6D4XftznGURNYLkdnAZC2J1t1CpP7yZQcAA2FVxAi1DfYkgHiD1emio6LTnoJV9VDyi9uHTq8S",
  "key36": "55FkPPNLxjgqfXzWAJP1DeBPm41sTahGgUU24Pw39TmkmU9w9xceywQ1BrwhT5S2YMLa5ZZwiBkMPevvBFM2VFk6",
  "key37": "5yBZAkHo2sf6i4UnBZ9MLKztn2Y55PQwkHHh351SBJvghxHUWoDKD5pc5C27Mqt8uU9eCXS6epkb8mrCkTtF7N2h",
  "key38": "4ntYhokxLgdW8BCzRDJ9P26NWzrZcAMXmvpFSfyhSFHqkibgpowompmNUAChur7QGFHKP3S36MKbng7iK6T1G5jt",
  "key39": "61faFNBciroEQUnEyYF2nmJvrB9RbxXy5Xd26vpdk6dfthwFZMxtebZvPW45itsqpJjfVka6JZ6TWCUDYAxWDHFU",
  "key40": "2KVsmEcfWV6rQg9GUk3kSfuRsXn3gSPEGDzgsFh7XX8QBEmrXnM1tq8HWLyrbRzv88zwPCygX6zS35TyE3JXzU9S",
  "key41": "3LpmmCM92LBGuLiea5xzicLnX5fZZ3HCyms2UF76xkYPX5gWPPe1K5qYn6S2PR3xEjpmEhQPucs5C6R2uuLNH8Se"
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
