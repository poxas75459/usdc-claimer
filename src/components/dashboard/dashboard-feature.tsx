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
    "4GFaXGoD3MjVKqJ2Dz2uX5cBX4FRV6aZ8p9cHBrxyXvc8mkbnugaWQqiVME9szeAYwBJkqmCaLKaM9Es7z6SgkCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R47CHZYvu2iab6yJtrpAhUFd7dJP6mrSutvPH1E6S3z4uWHrC7TJY8dCYrj7brGXUoriyboKMp3vbjoXCt8pBP4",
  "key1": "5VHq8MHgnuXXrb6NuYXYNbCPLRWic1jzcCSxK316YmYiiVVnuRqembEG9NVarnBFwfphPLaJ1CkVjNebJU26KP7p",
  "key2": "4y3zT8Dj1F1pg49pSPBdEYbgoRaJomvHHtDjRakuCTC3Dvd8bXEp3ctJktHv5KE4gGMGDu1fDty6EQzneszxiwXh",
  "key3": "37a43QcBErdAMSbV4YHdkgrtCt4bsYv1xZMRSK2oK9ZwLboexQphsCHDMGUqfALQgKeRCfUqVTsqfgRe8796nT2B",
  "key4": "BAZ8PvLYPSGRUM1ACTiGzAiojGNAyR2fPcqz9y5kqPJnKYbE3pzTxiBCKmSPL5A335eKZVSn7gRvet4a5uWFifK",
  "key5": "2rAtkMdmjpyWbwS35Nf622mG6dg3bwzxffG4MjuspLRTbyq5LM7maRN8yupPWpR166Rsktbh6idLASvyLWGCjHMA",
  "key6": "kcRENceRZGxYLjKYrsbt8yXnu9XDBEWWk57rhqrnHuUXGBq7r26tZwxoBNnGdubA4Vu1Fky82qnud5BfxnHuCPy",
  "key7": "93iyC8CsHYGUXDbRRMPRH5n68QC2Fd4DQ35QKFvqgr9EZ7HNfCDrcs3Xi71vhAXyLsXc9xqo8DtJ9fPHHGzGsTP",
  "key8": "4prCndRnprd8oLu214JdAjkz5c8mVSG42LYgUiGL76NNGNYQvytVp3qjdoBhR6f4p9SSpk8kCzGbo8iK9CAPNvpv",
  "key9": "3wybP8CwFEzqFcrRZjzsQN263ydp8Dojt57AerLM5pfuT1VTcWE65onsgLQChYtTWecXim2Hrg7cC1RTyCPimxzo",
  "key10": "3AwyECbZDzta8BxoAr6yV9338yKLp9xpRAjFk1gNGzn63TBcCyU45Eek8aodp6M2uhthXFFaQMyvEEqJkMZ79HLG",
  "key11": "3n9eoHsiom3Z172Cp94aarUUp4xh3PJHro6B2gZ3od1JT9bTardqkRnLZej1UoydtBFv8yS1Bedts5mkAsFZcBXm",
  "key12": "GFCYvfrpCprS5Yw2iiMQd1iaUPotp2EmAdrndZoV6eiUhZt1ybX4p9Tj5WzgyK6bDjcYvcTT1S2zjPT2TMjzwY3",
  "key13": "5TQ77zBXhuX6oUDkLaoTWT1JKEJUqX7kwf3kfvmWXtPRtQKUSidEaR8LXaTvawGCgNMQzwzmkeDHFUUL6GhP6VZu",
  "key14": "3sfcNSLMjRm1fnHdgjYnTrVtbxrswqRjVfzx98FjnQ12E7aAYNRR8SAoYWBStC8hco3ZA14BuygHJz7Mu4trYwin",
  "key15": "4LLS2NszNSu2ZHM3wyQp9KPQfaK8duzLSvhgs7Mi5AwSRTwNNewWxoc161GivZpskymQWx7LpeFBtvxPzpaJNx5Z",
  "key16": "RDT9MnH6QeyAsmG5HpozxqXR8Xxwnj5xy7kFk4oiEsA1Yd3jchZZY8J9oJfJA8GcpT56j6iTZbVyP7Ps6NukyQs",
  "key17": "4uMWcxmTJC6V15mgsUntPrcBwZBHhJmWuaZSym7TzuB96hJ4MXmPGt8cg3EhK48UCG6bEDcGQWRFaxDsmUDZSG7M",
  "key18": "2ap6o6hnMCZ7ACqn7xhL3h16YzqPow2BWtnURYbLNVUrpKFo523ZFbHhH8Frta3iiWDzphbfGfXG1HaVvc1K9rtm",
  "key19": "5jy6wyCim4BLkpBNDA1uoJT3RktctJ8ZuxWKFxR54DKi16nGtrt2j88YagH8qJiqhyCGhVnvCwFeL1azF1YzN68J",
  "key20": "3mccxgyLkJRu7ZNoTxhP6kKK8faoV9fse3U54xD94nJcmXdHQmgisTrUuXV7u7dCkuvvyh3MGzGSshy1vhG4YeMf",
  "key21": "5YKP7MoJb5duNDMR7x2NMZy4pAis7jdbxWSmyPoV61RNQBX7pMdEHBhBzxiCwKihxEMxWavGGp3z2z7J1XwHU5Ef",
  "key22": "2jzEmDbZiAWY9CRrtw1ijEqzX4op24JVR1Lus5uxA44m6tMdqwsmeVCPXaVoFH6caV6SGYDerH3xyq8UF6F73y8W",
  "key23": "28wKRQxEhDzsjoMiSrsJexqVQWSBRdV8o6TtgUutW3CBUT7SARMDReMBxYy3GsfmCQzmYYrnUmuT8tBPRQCPadmL",
  "key24": "tpYDrsWBkCGo3U4kTuUpiVuankDtRhDfNXwwba2Zbn7zbycxxhsvmdrGw6jgx4ooaiL2qUupGJJWATv8WRmUudE",
  "key25": "3ytXGsPAhAZp1vGxuWHo4R99HfNEajJdAcwnwZJMagcThx7wS3nC5zj4dZB6AaCsyoE8TyJkn8WEPJSJKRQd38G7",
  "key26": "4pSQGSLZJKh2Vh8H5drUu4uvk3U91wuj7R5UnjheczB44KyC4PNJs4gcyp7emYuGmjEHdJHw3tkZFHJunPdxC6GZ",
  "key27": "4pRM3fVGYfdkVf8gpzP2u2MZUG4d6DJtqBkk8as3EgD3SCdiD6uckdNW4zYHGnjbzjogkbECcCkMbsTpztpSjd8X",
  "key28": "2Je5F3hL6AwZMsQCsku3No1QMmjAsQ7jKKTyX3CetJ9Nm45ACif3h3Ent6sXHqM3uq6zNjWuS1Ph8AG3Jg4tbcWT",
  "key29": "5o2pQpQaQtxyQVEnEG86YKFuxyF3mFhabbefxWejitEty7NtgfJsiKhupjEpJkv24QAwzJcmcEqimvK8nSgWoz6C",
  "key30": "5yMyRs6FVB9XN5YEk6wEQZyhrEFAQv7pV5PiGdhn4skEkx6Mz3UZwD5rMr7ymbG957cb9kyqsjeMGXAjWomeQgND",
  "key31": "3RFUw4ccojHN1jNE424Er1AQAAGhDHkY6P77AM4gbVGKYDYu3ZAtzBKigDHP2Pap2edRuFLiqTbaUjrWhWQJCF1C",
  "key32": "4unWd2hpn2HG3cjNpGTsgM4aRjqyTn8JdKhz4LsEn1XYGroBf2skMUQiHEmVWa47r4S8hVcM2eeStrcuTBfNufX4",
  "key33": "5shv9JPxeW3QPSsFEpLTdkaf28fNr43gNmyhMtv9YyHAyjZViBHYZZbsiGk4qyz5oo7HRPTuLAWhh3HCsgqL48d6",
  "key34": "5khWFWbsEhU9m5H9GihMg7z4ad1tLscbE3WrkVN69iiawRQkAqYos4PVBumQRZ2stJBrrEa2joQfRL7P2EsRpv71",
  "key35": "4141MEsKfQWEmXxgephtNYXgCqt7dK7SdUH1jsEP4hvW3VSeEQoKRQSmHrXTAeEfdtecQ5p7dQGd3n5B1TnkJAYL",
  "key36": "BUSE5ouRqsbTcr1PkCbohFQVMyYe7idPwYuhiwBu3U9jAWs1A4bvKTgVMqKENbQdewaktx6B4gfdgTuCF1PJHcF",
  "key37": "5sq8vQHvxxRYThhmpLZ2zgJPvUhM6ehoKskXVUbS5zoaHpcv1aqzAfwJkRzTKJJqqtxnzsbQQzkeznN32RB4GWVA",
  "key38": "24e53YwemxJZxJ9RwpvKNrfffaMzvFwPsZe52CgR56aAGFmQVL9oqRXXyZzqAoR2UwXSxcRuaGLueoto9GfxSpXe",
  "key39": "3L2e55CMezq8j1mFXFRXuemS7oehSDnwV5wn7wyfrqMY2ULUdmYjX3JqXHNYFA3vNoPrRWB3w1TXn6dZ9uy17AP8",
  "key40": "3zCdQ85X7eAZzRsGyxXPThxFvNQLz9Kx57GLkygbVDLGBSizGxy8NqYPWy3SfJAzBLEJwMwsizhXqPYLy7tzKUNx",
  "key41": "3g4AnkhLbDTfwewUUG5tGmziVQSzFh1Gx8iJg784cizXeouUks9JURuBoM1zFUc6HyoPng684SxcYXoHufUdMq1p",
  "key42": "3XQ4u8qHvrVbmDzr3zReT9qR128xRUHZA9LnaHVA6nvgTkDoZuAKAPej2hgCejEyDgfoFxheuupkFe1LNXn9BFqx",
  "key43": "3b4WgGJNrSjbPWGfjFJPGUvD9AXgEnFvibAEgmvD3HBqQ8WP3HBEYEJaYcn4HuA5oyJdsbNvDjjZkz26hjhC8rhY"
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
