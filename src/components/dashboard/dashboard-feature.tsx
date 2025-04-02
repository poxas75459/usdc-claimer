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
    "5bJyi1rpA2k9yXVbzjHiN1AKCJKEhDSTzbcRh46kVBbLvFZNCxerjDxkNfpJ4sRvsNipfh2ZYRKEMMYbcn2F6G2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhfcB8yiq3vjBZCW3fNdAauzSgmvg2NUMCgpP23csT5C6844Hckv6bfpJYNM2c516YKvTBR4243Mjhk99sj9m78",
  "key1": "Rrqe15hBoiyBZy8QH7z9E2BGf2Q2N6MkPm1gazxzytnroSiZsP8ZY5PxRzob4iWnsmT7ucLdxvTUwWg2h2Zv2JC",
  "key2": "4hDKZyjuWTh9ougWFTi1znc6Cv6ouebu9hmoGq4PizU5GLVjLwb1PXUTa1rfVHitfJdXnmLzZTzMULa4NShy7nNd",
  "key3": "5sJBUWqk6yipeCVuzHAbyjXSmgZuTsWN4pSAbbhnL6do2zDJmgHVcLGkXtdFnFiRspiRzxnCH4cwXkT9giWb8j9q",
  "key4": "43toxD4H4gC56XAaAMqbagPJaHhjBxNBLW7UcyGqrUhnfzqnB2M36gK2TTYCncAcMbVdt2GxLHRY9CfQwh8sc7dw",
  "key5": "h7VtkXAecEJGNVrL9KGKd76cd9dj2aNhH6ivxhgcybvFaGZxUwahRoAZCCc55gETZeMRFtpSZVwbmoycXoi8LNa",
  "key6": "2tjw4gNukCzmB2o33Dkz6gbGm7vL5tvps4FqwqXiNYWJiCjcdr994ocC78ikD5CXRsoSveEwfrdwSJctxownBQEd",
  "key7": "3JgVM4N1cpTLDYWnm5m897gc89FAvWSkAzH9ckCgUKisMxBipaAz9mmdncxjVyMR72oToaDkwzW8M75upWM8XwG5",
  "key8": "2i3ryrw9y3EwXNSFKwScVC8LaCspBuQ3NGzYSfiEkRwtCvRe95NPdsWjd3awrMvDc8Cis3waWi4QCDrPzakz6vSg",
  "key9": "3iUhAxaH9qFdzRDXPjeDXbyoJ3q43H36AANKRqFZisrL8NKkQqp219J8P5kXXovjoyhRLyLRiyMQbkCHoiNn3vWs",
  "key10": "gunCvc1fcnNo6aDhjzVoeobVYmJ84DWSqQWcpZ88vdZruYeAY9wbAViyB2mKQwAJaj8CV7aY7AnCL2L4ZTgYZU2",
  "key11": "3wrfrseQCSmonjQroj6cPDo8G3h2DUpGoHhEYZyjF3sTgQs4LqkTnRRKuGRKHJwrvEDpXdsZrg7tgf7mWf9biS5M",
  "key12": "53nNfFzuBbcekr8dn5f6tHN23LNxJNjgAo9PbGNre9wCQrdjSar4rBzASHSejA1zK1TUNAAZHabsaewQ4i9wy1gK",
  "key13": "49EAD9x3uYxjsfWg3xG7FF4fNnceRM8726TUaSdC7y6H6YpT4Rs4oFYYN9aidkYCypTZP2iHM8SZESJzZJGwyndQ",
  "key14": "2gvxzADFbze23EMx8TGEFPTnB1aeHRj5ZeRtDoSV3cxofvtk8N2PxoowKuQy1auZCNLAztnvTkBf57h7kg8pwSBh",
  "key15": "fYWxA5rZrXzHhRRNpu89zT2YUyjWEbaFu464N8ks9vkGUwCrWS9s13aASkHPmXqZqZGS41CNHJXmG4FmqiZXsmB",
  "key16": "cn42WZwTJZrAQaEoNfk5Kn1eSeqeRHfhJDTCET2qKcbyyWRJKxVLyCppKmTMJA6mUXu9ngng91WV56ZWE5pyXWZ",
  "key17": "35YoLnYbSg6DqejLwE5mzhtMEiPfvRv9EE5HL7i9EGzmVHjY8mimrWNEJraJCDxAyZKV8fC8SsSXqVHN2ZrtLBxC",
  "key18": "42GeMtxp65AbU9sUMCRPmH2qSVriCc2FWY5yeYkjpHhP724SWoNmuTVC7U4zyunGo9pv6v9EHCpfJVJHLXeVsffi",
  "key19": "591HczGRCaWFsWfhzazvN1fQk54bsPZV8qkkQP14NhvAqJSwd5mo5dDeHeNmvt8dvAfJAwn3hFYBfghtRDYinCfK",
  "key20": "2hvCotNhnUSo5tkwNwkKgUSvFH4WmC3KtwZgwhGoFZ8C8MSku2w9qvts44tTr1xRTck1RqD6YFg3ThHDaM1Bbxj3",
  "key21": "ziMPyCVaBvWptCf52nB4ufwe5XygX3KQBxwVoNYEonx5RLaemxtU3qriBSJnXoQRjBz7MfgBc6a2HkCrTJQrcBR",
  "key22": "Y6gYAhF39hmNdJiY3RUa13r8eYsiGLawpQjGjSA2w6cywqngJDcy5skFwLJtRkJ2AXBXfUcTrLpggYDMYYp3HUb",
  "key23": "4uxRibmEc8RaiGYhfM3Q7P5oDA2xzZ5zR71esXdPEnByCCRD7KDkJjn6Ub2jhrhGZTitrrzanyr6faRNDDw3kEkX",
  "key24": "NKgVRizg8rbPkWUa4iw787MQQd25BFXCJrt1pXfVL6WLSrLsxCCWDtHUF6tUUsWmY39FyADdNgQ1VifZnVW5JjS",
  "key25": "4DfSzpChnvYfTAp5szhCE3C7M8yj8V3AiPP7CQfDnVizNkuCWXEXiwMg1DRaEu2vyimgeA1Jp2bZxYXvV1VjULJD",
  "key26": "2NQsPE7i1mVv8ZsQ6Qg3sxdn7zL3QfdXcqcxtT3PzXATezoRHNrLDa92s31U4YW9WiZNqUMtxabi2gDYeBRVpavp",
  "key27": "4Rj9AuMnxA2ickoLuEQeoirebWxUFb1XzNKZdaAkbaBSS9d9FdakugCaq1c9FAGSBtW7Rui6QpgG4BNBzTuuGZhs",
  "key28": "2G6qSALLnyi8dNFEACYd9PpRRtWkurG1ZW5Ht1dTuTH98RHJ4vp2XhwkQZMQdMTGpYa1SYLdvrTyMRCy8gRdhUHo",
  "key29": "5hVTnDqFH2wi4mUy75akpSieBMXYWQh4nxghs8tmNcpeEGbK7BvMJAezCo7PtASzxsEdjYbK9kGv9LXiAgdmWxbd"
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
