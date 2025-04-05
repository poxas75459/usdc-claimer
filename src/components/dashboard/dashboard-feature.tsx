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
    "4gWbyXHDh4yQ59xxkS8TZSyQMpgs17MumniGtYbqpfXMDPv9ucNRCPny3XvxirH7wkbYNApgHS4u4XnTiiRofaPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XhkzRnnkidQZM6fjYVME38RfdUmjBnCcmtBMKLkRnKKT7kbALVhx6gteBAxdXQKjbA9w7UYEbnjaYdNEb8e1uh8",
  "key1": "3MnzhHz7GtnCmDfVYAaN6VMdfCvhR1QHCyPao6L311Zoutoj5rNAYJ1eN2NGGwUudGAtipSjyMnUetPsA6WzymHp",
  "key2": "65iPukh6S3Zib7Vj8tpBsQ6vMVwG7vQNWRRvCAgx8Us7K3D5BquTVM881oJGeC6i9oAKveTDfgTFzQDb9vUSwBRM",
  "key3": "53c1Hz66YczaqcAgCiR3Wpq1tsEtWQhtM6BCfPXXEd3pfosuZ7vpTHKLEEnGCxRebTzNdKX5gHfCmSrof68QojXa",
  "key4": "3re77BKmEzTEokpuXexkS9gJhjzBgasLnV6YW48YvCvbUmfKFANhM5PGQN9bK4fnzJ9sTFogTjgevxrVniyTNt1k",
  "key5": "2rdWjPYz8wWfm1drFwaCQ3UJykuLtHjFgLHuq82Sf9C5VgQE9JpLNVg513wBqYR2LgWmMZFcJNVmVVW5jZ39EPKp",
  "key6": "3ff7Jab6qoAGHdF9Cuop8JJQtgnDTarcsSZwCNReuQWi27qeHP8casYcsLSQxKFwtD4dDNJWyrpuDcHwExcdctBR",
  "key7": "4sEET2Yfcky2dgytcy8C1PKqSgry3xB1XBJ3d8JcaeVzLntRPJhncJLhVverronqsSbF2xq6mMX46BnACHrTsNFH",
  "key8": "59uzseHA2Q9fTR9qaELTqqRBoiM4pPGhbqoSWPwQLfVMFh2BnhBxTLUWx1cMuzcEhF1YVHeqDi94p2TyxyaLgrnt",
  "key9": "oUswDYoB7HS5HZqpH5tPT1wnRjiTQLq4iewaD49L4raEdtF1aUrhCTpnw2kjGfEfUFuzYE9zrbVAKBEJrBM7WBx",
  "key10": "5jt6fUXQ7vAAdobfHzB2QLdvKVEHqA5rRZbKrwuZ2hmK3Yq24eNzbsrVvLNqquY6QHSdLACTzYPAzSLvtXJeZZ8J",
  "key11": "4JJeFzW5q8W7ZnS3YN1SMwHwfTspFbeaiKp7Xi4WHzhsYswYQQ56oqgtfpyX28HJQYPXsDfR9merAA5FND87C91h",
  "key12": "3bSgvzGMy1R6v3uNndrWmzeVpwF9kNstMRhtPRmDoNvMp83UaZbtcBUpjofKdrTik6vAGaZRokuhKnHeLzMUfV9Y",
  "key13": "4EDK7rfGvy4NyuRG9gN612fjNXh7xjXkFomD7fsXsi3ohTxaG7PQgyUdHekPPFSNo15qpb522bzENbBJnRu4ukAK",
  "key14": "epb4iDjeuUQRY4vz1jsdgBbXz65Hg5Kg8cZRUjauTf14gUybviKKLkqiQKL6CBWNAyzJpuYiR867EKqkN1Sep5F",
  "key15": "3AZd8EReguVAc6U73XQUjstXVepvEDmScR1dz5bPX1ZeVGskppCLtdzu7tg3YQtq7WMdUpZCCah8oDUryDqaYFp1",
  "key16": "4KnJpmuc8GC1HVPZe5E6notw951sgLPNFR2TJchJqWwYi8TuDi3wz4LHHwvPKVgV2S8A5dkx1HntuWYoor64AhV8",
  "key17": "4mK1BbuJgLNCyT3QQp3RLZkY6DtTLXhVs4TmvGUrqHYJTpTm7ZTrZkJRZhG4N3p6EzJtQ497QnY2kY7XY6yeFmJt",
  "key18": "5mGSdw3gQ73Lg2rBs3YHU3CYGBjLfsrQ9WcJewnrXDufx2xHvCz4aeWRQjzn4NqniGKTrPEFkp8qVcYbMmKkFv19",
  "key19": "2WJxQYywi4Ts5n7ZoZn42wC19veDSLSqe1ZCVkiSdZXaqQzA12f9vmpgKUb6hVDu9zBfX9pqY1oT7NVxbwEUcd3s",
  "key20": "jyi3LgHZ9L3o1aPhweLhTcHAP4vncfWdWurf3nCBmZbK4c6r3YNm9PXeRPXevFT8aopmV9TR9KCZZZqX1S6tJ1d",
  "key21": "3T86JjPFqbW6D16sPfvgW7K8bChBQQ5S4Mzkz8i1bWLKmsJSUgmKjN9gGU1pWLH2Vu752sjTtiaXyf6a7YcYdCEv",
  "key22": "3AyGhCqajXFPk36qmDWy5kYoCa6hg6NUk6Crt8Yv5r787TVhZdvSp6kBZWoudEHwoRqwKJFqisC7RYGAByzJ6bve",
  "key23": "4jQtpE9yWf2zPsz2LRB9QPHgMdhjAQ59UyyAqGKsSnEipM1ErVeMVPZpSn78dEW3nc5QUKQdHTS3ec752sRbT9Ca",
  "key24": "3EvhSCK2mK2wyRkHmppw8a5AWBrbLTBK76por14aoqitfXxvJLHxtaqLomErxq1oZffni6w1v6icZsgm3TVLeQVi",
  "key25": "4hdSzyy8jYo3h7ECpH7YnFZoA2JMjVrMKGgSAEgj86egLnCMvcTs8QMMuX9qtfZyeYHnCX3YakUgbHbcwFARTajD",
  "key26": "3ExFaAJp3bccdnJ9qpZVZm7qitmE8uxeZL9RTmwV518bAznkvSmfivAaLpFSh33QR3bUvTpXmzhWRkapNRnPDiGn",
  "key27": "4Qb8HHCSj4z94in9X1fsMq9m5j47wfJvHSHeSKvy7an9s5rG3ymZRWi3bK2CNpWusA15kwtmaXPBDb2ZvpnD1ymg",
  "key28": "346FkViiSRHJ2yvNiCk6WXdBzgx6xWVHtZp7cr6myiB552ZWpNti8YCrsk2vtra96AjXUjE4EF8pMAbwbHM24PN8",
  "key29": "4ssgrqhmbCEvBfdghYjRyb4xa8BpUsqCUF6zhgyuWajgRBo1jakW9SMZXyyAuMHoYgAponfuXnUhuTNM2iSAzXLS",
  "key30": "bgUDvhvJvGAN9AYAkQNatP1wxF5yuCPLHKxQPfDGZzVAb7EVQp1LRSsnku6oQmKPcjfmxMvBBG4vDLXnaZxoV8T",
  "key31": "2tvWNTd16dYg1srfavm5gQ56JrRUCLiyotkYzmtEHVsfdRREBanLSKa5aG4MoJCGDBnnenynRzzswSkNfdKDKRna",
  "key32": "3Rjw2ZcVBAerhwEfzRKPUNizZgN3zYUvVzW4q15yDG27PKuiWYPihvE2w6dVJn85YBucrRbJ4bcadiRLWJASMCVo",
  "key33": "3Rtcvz9ScRgAGs9xRHRMGoy5jV9fxVuyFMHjJFPv8Ehb3rqRKjtaUJjuJoGpoBZGGCWsTx84Ydvs76LMG7dixVSL",
  "key34": "5gmUprW9f4sEAVSbEpajPEbZbuDe3CNLV5p8B8BHzHKhCfowd22tiTvX2JmouYMWUadkHYk5qDCigu9PBgx9FXTa"
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
