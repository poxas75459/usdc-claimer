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
    "3ZBvp4AZkefcSSsAfxnDV47P8maiuofj6jkkhYiZmoBYgLZshSyQVhfyiDXqbN3cyW6oAHynQB99gFCsDgMBJZAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fn8P9NQp7cV9CyCpFzAd1T9r9uhGLfvkqbbbx7w19NWK5ebpTQ1Bk8rUPjtXu73ARxF2DMJG7vsu3hKrHLmcuXw",
  "key1": "2oBiTKX7ZymGYC5k7VCD9y9qJsoXxzeYHaeZEvn7NPtA2mgmWaKTZpMeJ4SN1i6BuHjzwDQsL6XDDGERnXWfdrVL",
  "key2": "5DBBuGW6dAX7BNCwRHFUMXNVeHsPwuVzp4mTpR6xdiDfNfc8xrUNiitwaWGB9oddu3Vo5Q3kfN7QfZCUfzDd7YSQ",
  "key3": "5s66BKkt8jXvhkpWBzPoCP9UDU6TMxZAxwGqPJRPPfyFX19GrNMjQks9Tss27R4T7yiYvbAhKQ7HgiVu8jaWc9Xu",
  "key4": "QCbyoBJPGRJ8R6VZGXGfktyCiUskGFnREp5EGTsKbrPkQTgm6jrjSnWFJTzktgjcRJ2KmEaqpqRyNojTHVYrULe",
  "key5": "2avsDK6XMo26iYN4mhBMHL5jqGvGoS7NiLB7Pdb6BDeAXoH4VuiBfBJsga1iV7dnoY1zBWnzD77mRLuFp8J8VGLM",
  "key6": "4a8fSV7ArWxYdjTX5Vpk8FrGx6RGZVfqiKWeDLxbSye1xu4QRVjQmncYBYseE4XgWfDGqtNxQQ6o4nvZf6ZLUUYE",
  "key7": "4g3GhpRiktBvPZvgBH4v6f6Zbw4yKrGAXmYr1K5TWTmd1yEdkL7nFJZJaFMVNZgqnJHyRAVE83VpNsLK2maJLFcu",
  "key8": "3mftnBLhETE1kkZhVRHQvbodEQN5BKQvDZJvPnqaeTBpE1GbhqdScse2x4YaKcSksXNQkZLNj4XiRBxkB33Vs7Pe",
  "key9": "3yV96967qNEded9eRRgD9cTHwkGmQZD4zrhkXpjQ5oC3116ZfpEmmmjQCGLvqcnJLberRGw2fVmZcrdPtwzcZWZD",
  "key10": "5zECMJsEJr31cj446mFkwCsSuZ9UAVWCZiXLGUfpVbsC9NRAFRMJ9QRXyBL7zZvkuhvw9niFHB4utR8CaiVqcst4",
  "key11": "5qCJ5YYAVHPDTr7c2fQ8BxBDoGdSEPrWW1sgxKQxm1MagMqi9eaTdpkY1vtG6mtmCmQyQQXnmxa7Tk4xLT3PCEEk",
  "key12": "QY4gwwa7XHqzG7NBxHPBa2c6qC1nd1Tw3izM39Ah4ReU4Eg41976Y4iv4Xdu4V9FA4LiVy5WwixknEQ1g8iixA9",
  "key13": "59RfjXtW6fZfQJgDj1rxSJw1H8nnimMAgLyzUb7qD55EpeNx88XrLYkqLSrAYwuo1DcVp6USRUEBXAxpQ5A86hmg",
  "key14": "4vzvYac56HvSJd1VM7C9TKNJrWTKaZxtCdQmTa4T2jPwhpmkTiz8Xd4R1EhHWxNa8HuYotynHuNd9uf9LWji2tMq",
  "key15": "2aGniEJNPhhjCGDJbHenwfcGyWadtqdUkydd2jDhfv5yshzZaphPgFNa7jAF8trzdhgre5W4mrdtLqW9hVvDJti6",
  "key16": "8yELDC8vw7Gt6HmgRgpTemjcvuVTzCq4EqoGdGJCLejmHYt479VeDGx8qUgLzxzhiidtUCm7JJrttZyDCrQ2AXm",
  "key17": "2f5yCJatcmVNACioJdmbgPRbcwko1j6mWKCD6MgaVi2cpJeNsk8tb6HJn9AxSw7sxZ7t6wgRvGhhvDddEipkWpDX",
  "key18": "2GpJzLDVRWvDPbqvnsD1taE9wmHQKmzdNNRbsRFENyFhcYoHjaXEGSAXXCfCWrGUuYqoS2VyjLkupDSQQEzbmMWk",
  "key19": "28e8G4A7NgKN8zPeCnwyG6n1jKEwzfUakbNpUfeBDg5wK1P7H55PM195GEKawkQnsKqnCmNQoubteDdmk6BmvnhH",
  "key20": "4KVg2zvugtzMCuFuBQ56VsVihnr5Kcf1FeXRDV8yxLFaQPyRmtUkTuNP3wudPeR9DaKWSUb76ZnaSXHTGDWnNFMv",
  "key21": "2nao95bV9rZCUpEo2PzegCnQzmdyfNa4ukQqvyCLpnX1wTHNxNbDUdbLoiC7bJUwbZsJ3o7dx41vTCQCVXy5Ry7r",
  "key22": "2LG8kbGofjuLE6e9oZ9yaaNZ9GeNukhkotxMdyx3mWEDG9cnRBdLrJKF1esyfy8zfpAQzLZTca4emR7fLt7oSrJv",
  "key23": "qyGmy88wR5EGUGpmHrtsM3PyQfriiiVowQj72SfzidLMUGNhnprr7vj9R5xmXDbA7S2W8mqB7TWsNzJ86wHdX2U",
  "key24": "4DymkwfZ46CJZJ5on3GGSuE2UnqWG7PYxKCPraH3FufBHUEqmX1tVfFNRkvPrwqbNKngEfrAU6xnE4MnN2iogZ81",
  "key25": "saakdnBqg5oJ3gLywoD5NG3bWVokZL6QFmDeJTLSFcHANPHnToJV5RzxFq3K5zoC3Uxekv13ZfVo6DiphAKbXVN",
  "key26": "5R731cUxAfDmnAr9779SKUthT4nXgeK5WG1Hs3BtFvm1wfAhwHQAdcA7RimVv1CzCpjVGz5J6jaf1LHN76MfsdbY",
  "key27": "3KMm2qiKnXJkLAqdRmB82vNj2qhgnUsE2TrVure5KJiyrzybEbV2P7C9Z3g8p4tLKQsaBVQfLTSUataBjKMzA465",
  "key28": "WGDu6DYhyzh1AzbKggePPUv27Pd4r4A78MiVqGj9oJezZaexTNaeBkE3C47AoXStopqVrjEZFygk63yDCW5nHmd",
  "key29": "cRKBn88pMuMnFMyiS7bwwxkqt22gbrPvgtF9DGXu85cdCKkHaM1DncTGAwrLFKTywbTFjbFxxmVGfbrM9L9wXSy",
  "key30": "5zs9wuvyDzznTwe1V75jsjy1eBgaqbZB3Zk52UR8HWRaaxA7bc6ZsYYAoT6LP2xU7zhwEUcm9qQoAcYtNbzKFTP9",
  "key31": "3R9X89DMp5378qV4LZhFn93erooxq3d58qnceTtTu4vpCxvk6CnPtwi69oNJG77bVn9BQFnmpARNcnipYFZ1ZceP",
  "key32": "UPURURNuHfSRMTD5wwZwYYdnMWmBvTsfmZfobn667dN42kXRrkE5jdmzqWV3z2h9CyMRHzFGtXQAodAmQHgwhnc"
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
