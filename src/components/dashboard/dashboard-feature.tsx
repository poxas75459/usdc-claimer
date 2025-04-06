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
    "d6EGFWPJyNGPqNk6nauTLWD6NN61fZbEQ2im4b1yaXvQQUkDFWY6gnh3aUWfKZq16J8P1suEr6xBs3F7CYqgaq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQyPAtXYACyRe58YHZz1hjHrdFxESYAn4gRvgdbCBxYrpELzVM1qsbcLvo3vgBsnCNSvZ2inA26i6bFphnDE8PC",
  "key1": "4Ph2cxDPBZiBKnStS8EBpnJmNS6HRuu5R7tVMTPbBy8ZbbV4CA9LLUQ2JVeatcbLcLw87J25Cq7pTZ9UHc61b6A9",
  "key2": "xvyhop9nUUWSWg1L4jAyQVXJuGmUorAcrufmdj5RPbphxvypdbiVkvTZxFtCrbb27J1WivYh4msJ3YVkrzz1zdo",
  "key3": "ni8k4edh5cRrmVheUxXZy4obvi1xtM1ubQFCYt3TNeRWbZJ1HAUdyJ62HtM9CiJvY8RSiLZEj83xH5BMgGpHR7K",
  "key4": "4AVP5ZQTA2xTVU16zwfNZcmV6RymRGPhMRvpREuDdeWfAVyJfTEwBrCwYhKqmP4148RyuAQn3DZFNdcy6LufoD5X",
  "key5": "2KpWVnqtaUyLGyhgpasg2E9qcb2AdJWn7V5Lt1mQ8tomhQdhoD3qJra47sBva74iz5BsshvxwJT3GGYoNqhUbmV9",
  "key6": "3AxmfwZtPw7uCYBJYfwxqdgkQvjYFcPxs3Lq4VfxT9qvWSton8eEDJs95PmUkyfatSfjjXvuKbWSjxnL2yHLNyFc",
  "key7": "5srd3KkX1LV7f8H9VfKtTn93Wf496DsA5gD5bZ9u8XyhMuLrupp3aYYRmDBKwBcFTEjPf6JwsN9mD7KiKBozcw2G",
  "key8": "2ZYmFsnCw4MTbFv78ujzZvTRKXuXQ7WwDpJgYKKQg1AUmGNrMyE7g72HhwDtkb5CK8eL9az5jz8XYaFdimiTkXyB",
  "key9": "31CxMuP4motcajQSCNzntSdwDohz6W2DqAsXR3hCkJXPJ2t2JyorFa3pZQyde1UwLiWBHMhqVCWvVjkw4zrEFdGb",
  "key10": "3HU2ZuTDLe8hw5z2cUS2RAu9d4hkrVkAuSYmusXoEWhovwTo4QSNs615FbahxdshMNhWjB7AtdeiRFFVZjCQGLEQ",
  "key11": "4MTem1jspTRoKN77pGHKhh9eBqTzdJKXnCPTwVE3YkxvM9hRBXJ9aVSMjyYaYewnBzzkGFzcp9g65EediqSqgcZk",
  "key12": "52Fdpv4humggFfGqw62RfhXb3FtawgSd5n1HPewVFZJRVGaPdQDMyZxVeNGQFYSFxCbNB9viqwYSyo9fk85kUkRd",
  "key13": "vx136xH31E8xGvNMxTVB2JNrVEG5V6ewoYkDceFxeJyJMh2RNytAUpsR3EL6ZopV41h2k4wR63fh5iyCYuCeCmp",
  "key14": "493WZ8CX2Zsfv4q7dFj3tgYaxcNWMH58neQUXdUkxVSBoCGNtzgV3zvVEMzGoGbP8sZbjoy82BCxkuZmLHif947Z",
  "key15": "NSuXBv1NEskcMTyJLoaPHrNQCHTcxpCVxz1fDU7y3jzx33FPaGq3rDijYe3c8atYANFLR2qup9p5tphGzRzzUwu",
  "key16": "4XPQQ7ubZad8mLEGmsqRuPMsBpsxcM3xUGskfxZisZrqGX88akR4NcUrnAxLjVCVhevjxWyfdAG5bQcVntp9WSFq",
  "key17": "43u1toZsixQ9e8ujwGnB9pUkBXKeZmQQPL9YFtw3QnW2L9BCNxqJcBwLszuUwRrATzbYifddV7FQdiT5onFzU4Eo",
  "key18": "3JQp48sgJCZuCmuVhuJpEFQR7L1x4bxsatvViS9rTbV5xcUYPiHqShBwHmyKeRcQDa6DUixGeTQWt2romk4AmnJj",
  "key19": "4Lowr7DjcH1CiwrYvy5FE84erY79qXBWRFVms6rEV8Bw89maAX3oqJzrt8SvvwYwLfCvovtzJimV3HLvJg7xbhbt",
  "key20": "4bMPAQnFumyg2Gw2XELtiviNNPJgzFGSmrqGtNUreNotJ7ebrLPno3G5t72TbPy8PXWNqCbkN5jS9bfTYGF26Rwf",
  "key21": "3XZxKPwG45Uj3828svNkMH1x8cwT79JA6ML7UiptiDEdLCqz2ukPAub6ptvDt5Y4L8an7P7nVw9vdoAMLHLp67Rw",
  "key22": "3UiZrWdkkxFVStuXtrtsfErhptFPkdjGaSHH4VHbbUisBuH63t8ZJN8XAPA7EQpKTMM5WiLejuL7RWZwTQEfwD4H",
  "key23": "2rYudvUPCeh5gkiMhwwByroxzCpiJYqbfZZwtAkNCfzksrJfE9YWPGNQCdiBcw35Vwo9tZWTeKcqVPuTyRob4Ec2",
  "key24": "27jrvqG9pi3uPEko2GxDSkyTYp4ZU7Yirowh5qXbxbaBiLsyr18ssFpgV7MC75pr2fzF3yr1KgKXQufrkV1dCH1Y"
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
