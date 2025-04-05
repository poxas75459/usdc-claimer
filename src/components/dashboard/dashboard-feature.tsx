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
    "3zkp2Vx37W89VmkHxMLxsxkeuGPaEH471Bra9TtSwyBj9DWbKRFCSUMSjRzWmdJU9c64ENTL5cwaw9sBJrh9yw2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bf6VTTjPyjmu6U68xmCpMu9usESA1hdVpWxyAU43py6yrNt9xgVQM3ywt4veKw5dww1BsBo36NCuNjDtsksCqVC",
  "key1": "2B75VC4svJzX8zyPUTtYHoujATH2EHHMvS7d3bgvWoLixjpb4nH4qN54C3oDBaRuho8pwQvFJpPHxAHG9nq8hfFo",
  "key2": "2gw17L5PDxdPPYLR3jaDRPPYGyvScKn9TfUTtsSFLh7bKShj7X1rGGXfAqmaseEH5xEYMdjqNPEb61gq1EekqKyC",
  "key3": "tDFvf1myBoE6GaCfWS9pdtPeAKDLio8EPMAE2ryUaACD5zjojVWgkXDK68tdVQ6RcdCCaKnxMcV6jVLT3bAejic",
  "key4": "4jYjE1eFoBU9g4pWKy37ULLjJWPMuUgJVK3HLnLgNKkUtxDFp8LRg2CzcaqBSYWACssXNC2coVuaTzvKmMGDtUjJ",
  "key5": "4GkePHHX1JMAo2kiQ7XHNdfRA8B4XczCNUdzbk7s2Jrdb5ZQNNUkL1oHBfV6HDVLNu1b81uu1FhD4c8YEcpze9yQ",
  "key6": "Tf1xYWZ6Vhbw79uUvNATngyjpX36k8cfxHZGsZa2aRCE78JYgVyxYVkd9wLMmhbgDWeb4Ldhorp7WkbcA8uy3fv",
  "key7": "sjpu3EcrLLw1JbmTSihwmJsWgDwN9qdP9qAW7VPyQtTYTu5PdePCUsgKNowzFiFLnHEVtXmPUeQ5C7u4unM9S12",
  "key8": "4j5KJNHarzPubR2x2fvncwJEYhJxnUnk93dasB4SsDV3viSSTevmgHW46mmaU2bUoz4frwMD9c3w5dRueGMU5poy",
  "key9": "5S2po8yCQLQgk1sGqCiWJqc9YgkbDosXokvEpj9x3aE7gXdzUwqjjt8cAKBw8Rt8qqXRWBsFyi3RNrgeHuebvbn6",
  "key10": "5QrxU8BMpdzRRonD75ht4GqF3UMtZyz1PLDSTQ2bb3mYVkVyTwTkh4Pp5uXugkfyfqSBUSLm72ZYmNZMo9xSaqj6",
  "key11": "2pUDWRZZNj1FFPmQvF5CiwdEDSoXC2iDMu8LA6KnGwLbL1hV8dFwgzE8mTWJxdVL5oBK3YxcbnUULWgtVvNiiD4U",
  "key12": "3czcrV1oaB3W2BnX6fw9yHdHMX4Lc4AGm3E4hDv4WAMDqMeBb5UNjScfsSPaNuzkT5TLdkZWh5Lsm6qG4uH43hQB",
  "key13": "ZdiCmqLYZwJGAUdB573meX9Jp69WZvzUuT2xe3LTid2BJMvKXjb851h19pzkCG9eutCFUuD8yHYXmf1Evjgzs6S",
  "key14": "5AJ5JbJvvqCgsxXW9XsRvjZhJrFifmTZAqrX5xWZZTyKvvkuL9ZysW1iBRP2bf5KCZfFrFpAnbp2RrCTveYcs3gj",
  "key15": "D55qwK7ika2tEoSPVUKifDvgp3Vj2CPB9X26dKoCws3FLW49eiazvvkCqvj2e6LBTSfK3uSPCekvY2N7U7fSHEL",
  "key16": "59F4AwEhMzLoXieSLxwGTRQUpN5FvHPSBGTfxiJGNckqWmgnPZ6BpRhcZD7ecAiutRE9kXX7n91bCxyEqcdcJg6T",
  "key17": "4pX1NjXqKTm1sgrXVmZbzwww9BX8euu2ZWuAD2osY26nZjiBKr6dre7GXkRuoRTGaWYUR6NR88u43QzBthsvtBYy",
  "key18": "3yfLFLj69u2tePpUFVVBbfoSRbCw4H1FTYdpquDPgTXeLonsKFYcUnBWm7QkNRXKfXwrMD6RpSjUgKQbyU2GKKUv",
  "key19": "61vnDAT2kirs9UwKcG9q5MhdvmdEpvY4R279jj5ev9VNskV7JFpsKYs7PXFQU9QzXpCgX8A7NKaRKV7QRNDL5XEj",
  "key20": "ZfyE337zmCVjUj1VqaSo9LoMGX4QjuETkXNLwmkp2pJ9xz7yaAeAur2psVYtxHQ5fTW2qzM5NShoqeBay4of3HF",
  "key21": "3keWgxyRto6ZsUgDF2niCCMNi7fcY3gnyiRDokUVChvUNHREroBX6jzc9vNmYAyKr92FrTwTqDo36nbDvSBx8mLG",
  "key22": "4hrFhHzu3JUehGz5Tp8tjyZWX7cCBs9NJxmcHu94gPTigbjk1rjcXPcfHLWhM8TxvdHgw7m7aR1CVUafpDnNrvJV",
  "key23": "2YYwHjSqrqY6APNW5QxR3zKrsVwhEioSwKtZg71TSJKXkS3i58ndRESt7v3Tisv5TGmkmETrbY2NAxB3XehWHmLg",
  "key24": "2cwZ5tTUUPY3ns9VWs4Lya4TTXzKQPMMcoDxXFhwyNPB3UafwHwVHHBFPCFDAYSxHW1UZTweza6dogseeKtnXa5v",
  "key25": "2HPQMaQTfvQVwDEXvTzMHfNN5v3Ejm8xmkUq29pihExXwLdVnNKZmsJM45Bt4FdS9auJHkb5kQtvwLgeKBWPRdNV",
  "key26": "4DNj3LV4LvU53hmTpURvsnsdGTk5KmrpBiA48GLxD5U37uFJDZqWqBdUhSioD2fbYrksrts5G4RfXazhNVP8DFZM",
  "key27": "273hgs15sV8dYxjPF5XQ8cEES7EPbwP1v8HN89Qm3RV1nLCB7nDnd5oVToUP2RuTRchuJThMJNdVSyUEEqEG46qo",
  "key28": "2KkG1Vs13H3eYtPVuuuci6cEt8vy3v1xQbgExhpuaHuSXMDJFwDn9VEfcFot7eeRfwGAdfo9kGdF2yxhXUXuw8s6",
  "key29": "2bwYampjBAdJ6irTX2RFnHAA74sPtQzYfxAJqcwHZT2Dh6CXCDz3Lcup6oU2JDKHkVicpaMrn5F2izS6Xv4qpc1P",
  "key30": "5kXFPwBx6ETCfZh4cMfsFqX2S5wMQoiMmcHCNrmbgBmSjeCLzzjdxKKK82LvnUo1kGsxH29BDMJru82dkksTgZXi",
  "key31": "3SuQ8wBL8AdXTTh5w1srLEbrQcUfhK3Z6Nz8BE3St7fqFy7YJVXnZKc3SnstVyrr2927T3tvWVupgvytPHXfLsp4",
  "key32": "wfsfxiHYPGUMrSm8eV5ZsqqEbd4Ginbz7JpcSBfqEDSDb71KdN7apEkQkeMSFgbhSZpCxuFR9rCNJ8gwoMVffXZ",
  "key33": "35y2hSYCQqFfMRpLvY9eTUse3nDJc6ErANjoRrAJ1hMgtCLkoNCZmEciAtQEsiqXPdetXGtoeiYWcxddiC9JuqdH",
  "key34": "2PoW9Fz6kWRS5LWFKrpZDyWjsCHTvTzQnpyKoZYyFvFbPHzvr4RhJVjuorHVrDwNy56pUVPSuooD8bHWnNBktXRK",
  "key35": "BJgZPq7nN3JvQSDDwKDNMYoR6JcG4no9uWPKEXYHJVBppe8x8UaWpCq58q7JP4LUE4Umciu3KzZxY444qg3BGU1",
  "key36": "qyiSciSnVp9RU6SoHFDNZFjn6b2asxbuAtMXJU8tuxQNPAykGVLBdNbk4TpQCUz8CQZGhfQZT5uCdNb7y9gfsnj",
  "key37": "3zURPtR3XRAs7tnM46Mwz5Wzz39ivsk2k6sKEsF5KJzayWFhV4WNvFvTUCCWvSMmJnj3uvb5qAkYy6k8U3LW2LYV",
  "key38": "5du89kyUAn3dbxcxMWGfsvCaJ36X6XChuzVAq7Dk2HKvjuTN7JMSQGxvp7Aut7eFzx1gP48aZ5Kmr3kYg8xnzTDS"
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
