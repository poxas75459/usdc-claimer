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
    "2g6BrMrTxjtzVskVGZeBJyGF1YzU1aPvA7u4xK69UKC1UwToirb7QoU6rcN3Tr1CVaLme5eZ2maGS1wskDJj81dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25fsMtRzLg22ZJYnE6C9EZ5vDgpaxUFNpayspbmjqGQiU9ZxPHoaTvvK7eFM2z9P1djsGZiKaB7M35gQeELD23KX",
  "key1": "2gpz46DSGPoPXPhZJKoWCE6iYT9Nut6NHSg3H2kmMJVYgn5nLjtVztNZ382EVK2VoKr7xw7oWX8rHdBstzKSN79P",
  "key2": "4FHSUZuEgLr7mQUXpnuv2kdqo4Y1iYWjHo3TXNCmnndN1W8nQbhzZ5YmuvsZDsJ2CjcwJxe45WATSb8tVfUu68dz",
  "key3": "dQSqQDfFVzHZTSMUAA9tnJGWfoGvUa1vjRdCH6PcZFShPP25TraZxz1xy2TWeMX7j5UPs974NZBG55jpHMYmFN9",
  "key4": "yRQzPP3yzC2kX2Z3jSoDmZLXL3BY3tYD4XesXin7HNkefJD9uwzu2GpQ8gTK6HE1iPYNcZqGBSN6WPTXSd6nvsf",
  "key5": "5FrRX8PR3WHNrUAdNvC4G5XnYy65Pej7rC1xhiFnyBfjy63BuUetibgjVc835a2HiGDXHwjpyLsAcwTkhE5zaUhf",
  "key6": "27PBvPV4ZCcgWTtge517TjwfFLYEX34mRwFGVM9J1xkSdykd6oRsZCPSKm9Gj4TPHvT3qKziYGnNfRECSQyDh4ay",
  "key7": "3SEHsKUSs7e6RrWpL711qRKgPGgmjJR9mXLt5er2eoS7SnHoGH2cq9a21nHSPKxrLLQ77XwPQkFxCvB7H7CMxCN8",
  "key8": "Yrs1cWDPYwJ3DDW1kepDinTnLB9nRTjxanoke3cTdzF5ZLczwyBgyFZwA3xTjpgAUqBfUGLLbi4cxqz7xDq2NVW",
  "key9": "rpAUoh5A5JL7kyTNt5rPxfY4frwBMLgDdAaDdrtgAYD9Q3qht8hBCP6uzKTu7V2NSWq4YHkAL2rqRxnt1VonYa6",
  "key10": "28YRiyCKPpCbnMspb418A2qrRRkVFhDT5k4fcReBNiTkbXoeh59kaNThqMH5fop43V425LrKHar9ycUuxvDnVXjn",
  "key11": "4LSSYMAcyKLZ4u5hmo9zLJxPBYj5Kth9wLmhbicx8yBMW1GgGixcNKNuHkmgH1VaXYmaKk3eouySbg7EmQfxJK3G",
  "key12": "5GdzakwTFtpbzRTapHxwhMZHpFW7Q4asmcMiQfdoqwomUapFCBAK3VDmeWf9Yg39zx4oaGDgfSqY3qTLkvcR82A",
  "key13": "3dZ6qyCNfr9Bt2kh6CmNCSaWzwYksBcvfVSb6ZpJPoEGvpMxXgyxPes6ngcyJ45NNrfWG3LYrNiD2nf2uhyLfF83",
  "key14": "4pCrzkZoiYaHPpfGH2rFSaxiF52knh9q2YZE6sCg5S1R7k4BwNpDDeYD66PuMqNSeGmvcjUMrGWdV9tcMXGrhdNQ",
  "key15": "3w5XZT91499NeSTGmQbiZXiDHyzqk9tUeuA9Vf1gcaMJJPhAW7ntFSZ2fj889jsT1rTFQmyGLTD4eZqN31oyPMJW",
  "key16": "7aYfDcKm5oub86J8tgnsDFbC3eCCfYBBcuGF8faLVyCKiGXmSM14PvUPLHJVCFYLejFLBCLuz4p82CBmwPJhJcw",
  "key17": "RgvkfxnXuqHpyoxv2ggZ9QzSoUszW8WU1qUfDFuxBpVdnyahdQt9qCRTsoeqJyNvpZdjeu6Yo38Y6sT5uzDnB6i",
  "key18": "4dsiWMfyJh6esPVgzSzguR5VFECoDK5eu3pxPkbCjzHdHejVbFU9wNTNE4YB2HM8AJP5zGCPV8NMzkAWrgt76D3t",
  "key19": "3hftwQWA7HQbXXL4VsBoPsrK4Ymr2zesZKXGUFKoV2rKqigGMcEhbCyrDmgUHzUaUp9SYbVoewjuQfYWDgCViKbr",
  "key20": "3MTtH2zTYzPYSg1arFjB4JtxqppzbAPS8hvRYBWwx6goansSNGAwEDeTrCbAb3T3zC7RVg5z7HDpCjsFgZzpqWRT",
  "key21": "3qk36sbjF6BRkfVyf5kyBvQqr4kouWfycGSzWZj1RX1hNYgBzX425yX6C53Hf4vyF3ABGNgWDdGggK3d6GEzmR16",
  "key22": "5d4erT3aGJA4xgSPtEYH8NnT5xL3xZekLuBzTfck8KfTEY3EcAsT6GLcrd923MFtftr2m3SZJQPv8AxzyoqdZPcL",
  "key23": "2LeYzymeNXoUwgo9ieXmGYa7vN7bPhXMfXCDjZJw4c48p6weEMQ38rM8U1jYnckMnGZXcNkSRHXeJjtswhywgX66",
  "key24": "42p2hHtb167jLALFKsoZEcTJNDbBmhJ1KRw7DznFA7JhdU1wsNAySxw3bChJszPmrtEnpTT8PweXn3633pxhejcs",
  "key25": "2SwDAuhXGriAbAv6FyWuhE3xdpUCXRUm8hk9GkY2qmsMzhe3StgmcxLPYSm2kRUUBTycfaXvyCuWPxK5kdBP5QV4",
  "key26": "2Syzwddrmycng5uXz6pPfwSkHD8aQqQuqqpB88eAUz4DeF9AjddxrrbMbSZ1WeW9gaGtWUaZKuPEYn1SM5KtUHCN",
  "key27": "4k6biLZyRf1njuzXXghR7MeTBjFQ4ZzZwiiWj2kkYdoKarQ3V1jV1ZCeJWffayedbQqievj6ZYU62M2Uobg3YF8J",
  "key28": "4LH9nUw483jkLP3LggUvk4SpPUqHNCYFfAmo2zXwd3rTvc12CJKojTS5NFvPXpLMoNaQP2Rb8VfnmJBbVUE6kXdz",
  "key29": "RE1n4N5HcAZc2GhaGtvb5SsJexDpoNnSexdDM4HuNjh7PeTWHgyNnz9GFyqyg55bsaMXsbc4cupe3NhckEG9RG8",
  "key30": "3Fx9eFfHHWZeGZJaLddxYePsHRCvSrdmzhy26dL6jbp8nK1c59v8i9rouKXRRAXSdj5S2JXJPUhB5CQyAn1JvPFz",
  "key31": "5QiN8Fko7mMn73HSXFHvjyz2zUVwLuS7ngWTcUWWGitbKRr4MteLCTP47pjgLfoQSFYKu12yEDpsQt6MvQhEK7mw",
  "key32": "4ZXAXuqRqHVTFhArKLrzggAcXgrCZYURFyhrtTeq9TNREVnL16BK6WxBtYeCs1658V61Bcah8TC5BdJUYAQRS6Mo",
  "key33": "4AXcipmLiKUSmZvLD14JLjkprnZ9PSPZ6JuPxiSBksHmZfSfdviCKBGzLSvDB9SUWGW4WZ85EfKPtqvkTfFeRdNT",
  "key34": "4XgKbq1bKvsx98mdYwVW9H7usCcY7BmJrkCvAzxNaSCPYvdXUYup5rWLX2PgDky1uSQEPpWR3BHFaGrJGFMjJx4A",
  "key35": "4QxXkbU1NfosBh1J1T9YqJ5fb1LELqqdTYPzWhqTDzbq7s3xcbFrUmZm3BL6ooQchu28gVAeGK1DzcQuTqgbU83e",
  "key36": "rgJefZSiehYVZv1xzuqkWDm4rXWP3N8gV7gnSGqaXFDDwTCbjspN7VfUFXFC3QXcS9HXUDWireTn7RJgBGoqx5k",
  "key37": "4zJ873PiG2nANAgGmDB5XF6QAr6L4QLeVCPDVdGwopNQrR2Ms4DvG2TuhgwFPQonqa9TaCMytrEY3Ts5u9F9VbKH",
  "key38": "FdsP3c3ZWXz77Scz6zBMjBDzpe1PZ8yt7jhFo1RnvEEdkGia7eEN28Jm6ifYDHfw8Mxmhq4mTb6ig7SNCKZmwTV"
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
