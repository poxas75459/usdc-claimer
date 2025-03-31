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
    "4ew3TbFLBCR8DPRFCvhLmLyfSqYbwjEgWNAQqbNQVvEepPgN66ubJ9eSPBQsV6TWSej5qCwmqJNSoRtyqKNrB797"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zkghoqhwgDzPa6bkJUDCuXZcgQ21z9vbFU8NaoA1SLomZQhXYHLMDVDsWBcETp4WkhgBFbnYkBehsCDe3B7bxq",
  "key1": "2VKo2YPQGG5Uo38ZBfyPNush6h35vAKYbjXdiQsfR9zbggFYZEiW6BpVVomDQRwbqYNukpm92swEQHgs5shnWKGX",
  "key2": "5ep5GkNrLu72DY8iAc6nqpRfDZSA837xy8ZfuiZf4baymXEdjUEacjSnrhoy4sPiCoxF2bPjUxJmoMrEtfNFxTcj",
  "key3": "NufKoPvgX9kTtQfgiEutvRbm1YrkHiuxCCSvGcLnh8u8XWGM5us2wejydUH93zjtVgVfZbfmoTvf1DLBXJtbtL4",
  "key4": "D4hvPjCNhxHbqeAL86DybL4CgpZSPG6y2WhNzJSecnLzBAZPmi4aAZ71NRz4s2She6CQLALrZ8GsCpnpyEWoQwA",
  "key5": "21qq2jpBZRw5JvoKJfbGmt9hWTy2oQhXeS44DXcZnpvesmWx3ytXPDwVpPsw8iRfpiPZ5xQiFMVLmApFv6kjN5H2",
  "key6": "3oB3uYhCPkVZgthpEsodtXkfNAXqqdVW8S8Vx2wsDH7QuK17bTGv2A98M5PSaefkFGmxtv7kpxVkVHKe9PwG9iS3",
  "key7": "P4QXSnScsYSjBxQpc5Z3RYQ4Ffv1iPHjJeiHRDnDpUDMc8XEU1SKgE5RGbd2Y2DZxL4UfbFKYpbh2HPR4iXxcPZ",
  "key8": "5itQPRUJ1B6TvtBDDphLMzPwQsBEUjKvkeZJtZ58YFwbVveUWudCqfrfEyzHMMmFbGZiT8KqMFmNuRmiYCyR4dLq",
  "key9": "Y5EBbbPkMkRptB4ARQe9cSYVyrPFDfjDnkSdQ5yFe33E7iZKNYrNZqZykqZeqS9Kn7ah6BvYMQN1oAJPAgKXkjS",
  "key10": "2xghtokpctoPxHH7TwmSRRmJzd7vRucMtytbgbDPyqyaGuNS9VPt6FeKBvZip58CAsTZCEitRokJrEVxyaRjDcSS",
  "key11": "5fESsC87eq1pcuKfJqU4HteCkK8G4TnX1fJYpphVjXEs98sr8WJL9Ujn3sPqALr3ApRE2Dd7WsCco6EGPHA96TuK",
  "key12": "hWttj1WVvLgjL5CjS2FzTjvM2wtwY8gVRJxE4wdP6NnvEjaKFacuN7DPDjmJwYmNxuguT7U3LL7W5ofr7CwnEne",
  "key13": "654o5ndGbbi3R9cprEmXzaAF4WwNzKf3uzdPK1onN6iV8RKf4oz789PyHYdCU6tjhNWpPwDNqmuw3a8LEaK2wF9n",
  "key14": "62LFMWn2QDSn7jV2scKs6iwiJXdcFz7mYCkV4P7wceHfuzks6i6q6q7uba6sE2yfQMvMk6MTLZxWAWwWCaWJLckG",
  "key15": "LCvyhuFPepJWo8kufHk57pegjx3YKVY5wjiXHL9HncTPiDm6boQr4BD6RdXyYZmC3zzLhu1gcEsAG9yEDjqQKcz",
  "key16": "3xZnUiEvqW3J63aL6sGAtTmrz4DBJo2YGaWyG7L6y6sr6iyApxGs87uGoJYejqL9ET2ftsx1q8FYxnupGAU7rE4S",
  "key17": "5kJjXgeyhvxU4B9zHnjAWaZUVE4rGDxq9CBBGkE6bP8dSHd4hHQ66XeVQLmM5t5EoViMG6ruMx2tRdjwHps59BkW",
  "key18": "5owW85VhZ2pg4pXDDDQGRPKvSsWRBoSvr561DBKKiydVocsmGTdPD9ybLZagtMPcqgTeTmea5qtqQsVUxpqZ2NFu",
  "key19": "4nVUoMCEwcT8hbJicEv5zhgogWoTPbk6UjAZCdygkXFd1VPs8Gr1nGS3j2ot3wWzrFy6najSiXwfqKuUWfxqJFbv",
  "key20": "5oqiDYfuEy9qAT4GLkgx9uYS1dLqoU37hC4ttq2Re3mqdzwPkeWUhVUMDoUYu9t82xQnA7vYUEyPnuuusu8ReFEZ",
  "key21": "psaTtc1kT9HsMKLjfb5VVZafCePaBEeDR3wNZj81uK54eg6ynERAxzde3EW82xUKKXqE4RpJmUAEykWQkWGxXJt",
  "key22": "4Gkz1vnTSViq7HjFcr2uaL4ng8JjAuWP5ZQDZo6mForK9BsGdZjiYiyGD5wGKMgoGTKz4XPPvLTUx282h4QZVK3w",
  "key23": "2J1ggwcD3ZyVfSoZhmnTcPLyZPEGXmR145rzoM2nGRPwgNUSLFsFtKG9j8obVzwHHkxxYX721VK3rV9qEVM72zHX",
  "key24": "5k2sNuLfhJgb71yoDWzWHEBZBWPf1VXdDrEH6omERqcQWxCbvoqmERugk5kD13UBivF8JB9u16LN3UQcRxw8v8x7",
  "key25": "52Tz9K2pzEWnyAokezP89oRG7GUvD7LzuNWcScDPBRRfvFq7p3YzED5d8iV2WNC72jJ6QtHMJCJQGTNQKJKdgqXE",
  "key26": "22dyS9KS8oWJ7HQn1N6iHVmDSYMq7CpXkBCXwXP9hZoeNBTms3QScxRW4QCezdVDrA8HHGk9fhk8LcojuWdFd6N6",
  "key27": "4ciYo2W5k2NA9VJAFXdqkmUBXKzPcSJhMUR2Vd6wAK294nU67FKs6qErtsYDL9dDXeSRM3xT3cYs23oa3pLspRH5",
  "key28": "35vS7SXy8UDcssHs54ayhqTubTa4G4n65dpSSTgtK8CGujF3dqW6sVvsyUKS9i4GNoapbop39W1QYpWCbSCgPEno",
  "key29": "2aMjtm2iWR9RZQNkhNAeY6UEST1YGLUskSy4vn5t5RDwybuMBZJZmXW1zCCqacsUknVp5CtN1BNBgvfaP6WAccn4",
  "key30": "2icjbbUvSVc6zPFHT4prK7YUZkRZXNCV8jPeBBq9Jmyd4XQBNqueTf6wcqvRr6wV1iEFN5HqjcNmT9WUoy7oc3ms",
  "key31": "4tAQpRbrUjLMCsaXjU2HFGGJKGXe9DJJZzjPk7pW7nuio8rAgWmzY1KsNE4HF6ZWHqf3KP1RDUh5eigzDTqeUmcN",
  "key32": "3WjvcxnPEZJysBmp5yAJFMoApNf8BxNMRytLVN7vkiCVqSLd6RpvZMYJTKGy8yKaNJoNFqJtLmTfD3ojzEYFiYJN",
  "key33": "41ZpcYKuQWgihHjttiCfvdWvKg1Wz4jfywnLeARBoteDRdz6RrMRhtNDHXrwuwnFz6ojh4GKNpyv4rLBQrcQ3Wg5",
  "key34": "4YXA9kwhgYN1WKmy1sHvh3YcAFGH28J1xh4mpzbsLGMynrL6PKEFwqpgtG8pT2dExCiV5vs8x9JdQgHeVUp91b3Z",
  "key35": "zqo88YgNx1uAupWzfuGsi8jmjae3rf43HMr3Zw15zi4f4Npfu63yKwEjpBA2zj4rrnEarcWRyHtdZxUryQaKPB2",
  "key36": "JkHn2hLs2H928EHbYPJQFA4ZhtZGGoZqgnt88WFiedRDSZVFyFdsx7PjBUksmNQXva63c1WdNKiMNYCVvgTW4iB",
  "key37": "5GJ3N54qQdZPV332Y1PX5wdkY7hPMgAsYnRFhCasZDdSQCbNq1yfNoQR4STxLXwnk6e28DshjpNg7f5ZVbGULfpg",
  "key38": "5g4nhx9oW99YS2bDCY8dtds5dj2dbdK6YihedvHqcmtv6y1fJs1H6n9DCD5B55ZzkQPWDJ22pjcoZDaPZLXss4rx",
  "key39": "4VmX2Cy9YGk32Xn4qp7HHm6Vxfwi5Y1s2THZxZHNhYRZvmQ7oirxZVZPKEL3a3ebdQA3sfeoe1YnYVMUtnQBUULa",
  "key40": "35kVy3T8Lzn6LojsYQfuNEHkTxxvFa9eugy6ULgJijbYBrxyEFirBJEseisjP1LPGzCPtW96iUrXL8X5ageKrHfE"
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
