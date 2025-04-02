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
    "5AR9PH2XAgwkeTQC59qc9kuLVZ6V3LsE9JLEowvXWrWVsU7GLywbGugeapizXvs8KGL5jnVTDr2kGxnL5YUbv2Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rd9RvPHTuG3c3zF2hKsuZngZGdC4CF7wTFqUsqcXoqudtaSM5Tb75MrgGeHkjQFHTPdSmvZvL5jNMKQDTuuzrD9",
  "key1": "3CyhUXYYENcJkbuQtHFqty4t65WNQJj4PwiNfnwjuCNY61BbTniFE2iwENyvmFq1ysdT3sp5UHMrY53iVnKFL9qX",
  "key2": "XWewFdVtLUqWbYT25TCHY7D2ghTaY9vnsGVwRf1YaBvDHEG1nJWHFZCN344uYwQxj2AwxwWZaymgjFmjMXJckNX",
  "key3": "6nc3eiBa3YCGEg7AgKJuR7csfTkHriCWgTv94f4poEVMPxwQHsi5qyydZUW1Ye7MC8g55fQxEUC8rNk92VNXpK5",
  "key4": "3bQkTgixKQ5QjW2DZvCHrWcmA8JsUby58ij5EUzptro8BEQFQhVV7UycPQdPxEKZt3NmwM9jTvETeETXxBmaQYvt",
  "key5": "3QgSppbS8P1QcDd5W5jnQizzv5FioRDx3GrCXmtPnT9i9uiaJ8VR9j33o3JpRQgkkmmrx7ENvRqaMKrssfwVRczM",
  "key6": "5vX9RCZ1aQsy7pmurhMcCD5b44UDgffLALYtA6t27tb5FBjJKgDtdiQEoGTRWUv5o755cXS2tp6cve4AbwfgtGmK",
  "key7": "5ESKj6jP15Br6Y2gJTFXQdtswuJq71zM5QeNXCNmkCELDfNkfs6wrZ3PKTjC7D9y7aaAoBhyyVTN59fWzxJZHSQc",
  "key8": "32a6Fod9UxXkf45YzM2a49g4uQNLzuELojRuQS5hGKFB9Uq8pXhWYEFWAqFAKLaY6ofeNuvbVtWoapr62mGXDH6o",
  "key9": "3UhyUGwA33FKBp1kZpk6Ca8JX2A7nPVtppts5GXHXf2X2fBkezpZKf1XcnLasQgS4jFHGYWV3hP7M7NQbWm4UHzR",
  "key10": "5hCUBEbYNUFdbJ4ZYaP1JJnM2nqLvBizvWhtNM8iwTGhY8nz7ndvBAR7FiT7o3xqXzGK812DnLUjZRH7x1EsS7qi",
  "key11": "4JAYRPf1ThePhea1LFYdBEf29UoiHp5hiCHeqUpm3qAzNehJXwYFPYFrYtxrfwUkjCEd3FuWJMcvKJii7YCoLFaj",
  "key12": "3b5V2TERw1f4umXAohwgaePx2A23H7NgJgMoKN2Ch8jN1h6D2YnhgqY9NPqp1aTNcPjKXMo6PcMfSwej4yphbeMQ",
  "key13": "5fFjFR1uhSrXfEpNxZ7GrmLyAXit72w9D8bdTaGQvaokX2kKeHtDx3k6R4Hea88yaKa4WCg3v3ve9jvn3FNrpjb8",
  "key14": "3A4gpSKP2auMEDUoCuNsb6ZwkMJeNxzbRF6zttKEWDApHXu6yffDoiiNqA3uAdVm9r8P53DMtwGQooFV1e4X387V",
  "key15": "3sXoX7bkBZuV4Wq3S6D6doTphAfJQFS5dY3JYgSwuwkB2gF3eJexXP6ABFd5K2SwKrfWVVkrqME9E6NpJZ8igJL2",
  "key16": "fDnYY15MNinJ9LhP48jk5NpGBim3TPezg3YfGfmYDmJF5qJy1rBv7kadyrdvZw2UKrjSAV3xEM1W4MHVafYQUEx",
  "key17": "5EH2Vguffz7pZgU2bD8XoD4iZb5D3j5fHjVuuqBPeroKM5rQeeBbGnhmSsg9evAPyTvh2YrWgkRJCyrmcEvsPpDp",
  "key18": "4qJvuHLfh8oBuhSVNuXFnEvywVbWs1AqohUKorhPnz47c3wjTmC6LVnMph1534CftW5srdGPEasQ1wLu5ongka6n",
  "key19": "5bY82DUcd4iDPThGDRTKAAAWMvDNqxTyx9un2ybWZdnrgje1dVAbcHtdg4PaMkJMpD3aXZFaKKWTB6kBwSwPkQ6F",
  "key20": "2rwYb7aGegSD5AVCru5rwDEMCXdL3nDZiNTPYkWQRFSNBv37MCyDdGkUmkKmjAjqSGmcLUjzq6Direg7eai5u5Z3",
  "key21": "5RvVNoT7D5zCX4eonWpuK5q44wEcPPYwHPdzpBop95Ng93qdLThpj9ivRYPc3WNw7XqT9FZpA5fRsSSyBPv4wEdk",
  "key22": "32w5hLEA5BFKWKYZNQGiPRE8kWRJML4HTpVZv43oSbFqNPNMQptm9oSFTTGrxkdVkPPv8K1bcBsHoRHXKfPvkxzv",
  "key23": "4A7ZWWisQsSfm9AY1krG4rYKdoJ3MMnHp9oy59M1pMiJ2aTBMaVJnGTMmDvmx9yWDhdk4p4YD8Q9ZSbcjAs7wZXj",
  "key24": "3AX76moUwy4Fi9Nd8vwnLt7TwoyXRazizs1Bbx71Qt7YtuwQhZkCx1pHAraQumWvvua7jPBX6GBJfDACTSj7RLFH",
  "key25": "5VjFxGR8iRShPPiqM26fWF3uKKDUAMfAdGYP4foGwUsMyT3E1HQKoDDdHnRphg5YnRJRnu1HDstPw9RPTT8sWRhd",
  "key26": "3N7f1yQFccQc4CY1FTPndZbRnqimUD9DkasBVY2ufsFtmkyCDinJQb1HedGnueK6mBLfWVmiBtLj1gXEH3EfBTrR",
  "key27": "26hw6bGXLyP1tFEAFgWJfQP3mM795Wii73Kvq6jKtvFPDoC1sRtRPJKDDUEwaMLDNdnDnQixWwYs7iCugDjQXv9E",
  "key28": "5i32c2St3EYADR1ZcC4eRhJHuJv7QXjc8hqGhgS5uXhxUhsYstu16fu17xu9qtNE67p2NkCcvzRPYPRCQWDepnEL",
  "key29": "5KnKD4ankK1WD5ZzeBYhgzLe6D9KuJakzmFcpPNfQcKE4MzTz4rPWiG11Ekc8fiC6iw3d5qRtyWjicbwaLPmihjh",
  "key30": "2bwyrXsavETJMdx3NDBhzc7BYfTJTnVoqxs7VKgRQTj5XiNAkrigFr9LP6byA3u6U4MaHthHUbMpnVYtLzYYEmsj",
  "key31": "2j1HnJkQsSHze4QXFpn3upM518PYrrP7FzRyNSwGiXrxNwpYpeBAx9MR5zdpBRM2CGT2L3rkhWoAvaEVyCdAohSv",
  "key32": "4mV1h61kgJ1BGB42HRY6QAvric7N7MUGjojxFc4gimMkKey5b3T3SAtotT9YDEVmxbCEqVwtmXP2YzcoUp8Bmtps",
  "key33": "4MsSCBf2RR2inyLsfHd2Dqd9RDTdTHRC5h8rL1DTgTy1eLGjSLLfHFFxAwyCTJNr8cR7nRxBtdqgRiDUAKR5hTfZ"
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
