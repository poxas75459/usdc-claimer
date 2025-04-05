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
    "4ZEuZDq7WuGQgGcUmH2MKDXmmi65PjitqLJFEWLBtzdFYgmtcUseR32WJF4T8eLxQf2aLihGvfVPtBSKqNdRdahC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8DWPTDSkKVU6QrBBtZCotqkgmkDpdp2a7yD2ugPi7ruiC8QP9AoSYR27gysjXrtMPUZcf8tc9PN7HL3tVtMWkG",
  "key1": "2YTrjM7ThQmEfZqbybfWFFbGx1HKuntWW4R4VdxSZJ1PLTBBVkuaYqvFkmWhNEX9KV66LLMzbRLu8rw4fs65eC42",
  "key2": "3qtePFUpuMdU9WxBmADDmc5SNJNUFCuBaK9FtYa9WTmWLbDxgC5AmaS5nYYw5nCE2iDDFGaxSNeBBAt5Sjt8X95o",
  "key3": "44Q2Ak84j89J8qc6wiYiMbbshPDiTKAF98g9GLqenM9PKVGy5r8LDxw7PqZez4PKncgVe8vvmsiRT2yTGmqwWVnT",
  "key4": "cLPtypycyYMq8281gNhLiBK84DTSSnrooJNebpyd4YUfLXT7KsW338aQ7XmwjDsiwngyzQdpDKXuSWRLMbgR6yu",
  "key5": "bV9FD2BaCe6pXBn31qTTWj38uHVjtTB59WyKd9n632oMjDWAiSYprkt6wfCUimSENrS5t3cmTe9iZndqHxqnnem",
  "key6": "52vfp2gtTMFzEoU2fFcPgqfVCGfa7apxCz9wSp1sj2PfUKzwzo2KA9aRQrs4ZuUNUUAW87EPQ9AFG1XBVmMLWCXZ",
  "key7": "QYAzR1A5rPtjrTnf2zu1V2HojDdSL7EAcDCZXxtsempScEiEt7apQHFrPtxoVthdrxGAPiAUoRSqYeexcpTVcqa",
  "key8": "3mWyMtBWMcMY6chX6nrREJscAE12i89NbywWzXiq6TiwQZLThAJuqBqCR5yn5KLxAjdUqq7wH3GWw5m1Dhu6EQ7W",
  "key9": "34xnKAHGLpk3yJMxgHiQcXGSNhkExgLnRDsbfRyBMiqzM84FSjEDL4p2Es86osGR2FQs3KDQkQHQfddDXsGGyUmQ",
  "key10": "3tPoQs3sQMpnQ7M4nrWfQ63ANAXvfuYR2betQgA9yqr4xFGiCqG8JxsdNMBfgPqjS9jiHEHVg1pEnFXL2PidDGau",
  "key11": "4uKEHHiVi4emB8d7WqBi9qu55R4JBeGvS1e5heWybPb4C7qNA4e2Bot58wKtQvjgWzHpxMeDPV7gyLh8tk8oekWz",
  "key12": "2yuJYS3PHiqjR38tm7okU6bC7spC6J48Kzqq2oqJeibkfXPNmeH9fuAnKftN3YGDMQGdYpquaoo5cxLkNBwga5kx",
  "key13": "4STxAdEHUg2DQw9zcRz5TVL2jy6MzDZQRqm4quQYPHpzWbCqLX52pRot4vFvpKfdG7Jsak4E6EU5eoT29GnHCCSv",
  "key14": "2Vx8BWa3jRZo9DzMN3Eit8HjfWjbuzRx2ret2GCsstwYc691u7VWDA9LRQBWLGSDys3NDZ7kNdBZRwqs8JVuNe4Y",
  "key15": "4XH1GryS8DHfw3vHmSrQswPRzjgpyzWvfrKqGiP6mU3HaDj2JoRe5bpi6ShfF92cZnQdnPQzfFTN9mTTF369zRxm",
  "key16": "3tUMPnHVyWbe5GjCB2D8k5SDHbTFDBuyUfFBAU38J8UGjyWiVHufh2JeSUC8eBSpQwMD3uqytFQqwJmt52ycoR7A",
  "key17": "ZYosrd1D4oC5VH9hs1n8LqRaCwDSXWyvmjnfuKH9AMmFNAtYvamu1rswuGc3V3sv7aS19E5tNi2bP543aDxtc6n",
  "key18": "2Z6VDdXxFJAu643QNQSsiot7xkxgK9BvHpARWAPkN5ckrZoRPHJspef5z98aba4QCxSbHTpkay9H4WmiuGprNS7M",
  "key19": "5EGd6r8hRJuC6WX5v5XmdGygbw2fPDjSSSszuzR5uwoPQvwDDv2yV4dYn7RzS5fe9xFJSLWCV2pav5Q2d4E2CsK5",
  "key20": "5qP1N3KTNcFvEoPYiW42iXanscqxzvtR1YUpNBFys8wXQNrDoTfMgEoPLkPtZWPWwVGeBt9CjDnksBJ453QSJrU1",
  "key21": "ng1p72BSKzY7LzM5WLzBi5ec6Q21xhgZjghAqSY45CALCRsmc4YdFhMq4fcCDba8XawSSSeahBMZwRsB3LS64hN",
  "key22": "5nGc8VvYBwvkepdJFvJjZtym3FmcvbcNkYVMNBq5E9QoqHW4USYz6xGgEDHfcystfbvkW6FGrxD3GRyPF5U8AMJq",
  "key23": "3LdaYjW4rmWa235ka2GGQc9gR2o9GqTCrFWzhkJ67YLKwM2VSDqxNwruHMm5yAH1UFBqVFYGYs6R6DmFSVyqyGs5",
  "key24": "4TXBvYV5n5r4WRN36S5mYg28UE1wN6DDDRMcQAaPDvb3A6HjoWD1iK1GbnEd6oxeFzMesrZzf187Eyseb79UuaKy",
  "key25": "hMd2pxztoHNiAy6sVTYWP95n9e4rEA7Us8XbrhjB4DPrZc1FPVdFH1E2nA3higyEUtXT1pN5f9ZRcxW55hA85dD",
  "key26": "3Pd8Qy63DsLd7gJuzwaeTv4671bD82hzmDtRoxgzxZ1g8damUuVsvs4hSb916Lc6FEA8H82aRsCkF8dZvqCwiWBn"
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
