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
    "4rTYMxuxytcefesd9Rhc9e5k5AGchnMeEdepC9o6VAREjQy4Z6VhsAGYyxCMV6Yz8TAhQMvRS47or3V6PSzWenfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2geETFefsaG1TXeyYvXuceJJyR2khEepAgFc47HpFN1PoRVyqHHrVnrFA7th26XgFsZFB9T9Z6AZTKYkfQEptXmX",
  "key1": "3d19mNPjEKuN8rjDmcdDavavnsvMhxGb4vrmBCSqJvCowatL6m4itAsqTm6TBVnk3dBWYQAfhVBbtECefCA5Hc2J",
  "key2": "2fu2DN3V4izQ23RyHfWPYnZieYLQA8rzNtRZLfP2jr7x2PdAp1eLgbrctijdWigfGtjyWupLmh4Zx2nj5h6ZX8Xn",
  "key3": "2jZHs2aZaP7rYNxoW1o3YLakUBwWX1wzBzoCMUWfjnJRcFk1ZV49NZbn8EkWpyeoGTqWaoGU8yspeBMAVCuSG22a",
  "key4": "HCXjtXJxjZANJ4bw46GxAJLopiDxeNGSi8973widesx4zW31YMhFgSzvcuTVJTiHaAmWfU1jzoKQTjdp9zN8Umz",
  "key5": "4uZF74wKZH1ufSFyqrZvE7PfbDw4x9pmm4rfA8xW9GUTuiKiKBFXHWiNv9JpLvFqK3m49WoNbz969Qxv86Wjsdpn",
  "key6": "45ynD488iVaUsieWtYgg6W4MgiqpEoqa314eNTBowC67Kd6rSGsKQm86smzUP5MAP27wnUiPVfr3zRUGsiL1NSyd",
  "key7": "4rbxbMspQq9puhQ2wdQtubhpb37TBy3b571ocdRFhNKt9VdRoUG4jmAPsw6wpGjSxmrw49SLond4wHNFvvr7Vr6k",
  "key8": "2DLATvXWpFKQsM4FS2L4Ze6B3vJLtr27FuGLDc2FasNZJiL6U1rm23dT4PjHcPpHDPCKJ4FnxtZtxchfsQQ4Gmwn",
  "key9": "24vXA53GdYfXU7uX4vt6VvqAg9N5vvKFBdmZvuLnqz9gw4pCRNEu2bdw3qYFKhV5tKxnk4wyYsZ6JWzqXwiQ7nSh",
  "key10": "4Q1NApDXVN541eupTGQo51UVkYk6YtnGwMEAXFTKb1TvrWL1ja31aMb3HMfW7SyEeb3ctcPBFBFugCTwMLxqu1do",
  "key11": "4aA5pM4Bo5MPDKHTHeVihwz3CbBPv9RiqMGTDzRzvQrUGxuAY5LvMmvxb7LVYKsVuWPUs9fJkcTURumFLr3avUjP",
  "key12": "ua9zWjQpnTKWxyTAZBNweTwXbjRfwjvdLeXcZ2i9KKUvqnaunFgpdZTKqXiViVQ5WSoJiZYgNGU15nGSp8cvLmG",
  "key13": "HYGNrLUeXVzfWw77SwubLxneE56CwD694Rjhcwk116wFomfhLjbTaHrhFdHzsF6afN7fkEJiiAfBK5C1kKY6sPe",
  "key14": "2vhennuJUtBSVjqwUzo6REbNV3vuPWT77zh5SoA7WqGahvXgeFrgDJXgBXaQa6H8yLZRapxzfRDf2aYAjdaTZw2q",
  "key15": "62z95oR4pwfn3v1JYpEXZv7kqKCrD4viy59Yh1AyBpvNU3yLqf3J6t8sm4MiBXSMR3g2ANYjpsCxLMmnssTfgMsJ",
  "key16": "4rwHFcGp5u12DdaNSa8Cc2o7XnrTA9jnCqJsNrxkyxrpAMtWeqBHumz62hCZ2EXD7j7P9jEasR58QjM7aWk2iGzV",
  "key17": "vuQrLh2oKvN7Ks2GSR28pjzYyXBsYxuEnLeKuQUf686mQ3EBGuTkCApWRmPwpnid2kTgES2E5XSwke3iR5x47qb",
  "key18": "56dNG9X6De6rKsS9i24M3YmdhnB1VdiwDQCeVZSHjkY3q53WpKHFmEeLgJxrJqK28QAkpb1TtiKasDYTDa1qnrgG",
  "key19": "3J3jzDiNTPTwoLHqFLAaJKqRjJVVYKnDPtfZQ7pAMR8biSagJFwxRx9WHfbtZQhJ6LpxFyXLwXJc2d99Nb23PNcR",
  "key20": "4vPVc9CfrZB51zudUpAYDAgHDJhzmLj138HLRMM9Q3BY3T1J8LyLfdRSoYUuZFHp9ntfcQpPzRNifQa19vgoe6V1",
  "key21": "5FUHdeAX48XXLjETZp24MWMweAU5hJPDjn11DY9Ecp5dmMoyR2HYG8Aq1yuThPT6c2j5VBP7LiNJZrr5tzqMxiSc",
  "key22": "4EQKgstRArsBbqfkyXxXuP6uZoF1c1LuBcM1YFG8fUz4hC6AX5AAvwUP2gTq4Nrt8i6W5TEQCSJeehX46NHuDMBg",
  "key23": "65TT4A4DPwwMZzySwBNnksEXVpDwbeHvpEZai57VFxYxVKJ3oSBX39hcr2oJGMZ4PfzcncnSwQzCRmypR8TyB7KV",
  "key24": "4f7YjzvQ7WyXeXKZu2hRezCgckuNwJMxC8Ve7MB7frBttRg36dS4b6M6DQADbSiRywaCmeJJjUW2CYWBgnM4c6EX"
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
