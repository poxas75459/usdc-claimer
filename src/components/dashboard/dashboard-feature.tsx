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
    "3jZ8Pid1Z3ZSAw9yZ1TM3bmbLiwu1zJmT1mDTmnNsUQvPcNJe3DbxtjcZ9PLc9eW18ZcBAHB8mGmRv8zCjXDqFkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faLwqJxZQL8tn5DeWTTMCJkkXbWeAbABYvWTGo5pjtXT51tJ9EWi4CaA4dMxjKWkz4aFjF23u3ZV7o2UorKTP4",
  "key1": "1pSXeuWuyXTrpHoaCY7taYqBzon22hoa92NHP1AaicBeQUKJZ1ZWJK6gCYDvruTMpxPVVQZw5RWZPkgzHU7WZ5",
  "key2": "2sDwMp84SR538huzVb1oSxJmT1txgnqtTD615LvFbY15N3mN7HohNFWJwWE2bcd6N4XE8GJUGmmPTbFyePCpX6Fh",
  "key3": "3v2Bkx7iHDxeVnLLGRaF7Ju28hP4vUbNfL9tDSccuCz7u6q1DkCsgheLRkSKADZZPJkxrFkpscG4tjZyAE4YjWYR",
  "key4": "4qFHCqe6byZeYXPSUBw34ygRUTxMHdoW9u8Vz1o1iKLma8ALQsR6DtRkQQBxtDyZKeYXdPgVtXmkzjftmd82awU1",
  "key5": "5jAopqC1cQr7Cxd4YiWgw34D5WgE8QQ9ULqbDkCbA6uqQNcdER698NxA8CFPydYm3CLJZuTLMFXW66BV8UzLmQHn",
  "key6": "4HHn8r3L7XFZ7rPbr2cPG92bWMd333gSumfAfSQvCSXeDGFhu9TSShSTv6osJu1SuqZq6B4YVdB8MJ2XbP26Mwyq",
  "key7": "JWUz7cbG2Ffh4JKwS1C1mh65yr48tpM4MxfraKMS3QyJh8ey19DF2jqy5bxq96rvPEpUNwNDsngtvDe5K9di7qk",
  "key8": "63ZMyGQQ8qbkMp3AgcVBBmr2GXUAWzBwtrP7F3wHKKZFPDRkSCticDUBngNTEAZTxG8846yGzk1KYm5J6ZmnA2bt",
  "key9": "yK42FkQXqrxYeXCWaLqtqJhD2bJpgobY7TWo8PnSqFoKLE8yk21pLJZeaEDv39MmF6NVxWR7yHAWuM3aPFqTLod",
  "key10": "3jMFoaBNGLMagwiFCXjd3tdWNruBLfmhnKNZxXrdWHuAkdmwqZvsL3XMF6c2bVMti1XVRirn4CEdbytk3e5EUfAK",
  "key11": "5p1cPTF4Ry7P1zwtSinK6wF3iNDFJsp4oUF25wFy2GyXFPMJjXgkznqfpiL3BpBjkwaKnAaSkT7kjGoMS7SgTx99",
  "key12": "43ETu152BF5EFnLtVvdypobt4n4hpcPQLYCtWVNVGHbJvmrCiWXmDoMoT324WjrWMYXHxNgAt7U7Lb6C4xsiFoM7",
  "key13": "2WSAbEgLDv8g7wpkaD5gfEfxRKyHYzg3S8uW9SM4uWWBxc2vRAwpjXyNRosaboQJW8mvhhTp6ghg5TJHWNhAHhGy",
  "key14": "5hjdiphcJKdbz2W4oUNCNKPG3tjrtraqgDS5Hws7gHpasJhy7XEH2QJ1bdGJ6JAB1UK1WrEVyeehuX9fp4MZS74t",
  "key15": "3XN1jpVGrbGweBcW4r2nfzqP9nJXQWThbviaAGEUPGSWfNyX1uyopcNzuWfdq4D7bqMsys8ckKRNmePtuRzN4fLY",
  "key16": "3EFdViYopHwy162zUN6CsS4rtv1kunU1Vp1YPSSLK85EyoEtdNK2puSgmCjVoiy34YGKu2Bu1o28xt2iCtafkJbH",
  "key17": "9qvsKghpWHiTsA5gQi2MfqY1qX8McStEbFLXc93QxCKVZLzwiC2bsLhG24Sphfi1dN3BV5owLN7QiLMpDMohz6Q",
  "key18": "4XcyFJMH8BJXJwU86jfW9Z15tQH6Q3H9Ydc3cb1FaqE1kDeY3JZP159L1PrXCa2Z8JecB1HdeyxdQzhM2Y6ELZy1",
  "key19": "3zFXsrgBtJj3dFdEAer93nbw634Vm7XqhQvnYvzxaQaSxjAHUVWaWqNVu7MwtNazzL1vvcYaZ6k5qcWuwDYNuFXW",
  "key20": "4yEEJ8uX95fCxUhmkywtroNK6nmwqrSbmBf9BPzg4PCZowPknkh57B31P1azDGi3KDDx3xkJmtwULcixZxhrXna4",
  "key21": "2PQKbnLiZTXQ7PKKdQUz1WWv6vragRsruCvHABh1i5mYeqz27FvgKhns4dEaSDnmjjbBP1y6bA18bwCEaR8dMaec",
  "key22": "DrtAAsDSUnw82cGyWiqEM8uH9apJQ5Ee1YzxYbpUHu6GFeMviazQCKku8ty7TEoaLEXvFiepjf9uF81auWF1bD5",
  "key23": "4DyV8fu4MzNbcinTj5qavHz8pSRCJ3wvht5XJPFC7mimH7hnzDuGkMNy45tMbvs7S5hDwKSfAzHiufRYiVWNJJLP",
  "key24": "2j1d17q4QcirfkacacriTjw1paEw93NPjxCYxBNkP2vkJHTqKUuRJ2ZdiMCziU1L9S5t22cHftxsjTGTr6m4HKND",
  "key25": "2QBUhUHxviFHLMY2ZNUfVKNkJqR5BJAFbHun7m3EEYUtSb1DJb3MzNkcaEJvg3KzWqriurfKXq9AAvW1D5U84qKD"
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
