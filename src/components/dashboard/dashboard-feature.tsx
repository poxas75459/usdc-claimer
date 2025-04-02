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
    "4jXidWurCNvcR1NC8qHt6a1HzXuagdQnjCP4EnffumH1aNvRVRiTUKm1BwFJS1aYCMKCTgaAzueQdyMXktMJNp6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2txNAfaFE3xvHH5ApmsjuTwwm7uyUSWgb2ngHu8XvHWeeHCiZuyTBYc1PoKpoLaBoJDd2iKUzxrMzS5scjunYCAg",
  "key1": "5XnCCgLREN2jiYiRyrGSejwkWZ5U39MyvvSFCsCVG3PrTWdBVDArxoJMsyDuqmC9H1aY4Nru9D2rG37TUMSxbVmo",
  "key2": "5EaWmHsVEJHFsGNkzcy3cozoySGTz2KM941j6KsWZj2MrRwtz29g8FjSSSRV8RBLbYmRzZGLHkkFGt2x1FmY1Y87",
  "key3": "25viD8ZjsHrZ78bRzTN7kjFrbuTNoDLsDhdFe36KRpRKdrnfeyjGV6m3o2zaL7a6YvJJdGK7pHf4ct5riKEji8jt",
  "key4": "22vDpA1pVXuFZUteA92oHUdsZCKUPiSMVmJcDrnvp6JKVaN56B8ma4CCN3z94CqLnTQ1ZasY4zCCXsp9zKp9ajev",
  "key5": "4hKrwEJpgNPJWh2M1pjYNSnW5wGhco9RCy71zZaCRUnvETFa2Gee7Axj9TyNdee4n8RGHw9v2v48QAVHGEZifoRL",
  "key6": "5HBCd7GBW9UwJydgwRJUzgvdyWjqwb42RA8LY3a3k1HnHzodBReqTY2ph6PvSrcDTa6hdufKGBPuwsDYmVzehC4o",
  "key7": "53PGDrwwU5DsLacxSVVRJ3PXDgZ5dX26X1SFGaWRXjwBJ5NwCopfakHuGgs5uJ7Ubc5cpeqKw3bdtFwn1SvN4iTv",
  "key8": "5n9xCeHZb9Roahzv5BNiBT3tPX7Ym8H95cNDHbUBHHjqCj9WxVfQCnXCgFFScR5XgCwt9RD2X5dy2tKzyUxiaeXj",
  "key9": "5BvjkLFdenhCAK534cvEJCd7X4xM4wTtMa6N1FpHbC1RtV7YPx7CraWrUyXbgGxZXj27TALYHbodjuWno1HUj5gh",
  "key10": "2GM7VMRp7Zh2stDrMcK8Kae6ieB3ZJnQBjBP77U9EpGBX8DkZAQHVRn6dKbZuJu5UwqqYuD8McMXygR7bQJNCavm",
  "key11": "535YDyRNccRpDKrEF98ZwucH6aa5DLdFkWVn48yZGmdxQX1u9rLnfjQGjoRSHZGF2icpDBgMt3jsfp4usTVST7m4",
  "key12": "2eAjcqRta7EGdWvFMBqfP6C57EoCronXXjaycH6mc68Jxn4K7EAdCjfQAY45LPjYQFsLycTiz9M1dnFoobrpW4ZG",
  "key13": "5dqpuJpDbvG4ASEHPNPBEJCqfDWgLdb4dx2KgEJo6po8Wi7ZUfHorrjgfv38Y9skBfhWzKRF99aaA9Z1zfjPG9Lo",
  "key14": "2LxWfwX6jHvoyvk5AHutPKro5KHFEYWGtT2qUGuX9uhkCQLHuGoGEDUZ2VTyj65KhNYi6odx2DuAgCLSB4Nr5CVp",
  "key15": "2fFt6RYAdi7vsuU4C2Z1h7WqD4GE6u3QShDrpinqNG1hjhQ9rXF9CpLSBS953qLHvV128AhRqH2ChPkkhBfRkh2y",
  "key16": "4VCNW3KM7tEXvgMCPWU2yuh9Fm9s7LKn5KLnTeQSd1Y8ExctexxxWtWPdEF2saZDfGRcAQU5HWsYXcLLCZRoNio3",
  "key17": "Z7HQrx6bpa4KLhB7GjeQ5WCL8wW7QT4zBSAewvEwE2Mdv5P1cPiChota4h659FWq3hnYhHYAPvz34Z1doQfcdKM",
  "key18": "5kEDEuZsVExCn77MX7VxcLcqBVFRGoGAeNQWTUJLuaBUHLaQUsi3Y3cRkQrreJwoJ84Zzn41wEmZAJfheo1vtHyg",
  "key19": "23GSc5TRDRKs4ZfGNdzs4LTCPCVUoVNpHcTveH6cYK6WxEveuXswMVx1kN26d4GJ62A5YRV72ariMJZJQwkxAdFe",
  "key20": "4Csuhc4hGGufD2WUq3entwUipGfjadcYh1txLHoApjb9KUJQM22w7UqxT7RWycS1SXUmbAfy9R5YhSM4gHMjSss2",
  "key21": "4k1A3bc8sPaMBeNW56UsGhaX3nHij1w2viEqxc1LysN23BHX7AVBsXPb4twqRLdKaRZVrp1S2YZs4K2oW3MJxS4q",
  "key22": "LAy8vNJocC9VLLu9kWa9yafZ48bkR6TEFrGq9vsuqQnVQjGutLniPsukhj9bsXsECrbQaSjGeaPhKNixcTCYT39",
  "key23": "A9Re6W2CBNeGCNGz6atdhnwF9H2sqqYnZJSyRFm7eykCKRL3Ny6MnMQGMuckziJtjWPkqkaEM1WG7C3mtLt5Los",
  "key24": "5TbsGuZSjDiJXueLFrqj89hM2uSPK77MAyCPokC3eMY3JmVamYNiQCjKLuwdxepjrT9kno2JER1P9Ww7ggc2AqiK",
  "key25": "5KKexXJkBD3d1jpdiB39wPaReHCeewj2SCjU9uL9C78ibAs7noVgupxxjNtsGieA1qRqpZMPg3pyb5qxRdYU4H2B",
  "key26": "58Qumu9pQxdbNZiTnwrTbm9jRLG4XwZcRPztzd11QCnkw7ku3GwzG4vSYZpem3XWWiWt8sTeqjZVwrKKUXJuKzEQ",
  "key27": "47aeUwHZtPzaggB7QrbytkQry2m8J5R1oH1oVk8kChroxjbxvD1RwskzUQ9dDxhQPXfBLHuPSqJXn2NV5B3YJCiL",
  "key28": "4NSiZS6jDuRTU7zX8y5ii96XqJgLd1vyBCKRLrFg7vLx5HtytMTyJ7ybgV56oEhHE9dT1eyYWPvR7HDPYsMG44Qx",
  "key29": "2KoYaQWXMCEQNwp1E7Y4PCDwPQwJixb2d7CB2FJWYvfJ4FeXWYaFTjTh38QtPK7T1Jhzd7v8WcV7fHmpkPajPAMv",
  "key30": "2Ei6xKEKGGAoSpczRjStDQAm5onEBJvgaSpqra4boCm4ngifQVojXCy2HsXuuHznZEs64qABvoh5nmF4FmWpmYhx",
  "key31": "3aGKwBhwyum1ZaNBokErvcotnFrk2WC3BCBDGzYZCDBrr1kaKXYTagLjjrEJpG9avmauVTuZWgLb1yagcACo3Qkd",
  "key32": "6gtR1AxnaSx9TghmnPTdmobcata9jjw1sWxmTeaM8rZMJGsjtFLfoLncEtWsojCS1Xnq9QakWvAayZQ6HhzeGSW",
  "key33": "32fnhFpSSLZ5oLmJ7haxLkhnXetYrqiUFE4Zg4froWZp2vjsrx96F3kYCBD6oPdHX6NTBL9J2uvYhTh9YwS9As1K",
  "key34": "3d3k2LwHRbwcMCdKY6aeGCbESdQUX9PN7WSGck83vDHjVe1CMFHcD4udV5DbfhJEcQk3G4pd1wBAAEefUPh3NAL6",
  "key35": "3JGp2EYbdkJNtPEj3cMoaeLeHRqNrrBsUPQdosG71xqH4uCFLKtf8soHde7KTyzNwMW742ZNQcX4uD1MreeS3TNn",
  "key36": "3jkvLPYNYBnXgXKjC6EJoPgVfJTxb9Wqi7cpVD3aBdGxvjMyCaSFYm2s9mQG5h9GEwqqGWntCDgh4hBhdG1XfUVr",
  "key37": "3GK3nprPAht77596NFVNi3PbY9GWkqVqdkfKhF6rUQvuPPyoL7BhUbugiUAPLtbqQJh6JS42kFSGhwpFPfAxXvrv",
  "key38": "77TLdJKphduWeUNQHXF5i3MkEAdhHoMJjHfTvRcpMBysLPgb1xvTqGCWUpLSxjcjuQi4ZtJUeKVyxewrdPJLJor",
  "key39": "arWZnzKFDRRP2epqMNag5vZrvUz9i8TFVpfoiQAPTPZ13wu1W1K9JjA9Da4QQMRhaULq4EXmqkwXSLQpVxCbGJG",
  "key40": "3ChQfETmm9kyYWkQ3VTB63jmkM11wjcJdFzwRQxWjmy9KYLxKbeGEi1VK87citZo7zTGx4tgwn5osuwmT4s3gmWt",
  "key41": "2pCXC6a74dQ25s8wkRDVRqX2LaZXCfDyjGWsjLkezzcTDqu6Yfiwu5cnagdvhXYiFKvSATTntCxbienGq6SdTD28"
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
