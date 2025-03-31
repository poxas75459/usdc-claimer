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
    "2EmuQNdiRobmskEAAZAv2bzVAwF3jUeZYyzwKT5Tfu5FeFkGyKGC5ZFBEbwisxc4K61m1YJDddaRKvxj1JDuGJxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgX59JAFm94WJ7gMNWw5d2rNQtmqXfQ4ABt19iXaSRBrnwzXGeDPopYgXW3KfSzfydPN4PeaG2b9bN5M22KoKnm",
  "key1": "xpzVssY5fCned13LhSymbedw86kirXc2xwRJh1Kfh4fmRpqZfv8vpzbTDYoWKvnQ4hqAU4Y82vEMxCtzBiSt7m3",
  "key2": "5EQf556bf5wd5r94kbLngLVj2SuY8aWdBRUPvtvS37rfWHCXRhkUqzkEauSNUHgQ4kR9hu9kWa5j9DT6EsTFrSgU",
  "key3": "4rBHYcDru4rnShqnsBMCFqji2JuXFoU1YxmJsZkwC2FQZKdkfvkhy9T7UR5Kuri3B9wK6UD1PDtkdze2LtPom5Pr",
  "key4": "5dUXpstdexZBE5dUhsFJnX5npRL8SjX56MuzM8fZjDV6ywFPdJNnCNcBJFTFBR5jtNTDh5waR3GjYQnV7VmCkH7Y",
  "key5": "32GoSS1SfoMymY6hKS5Ko8DBddMrGoPcjyruJikadLdD8hUespxov7jxVJkaSYB7H7t7pbEmxxHoKHtETJy87rNF",
  "key6": "64sF7EVivjngD3ueCUq8vxFLWxX75b2yaVecdQC4q1jhLDrGTkVNZyjsdHarMYS9hws6GVG8fUcGWjAhJtfpfrGV",
  "key7": "tLZHok4CaVrjrP7gmGB522ukGSwUft4TY1616BbXvh4BCS6XaxpyD1sjiiTwuZfqTV6bk5rM9ytf3pFe2CgUSDk",
  "key8": "A8kWDERvS2sF6qwoVYBbAfVBLjGkmHuH4H5in5XrTx3fHnViY84Yk5zEha5s2mSu6XpLnvnWf3eZjxg2kkNBuzj",
  "key9": "3SSTTBchNS6tWTn9zUDTNZp9s9BfxoMkTdbMe3vLg3y7kp8t62FTWs83wpE6bHXhkr43c9sBe49GPKjNbpvgfseu",
  "key10": "4ukHvMS4745Bx8ZdyNqbso2XdNf23VLS7huVMAkyzK8tUugT3yUwQQiGRCjbaamTz5wb84r5i8LBVFqMtPvEG5J2",
  "key11": "33L5uamh5Jk4KKVbczaiVkybX45vtGz2Vd7dYdE856vT29RCUPbHuEKad81vNxrZyVWfLxm2bf42gvZvn1aka3nd",
  "key12": "2UhB7XaCvGfwbiLuZcz4eyfwpy3P4aKRr3p2oBSoHrjFhMWpZxKdXPxRsF2iLM47hYqxtcqwAM57iAg5x2oBpQD9",
  "key13": "2sdHURU7PxX6QVUAy8AeqxZ9JBH2hZ9cjkyv5iryLu2dbFtBCQk7R9KfbzTDRh5qemWzfjGow4vtdhxaMpcBpybw",
  "key14": "nuWPiStuP1WyvW84ePU42kCpokGahx4vgMmoTrkKrvRPAhWFyK3Gjuh6suKQrLKNiGnw1Lr4Ar85LLxzVQis8EQ",
  "key15": "4twZDRMCGzxvXvehnnyCtq6sdfCQmLevt9D3FEHGjiqpPXZRBmAfJeAC5aHD5V3Z7MdBw2BATa9PuX79Qu7bDRsu",
  "key16": "5aQJM9b9CTjmzzPN9yMjDJUkQxDTAVmWUAo1pZA2iYTbZFCArcowNckF4RfafY65MaaekmNd1cX6MnnqyhWEu9HX",
  "key17": "3HkmUTADYD5NaGGhNKkmDLVz8gceaPSZH66wnzuKoc91RsEpNxwWpBohzL4w32oTCsJBZMdpaoP2TF2L3Tmbig6H",
  "key18": "3eMajJZRsSftLr6DeSf2UJSY9E5bnLhPjGinW3U3TUe9nJbwL7YDgvJx3xnUpBV86fA6RWrs9vxuzFE8MfXvnM6j",
  "key19": "5ccjkizZFJ2xBrwBrNKWZk8Zed9QV43esvgF2KQDiGm4VqSTbkv3vvtKibTFPt5pfm7SyLqfp7LVhg8pxjRbHZrB",
  "key20": "3YCdH46A5ZbHkdKBSAAwYL97E1fyqfynAx8WpLEhpKkH28eNueNwDADxRpz2t4QEhYKFkAUvucnmdev4hxVqLLYg",
  "key21": "2qRUMiLh3veKn9Rj5eCZP18YyKHESt9jiiu61e47xxmEyhiJ86iMN4itdF7Xen6U7kqvJBbeddGswFpwFgWe56Sx",
  "key22": "3LxMuePRZoqvN8iCKxc6fYZfLbGieqxAsz9PRKhAxu7Yk7B2qzoRC8PViNFV4oCSfLwpePB18fXyehp9THiRGuFV",
  "key23": "4wr7tZLjFf1kaxvjrTFWmuhFoDzKTwFrkNEau6KBYHNyN4CGypU1GDoKzQGEHeB2A2S9eZGjLLN1SXo5gV3Ph3vT",
  "key24": "y1ELPQigEHATYsW3AP9cM451D2FowAd1e7j5FpahUtSCSSschh7PAEcgfNEtaBWsVrUN5WZkWyoxFzgbNbk6fwu"
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
