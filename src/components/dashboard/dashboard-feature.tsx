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
    "5Y7rXoaRi4GKhNrRLByy1UgZwK2mzaNoBrL6dmsJkLJfVW4qJWs9CeqiucoLxwKQcy5ZJFrHaaJ9qtjHdx1z9mfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25WKyLdbJxFDE2YW69ryUJWkKqbzhFem35SftXEw7FWePUNEStyVSsLEeTidRTxiyH22i9FVC8SETj7npJHkQgYA",
  "key1": "4iZbmQetkwEPx7MJQZreAxdyQXrj878cQHiHHD4JPAYCVVNks7nzj6G4RFAEzePAMB3rC4ni4YiyJXKADGqoK3v4",
  "key2": "hsN4QR4vxqYWJuyEoB1j2prWqKrdW8dngUk2PMsPS4AighCoraUxsAw9mRt6KX77k3sUVRJjXeWDEtDscXow7N5",
  "key3": "5ThRGFyHiCb5asNXsSQHqWSWBXhrHg6foh3ZCUBy5FW7cKiTnSSo74sQfWvDx6g75aPALbm81LTSBfajRAQf8LEA",
  "key4": "4dwB8hwTwG8qNud7svdH81ESYCd3RDbCWMsxcQGLzp48Lis9qMDbQE8r77ooXBDPWt59BSoQsxJrX1QZD5ZofeBF",
  "key5": "3sQSMwWcENQ2estm1P4g879JEd6JbnqGjU5uNd7SKpMMJchT7hAAWAZHXbAJL2WpERWY2bocw1KBM93b7p9XCqfU",
  "key6": "46BSxqinsbwrHDuT4oDqBSZqDEqntdNk7joiqB6y4JkJMTxvFwVHNY2Ep7Nb9tSoBAA2M6NSpQWoDzQUG4m7xTCC",
  "key7": "5McbAKW3sxCpesTGNQFZWUmRZ18YGg9sFs8w3V31TfifVhcwMdg2m62oCxC8eonBi3jKtnbQq44QcY5yLjdXKaHV",
  "key8": "2NVLX8dhiSYV8n2veArgKHKH5ffgRKRJW71rMyp7FXrh4FdLoFuGym2GCw3f9F6Qx1BMmdNRj9RHFzyWJZFJHeTE",
  "key9": "5i6vKwQmUf2HnV8XbTyWEScArhtA2xkWHPvtLEhqiDzzSesp5RaaC2WFuYwdZREkKXs5UcuWtYwERBG3iSiKk8jf",
  "key10": "3RRhq29CF46NQxCKsCz9iT3yBAsjAEZuHvMtwWJZCshVmPsrqSws8ufNS1ZRFJZ7phgYKipFgyUUzPhiJfEn5zvj",
  "key11": "3w8qwLLcHAnKdjxqCY7RJvFkMtyA4TGHLToiZsze3Ngb2dM6uQRoTYZ81yFyP7gKDWHwz361kPUGgX3354wY2SPd",
  "key12": "3eH29gLzd7EJ1fZbJC8ZA4Zt7sUQp2KAUyeFcKBHsgYAyTRgouW9qaYD1VTKYnZKHwoH4aPMBu8pdMBvJw98nL8j",
  "key13": "4waifQt2JvrB8rvQrFKzoMxmPLm23qtpUeKRHqrfpS1zZnRzS36UpdFarX2kyF64UFiEVvm8x3eppRhY2tBwc69c",
  "key14": "5etqVixp6EjmxWqyazgpH4zEwd3SY6uqPvdq64ELUyfnRNZhuVknQt7WpWWEjHfxFiMzjAdx4Xdk2Dttam8BCeTr",
  "key15": "5K5yV2K5MrN3HXnZKzdodSD64JQ4nUAhDtibQ8YJ7SzNkbyEDNEXxWYb9XxH7am9R9pzvys8W5And7DgZ2coLT8m",
  "key16": "2THB4uZWWL1hqDBKPPzVndgXaPgXLjHxrmjyWFNB7aHzLDMgqSBRXKdD9AwweYG5CGEyuzQ4sDwySWS9sprvCTX6",
  "key17": "2sLP21HZZGrXzuy9LQE6b6GrxAH9i75Mv5N8xozW1AMQjiQkd2QwXusdVDEdeZokuT5Z9hDq6yhrPZ65YyqJgLDf",
  "key18": "NTX4SB8EHJLmBXjcUCEUEBK6uNbKDnK5fp5Jx8VN6ubAYNiaN564zQtXnLvwBYZo2pMMw9oV5KJxnHBJ92qyJFG",
  "key19": "3icnnS8KpUgPQM9qkeX12QpRaQ31AixCmaHGYbb7fXkceXNp5h1uiDhmawJsoYPSvAshJHWmHhUdqqbD4rHhjt1w",
  "key20": "aRKBqjVgd2vvWMQhAk7YmWWDENYnYjApgz9mpDvwg2R6hMmvwfNkqUqdkW2vTgWswBq9eLBbbCiNkTL8zxmdbd3",
  "key21": "2fxcBqpV8DrEDJdVAsWShqb5eNUXzHbMd9aHkrwGDo4sToB6QFreyLBeh93hr3qN4omueS1YTncv7QJLaWUtQGfi",
  "key22": "5Ebc6N2ttF7wggdBo6ueZD9QLmj2XVRdo72BcZq9SHukmij2NWoazk2PQjjx56neYuZYrSw32f66VhsH3Enq2vvk",
  "key23": "4yu5rkJFVrkLGMsmKJeLJwnbMGnAxiZZLhPgPSsnBYdR3NNvQ8Y12ggFmm5ZqzuZKZa74Tb2j86zsNwyxCy4KJiQ",
  "key24": "3c7CH3gsXTb2KUcVnMFKEgrKPcjt412wyqmkfLcFPJeuH6LCw3d2yaTEjKSsRwYiUfMYCfg5y3br4AkmadMdCXuh",
  "key25": "2dLJmtWL9BRqNznQUz4SLbRsgUY78ice9zgn14mpMXcHkDnmmkGphaSitaRvPRoJuNykuLYk7goAckVeVVVoHJ3L",
  "key26": "2snjHUyHF6aXuQYx7r4zMpSPz2aUanUayjRom7gpkCjDaBhiAfPrUxzDQQNRNFz7E7S4i6xug1iVDyX1r5V52YZR",
  "key27": "3W2nTDBrEAdFDjKj1TeRLKiJu3sE6HV1EDRdKamT7guD8cp4jP1pTK1mtBfdivP8BJeg8NAGGe32pe6TZxecM3oC",
  "key28": "2txgUyXgdGnhVJnMnANwNoWFS7e5J8XuXJ5cCWBXrazDDccHRE3HBNrQToCA715HSHBViSqeMvvAyzQXbExtymZo",
  "key29": "47k69P53QVucdvizvhsrTtf334bVQHCTKY3xz9xbeYjUfx1Jr3hjVhikoVA455SPHjZMracyK7p94q6EPTPAvnky",
  "key30": "xAfuySsRndVBoz4ShbTfzAgXC84RxbDwDDGscMz37iHWRVc8NAQrgVhrkJWULVmcLbPCLRStJNTUemVnbJ7Fk5s",
  "key31": "2nbJGcinKKaVQptE4WyoxEEsQq3XJ73JAEXC6favtm3fv4AJVJ4NFEaafN1VnDxY9qkQ3qKM2PYYUu9e8kqWBBBB",
  "key32": "4SzrYBiUkFKV6Uq1Ti7urDK6qwEn3BnuHHhSnzE6jW41o151sUxsr9jnncFpySQh8GfsV6oazR2eYQ1tFYFxvBQF",
  "key33": "5cjGuVERJr6PyBpBuGDSh8DodLYpWZrWtTUXYw5JRdtEprQDZfgwJM7w1dd18XSjEdeRG1EZvitYV5FNxCLLsxU1",
  "key34": "3SjgwSCeXsEo2QUqfZPEcXeh7JoWiEJYKSgb2YaXuoaQ2RVbQtJCjaxX1dTEG5gYkCH2nAUGeMJSMVA3wg3Hpua1",
  "key35": "3xDQnZ7SyBSKcWafopo6AfswaZVaAxM4maYXUk9JbqXM3FiZSAXPMnCw1Pv8EWzL4zxyCfNi2s4sz9Q4X2zwqQeL",
  "key36": "34jCxZjAbLdqUf4acryt5w63Rx9VJDpUwSNELbTcrHKrdMrnPyKPYQ5ghdn6VmUCEzR5T3an5K3jvz59FpmnwBSj",
  "key37": "5iytmAc94hqJnpPzkMEi5Jjhsn4bneYWxg9K3PCVmbhCKRno38Nu1EPe7dUz7UGaEdE5U2DJieUqo891e6vjh4cS",
  "key38": "zYEzSk2DD962pAAXFCk7vBQLrDhkCjY4CN7EWge5LPgvqNMv1JUjCHBkuEHJ9dFHxouC2KzbLxUXXq4zN7dcuup",
  "key39": "3kPfnMf1GC47nvrmpFZaMssaWu3wfhLY3CwSVdYAP2iRb2ZPYDZ4ES6QwHrv2gdaRK4cNZRYxSbW1KHg3tFQvC7z",
  "key40": "2nPkFkgqsm7hRw9f1dejjPq6tUfreJuZQCApwjq7jfUB4ySG8dVpYrE8qtKSxnxiy9E6FbDW8GHEF4zfzJyVNf4M",
  "key41": "4jxzQadKgEhhnjgexpyH4A1Y1Pcgjgv6Y3swutumaLpCCQQD9AUBwpdjxt9aDpwG3oY5F8g3sjqNK5pbu3rFCoyP",
  "key42": "HoJAicgN8t9FguUWcYZBzXB5KaiDPizFddEAEV4f6JSkv1CxwupPML4y3bAqcXAdDEp2LmRZXCrFKUYyb7ZR4Pd"
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
