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
    "4JWSCNGxcSCghBiS2UoMbfcqMrQm24WoLL1wKQY911tPmUZYx6DPYdLUyMG8At3eew961Tg1KobWqbdTkBgnrzfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRqhPWECHd4togzni61Xukn3eBw1uRr8WQgAsxH6pAQFFX8AY2LGzXXcYJcoLSmgvXD2Cb9fmDbyqzw5fdSdEmm",
  "key1": "5CudveQPfSGJCXWYha4P3VXYTNcv3getc7xvkHoKRXwdNrPTWspNtPakddHx4YkZ1eVGjNfYpodtpFyKB3eTHKh2",
  "key2": "2rX8XdqDJzvRgQ71JBjodGPgcncZ33jkwANin1qSMJ1YtW193E2n5zdMSwrAxhcyB42GmANuzECzmhutWLnGszVL",
  "key3": "2oG1yXKDRX9S2p2QWuN5aNjZU9ADRGUqp3CqRKFQ6w5g9xrFFxqrgrF29ftBFMLEkyQvie4eGTBpZP8WvVcGZsuT",
  "key4": "LVrg3SPDgJv5AvS1UqKFHrCvYtZ7fsDwtrgqG9puk8u2RZrvxpLTcfeVgUjChte6bzpxPeiGfNS9W7cbSu1QDha",
  "key5": "HGxPo2MNX1J6VanFxTnUAfy6dDrgzwcVJ7TKtQCv1rVgSc4zmaq2b4svSS6jz8fwQtR5zESi9np6oomE5vmVUMY",
  "key6": "6FgKmruSmao6ZBDPMGc8k6v7B226dXY3Ly8r2yyHRf58UD1j43iA8BpVZ8WbN1TnKh9Cv7W7SM94acyvDrXNSdu",
  "key7": "55HyMR67syGNfL5HydqPi2ViWA2X2hapEn4xwmMauPZTjSTfBf5JhJc62vPhU3YmuDZFB1yY21Cbq5F7zk9nRNGs",
  "key8": "5NwZcnTc5D5vDxkJ3LKgRndYRxToWR2qe2oR6657d7gHoSSFYGchwjG8wnzpJmEKKM2WdiWqyUj63o3kJCRSXQZy",
  "key9": "4tytLNt63uLJoAMJdhSf582YFzHh7169EAkpxom1BM4GB4A3k1nvyd6aU9wkucB9U2uZxiiNdLpkKkRu7HcNQKnm",
  "key10": "3fcHhZxvn6cX4MHfQ7ykwHPVZPsiGUDBpFi4W3xE5EBhD3gKvNJnm28jkL9NzXQ2ZALe9YTtEBR1pheFLJpsB6QK",
  "key11": "2tVDY5GANDnvfjkbcNRD46ucMCCEgUXo6DNgjQ1PwHLbKWh9PXo5gwP6GwY2osHQ1rAM3HTxEtQxE42ye7iSBsNT",
  "key12": "4dprDCSmVKmWSvH72VHS6muTRyHXx6M6DXgRoyAXqzguGwHpexJyZzJR9tMk7bdWHCpzwCtp1vY1vJcMQyAd9AiM",
  "key13": "YsC2SocaFKEghTADL7PmKQ71c12TS2kGkxrTpEF159stcG2kifUCFpi5KDfRWZRAChSj9YFMXRvGDw2mVG9i5Lr",
  "key14": "3Jn1Zwkwzd2R5ctSc93kXXJ5oAokAAHrce4HxnqJW6RtjKJDVjKCudaCXsqdSuoGMvwSusGE1JcWoDqXGemhgTMG",
  "key15": "eDm6VdFXjsED53Eh1vdZdcGtD28ypWsjh4u2mmahxzpN1z4VSvLRfuzQ95EdAS5FcJtCRTWYhibMjXWtryFw3i7",
  "key16": "Y8eFqF2MoEWnXYtpcGx7yd2XC3u3y9Z4ipHaRAmxTn2qrCsmYAFC1XqXFt4U8DPHGbyYGw7x3M1ALxZeoUaMw4e",
  "key17": "HuK1RrqcLw1YrNrBUZScxAqbnKWAxRTPbWw7kjmorCJwacKzbmEbGaa4ZgmooKFVwwcxVhnmfw7SzxFqqQUWkZR",
  "key18": "3gE1oFCsoN8WpRi1T1KLuXUwTVQHSB5xSAHTHEPcsA9nhevvYr9b8Yzp6e5vHm9K8d4Qjn5cam3Q4KvtaT2oM8xM",
  "key19": "SSUPnvmWbpRSozcWC9fq3QiSAkKRHtbYqTLwTyumQjGCmG8ndHYborcgmnhmqJYjbgviSRibXfG6K1PTjtAVnu8",
  "key20": "4M9WLsTARqjt2Sskvb2AC2eMiQgK56YqtktcSkX5M4bkC8a8WyzkqnRneu8zPG62ToKKJrGrGeouBSjDggxu2VCH",
  "key21": "KrMPW7QoEBpAvaCfmUhsjRcpxvgW6N3qxtfMt6MwAJn3urUM9yofGvf4cariEqbrhFd1TF4WTbp4Y1gkJRWFMEG",
  "key22": "3nG9u1VDJMPeZ5KcK8rVLEHC5fkNR835YgTjV8fP63aHWNx9wRaa8xE175rNUAhUxohrzDXm78cHdcwaXuoLRBBS",
  "key23": "5QU9H446cShdm9AQzDxwqzA6cZteHwRkrk9Er2gs48rYZNkXA9uHgteV1dLpcyixRUNpGwDa3k4ViwB17k8MuMRf",
  "key24": "4CcZkaDBYfCWZiYkV6YpYt6vLPTLjRD4ihEY83FTn42NKxMr1sEC3xKCRH9z1fQo8w1kDa6EoZ241oweEUDjPgKj",
  "key25": "3VReYuVE6g1ijXiegHPcZJqs34gpigWuERsHZ8aDjwzyQFVnVcU9vqrkDapDrQKZx51KFzXgChKnysvjS65HzBLD",
  "key26": "57WsFEL6iG9mANYUDpv63YKaHgd8afK1DYKy6pfbjogDDR7sQ41mhyTERGULFdZbHdbeDpRss3XNFYij8fUf4moP",
  "key27": "4JqWyN1kyqNYqz7UoP24EAAgKkLcmR9njnr4ME5Vy9CKpUTNCovZZWdjwWuGffbPpVJEZdHFdQurozLH94DSPNkp",
  "key28": "EmD6cwg1ik3pNaScEE2ZkeVs1vcoojKjVNU4U4J86ux7KgjgEEcaoAKTXFDjU1zwabo9dye2PjnkNm3BEmgfBLN",
  "key29": "4LzdTtqnopBtsJ1MHuKXFo4a5QXps8rVLQyRJR6P7WSMM8ureAe9RfnvrQcjwtQsoo9oZBnQNBXLsFKc6WUBcTAP",
  "key30": "4GXEq2nM79FrZb9sPiAbSb4uCLbhz7oYk1MsPXqgQAKgUj5smWAapii6vbnXN6YVVrxpkSpFRjDxAzKykP6LkADt",
  "key31": "5LYgQ3Riim5LZphqAZd9rjhDwxqoGKPoRa7dFjGY1Ajupvo4wnE6WJ9cYvXCCoQnG1XZmFTWYKTx6cAn4uqcJLdo",
  "key32": "5quCNxa5JsGrsgzfvK6VMbSk2rJEGambqXCCZ7uGq4XtQt6yw2WLtxjSHmkHHYMXtDMHtA3Zu95U17LgKZeSkHfN",
  "key33": "5PEPMx242zaZG5cjAQwtfXThs8VnazNHX2Qr3NQwprHxLRmLTG47UBrt3kDL82ZYkjEBLKn5NHtPSRzncGK1K9rN",
  "key34": "39LHivnnKJ15WjvvScuD7mNPX7KsSqmdPC5G2i8baqp2KSvju7zUk2QSrTaJsPwRv7SEm9twHWuytpYpH14dWN7B",
  "key35": "4QWVosWNsCQA5r6MRwVzEGqt5bTNNHdjyEKuK62fsBND7MRtXbnst9J8iyxXHYnNfoW8EwxNtuHVjBgvjoF3yTDe",
  "key36": "2aNapjygBocXWV2FdHZyeATaTPNKkJ88ZJXXZWAKeUXwCfVWK6YtubvHRk2JMHPAnf84KkkdmAv1rRpm7U9uxcKW",
  "key37": "5MNen4Jgjo61ryGJBPhHGE557HJPTmrxpSKPtPCaWFSmhkFUayqLSWqwT3uKLYr1aJ3pMhhRVESbtH2wApTZ9Nv3",
  "key38": "55eYm1ofCpybx3jLkn7F7xZHBKyHKANtoFzi7aRHVyJSDMjh4t9pHHLb9128tZC1yCLASZWRD5K57zJRkz6E5ieN",
  "key39": "65fBrGW4dykoDZhgYcEDxJQc6rS1kRWZmxUEXYSvHRuKtUPUjTST3dVtuje6NGo7WDEZDr7atFEnykfmGSCsujcr",
  "key40": "5jXKwdqdXkzAc1AofHkjMYutbqY8Afgg2z4TJigk58iZS8MRaA7FecvXhDG9fRWhDQoMWqWMKWFWC2oHx1dcU5ef",
  "key41": "Y2GtAFM94Z6DFz9RDgrgR6pgbojPVPzDRUZiEgMVSKPKJK1mMiLhm5zeNrg1rSuzkCSnwhjJABWs68kgQLpAZRV",
  "key42": "4t5T9afiDXnQjH7ZFcejsxEoywQvYjc2kWBK2R9WjoJwzcgYPg2HnYi2vt7y7zqaMviWirNqypVEmr1dRXmNjoXJ",
  "key43": "5NBpHi2V2DnfMb3ecGLMBf2Zu1oHsBb4Xowid7HgncfV2cV7pdS5KKN6LgJb2azBEfBdPpsZzLLSMTSmMb4ojyNF",
  "key44": "4xs7C3jw1wj22kL52muixSCBVs4NoJNL2wywgeQAUZYgYczwFtkbQm7iuQ7DVwXL9ZcmzVG5M5f2mCMwKAqdNSwL",
  "key45": "3jB4fhGL1WXWzPeSDdKT1JsGSesFUS19mgFZnmJzg8t4Ke6gRKYbLcyWnmN6p9xt7B5jBR2rJN8nhZSYdRA92wUn",
  "key46": "5dqt1nmndfwgL6uKk2ozrLu85qRYgM6JoTaASw1TesnFRcNdNnC8kZWVAy1EFyeZDa8ZWECTmXw9VFfku4WKEZqa",
  "key47": "4hR2Qzgebc9G69xLfjqCCxvGRfgawyMhWQgr7oSDiLuA5ubTBdYApiWZMzLrFSJ9Q8rnN4dChZFfhurrJqJD1Bmi",
  "key48": "4VHMP5o1cpLJQwMc7GuSCPP8MZjU7tLdC9oT8HAf275p9V2mgh7aBtdCKoirPQnatkxaTR8dZT9yZj7G6pqHGPzB"
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
