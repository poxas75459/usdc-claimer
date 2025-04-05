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
    "5Q5RUoFjwMq3YgeNkrhYseFRLuvuhQP5SZFv2s4Xkcd5H55auFMRbytJdNygCc9E8fSgTeENA9JcpcZ5X8UWw8Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36A71pnJM7SejtjiHeHBdEPRBWwb4KWbbjgBQq9pG5ZmEjzWRz5wmpCSbn56o5sB7aAf48BnJgMAo6BXbfdRxas3",
  "key1": "5dLFP8u9WXkB9fKP8gECusg28cQDM98vYUjAXqeS3nk3iLrr1Kyct729GffBgvXtJ2u1XCvc2rhnP8cCy32sJNt5",
  "key2": "1J3x7Y24L3iPAhbccd8m6kGAU8xFMivogLMccM1kj44RSq54b9PcJMMAFcSoMY2Kk2SXattPkUzGYrD4YE3dyLY",
  "key3": "4XcpKwWJMdrXfHTFJPSxTtzv9BkX7V9Rm5L4SJYDoenLmmqggtauM7r1a2KehzwMa5DDFbUTkLpUpXVwYD9GPTWz",
  "key4": "4BPeuNReVR2Y7Hunb9rRicYY52xnGiRgotDzcsdybC34TEmTBkBzcAtuHAZ6DacmhvNSDt7TdMYdWevSQK4G2D22",
  "key5": "485hupJeEye87geWBXGFZPUdD3yT6XgFPecop59WoXBwZ7vNKhUxpXwYxBrVsMoVMDH1euzD2krAxbARYUKeHskc",
  "key6": "JqtComQ3jHZfwJuD9be9t8pMynHqZQG6aoMcy61spfyho4wurw99PqtLUvxuBbK3pRpo4wdeikkcL7ofeLynhBK",
  "key7": "4UJQ8Z2qR6rEzyuWEuPc26JEHWNfeeHm2wyCJZdgyoPhWhr4ET43v5oWxH8dgPRiQ1zghBwL4ZfV9yjrzVrowtJ6",
  "key8": "4id8YtGpKiEoqQKQYuej8sQt28Z8Ki7ZQCpHLUfRvVeYM5VKvjUk1XMZQddDbX3QZSYFffE612HvWecyCNbtvxiB",
  "key9": "5Ae9VnLtuDuqWr5fqs8RiuksXCmXBcSzT8hFg8tk9cHqfiHftm96cA4BQAC5vy7msemSGk92kMjDbvtj5w2zZe4A",
  "key10": "2UXZSBFRHmLrmucwJRCxdVymYoVi6Z6kHAo3Jy3YbKnoGtsbQdtqzXNftK9XjqzALVpC39xfhrAZAg1F4A91AgAp",
  "key11": "3F9zCia1KoNEQb6LNc7ssBXyzepYkdtYmQvM6eAwgAvEMrS5BCR7K74LiRCUGxUxH1ymMdh8bQ74oYfGbMeHmiat",
  "key12": "2DGx8mwFLakuUMvuG8zFQ1HjuF2gnFEf3kdKEDHv5knmKhRvyNHSH8xbWGSjZkLbEbBRSrHQrPGebukS4kk5gJfG",
  "key13": "ZxErhFNBimHWy2UvecEKtXabmGmiEUKHQ1Quvwpkbt5no8edZh22vUTACP3HVgvoFjKhJn1vgkuDxSPTBqPLpTn",
  "key14": "29BiC44y56h3sTG6Pamb3fV4Uw62CJMex7bXiuoisdEUXZL5ktK9ZpdQjXnWn94DLxkbjsGent1xcwCmTdcXXUCq",
  "key15": "4pNAZ7HmuodopAPKXuj4FPh7azueyUwhsCTzZHWfoiNC2oG1qLSMkUv8uAoqMrKq5v4eKpscqZdocuii3XnZAk1t",
  "key16": "VSQ69jRhb3U7xVjjsx8w9T2BwAT8cxwnNLGk2HaSkdBGPmRz7tocFgYHBPiCgZTNHPb5kAngY91MUDq5KHeSXnT",
  "key17": "3V2JwKMvrNxXesh94zmRLWN8Nsz1tfG3DM865vLoEYytavq6ZioHNQZoL1r3hPLQt4edXjAhhgi6fFAPRw7agKig",
  "key18": "22vqCjsVqeDjSvnLCuh9gZhfmh6P3WXKUuJJhfku7jbMbBmZTMjRwgKiovTsEKdZQdqVrsTHeruhW65gpZbvTb4f",
  "key19": "7s8JtTzy7t6y6o3VNpfi8Qq6tRTb2mf2EecG6VY7W6oPtKomGQSZYVYDuJYgGoVTdmPXpSQyRGkCngNJyphix5M",
  "key20": "5MMvVyGm2M44pscXoHKeLAMRhiYkYEeeHbQ1dKmQyMPD3pBAWAZ78Z5e4geKwohhBkciFTzky5pMmDCWvwF7t8Ry",
  "key21": "3PQHHPkgMD2cJBDKHmVFnM26ABmE19jv72hDpEdz5mXK9aXNYVeJf5jmER2JU4DK8zKpmtkPR6X2NfUXZr2pYsgp",
  "key22": "HMYM2R5Ed5wU89Rqdkk4vq7BKtdnL1VYdHbzZshGPrgTcpJDo4WXPz5MQqRNL1Zdfhs1o8tFeRkyCrAc2wVj7PZ",
  "key23": "4Ezo4j5LWr8nsEUjTK1fNi1szL4Lh9oi1Nuw8YqN31hckSLJGrRPLXyd591oy65hLgBKYLSJyyD5d7SVYPbwovGy",
  "key24": "3fdAQgddZDSVqrdSqnUDMJb8T8egsw7gqRoHhqCJ8ZcGwmTBkpUbY8ihRH5bKbEhYtXMuwGeeceGfwfxtDvfGnvw",
  "key25": "4po1K8MQJaB3Y61oi9juddeUsZgvT2Go9JuxsSthbG9xZFjM2RSTuBWcGqBnJecn4Ca8qVJdnsGXcre121u3qn8x",
  "key26": "5a7KpndPyZiiG1nG7PynzzspjuqUbyymwWSSzaZ17bcRDMVvVrBZ4WSkfkjARzNS7iL2FpDDFA2Y3itad2WrHLLP",
  "key27": "4wuyfbnQUtih3K2tUuiQn6g1wLmKqf54sZLhbZgJfaV9tveAdJpBV7EA9Bry84Yr1UokeDYadqobVgEDVztrqoPo",
  "key28": "6619NRPUYxRWVYqoGxctmFTeN8h8b9Qf4mWyjBow3puVEpA8VBPCCcaa6F4RiDM3aGnFcMjwyYheaQsudXLbGTKB",
  "key29": "FmL1wtUBfC3wzRZhuo2DJEaKQrteiZmUFE8U2Dp3zfFfvcPKofoahdRARtTpUWpC2SGY8yN3XSeBAEajy7pKN8P",
  "key30": "2TbCgJYXbQcoDnrp5VbGUnKsHT8Vbt8p8zLK4WsRJTMVhAyGjb9viarrADrd8BiZuH2GmH12pGbDweYaGv531ddS",
  "key31": "awmcpYv3eYiZEjVi7TcmpANRG7UccNFh2uRjceaDAj8HiQkLrsiyusQJyKDL4p1Hkk45BLSketUbV2QPRXESQ4J",
  "key32": "GH6aXNHwXzSTLciebk1bCnjw5Jkpedj6aK1bAg1gDGBPXc4jNe5VuV7FRibadVNsY2ZJoWZ4vjFk5uX4vj21z2L",
  "key33": "5ihKrAxHdtkJfCTnRihVXKBQAsBJBLQ1dmRvHNxy13mQd6oxqWSZPkm3f9qJ35a3sM1DA9dCGMVr3CJv5CWzZCST",
  "key34": "2MmDWTEXMDSG216SH7hkC4gpFXNFEDbrr5xmPkC1M8cUKeUF9hNPVmKzvQACgJSBqANSryeWcqLxNikuRVU1snJC"
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
