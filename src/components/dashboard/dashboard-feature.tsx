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
    "gAZsp9UaeM9WFr4CKj4GfXy5MsUxycm1H8AkJSnAhX3gaLFcgaqRAEBiJiiHCb4sWyLpXWuWuABPFRgAtHpj8f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HxmM86Ahx14kBFGXcBKdAnSjNbWNZ4pdL999zs3crccJs1SqtD7t7BrnwEw1BXWDLkXeyj7sfmZSLpLHGyVjWbQ",
  "key1": "r4xWWruqheW38ijHpVJfUeNHYsP6Da44zfnUu4inCZjPY8ee8Niq3hCDWscgsgENUEmGAyYGUn5RUdD5SHov5vP",
  "key2": "59Tn2ssePYWzqSv4badxgypfEsaLNxWk23j7T5HG2TosJ9YAontdu1hSShUg4YToBr4r7AoxkaN3BuvrabngUqE",
  "key3": "48cfkrU7FjYMNsDvEUZ1WbE3NomX9hUoJNEiuFhzecneERLazgxMhqsqiSctVJPgo9wiq9uC5qVpCyzd6BdpDpsq",
  "key4": "393uLmuskJtBinGTY2sfpoMLFoPssjUBosPksod8xPoVqDcMWksVqiTHhoRjcxeaA7nH5LiSuFGS3ZnmLJoMBbim",
  "key5": "431TiVch2Tt1bufsnwcYzuqxx9mBVj5n6yC4mDNUhBju8xYafE79M4ittjYBLKTu5XbpR7faaW1VFd2RUrbkfCsd",
  "key6": "2thRpw1YTSkSP8ZJCoC4Lw3yLQYo3dth6oppHFeMo3124zutuoCu4TQmAdKAJJCHjodzzv2oScn2NQ6uqPjqVkZk",
  "key7": "5FGP7JqmMU1UdyJurLySMbTo3FXgubu8vkpAtmajoaj2mGzLNatX151qSW41DBELK9aVuo6Kyf8cRtWgjsaAVb2J",
  "key8": "27cU7qsF9sZaitgc79Ji5PGigAevqbhbcDBU3jABVm5VXHbbmspP8XuUaVjPR5QDHrwkRRYQhTjb3Qrw2dqed5hE",
  "key9": "2SPT5qAjQbqmkXq4PCoJ98DDrzZm5WED96bUoHS7vCiJEmGwLTCut39LcEYEKSek2RetVFc6qKWaW7DxvvaFjk8K",
  "key10": "4Lg1B3e6uSy992RRPJT4AbPLGsSkJHA2f4pK9iL7aGUGQAN2c4LBxSuYCdgor1aC59nrQkuthFsGHhpp52fSy1u",
  "key11": "4S58C2weDDBtUAMoMgurVnseRkdJAmKaiMGsngjNnJMNJJkkvGcAUaDeG495n7vzvpiTVsWdCDx4M84HCLttnr1f",
  "key12": "2XSNfFjmgGUEeLWKsumiKLmouQpCteiyVEjapaDRrrk9BJoywyEKACm5HL4dPPbhxy2QGPtVBVV9eNU6YGCZPNmK",
  "key13": "4pangNxmTQ699Uy7p8C5JMbECYuRzXeWoDT9XnW4EyGGsYQUXFEsNnQSdAVmezga9BnyDe9dcSs7ZF4GPDx4r2eT",
  "key14": "2UE75QRgzWkWZQNUj8NsJrC2GzMMSXNH76EcWJDzGMydZaYo3AYTLtCVQGhfjLYsZyZZr58Wn6w1HHdWWms6DiJR",
  "key15": "4BZS5CWfEBcs17JUZkAA1QbjNnZWD43cYDZojQ9YLjjcdRRWKNCJ8Mu8LrJZQnvd5cEeJ4trBokth7TBJe3PuvgQ",
  "key16": "2W3zcBDt5zc62pQi32iL1W9aA489b7toUdm1qi7S5Y9k9s3tzd7jEzGuTRMgTSuhYir5E56C9Ro4XX922qYU7FhY",
  "key17": "SYZ9dWeadtwmxUv9kcNyxD2KxRRV4HKTQ3nzwyc7oWVMtZTGDRRx1zzsQVJsKedV4RVPxHT6Sih3UAebhvDq9Hw",
  "key18": "3vXs85Ca4iYgbqLYefj7rydcufhUsBJzWfUByqKvb799T2uVcekv8mg8FyWGDA47M7vauZZyY76wrkqtP5RNnUwH",
  "key19": "p3oVQE7B9fcfdSczBJYGa1AEEURzLGq6LustMk8c6PGEuZNj5QNGa2EmUEseWk7xnqsbpyCRDVerM9StQWRbTCw",
  "key20": "pUX2qyDhuviHPZTPhCW9anTmtox1j2EFxA4QDAEpZpZTgETfykH29Hzv7dD8kKsrBzs5DzPDQJZhw9R6djDfkcF",
  "key21": "w9VFbfqxKorN8uhMudd1bSVLJgjQHEWTqX7TB6aMTxF1kTEc6wgxrsqKjpAX5fpHwR7Y5x7WwSLM4zcG2ymFe6j",
  "key22": "wsgRYKh4zB8D7mNZdNm4n1muQ8y2i2K3TrL91cCt2FkGcXhgRgiCiHLafyBDpZVNVR91dirnhbN61RGk1avzWWT",
  "key23": "65fPHQz9RbfVjhoyxLkHcLQq6xFtonzTcstJTtEw8vz6a21aAdX9CxyJYqkcGjLxMNQdUGevXExy2vF8183QUkv6",
  "key24": "2vxuRqnH5pMfiPWteVsT9JuSMdL2sHVix2yBCw7GR9pXTi5MV9CyyH4TxM254P48GHbD2FfkyvALrvXkJedh4JBc",
  "key25": "5HyhK58Bbc5bnyfEdAJMRTFDTsn6hEQovdC3ZDFAniskYY8C2Xgy2QzacWWCJ2RuYVmtG6vVuvwrVPu4TovbmDkJ",
  "key26": "27xCpKpRfjUXj6i691VnJbzWNaiytYjt1vrEL2xigJCfFmMMHxk973ibU1Yxrvrom6mz5ciS3JJULeaV9kHjKJ3F"
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
