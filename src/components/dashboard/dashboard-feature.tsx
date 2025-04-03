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
    "32kig7Qf6ZnC5GEdTb53AJ1MThngvtafdpcVW92vskmZx6ZHkUF8cTAgzUj4hdCHBtFDXm9z2CkWsxZDxAMk49JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tm6nBpfzfdUbShDNnyQyFFiz2dh3LbqobTdyJrgSykPMS7PTrVie6Fmvdav21P2mKq4AVXPpujD8nY5sc9nKFLc",
  "key1": "4r3yFuSnnhgc88tKmVTcfUsSFPFEHCAjn9JB5TuaqAa9viTxozKCjUUUkhDFuuc6KXCsK4m5C4f8eYW7PCv61PTw",
  "key2": "5t9NnLaYgxr7zcicpJriNTUrVfpTGFa6TGAD6XQHapKHyVRMMedhnrnaTV4KN2XzoKL9ZvqoeBF9EDaFapG8U2YF",
  "key3": "5eBDMrzUKJqHUYFmEJUq1dL2akd1EBH2hYX1xJ6HBBSyVmFH8MrkGejj7bpho6VvUXhSZQTa8bcYKSdfv22rSM4X",
  "key4": "5GX9VZrftEwLkBpQSju5AwzDLGFVyHULudXKKczFDsWZsktCx8aFHAH6rWW7RVryNPhaXN7RbWvVwJfe3ZbAkMWJ",
  "key5": "4wvwjtzmGTLUy6PWgJtPPg2oDKg9qhvwGRado5iXgjECceK8YZQjfNkqKaJbkTx6DEC15mZYoPdWzbj235HhUssC",
  "key6": "9KgH14yHWgSyN3MbYHLrfpdfputGo3keceycDgZknXkY3YGAab6DtiY2ujEsn7aCFkCggCMGvRk5pYWPSzKfdQF",
  "key7": "4EHzp28xUMosFG8ubt8Qp4go8KgEikwBzddb3aGuZPbeaxMJYsS5sg3M4NwxhG7qczdmHrsjnKx5Wk6SKTGsVqTt",
  "key8": "3jeQvX4kubdLnyoaZQu3MKMbxyqn6T8Y2vrUpHchS1oqEqEXn5zsk8oV8zgfrDkkj9dcwZ5Swm2JJxAMA6qfy12J",
  "key9": "q8PUH7LUiAYpuicqn4foAkoGQ1qzeBddZwCvRr3ATNY1eqsLixN3Q8uJhspPQ2S1Wj4Hs5bst8wCXwM9PTyMirZ",
  "key10": "3Ta98sGLZqQDvtWHQuR9CMiujRe8GBEh7AFBdZaw3qWmgZ76MZWkHK67zY6G6qbL7j3wFASsGv9tVg7NTunXCodw",
  "key11": "2UKY5A5dsmCPfHgyAsTebJ9Esda8NE4c86Q1SJKAZoajrQrHmzp68JVY6HkZJRWfzaMs2GY6impeWMEfdhm3fCDU",
  "key12": "RDeYdGKThbTYAAX9qMMp7ui1eDJtP99uDezRGmFqsRteUVsQ2tUJWyZwsL8L36yZznLZ2nSNfxrCuxyoVqaGodv",
  "key13": "5Ys2sJ67AEBuqbA3bhCSrkQea81yiX7AVa52oDNqhVRmGs8ivWBJGnq9qFuqpV6rGfCBo7QJ5ZFzsSf95yMgXwnK",
  "key14": "2GjAVLYh8qKRUs56j1p3KTKnhaJDvpdhVthnARq1EnnkCRVwMoKmfSBuBCkqEfdD3nz3xms4E71e9zAugEZDw1Fk",
  "key15": "3y9Wonp4UsWKvgLucvS3VxeGSNuaip8QrKta85GGxrHigvK8Jp2HRMCpG2VeC3xbN4qyFPXN92jjphyyX99nX2cm",
  "key16": "2D1FNGGiWSmXFfGCPFWEuKkcSAD4smfLMdyD43WA8ctzTkZdLVZYsDA9QPWaWKMG1mqPLB7hx6GSnqU5DLzxSMnN",
  "key17": "3NcLKgZdZj43DuZnfKPUfMh5VkSJ25zxmDAH7Da5UT8RV4K1SUbLd2GCsVSn2s6XG6fgSZwQxVWNJHHFYNkHq29Z",
  "key18": "5HnMacs6KRz14Gi4bKEkr54FayjsMFHXfbQPFfZ8X6rwNMgibCfk4rJD6fek8Z5xhfsUQ8ZXTwVMXdooiKDM6SQj",
  "key19": "5UrajZYQA8BYE9NHEHcvNPvQT1y9TVFArMiLPUSxgVqAjLKL8RiRvyY4hYciU7uR8wkRe43rVYcbzVVsP6XwU2Ah",
  "key20": "sCGktEnRziBkHiNDxBzNw2AyQydJgsVgnLmW7QApsK6Skvkr5ZSiK8hnAXy2ah51ycfC1JtofYF2Cm7kJWFsCzA",
  "key21": "MpTzUpTuzsBd6sZ1cCtg5ako3uHRchs2GBuDbqyePFjWrr5Ef2VyyyfGgoHk7ta5tCgUkmSYyakLLEsGtSNZRVG",
  "key22": "4JXSGhPYmzZLXvatYMuRZ1SiF7ZpUh6bXuSDxUzm8pPchuydZKhiCyK5KDGBNkhJAh3H4NANx14rHNrJ1R3p64PY",
  "key23": "sQ2aijBp6pwxMR4x17RVr81Gg2bknc6mNKh37ZUnMvFNVhKBSJJrbptuM3CjJ4PeAQKgp9H77ZnpBoJPCtNnxJm",
  "key24": "cR5rhyVBxSumwH1hheof5TqjMVkgoMCWHPfxXLezwyNXAX6TF2AbDMi55mD12NdK5mtZ41rXX9EXDzhbPS2moVK",
  "key25": "orkyMtg8nVNqdLKELhpA7nwSZV6Y3d4yUfaRaq511s2hhcbfkSY8F6oS649bdAWSPFMEPPtcnrpRx8Av3rqHuTM",
  "key26": "3CWAf4NQ77qs6ZzJhQ8gd8hFwApPVep4MwYwe9Qw4pM9R2EXqwM82FZo6yG2727xn2gYtcwBVaHL3B7Lo9cCaT6Y",
  "key27": "2P6et97ywnLgAAMG7u37ckCgDW6ne8Lx1QiiG9qAYQyTZbvhVncxdgB1u16RNE4HJ699MfkbSNsDN6sKvQNqUnWv",
  "key28": "5nTy5dfReNten64ocNg1dkycFjtAjdaJYTmCspGpAxq57ZFiW2oJcvGvo7czuCnz8q2FGCDz2KuUsntgMskAhchM",
  "key29": "25b6BLb9MpDCXLFqDhcNxfqMhgUFTiqjCKwjbNrUnDWZtxjBGXLWWLQLUmxZPqYzRem4nhJtjswBTpgsV9GtBv3h"
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
