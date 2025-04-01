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
    "2qaxBLvRyM39e5QCqs1yfZ6wpMi2UDBEoZrUdSqy3PvF6Qr1r6YqR31HN7887Jnr2erLnCzbGw8n6hWakFgKQKZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTVcSNnH7tjxJK6HF5GpwTFjxQDFLhtiLgBTNMGQqp1YzH9QpZgDPMgsRaTsnQmkSCAxvhRvz3FVPbMvxEdgkep",
  "key1": "56DM4ejHQ9TuE8zSXnTUx5eGd4PpZeJPkaRJJKpRTQGf8nGWrQeK8nKkrUXaAuA6YvMFyJsu81uoHRgQKDCzaRPU",
  "key2": "NKYLhk5ttAu4ogQzutQXgG3WoMFntCh8A77zKBECU3U87FwkCKkg4YHYqNk6nrsAMBA81kkLcaR5L3ZWWcxoeYh",
  "key3": "1BMXUYSSjEJJoSGFjnQewUc174SUPe1LnuYfoFkrp3BPfk7cL8HgLHp6FK9mA3RwHaChkCFX55VT4xSpq7id2SV",
  "key4": "5pJ9Lqf65FiTAbmj84AMU6zjSD3XXsqyT1a6LBK26zABXPqvEw5A66vM8n74KVGRTUPbALuFdBKNVqKkSoixKivP",
  "key5": "5Lm8vK9cuU37zVFgmdhq8TZwCJGFqZcAuWHdirXFKNtbrEpL5cCrgWympYfZ6hQ3hQcAbUMFK7Magxm6gFUueL8Y",
  "key6": "22GCaRpfYP2MFsm7tYMiRb8jBkdG5rR9ZjdKJReyR4WKWXUvRHJXuPayQb16eP8vMZqyJWaxAGXp1t9BXQGf28Jh",
  "key7": "8UtebYpCuKpC6C2g6UYJDx5xH13hMnEEZnEdHd4UB5ErEeiBBuyhEqVAtyqEcxAbHKcJ8iqpPpsuRNCHnDT9a56",
  "key8": "5NnTr2cWX4QZbc5XkvxknvB43DizV6b5YR5YpDwGj8HZCX6jkYs52Cowjqnux85vy4dJ39ZzrXYU5GNQh5SjcUdW",
  "key9": "3Ma27CfSTQZ7W1ub6ChKbFxxsMkpTUgiNJGAsZA67oog1FH64FRNo4DdHsXaPwzQp1YmLj3YCg7zjfGxpzqR1N5",
  "key10": "4nMT3m2Z8Qz4RktoSrQcjyVu6F4WyZ6mHKa4CYe77223S4scviB3ynoVnCQvaZQDsZE3gBeXxz55RRhSxBK9qyFk",
  "key11": "5wB39nMHAey2FxJPnrKwN1Nk33WsVgvmNN5Q58xH7PNwoiAV19y85c5t7jUPnkEUT58m3MzFEQYuwbstpG7JbVrZ",
  "key12": "QAnCXSWnyWcWSdafWRm1rkbErxtAsg2vGJSrnL7BinkQu9MYMfwrmkEcaoi6zRfXnzfAtUtPVTnDg76KNtjcKnx",
  "key13": "4kHejAq4NzM9pzm8iT8bQdv4udWM3gPf225EbF6jGqYxAiPpSMSPh2bbjwE9TvVD6f2ZCDoipz2b3idbQ6kW2cyg",
  "key14": "twUYpKBJtwWbNVMp5vn8Sf3uprHpUvPuEB8D3aNmB2ZzxGu1AMcYGSagbw49gjg21f9hw5BHY6cQWTxepzGcnUk",
  "key15": "5REvpabxQy1RjRLYu9nDsgZ5QVdoLVnrhzeG3sXtxznGF4QEmJUmhT5LP3dYBVVs8NQeNrbaJgM8S3qAReLVLr4b",
  "key16": "2F1YXVaq3mc7W6DscT5MrrPMoMi2ceSviGsCjM4DUj44qebmcTZhKfTiBfbwGz1xZAaogZB5XPTZNL7e5XXLgbGF",
  "key17": "2NwXzhbpxXTLtsTPSAANcbLG759V3Q4vHB2u3Guna2duc5ayZr16YqnMerq2PXfyhiHR9Wx4SmqRpp2fGqULrJqj",
  "key18": "64cAcBR6PD7TzQgHxrsqKbSazZQUDRRX2GYzPbEoAAZCAnhqvHTTYJvBTD1PZraBD191wtotV9kh49E3b1pZyCeA",
  "key19": "2KaHJ5ZMSFyzEN6kVyVjFQDrJ1p4jz4z5EuyFAva1gdbJjYUeNCZRYMT6TkwibrYdHcthXRfZKtefb8wt4t61zrJ",
  "key20": "t5U5KZsaNyo8fwFG3aPEt6a1EM1HgMsexu24DPuk7UasVpVorLnvY2TZStz1gxs3dNNuwJF4riqxyuwNfcvMRD6",
  "key21": "38Df1Hp1EqUHQBLp98RvBi4Kn4ERo5ciTqR8WWm1pkwjzqSJj5tA58yQXGgYsphgwqvDzqmkwqTaZc8rsCD16msn",
  "key22": "2M5f14bvKEq1raA1RccHccsA34L1TKCc4awQUHjGuC9DGrZ6GMHJrzDsxuJ7BYJai8d7FeWTUK5zEdr12M4RcXjF",
  "key23": "4E7wEu4pD2QbyLUjxCpec9cT4MtqwUyqMF1E3XtuVAPtoFs8mcWWYvEtZeEJ3ACjxG55FJYebBKZhUfj8JW8qdfY",
  "key24": "4CzCsjJQC555P3QoZHiaCiPHcCAUcRBNxrfVpyuHnX6bdmtfepWBsBLJHqZkcuzubCEnFMzkvsTFEDXXEvmjnCss",
  "key25": "57DzPgCWAKtah8weXmmdgf6odbVtA2tgYk5V8hFu8Fij9hdYxAtzkq6BHHnvQVPqqg3Tv4TLgZS7R7NtzSt39VoG",
  "key26": "52Hz7xLCCg8pzV4usLM9gXc8QxGRuEWb9CdH3XREoiCksRbc8rNdB3GvJPYbGBHw5NscZutcsr8nPUiGvzFFHZ5S",
  "key27": "3miVbsTJE3fn5muusFt8PaGZNfL5Lgojc7CaYE7RowDAAjo5sqWyVp5yggHXear6z9grPcetZJuKY1qmCmc78gVw",
  "key28": "3wJmZmdfW8dRAPDFNaEhKaKrb3cB2BDjYmP7SVvUsquABhDZ5vU1P1sXheAEM2U3MusQoC4qCewrwoVeiKWREBRy",
  "key29": "2GXtioUjTERBe1AJVDpcGKCaE8pbP7ogsBAAQSHbLzHUtsWcr6VPyuCG4ALdQhnYunzuxMY8VkSnL5gJCK4Pow71",
  "key30": "2K45bCm5YQxUFxybWn7fshzomFkyjNhe1KePDCcxdU3tyZqdPV421vVY1aav7TYyno7zjDrNZB3f1rhqJUWjMEMU",
  "key31": "3v4AkZL2tEk8dqvL1RqtvdqRoRpwBgYRg3hvRmPbWLCseV9LaBcLSs1oEoJcHwiJBgmUr2bqTGmBTezhuVpBxWTJ",
  "key32": "2ekGwA83P4X56MTvXagGqo8uXTNw218DNKxCxjbC3pUbnxCjBvtAACCfXhWb1ZQzLFAEpMg2gkTx3GhB7j6ciEr6"
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
