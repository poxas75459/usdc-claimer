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
    "3vW9CHe7RQLKVVYVwtei7bXGhwKhXD8T1LYVejPRqCNsFSyVV8KfytB7UzkNSSc2UMXtdPqZq4zLxnkfuXhsjhQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgVbuNjF4nW1j8NXSK2eiqLhqTd5bPNoqGh3mpVZRfcx1kr2VpHMcy1qAYcGDtd8UWEfW4EJfhhwnzwx6sbDHLq",
  "key1": "4SAaPKMuYgHrHDB4pGDxWJrYoJLnpCqAyH4j8ppJmna8Xm4AdDMWzRNmX2DLVmkjSMtmVjYSmFM2a7munTBfVssF",
  "key2": "4wWE8wwH3T5cDoApV5YH5oJi2oEGVvUCfqdMn8xybs33Ph2L7qrQB3miBoANShu3863AufboLdFsNtMxrtYeKJyg",
  "key3": "3qRqBSSxdcpYBKWkZhKgRsKnYUzXEtBDw39SvS9jv57MQnrLzCbHfXnUsZQ4JoJpd8iMTxkZprZ8NAGTy1XjpotD",
  "key4": "3cMHKAuDzQui6AeXFJg5jEUuGkjhvitT72WLpCpXM7WC1MJTC3JwgBj7CGf3VHCV38Q4jw4aJQJgyhSDzLmBjsdQ",
  "key5": "3aWv4t6KS6VWtxDTLBBpbrdNNy3Fnbix4gA1awYV2YKUCUrsawY8PgdnaXAQKsYnDm2vdMp1YXkG7TwxPdRrG9GG",
  "key6": "qRCLfkxjBZ8QLoT22XwWuFENGec44uHrvWFTRKDiSJTM9kdFLVE18Ri12RDCYgqnrVYGDoLhKEknHd33PZ8SedR",
  "key7": "452GgKHvdEtJQTKRQEwuM8wL8jPg3vDzgmqq6kLsE2hsqKPpQ5Jr522rjB7xw69zQKwZpCZGA7aYAc9nHLab96P7",
  "key8": "36KsydfaT4NXS2rKRkD1hgCqZvzd3DwHP2i5opVwAZJ3ZaHu9yg5pqtoACRKAqCgTXaPQ6dU3TVe4NxvaGb3qCq5",
  "key9": "2SEErHtzrWgrhKW8dfKycotHuo4VYGpBX1rqj1hpbFM1ciTCRxJnrAPwLm99CXECxEwBZFt9PSkzo7e787JKG5co",
  "key10": "4srXdAYm55qzkR31j8LTvk7uX655JzrZKbzz9CRG7cabgTkB4SEtmJHobdgtE1EbGhiaiQNGbzXk1xaLayyXLrj9",
  "key11": "aGVbjsNEydg8KEoY7QfSEiW1zNSWdLLPbfsojX7ZCSHuumpcveghHyVG57APQUTCEULsReqajiXDBnXZKNprG5o",
  "key12": "383U9GRtUdgGUMpMP9rBae4PHBnY83DgLqeTbYFVXqnyxRjFChyh6BX2JojYaZp5SV4o9AXTMXw5STtJAN8s4M2a",
  "key13": "3JgppWyu8HAoyqn8CSjarmhGtbDDpskt61FQmBDth3tCY5SXFDJzX9kVypMjHyfnUVi1PyVxymqan34k1BPTX7v2",
  "key14": "buF2H7eJMAUMfPK7qchvetZrKnHXK5iGevZyaMJLfwfmvYmh6BQooxXgD5kgKf2P2LAX2T6WagRdgqGcP7vdyXt",
  "key15": "XHm9BM2QsDKSzs6CsNVianKeawPSRdreVoEAiK88RgY6FWuckStdcXKs1ELPDKfueGt6bisvG1JFhzVGowtJF2L",
  "key16": "3aue2vrVTEHfX8ESHz2Atq1jgZbyxnK12EQUvboG7CZ23k7Dd5aGQVmvNDt1hpNJDk7YsfvntmTtzdwSgSBtHiPQ",
  "key17": "4ZeAFMEmegjGGoP4Y2gi4VEN4TF7HkbcRguCVVJBidFWBxQtxtpSVb7NCqYQCXNbZTd1awbnLMYUnZQ9XV6cQDGF",
  "key18": "4KjTBrYz1ws8xaJ2XhHnzv2gH1queTyRrbuv65XM5GsmKjnqj2gWVyG1A8LGPW77u4y28XvTENdiAqVCfaxbpA2F",
  "key19": "5KyN9n9cTi3j8TQJrhY9XN4Kdaq6giScdafukCgxpF42LNQwAfQ2ZHyc9AMYqHdrsehA8amabt2py6M4duAVY8Cm",
  "key20": "xcqCU6Tm3R3RXFBnhvsNEGmsot6Uiscma53ev72rGvd4y7J521MtFUWvqVsZTJ5Spa7DpG9T2mBmrm3NDqMCZwb",
  "key21": "4Qx7M4f2CxMEEcz3Y6wzksJeeHVvRcs6QSAABi4aUgTxzuLc3FYeEpNWiZ1KvXEQ8cTqp41vpUSyLxWE2QQ6iJi4",
  "key22": "s3u6S6U55mHpozM4mcA1KLFRk6moEqdbdBHgQqr7cSfZ1BWYF7oQMcXi4ccoDUqTn7xQgdoU4KCXeJVqeaoz949",
  "key23": "2fBTigyd5TVuPbxdrWEuyQMkneRsTLddSbAKmn6vaDersJf5vjMBEYZMRB3PMr2KDJahydpP9xiCVC8m9ULt3Qy5",
  "key24": "4oPp7oCUWfs3p3tCcq3eFq43chQ9DiYJpKbBrHtx6ELhPfnSTGNASk5vwKrkjooc7WxNUK9QuXuV1VqsV2YWqjUC",
  "key25": "2yFYC9iyMQa82WbnXWzxepVxSg88uGhkgNqHdhhpSuNALAbR78E5XETkGm111NHEa1Bpe1Nugu6yyJMptk6XczB9",
  "key26": "3UVkUULjToYcoKmr67uvfSLTcSWxDRdihanJnqp7ktQLbCenVSmVAUTwW63gGJjmWKwdQjcqfQQARavmbyKSjk9x",
  "key27": "25VEjZX9k822UpX9zSYjxeQKBQNFdZP27G9nnTGaPDzAPc8mbp8bnzahibM9RDzTy4dgpVyjFSqWp1tBYTiTGfh5"
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
