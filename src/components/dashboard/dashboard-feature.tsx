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
    "YvkhaGyBg5EtjAKi1oHXLYomVGRCdcVrsbyvJXqT2NUxVRJDgHuBkkx86Xs5eeS1ZJa2cUqkB6mub1RikTbBjYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Dz9CJpd12yYDokXpiQam7N1qQKJokbbcTtaKxuh1biNpcKM1B9zj7jP2DuPMSq9zkqgC15XSdmf4Rt2X5b75YD",
  "key1": "5vj7TtggD5x82qhD4Bn6bJXbYBoNhfcbYimDMttpmFq2QiJsqyG8TEHapSzbgvdqVjTpdoCenWssaRaEM8SBA2ut",
  "key2": "55oP4hheFLR4VU7J1qpj7537HKt6Md3wGNgfSprhiEreTDnWAihn7NnETLMy6JYLUNMBkwp59pdsei7XzJASDCpY",
  "key3": "4px9YqkpVk2kCnKHzSwFDCtVgPH7HiCTs59guaGMamMEapk1mCEwSJqx6SR5VhHvGydV9pHBRwXLp3v8iEXutavw",
  "key4": "fPSZuGmHYaeMg6mLLL6qbr2ewCvmz93Q879hinDMdD3XrpGrgfjzqGursCJ7mefzUK3srttfSFwVSMjUygCKKss",
  "key5": "5CSCgA4Ceuesm92LvNcf9hV335nGKDyACHjrhZcX3Nxuy6Yj4BEhZfNfuV1fJZ2qdpkHPiwagit3Rxj1yGQotLKM",
  "key6": "3NBGeQA7w8sZ43iEoKHZcUxowecj88SZmojp9HLdtVYpHpXg2QyfhxKfVczVXKhG8Rg53xPkGquqMtMpoD4L5YBb",
  "key7": "3XBNSfxC4n3wGBooNM9YvxBhSvJx5J5MZ9VL27cpywRMraES9rZXaS3M7rXnAaYDTPhkEw2otiULX1drRBEjzKj6",
  "key8": "4XCcbtemfAaeSV1zWV1C9b1fiD6guedEhKhjHpqaptD2TsBZYM7WMsFVtyKnvYRHAtNkmScewzapisyW4PW4Sntp",
  "key9": "44x9N2q5U2sVPhfcGKgnwYse7HNuFS4oYDnfXtbjVwqh73pFSUdQjHatt1iyky7XEZK7aKnAoeDqBSL37AY7dpqe",
  "key10": "34exA1bbAPyoimqDLhDj56x1kPpsUqsmDeyPPUVnbwGnpLVWfwGuUqWacvTEbuxBLx4aVsee6N7wDvS4ndVsQjCt",
  "key11": "bkiRFW3n1Gg4gYfJx5qQzagDWaJWWVv6mJ7miNxoYoET1UMMze3rLK84q7FwCa3Lya7caDeacWvjM7juvNP7WDv",
  "key12": "UtrwddkRosDd7Y1jvzXo1vdhjYQf9hmeBZJ3jMQwHeP6bbVKAheYYfJgAaePw1KTpJQmUUMDnDzCCTyrDHGYH7Y",
  "key13": "2hP55Yiv7cKRJxmHGxsvY5q77xT28Ue9AosFQVoUfp96soMAYSmweWkqpW4QQuA9vKy58NoruoJAxiWhskT58Kt1",
  "key14": "65xnUvUB88R1A76t7TM5FyfoERdAstdrQ8kNXeVdejFSXgVC8AYCEjtF1ZsNchD6RUsypafVGsaaegRyLNr6cgNu",
  "key15": "2dirJkpmsdC8oPQM2Q5wpG93nQE1adxtNWbDK8Q2jLhLeWEyzThm51ZtGbZ5WSwCnQphMBWGttHxMoaQ6JWNvH5x",
  "key16": "5j75kRV2968MFyArNqJpv8dZtUPk39qkary73MTthejTVqD8sn7YAHE94yXv3KKRHj4G5T6kCeYZp48fXmGSgi9G",
  "key17": "3ZgTnMHu1gH13df6kFhoh7iB2ndmW8qYbgTmqoFxpH8A1rwwVhxQ5yJ6RWaJ4Hrxd8eody4r6oF3SvpsehC26vWN",
  "key18": "54mzgiHnX1y2okqtiqLYXbCnZwFKUZ98HFVLZFPxgDfMtfi6T1vSgxrZBaBSYsrESHKmrLLijUTPRTPYcsmu418U",
  "key19": "n1msasUf5mBPkiFPpAPLwhxCAKngThKA5wRXqV7icC4nVTNjxTNb9aHJrjfTFRbKznT8NEFdWTusD75E1c3LEhN",
  "key20": "2WcRZgAXtAWuuqjAzvMwZwCDhWCHPo6xPHj4WS721qfmDXcTCCmDtby9qBsM5eVu6EFwkdPTcJVReJ74CD3uG7Ei",
  "key21": "3J3m1nvzTFSMiEMV8dkCpnoVFTR2BDbwG52F1TtxSUR5Hpi71nYUdBzFdSPZ5Zd1LVhUMZdpNJzw1HTbLy3Qms9Z",
  "key22": "2jfr88FYhFYKMyHAnbgCV2NqfL7DGxjpMRHVH2RvFKbf8tkXU8MATv6RivNDqN9TCYfVXXwA35cfcRWUr8izxYcX",
  "key23": "2tzkm9BoStU6gGNkcXSKCM1saeG7vGY9q8HdtvoxbW7DK49MhZ4TvP3yVB9nw27FuBGGVAPx9cRDPvkqvFZPjQcD",
  "key24": "2cbEyMGDWqV19z445DCxQfgPCE3NfGhU3NB8jikSdrovaTJ5BEd9RxRjb6hfXKssRJzwzVzuoNA98m7vW8PxCkWr",
  "key25": "2SXYmHAtDBgrArgrZunqx4TxisbL43ExTZQvewZFMHBUhpW1co7b4TtxMRCjTsCsd7FSjK1BQVNTR5pYYQjvgpAi",
  "key26": "2AoLCELYXfDTeKaQpuqPxgYrAvAorS1W2qSAogJvWqezFmQ8TfiLMTeh18A2AFsH6DJQBpqfz9Y9Dn1mC2P94yF2",
  "key27": "2NwugBfqLK4AH1xcukezc393bzwMkvJqFrN9NKqf7Kaz5DhELe8J4Z9TiyoBYLHo9vvZc5MeYarsDyH47KxwXFaM",
  "key28": "2MpurZp2CeKPC2TnCY86m56KagE5JiAhwSDPssePveLro5bq3FsLHATUtkJ1ourVLiPmDYAFvC58e2pyZwKqtuGg",
  "key29": "3yYYMJEB5TPwxTCmxnnqHsZwvq41zBKsAScc5TKr22f4awC9yzxEEsuvRjAYtLvJvnBG9RvvvoTab7uc1AFQFWqn",
  "key30": "329H1hZmDYDApgTZawxLD2XTHoAAJgEhNDgkeofunoBBzWHMXjXQrLgqJyGRCGur116LhQ9SvDruYxrnJVTNcCk6",
  "key31": "5WYJKmnnRwybZ3Hqj8TDaCSCdsgLymnJ1wVrVNLV6iKqwCrBQTjcMFoGVhj2jBfX71iKzxPi2xf8v7waPxirE1s6",
  "key32": "2A4mnnKxoQdCZSb17e1Ab4Zpphq3xHNrkNavdUkysH8MQEpUqhZw5irGqHFenPUbvvp5DykNdXzKwgoWANhtPEDT",
  "key33": "4XSAfhoQnSGW9jS79VqtGxjJnDv6zXa9MPRTfxE21sZ7QBNJKNTC3FM2Qux5mYNge8eP2Jh9CcEfJiLsvco7AX1V",
  "key34": "5xxtzpPFsjCpWXU2CqZXoHhsf29T5SWxwtScusyBV9m6hRfhYRE41WqTGdYDPspFkdTTsLfcQyniaPwhS4vRYrY",
  "key35": "4eu9mUXMs2VZP8aN2dRBHPE84M3bSPViNfdqofaXzNQ18QDfw3dGSm86h8uX8jUjV9Qt8k81r4oGcmuuxZ5Bph26"
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
