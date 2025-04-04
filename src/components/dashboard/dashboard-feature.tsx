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
    "5NzYmWqXntwvCisxxJxjmsabZjjp1VYGu3Uyp1zQuzXYFuHzC4v4n6uUMspNzR78okcQSKjfDRiPP2aTsrW4cX8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhcByw2gQRV6yV1f6Yr99GWC1LuVCQW6RFgXV67TwsKDkY9KiprgzpRjajEdLhRXMdxqKBQSJkLq74B1N1M2qnh",
  "key1": "2gpqFScg8X3NVsLsCwP72SSHuZTBjtBy3oC5tdSAH9NAMS9Tvv7yh1A75a223MHJGM345mbRCkDhpPvGxHVHs88H",
  "key2": "23VLioNy1BH8TjgEny2vWhn4gySUxZWEHi2jEP17Jfah8RV2xdAqiiNwLeGgvWohVZd36X1ExkniQEasiGiC1Zm4",
  "key3": "3AgBmjEnXReBjFjZ2VbwFJDLomYDhRsscwsm6GU7RSouHjddD3Pr1AUWKCxYVENPPSDXAnEa6axaXRhoNhg9boVE",
  "key4": "3PK3PyhQ5s71HftV5n2CYEx56wN6HPDHgULbBJC7KqPmkStrPZ5SYbZu2jAaUWRrjBCzynD8picq2qwrdFt6PkkE",
  "key5": "48ohs8zDRTxYZVUpsUKZWZnRKZVBfGFYuudvM5KWpwLxTM88SRKrRnk4epKvb5GJZi59xMXSRQMtLQZxVjpoBUBU",
  "key6": "2uW3SjJANSUsqCCfCx2Qjt5mqyNA4tHg4f3qvt7ebHENXCKfKdDFFwEPR1GWDrCAVTHb5HXoqqJYEjprfQ4ckLYT",
  "key7": "5e8JX8ioiMGnrHebS1e7yTZtFjpUQTEL5DX6k3m9DrVxWiJV8xNZxSkb1rzpDv3ZNfob2dyRCtqDD8Y2wtnmwNeo",
  "key8": "2cTzkv7snjxdXX3oF59dgoQ9YDvZGo29hFmKVDjFTHHykhSpJvbqAjdrHNZAcw45vzEZgQmTskBLZqmNZ7M9AnJp",
  "key9": "3qAMNmucLPNHzEMvFjHyYNExuA123YWzQuQW2XvJxBLwBFkiXX2pUYvy9injL44PwBK7BY1AYARg9f6AfhPV4fVe",
  "key10": "63k2Lw5Hdm5zmGqwefL5qgpktuowQnpb2GWAsagSKefR8kDXZUWYfsHwzxNJkjekYobAp7WU1JouCaGBBpopKzeD",
  "key11": "3mDc6iXV731eqCBSrnjekdojjgwhUP6LtYnbLHV5xa8pfJPHgRVEc8oPhLFdpqTYpxmi6x1j9LQ9goGTKC9qY1da",
  "key12": "4r5xKGLxAokuUag3fNT6TwvKBwcUvm2eNr7tzPvPzyfKJeFmdbyfW6fj2x36oDzcXAcMbCSFavndpEjhwhyXWjFD",
  "key13": "162XpFYCdzPrkZ1wdRVEQ1o6SjHe6LramiTdVMuC81bkKjaHaqhTdKCW1CMf3bLzrE8DKzsyvXVipJ4MJT5RZLS",
  "key14": "38DBaCD1pfmxqoz97cNhmL6p617wH5woQEiiGNo8EzBfsBH7LCzgVgRy1oihwtBT7hhG6Efkv6mh1npSZyCUp5ML",
  "key15": "B2fGBuJrEcnFVifce4iD6oo35TG13gCYs4VGM7bnb24gdijtMkkuDBWtE688E36W3a1mna9Ssh1sbHu36nAgANt",
  "key16": "3c4yv5uQoKBw1fBzZywcKjmQ3vT4pNm9iKdZjPN3akpXL4TGvXGg4HbZo16kNmb4o6bdZJN9FeY1Me7SMMrA4WNV",
  "key17": "5NnG7P6KA3UaYPz1rvUC1WjsP2qCYAc4srB4QopTmGY3YLuRJ2oLKTATyTGjY1upAeoQAjN3PrgdjmbLVySNzyZS",
  "key18": "3j4CjRm8QFr84bNiauuBjaWmZFrirwN17ftHZfE3Ryogo9coVDhVD273dkyWApLJLAEuvp5JnmwzoBwNUM7NNpTn",
  "key19": "28KcJNzcmvEnCQSo9CpHhFg2hdQ6AMcs75LxqycafKidoFHrkxfRFiaATKtP88R1S8AoPJiBggwVBS7UBgWGeH1y",
  "key20": "tmF71J41RBVj9FGsa5a6e3RTwriuov6q9hjZUKZN6NWwVGTyKRXG7b2j6RXVGk33FYGbTHpum2ueKNAxDnP5XGJ",
  "key21": "f4tsfT3uAsjSoggmCaH2AoYavRwaMpwQ1ppVN1kvR6L61fxwmziFjed4ZM1Pwj9i5dXL2eK5GgaG5gTJEH1v3e1",
  "key22": "58h3yjuUpSbie6bFxxkRd3WHHzxJLvzoAvmaWMJYe92n4vznPjvGjTtJ3rFjQ1XiP9DH26fADYkiHJk2RFWQTijs",
  "key23": "2TN6TbWvyWb3CaxfzL1YtjbiMZefiWg2PhkFdqErynEYDwPfJuL3kSZNpum9qJAhuoicAP7eTH5UckeZ3CbXFfcP",
  "key24": "3JWkVwCzGZgUPCghDveoaZFKFre89MhzozP8xfHjVYCN5ALxTcrLLSwAZhfr3xFzqrgBcZy4ouSurW224xB9gPWX",
  "key25": "4oyR4vR5kKuwQpF2zQ7i5vhhYEdG6dcZEJ32jXM6959rd55wxDYW6UHR1Enw1248BwCcZhG5R8hut84Qu7wrf6Hx",
  "key26": "4DGU5AqnMfRxTQDQbj55AbnmbinLfHxf8SdVinYk8A56PdQxo6oj7ijr7KK7Z7czTkrAVqpEpB3T8NU22wPyFzeF",
  "key27": "2ZCp4WEeHurvbk71shtvmknaJUqgXyG9KGmxTqQK525GRD7a9AMoEXtynBJY2mhyEsh6F5uRLqw94aD98SvCduWs",
  "key28": "4dLhVBUUyo6RJfmZi7RKgdXyGX4ziorHP28ECJjLfMz3PFrwWdVLdCwB53w6SzsBPSbZuiFLwoB3SjtdCg1qh9RL",
  "key29": "3ty6GJ77oejEtiixh2E4RGscLpqDyx653er56WaH5UViMDG1uR3kN8Wxe546KSFSxt5zGwQJU8oMDHk1NRxUprZA",
  "key30": "2iBQrbij2qUVzDqD9hrNNNzjbgjGSpYXSM9FgTJn7tBL1pPAyKXVDtXiUgpxC6LxKtMg1E79RBsi6XJmBaDZgRDY",
  "key31": "3ajbMVYTaQgtAemKszJSoUKBF1hmgH5r8LDe45s3mw49NckeSLAhSbh1nARmSuwUZd2MJTEYxTttzYL9EycAiMvv"
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
