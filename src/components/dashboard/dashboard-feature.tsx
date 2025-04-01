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
    "57TK3qike93HFmWs91odAhDG26wrd3juJWuuv8dBWBHYYc9EJ4ZFnX6jAUvnjKxjS6RSVyNivAx4xBGGDRrJsXCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4XdHSjToEyvAYpZHpKGNPHkFk4E91i1o3mfdbbMrBZ4CR1xZFgMyfRidkCq8phVeGxPDyJYgqgmwGQqKothXn2",
  "key1": "3CnuVvSyghJzAYuQ3QcLSybB3zWfzipGvgTtnhSTATPGLCoKrunWp7VgZANzBVuRU49sA9bez4cDXf2FqCXAmmJK",
  "key2": "656F1HykDWdJJNGiPbZkDFaAcYu6Y8vqmfAxpqL5G7TCMQpRjbXbrV4HStXbiX483Y1GypXMAzXfcHPVU78cUZgc",
  "key3": "3n7wD2qXgQWuzXAB7JmzG8BLYLboWT61HpcaWahJwza7qKviXf6sp4jmG6jY3MJCCseo98nvLMphC64WXVqvoasR",
  "key4": "3k8WFomHbS8DSiwTZvaFREjmzKpHwUGUdw6qumkP8WxAZNPC6soLH21J9CZkKWferWde3W85Rh83kRadtq3nfc7",
  "key5": "2rEuuqxKVHDYvgVqMLJDWfsVwHp2NweSR4ERLitU5pna6zXkiz7hnUtbcaFWtHUpU61UoMYaLuA1LRz6RmFM5VWh",
  "key6": "4grPFwwSrHEwAtrxN3JYaPbpQUKTATWEPL2cB72ZkLu32SY9ASsw9LaWMztEG6dosLrvLxVbsEFG6crKFzruSD2S",
  "key7": "2PmrR6QMPwKCuTkMLRYrjykm5qRHRVsmr84rrNhPSvGUKZqydRpN2EESQZpvShx2P4zqehMzK5xptXfa87Z2ijRQ",
  "key8": "4yQjTkPBEGLhKj7XaCNxqDyCzxe5PARrG6QjnejSoE4NDk3USU6ZVFC1DghSmKU4HhSxJTF8sX91acKjU5SKy3sR",
  "key9": "5Gfj3gwCdCw9Z4iSLdXuouMyY97hye899JUNVrzS6KcUMzhQJ3aTbkZKWfUWSqH1BqkWefAQcMetjV3hLv1kkHN7",
  "key10": "teaZ6Kknr2Y7NZPjafgcH1U6ChVGYjVKtERZn81QTMVCTwnPojfcdb4EB9e7WukE6Zg8KgD4oKvcRqaL5z2LGqp",
  "key11": "2Zc7A2Knoh3ykDZDYKx8SuL88NSQLcGYShnYBynLUoHQ5QPZ9MFJU7BE5U2uYtA3Lkv5YhbBK4kceHicTzt6vPHh",
  "key12": "5DNvfturNUBpX76H4xVHz8QmufCVDqw7t42hR7dk2vQpDWvgJPzeTUgkBJvcoPKvU7KLGAs8XPF9MgHnBr3ECg7K",
  "key13": "2yFREEjUv16EjmqwyZ4egsTzK9NQoWB97f7BFzyG1kbLvrhcM9qSPUULaUDTQRHWVLebhfMLSgAR3JgZXB9xX1VW",
  "key14": "3PLDhWJATcYB9duG8jvfrTpjnQf5dvSUinwQ5xwjZyweaAWZ7qpAtNbUdvXxstAnq3dQskbxczwo256AD7QE9qx1",
  "key15": "UQoNwEyXNAngyGgbDEwVmuE37yVYrwRB6noLpwTuXfdw6QSuaFzkaWBz4ApTzcrtuTir4VJvbHUA9WWnd77Mi6g",
  "key16": "2uWTXtmnKUaijhTZSc3ovQkA4NVnjANK1mdUU4tfvxWGoTU6J3EwvJE9nhNBRovg6KvcDFKHtunT6kuAvbkiXfAc",
  "key17": "2tYyDn8EbKUZvogReVoHHMXpGUQqRSu7CiEZVPbDUHGt6ze3xm8XGEiMppZKzpUZg31eUUQKWEeLMWkEqhKB731M",
  "key18": "551o41wb3KuGnKCSkwbeQmPPKJiHjzEs85XCuNk8KuPeixNX4stkWucfXTRcNVsDSqYYhEcs2EpMMowpj4649Z5L",
  "key19": "Lp4v6SzupcDvwtnAASNn5GhtinewZ6kk3WhTKoH24wYKm5Gzj4CCwkaf5Qqv8pUWJRkjRmZ9Q3pa1ASUnVKXtnb",
  "key20": "5Hg9Edfeq2U8UurDxhuwdh5AU8V9LQhCXMiQYMyhEwuQpiDeHuGamsHPz6McuT6tggzPHQi4hTrzbDmyUcLrQ2ux",
  "key21": "4fywoS2L6iZ3mmSJARFVRjEnQb3VqE4aPDxe4Qvrrxq6cjFa2dc8n71cV54aE5XVgjVeYJWJiPSJbPqtuuB9UWdf",
  "key22": "27UPh7tEXhZrZKiQNaGgtjyta5GxLsFhZiiFz3vnVdJaxiATpREojQX7KU78Qc7MAATfzYTxq3JV5jsm9VRSxwy3",
  "key23": "4enLV7gCHM9vNqNuykkJZtEodevfKckXUFUrJkSa38LQoRu7BXFY61TvcfMwGx4dFvXx7qoox9dKsHY3v7enrsup",
  "key24": "4QYXGnYgstkfLsucXt3m7cfrC2aRkFY3vdKb9jJuBd65iaQWkNeRKAjvsykPfMXN9qPW52JMxMT7YmDdaGdm7nM6",
  "key25": "5ZbDwBUPaMWAdpSkjXhev97SW7bCszwbzcUmGDbCYY2uM6zgxNHwiEZ9fACivoTridLhDqBQDEv1RDW7UbeP9mPL",
  "key26": "3Rxu5keBSsbpg8g2grCRuuxNfUZyQdRFArYqRubTkGrHnpbixAqEmos3ENV2LGdvm4unusTdXASDe3miAPqaiuwG",
  "key27": "31JHRUsxF7StZhEDrmZwcaCxFnWdYvV97Ssr6brpJ63QB3i5zNWW893bbjrnMF3sq8VG5DN9EXSrE2yccdsD7ZXg",
  "key28": "4tfMfGdgLz6pe1SsJt8BzeASWvVWWaqqYwUvcmjruzmB3PGeH1SF6QD2DvsWh5YC62FymM5u4SskResF6odHqV3J",
  "key29": "3JSEC21itoWaPKF1gp8T6mmeVFuRAkp7DDwRFXVZeE3BjvMr7uzcJuedR7sJMFQacpPNkFe2UQaX52BGE3J77Y8Y",
  "key30": "4f6KY33CZgmcwQ5WiieEwD43kQnYynTT13o1tYTd9bpUZN4NESLhtSC57Z7t2vAZKTw85SGnxE7KamWQWCf989MJ",
  "key31": "4sB7cp4hYUdVHRKztzP2fuchY62e4Mk8wSM1YvP5iSpMYRiWYQbffo1KPBZu2f8xKUmwgS2fQ3wDbqYEhXFy1T9C",
  "key32": "5bMumo1ugtfkoL9isM7YXmPZpcsao9cxsSdEMa2YK7K95LqkkpQyEt6oEN1vftqnqNpb4WQbuCAMrLFF9SCU4Ykw",
  "key33": "b9htjDf6BUKEGnUqVZGnfWWUaaC7JGVbkwDpfQmUCZSKJ4AcYp9Y1noSNEyZ52t9W5T6SesgrNwfbQx2zhRbJ6W",
  "key34": "4fcJfHg8fnazi8QP44tjWARz85iLKoZah4DjnoMtE28SnNF1PosAa9qwkgX3PVBZUr8enJHQ65TKmKKGHRhV5rcg",
  "key35": "37ggbfPBmy3U9iXkYXhTqYsRxzGQ13G6L6YykJm1XQEpw3qihnYByqUU1fZJ5wHi4JhbxPLdCgDitcoS1deLAcN3",
  "key36": "2hxKY8ETzbH1R5wxxqNkFNT3r5sWA53NURGbL6A3cMF9FEeWtrYLkhuxqSEdRqWWqHpNPZGDFyUp9tkW9nyyHBh1",
  "key37": "3LJAXcEvatVk658NTtYXDoN78omufZwgzKFr1m7R1BuAcb6LNUXrD6tt2vagXbL9AgjQqx4qtpPjetEfK5wEAq3f",
  "key38": "CgEM6DFbcgQ3kAcveLqVouTbcPSsnkvhRqgqhZzaTHRGvhEEv7jzv4ps7aSCaYpCcQPzkQcU6bd3Dc2CRejPLqC",
  "key39": "2nSZurAWwJLVkXh6UQGCJ4MsQ5Up7mJjivYUTrioXNGm78uNpe9AMSUGaUg6cn361cUE2Mm68YT9MD4UkbEXjzKh",
  "key40": "3xZH1tmRSUYmQFuKeMB54pVkULV9JsxsuQdJavGuzevtwvUSxRcVHok8UsoYddaMLkeGjev5Rxu3VQzwBKcnahaY",
  "key41": "jF1wcxtZaFei1J2qH5A3RH5PmbBPFQSXuymD44QJknSTWZJV4GqiXQrfyVoACXd713QLxgVkKuikjz7mWboLvEq",
  "key42": "3H2hbH696cYDt8DWSCGPpkh4wfVRApGeqHH2gk1GXFFVKcULbrzRR9JpyvzvdGB5Cynabu2mrqeztVExNt4NySPZ",
  "key43": "31qgUxtV3xAoMnQc3uZvThDqGpg9N3fk7vCrXi8LLqWkC8JMGrH4MbYE9FNPkEwr5vKYATSXxSCVBgWxmxs8rutW",
  "key44": "4x9s9pzSq4FEd8Z1rmJB3vV4BYvCEtTLwpmonajUECAEoN6AAT7wgEvTLxeGgBWS28hwvfY8JS4z3X6NMkSCxXk8",
  "key45": "UZVj8S45rWHUcHSw1zZmgX7o78TvsPKiju466QNyC3Wpc2kGn194PrEEDeZGCk7dr4fVSMUu2MT1zV1KGchG2Lm"
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
