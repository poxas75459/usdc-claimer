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
    "5qrCjnikNVW228vBJAJYn5SwBngkhAhrCWzB7vbBSaH4FsHbn7y3UejhaBFS7LPcEKjjtShnvR91HTTeRJBp8skc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59JrqPZyumuivbuXS5jNoMWPkxQKRkanGcuhxDJVT44chYkVgFNGmg8ebvucY5PiRsPjxcvjziFWZ8NeXPyJ7fhY",
  "key1": "FH5UGeUFaUueJCNkxA1Bjo51NedkmxuMPD7r5AkwP9sHRt5397Aw3ZzEgHGVZVgBxubL5qfJFaw2Cx2UC6WiNZ8",
  "key2": "4ZcLwJJ7f9iaCN7RMh2rYgPCpW93JyhCHYafjy48fpEgZrai4mG2JjkZK7V9BPB2D1KQA7u8cQtNhaMkzFPoM2Wj",
  "key3": "4CgHQQTWFjGB7jUS7n6bn1fT2jqt5QqtEriwx5MGgQrdpJoutsNchLtE51ypJBRzNbdWAUXLY1LX7juPDN7jo2Tn",
  "key4": "4ivhBQUhANHVNPgGHsF7eZ4Lrg32RF5rn1J2PSwe3HuT5gX3bjqeTTS8yqHCQ4rLsQHBUc7KbNMyRa4G2EArYv67",
  "key5": "4FKsJadrLzUa6bP4evCDNen5bXHwiEPYXqVqw2P5WmfBX9kjjNTN8ZGQm29ccmkjaT2gsLvohz5d2DQY8Jwj6yMN",
  "key6": "Pea38HquapqNa6tJLJvsyHVBqTEyX3C4zciwdYxdouMgL5gschPwGV5JnTCCYntfG2TFXYXtg3hsEojcafYAud2",
  "key7": "2iytDQvjc7WanUZb1c7989VFuzw293pUgg2rvjrG66zk7LpXudCmCZgrBcPEAiJGNYYnSyvP7Zp1pzJ9tPP5NJkc",
  "key8": "5mfvPttrNNQ6XwiRF3aTsNER7kQtFkpZdqcQ3vJiAjAX1oGMJzpuiuhLR7WY8uSjZQGwp29RxahRRC3gYQJL97cd",
  "key9": "21x42Ujyw9NrGS5J2cAPq1YoDU4BNcL5ncQsQuv1FEKgGpcSL5AiGufvSiPDYPNZEeks92wehetijexpW9X3mn8r",
  "key10": "3GUiNWuTcE4wrykxWK1wLfMaQ3hGPagBuMhJJaf8LApnC8xFpRNo4EAmuVCJcT9vx1KnWAPV35WNsyb7nwzttC5C",
  "key11": "5mR87fYbSmHALFKnX66rDVskwJnri8AX4HaDY4tat5B75apHHaoNWTbQ4MvYAmMVNoaXDSbcpE59ZDonoMGDnpoS",
  "key12": "5rvKW7fEogSK3QuDS5PAdTT27huEc92MLNtSsGg8iXqSWT429gkTwdA9tYmwueYYNMEcfgPnVkHqCfc97SrnbbPe",
  "key13": "2wvhgkurrfJ2ouny9g7d5r6vyjqwcknV5ZDmtxUNmFjAuSAvzUz6AFfpLSgKZbyQtiK618id6nwW9BM1eu9hufL4",
  "key14": "3Hk9eB8YdVQHXzTZJAjHREPTj61xE8M9aw6X4KsTHbEKLYjBcxfBdVWHEcn9TDYxw9XXEYPvPmaatf9M6g49hzqX",
  "key15": "jpLC5kebgkqqEXWuwDhgUMGwhZABCLV9S1U7Wrhmnj37LrA4MLGYLLrEqzYuMD4FdoZdm8EJ3ximaq6QNRTJzPs",
  "key16": "2A27qiZZLoouXnwAAWm1bJBGQt2G4zz2pz4L5q2o9bDYnztk1MGvcx9in8NMNZXwm17xvPDiQW6b6H7Pe2ehx83y",
  "key17": "3NWqSjXRTzsmR2nrs6NbdekukqpZcJ7zXdtXXGYxv5GLPrVSf5A5A4jhQgT6bA2wFDnPLJ1bLdQ72H7bD2HJ5J3V",
  "key18": "VZ2WCyyiU9b3wNsn8CuuKqVsYh2q9znPtwk1ZFPtdVjc6HXzDGA5JFpbYDjQUUc86278EoQKBzJn5XcQ13MMnVe",
  "key19": "4wNPfDF3H1x77XwH8vUHLDEYyUhjuAZzczjsjq7igvbrs9ajF4A2Ha5fZ4pMfeKNsLC8BP2stHzqjqfxvqm157rA",
  "key20": "3zNETQyRLAotR9Le621TKLaHU5wt5PBiU84ibQbh6hF5BdFzz2j4JDjzmhvKsX1drykH7y4dzX8B8pr6UdbQscYV",
  "key21": "4qnfQScU56217yUC4jzYGVyJi2KRHygvsPbUtCj5dKQX9hvhREzVYwrsE2EFAB4kDzjBMrXgCrLrb9CxiBbsPHH1",
  "key22": "4QtS8PmCbNHPnfiAVQxQ4eHmzDEM3LQJ9H7YsVfbCUwcksUKexAhXTHy9ks2W8PrDu7fU5ik3iNcxSuWn3mc6cVC",
  "key23": "5mtrot5TtUBUqmjky1QbasiRpuNFLG4yej3oqojGbFeioHYmTDPtZurvi1erc9R2vu3UGRCAM2qzohV2McnKSip7",
  "key24": "58ASKJqND3Xzv4qZLWfPvfkNYNM2PxtiFttMGU516R6zvDGNgBLrpiJ4vw1WyHX7Hv1mmiZNxAY5sZdJ6Zt85PSB",
  "key25": "3azvpkGH8RgpUBU5Vu342dyYXsrHLNhn6R3NGc8sUezeZgag5VB6kfMknW9AoRHnEwBnzBqfZtWXV3X5zPSgLi4b",
  "key26": "41E9kS3DqovWys7qCtdDQr4KzL2d1mgxyek9T46mgp7eFQkkRwnxziFxWW1dd7DsdAYm7FmZMZerZQmxULHEfAHD",
  "key27": "5i3AYq7hQ8oRVFFcCcHH28YsjeuavjH77W4usZDiuE6uL1BueoRyzHwiQgyEhFeKfFULW2GhNA3PNdBsRwxaPJxz",
  "key28": "5UhmTCSnhzN9MahtnLTmmadkj9KzJ3E5yXjnLLPiRGQpbenzewFb6mZ8dsvqi7s19Jsx2yKDZ6Ui1P1eUEYCAoMP",
  "key29": "5c9e8Va2yRqdxNZbZzrmhcgSup6Yx7KAzYScRbB8NLe2jXU27QgQXsn39EQaDrMHzcZxuZa4XVQMoAra8dV9WZ9K",
  "key30": "4wjUSGXxYCritRdoXywWBgzRu9gzEafZY236gNEKEdP41XmE3JrbeKibSfT4nWNgEFfV5wgywmUrSf62ixVDbZMq",
  "key31": "47UeCaBEwuc2RfGbjJKncmMxpHudnBYTryynCPiycGhT1BkXaWmrGLQbQwygG7Tjjmhxu4i7rju8Brevsr7aVnk1",
  "key32": "4GfB9EvHTUkYyXJ49RUD3XdHoE8Xpn2dJ7hRHXHbazoJKsg3mcwpNHw5rUUzzMekwCxcY5Dcu5ZWkr12saLDfB4U",
  "key33": "mEbRid3uxypac7ijJuFaks4viBbnnthC57P8JnRvMx7Gg2Fau5qgww9soPGrzAydKVyzd5M9Fc4XCR3s47k9kbb"
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
