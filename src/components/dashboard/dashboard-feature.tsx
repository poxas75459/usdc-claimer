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
    "4eracv5QDxKQ43hjwNif2orDiwrVsytFmDJs3sCTVR8MBNMPATLayL6nw1W7VhMRCFgf9gY6F3ptFnePnmKEqnnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJx8s1FGqkavm76RyqDDVWBphzoLZ8eZchymXsHYHjSNyn56KUDsQu8MLiumzq8q6HWA9Cv1aenrvfiim2TfFns",
  "key1": "56BaKiBzdyT9wbaSJmahcYtiMATtRJb4zN18EGG4dMggWQW6U5A1iBVPvBXfH1cSi9seUz89NETT4UnZSVydoiyX",
  "key2": "4oyK8Qg4pMSansrDdoiy1U7EqQqzSuFXFDqJHifDXdUqWp4PKda4HBYzGVXWatRgYLph9m5R9TG2mbM4afdpBdVT",
  "key3": "wWeMhDzQ2iRqczp7sTEzmissaMbA8ZzNoXuqmMNnzcamnukkWWW75WpghVNQsMvXxPwqZXMeTaR7UamvkVH8n1b",
  "key4": "47EkA1JQk9AdhedT9WycPe7n5h4yZ6X6vMLeth2YMThQ8ei2FBuppGWaztgNFrxTVpT7SbvdZxCSXmg4js653YR4",
  "key5": "2gpZPmPnkkpJ4sKbSQgujc7bRyt6ZC5EAZ9qMNNNhfZ9ZJS6c6xN8PkoCqhsEvthtSR78197aEe7fvBgiG5DfHXb",
  "key6": "EmwWunYEwS66iopWHpVCDgGZQQtkSdt6JvxyEKXEkiFHh4iBEncHddnKx3hr5KR9co2aJ8EgF3kHr6xoVSCQN8B",
  "key7": "5M2hjb8ygmDFTECPVqXYWARu5cHHoTg3hn2qBzUS7M3BCfEGis4eVLYYrg51aJj3Bg5PvC2ng69BfkeRmDDc2eFE",
  "key8": "5d81DFKUAw83bErndMRFqQoSa9e8MMYsaVC5kPoYUmMGic5P7MAvwZidAEA3dFyARzSu4uXyENRjcv3ZGxCVLfP1",
  "key9": "62RDXZtPWGTz2Ky9QjXeynWjKQQQPPUyPvCEqUZj54inqmowpT21dNLepY5QgYsBiLhuyWWffXpHyH7TNUpdYVa",
  "key10": "3nWkmZ92ECah9J62PzyLEZ4BfjjeegEAiHJXZ5ZeuBi91RD5kZnTYLaTHPe9Ds46aGhnPVc3k11FHNstc6qctLM8",
  "key11": "76eqFW9N1uzeXGHPuQN9BiR7QStTn1zGsboZ4nmJzBAn4HoVgJkpZSfJRKZxAbjoHkGqx1DAyFqp2zeBnqwXaos",
  "key12": "ZcA4F6QRKv6b3vmu4sd74ehoACeqTpjgpSFse1uw5xT2YMU488oPTNevKy4Sr8qZhPZzSVP7xLUHEjcnKhD2wgD",
  "key13": "46SpAci9r22efChtEe6CK9mvkCjWeWWhoMv4rZsGc4qumoeoVHvZVKChwnk4kQqc3wy8eeeGyA7CfXM38JkHoJZu",
  "key14": "5YkeYwFUnZrJcDWR1ut9Q4nMAG65nxTXzwcLdwyKkLizmMzephB6FZi9pM4AUk3SnVkcDK2R4BZXy2zPUgmjD6iZ",
  "key15": "2jUtf15B2zcVtonwM2J2WWchBgT45vkuXqDQbuc1h9oXx37y5EwtAe2WirGHnyFLdqRYXp4Eq4auKKR13H8RYy9t",
  "key16": "4p3MHLkNBydX1ig5Qy69ZZDvFKZLKr53TvjdgRK62jp7QnYEa2LSFtJ9wPYfvGA1g3uDyHHahwUW8MnQcbt1p9Mp",
  "key17": "2bbFPh7WkPAYEn5XTMC9C3e3FEKCN7SP3G4bQdZ5P9yU8phi5m9PPnA5xNPU6EYYiqtDKJWTj2QACuXR4AGpSCVF",
  "key18": "4XSRZt95DK3MnyRuMbS1dxhcPHfcskiUo13WuPdFpLQhJb44qzF9iPdV35jPQ12q8PZzVj5JQd7nhzStZQA9f68d",
  "key19": "2uAhizgTL3mCg2FDdniZCJMEC2hsiBFhWm528x4jCSmsYd69u1QdTDqpHv7bbf7VaXF4mJfuf3Dun6AN9V1dpXNJ",
  "key20": "65SowEfpoiSDPXdpDS17brsXaCFxuvt9GgHrD3zKAZNcrPmVAJL7Msoz9RdQsz3LfHGaYwAtPVTUZgbE1TAeGZVB",
  "key21": "5pMG92gZYZAF1PyxczX5SRPTnU81jHcfBYHwurhG7eCcza4JhzgNwXiueytu3tr7JnNuFUvFTA6UTUzJ2iwsba6Z",
  "key22": "19XoC2pUVup4PgTUm4fcuVYSEPvT22hvcVomCd6VbKZysfLoAZb9C1MUyXSoPTCct9pqCSUwTTfPsRdP9CJXNrm",
  "key23": "5PXXKw56aPNieZqWGYLAmcnBbWTF2JgyxF68YmvZ5zECACfRr5wSWcHYKqLF4gm3rruf55hgRwgt8emagNA7CzYZ",
  "key24": "3rdVWeW1XYmhyXq4u5tPmBRk2iaY49M1uS1x3FBwfH1K945LVtMAXS6N5svJcPzhkky3Ks6XLsdEU1vbK8Uew2VF",
  "key25": "4D5vn7pT8EevjWM3ieVuW7FMpNYVfCQMtV4Xy7tiwQRQCbYRFKU2ZYPWy4EtyQtmESzKd4LhTcE3eQcrhvxXTaXr",
  "key26": "3STDSJApWNiimyLVjjkQaNo3VzkDPbZJWfRP7U5rLmEhytWMFdEuNiKdKvMH2PeZPqX5otF7bQTtpY2bx9GxxjxA",
  "key27": "2NdQSEL9puwb4nsFvYLfrDzf9g8aMCsW1uBi63rhKx468atNyTmwxyd6EZrePgTM663gNKjXWYsJ77JMJ23FZiY3",
  "key28": "D4D2feTiZkTDD7Z9KuJX5Rg3NboSzYwk14UzmPXWL5ndy4jekvHBhD2Vaj7yituqwtii9VyGACkrBoLBrFswKmG",
  "key29": "4s6CoPU1EMpjsxXqy8hdobXBzxY1xqfofGFS7oqthav5DicPg5zsjJYsvAp3etUPNjTbHgRLHdANHJ7PEHVU4zi"
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
