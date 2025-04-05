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
    "4nNR3Q3MQPPMva1vX5VSkYQ8LdrvWPeq5ETz6qABXuxSsoDyRpRDnKGPUiB5WqDjdNGPxfXrjGg4QJndDArApGqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hZtiCSfxpJqXWeW9JZj1P2US6kit4TNpt8v3R2VbNn9ahkCgQ4netWKZNVjzJnG9wTmR8mjfDChXwVWAsHpdatg",
  "key1": "2Lav9Fj85ntcmMXLqn9Xdg1y1UFQmU4gV4uA2tP1F3xNdSaUwjb634u8439Xm8WzhSNEP3v74PbQ9yG4MJhjPqH3",
  "key2": "4uCSnJKykhAzKJhDKrBPquVnaGXK6wXS66FwAxDN4LzadnTAnr4wZ4PTyr5QRkAgs7h5jLcBYJb2SMfSWCDsgdHx",
  "key3": "5udAYQAEsfb88uxRDTm8anpHVhDhrmwGW8ZGKTXBhs8RXhcmuqBQZzeDH4vRFWAeVNe7gCHKfJq9Q2s3w54Q4Aw2",
  "key4": "QA8TwX32QAYB9oQFdBMkhHPr3ETTEvPaCMbbFQciPFAYHjYuGyDYPC8df2UmynXR8uGnbDRW9uyMffZAS9EPj9m",
  "key5": "4KjTvcaUsyViqE8DMJS7bM6DnBCq9UoHT7PfQbDLvZtprCarGTXTBoqwoakNi7z5p9M3HTkmtrq7SB8sLqsB96ZT",
  "key6": "3JMGSZtRTTLHF9wJA8ZYWsbsT2bofbTt4Avkg8ZtVgW3KSPp8JRvr4PhxTCWkismouMNLKg8VgUjex1LfSgikkVU",
  "key7": "5hzrw1Y9LS7UVH2tTSuiVS7uKsSJQFbXQvL8CxZfyuwv4fxS1iDwCd7JxfCXqq8zNtws3ReFTpz4uNCrETDFAFDg",
  "key8": "yrQkFfbU8tToWHGCpUwjyT4AViHSM1PzmUTWVTNh1SYa8ZJrY58pf5tuoT1diw2kG38PE5YtPh9GWSk1pB16Rj6",
  "key9": "3CjWNNiWgMQqT4e1rFYroEdH1ijbbrCatfFeFogiRtfomXZV5h651QgSkip5xChLErNx99fa7wJiMuZ1KKSvrEq7",
  "key10": "kYSVZW8RR12QL1x4BhGEmc6GJFbKViugE52U94827B9GcZfCxG8BJSu7Ey6kdaZHYGjMdSZp24ww8fxa5i25Z24",
  "key11": "3y2PxSyeK4VvnBGx3R13RTMJtK1PUa3PXFkCEk5UCfCECJR5krmbmuCeutGabwEZH3gPpDbydkagqnUbaBoyyrEt",
  "key12": "2P7kqHuFjwjedmwyiaMrf28gFa6T7RaWwE1qqDUQNAXfTBAMCcqrjMTDCG2PEMU9TYXp8JndJKLgPtjMawyREwER",
  "key13": "377Z4xoVnRFYq5nE6XXx4HDYqG5ZDkt4PoXmcWxNoFbKs5cDo1sDLJcsYHB4iMtZNog5LX83oxSD5AK7ciTKdbM5",
  "key14": "2UunFSs9Btz1xa2vspMs9U3KM5FjvppWVMbQ2iiy3VG3TjxZ8WJ1sTJZY7j285k5uZp6rfzrGeSDDcnvZj39X8u2",
  "key15": "99TzfgvhAtPKsbMUw3hFzKJRnQoNVPjRFKy2x2Pt96gVjL9HEBRHwAX7EzZ385REBFYXBFLC1Vr7AkL3U5o87Pm",
  "key16": "4sLwcmew3W3A9p8msK5Yc2G26efNhoHeyBiBoV4kChwJC5KZbPnkjmnmCeuqUGVTKDJYnNfKjrw4RCV6EbeiDzJB",
  "key17": "4nAaBo6avmGeTtNW4XFAG3X3FTVfk1B7c1TyLHCUVU9WBm5JHE1stEGQezaNn4xVGZiyk2R8vfrKpGq45u2R2wfv",
  "key18": "sZaWEGEWzo6wjwAuBCUarESNKdts62TCHxTVHpgVMuu7NkzNWEqrCRit1qbSr2sijgCe3m3wGCzTs9mStAGbQAb",
  "key19": "B7pqPBXT9JiNnn4Df5S51YMhfQgWZQjm5yuHWLxUq61smvup5YrrdMe4omUq2aG75GyfTknqFANTSNj6XxCsFBS",
  "key20": "21KP1byMoaWhgSHAinaUJos5HqxNJEaYQ8vuGwQoaYi4Uk7SQ4eNGpuT1LLq6sduKoyWzgrsPZbawfwirZdaUg1L",
  "key21": "2WfofhqFMJjrKhgovYY5wQZke6GL8EPCU8n2AN36LjarZtyyLsaLo9knNa15LbCuNcj47ZU4v2MtHKkxkvp1VbXc",
  "key22": "wcyhekdpsiW2wbGNxihitJEcWGnEhp3wNGdWddmDgdGJwHRax1aEPFaZN7EwT4Qjt1N6rj93stUu25nvRRJ96zM",
  "key23": "2LrZKAtiyyb5qCNfxgv2NMXwzEJJjwfmEigXPDc452KTKRSbc6GpCoLwpafJU41kvwowncXjoHfoBUgXwtiFDq56",
  "key24": "4afsErAgpsG9nhK9sUMeoPekeviAf74DNWP2ETbSqLj1RjHUrG3yMSw6JWYqEnR5rhGrfbS51jfLfXCCPyxcvE1e",
  "key25": "49RLaX4BwsGXZL1JSMBaR6p3qAaasH2jmcQ2ayvfryGFr4ZHmpYrAZeW7fRb6QryueiUrubbH1LcdgyGHSadeieV",
  "key26": "33yRZNUPUGpMhq37A7XfMaMt9vRM24bLCEdJFBZFkFdCtvzBj88wmMnQCuAyZzRLBTAcYdYpCFWzo5mGCaaiYoft",
  "key27": "QErwmF4xNuLrcbcQMgPaNtJvapc8KFyYGdjcnydt5rhhWSshFRVuwwjDiMEe4xoihygCTiCPv65Cn4XmSSQnVdL",
  "key28": "3e3Qv2CjHCeqWBg6nasiGQNkUABcDj871SMvaBjLM6L4kbAXwztfKHQFZn2ZraRJk7ZXxgJhTK7wtqtKjqp95Vws",
  "key29": "rFLHsDY8o7WzQdJiv6KW3jE2sbShX1XSu73pg28vqvzULywAWq28mvNv7qk8Jpt4tFub3HPtWJndZuaY8bBGFHm",
  "key30": "4jKNFxfk6MoHrooQTQyrsZhYkJHxDSqTAhfPHaNjWbAiAcxt6k9waeBzRiz6vhSgx2LBSUaQwAqeEhmfmHtcZfTQ",
  "key31": "3YsbuJ3YrsUHanbdhz1kMiPtjZgzy6NJdAyCtvm5Ve5WZbJbQQ2ycDCiMGx5FHJW6WhJ3S5zeaQH29w98J2mcoTL",
  "key32": "4bYy7dBBfzULSBiDNWgtagh3cySARBaUewfERUvxfTaw6i3tPH4nm7msnWDsF2MidrG2jehEbiLkMvReVJuzKdJW",
  "key33": "2mArUADHAE7MMks7SHo1oMU2vtfJHnYJnUU2jVf1opSoQDZ97wvMZXhTNm2pErN2efNR19n5X6TJjQNsDqtrfP6X",
  "key34": "5AkoKuhbavrGMR3VKHQ86SHkQbWfX7cdwFavA3vMrZKsffctRaZmtKswj2HYZU4N61a6j3mU1jNsrRk7F4NSrLff",
  "key35": "5h6DrmyetCAhb5Cu7frcVUpdyKMAAcAQoJTkzXDotAcA97NsemnHhja77MKQhnGejkN2WAPCWDK3tykQYED37Fks",
  "key36": "3QfqJTiHUEPdUx4D1vy1iEuPhuQ5Gdsi7vJ7nMG9CxFyfAHWLZQDGGpGtyAskseDrnBfwSPomNK9ri4ju4cLQWT1",
  "key37": "4UGB2ege6NLvYHCY2MrGQEzMLhUZZQLsMsfKyRDQrHBc9hRJZYdrQWWxowbj3yQ9WtS7qKYNNkhjTuYzCe5bCF2F",
  "key38": "T3hSSSUu3kRu2Va5SuzWvBMSM2RspXuA1HW1xjtY4zzBdNzEARQQ8D84fLvfLDkW7BRtWVvvE6AWQVuRasSXPRE",
  "key39": "2VL6uhcJcbERWJknAhLbdJXaDSuJ2GBWBJ2Ltaw6MGMQS9mxk3ZUq547jv4AeBuxDhpQ3MNk5ft2rLpcVYHF7dtA",
  "key40": "2k3k63TwRxtdkacSfQD39ihxnNQCsBSJcBXGYX5y9p3N5XwNCAoeNxteYxeZsMTJSYbfDJbRj2TzGuDuWeEcSzcp",
  "key41": "59cj3yy2PdpBrnh5oHJFp4wkrRgKjb9fZDkwBDUy8LrDP3SxVF2guNDj1Rhh35rmo9pKcEwxvmE587KurALa2Mhq",
  "key42": "4mZUnuzhbzFw2zFukfSm5TQLRR6p2s7tFc3vreEiqdYiZGKZhHkDQfXL1qDwNJsLawgrpNSh4F3naayRUTP63XwH",
  "key43": "3bkmup3yqFRaE1v7dZCKCGbX6oBSXUaSFisUUUucmXxiNWHcZtCgdrYpnWMUfiPgr71CFyjvRGZ4ZTceTxm4T9E9",
  "key44": "4zNfxPe34J5j5S7GnLTvRnRjo5vDe4x1g4EkRsbGVui5sH9hLerfbt7NVkQ59MRbapkuimZhwgt7V7yqxNDBPGHG",
  "key45": "2Nt8kCoEMiU4QEayf24bPgrqgRs72QKqbU58dBJfvnugUQZazYpr8bA8a6NDyUVuPoT4EE6j3cmg7rmHg9T7qvpi"
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
