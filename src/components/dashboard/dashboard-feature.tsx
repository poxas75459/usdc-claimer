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
    "G4n45d6Z9PuCqXowqW2AMVBFztrisKPAozsSKDNtX9JJGkrHe6XZURGBzaS2XDzonQrR1QBaAQo8xfgg7Npr69A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36N5KJuhGKzkC8UEJtexdcoEwBHzPN56pv6Qnqim9LshN3wSa5P9v7HXE2sFYby7qrQyaBMqYgJHcJbjEtVkquZ5",
  "key1": "4PQrXgPuPq6r6byNw3ChAXDkjUuJnXMBEjG4scxX8WMJMwV5cnDZnrStE8J9ZdEBZKgSyzUsrTvDWLrSaCmYTHY3",
  "key2": "58tXzAgbJ12onX8JPwmuHKBwxMUrs82XJ4ycKtvYNaNXaaArM1d6stHLU7DEGVWWUE3BhwB538pVjcC3XqyPfVKh",
  "key3": "45wWqqMBt5SdhcfbP6xvY1JtgiBEQk5ah2tHWB8x3BVSbj2u4v14Vmsroy6ciQjFXoiSrZorbpTSjqwmCfmpJKSn",
  "key4": "3hJKGnKhyCrEdAR5f5mcJfBkc5XzMou5KP2tYAExFCfuCazC45aFYJufSMjBGAjWjhcudX1SYWgggkfYX4mhiSLi",
  "key5": "UqZDhL9tTE11dZ2kUWH1t5XnKc57PKQPsaCTzDk6rGayjUohvyGLgZVwuukeqHsziqcdaYzwWiXb9q4x3HhdMuc",
  "key6": "5isXpsiAdKWaB3D6zcBvsenqJNLvw38SftoMNJ2yW3qb1iiNtXTzLwTJaRLEHaLrBVYvD9TCLV78ffmcn3YYYfbS",
  "key7": "z6hugYmW9tbkUE4Ed9FnEEF35eD95qhJj5siAB6cMW1TYmrSMs3hqKCmfSKrSG1X1QXoUSjykjYPBEayoML7ye3",
  "key8": "5hV9nTjyMgEbnohsdkKzkDSC233yvUGjwoJfNYujwqsvi7At5eDCmv53z3uC4UbCtsdxHcPTi9b9gPuAia5bYUpP",
  "key9": "49qEPwzcRg7jgsgD1R7myyjoPxBxLDP1pEYdMDf33GvaFXT7pnpZwUN9yGQ18w6zTxaGe1AmHLxUFQmE99Ut7HFK",
  "key10": "5QrDvTyD9w9VNr7JkxDfztajaDV5k52GwqASu5T2wLqHECetfQf4zXyjrK1EXtjge3v14qwaTuzMi9yEtWddYFMC",
  "key11": "5V4eUKHbxeA59Ptbrnx4VBvmk9MKGAf5FFfFSaZofmixZzJxKwd9d8u5TRSSB5wMA5639DvcHvsL1Vt5W537i2ir",
  "key12": "3CAmGPpMgHxNnfntq5cff5GYGmYSAvWpgGLEnhUW2hD8frCF8t17dEmB6v1MPVisFkJ8R9o31QoEsuuqHG4oto3m",
  "key13": "3mYgWgfhRdPvKiDdpHBiLhusKzYoqUEP4Ww32UFNKsr2Xzf5JSPu3B7C4VfaTeg1zhchBfVsyisHWLUUnA8K2bRx",
  "key14": "2DT4ddH3iCSRACAa5C6QC2nBwqAfMvQxNnAT2Yna6QejekKj7KZNgxJSvkhfF2RvNpsqnqkQAGjXBKruNMcjs6kq",
  "key15": "5wDKmVbhQ5d5Qk8aGsRrYH9WrLazgVDxQJGmx3NbAadtZJPVsVxYWi43JLDMyxRAAqESGZDKAgFVFum6V36Vfjs",
  "key16": "3LRmMXAiD5NFCgSF2zhmJ1VhJHsdBqLLWAQhnSuLRZisajRLrNkWNTd9Pcd7RUxWYYoURtCuxRqwkfeDsqypqtSd",
  "key17": "52cGVsvv2o2k5rwJXGAwm8cRK5Z7m5Gdw73mTUNR96ZDWRbczsxK4SKjzZiECQjFSVFyRQhgHYzp9aq39AEH2fZU",
  "key18": "51xGf8kMFLMAM2xMGVv2kMPzVWt2f6AqnJsFamghV1dRAhQoUuKnuoVn9ag9pce1HXqiNQkcsrHvv2oX6VyAv1bp",
  "key19": "4FYofm3BuU9tLhmRWp6Zs7bhZdVs8P9MpYjwdJZhP5zPcZc5P3wGiC2AoV6ywuzTGTxjhW4ENzbgDJRC8HfbWuuR",
  "key20": "4P96GByHQfjmJTmgHUzEoeUkNxyiWqbykGbv18D3nxvzbvnpMkq2BYFoMa6hDzN2AY1XmHdGfv43kyAsWAMjixE",
  "key21": "4oagptXyZoZuEv2hyoeRjtLcnP3aP4rKhfK4VDNNn5Q96hhto1YSPWFm478VkvJBTvGybpb2ASNfaGe5k9DCnwW1",
  "key22": "3K8cSuBYVLF1mSNbH96pkrJDmunBAcckhnXtr61BjH7CFH5SeQEH4V1uZsbKJQntG1StvS57ehv3KU2KPwxReZwX",
  "key23": "3PGsJFFSz47k7zMjNFcjUvmE8EcQW3j7VaR3zeQUNGYDyjeoomqWuByJrKDaro3EQDKQ13mcnjjVh6ebpy3Q3B9U",
  "key24": "66k14PnqWkM7NA69pw2PxGHPAFiBvHQU8j7cZnhVVE6f76cHZSZzyaPWVQr9fCfTV4hwMZaXjRWYKUj3SbZvGB1T",
  "key25": "49ioCczopsMhQwwUamVpGcmG3AkKjkJtTdrM79NyfX8hCfBp6Qpe6qBqHDZ9mrqfyPN1sJcXU2kECagaWqHnDqn3",
  "key26": "t7FiHmKrPmP89dgv59jjiKvpKtUxhZce4tkSKWa2QAXLDwraAprjBaQgf2x9XpqgnWJcauxiJpbc8AuHAW7b9TJ"
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
