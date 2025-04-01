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
    "4LzsD7WsCPoVy6798sPmZu8AEprcvz9m2HkKf4JfaDzY4b4wuZGPjcgHrTyL5ovkGXTz8yUGhnq1ReJtBcMNyA6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7dNf4ceqWmo9Go9nP5x6vu581Sa3nAd4jMvhyytsY2EZem52nuAvhSTc4nCue2GE7odRQQ23uWWQE5gormhbxq",
  "key1": "3kjynSGvPGJ67HLUTMn1AEd6Ykx3ML8xv2QwR2d9QvsxNu7RFG9xmHnbK2E3Dy2iZNwAon2Q9cUHNWBL1suNQFkW",
  "key2": "2mu7LX7XcxUMeo9W9CAz7oebBX7JuxNjYAT2q6jzPfWNuSBBWmooFc4Mv2oPHj6QGspSuZgU5YrnASZu3cTqv3Yf",
  "key3": "4UZWhk5n2mkjbNwDYvxb8nVypJpaSkMKzK7vyD8NGwU29pSD89PR5wP3h6U6zr7SvXq978xpoHA1AmdhiYkwwuh6",
  "key4": "4YfhX1iWHRnKvb3VtAqGpo3gzJQqYaZVXSnk4wZhefkhFTRDZiTcNrMikzS2GmRwzwL55r2oZn2m7JDxdiGHB7Sb",
  "key5": "629VLBsLihG3sbFJ4rqqfScuthbpaW19nksKoaUBLqrnBVE32EbCKrmibrgbXeQbHG6UYbJi32ns7WNbBdKdNV7N",
  "key6": "2wFsxPH81K5jx7jvBJX8MN6Gc8LuC5JxKbbapHYgyo2mzji8qtVhazdLwGbbLY6VrvMQJVsU73CAPB5ARZ3wdYhg",
  "key7": "bM7AoeVZSTQuPESAg2sNX1TaB26J6JEgJjpnEViEzs4DtZFHmWeAWqu9BFTZwLeGmK7PwF7tUzaKPeL1UGSS2NB",
  "key8": "4czrrgSUUyrs6dGAfdoAaoiD2buHTXPcbt1DfA8CYvroQCjmsAwxHsj1BkqANptWjXKkjP24kWC7xYMaJYmtBR8M",
  "key9": "4rM5L6BmFWQENyHsg5zgbPK6NqUK4kryWNzTS1vak4rVSbQoMptR85Nh5HZaNbBU5ivpfvwSETFE8yYDWdrGsMw",
  "key10": "5XY95wNVBpuihK1WA9VPMDjHK1yRLGAE9GozMkMAUSCjbnJcHb4zaWMZVVLRsgnRSpPeBKXpzGb8UVkAyHwcfaK4",
  "key11": "25bFu8odDECrpGbZjHpXHxeEqimptcJw61umSXLg5xrP5D7p6Ld23BHVxh4yZUsxRgDnyK8ibxW5kT4Z2xg2t2GK",
  "key12": "KYYHJNtK2sSJtTAmi7aDTNcwLCNyVoKemyRLw6YePigYmR7GrTLHd2WnAZw5K5BxLq9BdqYXHdaHHHeuZM7P8S9",
  "key13": "cyRoYhydWnvhRdWQCam42w7gEYtfpawqLQmYD2RPK2nqDs42q69ePWEyXQ4bkJGmGEJ8SmgHE6cdnYbpa7UtWQ9",
  "key14": "2c2dBj6jEMKBjT2TUJTaXwtpDgzfuq5oz4Uvenad1NBmhDmu53dCPhaNxQUpeuDaAFQTLq8TdJ3piLwfvNaYJ5mq",
  "key15": "5KgFnroDwNNnSR5RyBAAMLHygWRgitpRTum35XjUqa2na79KJ7yNJkV6pb6ocPe7ZQk1nznE6MUFjY19Hr6Jibks",
  "key16": "5G81KSEHLxiQRY6sMgapnVLvxRKHoKyupjKifj8ib7TBaBK5zKotMdSukMRiLEcMx986GgZUtRNatGE7vr6EUUZH",
  "key17": "4VDrX51jDdbnpPvsXtZ2rtRS6BGUQg9NqHatrapyBxqiQHfCaDpnKUGcUi6j6erXJwbCfKi51821oR5KoRxh6CEs",
  "key18": "39HkKmsRXCGXXxUwrPwJZNniq9HTAvLDYXnQCSHNyV15iWTo5dCoAt1LAWdus2tFieTjiA89D64FJnpJkYKQPo1g",
  "key19": "VARL5nRfemLBPyELozPTugh1Vq54WGAoXYhCoadicB4x7MYbVMfqxpzvGwYvprqFD14TaBbvPj46JAJmE7qcynx",
  "key20": "5vA6tpPb8HYNW7zMpuT81hbkfK6ZPH39P5FU2fXVKTjX7Zb8X7whQbK1Me2Cax7zfoMxSafvDiGhzgm9fuxjpRG5",
  "key21": "2pSCJpiWnUE1dJmvQWPA353XBSKmjcEbHikZ1wg5BHjUU3fkq8RF3W4AEgTUCiZBSn8N1nEW78q55VxFPwB4LpFT",
  "key22": "DVHEu3u8SqMnSHLQzqbckFDoKRgDXVnmtai9oVGBNyYZDX8us61mrMFFwz6iFKm7u9CSrAGx7R3ujtLi443hBuQ",
  "key23": "4RPpnPAM2kuZLFbmmQrNPMK412Kdr9mDk1t4gF1QajfFADtYGrs8WtboNgbNWrsE58dMXTH8aWZpEh7QiNc8TdMc",
  "key24": "2XZvxWvDcMcctZDGD6gYVUc6fLgvQaYM31SiAVt49CzGnzv6mkfUpUqnTE5s6P6EkPqBeGD4AsdyVnWq2wAnnCDW",
  "key25": "51Nf3jb4acvDWrTSxXQqFMUC3NFgWodeNrcckZ8fKxjwW46wSgL2r8YBSgTGz7ds8PeSs3Vvw7fH54ZKqoX6CxJ7",
  "key26": "3xpQWq5f9dCQXCbzNe6QcbNyk8fb4CD6YJ8LVbGGkXojDxN931mQDYNUepYeAMTvRugyAegqn2YygBtK9wLSLQc6",
  "key27": "24CZDdh7gmwhzFnfTMBmpFBpkHRvwxotYCV8ANr6x4WNbGD8D9ZFLkthpyo8KDpayXBhSUFdGuw1JzDCPVT2kC18",
  "key28": "64uwpe9543S5jdojWWZNkSnNky6kuXMrV4KZ9NJeP6RsmaLWhjLG84mtPjRdPvPzSLsoryzyvFohGF9iZc3avJ6X",
  "key29": "53SJwFNu11KnatCJuAEoMnFALCootQiXC93nG4Ck2qPbomsc1h1rFBLcecs2EHh4wFMiRi5cGxkaMR4aUHM6md1r",
  "key30": "5WSd7kNGwKAU3kjykZvcu94GtzgpEVZujPJF1inb7NjWiaj5r8BfGDEy1hJuVU4v3ykDpKC1NPTGjQhzW2qWEQ3h",
  "key31": "4AeEeRsqW53FqjwM9DqiDY7gTt5CWZYcPiK5dkdRwZf499ZZTa98ykkpfyTVJP53B3WyPwaZgUhPePgw79anaWkj",
  "key32": "5AX14tQRMtykmSGCz1xFEf7XUzR6mbuKYHMS9g4T7kja87qQRJ9X15dM59HTnmwczam1dektspZhg1RXx98oCU4p"
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
