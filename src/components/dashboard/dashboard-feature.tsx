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
    "3JfupxxK8rxzqR9c8JcYu5eysYsC3gyxH2mp1m9ahE5EfX7jjBJygkY54QsckJ9GQxxiCPHb13aEoDEc38UV14tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSXR6YL7mAc2HvnFR6Ec5aQrJ77ddFx8AoU6Xnv21mpuGTVuAcM2kzeyaVTbmtrMovX8qy26bB6415jJQq4tWhn",
  "key1": "3Tehm28E3WvikS9nYaN9LyqUnigX9DCV74dDQjcHn5rumrcoHkaKb6jx9UFVTip53jJDmbGPBgCAzwbKh2VFC9dG",
  "key2": "sZPJzQWrxvKxrY4bJnFnq453AFRj14mDE1Hmk9edvchmo5j4s6RUvoHLLFEWtwd6VLbspQPyoMMgd3AaneA5BsR",
  "key3": "21R9dEJzXh5Do1GMAGYnaSA3eN4cDWkMq5FECh4o6dTNMn2uK94mMjA5DiGqYAtzDPe4vdVQA34EfPRTnzoNpPaF",
  "key4": "ShbEmPVWbUDJBxdwSfMqnLRspWGLmSkN4A7jKmEDiGgULG9X6aX89VetnigsYskVxSaFrK4o6SEtePcEBSQAeSG",
  "key5": "5kpiVh9z6sjXoCAbyWiZ9JUnh7gtpnYToHEyKXxr4RC76ZngJgjz4GC2ezh5oC884RMi1PRwv3Wt5ECnjL7MDRzn",
  "key6": "3KcHMKpqrjWoF7fXqMu1wsooYXNCUjNFMhuhZZXSh5b7JfxDzFofhiaREdtUeGQQnabVGN128iuTjjktfGaSPcyg",
  "key7": "4LvWxKeiGsp3Cxe37g8Lx3AhtqHpAF1GS6PgaRDc87Dfy5Dz9Ec2kh2MAtTUuo8m3YHeymZ6YiaAdvH1wEk2m7DJ",
  "key8": "5hEbVN5oo1MBx73KikFkbeoBLCixT75HbzwzWCsqJfJ7A2nm2K9dZRMyfCietMp9BkW7ZaLDdqjwjvWV1veFX8xB",
  "key9": "21hdu5CEf1mYFKwyYCTsqBMPd4QQUWMF2nh31Y71LFRx1wd2seVAqUVgnRwC3vmYhZtFv9haUbnCaGXa9B2tbKbR",
  "key10": "34umieFHaHCwvqgx6yL6ydRr7tUKBf7CYodwfvVyXcEoB2xDxgkkTA8UoYhDarRRGfGujK4SAFXbsgjrwqduMiTE",
  "key11": "4vAxc2Xa6qee6eEvF19sS99rgAt9xTUrA6Tk9vZkTrXFKw1DvpGRJ6vLQMie7xH42qPMuryTLpaBLgUTa7VPASLM",
  "key12": "edy2ZcozxH9oNoB9UXQvArYxwSqAveDcLyZPGZ17PNdHDqKvdN68iX6RaDSJUBxSp8QYZgMki6qhk2sGn7t35fJ",
  "key13": "63AqAoVMPka2d1CD1zxhMaYiR9V3xdJK2kunxkKtJzDbRX6ck9EkWhVxnq3Uf9oNEGatZauyQ9LNtx5RKUVK2rwG",
  "key14": "2hs7k5y95LYGc2gDUxZjHrDLxwu4aUF4SGf8SZXA9QcmAtwkSoqNDPcm1CKKH9dsqcnH52NKSRzDrQTQzokcg4zf",
  "key15": "2suPWAPfu1C1ygpxafvpZxyvnCQFX4pa4fce2M9gzf2FE69GqJxfzWBosoP5RNUgAWhZwLLkdsW8d7YxtzgQRGZN",
  "key16": "5yTV7w2JxwfRYiXGcpKciTBw1UdkVzXnQie44Ftw2i3vKSrgBNLJnZv3pntmd6MkqSoE9JFjhFXmLaG1DkY7pmkF",
  "key17": "2FxCJHoLX49EZGewFAi3uq7GvMXSdxG9TPFGkoikZnyaQmJASPgLYVmr8so5N1pnTvr569YJ2DHGwDgjCynXmss2",
  "key18": "4G41sYbPEoL1oxi1ax8tq8nFFxej7rS79Z4PZ9fu4MuYkpLaD7Q62AoJVuwWgP8utN3n2jy6JNq1wRoMCF7jVQgw",
  "key19": "66LFwj4y7DwqBRgVHvr6pEEyXzp9ym7Z91eaAfWxKJRkpExgc6UZwLqtNqk29RdXfqnz6oq78HF2dpCQy5Ezgyna",
  "key20": "3FE5ey7Kc4iin8PAq1kyUfWeDAFtjc4PNJg4zgLwnamaEkTCVPvwV7mUQHis9RLCFZ9puRCxJP9g3dcZ2pptCaL6",
  "key21": "3mK6JmkmLfCkHTDwGps3innh6YWuk4JhATxjzcFzmJhqPBRSWrqBZsV8t4FLJANtks83zrQpte5BQ9szNxHZS4Eq",
  "key22": "4DvWLndx18YxYKqLWYKZG91SFMV3mxwbJyLUsj8G2hzjzKqZMKcA8XqW4WTjmriis4U8QWwnRJaavnATRW9xnX2j",
  "key23": "5ioWsLGffkKB4ZqYgeTc3tW6Sqrz9iiv5sZrDZMmR7mCNm1B9dhSxPm5ky8q7rcZzCnvSca74ajaTY5Dz4PkosHP",
  "key24": "5vYVSN8bSyb9kuQLJfXShwonZaEHR9kWNwZqpvPsx2bc3ETFCXh2G29hGFSvrkQxsdwTbcrcR2hQ5i4qeGvvYyGU",
  "key25": "4SHrzNJUZoVV4YZG1Nc1NiuT1aEzSK6uj7P2ANeuzQM8uEkqHqZMV5fvRYK6PmVtd7b2p8eGdBHVFy5Yx18Jsofd",
  "key26": "5YTHarrGqVhj3Jb9zqsFq3X3pfkAtm5KdMxD3dQ6Vgyz3Mur9KYCHStrZDopiyV77hPDgY879ko2y66Nn6XBWtES",
  "key27": "4TiXyqQTUg68vPxhEHJYMCsZGmwCa7vZ1j82nHYAHCHC9icRWNZaT3x1DnQmNeQQ87U6atyzpEcakcicGvZy7NQ1"
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
