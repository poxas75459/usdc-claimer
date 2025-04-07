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
    "23yDZUFHmReDJTPnMzyHnL13QPWawnohwekmrn62bHGH9pJtQUPgoWwjoNM2aMWNzVhm94MKYg21MAbG51o6dhaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563wuFbUMMMsxmKSMug9GD6sWJN4BJgP4vgRA6P1iXG9Li51sYWXjykrZuAXd7wLQiHiPct4aMutCz5a488paMiW",
  "key1": "3f4TUyjYaMtj5TkuTuJPRis3A4tURpVvhgPxBeJoigJxa9TdcL6kpoMgkcxEM9mPgp44mPYfjVchCAhkeiNT4CWN",
  "key2": "3yqVAgmMYkCA5Zk7Jc9d6W62dEtnFzurzaGrzGj7QvmZN7nrRDbophAXotAN1iU5GX4vhMPY8F67rfZEKkWTFVrP",
  "key3": "5CBRRtvSHmt9kRKxix1ywKxSYbWqDZt9vSJjh9yP7xdScjUjHmdQvDxGp1PhphYww24qGpzny6rfpapQw1YHMGoJ",
  "key4": "2Y6dgAjygg7optD1WzK7p3VauiLhoK2K8t9xz1qfjkLRkJ4WjjuEa5NRgLZQTjWcK6ANiDeR9BFRJEAQP8XJTKFH",
  "key5": "2FXmCPDfvprwdXxnSz2bypHVQwVbNAvQHLzgdaaNDf1cqJMcinKDr3pwn1kyRpyX6Z7853WQHnD9rmdgnW6DAb52",
  "key6": "j7vuhp1PjyXTnjFEDT1GcuEYeHRN5875fjJScqsMNjcJuahc5RMa7hZbi3iaeCetZo1mXKgarLqSMAxGrcPbb8W",
  "key7": "5svqcjnaRb2CugdRdSmxqK2UUaJBvvwJRzDT5nPfbuQW3hV3KReJmbvpQdoG9Pxdjd2HEHd2x41Sboegs2fFcmmE",
  "key8": "qp2Bkd3wbcv2SpQn8YJHt8553bRyka3y4ZDBnznXPiPG6YMLp7k2ERTU4jPwG7htb2pw8KNK5uuRB9NaNJL3c1Z",
  "key9": "5NQmy2iAk356gRAYbxDAF5KZafScLhkHDRG9bv7o7YdsvjsEExoumNuD9u6FnKeZyqd2a8qfYKUT5W1v6oHCpqxx",
  "key10": "SFa7eK6wUAdUXt9vfSM11wjNCbAtarpfUYRgDVCURUmbiB1boz9o1AecwstHF4HA11hiYTT93PMYc9Retk6Seqs",
  "key11": "2w7chEgutWA5KhxPy4x16jQFs9BFUXSD3HLbRbNQu7qA9Vq9QwK1dPb28G4QffKpMnnem3FHMDQevfafCcWNQ59F",
  "key12": "4sX8udgvLMWsndQeDHtYucDqyr9cnYDbrca1V3djAtyzSV8TJukirZGHik7e5NK1EuLCF6xS6zBaZJi1iYyyYKNU",
  "key13": "4KtZXeSoQ7z3My31G71DFRy9Jyv73oDEf6d6bVX4GEGYUeCrT9MQgQaRu27WmbnqXdrCZat7c57nRwQDkvd1F3bB",
  "key14": "4NTAyr9vwrddTNRXEr5Bh14ipEG1ZKyUEYxKYSCCuv7D8gofgEj8rETDLsq92fQHWm5rVbMoXh3iuLjksoRWDvzW",
  "key15": "5RPY7KDus8cA1fHape5q6Gg2uWZah6eaCJcJDxvpdoyBUJWCfKaJuhH1btA71wKYeMCfSzRJHy3VfhKSvhcSpJDk",
  "key16": "5bQYQUNoujCXKLLitL3HQc3EUhBfqSjWr87Jd58ZsYCpLazxXeXEvSwspxE19Vdxdh9j2kb1aSPCb1mQ3EPu8tcQ",
  "key17": "5up8hjxkrNonJBmT7LviCLKRV7uD3AiwS52VYc97ymU8XoLYJcoFia7qPYomutpvkxkVdNb7Kz5HLQX36nKzZYJQ",
  "key18": "2zqoG23oiciyXbZAFw4K4njFPrJd4RSS58JP7rdYof2693jzMhB52FFn7fpPVm5SgukGK3C1uUSfZygpcm1s7U43",
  "key19": "5rAsjJVJiQmGkuEC6vnKZvFjtiCrdEKNHXtmo2ZVTujZZuk8FguD8rVirzqELnv8yWe9t7A12EfA5UHsXkk66qvA",
  "key20": "2JoFVQx2kY4neex2Bjuj4EQpnRUgthGJVL4GWeEFHVG3PAATZcFA4gFhaFdZF7q8JDqt3ySCLrQwoH3wWz4h19oY",
  "key21": "4fVhsa5LzQKH9WsSzyzPx94H7i2Rm59VthWYUhi2qNSGSFpqxGDGXEYVYKtmdPqbNjNMWgVL42dxqEL4nWX9ocga",
  "key22": "3c3QoCBNw4fDUUPC91ssDTPGPwt1i6gdh8kRhTF4dwnfL9JRyUZu853ojcJVVrKeKwpfENdNkvnyKksPdTjy8rRe",
  "key23": "5E61wQ7DHGd39PFqG6soe9xvtT6odwJsMTdfCCoQaddgtGeNTYiTJeSv6btE2bQ7DBi99UeE7tMopMFw2XGoZvpT",
  "key24": "3F6RciNE3CrSS9n1gNnzbs2WKysjHWLSLM9rcGBeQjuKh8fZayd5MEqc1KJioBu7e7mJPzCZYCGbGJ4Ra7GdKAqg",
  "key25": "4GDkJKoZd9i1xuW71UjG28R26vt2zBGsWb5cKdnVg7kw1LbAYu1y5curxnqdSxFdNwBXm92rFFGhbXBDmww85ToJ",
  "key26": "24qoH6wzBXzKoVk6uRnFqL2nqR7NKAPWQ55cnh6D2T4Tvg65wjgySAoNCaebzpji4VcG1QNcxYb4MuHmVnuVtr1y",
  "key27": "3uEyB999MzDSnGBKhMfeMEGVhsv6uic2G3FDMRz1nkfVN4or8vsbJKqBrhzoqofcsep9AxsGkMsfUgy9LYHT7Rcg",
  "key28": "32pj3NeBT9LxS5kGqjXqoscrjpyoa2T5ATX28g9vkCrmgeEZwD1cu5NqRB97aQ4reDZKeMDUePrs36jqcFQqvwoe",
  "key29": "2bCUcmPd2hKZEEhYkjeqhYfxFCmLJwaHXqckU1EvNp35f1BAHJgNCbijK8GU9jLkJeYh8h36bztmK2EJbNxa5JtG",
  "key30": "53Z2MFyaPDyxu2EPxdYVevVcKRM3As7UTQf1rKmvJXzX182u5R8aBuLDNbihs89GLqTwx9ZPzxwiSyvfMPyZU44S",
  "key31": "4KyCJBKJvsLVBpwekj5NH4VSNcxaTHWjeXASeEGTW9pmAwaEEqFotHSMaGspsBPmjQgpg1mPGXvNtcwY4sQfazcd",
  "key32": "3VctySbhPpUwPT8ozWYV149cf8fDCWDy3WpLVyMKaZoqdeynLgKA7RqgcwBkZX4pbructauhh6GnUvxAVXiAetb4",
  "key33": "5GaqSqmnKCBt3y8s9gke2udXzq3rnzw2cFDFBJPKihb7FKMc1G4AnRDrzA8P2fpLtciLW2CdsouLYa3tPe1kvHMP",
  "key34": "4aMasJbDGajfmPG6xiQ2b9pjA82cGbcsE4Vine6Jm2C6GDqeLqk1YXYySQ1f23STjWb6XBYxYUHGi1NQNYocmonu",
  "key35": "3pZQx14rqJeFdF2hvxmS4RHTxaKreWBdmKeXEjL7xskd6mtFLXKf3QfopeY96PwmTbL9BKYSuzPMHockzEz1686S",
  "key36": "2tzzvaZf9dBRK3ZuwpGZ2PShFtJtXtvzDfBNgwyaqKnADumVQznA6Fnjy75jWsQ1iTtrVMmJ6ddGLHiYttxfvmhG",
  "key37": "33e7XqAn7G16chNjt6t9LV4r3SWnNPafLLpaxRFwNXc2A2FMRiA8hTLW24vKJhsMAq14ZUksJXP4HtLbogC8p6Mp",
  "key38": "2qfc3enzw1tM2N2mF9NADSk3fQm7uZWyqy2Lp9C3BiqND72PpvceQoFQXYAiGzX2UuxBvbJnDLJPBhdDkHskh8MS",
  "key39": "3ojggXYanQHWsNz56QnD2XUHSatW1q1L5gRcwCoSZ5gwMKVJv7cX2czHAodK9uxAVsRKe3Pdzu4VsEVBHNTQPPp9",
  "key40": "3WUrU9yTb9mL9FRVAaYgFFUZQGhTNosZJ2ZQGN9EganJonrGm5K35ZnvhNEL4m7Rh6EEZ5V27TPRNWnWu81AoPLN",
  "key41": "58CCRX3zGQxWFkU9hS2Bsbgu7egQULYhjkuSKDB7wid9vvaNSZb8eYTraCqRfkCx6cwrF3HN5XcPDUVH75FweKFg",
  "key42": "HpgMmz5Dxb8TQj9oryXhjyBqk8MxDy8sx86nMJ76XDQxdCew9sRw2gB1agBXqybVhwgjoq95CGxfrM1NrSyqrfs",
  "key43": "4p9d257E9phHQUjLrFPEWuZrAMz56EvqQjHJkm2vvCDc5HCnusGEuYxAFhe8CZoeBUQKAD8C1VaSfiFErHuWEJUh"
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
