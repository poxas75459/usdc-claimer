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
    "2zhCuJqKHCRNLgFCfoAynkX4ayoTS4WXCPwkFMMoW5x8E9sEsPhrj1uy4BiBFkmkwQCgV1krQ8J62T93eeEh9USG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Un9TTbopAskF1PhZvKsFUimST3Tc1NAjtVsgTERXbT8yZZbDTrwXvknbnefKYnjJUvacB9eQgQyCXE9PTnanCx4",
  "key1": "3nKHhCTA474aE3nDXJQdQX23UzkAY3joVmRtUxJnz8NAAepq8CXoAUdWfH3ASvdGRbxf4a7zctUo9SjYaP6h1JjR",
  "key2": "4Avcn4ypQYJahdqbPpCGm9azvFCkA3c7durAkKKnyZchbUYKLFwDrx42Caako12Ppqjn3HCHfPYKRwVKLxmNhy95",
  "key3": "2XvHgnYFN2wUPaH8rKQQAhnNKnAo3MVcH46H3eFYiMjLkHA61MDkobvfkhMFrU7uYxo5WJuWt8AA3T3dkQwyRBgL",
  "key4": "4e7UVbYnejRAhAeqTytWR2q8j8PbCDpKBEVPXWzMNEg4db4a9jXNwUDeBwHim51ZrGa1kGkn1YmqPZ4L4aujbyMq",
  "key5": "2aq5HZP5j36vm3TzMiQGsm1NwNjfMz8PWGmG1pBCG37PNZFfjDv2fJL2grNEnTsJB6UM4vp4TjqJfqarfqKcZfCg",
  "key6": "66BovA4TGt9Pdbesr5C7gGivX2kRZ14oP8Q6QE33cvx8bihncThUFLS3vB9YgNurEwLzUmfosDABP2zjDUjfF6Uz",
  "key7": "3yMUhWzt8NY9LcjUFzLNoGCqak24NMrV73CviuJHV5k5p7SXvJ5U2UaxADeX6oZ2CTh3gtThLAzvm9yxCSXcbJFG",
  "key8": "32zhgc5rtNYHGrEaqpDCp9sqsHpAwbP6MwhceEPMCvU1R2RTNECm4xtQ2sHxbTL7FaUc1v2HjiymbtbyarP74Fhu",
  "key9": "4wjbozX3J2ajDirBEEF9QxTXA9M5bBeRi3fAkgvJYbgtxDqhbG7Kym26rS5UHR3DxxKy74bfembtnducjEqZdeqa",
  "key10": "3yboV3MgH1imU3ht3auZLXqozunUenkLk9ogafV18Ah4QkXqZs8HsLkpDeKabi8BJCNgadafc5GsbpdiHMrZ7eaV",
  "key11": "2trbP2kee6kpub9CPajPvkumkoTj6GCyP5G8H4BzVmKTBkuuefTJGDxZ4dqjXsQgSvHXqm9feU3qVqazWkH56K9L",
  "key12": "2TotmRznuDt7eyvP68NFyKVbBJ8naq4SMYoMxm9KUhMGqaySDusuVpp7kFeSrLL5GkP7cQYVkAqKtGzakkUfw1th",
  "key13": "TfcvUHNihX1DPRynostQGMcT9EErxKBPw3arg1LgUkLKwmaGGZFCaHfpTVZ2uftVe9eNGVN8KQdTQyHSdSbPyXP",
  "key14": "5YH1aZV7fPCASzEJrqzwMDPxx1sGcS6A2qjr9D2xayra4EgvmdNbrvTZsZ7KXh5V3qpUmcFn7wUfKty2dWKNEE2S",
  "key15": "3fydiGYW1ANxU1cpKTDDgj5M2EU5vVsWLCNwZhPZzxTeJTJ2uArJwmCsaCxDM5WMB9qJn4Lc2XzLpnxFQkyv7qTA",
  "key16": "382qjwtgn5qqCrp8odsRSivJ3WN53MSn4GLSgx4JUCi67kBxqnWaPFner49ERRxJppin8RSv9vpeknwrUagqJTx2",
  "key17": "5R1x9kE9DhjLRhRarbxcPuAKt1QMDHFTfVb2fjCguVVA7iYRbW3Hkd8ErFjrgiC3ErYRuRxQqpxTcj6SNWBKAVNx",
  "key18": "3ukTyryeqfYmuZhy6tdERRavjb6CZyF8142nf5x7uWNennF2cCPheC8w7iKpWUzLwVT7oYfTLwccu9bHKLkKRu4P",
  "key19": "4eL7u2HhBfGq9BUAxM6uu5AHEiWJaVYszRoT9hvXCiMRtpiDE6QLfGyw2f9qwVpELrxXTw3efxdFpMwj2Fpa44sR",
  "key20": "CAA2Tt2QvD1oUx2yv6aX1FZyweGnUwoNKCR6m7nSxNhrMTeZh6QxHxsXycwQ5zzCeBMC4QfV7Kc8CeUS1wnRdJ6",
  "key21": "5p6PMeVgYTp9jgik1JAbLcUuU2fMFo7XCuPEv7fJcmiYzBCgUfZ3TDzd6afmVkyBhcY9z51bCGAkrUgwQ6QuQg4J",
  "key22": "5MqPMTKt7b2XkL9hZGVJYenZwRM7DurE3vEy19H46gbsZkEZGn6t9Y3yCzsmcCBu91o5WcdH4a4j795wmTz3W3uN",
  "key23": "3i4s2WTi4kfRiCXXBaHni2af3oKkEaoTHBoYcuzyKpg7VeGw78mHVSEhP3bbLNE9SkCKmVnerP4DZcQ3QkvzKWQn",
  "key24": "23tjcf4awZMbdwzjCmeHuVitz9ybckXAW5oebBsLFxh1kbMCQsad4JVo4ZVkjsMFdfdXLn1q4KwRKvqankMefweY",
  "key25": "2r9aBxt6UjJd7ajk9D2pqHYo12YG7CvaExcGWV4keUT24zMH8Gu5C5iiuhctXJZbzeDXauicWnx2ExGgeeM7vUp3"
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
