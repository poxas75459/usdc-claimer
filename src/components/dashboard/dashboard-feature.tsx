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
    "sqSe5QVC7u4i2u7RTENVqiHZEbfaiVjq87GN2HKjjEsPWRVEzzLMLu7oAUT7yPSNaqcY7HwRj99Q7NN1LA8kYZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUa7x5aJ29dpTU2ViXdWjJGqVD4VFFeVPJdHHoUBfPGx32DtyfJGLmnmfTLgmxseffvDXe9Eo333NNfRKhvD7rP",
  "key1": "2qTcs1oerP9MznGdTkB69PEKo2PAysN3R9gQP15jsTTtGGtet6KxZvca4va8mZdT38q9w35bcEJw5hK73eAMBp7Q",
  "key2": "2sWyQtV7rT4sdC2T59F4pk2KRqgz4CfbEH5hB6wbPTrAMLimaRnyNUyH3twHpVTDRLdYYG4R5h9CVR792Mz1G2hF",
  "key3": "45QPBUD9YiRPSsVxBR2XuNxS1V3BhF98rc3iVykYd77aDwbBSRwha72k21k9fhcgA8KcdPNK4n9pBYAJizrjqWwA",
  "key4": "5Y5qqCvQHnNJVrA5jVpSPpBhFRyyN1TREMZDndmDNURWua6LM3iptNc6egCzZKw6zZBKbAPv2oGVX35bYdgF6Vhj",
  "key5": "2B3eT1ERGEzrG7ryJtAqpJys3vniuS2jrqQ9G2H9KJB4huYWf1zE5Zq7zWve5DBMFJCMqKKnWMHN3azuZwGxJgtU",
  "key6": "5j8xdVYk32He37K26i5VvNp6iBCESkNcbVpbhksjRwxa29EiLFReFzfPB3DV1JDK7tGjG5THk8L5UKKBeUWShc7k",
  "key7": "Fe2o8eZ3wByMcGWskAuqC3EbX6aVTkpBg9P7Q1wu6iwDi9FaU1T1yUUWrqPYuDw6WuYYjPHN5qr3toUv51ztYpg",
  "key8": "5BCBBQNTCbhSEfZNLac2KQ62ov6FrUth2RYwRkDVYaXobDk5SB14GyKgrYd1vsf1W2GtzYQAgS3LX6iKcPnSBCe6",
  "key9": "4VhsdwCfBXKpCkBerbipFri5RoJ8p6aJvQRevgzCEpGmGjMqQJuubmHVemZFyHXSP1ecWvMpWDReycmtgF5dovJt",
  "key10": "5LBHdVCNBDnVNsHSzbfSX6fyEDVQFqZiZmgoWtuyCJLLFaao4dAiHzHHNutcLL8eJrLEBiaM1447TgHz9NmeDrrh",
  "key11": "5CTHFJKP4yVsxTbdqN26CjefwMPEc5D9pXirunZ7x2BF8jYXrtjnLd3r3gyyy3bHDereiNk2vqpKDvDjEX1UQ5dE",
  "key12": "4CkPVgEkxunHm4mvcr7deRj7R5nc3APqLoo7TPzXoF9eHJyCyPE4DwtkJdnpVvE923gGrLm9LiDF4pDuZgGMxPNM",
  "key13": "2ndqTLwUWTRZLV5wB2HPmLoWhcLhSoviYog9c4JtDq1oACQEjyA9cxjMrrFYAv9Rjabw7cmd3omuW94P5AfZkXq4",
  "key14": "3ETpAWKoud8NtEsfC5LQFKRBFZcXJ47DMnLH29VK93783LAb3jvL6HBSJd1vSZ68SHi5DwAPJjmDJVhQnbMTuXRo",
  "key15": "2TVRb1at8LcoaSqtYcyYpB1SPoz4FXVe8DJ2B5ZLJ6A4xGjJ17bRUnB9WBsMtzf3HwK38SFBrZWXsoyNW5edgux",
  "key16": "4iVHdErpXXDU7iyG4GdMhTjoPMskAxZ2cXimypoTyNFVxhsrwJB28KKAXjjNE1B7R7nUXEPJNET8VjNSXFkWmFb",
  "key17": "5kL9usu3kiyV9yZy91datF9VVzszCxAtSPYvtzBzpfjbiNhmM1YgS7E5xMzWd9EyCiLz21btAH1U5eHLaASZzCUT",
  "key18": "5ym9hD6gehSkyorpfZrZ8Uv44TSc37jz378JPgZ6gYtuiMWupxjGwSDtvP5TXWVvJYnob8VJ73YrPSakD6sT4U5x",
  "key19": "48odyjPYQsCUjppDi35HK2HwwzhptrfVmxadG4aMJxeJGWwZZFfsjiX68BjNqdhrobLvWJPqmmB91zpNNBR9AyZe",
  "key20": "4SMZwbCKk6gCWoe6xE7yr1rf6eSkoENkvmEprieiuHGynTDfcaaSAj1tRQrs7Hu8Dxc8JjKf5fR1eyoQBzfiU4ix",
  "key21": "3cwRzc6vtfhmPaUdakXJfHTz6r2tJcmTSbysWNBrkkEdjWrpmxSAVyXUBtPfDcXv5is3nRRaUztZsrf5UyCx8FFs",
  "key22": "FC5CPZaBCLN44whfHTYcv26YeQFmrvRjjDmbfT1bFqvCm4M8KLXWFvy4W6STbWg3qEYEa3XY5YEUZRVrxee8WfC",
  "key23": "EnyoZcedtPK3tAgDeBJyPoAihSu5tDaaUE57FwBqDryDYuQiU4KWGypqh7DHTT1fHbn8bXx9nKX14p7n9r6u6Un",
  "key24": "3r7Hck2oo3prFj1TniPiv3yep8EVbyXKsSw8kEJ8XvXGSLgGUNuXMePi3AE4LC3mn4SCEd56vJqTzzV8sPGcPXom",
  "key25": "3noSqy437ZfqoEP2M7XhktiH6kpRjHv5dRiuL63ZUYyZeSQx3QQYwrRvfpq2VKd8nVkmFsgvMCXuFX6UmDL46wKS",
  "key26": "XUSEfSJS7UbiZhWgeopaQhKBQSniuhFRCKba81b3EdWWayx34ocrzfpi9ufs3crPiRKo4kAkv5PhVsv6Qcfz4Np",
  "key27": "4XDrFD9wWpsReeBZmeoz5SH6s6jXuUSuYD2GLMYcrzQEGaAqrnEmvGV8mYVXET9kZyH18U6qQoNaRbTUXNLDikHm",
  "key28": "JANa7atbNFcH2EBJPcdH8Uaxww4wHuEFstnnr8Yjk1i4GfGNYtY9HXkEAooJm8RzopHkfGyE7FuKmmoiAhFMcZV",
  "key29": "3Ea1d1jxNLPHB5s9SfPsSWLhfvDinjL5jyNpAVyxkEg2Fe2hBygpkSXm13N5436YyMS513mnD9qtuB4nbZHFhaU3"
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
