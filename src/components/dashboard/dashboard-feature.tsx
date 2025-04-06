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
    "589vqrusFTidXtLXPpSLY45e2vgHUZyfxZsou6jB6PRn62Sdy7KZWSJdHVsofA3BNaLvrTg7WJWopyHz2jAQZoGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpuk58sroGdjGQD4tiadspCVnk6LQEtMWe6Ja2qkmbEAh11RdSWtV8MKkfsPK73X8yzNtnrdGJwy6WNUAMPn2Wb",
  "key1": "4KPRocSqukp6dgg93UMmCvW6jyU1mSeTFBzoSWXZs3F456AFTCdFchJSGmFeKK6tvgSsfvbztcXwt6cPUjeszN4L",
  "key2": "5VBEpQBio4ebMGyH4DJbBKcWKAfsEk25gXVZnatzMj9UyxH7ZgEGSRnEvWJ6X1WC1n4vQxgZMnvqwifbgW4fmvFD",
  "key3": "3PzdW8GLmmt8GAJ5JAG53xythYuDifq9BWyFbnK2vsWMSa4wgqyMUBS2vywK6BwNXfWZJrbsAviQnYifwVTy2DVE",
  "key4": "eJaxyaujC2MG6jqCfoinerdmYi8TGaSZ3cvMsKL6CRZuKuP9MefrGySRwi1bKHYgZoRniynPXtArSvNALLn7nRp",
  "key5": "2azeKk43zecn8LixZvXoCZnYcAEzWF39Cd1bavsAJnctA2nFyvnpRVsw7zjRYMzvwAsYijfFhFBUPxDCB8kQAkZ9",
  "key6": "6pCbjETwSoTBC8Q5nqSwyoemVD3oSQgGBY8YhXobCYNHaeyptoAFnhBp96rvRqGDQd82vehuorm81Ma5T9fqswh",
  "key7": "mo2PotXdg4hntayA9LwkLdV3VYp596EY82mQsamWET7E67nVZWapCyeH8vxD3bwXW9t2vgiHPQwCVSmRye33d4x",
  "key8": "3fCu9h9ED7iy4HopxTtTeogGMe5W19cxTzeH5NQp1TUTpuCz8JcADFXoEqcyssurDCSww5xjgkbvbZ4yT5TCDbrn",
  "key9": "8HKYz7BfHiM2Xss1AT5a91srQMdPt2u2mvoPPnBoEGqBnynyD7xwDNZCK2A7HLaNRWw4EQqs8DVSBbMCVnYUe2B",
  "key10": "5pUKf6taJNoWb7RAKJjBB46A54EYjHLHirfXGZ5zYZarZ9PzikaY58S7sdUc4dtEBxVJBXW1Gi37mwYTEoq7XGwo",
  "key11": "57qqogSsoE44HLkBdNHNo2cPPTrTdX3FQt8VMi9ZjRgtVWcdgAb3uEQUyNyBGerGC7eiwg8jdeHwY514GJibjWyT",
  "key12": "31x5Zo4mBnZ4DhGtMi5cTgHZT63ZJk8oxWes5p4Q3hcBs4o5Aj8r5xE26eQAdbHsqJGGnd13Ms9D1cpAH1zCQsEm",
  "key13": "55PNBcpd58szrU2MzxLPVFSxbN1BD8FqVVFMq2LBWtgnQQSEhRMKe5yR2WoCkAamwzf2wzzs5MBhAuZkVoNZGhYa",
  "key14": "3Dn2XdV8PDEs3dUC3wwon8g7VQD7A2HapzjnKZCrv5PkqZSQjQ3fkRmEKh6SJwXcfE8ck2S5upVKbtuihX82mLam",
  "key15": "2ETS9z7JwwaeWvLYduESWEGxW1E1vv5zfoYbGFWG5BquUh39vd1wLJWjamMmg5Y5JPiMdYt71VkD4zqYvgRUmqYn",
  "key16": "a2CXQcVwvSxDtVbStkTycwB6Rky2r9q717PxhYTGMczBQq9Z7gx5ecUrYUSGWpkbYXT2xhvwpkw2oAbJcdRnMHw",
  "key17": "27CaaL38pDoSkdS5qDoH2ZKV7D8bpFZP81doajsWY43oepDJmz5cTg2LDdbeRF9YZ6tCcUmFUu223TksdoKNS2Gz",
  "key18": "4ny4ijnasaxCBx5YKmzJd6zyhZxZDx6X4dXJFQhrPeS7xJrwm1FBfmhzsbg1kwxDW95pgkXgtdWiSodDsrLxWtTb",
  "key19": "2QEqsxRw3wuMkg9i8nZGLjdpaEQTNxUyYZmN3g9NY4TzAoo5NMnpcykNW4tpuocu4zvusv6yBXbw1DBeaAdDao9f",
  "key20": "5ZW9vpiQ94NNiUnBDLV4SXv5XAoYD4txpWcraKoM6upPt66NAjjWTYDRzn9NXWLhkerPWHC5eoLvWcfpMZQgx72d",
  "key21": "2fiAmiYkn6BDPv8Ym4wp4RefrUt8SSfxYTBXBtv3DQK6zDXRaRFiDvGDdeEt8FgmdpCEwkWKXiGMjMda7w8SSBbU",
  "key22": "2hhXPtQFcdVgAJFqGtX8gHi1XC55HbRPKWCpx7g4zTxkehbjU8GMnf8XTqr63EsLLFUyMBLcU7CdEmavXrs3NzfF",
  "key23": "yTDziLi92sF4Af7ea9ArHebqVy9ZScoYZkjtcD5rwCH7ba9XdFRuE2JHwxKLnR7TkrXioP3TvLLnes5jpoqk8Jf",
  "key24": "3wXd4GuxLFAnhwpoh5oBNDEeUwGcAnE8w8WfnkpdcmHRs73VMRaVxoCuVkK2jcSv8vtTdND3p6tx5gAQwLjxtntY",
  "key25": "2UYDzxLQD1JBtPEjk7ReqUeTta4UA8yHZuLK7gkJhgL6jhN49hnXYuBQUBQKX1dQisCz53CXByQvZvrhjFaUNNU3"
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
