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
    "63ZrgvpPebwBuTQ8XKjjTSj9trhXXs8LM1GmR5mUGjQA4MXBjF2mTUMbMMVVY9Kc7XJMDQ1V3YqhUGqdKqdKPs6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "643XNVYGG2eu3BMiMCQJj1arepBqcvvAiQe2FYH25R3eSG89VUwWs41WVbtPEyMyEsAN95CSnvWZ3ywrVcJTCZEJ",
  "key1": "U6uxmS1kVTPVW5ejDbrYyMZ46WwU25Jc1r4vcS2b3q3M2GPYLd9rg1CUWJg3a1X9aVgiW7rDLFLEyt1yPJ3KGVS",
  "key2": "52Eu4eQ7zTPpXzfdXHpHJMcfVV2v71YzZsnbb3oaRAZuhDoHxiosMNKvPUnPB1G3TQn5C6GuyoCJvU53G2kZsjn7",
  "key3": "4ye7zMWwvkZ9KixvQLdf5RGrJ8nHergAMwweFqps4WXhxCWg4xqRRBF2CGwTWDMSegUZpAwrDmBxinqhpp8oxmYG",
  "key4": "5vY4r9znQcALdQuieojnkw6fohHeuc2C22QoewztFguXJk7rSiGDkrSzKcGDN73HNtpGKUqFn9byWaN99XmH9dxU",
  "key5": "29SW7sCJ4xU1GoyN2WUL97mYhpJ59ozRBXez2wpGu1mXZqfcnHZJH8PpWkNBEZtb9e7mR5mFDbbPJqrX4c5Uvup3",
  "key6": "4NUzUnsNzgzg4QhrStb6EwRa2nWRAo9EvpVLkfBPyYjJMwFNuEpHkkrKdpLyYxqHpQ94M4TALtM5FQwVE2TWJ5Rq",
  "key7": "3NopkScedc2H9GxCcPMGj7G5d4nXHTT3xaXCTcYHk5zgmp5tnfiuLNobPYjyAEthibeAAKWJsh5Dwbb2upWkTqfQ",
  "key8": "fgSCVzEXDRcBBRfcJorz8FZitsWGJrT8Q4AWLqmoC58gZrGZvx7WurFC4RBVHQwwV1b6QSXfZK6weZxPinqUhfd",
  "key9": "5vKJaWS59VRAPYyLMzxVmh3nt3BPVRUJR1yqddM1HGgPZcw5F2uu3EtgEs4TsAYrLMCiL2SGEWesZtKLM9LEU4F8",
  "key10": "4aHBJ1ah7xttn1QCFLHaKyy8Wb7zvaqZeTYEdvegsYdNhPorBNVQu3Nmzsbtk8FKYzCHT8WLxAzARYHQb2AtLhV4",
  "key11": "3EAR1ctua41N1UCDA4tw6bLqbaoLEaesWrQS92kuV5VhRcCGQaM5JutFaUx2C2y2d66WQVWfMMt2kSA2uEHQ5Dgx",
  "key12": "NrX3sobc72G29xJ7nRXSJyPWUNwB7U32AruLpgaLvTmZQ5ge3tDFwsMo8SaC5ojhxg9kix1mbY7HNTnVQTpx8HT",
  "key13": "3FpoJ5bNhC6AQXMy4zHYbUKw32q6AnuBwR16Fpuc1dVUpRC2AfzrE5WZ1YnzWFRP367RHtuMnaz9Pkj1QhF9XnEV",
  "key14": "4xKbcUjipDg5tmhnjbUvYofrQJcrzzY9BqGE65JxCS4XpZrAwuoRjxtVkFw1c4Xb2MAMit29CXK44z3JHBv5x7uW",
  "key15": "5oqGACLryx3NNK1Y3GCibdBK5XMvmP1grySmfyWNbwMW8J5QUQkjD7eDCpq3Vg5BYfzFL7usZQQu42M9GaPmnWqX",
  "key16": "3KVUA4n7XgVk7FP7hxWXwUkYMma4xG2G4GdnshHSj8Cu4g7gZBgziZJi2ZqmTQQWc9pF2KBjrShCktCmWvg5NMgd",
  "key17": "5bsK6ozcJ4oYxCjoWtnsJY1kcXxeYv3DvCmgpuGAG3ohHQo6LioacdKSXuUbWB4P5KVhEwcR7U5TLgwTNtFLw2QU",
  "key18": "3bv7dgC7nVxRiY4N18fNHpeP2MrfszLmuDDj6A8Enq1SvE8sBpUUC64QQR96FYuRrG9YYFJwxS5jY7fCuSEyFhBj",
  "key19": "TdRac8np8HSWnHgXmTgPKggYRmQmaEDsTs13S1Y839SmVy4EnXZVK1Mf5EEt49TZjBo2NEJY8XagRwU4zi8ZKkG",
  "key20": "5VzJs1B7jdhLgJUum7ox5xchA32Yxi863qH7PuWfnoeZwMG1gYsGVFGhYTb81u2gZEuUbxER4erMJXXgnpvwJoyn",
  "key21": "5YknrA5uR1PLx7zZaMz5TaRdRkLC2N1ciF6ykFw3H8WX54eaHgzAhSS5QpLi4DADGr4QUyJEjEHQGfVMyvugkPGz",
  "key22": "8RpJTwpPY4d1v6C7SzT548HUoF8brFAYXm86ku5wuRiyWCxBpocoNqFSczyzqwpw5ANJbCgnXS39bL2UTmWQ6yw",
  "key23": "27y5qaZFFodyDffUEcUc9PTkQ5ez6w1WZ8y89GcMe9v9SmLJ1DWXFKdU896o8CAsGrMzxQkR4bCaAkuZQqWNECsD",
  "key24": "5oLJRXpLSEpbxJbtu9YHTVHNAs2XRUiUgiJHqV1o2ayx32yHCdeKqqVvLrQUWD18aytV1qSnKRn4fEhzxKKdz6PV",
  "key25": "2dwb3wLjTobTZKummDDmHGNB6g86iG676E2jUt5VPMM7N6zeTP4yhrZzw5hoyWh74cd3DyUNC8AHVmHc89Ne8Mp6",
  "key26": "5B3JLkCRRzNq6g3gP9G5g4QuY1BkNCMtV4GLsbfZncYBhEKBdW73BgASpxufDsms8V8rcz1A2szBkdmCW4jJC14g",
  "key27": "KqBKdjwAn6woXKMJcYQirucSmAJQX1d2VBUqsEXFbi3N1JivCwopbfyuokLKAwuUfZWq6QMojq3fzck6ubR5J1G",
  "key28": "45cEnjHbaUXXUe5Co4hcd5tsXLvuqtLM11k4jk2oPxU3QsX3d5ToXqs4KYA4sboiEFwQmZk4NeZAp21K5dV5KZ4X"
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
