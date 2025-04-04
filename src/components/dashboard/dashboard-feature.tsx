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
    "3g6UaGAvigxyeFJwFydowrkyciBY7cnR7mogrToadmYs5zUjYwfd8FVVZgFceCygChZNhn7SgHCLRZSVbbVmcgAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R68STphHgFtnNj5sCX9qeqANgWojrteLubEAJK94xcahgBG3uHu6s2WbL6kWjpcYCsf7uHpbF6Zj6xGgNmgM7RJ",
  "key1": "47hKUJPqZZu9AJ8xgSETRALx8LmsdUuwE258D31x2FG1ZsgmMgneugz8QZ7ZqQTr5j3fxJfGhgRKHCsJQbpp9DnH",
  "key2": "54BwQmprk9nLkgifvwQjBMMBZzLBwe4KQMxVGJkRBtpoDt5Ez3SJcKGUPS6Pef5JdZJwbzTFRRxCqHcLKjmr6KXq",
  "key3": "56MgStKkBkTyZPiRcPYQaXS8R7z8CRKs1GoFyBBA9eeUfxpvxpJQeKnyr3w7qpSrHEj7DSssFA1CuxSdaoEj4E3D",
  "key4": "67AXazjuiyurPgUnzHqabQs9uf3Z7TqpyKMCHo3efxKxDvw9Y3SRZeXArksY3gdEy2wZpDdD2MdTeGnMSJnzC2tb",
  "key5": "4dAosYTYz5yHmHXcxw6BjDy4YGmZusWbP4HE1EcgKVZH97jpQ8q8rZfpwBqi7c6zQrhSxA21UxSct3eriZEFs1zb",
  "key6": "3hyJbiV5Qebop4LsYNfR16HTuegroHH3mcmcVQarCoRnUXxGFQkmR87vajUMSmd2xTVTGxV6cFAWGjgukdUVL84Q",
  "key7": "5xi8rPDMAoPPAmZVKVJWVN7zYe1FZ3bbsyNiqUhSVcvQ32gAKtWV2oZta7pb2ymHpTDdeo2GSt8WS6Ga3vQHxLGE",
  "key8": "5KzMGd1njQZs9WuVFp4cv3yz9iZ7eAsuwq16XHkXfr9TA7h9U4DgkLvNAvsyMix92K2MrEmzRqfE2h8qT2ERcdo3",
  "key9": "urxmzCJKVk8oQ5TZzYzrU5ruEpZzRq9dDrFmppZWRq5vAnHwuLEmFHfaGSB1MbGrMEG9qhsXWjBak4rLrAEBpBW",
  "key10": "XujTxcGGQ6ZqSYnTukTrb7M7VuCTkLx2VApdxiyywSmhyGx6NBmsKPqtzALPfU8JpX7gW1UXd8kSiSVngzA9FKz",
  "key11": "5LzQ9vbj6XMUqRyBCZGDUcZKrrBktG7e9ig4XAtPuVkB8zsr5Y87Wte9u9fKnmi27aN5y3HM5xsCw7otZ5t4Gv8o",
  "key12": "4cQFVnkcuYXpP9q5cR1iZLDi5ZoQsrm77N5jRZ7N2S6CKS8yESVFFhE2bvzNHzNhEQ59nQgDy7d7ucKMLS4nQk7b",
  "key13": "5zX3kFNmkdtwb2aMVfzWXxBeBktzq3VBgqiDGiSyeFqAKoHfT5Ve7GJxCn9DbpDv7JUCRU4t7XjCwsH2HJkw5UEq",
  "key14": "252ZKfAjoyg2HgQcc1q73XxP4PQF4JKbdCx9B8ZU69jFhwuBPrhdpdZRHPZ7QrKKrtcDFVEPLNjXCyQv2qyWNJpT",
  "key15": "3aEhgxZNeHQLzyFsJCXt2xavzJn9CjuPhjsYiwRzD116xx3U3msumwjptZVh1MZNXttka8Fp2aV1uavazV8FYLBm",
  "key16": "55Uzy14JtszsYAHvKojFhaci9TqXkUk34XQnDi5r61XdZUqtPcuhkA1PJYRCg9adLEMNMqBNyaTwvx5jygscuXpX",
  "key17": "2NcVW5egL9FakS7kupZqGiP41fGq16xtYLnjUzx9ZABiehmYeTmstYRQXUv3UXzdtodFyXr4yw164nTtzap36X59",
  "key18": "152zdmjtKtmtGX7qkiEYuQdd3RTkiawn4byPuYWYr3HAEsMd9LWjYXPYx1rsz3887j5xEPj8BPExvTQFSR82gZ2",
  "key19": "4ayqWpkaUmBzy8Zu1RfPheAoGGjqd5T1BM2xUhPvYJEoime4wJEuamVojG59CK3Zo3LzLoXjwA7ius4kTz1u2ZK3",
  "key20": "2u4U8z3DQGUKWjieXEzF225Xx4qrR1kahyvHCwF9ZGh87U2J4Eyyb15iWAD74JLQjJNN5pNGQJbmfAG1oaCSJ2hE",
  "key21": "nVVWCEEVxLntZPWAgs57ec2qWQ3277hpKpxatqP5n12ecji7HRkA8S3YXZSXRvHaCCJMh7nVdwGarscg1kQUaRB",
  "key22": "2JcpQraJVdbUAQGXcJGbwrjXbzZ7xjuNfweDA7qxf3gaTzNF4EAP7gG2QviRW4s8fTQEUAnQNMCu4gw5JoufvW6",
  "key23": "ADE3CPSzdYq2Vse9sAY9QWafkPwKX63LQ3YaAV7UPr8U82HvdkZeBusABHP5DmnmBHKNEu8XcQikea6JHc1S4TE",
  "key24": "4zTxZxN2D3A1YyFDiPEqJjV7b5UMRZrd7fXQLH8Kz4tfcAk41qUNPTnWs8YL5VGWTrDFBCCjLiRyjJK3SYG2f5Hr",
  "key25": "5mL5QYkqFnC9MDwX64LhkTe9gzrwvU7hfJtH3wP3aGB4MPDQf48fsrH6t7zFQ3wrrxDyx9qakRExkMnHgKrpjV1j",
  "key26": "55fvQWE999C7htPuhau9zReP8AUU6iGsCPueNWBQx53Y1RyMbYyFyNJhzK5qjZ1VRyLxA9JXber79pb64piE5wiP",
  "key27": "3WD8aW4kybKszuGDZwHJ8eBY7e5kL3x4Y61wRZELZB7ty9dGxbkZZkb3PjgS7Rrv7LZGLWmjcVeZkHKokCwac3JT",
  "key28": "3xLYabKhCTPKgzaRHSG5zdd69yPowtayWHAXE4jUak2K3cATxiBETqBkSS3ZaYg3xcbqrXTQk4PkLrcSVXFUwdRC",
  "key29": "3htHfMxktqTp7DMXZ4Ce43vXGmK8Qis6PMZ3wddb29KZWirP83KPXSmX5Zs9PytAR3HGqgLHPrHMc7FFpm2Jx9BV",
  "key30": "5rdCWhaeWvbvsKBYxyhizZvpr5coBWSbkb8SgSqEFaKj1Pft1YW6Suj6opNQJ5kA32DUUKYVgouFi1mRU87vZZvq",
  "key31": "3F1ZaAkgTvKV8UJJZByD9fGuYHiDLnmLYn7JaHdbauJ8qaRC1PAZeGJPgbxdmM3ZNBs352RiX3cTzSthEdgcin9z",
  "key32": "5FMQ7YYLV452gfcmvz2WLA4jfU1bXw53567AeCdAD5U1smqhQYLnTm525AzBTfR4bCcZKeHz53KpX59k9jnnho6n",
  "key33": "2KqjeGWpxeiswnUHhrUBrvAFTturxEW1ypftZuDr2QPyhJvzpmAszbHAYKSHy45s72gBReFBPZEMQXKZi6mp6qJz",
  "key34": "KYbX9PswKHirucj731cNw1ootTvVrBX7Z825LbEMo5sxT1DB3Rk2vDCEx6SK1XH5gAZupat46bXezr5ybGo5dVs",
  "key35": "4SXF3h9SwqnBZooHSPuMGdNmZKnpUosJNKSCT7s5j3PAetMdvF87u94QeKB5S8X9hJan9p1ehCw4zRqfkT2Z4XEc",
  "key36": "5XhMW2MKyznPi21QfYcMKM7zeT965cgTzvXrGp1k1WegcRkqDfRYp1e81ycVtmActCDr9XfH2Y4M6K3Mfzmp7rdr",
  "key37": "WFhU9NFqzJ9r8CK5SnPUH4RrKqRay8ZieQ9PPt7JJ16b4v91uzp3mGqjqeS6LwrYbHrRNuTFXmHJHXzzQF9aSGm",
  "key38": "Rrx4LWzLZmrDiPxygevvoAVU47LroLETyWY82Ka3jUcjTeZ11qoaSLsiXR4fdu3RAZUkhF4S87qcwcqWsdhrZMu",
  "key39": "8RHcRwtK3Jxfri2oYm1bzVyYKhYSJkKA9AQVtZN1BfVgKRfPtrEr4489ghQD61a8m9CSSpCLBHb98rRwTfbKweE",
  "key40": "4tVukTEJd126tFcspPDZtUQdPJTbBAt51JzwexMp3DPRQqVqqFRL1p7TSPCoRdbqjN7mmn5xp3mH1ehskEDahpPq",
  "key41": "26EgewPKT4xYN8TrBgdZDLMLvyc14bseWxjzjDfrRuZkyqAZBsoJcbkPaYeV9nhzso1A77SCmz18ueWGwXTpaeEm",
  "key42": "34humPPpRTj1Y58NYJQ55ASkC8CKxUNx78UEANKrZJTE7BcgPbxorRTUwSdGwoJDFz5vJN8B8QrW21rX7HZcP5pf"
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
