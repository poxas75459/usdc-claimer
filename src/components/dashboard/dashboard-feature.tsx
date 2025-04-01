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
    "3kH65DDKmcMbJsatSbkhzU8jhZndAqu8ugZq4fe9dW67bFc5KPMFDbiV8SAbrFfnjJDcztxAYPoV1iFJoRVSHb9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vz1euyvTmrzPbPtURS9jbCBx4RqwQjfFKeawiU2v65ttirHpPp2RsMZY3n3oSeE7wQzABpXrVcE8xGFHTF5aenR",
  "key1": "3MTHTJg6Euf6R3XdQpzoLfHikijD4S8sVaTBfBqLsGZ2igwvF4hACJAMHhctpqLHYyFRvNVV9KvetAH1q6BuHiWA",
  "key2": "4MNVCM5tuP2KbyQGQkBomtpgT9PHw7p156UwNr3NixCLrnmxq5sbkAaW6B84GNYyQuHH15eh8EC2AvzD8SmGUqcZ",
  "key3": "5Bt38iB6tTXPyYfimKkgG1epCUNh8k9xqMKjJpYJKotpxQyRnmPEtteuEFQzwzw57sGT2LFqV245cgWyjjBNLswV",
  "key4": "3XTM72GGMRGCBJmtHXRnzitvx6NN9pyvbpto9kZ8CsGAxsyWKYUczvE7fyEFZGnXghxWGQj6snHeudBWQQ5KdjBs",
  "key5": "14GswH7ZXDY5mgzKQWmuHDzRGkFuK1WZf14KuWhtsBQV4HpHxePz46LtYqLY11xSvZUfHqwvRXkJC8VdG8wsJeg",
  "key6": "3QEziKXV2CfkabVcpRtrAruZA1pzGDNF3qKDM8L5FaLdHQwugcL5JkMC1xUXdeML46xxzZPosdtgxT4WsCT5qjsY",
  "key7": "37bCFs12XQhJRVCUAZUqtB7rQrh6jNU5w9Trhw6NnkNEBz8kC2iAmSBpwzZvSDzyjgKYpTXYYp4Hq3F2QcQQFPgN",
  "key8": "2JiWYrqz6fSuhCUUnfAieyz6QDn6xLwKXyHMYYKrsDUfSfPX3YyNmRBUeXq5xkF4xFEjusvR3DxojeCPSD2whrjj",
  "key9": "3bRPEuzmDLkTYCf1wWeijdvuyeHuQ9vHa3YCkkzvqA3oJ9sdHg6bewMiKQEEex5WHJBayZhVh82dLD8N9PPs64jy",
  "key10": "peSfUncDXBBNC1sD8fbqGiqmTb631VCbaT8W8W9Vm5hhHnC7VcQcjMboDXqos5VgfERhE7wPueNpF2CvFZV24RV",
  "key11": "2VoLQifPU1D63KsZGNCs3Jh9DahyTfMrFrWTEkryqm2AvDfrBLXWD1rkPf5BMVRnsGRnpKrhMzQk4zb1HBi96jeZ",
  "key12": "4b5TdDpkGUxRv3nU6XdvsAHCXbUhXVtSezYJ6D1kPY1dLAGPMwKecSwy977HsqRGG1jbXDmo6ZtymS43NU1ZPDTG",
  "key13": "4i9wrFximHnN1aKEf8fi8KtpiynufxTtTR8TeTXWApy8Q5XCkLTAE2kNDM8LaAngMSujfG5XNmAMui6k9RtdToeE",
  "key14": "5RMEkdr4KWLjxae1hZkGVSoikPuC3MGjwNbPBpDDxext3vx6b1tBpgjZfKjvhCzmGFm62cWo4DURW6LqQu2u2JdE",
  "key15": "yEhsANLaN8LgkMqp5hNsKSRDEb1GXyHZA6KVe2g9XfSSWRGZhMpFsYM4haFYzibqq11L7TG8BNpnr7ojNBtUSyB",
  "key16": "5Jirrzx9sNzpbcAN3hKCt2dSrZSAuF4bKrwh9BT5HbPF1ez55As2NK4fgiefnkJtjkf5iBEDqFkgrwYasbsab3Uu",
  "key17": "2qtd4MVyy5sAHufq2bxPEjz1kg37T38pkZ6X5tijEu1rUCt3MiZeKVFpX9op2WGqhe9Sy1BnWTMcMdcZ1AF8cvB",
  "key18": "3dM4nAfyTyrSqy1kw2zd25jeoVQ7XNVY9nCHS21pQfXhYA3Vj3vhxZz1Mnt4sJxTFmkR37qbD5bUf6gnuzBbMp2n",
  "key19": "44iJKUtt7DFT1yXxaPD6n7absVAXbMqausrVicw5fj6n8kyNCBhcMyduY8XR1sfdyvRG8PxVAWT1rmNVqk1nVh3d",
  "key20": "3TRqwPd7TS1A7anijmjq3cAFvBMhcH21NgQD12GsiAjU8NwUsmHdzcpS1MxKsijBqxsvXctdQAnbvkMZ5K3epXeq",
  "key21": "r73ksjmM3yB3gYdhirzh53tioxpNNTvtxAz3Kqc66UoAzdRqyMWx4ERdfmPZKhjxkDzeztURYfz6tCpftdFis9g",
  "key22": "3Q54r7C7iRuTd9Jv7GgViFhEDU4tWnBoHg4Pfwo8jujwBu92feTm3yMry4WSVAFUyYEMtLNyKVRmkgxyyYnYAQ3",
  "key23": "3MohVAfV6P2HNzMwKx2QKEwbVdibLxvdMbDUAqKT4wBNYxWq48LKX2h2D5YT1Z98wBE3s2bsVamfxE2TzFsPBqWU",
  "key24": "ABy8KKZcvTirFWJH1miaCRhugs9jyAT25AxfTkH9HHsifyk9BLPxZYR3mun2fo8hCeALMETVpsbbwA3n6S1ut4v",
  "key25": "2JFA7WTMzFaVRdHwJRUpAMh1ecXxmSae5oiNoiCpoLXQcuBcj4jUvcR3cw3PJFoDVKZztQs5vFLR4AieD7D9Xw4t",
  "key26": "CYra7mDZyyScZ1u9mgaNkWKz6wyHAfwmsh9qGB5y3hhNvUEDaKCDCELBhvaPYa2KvQgXtLuRine7WBYgsvrhbPL",
  "key27": "4oDmR6ugGwr2SPHu8DCWXia6CwB6SswgvQTdTJQjxn2fnfER21nsqW99m7Ck9TaN6QNmzqs6PjwYez6Ks7o6957d",
  "key28": "qS8aV1FGkSn4jvEaokjtU37KsTMGrC5myRvujsRRxFmHMbU4LG86PrCqiGTVKiLWbNdQpt14NZYCgxxFFso2U2A",
  "key29": "57JAruwxri4KujxXgHACYeiCLayUM8CVQ4vAktSQGrraEZmJvVCWygfy3neBdx61FAQuy1y1GT7crcaS8txDfs9w",
  "key30": "4kHZFZk9WnN1hEVLSCzRy2k1zu4xJV9qexkzd5beBM4B1ZtxYSzEvHfPtYLV87wA7CCohmMXu9FQEjji21xNLpJT",
  "key31": "rQZCufukdbT4RDmdnioxMQ9UFXXhiVBchpfrGgUQq3C4DguctaQS7EcMtoRQaMsYDR1LF9fBRAk47H6udomHMyQ",
  "key32": "pgufKhwPNARq3nf7HRb1uKmi5z9J7Pmp2Z9pophPR5h6RHNfrRcDpHwxSqkz1Ywuz5aKBMhyKWbTtwwZzG33r4T",
  "key33": "4Zf9Sf2nyzx593Gu7ShK118mLiyKu5v7D16DKd3FFP6jq7obDgysKzLQFmN4LJcfdkVRNKhNfZwjc3KRLpytUoyv",
  "key34": "4qsagNoYiqdYhXaKtEMWjrTMTmzxwVfZ6TE3DzjvpZR9XJZLrSJwTT33Zn6qsN3hwQws4MMuNtnyGPN7uMXWAwvS",
  "key35": "4x8MbArMa2AnLCMnQMyYGJNX8cC5HLakSHNYmzfAuVzY3CmQxMCnhbZAi9UofDPdzxaKm7Aa6FBgnDEZs6dpERda",
  "key36": "2D5o5SKismqsfCPHK1m8XKpJ57TPe4i9XY4wCDMVX3wCjLArtC1KzkK3j9zYEpN3K8p46VVKvtRCy2Huw3sKAqLy",
  "key37": "4M3Xp4aPN94zgk3kdEaGwTtyGeTXpnw16xgcnfXtQY7RKYyPMSsEYDLK1zfKNJxodeFjdKSETc9maofz2J2rrnor",
  "key38": "NvpXGNmUZoV4yxggeTztaVUbHyTBVozhskw4uhMNPVdksSArnfJJRNUrkHFNt1aHTm57MP3akb5J5Nd5GKj1LoR",
  "key39": "4UL6PKx2RwsXx3LUEHr3xxLm6qZ6R9xj3i73snE5NajZio5A5ewZuVpsNqKsB4GSiLiKZdDMfEs3AobU6yiQakXD",
  "key40": "2QDANHRrymKDNhEDawdRehutxETSyvvXurYBP7F6T55rktpFMw1c3YyYy8cMBmVCK6h5Zj3PWrvRH9Pa9dQXB9sG",
  "key41": "58vJNAnUoJVUxkoxfBJQUQF7A3vbEnNqdsZbRd6kd1Vd7hgMRqvY9mcp38BPkYh6cYTzNeDHGVMst9ibJGhPri3c",
  "key42": "46jWLMT7AsWv95vG4mCA7oHFMXZLfqXFoufb6ZgHu7uESdYP3hYUmCQTww4SXQ7Q3bifuHeLisXqbYcgd21WYRHJ",
  "key43": "2FneK2urXE6H8QCxoqV9R5x35Rs9SFN69g4iB9hvEpSMugR2Eahe1NEyAHs5DBJCqHiWuhiRLhun4aVTptm7o1U"
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
