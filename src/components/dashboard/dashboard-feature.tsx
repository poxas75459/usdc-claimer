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
    "2Ymu81zcerS6jtEy6AonyDYwU6CeGJ9aHG6MhPmJAuJpGgXxh6fgU3Mmie3kPxkAbKKwrAqySk5KVAAh1VaNSNAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egyFoGXoNJN4H94BiKXh8h7aG6z5SkN7qgLKVxaqVssibAnouGb4VvhM4ZZDd9PhzUd99Ui2jW2DXzBER6h4Ep3",
  "key1": "5cEsFh6ZMuJBabFTWS6gzFznWuXqCTVqS89wkkMJhmFYVypr1kWScKeeW9pUyW9JWBCSRFZtTkcnfNdu5rZJTjQ7",
  "key2": "5eCPT91RPYrMUsk7XrRh1eCECdPQydivu92t8dVFKPNZBivQvKo3ELXw1AVKGitjKyQdPF9ZS1eW3wV95Y3uTb85",
  "key3": "4UAK12hUKwmT3vLB5CJbBmnRNzpSz5w6cQNTuC2RuQaa9x3K8t192RNnocjofRT5aT1V3KBSrM8Vy3FekKYHwukz",
  "key4": "dGwR2yoK8Q2VAQ35LHL2qUGky1c3W1TbpzGmpdiaMQw2sMjye9Fv4953oScmKS1wgmx78Bi8tGUpNcmU5oyYE3K",
  "key5": "57kAN98sXJ9jupMhG2DibUQrsw5q9Csb76SqKBD9Bmg28bg2PB9hS7htfhurutBnaJ387ZPqJCKbsS5qDtKwv5p",
  "key6": "K7ticB7VRCii7fbpg6EuL8zqbzbUUvARobG6Tn8Pstr6PMvKzxKruMX82D1Z43xGbHcR4AgDciQEKrwh98zf6fC",
  "key7": "53vsrqtdo6vNiXLgMMeXJFrVhFyj3yQKXPW6YZuB1i86pQzBPdJ2YEySQYfAemqAsjz5XxngXdKXc3T2s899Wc2z",
  "key8": "4kFbWf8AFdbvogeGwRxd6NuJHTQtkUmBv5XPmWWW5WeGbAvCnajE6r4bD5DSA7mdNKfmMhjJScY9DCwAx1D2uiwf",
  "key9": "2kxVCf67BgqX4EkVBFKtfKhbbrRQz5HDGmiiyDHhF2DwYogYBsCgDZRBv6TxoMpns6bNhasvdH3CPzYqJ2BSj4qC",
  "key10": "3yVYfxtzMFuHkFSTkhPYdpS273EtMxNcy4gkPt5rw14thJZ7U7Rt637qHyZDHU11XzpJF7ou5ABGniEqLdPka8JY",
  "key11": "4qCDwBPxqyMgWKLqnsPYFg9N1GwN1rwxGJTB5SuRQViKo7C9oN97ZTT2pScdCZdN1uvBxYNhZmazYatbRZrD7in",
  "key12": "2DEs47LgdrX6TQPixJAZoL7TwvRYuXDx3DLLfPWjw4musmRt1SqohbgFYHykH82BExAd11mZbHDCYHLSgDksCsGP",
  "key13": "3YML7DQisuNvwhdik6zC39FyrzudKXtdbXDH4xu9bQD6hzPuimMCoUdTxyxqqhXuLXnzogvyfoVyGyyYSfyuocHY",
  "key14": "3PgBaFftYXPsNmgYjKpqZAijrfUjhJM81bxFSq7uEKxyayvzBxokD2yXsqRaSxoXNbkscM6LvzR3XoXa5QVTfQTS",
  "key15": "3YfGEshdLuW8nC8kzF1q9MPTVvTriFbjp4DY2H1LqMNSRNaKth8TDP6cocYbiqJ5X1hFQAaoYauH1o2P7y5oAgTd",
  "key16": "3rBxX2wW5E6F5wxqsKGz9h15zZTgd7zpuPB3LVUJHGXksgzYjgHRkynvmwDwcoDpH7gNHd3ts9Xv6unrfZdkrzb9",
  "key17": "4HEHBrEYM5fPJz9FQ3wb92g5nW9WbgyfLr6RRgYAdaWzXoLnq4ne5JsZz5tVFN5gyoE6prQUNGiTFiEjV2tDPokX",
  "key18": "2MuK5X3tz4NkSJdRiQ9gnWpjRtB2obCiaZDwq1cAgffFTjgJZeM3mK7At7VsFtL8J5HubpeSqCJQz2eHV9BuorsQ",
  "key19": "3chR5tt2ZwqdakL4GUz5YjoCnYjjP8EHSL457LZEoPD3gYvRErCL1EeA3gBYzGSHhHJRFPWwntd8qb4k6CSc7PS1",
  "key20": "JZ8Dc7DsM365Cs2abaMHhJU6JLyea1Rb2AxZjhZM75ofxfsu5waxq59x1qrfUcQz3SHzfjUQLqoC8hQARYQ9wE7",
  "key21": "4C2fVLRoBiksTPzjxyHmkxhGL4pEYF9DAuuDtartDmWhtQabd6BGAv79t4f9WhidBBHfzDv4nMnKc4FoecqNK92y",
  "key22": "YwrJqu81YYi4JWPVK6X5VqzcCNTfeKGd98CSRTKB4sExxTGCCjCBKiFkfrtQTdqtCRpGTNAQuGDmg73wPmiJsec",
  "key23": "36RTDYLKk2BMh8bidL65cpyWAbKXwV2ENGmiBCzWewk5cCpYLAKscc2ijFRupegGLRt7hkPvRa8E7hjpgZKypNT5",
  "key24": "Vt3u2b8ZboEczSsRWDKkHArohPQX5Gif4vH27EiGGPmHxDrJCMFRXcmkXR6138neaYEzERMSCe67zhxFTMp4ZEg",
  "key25": "5mMVRMQ2QaTs9qVZXooENceKtBxV7TARNwJFRDBaLB2Lm34wN72ZWdkWt99GveaP159xY18Djhsu6u39W6EFGsdL",
  "key26": "4CW2xuhi2TUDD7c21JYSJWLiVe3LAdmQNrUC5pLbDqmj22uFSPLy32B2SrjPM6etXgiWcUnEuBo9qWxKbs7Spbme",
  "key27": "3oZApQrjaiJD5f4f1H8Rd4xTcHsz75b9egwFNnCmaCMZwU1qVxwYTK1vcTFs338HWURYU5Uo7cC2FzKV5sbCeAyf"
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
