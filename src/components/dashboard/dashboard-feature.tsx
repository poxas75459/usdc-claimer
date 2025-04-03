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
    "534Y4PaySKpuqcxicYMCyR5HvY5QfuMvQoaf2trDwt9EAMwvz6ay6w7qRMpwNAoERjgifciVPLGjpAvofqKZQ9UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cyzveJi4dwZ4eekg8n2KJjhapR1jKWvu1qvsiFjMEFyU7Ku9bUt6T99WxuZ5FxxtiC5eZmbEvonb1PcaQdtH5Uf",
  "key1": "5455NvfxhRjQNwfspkYCg4Vau16Fmpay3CeVuj6bCqmXvnoA6zD5d5qNnDVi9oyWKSzFbc58UfzuZSWzmmEMcEkc",
  "key2": "2aPcEUFXzFESrUt1ihRsR6afnaQKAasw1G3MAEG9YDfC9erxRPSuqZpvb1e1ZVh7uagDPPm5zrA2RrieeZvQLBBk",
  "key3": "5PhJh2SKCD7E1EjbKSiQyaQL8Ye7Tyd2SKmYvfZSLzL61EypvWQK9C5sscshdiaTHeiKaSZDjpAGSSZywxqKkonN",
  "key4": "hfAMvs9EchQWCMixfkDw3hdHL1whZYoz1Z3PJVRWqdhhtW49t6B9FiNW4EqafNLPXttzEb7jAtKAD5vWftZn9bj",
  "key5": "42tMKvnH6NG2mwHmDks7qY3VgVN64fNAih8KZTTXorxuXiaX1dNx4EJ5mwNj4KsS3E8SDoRQiWMi9Fsyqxn6jiS1",
  "key6": "3eyj7hHYY56MBzi6pVgi59y4CdgHyrhEyFy1g3zy8xUzsZppEyRXuTSuXUZ7TicM1zvWukiQ5G2QE3LY4Ct1Sq9Y",
  "key7": "3SGoeN8aj42WdUUhZHsnbobxAjppXthamyx5h9KSBsfjRrZoXQzeF1YZHBNwG2FQbdHCWLpew4jKJCbadbFKjXur",
  "key8": "4vahDWs5tTzujkrag1yXgP8zzKvCLLwFz7QzbmbbpvB3MHhGmTZJTpYcmAmXFm2XM7sxCYqbiWavMWsCmK2FzzM5",
  "key9": "4uHzmiRP27BQCRr9NqDChCBYTsNWTsqPX7V9PT3agFRtc3rtd5jMo1yjvpGX6HGWiJS7i6ET8AEh4E5SBLHESHSc",
  "key10": "52ZGE73fmbwB1zUnrQTR3pw85UhyTwmWN8q6P7zyfTtUiMQ9TAAihhgPoLXHhjFKYN4vVpvXWnKG8pxR1nC2z7ek",
  "key11": "5UQoFptfxfGci6bv5hzRDik7btAB4JBJdcr1QhAShFzc4XFDP5LqRHjnP6A83iZjgRbdS9sfSZ8oQX1XK6QVsPVd",
  "key12": "3uSjCXkRSDZZdZ4KQPBqfY3p1v2K9WUYPgMkyB3W5KC72gH3xzqMjVSzPK7kHHa92u1bartSchd6Zgg3SoYzvu1J",
  "key13": "2Z32v9kQN8gpQRN2UN7ZFD1xpjrKd7V6ysVseuzNXLYgvq9FdTMdn4YEXp9hj979GWrH99jZJUUb1pNNaocnKsks",
  "key14": "3cJcYBhGpVo6acRcMXoDcybCHALNkihnrk3fw6MoDbPKYVwYa9rN4CRQj4GPBP7yxLn7KDAHnFVSo2pLgZ9KtRMp",
  "key15": "4xW1kcyr4UzLirYBkPyzVxbpkRD2vQbCwxUv4stccQQFXFzozugkURiYfGg4WcKw4fKcMhTNqaP9jvRy8nYcQdz7",
  "key16": "5kh8My3UcA84X1h3ZHbiMj6Fz4B7SUM8ZQjkWZ6vNzDskxPsFGdhoZVkT8phLuMLNyronXyQ3QEWCPW3PNWheogT",
  "key17": "627cSVTBqcLq87Bh1HMjRd58RCLgGDZwoqsaVGstnNN7adH9NrU1eJEELsyAWB85YAurTYYuJDjp3Q4AVEG2ZVrp",
  "key18": "kFq3N8FfWTkSFXPdaWCzZJmsoDMKywVstGonDVfXfA7tgCwZHCXHHyKhKLChXNYNXXiK6UrT5nUUKYvPqJna6PJ",
  "key19": "61EFiGJvTiVT2tuczu5CuwKUbWNNGpHCTbobVktKS5QTx8w7k5V5fspWPT5gRvSQpS91TaEnLe4JzbconztoSkbQ",
  "key20": "4M6NEEyGtUrVcTCyUq7xprydVKCqXHrwSoYm47PFWLYLN4ioMpEG5XikDKC23EYPKTvEmMoK92pcnURAs82CTviQ",
  "key21": "4m5xFJcN9MM2D7MWYCmxtzfpJH5uUCg5vs2iodT2D79RAt5XGZEBEppyCscHXo7dudPLQsmVtm12yYT7GyBcPP7Y",
  "key22": "429LTrNhRDyZfsuYndTgTBCTP2ZD7HQPBAmWZFEcAgKMfQxAEMNbQQniVQgZiLPFxbB896iKaq3aAeSweyzzgS8u",
  "key23": "5oSAu54UnxSuYGxrYEWMAPbXVF8Pftqov62psRYTssoijEB1KJTavuuBS7SjqGC3tnwweCgZdaHJ9Nm3eUwE3MXU",
  "key24": "2wMWnjDoY2PfpaE8NhsgbfTRE4dcy5J2KQzA6Dw3S79f7oWFJCcqFGvQfGVCSKHV4u3zyj6y4fpPc5LyUCGagbUx",
  "key25": "3kvu2F54iQm1bG6QpRFRbu2hexvwz9ERT361vc8C7TcJbR32ePx96eQadFdpTQa2hHnBjxUEDwx5ta4JvueJFfUn",
  "key26": "iQVVUNF6yrkPG5UVavaKZGk3RJ5hKPWcGP6rDutQZtr9W2w95VJNrCkwJVCyWJtxwGT8kW2j3oE2E6mKU4tk9En",
  "key27": "2WghHAMJLDcMZgtW4BsgLdXGCeDFNRVc8PyCRDcpjRw2wbqFLL3CuHJHVbd8A6zyfezGERfP59eSwtM7Z3Lz5w82",
  "key28": "QTKi8WQAZhhu8H8zbsg1uaY49sihvx4MVHshLL7fiTYfYnUgYtpBB11apZeUVLTXEmFR83cqKNXvXC2d2t4LWWp",
  "key29": "4xHepriVW7QBVET5bEspVP57WcrRhGbV6w8yYXpaWtNuGD8ey9bn2MuichQHeMw8P3js2bz2tEkKTQ7K8ssUGKXA"
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
