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
    "2CC99M8Ny5HhTtxWyDoEVhru7pJjY9KSXt82seo2z3nd5QU8ENjj6FcsRnooVWxUGsDPtYng2JYS9VZFiY6JuK2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PkTAnBUtSDip7YRnkySWVC3W2X9JmNNcvVZyqSkpHM71gh7DNruvtJjPwT57Nk6TPZe6zz4cLstn4VXjxPXPbY9",
  "key1": "3fviaFjszugyM6iix4zuoViT45wEYvY3Dz6fSE83zsN9gBS2UuMp31q8kBtJvEnmT7EyoxhZJuoNPF6DhPHVsTe",
  "key2": "Mzi4cwVHo47Z3uUJmumpgwGu1kMBGpeLgAaPW8CYdLx4nLkvy8oF9aX6nV7GSyvQPVf1JMw73FkdojmVP54SLFJ",
  "key3": "57oqWhjAsfHRxhrAASssZg9TGELM99PEMk3kmbQQUhL1KG1SsHVPnNVVw9y7Yx86jmtH6XSy7qeiKk4aC3uB5C8B",
  "key4": "EN8nWDqsiAqxkXatj6GXqs4aX1TMHQ1CRmjYBQwq5groZZziGt8zMm7JA1314cx4D1aDoLEYKrT4D8whf6KKS1n",
  "key5": "4s4X2avYp1H8iV7rKTUAVWVSj8DfxotTRMXpPEaCEvd9iycd8L26E6rAM74hTifLjAwr31qBkjhJj5msbarT35MJ",
  "key6": "4YuQDng54jRWqGw8c5trVDBNicgDL5zPAoAFGfhaFmJTDxBTJwZpb5eVetP73RzpMrakjeEAz5rGt3mqZkXTu4bm",
  "key7": "ZVMVwHnKCCXdTTrPXfePbmWmCKvWFkB9HPQYFXEAD1UK8s4yWkGKRQPvY3VQh9UfhwqM4CyAtTCTxXUbsjfmzr1",
  "key8": "5G1XjbFmGHcyqQUR65cVwrUYrKx59gxJjzgHJb43vtwMu8EPtwXiyuedh6xhJUvdx49BeoGfdgHYDA4wMxZyd4EN",
  "key9": "8Uo4n5jkeUPLkiXKfpHmy3oPuy1FR7hkodaYZr9xvNkdyLCee3bZMvBMMHp95MZofL7SFPkThHfFJsGqbqoFFTX",
  "key10": "53BG85WaxjVUqqFZja7jqSJUpCi9BdvDsTjnUL3RLA1qdywqv32YJAtpUkD4kAYFe1MyaeXskqMtnmtFDEZ59hKK",
  "key11": "4WgLuehnn4YPdRKPKkpti9CwkPZEwzTLM2ep24JEhfagnsVLagXZL6VYJdSKboFEkK7YgYYoXgeW8JEbxPaaEWDj",
  "key12": "2UqUCbt8NkqDMdp2VrQnc1bM3Vdn4XN3NGRMtwVssyKqkxSgJYn2pvDmwjTny4yFgkaBB7m55iSdmyiYywDHRoXq",
  "key13": "52cqbLvEPUG6YJLV8q9GrtZmKQAtXwpj4SEqWsbwTXdmGZXm8XsCuMd84H8U1QFMn64xLutMWWVRrXTUt9L8eNvA",
  "key14": "52fHaHk9qskDD7VNdjTbhpdAMM1VcWvSpN7ZsdQ4xd3QX7QNHeqfqupYM7CLoeLtc5rWpXDnqg9DsMjQFf2Lh9ED",
  "key15": "54cCQEDcZ89yh17ALU2vmjuer9bTyq4Bq1eitTTjXCBjcELJk7JxVpKvHLhJAyURkjEt1bZxjB4p5Q6fT4x1ttKV",
  "key16": "55ksnXdJnkrKM7CHg4yqMFrAbP1NrC2SufU7EFQfkPBwPLThEiYwqJSEohQVL6Kv61v1cBsrLcq2JNsWbnWEovgM",
  "key17": "3qfbACKhVUH9zUrar3H9Jq55b8xwwG1y52WffTzJXhpv7dWjkkYFwQKpuksgQdx1T6AwU7WSTYNG43hhSCD3MCeM",
  "key18": "42vXtkWynM74o6maWbCcK4fxi5gBRjLRR6v5DyYLszuvRhukP1J9TQDKMy66saSmbw7jzDFMN6ZPVosdGiFD5V5z",
  "key19": "2yaRixEaodBAaHDJPzPGJbnZueGLsqDiJZprH29py5v4ZtGVoSdJCKaV5zjsWZ61apbuepAA9x48qCgfPs6faheF",
  "key20": "L7c1hUoKm7kgKHA9H96CmuC4XgWfcLvDCFs1vnmGCkBzqfaqYzz1Cm7X5DqUPgUkex39dG5Fb6quAkf71sGaSrg",
  "key21": "vg2C8zSS877VBemyiuXENRB2nDd5G4KofHSpQZvkfvspWUgCYnD2ouMjcQEJRKpxMMtCLnH9Uih3Dq2K4VFJLif",
  "key22": "3RxeX3FmRoVQK4BiqrhHZSy5pnvDBBHutXcq9qqadf6uRP7Pwdg6g3jJHGgXjwQhr4ZhUkGDqjHmZhkjM63yGKS7",
  "key23": "4wSijsKE2XNaELi1moc2qEW2VLSM97XembhVdgPNdjaPALZ4C9suUEyxECc7x34KfGJ42GuHkRkAsziGLPkQMtHH",
  "key24": "3829KMr4UPt6Q9X5MdJwiD8w6FNQCfB5uqGkCsFMTn1wSrDXsqQ2BDqpyyiFiE4qoYVnAxFmNs6FNTqZgFwaHFxW",
  "key25": "6ByfMjfWG1WbZUw4fF37zqpa1LCbDycCgoZS8ALWvzQnJ4Uan4x3WYyVTEiBCzFvFLoLF1PdBXVqmoisnN8FHLN",
  "key26": "MSDjK2ZusYB4w2Tt1rzSHDjRtNQdhBBttbBEEdt1MmtyXijzfKj21de2XTepyuBVryhejx6fvAoWS5RrH7rtSM1",
  "key27": "9Px27WVNechodhcxiBHjqaqMw4t6525ow4XarSuNoWqN4j5Hp1rgPqrZ2xAh8D3Du4Q8EB2qNFNx9HdTndEbo7M",
  "key28": "tiJe458BdMMtdi49ZxnPUAzNAftRXEiKAfqtQpEL9abmchs4dDCrv7UaNfwgaatgKTZadxbF9BNm9rb2QCmBBcZ",
  "key29": "5qSnJdjpCjkYi9SkhALaeAZhL4LKV4LAJbVNFa189oFKJLHDGnAiLAGoV1BxeMZuGgphRDg1Ti2NCFUgNsLYiJp8",
  "key30": "u87rjf4pew17mwduy64CqoteJ77BkkPQZYrd5ugtU6miKxMzad9xzpDYuWdtHZeg6hrwbioz7WsPotU6NsQxbGM",
  "key31": "61WvUqpF2P3sxmnTF7BZTowFtXdZNeVNH8Py8YWV478wX9p2eihPLCDZH9UC6Mie58vZP6QRbxpRwhi6eUQBN1NU",
  "key32": "5ueNAyNFiyQnBuwCSxkvYTbT5KKKe7GcrsWM4LtpadgPUC793sNMueDaE5SLXP5M6XYhu1Stz4Xt8Nt59TC7JmpY",
  "key33": "3i87zyzrNZGsyUYAMm2fACSfWXf6Z47pf4VQ6RaqxFWj2kraiG8mF6mi9WM5dGECHKqvgj6LJRavorD9v7yem5R2",
  "key34": "qLRQ4v2wCHX9FMH3jiXYPPyyFSYSbxiyUJCvdQbnUZ16E6Nv3hrwz4Y9snQYd8HqrDczd5h2nPFKUh3jpPc1ft8",
  "key35": "2nBVXhKoCgnjLTh9ojgeT6qurapPyVg62JJmg75MYcKX96oStLoZs426pmRNago1dzr2gnNdgBYQKLyog4Jc7TRF",
  "key36": "3ZPCSXPjh8yjMPXw8orx6tB6xBb3JGPED1ndYzP5XFA76p5XEVhYr3XitRL4S3D1D8c3qczCqDwwogcfnrc5GJWn",
  "key37": "5H75myutNSAggwraJggyv3Cd2cRbgAnQb39qakRqAWeSZd6an4AxNoybK6jh9bf8HUf8HmY7KuV58H86LqoYqwx6"
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
