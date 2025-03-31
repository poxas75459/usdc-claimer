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
    "3m61SpbjDj5qGhimCP7nSFNLh5StDvvACkAx87CaVmfj3NA8KNDe6TcRirZDZunJ432jgti7rbxR96XdTztRwSJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9kq3mnifbagymh5ncezsWrqddy94Vg2P7nhhrPbJPrUtezVK6dxubyEoKyyThJjw6j8LehGwwHoinaLgEvhXnX",
  "key1": "2bguK9WkYWw6v3dk2k8jYZA1JoSJvQjrBP4t6MJht1mirdeTrHJvjyb8HopGwGexRjpyCeHbkWu2wzcrSJB7LURe",
  "key2": "2gyFmRpg9cHeR4iuu33VkBZ2jXauQ8taTAdMLrwt1chVAvBVLhAazh9619utGzaF1nLyBF26yrA6JkPtNT1G3rRR",
  "key3": "411N46bm4X1YsxjuwonG5L6HnQkFNJ5GNoXJXaCkyxV55rs64pmADJuEg3MU9ofp6DfZDuxL5jWG8oBndUqZtei2",
  "key4": "63gAGQfGUg8e5F56coprEpw2aW8R4eqMqB5Ei7Pi3p8hBGpb7oFJgdWj3gGjhs6Qbh9FwNfqVWbvJ797M8Q8ggLj",
  "key5": "67ZGZ33muSCoJuh889xxapk3pSSMgDfKMqR1N1JLyrLncD2aFPKGkoxBPsnKsSW7FHzvpwdHH4UDSzutgkcZXuiY",
  "key6": "2QFZ98goh1FvMpWYsDYwzPubbjeUqmdks3kM28yAAhBSr1HKibaYsifHhBteKQ25dzXta4pp3D1axF1jGXuT25F",
  "key7": "2CJZLqvWBWUtWM6UWKTm5T43hVTwoT53JkNmLKiFrGHpLZXvLbe27hFYb2TwRKySPeyJKHGkNTou8aErjFmLmkT",
  "key8": "4nPTL1Wt8UZFQQsQhZtgBX8ftt6Lck6w5DwTbZJkGNM9G9kTPsM5YJAJiCDoDaa7aMTRSjhktCzUXwxmrc5w3K18",
  "key9": "2WkacSUgoLoH8oLaV6wWXGuUMt4zf1cuuDWBfxM2J8v8NVrcPoi81zSvau1di98Y2hDVVEgtoQXpULxHuuan3x5E",
  "key10": "4S3hQzfvXVTe1KHgYKC1r2MGKGAMp73pCSvvNqRuHC2s3KHRn8o5aCLj9jVKHmXZQsTHTCfZGZYtG7HP7UFWRo8D",
  "key11": "27zFJkYjRSZTBwH7Qm1NUtng1NK5e4VDQqoTjChtSEyR3tkFZywVmBv9dTdnX5pNBTnAzsoW2XXqZ6kKZJ8n89j9",
  "key12": "mRBKf3knw1EtgCHVtePKcJqEuTLw1HbFQdMiwzckbYS1p7ejAaGr8RUs8hZLLRSKtyT95YSUbh3JpysCVuGYBSu",
  "key13": "UfHekJCrJdCGmFW1cSTws3StMsUR9sT8UF9F1qa4iJGq4dq6nnUFRpzEARSKf5tdvHTy1MiVyJfyTmuTpvENh4J",
  "key14": "3xB8wTzsCWwGrnYwdB52hGF2yKc1zD4vTFv9NgeBZRSwM14pTynRTK6vneuS9hNfdY7RMcutHRbE1rQGcJo3na49",
  "key15": "4pSwUJQaBPScaTzMDV4eQpzPTRSBjEwQNUvS1RGWsaBDY6NrTtED59QbGYHvtb8CVTDWeRMHubi3Q8cYfwBujJwg",
  "key16": "4g3efWdzaUz5inAQsHSGez3mnrSDFuvhaidgVaFTBsUCYi6LSUwZHSBhxowZ7YNjMxK77Pvj3TcYPEATVGEFAW5g",
  "key17": "4HvAmNwTuo6EtCzPK9Xcr2puqizj7d7HhFgzxXC7KwSL4n5ZgLMDAJM4NPcJ6VUL6ZDCUT21uuveS8xXS2D5ATqx",
  "key18": "5PwKsbRaRNcW4RvnCoSJNLwMcEfU1R9YRTTTCnc7h8QAHoAvuUC578mowZMsJmiXjCVrk14naPKWK8gwjqVhWcCK",
  "key19": "43wQAfQt9tLFWGXdXXTGgbbTjaZ4XxKUUdCFhMnUk6bmbD9fQz4F4895uKrtVGkCVDLRh1jJonFQAUY56e5BD3Nd",
  "key20": "3Z9jSg9cyszVRSvfVacGEYBNWU7GeZVrKUCTjBc2FS5QHQmKhYE8QnT7AqakfRvAxrqguF6kYPsP5XbqJbgGGEmE",
  "key21": "4ktF9ZVt8K3JHb2AmoS7tSiCN6wGo6kK8YNZDMaac5jre4M1spjxQNKCvw2hpePsyVov9VcLafV3i6JLWM1sChXt",
  "key22": "3fRLM7qnkKfoGeURsuWVvReCU3zrWtKGywyesqhhLC85PbrhSvd838PNx8Hvf7X1QYs7uwYZ4VvuxA9N3K9AcRNE",
  "key23": "3c4QQ8zGZkhD69vT8qrJtKaBUpMPSYLSN8K5QEe26iCjxRFN7gtU8vVFhhoKbMQmEhBnv92gRotbLuYfescaC3po",
  "key24": "2d7iJie5o2s3uSxtoJt22RqTe3Dwepv7fNrMK53QWJXxsyQqc3xrs3NjhDCPsycYjbQbKSxtZWHMmJBtUfsrN4gG",
  "key25": "gDfFkAGgGH8zhGJJvF5kzwfg1owQP5UhygqCZHPkLQsYzrzo4xjGJjFEmQTr17Ap7Z79WsTz2sNrCy2579r1XVN",
  "key26": "2THPPezrgx4aiKvPUmH66bNog3um2dimGyer5NWbRcGe3FVnJrqCYbkka4r9JaoiS7bnioeDvErX5VpLyDhLy1vh",
  "key27": "9ke7JQjD1BZgHR77Tu2jfDEJQTGLNy4yGBwbobm51GD2yxjaZ7HReULPPBowDRimAXAMZ4PErrbxiZdTeY9Baea"
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
