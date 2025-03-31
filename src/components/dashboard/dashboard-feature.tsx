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
    "2xkmBc1dPWBridHEaD98Q5EPqmAfiQSKgvdUNpqmewmn8aAsE4729BYR3htpgadV6RvT77ur8P4aKvt3BvWdLPM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQdkjfnHLQ55V8agvc1GUaxWkzjQf73ZhTgbG8xbGMUXDfwRE41qzU1KmWZ2kqp2Py3kjFPCoTN9ts7xTB5x3D6",
  "key1": "5w5DcgJMCGEVjKj3JBpc3DJTmqUF88zzbAVnTSWFMjsxT7RuyWVMV7vLytgPYGd5awDsbbnf6UriYPzomzGRqX2U",
  "key2": "4uNQznUSnHWG5Lhytg2hf18a35DzFiGnZSc8d4Vv1Ud4cufjX7GA9ZtZN7qEzzXdzowhduVxvRWMmCde7FWzpXLY",
  "key3": "4ttRmpbXE8VQQwtvdDYFQELWp9ahW5w71XdicnPi2VNst8xTP1W6MSEFmsiVGBVi2zXhNyWjcRnsHQ6BjURmNXRG",
  "key4": "5gzLPB3DwZqTyvcm8P2q4Hr39jDK4wgLQKJmVhy6cbonYrFxLNexptPd3sGrWkxVQ1rxddHSt9HcZzQCH9itXLBm",
  "key5": "3jcmmDuAmmoLpxkWXybtdmACbQA5NxLEkcscf6HoMsMM1BW6DRHqa8RCkeytxYRugBfAv3JchFLCJ6kuWdxSgtyG",
  "key6": "2DkroPpL8HTazGSxRAGJ8RAeu26M9FX5iU2YDzHvWysY1gEYQthf7EXCmYdRNzVgFbY34BCkaj1qgVr85yhLXggM",
  "key7": "64bwWAYM1oZT667s1hqsDbn5LKVYKkJbpTSmbrWbZXzwbJV77F8zuapow1KRnwcASeyKr4q4nYRppzLVZXuSyRMu",
  "key8": "5zVfrx9AWj99ud2SdsDZzyBMTF1vprHiwdLLRsarV8RkimhSXu1sceTvMuGuCqQvxzrp6jP7udVKZdyf86etDa5A",
  "key9": "2LMkXkUW7FJsaAexjsoxGPuM1wa8gXfyDwMcsqQ1HCj6QVFMoVvjwSRGx4zSsAgnY8Fg9qvqdKmtLe5D5NKiU58D",
  "key10": "4buEoJNYAjVQVqR9Dft4kARLr5ZAymoijR5vBU3FpPGx6pSABLR4o3BoTuU6w3zpEWwMUY5PB2amPfPBvHPhd1ZH",
  "key11": "5ouBRYf3L39iNbC83BYhoD9MTdY2uq9sqFK4caedZDe7FgdbTXyaRmpXea97yPP6cBNWEMVsNg8pag2UBz6nZt7U",
  "key12": "4FYgzAioHeQDPD8EPkLnXkid6mdnQ6gxwXT5FvNhUmhdQuHTj1JdP6uHnxY45JDXX6cRJxPiEPEuJAWwrTJEW7b4",
  "key13": "CgQnRX48npkpGz3FBN8UMc1KmW5vd9FEDCkTAGni54UWFz3K52HJd3B7W7seiPw9GLSPWFXfSS2MDdLpSScW2XL",
  "key14": "GNWZfQGCnQVGem4iQ3RJavroar2QBSoKLCFkNJyimUJmETntAy7MeQuNjTTR8cpXGDFtfuo3aAhakFJ46bUGdtR",
  "key15": "2oKCsA5sbbn6Y9kHcpFJACFjuCXAjcAjAwHcbTA4ts81VWztXAYHqVnaBs1BtVBfwbyGeYuUam5D7JuJKqAbDMWo",
  "key16": "4KZ26GJvN2AxPCMmZAgQju2dwmyDu7RDZNkYgA264QrBCVogHVST8LKNk46zmmFqPtKU8NiBaeot7GxZW7ZiUYXp",
  "key17": "JCtvwmQU4w3Ftfxfx2yTCx2QYt9wdRkBcwGhdc2HeP5Qi6MJm8GTLs8zn7N8TAaBzdJ3nX1HJpUN8yQ7bBEpktk",
  "key18": "2xRpKddswDRm6jiFt4ZMk5MSngAzjTD1RCzz6HKVPNmHfzRZoHN4f7VNfd3mPjSFQ4RrsybvgcVdH8hzrnHQczfw",
  "key19": "2Vn7WbkpX7drgXBek5Qjtj8RBzzCFGRkNNYv6VgSQn1H7ph6PqnqyFd5Hyy5tEQ9h72Q7C2sHaHzHeDrHAuEwkoc",
  "key20": "xKDZL1MbagYC57cty9go84nzvFB3A4AGxoHewdbVjYj6DYCgK8joaiS8UKBeW1QVKcP6xpmMJ4p9NCAQuMQoSGb",
  "key21": "55J2WinbDx1hQaLFwn7zw6maMZtzkb5Ye8ZdaHfaHhB4CSU7WsuhxqfEEMg6zjn2PSiAGwBH9zDRE1gT4njeFnEK",
  "key22": "54AhXoZz3LmSBVxpcgvNo16y5fLbEr6yMjH9rL6gkVkjEoWJdskGnZyhkz7BKQ8SCEqAnpGPFwRdJH1JSyJnPjKk",
  "key23": "mvWhGMnT43fnTkXH1pVWEctiAoivvc9wkqHWmVNUMR5HDoMUnEzUZfpM7Dq9bocDndKjTSEbo4kZ2HhVfcfPiqa",
  "key24": "4uaMXrUKADfZ9h426JYm3QMZs8E3voVxTNTE6mZYxV653Vz1QXVSxAxWkdHNWXMTuA77tYuHcVFrLnWaD7MiXpRw",
  "key25": "2aQY4KVM3u2mto9oUzJv13TxynRM1bGKQYRFYdA31EawYnCkDCToaXwSii9nj73e6VG4Ncyt5yzSTXSpmqJdWez9",
  "key26": "2YDc71SxQv66H4QU1Bs76C9n1AceSfb2zmsyEXmhZSkKDyMdR2rWoELaXsUxHT5wkD9ZqBbnHUP5ax5zAzRygsrt",
  "key27": "2LXYef4RS1ijvzKwKAiUiPbq26cmgksUKPho5YHh5xc1vgfvZr5grF1f3W3dd7zyQGcP2PKJEieY8THdKww1Beao",
  "key28": "3E2PrzTYhEi38m2Nz9tfnU6QsPeRHAJgubnX2E7SgEN9EZvaCju73NGML3YNWB4cZyjtbxqPKcpJ2QY1GqZ91mnn",
  "key29": "2ZCB3LZbFSanU3PnAc5MtCq739kNQysg7PugPG9TDh37XhBY9wD1AicfuwhUuheNxRdfvypDcNc7qsD7p19Nc7UR",
  "key30": "iag67Nn6abh9if54A19KtM8rRutT77QDyQxR24CmXohLz5nFDawhitPsFDmZWTf5PtKeWPsSvRw1gtB2NRjEZUD",
  "key31": "3Ar5V1jgzonx924RFb5aoqHJxh3ziwiYUSfcyAM9MpCpnSpck3g3GGURpsPaxjz9Ue2zNq5iHcLwUi35euwYG444"
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
