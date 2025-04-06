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
    "4m5pMZuHdA77iHn17P8oEJixqjp95NGrbg1Z8BWNFkHLwAY98UFkE93Zr2CUJyjyWPgoUKjY9MaLo1dmtRFqV6iJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWepvj6rgeUe6MGZCPANULSwKs9cS6StUBv39Szv6bYZA4hbe5RGr9be6g12qqMyc5NFZCiKBUyF9vLGRgr8PV6",
  "key1": "3RtQZhAsXWnDBvCiy4hVpvSPfiSazqQKnd2PipKHEBg4xrSvviRM5FbQUY4VR2X1sWfSa7nad71m5HE7BBXUdyF4",
  "key2": "3wDHGoU9WNzho3Gr7PSKNsN7L8bcDLKrMPcKb3ekDwe58YQk5KtFvgd2AKpvQFFCUoEkdKLhd4SkXWz8G1VsV61g",
  "key3": "HKFN2kLtRErjdf4pfmsNAc6SNCaYGvVzqArzLhP1GhaeYLHhVH8C4U3d2kgE62FznLLBHsepwpgYkxdYoANT194",
  "key4": "5xDDeYCXtVUgo1NK7GPPftJgHUpT7iJKcQdFXX39Zgc8sYT8jCPXcjo4UmTg82PxR73DmZwMxrsAbjTjhGAUzKzY",
  "key5": "4JTjD6CCPBxbkYaraPWqfwpaVaAe2t1mFS76XWyxQrkBjyXkqKtMof7E8CuvZgy7CnBN6pu7xnqqfC3tG97Xxgvc",
  "key6": "2noJwC3wrsbhoZVX4u28WKbSYkhqyi8YJ3GdhTskc5sMqCJUmu1A3D7vUupttynq4rBze4TQNucrbsf8vqWe2gpf",
  "key7": "5Q1Yd36qtrtrPSGDJWndZWrLaUgNpa9rhcjv7RVn4nhr9tkvuC8egDqaFAsXXqW35oVyucpfAYqbghNpZbwbs8NZ",
  "key8": "2HbDz79MCHQwqykxu5cuCrcMfweArM1Zgkk7LExY53vsBuBNdnoYUHtzR7oPc66B8yXNapw1Voe9qhDk1ku1Wk8h",
  "key9": "5dGKDuQsQWQJXENzJduLo3AZgJa5JLKfob4oZsgqk5otHNQKdu82tKCkv5zsHkinRedVy9YegdGpUXfsyEJy8NWG",
  "key10": "4ccVzSDHz4VAkrMnDmBJzfevLhteMVABg4gYkmYim7Rz78xDnZpKUvneqb82PgRCbQjk8iKmpCcf9Ae8Wttc1rLJ",
  "key11": "3opqwBtYfUZnksh966d7q7CfJVp7Mfif57q46YJHW9jbthrR6wWxvY1U7RedJKPwvrf9rjTMFaH8MsxxRjkD6WT6",
  "key12": "XECVPTakKPYmVPFcfn3bhSxBGBShURAQiP3e1nyz7fiJekP9KWBWsgighxTc2Uu4ZmmPJGNHNuUPWXWjSJ9DGAn",
  "key13": "4Bo6XvdET49sizEE9ioN33BZN2hryWHW2TVgNhgxaVsCqtFTgKCzSX8HDhb3A7WyxGqbRZBjmJbUpenKD5oaC12o",
  "key14": "3Jw8KtuMcyzfQvzeFSKrb79QxrYJSFM5dPeSZxsM28NRFnrwcKYg9uLjh8Rn4j7uLRYBqnATGVR5zz7yodBp4Wyb",
  "key15": "55XkHvhqwe4GT9dCPHMnH8yKm9Po3KWCvhcdehuhNqzYpRyPnM5pbWwetnMjW45p3r14zozxod84CNTgwD3kxfHU",
  "key16": "2VGGovoW15UtPUj8kiyvYUaYqywnhkUaozBdnN4Dhg54ZyMCfTa59HC48bupPL1cNJK5ZGNf1f32VHaduC1vGsA7",
  "key17": "44XJXqLAwemqWbFYr5Eqqnr4AydSyaiH64QRbpnHH8NntNaVCkd7hVcEgtBoFj92aj6Yb2M2u9cMXdQ4yNaNAtAL",
  "key18": "5BfHrNsBDTYjvax18ZtMwRLi1ArsNrvsqufGb7j7qxSaFpGKVQauqxBXtH5FfnZxTcuybh6ve46GCu6PVcgUVAdw",
  "key19": "3Hxhh1ZpaWMhdLicVKM34gaaVDTpvyu42cH2DZUzVP6ty9ydZFbEMKh3mNroxhDYmFu3EqYq1KK6157tuD1MKREA",
  "key20": "TyJyfTXN4mtHemztvoW2v1dSw45mpT1MPERMB2a6KTUoGUqffM7tuMZssFnVzoufnx5ANmf73374Dai8Xsy6gc1",
  "key21": "67REuP7gEL6Av9wSZsxecrhKDUw6HdmCJaVKS1MVfhaJqzGe8dV8Z2vytMueMbCbu2DiJjyxei2hPtyhWupPnPPi",
  "key22": "63YEDUoFCQ1AGvNtAp3xURHSBqpz6rzYchqqTcNMFvBZPWW7EaKFYijvypiVj7yuiPpzS6deJPp4BNKfdLdCVpS1",
  "key23": "3JNm4kauZ4QFwjKpy6mvk6evtKLmQjiCXLG8gsV7tmzhwhoHc2RauVvKG1wcPe8zPb1QY9cYrpAKcJY9CeFPXXxW",
  "key24": "2U6esqmnnEstaYgxpSEuid4UWVsxoSUYLK1ZyHxtreDKU23M9hKN49vMqBJnvGb8ffd6GezcS9eJ6AYLoe3WgGcA",
  "key25": "5Yweg4V33eGgg7kR6fQsZ9mJKLTzyjP4uzr8AEqchoUNke3EecPt9aaB7sKmPV123FZSVZk3qU2YkUrQhRE19AAJ",
  "key26": "26L7z7QVw6NMR52cqRfEcXYUK2mAqBaYMhxjFmjDtsisCsi9bD6bD6bwfMDe7VMw9ATSoBcQPfb2963kc4urkTBX"
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
