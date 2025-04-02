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
    "c1wQpw4taAtMUkGDnVwXkUb5PMxR86HMyvdGYgTY3586v9sEkyhRyEA5YqcSW4gEfY7woQQnyjodBTzguYRRxUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HbdkDFCGJ88PjUsBKnJvm5NdeygfHpFXofDnidkCzXjbRMfnSQjNZaUMAhbvpUq3mcLTr65c1ZmLwtPEHua1NwF",
  "key1": "3ARRUbLPnkwypHqu97Qqd1coET7uvGJsnhVoTdhxZ1wKV1XAh3etQUXNqDM1kL1kB6NNPdQrefFh43KAAq2LvF9b",
  "key2": "3sJHWkniEJ1t9aPNd4rdsEdboftHryuVL3qr9id5NcWfzZArL8mKxcMELLeJBjEoTXnG1ck6TJb8qBP3ompGsgwC",
  "key3": "5k7y3Y4F5BsC2EoZ4mkU3MrN6RXnTF8136zTEHhPxfGH8ALrm7zmbwK9vK7XxWaPuc4mCd5nKTmBUTYSByEtLLpw",
  "key4": "3GxzcWir2kUxrigoauWCo5gqgjbt6FzzAtQ4x2Bv2pM64XJpg7qYhqeX7vHuhsCMKaDvBDFYUVcviAcifwF2iwPJ",
  "key5": "2FibGSKCvP9BdSyYrcFdifiPZW5AxnqEbio5AuM2XPXftEtDgdqVpo32aQvNQBEQQncaZKDiDc8aXXiQtiDPDk7g",
  "key6": "3jM3ZMJNtpXF4HoCjWLJWhep4juXjfXpDnaejSHzWBZVM9NhzYihPDVuzJFJdiaWJZzNAtkhTxW2jgXi2Xj4i59G",
  "key7": "E6gh7CV2JpkKHZnwxyiGQ4c564nvapETVCvwduhoPmemfx5mp8EGsxhuUSW5apPLFsJqJoch49s6EcYrwzAnRM8",
  "key8": "3QizCDNiiqPHD1ABbzGJJP8GmYi8mdxXRsJE7PK1tRNbQ4qCTTChFUsnTybmqPPLnjxS1ZLwc2JFwq3mvx7D1G8Z",
  "key9": "4SXYemCYm1EywtxeMw7yu2hSdTLe5vzomEfx2TVQFsxnohFDNYaD4CCjVC8ky4zVkKxa5GgzKXU6NGgVPSdyGeYC",
  "key10": "3k7ZRtQxnaXkVrRu83tAMp2S2dKKpgbKdRMgSiowFSa8ZjNjHtVg4mnPfw6K3z2VKiXViosjRh8mYgvoBwXVyKFg",
  "key11": "4QVnW5XokxA6XTfoYAZ2cqWNzryudmSMrgHxA4rXCCb5vqsxGcGgtztraWtw8EAwKXc33RPcWVDDfxQbkT3oChPW",
  "key12": "4xntCnqbdzVAWQXmfGoBtWmr7adFa5ocVuUgx7YHoXQj8MnCGjzf7L5AGr2gmkyASQ5hZSKVtAbcy1yUfD5GMdXU",
  "key13": "5okciqtoHYD6Yrususe7QDqvYS12KkpTbJMpT4kG7S5nc4rUDfpjjfadPZU3Ru9bgFigtxghX1j8JrKtFEFuh5Dz",
  "key14": "3qZMFixcHFYnuUEx7sYS51eMYoT4CftnoPMrM1PJVhuLoSHVLCX6tJPVhmQL8tVb4Hbs1j5ZMfepx8YL56Xun2VW",
  "key15": "3pk9ZKGzEe1Luxwim2ytA5DXFXWSZv4PKLU7FppQbc2K7v4yi7fDZgneQQ3RZWvyAEBzaUraZoETB8z6EQ9FwoPE",
  "key16": "3iGxdQbZ7o5wgQ67gtDJKLTgYRaT7XkAVh48pEAU6JMjTD1HyRYEsEjkLdMsrbyfhEkt5EftxBU8jJn17SF4nkWt",
  "key17": "44uHc36VaNBXBX8H8yGxcBfcB9X8XhnCQFSANyjZeP1tf3MXmsAs8MJCtRadEAopE4ngRwFAHwykbUKqkXwVcnqq",
  "key18": "51RCcLSqucdeWbGXAnNz63c8PYY75nC7DiFpb7n2FtwB3NLsFqEjGU34Q65oERsUkzKcCiqoCBHSqXEAFgfRLdBi",
  "key19": "5LZFsf5Dd1dJqUBFmYxbGaK7kVxK3JuXVwgkEVgmz9jo7x2yKg8xEbMosJsg5LYux3cAW8JDefx5nvfr92EfPjrZ",
  "key20": "azxbp9rJNpzRvNGHCHyq7DX4VmvFV3PELYGZQHSsBwH8ho9AUvE9Q1HTnLw6gbwQ9zTtwjSxEcW6HLyXUXkDVB9",
  "key21": "3svoQVR3EBybJBETrBjBiEvTwca8aiTJdabJ3Lxr6uyYWBzJNvs7kqd8u9YipUx2DHYNnpAc89tDmMw2aqvPWwvi",
  "key22": "SGTsfQqNYazE4strWm3PCTpwvUGE6ZUTDnLQKrnwpYdmEMECFDpCgysY5D9Gk4sH8QorAB84LmvKAzhURvizE1t",
  "key23": "2DVxtEReMexAVLCEymN4ooH5Vzk1eAvmXkiN69PmnPTmcBputbCqtu62UCo2fGruxx2T8iTeeynDk2xaoXyi1Gbq",
  "key24": "4g3v9SoVZNzhYE78DBEQeirLSRL33bNYBho1cXdPF1uznopjoiMSsrTC3weetdmjdjoPY8z9SLgNuw1RxLvEGQpS",
  "key25": "57jt3qSR1svpyEkWi5GD3xFk1hHw1L8yPwMEENHEFgRmPi5FFx2hw2f7XcEn35nqtAA5LcD6zANhJH9rW4MxPdB6",
  "key26": "4YYcuZaXXLLxyo6w28BMhvXaQHEXKG1aWQ8i9DM7LXfpbVQYPnx98VSRvMeCoGd6eTxLzRCd3SFVpSw7HFrDGA5y",
  "key27": "2mD2dMH3xPuU1hztXWQTebzb8633VvW353D6jRoFobB4dsSGVUXHVTgZRL4mU6g2bRaYxi468Mwb5jn9upULbmhS",
  "key28": "4kdB9HdxWvVSDAVXJAo1mpXtkQV7Chhq9me8zVoS2SmMG1YCNvnkSfF5vs9SmdxEY9QHwd9CVqLv5375sbm88g84",
  "key29": "3FMMFFP876jHoM1TTAcDDJ9cNxbKQZpUwvZojjK3yjvyccbprS4oPQrbDZc47V6CHdNoGrgtmxha5jsnmXMW49KU",
  "key30": "Z79pkBHSAU7AHbwbCpzdfdPDBr5tv63oqXUa8eoNXCc5pgciXN9ryYvMZV8xLoZKto5Dzhmk9o3HDVk8nYnseqG"
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
