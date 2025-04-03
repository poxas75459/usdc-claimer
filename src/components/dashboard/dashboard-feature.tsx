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
    "5WZHYzuWjkvsoPXLJJG1E8qoP4fCRN6WoAnh9PeYnXP5H8tQcELun8ELAfPR1MsAtfxNecjoe9uQU37UQ1VJtXLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62sGPUNPhTdk5RaRZr6obZRPg5agFsEVsxmFzHFzLDGewetg9g9xEZwWCK56GF5w93NAf87Ysj4g46uQ8uuWaqNB",
  "key1": "2WwDkMvx7PPourRFd3n8azbr3hJ743ZtxtzmUymrNW7ayfYUkorbVZ5HHu3V1ANzaRieKNMcUm2W58pqPHdzDjXs",
  "key2": "46zMZ4VuGRTA43XPr7rUxpxVAH8BYjKbXWZX4GUf8Dg9dsMyHT1tqHWaQBEDne8SYMcFwLvMmwqyWdLXhwBoGboX",
  "key3": "3dR697HJgxG6j6roz32sRzVbDWoD2VZ7idcdVu23tnSD58vaDd7djCya8RPSx9ioFGW5rgdkpSwLCwFog3KCUbRM",
  "key4": "2a61EHrRuP5Umxjt82r5zdyw3pYmgCsVrsD4EnsDkbYNpo4PLBT8rTNPksbXuLwnMdCzcyZocaqYjkbwwTQq6kHV",
  "key5": "5P6gqMnJmezMpmuq5s26FM2MXfcT19bApbduUk4aucT9GCApMu9XPCgUntxUKEUYwL2z2K8x5s98tG4zxqETnVRn",
  "key6": "4rYmC5BfZhTnLnD9GQiSUMt5g77AAcnsPrqyhknhd74Dkk9fS9GfXSKwFwmd7Hu35QuGQVYUPdep2QbXZ9x8mDAL",
  "key7": "5AGS6kRUEYiR84KjNuaEo6sDfU7iptRJo3AcqDcCaE8s6cNFdNPVF3HKgj7cPJm51VF5TaDruEVYb6aPhYxhm8ym",
  "key8": "A5QG8saK8X2SLrcGd9HEGU7F7aYQaKM2FzzzJ5QgazrqiuTejgtxLDPy54BR3EYN6tbptpTZ6CdCoac8kzrxJR3",
  "key9": "2X69T7Sw4Beoz3C6HUBwhKs7yokF2sr2T5hYS1hUQMH2j3WHssgk7yhEHfsj19dLEFV4cmuj5pGv9kkMn2zNieQZ",
  "key10": "4t4ZKjnWDh2ddgJrEBp4KkLKm5KDpWk3ChYsKNaXrs2x2ChyRPfxXVFYv8567uZ9DexoBtZGReE3TkvpyTWQkdaR",
  "key11": "5Zc5xFxkA3VyYqKTbKArTHENNGmoKvsN2bvunDuMiZCdED8N7RMkR9bhzZmzmvwJwyrsXfoeEgxCRyxPWP11VFyy",
  "key12": "qokoXvJB8aEXcrcCTu8fHTAcHDXWb3r7CoaZEg39oevkamJBmc1BtFyZiAPoobksrJ8hjpYqMRRavgF9Fz9MkYN",
  "key13": "3kWznD6F6Gr1Qqoera4W9qc4aoRr1ondmAZW1LXUoiLAGjAdqFASNsn51mXJeXR5ufdrBisiYJEYSmSVsEwuwJ3k",
  "key14": "56rwByaZrRrg1Yw9B8DWWS1PQiq6Xnun7BFzoiLsf1Cmeht779MwMzpnLuKayNFfk1Yn1svJEu3hgk5o2MSEHPUj",
  "key15": "VyXfMj9tfWizAqMLvGM24PYhH6FPwNpKWD9EaeDL9sDqW8pGskcpT9hKd3WiMBJEDujXDVgg5U52hFZzKh2MDKT",
  "key16": "3jLtFjW4vP2Fgy97L3ZQH6QMSNmbDriR7zPKCjGmn29Vwty8uA4ubSGUc6dqd5EjafCodjgPqaa4mLjZTTw9t87D",
  "key17": "5vfC9D5nD2zo3ZpLSBEmjHtnmL7WBxMniaZB4XSodcNiyASX3ivkVkapFmVTCHY6p94QPLVwyh4bBN8o5qvKkXaQ",
  "key18": "2LGBgsmjYYWCu1D2K3SSXuhoDCPJ2yx71zsNPb4BdvWaV4tBrgDRjsAxaziGzoR6Cg8cHvHxAfubFzqQHqsKdWtN",
  "key19": "4uxvQVVEAs4xFNgxMvTaDmr7VToW29t5CFYeaSa2f3djYXj7vemLELJGEUHCWH3cPjTCTzh6VYpwe4eiqGfvRz8P",
  "key20": "NJoJPTEZq7Zjw6zgZvYJPQ1gx3wWcdiffHCdJSxNqgcuLospKuC9Hb6MdLz9T2u2ZwghvWormFZq81N1YjoAspH",
  "key21": "5wm9bj3WeXwCpGTKsM16iLxApKrK9mKdnhj1WLKgV4ix3XefD3faNsu4c4c9jrJNNEkAwPx1doC2C2YTPWgFhy5y",
  "key22": "3zqokAqphQRvd2By3n3GByd49wcrMzBW39F8CQHPX72Hp7MJ3X4NZQaQfNG65fAGGFwG3x5Fhtgd8GVCYxCoK128",
  "key23": "3AjP3jpjkuqbDnU2Kj5r7f86Ury6e3yUeZtDuZstwKj4KctHbJHLsmrUsgb8o2uXnuvAjnzmi5JcEZzf5SeFjfFo",
  "key24": "o6NS3yAy9b3E4em6uY9wWyPHBXagZtHWdYvVe298BAoiKH4z9voxR8DXffj8GYs1Hy2fEtH4SXCvCxRuce3UPeH",
  "key25": "4STqbhqBfJNqY1WMM2MM6cA8Hz6buktQ1zwozv2U7tdUVzcd4SVG9qiAXLat2k3MSjX1WAefpLD4nDfhbQ21t5zw",
  "key26": "J9wdwB11ceqG57po4VuisjAxNwqhCk7bVaupYdxtMHJSJSsSuqkDoa7iTQy4hhF5okMw4wnpDoYbT1FfWvStY7X",
  "key27": "2Sr7oqdssx6PCBe3NJ4cE6X5LYdCGUH4nFL3Z2Lgq3nbHXSTT4BnBCgeuxbtS6qRHeWTqiNK5QqnDgrHchzgbT9n",
  "key28": "CRbN9gnoyDc7UcZStCatCTADSknZhapcksq83g4LADwM5ey8AwRMU8UiJfuhKd8osbcH5i9YtHE63AQqLaEtRaJ",
  "key29": "2n7oYEtMuzzy88uEvSGpV6Tr4Vo9vH3k2kdoDaG1ENZdJgABEh3cVHGyRuh9JG9zbY17ZWNoruT87AYvEcjMCDWj",
  "key30": "4PiimpjhQtyEnSi4poSRuMrxcsWqXdy7Dw7DHzwLLMPRdmvwf9oZqc78b6itmzR1htajtWeXGtb2DBEC1z9YSFWu",
  "key31": "25SqnUUY4BTccvctCnC1nkEPSEgFEmgUVAGQkQzwp4gBpi2SZKZXFWP46yfvaxhextNMSesX1HRS5P9ay9pDtAt8",
  "key32": "5wP8D5LTFNvkdo1KFiJpF1hSRYfp6avt8D5UPzNnktd4x4wUSVq83NjHUGmq6AahFzTUkzE56xHs3jwxUTfZN4ME",
  "key33": "E5f7QU4NqQKoh7FwacR1agPkgPBrwk7UeHqHxbrsciVU1dfkJVpY53VA1Upm2y8Z5irPWhfHR4uSKovpoBLpfR3",
  "key34": "48vBBLKdcUhMo5MGue9JJe1pRp17YBtixGSEWfB8e26qTsdRkDLV2xs4xAQQW32Cm9d7pzBhqTCQ6Gcww3uYP1AE"
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
