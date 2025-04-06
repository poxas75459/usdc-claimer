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
    "5sj1UgXTTneb4o3B1RR2kT66EubkAdWgfiKpr6sao44ju6n9YW7uaaZpZCcxyjtrmGJxe9UJKySZDEqswqJU5rVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pJstTLrjzhr1tfHbBiCRNhR7jEyypesG1q5vEKXK3WYnDDfR3NYjsBueWpUo3LMHptvwmzDKLtPjX8Q4kapQ56r",
  "key1": "3GPxqb3irpFd6Zzmk1Xav9bxfbiS85AN7QUt5tZcf81sciiAQFKM2PsJ58FQLCGNuBPGSxQbg25A47yW4KwWkv13",
  "key2": "5a6oNhR2jsVsJXHBymgn2tuspWq5S8XKjbSRymepJeSAYQV9DFP6s62oHxi2b4tduiwbhqrjztF1fTLYD19sHJ32",
  "key3": "2FrF7R1aRE5fn7CNSeK4KJAhqLVovmEBNHLGbqXBFv2P4FySfx32hotPF8DmTetgkCtdqaVZGinjVxsHGm31PG9J",
  "key4": "2cqP24punL44H6RAnUoo9EmBRgqXHpk3porPUnBSJzvri5ShefcvFAjYUhNWVZjGqLvEdAcBhfoBmhxpba8eCKmj",
  "key5": "mkjC7x8LnTAiBbNy2ZoK3CzJ4ad1MmRoxTio6FXnPeaNwDSQs2QUyK7uxVr5Y1sskhxJQfwpSGm9fciPY4UtZVM",
  "key6": "3LVjTvZMaDWCGrXW28yj4pvTEvJSfH2U6ZGrNMWxzCcXbviMZ1onmt4rd6LvxStPN7YmbEpguQ9rHYUVsLdB2Dop",
  "key7": "31wWsEiWK2jfkEsgLaR3H4rn5ZRdfpx8SPPSRiM2fD7p8cjMQkrX1s8D9G9ynjyTv96mfFo68LFzmGixyVqH7142",
  "key8": "rYh61n47UJ3sqAy3B31FgAW7cqZbgFGenkEfQbdafxs1yf3vcFv3YWBC874v2sDjroQNmLAcVpo6uJnuyMjYwAg",
  "key9": "5aonwF3Nps1aNdgaqu8wKG34GDaG3KcNZWj2Bbqg6GazRhFKZLGNtnMMHxFHPEcuJSQsEiXpg9CmmSivUCB6ssFS",
  "key10": "2H6sekFgg2kXWRE2CfB8cy1VuUZ6nd71Yofugp8DM73Spoe4ZhXRWLnLhmPy5mCX1nSJkfB8di3fBAV9TF9ZaAyu",
  "key11": "5V1YHvq47y5gRFKLctYfDcB4BQ7AXZS4uhFqQMGf2tLjQzmtxedFBMhdSgbatAR9pge4uJZWsWjPLPAMBf9R6tsJ",
  "key12": "Wq7af7TC3vgx4yXbtRuzRn4yNXwKfcwEDEA6UZWFoAoEKSP2XPxrdoy6GFJWEp7zrKV3bnsons3yqZqbquTfgqA",
  "key13": "4F36G2nrcex44hFzsoS5PrrH2zfHFs5BLiRaj9TNhmBXh6EjosENEiNCP8nwPUNNFNAFeE5cBesou5TKv2v7f8bc",
  "key14": "21M5qCqdSUN18QKJLwvAnfFTzZqn5Dj8wnCEBtCruXJEWVjz6GYbmtTte47YBTMeaKxvgmUjt42s73WuKWjf7cG8",
  "key15": "3vE77kFswiRS5z1pRXaAA8CnC6BEn61d4m4Z7rumZbN67fmUSPY37TUHqos5krSvXnjeBUYRxUtxe9idmbMF43hM",
  "key16": "zfycADD9tfHW7KBbxzz254rYLQnt5MRCUewdk84jYHyGbsnnehiGuTFefsFA1ARD8eQVsbEs9EYxGMNUHgjYuqA",
  "key17": "4MdU5oFLxqX7jvUE62NEGLMeAwWRqT9NAVJgbxYb8CsB6v3syzwN61wXkusaNdrjUffkDTUkb3DoYwH194Rwejpd",
  "key18": "64QAfSY746PFZx5ujTyY3Lyh4963JZEqdp4ASDpSsL6iL1kCBP4T9scHmqnRHHWtBNebgdJisZob6eKAVTBbb2xX",
  "key19": "358gMmYB2SzoNNehX3vx2w8WXtm13AfJiCXWgDR81W4vs6xK6SZgguGKfDfj7zGR8cHmVdEkMBvCZKafx7f8gD3N",
  "key20": "42j8ceafV8ezejmUnWMTCJBUaU9oGeri5fx2f51YixtoJaHE9HR4mSoZVPEaLukiQCtucft6cwZKrar2mhuAmBx7",
  "key21": "3rx6bWo634bc7K5odkEx89rrdLrrThFXcegtmGszLgmTXPoRHfXT9j5x2ZmhLFeuRQpdP5FDf12RkqFsAUR5YMY9",
  "key22": "3EZsuX2s7s7jyyUWEu2jpW5H1eX2LorLVjQcD7aiZgLBpvdcRvno3ZL6GnZYJ85UV2mXnL4GKeSfKKQjx5dpQSb8",
  "key23": "29vDQ1CrzTUYronmUk4JcyCQpZj745e3UXNxgDzPYjjQVPny2vmnVQRLN2dm2zcYfxyPK69mVJtM9UEGC6n7tAia",
  "key24": "4McMz731eknDMyhDTYq2MUsiUSM2mYZvUBknkruN6PwcodRr3Bv3HB8swPnsem3J7odNdkrHNTjeKP8Rd9qKQN24",
  "key25": "4UmfsDhSxtewE4d3TigxPBh68YZrSnUs5qAn9GLpTKxwiyPZC5fyHHbx2PmZiyCCX9jx5hfGf69KF55YUEh5Hzev",
  "key26": "2xeXryTdNHcckHz4da8sXYn7npvJcMckxUJ8PbsovK3wgTPo1KAP2vL5sxYmyJgVsAfzy6NQ8EHbg4RP6ecsqfgb",
  "key27": "4aAp4yt62xeSrmVVTxEpYzxmCbFqmqEX8RbkNTDQ5oNsFCM8HCLH3m1RbwXTXA3UzP1gBcE4ssMxQoupRZqqpiF3",
  "key28": "2mxMp3mK13VWLDb3eBC1ERxbSnuUtTUNSHaQVB8znGxsEdbNYPVZQfqCTTiXxrmfyV4WP6EQQEtRj5ecPwjMcZkX",
  "key29": "5yDQG9G5RV2uPypXnM2Wru8SneUnwJS7NFD7hLKQt8RwrNruLSu1GT79sssAC5275C8zgpCBx9jwP1YuBibD4Ttn",
  "key30": "24pHh3N6zaveDxPgnDoi6Cwo13LB1up4Dj6gDUhxz8z3Emq6b3L1xEdWtCJ7RWNcvjbEsNWBKtnZdXxiKGaeDBdh",
  "key31": "4TaEenYafqng1wYGCvy6T7dyQM3BdjK8GC3FqnEZptoXbQaUPZddQNuA8Rxry3prfTrFTKFHynzVdNknsiudddWe",
  "key32": "4LzQhoUEUZ8ZYmCUopST8v6E6eqAKrj6bbJEBSQreJnYR5qiHHPmbxVJkUtAJG7hizWeVe9AgRQzk5QzArURCb7K",
  "key33": "2FJWahdPvTeyd1JmYLFWoREEW4mZp21azPjfdDkjUPuQDX4V9MeKMCk5qf5Yca4ffhR2aEwJAQB1X4J8ByKo5erm",
  "key34": "2ZkR6AxtUUKiWjp8ARzg8puPbcVMmYRhvCXvJHQeZCpk5ET3MURpZheurjW9VQMeAVNeZuq5pi6yzfNkDUnobcJD"
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
