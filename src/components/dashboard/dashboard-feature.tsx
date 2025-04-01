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
    "58kpWq5rc9YsooN6er8Ws2tXsRxEivxRgBWSXsTZPdyesSyDCAozTYK6H7zRJyzVM2n4YUBgHxYi6SFs3gwrJYKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uih1sJeNq3GJWLNVPb9RmbpwFK1CEpxkmy6X35fMatiT9AAx7zcsg2ZiH4m2wLSxivdWdUGrxZJS6kA5aJBFu5f",
  "key1": "1Ae8ZnMQgNcv5gjVLPBnTiVyvWnVTixUmRcjgjK2BJr1nih7rfnw8RwbqkDNNZcGVB7R6CHchKGskb43XwrBePH",
  "key2": "3idNrsC1aZTCKtBPjtdmogpBvDcFoyMJ6D2Wr4nL4VNeXXy2znEpQt5CbnKpsWtkBxd73pTE289h82bT5TH5rkTX",
  "key3": "2XVF68pKhwttJWiK6ncBvPXSZESicSazBndZnuS9KdCXsUHwaKSQm11Z36gJJsFDVPLNHMbi2AZZnVoxmrV8PsPc",
  "key4": "foVsZsnzw6y8cALMYbz1t9EBF9eEjqohnpQ7rrUnvfxwcN4itrb9bkm4V2GNUZbZX4dUMTKgKjaupFzfV6wmUK5",
  "key5": "2JJ6aJ81HpY1dFtqynoXPMfTKpJqcvRt3WF6AqdxdJS9GzBtEDriWEGVx94YeDUZwC1kAGZnip79PJ1ErTgiwUyf",
  "key6": "34Srw5L2JBFBEH5MzaLY3JUWheX6YxH5fF4JW2v7Tws1tPB2ZtDShuKi49zjvAxwGB3Zef4WKmwpKVf78CDqreVD",
  "key7": "67Hi21Usq5LgJRF57Jk5QkXDcbBfyVV5W7YC57u4v8NTqnXoJ3xKR4wki73XdKw5zyWtiHVmcZDGLnCuvzDyr3k5",
  "key8": "5kMR4uRLchrv3xcQQVvcUrsL9NcNLkQSDtb6SLq7SEMjaHDbBbrnqb9kKw9QW14N5SJ8wrfMC3bKvjyDsKep55nY",
  "key9": "27JkZfp7R9qSy4APi7fW716UYjarr7TJAcV5EAFGafouruby7SnJpLvYQrECr1WdLoUfD4GUpTKrtbHzkzHrDnxk",
  "key10": "5YkqMp7XQnH62veNywb7BBG71T2tCXQ7HkH8z9Bmrexgte55hEJ4yPCnNeDniwXbec7Q5YFaMrF7VkiRDFcj8LTK",
  "key11": "2zcqshB5Ag8vNmupryQ25Z5epwRoG2jxWmp1imJnC9bySNY7JkHGybpGUekEpeA6U8fibWiGP59D2Ga2bf7uWf6e",
  "key12": "4gfadtvnzK9PWLUJRQpxqXLpPy7RLArUzA7x5MS4TonYbPyxVvDxeVeyXLMcGVc2A4Jqo3hmEjCC4Hk7enJjpXCL",
  "key13": "4EFKAuGDi27fpWrNHnWRjjjKqWHSQpyQBMedPap1xzatjTXi21PXHepXDLc1YHVFbYW54dKdzV6n2DvW4Dqtiicn",
  "key14": "3kRHZRbwz3NWmT4MoXaXXqqeP8FFxFzcGvPsuuDVqH1k5boLoSzBzx78hffLsn8J8MQVx6QdMhte5csUK4EMAHXA",
  "key15": "3i84Q6dxVFSWoDbzgh4mDmb6RP8WTyxdrYhXJtgB5FzhArrqqxDt9QJ11S8hfFbDBJk18wcguzmUuycirfb85dUE",
  "key16": "KudoisBnsuzsW3AokqLTASDmcyNHrNJXFr2UbzBnX99hRoCpjx5vRZ3J9cnu99oPZT2zenxLJrbNBGPmrxTqHGv",
  "key17": "48Ni23SYis7S8DJA2wBBoKgXJu2xRHLxcRTQU84uWzbG6XWzsbHnN4UKHXrH1e7nBq44XE6oub56a8ZScuZmM4jS",
  "key18": "2bzReUm7jgvM5jqbLCpjGSCHv1C3AUSPJTywRAjnFX9B768YsZKBFTEHCDzkcLYHvCgE8To8McN16RDuWyJe5Huj",
  "key19": "WL58Ndw4TSDadivpxEpZQmtVE1aZWnaqMSWUt4BbjWCuL7sY7U8eg5TxfDaE1Wxi4RHPEagBYLZiZyAmuG4FDDL",
  "key20": "4reKDSgpmRfShckt7iMCypH3rwQoE4uDMLWhH41FJjHo2wtTMufXQFP9qdWb2jhPRLtqkrpqXK9BjQJUvpYNmn79",
  "key21": "u8uphFcyTUnYD5ewtZAzj3bfHyQ2MtHrrEqsT9ywzDUFi1etsA1vo7vZq8ucwJjCdG7e1stU2Q2wcVMKLSHpZ3X",
  "key22": "EQheriKnXbsjuDAGp8Xaok8FbTx8GorB7dZ87A11ycTxPGVVSF93X8HzAbCN8hQoecrNDHaKDgt4mUkuMf6e6KB",
  "key23": "62Tj1kJWVu8MQmmfEUMhjQZmsXn6rE5CSQSbdJC9CKAdQw1xypmhZg99jcnzC2W6ecw6etUNPADRbRMFS6JuFC1q",
  "key24": "3QPfE7eLACvfVDFj9yFTrCSw1eXoJCj5f46YSPHq4TX6bah87ZoSCvijgxe5AethutrGPxX8PoZH3LdHTHj1oeAA",
  "key25": "3btjihuJEavU6ikoTd5Zv2ayVoSUhd7i3Ysi1WyS1NNNrxe5PwzuhfCDg7CMoAYmNEG1kcSr6CRUWxq8tHyc8QjW"
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
