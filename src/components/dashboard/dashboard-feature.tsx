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
    "2sa1bDB4AG9f7Ahx1xSmh6vv4B26XhDYRhW19dbz8fktcg5HxjTmtdacdABxteK9PsW3tzzeYDQLhw1sUvHN9WSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApKkuHRAubYfjiz48QeruheeQzoubRdXhjAPtkiCG2faF1mPUXymJnbMcNM4e8YVPeCDFhoyT1Cc6xxEtLSy7QB",
  "key1": "4Au3DkvwkgBYbY5QePr9uQ6asosfwATELxNjwnYwn45WimNiKR3jwQaQF17raLjUYSYjGW1t8FLYMYNeiHea4axK",
  "key2": "5CmY5cqgbK8juPBFm8gZ662YePHJR3TFcw5i9g9fCCzqi6VQtdHzVvbvxtCHLdzfSWU1wDYy7tZAwNESHFbbHwBt",
  "key3": "4uQTdfAJFZ1DuXiYYkudNsLV8Wr6GRKN1bWE6FqLaV89VqBBfYtLH8ooX3pnbV3Vo7UkimafTk83n2hv3zZyXTUN",
  "key4": "5o97U6t7U9bp7qtrd1h86zR94s5aA2gvdfYeAwjz5UfDqMxjPJEnc2yfoLbWTFbYVVX76WjrUJ1LqnWKuSjgEpRi",
  "key5": "58WX7eDWiCNJYFC5Sx77oHKsnsvf41BopWDsMKCeZHdjz6gpARNAb5Fo3zMM9ZZcSowAL3PeugrBRKbB1JyQUF9D",
  "key6": "3CKhYZY982VC7UxLdyn7gYdWiM397in6eC3xXngVVmVfwaUE2Zz1VsKszaVPDfo44LU1DC5aMDcdxXX5Bn9hMxz3",
  "key7": "28ZTPeWtCsygpAmQ8Hieg1fwEJEETwDPgxumWpVjrXiSQYwoe8NSiCySWMF4wexRkCk1cftpnabNv2ZBdtLLGZme",
  "key8": "vye58Q3paycFkSL3WxdqrsqxrF6VpBaDsA97hzq7G91nnNQJuUwMAnL2Wdh3d5Mif21jxY2dh3QAddNKPo1ao84",
  "key9": "sqq3gieLn15hayfmaKNFX9H1HivHd1GLwUjUN8RBKD2XyWppuVToBLfPCvx3GjmBmeUTFvFEZq63hzjEZPLBue2",
  "key10": "4NRcfP5KHUyLEFYZAxLHPJpKFsP8F7JwQvbD4k1GvXVuhnY5ptEaHHtpsib97x4AkPK4RdV8cu2AirnQK3maqcRy",
  "key11": "2CaiNzdF4U8Y46cHM4K7uURuJZAdam3v1kTXe78ZwL5cT41uijTNtoXmvyLcQqorYGKAZDnMSm5357VLuYM3oXZw",
  "key12": "23bj4BNwr4yiDa7Z8AVAxUSCsBhta1x428YQ91BS1yJJfgp1jwZ1NMU1JBoH6oJCu6AjqUG4BBem7Z879i6iQcKR",
  "key13": "5tiRnDStjgiyuPSZBM9gw6Wx3gbE1UdbUbVQxVKjatJLWzheQdWnygDURN26RdFyt19SrWEciRDHfeCJzeZAdFQy",
  "key14": "2LvVMYCMqYaerFUKNie7PL4yK3C1K75cMgZB3DRNuE23b5GiJhKQJAYFih94iiYx8pGnHYcLkE99rJ31X7c3HrS8",
  "key15": "5SoxkJFBY3oAfhGQe9HuvAkDWA2KPg5wrCXR1EGujZ9zWr6sm5ETje4c4EMMjKjYhNBF4zVLfDoCLZcGHqb6mMjP",
  "key16": "3fXXAVcraZc4nJpeeVLLW1sVyrGvQdSVYEhpXXTK1SfTaDDEGM74Zan4ogM5i2giW9iCJuJwcN8Crhue47f4D9xA",
  "key17": "3nUsQXhMthC6SJSmWGEQv5ttCKctFEbYoeYsMnjso294wioQsp7CJsyvU6c4S6VfPn5Ra4JLbokw1UPUkrgDYDsp",
  "key18": "B1FNLWifiMX5cYuBkcTBidoAHwDzG4LsdHRXVUZRQzQfT11B7vyLHTJH2es6qQcY6GRLcoWk331jS21yYauJc5f",
  "key19": "rwp6QpyULVaEhVt9aCCV7dbJ49qL218erKhLhcLhEskssagzbttoBgoYA8eT11ji1MM33cKv31c9FuAeoP7cpNE",
  "key20": "2zwwTv4VZtbc3SLgkkcGjsHexB2dEVVsej2umcUjU1gEW1TbU6NTNsWHUokCFNUrpdEQPB4cMHZyyZfrzGKE1Qx6",
  "key21": "2A1MWQASE7BA78H7DJiEyWmcVd7AP6sWxRNXtuSs9Uxg5SU2Jf1v3Jvr76uQFSyoA9hmLrPMgX2VpE8aGnL9PTfk",
  "key22": "LAaT8cC4rgmp11N4xrvMsLn45MJPQNLqBPSiXCEfvJeSdePoEv2oPuZvrpZ8aPsF9dYN9J8541GQV5Pw8nMxPVf",
  "key23": "2Uf1rpVNLKrYSowrQm3kWg3czefTvtsXKD89h8NbXoGwU7LBVFAg29Y1ndShdPJCbiWsNxvLBhXSzSh1nETxGX3t",
  "key24": "37ipSpHMYoPZeyXr6uhd7QLJCxyCvdo2x1dGNZTqi4LLhSukHcq3yjNKgqJbKrE4sWSRLAhxDhChJo5c8ktDs4Jv"
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
