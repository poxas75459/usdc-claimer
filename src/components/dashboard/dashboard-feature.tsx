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
    "4q4xSxnC7vrv1gcdqVt2xWuNQxXutzrDZzpFG4DUdAAYDj4yf5hrDxnjdLniBhxVxYyrWonvP9HLk6sa8vDjFqA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EY2R2nAQxLJ145gUfW9sSpwQRoxrQ2yQLt84d68ek9TQoFsZAucGW4ixBmh6Ybfh5ri8HkKh3nRahgku1efrRCz",
  "key1": "5Sd5ZEoeLAToLR2nm1wR2rSoSmTeZMnUrc2kvhjH5vi64ifjRQQDPTn2qxthvRq5zDEXsjCKybNku5LwG9gVoYUH",
  "key2": "3wh2rj4fgGTm5FSAiX8cnPZvtmuDgLvsH14haw9R3ouZ6Su8Psp3rYWj8hAciNjaxJkX5koHMk1XNo3hYkx83ak7",
  "key3": "4ToaGyEXo8pKAwWmNeEhnmoftoGSsMg3Gcv1ECchoueYZ5x1TqjB4p3GYqgdixFz6UxzV2jmA8X3NwbjdWtf4UkE",
  "key4": "4D2NrGdz5hCDeTVt9Jvzdn4JBwUSnLp4Y4Bdnj3q2VxmBkYqNE7QtjCAZwJagTsQ1t1wUfT67Nt6VPF99eHzggqQ",
  "key5": "3voLWAdjBt4gJ8e79fk1hou2PWG2faQTaBf4KJDaFQmodWnLr9EasGknTuJLDFzaorqFtVwPPNj5z3LoTSqtC3AV",
  "key6": "4WxzBodMCFZ6PDqrQgKQxMYS3bHtoWrNFVzfVLAHQVo5tZi6JEjmrVcJGsUgNDBCAuzQjLAokyxZW85vnq5m3fmP",
  "key7": "5aZnoUZsD73qxM4Kc31kW5fHaLQz2aeS1BCgaqpD1W5e5NKemiEN6P6zMwLhjtDvw2sGHz9jd8S7PP3L6p6eksZa",
  "key8": "XuraeyVqPnarH2EFGDpWrSWqwgWUsvkTnqCaD4ZVabv1WMVvbTx47J7T4yjncBHhbsKZA6E4NhPT2wC7PzuggMh",
  "key9": "3YnxGsVmh5Vp1JhZA9YmigGAPb3Rav3oSrfwiLTbY7AEfM4VkV9vmtHKZ5ndRasEAs7QeJF3jtKxFLixoCoRCA7N",
  "key10": "38VAGSSq2nsK1kN9nbmhYQWaReML2ubBiaFQhZU8AB4jTrU1hXe8ofmTMvjqa2HJo1pendgn5N4SbKLozx34zCM",
  "key11": "2tcuR8mMQwmVuG9kBq1iZDdie5FUWPeyCWN5UmXozfbCGWvqKxMUcsVDxZB6LH7SGh65JoAVfgykCWMoZYc5GdPt",
  "key12": "nkmoS2ksXFF4MPEVa6CGzYQU5uKjDuZDEX7A3PNAvgK5RMHGU6bKEqCFMLUqXxZBy8aCs3ix4SqokobFoFEKZht",
  "key13": "3WVkfznSqhgSL8RZMMkyEYo5AW3D3KKa8iYBcCCqJi6f2cTgRzm8bHuqX5nmN1icqiEH2xr7XppYfUGUSUbQpDd",
  "key14": "41ciwBursf6LnixLhgbhc56yQqtErhJPatS45KYzwnVpKvtk8mTpsE8ajtTpLCngBYfpSgYkYcrZGNN7cWyNvoVs",
  "key15": "2hw5ayxXNT5ymhvyjBT4feWomBSq89qsnN2Hbwn6LSnYMMwxUodp43RR8fLNis5D74CjEFPdvqNAL1Ey4nDcyWn3",
  "key16": "sXD3agn7eXx1WTeaPXKHiv44hob7sGgqBieVWirLx46B6yftAZ59e7HANMHptcbFH2obA6cfAytvEz7WigaNnSP",
  "key17": "5MtKvNS2metT2ZDyy6PUf2EdBsYLA58n5vHd3yEDMvLsK2D17dczRJYmXXqJFvGgBYwJe14kEia87ANK99quXnge",
  "key18": "2NVTCPjbziMonLsqQGqzWnsy4NouXqCmroScXTJTLmFbAebBpRhhjP6FoNgkSixfaWNgtcuGA2XNaibRcW4B7Qco",
  "key19": "5UjTCxZimzb5NiahD4KxC2H2LZZkPFCzezg9k5Z1b94m3KUPLehbDUrWvSXNE3V319MSRcNvF6YMei5dRtGXGrh2",
  "key20": "4sVgzrFevWwi3x1WEsUR6Mjamowri9EfMSgquDJbfV7EKRq7S57MFAABhguMqhoJNeup2KA42PLjvfbP9z3Bzh2V",
  "key21": "4cKjKdH4svzao5q9vKP9JkCWV5X3PqQjPY2aDaa2JCnnh9CdECcqjuBHVnwVWWUc5sXYUUmNU7m9mjyBr5DdE5xC",
  "key22": "2w7tjCsNEmbosiS6qhDUa8XcCwCFejYZhnmgPJfTFyTcdPGEgZTbzcJzCX34UEqzizYYqLe6GGK3qqLTm1vAxmBN",
  "key23": "3JxTadJzdJRuFud4Tq8SE96t8adwEXqQGfRRxmmCB3krUL7xHPqYusJsL4EvJn4F1UptZYcGWh7uDABfeihyHPfY",
  "key24": "oiz4xY6CM6av6TxZdESUhfY5GfnrkFPJwX1zjGT7jxDZXpiDKQKhfxuBaMK1NG8ZXVtZzAdXRptrPgt2nKJVjYp",
  "key25": "5WzdmJ18RpCNaBrDvDVFJwnc2qtKKxd6qDJiqzRCu1Baiqo1pNVUnytcxbrgVeZ4JUZHMW6dqtveqekyAzK9hU6b",
  "key26": "4bQAdJmfaaxKeixVWXPeA8GqHam6XGXmyTvA2nDHzvMGZkvjTQrStRDN5iq6veSjSxAwc8PUbvpLL5oTKcpundrJ",
  "key27": "5GQXE7V3vX2anwiq7MsTvhZgJp6rGAEs2nTr6AVYBLXBvYrHxTGy1HDC6ftAHKqpQgFEHivMNVZxSChv7xQTd9XV",
  "key28": "3ZCCDc5yGM2Y7qdzzKk121jmsiAYRmAC3kFTJfdJhLbJ7T97xLL4fLcWjCmTwmbn83JX4tbNJy8UpdmKgrufaSZX",
  "key29": "3KXURArnNEPjaDbxs8TCCAcwhWEu5Ds9J75hKZvHAaJsUZoJrUvMpHc8y3uukizfx4iAF51PQqkXZw2hvFcD7BUB",
  "key30": "5HxSZgo3Pjj2zWKaeyWuySxewsEHVnC565D5PWjemvGAEKKcKrqLAzweDQM4VLm4qhKyVAZoaQJJDPKWNxckJNj8",
  "key31": "3mEufVkfrUNGpSfL8VYDSv54atsuudAjvUYuTFXqwTBRmzm3krwnnvfrbE4RnrUHuVHSdhKYrSBwWvxP84RURJ8V",
  "key32": "3W2ScsTo9YnnMguc7CeYxBqUQqBhauah7GnDsDcdGwk3g9wYx51mDZwvwm56WosNT7oDQCAZyf1BEPETUB7pnUkx",
  "key33": "2z86MyHhcvRrPYXi14jaBkghiZiHLgDVEidYT9URoPc3KXd4d5iHsa1r4w1EYQmEFrJr9bmM2xXL7sxHXWDxyypJ",
  "key34": "ySDRPMgKNAmPesyRjsUPcH2wmbKnqQUTK7gqLm9amYehq62EgffhbJqFd3df3EP4vQUpRVaDR4mLec8kVBXd6mp",
  "key35": "agYfjMcsJuHqi7XrQc2YoxYGeDCoqybGQhFCk4G3DzaqMoimqoTyACkqEdcCV6vLbxVGBS5LmzCLv8FoJtS8HZY",
  "key36": "33a49jUkGDgEzmzkVCGsKwNK9ptQj4DpjdLLfphaNHYFncVCXwZ9UbEUo2dn1FoSD7MyMaTMyrQtjNiYWZs7UUFj",
  "key37": "4ASV8vkebPcqF8uQYuufGgBYixhLZ8PwdKJ7nZc1v5s3Hx5UFy6kbC35Pp66SKEfEFRoLtnd5QPRieH8axkD1zsP",
  "key38": "4dPk4rCVhff5WFbhbvGvBwjzsHeC7v4ba1CPtfF5tPRtAXLebu55Sy3DB1sEPBnEtZNAFcXLr84dNc8YBRBdzut5",
  "key39": "4tsgGqmAHsaLbgthWoqPsVX2eXEydABC2U93hRQTWjs2krk9VKTaQD2a5RDXhTrVjQAq2teFdBt6ZSSyAu4oq7q4",
  "key40": "7LgVS9LhKZoVTQTnXDprMz3yS8fvzKg6jdibCdhWDitvLupbDH2N8Km6rYMJNTSYXf2366qDoGyB6CRo9ePopji",
  "key41": "jWz8HdAQc2Zku2kpN3ALi3evDKPJEGUiFEB7zfhtiL7KY7f8kbWZWLpsVp3WGZxDLdKsuPuzZ121KxdbiiNeEFs",
  "key42": "4EoCpnznCEJhSJTUB5hiSoB98rGsDBJaTUJSvoM5PM8Ut2DpmxngB7NZDEkzntTmdSQiAdqKaEicQkpGDPz3kPcd",
  "key43": "3NebGAqkYQzLNeGGwvyNY9t1eKT9T8muZrUfMEUpzmcnmUQMPi8SWyizQoGDwgSM517S296BHpnHennvHUhWswyg"
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
