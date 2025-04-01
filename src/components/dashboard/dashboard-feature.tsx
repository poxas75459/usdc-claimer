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
    "36K5qHpMUxZffueuamMuGug5q2AWsipbjXdKW6S9i89tyW3U41fBWmAbBQCpipWZZem3CnzzNE4oCc1i4SjJsm1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qns6XCJFdGwePz85ZsBLXhszwLM3Ngre2SMuUv86MVmUqGa6ve6dUxjtS8YtKhYXp97FpTgD9XpEjhqgJmdCtUc",
  "key1": "3DVMYD1dmQ4YFNHR8vc5wAfAsidnb7EQdRGGXgfF499pP7ZLRaCcJqhV6e8PaPrhXhtdDPDP6JBVPS6aRAxDRnLh",
  "key2": "4QDQQ7678XNYkTe6e2UNdPfiTgFYZ5RUg6fjvb3YAGeMZBbZ73C5u2gkz6wAMkBZnyTiEsYJNu7FsFgGrqREZRfE",
  "key3": "43PP3afMpz5KcVg6aWCz5cUJpk4otRVqbGcTE6PgadbBo9mYrgg4Eq6t9S5TNywpfaeQs54GYHtiweajeZWEizf2",
  "key4": "48FScM21F2L9XzwBFWcXy89HkGB4W6DecehwMzvvrN4cSnNdhjBG8oyrfEqFaUvDMhAAUfWsZxtZjBMn7LhYKXH8",
  "key5": "2VFxbGa7EcsLFssUggtDm8TCkjuX5QjrY2omk85q5A7HW43CeECVdNkMyd552UXqUJPr95M6fhYhjuGGXQYXcrLc",
  "key6": "5Ni8TEdYR1pygWZ23cvYF2GCCZ7puCGHhQuQURx5Gas3vzWSd9xVbbRT8fiEtxwRAReDBkLYgznjVgoHjFi72o7m",
  "key7": "2eM4C4ejJLZvA8aVZdreox4anqQSQneBrsh2KJNVnd7jKLLqs9C2PL5qP7G2wd282gArsiiusNgKgkNCsvtaYaTH",
  "key8": "5rEbXZXAqr4cWMQi6UokckP3Kve661rjajJHyCiHm169cfUQAGefdHv22KfJ3RZ1d4nJ8KFH9vEuTxQu4UXE2GSu",
  "key9": "27td135BjdKTmkj9SwRE6kkNQF5eR9Chi5p8jVFD5tUwzLfAWmfLuhn2Fxd8GExdgHUs4viU6EhyA76CuX68PGjd",
  "key10": "5nDd2VvDWKJgULmSjBtzGwTKMxEWypUT86eU2dwZaz2LHFf2hhdYdNpk9PU8fAwBwL93RdKYkhpSqifm1DMECjj1",
  "key11": "uh529peG9SFWbDogCCc3BHoaMLr4oZHR4tL5ZGohMLhGDzzu7712xKGfqVRrSuZmU11dn7z6xztuCmiaMrVjJbL",
  "key12": "4WfNt6U7vawQQC5sKnFzxA1qC6ryJ8cyCV9HpSfAufcXZ1GVfyC57mQ3trn6ibFHTjfC2cnqiAE5R63er14Tghvr",
  "key13": "62XFwPqvKjLaxnyZERj129cWr8TiAiqjuTZ8sPbUehF6kqLZhRbr9jciCphU3Bb2sRs5JCjiUpdC7B1VEmxXyR4z",
  "key14": "Nt6SJqQURKYZXuMByWnSUErKrh2sQUr1wivPjNEXssA2vncnAyWq4h5uFNSuzXqVV93jeYmnXdKLzigt538tZj2",
  "key15": "27AKAu7dCXDEaSttzKYUu3Ej4N6WzKpRJuyh5bRovhschKTGHMw7RTsYkUMzjxsSxW1QSEynWpv7QMhqcTse7WYT",
  "key16": "222z3wpvqEtayFcbYewGJ963j4zxbaYGHnsZZXAGfxJ7vJiRYB3DuKjHoz6zQBEqr6oNkmT8pQwynqnLp3Ckevkd",
  "key17": "3er8sE44ki11AhyMbeuafNYa7tRErB81rPG7UERs9iJB1EZeNYYyqcKjfVXfiT2kuyyVFkkbJxcZ8CgCJPqohrr6",
  "key18": "2tikPseDdJH84VaZSsRj9uDXE7mjUBQ98mAu9gzKEBAYgrjTR55GgEUbU6H7rqTscJy5maw2Gs78LbYDZ3FPaHRr",
  "key19": "5ahWjVR5CUGA99yoBrWeaBL9zYVvNDVBNqPVdNvn5aE1cpvwtoWpwDvARrW6c9wUyb96gPmNhfMzuJx4Qq8ptfhe",
  "key20": "3gZomKdx5v3vhZeZqd3xUbJtFFfsAu7pwC5PCE3pSwkAfzBR6UYwZoQJE8BKdUSvgtk3hj3ktiDDqjeBWRikCseV",
  "key21": "2Q9eQ2rKTYfoWQgtokJetP3mJ4buBa155bz2DyfL9xaMujVtUYTQ5S8553cBvpfy6u83UcJo8Aima4CnBnRce2PT",
  "key22": "4K5Sjukak6R9XndAAFkchiLvQ6Sz9Pk4keaN6nJLEjGWppkXCGR8GV4rhomgfX2gPaM6DnTDaZgHBKqX6i57dJki",
  "key23": "3fKAk9j3Thq4jJ1bFwMiNN2XhfD7wdJEq96aoADdSxBUvcXR6NiJoK5iPD7MGMbSPBok5rYkSLixSYgZcL7NSi1d",
  "key24": "gnWwoZFra93oyrzqPdahR3iL92VtCbud7C9tepZBDeeTxcLhvVea5syfP4Wtf4D5x1HsSh89dzQfBn9X1coYzR2",
  "key25": "aeKxXagXd4UPoppFBvyapuNru37J2vvZ7CcFoC87SEKoSnav3dknm2498Cx92hcbXMyLYgUZBZiii3NwcHcivNr",
  "key26": "XJqssJXrXv88wW1Ekx6CUWwJhxJqLSewzWCH53VJvUoemUy6yjL91LDPT16YxUtXx4STjiHesNBP1ABGBPgskR2"
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
