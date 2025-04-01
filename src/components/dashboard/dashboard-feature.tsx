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
    "4arNQQW779UGATzWy3eU7kEw6oe9SdKnJrvNivpvxoLyQn6EhBvP1m3iC6XkhejA179es1p32Fr9SnYdNnyQ9kFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCMyBXiCFpjfUcVU2MHdNCQp139zL4Buou6UaPSmaFh1E683rdPNFYtHKCihbfRz49Lb3iUobX6CJnabnkiC2WA",
  "key1": "5FEtMVBHmyCzaA5QVi25g9yYjVbwtXc798Ffye2yGmovHfBD2ByyfToG57DyD3TyoUTSHemWPpy7QmR6EwqNepnW",
  "key2": "3mTaKU4SHwq69DCi419BrJGXaZQ3g8WmWr5Paj35RNUyQ46q6SnRshZGyKJuf8chXhWkLBUzRggyTsCxyFzM5ah3",
  "key3": "5RLnj5oszdWZgWtXimA1c5MtqBQbGBzv4wnHPjtDFpwWH9ifykBfmRQfbQyWx32pa5muY1nNqdann76uoAB4XLi",
  "key4": "5oRDMj4Rc6oHZYQNZCaRNSxHS4rbe5AqmFJP9M55a28Da9rm2emGFRk1zByuKmE8rHSob7rSY5JY1pRRLHkxwif",
  "key5": "3WFfBA2KfgWfQ6sAn1nshr9yHbDX5EofFfTzczCthpsvKtR5f6pV1JwQYfeExSWcy9Fx9f6hDh2iNJtNXQwy7X8L",
  "key6": "5RHqdES9c6x8me4ovYZRNQ5x9P7TvBgM8dhZqZDwfDJ7fdZLcQYXHpwXFzuGVP8nQAua5QU2bUhCUsZNqRCW5uFg",
  "key7": "5CpFqJvL3xEqn3y3yY6s4qtNzp9cCjMXsWFgfbe6eRptAMzdQWWfRbmSnd1NiC2et762p7SG5bwpr8fRHNxDt4W2",
  "key8": "2jRfrnrLhAYkF2UXUvxvPinVA8RwXVp2tAT5LwRn5897Lv7XzkSPoYiPTdxHhFEtnPebsinjtGVsprfSdcCyppQt",
  "key9": "3WFda5UvaZdXXBudzZ1QP3C31WRGyKW3T2twFwEsHaxZfAywMHQbNTm6RM2M5tunhXUp3iqA65jnvmbTNqf5LNHf",
  "key10": "5NSqRrJ66Qr9eSTExnpzfxMzrooRkYoh5XnUrgo3h7js7CLq5mDezKJynSbfryg59HkNnyDY538Kr1yC8ctcbmXM",
  "key11": "2dYqsLm4dEtTDfhNjHTRq757LbgnDQRU6mihodPFxGXhNGLrJS1P3n9tqPMo6HM8e8SWwtPhYqu7S7atzieCbbwX",
  "key12": "3GSPAyKAjm3sbffBQoCvMXvsHML8B2MWfR93w88TDWhGzvKtwirRYit7HxV4vF1apCdqYAXw8TqqK4Kw8G64PvoR",
  "key13": "341J3sD1YGedjutLyUpzPwgkWi1TgsPEa1kG9SSwhLVQZxfCkjowuRvdgdSskwVKz84uana1Q76pBaYMvnr29Vpo",
  "key14": "5u5U69wvyXuhUCAeG1JckrAidzDQLdN5HmBEowRLRyny9Ajy2G2BLAQUKkHTbA8E7ejQYsHC9G4kozQgB68CWABt",
  "key15": "2h6BrCFfu9W6LLgf7h6NFmUz3WM7YvfdksZCWC8rwMKuhZKCxshA8mvz7uMXEqS5BqNLouRtyk6xiX4bd83WebYZ",
  "key16": "5cZedwJrRMfFNZGxLBCriHNvhJFTSCGqyDCjeZQVJmjtDNTSsSxCiC8jmtEt69GaH1ZzJpLMGMWwX46k4fivT4Ze",
  "key17": "h83GAXrgQFR1PtQBGZMpVX8gvGSB3ee6cD3No5hfo1Te92qGBM9Nae4TRBhgwFMnvqppfBbMU9afS1fhTT2NCSg",
  "key18": "3QgQ91oZz1S82atVQR2Ucrx4aNZb1k24oZmPmtHNLTEGXg7aS1a9i9yW9jTaeDGnLtL8VXuQVK12W9SW2QeBDMtw",
  "key19": "2J3PfMJnymP4hZWQ7xpwzpwJ6PmwmiR2h2pxxG1j7H7PaUHrxMq3YsyCooDrZJYJdrdVzsxVFHA73yusK7J72wKs",
  "key20": "3fBHcRKJWDnFF7sVgLyThJuYSEWwyadRDkNL6JGE9ZNT3e7kr4wLpWYkgEh2Puwdqu6u8Xd3Fa9qGTC7q3XSY5zd",
  "key21": "5uhxK891v3tucbYYNWZmzv82cCfpuQXSTCku2iYX8xyqwbZs1Di4T3cPbLQ2uuWJgf21Kak4AtXTwb3U4fDPzeNG",
  "key22": "5jXM2oHaHgtCKvuDzWG9VhaPcPFvvy98PiQYAhdLKP7Mn8VaEEdoZFZ8Z2P8MAfJrTG9TJHcEt9aAW1Sg8Bjk38b",
  "key23": "67bK4QPkBsdDsMgsEDRtPBqDY1dc3dAquoS2hW74Bh2WorpVgi8iGe4a5S3tnd5UnXp5J3CCVp4RYUQjpU6913bE",
  "key24": "5Yw9vMU8VSLVfppkhkqiuQgMRPHHhMtBFwrfkySd5VJxu31WvUcWhYuT6Cw5C5U58UCiaYfjAk5MbCQSwt6sTKt1",
  "key25": "3LhrmWLetmzb8ieJta3c89mbvhCGJzsnakyy9fvjKv7r8QTL5Z33Ugrr9fwbaofFQEBBWW7TS8DthzHuUUFF9VyJ",
  "key26": "3Y5graRSi9TSJ6fDDxYB1k8xLcSUw175anJMLYWsVu6Mn2kFnRSCGbCFgRATy7xFmoEEdxBK2ji2ZZAfEQtsorjo",
  "key27": "4kFZ8vgnq2pqiEe8N2nWVZBN7ejTaePp6jqW5rWCN7jqpFwCPVhsKYTuidaR8WVdxUTJFSPBves9gF7YSXCeN8QM",
  "key28": "2Kr5G3zRCqoA73ChQmvdb335WNYfLZ5dFv7gyqqBWET7hrieAnc68Wp1ouYVX2LJV6RayikAKKpMJCSNJsGsqyxD",
  "key29": "RvnveKbJv3k4wSZEiUc7FWqqEPuhHoJXnLd5yAB1tc1v3dxDYtmZWXXt6hDwvMJtr1hSSQGDctDyDrH78WUC7AL",
  "key30": "4xopBZoi5V3hLtt612Yb2u6gzbAsqyRqeyRZXASggWtCYgeHB9rWTCENg4cFmevSYgYZjR9t2wbP2sEviDZm9CQ",
  "key31": "EDfTAHTWWaWF2AsHc1tAJiAYxShDJ8FwGXZnyBRCC8Tocb1WYLchccjL3ktPEqjaEi5YK21aKoZpz7jLdVEsj2R",
  "key32": "411de6VLyALh5fpcLDutydqUDKXZ7PwcDAkLbAiUZCdD4DvhEPt6gaNX6uY51D1YbzEd1SBPYg35cD9U4cPoVeW4",
  "key33": "2KmH4E53G9ZiojKJfmug5hXoKU6uGHmptPrzgsq4772vsG99FjWy3sp5kKSZrjGmkEVuUgAdH7DQu946qvyjm4fS"
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
