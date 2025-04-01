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
    "2eewM8G8axt9KgjgeY8DbYCsZeHuoLMpExSRoUjeXUnjmpwY5BnW2efWZp7CwRDGXRGfCsMvXHvsrowrRwPLyyVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQquEWvfMqMXExD976Aw6VfE89ogs1nTWhzgZw3HbZxEkxVmftvHPUkfgzCR92iipesGXLGWcdgSNQLg8VfXikR",
  "key1": "4DS86Tw1iSxnKws8woZz7YwWLzTKg9rC7Hst9GGLqaCF38WN56xG22TTtsKaTu9t5kwA5BGPNbiVBPjVpnomvCns",
  "key2": "5rvZjPh6WPDaL5xR9hkjHkKx5VUHak75hc7RLWJBjBgoosa7CHean2kZExCVPMiF29CZvcqCwfPnyoKh53r1cQgY",
  "key3": "3CU4gCiYJoTuH5S7NfbasorDUTPHsEgKaheqNSm4bm8B7qeGDPnYjMwk4AWHmdA1tZbWLTrWGQkjLPyG4JddBJ7n",
  "key4": "2rGFwTSBH6EbssaiZsdzc9jbvW7eqUdDcawhfFtNg4BV3umJz8VwtkDjGAyaJAXtHehSCvQHG64Jfi4sHqGtEW2n",
  "key5": "4XDUTsZAL15KJGYZXyUYTyqhXG9btCNYrHuA83PRXL4HBUr6BcAfrQfR2sqqNNJ6EnnPff5VuejLD2fQ7Cgfd1AB",
  "key6": "2cjsv4bHjxnC3s74mLVXK95kJrJEetyXuv9ZFGsQv8KecYPPTpdmBQeLLuz1ovzMsDh2j9mmeaUWEHWKMdE1ehA5",
  "key7": "4kGonBidHQdR8yaZHz6KekcEdmftk1kxfJD9jAFf6NiYWWeaXN3xApqMp1TnrcR3JSMyAP9R7xZor37MfmzMcy7J",
  "key8": "2E5qqNmVKM5eazxcM9qmx8J4pWDu3Da9uiosnNiGRzEwpVSkhCTjHoqvKNbUZdiFrxS8YgpMgA13hAEt6imuKgb",
  "key9": "hEeviWg9PfkigYqJ4iSef7KzVd4XpBSkEdoG1QEoSeW5NMbBQobNpkvsunhWGhKMj6vsBzxRz1Bh4moK87qnKcr",
  "key10": "3ShJEBPPXR91YpiDzRNqYSrKMoWUB9PCMLQSE2g2LLRTvTYNJtUBVkAni6Wop7yz1knzF6WXLNeUBzFBWbyLSYnV",
  "key11": "449Dp4GyBzuwWBXxNxdFfWWZqxSWSn3bLDH231aBmPPKvuyK46a8xoAXR78P77U7ezvnW8SbGKgMkxn8njb6AdBQ",
  "key12": "241GRUe3cc2Z9nTpZN8ndCnBr16MWrYo3iC3KvvAdo7aXaM8hrAt71ixUDEPENmgpvVHDLt6ajhxi4AdbHGBfiAz",
  "key13": "2vuWJTzYKSRrPx4G5nb2Xnw2vJd7uKzzywoE6CeX3rusABDXr7W6XbkG9DLbSiR7CpLWZvFAmwT7VNJ95M3g8kUh",
  "key14": "4Xsy36vbaQRN8a3L81gojZtVkwQX83pNPfi8hQHhfWaNuebrN4EznePyUiBmfF9indAwde1kZrGwaoncZZt7CADy",
  "key15": "eaAsvZ7HVfNaina5G1kEAndSxtmSThru2h12aV1XDVQ7u1kH8Ax6k9Gmqz9vUkU3cg1S9sfyyGiuwh9tvGjC9eJ",
  "key16": "56yEUFgeyzd47qkH6xEBBgZnaWSjcVGngsjVL75Z2WTRrEqWJRjx6SBwki3npavwjP6GdCiS7H8gao8mS2VcxEWJ",
  "key17": "5NMLiJXmmpL1U4EGhxscCp4fzUmSnRkfH7GjJFLA1yZGdgPPFZrEG3mWvuyG2bREsa6FiPmqo4qXai8cgsJBqHLy",
  "key18": "3KjbzUrzgtP9psDto2wRMM7MFoHL4JoKK1jkotcwtWjUiKVVkdny1b24yL7jgbXHyEgbzKMLUMZ6ZcPGeGMjfXpZ",
  "key19": "3X2WE7ydc1oiUxjTWZgMArqtFNPEfrXwskFgU1WAiJfmi9E8c9W3hvo8JzxHtVP2PbKSDD3qRhzH6WBdoc99Zc21",
  "key20": "4y2wQQ3cBWvLzbmarAhoMhWS5DaV4hC3NK9oEqCE7uRRQyACkvQFurgjRiAeU3UzXpWYtVu6J8pFTesGWusK6YUC",
  "key21": "5zN6zMFScK4SdvHzbP382PphoHoPk3xCSoaRm4vtwUWaHSUjq17wSKoT4RUA55tRBJ5MHwChiX5MM56M959Noowh",
  "key22": "3Zq1vJELE1H1WPruG2hHfptq1QbBAe8YUkVLRXGsVuLLNVWw4VH572emCN8CQUyUBGCQxjgd3Q6SNdTAPnTSa3bp",
  "key23": "wjWqace9YHmDxRgtVtnWQgeT6FbPhcAAY7R7L5PHBe1bvLD84myV2wKVsNLhY4qsCRqVH4ncubrfHmQUMfhN9GV",
  "key24": "4D76xYgcxdDgvHKwxL1nj4fPUNk7rduFaNsXmcGGUeUCvnfyYRxHd4PahnR9BuqGMYVaHUx3zVoufhEA4voUsmey",
  "key25": "5XUPxX34PSMJFBND3qNN95KCTLeJCnMCws3x8NJaW729phema3GAQ5Br77LunGd9QcA1Jd87XeqdivHPuqHVUhxZ",
  "key26": "7HcQdpwTNhScuK2tt8wrrawYfzhBhVx8yDE1iHFd6TX1uq1VpgoswjjbnhhdMA74hdQzPf7FU5qt1GELVLrAYzn",
  "key27": "2xFPNcKZB4DNW6psLhdxUUSCZNUQMtCnKEewCMah3foae8FLAJDxowuQd7mBAQ48B6w1i77aiMneq3jZzuo1tjrm",
  "key28": "5ivNFUWbD6P11PLnTDtjPivHoFsA5Eq5JMF1qdXQYqqyBjaybGy2Lzt6kbeuUknJoQ7agoNQZ4ZSPEqrR6JiirBj",
  "key29": "5p4ZRXq6xQnetx6Z5B3a22dgaNDyTgTcJxCHjddhVMv8gMdkT7vvPxEh8teohhgX9myHGbJzSeBgyf4ScNeSyy1A",
  "key30": "xBQjPrvKXoUAwFARaau8MqULGLLhVtP2PqNF53uHgD2AtRwgqprU3GW1S3eLN2y9UESGM2BGUGthyjZLfQTB6KB",
  "key31": "4xjbt9MWUQNTLLLyoNr7x8hpt2MKdZoV33H8xgbFPfeDQHjSgYxGRqrrRVpFGRCqvAwgq2YTs8oyAY26DZ8aZGBe",
  "key32": "4i9RpghWxHw4xW9TMVDwKELrTtRRVVcckmJTtXC3kQVL3vJbhCMDpg7XP7ZkGbvMyexsY8nz8ysN2ERhM7WRkHhy",
  "key33": "2U24aR6vr1duUXfGBNir31z9Byg74dPN9iYBw8Tui8UxeaAbFRTZwxq2buqHSQnvNzisoUheBBjY43z9i55kEgqU",
  "key34": "4MqhFVV6LdbUVvDvx5nD6utNG6TFcF4hBXEnHEF9xJcpptquQmsmLfzpLvyWHbd5tZNN8aw4G4mjpizd5HuB88bH",
  "key35": "2xwFCfe5S7f5VmgmrdcTEmxazyqbHhTjjFBPtYPSJduHLkmabN42vwKJJtGjUDs6w8EBcqmDm91bxgMq2sZ5rDnU",
  "key36": "3Fb2zfuQa8BmLnHPFUkJ5yZMD8E9Ak4eihSpfwQU8V4qw8fpyc1amwChkrmaLaMnMJYNPWoPzFCbwcxRgSvFXsuL",
  "key37": "48LXWELMUmYgaBAbBrFcALb41FtFTZrwdqfZP8KcKWRNrJUpazFEKcmkJK482RmhnYhFngiXGF8NTo4b9VE7skgh",
  "key38": "5cqz4T1sQsSguWZBPpU1rfhKDXZgP64geNYTzBtuegXNqubgEtD3WqTqa3fr2fkBtCyyvCy3888SXnzx7E8pMkKS",
  "key39": "Q8FgtXTERmmF48ozSHQMLikVUYVDMZV82jLeFXrkG5PSAwppXm7XvzHk8buswbbn5Tv6fGbZWTpXrTp9DrtPceB",
  "key40": "djmQUYp2YZA5mpmDJyk4U2DzPdUsmSuhDn2gkpUpk6UHXT9H6SYqufpcMCRjV7uLpmwHLCYk1vdazfcMZHeZ2PN",
  "key41": "428NijdEaDehatHmNHAZtUHGcUZfVsRxTSR2XnynLb5Et4wcW7qDxcvSRQL8tsv75ftCX6Ljz1eZf72CrnBqTnmv"
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
