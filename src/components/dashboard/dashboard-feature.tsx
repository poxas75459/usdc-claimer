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
    "4xi41jVxwqcsrj3J5oN1ZrGp9f7owbXP5kt7PLpwKYKDe3ByNrmZLBK83zt6ZzMrnBfqsj5yDrU3BnxoLbHuod73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z41YTy4YuPXosJYbmVWM8pRp8578SUktySPNP6JGz5VFishSofPS594mCKjcU5Dhf1qPj15Fskcgrx2qSrFRWTX",
  "key1": "9m1KVcSS7gdb8uKXRU5yAxTeS6eU8GMb7sPJCiTSeqdwd6H9uLLKfHxN2Z2JHVFrXZGBL9P2UBFXqmNfAwHvaKK",
  "key2": "5KBsyHQrn2XbLgGq9oZQm4CAcv2bR6RRXG5um6E212XbUpvGdmoKsHPM91itrmC1uaBBxJdb8g7kW3YLfENC1YVU",
  "key3": "Tq61FU4NDtjTCssKcN9sBJ5uAdTGTjcyeZnheNfyPLx3pPWzbrUcmJm2dMq7waBr1ezkCFiV8dsoyNFNUVg5tC1",
  "key4": "hqdEDXUW9uWkxFrXkcojFoPKAL4vtiMwkCvjQFsnXHZgwfjFsmpVGXiBrrgrgd2g7uW4wd63pt7MASkNDE6vm3p",
  "key5": "35qY5R7bdFDuUQBHTFojsnNEXpLeUddc2EqymYvN9pYS4YaCzy7fMfxJUTQKFgFG2wBEgSYgtjUzbVqafEZGN4v2",
  "key6": "6ozrwEwfa4cuyha2Y331RCRccegFoqWAeXWSevXSUtfofvVAXCuQGn5DcUXpHd1PKXS4vJvv1gSPi6zLY7UeMa3",
  "key7": "4Ad21zLfHw1eeZveUrfWQ9oAXrq3ZKa34g4tM4213a8SHy9GcHjFvDrBNXqUK2qb9iwpLgfuUp2gcwxU2H3AdHF7",
  "key8": "36tS96HWUmvnATwGoktTypFxN7fgWeGNYhSKzhx1JZ9xrjmSwvoAKkzexepi9PQj4BvWXtmeT7XRayERhpivGwTh",
  "key9": "ozJ9KtzhpRUC5DS3PaY7apA35tXuBg9PDDNX4S7grDNbUaoycYcS5qJMVsJB2Yi83GUrRFBUJq9E3b8tJuXsuBY",
  "key10": "5jZQqeGnU3pX7YUoWUexo9Vz84Scsne7G4LFbe73ZQj3UnRWuXpoVtzHaFnheeQbsHDC1ofTYjzKKbiSNfZbcrye",
  "key11": "41zuLCbgfhF9iXbhsMgLfVyTp31ZMNuD7vmADFAVXq2sgj7L635FMjqRro4M5H78HEFzkMzcv5C7rb7Gb4maTY4U",
  "key12": "5jVADF4SuYcyMdme6N1cqxWcjSDEwVT9Ph7q1X8shwmSiZtFUnwYYzwwsW1rn7HecXYH1Hroc5GaxpWDt4H1Vy7x",
  "key13": "4pNhNSuDgZ4g7JQUtrLfNztxYXzqHboBmcJtwLm4ta8HaEm49vbQsy9jtWanLvh4yfYqSbiemvMBuLcfTJctgwq",
  "key14": "4vcyq9HzKcyvD5SykHmmgAviasSNBwTKnf29mesSTrB8kK8FB7HTEaWbYCrvVAiEAgcUKXsPFf2dyHynVYPGouS",
  "key15": "3C6nJYBZpnQrRqbdn5fjiaPwDJMei6WHRyfJarrmmDUYJu8eYbB7ChWCGUG1Au9usjKizmxonMgiSeGq43DKpCLK",
  "key16": "ETBYvLkWSUYmr5uDFHQaycfjQdF6qowSqd1W2MGvPvTDKMmdwGed3q5Z2zoiygZ4oDkVrniqSezFaraxcSa5aqn",
  "key17": "4Egx5SKAKhU77UtPXWrM5SrYWv9CJA4mmUjTxVPhwcbbubBSzWoQtVrQYFFp87NaSktmLXbemTot2MGqrffv1s37",
  "key18": "4RtGBbwuvbprSsxxkG21fSzWH7Ar9emnAUvmhKv7j3tPL8yHH89UEJ6XTCmm4yYvD71TebHbSWo2babH7VZPD3VQ",
  "key19": "RKhe7fXiDqDV77HFwijzDyDm2ZC81iDem3jYWKHdgceMdNLYDFNb9WweVncHGsjUpiZ15iJs1LtEbMxajiUFfXN",
  "key20": "5J51syWJeSpbtR8x61iALF1ErhC8gN2o5HA1CUy5JVNNDLM8iNWzafc2csEivSj6NjsKxp1CWv4K8rk2PWZb2KG3",
  "key21": "TBmzK4uGnNxeb9XYSeqJaxpRHXuqDEFPVxamzWvPq3JqAVGCCtPzAohybtdWWJRSUjVQ6qK85JpcGdRtw5L2kMZ",
  "key22": "55oq18gdxx7r3NUh4ESn6tM4tVMwTqdy3SjvYGn7Y3fZtrJGww78qm1o3VS8hRBqPWEP43xRj54dMpZvywXeMNvC",
  "key23": "4EQ3fnJVxkY2Mh3SZXJ6gyWhMri4XAvs2c6eqUhBDYcCJn6QfPG6NinWBiur6Sxr8ewB1UiDB8BUvq5gEmhhDnno",
  "key24": "522Q5if4b9yKvb1VeUYAt59W4Rsqq3WeunnRD9GN7LGBSsoRr3ZddYFMiRtMqJ6Se8VMVMEtAQVokUGEvVYkbUbv",
  "key25": "2iADvta2a67HcVo5Pqp4EtYEYU6vZ6nYvyri3hFhCGpLtCWS1NwyjVzxKDx2R3ErgKg16MbbAPqxtqHpUy3zYrK1",
  "key26": "3Zvm8CDUjrxcqaT1MnNCLsMT7N6hAVAyEv92ztX6RaZwXiie1pvQWbczvL4KsdM3kusLv7xQ8u9A3U1m7CHpHTcw",
  "key27": "4NFWHybM2McbtDHKx9TBN3ZmQwi3esRiPuifJFxhdgeEBHN7z1YHyAkh6XCCm83dwL3viispnCEjHSJ2JuC9Fcr5",
  "key28": "4UM7Gk1RfjEQ8oD2GW7YxaTNcoeqxdtS9TKyF2xa9aiQczeE38UjL2ZfZdAmARWrhxaHYyP3T1YJtv1N8rco58dV",
  "key29": "5dT2bW8LvRipQPfhZBbNKNm566zZG7pMvhN4675sFGG8pajTm1jDS8UAxXgXjYfDh2Vo1iUhR1xJQECqHTEqTFsD",
  "key30": "39ibupve23GgCUQYuC1Rfj696CMoZHhR9aixQNE55CPhD8cUEoV3NdGk3xvtWkv5FBLebCAoVwZ5BXk5BT44pwK7",
  "key31": "2NCFd9jZdpGRuuedwqNZfZFRgPTVjK9GAYwrccpufGUVqd8staEpVRX8Su8AwbeNoNkRXjauG6hRytAdaUHGLFTL",
  "key32": "2DampxxmBoq9S6QuvWtDEWDNHnZk86kG4XmwYzacAe5zG6vV5eUA36U7DpBtSs1KDwp2kYc1ePRg7SAjXEM2nZb3"
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
