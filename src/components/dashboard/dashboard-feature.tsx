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
    "2o3ZbuQKnTb7cBL1GQ4FSbdSsrYGFEYbZ84P7ULFCEhB5w2yiKGC7ZtbXiLGMyd4Mx45ZEfLRVfactSfX6UewrH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kua911inGJSgMk5AbQRUd4miXjp45667eYMJSekbasMWiyEvgEpHPAP4H51fCXe4PFsa3E4zfnqXV36T2M2kxFM",
  "key1": "3UNv7rKxLFt2J1oVs7SuRmGJztLnMFtgt7iY2D7nWfERCgEfctfowGbs9695BSZPEsBPY2sApJNp8FS7AoHhvqGq",
  "key2": "FE4oG1umueHdgYPHcusQGBxnTSrCbSG1Yvt14xNmvqwMB8HPr6PjwrRrtNBLLMcQ1n477WUpsTydeS4aN2X1CN9",
  "key3": "NxXiKK98ftCD7YBrjevScwGBzapib9nThFHejVkdqwiTGHuJb7wTiLJR9qhSbLcb2Ync5PnmJEoiTkN1qnxvoz5",
  "key4": "4fVFukm7YHxvwBrg371qvD7UA7ocaPkKxSerhXTVXeAtTZRtqPTmmwjNuuuhP4MYetyxUTY3LZ4GR6Fx382zj4Mw",
  "key5": "1JRaRjvmxfeT5VeJ2ZdB1r6JUQsDaGDq8Epif9H4jVz9o1HnuT6jdot4jYFGVrPjdbdo2bAHyyxY7YPSo5tPp5U",
  "key6": "62VwA5iSm6YhsLEPr9nkGV1zrEiSfPzefqVHCfo3P6Expk7Xgh8ekkAwKxG3Y8vwF3rF2KKCg5nRpoU53zuPNkG6",
  "key7": "hmwPADsmsQUyQSXuiowKasHCMmaHmf6SUVm25DGSvFyRxhKYoPDhEuEQo4g1WT2LaDwNcUsSpMfopPLRSKtuuS5",
  "key8": "54qnt6AV8m1ke8Eq8cB21dnYsUUXMo2X84qxA9eHdfRcg1R1TmsWMMCCcDitLgjJM1tqjx2TYyVTwS3KyDEiaHKP",
  "key9": "4VSV5Sj1Cb2nbVE2n2JCANPkKD8G812gq7igAQ8KoZ4FwSjD39Js9onKwajFj27rtg1hDzZfRTmeKKRha4sTSXJP",
  "key10": "4xdwZb1cThWqzmtg8J6GqZqjawZvKEo65a3cRaZi1Aeyg8ACTWdSN2P1HRehZx1xcC3HPov8X26FrgdxemRmKVfH",
  "key11": "ssGytdN54KYkyZZcmkD3xKr5ELtHUm6NsEsRKvaNvYLYghKFJdcnSezRNQb7FSe7HwEwukSU4pem4EL3VkqsUEV",
  "key12": "2Gg6UVVLQf2FboJxy9dDaFX4bjyVbtxGMzv9c25j3u8S8NY1JGEQH5hpvMiZikm6edtiQrsnqukyg6J5yvWMufGE",
  "key13": "3nZkrD6pDsp1kMSj94ty2x3BgaKrshgCY8PZ7twmuCnd9XhJ7ssVKbp6JciEPn7WKy4vs5GK9KaiqmK1zyX8A73S",
  "key14": "7TMgYaoQbJjrZegPGNRPTcoc2tziFYoLaEmZw1D5ZnprdDhChLk9jq4SGXbU7q5k1Vz826Yjqx1nRqMUdnpkbm4",
  "key15": "2D1jRCtSCNYuvsUZ7aPDdgFfZ4kqn963dQr74Ev62gbsC6zRWsxTNRM1jChd7VCRYMSSmEFbK9CLN5us4EbXDXst",
  "key16": "2XMZRMLh1eNRRjk3iUqWUumF48Ve4sRt1it6QXCxBrs7euuw7wSJ91FNB8HbAAYYWt2jom1pYmdc3b1so9HkHm2S",
  "key17": "4iubuvkEBHgZruKspwZcr7FKUvq574dXJe675sRt7kRjrNnkeyZVcq8EYPVRZwD7xmUjeUNS9MChzV5JQWeVrXoB",
  "key18": "4LKuqD9qkpyaDDWDzqtmSPQ7AFghDdcyxmTb8iNucaaPmo7nrR7iRX9z4YhuUwpG7XY1PtrrUKeBmMDZuEwr1pUK",
  "key19": "5DckTpJu1ACMjvXVtT6a7KmefoHttHz6ATVUte63nGLUgBy63uA5KMFdxA8PdQC1KfhEaiERTpy5SVWJPGF3AEXR",
  "key20": "2sXWjXPxN7eqXfAjfXgVZKsYBujDnCT88oDmkxdzYV5r7fpYVshoFGddGzmcTvGkainytj2y8m73QcFcf1CTq4GT",
  "key21": "2bPeWFb5Fyy4bNCtgZXB4TbUGNwaxZoiZAu44u3NUjpMhkVSgYfpLZFfixnAMqfYWwYHubpwyJJA9RAxzfSLFVJ4",
  "key22": "5PXFSH9MgoQbYFA8ykuu7fYwszisJsMk9rXGmMACbMaVB8ocv8KRAeDKHA4VYQLE65cZnKoUKKVho7qjCqkLuGah",
  "key23": "36zukgE9vM8Aq7hazRAPAUVj6EAvZsyA2gi3FjV2Eb2vTQtvtcRp2Y2AJka5gq8uHTUwVGM8eTk5z4QmecYTDqdy",
  "key24": "4NW7urD6go2L9yhTEvJ3bHApXb9UfEPbt23V5vMEykJYpVH1cQKRB4JMh9wLH2SR6PrLu9ayEhuEX9sWNS6u2Mwu",
  "key25": "61jqVELv2mWm8VGhWeoBRfDhZhcSS6e9PfZUHHd3jmcyd7JJSWRPFUzBX4JfS8YyzXdkq5MafjvSEmzJ86XRJRvE",
  "key26": "2x8wKyaWowyFZY7jR5YWmomdK7sG1bh37PiouzGWg4kWWHeAE4KsihS2f9iRda6ySr2GaHFSvU2Fivy28F58VWgD",
  "key27": "5QPiXooseA6ybyfpzEAXa6AuufzT2RHqt2HuyHCeB4YjLKuvvVV4RJsKx8WAErtbSboT5SvY2rXPWVAChjp45ikJ",
  "key28": "2TcuujT3noNPCZbZkbF5JW8qWnLofVB18Vx7RstQU6aK8hhUpcHYqQ4dUrR68i95Mco37apQZMopmtMed9Jsy9Xj",
  "key29": "4nfJ5zKegwvRaP7geu8SD3giym2SLtS5taxsAancipiBAPaXXLEHrwnJvqxbqq4mFnnWghpE4Xkc8bv3nePXFBf4",
  "key30": "2814VKiSrhw1w2WPw5nmNRNnEfdHMvbsRmwCtT1KWod34u3FwUJ2GgRziYFWL1FiUA8sVfna3QvoGwG6FXfP5FK2"
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
