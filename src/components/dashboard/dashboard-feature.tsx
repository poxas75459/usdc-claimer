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
    "3hi2EYWRuCuZyK73LfcD4Xn1wRVVqxY8ptH5etsq65Kckchs8AvSmiRQqKkTik1Q6w5r2dSfm9qUL5nfKgQSnP5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sy8XVHabBamiMRmqbACMJyxnB8AvBmn2PmkSPaH9jK9kiHjxLZZQeHTRnpr7d6mXM2CmAc3aDZUf4XsPqDk2GtY",
  "key1": "4pTx6SmTuzn9YQVrnrKK5MxJ9dsukrRFAzEn5rbnoQvTTGt9svnsZsDesFq7UVkbGz37sNt2rVttjawXi9CRuZBA",
  "key2": "4aDkw7mpNoXLEHz2eH8oHcyQXDo2NmfXxqWmhpj2TsBVzVdS6QigCaEXuw2CrmEsbpP9k8bTzkh383NyBV5Yjy76",
  "key3": "e93sUfbYCYZmEAdYZH2Ydm9uvxRV4J7MeXb1eHszLaBq9CjEEnyR4ZVxwgcXUg46GKAN3vRuBmNvpqfasKfFPA6",
  "key4": "SCFvrnuGLcUZ56E1xKwNWu1F9d3Po4aewFW7uRs7zVktqBjT7Z4zowtKEaVSD6JbKxcmhfHri97LmWUohbJ5yWF",
  "key5": "266vBhnusotrLfnuAHiEGCa3jX6nptWv613w4QwBLsbwMXbWP2StReXXeqG2HLJU985iqBEUVL6S3Kmft9DEZ6E7",
  "key6": "2Mf6AH1i2hUw1ZPrTqYemYwh2fG4jHoP2bGPGSeeRPMVxCKipx7rEvBFBJ3aWfqaVnN3CjnLQ5SjizNMLZiE7wAW",
  "key7": "wzVNuRwTx3RcTfifPPcL5UBQodF31LEfXHYNosUCfbLDSJMnbiTAzNNc9i7sY1YmfgWB1Q5jHw2JSQznyonbWJj",
  "key8": "4jmfz9wnJAwDguYYHh8xW1CV3LpnyC1QPyn4Gq5RZjUCk1FtLU86cJS9eq5MQGs426wTPatMaiJ9WRBUoYSjw2pm",
  "key9": "v3LU3pzYDUtJdhy2fBse8dLbTorxHXLwvu9rNjegGDs2cTkivwVt3YzcjtRZG6R9jdHc1mr3sFoPL9USspRqkLh",
  "key10": "3tqZnByCXRVDjtJCBM5RLk7uHJReGMSzB9EhcrTLaNqPbXo5yYHZG9zPGQCKzWq6oG3EXepzxwhB1EKGhWcRKg5r",
  "key11": "3BtS5gqhbjd4jyQ8RWfX4kA4ZqMKWWPQcZUfP3ERRLkF4LtTVDw1oSTTWevKorSVXFE978SSF5YVpNK9KNe8uWfC",
  "key12": "2snhyMKD2mwAHxzLa2wK8ypw9y6LhW92svr8PRfWqwoLsBrmedjjg4Gxfub8h2kpQt1KgTe9AYnJTVxv39zNAP58",
  "key13": "36fx5aRZ7xNfaAqp155FHybpVSBf1zJBBKpu8vKY7ojAJfMexYFs9yhRC1XfXBw68BBrHkoCVX6iCT9UYbZVxW9a",
  "key14": "2G3ziBRrDBctGVpxdFaAg3mL9cfBRMfx2x5esnW6L31dgZaZ41U4Qcpzdhu1YYRYvcDYAftLyAb2kYAi5NMqnzDT",
  "key15": "BVpacsyJ48bvynh7aNdV1Tjwm9t28ybh1an73P9cGKBy8fkbAkddKEiaCLvEyJV4AQKAZuvL2vc1C16B534JcDa",
  "key16": "4SWPGzQAxHvB5R9BYTetz78ugc6DAJbguHhCkePCy7aUADr9Dj4DPcreLRCPJAjMGFgGUwGJnjH9eJdwrBdbWMVu",
  "key17": "2KXnr2bTMgcdVwwXErg3zAoMWPKcxXhM9goJcc8WSvn53KTXfMDDzzvb6RKqNuyQnHE25XwWe5ixYpsMBKNLm2jg",
  "key18": "35PKV1sjQ6n2cHdt4NqaVuepjcZ3r7ZBDTz1E9kXnStuCe9m1RbbpN7A7rYcFgXY1QnFSRDYc9V65PtMkLf43KjF",
  "key19": "5mShhAM52QQ3SW1nciSXdtgbWMzRhnLUcb4a5bHd3egupJqfMjRbSKwQf1wDMfNpj19uzx4aNZTq8pzPb9q28K9H",
  "key20": "uSGE6VQ9A83JCXnyhX2zqW2bVMguVrp25UoyZrhFxNJq5dPpwUyc2ZBJEaWDVhbxyLeYyBen3n3rgLg9MRZKbSp",
  "key21": "2LbfXGDdQ1CuaPAPburc7nG1VZhSXWw1ddAnSn6FHUYVivrcePeQ6BK3Koe5diXuYCW8bSsEd5puRqNLhMLaCSmA",
  "key22": "5k9Twehe3h36UFP9WT4MvrmPcURRb7KirMz26z5gZtGo3JcdDnkKYKm5VWs39ztwFmdSFrNwu8y7RfhRWX828K6d",
  "key23": "5fxvbmStSC7QtCHGGJySRLtdDaoLxLUrtJihBzDhfquY2mXrdRqUHySu4K1YTcnXRoey2kuiMAXhrPxP5AAnBvVD",
  "key24": "2AbMf3vUck2hMyf8ovLD1VADrRoPtq4nKBJ1Tbm6198YQ3oZPFMCeUjbseHWV9rWqDXwNsAdo64DhULMPNzspSRD",
  "key25": "5mvT4T9srTBMhyMN42YtCKd19VjuhGMdXebSbPe19uxTCiTBcT2smexKL4K8bX155NWYBtSDnYFMsGhHjY7t2kJy",
  "key26": "36XugJCZD3AitDacGJ6zrNqcWr92PVqs6GuqjokKiEgK16ekm8P2bSfU6tVW7SL7t3tsQXbmVU9NZSmm758JR6WC",
  "key27": "2whx3wgfcV6HCk5ZQiNFFMqtQuD8KMkVsHBSg3B3y3sW2e6JDfnURNRxY8kYyGxURJ82zoY9EszMGurjiVpgeojx",
  "key28": "2C6X3bhrq2P2UBXDUYvY6r4LnG2pHuPnJ5BLMh37Cydphw34ttXXCWUn3bwbjtusKn2Qcc7Ng932GoSe8hq15cEq",
  "key29": "4MPNWMeBsTs7NMGPmTKYWXWwe3BRiF24VbyPVRwDYusKS4ueb6rzmVio9MVo46hs5aoa3mXmJ3XoLTJMNd5Nvdcn",
  "key30": "4XXz5DvGVbr9wpTS2tbXCtpgus5QpTQXxEJPjzF3U7Y1PfkusqBTuqqYCWu9cZuqBCSTvp5s3PkZwnTcAC1XcvsT",
  "key31": "5YAeQnGHLHZ1CDWZYCCbXujZcaAHpcJckbUcvpsDHPn1pS6UuYq78HEWAxMsQgQqAch6m96HHrL2fpmX9yTEYSHZ",
  "key32": "3tJth6b8hqgBo2US1qd7DDdvKpsVBWYGcHVP541ayxWr5t2q3zjd3hhQhWxsqCz47Y5T7qSZ82n2QxuuacrNfeyx",
  "key33": "5kh2KTi8FzMBKjLzxY2ApSbWwTKrYhRdLhRKPo1ceBmGp7vMcq1MZ7jf4EhmFMpSZ8RSukF346qdtV3ApEz84VQz",
  "key34": "2zufW3TAMuumFoJY9MfzEBVyfTsMj1s3dHT5jvM363RyFrnFoQycFWKpu5913izDyiTbAUxYuTTHxT4w87cNywVJ",
  "key35": "DJ12cQ25U15GxNNbUs729TGB9w17JhyLk4c57ccL7fMcNcv7w3nNnhCDfd2pN8itKaWqVSoeczEBDGG3ciFDXjq",
  "key36": "4W1Qar6a9F734BGEtmRPGLjW5tCwUtkz3kkpcTeo7PQfnerwDg5bpsnNfHurY6A3GCEUtZL12hfUu4Vu1toYWsjz",
  "key37": "5TKa2vUDCfDtiiaganvrnNHt3NSL7fhD5rfSC3TfRiBX6jY4quuGVcRKkvdL4Pm6RB5dEsgJQwS4AA4bwfLfoPbC",
  "key38": "gRrzDJSBBymhFdyr23z1EVKjS1xce7dTFzsZFTTEvA7A388mFg37QcuQDkXcWGsmFYbJgG2n1WG3Tt34aNXVrbm",
  "key39": "2NgNDxDmWvUtM8X5epptioHjceiTooQhz8SFsWC7X7SqspPPCnPF4ZNEo7knLQVSj1KbAJtafxjFjtqnbgC7tAfL",
  "key40": "3ZuL19mfpYp3W2y9R5haseDgSxckwvqpYEG7T1VYyRiR2yKU2EXW9oXVc5D4K3V2wjhKVguhFoyDfGwNY4i1rpZ7",
  "key41": "45CkDhuws5gL6Fby7LADiqkLX7yAqD3hrJR5owCm7Xa5Eu6pENNBqsFHzQz9SsxKTm2JxbitKWM4iPd58K9uqFtJ",
  "key42": "28rUNiVLcqNfTFncAG3pQQyjySrcJW4Eh55ZWzWvk2DgX25EYM2KL6YZybLndJHKjHTcNvZUvuTGNu4XSj4V3t5S",
  "key43": "5Ge85NwCY15cdwR17KHupbbNp5VEpt8m6f4KBkWMEjes9WhL7rApEkcAZDQrtaMAaZebDQaY4md5dx6EavM8uHaw"
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
