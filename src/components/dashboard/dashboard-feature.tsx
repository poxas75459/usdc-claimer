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
    "29qznCDoRnTMNwTzsBidusmjuYq5patANjeaozPBgAB2t37n98a8CStmNCctmVtV2yARKwc2riKD9wLQecgBEBh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jusd5m7qUxbSmNTVnQeghRv9V5bP9BjHiiN1rwCijyheBuj4KP8AV37zSH5ro2dtY6oQ63KLXFQVk8AZmdq9GxV",
  "key1": "4sdha85MBiYeMTDX6bt7uKkkLFA5rfKuVt6SWAkhVYfjiB2KuJSUrr1VqhPNyGoU8hZFmFjYVGC8pr6tG2TWTWgZ",
  "key2": "3H5kJXVk8nPpMCyC6ivPjp9ydsGUStM3zExd36khjywbwscmU1MhKg11inr5ETsfGq7oUc762JB9upSAchXL1MTU",
  "key3": "4MEq172huxqjHPfDtgGfFdQ2LhJzURZLksyGaAoowuhQPuwsUgzFAwSjjGsx1NhEvSu9Qm8z9WPrvPcvpKXmqUrP",
  "key4": "5raQkAN1dDUPoPnkzoXjZxFpccBSxzxLxQ5fMBQoWDXwyMcCLY869KViJySByehHt8frqWZpjv8RjhoAw8dCV4dk",
  "key5": "4ZQF9GJUWK1uMhoVRJ8hxa3zJtbCKzCETxMXbhJB3HaUnxupRxwk5iJCyY793BY4UuAujL6uGZPRumcKREk3BD9d",
  "key6": "QUGxHV8WXi84fcqisAmXpB3nNTpnTUXuJd7LkDLfCW2KePhWUJKERmqh4GMSAdc8AoSRYauhm3nGq45y456RRAb",
  "key7": "51vgnU6Wf9Ck2YeUmn9Uer6TUYnJsDErWUHEhFqA1NazvBfouq4Gi6FwkE9seSeJquZG3SQwNwLLfBpcL21o2i3T",
  "key8": "2zEwoFkq36KPTbfHMLEBDn3RfxC6zFx4c6nffZWGPE72CeLmxFF5FqGzfVsVfCEue1wDXrPEjehP8UHMnXn55Hwb",
  "key9": "3kF2op3G81tVaReZdZe88cJj1NWPBgRYpWjaEoXcZmZyyNcXFTTH4pSDjq7qUmqH4xE9F2Dpmm3EsUZ4bJ8VWaWN",
  "key10": "2w9ny7y9WuMXZUKEh6d5Uje6W9vh6x5Pm3hwt61XVGbxvNHykVLbh8uRD1HudGDPF6g3aoBMtxEhCNt94iSpcmxd",
  "key11": "5r4EfgfM32EcpPzNGqN3bTddGUmrA8V66fjjzCjfcY31XJVuKVKfov8ix4H7esMdjnk9vh73pATCKQ4zCpKdQCVy",
  "key12": "2ctve2xoqH9UkCnaj8qndHh3WuR8YXZeQNqsn9UQGoGffFb29c393ZSo6Q5JHA13Loyx9MZNyFkGiy4zzKh2Mz2w",
  "key13": "4N1ktpvnLorPJa7pkGN8fFWhAWbfoJsu2AVC6hauEN2SX5miq9XyzV5LXHK4tfqzw86oGPK5WNLRQt8Zm3kRXKah",
  "key14": "4oY5sfBt6zGJKB5adnp7P1KDWzMKtU9iZapQDWF6xr3AKJWaBJLGpyWwzeN1tEwy7hdPpoLLRh3ApiZSVahUGTJF",
  "key15": "2vLtoXzdniJmauG8qtMx2f3VqFDtt1bZkSLsaJ51CYkt6gvuZEyS9tkf2fvD44XMzvHPoCmRCSXHMPgRPoriSH9E",
  "key16": "4vitgghp58px2B13Wuu4epbXnLQxP119izKzqitGMs8JPf2CuZu95HVBE68vtZdZi6YekQDgw8h3my2mxyZpsaZg",
  "key17": "3RVkCaTFKio6pQ42g1NNmozgu4dga7bRvh1pemYt8XfFGKce7JkkGifK1zVHDUDtFwUFrfdipygypgt7kxmQGVHo",
  "key18": "5zXVvBxz4VuMicddPA1DA3nxVvJSWZrEFwDsy6eaoC91eBtYGafcbXXVH3HyE4JHJYL7cfXF6rSiqaxdh2dtDHz9",
  "key19": "4bqjL499KLAE8yrnCb5rsmq8fvjVikiEE3f5ZF8896vkmr5bn5P4qx1swzVzeevnkTeXLabtbKrPLckxgGqYJewL",
  "key20": "44npLDTyJeQN4VdE6D2cDkJUEjUNkdyTDwn4sVtjSFC7Vz7epouqYxmSPV3PyJb7QNGdrGtKppF7YHAEzCbZ7wxg",
  "key21": "dp31GxeaYGL9b6gpfGnb8etaECFLwxtMuCaDGbFGJVHYGwCcXCb7Wg69a7fppGpThtBDUyrosZKwAeg4P4XBxW6",
  "key22": "DwijbN4YB5zubRbgTJSNHh9nr78wsr54oPmHb3S2Xp4Uvf9tpSZiDYp3Zc3Vt4qzHvNVcZikyn21rgShzXoSCFg",
  "key23": "3msnszXin1SF9VcQbW95NsjHnbDUXbGpBSomtAqttUwaNHfZq6hRVypnupxUoM5fmii9RjhmoeJAeAuFTts8rtT",
  "key24": "2t4RHUHHbQ2PBS2rrR5VeFaoyGWjLLUMn39cu43BFhApNRj21QKFMPTrx2SLAh3MAyqVSQCCRwN4mAooyhR3Z3Ci",
  "key25": "c7KY2XXv1WB71qcSyz1JL7KxAW6McEVWJNLLNqmewU1wvZsz7ShRD6mpSmZvdz9rvmKEZBjdbLCrixaWNbBCEQW",
  "key26": "CCBTtnD4AEirotzgZwCrJ3wv2gFdwsFfuCEqvvEM3U98AHFeYUi1G4fYnQidFWKh6QozUBnhAtHSTN1ZgQ6rzfA",
  "key27": "349xYxkA8umenyLZk1yprRarQNEZDqFjTpKFFKhDtj7W2fHZoBQ6MfKzcRHsnCmM2BXh9C48G7bcn1ZcnHk3p1vz",
  "key28": "522i3La3Yh8TKgw2SaV4i6TMGnhDvDfATd6EpSrAEScm5ZpWjVqWTfNWQYRP3q52BCKR9d1EG9F1esYiZyYnSaEq",
  "key29": "MxbuarenwWA6TyZScd62ZAkffWdo4UrKoA9vfi6TCftbYZoSsT2YgDiHupL4FqX7xAMQh34nMDbeYdDioCMC1Kt",
  "key30": "5WHvVDR52BrxrFw48e2hs4Vf1yRgfvmgpc7yRFxZFNux7gkf8XYaNYq4QgSk2QwSJqEp4QVbqzr7WB7CBUwVyi8o",
  "key31": "3vqcBAX2hHkoGPxuX6BFMmi5P1CmJQ8q6gLX87QckK3FMJ5S92yTaav78XahyBSUN1Rq1LFMfUQ9YN38zrGVAFbi",
  "key32": "asBSm5ytbFu7CZW51A1WBxWADS4D3vuRePZmEMPAf5DLpmYaitb3yqcdnUxkL1RXiQmu2LmNDoFGuSMkcUQwd72"
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
