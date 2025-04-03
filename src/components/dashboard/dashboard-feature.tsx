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
    "vKtyTpSq6SNrcScQYDJTSKkTTptsUJhiBQKAUA6B7ckupVvqbvWjJaJwCApVLihLRa8EHhi2Vq54LU7bmuodCMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRgvtnDGanTPQeQE2FKMSP3SdrR8tYf9MPF5UMLPSoTthimpfSV4oKJk7K2of9gyx2VmaRouottsZoFWQ7Tppri",
  "key1": "4Sn3A2BnwtPej512MhHz9wEbwqY797KPPoxWJV6VLRsiyBJ8B6FzpXte6E4tHPLDp3dvnDcTYgouLBdgbtL6Cnth",
  "key2": "4zjy58urtaTVjSAaqoKBW1ki6Yy7uZK3g5Ba1LppkNxa6oVtqpjJDg9L7ba4zAm1wXHn9YFjscTAyjN4b2KM7o2q",
  "key3": "5PzisEJ3fYTAz3Yhbe3P8SzhZsiyePUaT8keSt4xS3vPWbVu5BeMGNKByivMJ1uQ3Lp9HYozuEtzaNZRQXgVRbNG",
  "key4": "2cpUVaXnVvuJLsZJVeU93RfsMUVpJ8c42e47wzuTWqxKk9g1uQJLoGsxbWxc1fui8QJKe3LY6M3gU7bmK41YyWTt",
  "key5": "4PiYBb8wAog4bm8dq4z5Ycb1hAESycR3dhRBVKNrCKV7K69yqanuJjXf22LTbUx3Nz5Gc1FRgXtEWkVyE7FHnRPn",
  "key6": "2CqiKpVVStx1F9vcscht1YEvvEnGHpV1YyR3FEDyvus26f38VgzKjtmUSLK66NqPMqmZLYExjxNf7axuS5wLgbwY",
  "key7": "4pDtdwtcQ8qwrrj98JVBQVACjygDvaWZq9vFy4bFXNTNXwMCPoDsaRot6jJCXpb1egwq7JHMKuGmuGx7YpDbjCSv",
  "key8": "57nzjzBr5L43EUuxeMXVPvdpEHPXkAWDQCite9d3a4QP6WrVXbub2uCh6zN7q6JABjcGNodMd5ro5JFQgxTpSZyz",
  "key9": "5uQjaCAYkeY31jecUtDEVjCBXz8tYSSuSVuQHXs6WBpNDKHQYcsWyHrEi6bjB5teYXm1YiUWFuw1HR5EKvhbbYN9",
  "key10": "2eF5wTUgMU8C5xTRw4VufWVvpKTtj3j7vxKD1z2GeRocXffMYRewqPgTC4LGV1UjSf2qPTa1opyf3iHqMqCM9YvD",
  "key11": "44BarAf9mzPBnZEehdeYsEvXJMEHa3fzU9eJAan9TYhpQVesq5iezfMQfGeDQs3qpyydYAVGAG2JNeo4GjLWpfyo",
  "key12": "vURr3pwcMKS5EWKpaVrThnnMR4mYL3EZ9D5KoXsvDNh8Kp8bXd1toqa2HQPM9Yh7kVhnTNBn1gyHHE41a3MN4Nj",
  "key13": "5jZJVTw5ZEEXi9enFnBbdh7y6ccUCCzmehExU6pSJ2ao828CFzYtfdCc2eqZXsn4ygxd73UMWtGQdpQDuDDKKsTc",
  "key14": "58nP2SS8xzneC22dkVqrhL52hQtkcEpsYwZfcGws9LkyDTBQrosRggrJVNdDyrQrFsU6WxXqkbdirW6Y8QXQ22KP",
  "key15": "2EEmzTQZiYbbrpTrgbnzvo9sGPnVhdidZWTipipVssVSZ8eLP8GiXWCmYDoms6Y5Tvohy8AhhBTzoc6TBBkb4eh7",
  "key16": "4eRVrYa8TeokEDpM1XYy5uJqPjMJG4Fy4xrUeH2sRcvKqCUuPSnPGdnjD986wiVGqWgcJG41TUR9v4K3qQQGhVFz",
  "key17": "477sqxbpgjQ36Nr9eEwMDZzhwcB8mBYtxJfZZhiyRiDHboLXCSYnVKb5GpBqk6PE5ApdAx5RUjfiHhZ1MiEEnRbi",
  "key18": "3UWHs6tXPzhYjoZq7BFNypsFaYQheZVVJzY3mvNPwJ4DRXhn92ewgb6iWgRqoxuLUe6QYxRRfyjFXzgmqsniQnge",
  "key19": "4Hizgwm2oKGpg1rpqCzEUHsMAt2hxwwkwX3wRkeKNm1soBQtumQffsmKJ58E4vzS5qf9NsRPRfGXV2SR3qju7VUZ",
  "key20": "3ExfhJkpCPqdgjhtMCGx2iyYoWHowQLnG41yc5DdXHMuV3TYzcNGsmRjyscKQhQaFF1SXVRbNhq1sfCRrPsoL8D6",
  "key21": "3oRYPfrwLfp8Fz9RQSrtXMXrdWxmindfyyU7HvfVvFjdhj74hhY6LX3zCJUALAHHCtwa9b7Zx49HVtDwbVWRfhn7",
  "key22": "49gdZGusuXZ8dhjTGefQUSuoDSLDPZkkCtrmKx2pe2nPMiScgWLNn6y5mqVGmx4xoUMfuShP3tMZaZMpWeYDafPS",
  "key23": "RaMuFoQFeGkVv4QvCLKiu87VK4dnTXMrtVcjXrEziangxn5JRgH8dFZ5AmZwgnhpw7kQNpxU7nFcLZdpsvL5iPA",
  "key24": "2bL3BBbFRHwX7X52XPpcmuLRsxTv9omNFAKftCu626HPGcUpnLm9m4aYrFxoALajrbafRcCoivdCtWRLUVYM8XXs",
  "key25": "5XtMVd1d5gkCiynie2CiU59erGpn7LfUtrJsJZCUWcSMhcZxEy5wLggNFeSG3o6XDB2qZpqALSdNLv9kPGANWp9N",
  "key26": "rYj9Fc5BhJT54B9HHFrLZGeEuj2LJMSP8Z4bqimiGdkfbrPB5HP3e9geMmTCV1hnpwiTJENTX91HJGkkT33Cts2",
  "key27": "61BZ5N5XaxUewga3zAoAb8JS3JMypvc3u6pN3AukNgKtCe49o7V1o84Vi3Uuu91NNatdYpVG1UeEyNzaMFUpx7Dc",
  "key28": "45B26Nyq98MCekzobjFfbjzVWmH2ArWM3wUCUns2mS9spRLyfCsXSbFu3KLBc6x648z7ntWDowRSnY48gsz5oNtq"
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
