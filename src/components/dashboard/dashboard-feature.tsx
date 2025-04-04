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
    "4WN2bgTRYb6WVn64ZywPtjYW8Psvy7TVLusaDXXpXSoFVD1nkBEUgA3gdnC2V3BzLCCPRa1FfN6vpMqHe9Lki6zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKnudSZnxHZHZea6Adog9XNeoaXTmpXGJRXaXtu3W7tLDYAHwnavfB6bV8HWa4Kchciy84a9enyfF6gSbRTeeRa",
  "key1": "3mP7c8gnAbCbr3ah3kVYi1qMUZEXdH9ovQaRnjKZW15PAdSYBreYXpMTGNsJVrTg7KEnW5j6PSCrqWry8e9fQ8eW",
  "key2": "5sx4RaH8SfZU8PhVLocmtcGg3nvH4HvCAksrNpU2MqZwZdjSp4eDSwCT4c7XSoP1F3qp6tT7w5WfTvy8vBnRq9HL",
  "key3": "4mcDtwnV1ZCnqDVEXzuz1nAJmWRwghPvzE7HrVkjt6N8ARrpkrmwovhX8dfNfDbo7Qquub5SgqqoPWFrS5Zac1kG",
  "key4": "VDmxZdnma7E7G35koE8hhodRgMZBXVfBiACnXiKQuTZuFx63D8n3zhLVkNcu4bbTZCcdar1GkfmDhus7EjaRJgH",
  "key5": "2Puj1YiEubd41xuNkSjqffRPmT9qkxkd5PZLTiiScwatkeHwGEVVdKDtZ127kZNiTybvuGgad9ZHaVWEhVzfir9k",
  "key6": "4QGsdwThUywxQ7NhZBxhyHDRCQcEHiHmgN9FV2eaCYqmN6pXU8TUP4d8bmT8co1Pc6YcgNRa26RMu11SMhfBkEYa",
  "key7": "2FCGdaAHkMLVgVGMs7vaaMqpPFiHCzcJySYhxMs5jBUBiXKNeYe59oofMcjit3zQaRycdPyeUzJtDEJWBxqFwM5w",
  "key8": "4LdV6x5JuWL2MEVFGUGFQLaZsrRZtsTou6Dyw8zMm9yxf17qra6sPHmd5v4rkeWWBR5KVWakwj54zb7dxeys8nAw",
  "key9": "3myX7WEL4CBmx7RhXMJRvitJ6wcv9JWEVLa3oyvLSpSs6tYm79BkznjpCr2Jg3k5KKrXX7uC3atbNXbPSQG6Q5hP",
  "key10": "3UWHLtP3zYGjrXAGpnQtzRB73kJyCe1VyHV4cUShby6NE775KaHD4wTwppc9eBedWMkppXuNrpEsg5XYGQRvVDwg",
  "key11": "2CvRAq8gKquuaxjv8xbShCUmLjNHARhHoMadvp15pwXJfgtXDCJa1M59b2c8gcAgRCuHRKDfFnGwBBPh9MVSJXbN",
  "key12": "U8yZ1Tsr76JghrGzEfAi6S9qfQqxyCYVYJmuzz5JGi2xV4XVuu42Lb8nCDPWSsVvWstFfPz7NS7cJCeVSuzEf6t",
  "key13": "Bf6ZAvdW1itCPD7A3bqnfXgKfp4wvbvrY43BTLrkJVNesMfgPYXd1SzaEz6oBiMTz3rDFXs8KkGEjqCEni3DWSS",
  "key14": "3XAHuPSUWunNwuFf2CQE66KQT7s4myj3sRXsdNPFfzbe832JjYVX63XzAG7Rmu6zBxyS4DG4btFBmmn4f1X1GTcd",
  "key15": "5MCsikJCqQuG3kiT7Lj6FxUeraryhNjqBw2TZb5po8fxRPigA8Szzx7EQryrfzPfss1ThBJWEkcc438jvYSLburT",
  "key16": "5HKqvoNJc5xqMpwLZc65NvQ5Sg3CbZ7uTZY3u4YEHEHiVEYHWDRCJHMmBEh6qe4kBXWF2Fc6y2FGCQgubhJQFtCi",
  "key17": "4aftFfn9fWxPwQh6YwE5bHxWkQDKsYSYfChUbMm8LNmqiCvApzAyar5xyejjCnzSejGEKu9daHT8xs453nx8BzZU",
  "key18": "5eMYq7JEkUgZBmuWtQHASDv8wzjcnK3KWMu5Nu3kega3X3HHjE53QAU8pELejTEJaSVZgabPnGSGwH13vN49iTvc",
  "key19": "4tug4QNbXnS3934wKRVSeFyw1ZhmkFkACXFuuHZyoSDA26oDQuQdr7QgNtyqQ3uk6UckHCygKpDW5gN1c36bRJjY",
  "key20": "4htejaCBFowvvY1zKZv2c7SczdAu48w55uVitqmCMhJ7QAUEEquZ9e6Epq6YsFxqHU7h2h8StMxFLAfeX9pVpiyg",
  "key21": "5bXjbR9E7cvCLNENaCcHL31HBymawS6jjdtmgFxDvLyaYWjdtTXPXXykurzVwECqKCLTbPTidk11zqyisxdx6aB6",
  "key22": "3o5MPGKbcpoptbB1ZWaGidMTsJhghAGNrKXc1CdCkkx9WuRAwHDvfJXzsX2CN9doCRuV8tkff1M51WPvKYZixXjZ",
  "key23": "41j52cUGkY9LfdWHBH4PJcFpee2e5gBs6M33UVeRtEa3FxTufJu9gSngRzP1mNXrWZxCNDLjVQxdtLf1U5KnLUkA",
  "key24": "2H8rxLnbvgvxZj9swMGepLRkWps7pvT913vpufvkWFTTbYMeJSaC9fgdH1cxdCzbMvfmtPryTsTHCyU1WQ11p2AH",
  "key25": "3s1Rs2a3wXVuCfh7XkXcnGuLu41AZYpxvaE7SqiXLyiHjidQ4ug6tWqjo8fRCoRd8KwS6miqnre2UgU232nKUg5v",
  "key26": "5YrQxYYoA8qKUkGDe6TqiE5p9C1fa1KRL8bz32nraW6GNENEyWcfseXBd7v6Aw69eZjGBgboiMQeySH5YKtgvXef",
  "key27": "uvEuefzDwRjPzChXw3XYQBukdkumTw8eD13fV11ZEPqJLwvrRxg4hEhSu7j4sJxVnTabkkjisRAx4ppSoMhx5dJ",
  "key28": "2tdA8UJWdPjbJk5FHteKiywvFJBdPQ6uVTNwDEE8ymHTyW4kxYPkgv4rnB3eiNp3ch49kwWWB3BogWKgQ3bQgwQb",
  "key29": "4SbCdPoW5VJ8mVQcWR1wKZSx818F3AD7TXFc8Dnp5sZPWmrGCo7o4wxJTPYhHmMQxVukx5qhK7pFHD2KeNnYDahq"
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
