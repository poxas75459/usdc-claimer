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
    "5MGjmbrt3Tn3QJCcUoM6EgngcoHRHvMfVgpbvgX7SULo2i1zNtTsW4F7u686Qd9zZKTBuxSTk64gaECPxALczivv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfuxWWb9X3FAYtWcmE8agME9arD4oMhJxiHGPuSjpS8nuvJFKrDqzkq36ZnT9WAcYkdtBH41xFG1Ey8oWMGKQxR",
  "key1": "4ZFvMGGmHc8KdCfaKZS9qbAj8mj3F7khy7k6s6uYSa3VtrmcU2vPg4nroBVYgFXLmteWSCoTspsHswc8X9ADXt7",
  "key2": "49oN6xgQKD71vPodF2JJ5tqVKcPQedaRwDyob7CSZ5KMzS2yHXTfKQch7mmmYc4NTYnJpzPoPmPJLV3eWQMUZUCK",
  "key3": "2UCgRLfUYcA4XvM51EAEvGadL5VJdNxZ3k37gUrSTeygSu9W6Q9jRw77oDAdrLVZHp7j5gsnib1pdDRRbktHQx4r",
  "key4": "3i7ueHQBbPz1KrXmB4LYVXGxVswQ121wUCQXYTvassWQGbs5s8iuPVsxjcJ8ucRvuYNQJwvpBC25r841cjfYdXoT",
  "key5": "3scf3DZy6HxANA8pw8eYEd3w1VYaoYvp7Kc6P4ymGohecMnaY2GaWhhAkPmTEBiuu1GDKBY1Pk97n8h7CL9MqSMM",
  "key6": "4XHXNjiLhR29f5vLYeEYmmdYkRV55h4RZVJNLAkFxhrZ81hQWEZMYujGnzL37sQN5DZCpqWJ1ff9jg4Q9ddmJiPs",
  "key7": "9YXKSueaS16984eF82vcd6gVYpVSqtx1MREhbDBCrV74sPBfUrNp5vaMrDY2v3zQehHZMCEoPJy6PSxPe8B4eEY",
  "key8": "4SAegoq62AtcdUQ7XHWonHW3uU8RtFBvzMLjHS1anueUYhTGngH7in9HpZzKEg55vw5kTvMRauWyQ8MDcPS71LMd",
  "key9": "zeah3EoFbVJgqBXDtrcU3YdxJXQfuTADDueD8bSo7Wrh9MkxBnXSnS5KcDxmvp8RtwtooFX9cxBERcGgymsYdTH",
  "key10": "2PKbvdPZxtWXsc1ZChMY5HbjveG61T69u7WnfXULBt3krCd4ygp7nW8S9pJ57oPBiZ5c3xx5iA5EzsbDCbrigNGj",
  "key11": "yNifpypWb79ucc1cTv4hsoKUA7XVSeqsczAgNJEMM44XGU6vbmcpF8NbADE1Zt79Toe9nRUo78CkjwFcy2nsNqs",
  "key12": "4DTgpg3znFD6DJKjUnm4SmEYkDeLNWk8fzdf6So3a2u53nHUCKFrysDWLKNT6DMpJHVfZZNNTcy7eetqSW3frrGk",
  "key13": "2qTpgPp91gLuK2mPK2Gwu4pd6wiXfAoeSWmdTaqKvAUhDJbRULhhMW3mFAcRnQqAFUgAihVxA9m8xJ7GwkbWzWy6",
  "key14": "42BZ6Y8m9pbZVLgUVo4cqbKcbtLg2PcDwREEfJrbHog4Sb88bHNVJVjsGR6RmAhSJtkLKYPr6eSpUF6MC5tERxDy",
  "key15": "4hKiUpGLehgQHUpnmssPLvep2inbRryPgFKkk7WAmt7ZxnAjNBnwwr19yiMbay2po85AmQos5RfrJ1kASsUKxMM3",
  "key16": "63KdWU97pq6vfYA3JWuQH1MarapWW9TyaqnodNYvpBM5dvG6kjswt6HoGwsFLJtWfKF9dyoetWXnyhUL9YrxdM8q",
  "key17": "2F61d2RgDRSQSQdgUmtSqMstb2kYoVRMSQm1mDtBnZuQzpZdm2EhZ2rrexwTWm7R5Sv4MB8BbxfhQxN7teAXJkMJ",
  "key18": "5bmfaHUQVa1xLxf9N6tzA6DaoUe8Cax9HBtse5VMZjSTLJjNjEToitMgZW3ByaT93nSK5vfasZGjLCmtJ9DfLiXY",
  "key19": "4YP8C9hYhWv1fosmD3pEA96xYewNJfy6c9oKSeYkYVAFVHn6FipquFiFLS4xcSiYyQ5xKr7M5corEbmg6Az5T1nC",
  "key20": "4FCWUtRqGawvBdQkdrpecSXdKJs3iyTHJYdrnKtvu5xaq1tyj3waunLBB3egZpuPAm9iwpPKrkjQUR93DCj32J9z",
  "key21": "4TZJGxsqFjSbsF1gCqXTfPfU1eiU2P9f5crHpjyu66tCjz92h65cM3Hr9TD6iuTeKdCHaK1RGS65VwsksaSZkf39",
  "key22": "4AGXCeLXpTP72QZW2jG8XA8r8Ukv5VRZf699VqtZE4XqLA86ga8uckSVTJeJ85Drsbw6xwTUvaeyLqrRptUrNTKa",
  "key23": "4zWXEBP5AjM4RyfcG7bDd1SFWfxbP6frae3SXEXRK5oBWR2mHpXKADegQNVBjnoxa48fHHWgSoYP4tTSxus3z5S5",
  "key24": "ePQPiQZc6tZALzZgzZpHsAj66Poj9dd8PfHFCyMRBEqdwVgbxdacq8yUVfpLzTTWkJaJTou6RttxrjchPdqfLcx",
  "key25": "4uLw3GqQkFWqE3bKbjqMuViSnX7DDH1wdYQ2wNmbGpUADjj98989cm2raDtw4YppN87xsJm1Tr28UeVr1Z2h6UB",
  "key26": "XLt4CvF7rrium4FAH6ZmLQhzwUT4RDHb34m9Wfeeb34pPYF1PSDdsGm7shWBHhgXsTpNQB2WrNrPJ1BwRZ1T9XQ",
  "key27": "5C3SmTdvqozMLCvFXm1YTaXZWCPN6ucHrks6YNuERoG8E4LE86SXQqGMzrFDxFrdHJ4QhhcbnWGuCrKx5GBvMBXk"
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
