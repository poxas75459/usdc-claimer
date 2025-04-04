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
    "31WsW3pr6Q35s4zLo22dV12ZdQqEZCia8CoPTciVVeGwz5CeRcRyWdK54B2zG8HbJFnz8uTkJtoVLe2dH1fLY1PT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSnwyPoUMT1F2DDhQj1W9fAAPwYssqBFmS73iVyQ6sKYdX7LFedp7YnQBoLcwBpLippTnejZvkUHVCc6FQMVA74",
  "key1": "2ymSmJvoVdTgVUZkHVBWA8PverVT5EW81V4N1dF51Yq2J7xQjpe3fMisJfoQpo3PSuJhjFQfH2ewbmP5DKeEm2mZ",
  "key2": "4uiwphrPYAR6xPE4oqV8ghDta3K8CyrWsFeJ6emvPzxc5vHwomCuhaTBGB65waAt4y3TMU2Cg1NRLYNvsvhtv8uz",
  "key3": "53PKzRrgx4rBns1wqKAd4fxm7yFFiWiunbWeyKFFcviM4BPsuedyZy9dpFwvsyZLGyXxavDNi5vAMTzyjHFgzcNC",
  "key4": "qoQpZMyZQTc7sAjQGHwnLiH4y3YygfdJfgVAWyBZPb8vmTatSi8fTnLaxCrXYGfgndWgmMB6sLsS64H2zAcU6CT",
  "key5": "5acTP7b7T41Pv3AYwrzhavB13qnquHvZQPRJSxwhwSud6LNB3Tt6eNtLD6wdhopuz6zqPFxPw1JyaB3q79gdJgjv",
  "key6": "5po5e6cPMUKGrbnWhvVJ2vY5VGibzEXYz7e8jAyqB3jM67jgk2Aihz6L3ta7rTufM2jKUKpwBTfuXmuKWL68dJD8",
  "key7": "3BaQHCtmgumkumh7a9JtrhyjaojiWnw7zPtSBWPyKvjYgHpeYAtRCCkgU2Q44Wo3hbgugdQ5ujL88CnBvBXGLvT",
  "key8": "4NQC5h2jDCcb5n7j6TKUmcqM4H3z61ZCGQBUMV9VpE1uqaxntoCNaZMHiENirLPZVYexky9w6k9cYNNsi9MAbpJM",
  "key9": "5DDVtkJVYaGEAu8SsDMinJu3zSfy9PqpT4mZrxrSQaYiy8XXHnf79SQP49n8Sf7kQwhcCaA1653JDCPk5F23EpQC",
  "key10": "4cqoCWHc1KeqbYqhSuKzVfbQpdbRgzDoG6naH5RV9nPbUHLnUSspcDqYyNjFEDm4S8KNSCNeyuJUzZNdTToQY4u9",
  "key11": "4q8snwKYyP7qf91Sy5BwXaSmmbfrRgwoadbuXGQkRTr32aRnhWXFZ9uC343bfvXkwS1ixvmQKsZbrMUsfY5U6m1Y",
  "key12": "jkg5zQC4xkQ1pzGSSEBQi7Er2KnFSJgdbZHVZjMFZrLHoqpffaq7xsUa74p5N4Q4a6QcP1eZ7J1obqNb3TMjrvJ",
  "key13": "2Gm9MAnpjn5Ckden2GZZGUPzGH1gFHRS3ikkmXWqxwFDL4dhMbWzr6diMS9rynRq65nLMmta956cZicJpvawir1j",
  "key14": "3T2XkD3SmeXYbjvP98jdwh5EncwPrxjcZC98n8UiN4zwTRTqEgUnkNz4rbmRQoT7JfJH3pksvzbAUgggKhA6SVoD",
  "key15": "5uEXx34H2D2t2nkKXa6DPpNLkdnQfVei635YbjFKRS2P55h6j7HowMe47ZL2GLGrC3Hg8n5mrXuMZDt9ubq6kh9G",
  "key16": "4sAuPxutHRgZCrcVX7yMWH9Jum2jxUEt2iAwLic7jioxUVPG6y5HxfKV2PjZHKDaLXaP3iNw37wgNb7fDHFBU1Xt",
  "key17": "2XGa27pcW3mQ1KCyF3mr5h1vnA1K3VuRsqhJstZwoVzZKM2MViXBSr6MWSPYAzBfaAs8d2eGY93uj9bRZXwTBP87",
  "key18": "5H2Ht7yAckvBSG7PnGkRyhJQYYPsgtnPctmxtMPXn8htAbNV83fsia55VbQfgmjGbhwCDCfutUXdLSbTApNCanGg",
  "key19": "4gztQqh21HjhoqYR2k3FpwUZhP25yo897eq5hCDL5aP3u56FwjiArRNhmsTYy8nfKCGNnCX4NoXApmJVnJifTBdQ",
  "key20": "4qFe87KxpupNxmDUYsD5VzL3dMGW1fxe2sE4P5fqWb9gFJuPBukpp21Lwn8392maDMte6dXJmaTKDDU7y7Tuh6AC",
  "key21": "3LoLtMcSu1GKwmHWSXWn3sjefeMNU6aD77Kwj6ZKsbpEy4w1TTQVRUgHyt2GWSyJ8eGSmoaVvLUd1xe4CQEuSJ4q",
  "key22": "4xaDxBoaTYYUFpUhQx5cEB4ENApenhWZcb7oSeDfwwHWYKmrw9egfmUEvtKriLGm5k89jFMZLmRZYsYHeoLN41Jt",
  "key23": "SSM2crqoGoToQxXoQBbGDbnwRBhvtSC8n27xVtxuU2323ZppAissDA8SjMt9WNn9RrKpA49cUzehCvZFZQ5Ewcu",
  "key24": "5ZUx4e5EUw3qVqLoSPtZmdvx35PXyBYMPSR5sxSyHNy5S4Ed8DDRqdjv5DhGdKu2RchRCJbo24fnoCn5Hz2TBZAR",
  "key25": "iZKqKWQ1M9TUx1UNPidDXBRUx2zoC3fFrX32V3woFYEGTgZ6Bhci8TCwV3RmaBK8XiFuj8PZm4PwgdnzM6UGp9j",
  "key26": "4swkZ7JqCm9ZSZfed2t1GQmgg7itxp1n9b5W7r92Z9Q3fcdUhSHxVuP1QLHrxnv7GNY1eXMsifcQT1KN97aCEmyX",
  "key27": "5gkB8SVnwTcrryQPgq32wA1QH7XnserkcFJ3NwFZoFqdKfSAGp85EaptMyXtK5RyCepoGrWTqfUVvBp7ocjzz4Wc",
  "key28": "3pVYY3kjFuHwMMtwa6SSJaT9UGDBSFHEPAnRpsLY62GmUaaVF7Mpw2Eymom4gin3ZCvy1hros8eVx8nAXk5Rb1eC",
  "key29": "5WfN7Yaw3ZkYPFtje8KUra84mNy2VNMZNaazEWUzfs9K7WW3LGsbTQccBJVKTwV7V49AwCa6nVMntqitpRnd4x8a",
  "key30": "5RoeYqHUx4sDA9uMHh3bXFAwRy1t6J9BPKpndmR6n8TiErFvJBBXFavomCurtLXCzsENkhYYUEcAuaigYXh9f29C",
  "key31": "5aiVUCFjrUh6EgxRz46bPXGtNMFXDujp1eHMY3aa3C5Z5yZjFY5PMReQ2USSNzfuyQYB7w1TGUQx8ADQvrD2Uthd",
  "key32": "5KnYkG6uNCXCsRDqi8vRfksUrRK7rvEWV7QAkn7DfGdzZtgQn78yiqMZUhWJFP296BtBuMPo4gZzsdg5GxMT7dEU",
  "key33": "2x18R9go814TczXxP1KZu465md1mpqePSaNkvNf3zyTU4zRy3VB6a1831k4CpKmfbsDzkgav3Pb1Cg9hCsd4wMA7",
  "key34": "27nqsTMDdkoGfnEMmRPNio9f4hMwxHBLiYoQucTiQosQXyZbuEpiFeEYv3DuMCx3F9jzNmPEffwo36ZKRbv1FunF"
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
