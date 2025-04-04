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
    "2udu7QYnYvWcF44VNaxcuXevXVYNQSHC41Fp4xcBHaMPE3GVEgGXwY5pt65RgJhYJsDxvbDMAaM4vWi2ZyiKCJy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhYFSU67jG5nFv3A4QcNdaE1iYnGZShAVMcxsFFqG7zCHJJFjyfV6NHz9Gwyy5s14aHLUsUFztsujUarENiLHDM",
  "key1": "2kFeuTxMKZCh2by7ajteBNoEZ2y5QSBdia2LJj6awK7YuUoA7hdb8keZ4sTirT3dy1UWUfrh1UtFRkVQwt7QZsan",
  "key2": "hMLaezWBwLFehMpqKV1MEGfj23ZuSXK7z3QKdfPNkE4XqNs5vfbJoZ3LQ7Npk6G1rTngdrgaEB7cpSY8tJktrSJ",
  "key3": "2dR31LkMf2YEpTcd6hNDzqxP36e4D9HPXrFuqAqy3XdaYCnUbgSM4oWG9TX9kZehrRdzHCC24DnNYknkJ9Jb43is",
  "key4": "WgfUGpsZ9JEZaQwyeihuybrko1jc7qYS6m62sm5qyAWk5RBTUXjuEV8Z2J2wjs8PaUVM8yMRp2mUmrnswUyK3HF",
  "key5": "5YHmpULL5eyEXE4RnxQnd3cYaGgyPVvheToXuSHsrKyueeefHmVPmtrKsQPXsMgw2v5zJCDCSu9V7S34D5bFM9sA",
  "key6": "2UnmrnnYDPrRcgYb5kWidFvav3dnBDbyPkSrBDrAjM4J8sHNBMUrFouFZ8bDwyvjXLnJfWwrNkRCZc6cZ47oXSv8",
  "key7": "5LCMzAoSgsDtfG9MMJqJXKqac4rFDWapZC4CFKvoPgBVTQyp61mdx9ZoT4SiNeE9J7xi75qoJY8CQMMgyxHZzM5j",
  "key8": "2G5BL1ot6BpXbCdk9pi3AV1ZrS1KA8K8Z2FkbLfqWuNbofQLkBvGnGyHx13t5viuzCPzagpzr3HH44NXpr3hPgiP",
  "key9": "FHEyWZWpXhctjo2uCAWGPwH5rGUsaVrpFS13H3Ri5c1HTFc929rnbJNb4jkUpLZsgbyorN1XLEEJiCRM9dqvspZ",
  "key10": "FNcRQDgjRjJN5mccA67FE7DXrq1MUNNRv4JCuKSkDLqwMvViu4AhqHFL2X7K3ReDF9wXiFgtoPkJNg2fXSFwReF",
  "key11": "4K5dGiJSpDSN7pDALrVAYrrzGbn6QERdVPW6bAskjiuVk3BwRT1hmvsHvi4Xt3RGpjKRQsvgsuDyCgvXA9eUBpQ4",
  "key12": "4ejoVb48DWLYx4gAtrRKdrAAGF3LsG3h6Yn1CeaNdPvtVCpYKiYtzksRDWZ5799gtNMCzegnUmyink4zpunYQbgJ",
  "key13": "2wgB2WkLbpmhRUbJhQMhN5CtdQiVuicgJG7rtJiEcb5jk2ZMMGrLD6Ng9Lc2wANCm29QSbYdqHdxsHr4qQdQ3x6a",
  "key14": "4CYBLCJQ3wajQvzkw97Wihc9dxhRch2YkwLuj1uSSEfgehwsB9Z2tM1HywxyHqvYAeLUBv1ZQmyThQLF4isjyAPj",
  "key15": "4c9fiiXTtfmfKUoeWqQ1dDtAh8cqbz21EiWoX72ZCL3ex3zCAzRvYQ1U9UGrZCWpxj6qppvD9xBc8aDKhfu68dew",
  "key16": "31zBdwvY4P79o95vgjVZNpGx18k666q3YJkSuBZKPJycSkRQmv3TjSboQsYDyB9iU3K8Q9ryCCdhY9YPaUzvYSui",
  "key17": "qb8fV3NvEHW48KQMfmaxKQsQj1SanZsurtpUZHQ5DgazQEdFixpgz84QifK7esVbVWGqd4YdrpnoCZt3nw6MatW",
  "key18": "2cXe7xEk74AzHoZ9RHjXrNms6cnR21FR4JniD2kbXJyQUuk56EZ54QKqzv1NZ2tHe6EU4QpvdpcXBes85By9yeqf",
  "key19": "CPjXC9yogrADtpk7JaXuQDVHR9KDLKZMwHGgpecLgkfggv4cwPhmWVRoLhJMwd2h5mj9UfNP84YcgK57npLDqbN",
  "key20": "5SAbviQ3nMNbyv11qDqoQ8B2n9Wf7VoQEhkEM7ihL6bKRhYFP7TFFPEix9hXyJuyKrMV282AsWoLh8WyATs7mYAv",
  "key21": "5CKieMg6pLSE3W7F5ceHhKKAkNTjxvB8bzc8EJkB1TW28Tss6iMgJU7QRXSFK3S6yPsubqR3saADMkKQ5oQXCSt3",
  "key22": "5twnhRJr3mHP6m8h9FatxxJ8pimDz4TXCFJHwz54HqrDhwxruz2Ne9WQxQ5QcjPeN8S8KriKHTunXptM2pZVMvk5",
  "key23": "2b4wVNNVt4brweyVb7mkiQLchcpTciW32i3MabRuubYemZdth1FXUAFudWHQFW21ArnCZLDf534Y7JE32ihdjdB6",
  "key24": "eS9zFSwWYgoHbGJThg9HetCdB2Ts4Q6Xue7kgdk4FgKcMBjjWijfVQ38G4JmRFhGfbH3jM3prWjWScRqRKvhjp6",
  "key25": "5gB2pDuWMTusSSjycTYNsqpKWHDPQjzEbAshMDQjPxS8d1fdEnygwYJp7n8j4D7cuH7LqrN6vWm9bM5v3PuzvYxb",
  "key26": "3frZM1waaHtZ7vxTiGnCUYxsvV8v6yQUbs8n3qwofsSL1h83J4Jq2r8ppYtteyhhWA58WV1xXR6eiJAfQathjf9z",
  "key27": "4USrvN7KHWG7u97pha5ZRS2k3vt6SCiZzRMrnuAB2K5wTA4fZeuCJUyCeKwtnUmbWamRv4DeqpKtQmkP1dnYnv2e",
  "key28": "4mFnd6fbDyH73wSXfHj2RkvBXKJajM3NYJ23sagSeETTgkfpwDuD8ykkG5kDtBJpnqCvxPoBpfzvBccGA136fnn9",
  "key29": "3r2Ybtf6Xr6DPyMyCuD8gxxR3a1G31bSkYGbpuSGNgFTxKNDYBAuSf7DovX3tq4ZE1DoWyitdybVS9eykjTGaiAw",
  "key30": "Bk9os4Fo9mrkxztm8LWmzjhR6z5DZQuoyXzArZmWUBBFEsmewYi2pj7uaaEZdcMfwruPJkv5nAhBb5yyh263Eys",
  "key31": "X1PShbAWshTz8HPiXhrnzuBuqJMrZ7gYNFUCCu1qbueLiVfQr4sc2KLX6tU7nfZm8kTFmQ1kyBBrsy3Ery75dAz",
  "key32": "sFUUj4peqPUrh72fZHZnoUh7DPemhTaaTu4vTjJyJk1VAoPu13HM5t3ghMYrffGSP3MAwDk7br7KToLZdY5LBBf",
  "key33": "2pVpZwuD2q3nJ2CTfYmhtocVq8m5rerbvnfr8JY47bSPLCe9fatzMMVQXq6sMSLesyreq9Y1bGQCffNhq1KkfoG",
  "key34": "43Hkyx2N9DQAKQqk7CEmbadP3fEgAnevKdsQPrjUioAhx7ebuWCVkudxSJrjyffSYkNBxJWbsMuJQQQS4iz5GkWW",
  "key35": "2zoTpfcAfe4bf75NFXZqkdmuxsg5CMSe17Q6a3aU9z7R1Dx3UqCdqwM3mGADkQ5YpLTTrfcRp1254SwPLpdkK7Yf"
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
