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
    "5PLs1MpJ8eG3eaqLKpwJvs8SRck98WUjXpk1TcXyFipzpfGUgASxWRSANJ2gkHfYW8KRrysxhBSK46KG5rqXBEqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pniuTLtyn466uxCtSP87LnnGLtp9PXQdiFmQHt8UtxxABZNPjAe6fKbSoGwddU3QT3G1v6oQJBT54HUNNgz7ws",
  "key1": "4LTjoim5b9YBhcTpdpJ2QjdMh1EkU7vvE1Rhffjj4KyH19BMRxTMEnWgbWyXCPYWLpi87Xa84VnrMFPU7RQnrkJ5",
  "key2": "2zfsp7mA5J5VTDs5jyciJYjfY5gThUfiRV26YNcggVuRNMGdEb2nJGsktefix7yCuLmmvvpntXDunqmgebrS6gyL",
  "key3": "3nV6ULACGtYyN14VHjPKaktZXtmtN3NoAytUyi2iFmSuboiBCW176cjJLgFFeuVz64XPBWXgS4MTaAtNpPELvCyj",
  "key4": "2CyeBrfyDPA1ho1kjCLR3NCXZmdsJZq4uXs1ajddeyeowx7zq49eQuCChrxRbR2329Bkr3J64Pw96h6821c8dzij",
  "key5": "5AXYKnrCdQQ94w2YRFEH6ufCUc3J9cxt9wHZaTPMAngcwkFc8P1zuqM9AsfTw8TeaBFbeytw5pUThmMYyhFXD9Ts",
  "key6": "2jaJLNb9zWQDfcNDMgBdnpxP16Z7qZADgFH6S1L3QiUmaHw5RUeJQqnh6zw3sXy7nhMJ5LXXQFUQ865wy9ACL65z",
  "key7": "5uNbWSsBAGgPuaTmGaTZHkB9jnC5eyJYoUftRSss5H6TDJUBRnA97KNbSbkiT9VJzrh5NxDn3V4tMC7fpU52FUQS",
  "key8": "2VaaxYJsMzM2ik6KwEViRHisSotL4Y7byeSpoMxhn127bzSUFAjABha8pWafyFQHt1ctjssndQbFpSZtdXQPF34m",
  "key9": "4Btf2iAKA1D8YJqMWFM3oUeAkBpVibQMobXzRySxBcNyAfQMBUU97HX4o57fu5GxkLC2f4nMBp1MRM2Edwb7fKRP",
  "key10": "3VfnizjZ5ESty7JgGttWVpvz5ikVBnZm9JZKABMLWjDWHFervj46HJThWY1r2YvdvPWez3cvrhcZKiF9r4KZ4pYf",
  "key11": "zT1XVdVwN5Yv9tjJyKK92EZv4cR3r6qycbK8D7fi2KDPx1ARoRqs9RbXR1VbvAsbbESzbXnNSRTdKmp6WYDDZsW",
  "key12": "3LAXSNxrkuD75vKoLgZ4WTuHqZjeQYPpmxQ6jqLYoUu6fa47Qq2hMvRMu7SXHVnAL4KMFBMTqHV6RBH2XGMLHTk",
  "key13": "3cDYjjiP9khD6M33PYMNeLdDWrATkd3HVR7MrGfe4HqhNmmEwvynYum35tewpH4m2v4p3QwegkGa4VLYpdC9K3Uc",
  "key14": "3U8ZESeikkgrkfT4vKrbB46nRko8gd6A6KVr8w1yNdNUAGHmkc4tjkGTGBXPwuZieUkCvoAn3mFsAXSyGQdJFHYi",
  "key15": "2MQ48qq8RzUeL13oRC3m9h5HtpN52S6S8KSFxTTjVFE8FGfKkGoYCzpGNSbrjueW588cr9ipxbqRFdA1CKESmkco",
  "key16": "oKbzmw5mhHs7VLjEX8dQtRjm4m4ujBmNkj61BqdTo1rJWEggtREBGXNWSDJRCzKvSn8epmfUeCAb67HQGiDuPje",
  "key17": "3K87WqQnHbZv51j6HJ2sNTLAkWsWybee2WSbEEkyN5xTSr7b2VAmaHdog3mu5NiGnAWYHmg5KM2nXcKHQNepCZBs",
  "key18": "3yVzcDTNRK9ZQWgqcTzM15vpUYMLN77cm8YYnQbpskEj4913t5EhWiQqgMmf2itF7qpTfAV24ZkxVorVnD2wS5Sn",
  "key19": "2Dsjdv469nykaA4CvSSTwSGJYbiEHpuSxmHxEgE4JwDo65kY6wKjhxwxfARTk6YRKcnduSdxQn9CKNnAnz78FE9M",
  "key20": "5zfo83BLc4UntFNKajgT617RCv2vT239Rss65exgPkVERzyK7dCcf33NfZZRCyZeSDCPTGynCKYjBmG1AdcDcs6z",
  "key21": "3hufwhzMixsTERxFupd9ie2yVENNh7Rhd9ra4pDnJLKoBD3kgt4mmnvBEUhtUJ6MF71GyueEbn7AhhWMc25bR7UL",
  "key22": "4PvXi2J3VdDD61ptR2J9Dfdiy2scE2XSjeZTAqboSsrgReu9B7KjXW6HU1exNWCVzYrsfDNDwn1Rnhfy2JQaWpRG",
  "key23": "5F4TfjqQux9mXPtUmjRkmPwS6VcqjTZTLT79pw5iPq8HMVh3GgefaXAGTq5pbC57BZgjG7kSgg3oE1tUCKppdKaM",
  "key24": "3vEd6NP7vHXwjw8hqkgSvV9CFPCh939t1gW51U2UCutnq571cBTzBffWd26BRZB1BzERL3v1axP3fpvnPQLf3JzK",
  "key25": "5c1xAEhD8yedS1ehbkvKzVSgTtkf2dPyMyCLU3KMn4HUgVqNTHcWWJMnVboTCbtSu7gkUs3sBXijFBLjiKH1vBrm"
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
