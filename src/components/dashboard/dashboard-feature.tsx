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
    "FvHaHpq5dnjshKDLLQPgHK4ARVbUGqmt7oNieyocmGcd9sW7ETS9XMNsULGwQEUaGqURkUJhmsHcwjFto6HvdxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3craekpY7cC6sAe2Z9ztoNRLu9QbqWGxXbxEuoeso9jFBsCxg5ShTuoNrDJuCaJDRLQ4orbMPzVqjtBgU3Z4PHqu",
  "key1": "DwibaeBCcGfgk4yudXZNBA1QnChkxBZ6BZEjvMN3RJ61oMjtcPT2BoUvaLEUxLVemn42jV98ePfiqywR1HEM9d9",
  "key2": "31ZtFvH2gn2ScAL6o241fV9dUUi9DGjdyQ3unm3FJbEDnEASgVD89Ai8Uw5YLVfnzfxxXnmdubUDDH5PoC49GGkz",
  "key3": "4yLUtScKUjYzbmqd72x4vAZDMUR746bR5tuWeVAmfA2DMQoptZMamsMWcLMdppuacdPFbh3zV2CCrndcwgJiaeqi",
  "key4": "4x7yr4U2bJ8Huj4pMRjPrHiEFyD3GBCaVg2DTz6kK14a51wqSLYcA8KUQPjEWKnyGzv3mAXxMMz8wLYLsFwuWjAw",
  "key5": "28YEhVWqS5bR5x3owcN6UXmFZQi7SkjuJyvqFTDmpHLzpdVjre4VBF5gRz8RqFKZtH5KTRtTYkBwPwAAnCR1wRaD",
  "key6": "3TWmnnSSbK3jxZ84bWh5AKAEc5Q9jhpn8ncEQXw6UbaKqrq3dyEEfhM1oSbUQux4R4fVFg4z1q66vKFQbMTLre5F",
  "key7": "4UtAjMNXpRHy3BJNWqn162YZcerYF9XZGnfiRWn1okPJuV1Fvz1RprQo8Qj48pQt7ASdg9PVQLh159vFsf77Dfo6",
  "key8": "2wesVoWfBby1bjbr2XRzXckbku2AKz9fvQXveHNfFQUsigR3TTsG2hmMTYYf42ETMr3b3DUc7cnqEsCNYdgSVBw2",
  "key9": "4vaWg76e5CxaqcQJXoxzAzythn2mPi7ax1wt49EBvK3Tpuixwk9rcp5FHMYAwsnbhgxManiJBRGq6beB23qFxNDW",
  "key10": "3W637oBQYKtBcf4SEdxkmerMrs5U1TDbZCEVrWfCQgRBbdWD2T1H8Ng2sE3jzCt45rSFKHxA3pV1AYaAshdVNPDH",
  "key11": "4M2VFr5SdvyBEwEP1NoApebSwTLt4oXvsC1uxfiMnqiDvkbYW6pgnSwChjPAd4TTjzYmn6ErAac9zctJZQoXCHdH",
  "key12": "52kL36YsPYY66SFKUN2oBSeknaUYmhLBdeTWdo7ebs2avf6asfptVEkbPpR8Lerkv7kxm7jrhNbYjTAQu5DVjkLF",
  "key13": "4BrpZb8ERPiJBtLEpgSUC8zMKpa8WSdAj3s5kbYtosqFVnLVoaLn2p2YmLQzXqzouxC6uLpYG5dk77XSQWFB9y62",
  "key14": "5XSquCD3Gw1SvFUm7PmLnQxrZZZdkGwb1J6qES6YTg9EhcthCs6Nj2dexrDchxJ88gnwmCMhP3VuGNs3ss2HUGPG",
  "key15": "28ZxyfUpzQ9UC3U9FTYuUL9u6MCe6memzwaG3f6bRJPBFYNLi2onq5DqoUSbRT6vjharLNRKUp1F5rcvJRoPEQfS",
  "key16": "5Z1ujW1gJwx1PZxo8KmxDegoaRnUNK5kRt1uNu6ZopQCH1kY9iS7PFiqxy5RaPP6ND4r8updT7uNKK6w8ttBby4c",
  "key17": "3AU3iD7tn1pYkBfBtsabyiRBD37GZ4Jy6sqStLZRbLCLCioRdmyRs8kk13ocjYadbsRwnMTbqZxL9cPX2edvy4qv",
  "key18": "2AWoY2QtMgTBW58oyWck9KwFXdu38e9DjExoSZtxyywk94ZE74wWw2B8yopJUjGYWptobqGawose5p2dgfKnoGx4",
  "key19": "4P6sDqDznUQhTLQQmycYUWHxroHau2po1F89BeaYUrzRYjTPGW3uyq85U5BFQ632hjKCAiNhV5AhV5kGVSB5CerU",
  "key20": "5F2NabobHZxhtt8FhJpK9rAWGiywhimeYbvW1ffAbs7Rko4C9WHBYJsTohBSi9MNiZtCy7mCJU6scLE5ZCN8G6ek",
  "key21": "3RfeKcmXHeWgAp2h3P6e9PBpV7DnxUZPcKNmxwUWjQs5zemLhfyHqF2d1F5toX2CtCF36MuhXGqm8SpiiM7vKB1v",
  "key22": "5wYwBAKha1VFrLZ1iQfRmdkVVZ3uAjCAENtQwdb75WJXdcXXXmHo7ZVfJjg4w5PzNM1vfPSptvuZQjKw3Jh1qXe3",
  "key23": "5jUdKvzJ2YPuFkjZALYquxGC5zENofQyo4yKLduAu5WY5wNAtftrE6dxcUHuBLV5CUsPdiAgYbohhREYJe1qkRTs",
  "key24": "5kBJfBsDGrqXa8e8Jp1kwJWKuAuWfc13pBf5gxS1yTzbsn4DwEfA1zeAcycpxwDN8sARMU8ELPgkHzLaCxrgdf32",
  "key25": "37G7taVrM1QWMq7Snz6sXL3x56pPCL8AdCJgNHtuamsjmN56iE228XkU3fAiMAgqGB6B17qzWka2XiE4yb14i7Dv"
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
