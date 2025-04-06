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
    "BbBFekPvuRpYLiFRHmm1GWNGBeDQd66zi7DkXvfmCN33xJjm1thrbLNUM9YoCFuHYQxAqnseKZhbbacEY58Jps5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MaJzvuDmGcv1E85a9cDAdcHco3sa2SHEVm6HGS7gpd7p7ms56QLJAeWowB61wdQ8y93m86xpEQ3dn5U3FPXkTXS",
  "key1": "35rczNEhEHFhkaGJtTyAT9KLrPU33hpycedvfjG8E4CbzbWDksFrtfAPt2i3YsV5DSSxUciRYYGdnC4zdbdoNBYM",
  "key2": "3taBNnqvYNLCMDM9uw6rxMtqSF7gq5SShNHrnkVCv6xvw32kvj7WaEAskbEB4etW7AoxU1MrUM6sik5VnLJCL9YP",
  "key3": "3aw1c2SiupaBEziVWY8dquZJFxnnH6vK8nNN1V4fmUNMLHabGS9PqT1ikujZbyW3zdGv5BuaLimG1yiRR9NGYSrg",
  "key4": "358mrVm6iE5mpMLmLPTaDNpHfGo6W77qTTuHUm6uG66KsaAya55cZQf253FNfMJWJ4ceaapbkNEnYgXu3sHdjzrq",
  "key5": "44vHdq3FssWfXcMZo2PFQ1GogAkUzw5W1aoMdaK4wN26RyrX8NvzHzDHUupkUdZoD51D9ZFfVogZKzrtsfbe2xsW",
  "key6": "638FzaxUVPR8vtaMCSzfuvg14dsmAw61vNHKNik7Vjav4T68TBuzxATqpbxQrjToc8LSJjFpjHrdTzfo4wNdc4Za",
  "key7": "2eCCZRUmYdGAAJGYZ1ddHk4HkUpRFj1xbK9iddS1RSatUrUZfDGyPFtdv8MaG9MTSjfnB8oeE2XDgZUfvQNEc2u7",
  "key8": "5fhpaArJ3kPCmtoMx3skqtdcyLU2a2Hsqsd4Jf24BQtGXzZkPFwq25UqWiXJafef8vhcp3FxGdY1kXz1c15SmGdn",
  "key9": "5rxN4qmfuEsU8pX6qfSYJcYPnKBknojj53RfvcBZGCrDw5qVK7Y8iiNXCecHannU2CjcmgXC2iNAxJejokGXzPFy",
  "key10": "2U9bdqhJnCCfeyfU7PnHQ8YaYSEzJiDQcgSXnWtsjQDeeU446968rsu5GvLHawg5iTtrf4F6uybGwgQnYQduESvN",
  "key11": "3CmDLYLEd9nScfsUbtw8Y2YBLM3BcybcJKvCTytsh53pRQAwK8pECA7mJnqjuA98xocR5UiouMxUDrWStp7KBdQe",
  "key12": "6VmjxPGauPEhf4DiFZ9gCYqtfQzgS5J1psUfA4QDjPEQZrnZc771ATR3n9T95DtAzFh2aGYD97ids9KU7XTwZCk",
  "key13": "3VuRn1KJ4Ax9YkqazaKKRcCRFogTQ2GHQWT1Yq8tZDFwAjd2uz8CDKfQbuWw8eSzsn5sP3akCz1YcTh8gL5SJNMu",
  "key14": "5bAEEvC2VTfM31WDFRTWhX6RrhnGidHLw6ib1gr8nrZsHyjhvCzfQK1JruoPLt9AirmKfCnvrRZhxkLsLGAY8UMB",
  "key15": "2CCjAw5j7DstZwPtRnyiFrDgPnWNqEW1VN8yCSRMBoNJVDT5vbBYpWrhREkm8SGGLyWoVjLZHnxFKD6XxVUWKbzN",
  "key16": "4sRFVM7mhnwrkyHz4LxpiYU3XC1qZbHMtLqNXygHrwT5UFsC4worRrh4HxHZUHifUQBYufqVQJUeA3hxbxV8b6sp",
  "key17": "4sv2nTyn8iRodCwCD3s7vvmGV5F3WiJVPagqSA16G1AhMa6t2xxGk3QWbeSnnXHn2xDMbNLKUQbzwjH8k6D332gG",
  "key18": "385metWZThEiiGAbRaZ8cEXgc2Fkarqj1jtLSgjUANFW5wM9pK5VdYaGToXjx3zeJjz9jRnuz6cD5udTxTj6e1Gv",
  "key19": "5zyXwrbRj6SVGaGqWGnjrMEzADT8wRodA65rQRFAdTG9j9sSK8brAUihpGGbutju4YX1mTnkJnY92SQ17KvP7ndU",
  "key20": "3N6dmV3n4T1porDcpJyQ8foEVcKGC4rAe3exCMwavJnFkhm7cSmaSGv5cbqZFaPBRuXcv8pvUcj4JE1Z8TVxSbju",
  "key21": "5bRas7CHGEgEYg77W5U5sT9mho3uTQQ1fPxxxaN9EKwjZytZ6QVPiLLiwxJSG3rFLN3hWAqwr5zofNsbfdt19B58",
  "key22": "5xmRUxDfTPUDeTpo52Um9VkraSrarHLUyyiGWSz2ZC58TYed31JpdFyTBK7TNHMMrZstiYQQ3468KwwLXXJSSpJp",
  "key23": "2WoVR5BH8QAonWNiKwcSXgSTpkTGaULVJL5kBe8FBtF9FABZ6JxmALyWi4Ro6K8xYsnwVNneqGz9cijzms8e5vUL",
  "key24": "5Cb4NhJDbUgSCgjBcCic5pmqFSqqWAT4t3FGsCmqqEguGCJmsR4jPBtNJ6s5bBYBRa9sWsb6beR8XVfmqoTia7i1",
  "key25": "5LAaaVoo4yqBTj5yg51VaZU9rnZjT31cYC8HtwLpMHLs61xHWPxFR68CUYQRADk7K9WDCHXDmSmapNc2uaTAdtsH"
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
