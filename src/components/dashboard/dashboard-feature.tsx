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
    "51w3ShsTp2Nu7GDPKPo7wTs56m2JL7LAvdAj9kdWDxmFLY7Uw17eMsmAocz4ewHKmiMXnTiGo6Xk23qsnswQyura"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UvSMeEkE1zZ8Hui3GXrboVEEf44uqfsBYJ9M34oVPLEx2Wp39tiWcEir2TiFrbPohAQC2eBvkLzMU5WDP7aTWxv",
  "key1": "3UCaPJAzREkroW5tKa4n2LdUY1suThYUtafaRsDNwGeDF2VnY8fgYuZ4hwYPk86jcZwsiYMDshNQKGvYZ1WU62YU",
  "key2": "2nm4a1CVeRWkZDqX4jpfRACJGHvq99mm7tc1cHLSopXTo6SekPFn6BfpRrz9xQ9ivnN2PGrqvvR3HRD7UQbWzUuM",
  "key3": "GnqmQgU21jAsQxsuEE8WPufWaSL5YCw5Ddts8EyCEaHDmjEhPjoCvFXrR3b4mJb1K8xzoiU9fQXAaud2LZqR2m6",
  "key4": "2kN1W6ynbhsekSDbbQedVzrPVSSLVMR9vA7Nm6ofCi4YwM4SaB1Bau4VEASqg2mR5s8AQC7UtPw6XxF42ijmR7UN",
  "key5": "3gaaKfnAMtBDpiAXcWsNrCoL9ugBXiwGx8JtNn13nVnsGVkUMBuubQkqYxFFuUgJCxCSkdveVnjKpoUoosDhvkPG",
  "key6": "3dWme9BLDxDiE4k4cAgsw7EzcUX5wpxRGRpDbSKEideRctsxusbS8qmKpERGwex7oJnhVH7cek1WcGQ2aEsmKFN",
  "key7": "3nKX7wAbLki45g4bAtvUrocDXS9gexBJ3haAjbsoZTeHNgNbJECt7u5APXRAc7JWp8ymFQPNdgn4LUDB3C3Qp3Jm",
  "key8": "djKaZEpMYdReDDdurX43R7QtuERvB9er6UL75moYkj6e4KW1SB88WCm3qUm3PLLjbwfv1uBuD8NgXVJ79FkHMsT",
  "key9": "539ASyX4BATwx2MzviwNCJ4VxdmqbmxnySLU9nF3ASvYXUykknixMXVD6hsGCRJuHBaS7fzWyVuQmo1sgFMsKFpn",
  "key10": "4judiF88tLDjFyviMq5fKgUn5P53ofhK1nFo1BqfLRL4k4iA3BBNR4EdRGfgPRZ78zck9nECaZa2NYjwVf2XYpuq",
  "key11": "5XVwXRjQAw2xR2G42s6oQbKQBPpZnTLtf54FroSSU49g2vHcLGrzNUf17AKXgQf2oyW4E4ZFzuexc2ZH89313Rge",
  "key12": "TYi4K9h9824qc7a5vVuX3LKJFKDoLvdeFHQkzANS5oLJQ8oV5AXMHfNu5qZZJ8rADcjG6YaLk7FoFV9CQEEx19n",
  "key13": "3sVYBuF1szkZ6XtqNvm9j2GJeEY2JtvwnD5wPvoLWiHeUSRa3G1wvoPFcwARQrKbz6tdex8qS8ybJ1ncBhNNLBnv",
  "key14": "3Exc2LEMeFZLbWo3ZSxmemNQqJkCjiqV4m56S3WanK7wvsEZ5m9nyWCFkgNTuCCrS4sTXeagsEpGAcbsNbwmtVh8",
  "key15": "5TUFE2UGNRyLHsh2KfoKpb8ynim4RPSjcjfG2C8BVKWxfQVaEqUQ7mPVYHL8HVvK74R3V27uib5c9MFuhhybzS2M",
  "key16": "3pesuk2BXxeDsxrrJ85Xf75Ab7jFRz6gxEcVuycaqLqMJaQZdGkZuz7qF4hvYPEihvE7zrj9DkxvrX3xMckBCTpz",
  "key17": "4zTKapgWmzSmgABvSXg1NpA5nesz5HvJLTSppSKY7rchBD2jmCSawkC3eBG2ESUVoRDjt8TY51QoT4LQ6fC2tMKA",
  "key18": "2rFC6TfXtdUyoMup4RzWz2RgSo7kqbNwQPsdRnFpuGd7YYGRmKNGEYVQ36FednsXqvBo3xHTtvhJ1ChcsiQ4P3de",
  "key19": "5qnYo9EBd4wEaR6RTBPV9NrFXTmNtzYjwiBFvjuxuLVXQpZeL7QenfT1ZGNfTQsg8EEQGMgcpxbBQ13cc8JdKbJG",
  "key20": "52H2KwzTnEVxPQZDi1g19Ri8rCNYdmPCmq79Nnyx12sNcwD43PZ64auwHYahKHa7mhSgNbx7unag6QVTUh1rAXCQ",
  "key21": "67EeBZXvRuH7Kwai4wzXjqoSnKMS9MAqGVeB3aciwjBxnZdoMYXMrhCu5ScLC1WFDubLuow8RJDWKnLEKHytEPAB",
  "key22": "42MV7h2UUUi23JYy8tKjVDeXgvA9XxxeMdRFVBj4C8X6179C8ZAWy9o3aMaYGavrsc8MZMpxB4uXexvkxw1Gnfgz",
  "key23": "4PoY7AZiX2pu2VUzfBcC94uiGwRsbm8snQQosobuBxBjKRLbQX3EmLNBcdzHF34ZeKZKrDg11pD32EPYwQT7NYxj",
  "key24": "55yjDMvfD2gw8XXcyFcQLdtgVfkSDFdRm7suVX9k3WEgFwmFUzLkYkS5xTTcUByz1ifTS678snD7REKXEPcVRopo",
  "key25": "oiu8aPxnUft3ZK8sLgBx1ffvUsoyW5CrFBH6EtG7FdsgjCPzw1MpX2USAEcjxD4K4hxZxEWTnRFCoPS1skqE4b8"
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
