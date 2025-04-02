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
    "2L5h5K9p1RPtfb7NaMgGjdy9h41848bRi7bxqBLi9vHSsaQxW1Bts5bLQZi6vqPQMRJwhHckV4HBZkapuEpcgn9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSasLdgZhfNmzigTuQorPnmeozyBAKReudRyfSxQsMuJbQ26ggZobJebiqYSdqNGQzXVePXHjquHPAFGQ6488Ce",
  "key1": "bWnWqoHDAuR4vRsxzuZCJv42ViLnZW4Vu7EzNMuvgv17yvHUGLwAmCf5LKMPmFCeo6XQxzVUpBGzTTnBA4UVfHX",
  "key2": "5b2t7xuxsBsHnTCoLP7NfLNVTHMFTFBoUDwpKBDqvjr6AAH9r47xDSXmw2v4KYwcUU3BL7T4vFZVhFt5pLpbCkzT",
  "key3": "4Nz9iTqp1MXgR35xch5iPortKYbYsyDJnmdWZfVuJtELRTdWUgm93jSrbs83J6Q1x3TRsuBeFPkZRFL18KgGvzz",
  "key4": "qASMzrGzGPd8289UDUfon2x3YzsEwE3wA7TwYG8aahWz3Cj33EBtUtJ5Je668v11huppqRAgRJvnGG2agySmMgh",
  "key5": "3rKE2h4XZrsiqVtHRVNbfuerqXu5gmdANCwdAYnZ652XhBhL1WZJjXSRNGTh5Zv736MDgxdt3fEw4PCCCtd6K87w",
  "key6": "5y9EQqC4qVGLx4sDzDXWGHU43RtFFY7duVdv7VXZHctfv8yLVBC9CecQkg4gUrcmHnzyWPdLEZ9LBqhMAAj7UPKu",
  "key7": "2YYpURBtpa7QL8TjnxhtF4eaVZ6spjnwEJdXjyVSSUWocHndToVJuWMuioNfE4KKtNebhMGJqs6GJS8WcqwdMvWr",
  "key8": "aYV9xXq352avAupkRVDCS8yFfhQTL4dRJcuHRDnbhLxP4qPYqfhCyUvmC8NSgPj3qs93jvw2PjvXi7CdnKNb2CF",
  "key9": "2LXeeryeaynR1JsMrXrvLev6qKaeHpyR1XC8qRbAJzg4DVSuMUr44efwSetzBe6GDTeYrCZjDriyTKSp1bMo9tWJ",
  "key10": "4KEbFKHwPaGEP5cW5nCJiseGmJzoGMMXWXQNezTgUkqLDUYTXveJqcQrRtG1M8aX5TBHxG4qLsSriTy6Mdod65ao",
  "key11": "2MeRVS9chTXpxpcYVDibMo9ipGMsfSuuAjWidTs2nYSSUWmScDnd3zhwcyVWnbaj77wq9iHGjHtQ4odHnQBXuZUx",
  "key12": "wsmrpgtjXGH3LEHwYeGaxM6dmvdcd8Z5bW2zp2H44pFopKEcHmRM313CEPtSPZ72J47SjKzkZjWvEXCZN7mWyC5",
  "key13": "4Jn2pDPxBQ3bSyVGKEyhuwNQzeo5g6PbFNAqE1dpogsp9SwYEaiJRAqTGJw49UJpx7K84AbySHr7z9Q5zq7BGZ85",
  "key14": "3hNmrpA67ZPwRCdJef7ZG1U3ghvSu1NUjFXxcygBUmijKLZQLGALcVVVeCccy6nXRR78Wdx3sodgiMRae5dJS4G9",
  "key15": "22WqJSsokMH97Ti988MVfLAiKcVy3jNvxja47MQGWpHxcaeSx9uMQLS4tniMzuBoofgUzmnTckUCNZUYirtUca9C",
  "key16": "44LcMARrQYYXX6ba7XfxVQdwxSoANqw22jh7hEZ3BTRpxCy9HiYVcXhXYZzsCnj9gwL7dYvGerBWBDbdxc719q3q",
  "key17": "4gLZd8vUijYiHpHazHuEKPYXTxcusWoXRMyReUsdEvr3wbmLNcYS4SSNpSnBo2KbbbqKSQsKiCMipbotjq12aQCh",
  "key18": "3WBnHwLPqGJzkPMrs8ZDU8PCUwm6ihKTnXmQ8iaeXCC1bRr7NgCiL3Sh7jQ6s5RFLynGhv61m6d3hTp6snS4AhAq",
  "key19": "5bGyH4Aa3htT2B17UWzjykuetMpJYnjoFu41TsPB39sJJCbnnjJ4FYFiHFTgaRk3ZF9n8TbuoBDNmT2BugtnULiQ",
  "key20": "4VQoCNuKcAEcQRPAfn3VFYu4NTfpcvQhiuDwiAhox2dFH5LeJNmxiV3oUZCCDPyAVZ8ruWXS1cvrBgPGDibhWNNR",
  "key21": "3TZzfztyV6i3LEZY4LF5PQYipa3gVEGYvC4vsbkmvBhkQJYXpfmSz47DaSCTg7MQV1YEYi2m4Gjbtyp9teuP4gBY",
  "key22": "5aL2rCSQJ5Ps3qFPJvFYXWD5bid4mi1xXH2F5kE8xSvFp3s8d5aG5DnaZtu9bvWNgZzg3cDAEFijisRgQwMvQXmq",
  "key23": "3Xj3xSLT2VMAXNLkpT8mRqArSqcuf6GpCPesJMuKbAhZhNcWMkmCmh95xndx7Q7GPUv587x5Bu5tNWbnchsWPRNd",
  "key24": "4hUoTRrPdudWUm2dG2dGXMboBi5pLNHkCm1Ernm7aD5Ri1LWJUuJCJzQNw1npqovzHzRKZBKvMoQZPcbXi2FuUXP",
  "key25": "4mu4377Pd7WYKdQkwT7g64odmmXUvenRtDeo7e3K8Nn4MW44A32h7oGAy8CC1hwGjASXBfekTsqw5ojsUt7vFuUc",
  "key26": "5iawvHvgkE3ZPkwoVJey2uhCnAdbek5NcCVX7gpcspGB9rcxwZz268CKd6ANwKCu7HBcznY5uHcjNQg32ecCzDMs",
  "key27": "ajeririZDFDZL7aw1bHUqGb5meP2hxSi522pkuGEUAn9YxMFq7qzkcxxznLrkxjdwoobx1tVrYtk7urdHcyZ3Fr",
  "key28": "64LHUMkfwRqyy9QZRoaJtTg4TmB1rDHw4dLuwJ4VykxdXLJey1jqCRApbR3HVPYQp27CGqQorpiS4FeWEbrKh66W",
  "key29": "ctrdZCZhRr8KRUBMorfJYpZpRLPkvjdJy5YtWuYHRXWDzkemb9er5MPKunAJWcMzKQvFA67TXXnZi8ECrnGt7tm",
  "key30": "kwUzBee2JjgiAGzRYR8c6ze1f42zDS9vJjN7RZBLxET8QyCZ65J5z1cxbE9XdESoBQfeVAGZQ5o3BuSUuP61VzR",
  "key31": "ba53DmUG1KHaqq55Ubqz1TjLaz8fLJZmgGCh9Mt5HgSyydVbBLYYqFKAQkyF879yoTCkg5N5WJe2x4vaC2LDwyJ",
  "key32": "61wQKLmL8vg6Jvz1RTokgqTL4aQV18DwgJLueVSxwDh4RD1aHErA9eCPx74D3chne3n3QTc8vA69sip2Zi6qRTad",
  "key33": "46k9ajk1S7W6qg49LoatKTaVXxCgrKvVqCZ9yWy8i2dDz59AXDKJGFyfHqx2ppwYwWxqD86nwsYPo4SPnBJbgJfs",
  "key34": "2Mw4kJTVs1NfaqNqwP9BzWWaE7ySeRwjrvFiC4QpkxX3Rti4H7maakyo3Tsc7cHVFuj8mEgwM4btQThpaKkEb8mR",
  "key35": "2rfASrNzjR4mbBThFiC4BrCMXus89UbP735Dz7Z86kon389zEncjLAsGbdsw2wUHaG67kJkbhPKYHgmiSFHoBEXU",
  "key36": "5D7dWRJcbJMN53SEq21si4xchWYKNSVNokUr6jivrV816bLSPzzgJiqcsj7scogW2VXHRCDfzGYQmSJsRBiyQ7u8",
  "key37": "AGtDtg76ejkSw6gSrkaEEZntKfbjDGueNAz1J1WUEtjoySEz5Z5WGEbM9kSKXVaics4YAX8PwvG6EfCc4MgCSgG",
  "key38": "WmspLtBQUFbMxK3fkrTAkDNBdxdEDnx9wPP4LUxpENWagG4y9WPTDmHjH98HFdx2wFyvtuCfm9Je2oxwcxaB6Uq",
  "key39": "5hyH2PaWRvUbEYo7CpSiFSxiVELNWzSx6m6iun7oxvHa5EuPyqTHPDGhqQ7C5JsjWexePHHrET5RcVZytbGKHAaa",
  "key40": "64TZFAk2CK12rfC42TSwWgfVVpcQmHAQyeWi7vnvpip8rteWowdm36zKJRRoP4LvYsdC8ACTweBcHEWq9ctZ9Uki",
  "key41": "49trnfZHxyHgsn5C5Bf7xTGQdxN5NFLRhq25gXxTVaeHUt3Ukmn4sWJfcxgPpKnpSSPFvwj5Xg8kp2epYJcTxwYy",
  "key42": "5Af3i8GwK3AjezCdCdcnhpj56jgBqcPUgH6JzMiDpPnUAhbZShWNrwbmCBKSc9Z5WnHsMrrvkvtZsEZRtbiKD4o7",
  "key43": "55UP61t8zG6UC6C1rXXyZ1iRnXEq4mqYptp8wRaSjw2SUee4RwHbtkW7Nq5FTZXKGLZgeeEuAE4fCZnfdm8skbwN",
  "key44": "2oyJSsYPzpkn9NUZVitSdQxfp8MerSkcGPVmXac8P4av5ir7f3f2oPLm2ZbDmStpRqMkgB2dz3jp9muSsjGC6Enm"
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
