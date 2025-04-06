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
    "2tumXddcTP1LYd2NXB3LgyB18zdU8HyAbgbu6BtSQ4yLJ5wEkdBzBYxA6G2xytB3wLnmQpPsNU66XTP76UhVJtyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SDDFjT2HXPCDh2jFFFXnQ1g2gptt1nWQdr4w6kTatCvRi1VsBCUavj8JuxkuDrL6rSZesnzYvQQjn3Cqj98EXS8",
  "key1": "AzeDd639xptPXuuxacLgPYJ5bLAZ93DGY93ccVv5F1Qju6BCMihUvKtq7RgENoyYRe6EssKnm1sxEXyw4hfaQrg",
  "key2": "4cJuixRaPFQjy5BQtV5taZSiacfecGvrph3rDfDQRuZ6ZTHGDAm72EnzvdESvwP5YeBKvpCWwDEu2wEBwnyqqYq3",
  "key3": "3qgibqcUnhLbLrdu3gmfNVan4CwibQvjVN8RDvwCf3Nrx8nYNg3jzW1Ce6g7BuZQiZxwrvNuAHgLkHXpNzmyDZUd",
  "key4": "pB5asF2e1QNGA2DoELJs6BfgMJJ2Wv7SAoxiycpN8ftNqGSkts7pRgXkm15pjfwhg5Uzv9a2192CZnNZZEetYvv",
  "key5": "4u9VJruUsXgpvoAPkpdhAQLtvPzN8m5UPniwg5LmiK5ExNuR1u3EbAU97FhUsy3eANfqqcZjkyeiaerBTPVxacq5",
  "key6": "5v5Z7xDufZ67ZvZ5M1AHfxuS6aTsLCMVUZxpQsEZtkQpHV2uMQQfgACuTpQXfCiZmFHRZJBg9Yj5qCxfNvK1Hvm2",
  "key7": "5FWiQ9D2Cz3EANMSS9LnkcGy7aCKAmCZmh346NGJY1P4a9qvqnWG3tbqrj6gSibi63eW8oT79LhfPRYJBscR74SQ",
  "key8": "3fdXF7AfFT5V5w6avQ1SfN7bPHPMRtQ6HBYUB45Bgtpm8h9sQaMQHvSQMPAQW1PCZd6rVstgQMB9dRYCMqVQx3HR",
  "key9": "5xxqmmTitm9ss7cNnGxxKwkoowqbT29YSMEw4Wc2uCDpJy4mo8PjRgRQqEdffMvQWYxtAwu8WRXD5WK3W4xrkvpC",
  "key10": "3z2zMxmaAzJa6KYUK8KteeeRbWCbrE79xbsuhBhwcQ8MJbeGfJaYmF7ZR9H7Cn5yGFFbm7YBeELXcp1P2fajMPjW",
  "key11": "3CXX21oTwsxbHronySugsbd4wHGUbRxbg2Nm3qFUdyDfDQ8sL93QkHZtzZ1nc9A3VxcNHpcoRHedxjgthZiEUYnG",
  "key12": "5UnXtJQ1upvjrxe43A8RXzPdBotj8bzeaMavgFUEYBGPGZwnzuA8MJZgVaxsy3ZUjzVayHtHfLcJ1NLGBJc1MYYn",
  "key13": "wQnTNEBwpjvsGag8hbcBS38F6GwxVx76at6sLXXbxjWDjvuBb2fR2G5TAeUrtD7NrRbkPXZ3BUVqUnZBwVkn5cN",
  "key14": "2YRJ15HcvHMwrf2zCqR71XVZcxgaBwYKz8e1adToXGign1J52cqNAFxrCGY5mo87jZrEtRQ6NB9MzeJzCmKuioc5",
  "key15": "EwjTZzTAJ5qY2q1x5yStRvh5UZrqQ2Y9oW8VDxRFNBJ5DTwvL3L4W9paWnfV9oBHuR3XH55CxStmWvwE72s8yYQ",
  "key16": "2Lc6nzTo7GittxwbvN5wz8g7oPa1tPiyUW1ZsGJiqwSGH4Aw8x6omi1hraHUUChchbToZyJPaVEvyLoUHEn7xxYv",
  "key17": "4B3KW6tVpwzNxanq52sgK88GVZAoVex98GQaB92MmgvaT8HPzsKcJCbWHJonPNsFEcNNYvTsxbP9kJ8MtH9wJq2Z",
  "key18": "4TMwrDk7gbuDFVQbaNyKE2PncFsdv5Lk5VuTbK8deKp69rpKqHz6fBetPv91czt4ZhmqQHpvJtqiwngJB8soRbFZ",
  "key19": "31JgL8oBuaSgcqXiPC85sJraZtFdhXFcxnM33drSndnc3wWMZzTLjmDKnePoLsjnJ81DkLpkPAcArQ7BS9BwQ29v",
  "key20": "2oB743kfwZSYSF8jTu8SNMw8cZxhVqPCMCNqtDN8uR21deBG7jxrPcVKfHZraUsK4wp4AypoEEgiQDxNYmocRyLQ",
  "key21": "r6yUN1Ay3FHZnNJAwJBhHzkyBKTb7aVWJU8jDWQfm3K6Sq3KYip2txTyKsc8hBwdBfoWBpEdwZrXJWZAUsdrwRZ",
  "key22": "8EZ9VXraingKjFVGxjUUGZ32y63LKfCe9bnjZYuMiXg7xHpantWjSuXj743cfm1YdzQDkpnNuFL4Viv5Pk9FTh5",
  "key23": "32CqzPDxjeTbbVxtqRa4X1SHw4i7UbYzMCErs4B1UnTZsn7jx1jjvL8dDcEdeqn8FZgH8ozSTN7HBsKxCRsyAnSU",
  "key24": "5VyMTtDvojsEKsoU6oQPbKVionZpMQsECc82dZZs5tYexdi5SaAXJYVeboi1WZ9JApHgjBuLDtqmyKzi3E8QMTHg",
  "key25": "4Y38go1GQWFcn1KBXU8m1t31DK5sP8aXwpWz9z3eAcmt5qSbKCfWUmpkE6RoNCZVKtkgFgcVyL9foND21ESpDSDs",
  "key26": "4HJx8YFN7ffgeu1i9xFx95thHzS1eBUZbKRAV1F97QEcKi8ge4bizMYMva7SmVm5rPKDLU6g9ikztGqQ6fqTBWPu",
  "key27": "2U4dhehdw3HhwSVxhZhuHLE9Vopsa7ZnFhNmXJMMBYkzKExJfcVKwNs9koyDFyraHXbT2EcMUxBnPr8BwPJnX7vU",
  "key28": "7JRMtBN5GcFw97kRF4T4ciE8uYLPMp4cnnAC5s6pEVkTb5Y5GMv3eMVEXeD5VmoyEs9QNYgRqhhf7PXAtiGm22s",
  "key29": "9qvBy1SuGSbiMbCJxfSLTw3yHHuG2oogbDwgW9GJk3rU7DtYLJ9xciiJXGUZm78nrVHkVsCLrgdodjedpn1Yjb2",
  "key30": "5qcJkvKemejLmpVvD7GKQP9DEJLvuBLA88xJM8WAMHxTRPNTppuifAeLJFoMckPww3pf8c1s52TRWCo6VJVFWHTa",
  "key31": "2jB8UPrBQhu1RiStE1w7zgFDu3cuZnpd4n3wEucjTkpMpFEH5eMcaCCmGbjoo4g8eRLSJc22qrRe5QH4MSH1fJyP",
  "key32": "58dm1hycwvn1nzJt7N5nuC1upxaKs9dbfiXMh9pjktBMfbr85GXQSpg6qFmMx23FfnJqtcLuYXjzCPi1dCBL9Cwb",
  "key33": "5Pzs8ePuy2TwLkfNLP5ZCJ5uPoJCcJbZmbPERCYwexPGFJprxBBA9BDFrLuqd3TobT2pL78TfpsX3amasnyDrYiL",
  "key34": "MVH8wsBsjdWbxwM5fYPwg2TZ6jiGvGFw6yuam85y7KtvCQmG3bbL3921CT9njbjwcbhzcF8NwPpat92T3yqAUso",
  "key35": "4w4uuzc11ovMh2QX9MX5vAuPDs3kk7Ut8D7oaA2uREWeXTBZcoq3Ebcga2fEnzkrPRskrQTQzRV8itH5hgoPcxAJ",
  "key36": "3YzRqNdqhACmDfDjdbgWPkzPjmSuCQpciDmus9X6eA3ByS3ifz43p2TvkoCRF7LEeQMgxqVh9zUAkk6rexLR1i8L",
  "key37": "29qpYqi3JnF2S2NrpEW2CcQMFkfLjnXkyawn9H2m36ND39xDYTkGpm9wkxvt2UkJwQMXQcs1ck99B29XksrHkRz4",
  "key38": "rECBL6JLHPA8gBDZjxcoja6QZh2zAo6Su1yuFxYrAjMy81ZymfPNFihkD3S8FwPr67hUpa4xSonhAEPkubb4maf",
  "key39": "3nhoDb3aEZyrPqPP2NKUU1BGwkZ8cfinXsccUbVVUpakQtyXRdQmafDJTNPQMwRzHebL8p3bEeWGsJVfDDwpCBDk",
  "key40": "61VMA8v6yy6s7JYq77AkoxXNi5ciem5jyKAqqXKnKVdjM4FRwXdb8mcLmeyzmpRUpzJf6TMDGKgHGiSqGGPL5PtP"
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
