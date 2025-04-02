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
    "3YVTUuFrU4Ev4MQTB1QTq6X1vucjHygDETi5sqBDkDZfMcVyaWcXRbFHmPBuQEezmxpY8wqtdGYeSLMW7yG51z4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m8mqg55A1znCd56kudrwQpFYDJ2dykFwRb5osDmhXtoz2abgKKe1ejgGtSNyHgRL5iQx45dRmJmFBYB2jfpZV3g",
  "key1": "2kf55zeY8t3gu2833ZqrhgbpRcrySgcwE1mA2cNAXyC3AcTsQSzjWd2heufno8ST5QovqBazYZzFeBSeTLXKSkPB",
  "key2": "3w7z2ZG1YJVYajrtcx3ipaq3FL5b9VHdkeRqWiPnae8QpKWDECPkaNs6dDjKF7ry5FksXDxLKFV9R4t9gymnAAEB",
  "key3": "39bJ8f5zEyoBMv2e6UNMkdxxatGZBT1ZN133C2vMRtH8YMhnroo6Bt9TK2eZf4Td6n88AigzC5pFC8Nj2F9jPFso",
  "key4": "4oqAUke5Fyk2JJ5Z96zuAkkaBzGGDprAaygnEPPLnZt5HfA2BbFPuVvfTTfD1QPQk5XZ76nDPrYGPDHiqWay4eDt",
  "key5": "2EE3Lcr68iTAqqfDDnNKPpSj2c2YoLE2ivEW7tmcf7FZXsQgq4BMCwcAu7FfV5zi8HX7ZWr6v6L42Ht1Dnb8G9D8",
  "key6": "wrPsDDTjSXVWd3cb5KSKhpgxsBYSUL8KiVfcuDySUSkzbGterTtK2RauD4NsfL86tWRrMj4zPL4cdWtwwVQND7A",
  "key7": "gZ4UoHwnE8JVsnfJjaZNU1ZDnsJzyMbtSipnsArGH7yqWyrD6TAr6hYPRXQrdKViKi2zUxAwLEFqWo7DSVnRbFy",
  "key8": "5SKmLqBsurU2RjwJcB5gVFr3fdZm3JKGzpXz2LsJuby8i8iyEmwddDaMSXgeLmQsBrucxfsWVB7b3AmHrjCR9bUf",
  "key9": "5isYjf51JHXAUFC4ps4VStcvQWm9P1gdJ43LBLzfMQGNeXuXg69kXKFjQ8LHVmdabBv91hg6TNmz2q4bNpNkprXr",
  "key10": "5jc3UD6UbodVTSdbxaWjWM7j42bmFbHxgR17t4KwVjDB2XeYq4mSMaDrwhuBzuuYaEcpXZCsz8NYGcutXgH8HL2i",
  "key11": "4FTR7qW6Loo4UFAQd13XNya6UpQmhufdEAum8nyBM8X5W39jmsyAe4HNiHbPTPiEs9UiPJecDeJmnVbTykT2caou",
  "key12": "4TSYLNd8xncnx8xNwRfHydfqoQKoBDLarURqkn8xuXpZ7HSRcnsQA8MGo4FP61z9PFsB5N7MkPzADNSUznSuWi69",
  "key13": "5XkcHRfoGxZGiC2FzgLkKc7VKeP5hCKSgF2WQteHpU6qhLW7PAFFbXFV6WXce2k5RRsDDe3yQb8MMEmGq6616JXn",
  "key14": "523Kz1cuXyTRhMsgAn6iuhvh1PAZRdoGGNumEJEA848EsR1STaNJYtSdb4wPZhH2yX95hv1S8WsScpSvXd1fSP8Y",
  "key15": "5iEfGYyFRufw9SNpBKpKSpJL7o8YvWKcogUQzDKivvTHsKQ35G927fjLy86GDsZxcSDHeeo4Z3yfvxKWV7Z59oha",
  "key16": "4CWV2kCp3Umj6Sqy7DxHX72VVNrTnv226o3WKpGEKGMx2ENbcV74sMPyKGR5DKdzgtJRHoGcwfwqBubUGGJmewsp",
  "key17": "8vxvyyhdE4s8hpanZa864ZVJi36Lnfj3stdQYsfGYtEQ5wV4xmTviVjWwbGQGtcpMiR6YrvwRfBEhYs8GR7SHVq",
  "key18": "4qE493HRXxLvpPERu5CLVbfztpXzXBCGaUcY3FjH5PWyy4JJWKkpP7LGBtmNBgf5k8T4G7tyrs5YFNeekjpUPRc2",
  "key19": "3us4qgmiXqK2KqGAEcVvhZcxeteY8aSK3WVUJjDHrfjCSjvgEyN5UEWR9g2HMak9TXkyf4LQWCqcD8AcEx7HzB2b",
  "key20": "2gPE5fHvN9qeyPYT1zjEExuAnWNXFjgoUmLPqbsCqaRou9uYTwjPkzL9a46PxYzXjWK6LawatW6YDvsH3dVhkQLa",
  "key21": "gVKB9N5LDoeEZK5WPH8UMd4CyEG3D5MLzaRAbnKVdNM1phwgFR6qYtrzYBjZ3S87EY8tdtSHYsTy6Qgzj4AmoFN",
  "key22": "5ZnypJ72tG9gkw24vMbEW9wzJjGdco8dNQgXKbSSt6C14uXTLy98ESxVuHjDAvC2aQoRt4BbfSuCYyDu62XYiiqn",
  "key23": "4dfH5tHb1M7ymGGyvJuTdCPDq1TjG5sStfoVYSUsMq8wiste8w5JjU5PxEygHLmEAnB4qNCshzBRXhWiQeRxfAB",
  "key24": "4zsHekxNWmdAcRNP59NRLMF6KkiqYc1To7YMkQv7Fm164ehaZPgWD1gRMPhtbEzN1eX9rE4tZ4AyxjW5krs9KnTP",
  "key25": "5h9joJY3SPKAVtSnoVPGgoPwP1AExxUaK3VyZuc6Y9mZ9Rz3PtVPvCmHxtZK4SGVdw6KR7CkadRbkhRps3VsxXz1",
  "key26": "5nwNsL6wVudGRYDWi4C3hQ99dByxFHR5amZL66CND4hKx8gvhNRwgkNk5PMcaawJ44pKVEcfFCzvgMEPErBR17td",
  "key27": "ud5WCGpSxq2V1X3fkRdhuLgd1iGSULeHjnLsv5LJtQKfZQFZ9jxuDgLuwGyRH3hsF41q6b4P27F7nVNuFexAiTc",
  "key28": "dJtes94HcisxYSc2vsB1p4KPzPtmBiyEZDGeZX9vN2BYWQn43noMjkAut6yaXbBNnNh33w8GzHprQe2QkRxEEHZ",
  "key29": "5C6nDtS4JRCCp2CNfSdHvxJ7NJGPnoBRK64rbKuPh7Bvf4UMrDtSebr9639PMRyH5TW8pTkaAyi3G1MqSKYmN7td",
  "key30": "3TMZ4tEnLq5zfxf49S12RVB32J4MJTgDeShsR5hPo1WCR5YHvzxFD3vrgsY9hg9SBNi3LEw4vSCQX5gzMnZA4NM5",
  "key31": "5QykmccAj2Pycn1fJ4K8AoAnnABZ7hf9unkrsbsjfmATBUEZZcT8eskHpPk7uxMcAG33q23phR6CvZj95QDso23w",
  "key32": "33bspyfCvUe1razaPgnPTG3VeYG9eNAsmfdP3SUuXUMktks8HSd5WNSqBjiGXQVPXVMhDM2TCkf93K2LygGhpnhV",
  "key33": "3DCowxDdYeaJwbsDxWUhwBhL2RjeCLmJM2TruzaYL6i65a6yDVdpLQENrjLc7LZh9MXxyJ5rZFjGvRmKcnADnbHj",
  "key34": "59q66mRwBA9mmUwfLpSv5sZqEXwzGyQn6ca9DGNWmuxPwZAYD8U6iNj7LJ1zqwWqXpoNiV96wkcHbgqqsuYyWB2S",
  "key35": "4dnYCk6BCtmVxbN3o7a3Zz9xawdxE6PFVHFUG8JMzCyDrhR4Vksk21CF28mdCMReRWGSWHNRX9XAjcJahennyHks",
  "key36": "3pD3webWU2rHDiXHiRr9eBKNRTMer7dPQseF5gWzJqo5kgSU29Hd2L4adgXK68bPwfx8xFr6cBJwhGyx2eLg9Kzu",
  "key37": "2ap3hdwAu9oR8QqEsJRZwGvwZqjfn8VqNA1Qb9xQkZqSNSBstwnKGWzAuJJNpuuqFLxgesx1vq8Pg6LY3mkZQfn8"
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
