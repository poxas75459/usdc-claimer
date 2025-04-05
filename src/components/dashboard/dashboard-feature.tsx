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
    "2REUG7vWQbJHHAFSY4ikCAkH8AE12NiHgxQQuaMM38HtGjZJZ5joWiPKqfX9nV9bVQqkm4yYUyMrpxxDBsg2vg2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFxXmWCjR7nTn4qg83AVEMZ9sqGiE3RSdad9icJNrYARQEyXZRz1QerpWv91Hu6jWkPPoKWWiT4BzZnrwmEai3A",
  "key1": "duQkGM7pDdWwaNjSxadFLd6wd8GNdNfnnHXiDnoPFixRk91vWHPxqkN4tFuyaDzyNS88Us8mygoZNX5Zqjn87En",
  "key2": "5QhZQDBHLCK1b1SoDQnjGobXsGBN98FeQi477rBoGxmaH1KTwJnsb1pAeki8DrAKF848mcUUB1npz4CjPUBRSQJ",
  "key3": "Uezj7AuFWJGt6TLg9YDcV6oW2q3aZt2YueUYziBqSpy1ZZaFGu6sdQYCNJiYRNcFJyMM3rSFfawrPPuFu13PPSQ",
  "key4": "5oFQDez9gRS3yigULAPeGf5RfzFfkukvusLbVCaimeZg38GZCcweF7KQAt3KGqmiL4a2JSWRTeJuxGBarNKsYJNX",
  "key5": "2JpA8n5KgQvQccgS4jaWXAfSjJBkiE8AqLqqYTSUsvNfaip6Uyf18W7qi3ZdJPkhq8gRsCvp7g5fCSq8tCL1dPm4",
  "key6": "41YGQYwCt4PiPjdqW546wYcWZtJdqSmF8vyyBdMtKrivN6kJsMiNPUBAoN6myLwdvNsRWF1ciQAuwnZ9afAgMgFP",
  "key7": "uzabZn5uPVbpEvxVJnrtVL1Db58x8MDkTWYWkiZVPejCriuM24zLt2oxeP7Rx7XQ17rq4sBm416EkvJe2kAg56x",
  "key8": "5RD95NfBGcisZpRDvwVwQuGLh9fbaBcwbwu4wFQHGofQ63xuycHrJWZwyBuSyg3UuqXGFwD5rQWr9AJL7dz9wpKV",
  "key9": "2oCBEKNgM4HeZPrFBPJHYo4e7hr4CrKKbseVrKZsvZKnBnN7eKPjnJNXYSug3PKJt9S8QoEgjik1E9zYbRKficay",
  "key10": "5EuGfMJ2gLG5yx8FchsUKTEACtArTo9uU1dfn3nmso6yxuViWUpJNjpavYLBetPnK8FNjS1Etw41K1EoRsWCjaiE",
  "key11": "2m4qsZuq1Kc46NhuHuUQjVXK1ox8f2LeRMbu5ZuVP8JiRYcWFdV9o6BcpYtjXKsVu7YvRLMSrYzWX3zU6u4tE9zw",
  "key12": "4BZ4xKjAEaGnmzy4XW8ntQYybe42XmMrqv32RZqTwnPzpk7X58cagvWqfYLmp5PLfXCxvuxitxiZScs69ChUhWn1",
  "key13": "2woWcg3GXZUw4QrUJeHuRSZ2TR2Hb9oKbaEXKN6M3LLiZECY8ZwH1MZxns8StPrjpWVnEpvJkcwpr5xptenz2EAy",
  "key14": "4rLUuNZTBRw1uoZPvd8ev6pUWR4rHJVxXk35fT8Rp6RiZmSgT6vFSfrWkgXdc7o9waigfQwVLMCrDuhmA2eQ65t2",
  "key15": "48ssxExD71T2Uo4DSh9bSgQoChRPxYarWgYTnNoSrq1JZTV7nkpbrtkvgFWZK72BnMVrZKTR3mAwXme1VVBcaDYs",
  "key16": "3y9WBhynS4FXBp5dHfjYdxWZszXqyA9kcRUaKb2y9AJaZqFLKpi5GRYuwbs5vdXtNoqH2HDuEv5Jp8ataec927jv",
  "key17": "5uDwVJZKNDrEAwty77rxJkHbh9CHac2NyvBA7W6pUfMyAfVMKjpRqbPrEno6shc9KHnz7BpNFfDhXDUSMDMrhucH",
  "key18": "2SA9gTapTqH96C8uLA5Ekym2LyYes1ohzPE9ytWQ7aJswbzsfvPLpyeMdrsMTATkChgtJiDzoE7rzqqfH8xeaNAk",
  "key19": "4x4aCpnwVuKhCTWxeoyKPjSdjeuVDZGTXChcoi3AnhDmZC5wUjwNxXuMFxnkj9wWnEgQBpU2RAGTrnjsPb7XN58Q",
  "key20": "52pFRRTg7iUxEyE3qTWM1hJsN911xHYwcgXSkppaHJ6v9cCvrMW68skASfCYEN3cWHTx6bdtRGwVjnmqKCJmZzNa",
  "key21": "3Q6GkPnz7DoLcvUBNXY4uiEhdEcwtgWoVDDbQBkSK4g39BsDmj3UhyrYjSvCJJBaWWSxqc5cmEDJ5pwXzbcrxCiV",
  "key22": "tVcxVCUiSoxjb23HtHvznBmaQtQyE3xZ8HhqFhTVxT8akRFJ5PjJTPpxAYjDFDojbfkyhbmhYzW6G2mq3rbXewe",
  "key23": "3HtgKrht2yoG6GTJfuYMGWrQujUVZmnkpXM9aemWs8xSq6hXJkArsM3iiV3Um4KZPPiMi6wpkLdiwi1Ji4y2kPJ4",
  "key24": "4hmsHErEhn5XYukQcLiNF9S8w42Bjm2ZWhVwTfNiGGdzDGwx5FVZCVDAnEf6TA58xzUWErt8LKZnttr9d486AT1i",
  "key25": "3JTgnvk1Nnm8oW7nc4ngUvftKFu7DVVKTUueaLr8CtBpXcmQUYbaBcp8MfHF8Wjb5QKNq1uVUWhH5rhrnNJ2QUKL",
  "key26": "5NtomiJ23ThsBd9XrkFfrgxNoUoU6o8KkdpPP4MmuaE6XRNknuc61Ze5shUfSNwVpDxr6ukVxGUKwLJvhVoYKSLB",
  "key27": "5XPvJaJDVCaNi41jbbdQZqnHhVRA3oPEHGRUQCWkeYiPiH1X9KVQezSQJpPoeBMnJLVikDqbCorVBTMdE1WJsg8v",
  "key28": "5At8Jj6f63rwDSxikyLfx5iE7ucFCSWNbukGkMnoo1Bjtt1VZgv2fth1694WFjZChvDdk2QuhCizgT1j7DVLW9kL",
  "key29": "yNXN3paJwMZ45HVKnLcybimU3ZZi6DydZ8fhZ2KwecDdAYNf2wJcathj736fEo8QoabAdGMGBdpo5J538DeQFMc",
  "key30": "4wiLBDTTFFxhe8Qy3UDJHyCP81nV3asfh4f7ezSW2qKyRZoaPsnUbJRGpQBBJZJPaESTgfbDkjKYggpgcPpBWwHe",
  "key31": "5nEgnZaP3B6F7mUCRsQW7GUUFEaNwtrmF9GtTSXRJWawXZFYzf9NWWh3TC9nhjfNq4hhbEuRxtduiVCUxn45LCJM",
  "key32": "5dyrzwjsNcJe4RS2zbdfk2uZ3xDFVnSxtBrMWAkpH4UfaTpfHBuns3xwyTJJqXeCP174gkwVbu4mA2dcwF4cbGuh"
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
