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
    "2DicdnmJ2P3SQT8om6KB8JDLcj9LYycgydaUVnNXbyXURfxWu6JvuV4rjVhj5CuRQpkQ53sErLi8vBNKR88ZqnfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eo6tQ2yniNFqJzeCRczMUyLtq1h4a98qf62jFfAYAVUaRZ9SuD6ZGJTySugD6w4Uv1DWpD8eo5EjDCauah1AVdf",
  "key1": "3aLbxrNbs1Naco4JAgiM5r3kiyHQ9iyxFqyBcA7dnCRm43j8PoLLucwLLMiUAgWEwJrCKfZQxHWxPj8yZhEiTYYN",
  "key2": "28RdQy1Cx2zSu5gi3sjFR7BEsHY5L4xrHS8TiwTsaX612iisCi65vuneRKuPWg2Qf3vACyMkMHojx9vb12qb6tVs",
  "key3": "49pf5D396XE8ymhZADk31QgTJd4yLhkpNu2hozEgNY9sZL6pk4P65fxynAW38jXrQqP32ajBj29KH2iPQCizUopD",
  "key4": "3KSfnKRcjgESd89GkHrpGyA1NSPAGJrucvV6GJqKoqErvC52MNTws1NufNsQb4huJuST44bdF8413ymGyju8mRE9",
  "key5": "3VPgYxXVFs4u8DXoUhDZNWKbxLircALrrQXUuuXDzkDT6v8yafmZAe7d7EuWqwnbZ9qikNNiFggRfh8863Ug2hnB",
  "key6": "C3dwa9VpRkL9pGW31qogjBTVMYUE5u9hLTb6a2HkbAT2VJtPCZXERmeEz8maRpJ7BZFTzEoQBsYzEezQNvRNhAR",
  "key7": "5zeihQGZouFu8omMRYNGEsaA1XycnMytYJ4gVF3rX8kVmQLNfnUeH7FzF6xFbdeyBEgUFSUNPDPcySB5AyG4QdLe",
  "key8": "3VNdApuvrkEpAVeecRVH3TwKdkCLtjkcuAy3aPBZ9S6r7P6HNRd4L2r6RDXu3WKoWQ6tMCCLPyNpQJUSDoPKGxq",
  "key9": "2aABJLVzVi9rCBmnCMrmyTDwNk4dPeUBrd1aXRtD7RqN4AsB1hnn1vMXfSppdp2fWpuGR4r41E4QzMbwqgQKwiLM",
  "key10": "2J42mSUMgizmG1ghVUxgMXoDP1bFBz24eoba92vnAJLA9PgEan56UiP2XqC7j3scsQcGUkefrDrDV2iuCaGyTDbq",
  "key11": "61bYHvaYo252aoWuKZTFQ1KFUAFaBNQPqD7Aievk33UHYT4FttxTS3kBZoXtJAVZWWzKMV91H2y6YhDkcQhKaNgQ",
  "key12": "3q9kgLwDgwff4rszVoZ5cxBowdEuYUvuVqVrQ6z3Dz3k33rKCAbQs4KWfTnkcsLEQ6YbcHhDHYvKzM52cpkJwLkE",
  "key13": "4AFbPXCmfcfcaaCEfWEUnFTezTb9nnJJSxNTqWkvffHvxxQRxNohgm4nGuzQrAwPrdyrdpGkUE19y1VmsBLYXFqR",
  "key14": "gvU1e6pSKTs4KKiVYfztTqS3aq9yuNqssCkRLwAWyK7kUte6KQnhQeijxhfUwRvJ7YGJRCGAqaZgeQqg49vVfoZ",
  "key15": "3s8B3PkXHSCGGfuRaW2trMGwapH18Z2pVxfgrFVFhATrD8THnhPyMWWwgQz1nL8hZGp57QHrjG3SpqL9DKt3qHK3",
  "key16": "3N1Dk3viVqy6Ubm4xxphLsBhEMrq6yAiSnDs7cT9jmVcSxjHJdc65vsAUBsnZQt6V3TZQU8UrjQCaY5obHusi4nt",
  "key17": "217cL9kgh2JFGB6XoeU7SyBNXvx8UEpGkexeirnPWbKYCftio7fcPTdh86p6zGBSKk333J7HAaYhErJocXgkiaaj",
  "key18": "4nukcSYs8v2fmSLdDpynNyqrKEPHVG6RbhotVtRBNTruniiJc2R87MSYD1BMvV4nxcPFbNg2FtzyuWsmydLNcLGc",
  "key19": "5um1nNhp7LZBZ6T3WcZPPXjDASJG6XUuLZAixufp3RJMCCvT2zUYvhmFacknEFusiGgLuHVaXcP17KTXRrD29yke",
  "key20": "38bnonqt7LXPWE7eE1MW9K5DJhFquj3oPduNCHibk4con8esbCnk7WVbQhMHjMzWnf4H7XM9QAWhvahQicLsMNEg",
  "key21": "5Rz9AQEd4J9gLjG3bnDab6fESr5sNSf6cYTVvaaVfghQGGvRqnJBvj6hPMRiRHPW5LJPCR3W8WU2FEX3otvPYaQa",
  "key22": "4sJXdALad99Q9V7F9w9i4AGnSFToy97GzWbMNsNWPm6QQ8iPWZ13BGhsWazouvT6khRBbQB9SkgoDYMZEZPqxmf8",
  "key23": "2am3nTADE6JHco2uo1Vn57nu8XbsxtjNqK3GXyjvMnhHUFAL8jjjwDroxqjMMCx7H4vyr9eZERSE9oWdpWk4ETyK",
  "key24": "3fkx81w5E87hqBq4Y3FqKvVnvpHExnMrQEBLXi7tCpmUaMyFZexr5djdJBj9y8LwjvGYSFTY4ufp41FfugvQ66bf",
  "key25": "QuYG1xqoT3yL2QVTseJ4qoYvSpymxdJcDKqXuYhwN62pTm17jNwyupk7dXsV3fArFNBJUHZ8Z5qqtKZXWMVUzqe",
  "key26": "4Nfb5QXdLxsddsp38vnm45W1C3WsSZcvUfEv7Lo4iGMNBRMU6rWkEBeLDcTdsA7qvpRHpV59hiT3vC2VswVWJAJ4",
  "key27": "41WuRZfusvAvcV87K7QPAWdFLEwqhqbV8PuxvUybZY9ra39M3nvx2HjeuutDKC5gF7z1YF5u2j5ZFva1t1DnmqF9",
  "key28": "3AuhNRuUJSinLcGhFf8GeCJyAKAnwLR3Y8f9STNiCB1SGjDFFFPUCRJdpTWFJMiHZUqaDszCpho7CpGZ3sV8iG94",
  "key29": "Jhi9318SwcRqcnMbtDXNNyhtetGXmbU2Ee5CY3kkFNiWwNP4kHWthsSxsTZ7jqGkDBHsh73o9dgRxcT1gSfwquE",
  "key30": "5UaxbFTGPSG9g2uVBUDRyuz9KeorrMk5fmM2NizBWn2tKA5KBb7Ducx33xBNY76oSLWaE96SZzXd6GK2m6j6BrF3"
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
