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
    "4cBDXPobEnXqx8jrLRuVYjm8HVsUdEcsU82rDg1DiZeNVSC3dCwPVpDvkxqYu83ww9Y52SKcXmwiLNFk7ZCx78Kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvM5FTZ3ptdctfECUymjJFaPNmaW4t4TEEq1yfSdPsQrnvWq8W4qV4weDyXnv1Uj7wrFRXw36CqgWxPK1bBV3JQ",
  "key1": "5eGDNFQHhyhJVtr1aEgzQwS4vP8y1WngjAunyRP5xBuFFYRMVXbbYSjM6zkuDxpi9acFbyLAuysL6QVtNDW6zpHR",
  "key2": "5fcr25wfGoYa6vXdQb57knm7Xfr9W8jcDdpdbm7dg2aNfmPFX7XR2xDboeWaEFSVcUEHE3QiWs7gPP6uFHMbrbpX",
  "key3": "3duZpQw5vLpCmMwyJiFnvgSTaGhhgXHPhLdUXDtWKbpfnnVumTkGNs3fr5f3nnYGUSyoqyvtPUNsqwE6m1BHxuAa",
  "key4": "NGcgqAthtSuvV6t2tgvu6S3ykSoBUh8R5SYGgfdZWpGiGbGi3S5YNoq1sYNm4E29eYXixbPE6iDGLfUcLzTvE9T",
  "key5": "5YAjVgPfVPvSQdC2G2PqwzcCsTsBhYeYNt5NAgeVzMJvomyCw6kpH6xzmSD21R3iovsPSV59T3GqDRvwd2Z3uSYs",
  "key6": "4oKAs4zUDNwykoAsSw8tjymDy6zABgastRqEcZp4sFzCvNQkfBFAREX7VE5MfByiKxEhkxE9kR4HDeZAFuhPEgPp",
  "key7": "269fRagTjqowuDwdRQEpZxeAwabCYsFofL3aMgNBAUiiYP5GaqHtkFawC3Ls9kmQgXR1YQ2k44PY8FukSEA5xwA3",
  "key8": "21LZxM1NdJj5V8GNmhrSkHuvN46RcRGcuqKsqnCrYSgVA6FKdkJqkisxNgEqsi71uU2NPVyfn1dWQyEUGei2HWzr",
  "key9": "2L7AUs3pbrwAiB6UwMDtAenbVWBQ8iBFq7Gu37SdNiAWwUY2Z53XLdDCrDgqfWjFghr1WywS67wwDfWNXGYjpvC7",
  "key10": "z2GEc6VzMFkYTdyNow4aBQ5tu7eVibJfBhbgvc4pyhnEmvXnzYF1ogAWGcLfcmep5AfBvZfanxt1TrFufhbU9QH",
  "key11": "kpam98Atv6Y6pZceYBtzxEFr8HVw2BDEzksSPXwj8CkCwHVKrHkvAXVswiPPGm5fpd213K4oXfvmPPq6g9cqh5e",
  "key12": "51bz3euSizeQbL4sYV6scvWj6k3tJ9n6Vd3TLRtF4YWicHqthbbm61X7baR9LrdKDZjQq8PCd3K4ruRKQhM3EuvK",
  "key13": "35RmYUppxQP2EyEsSk9imN2HN7AtxMrbc8v9r1JuZSyWZgemgJs187LGkZMRc8GaR4smt53AzSUW8qnUQ1xEARK2",
  "key14": "26eCikxjD6vkqQLZHvYTp8Te69pSdJ58suhEQCrYDrErbqhSJ54zJDoPn7dQ2ds4G4WytvZEUM8BVK1cLvHSCndb",
  "key15": "2Zo81BVeNpL5QbNCg6wo2xJSuyKaUKAAYQccTu27sWk4cSmsv9PXiAViTwWQtQJmjmwsJXRfdZWBUhXKhgZNZ7iA",
  "key16": "uENNwxwt62isDbx8f5bqfLsncjxGEVacBWNRP1PRNJDStiPFnxq8rSFo82FnpYk5nbAgLTZWogt2SC4o8ARhDAu",
  "key17": "4h7X1cVreo1FvmStZxiyM5gUcNYFVqbXpFAxSNgFZQ4UsgFBGkg1pHi4aWkCTDM2fWiSB2inXeovBrQuax96geDA",
  "key18": "3KFgQpRQVui92VdVgr5z9kHzJ9WhViMsBQMHm2te6PaQgVx4E334UAQ8VykeF26f9FiFWVV69c1ZsqQm5DYxCRvU",
  "key19": "CLZ5KmSmKVsM35k8ZD3i823uoC4AMdjQPmD39pYuFrzmB7xRheB8eyPGRGgYPNiufaikdzF5TT4DjjRi8D1sUXH",
  "key20": "4hkXUPUjgkDtm3FKxXAFJDEpYRnrLhd3fyWTAVDay5XkJZWPPz6dENLDJiCPjVAt4LbLxoMkfmqgZ2kx8YoGnobq",
  "key21": "ePBNDAe4seyNQtFcKXzaXtC8Ko6sbveShGusiWDtbXd8qFGRuZ6MdGMRXTULF5BXKeKy2rC5RWArC1SgXFeYW5V",
  "key22": "21DvBqN6S2K1Na7GSGiMhwqETND8ot8Z7kB9MtZ6KDn9pTzoPqJgwo3fvqYcz8VxPmq3J5wKwRisFmsmrPAtqAsU",
  "key23": "mxytxWQEivzrMQNhCviGKeqhH8ybyUou3qCzQGizoaP5FtKoP1Uy7ckmGHnfsQ4RjXUQ2mtJygrqMVxbKdbL7gC",
  "key24": "31YVxX2PJnEjopqBi6xz6r7nuVJKnNpQfVCpziBM2jEH81YWrPYQ4Co6g4jRV2kyAzsDzyojix9hS5ZjRS4uk8hd"
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
