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
    "4PtREf6YuT6pevk1zfcg56HRRQy1tYCMcmGWHqmaShrVgahZ5deC4SgrzETUfzFoPS1kic1E2sjAMUFjK8YsfbgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u79s8Ssdb1Wqo5ABaANcW2SL76ULacdU21xecnGCDq5JkMcvo5KaBbeP9vBbr345SZTM36TGLB6Vz4jf7rxQQD8",
  "key1": "cexYQFMMTcwPiMVtsf31KfaoTBQDXKs1vtMqfdVpuEhm7GPadrejiwnheNL4KQFXF9hKG7i5uvj7UkZnciFYBZf",
  "key2": "LjuCsZZfpANUedo9HF6NAFQJ8Gvt51VexS5gnXcUFRWfqz6inhPUuXwk8pn54dzvx1stic4ufwUYDnJRmNNxk2u",
  "key3": "5wfpnBm6FTQHFTqRoYfPbTCwxBeYqCAX6GjUmRegbc7Ux6T7bG1yH9wx6uyfVvANZ6UooDiXN5LCodSAhFfquW7H",
  "key4": "4bi9uQTpSe16ZHm9SVQy1xticdxurwPdnxqCfc9FPt6RQmP5B2Ewmb3w5JRoBm3hu3LdHhKjeCsKDQpjQXfgfCXa",
  "key5": "3ugyxi9WAdVKCuHcPzDiR3SugAayAwdDMLnNPb1wvZ2vb9kYKxbbjwGuhRrRfjq4aQQNJCtktAJs6bv4DcYKHMkQ",
  "key6": "3iHcBjmEiy6ouqWEWcSLwgShjzUYZBhPX7LsvL7pDG3bu8CQbxrpe2mZNtbv1Qc2fveLUEYAcv1nMe68ZmBWTEPj",
  "key7": "3bNwRGa5p7TNwdyR6qGbGSrzXXicuRPukqA1VuuMa3eFoJAVt2BKhgs3LPeRm4HiZjjy5ttXdiqKivLb5Lj6nxBf",
  "key8": "3jxn24oXYF9hDkSRqX4PwzDqNFxFstd2pUyhT89LUWQWZ9wWMJu58cDbUS4RTHUEsu45ZNeQDTbu9b8PTuiMuTYK",
  "key9": "3Gb81rS4yUkjTAWgp9v9jAoHM8hrE1Hsfy8yGXQucAJgm79wVqDUkkc7oPSEu8QS8YovUxY3DxHV95JDwua6waa",
  "key10": "4sWssqXKuyF51TAVVNQs7ET75nTiiaTuh4YeWpVJR5AmbVwLy1BT93hss3ZdYHEZHKbAjbvKj9NJ65JdEUJVLU7u",
  "key11": "5sgfQ1CuUKtTtNHq1QPrGEUSx4aSnUgcq9iCSa8gpDQSMWcemyRX3pidAPHt8wsEkmnw6ZijGFrzgYeuuk7ewY7n",
  "key12": "2E517ayqm6Ph641pt3AM6e4AX7CwLPk1TzWfyAEFhB1atddXHtKtkXRzs6kkpE9ndVmb5bPGG9xsXeGXCZtAkwAo",
  "key13": "5BcreLwA6nu6TT5r9LV46HcuNFxRrfXLTJQvGV3YxN7HuzoqF2YbE1QM5izuvnBtEwQx416WXkcrcBFx7DRQZ7uf",
  "key14": "KfZRZo5t5jVZGHJ3oHbC9N1BysSq5gN7kou34PqQA8xaxiGBCTftUgPqbvGUHLm9Pfz8N4KHs2uwgtZgFBs5CGA",
  "key15": "42tbAxKYhfLGyQdAA3bEPRq7RgZ4HHo6pdHWH5HQzDHTiRCqPytpUeARtvd2KxAJhb6kLrx7BZJRZgGiFmvAPDcL",
  "key16": "44N3x4VnKWSLL1KGC3ahnwKNPQdTD2uMznwA3T3JHYgk2gQQhXNvsRpDtw58nfj9QavtGoLo1Y7NzP1hCLjWBYMt",
  "key17": "KM1QJJV9Ear7Eq9MjVEHm52nijnbSWKoHz7SRGCvQWhzsLyTijwo7ws2NMsWdbAjpsnCYMx1F7gYpSBn19Y8epW",
  "key18": "bXibmZmkALcK4z4aaJ6BQEGtKWsn8u1HdBSVVyGhfqY6EPPqe88qGhaGtTwC8GeV1ffPkULKycmSN8Lkcv8AySV",
  "key19": "4nnTxtdzWmuaEaBVr4Ck2g5A31uFGEhRGMFx6nqCvhfWwPf1aRJtM38WPB4yW98NjHNmnxXhPpmhbNxqVq8qw1Sk",
  "key20": "2xvSb8E91ybGvPg35AcjMoZMaAzssCHMCFeCCAn6vvtqvn7EtxZgPzebUdpspNgGY6nAHLfpuLZ9m8CCFAVUiT9v",
  "key21": "4nnp4bMPYGZ3kzjuuVfjTnWeFJvQJrAmi52fqNVVT7FfrsYUDTgMdsL5TGCTR5BD6gguq3KPGubwVL5tuEYhaZW8",
  "key22": "3iEESTzv4f2wd3LYcmZF9VbUf15eTJPDi6NXA2go8M4S3o9jXTTtp63AJ51zpQtY31bCKxieCbSC3x9rcnyhWxff",
  "key23": "44JafvR2jpUAv4X51dkd5t8HkzNu7rEYtiF9yZdUsjMHfm4y1fCGGeDAAXLaSuMAAZDtRZVcTYTKvLpsEC4vjo49",
  "key24": "2W2unAf1YRpVnRiU3Vacm46AWPKLBSTyoPquTg6sAoLcaUedUPp8pDuUjawfACEa55cGZNaUbBWeXZhauAXGVkd1",
  "key25": "QvKUSJHEWyV8U94tEXmMNH1SqCuBsyW1WPDTtKP24sa1LuD9w5RanKDeVkLSxJJYtaH5HrKkcqtGmzovs6XQQ3m",
  "key26": "3En28ZoMBj1BtLs6oxUfrxazbVR25kq152ejWkx8cMCL1Kts8gzTZYzstyRXF6P2hhUoNULYU5o81JcSG6ARxjkJ",
  "key27": "4WBiHCKiypWi2sBL4DreQRSzhw7vgzvmknAcTdnVuWNMCLH17fmgSUfQgtfzhmQrNp2TCDDSMXmK68NCduA7sWj3",
  "key28": "4ySjMxEzr9cB1ytAZJz48MmBRgS3BGufrmiqAw3MfdvZkyJP1NmBCrAJcvwPBncJyGrXMYTHmafNTnQujg7Y15CP",
  "key29": "4S36uCos8yHgS2VKEaUHY5dVScUpNxJVR1xx3nsgevGUPczu6ejxzE92NVyXmFj4pjf7438VVKtMNjVWqCQe6JqD",
  "key30": "4275cBhwL14U2xaaeARZgTcxVpFrsMvqAN9PsqQV1uLDBSdkvuLnLUFHdKbEfHWz2hUj2zEhC9Tx8vb3NKezrUWt",
  "key31": "5PwkkhtSHRYo5d21Mt2dcmxEUnJTJWsMu1wCJXjFqUVxgKf7RAXvaNvCN3F4vx1G1AUJMNBZAYCDdk2H3Ffd8MiJ",
  "key32": "5eTQK4m5GRMhhkLgAWDTVCZAQ6uMswnCXsY9a718NG55jhVjRJiWPxQdNe5zeViByFf9CszxEi5uCgiTPG39yV2W",
  "key33": "34y6N59ub4H5pVpSi6ojPLUaJ1czTxpr3DeCwpC7R9ZceFKCTk5YDKxXf5mk8kh1tabGLaJotuP5BUuu1fgiNPiK",
  "key34": "4QmXLQzKYMbSZGforffvp7ptpyipkxAEg7P2XMSfGjXQTmqH6Y1LFkQQjbqKgv2WqwJcseWW3p8SNhELgJkzn7Nw",
  "key35": "5kzbUurwvzQEUK2XNh9dCyQpdSnk14iZAzBaGu417EHwLpuQ71an8VZbz1s5hTfCF6Qrfq1X8TkPdMQwzkWjvPgC",
  "key36": "9g3ck3KyEnU2ZFzonMkbLiUCDZX9UYnrMXruozMsTrmzNrpE9nuas74meYrUxM2iMv5gjVZPN2XudBwidX9GfRR",
  "key37": "Dqxd1zXqd6BTgKzWgpQJGsTPTFozfpFD1b6J9GCnMfuGcGrCHLNrqH4jUZafQMJQbdgv3rGUmN4BcSC282BZw4m",
  "key38": "3reBwigxFLS8Gp8DmTxoAK9bePhw8csFdv42KxPmyFbLMTFqCQh7ao2LmYGsyK48LgEHXFwWw6DEpEwUX14zpSAH",
  "key39": "3Ahufka5XYuGzdWiSc2XrQ12LmrkbpvM5zzFVYfd3AuoqSuYwr3xZc3oK5zQXQUkFZ66N6MgAhRh4Hd9r8EsLjrj",
  "key40": "23JkPdqFGbq6k3xoMFpWwvEFXQxgoBPyfYm2iWSytHHuba9mKHE3N63ZwiRW79h6QJDExywcsvCRL1FuvBNS8iQ7",
  "key41": "26j32ywBi4KdKmDdb7ywAcVTW2ai5CekgvixeDnGotRFspFkDh2REGkM7F8mMYkEJP5Hfvmio4h5ApnfL3KQCGtd",
  "key42": "3HKRzEUmHTGb3fPeQAj4YoW8sS18wwryvuSiCT3SFQtL4vWc82Ld3zsTmysDLTCz1q4ubg8Vm3LWHyQTAUpoffLa",
  "key43": "3np4k6pY4cP4EcNp8EeYDfL41YFyU8z4Lj4HTkrz2SyVTneBSEQCQMiH9PWzJJw93j1kEEEGBhMnePd2qgGEwG1c",
  "key44": "5GkBrCCSBxxPrX8WxNEqj2C4UpdS8MMgBDynu5SiCzg5NeUB7d7dSbiBAhC9SyS5zaMVJVAmpPgtyhhigALknCL1"
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
