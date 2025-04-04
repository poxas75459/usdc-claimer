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
    "5par4LhAHWfb7xYNYJgvyRsG5Ca8hsMyP6BJdfRVn8ymC9sU1PqGSDNQ2reh1o2M45QpwC6UfohGLG1o4iDDY3yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFM2fzHjRhFxSomKQq3qSWMtTWPja1XYzYv5UEZjWgYHsjtiWj86kUZa1J7uqjW66Gw8ewu219FvH4okpAU68Qw",
  "key1": "2u3GfqcB35AYg3UeL47Cmk2eJXq9F3pfL1tMYZCx74kE77UM5rZoBYzbVWjzMQcHeyYngTCVTzZ3iLYvMZ18QSQh",
  "key2": "61cTHz33LBor5EvRMuZnyFPeUqa47CHGjC2cUx6jho5YGRknXTdhGc5cuc5hhvApH1bEh7Tyima6JKVS62HfhA97",
  "key3": "2AzNmEp2dkQcUYdBzgJ4PU6Vp6gFpgZ4AqW2rFt7PvrcdX7tGUtismqnPnySb2wQdZv7DqAb7SLnnD6hbQi8FhsV",
  "key4": "4XiRCmUGog1VKHm4xUmzqtgG44NuTMxMV8TmjACckAJkgWharwmVZEDK4VRU1w19GHNigrqjg2Z1QAMEzYtSrDMT",
  "key5": "2tm6Bx9fkn2qjfspq2ua6zKZ1UMDZT8kJyTArawXPyHWAG34LJ5d5Ms2jagcRnr554p5BoUSBf84jGsUdL6ke7Dj",
  "key6": "mPhTp8JqAj57FUcerPYiBwAZtF5FV1samLfsvVMufT8YCtm8S1dbT5haCZxe35xFuw7BsseGevoDr2UpsZNappR",
  "key7": "2MHw5asgBPxqmQ5SLweeyHeg7vpGwfrwhcHnet4hgumvZ8sHMcuTNyF3eeJF25ziKi8NRjgpesioaErYv7Zzcqnz",
  "key8": "gF1H8Jc6VJ3APZHG3Eth18QKt9qf69vFbL2ftkqPk1NR2JukhX7nPLwMERjwQBXX33cCcU12LXd3waj7oFJzEjb",
  "key9": "hm2Zza78Pjr69NZFwBnMtHSx1YxwQhBQ6K3hdsSfavkWRYgjkiVGCe4MgXq5dmPpibSgw1nq4y7dB66f5Qyhfqd",
  "key10": "3sY2EXfqxqUiYKDBxTshfGx4ubVhHLm7kKqPgRz7WhD9oczBCKZrpasBYb7gLEWxignhiepY3UoATe2vAR4v6Pw",
  "key11": "3TjepsiQyqM8rzazoFC7EHeX3WSQjxJJVvAfhjxmBMUkJqxJhmXuNatC65u2xxrVYCiVmoxYRm7G5EsMkMqdHb1e",
  "key12": "4X5dosb8HgrcPXkCyyMToWx1w378SRDbBX9owiELJ4VuuwyvRKMvvzi1fLg1FFrnyacfv7feW6Wo77H2o2SCEa3j",
  "key13": "4zP4UEp2VANSkjF5dbK3tBP2GFeN2TwYxUYEs5gZFRtwybWTWtBL6RE97y2g4phefcvUVUo8bmmuYwqyxhpkV3rm",
  "key14": "5bHKJ2ZPz847c15K1xZmLuYgnfPgaKGZq566LtrTtniJKAikQ1QJscXYHmVom8GjWCDt668pgk87kawsdxvPebDu",
  "key15": "27Esn67t2yE3rJQjkiqoE5ztp4N3ySGsmFb4GN9MWesTcSBtw3goBBEpJk1b1FEVX13sUNmP1CzpGFPzaTrTp4Aa",
  "key16": "2kn1hYqewDC9meJgqkJivUBWcFMaxBNUvZed8mmJQ1jp6RDDiXs9pZ7SyEwFnD7ZKWZbSBxBQKhYz45urwfzyUhc",
  "key17": "TqRKKV7Aij5M3MLLfE3LXwQfFwP8zJ1mCmpuPDSWN95rY4vQJonakkBwa8WsfQDJurx15omXTwCFYRWoFVm6vqP",
  "key18": "5o2rC52rkbZf71fxJfwXhmdbDQCQWApW3s68jKPGH8iYrnWkQpAB2XsuY99zARiFQpeCxUiJNgHt9mHDxEeR8X2v",
  "key19": "49HSbVaoviuQZhLWeF9YJ6g4f5tb37x8XwHGsKYfxWZZNZ73bAUNaoFhQdiNVb6pi9GWNJSPRRx5hbATS6wp3qbS",
  "key20": "B2x4xsohcJoVvYy5nxnKdtpYSyXg8cLGusU4GziDkhNqggZz1V9AStr5i2bQWTacFQzKTrq7GhnvpN2yZs2msQf",
  "key21": "4Wf2bp4vm45vht3CYn2fzMdQYcRjXUQJysuwqHajhaYBdP4ixNgR1eb6CGGfsgZu64aiRgvxM7gh5q4Rtx8rBmwa",
  "key22": "2XwdujRnZHboQCXVeqmgZGims69uh5xK5JkrYwfeWPeWqZShGp6mCFrLsYsqM6KUY7XUvbbYTgh3HaD1ALmfAj4f",
  "key23": "3b2xjrUUdEt4Fmmm7eanTZXiZGkYsKiUXJEdPzzH21an8dwdqjFngFqzk5uuJJ7YeeKTgVxPH9jKcbDMhrcGnMwP",
  "key24": "489mdBtHLRPzERWzCpHduuZQuS5kndycbmrha98eqXhTq1UzDEjaHFGhBpSi7FRbRD7QmCr1g8Cie4D7DBUsXeK8",
  "key25": "4oATApz7gCwBGUrMgHzv3yEC8zDExtPcqBh8joVhGH3kGum4zKKb2EEFH6Qtk8cbJVtUGQeTTgHLGF1z87RdiekX",
  "key26": "3zNd73hphn5tMGxaTpiLHrTu6rZqkCbWiDaxHQPY8sLckq2u8UDesirPfkSjiV2tQg5aXitowmv8yjEdAJDaddE8",
  "key27": "5pcJDLdctLRFmjig6gAfDL6uFbPZHwQG2TYVhTeytmcdGCxP6tZ5GVwsgLxu5JvxtyUxeC73FqHWd7YLkHr4vZkc",
  "key28": "3z4JjbKsgmEGqEqLXdfTtbM167HavXrjhZmefQudU588TuHABmiRV7A8T24koSwGjyZF68VvFcm9AxVgBsLHRw5C",
  "key29": "mRpWEpuCio9SNBcz8SvBgW4ekfX8o34GwBHP3s8eChzbWrXebPrJCX96GifEX9P7cftNJGPN2Nb3F3EtBUuaMGc",
  "key30": "joKqiwwS2jnAdXBULJocoGx73QXL3WmcVA3ZPmd4Gx8vo2mZFSwVC5MR5sskVb2VvF183Z9ckj8FfeDvn8wY5PD",
  "key31": "59WpLvBkcuY9TXMw3S2wPfMKdoEfCDhSoWETMH7i8wReBVNNrdh2ZpgqxXJwZpJDb3jb1mQYbqEwooaNUN7cAidZ"
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
