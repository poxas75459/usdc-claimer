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
    "yZCeirtr8k8EVnssGtCEyBkLVLzz6F9fPzbvKyTnHV1QmVdMajUsQc9gyJfbZj4rpeTpxEhMLZFMqfeyTNHguZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bz7etZkHgxYBfd8CNAXtpHubEpCyPuqZJ8svtVtqQ1ePHwHs7XeqLmyigEnNTLugguQDXuY35MQ5sb6D5EbkT8t",
  "key1": "26FBFqvTn1PhASam2ABJH8XRCmMFyuCT56uLSgrtzS1Z77pjpN2ojUcnZN8h66cbveSuuHfWt7Z6MrBbZJCuQFbc",
  "key2": "5JKWZGKxaYm2a2AS3eewDxBr5YYpquUhLRhi2mGt2HitZdv4cC8Ueq3RW5ucQKMkWUsLKGarwuvsSLJnqmTbFiRE",
  "key3": "3zuvt132mucomE3VbbFxyec9sR39RFZZd66nPLThJw19sRBnTPWma7okjs4bXT1aHTh4BBg7am5GSH6skKsu6JHc",
  "key4": "4nyZvEWDdbymyVW6DwqytDSmK61ajXgBa8rzxjh1Ccv3o4jfsgN1WmtB1wXeUsteADLmYLuSYn65immrkK86CF5f",
  "key5": "LsAniVRfF7eZNmED5qxJPUZ6mu7pikfgKyHypRkczMd52azfMfHTuPy61SFSeT5JSwPwzjPiwaJFpdWuYjxkBBA",
  "key6": "3Ps2SzhmWqtoSocxix2vWJ42Str1WmQxLpWCXywouRCHW41UXnjfjGK97zz5ns7g3p95KDkh1xdMWX856kWx9sWb",
  "key7": "2XAnK7iKC3U893RmxLAzqV3uGgECBHR3UbkpbP4M3KyGF5tMMo54k3m2wVz3HCRCTtjmZet6qq921wPXbW62oEDJ",
  "key8": "535Nwi7A7cVkEE7GMZrGyU5wFA2HGhi7n9kKNAodyUy48NfThBrmdnejvUTf2CM1hdKjj5Nze7ap56FZA3PRQUta",
  "key9": "78Fp28jZi6M7CyQjxMmHbS9KW6FVuCmhpNUguL3J7ZHcq14yNPsFqHf2rp2D4LXu8bBxMd2hLAXzcfhrQ9gLgrS",
  "key10": "5UnaGx5SrJuUcRmVkYbyDQu9ksKz4XuuDaNcZmThdbDoXf5bzAfMBPuVHBd2tiwPmrKWLMCnjr16esbEmbZPZGPv",
  "key11": "516RwumaUXFFmwaC3vJGkf7SeANBtJ7fzHoXwZTKiTB2iVoqEtDpEH6ga2zowu9VXkh26GmmARnmAKFPuPXB3cTe",
  "key12": "2ENEVfiCwhFw2Te4CCxpCF2GXAhXVU8RLT9FwKycPXLDk61LcV8gSxsjk4CbMwoSiazuAAgSGuNbPa1xsgWSMoJS",
  "key13": "5n9QwwQoNhyupZLS6niarHUL8xkbK5JbRwefkTFX4cwqeH6TZoKUx3u5QfY5XqkJ9jG73HR2Fp154GwW4Ly2kfd6",
  "key14": "3JYxoYj8YR1qA6Wkmet4J2AYqesCLZYgJdCuTTde66JytoVq4fq4zhtr6USMurRkGxYTDQuMXxc4DHpgaQD7JCao",
  "key15": "2zZnteiFwCNL9WcQrdmhNLZnLG6Rbc4DkbkNp5aop3k8Vrv6Q2m8u13ooTAWbAXJ7CLG2tTtjotqgnsZrgTPrYSR",
  "key16": "622Lh8Ks8RMrWAZuopZ8YduA9kMsHEKqKUecLvW3stZMSprLoByi9zMPbbPHh3VbDrgekSn5HTJPQXiTBs26GS9j",
  "key17": "2ThH4AMoaWjjERDqm2sAgZczY1yvJvFv9c9iFXSXAWAB937n6tJ5zrXDa2siwF8jBiaHfTqWbKts8N8P5pTYus5f",
  "key18": "3EJZ1opLGxWfJ9NskPKD3XPg5BzsefDR7VpMG3BLWZGsLrfzfdekRa6455xQMn1s9VCeVPHPZsxzDNYbwoAt1gME",
  "key19": "2qxfrAgMGVg71B5fEYyZ9r7TuLfB8zA2yGtuJgnmBTQ3hg2fVYQR6W72nVibR76bVwKSnn2BMVfe2TNxBnXQ67iC",
  "key20": "5A1ghVkyKGKFv24MbNPSNQYN7AEJcvx5FS9wahE8HcL4NZA6Dc7ujcVuPq8BdkEPd7FHMcEy7HEYx6u4nDgbp15Y",
  "key21": "221DqYhmtEuq29VK7agyqrd8APXxLro8qj4tgU4rhKfjaTPWWxezeSLGNRY22st8RR24MD3Dh37XrY8dyhVSH7Az",
  "key22": "41WbEaaXpNz3f2ckYaG4oq64JiYbmL6mLJZJPdcPWEDCx1DccoatEpuuB6GPpVsysGR2HRh2f85p5UPzgCZKujuJ",
  "key23": "4BoC3z88Rm8DwLuAPqmmd5Pe65p2qQ8v7WgMBYYmvoWsvmBfBtYY2GeXA5C2nchrjpZNow2TmfhZwx6Z6avin2Xa",
  "key24": "5Ghz6n4wTTZyFpAyJM93R26ypC7tKSntkxtVzs4kjU8YYUS2fxm3DsxpDYjZHHgURDK2atsDRmmQ3Y9bcdeS1ghJ",
  "key25": "4yKRiryhjCswCq8Mecw7fGHRTo7mCT6JRyafXto1fkhQCkTEDdNh8eg51jeMAvhrC8r8F6g4DKA6ExK4pzHohnjU",
  "key26": "5vYAkijoHoz2tQrameXpii4kYaqZXEVR3JhKFBLx6GwGEj5ieKQuiJ7pcmKQApgm8aUVSYQS2RH3yA8hR7DYNKVn",
  "key27": "32gDqRjZWMHmofeGK9PGvbu7sZbw6CaXKBH6SRejsvgQLL773xZuDmQdZEhTu7FaJRBzDoAyLCiMJfooNWtYbgK",
  "key28": "3oQmoSNhdF7ZXJ9DiTD7BP5RQm8F3WXjm1y72KthBo5VYCCWwu2t1LM7MJijcANqTQ1wjgyXrj5jbwuGGQ3wZjA2",
  "key29": "51D7k74SHCasrBGD9WfEhAw7e7KEVtXGLhyypN3skkhZiqxBZhUqp1dsuEyG6cTXzT2dhyoQwkdxBw8xTFnK3vNp"
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
