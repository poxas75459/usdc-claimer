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
    "3GRLgUJQTMhCnQNXPWzVk4HUBDzZLrekmHh7gvyqaD3fzPovVTwXjdgTjUR4d1F1DaBht9xQP5zmG83VRd1xpmv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEwWwhzByFPGJuXc4EaUjonvXd5oC92DuoFSB8kXWFNheCXraPMaToN4sjdBw2nDdFjN1VQAV982Mytr198bW8R",
  "key1": "uZ14DB5fmgceNg74XmYENvVcBaz7DEfD9F9RA1gD38x7ZcbuMLz8GeVfYAk9XWK3uquE1Xo5cjoGKZYAknTS8Z9",
  "key2": "282xSmv2drpYRBWg3W9CJTUDxMLtSirdb9E4vz8ASQs8v4quXmRz5LJpC7Dj7yiRtveyPkiL6XawNnraER8Pd1gj",
  "key3": "5pLhJ5SZEwrPpXFDjYpC9qfC2Kt2LF1h3pg7TLuHK5pzsYPvbEq52qHBzH6LQeqpLPbDjgV2FNy59TQLkcwmKvJn",
  "key4": "34BmZzRfco2S6anfJ3b6D3GuxUNBRMdof9bPHsF15G3ATyEvhs1dBH7FEaMmYnL8xGrTRA5zWPVR1bvesiZUczpm",
  "key5": "VWVVdJgoZQGaf7dZSsS5sYzHsg3gzosXB21ZybUGTcNxzkPs6W8D62ZyjxjeJRMJPDUvtap6r8mPQh7AKDG8D8s",
  "key6": "T3L24nMy5Bc6d5Q41R3e6yruBsGGXDbN2tx6uMYwiMookZ3aJtjpKiqa4PGgiidWyR3cMRhuDsnN4GjcXR5VuQQ",
  "key7": "Q7YyYU3He9ZAnh6ZHi6rncpDgYeWKDvDTGYefzBRFfySeTGjeLat7oU7CpkEwNv2jP22iQUB19GgLPhDDHA28aY",
  "key8": "5TErtWAnVAJ7kYfpwUj8agsiKi8NjWL7a1kH87DKwNDyzHMe38DqUqmgREQKDMq55JjNjCMLwxoD8Bm8tS7RbMxN",
  "key9": "5LKXUrxjS3o8yaSArY1JiJoVUDyuWsurJAuqWbiZSLXhAYibbE22aMg9dyj5aKbkHTSY7XPcExXF8BDN9Ut4AcyH",
  "key10": "38S5eMYSAcBgtqZCgXEMw1VNaL31jDDoiXeracpaotHDczNrDAssNHGHrLZuVCpUMhHK1rP5nNwLK6GDA8ijeajs",
  "key11": "8XLF9HikmJ8rNaLonk6JuewzynkfXE6EKGFNKmYcDSFtSvZPQeP43FMbpPEsHs7UE6tw1gyzzJ6VAmGAWSyhqAV",
  "key12": "2njaXQneFJowxTnbp7fj59nbKToe4qxdLYU84VftHfLfy8NQoECKbjVqJ4qoRYrsRemb53dnnFMMsRg2zVZ9DEH3",
  "key13": "25F1VGvgomdGXZvc1RttA65VxE2ySJnUN3JG5p1wUAHx3h9MgLD8ryy4hriPQbCg5Hcr5AYm5QEpY2RCUcpSdZtv",
  "key14": "3qmX23J5w4w7Kp4MDmb2mPpopBk8dZJGqnrJQeX3GQU49mfjdoHnaaH154hVSn1TLLJYByf3c9U7H8xVqc5unfZ5",
  "key15": "4eLXvAuo64m9YuyY4My5e8NWoY7KBtocZRQaAQSEY3g3a4E73dSMiU5VQ77EUdRhQrZ6xAsCrvnLjm3HYRxxFgk9",
  "key16": "2BGMkVSpyTnQbQra3FBPy4LAdgHbiQAAgdgLxgVrVLGeszYtSKGTr5g824zC9u2ZEAdoWZo3UztC5SHjY51r7hsc",
  "key17": "5qHN5p4mKXviSKuqFGZRmxTbKXz4LwwrgffqbdmRWHJ7A4ct5X2NUhnbB5rSGHLzb5GTC5RBkKtm16tHMYWX86LE",
  "key18": "3yyrUhQARh4zWPxUmRih67Gs4Mi2VHyZRaxm1MFX5fZ3ve3tAs8beVjVTndsWXsWbnpTbFUXhpkjJevMVi7XbedM",
  "key19": "56s9cv2uNnKwhqnwAkLxXNCkoNxmNJQJEL483fEm8ZFz9XSQmW5Zd183tG5CVKjtniMfGh9Rm3En8iykobGga8U3",
  "key20": "4JNVdUviW7JUtWF75f9yuuK18kaEBQwwPnfgLy9QtymgkekxvoCNsCR6DcJbrq9WQz4X5imbWz9GSVn3iq2wpEkQ",
  "key21": "2vt7sdViSMAiD1FypiQXJuDwMtyoJGA9Tydxcq27821XtLZnwmet1CJm3kAt5pJQkvgkvy6umgga9uqBeYS176LJ",
  "key22": "632ujJfTswJk16mk5jrLWAT4L7QYcKi6kcPZtWuVu6SkYzx5XfdKieNk7upci1VL7NDe9nA6rx5sHmgGQv4LgiEd",
  "key23": "4Eo4fL5XP92fua6E3vaKVDYPw9gRS1GkXuwBjz43xGZa1ZzJeuDxAHBuGERkxLrfkg4YX6UWkYFjPMfQgRjPTzos",
  "key24": "Tf6MRketntJP6zhkqFNMzfhF4PTyFxqE8JuoQAZEvSnaux3DFPQDpuCgMMt6iXckf6GmPvmRiQMkdPaXgiNkin4",
  "key25": "VVm6GzP5fKs4bMXE4ko1V1JU9GQruNeRJhoiS1mDMWyPBuK9fDyfGR6zYxjtVNW2sqtuNhbDXLVwt1oQUSHhoDt",
  "key26": "4kFB8G2YZmALrUDXCyMKhgMjUS2cxQ8LLxBQDX9UXKFjVnbMbtKue1APDeoHxVbr5hRocB6Vq45P259k7CxDxabG",
  "key27": "2VFmbMRXf5Dypfws3cCCRmv5DsynSdSTjLMoi5oBNdXVpBWTq1wfh29woDVXz9CiLNmxoKTwGpgCsJksFavowAk6"
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
