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
    "v5mGrDqrWemGdYUNNTn187tPedzkGajBAvMZzvsfWrWU8jBn2LJXUAXq9RacvgzvrYfBuFhFhckk3ugh984mpzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5spQLwd223UkWYCgsBSvJ547SbTGAkfzh1oLga8jrBtZ6Sf6PKDC9YQtcQEe854gnJUBztL5ufeiRTvxhtwKHNof",
  "key1": "42QA5AaupqbASzzSAHpHWQqKioi7aUA3Y2VgA2wMBZoQfH6aaAdmiW7CNsvUgBzhKwuUzGh7DMSJx2h3CzXMpddD",
  "key2": "4X7nArZd69R5tUvoJDtHuoS73sR7AVWL7W8rnfiPKBprFmpoe2VgdC9yxw2DcWRv2he4pyxGD45fWBuKNv1PcJMn",
  "key3": "5B675gDHXM71Gh27Hz58fHSLDeYjyPYPoq54WL6BthebpkPjzx5FDJVSVhSRmrLCxQkSe179Lgorv2PLyeiRGTrL",
  "key4": "4zWrt3fkMpPjVs56tkcshyv48yKCvvLWdqrakxTXgqvkC5a6wBYgzW1CfyVVL1kJKETZ9QZ5yiJH5UtLxDGv2Wx8",
  "key5": "42z99ivsZyewSrvYJdayqnuzeD4qVCZHVioa1MW9J7EkPKmhfyE9ATwLvHfS95XePa6xGVVYDXboTx9w94Uj1eNW",
  "key6": "65FxVKebiprsLAJKBxJuG2oaFUfxdGUnTqQtTsxgLC94YMgxehe5PoxKYePw1rP3Zgpp3pn5PTtAvMSX4HN4V9FP",
  "key7": "3LiifeetP5APcyemDzcPEmNoKHje9P2ucwapkWUorNRXCLoWFNHJwQPjv2ziaX4xrB6nNjTG7oZvioiTSxMUmfQS",
  "key8": "Wo66g7gPcLegaDY6M3LKgSNGLSuNwH6jR5GprogCdTu3vgVyRsdhgSUhSzRjNd3UjmhSRHAPbGvTzRyPW9Duqku",
  "key9": "4VrEFepo1P2AAS61fWBfmFSWu53nbVkEUajg4TtzY7HYmfPMp8D56pgeATR3HhTcaXwXbs4sxm6VRxS1ncdWSKrB",
  "key10": "2uci639miJvhJYYVBDnJGYt2Hp9qPNW4yuhq6xwfEipkuKFu1CR2Qe9A6CfN2tfPsT7FmAcYNUR6Cw3uyk9Br9n4",
  "key11": "jWMeKMv3RNLV3mobiY5HmzRsBH8xJc7yZFfzjWh2TVuaqtxXSRb5aXABEdC7jPUR2z5z3s9ZRVpa3TxGvuYGMLT",
  "key12": "57pvh7W8PueJEr7kUiZrdUNCv3qEsDNPZdUBi9ZRK5qyYCsPDQN4H3YSxC2E85176WoTqcjLpYfjZht5RNZwMQ34",
  "key13": "xbNJan92DACdFzA2oLaWqtH79dTwFRT52pankibvudqmxP2fWyXoAaY1xqKTzPantkeQ1WUo8YbU5JR8qTcFd12",
  "key14": "27zp3w36qu2imbHefDQ5NW4sh6pACVp32mvfeZFWZkQWy7Dj4eNpoVtytank5fbvseR9zbJ3kJZgSHr5rKqJ4XaV",
  "key15": "4eXdh3BiCt5DSkngUSCLDyhitb2gRexDmXYoYtNHmhTiMHAmyePJaZxgBfmiDuCUfew6A5aAMQ8eLpzUJpnKyo1t",
  "key16": "1qvCUD69rHTMQC3BF7ifA1FRdWdWUw7P21ZUS96rs54FTPM3S3j5XJKtoEqkLC8XeSMEtqCeuYxVSVEDMbNsjzp",
  "key17": "W5E5rzNmr92L1JZecu2i62H8bBBmzJo5iQLP3Xd8rdGCimrkfrbs3vhdHUVRc9fAKo7izQfv5AMyrDo7cowE97j",
  "key18": "5auXBMPAw62KnLyZeBKHShuSKTBsUhgCXsWHELajUc3yE9hHHzQXYCtroZKKTJ8KpYaqVfAn6rWFDTnQt95xJtSE",
  "key19": "2ER5Y3ytCCywJqySVq3qM4nzpr48aPUsVKajpvQFuU8H5LXuqBY9mxrGeBWYubv4jyJnzAxQQtsizyg5L9yjmEyF",
  "key20": "2s4TtxAkqwszJgWUTdP3cEwhnmpJ4K4qsJc3epZYgbs2PNdr19CPExUtPBfXtt7vM1R6r71frW9LPMfFNrA2VRbA",
  "key21": "4iwjYffrjzHx2qaHSvmEzWfxKgvETPTH8ecKXnSTky6RrsS98oUYpvyN6Z8Qf2PnuiDVt7inTWHHWqSUWQ96hf4E",
  "key22": "2hLsJQqsNZPHQRSuuJcG3YeSuueW9pYHp8pXx4bTGy7ETnJCXPVyw9sFUdqL9X7TseuPxvzkMYCBT44VzEj363Un",
  "key23": "3Vhnewk6UPPpvYitvuMabqEgcquih8dzaGEVgFf7vSaf7PNmcPLHs2TKBHACeaSYitQZV2fy4MStFwHkg3zE95ir",
  "key24": "FSJtT3c8h9rhhZjFvEzRixTPeej51hG3z5EBV7VaUqSZ86r1Gy3PbUxtym2pGaXLeA4V9b6hWEMA4tByKtmqshH",
  "key25": "4JAHf674A18R9DFHiZrH26YWyeAR2MZJxqtsfeFjj1HV9rxyqh7NHGF4JcaXppa7j1r3G5aiLxZZz7oekJjvemAA"
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
