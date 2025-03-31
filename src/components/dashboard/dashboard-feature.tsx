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
    "4xRntWJhjmxCdcoc4eGdNCv9d9yjEv3tHZqZGWXhEN9Xo9yP2RCJLV5v9tem5EwUuPr1xMxvTKBtjnCthxqfgX62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPDLqVoBB55GiDn4XmKE6ZnMJp7GYBeFt65HqGYGjFv9zVEBXywpGQEgtx9gmYYj7gHKuuUtFTsoHwqm5hZJmqi",
  "key1": "7EBwYu9LsvqyGMrDevMfAgJCtigHCTUF4rpcH2b2PFTJFQQif85oQAzH69uZfxPuHpuChYJWesani1nEXtHAPqv",
  "key2": "2RzcUa3XCRWjxXp3NopRuNK4mYcd3bmxXQVhiXwFRrBonP13VjAijEQnEe2zTbdJqTbfWW1buR7i5vaXbcNuvo1z",
  "key3": "285aioiL6NsArU3PewyK1cSqsBGu2vP1p7zcHjfGs3P8L1SVG5f9m8f17WjrXL3m9EF3gqED2mUBchSzVoUAjRrG",
  "key4": "234XBGxgRv27UyGicK71KrXKpDWA8fWZcKEPNMchJxiLvBrhADkWWwyHEA87a11YHETwWbCtkQgpcSC23JnosrU6",
  "key5": "4DMT7r1kppZUwxToz2WimLh2rv3VCGd3yWedo54qFaYg8C1PeZQcw9MCQbUGpBb9wd8MqiJLVtth2RyzMEPx6tjf",
  "key6": "kDdV7L7HK1QUTKtdFNDfR5fnjKBH62VkHhsMRNuc1HVcxzjC5b3dcxDoHM2gUn9JdB4g9c7N77afFQCvVFTFfA9",
  "key7": "5WfhpSeDAxc9cdKK3EaYxeFvrvmSPZtiwHSMUru97jVAEaVFjqnWwrnwvdwCYTD1LbXtJzT8uMQVxnywDaWrwzf2",
  "key8": "VVJ1QBkKDY8g8MYji9sdJmZi9HXLAWibgs13C4MM7XyVoFGkVEVD9oQZ3j4TpS2FzvZqVYYAZ8rKQF4sYZzYKsv",
  "key9": "584SVKBHmBhjP9FFG6rrkWbP3TfwobuMYSnNQRc6WQvGFGyQfUw1rRoUMoVnWJF69ZgRyoVXj4nYxE2X35cAzK8u",
  "key10": "3QaB3Savawx7AwnASW5doK8vd5mkgT1LhdJd7vU3JbqLhNLwpPEaoPGmPbKGSTwHXH3SDbBdLqX1CkPW1z262CwT",
  "key11": "3rZq6zsnBESVrN1JUnTToZCsX3ELreUo5cVNGTS9tbPnqHkgB2HjDuPpUfFJFqtEjc9odDRquDBDuAdENf475CjF",
  "key12": "3XNqbS6fJCjzdZR8mXiqczZY283K3q5tU3MT1oQDBxMPHUqN9kBVBRQkF8XjcEU2tTgux1Aof2ixM4tze4QXVRG2",
  "key13": "5CrxDNg3RZi5Ab2DXeRBuq3qX7wZeKhKWpRa5trH2ut8jVy3n2EPx7Uk2GtfPGUBn5dcCqpdyGCDoYgNNToDPTCw",
  "key14": "4cFi1rs8mHgCph1Y3ku3wEaTLz2eSAVA86nLBq3shD76LxTnmEzAk5GHri9rkFkfotdkQC1YymY81ZUYrTefPAA8",
  "key15": "4spm863nHk4651e4kV45iPJ22TeWt6fLGW7K1WcPmYHyiGgCJYU87ujnwhL6GmdfjVu3dD4CVgF9Zc7daFonJACW",
  "key16": "4gYjzEJnJ8axnqJEAu2yRCS9dyueqBHoQbDiVU52XNiy6j2QrRKFjJEmmvopiRndbtjq4k5vj4Uuoq1guFd18Jsv",
  "key17": "5sYZ4QXYib9eLnQWourfsbShtHsY9EJ8x8sHbJwWMsQkXKiqjgbUX2RxGXECZwqEeTNTziWNvMfkaDVwgCnn2v6j",
  "key18": "2DNYSL8Y8JJYwJdUjuLN8tvM6wnX7s4XNzp5B1Uz2AJDSX5qvUB9BkGRgTzczJton8TNqojDBrw9e89Aus3PViQF",
  "key19": "4YanKUu7fnfPjQctHeya4KAqhYBTHVjjxiVVRPiNjPwfoavEsxrdAUaFczN3Vgtryq3UUoWUzX2xKqKKzySrnEkz",
  "key20": "5kD4gL2oRMbesNGYxYkZ5dcwWhd1axLUdtX7WtwMs27ic5A4uunyKnxUjHjAsAUQ2bW8StsRhv64Pi6v17iF7CLs",
  "key21": "5QWyBr5gTr7ZNMiSh2TdGWyU5D5TfJikqJfH5EynSLzR8nbnAxpjwS1Rnht5VPBWDQ5bAxYCLqAMeHWp8HAJ88Bf",
  "key22": "xWHALEA9WUive5FsxxQfVPWUjyv5RfzHVxJNBjPUvVgRTb7ViAxvpgVFjAKAYr6Jx3QqajZcFRMCh8fzm83TziA",
  "key23": "2oDsXYmrRW86U6SyneRq77EPk89eoxtv2iLMg8mTgRkZ6aBNFAW4gmco7nG47Y157sNi3DuLSsss4nKmxK8f18FG",
  "key24": "WsrWCkxVAEVzi3WpGLmy4qnGpVnr4ers4wiRmx23zv9HZa9JN9xpcspGdWrcrKPFPJ1fW4NTLLnZrM1yJK2kPzP",
  "key25": "43n84GUVqqHY9Bt5GxRKtwurXHbGYHLVCP1H92vXqPog64r6b3skASgjYvmC8FqrqhaqnSiRVR5izLqfRL6vG2bt",
  "key26": "7EU2EXDMxD6HkjRYnmEt23Yoi56okeCbUcAWVDyCP6cjcVrC5dNyDyfsFPdof2tfUyoqvZxSu1Vu2kaZEimH8ie",
  "key27": "4P3m3crBuv9HUnBiLVwFd1HpzKgby6tT1ueyVC7ksregrgRM6xnpyNi9Dwp8ixy37M3deCuFhgt5YjZi36GkMcy1",
  "key28": "3nwmFZpKVJdLH28JjvmVJebD2N6TvRz37jPParHQWwjnfUMXtgnZLeFAyHc9AVBDcb3asBSdRL6nA7V1uRRJs1iB",
  "key29": "3GVKv5b8CMdf5bn54Cj4iPvDhKJdSDwHstv72fvjqsDXEtTYhWuw6hMWs1m4ieQ2NYNPG4zNAHCp9ZpiAEY5HPoz",
  "key30": "4UTWkqgsFjrKykDpPzwKaD8dPf2B5MVcsf88oHPKwr7D4VsdRXXrXSYdw8SzVKx4FPW2d9gbpxrnsvWMJD7givHY",
  "key31": "3Cqa5YtnFTU3QemdWfbYcgDxWZSiDGbqNRPyJE3DNpbG4yvq3Ccffg8229jKtyxRMNSnk8RvLfjvVCZLyAowY7EY",
  "key32": "4iZ7YS8TurU8W8oUBkVPXRyRemdnB36kgZtdkfwZTGYu9nHVHEqGyRNdJ17n7vAkCQPQhw2DZSerHb7EZ9fZe4R3",
  "key33": "5AZRpeKrGtu4i4gF9D9TPghG436nXbFpR4JnJA1rtMtDr8oJ7bjRuBENt9R69LkYmC16vA8ARouNreJJjqDkfTen",
  "key34": "2TYYezYqVfTWjcP5HTMsVV6EusoUxgfbXKztjet8Dg46dEzzwG2g42ZXRsAKmahVAir7QZmJ7pFUWZX9JQ6nNb8i",
  "key35": "2pxzKwNPaSt43V5EmLp2fJTyDaW3CJHj8Epsrk486cjyMBGXRqQacr7z7VLxthgYVsMjmfXk2hZqa9jqgJD7aAJp",
  "key36": "oytsnP1kNxch7Zu9MUNCdHKjsUfVY3aXWgrkPU8tSDvWHRgnXjZrfN2NYeYyndJMeriecANWVKiZ5DJcmos33wn"
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
