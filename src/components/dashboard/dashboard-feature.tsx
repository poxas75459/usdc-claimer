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
    "3ktnvTvvXffj5EP2Ds3gyjJktr5bwufwX7TkpuQzg6XRDeoWHwch6Tn8bqqazLnyn39yvf3jL2urszy2q3HsQGwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HggoVJx1raHUVADJ65U3ChRFFDSCTF5PsDtYa147c1HrxDkUmTAK68qFfk1f6effnEw4GUidB75HFDawyZq5Su",
  "key1": "i3HgtBQzn3ewwK6EDTkPq4T86gxxFETCN1xTpAXd88fknvm9zW8X1T9SVbag9gDHArg5YvfS6VbaCppPMjmix19",
  "key2": "4wGMELMi7DQuQhZLPERidqgGY1XdCZK3SwXJAy5o38S18wTLhaHAF7zKwefUyrouUai8dJj5HhoroJi2mL4kPDau",
  "key3": "P6DAaeDfAe2gJxkVy6UTBoiHawyknFv8HtsjvSNiEjjpRJGKgLZrFFx14viAgiPDnA1Xvp7FDASD8Ko6t6GEGT8",
  "key4": "3UsTLih1AVaFsKy5achaUEBf8Nb33C68Vn72RU2tNNRazq6ef85gKDfksGnA82nmDKCfN7JhHagEa85xUiRExuE4",
  "key5": "3FHMZMJaWCJyDrJJoEmwJnfC5XkBkvvtjVjdt1W1eqTGfKUgi2hHcrTVKAVTj2jJdFQP7SM2idCnEELqdmLgq6T2",
  "key6": "4Ryzhrtcmx9UkgVBQuxb4Se4mQs9DfoVDwCcfsdXHB4FLDEqmSgBZBwhKRtC561gMNi22Yfxgru3muJxSTAWJCeK",
  "key7": "38Z5WPTfEoYbwgHfvie1Tk9pjptXa5sU8hqP9J9qHsqMAbPe7hJjgjNmkL3edEubxi2yx3LjEyn2KxSLrncvNijE",
  "key8": "2DkMYppRocznbqMHtvmc8h8SvNkY4hqyznZkG3d1md6yRz3TKcc2WTPewcP61xX6LuLWqLYV2EhqsPuPcb1hPiCJ",
  "key9": "5UeN22wL3JvCrs122R2Vwm9m15hC6FFdkeDYMbSSftAgXRNzr765nqQDMN7gCNQSTeDw91bxaQ5Lmvv3WxsitPRa",
  "key10": "611FkC1dYJhs6vF5L1XkZW8C3YRMfMfQ9q7f2L3R4msm97fDBKZ2m6oDwmojjhdDTQBzteJnDxx3w6MHd3bspSBE",
  "key11": "2XukU8u1sfja2gSWPHuc3qgcdukwDL6VdqQFVSfaErhFkZEu5YGfdqghcyVpkctM34XvGpijgHyGfaA7UAcRVhDH",
  "key12": "3xWYuM6WeKgvirkAAc387XrgdqRgQXLnxZimehLLE5mrahBziHDvY1kw2Yw1Sxf1yu3pnGx3Rc1kfEZ1EttjfKRe",
  "key13": "2L6tntCcuxqDWJW3ZyGDYBcEt7CB8XPvZvqpMs2a4AfLeofnArzn2yKCyubJi9LiyCRu7GWSem4S4YUaG4y1FkLT",
  "key14": "5AB9qDQoPWyPd67sPLdJhAA4CEBCfBNdUJD27Hk8e1E7pwa2pBHb4V3r5uiWDa4Zj9QpaNysAiBHzDFA8i6zSL6r",
  "key15": "2ZwpkxPKafsoAjE6qcVhH1oSRfR584VuRRET6sfU8J6KaoEN4XR8qdAoW8tcjJiqXGDUQjuKQePCK2E1k15vomSH",
  "key16": "4YShAdRQvpBs5v9fGQ5W1KHSZiZkhWRtSJFbC11ekXyBLR2FgRDfSfsRMa4yTzG7tEye84oDS6SMwi1Dbu8CoQdF",
  "key17": "2b6geaaoyT1HCmtNpdEWH5qC2qpgm4nXrpkZ2Vr6Gw6kPC2Y4arA7AM8tCqQ3kqR4fQLgoFbwzAcLEzbs56UBdwS",
  "key18": "4gbBMJp4Ny6o393MCZWMj6PmcN1Lq6u7VsoJVCZ9tAkmQN3Sdj2k5qYo4RdQc4F5X99tshXYyRLLWp7BSbqePaiz",
  "key19": "4fYtSDo4e4hL9nwFQ29axrW1fcTZDHoNK3oQqBv1kC2TzZhVmz6cE9p6WjwtHZuLbGUbDxmdAiANBJEqRi9NyYH6",
  "key20": "4gpNEuBt61TjMovHdwZ6KNFjEmzyuKSNqef8MqogTcm86AvAa9MSX1rt6wP9sGzMzvMzaZ12k93hEnu8pmgfxHP5",
  "key21": "1jLcyDNhWWzT5cUDK63T71FuucQLJ44hTJaZ9nRREEmxc6GY1ZwR2vQbgTgpv2p9zdCUFf5wW2KHJGNFX82erh4",
  "key22": "MUJXkLwAz4opYDW3NytaUhSqsFPUv8r9yz9VsP6gQdRh2KHjd8q2bvrMLxEQuAWVyoZVFypcgTG3rCoUS9sqn2x",
  "key23": "5hbdRqKDTRFnBqmySuPxXXq4AWpvj7V1utoi9a6KzgvHiySPbTpjAXKkwRWTV2CuyALXfJLBFVWek2T4fnv5iAe",
  "key24": "29jLkmdpwcd3y7N6cZY77aanv1xnrzNppZaoz1tVw2McLwZVqGVdrBjyHiiMDYjLGj1XfoLn1Q9qtSDuRAQQcxiy",
  "key25": "25ba4AtARwNE7Us7SyU5CuRfPKVqaxav4WiJmnHA6XXmiUivB8re2ivh6MWy3vJoFDeq36Nx1GvtaRuYzeG7NsDu",
  "key26": "5Wtyjou1A857LGve5wBmkjkpjDV27dVBXemcNhaSmCjYWqvFzMVdoA9ts8wtC4MfzuFQRhUS6fq4AjEz1w1FY6om",
  "key27": "4d7sMK1nTA1vXcyRNfE8yzYwnv38sC1Q3MkEm1JwGXitkxBtrsAQNndR6t5trAmmNe2q6P2khdhLeHczmacnC6C4",
  "key28": "4yyiVXRrJ1NWhEGQjyqwP3eR1vq7TFmQzF4HVWM3Utdm1KdWyVEKsoa2rVDxzs5RKGb8x22FF2dEv2AtZCi15UKa",
  "key29": "25DVfCsK25LFuvFQB5oaKLWqqzD3SVWcXnmTMqEuZ9q8e4BiVaos66ks887eHR3WWJpiEG3VM181VHgVuZx9kuKf",
  "key30": "ENqgu4yGMXn3rsjndzSVsxuUfoMX8Kk9uQHATLGQLCG8ZRnCR5dpvLJHGL8AnntXrCew9djQbwWwKqnegq1Nrjq"
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
