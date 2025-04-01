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
    "2fJ1CNkza5ckkGYvwZRnoziGrct1Nj4N9Q2PcUHR6LhXQfsLJy5q2NwHCiUFoo2Noktr9cMjxyCAHDe29JDZumsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptYH1FgtQwewcFwi9q54Dn7TqtxJSwUvuCBgFMXonbsUbAPwhTayYDLPxrpE5vuV26MXneGqNKDzZyBYwERbK2G",
  "key1": "5bZCv8isCbyVxF4Zc6BLgywSUQEqXpisvdoVVAXpGJhugzRyLUFvsCFPUzP5pwFnmSL6TPMYwhmQNuBrVVdrARp9",
  "key2": "51xGMy18RPFX1PsiwLLj2c1ipXixW5Hx3X569QUry34GnqYzdV7yVKuHGgv4VkBq9T2DhyujGqLAEwwegF75FUBu",
  "key3": "5mH6frKTCgXACAMnfbDM6QKwdAWJKg5En4uTRby5JbLFjiYzEyBZGyqbRm8d2TxowYT6GEVM6QXRNMaqLTpb9SEq",
  "key4": "3oiHkwrbCp3g54B4thz6RkxEeNfLVuJDDrmuDDeUmeJFyUnLdT822QdGqM7LoGZerGmuNixqwewQ7YiwFdu1GxPh",
  "key5": "26qrXvhG2M1BtMagSZ8JarXRzvjUC4MQyKg7xxuokhMv4N1aG6i3xcYhiHnoH7UJBUGugvpuEMwbkhTrnru6zQ3S",
  "key6": "NYC7Tc8qttkrkMmb4ydjB94ywYj8J6wykggr5NYkwQSvw3JSy4V5FxvJVs2JgisAS9dZot6QtrWXGiqMxNtqrRL",
  "key7": "DopVX7DPxcerTH3TNQGCSWUMN2j5SkFwcq3DVjg1Hmdgpci3XH3qUyfNypPgMB2ViQQ47pif6tWX8cTtUvPXRFz",
  "key8": "5BPJWWDaq7j3NXQMjxCZqVajfpQ6mrUvx4Xy8KYRKpDELmQg2MCWqk44dBm3AYWp5svfQv8VTPSfbWs3mF3pur59",
  "key9": "2Y58Wto8PWpEbYifeCHqTWKDPYhgFZSJ8yq2DKkY2qmSMfivD3yqkTtDpeK9EepdkefDGtMdxxNGS8DaoTahoWHR",
  "key10": "5bbjaiYXJTZqQhZnnGo6LfiZ22BMcH6W3q9qvqN67AtN1c19uT6H14r12bmRky5evcBQhCEVxoVVS2YCyWRZoV3d",
  "key11": "5S5QqAB9NZF4hpRbDe9U6wnm5ewG1kPXQXWxN6JnAgBLopnTNfsagUd8Tc17wkiTBrbyS2qrcknMds2BGUTd8XAj",
  "key12": "3y7X8bvZwuENtzFNwQHt8FJmCotSoGgZysWQawm3xi6PBYvPwqFsPvceT2TcASkj1Q6k8e5KRRtm4GRDVDxP5oaU",
  "key13": "u6LXeAKNYaQJMs5uHnE7GqFgf7yDb6nSCbvZ4YPBp4pd9nwQBsFBgcqyge5Y4dAtmdukodk3QaLoJu31cJKCx2s",
  "key14": "QZJDocfCiribEVf7TNJmkJLbeMU5jwWsC9kpJacmoeVBvpJkTJ3SYW8VibPHoNkQX5Q43WTfPKK3n9mpRmR8CT2",
  "key15": "2zJ9EDxVZyGCCxZYshKoqXJ4ajjeaxfXhqPMkcGng4pAxaymijCLJy9M7BciB1xsgS1cXhngBkPKVNR89eF3Deae",
  "key16": "4EHQWo4PAZ67DC5YHJJ2oDfmdhx89eaFaYZqxagKD255YTwiJ5NCU6iTHDzoUstLRKFwtWz1F71yJzrgu1k8jNsa",
  "key17": "iUNDyBGWnebc9LTFAfgGRcLqGT3Kz8zBTGefZfbfc8gPnrWmn7vtR8Xg8df2SuQWBT77Ae2XHhBt1GSmSUpX936",
  "key18": "2q74JVWoPEGWJ5Zwc4Vbqvsggh5xyrgnemQhinUR9CskbdG7qJhmobKczj5qvFVCw5NbJFU7EtR1G29KHPtjxY2V",
  "key19": "3zJEwim9Q75gjPtppFPD6F2gNmc8xmYdoqfv9CCFiHrPmpG3cdhmnkRysBaSaikxGNZqw8J2WqPxvGHaJYwC39jT",
  "key20": "3rz96q8xXaEfzAjP4nyr7P4oisHWFRTnn7xrWtk2PqNQj5G9rWpnPX5DGqVmZBFwdxAUGWmemCJorycAvokn9R5z",
  "key21": "49mRHdDV9UxeuYo6tGrUaymhemnXRAtUY6dVqtyGvFSRcgp4goTWLXC1Abyk6B5Bo4sDwfPyLnruhSTtp1wTFTJp",
  "key22": "2wFocPUc1qi5tKNCBxE2WDRACoyPbJ1UoFEXPfnEkRwPEkb5FUS3xUiN7mVHRuHa7yGkLcKnjgftnPgnMYwn4qXT",
  "key23": "5oi1B3tzmC8fMuVuUMn7uk3bWQAWJpsF3XuNErVcBRsWnFX9KC8XMuaiyagC9WYq4pvjkFrWqaY3RrQhhjdGonfx",
  "key24": "4fNwKBrFqLDxYDeBBECfbC5EuLSskKcV9qppRJpg4NYu8W3wCWYxD6FYKvh5WR13FJGbUCDw64UL8j9DYVZByVkr",
  "key25": "5XDYvxaYB2MqsMdVHjQtZvUP6VHuMHhTHqkf5ViEJGf5fCgJJzeuCFhBuixwZAxRaqd4jV1PCZ6xfUkSSP75PThg",
  "key26": "2xYmULjQR9FPWQwk156FH2Y9eV8kdcmdmnvtD8sZX55dUM2eAr1MCZmdsY1jyvqRDsiXT6BiBX6g9JkPvgRNPnqh"
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
