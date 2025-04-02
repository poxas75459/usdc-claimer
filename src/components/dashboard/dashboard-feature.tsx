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
    "4cxiSxjmU3H6wMxfkbn7KgtsMA4NyfvakpDXaFJBekrLFneJvUXotFdKDSnXRC1nBcAQhvJKaqXm26yoyzc4m8h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cWzmUsAbJKLQC3G23BU3ReUGmenQmg5fEGDrHnEwxzh5KeB2VkCVo6fPJTpDhCqf1hAJkdCbRyAm4jerRJVseHq",
  "key1": "5qNhuwXBTu6KiBfdQXCJiEnVym5jfJ9z1aertkCkfvg4PFzDG83WKouMwqCAb4sp5EsuX5AdrTYU2vdFrfNPuJbR",
  "key2": "5xBdqCd2Wob9BVpMDp7GhUxWmRtaFHVGFkPhHwgxT6Buye6e1vRAiKd1ZKYV3NLoq6TCyTwzjQ5mfx2iBFaD99tH",
  "key3": "2hVFGtmE4Kthx3iPRB8JJZQcNnoK1z3Rp5phM6qJykcKrmCfote6nzdyNyKHqjkFxpaw1Uo57coLXfM7MigxAfTh",
  "key4": "5C8vzncZSWQXCnQwYjG24k8cj7PP2Vfrg3ZLfcmjhYT9RXu7zGvM1uZwrp8SQk1gHUnZCvbx8sf9Z6uhBeqoeain",
  "key5": "sESFCTZY7LH77MNLNkcSqhboz5fdnoEEDDsvomKw11akMEmiRGSUMK4roGm85foa6C2WPPk3fjmoygkXzeQJBZC",
  "key6": "21FU1RQkfPmcM1hnwtUcDXLAievKVnNZrPxHTbSYsuteNctmR5n8gmbJuxvfscXH8MaRoe7MdTW2wSP1MiLDBewt",
  "key7": "4zF2yJXFumayWEFZCBioxg6kxv9CUXFJC3UBdYiSQt5G2Bq4E9V5EKuNHZZVsp4ZU3j7JT38gi7LLiZLA8zjutgE",
  "key8": "j35N99brsN7Sm6PZzrxXVRuyFDZ6fqZM9JqXqxkRyZTCVVj2tGixY6oW8bmxDPEZSPhCoa3cdVE2dFy356Fure9",
  "key9": "4VjjacJ359W6kK6H7yRkNyDNUwiwWDdmNTCwHjmp2CeuBV3WfhdbrkidiawJv2ncLBBtZD3YFFq3c8eyWELxHk9D",
  "key10": "3UGhU356gA8xZ41MTFm8ftGQieEbVAoMfnm2HXbKaeUu5HUdM2qbLmuYupEFQGX1La3inN9KdUuFiAmoFACSS5Yn",
  "key11": "2N3Eit29fbwsumTbniLBbttwn75DpGAXebWqabDUsCQvtHgtVs26DxHSBPptB5z88yLpnMzdh6sv3p9tHLDYLrES",
  "key12": "4VWtpdiihtEA6usuJoeAvHYSiZRfBVRmiEGv4RoRB2janByzQNkxPAihXTpNEqrp5bPFDXsB9VPuCnpqSCtFFZmR",
  "key13": "4AYuc7Fe4puYLMAr6tBB3RSucNs3Tsih7QoeptTDHwM68DcgZ2388XshZfSRg2YQJUmzdATvhjLuAu5ZwHaEMnfA",
  "key14": "fvZb733jdskNpZiT5ftJyzm8REzPXvSpHYGFxMoyBYyYsefdbXCkpEFH9iexip9Ejp4JHhd2XTequeLQ52KoHf7",
  "key15": "24keJeemdhu8fEsChT3rTivGdXKXkWujDG2mstioGKWmuaQCQA75Kj4soBc7NcQ1XBGGPPMUFyMAL8PHbSAwrqC6",
  "key16": "4fWokayUjoSuj1n5JBK3SUQYst4o5ZHHe4Li8qQ9bMgUJUbiJddSL77Mhv5Kxw5pL4xevsKKvW6m8H871UCK7kgV",
  "key17": "3udBuXJC6ejCiAqW557NKfa6yLFKKfkanyS8iu6NgjdksUni5YTCpzTdfggvd5U6etdvuTguaPM6AEK2DpvaWkvz",
  "key18": "2i7FDHhMjNuZAJXwKUgSTSkfHKxokGqQxiFEFVUd26Whj7jQhyuPfZGBsBasAiYB8VawYvW3nXekwvMqSFKFJnqV",
  "key19": "5P4qFijKMD3kGLXYe2CRiSqkW9mgCipweLG9s3beHLowkMqFkXta3LpoLGBMLNpdb2xQ4R5iRDps7qRYXR8tAGhA",
  "key20": "5NSmjTz3tUPtwf9tHFdsppRkzxETK8yAiBvtSRckK38p3Kt93VWS7U1MYFsruJwZYs93MaYAayySdstgPkK5XALE",
  "key21": "4EbBkewtGBQtdiuvvqbhnM5Gyf91yQ937wxFYBgRsHwPKcvTWwEuSNb4JQ211Nz2m5XsfgMQZMJXiAhber44MBzf",
  "key22": "5r4xjZgV6ngC7pZ2dXSapteHs5FtVd1CeyHzbfAeMxLDRTjfr45oLa5cES2KgKbbhcEXbUsDaeJV4vjh3u1CHwRV",
  "key23": "3i1FuCPo8gTub32zzpzF4FVJwkUUexWA7jJibhK7qK6HPPfvQ9NUDMJEqaspA1WEqquJ6V1dpJPeFJg7Z9fCqp7V",
  "key24": "fAyREkbLCmwPjWRyfKjsJRQvpwimo89oELobzauZsM8bznniXcUVTWhLHj6iiEd7vTfKCQNFZwqp7B3eAVkTHcq",
  "key25": "TTGnTnTHyk1iux8jMmcCZrjuqCbLRSFF2JWHLATJeipvSGgh2PKdxqw82G2oTQzbCk65ddKZUtLuEpf7ccjzrcX",
  "key26": "2wj7tRhrSunuiwgiKefa96zBCVy5pKrchexk9pq5p3y5HLJTyPPjeojG2x5CF2WYW5ccfAmQ3m1J9Y4CfPAJZoSH",
  "key27": "2CgMqeByHKidsedP6kBfZcSAVbo4rUjF2NSQ9REPHoxyUEQhN21ZpVw4PcYpBUo2nKBkWzqNRPFo78CFtCQLQ1Y7",
  "key28": "YvTf1cYsX5W9niTWWxiRCqFWYfRbKixJwiQopiQRWenn9YNg66SaKEymvj5DBzJwQ8TQftaRsPEJ4uVmfXSUMCg",
  "key29": "4SwxyAzJsY3dsaeJtjpmzitCo6jZfVvd4rEbnUEiYVsB4BejDTV1NqQyK9MiteAunxX2MiPoutcLPVqRT7Vaeri5",
  "key30": "66xSkddA9pE2uzSSRC58wzVWHPMv4YYdZZqCxefWYSk9SDu2sU7BrDVcCGKzAeAZ8SYKGaNwWNtM1dEc86CcRvQx",
  "key31": "2RTTZ4T2EgbCRi57eMH1HuBq6sDUNGnM3uo6yE3y5Pg6N1YDD1kyKKtCuNxnMJy1eLjv1Pkjg73ZXf81ZqDpKxQb",
  "key32": "2VtzAwTLbCyzK7VX5UkjWyWCjEcx6s1sKuqDj9zzUamXMaujwJ8atxiSAs5pVapsCgma1qdMfNjf8SxsSWytcGbc",
  "key33": "4699viPBfgERf1Fe7wedSiJVCm2V1tkBzA2JNwr1UPrhdLfL8Ff3EL1gnTmXfRfKnvpCVXYvERX7m6idK3qqmMxt",
  "key34": "2LMBvpJCazX5XqbZEEFBUajSA3JDvYrqaENNCVGdh6LkfwBoMqygKFugs4pCAP9sk82WP16EKnt5uS8uzrXCiYeD",
  "key35": "3WSqjf5Hx7vEgUCSJuixS6WHV226CKBA9jtTaa3C6dBeEg9WzMffYr6WZs3Yj8swt4FmdA2i2HhPag6j8x9sPg5a",
  "key36": "4Mj37rXb75zbymKqRs7oFwmyfVYvSUA3HcZabDVwB16Wn6uXj7Jo7Z33oPFtSD2wTa2ssGng8U4ztp8dQF3kt4vh",
  "key37": "5ZT8V6biJ3wWqvm8eEu7qrZVt82njd2SiWyKBgbeFucenM6thcT2icM6i7peDVWCz2DCcW81PUxXbsC6K7X7ZEMp",
  "key38": "CodULJTgPaCGPycamcm6V5Rek32zxTGCDeGzpwvxjDr1kzaGhaCRYJ2xyWeWn6R4rEqRsFZXpXfzfvWUowBXfqJ",
  "key39": "hiDjD27ZDs856UKXLzHJkBs6g5sHk3uMjHa3qYwCu6rExbDqSH6nEezJWcfsF6aBwfDtT7RRNWcTxW79i3RxCQE"
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
