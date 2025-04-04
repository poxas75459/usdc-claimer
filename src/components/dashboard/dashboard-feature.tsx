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
    "2pG6vAesmbzfgqeMmGVSthETwG9idychpHtxKaSAmNtdXywTNvGixBFANPFp3csHX1Y8T4PuXap6o9cZFRWqJwKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fAK5nExzbbSxGg3G6VyRYh56TdqjH4UrvBrMhzwPDhujgZWpu5cfxseimmt7ouewjNrU4vBLwv4Dru92NBrNnSc",
  "key1": "3S3eLuNr6zQNknnRLF8oixnSkzSsiHGDCgUCGNfy13CuV7oQ86UPPEE7Se7Y1puhscKQk3rX1mixYPonftaughaL",
  "key2": "4dxtUvNYYJxy6szYQN39CkxEhMs84mYkNuqp6SHH76WpHugmKxSgnUJJo5K1Qs3Ynp6KCdtCnmSAvbc8ugbPPw6N",
  "key3": "4TWPoHi6bbqKV3xDSToL9urzznzqEtu1S2FCrLNabkYc2LdkLvCBZa91T8Ce8fg3rofgq3RBBEGdfJwkfzkm52Vh",
  "key4": "5jtjPguCwnpmzFTG1y8zcqaiUbesPTyPix38f9vSyDMuUzRJtWHaTHxgvac8SDt5SReHio69GT5tKtV26ztUiahM",
  "key5": "3G6zHwcpps1qmaTKvScZFt9EePMDPASxkK2d5vizrRxhLjHs97ptgxHJfWBn37YXvkJ3Z41nyoRuwjmrRPoyNe58",
  "key6": "3dRa3hN7TYw2qJKqSFYeDUZbHhmVx5spsM9Djk8jxQ7Lp6FLj28x85SKbTTDzKUWW4ZDNSfY6HMx6E8KACx13cUL",
  "key7": "3xXak2Vs4F6ejC7dKadZkxBprVfVnF1W8ra5RrR8AgkhmY4uCPYBLdRFXMnvf9owLvaExLgLW3LqzNNnkkSY1JRr",
  "key8": "5gX5Y1TtDPNYQPCyehySchD3TStJXmqoEjpjbV6n8GnwhHSaRWrj9XBPDQEjrAKf6EGTy51fQCimuZ6AathdhbzU",
  "key9": "2zurRHYE15ehJ3HTDE1WF9JSa1D3xB7rZCq5Nzg9KFLTiv3UrfcZMpSD1FueifPxEkgDk2iLZAh9aLSemC4nY4D1",
  "key10": "n8JnkfXfSo1KmbzAhtk35so3RhYUEktUNHZLGs4jb6TLPFZHxoiKHCNa4RjVUEYMnGubMFEKg8aNYCwtfGJTaHQ",
  "key11": "2iZ8aUuWhpsEzJDxmvT6wCiVCSN3vatFeaEW8QXBH8VYS37ovc4Qe6wDnY3kE8enF6yzVptiMbsc73Fc6wm5fAYf",
  "key12": "4zaWYr6XeV9pZb1i4yGP3onj9i5aJmuifWy7duCSNGiCKHurgof2fjFNci4GoBBjHW2g2a941VXYC1Q8oeVdxqBk",
  "key13": "5vk5ciiD2ULbqmjXqJvJijVMy7aoTb3jJJXodhuMxtWmdiHXtv88G3fbvzkm2ssgbydvm9rFbZjak153TtwQbdum",
  "key14": "22WxqCDVMSXhSqQF7FPPBM8uspH7KvD5ZqtfF9B6niom6rDXMuygz9om2PMqp2LyfFzx9hAnsMouc3PpfMqBN28M",
  "key15": "3b4kLxXKdPG44dtioonWonZv25YPEhKn6vwFZkKFPxbNLKEee5rD5aQWjftnbgiyzTF1fnPazTsoPoUuxKE956p1",
  "key16": "2hXgpmmMddkkE6jzRnbeW5Wvepza9iRvrPUGWSMt8M5FjYiANUfBkWtDM7Wa7DtfT8oThQnyer1GPSN3SL7SbsZ2",
  "key17": "5sVVH2X1B6ctXKPL76GhGSHbEz6pVAkEh76FG9D5YuJ52b9gbLLzC4Egun9FrxZyHQooZeXZ3BQCDPqFVo3btWic",
  "key18": "3XJSfhEu9KCT8EPwjjhySHMDsaD9LRuWYoM8mSTg9Pzsr1CdwjTj6aLbPjMshGJheFbQt3QGJk55aFjsv987vzVk",
  "key19": "4vm9a4bJ65EaEKk6osoGKs2Za1MXUacbmpjpCftoQgHAMH4T3PxEdCDU8wePYbGWu7NAPBwpbJZQadkWzJJ4FrqW",
  "key20": "57qXd6Ynz4UXWbiBNSATsFbqRzVTN7GTd5JRV5afXAeCqih85pvfHpPXea3uFZC1WcJpW6KUXfLW4A7Tg894qru2",
  "key21": "2vXYJzXSxvT3z6DkTZm3WT1ZFe6v42rXFGefBqyqsvwtX9w2diysCUeuqMFGAqgQLQhekver9jgW1E7tpt8Ht2QZ",
  "key22": "4xmkPPBeBhbG8qLWUZETYiALVkZ2pgNsFqn1zM8LmbEnkUARPU4WJkwKAefP4eHHSTFacdk3p4P5MmLqU9rP2sGM",
  "key23": "3RqyS61GKkJYX6dKcXc2wgdLprpi2gKgC37a4bJ4GH1H22EWxvLB4jG3PxU56Q3GDYXEtsgquQXmsjj8AHr1P8c2",
  "key24": "4EmucFHojoMKPrT81iACi3YqZc839BZ4Cb6QNkfP1f3rqXrapkGFp5FPWDy5PEYLnoNho585Dc1vWqo1eVx3UxPC",
  "key25": "5swppxetyZPNgKr4supLf55vpFyo5JvWattrraFehFtUbhjYWdP5tHDYLyVfBzpsR4vhbhG79y8Wotde1NvbRMRv",
  "key26": "28bBLKmkLitYGFaq7ZZneXguXx6v4D8hJuzFEY5gyBVAcAyopz3HNHzGE5bYUuQzvunc5dQDrF33ScsF6Jbdiy2s",
  "key27": "4wc9v8PQ67CVKUynQLjHJbSQALaMtz2Wq7UnPSDrTfBLaYsFkWftTf2naS6E5teuWAuy198Sf74EKY2B43Kw8q8x",
  "key28": "3d3fiZSDowaSm3beCxMM2MZ6zEGwktkNps4VxRCYYWcqhexAod6NVNoaCZWQYRfbxAPDB4Q28Uxqg8rEDzjKGwz7",
  "key29": "2GKDmgja6NUaeHFDt1ouXVP9fJYksoEhTGMXgxKrqfwJSPMwJHWFUMLQCm85ZGoXEFmF6C3ZX29p45nefXEqzCrb",
  "key30": "2pffWcT2Xz7i9p9b59iTdhwaz35Gp9XhAdxQMcrCo9magaFBJFKp2pu2NMBgK18cqz5X993FAcRJa3Wiv8AJYyga",
  "key31": "4WrHM1CcJotDWrhawWQxAD2opUEeBq8XKJqVH55cph8w7HPuJgH3n9VVWtatQ6dFxuRKd38oSRbCZZYwUW64ymY8",
  "key32": "3qtV3KwwUw1jSXcDUqRPngwQEippKq3Xi6bEDjbnqheJgGQKfUKg3D6MGYYUP8t9hzSddxjFcpKoX1ULk8vEeqCS",
  "key33": "36yYhyQdPDNLwniFRR6b4jStwPrssciNqzyePBzh99ccG9cqnavi4u1wkAadjSxCWKCgENzdhKKgWXoQ1YgAto12"
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
