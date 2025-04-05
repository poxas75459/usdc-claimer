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
    "33vcPCpuLcAwnQ1szJBcESkUfobDKAwRNtoTzNqsLwAVwXKsX4h8C8rxuiZko4HYCSFLGKZ7MGJpVG3znL9hLPaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRrwnYta81ZQzUgYurajH3UJLSaZKoCqLWVaivUku3tSampkrw1gEibvJqCpDzThwKDjeaZwT8XjRwYzko8PhTp",
  "key1": "4NF8kH1vZP9fgSQx9KDqmctskkbStefPdXvtV2jRdynXowKrr9XWrrXzKkUhfHh5588dYrrQE5cZKXNRsPRWUPSD",
  "key2": "Vc3VxVNsrrLzXmVKJpW28jhHRu7JeTFaVqybcJSTk2uCAZVhFyjjHWWd3gg2CZhQjBPxnQQrFPX6AMsoBJFQipm",
  "key3": "G5WzNMPvPYUzJsbdc2ek1gnWZ9xBiQRb8baHyaoFKsR8zL5YZHmrmHbGoHFh2LagMzPELf4noGCwxPn35rn3SHq",
  "key4": "2kB4cSALdUz6R4rrM56nXnE8n9C7gER8DNCdK7th8cXMDhRHCjvBWbnQwyTACkWRcGV1twMM8Q7cuf77epFd5DdH",
  "key5": "5rbseKuoAPmQervX4FzJmvDQJ5yuavMjSiv45o5Vf67Q63pBezSUuVBamXVqz6KE8Hdzsf89AjSVBHW1DU79NiCX",
  "key6": "3XhwLQ6RsP719qEeP3eKxu453wDnUm8eX9y9sGmcwvNjZiEM41d2A1aTaDmFKxwRrUAaSzyBoUsuKbqApr2wZWEW",
  "key7": "2NoJek2ebc8zxqGoAv98dAT5JWxGKRLFASTUao9roYexeuQNd15qDSU6DzZas8ZDa8xzJJGqVaKiPHdTDe25ZBr2",
  "key8": "3GUE2W7Wy2JatpvMMkGNuc4f9uK8cDkszUAFNYArtaXkZ9dNesonZKz1ujJPjY45cbgtKbnrZ4jEJ7mjna1QDssA",
  "key9": "3TfNn2bf4dGovZhDPkQyMT8ZbnyiUkDoJ3kvjMNyo7TSicGMMSU1Lvinuvy7aedPvyJCprnQSAwYEV4vVb9fCaUr",
  "key10": "8UCkt1BwrybfV6YDY9pvAxyv5vYx4WLBUtZHSj6QqfX3hmuZKDaA2K2XDCgMsTFpdSyXgKE1UwhUqbCLbP1ZhVc",
  "key11": "4j945N7rBCfcsB5Mj7tU8pv3StDJAsHUv5crGdm5DR4LT8BBJFQyq9dJKsa3zzGKAvHcbA373MA3HUcRyp2SSmmt",
  "key12": "2jEjqJVbNQrvj9WHcW4rZEDF7JxLVaqYSD4wKypW5ne9QW6nCu22bnZhf7HkxBbicD8oPBJUxESNKNb2m3LtwQpD",
  "key13": "615Pe9jHdQqrwfWghgUb945HsHEHq38bVRKZjgNJjj4DU6BgX4PhXbT58K1Vg3uM1fG7YNS3e6zeji1d55ZePS7F",
  "key14": "4cBgcA4Sam4xRd9weQxpYxQSdBGw236n84XG3HjmsoGScwjfoQtzqUkXaVyPVGaM9ySTF26s981R9iEM8ERzkef1",
  "key15": "31dr85RCtkv9aucK2MMfxEA9pMc46hKhFf7jyheKPn8uE8s42Enuiu3tgFvAH5o3e3wqyLWi9dSNAk4BQRrGFWzN",
  "key16": "3VNinsd6vFkLaP1f5SAqfDwTRjRBEt1qPX3XugdLpKpXDnuqNWocHm2iLQ997pdovhR8nAf78St336TyjRDB6fuJ",
  "key17": "2dWibk1w31NKbLf5DmC4ncBou3W3H57Z9m1d7Rcyg6EeRg1Y15ouum3piSqufnMy7gP9S4gvDuZ5uke36gpD3e39",
  "key18": "4VZUG63edDjYvcLGSongSivHZQFYov2A735CBvfs8CxAje4PZTFnrzrzBT73E81Ctq7tj9NEGxF6UXTYgx1pneh",
  "key19": "3CWzheqLPHcDVEKztjvLFt3rd9WcSK7okQRtCsFu4NRZGYu5PRB8jZAvAzR7Uwfzq7aHLoAvhppWvKXgvsxx1WMG",
  "key20": "2bdLGzpPmqxhmzWEEzg9RvM2Ruq9T8HdMQyvkjqbUbRCsLWLjs4trSqertgQPvrrP8BL4Z8bkQCGSkwdHW4mMUo6",
  "key21": "4ecNmydmbKohafauyoL3S1zQPamcGTpDb2F6jJMAS5Wv4ZnuVCMSVAjaLWMWqcZz978Zmhobenx3VekVM4APjrAt",
  "key22": "Ahv1dRFT2h3HLWt2swGbxpU3wbVkVxuCq3449JomPFfCfC9LhiKyYzSrNFFMAEY1yL3inuJgtgFkwTr2fPMXQad",
  "key23": "2agrrfDZSfRcHV4gk2inQcVz7u8Dxd8x2uq3GHD6LtJhEfCGx5SRkySqbJNzdUtCzKkbky9to5r9JmtDiRVrb5Hr",
  "key24": "5haf4WFBmmdFfWsRZRQFkJfdLNroLjGU5nXTmyhJSpHFyKUJCTLXenG74Wxh4aZcYkrqZ1zpoyfKzE5vip479wgK"
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
