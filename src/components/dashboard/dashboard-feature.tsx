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
    "5eE3AHy5SJcJzh1C8n7giHWr9kVcins6kc44KEHBX95crq6c5erEddhURHcnHA7eVKaR8UMq7sHifxkMbibwr7ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4rqyLTUohtkSerjGVNFvgMvdSC5T38pTaLy9kwCY86BiWhy7YVunzrQmQTmLGdAYmS8xKAxtJrNqWRUurUenVX",
  "key1": "34g4wi4TEzL5JHK5YmCRSsJsrUPGUg1s9WWALU5uM6912pfyvdyD87q3EZwefVUXpGVvCkWuNZUH4R9QTak1zGk3",
  "key2": "5KaEJXdVWDEtnzRvabsdQVAFjEbNsddBZHjfk2NH6kQ9yESU9TYTjbnPN3ik7KJhhC2k6buiU7vpnxToniX1QF3F",
  "key3": "4u3Xr82GbDNpNoTNP5NQZFD1zA2RozFbpSWgzW5EpXfAsMKQ6K5EiYCDrozrd86cVj616HrbYjwwgmaN6WQsBRqW",
  "key4": "4nPSqASADCsQVBF9Us3JWbWXpRZ5NhRZUsoJnm2rweH4jtNCN5B8BqpMKjKD1eZmWjt52eM2evry8UZTKPj28yCB",
  "key5": "5RZC7yEfWskN35BTgNDqxASqjRUbekDCh528bgY4jpvR8wSvCmgugSbatQrTwy253Q1Enq62YGqJSaTb3j9yPvGK",
  "key6": "3stFsHXfUpKtLjpmE9XaK3WyguiPk9fLb1ZH96gpxFTUfkjsagG5pc152WP1NicH41AjZdYt71PfLym8PJtTbLuM",
  "key7": "5Ye7DsQshgvSmr3BVJirwHsbbCcawy8MxJdKj6nX6SdW2F3TtbpMZMfjdotwtzpx5iHemnfTL5YyzEFXB4wsTrap",
  "key8": "myBDNB4JYpUgPAYtWCtihZzfCkyDqNLk5wPAcDRLdXfmWNGUWgytRx7aM57s9XLhp9uheUGTCe45hqoTeN2W7Zt",
  "key9": "am359rrXtqCkPbfaw1QMbMewa3Rrao5w3zWsomw6G9P3pRobNNV9uf73bhAHkdFwNHnWW5jKTD1JLefxk78NiXU",
  "key10": "bBpX2dVGYShZvv4TFdHymHmPaMMveo9vGJYdZie1C3pTQ1MsGracwfM6zbeS2TCR8HVcNfMTcD6bni2s2SzSRzF",
  "key11": "5R1emzYSH1y7AkD3xQX2m54LAspWTSadYqL9F73HrTg2ynVN9FLMVU58bgZ8XRfQ3qhdWLGKpsNgZY6iH63THhwj",
  "key12": "3N4VynTpUcpj4VEyNVPfEZoMj8Gkgt2iedURK2b6n8J3Mh59w7ic99YH3oBGfdK7kiPCodceKxmKkSyrCkBZASKu",
  "key13": "4b7HeXHTP4D24YxndeESf9TUJaQimBZrQa9gXjziVsHrfek3yGF4qmwwvimKqCn91JeKPfUdvYvj8nwsocJLK7kj",
  "key14": "3eLcPuNGPoxQNEf54X5kprNPqenw9EWtvYhVqFfbHd8GU5nJMeYwyKXEZWke6STGFNNni9NCB5R9QAVs5pq6cqxF",
  "key15": "4Y3yZq13PeAi1nqYjcTJFPTgg7WPQonjyVW9NkoFJu7AW1wwL9B9748PEX3fcG9FVPwDUX4ZQHmAFRNGGV99Q3Pn",
  "key16": "27dNqB7eFEgSB8sNGH7CTgqLu1qqQ71aRdR3w2AKF3MD4PbECBFTuJ9CYVA7dfZf2gb2ZV9HZLEvYjJyYdCkNVFh",
  "key17": "WaG99r56D5itY4A3UwnH7YNDjATmoWunvYzF3Q7Jq32R3BrUJMEU7QPwkHnQrCNhGMnVBEfkqHRvWRwri2pABj3",
  "key18": "jDRgWJnsZ6ceRqgFbs9XTEQFyQR8xAJSSKgP7MWGHUDTeutNWiyaPPqQ9cTizkgHmvpwcjyY1TShzYjxvQ8gAhp",
  "key19": "4mvrJTyjsGkyEuGbxKxo5qEHgDTC9QgP7JW9ryEPbXi1d1cEjhoQjn67m1LeAVNcrfi3vkkjALjTRV1HPcuwSNvq",
  "key20": "3Hp9t4MuhJ4SuEyG6pvSG9DnSC98aqiqbHZQyfd4pbKUVk3gWLGYmZCB7t5QHsyroWKxhSrLJAHH5Rj8UpHQoEWe",
  "key21": "4CBmriCUvBGdaN3r3NLWG6TzfCfTQzJNMCwwEQdbMew55kd8Raw56JPNXq7CaH95fuQ125ef7ze3bQJsUE5g3ph5",
  "key22": "3ufZMcx8THgCNnWJ7cxMyTKTgRKR1zGSdDY5pNJeoApn7QJkdFM8xNGMSzygVQJxo8HejFV3ErjiRyxs6z9jLSdd",
  "key23": "5Dp8Js4xd1dWUvA9NVbgNsY2aD3tWh4XrU4krUhUvqDvPi4ohwr76z5Z5qPR7TmQ6x6FLM329N7hzJoMCFNkjSLS",
  "key24": "376oqqgoY2dLf8oRdT8XXc7cY1ZZzQgBtQQ5kFQXjJn4z3XPVBqYLrV3SohJWQqG24jRtJWU6x6c3awzRBGXAGxw",
  "key25": "28h8RFu9mkkP8SACXwDfmPy6sq4cbST4TCwWXiSKyY7a9BPedBSna9Aq4SajHRvCtJcAjNCxY1oEMqmFA9EY94gM",
  "key26": "Ma9emUYfmjhm9UwkwxdJg4C6gqq2ZULLcmKDiEgfSkzCJdwUXCtyJfaG6b1TCT3NFhXS5wwgjPQRJ99M1pkx4gA",
  "key27": "4fomCTJEnT21rqnH1a7RwBVpGghnri7tEhuYd8HJyzJuDqrdt9c5bgRCuk5xGhifEua4dNabCGvnZEdnSd4wixTM",
  "key28": "4CP3BVquogKoUG1dkvfGTSSUvzHRu7o4UdbDJP5ieAnUji8oWuLkq1xPtd48uUD4hXQSrVwUQZKCaPrW8fHd9gRV",
  "key29": "499Ttx5neG9h8qjzA9btFWC7mpLXXZW5HAyYGDbeCHgCeqHkdLPTmXQviEvyzXTbQmzms6D5qEdEU6nwZrY5uRUK",
  "key30": "4SHT41RL9remdmnVtMuAmgRQP96z7oSRs69rFSnWc2J84mMpidgkTx1WvkKnHaG5o2ueCjmtPcghShztCoMDVRBd",
  "key31": "5Mjx4eqq3MighRJKEVVEKp62AVyykWTYtYpiurrRwgYEagGadZTHGTMjDzKvCLBjQ1XCucKv2MyLPEdb5zVyeAPx",
  "key32": "4DguXa5tXeL7JgxJoWdn5pDkVWTF7BfFJhNbusHdBCSyEaa5bQbW9TdVY7GsUmPBiaN5bopYfSTqpWJttYAgwNF7",
  "key33": "jLgzUXqVWe3W33mRJfpuaF6u2DXTfJXBa7uTHvPAR4X6MNxNPqkqwt9LfBTjTuMth9hhjWePLMNQA6KcmQ9jjCE",
  "key34": "3CJgzZb3LDrsYSN5vLWoEY3hDtip9x249ivQWxEMUyUZAnEx8Na6S31Mavf1URmeEkysAfcezWVeBn3c3krRvnFY",
  "key35": "5LBXU7Sf4JTgbc6mqDHndsPptEWzBnDg5198Pocq8p3LL7xzkq3miqJ54MDFoVEtbkqhtFGX8iYHq9tdVhGxf6L7",
  "key36": "5Qp66gGNW9W49hr8hRRF7T6udxufs6xdykenkTzxVBoVLQ1TbhHLSyYGbJuqH9icfZyYj8AzgngrPYJ5RgMc9s95",
  "key37": "337kH21CVm2zGx6HdzJeFWcYfd6ACEAgAqFYJK9ZRUkstLz7KHghiFJYubYf1SfqRXkZfjGJZkzvaqA9g1brpi2x",
  "key38": "2uLT4yv9WwfpLVZmoJ2tmorwLGjBCkMjNVmgZoWP7shDXQEHL7gRZM6s3KW919LvsZyvfdChB9edd6kVMBXnsPQE",
  "key39": "5Z5ZUkEu9t7s2LTVENHHEjuCKXK6xzBc8RhcF2GiewvdRVGJWJ9padfQ5dsmamC7sTwxm9h2uVGRkNGmf19XGPoB",
  "key40": "33hmSpC4Ta8hxBpbyAkfbZHYWgHjDkZa5c2FzedSCVC5tY6QjNtHXvMgi6u75WamM3rSH1bmx8oFPD7YGV3zfS3X"
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
