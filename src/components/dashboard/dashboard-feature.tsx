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
    "2U176wfFGdrtWDfpjHQkabsM5cGAsd3HmyHwUmyPZGGpZhG93tgXmFxDDs3jTS9mPtvuRVehsnx8meowRkU4kkio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nULEMQwvL5wkCBBskZsFAGNSs1iey97PDeREMXJZyefT5yXjiZ1JSmHosmkv1aX18FsXZJZA3PpG9ph1neQ534G",
  "key1": "3cUiSMzFn3Y6NXxh7aU6WBkKF9cunCTDESfG6fPMMptrv7VuGQpRqgQuT2PqohMNyacuMqxsfdGybykrmYRVmwTH",
  "key2": "5CSaLdXFdWVTRUBwn42mY6E2KTb8tRW1QvkJeyTuWTJV4h9eerHhYM6BZbMkNovnCTGHwy6fp1XSHuscq5x6vJVP",
  "key3": "3mR7TnevN9NGoQHpHn1UGn6jeTswfioDi61AEwt2vEFjtVgVk6MoxQUX3cJk9GGGsXieTSeEWoAtKQwjLwere6MK",
  "key4": "AGqYX5az5t9PC3K9KCiYVUU16dz1kCqkjpkQ4uJeGaMQftqNpaNimMZFsLXD8N4HAD7akMEDneQ8QH4XfgtiJv5",
  "key5": "3LJV2LZf77EYoqenWVfidcfYLes7qfFMFXRNsRzckAgPZc9Z2J4NyKxnaSiMT8uWGEkrU1TupkzXEPP8rLMiL1Sz",
  "key6": "5vvrgsjyr4tKdJdPKeewdkjoUA5QEmeNBMcGdSkNrfAn9DRpQhodNh8Jkznupx4MmZLNAsszHXrizkzHcokSCdy7",
  "key7": "5rretj7sBfjVbvjD2rjD2h3sqvvbNAcntyBBC3PPibUgJFS3D7Uh5Qx82k6Xkn2Q3PGNFD8pLzGUCp9N55YJr8Uk",
  "key8": "3oLKF9j93twqsUHYHtzXtRVCUwG2LQsbzRPzsLpNCghWV8vduCrfnyHq8rS5uRMTsNNMrH9TBBQZveckbBeQ5mk2",
  "key9": "3aj69uBmEZ1AYmaLrdBG8TTWWYSJPzxEjaE5tihjyQWBUReCAroA5TZUVwX99DprExWUaELYhgGe4J5wJ6qdEmUs",
  "key10": "2Uictk5ZmpYLFvbLcYLUzZkXMLWd3hSgiBeHb2uR8E98ZbqGDFVxvgXEUKu8faY16SWqesJCpCNSPmPgPQdZZgNV",
  "key11": "HEs2XZc1ow8bjTVpqEUgRncC9JpYVU1BySnU1yjwWtiy9agGbCphUZgT2gJmB6yN249RDbq8H3RJKX5fj7sDfgS",
  "key12": "2R4pXFNAWF8cu2FfHhiqTDQ39PBrbNaB5BZXdQuPy3QfAJJf81LEhY2wLMCNi9FYY93bxg8E1UjFDf3Uuq81sB74",
  "key13": "366R1mcVj1GNkiwEga9S3mDUXa21ZMaDZpnM5AbCBzMHLJKPPEJfj2Xzrd71iXyN6xphX45i3oHPxv77kQdc98Q6",
  "key14": "odfYFoQXKpbJL2RKq1JX4eCPK9QoD738BodnuMfCVh4nFwVoMDnTsK4rs3rZxsQaTgdWcTRa8Z1XXUa3218PZpH",
  "key15": "22h4ZonukY9YPKaYgn4VndUtDQerH7hhRTsuFUG2XBK2VDSseZNyaSe4j7ebhruzjAAJrEP6ZgSN7VJtPBVzjSkK",
  "key16": "6249GWRQV1kBvkMD3bNLKBhcVKXj6HSfAEVHhZYTBpaRTSeY3y56iup6kYbwSmz342BCpXG7B9Q3XcR5FQJu3AuK",
  "key17": "1vGatWfXFJZiiniRVn578i6skqaucfxCpbNomg6CU7QRn7zNPVvjYBCwHwcstbs8kRUpUQsktufbKk9EFbqgX2j",
  "key18": "YYSTJ2HPAcJBe4z8vYptFaGemR5XoiS3FPABU4HtN821pV1nSuLyNXACmBXtRFxQfUcp7uEZXff9UrgjsqGKNTv",
  "key19": "2jEqv37eezEEFF9WJDaC7bbxvQ1DDQhmGpDZ64mxaEVgmMNmxQhEkC1atCEqiSszMBzFqvhPy8vxKsvwkyEG1Vpj",
  "key20": "5G4u9VfY8bgnGcoVDzixRUioJtjmEy91nVXZALaiHPtizUrEqcHtTeVqiAUMVo5cLK6P3hNX8FKg37qo7w6D99QL",
  "key21": "5XrGw5EeX8bSk7eSvFYWpsSeimEyrWQ4J2p7HAfdkxfvp2x5XFtK4eACqgMswtgJ5uaQwWeebhRif978KX19oe9T",
  "key22": "4eM7DRQiT8t7Uag8uXRzbFjC9GQ8ZnwSR8RStFn5bB9vT4UVWdaSUTuVbb64DUfmte1oWUBa2ytMnYzKiQTYY6E7",
  "key23": "379L9vKkYYaqp8ByNDGYjU4FCwJ9vP3QZ4ZQW2iMexnYixwFvDvnTH2KJvoG8EWkfgrECXbtFwpBQPsMKCAFrTH2",
  "key24": "67rntWTtuvUYFWiWikRKE4VJw8JPs3xBVDVaPsibs6iPo1FrRqpauzCeAqwpHcPSgQ3VmxfqCnVBWSCrQoELmWca",
  "key25": "skP8EKQwzfWZCKyozG7xiB2t7smKaoiV89DmRKE47WWi3cNHntQrn1YbmosH63C9noHu97AAa3jS7MrX9WwocFH",
  "key26": "N8kWiKSQeConqicGyuNXyiGz3MQnoZupt9LEhtcBBkhWzoFBq1TFWT2KdGfvgjAAgVpYt5nK96E9PYLiaGRn7HN",
  "key27": "3fiVFJA829QcJh6mTTb12kuMTTJosEpFRtrpuobuGCfvGikjvDfra6axTUQPiWs9zoWQQds2CwU3bbyufFN59hLw",
  "key28": "3qGrEt1DcZ84CSRtvryhQd3EXTDPJNP4JVRHnUpLx5bM9SjjDfyZrwMmnJmdCjmQHXdzjXxj2b1Jj8P59kcUP72V",
  "key29": "2exJHThEztQctCCGwSwyxtQHamWuQXkkmvCwFTUfBFBrqFNyQXM3ZJRgyna48AWsmsaKL3WPwoh6smEzMDHPgrjw",
  "key30": "57vLSzWZ7kEshLJ3KfYyF4yP5XU9bYLRa8pRJtGancuKYwoHas3pJqXgpWBmVpFWXvBA99FPZB2DCtWn2VuFM2ek",
  "key31": "PhzpGvA6Q8r5rAjNoA8mPWruioruVE7PywFtLckiVkxYz8SnNUH7BobGngwg6A5sDhSeRUwd4oDDPrFVihFxXuF",
  "key32": "M1dX2EE4RiwrAW7RkMszdnY7uKWqJqa8QW4E9WbrTRcJ7Xp4b3xD6DnBQARH2YFSJRiASmQXww6oruRkEVsRvKk",
  "key33": "4YcJoVvkzW6wgW9BvzZ9MCXsDk5oCvTRtEawGLWESuSEsPtqqU3DR7Prjx8vWB7ddD4GeKJNzYJi8LVArcXqBKW"
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
