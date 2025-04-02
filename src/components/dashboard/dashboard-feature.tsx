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
    "5z9dUwwM6onJCiGoD7bQrbB28sCVQn6SYDyDFdTmTYv14aUeoKqaH2q5VuyFYf76B4KJtHwTpdgVbVz4aaF2uhWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfwQFf1cU3yW3d2WCsfSxTibSHedv3MmexkhVnaaC4Db7vZFe3pt2s49rJbWEhsd33bJdvwWbBoDj3eABZuEak5",
  "key1": "LKgwtw7wXVQxAU9jdK31xgAVFPu3wQqmwba4XckLMt2vMhknbJrXWpRZZ3p36fWJZRYjEg2dGbWxAUcLGFGXHrF",
  "key2": "2Tef48EDvuAeHMm1UjCfqFpsXFFoxQieZxvopT13imy41mNGm5u2Ps2MLLe1so99qZRowoiJDnLfjmDhSQ8TMvnP",
  "key3": "2dKXzPpYk4pB2h8J6og37WTX49g3NzxnMFjwGjRNZdEH7nKyjieoyLWvtvGeuDWr7oUoP1Bcr3fUz4wgCfP5bnKa",
  "key4": "EbgmCbMmQw4YBTqkRvrb2RQA4Sb9VNvuNGvnmS5FmZq6PZFkKinGwpJKXbaCFLcPzAc7YYzdZawJMpxMDYq9hpE",
  "key5": "2rkEMtm6QX8yVNJ6e6efS9j5ZJXmYFNaF3Rd72fHfoR2BPzEPykU6ENc5ZipGfdBm1iRKDJu1RSeArmm6RG5nmr9",
  "key6": "2Bbz6VRsu4mwPghBnUgPyR1ncSXCvQexp1V8SJEfYKJWj7Rd7vJTYzwn7qbGgZWTXc75GaLs455vrdL2zwTypGh9",
  "key7": "5pHixwqPZeSYv5AYab5nE6WVSDEWW6MEnGFvPDPTeUT8SeshJHXRB6ccGPSUShtrAPJicWwkivtKx2KYdPpLXawh",
  "key8": "5CuvFZ1nixrY1Tb4vBSnMzTNqdBSPPJ4WG2788t5VrBx2p4LwUfjgQNaK8UA16zZzALMDjGJgTvx8JuDzU23zzo4",
  "key9": "vpBQrdGFPVZnXNGvUUs5McyeTLurbFimkcSRrKNAzM5MvjrYiAKnE7qAVBp5QiEwpwRLAfJRnKodLJvSuBAsjM8",
  "key10": "5E8vNjaY6VSYuQDjEPqTfC46mjABP6FFq2zv2atv1dKE7LHqAgLhFHEfd7b6QFgmcd3e2Yg58NyRsb6kkY3PoM51",
  "key11": "4XzqddoLYGnZCgULgJCNhWHNDgtjDXQadxDu13v6xLHZBQwxbFt7vAiQADXPeAbi4vcKdboSU6cP3g5pLsoSkcmX",
  "key12": "27VGDBX2LVtgbeFmkeRQq9nEVJkNBQK5LHZMH7KCLHnENYmxUHCmtctebP2RfdbFyg5B9hCCnEhamiFaSLCK5HNP",
  "key13": "3rsDrZhFiMdmdX2HAw76PPpPJoUU6K1xWnMHfwEKpzMw3bRNQxPRwyAvHF54dbzUpEqtctNc7UrTKiD7H4kUTcKn",
  "key14": "Pg99bd5x6Fhrmf1eQKqJj5L3wczHg2pzaDdSbAFhujxR8UajKv4hsrEHa2G8PJ9KLZDpLSnDEqn1uLHU5tkfBBq",
  "key15": "4sUWevdUqAvsh7Dgt1kfq5iVQMPc1dKpkUCYiAxCFKooeJj9eQM34WgQhaP5cXpMgtk7wkdtzaUWj4oZvAKHozFv",
  "key16": "grkMqFfsn2V3ZJzHhnEGAeqL4AsvwP6EEEvUh19ACq2LSX7CoDzqEUasfvKnGU4duijgTBqcY21sv6hfij2jPFg",
  "key17": "3gE4Rg2SYhCFh4G3Km3JfV52eLBqPW5NtccaV35VKsxvRGLAH1MUsfPqudwEhbjMGi6Y3fffKG34s2ggsfQUEFLk",
  "key18": "25XiPrH6rR47oT9FrxRZPHH4xqxF3J8yBPvJLBxFrRiWsehD2SMvcYkyG53DSQvVrrapVMdyqzubfWnqgrpbQu35",
  "key19": "4HMZVhPAq4KMSpBWWozPWozLUHUynKcG4auroiGrzqv1aUZy1hxNgo835i2tZGJEFC9qyVuXUhtNfUJAxcubBs2M",
  "key20": "5x9uoYU8HHYARihDKqdvdHHgbG87raBnRSongj8W87PCEfWYu9tdy12vwv2ZBDSu3j3G5C5nXT7rd4VGYCczFtgW",
  "key21": "2bPkmcLNCEFe1cr6xzdfK4EVa256hf3eGQHMxzTCj1ykxiicbZ8g3zFaqhS7YBNvPJByPnRjaHMGoNLUKXYKC4gJ",
  "key22": "4zeMUx9iQqsZCSuXsoZCEh1jsbUs7UVn3xjVagFCfEmy78LWvF2u3Yzwv3Kmb3kBUZcQd2ymbt7iZDvp8dgzprRX",
  "key23": "5Mi9A8NvojYXqRXTWWiGZKnMhFRBDXHF9VnVHR6KsVT5gGShoGMshYz29aSp2Q2kXzYmDdjrqDFBfqamTYJA4SoY",
  "key24": "3opTg9SkYCGMLBRQXKfUtUCXZ7qEfCZd8DKon4YCRjZSjTv223HfmaRKNR4kJESbmnNMHfX7MtxFEhLwn8fLGqbT",
  "key25": "vrvbTzqhZshsJvdZisusafNjvvRn9A7zZPrGAoiRCuYg8sQomHQhAjjxFnynDCdxBRVTDPPrGmivkDkyVk4YuEh",
  "key26": "32sSPKVxgCGgx4RStJ5Jr51iCzDxj3psPvzpwK2ERU4Dn2qA8MwaCm2mBXiGvVJ4HsoDYHMkTSETgbwyQbY3XCVr",
  "key27": "2Nf56dhouXWtkJaTGcQEaRormL4ZjzZzycZ4cKTqh2xpVUijkqSu4MxcngrQM39jia5QtG26HR6WnAdBsbBkaBxc",
  "key28": "2e26aUjsp3RXgWH3pdjg3UoFCdhDiBPHeDjDZKm2e9xou1ZXSPZTLNwnXhwDC1Y8KCqdu14LgwTsTrtybbMNuBgp",
  "key29": "2Pngo99J6Faahw3rQfvkVndiU4kCp1hyYD2Ft31X4fYDWCQaFp7y2A4EM3izXgySC15Dcq8VnmP3h3zq5xuYm4iM",
  "key30": "25EuAFiNUD1MeuJoWHbsf3A9L8jZE66vRqDCkUUvSzotwpXHZx1VuxcRLxGRAnbyAwiT6SZkLjJQsqz4F9hdg7ze",
  "key31": "4cwwsBztdxpicymeMRXfi1XjsavUCys3DAdSjGPsZe8RqXPqNJb4fp5bXGtrB2vCT14tjXBUF6YRjPsJYsmx1epv",
  "key32": "gjv6PhTbNc5qiTZUELsDA5oXy9wkxoxzYZJQiTLiXFvaqPic2pyLW2Gm5J15eWngWhLEnxR4RByqYzinvRJjhDD",
  "key33": "pQWqxAjgFLXNik3aSRxVUvqPzZuXmu9ub5EzHafBFk28Y2yPZ3BK9wkob9BUV8EoPDndhqRFKD9yJK8bvfDKbJU",
  "key34": "21FGk2RtY7uqrn4iJNzD7dRuTGUQitQmp8kJ7DzS6Z2KkfR5MeYuxJCAgAUHeTKVPPjRvcPHej2VApnFBy26m5N2",
  "key35": "2iNNEVF2b39KFh8ybuNzHEVhPNcaygfRfaAsBieENWcGRoffCXywzx4N4CRGpgFqALWbC1hQ42EhqeWDNAFmzFiM",
  "key36": "2EvEV4U8WbLCQ1z6yfxDVFyPEndo9MfQjFHb2izhpo4XetQUZNiK4rcKCDE9Hb1YRFrXNnEBBvxtvgaahYhFkLNM",
  "key37": "633RhiLADinhAfYizaSjcZuqLrdGG6LkXFVvXF61aH6nvpW7gu6Yn1DL9sdjX9h5boaDw27BeQhUZHBiwgroPrTS",
  "key38": "62SEmgCxFXog1Rpk71eFrkd53QYWMkWsAnje8rp8vogj5N8GHBx2SsJKUDKCCieeRbFXr7MrDVwiHbHBb9QEMdF5",
  "key39": "5sWFn7cJCSM5Wb4WQgAup18oZKr1QJpNPKhwTMtA6iH2qrEwFiPrnCfSEWeLovnoGbjYKbUtYFYRnV87scx7mm8w",
  "key40": "vXTpW1FkrgEBMs3RCUBTsJgid6H9EZQMbHmqUagmvBpiBstS5X3NCe3hNWXR9dAjUfr1hnj5mYqo9yZirUqj9FK",
  "key41": "P5PejPE8DJS4ydjNeRJEnHYam1t9nxDsuZgBsaJH62sKugmkp7Gc7cQt8w86TW686y67DBVHeyC74bBTsGrZLFg",
  "key42": "5v596Spi4z5aqF2EZZBAoxtsAKcux5oQAUKRVzbBKiptnMSqCx8byyQbMJrxPZBxzt6bpGrag4r1EFLA6sE514gP",
  "key43": "623CYTeR3yAeiYwzhMqNqAMaUmSuahgNYigbR8xpWP6UfjoRZWqbRbb7j3W92KeVhHNJqQdmNtssWAaeMMJRLT5j",
  "key44": "4buRrVxk9YTq5KwW81myGLSg8dbJoZ6AydqWkcfc7CWiU7DSE1ggTFr3sfQXzjmKFFpAkNufsLJ864xbzVxdfnqD",
  "key45": "2oAzCuZ7GQZqJZi3jy8d7GBKLFipRL9cDRfTNpQ3TSKamcNSVUwS9NMTgy6vKUf34ECasgK3eB4ZHeLryoosDkdo",
  "key46": "5iGGLLsMEgR6avmj5KAd8aK4K75Mh2BcCVhEREEhr9QPCgDCwSPfADZk1ihqxhHYw5YyJjGYdvBbmRzBAj7tyhmK",
  "key47": "61Kn5gDLXmEmCbCXcjE19TQ5NKxSRMsk1hp77ePUsLp8SoCuVVqB6i3uMMJkPo9xfMt9CCY4bUsQZ5PSSqdBGVzu"
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
