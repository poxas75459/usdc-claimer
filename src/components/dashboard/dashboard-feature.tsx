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
    "2FBtmevp4zqjYzS95vdqFbsXvBLwPCP5WkYgm4e6j4jHoPSmYL223dDwFe2gszw4y9V2HibzTNRYxvvH2adon912"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yF7HdPdiUuLvfqzoCkLPv95ZbBSLC1194y94Cb5qhFVqrV45UTfkG3EGGtXHMXWroWADFHyGTYoco6aRgHBzMpi",
  "key1": "4EGFdEP6uBkk4RJXWzL4KB6VHUjrH5TYyRSq9eiqkWKE5pJ9tas4FwsFMMMwxqwqg58nxk4n4fBxUdSatYCCDuHq",
  "key2": "49cDPkxptCsFDENLycbizvJgKU7iApK3JCch5dDDoa4gARQQLQCE2C4GzS9jERiTUMQQ1SZqwBK4Xuf8VgYrsqFW",
  "key3": "4ZMfxTNFuPjrGZefQTD9FLBhRMYrEFGfrietyaZeZaV7dsUa965dAngWsxux3XcjEb6WbzrMpQD8xVwQ2bu9NMk4",
  "key4": "etjgZQVUTGGyQuEfDDG6p5EjMaxuSnnVtDPpP3Z3o1sSXCtwqsaNHJr9xG8hRjgtVAdsbms26PLj7QzaQqC2vsR",
  "key5": "4c8zxG51TzWBoBZcKsMTaNNMmnWJ4Q8DwoUmU72rLNmRCe53P1QznVeN2sWTz69oJLvE3nr1VVzPPMjNMS3Qgv9v",
  "key6": "3qFarqh2YPgpFA3g3dFiep6Mh65oExVrMWj5ByTLmwGZML8dPwgLgc2eaLMqVmioWrZB16iUM22W8qo3FkVboFht",
  "key7": "4bMRPs9iFJAzVP86YQ6UThExyXi3WEKEEQ8qKQGZ1rEb4dokbQfc1UtEEXyd9pEGrUvUA2bWnmZDuKueBgrVGSPa",
  "key8": "5wUdYmUVCLTi2EC8MVRaxUe6utFkvxjkPpwxr6dcxUfx2JNKw5ax3foghsR46rVRaMtisdaEof6kid1AJw6unsBA",
  "key9": "4z6LCKQ33gpbXE9wVrXM5vkR7w1sGBnaRwkvuiUkZF9yysJkt6ty65fnzhqJvZ4pZcaCUMnuuf7kLjtV9HcDviPz",
  "key10": "1TQ4LcZHy98qT7t3XvE5Szk7Q6yU96VGkau5KRrBW6fZkzdp2PhuoDEFmEtdmzjVYWD5sipMySEEfvXcRzjWn4Y",
  "key11": "3TdwnN3Yoh4Z1pcArvuJuWvydPVfwWvZ5ou4qXPWJf9CxJ8BD7MxRTCfR6sE1svhzUMT9HaLjJn6ZU6N8BhvR6sT",
  "key12": "4HrGAzo53L5kiNWkhNUbCJ57j6z2cdGA624vbMhhyX8jyueT6LBjZKkNsgbCLUjECnUw7GuNuje2iSLSJ6497Upx",
  "key13": "5qyUJng33WXX5wyBNUfJAatx9S1xifEcQeP6qsthnpc8LDziofjwJU4LDBusVxRgkHHFhnjQAv4NTZKEDhCrcCnr",
  "key14": "4cg8e7zgTA8yZNWu4vDNhqYHMgKEeAYh42HpGsZEBtee7vFD94dwqp9yjbWqBqLWbXBzgZMn7cFME2gVL7HiYueG",
  "key15": "2XukAUD3BQeWx2D4DqFyxdmTXzr25R9oeXDbRrGMbzum2cmmCSMEf7z1st4B6xdsTmyZmXP8DpZa9uv1vwHEETgv",
  "key16": "89xJBTGC9NziQmuNy4w4fhhEx4B1ebDz88QSt5pjwTKP8cvdSVakWsZzZamRBHkTFGkJ2Zm2jXrsdnCqJUvTjDe",
  "key17": "oZGXnaoYq4cD39nxV4sSfJa8oPqnDcpHhyu8tjHdp7BYBTdFUFFu9YUXn3amUbVekCGi8HQrioY3YDpHZAq8tyX",
  "key18": "4BbYpcmgaiiayGZSuSVsDRbxNBamJTw9sSEWDLVgGu9SSG93icfsRDKVE3s4yVuivRnk1nkxNSRSqC7Gecats3Ws",
  "key19": "2pUw8QtL19UfdfXFn5e9qawWyGqn31dgWygq7Bn9dEDNs74oWWT8XvJLmNJ7cfAX7jpRjbJUYQEFGpaB5rhAgiis",
  "key20": "Ya9M1oGtoCoPhtSfeXHzFGiv29XwbFTVWy7fhW2Ytu5wT3daDsocEfAHhQsxCTvNiN4sCRp4dVLavBtJavXUFC3",
  "key21": "tKRPSeLUhECd5LH1xR6hyQVfC447UCyWNmU3LdPJef9JM56QC3b9KjYK6cimUi7BrjMJvPFssWaYfUtzF4aWFkZ",
  "key22": "joE13HSELqbWryZh5D5prtVaUSEp9toWSLXuCmaRtALiBQNPXCb541gd39UCrd4sbkiNYX3on6Rd6qXJdX9rkMe",
  "key23": "2SApuNCLfmSMRPn7E7pRLHyBnqgHf5uo59Te8tJeA3iEgDB7WSdMJcZshNncUrKDVWt6QuHAUh9cb9nba6jXXFjY",
  "key24": "4dYMnneux3uBwjFEhBJzdrWjzMV8LTiXzyp1dLLQj86qNHYyRd2Ss1e3ZuWEhGqzqquavDcqQNazk6bXthLhwFt5",
  "key25": "595zd4BnEFXr9haibAZcQ6puYCriKZfYMdC6UgxiaVc1Qgok9ZUK4aWa8fCJPDUK6LRfNXEsHAKnhsQCn2UNwy8h"
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
