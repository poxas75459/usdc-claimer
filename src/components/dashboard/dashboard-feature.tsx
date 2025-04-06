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
    "5AtnXsqwcRWsecjL8DEjbMQsrSVLfKn4ZkgwKqVfcBSoBRB9giG4HP6pbyYVNjWP2xEGM7LyF2gRHfzyDKGpTmw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dYHPyqXR5AnFmWHtfxPyT6QWtHycVsfNWoXxT4LYy9FVpGBp3zreYLsFN7BhjkDcdHc1Yapdn4VErDuqyDvQWdC",
  "key1": "59QaJHfeLhuRN3WxKvYF2G4ZBWBmzNfj375Z6P2pbnN74rTg7obBFdSLu9wms93wxBbpK7C4PXKPG7gCazRzR7da",
  "key2": "5eg5K1gwLJUC3XGbqYWVsSAofHU9xPCtyZUzL1HY5KHY5HQFUDaG6pC9ctCeZ6sWxYC139sGhsBRfwT63uhXRCjh",
  "key3": "3QTaPhAzUdmKyLuSxyhqrty3oCU1RgZXsbFwg3vzqaT28Y9cQpH77HtSV27sP46YzTrmqCVXLZ3LayTqUrMWniRL",
  "key4": "4j7QtA1GrMygoHv39H5YMrZJTRJqvfopCXHFqoBEzcFrFD73VydfoRSvaVEkJdKF4GGP46DM8vbbXpoeCp3RBPpx",
  "key5": "ufcQooaZEcD8Va8ph3WavAv5ip19ZyxC4hkupNHnvXPnUrgEShmsQVJqrnmRddcRBqCAJW9T6SgkHHEEi41azVc",
  "key6": "3w1hnPqrJaYHPdxNzrvPX8hFmDDfG2LgNaaQGpjA6GecGoTwbcouBbHarUmV56rngtFmQqJa4KziG7Fq7doxxKmR",
  "key7": "yKZJWoc3kBEXUL9JS4hw1qFt2CBBV1DKv5JwAuvshrpCzW73Au4cLd7JS7pVKi12K1yWhrE2tnf31q6YCsfFqA8",
  "key8": "51nf4WMsTUaZacFCXA5fddfShPf1KxYiu3Jj66EPCedVpeiRRQPFmbtzAyJ6fFUYFXxQ4DFgSL71nuDmFVmbMsS2",
  "key9": "2MVfaPK3GC8Sk4Ht82K8RCh2pEf73JNjCzibbUxgs4EUR9SPe8fFVBakUjtanbjrum7mwPc4rknB1G61QvdiWpD6",
  "key10": "tUdTbv5KPBRnU5LcdPa3FUoRuigDWcTskSUrGqqHwEdoGqYvnR5mbnm94MqkgnbQMCDJkHCvgizK1PDq1ZA4GKU",
  "key11": "2EyYc6vCAQDuFBDBuFmEW3fNG1LzdQV2nzL9aF8ov4B254Kg7zA2HGbvWWoTqrjBUAcbZacNoS5ducMbGk3pbdFU",
  "key12": "5bc8gu4zgpjaVJ4QhtC6PopMAFxoRspgJaZZ2mx6rQKwqBwHh1hfZyJHTmhE9U7p58Tv76XAQqyexHsJ6cdjzMVD",
  "key13": "5pcFLKfZ9m68fVzh4JDUMuA1Lky7v95VHsL6X2RiZ8RsvPaA29ZYFr97qY18rd1r5LiiUR32iztSFSEGWt7avvP5",
  "key14": "gpXbncYf5VrGgL1dJfD1yMqevfdsFip5pYaPpeVwAACkrTNK6B3uApeJPTJUpCP5cx5dEjPwoTSnMgHLREyfV72",
  "key15": "2fhNWZdYo76HFoV93UEZyctnpt5KLdpZAourbx8tiNSMXSqgA4CDrsci4VXbUUVT7g9aT3y1wjJhqgZVuqaLJwvk",
  "key16": "3crkjC5fdBfG4MahjNMZ42t5yxf7L6HSdEmfeChjboNxrVKn2px8dEbon5XQLmjbHfdy6spfz9Mmtjv6QqpEyaCZ",
  "key17": "KeXUaxRXg53c8dYMYo2WLharxJYhz8bC9PNzwKCSnjPnxo6cnhzLUho1vWnie83LZN1GU5M9mZw7DBU9P6ZibUz",
  "key18": "3G3zGWwUsQDa7gWJuRsLJBZ8SLWFHc28kQEveCEuARRYRKHdBqX5Kt5tJZAhzPohxBXDg9d5SYQJ6icXEc9TZwfL",
  "key19": "2bTTGmrfYKGy7TyunWB41hF7haHetBCtn5zCuHJQp1QijorJtP1n5NqWgATe5PecaxDkEA6Woyd9S4X2Rc6g6B1L",
  "key20": "5eFUi6b6cJj9DffKbzhWtvfpbuuErd9MFAnntMRCzo7jjaKEeaHVkHty5iVVoLGgr9RoMHWTbmWcpkybvuqckj98",
  "key21": "366Hj2dZ9k6p45wd2eDdNXor799NS7MwovECKxfzqvoRgHwM8T8AtqNpdTp9f9JTiSkdNDwGEG9qjViTRVtBi9Gj",
  "key22": "4DovG1LB1ptsgUwo9xKkhEvJkJXptxmU56yvcmGvXvBKWyeXbxYC69DnfjgQFA2wLXnpkTBE8MfYkgCsqjMvaabw",
  "key23": "bdFZCKK1hABU8S5iyxc6WnaNhxLEtrrK8L5VLKLGog47ps2eLnHBCH4JE9wbAg3fvY8BettNL6vFXD4rBvttQmB",
  "key24": "4w9zQUXkBwKzDAakiUJD2XZdqiDu1Suf8N6zy15ouSYJehNbLWZMhWos316pYrE13i2y4VTkNbWrpQ4DFMcymVD8",
  "key25": "4ENCCvbGVgKnBqweDDnpRCt8Vt3gm3jHL4e9ZcnSUsAASNY48SFZwQZN4tvK7uGJMAwgjw35Yiaeptxs5aVxAQ4c",
  "key26": "2fFnBb6qBvpWVdKJsXQv8Qesd9XLcgAAkjXSRfFevr1yaurvNXJ3oW2k2yH1uK3LDqd42s1YTm7aZZm38oXjFSck",
  "key27": "5cR7WpeWLpzXG563HzGVf3p955JRBDfSF96YznwAdEL5smiNM4qGfpgba6G7Xwv2KCynv1kLQwq6piAe7rEAQ9f3",
  "key28": "4aVsFetZZUNVSmmUymPD1FugtGF1qHapDKJPfDiqfUA1n2KMz8HmsSASwmAq5Jx45Qwnwrd5Ler5ovjEemA4kmcV"
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
