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
    "J7HnPC2VmCqr5fJ8YYAQfyW9dgGvTJHrX5Hq457UygT6W6yBrq62RSXvwDhyAcYLHUPZHpzNxi8TMTWy2bBraUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBS4bcfdRxh5jCoYkmS2nA2MNR4o9pwnZTX5A7idKsjaQTSQVrXLexY6U3L1NG8mDVZEYADLeUsaCT2wm5YdjzA",
  "key1": "3znEjgCjKfJe8yPCXKGZgX5qtAd2T4q8FJpKPGWJuz229dK1wP3gsaGjkFALoAVfKAMwNnyqAEaWYw5rMAbmkniy",
  "key2": "3evTexBMxMUuqbs2xxSLr5Aty739kgFYyYjn5wasmWnYiRvvn5LENsiPN4kdR4PDNPy7jj67NdDaDDEgqtti4WUy",
  "key3": "2TuW8uaQVkPM5o89bo8CV2bYCLBvF4XYxGcCf3pZbVKTWdFbXhrhqLuyhbQaxueEmJFLgNSrCghBryJKBQ23ymXy",
  "key4": "QvTJVnQmjkJuuz1ZsFNQagEZ6RpdRtFXVG4i5dcnPS1CYBd4Ns9H8h7ybTeXy8rnDbbve8o18uj9tpjz3FAWKTW",
  "key5": "4wK1cQY17XZH28zj5ghyJnPVdiLMoznafF991JYwwFcNiH3R3YEe1ANir2Ksi4z3ZbTG1ysUfoh3Gypt9QM9iJ6f",
  "key6": "3iXuqPRxr6c96eonWL6EKp9v9Hsm5bVv3yJxgGZ5r4gcLPWsRhcXDptKiJPuBaDkTTaCWqbS8XMBMMNn95q7ZDk2",
  "key7": "5dxH7SVxfsm6EiJ4Q7CR8p3J1Y4sN2ZWt9nE8NPzCexjARycvm3VXRbAVHHbfRFKYV8yUiueHkDxESafAf6oEYEu",
  "key8": "4Zpx6Ko6ZyVAoekuyALnApnvp35nqPPWoCtMBcmvyzA2J4cxu1fzrc7dY2JL7jsgBx8zSfB95s9GrC1kmfvtFmAV",
  "key9": "3LLT9Zzh9ztaEhxEk8bR83XwrY7b83JHezuC8hNxsTmY8pKvMpLoFBsnQ6N7kT1s4rR7swUciGsYv5nzJaXHNhWy",
  "key10": "3m4J1Mys7CswhFbAyzWTKjjC2trCpHWJKbMptcA6gdj3B6r3kfsxPt7ZakurDAab3furMxyZJwByeUQc9qnP2nMA",
  "key11": "2okYmnNxye1besh9WCE96q6ZRZMTrtQPNhsnMua26qeVFXMeTBA2DdrtR3BCo1tnsusnG3TN7pVcLt49kGKVL1T5",
  "key12": "62cj63fEEYpC8wWsN8V68tatyPv4ULeCtie8mNZQg9iKJaNWG7jtvVQRuEHXy65ksRJm4nzmVXkWzuGLrMa34pjT",
  "key13": "3Jt2cAiMBdAHTspNHwjwoh13ruGzSCQjDbPimj2rX1AMSmSzucberf5s985gDZKmsRzPgsPmNUDWj37iK4bWoJCE",
  "key14": "3yovMB3GcYTVoV8ELam1anN6V9XQZwbLK9sdmwV2ffooiVvY2Y69cfRg1vsQZmpkE8kKX5xjaB2FZFuc35Zs5cub",
  "key15": "3Ki6Z8mUAvAU5zBpCH42T3DkFdxNoPZGHug49jeXrD26rnaAF7winBXpps5saaLVec3UHMMVtXWHrXTHaxcQA6kD",
  "key16": "4YzXkkgNRDytP128kUxWu3jF1ga6JmN2RE1tSWxFuyXT6mo3nZCkZxFnf5XgKKmYModRAPWzZLPVDdYoJV9yNnVF",
  "key17": "4hkhRUbX1i1nAX5RowRaMwyAvoorYSMprnNcGjFWDG5vruvEeLQyq3xQaG1pMUhMHDdsY71HVtypqqybdRV2cNPC",
  "key18": "4s7HtpdazWAXUUpTgxzRTikMSE85BV2FNaE2daPtUeDB7a2a4j8CHGnVHvAJ6SDXF5XmMhSE7yTArrZ3d4vqdtNp",
  "key19": "kEKYPgGTcwjKEj1gwKacrNfSddJ7pzQeJcnAAVX3jExV6Z9AoLGtb26zPph43E6z4bGNJ8sDJzz7SFqqJsFdtvv",
  "key20": "5tPPp1tYCPVxETEiZQgm8UYPdMjpdLn6eC83TQorGno6Dst7fFTwy72amkhT5s3pL9kyYKExHYT31neMTeX96NwJ",
  "key21": "42P8Jak34xLXVfhiwtWw7PoyhahA7B9HnMdo7qcSUHfZkwdCUmBh95ZykJfEtPdtDhmYE5GWs9M4TB18ibg5qiFy",
  "key22": "5oBCLYGBnsBAdav9gfxRoZrAfRV7oYmFNBuAtTzfFgQnoQKgnxCszzrY62GQrYJa29JdArP36aXoT2TiEphoLADM",
  "key23": "5mEbyVCbFoVW4wcNaBsD5RigiUPpoS8mhj3o8fuw6AyWhU1TcYFrqwgACxZ8UykfaXUiQ2wYjhX1Z1P3Ekbw41Pg",
  "key24": "5a58Jf5CiULp6hKio8cPn5dEHCeVGrorvcbjvCo9vhmuCLTeNy7jNEBia6LM8kNVYPatJfJi99U4cacFmrS6iiYc",
  "key25": "3T4v12PGUWQ2yqqeB5FmUfzuMgAz7baBQPMmDttFqwkRSa45dxgfzVCRb2j6aVd9KwJB9caaJar729J3yHgwc8G3"
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
