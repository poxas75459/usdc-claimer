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
    "2wEggwuVqXGP4eJdJzC7wao7TZiM9d4QzmFbvPczJVu9f6HUnZAttvc9UMhj49uc76X9Sxg9MvQpgiWtDwm5QeEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfGKBjjxAX744w3PgHCxWtLDYBfsyjYWLG1jRw8XWCr9WMXyApt8nfvy7GZVARubgsjyE2hx8nMTMZoyXSmCYgY",
  "key1": "2qSgbnp21rtABJsMrhoiDdKJKxyc69JL6uFBLq6D29RqgJAXSPDXCbgAtqJhZddYzAFR5iNhkCRBvkQMRUn7YWx7",
  "key2": "64GSuNkNpHkXUhSY1qgtKmDpufhtseNqfyjiY4UKTwheAZGVi8VLBrq7Yx7xfvopcENap8Eg3mpuxnsKY6ZMa4EJ",
  "key3": "5fC2F9wqDTQVTGVAomCUGromvCVwXP9M1hcDvTkTqwYVL1Hndwi5bgiYsUQoHfQpWWdNxpdfLLjZHHDgrCdgpGLy",
  "key4": "34BsAWRWVCXGiQN7wa9WjrwbeFTzAXBctNS7JcJai54fWhpoatCfC8fUGFkbogiTrisVif1Ncj1MjYFCRhadABVH",
  "key5": "64dWiGZj69wv8SBZDKB4tjt8yLBQox9KufByqLJZdptRFSE8Jb7owSR2SJrdfukHnQCeeMxmjvgghY8osWxyYRSm",
  "key6": "5KLEGAj8jiTyiGpsk2Dirswf23AZtqbzhiXiaLxWNAihrBrv6VfHGEbhsxt5N24hXzMYYyvCDvuf6BMYpaFR8MNU",
  "key7": "3nLKqHS9GHP3m1F6CARoCLD33v2mssX9RZiWUBMdRNRk5fJfKbruJCRTNMXbTmbX1rzbJ9zMKfNxHfXwBgYtJDqF",
  "key8": "3w82NVY2oFJaqzmcLbRhmbyoqAVWdQWvvgVtNJsa2kegzvrgE9zS12Rf8ZEDJazd8ccptYsMSvHVHsWUQKgH7KBc",
  "key9": "5M7g3J7cSBUNnu8GEsYFK6EFJgfp1Q8TSR6HvKFQUoKceNZR8fanNnM38bpkZmGQzk1LHc9KKskVAFA8WVC8Cik4",
  "key10": "AdUzf93mqbcNJHxq1U81rBTdw4rfo9DcGnYVkeJa7znT9JQJH9VD2Hn7pnGBCVnR3cUAN9knxQV6Za36Gv3PZ7G",
  "key11": "2WrnCPK6zUaS7NLSgdZ1NUzKfnYMzvKN2WtiTLAVBC7JwYTJiL4krpPkrhbsxG7mLerVMD4KWtvYmq2BNDAXvomE",
  "key12": "2rLAmzmwaQqmREsYciQVW1BeJpyaMPtd1eSr4KxjvjYLoZgBhuvxqHh9zaN5Tjk38vxW1cdxqSb7rbZQZCLd5rEB",
  "key13": "geN8WAEngTULuGfbDDdo3Hp1Z7Gc5aV5foPt67tUYDvmsTuYiAh23ZKTSuVHTnFEXXm4M4Nxbg73groMQoXMaQD",
  "key14": "49dhKd1du8aEymGpPVwTg8JpC7TVwSKgeqvCA7U2QbyVEMkA2ep2iizwNfWmJKSWFjfxzLFdGWpXiEogJUWQVtmp",
  "key15": "57PdrzoBSGnhHtfM2NGXxB5LiVnKNHkT5CFvafJEaMP7Ez9dEotGXiSKG56NvFkL4uG1rGCkYfeLrDFkZP9A49J3",
  "key16": "4Fzbad2P72CVdaPSy35aMbCd7wKg3VmtBYmdXpHiUp7g4uNg1KduxwnBXZh16Pra6c3mUZRUHjWQCMTJDoU8qhTD",
  "key17": "2gsaTkivvFF3HT1hFBBfy2H5K6CeU1skLWwpj3D7SeXSnXdjcGPbHBCKQEoAj9tD1fSoGrNQHiNhcn3ZvRtNftzw",
  "key18": "4ohu3qo8PTWE8WtSttXuTEgPwkv9JmPysENNZqrQ4ZRmraw5VgQsdYAa5BrARJ6x5VaZHpPeaYzQYXpp14qWMpTF",
  "key19": "sD4YmSs3cjd5YE94fxMcCvUEGQ14kLTZnCv5htXzyS7XgnFbQM5jDPj43N38nzNvyAv5o7BPmP5xsMiA6E3ZQ7x",
  "key20": "5Tisx3Q6mKNcLbgQBb2CxGyuVCuns9YLahkn3gyMLmAEKZKkDwLQkru7yhWtP86iqgpSzv364x4tdE8CuieXomh2",
  "key21": "5cgX12UZjn57mjWxRXvQUkhmNT5p9G4pcMFUtjcgVjTGJBjDHprPonp4rUfe4THSCGtpPdM2Y9XxBXM7p9X8To4J",
  "key22": "2xvGoDa5vH33GN7vmcaXZAVyCU59n8LLYXiPcJxjWcXwv2ighgtDiMvUXUjWa1tmPdYMDvKT5inREqNPcRdMnSHd",
  "key23": "2JwS9vS6sTbjuZX42FmT6SyX1TUqq27YopFy38Y4BHs9uYN7AWz1iPeQQxqW8QPtdTZEfSDQFYbWLG2mwA1XPHAX",
  "key24": "5gpTiaikbd8UWVMtb1Yo8rxc8G6Pp3CaWbVFGC2rorJNEKRaQwo9NFiEkHcoMRGwq8ktF1mX8ov4dhfLT7YNbQTb",
  "key25": "3mBy4zCRA49qiktJpLpmhmFhiaTVMdGTP6Lnb4BhdcV4WQoYi4RtLLrRG6fqiWM7iFzSRTzeyUxhXrdbmVijMgn8",
  "key26": "2ZrMrK4RZwERmbH9ezJapmfQco3bLWjjQkm3keVDPqiZueCqkzkE2f1izHrzCLqt6UxQkrtJuXexu5x4uSJdznHX",
  "key27": "5ADb9mHab7tgSVBJxENjMu8dbtF4SCNmkArPFC5DNZKmqWxVA1ztZu2YPXk9jLRyv4hdXsDeQRn7vXCbNHBX1ry9",
  "key28": "3rJiBZsxxFyfZEnWvcRYwSWVkEUt7mm5sD1XF122GPpQ7w9VU6UF2kHUqQqPLCfBB353TWDnbSZKD4Aj3Z4xCYZD"
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
