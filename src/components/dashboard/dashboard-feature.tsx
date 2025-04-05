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
    "3LyZcxaAoNGB5LZSjF2zcHhQP9i2qatbjDV4YoZhF16vKYtGcEepctL5FdXjvTALGzRjA5Nf4ku3fsa2fMybt4Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JmjBHeL5nYGZGh9byYhxtE5My4dwcgc9Fv6DSL3nWQcxAHx2GETwrYVzgqiEqUupQpDPhCbLvXdBgrfeauAqso",
  "key1": "WRmDtQeRLxWixrWvVTrdQHMt4tc3WqgPBYuDad9jcd3FA9RXp3eosEB6Ez3DfaWUnq8uNVGzpix35uYQssopeFf",
  "key2": "43DqN8vCfn6TKLBS6yzjqyTFCP7pSQnaym3AYrGB4i5BMrYmUmmGpYKtcmw2S8PCYTc1qGWgU85iwidyU7t6Ki36",
  "key3": "2bczdSPKVyhamC8BFNNiHVVZBjDYeUHASpmdZre6WfSGKJSUsoJV5LMPg2dXFE6ovznCydPDefMtCotvjDhFaLFe",
  "key4": "5iobriNSeV8RZ3wuskSyFcYUqJAADSkvgxficjVSZkiHKGRMeUoNCMcpXg8C4bP3sJSeJQNriAdAfH56FoG6ZqQe",
  "key5": "33v14zCmkYDLbFM33Yva5F3UCPkqxSqMYs6uW2tAuFSVhqmMiW2mvQo5BvVmJSb5PWqJX55a5g3YkaLmCrccngMB",
  "key6": "5CVqCmyX2fyLSaoHyD48X449wowrjVPCu9AUHw8vC3TNFUYCoSUqJzh54M6xUk3FzmfhyVK6a9Dvjnqcv52iorbX",
  "key7": "5zgLeENxVhHb98n7rcUfPaJNwaGWQ7B8g4M98QeXqvsx96NruwrczEiY2X3aAUbEPnQTTYgH8v6Xbi5PK5H2hR9E",
  "key8": "5wtmCJLGLKbsZDbvJ2SfA9g2McSYmEVUJrBjqK5kFBw3usfAcazpcQNxq41YgBHuFDctNjpeCCg6UpKPYmN3rNju",
  "key9": "24LoEPXmq1P5GZ4nALipUnQuJCf5yh1P1mAFrQ3Z3SskC13Rv2gXH4epi7biBKR1nuHrUdSHdMwJoxsHSG28XGFd",
  "key10": "4pHjApcjkmjUhgfk1pL7GfQuWBMSe8KF4WcB5FwJeKXEQu1yPJxexQZbAfqrNvvZ365h2NjGpN84ebm1uhV6gybh",
  "key11": "3EZE42nHFMTaQFgeKqx8n9TwotAyYYkvQ85zLAZdAb6Yp45aP1PcFWA8A9LVMkCjNhqdQMZ4jbwZMjaFXFjrK4vs",
  "key12": "5DJTPfXA9uPY9wNGNFxiX2w6uZ3QXysDa6rmx7Ttg7NCcRaT9JmRBDjftZSa9eE7JNXksCEw5AxezsTVMWYe1UX2",
  "key13": "4BaydorY9QUxkdxBBqw7CxS61jokYLnDXj7QjahewQbszQ56SisBhffjRHCYVzkoc491now46LVQfyaYtZ5qihaU",
  "key14": "fj4KbaRwLkPjkdFmrXtWGKWs3nFzRUKrV4z1dDcWav7MDEpXquWjAuSJ2difUtAdUESi5Q2Yg6AFQVEHDN13PMs",
  "key15": "2r8EKoSbuUACa1Uocxgxggv7eGZ2L2HtZ6ohZGnzLDUUvWAoUXV8TwvyZhTUyymt1XXtbdVdhmkJvjgqyeFzhV6H",
  "key16": "5JZ4GgXuoytDSoS3r2ZViYK8PCtxHcyNMebZp31zQ7SbE8tXQo9tLGFysmy3Dj43KaTHWYjS19fRG4LKA6qDxzRk",
  "key17": "4HJQSusrsq6y948NN8gD535HKemBFNZA1nU9fNDV12J9BXctqx66yZmHrHC38vkhCbhcLT5CxZURPiVwyJDuSE7Q",
  "key18": "43WhQBRcTqnaAEMXrdnUa6X1FwJz2jmnbcATNuiVG2GVxBdTp636bnBM4jD3hCbk6ZA8wr4jh3KCweCYFov2BaTE",
  "key19": "MxCW35bZPYoNNjCuLzUtNVBtB43Mrn2j6kH7aGTFFmnJaVx1ZyLwjzsXzHYJP7yKgid1hewcbw5f9ixVh6REp7h",
  "key20": "3ESZNYQu9FVoe8iq6LenfYi9eQ78TJUBwNLU953mvou7cmEucWUeezUdR2mFhXqYP7TKGZvc6pyQDYZzPMTmBDdJ",
  "key21": "4sARKnkrG71F9V1fqWQsPTeP9r7g893rn6tWqJi5kWQMVhMq8D378Xn1io1iq5Mq9snPs1JGtqGDi5Eerx6W6ptu",
  "key22": "TUCTFhCGAwdi8KrU12FUYxfnv1xi6EJh4owU1TLwkieL3KEhxFqGtpuFRsjGQbQ2n3CBv1TrevjDsdZ5GfXRUPg",
  "key23": "5LygAGyU8DRyuXj1F3nXeT4dsnKrr5D8Veqhk9tfgxabsPCwYLPdZ6X3zzJfGjmYwrtF7HyovW9M3gZwe8GuQo4J",
  "key24": "343bupDdrTiUTcRpWbqMgbTxCbBmDDmphqqCYCh9sdRVn2uLayXes6cpVPjYuGmXgAD9qL9RcH6rRUszewUKNtth",
  "key25": "3bChVVnMJS7J62ZUsukP4ebUPipdbcsBkuRsniCuYMskr7vbKSh3n6fkqnLd1YQcwmhWNqM5Qn2Gsp9i7Ro4TKNq",
  "key26": "2vHT97MEGfQMswDRnEe1ZEoifmTdHfcxEG72Ye9x8QQL9knWhUBBSabPEG5LADTbDmmtbdtFnXsrUSCfosBCcYn2",
  "key27": "2tyR8hSTEnhKPBFgerYmJByTYT7fuCqZaBD27iSKRchpkjByyMDsmvrpKtm2KfYNqgDgW9wCAVHPrxbRJB1tAKBZ",
  "key28": "2NJp65kwrqguCAYPtUfUGT1FXC5WfzonDfGCo7R7mt7Vq8PtJ7awxD9mFNgtDis9kKoHjSx4y86WFVDrTWvz5NZ1",
  "key29": "3cga8fjAF8rWsjQ8SKu6UEpHMVttVztJEdoXHkzoGcJjrfXeCBqPFkV3wX2SpbmVsZALTqBJTSRy2xnr8Xh3vBzT",
  "key30": "3dTHphWWUDDsiTUeTQPPtzzxJs17wUMyKBUFU51styAJBNbwMJpp4uvbiuF5coXqZZMdwWCTcSVqJ2hh8eBNDrPQ",
  "key31": "2fP7aq4Cz1gF4vigs1JAkmoMwwccrPZAcER9tKEC3yX7tqjtWgqs1nRQ8oCgbvR1KDNcBTWDTE7uGH27QRdizBUQ",
  "key32": "5X54CAFPYX5o4sefBs44Fdp3SMaJhRnGevfTeSHefMZPYiQ4yAoyTDspLvFKsVHzshuRVu8viLq2UnuiiZrg81yL",
  "key33": "65GeWxartVvR4PAZPqeuSvGXbtwcsZLBcAcce5ZKnoUa3agt96mXXgycaSt8svLcPSzmgzRkVNJiunUjoeDwLuJs"
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
