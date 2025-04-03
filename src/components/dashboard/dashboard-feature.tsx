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
    "3ZRFkP391BpnqykmotEBuxFm9Hrg8XYHvwAn6G2CahXQ235TsgNQxLK1xf59rLM3N7sqXBY6R5a5Y5a9Lsiy3895"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TExgz96ViPF7KEyetKVGESzzfJknE26DysxvYkfChf4crsDx94dcVL5DK2xcLoP2hxgpHD49TZBz3YqsqurZ7C",
  "key1": "2VvRPbUXy9vpKAkGkVFZWLhwZPf6VMPDEP6vsC7pYYNVSaM5FjzCwRhF9wmUoab1Kw1stxVpikrFiFCDLB7M6F3U",
  "key2": "2ejSdswYuBVsyX5GTWFtoYL1unKaX9fvRB38b92RTcErzSrWH7uFE66dD1Ur6QSdizBBx7uxdgVKP27XeGh6iPia",
  "key3": "t74KPTtEif6JSDJp5zbLeBdLAyACjrC8KotL3uN5fWPZ1KGTgJvjzZgwp5pXZfXrTrdHD5oxQzroJqskQcBBsiX",
  "key4": "3wM9DRPHXtGevyAiAoPg2D3SY4Ym1KcEzctsYWo4R9oPVD6LGC6EwcttEzboEBeY4vUW3zccLankfoLNFPUkj491",
  "key5": "4GSN7rRiwwqNDp8CVVYKso6WMEPGa9cHyNwa4SztTcCdUUB3BFZLqr9UpuaJdAB1EXaJoE6hCUnLmGfZu1khUgda",
  "key6": "4hcnFv6Y1nxeBsmdY8uyWj4NSuHX9jbowz8BPhwtxxgytxf3Wt18vTZhPr91tKwVamR6M5ghCeP9ZKCCvig3JGaT",
  "key7": "4XKY4m59itZa6cTDHkVfqgugRpAk1YuJ5MJFmemmLSajNiFtVXWw7jKyHhmwm82kESgGFXzctkMkYhRAX1FkaQ8e",
  "key8": "pCWmnVPi58aj7nbbVfs9Rs9tCBV8mjh5s6YPc6ccncsMEwoqUoxhNckK4ABq2bs2TMNiRPGrHZMM1qfdoaTmvw6",
  "key9": "2dLuBTg61tqFXB5cD4W2JkhodV7SBoSypHqk49Df9yECLMiMfJHfUPxDtkoTpe7HjiEDoxUe1zPgdiHYoeqqhr1Q",
  "key10": "4gxs29DgqpMUQfLni7YH7sH7Rdohg1Hh9vXjSEF6cjmSRgfrswVtDtCPgvHV5NCaddR3U1s9Jq46Dqag72CXQqPu",
  "key11": "3tL3k8uqWvW98QHnV2vZxiFjYuNQAXi3vx2xd5SnjiJKkAGSiYxjvRD8JJvx3vQhSJK4Yak2VjoZUh6maHHfDGCK",
  "key12": "58g3hkBuZCbH21b6jMdkBmSPAGhrdCeobM8faTo2fEkGGE9wTRyrVbHqc935qFFAoakKVciwV7FQULZ3he64nFCn",
  "key13": "2DtSSrxo8h7mRoaBEkWX7VryA7kdyop9J5WMZtZ2Jkdg4TbPGxoFRkG6JWBgHpRVjkcFFyYiUMHG7xEfRLy7395C",
  "key14": "4ZnMYzrDmf2T5oKY7azGbQCJgZKpHYq892trpdS4gbXAP8LSzpWGQYtQcPPs8zCWRyTNRtmbDw1CUXXG4k1xaWuW",
  "key15": "39jMnkW1Rm3kx1NZvE571vZ47izdnHD6KWuQuHYf7TXEiFidQmD8fjKsHbS4LH4fUcWyDN3eAe21bzhUX8sSc6zv",
  "key16": "2eSNArvm4MrxaFtQAzN6B85Eipub3jdKcDhcZc4rs8jnHBEP2B8pnd2DtG3GkL4N5gnTf79jP9AHAazq7ecg88cW",
  "key17": "3eqdtUvzDWi7nhpBBuVXCP5yLrkzs8Hay33SSwHNAyvAeNpoefcjadrLiV882aiekZTPr9axGCcoamNjNrUu9wXh",
  "key18": "67LumV5Cet2fpjERTS96h26H7xfENnkEx16u8ctLz5UMeiyucCYSsputEyi3x87pGqW8yBmLL8pTgGdhZDrfKEAj",
  "key19": "mLNqYW1h2ynJankBuxJBxXsbkmCAdcKFCzyeDD3FXNHmLrqDqq2KdRbiXYjrtxbNBbNymWaXMEKNSKc62CS2k9f",
  "key20": "547JtR8BC48V3nyi9gJJbHFuBNkTR2Fzz5i9ezSaSUq4et6DT2uLx8fGge9JydZFXeTBxJtc3AUWTEPbJ6z7swhN",
  "key21": "3q4X6HWxZfxC6P9WTSA9iHk7ANUyfqe1UKB1s252ywNWa6jScRbLD21YYGpU4WKFHdMyiLCLK3huzi74CLuoj8PG",
  "key22": "42K1k1Ya6Wh7Li3Z9rdYRwh2eM94xCyUd6UbRHF9HYMFyw6qXwFkWDSgp5taiWRpfPQZLtvzkEH6o5tUrHb4qfV",
  "key23": "4eGx6r5Yc1jMgNkABcdwuH5jTxNJHq8A2Yb2Y2Cq5VCz7Ly2guC35hwx6Bq7N8sa2p5bFRs2EwRwsYxhezVwgNE5",
  "key24": "6SuF6cNXfeR3B255Hc183Zjwbt95cfgnKkbocoaZ1SncTqTmie7gNakvBxoTEjAUqPvc5JnSF6QCtBiS7tzRfxR",
  "key25": "5QRzewcsfXpiD6fNTpe6S5fxBSwKTVKaNM5tY6QVsc4kY4iCS8E4nVJnp9fLRy6USLaeRv1wDQByeK4E55tzKDgf",
  "key26": "3GdNhD8hoKMarw84BfJT649U9dYKxMq4MVcfHEzhUi84QfbvuqqHcLdnJgPLvu3mBxZJw8Xk3mPSd7NqBKRaFuNN",
  "key27": "5s5QvmFZ6wj5veiZVEqk277sP5vqEWE6siGRMuqeXWVA2KjQBrdVGeJfHwy8RLCcpPE26dEZumn8rArwpSZMJgXX",
  "key28": "HwnB5RxJ3dEUEceG8fqRtHNSoXff4BfJYGm5h1j8FYqk5br22E55CsB2GUZMPWfFNT8cGGq1ymAx8mbL1nThDjw",
  "key29": "3kcQoKLoumgnRSU26mtFJ2ekbWHEM74PYLT9pkSPrjWMuAs9M4REqmD5SDsasjXKRZcZrjrC5wxzU78ZzSm38UqA",
  "key30": "2chhDRAhuBa8Tmf4i3NdMBLqYvpGPQtSPKm5VEbCvBacpayD5U4daa4BBN4Key7GXG61g98HzeGMFcdZbs2pHFY4",
  "key31": "3tgw3us2fnJEgqHhTkTAf5nHyJ7w6QSA9TycxGbLSmkYN2FLVBYRKuo3yGK52SXfAEEVSNaiRK3hNUikBnF76Hrw",
  "key32": "RMwjbii4VZio6qb7ek6aYCoLasCb7nSGZ486BbRxqaho5iXviTt65A9x1Ch2FkuuDs2FBQ4oMK9jjwrMp33yQLA"
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
