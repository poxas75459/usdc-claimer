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
    "5yhxFQntbLicgybVokDANEZDehfGYvvsvhxJ2TE9dvCQjA6yyP5HQu2rc4vDXFnCFYnhQefjckJ3NAahVgRSPVMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJPpvoVouodA8mVnkrH6o72cFVhsGdhG4cQeZGg76PXcfG5RgPbjdstD9p6Rw8UBLJ2ectX4wFDt9pT178ZuTDf",
  "key1": "4BKP4wLz3ktAxUTwGRZWHjHmkspkauw4ebWuomUK9wLD1gPAh9ntZcXTF4V29bSQCD71tQx2MB1jHRSzXVhpq7ZF",
  "key2": "4ZL7GGj9yibKxHPaG9oapJojVGkTRG4d1JfGsSJXwKs2K4QPVSJJXwJe4xanSJAHt555QCDgDfBX4LuJctPK34ND",
  "key3": "5ZFDsChzWmMyAVe2YFJmXbmzstkcoU9EdGWnbHEKKVoeonoPrLSoNujHe2w3UCcvdu9YaxRNrvr2tJLvbpFV8KzA",
  "key4": "4twSbEKhnG8HeE5giEnVjrFcLDpNNLDSL3qa8RAK6QNXFGhRn6hGryCk4Gm5buv73QU871Vj9QzSMTTAFGc1T2tX",
  "key5": "5kYVbKYpazHXwbZ9Ss2gU577GcX8A68KnxcpGoFfjqYg5t2CQtSAgZ3q34LbvMiqGGsw1tGhuHQ5NMtoCUm4fnQw",
  "key6": "wBGEAsx6Vre9VvEVnrx4XcxDu8pmEMRTJixfZaSnAN3Fu99sv21ytH4wmLyKcsdGtAb1jKjEF3KVG4Buukk1Hdt",
  "key7": "2qNFnvowKvJBRwjEgvgVYxtjopyDy1Xo3dNBpszaNEMo1MfU95S7ye2trRSjDHuXZbMuaNNEj6YH64MP4GHcnVMT",
  "key8": "3nGzGDWhCU83tZX2NXPgaQC5UD2RZqCNtGkmNvdxUWpcsHd6VWba3e1cxeXi9gtjZFwGux7zepUMmtxrPdYpxggn",
  "key9": "5Cqa2Z3HqdSnh6DcPPqFmtwqcQTcZZKgdJcnY2axTB3ep9oCAExMJsHAkhfJVhw4NxEMpH1QEGxtwMYt26AmbGAa",
  "key10": "2x5GPiqxK9RJZmwL1JTVHEpwnCMxS5TMLRJuAEkCYgRMSztfi3kd2NCk2mC7dYQNvnHfXoBMqZioKdqG8HGWvpdn",
  "key11": "5W7Nb4MAZJmPFAaLZ1C3uMboS5sdgz3jJiTq3xNDfxN5v2M2vDGBvfuP9Aks8SaPR5eU5JgNjLFKR57Zks5wVPLX",
  "key12": "2UVG86dajpL9FCueUiCBtH1NZujxmPkVienFJYtxd9e3LoEu6G24nbcEFVAtvYg1feqsr8Q16JRjQ3KLp9gFoNGz",
  "key13": "4LXygGgq4YGEBtnMC19KtUhHZunnb2Z9Gm67YucPxKv5qKME7RH4yQCop3CpLQUqF2WnsKKVps39X7YpWfpq1Amm",
  "key14": "4y5Luyo8rQqVx3SnjpGK1VtL9Eb7MFmDKHrdomAzZgV5vmGhUhigxgSckUX4fnpLgyjcgN2ajnHpeX2pM7VcsCPY",
  "key15": "36U1A5PGYv2uM8c3tHiP2UjL4PzawT1QPM9RL9Et4YWVX9jBPAbCVUFEy5w1uMew8TkGq338na9ZDxLuzjRuZuRt",
  "key16": "5dqcZV728K5rUmW6jnQJX4ZkS8bR6tvsUTvPYLQN2JKocXKz3T2VFDB3AWW8wTYMt6PnxMC3iMbpcX7mp7d5RemR",
  "key17": "3AGKhLR68sWVfnqrhaWBxTxotNpitb9UXPJbuiovdnRrjtsHUyf9XBJsH6Tj3KhbpNbK1mSA8bSJTnVVXB4p2Wgo",
  "key18": "2kYPDxKM1dUacuKFu7qFPKsfnC4s3hcSfYajdPDxTzq1dyW5Srfr3jkfgPPqCBPj9SFXrgvZqopcgRrum8LDuz3o",
  "key19": "vKp1ijnUTxTpukhMyx6SnEkp36CjcVWyTsohUYkpkabC3uigdUKGVZW9KeE5ZzVvE7Phzoatm8a38UihH4jW52E",
  "key20": "5q3derKGzwqojJwBjswJJNiTWyuGMBz4hMFETrcVmsfdnnQtRKWP6w1jyQo1DNGLLayZK979Yg237uePvq8cjD8C",
  "key21": "2prgazopBosSHYxcBjqHYmgrcG9MqAUtXzQE4gJXfxXPzfJa4rPG14WKKSkHTaSrHHTrBXuUdV6gB4zaMqPMNy58",
  "key22": "66kkJpWNgE1tFBc9YfrYAmqHCN9zp7ZfrxgQC7FEDJRx2ArhDJ5HmfofKwKNjkaCPK7GvLgAN6FpcDCh6p1LCN2G",
  "key23": "3hNJ6qexfDZQfHegGDUFdUrjVAgjKP4mU89Vx2exJkXK9vN4oLCt33oPkDaaPedyXVdADBCqtGTcSD7LXSYG6LTy",
  "key24": "2yD85FwnytbTB5VvssKngPvtVLdXMYkhxwTjEQV1KQAv1TGwPXQK7Xx8q8TohA2aCC3pnhoRjs2sC3TJ4uXfadwu",
  "key25": "5pzjfHYT475E2ZEchpDH8E5K9cHrFjRBeXq1EUPYqCs9b8nDFT8QdDNadvq7Qx7B3BEtLgKG6e64SgUcLVmQ457L",
  "key26": "2Dao4dFQLe8i6wc3jgDr7gg8UHfugv2ZX1cmEQaCMTw6gecMuKsVEgEUJkP6XcBE3Zn4hmxg3wvFcHCHUTpcfaV6",
  "key27": "2ksKaf8FN61xMW9WsseqGVULM66fZHVgcwv4TCuC43qooGM7Eb9xm7br1UdkQCRYKVLM114We3BSnMpgNcv89pSJ"
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
