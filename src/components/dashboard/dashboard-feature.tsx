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
    "5ND7S75ASodXCmfTutWmzK5e4yJ4qbBdMnuVjpTRNvmQXgPrHqjdCWWQTy5zj485H22jEcxwVLKY5TxveAFiU4Mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrSS5i5FiBFtxUy6UunhFsbD8McEhN8eKGnX4gwYKKhSp8Zg3fwo2oBnNtsSnkvh5SRyvbseVRMYGjZ4gGmgxSn",
  "key1": "3EcSPQCqChQ3rQbBNQ2Nygf1RYxA7Ajvg6673etTMRetvFyoKzcmzQgiA6jgmDexvz6VMLY1su7iYtdhzUShispz",
  "key2": "4XKgU37RUSH9wyC2TVaJrqQqR5DQ6RZoavqYs745d4v6cPHnCJzwNry1vam7KALutmFjrCxGjsrGZcqZYLCfLDPZ",
  "key3": "4LGVkKxow326VfeMTWtKoQk6zcTraq9osqm4A4LfW2CUEitieK6NZM4stCRhhDY87TCmREUMPSuNYZk7bfavV1Ws",
  "key4": "5v3zUu1qSdGHVrzQgaioQWCmjddnir4Ys13iN2HhAYnXrGWuHpDmymGtjCu322eVP4NzksuAsKA8WkYCnDzHjYyb",
  "key5": "29hgfL9jsrtChHiguqCiCWrFUePEa3s8tEdZ2YSrvVTE8Nz3MuZzL4HdpvXkAUAfJ7gZ9toatFT5G6a8i2iZdKav",
  "key6": "yHEsWTnPbeWeC7RApYNxAVTMmoJh6V3dACzSHnDa6BZrvcQAugxvhhr7aCTKsYhkJcaa9AgqrP3h2A2yz1Jodwn",
  "key7": "3scwziBN4TMVSSQuMfxngw3Pcf4ASikaVc25LghLi5peuMHFfBsgD1BNa84MWnZkixe4cCUDaaYgARX4vPBgwJNW",
  "key8": "4pQhvUHXmiBM4U5rJh5dNzJ7SBeG3AEj4y8wUt73MpDxpUoLWsn2ou9yYnEyR8tfTwGfFKh2fwG7wS7Yh3ji5WHE",
  "key9": "2d4WKDk14FqsuyeanAeL1j62ig62uz6zA4jVyUsNN7SMDkcRr9BCZr5zVDt7aMGF5sN26fvLTQVMLjSj1PafUZ6H",
  "key10": "UKiAPez25VDa9fphXYGWKWHdRAhP6bU7KTy1m1yRXvuiz9Eiid6LsUGJmMt2GmM9fAaZrjhVaWunLeNAWXqXZe5",
  "key11": "5otpvuejarPbMMiRZtJRo2uSRtr42N9cLeYSvMFGWJht77fYVsXQaN9sAd9nXn5kesfcpAWiHbAFLwUTcNHcDPGS",
  "key12": "UeU8pExcbtkYoX43qzGwqpZYYvj5QPkakKmScLVyCqkBAsAiQKv2xWmVejDhhxSEs5V3Dvk6BWgBQYG6pf2rXm4",
  "key13": "52D4WfYSxFwbbrv5rdm8W5gm5RaZ26z28TgMBqhdSFQvjx6jQY9KoV2sQ4MA4HG5TVYK9KsLect8B68DfHTRvJ2c",
  "key14": "5rsKaN6A53xBD8Wh3ctrKP46mqj2bmps6vLsTdsCBZJoigki1BvmJN4y1Ps8sYHEGNJThiUeAyjuM9seV44epxw3",
  "key15": "362qxUyrsQzdoxDYbJWJyKAD19mgnfE1d3DgK8EDvjSEnbu9poUickmpgp7YhLmYM84wFLrZW1WouGFbguTdk6iS",
  "key16": "4Wp2EFWMXrGhp8irh8QtUZjhT7e6W4pa4NdHBSLoRHAbm7zu8uhcZj7CSJBXyfPGp8knc5XdJU6xxEdXYE6H1skw",
  "key17": "EjHzcEXn2BaPMMSzwXyBg3pACP6HGKtTxdnKNVU92NmmMn5hRs1oco6Wod5w8Vq3KKoQ9ruERsq99fnhWhVAER7",
  "key18": "29nfGJf835kJkM4rE8BCwSRJm6qznL5aTV39njDZm8LVw4WRUHviqnZDcrdtbbB5xz9T9bYz78unxHqmXtt6nMJS",
  "key19": "4ddS3QkVRz5DABmQLVc3PF2pwRp7VxJyPqctAFaQH1fSH1KDraQyE58FPgLtbKvq4geUZW2rRCCpSJxYPFU6wCqd",
  "key20": "2orcvXNFqwpnQ4BfmZEAfhtUWcTr2n12TuLCNuvRZqY6kYrnJbQjWnc9FPWauFMW1J1oNpipKX7VQKGEtBD3DSJz",
  "key21": "qqqeCFGLykirSYYvAsASBfJwF4aNUBFefCw5mbQKgETNh4vjJURLXAzAd7EHho1euc8XZP6teZLXjTyYdHW2oNo",
  "key22": "5xDyLy5sDm6X6tgvgwetzocrY1v3HGS2YH8aY1eUHvQJugkjjoVc3N4VapDKbaobtufG4pxg9TpGGodewHvar2Z7",
  "key23": "4dDtmv1E74M58jauT2iaXbosnBcoUDrKzdELGdtHQBemwjS9nyGY7nS7kDxiXAprFjVeEzZ4rikLNGj92qchDNRP",
  "key24": "3RF51wZqKq2LbBv8MF8BVBv1NEDiyNxfJTv4osQJwdXdyFD9nxmBiZ1utFpwAwMsUJQDe87gH7C76jDCvvCn6GP4",
  "key25": "x1RgJJnJFC1vVWxmrLCDhcJZ9aYPNVgRe9BhHmnRYX1qLbkBXzs5QmdZqsvBgMbYPeQjrcXL45p27AsDfLCiNDx",
  "key26": "3vRVrDbr1dCFZp8a5tUj2oBudQEQBvbxqDwFDfkirC6yHmbeCPn16cKgX5Amd5LWs7bihKnFNCS47sHifJ4zbKSD",
  "key27": "2VkBgNjHs1dBwKnaZnWbkiR5vXrA7u4W45UstT3EQy3aortbSwoBjZmS93fFjykPN4gK9PEGCcqLaQAy2hax7DUX",
  "key28": "4ba6jxkwyBu4jEYxcXnmD7bmkJK7Nj1BhRmxo4jwmULbdCERYjx7fmhBGaqAySdMDk7sCtZJi9ikTLVRLCZ9Pef5"
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
