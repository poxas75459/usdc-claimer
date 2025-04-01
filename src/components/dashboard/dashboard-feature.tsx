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
    "4Td3oorsFWyh9bTfhQuPVSb1vg4B6yCLDmptLUyfx5738YVjpQtocVbzhyvwrDjTdQkw1gmcyR2MA3bVcLMLJZxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6xzdy4FrWsVPQea4Mpz6jbcwCqzggTbEimFZbUYaXnK42LBwHhFEX2BxMyxincJcQXHMuQsrJu7XCRZ6Z9SVR9",
  "key1": "5GzoP2cDY3GJFsqg2xW9yZRpAMrXge8N6kSz3cqrGqakC7tKp1JGyQsK4JLgNTitjsEkmDbbwtmvUp6kuf9GLQ1m",
  "key2": "RUJ1Ux3L8A15iBigiqT5SWES6pF2fu8j54tao5e3YmPCrzFfA18oV1HMxsvp2uwrowrB5cVtUEGq1DWYLNpmNzT",
  "key3": "dmo1qDrHou4dqhGHEsv69fJQJXZHye9FDLvdj86W4q2gwowGbTGteSvy5Ro6wXpmSmFRwAkTsUxwVFyLf64yaCR",
  "key4": "3qV8mGs8vv2kuWkeL3QczuQdepmavEQpJYPWXkSDs2zhe6BgeQTPLqKkZyqFVrc8ysNQQYuYvGNg88vV8tkX8GA5",
  "key5": "2YSeMmG1Zy7opPXybD36VBXniSYuputWW5EuCLW7phSQuBjM2wD8jbBqPM5PCLoisfWPbKRZopW5sN4E42DryuzT",
  "key6": "4KQ66WCRHx2bCpNhPhgrSQUXaDhfKi9FWLnQnHpQQjPmJx2Pc298oj6kYtcYo7SrTjqCEwBskTXvwZz738YTSPUY",
  "key7": "3bw8Pszvxum7UCnbk4hmoR2tshh7avJYS3F1TSohzTGtRG9pou9uadn5nGbXYNQwEX6PDqKj5mBK4PWTVqnyCU9K",
  "key8": "4tVyo2wkdGmUbefqsfj1gHbGnbinHXeYYesikMgtGccehga3SGR2Q4cwprSpg9GhDpectHHHipvZNtFs75mxhWe7",
  "key9": "3iS6DgjAioEGxNDbeoPcpLfnD5WqtGwNsNiUbUG6FfGLTaGUKQc5yihCvT6rv332LCQcMPfionMYEDdgQL3z2oDR",
  "key10": "5MAEBHzmkc2JBd7pyLhNkCu6idEGMUvgagZHyQb1K7suktGfDNL7EPXgbqzigY2oaE3PbexwN2Gfhn7wqUDtW7Th",
  "key11": "2eq7pZKf577Rj8KkEjTcGpYPK9R36z4qPwfKDKVesBELEptxjYwep5U3dderGFDU7xACDvwUWGTuXSkZyYHYZd6Q",
  "key12": "2dPdVgfztTtLwgFRc4ioNSM5bZmSMJSV9BCiUJHqz2GE9bQdSfjKGYVqZCYSJsBxREQa9mFhVKW8ZuTLrJRh3WyM",
  "key13": "3ARhBCKUMDtbg43tcsqx3xJpL49DDZCUyfBfZcepsN8Cm2fjHTBj6HqyHhD4B7qyE1a2wCV26dHS91PzLveGTNcg",
  "key14": "5GB274WhYhZfUTsrurGWSNmwdkdZvZhARK6Ut1LMp7CGJm63iQgdcMCKmbz8cGWFL6MQsDa5SAx8gz9RQ7jdDqfv",
  "key15": "2cHcje6T7LKCrjsexX9hdV64MXjppx95LMuQW21mMJwA2dgx3P8gRj6PudKqZmcCqHmR83TwPXLjuDeyX9dMVrRi",
  "key16": "4X8MEwacW12YXznzMbXbrzGhw6v3KJRToH6pwrjwECQG28CRxYjAgjhRH16PcCi5QpMSPUiDbtqVBG3XDQLGV1kz",
  "key17": "4ec2wD5XZzWwTpN6kUQ38x7TWsc2EAU2AHspXrcYbqhDS8rmfNYJD9R3ZDftKg8ye9DX2YWGqCHPNSEDKPaD6PfT",
  "key18": "2UiNZGNR9pSbhFhAaaYjNpVfyD9dGR6NjSZdJvZ9suKeBvGTaH6DSNsutXK3XyZ7S1kXDojsweXiR1hpsznrfDou",
  "key19": "5JZgADWEaXja6rZjjNzbUf32TFQDywaukKSLDmZCsWSHVt6PGbPvUxXvYzS3NmCc7bnx5cP7Fib8AZCbyod3gChU",
  "key20": "5BKhx9csz2XYANtArdyK9sYWLU9pUGpC3HKUvvS7nz6Gr8VHnQ7WqRMPCBut2NpDbSConifhP43vmgfLV4YKz6aE",
  "key21": "mikopeNWRmJCpqkcyZ1yEAq5hm4CiizTNDqLaxWrkDkiTjcVkUkMoX2WsmZdeBrgptJZZV8sQanXQ7ysGuhvvtJ",
  "key22": "2bDYygptuzNBD5U4mvYcWMEhqZ4DEjQ9E3DvZhanixWP7JiPqHZ2Mdg9eRZ3T4N6kUXugPvJGz2CNZ4ks7Wsyk2s",
  "key23": "aeWfG8p2oCJQsHikUeXSgYBRgKJrtbc9NVpnzGrbqGbwWSGj74EUTVMyHrHYjwqPohr4hkpb5BSi619TwQ4cjVx",
  "key24": "5mhopzRRVoohueEbhJ6Z8dNhhbVxQnpgeccJ1H6oM9YrdqojQ21DFmC1wwRe5E6oWdA6xyuk5P4KchCsNqCiFq2z",
  "key25": "2adVmZP477Vo5wczEGGYvHVEgmmhAdGqKmVX9r3uwDdowFcanhWrf6WVttnFwSy47gewBggfGCwKjK8Kt7swuZim",
  "key26": "2ithfMrZtgmAx4cTEb6q7cgeaMhMSigtMfaMdSXznMpQTUWKP2yeV7MeBsfWxbGhXjk25WpCwUQQqV63cur86acu",
  "key27": "3b6sSDNfSkG2U3ergh4EJNbiG9iXGfKyehrspe6zqGE1xpcCpodSefKBDPkH9nUbobn4CBE4XsDWyNmSmv8S5pYa"
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
