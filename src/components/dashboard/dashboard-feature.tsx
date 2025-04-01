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
    "2w5UXnEuGK9as4tDMef6gWkSeYVmemnicnyrhvtQjrTsWoKVPm3tMhrKCsoAsjq5f9hQ4W7w2aBRCFVWJ37iHk82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6DF7AUUbnLpc8gncx4upDmCdf7fNyBvQwpMVTV5Eu5C1z1xjdHsUQGTSmwtUhchqB1gVbWYvDkDFZtx2win6nu",
  "key1": "3PCmwoWfPwrS47M3D8CkupscEjKQBeR9fTvKkQCzqMrQPF2xYmQhGkXKDFWEJc854ZsU7Acr1KhznHGLr2wVELYB",
  "key2": "5VazhDbYhmdT5mzx12sdNx99q96GXLt985gT7suR3TyrWbvhapgfw5QFPeDbhSSBxUmekpfRPYo7Su2jYYPqkpaM",
  "key3": "k8P7NAFYq3G1sxZvz1vcTTJEjgcaGX8y8K3iYa7AGBp14zVfK2ngEeSiAewnUdzot9Tkp5PpvMjnXUN9rUG4BJa",
  "key4": "4ufS39SFZREccmFC19aAJNnZsvSoz9x5dCyaHLZ5ChsSmZ9KEDCYKQUKKDjCyCRdqWnuHPo5Zw3QJNFqJkrLTH4f",
  "key5": "5t5hw5Zb332HFyavPQRthvRYrwYvNddN8chR18zepWm2b4J3pQpEVog9yySHDJ3s6qLLxZtk7ggXW1zjmEJypJLB",
  "key6": "4wSyTsuVPt3M5tMyW75ipQhcpyQ2XQZjkFoQkfpVBxQh7joBCZMHj4UrAPbFkUVujtoanw95EgyNRHREdYR3N8zH",
  "key7": "2g9fJVZeAxp2vRYS4Yo9MLxSeWq3cvCcnqQeqpqnfK1J5ZhGgotceJzPJCUQhNUAnUEx5D8U2e2Ya3gqUMDwrymg",
  "key8": "2j6Bx4zGKVkQnmpEVnBL7W9pTkKWZsAdeEHW7zD35rZZEiq6tFXGpJQkZF4pvAbYkefWn9kCSDRbYHSEt3FcMUms",
  "key9": "467Kw9cRbGbbfn8nB6UJexRYBtgp5zpkwS5pyVXzHqEvHUmAD4saQ2Gn1DdHNXApsEtWrLvASvgpkT5ReJoeDen6",
  "key10": "4YbbhHtBpjfZQNWNUB59aMKVsVQ5hhpJ4m6eeiYWSLEF3Rii8cJHJQ9GGre52FKWKY45UN7CWaVfebJAm4Jwqtvj",
  "key11": "4NafAYJDee1h4QmuzEDa6EQzxyF4w9rw1VmaPFXK46LNm9dJjE6acmigkvwq6xSRtJk8Mk6ssnWT9iau5MBuCgp9",
  "key12": "2EnGWAnngEWVv2jAbyDdYnhA38iPr8hRHJiWcbqBua3s1oBLD7Ko8nHFgXRvs8EbYY8spiK3hx75bET3FEhrosm5",
  "key13": "61m5wLCbpXtJPBkLDtCjzUsL3rvenKge4r3kUj8P5YvJDggJmte37H9wnf5ohqsC4QLkpzdmu4km8xTib1qiyqve",
  "key14": "5GR7N342dmZPNpiR2SCXZSRJh8JGnadNVuN952iqxh4ofCZ4Uk7pCXPtgJQeXnca1eUXxs8uZXFiHtimkXezhBcj",
  "key15": "58SERdx6GaYpejy7srqyG2qGKYhrFKB3Egr4HBdQCyyH3t7ZSZzi6Daxk6hs1tCBczHibLbt9qRWGjUczGpt8P7N",
  "key16": "4FmDvuNDHvWbp6WDAnsaiJmoowD2sBe289x5YtjRgEucK9TgDVR4ELrf1Y3RGvQvNd8sv6MJRmuJQWoUJYZxrzfW",
  "key17": "5Nt99cm8rH7uDBT2ofKFKvbW2eN7m28VVW9f8i81AdTjs99mcN94eqk7g655Q1RybzVD4Pzteb8qQJ2Y8ZgxeVeE",
  "key18": "2XfQBbwCzUYRUjikorhA6uSAgkCe5bPSAwkzbdB6oxeQqzXJfZF1KQ9VnPsbaTfWMwBaVzs1YvHiiUpjpYHejsve",
  "key19": "4XrrF6YsgM14HFqMfGfvVrEixCnBadfsvyHw5oFRDvEHx6yqJRQfkNuHjC7EjngjqxPpLfh2Fg494ryL1qeqE1Z4",
  "key20": "5xQC8spremVipSnRagcNpWNfuoFFXZ324vpxVDcAdvoudDssbdTpqkGLtGgMGb4fGFEeTNRh7PZVj99LyvnrUQRc",
  "key21": "4SzvJa2zVNx3ZbVhsdR9cyreFCg2Su3S65DUwj4gaA8ghBV7AekHGALQ3QVYdZgsxaBM3oc4aXx6XpYsekipKUuX",
  "key22": "4Py1Eukg8JLshkhPfqcBThmdgBBiXafNPb3QqDohhLZ6ujGWXL4pQNmZW8tYSupi5eMVjE5WWP8uyzYnqppSx9dh",
  "key23": "fueYNTzsPm3khVNmQbtkunq3LseKf57xU5BB2fXaWNRZipFh9SJ24NpqkmPJUXdvVFPQ8S1svoJkFVmX9UGTVFq",
  "key24": "2Nv5EgmzUJQJ9RgUoLPKGTinof2bN1jpHPRqR2JPeyyogohnvcApE5FqjQcQyYtizTagyZ4xkeBcqbGYPLmE2cYx",
  "key25": "3Nn871idC9RFNN1n5U98ViTFQdaYQh2rYKpii6F6BtGo72t6W2zRU9KbVsgwHNPppurTto1A1H3bGgL8XxF6yCgK",
  "key26": "3PCra9azfJ1Pu6NXiWGioLRTg51T82NGXTyehZ6zQzA5Ac2WfqzVgzbMAmYCue13ssMpxbq2derUSCnaLjCeJHJJ",
  "key27": "4UvnDFVkzADhQyj5Li7xpLNdHTsS1ipuajmzG61dL2kxLmfVvD1ueQCAreFNk1KJZhDPottdUA9ekSvrjx5wz85U",
  "key28": "4xfma3jegLayLpHA1sLfZ56kpjFdAuxauBticVVtB8TkJevMC8F1KeEPJ53xU7Zz5EGPP9z87VBFrAkxCXxNAg8R",
  "key29": "VVyAAY2WLisEpwxvAGPhteFCgQJsiDyPoUf7prcNmXZyQ5tcwK2FqZaX4xcrZwU9tjkpP7PP4L5ZZKQ4zH6KEw2",
  "key30": "4imtmnRsNZzPPes7yQaByhbV4ZU7y6dvwFEQc6x6BgaRrEHRKcgpUUnjXFsS93GNzWia72GU93mpE9hnMwPPRu3J",
  "key31": "5mMCMG1QRaVG5TJUk6J2cSS2vnyPTRPY4eieKNZ4zpnEabannuGDNUYMkdm6du96Lg5Ddx3oxriU3d6yh6bCPwXU",
  "key32": "5Yjh9ntvfqRRvgfNuZA1FttNzsF1MbcsS2Ly6f4NPhnQZ97ikJdsctT47t4jpma1MnNk2akTza1DiyUbbrszhweh",
  "key33": "2vzoB8BMyfyzx2eW71rAkDjHZFAPB2vceoxniD6fPPvvDF44bXSjSLHVTgT3kJAPnjVYSoem9GcwtUNf3bFfgcHb",
  "key34": "4wAVt1wPufznnB5AtMddYUEcGQiFo2t74xh8s2BPryMiak9sardP3b8DKcXGHnzMQeJWUu96GAZmRR1DWHDpcT1G",
  "key35": "21D3qsAhFPb1NhX6UBe4LxPJXNxjgukYzUoykgfBcRbUoKkedCB9zh7V1WcFjfU3t3w3MEESkbJxSgeT3A2ZRJ4L",
  "key36": "mWqJKaiWoUajr49NkQJUbE3W2WX1pYNt2J5y4CmmhsgPsEirtxgJqJ2vBsgeWotgBSLH2zgmCVqUpUjX9kpKD5s",
  "key37": "rKKTWWYJtACbfxYpvkKTGdctDfwNjp1m1N5PgjGCNHSP3wQ9cSaRZDXkHynnsF2gETPThgnCynrrcxaBdH4yrVC",
  "key38": "4ydYemEt3CpZXXkZdp1pLbMkQoNs9S1FrameYsGvwkoWnnpboBuiTXXwPT72Z7PaMUytg6Gs5AtCuhsjvdwVfLz6",
  "key39": "4KDnQJT9AmtshawuHvX1UkLZQ73HxU4bvoe9W2STCspQ6Q1KcCiuyUgV8THoc2Dx2eZehs23ZYcv1CzBoVXUM9ic",
  "key40": "4qT2xWYnDX21UGqNDgZz3kh1md49KaCCd53MYXCrEoFcY8ixwpmhhFBZwbEPktpHMYmhL8PRMBZbQ7nviLZbLLpX",
  "key41": "3uzumxHAMum2Hb2QKZh62HLptNUsEHBN7NxssA1dmhU6t1eiLBQxPpjyk56t69jco1MMZQJKUYWYHBtC1PABHUSr"
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
