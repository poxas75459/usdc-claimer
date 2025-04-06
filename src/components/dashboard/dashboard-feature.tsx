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
    "ZZobLgKASFEBK82ecvLJCXsNvHdfmc8r5cMpFQDMH81Vgf6nfvH5LMaQhWhx9WwVSWndoDTX53bHxJzYTywEUfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fJWqgvSjy29qNegvMS7LsKwJsz6KCTzgKqMJyFvACN6TY4gFZfq4aRJTHTGU8JpqRSE7UkePsjoqbLLZTALi2Fv",
  "key1": "4zgzEjJdRb8e2RGj4aKvEomDgHuE8jvPjnZXsYRzpNgyy7c4qzs3gHdxVMEdRYBG4BKUwEJRMndRLp7X5DKBDYym",
  "key2": "3JipbLE5JR4zDSURJA8PkqPyVtyxXPs6F3o6sZ5mpt14YELMXt7JYYLtGmcpv1Q7wAXtw6WBk7JQAhnnguwA4ZpS",
  "key3": "22WBuEBwNCjsRzvu5rQwPVLgti45wYsntQLo3y2fhMSWSm1AoMnjLUeuXE4yBATCnNMHCAcgFVDZYE8kAPpBxpaL",
  "key4": "3Ph8DVQCQBYHrJqPyENUGYPb3ksQbLjmwRbq3mo9vnMPGwzzVbsXhT9MoaEfjKE6JPV6FA18cnbNNAZXaRZG8PZ8",
  "key5": "57Y1GM3mqddXuMuuGV12Q8Ba2Kh2wJ9pHS2qSULyyqrP3uHDYCAb3c7qVRsTJRD72RsqwZaeDYzwkHiR4Kp4hpaF",
  "key6": "5JF5RaJFR5A6QKqzMGGggxRHPpJk5FAccyqpt8jajktJpDSZd1XvzHC34XhtccWBkyM5cUApnMMeMwn8U9WgfMTu",
  "key7": "2StwuhPcdSToDGwBjQUjXp1BMs4AWQti2rYRgh2WGRivmQek8WCCBNXGwvhKNoUhfZMskNZ7uGhbkw2QsvQHf5W5",
  "key8": "3h718oWHmNRifCWiy6buE6YoCBLH3v7G4ovJ3k9qC9YoE5sMhcfMbEnmGao9qhbNRN7VV3sBo5h27wd9A1G9Ku1B",
  "key9": "3EBNwGPbNAMEv5ABNidosVFA3yTcB9vRLvzDwrvp1AFRFq4253rywuwTdD7DHwgByto6CTQD3C17cExVGEtxfJBw",
  "key10": "2DGjUeoq6hSZpaGnbwgwa14Pra99e7YrcV37s9xvd7pUvnseTe1osostZ9DyWMR4MYoiGS3rcyutBBMPN8gZk8su",
  "key11": "5Fe2tFHypApCvzxJe5UBmXAqmnEaGccECDXduzRwxhvdcMbdmGnTsPEPoDKAe8XJxE2ag3qNG1NUBDci8ftXEzoi",
  "key12": "4nH8TNuErmiXXPXijLih1brTPrZjynu4jwpXMfoJEjeJQnLNJvQsq3QH4GgQMLdrkg85XEU3AiLjaKtMfdY9zjYo",
  "key13": "26nM8UE5MQsEgtRCkpDw3fDJUNqzPibpqSc4wDbgtfgvGVFZ23LTaeD2GHGvEHddQ2TSgnYUeX2U1WFbLCqvcSmy",
  "key14": "4J7jemis288We3afGkBzPpumB4m2aR2Dvdqciu4VCqVFaewACFojstBDPmMYNwaGLmzRk6VcPB9A8xNiJofoWf24",
  "key15": "5fY7VuBZiDZdC7YkruwNxcS7tx6U7g5EyhadtX1oudD1mW1V2qBX4BE24hrRmKyh6oKGQAsZRpiTZbXaHyGxdjCk",
  "key16": "2i1Ars6jZxFTTYmC9JEN9XGAWk7xhaEWdrZxVG2PgFVbj3hgarnXob2DapkZ8qJS91VPFQzYwpTib9nT9SX8Xaa",
  "key17": "5U7GztSTGbCZ8JbXndHZJ95SQ5QnTmbnhozQBoR715U2PHWQrgkvuqtheDzKCgBqP3jPmDkvsVF7YmikuRR6ChCb",
  "key18": "5rsNbTKLboSampk3Wby4ZpF5H3G2TECjLSPvSKEbuS1zP1zHP6jHZQRUJsaLRSrNzpurA7vRb1pUz6a4r8gyDXpf",
  "key19": "4e5NnM8T5tMCF19JURfj5AW1HDuHnVtA6ptjQppEM9G6LVNebZb8SWeHKCjRaTSBtBiJv647dBX8aFdGcoBAKQr6",
  "key20": "5DbzjeiKqLmPznDmybm3XT9fihvK7BsiBPffJzvxcFk81v9kErv4ZxHboLHVoYT9PPRb3niBE3ArMZdowWXg9sbw",
  "key21": "5NLZ1JrPVhWyZZk6qQ3z6Ak6udV46VwS1Cu4WV5BKSVtHfyfVAiJzbKe2PRf49m3LcXhD4TCGUht38C4UzaLB4Hv",
  "key22": "2hfXX5uBS16kvQbZ6u7YPYQDfLSbTuHkZfSr1HP9p1c4XTwj71wcBF7jMCWZSgByGNf1HiiKE3AjxJxtuhn8AsCL",
  "key23": "4K3AFdeMcFfjxMnLJqGGGWb1yuUfBEhK1uuUezfvWzrPxH7L2aaz6ZttQgq2RNiwQw9x6G5461zxc5THJGv6msMo",
  "key24": "3ibhnQRYA6Dwa2yyrTP72WbbRUMYcR3xjwv1VBHeNrsMQWFRMeVmRQKWcHcPNb8LtmZHiupxa2NMSVxkTdPvSZJH",
  "key25": "2wbuqc4RrYyHrRpMTd4nBfSBRW4qk5A66RsD9yPGWJZMbe5Hzy6C69y6GhpfFfo7CBgjMrf5mqgB5tTnooz3T3aV",
  "key26": "63gZT2UvZn86KjVyhuDFmQ72n2TALswrqnUPziEiqgnVPYdtjuMBm4DQgmqX5oJomGLoe5JTYHrxuBkegEhsUHiL",
  "key27": "DWVs29MFwqZwCommPRTJsPrVtqdnkjis8ZmYrrB557z19RqxEzfmW55hccQsvZ2TbszGSB5bENPbvJM3ySmQwZi",
  "key28": "4m2QBpP1DRdZjbJbkEzawHEsNr2rNr1xs4K7sjQJoeZwJjEyk2x4Bit77japo29BFDeTW9NHnvEoYchHc32FoSzD",
  "key29": "43xQKh6hRZ83U32qb5Ze4TPdQ5MsyCCAQgkukGcB2jA9tDSvFVrYjehByipcUxRkagzkupXUBnLTSk5MJ7X9ckVh",
  "key30": "5ce7hWeBhYstqWouiYGPKE2C6xEBy5PR21NbS6dbzCy2Jw8f6mdreRMUrQf9FX5qJzTGSCNg8M8Qg2G1emWEYGUS",
  "key31": "56wQkoNNmfUmz5QNucveXPyRMD7r5ja7VLTQctRgeSnoERL4Rx47QuuvZR4NxsWoFoXbiwNVZc48FnTPBnu6xJxv",
  "key32": "5tHd1Nxgi9f8vUrHDdpFDLNrxyhEwbD2UxWKAnCXTuXm4NzQY1mimG5a46b62uhZ7Zoi8d8GcFFjSZi12euABvUe"
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
