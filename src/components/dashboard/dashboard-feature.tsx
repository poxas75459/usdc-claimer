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
    "3gbF7b9t66QApTXPuxo7YggKHt9DvXRcJ5RSKWov1Fdakkepr1vLdzvCwDihwEH5sqdG63QJx4nG8ZsexxALQBnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXVmjGoxf1QW1PSEjVZhka72LSrz6B38VT4UGcFFS1FEQTJ31MMoxE7JUiEBPHKaXeDcBB9gQeKsfvKxosZsFg8",
  "key1": "3aB7nXd3mZieWyrKP2kR8GVwG42iChY9sRKbUFBDAdm1FcWJrBrzvegpY7u7u9MEHrJAA7WzRgZnWxMn2Mu37Dys",
  "key2": "5JxoDe3KUdWeVgn362zHrGKzPyqLTzYJUcHUB2Vm3huqB8hefz4sSDPQTSeBuAVDU7CYhC11fitM9N2pUW6dvDXS",
  "key3": "5YtzJqt8YaHRLgbBZJGtz6ALJaYeo3fJaxesiMLpZxwChM1bnLSUMZxGASj6CnpihhusWDBJhgj5TXLmsjngEYjW",
  "key4": "5tetPMqWtqGoB2BGa9tpAHnmyMMmr813szs64NazfW6mo9Ajd6BcGMGkkdCCffF3tYVNoWComUzwbKYWQgRft5t3",
  "key5": "5RJWpHFcj4EjoMQswuzx2nSd2epSGn11PXxCKmgfVvssUTB6V6H4uSdTWKWxMc7xvekkfvW9SMbFFXgMHKv2n5vm",
  "key6": "LVanx6Stb9dKSmwv3BYiyRiseFLXJKEz45KqQ28GWkefEQLp7f7DBvowCEjM8dEqcQww63zJfeosNNsoeERTt4K",
  "key7": "5wHF2aUyznjpLYmzoauutyFaXZ3t4c1dtWm2cSesFgyWmCdjXKMr5wqZZf7EJqUt8upFfeEs578BCsFVPVcVn9kh",
  "key8": "3zLTKYmnNutnPnW5FtBnUD862qMoPqDBCEbj8ZSMRy4CRRVg8Zs7HvdesuY6z2dmPjxMhoRtsCv85zprC1abuGzM",
  "key9": "2e5n2pmN3hLagKLAFwwD68kGnZdv9ArQrmHamYQe9enpA4tcABhrpAcQ5SLMGi75Ps19KTkkgt2kQpbWJwpwUv3c",
  "key10": "4ZMMCPejDK4dMwzs2KkwBgM7RiFpzpc58StdzQm5r6qSaQ2wFDiKtPyS58UN42Yy4Da1SQnNm5vpMboAgdcJ5Wmh",
  "key11": "4gjuk1YbzFAZX6LpT9rGENF3D7A4R19Smg3Z3zNQFfmbXzCen8ieBY4HUGnFUFZ3z1wA9618H7Bux6td8i56FK6L",
  "key12": "2sKgJVPecSUx6gjQ99Eh3Bf4G1Qhm4nLim8Eki5dAuCcecJxnQKTwsDDagVbopf3sXu3WiTcAEHoS4RVdkeeEfnZ",
  "key13": "wrLy612HygvLZTEwyUb77XSY1b3H7w4ojNDqyUxJ8Mtd1R7YgoWf2jzyupE4uNyar36rves8cF9aDfHjECUM7im",
  "key14": "3vsHRZCx7aefXCVK7N7VsGH3KCrmTbprVW52bNtetauUR8sB89AGDw55vqz7fuWCpbLPQEcJpGkMoyNp3Eux3UA6",
  "key15": "S1ASkW8s8pSwHJ2ngvdxdRE8hDNg5gTfhsB2h47MrYf7vbbYQny887uEtZMQb6LE3CidJ2Xb7RYMNjcNe7GAgS1",
  "key16": "4w6R7PmTdZGCuQVGwjkz9CW5bFrkcR3r5Dm2CshpTg6N8bXhJxVjWrFtMpZ2NWDaMMDPUJJLw7yHeqyNa1wU1SMq",
  "key17": "5ZBCEdvywknfLRaDxiXwVoMtPPzNjtZKc274tN23KQkB2ZsmzbsS6gn6U444VWUxc1ggngdHPpYGhD3ES9k4zFRH",
  "key18": "2t9HFrGaKoXU4Cm9tbUn8z4MNVV8MZyebMjZ3ooL9AcJfjpZsoLKsYBKKpA5mYhtTwrjTZhADRxnYcMqiSPKTRwj",
  "key19": "5464VEx2T91q5CXTxubrSbw9ACQMXaGfN9kWtsdzi9ceNy9GDhnxfAX59StDJpe4CPPh3AwVuadphJU1XimS39Ec",
  "key20": "BGaETmKJdVT23atTyYDWAd6hAdfDzUyVpHcrQNEGXSQgSaBC6xtWnBPtgFSx5PQbcaK32ySQhQctHiVmxSm37PR",
  "key21": "55Ph34HcFGAotoYxeX6tYDzGiyqqRQq2bNiNDTCTvHNZD6h42HUJHixFtmBSowunvP3cDp1geCPeDDfBFsyTws2k",
  "key22": "2PW38yxd2zz3WRhunZ1WsK1LcRN6GwcZ9nU1MZfFugKBXCD4KTKJ4Nkn4e7ZYWX5GJeqTE7iZxqxyattgRrFiNL4",
  "key23": "2XnFNPQkcu8j7R6nna2QyAH9ZTmFEbbcnPPG9xaPwmW11FV5ZjZCYE1bfd48zX6uiDvknjNPeUc1TH99MBpEpCf9",
  "key24": "2mDZP6Ek36SC6iDiZbN9BfXE6zzrzRUkKybTFXzwBzS6S9xB476QhFde38g6bre5ivUL5arFXqZKTcP4PfPPEf8n",
  "key25": "5mXnWFk8ag42A6WJEoLZa31UuheGgQ6TZ2fFvXEqvuFxPX9ASPHHiUEewRqZfgn5pgPFnjgY2z61g4yToDifPmQW",
  "key26": "ob9aJXcT1GybBBt1VhEVkvzHoxn93Zs88opbQzKNyDfkM92iabD9REJSk76yTR6L46T5uCzYm8jCsBFsxmBAwBa",
  "key27": "2w8ehEzhv5mtgBEfNdZzXgFqLw3ggbEpeifawMfC4Yy7VzgRTGJLsQQ2Py7HcfvhiebQhjnNzXgzxe9m2nKUizWe",
  "key28": "3caACCwVkJab7VtLDLB99hVkdwmkHzZdjXhpwpJLSPyrTKForvAhf8tHq4jsNuQ3Ym1uSdE3jYCxCqqbtWw6MFf",
  "key29": "24r63wLWo4iaxf2vM8DuQsKKoFCXcciAjkyo9CoKUST2NTPiXV1fLYvMXSVQeDFk8zDsYANbArVodfro9ydBRc7i",
  "key30": "4VHSptUtN9TpmDdWn3NHNc4etn55E6Q9pMguwAX8JntvGvce58tjFaeczGDgWRPtCYdUQPGbWnhmsW8bmZkK74zw",
  "key31": "4eSPaubakrrcYBxKSXWKsg4ta8of288KJTwycaHdwyYGf2d24U3hYzittpkwzd9So66P8qnqsTNnRcmTcTdNDFyB",
  "key32": "4CJmtNBFQ8gE2BQFVQE5btYCGmTKTGzXr8aYBwNwRdSmz6FuHBPmKskQpBtFvz6UTPgy4msRPe1zgshFpPu5XvKr"
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
