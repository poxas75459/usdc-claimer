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
    "JTwg4EVmjktRLyQAbqvkHqFnwemB8GHcmGdMbmh3eEhkCejyaNKMN7wYa5H4Hz6oMJA48S5K2rZDVVMwVZn6PXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNVmruTiUwFx9EUeSGTU5C2nefyMCm7BFnpn2akuKG4UbtprDBGTdVDmg7khZVjevBx2cWAjShBHNNheFFDZJxP",
  "key1": "5zDCTpEnDxU5NpyGiQYcYrNt5AsJataBAsPj6Lfr8MpPHPpobuy4SNr9E6NwGg5bM9B1GresJQTF4vKVbbbxPWi8",
  "key2": "63SfYm457mJN7P3hqMxY9TVhjeGrongSrLperJc8GAYvTjjAok1iLh8m1BydF8S6XVw2puSN5koukGQPTMNXheKg",
  "key3": "4pkrfuQTsX49bTtVGwJ9HH5adiBfTqC22FPt3KgLkA8JQmub988jCJczRSHs55jC1bnzT4kRwgNZWAySdtR84sJK",
  "key4": "2f9EmhJKtRRuMKJYfEQ8Uid9ApViiQhBe6dhCGVjafYM7j6LyBA3imB1AzKbgpqArQc4f3cJXDjBmwGun9duzcmm",
  "key5": "zUdv6qCuSq16jcHCq3h4Eu79aWvzXvbiFipkJYgnt8iN1JtfgYTMvnMdXH1u3UYpNCHxuZdS3bB7K3HFHVqRQEZ",
  "key6": "4zMxjBerrhZ14bS3RkdFGuBrXshSxGMrXeyf8hKoANTs98Ni74BB86SN8jaXnV4NUZAcnRJdVoWhx5Lyc3xb6jgu",
  "key7": "52kPpRsntK2fDVzq27xJUqoVM2b6voVi4mYjEMmiwVussuNP1FeFseYH3pN55b9Efj9YLSfdu5s76Y4HokQq1hdK",
  "key8": "GCNBCVdDKUM35pGqY7V9uJefEGyEJn2qjtEucHZE7r8XSai4F96sLzDuS8k3e7bkc2FacCidZCtixXEaY9S5xff",
  "key9": "5GeSacscSfinvXLACZVJkNgacfmBiQySt95n5wBA1KChAAxo9R54AkhJc1ddaETMUpzSzixxobwvHPGJ2SGSwkju",
  "key10": "3WTqAnH2cbnXJ6PaoEnVaPBWEdYuXsCJJYRnAqdovUDDNvyM45huQQbaXDQQ2dzQnG2QJPsvjX636BG2g3jFcjvX",
  "key11": "5MJMsUEV4EBatkD6PeWhKCvz67X9gT7S2Xtafh5fex7zqojbDxNBGZ9XnZzgHnEnaCc22kGgJnNmsCgFkFdUJDRu",
  "key12": "5m5S4vesdQNYxJzAen8EmButZmqeFCqYoH6p8oKhMaDFWuuFxTuww5qQqES5dzEe9YhUcEU7nmLtT1ENuRQvHhiY",
  "key13": "4FjrfEU1i3z7Kpx6UVj2i14tXTg7TzWEQ69XVQhhU11Ts9L7up7Ld1VCJhr3dVUoogBVsjxCPfAoUUwFQB8XTqxr",
  "key14": "3G7bMjPzJjC2iNAvD8G2hbgEUwn7cS3HHAyGKjKqQ5Z9i5raa8NMukgtoDufaVZeE5SGc6FFdpppLXx5XoL26kB5",
  "key15": "5gjGffD9QJCjm5LKMo5MtkbV2SR7bZ7i5qb5EJ1jR1HK9pGCsABC8Ceip6JLLKKkBbofqiuvQiqxz1NWZu43JVAg",
  "key16": "L8RHJBBEynzj5WomDdfVdQEUyyTuZp4nc8AkMfw7CwsePC3upKhMaaGkxnZrAT6F2HQotz67vDcK62oWvjpdyVG",
  "key17": "4n6gdoyr2g4jDKYjtKYHmJnWa9J9EnhSv6diwgCN54FwP5ztZFCBLNoT42q9MnKVCeYw3CAUzUw58bvi77Dksa3T",
  "key18": "45CSjBKywkQ3ZzMCgUv95ZiLj3yWo4nmfsxC26hjwuigyNfPhztZ7VSveTf96TQq6A7q9iXSH9JmTHy41zyo9EhU",
  "key19": "3Qg7BQkUAQoM29w6YRFmpC66aLixvfMEze9KREtcypFKFgMnNFBZBGa36xkvPu2jhEu47D6viUYo5qCPCVYuxgyZ",
  "key20": "2zNedMvSduQv4FWDFH4ymgbT55hUbYNW5Wb9328SxNcdDAJrsc9kXhDh6PyLj92zD8JNpX1nR6ze6PN6TWqnd9gN",
  "key21": "2iisG823FEnQ6JZYs4hd2xjFDjKEDvKZjzeqXBvUftMbjmYhhUgJf6UbubzzKoVPQcNcNu5y27L9GFRpUSBiMVmT",
  "key22": "57pWALEXzKBHhw29pJh1jbxJmVZqrRgPFemQZ5cmoKt6TMW894Egm8ySdxUgekseYzqNZiEAFyZGAP1QWVcEH5sn",
  "key23": "3goZmpDJBTrhgkjcQDREteZzr7DtPLrKDfTUomp4jssyT6XDjLcmDAaSgjySUhY4MpZk2DWKbWZ1o9ayNTdLLFeP",
  "key24": "55UQC7NetNobDNcAiDwSicaSfsZBzT8jVNZNAbTCPaWVp5bfsJ9iyxpv2yzTKuxDurjT4yAaqrSpb4uN3MRAjQQi",
  "key25": "3df8J2m3w3SURHvgcu53ne8i5BcQizkDxAneJNEHg58oAXMPVHYRK7w5etL3muEdGZBde9QjUfnEuXjwRUAXGqW5",
  "key26": "65PAiYgL12ugStnV1BaACcZnDdJ9fEWzPbQknj3kMgc1kcggpATKrSkxGpWPBoaZX7PsrbhvrjiBxbsbdbwm9Nja",
  "key27": "5KG8U6XxHH6QXLPXtPJuP3LN2yjStH37u9GvFjN668e7qXqFTCnKqBaywc7ncTTmbCmMpUDCCpvKhqh1DkiaQGjc",
  "key28": "4moTjWrUJnu6KERHMoPijLZzPaUYvowTgqV2caBcBBKXUGtJTed1Azn6Y96v3taTryFndvyi5Mi8ZXNyLY9khdQn",
  "key29": "FwJ2FGGPNey7tzAcNSpBTHbFnMcsEv9yBeL9GWeLxbKLWjkr3ntn9cryjqAUUcndxcirmCjFznpsgxLaqTS4dan",
  "key30": "3udiv9zbWusz8SaXyaZMcbcY6njTeZnjiop9ndfwSEt23SiYdokLVYWXQyPmATZgweNkD8Rj5pcUMLepz3Pjb4Kx",
  "key31": "2No5ac5khVjvtFnGXn43WAPmhbvTqJKGsHRutdSCXs2pfNCd5rh4zU9p3HruxPRxmsFYJvjv4FrEVRCd3K38M17V",
  "key32": "4CwG5CwvAA5fuB6Cn8FdT11Zj6CBidQ3t12qbjBe8o4iSy6zjovg1q69faxSwFqwNPheQJXj3ViEu57T9Q7PJsRM",
  "key33": "3y4As7FSBCpZMEdSwgVQTkJfK6PDMPq4Y8PdHaAhAH5i5yv4EtYT84BRmrPBD9bwRAdqaGWUywZ2imRar4fQzehQ",
  "key34": "beEopJpyYXJBh3cydxTnvXviPNZ4NE2XZHz7my9x7smsvdjXMP3jrdGbXaibideR7bCMptSaPNgWSAnjFVB6FD1",
  "key35": "3pdbU3gct3jsjB6WNiwiTyuTaTJqS5jGvPgHn9ysdsQSowRXvG1emVgfv4au2Y23bmCvrHjnfm7vNuQ7fKEm6dej",
  "key36": "4LBJkFSqdrVyyttHQ6iLJj7NYD8hLetwTo9rAvkr4jTMBVMBcuQ2SaXVVwfwbW2C9MAU2GGQ4nCQY6m3Aofd6jqZ"
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
