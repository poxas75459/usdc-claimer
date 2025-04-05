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
    "3oZxAJhEgQcpXhgDueRWkVUHi2krv9yENRCkqHBxQPphFjUu2ht4v5F7a24LCcfiynGoJCBjYkj3MbDZ4hJ1je7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YAiSvGAtjEdxiHG2HqT8n4MDZp1YKUd7K2cvTaTkStFBDgqg44qMZbdLgPc4ye54523XjhvMiqWviYE2MidiZj",
  "key1": "4JPAq7hovfmnGbvGnje1cVpLQKpitDJLM9z9M2FUacW81NgHL4B6Rsc9f9dUioSg4aSDLyDrS2uZbCQcsfB2H5zX",
  "key2": "2KBDhFRhocNQWn2azdmtnixELoG48K1DUhsGpqBtDNaFSGijscYKQkkh1WPJ7jwfraLjYrBAai13pRbjPrGjLGam",
  "key3": "475PNWSDfjm3Co3H4fshF6ghAymGaQFTexUJ4N5LJDaKBb7CWbNYK9zGh344GriTPpfJLiPoHQ6CVTHhp6oT3n76",
  "key4": "5iTi5Wy8Lcii78N5Cu6iLKF7nkKhSwWVMLBhQ3DEZfdTH5aJDq5Ei3MyrhJeTnz5EAAmj7g1UgEWjMcwRcxCvQMZ",
  "key5": "2azCSyTSCkGKcfvp4x9uDtjYTRj7FYAqyDbefZm4db3hpdwzFXpcNAYoMUMdkbvEk9HZgTMqsZPUrRXVbK1kKKy6",
  "key6": "3m26MW6KSjJw3z7xcDSUbqnQSTzxcoePjL6qyexFcjmFTbCJ27oceNUAdCgddDtteWxm1PvZ3ir92LaE7ipS7e4s",
  "key7": "3ombSgiqNGgtVcCqakuadcvEqxqo1vCcFZ2DFFNfvy2HDMnXReKNSaXH9WNJj6DEjYtY4CK2pJQCFPXniNCCHmGk",
  "key8": "64GevMLirR5Hrws6Miuy2bHpMbfsjK1GsPqBTpLxLnUmTK1QacciEaws3ghtBRG2GwF7dCEsNZNNoqs7ejtPf8sY",
  "key9": "4avmBDMrfxQA3bvCPm1ZFEpAoVP1BPPNTCP1tQSNpg8JES1eMoMJPnyWAobWoE22KLR986tGkgR2uUcictprZJL8",
  "key10": "5S55pNGnh54rWy32SJUr2gTNTmqSyfQEHqKqEWXa2ZkDyhE2Ab5uu3qwJY8EP5z2UJQ63iibEk1DhsssrdgKLqaX",
  "key11": "4zbRSXXfojyrBJBR84ezqKFnerX8aiPoLYAfv4sqLBXdyN6DFNVHZCgRopgLC5CwiPG3wcksz3yqRRzJxcYhEEaF",
  "key12": "58xmAddZbBxU5yLXDv7hCm2QLHoVJGMivJqwu98P3FrrVQaRqQDCRcRx2QbmVMJwyDNm7xkaSSboMYocKiuzUnip",
  "key13": "3siq56bLr1Ubwwmuty2GH8RwfRmVA4KHYZhtcm1aDWUVNMGNTZ9qmyscTezx91piVjDX4EVuTWmhEtBGiN28UQgh",
  "key14": "2SGppskGzAKqcRrMeXWkPFtb4DYMgPjtkbubQxPyhFgwdbszipsmuDATA1TETmXm7y35gwJAQ4o1psrTeqkKxjVa",
  "key15": "2tWTg8mCJm96fZ1KcSpqH6LB3UXw2eHwn3brfTFUajs28X4JHmex7gdEVNLggwUK65KiJC2e5RC1JUvwiHA2FfGS",
  "key16": "4JnijWAGnCJUnjBqy2ur2pzTQoqjqDgQBSLaLizMN8i9XzJ6f5Q1EPkoMkA4c52gKRFi4dLanrvPDhTzdgy83jt1",
  "key17": "EwsKCyGowhShJm2oqGuLneJdJwjSUdgPgHDMStZ47yU8yGEhshAvKEG54QRE4FbB8LuK74KJ2zWQ2rUvQP1XGma",
  "key18": "3Yz1oBDfeJ22nuZ3SD9vqgrAgvgdMpyxe9YHEPZNHVXMBuUTTAv6b4XPE2KQ4yNsVfp4END2f1af2qU3JnnUu4hR",
  "key19": "3ZX9Uk3iqmPisDWeykG9AfUsArDMPYunPZQii5AsY4tb4e8LbU1hX7g3xaDnDgTVPqhTvbJ7Jse9ok8LNpe8QFTa",
  "key20": "5JzzHi4HQXoEkmt9uWrGm6L5QTDbvmfyDQtsExK3tThwvcxm3P23ABWUmWe7tnD86jT2hYpVdsNDdzhAdz4H4rRe",
  "key21": "x8BRNnC6Txbi37uXqMKNVQBjgRChmoEimVAHiu3YrV8Rv41uMiTLefGbt2Jf1bvUNgk1FAf2FTFQQivB2daw8PE",
  "key22": "3U4QrEYRY78QmAiahudUW9tw44BdAnehcKtefk1qt4meBvWYS2fGZ1iCUrpsCXtG6UUPJ9efwzQiphw1khzgXHeV",
  "key23": "4bBs5e3uuVacXEdqMJTFQVvfzsRuYhwN6MMFwzRs4w27E7JLToPEXGd8nKkBcdnoyJBJPdsqSQfBonSibSYcSEDY",
  "key24": "UyqfA7uhf5pwx1pZd7ZoTA9kEWwdAgjtBrsQUiSB74qZ49uBMjb64fT9PmEk2y417oZw7j8D1v1Z4Z5nYQ44Zj4",
  "key25": "2BU5dsAtnHkXN7XkpcqTEM5S4e4zN7HqYbrcysMLwHX5rPMRuQWNrVrnkcymhZZRRcY1UbomZ3sVzd3ULmdvfLwk",
  "key26": "3Bp4QcdHC5XXtGxcoMyTJckYddJaU12UqyCLxgsDtB1ZoXdWF5Y8HUsgqs5oCNJtVzkdh25ndqwA1CCAwKP8DpMm",
  "key27": "24iyFpXuB7FJLkjaa2hGWVRQbR7ePXJoHhtAPM31RQbZvMM4i38a4MHHzbWqTLWCjErK339G8zUULYKMsj6G7U69",
  "key28": "2NSgQVLFLzXTjwGi7R74s5zed2Nxv5jPe95HiUstmrDD8nEwyEeqCdbU1wV1EL5NHEaMpbvk5YVMg6r5HHnkCFHP",
  "key29": "2Ps8nnmsL6s7AhiUfP38WAUGyfCFRaz9K7364wTYDeUhNQuvhsRpFjDByRoUcv7kL3ywN3XTu49mA3M2sd3bscgB",
  "key30": "5K2gbtg4tYnXpyM855zvD1m2XytB4Mcs8K51J39wwu3JAdkAeZFgtGdNfTyGSJeuUrrhomamAWdRSUWYgGaVQdTm",
  "key31": "4cmJu6AJk3Z69pU6Rg35xXGYqQsZYAptU34q5pvaTPFGuigwet2ELYMaJkajPTKZ7bhwX4w6BbpAzWQUKnUynZp8"
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
