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
    "4PwAgKawczfur6bBMXHHpDLQvpXiK9yAXMKfuf3RNtHxW4mRiFsvWcw1kqSmMV4tuW3KEBoJ5MBSZd8Sg8YNnnc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MBeRTQunRHPjuP25jeQp56FZVTpmikp2uMQjXMMewPr48Z28hNJHUYqnpHwrkppvN8vJgoLe9Y4GWgYYM25Fxte",
  "key1": "dvuDTi9ZzpoTeNBxEiWDgvU4p4vE2LJfoigEmsXiY2Zv4UVPM6sfWQnGwyyhtoa6jv27igwdmdFCEQKLeA4B1dq",
  "key2": "4Zd3N8CBQDSTrAbCQ2H9ppG7UAnorzQ8oKm8A6hYsYsUgcRUyvUtckxviynL346FjEoNLcDEbNc2ViGtv6L6hfX",
  "key3": "4d7259YmVEK7NW8Z3T8ZwbegHw7v2zK8RwRYHSvRnkLa3GPLFUx7heW6QDRm767hUM4fmrTC9MVkJza4Z6Jd1K6W",
  "key4": "3aSN3crWPDzpUWGF6ZXQjczyMSyGV9zKSH728EVEWUZQgT4YphYksXBZZmfWbgZyr3TXw2hQ74osFyeMj8ZxdVPP",
  "key5": "37NVT3rUzg2KLKYVFbgJ1XeD59RpAJaA3iS55PDGGt7Jj7fWeztxrmmMEzxrWKjwziytGJVBjEA2T3n6AMceFHXs",
  "key6": "3YYjAJyE911wUr7TQipzHM1gACoi15PVivXM2NcqNYZhia7r2HtC3fetJfpNezATk7Mq8petCjsRTzMPM81q5EhN",
  "key7": "QvDojua6ihyzosiwQYUFoatnaMui3btgbXeeTGAhBsyAQyjhWkVaUrNDRpZWhMftEPHbsq36CZeZUCQQb4mUgdL",
  "key8": "5cFr9rdKajCATrmdMfG58zALfRhhd26qyepAgTQCtz7rp31jfMo7WJJkNsea4ndjbh3aqpMUseJXGS6xU5HwAQLU",
  "key9": "55qHUcypKPpM3v8RG8rjkMQmZnq4F6C4yWfytvnriq7GdNgn1Pk6NcRrUQzD597C2H2bs5wQMqgoyNPxpAuGM87b",
  "key10": "67qefPxzpvBJR8GaMLTv35ULPChzbNXp4AjKyiERcSnnXS1Ak15orJvRv7Knx3tgq73J89PKVoFU1YxaHavsEMKd",
  "key11": "2zbmUtsMZuWX9ChP9BBHouS7pshHepWBggHMDZhBLRYdHuePdFYR31zwYW3dtLskATaBS7nfq2fJmnKAjiiJFNgW",
  "key12": "4MPj5vkj4JmeHZubJ7Kjz2D47CrKRRR2nzqF8qqZPgXnmAwHavCV1MoKsdK4rdfoDv7s9qPkTmhvaSdqjQLzwZyA",
  "key13": "2QpWeY4GfDNW598mkEaq52HVtThrEm5YvoQjpqLiXrkHcLiCmtjBz3PrH4xDRC9iw2bjWJjTxYxSbzGDAYwffbZu",
  "key14": "5j8Ssniausbu9eK4aWfKXDKDmpd2XLPbynwezMZyUMnJYKzuKZ8zGyZXeiLQQLXA1oAzLXxFG3Eqi6JGY4RzSjKc",
  "key15": "3nQjErBn9X7zPe4UJJDn9fTXT5RCMNWcEsMYX1jfJTFdFNF3bk1Xvss7mDPCDim4NU9vP3snRYG1NHa8yVxDAyYF",
  "key16": "2e3ZkFgxNqhJM3FSpNm6AffvEFEnUd12SsZ4nyF8EyRb2ye33Zeu2bosK6A6EnJAGCzTwEUcgZP8egH5LeyQaCvS",
  "key17": "4w6Z2cwrRSacLsU9kHqUaor48yz7umaEjX8Z3uPVUey1NvuDV8WQVChoB3MAT2wxaSiJVWUa9vPaCbE1PpRmJgiW",
  "key18": "27EPkcxLVpC9nKHGJuGiC1A62EiBPsP3N2jkHKtwJjqxZgy4BRCX2TeBcCi99dFSG8viLNzMwbWetd3eYYex8mdP",
  "key19": "5FZ9Bmojugh6xvYZPpTcUi9pZ73fR4na2j48S6Fn7kTJeBaWw33LbJJQyqtPQUSf84DNVgRmey63ZEzJs7BMqD9P",
  "key20": "HsMJw96pqe2QSXWW1Srwc4VtQkuFDg5qPdaUdKpT8fyHcV8JKhBwKhrc5PrRP2wtRjysLo8iCXG6TtfeEDKmFAH",
  "key21": "4eDAYZe9LgS9e6avTcSAiF6H2Z2A1daWbEtG6fYTBLNRsw9cwD45w1TfxoYazyoeJdXNwn9vZ5hkXZztHDHkdyDL",
  "key22": "47J8VzcdtcR4TXUT6ZcrDzctESoA5b8qM72q8wEbfCVC1xjPTHCBX4Lp6mC6eZcEoi6Uwf83qYWCqo8nBEE1QsL5",
  "key23": "446auAueeNYwJJVusJTQ38rQb8QMyHVRSRtt93R9LCMyUrH3XtjWH4WW5peLaoCyPtSUxL2XpzYAfxjK2nfXyJKX",
  "key24": "3R3MjDV5RoATj1G5uDYWzkA88HM8Bi3wjHg9yZWXZGELdmK38WntumYphJB9R2SeFLYy4RAvCSuwGqjtJr1Jn71f",
  "key25": "3eDpP24F5k3vbjFTCshsPp2nq8TSHi911Dwzj1wVfxbKnXAoLynXx2hDC57ZWrcgoZMEAMcbPzaQ6oh16CnSXnKK",
  "key26": "5FcsgBdbMN5Pg6vFWWce39VrtkNM5EbTnUDCEh3ZjhMgkHWjSuP1s81mrZJq5JGo9r8mnKo5PTf2dhysNQhU6vvb",
  "key27": "3mCAxdcuS47nVPSumx4Pao5yjyzXM8p2fggrXgTLqX631iGsQaN6dsKWM3HPDWsesUS4wSNzFTGeq47kmA5vMb5Q",
  "key28": "5vtAaRsXoJvrXD5GqQjFXBGRr48LSWweHNWCwfcumkwrBuhrYyaNUmLv3bsGWHDhfYsDV9doyrB6urQRnX2g67qS",
  "key29": "4LuWcsKtW5aPtv16Tp9mnb9CoyJaPfNkFoFr5Pu4RBU2GCmnmu1P2U8Yuhx4orMhvkpAhopWzFnnzTKt1jdMc6pY",
  "key30": "4o7L18esvcsUpg7zVWojRPmH99iQTNUgEPp5XC2pUXJuuwcL5ABJGJkHhp6T1jKXyA1h66NooXdJnhrjhDnFbWZV",
  "key31": "3CdND31PVYNJdU8BUS6o6VY9v2jB8LxEMPS2HmxGgBPkQh6DWq52hDBPE8NeCJA1Hp9RxWhPqcTmSugC4T9YUzeA",
  "key32": "4dTiZJ4UXDTwavhm2XPPgo2bGWKVSeeqxQqaJ8voYoPPywfeajNBF7m6NWqW3KwmDSYpTcD2JZnuc8QZUTbCiGhp",
  "key33": "3Rysw3vVYnHkRRLdFoAxb56z9dR2m41aHGzo7SM3Co4mrFicn9M4piP2gUjgUmjy89JvrnwZ9d7GVabGgJEs9Rae",
  "key34": "4F8LVVsmD9cgcRg14MK2SnUAy6Ajjwo84qoGRfN4Eo3ByKuD3cyMdaFeUesmqFmatd7vcE8eVFRbUfGwjnZHLp9q",
  "key35": "4C3wk9BnuvDnyEyP8eTNadjnjYEZRCKhB5LqBmgAo1t9bU9kauL1MqUo5sTV55WQR7XcgPNqs56bRTe5w3fNP8B3",
  "key36": "5u4gCEDGxXijeuqt8hGLe5mwE9MPaqaTiA9pfJgwcAj8rTyzDsV7v1TBVCDJTU9uvphnFGy6TUSM4eiyDHiDbdC6",
  "key37": "3PT4PTRVbg44RV2nGvhqWVKnh7umThjDRXHfNVEhT6JkVQPW4MLWB8Qr2xUkkSt5M26zs5cUP6AzThTXjET1Wt48",
  "key38": "36hp8grkZ4o6WuSLMoeRmjfFceGvZ8BnfAXSxAQ1TfS6NTvg9FqhqweixhWKEMDgTi1JkXMkGFdpRyuDX9FKWv2M",
  "key39": "21kseDSF2JNoip6H7vJDBXXWfMfRKvnEgt5igoG5qVcB1PMiiBkPAUytnAPnZUG4SYBCinb6cN6SybZPyrWWc4Ch",
  "key40": "GJchueTNT1ZuP8u6nqQR1omDPDbDBTj9X8rgzgYVHy5i6LiskoyuF5wVZERjjJ8tzfh1zCrPEyJGZa5LyVze6vn",
  "key41": "66s5uPwD3Zy1upKUsktvGs3uvZPmWVAGAo7W7uV5o2G28vKmYHEmFruCBQ91iZ7QMTy8pJbDsDrhyhiQV9U1jqbk",
  "key42": "5jkcF35BkCXguFdyk2DvMfEeeSgGnvqTMfWhxNni4Tj5Ti9u9YJgFFtW1Ew9n8AVm9j7L15BG5xow6xb235byq4f",
  "key43": "4KGA812aZevvdobY99TLWAJPc8c5wkWVxPrLQRD8xK4zgoHUw1WXYS6mSk79FXASs2rxDXS173UdYBxNkaY92Pp",
  "key44": "4rppytMXWNDZREMascVcGFu83GbJdRGoXp8qFiZkmqEft3SE5oTsgUy5dKmKkybP4fePM2Jf9bnAHdFdSTtZ1Ru9",
  "key45": "3nwxFXekU5CgbJ4DaTfeVLvQAUYRfDB4biwt8Pzxo8Kf7xZp3jZu6E2y6NGd9hmXpgM6KEgRasiiqUdDfXKPeeXr",
  "key46": "5ctmRsuAv3eoqjWtqcmPNqjFJD1oRRFATgLgp3rAtXfSREKg34rrddFddufRvfssikgx2iGckY8kkgb3LhjHUN5b",
  "key47": "1Sb4aQ851TNVPnxwMHh1BP7sFgEf6q5s76cQEVEDahVu7JJRV43ravaBQnQJy3iGL5KeWYqFELfjbrkmDETJEep",
  "key48": "2qmmY7Ymba6uzNnLPfAbA997YiGsYwuxJuLVVjBCLjTrHiL1rLUE9KnWGdx78M679TAcw2tuoXRgJZNkLQfQjzPy",
  "key49": "4Bo12miyRfQxfK8NVmZWYGRkbZtkyJUXYkm5PCwMtznnLtWsiUzQ4NdEdHZ8uP9NpdGsGGyPhKPLHEcamc9icawg"
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
