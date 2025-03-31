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
    "2zKnVa3PbqVw6Z5Dfwwa8uzdkPu5ag1p9b73v5GLGrmN4bvUiEcBN3ZwoeXBBpCkv4GLnHhFcF3YeXdi9dHiiMfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDaYrthH4nRDocq7zQGqsWopHVPvBLsCizbBfkX7PaJEfhhrNpU6jUiZKP3bvdpCi7hxAccafj45YTgZfUDbB9n",
  "key1": "5Q8JPfH2r3zoSgcGzhM5EoJ5WunNRh24zjMNt8T5Njjs63uTXqL5oAApZvNz1m9R9y7ExueQhZYDx1rBsMbptymK",
  "key2": "GkMkVraPsjmGQv3czijsbmH77LwdK6SJ9PF7v8hu1zqv9mE3tzXRzjMuHrZvbFJKiPWEuGrqUZvE1oTf1NKQgmq",
  "key3": "25csGZxNCZ1Nrx7wevP5Ts2YS57vXMpwYFe6Z24iHdS9brQX8zgkhcFRVvomfjQtJY1pj9dpMhbV8pFdfiBRCdbn",
  "key4": "o778MHBXB7phTJTD117RNriXPd2zQQYCXcpDFDdV3N1drDAQSiFg8fsxcaTCXemWKQD7srbBdqFeDGCFkuGDo7M",
  "key5": "4eTgp9jcZEXETmxzbXnzGLx7CzHtuBbCTC7LpAY1aecqQSGqBWUTF5q6SdxYaQBnj7S6DYq965swi18HTDxaZfNk",
  "key6": "4qonEAKRixxENwSGz8M3dTwEJF7jHhSZPuTGXvSca2S7kfQYqLCi8pateoJVgSitbJnW7cY51fHFDtRREEuxog5G",
  "key7": "2httvcfdG79mM7ys6s2XFXQfpxxGZxCNmLAhGE1RoUvTeiB4Wi8gVJjYWJ8e453PEiNCDe9uk91hCXTy8fHD5jPN",
  "key8": "3zY2Kf9zbD5qFKcaDjdXbjiavAL6cUNifdu8jEzqGSqNdYLwCqnTx9xxHJ7pbrW9GsSH8hGvdv98bZ8pDT1greTr",
  "key9": "4PYTuY9LiSWzWgLACb1FeNVYNYkrUJset2AkLG4pFDR61XHH5TATJp1pyEEv528jkzxpLKbViwA2mgVqMiGWT8q3",
  "key10": "KovcQRuk5FW4AFQCA196ZUGahRYdMbC76mAteiSdZ1YPi7cajiz3SPT9LZ2t4jm8DUzjMtBARunxYhXtjoYihb9",
  "key11": "67MPLA5jztVVHsUfPTQduV3kGjQkbSS9gbofSuc8iDY9HXfrUAwCcoAXqxSLUXzNJgoJo583JYXfaVFineM5ro4q",
  "key12": "3BGivBUYgU7RBmbP34R17sKcVpmU1L4pjx62LrpsfWabYyhS8tS6ie9qaZez4xa1XHA1eG5DpabTosFxEH57FdmU",
  "key13": "35mp1WHhX9Psde9RRcVQFFs2hasVYgeLU7X1u4TsYaCK8fr17mSGrJgZUT8RfvyVdFNdAq7zPtrMok9oeFaX1yH5",
  "key14": "3AvbbJno3QoG4jvBsx32qo6LCtSXjpDLmjLM2fXVngZB8deMPM7K3Eco9amabX8CLhY9tHV95ccFsoDvqdCRbdCY",
  "key15": "2GcYPSzLCDUR1Kby12Qh1oDmHPMzKMH3BKCAGLhw5fVyG2n6hUoo5VMf3kzV2q6aSXcbn1QSsbzvxjo9jjjYCk1E",
  "key16": "4HnfGVp482kyMK1ByY79tum7cAxhTgAwSb1Ns5AzwFgzGatgBASVyCbrvxUqV3PeyLf7ShdgU5mHfnFQ8DRcxWcQ",
  "key17": "g996B5TygJKkCbtLF3UmX3oCJFuvJaFAMfZagTxVwX7XZfHV6VdqbaNG2MhFkCB3Py8r4SMmW2HqSHpssPhSZ9i",
  "key18": "44M2RX4DG2LakQs2kwzu6UGeBBd9nDA6EfuTYuqnCnna5mVptMEo4hyPYtyRyjc7Vr9zayYXwza6FCghn2BAAN7r",
  "key19": "vU2J1cvv8f5iQt92AFH85mwAJ4tyn9Yx4HgBtZ7Pop5j7bAcYky65kprJUsHwQwEmrQmeAMzzzeF9XMmiMsi8fL",
  "key20": "5tLw17Cb9nQW9XQzb81YhApcaaMVZA4wXaYeDRPttxvGRBWUvBEqyez3Hvk8CC3sMBKqRyAKVYjsde13WukAXHvV",
  "key21": "25XfEc68UctadCvHaUfn616gGdHJ9QMfsYtFHNT7eaNiHXcxyEEf2czbR4uDgBG6QVMwhB68BKpLYCu1ifF9vYxg",
  "key22": "2MuhieaydT91jXcsv4hw9reE3ztENqZUwQmssqRWiPC44uBsewVTEuVgpSdfTad1VvRqgeHWF1eVDWtuGEfwsth8",
  "key23": "2ksNKBU443KmXNxcgwnTrvNvwpaqyFEAGWobdTHhcDjrMEp19QpqjStrsLkggPLhRRBbLdMTFXUsGBob2qEswzwh",
  "key24": "4sKTD6ifeYpNE3tiDLgES58pmY6rcVVHbH8en6qHJi3QGFutTTUprh9wKDasujtFtv6MrDFeD6UAMkXHpjzDCmdJ",
  "key25": "NunsRUEuU2rUtEpB82c7ViYGbEdL7u2DBLgu7bVih5unFt3doAYARGardCHGW9ry8sxuGTRC2Hjsh5ckVYBWowu",
  "key26": "DDvxU6HaicCayJN6qYUtCrYbiGbQ8Yx6m1A2kxxjFmuhSrrgpFnebFfD63FMwCwkt2uxWdiuKxmcLX6RR7eQJ1T",
  "key27": "5xR9AsuEZHafT2gBFqpp8LpW6oBH56PSRDJaRx6kYN9vj7vAUcJ5azX7twPN2syAL6UweWWBmMzRANFrqpTPM6ZH",
  "key28": "4fBygpnigdiddXEAZjS4rF3bZaxEaoSRmen87StGSe6eFvv31uqu9eCnxyJuFi9Cqomt8BdwHCaiRg8Q5Lm5STQ",
  "key29": "2BT6F4cKwcZWfYzA3dfZAxtj6G9Es64GFczCocqeD2a8bb33idUVHP4nkGPrjSstp6dYLFecziiG1eC6wDBf5Mqq"
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
