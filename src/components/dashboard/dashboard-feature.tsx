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
    "DmBfSTuEMsPDK7f4J81KNYfYanE3Yim8mp98FLRr3iHMmDGDTvcArbKnt4m9T3FfdTtchd9AEnMJNLURpTBcqXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyK7kZpKMNmX2YTcX48eGnDHxbJYFJLSdbQNUsU5KZC3qtUkNVBgveuieGLpRshVs3HoY2Ycm7rMwNPY9qjgZ5W",
  "key1": "5qdhEJbuM63pY9XuyeqkdqHdcC76WxjGHidcdJu2c5NyAPyrDzjLFeKdckRKppvGnyxaYdXrMima2iPmt944h6C7",
  "key2": "5QiTEZgFgE6MCwhC8GRpsUsVwDLAMgJHVFZvsPJ1MCwG58hLYNfD6zQfVgjV3syjXodNLpCoZ7kLs2J3k6txrs17",
  "key3": "2GdV4Z1NvNdnwAs2Zpe6oVkkteNDwdhoo7v3BrDxvT58AVkGVNvmEwqyqZfDxPsCmmehV2cb75xncKdUATmTwDGr",
  "key4": "4548wu6kGj7YSpkAbaFPyw1skEhfs3M9W6SHGUizQ73Yaerb7TQhrjNqj75v3671vRQkVFEE7YgG5shZET5SihiF",
  "key5": "3KzMhpaMTHPSe7fgrqfSKVQRwfQCddTSPHDA5UugyhX3LRB4UPSQm7tpGFBegg4B64X46C8ud344PTZtmuANmGFF",
  "key6": "65w6NuGoQhwG1zaSJcAY3G162o8B46Zw8jJMT2CawBvfX1gr5xXDgQ4ebynyKHZToRXVxNdM3HspUdMLAVjWmKoo",
  "key7": "5WKb1aG2U94CLXHB7gjiyokM4xKDno2mwMA9uGMLCt4JuKViGWhmtuJhKoyoQJ5zCfQu7Sg74VpTxdc2BgnmQ6oH",
  "key8": "21LQBDaHd2tT89BVHCBoEnFWACtQJaHXEJ6cXb5wHgJYvN5HmHPxHj5jxn5zqJ6mCsLayHKLSXnQdWXe2F8iEnx4",
  "key9": "2iqE9SVDW5sTJeDqyKxcRpthFdCDQwYUnBrQTotTynygvCTJEZrgyGiWpesnhDgtK9ASRr2ugvzNG9jkYt9okfFH",
  "key10": "4LnWGvEC16WvcWfoeRkz9vK8G3ybe2MNyQ5xwUaoojY9tVXZXVYAiTkZLgQ3s6XVeeNq2F3YzoDnkiqcB6roTYX2",
  "key11": "5UVHMnH989jHQ6JERn4mL1ibsUsdFKogXTL3QXWkReJXoBxe3dYizrdJxK9NYeUshR7MV3NRE2w3k3xYmZdwYGvQ",
  "key12": "3m4krqaW34Rj6m3ZVibrCWzZBtmeUFQPsrkNNHg8CxGrpmtKN3mggBmmMEh7vMmPeAGDpKN7YqMktvGK8eQUbhXL",
  "key13": "7LcFjVoRj17rvsrwLiDwn7A2KRsNYst9bztUGqNgms2VLZD7LfQotWSDkdyUS5iGQMDV5xjmBUZibcfa81ZE1WF",
  "key14": "56JaSpRb4K311yXBEW763YxoRAL93svppDqrnCeFkXL2GrbAJYXEW3kAfzdWAd35MfDCPe7eQDML3vbxnpie6hhg",
  "key15": "3rgTwfPkY6gEEbovhvXYRByQH8F6dqsHaMymrGoMSErc5sChG9Hmi6bXzi4kTdUh2uJUHYdF3H6pXHTpzNCiUw2V",
  "key16": "5hdgYRWNQD8GNqSw5vLxn34zTDyPgupKnhFEL29xyMdZYvhMS1a21mpZFmyxsP6tjfwfpsS4Z13YMMZbH97gZkRZ",
  "key17": "5bGhbGfeRp735Gr9brVmufWerJFcdvW6h3cGt7TRE2AkB4cvT6NZ6WUVASVJersJazQUNWoKvEvcVvsqE6GZ5p7A",
  "key18": "2dx6bkz1HqacKieqzUyqJwopKEBURrLnRTeE2BYqfbsPdNBbCdJkVCrDyu4zF9b8Qn4vsLm64FPMyVppcsjdrB1c",
  "key19": "5fSeaqb7XnRcm66rNRujk17h6jN9NS5Wrmxi4mNaTQbUdundKJpuf6KVvgCJhSxsBj7gto7Fr7UFyJLdAdHpMzPs",
  "key20": "2CFT1NdUzMicTRVN7sUYXkyB4dAAwiFNLqXnV65PxVKp6HxcTdprHYGFUhEXMZkLDbbqdvEr29U6EJQ7oLjX2xzJ",
  "key21": "54W2V9QbtfeEvwtQro3bfAZFVx6j8JWcH1Eif9MvV7jB5LK1gh4NaLQ379NNnE8zTGWoYR8BZQoukhpFUWs7W4Dn",
  "key22": "26h44n8vRbsfvkzgTiV9oPHYmAUCKTXEfnvTiv18C5BCqZ8ocUQUx7jsfUVReJHSmCFaSBQie2EMqXWjRbSFv5w4",
  "key23": "iXBtmd6Tgs5tLhMmiba8iRNS7Tr56jqY531Wc3mHyL11HuMnRa23woBTSC6DKbbuCEBrsMg71PLbJRL2rmESUrJ",
  "key24": "4R7etFbuAkFFkFYUi3F9qr3xoiAjRQdpDNnc4Vwkc7xLfD5gNf6p29NNv7uMfKJWq6JBejhJXzkd9V8GKjpJa6gq",
  "key25": "27XKgoYBY3EEyWThkbe7z6jRP9Xa1YTnSGewpUfiNEn6hwkjiGrDcQaAcPD12eTz9RiU1dDf8zxwWpEUXEKFcX3J",
  "key26": "2mgmJUMACVwc682KLeGbJafv6iYjEy3syFKcmdhMf6zDShN1DPacLCbdxCKohNMVS37frz5WLR2iM332UHWt4jtb",
  "key27": "2J7DJri6tAmLoz9F8nq85XMV3US8GAz1Zxj3gPYkJo2iny5YvUefG1M5QSe3N5Ws8qjeie8ChEDp7nXxZUtb7dBT",
  "key28": "3xVdXzZjfsFCTtUUpyk3Mp2mHEF3Lw7C8SCK4Jk9njDSToVrubDWyGaaUMZYFsQApBhSusTNTevmVQ7fJrS1ouc3",
  "key29": "dhMWBv8GDcSXG2KX5w2RKEnpMh7vjdS1tonkY5qanyJFWB1BYVqa1HtSh7feyfZ9ciFJv3H9k5DvNWPXLDMMwBS",
  "key30": "sD9kNQ4CShu1MWSE929Sb73p8qkuyT1QB5wbmxLsMrXSGQK5fivESr39vGS5gc8X17adcwTak1a9To2ndqJZtoZ",
  "key31": "64iUKkrwfQxcfeCmqAaTi9mqML4CepKM7EoR1Df5ax13FhJ35dsd1PPZpZMELV9QLDk4VK8KPGiopkA3dnRV5r5t",
  "key32": "yU56AsAPh6NhYFmCnS92GrbAGXRByRkzgRqXXCbHGiaX8b9URiFvaK2ELGZN4BzgfdAa6DswX3VtzJTyC5T2Pbx",
  "key33": "2qFzZ8WxYpR4VA8w13rWLRNuw6Dy7TJsdLHZrPszf95oXmfGyWV5danxtU3zfhWzPQ8K18U4MQuH1UMjUUWrXMuy",
  "key34": "3aSQZEGVhBVtvBzCkiuUseRKzDPCCZVFPKqE4Ud2kbwZ8hCaPGAp4KpzTKriL2XsHKScNnMpf2w6ndFoXn4Q5mcV",
  "key35": "25Xww3atHa8rBS3QcFeDgBgAkyRLSkXsQscYtBPiVL67LWCG7CMsKQC96eFC92CQWV7b3prtFwG8JsXqFUYVFLxN",
  "key36": "27agsDFfvcBdQXnifiQTMhsoFf2M9fGtKxYReJRJb2zCVeLaNoYLJAAvii9gRiWBVYtA8jf8W7v4s9c2BnfGnoDH",
  "key37": "2zJjFyoB19RvDRKBUWPnoh9Ekg2KGrVybuGz5GMFUn4B8wTi2wmL5ZC1we45PpwpRteAzir5dJZuRaqYB9AiwNCh",
  "key38": "5WehuvuBfSaZ81cdDeBw3qjr93MgNsHQkgHYcbqcbCxPBythA86SExc7YdwYCHX3PyAC1EfREj62DUJZn1xUt5w9",
  "key39": "2P2HgTpd2v1hdQ5BMYpTxNzY2KBNWicz3cyFVMvSrJXkHtD8dQAyMPnGUoFh1AEGVt7HeWSeHxW7Vjnd5nVB85Sn",
  "key40": "5zN6mktPuNwtg4E86pJNT3ekF9SP1dqVAfiUDQHcMCwjLSFAdcDoTrhgHGQCnrv3HeQK4iCPvejALqnay1NWjQFc"
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
