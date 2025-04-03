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
    "37WWHx3rZSwfjj8MUyre5DWa32w7ATxfGiVfTGH4S5wsLCLfyUDncXod5Uk4h7VQG6fdmeyiTFAg21se8A3ySfgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEqabg26gCaEk2Ug3xJy7RYRWQDoGn3LbHdCVE4sR9dtwAuSh6XuNAhA5ezPkEuW9LWFomhANoKtG3Bw5uSfEMj",
  "key1": "24mdPfmU9Quh9ZFATmvsqemXXmZVqJ2mUvo6yto85iXVmxeCL1J9ZZNZMq4h2SK4zC22cCYg9WCxj7gsh6ceLGt9",
  "key2": "5hmXjreErJMPmpPbXZmVU2E1pWmH4W9W5rkHSbpohrqhfguDMr6FxD6LhPAaHRrFSsEmUwfu2GfM9FbebdhDwvk1",
  "key3": "4tc6X5DLvRAKuMtTyhC7cHPxXMRa9Tr6ECse8oD54vg3SwzuYxDij7vd6NHUQgZmN73Vzj7d2ksfBsxiH96jkHxF",
  "key4": "5y6SdvezDo1b8UiwUERzFH2T4CzbWFg4h1AZ8g91q1GMS8oEgeMMxouYpi5wxmPHEsyAYPP51op3TgXJ5schycvN",
  "key5": "5WpNaaFMrx5pVCwxanQUx8XUJ7sCREoF6pmnzf9djVNnX4KQRCR9BKkBQv2VzYyr9PyxEVXif2uqT9tVuqBitciS",
  "key6": "4QVW7hP4LZ7doSggHJugnF1U5G9rtsPskyjakcQa7Y7XVUyL5n3JDFxfeQMAecrG7bqiHepF7X4UMb4fwH9uihcn",
  "key7": "3chDqNyAAmcHoqSMveRSyBjMgscpprf4pETcT2jpR2S1MHDSkEDhtWU6NWsURXb6SS4exzRTBW6p2BgSFgZ6s2vz",
  "key8": "5vnWZsTkV9JewSQ1VobRMwNS1Qhenim8ubphR2vqqhPzUF21HPJATj372KNRpwshp8ahAgyfgWa1vPxTVVzw5DWF",
  "key9": "2uc85S6zx8ViDNruMg6JKGJqGAGweaB27LxhsCZuKdnh8FuYd2LrC6LQhFTPVQk5q29eRzz85bXUCoMURzzVa4Xj",
  "key10": "2PNwMqaPK2vCTnHePVGnsqZAbZyuXaQUqbdgxa2faKoEAueZFAayg3Urq9fZG787JcUvTGMPHMCXXPQYHnT1RwAG",
  "key11": "5goJptdBBFtJ6Mond1th4KMjWV1rtKmvYzAGVaotHqYg1nuPCknXgHUcwH9jwfQaXeN8JdPza7euCNkAVWJbLfT9",
  "key12": "41VtzFQMXR8wrERtUCRyrndPC8q3SQBo1evUiQFAZ1avfzUPcGnDkjqYYFioArnyfZirGJrtTd3UwzBjBU7DGQVU",
  "key13": "4XbB5md36CCDTEhSs1JAc6C7Z3QntbAiFN8TgCu7dJSZYuYoEYe5pdEm5dEi2i9NrkKGT8CzoptnhziBiuwRDcUg",
  "key14": "3pMjCMFrbe8XXZEPqVTtHit72eenXNKdP6vHtjpDFiz7xzsCZbhSFBTfKrzWxT6JZ7u6FfsiNkPHJz5Qync8yBwV",
  "key15": "KETKhAmKTjCxYzDVmScAWxkhnGc6tFHQHCsTsGMLoPVpGsisHmVnnEXkerLYZUQJ4963vmjVVr7M4w7jorR5ufx",
  "key16": "D48rjgtwcuU4EM8kFynMorbXPqqDoTejvziMyNKmmXMmU58CeKRyyJ1Wq15AxXqDEW2APGstUvPpKLuo7PS2Dzc",
  "key17": "2pUZUgd4Avi7khQ5f2Wwk9wkSLn2aQZX4HZC27YuXmiuNpBkMQbFrfi91Eav48SrnWrAou9MivFTQbBToEV13Rin",
  "key18": "AWD5Ptt8t4ZEHQiNZQGPEt14WWeQY1cUbDqiRDWER74kuDhJM99Rrgcvwjs8U82vZvv63nMtcFF1yyGVaNhuh6k",
  "key19": "59cs2w4c5ZAXkYzdjfA2wA3tkAsDag4FQ3z16uJsG8c5HFNoH446hvrVoWWZyHEuKnn3bqUhrNoexPZ5RWJj3TpR",
  "key20": "fC8j7MVwwDssSNQgASsudbh8TUgYgvyHwyr6FmhXVer4c7T1AY7EGT4hzPcWerGan93QpogR4rkvn9Sxrw3SSiH",
  "key21": "tYGmtxhrzYCsT8QYqi4utG3qgtrkD8xSHPk12bHxdjXAwbUsedmj39pbVbXp9Z5A2oVepxFV2VqSPyW5gZjK81Z",
  "key22": "3Bp24L4xP7AxTmnXNRL5EXCyW9dwtaoNGFEjGUse4rEzrp4FDrrqt4qYgmmpgV82hFYv5xij9bFM8wrNuubgi5d7",
  "key23": "2QeZ8NdpKRKAfuw3FSTRBg88cepRMQRhu1tcYHuhdkek3UrGSLK3tqD2WtdvQAHdv3ePWuvBgTGby63AM3s2DrnG",
  "key24": "22Ds5RuSahFwnz1pekepb5JNFkLEyvYWME1LNf78mJyFU1Z9z8aDuXQ6UycodsEbwrc3LR66MzHsXLVAXnve8QsK",
  "key25": "t1PogtzcPfXNQSVySpt9QdYw9cxAeyN1p6o6VZBH9X96uNhbKSLCrJCzbPt99rmvXuK524XWrrsBBLh9mutC9FA",
  "key26": "6rzSW6oHztL1SHWG2PYhJuJxjNgkf5aGg3Z4eBYim8wir7gYZYfKvs72C2p2A9Uz3Z5861UzHb5ckX5kZujRkfj",
  "key27": "5H13ZD6cLEKDswFsXYvSVZKNPxZQAMaWpMkqLRmRhQJKJwFDCMoDESjRyWvqm2p9gLuBD8HyT29vmVzBAqEMoixn",
  "key28": "2nH83dmeutZDcFNjSNqKxuu6Dsk32EJj3TXxbiWDMLqzME943sZ7Y3NXKkX7QgMnAGJTCfpuUp64HZHFHjQvF63w"
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
