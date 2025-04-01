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
    "5uRpNvLHLK4rHD7uiJXL1gaMiTDpcUy3rt8TSnLcEqKm6GDVhfVQbqKrq92oBD1JMu8BYqaJRZeG8WB4UKaW2Fvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1GdmaPJ2SnhRPfVVuFzcVsryra8mETzuKTepuJm7gyaYzn31ZNFpgeAmFd5gGptVUSQPMTFoioCHQKyibtERpi",
  "key1": "3ZCTPKNZ5xEpSF17cnX82uvYSzS8UwHbVm6p5vJGXnHCER4DVsjRzeGs1kcBNiueEggHxpwTrzJgyAS5z1uco9CK",
  "key2": "prBxRC8dZ1JRvjuFsavsFyx6yb6docTHHNeG2TyVgP1wfYcVwTUvnGpLjrqLZ5PVkucafZFMjRfnbww5aqDd97a",
  "key3": "95rG1pWVpESwi3EScf24PMGwvCqkqG454XkgNTqCBYkgCX9yJzNrZmQDRapPHsrM9PdUiJDHc36G1SdR5ZhLX2Q",
  "key4": "4utr2ZovB1EhAUjDFyFDnbpsxsZTZ6KUNGp1eiK5js33gy2TUdm81zqVp9DXSJqLzAzp83ymriyUq9j6PVBjdLXW",
  "key5": "27i1LGpyYBwhfELpq21j6bsZCgLN1x8DB4DLLUW3S6YChjmwcNVi2L5uGdScuEcU36Cr7Zs9NRTnnNChve2CPL3g",
  "key6": "2ZFvarQHskwhEfuHU3cTp7ZfqaunnyfNsNfcGPsQc8HYyGrKSJgm2S5xm9TWjby67DccCKqc739xsfqBSzPuDDY5",
  "key7": "2weLGzpFtR5cmW6vZSkdH26bzPQpMLSxAtZ1NjmtGwoLUMWns8WWeg71jy5vsG23v6GyfWSHh8s5ahF6YzijrP3W",
  "key8": "4G3i1LJCMk4KB62PY2xc7uytCQ3rxg1vts1JLFep1hPLKQNYouybsai6VV2k8EJ9e73pvWcCiQqnRW9WxfBLuRBi",
  "key9": "QSWSgtwi1tJiB37wk3m8cGSnxap2W38Yi8yis7nvqP958NfbAh22tUjNzTBARzJQHpLQASUfdJo7x6iv5pXoUYV",
  "key10": "5zRE7x8tD6kbGkSLSxhPMvunE2DXGP634ZNjFVB3RPXmiMNy4MKYhZrrWiPr2RyiB4qnX6gzxmpXBBz7rJ1uEUL5",
  "key11": "mizyrWVqyn7A4PFSm7u43pC7xitCn1LsgEjuJhVubt3mfD8sZxdWsz4ZgjD92DCn9xhJDrFUY3ba2sNpDPz3iWD",
  "key12": "4YafkZy5Edz19DAgZZGr6KiGhwxpeuYK3hH137jg81Pdy7fRXJcXWJm1BdCJSHZvBmQDNKx6hVbspXogykzGEPhv",
  "key13": "3hzX9hbiqN854qp4NQRad8e6Ax3tF56DDfo4d1BceDfqmGao7zLi9r6zdFLsiJLdAmTQ4qEzdKpUHErTz7zsUcBT",
  "key14": "3GBW7jPLHoCcJeeXZwMD4jn4YH8QCc8ESXGJJc7uYNNxcLoqRJ1trXz38EdkRAUJFJvpZboYTk5j2m1nhnJJ9Fve",
  "key15": "2Gx6ZeBw31gBQgd5DatBB5oerbsUMRexFN2ab1w8egK8jYRHbvdUdpeeWptD2PjsT3VMCmwvbFNSdnhe4cqjsuDe",
  "key16": "wPtVNmFsqwLCtJ34Bb7TbMYpLNDJTZFeazR9ffJS93hV99KYqqsgT7FEnKWQpK7GTSEh2vqEGp1xocEM4Cqw2uC",
  "key17": "4GRjNT3MoaVUn5H9GNBSy6AzDYnrE9gPDY6iR8ZxUvofaa7H5jEwyamCvNnzxCEPLGjZQDWpdHzHiGrKCQ3E7KEa",
  "key18": "WCUDTaPYkKQ3VscVgHm5kygrsCpsn9NQcN9WXG697iimLugU1qogTerF1c1kXjPUduHpAktJ7qLGNhqRkaPEXbT",
  "key19": "5GcK9DuC1My4jpb42voHnuxevYgzBJ9VjGjpEUoPKxvwajFEXGvxccjGGWJScQVwzDvST5gPji5ur8g8sh31jheK",
  "key20": "4FSdC5wLg4otK371k1xaK1i4513xp6F2ysBFYeuGG75BhTxKaCcF9CpGKi8S5dMRktgYwDHuRApLcc2ZBQniBkG8",
  "key21": "3ax6vitdmsSxxhBHRa2Rr9ed8MUGxNznTKXkLWMw4ePuDv2d3VMqMEKKkga5KKnFqyMiTVyehFDSvdFujwYzzdhQ",
  "key22": "522oDeR39o5ev8HiRssxBacsWF474EodywkTsbVjuWzZRzdmWWjr5GJUmKBHCdDANaBBmhAcF2SQSYLtGwJ9EGaQ",
  "key23": "3P9vj61GTiihzPcmjCRpxAoGYBQZfcDbu4Fx9Tmw79drQKzFispc9SfGeSzueitqibbnf4aY5KyaK1cYrGfaRcXA",
  "key24": "2iyX9zGC4Rtpi18ACbqb1DHWqN6YfTBvW9ZXpkmrse13ZyfL5RVsN8f6xKz2Ec6LwVuvbpfLQreiNTH1UqPkYTUP",
  "key25": "5M8zj5kA6KnderNo15xuThX62A62DMcGrBpu6ZyFoAFfNmYXhwimxW8csRo4yj6UTFBUeGzrz1nxiZgmeevWvAV5",
  "key26": "4bmXyUdfNGFXLYFJ6ufnpPpHxFYHBQ23gDACfbWYdk4rDoUjKWWdyeD51bCddkPHeSTbuoR9VDUkhvMPhPzWgHXo",
  "key27": "5XbgJ9ekVj3auvR1gN8hT5CQy71UXLgoo5bv8eFbmYNW6fsFup26QEdkvFXjARGBmXm3odybehcxqXi5aT2ixqzy",
  "key28": "24XQqBSKXd5tX2NMWz6qpwPjEhjS51dT1tqrQYu13nRhmqFpTwi24p1QRmk27UpX1rnbLzNH1cLRynP8aUAEab5e",
  "key29": "eEEMAYy61A5VDVB4P2ounmM5GE2AE93LkSq64r2iWLviw1L45pkmxhxkaWZiM6DniQ7ChHEqPtwH1nzCNhM6ijv",
  "key30": "3JUTLVb4tEMt8of5zU5UssSevMkgxxAEuWRxQCj4WpZjkiMd3PHXp56UXfdVPAGE3rfvzak32Y49zP73e5dX7ubd",
  "key31": "651mxxMkjTh3Qkfd3C8q6eSSBQaEThZuYnamEDMSom7DfZbSSwGXAZFAQ9YonwR9trwuQGQo65kXfqfNGDbXzED9",
  "key32": "456oUhrmCV1CekCm7rJYMUscEyVa57nBYhDoVPppP9s6xzKr7eDpY9iVUPJsAi5aURMoXjP2JSQT47BRsjWxkGoj"
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
