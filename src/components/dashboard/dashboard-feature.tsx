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
    "59qWqUi4bnj8oKsj2xRMFBT4f2tEktsD9s28Rdyxn5auWZvqTepN1ncmTxEQasbYvnYXd8Hb6nprsGo4Y1GsCWgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qz66i9kUC9cuZtqG5fCCe6RHdeCcS8xBXoVdNPiBizfRn68ntrhotmBmPJqAZ5zyHc9ApTSe6DYfvMewGBMKLWn",
  "key1": "5vno5n26bFR8GC4RRkv99VR1crWC2GxCSQFAV2gmQqQktc1YaAkXgh3KezApd7ZhrVaha21XDPJuYLG2wV9x5Xd2",
  "key2": "4sLh7MGgRThp1ka5uuxty1CmaLVqXGL41psuE4Q5w7PyrENCCXZFLGtHiKj5fw1145bWMEztXjmsMu88yWPeQVDM",
  "key3": "3eCFucPm76LLZjgQr14iFns4v5vRUKAnhJkhNkXRwRa3qTpwyawb6QwDzA9rCJuV2WnjWiNqgrBbrDjTJGe5WZQH",
  "key4": "4u83aYx1SKhifQ5GeEy4geWBaqN22rehhNCSqjTpT2zEf391J9mRynRpcgp3SjLnAxSatio2DvueEW6XW4Q5VSCv",
  "key5": "5NPJYtwEuiKX5D5YLGrfyhZe4byL3KkYtroPPQNrbomgierCVQdUffzDR4K1pMbFcLohh5i6x3MvJptXuZo9VRsL",
  "key6": "3trQ4Ne9p6s9isgG2ZBpNu3PXF9Mn8mSZ5QM2oB82TnfL8ZwVGG2CScAtrFGQAFj58fyFDDVhFR631xjGfTujKjP",
  "key7": "2TPK7ASw8SJ4h45r12tR99E4CCe8fRkry3STReEUcxKZE5975M7e2Vg4Rpehe6yjZXghPwM9sRZgQU24LqQsrvse",
  "key8": "3EPJms6HbFoTK5FZfJMdhQhwnTounhq2VN5PCcoBLNwAzx9GY3u923kkChApy1AgvtyZrTEqBmCatsrhXrcoY7J8",
  "key9": "2NTw4Jq9RUaZZzgjpCrqR6ijAf89UQKPvysuwCRGrzvX1igZWeats8FW2iGVhYjPg5P6hLV3nJPoaSwNLpvNDTP6",
  "key10": "51y2AzReuoduYaDvKj3RyjDnXXR4PRT2ZVbcaVpiSzdd7fygzvx1rjaEU596a42YaADN5AtFCuTYReKfPZUMDt8i",
  "key11": "4jzwd62ciumrxt68dN28CcDEXT6H58mRyN1sN3XXsJ5Y8oH6y8TBRbbaPpo6uPWYqpuAP1WyTedQPbT5fmRXgpg7",
  "key12": "wcmYx6nPE3xxJqFzqsiUFdeUoyrr8voyyu3zAFq2K1fvZoioHAuvMUojaEx8x9pwgvRV6Vgpqenpyyxda44r1Kv",
  "key13": "3NJ3b3WkoCKvZbwnyXXhPeMfDC5on2XGPcdGKBJoPweXFCW2hv1so6utfsNgPq1b149Hx9o4SjdbYvignh4RZzkJ",
  "key14": "66bYy8jE2sc2s7HTWc2Ke8ihJDLy45Zj4WGV1FSbRoTMrnxWSvKhJ3Uj44jeBZtRYqT8rC83SjB9ZZ3UrJJVS73b",
  "key15": "H6XXzASXtVZXLTEZMbgqCw864rFiDiX3VZ2T7DKJwa57jYhKmDSLebYLEKCQs78VqkdjBP1VmexNFUm8f61mhPm",
  "key16": "48e9UPeQf6ezEeymkyyR9rRHU6g2E4zYTdPJ9EySdfbfmCHxP9uo7ozdThReVfv6ZmP6dDy6Wtazysny4iEw29cC",
  "key17": "QitnLH9SXsct4qD4c9FJ4HDhLkNMesFpyJfTcmqXtRosZ9kYVD384F1rr1JeyFZDFVaJvXvVNkc9aktsM9Sakyp",
  "key18": "4vTY1bUyBJRgJbwsRkj4TqdZU2SLFtnFZbCCALVkrVmarixX91uQExoxYDz77my63ALtheKr5LMro1qtnZmG27pe",
  "key19": "5SUfAsmgKNLuwJS2dpGvLpyGi1AbUycQGFtMVhPTq95sFZm7uXQuyvf9euwEG3jWBMmMUT4avK62Ji8uniezoDvu",
  "key20": "127UvAeobua7ZaVCAoDi79T4LADL8coMmXGNu8yJRgkaq6TQVbD3yszgYkjNQazhSg4mj3Wp7bGw6e2qtjXPbvGs",
  "key21": "5KRtuHxFvdTj7H3ogDFos1qUYMt734qyHVK1oGCtVizQbaypK9hWaGPNQH5qWYhFEnWgQYGHCaz3xFw9sdD83Ai7",
  "key22": "4UvhyUapA27AmjsyP83syEPXMDBZepsAFDvKfSTXa2nkYjvnaP6ULwrne7exQb7nu3YH59JMnz7oScJctU8EJ76Z",
  "key23": "2sbJnWvcSBuCjvsyUyNH5v2TiMCmVrebaeCtd9T9b8vgEouptjbqAMYzbyL4NFBQr73uRQSK8obr1FHGiPfP15me",
  "key24": "XNxz4gW1dxssMkLpBLvoPS8ySekdPKSZ8MzSqkjBbYFeLf3UgviJ9Sfb96c34f7QLMCApEhvNuHBsrk35pWbfbH",
  "key25": "3zMBHXta3gWwPJ7spCHZFCgjjNsDcy768KgwWRMCTHbP5L3ymxjWzoakCfHMnVeQhRs6yHGZv29eb8DXNUe3QxqX",
  "key26": "4vcdQqApFUPA4zWYE5dLajFkJF2q9YsrqYqooenBbgkXko6jgjiAv196idrweW8tbqWW9a1feyhpJLKRPVrUFhWA",
  "key27": "3pz9MUufNrUKuFjUMcChBDJE5LduBQatf6AUNrcBNvQX6dKnvnZWrh4Bz1yPWoNGSTfYQjrA7vbSZFo5FWbkp2qX",
  "key28": "5rSzmBCpdwhg1Mue1EgfGxZobipsTQHrr9T7xqqN1pQMWMaEJGfpZkjxPEwWhDC5yhGfcUsXANURtZhcP3StTDw4",
  "key29": "56MQTXwQPAJbgW46TepjaniubbaXehJJAXbZqy5kwa9kAnJ1LX8TeMJUAiGvEC95y64iKrJ6JxovriDjnTAbmUuA",
  "key30": "5AF6KTiVdV3MFUDzccJ6HoxAzQ48Q9NddRMAsu3Ny5aGiCwscKdapmNymPg9FveXLcM8Gu6oDnYqBP6NSJbEyqbU",
  "key31": "J5F6oPshgPAbmdgEYp9LmukDRx3e33roaVRfh2kFRCK7gtqfH2hrC4eMzJ8XUMcQYNVSot6sPELtf4oixLmwjhm",
  "key32": "29Kxvz2g9PVPHt23FQp6wtHGB7E6ERid6Gbj6LJtZzdCvswTrobScyyzq9QhY3f4Co1FLCB3FM7bjDjVR5rpLPKS",
  "key33": "5oy92aRPX7LW2xis7YKGGL1tefrsf9KUgTmJGL3MZj44ym7AzB4yb2bBkkyRYwH7qtwRWchp8aTUxxCCRYZEGgmQ",
  "key34": "3jJWGfP5BeV5EELigiZxxVqdL9Mdw8agFB76Y86idJwxn7moqGgQV9gw5i1Ly7gdn9tq1zxgCtYgGsP5zF45xPWU",
  "key35": "5WHmwzasdhnbYzUChGT9xGVwzYwArVGqigFk3hFmCwZR6KtWuPJMcSfg1XE8tebgF5Rb9UYYcrqyFyD8inUUP5Kt",
  "key36": "3Y9mYtSELqMSb334q5icZxsgNgwuySGndo9WHp127uDeDchPEKVqQ21dAdVXcJEFX2e5sdxM59og1pGwghs3kDpf",
  "key37": "uXX8wsRPuVbPhzvafveMKfh6rTXRNGu3EQ7p29PWNppy7BoaYu2QhtKLhHgtbQkJQ7YaFraS5KvVvbLARSmN5T3",
  "key38": "4G7nhgtCUGA8S4dFgwmNNQrVu6mqbhnXBydNde1scvDfszKzHcb34Ky3fJcUrbrBZMMzZP5CpsBJMifFLUL4WUDF",
  "key39": "5AFCdjcHxZcUf6EaBG4aCRBneSChvL1r51PGLbbhnWWUma137SdVjMYDQ4hEVpCTU64UKHgstc2REEjJnWWzQ62c",
  "key40": "2CmwM8eBbsbybbVTMMtGT7zfYR9rfFiF64PU98U8qY6yNxG7bYJN5BW3Gph6xnZ1Rz7wqRr5EgDXfVpxwMSLzfGj",
  "key41": "45ydqyc3k3pBtbyF5Uc4jkU1Qd9cXVT4XUbr7x1viwM5c7sn5bEetmBASmGZpz3YVscNw3YTuVYdQ3PqDEWCXEz5",
  "key42": "4GcBs9fLf97wuBAr42hhm1F4DWpqmbr6nX8Dy1hTsaHFmdqsDzSWVh8mAunoXrwsqWV8N3QHjn82BQTFtyN2psBs",
  "key43": "5FFMFAx8YNBSv1nPMvn7pLYAKTNsWzJqqvuZWGEkiSPefjNy12eSGFXhKMybni211o9S7WcAKgSkL7CpzmkBxBeb",
  "key44": "5otBLJzbW3PmqVMavKhkmQ7KdDoEGofmJcNxCysatfJR2NhgR7oK9HpLwrwEqsPMTioM16WkmUat5cbVFFp9Z5RB",
  "key45": "4R3mSbzz1zbLiwfHeuBjru5vCpBtp1FMJPAw3Y9CsNEf3YSskZfMtN7Bt3dcpRfcNHbgDwAnTg4Ak4Wn4DcqxBKu"
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
