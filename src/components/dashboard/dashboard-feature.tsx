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
    "2D9qNTxFdT3i51Yc4eXBM6akXGDfAAUy26FgsnoBPJxctp2dk2hCmGM1yZqvWYjQzUVofwi1CdBZJqer7SkYkBz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EXfnTDdK7Eube9QMUCNGQwPQpE8zj3X7VNBPfTQPUw46gb3u8iaV1GbmJLkafBFzGd33A56VBF6KYjyRxeADdM",
  "key1": "z7r89baEyVM75uSNsoK9QTGE261fJTi4ahAdBe4F1YQoWtWyBjRCkVfCH3AQdYAkknrTNZKrM3bTwHP3S8DFmnB",
  "key2": "4v9gNX7AzNAZJPrdjhDx3vhbrqAxe1RsyVbBfucq5TF5xYD1u6VpRxZochG4Hm4f5qQcv8EmTvUszQAfu7NoShcq",
  "key3": "31TDEVpHZW8ErMRCvcSNoEHAmSt87dFPzroNLNX7MJwj4JWTJ2qnCqezFTRaSDy5c7HbXGPL9WR4PaE9zi8W9XYx",
  "key4": "63CzsisDXqdpVkfMneLFaaeaBUfWHhaqS7bU1E7H8eR4Sx4kk7GPkb69T9UQU8LtNgZpH83e5FHQjeeg5AX2uvJK",
  "key5": "5fmFWXS158rShh2uzPhRorvpVZ494ojQ1TPnW5CnWSrMUBckmyt7ahztDDzwnX7eQFzqWGaBPQ6b9BgKejpM6pa9",
  "key6": "xWBw6quPNuur2LUTKPE26NC4EdFj35m2RvH8whfkU8F9rZtfzkqb5yPAberrS5n4sT8VKA9UhT6YJ5gaVyzd7i4",
  "key7": "5dmeMQbBoLen8G8ArtRJVHHc8Lh7VyiZaVoJShAiZPYY5nuQFTNc2GovTfw7FJsxz4XuCGY3gp6iv7gJzrfLRKnm",
  "key8": "417pKTykvUWGRCJH67gJt2ZPndNbaU4bjfR4eTaUw5hTJBAhQUu2G2MYo5LStGSe1yUPC9Nn6cSZS6kvYeByvFB5",
  "key9": "3Dxwi8XrBCmuWHLYPF2nWgLVu4eZpzjY2b2xPJo1BYTABTjwwdBeCycg3KcMMve9Ch9tUSNv1Qc8btMrEujKorip",
  "key10": "5V7Dsywdge8B8dE4BTtSHVFYP8ssrDMzRgzhBqF4Nx7XxSPXHhLKmgSemZaj7sXgvktbnB6ZHZxgxYRyDPybYXXQ",
  "key11": "F5ovbJnC3z92RgWVtDVeRdwmuWwkB7tc868deFGezCN3NYSg4yYuYzxmZUUEGj9epbbaLqJR7V7P8VCUXjE1BPa",
  "key12": "211GLjcae2pAJGJJa1aD9vnzDpXVeZp5uK8vvw8iPCsmr2FYYZFVvffFqy8Z4AB9maLbwDUNPBumrfjFxmYCry6W",
  "key13": "2HMfLcEnzBiBrbkAth1JTAbhXaJJwa79cGr8nHV7zHwkYe2wWX3TAbB2dRB3pkqHWj8Yk8Eta3vFfARzZBv9g3GX",
  "key14": "4jJyFJSs7qbsn5yL7zj7PGHvrksM7cPZJgwiwgWJRsEjcNKwmcNFWcsNTSWzoJdgoviHhcQGE6f1A6vZwzZzVv6R",
  "key15": "5n431JxGkSxSqri5HoSJX2BxdtPF4poYwn2sZa7si1eByhQQvV4rvovB1TTSaow9ZY26Mp11ZM7dw7zqzrTfaXBK",
  "key16": "3hj3rmpV7RSSz5NmQQkMdLHqEny2diaPD75HGNifJZsxibAectAfszZyQX67w8eKV8B6HmTNtUBZdmw8yLZG13hJ",
  "key17": "5j99ENkbDR3B7VpL5qbPa3WWJSSxDpctJHetg3ZXiNTx2gYNwxGgKH344kLcJ1Du9Mt5QjKv9A7kgpkDjo3D41D4",
  "key18": "4SFgygX1zzpvYAsAAVA484tsK3KnNz2zEoriXYvBBjz1FvRrqGuWsoeUppTTNSAs7YZTpeDdmw82UzyVpMr3GB6s",
  "key19": "64bQKouSkFsKHAdjocfmSSyhWWKSfmqHqzWoWa3Kkx5TRZjN39fLq4RVYa6hbv5yxeo7iZDs3qhjEEC6dPknQndv",
  "key20": "2PLBSroUg5Ffmcd28hc6TqykytvQbiUCG6ai1fa3CqQ2GzhSF3GVJCZSsvxEqpwsjEMFqRUimzmzJp75vyAoQoSH",
  "key21": "nEBeEzLV1q74EBigzkHc37jPpZGK9empRa6CfmfpGiiPxQFCN88EYEzFmu52jHbaSa5yKkXeVXqr7Y8gGybRFZe",
  "key22": "UxzgKnDzi6j9gnLz8yo8GPqwqbgxfdPv3jximGP3yvU9Lo1QDGJtF6HPehWyGedooU1DABRhtmfnWJcz342Lz2V",
  "key23": "2dRdW2HT36M8UkkF4hwRaxsWFQwvCtgWE9GM4DqNkrf4EUxYtT2FZtx7sPm3ZebVr4SVz7bejUtQkQNFk6WZrCPD",
  "key24": "5gVDu8AWkgDXKveEhsP7wEscRiwFchRvD55zxQePmQpdJGqTwm8tEVh8xZsbeL1vBK4yUdScGc2u8SuMnBvmGwHv",
  "key25": "2ppnuB9sUfCuQzuQenMAk1YZhnT78azgbfrzDZwhPeiGcptH8nAvr965PMU4DKu8dQ9tWagowEAx23TSu9RzUhPV",
  "key26": "38evF6MGbHf3ZJxayj7bNoJqf43JUf6EyibYHGG6SYkgXAxbHeQ6uu2AMmFogSuVuotRAmQyaSZbJwTWLiwWQh8Z",
  "key27": "5NrDaX8JLPQizP1q9TDgqzC4cLkWb2YKae6RoSzbN46oLkjj49uChrxWufS57ieDmbDKTfmsksEgn9VuySJPsmGB",
  "key28": "5dUYLHAYpwLX4Vsdwi4cKyJUGEtFqN6ci7yPFKLQToqLuNGyarzJASfJXLtyopDPaoMjt2AmMyMZeWapxn3PyDtx",
  "key29": "2DkeTwaFKSA6bGLE5DRTrb8AzC6JbeEbvAc8KvXrdShq3jK1Ew5RY1FQmzJ9mKvuhjJXGbpAWddzuJxUYwGJvbmo",
  "key30": "4f6tu49ES3tecQi9PSoBLXuwa5SEe3A6kh9QSELms5JM5TY4xkyX4QYVsSGkNqZUrzRR3GEh4w9kDTmhmGisTjXe",
  "key31": "3gTgZwN8Hgc5ejYfPibGocDEcTUUQtuRDVFJ3sDZkT7gNRPSt25ciNPAHtTX8YiGZLLAgTL1tR55xBSSmxSbdQMY",
  "key32": "rBjVqV43jgP2MQ6RQHkduqXTw59Vw6DtZBAUHBvhXDp55vm9esexp3pT2qbdkhKCKb9si2PGDxX9EmEhHPJZLXs",
  "key33": "F3hZsk5PFbpfVaNomQhZXf9zzwEh1tsLxV3cVcSxomY81jEj8vEK4nrEk9CLGv9jq6FYc9M2Birf3rDXWKmqoFH",
  "key34": "FgajifMDPtDzBj8iETknxBJKYC1FBashoft7TXkkHBHxcDGT4hhMCASfWuLEcAWwMHak4Yj9pUmmC1XSyU5iyfm",
  "key35": "5BT3WnSC1S8CM45iLsGbKFHYbiSWWF5kc3g9ZkuKjs96EjRtV3A82GFJge5aXquzTEGAkQmmTVRQr6kc8ARrnD3z",
  "key36": "5EJbA6hzreEpRov6xuCRHPwkLQD72jLoxtsHcyUr5TqFioN2VFQFhqWiTVpAPAFJXzVjkha5zJ7F8sW3Jj6PyjDt",
  "key37": "37TyqZWofGhpomJUinzV1dtK3fVM3AcnmLdT44fWJKjsnJXpHGYNBhxkwLbaj2JLcnSuJfz3CWhmkWPc6GJaBR9D",
  "key38": "ixKXgDGPMpnK9FFDsMEeBCrV2WprcS9e2zJNQKUoEsGqSNuoZhaRyn6bvMFUKEdnGYQpypsedf9tHysRN7TUmmK",
  "key39": "4GXW78SF83iNcFDDVDSw6zaar2mt7v8dqZtvkePAz13CupSh3pSXKxXuzGhHUn8iD5vCsxaQhN5BW4QHoQUbQip6",
  "key40": "5vcfhihsu8ke75hryWJziukfNWnHcUEyrSRcU4CSqMpKEo4Vsc1EoWbv6YWG9wnnsPZhv3JBdyDWHV9dpYdXQjiE",
  "key41": "2py1Z1SYaLMVVsha5sRGVNHT7SmeknBWowpWXChVDCHmkE2rpY42sWqa4yzhm1kSSwaCbC653noasxcCprkvDACT",
  "key42": "2XwA1gHwSpcxAqPb1e9v1wMgQX2e8FGxoejecDMp19GPpBpY9ErCv2YjnWUQtTQMHMqLw7rVo91qehLZDR6cLgZz",
  "key43": "2xvqmJyjo4ZTBApN5hGqNdDFyS7pm21xzB5kVJNcikCYqxSvXqa7tNEnTo4aADU6R3wXCzt8wBXAW1xyw17XxrYN",
  "key44": "j36CzHLts76UQezPYonpjxdZDqoma2wtBQCoPtruLukDJPtAFRWS7seEN3nsHLqtgvnEYaySNNpSfRtDZ9FFpXA",
  "key45": "3cmAvKSTz3APrnWRzFswesunf7mBejPPcr6neCpdAvVA3LtMU34yhe3xwYeSekupquW1Cmh4UoV2Z4ANeMg8TZNx",
  "key46": "5qCDkmU6HPvJVEriw4CnTPtwasUBbm2btkFX3huVPywKo9N6g8mUd8Laacnbwu3UeJfg7bHmn2wYGTUA4At1F1F2"
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
