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
    "3ZefxNujvDeLFzaprwCP1dqGsndVA6zbefddKAB5zgwwfEirBJBWBYvgK9ZivezVTZBQtpGqpoZfjs7KpV64unA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EoUPRN1XBJvSpYbqztgRBsaoU6eoRD3JN1E3d7PPhVxKppJMXABJgwHpwWdCyKDjf4R5s1qWbYhifavcXxMCP76",
  "key1": "2Uw8WdeZrrAR9LxoWPNR5WhQDcU4xVcBgYdoLApF8yZxA8Anty3tKYTR4rpVoYfTRv3LsWEDXa5w4v8GGugnNv2h",
  "key2": "374kMLFyyNnsaiRuYooA674fcEwyai4QdmfTAkwaaYnrbmKXKxKqshwTYLUMwPa6J9WpCR3xHyuPoyuv1EiG9jVH",
  "key3": "2Mv2qtWfmN5mg64kQzBCLhyripgFmwADBbK188VTR1fcbxSJRAPLb43CKPucEgja453riZmFtB8hNcu8yjhbN6dY",
  "key4": "4edDYDAmnjQvUKbCRX3Y98uy7Qje5vgRirms95DF8iXLELqdg2meokaYyzp9p9nWWFoN7NqnLGxVswHBQ4UpQi8f",
  "key5": "2Kybug4ThzxvuvcJpXkkmPHcHhAWrBgi2pWgEuFtb2S3WuWQZ99TERazANerYS7jfMKSYdCJDyA9vv7LqQAi9Y59",
  "key6": "2wGNjJ8qSrqXuxQbtpFLpMtY24Ui42S4gmwcfzzJq2Lbd2CYAwqtSgUrq2ZCe3jSvY3TWYf1uqF12kuucKNjBxWv",
  "key7": "4hLu82UEdxPw5B5Hf78ATyhZuUsUuAtYPKxyoK8rAeewY1Nn1mNhvJxDaBqXfdmHoJtMxKK29yNq4GFnKrJVxcLx",
  "key8": "3tYc6VwV6jq4LL3Paa7ZTfzR8MdgRWqFx98u6UM8jTugGQbgVYYmUZjpvnQzhFQaLMLhNrYVkteeGYTANPZa6QZx",
  "key9": "3ekZrFnWfx6PmB2MWw2qL7cPRoKmj9jkqiKR3T85FCSUsGvPRKK8eg96LiMygxXRid3PowCAYAwo5aoKbrC5VEXe",
  "key10": "4ZGw6xiiU1Rdc9GJgieJX2L8iXc9xjwgXKDoANDTXHAMQ6Ds1fX6c3JFoXySjx2YP7oXeUPXpFCLYnEszT3ci2CE",
  "key11": "XEznorcCi3mzh7gUr5XQenP5TDYCzMeziNgpGRNo6PWa138LqByu4MKE7nZPtpkCzaQBX7ukDkGMpYu9q6qxDGU",
  "key12": "2FB1PhYYWQqm3mD66vteGvT5CccZaQmmUgHkDUZMCjiF2GmZiNoUATD7vCkh5LS9BBXCE55F9YzYsTsezU1kVFR2",
  "key13": "CSdMea8KooDpw4FwRNLSUqirjEKCRLCQ1yhJQxyu6XrAV5p92phrzYzqX8WeXZK3qYTSHgBXVawYq837gqubqHc",
  "key14": "XEzTzNWuiPnyF4XFHNksjL1XXn8upCN5E7ARJQtGxJ36D22KmyrmCMG3pJGXSCbVrRce2Sm2eboBH671Rpy2b4h",
  "key15": "5dELaTFJmthsP3fQDGT9kTqCprgrKKqZF3mhY7xrdmRux6AU5W5fJY5TQ9JyBMXHjkNCVrVXVzf1iDQibRkepA1M",
  "key16": "3jPAnp48dmx4DzoFwanmfWQSkWHumVeGzW8gg6Cy7d7K6K3w1L5CqWKGrUmVVozTEm62YtbbbVZwq8y3N9rC6zxf",
  "key17": "MwVMG5kv37yeVJCh2Sxoee3iu9qjGfqBdCxMjatnaxAYTf6ihRraR9nZWW7kZDCfJF5abGtd46NtLZA7caBM42i",
  "key18": "4rALe6EmXu6BRDAXy5Q9utSM55WbDHpS2PJBvWGvnUsVWdnJrNgmnMChx2ajbCYNfrXFsTSXA3DVqV8oh4dqnR1d",
  "key19": "Nbzf9i4Db1JFRSXwYYXsYKNkf52PYsGddGuuZrntYVxR8H927iJW64w3Xcx9Qpn7QpuDNtaBbDbWP6f8nvDzKRt",
  "key20": "DnNJq7HXTHMaAt1ku5Y7iL3w9Tgzqtx44HEDuVWAqg2jLksfxdhYGSyowAdTbvn6cRx58k3sQjALfdrufyA1hEz",
  "key21": "2CbH1YHuUREP729NZ1Qd84NXr4RZLUKMoifY2tCxmQMynsG95NApxSognuBWXEZ44hbPExwLnW9KqCU5XpZSsyrR",
  "key22": "761qSSqMRzV4mksBFvpxnm4ZmUdWEXcZbQc8XzpGVzCdU1d1cZQwSctgTnNzsZEswx2tCaPBzWSPrKDG85KpKEb",
  "key23": "4nQ1ZpdfDNa2ARHnLsCzJdJXcHruA13Da8N63Zm6pfFLrgipvRBNKfAdeCmnJ3ThsMcxMiFk8JGaHfBDH6WhvbBr",
  "key24": "2KqnuwXopvTyCeG6cjsmVz9eKwoJXdxSTsakLEyvxiNRZWqE4DBYPq4Y2JBUhbFdch3ksr6forLBsaGZufBaXA53",
  "key25": "3jBzdnHwWSW7rbSAxoKxUsuuQaRrNNqSMUr9Bye1nuPc2zmR8GZTFm8rAjv7DjpYWM9asDYbjTzcpaDRH4xsavLy",
  "key26": "4n9c9rtfrJ7uANwc9fo5zZ1F6oqHyhhPcaAYHcbEHha25TDYX4dpPopcQxtyo1WdtDqsCjuWD4vzoectGVciDXPh",
  "key27": "292AMnGpcxsGY5eR9GuYVaf818MrZyiRiBzZyizFFyf8KhsBo65pKLQqCH8HRSoEq1ei969wKgfZAH5PjNPrqQmg",
  "key28": "3YNpS4WAj7okRcwB4naqXdtb3ETTissAj1mr8L7eSF7X7NKKt7smuq45fVKcksoCRni95gvqrcEtbtURQhiQPTJa"
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
