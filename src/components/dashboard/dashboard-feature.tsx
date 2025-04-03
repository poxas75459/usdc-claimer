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
    "2BdcWaG51KhfY1xMGF5Kgr6SXMpH4qGGYL2DWvx3Jr6xgqSSpNtcewgi1VC896YFtUL1fNyGHx5CTBiUkBVF4Ysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KvNC8ABFRQxw3Lvh89fRdiXGStRx3aipZiQx1bG98YdCFbW21n4cF4aKRHPqxne5rZznD5GMdWcdZ36YpuoKZHW",
  "key1": "2Lkwhau5BEfuJHTvjLXYAA1EQSnou7E8FweL31Y9LJgAHJxqYxXVjTfPuSDUtVHk1SP5AmM3VLF3Qyd9VEncu2Ex",
  "key2": "5sKJiZ7bqgjCB1T6b41QRABnWoeBcqiMmWgTdeDM78VW22ucq7K13rrbYSHK5WQ5i1T7okh8vtg5BfvSupbNFEFY",
  "key3": "53beZvNonncSu7ij3baLtW8q2bhQX5bopHKhwUSznCZmbaQEHDiXA7oqsSgXc2Ste4sEM3y1Bpaf48hoQF4RfdGn",
  "key4": "5xpHBeZzm9DMSZmgCzVM8A5LowkvAVSttPh4XdVuVPf8xyNMCdKGUpqaq1h9oDv4kvdTVPCzY4N5mQBeD7QZ6oEr",
  "key5": "5Z2xJXKqZVfmPVhHciNYEo3pq5BqBC4uvxsMAnrvKmJNQWmWevEFQG6YWN6bkRaLDEbziz47nBLABquskRDEkM1x",
  "key6": "XHbvJwpV59JHEK7dgseBG6t2SuV7k24TXZLxXq4DbSPDiyEzsvaruoxhiBaugG9f1uTneoq7U4ALJ1GQgbwn6ff",
  "key7": "3oWQ1ciaJ4TmadbjDPyGhKEQeLHzUemNCieWh93FXcMoZUgZGHFDX5htHy2t3T4zRMaxoYrrxGSwguARSxBiD66m",
  "key8": "5ptjYgEFFdPFEhb1zjfowyMRxiqrZ44CQCPmctwsgbE6eRRz93R5bXSSA2VKBre3ZdWJfek8rtrv67Z84McgfuoA",
  "key9": "614MDhQxG1REy81UgvTrLKhqFAY7NCb6ZwXq9Ma55DodUExvjM1mKXhVc2cs5Yi3AZz9WBDhqm8m3FuvAMwGxe3R",
  "key10": "G6TyTistQQn7kqESHzmUMnuHPwhusRE72XPfrN3K4BAq3aZ1VCkyxQy456oWBT5uD87mEg6VxdHU3HPJdnS4xoT",
  "key11": "2CpBRYZZzYNJjncQ1ZNNsBS9oDmBy1Fb1V5CB4BA6LFcLTHz8RvuZg9P6C1cJe9Wqqybv3oi5fJ3KMPPe4jueKE2",
  "key12": "2pNUCkYDyvfTskGQYhWLfVkhbzk3deskmhmrS4bW6t4GgRe1139UuBuYHuwoFQ1BJJrQSo9zjSJpQQrhNyVeGMVN",
  "key13": "2vMmYFwFPBmHssTbujw53YXsCD8SkfX9MdnWZUB3gcwYgHCvMLwnpApKsy2JTeBjAKaEhroB4U4m3ncVk6aiBAhC",
  "key14": "ukLFwEKkQXQxkP7PJgjXARtC7Q2tK2unVGjz4srJQYwRMJ1JnsPpQ94iWoNwFt6bN5Yz5h9ueoPJBQUAwfqU8Ci",
  "key15": "2mGJJ2uVyG8ejhiGJVeWVd7pCzYdsFXtEAmquXxqjHjhCQwRHAusWwoswGWtF2ubAuqP5CPC7HMSY2ivipX7T251",
  "key16": "xhfeAwu9eK4u28dVNf2hPoXx8GxodmCd9oyeqiZXnUvUBYEgcaW3M2wMk4VbgYXQF7366VY1paPeZsAnkAQ5zti",
  "key17": "2XhE9QLesknkvuTanyzuJ7aiQgU7ix6kpZsv476tVbFULidD5CL8if2mCqYmBSGkETbAcj6rm1mbQEqs2xucWeSB",
  "key18": "vS5oKLLxkfoMA9zZD9h1dY7kwQbcsd7uz3vXbaN17FoudsEi5j1ZwsGgmh8KzphMYyC6TM9cVVkQdbdiL1gqLWV",
  "key19": "4s1Z8XJA3Z7Yitd16GxELwMQyoGmYiJZ5aAdmSqCBWBqNSf6ugyjJ6JQtXYzmYkbRqBNALLGUi4f6f1jmYBZBswb",
  "key20": "t3QbckjnjSqYmoFLm1y5xYohkT7KG8kWJQgXgupL1pkntNxxarwwa2BQuVzUsWWSJXJGM1DdoGX531M7Yc4Bus6",
  "key21": "5yLWXUAP4sKpQxpg3pQxjhtkKP86d9bQn1LNaUBBqmRmFLKHNYZ5DrRWDsED9rPewTPLxiia9QjPNX3pS9Cbjoto",
  "key22": "67gmNVXyqmLjZWui7YVCgSEQZcSnbKzWUsX3kcxykR3TFmp5pbWd9gRFztwzGL4LVrCTPK2mSTh5xQSKE2mGMfh6",
  "key23": "3xnWv1LoQPQvVmMtC6muZXL1Nfgh92woD9peZBtLvXPAvzhhpSDit5m7qAArCNf16ZpQdEQnmgju3D8zmMJ8PdZT",
  "key24": "2BLrycNhGN5Ty1HFzDNuxdAqoAhXE37wrRHpGjaBJxqJyFobvKCEDQTExagqQxAGgCYWw9k6NLUsr2hvje67HD9U",
  "key25": "hk7VofCWARTjEXZJoMeh4TmYYGCwmKYgC9EmJiPngLF4rfUoZhjC5VtCdfdgttRGzNfWYFvy4DDZLgUcQQafEdc",
  "key26": "2sVSd8oPA94n2sPmyCFJdnpwbqgnsDLEsNnugfvEUBo2hU2SRX1uasMH3fhtoKvkkWFNxAgAt9qWc291upenUqm1",
  "key27": "2gcTagu214ukDaf5iuwPdZZs8VbbNmqMCudzjJaAGJWn41WLeYNTssEGbn1BW4B15123DaXC1vad1jRbXeBrBhtv",
  "key28": "2Y2HoLwM2XjMXvmjXmxmBmjNe5PQnezK41fXQL3PLxuwpNZ4sve8RTpu7dfJx9TMv5gzdiJUGyjwkes2bNLiWSoD"
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
